"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[415],{6368:function(n,r,t){var e=t(7689),a=t(1087),u=t(184);r.Z=function(n){var r=n.movies,t=(0,e.TH)();return(0,u.jsx)("ul",{children:r&&r.map((function(n){return(0,u.jsx)("li",{children:(0,u.jsx)(a.rU,{to:"/movies/".concat(n.id),state:{from:t},children:n.title})},n.id)}))})}},5415:function(n,r,t){t.r(r);var e=t(5861),a=t(9439),u=t(7757),c=t.n(u),s=t(2029),i=t(2791),o=t(8174),f=t(6368),p=t(184);r.default=function(){var n=(0,i.useState)([]),r=(0,a.Z)(n,2),t=r[0],u=r[1];return(0,i.useEffect)((function(){var n=new AbortController,r=function(){var n=(0,e.Z)(c().mark((function n(r){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,s.Hg)(r);case 3:t=n.sent,u(t.data.results),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),"canceled"!==n.t0.message&&o.Am.error(n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(r){return n.apply(this,arguments)}}();return r(n),function(){n.abort()}}),[]),(0,p.jsx)("main",{children:(0,p.jsx)(f.Z,{movies:t})})}},2029:function(n,r,t){t.d(r,{Hg:function(){return l},Mt:function(){return i},TP:function(){return h},h2:function(){return p},mu:function(){return f},tx:function(){return g},vf:function(){return o},z1:function(){return m},zv:function(){return d}});var e=t(1413),a=t(5861),u=t(7757),c=t.n(u),s=t(5294),i="http://image.tmdb.org/t/p/",o="w500",f="w92";s.Z.defaults.baseURL="https://api.themoviedb.org/3";var p="../Images/6689609.jpg",v={api_key:"275d01b8b22dae96d546b5217250e569"},l=function(){var n=(0,a.Z)(c().mark((function n(r){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=new URLSearchParams(v),n.next=3,s.Z.get("/trending/movie/day?".concat(t),{signal:r.signal});case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),m=function(){var n=(0,a.Z)(c().mark((function n(r,t){var a,u;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a=(0,e.Z)((0,e.Z)({},v),{},{query:r}),u=new URLSearchParams(a),n.next=4,s.Z.get("/search/movie?".concat(u),{signal:t.signal});case 4:return n.abrupt("return",n.sent);case 5:case"end":return n.stop()}}),n)})));return function(r,t){return n.apply(this,arguments)}}(),h=function(){var n=(0,a.Z)(c().mark((function n(r,t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=new URLSearchParams(v),n.next=3,s.Z.get("/movie/".concat(r,"?").concat(e),{signal:t.signal});case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)})));return function(r,t){return n.apply(this,arguments)}}(),d=function(){var n=(0,a.Z)(c().mark((function n(r,t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=new URLSearchParams(v),n.next=3,s.Z.get("/movie/".concat(r,"/credits?").concat(e),{signal:t.signal});case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)})));return function(r,t){return n.apply(this,arguments)}}(),g=function(){var n=(0,a.Z)(c().mark((function n(r,t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=new URLSearchParams(v),n.next=3,s.Z.get("/movie/".concat(r,"/reviews?").concat(e),{signal:t.signal});case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)})));return function(r,t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=415.ad933433.chunk.js.map