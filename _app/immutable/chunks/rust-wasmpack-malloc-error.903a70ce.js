import{s as Ce,y as Dt,z as _e,n as $e}from"./scheduler.1916e345.js";import{S as ge,i as he,r as A,u as F,v as I,d as N,t as U,w as D,g as s,s as p,H as Ft,h as n,j as v,f as e,c as i,x as r,B as It,k as Nt,a}from"./index.ec981381.js";import{M as ye,g as Ee,a as be}from"./mdsvex.285645f5.js";import{I as Ut}from"./img.1bdfd061.js";function Pe(W){let u,o,_,f,m="아래 명령어로 rust 프로젝트를 번들링, npm 에 배포해서 사용해왔다.",c,b,V,de='<code class="language-shell">wasm-pack build <span class="token parameter variable">--release</span> <span class="token parameter variable">--target</span> bundler</code>',Y,G,K,d,Vt="문제발생",Q,w,Yt="근데 npm 배포 없이 빌드 결과물을 index.html 에서 불러와서 테스트하려니깐 아래와 같은 에러 발생",X,k,Z,we=`<code class="language-undefined">Uncaught TypeError: malloc is not a function
    at passStringToWasm0 (fallingrs_bg.js:144:21)
    at new FallingConfig (fallingrs_bg.js:261:22)
    at new FallingJS (index.js:19:7)
    at index.html:35:25</code>`,tt,q,x,et,lt,at,C,Gt="?? 멀쩡히 되던놈이 왜이래?",st,J,$,nt,g,pt,ke=`<code class="language-js"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">FallingConfig</span> <span class="token punctuation">&#123;</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span>
        <span class="token parameter">frequency<span class="token operator">...</span></span>
    <span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
        <span class="token keyword">const</span> ptr0 <span class="token operator">=</span> <span class="token function">passStringToWasm0</span><span class="token punctuation">(</span>
            color<span class="token punctuation">,</span>
            wasm<span class="token punctuation">.</span>__wbindgen_malloc<span class="token punctuation">,</span>
            wasm<span class="token punctuation">.</span>__wbindgen_realloc
        <span class="token punctuation">)</span>
        <span class="token keyword">const</span> len0 <span class="token operator">=</span> <span class="token constant">WASM_VECTOR_LEN</span>
    <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,it,h,Kt="<code>passStringToWasm0</code> 을 할 때 사용하는 <code>wasm.__wbindgen_malloc</code> 이 undefined 로 나오는 이슈이다.",ut,mt,rt,ot,ct,ft,_t,y,Qt="해결",bt,E,Xt="이것저것 해보다 아래 명령어로 바꿔주고 코드를 약간 수정하니 해결",vt,P,Zt="1. 빌드 타겟 변경",dt,R,wt,xe='<code class="language-shell">wasm-pack build <span class="token parameter variable">--dev</span> <span class="token parameter variable">--target</span> web</code>',kt,xt,Ct,$t,gt,ht,yt,B,te="wasm-pack build —target 옵션의 <code>bundler</code> 와 <code>web</code> 은 아래와 같은 차이가 있다고 한다.",Et,H,ee="<thead><tr><th>Option</th> <th>Usage</th> <th>Description</th></tr></thead> <tbody><tr><td><code>bundler</code></td> <td>Bundler</td> <td>Outputs JS that is suitable for interoperation with a Bundler like Webpack. You’ll import the JS and the module key is specified in package.json. sideEffects: false is by default.</td></tr> <tr><td><code>web</code></td> <td>Native in browser</td> <td>Outputs JS that can be natively imported as an ES module in a browser, but the WebAssembly must be manually instantiated and loaded.</td></tr></tbody>",Pt,Rt,Bt,Ht,Tt,T,le=`npm 에는 bundler 옵션으로 fallingrs 를 배포했었고,<br/>
fallingjs 에서 dependency 로 가져와서 webpack 으로 번들링을 했기 때문에 잘 동작한 것이다.`,jt,j,ae="그런데 번들링 없이 그냥 사용하려니 문제가 발생한 것.",Mt,St,Lt,zt,Wt,M,se="2. 코드 수정",qt,O,S,Jt,L,ne="wasm-pack 의 빌드 타겟이 web 인 경우 wasm 이 init 되는 걸 체크하고 이후에 wasm 코드를 사용해야한다.",Ot,z,pe="빌드 타겟을 bundler 로 하고 webpack 으로 번들링 되는 경우에는 이와같은 init 코드 없이도 잘 동작했는데, 타겟 web 의 경우 init 이 필수인 것으로 보인다.",At;return o=new Ut({props:{src:"https://neulhan-blog.s3.ap-northeast-2.amazonaws.com/images/rust-wasm-pack-malloc-error/2024-04-03-09-41-53.png.webp"}}),x=new Ut({props:{src:"https://neulhan-blog.s3.ap-northeast-2.amazonaws.com/images/rust-wasm-pack-malloc-error/2024-04-02-11-04-34.png.webp"}}),$=new Ut({props:{src:"https://neulhan-blog.s3.ap-northeast-2.amazonaws.com/images/rust-wasm-pack-malloc-error/2024-04-02-11-13-25.png.webp"}}),S=new Ut({props:{src:"https://neulhan-blog.s3.ap-northeast-2.amazonaws.com/images/rust-wasm-pack-malloc-error/2024-04-03-09-03-14.png.webp"}}),{c(){u=s("p"),A(o.$$.fragment),_=p(),f=s("p"),f.textContent=m,c=p(),b=s("pre"),V=new Ft(!1),Y=p(),G=s("br"),K=p(),d=s("h2"),d.textContent=Vt,Q=p(),w=s("p"),w.textContent=Yt,X=p(),k=s("pre"),Z=new Ft(!1),tt=p(),q=s("p"),A(x.$$.fragment),et=p(),lt=s("br"),at=p(),C=s("p"),C.textContent=Gt,st=p(),J=s("p"),A($.$$.fragment),nt=p(),g=s("pre"),pt=new Ft(!1),it=p(),h=s("p"),h.innerHTML=Kt,ut=p(),mt=s("br"),rt=p(),ot=s("br"),ct=p(),ft=s("br"),_t=p(),y=s("h2"),y.textContent=Qt,bt=p(),E=s("p"),E.textContent=Xt,vt=p(),P=s("h3"),P.textContent=Zt,dt=p(),R=s("pre"),wt=new Ft(!1),kt=p(),xt=s("br"),Ct=p(),$t=s("br"),gt=p(),ht=s("br"),yt=p(),B=s("p"),B.innerHTML=te,Et=p(),H=s("table"),H.innerHTML=ee,Pt=p(),Rt=s("br"),Bt=p(),Ht=s("br"),Tt=p(),T=s("p"),T.innerHTML=le,jt=p(),j=s("p"),j.textContent=ae,Mt=p(),St=s("br"),Lt=p(),zt=s("br"),Wt=p(),M=s("h3"),M.textContent=se,qt=p(),O=s("p"),A(S.$$.fragment),Jt=p(),L=s("p"),L.textContent=ne,Ot=p(),z=s("p"),z.textContent=pe,this.h()},l(t){u=n(t,"P",{});var l=v(u);F(o.$$.fragment,l),l.forEach(e),_=i(t),f=n(t,"P",{"data-svelte-h":!0}),r(f)!=="svelte-m325e8"&&(f.textContent=m),c=i(t),b=n(t,"PRE",{class:!0});var ie=v(b);V=It(ie,!1),ie.forEach(e),Y=i(t),G=n(t,"BR",{}),K=i(t),d=n(t,"H2",{"data-svelte-h":!0}),r(d)!=="svelte-1moqm8h"&&(d.textContent=Vt),Q=i(t),w=n(t,"P",{"data-svelte-h":!0}),r(w)!=="svelte-rvvfjc"&&(w.textContent=Yt),X=i(t),k=n(t,"PRE",{class:!0});var ue=v(k);Z=It(ue,!1),ue.forEach(e),tt=i(t),q=n(t,"P",{});var me=v(q);F(x.$$.fragment,me),me.forEach(e),et=i(t),lt=n(t,"BR",{}),at=i(t),C=n(t,"P",{"data-svelte-h":!0}),r(C)!=="svelte-v7bx4i"&&(C.textContent=Gt),st=i(t),J=n(t,"P",{});var re=v(J);F($.$$.fragment,re),re.forEach(e),nt=i(t),g=n(t,"PRE",{class:!0});var oe=v(g);pt=It(oe,!1),oe.forEach(e),it=i(t),h=n(t,"P",{"data-svelte-h":!0}),r(h)!=="svelte-1aervrl"&&(h.innerHTML=Kt),ut=i(t),mt=n(t,"BR",{}),rt=i(t),ot=n(t,"BR",{}),ct=i(t),ft=n(t,"BR",{}),_t=i(t),y=n(t,"H2",{"data-svelte-h":!0}),r(y)!=="svelte-11ar0pq"&&(y.textContent=Qt),bt=i(t),E=n(t,"P",{"data-svelte-h":!0}),r(E)!=="svelte-x4yshe"&&(E.textContent=Xt),vt=i(t),P=n(t,"H3",{"data-svelte-h":!0}),r(P)!=="svelte-o5y0b5"&&(P.textContent=Zt),dt=i(t),R=n(t,"PRE",{class:!0});var ce=v(R);wt=It(ce,!1),ce.forEach(e),kt=i(t),xt=n(t,"BR",{}),Ct=i(t),$t=n(t,"BR",{}),gt=i(t),ht=n(t,"BR",{}),yt=i(t),B=n(t,"P",{"data-svelte-h":!0}),r(B)!=="svelte-1npvbrr"&&(B.innerHTML=te),Et=i(t),H=n(t,"TABLE",{"data-svelte-h":!0}),r(H)!=="svelte-3aqbrk"&&(H.innerHTML=ee),Pt=i(t),Rt=n(t,"BR",{}),Bt=i(t),Ht=n(t,"BR",{}),Tt=i(t),T=n(t,"P",{"data-svelte-h":!0}),r(T)!=="svelte-if6f1k"&&(T.innerHTML=le),jt=i(t),j=n(t,"P",{"data-svelte-h":!0}),r(j)!=="svelte-okln8t"&&(j.textContent=ae),Mt=i(t),St=n(t,"BR",{}),Lt=i(t),zt=n(t,"BR",{}),Wt=i(t),M=n(t,"H3",{"data-svelte-h":!0}),r(M)!=="svelte-1owh1i7"&&(M.textContent=se),qt=i(t),O=n(t,"P",{});var fe=v(O);F(S.$$.fragment,fe),fe.forEach(e),Jt=i(t),L=n(t,"P",{"data-svelte-h":!0}),r(L)!=="svelte-5p5mc3"&&(L.textContent=ne),Ot=i(t),z=n(t,"P",{"data-svelte-h":!0}),r(z)!=="svelte-1fouch8"&&(z.textContent=pe),this.h()},h(){V.a=null,Nt(b,"class","language-shell"),Z.a=null,Nt(k,"class","language-undefined"),pt.a=null,Nt(g,"class","language-js"),wt.a=null,Nt(R,"class","language-shell")},m(t,l){a(t,u,l),I(o,u,null),a(t,_,l),a(t,f,l),a(t,c,l),a(t,b,l),V.m(de,b),a(t,Y,l),a(t,G,l),a(t,K,l),a(t,d,l),a(t,Q,l),a(t,w,l),a(t,X,l),a(t,k,l),Z.m(we,k),a(t,tt,l),a(t,q,l),I(x,q,null),a(t,et,l),a(t,lt,l),a(t,at,l),a(t,C,l),a(t,st,l),a(t,J,l),I($,J,null),a(t,nt,l),a(t,g,l),pt.m(ke,g),a(t,it,l),a(t,h,l),a(t,ut,l),a(t,mt,l),a(t,rt,l),a(t,ot,l),a(t,ct,l),a(t,ft,l),a(t,_t,l),a(t,y,l),a(t,bt,l),a(t,E,l),a(t,vt,l),a(t,P,l),a(t,dt,l),a(t,R,l),wt.m(xe,R),a(t,kt,l),a(t,xt,l),a(t,Ct,l),a(t,$t,l),a(t,gt,l),a(t,ht,l),a(t,yt,l),a(t,B,l),a(t,Et,l),a(t,H,l),a(t,Pt,l),a(t,Rt,l),a(t,Bt,l),a(t,Ht,l),a(t,Tt,l),a(t,T,l),a(t,jt,l),a(t,j,l),a(t,Mt,l),a(t,St,l),a(t,Lt,l),a(t,zt,l),a(t,Wt,l),a(t,M,l),a(t,qt,l),a(t,O,l),I(S,O,null),a(t,Jt,l),a(t,L,l),a(t,Ot,l),a(t,z,l),At=!0},p:$e,i(t){At||(N(o.$$.fragment,t),N(x.$$.fragment,t),N($.$$.fragment,t),N(S.$$.fragment,t),At=!0)},o(t){U(o.$$.fragment,t),U(x.$$.fragment,t),U($.$$.fragment,t),U(S.$$.fragment,t),At=!1},d(t){t&&(e(u),e(_),e(f),e(c),e(b),e(Y),e(G),e(K),e(d),e(Q),e(w),e(X),e(k),e(tt),e(q),e(et),e(lt),e(at),e(C),e(st),e(J),e(nt),e(g),e(it),e(h),e(ut),e(mt),e(rt),e(ot),e(ct),e(ft),e(_t),e(y),e(bt),e(E),e(vt),e(P),e(dt),e(R),e(kt),e(xt),e(Ct),e($t),e(gt),e(ht),e(yt),e(B),e(Et),e(H),e(Pt),e(Rt),e(Bt),e(Ht),e(Tt),e(T),e(jt),e(j),e(Mt),e(St),e(Lt),e(zt),e(Wt),e(M),e(qt),e(O),e(Jt),e(L),e(Ot),e(z)),D(o),D(x),D($),D(S)}}}function Re(W){let u,o;const _=[W[0],ve];let f={$$slots:{default:[Pe]},$$scope:{ctx:W}};for(let m=0;m<_.length;m+=1)f=Dt(f,_[m]);return u=new ye({props:f}),{c(){A(u.$$.fragment)},l(m){F(u.$$.fragment,m)},m(m,c){I(u,m,c),o=!0},p(m,[c]){const b=c&1?Ee(_,[c&1&&be(m[0]),c&0&&be(ve)]):{};c&2&&(b.$$scope={dirty:c,ctx:m}),u.$set(b)},i(m){o||(N(u.$$.fragment,m),o=!0)},o(m){U(u.$$.fragment,m),o=!1},d(m){D(u,m)}}}const ve={emoji:"😱",title:"rust wasm-pack malloc error",description:"아래 명령어로 rust 프로젝트를 번들링, npm 에 배포해서 사용해왔다. wasm-pack build --release --target bundler 근데 npm 배포 없이 빌드 결과물을 index.html 에서 불러와서 테스트하려니깐 아래와 같은 에러 발생",date:"2024-04-02",categories:["rust","wasm","debugging"],published:!0,thumbnail:"https://neulhan-blog.s3.ap-northeast-2.amazonaws.com/images/rust-wasm-pack-malloc-error/2024-04-03-09-41-53.png.webp"};function Be(W,u,o){return W.$$set=_=>{o(0,u=Dt(Dt({},u),_e(_)))},u=_e(u),[u]}class Se extends ge{constructor(u){super(),he(this,u,Be,Re,Ce,{})}}export{Se as default,ve as metadata};