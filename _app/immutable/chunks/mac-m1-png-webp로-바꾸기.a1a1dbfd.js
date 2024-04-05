import{s as $s,y as Le,z as vs,c as fs,n as ys}from"./scheduler.1916e345.js";import{S as Es,i as qs,r as js,u as Hs,v as Ms,d as zs,t as Ts,w as hs,g as n,s as p,H as Z,h as l,x as u,c as i,j as g,C as d,f as e,k,a}from"./index.5c9dac44.js";import{M as Is,g as Ls,a as rs}from"./mdsvex.218628b2.js";function Ss(Y){let o,f="내가 블로그에 올리는 사진은 보통 4K 모니터 스크린샷이다.",v,m,c="이미지가 선명해서 좋긴한데 용량이 크다보니, 웹페이지에서 이미지를 로딩하는데 시간이 오래 걸린다.",b,x,tt,et,st,w,Se="그래서 png 이미지를 webp 로 전부 교체하면서 결정.",at,C,Ae="webp 는 구글에서 만든, 웹에 최적화 되어있는 압축 이미지 포맷이다.",nt,B,De="예전에 IE 가 살아있을 때는 호환성이 안 좋다 뭐다 했는데, 이젠 다 옛날 이야기.",lt,pt,it,ut,ot,R,Ne="작업 1. 기존 이미지 변경",ct,P,Ue="일단 블로그에 이미 올라가있는 사진들을 모두 webp 로 바꿔주는 작업을 시작한다.",bt,kt,mt,vt,ft,$,Ge="webp 설치",rt,y,Oe="작업을 위해서 Mac 터미널 에서 webp 를 설치해준다.",_t,E,xt,xs='<code class="language-shell">brew <span class="token function">install</span> webp</code>',wt,Ct,Bt,Rt,Pt,q,Ke="간단한 사용 방법은 아래와 같다.",$t,j,yt,ws='<code class="language-shell">cwebp <span class="token parameter variable">-q</span> <span class="token number">40</span> screenshot.png <span class="token parameter variable">-o</span> screenshot.webp</code>',Et,qt,jt,H,We="-q 옵션은 압축 퀄리티를 의미하는데, 보통 80% 를 권장한다고 한다. 근데 나는 블로그에 고화질 사진을 올릴 일이 없어서 (보통 개발 스크린샷니깐..) 40% 로 줬다.",Ht,M,Fe="-o 는 webp 컴파일 결과물의 파일명을 지정해준다.",Mt,zt,Tt,ht,It,z,Je="내 블로그 이미지 파일 경로는 다음과 같아서,",Lt,r,Qe,St,At,Dt,Nt,Ut,T,Ve=`src/posts/images 폴더 아래의 모든 디렉토리에 대해서,<br/>
디렉토리 하위에 존재하는 파일을 모두 webp 로 바꿔주는 커맨드를 짜면 된다.`,Gt,h,Ot,Cs=`<code class="language-bash"><span class="token shebang important">#!/bin/bash</span>

<span class="token assign-left variable">p</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">pwd</span><span class="token variable">)</span></span>

<span class="token comment"># src/posts/images 하위의 모든 디렉토리에 대해서 반복</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">dir</span> <span class="token keyword">in</span>  <span class="token variable">$p</span>/src/posts/images/*/<span class="token punctuation">;</span> <span class="token keyword">do</span>

 <span class="token comment"># 해당 디렉토리에 존재하는 파일 목록을 ls 로 불러와서</span>
 <span class="token comment"># | 파이프로 xargs 에 보냅니다. 파일 하나하나마다 반복한다는 뜻</span>
 <span class="token comment"># cwebp 를 실행합니다. 출력이 너무 많아서 quiet 옵션 사용.</span>
 <span class="token function">ls</span> <span class="token variable">$dir</span> <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token parameter variable">-n</span> <span class="token number">1</span> <span class="token parameter variable">-I</span> <span class="token punctuation">&#123;</span><span class="token punctuation">&#125;</span> cwebp <span class="token parameter variable">-q</span> <span class="token number">40</span> <span class="token variable">$dir</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#125;</span> <span class="token parameter variable">-o</span> <span class="token variable">$dir</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#125;</span>.webp <span class="token parameter variable">-quiet</span>
<span class="token keyword">done</span></code>`,Kt,I,Xe="-quiet 은 안 써주면 webp 로 컴파일 하는 결과를 구구절절 써줘서 조용히 하라고 넣어줬다.",Wt,Ft,Jt,Qt,Vt,L,Ye="결과는 아래와 같이 전부 webp 로 변환 완료",Xt,_,Ze,Yt,Zt,gt,dt,te,S,ge="블로그 글 markdown 에 박혀있는 .png 파일 이름은 vscode 에서 검색해서 한번에 싹 바꿔줬다.",ee,se,ae,ne,le,pe,ie,A,de="작업 2. 새로 업로드하는 이미지 webp 로 바꾸기",ue,D,ts="이미 업로드 된 이미지를 webp로 바꿔줬으니, 앞으로 올릴 이미지도 webp 로 바꾸는 방법을 만들어본다.",oe,N,es="tmp 라는 디렉토리의 파일 변경을 감지해서, 해당 이미지를 webp 로 바꾸고 S3 에 업로드하도록 스크립트를 구성했다.",ce,U,ss="파일 변경 감지는 fswatch 로 했는데 brew 로 설치해주면 된다.",be,G,ke,Bs='<code class="language-shell">brew <span class="token function">install</span> fswatch</code>',me,ve,fe,re,_e,O,as="파일 변경을 감지해서 해당 파일 경로를 ./script.sh 의 첫번째 인자로 넘겨주며 실행하는 커맨드를 package.json 에 등록했다.",xe,K,we,Rs=`<code class="language-json"><span class="token comment">// package.json</span>
<span class="token punctuation">&#123;</span>
    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"web"</span><span class="token punctuation">,</span>
    <span class="token property">"version"</span><span class="token operator">:</span> <span class="token string">"0.0.1"</span><span class="token punctuation">,</span>
    <span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
        <span class="token comment">// fswatch</span>
        <span class="token property">"syncs3"</span><span class="token operator">:</span> <span class="token string">"fswatch -0 -rt tmp | xargs -0 -n1 -I&#123;&#125; ./script.sh &#123;&#125;"</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
    ...
<span class="token punctuation">&#125;</span></code>`,Ce,Be,Re,Pe,$e,W,ns="아래는 script.sh 의 내용",ye,F,Ee,Ps=`<code class="language-bash"><span class="token comment"># script.sh 내용</span>

<span class="token comment"># $1 = "Thu Apr 4 15:41:33 2024 /Users/neulhan/Dev/blog/Neulhan/tmp/1.png"</span>

<span class="token assign-left variable">file_path</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">echo</span> <span class="token string">"<span class="token variable">$1</span>"</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">'&#123;print $6&#125;'</span><span class="token variable">)</span></span>
<span class="token comment"># file_path = /Users/neulhan/Dev/blog/Neulhan/tmp/1.png</span>

<span class="token assign-left variable">preext</span><span class="token operator">=</span><span class="token string">"<span class="token variable">$&#123;file_path<span class="token operator">##</span>*.&#125;</span>"</span>
<span class="token comment"># preext = png</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">"<span class="token variable">$preext</span>"</span> <span class="token operator">==</span> <span class="token string">"webp"</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token comment"># 컴파일된 webp 가 새로 생성되는 경우에도 파일 변경을 감지하길래 분기</span>
    <span class="token builtin class-name">exit</span> <span class="token number">0</span>
<span class="token keyword">fi</span>

<span class="token comment"># fswatch 가 파일이 삭제된 경우에도 감지하길래 분기</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-f</span> <span class="token variable">$file_path</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token assign-left variable">newext</span><span class="token operator">=</span><span class="token string">".webp"</span>

    <span class="token assign-left variable">new_file_path</span><span class="token operator">=</span><span class="token variable">$file_path</span><span class="token variable">$newext</span>
    <span class="token comment"># new_file_path=/Users/neulhan/Dev/blog/Neulhan/tmp/1.png.webp</span>

    cwebp <span class="token parameter variable">-q</span> <span class="token number">40</span> <span class="token variable">$file_path</span> <span class="token parameter variable">-o</span> <span class="token variable">$new_file_path</span> <span class="token parameter variable">-quiet</span>
    <span class="token comment"># webp 로 컴파일</span>

    <span class="token function">rm</span> <span class="token variable">$file_path</span>
    <span class="token comment"># png 파일 삭제</span>

    aws s3 <span class="token function">sync</span> tmp/ s3://neulhan-blog/images <span class="token parameter variable">--profile</span><span class="token operator">=</span>neulhan
    <span class="token comment"># s3 에 업로드</span>

    <span class="token function">sleep</span> <span class="token number">5</span>

    <span class="token function">rm</span> <span class="token variable">$new_file_path</span>
    <span class="token comment"># webp 도 삭제</span>
<span class="token keyword">else</span>
    <span class="token builtin class-name">echo</span> <span class="token string">"[deleted] <span class="token variable">$1</span> "</span>
    <span class="token builtin class-name">exit</span> <span class="token number">0</span>
<span class="token keyword">fi</span>
</code>`,qe,je,He,Me,ze,J,ls="이제 tmp 디렉토리에 새 png 파일이 들어오면,",Te,Q,ps="<li>png -&gt; webp 로 바꿔줌</li> <li>기존 png 파일 삭제</li> <li>S3 에 webp 업로드</li> <li>webp 파일도 삭제</li>",he,V,is="와 같은 과정이 자동으로 수행되게 해두었다.",Ie,X,us="webp 환경 구축하기";return{c(){o=n("p"),o.textContent=f,v=p(),m=n("p"),m.textContent=c,b=p(),x=n("br"),tt=p(),et=n("br"),st=p(),w=n("p"),w.textContent=Se,at=p(),C=n("p"),C.textContent=Ae,nt=p(),B=n("p"),B.textContent=De,lt=p(),pt=n("br"),it=p(),ut=n("br"),ot=p(),R=n("h2"),R.textContent=Ne,ct=p(),P=n("p"),P.textContent=Ue,bt=p(),kt=n("br"),mt=p(),vt=n("br"),ft=p(),$=n("h3"),$.textContent=Ge,rt=p(),y=n("p"),y.textContent=Oe,_t=p(),E=n("pre"),xt=new Z(!1),wt=p(),Ct=n("br"),Bt=p(),Rt=n("br"),Pt=p(),q=n("p"),q.textContent=Ke,$t=p(),j=n("pre"),yt=new Z(!1),Et=p(),qt=n("br"),jt=p(),H=n("p"),H.textContent=We,Ht=p(),M=n("p"),M.textContent=Fe,Mt=p(),zt=n("br"),Tt=p(),ht=n("br"),It=p(),z=n("p"),z.textContent=Je,Lt=p(),r=n("img"),St=p(),At=n("br"),Dt=p(),Nt=n("br"),Ut=p(),T=n("p"),T.innerHTML=Ve,Gt=p(),h=n("pre"),Ot=new Z(!1),Kt=p(),I=n("p"),I.textContent=Xe,Wt=p(),Ft=n("br"),Jt=p(),Qt=n("br"),Vt=p(),L=n("p"),L.textContent=Ye,Xt=p(),_=n("img"),Yt=p(),Zt=n("br"),gt=p(),dt=n("br"),te=p(),S=n("p"),S.textContent=ge,ee=p(),se=n("br"),ae=p(),ne=n("br"),le=p(),pe=n("br"),ie=p(),A=n("h2"),A.textContent=de,ue=p(),D=n("p"),D.textContent=ts,oe=p(),N=n("p"),N.textContent=es,ce=p(),U=n("p"),U.textContent=ss,be=p(),G=n("pre"),ke=new Z(!1),me=p(),ve=n("br"),fe=p(),re=n("br"),_e=p(),O=n("p"),O.textContent=as,xe=p(),K=n("pre"),we=new Z(!1),Ce=p(),Be=n("br"),Re=p(),Pe=n("br"),$e=p(),W=n("p"),W.textContent=ns,ye=p(),F=n("pre"),Ee=new Z(!1),qe=p(),je=n("br"),He=p(),Me=n("br"),ze=p(),J=n("p"),J.textContent=ls,Te=p(),Q=n("ol"),Q.innerHTML=ps,he=p(),V=n("p"),V.textContent=is,Ie=p(),X=n("p"),X.textContent=us,this.h()},l(t){o=l(t,"P",{"data-svelte-h":!0}),u(o)!=="svelte-n7859l"&&(o.textContent=f),v=i(t),m=l(t,"P",{"data-svelte-h":!0}),u(m)!=="svelte-1igvacg"&&(m.textContent=c),b=i(t),x=l(t,"BR",{}),tt=i(t),et=l(t,"BR",{}),st=i(t),w=l(t,"P",{"data-svelte-h":!0}),u(w)!=="svelte-owild8"&&(w.textContent=Se),at=i(t),C=l(t,"P",{"data-svelte-h":!0}),u(C)!=="svelte-1s0ath3"&&(C.textContent=Ae),nt=i(t),B=l(t,"P",{"data-svelte-h":!0}),u(B)!=="svelte-sxymu5"&&(B.textContent=De),lt=i(t),pt=l(t,"BR",{}),it=i(t),ut=l(t,"BR",{}),ot=i(t),R=l(t,"H2",{"data-svelte-h":!0}),u(R)!=="svelte-135gocw"&&(R.textContent=Ne),ct=i(t),P=l(t,"P",{"data-svelte-h":!0}),u(P)!=="svelte-1gy9dwx"&&(P.textContent=Ue),bt=i(t),kt=l(t,"BR",{}),mt=i(t),vt=l(t,"BR",{}),ft=i(t),$=l(t,"H3",{"data-svelte-h":!0}),u($)!=="svelte-1fzjwd0"&&($.textContent=Ge),rt=i(t),y=l(t,"P",{"data-svelte-h":!0}),u(y)!=="svelte-pi51dl"&&(y.textContent=Oe),_t=i(t),E=l(t,"PRE",{class:!0});var s=g(E);xt=d(s,!1),s.forEach(e),wt=i(t),Ct=l(t,"BR",{}),Bt=i(t),Rt=l(t,"BR",{}),Pt=i(t),q=l(t,"P",{"data-svelte-h":!0}),u(q)!=="svelte-1iaajx4"&&(q.textContent=Ke),$t=i(t),j=l(t,"PRE",{class:!0});var os=g(j);yt=d(os,!1),os.forEach(e),Et=i(t),qt=l(t,"BR",{}),jt=i(t),H=l(t,"P",{"data-svelte-h":!0}),u(H)!=="svelte-ghznti"&&(H.textContent=We),Ht=i(t),M=l(t,"P",{"data-svelte-h":!0}),u(M)!=="svelte-hab4ok"&&(M.textContent=Fe),Mt=i(t),zt=l(t,"BR",{}),Tt=i(t),ht=l(t,"BR",{}),It=i(t),z=l(t,"P",{"data-svelte-h":!0}),u(z)!=="svelte-fd1eu4"&&(z.textContent=Je),Lt=i(t),r=l(t,"IMG",{width:!0,",":!0,src:!0}),St=i(t),At=l(t,"BR",{}),Dt=i(t),Nt=l(t,"BR",{}),Ut=i(t),T=l(t,"P",{"data-svelte-h":!0}),u(T)!=="svelte-336v81"&&(T.innerHTML=Ve),Gt=i(t),h=l(t,"PRE",{class:!0});var cs=g(h);Ot=d(cs,!1),cs.forEach(e),Kt=i(t),I=l(t,"P",{"data-svelte-h":!0}),u(I)!=="svelte-1fll9gr"&&(I.textContent=Xe),Wt=i(t),Ft=l(t,"BR",{}),Jt=i(t),Qt=l(t,"BR",{}),Vt=i(t),L=l(t,"P",{"data-svelte-h":!0}),u(L)!=="svelte-8ob85t"&&(L.textContent=Ye),Xt=i(t),_=l(t,"IMG",{width:!0,",":!0,src:!0}),Yt=i(t),Zt=l(t,"BR",{}),gt=i(t),dt=l(t,"BR",{}),te=i(t),S=l(t,"P",{"data-svelte-h":!0}),u(S)!=="svelte-1ohag89"&&(S.textContent=ge),ee=i(t),se=l(t,"BR",{}),ae=i(t),ne=l(t,"BR",{}),le=i(t),pe=l(t,"BR",{}),ie=i(t),A=l(t,"H2",{"data-svelte-h":!0}),u(A)!=="svelte-3d8v6p"&&(A.textContent=de),ue=i(t),D=l(t,"P",{"data-svelte-h":!0}),u(D)!=="svelte-62qwub"&&(D.textContent=ts),oe=i(t),N=l(t,"P",{"data-svelte-h":!0}),u(N)!=="svelte-7i8fdo"&&(N.textContent=es),ce=i(t),U=l(t,"P",{"data-svelte-h":!0}),u(U)!=="svelte-yvt6zj"&&(U.textContent=ss),be=i(t),G=l(t,"PRE",{class:!0});var bs=g(G);ke=d(bs,!1),bs.forEach(e),me=i(t),ve=l(t,"BR",{}),fe=i(t),re=l(t,"BR",{}),_e=i(t),O=l(t,"P",{"data-svelte-h":!0}),u(O)!=="svelte-1uo7e8y"&&(O.textContent=as),xe=i(t),K=l(t,"PRE",{class:!0});var ks=g(K);we=d(ks,!1),ks.forEach(e),Ce=i(t),Be=l(t,"BR",{}),Re=i(t),Pe=l(t,"BR",{}),$e=i(t),W=l(t,"P",{"data-svelte-h":!0}),u(W)!=="svelte-1crj9ot"&&(W.textContent=ns),ye=i(t),F=l(t,"PRE",{class:!0});var ms=g(F);Ee=d(ms,!1),ms.forEach(e),qe=i(t),je=l(t,"BR",{}),He=i(t),Me=l(t,"BR",{}),ze=i(t),J=l(t,"P",{"data-svelte-h":!0}),u(J)!=="svelte-tgyihx"&&(J.textContent=ls),Te=i(t),Q=l(t,"OL",{"data-svelte-h":!0}),u(Q)!=="svelte-1upgmyq"&&(Q.innerHTML=ps),he=i(t),V=l(t,"P",{"data-svelte-h":!0}),u(V)!=="svelte-qtxx0w"&&(V.textContent=is),Ie=i(t),X=l(t,"P",{"data-svelte-h":!0}),u(X)!=="svelte-tqim2o"&&(X.textContent=us),this.h()},h(){xt.a=null,k(E,"class","language-shell"),yt.a=null,k(j,"class","language-shell"),k(r,"width","300"),k(r,",",""),fs(r.src,Qe="https://neulhan-blog.s3.ap-northeast-2.amazonaws.com/images/2024-04-05-11-32-24.png.webp")||k(r,"src",Qe),Ot.a=null,k(h,"class","language-bash"),k(_,"width","300"),k(_,",",""),fs(_.src,Ze="https://neulhan-blog.s3.ap-northeast-2.amazonaws.com/images/2024-04-05-12-43-08.png.webp")||k(_,"src",Ze),ke.a=null,k(G,"class","language-shell"),we.a=null,k(K,"class","language-json"),Ee.a=null,k(F,"class","language-bash")},m(t,s){a(t,o,s),a(t,v,s),a(t,m,s),a(t,b,s),a(t,x,s),a(t,tt,s),a(t,et,s),a(t,st,s),a(t,w,s),a(t,at,s),a(t,C,s),a(t,nt,s),a(t,B,s),a(t,lt,s),a(t,pt,s),a(t,it,s),a(t,ut,s),a(t,ot,s),a(t,R,s),a(t,ct,s),a(t,P,s),a(t,bt,s),a(t,kt,s),a(t,mt,s),a(t,vt,s),a(t,ft,s),a(t,$,s),a(t,rt,s),a(t,y,s),a(t,_t,s),a(t,E,s),xt.m(xs,E),a(t,wt,s),a(t,Ct,s),a(t,Bt,s),a(t,Rt,s),a(t,Pt,s),a(t,q,s),a(t,$t,s),a(t,j,s),yt.m(ws,j),a(t,Et,s),a(t,qt,s),a(t,jt,s),a(t,H,s),a(t,Ht,s),a(t,M,s),a(t,Mt,s),a(t,zt,s),a(t,Tt,s),a(t,ht,s),a(t,It,s),a(t,z,s),a(t,Lt,s),a(t,r,s),a(t,St,s),a(t,At,s),a(t,Dt,s),a(t,Nt,s),a(t,Ut,s),a(t,T,s),a(t,Gt,s),a(t,h,s),Ot.m(Cs,h),a(t,Kt,s),a(t,I,s),a(t,Wt,s),a(t,Ft,s),a(t,Jt,s),a(t,Qt,s),a(t,Vt,s),a(t,L,s),a(t,Xt,s),a(t,_,s),a(t,Yt,s),a(t,Zt,s),a(t,gt,s),a(t,dt,s),a(t,te,s),a(t,S,s),a(t,ee,s),a(t,se,s),a(t,ae,s),a(t,ne,s),a(t,le,s),a(t,pe,s),a(t,ie,s),a(t,A,s),a(t,ue,s),a(t,D,s),a(t,oe,s),a(t,N,s),a(t,ce,s),a(t,U,s),a(t,be,s),a(t,G,s),ke.m(Bs,G),a(t,me,s),a(t,ve,s),a(t,fe,s),a(t,re,s),a(t,_e,s),a(t,O,s),a(t,xe,s),a(t,K,s),we.m(Rs,K),a(t,Ce,s),a(t,Be,s),a(t,Re,s),a(t,Pe,s),a(t,$e,s),a(t,W,s),a(t,ye,s),a(t,F,s),Ee.m(Ps,F),a(t,qe,s),a(t,je,s),a(t,He,s),a(t,Me,s),a(t,ze,s),a(t,J,s),a(t,Te,s),a(t,Q,s),a(t,he,s),a(t,V,s),a(t,Ie,s),a(t,X,s)},p:ys,d(t){t&&(e(o),e(v),e(m),e(b),e(x),e(tt),e(et),e(st),e(w),e(at),e(C),e(nt),e(B),e(lt),e(pt),e(it),e(ut),e(ot),e(R),e(ct),e(P),e(bt),e(kt),e(mt),e(vt),e(ft),e($),e(rt),e(y),e(_t),e(E),e(wt),e(Ct),e(Bt),e(Rt),e(Pt),e(q),e($t),e(j),e(Et),e(qt),e(jt),e(H),e(Ht),e(M),e(Mt),e(zt),e(Tt),e(ht),e(It),e(z),e(Lt),e(r),e(St),e(At),e(Dt),e(Nt),e(Ut),e(T),e(Gt),e(h),e(Kt),e(I),e(Wt),e(Ft),e(Jt),e(Qt),e(Vt),e(L),e(Xt),e(_),e(Yt),e(Zt),e(gt),e(dt),e(te),e(S),e(ee),e(se),e(ae),e(ne),e(le),e(pe),e(ie),e(A),e(ue),e(D),e(oe),e(N),e(ce),e(U),e(be),e(G),e(me),e(ve),e(fe),e(re),e(_e),e(O),e(xe),e(K),e(Ce),e(Be),e(Re),e(Pe),e($e),e(W),e(ye),e(F),e(qe),e(je),e(He),e(Me),e(ze),e(J),e(Te),e(Q),e(he),e(V),e(Ie),e(X))}}}function As(Y){let o,f;const v=[Y[0],_s];let m={$$slots:{default:[Ss]},$$scope:{ctx:Y}};for(let c=0;c<v.length;c+=1)m=Le(m,v[c]);return o=new Is({props:m}),{c(){js(o.$$.fragment)},l(c){Hs(o.$$.fragment,c)},m(c,b){Ms(o,c,b),f=!0},p(c,[b]){const x=b&1?Ls(v,[b&1&&rs(c[0]),b&0&&rs(_s)]):{};b&2&&(x.$$scope={dirty:b,ctx:c}),o.$set(x)},i(c){f||(zs(o.$$.fragment,c),f=!0)},o(c){Ts(o.$$.fragment,c),f=!1},d(c){hs(o,c)}}}const _s={title:"Webp 로 개인블로그 웹 퍼포먼스 개선하기",description:"개인 블로그 검색엔진최적화(SEO) 작업 내용",date:"2024-04-04",categories:["design","art"],published:!1,thumbnail:"https://neulhan-blog.s3.ap-northeast-2.amazonaws.com/images/2024-04-05-11-10-37.png.webp"};function Ds(Y,o,f){return Y.$$set=v=>{f(0,o=Le(Le({},o),vs(v)))},o=vs(o),[o]}class Os extends Es{constructor(o){super(),qs(this,o,Ds,As,$s,{})}}export{Os as default,_s as metadata};
