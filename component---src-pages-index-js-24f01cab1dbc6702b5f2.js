"use strict";(self.webpackChunkblackhole_eats=self.webpackChunkblackhole_eats||[]).push([[678,220],{1672:function(e,t,a){a.d(t,{$:function(){return V}});var r=a(7294),n=a(3366),o=a(7462),i=a(5505),s=a(9408),l=a(1158),c=a(2042),d=a(240),m=a(2194);function u(e){return(0,d.Z)("MuiCardMedia",e)}(0,m.Z)("MuiCardMedia",["root","media","img"]);var p=a(5893),f=["children","className","component","image","src","style"],v=(0,c.ZP)("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState,r=a.isMediaComponent,n=a.isImageComponent;return[t.root,r&&t.media,n&&t.img]}})((function(e){var t=e.ownerState;return(0,o.Z)({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},t.isMediaComponent&&{width:"100%"},t.isImageComponent&&{objectFit:"cover"})})),h=["video","audio","picture","iframe","img"],g=["picture","img"],y=r.forwardRef((function(e,t){var a=(0,l.Z)({props:e,name:"MuiCardMedia"}),r=a.children,c=a.className,d=a.component,m=void 0===d?"div":d,y=a.image,x=a.src,b=a.style,w=(0,n.Z)(a,f),Z=-1!==h.indexOf(m),N=!Z&&y?(0,o.Z)({backgroundImage:'url("'.concat(y,'")')},b):b,E=(0,o.Z)({},a,{component:m,isMediaComponent:Z,isImageComponent:-1!==g.indexOf(m)}),C=function(e){var t=e.classes,a={root:["root",e.isMediaComponent&&"media",e.isImageComponent&&"img"]};return(0,s.Z)(a,u,t)}(E);return(0,p.jsx)(v,(0,o.Z)({className:(0,i.Z)(C.root,c),as:m,role:!Z&&y?"img":void 0,ref:t,style:N,ownerState:E,src:Z?y||x:void 0},w,{children:r}))})),x=a(4942),b=a(2982),w=a(6486),Z=a(9665),N=["sx"];function E(e){var t,a=e.sx,r=function(e){var t={systemProps:{},otherProps:{}};return Object.keys(e).forEach((function(a){Z.G[a]?t.systemProps[a]=e[a]:t.otherProps[a]=e[a]})),t}((0,n.Z)(e,N)),i=r.systemProps,s=r.otherProps;return t=Array.isArray(a)?[i].concat((0,b.Z)(a)):"function"==typeof a?function(){var e=a.apply(void 0,arguments);return(0,w.P)(e)?(0,o.Z)({},i,e):i}:(0,o.Z)({},i,a),(0,o.Z)({},s,{sx:t})}var C=a(6550).Z;function M(e){return(0,d.Z)("MuiTypography",e)}(0,m.Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var P=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],S=(0,c.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,a.variant&&t[a.variant],"inherit"!==a.align&&t["align".concat(C(a.align))],a.noWrap&&t.noWrap,a.gutterBottom&&t.gutterBottom,a.paragraph&&t.paragraph]}})((function(e){var t=e.theme,a=e.ownerState;return(0,o.Z)({margin:0},a.variant&&t.typography[a.variant],"inherit"!==a.align&&{textAlign:a.align},a.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},a.gutterBottom&&{marginBottom:"0.35em"},a.paragraph&&{marginBottom:16})})),R={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},k={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},j=r.forwardRef((function(e,t){var a=(0,l.Z)({props:e,name:"MuiTypography"}),r=function(e){return k[e]||e}(a.color),c=E((0,o.Z)({},a,{color:r})),d=c.align,m=void 0===d?"inherit":d,u=c.className,f=c.component,v=c.gutterBottom,h=void 0!==v&&v,g=c.noWrap,y=void 0!==g&&g,x=c.paragraph,b=void 0!==x&&x,w=c.variant,Z=void 0===w?"body1":w,N=c.variantMapping,j=void 0===N?R:N,I=(0,n.Z)(c,P),T=(0,o.Z)({},c,{align:m,color:r,className:u,component:f,gutterBottom:h,noWrap:y,paragraph:b,variant:Z,variantMapping:j}),B=f||(b?"p":j[Z]||R[Z])||"span",D=function(e){var t=e.align,a=e.gutterBottom,r=e.noWrap,n=e.paragraph,o=e.variant,i=e.classes,l={root:["root",o,"inherit"!==e.align&&"align".concat(C(t)),a&&"gutterBottom",r&&"noWrap",n&&"paragraph"]};return(0,s.Z)(l,M,i)}(T);return(0,p.jsx)(S,(0,o.Z)({as:B,ref:t,ownerState:T,className:(0,i.Z)(D.root,u)},I))}));function I(e){return(0,d.Z)("MuiCardHeader",e)}var T=(0,m.Z)("MuiCardHeader",["root","avatar","action","content","title","subheader"]),B=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],D=(0,c.ZP)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:function(e,t){var a;return(0,o.Z)((a={},(0,x.Z)(a,"& .".concat(T.title),t.title),(0,x.Z)(a,"& .".concat(T.subheader),t.subheader),a),t.root)}})({display:"flex",alignItems:"center",padding:16}),A=(0,c.ZP)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:function(e,t){return t.avatar}})({display:"flex",flex:"0 0 auto",marginRight:16}),W=(0,c.ZP)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:function(e,t){return t.action}})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),H=(0,c.ZP)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:function(e,t){return t.content}})({flex:"1 1 auto"}),O=r.forwardRef((function(e,t){var a=(0,l.Z)({props:e,name:"MuiCardHeader"}),r=a.action,c=a.avatar,d=a.className,m=a.component,u=void 0===m?"div":m,f=a.disableTypography,v=void 0!==f&&f,h=a.subheader,g=a.subheaderTypographyProps,y=a.title,x=a.titleTypographyProps,b=(0,n.Z)(a,B),w=(0,o.Z)({},a,{component:u,disableTypography:v}),Z=function(e){var t=e.classes;return(0,s.Z)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},I,t)}(w),N=y;null==N||N.type===j||v||(N=(0,p.jsx)(j,(0,o.Z)({variant:c?"body2":"h5",className:Z.title,component:"span",display:"block"},x,{children:N})));var E=h;return null==E||E.type===j||v||(E=(0,p.jsx)(j,(0,o.Z)({variant:c?"body2":"body1",className:Z.subheader,color:"text.secondary",component:"span",display:"block"},g,{children:E}))),(0,p.jsxs)(D,(0,o.Z)({className:(0,i.Z)(Z.root,d),as:u,ref:t,ownerState:w},b,{children:[c&&(0,p.jsx)(A,{className:Z.avatar,ownerState:w,children:c}),(0,p.jsxs)(H,{className:Z.content,ownerState:w,children:[N,E]}),r&&(0,p.jsx)(W,{className:Z.action,ownerState:w,children:r})]}))}));function z(e){return(0,d.Z)("MuiCardContent",e)}(0,m.Z)("MuiCardContent",["root"]);var J=["className","component"],F=(0,c.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(){return{padding:16,"&:last-child":{paddingBottom:24}}})),q=r.forwardRef((function(e,t){var a=(0,l.Z)({props:e,name:"MuiCardContent"}),r=a.className,c=a.component,d=void 0===c?"div":c,m=(0,n.Z)(a,J),u=(0,o.Z)({},a,{component:d}),f=function(e){var t=e.classes;return(0,s.Z)({root:["root"]},z,t)}(u);return(0,p.jsx)(F,(0,o.Z)({as:d,className:(0,i.Z)(f.root,r),ownerState:u,ref:t},m))})),U=a(4417),V=function(e){e.children;var t=e.date,a=e.title,n=e.image,o=e.description;return r.createElement(U.Z,{sx:{width:300,height:300}},r.createElement(y,{component:"img",height:"194",image:n}),r.createElement(O,{title:a,subheader:t}),r.createElement(q,null,r.createElement(j,{variant:"body2",color:"text.secondary"},o)))}},142:function(e,t,a){a.r(t),a.d(t,{default:function(){return i}});var r=a(7294),n=(a.p,a(5117)),o=function(e){var t=e.name;return r.createElement("div",{style:{backgroundColor:"#073543"},className:"px-2 py-1 w-fit mx-2 my-2 rounded-lg"},t)},i=function(){var e=(0,n.YD)({threshold:.5,triggerOnce:!0}),t=e.ref,a=e.inView;e.entry;return r.createElement("div",{ref:t,style:{background:"2596be"},className:"min-h-screen sm:p-8 px-4 text-left flex flex-col justify-center items-center"},a&&r.createElement("div",{className:"fade-in-text flex p-4 sm:flex-row flex-col items-center justify-center"},r.createElement("div",{className:"p-4 sm:w-3/4 d"},r.createElement("div",{className:"glow-container p-4 rounded-lg flicker"},r.createElement("h1",{className:"text-3xl"},"But who am I?"),r.createElement("p",{className:"pt-4"},"Hi there! My name is Henry Truong. I'm a software engineer who enjoys working code that focuses on creating experiences and improvings the lives of users.",r.createElement("br",null),"These days, I am focused on web development. Striving to make a",r.createElement("span",{className:"font-bold"}," positive impact"),"  on people's lives and the ",r.createElement("span",{className:"font-bold"},"limitless learning opportunities"),"  is what drives me.")),r.createElement("div",{className:"mt-10 p-4 glow-container rounded-lg"},r.createElement("h1",{className:"text-3xl"},"Some technologies I've used"),r.createElement("div",{className:"flex flex-wrap"},["React","JavaScript","TypeScript","CSS","Nodejs","Express","MongoDB","SQL","RDBMS","Git"].map((function(e){return r.createElement(o,{name:e})})))))))}},222:function(e,t,a){a.r(t),a.d(t,{default:function(){return s}});var r=a(7294),n=a(2301),o=a(5117),i=[{name:"Intuit",role:"Software Developer Co-op",startDate:"Jan 2018",endDate:"Aug 2018",contents:["Front-end developer for Quickbooks Online","Ran spikes on new charting libraries to improve widget loading speed","Develop brand new UI for onboarding steps to help classify user business types","Improve code quality by writing new unit tests and end-to-end tests","Utilized JavaScript, Reactjs"]},{name:"Showbie",role:"Fullstack Developer",startDate:"June 2019",endDate:"Aug 2022",contents:["Fullstack Developer for Socrative","Develop scalable and performant back-end APIs for front-end consumption","Kick-started code quality improvement by introducing unit testing to the codebase","Build new email modal for teachers to send personalized PDF results to students","Assist with technical planning for features","Conduct code reviews to ensure quality and standards","Utilized TypeScript, Reactjs, Nodejs, express, Objectionjs"]}];function s(){var e=(0,o.YD)({threshold:.5,triggerOnce:!0}),t=e.ref,a=e.inView;e.entry;return r.createElement("div",{ref:t,className:"px-8"},a&&r.createElement("div",{className:"fade-in-text h-screen"},r.createElement("div",{className:"glow-container p-4 rounded-lg"},r.createElement("h1",{className:"text-3xl"},"Places I've Worked"),r.createElement("div",{className:"sm:max-w-xl max-w-sm flex items-center justify-center"},r.createElement(n.m,{tabsContent:i})))))}},4694:function(e,t,a){a.r(t),a.d(t,{default:function(){return l}});var r=a(7294),n=(a(6652),a(7080)),o=(a(1672),a(5444),a(2727),a(142)),i=a(222),s=(a(7744),a.p+"static/Night-6fd53cd313ee5fa2cee5605f21f0aaf3.mp4"),l=function(e){var t=e.data,a=r.useRef(),l=r.useRef();r.useRef(),t.allMdx.nodes;return r.createElement(n.P,{className:"flex flex-col items-center justify-center sm:px-8"},r.createElement("div",{ref:a,className:"flex flex-col-reverse sm:flex-col justify-center items-center h-screen"},r.createElement("video",{disablePictureInPicture:!0,className:"absolute -z-10 max-w-fit",loop:!0,id:"intro-vid",autoPlay:!0,muted:!0},r.createElement("source",{src:s,type:"video/mp4"})),r.createElement("div",{className:"text-white p-6 sm:w-3/4 text-leftc fade-in-text index-text-container rounded-lg"},r.createElement("h1",{className:"text-white text-6xl font-thin pb-4 font-bold"},"Hi There"),r.createElement("p",{className:"text-2xl"},"I'm an aspiring ",r.createElement("span",{className:"font-bold"},"JavaScript")," software engineer whose focused on ",r.createElement("span",{className:"font-bold"},"web development "),"."),r.createElement("br",null),r.createElement("p",{className:"text-2xl"},"I am always on the look out for great food and my next adventures."))),r.createElement(o.default,null),r.createElement(i.default,null))}},7744:function(e,t,a){a.r(t);var r=a(7294),n=(a(2301),a(7080),a(5117)),o=a(4417),i=[{name:"Discord Music Bot",inProgress:!1,summary:"A discord bot that plays youtube music/spotify through voice channels.",technologies:["React","TypeScript","Discord API","Discord Music Player","Nodejs"]},{name:"Nano Badminton Website",inProgress:!0,summary:"A fully functional web app for recreational badminton league. Allows users to sign up, \n        join tournaments, find teams and lets users manage their own account.",technologies:["React","TypeScript","ASP.net","Entity","Azure"]}];t.default=function(){var e=(0,n.YD)({threshold:.5,triggerOnce:!0}),t=e.ref,a=e.inView;e.entry;return r.createElement("section",{ref:t,id:"projects",className:"min-h-screen px-8"},a&&r.createElement("div",{className:"fade-in-text"},r.createElement("h1",{className:"text-3xl"},"Things I've built/currently being built"),r.createElement("div",{className:"flex flex-wrap"},i.map((function(e){return r.createElement(o.Z,null)})))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-24f01cab1dbc6702b5f2.js.map