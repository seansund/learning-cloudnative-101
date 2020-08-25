(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{VcCP:function(e,n,a){"use strict";a.r(n),a.d(n,"_frontmatter",(function(){return r})),a.d(n,"default",(function(){return p}));var t=a("wx14"),o=a("zLVn"),l=(a("q1tI"),a("7ljp")),i=a("013z"),r=(a("qKvR"),{}),c={_frontmatter:r},s=i.a;function p(e){var n=e.components,a=Object(o.a)(e,["components"]);return Object(l.b)(s,Object(t.a)({},c,a,{components:n,mdxType:"MDXLayout"}),Object(l.b)("h2",null,"Solution - sample-01"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Create the topics ",Object(l.b)("inlineCode",{parentName:"li"},"topic1")," and ",Object(l.b)("inlineCode",{parentName:"li"},"topic1.DLT")," in your IBM Event Streams on Cloud instance."),Object(l.b)("li",{parentName:"ol"},Object(l.b)("inlineCode",{parentName:"li"},"git clone https://github.com/spring-projects/spring-kafka.git")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("inlineCode",{parentName:"li"},"cd spring-kafka/samples/sample-01")),Object(l.b)("li",{parentName:"ol"},"Include the necessary credentials in the ",Object(l.b)("inlineCode",{parentName:"li"},"src/main/resources/application.yml")," file by merging the existing contents with the structure below:",Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yaml"}),'spring:\nkafka:\n bootstrap-servers: <your-bootstrap-nodes-property-of-your-IBM-Event-Streams-on-Cloud-instance>\n ssl:\n   protocol: TLSv1.2\n properties:\n   sasl.jaas.config: org.apache.kafka.common.security.plain.PlainLoginModule required username="token" password="<your-api-key-of-your-IBM-Event-Streams-on-Cloud-instance>";\n   sasl.mechanism: PLAIN\n   security.protocol: SASL_SSL\n'))),Object(l.b)("li",{parentName:"ol"},Object(l.b)("inlineCode",{parentName:"li"},"mvn clean package")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("inlineCode",{parentName:"li"},"java -jar target/kafka-sample-01-2.4.4.RELEASE.jar")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("inlineCode",{parentName:"li"},"curl -X POST http://localhost:8080/send/foo/bar")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("inlineCode",{parentName:"li"},"curl -X POST http://localhost:8080/send/foo/fail"))),Object(l.b)("h2",null,"Solution - sample-02"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Create the topics ",Object(l.b)("inlineCode",{parentName:"li"},"foos")," and ",Object(l.b)("inlineCode",{parentName:"li"},"bars")," in your IBM Event Streams on Cloud instance."),Object(l.b)("li",{parentName:"ol"},Object(l.b)("inlineCode",{parentName:"li"},"git clone https://github.com/spring-projects/spring-kafka.git")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("inlineCode",{parentName:"li"},"cd spring-kafka/samples/sample-02")),Object(l.b)("li",{parentName:"ol"},"Include the necessary credentials in the ",Object(l.b)("inlineCode",{parentName:"li"},"src/main/resources/application.yml")," file by merging the existing contents with the structure below:",Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yaml"}),'spring:\nkafka:\n bootstrap-servers: <your-bootstrap-nodes-property-of-your-IBM-Event-Streams-on-Cloud-instance>\n ssl:\n   protocol: TLSv1.2\n properties:\n   sasl.jaas.config: org.apache.kafka.common.security.plain.PlainLoginModule required username="token" password="<your-api-key-of-your-IBM-Event-Streams-on-Cloud-instance>";\n   sasl.mechanism: PLAIN\n   security.protocol: SASL_SSL\n'))),Object(l.b)("li",{parentName:"ol"},Object(l.b)("inlineCode",{parentName:"li"},"mvn clean package")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("inlineCode",{parentName:"li"},"java -jar target/kafka-sample-02-2.4.4.RELEASE.jar")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("inlineCode",{parentName:"li"},"curl -X POST http://localhost:8080/send/foo/bar")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("inlineCode",{parentName:"li"},"curl -X POST http://localhost:8080/send/bar/baz")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("inlineCode",{parentName:"li"},"curl -X POST http://localhost:8080/send/unknown/xxx"))),Object(l.b)("h2",null,"Solution - sample-03"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Create the topics ",Object(l.b)("inlineCode",{parentName:"li"},"topic2")," and ",Object(l.b)("inlineCode",{parentName:"li"},"topic3")," in your IBM Event Streams on Cloud instance."),Object(l.b)("li",{parentName:"ol"},Object(l.b)("inlineCode",{parentName:"li"},"git clone https://github.com/spring-projects/spring-kafka.git")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("inlineCode",{parentName:"li"},"cd spring-kafka/samples/sample-03")),Object(l.b)("li",{parentName:"ol"},"Include the necessary credentials in the ",Object(l.b)("inlineCode",{parentName:"li"},"src/main/resources/application.yml")," file by merging the existing contents with the structure below:",Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yaml"}),'spring:\nkafka:\n bootstrap-servers: <your-bootstrap-nodes-property-of-your-IBM-Event-Streams-on-Cloud-instance>\n ssl:\n   protocol: TLSv1.2\n properties:\n   sasl.jaas.config: org.apache.kafka.common.security.plain.PlainLoginModule required username="token" password="<your-api-key-of-your-IBM-Event-Streams-on-Cloud-instance>";\n   sasl.mechanism: PLAIN\n   security.protocol: SASL_SSL\n'))),Object(l.b)("li",{parentName:"ol"},Object(l.b)("inlineCode",{parentName:"li"},"mvn clean package")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("inlineCode",{parentName:"li"},"java -jar target/kafka-sample-03-2.4.4.RELEASE.jar")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("inlineCode",{parentName:"li"},"curl -X POST http://localhost:8080/send/foos/a,b,c,d,e"))))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-electives-eda-activities-labs-lab-2-solution-mdx-2927881a98fa8f453dcb.js.map