_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[43],{LY0y:function(e,t){(function(t){e.exports=function(){var e={880:function(e){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}}},n={};function a(t){if(n[t])return n[t].exports;var r=n[t]={exports:{}},c=!0;try{e[t](r,r.exports,a),c=!1}finally{c&&delete n[t]}return r.exports}return a.ab=t+"/",a(880)}()}).call(this,"/")},O2ls:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return f}));var a=n("cpVT"),r=n("nKUr"),c=n("q1tI"),o=n("/MKj"),s=n("NKCw"),i=n("iuBY"),l=n("20a2"),u=n("LvDl"),p=n("tbn6");function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function f(){var e,t=Object(p.useToasts)().addToast,n=Object(o.c)((function(e){return e.auth})),d=n.user,f=n.errorMessage;console.log("user",d);var b=Object(s.e)(),m=b.register,h=b.handleSubmit,O=(b.reset,Object(o.b)()),y=Object(l.useRouter)(),g=Object(c.useState)(!1),x=g[0],v=g[1];return Object(c.useEffect)((function(){Object(u.isEmpty)(null===d||void 0===d?void 0:d.access_token)||y.push("/startup")}),[d]),Object(c.useEffect)((function(){f&&t(f,{appearance:"error"})}),[O,f]),Object(r.jsx)("main",(e={className:"page",style:{backgroundImage:"url('/background/bg.png')",backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundAttachment:"fixed"}},Object(a.a)(e,"className","py-5"),Object(a.a)(e,"children",Object(r.jsx)("section",{className:"loginarea",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"row",children:[Object(r.jsx)("div",{className:"col-sm-6 d-flex align-items-center",children:Object(r.jsx)("form",{onSubmit:h((function(e){O(Object(i.c)(e))})),className:"w-100",children:Object(r.jsxs)("div",{className:"formwrapper",children:[Object(r.jsx)("div",{className:"row",children:Object(r.jsxs)("div",{className:"col-sm-12",children:[Object(r.jsxs)("div",{className:"titlewrapper",children:[Object(r.jsx)("h3",{className:"title font_p",children:"Login"}),Object(r.jsx)("p",{className:"text-muted small",children:"Provide us the startup login detals"})]}),Object(r.jsx)("hr",{})]})}),Object(r.jsx)("div",{className:"row",children:Object(r.jsx)("div",{className:"col-sm-12",children:Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("label",{htmlFor:"",className:"small text-muted",children:"Enter Your Email"}),Object(r.jsx)("input",j(j({},m("email")),{},{type:"email",className:"form-control",placeholder:"Your Email"}))]})})}),Object(r.jsx)("div",{className:"row",children:Object(r.jsx)("div",{className:"col-sm-12",children:Object(r.jsxs)("div",{className:"form-group ",children:[Object(r.jsx)("label",{htmlFor:"",className:"small text-muted",children:"Enter Password"}),Object(r.jsxs)("div",{className:"passwordWrapper",children:[Object(r.jsx)("input",j(j({},m("password")),{},{className:"form-control",placeholder:"Your Password",type:x?"text":"password"})),Object(r.jsx)("i",{class:x?"las la-eye-slash toggleEye":"las la-eye toggleEye",onClick:function(){return v((function(e){return!e}))}})]})]})})}),Object(r.jsx)("div",{className:"row",children:Object(r.jsx)("div",{className:"col-sm-12 d-flex justify-content-between",children:Object(r.jsx)("input",{type:"Submit",defaultValue:"Submit",className:"btn btn_p"})})})]})})}),Object(r.jsx)("div",{className:"col-sm-6 d-flex align-items-center",children:Object(r.jsx)("div",{className:"rightbarContent",children:Object(r.jsx)("div",{className:"imagewrapper",children:Object(r.jsx)("img",{src:"images/joinbenchmark.png",className:"img-fluid",alt:""})})})})]})})})),e))}},iuBY:function(e,t,n){"use strict";n.d(t,"d",(function(){return o})),n.d(t,"c",(function(){return s})),n.d(t,"b",(function(){return i})),n.d(t,"f",(function(){return l})),n.d(t,"e",(function(){return u})),n.d(t,"a",(function(){return p}));var a=n("vDqi"),r=n.n(a),c=n("Zfxy"),o=function(e){return function(t){t({type:c.z}),e.files=[];var n=new FormData;for(var a in e)n.append(a,e[a]);r.a.post("/api/startup/signup/",n,{headers:{"content-type":"multipart/form-data"}}).then((function(e){t({type:c.B,payload:e.data})})).catch((function(e){t({type:c.A,payload:e.response.data})}))}},s=function(e){return function(t){t({type:c.o});var n=new FormData;for(var a in e)n.append(a,e[a]);r.a.post("/api/startup/login",n).then((function(e){t({type:c.q,payload:e.data})})).catch((function(e){t({type:c.p,payload:e.response.data})}))}},i=function(){return function(e){var t=localStorage.getItem("token"),n={headers:{"Content-Type":"application/json",Authorization:"Brearer ".concat(t)}};try{r.a.get("/api/startup/profile",n).then((function(t){e({type:c.u,payload:t.data})}))}catch(a){console.log(a)}}},l=function(e){return function(t){t({type:c.v});var n=localStorage.getItem("token"),a={headers:{"Content-Type":"application/json",Authorization:"Brearer ".concat(n)}};r.a.post("/api/startup/update-profile",e,a).then((function(e){t({type:c.x,payload:e.data})})).catch((function(e){t({type:c.w,payload:e.response.data})}))}},u=function(e,t){return function(n){n({type:c.r});var a=localStorage.getItem("token"),o={headers:{"Content-Type":"application/json",Authorization:"Brearer ".concat(a)}};r.a.post("/api/".concat(t,"/update-password"),e,o).then((function(e){n({type:c.t,payload:e.data})})).catch((function(e){n({type:c.s,payload:e.response.data})}))}},p=function(){return function(e){e({type:c.a})}}},u6Hu:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return n("O2ls")}])}},[["u6Hu",0,1,8,2,3,6,7,10,12]]]);