"use strict";(self.webpackChunkbilling_docs=self.webpackChunkbilling_docs||[]).push([[35],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),g=c(r),d=a,m=g["".concat(p,".").concat(d)]||g[d]||u[d]||i;return r?n.createElement(m,o(o({ref:t},s),{},{components:r})):n.createElement(m,o({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=g;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},8559:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return s},default:function(){return g}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=["components"],l={sidebar_position:1},p="Create a Page",c={unversionedId:"billing-engine/overview",id:"billing-engine/overview",title:"Create a Page",description:"Add Markdown or React files to src/pages to create a standalone page:",source:"@site/docs/billing-engine/overview.md",sourceDirName:"billing-engine",slug:"/billing-engine/overview",permalink:"/raphaelartlist.github.io/docs/billing-engine/overview",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/billing-engine/overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/raphaelartlist.github.io/docs/benefit-system/overview"},next:{title:"Create a Page",permalink:"/raphaelartlist.github.io/docs/tutorial-basics/create-a-page"}},s=[{value:"Create your first React Page",id:"create-your-first-react-page",children:[],level:2},{value:"Create your first Markdown Page",id:"create-your-first-markdown-page",children:[],level:2}],u={toc:s};function g(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"create-a-page"},"Create a Page"),(0,i.kt)("p",null,"Add ",(0,i.kt)("strong",{parentName:"p"},"Markdown or React")," files to ",(0,i.kt)("inlineCode",{parentName:"p"},"src/pages")," to create a ",(0,i.kt)("strong",{parentName:"p"},"standalone page"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"src/pages/index.js")," -> ",(0,i.kt)("inlineCode",{parentName:"li"},"localhost:3000/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"src/pages/foo.md")," -> ",(0,i.kt)("inlineCode",{parentName:"li"},"localhost:3000/foo")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"src/pages/foo/bar.js")," -> ",(0,i.kt)("inlineCode",{parentName:"li"},"localhost:3000/foo/bar"))),(0,i.kt)("h2",{id:"create-your-first-react-page"},"Create your first React Page"),(0,i.kt)("p",null,"Create a file at ",(0,i.kt)("inlineCode",{parentName:"p"},"src/pages/my-react-page.js"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/pages/my-react-page.js"',title:'"src/pages/my-react-page.js"'},"import React from 'react';\nimport Layout from '@theme/Layout';\n\nexport default function MyReactPage() {\n  return (\n    <Layout>\n      <h1>My React page</h1>\n      <p>This is a React page</p>\n    </Layout>\n  );\n}\n")),(0,i.kt)("p",null,"A new page is now available at ",(0,i.kt)("inlineCode",{parentName:"p"},"http://localhost:3000/my-react-page"),"."),(0,i.kt)("h2",{id:"create-your-first-markdown-page"},"Create your first Markdown Page"),(0,i.kt)("p",null,"Create a file at ",(0,i.kt)("inlineCode",{parentName:"p"},"src/pages/my-markdown-page.md"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-mdx",metastring:'title="src/pages/my-markdown-page.md"',title:'"src/pages/my-markdown-page.md"'},"# My Markdown page\n\nThis is a Markdown page\n")),(0,i.kt)("p",null,"A new page is now available at ",(0,i.kt)("inlineCode",{parentName:"p"},"http://localhost:3000/my-markdown-page"),"."))}g.isMDXComponent=!0}}]);