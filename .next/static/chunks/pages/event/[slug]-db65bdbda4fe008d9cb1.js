_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[30],{"20a2":function(e,n,t){e.exports=t("nOHt")},KXUJ:function(e,n,t){"use strict";function r(e,n){return e.classList?!!n&&e.classList.contains(n):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+n+" ")}t.d(n,"a",(function(){return r}))},LY0y:function(e,n){(function(n){e.exports=function(){var e={880:function(e){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}}},t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={exports:{}},c=!0;try{e[n](i,i.exports,r),c=!1}finally{c&&delete t[n]}return i.exports}return r.ab=n+"/",r(880)}()}).call(this,"/")},"T/rR":function(e,n,t){"use strict";var r=t("RAs/"),i=t("hVfy"),c=t("TSYQ"),s=t.n(c),a=t("q1tI"),o=t.n(a),u=t("vUet"),d=o.a.forwardRef((function(e,n){var t=e.bsPrefix,c=e.variant,a=e.animation,d=e.size,l=e.children,f=e.as,j=void 0===f?"div":f,b=e.className,O=Object(i.a)(e,["bsPrefix","variant","animation","size","children","as","className"]),m=(t=Object(u.a)(t,"spinner"))+"-"+a;return o.a.createElement(j,Object(r.a)({ref:n},O,{className:s()(b,m,d&&m+"-"+d,c&&"text-"+c)}),l)}));d.displayName="Spinner",n.a=d},Zfxy:function(e,n,t){"use strict";t.d(n,"z",(function(){return r})),t.d(n,"A",(function(){return i})),t.d(n,"B",(function(){return c})),t.d(n,"o",(function(){return s})),t.d(n,"p",(function(){return a})),t.d(n,"q",(function(){return o})),t.d(n,"v",(function(){return u})),t.d(n,"w",(function(){return d})),t.d(n,"x",(function(){return l})),t.d(n,"r",(function(){return f})),t.d(n,"s",(function(){return j})),t.d(n,"t",(function(){return b})),t.d(n,"b",(function(){return O})),t.d(n,"c",(function(){return m})),t.d(n,"d",(function(){return p})),t.d(n,"u",(function(){return _})),t.d(n,"f",(function(){return v})),t.d(n,"h",(function(){return E})),t.d(n,"e",(function(){return S})),t.d(n,"k",(function(){return x})),t.d(n,"j",(function(){return h})),t.d(n,"g",(function(){return N})),t.d(n,"i",(function(){return T})),t.d(n,"y",(function(){return P})),t.d(n,"l",(function(){return I})),t.d(n,"m",(function(){return A})),t.d(n,"n",(function(){return U})),t.d(n,"a",(function(){return g}));var r="SIGN_UP",i="SIGN_UP_FAIL",c="SIGN_UP_SUCCESS",s="LOGIN",a="LOGIN_FAIL",o="LOGIN_SUCCESS",u="PROFILE_UPDATE",d="PROFILE_UPDATE_FAIL",l="PROFILE_UPDATE_SUCCESS",f="PASSWORD_UPDATE",j="PASSWORD_UPDATE_FAIL",b="PASSWORD_UPDATE_SUCCESS",O="DOCUMENT_UPDATE",m="DOCUMENT_UPDATE_FAIL",p="DOCUMENT_UPDATE_SUCCESS",_="PROFILE",v="GET_COMPANY_CATEGORIES",E="GET_DOCUMTE_CATEGORIES",S="GET_CATEGORY",x="GET_SUB_SERVICES",h="GET_STATES",N="GET_DISTRICTS",T="GET_MUNICIPALITIES",P="PROPOSAL_REQUEST",I="INVESTOR_SIGNUP",A="INVESTOR_SIGNUP_FAIL",U="INVESTOR_SIGNUP_SUCCESS",g="CLEAR_MESSAGES"},evke:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/event/[slug]",function(){return t("tZJa")}])},ntbh:function(e,n){(function(n){e.exports=function(){var e={149:function(e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"===typeof window&&(n=window)}e.exports=n}},t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={exports:{}},c=!0;try{e[n](i,i.exports,r),c=!1}finally{c&&delete t[n]}return i.exports}return r.ab=n+"/",r(149)}()}).call(this,"/")},tZJa:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return j}));var r=t("nKUr"),i=t("q1tI"),c=t("20a2"),s=t("TDWf"),a=(t("b0oO"),t("5Yp1"),t("YFqc")),o=t.n(a),u=t("LvDl"),d=(t("Aiso"),t("vDqi")),l=t.n(d),f=t("T/rR");function j(){var e=Object(c.useRouter)().query.slug,n=Object(i.useState)(),t=n[0],a=n[1],d=Object(i.useState)(!1),j=(d[0],d[1]);return Object(i.useEffect)((function(){l.a.get("https://benchmark.promotingnepal.com/api/events").then((function(n){var t=n.data;console.log("all",t);var r=t.find((function(n){return n.slug===e}));a(r),j(!0)}))}),[]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(s.a,{title:"".concat(null===t||void 0===t?void 0:t.title," - Benchmark Advisors"),description:null===t||void 0===t?void 0:t.description}),Object(r.jsx)("main",{className:"page",style:{backgroundImage:"url('/background/bg.png')",backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundAttachment:"fixed"},children:Object(u.isEmpty)(t)?Object(r.jsx)("div",{className:"d-flex justify-content-center py-5 ",children:Object(r.jsx)(f.a,{animation:"border",role:"status",children:Object(r.jsx)("span",{className:"visually-hidden"})})}):Object(r.jsx)("section",{className:"eventDetails py-5",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsx)("div",{className:"row",children:Object(r.jsx)("div",{className:"col-sm-8 offset-sm-2",children:Object(r.jsxs)("div",{className:"single",children:[Object(r.jsx)(o.a,{href:"/",children:Object(r.jsxs)("a",{className:" font_bold f14",children:[Object(r.jsx)("i",{className:"las la-arrow-left"})," Back to Home"]})}),Object(r.jsx)("h3",{className:"title my-4 font_p",children:null===t||void 0===t?void 0:t.title}),Object(r.jsx)("div",{className:"metas my-3",children:Object(r.jsxs)("div",{className:"meta bg_p_dim",children:[Object(r.jsx)("i",{class:"lar la-calendar"})," ",null===t||void 0===t?void 0:t.event_date]})}),Object(r.jsx)("div",{className:"imagewrapper ",children:Object(r.jsx)("img",{className:"img-fluid ",src:null===t||void 0===t?void 0:t.imagepath,style:{width:"100%"}})}),Object(r.jsxs)("div",{className:"textwrapper bg_white p-4 ",children:[Object(r.jsx)("div",{className:"",children:Object(r.jsx)("strong",{children:"Event Description"})}),Object(r.jsx)("p",{className:"text-muted my-3 f14",children:null===t||void 0===t?void 0:t.description}),Object(r.jsx)("div",{className:"metas my-3",children:Object(r.jsxs)("div",{className:"meta bg_p f14 text-white",children:["Event effecthappening at ",null===t||void 0===t?void 0:t.event_date]})})]})]})})})})})})]})}}},[["evke",0,1,8,2,3,4,5,6,9,11,14]]]);