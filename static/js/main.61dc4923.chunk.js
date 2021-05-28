(this.webpackJsonpemployees=this.webpackJsonpemployees||[]).push([[0],{10:function(e,t,r){e.exports={birthdayList:"BirthdayList_birthdayList__2lQID",birthdayList__title:"BirthdayList_birthdayList__title__11wOJ",birthdayList__list:"BirthdayList_birthdayList__list__rbxNL"}},14:function(e,t,r){e.exports={employeeInfo:"EmployeeInfo_employeeInfo__1Bfak",employeeInfo__name:"EmployeeInfo_employeeInfo__name__EwjSR"}},15:function(e,t,r){e.exports={EmployeeBirthdayInfo:"EmployeeBirthdayInfo_EmployeeBirthdayInfo__EVyiT",EmployeeBirthdayInfo__text:"EmployeeBirthdayInfo_EmployeeBirthdayInfo__text__1i8M8"}},28:function(e,t,r){e.exports={container:"Employees_container__2KHpw"}},37:function(e,t,r){},59:function(e,t,r){},60:function(e,t,r){"use strict";r.r(t);var o=r(1),n=r.n(o),s=r(6),i=r.n(s),a=r(3),l=(r(37),r(4)),c=r(25),p=r(26),m=r(16),u={employees:[],error:null,isLoading:!1},y=Object(l.combineReducers)({employees:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_EMPLOYEES":return{employees:t.payload.employees,error:null,isLoading:!1};case"UPDATE_EMPLOYEE":return{employees:e.employees.map((function(e){return e.id===t.payload.id?Object(m.a)(Object(m.a)({},e),{},{isActive:t.payload.value}):e})),error:null,isLoading:!1};case"LOADING":return{employees:[],error:null,isLoading:!0};case"ERROR":return{employees:[],isLoading:!1,error:t.payload.error};default:return e}}}),d=[p.a],_=Object(c.composeWithDevTools)(l.applyMiddleware.apply(void 0,d)),h=Object(l.createStore)(y,_),j=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],f=r(14),b=r.n(f),O=r(0);function x(e){var t=e.employee,r=Object(a.b)();function o(e){var o="true"===e.target.value;r(function(e,t){return{type:"UPDATE_EMPLOYEE",payload:{id:e,value:t}}}(t.id,o))}return Object(O.jsxs)("li",{className:b.a.employeeInfo,children:[Object(O.jsxs)("p",{className:b.a.employeeInfo__name,children:[t.lastName," ",t.firstName]}),Object(O.jsxs)("form",{children:[Object(O.jsx)("input",{type:"radio",id:"".concat(t.id,"False"),name:t.id,value:"false",defaultChecked:!t.isActive,onChange:o}),Object(O.jsx)("label",{htmlFor:"".concat(t.id,"False"),children:"Not active"}),Object(O.jsx)("br",{}),Object(O.jsx)("input",{type:"radio",id:"".concat(t.id,"True"),name:t.id,value:"true",defaultChecked:!!t.isActive,onChange:o}),Object(O.jsx)("label",{htmlFor:"".concat(t.id,"True"),children:"Active"})]})]})}var L=r(7),v=r.n(L);function E(e){var t=e.letter,r=e.employeesList,o=void 0===r?[]:r;return Object(O.jsxs)("li",{className:v.a.employeeGroup,children:[Object(O.jsx)("h3",{className:v.a.employeeGroup__letter,children:t.toUpperCase()}),!o.length&&Object(O.jsx)("p",{children:"----"}),0!==o.length&&Object(O.jsx)("ul",{className:v.a.employeeGroup__list,children:o.map((function(e){return Object(O.jsx)(x,{employee:e},e.id)}))})]})}var N=r(8),B=r.n(N);function I(e){var t=e.employees;return Object(O.jsxs)("section",{className:B.a.employeesList,children:[Object(O.jsx)("h2",{className:B.a.employeesList__title,children:"Employees"}),Object(O.jsx)("ul",{className:B.a.employeesList__list,children:j.map((function(e){return Object(O.jsx)(E,{letter:e,employeesList:t[e]},e)}))})]})}var g=r(5),G=r.n(g);var M=function(e){return e.employees.employees},A=function(e){return e.employees.isLoading},R=function(e){return e.employees.error},w=r(27),k=r.n(w);function C(e){return 0===Object.keys(e).length}var D=r(15),S=r.n(D);function T(e){var t=e.employee;return Object(O.jsx)("li",{className:S.a.EmployeeBirthdayInfo,children:Object(O.jsxs)("p",{className:S.a.EmployeeBirthdayInfo__text,children:[t.lastName," ",t.firstName," -"," ",G()(t.dob).format("D MMMM, YYYY")," year"]})})}var Y=r(9),P=r.n(Y);function F(e){var t=e.month,r=e.employeesList;return r?Object(O.jsxs)("li",{className:P.a.employeesBirthdayGroup,children:[Object(O.jsx)("h3",{className:P.a.employeesBirthdayGroup__month,children:t}),0!==r.length&&Object(O.jsx)("ul",{className:P.a.employeesBirthdayGroup__list,children:r.map((function(e){return Object(O.jsx)(T,{employee:e},e.id)}))})]}):null}var J=r(10),U=r.n(J);function Q(e){var t=e.employees,r=function(){for(var e=[],t=G()().month(),r=G()(),o=t;o<t+12;o++)e.push(r.month(o).format("MMMM"));return e}(),o=function(e){return e.reduce((function(e,t){if(t.isActive){var r=G()(t.dob).format("MMMM");e[r]?e[r].push(t):e[r]=[t]}return e}),{})}(t);return Object(O.jsxs)("section",{className:U.a.birthdayList,children:[Object(O.jsx)("h2",{className:U.a.birthdayList__title,children:"Employees Birthday"}),C(o)&&Object(O.jsx)("h3",{children:"Employees List is empty"}),!C(o)&&Object(O.jsx)("ul",{className:U.a.birthdayList__list,children:r.map((function(e){return Object(O.jsx)(F,{month:e,employeesList:null===o||void 0===o?void 0:o[e]},e)}))})]})}var q=r(28),z=r.n(q);function H(){var e=Object(a.c)(M),t=Object(a.c)(A),r=Object(a.c)(R),n=Object(a.b)();if(Object(o.useEffect)((function(){n((function(e){e({type:"LOADING"}),k.a.get("https://yalantis-react-school-api.yalantis.com/api/task0/users").then((function(t){var r=t.data.map((function(e){return e.isActive=!1,e})).sort((function(e,t){return e.lastName.localeCompare(t.lastName)}));e(function(e){return{type:"SET_EMPLOYEES",payload:{employees:e}}}(r))})).catch((function(t){return e(function(e){return{type:"ERROR",payload:{error:e}}}(t.message))}))}))}),[n]),r)return Object(O.jsx)("h2",{children:r});if(t)return Object(O.jsx)("h2",{children:"Loading..."});var s=function(e){return e.reduce((function(e,t){var r=t.lastName[0].toLowerCase();return e[r]?e[r].push(t):e[r]=[t],e}),{})}(e);return Object(O.jsxs)("main",{className:z.a.container,children:[Object(O.jsx)(I,{employees:s}),Object(O.jsx)(Q,{employees:e})]})}r(58),r(59);var K=function(){return Object(O.jsx)("div",{className:"App",children:Object(O.jsx)(H,{})})};i.a.render(Object(O.jsx)(a.a,{store:h,children:Object(O.jsx)(n.a.StrictMode,{children:Object(O.jsx)(K,{})})}),document.getElementById("root"))},7:function(e,t,r){e.exports={employeeGroup:"EmployeesLetterGroup_employeeGroup__J1a4j",employeeGroup__letter:"EmployeesLetterGroup_employeeGroup__letter__LRtmU"}},8:function(e,t,r){e.exports={employeesList:"EmployeesList_employeesList__2Q2Ap",employeesList__title:"EmployeesList_employeesList__title__1cIIS",employeesList__list:"EmployeesList_employeesList__list__3piRc"}},9:function(e,t,r){e.exports={employeesBirthdayGroup:"EmployeesBirhtdayGroup_employeesBirthdayGroup__1fD-p",employeesBirthdayGroup__month:"EmployeesBirhtdayGroup_employeesBirthdayGroup__month__oCyBt"}}},[[60,1,2]]]);
//# sourceMappingURL=main.61dc4923.chunk.js.map