(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{24:function(e,t,a){},25:function(e,t,a){},26:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),i=a(16),s=a.n(i),r=(a(24),a(2)),o=(a(25),a(5)),l=a(6),j=a(8),h=a(7),b=a(9),d=(a(26),a(0)),m=function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"about-body animationImg",children:[Object(d.jsxs)("div",{className:"about-me",children:[Object(d.jsx)("h2",{children:"About me..."}),Object(d.jsx)("p",{children:"My name is Victor, I'm 24 years old and I'm Brazilian, I live in Juiz de Fora-MG. In my free time I like to play football and read. I love everything related to technology and I love coding. I study web development at Trybe and I have skills in many technologies and programming languages."})]}),Object(d.jsxs)("div",{className:"my-skills",children:[Object(d.jsx)("h2",{children:"My Skills..."}),Object(d.jsxs)("div",{className:"list-skills",children:[Object(d.jsx)("p",{id:"js",className:"animationJS",children:"Java Script"}),Object(d.jsx)("p",{id:"html",className:"animationHtml",children:"HTML"}),Object(d.jsx)("p",{id:"react",className:"animationReact",children:"React"}),Object(d.jsx)("p",{id:"redux",className:"animationRedux",children:"Redux"}),Object(d.jsx)("p",{id:"hooks",className:"animationHooks",children:"React Hooks"}),Object(d.jsx)("p",{id:"bootstrap",className:"animationBoots",children:"Bootstrap"}),Object(d.jsx)("p",{id:"css",className:"animationCss",children:"CSS"}),Object(d.jsx)("p",{id:"git",className:"animationGit",children:"GitHub"}),Object(d.jsx)("p",{id:"scrun",className:"animationGit",children:"Scrun"}),Object(d.jsx)("p",{id:"kanban",className:"animationGit",children:"Kanban"})]})]}),Object(d.jsx)(b.b,{to:"/portfolio/myprojects",children:Object(d.jsxs)("button",{type:"button",class:"cta",children:[Object(d.jsx)("span",{children:"MY PROJECTS"}),Object(d.jsxs)("svg",{width:"13px",height:"10px",viewBox:"0 0 13 10",children:[Object(d.jsx)("path",{d:"M1,5 L11,5"}),Object(d.jsx)("polyline",{points:"8 1 12 5 8 9"})]})]})})]})}}]),a}(n.Component),p=a(19),x=a(11),O=(a(36),function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={name:"",email:"",message:""},n.handleChane=n.handleChane.bind(Object(x.a)(n)),n.handleDesabled=n.handleDesabled.bind(Object(x.a)(n)),n}return Object(l.a)(a,[{key:"handleChane",value:function(e){var t=e.target;this.setState(Object(p.a)({},t.name,t.value))}},{key:"handleDesabled",value:function(){var e=this.state,t=e.name,a=e.email,n=e.message;return""===t||t.length<2||(""===n||n.length<3||(""===a||a.length<7))}},{key:"render",value:function(){var e=this;return Object(d.jsxs)("div",{className:"body-contact animationImg",children:[Object(d.jsx)("h1",{children:"Send me a message!"}),Object(d.jsxs)("form",{action:"https://api.staticforms.xyz/submit",method:"post",children:[Object(d.jsxs)("div",{className:"name-email",children:[Object(d.jsx)("input",{type:"hidden",name:"accessKey",value:"2fbb72c6-5663-424f-8e4f-8d724819e45a"}),Object(d.jsx)("input",{type:"hidden",name:"redirectTo",value:"https://victor160997.github.io/portfolio/"}),Object(d.jsx)("label",{htmlFor:"input-name",children:Object(d.jsx)("input",{type:"text",name:"name",placeholder:"Name",onChange:function(t){return e.handleChane(t)}})}),Object(d.jsx)("label",{htmlFor:"input-email",children:Object(d.jsx)("input",{type:"text",name:"email",placeholder:"E-mail",onChange:function(t){return e.handleChane(t)}})})]}),Object(d.jsxs)("div",{className:"text-submit",children:[Object(d.jsx)("label",{htmlFor:"input-text",children:Object(d.jsx)("textarea",{name:"message",placeholder:"Message",onChange:function(t){return e.handleChane(t)}})}),Object(d.jsxs)("button",{type:"submit",class:"cta",disabled:this.handleDesabled(),children:[Object(d.jsx)("span",{children:"Submit"}),Object(d.jsxs)("svg",{width:"13px",height:"10px",viewBox:"0 0 13 10",children:[Object(d.jsx)("path",{d:"M1,5 L11,5"}),Object(d.jsx)("polyline",{points:"8 1 12 5 8 9"})]})]})]})]})]})}}]),a}(n.Component)),u=(a(37),function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(d.jsxs)("header",{className:"header-hm",children:[Object(d.jsx)(b.b,{to:"/portfolio",className:"title-link",children:Object(d.jsx)("h2",{children:"Victor's Portfolio"})}),Object(d.jsxs)("nav",{className:"nav-hm",children:[Object(d.jsx)("a",{href:"https://github.com/victor160997",target:"_blank",rel:"noreferrer",children:Object(d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"25",height:"25",fill:"currentColor",color:"white",class:"bi bi-github",viewBox:"0 0 16 16",children:Object(d.jsx)("path",{d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"})})}),Object(d.jsx)("a",{href:"https://www.linkedin.com/in/victor-mendon%C3%A7a-915519216/",target:"_blank",rel:"noreferrer",children:Object(d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"25",height:"25",fill:"currentColor",color:"white",class:"bi bi-linkedin",viewBox:"0 0 16 16",children:Object(d.jsx)("path",{d:"M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"})})}),Object(d.jsx)("a",{href:"https://api.whatsapp.com/send?phone=5532984772121&text=Ol%C3%A1%20Victor%2C%20Gostaria%20de%20saber%20mais%20a%20respeito%20do%20seu%20trabalho%20%3AD",target:"_blank",rel:"noreferrer",children:Object(d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"25",height:"25",fill:"currentColor",color:"white",class:"bi bi-whatsapp",viewBox:"0 0 16 16",children:Object(d.jsx)("path",{d:"M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"})})}),Object(d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"25",height:"25",fill:"currentColor",color:"white",class:"bi bi-envelope-fill",viewBox:"0 0 16 16",children:Object(d.jsx)("path",{d:"M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"})})]})]})}}]),a}(n.Component)),v=(a(38),function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"title-image-body animationDown",children:[Object(d.jsx)("h1",{children:"Hi, my name is Victor! I'm a full stack developer, come see my work!"}),Object(d.jsx)("img",{src:"https://media-exp1.licdn.com/dms/image/C4E03AQERYDcvf4FHYw/profile-displayphoto-shrink_800_800/0/1625498861613?e=1637193600&v=beta&t=rIVTC0AQ7A30O3XqHKNk713FthL_dGC1OeoCxb2FndI",alt:"foto do victor"})]})}}]),a}(n.Component)),f=(a(39),function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(u,{}),Object(d.jsxs)("section",{className:"body-home-page",children:[Object(d.jsx)(v,{}),Object(d.jsx)(m,{})]}),Object(d.jsx)(O,{})]})}}]),a}(n.Component)),g=a.p+"static/media/wallet.2ecea8c8.gif",y=a.p+"static/media/pomodoro.90b969f3.gif",w=a.p+"static/media/trivia.a13b1606.gif",C=a.p+"static/media/appRecipes.eb439715.gif",k=(a(40),function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(u,{}),Object(d.jsxs)("div",{className:"container animationPr",target:"_blank",rel:"noreferrer",children:[Object(d.jsx)("a",{href:"https://victor160997.github.io/Projeto-App-de-receitas/",target:"_blank",rel:"noreferrer",children:Object(d.jsxs)("div",{className:"box",children:[Object(d.jsx)("img",{src:C,alt:"Projeto Pomodoro"}),Object(d.jsx)("span",{children:"Recipes App"})]})}),Object(d.jsx)("a",{href:"https://github.com/victor160997/project-game-trivia",target:"_blank",rel:"noreferrer",children:Object(d.jsxs)("div",{className:"box1",children:[Object(d.jsx)("img",{src:w,alt:"Projeto Pomodoro"}),Object(d.jsx)("span",{children:"Trivia's Game"})]})}),Object(d.jsx)("a",{href:"https://victor160997.github.io/my-pomodoro.app/",target:"_blank",rel:"noreferrer",children:Object(d.jsxs)("div",{className:"box",children:[Object(d.jsx)("img",{src:y,alt:"Projeto Pomodoro"}),Object(d.jsx)("span",{children:"Pomodor"})]})}),Object(d.jsx)("a",{href:"https://github.com/victor160997/project-wallet/",target:"_blank",rel:"noreferrer",children:Object(d.jsxs)("div",{className:"box1",children:[Object(d.jsx)("img",{src:g,alt:"Projeto trybe wallet"}),Object(d.jsx)("span",{children:"Trybe Wallet"})]})})]})]})}}]),a}(n.Component));var N=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)(r.c,{children:[Object(d.jsx)(r.a,{exact:!0,path:"/portfolio",component:f}),Object(d.jsx)(r.a,{exact:!0,path:"/portfolio/myprojects",component:k})]})})},I=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,42)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,i=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),i(e),s(e)}))};s.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(b.a,{children:Object(d.jsx)(N,{})})}),document.getElementById("root")),I()}},[[41,1,2]]]);
//# sourceMappingURL=main.71337b4d.chunk.js.map