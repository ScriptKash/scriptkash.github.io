(this.webpackJsonpmiweb=this.webpackJsonpmiweb||[]).push([[0],{83:function(e,a,t){e.exports=t(94)},88:function(e,a,t){},94:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),r=t(8),o=t.n(r),l=(t(88),t(27)),c=t(11),s=t(35),m=t(37),d=t(116),g=t(136),p=t(12),u=t(132),h=t(134),b=t(118),E=t(119),f=t(120),v=t(121),k=t(133),y=t(138),C=t(135),S=t(123),x="#000",w="#141414",j="#0178FF",A="#0009be",I="#e3a000",R="#FD014C",O="#FFFFFF",z=t(61),D=t.n(z),N=t(62),T=t.n(N),P=t(63),B=t.n(P),M=t(64),F=t.n(M),L=t(65),W=t.n(L),K=t(66),G=t.n(K),H=t(67),J=t.n(H),V=t(69),U=t.n(V),q=Object(d.a)((function(e){return Object(g.a)({root:{flexGrow:1},menuButton:{marginRight:e.spacing(2),outline:"none"},title:{flexGrow:1,color:O,fontWeight:800,textTransform:"uppercase"},logo:{borderRadius:360,width:50},menu:{padding:5,transition:"all ease .20s",cursor:"pointer","&:hover":{transition:"all ease .20s",backgroundColor:Object(p.b)(A,.5),borderRadius:10}},menuActive:{padding:5,cursor:"pointer",backgroundColor:Object(p.b)(A,.5),borderRadius:10,color:A,border:"2px solid ".concat(A)},menuSocials:{padding:5,cursor:"pointer","&:hover":{backgroundColor:"#000",borderRadius:10}},drawerPaper:{padding:10,backgroundColor:w,backgroundPosition:"top center"},anchorLeft:{width:300}})})),Q=function(e){var a=e.children,t=e.pageActive,n=e.loading,r=e.desktop,o=e.handleChangePage,c=e.toggleDrawer,d=e.positionDrawer,g=e.setDrawer,p=e.drawer,x=q(),j=[{name:"Home",icon:i.a.createElement(D.a,null),url:"/"},{name:"Experience",icon:i.a.createElement(T.a,null),url:"/experience"},{name:"Skills",icon:i.a.createElement(B.a,null),url:"/skills"},{name:"Certificates",icon:i.a.createElement(F.a,null),url:"/certificates"},{name:"Projects",icon:i.a.createElement(W.a,null),url:"/projects"}],A=[{name:"LinkedIn",url:"https://www.linkedin.com/in/scriptkash/",icon:i.a.createElement(G.a,null)},{name:"GitHub",url:"https://github.com/ScriptKash",icon:i.a.createElement(J.a,null)}],I=function(e){g(Object(m.a)(Object(m.a)({},p),{},Object(s.a)({},d,!1))),o(e)},R=function(e){window.open(e,"_blank","noopener")};return i.a.createElement(i.a.Fragment,null,r?i.a.createElement(u.a,{display:"flex",width:"100%"},i.a.createElement(u.a,{flexDirection:"column",height:"100vh",bgcolor:w,textAlign:"center",display:"flex",justifyContent:"space-between",p:1,style:{borderBottomRightRadius:10}},i.a.createElement(u.a,{mt:3,onClick:function(){return o(0)}},i.a.createElement(l.b,{to:"/"},i.a.createElement("img",{src:"./assets/images/logo.png",className:x.logo,alt:"Logo"}))),i.a.createElement(u.a,null,j.map((function(e,a){return i.a.createElement(l.b,{key:e.name,to:e.url,style:{color:O}},i.a.createElement(h.a,{arrow:!0,placement:"right",title:e.name},i.a.createElement(u.a,{onClick:function(){return o(a)},display:"relative",mb:4,className:t===a?x.menuActive:x.menu},i.a.createElement(u.a,null,e.icon))))}))),i.a.createElement(u.a,null,A.map((function(e){return i.a.createElement(u.a,{onClick:function(){return R(e.url)},key:e.name,display:"relative",mb:2,className:x.menuSocials},i.a.createElement(h.a,{arrow:!0,placement:"right",title:e.name},i.a.createElement(u.a,null,e.icon)))})))),n?i.a.createElement("div",{id:"loader",className:"loader-container"},i.a.createElement("div",{className:"flex"},i.a.createElement("div",{className:"loader"})),i.a.createElement("div",{className:"load-text"},"Loading...")):i.a.createElement(u.a,{width:"100%",position:"relative"},a)):i.a.createElement(i.a.Fragment,null,n?i.a.createElement("div",{id:"loader",className:"loader-container"},i.a.createElement("div",{className:"flex"},i.a.createElement("div",{className:"loader"})),i.a.createElement("div",{className:"load-text"},"Loading...")):i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:x.root},i.a.createElement(b.a,{style:{height:60,backgroundColor:w},position:"fixed"},i.a.createElement(E.a,null,i.a.createElement(f.a,{onClick:c("left",!0,"principal-menu"),edge:"start",className:x.menuButton,color:"inherit","aria-label":"menu"},i.a.createElement(U.a,null)),i.a.createElement(l.b,{to:"/",style:{textDecoration:"none"}},i.a.createElement(v.a,{onClick:function(){return o(0)},variant:"body1",className:x.title},"Fernando.GG")),i.a.createElement(u.a,{width:"100%",display:"flex",justifyContent:"flex-end"},A.map((function(e){return i.a.createElement(u.a,{onClick:function(){return R(e.url)},key:e.name,mr:2,style:{cursor:"pointer"}},i.a.createElement(u.a,null,e.icon))})))))),i.a.createElement(u.a,{mt:"60px"},a),i.a.createElement(k.a,{classes:{paper:x.drawerPaper,paperAnchorLeft:x.anchorLeft},anchor:"left",open:p[d],onClose:c(d,!1)},i.a.createElement(u.a,null,i.a.createElement(u.a,{textAlign:"center",mt:3,mb:3,onClick:function(){return I(0)}},i.a.createElement(l.b,{to:"/"},i.a.createElement("img",{src:"./assets/images/logo.png",style:{width:100,borderRadius:360},alt:"Logo"}))),j.map((function(e,a){return i.a.createElement(l.b,{key:e.name,to:e.url,style:{color:O,textDecoration:"none"}},i.a.createElement(y.a,null,i.a.createElement(C.a,{onClick:function(){return I(a)},className:t===a?x.menuActive:x.menu},i.a.createElement(S.a,null,e.icon),i.a.createElement(v.a,{style:{fontWeight:700}},e.name))))})))))))},Y=t(124),_=t(122),X=Object(n.lazy)((function(){return Promise.all([t.e(2),t.e(4)]).then(t.bind(null,412))})),Z=function(e){var a=e.desktop,t=[{character:"/assets/images/parallax/ryze-min.png",background:"/assets/images/parallax/background.jpg"},{character:"/assets/images/parallax/batman-min.png",background:"/assets/images/parallax/background.jpg"},{character:"/assets/images/parallax/deadpool-min.png",background:"/assets/images/parallax/background.jpg"},{character:"/assets/images/parallax/spider-min.png",background:"/assets/images/parallax/background.jpg"}],r=t[Math.floor(Math.random()*t.length)];return i.a.createElement(i.a.Fragment,null,a?i.a.createElement(i.a.Fragment,null,i.a.createElement(n.Suspense,{fallback:""},i.a.createElement(X,{zIndex:-1})),i.a.createElement(u.a,{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",zIndex:10},i.a.createElement(Y.a,{container:!0,alignItems:"center",justify:"center"},i.a.createElement(Y.a,{item:!0,xs:12,md:3},i.a.createElement(n.Suspense,{fallback:""},i.a.createElement(_.a,{timeout:500,in:!0,disableStrictModeCompat:!0},i.a.createElement(u.a,{textAlign:"center",mr:2},i.a.createElement("img",{style:{width:"100%",maxWidth:300,borderRadius:360,border:"5px solid ".concat(A),backgroundColor:Object(p.b)(A,.5)},src:"./assets/images/me-min.png",alt:"Fernando Brice\xf1o"}))))),i.a.createElement(Y.a,{item:!0,xs:12,sm:6,md:6,lg:4},i.a.createElement(_.a,{timeout:500,in:!0,disableStrictModeCompat:!0},i.a.createElement(u.a,null,i.a.createElement(v.a,{variant:a?"h3":"h6",component:"h1"},"I'm Fernando,"),i.a.createElement(v.a,{variant:a?"h3":"h6",component:"h2"},"Software Engineer"),i.a.createElement(v.a,{variant:"h6",style:{color:Object(p.b)(O,.6)},component:"h3"},"Frontend Developer"),i.a.createElement(u.a,{mb:1,mt:3},i.a.createElement(v.a,{component:"p",variant:"body2",style:{fontWeight:600}},"I'm ",i.a.createElement("span",{className:"about-bold"},"Fernando Brice\xf1o"),", a Software Engineer from"," ",i.a.createElement("span",{className:"about-bold"},"Costa Rica"),", who loves and is passionate about technology and video games. Trained to solve problems with different solutions using programming skills.")),i.a.createElement(v.a,{component:"p",variant:"body2",style:{fontWeight:600}},"I have experience in"," ",i.a.createElement("span",{className:"about-bold"},"frontend")," and"," ",i.a.createElement("span",{className:"about-bold"},"backend")," technologies"))))),i.a.createElement(n.Suspense,{fallback:""},i.a.createElement(u.a,{height:"100%",width:"100%",position:"absolute",zIndex:-1,bgcolor:Object(p.b)(w,.6)}),i.a.createElement(u.a,{height:"100vh",width:"100%",textAlign:"center",position:"absolute",zIndex:-2,style:{backgroundImage:"url(./assets/images/parallax/background.jpg)"}}),i.a.createElement(u.a,{height:"100vh",width:"100%",position:"absolute",zIndex:-2,className:"parallax-el",style:{backgroundImage:"url(".concat(r.character,")"),backgroundSize:"cover"}})))):i.a.createElement(i.a.Fragment,null,i.a.createElement(n.Suspense,{fallback:""},i.a.createElement(X,{zIndex:1})),i.a.createElement(u.a,{style:{backgroundImage:"url(./assets/images/parallax/background.jpg)"},display:"flex",alignItems:"center",justifyContent:"center",height:"94vh",p:2},i.a.createElement(Y.a,{container:!0,justify:"center",alignItems:"center"},i.a.createElement(Y.a,{item:!0,xs:12,md:3},i.a.createElement(_.a,{timeout:500,in:!0,disableStrictModeCompat:!0},i.a.createElement(u.a,{textAlign:"center"},i.a.createElement("img",{style:{width:"100%",maxWidth:150,borderRadius:360,border:"5px solid ".concat(A),backgroundColor:Object(p.b)(A,.5)},src:"./assets/images/me-min.png",alt:"Fernando Brice\xf1o"})))),i.a.createElement(Y.a,{item:!0,xs:12,md:9},i.a.createElement(_.a,{timeout:500,in:!0,disableStrictModeCompat:!0},i.a.createElement(u.a,{textAlign:"center"},i.a.createElement(v.a,{variant:a?"h2":"h5",style:{fontWeight:800}},"I'm Fernando,"),i.a.createElement(v.a,{variant:a?"h2":"h5",style:{fontWeight:800}},"Software Engineer"),i.a.createElement(v.a,{variant:"h6",style:{color:Object(p.b)(O,.6)}},"Frontend Developer"))),i.a.createElement(_.a,{timeout:500,in:!0,disableStrictModeCompat:!0},i.a.createElement(u.a,{mt:3,marginX:5},i.a.createElement(u.a,{mb:1},i.a.createElement(v.a,{component:"p",variant:"body2",style:{fontWeight:600}},"I'm ",i.a.createElement("span",{className:"about-bold"},"Fernando Brice\xf1o"),", a Software Engineer from"," ",i.a.createElement("span",{className:"about-bold"},"Costa Rica"),", who loves and is passionate about technology and video games. Trained to solve problems with different solutions using programming skills.")),i.a.createElement(v.a,{component:"p",variant:"body2",style:{fontWeight:600}},"I have experience in"," ",i.a.createElement("span",{className:"about-bold"},"frontend")," and"," ",i.a.createElement("span",{className:"about-bold"},"backend")," technologies"))))))))},$=t(137),ee=t(125),ae=t(126),te=t(127),ne=[{time:"2020 - Present",title:"Frontend Developer @ Gamanza",description:"Realization of different UI components and views for information management in a CRM system.",image:"./assets/images/gamanza.png"},{time:"2018 - Present",title:"Co-Founder & CTO @ Torneos.GG",description:"In charge of the technology area. I am also the frontend lead.",image:"./assets/images/tgg.png"},{time:"2020 | 11 months",title:"Full Stack Developer @ UNA",description:"Assistant student for the realization of a platform for the management and control of ASADAS, a project carried out with HIDROCEC-UNA.",image:"./assets/images/una.png"},{time:"2020 | 4 months",title:"Full Stack Developer @ PANGEA LIVING",description:"I made some systems related to the reservation of rooms and also in the administrative system (control of rooms, reservations, etc). I worked as a Full Stack.",image:"./assets/images/pangea.png"},{time:"2019 - 2020 | 17 months",title:"ASADA-SOP (University Project)",description:"Using digital transformation, a web platform was created to manage the different processes of an ASADA (Associations of the Communal Aqueduct and Sewer Systems).",image:"./assets/images/asadasop.png"}],ie=function(e){var a=e.handleChangePage,t=e.desktop;return Object(n.useEffect)((function(){a(1)}),[]),i.a.createElement(i.a.Fragment,null,i.a.createElement(u.a,{width:"100%",height:"100vh",textAlign:"center",position:"absolute",className:"parallax-el",style:{backgroundImage:"url(./assets/images/parallax/figures.png)",backgroundSize:"contain",opacity:.7}}),i.a.createElement($.a,{direction:"top",in:!0,mountOnEnter:!0,unmountOnExit:!0},i.a.createElement(u.a,{position:"relative",mt:t?15:10},i.a.createElement(ee.a,{maxWidth:"lg"},i.a.createElement(u.a,{mb:2},i.a.createElement(v.a,{variant:"h2"},"Experience")),i.a.createElement(u.a,null,i.a.createElement(Y.a,{container:!0,spacing:2},ne.map((function(e){var a=e.time.includes("Present");return i.a.createElement(Y.a,{key:e.title,item:!0,xs:12,md:4},i.a.createElement(u.a,{clone:!0,height:"100%"},i.a.createElement(ae.a,{style:{backgroundColor:a?Object(p.b)(A,.5):w,border:"3px solid ".concat(a?A:w),borderRadius:15}},i.a.createElement(te.a,null,i.a.createElement(v.a,{style:{color:Object(p.b)(O,.6)},gutterBottom:!0},e.time),i.a.createElement(v.a,{variant:"h6",component:"h2",style:{color:O}},e.title),i.a.createElement(u.a,{minHeight:70},i.a.createElement(v.a,{variant:"body2",component:"p",style:{color:Object(p.b)(O,.8)}},e.description)),i.a.createElement(u.a,{textAlign:"center"},i.a.createElement("img",{src:e.image,style:{width:130},alt:e.title}))))))}))))))))},re=t(17),oe=t(20),le=t(128),ce=function(){var e=Object(n.useState)(!1),a=Object(re.a)(e,2),t=a[0],i=a[1],r=Object(n.useState)(0),o=Object(re.a)(r,2),l=o[0],c=o[1],s=Object(oe.a)(),m=Object(le.a)(s.breakpoints.up("md"));Object(n.useEffect)((function(){t&&setTimeout((function(){return i(!1)}),1e3)}),[t]);return{loading:t,desktop:m,pageActive:l,handleLoading:function(e){i(e)},handleChangePage:function(e){c(e)}}},se=t(129),me=[{techologie:"HTML",skill:"ADVANCED",img:"./assets/images/technologies/html-min.png"},{techologie:"CSS",skill:"ADVANCED",img:"./assets/images/technologies/css-min.png"},{techologie:"JAVASCRIPT",skill:"INTERMEDIATE",img:"./assets/images/technologies/js-min.png"},{techologie:"NODEJS",skill:"BASIC",img:"./assets/images/technologies/nodejs-min.png"},{techologie:"REACTJS",skill:"INTERMEDIATE",img:"./assets/images/technologies/react-min.png"},{techologie:"REDUX",skill:"INTERMEDIATE",img:"./assets/images/technologies/redux-min.png"},{techologie:"TYPESCRIPT",skill:"INTERMEDIATE",img:"./assets/images/technologies/ts-min.png"},{techologie:"PHP",skill:"INTERMEDIATE",img:"./assets/images/technologies/php-min.png"},{techologie:"LARAVEL",skill:"INTERMEDIATE",img:"./assets/images/technologies/laravel-min.png"},{techologie:"ASP .NET",skill:"BASIC",img:"./assets/images/technologies/asp-min.png"},{techologie:"BOOTSTRAP",skill:"ADVANCED",img:"./assets/images/technologies/bootstrap-min.png"},{techologie:"SQL SERVER",skill:"INTERMEDIATE",img:"./assets/images/technologies/sqlserver-min.png"},{techologie:"MYSQL",skill:"INTERMEDIATE",img:"./assets/images/technologies/mysql-min.png"},{techologie:"MONGODB",skill:"BASIC",img:"./assets/images/technologies/mongodb-min.png"},{techologie:"GIT",skill:"INTERMEDIATE",img:"./assets/images/technologies/git-min.png"},{techologie:"MS AZURE DEVOPS",skill:"INTERMEDIATE",img:"./assets/images/technologies/azuredevops-min.png"},{techologie:"GRAPHQL",skill:"BASIC",img:"./assets/images/technologies/graphql-min.png"}],de=[{techologie:"PHOTOSHOP",skill:"INTERMEDIATE",img:"./assets/images/technologies/photoshop-min.png"},{techologie:"ADOBE PREMIERE",skill:"INTERMEDIATE",img:"./assets/images/technologies/premiere-min.jpg"}],ge=[{skill:"PROACTIVE"},{skill:"TEAMWORK"},{skill:"LEADERSHIP"},{skill:"GOOD COMMUNICATION"},{skill:"CRITICAL THINKING"},{skill:"POSITIVE ACTITUDE"},{skill:"CREATIVITY"}],pe=t(70),ue=t.n(pe),he=t(71),be=t.n(he),Ee=t(72),fe=t.n(Ee),ve=Object(d.a)((function(e){return Object(g.a)({divider:{height:170,background:"url(/assets/images/wave.png)",backgroundSize:"cover"},devSkills:{transition:"all ease .30s",cursor:"pointer",width:100,height:100,borderRadius:360,backgroundColor:Object(p.b)(A,.4),color:A,border:"2px solid ".concat(A),display:"flex",alignItems:"center",justifyContent:"center","&:hover":{transition:"all ease .30s",color:O,backgroundColor:A}},devSkillsActive:{cursor:"pointer",width:100,height:100,borderRadius:360,backgroundColor:A,color:O,border:"2px solid ".concat(A),display:"flex",alignItems:"center",justifyContent:"center"},designSkills:{transition:"all ease .30s",cursor:"pointer",width:100,height:100,borderRadius:360,backgroundColor:Object(p.b)(I,.4),color:I,border:"2px solid ".concat(I),display:"flex",alignItems:"center",justifyContent:"center","&:hover":{transition:"all ease .30s",color:O,backgroundColor:I}},designSkillsActive:{cursor:"pointer",width:100,height:100,borderRadius:360,backgroundColor:I,color:O,border:"2px solid ".concat(I),display:"flex",alignItems:"center",justifyContent:"center"},softSkills:{transition:"all ease .30s",cursor:"pointer",width:100,height:100,borderRadius:360,backgroundColor:Object(p.b)(R,.4),color:R,border:"2px solid ".concat(R),display:"flex",alignItems:"center",justifyContent:"center","&:hover":{transition:"all ease .30s",color:O,backgroundColor:R}},softSkillsActive:{cursor:"pointer",width:100,height:100,borderRadius:360,backgroundColor:R,color:O,border:"2px solid ".concat(R),display:"flex",alignItems:"center",justifyContent:"center"},devBox:{borderRadius:10,width:"100%",textAlign:"center",transition:"all ease .30s",cursor:"default",backgroundColor:Object(p.b)(A,.4),color:A,border:"2px solid ".concat(A),"&:hover":{color:O,backgroundColor:A}},designBox:{borderRadius:10,width:"100%",textAlign:"center",transition:"all ease .30s",cursor:"default",backgroundColor:Object(p.b)(I,.4),color:I,border:"2px solid ".concat(I),"&:hover":{color:O,backgroundColor:I}},softBox:{borderRadius:10,width:"100%",textAlign:"center",transition:"all ease .30s",cursor:"default",backgroundColor:Object(p.b)(R,.4),color:R,border:"2px solid ".concat(R),"&:hover":{color:O,backgroundColor:R}}})})),ke=function(e){e.desktop;var a=e.handleChangePage,t=ve(),r=Object(n.useState)(0),o=Object(re.a)(r,2),l=o[0],c=o[1],s=Object(n.useState)(A),m=Object(re.a)(s,2),d=m[0],g=m[1],p=de,b=ge,E=me.sort((function(e,a){return e.skill>a.skill?1:e.skill<a.skill?-1:0}));Object(n.useEffect)((function(){a(2)}),[]);var f=function(e){c(e)};return Object(n.useEffect)((function(){0===l&&g(A),1===l&&g(I),2===l&&g(R)}),[l]),i.a.createElement(u.a,{height:"100%"},i.a.createElement(u.a,{className:t.divider,style:{backgroundColor:d}}),i.a.createElement(u.a,{p:4},i.a.createElement(Y.a,{container:!0,alignItems:"flex-start",justify:"center",spacing:2},i.a.createElement(Y.a,{item:!0,xs:12,md:4,lg:4},i.a.createElement(u.a,{textAlign:"center"},i.a.createElement(v.a,{variant:"h1",style:{fontWeight:800,textShadow:"4px 4px 0px ".concat(d)}},"Skills")),i.a.createElement(u.a,{display:"flex",mt:2,justifyContent:"center"},i.a.createElement(h.a,{title:"Developer Skills",placement:"top",arrow:!0},i.a.createElement(u.a,{onClick:function(){return f(0)},mr:2,className:0===l?t.devSkillsActive:t.devSkills},i.a.createElement(ue.a,{style:{fontSize:"3rem"}}))),i.a.createElement(h.a,{title:"Designer Skills",placement:"top",arrow:!0},i.a.createElement(u.a,{onClick:function(){return f(1)},mr:2,className:1===l?t.designSkillsActive:t.designSkills},i.a.createElement(be.a,{style:{fontSize:"3rem"}}))),i.a.createElement(h.a,{title:"Soft Skills",placement:"top",arrow:!0},i.a.createElement(u.a,{onClick:function(){return f(2)},className:2===l?t.softSkillsActive:t.softSkills},i.a.createElement(fe.a,{style:{fontSize:"3rem"}}))))),i.a.createElement(Y.a,{item:!0,xs:12,md:8,lg:8},0===l&&i.a.createElement(Y.a,{container:!0,spacing:2},E.map((function(e){return i.a.createElement(Y.a,{key:e.techologie,item:!0,xs:6,sm:4,md:4,lg:2},i.a.createElement(h.a,{title:e.techologie,arrow:!0,placement:"top"},i.a.createElement(se.a,{timeout:500,in:!0,disableStrictModeCompat:!0,className:t.devBox},i.a.createElement(u.a,{position:"relative",height:"100%"},i.a.createElement(u.a,{p:5,textAlign:"center"},i.a.createElement("img",{src:e.img,alt:e.techologie,style:{width:"100%",minWidth:30}})),i.a.createElement(u.a,{style:{borderBottomLeftRadius:6,borderBottomRightRadius:6},position:"absolute",width:"100%",bottom:0,bgcolor:A,color:"#000572"},i.a.createElement(v.a,{variant:"body2",style:{fontWeight:700}},e.skill))))))}))),1===l&&i.a.createElement(Y.a,{container:!0,spacing:2},p.map((function(e){return i.a.createElement(Y.a,{key:e.techologie,item:!0,xs:6,sm:4,md:4,lg:2},i.a.createElement(h.a,{title:e.techologie,arrow:!0,placement:"top"},i.a.createElement(se.a,{timeout:500,in:!0,disableStrictModeCompat:!0,className:t.designBox},i.a.createElement(u.a,{position:"relative",height:"100%"},i.a.createElement(u.a,{p:5,textAlign:"center"},i.a.createElement("img",{src:e.img,alt:e.techologie,style:{width:"100%",minWidth:30}})),i.a.createElement(u.a,{style:{borderBottomLeftRadius:6,borderBottomRightRadius:6},position:"absolute",width:"100%",bottom:0,bgcolor:I,color:"#5b4000"},i.a.createElement(v.a,{variant:"body2",style:{fontWeight:700}},e.skill))))))}))),2===l&&i.a.createElement(Y.a,{container:!0,spacing:2},b.map((function(e){return i.a.createElement(Y.a,{key:e.skill,item:!0,xs:12,sm:4,md:4,lg:2},i.a.createElement(se.a,{timeout:500,in:!0,disableStrictModeCompat:!0,className:t.softBox},i.a.createElement(u.a,{position:"relative",height:"100%"},i.a.createElement(u.a,{p:5,textAlign:"center"},i.a.createElement(v.a,{variant:"body2",style:{fontWeight:700}},e.skill)))))})))))))},ye=t(130),Ce=t(131),Se=[{name:"Curso de Programaci\xf3n B\xe1sica",image:"https://static.platzi.com/media/achievements/1050-bfb74f83-8e2e-4ff7-a66d-77d2c0067908.png",url:"https://platzi.com/@ScriptKash/curso/1050-programacion-basica/diploma/detalle/"},{name:"Curso de Buenas Pr\xe1cticas y Entorno de Desarrollo",image:"https://static.platzi.com/media/achievements/badge-prework-da6b0493-9908-40f3-ad53-f5d330b995b8.png",url:"https://platzi.com/@ScriptKash/curso/1650-prework/diploma/detalle/"},{name:"Curso de Frontend Developer",image:"https://static.platzi.com/media/achievements/badge-frontend-developer-8a49e681-3e22-408d-b886-2f47dfc9953a.png",url:"https://platzi.com/@ScriptKash/curso/1640-frontend-developer/diploma/detalle/"},{name:"Fundamentos de JavaScript",image:"https://static.platzi.com/media/achievements/badge-fundamentos-javascript-61c15bdf-0a83-4aed-8537-b4753e4071e1.png",url:"https://platzi.com/@ScriptKash/curso/1339-fundamentos-javascript/diploma/detalle/"},{name:"Master en JavaScript",image:"./assets/images/udemy.png",url:"https://www.udemy.com/certificate/UC-09DGRHLV/"},{name:"Curso Profesional de JavaScript",image:"https://static.platzi.com/media/achievements/badge-profesional-javascript-13538df2-24ce-433f-9aa6-e34eed608e70.png",url:"https://platzi.com/@ScriptKash/curso/1642-javascript-profesional/diploma/detalle/"},{name:"Curso Pr\xe1ctico de React JS",image:"https://static.platzi.com/media/achievements/badge-react-adec89d0-1c35-4c9c-847e-18c284dc79dd.png",url:"https://platzi.com/@ScriptKash/curso/1651-react-ejs/diploma/detalle/"},{name:"Curso Desarrollo Web Online",image:"https://static.platzi.com/media/achievements/1350-09ddb033-354b-4c0c-84a4-56cbb71d0b08.png",url:"https://platzi.com/@ScriptKash/curso/1350-html5-css3/diploma/detalle/"},{name:"Fundamentos de Ingenier\xeda de Software",image:"https://static.platzi.com/media/achievements/badge-ing-software-2017-18f503fd-36bd-42d8-b1a1-492865659687.png",url:"https://platzi.com/@ScriptKash/curso/1098-ingenieria/diploma/detalle/"},{name:"Curso B\xe1sico de JavaScript",image:"https://static.platzi.com/media/achievements/badge-basicojs-e2ead888-428e-4f55-962c-8894aeaeacda.png",url:"https://platzi.com/@ScriptKash/curso/1814-basico-javascript/diploma/detalle/"},{name:"Curso de PHP con Laravel",image:"https://static.platzi.com/media/achievements/badge-laravel-ed7723f2-1ec9-4e5b-b4b5-ba70548083a5.png",url:"https://platzi.com/@ScriptKash/curso/1467-curso-php-laravel/diploma/detalle/"},{name:"Curso de Asincronismo con JavaScript",image:"https://static.platzi.com/media/achievements/badge-asincronismo-javascript-3f44d51e-209e-4e47-a228-4142d049525c.png",url:"https://platzi.com/@ScriptKash/curso/1789-asincronismo-js/diploma/detalle/"},{name:"Curso de ECMAScript 6+",image:"https://static.platzi.com/media/achievements/badge-ecmascript-6-d48e7bb7-a7a4-416d-a3b4-e11f0b13a229.png",url:"https://platzi.com/@ScriptKash/curso/1815-ecmascript-6/diploma/detalle/"},{name:"Curso de Engineering Management",image:"https://static.platzi.com/media/achievements/badge-eng-management-8aa3f5cb-e16d-4ef6-8ef0-ff244a6ab746.png",url:"https://platzi.com/@ScriptKash/curso/1732-eng-management/diploma/detalle/"},{name:"Curso de React Router y Redux",image:"https://static.platzi.com/media/achievements/badge-react-redux-2ca3c0a5-fc53-437f-bfba-69e9ddd5a803.png",url:"https://platzi.com/@ScriptKash/curso/1652-react-router-redux/diploma/detalle/"},{name:"Curso de Fundamentos de TypeScript",image:"https://static.platzi.com/media/achievements/badge-fundamentos-typescript-de971b70-f004-443a-b3e6-35ad2fb901c7.png",url:"https://platzi.com/@ScriptKash/curso/1869-typescript/diploma/detalle/"},{name:"Curso de Bootstrap",image:"https://static.platzi.com/media/achievements/1331-cda68a62-24e5-464a-95ca-6e5d339c7244.png",url:"https://platzi.com/@ScriptKash/curso/1331-bootstrap/diploma/detalle/"},{name:"Curso Profesional de Git y GitHub",image:"https://static.platzi.com/media/achievements/badge-github-0b729570-934d-47d8-ba6b-610d7f15e0ec.png",url:"https://platzi.com/@ScriptKash/curso/1557-git-github/diploma/detalle/"},{name:"Curso de Ingl\xe9s B\xe1sico: Conversaci\xf3n",image:"https://static.platzi.com/media/achievements/1371-db5ea3c7-4ac9-4b61-b786-9346ebb3fc7f.png",url:"https://platzi.com/@ScriptKash/curso/1371-ingles-conversacion/diploma/detalle/"},{name:"Curso de Ingl\xe9s B\xe1sico: Fundamentos",image:"https://static.platzi.com/media/achievements/badge-basico-ingles-e073f711-763d-4129-badc-5e4baa78b225.png",url:"https://platzi.com/@ScriptKash/curso/1358-ingles-basico/diploma/detalle/"},{name:"Curso de Ingl\xe9s B\xe1sico: Gram\xe1tica",image:"https://static.platzi.com/media/achievements/1370-836f01ea-6748-4c9f-a8e0-ce51c7c28d0b.png",url:"https://platzi.com/@ScriptKash/curso/1370-ingles-gramatica/diploma/detalle/"},{name:"Curso de React.js",image:"https://static.platzi.com/media/achievements/badge-react-2018-afc93257-48af-4e54-acaa-4d0433380f64.png",url:"https://platzi.com/@ScriptKash/curso/1548-react/diploma/detalle/"},{name:"Curso Definitivo de HTML y CSS",image:"https://static.platzi.com/media/achievements/badges-html-css-afa64acb-64a4-486d-96a5-f930fbb7ee32.png",url:"https://platzi.com/@ScriptKash/curso/2008-html-css-2020/diploma/detalle/"},{name:"Curso Profesional de React Hooks",image:"https://static.platzi.com/media/achievements/badge-profesional-react-hooks-6b35d829-af8e-47e6-aef6-e4504db32bc4.png",url:"https://platzi.com/@ScriptKash/curso/2118-react-hooks/diploma/detalle/"},{name:"Curso B\xe1sico de GraphQL",image:"https://static.platzi.com/media/achievements/badge-graphql-2e658b66-c0b9-4b33-8f84-c1b7311be302.png",url:"https://platzi.com/@ScriptKash/curso/1512-graphql/diploma/detalle/"},{name:"Curso de Next.js",image:"https://static.platzi.com/media/achievements/badge-nextjs-2259fc68-f86b-486e-bc09-95311a887985.png",url:"https://platzi.com/@ScriptKash/curso/1991-next/diploma/detalle/"},{name:"Curso de Unit Testing con Jest en React",image:"https://static.platzi.com/media/achievements/badge-unit-testing-jest-react-bb2bcb68-aeb7-4ff3-886e-f04816dfe0a0.png",url:"https://platzi.com/@ScriptKash/curso/1788-jest/diploma/detalle/"}],xe=[{name:"Bachillerato en Ingenier\xeda en Sistemas de Informaci\xf3n",icon:"",url:"",image:"./assets/images/certificados/bachiller.png"},{name:"Diplomado en Programaci\xf3n de Aplicaciones Inform\xe1ticas",icon:"",url:"",image:"./assets/images/certificados/diplomado.png"},{name:"Escuela de JavaScript",icon:"https://static.platzi.com/media/achievements/golden-badge-carrera-javascript-48750f5a-8298-4d64-a06f-53982113c5e2.png",url:"https://platzi.com/@ScriptKash/ruta/100-escuela-javascript/diploma/detalle/",image:"./assets/images/certificados/carrerajs.png"},{name:"Edec\xe1n en el Congreso I Internacional de Ciberseguridad y Sociedades Hiperconectadas",icon:"",url:"",image:"./assets/images/certificados/edecan.png"}],we=Object(d.a)((function(e){return Object(g.a)({divider:{height:170,background:"url(/assets/images/wave.png)",backgroundSize:"cover"},certificate:{marginBottom:5,borderRadius:360,padding:5,transition:"all ease .30s",cursor:"pointer",color:A,display:"flex",alignItems:"center",justifyContent:"center","&:hover":{transition:"all ease .30s",color:O,backgroundColor:w}},certificateActive:{borderRadius:360,padding:5,cursor:"pointer",backgroundColor:Object(p.b)(A,.6),color:O,border:"2px solid ".concat(A),display:"flex",alignItems:"center",justifyContent:"center"},title:{marginBottom:20,"&::before":{content:'""',position:"absolute",width:64,height:4,background:A,top:-10}}})})),je=function(e){var a=e.desktop,t=e.handleChangePage,r=we(),o=Object(n.useState)(0),l=Object(re.a)(o,2),c=l[0],s=l[1],m=Object(n.useState)(!1),d=Object(re.a)(m,2),g=d[0],p=d[1];Object(n.useEffect)((function(){g&&setTimeout((function(){return p(!1)}),500)}),[g]),Object(n.useEffect)((function(){t(3)}),[]);var b=Se[c];return i.a.createElement(i.a.Fragment,null,i.a.createElement(u.a,{className:r.divider,style:{backgroundColor:w}}),i.a.createElement(u.a,{mx:4,mb:4},i.a.createElement(u.a,{mb:4},i.a.createElement(u.a,{position:"relative"},i.a.createElement(u.a,{className:r.title},i.a.createElement(v.a,{variant:a?"h3":"h4",style:{fontWeight:800}},"Main certificates"))),i.a.createElement(Y.a,{container:!0,spacing:1},xe.map((function(e){return i.a.createElement(Y.a,{key:e.name,item:!0,xs:12,md:6,lg:3},i.a.createElement(se.a,{timeout:500,in:!0},i.a.createElement(u.a,{height:"100%"},i.a.createElement(h.a,{arrow:!0,placement:"bottom",title:e.name},i.a.createElement("img",{src:e.image,alt:e.name,style:{width:"100%",borderRadius:10}})))))})))),i.a.createElement(Y.a,{container:!0,alignItems:"flex-start",spacing:1},i.a.createElement(Y.a,{item:!0,xs:12,md:7,lg:7},i.a.createElement(u.a,{position:"relative"},i.a.createElement(u.a,{className:r.title},i.a.createElement(v.a,{variant:a?"h3":"h4",style:{fontWeight:800}},"Other certificates"))),i.a.createElement(Y.a,{container:!0,spacing:1},Se.map((function(e,a){return i.a.createElement(Y.a,{key:e.name,item:!0,xs:4,md:2,lg:2},i.a.createElement(se.a,{timeout:500,in:!0,disableStrictModeCompat:!0},i.a.createElement(u.a,{onClick:function(){return e=a,p(!0),void s(e);var e},height:"100%",textAlign:"center"},i.a.createElement(h.a,{title:e.name,arrow:!0,placement:"top"},i.a.createElement("img",{src:e.image,alt:"Certificado",className:c===a?r.certificateActive:r.certificate,style:{maxWidth:70,minWidth:40}})))))})))),i.a.createElement(Y.a,{item:!0,xs:12,md:5,lg:5},i.a.createElement(u.a,{mb:2},i.a.createElement(se.a,{timeout:500,in:!0},i.a.createElement(v.a,{variant:"h5",style:{fontWeight:700}},b.name))),g?i.a.createElement(u.a,{height:400,display:"flex",justifyContent:"center",alignItems:"center"},i.a.createElement(ye.a,{size:100,style:{color:A}})):i.a.createElement(se.a,{timeout:500,in:!0},i.a.createElement("img",{src:"/assets/images/certificados/".concat(c+1,"-min.png"),alt:b.name,style:{width:"100%",borderRadius:15}})),i.a.createElement(u.a,{mt:2},!g&&i.a.createElement(se.a,{timeout:500,in:!0,disableStrictModeCompat:!0},i.a.createElement(Ce.a,{onClick:function(){return e=b.url,void window.open(e,"_blank","noopener");var e},variant:"contained",color:"primary",style:{backgroundColor:A,fontWeight:700,color:O,outline:"none",borderRadius:20}},"See credential")))))))},Ae=function(){var e=Object(n.useState)(""),a=Object(re.a)(e,2),t=a[0],i=a[1],r=Object(n.useState)(""),o=Object(re.a)(r,2),l=o[0],c=o[1],d=Object(n.useState)({top:!1,left:!1,bottom:!1,right:!1}),g=Object(re.a)(d,2),p=g[0],u=g[1];return{setDrawer:u,toggleDrawer:function(e,a,t){return function(n){("keydown"!==n.type||"Tab"!==n.key&&"Shift"!==n.key)&&(u(Object(m.a)(Object(m.a)({},p),{},Object(s.a)({},e,a))),c(e),i(t))}},positionDrawer:l,typeDrawer:t,drawer:p}},Ie=function(e){e.desktop;var a=e.handleChangePage;return Object(n.useEffect)((function(){a(10)}),[]),i.a.createElement(u.a,{height:"100vh",display:"flex",justifyContent:"center",alignItems:"center",textAlign:"center"},i.a.createElement(u.a,null,i.a.createElement(v.a,{variant:"h3",style:{fontWeight:800}},"Error 404"),i.a.createElement(v.a,{variant:"body1",style:{color:Object(p.b)(O,.5)}},"This page not exists"),i.a.createElement(l.b,{to:"/",style:{textDecoration:"none"}},i.a.createElement(Ce.a,{onClick:function(){return a(0)},variant:"contained",color:"primary",style:{backgroundColor:A,fontWeight:700,color:O,outline:"none",borderRadius:20,marginTop:10}},"Go to home"))))},Re=[{name:"ASADA-SOP",description:"Carry out a digital transformation through a web application that facilitates the processes and control of information in an agile and digital way, managing an inventory control, registration of existing and incoming clients.",image:"./assets/images/proyectos/asada.jpg",technologies:[{name:"Laravel",badge:"primary"},{name:"MySQL",badge:"success"},{name:"Bootstrap",badge:"dark"}]},{name:"PANGEA LIVING",description:"Web system to reserve rooms in a residence made for students in Medell\xedn, Colombia. It provides the facility to reserve the different rooms, without long processes. There is also an administrative system that allows the management of rooms, reservations and customers.",image:"./assets/images/proyectos/pangea.jpg",url:"https://pangealivingmde.com/",technologies:[{name:"ReactJS",badge:"primary"},{name:"MongoDB",badge:"success"},{name:"Ant Design",badge:"dark"}]},{name:"MEDCARE",description:"Website for the management and control of medical appointments. The user can request a medical appointment with a doctor and in a health center. There is an administration system to control it.",image:"./assets/images/proyectos/medcare.jpg",url:"https://github.com/ScriptKash/medcare",technologies:[{name:"Laravel",badge:"primary"},{name:"MySQL",badge:"success"},{name:"Bootstrap",badge:"dark"}]},{name:"FEDERACI\xd3N ASADAS ABCT",description:"Web platform that allows managing the different ASADAS of the federation. Management and control of the different services, making processes easier in a technological way. This project was carried out with UNA and HIDROCEC",image:"./assets/images/proyectos/federacion.jpg",technologies:[{name:"Laravel",badge:"primary"},{name:"MySQL",badge:"success"},{name:"Bootstrap",badge:"dark"}]}],Oe=function(e){var a=e.handleChangePage,t=function(e){window.open(e,"_blank","noopener")};return Object(n.useEffect)((function(){a(4)}),[]),i.a.createElement(u.a,{bgcolor:x,style:{backgroundImage:"linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,1)40%), url(./assets/images/proyectos/fondo-min.jpg)",backgroundSize:"100%",backgroundRepeat:"no-repeat"}},i.a.createElement(ee.a,{maxWidth:"md"},i.a.createElement($.a,{direction:"down",in:!0,mountOnEnter:!0,unmountOnExit:!0},i.a.createElement(u.a,null,i.a.createElement(u.a,{textAlign:"center"},i.a.createElement("img",{src:"./assets/images/proyectos/tgg-min.png",alt:"TorneosGG",style:{width:"100%"}})),i.a.createElement(ae.a,{style:{backgroundColor:A,color:O,padding:10,borderBottomLeftRadius:0,borderBottomRightRadius:0,borderTopRightRadius:20,borderTopLeftRadius:20}},i.a.createElement(te.a,null,i.a.createElement(v.a,{variant:"body1",style:{fontWeight:700}},"Online tournament platform that provides the best experience to all those players who seek to compete with other players around the world. Winning incredible prizes and every day improving their skills in their favorite game.")),i.a.createElement(u.a,{textAlign:"right",mb:2,mr:2},i.a.createElement(Ce.a,{onClick:function(){return t("https://torneos.gg/")},style:{backgroundColor:j,fontWeight:800,color:O,outline:"none",borderRadius:5}},"See project"))),i.a.createElement(u.a,{style:{height:170,background:"url(/assets/images/wave.png)",backgroundSize:"cover",backgroundColor:A}}))),i.a.createElement(Y.a,{container:!0,spacing:1},Re.map((function(e){return i.a.createElement(Y.a,{item:!0,xs:12,md:6},i.a.createElement(se.a,{timeout:500,in:!0,disableStrictModeCompat:!0},i.a.createElement(u.a,{height:"100%"},i.a.createElement("img",{src:e.image,alt:e.name,style:{width:"100%",marginBottom:10,borderRadius:10}}),i.a.createElement(ae.a,{style:{backgroundColor:"transparent",color:O,padding:10,borderBottomLeftRadius:0,borderBottomRightRadius:0}},i.a.createElement(te.a,null,i.a.createElement(v.a,{variant:"h6",style:{fontWeight:700}},e.name),i.a.createElement(v.a,{variant:"body1"},e.description)),i.a.createElement(u.a,{textAlign:"right",mb:2,mr:2},e.url&&i.a.createElement(Ce.a,{onClick:function(){return t(e.url)},style:{backgroundColor:j,fontWeight:800,color:O,outline:"none",borderRadius:5}},"See project"))))))})))))},ze=function(){var e=ce(),a=e.pageActive,t=e.loading,n=e.desktop,r=e.handleLoading,o=e.handleChangePage,s=Ae(),m=s.setDrawer,d=s.toggleDrawer,g=s.positionDrawer,p=s.typeDrawer,u=s.drawer;return i.a.createElement(i.a.Fragment,null,i.a.createElement(l.a,null,i.a.createElement(Q,{pageActive:a,loading:t,desktop:n,handleLoading:r,handleChangePage:o,toggleDrawer:d,positionDrawer:g,typeDrawer:p,drawer:u,setDrawer:m},i.a.createElement(c.c,null,i.a.createElement(c.a,{exact:!0,path:"/"},i.a.createElement(Z,{desktop:n})),i.a.createElement(c.a,{exact:!0,path:"/experience"},i.a.createElement(ie,{desktop:n,handleChangePage:o})),i.a.createElement(c.a,{exact:!0,path:"/skills"},i.a.createElement(ke,{desktop:n,handleChangePage:o})),i.a.createElement(c.a,{exact:!0,path:"/certificates"},i.a.createElement(je,{desktop:n,handleChangePage:o})),i.a.createElement(c.a,{exact:!0,path:"/projects"},i.a.createElement(Oe,{desktop:n,handleChangePage:o})),i.a.createElement(c.a,null,i.a.createElement(Ie,{desktop:n,handleChangePage:o}))))))};o.a.render(i.a.createElement(ze,null),document.getElementById("root"))}},[[83,1,3]]]);
//# sourceMappingURL=main.a0e7e3c7.chunk.js.map