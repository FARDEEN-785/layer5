(self.webpackChunkLayer5=self.webpackChunkLayer5||[]).push([[8236],{19704:function(e,n,t){"use strict";t(67294);n.Z=t.p+"static/meshery-operator-dark.aabaafd9.svg"},28157:function(e,n,t){var a=t(15301).w_;e.exports.w=function(e){return a({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"8 17 12 21 16 17"}},{tag:"line",attr:{x1:"12",y1:"12",x2:"12",y2:"21"}},{tag:"path",attr:{d:"M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"}}]})(e)}},25236:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});var a=t(67294);var i=t(85313).default.div.withConfig({displayName:"featureUseCardstyle__FeatureUseCardWrapper",componentId:"sc-hzu6v9-0"})(["\n  margin-bottom: 40px;\n  height: 100%;\n  \n  .image-container {\n    width: 100%;\n    padding: 10px 10px 5px 10px;\n    border-radius: 0.5rem;\n    border: 1px solid var(--grey-light, #A0AAAA);\n    margin: 0 auto 10px auto;\n    \n    img{\n      border-radius: 0.5rem;\n    }\n    \n  }\n\n  .feature-title {\n    font-weight: bold;\n    font-size: 1.2rem;\n    margin-bottom: 0.25rem;\n  }\n\n  .feature-info-container{\n    margin-top: 1.5rem\n  }\n\n  .feature-description{\n    color: ",";\n  }\n\n"],(e=>e.theme.greyA0AAAAToGrey666666)),r=t(37242);var s=e=>a.createElement(r.JX,{sm:e.sm,md:e.md,lg:e.lg,className:"display-container"},a.createElement(i,null,a.createElement("div",{className:"image-container"},a.createElement("img",{src:e.data.image,alt:""})),a.createElement("div",{className:"feature-info-container"},a.createElement("p",{className:"feature-title"},e.data.heading),a.createElement("span",{className:"feature-description"},e.data.subtitle))))},26510:function(e,n,t){"use strict";t.r(n),t.d(n,{Head:function(){return v},default:function(){return A}});var a=t(67294),i=t(17875),r=t(85313);var s=r.default.div.withConfig({displayName:"featureHerostyle__FeatureHeroWrapper",componentId:"sc-13qkg7u-0"})(["\n  .heading-container {\n    z-index: 3;\n    width: 100%;\n    position: relative;\n    padding: 100px 0 0;\n\n    .section-title {\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      align-items: center;\n    }\n\n    .whiteboard-image{\n      perspective: 1000px;\n      padding: 0 1rem;\n      &>img {\n        width: 100%;\n        margin: 2rem auto;\n      }\n    }\n\n    #whiteboard-svg {\n      transition: transform 0.3s ease-out;\n      transform-origin: top center;\n      transform: rotateX(0deg);\n    }\n\n    .whiteboard-heading {\n      color: "," !important;\n      text-align: center;\n      font-size: 4rem;\n      font-weight: 600;\n      max-width: 965px;\n      margin: 0 auto;\n      padding: 0 1rem;\n    }\n\n    .heading-image {\n      margin: 0 auto;\n    }\n\n  }\n\n  .heading-container::before {\n    content: '';\n    width: 15rem;\n    height: 15rem;\n    border-radius: 50%;\n    background: #00B39F;\n    filter: blur(150px);\n    position: absolute;\n    left: 50%;\n    top: 40%;\n    transform: translate(-50%, -50%);\n    z-index: -3;\n  }\n\n  .whiteboard-text {\n    color: ",";\n    text-align: center;\n    font-size: 1.75rem;\n    line-height: 2.4rem;\n    max-width: 965px;\n    margin: 1rem auto;\n    padding: 0 1rem\n  }\n\n  @media (max-width: 768px) {\n    .whiteboard-heading{\n      font-size: 2.75rem !important;\n    }\n    .whiteboard-text {\n      font-size: 1.25rem;\n      line-height: 1.5rem;\n    }\n  }\n\n  @media (max-width: 500px) {\n    .section-title {\n      margin-bottom: 1rem;\n      text-align: center !important;\n    }\n\n    .whiteboard-heading{\n      font-size: 2.5rem !important;\n    }\n\n    .whiteboard-text {\n      font-size: 1rem;\n      line-height: 1.2rem;\n    }\n  }\n  \n"],(e=>e.theme.whiteToBlack),(e=>e.theme.greyA0AAAAToGrey666666)),o=t(37242),l=t(63689),c=t(28157);var m=e=>((0,a.useEffect)((()=>{const e=document.getElementById("whiteboard-svg"),n=()=>{if(e.getBoundingClientRect().top<=110){const n=-window.scrollY/50;e.style.transform="rotateX("+n+"deg)"}else e.style.transform=null};return window.addEventListener("scroll",n),()=>{window.removeEventListener("scroll",n)}}),[]),a.createElement(s,null,a.createElement(o.W2,{className:"heading-container"},a.createElement("div",{className:"section-title"},a.createElement("h1",{className:"whiteboard-heading"},e.data.heading),a.createElement("p",{className:"whiteboard-text"},e.data.sub_heading),a.createElement(l.default,{primary:!0,className:"banner-btn two",title:"See Meshery",url:"/cloud-native-management/meshery"},a.createElement(c.w,{size:21,className:"icon-left"}))),a.createElement("div",{className:"whiteboard-image"},a.createElement("img",{id:"whiteboard-svg",src:e.data.image,alt:""}))))),d=t.p+"static/cluster-b100f5d31facd01d256c4a6ca907d341.png",g=t.p+"static/deploy-c8aa998f3b1f96e2bea7403d741ab452.png",u=t.p+"static/config-83a60ae70e632258f36f52d2d6b21989.png",h=t(25236);var p=r.default.div.withConfig({displayName:"kubestyle__CommentsWrapper",componentId:"sc-yeabr8-0"})(["\n  height: 100%;\n  \n  .feature-use-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-between;\n  }\n\n\n  .collaboration_display {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    width: 100%;\n    margin: 0 10px;\n    align-items: flex-start;\n    justify-content: center;\n  }\n  \n  \n  .use-heading {\n    color: ",";\n    font-size: 2rem;\n    text-align: center;\n    margin-bottom: 2.5rem;\n\n    .highlighted-text {\n      color: white;\n      padding: 0 0.5rem;\n      border-radius: 0.5rem;\n      background: ",";\n      font-weight: bold;\n    }\n\n\n"],(e=>e.theme.whiteToBlack),(e=>e.theme.green009A89ToGreen00B39F)),x=t(93723),f=t(71082),w=t(19704);var M=t(89192);const y=r.default.div.withConfig({displayName:"features__FeatureWrapper",componentId:"sc-whd59e-0"})(["\n  min-height: fit-content;\n  border-width: 2px 2px 2px 2px;\n  background-color: ",";\n  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);\n  padding-top: 0;\n  padding-bottom: 100px;\n  @media (max-width: 468px) {\n    margin: 3rem 0;\n  }\n  @media (max-width: 767px) {\n    padding-top: 0;\n    padding-bottom: 0;\n  }\n  .catalog-container .catalog:nth-child(odd) {\n    .catalog-image {\n      .image-wrapper {\n        justify-content: center;\n        @media (max-width: 767px) {\n          justify-content: center;\n        }\n      }\n    }\n  }\n\n  .catalog-container .catalog:nth-child(even) {\n    .catalog-image {\n      @media (max-width: 767px) {\n        order: 0;\n      }\n    }\n    .catalog-detail {\n      @media (max-width: 767px) {\n        order: 1;\n      }\n    }\n  }\n\n  .catalog {\n    display: flex;\n    padding: 2rem 0;\n    @media (max-width: 768px) {\n      padding: 2rem 0;\n    }\n    @media (max-width: 468px) {\n      flex-direction: column;\n    }\n    .catalog-detail {\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      .heading {\n        font-size: 3.125rem;\n        line-height: 3.813rem;\n        color: ",";\n        transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);\n        margin-bottom: 2rem;\n        @media (max-width: 992px) {\n          font-size: 2.8rem;\n          line-height: 3rem;\n        }\n        @media (max-width: 767px) {\n          font-size: 2rem;\n          line-height: 2.5rem;\n          text-align: center;\n          padding-left: 100px;\n          padding-right: 100px;\n          margin-bottom: 1rem;\n        }\n        @media (max-width: 467px) {\n          padding-left: 25px;\n          padding-right: 25px;\n        }\n      }\n      .caption {\n        font-weight: 400;\n        font-size: 1.563rem;\n        line-height: 2rem;\n        color: ",";\n        transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);\n        opacity: 0.8;\n        @media (max-width: 767px) {\n          font-size: 1rem;\n          line-height: 1.5rem;\n          text-align: center;\n          padding-left: 100px;\n          padding-right: 100px;\n        }\n        @media (max-width: 467px) {\n          padding-left: 25px;\n          padding-right: 25px;\n        }\n      }\n    }\n    .catalog-image {\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      .image-wrapper {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        @media (max-width: 767px) {\n          justify-content: center;\n        }\n        .calalog-image {\n          max-width: 300px;\n          @media (max-width: 767px) {\n            max-width: 200px;\n            margin-bottom: 20px;\n          }\n        }\n      }\n    }\n  }\n"],(e=>e.theme.body),(e=>e.theme.tertiaryColor),(e=>e.theme.tertiaryColor));var b=()=>{const{isDark:e}=(0,M.I)();return a.createElement(y,null,a.createElement(o.W2,{className:"catalog-container"},a.createElement(o.X2,{className:"catalog"},a.createElement(o.JX,{md:6,className:"catalog-image"},a.createElement("div",{className:"image-wrapper"},a.createElement(x.S,{src:"../../assets/images/docker-extension/docker-extension-meshery.webp",alt:"Meshery, Docker Extension for Meshery",loading:"lazy",__imageData:t(79034)}))),a.createElement(o.JX,{md:6,className:"catalog-detail"},a.createElement("h2",{className:"heading"},"Docker Extension for Meshery"),a.createElement("p",{className:"caption"},"From the convenience of your Docker Desktop interface, connect Meshery with your Kubernetes cluster. Watch as MeshSync discovers all of your Kuberentes clusters."),a.createElement(f.Link,{className:"link",href:"/docker-extension-meshery"},"Learn more →"))),a.createElement(o.X2,{className:"catalog"},a.createElement(o.JX,{md:6,className:"catalog-detail"},a.createElement("h2",{className:"heading"},"Meshery Operator"),a.createElement("p",{className:"caption"},"The Kubernetes operator for Meshery, supports discovery and eventing of greenfield and brownfield of your workloads, services, deployments, replicasets, pods, containers, services, persistent volumes and all of your Kubernetes-based infrastructure."),a.createElement(f.Link,{className:"link",href:"/cloud-native-management/meshery/meshery-operator"},"Learn more →")),a.createElement(o.JX,{md:6,className:"catalog-image"},a.createElement("div",{className:"image-wrapper"},a.createElement("img",{src:w.Z,className:"calalog-image"})))),a.createElement(o.X2,{className:"catalog"},a.createElement(o.JX,{md:6,className:"catalog-image"},a.createElement("div",{className:"image-wrapper"},a.createElement("img",{src:"data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNjEgMzU5Ij48dGl0bGU+bWVzaHN5bmM8L3RpdGxlPjxwYXRoIGQ9Ik02My41LDExMy41YTEzMy4xMywxMzMuMTMsMCwwLDEsOTQtNjcuNWwtOC00NkExODEuNTMsMTgxLjUzLDAsMCwwLDIyLDkxWiIgc3R5bGU9ImZpbGw6IzAwZDNhOSIvPjxwYXRoIGQ9Ik02NS41LDI0N2ExMzMuNDIsMTMzLjQyLDAsMCwxLTE5LTY5QTEzMC4xNCwxMzAuMTQsMCwwLDEsNTUsMTMxLjVsLTQ0LTE2QTE4NC41NCwxODQuNTQsMCwwLDAsMCwxNzhhMTgyLjU0LDE4Mi41NCwwLDAsMCwyNS41LDkzWiIgc3R5bGU9ImZpbGw6IzAwYjM5ZiIvPjxwYXRoIGQ9Ik0xODIsMzEyaC0xLjVDMTM5LDMxMiwxMDIsMjkzLDc3LDI2M0w0MSwyOTNhMTgxLjE4LDE4MS4xOCwwLDAsMCwxMzkuNSw2NmgyWiIgc3R5bGU9ImZpbGw6IzAwZDNhOSIvPjxwYXRoIGQ9Ik0yOTcsMjQ0YTEzNC4wNywxMzQuMDcsMCwwLDEtOTUsNjZsNy41LDQ2LjVhMTgwLjE4LDE4MC4xOCwwLDAsMCwxMjgtODkuNVoiIHN0eWxlPSJmaWxsOiMwMGIzOWYiLz48cGF0aCBkPSJNMjk2LDExMC41QTEzMy40NiwxMzMuNDYsMCwwLDEsMzE0LDE3OGExMjgsMTI4LDAsMCwxLTksNDhsNDQsMTdhMTg0LjY2LDE4NC42NiwwLDAsMCwxMi02NC41LDE4MC44LDE4MC44LDAsMCwwLTI0LjUtOTFaIiBzdHlsZT0iZmlsbDojMDBkM2E5Ii8+PHJlY3QgeD0iMjUxLjMiIHk9IjE3Ljg1IiB3aWR0aD0iNDQiIGhlaWdodD0iNjcuOCIgc3R5bGU9ImZpbGw6bm9uZSIvPjxwb2x5Z29uIHBvaW50cz0iMjYxLjQgODUuNjUgMjUxLjMgNzUuNTUgMjc1LjEgNTEuNzUgMjUxLjMgMjcuOTUgMjYxLjQgMTcuODUgMjk1LjMgNTEuNzUgMjYxLjQgODUuNjUiIHN0eWxlPSJmaWxsOiMyMGJkYWIiLz48cmVjdCB4PSIxODMuNSIgeT0iMTcuODUiIHdpZHRoPSI0NCIgaGVpZ2h0PSI2Ny44IiBzdHlsZT0iZmlsbDpub25lIi8+PHBvbHlnb24gcG9pbnRzPSIxOTMuNiA4NS42NSAxODMuNSA3NS41NSAyMDcuMyA1MS43NSAxODMuNSAyNy45NSAxOTMuNiAxNy44NSAyMjcuNSA1MS43NSAxOTMuNiA4NS42NSIgc3R5bGU9ImZpbGw6IzIwYmRhYiIvPjwvc3ZnPg==",className:"calalog-image"}))),a.createElement(o.JX,{md:6,className:"catalog-detail"},a.createElement("h2",{className:"heading"},"MeshSync"),a.createElement("p",{className:"caption"},"MeshSync was designed from the ground up to perform tiered discovery of your Kubernetes enviroment. MeshSync's working snapshot of the state of each cluster is stored in-memory and continuously refreshed.")))))},N=t(10710);var E=()=>{let e={heading:"Kubernetes Multi-cluster Operation",sub_heading:"Manage all of your Kubernetes clusters with the cloud native management plane, Meshery.",image:d},n=[{heading:"Streamlined Multi-Cluster Operations",subtitle:"Empower your workflow with Meshery's multi-context feature, enabling seamless deployment and operations across clusters while simplifying visualization for efficient management.",image:g},{heading:"Uniform Cluster Management Made Easy",subtitle:"Meshery's intuitive context switcher allows swift selection and execution of tasks, enhancing productivity in cluster management.",image:d},{heading:"Seamless Meshery Configuration",subtitle:"Effortlessly manage Meshery across multiple clusters through the Settings page. Add, remove, or modify clusters with ease, and fine-tune configurations to tailor Meshery's awareness to your infrastructure needs.",image:u}];return a.createElement(p,null,a.createElement(m,{data:e}),a.createElement(b,null),a.createElement(o.W2,null,a.createElement("div",{className:"feature-use-container"},a.createElement("div",null,a.createElement("h2",{className:"use-heading"}," ","Wrangling your services one cluster at-a-time "," ")),a.createElement("div",{className:"collaboration_display"},n.map((e=>a.createElement(h.Z,{data:e,key:e.heading,sm:12,md:6,lg:4})))))),a.createElement(N.Z,null))};var A=()=>a.createElement(E,null);const v=()=>a.createElement(i.Z,{title:"Kubernetes Multi-cluster Operation",description:"Manage all of your Kubernetes clusters with the cloud native management plane, Meshery. Learn how Meshery makes connecting, discovering, and configuring multiple clusters a breeze."})},79034:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/webp;base64,UklGRqgAAABXRUJQVlA4WAoAAAAQAAAAEwAACgAAQUxQSC8AAAABL6CQjSQ4RbE/w6ldRESG3UNVAxHUJoMApoMArwamf5r7EyCi/xOQg7qH8Y85CgBWUDggUgAAANADAJ0BKhQACwA+0VSjS6gkoyGwCAEAGglnALbIIek9hxiwyr2RwAD+8W/Dyjlrpa3V5eL9DvlaQ+Fky68LU4SY8HfPy/Tqy00IJsdyfvWRAAA="},"images":{"fallback":{"src":"/static/2b9aa40f67021d16ff21aab9d729f27f/f4c24/docker-extension-meshery.webp","srcSet":"/static/2b9aa40f67021d16ff21aab9d729f27f/5fa3b/docker-extension-meshery.webp 827w,\\n/static/2b9aa40f67021d16ff21aab9d729f27f/14d4c/docker-extension-meshery.webp 1654w,\\n/static/2b9aa40f67021d16ff21aab9d729f27f/f4c24/docker-extension-meshery.webp 3308w","sizes":"(min-width: 3308px) 3308px, 100vw"},"sources":[]},"width":3308,"height":1848}')}}]);
//# sourceMappingURL=component---src-pages-solutions-kubernetes-multi-cluster-operation-index-js-bdabea6850c0d41322bb.js.map