---
title: Langchain 이 제시하는 UseCases
description: Langchain 공식문서에서 제시하는 유스케이스 다수. 1. 데이터 참조해서 답변하기 Langchain 을 이용하면 RAG 어플리케이션을 쉽게 구현 가능 존재하는 데이터 소스 (SQL, GraphQL, API, 파일데이터, 검색데이터 등등) 를 연결만 해주면, LLM 은 데이터에서
date: '2023-11-11'
categories:
    - langchain
    - llm
published: true
thumbnail: https://neulhan-blog.s3.ap-northeast-2.amazonaws.com/images/Langchain-이-제시하는-UseCases/2023-12-16-01-41-41.png.webp
---

Langchain 공식문서에서 제시하는 유스케이스 다수.

### 1. 데이터 참조해서 답변하기

-   Langchain 을 이용하면 RAG 어플리케이션을 쉽게 구현 가능
-   존재하는 데이터 소스 (SQL, GraphQL, API, 파일데이터, 검색데이터 등등) 를 연결만 해주면, LLM 은 데이터에서 찾아서 응답 가능
-   다만 보통 LLM 에 한 번에 넘겨줄 수 있는 토큰 수 제한이 있는데, Langchain 은 토큰 제한을 극복하는 방법들을 쉽게 제공
-   Phind 처럼 검색 데이터를 처리해서 응답을 줄 수도 있고, 로앤봇처럼 법령 데이터를 연결해서 제공할 수도 있음.
-   제공된 Document 를 기반으로 응답이 되기 때문에 할루시네이션이 줄어든다는 장점.

![RAG](https://neulhan-blog.s3.ap-northeast-2.amazonaws.com/images/Langchain-이-제시하는-UseCases/2023-12-16-01-41-41.png.webp)

### 2. API 와 상호작용

-   위의 RAG 와도 연결되는 부분이 있다.
-   사용자의 질문에 답변하기 위해서 API 를 호출할 수 있음.
-   그런데 검색보다 더 기대되는 부분은, 자연어 채팅으로 비행기표 예매와 같은 API 도 호출할 수 있게 된다는 것.
-   Agent 와 Tool 을 미리미리 만들어두면 가능하다.

### 3. 요약

-   Langchain 으로 요약 어플리케이션도 쉽게 구현가능
-   RAG 와 마찬가지로, 기본적으로 Langchain 이 Document 를 가져와서 LLM 과 상호작용 하는 과정의 인터페이스를 잘 만들어놨기 때문. 덕분에 여러 Data Source 를 쉽게 연결해서 붙일 수 있다.

### 4. 추출

-   자연어에서 데이터를 추출할 수 있다.
-   Langchain 에서 Output Parsing 관련해서도 인터페이스를 잘 만들어둠.
-   LLM 을 여러겹으로 쓸 경우 Output 을 구조화된 데이터로 만들어서 아래 계층으로 넘겨줘야하는데 이런 처리도 간편.

## REF

-   https://python.langchain.com/docs/use_cases/qa_structured/sql
