(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[15],{6496:function(n,e,t){"use strict";t.d(e,{U3:function(){return i},mD:function(){return o},iz:function(){return c}});var r=t(7379),i=r.ZP.h2.withConfig({displayName:"Style__MainTitle",componentId:"pmo6ay-0"})(["color:#37548f;margin:30px 0 50px 0;text-align:center;"]),o=r.ZP.div.withConfig({displayName:"Style__MainContents",componentId:"pmo6ay-1"})(["max-width:500px;margin:0 auto;"]),c=r.ZP.div.withConfig({displayName:"Style__Divider",componentId:"pmo6ay-2"})(["border:solid 0.5px #6e6e6e;margin:10px 0 30px 0;"])},1227:function(n,e,t){"use strict";t.d(e,{A:function(){return m}});t(7294);var r=t(7397),i=t(7379),o=i.ZP.img.withConfig({displayName:"Style__Icon",componentId:"sc-1mbs24i-0"})(["display:block;width:24px;height:24px;object-fit:cover;"]),c=i.ZP.span.withConfig({displayName:"Style__Span",componentId:"sc-1mbs24i-1"})(["padding-right:3px;"]),s=i.ZP.main.withConfig({displayName:"Style__MainContent",componentId:"sc-1mbs24i-2"})([""]),a=t(7814),l=t(1417),u=t(928),f=t(5893),d=function(){return(0,f.jsx)("div",{className:"w-full",children:(0,f.jsxs)("div",{className:"flex justify-between pt-10 pr-1 pl-3 w-full",children:[(0,f.jsxs)(r.Z.Brand,{href:"/",className:"flex items-center sm:pl-20",style:{fontFamily:"cursive"},children:[(0,f.jsx)(c,{children:(0,f.jsx)(o,{src:"/static/icon/water_lily.png"})}),"Lilycoco"]}),(0,f.jsxs)("div",{className:"flex items-center sm:pr-20",children:[(0,f.jsx)(u.Z.Link,{href:"https://twitter.com/llccr27",target:"_blank",children:(0,f.jsx)(a.G,{icon:l.mdU,size:"lg"})}),(0,f.jsx)(u.Z.Link,{href:"https://github.com/lilycoco",target:"_blank",children:(0,f.jsx)(a.G,{icon:l.zhw,size:"lg"})}),(0,f.jsx)(u.Z.Link,{href:"https://www.linkedin.com/in/ryoko-kawashima/",target:"_blank",children:(0,f.jsx)(a.G,{icon:l.D9H,size:"lg"})}),(0,f.jsx)(u.Z.Link,{href:"https://www.codewars.com/users/lilycoco",target:"_blank",children:(0,f.jsx)("img",{src:"/static/icon/codewars2.webp",className:"block w-5 h-5"})})]})]})})},p=function(){return(0,f.jsx)("div",{className:"py-8 w-full text-xs text-center",children:(0,f.jsx)("span",{className:"block",children:"\xa9 2022 lilycoco"})})},h=function(){return(0,f.jsxs)("div",{className:"flex sticky top-0 flex-wrap gap-8 justify-end py-10 w-full text-sm sm:px-28",style:{fontFamily:"Lato, sans-serif",textShadow:"#fff 5px 0 10px, #fff 5px 0 10px, #fff 5px 0 10px, #fff 5px 0 10px, #fff 5px 0 10px"},children:[(0,f.jsx)("div",{children:(0,f.jsx)("a",{href:"#area-about",children:"About"})}),(0,f.jsx)("div",{children:(0,f.jsx)("a",{href:"#area-skills",children:"Skills"})}),(0,f.jsx)("div",{children:(0,f.jsx)("a",{href:"#area-works",children:"Works"})}),(0,f.jsx)("div",{children:(0,f.jsx)("a",{href:"#area-awords",children:"Awords"})}),(0,f.jsx)("div",{className:"pr-3",children:(0,f.jsx)("a",{target:"_blank",href:"https://lilycoco.hatenablog.com",children:"Blog"})})]})},m=function(n){var e=n.children;return(0,f.jsxs)("div",{children:[(0,f.jsx)(d,{}),(0,f.jsx)(h,{}),(0,f.jsx)(s,{children:e}),(0,f.jsx)(p,{})]})}},3418:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return O}});var r=t(7294),i=t(1227),o=t(6496),c=t(7379),s=c.ZP.div.withConfig({displayName:"Style__BoardRow",componentId:"sc-1ychjn9-0"})(['&::after{clear:both;content:"";display:table;}']),a=c.ZP.div.withConfig({displayName:"Style__BoardWrapper",componentId:"sc-1ychjn9-1"})(["margin:30px;"]),l=c.ZP.button.withConfig({displayName:"Style__StepButton",componentId:"sc-1ychjn9-2"})(["font-weight:",";"],(function(n){return n.stepNumber===n.step?"bold":null})),u=c.ZP.button.withConfig({displayName:"Style__SquareButton",componentId:"sc-1ychjn9-3"})(["border:1px solid #999;float:left;font-size:24px;font-weight:bold;line-height:34px;height:34px;margin-right:-1px;margin-top:-1px;padding:0;text-align:center;width:34px;background:",";&:focus{outline:none;background:#ddd;}"],(function(n){return n.highlight?n.highlight:"#fff"})),f=c.ZP.div.withConfig({displayName:"Style__GameWrapper",componentId:"sc-1ychjn9-4"})(["display:flex;"]),d=c.ZP.div.withConfig({displayName:"Style__ButtonWrapper",componentId:"sc-1ychjn9-5"})(["margin:0 30px;"]),p=t(5893),h=function(n){var e=n.className,t=n.onClick,r=n.value;return(0,p.jsx)(u,{highlight:e,onClick:t,children:r})},m=function(n){var e=n.squares,t=n.onClick,r=n.winner,i=function(n){var e=null;return r&&r.numbers&&r.numbers.map((function(t){return n===t&&(e="yellow")})),e};return(0,p.jsx)(a,{className:"game-board",children:[0,3,6].map((function(n){return(0,p.jsx)(s,{children:[n,n+1,n+2].map((function(n){return(0,p.jsx)(h,{value:e[n],onClick:function(){return t(n)},className:i(n)},n)}))},n)}))})},x=t(9499);function y(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function j(n){return function(n){if(Array.isArray(n))return y(n)}(n)||function(n){if("undefined"!==typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||function(n,e){if(n){if("string"===typeof n)return y(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?y(n,e):void 0}}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var g=function(n){var e=n.onClick,t=n.histories,r=n.asc,i=n.stepNumber,o=j(t.keys());return(0,p.jsx)("ol",{children:o.map((function(n){!r&&(n=t.length-n-1);var o=n?"Go to move #"+n:"Go to game start";return(0,p.jsx)("li",{children:(0,p.jsx)(l,{onClick:function(){return e(n)},stepNumber:i,step:n,children:o})},n)}))})},w=function(n){return n.winner?"Winner: "+n.winner.mark:n.stepNumber<9?"Next player: "+(n.xIsNext?"X":"O"):"Draw"};function b(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function v(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?b(Object(t),!0).forEach((function(e){(0,x.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var k=function(n){return(0,p.jsxs)(d,{children:[(0,p.jsx)("h4",{children:w(n)}),(0,p.jsx)("button",{onClick:n.onClick,style:{margin:"10px 0px"},children:"Sort order"}),(0,p.jsx)(g,v(v({},n),{},{onClick:function(e){return n.jump(e)}}))]})},_=Date.now(),N=function(n,e){var t=(0,r.useState)(n),i=t[0],o=t[1],c=setInterval((function(){return o(Math.round((Date.now()-_)/1e3))}),1e3);return(0,r.useEffect)((function(){return function(){clearInterval(c)}})),e&&clearInterval(c),i},S=function(n){var e=n.winner,t=N(0,e);return(0,p.jsxs)("h4",{children:[" ",t," sec "]})},C=function(){var n=(0,r.useState)([{squares:Array(9).fill(null)}]),e=n[0],t=n[1],i=(0,r.useState)(0),c=i[0],s=i[1],a=(0,r.useState)(!0),l=a[0],u=a[1],d=(0,r.useState)(!0),h=d[0],x=d[1],y=e.slice(0,c+1),j=y[y.length-1].squares.slice(),g=function(n){var e=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]].find((function(e){return n[e[0]]&&n[e[0]]===n[e[1]]&&n[e[0]]===n[e[2]]}));return e?{mark:n[e[0]],numbers:e}:null}(j);(0,r.useEffect)((function(){document.title="You clicked ".concat(c," times")}),[c]);return(0,p.jsx)(o.mD,{children:(0,p.jsxs)(f,{children:[(0,p.jsxs)("div",{children:[(0,p.jsx)(m,{squares:j,onClick:function(n){return function(n){g||j[n]||(j[n]=l?"X":"O",t(y.concat([{squares:j}])),s(y.length),u(!l))}(n)},winner:g}),(0,p.jsx)(S,{winner:g})]}),(0,p.jsx)(k,{onClick:function(){return x(!h)},histories:e,asc:h,winner:g,stepNumber:c,xIsNext:l,jump:function(n){return function(n){s(n),u(n%2===0)}(n)}})]})})};function O(){return(0,p.jsxs)(i.A,{children:[(0,p.jsx)(o.U3,{children:"Tic Tac Toe"}),(0,p.jsx)(C,{})]})}},5568:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tictac",function(){return t(3418)}])}},function(n){n.O(0,[112,439,774,888,179],(function(){return e=5568,n(n.s=e);var e}));var e=n.O();_N_E=e}]);