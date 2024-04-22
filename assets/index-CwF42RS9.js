(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();const Rt=(e,t)=>e===t,k=Symbol("solid-proxy"),xe=Symbol("solid-track"),de={equals:Rt};let et=at;const G=1,he=2,tt={owned:null,cleanups:null,context:null,owner:null};var A=null;let Ee=null,Bt=null,_=null,x=null,U=null,ve=0;function te(e,t){const n=_,r=A,s=e.length===0,o=t===void 0?r:t,i=s?tt:{owned:null,cleanups:null,context:o?o.context:null,owner:o},l=s?e:()=>e(()=>B(()=>_e(i)));A=i,_=null;try{return W(l,!0)}finally{_=n,A=r}}function M(e,t){t=t?Object.assign({},de,t):de;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},r=s=>(typeof s=="function"&&(s=s(n.value)),lt(n,s));return[it.bind(n),r]}function C(e,t,n){const r=Ue(e,t,!1,G);oe(r)}function It(e,t,n){et=Ft;const r=Ue(e,t,!1,G);(!n||!n.render)&&(r.user=!0),U?U.push(r):oe(r)}function N(e,t,n){n=n?Object.assign({},de,n):de;const r=Ue(e,t,!0,0);return r.observers=null,r.observerSlots=null,r.comparator=n.equals||void 0,oe(r),it.bind(r)}function Tt(e){return W(e,!1)}function B(e){if(_===null)return e();const t=_;_=null;try{return e()}finally{_=t}}function nt(e,t,n){const r=Array.isArray(e);let s,o=n&&n.defer;return i=>{let l;if(r){l=Array(e.length);for(let u=0;u<e.length;u++)l[u]=e[u]()}else l=e();if(o)return o=!1,i;const c=B(()=>t(l,s,i));return s=l,c}}function ke(e){return A===null||(A.cleanups===null?A.cleanups=[e]:A.cleanups.push(e)),e}function Re(){return _}function rt(){return A}function st(e,t){const n=A,r=_;A=e,_=null;try{return W(t,!0)}catch(s){Fe(s)}finally{A=n,_=r}}function Lt(e){const t=_,n=A;return Promise.resolve().then(()=>{_=t,A=n;let r;return W(e,!1),_=A=null,r?r.done:void 0})}function ot(e,t){const n=Symbol("context");return{id:n,Provider:Kt(n),defaultValue:e}}function kt(e){return A&&A.context&&A.context[e.id]!==void 0?A.context[e.id]:e.defaultValue}function je(e){const t=N(e),n=N(()=>Be(t()));return n.toArray=()=>{const r=n();return Array.isArray(r)?r:r!=null?[r]:[]},n}function it(){if(this.sources&&this.state)if(this.state===G)oe(this);else{const e=x;x=null,W(()=>me(this),!1),x=e}if(_){const e=this.observers?this.observers.length:0;_.sources?(_.sources.push(this),_.sourceSlots.push(e)):(_.sources=[this],_.sourceSlots=[e]),this.observers?(this.observers.push(_),this.observerSlots.push(_.sources.length-1)):(this.observers=[_],this.observerSlots=[_.sources.length-1])}return this.value}function lt(e,t,n){let r=e.value;return(!e.comparator||!e.comparator(r,t))&&(e.value=t,e.observers&&e.observers.length&&W(()=>{for(let s=0;s<e.observers.length;s+=1){const o=e.observers[s],i=Ee&&Ee.running;i&&Ee.disposed.has(o),(i?!o.tState:!o.state)&&(o.pure?x.push(o):U.push(o),o.observers&&ct(o)),i||(o.state=G)}if(x.length>1e6)throw x=[],new Error},!1)),t}function oe(e){if(!e.fn)return;_e(e);const t=ve;jt(e,e.value,t)}function jt(e,t,n){let r;const s=A,o=_;_=A=e;try{r=e.fn(t)}catch(i){return e.pure&&(e.state=G,e.owned&&e.owned.forEach(_e),e.owned=null),e.updatedAt=n+1,Fe(i)}finally{_=o,A=s}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?lt(e,r):e.value=r,e.updatedAt=n)}function Ue(e,t,n,r=G,s){const o={fn:e,state:r,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:A,context:A?A.context:null,pure:n};return A===null||A!==tt&&(A.owned?A.owned.push(o):A.owned=[o]),o}function ge(e){if(e.state===0)return;if(e.state===he)return me(e);if(e.suspense&&B(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<ve);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(e=t[n],e.state===G)oe(e);else if(e.state===he){const r=x;x=null,W(()=>me(e,t[0]),!1),x=r}}function W(e,t){if(x)return e();let n=!1;t||(x=[]),U?n=!0:U=[],ve++;try{const r=e();return Ut(n),r}catch(r){n||(U=null),x=null,Fe(r)}}function Ut(e){if(x&&(at(x),x=null),e)return;const t=U;U=null,t.length&&W(()=>et(t),!1)}function at(e){for(let t=0;t<e.length;t++)ge(e[t])}function Ft(e){let t,n=0;for(t=0;t<e.length;t++){const r=e[t];r.user?e[n++]=r:ge(r)}for(t=0;t<n;t++)ge(e[t])}function me(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const r=e.sources[n];if(r.sources){const s=r.state;s===G?r!==t&&(!r.updatedAt||r.updatedAt<ve)&&ge(r):s===he&&me(r,t)}}}function ct(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=he,n.pure?x.push(n):U.push(n),n.observers&&ct(n))}}function _e(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),r=e.sourceSlots.pop(),s=n.observers;if(s&&s.length){const o=s.pop(),i=n.observerSlots.pop();r<s.length&&(o.sourceSlots[i]=r,s[r]=o,n.observerSlots[r]=i)}}if(e.owned){for(t=e.owned.length-1;t>=0;t--)_e(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0}function Ht(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function Fe(e,t=A){throw Ht(e)}function Be(e){if(typeof e=="function"&&!e.length)return Be(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const r=Be(e[n]);Array.isArray(r)?t.push.apply(t,r):t.push(r)}return t}return e}function Kt(e,t){return function(r){let s;return C(()=>s=B(()=>(A.context={...A.context,[e]:r.value},je(()=>r.children))),void 0),s}}const Mt=Symbol("fallback");function We(e){for(let t=0;t<e.length;t++)e[t]()}function qt(e,t,n={}){let r=[],s=[],o=[],i=0,l=t.length>1?[]:null;return ke(()=>We(o)),()=>{let c=e()||[],u,a;return c[xe],B(()=>{let f=c.length,g,h,m,p,w,P,D,E,R;if(f===0)i!==0&&(We(o),o=[],r=[],s=[],i=0,l&&(l=[])),n.fallback&&(r=[Mt],s[0]=te(Se=>(o[0]=Se,n.fallback())),i=1);else if(i===0){for(s=new Array(f),a=0;a<f;a++)r[a]=c[a],s[a]=te(d);i=f}else{for(m=new Array(f),p=new Array(f),l&&(w=new Array(f)),P=0,D=Math.min(i,f);P<D&&r[P]===c[P];P++);for(D=i-1,E=f-1;D>=P&&E>=P&&r[D]===c[E];D--,E--)m[E]=s[D],p[E]=o[D],l&&(w[E]=l[D]);for(g=new Map,h=new Array(E+1),a=E;a>=P;a--)R=c[a],u=g.get(R),h[a]=u===void 0?-1:u,g.set(R,a);for(u=P;u<=D;u++)R=r[u],a=g.get(R),a!==void 0&&a!==-1?(m[a]=s[u],p[a]=o[u],l&&(w[a]=l[u]),a=h[a],g.set(R,a)):o[u]();for(a=P;a<f;a++)a in m?(s[a]=m[a],o[a]=p[a],l&&(l[a]=w[a],l[a](a))):s[a]=te(d);s=s.slice(0,i=f),r=c.slice(0)}return s});function d(f){if(o[a]=f,l){const[g,h]=M(a);return l[a]=h,t(c[a],g)}return t(c[a])}}}function y(e,t){return B(()=>e(t||{}))}function ie(){return!0}const Gt={get(e,t,n){return t===k?n:e.get(t)},has(e,t){return t===k?!0:e.has(t)},set:ie,deleteProperty:ie,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:ie,deleteProperty:ie}},ownKeys(e){return e.keys()}};function $e(e){return(e=typeof e=="function"?e():e)?e:{}}function Wt(){for(let e=0,t=this.length;e<t;++e){const n=this[e]();if(n!==void 0)return n}}function zt(...e){let t=!1;for(let i=0;i<e.length;i++){const l=e[i];t=t||!!l&&k in l,e[i]=typeof l=="function"?(t=!0,N(l)):l}if(t)return new Proxy({get(i){for(let l=e.length-1;l>=0;l--){const c=$e(e[l])[i];if(c!==void 0)return c}},has(i){for(let l=e.length-1;l>=0;l--)if(i in $e(e[l]))return!0;return!1},keys(){const i=[];for(let l=0;l<e.length;l++)i.push(...Object.keys($e(e[l])));return[...new Set(i)]}},Gt);const n={},r=Object.create(null);for(let i=e.length-1;i>=0;i--){const l=e[i];if(!l)continue;const c=Object.getOwnPropertyNames(l);for(let u=c.length-1;u>=0;u--){const a=c[u];if(a==="__proto__"||a==="constructor")continue;const d=Object.getOwnPropertyDescriptor(l,a);if(!r[a])r[a]=d.get?{enumerable:!0,configurable:!0,get:Wt.bind(n[a]=[d.get.bind(l)])}:d.value!==void 0?d:void 0;else{const f=n[a];f&&(d.get?f.push(d.get.bind(l)):d.value!==void 0&&f.push(()=>d.value))}}}const s={},o=Object.keys(r);for(let i=o.length-1;i>=0;i--){const l=o[i],c=r[l];c&&c.get?Object.defineProperty(s,l,c):s[l]=c?c.value:void 0}return s}const Vt=e=>`Stale read from <${e}>.`;function F(e){const t="fallback"in e&&{fallback:()=>e.fallback};return N(qt(()=>e.each,e.children,t||void 0))}function He(e){const t=e.keyed,n=N(()=>e.when,void 0,{equals:(r,s)=>t?r===s:!r==!s});return N(()=>{const r=n();if(r){const s=e.children;return typeof s=="function"&&s.length>0?B(()=>s(t?r:()=>{if(!B(n))throw Vt("Show");return e.when})):s}return e.fallback},void 0,void 0)}function Xt(e,t,n){let r=n.length,s=t.length,o=r,i=0,l=0,c=t[s-1].nextSibling,u=null;for(;i<s||l<o;){if(t[i]===n[l]){i++,l++;continue}for(;t[s-1]===n[o-1];)s--,o--;if(s===i){const a=o<r?l?n[l-1].nextSibling:n[o-l]:c;for(;l<o;)e.insertBefore(n[l++],a)}else if(o===l)for(;i<s;)(!u||!u.has(t[i]))&&t[i].remove(),i++;else if(t[i]===n[o-1]&&n[l]===t[s-1]){const a=t[--s].nextSibling;e.insertBefore(n[l++],t[i++].nextSibling),e.insertBefore(n[--o],a),t[s]=n[o]}else{if(!u){u=new Map;let d=l;for(;d<o;)u.set(n[d],d++)}const a=u.get(t[i]);if(a!=null)if(l<a&&a<o){let d=i,f=1,g;for(;++d<s&&d<o&&!((g=u.get(t[d]))==null||g!==a+f);)f++;if(f>a-l){const h=t[i];for(;l<a;)e.insertBefore(n[l++],h)}else e.replaceChild(n[l++],t[i++])}else i++;else t[i++].remove()}}}const ze="_$DX_DELEGATE";function Jt(e,t,n,r={}){let s;return te(o=>{s=o,t===document?e():S(t,e(),t.firstChild?null:void 0,n)},r.owner),()=>{s(),t.textContent=""}}function O(e,t,n){let r;const s=()=>{const i=document.createElement("template");return i.innerHTML=e,n?i.content.firstChild.firstChild:i.content.firstChild},o=t?()=>B(()=>document.importNode(r||(r=s()),!0)):()=>(r||(r=s())).cloneNode(!0);return o.cloneNode=o,o}function ut(e,t=window.document){const n=t[ze]||(t[ze]=new Set);for(let r=0,s=e.length;r<s;r++){const o=e[r];n.has(o)||(n.add(o),t.addEventListener(o,Zt))}}function ae(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function L(e,t){t==null?e.removeAttribute("class"):e.className=t}function S(e,t,n,r){if(n!==void 0&&!r&&(r=[]),typeof t!="function")return pe(e,t,r,n);C(s=>pe(e,t(),s,n),r)}function Zt(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}});n;){const r=n[t];if(r&&!n.disabled){const s=n[`${t}Data`];if(s!==void 0?r.call(n,s,e):r.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function pe(e,t,n,r,s){for(;typeof n=="function";)n=n();if(t===n)return n;const o=typeof t,i=r!==void 0;if(e=i&&n[0]&&n[0].parentNode||e,o==="string"||o==="number")if(o==="number"&&(t=t.toString()),i){let l=n[0];l&&l.nodeType===3?l.data!==t&&(l.data=t):l=document.createTextNode(t),n=V(e,n,r,l)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t;else if(t==null||o==="boolean")n=V(e,n,r);else{if(o==="function")return C(()=>{let l=t();for(;typeof l=="function";)l=l();n=pe(e,l,n,r)}),()=>n;if(Array.isArray(t)){const l=[],c=n&&Array.isArray(n);if(Ie(l,t,n,s))return C(()=>n=pe(e,l,n,r,!0)),()=>n;if(l.length===0){if(n=V(e,n,r),i)return n}else c?n.length===0?Ve(e,l,r):Xt(e,n,l):(n&&V(e),Ve(e,l));n=l}else if(t.nodeType){if(Array.isArray(n)){if(i)return n=V(e,n,r,t);V(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function Ie(e,t,n,r){let s=!1;for(let o=0,i=t.length;o<i;o++){let l=t[o],c=n&&n[e.length],u;if(!(l==null||l===!0||l===!1))if((u=typeof l)=="object"&&l.nodeType)e.push(l);else if(Array.isArray(l))s=Ie(e,l,c)||s;else if(u==="function")if(r){for(;typeof l=="function";)l=l();s=Ie(e,Array.isArray(l)?l:[l],Array.isArray(c)?c:[c])||s}else e.push(l),s=!0;else{const a=String(l);c&&c.nodeType===3&&c.data===a?e.push(c):e.push(document.createTextNode(a))}}return s}function Ve(e,t,n=null){for(let r=0,s=t.length;r<s;r++)e.insertBefore(t[r],n)}function V(e,t,n,r){if(n===void 0)return e.textContent="";const s=r||document.createTextNode("");if(t.length){let o=!1;for(let i=t.length-1;i>=0;i--){const l=t[i];if(s!==l){const c=l.parentNode===e;!o&&!i?c?e.replaceChild(s,l):e.insertBefore(s,n):c&&l.remove()}else o=!0}}else e.insertBefore(s,n);return[s]}const Qt=!1;function ft(){let e=new Set;function t(s){return e.add(s),()=>e.delete(s)}let n=!1;function r(s,o){if(n)return!(n=!1);const i={to:s,options:o,defaultPrevented:!1,preventDefault:()=>i.defaultPrevented=!0};for(const l of e)l.listener({...i,from:l.location,retry:c=>{c&&(n=!0),l.navigate(s,{...o,resolve:!1})}});return!i.defaultPrevented}return{subscribe:t,confirm:r}}let Te;function Ke(){(!window.history.state||window.history.state._depth==null)&&window.history.replaceState({...window.history.state,_depth:window.history.length-1},""),Te=window.history.state._depth}Ke();function Yt(e){return{...e,_depth:window.history.state&&window.history.state._depth}}function en(e,t){let n=!1;return()=>{const r=Te;Ke();const s=r==null?null:Te-r;if(n){n=!1;return}s&&t(s)?(n=!0,window.history.go(-s)):e()}}const tn=/^(?:[a-z0-9]+:)?\/\//i,nn=/^\/+|(\/)\/+$/g,dt="http://sr";function ne(e,t=!1){const n=e.replace(nn,"$1");return n?t||/^[?#]/.test(n)?n:"/"+n:""}function ce(e,t,n){if(tn.test(t))return;const r=ne(e),s=n&&ne(n);let o="";return!s||t.startsWith("/")?o=r:s.toLowerCase().indexOf(r.toLowerCase())!==0?o=r+s:o=s,(o||"/")+ne(t,!o)}function rn(e,t){return ne(e).replace(/\/*(\*.*)?$/g,"")+ne(t)}function ht(e){const t={};return e.searchParams.forEach((n,r)=>{t[r]=n}),t}function sn(e,t,n){const[r,s]=e.split("/*",2),o=r.split("/").filter(Boolean),i=o.length;return l=>{const c=l.split("/").filter(Boolean),u=c.length-i;if(u<0||u>0&&s===void 0&&!t)return null;const a={path:i?"":"/",params:{}},d=f=>n===void 0?void 0:n[f];for(let f=0;f<i;f++){const g=o[f],h=c[f],m=g[0]===":",p=m?g.slice(1):g;if(m&&Ce(h,d(p)))a.params[p]=h;else if(m||!Ce(h,g))return null;a.path+=`/${h}`}if(s){const f=u?c.slice(-u).join("/"):"";if(Ce(f,d(s)))a.params[s]=f;else return null}return a}}function Ce(e,t){const n=r=>r.localeCompare(e,void 0,{sensitivity:"base"})===0;return t===void 0?!0:typeof t=="string"?n(t):typeof t=="function"?t(e):Array.isArray(t)?t.some(n):t instanceof RegExp?t.test(e):!1}function on(e){const[t,n]=e.pattern.split("/*",2),r=t.split("/").filter(Boolean);return r.reduce((s,o)=>s+(o.startsWith(":")?2:3),r.length-(n===void 0?0:1))}function gt(e){const t=new Map,n=rt();return new Proxy({},{get(r,s){return t.has(s)||st(n,()=>t.set(s,N(()=>e()[s]))),t.get(s)()},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(e())}})}function mt(e){let t=/(\/?\:[^\/]+)\?/.exec(e);if(!t)return[e];let n=e.slice(0,t.index),r=e.slice(t.index+t[0].length);const s=[n,n+=t[1]];for(;t=/^(\/\:[^\/]+)\?/.exec(r);)s.push(n+=t[1]),r=r.slice(t[0].length);return mt(r).reduce((o,i)=>[...o,...s.map(l=>l+i)],[])}const ln=100,an=ot(),pt=ot();function cn(e,t=""){const{component:n,load:r,children:s,info:o}=e,i=!s||Array.isArray(s)&&!s.length,l={key:e,component:n,load:r,info:o};return wt(e.path).reduce((c,u)=>{for(const a of mt(u)){const d=rn(t,a);let f=i?d:d.split("/*",1)[0];f=f.split("/").map(g=>g.startsWith(":")||g.startsWith("*")?g:encodeURIComponent(g)).join("/"),c.push({...l,originalPath:u,pattern:f,matcher:sn(f,!i,e.matchFilters)})}return c},[])}function un(e,t=0){return{routes:e,score:on(e[e.length-1])*1e4-t,matcher(n){const r=[];for(let s=e.length-1;s>=0;s--){const o=e[s],i=o.matcher(n);if(!i)return null;r.unshift({...i,route:o})}return r}}}function wt(e){return Array.isArray(e)?e:[e]}function yt(e,t="",n=[],r=[]){const s=wt(e);for(let o=0,i=s.length;o<i;o++){const l=s[o];if(l&&typeof l=="object"){l.hasOwnProperty("path")||(l.path="");const c=cn(l,t);for(const u of c){n.push(u);const a=Array.isArray(l.children)&&l.children.length===0;if(l.children&&!a)yt(l.children,u.pattern,n,r);else{const d=un([...n],r.length);r.push(d)}n.pop()}}}return n.length?r:r.sort((o,i)=>i.score-o.score)}function Xe(e,t){for(let n=0,r=e.length;n<r;n++){const s=e[n].matcher(t);if(s)return s}return[]}function fn(e,t){const n=new URL(dt),r=N(c=>{const u=e();try{return new URL(u,n)}catch{return console.error(`Invalid path ${u}`),c}},n,{equals:(c,u)=>c.href===u.href}),s=N(()=>r().pathname),o=N(()=>r().search,!0),i=N(()=>r().hash),l=()=>"";return{get pathname(){return s()},get search(){return o()},get hash(){return i()},get state(){return t()},get key(){return l()},query:gt(nt(o,()=>ht(r())))}}let K;function dn(e,t,n,r={}){const{signal:[s,o],utils:i={}}=e,l=i.parsePath||(v=>v),c=i.renderPath||(v=>v),u=i.beforeLeave||ft(),a=ce("",r.base||"");if(a===void 0)throw new Error(`${a} is not a valid base path`);a&&!s().value&&o({value:a,replace:!0,scroll:!1});const[d,f]=M(!1),g=async v=>{f(!0);try{await Lt(v)}finally{f(!1)}},[h,m]=M(s().value),[p,w]=M(s().state),P=fn(h,p),D=[],E=M([]),R=N(()=>Xe(t(),P.pathname)),Se=gt(()=>{const v=R(),$={};for(let I=0;I<v.length;I++)Object.assign($,v[I].params);return $}),qe={pattern:a,path:()=>a,outlet:()=>null,resolvePath(v){return ce(a,v)}};return C(()=>{const{value:v,state:$}=s();B(()=>{v!==h()&&g(()=>{K="native",m(v),w($),E[1]([])}).then(()=>{K=void 0})})}),{base:qe,location:P,params:Se,isRouting:d,renderPath:c,parsePath:l,navigatorFactory:Ct,matches:R,beforeLeave:u,preloadRoute:Nt,singleFlight:r.singleFlight===void 0?!0:r.singleFlight,submissions:E};function $t(v,$,I){B(()=>{if(typeof $=="number"){$&&(i.go?i.go($):console.warn("Router integration does not support relative routing"));return}const{replace:De,resolve:Pe,scroll:z,state:Q}={replace:!1,resolve:!0,scroll:!0,...I},H=Pe?v.resolvePath($):ce("",$);if(H===void 0)throw new Error(`Path '${$}' is not a routable path`);if(D.length>=ln)throw new Error("Too many redirects");const Ge=h();if((H!==Ge||Q!==p())&&!Qt){if(u.confirm(H,I)){const xt=D.push({value:Ge,replace:De,scroll:z,state:p()});g(()=>{K="navigate",m(H),w(Q),E[1]([])}).then(()=>{D.length===xt&&(K=void 0,Ot({value:H,state:Q}))})}}})}function Ct(v){return v=v||kt(pt)||qe,($,I)=>$t(v,$,I)}function Ot(v){const $=D[0];$&&((v.value!==$.value||v.state!==$.state)&&o({...v,replace:$.replace,scroll:$.scroll}),D.length=0)}function Nt(v,$){const I=Xe(t(),v.pathname),De=K;K="preload";for(let Pe in I){const{route:z,params:Q}=I[Pe];z.component&&z.component.preload&&z.component.preload();const{load:H}=z;$&&H&&st(n(),()=>H({params:Q,location:{pathname:v.pathname,search:v.search,hash:v.hash,query:ht(v),state:null,key:""},intent:"preload"}))}K=De}}function hn(e,t,n,r){const{base:s,location:o,params:i}=e,{pattern:l,component:c,load:u}=r().route,a=N(()=>r().path);c&&c.preload&&c.preload();const d=u?u({params:i,location:o,intent:K||"initial"}):void 0;return{parent:t,pattern:l,path:a,outlet:()=>c?y(c,{params:i,location:o,data:d,get children(){return n()}}):n(),resolvePath(g){return ce(s.path(),g,a())}}}const gn=e=>t=>{const{base:n}=t,r=je(()=>t.children),s=N(()=>yt(r(),t.base||""));let o;const i=dn(e,s,()=>o,{base:n,singleFlight:t.singleFlight});return e.create&&e.create(i),y(an.Provider,{value:i,get children(){return y(mn,{routerState:i,get root(){return t.root},get load(){return t.rootLoad},get children(){return[N(()=>(o=rt())&&null),y(pn,{routerState:i,get branches(){return s()}})]}})}})};function mn(e){const t=e.routerState.location,n=e.routerState.params,r=N(()=>e.load&&B(()=>e.load({params:n,location:t,intent:"preload"})));return y(He,{get when(){return e.root},keyed:!0,get fallback(){return e.children},children:s=>y(s,{params:n,location:t,get data(){return r()},get children(){return e.children}})})}function pn(e){const t=[];let n;const r=N(nt(e.routerState.matches,(s,o,i)=>{let l=o&&s.length===o.length;const c=[];for(let u=0,a=s.length;u<a;u++){const d=o&&o[u],f=s[u];i&&d&&f.route.key===d.route.key?c[u]=i[u]:(l=!1,t[u]&&t[u](),te(g=>{t[u]=g,c[u]=hn(e.routerState,c[u-1]||e.routerState.base,Je(()=>r()[u+1]),()=>e.routerState.matches()[u])}))}return t.splice(s.length).forEach(u=>u()),i&&l?i:(n=c[0],c)}));return Je(()=>r()&&n)()}const Je=e=>()=>y(He,{get when(){return e()},keyed:!0,children:t=>y(pt.Provider,{value:t,get children(){return t.outlet()}})}),X=e=>{const t=je(()=>e.children);return zt(e,{get children(){return t()}})};function wn([e,t],n,r){return[n?()=>n(e()):e,r?s=>t(r(s)):t]}function yn(e){if(e==="#")return null;try{return document.querySelector(e)}catch{return null}}function bn(e){let t=!1;const n=s=>typeof s=="string"?{value:s}:s,r=wn(M(n(e.get()),{equals:(s,o)=>s.value===o.value}),void 0,s=>(!t&&e.set(s),s));return e.init&&ke(e.init((s=e.get())=>{t=!0,r[1](n(s)),t=!1})),gn({signal:r,create:e.create,utils:e.utils})}function An(e,t,n){return e.addEventListener(t,n),()=>e.removeEventListener(t,n)}function vn(e,t){const n=yn(`#${e}`);n?n.scrollIntoView():t&&window.scrollTo(0,0)}const _n=new Map;function Sn(e=!0,t=!1,n="/_server"){return r=>{const s=r.base.path(),o=r.navigatorFactory(r.base);let i={};function l(h){return h.namespaceURI==="http://www.w3.org/2000/svg"}function c(h){if(h.defaultPrevented||h.button!==0||h.metaKey||h.altKey||h.ctrlKey||h.shiftKey)return;const m=h.composedPath().find(R=>R instanceof Node&&R.nodeName.toUpperCase()==="A");if(!m||t&&!m.hasAttribute("link"))return;const p=l(m),w=p?m.href.baseVal:m.href;if((p?m.target.baseVal:m.target)||!w&&!m.hasAttribute("state"))return;const D=(m.getAttribute("rel")||"").split(/\s+/);if(m.hasAttribute("download")||D&&D.includes("external"))return;const E=p?new URL(w,document.baseURI):new URL(w);if(!(E.origin!==window.location.origin||s&&E.pathname&&!E.pathname.toLowerCase().startsWith(s.toLowerCase())))return[m,E]}function u(h){const m=c(h);if(!m)return;const[p,w]=m,P=r.parsePath(w.pathname+w.search+w.hash),D=p.getAttribute("state");h.preventDefault(),o(P,{resolve:!1,replace:p.hasAttribute("replace"),scroll:!p.hasAttribute("noscroll"),state:D&&JSON.parse(D)})}function a(h){const m=c(h);if(!m)return;const[p,w]=m;i[w.pathname]||r.preloadRoute(w,p.getAttribute("preload")!=="false")}function d(h){const m=c(h);if(!m)return;const[p,w]=m;i[w.pathname]||(i[w.pathname]=setTimeout(()=>{r.preloadRoute(w,p.getAttribute("preload")!=="false"),delete i[w.pathname]},200))}function f(h){const m=c(h);if(!m)return;const[,p]=m;i[p.pathname]&&(clearTimeout(i[p.pathname]),delete i[p.pathname])}function g(h){if(h.defaultPrevented)return;let m=h.submitter&&h.submitter.hasAttribute("formaction")?h.submitter.getAttribute("formaction"):h.target.getAttribute("action");if(!m)return;if(!m.startsWith("https://action/")){const w=new URL(m,dt);if(m=r.parsePath(w.pathname+w.search),!m.startsWith(n))return}if(h.target.method.toUpperCase()!=="POST")throw new Error("Only POST forms are supported for Actions");const p=_n.get(m);if(p){h.preventDefault();const w=new FormData(h.target);h.submitter&&h.submitter.name&&w.append(h.submitter.name,h.submitter.value),p.call({r,f:h.target},w)}}ut(["click","submit"]),document.addEventListener("click",u),e&&(document.addEventListener("mouseover",d),document.addEventListener("mouseout",f),document.addEventListener("focusin",a),document.addEventListener("touchstart",a)),document.addEventListener("submit",g),ke(()=>{document.removeEventListener("click",u),e&&(document.removeEventListener("mouseover",d),document.removeEventListener("mouseout",f),document.removeEventListener("focusin",a),document.removeEventListener("touchstart",a)),document.removeEventListener("submit",g)})}}function Dn(e){const t=e.replace(/^.*?#/,"");if(!t.startsWith("/")){const[,n="/"]=window.location.hash.split("#",2);return`${n}#${t}`}return t}function Pn(e){const t=()=>window.location.hash.slice(1),n=ft();return bn({get:t,set({value:r,replace:s,scroll:o,state:i}){s?window.history.replaceState(Yt(i),"","#"+r):window.location.hash=r;const l=r.indexOf("#"),c=l>=0?r.slice(l+1):"";vn(c,o),Ke()},init:r=>An(window,"hashchange",en(r,s=>!n.confirm(s&&s<0?s:t()))),create:Sn(e.preload,e.explicitLinks,e.actionBase),utils:{go:r=>window.history.go(r),renderPath:r=>`#${r}`,parsePath:Dn,beforeLeave:n}})(e)}const Le=Symbol("store-raw"),J=Symbol("store-node"),j=Symbol("store-has"),bt=Symbol("store-self");function At(e){let t=e[k];if(!t&&(Object.defineProperty(e,k,{value:t=new Proxy(e,Cn)}),!Array.isArray(e))){const n=Object.keys(e),r=Object.getOwnPropertyDescriptors(e);for(let s=0,o=n.length;s<o;s++){const i=n[s];r[i].get&&Object.defineProperty(e,i,{enumerable:r[i].enumerable,get:r[i].get.bind(t)})}}return t}function we(e){let t;return e!=null&&typeof e=="object"&&(e[k]||!(t=Object.getPrototypeOf(e))||t===Object.prototype||Array.isArray(e))}function re(e,t=new Set){let n,r,s,o;if(n=e!=null&&e[Le])return n;if(!we(e)||t.has(e))return e;if(Array.isArray(e)){Object.isFrozen(e)?e=e.slice(0):t.add(e);for(let i=0,l=e.length;i<l;i++)s=e[i],(r=re(s,t))!==s&&(e[i]=r)}else{Object.isFrozen(e)?e=Object.assign({},e):t.add(e);const i=Object.keys(e),l=Object.getOwnPropertyDescriptors(e);for(let c=0,u=i.length;c<u;c++)o=i[c],!l[o].get&&(s=e[o],(r=re(s,t))!==s&&(e[o]=r))}return e}function ye(e,t){let n=e[t];return n||Object.defineProperty(e,t,{value:n=Object.create(null)}),n}function se(e,t,n){if(e[t])return e[t];const[r,s]=M(n,{equals:!1,internal:!0});return r.$=s,e[t]=r}function En(e,t){const n=Reflect.getOwnPropertyDescriptor(e,t);return!n||n.get||!n.configurable||t===k||t===J||(delete n.value,delete n.writable,n.get=()=>e[k][t]),n}function vt(e){Re()&&se(ye(e,J),bt)()}function $n(e){return vt(e),Reflect.ownKeys(e)}const Cn={get(e,t,n){if(t===Le)return e;if(t===k)return n;if(t===xe)return vt(e),n;const r=ye(e,J),s=r[t];let o=s?s():e[t];if(t===J||t===j||t==="__proto__")return o;if(!s){const i=Object.getOwnPropertyDescriptor(e,t);Re()&&(typeof o!="function"||e.hasOwnProperty(t))&&!(i&&i.get)&&(o=se(r,t,o)())}return we(o)?At(o):o},has(e,t){return t===Le||t===k||t===xe||t===J||t===j||t==="__proto__"?!0:(Re()&&se(ye(e,j),t)(),t in e)},set(){return!0},deleteProperty(){return!0},ownKeys:$n,getOwnPropertyDescriptor:En};function be(e,t,n,r=!1){if(!r&&e[t]===n)return;const s=e[t],o=e.length;n===void 0?(delete e[t],e[j]&&e[j][t]&&s!==void 0&&e[j][t].$()):(e[t]=n,e[j]&&e[j][t]&&s===void 0&&e[j][t].$());let i=ye(e,J),l;if((l=se(i,t,s))&&l.$(()=>n),Array.isArray(e)&&e.length!==o){for(let c=e.length;c<o;c++)(l=i[c])&&l.$();(l=se(i,"length",o))&&l.$(e.length)}(l=i[bt])&&l.$()}function _t(e,t){const n=Object.keys(t);for(let r=0;r<n.length;r+=1){const s=n[r];be(e,s,t[s])}}function On(e,t){if(typeof t=="function"&&(t=t(e)),t=re(t),Array.isArray(t)){if(e===t)return;let n=0,r=t.length;for(;n<r;n++){const s=t[n];e[n]!==s&&be(e,n,s)}be(e,"length",r)}else _t(e,t)}function Y(e,t,n=[]){let r,s=e;if(t.length>1){r=t.shift();const i=typeof r,l=Array.isArray(e);if(Array.isArray(r)){for(let c=0;c<r.length;c++)Y(e,[r[c]].concat(t),n);return}else if(l&&i==="function"){for(let c=0;c<e.length;c++)r(e[c],c)&&Y(e,[c].concat(t),n);return}else if(l&&i==="object"){const{from:c=0,to:u=e.length-1,by:a=1}=r;for(let d=c;d<=u;d+=a)Y(e,[d].concat(t),n);return}else if(t.length>1){Y(e[r],t,[r].concat(n));return}s=e[r],n=[r].concat(n)}let o=t[0];typeof o=="function"&&(o=o(s,n),o===s)||r===void 0&&o==null||(o=re(o),r===void 0||we(s)&&we(o)&&!Array.isArray(o)?_t(s,o):be(e,r,o))}function Nn(...[e,t]){const n=re(e||{}),r=Array.isArray(n),s=At(n);function o(...i){Tt(()=>{r&&i.length===1?On(n,i[0]):Y(n,i)})}return[s,o]}const xn="_metricPage_mi7wo_1",Rn="_metricPageShell_mi7wo_8",Bn="_logo_mi7wo_22",In="_header_mi7wo_28",Tn="_link_mi7wo_39",Ze={metricPage:xn,metricPageShell:Rn,logo:Bn,"logo-spin":"_logo-spin_mi7wo_1",header:In,link:Tn},b={GERMAN:"de",ENGLISH:"en",RUSSIAN:"ru",PORTUGUESE_BRAZIL:"pt-br",ALBANIAN:"sq",AMHARIC:"am",ARABIC:"ar",BENGALI:"bn",BOSNIAN:"bs",BULGARIAN:"bg",DARI:"fa-af",FRENCH:"fr",GREEK:"el",HAUSA:"ha",HINDI:"hi",INDONESIAN:"id",KISWAHILI:"sw",CROATIAN:"hr",MACEDONIAN:"mk",PASHTO:"ps",PERSIAN:"fa-ir",POLISH:"pl",PORTUGUESE_AFRICA:"pt-002",ROMANIAN:"ro",SERBIAN:"sr",SPANISH:"es",TURKISH:"tr",UKRANIAN:"uk",URDU:"ur"},Ln="https://chromeuxreport.googleapis.com/v1/records:queryHistoryRecord?key=AIzaSyBjHoAJ9LCokv_aZLFR9RYvtyhz_MXQCU4",St=async({url:e,origin:t}={})=>(await fetch(Ln,{method:"POST",mode:"cors",body:JSON.stringify({url:e,origin:t})})).json(),Dt={dw:"https://www.dw.com/",bbc:"https://www.bbc.com/","Xinhua News Agency":"https://english.news.cn/","China Central Television":"https://english.cctv.com/","peoples daily":"http://en.people.cn/","afrol news":"http://afrol.com/",swiss:"https://www.keystone-sda.ch/","global voices":"https://globalvoices.org/",france24:"https://www.france24.com/","word socialist web site":"https://www.wsws.org/"},kn={[b.GERMAN]:"https://www.dw.com/de/themen/s-9077",[b.ENGLISH]:"https://www.dw.com/en/top-stories/s-9097",[b.RUSSIAN]:"https://www.dw.com/ru/%D1%82%D0%B5%D0%BC%D1%8B-%D0%B4%D0%BD%D1%8F/s-9119",[b.PORTUGUESE_BRAZIL]:"https://www.dw.com/pt-br/not%C3%ADcias/s-7111",[b.ALBANIAN]:"https://www.dw.com/sq/fokus/s-10250",[b.AMHARIC]:"https://www.dw.com/am/%E1%8B%AD%E1%8B%98%E1%89%B5/s-11646",[b.ARABIC]:"https://www.dw.com/ar/%D8%A7%D9%84%D8%B1%D8%A6%D9%8A%D8%B3%D9%8A%D8%A9/s-9106",[b.BENGALI]:"https://www.dw.com/bn/%E0%A6%AC%E0%A6%BF%E0%A6%B7%E0%A7%9F/s-11929",[b.BOSNIAN]:"https://www.dw.com/bs/teme/s-10037",[b.BULGARIAN]:"https://www.dw.com/bg/%D0%BD%D0%B0%D1%87%D0%B0%D0%BB%D0%BE/s-10257",[b.CROATIAN]:"https://www.dw.com/hr/teme/s-9747",[b.DARI]:"https://www.dw.com/fa-af/%D8%AF%D9%88%D9%8A%DA%86%D9%87-%D9%88%D9%84%D9%87-%D8%AF%D8%B1%DB%8C/s-10259",[b.FRENCH]:"https://www.dw.com/fr/actualit%C3%A9s/s-10261",[b.GREEK]:"https://www.dw.com/el/%CE%B8%CE%B5%CE%BC%CE%B1%CF%84%CE%B1/s-10507",[b.HAUSA]:"https://www.dw.com/ha/batutuwa/s-11603",[b.HINDI]:"https://www.dw.com/hi/%E0%A4%96%E0%A4%AC%E0%A4%B0%E0%A5%87%E0%A4%82/s-11931",[b.INDONESIAN]:"https://www.dw.com/id/beranda/s-11546",[b.KISWAHILI]:"https://www.dw.com/sw/idhaa-ya-kiswahili/s-11588",[b.MACEDONIAN]:"https://www.dw.com/mk/%D1%82%D0%B5%D0%BC%D0%B8/s-10339",[b.PASHTO]:"https://www.dw.com/ps/%D8%AF%D9%88%D9%8A%DA%86%D9%87-%D9%88%D9%8A%D9%84%D9%87-%D9%BE%DA%9A%D8%AA%D9%88/s-11722",[b.PERSIAN]:"https://www.dw.com/fa-ir/%D8%AF%D9%88%DB%8C%DA%86%D9%87-%D9%88%D9%84%D9%87-%D9%81%D8%A7%D8%B1%D8%B3%DB%8C/s-9993",[b.POLISH]:"https://www.dw.com/pl/start/s-11394",[b.PORTUGUESE_AFRICA]:"https://www.dw.com/pt-002/not%C3%ADcias/s-13918",[b.ROMANIAN]:"https://www.dw.com/ro/focus/s-10575",[b.SERBIAN]:"https://www.dw.com/sr/rubrike/s-10682",[b.SPANISH]:"https://www.dw.com/es/actualidad/s-30684",[b.TURKISH]:"https://www.dw.com/tr/g%C3%BCndem/s-10201",[b.UKRANIAN]:"https://www.dw.com/uk/%D0%B3%D0%BE%D0%BB%D0%BE%D0%B2%D0%BD%D0%B0/s-9874",[b.URDU]:"https://www.dw.com/ur/%D8%B9%D9%86%D9%88%D8%A7%D9%86%D8%A7%D8%AA/s-11933"},[Z,jn]=Nn({});Object.values(b).forEach(e=>{const t=kn[e];St({url:t}).then(n=>Pt(e,n))});Object.entries(Dt).forEach(([e,t])=>{St({origin:t}).then(n=>Pt(e,n))});const Un=e=>([t,n])=>{const[r,s,o]=n.histogramTimeseries,{p75s:i}=n.percentilesTimeseries;return[t,{good:r.densities[e],ni:s.densities[e],poor:o.densities[e],p75s:i[e]}]},Fn=e=>([t,n])=>{const r=Object.keys(n.fractionTimeseries).reduce((s,o)=>({...s,[o]:n.fractionTimeseries[o].fractions[e]}),{});return[t,r]},Pt=(e,t)=>{const{record:n}=t;if(!n)return[];const{collectionPeriods:r,metrics:s}=n,o=r.map((i,l)=>{const c=Object.fromEntries(Object.entries(s).map(([u,a])=>a?.histogramTimeseries?Un(l)([u,a]):a?.fractionTimeseries?Fn(l)([u,a]):["test","test"]));return{...i,...c}});jn(e,o)},Hn="_diagram_13xjr_1",Kn="_diagramWrapper_13xjr_23",Mn="_good_13xjr_35",qn="_ni_13xjr_41",Gn="_poor_13xjr_47",Wn="_none_13xjr_53",zn="_axe_13xjr_75",Vn="_axeStep_13xjr_87",Xn="_date_13xjr_109",Jn="_entry_13xjr_129",T={diagram:Hn,diagramWrapper:Kn,good:Mn,ni:qn,poor:Gn,none:Wn,axe:zn,axeStep:Vn,date:Xn,entry:Jn};var q=(e=>(e.TTFB="experimental_time_to_first_byte",e.LCP="largest_contentful_paint",e.INP="interaction_to_next_paint",e.CLS="cumulative_layout_shift",e))(q||{}),ue=(e=>(e.GOOD="good",e.NEEDS_IMPROVEMENT="ni",e.POOR="poor",e))(ue||{});const Zn={good:e=>e<=800,ni:e=>e>800&&e<=1800,poor:e=>e>1800},Qn={good:e=>e<=2500,ni:e=>e>2500&&e<=4e3,poor:e=>e>4e3},Yn={good:e=>e<=200,ni:e=>e>200&&e<=500,poor:e=>e>500},er={good:e=>e<=.1,ni:e=>e>.1&&e<=.25,poor:e=>e>.25},Oe={experimental_time_to_first_byte:Zn,largest_contentful_paint:Qn,interaction_to_next_paint:Yn,cumulative_layout_shift:er},tr=e=>t=>{if(Oe[e].good(t))return"good";if(Oe[e].ni(t))return"ni";if(Oe[e].poor(t))return"poor"};var nr=O("<div><h2> <!> </h2><h6> <!> </h6><div><div>"),rr=O("<div><span>%"),sr=O("<div><span><span></span><br><span>"),or=O("<div>");const Me=e=>(()=>{var t=nr(),n=t.firstChild,r=n.firstChild,s=r.nextSibling;s.nextSibling;var o=n.nextSibling,i=o.firstChild,l=i.nextSibling;l.nextSibling;var c=o.nextSibling,u=c.firstChild;return S(n,()=>e.title,s),S(o,()=>e.subtitle,l),S(u,y(F,{get each(){return[.25,.5,.75,1].reverse()},children:a=>(()=>{var d=rr(),f=d.firstChild,g=f.firstChild;return S(f,a*100,g),C(()=>d.className=T.axeStep),d})()})),S(c,y(F,{get each(){return e.dataList},children:a=>(()=>{var d=sr(),f=d.firstChild,g=f.firstChild,h=g.nextSibling,m=h.nextSibling;return S(d,y(F,{get each(){return e.types},children:p=>(()=>{var w=or();return C(P=>{var D=p.color,E=p.accessor(a)*100+"%";return D!==P.e&&((P.e=D)!=null?w.style.setProperty("background",D):w.style.removeProperty("background")),E!==P.t&&((P.t=E)!=null?w.style.setProperty("height",E):w.style.removeProperty("height")),P},{e:void 0,t:void 0}),w})()}),f),S(g,()=>`${a.firstDate.year}/${a.firstDate.month}/${a.firstDate.day}`),S(m,()=>e.getInfo?.(a)),C(p=>{var w=T.entry,P=T.date;return w!==p.e&&(d.className=p.e=w),P!==p.t&&(f.className=p.t=P),p},{e:void 0,t:void 0}),d})()}),null),C(a=>{var d=[e.className,T.diagramWrapper].join(" "),f=T.diagram,g=T.axe;return d!==a.e&&(t.className=a.e=d),f!==a.t&&(c.className=a.t=f),g!==a.a&&(u.className=a.a=g),a},{e:void 0,t:void 0,a:void 0}),t})();It(()=>{console.log(Z)});const ir=(e,t)=>{if(!Z[e])return"";const[n]=Z[e].slice(-1),r=tr(t)(n[t].p75s);return r===ue.GOOD?T.good:r===ue.NEEDS_IMPROVEMENT?T.ni:r===ue.POOR?T.poor:""},ee=e=>y(Me,{get dataList(){return Z[e.key]},get title(){return e.title},types:[{accessor:t=>t[e.metric].poor,color:"#d63e35"},{accessor:t=>t[e.metric].ni,color:"#f5a208"},{accessor:t=>t[e.metric].good,color:"#4ba77e"}],getInfo:t=>`${t[e.metric].p75s}ms`,get className(){return ir(e.key,e.metric)}});var lr=O("<div><h1></h1><h4>language home pages</h4><div>");const Qe="experimental_time_to_first_byte";function Ne(e){return(()=>{var t=lr(),n=t.firstChild,r=n.nextSibling,s=r.nextSibling;return S(n,()=>e.params.metric||Qe),S(s,y(F,{get each(){return Object.values(b)},children:o=>y(ee,{title:o,get metric(){return e.params.metric||Qe},key:o})})),C(o=>{var i=Ze.metricPageShell,l=Ze.metricPage;return i!==o.e&&(t.className=o.e=i),l!==o.t&&L(s,o.t=l),o},{e:void 0,t:void 0}),t})()}const ar="_burgerButton_zwq4g_1",cr="_nav_zwq4g_29",ur="_sidebar_zwq4g_37",le={burgerButton:ar,nav:cr,sidebar:ur};var fr=O("<ul><li><a>TTFB</a></li><li><a>LCP</a></li><li><a>INP</a></li><li><a href=/crux-diagrams/deviceType>Devices</a></li><li><a href=/crux-diagrams/navigationtype>Navigation types</a></li><li><a href=/crux-diagrams/competition>Competition"),dr=O("<nav><div>🍔");const hr=()=>{const[e,t]=M(!1);return document.addEventListener("click",n=>!n.target.classList.contains(le.burgerButton)&&t(!1)),(()=>{var n=dr(),r=n.firstChild;return r.$$click=()=>t(s=>!s),S(n,y(He,{get when(){return e()},get children(){var s=fr(),o=s.firstChild,i=o.firstChild,l=o.nextSibling,c=l.firstChild,u=l.nextSibling,a=u.firstChild,d=u.nextSibling;d.firstChild;var f=d.nextSibling;return f.firstChild,C(g=>{var h=le.sidebar,m=`/crux-diagrams/metric/${q.TTFB}`,p=`/crux-diagrams/metric/${q.LCP}`,w=`/crux-diagrams/metric/${q.INP}`;return h!==g.e&&L(s,g.e=h),m!==g.t&&ae(i,"href",g.t=m),p!==g.a&&ae(c,"href",g.a=p),w!==g.o&&ae(a,"href",g.o=w),g},{e:void 0,t:void 0,a:void 0,o:void 0}),s}}),null),C(s=>{var o=le.nav,i=le.burgerButton;return o!==s.e&&L(n,s.e=o),i!==s.t&&L(r,s.t=i),s},{e:void 0,t:void 0}),n})()};ut(["click"]);const gr="_app_1t7fa_1",mr={app:gr},pr="_lane_igkya_1",wr="_competitionPage_igkya_6",Ye={lane:pr,competitionPage:wr};var yr=O("<div><h1>Competition</h1><h4>all pages (origin)"),br=O("<div><div><h2></h2><h6><a>");const Ar=()=>(()=>{var e=yr(),t=e.firstChild;return t.nextSibling,S(e,y(F,{get each(){return Object.entries(Dt)},children:([n,r])=>(()=>{var s=br(),o=s.firstChild,i=o.firstChild,l=i.nextSibling,c=l.firstChild;return S(i,n),ae(c,"href",r),S(c,r),S(s,y(ee,{title:"LCP",key:n,get metric(){return q.LCP}}),null),S(s,y(ee,{title:"INP",key:n,get metric(){return q.INP}}),null),S(s,y(ee,{title:"TTFB",key:n,get metric(){return q.TTFB}}),null),S(s,y(ee,{title:"CLS",key:n,get metric(){return q.CLS}}),null),C(()=>L(s,Ye.lane)),s})()}),null),C(()=>L(e,Ye.competitionPage)),e})(),vr="_lane_s8gwv_1",_r="_deviceTypePage_s8gwv_6",Sr="_legendEntry_s8gwv_12",Ae={lane:vr,deviceTypePage:_r,legendEntry:Sr},fe={tablet:"#f5a208",desktop:"teal",phone:"purple"},Dr=e=>y(Me,{get dataList(){return Z[e.key]},get title(){return e.key},get types(){return[{accessor:t=>t.form_factors?.tablet,color:fe.tablet},{accessor:t=>t.form_factors?.desktop,color:fe.desktop},{accessor:t=>t.form_factors?.phone,color:fe.phone}]},get className(){return T.none}});var Pr=O("<h1>Devices"),Er=O("<h4>"),$r=O("<div>"),Cr=O("<span><div>");const Or=()=>[Pr(),(()=>{var e=Er();return S(e,y(F,{get each(){return Object.entries(fe)},children:([t,n])=>(()=>{var r=Cr(),s=r.firstChild;return n!=null?s.style.setProperty("background",n):s.style.removeProperty("background"),S(r,t,null),C(()=>L(r,Ae.legendEntry)),r})()})),e})(),(()=>{var e=$r();return S(e,y(F,{get each(){return Object.values(b)},children:t=>y(Dr,{key:t})})),C(()=>L(e,Ae.deviceTypePage)),e})()],Et={navigate_cache:"black",reload:"brown",restore:"purple",back_forward:"green",back_forward_cache:"blue",prerender:"orange",navigate:"teal"},Nr=e=>y(Me,{get dataList(){return Z[e.key]},get title(){return e.key},get types(){return Object.entries(Et).map(([t,n])=>({accessor:r=>r.navigation_types?.[t],color:n}))},get className(){return T.none}});var xr=O("<h1>Navigations"),Rr=O("<h4>"),Br=O("<div>"),Ir=O("<span><div>");const Tr=()=>[xr(),(()=>{var e=Rr();return S(e,y(F,{get each(){return Object.entries(Et)},children:([t,n])=>(()=>{var r=Ir(),s=r.firstChild;return n!=null?s.style.setProperty("background",n):s.style.removeProperty("background"),S(r,t,null),C(()=>L(r,Ae.legendEntry)),r})()})),e})(),(()=>{var e=Br();return S(e,y(F,{get each(){return Object.values(b)},children:t=>y(Nr,{key:t})})),C(()=>L(e,Ae.deviceTypePage)),e})()];var Lr=O("<div>");function kr(){return(()=>{var e=Lr();return S(e,y(hr,{}),null),S(e,y(Pn,{get children(){return[y(X,{path:"/",component:Ne}),y(X,{path:"/crux-diagrams/",component:Ne}),y(X,{path:"/crux-diagrams/metric/:metric",component:Ne}),y(X,{path:"/crux-diagrams/devicetype",component:Or}),y(X,{path:"/crux-diagrams/navigationtype",component:Tr}),y(X,{path:"/crux-diagrams/competition",component:Ar})]}}),null),C(()=>L(e,mr.app)),e})()}const jr=document.getElementById("root");Jt(()=>y(kr,{}),jr);
