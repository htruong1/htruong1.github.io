"use strict";(self.webpackChunkblackhole_eats=self.webpackChunkblackhole_eats||[]).push([[25],{2301:function(e,t,n){n.d(t,{m:function(){return r}});var a=n(7294),l=function(e,t){return"text-left text-lg p-1 "+(e===t?"tabs-button":"")};function s(e){var t=e.tabsContent,n=e.selectedTab,s=e.onClick;return a.createElement("div",{className:"pr-4 flex sm:flex-col"},t.map((function(e,t){return a.createElement("button",{className:l(n,t),onClick:function(){s(t)}},e.name)})))}function r(e){var t=e.tabsContent,n=a.useState(0),l=n[0],r=n[1],o=t[l].endDate?t[l].startDate+" to "+t[l].endDate:t[l].startDate+" to present";return a.createElement("div",{className:"flex sm:flex-row flex-col w-full py-2"},a.createElement(s,{tabsContent:t,onClick:function(e){return r(e)},selectedTab:l}),a.createElement("div",null,a.createElement("h1",{className:"text-2xl font-medium"},t[l].role+" ",a.createElement("span",{className:"font-semibold"},"@ "+t[l].name)),a.createElement("div",null,o),a.createElement("ul",{className:"flex flex-col pl-4 pt-4"},t[l].contents.map((function(e){return a.createElement("li",{className:"list-disc text-left"},e)})))))}},8994:function(e,t,n){n.r(t);var a=n(7294),l=n(2301),s=n(7080),r=[{name:"Intuit",role:"Software Developer Co-op",startDate:"Jan 2018",endDate:"Aug 2018",contents:["Front-end developer for Quickbooks Online","Ran spikes on new charting libraries to improve widget loading speed","Develop brand new UI for onboarding steps to help classify user business types","Improve code quality by writing new unit tests and end-to-end tests","Utilized JavaScript, Reactjs"]},{name:"Showbie",role:"Fullstack Developer",startDate:"June 2019",endDate:null,contents:["Fullstack Developer for Socrative","Develop scalable and performant back-end APIs for front-end consumption","Kick-started code quality improvement by introducing unit testing to the codebase","Build new email modal for teachers to send personalized PDF results to students","Assist with technical planning for features","Conduct code reviews to ensure quality and standards","Utilized TypeScript, Reactjs, Nodejs, express, Objectionjs"]}];t.default=function(){return a.createElement(s.P,{className:"flex flex-col items-center"},a.createElement("title",null,"Portfolio and Experience"),a.createElement("h1",{className:"text-4xl text-white"},"My Projects"),a.createElement("div",{className:"flex flex-col justify-center items-center p-4"},a.createElement("h2",{className:"text-2xl"},"Work Experience"),a.createElement(l.m,{tabsContent:r})))}}}]);
//# sourceMappingURL=component---src-pages-portfolio-js-81692982bab77908a129.js.map