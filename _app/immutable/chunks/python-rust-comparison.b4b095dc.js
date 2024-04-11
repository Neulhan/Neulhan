import{s as Lt,y as Z,z as Bt,n as Tt}from"./scheduler.1916e345.js";import{S as Mt,i as Pt,r as tt,u as et,v as lt,d as nt,t as at,w as st,g as r,s as p,m as qt,h as i,x as d,c as m,j as wt,n as At,f as l,a as n,y as kt}from"./index.5c9dac44.js";import{M as zt,g as jt,a as $t}from"./mdsvex.218628b2.js";import{I as Et}from"./img.1bc7d088.js";function Dt(k){let a,_=`python 과 rust 서버 응답속도 비교.
python 을 메인언어로 쓰다보면 늘 듣게되는 이야기. python 은 느리다.
느리면 얼마나 느린지를 대강 파악해두면 python 외의 대안이 필요한 경우를 구분할 수 있을 것.`,h,u,s=`techempower 라는 곳에서 진행하는 web framework benchmark 라는게 있다.
<a href="https://www.techempower.com/benchmarks/" rel="nofollow">https://www.techempower.com/benchmarks/</a>`,o,f,Y,v,j,x,rt=`다만 실제 서비스를 운영하는 개발자 입장에서 봤을 때는 비교가 확실하지 않은게,<br/>
웹 프레임워크 뿐만 아니라 DB 클라이언트들도 올라와 있기 때문.`,D,C,it="실제 서비스에서 fastapi-sqlalchemy, mern 스택 등등 여러 프레임워크를 조합해서 쓰는걸 생각하면 실제로 어느정도 차이가 나는지 가늠하기가 어렵다.",S,z,c,g,b,pt=`그래서 자주 쓰는 프레임워크를 조합해서 직접 벤치마크를 해보면 앞으로 프레임워크 선택에 더 도움이 될 것 같아서 시도해봤다.<br/>
사용하는 프레임워크 등등 차이가 생길 수 있는 부분이 너무 많아서, 비슷하게 구성하면 대강 이정도 차이가 나는구나 정도로 러프하게 진행.`,F,y,mt=`rust 가 가장 빠르기 때문에, rust 에서 주류로 보이는 axum:sqlx 조합을 선택.<br/>
python 진영에서는 요즘 가장 많이 선택되는 fastapi:sqlalchemy 조합을 선택.<br/>
django-ninja 는 내가 좋아하고 자주 사용하기 때문에 그냥 같이 비교해보기로.`,I,B,dt="그래서 이번엔 rust[axum:sqlx], python[fastapi:sqlalchemy], python[django-ninja] 총 3개의 스택을 비교해보기로.",U,w,ot="아래는 이번 벤치마크의 정보",W,$,ut="[Common]",G,E,ht=`환경은 AWS 클라우드 환경에서 진행.
벤치마크를 돌리고 내려야 하기 때문에 terraform 을 활용해서 AWS 에 인프라를 구성.`,J,H,ft="<thead><tr><th></th> <th></th></tr></thead> <tbody><tr><td>provider</td> <td>aws-ec2</td></tr> <tr><td>database instance</td> <td>rds:t3.micro</td></tr> <tr><td>server instance</td> <td>ec2:t3.micro</td></tr></tbody>",K,L,_t="*t3.micro",N,T,vt="<thead><tr><th>cpu</th> <th>기준선</th> <th>memory</th> <th>cost/hour</th></tr></thead> <tbody><tr><td>2vCPU</td> <td>10%</td> <td>1GiB Memory</td> <td>0.0104 USD</td></tr></tbody>",O,M,xt="[python]",Q,P,Ct="<thead><tr><th></th> <th></th></tr></thead> <tbody><tr><td>python</td> <td>3.11.6</td></tr> <tr><td>http server</td> <td>fastapi 0.104.1</td></tr> <tr><td>database</td> <td>sqlalchemy 2.0.23</td></tr> <tr><td>wsgi server</td> <td>uvicorn 0.24.0</td></tr> <tr><td>serializer</td> <td>pydantic 2.5.2</td></tr></tbody>",R,q,ct="[rust]",V,A,bt="<thead><tr><th></th> <th></th></tr></thead> <tbody><tr><td>http server</td> <td>axum 0.6.20</td></tr> <tr><td>database</td> <td>sqlx 0.7.3</td></tr></tbody>",X;return v=new Et({props:{src:"https://neulhan-blog.s3.ap-northeast-2.amazonaws.com/images/python%EA%B3%BC-rust-%EC%84%9C%EB%B2%84-%EC%9D%91%EB%8B%B5%EC%86%8D%EB%8F%84-%EB%B9%84%EA%B5%90/2023-12-17-18-40-02.png.webp",alt:"techempower benchmark rust"}}),c=new Et({props:{src:"https://neulhan-blog.s3.ap-northeast-2.amazonaws.com/images/python%EA%B3%BC-rust-%EC%84%9C%EB%B2%84-%EC%9D%91%EB%8B%B5%EC%86%8D%EB%8F%84-%EB%B9%84%EA%B5%90/2023-12-17-18-43-57.png.webp",alt:"techempower benchmark db client"}}),{c(){a=r("p"),a.textContent=_,h=p(),u=r("p"),u.innerHTML=s,o=p(),f=r("p"),Y=qt(`가장 빠른 웹 프레임워크를 100% 의 속도로 봤을 때, 다른 프레임워크의 벤치마크 성능을 비교해뒀다.
상위권은 대부분 rust, c++, c# 진영의 프레임워크.
`),tt(v.$$.fragment),j=p(),x=r("p"),x.innerHTML=rt,D=p(),C=r("p"),C.textContent=it,S=p(),z=r("p"),tt(c.$$.fragment),g=p(),b=r("p"),b.innerHTML=pt,F=p(),y=r("p"),y.innerHTML=mt,I=p(),B=r("p"),B.textContent=dt,U=p(),w=r("p"),w.textContent=ot,W=p(),$=r("h2"),$.textContent=ut,G=p(),E=r("p"),E.textContent=ht,J=p(),H=r("table"),H.innerHTML=ft,K=p(),L=r("h4"),L.textContent=_t,N=p(),T=r("table"),T.innerHTML=vt,O=p(),M=r("h2"),M.textContent=xt,Q=p(),P=r("table"),P.innerHTML=Ct,R=p(),q=r("h2"),q.textContent=ct,V=p(),A=r("table"),A.innerHTML=bt},l(t){a=i(t,"P",{"data-svelte-h":!0}),d(a)!=="svelte-4wn2k2"&&(a.textContent=_),h=m(t),u=i(t,"P",{"data-svelte-h":!0}),d(u)!=="svelte-1br218p"&&(u.innerHTML=s),o=m(t),f=i(t,"P",{});var e=wt(f);Y=At(e,`가장 빠른 웹 프레임워크를 100% 의 속도로 봤을 때, 다른 프레임워크의 벤치마크 성능을 비교해뒀다.
상위권은 대부분 rust, c++, c# 진영의 프레임워크.
`),et(v.$$.fragment,e),e.forEach(l),j=m(t),x=i(t,"P",{"data-svelte-h":!0}),d(x)!=="svelte-hbqr6r"&&(x.innerHTML=rt),D=m(t),C=i(t,"P",{"data-svelte-h":!0}),d(C)!=="svelte-112379i"&&(C.textContent=it),S=m(t),z=i(t,"P",{});var yt=wt(z);et(c.$$.fragment,yt),yt.forEach(l),g=m(t),b=i(t,"P",{"data-svelte-h":!0}),d(b)!=="svelte-xbncem"&&(b.innerHTML=pt),F=m(t),y=i(t,"P",{"data-svelte-h":!0}),d(y)!=="svelte-c86fla"&&(y.innerHTML=mt),I=m(t),B=i(t,"P",{"data-svelte-h":!0}),d(B)!=="svelte-17g2izb"&&(B.textContent=dt),U=m(t),w=i(t,"P",{"data-svelte-h":!0}),d(w)!=="svelte-4ka3i5"&&(w.textContent=ot),W=m(t),$=i(t,"H2",{"data-svelte-h":!0}),d($)!=="svelte-19p6gp"&&($.textContent=ut),G=m(t),E=i(t,"P",{"data-svelte-h":!0}),d(E)!=="svelte-196216h"&&(E.textContent=ht),J=m(t),H=i(t,"TABLE",{"data-svelte-h":!0}),d(H)!=="svelte-5ipvag"&&(H.innerHTML=ft),K=m(t),L=i(t,"H4",{"data-svelte-h":!0}),d(L)!=="svelte-1xzpzb1"&&(L.textContent=_t),N=m(t),T=i(t,"TABLE",{"data-svelte-h":!0}),d(T)!=="svelte-zj12fw"&&(T.innerHTML=vt),O=m(t),M=i(t,"H2",{"data-svelte-h":!0}),d(M)!=="svelte-y9ky0w"&&(M.textContent=xt),Q=m(t),P=i(t,"TABLE",{"data-svelte-h":!0}),d(P)!=="svelte-vdicm3"&&(P.innerHTML=Ct),R=m(t),q=i(t,"H2",{"data-svelte-h":!0}),d(q)!=="svelte-v58jh4"&&(q.textContent=ct),V=m(t),A=i(t,"TABLE",{"data-svelte-h":!0}),d(A)!=="svelte-1q5xgzu"&&(A.innerHTML=bt)},m(t,e){n(t,a,e),n(t,h,e),n(t,u,e),n(t,o,e),n(t,f,e),kt(f,Y),lt(v,f,null),n(t,j,e),n(t,x,e),n(t,D,e),n(t,C,e),n(t,S,e),n(t,z,e),lt(c,z,null),n(t,g,e),n(t,b,e),n(t,F,e),n(t,y,e),n(t,I,e),n(t,B,e),n(t,U,e),n(t,w,e),n(t,W,e),n(t,$,e),n(t,G,e),n(t,E,e),n(t,J,e),n(t,H,e),n(t,K,e),n(t,L,e),n(t,N,e),n(t,T,e),n(t,O,e),n(t,M,e),n(t,Q,e),n(t,P,e),n(t,R,e),n(t,q,e),n(t,V,e),n(t,A,e),X=!0},p:Tt,i(t){X||(nt(v.$$.fragment,t),nt(c.$$.fragment,t),X=!0)},o(t){at(v.$$.fragment,t),at(c.$$.fragment,t),X=!1},d(t){t&&(l(a),l(h),l(u),l(o),l(f),l(j),l(x),l(D),l(C),l(S),l(z),l(g),l(b),l(F),l(y),l(I),l(B),l(U),l(w),l(W),l($),l(G),l(E),l(J),l(H),l(K),l(L),l(N),l(T),l(O),l(M),l(Q),l(P),l(R),l(q),l(V),l(A)),st(v),st(c)}}}function St(k){let a,_;const h=[k[0],Ht];let u={$$slots:{default:[Dt]},$$scope:{ctx:k}};for(let s=0;s<h.length;s+=1)u=Z(u,h[s]);return a=new zt({props:u}),{c(){tt(a.$$.fragment)},l(s){et(a.$$.fragment,s)},m(s,o){lt(a,s,o),_=!0},p(s,[o]){const f=o&1?jt(h,[o&1&&$t(s[0]),o&0&&$t(Ht)]):{};o&2&&(f.$$scope={dirty:o,ctx:s}),a.$set(f)},i(s){_||(nt(a.$$.fragment,s),_=!0)},o(s){at(a.$$.fragment,s),_=!1},d(s){st(a,s)}}}const Ht={title:"python과 rust 서버 응답속도 비교",description:"python과 rust 서버 응답속도 비교",date:"2023-11-23",categories:["career"],published:!1,thumbnail:null};function gt(k,a,_){return k.$$set=h=>{_(0,a=Z(Z({},a),Bt(h)))},a=Bt(a),[a]}class Gt extends Mt{constructor(a){super(),Pt(this,a,gt,St,Lt,{})}}export{Gt as default,Ht as metadata};