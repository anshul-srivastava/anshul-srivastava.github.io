(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{293:function(e,a,t){"use strict";t.r(a),t.d(a,"query",function(){return x});t(154);var n=t(2),r=t.n(n),c=t(28),s=t(1),i=t.n(s),l=t(0),o=t.n(l),m=t(102),d=t.n(m),p=t(304),y=t(305),u=t(403),f=t(303),h=function(e){var a=e.data.posts.edges,t={};a.forEach(function(e){var a=e.node.frontmatter.tags;a&&null!=a&&a.forEach(function(a){a&&null!=a&&(t[a]||(t[a]=[]),t[a].push(e))})});var n=[];for(var s in t)n.push([s,t[s]]);return o.a.createElement(o.a.Fragment,null,o.a.createElement(p.a,{theme:d.a},o.a.createElement("header",{className:r.a.dynamic([["191862475",[d.a.color.neutral.gray.j,d.a.color.brand.primary,d.a.color.brand.primary]]])},o.a.createElement(y.a,{title:"Posts by tags",theme:d.a})),n.map(function(e){return o.a.createElement("section",{key:e[0],className:r.a.dynamic([["191862475",[d.a.color.neutral.gray.j,d.a.color.brand.primary,d.a.color.brand.primary]]])},o.a.createElement("h2",{className:r.a.dynamic([["191862475",[d.a.color.neutral.gray.j,d.a.color.brand.primary,d.a.color.brand.primary]]])},o.a.createElement(c.l,null)," ",e[0]),o.a.createElement(u.a,{edges:e[1],theme:d.a}))}),o.a.createElement(r.a,{styleId:"191862475",css:["h2.__jsx-style-dynamic-selector{margin:0 0 0.5em;color:"+d.a.color.neutral.gray.j+";}","@media screen and (min-width:1024px){a:hover{color:"+d.a.color.brand.primary+";}}","h2.__jsx-style-dynamic-selector svg{height:0.8em;fill:"+d.a.color.brand.primary+";}"],dynamic:[d.a.color.neutral.gray.j,d.a.color.brand.primary,d.a.color.brand.primary]})),o.a.createElement(f.a,{pageTitle:"Tags"}))};h.propTypes={data:i.a.object.isRequired},a.default=h;var x="148554166"},303:function(e,a,t){"use strict";var n=t(0),r=t.n(n),c=t(1),s=t.n(c),i=t(316),l=t.n(i),o=t(66),m=t.n(o),d=function(e){var a=e.data,t=e.pageTitle,n=((a||{}).frontmatter||{}).title,c=((a||{}).frontmatter||{}).description,s=((a||{}).frontmatter||{}).cover,i=((a||{}).fields||{}).slug,o=m.a.shortSiteTitle+" - "+(n||t),d=c||m.a.siteDescription,p=s||m.a.siteImage,y=m.a.siteUrl+m.a.pathPrefix+i;return r.a.createElement(l.a,{htmlAttributes:{lang:m.a.siteLanguage,prefix:"og: http://ogp.me/ns#"}},r.a.createElement("title",null,o),r.a.createElement("meta",{name:"description",content:d}),r.a.createElement("meta",{property:"og:url",content:y}),r.a.createElement("meta",{property:"og:title",content:o}),r.a.createElement("meta",{property:"og:description",content:d}),r.a.createElement("meta",{property:"og:image",content:p}),r.a.createElement("meta",{property:"og:type",content:"website"}))};d.propTypes={data:s.a.object};var p=d;t.d(a,"a",function(){return p})},304:function(e,a,t){"use strict";var n=t(2),r=t.n(n),c=t(0),s=t.n(c),i=t(1),l=t.n(i),o=function(e){var a=e.children,t=e.theme;return s.a.createElement(s.a.Fragment,null,s.a.createElement("article",{className:r.a.dynamic([["3487304345",[t.space.inset.default,"calc("+t.space.default+") calc("+t.space.default+" * 2)",t.text.maxWidth.tablet,"calc("+t.space.default+" * 2 + 90px) 0 calc("+t.space.default+" * 2)",t.text.maxWidth.desktop]]])+" article"},a),s.a.createElement(r.a,{styleId:"3487304345",css:[".article.__jsx-style-dynamic-selector{padding:"+t.space.inset.default+";padding-bottom:0px !important;margin:0 auto;}","@media screen and (min-width:600px){.article.__jsx-style-dynamic-selector{padding:calc("+t.space.default+") calc("+t.space.default+" * 2);max-width:"+t.text.maxWidth.tablet+";}}","@media screen and (min-width:1024px){.article.__jsx-style-dynamic-selector{padding:calc("+t.space.default+" * 2 + 90px) 0 calc("+t.space.default+" * 2);max-width:"+t.text.maxWidth.desktop+";}}"],dynamic:[t.space.inset.default,"calc("+t.space.default+") calc("+t.space.default+" * 2)",t.text.maxWidth.tablet,"calc("+t.space.default+" * 2 + 90px) 0 calc("+t.space.default+" * 2)",t.text.maxWidth.desktop]}))};o.propTypes={children:l.a.node.isRequired,theme:l.a.object.isRequired};var m=o;t.d(a,"a",function(){return m})},305:function(e,a,t){"use strict";var n=t(2),r=t.n(n),c=t(0),s=t.n(c),i=t(1),l=t.n(i),o=function(e){var a=e.title,t=e.children,n=e.theme;return s.a.createElement(s.a.Fragment,null,a?s.a.createElement("h1",{className:r.a.dynamic([["2680357445",[n.font.size.xxl,n.space.stack.l,n.color.neutral.gray.j,n.font.weight.standard,n.space.stack.xs,n.color.brand.primary,"calc("+n.font.size.xl+" * 1.2)","calc("+n.font.size.xl+" * 1.4)"]]])},a):s.a.createElement("h1",{className:r.a.dynamic([["2680357445",[n.font.size.xxl,n.space.stack.l,n.color.neutral.gray.j,n.font.weight.standard,n.space.stack.xs,n.color.brand.primary,"calc("+n.font.size.xl+" * 1.2)","calc("+n.font.size.xl+" * 1.4)"]]])},t),s.a.createElement(r.a,{styleId:"2680357445",css:["h1.__jsx-style-dynamic-selector{font-size:"+n.font.size.xxl+";margin:"+n.space.stack.l+";-webkit-animation-name:headlineEntry;-webkit-animation-name:headlineEntry-__jsx-style-dynamic-selector;animation-name:headlineEntry-__jsx-style-dynamic-selector;-webkit-animation-duration:0;-webkit-animation-duration:0;animation-duration:0;color:"+n.color.neutral.gray.j+";}","h1.__jsx-style-dynamic-selector span{font-weight:"+n.font.weight.standard+";display:block;font-size:0.5em;-webkit-letter-spacing:0;-moz-letter-spacing:0;-ms-letter-spacing:0;letter-spacing:0;margin:"+n.space.stack.xs+";}","h1.__jsx-style-dynamic-selector svg{height:0.75em;fill:"+n.color.brand.primary+";}","@-webkit-keyframes headlineEntry{from.__jsx-style-dynamic-selector{opacity:0.5;}to.__jsx-style-dynamic-selector{opacity:1;}}","@-webkit-keyframes headlineEntry-__jsx-style-dynamic-selector{from{opacity:0.5;}to{opacity:1;}}","@keyframes headlineEntry-__jsx-style-dynamic-selector{from{opacity:0.5;}to{opacity:1;}}","@media screen and (min-width:600px){h1.__jsx-style-dynamic-selector{font-size:calc("+n.font.size.xl+" * 1.2);}}","@media screen and (min-width:1024px){h1.__jsx-style-dynamic-selector{font-size:calc("+n.font.size.xl+" * 1.4);}}"],dynamic:[n.font.size.xxl,n.space.stack.l,n.color.neutral.gray.j,n.font.weight.standard,n.space.stack.xs,n.color.brand.primary,"calc("+n.font.size.xl+" * 1.2)","calc("+n.font.size.xl+" * 1.4)"]}))};o.propTypes={title:l.a.string,children:l.a.node,theme:l.a.object.isRequired},a.a=o},403:function(e,a,t){"use strict";var n=t(2),r=t.n(n),c=t(0),s=t.n(c),i=t(1),l=t.n(i),o=t(45),m=function(e){var a=e.edges,t=e.theme;return s.a.createElement(s.a.Fragment,null,s.a.createElement("ul",{className:r.a.dynamic([["132031231",[t.space.stack.m,t.space.m,t.space.xs,t.font.size.s,t.font.lineHeight.l]]])},a.map(function(e){var a=e.node,n=a.frontmatter.title,c=a.fields.slug;return s.a.createElement("li",{key:c,className:r.a.dynamic([["132031231",[t.space.stack.m,t.space.m,t.space.xs,t.font.size.s,t.font.lineHeight.l]]])},s.a.createElement(o.a,{to:c},n))})),s.a.createElement(r.a,{styleId:"132031231",css:["ul.__jsx-style-dynamic-selector{margin:"+t.space.stack.m+";padding:"+t.space.m+";list-style:circle;}","li.__jsx-style-dynamic-selector{padding:"+t.space.xs+" 0;font-size:"+t.font.size.s+";line-height:"+t.font.lineHeight.l+";}"],dynamic:[t.space.stack.m,t.space.m,t.space.xs,t.font.size.s,t.font.lineHeight.l]}))};m.propTypes={edges:l.a.array.isRequired,theme:l.a.object.isRequired};var d=m;t.d(a,"a",function(){return d})}}]);
//# sourceMappingURL=component---src-pages-tags-js-fc4f8e2c3d1c0143570e.js.map