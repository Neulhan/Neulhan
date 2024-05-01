import{s as As,y as We,z as Es,c as qs,n as Os}from"./scheduler.1916e345.js";import{S as Ws,i as Fs,r as Ms,u as zs,v as Is,d as Ts,t as Ls,w as Ss,g as l,s as p,H as d,h as n,j as Z,f as e,c as i,x as o,B as tt,k as r,a}from"./index.ec981381.js";import{M as Js,g as Qs,a as js}from"./mdsvex.285645f5.js";import{I as Vs}from"./img.1bdfd061.js";function Xs(g){let u,b,v,m,c="내가 블로그에 올리는 사진은 보통 4K 모니터 스크린샷이다.",k,f,Fe="이미지가 선명해서 좋긴한데 용량이 크다보니, 웹페이지에서 이미지를 로딩하는데 시간이 오래 걸린다.",et,st,at,lt,nt,_,Je="그래서 png 이미지를 webp 로 전부 교체하면서 결정.",pt,x,Qe="webp 는 구글에서 만든, 웹에 최적화 되어있는 압축 이미지 포맷이다.",it,w,Ve="예전에 IE 가 살아있을 때는 호환성이 안 좋다 뭐다 했는데, 이젠 다 옛날 이야기.",ot,ut,ct,bt,kt,C,Xe="작업 1. 기존 이미지 변경",mt,$,Ye="일단 블로그에 이미 올라가있는 사진들을 모두 webp 로 바꿔주는 작업을 시작한다.",vt,ft,rt,_t,xt,R,Ze="webp 설치",wt,P,ge="작업을 위해서 Mac 터미널 에서 webp 를 설치해준다.",Ct,B,$t,hs='<code class="language-shell">brew <span class="token function">install</span> webp</code>',Rt,Pt,Bt,yt,Et,y,de="간단한 사용 방법은 아래와 같다.",qt,E,jt,Ds='<code class="language-shell">cwebp <span class="token parameter variable">-q</span> <span class="token number">40</span> screenshot.png <span class="token parameter variable">-o</span> screenshot.webp</code>',Ht,Mt,zt,q,ts="-q 옵션은 압축 퀄리티를 의미하는데, 보통 80% 를 권장한다고 한다. 근데 나는 블로그에 고화질 사진을 올릴 일이 없어서 (보통 개발 스크린샷니깐..) 40% 로 줬다.",It,j,es="-o 는 webp 컴파일 결과물의 파일명을 지정해준다.",Tt,Lt,St,ht,Dt,H,ss="내 블로그 이미지 파일 경로는 다음과 같아서,",Nt,M,as,Ut,Gt,Kt,At,Ot,z,ls=`src/posts/images 폴더 아래의 모든 디렉토리에 대해서,<br/>
디렉토리 하위에 존재하는 파일을 모두 webp 로 바꿔주는 커맨드를 짜면 된다.`,Wt,I,Ft,Ns=`<code class="language-bash"><span class="token shebang important">#!/bin/bash</span>

<span class="token assign-left variable">p</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">pwd</span><span class="token variable">)</span></span>

<span class="token comment"># src/posts/images 하위의 모든 디렉토리에 대해서 반복</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">dir</span> <span class="token keyword">in</span>  <span class="token variable">$p</span>/src/posts/images/*/<span class="token punctuation">;</span> <span class="token keyword">do</span>

 <span class="token comment"># 해당 디렉토리에 존재하는 파일 목록을 ls 로 불러와서</span>
 <span class="token comment"># | 파이프로 xargs 에 보냅니다. 파일 하나하나마다 반복한다는 뜻</span>
 <span class="token comment"># cwebp 를 실행합니다. 출력이 너무 많아서 quiet 옵션 사용.</span>
 <span class="token function">ls</span> <span class="token variable">$dir</span> <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token parameter variable">-n</span> <span class="token number">1</span> <span class="token parameter variable">-I</span> <span class="token punctuation">&#123;</span><span class="token punctuation">&#125;</span> cwebp <span class="token parameter variable">-q</span> <span class="token number">40</span> <span class="token variable">$dir</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#125;</span> <span class="token parameter variable">-o</span> <span class="token variable">$dir</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#125;</span>.webp <span class="token parameter variable">-quiet</span>
<span class="token keyword">done</span></code>`,Jt,T,ns="-quiet 은 안 써주면 webp 로 컴파일 하는 결과를 구구절절 써줘서 조용히 하라고 넣어줬다.",Qt,Vt,Xt,Yt,Zt,L,ps="결과는 아래와 같이 전부 webp 로 변환 완료",gt,S,is,dt,te,ee,se,ae,h,os="블로그 글 markdown 에 박혀있는 .png 파일 이름은 vscode 에서 검색해서 한번에 싹 바꿔줬다.",le,ne,pe,ie,oe,ue,ce,D,us="작업 2. 새로 업로드하는 이미지 webp 로 바꾸기",be,N,cs="이미 업로드 된 이미지를 webp로 바꿔줬으니, 앞으로 올릴 이미지도 webp 로 바꾸는 방법을 만들어본다.",ke,U,bs="tmp 라는 디렉토리의 파일 변경을 감지해서, 해당 이미지를 webp 로 바꾸고 S3 에 업로드하도록 스크립트를 구성했다.",me,G,ks="파일 변경 감지는 fswatch 로 했는데 brew 로 설치해주면 된다.",ve,K,fe,Us='<code class="language-shell">brew <span class="token function">install</span> fswatch</code>',re,_e,xe,we,Ce,A,ms="파일 변경을 감지해서 해당 파일 경로를 ./script.sh 의 첫번째 인자로 넘겨주며 실행하는 커맨드를 package.json 에 등록했다.",$e,O,Re,Gs=`<code class="language-json"><span class="token comment">// package.json</span>
<span class="token punctuation">&#123;</span>
    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"web"</span><span class="token punctuation">,</span>
    <span class="token property">"version"</span><span class="token operator">:</span> <span class="token string">"0.0.1"</span><span class="token punctuation">,</span>
    <span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
        <span class="token comment">// fswatch</span>
        <span class="token property">"syncs3"</span><span class="token operator">:</span> <span class="token string">"fswatch -0 -rt tmp | xargs -0 -n1 -I&#123;&#125; ./script.sh &#123;&#125;"</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
    ...
<span class="token punctuation">&#125;</span></code>`,Pe,Be,ye,Ee,qe,W,vs="아래는 script.sh 의 내용",je,F,He,Ks=`<code class="language-bash"><span class="token comment"># script.sh 내용</span>

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
</code>`,Me,ze,Ie,Te,Le,J,fs="이제 tmp 디렉토리에 새 png 파일이 들어오면,",Se,Q,rs="<li>png -&gt; webp 로 바꿔줌</li> <li>기존 png 파일 삭제</li> <li>S3 에 webp 업로드</li> <li>webp 파일도 삭제</li>",he,V,_s="와 같은 과정이 자동으로 수행되게 해두었다.",De,Ne,Ue,Ge,Ke,X,xs="tmp 디렉토리에 파일을 넣는건 vscode 의 pasteImage 라는 확장을 사용중인데, 이건 다음에 다뤄볼 기회가 있으면 다뤄보도록 하겠다.",Ae,Y,ws="끝!",Oe;return b=new Vs({props:{src:"https://neulhan-blog.s3.ap-northeast-2.amazonaws.com/images/2024-04-05-20-55-30.png.webp"}}),{c(){u=l("p"),Ms(b.$$.fragment),v=p(),m=l("p"),m.textContent=c,k=p(),f=l("p"),f.textContent=Fe,et=p(),st=l("br"),at=p(),lt=l("br"),nt=p(),_=l("p"),_.textContent=Je,pt=p(),x=l("p"),x.textContent=Qe,it=p(),w=l("p"),w.textContent=Ve,ot=p(),ut=l("br"),ct=p(),bt=l("br"),kt=p(),C=l("h2"),C.textContent=Xe,mt=p(),$=l("p"),$.textContent=Ye,vt=p(),ft=l("br"),rt=p(),_t=l("br"),xt=p(),R=l("h3"),R.textContent=Ze,wt=p(),P=l("p"),P.textContent=ge,Ct=p(),B=l("pre"),$t=new d(!1),Rt=p(),Pt=l("br"),Bt=p(),yt=l("br"),Et=p(),y=l("p"),y.textContent=de,qt=p(),E=l("pre"),jt=new d(!1),Ht=p(),Mt=l("br"),zt=p(),q=l("p"),q.textContent=ts,It=p(),j=l("p"),j.textContent=es,Tt=p(),Lt=l("br"),St=p(),ht=l("br"),Dt=p(),H=l("p"),H.textContent=ss,Nt=p(),M=l("img"),Ut=p(),Gt=l("br"),Kt=p(),At=l("br"),Ot=p(),z=l("p"),z.innerHTML=ls,Wt=p(),I=l("pre"),Ft=new d(!1),Jt=p(),T=l("p"),T.textContent=ns,Qt=p(),Vt=l("br"),Xt=p(),Yt=l("br"),Zt=p(),L=l("p"),L.textContent=ps,gt=p(),S=l("img"),dt=p(),te=l("br"),ee=p(),se=l("br"),ae=p(),h=l("p"),h.textContent=os,le=p(),ne=l("br"),pe=p(),ie=l("br"),oe=p(),ue=l("br"),ce=p(),D=l("h2"),D.textContent=us,be=p(),N=l("p"),N.textContent=cs,ke=p(),U=l("p"),U.textContent=bs,me=p(),G=l("p"),G.textContent=ks,ve=p(),K=l("pre"),fe=new d(!1),re=p(),_e=l("br"),xe=p(),we=l("br"),Ce=p(),A=l("p"),A.textContent=ms,$e=p(),O=l("pre"),Re=new d(!1),Pe=p(),Be=l("br"),ye=p(),Ee=l("br"),qe=p(),W=l("p"),W.textContent=vs,je=p(),F=l("pre"),He=new d(!1),Me=p(),ze=l("br"),Ie=p(),Te=l("br"),Le=p(),J=l("p"),J.textContent=fs,Se=p(),Q=l("ol"),Q.innerHTML=rs,he=p(),V=l("p"),V.textContent=_s,De=p(),Ne=l("br"),Ue=p(),Ge=l("br"),Ke=p(),X=l("p"),X.textContent=xs,Ae=p(),Y=l("p"),Y.textContent=ws,this.h()},l(t){u=n(t,"P",{});var s=Z(u);zs(b.$$.fragment,s),s.forEach(e),v=i(t),m=n(t,"P",{"data-svelte-h":!0}),o(m)!=="svelte-n7859l"&&(m.textContent=c),k=i(t),f=n(t,"P",{"data-svelte-h":!0}),o(f)!=="svelte-1igvacg"&&(f.textContent=Fe),et=i(t),st=n(t,"BR",{}),at=i(t),lt=n(t,"BR",{}),nt=i(t),_=n(t,"P",{"data-svelte-h":!0}),o(_)!=="svelte-owild8"&&(_.textContent=Je),pt=i(t),x=n(t,"P",{"data-svelte-h":!0}),o(x)!=="svelte-1s0ath3"&&(x.textContent=Qe),it=i(t),w=n(t,"P",{"data-svelte-h":!0}),o(w)!=="svelte-sxymu5"&&(w.textContent=Ve),ot=i(t),ut=n(t,"BR",{}),ct=i(t),bt=n(t,"BR",{}),kt=i(t),C=n(t,"H2",{"data-svelte-h":!0}),o(C)!=="svelte-135gocw"&&(C.textContent=Xe),mt=i(t),$=n(t,"P",{"data-svelte-h":!0}),o($)!=="svelte-1gy9dwx"&&($.textContent=Ye),vt=i(t),ft=n(t,"BR",{}),rt=i(t),_t=n(t,"BR",{}),xt=i(t),R=n(t,"H3",{"data-svelte-h":!0}),o(R)!=="svelte-1fzjwd0"&&(R.textContent=Ze),wt=i(t),P=n(t,"P",{"data-svelte-h":!0}),o(P)!=="svelte-pi51dl"&&(P.textContent=ge),Ct=i(t),B=n(t,"PRE",{class:!0});var Cs=Z(B);$t=tt(Cs,!1),Cs.forEach(e),Rt=i(t),Pt=n(t,"BR",{}),Bt=i(t),yt=n(t,"BR",{}),Et=i(t),y=n(t,"P",{"data-svelte-h":!0}),o(y)!=="svelte-1iaajx4"&&(y.textContent=de),qt=i(t),E=n(t,"PRE",{class:!0});var $s=Z(E);jt=tt($s,!1),$s.forEach(e),Ht=i(t),Mt=n(t,"BR",{}),zt=i(t),q=n(t,"P",{"data-svelte-h":!0}),o(q)!=="svelte-ghznti"&&(q.textContent=ts),It=i(t),j=n(t,"P",{"data-svelte-h":!0}),o(j)!=="svelte-hab4ok"&&(j.textContent=es),Tt=i(t),Lt=n(t,"BR",{}),St=i(t),ht=n(t,"BR",{}),Dt=i(t),H=n(t,"P",{"data-svelte-h":!0}),o(H)!=="svelte-fd1eu4"&&(H.textContent=ss),Nt=i(t),M=n(t,"IMG",{width:!0,src:!0}),Ut=i(t),Gt=n(t,"BR",{}),Kt=i(t),At=n(t,"BR",{}),Ot=i(t),z=n(t,"P",{"data-svelte-h":!0}),o(z)!=="svelte-336v81"&&(z.innerHTML=ls),Wt=i(t),I=n(t,"PRE",{class:!0});var Rs=Z(I);Ft=tt(Rs,!1),Rs.forEach(e),Jt=i(t),T=n(t,"P",{"data-svelte-h":!0}),o(T)!=="svelte-1fll9gr"&&(T.textContent=ns),Qt=i(t),Vt=n(t,"BR",{}),Xt=i(t),Yt=n(t,"BR",{}),Zt=i(t),L=n(t,"P",{"data-svelte-h":!0}),o(L)!=="svelte-8ob85t"&&(L.textContent=ps),gt=i(t),S=n(t,"IMG",{width:!0,src:!0}),dt=i(t),te=n(t,"BR",{}),ee=i(t),se=n(t,"BR",{}),ae=i(t),h=n(t,"P",{"data-svelte-h":!0}),o(h)!=="svelte-1ohag89"&&(h.textContent=os),le=i(t),ne=n(t,"BR",{}),pe=i(t),ie=n(t,"BR",{}),oe=i(t),ue=n(t,"BR",{}),ce=i(t),D=n(t,"H2",{"data-svelte-h":!0}),o(D)!=="svelte-3d8v6p"&&(D.textContent=us),be=i(t),N=n(t,"P",{"data-svelte-h":!0}),o(N)!=="svelte-62qwub"&&(N.textContent=cs),ke=i(t),U=n(t,"P",{"data-svelte-h":!0}),o(U)!=="svelte-7i8fdo"&&(U.textContent=bs),me=i(t),G=n(t,"P",{"data-svelte-h":!0}),o(G)!=="svelte-yvt6zj"&&(G.textContent=ks),ve=i(t),K=n(t,"PRE",{class:!0});var Ps=Z(K);fe=tt(Ps,!1),Ps.forEach(e),re=i(t),_e=n(t,"BR",{}),xe=i(t),we=n(t,"BR",{}),Ce=i(t),A=n(t,"P",{"data-svelte-h":!0}),o(A)!=="svelte-1uo7e8y"&&(A.textContent=ms),$e=i(t),O=n(t,"PRE",{class:!0});var Bs=Z(O);Re=tt(Bs,!1),Bs.forEach(e),Pe=i(t),Be=n(t,"BR",{}),ye=i(t),Ee=n(t,"BR",{}),qe=i(t),W=n(t,"P",{"data-svelte-h":!0}),o(W)!=="svelte-1crj9ot"&&(W.textContent=vs),je=i(t),F=n(t,"PRE",{class:!0});var ys=Z(F);He=tt(ys,!1),ys.forEach(e),Me=i(t),ze=n(t,"BR",{}),Ie=i(t),Te=n(t,"BR",{}),Le=i(t),J=n(t,"P",{"data-svelte-h":!0}),o(J)!=="svelte-tgyihx"&&(J.textContent=fs),Se=i(t),Q=n(t,"OL",{"data-svelte-h":!0}),o(Q)!=="svelte-1upgmyq"&&(Q.innerHTML=rs),he=i(t),V=n(t,"P",{"data-svelte-h":!0}),o(V)!=="svelte-qtxx0w"&&(V.textContent=_s),De=i(t),Ne=n(t,"BR",{}),Ue=i(t),Ge=n(t,"BR",{}),Ke=i(t),X=n(t,"P",{"data-svelte-h":!0}),o(X)!=="svelte-1rouai8"&&(X.textContent=xs),Ae=i(t),Y=n(t,"P",{"data-svelte-h":!0}),o(Y)!=="svelte-w28h4e"&&(Y.textContent=ws),this.h()},h(){$t.a=null,r(B,"class","language-shell"),jt.a=null,r(E,"class","language-shell"),r(M,"width","300"),qs(M.src,as="https://neulhan-blog.s3.ap-northeast-2.amazonaws.com/images/2024-04-05-11-32-24.png.webp")||r(M,"src",as),Ft.a=null,r(I,"class","language-bash"),r(S,"width","300"),qs(S.src,is="https://neulhan-blog.s3.ap-northeast-2.amazonaws.com/images/2024-04-05-12-43-08.png.webp")||r(S,"src",is),fe.a=null,r(K,"class","language-shell"),Re.a=null,r(O,"class","language-json"),He.a=null,r(F,"class","language-bash")},m(t,s){a(t,u,s),Is(b,u,null),a(t,v,s),a(t,m,s),a(t,k,s),a(t,f,s),a(t,et,s),a(t,st,s),a(t,at,s),a(t,lt,s),a(t,nt,s),a(t,_,s),a(t,pt,s),a(t,x,s),a(t,it,s),a(t,w,s),a(t,ot,s),a(t,ut,s),a(t,ct,s),a(t,bt,s),a(t,kt,s),a(t,C,s),a(t,mt,s),a(t,$,s),a(t,vt,s),a(t,ft,s),a(t,rt,s),a(t,_t,s),a(t,xt,s),a(t,R,s),a(t,wt,s),a(t,P,s),a(t,Ct,s),a(t,B,s),$t.m(hs,B),a(t,Rt,s),a(t,Pt,s),a(t,Bt,s),a(t,yt,s),a(t,Et,s),a(t,y,s),a(t,qt,s),a(t,E,s),jt.m(Ds,E),a(t,Ht,s),a(t,Mt,s),a(t,zt,s),a(t,q,s),a(t,It,s),a(t,j,s),a(t,Tt,s),a(t,Lt,s),a(t,St,s),a(t,ht,s),a(t,Dt,s),a(t,H,s),a(t,Nt,s),a(t,M,s),a(t,Ut,s),a(t,Gt,s),a(t,Kt,s),a(t,At,s),a(t,Ot,s),a(t,z,s),a(t,Wt,s),a(t,I,s),Ft.m(Ns,I),a(t,Jt,s),a(t,T,s),a(t,Qt,s),a(t,Vt,s),a(t,Xt,s),a(t,Yt,s),a(t,Zt,s),a(t,L,s),a(t,gt,s),a(t,S,s),a(t,dt,s),a(t,te,s),a(t,ee,s),a(t,se,s),a(t,ae,s),a(t,h,s),a(t,le,s),a(t,ne,s),a(t,pe,s),a(t,ie,s),a(t,oe,s),a(t,ue,s),a(t,ce,s),a(t,D,s),a(t,be,s),a(t,N,s),a(t,ke,s),a(t,U,s),a(t,me,s),a(t,G,s),a(t,ve,s),a(t,K,s),fe.m(Us,K),a(t,re,s),a(t,_e,s),a(t,xe,s),a(t,we,s),a(t,Ce,s),a(t,A,s),a(t,$e,s),a(t,O,s),Re.m(Gs,O),a(t,Pe,s),a(t,Be,s),a(t,ye,s),a(t,Ee,s),a(t,qe,s),a(t,W,s),a(t,je,s),a(t,F,s),He.m(Ks,F),a(t,Me,s),a(t,ze,s),a(t,Ie,s),a(t,Te,s),a(t,Le,s),a(t,J,s),a(t,Se,s),a(t,Q,s),a(t,he,s),a(t,V,s),a(t,De,s),a(t,Ne,s),a(t,Ue,s),a(t,Ge,s),a(t,Ke,s),a(t,X,s),a(t,Ae,s),a(t,Y,s),Oe=!0},p:Os,i(t){Oe||(Ts(b.$$.fragment,t),Oe=!0)},o(t){Ls(b.$$.fragment,t),Oe=!1},d(t){t&&(e(u),e(v),e(m),e(k),e(f),e(et),e(st),e(at),e(lt),e(nt),e(_),e(pt),e(x),e(it),e(w),e(ot),e(ut),e(ct),e(bt),e(kt),e(C),e(mt),e($),e(vt),e(ft),e(rt),e(_t),e(xt),e(R),e(wt),e(P),e(Ct),e(B),e(Rt),e(Pt),e(Bt),e(yt),e(Et),e(y),e(qt),e(E),e(Ht),e(Mt),e(zt),e(q),e(It),e(j),e(Tt),e(Lt),e(St),e(ht),e(Dt),e(H),e(Nt),e(M),e(Ut),e(Gt),e(Kt),e(At),e(Ot),e(z),e(Wt),e(I),e(Jt),e(T),e(Qt),e(Vt),e(Xt),e(Yt),e(Zt),e(L),e(gt),e(S),e(dt),e(te),e(ee),e(se),e(ae),e(h),e(le),e(ne),e(pe),e(ie),e(oe),e(ue),e(ce),e(D),e(be),e(N),e(ke),e(U),e(me),e(G),e(ve),e(K),e(re),e(_e),e(xe),e(we),e(Ce),e(A),e($e),e(O),e(Pe),e(Be),e(ye),e(Ee),e(qe),e(W),e(je),e(F),e(Me),e(ze),e(Ie),e(Te),e(Le),e(J),e(Se),e(Q),e(he),e(V),e(De),e(Ne),e(Ue),e(Ge),e(Ke),e(X),e(Ae),e(Y)),Ss(b)}}}function Ys(g){let u,b;const v=[g[0],Hs];let m={$$slots:{default:[Xs]},$$scope:{ctx:g}};for(let c=0;c<v.length;c+=1)m=We(m,v[c]);return u=new Js({props:m}),{c(){Ms(u.$$.fragment)},l(c){zs(u.$$.fragment,c)},m(c,k){Is(u,c,k),b=!0},p(c,[k]){const f=k&1?Qs(v,[k&1&&js(c[0]),k&0&&js(Hs)]):{};k&2&&(f.$$scope={dirty:k,ctx:c}),u.$set(f)},i(c){b||(Ts(u.$$.fragment,c),b=!0)},o(c){Ls(u.$$.fragment,c),b=!1},d(c){Ss(u,c)}}}const Hs={slug:"blog-image-webp",title:"블로그 이미지 Webp 로 싹 변경하기",description:"내가 블로그에 올리는 사진은 보통 4K 모니터 스크린샷이다. 이미지가 선명해서 좋긴한데 용량이 크다보니, 웹페이지에서 이미지를 로딩하는데 시간이 오래 걸린다. 그래서 png 이미지를 webp 로 전부 교체하면서 결정.",date:"2024-04-05",categories:["webp"],published:!0,thumbnail:"https://neulhan-blog.s3.ap-northeast-2.amazonaws.com/images/2024-04-05-20-55-30.png.webp"};function Zs(g,u,b){return g.$$set=v=>{b(0,u=We(We({},u),Es(v)))},u=Es(u),[u]}class sa extends Ws{constructor(u){super(),Fs(this,u,Zs,Ys,As,{})}}export{sa as default,Hs as metadata};