(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{133:function(e,t,n){e.exports=n(267)},134:function(e,t,n){},267:function(e,t,n){"use strict";n.r(t);n(134);var a=n(0),r=n.n(a),o=n(17),i=n.n(o),c=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function l(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}var s=n(7),u=n(8),m=n(11),h=n(10),d=n(12),p=n(21),E=n(275),f=n(111),b=n.n(f)()(),v=n(112),g=n(13),w=n(277),O=n(276),y=n(274),j=n(30),C=n.n(j),M=n(57),S=n.n(M),A=n(26),T=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(m.a)(this,Object(h.a)(t).call(this,e))).handleClick=n.handleClick.bind(Object(A.a)(Object(A.a)(n))),n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"handleClick",value:function(){console.log("trying to click profile"),this.props.showTeamMemberModal(this.props.member)}},{key:"render",value:function(){var e=this.props.member,t=e.imgUrl||"data:image/png;base64,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";return r.a.createElement("div",{className:"team-member-profile-thumbnail"},r.a.createElement("button",{className:"btn-floating waves-effect waves-light profile-image-circle-mini",onClick:this.handleClick},r.a.createElement("img",{"aria-label":"Click to view this team member",alt:"Team Member Profile Button",style:{width:"100%"},src:t})),r.a.createElement("div",null,e.name))}}]),t}(a.Component),k=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];switch((arguments.length>1?arguments[1]:void 0).type){case"SHOW_MEMBER_MODAL":return!0;case"HIDE_MEMBER_MODAL":return!1;default:return e}},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_MEMBER_MODAL_DETAILS":return t.member;default:return e}},D=Object(p.b)(function(e){return{}},function(e){return{showTeamMemberModal:function(t){e({type:"SET_MEMBER_MODAL_DETAILS",member:t}),e({type:"SHOW_MEMBER_MODAL"})}}})(T),x=n(130),I=n(84),B=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.show,n=e.member,a=e.onClose;return r.a.createElement(x.a,{"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",open:t,onClose:a},r.a.createElement("div",null,r.a.createElement(I.a,{variant:"h6",id:"modal-title"},n&&n.name),r.a.createElement(I.a,{variant:"subtitle1",id:"simple-modal-description"},"Duis mollis, est non commodo luctus, nisi erat porttitor ligula.")))}}]),t}(a.Component),R=(Object(p.b)(function(e){return{show:e.IsMemberModalShowing,member:e.MemberModalDetails}},function(e){return{onClose:function(){return e({type:"HIDE_MEMBER_MODAL"})}}})(B),function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.upcomingEvents,t=[{name:"Beau",imgUrl:"https://media.licdn.com/dms/image/C4E03AQHmST5cxGP1UQ/profile-displayphoto-shrink_100_100/0?e=1545868800&v=beta&t=NAYTKw76_EKqs_Y4JlG2zP2myB0WzRPMCgWzUtVwXAU",phoneNumber:"302-750-3719",email:"beauHerndon@gmail.com",fax:"302-479-0369",description:"Nerd",address:"4354A Maryland Ave, Saint Louis MO 63108"},{name:"Beau",phoneNumber:"302-750-3719",email:"beauHerndon@gmail.com",fax:"302-479-0369",description:"Nerd",address:"4354A Maryland Ave, Saint Louis MO 63108"},{name:"Beau",imgUrl:"https://i.dailymail.co.uk/i/pix/2017/09/05/10/43ED20A700000578-4853460-What_happened_On_Tuesday_Beau_Ryan_took_to_Instagram_to_showcase-a-70_1504605472199.jpg",phoneNumber:"302-750-3719",email:"beauHerndon@gmail.com",fax:"302-479-0369",description:"Nerd",address:"4354A Maryland Ave, Saint Louis MO 63108"}];return r.a.createElement("div",null,"Chewie, we're home....",r.a.createElement("div",{className:"team-dashboard-container"},t?r.a.createElement("div",null,t.map(function(e){return r.a.createElement(D,{member:e})})):r.a.createElement("div",null,r.a.createElement(C.a,{size:50}),r.a.createElement("div",null," Loading Team... "))),r.a.createElement(S.a,null),r.a.createElement("div",{className:"upcoming-events-container"},e?r.a.createElement("div",null,"Event goes here"):r.a.createElement("div",null,r.a.createElement(C.a,{size:50}),r.a.createElement("div",null," Loading Upcoming Events... "))))}}]),t}(a.Component)),G=Object(p.b)(function(e){return{team:e.Team,upcomingEvents:e.UpcomingEvents}},null)(R),L=n(9),Q=n.n(L),J=n(127),F=n(123),q=n.n(F),U=n(120),W=n.n(U),K=n(121),P=n.n(K),X=n(126),z=n.n(X),H=n(83),Y=n.n(H),_=n(85),V=n.n(_),Z=n(122),$=n.n(Z),ee=n(125),te=n.n(ee),ne=n(124),ae=n.n(ne),re=n(35),oe=n.n(re),ie=n(33),ce=n.n(ie),le=n(34),se=n.n(le),ue=n(114),me=n.n(ue),he=n(117),de=n.n(he),pe=n(119),Ee=n.n(pe),fe=n(115),be=n.n(fe),ve=n(116),ge=n.n(ve),we=n(118),Oe=n.n(we),ye=n(273),je=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return this.props.contacts?r.a.createElement("div",null,"Show Contacts Here...."):r.a.createElement("div",null,r.a.createElement(C.a,{size:50}),r.a.createElement("div",null,"Loading Contacts..."))}}]),t}(a.Component),Ce=Object(p.b)(function(e){return{contacts:e.Contacts}},null)(je),Me=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return this.props.docs?r.a.createElement("div",null,"Show Docs Here...."):r.a.createElement("div",null,r.a.createElement(C.a,{size:50}),r.a.createElement("div",null,"Loading Docs..."))}}]),t}(a.Component),Se=Object(p.b)(function(e){return{docs:e.Docs}},null)(Me),Ae=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return this.props.forms?r.a.createElement("div",null,"Show Forms Here...."):r.a.createElement("div",null,r.a.createElement(C.a,{size:50}),r.a.createElement("div",null,"Loading Forms..."))}}]),t}(a.Component),Te=Object(p.b)(function(e){return{forms:e.Forms}},null)(Ae),ke=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,"This content is coming soon to a page near you!")}}]),t}(a.Component),Ne="/home",De="/docs",xe="/forms",Ie="/contacts",Be="/calendar",Re="/favorites",Ge=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(m.a)(this,Object(h.a)(t).call(this,e))).state={open:!1},n.handleDrawerOpen=function(){n.setState({open:!0})},n.handleDrawerClose=function(){n.setState({open:!1})},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,n=e.theme;return r.a.createElement("div",{className:t.root},r.a.createElement(W.a,{position:"absolute",className:Q()(t.appBar,this.state.open&&t.appBarShift)},r.a.createElement(P.a,{disableGutters:!this.state.open},r.a.createElement(V.a,{color:"inherit","aria-label":"Open drawer",onClick:this.handleDrawerOpen,className:Q()(t.menuButton,this.state.open&&t.hide)},r.a.createElement($.a,null)),r.a.createElement(Y.a,{variant:"title",color:"inherit",noWrap:!0},"LifeBinder"))),r.a.createElement(q.a,{variant:"permanent",classes:{paper:Q()(t.drawerPaper,!this.state.open&&t.drawerPaperClose)},open:this.state.open},r.a.createElement("div",{className:t.toolbar},"Logo could go here?",r.a.createElement(V.a,{onClick:this.handleDrawerClose},"rtl"===n.direction?r.a.createElement(ae.a,null):r.a.createElement(te.a,null))),r.a.createElement(S.a,null),r.a.createElement(z.a,null,r.a.createElement("div",{className:"menu-items"},r.a.createElement(ye.a,{to:Ne},r.a.createElement(ce.a,{button:!0},r.a.createElement(se.a,null,r.a.createElement(me.a,null)),r.a.createElement(oe.a,{primary:"Home"}))),r.a.createElement(ye.a,{to:Ie},r.a.createElement(ce.a,{button:!0},r.a.createElement(se.a,null,r.a.createElement(be.a,null)),r.a.createElement(oe.a,{primary:"My Contacts"}))),r.a.createElement(ye.a,{to:De},r.a.createElement(ce.a,{button:!0},r.a.createElement(se.a,null,r.a.createElement(ge.a,null)),r.a.createElement(oe.a,{primary:"My Documents"}))),r.a.createElement(ye.a,{to:xe},r.a.createElement(ce.a,{button:!0},r.a.createElement(se.a,null,r.a.createElement(de.a,null)),r.a.createElement(oe.a,{primary:"My Forms"}))),r.a.createElement(ye.a,{to:Be},r.a.createElement(ce.a,{button:!0},r.a.createElement(se.a,null,r.a.createElement(Oe.a,null)),r.a.createElement(oe.a,{primary:"My Calendar"}))),r.a.createElement(ye.a,{to:Re},r.a.createElement(ce.a,{button:!0},r.a.createElement(se.a,null,r.a.createElement(Ee.a,null)),r.a.createElement(oe.a,{primary:"Favorites"})))))),r.a.createElement("main",{className:t.content},r.a.createElement("div",{className:t.toolbar}),r.a.createElement("div",{className:"app-body"},r.a.createElement(E.a,{history:b},r.a.createElement(w.a,null,r.a.createElement(O.a,{path:Ne,component:G}),r.a.createElement(O.a,{path:Ie,component:Ce}),r.a.createElement(O.a,{path:De,component:Se}),r.a.createElement(O.a,{path:xe,component:Te}),r.a.createElement(O.a,{path:Be,component:ke}),r.a.createElement(O.a,{path:Re,component:ke}),r.a.createElement(y.a,{to:Ne}))))))}}]),t}(r.a.Component),Le=Object(J.withStyles)(function(e){return{root:{flexGrow:1,height:"100vh",zIndex:1,overflow:"hidden",position:"relative",display:"flex"},appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginLeft:12,marginRight:36},hide:{display:"none"},drawerPaper:{position:"relative",whiteSpace:"nowrap",width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerPaperClose:Object(g.a)({overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:7*e.spacing.unit},e.breakpoints.up("sm"),{width:9*e.spacing.unit}),toolbar:Object(v.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar),content:{flexGrow:1,backgroundColor:e.palette.background.default}}},{withTheme:!0})(Ge),Qe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_MY_FORMS":return t.forms;default:return e}},Je=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_MY_DOCS":return t.docs;default:return e}},Fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_MY_TEAM":return t.team;default:return e}},qe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_MY_CONTACTS":return t.contacts;default:return e}},Ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_UPCOMING_EVENTS":return t.upcomingEvents;default:return e}},We=function(e){fetch("www.google.com").then(function(t){e({type:"SET_MY_CONTACTS",contacts:t.body})}).catch(function(e){})},Ke=function(e){fetch("www.google.com").then(function(t){e({type:"SET_MY_TEAM",team:t.body})}).catch(function(e){})},Pe=function(e){fetch("www.google.com").then(function(t){e({type:"SET_MY_DOCS",docs:t.body})}).catch(function(e){})},Xe=function(e){fetch("www.google.com").then(function(t){e({type:"SET_MY_FORMS",forms:t.body})}).catch(function(e){})},ze=Object(p.b)(function(e){return{}},function(e){return{fetchDocs:function(){return e(Pe)},fetchForms:function(){return e(Xe)},fetchTeam:function(){return e(Ke)},fetchContacts:function(){return e(We)}}})(Le),He=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.store;return r.a.createElement(p.a,{store:e},r.a.createElement(E.a,{history:b},r.a.createElement(ze,null)))}}]),t}(r.a.Component),Ye=n(128),_e=n(31),Ve=n(129),Ze=Object(_e.createStore)(Object(_e.combineReducers)({Contacts:qe,Docs:Je,Forms:Qe,IsMemberModalShowing:k,MemberModalDetails:N,Team:Fe,UpcomingEvents:Ue}),Object(Ye.composeWithDevTools)(Object(_e.applyMiddleware)(Ve.a)));i.a.render(r.a.createElement(He,{store:Ze}),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");c?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):l(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):l(e)})}}()}},[[133,2,1]]]);
//# sourceMappingURL=main.f8736533.chunk.js.map