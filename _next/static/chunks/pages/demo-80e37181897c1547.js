(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[656],{6148:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/demo",function(){return n(5110)}])},9543:function(e,t,n){"use strict";n.r(t);var a=n(5893),r=n(7294),o=n(292),i=n.n(o),s=n(1163),c=n(9417),l=n(9603);let d=()=>{let[e,t]=r.useState(!1),n=(0,s.useRouter)(),o=()=>{n.push("/")},d=()=>{t(!e),console.log(e)};return(0,a.jsx)("div",{children:(0,a.jsx)("main",{className:i().main,children:(0,a.jsxs)("nav",{className:i().navbar,children:[(0,a.jsxs)("div",{className:i().navbarBrand,children:[(0,a.jsx)("img",{src:"/icon.png",onClick:o})," ",(0,a.jsx)("h2",{children:"SincerelyAI"})]}),(0,a.jsxs)("div",{className:e?"".concat(i().navbarMenu," ").concat(i().open):i().navbarMenu,children:[(0,a.jsx)("a",{href:"#about",children:"About"}),(0,a.jsx)("a",{href:"#features",children:"Features"}),(0,a.jsx)("a",{href:"#getStarted",children:"Contact"})]}),(0,a.jsx)("div",{className:i().hamburger,children:(0,a.jsx)(l.G,{icon:c.xiG,onClick:d})})]})})})};t.default=d},5110:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return b}});var a=n(5893),r=n(9008),o=n.n(r),i=n(7294),s=n(5693),c=n.n(s),l=n(9543),d={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function u(e){if("number"==typeof e)return{value:e,unit:"px"};var t,n=(e.match(/^[0-9.]*/)||"").toString();t=n.includes(".")?parseFloat(n):parseInt(n,10);var a=(e.match(/[^0-9]*$/)||"").toString();return d[a]?{value:t,unit:a}:(console.warn("React Spinners: ".concat(e," is not a valid css value. Defaulting to ").concat(t,"px.")),{value:t,unit:"px"})}function p(e){var t=u(e);return"".concat(t.value).concat(t.unit)}var h=function(e,t,n){var a="react-spinners-".concat(e,"-").concat(n);if("undefined"==typeof window||!window.document)return a;var r=document.createElement("style");document.head.appendChild(r);var o=r.sheet,i="\n    @keyframes ".concat(a," {\n      ").concat(t,"\n    }\n  ");return o&&o.insertRule(i,0),a},m=function(){return(m=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},v=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>t.indexOf(a)&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)0>t.indexOf(a[r])&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]]);return n},g=h("RingLoader","0% {transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg)} 100% {transform: rotateX(180deg) rotateY(360deg) rotateZ(360deg)}","right"),f=h("RingLoader","0% {transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg)} 100% {transform: rotateX(360deg) rotateY(180deg) rotateZ(360deg)}","left"),_=function(e){var t=e.loading,n=e.color,a=void 0===n?"#000000":n,r=e.speedMultiplier,o=void 0===r?1:r,s=e.cssOverride,c=e.size,l=void 0===c?60:c,d=v(e,["loading","color","speedMultiplier","cssOverride","size"]),h=u(l),_=h.value,b=h.unit,x=m({display:"inherit",width:p(l),height:p(l),position:"relative"},void 0===s?{}:s),j=function(e){return{position:"absolute",top:"0",left:"0",width:"".concat(_).concat(b),height:"".concat(_).concat(b),border:"".concat(_/10).concat(b," solid ").concat(a),opacity:"0.4",borderRadius:"100%",animationFillMode:"forwards",perspective:"800px",animation:"".concat(1===e?g:f," ").concat(2/o,"s 0s infinite linear")}};return void 0===t||t?i.createElement("span",m({style:x},d),i.createElement("span",{style:j(1)}),i.createElement("span",{style:j(2)})):null};function b(){let[e,t]=(0,i.useState)(""),[n,r]=(0,i.useState)("Angry"),[s,d]=(0,i.useState)(""),[u,p]=(0,i.useState)(),[h,m]=(0,i.useState)(!1),[v,g]=(0,i.useState)(1),f=e=>{g(parseInt(e.target.value))};async function b(a){a.preventDefault(),m(!0);try{let o=await fetch("/api/generate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:e,tone:n,reciever:s})}),i=await o.json();if(200!==o.status)throw i.error||Error("Request failed with status ".concat(o.status));let c=i.result.split("Dear ")[1];p("Dear "+c),t(""),r(""),d("")}catch(l){console.error(l),alert(l.message)}finally{m(!1)}}return(0,i.useEffect)(()=>{let e="";switch(v){case 1:e="Angry";break;case 2:e="Passive Aggressive";break;case 3:e="Delighted";break;default:console.log("error with setting tone")}r(e),console.log(e)},[v]),(0,a.jsxs)("div",{children:[(0,a.jsxs)(o(),{children:[(0,a.jsx)("title",{children:"Sincerely"}),(0,a.jsx)("link",{rel:"icon",href:"/icon.png"})]}),(0,a.jsx)(l.default,{}),(0,a.jsxs)("main",{className:c().main,children:[(0,a.jsx)("h3",{children:"Sincerely"}),(0,a.jsx)("p",{children:"As professional as it gets"}),(0,a.jsxs)("form",{onSubmit:b,children:[(0,a.jsx)("input",{type:"recepient",name:"reciever",placeholder:"Who is this for?",value:s,onChange:e=>d(e.target.value)}),(0,a.jsx)("input",{type:"prompt",name:"prompt",placeholder:"What do you want to say?",value:e,onChange:e=>t(e.target.value)}),(0,a.jsx)("div",{className:c().toneHeaderContainer,children:(0,a.jsx)("h4",{className:c().toneHeader,children:"Tone"})}),(0,a.jsx)("div",{className:c().container,children:(0,a.jsxs)("div",{className:c().tabs,children:[(0,a.jsx)("input",{type:"radio",id:"radio-1",name:"tabs",value:1,checked:1===v,onChange:f}),(0,a.jsx)("label",{className:c().tab,htmlFor:"radio-1",children:"Angry"}),(0,a.jsx)("input",{type:"radio",id:"radio-2",name:"tabs",value:2,checked:2===v,onChange:f}),(0,a.jsx)("label",{className:c().tab,htmlFor:"radio-2",children:"Passive"}),(0,a.jsx)("input",{type:"radio",id:"radio-3",name:"tabs",value:3,checked:3===v,onChange:f}),(0,a.jsx)("label",{className:c().tab,htmlFor:"radio-3",children:"Happy"}),(0,a.jsx)("span",{className:1===v?c().glider1:2===v?c().glider2:c().glider3})]})}),!h&&(0,a.jsx)("input",{type:"submit",value:"Corporate it Up"})]}),h&&(0,a.jsx)(_,{color:"#9119e8",loading:h}),(0,a.jsx)("div",{children:u&&u.split("\n").map((e,t)=>(0,a.jsx)("p",{className:c().result,children:e},t))})]})]})}},292:function(e){e.exports={main:"navbar_main__ugnTz",navbar:"navbar_navbar__HnkkC",navbarMenu:"navbar_navbarMenu__eF_D4",open:"navbar_open__TrWZ5",hamburger:"navbar_hamburger__HEVL1",navbarBrand:"navbar_navbarBrand__zhm8d"}},5693:function(e){e.exports={main:"demo_main__IniI1",icon:"demo_icon__Mfg_r",result:"demo_result__OrKmr",toneHeaderContainer:"demo_toneHeaderContainer__fMwXs",toneHeader:"demo_toneHeader__rzBrN",container:"demo_container__EcqJD",tabs:"demo_tabs__djEnK",tab:"demo_tab__SKtT4",glider1:"demo_glider1__e_j6L",glider2:"demo_glider2__cl1JN",glider3:"demo_glider3__XIgl1"}},9008:function(e,t,n){e.exports=n(3121)}},function(e){e.O(0,[774,976,834,888,179],function(){return e(e.s=6148)}),_N_E=e.O()}]);