(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{gERQ:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return o})),n.d(t,"default",(function(){return b}));var a=n("wx14"),r=n("zLVn"),i=(n("q1tI"),n("7ljp")),s=n("013z"),o=(n("qKvR"),{}),p={_frontmatter:o},l=s.a;function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)(l,Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h3",null,"Container Health Issues"),Object(i.b)("p",null,"The first issue is caused by application instances entering an unhealthy state and responding to user requests with error messages. Unfortunately, this state does not cause the container to stop, so the Kubernetes cluster is not able to detect this state and restart the container. Luckily, the application has an internal endpoint that can be used to detect whether or not it is healthy. This endpoint is ",Object(i.b)("inlineCode",{parentName:"p"},"/healthz")," on port ",Object(i.b)("inlineCode",{parentName:"p"},"8080"),"."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Your first task will be to ",Object(i.b)("em",{parentName:"li"},"create a probe")," to check this endpoint periodically.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"If the endpoint returns an ",Object(i.b)("strong",{parentName:"li"},"error")," or ",Object(i.b)("strong",{parentName:"li"},"fails")," to respond, the probe will detect this and the cluster will restart the container.")))),Object(i.b)("h3",null,"Container Startup Issues"),Object(i.b)("p",null,"Another issue is caused by new pods when they are starting up. The application takes a few seconds after startup before it is ready to service requests. As a result, some users are getting error message during this brief time."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"To fix this, you will need to ",Object(i.b)("em",{parentName:"p"},"create another probe"),". To detect whether the application is ",Object(i.b)("inlineCode",{parentName:"p"},"ready"),", the probe should simply make a request to the root endpoint, ",Object(i.b)("em",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"em"},"/ready"),", on port ",Object(i.b)("inlineCode",{parentName:"em"},"8080")),". If this request succeeds, then the application is ready.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Also set a ",Object(i.b)("inlineCode",{parentName:"p"},"initial delay")," of ",Object(i.b)("inlineCode",{parentName:"p"},"5 seconds")," for the probes."))),Object(i.b)("p",null,"Here is the Pod yaml file,  ",Object(i.b)("strong",{parentName:"p"},"add")," the probes, then ",Object(i.b)("strong",{parentName:"p"},"create")," the pod in the cluster to test it."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"apiVersion: v1\nkind: Pod\nmetadata:\n  name: energy-shield-service\nspec:\n  containers:\n  - name: energy-shield\n    image: ibmcase/energy-shield:1\n")))}b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-lectures-kube-overview-activities-labs-lab-4-index-mdx-39571c398ded6fb37083.js.map