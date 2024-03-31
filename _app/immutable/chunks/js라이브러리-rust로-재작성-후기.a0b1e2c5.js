import{s as vs,n as Un}from"./scheduler.7c4769d9.js";import{S as Bs,i as _s,g as a,s as p,H as Vn,h as l,x as o,c as u,j as Xn,C as Yn,f as e,k as Zn,a as s}from"./index.cc557082.js";function As(Es){let i,$n=`Rust 를 새로 배우면서, “앞으로 Rust 를 어떻게 사용할까” 에 대해 고민을 해봤다.<br/>
Rust 가 CPP 를 대체한다면, Rust 를 잘 활용할 수 있는 분야는 어디일까?`,bt,C,dn="다양한 예시들을 살펴보면서 내가 관심을 가지게 되었던건 그래픽, 애니메이션 영역이었다.",yt,c,gn="특히 WASM 을 통한 웹 환경에서의 그래픽 작업에 대해서 관심이 생겼다.",Lt,k,te=`<img src="https://neulhan-blog.s3.ap-northeast-2.amazonaws.com/images/js%EB%9D%BC%EC%9D%B4%EB%B8%8C%EB%9F%AC%EB%A6%AC-rust%EB%A1%9C-%EC%9E%AC%EC%9E%91%EC%84%B1-%ED%9B%84%EA%B8%B0/snowy.gif"/>
예전에 동아리 해커톤에서 진행했던 프로젝트.<br/>
HTML5 canvas 를 이용해서 눈꽃을 내려주는 프로젝트였다.`,Tt,E,ne="기존에는 JS 로 HTML5 canvas 를 조작했는데, 눈 송이 위치 계산을 Rust 로 하게 하면 성능이 좋아지지 않을까 하는 생각이 떠올랐다.",St,x,ee="requestAnimationFrame 을 JS 에서 매번 호출하면서 반복되는 것 역시 Rust 가 WASM 으로 수행한다면 더 성능이 좋지 않을까 하는 생각이었다.",Dt,m,se="그래서 JS 코드를 전부 Rust-WASM 으로 재작성을 한 뒤 퍼포먼스를 비교해보기로 했다.",jt,f,ae="재작성 과정",qt,v,le=`JS 코드를 Rust 로 바꾸는 과정은 생각보다는 간단했다.<br/>
몇가지 함정만 제외하면…`,Rt,B,pe="함정1 : Crate 미지원",Ft,_,ue=`Rust 의 크레이트를 WASM 환경에서 사용하려면 코드가 달라지는 경우도 있었고,<br/>
심지어 아예 쓸 수 없는 패키지도 있었다.`,ht,A,oe="예를 들어 랜덤 값을 뽑는데 사용하는 rand 크레이트는 WASM 전용 크레이트를 별도로 깔아줘야 했다.",zt,w,ie="심지어 tokio 같은 비동기 런타임은 WASM 에 대한 지원이 약해서 사용할 수 없는 수준이었다.",Wt,r,Ce="WASM 컴파일을 위해서 Rust 가 가진 장점을 많이 내려놓고 가야하는 느낌이었다.",Jt,M,ce="함정2 : JS Function",Nt,P,ke="또 JS function 을 가져다 쓰는 경우 코드가 지나치게 hacky 해지는 문제도 있었다.",Gt,H,Ee="Rust 만의 lifetime 개념을 JS Function 을 왔다갔다 하면서 사용하려면 이 역시 난이도가 급격히 상승한다.",It,b,xe="내 Rust 실력이 부족한 이유도 있고, 익숙해지면 더 나아지긴 하겠지만..",Kt,y,me="Rust 를 막 배워서 바로 써먹어보려는 러린이 개발자들에게는 큰 진입장벽이 될 듯 싶다.",Ot,L,fe="함정3 : 배포",Qt,T,ve="아무래도 WASM 이 파일 형태가 css, js 처럼 익숙한 형태가 아니다보니 배포 과정에서도 어려움을 겪었다.",Ut,S,Be="webpack 에서도 별도 설정을 이것저것 해줘야 하고, 빌드 결과로 나온 wasm 파일을 서빙하는데에도 고민해봐야 할 부분이 있다.",Vt,D,_e="나 같은 경우 cdn 으로 one-line import 가 가능하게 하려했는데, wasm 파일을 다운로드 받는 방식을 어떻게 해야할지 막막했다.",Xt,j,Ae="자료도 잘 없다.. 결국 webpack 의 publicPath 를 cdn 주소로 설정해서 해결하긴 했다. 다만 이걸 cdn 이 아닌 npm install 로 사용하면 오버헤드가 얼마나 있을지..",Yt,q,we="Rust WASM 을 단순히 npm 에 배포하는건 아주아주 간단하긴 하다. wasm-pack 에서 간단하게 지원중.",Zt,R,re="그런데 간단한 배포로 원하는 결과를 가져올 수 없는 상황에서는 추상화가 많이 된 배포 환경이 답답하게 느껴질 수도 있다.",$t,F,Me="퍼포먼스 테스트 1",dt,h,Pe=`아무튼 역경을 해치며 코드를 작성한 후 테스트 시간.<br/>
육안으로는 성능 확인이 잘 안 돼서 개발자도구의 퍼포먼스 탭을 통해서 확인해보았다.`,gt,z,He="requestAnimationFrame 마다 10개의 눈송이를 생성하는 방식으로 두 라이브러리를 모두 테스트해봤다.",tn,W,be="requestAnimationFrame 은 기본적으로 1초에 60번 호출되지만, 사용하는 모니터 주사율에 맞춰서 실행된다고 한다.",nn,J,ye="내가 사용중인 모니터는 주사율이 60Hz 여서, 1초에 600개의 눈송이를 생성한다고 볼 수 있다.",en,N,Le='<strong>JS 초당 600 개 스폰</strong> <img src="https://neulhan-blog.s3.ap-northeast-2.amazonaws.com/images/js%EB%9D%BC%EC%9D%B4%EB%B8%8C%EB%9F%AC%EB%A6%AC-rust%EB%A1%9C-%EC%9E%AC%EC%9E%91%EC%84%B1-%ED%9B%84%EA%B8%B0/2024-03-29-10-42-18.png"/>',sn,G,Te='<strong>Rust-WASM 초당 600 개 스폰</strong> <img src="https://neulhan-blog.s3.ap-northeast-2.amazonaws.com/images/js%EB%9D%BC%EC%9D%B4%EB%B8%8C%EB%9F%AC%EB%A6%AC-rust%EB%A1%9C-%EC%9E%AC%EC%9E%91%EC%84%B1-%ED%9B%84%EA%B8%B0/2024-03-29-10-59-17.png"/>',an,I,Se=`결과는 놀랍게도 JS 의 압승.
육안으로 볼 때 큰 차이가 없긴 해도 퍼포먼스 도구로 확인해보면 2배정도 차이가 난다.`,ln,K,De='<strong>JS 의 퍼포먼스 상세</strong> <img src="https://neulhan-blog.s3.ap-northeast-2.amazonaws.com/images/js%EB%9D%BC%EC%9D%B4%EB%B8%8C%EB%9F%AC%EB%A6%AC-rust%EB%A1%9C-%EC%9E%AC%EC%9E%91%EC%84%B1-%ED%9B%84%EA%B8%B0/2024-03-29-11-01-42.png"/>',pn,O,je='<strong>Rust-WASM 의 퍼포먼스 상세</strong> <img src="https://neulhan-blog.s3.ap-northeast-2.amazonaws.com/images/js%EB%9D%BC%EC%9D%B4%EB%B8%8C%EB%9F%AC%EB%A6%AC-rust%EB%A1%9C-%EC%9E%AC%EC%9E%91%EC%84%B1-%ED%9B%84%EA%B8%B0/2024-03-29-11-02-19.png"/>',un,Q,qe="퍼포먼스 상세를 보면 WASM 을 불러와서 실행하는데 오버헤드가 상당히 많은 걸로 보인다.",on,U,Re='<img src="https://neulhan-blog.s3.ap-northeast-2.amazonaws.com/images/js%EB%9D%BC%EC%9D%B4%EB%B8%8C%EB%9F%AC%EB%A6%AC-rust%EB%A1%9C-%EC%9E%AC%EC%9E%91%EC%84%B1-%ED%9B%84%EA%B8%B0/2024-03-29-11-05-23.png"/>',Cn,V,Fe=`왜 그런가 외국 러스트 커뮤니티를 돌면서 찾아보니,
js 와 wasm 사이에 상호작용이 많을 수록 오버헤드가 발생하기 쉽다고 한다.`,cn,X,kn,xs=`<code class="language-rust"><span class="token keyword">pub</span> <span class="token keyword">fn</span> <span class="token function-definition function">animation_loop</span><span class="token punctuation">(</span><span class="token operator">&amp;</span><span class="token keyword">mut</span> <span class="token keyword">self</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">let</span> <span class="token keyword">mut</span> context <span class="token operator">=</span> <span class="token keyword">self</span><span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> f <span class="token operator">=</span> <span class="token class-name">Rc</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token class-name">RefCell</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token class-name">None</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> g <span class="token operator">=</span> f<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token operator">*</span>g<span class="token punctuation">.</span><span class="token function">borrow_mut</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token class-name">Some</span><span class="token punctuation">(</span><span class="token class-name">Closure</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token keyword">move</span> <span class="token closure-params"><span class="token closure-punctuation punctuation">|</span><span class="token closure-punctuation punctuation">|</span></span> <span class="token punctuation">&#123;</span>
        context<span class="token punctuation">.</span><span class="token function">new_snow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        context<span class="token punctuation">.</span><span class="token function">animate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">request_animation_frame</span><span class="token punctuation">(</span>f<span class="token punctuation">.</span><span class="token function">borrow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">as_ref</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">unwrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">request_animation_frame</span><span class="token punctuation">(</span>g<span class="token punctuation">.</span><span class="token function">borrow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">as_ref</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">unwrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`,En,Y,he="requestAnimationFrame 을 대체할 수 있는 방법이 안 보여서 Rust 에서 가져와서 사용했었는데, 이게 문제인가 싶어서 몇가지 시도를 해봤다.",xn,Z,ze="해결시도 1번 : rust loop 사용",mn,$,We="처음 떠올린 해결책은 requestAnimationFrame 을 rust 의 loop 로 대체하기.",fn,d,vn,ms=`<code class="language-rust"><span class="token keyword">pub</span> <span class="token keyword">fn</span> <span class="token function-definition function">animation_loop_1</span><span class="token punctuation">(</span><span class="token operator">&amp;</span><span class="token keyword">mut</span> <span class="token keyword">self</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">loop</span> <span class="token punctuation">&#123;</span>
        <span class="token keyword">self</span><span class="token punctuation">.</span><span class="token function">new_snow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">self</span><span class="token punctuation">.</span><span class="token function">animate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,Bn,g,Je=`그러나 무한 loop 가 실행을 blocking 하여 아예 첫 렌더링조차 되지 않았다.
<img src="https://neulhan-blog.s3.ap-northeast-2.amazonaws.com/images/js%EB%9D%BC%EC%9D%B4%EB%B8%8C%EB%9F%AC%EB%A6%AC-rust%EB%A1%9C-%EC%9E%AC%EC%9E%91%EC%84%B1-%ED%9B%84%EA%B8%B0/2024-03-29-11-16-29.png"/>`,_n,tt,Ne="런타임을 blocking 하지 않는 비동기 루프를 실행할 수 있는 방법이 있으면 좋겠다 싶었는데,",An,nt,Ge="spawn_local 을 이용한 async loop 는 내 rust 실력이 부족해서 그런지 제대로 동작하지 않았다.",wn,et,Ie="해결시도 2번 : requestAnimationFrame 을 rust 바깥으로 분리",rn,st,Ke="마찬가지로 외국 러스트 커뮤니티에서 찾은 내용인데, js 에서 requestAnimationFrame 호출을 처리하고 rust 에서는 단일 render_frame 함수만 호출하는게 더 나을 수도 있다고 한다.",Mn,at,Oe='<a href="https://rustwasm.github.io/docs/book/game-of-life/implementing.html" rel="nofollow">rustwasm 에서 만든 예시</a>에도 requestAnimationFrame 은 js 에서 호출하고 rust 는 해당 루프에 들어가는 단일 메서드를 구현하는 식으로 되어있다.',Pn,lt,Qe=`그래서 requestAnimationFrame 을 분리해봤다.<br/>
class Snowy 는 rust 에서 작성된 struct 이다.<br/>
마찬가지로 rust 쪽에서 구현된 render_frame 을 requestAnimationFrame 내부에서 호출한다.`,Hn,pt,bn,fs=`<code class="language-js"><span class="token keyword">const</span> snowy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Snowy</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span>
snowy<span class="token punctuation">.</span><span class="token function">resize</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'resize'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    snowy<span class="token punctuation">.</span><span class="token function">resize</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
<span class="token keyword">function</span> <span class="token function">animate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    snowy<span class="token punctuation">.</span><span class="token function">render_frame</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token function">requestAnimationFrame</span><span class="token punctuation">(</span>animate<span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
<span class="token function">requestAnimationFrame</span><span class="token punctuation">(</span>animate<span class="token punctuation">)</span></code>`,yn,ut,Ue="그러나 결과는 여전히 pure js 보다 느리다.",Ln,ot,Ve='<strong>Rust-WASM 초당 600개 스폰</strong> <img src="https://neulhan-blog.s3.ap-northeast-2.amazonaws.com/images/js%EB%9D%BC%EC%9D%B4%EB%B8%8C%EB%9F%AC%EB%A6%AC-rust%EB%A1%9C-%EC%9E%AC%EC%9E%91%EC%84%B1-%ED%9B%84%EA%B8%B0/2024-03-29-14-11-25.png"/>',Tn,it,Xe="눈송이의 위치를 계산하는게 생각보다 무거운 작업이 아니라서 wasm 을 이용하는 오버헤드가 오히려 큰 것 같다.",Sn,Ct,Ye="퍼포먼스 테스트 2",Dn,ct,Ze=`더 계산할게 많은 상황에서 어떨까 해서 1초에 6,000개, 12,000개의 눈송이를 생성하도록 바꿔봤다.
이정도 되니 여유 없이 자원을 full 로 사용하는 듯 하다.`,jn,kt,$e="자원을 거의 다 쓰는건 비슷한데, 육안으로 봤을 때 rust-wasm 쪽 프레임 드랍이 확실히 더 크게 느껴졌다.",qn,Et,de='<strong>JS 초당 6,000개 스폰</strong> <img src="https://neulhan-blog.s3.ap-northeast-2.amazonaws.com/images/js%EB%9D%BC%EC%9D%B4%EB%B8%8C%EB%9F%AC%EB%A6%AC-rust%EB%A1%9C-%EC%9E%AC%EC%9E%91%EC%84%B1-%ED%9B%84%EA%B8%B0/2024-03-29-14-24-35.png"/>',Rn,xt,ge='<strong>Rust-WASM 초당 6,000개 스폰</strong> <img src="https://neulhan-blog.s3.ap-northeast-2.amazonaws.com/images/js%EB%9D%BC%EC%9D%B4%EB%B8%8C%EB%9F%AC%EB%A6%AC-rust%EB%A1%9C-%EC%9E%AC%EC%9E%91%EC%84%B1-%ED%9B%84%EA%B8%B0/2024-03-29-14-24-53.png"/>',Fn,mt,ts='<strong>JS 초당 12,000개 스폰</strong> <img src="https://neulhan-blog.s3.ap-northeast-2.amazonaws.com/images/js%EB%9D%BC%EC%9D%B4%EB%B8%8C%EB%9F%AC%EB%A6%AC-rust%EB%A1%9C-%EC%9E%AC%EC%9E%91%EC%84%B1-%ED%9B%84%EA%B8%B0/2024-03-29-14-32-43.png"/>',hn,ft,ns='<strong>Rust-WASM 초당 12,000개 스폰</strong> <img src="https://neulhan-blog.s3.ap-northeast-2.amazonaws.com/images/js%EB%9D%BC%EC%9D%B4%EB%B8%8C%EB%9F%AC%EB%A6%AC-rust%EB%A1%9C-%EC%9E%AC%EC%9E%91%EC%84%B1-%ED%9B%84%EA%B8%B0/2024-03-29-14-33-49.png"/>',zn,vt,es="어떻게 봐도 현재 내가 구현할 수 있는 코드 안에서는 Rust 쪽의 퍼포먼스가 더 안 좋았다.",Wn,Bt,ss="결론",Jn,_t,as="계산이 복잡한 콘웨이의 game of life 의 경우, rust 가 더 나은 성능을 보일수도 있다고 한다. 다만 이 경우에도 규모를 크게 해야 더 나아지고, 작은 단위에서는 비슷하다고 한다.",Nn,At,ls="이번에 테스트한 애니메이션처럼 단순한 계산을 하는 경우 JS-to-WASM 에서 오는 오버헤드가 더 큰 것으로 보인다. Rust-WASM 이 JS 보다 성능이 더 떨어지는 현상이 발생했다.",Gn,wt,ps=`Rust WASM 진영의 canvas 애니메이션에 대한 활용은 아직은 좀 아쉬운 것 같다.<br/>
결국은 requestAnimationFrame 을 대체할 수 있는 애니메이션 구현 방법이 Rust WASM 쪽에 필요하다고 생각… 하나, 3년전에도 같은 논의가 있었는데 아직 새로운 소식이 없는걸 보면…<br/> <strong>canvas animtaion 은 웬만하면 JS 쓰세요.</strong>`,In,rt,us="반면에 이미지 프로세싱 처럼, Blob 을 읽어서 처리하는 무거운 작업이라면 JS-to-WASM 오버헤드가 적어지고 WASM 이 더 나은성능을 보일까 싶은데 이것도 조만간 실험해서 포스팅을 해봐야겠다.",Kn,Mt,os='오늘 테스트에 사용했던 코드는 <a href="https://github.com/Neulhan/FallingJS" rel="nofollow">깃허브 레포</a>에 배포해두었으니 혹시나 궁금하신 분이 계신다면 확인해보시길..',On,Pt,is="REF",Qn,Ht,Cs='<a href="https://rustwasm.github.io/book/" rel="nofollow">https://rustwasm.github.io/book/</a> <a href="https://www.reddit.com/r/rust/comments/jwjbcd/canvas_animation_in_wasm_or_js/" rel="nofollow">https://www.reddit.com/r/rust/comments/jwjbcd/canvas_animation_in_wasm_or_js/</a>';return{c(){i=a("p"),i.innerHTML=$n,bt=p(),C=a("p"),C.textContent=dn,yt=p(),c=a("p"),c.textContent=gn,Lt=p(),k=a("p"),k.innerHTML=te,Tt=p(),E=a("p"),E.textContent=ne,St=p(),x=a("p"),x.textContent=ee,Dt=p(),m=a("p"),m.textContent=se,jt=p(),f=a("h2"),f.textContent=ae,qt=p(),v=a("p"),v.innerHTML=le,Rt=p(),B=a("h3"),B.textContent=pe,Ft=p(),_=a("p"),_.innerHTML=ue,ht=p(),A=a("p"),A.textContent=oe,zt=p(),w=a("p"),w.textContent=ie,Wt=p(),r=a("p"),r.textContent=Ce,Jt=p(),M=a("h3"),M.textContent=ce,Nt=p(),P=a("p"),P.textContent=ke,Gt=p(),H=a("p"),H.textContent=Ee,It=p(),b=a("p"),b.textContent=xe,Kt=p(),y=a("p"),y.textContent=me,Ot=p(),L=a("h3"),L.textContent=fe,Qt=p(),T=a("p"),T.textContent=ve,Ut=p(),S=a("p"),S.textContent=Be,Vt=p(),D=a("p"),D.textContent=_e,Xt=p(),j=a("p"),j.textContent=Ae,Yt=p(),q=a("p"),q.textContent=we,Zt=p(),R=a("p"),R.textContent=re,$t=p(),F=a("h2"),F.textContent=Me,dt=p(),h=a("p"),h.innerHTML=Pe,gt=p(),z=a("p"),z.textContent=He,tn=p(),W=a("p"),W.textContent=be,nn=p(),J=a("p"),J.textContent=ye,en=p(),N=a("p"),N.innerHTML=Le,sn=p(),G=a("p"),G.innerHTML=Te,an=p(),I=a("p"),I.textContent=Se,ln=p(),K=a("p"),K.innerHTML=De,pn=p(),O=a("p"),O.innerHTML=je,un=p(),Q=a("p"),Q.textContent=qe,on=p(),U=a("p"),U.innerHTML=Re,Cn=p(),V=a("p"),V.textContent=Fe,cn=p(),X=a("pre"),kn=new Vn(!1),En=p(),Y=a("p"),Y.textContent=he,xn=p(),Z=a("h3"),Z.textContent=ze,mn=p(),$=a("p"),$.textContent=We,fn=p(),d=a("pre"),vn=new Vn(!1),Bn=p(),g=a("p"),g.innerHTML=Je,_n=p(),tt=a("p"),tt.textContent=Ne,An=p(),nt=a("p"),nt.textContent=Ge,wn=p(),et=a("h3"),et.textContent=Ie,rn=p(),st=a("p"),st.textContent=Ke,Mn=p(),at=a("p"),at.innerHTML=Oe,Pn=p(),lt=a("p"),lt.innerHTML=Qe,Hn=p(),pt=a("pre"),bn=new Vn(!1),yn=p(),ut=a("p"),ut.textContent=Ue,Ln=p(),ot=a("p"),ot.innerHTML=Ve,Tn=p(),it=a("p"),it.textContent=Xe,Sn=p(),Ct=a("h2"),Ct.textContent=Ye,Dn=p(),ct=a("p"),ct.textContent=Ze,jn=p(),kt=a("p"),kt.textContent=$e,qn=p(),Et=a("p"),Et.innerHTML=de,Rn=p(),xt=a("p"),xt.innerHTML=ge,Fn=p(),mt=a("p"),mt.innerHTML=ts,hn=p(),ft=a("p"),ft.innerHTML=ns,zn=p(),vt=a("p"),vt.textContent=es,Wn=p(),Bt=a("h1"),Bt.textContent=ss,Jn=p(),_t=a("p"),_t.textContent=as,Nn=p(),At=a("p"),At.textContent=ls,Gn=p(),wt=a("p"),wt.innerHTML=ps,In=p(),rt=a("p"),rt.textContent=us,Kn=p(),Mt=a("p"),Mt.innerHTML=os,On=p(),Pt=a("h3"),Pt.textContent=is,Qn=p(),Ht=a("p"),Ht.innerHTML=Cs,this.h()},l(t){i=l(t,"P",{"data-svelte-h":!0}),o(i)!=="svelte-onyb0w"&&(i.innerHTML=$n),bt=u(t),C=l(t,"P",{"data-svelte-h":!0}),o(C)!=="svelte-zncceo"&&(C.textContent=dn),yt=u(t),c=l(t,"P",{"data-svelte-h":!0}),o(c)!=="svelte-3y9ruy"&&(c.textContent=gn),Lt=u(t),k=l(t,"P",{"data-svelte-h":!0}),o(k)!=="svelte-i15rqu"&&(k.innerHTML=te),Tt=u(t),E=l(t,"P",{"data-svelte-h":!0}),o(E)!=="svelte-15oi1g2"&&(E.textContent=ne),St=u(t),x=l(t,"P",{"data-svelte-h":!0}),o(x)!=="svelte-hmk0ig"&&(x.textContent=ee),Dt=u(t),m=l(t,"P",{"data-svelte-h":!0}),o(m)!=="svelte-10d5amg"&&(m.textContent=se),jt=u(t),f=l(t,"H2",{"data-svelte-h":!0}),o(f)!=="svelte-1kecb4n"&&(f.textContent=ae),qt=u(t),v=l(t,"P",{"data-svelte-h":!0}),o(v)!=="svelte-1eer3l4"&&(v.innerHTML=le),Rt=u(t),B=l(t,"H3",{"data-svelte-h":!0}),o(B)!=="svelte-ezp3tv"&&(B.textContent=pe),Ft=u(t),_=l(t,"P",{"data-svelte-h":!0}),o(_)!=="svelte-1g4w0m7"&&(_.innerHTML=ue),ht=u(t),A=l(t,"P",{"data-svelte-h":!0}),o(A)!=="svelte-15g7dqy"&&(A.textContent=oe),zt=u(t),w=l(t,"P",{"data-svelte-h":!0}),o(w)!=="svelte-181wnx8"&&(w.textContent=ie),Wt=u(t),r=l(t,"P",{"data-svelte-h":!0}),o(r)!=="svelte-mnt3yy"&&(r.textContent=Ce),Jt=u(t),M=l(t,"H3",{"data-svelte-h":!0}),o(M)!=="svelte-9d2k8i"&&(M.textContent=ce),Nt=u(t),P=l(t,"P",{"data-svelte-h":!0}),o(P)!=="svelte-1ofb5lq"&&(P.textContent=ke),Gt=u(t),H=l(t,"P",{"data-svelte-h":!0}),o(H)!=="svelte-1jyl9nc"&&(H.textContent=Ee),It=u(t),b=l(t,"P",{"data-svelte-h":!0}),o(b)!=="svelte-1th5es"&&(b.textContent=xe),Kt=u(t),y=l(t,"P",{"data-svelte-h":!0}),o(y)!=="svelte-73ft5o"&&(y.textContent=me),Ot=u(t),L=l(t,"H3",{"data-svelte-h":!0}),o(L)!=="svelte-1eso9ia"&&(L.textContent=fe),Qt=u(t),T=l(t,"P",{"data-svelte-h":!0}),o(T)!=="svelte-5eibwz"&&(T.textContent=ve),Ut=u(t),S=l(t,"P",{"data-svelte-h":!0}),o(S)!=="svelte-am9ji9"&&(S.textContent=Be),Vt=u(t),D=l(t,"P",{"data-svelte-h":!0}),o(D)!=="svelte-121jawa"&&(D.textContent=_e),Xt=u(t),j=l(t,"P",{"data-svelte-h":!0}),o(j)!=="svelte-jxi8ge"&&(j.textContent=Ae),Yt=u(t),q=l(t,"P",{"data-svelte-h":!0}),o(q)!=="svelte-1d9gouu"&&(q.textContent=we),Zt=u(t),R=l(t,"P",{"data-svelte-h":!0}),o(R)!=="svelte-1m09njo"&&(R.textContent=re),$t=u(t),F=l(t,"H2",{"data-svelte-h":!0}),o(F)!=="svelte-1v1srbx"&&(F.textContent=Me),dt=u(t),h=l(t,"P",{"data-svelte-h":!0}),o(h)!=="svelte-12svkjn"&&(h.innerHTML=Pe),gt=u(t),z=l(t,"P",{"data-svelte-h":!0}),o(z)!=="svelte-1niyqew"&&(z.textContent=He),tn=u(t),W=l(t,"P",{"data-svelte-h":!0}),o(W)!=="svelte-wbgpl0"&&(W.textContent=be),nn=u(t),J=l(t,"P",{"data-svelte-h":!0}),o(J)!=="svelte-sxl6mu"&&(J.textContent=ye),en=u(t),N=l(t,"P",{"data-svelte-h":!0}),o(N)!=="svelte-1lv8mlb"&&(N.innerHTML=Le),sn=u(t),G=l(t,"P",{"data-svelte-h":!0}),o(G)!=="svelte-kr0qok"&&(G.innerHTML=Te),an=u(t),I=l(t,"P",{"data-svelte-h":!0}),o(I)!=="svelte-71aqcl"&&(I.textContent=Se),ln=u(t),K=l(t,"P",{"data-svelte-h":!0}),o(K)!=="svelte-1qby73c"&&(K.innerHTML=De),pn=u(t),O=l(t,"P",{"data-svelte-h":!0}),o(O)!=="svelte-k0riyz"&&(O.innerHTML=je),un=u(t),Q=l(t,"P",{"data-svelte-h":!0}),o(Q)!=="svelte-vc9w2q"&&(Q.textContent=qe),on=u(t),U=l(t,"P",{"data-svelte-h":!0}),o(U)!=="svelte-79iimq"&&(U.innerHTML=Re),Cn=u(t),V=l(t,"P",{"data-svelte-h":!0}),o(V)!=="svelte-18rmwhk"&&(V.textContent=Fe),cn=u(t),X=l(t,"PRE",{class:!0});var n=Xn(X);kn=Yn(n,!1),n.forEach(e),En=u(t),Y=l(t,"P",{"data-svelte-h":!0}),o(Y)!=="svelte-f8zqqy"&&(Y.textContent=he),xn=u(t),Z=l(t,"H3",{"data-svelte-h":!0}),o(Z)!=="svelte-1pti08i"&&(Z.textContent=ze),mn=u(t),$=l(t,"P",{"data-svelte-h":!0}),o($)!=="svelte-b04t39"&&($.textContent=We),fn=u(t),d=l(t,"PRE",{class:!0});var cs=Xn(d);vn=Yn(cs,!1),cs.forEach(e),Bn=u(t),g=l(t,"P",{"data-svelte-h":!0}),o(g)!=="svelte-1qzrf56"&&(g.innerHTML=Je),_n=u(t),tt=l(t,"P",{"data-svelte-h":!0}),o(tt)!=="svelte-1i9gf7m"&&(tt.textContent=Ne),An=u(t),nt=l(t,"P",{"data-svelte-h":!0}),o(nt)!=="svelte-1qgyyw8"&&(nt.textContent=Ge),wn=u(t),et=l(t,"H3",{"data-svelte-h":!0}),o(et)!=="svelte-15yqixp"&&(et.textContent=Ie),rn=u(t),st=l(t,"P",{"data-svelte-h":!0}),o(st)!=="svelte-b46mkv"&&(st.textContent=Ke),Mn=u(t),at=l(t,"P",{"data-svelte-h":!0}),o(at)!=="svelte-1g4onkf"&&(at.innerHTML=Oe),Pn=u(t),lt=l(t,"P",{"data-svelte-h":!0}),o(lt)!=="svelte-1ymiyk8"&&(lt.innerHTML=Qe),Hn=u(t),pt=l(t,"PRE",{class:!0});var ks=Xn(pt);bn=Yn(ks,!1),ks.forEach(e),yn=u(t),ut=l(t,"P",{"data-svelte-h":!0}),o(ut)!=="svelte-1angdbr"&&(ut.textContent=Ue),Ln=u(t),ot=l(t,"P",{"data-svelte-h":!0}),o(ot)!=="svelte-fxgawh"&&(ot.innerHTML=Ve),Tn=u(t),it=l(t,"P",{"data-svelte-h":!0}),o(it)!=="svelte-ots1ko"&&(it.textContent=Xe),Sn=u(t),Ct=l(t,"H2",{"data-svelte-h":!0}),o(Ct)!=="svelte-1souyj8"&&(Ct.textContent=Ye),Dn=u(t),ct=l(t,"P",{"data-svelte-h":!0}),o(ct)!=="svelte-qxo7es"&&(ct.textContent=Ze),jn=u(t),kt=l(t,"P",{"data-svelte-h":!0}),o(kt)!=="svelte-1t1ldy"&&(kt.textContent=$e),qn=u(t),Et=l(t,"P",{"data-svelte-h":!0}),o(Et)!=="svelte-1k44r92"&&(Et.innerHTML=de),Rn=u(t),xt=l(t,"P",{"data-svelte-h":!0}),o(xt)!=="svelte-4mceb6"&&(xt.innerHTML=ge),Fn=u(t),mt=l(t,"P",{"data-svelte-h":!0}),o(mt)!=="svelte-18dodmb"&&(mt.innerHTML=ts),hn=u(t),ft=l(t,"P",{"data-svelte-h":!0}),o(ft)!=="svelte-ri67hm"&&(ft.innerHTML=ns),zn=u(t),vt=l(t,"P",{"data-svelte-h":!0}),o(vt)!=="svelte-nh0e3z"&&(vt.textContent=es),Wn=u(t),Bt=l(t,"H1",{"data-svelte-h":!0}),o(Bt)!=="svelte-1cwk1h0"&&(Bt.textContent=ss),Jn=u(t),_t=l(t,"P",{"data-svelte-h":!0}),o(_t)!=="svelte-h9urqj"&&(_t.textContent=as),Nn=u(t),At=l(t,"P",{"data-svelte-h":!0}),o(At)!=="svelte-1hkwsgu"&&(At.textContent=ls),Gn=u(t),wt=l(t,"P",{"data-svelte-h":!0}),o(wt)!=="svelte-67a3el"&&(wt.innerHTML=ps),In=u(t),rt=l(t,"P",{"data-svelte-h":!0}),o(rt)!=="svelte-bna3im"&&(rt.textContent=us),Kn=u(t),Mt=l(t,"P",{"data-svelte-h":!0}),o(Mt)!=="svelte-v6qoz4"&&(Mt.innerHTML=os),On=u(t),Pt=l(t,"H3",{"data-svelte-h":!0}),o(Pt)!=="svelte-11131cl"&&(Pt.textContent=is),Qn=u(t),Ht=l(t,"P",{"data-svelte-h":!0}),o(Ht)!=="svelte-1b3rfvw"&&(Ht.innerHTML=Cs),this.h()},h(){kn.a=null,Zn(X,"class","language-rust"),vn.a=null,Zn(d,"class","language-rust"),bn.a=null,Zn(pt,"class","language-js")},m(t,n){s(t,i,n),s(t,bt,n),s(t,C,n),s(t,yt,n),s(t,c,n),s(t,Lt,n),s(t,k,n),s(t,Tt,n),s(t,E,n),s(t,St,n),s(t,x,n),s(t,Dt,n),s(t,m,n),s(t,jt,n),s(t,f,n),s(t,qt,n),s(t,v,n),s(t,Rt,n),s(t,B,n),s(t,Ft,n),s(t,_,n),s(t,ht,n),s(t,A,n),s(t,zt,n),s(t,w,n),s(t,Wt,n),s(t,r,n),s(t,Jt,n),s(t,M,n),s(t,Nt,n),s(t,P,n),s(t,Gt,n),s(t,H,n),s(t,It,n),s(t,b,n),s(t,Kt,n),s(t,y,n),s(t,Ot,n),s(t,L,n),s(t,Qt,n),s(t,T,n),s(t,Ut,n),s(t,S,n),s(t,Vt,n),s(t,D,n),s(t,Xt,n),s(t,j,n),s(t,Yt,n),s(t,q,n),s(t,Zt,n),s(t,R,n),s(t,$t,n),s(t,F,n),s(t,dt,n),s(t,h,n),s(t,gt,n),s(t,z,n),s(t,tn,n),s(t,W,n),s(t,nn,n),s(t,J,n),s(t,en,n),s(t,N,n),s(t,sn,n),s(t,G,n),s(t,an,n),s(t,I,n),s(t,ln,n),s(t,K,n),s(t,pn,n),s(t,O,n),s(t,un,n),s(t,Q,n),s(t,on,n),s(t,U,n),s(t,Cn,n),s(t,V,n),s(t,cn,n),s(t,X,n),kn.m(xs,X),s(t,En,n),s(t,Y,n),s(t,xn,n),s(t,Z,n),s(t,mn,n),s(t,$,n),s(t,fn,n),s(t,d,n),vn.m(ms,d),s(t,Bn,n),s(t,g,n),s(t,_n,n),s(t,tt,n),s(t,An,n),s(t,nt,n),s(t,wn,n),s(t,et,n),s(t,rn,n),s(t,st,n),s(t,Mn,n),s(t,at,n),s(t,Pn,n),s(t,lt,n),s(t,Hn,n),s(t,pt,n),bn.m(fs,pt),s(t,yn,n),s(t,ut,n),s(t,Ln,n),s(t,ot,n),s(t,Tn,n),s(t,it,n),s(t,Sn,n),s(t,Ct,n),s(t,Dn,n),s(t,ct,n),s(t,jn,n),s(t,kt,n),s(t,qn,n),s(t,Et,n),s(t,Rn,n),s(t,xt,n),s(t,Fn,n),s(t,mt,n),s(t,hn,n),s(t,ft,n),s(t,zn,n),s(t,vt,n),s(t,Wn,n),s(t,Bt,n),s(t,Jn,n),s(t,_t,n),s(t,Nn,n),s(t,At,n),s(t,Gn,n),s(t,wt,n),s(t,In,n),s(t,rt,n),s(t,Kn,n),s(t,Mt,n),s(t,On,n),s(t,Pt,n),s(t,Qn,n),s(t,Ht,n)},p:Un,i:Un,o:Un,d(t){t&&(e(i),e(bt),e(C),e(yt),e(c),e(Lt),e(k),e(Tt),e(E),e(St),e(x),e(Dt),e(m),e(jt),e(f),e(qt),e(v),e(Rt),e(B),e(Ft),e(_),e(ht),e(A),e(zt),e(w),e(Wt),e(r),e(Jt),e(M),e(Nt),e(P),e(Gt),e(H),e(It),e(b),e(Kt),e(y),e(Ot),e(L),e(Qt),e(T),e(Ut),e(S),e(Vt),e(D),e(Xt),e(j),e(Yt),e(q),e(Zt),e(R),e($t),e(F),e(dt),e(h),e(gt),e(z),e(tn),e(W),e(nn),e(J),e(en),e(N),e(sn),e(G),e(an),e(I),e(ln),e(K),e(pn),e(O),e(un),e(Q),e(on),e(U),e(Cn),e(V),e(cn),e(X),e(En),e(Y),e(xn),e(Z),e(mn),e($),e(fn),e(d),e(Bn),e(g),e(_n),e(tt),e(An),e(nt),e(wn),e(et),e(rn),e(st),e(Mn),e(at),e(Pn),e(lt),e(Hn),e(pt),e(yn),e(ut),e(Ln),e(ot),e(Tn),e(it),e(Sn),e(Ct),e(Dn),e(ct),e(jn),e(kt),e(qn),e(Et),e(Rn),e(xt),e(Fn),e(mt),e(hn),e(ft),e(zn),e(vt),e(Wn),e(Bt),e(Jn),e(_t),e(Nn),e(At),e(Gn),e(wt),e(In),e(rt),e(Kn),e(Mt),e(On),e(Pt),e(Qn),e(Ht))}}}const Ms={title:"JS라이브러리 Rust로 재작성 후기",description:null,date:"2024-03-30",categories:null,published:!1};class Ps extends Bs{constructor(i){super(),_s(this,i,null,As,vs,{})}}export{Ps as default,Ms as metadata};
