"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[152],{7152:function(e,n,r){r.r(n),r.d(n,{default:function(){return O}});var t,a,s,i,o=r(5861),c=r(9439),l=r(4687),u=r.n(l),d=r(2791),x=r(7689),p=r(7961),h=r.n(p),v=r(9841),f=r(168),b=r(1087),j=r(6444),m=(0,j.ZP)(b.OL)(t||(t=(0,f.Z)(["\ntext-decoration: none;\ncolor: #5252d4;\n\n&.active {\n    color: #eb1736;\n}\n"]))),g=j.ZP.div(a||(a=(0,f.Z)([""]))),w=j.ZP.img(s||(s=(0,f.Z)(["\nborder-radius: 4px;\nbox-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;\n"]))),k=(0,j.ZP)(b.OL)(i||(i=(0,f.Z)(["\ntext-decoration: none;\ncolor: #5252d4;\n\n&.active {\n    color: #eb1736;\n}\n"]))),Z=r(184),_=function(e){var n=e.item,r=e.link;return(0,Z.jsxs)(g,{children:[(0,Z.jsx)(w,{src:"https://image.tmdb.org/t/p/original/".concat(n.poster_path),alt:"Poster ".concat(n.title),width:"200px","min-height":"350px"}),(0,Z.jsx)("br",{}),(0,Z.jsx)(k,{to:r,children:"Back"}),(0,Z.jsxs)("div",{children:[(0,Z.jsxs)("h1",{children:[n.title," ",n.release_date.slice(0,4)]}),(0,Z.jsxs)("h2",{children:["User Score: ",Math.round(10*n.vote_average),"%"]}),(0,Z.jsx)("h3",{children:"Overview"}),(0,Z.jsx)("p",{children:n.overview}),(0,Z.jsx)("h3",{children:"Genres"}),(0,Z.jsx)("div",{children:n.genres.map((function(e){return(0,Z.jsx)("span",{children:e.name},e.id)}))})]})]})},O=function(){var e,n,r=(0,x.TH)(),t=(0,d.useRef)(null!==(e=null===(n=r.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/movies"),a=(0,d.useState)(!1),s=(0,c.Z)(a,2),i=s[0],l=s[1],p=(0,d.useState)(null),f=(0,c.Z)(p,2),b=f[0],j=f[1],g=(0,x.UO)().movieId;return(0,d.useEffect)((function(){return(0,o.Z)(u().mark((function e(){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new AbortController,e.prev=1,l(!0),e.next=5,(0,v.Z)("/3/movie/".concat(g),n);case 5:r=e.sent,j(r),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log("OOps! Error loading information. Please, try again!");case 12:return e.prev=12,l(!1),e.finish(12);case 15:return e.abrupt("return",(function(){return n.abort()}));case 17:case"end":return e.stop()}}),e,null,[[1,9,12,15]])})))}),[g]),(0,Z.jsxs)(Z.Fragment,{children:[i&&(0,Z.jsx)(h(),{color:"#eb1736"}),b&&(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(_,{item:b,link:t.current}),(0,Z.jsxs)("ul",{children:[(0,Z.jsx)("h3",{children:"Additional information"}),(0,Z.jsx)("li",{children:(0,Z.jsx)(m,{to:"cast",children:"Cast"})}),(0,Z.jsx)("li",{children:(0,Z.jsx)(m,{to:"reviews",children:"Reviews"})})]}),(0,Z.jsx)(d.Suspense,{fallback:(0,Z.jsx)(h(),{color:"#eb1736"}),children:(0,Z.jsx)(x.j3,{})})]})]})}},9841:function(e,n,r){var t=r(5861),a=r(4687),s=r.n(a),i=r(4569),o=r.n(i);o().defaults.baseURL="https://api.themoviedb.org";var c=function(){var e=(0,t.Z)(s().mark((function e(n,r,t){var a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o().get(n,{params:{api_key:"84bdbe2f4baecea0c1be28902afc6a5b",controller:r,query:t}});case 2:return a=e.sent,console.log("made request"),e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(n,r,t){return e.apply(this,arguments)}}();n.Z=c}}]);
//# sourceMappingURL=152.335e8708.chunk.js.map