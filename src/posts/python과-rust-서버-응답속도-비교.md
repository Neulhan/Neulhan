---
title: python과 rust 서버 응답속도 비교
description: python과 rust 서버 응답속도 비교
date: '2023-11-23'
categories:
    - career
published: false
thumbnail:
---

python 과 rust 서버 응답속도 비교.
python 을 메인언어로 쓰다보면 늘 듣게되는 이야기. python 은 느리다.
느리면 얼마나 느린지를 대강 파악해두면 python 외의 대안이 필요한 경우를 구분할 수 있을 것.

techempower 라는 곳에서 진행하는 web framework benchmark 라는게 있다.
https://www.techempower.com/benchmarks/

가장 빠른 웹 프레임워크를 100% 의 속도로 봤을 때, 다른 프레임워크의 벤치마크 성능을 비교해뒀다.
상위권은 대부분 rust, c++, c# 진영의 프레임워크.
![techempower benchmark rust](https://neulhan-blog.s3.ap-northeast-2.amazonaws.com/images/python과-rust-서버-응답속도-비교/2023-12-17-18-40-02.png.webp)

다만 실제 서비스를 운영하는 개발자 입장에서 봤을 때는 비교가 확실하지 않은게,  
웹 프레임워크 뿐만 아니라 DB 클라이언트들도 올라와 있기 때문.

실제 서비스에서 fastapi-sqlalchemy, mern 스택 등등 여러 프레임워크를 조합해서 쓰는걸 생각하면 실제로 어느정도 차이가 나는지 가늠하기가 어렵다.

![techempower benchmark db client](https://neulhan-blog.s3.ap-northeast-2.amazonaws.com/images/python과-rust-서버-응답속도-비교/2023-12-17-18-43-57.png.webp)

그래서 자주 쓰는 프레임워크를 조합해서 직접 벤치마크를 해보면 앞으로 프레임워크 선택에 더 도움이 될 것 같아서 시도해봤다.  
사용하는 프레임워크 등등 차이가 생길 수 있는 부분이 너무 많아서, 비슷하게 구성하면 대강 이정도 차이가 나는구나 정도로 러프하게 진행.

rust 가 가장 빠르기 때문에, rust 에서 주류로 보이는 axum:sqlx 조합을 선택.  
python 진영에서는 요즘 가장 많이 선택되는 fastapi:sqlalchemy 조합을 선택.  
django-ninja 는 내가 좋아하고 자주 사용하기 때문에 그냥 같이 비교해보기로.

그래서 이번엔 rust[axum:sqlx], python[fastapi:sqlalchemy], python[django-ninja] 총 3개의 스택을 비교해보기로.

아래는 이번 벤치마크의 정보

## [Common]

환경은 AWS 클라우드 환경에서 진행.
벤치마크를 돌리고 내려야 하기 때문에 terraform 을 활용해서 AWS 에 인프라를 구성.

|                   |              |
| ----------------- | ------------ |
| provider          | aws-ec2      |
| database instance | rds:t3.micro |
| server instance   | ec2:t3.micro |

#### \*t3.micro

| cpu   | 기준선 | memory      | cost/hour  |
| ----- | ------ | ----------- | ---------- |
| 2vCPU | 10%    | 1GiB Memory | 0.0104 USD |

## [python]

|             |                   |
| ----------- | ----------------- |
| python      | 3.11.6            |
| http server | fastapi 0.104.1   |
| database    | sqlalchemy 2.0.23 |
| wsgi server | uvicorn 0.24.0    |
| serializer  | pydantic 2.5.2    |

## [rust]

|             |             |
| ----------- | ----------- |
| http server | axum 0.6.20 |
| database    | sqlx 0.7.3  |
