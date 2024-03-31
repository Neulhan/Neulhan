---
title: JS 라이브러리 Rust로 재작성 후기
description:JS 코드를 Rust 로 바꾸는 과정은 생각보다는 간단했다. 몇가지 함정만 제외하면... Rust 의 크레이트를 WASM 환경에서 사용하려면 코드가 달라지는 경우도 있었고, 심지어 아예 쓸 수 없는 패키지도 있었다.
date: '2024-03-30'
categories:
    - rust
    - wasm
    - canvas
    - animation
published: true
---

Rust 를 새로 배우면서, "앞으로 Rust 를 어떻게 사용할까" 에 대해 고민을 해봤다.  
Rust 가 CPP 를 대체한다면, Rust 를 잘 활용할 수 있는 분야는 어디일까?

다양한 예시들을 살펴보면서 내가 관심을 가지게 되었던건 그래픽, 애니메이션 영역이었다.

특히 WASM 을 통한 웹 환경에서의 그래픽 작업에 대해서 관심이 생겼다.

![](https://neulhan-blog.s3.ap-northeast-2.amazonaws.com/images/js라이브러리-rust로-재작성-후기/snowy.gif)
예전에 동아리 해커톤에서 진행했던 프로젝트.  
HTML5 canvas 를 이용해서 눈꽃을 내려주는 프로젝트였다.

기존에는 JS 로 HTML5 canvas 를 조작했는데, 눈 송이 위치 계산을 Rust 로 하게 하면 성능이 좋아지지 않을까 하는 생각이 떠올랐다.

requestAnimationFrame 을 JS 에서 매번 호출하면서 반복되는 것 역시 Rust 가 WASM 으로 수행한다면 더 성능이 좋지 않을까 하는 생각이었다.

그래서 JS 코드를 전부 Rust-WASM 으로 재작성을 한 뒤 퍼포먼스를 비교해보기로 했다.

## 재작성 과정

JS 코드를 Rust 로 바꾸는 과정은 생각보다는 간단했다.  
몇가지 함정만 제외하면...

### 함정1 : Crate 미지원

Rust 의 크레이트를 WASM 환경에서 사용하려면 코드가 달라지는 경우도 있었고,  
심지어 아예 쓸 수 없는 패키지도 있었다.

예를 들어 랜덤 값을 뽑는데 사용하는 rand 크레이트는 WASM 전용 크레이트를 별도로 깔아줘야 했다.

심지어 tokio 같은 비동기 런타임은 WASM 에 대한 지원이 약해서 사용할 수 없는 수준이었다.

WASM 컴파일을 위해서 Rust 가 가진 장점을 많이 내려놓고 가야하는 느낌이었다.

### 함정2 : JS Function

또 JS function 을 가져다 쓰는 경우 코드가 지나치게 hacky 해지는 문제도 있었다.

Rust 만의 lifetime 개념을 JS Function 을 왔다갔다 하면서 사용하려면 이 역시 난이도가 급격히 상승한다.

내 Rust 실력이 부족한 이유도 있고, 익숙해지면 더 나아지긴 하겠지만..

Rust 를 막 배워서 바로 써먹어보려는 러린이 개발자들에게는 큰 진입장벽이 될 듯 싶다.

### 함정3 : 배포

아무래도 WASM 이 파일 형태가 css, js 처럼 익숙한 형태가 아니다보니 배포 과정에서도 어려움을 겪었다.

webpack 에서도 별도 설정을 이것저것 해줘야 하고, 빌드 결과로 나온 wasm 파일을 서빙하는데에도 고민해봐야 할 부분이 있다.

나 같은 경우 cdn 으로 one-line import 가 가능하게 하려했는데, wasm 파일을 다운로드 받는 방식을 어떻게 해야할지 막막했다.

자료도 잘 없다.. 결국 webpack 의 publicPath 를 cdn 주소로 설정해서 해결하긴 했다. 다만 이걸 cdn 이 아닌 npm install 로 사용하면 오버헤드가 얼마나 있을지..

Rust WASM 을 단순히 npm 에 배포하는건 아주아주 간단하긴 하다. wasm-pack 에서 간단하게 지원중.

그런데 간단한 배포로 원하는 결과를 가져올 수 없는 상황에서는 추상화가 많이 된 배포 환경이 답답하게 느껴질 수도 있다.

## 퍼포먼스 테스트 1

아무튼 역경을 해치며 코드를 작성한 후 테스트 시간.  
육안으로는 성능 확인이 잘 안 돼서 개발자도구의 퍼포먼스 탭을 통해서 확인해보았다.

requestAnimationFrame 마다 10개의 눈송이를 생성하는 방식으로 두 라이브러리를 모두 테스트해봤다.

requestAnimationFrame 은 기본적으로 1초에 60번 호출되지만, 사용하는 모니터 주사율에 맞춰서 실행된다고 한다.

내가 사용중인 모니터는 주사율이 60Hz 여서, 1초에 600개의 눈송이를 생성한다고 볼 수 있다.

**JS 초당 600 개 스폰**
![](https://neulhan-blog.s3.ap-northeast-2.amazonaws.com/images/js라이브러리-rust로-재작성-후기/2024-03-29-10-42-18.png)

**Rust-WASM 초당 600 개 스폰**
![](https://neulhan-blog.s3.ap-northeast-2.amazonaws.com/images/js라이브러리-rust로-재작성-후기/2024-03-29-10-59-17.png)

결과는 놀랍게도 JS 의 압승.
육안으로 볼 때 큰 차이가 없긴 해도 퍼포먼스 도구로 확인해보면 2배정도 차이가 난다.

**JS 의 퍼포먼스 상세**
![](https://neulhan-blog.s3.ap-northeast-2.amazonaws.com/images/js라이브러리-rust로-재작성-후기/2024-03-29-11-01-42.png)

**Rust-WASM 의 퍼포먼스 상세**
![](https://neulhan-blog.s3.ap-northeast-2.amazonaws.com/images/js라이브러리-rust로-재작성-후기/2024-03-29-11-02-19.png)

퍼포먼스 상세를 보면 WASM 을 불러와서 실행하는데 오버헤드가 상당히 많은 걸로 보인다.

![](https://neulhan-blog.s3.ap-northeast-2.amazonaws.com/images/js라이브러리-rust로-재작성-후기/2024-03-29-11-05-23.png)

왜 그런가 외국 러스트 커뮤니티를 돌면서 찾아보니,
js 와 wasm 사이에 상호작용이 많을 수록 오버헤드가 발생하기 쉽다고 한다.

```rust
pub fn animation_loop(&mut self) {
    let mut context = self.clone();
    let f = Rc::new(RefCell::new(None));
    let g = f.clone();
    *g.borrow_mut() = Some(Closure::new(move || {
        context.new_snow();
        context.animate();
        request_animation_frame(f.borrow().as_ref().unwrap());
    }));

    request_animation_frame(g.borrow().as_ref().unwrap());
}
```

requestAnimationFrame 을 대체할 수 있는 방법이 안 보여서 Rust 에서 가져와서 사용했었는데, 이게 문제인가 싶어서 몇가지 시도를 해봤다.

### 해결시도 1번 : rust loop 사용

처음 떠올린 해결책은 requestAnimationFrame 을 rust 의 loop 로 대체하기.

```rust
pub fn animation_loop_1(&mut self) {
    loop {
        self.new_snow();
        self.animate();
    }
}
```

그러나 무한 loop 가 실행을 blocking 하여 아예 첫 렌더링조차 되지 않았다.
![](https://neulhan-blog.s3.ap-northeast-2.amazonaws.com/images/js라이브러리-rust로-재작성-후기/2024-03-29-11-16-29.png)

런타임을 blocking 하지 않는 비동기 루프를 실행할 수 있는 방법이 있으면 좋겠다 싶었는데,

spawn_local 을 이용한 async loop 는 내 rust 실력이 부족해서 그런지 제대로 동작하지 않았다.

### 해결시도 2번 : requestAnimationFrame 을 rust 바깥으로 분리

마찬가지로 외국 러스트 커뮤니티에서 찾은 내용인데, js 에서 requestAnimationFrame 호출을 처리하고 rust 에서는 단일 render_frame 함수만 호출하는게 더 나을 수도 있다고 한다.

[rustwasm 에서 만든 예시](https://rustwasm.github.io/docs/book/game-of-life/implementing.html)에도 requestAnimationFrame 은 js 에서 호출하고 rust 는 해당 루프에 들어가는 단일 메서드를 구현하는 식으로 되어있다.

그래서 requestAnimationFrame 을 분리해봤다.  
class Snowy 는 rust 에서 작성된 struct 이다.  
마찬가지로 rust 쪽에서 구현된 render_frame 을 requestAnimationFrame 내부에서 호출한다.

```js
const snowy = new Snowy(config)
snowy.resize()
window.addEventListener('resize', () => {
    snowy.resize()
})
function animate() {
    snowy.render_frame()
    requestAnimationFrame(animate)
}
requestAnimationFrame(animate)
```

그러나 결과는 여전히 pure js 보다 느리다.

**Rust-WASM 초당 600개 스폰**
![](https://neulhan-blog.s3.ap-northeast-2.amazonaws.com/images/js라이브러리-rust로-재작성-후기/2024-03-29-14-11-25.png)

눈송이의 위치를 계산하는게 생각보다 무거운 작업이 아니라서 wasm 을 이용하는 오버헤드가 오히려 큰 것 같다.

## 퍼포먼스 테스트 2

더 계산할게 많은 상황에서 어떨까 해서 1초에 6,000개, 12,000개의 눈송이를 생성하도록 바꿔봤다.
이정도 되니 여유 없이 자원을 full 로 사용하는 듯 하다.

자원을 거의 다 쓰는건 비슷한데, 육안으로 봤을 때 rust-wasm 쪽 프레임 드랍이 확실히 더 크게 느껴졌다.

**JS 초당 6,000개 스폰**
![](https://neulhan-blog.s3.ap-northeast-2.amazonaws.com/images/js라이브러리-rust로-재작성-후기/2024-03-29-14-24-35.png)

**Rust-WASM 초당 6,000개 스폰**
![](https://neulhan-blog.s3.ap-northeast-2.amazonaws.com/images/js라이브러리-rust로-재작성-후기/2024-03-29-14-24-53.png)

**JS 초당 12,000개 스폰**
![](https://neulhan-blog.s3.ap-northeast-2.amazonaws.com/images/js라이브러리-rust로-재작성-후기/2024-03-29-14-32-43.png)

**Rust-WASM 초당 12,000개 스폰**
![](https://neulhan-blog.s3.ap-northeast-2.amazonaws.com/images/js라이브러리-rust로-재작성-후기/2024-03-29-14-33-49.png)

어떻게 봐도 현재 내가 구현할 수 있는 코드 안에서는 Rust 쪽의 퍼포먼스가 더 안 좋았다.

# 결론

계산이 복잡한 콘웨이의 game of life 의 경우, rust 가 더 나은 성능을 보일수도 있다고 한다. 다만 이 경우에도 규모를 크게 해야 더 나아지고, 작은 단위에서는 비슷하다고 한다.

이번에 테스트한 애니메이션처럼 단순한 계산을 하는 경우 JS-to-WASM 에서 오는 오버헤드가 더 큰 것으로 보인다. Rust-WASM 이 JS 보다 성능이 더 떨어지는 현상이 발생했다.

Rust WASM 진영의 canvas 애니메이션에 대한 활용은 아직은 좀 아쉬운 것 같다.  
결국은 requestAnimationFrame 을 대체할 수 있는 애니메이션 구현 방법이 Rust WASM 쪽에 필요하다고 생각... 하나, 3년전에도 같은 논의가 있었는데 아직 새로운 소식이 없는걸 보면...  
**canvas animtaion 은 웬만하면 JS 쓰세요.**

반면에 이미지 프로세싱 처럼, Blob 을 읽어서 처리하는 무거운 작업이라면 JS-to-WASM 오버헤드가 적어지고 WASM 이 더 나은성능을 보일까 싶은데 이것도 조만간 실험해서 포스팅을 해봐야겠다.

오늘 테스트에 사용했던 코드는 [깃허브 레포](https://github.com/Neulhan/FallingJS)에 배포해두었으니 혹시나 궁금하신 분이 계신다면 확인해보시길..

### REF

https://rustwasm.github.io/book/
https://www.reddit.com/r/rust/comments/jwjbcd/canvas_animation_in_wasm_or_js/
