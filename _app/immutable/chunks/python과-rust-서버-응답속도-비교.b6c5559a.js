import{s as Lt,y as Z,z as yt,n as Tt}from"./scheduler.1916e345.js";import{S as Mt,i as Pt,r as tt,u as et,v as lt,d as nt,t as at,w as st,g as r,s as i,m as At,h as u,x as d,c as p,j as Et,n as qt,f as l,a as n,y as kt}from"./index.5c9dac44.js";import{M as zt,g as jt,a as wt}from"./mdsvex.218628b2.js";import{I as $t}from"./img.e58421d2.js";function Dt(k){let a,_=`python 과 rust 서버 응답속도 비교.
python 을 메인언어로 쓰다보면 늘 듣게되는 이야기. python 은 느리다.
느리면 얼마나 느린지를 대강 파악해두면 python 외의 대안이 필요한 경우를 구분할 수 있을 것.`,h,o,s=`techempower 라는 곳에서 진행하는 web framework benchmark 라는게 있다.
<a href="https://www.techempower.com/benchmarks/" rel="nofollow">https://www.techempower.com/benchmarks/</a>`,m,f,Y,v,j,x,rt=`다만 실제 서비스를 운영하는 개발자 입장에서 봤을 때는 비교가 확실하지 않은게,<br/>
웹 프레임워크 뿐만 아니라 DB 클라이언트들도 올라와 있기 때문.`,D,C,ut="실제 서비스에서 fastapi-sqlalchemy, mern 스택 등등 여러 프레임워크를 조합해서 쓰는걸 생각하면 실제로 어느정도 차이가 나는지 가늠하기가 어렵다.",S,z,b,F,c,it=`그래서 자주 쓰는 프레임워크를 조합해서 직접 벤치마크를 해보면 앞으로 프레임워크 선택에 더 도움이 될 것 같아서 시도해봤다.<br/>
사용하는 프레임워크 등등 차이가 생길 수 있는 부분이 너무 많아서, 비슷하게 구성하면 대강 이정도 차이가 나는구나 정도로 러프하게 진행.`,g,B,pt=`rust 가 가장 빠르기 때문에, rust 에서 주류로 보이는 axum:sqlx 조합을 선택.<br/>
python 진영에서는 요즘 가장 많이 선택되는 fastapi:sqlalchemy 조합을 선택.<br/>
django-ninja 는 내가 좋아하고 자주 사용하기 때문에 그냥 같이 비교해보기로.`,I,y,dt="그래서 이번엔 rust[axum:sqlx], python[fastapi:sqlalchemy], python[django-ninja] 총 3개의 스택을 비교해보기로.",U,E,mt="아래는 이번 벤치마크의 정보",W,w,ot="[Common]",G,$,ht=`환경은 AWS 클라우드 환경에서 진행.
벤치마크를 돌리고 내려야 하기 때문에 terraform 을 활용해서 AWS 에 인프라를 구성.`,J,H,ft="<thead><tr><th></th> <th></th></tr></thead> <tbody><tr><td>provider</td> <td>aws-ec2</td></tr> <tr><td>database instance</td> <td>rds:t3.micro</td></tr> <tr><td>server instance</td> <td>ec2:t3.micro</td></tr></tbody>",K,L,_t="*t3.micro",N,T,vt="<thead><tr><th>cpu</th> <th>기준선</th> <th>memory</th> <th>cost/hour</th></tr></thead> <tbody><tr><td>2vCPU</td> <td>10%</td> <td>1GiB Memory</td> <td>0.0104 USD</td></tr></tbody>",O,M,xt="[python]",Q,P,Ct="<thead><tr><th></th> <th></th></tr></thead> <tbody><tr><td>python</td> <td>3.11.6</td></tr> <tr><td>http server</td> <td>fastapi 0.104.1</td></tr> <tr><td>database</td> <td>sqlalchemy 2.0.23</td></tr> <tr><td>wsgi server</td> <td>uvicorn 0.24.0</td></tr> <tr><td>serializer</td> <td>pydantic 2.5.2</td></tr></tbody>",R,A,bt="[rust]",V,q,ct="<thead><tr><th></th> <th></th></tr></thead> <tbody><tr><td>http server</td> <td>axum 0.6.20</td></tr> <tr><td>database</td> <td>sqlx 0.7.3</td></tr></tbody>",X;return v=new $t({props:{src:"https://neulhan-blog.s3.ap-northeast-2.amazonaws.com/images/python%EA%B3%BC-rust-%EC%84%9C%EB%B2%84-%EC%9D%91%EB%8B%B5%EC%86%8D%EB%8F%84-%EB%B9%84%EA%B5%90/2023-12-17-18-40-02.png.webp",alt:"techempower benchmark rust"}}),b=new $t({props:{src:"https://neulhan-blog.s3.ap-northeast-2.amazonaws.com/images/python%EA%B3%BC-rust-%EC%84%9C%EB%B2%84-%EC%9D%91%EB%8B%B5%EC%86%8D%EB%8F%84-%EB%B9%84%EA%B5%90/2023-12-17-18-43-57.png.webp",alt:"techempower benchmark db client"}}),{c(){a=r("p"),a.textContent=_,h=i(),o=r("p"),o.innerHTML=s,m=i(),f=r("p"),Y=At(`가장 빠른 웹 프레임워크를 100% 의 속도로 봤을 때, 다른 프레임워크의 벤치마크 성능을 비교해뒀다.
상위권은 대부분 rust, c++, c# 진영의 프레임워크.
`),tt(v.$$.fragment),j=i(),x=r("p"),x.innerHTML=rt,D=i(),C=r("p"),C.textContent=ut,S=i(),z=r("p"),tt(b.$$.fragment),F=i(),c=r("p"),c.innerHTML=it,g=i(),B=r("p"),B.innerHTML=pt,I=i(),y=r("p"),y.textContent=dt,U=i(),E=r("p"),E.textContent=mt,W=i(),w=r("h2"),w.textContent=ot,G=i(),$=r("p"),$.textContent=ht,J=i(),H=r("table"),H.innerHTML=ft,K=i(),L=r("h4"),L.textContent=_t,N=i(),T=r("table"),T.innerHTML=vt,O=i(),M=r("h2"),M.textContent=xt,Q=i(),P=r("table"),P.innerHTML=Ct,R=i(),A=r("h2"),A.textContent=bt,V=i(),q=r("table"),q.innerHTML=ct},l(t){a=u(t,"P",{"data-svelte-h":!0}),d(a)!=="svelte-4wn2k2"&&(a.textContent=_),h=p(t),o=u(t,"P",{"data-svelte-h":!0}),d(o)!=="svelte-1br218p"&&(o.innerHTML=s),m=p(t),f=u(t,"P",{});var e=Et(f);Y=qt(e,`가장 빠른 웹 프레임워크를 100% 의 속도로 봤을 때, 다른 프레임워크의 벤치마크 성능을 비교해뒀다.
상위권은 대부분 rust, c++, c# 진영의 프레임워크.
`),et(v.$$.fragment,e),e.forEach(l),j=p(t),x=u(t,"P",{"data-svelte-h":!0}),d(x)!=="svelte-hbqr6r"&&(x.innerHTML=rt),D=p(t),C=u(t,"P",{"data-svelte-h":!0}),d(C)!=="svelte-112379i"&&(C.textContent=ut),S=p(t),z=u(t,"P",{});var Bt=Et(z);et(b.$$.fragment,Bt),Bt.forEach(l),F=p(t),c=u(t,"P",{"data-svelte-h":!0}),d(c)!=="svelte-xbncem"&&(c.innerHTML=it),g=p(t),B=u(t,"P",{"data-svelte-h":!0}),d(B)!=="svelte-c86fla"&&(B.innerHTML=pt),I=p(t),y=u(t,"P",{"data-svelte-h":!0}),d(y)!=="svelte-17g2izb"&&(y.textContent=dt),U=p(t),E=u(t,"P",{"data-svelte-h":!0}),d(E)!=="svelte-4ka3i5"&&(E.textContent=mt),W=p(t),w=u(t,"H2",{"data-svelte-h":!0}),d(w)!=="svelte-19p6gp"&&(w.textContent=ot),G=p(t),$=u(t,"P",{"data-svelte-h":!0}),d($)!=="svelte-196216h"&&($.textContent=ht),J=p(t),H=u(t,"TABLE",{"data-svelte-h":!0}),d(H)!=="svelte-5ipvag"&&(H.innerHTML=ft),K=p(t),L=u(t,"H4",{"data-svelte-h":!0}),d(L)!=="svelte-1xzpzb1"&&(L.textContent=_t),N=p(t),T=u(t,"TABLE",{"data-svelte-h":!0}),d(T)!=="svelte-zj12fw"&&(T.innerHTML=vt),O=p(t),M=u(t,"H2",{"data-svelte-h":!0}),d(M)!=="svelte-y9ky0w"&&(M.textContent=xt),Q=p(t),P=u(t,"TABLE",{"data-svelte-h":!0}),d(P)!=="svelte-vdicm3"&&(P.innerHTML=Ct),R=p(t),A=u(t,"H2",{"data-svelte-h":!0}),d(A)!=="svelte-v58jh4"&&(A.textContent=bt),V=p(t),q=u(t,"TABLE",{"data-svelte-h":!0}),d(q)!=="svelte-1q5xgzu"&&(q.innerHTML=ct)},m(t,e){n(t,a,e),n(t,h,e),n(t,o,e),n(t,m,e),n(t,f,e),kt(f,Y),lt(v,f,null),n(t,j,e),n(t,x,e),n(t,D,e),n(t,C,e),n(t,S,e),n(t,z,e),lt(b,z,null),n(t,F,e),n(t,c,e),n(t,g,e),n(t,B,e),n(t,I,e),n(t,y,e),n(t,U,e),n(t,E,e),n(t,W,e),n(t,w,e),n(t,G,e),n(t,$,e),n(t,J,e),n(t,H,e),n(t,K,e),n(t,L,e),n(t,N,e),n(t,T,e),n(t,O,e),n(t,M,e),n(t,Q,e),n(t,P,e),n(t,R,e),n(t,A,e),n(t,V,e),n(t,q,e),X=!0},p:Tt,i(t){X||(nt(v.$$.fragment,t),nt(b.$$.fragment,t),X=!0)},o(t){at(v.$$.fragment,t),at(b.$$.fragment,t),X=!1},d(t){t&&(l(a),l(h),l(o),l(m),l(f),l(j),l(x),l(D),l(C),l(S),l(z),l(F),l(c),l(g),l(B),l(I),l(y),l(U),l(E),l(W),l(w),l(G),l($),l(J),l(H),l(K),l(L),l(N),l(T),l(O),l(M),l(Q),l(P),l(R),l(A),l(V),l(q)),st(v),st(b)}}}function St(k){let a,_;const h=[k[0],Ht];let o={$$slots:{default:[Dt]},$$scope:{ctx:k}};for(let s=0;s<h.length;s+=1)o=Z(o,h[s]);return a=new zt({props:o}),{c(){tt(a.$$.fragment)},l(s){et(a.$$.fragment,s)},m(s,m){lt(a,s,m),_=!0},p(s,[m]){const f=m&1?jt(h,[m&1&&wt(s[0]),m&0&&wt(Ht)]):{};m&2&&(f.$$scope={dirty:m,ctx:s}),a.$set(f)},i(s){_||(nt(a.$$.fragment,s),_=!0)},o(s){at(a.$$.fragment,s),_=!1},d(s){st(a,s)}}}const Ht={title:"python과 rust 서버 응답속도 비교",description:"python과 rust 서버 응답속도 비교",date:"2023-11-23",categories:["career"],published:!1,thumbnail:null};function Ft(k,a,_){return k.$$set=h=>{_(0,a=Z(Z({},a),yt(h)))},a=yt(a),[a]}class Gt extends Mt{constructor(a){super(),Pt(this,a,Ft,St,Lt,{})}}export{Gt as default,Ht as metadata};
