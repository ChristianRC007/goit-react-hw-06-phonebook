(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{26:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(4),i=n.n(r),s=n(10),o=n(11),l=n(13),u=n(12),b=(n(26),n(1)),d=function(e){var t=e.children;return Object(b.jsx)("div",{className:"Container",children:t})},m=n(18),j=n(5),h="contact/add",p="contact/delete",f="contact/changeFilter",O=n(40),x=function(e){var t=e.name,n=e.number;return{type:h,payload:{id:Object(O.a)(),name:t,number:n}}},v=function(e){return{type:p,payload:e}},_=function(e){return{type:f,payload:e}},g=(n(31),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={name:"",number:""},e.handleInputChange=function(t){e.setState(Object(m.a)({},t.currentTarget.name,t.currentTarget.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state),e.setState({name:"",number:""})},e}return Object(o.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("form",{className:"form",onSubmit:this.handleSubmit,children:[Object(b.jsxs)("label",{className:"form__lable",children:[Object(b.jsx)("span",{className:"form__lable__text",children:"Name"}),Object(b.jsx)("input",{className:"form__input",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:this.state.name,onChange:this.handleInputChange})]}),Object(b.jsxs)("label",{className:"form__lable",children:[Object(b.jsx)("span",{className:"form__lable__text",children:"Number"}),Object(b.jsx)("input",{className:"form__input",type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:this.state.number,onChange:this.handleInputChange})]}),Object(b.jsx)("button",{className:"form__button",type:"submit",children:"Add contact"})]})}}]),n}(c.Component)),y=Object(j.b)(null,(function(e){return{onSubmit:function(t){return e(x(t))}}}))(g),N=n(41),C=n(39),k=(n(32),function(e,t){var n=t.toLowerCase();return e.filter((function(e){return e.name.toLowerCase().includes(n)}))}),w=Object(j.b)((function(e){var t=e.phonebook,n=t.contacts,c=t.filter;return{contacts:k(n,c)}}),(function(e){return{onDeleteContact:function(t){return e(v(t))}}}))((function(e){var t=e.contacts,n=e.onDeleteContact;return Object(b.jsx)(N.a,{component:"ul",className:"contact-list",children:t.map((function(e){var t=e.id,c=e.name,a=e.number;return Object(b.jsx)(C.a,{timeout:250,classNames:"dub",unmountOnExit:!0,children:Object(b.jsxs)("li",{className:"contact-list__item",children:[Object(b.jsx)("p",{className:"contact-list__item__name",children:c}),Object(b.jsx)("p",{className:"contact-list__item__number",children:a}),Object(b.jsx)("button",{type:"button",onClick:function(){return n(t)},children:Object(b.jsx)("svg",{height:"365.696pt",viewBox:"0 0 365.696 365.696",width:"365.696pt",children:Object(b.jsx)("path",{d:"m243.1875 182.859375 113.132812-113.132813c12.5-12.5 12.5-32.765624 0-45.246093l-15.082031-15.082031c-12.503906-12.503907-32.769531-12.503907-45.25 0l-113.128906 113.128906-113.132813-113.152344c-12.5-12.5-32.765624-12.5-45.246093 0l-15.105469 15.082031c-12.5 12.503907-12.5 32.769531 0 45.25l113.152344 113.152344-113.128906 113.128906c-12.503907 12.503907-12.503907 32.769531 0 45.25l15.082031 15.082031c12.5 12.5 32.765625 12.5 45.246093 0l113.132813-113.132812 113.128906 113.132812c12.503907 12.5 32.769531 12.5 45.25 0l15.082031-15.082031c12.5-12.503906 12.5-32.769531 0-45.25zm0 0"})})})]},t)},t)}))})})),A=(n(33),Object(j.b)((function(e){return{value:e.phonebook.filter,isAppeared:e.phonebook.contacts.length}}),(function(e){return{onChange:function(t){return e(_(t.target.value))}}}))((function(e){var t=e.value,n=e.onChange,c=e.isAppeared;return Object(b.jsx)(C.a,{in:c>1,timeout:200,classNames:"pop",unmountOnExit:!0,children:Object(b.jsxs)("label",{className:"filter",children:[Object(b.jsx)("span",{children:"Find contacts by name"}),Object(b.jsx)("input",{className:"filter__input",type:"text",value:t,onChange:n})]})})}))),S=(n(34),function(e){var t=e.isExist;return Object(b.jsx)(C.a,{in:t,timeout:250,classNames:"fade",unmountOnExit:!0,children:Object(b.jsx)("div",{className:"notification",children:Object(b.jsx)("p",{children:"This contact is already exist!"})})})}),E=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={isExist:!1},e}return Object(o.a)(n,[{key:"render",value:function(){return Object(b.jsxs)(d,{children:[Object(b.jsx)("h1",{className:"title",children:"Phonebook"}),Object(b.jsx)(S,{isExist:this.state.isExist}),Object(b.jsx)(y,{}),Object(b.jsx)("h2",{children:"Contacts"}),Object(b.jsx)(A,{}),Object(b.jsx)(w,{})]})}}]),n}(c.Component),z=n(6),D=n(19),I=n(20),T=[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],B=Object(z.combineReducers)({contacts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0,n=t.type,c=t.payload;switch(n){case h:return[].concat(Object(I.a)(e),[c]);case p:return e.filter((function(e){return e.id!==c}));default:return e}},filter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,n=t.type,c=t.payload;switch(n){case f:return c;default:return e}}}),J=Object(z.combineReducers)({phonebook:B}),R=Object(z.createStore)(J,Object(D.composeWithDevTools)());n(35),n(36);i.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(j.a,{store:R,children:Object(b.jsx)(E,{})})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.52ca4632.chunk.js.map