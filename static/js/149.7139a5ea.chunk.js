"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[149],{6368:function(n,r,t){var e=t(7689),a=t(1087),c=t(184);r.Z=function(n){var r=n.movies,t=(0,e.TH)();return(0,c.jsx)("ul",{children:r&&r.map((function(n){return(0,c.jsx)("li",{children:(0,c.jsx)(a.rU,{to:"/movies/".concat(n.id),state:{from:t},children:n.title})},n.id)}))})}},149:function(n,r,t){t.r(r),t.d(r,{default:function(){return g}});var e=t(5861),a=t(9439),c=t(7757),u=t.n(c),i=t(2029),s=t(2791),o=t(1087),f=t(8174),p=t(6368),l=t(5705),h=t(6727),v=t(184),m=(0,h.Ry)({searchString:(0,h.Z_)().required()}),d=function(n){var r=n.onSubmit;return(0,v.jsx)(l.J9,{initialValues:{searchString:""},onSubmit:function(n,t){r(n.searchString.trim())},validationSchema:m,children:(0,v.jsxs)(l.l0,{children:[(0,v.jsx)(l.gN,{type:"text",name:"searchString"}),(0,v.jsx)("button",{type:"submit",children:"Search"})]})})},g=function(){var n=(0,s.useState)(),r=(0,a.Z)(n,2),t=r[0],c=r[1],l=(0,o.lr)(),h=(0,a.Z)(l,2),m=h[0],g=h[1];return(0,s.useEffect)((function(){var n=new AbortController,r=m.get("search");if(r){var t=function(){var n=(0,e.Z)(u().mark((function n(r,t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,i.z1)(r,t);case 3:e=n.sent,c(e.data.results),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),"canceled"!==n.t0.message&&f.Am.error(n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(r,t){return n.apply(this,arguments)}}();return t(r,n),function(){n.abort()}}}),[m]),(0,v.jsxs)("main",{children:[(0,v.jsx)(d,{onSubmit:function(n){g(""!==n?{search:n}:{})}}),t&&(0,v.jsx)(p.Z,{movies:t})]})}},2029:function(n,r,t){t.d(r,{Hg:function(){return v},Mt:function(){return s},TP:function(){return d},Xp:function(){return p},mu:function(){return f},tx:function(){return w},vf:function(){return o},wv:function(){return l},z1:function(){return m},zv:function(){return g}});var e=t(1413),a=t(5861),c=t(7757),u=t.n(c),i=t(5294),s="http://image.tmdb.org/t/p/",o="w500",f="w92";i.Z.defaults.baseURL="https://api.themoviedb.org/3";var p="https://via.placeholder.com/500",l="https://via.placeholder.com/92",h={api_key:"275d01b8b22dae96d546b5217250e569"},v=function(){var n=(0,a.Z)(u().mark((function n(r){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=new URLSearchParams(h),n.next=3,i.Z.get("/trending/movie/day?".concat(t),{signal:r.signal});case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),m=function(){var n=(0,a.Z)(u().mark((function n(r,t){var a,c;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a=(0,e.Z)((0,e.Z)({},h),{},{query:r}),c=new URLSearchParams(a),n.next=4,i.Z.get("/search/movie?".concat(c),{signal:t.signal});case 4:return n.abrupt("return",n.sent);case 5:case"end":return n.stop()}}),n)})));return function(r,t){return n.apply(this,arguments)}}(),d=function(){var n=(0,a.Z)(u().mark((function n(r,t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=new URLSearchParams(h),n.next=3,i.Z.get("/movie/".concat(r,"?").concat(e),{signal:t.signal});case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)})));return function(r,t){return n.apply(this,arguments)}}(),g=function(){var n=(0,a.Z)(u().mark((function n(r,t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=new URLSearchParams(h),n.next=3,i.Z.get("/movie/".concat(r,"/credits?").concat(e),{signal:t.signal});case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)})));return function(r,t){return n.apply(this,arguments)}}(),w=function(){var n=(0,a.Z)(u().mark((function n(r,t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=new URLSearchParams(h),n.next=3,i.Z.get("/movie/".concat(r,"/reviews?").concat(e),{signal:t.signal});case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)})));return function(r,t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=149.7139a5ea.chunk.js.map