---
title: WSGI 와 ASGI
description: 예전에 fastapi 소개글을 썼었는데, 그 과정에서 ASGI 에 흥미로움을 느껴서 정리해봤다. WSGI 와 ASGI 의 역사와 흥미로운 사실들을 알아보자.
date: '2023-11-13'
categories:
    - python
    - PEP
    - WSGI & ASGI
published: true
thumbnail: https://neulhan-blog.s3.ap-northeast-2.amazonaws.com/images/WSGI-와-ASGI/2023-11-13-00-00-32.png
---

# 개요

예전에 fastapi 소개글을 썼었는데, 그 과정에서 ASGI 에 흥미로움을 느껴서 정리해봤다.
WSGI 와 ASGI 의 역사와 흥미로운 사실들을 알아보자.

# WSGI

일단 WSGI 는 뭘까.

-   Web Server 와 Python Application 이 서로 통신하려면?
    -   여기서 말하는 Web Server 는 Web Application Server 가 아닌 Nginx, Apache HTTPd 와 같은 Web Server.
-   Java 진영에서는 서블렛 API가 Web Server 와 Java Application 을 연결해준다
-   Python 진영에는 한동안 공식 인터페이스가 없어서 mod_python, Medusa, FastCGI 등 일관되지 않은 방식을 사용
-   **Web Server 와 Python Application 이 소통하는 일관된 방식**이 필요하다는 인식하에 [PEP-333](https://peps.python.org/pep-0333/) 에서 Interface 를 정의
-   그것이 WSGI (Web Server Gateway Interface)
    -   2003.12.07 - 무려 python2 일 때 정의된 interface
    -   이후 python3 가 나와서 수정된 [PEP-3333](https://peps.python.org/pep-3333/) 이 바로 WSGI 라고 할 수 있다.
-   Django, Flask 등의 프레임워크는 WSGI 에 맞춰 인터페이스를 구현해놨다.

![WSGI](https://neulhan-blog.s3.ap-northeast-2.amazonaws.com/images/WSGI-와-ASGI/2023-11-13-00-32-49.png)

<br>

## WSGI 의 구조

아래는 WSGI 에 부합하는 Application 구현 예시이다.

```python
def simple_app(environ, start_response):
    status = '200 OK'
    response_headers = [('Content-type', 'text/plain')]
    start_response(status, response_headers)
    return [b"Hello world!\n"]
```

-   environ(dict), start_response 라는 2개의 positional argument 을 가진 callable 한 형식으로 어플리케이션을 구현
-   **request, response 를 묶어서 하나의 블럭 단위로 동작.**
-   Streaming 기능을 구현하려면 OS 에 넘기거나, 스레딩으로 처리. 블럭 전송이 지연되어서는 안 됨.

<br>
<br>

## WSGI 에 무슨 문제가 있었을까?

-   WSGI는 동기적으로 동작하는 Request-Response 구조를 가졌다.
-   **websocket 과 같은 long-live connection 스펙이 고려되지 않았다.**
-   2003년에 정의된 인터페이스라서, 2011년에 표준화된 WebSocket 을 지원할 수 없었던 것.
-   또한 python3.5 에서 async 지원이 본격화 되면서, 이에 맞는 새 규격이 필요해지기도 했다.

<br>
<br>

# ASGI 의 등장

-   위와 같은 WSGI 의 **한계를 해결하기 위해 ASGI 가 등장**
    -   2015년 11월 13일 : python3.5 가 나오면서 async await 추가
        -   python 진영이 본격적으로 비동기를 구현하면서 ASGI 의 발판이 마련됨
    -   2015년 12월 24일 : Django 측 개발자인 [Andrew Godwin](https://github.com/andrewgodwin) 이 asgiref 의 첫 커밋을 작성
    -   2018년 : [asgiref](https://github.com/django/asgiref) 레포에서 ASGI 버전 1을 릴리즈, ASGI 팀이 공식적으로 등장
-   재미있는 사실은 ASGI 를 정의하고 있는 곳이 django 조직에 있는 [asgiref](https://github.com/django/asgiref) 레포지토리라는 것. (Django 가 근본이야!)
-   **Asyncronous Server Gateway Interface**
    -   AWSGI 가 아닌 ASGI
    -   웹서버에 한정짓지 않겠다는 의지

![asgiref](https://neulhan-blog.s3.ap-northeast-2.amazonaws.com/images/WSGI-와-ASGI/2023-11-13-19-10-59.png)

<br>

![asgi](https://neulhan-blog.s3.ap-northeast-2.amazonaws.com/images/WSGI-와-ASGI/2023-11-12-23-53-00.png)

<br>

-   ASGI 는 WSGI 의 정신을 계승했다.
-   **WSGI 의 슈퍼셋으로 설계되었기 때문에, WSGI 어플리케이션도 ASGI 서버 내부에서 실행 가능**.
    -   이 경우 두 인터페이스 사이에 wrapper 가 필요 (asgiref 라이브러리에서 제공)
    -   async event loop 에서 WSGI 어플리케이션을 실행할 때는 threadpool 을 사용
-   덕분에 WSGI 를 사용하던 여러 프레임워크들도 ASGI로의 전환을 비교적 쉽게 가져갈 수 있었다.
    -   Django 는 3.0 부터 ASGI 를 지원하기 시작. (2019.12.02)
    -   동기적으로 작성된 수많은 코드를 async 로 변경할 수 없었기에 일단 [asgiref](https://github.com/django/asgiref) 에서 제공하는 `sync_to_async` 함수를 이용
    -   Django 4.1 부터는 `MyModel.objects.asave()` `MyModel.objecst.aget()` 과 같이 ORM 에서 직접 async 지원이 추가 (2022.08.03)

<br>

<br>

## ASGI 의 동작 방식

연결에 대한 세부정보(scope),  
클라이언트에서 메세지를 받아오는 부분(receive)과  
클라이언트에 메세지를 보내는 부분(send) 으로 구성되어있다.

![asgi work](https://neulhan-blog.s3.ap-northeast-2.amazonaws.com/images/WSGI-와-ASGI/2023-11-12-23-55-59.png)

<br>

덕분에 어플리케이션에 여러개의 이벤트들이 동시에 왔다갔다 할 수 있어졌고, 심지어 redis 큐와 같은 외부 트리거에서 이벤트 수신 대기도 가능.

<br>
<br>

## ASGI Server

ASGI 는 인터페이스. 실제로 동작할려면 구현된 서버가 필요.  
대표적으로 Uvicorn, Daphne, Hypercorn 이 있다.

### 1. Uvicorn

![uvicorn](https://neulhan-blog.s3.ap-northeast-2.amazonaws.com/images/WSGI-와-ASGI/2023-11-13-00-00-32.png)

<br>

-   uvicorn 은 ASGI 기반의 웹 서버 구현체.
-   현재 http1.1 과 websocket 을 지원한다.
-   약간 의아한건 uvicorn 이 아직 HTTP/2 를 지원하지 않는다는 것.
-   HTTP/2 지원은 같은 ASGI 생태계의 daphne 와 hypercorn 에게 양보하고, uvicorn 은 **견고함, 안정적임**을 지향하고 있다는 듯.
-   [Tom Christie](https://github.com/tomchristie) 가 encode Organization 에서 개발
    -   이 아저씨는 encode 에서 drf, uvicorn, starlette, apistar(FastAPI 의 전신) 개발을 주도.

#### uvloop

uvicorn 은 내부에서 uvloop 라는 것을 사용하는데, 이는 **python 의 asyncio 를 대체**함.  
nodejs 에서 사용하는 다중 플랫폼 비동기 I/O 라이브러리(**libuv**) 위에 **cython** 으로 구현됨.

```python
import uvloop

async def main():
    # Main entry-point.
    ...

uvloop.run(main())
```

<br>

벤치마크로 보면 다른 Python 비동기 프레임 워크보다 2~4배 이상 빠르다.  
벤치마크 성능상으로만 본다면, uvloop 의 성능은 Node 보다 빠르고, **Go 프로그램의 성능에 가까울 정도**.

![uvloop benchmark](https://neulhan-blog.s3.ap-northeast-2.amazonaws.com/images/WSGI-와-ASGI/2023-11-13-16-17-54.png)

<br>
<br>

### 2. Daphne

![daphne](https://neulhan-blog.s3.ap-northeast-2.amazonaws.com/images/WSGI-와-ASGI/2023-11-13-16-12-03.png)

-   Django 진영의 ASGI 서버
-   Django Channels 를 지원하기 위해서 구현됨.
    -   Django 진영 소속. Django 코어 개발자인 [Andrew Godwin](https://github.com/andrewgodwin) 이 대부분 구현.
    -   channels 도 이 아저씨가 만듬.
-   Http/2 를 지원

<br>
<br>

### 3. Hypercorn

![hypercorn](https://neulhan-blog.s3.ap-northeast-2.amazonaws.com/images/WSGI-와-ASGI/2023-11-13-16-12-43.png)

-   Flask 진영의 ASGI 서버
-   무려 Http/1.1, Http/2, **Http/3**를 지원
-   python 비동기 웹 프레임워크인 Quart 의 일부였다가, fork 된 후 자체적으로 개발중.
-   이 corn 은 유니콘이 아니라 무려 옥수수의 corn

<br>
<br>

## ASGI 기반의 프레임워크

ASGI 서버 위에 올려서 개발자들의 생산성을 올려주는 프레임워크들.  
보통 홀로서기하기보다 ASGI 서버 위에 올려서 많이 사용한다.

ASGI 라는 표준을 맞췄기 때문에, uvicorn, daphne, hypercorn 무엇을 쓰던 잘 돌아가긴 한다.  
다만 진영에 따라서 자기 진영의 ASGI 서버를 권장하기는 한다.

-   **FastAPI**
    -   Starlette 위에 Pydantic 을 버무린 프레임워크
    -   생산성의 측면에서 각광받아서 현재는 제일 주류 Python 웹 프레임워크가 아닌가 싶다.
    -   Starlette 의 영향을 받아서 uvicorn 과 친하다.
-   **Django Channels**
    -   Django 에서 WebSocket 을 지원한다.
    -   주로 Daphne 와 같이 쓴다.
    -   ASGI 를 고안한 [Andrew Godwin](https://github.com/andrewgodwin) 이 직접 만들어서 근본이 넘친다
-   **Quart**
    -   Flask 진영의 비동기 프레임워크
    -   같은 패밀리인 Hypercorn 과 같이 쓰길 권장하는 듯 하다.
-   **Starlette**
    -   FastAPI 의 근본이 되는 프레임워크.
    -   DRF, uvicorn 을 만든 [Tom Christie](https://github.com/tomchristie) 가 만들어서 근본력이 남다르다.
-   **Sanic**
    -   ASGI 서버를 내장하고 있는 프레임워크
    -   nginx 같은 웹서버에 바로 꽂을 수 있다는 점이 매력적
    -   ASGI 인터페이스를 준수하기 때문에 다른 ASGI 서버랑 같이 쓸 수도 있다
-   **Falcon**
    -   마이크로 서비스를 위한 미니멀리즘 프레임워크.
    -   나름의 미니멀한 매력이 있어서 쓰는 곳이 있다는 소문을 들었다.

<br>
<br>

# WSGI 에서 ASGI 로 바꿔야 하나요?

-   프로젝트를 새로 판다면, 처음부터 ASGI 서버와 함께 비동기로 구현을 하는 것이 좋을듯.
-   대신 잘못 쓰면 문제가 생길수도 있다. ~~(뭐든 안 그렇겠냐만은..)~~
    -   예전에 회사에서 FastAPI 를 쓰는데, 간헐적으로 요청이 끊어지는 현상 발생.
    -   ASGI 서버를 사용했지만, 함수들은 동기식으로 구현된 상태.
    -   레이턴시가 높은 API 일부를 async 로 바꾸었더니 바로 증상이 호전.
    -   결국 시간을 들여 모든 API 를 async 로 바꾸었더니 문제가 해결.
    -   ASGI 가 좋은 기술인건 맞지만 async 환경에 익숙하지 않다면 서버가 불안정해질수도 있다.
    -   ~~그 땐 잘 몰랐어서..~~
-   WSGI 로 잘 돌아가고 있다면, 성능향상을 목표로 ASGI 로 바꾸는 건 글쎄.
    -   이미 WSGI 환경에서 성능 최적화가 잘 되어있을 수 있음. (celery, caching 등)
    -   gunicorn 같은 잘 검증된 환경은 국밥같은 든든함과 견고함이 있다.
-   WebSocket 기능이 필요하다면?
    -   Django 에는 웹소켓 사용 부분은 ASGI, 기존 부분은 WSGI 로 각각 배포하는 방법도 있음.
    -   다만 정말 WebSocket 기능이 필요한지는 스펙 체크를 잘 해볼 것.
    -   WebSocket 이라는 스펙이 오버엔지니어링일 수도.
    -   작은 채팅 기능이라면 클라이언트에서 서버에 일정 시간마다 요청을 보내서 새 채팅이 있는지 확인하는 식으로도 구현이 가능했다

<br>
<br>

# 참고자료

-   https://peps.python.org/pep-3333/
-   https://github.com/django/asgiref
-   https://asgi.readthedocs.io/en/latest/introduction.html
-   https://www.uvicorn.org/
-   https://github.com/MagicStack/uvloop
-   https://www.fullstackpython.com/wsgi-servers.html
