(this.webpackJsonpcliente=this.webpackJsonpcliente||[]).push([[0],{43:function(t,e,n){},68:function(t,e,n){"use strict";n.r(e);var a,c,r,o,s,i,l,b=n(0),u=n.n(b),j=n(35),p=n.n(j),d=(n(43),n(8)),O=n(9),m=n(17),f=n(22),h=n(11),x=n.n(h),g=n(18),v=n(12),y=n(19),C=n.n(y),w=n(2),S=n(1),k=O.b.form(a||(a=Object(d.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n"]))),F=function(){var t=Object(w.f)(),e=Object(b.useState)({}),n=Object(v.a)(e,2),a=n[0],c=n[1];Object(b.useEffect)((function(){localStorage.getItem("token")&&t.push("/plataforma")}),[]);var r=function(){var e=Object(g.a)(x.a.mark((function e(n){var c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,e.next=4,C.a.post("http://api.ricosotomayor.com/plataforma/login",{email:a.email,password:a.password});case 4:c=e.sent,localStorage.setItem("token",c.data.token),t.push("/plataforma"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),o=function(t){c(Object(f.a)(Object(f.a)({},a),{},Object(m.a)({},t.target.name,t.target.value)))};return Object(S.jsxs)(k,{onSubmit:r,children:[Object(S.jsxs)("label",{children:["Correo:",Object(S.jsx)("input",{type:"text",name:"email",onChange:o})]}),Object(S.jsxs)("label",{children:["Contrase\xf1a:",Object(S.jsx)("input",{type:"password",name:"password",onChange:o})]}),Object(S.jsx)("input",{type:"submit",value:"Entrar"})]})},I=Object(O.a)(c||(c=Object(d.a)(["\n  body {\n    margin: 0;\n    padding: 0;\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n\t\t'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n\t\tsans-serif;\n  }\n"]))),L=n(16),B=O.b.div(r||(r=Object(d.a)(["\n\tmargin-top: 30px;\n"]))),E=O.b.div(o||(o=Object(d.a)(["\n\tpadding: 10px;\n"]))),M=O.b.input(s||(s=Object(d.a)(["\n\tmargin-top: 2rem;\n\tmin-width: 315px;\n\tmin-height: 41px;\n\tborder: none;\n\tborder-bottom: 2px solid black;\n\t:hover {\n\t\tborder-bottom: 2px solid blue;\n\t}\n"]))),U=O.b.div(i||(i=Object(d.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\theight: 100%;\n"]))),A=function(){var t=Object(b.useState)([]),e=Object(v.a)(t,2),n=e[0],a=e[1],c=Object(b.useState)([]),r=Object(v.a)(c,2),o=r[0],s=r[1],i=Object(b.useState)([]),l=Object(v.a)(i,2),u=l[0],j=l[1];Object(b.useEffect)(Object(g.a)(x.a.mark((function t(){var e,n;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=localStorage.getItem("token"),t.prev=1,t.next=4,C.a.get("http://api.ricosotomayor.com/plataforma/usuarios",{headers:{Authorization:"Basic ".concat(e)}});case 4:n=t.sent,a(n.data.Mensaje),j(n.data.Mensaje),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[1,9]])}))),[]);return Object(S.jsxs)(U,{children:[Object(S.jsx)("div",{children:Object(S.jsx)(M,{onChange:function(t){s(t.target.value);var e=n.filter((function(t){var e=" ".concat(t.nombre," ");if("string"==typeof e)return e.strip().toLocaleLowerCase().includes(o.toLocaleLowerCase())}));j(e)},type:"text",placeholder:"Buscar usuario"})}),Object(S.jsx)(B,{children:u.map((function(t){return Object(S.jsxs)(E,{children:[Object(S.jsxs)("p",{children:["Nombre: ",t.nombre]}),Object(S.jsxs)("p",{children:["Usuario: CONAGUA",t.nombreConagua]}),Object(S.jsxs)("p",{children:["Contrase\xf1a: ",t.passwordConagua]})]},t._id)}))})]})},D=O.b.div(l||(l=Object(d.a)(["\n\theight: 100vh;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n"])));var N=function(){return Object(S.jsx)(L.a,{children:Object(S.jsxs)(D,{children:[Object(S.jsx)(I,{}),Object(S.jsxs)(w.c,{children:[Object(S.jsx)(w.a,{exact:!0,path:"/",component:F}),Object(S.jsx)(w.a,{exact:!0,path:"/plataforma",component:A})]})]})})},J=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,69)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,r=e.getLCP,o=e.getTTFB;n(t),a(t),c(t),r(t),o(t)}))};p.a.render(Object(S.jsx)(u.a.StrictMode,{children:Object(S.jsx)(N,{})}),document.getElementById("root")),J()}},[[68,1,2]]]);
//# sourceMappingURL=main.9298482b.chunk.js.map