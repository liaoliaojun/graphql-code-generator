(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{274:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return u}));var a=n(4),r=n(12),l=(n(0),n(399)),o={id:"documents-field",title:"`documents` field"},c={id:"getting-started/documents-field",isDocsHomePage:!1,title:"`documents` field",description:"The documents field should point to your GraphQL documents: query, mutation, subscription and fragment.",source:"@site/docs/getting-started/documents-field.md",permalink:"/docs/getting-started/documents-field",editUrl:"https://github.com/dotansimha/graphql-code-generator/edit/master/website/docs/getting-started/documents-field.md",sidebar:"sidebar",previous:{title:"`schema` field",permalink:"/docs/getting-started/schema-field"},next:{title:"`config` field",permalink:"/docs/getting-started/config-field"}},i=[{value:"How to use it?",id:"how-to-use-it",children:[{value:"Root level",id:"root-level",children:[]},{value:"Output-file level",id:"output-file-level",children:[]},{value:"Document Scanner",id:"document-scanner",children:[]}]},{value:"Available Formats",id:"available-formats",children:[]},{value:"GraphQL Tag Pluck",id:"graphql-tag-pluck",children:[]},{value:"Custom Document Loader",id:"custom-document-loader",children:[]}],p={rightToc:i};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"documents")," field should point to your GraphQL documents: ",Object(l.b)("inlineCode",{parentName:"p"},"query"),", ",Object(l.b)("inlineCode",{parentName:"p"},"mutation"),", ",Object(l.b)("inlineCode",{parentName:"p"},"subscription")," and ",Object(l.b)("inlineCode",{parentName:"p"},"fragment"),"."),Object(l.b)("p",null,"It's optional, and required only if you are using plugins that generates code for the client-side."),Object(l.b)("p",null,"You can specify either a ",Object(l.b)("inlineCode",{parentName:"p"},"string")," pointing to your documents, or ",Object(l.b)("inlineCode",{parentName:"p"},"string[]")," point to multiple documents."),Object(l.b)("h2",{id:"how-to-use-it"},"How to use it?"),Object(l.b)("h3",{id:"root-level"},"Root level"),Object(l.b)("p",null,"You can specify the ",Object(l.b)("inlineCode",{parentName:"p"},"documents")," field in your root level config:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"schema: http://localhost:3000/graphql\ndocuments: src/**/*.graphql\ngenerates:\n  ./src/types.ts:\n    plugins:\n      - typescript\n      - typescript-operations\n")),Object(l.b)("h3",{id:"output-file-level"},"Output-file level"),Object(l.b)("p",null,"You can also specify the ",Object(l.b)("inlineCode",{parentName:"p"},"documents")," field in your generated file config:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"schema: http://server1.com/graphql\ngenerates:\n  ./src/types1.ts:\n    documents: src/**/*.graphql\n    plugins:\n      - typescript\n      - typescript-operations\n")),Object(l.b)("h3",{id:"document-scanner"},"Document Scanner"),Object(l.b)("p",null,"The code-generator has a built-in document scanner, which means that you can specify a ",Object(l.b)("inlineCode",{parentName:"p"},".graphql")," file or code files that contains GraphQL documents."),Object(l.b)("p",null,"You can tell it to find documents in TypeScript files:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),'schema: http://server1.com/graphql\ndocuments: "src/**/*.{ts,tsx}"\n')),Object(l.b)("h2",{id:"available-formats"},"Available Formats"),Object(l.b)("p",null,"The following can be specified as a single value or as an array with mixed values."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("h3",Object(a.a)({parentName:"li"},{id:"filename"}),"Filename"))),Object(l.b)("p",null,"You can specify a ",Object(l.b)("inlineCode",{parentName:"p"},"string")," to point to a single file:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"documents: my-query.graphql\n")),Object(l.b)("p",null,"Or ",Object(l.b)("inlineCode",{parentName:"p"},"string[]")," to point to multiple files:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"documents:\n  - my-query.graphql\n  - my-other-query.graphql\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("h3",Object(a.a)({parentName:"li"},{id:"glob-expression"}),"Glob Expression"))),Object(l.b)("p",null,"You can specify a Glob expresion in order to load multiple files:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"documents: './src/**/*.graphql'\n")),Object(l.b)("p",null,"You can also specify multiple Glob expressions as an array:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"documents:\n  - './src/dir1/*.graphql'\n  - './src/dir2/*.graphql'\n")),Object(l.b)("p",null,"You can specify files to exclude by prefixing the Glob expression with ",Object(l.b)("inlineCode",{parentName:"p"},"!"),":"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"documents:\n  - './src/**/*.graphql'\n  - '!*.generated.graphql'\n")),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"All provided glob expressions are evaluated together. The usage is similar to ",Object(l.b)("inlineCode",{parentName:"p"},".gitignore"),".")),Object(l.b)("p",null,"Additionally, you can use code files and the codegen will try to extract the GraphQL documents from it:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"documents:\n  - './src/*.jsx'\n")),Object(l.b)("p",null,"The codegen will try to load the file as an AST and look for explicit GraphQL operations strings, but if it can't find those, it will try to ",Object(l.b)("inlineCode",{parentName:"p"},"require")," the file and look for operations in the default export."),Object(l.b)("p",null,"You can disable the ",Object(l.b)("inlineCode",{parentName:"p"},"require")," if it causes errors for you (for example, because of different module system):"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"documents:\n  - './src/*.jsx':\n    noRequire: true\n")),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Your operations should be declared as template strings with the ",Object(l.b)("inlineCode",{parentName:"p"},"gql")," tag or with a GraphQL comment (",Object(l.b)("inlineCode",{parentName:"p"},"const myQuery = /* GraphQL*/\\`query { ... }`"),"). This can be configured with ",Object(l.b)("inlineCode",{parentName:"p"},"pluckConfig")," (see below).")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("h3",Object(a.a)({parentName:"li"},{id:"string"}),"String"))),Object(l.b)("p",null,"You can specify your GraphQL documents directly as an AST string in your config file. It's very useful for testing."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"documents:\n  - 'query { f1 }'\n  - 'query { f2 }'\n")),Object(l.b)("h2",{id:"graphql-tag-pluck"},"GraphQL Tag Pluck"),Object(l.b)("p",null,"GraphQL Code Generator uses ",Object(l.b)("inlineCode",{parentName:"p"},"graphql-tag-pluck")," internally to extract GraphQL documents from your code file."),Object(l.b)("p",null,"If you are pointing to a code file (such as ",Object(l.b)("inlineCode",{parentName:"p"},".js")," or ",Object(l.b)("inlineCode",{parentName:"p"},".jsx"),"), GraphQL will try to look for usages of ",Object(l.b)("inlineCode",{parentName:"p"},"gql")," tag, or string literals that are using magic GraphQL comment (",Object(l.b)("inlineCode",{parentName:"p"},"/* GraphQL */"),"), for example:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport { gql } from 'graphql-tag';\n\n// This will work\nconst MY_QUERY = gql`\n  query myQuery {\n    getSomething {\n      id\n    }\n  }\n`;\n\n// This will also work\nconst MY_QUERY = /* GraphQL */`\n  query myQuery {\n    getSomething {\n      id\n    }\n  }\n`;\n\n// ... some components code ...\n")),Object(l.b)("p",null,"By default, it has a predefined list of popular ",Object(l.b)("inlineCode",{parentName:"p"},"gql")," tags to look for, in order to make sure it's not trying to extract an invalid or unrelated string. ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/ardatan/graphql-toolkit/blob/master/packages/graphql-tag-pluck/src/visitor.ts#L13"}),"The default list could be found here")),Object(l.b)("p",null,"You can add custom tags if you need, by using ",Object(l.b)("inlineCode",{parentName:"p"},"pluckConfig")," on the root level on your config file:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"pluckConfig:\n  modules:\n    - name: my-custom-module\n      identifier: gql\n")),Object(l.b)("p",null,"You can also customize globally used identifiers, like that:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"pluckConfig:\n  globalGqlIdentifierName:\n    - gql\n    - graphql\n    - myCustomGlobalGqlTag\n")),Object(l.b)("p",null,"And you can customize the magic GraphQL commend by doing:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"pluckConfig:\n  gqlMagicComment: customcomment\n")),Object(l.b)("h2",{id:"custom-document-loader"},"Custom Document Loader"),Object(l.b)("p",null,"If your schema has a different or complicated way of loading, you can specify a custom loader with the ",Object(l.b)("inlineCode",{parentName:"p"},"loader")," field."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),'documents:\n    - "**/*.graphql"\n        loader: my-documents-loader.js\n')),Object(l.b)("p",null,"Your custom loader should export a default function that returns a ",Object(l.b)("inlineCode",{parentName:"p"},"DocumentNode"),". For example:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const { parse } = require('graphql');\nconst { readFileSync } = require('fs');\n\nmodule.exports = function(docString, config) {\n  return parse(readFileSync(docString, { encoding: 'utf-8' }));;\n};\n")))}u.isMDXComponent=!0},399:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),u=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=u(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=u(n),d=a,m=s["".concat(o,".").concat(d)]||s[d]||b[d]||l;return n?r.a.createElement(m,c(c({ref:t},p),{},{components:n})):r.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<l;p++)o[p]=n[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);