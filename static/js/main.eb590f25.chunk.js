(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{104:function(n,e,t){"use strict";t.r(e);var o,r,i,c,a,d,s,b,l,h,j,u,p,f,x,g=t(2),O=t.n(g),m=t(40),v=t.n(m),k=t(57),w=t(50),y=t(84),S=t(8),T=t(9),z=t.p+"static/media/background.428df1ed.jpg",C=S.d.body(o||(o=Object(T.a)(["\n  position: relative;\n  width: 100%;\n  height: 100vh;\n  overflow-y: hidden;\n  background: ",";\n"])),z),I=S.d.section(r||(r=Object(T.a)(["\n  background: ",";\n  // background: red;\n  height: 100vh;\n  width: 100vw;\n"])),(function(n){return n.theme.body})),M=t(3),J=function(){return Object(M.jsx)(I,{id:"header",children:"asd"})},F=t(74),H=t(59),L=S.d.nav(i||(i=Object(T.a)(["\n  position: fixed;\n  bottom: 7px;\n  left: 50%;\n  transform: translate(-50%, 0);\n  background: ",";\n  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);\n  backdrop-filter: blur(4px);\n  -webkit-backdrop-filter: blur(4px);\n  border-radius: 10px;\n  border: 1px solid ",";\n  display: flex;\n  align-items: center;\n  z-index: 2;\n"])),(function(n){return n.theme.navbar}),(function(n){return n.theme.navbarborder})),N=Object(S.c)(c||(c=Object(T.a)(["\n  font-size: 50px;\n  color: black;\n"]))),E=Object(S.d)(H.a)(a||(a=Object(T.a)(["\n  ",";\n"])),N),B=Object(S.d)(H.b)(d||(d=Object(T.a)(["\n  ",";\n"])),N),G=t(60),P=S.d.div(s||(s=Object(T.a)([""]))),q=Object(S.c)(b||(b=Object(T.a)(["\n  font-size: 50px;\n  transition: all 1s ease;\n  color: ",";\n"])),(function(n){return n.theme.icon})),A=Object(S.d)(G.b)(l||(l=Object(T.a)(["\n  ",";\n  //   color: #fff;\n"])),q),D=Object(S.d)(G.a)(h||(h=Object(T.a)(["\n  ","\n"])),q),K=function(n){var e=n.theme,t=n.toggleTheme;return Object(M.jsx)(P,{onClick:t,children:"light"===e?Object(M.jsx)(A,{}):Object(M.jsx)(D,{})})},Q=function(n){var e=n.theme,t=n.toggleTheme;return Object(M.jsxs)(L,{children:[Object(M.jsx)(F.a,{smooth:!0,to:"/#header",children:Object(M.jsx)(E,{})}),Object(M.jsx)(F.a,{smooth:!0,to:"/#projects",children:Object(M.jsx)(B,{})}),Object(M.jsx)(K,{theme:e,toggleTheme:t})]})},R=[{id:1,header:"Google Maps",content:"HTML",contentTwo:"CSS",contentThree:"JavaScript",contentFour:"mapbox"},{id:2,header:"second",content:"HTML",contentTwo:"CSS",contentThree:"JavaScript",contentFour:"mapbox"},{id:3,header:"third",content:"HTML",contentTwo:"CSS",contentThree:"JavaScript",contentFour:"mapbox"}],U=t(105),V=S.d.section(j||(j=Object(T.a)(["\n  background: ",';\n\n  max-height: 1000vh;\n  min-width: 100vw;\n  display: grid;\n  grid-template-rows: 1fr 1fr;\n  grid-auto-flow: column;\n  gap: 30px;\n  padding: 70px 70px;\n  position: relative;\n  z-index: 4;\n  transition: background 0.3s;\n\n  .title {\n    position: absolute;\n    font-family: "Montserrat", sans-serif;\n    font-size: 50px;\n    top: 0;\n    left: 70px;\n    color: #162936;\n  }\n'])),(function(n){return n.theme.body})),W=Object(S.d)(U.a.div)(u||(u=Object(T.a)(['\n  background: white;\n  color: #000;\n  position: relative;\n  display: block;\n  border-radius: 10px;\n  overflow: hidden;\n\n  &::after {\n    position: absolute;\n    content: "Tap for more information";\n    inset: 0;\n    background-color: #000;\n    background: rgba(0, 0, 0, 0.5);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: #fff;\n    transition: all 0.5s;\n    opacity: 0;\n  }\n\n  .test {\n    width: 100%;\n    height: 100%;\n    position: relative;\n    display: block;\n  }\n\n  &:hover::after {\n    opacity: 1;\n    cursor: pointer;\n  }\n']))),X=t(106),Y=t(107),Z=t(80),$=Object(S.d)(U.a.div)(p||(p=Object(T.a)(["\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  height: 100%;\n  width: 100%;\n  background: #000000e1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 99;\n"]))),_=Object(S.d)(U.a.div)(f||(f=Object(T.a)(["\n  position: relative;\n  width: 80vw;\n  height: 80vh;\n  background: white;\n  border-radius: 20px;\n  // overflow:hidden;\n\n  .test {\n    width: 100%;\n    height: 100%;\n    position: relative;\n    display: block;\n  }\n\n  .back-btn {\n    position: absolute;\n    top: -30px;\n    right: -30px;\n    font-size: 1.5rem;\n    padding: 10px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: 50%;\n    cursor: pointer;\n    background: #fff;\n  }\n\n  .header {\n    color: red;\n    font-size: 20px;\n  }\n"]))),nn=t(89),en=function(n){var e,t=n.id,o=n.expander,r=R.find((function(n){return n.id===parseInt(t)}));return Object(M.jsx)($,(e={exit:{opacity:0,transition:{duration:.15}},onClick:o,initial:{opacity:0},animate:{opacity:1}},Object(Z.a)(e,"exit",{opacity:0,transition:{duration:.15}}),Object(Z.a)(e,"children",Object(M.jsxs)(_,{onClick:function(n){return n.stopPropagation()},layoutId:t,className:"test",children:[Object(M.jsx)("div",{className:"back-btn",onClick:o,children:Object(M.jsx)(nn.a,{})}),Object(M.jsx)(U.a.span,{children:r.header})]},r.id)),e))},tn=function(){var n=Object(g.useState)(!1),e=Object(k.a)(n,2),t=e[0],o=e[1],r=Object(g.useState)(!1),i=Object(k.a)(r,2),c=i[0],a=i[1],d=function(n){!0!==t?(a(n),o(!0)):(a(null),o(!1))};return Object(M.jsx)(X.a,{type:"crossfade",children:Object(M.jsxs)(V,{id:"projects",children:[R.map((function(n){return Object(M.jsx)(W,{layoutId:n.id,onClick:function(){return d(n.id)},className:"test",children:Object(M.jsx)(U.a.span,{children:n.header})},n.id)})),Object(M.jsx)(Y.a,{children:t&&Object(M.jsx)(en,{expander:d,id:c})})]})})},on=Object(S.b)(x||(x=Object(T.a)(["\n* {\n    margin:0;\n    padding: 0;\n    box-sizing: border-box;\n}\nbody {\n    background: ",";\n    min-width: 100%;\n    background-size: cover;\n    -webkit-background-size: cover;\n    -moz-background-size: cover;\n  }\n  section{\n  transition: background .3s ease;\n}\n"])),(function(n){return n.theme.body})),rn={body:"linear-gradient(hsl(210, 29%, 24%), hsl(0, 0%, 10%))",text:"#fff",toggle:"linear-gradient(hsl(210, 78%, 56%), hsl(146, 68%, 55%))",content:"hsl(228, 28%, 20%)",hover:"hsl(228, 28%, 40%)",icon:"#fff",navbar:"hsl(0, 0%, 40%)",navbarborder:"hsl(0,0%, 30%)"},cn={body:"linear-gradient(hsl(210, 29%, 34%), hsl(0, 0%, 20%))",text:"hsl(228, 12%, 44%)",toggle:"linear-gradient(hsl(210, 78%, 56%), hsl(146, 68%, 55%))",content:"hsl(227, 47%, 96%)",hover:"hsl(226, 47%, 90%)",icon:"black",navbar:"hsl(0, 0%, 80%)",navbarborder:"hsl(0,0%, 75%)"},an=function(){var n=Object(g.useState)("dark"),e=Object(k.a)(n,2),t=e[0],o=e[1],r=function(n){window.localStorage.setItem("theme",n),o(n)};Object(g.useEffect)((function(){var n=window.localStorage.getItem("theme");n?o(n):r("dark")}),[]);var i="light"===t?rn:cn;return Object(M.jsxs)(S.a,{theme:i,children:[Object(M.jsx)(on,{}),Object(M.jsxs)(C,{children:[Object(M.jsx)(w.a,{children:Object(M.jsx)(Q,{theme:t,toggleTheme:function(){r("dark"===t?"light":"dark")}})}),Object(M.jsxs)(y.a,{reverseScroll:!0,children:[Object(M.jsx)(J,{}),Object(M.jsx)(tn,{})]})]})]})};v.a.render(Object(M.jsx)(O.a.StrictMode,{children:Object(M.jsx)(an,{})}),document.getElementById("root"))}},[[104,1,2]]]);
//# sourceMappingURL=main.eb590f25.chunk.js.map