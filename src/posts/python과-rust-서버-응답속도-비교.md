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
사용하는 프레임워크 등등 차이가 생길 수 있는 부분이 너무 많아서, 비슷하게 구성하면 대강 이정도 차이가 나는구나 정도로 러프하게 진행.

## [Common]

|||  
|---|---|  
|database|mysql|
|cloud|aws-ec2 |
|server instance|t3.micro|

#### *t3.micro 
|cpu|기준선|memory|cost/hour|
|---|---|---|---|
|2vCPU|10%|1GiB Memory|0.0104 USD|

## [python]
|||  
|---|---|  
|python|3.11.6|
|http server|fastapi 0.104.1|  
|database|sqlalchemy 2.0.23|
|wsgi server|uvicorn 0.24.0|
|serializer|pydantic 2.5.2|

## [rust]
|||  
|---|---| 
|http server|axum 0.6.20|  
|database|sqlx 0.7.3|

