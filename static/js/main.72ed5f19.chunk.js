(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{45:function(e,t,a){e.exports=a(62)},50:function(e,t,a){},52:function(e,t,a){},57:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(10),l=a.n(c),m=(a(50),a(19)),o=a(20),i=a(25),s=a(23),u=(a(51),a(65)),p=a(66),E=(a(52),""),d=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).resetTimer=function(){n.setState({time:0})},n.startTimer=function(){!0===n.state.isstopped?E=setInterval((function(){n.setState({time:n.state.time+1})}),1e3):clearInterval(E),n.setState({isstopped:!n.state.isstopped})},n.state={time:0,isstopped:!0},n}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",{id:"head"},this.state.time,"s"),r.a.createElement("button",{className:"stop",onClick:this.startTimer},this.state.isstopped?"START":"STOP"),r.a.createElement("button",{className:"reset",onClick:this.resetTimer},"RESET"))}}]),a}(r.a.Component);var h=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(d,null))},b=a(27),f=a(3),v=a(33),O=a(44),j=a(35),k=a(16),C=a(22),y=(a(57),{nc:[]});var g=Object(C.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_COMMENT":return Object(j.a)(Object(j.a)({},e),{},{nc:[].concat(Object(O.a)(e.nc),[t.data])});default:return e}})),w={addComment:function(e,t){return{type:"ADD_COMMENT",data:{name:e,comment:t}}}};var T=Object(k.b)((function(e){return{nc:e.nc}}))((function(e){var t=e.nc.map((function(e,t){return r.a.createElement("li",{key:t},r.a.createElement("h3",null,e.name),r.a.createElement("p",null,e.comment))}));return r.a.createElement("ol",{id:"comments"},t)})),N=Object(k.b)(null,w)((function(e){var t=Object(n.useState)(""),a=Object(v.a)(t,2),c=a[0],l=a[1],m=Object(n.useState)(""),o=Object(v.a)(m,2),i=o[0],s=o[1];function u(e){var t=e.target;switch(t.name){case"name":l(t.value);break;case"cmt":s(t.value)}}return r.a.createElement("div",{className:"inputbox"},r.a.createElement("input",{type:"text",name:"name",onChange:u,value:c,id:"nm",placeholder:"Enter Your Name",autoComplete:"Off"}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("textarea",{name:"cmt",onChange:u,value:i,id:"cmt",placeholder:"Enter Your Comment"}),r.a.createElement("br",null),r.a.createElement("input",{type:"submit",value:"Post",onClick:function(t){""!==i&&""!==c&&(e.addComment(c,i),l(""),s("")),t.preventDefault()},id:"submit"}))}));var S=function(){return r.a.createElement("div",{className:"Comment"},r.a.createElement("h1",null,"Comments"),r.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Poppins",rel:"stylesheet"}),r.a.createElement(k.a,{store:g},r.a.createElement(N,null),r.a.createElement(T,null)))},A=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,null,r.a.createElement(u.a,{bg:"dark",variant:"dark"},r.a.createElement(u.a.Brand,{href:"#home"},"Apps"),r.a.createElement(p.a,{className:"mr-auto"},r.a.createElement(p.a.Link,{as:b.b,to:"/timer"},"Okay"),r.a.createElement(p.a.Link,{as:b.b,to:"/com"},"Comments"))),r.a.createElement(f.c,null,r.a.createElement(f.a,{path:"/timer"},r.a.createElement(h,null)),r.a.createElement(f.a,{path:"/com"},r.a.createElement(S,null)))))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[45,1,2]]]);
//# sourceMappingURL=main.72ed5f19.chunk.js.map