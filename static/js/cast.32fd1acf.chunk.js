"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[277],{247:function(n,t,e){e.r(t),e.d(t,{default:function(){return s}});var r=e(885),c=e(811),i=e(791),a=e(871),o=e(952),u=e(184);function s(){var n=(0,a.UO)().filmId,t=(0,i.useState)([]),e=(0,r.Z)(t,2),s=e[0],f=e[1];return(0,i.useEffect)((function(){o.M1(n).then((function(n){console.log(n.cast),f(n.cast)}))}),[n]),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(c.Dx,{children:"Cast"}),(0,u.jsx)(c.ds,{children:s.map((function(n){var t=n.id,e=n.profile_path,r=n.name,c=n.character;return(0,u.jsxs)("li",{children:[e?(0,u.jsx)("img",{src:"https://image.tmdb.org/t/p/w300".concat(e),alt:{name:r}}):(0,u.jsx)("img",{src:"../../images/blank-profile-picture-973461__340.webp",alt:"No poster",width:300}),(0,u.jsxs)("p",{children:["Character: ",c]}),(0,u.jsx)("p",{children:r})]},t)}))})]})}},811:function(n,t,e){e.d(t,{Dx:function(){return s},ds:function(){return f},PY:function(){return l},rf:function(){return d}});var r,c,i,a,o=e(168),u=e(751),s=u.ZP.h5(r||(r=(0,o.Z)(["\n  margin-bottom: 20px;\n  font-size: 22px;\n"]))),f=u.ZP.ul(c||(c=(0,o.Z)(["\n  display: grid;\n  max-width: calc(100vw - 48px);\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  grid-gap: 14px;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 0;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n"]))),l=u.ZP.ul(i||(i=(0,o.Z)([""]))),d=u.ZP.li(a||(a=(0,o.Z)(["\n  margin-bottom: 16px;\n  list-style-position: inside;\n  list-style: none;\n"])))},186:function(n,t,e){e.r(t),e.d(t,{default:function(){return s}});var r=e(885),c=e(811),i=e(791),a=e(871),o=e(952),u=e(184);function s(){var n=(0,a.UO)().filmId,t=(0,i.useState)([]),e=(0,r.Z)(t,2),s=e[0],f=e[1];return(0,i.useEffect)((function(){o.tx(n).then((function(n){console.log(n.results),f(n.results)}))}),[n]),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(c.Dx,{children:"Reviews"}),(0,u.jsx)(c.PY,{children:0!==s.lengs?s.map((function(n){var t=n.id,e=n.autor,r=n.content;return(0,u.jsxs)(c.rf,{children:[(0,u.jsxs)("p",{children:["Autor: ",e]}),(0,u.jsx)("p",{children:r})]},t)})):(0,u.jsx)("p",{children:"We hevent had reviews yet"})})]})}},952:function(n,t,e){e.d(t,{F2:function(){return f},Pg:function(){return l},M1:function(){return d},tx:function(){return p},Wf:function(){return h}});var r=e(861),c=e(757),i=e.n(c),a="ac56c60c34a47d94154ddc20710a1d7b",o="https://api.themoviedb.org/3";function u(){return s.apply(this,arguments)}function s(){return s=(0,r.Z)(i().mark((function n(){var t,e,r,c=arguments;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:"",e=c.length>1&&void 0!==c[1]?c[1]:{},n.next=4,fetch(t,e);case 4:if(!(r=n.sent).ok){n.next=11;break}return n.next=8,r.json();case 8:n.t0=n.sent,n.next=12;break;case 11:n.t0=Promise.reject(new Error("Not found"));case 12:return n.abrupt("return",n.t0);case 13:case"end":return n.stop()}}),n)}))),s.apply(this,arguments)}function f(){return u("".concat(o,"/trending/movie/day?api_key=").concat(a))}function l(n){return u("".concat(o,"/movie/").concat(n,"?api_key=").concat(a))}function d(n){return u("".concat(o,"/movie/").concat(n,"/credits?api_key=").concat(a))}function p(n){return u("".concat(o,"/movie/").concat(n,"/reviews?api_key=").concat(a,"&language=en-US&page=1"))}function h(n){return u("".concat(o,"/search/movie?query=").concat(n,"&api_key=").concat(a,"&include_adult=false"))}}}]);
//# sourceMappingURL=cast.32fd1acf.chunk.js.map