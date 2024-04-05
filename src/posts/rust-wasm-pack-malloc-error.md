---
emoji: 😱
title: rust wasm-pack malloc error
description: 아래 명령어로 rust 프로젝트를 번들링, npm 에 배포해서 사용해왔다. wasm-pack build --release --target bundler 근데 npm 배포 없이 빌드 결과물을 index.html 에서 불러와서 테스트하려니깐 아래와 같은 에러 발생
date: '2024-04-02'
categories:
    - rust
    - wasm
    - debugging
published: true
thumbnail: https://neulhan-blog.s3.ap-northeast-2.amazonaws.com/images/rust-wasm-pack-malloc-error/2024-04-03-09-41-53.png.webp
---

![](https://neulhan-blog.s3.ap-northeast-2.amazonaws.com/images/rust-wasm-pack-malloc-error/2024-04-03-09-41-53.png.webp)

아래 명령어로 rust 프로젝트를 번들링, npm 에 배포해서 사용해왔다.

```shell
wasm-pack build --release --target bundler
```

<br>

## 문제발생

근데 npm 배포 없이 빌드 결과물을 index.html 에서 불러와서 테스트하려니깐 아래와 같은 에러 발생

```
Uncaught TypeError: malloc is not a function
    at passStringToWasm0 (fallingrs_bg.js:144:21)
    at new FallingConfig (fallingrs_bg.js:261:22)
    at new FallingJS (index.js:19:7)
    at index.html:35:25
```

![](https://neulhan-blog.s3.ap-northeast-2.amazonaws.com/images/rust-wasm-pack-malloc-error/2024-04-02-11-04-34.png.webp)

<br>

?? 멀쩡히 되던놈이 왜이래?

![](https://neulhan-blog.s3.ap-northeast-2.amazonaws.com/images/rust-wasm-pack-malloc-error/2024-04-02-11-13-25.png.webp)

```js
export class FallingConfig {
    constructor(
        frequency...
    ) {
        const ptr0 = passStringToWasm0(
            color,
            wasm.__wbindgen_malloc,
            wasm.__wbindgen_realloc
        )
        const len0 = WASM_VECTOR_LEN
    }
}
```

`passStringToWasm0` 을 할 때 사용하는 `wasm.__wbindgen_malloc` 이 undefined 로 나오는 이슈이다.

<br>
<br>
<br>

## 해결

이것저것 해보다 아래 명령어로 바꿔주고 코드를 약간 수정하니 해결

### 1. 빌드 타겟 변경

```shell
wasm-pack build --dev --target web
```

<br>
<br>
<br>

wasm-pack build --target 옵션의 `bundler` 와 `web` 은 아래와 같은 차이가 있다고 한다.

| Option    | Usage             | Description                                                                                                                                                                         |
| --------- | ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `bundler` | Bundler           | Outputs JS that is suitable for interoperation with a Bundler like Webpack. You'll import the JS and the module key is specified in package.json. sideEffects: false is by default. |
| `web`     | Native in browser | Outputs JS that can be natively imported as an ES module in a browser, but the WebAssembly must be manually instantiated and loaded.                                                |

<br>
<br>

npm 에는 bundler 옵션으로 fallingrs 를 배포했었고,  
fallingjs 에서 dependency 로 가져와서 webpack 으로 번들링을 했기 때문에 잘 동작한 것이다.

그런데 번들링 없이 그냥 사용하려니 문제가 발생한 것.

<br>
<br>

### 2. 코드 수정

![](https://neulhan-blog.s3.ap-northeast-2.amazonaws.com/images/rust-wasm-pack-malloc-error/2024-04-03-09-03-14.png.webp)

wasm-pack 의 빌드 타겟이 web 인 경우 wasm 이 init 되는 걸 체크하고 이후에 wasm 코드를 사용해야한다.

빌드 타겟을 bundler 로 하고 webpack 으로 번들링 되는 경우에는 이와같은 init 코드 없이도 잘 동작했는데, 타겟 web 의 경우 init 이 필수인 것으로 보인다.
