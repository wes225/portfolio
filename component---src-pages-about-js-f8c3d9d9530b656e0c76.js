(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{144:function(e,t,n){"use strict";n.r(t);var a=n(150),o=n(7),r=(n(0),n(149)),i=n.n(r),l=n(155),s=Object(a.a)("div",{target:"eeh46vk0"})({name:"gcixap",styles:"display:flex;flex-direction:column;width:80%;"});t.default=function(){return Object(o.b)(l.a,null,Object(o.b)(s,null,Object(o.b)("h1",null,"About"),Object(o.b)("p",null,"I currently work as web integrator for Desjardins. Before that, I worked a lot in QA."),Object(o.b)("p",null,"I graduated from a college degree in Mobile development, then taught myself front end development."),Object(o.b)("p",null,"My favorite stack at the moment is React, and I'm slowly learning about Node and GraphQL. I have worked with Webpack, Firebase, ReactRouter and now Gatsby (this portfolio is built on it!)"),Object(o.b)("p",null,"When I'm not working I'm trying to find a new cool restaurent, or looking at crazy expensive coffee machines. Sometimes taking walks or at the Gym."),Object(o.b)("p",null,"Oh, I'm also creating a boardgame on the side."),Object(o.b)("p",null,"That should cover it. Or some of it. If you need help with your projects, get in touch ",Object(o.b)(i.a,{to:"/contact"}," here "))))}},151:function(e,t,n){var a;e.exports=(a=n(153))&&a.default||a},152:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return h}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return f});var a=n(7),o=n(0),r=n.n(o),i=n(4),l=n.n(i),s=n(149),c=n.n(s);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return s.withPrefix}),n.d(t,"navigate",function(){return s.navigate}),n.d(t,"push",function(){return s.push}),n.d(t,"replace",function(){return s.replace}),n.d(t,"navigateTo",function(){return s.navigateTo});var u=n(151),b=n.n(u);n.d(t,"PageRenderer",function(){return b.a});var d=n(30);n.d(t,"parsePath",function(){return d.a});var p=r.a.createContext({}),f=function(e){return Object(a.b)(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):Object(a.b)("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},153:function(e,t,n){"use strict";n.r(t);n(48);var a=n(0),o=n.n(a),r=n(4),i=n.n(r),l=n(49),s=n(2),c=function(e){var t=e.location,n=s.default.getResourcesForPathnameSync(t.pathname);return o.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json))};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=c},154:function(e){e.exports={data:{site:{siteMetadata:{title:"Ouissem Hammami"}}}}},155:function(e,t,n){"use strict";var a=n(150),o=n(7),r=n(154),i=(n(0),n(156)),l=n.n(i),s=n(152),c=n(149),u=n.n(c),b=Object(a.a)("label",{target:"etq56ut0"})({name:"17t6wqh",styles:'&{padding:10px 25px;background:transparent;outline:none !important;cursor:pointer;transition:all 0.3s ease;position:relative;display:inline-block;width:120px;line-height:50px;padding:0;border:none;}& span{position:relative;display:block;width:100%;height:100%;text-align:center;color:rgb(44,41,42);font-size:24px;}&::before,&::after{position:absolute;content:"";height:0%;width:2px;background:#000;}&::before{right:0;top:0;transition:all 0.1s ease;}&::after{left:0;bottom:0;transition:all 0.1s 0.2s ease;}&:hover:before{transition:all 0.1s 0.2s ease;height:100%;}&:hover:after{transition:all 0.1s ease;height:100%;}& span:before,& span:after{position:absolute;content:"";background:#000;}& span:before{left:0;top:0;width:0%;height:2px;transition:all 0.1s 0.1s ease;}& span:after{left:0;bottom:0;width:100%;height:2px;}& span:hover:before{width:100%;}'}),d=Object(a.a)("div",{target:"etq56ut1"})({name:"33dfoa",styles:"display:flex;flex-flow:row;flex-wrap:wrap;justify-content:space-around;align-self:center;width:80%;margin:1rem;"}),p=function(e){e.siteTitle;return Object(o.b)(d,null,Object(o.b)(u.a,{to:"/",style:{textDecoration:"none",flex:"0 1 100px"}},Object(o.b)(b,null,Object(o.b)("span",null,"Home"))),Object(o.b)(u.a,{to:"/about",style:{textDecoration:"none",flex:"0 1 100px"}},Object(o.b)(b,null,Object(o.b)("span",null,"About"))),Object(o.b)(u.a,{to:"/projects",style:{textDecoration:"none",flex:"0 1 100px"}},Object(o.b)(b,null,Object(o.b)("span",null,"Projects"))),Object(o.b)(u.a,{to:"/contact",style:{textDecoration:"none",flex:"0 1 100px"}},Object(o.b)(b,null,Object(o.b)("span",null,"Contact"))))},f=Object(a.a)("footer",{target:"en3tari0"})({name:"1qnhoyq",styles:"&{width:70%;border-top:2px solid black;align-self:center;justify-self:flex-end;@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){position:absolute;margin-top:10%;bottom:20px;left:15%;}}"}),h=function(){return Object(o.b)(f,null,Object(o.b)("p",null,"© 2018 Ouissem."))},g=Object(a.a)("div",{target:"e1qsw1o60"})({name:"bmcy3h",styles:"display:flex;flex-direction:column;justify-content:center;align-items:center;flex-grow:1;"}),m=Object(a.a)("div",{target:"e1qsw1o61"})({name:"1pd1ysb",styles:"display:flex;flex-grow:1;flex-direction:column;justify-content:center;align-items:center;width:80%;overflow:auto;margin:2rem;"});t.a=function(e){var t=e.children;return Object(o.b)(s.StaticQuery,{style:{border:"black solid 2px",backgroundColor:"blue"},query:"4130953669",render:function(e){return Object(o.b)(g,null,Object(o.b)(l.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]}),Object(o.b)(p,{siteTitle:e.site.siteMetadata.title}),Object(o.b)(m,null,t),Object(o.b)(h,null))},data:r})}}}]);
//# sourceMappingURL=component---src-pages-about-js-f8c3d9d9530b656e0c76.js.map