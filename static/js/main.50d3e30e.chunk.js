(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{10:function(e,t,n){e.exports={Overlay:"Modal_Overlay__3pG4i",Modal:"Modal_Modal__n3X6z"}},11:function(e,t,n){e.exports={ImageGalleryItem__container:"ImageGalleryItem_ImageGalleryItem__container__13NXn",ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__3tVLe"}},12:function(e,t,n){e.exports={More__button:"Button_More__button__ucsmJ"}},15:function(e,t,n){e.exports={ImageGallery:"ImageGallery_ImageGallery__36HYM"}},23:function(e,t,n){},25:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(5),o=n.n(c),s=(n(23),n(8)),u=n(3),i=n(7),l=n.n(i),b=n(1);var j=function(e){var t=e.onQuerySubmit,n=Object(a.useState)(""),r=Object(u.a)(n,2),c=r[0],o=r[1],s=Object(a.useState)(!0),i=Object(u.a)(s,2),j=i[0],m=i[1];return Object(b.jsx)("header",{className:l.a.Searchbar,children:Object(b.jsxs)("form",{className:"SearchForm",onSubmit:function(e){e.preventDefault(),0!==c.trim().length&&t(c.trim()),m(!0)},children:[j?Object(b.jsx)("button",{type:"submit",disabled:!0,className:l.a.SearchForm__button_disabled,children:Object(b.jsx)("span",{children:"Search"})}):Object(b.jsx)("button",{type:"submit",className:l.a.SearchForm__button,children:Object(b.jsx)("span",{children:"Search"})}),Object(b.jsx)("input",{className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:c,onChange:function(e){o(e.currentTarget.value),m(!1)}})]})})},m=n(12),h=n.n(m);var d=function(e){var t=e.onGetMore;return Object(b.jsx)("button",{type:"button",className:h.a.More__button,onClick:t,children:"Load more"})},O=n(10),f=n.n(O),_=document.querySelector("#modal-root");function g(e){var t=e.onClose,n=e.src,r=e.alt;Object(a.useEffect)((function(){return window.addEventListener("keydown",o),function(){return window.removeEventListener("keydown",o)}}));var o=function(e){"Escape"===e.code&&t()};return Object(c.createPortal)(Object(b.jsx)("div",{className:f.a.Overlay,onClick:function(e){e.currentTarget===e.target&&t()},children:Object(b.jsx)("div",{className:f.a.Modal,children:Object(b.jsx)("img",{src:n,alt:r})})}),_)}var p=n(13),v=n(14),y=n(18),S=n(17),x=n(15),I=n.n(x),G=function(e){Object(y.a)(n,e);var t=Object(S.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(v.a)(n,[{key:"componentDidUpdate",value:function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}},{key:"render",value:function(){return Object(b.jsx)("ul",{className:I.a.ImageGallery,children:this.props.children})}}]),n}(a.Component),k=n(11),w=n.n(k),N=function(e){e.id;var t=e.alt,n=e.src,a=e.url,r=e.onClick;return Object(b.jsx)("li",{className:w.a.ImageGalleryItem__container,children:Object(b.jsx)("img",{src:n,alt:t,url:a,onClick:r,className:w.a.ImageGalleryItem})})},C="https://pixabay.com/api/",F="key=21933433-c49aed7af732e0bc1136ba9bb",M="image_type=photo&orientation=horizontal";var E={fetchImages:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return fetch("".concat(C,"?q=").concat(e,"&page=").concat(t,"&").concat(F,"&").concat(M,"&per_page=12")).then((function(e){return e.ok?e.json():Promise.reject(new Error("Bad request!!! No response from server"))}))}},L=(n(25),n(16)),T=n.n(L);var B=function(){var e=Object(a.useState)(""),t=Object(u.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(1),o=Object(u.a)(c,2),i=o[0],l=o[1],m=Object(a.useState)(!1),h=Object(u.a)(m,2),O=h[0],f=h[1],_=Object(a.useState)(!1),p=Object(u.a)(_,2),v=p[0],y=p[1],S=Object(a.useState)(""),x=Object(u.a)(S,2),I=x[0],k=x[1],w=Object(a.useState)(""),C=Object(u.a)(w,2),F=C[0],M=C[1],L=Object(a.useState)([]),B=Object(u.a)(L,2),q=B[0],P=B[1],z=Object(a.useState)([]),A=Object(u.a)(z,2),D=A[0],J=A[1],R=Object(a.useState)(null),U=Object(u.a)(R,2),Y=U[0],H=U[1];Object(a.useEffect)((function(){""!==n&&Q()}),[n]);var Q=function(){y(!0),E.fetchImages(n,i).then((function(e){var t=e.hits;P(Object(s.a)(t)),J((function(e){return[].concat(Object(s.a)(e),Object(s.a)(t))})),l((function(e){return e+1})),t.length<1&&H("No more images. Try another querry!!!")})).catch((function(e){return H((function(t){return"".concat(t," : ").concat(e.message)}))})).finally((function(){return y(!1)}))},X=function(){f((function(e){return!e}))},V=function(e){X(),k(e.currentTarget.getAttribute("url")),M(e.currentTarget.getAttribute("alt"))},K=!v&&!(q.length<12);return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(j,{onQuerySubmit:function(e){r(e),J([]),l(1),H(null)}}),Y&&Object(b.jsxs)("p",{style:{color:"red",border:"1px solid red",borderRadius:"3px",fontSize:"16px"},children:["Error!!! : ",Y]}),Object(b.jsx)(G,{children:D.map((function(e){var t=e.id,n=e.tags,a=e.webformatURL,r=e.largeImageURL;return Object(b.jsx)(N,{alt:n,src:a,url:r,onClick:V},t)}))}),v&&Object(b.jsx)(T.a,{type:"Bars",color:"#237bb6",height:40,width:60}),K&&Object(b.jsx)(d,{onGetMore:Q}),O&&Object(b.jsx)(g,{onClose:X,src:I,alt:F})]})},q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,47)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),a(e),r(e),c(e),o(e)}))};o.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(B,{})}),document.getElementById("root")),q()},7:function(e,t,n){e.exports={Searchbar:"Searchbar_Searchbar__1BYme",SearchForm__button:"Searchbar_SearchForm__button__29GY2",SearchForm__button_disabled:"Searchbar_SearchForm__button_disabled__3orbs"}}},[[46,1,2]]]);
//# sourceMappingURL=main.50d3e30e.chunk.js.map