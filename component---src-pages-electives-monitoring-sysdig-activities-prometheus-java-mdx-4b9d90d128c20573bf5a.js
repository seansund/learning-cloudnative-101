(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{"6sdy":function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return b})),t.d(a,"default",(function(){return i}));var n=t("wx14"),l=t("zLVn"),c=(t("q1tI"),t("7ljp")),p=t("013z"),b=(t("qKvR"),{}),r={_frontmatter:b},o=p.a;function i(e){var a=e.components,t=Object(l.a)(e,["components"]);return Object(c.b)(o,Object(n.a)({},r,t,{components:a,mdxType:"MDXLayout"}),Object(c.b)("h3",null,"Prerequisite"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Configure the Sysdig Agent on a kubernetes cluster, you can use one of the labs in this bootcamp located ",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/monitoring/sysdig/#activities"}),"here"))),Object(c.b)("h3",null,"Deploy java application enable with prometheus"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"Review the instrumented java application ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/ibm-cloud-architecture/learning-cloudnative-101/blob/master/examples/monitoring/prometheus/java/src/main/java/Main.java"}),"Main.java"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"Creagte a namespace to deploy the application"))),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"kubectl create ns dev\n")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Deploy the following java application")),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),'cat <<EOF | kubectl -n dev apply -f -\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: prometheus-java-app\nspec:\n  selector:\n    matchLabels:\n      app: prometheus-java-app\n  template:\n    metadata:\n      labels:\n        app: prometheus-java-app\n      annotations:\n        prometheus.io/scrape: "true"\n        prometheus.io/path: "/prometheus"\n        prometheus.io/port: "8080"\n    spec:\n      containers:\n        - name: prometheus-java-app\n          image: docker.io/ibmcase/prometheus-java\nEOF\n')),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Expose java application service")),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"kubectl -n dev create svc nodeport prometheus-java-app --tcp=80:80 --tcp 8080:8080\n")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Deploy the following java application")),Object(c.b)("h3",null,"Test the application"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Expose application web service on local port 8000, and prometheus on 8080, each command on a new terminal")),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"kubectl -n dev port-forward service/prometheus-java-app 8000:80\n")),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"kubectl -n dev port-forward service/prometheus-java-app 8080:8080\n")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Send http request to the web service")),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"while true; do sleep 1; curl http://localhost:8000 -si | head -1 ; done\n")),Object(c.b)("p",null,"Output looks like this"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"HTTP/1.1 200 OK\n")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Query prometheus endpoint")),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"curl http://localhost:8080/prometheus\n")),Object(c.b)("p",null,"Output looks like this"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"# HELP process_cpu_seconds_total Total user and system CPU time spent in seconds.\n# TYPE process_cpu_seconds_total counter\nprocess_cpu_seconds_total 1.39\n# HELP process_start_time_seconds Start time of the process since unix epoch in seconds.\n")),Object(c.b)("h2",null,"Java Prometheus Metrics in Sysdig"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Open Sysdig"),Object(c.b)("li",{parentName:"ul"},"Select Explore"),Object(c.b)("li",{parentName:"ul"},"Select Deployments"),Object(c.b)("li",{parentName:"ul"},"Select ",Object(c.b)("inlineCode",{parentName:"li"},"dev")," namespace"),Object(c.b)("li",{parentName:"ul"},"Select deployment ",Object(c.b)("inlineCode",{parentName:"li"},"prometheus-java-app")),Object(c.b)("li",{parentName:"ul"},"Select from drop down metrics, select Prometheus"),Object(c.b)("li",{parentName:"ul"},"Select metrics collected start with ",Object(c.b)("inlineCode",{parentName:"li"},"jvm_")," or ",Object(c.b)("inlineCode",{parentName:"li"},"java_")," for example ",Object(c.b)("inlineCode",{parentName:"li"},"java_my_counter"))),Object(c.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"84.375%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAARCAIAAABSJhvpAAAACXBIWXMAABYlAAAWJQFJUiTwAAACLUlEQVQ4y4VT3WrUQBSeh5BeiFqwiCiIWKHFokjVUq/7NH0E72uxutRqa1frD/gmXqkXpcjSTTabZJNMksnPZHLGL8mm7toVP8LhzJnznb+cYQv317deH0ileBiJJBFCpGmaAen/wS7dfri5/cLK4hPLtEVkpTHYURSFYZhLSURlDapxppeqTDLJFpbWtve6WuuAc1kUqiwbppjAH0uSoCKRJlxEbpCzxScb+0dfQeaco5KiRp7npHWW5ygfR0iQpUTwAmkLpTKliBS7svjo+V4XCXt90xzaHudNhQinGzmpTAPk1c7BR2gDy0JVZd1Y5ZullCaQujrSX3wcqCjY/N3Hu4efcbZtB1VVFwiQpjqOSErNfe3aJGIdeDrPtYh0IhAIcWFkl++sdt5VmTGNJmqJfgJf+x7Bz3N1yAkhLFMnifZHsFdXIoaRXbz14NX+ETiY9LikQpJra5mTbSF/U2SVMM+qawSyLVIFxSGbu3Fv5+2HKTKahAfISjWtVvOjtm2Ew8xrtxnkaj5oEvnbOdO5aTf/Y1ZmfKoYV9u6ziATsbmbKy+nyUrhr5eTnH+SL1xf3nnz/oxM5zwm0RjLFmx+aa1z+GmSjBUOAmw6ly2wrZBZDeiqBbu68nS3+6WaIh4itgIvJAgMw3Acx/d96HgVDRkSyy/rpzZez2vL68+2Oqem9e37zx/HJ8e/egNnZNhOzxz2hw4+w3YNZ3Q6rCwD1+vbjjXyeoMh7L8B3fumklDFt0oAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(c.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"java-metrics",title:"java-metrics",src:"/static/d5158492f1755fdd3ebb267aab304add/3cbba/java_my_counter.png",srcSet:["/static/d5158492f1755fdd3ebb267aab304add/7fc1e/java_my_counter.png 288w","/static/d5158492f1755fdd3ebb267aab304add/a5df1/java_my_counter.png 576w","/static/d5158492f1755fdd3ebb267aab304add/3cbba/java_my_counter.png 1152w","/static/d5158492f1755fdd3ebb267aab304add/0b124/java_my_counter.png 1728w","/static/d5158492f1755fdd3ebb267aab304add/7d560/java_my_counter.png 1994w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(c.b)("h2",null,"References"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Sysdig Blog Prometheus metrics / OpenMetrics code instrumentation (",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://sysdig.com/blog/prometheus-metrics/"}),"https://sysdig.com/blog/prometheus-metrics/"),")")))}i.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-electives-monitoring-sysdig-activities-prometheus-java-mdx-4b9d90d128c20573bf5a.js.map