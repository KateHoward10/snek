(window.webpackJsonpsnek=window.webpackJsonpsnek||[]).push([[0],{16:function(n,e,t){n.exports=t(27)},26:function(n,e,t){},27:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(11),i=t.n(o),c=t(4),l=t(3);function u(n,e){var t=Object(r.useRef)();Object(r.useEffect)((function(){t.current=n}),[n]),Object(r.useEffect)((function(){if(null!==e){var n=setInterval((function(){t.current&&(null===t||void 0===t||t.current())}),e);return function(){clearInterval(n)}}}),[e])}var d=["\ud83c\udf4e","\ud83c\udf4f","\ud83c\udf53","\ud83e\udd6d","\ud83c\udf50","\ud83c\udf4c","\ud83c\udf45","\ud83e\udd55","\ud83e\udd54","\ud83e\udd6c"],s=function(){return d[Math.floor(Math.random()*d.length)]},f=function n(e){var t=Math.floor(289*Math.random());return e.includes(t)?n(e):t};function p(n,e){switch(n-e){case 1:case-16:return"right";case-1:case 16:return"left";case 17:case-272:return"down";case-17:case 272:return"up";default:return null}}var g=function(n,e){var t=n.indexOf(e),r=n[t-1],a=n[t+1];return"right"===p(e,r)&&"down"===p(a,e)||"up"===p(e,r)&&"left"===p(a,e)?"top-right":"up"===p(e,r)&&"right"===p(a,e)||"left"===p(e,r)&&"down"===p(a,e)?"top-left":"down"===p(e,r)&&"left"===p(a,e)||"right"===p(e,r)&&"up"===p(a,e)?"bottom-right":"left"===p(e,r)&&"up"===p(a,e)||"down"===p(e,r)&&"right"===p(a,e)?"bottom-left":null};function h(n,e,t){return"right"===n&&e%17!==0||"left"===n&&e%17!==16||"down"===n&&e>16||"up"===n&&e<272?p(e,t):n}var b=t(2),m=t(1);function w(){var n=Object(b.a)(["\n  padding: 5px;\n  background-color: transparent;\n  border-radius: 10px;\n  ","\n"]);return w=function(){return n},n}function x(){var n=Object(b.a)(["\n  width: 30px;\n  height: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: orange;\n  border-radius: 50%;\n  ","\n"]);return x=function(){return n},n}function v(){var n=Object(b.a)(["\n  padding: 5px;\n  background-color: orange;\n  border-radius: 10px;\n  font-size: 3vw;\n  ","\n  @media screen and (min-width: 600px) {\n    width: 64px;\n  }\n"]);return v=function(){return n},n}function j(){var n=Object(b.a)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n"]);return j=function(){return n},n}var y="\n  margin: 10px;\n  border: 2px solid orange;\n  font-size: 3vw;\n  @media screen and (min-width: 600px) {\n    font-size: 18px;\n    border-width: 4px;\n  }\n",O=m.a.div(j()),k=m.a.button(v(),y),E=m.a.button(x(),y),S=m.a.p(w(),y),C=function(n){var e=n.onClick,t=n.score,r=n.highScore,o=n.openInstructions;return a.a.createElement(O,null,a.a.createElement(k,{onClick:e},"PLAY"),a.a.createElement(S,null,"Score: ",t),a.a.createElement(S,null,"High Score: ",r),a.a.createElement(E,{onClick:o},"?"))};function A(){var n=Object(b.a)(["\n  width: 3px;\n  height: 3px;\n  border-radius: 50%;\n  background-color: black;\n  @media screen and (max-width: 600px) {\n    width: 1px;\n    height: 1px;\n  }\n"]);return A=function(){return n},n}function z(){var n=Object(b.a)(["\n  display: grid;\n  grid-template-rows: repeat(17, 30px);\n  grid-template-columns: repeat(17, 30px);\n  margin: 5px;\n  @media screen and (max-width: 600px) {\n    grid-template-rows: repeat(17, 5vw);\n    grid-template-columns: repeat(17, 5vw);\n  }\n"]);return z=function(){return n},n}var I="\n  background-color: blue;\n  background-image: radial-gradient(darkblue 15%, transparent 16%),\n  radial-gradient(darkblue 15%, transparent 16%);\n  background-size: 15px 15px;\n  background-position: 0 0, 7.5px 7.5px;\n",P=m.a.div(z()),M=m.a.div((function(n){var e=n.number;return"\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: rgba(50, 168, 82, ".concat(e%2===0?.8:.5,");\n  font-size: 24px;\n  @media screen and (max-width: 600px) {\n    font-size: 3vw;\n  }\n")})),L=m.a.div((function(n){var e=n.corner;return"\n  width: 30px;\n  height: 30px;\n  ".concat(I,"\n  display: flex;\n  border-top-right-radius: ").concat("top-right"===e?"50%":0,";\n  border-bottom-right-radius: ").concat("bottom-right"===e?"50%":0,";\n  border-bottom-left-radius: ").concat("bottom-left"===e?"50%":0,";\n  border-top-left-radius: ").concat("top-left"===e?"50%":0,";\n  @media screen and (max-width: 600px) {\n    width: 5vw;\n    height: 5vw;\n  }\n")})),W=m.a.div((function(n){var e=n.direction;return"\n  width: 30px;\n  height: 30px;\n  ".concat(I,"\n  display: flex;\n  flex-direction: ").concat("up"===e||"down"===e?"row":"column",";\n  border-top-right-radius: ").concat("right"===e||"up"===e?"50%":0,";\n  border-bottom-right-radius: ").concat("right"===e||"down"===e?"50%":0,";\n  border-bottom-left-radius: ").concat("left"===e||"down"===e?"50%":0,";\n  border-top-left-radius: ").concat("left"===e||"up"===e?"50%":0,";\n  align-items: center;\n  justify-content: space-around;\n  @media screen and (max-width: 600px) {\n    width: 5vw;\n    height: 5vw;\n  }\n")})),B=m.a.div((function(n){var e=n.direction,t=n.opacity;return"\n  width: 30px;\n  height: 30px;\n  ".concat(I,"\n  display: flex;\n  border-top-right-radius: ").concat("left"===e||"down"===e?"50%":0,";\n  border-bottom-right-radius: ").concat("left"===e||"up"===e?"50%":0,";\n  border-bottom-left-radius: ").concat("right"===e||"up"===e?"50%":0,";\n  border-top-left-radius: ").concat("right"===e||"down"===e?"50%":0,";\n  opacity: ").concat(t,";\n  @media screen and (max-width: 600px) {\n    width: 5vw;\n    height: 5vw;\n  }\n")})),D=m.a.div((function(n){var e=n.direction;return"\n  width: 5px;\n  height: 5px;\n  border-radius: 50%;\n  background-color: white;\n  display: flex;\n  align-items: ".concat("down"===e?"flex-end":"up"===e?"flex-start":"center",";\n  justify-content: ").concat("right"===e?"flex-end":"left"===e?"flex-start":"center",";\n  @media screen and (max-width: 600px) {\n    width: 3px;\n    height: 3px;\n  }\n")})),H=m.a.div(A()),J=function(n){var e=n.snake,t=n.food,o=n.foodPosition,i=n.direction,c=n.tailAppearing,d=Object(r.useState)(1),s=Object(l.a)(d,2),f=s[0],b=s[1],m=Object(r.useState)(null),w=Object(l.a)(m,2),x=w[0],v=w[1];return u((function(){f<1&&b(f+.1)}),x),Object(r.useEffect)((function(){c&&(b(0),v(100))}),[c]),a.a.createElement(P,null,Array.from(Array(289).keys()).map((function(n){return a.a.createElement(M,{key:n,number:n},e[e.length-1]===n?a.a.createElement(W,{direction:h(i,e[e.length-1],e[e.length-2])},a.a.createElement(D,{direction:h(i,e[e.length-1],e[e.length-2])},a.a.createElement(H,null)),a.a.createElement(D,{direction:h(i,e[e.length-1],e[e.length-2])},a.a.createElement(H,null))):e[0]===n?a.a.createElement(B,{direction:p(e[1],e[0]),opacity:f}):e.includes(n)?a.a.createElement(L,{corner:g(e,n)}):n===o&&t)})))};function R(){var n=Object(b.a)(["\n  font-size: 24px;\n  margin: 5px;\n  background-color: white;\n  border: 3px solid orange;\n  border-radius: 10px;\n  color: orange;\n  font-weight: bold;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  @media screen and (max-width: 600px) {\n    width: 12vw;\n    height: 12vw;\n  }\n"]);return R=function(){return n},n}function T(){var n=Object(b.a)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n"]);return T=function(){return n},n}function G(){var n=Object(b.a)(["\n  @media screen and (min-width: 600px) {\n    display: none;\n  }\n"]);return G=function(){return n},n}var K=m.a.div(G()),N=m.a.div(T()),U=m.a.button(R()),Y=function(n){var e=n.onClick;return a.a.createElement(K,null,a.a.createElement(N,null,a.a.createElement(U,{onClick:function(){return e({key:"ArrowUp"})}},"\u2191")),a.a.createElement(N,null,a.a.createElement(U,{onClick:function(){return e({key:"ArrowLeft"})}},"\u2190"),a.a.createElement(U,{onClick:function(){return e({key:"ArrowDown"})}},"\u2193"),a.a.createElement(U,{onClick:function(){return e({key:"ArrowRight"})}},"\u2192")))};function $(){var n=Object(b.a)(["\n  margin: 10px;\n  padding: 5px;\n  background-color: orange;\n  border: 4px solid orange;\n  border-radius: 10px;\n  font-size: 18px;\n"]);return $=function(){return n},n}function q(){var n=Object(b.a)(["\n  color: white;\n  margin-top: 0;\n"]);return q=function(){return n},n}function F(){var n=Object(b.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  background-color: blue;\n  padding: 20px;\n  border-radius: 10px;\n"]);return F=function(){return n},n}function Q(){var n=Object(b.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);return Q=function(){return n},n}var V=m.a.div(Q()),X=m.a.div(F()),Z=m.a.h1(q()),_=m.a.button($()),nn=function(n){var e=n.onClose;return a.a.createElement(V,null,a.a.createElement(X,null,a.a.createElement(Z,null,"Game over!"," ",a.a.createElement("span",{role:"img","aria-label":"snake"},"\ud83d\udc0d")),a.a.createElement(_,{onClick:e},"Close")))};function en(){var n=Object(b.a)(["\n  margin: 10px;\n  padding: 5px;\n  background-color: orange;\n  border: 4px solid orange;\n  border-radius: 10px;\n  font-size: 18px;\n  flex-shrink: 0;\n"]);return en=function(){return n},n}function tn(){var n=Object(b.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: blue;\n  padding: 20px;\n  border-radius: 10px;\n  color: white;\n  margin: auto;\n  max-width: 80vw;\n  max-height: 70vh;\n  overflow-y: auto;\n  @media screen and (min-width: 600px) {\n    max-width: 500px;\n  }\n"]);return tn=function(){return n},n}function rn(){var n=Object(b.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);return rn=function(){return n},n}var an=m.a.div(rn()),on=m.a.div(tn()),cn=m.a.button(en()),ln=function(n){var e=n.onClose;return a.a.createElement(an,null,a.a.createElement(on,null,a.a.createElement("h2",null,"How to Play"),a.a.createElement("ul",null,a.a.createElement("li",null,"The aim of the game is to eat as many items of food as possible without bumping into yourself."),a.a.createElement("li",null,"Press Play to start moving, and to change direction use keyboard arrow keys, or the buttons at the bottom of your screen if playing on mobile."),a.a.createElement("li",null,"When you eat a fruit, a new one will appear somewhere else on the grid, your tail will get longer, and your speed will increase."),a.a.createElement("li",null,"If you reach the edge of the grid, the laws of physics will cease to apply and your head will reappear on the opposite side. This can be a good way to avoid bumping into your own tail.")),a.a.createElement(cn,{onClick:e},"Close")))};t(26);var un=function(){var n=Object(r.useState)([137,138,139,140]),e=Object(l.a)(n,2),t=e[0],o=e[1],i=Object(r.useState)("right"),d=Object(l.a)(i,2),p=d[0],g=d[1],h=Object(r.useState)(null),b=Object(l.a)(h,2),m=b[0],w=b[1],x=Object(r.useState)(0),v=Object(l.a)(x,2),j=v[0],y=v[1],O=Object(r.useState)(!1),k=Object(l.a)(O,2),E=k[0],S=k[1],A=Object(r.useState)(!1),z=Object(l.a)(A,2),I=z[0],P=z[1],M=Object(r.useState)(!1),L=Object(l.a)(M,2),W=L[0],B=L[1],D=Object(r.useState)(null),H=Object(l.a)(D,2),R=H[0],T=H[1],G=Object(r.useState)(null),K=Object(l.a)(G,2),N=K[0],U=K[1],$=Object(r.useState)(+(localStorage.getItem("highScore")||0)),q=Object(l.a)($,2),F=q[0],Q=q[1];function V(n){var e=n.key;if(0===e.indexOf("Arrow")){var t=e.replace("Arrow","").toLowerCase();g(t)}}var X=Object(r.useCallback)((function(n){n[n.length-1]===R?(o([n[0]-(n[1]- -1*n[0])].concat(Object(c.a)(n))),P(!0),U(s()),T(f(n)),y(j+10),w((function(n){return n?.98*n:null}))):n.slice(0,n.length-1).includes(n[n.length-1])?(o([137,138,139,140]),g("right"),w(null),T(null),j>F&&(Q(j),localStorage.setItem("highScore",j.toString())),B(!0)):P(!1)}),[R,j,F]);return u((function(){var n=function(n,e){switch(n.shift(),e){case"right":return n[n.length-1]%17===16?[].concat(Object(c.a)(n),[n[n.length-1]-16]):[].concat(Object(c.a)(n),[n[n.length-1]+1]);case"left":return n[n.length-1]%17===0?[].concat(Object(c.a)(n),[n[n.length-1]+16]):[].concat(Object(c.a)(n),[n[n.length-1]-1]);case"down":return 272<=n[n.length-1]&&n[n.length-1]<=288?[].concat(Object(c.a)(n),[n[n.length-1]-272]):[].concat(Object(c.a)(n),[n[n.length-1]+17]);case"up":return 0<=n[n.length-1]&&n[n.length-1]<=16?[].concat(Object(c.a)(n),[n[n.length-1]+272]):[].concat(Object(c.a)(n),[n[n.length-1]-17]);default:return n}}(t,p);o(n)}),m),Object(r.useEffect)((function(){return X(t)}),[t,X]),a.a.createElement("div",{className:"game",role:"button",tabIndex:0,onKeyDown:V},E&&a.a.createElement(ln,{onClose:function(){return S(!1)}}),a.a.createElement(C,{onClick:function(){o([137,138,139,140]),g("right"),y(0),U(s()),T(f(t)),w(500)},score:j,highScore:F,openInstructions:function(){return S(!0)}}),a.a.createElement(J,{snake:t,food:N,foodPosition:R,direction:p,tailAppearing:I}),a.a.createElement(Y,{onClick:V}),W&&a.a.createElement(nn,{onClose:function(){return B(!1)}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(un,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()}))}},[[16,1,2]]]);
//# sourceMappingURL=main.361002a1.chunk.js.map