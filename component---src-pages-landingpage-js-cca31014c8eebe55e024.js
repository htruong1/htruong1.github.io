"use strict";(self.webpackChunkblackhole_eats=self.webpackChunkblackhole_eats||[]).push([[48],{1672:function(e,t,a){a.d(t,{$:function(){return L}});var r=a(7294),o=a(3366),n=a(7462),i=a(5505),s=a(9408),l=a(1158),c=a(2042),d=a(240),m=a(2194);function p(e){return(0,d.Z)("MuiCardMedia",e)}(0,m.Z)("MuiCardMedia",["root","media","img"]);var u=a(5893),h=["children","className","component","image","src","style"],v=(0,c.ZP)("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState,r=a.isMediaComponent,o=a.isImageComponent;return[t.root,r&&t.media,o&&t.img]}})((function(e){var t=e.ownerState;return(0,n.Z)({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},t.isMediaComponent&&{width:"100%"},t.isImageComponent&&{objectFit:"cover"})})),g=["video","audio","picture","iframe","img"],f=["picture","img"],y=r.forwardRef((function(e,t){var a=(0,l.Z)({props:e,name:"MuiCardMedia"}),r=a.children,c=a.className,d=a.component,m=void 0===d?"div":d,y=a.image,Z=a.src,x=a.style,b=(0,o.Z)(a,h),w=-1!==g.indexOf(m),C=!w&&y?(0,n.Z)({backgroundImage:'url("'.concat(y,'")')},x):x,M=(0,n.Z)({},a,{component:m,isMediaComponent:w,isImageComponent:-1!==f.indexOf(m)}),N=function(e){var t=e.classes,a={root:["root",e.isMediaComponent&&"media",e.isImageComponent&&"img"]};return(0,s.Z)(a,p,t)}(M);return(0,u.jsx)(v,(0,n.Z)({className:(0,i.Z)(N.root,c),as:m,role:!w&&y?"img":void 0,ref:t,style:C,ownerState:M,src:w?y||Z:void 0},b,{children:r}))})),Z=a(4942),x=a(2982),b=a(6486),w=a(9665),C=["sx"];function M(e){var t,a=e.sx,r=function(e){var t={systemProps:{},otherProps:{}};return Object.keys(e).forEach((function(a){w.G[a]?t.systemProps[a]=e[a]:t.otherProps[a]=e[a]})),t}((0,o.Z)(e,C)),i=r.systemProps,s=r.otherProps;return t=Array.isArray(a)?[i].concat((0,x.Z)(a)):"function"==typeof a?function(){var e=a.apply(void 0,arguments);return(0,b.P)(e)?(0,n.Z)({},i,e):i}:(0,n.Z)({},i,a),(0,n.Z)({},s,{sx:t})}var N=a(6550).Z;function P(e){return(0,d.Z)("MuiTypography",e)}(0,m.Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var R=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],E=(0,c.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,a.variant&&t[a.variant],"inherit"!==a.align&&t["align".concat(N(a.align))],a.noWrap&&t.noWrap,a.gutterBottom&&t.gutterBottom,a.paragraph&&t.paragraph]}})((function(e){var t=e.theme,a=e.ownerState;return(0,n.Z)({margin:0},a.variant&&t.typography[a.variant],"inherit"!==a.align&&{textAlign:a.align},a.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},a.gutterBottom&&{marginBottom:"0.35em"},a.paragraph&&{marginBottom:16})})),k={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},S={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},T=r.forwardRef((function(e,t){var a=(0,l.Z)({props:e,name:"MuiTypography"}),r=function(e){return S[e]||e}(a.color),c=M((0,n.Z)({},a,{color:r})),d=c.align,m=void 0===d?"inherit":d,p=c.className,h=c.component,v=c.gutterBottom,g=void 0!==v&&v,f=c.noWrap,y=void 0!==f&&f,Z=c.paragraph,x=void 0!==Z&&Z,b=c.variant,w=void 0===b?"body1":b,C=c.variantMapping,T=void 0===C?k:C,j=(0,o.Z)(c,R),B=(0,n.Z)({},c,{align:m,color:r,className:p,component:h,gutterBottom:g,noWrap:y,paragraph:x,variant:w,variantMapping:T}),W=h||(x?"p":T[w]||k[w])||"span",H=function(e){var t=e.align,a=e.gutterBottom,r=e.noWrap,o=e.paragraph,n=e.variant,i=e.classes,l={root:["root",n,"inherit"!==e.align&&"align".concat(N(t)),a&&"gutterBottom",r&&"noWrap",o&&"paragraph"]};return(0,s.Z)(l,P,i)}(B);return(0,u.jsx)(E,(0,n.Z)({as:W,ref:t,ownerState:B,className:(0,i.Z)(H.root,p)},j))}));function j(e){return(0,d.Z)("MuiCardHeader",e)}var B=(0,m.Z)("MuiCardHeader",["root","avatar","action","content","title","subheader"]),W=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],H=(0,c.ZP)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:function(e,t){var a;return(0,n.Z)((a={},(0,Z.Z)(a,"& .".concat(B.title),t.title),(0,Z.Z)(a,"& .".concat(B.subheader),t.subheader),a),t.root)}})({display:"flex",alignItems:"center",padding:16}),I=(0,c.ZP)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:function(e,t){return t.avatar}})({display:"flex",flex:"0 0 auto",marginRight:16}),A=(0,c.ZP)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:function(e,t){return t.action}})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),O=(0,c.ZP)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:function(e,t){return t.content}})({flex:"1 1 auto"}),F=r.forwardRef((function(e,t){var a=(0,l.Z)({props:e,name:"MuiCardHeader"}),r=a.action,c=a.avatar,d=a.className,m=a.component,p=void 0===m?"div":m,h=a.disableTypography,v=void 0!==h&&h,g=a.subheader,f=a.subheaderTypographyProps,y=a.title,Z=a.titleTypographyProps,x=(0,o.Z)(a,W),b=(0,n.Z)({},a,{component:p,disableTypography:v}),w=function(e){var t=e.classes;return(0,s.Z)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},j,t)}(b),C=y;null==C||C.type===T||v||(C=(0,u.jsx)(T,(0,n.Z)({variant:c?"body2":"h5",className:w.title,component:"span",display:"block"},Z,{children:C})));var M=g;return null==M||M.type===T||v||(M=(0,u.jsx)(T,(0,n.Z)({variant:c?"body2":"body1",className:w.subheader,color:"text.secondary",component:"span",display:"block"},f,{children:M}))),(0,u.jsxs)(H,(0,n.Z)({className:(0,i.Z)(w.root,d),as:p,ref:t,ownerState:b},x,{children:[c&&(0,u.jsx)(I,{className:w.avatar,ownerState:b,children:c}),(0,u.jsxs)(O,{className:w.content,ownerState:b,children:[C,M]}),r&&(0,u.jsx)(A,{className:w.action,ownerState:b,children:r})]}))}));function _(e){return(0,d.Z)("MuiCardContent",e)}(0,m.Z)("MuiCardContent",["root"]);var z=["className","component"],D=(0,c.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(){return{padding:16,"&:last-child":{paddingBottom:24}}})),G=r.forwardRef((function(e,t){var a=(0,l.Z)({props:e,name:"MuiCardContent"}),r=a.className,c=a.component,d=void 0===c?"div":c,m=(0,o.Z)(a,z),p=(0,n.Z)({},a,{component:d}),h=function(e){var t=e.classes;return(0,s.Z)({root:["root"]},_,t)}(p);return(0,u.jsx)(D,(0,n.Z)({as:d,className:(0,i.Z)(h.root,r),ownerState:p,ref:t},m))})),J=a(4417),L=function(e){e.children;var t=e.date,a=e.title,o=e.image,n=e.description;return r.createElement(J.Z,{sx:{width:300,height:300}},r.createElement(y,{component:"img",height:"194",image:o}),r.createElement(F,{title:a,subheader:t}),r.createElement(G,null,r.createElement(T,{variant:"body2",color:"text.secondary"},n)))}},5009:function(e,t,a){a.r(t);var r=a(7294);a(1672),a(5444);t.default=function(e){return console.log(e),r.createElement(r.Fragment,null,r.createElement("div",{className:"flex md:flex-row flex-col-reverse sm:flex-col justify-center items-center p-8"},r.createElement("div",{className:"text-white text-center p-4 w-3/4"},r.createElement("h1",{className:"text-white text-6xl font-thin pb-4 text-center"},"Hi There"),r.createElement("p",{style:{animationDelay:"300ms"},className:"text-2xl"},"My name is ",r.createElement("span",{className:"font-bold"},"Henry Truong"),".",r.createElement("br",null),"I'm a ",r.createElement("span",{className:"font-bold"},"full stack")," software engineer whose always on the look out for great food."))),r.createElement("div",{className:"py-8 flex justify-center flex-col items-center max-w-full"},r.createElement("h1",{className:"text-white text-4xl font-thin text-center"},"What's New"),r.createElement("div",{className:"p-4 items-center mt-4 rounded-xl flex-col flex sm:flex-row w-fit"})))}}}]);
//# sourceMappingURL=component---src-pages-landingpage-js-cca31014c8eebe55e024.js.map