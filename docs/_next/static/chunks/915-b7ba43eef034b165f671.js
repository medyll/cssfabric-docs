(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[915],{9360:function(e,t,r){"use strict";r.d(t,{Tt:function(){return s},h4:function(){return l},bU:function(){return i}});var a=r(5893),s=(r(7294),function(e){return(0,a.jsxs)("div",{className:"flex-v items-center pad-lg-4 pad-all-8 border-b pos-sticky",children:[(0,a.jsxs)("header",{className:"flex-h just-center items-center",children:[(0,a.jsx)("h1",{className:"pad-all text-shad-info",children:(0,a.jsx)("a",{href:"/",children:e.title})}),(0,a.jsx)("h6",{className:"pad-all self-start dsp-sm-none",children:e.title_tag})]}),(0,a.jsx)("p",{className:"pad-all  dsp-sm-none",children:e.description})]})}),l=function(e){return(0,a.jsxs)("div",{className:"pad-2 flex-h flex-wrap flex-align-middle",children:[(0,a.jsxs)("div",{className:"flex-h items-center pad-l-8 h-4 flex-main",children:[(0,a.jsx)("h2",{className:"pad-all border-b ",children:e.title}),(0,a.jsx)("h5",{className:"pad-all text-gray-500  text-h4",children:e.tag})]}),(0,a.jsx)("p",{className:"pad-all text-center marg-l-16 border-l-4 color-gray-400",children:e.description})]})},i=function(e){return(0,a.jsxs)("article",{className:"pad flex-main",children:[(0,a.jsx)("div",{className:"flex-h items-center",children:(0,a.jsx)("h3",{className:"pad-tb-4",children:e.title})}),(0,a.jsx)("div",{className:"flex-h pad-tb-16",children:(0,a.jsx)("article",{className:"marg-l-8 flex-main",children:e.children})})]})}},6534:function(e,t,r){"use strict";r.d(t,{ej:function(){return o},pT:function(){return c}});var a=r(5893),s=r(1184),l=r.n(s),i={isArrayOfTypes:function(e){var t="";return!!Array.isArray(e)&&(e.every((function(e){return Array.isArray(e)}))&&(t="arrays"),e.every((function(e){return"number"===typeof e||"string"===typeof e}))&&(t="strings"),e.every((function(e){return"string"===typeof e}))&&(t="strings"),e.every((function(e){return"number"===typeof e}))&&(t="numbers"),e.every((function(e){return"object"===typeof e&&!Array.isArray(e)}))&&(t="objects"),t)},isObjectOfTypes:function(e){if(Array.isArray(e))return!1;var t="",r=Object.values(e);return r.every((function(e){return"number"===typeof e||"string"===typeof e}))&&(t="strings"),r.every((function(e){return Array.isArray(e)}))&&(t="arrays"),r.every((function(e){return"string"===typeof e}))&&(t="strings"),r.every((function(e){return"number"===typeof e}))&&(t="numbers"),r.every((function(e){return"object"===typeof e&&!Array.isArray(e)}))&&(t="objects"),t}},o={enclose:function(e){return(0,a.jsx)("div",{className:"cell-spacing cell-padding",children:e})}};t.ZP=i;var n="cssfabric-modules",c={getHomePages:function(){return"/".concat(n)},getModuleDocsPage:function(e){return"/".concat(n,"/").concat(e,"/").concat("docs")},getModuleClassNamesPage:function(e){return"/".concat(n,"/").concat(e,"/").concat("classnames")},getModuleDemoPage:function(e){return"/".concat(n,"/").concat(e,"/").concat("demo")},getActiveLinks:function(){var e=l().getModuleList();return Object.keys(e).filter((function(t){var r,a;return null===e||void 0===e||null===(r=e[t])||void 0===r||null===(a=r._docs)||void 0===a?void 0:a.attributes}))}}},860:function(e){"use strict";e.exports=JSON.parse('{"cssfabric":{"modules":{"cssfabric":{"_data":{"cfg-has-dimension-strict":true,"CFG_HAS_DIMENSION_MIN":true,"CFG_HAS_DIMENSION_MAX":true,"size_step":"0.5rem","sep":"-","sizes":{"tiny":32,"small":64,"medium":256,"large":250,"full":"100%"},"media_quey_sizes":{"xxxl":180,"xxl":120,"xl":90,"lg":64,"md":48,"sm":35.7},"theme":{"primary":"orange","foreground":"#333","background":"#ededed"},"scheme":{"discrete":"#ccc","success":"green","info":"#ffdd57","warning":"#e6b905","alert":"#ff7300","error":"red"},"palette":{"yellow":"#ffb900","orange":"#d83b01","red":"#d13438","magenta":"#b4009e","purple":"#5c2d91","green":"#107c10","teal":"#008272","blue":"#0078d4"},"gray":{"100":"#f4f4f4","200":"#e9e9e9","300":"#dddddd","400":"#d2d2d2","500":"#c7c7c7","600":"#bbbbbb","700":"#b0b0b0","800":"#a4a4a4","900":"#999999"},"gray-config":{"start":"#f4f4f4","end":"#999","steps":8}},"_metadata":{"title":"cssfabric","tag":"cssfabric","description":"cssfabric global config variables"},"_docs":[]},"animation":{"_data":{"attention_props":[],"in_out_props":{"back":[]}},"_metadata":{"title":"animation","description":"cssfabric simplest animation module"},"_docs":{"attention_props":"","in_out_props":""}},"base":{"_data":{"cfg-has-dimension-strict":true,"CFG_HAS_DIMENSION_MIN":true,"CFG_HAS_DIMENSION_MAX":true,"size_step":"0.5rem","sizes":{"tiny":32,"small":64,"medium":256,"large":250,"full":"100%"}},"_metadata":{"title":"base","tag":"base","description":"cssfabric base config variables"},"_docs":[]},"box":{"_data":{"unit-config":"rem","border-unit-config":"px","unit-size-config":0.5,"unit-border-size-config":1,"sizes-config":20,"border-sizes-px-config":5,"shadows-steps":10,"shadows_step_multiplier":2,"position-shorthand-config":"pos","display-shorthand-config":"dsp","shadow-shorthand-config":"shad","border-shorthand-config":"border","padding-shorthand-config":"pad","margin-shorthand-config":"marg","cssProps":{"borderShorthands":{"_":["top","bottom","left","right"],"t":"top","b":"bottom","l":"left","r":"right","all":["top","bottom","left","right"],"u":["bottom","left","right"],"ii":["left","right"],"tb":["top","bottom"]},"positionProps":{"abs":"absolute","rel":"relative","stat":"static","fix":"fixed","sticky":"sticky"},"displayProps":{"block":"block","none":"none","inline":"inline","block-inline":"inline-block","flex-inline":"inline-flex","tbl":"table","tbl-row":"table-row","tbl-cell":"table-cell","tbl-column":"table-column"}}},"_metadata":{"title":"box","tag":"box","description":"cssfabric box module to set heights, paddings, margins and shadows on all html elements"},"_docs":{"attributes":{"padding":{"tag":"pad","keys":["_","t","b","l","r","all","u","ii","tb"],"values":{"1":"0.5rem","2":"1rem","3":"1.5rem","4":"2rem","5":"2.5rem","6":"3rem","7":"3.5rem","8":"4rem","9":"4.5rem","10":"5rem","11":"5.5rem","12":"6rem","13":"6.5rem","14":"7rem","15":"7.5rem","16":"8rem","17":"8.5rem","18":"9rem","19":"9.5rem","20":"10rem","_":"_"},"levels":{"_":["_",1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]},"about":"padding properties for html elements"},"margin":{"tag":"marg","keys":["_","t","b","l","r","all","u","ii","tb"],"values":{"1":"0.5rem","2":"1rem","3":"1.5rem","4":"2rem","5":"2.5rem","6":"3rem","7":"3.5rem","8":"4rem","9":"4.5rem","10":"5rem","11":"5.5rem","12":"6rem","13":"6.5rem","14":"7rem","15":"7.5rem","16":"8rem","17":"8.5rem","18":"9rem","19":"9.5rem","20":"10rem","_":"_"},"levels":{"_":["_",1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]},"about":"margin properties for html elements"},"border":{"tag":"border","keys":["_","t","b","l","r","all","u","ii","tb"],"values":{"1":"1px","2":"2px","3":"3px","4":"4px","5":"5px","_":"_"},"levels":{"_":["_",1,2,3,4,5]},"about":"border properties for html elements"},"shadow":{"tag":"shad","values":{"2":"0.83333333331.724137931","4":"1.66666666673.4482758621","8":"3.33333333336.8965517241","16":"6.666666666713.7931034483","32":"13.333333333327.5862068966","64":"26.666666666755.1724137931","128":"53.3333333333110.3448275862","256":"106.6666666667220.6896551724"},"levels":{"_":[2,4,8,16,32,64,128,256]},"about":"applying shadows give depth and levels to your design"}}}},"color":{"_data":{"gray-config":{"start":"#f4f4f4","end":"#999","steps":8},"color-types-config":["color","bg","bg-themed","border-color"],"theme":{"primary":"orange","foreground":"#333","background":"#ededed"},"scheme":{"discrete":"#ccc","success":"green","info":"#ffdd57","warning":"#e6b905","alert":"#ff7300","error":"red"},"palette":{"yellow":"#ffb900","orange":"#d83b01","red":"#d13438","magenta":"#b4009e","purple":"#5c2d91","green":"#107c10","teal":"#008272","blue":"#0078d4"},"gray":{"100":"#f4f4f4","200":"#e9e9e9","300":"#dddddd","400":"#d2d2d2","500":"#c7c7c7","600":"#bbbbbb","700":"#b0b0b0","800":"#a4a4a4","900":"#999999"}},"_metadata":{"title":"color","title_tag":"its about colors","description":"cssfabric color system: its about colors"},"_docs":{"attributes":{"color":{"tag":"color","keys":["scheme","palette","gray"],"levelsLinked":{"scheme":["discrete","success","info","warning","alert","error"],"palette":["yellow","orange","red","magenta","purple","green","teal","blue"],"gray":["100","200","300","400","500","600","700","800","900"]},"levelsDeclin":{"palette":["_","lighter","light","dark","darker","complement"]},"about":"color for text level html elements"},"background-color":{"tag":"bg","keys":["scheme","palette","gray"],"levelsLinked":{"scheme":["discrete","success","info","warning","alert","error"],"palette":["yellow","orange","red","magenta","purple","green","teal","blue"],"gray":["100","200","300","400","500","600","700","800","900"]},"levelsDeclin":{"palette":["_","lighter","light","dark","darker","complement"]},"about":"background colors"},"background-themed":{"tag":"bg-themed","keys":["scheme","palette","gray"],"levelsLinked":{"gray":["100","200","300","400","500","600","700","800","900"],"scheme":["discrete","success","info","warning","alert","error"],"palette":["yellow","orange","red","magenta","purple","green","teal","blue"]},"levelsDeclin":{"palette":["_","lighter","light","dark","darker","complement"]},"about":"same as background-color, but with added contrasted color to text"},"border-color":{"tag":"border-color","keys":["palette","gray"],"levelsLinked":{"gray":["100","200","300","400","500","600","700","800","900"],"scheme":["discrete","success","info","warning","alert","error"],"palette":["yellow","orange","red","magenta","purple","green","teal","blue"]},"about":"border colors are slightly darker to maximize surrounding effect"}}}},"flex":{"_data":{"moduleName":"flex","moduleNameShort":"flex","horCode":"h","vertCode":"v","gridFullWidth":"main","grow-shrink-steps":4,"cssProps":{"flexWrap":{"wrap":"wrap","wrap-reverse":"wrap-reverse"},"grid-justify":{"start":"flex-start","end":"flex-end","between":"space-between","stretch":"stretch","center":"flex-center"},"grid-items":{"baseline":"baseline","stretch":"stretch","start":"flex-start","center":"center","end":"flex-end"},"grid-content":{"start":"flex-start","center":"center","end":"flex-end","between":"space-between","equal":"space-evenly"}},"cssItemsProps":{"self":{"start":"flex-start","end":"flex-end","stretch":"stretch"}}},"_metadata":{"title":"flex","tag":"flex","description":"cssfabric flex system module"},"_docs":{"attributes":{"grid":{"tag":"flex","keys":["v","h"],"classNames":{"align":["top","middle","bottom","left","right","center","middle-center","stretch"],"grid":["wrap","wrap-reverse"]},"about":"a classic grid system, and hey, it gets height !"},"self":{"tag":"self","keys":["start","end","stretch"],"about":"grid children specific classnames"}}}},"grid":{"_data":{"moduleName":"grid","moduleNameShort":"grid","horCode":"h","vertCode":"v","gridFullWidth":"main","grow-shrink-steps":4,"cssProps":{"flexWrap":{"wrap":"wrap","wrap-reverse":"wrap-reverse"},"grid-justify":{"start":"flex-start","end":"flex-end","between":"space-between","stretch":"stretch","center":"flex-center"},"grid-items":{"baseline":"baseline","stretch":"stretch","start":"flex-start","center":"center","end":"flex-end"},"grid-content":{"start":"flex-start","center":"center","end":"flex-end","between":"space-between","equal":"space-evenly"}},"cssItemsProps":{"self":{"start":"flex-start","end":"flex-end","stretch":"stretch"}}},"_metadata":{"title":"grid","tag":"grid","description":"cssfabric flex grid system module"},"_docs":{"attributes":{"grid":{"tag":"grid","keys":["v","h"],"classNames":{"align":["top","middle","bottom","left","right","center","middle-center","stretch"],"grid":["wrap","wrap-reverse"]},"about":"a classic grid system, and hey, it gets height !"},"self":{"tag":"self","keys":["start","end","stretch"],"about":"grid children specific classnames"}}}},"menu":{"_data":{"menu_class_name":"menu","menu_class_name_short":"ul","orientations":{"v":"vertical","h":"horizontal"},"menu_item_class_name":"menu-item","menu_item_class_name_short":"li","menu_item_disabled_tag":"disabled","menu_item_selected_tag":"selected","menu_dropdown_tag":"drop","menu_dropdown_open":"open","menu_dropdown_close":"close"},"_metadata":{"title":"menu","tag":"ul","description":"cssfabric menu module to set menu style"},"_docs":{"attributes":{"menu":{"tag":"menu","keys":["h","v"]}}}},"overflow":{"_data":{"overflow_props":["overflow","overflow-x","overflow-y"],"overflow_values":["visible","hidden","clip","scroll","auto"],"cssProps":{"overflow":{"visible":"visible","hidden":"hidden","clip":"clip","scroll":"scroll","_":"auto"}}},"_metadata":{"title":"overflow","tag":"flow","description":"cssfabric overflow module to set overflow styles on all html elements"},"_docs":{"attributes":{"overflow":{"tag":"flow","keys":["visible","hidden","clip","scroll","auto"]},"overflowX":{"tag":"flowX","keys":["visible","hidden","clip","scroll","auto"]},"overflowY":{"tag":"flowY","keys":["visible","hidden","clip","scroll","auto"]}}}},"table":{"_data":{"className":"table","classNameShort":"tbl","table_class_name":"table","table_class_name_short":"tbl","table-bg-color-head":"#f4f4f4","table-bg-color-strip-main":"#ededed","table-bg-color-strip-second":"#f5f5f5","table-border-color-header":"#ccc","table-border-color-main":"#ededed","table-border-color-second":"#f5f5f5"},"_metadata":{"title":"table","tag":"table","description":"cssfabric table module to set different table styles"},"_docs":{"attributes":{"table":{"tag":"table","classNames":{"_":["bg-strip-2","bg-strip-5"],"_pos":["sticky","layout"],"_deco":["h-line","v-line","border"]},"about":"is a table"}}}},"scale":{"_data":{"weight-config":"1em","unit-tag-config":{"width":"w","height":"h"},"grid-ratios-config":[5,12],"defined-step-size":2,"defined-step-unit":"rem","defined-steps":[1,2,4,8,16,24,32,48,64],"cssProps":{"size":{"full":"100%","mid":"50%","quarter":"25%","tiers":"33%"},"content":{"content-max":"max-content","content-min":"min-content"},"defined-steps":[1,2,4,8,16,24,32,48,64]}},"_metadata":{"title":"scale","tag":"scale","description":"cssfabric scale module to set dimensions and ratios on all html elements"},"_docs":{"attributes":{"scale":{"tag":"scale","keys":["w","h"],"levels":{"_size":["full","mid","quarter","tiers"],"_content":["content-max","content-min"],"_defined-steps":[1,2,4,8,16,24,32,48,64],"_grid-5":["1-5","2-5","3-5","4-5","5-5"],"_grid-12":["1-12","2-12","3-12","4-12","5-12","6-12","7-12","8-12","9-12","10-12","11-12","12-12"]}}}}},"text":{"_data":{"moduleName":"text","moduleNameShort":"text","title-size-declination-config":6,"font-size-unit-config":"rem","font-sizes-h1-rem-config":3.1,"font-size-h-min-rem-config":1,"text-ellipsis-tag-config":"ellipsis","cssProps":{"textTransform":{"cap":"capitalize","up":"uppercase","low":"lowercase","none":"none","full":"full-width"},"fontWeight":{"50":50,"100":100,"300":400,"500":500,"900":900,"light":"lighter","cap":"normal","bold":"bold","bolder":"bolder"},"textAlign":{"l":"left","r":"right","center":"center","justify":"justify"}},"scheme":{"discrete":"#ccc","success":"green","info":"#ffdd57","warning":"#e6b905","alert":"#ff7300","error":"red"},"palette":{"yellow":"#ffb900","orange":"#d83b01","red":"#d13438","magenta":"#b4009e","purple":"#5c2d91","green":"#107c10","teal":"#008272","blue":"#0078d4"},"gray":{"100":"#f4f4f4","200":"#e9e9e9","300":"#dddddd","400":"#d2d2d2","500":"#c7c7c7","600":"#bbbbbb","700":"#b0b0b0","800":"#a4a4a4","900":"#999999"}},"_metadata":{"title":"text","tag":"text","description":"cssfabric text module to set text style on all html elements"},"_docs":{"attributes":{"text-transform":{"tag":"text","keys":["cap","up","low","none","full"]},"font-weight":{"tag":"text","keys":[50,100,300,500,900,"light","cap","bold","bolder"]},"text-align":{"tag":"text","keys":["l","r","center","justify"]},"text-shadow":{"tag":"text-shad","keys":["palette"]}},"classNames":{"_":{"et":"ellipsis"}}}},"theme":{"_data":{"moduleName":"theme","moduleNameShort":"theme","color-default-config":{"primary":"orange","foreground":"#333","background":"#ededed"},"declinations-config":["primary","secondary","tertiary"],"theme-level-config":["light","lighter","dark","darker","complement","invert"],"theme-properties-apply-config":["text","bg","border"],"color":{"primary":"orange","primary-light":"#ffc04d","primary-lighter":"#ffdb99","primary-dark":"#cc8400","primary-darker":"#996300","primary-complement":"#005aff","primary-invert":"#005aff","secondary":"#005aff","secondary-light":"#4d8cff","secondary-lighter":"#99bdff","secondary-dark":"#0048cc","secondary-darker":"#003699","secondary-complement":"orange","secondary-invert":"orange","tertiary":"orange","tertiary-light":"#ffc04d","tertiary-lighter":"#ffdb99","tertiary-dark":"#cc8400","tertiary-darker":"#996300","tertiary-complement":"#005aff","tertiary-invert":"#005aff"}},"_metadata":{"title":"theme","description":""},"_docs":{"attributes":{"theme":{"tag":"theme","keys":["text","bg","border"],"levels":{"primary":["_","light","lighter","dark","darker","complement","invert"],"secondary":["_","light","lighter","dark","darker","complement","invert"],"tertiary":["_","light","lighter","dark","darker","complement","invert"]}}}}},"zindex":{"_data":{"z_groups":["a","b","c","d","e","f","g"]},"_metadata":{"title":"zindex","tag":"zI","description":"cssfabric zindex module to set z-index on all html elements"},"_docs":{"z_groups":"_"}}}}}')},1184:function(e,t,r){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const s=a(r(7665));t.default=s.default},7665:function(e,t,r){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const s=a(r(860)),l=a(r(3575));t.default={getModuleList:()=>s.default.cssfabric?.modules||{},getModuleConfig:e=>e?s.default.cssfabric?.modules?.[e]||{}:s.default,getModuleData:e=>e?s.default.cssfabric?.modules?.[e]?._data||{}:s.default,getModuleMetaData:e=>e?s.default.cssfabric?.modules?.[e]?._metadata||{}:s.default,getModuleDocs:e=>e?s.default.cssfabric?.modules?.[e]?._docs||{}:s.default,getModuleDocsAttributes:e=>e?s.default.cssfabric?.modules?.[e]?._docs?.attributes||{}:s.default,getClassNames:l.default,getModuleClassNames:l.default,getModuleTagClassNames:l.default.getModuleTagClassNames,getModuleTagDebug:l.default.getModuleTagDebug}},3575:function(e,t,r){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const s=a(r(7665));function l(e){const{module:t,moduleAttribute:r,outputStyle:a}=e,l=s.default.getModuleDocsAttributes(t)[r],i=l.tag,o=l.keys||void 0,n=l.levels||void 0,c=l.levelsLinked||void 0,d=l.levelsDeclin||void 0,f=l.classNames||void 0;let u={};return function(e){let t,r,a,s;const l=[];o&&o.length&&(t=g(i,o));n&&Object.keys(n).length&&(r=Object.keys(n).map((e=>g(e,n[e]))).flat());c&&Object.keys(c).length&&(a=Object.keys(c).map((e=>g(e,c[e]))).flat());d&&Object.keys(d).length&&(s=Object.keys(d).map((e=>g(e,c[e]))).flat());!t||n||c||(l.push(t),m("default",t));if(o&&(n||c)){if(n){let e=t.map((e=>{let t=Object.keys(n).map((t=>{let r=n[t],a="_"!==e&&"_"!==e.toString().charAt(0)?e:t;return a="_"===t.toString().charAt(0)?a:a+"-"+t,m(e,g(a,r),t),g(t,r)})).flat(4);return g(e,t)}));l.push(e.flat())}if(c){let e=Object.values(o).map((e=>{if(o.includes(e)){let t=[];return m("linked",g(i+"-"+e,c[e]),e),t.push(g(e,c[e])),d&&d[e]&&t.push(c[e].map((t=>(m("declinated",g(i+"-"+e+"-"+t,d[e]),t),g(t,d[e])))).flat(2)),t.flat(2)}})).flat();l.push(g(i,e))}}if(!t&&r){let e=g(i,r);l.push(e)}if(f){let e=Object.keys(f).map((e=>g(e,f[e]))).flat(),t=g(i,e);m("classnames",e),l.push(t)}return e&&"debug"===e?u:l.flat(2)}(a);function m(e,t,r){r?(u[e]||(u[e]={}),u[e][r]=u[e][r]?u[e][r].concat(t):t):u[e]=u[e]?u[e].concat(t):t}function g(e,t){return t.map((t=>[e,t].filter((e=>"_"!==e&&"_"!==e.toString().charAt(0))).filter((e=>Boolean(e))).join("-")))}}t.default={getModuleTagClassNames:l,getModuleTagDebug:function(e){return e.outputStyle="debug",l(e)}}}}]);