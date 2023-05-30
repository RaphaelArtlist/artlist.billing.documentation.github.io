"use strict";(self.webpackChunkbilling_docs=self.webpackChunkbilling_docs||[]).push([[661],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),f=l(n),m=i,d=f["".concat(c,".").concat(m)]||f[m]||p[m]||o;return n?r.createElement(d,s(s({ref:t},u),{},{components:n})):r.createElement(d,s({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=f;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:i,s[1]=a;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2019:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return f}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),s=["components"],a={sidebar_position:1},c="Overview",l={unversionedId:"benefit-system/overview",id:"benefit-system/overview",title:"Overview",description:"Implement external service to support our different brands by containing the user's benefits such as subscription extensions, discounts, incentives etc.",source:"@site/docs/benefit-system/overview.md",sourceDirName:"benefit-system",slug:"/benefit-system/overview",permalink:"/billing-docs/docs/benefit-system/overview",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/benefit-system/overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Services Intro",permalink:"/billing-docs/docs/intro"},next:{title:"Create a Page",permalink:"/billing-docs/docs/billing-engine/overview"}},u=[{value:"Current active types of benefits",id:"current-active-types-of-benefits",children:[],level:2}],p={toc:u};function f(e){var t=e.components,n=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"overview"},"Overview"),(0,o.kt)("p",null,"Implement external service to support our different brands by containing the user's benefits such as subscription extensions, discounts, incentives etc."),(0,o.kt)("h2",{id:"current-active-types-of-benefits"},"Current active types of benefits"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-md",metastring:'title="F2F - friend to friend"',title:'"F2F',"-":!0,friend:!0,to:!0,'friend"':!0},"Subscription extension for the inviter and invitee when a new user\nsigns up with existing paying user referral link.\n\n(Add rules of accumulating months per invite)\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-md",metastring:'title="Email automation"',title:'"Email','automation"':!0},"Subscription extension for trial users purchasing a subscription\nwith a invitation link they get in their email.\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-md",metastring:'title="Special F2F links (less common)"',title:'"Special',F2F:!0,links:!0,"(less":!0,'common)"':!0},"Subscription extension for users when they sign up with\nspecial artlist made referral link.\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-md",metastring:'title="Refund incentive"',title:'"Refund','incentive"':!0},"When a user is eligible for a refund and asking for it\nwe will offer him an incentive to get subscription extension\nof 2 months if he chooses to remain an active user and not refunding.\n\nEach user will be able to see it only one time.\n")))}f.isMDXComponent=!0}}]);