!function(){function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function n(t){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?e(Object(o),!0).forEach((function(e){r(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):e(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&a(t,e)}function a(t,e){return(a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function c(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=s(t);if(e){var o=s(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return l(this,n)}}function l(e,n){if(n&&("object"===t(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return u(e)}function u(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function f(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var r,o,i=[],a=!0,c=!1;try{for(n=n.call(t);!(a=(r=n.next()).done)&&(i.push(r.value),!e||i.length!==e);a=!0);}catch(l){c=!0,o=l}finally{try{a||null==n.return||n.return()}finally{if(c)throw o}}return i}(t,e)||d(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(t,e,n,r,o,i,a){try{var c=t[i](a),l=c.value}catch(u){return void n(u)}c.done?e(l):Promise.resolve(l).then(r,o)}function v(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function a(t){p(i,r,o,a,c,"next",t)}function c(t){p(i,r,o,a,c,"throw",t)}a(void 0)}))}}function d(t,e){if(t){if("string"==typeof t)return h(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?h(t,e):void 0}}function h(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var m=document.createElement("style");m.innerHTML='html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote{&:before,&:after{content:"";content:none}}q{&:before,&:after{content:"";content:none}}table{border-collapse:collapse;border-spacing:0}@font-face{font-family:Inter;src:url(/clips/assets/Inter.f6789b15.woff2)}body{font-family:Inter;background-color:#1e1f27}*>a,span{text-decoration:none;color:#fff;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.container{width:1080px;margin:0 auto}.button.svelte-1pzfnpw.svelte-1pzfnpw{display:flex;justify-content:center;position:relative}.button.svelte-1pzfnpw .loading.svelte-1pzfnpw{-webkit-animation-name:svelte-1pzfnpw-spin;animation-name:svelte-1pzfnpw-spin;-webkit-animation-duration:1.5s;animation-duration:1.5s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:linear;animation-timing-function:linear;cursor:pointer;fill:#fff;height:21px;padding:7px;position:absolute;width:21px}.button.svelte-1pzfnpw button.svelte-1pzfnpw{cursor:pointer;height:35px;width:90px}@-webkit-keyframes svelte-1pzfnpw-spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}@keyframes svelte-1pzfnpw-spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}input[type=text].svelte-1rln79d{margin-right:8px;cursor:text}section.svelte-169jyoy.svelte-169jyoy{background-color:#2a2c38;border-radius:10px;height:35px;margin-bottom:10px;padding:8px}section.svelte-169jyoy form.svelte-169jyoy{display:inline-flex;height:35px;position:relative;width:100%}section.svelte-169jyoy form.svelte-169jyoy input,section.svelte-169jyoy form.svelte-169jyoy button{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:#1e1f27;border:none;border-radius:4px;color:#fff;font-family:Inter;font-size:14px;padding:5px 15px;width:28%}section.svelte-169jyoy form.svelte-169jyoy input::-moz-placeholder,section.svelte-169jyoy form.svelte-169jyoy button::-moz-placeholder{color:#fff}section.svelte-169jyoy form.svelte-169jyoy input:-ms-input-placeholder,section.svelte-169jyoy form.svelte-169jyoy button:-ms-input-placeholder{color:#fff}section.svelte-169jyoy form.svelte-169jyoy input::placeholder,section.svelte-169jyoy form.svelte-169jyoy button::placeholder{color:#fff}section.svelte-169jyoy form.svelte-169jyoy input:disabled{cursor:not-allowed}section.svelte-169jyoy form.svelte-169jyoy input:focus{background:#1c1d25;box-shadow:0 0 0 3px #ffffff12;outline:none!important}nav.svelte-qctvjn.svelte-qctvjn{display:flex;height:48px}nav.svelte-qctvjn a.svelte-qctvjn,nav.svelte-qctvjn span.svelte-qctvjn{margin:auto 0}nav.svelte-qctvjn .title.svelte-qctvjn{font-size:18px;font-variation-settings:"wght" 675;margin-left:10px}nav.svelte-qctvjn .navlink.svelte-qctvjn{background-color:#2a2c38;border-radius:4px;cursor:pointer;font-size:12px;font-variation-settings:"wght" 500;height:16px;line-height:16px;margin-left:16px;padding:6px 17px}nav.svelte-qctvjn .navlink.svelte-qctvjn:hover{background-color:#313442}nav.svelte-qctvjn .login.svelte-qctvjn,nav.svelte-qctvjn .username.svelte-qctvjn{margin-left:auto}nav.svelte-qctvjn .username.svelte-qctvjn{color:#fff;font-size:13px}.column.svelte-49dj2h{line-height:18px;margin:auto 0;padding:8px;word-break:break-word}.date.svelte-49dj2h{font-family:Consolas;font-size:14px;text-align:center}.header.svelte-1j9ten5.svelte-1j9ten5{display:inline-flex}.header.svelte-1j9ten5 span.svelte-1j9ten5{line-height:36px}.header.svelte-1j9ten5 .buttons.svelte-1j9ten5{align-items:center;display:inline-flex;height:100%}.header.svelte-1j9ten5 .sorting.svelte-1j9ten5{border-radius:6px;cursor:pointer;margin:4px;height:28px}.header.svelte-1j9ten5 .sorting.svelte-1j9ten5:hover{background-color:#ffffff1c}.header.svelte-1j9ten5 .sorting .arrow.svelte-1j9ten5{height:18px;opacity:0;padding:5px;transition:transform .2s ease,opacity .15s ease}.header.svelte-1j9ten5 .sorting .active.svelte-1j9ten5{opacity:100}.header.svelte-1j9ten5 .sorting .rotate.svelte-1j9ten5{transform:rotate(180deg)}header.svelte-1a6cvuf.svelte-1a6cvuf{display:flex;height:36px;justify-content:flex-end}header.svelte-1a6cvuf .clips.svelte-1a6cvuf{line-height:36px}.thumbnail.svelte-xbkpcr.svelte-xbkpcr{height:100px;margin:auto 0 auto 8px;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:176px}.thumbnail.svelte-xbkpcr img.svelte-xbkpcr{border-radius:4px;height:100px;opacity:0;transition:opacity .3s ease;width:176px}.thumbnail.svelte-xbkpcr .loaded.svelte-xbkpcr{opacity:100}.thumbnail.svelte-xbkpcr .layer.svelte-xbkpcr{position:absolute;top:0;left:0;right:0;bottom:0;background-color:#000000a6;border-radius:4px;display:flex;justify-content:center;transition:opacity .1s ease;opacity:0}.thumbnail.svelte-xbkpcr .layer .buttons.svelte-xbkpcr{align-items:center;display:flex}.thumbnail.svelte-xbkpcr .layer .buttons a.svelte-xbkpcr{border-radius:50%;cursor:pointer;height:32px;fill:#fff;margin:4px;padding:6px;transition:background-color 50ms ease;width:32px}.thumbnail.svelte-xbkpcr .layer .buttons a.svelte-xbkpcr:hover{background-color:#ffffff1a}.thumbnail.svelte-xbkpcr .layer .buttons a svg.svelte-xbkpcr{height:32px;width:32px}.thumbnail.svelte-xbkpcr .hover.svelte-xbkpcr{opacity:100}.viewport.svelte-127ck9p{position:relative;overflow-y:auto;-webkit-overflow-scrolling:touch;display:block}.content.svelte-127ck9p{display:block}.row.svelte-127ck9p{display:flex;overflow:hidden}.clips.svelte-1jsjb3d{background:#2a2c38;border-radius:8px 8px 11px 11px;color:#fff;font-size:14px;padding:0 8px 8px}.viewport{background-color:#1e1f27;border-radius:6px;height:calc(100vh - 185px)}.row{height:116px;font-size:13px}.row:hover{background-color:#24262f;border-radius:4px}\n',document.head.appendChild(m),System.register(["./vendor-legacy.dda9abde.js"],(function(){"use strict";var t,e,r,a,l,s,p,d,h,m,g,b,y,w,x,$,j,k,S,O,I,_,z,A,R,q,C,E,H,T,D,M,Y,P,N,L,U,B,V,G,W,F;return{setters:[function(n){t=n.g,e=n.w,r=n.a,a=n.S,l=n.i,s=n.s,p=n.b,d=n.c,h=n.d,m=n.e,g=n.f,b=n.h,y=n.t,w=n.j,x=n.k,$=n.n,j=n.l,k=n.m,S=n.o,O=n.p,I=n.q,_=n.r,z=n.u,A=n.v,R=n.x,q=n.y,C=n.z,E=n.A,H=n.B,T=n.C,D=n.D,M=n.E,Y=n.F,P=n.G,N=n.H,L=n.I,U=n.J,B=n.K,V=n.L,G=n.M,W=n.N,F=n.O}],execute:function(){var J,K,Q,X;function Z(e){var n=t(ot),r=n.field,o=n.order;return e.sort((function(t,e){var n,i,a,c;switch(r){case J.TITLE:return o?null===(n=t.title)||void 0===n?void 0:n.localeCompare(e.title):e.title.localeCompare(t.title);case J.AUTHOR:return o?null===(i=t.displayName)||void 0===i?void 0:i.localeCompare(e.displayName):e.displayName.localeCompare(t.displayName);case J.CATEGORY:return o?null===(a=t.category)||void 0===a?void 0:a.localeCompare(e.category):null===(c=e.category)||void 0===c?void 0:c.localeCompare(t.category);case J.VIEWS:return o?t.views-e.views:e.views-t.views;case J.DATE:return o?t.createdAt-e.createdAt:e.createdAt-t.createdAt;default:return e.views-t.views}}))}(K=J||(J={})).TITLE="Title",K.AUTHOR="Author",K.CATEGORY="Category",K.VIEWS="Views",K.DATE="Date",(X=Q||(Q={}))[X.ASC=1]="ASC",X[X.DESC=0]="DESC";var tt={clips:[],loading:!1,sorting:{field:J.VIEWS,order:!!Q.DESC},params:null},et=e(tt.clips),nt=e(tt.loading),rt=e(tt.params),ot=e(tt.sorting);function it(t,e){return at.apply(this,arguments)}function at(){return(at=v(regeneratorRuntime.mark((function t(e,n){var o,i,a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=localStorage.getItem("tcf:client_id"),i=localStorage.getItem("tcf:oauth"),(a=new URL("https://api.twitch.tv/helix/users")).searchParams.append(n?"login":"id",e),t.abrupt("return",r(a.toString(),{headers:{Authorization:"Bearer "+i,"Client-Id":o}}).then((function(t){var e=t.data.data[0];return!!e&&{userId:e.id,login:e.login,displayName:e.display_name,avatar:e.profile_image_url}})));case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function ct(t){return lt.apply(this,arguments)}function lt(){return(lt=v(regeneratorRuntime.mark((function t(e){var n,o,i,a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.length){t.next=2;break}return t.abrupt("return",null);case 2:if(n=localStorage.getItem("tcf:client_id"),o=localStorage.getItem("tcf:oauth"),i=e.map((function(t){return t.categoryId})).filter((function(t,e,n){return n.indexOf(t)===e})),a=new URL("https://api.twitch.tv/helix/games"),Object.entries(i).forEach((function(t){var e=f(t,2),n=(e[0],e[1]);n&&a.searchParams.append("id",n)})),!i.length){t.next=9;break}return t.abrupt("return",r(a.toString(),{headers:{Authorization:"Bearer "+o,"Client-Id":n}}).then((function(t){return t.data.data.map((function(t){return{categoryId:t.id,categoryName:t.name}}))})));case 9:return t.abrupt("return",null);case 10:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function ut(){return(ut=v(regeneratorRuntime.mark((function t(e){var o,i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=localStorage.getItem("tcf:client_id"),i=localStorage.getItem("tcf:oauth"),t.abrupt("return",r(e.toString(),{headers:{Authorization:"Bearer "+i,"Client-Id":o}}).then(function(){var t=v(regeneratorRuntime.mark((function t(e){var r,o,i,a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.data.pagination.cursor,o=e.data.data.map((function(t){return{displayName:t.creator_name||"-",title:t.title.trim(),views:t.view_count,createdAt:new Date(t.created_at).getTime(),thumbnail:t.thumbnail_url,download:t.thumbnail_url.replace("-preview-480x272.jpg",".mp4"),url:t.url,categoryId:t.game_id}})),t.next=4,ct(o);case 4:return i=t.sent,a=o.map((function(t){if(i){var e=f(i.filter((function(e){return e.categoryId===t.categoryId})),1)[0];return n(n({},t),{},{category:(null==e?void 0:e.categoryName)||"-"})}return t})),t.abrupt("return",[a,r]);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()));case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function st(){return(st=v(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=localStorage.getItem("tcf:oauth"),t.abrupt("return",r("https://id.twitch.tv/oauth2/validate",{headers:{Authorization:"Bearer "+e}}).then((function(t){var e=t.data;return{clientId:e.client_id,userId:e.user_id}})));case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function ft(t){var e,n;return{c:function(){e=p("svg"),n=p("path"),d(n,"d","M10.5,0C4.7,0,0,4.7,0,10.5h2.9c0-4.2,3.4-7.6,7.6-7.6s7.6,3.4,7.6,7.6s-3.4,7.6-7.6,7.6V21\n\t\tC16.3,21,21,16.3,21,10.5S16.3,0,10.5,0L10.5,0z"),d(e,"class","loading svelte-1pzfnpw")},m:function(t,r){h(t,e,r),m(e,n)},d:function(t){t&&g(e)}}}function pt(t){var e,n,r,o,i=t[0]?"":"Search",a=t[0]&&ft();return{c:function(){e=b("div"),n=b("button"),r=y(i),o=w(),a&&a.c(),n.disabled=t[0],d(n,"class","svelte-1pzfnpw"),d(e,"class","button svelte-1pzfnpw")},m:function(t,i){h(t,e,i),m(e,n),m(n,r),m(e,o),a&&a.m(e,null)},p:function(t,o){var c=f(o,1)[0];1&c&&i!==(i=t[0]?"":"Search")&&x(r,i),1&c&&(n.disabled=t[0]),t[0]?a||((a=ft()).c(),a.m(e,null)):a&&(a.d(1),a=null)},i:$,o:$,d:function(t){t&&g(e),a&&a.d()}}}function vt(t,e,n){var r;return j(t,nt,(function(t){return n(0,r=t)})),[r]}var dt=function(t){i(n,t);var e=c(n);function n(t){var r;return o(this,n),r=e.call(this),l(u(r),t,vt,pt,s,{}),r}return n}(a),ht="5lwlf9w9oltmzn9oquqgambkdbjr5d",mt="https://jeted.github.io/clips-svelte/";function gt(n){var r=localStorage.getItem(n),o=e(localStorage.getItem(n)),i=o.subscribe,a=o.set;return r&&a(r),{set:function(t){localStorage.setItem(n,t),a(t)},update:function(e){var n=e(t(o));this.set(n)},subscribe:i}}function bt(){var e="https://id.twitch.tv/oauth2/authorize?client_id=".concat(ht,"&redirect_uri=").concat(mt,"&response_type=token"),n=gt("tcf:oauth"),r=gt("tcf:username"),o=gt("tcf:expires");if(t(n)&&t(o)){Number(Date.now())-Number(t(o))>12096e5&&localStorage.clear()}if(window.location.hash){var i=f(window.location.hash.match(/(?<=access_token=)(.*?)(?=\&)/)||[],2),a=i[0],c=i[1];a&&(n.set(c),o.set(Date.now().toString()),window.history.pushState({},"",mt))}return{LOGIN_URL:e,USERNAME:r,OAUTH:n}}function yt(t){var e,n,r,o;return{c:function(){e=b("input"),d(e,"type","text"),d(e,"spellcheck","false"),d(e,"autocomplete","false"),d(e,"placeholder",t[1]),e.disabled=n=!t[2],d(e,"class","svelte-1rln79d")},m:function(n,i){h(n,e,i),k(e,t[0]),r||(o=S(e,"input",t[4]),r=!0)},p:function(t,r){var o=f(r,1)[0];2&o&&d(e,"placeholder",t[1]),4&o&&n!==(n=!t[2])&&(e.disabled=n),1&o&&e.value!==t[0]&&k(e,t[0])},i:$,o:$,d:function(t){t&&g(e),r=!1,o()}}}function wt(t,e,n){var r,o=bt().OAUTH;j(t,o,(function(t){return n(2,r=t)}));var i=e.placeholder,a=e.value;return t.$$set=function(t){"placeholder"in t&&n(1,i=t.placeholder),"value"in t&&n(0,a=t.value)},[a,i,r,o,function(){a=this.value,n(0,a)}]}var xt=function(t){i(n,t);var e=c(n);function n(t){var r;return o(this,n),r=e.call(this),l(u(r),t,wt,yt,s,{placeholder:1,value:0}),r}return n}(a);function $t(t){var e,n,r,o,i,a,c,l,u,s,f,p;return r=new xt({props:{placeholder:"From...",value:jt.from_date}}),i=new xt({props:{placeholder:"To...",value:jt.to_date}}),c=new xt({props:{placeholder:"Channel",value:jt.channel}}),u=new dt({}),{c:function(){e=b("section"),n=b("form"),I(r.$$.fragment),o=w(),I(i.$$.fragment),a=w(),I(c.$$.fragment),l=w(),I(u.$$.fragment),d(n,"class","svelte-169jyoy"),d(e,"class","svelte-169jyoy")},m:function(t,v){h(t,e,v),m(e,n),_(r,n,null),m(n,o),_(i,n,null),m(n,a),_(c,n,null),m(n,l),_(u,n,null),s=!0,f||(p=S(n,"submit",kt),f=!0)},p:$,i:function(t){s||(z(r.$$.fragment,t),z(i.$$.fragment,t),z(c.$$.fragment,t),z(u.$$.fragment,t),s=!0)},o:function(t){A(r.$$.fragment,t),A(i.$$.fragment,t),A(c.$$.fragment,t),A(u.$$.fragment,t),s=!1},d:function(t){t&&g(e),R(r),R(i),R(c),R(u),f=!1,p()}}}var jt={from_date:"26/05/2016",to_date:O(new Date).format("DD/MM/YYYY"),channel:""};function kt(t){t.preventDefault(),et.set([]),""!==(jt={from_date:t.target[0].value,to_date:t.target[1].value,channel:t.target[2].value}).channel&&(nt.set(!0),it(jt.channel,!0).then((function(t){t?rt.set({broadcaster_id:t.userId,first:100,started_at:O(jt.from_date,"DD/MM/YYYY").toISOString(),ended_at:O(jt.to_date,"DD/MM/YYYY").toISOString()}):nt.set(!1)})))}rt.subscribe((function(e){if(e){nt.set(!0);var n=new URL("https://api.twitch.tv/helix/clips");Object.entries(t(rt)).forEach((function(t){var e=f(t,2),r=e[0],o=e[1];n.searchParams.set(r,o)})),function(t){return ut.apply(this,arguments)}(n).then((function(e){var n=f(e,2),r=n[0],o=n[1];nt.set(!1),et.update((function(t){return Z(t.concat(r))})),o&&rt.set(Object.assign(Object.assign({},t(rt)),{after:o}))}))}}));var St=function(t){i(n,t);var e=c(n);function n(t){var r;return o(this,n),r=e.call(this),l(u(r),t,null,$t,s,{}),r}return n}(a);function Ot(t){var e,n;return{c:function(){e=b("a"),n=y("Login with Twitch"),d(e,"class","navlink login svelte-qctvjn"),d(e,"href",t[1])},m:function(t,r){h(t,e,r),m(e,n)},p:$,d:function(t){t&&g(e)}}}function It(t){var e,n,r,o,i,a,c;return{c:function(){e=b("span"),n=y("Logged as "),r=y(t[0]),o=w(),(i=b("span")).textContent="Disconnect",d(e,"class","username svelte-qctvjn"),d(i,"class","navlink svelte-qctvjn")},m:function(l,u){h(l,e,u),m(e,n),m(e,r),h(l,o,u),h(l,i,u),a||(c=S(i,"click",t[4]),a=!0)},p:function(t,e){1&e&&x(r,t[0])},d:function(t){t&&g(e),t&&g(o),t&&g(i),a=!1,c()}}}function _t(t){var e,n,r,o,i;function a(t,e){return t[0]?It:Ot}var c=a(t),l=c(t);return{c:function(){e=b("nav"),(n=b("a")).textContent="jeted.github.io",r=w(),(o=b("a")).textContent="Clips",i=w(),l.c(),d(n,"class","title svelte-qctvjn"),d(n,"href","https://github.com/Jeted"),d(o,"class","navlink svelte-qctvjn"),d(o,"href","/clips"),d(e,"class","svelte-qctvjn")},m:function(t,a){h(t,e,a),m(e,n),m(e,r),m(e,o),m(e,i),l.m(e,null)},p:function(t,n){var r=f(n,1)[0];c===(c=a(t))&&l?l.p(t,r):(l.d(1),(l=c(t))&&(l.c(),l.m(e,null)))},i:$,o:$,d:function(t){t&&g(e),l.d()}}}function zt(t,e,n){var r,o,i=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function a(t){try{l(r.next(t))}catch(e){i(e)}}function c(t){try{l(r.throw(t))}catch(e){i(e)}}function l(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,c)}l((r=r.apply(t,e||[])).next())}))},a=bt(),c=a.LOGIN_URL,l=a.OAUTH,u=a.USERNAME;j(t,l,(function(t){return n(5,r=t)})),j(t,u,(function(t){return n(0,o=t)}));return r&&function(){return st.apply(this,arguments)}().then((function(t){return i(void 0,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:localStorage.setItem("tcf:client_id",t.clientId),it(t.userId,!1).then((function(t){t&&u.set(t.displayName)}));case 2:case"end":return e.stop()}}),e)})))})),[o,c,l,u,function(){localStorage.clear(),window.location.reload()}]}var At=function(t){i(n,t);var e=c(n);function n(t){var r;return o(this,n),r=e.call(this),l(u(r),t,zt,_t,s,{}),r}return n}(a);function Rt(t){var e,n,r;return{c:function(){e=b("div"),n=y(t[1]),d(e,"class",r="column "+t[0]+" svelte-49dj2h"),q(e,"width",t[2]+"px"),d(e,"title",t[1])},m:function(t,r){h(t,e,r),m(e,n)},p:function(t,o){var i=f(o,1)[0];2&i&&x(n,t[1]),1&i&&r!==(r="column "+t[0]+" svelte-49dj2h")&&d(e,"class",r),4&i&&q(e,"width",t[2]+"px"),2&i&&d(e,"title",t[1])},i:$,o:$,d:function(t){t&&g(e)}}}function qt(t,e,n){var r=e.column,o=e.value,i=e.width;return t.$$set=function(t){"column"in t&&n(0,r=t.column),"value"in t&&n(1,o=t.value),"width"in t&&n(2,i=t.width)},[r,o,i]}var Ct=function(t){i(n,t);var e=c(n);function n(t){var r;return o(this,n),r=e.call(this),l(u(r),t,qt,Rt,s,{column:0,value:1,width:2}),r}return n}(a);function Et(t){var e,n,r,o,i,a,c,l,u,s;return{c:function(){e=b("div"),n=b("span"),r=y(t[0]),o=w(),i=b("div"),a=b("div"),c=p("svg"),l=p("path"),d(n,"class","svelte-1j9ten5"),d(l,"stroke-linecap","round"),d(l,"stroke-linejoin","round"),d(l,"stroke-width",2),d(l,"d","M19 14l-7 7m0 0l-7-7m7 7V3"),d(c,"class","arrow svelte-1j9ten5"),d(c,"viewBox","0 0 24 24"),d(c,"stroke","currentColor"),C(c,"rotate",t[2]),C(c,"active",t[3]),d(a,"class","sorting svelte-1j9ten5"),d(i,"class","buttons svelte-1j9ten5"),d(e,"class","header svelte-1j9ten5"),q(e,"width",t[1])},m:function(f,p){h(f,e,p),m(e,n),m(n,r),m(e,o),m(e,i),m(i,a),m(a,c),m(c,l),u||(s=[S(a,"click",t[7]),S(e,"mouseenter",t[4]),S(e,"mouseleave",t[4])],u=!0)},p:function(t,n){var o=f(n,1)[0];1&o&&x(r,t[0]),4&o&&C(c,"rotate",t[2]),8&o&&C(c,"active",t[3]),2&o&&q(e,"width",t[1])},i:$,o:$,d:function(t){t&&g(e),u=!1,E(s)}}}function Ht(e,n,r){var o,i,a,c;j(e,ot,(function(t){return r(6,o=t)})),i=a=c=!1;var l=n.title,u=n.width;return e.$$set=function(t){"title"in t&&r(0,l=t.title),"width"in t&&r(1,u=t.width)},e.$$.update=function(){97&e.$$.dirty&&r(3,c=o.field===l||i),64&e.$$.dirty&&r(2,a=o.order)},[l,u,a,c,function(){return r(5,i=!i)},i,o,function(){return function(e){var n=t(ot);ot.set({field:e,order:e===n.field?!n.order:n.order}),et.update((function(t){return Z(t)}))}(l)}]}var Tt=function(t){i(n,t);var e=c(n);function n(t){var r;return o(this,n),r=e.call(this),l(u(r),t,Ht,Et,s,{title:0,width:1}),r}return n}(a);function Dt(t){var e,n,r,o,i,a,c,l,u,s,p,v,$,j,k;return a=new Tt({props:{width:"302px",title:J.TITLE}}),l=new Tt({props:{width:"146px",title:J.AUTHOR}}),s=new Tt({props:{width:"144px",title:J.CATEGORY}}),v=new Tt({props:{width:"102px",title:J.VIEWS}}),j=new Tt({props:{width:"180px",title:J.DATE}}),{c:function(){e=b("header"),n=b("div"),r=b("span"),o=y(t[0]),i=w(),I(a.$$.fragment),c=w(),I(l.$$.fragment),u=w(),I(s.$$.fragment),p=w(),I(v.$$.fragment),$=w(),I(j.$$.fragment),d(r,"class","clips svelte-1a6cvuf"),d(n,"class","header"),q(n,"width","178px"),d(e,"class","svelte-1a6cvuf")},m:function(t,f){h(t,e,f),m(e,n),m(n,r),m(r,o),m(e,i),_(a,e,null),m(e,c),_(l,e,null),m(e,u),_(s,e,null),m(e,p),_(v,e,null),m(e,$),_(j,e,null),k=!0},p:function(t,e){var n=f(e,1)[0];(!k||1&n)&&x(o,t[0])},i:function(t){k||(z(a.$$.fragment,t),z(l.$$.fragment,t),z(s.$$.fragment,t),z(v.$$.fragment,t),z(j.$$.fragment,t),k=!0)},o:function(t){A(a.$$.fragment,t),A(l.$$.fragment,t),A(s.$$.fragment,t),A(v.$$.fragment,t),A(j.$$.fragment,t),k=!1},d:function(t){t&&g(e),R(a),R(l),R(s),R(v),R(j)}}}function Mt(t,e,n){var r,o;return j(t,et,(function(t){return n(1,r=t)})),t.$$.update=function(){2&t.$$.dirty&&n(0,o="Clips (".concat(r.length,")"))},[o,r]}var Yt=function(t){i(n,t);var e=c(n);function n(t){var r;return o(this,n),r=e.call(this),l(u(r),t,Mt,Dt,s,{}),r}return n}(a);function Pt(t){var e,n,r,o,i,a,c,l,u,s,v,y,x,j,k,O,I;return{c:function(){e=b("div"),n=b("div"),r=b("div"),o=b("a"),i=p("svg"),a=p("path"),l=w(),u=b("a"),s=p("svg"),v=p("path"),x=w(),j=b("img"),d(a,"d","M7.2,5.3L5.8,9v14.9h5.1v2.8h2.8l2.8-2.8h4.2l5.6-5.6v-13H7.2z M9,7.2h15.3v10.2l-3.3,3.3H16l-2.8,2.8v-2.8H9V7.2z M14.1,16.5H16v-5.6h-1.9V16.5z M19.2,16.5h1.9v-5.6h-1.9V16.5z"),d(i,"class","svelte-xbkpcr"),d(o,"target","_blank"),d(o,"href",c=t[0].url),d(o,"class","svelte-xbkpcr"),d(v,"d","M24,20v4H8v-4H5.3v4c0,1.5,1.2,2.7,2.7,2.7h16c1.5,0,2.7-1.2,2.7-2.7v-4H24z M22.7,14.7l-1.9-1.9l-3.5,3.4V5.3 h-2.7v10.9l-3.5-3.4l-1.9,1.9l6.7,6.7L22.7,14.7z"),d(s,"class","svelte-xbkpcr"),d(u,"target","_blank"),d(u,"href",y=t[0].download),d(u,"class","svelte-xbkpcr"),d(r,"class","buttons svelte-xbkpcr"),d(n,"class","layer svelte-xbkpcr"),C(n,"hover",t[1]),d(j,"alt",""),H(j.src,k=t[0].thumbnail)||d(j,"src",k),d(j,"class","svelte-xbkpcr"),C(j,"loaded",t[2]),d(e,"class","thumbnail svelte-xbkpcr")},m:function(c,f){h(c,e,f),m(e,n),m(n,r),m(r,o),m(o,i),m(i,a),m(r,l),m(r,u),m(u,s),m(s,v),m(e,x),m(e,j),O||(I=[S(n,"mouseenter",t[3]),S(n,"mouseleave",t[3]),S(j,"load",t[5])],O=!0)},p:function(t,e){var r=f(e,1)[0];1&r&&c!==(c=t[0].url)&&d(o,"href",c),1&r&&y!==(y=t[0].download)&&d(u,"href",y),2&r&&C(n,"hover",t[1]),1&r&&!H(j.src,k=t[0].thumbnail)&&d(j,"src",k),4&r&&C(j,"loaded",t[2])},i:$,o:$,d:function(t){t&&g(e),O=!1,E(I)}}}function Nt(t,e,n){var r,o=!1,i=!1,a=e.clip;return t.$$set=function(t){"clip"in t&&n(0,a=t.clip)},t.$$.update=function(){17&t.$$.dirty&&(a.thumbnail!==(null==r?void 0:r.thumbnail)&&n(2,i=!1),n(4,r=a))},[a,o,i,function(){return n(1,o=!o)},r,function(){return n(2,i=!0)}]}var Lt=function(t){i(n,t);var e=c(n);function n(t){var r;return o(this,n),r=e.call(this),l(u(r),t,Nt,Pt,s,{clip:0}),r}return n}(a);function Ut(t,e,n){var r=t.slice();return r[23]=e[n],r}var Bt=function(t){return{clip:16&t}},Vt=function(t){return{clip:t[23].data}};function Gt(t,e){var n,r,o,i=e[14].default,a=V(i,e,e[13],Vt),c=a||function(t){var e;return{c:function(){e=y("Missing template")},m:function(t,n){h(t,e,n)},d:function(t){t&&g(e)}}}();return{key:t,first:null,c:function(){n=b("div"),c&&c.c(),r=w(),d(n,"class","row svelte-127ck9p"),this.first=n},m:function(t,e){h(t,n,e),c&&c.m(n,null),m(n,r),o=!0},p:function(t,n){e=t,a&&a.p&&(!o||8208&n)&&T(a,i,e,e[13],o?M(i,e[13],n,Bt):D(e[13]),Vt)},i:function(t){o||(z(c,t),o=!0)},o:function(t){A(c,t),o=!1},d:function(t){t&&g(n),c&&c.d(t)}}}function Wt(t){for(var e,n,r,o,i,a,c=[],l=new Map,u=t[4],s=function(t){return t[23].index},p=0;p<u.length;p+=1){var v=Ut(t,u,p),y=s(v);l.set(y,c[p]=Gt(y,v))}return{c:function(){e=b("div"),n=b("div");for(var r=0;r<c.length;r+=1)c[r].c();d(n,"class","content svelte-127ck9p"),q(n,"padding-top",t[5]+"px"),q(n,"padding-bottom",t[6]+"px"),d(e,"class","viewport svelte-127ck9p"),q(e,"max-height",t[0]+"px"),Y((function(){return t[17].call(e)}))},m:function(l,u){h(l,e,u),m(e,n);for(var s=0;s<c.length;s+=1)c[s].m(n,null);t[15](n),t[16](e),r=P(e,t[17].bind(e)),o=!0,i||(a=S(e,"scroll",t[7]),i=!0)},p:function(t,r){var i=f(r,1)[0];8208&i&&(u=t[4],N(),c=L(c,i,s,1,t,u,l,n,G,Gt,null,Ut),U()),(!o||32&i)&&q(n,"padding-top",t[5]+"px"),(!o||64&i)&&q(n,"padding-bottom",t[6]+"px"),(!o||1&i)&&q(e,"max-height",t[0]+"px")},i:function(t){if(!o){for(var e=0;e<u.length;e+=1)z(c[e]);o=!0}},o:function(t){for(var e=0;e<c.length;e+=1)A(c[e]);o=!1},d:function(n){n&&g(e);for(var o=0;o<c.length;o+=1)c[o].d();t[15](null),t[16](null),r(),i=!1,a()}}}function Ft(t,e,n){var r,o,i,a,c,l,u=e.$$slots,s=void 0===u?{}:u,f=e.$$scope,p=e.items,d=e.itemHeight,h=void 0===d?void 0:d,m=e.maxHeight,g=void 0===m?h*p.length:m,b=e.start,y=void 0===b?0:b,w=e.end,x=void 0===w?0:w,$=[],j=0,k=0,S=0;function O(){return(O=v(regeneratorRuntime.mark((function t(e,i,a){var c,u,s,f,p,v;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=o.scrollTop,t.next=3,W();case 3:u=k-c,s=y;case 5:if(!(u<i&&s<e.length)){t.next=17;break}if(f=r[s-y]){t.next=12;break}return n(9,x=s+1),t.next=11,W();case 11:f=r[s-y];case 12:p=$[s]=a||f.offsetHeight,u+=p,s+=1,t.next=5;break;case 17:n(9,x=s),v=e.length-x,n(6,S=v*(l=(k+u)/x)),$.length=e.length;case 22:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function I(){return(I=v(regeneratorRuntime.mark((function t(){var e,i,a,c,u,s,f,v,d,m,g;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(e=o.scrollTop,i=y,a=0;a<r.length;a+=1)$[y+a]=h||r[a].offsetHeight;c=0,u=0;case 5:if(!(c<p.length)){t.next=15;break}if(s=$[c]||l,!(u+s>e)){t.next=11;break}return n(8,y=c),n(5,k=u),t.abrupt("break",15);case 11:u+=s,c+=1,t.next=5;break;case 15:if(!(c<p.length)){t.next=22;break}if(u+=$[c]||l,c+=1,!(u>e+j)){t.next=20;break}return t.abrupt("break",22);case 20:t.next=15;break;case 22:for(n(9,x=c),f=p.length-x,l=u/x;c<p.length;)$[c++]=l;if(n(6,S=f*l),!(y<i)){t.next=35;break}return t.next=30,W();case 30:for(v=0,d=0,m=y;m<i;m+=1)r[m-y]&&(v+=$[m],d+=h||r[m-y].offsetHeight);g=d-v,o.scrollTo(0,e+g);case 35:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return B((function(){r=i.getElementsByTagName("div"),n(12,c=!0)})),t.$$set=function(t){"items"in t&&n(10,p=t.items),"itemHeight"in t&&n(11,h=t.itemHeight),"maxHeight"in t&&n(0,g=t.maxHeight),"start"in t&&n(8,y=t.start),"end"in t&&n(9,x=t.end),"$$scope"in t&&n(13,f=t.$$scope)},t.$$.update=function(){1792&t.$$.dirty&&n(4,a=p.slice(y,x).map((function(t,e){return{index:e+y,data:t}}))),7170&t.$$.dirty&&c&&function(t,e,n){O.apply(this,arguments)}(p,j,h)},[g,j,o,i,a,k,S,function(){return I.apply(this,arguments)},y,x,p,h,c,f,s,function(t){F[t?"unshift":"push"]((function(){n(3,i=t)}))},function(t){F[t?"unshift":"push"]((function(){n(2,o=t)}))},function(){j=this.offsetHeight,n(1,j)}]}var Jt=function(t){i(n,t);var e=c(n);function n(t){var r;return o(this,n),r=e.call(this),l(u(r),t,Ft,Wt,s,{items:10,itemHeight:11,maxHeight:0,start:8,end:9}),r}return n}(a);function Kt(t){var e,n,r,o,i,a,c,l,u,s,f,p;return e=new Lt({props:{clip:t[1]}}),r=new Ct({props:{width:"290",column:"title",value:t[1].title}}),i=new Ct({props:{width:"135",column:"name",value:t[1].displayName}}),c=new Ct({props:{width:"130",column:"category",value:t[1].category}}),u=new Ct({props:{width:"80",column:"views",value:t[1].views.toString().replace(/\B(?=(\d{3})+(?!\d))/g," ")}}),f=new Ct({props:{width:"165",column:"date",value:O(t[1].createdAt).format("YYYY/MM/DD HH:mm:ss")}}),{c:function(){I(e.$$.fragment),n=w(),I(r.$$.fragment),o=w(),I(i.$$.fragment),a=w(),I(c.$$.fragment),l=w(),I(u.$$.fragment),s=w(),I(f.$$.fragment)},m:function(t,v){_(e,t,v),h(t,n,v),_(r,t,v),h(t,o,v),_(i,t,v),h(t,a,v),_(c,t,v),h(t,l,v),_(u,t,v),h(t,s,v),_(f,t,v),p=!0},p:function(t,n){var o={};2&n&&(o.clip=t[1]),e.$set(o);var a={};2&n&&(a.value=t[1].title),r.$set(a);var l={};2&n&&(l.value=t[1].displayName),i.$set(l);var s={};2&n&&(s.value=t[1].category),c.$set(s);var p={};2&n&&(p.value=t[1].views.toString().replace(/\B(?=(\d{3})+(?!\d))/g," ")),u.$set(p);var v={};2&n&&(v.value=O(t[1].createdAt).format("YYYY/MM/DD HH:mm:ss")),f.$set(v)},i:function(t){p||(z(e.$$.fragment,t),z(r.$$.fragment,t),z(i.$$.fragment,t),z(c.$$.fragment,t),z(u.$$.fragment,t),z(f.$$.fragment,t),p=!0)},o:function(t){A(e.$$.fragment,t),A(r.$$.fragment,t),A(i.$$.fragment,t),A(c.$$.fragment,t),A(u.$$.fragment,t),A(f.$$.fragment,t),p=!1},d:function(t){R(e,t),t&&g(n),R(r,t),t&&g(o),R(i,t),t&&g(a),R(c,t),t&&g(l),R(u,t),t&&g(s),R(f,t)}}}function Qt(t){var e,n,r,o,i;return n=new Yt({}),o=new Jt({props:{itemHeight:116,items:t[0],$$slots:{default:[Kt,function(t){return{1:t.clip}},function(t){return t.clip?2:0}]},$$scope:{ctx:t}}}),{c:function(){e=b("div"),I(n.$$.fragment),r=w(),I(o.$$.fragment),d(e,"class","clips svelte-1jsjb3d")},m:function(t,a){h(t,e,a),_(n,e,null),m(e,r),_(o,e,null),i=!0},p:function(t,e){var n=f(e,1)[0],r={};1&n&&(r.items=t[0]),6&n&&(r.$$scope={dirty:n,ctx:t}),o.$set(r)},i:function(t){i||(z(n.$$.fragment,t),z(o.$$.fragment,t),i=!0)},o:function(t){A(n.$$.fragment,t),A(o.$$.fragment,t),i=!1},d:function(t){t&&g(e),R(n),R(o)}}}function Xt(t,e,n){var r;return j(t,et,(function(t){return n(0,r=t)})),[r]}var Zt=function(t){i(n,t);var e=c(n);function n(t){var r;return o(this,n),r=e.call(this),l(u(r),t,Xt,Qt,s,{}),r}return n}(a);function te(t){var e,n;return e=new Zt({}),{c:function(){I(e.$$.fragment)},m:function(t,r){_(e,t,r),n=!0},i:function(t){n||(z(e.$$.fragment,t),n=!0)},o:function(t){A(e.$$.fragment,t),n=!1},d:function(t){R(e,t)}}}function ee(t){var e,n,r,o,i,a;n=new At({}),o=new St({});var c=t[0].length&&te();return{c:function(){e=b("div"),I(n.$$.fragment),r=w(),I(o.$$.fragment),i=w(),c&&c.c(),d(e,"class","container")},m:function(t,l){h(t,e,l),_(n,e,null),m(e,r),_(o,e,null),m(e,i),c&&c.m(e,null),a=!0},p:function(t,n){var r=f(n,1)[0];t[0].length?c?1&r&&z(c,1):((c=te()).c(),z(c,1),c.m(e,null)):c&&(N(),A(c,1,1,(function(){c=null})),U())},i:function(t){a||(z(n.$$.fragment,t),z(o.$$.fragment,t),z(c),a=!0)},o:function(t){A(n.$$.fragment,t),A(o.$$.fragment,t),A(c),a=!1},d:function(t){t&&g(e),R(n),R(o),c&&c.d()}}}function ne(t,e,n){var r;return j(t,et,(function(t){return n(0,r=t)})),[r]}new(function(t){i(n,t);var e=c(n);function n(t){var r;return o(this,n),r=e.call(this),l(u(r),t,ne,ee,s,{}),r}return n}(a))({target:document.body})}}}))}();
