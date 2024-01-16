"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[91],{8091:function(n,e,r){r.r(e),r.d(e,{default:function(){return L}});var t,o,a,i,s=r(5861),d=r(9439),c=r(4687),l=r.n(c),p=r(2791),x=r(7689),g=r(9688),u=r(168),h=r(6114),f=h.styled.div(t||(t=(0,u.Z)(["\n  display: flex;\n  gap: 20px;\n  width: 95vw;\n  margin: 0 auto;\n  position: relative;\n\n  h1 {\n    margin: 0;\n    padding: 0;\n  }\n  p {\n    padding: 5px 10px;\n    width: fit-content;\n    text-align: justify;\n    transition: 0.3s ease-in-out;\n  }\n  #parallax-container {\n    height: fit-content;\n    padding: 0;\n    img {\n      top: 100px;\n      background-color: rgba(255, 165, 0, 0.2);\n      border: 1px solid orange;\n      border-radius: 16px;\n      box-shadow: 0 0 10px rgba(255, 165, 0, 0.5);\n      transition: transform 0.9s ease-out; /* \u0410\u043d\u0438\u043c\u0430\u0446\u0438\u044f \u043f\u0435\u0440\u0435\u0445\u043e\u0434\u0430 */\n\n      &:hover {\n        box-shadow: 0 0 100px rgba(255, 165, 0, 0.8);\n      }\n    }\n  }\n  .rating {\n    width: 160px;\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    padding: 2px 5px;\n    font-size: 16px;\n    font-weight: 500;\n    span {\n      font-size: 24px;\n      font-weight: 500;\n    }\n  }\n  .info {\n    padding: 10px;\n    background-color: rgba(255, 255, 255, 0.4);\n    backdrop-filter: blur(5px);\n    border-radius: 16px;\n  }\n\n  h2 {\n    span {\n      font-size: 16px;\n      font-weight: 500;\n      padding: 5px 10px;\n      text-transform: uppercase;\n    }\n  }\n  @media only screen and (max-width: 768px) {\n    flex-direction: column;\n    img {\n      width: 100%;\n      position: static;\n    }\n  }\n"]))),v=h.styled.ul(o||(o=(0,u.Z)(["\n  list-style: none;\n  display: flex;\n  flex-direction: row;\n  gap: 20px;\n  padding: 0;\n  font-size: 20px;\n  font-weight: 500;\n  margin-top: 30px;\n\n  li a {\n    text-decoration: none;\n    color: black;\n    background-color: rgba(255, 255, 255, 0.7);\n    backdrop-filter: blur(5px);\n    border-radius: 5px;\n    border: 1px solid gray;\n    box-shadow: 0px 5px 5px #949484;\n    padding: 5px 10px;\n    transition: 0.3s ease-in-out;\n    &:hover {\n      transform: scale(1.1);\n      transition: 0.3s ease-in-out;\n      background-color: rgba(255, 165, 0, 0.8);\n      border: 1px solid orange;\n      box-shadow: 0px 5px 5px orange;\n      color: white;\n    }\n    &.active {\n      background-color: rgba(255, 165, 0, 0.2);\n      border: 1px solid orange;\n      box-shadow: 0px 5px 5px orange;\n      color: orange;\n    }\n  }\n"]))),b=r(1087),m=r(5081),w=r(1413),j=function(n){var e=n.children,r=(0,p.useState)({x:0,y:0}),t=(0,d.Z)(r,2),o=t[0],a=t[1],i=function(n){a({x:n.clientX,y:n.clientY})},s=function(){a({x:0,y:0})};return(0,p.useEffect)((function(){var n=document.getElementById("parallax-container");return n.addEventListener("mousemove",i),n.addEventListener("mouseleave",s),function(){n.removeEventListener("mousemove",i),n.removeEventListener("mouseleave",s)}}),[]),p.cloneElement(e,{style:(0,w.Z)((0,w.Z)({},e.props.style),{},{transform:"perspective(1000px) rotateX(".concat(o.y/window.innerHeight*-10,"deg) rotateY(").concat(o.x/window.innerWidth*-5,"deg)")})})},y=r(184),k=function(n){var e=n.details;return(0,y.jsxs)(f,{children:[(0,y.jsx)(j,{children:(0,y.jsxs)("div",{id:"parallax-container",children:[e.poster_path&&(0,y.jsx)("img",{src:"".concat(g.Mt).concat(g.vf).concat(e.poster_path),alt:e.name}),!e.poster_path&&(0,y.jsx)("img",{src:m,alt:e.name,width:500})]})}),(0,y.jsxs)("div",{children:[(0,y.jsxs)("div",{className:"info",children:[(0,y.jsxs)("h1",{children:[e.title," (",e.release_date.split("-")[0],")"]}),(0,y.jsxs)("p",{className:"rating",children:["User's rating: ",(0,y.jsxs)("span",{children:[Math.round(10*e.vote_average),"%"]})]}),(0,y.jsx)("h2",{children:"Overview:"}),(0,y.jsx)("p",{children:e.overview}),(0,y.jsxs)("h2",{children:["Genres:"," ",(0,y.jsx)("span",{children:e.genres.map((function(n){return n.name})).join(", ")})]})]}),(0,y.jsxs)("div",{children:[(0,y.jsxs)(v,{children:[(0,y.jsx)("li",{children:(0,y.jsx)(b.rU,{to:"cast",children:"Cast"})}),(0,y.jsx)("li",{children:(0,y.jsx)(b.rU,{to:"reviews",children:"Reviews"})}),(0,y.jsx)("li",{children:(0,y.jsx)(b.rU,{to:"trailer",children:"Trailer"})})]}),(0,y.jsx)(p.Suspense,{fallback:(0,y.jsx)("div",{children:"Loading..."}),children:(0,y.jsx)(x.j3,{})})]})]})]})},_=r(7692),Z=(0,h.styled)(b.rU)(a||(a=(0,u.Z)(["\n  border: 2px solid lightgray;\n  padding: 4px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  width: 120px;\n  margin-bottom: 16px;\n  text-decoration: none;\n  border-radius: 5px;\n  color: black;\n  background-color: rgba(255, 255, 255, 0.8);\n  backdrop-filter: blur(5px);\n  box-shadow: 0px 5px 5px #949484;\n  transition: 0.3s;\n  &:hover {\n    transform: scale(1.1);\n    transition: 0.3s;\n    background-color: rgba(255, 165, 0, 0.8);\n    border: 2px solid orange;\n    box-shadow: 0px 5px 5px orange;\n    color: white;\n  }\n"]))),E=h.styled.div(i||(i=(0,u.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0 auto;\n  padding: 20px 0;\n"]))),U=function(n){var e=n.to;return(0,y.jsx)(E,{children:(0,y.jsxs)(Z,{to:e,children:[(0,y.jsx)(_.YiX,{size:"24"}),"Go back"]})})},z=r(8174),L=function(){var n,e,r=(0,x.UO)().movieId,t=(0,p.useState)(null),o=(0,d.Z)(t,2),a=o[0],i=o[1],c=(0,x.TH)(),u=(0,p.useRef)(null!==(n=null===(e=c.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/"),h="original/".concat(null===a||void 0===a?void 0:a.backdrop_path);return(0,p.useEffect)((function(){var n=new AbortController,e=function(){var n=(0,s.Z)(l().mark((function n(e,r){var t;return l().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,g.TP)(e,r);case 3:t=n.sent,i(t.data),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),"canceled"!==n.t0.message&&z.Am.error(n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e,r){return n.apply(this,arguments)}}();return e(r,n),function(){n.abort()}}),[r]),(0,y.jsx)("main",{style:{background:"url(".concat(g.Mt).concat(h,") center/cover no-repeat, linear-gradient(24deg, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)"),margin:"0",padding:"0",height:"94vh",minWidth:"95vw",overflow:"auto"},children:a&&(0,y.jsxs)("div",{children:[(0,y.jsx)(U,{to:u.current}),(0,y.jsx)(k,{details:a})]})})}},5081:function(n,e,r){n.exports=r.p+"static/media/No-Image-Placeholder.svg.75e282699f88e21437ef.png"}}]);
//# sourceMappingURL=91.78a537b1.chunk.js.map