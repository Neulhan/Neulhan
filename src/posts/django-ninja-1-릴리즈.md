---
title: django-ninja 1.0 릴리즈
description: 내가 좋아하는 django-ninja 가 드디어 1.0 릴리즈. 뭐가 바뀌었는지 알아보자.
date: '2023-11-17'
categories:
    - django
    - django-ninja
published: true
thumbnail: https://neulhan-blog.s3.ap-northeast-2.amazonaws.com/images/django-ninja-1-릴리즈/2023-11-17-02-06-43.png
---

![django-ninja 1.0](https://neulhan-blog.s3.ap-northeast-2.amazonaws.com/images/django-ninja-1-릴리즈/2023-11-17-02-06-43.png)

# django-ninja 1.0 릴리즈

내가 좋아하는 django-ninja 가 드디어 1.0 릴리즈.  
뭐가 바뀌었는지 알아보자.

<br>

## v1.0 변경점

### Pydantic2 지원

Pydantic v2 가 러스트로 완전히 다시 작성되고, 이런 개선점이 있었다고 한다.

-   더 안전한 타입
-   더 좋은 확장성
-   더 좋은 성능

더불어 django-ninja 도 성능이 평균 10% 정도 좋아지고, parsing/serializing 관련에서는 거의 4배 가까이 좋아졌다고.

그리고 Pydantic 의 새 기능 덕에 resolve 과정에서 django request 객체를 쓸 수 있어졌다고 한다.

![pydantic context](https://neulhan-blog.s3.ap-northeast-2.amazonaws.com/images/django-ninja-1-릴리즈/2023-11-17-02-23-45.png)

<br>

### Schema.Meta

원래는 ~~비교적 Pydantic 스러운~~ `class Config` 문법을 사용해서 모델을 정의했는데,  
Django 의 ModelForm 과 유사한 `class Meta` 를 사용.

Django 치고는 너무 FastAPI 스러운 감이 있었는데 요런 디테일들 좋다.

![django-ninja Schema.Meta](https://neulhan-blog.s3.ap-northeast-2.amazonaws.com/images/django-ninja-1-릴리즈/2023-11-17-02-19-16.png)

<br>

### 짧고 깔끔한 파라미터 문법

Form 데이터를 받아오는 코드가 깔끔해졌다.

![django-ninja Shorter / cleaner parameters syntax](https://neulhan-blog.s3.ap-northeast-2.amazonaws.com/images/django-ninja-1-릴리즈/2023-11-17-02-47-06.png)

<br>

### Async auth 지원

authenticate 에 async 가 지원된다.  
전에 쓸 때는 async 로 안 썼어서 몰랐는데 안 됐었나보다. 아무튼 이제는 가능.

![django-ninja async auth](https://neulhan-blog.s3.ap-northeast-2.amazonaws.com/images/django-ninja-1-릴리즈/2023-11-17-02-48-33.png)

<br>

### CSRF 동작 변경

원래 이거 때문에 기존 cookie base 인증 쓰는 django 프로젝트에 django-ninja 를 올릴 경우 CSRF 가 꼬였었다.  
이렇게 바뀌면 앞으로는 문제 없을 듯.

<br>

### Docs

문서도 swagger 고정이 아니라 redoc 같은걸로 플러그인 끌어다 쓸 수 있게 변경

![django-ninja docs](https://neulhan-blog.s3.ap-northeast-2.amazonaws.com/images/django-ninja-1-릴리즈/2023-11-17-03-02-33.png)

<br>

### Router

라우터에 소소한 string path 지원.  
django 스러워졌다. 굿.

![django-ninja router](https://neulhan-blog.s3.ap-northeast-2.amazonaws.com/images/django-ninja-1-릴리즈/2023-11-17-03-03-03.png)

<br>

### Decorators

FastAPI 가 Response 객체를 리턴하는게 아니라, 직렬화 가능한 객체를 리턴하는 바람에 데코레이터를 위 처럼 쓰기 어려웠다.  
이번 패치로 이제 decorator_view 안에 넣어주면 쓸 수 있게 됨. 굿.
![django-ninja decorator](https://neulhan-blog.s3.ap-northeast-2.amazonaws.com/images/django-ninja-1-릴리즈/2023-11-17-03-16-35.png)

<br>

## 내 생각

버전 1로 올라온 것 치고는 별로 바뀐게 많지 않음. 아직 커뮤니티 파워가 좀 부족한 것 같다.  
그럼에도 버전 1.0 을 릴리즈한건 요걸 쓰고 있는 회사가 좀 있다는 것 때문이 아닐지. 흠.

소소하게 django 스러움 챙기고, 골치 아팠던 문제들도 해결된건 좋다.

개인적으로 아주 마음에 들고, 로앤굿에서도 잘 썼었던 만큼 잘 됐으면 좋겠는데 빨리 컸으면 좋겠다.

끝!

https://django-ninja.dev/whatsnew_v1/
