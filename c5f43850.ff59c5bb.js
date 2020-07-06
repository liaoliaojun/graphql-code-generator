(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{359:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return l}));var r=n(4),a=n(12),o=(n(0),n(399)),i={},s={id:"generated-config/near-operation-file",isDocsHomePage:!1,title:"near-operation-file",description:"baseTypesPath (string)",source:"@site/docs/generated-config/near-operation-file.md",permalink:"/docs/generated-config/near-operation-file",editUrl:"https://github.com/dotansimha/graphql-code-generator/edit/master/website/docs/generated-config/near-operation-file.md"},p=[{value:"baseTypesPath (<code>string</code>)",id:"basetypespath-string",children:[]},{value:"extension (<code>string</code>, default value: <code>.generates.ts</code>)",id:"extension-string-default-value-generatests",children:[]},{value:"cwd (<code>string</code>, default value: <code>process.cwd()</code>)",id:"cwd-string-default-value-processcwd",children:[]},{value:"folder (<code>string</code>, default value: <code>&#39;&#39;</code>)",id:"folder-string-default-value-",children:[]},{value:"importTypesNamespace (<code>string</code>, default value: <code>Types</code>)",id:"importtypesnamespace-string-default-value-types",children:[]}],c={rightToc:p};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"basetypespath-string"},"baseTypesPath (",Object(o.b)("inlineCode",{parentName:"h3"},"string"),")"),Object(o.b)("p",null,"Required, should point to the base schema types file. The key of the output is used a the base path for this file."),Object(o.b)("h4",{id:"usage-example"},"Usage Example"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yml"}),"generates:\nsrc/:\n preset: near-operation-file\n presetConfig:\n   baseTypesPath: types.ts\n plugins:\n   - typescript-operations\n")),Object(o.b)("h3",{id:"extension-string-default-value-generatests"},"extension (",Object(o.b)("inlineCode",{parentName:"h3"},"string"),", default value: ",Object(o.b)("inlineCode",{parentName:"h3"},".generates.ts"),")"),Object(o.b)("p",null,"Optional, sets the extension for the generated files. Use this to override the extension if you are using plugins that requires a different type of extensions (such as ",Object(o.b)("inlineCode",{parentName:"p"},"typescript-react-apollo"),")"),Object(o.b)("h4",{id:"usage-example-1"},"Usage Example"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yml"}),"generates:\nsrc/:\n preset: near-operation-file\n presetConfig:\n   baseTypesPath: types.ts\n   extension: .generated.tsx\n plugins:\n   - typescript-operations\n   - typescript-react-apollo\n")),Object(o.b)("h3",{id:"cwd-string-default-value-processcwd"},"cwd (",Object(o.b)("inlineCode",{parentName:"h3"},"string"),", default value: ",Object(o.b)("inlineCode",{parentName:"h3"},"process.cwd()"),")"),Object(o.b)("p",null,"Optional, override the ",Object(o.b)("inlineCode",{parentName:"p"},"cwd")," of the execution. We are using ",Object(o.b)("inlineCode",{parentName:"p"},"cwd")," to figure out the imports between files. Use this if your execuion path is not your project root directory."),Object(o.b)("h4",{id:"usage-example-2"},"Usage Example"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yml"}),"generates:\nsrc/:\n preset: near-operation-file\n presetConfig:\n   baseTypesPath: types.ts\n   cwd: /some/path\n plugins:\n   - typescript-operations\n")),Object(o.b)("h3",{id:"folder-string-default-value-"},"folder (",Object(o.b)("inlineCode",{parentName:"h3"},"string"),", default value: ",Object(o.b)("inlineCode",{parentName:"h3"},"''"),")"),Object(o.b)("p",null,"Optional, defines a folder, (Relative to the source files) where the generated files will be created."),Object(o.b)("h4",{id:"usage-example-3"},"Usage Example"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yml"}),"generates:\nsrc/:\n preset: near-operation-file\n presetConfig:\n   baseTypesPath: types.ts\n   folder: __generated__\n plugins:\n   - typescript-operations\n")),Object(o.b)("h3",{id:"importtypesnamespace-string-default-value-types"},"importTypesNamespace (",Object(o.b)("inlineCode",{parentName:"h3"},"string"),", default value: ",Object(o.b)("inlineCode",{parentName:"h3"},"Types"),")"),Object(o.b)("p",null,"Optional, override the name of the import namespace used to import from the ",Object(o.b)("inlineCode",{parentName:"p"},"baseTypesPath")," file."),Object(o.b)("h4",{id:"usage-example-4"},"Usage Example"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yml"}),"generates:\nsrc/:\n preset: near-operation-file\n presetConfig:\n   baseTypesPath: types.ts\n   importTypesNamespace: SchemaTypes\n plugins:\n   - typescript-operations\n")))}l.isMDXComponent=!0},399:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),l=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=l(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(n),b=r,f=d["".concat(i,".").concat(b)]||d[b]||u[b]||o;return n?a.a.createElement(f,s(s({ref:t},c),{},{components:n})):a.a.createElement(f,s({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);