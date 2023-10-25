"use strict";(self.webpackChunkLayer5=self.webpackChunkLayer5||[]).push([[9897],{26073:function(e,t,M){M.r(t),M.d(t,{Head:function(){return z},default:function(){return L}});var I=M(67294),g=M(17875),A=M(37242),l=M(71082),a=M(72606),n=M(63689),T=M(85736),C=M.n(T),i=M(90075),D=M(31992),r=M(72267),o=M(8852),N=M(75708);var c=M(85313).default.section.withConfig({displayName:"content-formstyle__ContentFormWrapper",componentId:"sc-gkb7sh-0"})(["\n    .validation{\n      margin: 0;\n      font-size: 0.7rem;\n      color: red;\n    }\n    .thank-you-box {\n      padding: 2rem;\n      margin: 1rem;\n      background-color: ",";\n      border-radius: 0.1rem;\n      min-height: 20rem;\n      \n      h2, h3 {\n        color: white;\n      }\n      h2{\n        margin-top: 1rem;\n        margin-bottom: 2rem;\n      }\n      p {\n        margin-top: .85rem;\n        color: white;\n      }\n  }\n    .form{\n        font-size: .9rem;\n        margin: 0 1rem 1rem;\n        padding: 1rem;\n        overflow: auto;\n        height: 600px;\n        &::-webkit-scrollbar {\n          display: none;\n        }\n    \n          label {\n            display: block;\n            font-size: 1rem;\n          }\n    \n          .required-sign {\n            color: #8b0000;\n          }\n  \n          .form-name {\n            font-weight: 600;\n            margin: 20px 0px 5px 3px;\n            display: block;\n          }\n    \n          .text-field {\n            width: 100%;\n            border: 1px solid black;\n            border-radius: 10px;\n            padding: .5rem .5rem;\n            font-size: .85rem;\n          }\n    \n          .text-field:focus {\n            border: 2px solid #00B39F;\n          }\n    \n          .btn {\n            margin: 1.9rem auto;\n            display: block;\n            width: auto;\n          }\n    \n    }\n"],(e=>e.theme.darkJungleGreenColor)),y=M(23995);const E=()=>I.createElement("div",{className:"thank-you-box"},I.createElement("h2",null,"Thank you for your interest in the Layer5 Writing Program!"),I.createElement("p",null,"You will soon receive detailed guidance from our content team. We'll get back to you as soon as we can."),I.createElement("p",null,"In the meantime, please visit our ",I.createElement("a",{href:"https://discuss.layer5.io"},"community forum")," or join us in our ",I.createElement("a",{href:"https://slack.layer5.io"},"community Slack"),"."),I.createElement("h3",{className:"white"},"- Team ",I.createElement("img",{src:y.Z,alt:"Layer5",width:"125"})));var m=()=>{const{0:e,1:t}=(0,I.useState)({}),{0:M,1:g}=(0,I.useState)(0),{0:A,1:l}=(0,I.useState)(!1),{0:a,1:T}=(0,I.useState)(!1),{0:C,1:i}=(0,I.useState)(!1),{0:D,1:r}=(0,I.useState)(""),{0:y,1:m}=(0,I.useState)(""),{0:s,1:L}=(0,I.useState)(""),{0:z,1:w}=(0,I.useState)(""),{0:u,1:x}=(0,I.useState)(""),{0:j,1:d}=(0,I.useState)(""),{0:S,1:O}=(0,I.useState)(""),{0:h,1:p}=(0,I.useState)("");return(0,I.useEffect)((()=>{A&&o.Z.post("https://hook.us1.make.com/7c1op88rysnmeitovt35fxzcv2spspp0",{memberFormOne:e})}),[A]),I.createElement(c,null,0===M&&I.createElement("div",{className:"form-data"},I.createElement(N.J9,{initialValues:{subscribed:!1,email:D,name:y,slack:z,slackName:h,content:s,title:u,details:j,comment:S,form:"content"},onSubmit:e=>{r(e.email),m(e.name),p(e.slackName),x(e.title),d(e.details),O(e.details),w(e.slack),L(e.content),e.slack&&e.content?(t(e),g(1),l(!0)):(e.slack?i(!1):i(!0),e.content?T(!1):T(!0))}},I.createElement(N.l0,{className:"form",method:"post"},I.createElement("label",{htmlFor:"email",className:"form-name"},"Email Address ",I.createElement("span",{className:"required-sign"},"*")),I.createElement(N.gN,{type:"text",className:"text-field",id:"email",name:"email",pattern:"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$",required:!0}),I.createElement("label",{htmlFor:"name",className:"form-name"},"Name ",I.createElement("span",{className:"required-sign"},"*")),I.createElement(N.gN,{type:"text",className:"text-field",id:"name",name:"name",required:!0}),I.createElement("label",{id:"slack-member",className:"form-name"},"Are you a member of the Layer5 Slack Community?",I.createElement("span",{className:"required-sign"},"*")),C&&I.createElement("p",{className:"validation"},"Please fill in this field"),I.createElement("div",{role:"group","aria-labelledby":"slack-member"},I.createElement("label",null,I.createElement(N.gN,{type:"radio",name:"slack",value:"yes"}),"Yes"),I.createElement("label",null,I.createElement(N.gN,{type:"radio",name:"slack",value:"no"}),"No")),I.createElement("label",{htmlFor:"slackName",className:"form-name"},"If yes, please mention your username on Slack. If no, you are welcome to join - https://slack.layer5.io/"),I.createElement(N.gN,{type:"text",className:"text-field",id:"slackName",name:"slackName",maxLength:"32"}),I.createElement("label",{id:"content-type",className:"form-name"},"Choose the type of content",I.createElement("span",{className:"required-sign"},"*")),a&&I.createElement("p",{className:"validation"},"Please provide your choice of content."),I.createElement("div",{role:"group","aria-labelledby":"content-type"},I.createElement("label",null,I.createElement(N.gN,{type:"radio",name:"content",value:"blog"}),"Blog Post"),I.createElement("label",null,I.createElement(N.gN,{type:"radio",name:"content",value:"article"}),"Article"),I.createElement("label",null,I.createElement(N.gN,{type:"radio",name:"content",value:"tutorial"}),"Tutorial"),I.createElement("label",null,I.createElement(N.gN,{type:"radio",name:"content",value:"workshop"}),"Workshop"),I.createElement("label",null,I.createElement(N.gN,{type:"radio",name:"content",value:"event"}),"Event"),I.createElement("label",null,I.createElement(N.gN,{type:"radio",name:"content",value:"other"}),"Other")),I.createElement("label",{htmlFor:"title",className:"form-name"},"Title"),I.createElement(N.gN,{type:"text",className:"text-field",id:"title",name:"title"}),I.createElement("label",{htmlFor:"details",className:"form-name"},"Details"),I.createElement(N.gN,{type:"text",className:"text-field",id:"details",name:"details"}),I.createElement("label",{htmlFor:"comments",className:"form-name"},"Comments"),I.createElement(N.gN,{type:"text",className:"text-field",id:"comments",name:"comment"}),I.createElement("div",{className:"form-submit"},I.createElement(n.default,{secondary:!0,className:"btn",title:"Submit"}))))),1===M&&I.createElement(E,null))};var s=()=>{const{0:e,1:t}=(0,I.useState)(!1),M=()=>t(!1);return I.createElement(a.U,null,I.createElement("div",{className:"page-header-section"},I.createElement("h1",null,"Write with Layer5!")),I.createElement(i.Z,null),I.createElement("div",{className:"page-section"},I.createElement(A.W2,null,I.createElement("div",{className:"content writing_program"},I.createElement("h2",null,"What is Layer5 Writing Program?"),I.createElement("p",null,"The Layer5 Writing Program is a way to demonstrate your expertise, give back to the community, and help us produce great content. We collaborate with authors and technologists from around the world to produce high quality articles, blog posts, tutorials and other cloud native resources on Meshery, Kubernetes, service meshes, Docker and related technologies."),I.createElement("h2",null,"Why should you participate?"),I.createElement("div",{className:"list"},I.createElement(A.X2,null,I.createElement(A.JX,{lg:6,md:6,sm:12},I.createElement("div",{className:"listed"},I.createElement("table",{className:"table"},I.createElement("tr",null,I.createElement("td",{className:"icon"},I.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"27",height:"40",fill:"none",viewBox:"0 0 40 40"},I.createElement("rect",{width:"40",height:"40",fill:"#C9FCF6",rx:"5"}),I.createElement("path",{stroke:"#00B39F",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M28 14L17 25L12 20"}))),I.createElement("td",{className:"skill"},I.createElement("h4",null,"Improve your writing and ",I.createElement("br",null),"communication skills"),"Publishing is a feedback-driven process that can help you understand your audience better, explain complex topics clearly, and iterate to improve results. Become a better technical writer by collaborating with an accomplished team of technical writers and editors.")),I.createElement("tr",null,I.createElement("td",{className:"icon"},I.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"27",height:"40",fill:"none",viewBox:"0 0 40 40"},I.createElement("rect",{width:"40",height:"40",fill:"#C9FCF6",rx:"5"}),I.createElement("path",{stroke:"#00B39F",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M28 14L17 25L12 20"}))),I.createElement("td",{className:"skill"},I.createElement("h4",null,"Build your technical profile"),"Share your knowledge with a worldwide developer community. Build your GitHub profile with assigned issues and merged pull requests. Articles, posts, project documentation written by you will be drafted, put into a pull request, reviewed and merged like any other code-centric contribution. Documenting the problems you solved or a new feature you implemented will serve as a perpetual guide to others in the community."))))),I.createElement(A.JX,{lg:6,md:6,sm:12},I.createElement("div",{className:"listed"},I.createElement("table",{className:"table"},I.createElement("tr",null,I.createElement("td",{className:"icon"},I.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"25",height:"40",fill:"none",viewBox:"0 0 40 40"},I.createElement("rect",{width:"40",height:"40",fill:"#C9FCF6",rx:"5"}),I.createElement("path",{stroke:"#00B39F",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M28 14L17 25L12 20"}))),I.createElement("td",{className:"skill"},I.createElement("h4",null,"Establish your voice and personal brand"),"Sharing your knowledge not only demonstrates your technical expertise, it highlights your ability to teach others, and establishes you as an authority on the topic. Your technical write-ups are empirical evidence of your ability to learn and teach.")),I.createElement("tr",null,I.createElement("td",{className:"icon"},I.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"25",height:"40",fill:"none",viewBox:"0 0 40 40"},I.createElement("rect",{width:"40",height:"40",fill:"#C9FCF6",rx:"5"}),I.createElement("path",{stroke:"#00B39F",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M28 14L17 25L12 20"}))),I.createElement("td",{className:"skill"},I.createElement("h4",null,"Educate"),"Whether you're writing about a complex system or a a set of actions you took to address an error, the odds are high that someone else will someday struggle with the same things as you. By writing about the things that you learn or find interesting, you aren't just teaching yourself, you're also helping share your knowledge with every person who reads your post."))))))),I.createElement("h2",null,"Where can you contribute?"),I.createElement("p",null,"We welcome the contribution of any type that shares knowledge about our projects or related technologies.",I.createElement("br",null),"Do you want to document your recent effort in implementing a new feature? Do you want to share a solution for a problem you were struggling with? Do you want to share information about a recent technology you find intriguing? Want to host an event with Layer5? Want to deliver a talk, a workshop, or a tutorial? Just let us know."),I.createElement(A.X2,null,I.createElement("div",{className:"content_list"},I.createElement(A.JX,{sm:12,md:6,lg:4},I.createElement(l.Link,{className:"project-card",to:"/blog"},I.createElement("div",{className:"content_type"},I.createElement("img",{src:"data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKIHdpZHRoPSIyNDkuMDAwMDAwcHQiIGhlaWdodD0iMjAyLjAwMDAwMHB0IiB2aWV3Qm94PSIwIDAgMjQ5LjAwMDAwMCAyMDIuMDAwMDAwIgogcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQgbWVldCI+Cgo8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwyMDIuMDAwMDAwKSBzY2FsZSgwLjEwMDAwMCwtMC4xMDAwMDApIgpmaWxsPSIjMDBiMzlmIiBzdHJva2U9Im5vbmUiPgo8cGF0aCBkPSJNNDM3IDE5MzMgYy00IC0zIC03IC0yNzUgLTcgLTYwNCAwIC01MTYgMiAtNTk4IDE1IC02MDMgOCAtMyAyMSAyCjMwIDEwIDEzIDEzIDE1IDg3IDE1IDU4MCBsMCA1NjQgNTY4IC0yIDU2NyAtMyAzIC01NzEgYzIgLTU5NyAyIC01OTggNDMgLTU3MwoxMiA3IDE0IDEwMiAxNyA1ODkgMiAzOTggLTEgNTg2IC04IDYwMCAtMTEgMjAgLTIxIDIwIC02MjQgMjAgLTMzNyAwIC02MTYgLTMKLTYxOSAtN3oiLz4KPHBhdGggZD0iTTY5MCAxNzkzIGMtMzUgLTEzIC00MCAtMzYgLTQwIC0xNjkgMCAtMTQ3IDQgLTE1OCA2NSAtMTcwIDE4IC0zIDc5Ci00IDEzNSAtMiAxMzggNCAxNDAgNyAxNDAgMTczIDAgMTcxIDEgMTY5IC0xNjIgMTcyIC02NyAxIC0xMzAgMCAtMTM4IC00egptMjM4IC0xNjUgbDMgLTEwOCAtMTExIDAgLTExMCAwIDAgMTEwIDAgMTExIDEwOCAtMyAxMDcgLTMgMyAtMTA3eiIvPgo8cGF0aCBkPSJNMTA5NiAxNjk0IGMtOSAtOCAtMTYgLTE3IC0xNiAtMTkgMCAtMiA3IC0xMSAxNiAtMTkgMTMgLTEzIDQ0IC0xNgoxODAgLTE2IDE2NSAwIDIwNCA3IDIwNCAzNSAwIDI4IC0zOSAzNSAtMjA0IDM1IC0xMzYgMCAtMTY3IC0zIC0xODAgLTE2eiIvPgo8cGF0aCBkPSJNMTA1IDE2NjUgbC0yNSAtMjQgMCAtNjI5IGMwIC02MDUgMSAtNjMxIDE5IC02NTMgbDE5IC0yNCA5MzcgMCA5MzcKMCAxOSAyNCBjMTcgMjEgMTkgNDIgMTkgMjQ2IDAgMTk3IC0yIDIyNCAtMTYgMjI5IC0zNCAxMyAtNDQgLTEyIC00NCAtMTE1IGwwCi05OSAtOTE1IDAgLTkxNSAwIDIgNTAzIDMgNTAyIDEwOCAzIGM4NCAyIDEwOSA2IDExNCAxNyAxMyAzNSAtMTUgNDUgLTEyOSA0NQotMTAyIDAgLTExMCAtMSAtMTMzIC0yNXogbTE4NjUgLTExODUgbDAgLTgwIC05MTUgMCAtOTE1IDAgMCA4MCAwIDgwIDkxNSAwCjkxNSAwIDAgLTgweiIvPgo8cGF0aCBkPSJNMTAxMiA1MDggYy0zNCAtMzQgNiAtOTAgNDggLTY4IDI2IDE0IDI2IDU2IDEgNzAgLTI1IDEzIC0zNCAxMyAtNDkKLTJ6Ii8+CjxwYXRoIGQ9Ik0xNzUwIDE2NzUgYy03IC04IC0xMCAtMjEgLTcgLTMwIDUgLTExIDMwIC0xNSAxMTQgLTE3IGwxMDggLTMgMwotNDcgYzYgLTk0IDYyIC04NyA2MiA5IDAgNDQgLTUgNTggLTI1IDc4IC0yMyAyNCAtMzEgMjUgLTEzMyAyNSAtODUgMCAtMTEyCi0zIC0xMjIgLTE1eiIvPgo8cGF0aCBkPSJNMjE5NCAxNjgyIGMtMTMgLTggLTQ1IC02MSAtMjQ5IC00MTYgbC0xMzcgLTIzOSAtMTkgLTExNiBjLTEwIC02NAotMTkgLTEyNCAtMTkgLTEzNCAwIC00MCAzMiAtMjcgMTMyIDU2IGwxMDMgODUgMTgwIDMxMiBjOTkgMTcyIDE4MyAzMjIgMTg3CjMzMiAxMiAzMCAtNyA1NCAtNzMgOTMgLTYwIDM1IC04NCA0MSAtMTA1IDI3eiBtMTI2IC0xMTAgYzAgLTI1IC0yOSAtMjMgLTc0CjMgLTM5IDIzIC00NCAyOSAtMzYgNDYgMTAgMTggMTIgMTggNjAgLTkgMjcgLTE1IDUwIC0zMyA1MCAtNDB6IG0tOTAgLTQ3IGMyMgotMTQgNDAgLTI5IDQwIC0zNCAwIC03IC0yODMgLTUwNSAtMjk2IC01MjAgLTIgLTMgLTg3IDQyIC0xMDIgNTUgLTMgMiAxMDkKMTk5IDI0NSA0MzIgMzAgNTAgNTggOTIgNjQgOTIgNSAwIDI3IC0xMSA0OSAtMjV6IG0tMzMwIC01NzYgbDM0IC0yMSAtNDQgLTM5CmMtNTAgLTQyIC02NCAtNDggLTU2IC0yMSAyIDkgOCAzNiAxMSA2MCA0IDIzIDEwIDQyIDEzIDQyIDQgMCAyMyAtMTAgNDIgLTIxeiIvPgo8cGF0aCBkPSJNMTA4NyAxNDk4IGMtMiAtNyAwIC0yMSA1IC0zMCA4IC0xNiAyNyAtMTggMTg3IC0xOCAxNDYgMCAxODEgMyAxOTEKMTUgNyA4IDEwIDIyIDYgMzAgLTQgMTMgLTM1IDE1IC0xOTUgMTUgLTE0MiAwIC0xOTAgLTMgLTE5NCAtMTJ6Ii8+CjxwYXRoIGQ9Ik02NDQgMTMwNSBjLTQgLTggLTQgLTIyIDAgLTMwIDUgLTEzIDU3IC0xNSA0MTMgLTEzIGw0MDggMyAwIDI1IDAKMjUgLTQwOCAzIGMtMzU2IDIgLTQwOCAwIC00MTMgLTEzeiIvPgo8cGF0aCBkPSJNNjQ0IDExMTUgYy00IC04IC00IC0yMiAwIC0zMCA1IC0xMyA1NyAtMTUgNDEzIC0xMyAzOTAgMyA0MDggNCA0MTEKMjIgMiAxMCAtMiAyMiAtMTAgMjcgLTcgNSAtMTkyIDkgLTQxMSA5IC0zNDQgMCAtMzk4IC0yIC00MDMgLTE1eiIvPgo8cGF0aCBkPSJNNjUyIDkzMSBjLTggLTUgLTEyIC0xNyAtMTAgLTI3IDMgLTE4IDIwIC0xOSA0MTMgLTE5IDM5MyAwIDQxMCAxCjQxMyAxOSAyIDEwIC0yIDIyIC0xMCAyNyAtNyA1IC0xODggOSAtNDAzIDkgLTIxNCAwIC0zOTYgLTQgLTQwMyAtOXoiLz4KPHBhdGggZD0iTTg2NSAyNjggYy0yIC03IC02IC00MCAtNyAtNzMgbC0zIC02MCAtNjIgLTMgYy02NiAtMyAtODUgLTE5IC01NwotNDcgMjMgLTIzIDYxNSAtMjMgNjM4IDAgMjggMjggOSA0NCAtNTcgNDcgbC02MiAzIC01IDcwIGMtNSA2NyAtNiA3MCAtMzAgNzAKLTI0IDAgLTI1IC0zIC0yOCAtNzMgbC0zIC03MyAtMTMyIDMgLTEzMiAzIC0zIDUwIGMtNCA3NyAtMTAgOTUgLTMzIDk1IC0xMSAwCi0yMiAtNiAtMjQgLTEyeiIvPgo8L2c+Cjwvc3ZnPgo=",alt:"Blog"}),I.createElement("h5",null,"Blog"),I.createElement("p",null,"Share Your Experience")))),I.createElement(A.JX,{sm:12,md:6,lg:4},I.createElement(l.Link,{className:"project-card",to:"/resources"},I.createElement("div",{className:"content_type"},I.createElement("img",{src:"data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKIHdpZHRoPSI4NjAuMDAwMDAwcHQiIGhlaWdodD0iOTE5LjAwMDAwMHB0IiB2aWV3Qm94PSIwIDAgODYwLjAwMDAwMCA5MTkuMDAwMDAwIgogcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQgbWVldCI+Cgo8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCw5MTkuMDAwMDAwKSBzY2FsZSgwLjEwMDAwMCwtMC4xMDAwMDApIgpmaWxsPSIjMDBiMzlmIiBzdHJva2U9Im5vbmUiPgo8cGF0aCBkPSJNMjg5NSA4NzY0IGMtNDUgLTIzIC02NiAtNDUgLTg2IC04OSAtMjMgLTUwIC0yMyAtODkgLTEgLTEzOCA5IC0yMQoxNDkgLTE3OSAzMTIgLTM1MyAxNjIgLTE3NCAyOTQgLTMyMCAyOTMgLTMyNCAtMSAtNSAtMTM4IC0yMjEgLTMwNSAtNDgyIC0xODkKLTI5NiAtMzA1IC00ODggLTMxMSAtNTEzIC0yMCAtODcgLTQwIC02MCA3MzAgLTk0MCAzOTUgLTQ1MSA3MzMgLTgzMCA3NTIKLTg0MiBsMzQgLTIzIDEzMDQgMCBjMTQ1MyAwIDEzNDUgLTUgMTQwMSA2OCBsMjcgMzUgNSA1NjYgNSA1NjYgMjY4IDMgMjY3IDIKMCAtMTE1NSAwIC0xMTU1IDE3NSAwIDE3NSAwIDAgMTE1NCAwIDExNTQgMTIzIDQgYzExOCAzIDEyNSA0IDE2MCAzMSA2MiA0Nwo4NiAxMTYgNjcgMTg5IC0xMCAzOSAtMTE0IDE0NiAtMTA5OCAxMTMxIC02MTUgNjE2IC0xMTAzIDEwOTcgLTExMjQgMTEwOCAtMzYKMTkgLTc1IDE5IC0xNTkwIDE5IC0xMzg5IDAgLTE1NTYgLTIgLTE1ODMgLTE2eiBtMzkxMCAtMTIyNCBsODkwIC04OTAgLTEzMjUKMCAtMTMyNSAxIC0zODAgNDA2IGMtMjA5IDIyMyAtNTgxIDYyMCAtODI3IDg4MiAtMjQ2IDI2MiAtNDQ4IDQ3OSAtNDQ4IDQ4NCAwCjQgNTY4IDcgMTI2MyA3IGwxMjYyIDAgODkwIC04OTB6IG0tMjUzNSAtNTgxIGMzOTQgLTQxOSA2MDQgLTYzNiA2MjYgLTY0NSAyOAotMTIgMTg5IC0xNCA5MTkgLTE0IGw4ODUgMCAwIC00NDUgMCAtNDQ1IC0xMTI3IDIgLTExMjggMyAtNTQzIDYyMCBjLTI5OSAzNDEKLTU4MSA2NjMgLTYyNyA3MTYgbC04NCA5NiAyMzcgMzcyIGMxMzAgMjA0IDIzOSAzNzEgMjQzIDM3MSAzIDAgMjczIC0yODQgNTk5Ci02MzF6Ii8+CjxwYXRoIGQ9Ik02NTEgNjgxNCBjLTEyOCAtMzQgLTIzNiAtMTI2IC0yOTggLTI1MiBsLTM4IC03NiAwIC0yMzE1IDAgLTIzMTYKMjggLTYwIGM2MyAtMTMzIDE2NCAtMjI1IDI5NCAtMjY1IDY0IC0yMCA5MiAtMjAgMTE5OSAtMjAgbDExMzQgMCAwIC0yNyBjMAotNTQgLTMxIC0xNTcgLTY2IC0yMjQgLTgyIC0xNTUgLTI3MCAtMjc4IC00MjkgLTI3OSAtMTAwIC0xIC0xODMgLTU1IC0yMDUKLTEzNCAtMjMgLTgyIDE4IC0xNzMgOTMgLTIwNyA0MSAtMTggODYgLTE5IDEzMTYgLTE5IGwxMjc1IDAgNDQgMjEgYzEzMCA2MwoxMzEgMjQ3IDEgMzE1IC0xNyA4IC03MSAyMCAtMTIwIDI1IC0xNDQgMTUgLTI0NSA2NSAtMzQ2IDE3MSAtNzkgODQgLTE0MiAyMzEKLTE0MyAzMzEgbDAgMjcgMTEzNCAwIGMxMTA3IDAgMTEzNSAwIDExOTkgMjAgMTMwIDQwIDIzMSAxMzIgMjk0IDI2NSBsMjggNjAKMyAxNDIzIDIgMTQyMiAtMTc1IDAgLTE3NSAwIDAgLTg4NSAwIC04ODUgLTMwMjAgMCAtMzAyMCAwIDAgMTcyOCBjMCAxMzUxIDMKMTczMiAxMyAxNzUxIDYgMTMgMjUgMzQgNDAgNDUgMjggMjEgMzIgMjEgOTMyIDI0IGw5MDMgMiAtMzQgNTggYy00MiA3MCAtNjMKMTM2IC03MSAyMjUgbC02IDY3IC04NjYgLTEgYy03MjQgMCAtODc1IC0zIC05MjAgLTE1eiBtNjA0NyAtNDU2NCBsLTMgLTMyMAotMzMgLTMyIC0zMiAtMzMgLTI5MzYgLTMgYy0zMjI4IC0yIC0yOTc5IC03IC0zMDE3IDU3IC0xNSAyNiAtMTcgNjUgLTE3IDM0MApsMCAzMTEgMzAyMCAwIDMwMjEgMCAtMyAtMzIweiBtLTI2NTcgLTgxNyBjMTIgLTEyOSA3NCAtMjkyIDE1NSAtNDA1IGwzNCAtNDgKLTU0OSAwIC01NTAgMCAzNiA1MyBjODQgMTIzIDE1MyAzMTEgMTUzIDQxNyAwIDI2IDMgNTAgNyA1MyA0IDQgMTY0IDYgMzU3IDUKbDM1MSAtMyA2IC03MnoiLz4KPHBhdGggZD0iTTM2NjUgMjM5NSBjLTUgLTIgLTIyIC02IC0zNyAtOSAtNzEgLTE2IC0xMzcgLTExOSAtMTI0IC0xOTMgMTYgLTg0Cjk1IC0xNTMgMTc2IC0xNTMgODAgMCAxNjAgNjkgMTc1IDE1MiAxMiA2NSAtMzIgMTUxIC05NCAxODIgLTI4IDE0IC04MCAyNQotOTYgMjF6Ii8+CjxwYXRoIGQ9Ik03Njk0IDM2MzAgYy0xMDMgLTIxIC0yMTIgLTExMCAtMjU2IC0yMDcgLTE3IC0zOCAtMjIgLTY3IC0yMiAtMTMzCjAgLTc2IDQgLTk1IDM4IC0xNzUgNDQgLTEwNCAxNTcgLTMwOSAyNDYgLTQ0NCA1MiAtNzkgNjQgLTkyIDc1IC04MCAyOSAzMAoxNzggMjc4IDIzOSAzOTggNjkgMTM2IDEwNiAyNDEgMTA2IDMwMCAwIDUwIC0yNiAxMzUgLTU1IDE4MCAtNzggMTIyIC0yMzUKMTkwIC0zNzEgMTYxeiIvPgo8L2c+Cjwvc3ZnPgo=",alt:"Resource"}),I.createElement("h5",null,"Resource"),I.createElement("p",null,"Articles, Tutorials, Podcasts and More")))),I.createElement(A.JX,{sm:12,md:6,lg:4},I.createElement(l.Link,{className:"project-card",to:"/learn/service-mesh-workshops"},I.createElement("div",{className:"content_type"},I.createElement("img",{src:"data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKIHdpZHRoPSI4NDAuMDAwMDAwcHQiIGhlaWdodD0iNDUyLjAwMDAwMHB0IiB2aWV3Qm94PSIwIDAgODQwLjAwMDAwMCA0NTIuMDAwMDAwIgogcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQgbWVldCI+Cgo8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCw0NTIuMDAwMDAwKSBzY2FsZSgwLjEwMDAwMCwtMC4xMDAwMDApIgpmaWxsPSIjMDBiMzlmIiBzdHJva2U9Im5vbmUiPgo8cGF0aCBkPSJNNTgwMCA0MTE0IGMtMTg0IC0zNiAtMzIwIC0xNDkgLTM4MSAtMzIwIC0zMCAtODMgLTMwIC0yMjUgMCAtMzA4CjEwNyAtMjk2IDQ1MCAtNDE0IDcxMyAtMjQ1IDE1MiA5OCAyMzggMjkzIDIwOSA0NzEgLTI5IDE3OCAtMTQ5IDMyMCAtMzE3IDM3OAotNTkgMjEgLTE3NiAzMyAtMjI0IDI0eiBtMjI2IC0xNDAgYzc1IC0zNSAxNDIgLTEwMyAxNzkgLTE3OSAyNiAtNTMgMjkgLTcxCjI5IC0xNTUgMCAtODUgLTMgLTEwMiAtMjkgLTE1NSAtMzYgLTc0IC0xMDcgLTE0NSAtMTgyIC0xODEgLTUxIC0yNSAtNjkgLTI4Ci0xNTMgLTI4IC04NSAwIC0xMDIgMyAtMTU1IDI5IC03NCAzNiAtMTQ1IDEwNyAtMTgxIDE4MiAtMjUgNTEgLTI4IDY5IC0yOAoxNTMgMCA4NCAzIDEwMiAyOCAxNTMgNDggMTAwIDE0NiAxODEgMjUwIDIwOCA2MiAxNiAxNzggMyAyNDIgLTI3eiIvPgo8cGF0aCBkPSJNMzI1NSAzOTQxIGMtMTEgLTUgLTI5IC0xOSAtNDAgLTMxIC0xOCAtMjAgLTIwIC0zOSAtMjMgLTIwNiBsLTMKLTE4NCAtNTU0IC0yIGMtNTQxIC0zIC01NTQgLTMgLTU4MSAtMjQgLTE1IC0xMSAtMzcgLTMzIC00OCAtNDggLTIxIC0yNyAtMjEKLTM1IC0yMSAtODI2IDAgLTc5MSAwIC03OTkgMjEgLTgyNiAxMSAtMTUgMzMgLTM3IDQ4IC00OCAyNiAtMjAgNDIgLTIxIDMzNwotMjQgMTcwIC0yIDMwOSAtNSAzMDkgLTcgMCAtMyAtMTAzIC0yMTUgLTIzMCAtNDcyIC0yNDkgLTUwNiAtMjU0IC01MjAgLTIwNQotNTY4IDMzIC0zNCAxMDIgLTM1IDEzMiAtMiAzMCAzMSA1MDMgOTk2IDUwMyAxMDI0IGwwIDIzIDM1NSAwIDM1NSAwIDAgLTIzCmMwIC0yOSA0NzUgLTk5NSA1MDMgLTEwMjQgMzYgLTM1IDk3IC0zNCAxMzIgMiA0OSA0OCA0NCA2MiAtMjA1IDU2OCAtMTI3IDI1NgotMjMwIDQ2OCAtMjMwIDQ3MSAwIDMgMTM1IDYgMjk5IDggMjg1IDMgMzAxIDQgMzI3IDI0IDY4IDUwIDY5IDU0IDcyIDI5NCBsMwoyMTkgNjkgLTQ2IDY5IC00NiAtNiAtNTYgYy00IC00MiAtMSAtNjUgMTAgLTg4IDIwIC0zOCA4MCAtOTEgMTEzIC05OSAzNyAtMTAKOTkgMSAxMjYgMjIgMTMgMTAgMTM2IDEzNyAyNzMgMjgzIGwyNTAgMjY0IDUgLTQ0NCBjNCAtMzI5IDggLTQ1MCAxOCAtNDY2IDkKLTE2IDEyIC0xMzkgMTIgLTUxNSAwIC00NjMgMiAtNDk2IDE5IC01MzUgNTAgLTExMCAyNDggLTExMiAzMDkgLTQgMjIgMzggMjIKNDQgMjIgNTA1IGwwIDQ2NiA3MCAwIDcwIDAgMCAtNDYyIGMwIC00MzcgMiAtNDY1IDIwIC01MDYgMTUgLTMzIDI5IC00NyA2MgotNjIgODggLTQwIDIwOSAtMTQgMjQ1IDUyIDE2IDMwIDE5IDc3IDI0IDU1OCA0IDI4OSAxMCA1NDIgMTQgNTYyIDcgMzcgOSAzOAo1MCAzOCA1OSAwIDEyNCAzNiAxNDkgODUgbDIwIDM4IC01NyA1NTggYy0zOSAzOTAgLTYwIDU2NiAtNzEgNTg3IC0yMSA0MSAtNjEKNzAgLTEwNSA3OCAtMjAgMyAtNTMgMTIgLTc0IDIwIC01MyAyMCAtNjUyIDIxIC03MDAgMCAtMzYgLTE1IC0xNDggLTEyNyAtNTQ2Ci01NDkgbC0yNzIgLTI4NyAtOTIgNjQgLTkyIDY0IC01IDU0MCBjLTUgNTI2IC02IDU0MSAtMjYgNTY4IC0xMSAxNSAtMzMgMzcKLTQ4IDQ4IC0yNyAyMCAtNDAgMjEgLTU0MSAyNCBsLTUxMyAzIDIgMTg0IGMxIDE4NCAxIDE4NCAtMjQgMjA5IC0yOCAyOCAtNzQKNDAgLTEwNSAyN3ogbTExMzcgLTUzOCBjMTcgLTE1IDE4IC00NCAxOCAtNTAwIDAgLTI2NSAtMyAtNDgzIC02IC00ODMgLTEwIDAKLTU5OSA0MTMgLTYyMiA0MzcgLTM0IDM1IC04MyAyNSAtODIgLTE2IDEgLTkgMTUzIC0xMjIgMzUzIC0yNjEgbDM1MiAtMjQ1IDMKLTIzOSBjMiAtMjEyIDAgLTI0MSAtMTQgLTI1OCAtMTYgLTE3IC02MSAtMTggLTExNDcgLTE4IC0xMDM4IDAgLTExMzIgMQotMTE0OSAxNyAtMTcgMTUgLTE4IDUzIC0xOCA3ODEgMCA2OTggMSA3NjcgMTcgNzg0IDE1IDE3IDY0IDE4IDExNDYgMTggMTAzOAowIDExMzIgLTEgMTE0OSAtMTd6IG0xNjk0IC00ODMgYy00IC0yNSA1NCAtNjUzIDk1IC0xMDE1IDIwIC0xNzUgMjMgLTI2NCA5Ci0yODAgLTExIC0xMyAtNTggLTE1IC0zMjQgLTE1IC0yMjkgMCAtMzE1IDMgLTMyNCAxMiAtMTcgMTcgLTE3IDEyOTkgMCAxMzE2CjkgOSA4NSAxMiAyODEgMTIgbDI3MCAwIC03IC0zMHogbTIxMyAtMTcgYzUgLTEwIDMzIC0yNTcgNjIgLTU0OSA0NSAtNDQ5IDUxCi01MzQgNDAgLTU0OCAtMTYgLTE5IC03NCAtMjEgLTg4IC0zIC02IDYgLTM0IDI1MyAtNjQgNTQ4IC00NSA0NTIgLTUxIDUzOQotNDAgNTUzIDE4IDIyIDc4IDIxIDkwIC0xeiBtLTg3OSAtMTc1IGwwIC03MyAtMjk1IC0zMTEgYy0xNjEgLTE3MSAtMzAxIC0zMTQKLTMwOSAtMzE3IC0xNSAtNiAtNjYgMjcgLTY2IDQzIDAgNCAxMyAzIDI5IC0zIDU0IC0yMCA4MSAyNiA0MCA2OSBsLTIwIDIyCjMwMyAzMjEgYzE2NyAxNzYgMzA2IDMyMSAzMTEgMzIxIDQgMCA3IC0zMyA3IC03MnogbTI2OCAtMTY4NyBjMSAtMzI3IC0xCi00NTggLTkgLTQ2NyAtMTQgLTE3IC05MSAtMTggLTEwNyAtMiAtOSA5IC0xMiAxMjYgLTEyIDQ2MyAwIDI0OSAzIDQ1NSA3IDQ1OQo0IDQgMzIgNiA2MyA0IGw1NSAtMyAzIC00NTR6IG00OTAgMCBjMSAtMzI3IC0xIC00NTggLTkgLTQ2NyAtMTQgLTE3IC05MSAtMTgKLTEwNyAtMiAtOSA5IC0xMiAxMjYgLTEyIDQ2MyAwIDI0OSAzIDQ1NSA3IDQ1OSA0IDQgMzIgNiA2MyA0IGw1NSAtMyAzIC00NTR6Ii8+CjwvZz4KPC9zdmc+Cg==",alt:"Workshop"}),I.createElement("h5",null,"Workshop"),I.createElement("p",null,"Deliver a Hands-on Learning Experience")))))),I.createElement(A.X2,null,I.createElement("div",{className:"content_list"},I.createElement(A.JX,{sm:12,md:6,lg:4},I.createElement(l.Link,{className:"project-card",to:"/community/events"},I.createElement("div",{className:"content_type"},I.createElement("img",{src:"data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKIHdpZHRoPSIyMDAuMDAwMDAwcHQiIGhlaWdodD0iMjAwLjAwMDAwMHB0IiB2aWV3Qm94PSIwIDAgMjAwLjAwMDAwMCAyMDAuMDAwMDAwIgogcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQgbWVldCI+Cgo8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwyMDAuMDAwMDAwKSBzY2FsZSgwLjEwMDAwMCwtMC4xMDAwMDApIgpmaWxsPSIjMDBiMzlmIiBzdHJva2U9Im5vbmUiPgo8cGF0aCBkPSJNNDk2IDE4ODkgYy0yNCAtMTkgLTI2IC0yNyAtMjYgLTkwIGwwIC02OSAtMTIwIDAgYy0xMzMgMCAtMTc4IC0xMwotMjE5IC02NiAtNDEgLTUyIC00MiAtNzcgLTM5IC02NzQgbDMgLTU3NSAyMyAtMzcgYzEzIC0yMCA0MCAtNDcgNjAgLTYwIDM3Ci0yMyAzNyAtMjMgNDkxIC0yNiBsNDUzIC0zIC01IDIzIGMtMyAxMyAtOSA0NCAtMTIgNzAgbC03IDQ4IC00MjIgMCBjLTMxNSAwCi00MjUgMyAtNDM0IDEyIC05IDkgLTEyIDExNiAtMTIgNDIwIGwwIDQwOCA2NzAgMCA2NzAgMCAwIC0xODQgMCAtMTg0IDI4IC02CmMxNSAtMyA0NiAtOCA3MCAtMTEgbDQyIC03IDAgMzUxIGMwIDM3NyAtMiAzOTUgLTUzIDQ0OSAtMzggNDEgLTU5IDQ3IC0xOTIKNTIgbC0xMzAgNSAtNSA3MiBjLTMgNDAgLTExIDc4IC0xOCA4NSAtMTggMTggLTE0MSAyMiAtMTcyIDYgLTIyIC0xMiAtMjYgLTIxCi0zMCAtODggbC01IC03NSAtMjAyIC0zIC0yMDMgLTIgMCA2NSBjMCA1NyAtMyA2OSAtMjUgOTAgLTIxIDIxIC0zMyAyNSAtODgKMjUgLTUwIDAgLTcwIC01IC05MSAtMjF6Ii8+CjxwYXRoIGQ9Ik01OTIgMTE1OCBjLTcgLTcgLTEyIC00MCAtMTIgLTc4IDAgLTM4IDUgLTcxIDEyIC03OCA3IC03IDM5IC0xMiA3MwotMTIgMzQgMCA2NiA1IDczIDEyIDcgNyAxMiA0MCAxMiA3OCAwIDM4IC01IDcxIC0xMiA3OCAtNyA3IC0zOSAxMiAtNzMgMTIKLTM0IDAgLTY2IC01IC03MyAtMTJ6Ii8+CjxwYXRoIGQ9Ik04MzMgMTE2MyBjLTkgLTMgLTEzIC0zMCAtMTMgLTgzIDAgLTg5IDEgLTkwIDgxIC05MCA4MCAwIDg5IDkgODkKODggMCA0MCAtNSA3MyAtMTIgODAgLTEyIDEyIC0xMjAgMTYgLTE0NSA1eiIvPgo8cGF0aCBkPSJNMTA2MiAxMTU4IGMtNyAtNyAtMTIgLTQwIC0xMiAtNzggMCAtMzggNSAtNzEgMTIgLTc4IDcgLTcgMzkgLTEyCjczIC0xMiAzNCAwIDY2IDUgNzMgMTIgNyA3IDEyIDQxIDEyIDg0IDAgNTYgLTMgNzMgLTE2IDc4IC0yOCAxMSAtMTMwIDYgLTE0MgotNnoiLz4KPHBhdGggZD0iTTEzMDMgMTE2MyBjLTkgLTMgLTEzIC0zMCAtMTMgLTgzIDAgLTg5IDEgLTkwIDgxIC05MCA4MCAwIDg5IDkgODkKODggMCA0MCAtNSA3MyAtMTIgODAgLTEyIDEyIC0xMjAgMTYgLTE0NSA1eiIvPgo8cGF0aCBkPSJNMzUyIDkyOCBjLTEyIC0xMiAtMTcgLTExNCAtNiAtMTQyIDUgLTEzIDIyIC0xNiA4NCAtMTYgODkgMCA5MCAxCjkwIDgxIDAgODAgLTkgODkgLTg4IDg5IC00MCAwIC03MyAtNSAtODAgLTEyeiIvPgo8cGF0aCBkPSJNNTkxIDkyNiBjLTcgLTkgLTExIC00MSAtOSAtODMgbDMgLTY4IDgwIDAgODAgMCAzIDc0IGMyIDUzIC0xIDc3Ci0xMCA4MiAtMjMgMTUgLTEzNCAxMCAtMTQ3IC01eiIvPgo8cGF0aCBkPSJNODI0IDkyNyBjLTMgLTggLTQgLTQ1IC0yIC04MyBsMyAtNjkgODAgMCA4MCAwIDMgNjggYzIgNDIgLTIgNzQgLTkKODMgLTE2IDE5IC0xNDcgMjAgLTE1NSAxeiIvPgo8cGF0aCBkPSJNMTA2MSA5MjYgYy03IC05IC0xMSAtNDAgLTkgLTgzIGwzIC02OCA4MCAwIDgwIDAgMCA4MCAwIDgwIC03MSAzCmMtNTIgMiAtNzQgLTEgLTgzIC0xMnoiLz4KPHBhdGggZD0iTTE0NzMgNzU2IGMtMTUwIC00OSAtMjU2IC0yMDYgLTIzOSAtMzU0IDEzIC0xMTEgODAgLTIxNCAxNzMgLTI2NAoyMjMgLTEyMSA0OTYgMzcgNDk3IDI4NyAxIDk2IC0yNCAxNjMgLTg1IDIzMCAtNjcgNzMgLTEzOCAxMDcgLTIzMiAxMTEgLTQzIDIKLTg5IC0yIC0xMTQgLTEweiBtMTYwIC0zNTggbC0xMDggLTEwOCAtNjUgNjUgLTY1IDY2IDM1IDI5IDM1IDI5IDI2IC0yNSBjMTQKLTEzIDI5IC0yNCAzNSAtMjQgNSAwIDQxIDMxIDc5IDcwIGw2OSA3MCAzMyAtMzIgMzMgLTMyIC0xMDcgLTEwOHoiLz4KPHBhdGggZD0iTTM1MiA2OTggYy0xMiAtMTIgLTE3IC0xMTQgLTYgLTE0MiA1IC0xMyAyMiAtMTYgODQgLTE2IDg5IDAgOTAgMQo5MCA4MSAwIDgwIC05IDg5IC04OCA4OSAtNDAgMCAtNzMgLTUgLTgwIC0xMnoiLz4KPHBhdGggZD0iTTU5MSA2OTYgYy03IC05IC0xMSAtNDEgLTkgLTgzIGwzIC02OCA4MCAwIDgwIDAgMyA3NCBjMiA1MyAtMSA3NwotMTAgODIgLTIzIDE1IC0xMzQgMTAgLTE0NyAtNXoiLz4KPHBhdGggZD0iTTgyNCA2OTcgYy0zIC04IC00IC00NSAtMiAtODMgbDMgLTY5IDgwIDAgODAgMCAzIDY4IGMyIDQyIC0yIDc0IC05CjgzIC0xNiAxOSAtMTQ3IDIwIC0xNTUgMXoiLz4KPC9nPgo8L3N2Zz4K",alt:"Event"}),I.createElement("h5",null,"Event"),I.createElement("p",null,"Organize an Event")))),I.createElement(A.JX,{sm:12,md:6,lg:4},I.createElement(l.Link,{className:"project-card",to:"/community/events"},I.createElement("div",{className:"content_type"},I.createElement("img",{src:"data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKIHdpZHRoPSIyMjQuMDAwMDAwcHQiIGhlaWdodD0iMjI1LjAwMDAwMHB0IiB2aWV3Qm94PSIwIDAgMjI0LjAwMDAwMCAyMjUuMDAwMDAwIgogcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQgbWVldCI+Cgo8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwyMjUuMDAwMDAwKSBzY2FsZSgwLjEwMDAwMCwtMC4xMDAwMDApIgpmaWxsPSIjMDBiMzlmIiBzdHJva2U9Im5vbmUiPgo8cGF0aCBkPSJNMTY3NSAyMjQ0IGMtMTEgLTIgLTQ1IC05IC03NSAtMTUgLTkzIC0xOCAtMTkxIC03MiAtMjQ5IC0xMzUgLTExMQotMTIyIC0xMDMgLTI2NCAyNCAtMzg3IDU4IC01NyA0MyAtMTI2IC0zOSAtMTc5IGwtMzEgLTIwIDU4IDYgYzcxIDggMTM0IDM4CjE0OSA3MiA5IDE5IDE3IDI0IDMyIDE5IDE3OCAtNTIgMzQ5IC00NCA0OTAgMjQgNzkgMzcgMTM1IDg3IDE2OSAxNDkgMzcgNjgKNDMgMTI1IDIyIDE5NyAtMzAgMTA2IC0xNjEgMjExIC0zMDkgMjQ5IC01OSAxNiAtMjA3IDI4IC0yNDEgMjB6Ii8+CjxwYXRoIGQ9Ik02OTAgMTk5NCBjLTYyIC0zNSAtNzggLTUyIC0xMDggLTEwOSAtMzEgLTU5IC0zNSAtMTU3IC0xMCAtMjE2IDQyCi05NyAxMjQgLTE0OSAyMzcgLTE0OSA4NyAwIDEzMSAyMCAxODggODQgOTIgMTA0IDgyIDI2NCAtMjIgMzU1IC01NCA0NyAtOTQKNjEgLTE3MiA2MSAtNTQgMCAtNzcgLTUgLTExMyAtMjZ6Ii8+CjxwYXRoIGQ9Ik04NjYgMTQxOCBsLTQ2IC01NyA0NyAtMjIxIDQ2IC0yMjEgLTUxIC01MiAtNTIgLTUyIC01NSA1NSAtNTUgNTUKNDUgMjA1IGMyNSAxMTMgNDUgMjEyIDQ1IDIyMCAwIDggLTE5IDM5IC00MyA2OCBsLTQyIDU0IC02MCAtNSBjLTEwNyAtOCAtMTg4Ci02NCAtMjM3IC0xNjUgbC0zMyAtNjcgLTMgLTIyMiAtNCAtMjIzIC0xMDQgMCAtMTA0IDAgMCA2NCBjMCA3OSAyMyAyMjAgNTEKMzA5IDE5IDU3IDMxIDc2IDg2IDEyOSA2NyA2NSA4NCA5OCA2MyAxMjMgLTI1IDMwIC01NyAxNyAtMTA1IC00MiAtMjUgLTMxCi00NCAtNjIgLTQxIC02OSAzIC03IC04IC00MyAtMjQgLTgxIC0zMyAtNzggLTU3IC0xODggLTY1IC0yOTQgLTEyIC0xNDYgLTgKLTEzOSAtNzAgLTEzOSBsLTU1IDAgMCAtNjUgMCAtNjUgODA1IDAgODA1IDAgMCA2OCAwIDY3IC01NCAtMyAtNTQgLTQgLTcgODkKYy05IDExOSAtMzcgMjU0IC02OSAzMzQgLTE0IDM2IC0yNiA3NyAtMjYgOTAgMCAzNCAtODQgMTI5IC0xMTUgMTI5IC0zMCAwCi00OSAtMjQgLTQxIC01MyAzIC0xMyAzNCAtNTEgNzAgLTg0IDU4IC01NCA2NiAtNjcgODkgLTEzOSAyNyAtODUgNDUgLTE5MSA0OQotMjk0IGwzIC02NSAtMTA1IDAgLTEwNSAwIC01IDIzMCBjLTUgMjE1IC02IDIzMyAtMjggMjczIC01NCAxMDIgLTEzNCAxNTkKLTI0MSAxNzEgbC01OSA3IC00NiAtNTh6IG0tMjY4IC00MjUgbC0zIC0xOTggLTI1IDAgLTI1IDAgLTMgMTk4IC0yIDE5NyAzMCAwCjMwIDAgLTIgLTE5N3ogbTQ3MCAwIGwtMyAtMTk4IC0yNSAwIC0yNSAwIC0zIDE5OCAtMiAxOTcgMzAgMCAzMCAwIC0yIC0xOTd6Ii8+CjxwYXRoIGQ9Ik0xODAgMzAwIGwwIC0zMDAgNjMwIDAgNjMwIDAgMCAzMDAgMCAzMDAgLTYzMCAwIC02MzAgMCAwIC0zMDB6Ii8+CjwvZz4KPC9zdmc+Cg==",alt:"Talks"}),I.createElement("h5",null,"Talks"),I.createElement("p",null,"Talk About Anything Cloud Native")))),I.createElement(A.JX,{sm:12,md:6,lg:4},I.createElement(l.Link,{className:"project-card",to:"/cloud-native-management/meshery"},I.createElement("div",{className:"content_type"},I.createElement("img",{src:"data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKIHdpZHRoPSI4NDAuMDAwMDAwcHQiIGhlaWdodD0iNTkyLjAwMDAwMHB0IiB2aWV3Qm94PSIwIDAgODQwLjAwMDAwMCA1OTIuMDAwMDAwIgogcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQgbWVldCI+Cgo8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCw1OTIuMDAwMDAwKSBzY2FsZSgwLjEwMDAwMCwtMC4xMDAwMDApIgpmaWxsPSIjMDBiMzlmIiBzdHJva2U9Im5vbmUiPgo8cGF0aCBkPSJNMjM5OSA1NTA0IGMtMjgxIC01MCAtNTI2IC0yMjggLTY1OCAtNDc2IC0xNDQgLTI3MSAtMTMzIC01NzkgMzEKLTg1NiAzOCAtNjQgMTY5IC0yMDYgMjI4IC0yNDcgbDQwIC0yOCAtMzcgLTE3IGMtNDcgLTIyIC05NyAtNzQgLTExMiAtMTE5IC04Ci0yNCAtMTEgLTI3MiAtMTEgLTg2NSAwIC03ODIgMiAtODMzIDE5IC04NzEgMjYgLTU3IDc5IC0xMDEgMTQxIC0xMTQgMzQgLTcKMjYyIC0xMSA2ODYgLTExIDQxMCAwIDYzNCAtMyA2MzIgLTEwIC0zIC04IC0yOTggLTQ0NyAtNzk1IC0xMTgxIC03OSAtMTE1Ci0xNDMgLTIxNCAtMTQzIC0yMTggMCAtOSAxMzAgLTk1IDEzNCAtODkgNSA2IDU1MyA4MTkgNjk0IDEwMjggODAgMTE4IDE1MwoyMjQgMTYzIDIzNSAxOSAxOSAxOSAzIDE5IC02MTMgbDAgLTYzMiA4MCAwIDgwIDAgMiA2MzIgMyA2MzMgNTYgLTgwIGMzMSAtNDQKMjI2IC0zMzIgNDM0IC02NDAgMjA4IC0zMDggMzc5IC01NjEgMzgwIC01NjMgNiAtOCAxMzYgODIgMTMzIDkyIC0yIDYgLTE1NgoyMzcgLTM0MyA1MTQgLTE4NyAyNzYgLTM5OSA1OTAgLTQ3MiA2OTcgbC0xMzIgMTk1IDc0MyAwIGM4MjEgMCA4MTIgLTEgODczCjYyIDU1IDU3IDYzIDg5IDYzIDI2OCAwIDg4IDEgMTYwIDMgMTYwIDEgMCAzMjIgLTEyMyA3MTIgLTI3NCBsNzEwIC0yNzQgMwo1MjkgYzEgMjkxIDEgNzY3IDAgMTA1OCBsLTMgNTMwIC0zOTAgLTE1MCBjLTIxNCAtODMgLTUzNCAtMjA2IC03MTAgLTI3NApsLTMyMCAtMTIzIC01IDE3MSBjLTYgMTkwIC0xMSAyMDkgLTc0IDI2NSAtNDAgMzUgLTkwIDUyIC0xNTYgNTIgbC00NSAxIDMwCjIxIGM2NCA0NSAxOTIgMTg3IDIzNyAyNjQgMjY4IDQ1MiA4NSAxMDE1IC00MDYgMTI0NSAtMTQyIDY2IC0yMjggODQgLTQwNiA4MwotMTg1IC0xIC0yNjEgLTE4IC00MTUgLTkyIC00NzQgLTIzMCAtNjUxIC03NzkgLTM5NCAtMTIyNyA0OSAtODYgMTI1IC0xNzQKMjEyIC0yNDYgbDU4IC00OSAtNDI4IDAgLTQyOCAxIDQwIDMxIGMxNTEgMTE5IDI2NiAyODggMzE3IDQ2NSAyMCA2NyAyMyAxMDEKMjMgMjM4IC0xIDE1MyAtMiAxNjQgLTMzIDI1NSAtMTQ2IDQzNiAtNjAwIDY5OCAtMTA2MyA2MTR6IG0yMTQxIC0yMjE0IGwwCi04MCAtOTQwIDAgLTk0MCAwIDAgODAgMCA4MCA5NDAgMCA5NDAgMCAwIC04MHoiLz4KPC9nPgo8L3N2Zz4K",alt:"Videos"}),I.createElement("h5",null,"Recorded Videos"),I.createElement("p",null,"Product Videos, Reviews or Demo")))))),I.createElement("h2",null,"What is the process?"),I.createElement("div",{className:"process"},I.createElement("div",{className:"item"},I.createElement("p",null,"If you’re interested in the Layer5 Writing Program, please submit your information (and proposed topic, if you have one) to get started."," ",I.createElement("i",null,"Don't have a topic? Don't worry, we have plenty of suggestions for you.")),I.createElement(n.default,{primary:!0,className:"open-modal-btn",onClick:()=>t(!0),title:"Layer5 Content Form"}),I.createElement(C(),{isOpen:e,onRequestClose:M,className:"Modal",overlayClassName:"Overlay",ariaHideApp:!1,contentLabel:"Content Form"},I.createElement(n.default,{secondary:!0,className:"close-modal-btn",onClick:M}," ",I.createElement(r.v,null)),I.createElement("h2",{className:"modal-heading"},"Layer5 Content Registration Form"),I.createElement("div",{className:"content-form"},I.createElement(m,null)))),I.createElement("div",{className:"item"},I.createElement("p",null,"Upon being accepted, you'll work with a coordinator on the content team to decide on a topic, develop a project plan, and discuss submission details."))),I.createElement("br",null),I.createElement("h2",null,"What are some suggested topics?"),I.createElement("p",null,"Here are some suggested topics to get you started. If you have an idea that isn't listed here or if you have any question, please let us know on our"," ",I.createElement("a",{href:"https://discuss.layer5.io/"},"Discuss Forum")," /"," ",I.createElement("a",{href:"https://layer5io.slack.com/"},"Slack Channel"),"."),I.createElement("ul",null,I.createElement("li",null,I.createElement("p",null,I.createElement("strong",null,"DevOps/Observability/Kubernetes:")),I.createElement("ul",null,I.createElement("li",null,I.createElement("p",null,"Distributed Tracing in Context of Meshery's Architecture.")),I.createElement("li",null,I.createElement("p",null,"One-stop Cloud Native Market Place - Meshery Catalog.")),I.createElement("li",null,I.createElement("p",null,"Interpreting your Cloud Native Performance - SMP.")),I.createElement("li",null,I.createElement("p",null,"Creating and Deploying your first application with MeshMap.")),I.createElement("li",null,I.createElement("p",null,"Load generation and Load balancing.")),I.createElement("li",null,I.createElement("p",null,"DevOps and Platform Engineering.")),I.createElement("li",null,I.createElement("p",null,"Beginners guide to Meshmodel.")),I.createElement("li",null,I.createElement("p",null,"Enhancing Microservices Observability with Meshery and Prometheus.")))),I.createElement("li",null,I.createElement("p",null,I.createElement("strong",null,"Community:")),I.createElement("ul",null,I.createElement("li",null,I.createElement("p",null,"Building Bridges, Not Walls: The Power of Open Source Collaboration.")),I.createElement("li",null,I.createElement("p",null,"A Deep Dive into Meshery's Contribution to Cloud Native Ecosystem.")),I.createElement("li",null,I.createElement("p",null,"Open Source Sustainability: Funding Models for Long-Term GitHub Projects.")),I.createElement("li",null,I.createElement("p",null,"Importance to an open source community.")),I.createElement("li",null,I.createElement("p",null,"Beyond Code: The Unsung Heroes of Open Source - Documenters, Testers, and Designers.")),I.createElement("li",null,I.createElement("p",null,"Open Source Alchemy: Transforming Community Contributions into Gold.")),I.createElement("li",null,I.createElement("p",null,"Collaborative Open Source Development: Inside the Community of Layer5."))))),I.createElement("br",null),I.createElement("h2",null,"How to Submit and Review Your Writing?"),I.createElement("p",null,"The Writing Program offers writers two convenient ways to get their writings reviewed by Community. Whether you prefer working with Google Docs or contributing directly to the website, we've got you covered. This structured guide will walk you through both options, ensuring that your valuable content is reviewed effectively."," "),I.createElement("ol",null,I.createElement("li",null,I.createElement("p",null,I.createElement("strong",null,"Google Docs Review:")),I.createElement("p",null,"If you prefer a straightforward approach, start by crafting your blog article within"," ",I.createElement("a",{href:"https://docs.google.com/"},"Google Docs"),", ensuring it's well-structured and error-free. Share the document with us by adding it to the"," ",I.createElement("a",{href:"https://drive.google.com/drive/folders/1o6ZSqCq1QUJmLIjl_Y0VgT_azNbgg1W2"},"Community Drive"),", we will provide feedback directly within the Google Doc. Engage in discussions to refine your content collaboratively. Once thoroughly reviewed, prepare your submission according to community guidelines.")),I.createElement("li",null,I.createElement("p",null,I.createElement("strong",null,"Website Contribution Review:")),I.createElement("p",null,"For those comfortable with local website development, contribute directly to the community website. ",I.createElement("a",{href:"https://github.com/layer5io/layer5/blob/master/CONTRIBUTING.md"},"Set up your local environment"),", create a blog post adhering to specified guidelines, and submit it via a Pull Request on ",I.createElement("a",{href:"https://github.com/layer5io/layer5/"},"GitHub"),". Reviewers will provide feedback, and you'll refine your post collaboratively. Upon completion, maintainers will merge your blog post into the website repository, celebrating your contribution."))),I.createElement("h3",null,"Additional Resources"),I.createElement("ul",null,I.createElement("li",null,I.createElement("a",{href:"https://github.com/layer5io/layer5/blob/master/CONTRIBUTING.md#adding-a-blog-post"},"Contributing to Layer5 Blogs")),I.createElement("li",null,I.createElement("a",{href:"https://github.com/layer5io/layer5/blob/master/CONTRIBUTING.md#adding-a-resource"},"Contributing to Layer5 Resources")),I.createElement("li",null,I.createElement("a",{href:"https://github.com/layer5io/layer5/labels/area%2Fblog"},"View open Writing Program issues")),I.createElement("li",null,"Join the"," ",I.createElement("a",{href:"https://discuss.layer5.io/"},"Layer5 Discussion Forum")),I.createElement("li",null,"Explore our ",I.createElement(l.Link,{to:"/resources"},"Resource Library")),I.createElement("li",null,I.createElement(l.Link,{to:"/learn"},"Learn Cloud Native"))),I.createElement(D.Z,null)))))};var L=()=>I.createElement(I.Fragment,null,I.createElement(s,null));const z=()=>I.createElement(g.Z,{title:"Writing Program",description:"Work with authors and technologists from around the world to share your knowledge of cloud native infrastructure, infrastructure as code, modern application management, Kubernetes, service meshes and related technologies."})}}]);
//# sourceMappingURL=component---src-pages-community-handbook-writing-program-js-61b17ca8e554c27358e9.js.map