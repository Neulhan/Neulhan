---
title: Langchain 맛보기
description: 귀여운 Langchain 을 새롭게 배우기 시작합니다.
date: '2023-11-08'
categories:
    - langchain
    - llm
published: true
---

생성형 AI 는 올해 아주 핫하다.
나는 개발자로 일하면서 꽤 오랜 시간동안 곁눈질 하다가 이제서야 LLM 을 제대로 들여다보고 있다.
LLM 어플리케이션을 만들기 위해 뒤늦게 기술들을 살펴보고 있는 경험을 공유한다.

### LLM

몇 달 전에 "ChatGPT Prompt Engineering for Developers" 라는 강의를 보면서 LLM 에 대한 개념은 좀 탑재했었다.
LLM 은 Large Language Model 의 약자이다.
LLM 은 쉽게 말해 다음에 나올 단어를 예측하는 거대한 언어모델이다.

AI 모델을 직접 훈련시키는 건 비용이 아주 많이 들고, 전문인력이 필요한 일이다.
그런데 LLM 은 prompt engineering 와 fine tuning 을 통해서 간단하게 AI 를 다룰 수 있게 해주었다.

다음에 나올 단어를 예측하는건 LLM 이 하고, 우리는 LLM 에게 맥락만 전달해주면 된다.

## Langchain

최근에는 langchain 에 관한 내용을 보았다.
langchain 은 LLM 을 이용해서 어플리케이션을 만들 수 있는 Chain 을 제공한다.

![langchain ecosystem](/images/langchain-ecosystem.png)

Langchain 은 public/private 한 데이터를 가져와서 사용자의 질문에 대답하거나, 특정 기능을 구현하는데 특화된 프레임워크이다.

### Agent

Agent 는 tool 을 직접 사용해서 작업을 수행한다.
예를 들어 "구글에서 검색하기" 라는 함수를 만들어서 툴로 쥐어주면,
자기가 알아서 필요할 때 구글에서 검색해서 결과를 가져다가 쓴다.

verbose 를 True 로 주면 자기가 무슨 생각 하면서 뭘 하고 있는지 줄줄이 읊는데 보고있으면 꽤나 신기하고 재미있다.

```python
tool_names = [...]
tools = load_tools(tool_names)

agent = initialize_agent(
    tools, llm, agent=AgentType.ZERO_SHOT_REACT_DESCRIPTION, verbose=True
)
```

### Token Limit

Token Limit 은 간단하게 말하면 LLM 이 한 번에 처리할 수 있는 용량에 대한 제한이다.  
Prompt 에 모든 정보를 다 넣으면 LLM 이 처리할 수 있는 한도를 넘기기 때문에 처리가 불가능하다.
그래서 전통적인 벡터 유사도에 따른 검색을 같이 활용한다.  
OpenAI 의 `gpt-3.5-turbo` 의 경우 4K 의 토큰 제한을 가지고 있다.

```python
{
    "error": {
        "message": "This model's maximum context length is 4097 tokens. However, your messages resulted in 9129 tokens. Please reduce the length of the messages.",
        "type": "invalid_request_error",
        "param": "messages",
        "code": "context_length_exceeded"
    }
}
```

### Vector Store

Vector Store 는 벡터 데이터베이스이다.  
전통적인 검색엔진을 구성할 때, 문서들을 벡터화 한 다음에 문서 사이의 벡터 유사도를 통해 유사도가 높은 문서를 추천한다.  
LLM 에 모든 문서를 parameter 로 보낼 수 없기 때문에, Vector Store 에서 한 번 검색한 결과를 LLM 에 넘겨주는 방식을 많이 사용한다.  
`Pinecone` 이라는 툴이 요즘은 대세인 듯 하다.

langchain 에서는 이 Vector Store 를 쓰는 걸 너무너무 쉽고 간단하게 만들어놨다. document 랑 embedding 만 넣으면 그냥 저장이 되고, 꺼내서 쓰는것도 너무 편하다.

```python
Pinecone.from_documents(
    documents=documents,
    embedding=embeddings,
    index_name="farmandgood-doc-index",
)
```

### Embedding

Vector Store 에 문서를 벡터화 해서 적재하는걸 Embedding 이라고 한다.  
이 과정도 주로 AI 모델을 통해 이루어진다.

질문에 알맞은 문서를 벡터 검색으로 찾아내기 위해서는 임베딩의 성능도 아주 중요하다. 따라서 LLM 어플리케이션 개발을 할 때는 임베딩 모델을 이것저것 바꿔가면서 테스트해보는 모양이다.  
가장 일반적인 Embedding 모델은 OpenAI 의 ada-02 라고 하는데, 문서를 1536 차원의 벡터로 임베딩해준다.

```python
embeddings = OpenAIEmbeddings(
    openai_api_key=os.environ.get("OPENAI_API_KEY")
)
```

### Text Splitting

1만자 분량의 문서가 있으면 이 문서를 하나의 문서로 Embedding 하지는 않는다.  
문서 안에서도 내용들이 다양하기에, 하나의 문서로 임베딩 되면 유사도 추천이 부정확해질것.  
그래서 문서를 잘라서 Embedding 하도록 하는걸 Text Splitting 이라고 한다.

1만자 분량의 문서를 1,000 자 단위로, 100 자의 share 영역을 두고 자르는 식이다.

```python
text_splitter = RecursiveCharacterTextSplitter(
    chunk_size=1000, chunk_overlap=100, separators=["\n\n", "\n", " ", ""]
)
```

## 다음 스텝

이제 Langchain 으로 직접 어플리케이션을 구현하면서 실제로 구현하면서 이슈가 되는 것들을 좀 살펴보자.  
Summarizing, Document QnA 같은 기능은 구현이 너무 쉬워서 이쪽 위주로 어플리케이션을 만들어봐도 좋을 것 같다.
