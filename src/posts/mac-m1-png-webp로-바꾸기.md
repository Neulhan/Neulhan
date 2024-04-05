---
title: Webp 로 개인블로그 웹 퍼포먼스 개선하기
description: 개인 블로그 검색엔진최적화(SEO) 작업 내용
date: '2024-04-04'
categories:
    - design
    - art
published: false
thumbnail: https://neulhan-blog.s3.ap-northeast-2.amazonaws.com/images/2024-04-05-11-10-37.png.webp
---

내가 블로그에 올리는 사진은 보통 4K 모니터 스크린샷이다.

이미지가 선명해서 좋긴한데 용량이 크다보니, 웹페이지에서 이미지를 로딩하는데 시간이 오래 걸린다.

<br>
<br>

그래서 png 이미지를 webp 로 전부 교체하면서 결정.

webp 는 구글에서 만든, 웹에 최적화 되어있는 압축 이미지 포맷이다.

예전에 IE 가 살아있을 때는 호환성이 안 좋다 뭐다 했는데, 이젠 다 옛날 이야기.

<br>
<br>

## 작업 1. 기존 이미지 변경

일단 블로그에 이미 올라가있는 사진들을 모두 webp 로 바꿔주는 작업을 시작한다.

<br>
<br>

### webp 설치

작업을 위해서 Mac 터미널 에서 webp 를 설치해준다.

```shell
brew install webp
```

<br>
<br>

간단한 사용 방법은 아래와 같다.

```shell
cwebp -q 40 screenshot.png -o screenshot.webp
```

<br>

-q 옵션은 압축 퀄리티를 의미하는데, 보통 80% 를 권장한다고 한다. 근데 나는 블로그에 고화질 사진을 올릴 일이 없어서 (보통 개발 스크린샷니깐..) 40% 로 줬다.

-o 는 webp 컴파일 결과물의 파일명을 지정해준다.

<br>
<br>

내 블로그 이미지 파일 경로는 다음과 같아서,  
<img width="300", src="https://neulhan-blog.s3.ap-northeast-2.amazonaws.com/images/2024-04-05-11-32-24.png.webp">

<br>
<br>

src/posts/images 폴더 아래의 모든 디렉토리에 대해서,  
디렉토리 하위에 존재하는 파일을 모두 webp 로 바꿔주는 커맨드를 짜면 된다.

```bash
#!/bin/bash

p=$(pwd)

# src/posts/images 하위의 모든 디렉토리에 대해서 반복
for dir in  $p/src/posts/images/*/; do

 # 해당 디렉토리에 존재하는 파일 목록을 ls 로 불러와서
 # | 파이프로 xargs 에 보냅니다. 파일 하나하나마다 반복한다는 뜻
 # cwebp 를 실행합니다. 출력이 너무 많아서 quiet 옵션 사용.
 ls $dir | xargs -n 1 -I {} cwebp -q 40 $dir{} -o $dir{}.webp -quiet
done
```

-quiet 은 안 써주면 webp 로 컴파일 하는 결과를 구구절절 써줘서 조용히 하라고 넣어줬다.

<br>
<br>

결과는 아래와 같이 전부 webp 로 변환 완료

<img width="300", src="https://neulhan-blog.s3.ap-northeast-2.amazonaws.com/images/2024-04-05-12-43-08.png.webp">

<br>
<br>

블로그 글 markdown 에 박혀있는 .png 파일 이름은 vscode 에서 검색해서 한번에 싹 바꿔줬다.

<br>
<br>
<br>

## 작업 2. 새로 업로드하는 이미지 webp 로 바꾸기

이미 업로드 된 이미지를 webp로 바꿔줬으니, 앞으로 올릴 이미지도 webp 로 바꾸는 방법을 만들어본다.

tmp 라는 디렉토리의 파일 변경을 감지해서, 해당 이미지를 webp 로 바꾸고 S3 에 업로드하도록 스크립트를 구성했다.

파일 변경 감지는 fswatch 로 했는데 brew 로 설치해주면 된다.

```shell
brew install fswatch
```

<br>
<br>

파일 변경을 감지해서 해당 파일 경로를 ./script.sh 의 첫번째 인자로 넘겨주며 실행하는 커맨드를 package.json 에 등록했다.

```json
// package.json
{
    "name": "web",
    "version": "0.0.1",
    "scripts": {
        // fswatch
        "syncs3": "fswatch -0 -rt tmp | xargs -0 -n1 -I{} ./script.sh {}"
    },
    ...
}
```

<br>
<br>

아래는 script.sh 의 내용

```bash
# script.sh 내용

# $1 = "Thu Apr 4 15:41:33 2024 /Users/neulhan/Dev/blog/Neulhan/tmp/1.png"

file_path=$(echo "$1" | awk '{print $6}')
# file_path = /Users/neulhan/Dev/blog/Neulhan/tmp/1.png

preext="${file_path##\*.}"
# preext = png

if [ "$preext" == "webp" ]; then
    # 컴파일된 webp 가 새로 생성되는 경우에도 파일 변경을 감지하길래 분기
    exit 0
fi

# fswatch 가 파일이 삭제된 경우에도 감지하길래 분기
if [ -f $file_path ]; then
    newext=".webp"

    new_file_path=$file_path$newext
    # new_file_path=/Users/neulhan/Dev/blog/Neulhan/tmp/1.png.webp

    cwebp -q 40 $file_path -o $new_file_path -quiet
    # webp 로 컴파일

    rm $file_path
    # png 파일 삭제

    aws s3 sync tmp/ s3://neulhan-blog/images --profile=neulhan
    # s3 에 업로드

    sleep 5

    rm $new_file_path
    # webp 도 삭제
else
    echo "[deleted] $1 "
    exit 0
fi

```

<br>
<br>

이제 tmp 디렉토리에 새 png 파일이 들어오면,

1. png -> webp 로 바꿔줌
2. 기존 png 파일 삭제
3. S3 에 webp 업로드
4. webp 파일도 삭제

와 같은 과정이 자동으로 수행되게 해두었다.

webp 환경 구축하기
