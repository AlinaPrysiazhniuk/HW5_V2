"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[166],{722:function(e,i,a){a.d(i,{CE:function(){return l},CN:function(){return r},Df:function(){return c},TP:function(){return s},gH:function(){return d}});var t=a(669),n="https://api.themoviedb.org/3",o="19d2d0f24e837c8f3ad6ea805c1086b1",c=function(){return t.Z.get("".concat(n,"/trending/movie/day?api_key=").concat(o))},s=function(e){return t.Z.get("".concat(n,"/movie/").concat(e,"?api_key=").concat(o))},r=function(e){return t.Z.get("".concat(n,"/movie/").concat(e,"/credits?api_key=").concat(o))},l=function(e){return t.Z.get("".concat(n,"/movie/").concat(e,"/reviews?api_key=").concat(o))},d=function(e){return t.Z.get("".concat(n,"/search/movie?api_key=").concat(o,"&query=").concat(e))}},166:function(e,i,a){a.r(i),a.d(i,{default:function(){return D}});var t=a(439),n=a(722),o=a(791),c=a(689),s=a(87),r=a(913),l="MovieDaetails_movie__80fLn",d="MovieDaetails_container_movie__kjHXq",v="MovieDaetails_container_additional__uSRxS",m="MovieDaetails_img__oJxS9",u="MovieDaetails_goBack__TRFz1",_="MovieDaetails_movieDescription__EF4P6",h="MovieDaetails_movieTitle__rGAv5",f="MovieDaetails_movieText__yWQFq",x="MovieDaetails_movieOverview__3ESwZ",j="MovieDaetails_movieGenres__H2aL6",p="MovieDaetails_movieAdditional__HSznN",g="MovieDaetails_listAdditional__uZ2qV",w="MovieDaetails_itemAdditional__rJaGi",N=a(184),D=function(){var e,i,a,D,k=(0,o.useState)([]),M=(0,t.Z)(k,2),y=M[0],Z=M[1],b=(0,c.UO)().movieId,S=(0,c.TH)(),T=null!==(e=null===S||void 0===S||null===(i=S.state)||void 0===i?void 0:i.from)&&void 0!==e?e:"/";(0,o.useEffect)((function(){(0,n.TP)(b).then((function(e){var i=e.data;Z(i)})).catch((function(e){throw new Error("woops, something went wromg... Please, try agin later.")}))}),[b]);var A=y.title,C=y.overview,E=y.vote_average,G=y.genres,H=y.poster_path;return(0,N.jsxs)("section",{className:l,children:[(0,N.jsx)(s.rU,{to:T,className:u,children:"Go back"}),(0,N.jsxs)("div",{className:d,children:[(0,N.jsx)("img",{className:m,src:H?"https://image.tmdb.org/t/p/w500/".concat(H):r,alt:A}),(0,N.jsxs)("div",{className:_,children:[(0,N.jsx)("h1",{className:h,children:A}),(0,N.jsxs)("p",{className:f,children:["User Score: ",Math.round(10*E),"%"]}),(0,N.jsx)("h2",{className:x,children:"Overview"}),(0,N.jsx)("p",{className:f,children:C}),G&&(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)("h3",{className:j,children:"Genres"}),(0,N.jsx)("ul",{children:G.map((function(e){var i=e.id,a=e.name;return(0,N.jsx)("li",{children:(0,N.jsx)("p",{children:a})},i)}))})]})]})]}),(0,N.jsxs)("div",{className:v,children:[(0,N.jsx)("h3",{className:p,children:"Additional information"}),(0,N.jsxs)("ul",{className:g,children:[(0,N.jsx)("li",{children:(0,N.jsx)(s.rU,{to:"cast",state:{from:null===S||void 0===S||null===(a=S.state)||void 0===a?void 0:a.from},className:w,children:"Casts"})}),(0,N.jsx)("li",{children:(0,N.jsx)(s.rU,{to:"reviews",state:{from:null===S||void 0===S||null===(D=S.state)||void 0===D?void 0:D.from},className:w,children:"Reviews"})})]})]}),(0,N.jsx)(c.j3,{})]})}},913:function(e,i,a){e.exports=a.p+"static/media/no-image.9f5a9d33d3815bfc1c1c.jpeg"}}]);
//# sourceMappingURL=166.02f5d671.chunk.js.map