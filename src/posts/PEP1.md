---
emoji: 📐
title: PEP-1
description: PEP 는 Python 커뮤니티에서 Python 언어의 발전을 위해서 제안된 문서이다. PEP-1, PEP-8 처럼 번호가 붙어서 관리된다. PEP 가 무엇인지에 대해서도 PEP-1 을 통해서 정의되어있다.
date: '2023-11-15'
categories:
    - python
    - PEP
published: true
thumbnail: https://neulhan-blog.s3.ap-northeast-2.amazonaws.com/images/PEP1/2023-11-15-02-20-40.png.webp
---

![PEP-1 thumbnail](https://neulhan-blog.s3.ap-northeast-2.amazonaws.com/images/PEP1/2023-11-15-02-20-40.png.webp)
<br>
<br>

# PEP

-   PEP 는 Python 커뮤니티에서 Python 언어의 발전을 위해서 제안된 문서이다.
-   PEP-1, PEP-8 처럼 번호가 붙어서 관리된다.
-   PEP 가 무엇인지에 대해서도 PEP-1 을 통해서 정의되어있다.
-   이 글에서는 **PEP-1 의 내용에 기반해서 설명**
    -   다만 PEP-1 이 PEP 운영에 대한 너무 디테일한 내용도 많이 담고 있어서 좀 줄여서 정리했다.

그럼 한 번 PEP 에 대해서 알아봅시다.

<br>
<br>

## PEP 는 무엇인가

-   **Python Enhancement Proposal** (Python 개선 제안) 의 약자
-   Python 커뮤니티와 밀접하게 연결된 창구로서 Python 의 **새로운 기능을 설명하는 일종의 설계문서**.
-   주 대상은 CPython 인터프리터 개발자와, 이들이 선출한 운영위원회, 그리고 Python 언어 스펙을 구현하는 개발자.
-   그러나 Python 커뮤니티의 다른 부분에서도 규칙을 문서화하는데 사용될 수 있다.

<br>
<br>

## PEP 의 종류

1. **표준 PEP** :
    - Standard Track PEP
    - **Python 의 새로운 기능**이나 구현을 설명하는 문서
    - PEP-221(import as), PEP-343(with), PEP-586(Literal Types), **PEP-634**(match)
2. **정보 PEP** :
    - Information PEP
    - Python 커뮤니티에 **일반적인 지침 또는 정보**를 제공하는 문서.
    - 새 기능을 제안(Propose)하는게 아님.
    - 때때로 Python 커뮤니티의 합의를 거치지 않았을 수 있기에, **무시하는 것도 OK**.
    - **PEP-20**(Zen of Python), PEP-3333(WSGI), PEP-636(match turorial)
3. **프로세스 PEP**
    - Process PEP
    - Python 언어 그 자체보다는 주위 환경에 대한 내용 포함.
    - **많은 부분이 PEP 운영 자체에 대한 내용**.
    - 정보 PEP 와 달리 프로세스 PEP 내용은 무시하지 않는것이 좋을 것.
    - PEP-1(PEP purpose), **PEP-8**(Style Guide), PEP-676(PEP Infra Process)

<br>
<br>

## PEP workflow

PEP 가 실제로 등록되는 과정이다. 너무 디테일한 내용이 많아서 Flow 만 볼 수 있을 정도로 줄였다.

<br>

### 1. Python 에 대한 아이디어로 시작하기

-   PEP 프로세스는 Python에 대한 새로운 아이디어로 시작.
-   하나의 PEP에는 하나의 핵심 제안이나 새로운 아이디어가 포함되는 것이 좋다
-   지정된 스타일과 형식을 사용하여 PEP를 작성
-   적절한 포럼에서 토론을 이끌기
-   아이디어에 대한 커뮤니티의 공감대를 형성
-   일반적으로 [discuss.python](https://discuss.python.org/)의 [아이디어 카테고리에](https://discuss.python.org/c/ideas/6) 게시하는게 좋은 방법

<br>

### 2. PEP 제출

-   PEP 제출의 조건 : 조력자가 필요
    -   PEP 의 공동 저자 중 **Python 코어 개발자**가 있거나
    -   없다면 PEP 진행과정에 멘토의 역할을 해줄 **PEP 스폰서**를 선정해야한다
-   조력자의 검토 후 제안서를 GitHub 풀 리퀘스트를 통해 PEP 초안으로 제출

<br>

### 3. PEP 논의

-   PEP 번호가 할당되고 초안이 PEP 저장소에 커밋되면
-   해당 내용을 PEP 초안으로서 논의할 수 있는 토론 장소를 정해야함
-   PEP 작성자는 토론을 위한 합리적인 장소를 직접 선택 가능
-   최근에는 [discuss.python](https://discuss.python.org/)의 [PEP 카테고리](https://discuss.python.org/c/peps/19)가 대부분의 신규 PEP에게 선호됨
-   PEP 작성자는 검토를 위해 제출하기 전에 PEP에 대한 커뮤니티 피드백을 수집할 책임이 있다.

<br>

### 4. PEP 검토 및 결정

-   저자와 스폰서가 최종 검토 준비가 되었다고 판단하면, 운영 위원회 이슈를 개설할 수 있다.
-   이슈가 개설되면 **운영 위원회가 공식적으로 검토**를 시작.
-   PEP가 수락되면 구현을 완료하고 메인 소스코드에 통합되면서 "최종" 상태가 된다.

이 과정에 오면 PEP 가 정식적으로 Python 생태계의 일원이 된다.

<br>
<br>

## PEP 의 구성요소

일반적으로 각 PEP 에는 다음과 같은 부분/섹션이 포함되어야 함  
근데 없는 애들도 많다. 대략적인 구성요소라고 생각하고 봐두면 PEP 문서를 읽는데 도움이 된다.

-   Preamble
    -   PEP 번호, 짧은 제목, 이름, 각 작성자의 연락처 등의 메타데이터
-   Abstract
    -   해결하고자 하는 기술 문제에 대한 짧은 설명 (200자 이내)
-   Motivation
    -   Python 생태계를 변경하려는 동기.
    -   기존 Python 스펙이 해결하고자 하는 문제를 해결하기에 부적절한 이유를 명확하게 설명해야 함.
-   Rationale
    -   특정 설계 결정이 내려진 근거를 설명.
    -   커뮤니티 내에서 합의가 이뤄졌다는 증거를 제시할 수 있음.
-   Specification
    -   기술 사양은 새로운 언어 기능의 구문과 의미를 설명해야 한다.
-   Backwards Compatibility
    -   이전 버전과의 호환성.
-   Security Implications
    -   PEP 와 관련하여 보안에 대한 우려가 있는 경우, 이러한 우려를 명시적으로 작성
-   How to teach this?
    -   사용자에게 해당 PEP를 업무에 적용하는 방법을 가르치는 방법
-   Reference Implementation
    -   "최종(Final)" 상태가 되기 전에는 비어있을 수 있다.
    -   최종 구현에는 Python 언어 참조 또는 표준 라이브러리 참조에 적합한 테스트 코드와 문서가 포함되어야 함.
-   Rejected Ideas
    -   PEP를 논의하는 동안 수용되지 않은 다양한 아이디어
    -   거부된 아이디어는 왜 거부되었는지에 대한 이유와 함께 기록해야 함
    -   PEP에 대한 사고 과정을 기록하는 데 도움
    -   사람들이 후속 토론에서 동일한 거부된 아이디어를 다시 제기하는 것을 방지할 수 있다
-   Open Issues
    -   미해결 이슈 - PEP 에 대해 추가 논의가 필요한 아이디어
-   Footnotes
    -   각주
-   Copyright/license
    -   저작권/라이선스

<br>
<br>

# 정리

-   python 버전 업데이트 될 때, 업데이트 노트에 PEP 번호랑 링크가 있다.
-   PEP 문서를 잘 읽어보면 왜 이 기능이 나왔고, 어떻게 쓰는건지, 어떤 논의들이 있었는지도 알 수 있다는 것.
-   시간 날 때 좀 쉬워보이는 거 위주로 하나씩 읽어보면 코드리뷰에서 잘난척하기 좋다.
-   혹시 PEP 작성자가 되어 Python 커뮤니티에 기여해보고 싶다면 일단 [discuss.python](https://discuss.python.org/) 에서 커뮤니티에 참여해보자.
-   앞으로 흥미로운 PEP 들 묶어서 PEP 리뷰를 몇 개 써볼까 생각중.

끝!
