import{s as u,d as r,u as c,g as _,e as d}from"./scheduler.1916e345.js";import{S as p,i as m,d as $,t as g}from"./index.ec981381.js";function j(n,o){const i={},e={},t={$$scope:1};let s=n.length;for(;s--;){const f=n[s],l=o[s];if(l){for(const a in f)a in l||(e[a]=1);for(const a in l)t[a]||(i[a]=l[a],t[a]=1);n[s]=l}else for(const a in f)t[a]=1}for(const f in e)f in i||(i[f]=void 0);return i}function M(n){return typeof n=="object"&&n!==null?n:{}}function y(n){let o;const i=n[1].default,e=r(i,n,n[0],null);return{c(){e&&e.c()},l(t){e&&e.l(t)},m(t,s){e&&e.m(t,s),o=!0},p(t,[s]){e&&e.p&&(!o||s&1)&&c(e,i,t,t[0],o?d(i,t[0],s,null):_(t[0]),null)},i(t){o||($(e,t),o=!0)},o(t){g(e,t),o=!1},d(t){e&&e.d(t)}}}function h(n,o,i){let{$$slots:e={},$$scope:t}=o;return n.$$set=s=>{"$$scope"in s&&i(0,t=s.$$scope)},[t,e]}class S extends p{constructor(o){super(),m(this,o,h,y,u,{})}}export{S as M,M as a,j as g};