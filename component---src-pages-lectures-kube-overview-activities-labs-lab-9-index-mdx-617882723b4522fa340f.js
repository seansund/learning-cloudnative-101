(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{IaTu:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return p})),t.d(n,"default",(function(){return s}));var a=t("wx14"),c=t("zLVn"),o=(t("q1tI"),t("7ljp")),l=t("013z"),p=(t("qKvR"),{}),r={_frontmatter:p},b=l.a;function s(e){var n=e.components,t=Object(c.a)(e,["components"]);return Object(o.b)(b,Object(a.a)({},r,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",null,"Problem"),Object(o.b)("p",null,"Setup minikube"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"minikube start --network-plugin=cni\nkubectl apply -f https://docs.projectcalico.org/v3.9/manifests/calico.yaml\nkubectl -n kube-system set env daemonset/calico-node FELIX_IGNORELOOSERPF=true\nkubectl -n kube-system get pods | grep calico-node\n")),Object(o.b)("p",null,"Create secured pod"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"apiVersion: v1\nkind: Pod\nmetadata:\n  name: network-policy-secure-pod\n  labels:\n    app: secure-app\nspec:\n  containers:\n  - name: nginx\n    image: bitnami/nginx\n    ports:\n    - containerPort: 8080\n")),Object(o.b)("p",null,"Create client pod"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'apiVersion: v1\nkind: Pod\nmetadata:\n  name: network-policy-client-pod\nspec:\n  containers:\n  - name: busybox\n    image: radial/busyboxplus:curl\n    command: ["/bin/sh", "-c", "while true; do sleep 3600; done"]\n')),Object(o.b)("p",null,"Create a policy to allow only client pods with label ",Object(o.b)("inlineCode",{parentName:"p"},'allow-access: "true"')," to access secure pod"))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-lectures-kube-overview-activities-labs-lab-9-index-mdx-617882723b4522fa340f.js.map