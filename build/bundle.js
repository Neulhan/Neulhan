var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function s(t){return null==t?"":t}function l(t,e){t.appendChild(e)}function c(t){t.parentNode.removeChild(t)}function u(t){return document.createElement(t)}function a(t){return document.createTextNode(t)}function h(){return a(" ")}function g(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function f(t,e){t.value=null==e?"":e}function d(t,e,n,o){t.style.setProperty(e,n,o?"important":"")}let p;function m(t){p=t}const $=[],v=[],b=[],x=[],y=Promise.resolve();let H=!1;function _(t){b.push(t)}let k=!1;const w=new Set;function E(){if(!k){k=!0;do{for(let t=0;t<$.length;t+=1){const e=$[t];m(e),N(e.$$)}for($.length=0;v.length;)v.pop()();for(let t=0;t<b.length;t+=1){const e=b[t];w.has(e)||(w.add(e),e())}b.length=0}while($.length);for(;x.length;)x.pop()();H=!1,k=!1,w.clear()}}function N(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(_)}}const j=new Set;function A(t,e){-1===t.$$.dirty[0]&&($.push(t),H||(H=!0,y.then(E)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function C(i,s,l,u,a,h,g=[-1]){const f=p;m(i);const d=s.props||{},$=i.$$={fragment:null,ctx:null,props:h,update:t,not_equal:a,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:n(),dirty:g,skip_bound:!1};let v=!1;if($.ctx=l?l(i,d,(t,e,...n)=>{const o=n.length?n[0]:e;return $.ctx&&a($.ctx[t],$.ctx[t]=o)&&(!$.skip_bound&&$.bound[t]&&$.bound[t](o),v&&A(i,t)),e}):[],$.update(),v=!0,o($.before_update),$.fragment=!!u&&u($.ctx),s.target){if(s.hydrate){const t=function(t){return Array.from(t.childNodes)}(s.target);$.fragment&&$.fragment.l(t),t.forEach(c)}else $.fragment&&$.fragment.c();s.intro&&((b=i.$$.fragment)&&b.i&&(j.delete(b),b.i(x))),function(t,n,i){const{fragment:s,on_mount:l,on_destroy:c,after_update:u}=t.$$;s&&s.m(n,i),_(()=>{const n=l.map(e).filter(r);c?c.push(...n):o(n),t.$$.on_mount=[]}),u.forEach(_)}(i,s.target,s.anchor),E()}var b,x;m(f)}function L(e){let n,o,r,i,p,m,$,v,b,x,y,H,_,k,w,E,N,j,A,C,L,O;return{c(){n=u("main"),o=u("section"),r=u("div"),i=u("neulhan"),i.textContent="개발자 늘한",p=h(),m=u("div"),m.textContent="늘 한결같은 즐거움을 좇고 있습니다",v=h(),b=u("section"),x=u("input"),y=h(),H=u("div"),_=a("입력값은 "),k=a(e[2]),w=a("입니다."),E=h(),N=u("section"),j=h(),A=u("section"),g(i,"class","svelte-1gnh9vn"),g(m,"class","sub svelte-1gnh9vn"),g(r,"class","sticky-elem svelte-1gnh9vn"),d(r,"top",(window.innerHeight-203)/2+"px"),g(o,"class",$="s0 "+e[3][0].type+" svelte-1gnh9vn"),d(o,"height",e[3][0].scrollHeight+"px"),d(o,"background-image","url('"+e[3][0].background+"')"),d(o,"background-size","auto "+(300-e[0]/e[3][0].scrollHeight*300<100?100:300-e[0]/e[3][0].scrollHeight*300)+"%"),g(x,"type","text"),g(b,"class","s1 svelte-1gnh9vn"),d(b,"height",e[3][1].scrollHeight+"px"),g(N,"class","s2 svelte-1gnh9vn"),d(N,"height",e[3][2].scrollHeight+"px"),g(A,"class","s3 svelte-1gnh9vn"),d(A,"height",e[3][3].scrollHeight+"px"),g(n,"class",C=s("page"+e[1])+" svelte-1gnh9vn")},m(t,s){var c,u,a,h;!function(t,e,n){t.insertBefore(e,n||null)}(t,n,s),l(n,o),l(o,r),l(r,i),l(r,p),l(r,m),l(n,v),l(n,b),l(b,x),f(x,e[2]),l(b,y),l(b,H),l(H,_),l(H,k),l(H,w),l(n,E),l(n,N),l(n,j),l(n,A),L||(c=x,u="input",a=e[4],c.addEventListener(u,a,h),O=()=>c.removeEventListener(u,a,h),L=!0)},p(t,[e]){8&e&&$!==($="s0 "+t[3][0].type+" svelte-1gnh9vn")&&g(o,"class",$),8&e&&d(o,"height",t[3][0].scrollHeight+"px"),8&e&&d(o,"background-image","url('"+t[3][0].background+"')"),9&e&&d(o,"background-size","auto "+(300-t[0]/t[3][0].scrollHeight*300<100?100:300-t[0]/t[3][0].scrollHeight*300)+"%"),4&e&&x.value!==t[2]&&f(x,t[2]),4&e&&function(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}(k,t[2]),8&e&&d(b,"height",t[3][1].scrollHeight+"px"),8&e&&d(N,"height",t[3][2].scrollHeight+"px"),8&e&&d(A,"height",t[3][3].scrollHeight+"px"),2&e&&C!==(C=s("page"+t[1])+" svelte-1gnh9vn")&&g(n,"class",C)},i:t,o:t,d(t){t&&c(n),L=!1,O()}}}function O(t,e,n){let o=0,r=0,i=0,s="";const l=[{scrollHeight:0,heightNum:2,background:"images/mountain.jpg"},{scrollHeight:0,heightNum:2},{scrollHeight:0,heightNum:3},{scrollHeight:0,heightNum:4}],c=()=>{console.log(o,i,u),n(5,r=0);for(let t=0;t<i;t++)n(5,r+=l[t].scrollHeight);if(o>l[i].scrollHeight+r&&n(1,i++,i),o<r){if(0==i)return;n(1,i--,i)}};let u;return window.addEventListener("load",()=>{(()=>{for(let t=0;t<l.length;t++)n(3,l[t].scrollHeight=window.innerHeight*l[t].heightNum,l);c()})()}),window.addEventListener("scroll",()=>{n(0,o=window.pageYOffset),c()}),t.$$.update=()=>{33&t.$$.dirty&&(u=o-r)},[o,i,s,l,function(){s=this.value,n(2,s)}]}return new class extends class{$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),C(this,t,O,L,i,{})}}({target:document.body,props:{name:"Neulhan"}})}();
//# sourceMappingURL=bundle.js.map
