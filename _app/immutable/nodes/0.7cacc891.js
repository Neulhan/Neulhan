import{s as S,n as v,c as V,u as j,g as A,d as D}from"../chunks/scheduler.63274e7e.js";import{S as I,i as M,g as p,s as $,h as d,j as g,x as N,c as b,f as u,k as h,a as y,y as _,z as T,m as z,n as C,r as H,u as O,v as q,d as x,t as w,w as P}from"../chunks/index.68032c5d.js";import{e as k}from"../chunks/each.e59479a4.js";const R=!0,Y=Object.freeze(Object.defineProperty({__proto__:null,prerender:R},Symbol.toStringTag,{value:"Module"})),U=""+new URL("../assets/logo-full-light-transparent.1de22219.svg",import.meta.url).href;function L(o,e,l){const f=o.slice();return f[1]=e[l],f}function E(o){let e,l=o[1].text+"",f,i;return{c(){e=p("a"),f=z(l),i=$(),this.h()},l(a){e=d(a,"A",{class:!0,href:!0,target:!0});var c=g(e);f=C(c,l),i=b(c),c.forEach(u),this.h()},h(){h(e,"class","bg-white py-1 px-2 mb-1 hover:bg-slate-100 cursor-pointer"),h(e,"href",o[1].href),h(e,"target",o[1].target)},m(a,c){y(a,e,c),_(e,f),_(e,i)},p:v,d(a){a&&u(e)}}}function B(o){let e,l,f=`<a href="/"><img class="w-32" src="${U}" alt="neulhan logo"/></a>`,i,a,c=k(o[0]),s=[];for(let t=0;t<c.length;t+=1)s[t]=E(L(o,c,t));return{c(){e=p("div"),l=p("div"),l.innerHTML=f,i=$(),a=p("nav");for(let t=0;t<s.length;t+=1)s[t].c();this.h()},l(t){e=d(t,"DIV",{class:!0});var r=g(e);l=d(r,"DIV",{class:!0,"data-svelte-h":!0}),N(l)!=="svelte-f3eb4u"&&(l.innerHTML=f),i=b(r),a=d(r,"NAV",{class:!0});var n=g(a);for(let m=0;m<s.length;m+=1)s[m].l(n);n.forEach(u),r.forEach(u),this.h()},h(){h(l,"class","logo mb-4"),h(a,"class","py-4 flex flex-col"),h(e,"class","w-64 p-4 shrink-0")},m(t,r){y(t,e,r),_(e,l),_(e,i),_(e,a);for(let n=0;n<s.length;n+=1)s[n]&&s[n].m(a,null)},p(t,[r]){if(r&1){c=k(t[0]);let n;for(n=0;n<c.length;n+=1){const m=L(t,c,n);s[n]?s[n].p(m,r):(s[n]=E(m),s[n].c(),s[n].m(a,null))}for(;n<s.length;n+=1)s[n].d(1);s.length=c.length}},i:v,o:v,d(t){t&&u(e),T(s,t)}}}function F(o){return[[{href:"/about",text:"소개"},{href:"https://velog.io/@neulhan",text:"예전 블로그",target:"_blank"}]]}class G extends I{constructor(e){super(),M(this,e,F,B,S,{})}}function J(o){let e,l,f,i,a;l=new G({});const c=o[1].default,s=V(c,o,o[0],null);return{c(){e=p("div"),H(l.$$.fragment),f=$(),i=p("main"),s&&s.c(),this.h()},l(t){e=d(t,"DIV",{class:!0});var r=g(e);O(l.$$.fragment,r),f=b(r),i=d(r,"MAIN",{});var n=g(i);s&&s.l(n),n.forEach(u),r.forEach(u),this.h()},h(){h(e,"class","app flex flex-col sm:flex-row")},m(t,r){y(t,e,r),q(l,e,null),_(e,f),_(e,i),s&&s.m(i,null),a=!0},p(t,[r]){s&&s.p&&(!a||r&1)&&j(s,c,t,t[0],a?D(c,t[0],r,null):A(t[0]),null)},i(t){a||(x(l.$$.fragment,t),x(s,t),a=!0)},o(t){w(l.$$.fragment,t),w(s,t),a=!1},d(t){t&&u(e),P(l),s&&s.d(t)}}}function K(o,e,l){let{$$slots:f={},$$scope:i}=e;return o.$$set=a=>{"$$scope"in a&&l(0,i=a.$$scope)},[i,f]}class Z extends I{constructor(e){super(),M(this,e,K,J,S,{})}}export{Z as component,Y as universal};