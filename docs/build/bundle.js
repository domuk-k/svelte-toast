var app=function(){"use strict";function t(){}const e=t=>t;function n(t,e){for(const n in e)t[n]=e[n];return t}function o(t){return t()}function s(){return Object.create(null)}function r(t){t.forEach(o)}function i(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function l(e,n,o){e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const o=e.subscribe(...n);return o.unsubscribe?()=>o.unsubscribe():o}(n,o))}const c="undefined"!=typeof window;let u=c?()=>window.performance.now():()=>Date.now(),d=c?t=>requestAnimationFrame(t):t;const f=new Set;function p(t){f.forEach(e=>{e.c(t)||(f.delete(e),e.f())}),0!==f.size&&d(p)}function g(t){let e;return 0===f.size&&d(p),{promise:new Promise(n=>{f.add(e={c:t,f:n})}),abort(){f.delete(e)}}}function m(t,e){t.appendChild(e)}function h(t,e,n){t.insertBefore(e,n||null)}function b(t){t.parentNode.removeChild(t)}function y(t){return document.createElement(t)}function v(t){return document.createTextNode(t)}function $(){return v(" ")}function w(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function x(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function k(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function C(t,e,n){t.classList[n?"add":"remove"](e)}const _=new Set;let B,E=0;function S(t,e,n,o,s,r,i,a=0){const l=16.666/o;let c="{\n";for(let t=0;t<=1;t+=l){const o=e+(n-e)*r(t);c+=100*t+`%{${i(o,1-o)}}\n`}const u=c+`100% {${i(n,1-n)}}\n}`,d=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(u)}_${a}`,f=t.ownerDocument;_.add(f);const p=f.__svelte_stylesheet||(f.__svelte_stylesheet=f.head.appendChild(y("style")).sheet),g=f.__svelte_rules||(f.__svelte_rules={});g[d]||(g[d]=!0,p.insertRule(`@keyframes ${d} ${u}`,p.cssRules.length));const m=t.style.animation||"";return t.style.animation=`${m?m+", ":""}${d} ${o}ms linear ${s}ms 1 both`,E+=1,d}function O(t,e){const n=(t.style.animation||"").split(", "),o=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),s=n.length-o.length;s&&(t.style.animation=o.join(", "),E-=s,E||d(()=>{E||(_.forEach(t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}}),_.clear())}))}function A(t,e){const n=t.getBoundingClientRect();if(e.left!==n.left||e.top!==n.top){const o=getComputedStyle(t),s="none"===o.transform?"":o.transform;t.style.transform=`${s} translate(${e.left-n.left}px, ${e.top-n.top}px)`}}function R(t){B=t}const T=[],P=[],L=[],q=[],F=Promise.resolve();let I=!1;function M(){I||(I=!0,F.then(z))}function D(){return M(),F}function j(t){L.push(t)}let N=!1;const W=new Set;function z(){if(!N){N=!0;do{for(let t=0;t<T.length;t+=1){const e=T[t];R(e),G(e.$$)}for(R(null),T.length=0;P.length;)P.pop()();for(let t=0;t<L.length;t+=1){const e=L[t];W.has(e)||(W.add(e),e())}L.length=0}while(T.length);for(;q.length;)q.pop()();I=!1,N=!1,W.clear()}}function G(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(j)}}let H;function U(){return H||(H=Promise.resolve(),H.then(()=>{H=null})),H}function J(t,e,n){t.dispatchEvent(function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(`${e?"intro":"outro"}${n}`))}const Y=new Set;let V;function K(t,e){t&&t.i&&(Y.delete(t),t.i(e))}function Q(t,e,n,o){if(t&&t.o){if(Y.has(t))return;Y.add(t),V.c.push(()=>{Y.delete(t),o&&(n&&t.d(1),o())}),t.o(e)}}const X={duration:0};function Z(t,e){t.f(),function(t,e){Q(t,1,1,()=>{e.delete(t.key)})}(t,e)}function tt(t){t&&t.c()}function et(t,e,n){const{fragment:s,on_mount:a,on_destroy:l,after_update:c}=t.$$;s&&s.m(e,n),j(()=>{const e=a.map(o).filter(i);l?l.push(...e):r(e),t.$$.on_mount=[]}),c.forEach(j)}function nt(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ot(e,n,o,i,a,l,c=[-1]){const u=B;R(e);const d=n.props||{},f=e.$$={fragment:null,ctx:null,props:l,update:t,not_equal:a,bound:s(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:s(),dirty:c,skip_bound:!1};let p=!1;if(f.ctx=o?o(e,d,(t,n,...o)=>{const s=o.length?o[0]:n;return f.ctx&&a(f.ctx[t],f.ctx[t]=s)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](s),p&&function(t,e){-1===t.$$.dirty[0]&&(T.push(t),M(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}(e,t)),n}):[],f.update(),p=!0,r(f.before_update),f.fragment=!!i&&i(f.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);f.fragment&&f.fragment.l(t),t.forEach(b)}else f.fragment&&f.fragment.c();n.intro&&K(e.$$.fragment),et(e,n.target,n.anchor),z()}R(u)}class st{$destroy(){nt(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function rt(t){const e=t-1;return e*e*e+1}function it(t,{delay:n=0,duration:o=400,easing:s=e}){const r=+getComputedStyle(t).opacity;return{delay:n,duration:o,easing:s,css:t=>"opacity: "+t*r}}function at(t,{delay:e=0,duration:n=400,easing:o=rt,x:s=0,y:r=0,opacity:i=0}){const a=getComputedStyle(t),l=+a.opacity,c="none"===a.transform?"":a.transform,u=l*(1-i);return{delay:e,duration:n,easing:o,css:(t,e)=>`\n\t\t\ttransform: ${c} translate(${(1-t)*s}px, ${(1-t)*r}px);\n\t\t\topacity: ${l-u*e}`}}function lt(t,e,n){const o=getComputedStyle(t),s="none"===o.transform?"":o.transform,r=e.from.width/t.clientWidth,a=e.from.height/t.clientHeight,l=(e.from.left-e.to.left)/r,c=(e.from.top-e.to.top)/a,u=Math.sqrt(l*l+c*c),{delay:d=0,duration:f=(t=>120*Math.sqrt(t)),easing:p=rt}=n;return{delay:d,duration:i(f)?f(u):f,easing:p,css:(t,e)=>`transform: ${s} translate(${e*l}px, ${e*c}px);`}}const ct=[];function ut(e,n=t){let o;const s=[];function r(t){if(a(e,t)&&(e=t,o)){const t=!ct.length;for(let t=0;t<s.length;t+=1){const n=s[t];n[1](),ct.push(n,e)}if(t){for(let t=0;t<ct.length;t+=2)ct[t][0](ct[t+1]);ct.length=0}}}return{set:r,update:function(t){r(t(e))},subscribe:function(i,a=t){const l=[i,a];return s.push(l),1===s.length&&(o=n(r)||t),i(e),()=>{const t=s.indexOf(l);-1!==t&&s.splice(t,1),0===s.length&&(o(),o=null)}}}}const dt=(()=>{const{subscribe:t,update:e}=ut([]);let n=0,o={};return{subscribe:t,push:(t,s={})=>{const r={id:++n,msg:t,...o,...s,theme:{...o.theme,...s.theme}};return e(t=>r.reversed?[...t,r]:[r,...t]),n},pop:t=>{e(e=>t?e.filter(e=>e.id!==t):e.splice(1))},set:(t,n)=>{e(e=>{const o=e.findIndex(e=>e.id===t);return o>-1&&(e[o]={...e[o],...n}),e})},_opts:(t={})=>(o={...o,...t,theme:{...o.theme,...t.theme}},o)}})();function ft(t){return"[object Date]"===Object.prototype.toString.call(t)}function pt(t,e){if(t===e||t!=t)return()=>t;const n=typeof t;if(n!==typeof e||Array.isArray(t)!==Array.isArray(e))throw new Error("Cannot interpolate values of different type");if(Array.isArray(t)){const n=e.map((e,n)=>pt(t[n],e));return t=>n.map(e=>e(t))}if("object"===n){if(!t||!e)throw new Error("Object cannot be null");if(ft(t)&&ft(e)){t=t.getTime();const n=(e=e.getTime())-t;return e=>new Date(t+e*n)}const n=Object.keys(e),o={};return n.forEach(n=>{o[n]=pt(t[n],e[n])}),t=>{const e={};return n.forEach(n=>{e[n]=o[n](t)}),e}}if("number"===n){const n=e-t;return e=>t+e*n}throw new Error(`Cannot interpolate ${n} values`)}function gt(e){let n,o,s;return{c(){n=y("div"),n.textContent="✕",x(n,"class","_toastBtn svelte-mps0gq"),x(n,"role","button"),x(n,"tabindex","-1")},m(t,r){h(t,n,r),o||(s=w(n,"click",e[3]),o=!0)},p:t,d(t){t&&b(n),o=!1,s()}}}function mt(e){let n,o,s,r,i,a,l=e[0].msg+"",c=e[0].dismissable&&gt(e);return{c(){n=y("div"),o=y("div"),s=v(l),r=$(),c&&c.c(),i=$(),a=y("progress"),x(o,"class","_toastMsg svelte-mps0gq"),x(a,"class","_toastBar svelte-mps0gq"),a.value=e[1],x(n,"class","_toastItem svelte-mps0gq")},m(t,e){h(t,n,e),m(n,o),m(o,s),m(n,r),c&&c.m(n,null),m(n,i),m(n,a)},p(t,[e]){1&e&&l!==(l=t[0].msg+"")&&k(s,l),t[0].dismissable?c?c.p(t,e):(c=gt(t),c.c(),c.m(n,i)):c&&(c.d(1),c=null),2&e&&(a.value=t[1])},i:t,o:t,d(t){t&&b(n),c&&c.d()}}}function ht(t,o,s){let r,{item:i}=o;const a=function(t,o={}){const s=ut(t);let r,i=t;function a(a,l){if(null==t)return s.set(t=a),Promise.resolve();i=a;let c=r,d=!1,{delay:f=0,duration:p=400,easing:m=e,interpolate:h=pt}=n(n({},o),l);if(0===p)return c&&(c.abort(),c=null),s.set(t=i),Promise.resolve();const b=u()+f;let y;return r=g(e=>{if(e<b)return!0;d||(y=h(t,a),"function"==typeof p&&(p=p(t,a)),d=!0),c&&(c.abort(),c=null);const n=e-b;return n>p?(s.set(t=a),!1):(s.set(t=y(m(n/p))),!0)}),r.promise}return{set:a,update:(e,n)=>a(e(i,t),n),subscribe:s.subscribe}}(i.initial,{duration:i.duration,easing:e});l(t,a,t=>s(1,r=t));let c=i.initial;return t.$$set=t=>{"item"in t&&s(0,i=t.item)},t.$$.update=()=>{17&t.$$.dirty&&c!==i.progress&&(1===i.progress||0===i.progress?a.set(i.progress).then(()=>dt.pop(i.id)):a.set(i.progress),s(4,c=i.progress))},[i,r,a,()=>dt.pop(i.id)]}class bt extends st{constructor(t){var e;super(),document.getElementById("svelte-mps0gq-style")||((e=y("style")).id="svelte-mps0gq-style",e.textContent="._toastItem.svelte-mps0gq{width:var(--toastWidth,16rem);height:var(--toastHeight,3.5rem);margin-bottom:var(--toastMarginBottom,0.5rem);background:var(--toastBackground,rgba(74,85,104,0.98));color:var(--toastColor,#FFF);box-shadow:0 4px 6px -1px rgba(0,0,0,0.1),0 2px 4px -1px rgba(0,0,0,0.06);border-radius:0.125rem;position:relative;display:flex;flex-direction:row;align-items:center;will-change:transform,opacity;-webkit-tap-highlight-color:transparent}._toastMsg.svelte-mps0gq{font-size:var(--toastFontSize,1rem);flex:1 1 0%;padding:0 0.5rem}._toastBtn.svelte-mps0gq{width:2rem;height:100%;font:1rem sans-serif;display:flex;align-items:center;justify-content:center;cursor:pointer;outline:none;pointer-events:auto}._toastBar.svelte-mps0gq{display:block;appearance:none;border:none;position:absolute;bottom:0;width:100%;height:6px;background:transparent}._toastBar.svelte-mps0gq::-webkit-progress-bar{background:transparent}._toastBar.svelte-mps0gq::-webkit-progress-value{background:var(--toastProgressBackground,rgba(66,153,225,0.98))}._toastBar.svelte-mps0gq::-moz-progress-bar{background:var(--toastProgressBackground,rgba(66,153,225,0.98))}",m(document.head,e)),ot(this,t,ht,mt,a,{item:0})}}function yt(t,e,n){const o=t.slice();return o[4]=e[n],o}function vt(n,o){let s,a,l,c,d,f,p,v,w=t;return a=new bt({props:{item:o[4]}}),{key:n,first:null,c(){s=y("li"),tt(a.$$.fragment),l=$(),x(s,"style",c=o[1](o[4].theme)),this.first=s},m(t,e){h(t,s,e),et(a,s,null),m(s,l),v=!0},p(t,e){const n={};1&e&&(n.item=t[4]),a.$set(n),(!v||1&e&&c!==(c=t[1](t[4].theme)))&&x(s,"style",c)},r(){p=s.getBoundingClientRect()},f(){!function(t){const e=getComputedStyle(t);if("absolute"!==e.position&&"fixed"!==e.position){const{width:n,height:o}=e,s=t.getBoundingClientRect();t.style.position="absolute",t.style.width=n,t.style.height=o,A(t,s)}}(s),w(),A(s,p)},a(){w(),w=function(n,o,s,r){if(!o)return t;const i=n.getBoundingClientRect();if(o.left===i.left&&o.right===i.right&&o.top===i.top&&o.bottom===i.bottom)return t;const{delay:a=0,duration:l=300,easing:c=e,start:d=u()+a,end:f=d+l,tick:p=t,css:m}=s(n,{from:o,to:i},r);let h,b=!0,y=!1;function v(){m&&O(n,h),b=!1}return g(t=>{if(!y&&t>=d&&(y=!0),y&&t>=f&&(p(1,0),v()),!b)return!1;if(y){const e=0+1*c((t-d)/l);p(e,1-e)}return!0}),m&&(h=S(n,0,1,l,a,c,m)),a||(y=!0),p(0,1),v}(s,p,lt,{duration:200})},i(n){v||(K(a.$$.fragment,n),j(()=>{f&&f.end(1),d||(d=function(n,o,s){let r,a,l=o(n,s),c=!1,d=0;function f(){r&&O(n,r)}function p(){const{delay:o=0,duration:s=300,easing:i=e,tick:p=t,css:m}=l||X;m&&(r=S(n,0,1,s,o,i,m,d++)),p(0,1);const h=u()+o,b=h+s;a&&a.abort(),c=!0,j(()=>J(n,!0,"start")),a=g(t=>{if(c){if(t>=b)return p(1,0),J(n,!0,"end"),f(),c=!1;if(t>=h){const e=i((t-h)/s);p(e,1-e)}}return c})}let m=!1;return{start(){m||(O(n),i(l)?(l=l(),U().then(p)):p())},invalidate(){m=!1},end(){c&&(f(),c=!1)}}}(s,at,o[4].intro)),d.start()}),v=!0)},o(n){Q(a.$$.fragment,n),d&&d.invalidate(),f=function(n,o,s){let a,l=o(n,s),c=!0;const d=V;function f(){const{delay:o=0,duration:s=300,easing:i=e,tick:f=t,css:p}=l||X;p&&(a=S(n,1,0,s,o,i,p));const m=u()+o,h=m+s;j(()=>J(n,!1,"start")),g(t=>{if(c){if(t>=h)return f(0,1),J(n,!1,"end"),--d.r||r(d.c),!1;if(t>=m){const e=i((t-m)/s);f(1-e,e)}}return c})}return d.r+=1,i(l)?U().then(()=>{l=l(),f()}):f(),{end(t){t&&l.tick&&l.tick(1,0),c&&(a&&O(n,a),c=!1)}}}(s,it,{}),v=!1},d(t){t&&b(s),nt(a),t&&f&&f.end()}}}function $t(t){let e,n,o=[],s=new Map,i=t[0];const a=t=>t[4].id;for(let e=0;e<i.length;e+=1){let n=yt(t,i,e),r=a(n);s.set(r,o[e]=vt(r,n))}return{c(){e=y("ul");for(let t=0;t<o.length;t+=1)o[t].c();x(e,"class","svelte-ivwmun")},m(t,s){h(t,e,s);for(let t=0;t<o.length;t+=1)o[t].m(e,null);n=!0},p(t,[n]){if(3&n){const i=t[0];V={r:0,c:[],p:V};for(let t=0;t<o.length;t+=1)o[t].r();o=function(t,e,n,o,s,r,i,a,l,c,u,d){let f=t.length,p=r.length,g=f;const m={};for(;g--;)m[t[g].key]=g;const h=[],b=new Map,y=new Map;for(g=p;g--;){const t=d(s,r,g),a=n(t);let l=i.get(a);l?o&&l.p(t,e):(l=c(a,t),l.c()),b.set(a,h[g]=l),a in m&&y.set(a,Math.abs(g-m[a]))}const v=new Set,$=new Set;function w(t){K(t,1),t.m(a,u),i.set(t.key,t),u=t.first,p--}for(;f&&p;){const e=h[p-1],n=t[f-1],o=e.key,s=n.key;e===n?(u=e.first,f--,p--):b.has(s)?!i.has(o)||v.has(o)?w(e):$.has(s)?f--:y.get(o)>y.get(s)?($.add(o),w(e)):(v.add(s),f--):(l(n,i),f--)}for(;f--;){const e=t[f];b.has(e.key)||l(e,i)}for(;p;)w(h[p-1]);return h}(o,n,a,1,t,i,s,e,Z,vt,null,yt);for(let t=0;t<o.length;t+=1)o[t].a();V.r||r(V.c),V=V.p}},i(t){if(!n){for(let t=0;t<i.length;t+=1)K(o[t]);n=!0}},o(t){for(let t=0;t<o.length;t+=1)Q(o[t]);n=!1},d(t){t&&b(e);for(let t=0;t<o.length;t+=1)o[t].d()}}}function wt(t,e,n){let o;l(t,dt,t=>n(0,o=t));let{options:s={}}=e;dt._opts({duration:4e3,dismissable:!0,initial:1,progress:0,reversed:!1,intro:{x:256},theme:{}});return t.$$set=t=>{"options"in t&&n(2,s=t.options)},t.$$.update=()=>{4&t.$$.dirty&&dt._opts(s)},[o,t=>{let e="";for(const[n,o]of Object.entries(t))e+=`${n}:${o};`;return e||void 0},s]}class xt extends st{constructor(t){var e;super(),document.getElementById("svelte-ivwmun-style")||((e=y("style")).id="svelte-ivwmun-style",e.textContent="ul.svelte-ivwmun{position:fixed;margin:0;padding:0;list-style-type:none;z-index:9999;pointer-events:none;top:var(--toastContainerTop,1.5rem);right:var(--toastContainerRight,2rem);bottom:var(--toastContainerBottom,auto);left:var(--toastContainerLeft,auto)}",m(document.head,e)),ot(this,t,wt,$t,a,{options:2})}}function kt(t){let e,n,o,s,i,a,l,c,u,d,f,p,g,_,B,E,S,O,A,R,T,P,L,q,F,I,M,D,j,N,W,z,G,H,U,J;return G=new xt({props:{options:t[3]}}),{c(){e=y("div"),n=y("div"),o=y("pre"),s=y("code"),i=v(t[1]),a=$(),l=y("div"),c=y("button"),c.textContent="DEFAULT",u=$(),d=y("button"),d.textContent="GREEN",f=$(),p=y("button"),p.textContent="YELLOW",g=$(),_=y("button"),_.textContent="RED",B=$(),E=y("button"),E.textContent="LONG TIME",S=$(),O=y("button"),O.textContent="NO DISMISS",A=$(),R=y("button"),R.textContent="REMOVE LAST",T=$(),P=y("button"),P.textContent="FLIP PROGRESS",L=$(),q=y("button"),q.textContent="USE AS LOADING INDICATOR",F=$(),I=y("button"),I.textContent="CHANGE DEFAULT COLORS",M=$(),D=y("button"),D.textContent="POSITION TO BOTTOM",j=$(),N=y("button"),N.textContent="RESTORE DEFAULTS",W=$(),z=y("div"),tt(G.$$.fragment),x(o,"class","w-full h-full bg-gray-700 text-gray-200 font-mono border border-gray-500 rounded-sm overflow-scroll p-4"),x(n,"class","w-full h-64 px-2 mt-4 mb-8"),x(c,"class","btn"),C(c,"selected","default"===t[0]),x(d,"class","btn"),C(d,"selected","green"===t[0]),x(p,"class","btn"),C(p,"selected","yellow"===t[0]),x(_,"class","btn"),C(_,"selected","red"===t[0]),x(E,"class","btn"),C(E,"selected","long"===t[0]),x(O,"class","btn"),C(O,"selected","nodismiss"===t[0]),x(R,"class","btn"),C(R,"selected","remove"===t[0]),x(P,"class","btn"),C(P,"selected","flip"===t[0]),x(q,"class","btn"),C(q,"selected","loading"===t[0]),x(I,"class","btn"),C(I,"selected","color"===t[0]),x(D,"class","btn"),C(D,"selected","bottom"===t[0]),x(N,"class","btn"),C(N,"selected","restore"===t[0]),x(l,"class","flex flex-row flex-wrap items-center justify-center"),x(e,"class","container"),x(z,"class","svelte-69uade"),C(z,"colors",t[2]),C(z,"bottom",t[4])},m(r,b){h(r,e,b),m(e,n),m(n,o),m(o,s),m(s,i),m(e,a),m(e,l),m(l,c),m(l,u),m(l,d),m(l,f),m(l,p),m(l,g),m(l,_),m(l,B),m(l,E),m(l,S),m(l,O),m(l,A),m(l,R),m(l,T),m(l,P),m(l,L),m(l,q),m(l,F),m(l,I),m(l,M),m(l,D),m(l,j),m(l,N),h(r,W,b),h(r,z,b),et(G,z,null),H=!0,U||(J=[w(c,"click",t[5]),w(d,"click",t[6]),w(p,"click",t[7]),w(_,"click",t[8]),w(E,"click",t[9]),w(O,"click",t[10]),w(R,"click",t[11]),w(P,"click",t[12]),w(q,"click",t[13]),w(I,"click",t[14]),w(D,"click",t[15]),w(N,"click",t[16])],U=!0)},p(t,[e]){(!H||2&e)&&k(i,t[1]),1&e&&C(c,"selected","default"===t[0]),1&e&&C(d,"selected","green"===t[0]),1&e&&C(p,"selected","yellow"===t[0]),1&e&&C(_,"selected","red"===t[0]),1&e&&C(E,"selected","long"===t[0]),1&e&&C(O,"selected","nodismiss"===t[0]),1&e&&C(R,"selected","remove"===t[0]),1&e&&C(P,"selected","flip"===t[0]),1&e&&C(q,"selected","loading"===t[0]),1&e&&C(I,"selected","color"===t[0]),1&e&&C(D,"selected","bottom"===t[0]),1&e&&C(N,"selected","restore"===t[0]);const n={};8&e&&(n.options=t[3]),G.$set(n),4&e&&C(z,"colors",t[2]),16&e&&C(z,"bottom",t[4])},i(t){H||(K(G.$$.fragment,t),H=!0)},o(t){Q(G.$$.fragment,t),H=!1},d(t){t&&b(e),t&&b(W),t&&b(z),nt(G),U=!1,r(J)}}}function Ct(t,e,n){let o;window.toast=dt;let s="";const r=t=>new Promise(e=>setTimeout(e,t));let i=!1;let a={},l=!1;return[o,s,i,a,l,()=>{n(0,o="default"),n(1,s="toast.push('Hello world!')"),dt.push("Hello world!")},()=>{n(0,o="green"),n(1,s="toast.push('Success!', {\n  theme: {\n    '--toastBackground': '#48BB78',\n    '--toastProgressBackground': '#2F855A'\n  }\n)"),dt.push("Success!",{theme:{"--toastBackground":"#48BB78","--toastProgressBackground":"#2F855A"}})},()=>{n(0,o="yellow"),n(1,s="toast.push('Warning!', {\n  theme: {\n    '--toastBackground': '#ECC94B',\n    '--toastProgressBackground': '#B7791F'\n  }\n)"),dt.push("Warning!",{theme:{"--toastBackground":"#ECC94B","--toastProgressBackground":"#B7791F"}})},()=>{n(0,o="red"),n(1,s="toast.push('Error!', {\n  theme: {\n    '--toastBackground': '#F56565',\n    '--toastProgressBackground': '#C53030'\n  }\n)"),dt.push("Error!",{theme:{"--toastBackground":"#F56565","--toastProgressBackground":"#C53030"}})},()=>{n(0,o="long"),n(1,s="toast.push('Watching the paint dry...', { duration: 20000 })"),dt.push("Watching the paint dry...",{duration:2e4})},()=>{n(0,o="nodismiss"),n(1,s="toast.push('Where the close btn?!?', {\n  initial: 0,\n  progress: 0,\n  dismissable: false\n})"),dt.push("Where the close btn?!?",{initial:0,progress:0,dismissable:!1})},()=>{n(0,o="remove"),n(1,s="// Remove the latest toast\ntoast.pop()\n\n// Or remove a particular one\nconst id = toast('Yo!')\ntoast.pop(id)"),dt.pop()},()=>{n(0,o="flip"),n(1,s="toast.push('Progress bar is flipped', {\n  initial: 0,\n  progress: 1\n})"),dt.push("Progress bar is flipped",{initial:0,progress:1})},async()=>{n(0,o="loading"),n(1,s="const sleep = t => new Promise(resolve => setTimeout(resolve, t))\nconst id = toast.push('Loading, please wait...', {\n  duration: 300,\n  initial: 0,\n  progress: 0,\n  dismissable: false\n})\nawait sleep(500)\ntoast.set(id, { progress: 0.1 })\nawait sleep(3000)\ntoast.set(id, { progress: 0.7 })\nawait sleep(1000)\ntoast.set(id, { msg: 'Just a bit more', progress: 0.8 })\nawait sleep(2000)\ntoast.set(id, { progress: 1 })\n");const t=dt.push("Loading, please wait...",{duration:300,initial:0,progress:0,dismissable:!1});await r(500),dt.set(t,{progress:.1}),await r(3e3),dt.set(t,{progress:.7}),await r(1e3),dt.set(t,{msg:"Just a bit more",progress:.8}),await r(2e3),dt.set(t,{progress:1})},()=>{n(0,o="color"),n(1,s="<style>\n:root {\n  --toastBackground: rgba(255,255,255,0.98);\n  --toastColor: #2D3748;\n}\n</style>\n<script>\n  toast.push('Changed some colors')\n<\/script>"),n(2,i=!0),dt.push("Changed some colors")},async()=>{n(0,o="bottom"),n(1,s="<style>\n:root {\n  --toastContainerTop: auto;\n  --toastContainerRight: auto;\n  --toastContainerBottom: 8rem;\n  --toastContainerLeft: calc(50vw - 8rem);\n}\n</style>\n\n<SvelteToast options={{ reversed: true, intro: { y: 192 } }} />\n\n<script>\n  toast.push('Bottoms up!')\n<\/script>"),n(4,l=!0),n(3,a={reversed:!0,intro:{y:128}}),await D(),dt.push("Bottoms up!")},async()=>{n(0,o="restore"),n(1,s="// All default settings restored!"),n(2,i=!1),n(4,l=!1),n(3,a={}),await D(),dt.push("All themes reset!")}]}return new class extends st{constructor(t){var e;super(),document.getElementById("svelte-69uade-style")||((e=y("style")).id="svelte-69uade-style",e.textContent=".colors.svelte-69uade{--toastBackground:rgba(255,255,255,0.98);--toastColor:#2D3748}.bottom.svelte-69uade{--toastContainerTop:auto;--toastContainerRight:auto;--toastContainerBottom:8rem;--toastContainerLeft:calc(50vw - 8rem)}",m(document.head,e)),ot(this,t,Ct,kt,a,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
