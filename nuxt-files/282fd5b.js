(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{399:function(t,e,n){var o=n(18),l="["+n(400)+"]",r=RegExp("^"+l+l+"*"),c=RegExp(l+l+"*$"),d=function(t){return function(e){var n=String(o(e));return 1&t&&(n=n.replace(r,"")),2&t&&(n=n.replace(c,"")),n}};t.exports={start:d(1),end:d(2),trim:d(3)}},400:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},401:function(t,e,n){"use strict";var o=n(2),l=n(399).trim;o({target:"String",proto:!0,forced:n(402)("trim")},{trim:function(){return l(this)}})},402:function(t,e,n){var o=n(9),l=n(400);t.exports=function(t){return o((function(){return!!l[t]()||"​᠎"!="​᠎"[t]()||l[t].name!==t}))}},403:function(t,e,n){"use strict";var o=n(13),l=n(3),r=n(79),c=n(19),d=n(15),h=n(31),v=n(159),f=n(54),m=n(9),y=n(80),_=n(55).f,x=n(26).f,C=n(16).f,w=n(399).trim,S=l.Number,k=S.prototype,I="Number"==h(y(k)),N=function(t){var e,n,o,l,r,c,d,code,h=f(t,!1);if("string"==typeof h&&h.length>2)if(43===(e=(h=w(h)).charCodeAt(0))||45===e){if(88===(n=h.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(h.charCodeAt(1)){case 66:case 98:o=2,l=49;break;case 79:case 111:o=8,l=55;break;default:return+h}for(c=(r=h.slice(2)).length,d=0;d<c;d++)if((code=r.charCodeAt(d))<48||code>l)return NaN;return parseInt(r,o)}return+h};if(r("Number",!S(" 0o1")||!S("0b1")||S("+0x1"))){for(var T,E=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof E&&(I?m((function(){k.valueOf.call(n)})):"Number"!=h(n))?v(new S(N(e)),n,E):N(e)},D=o?_(S):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),j=0;D.length>j;j++)d(S,T=D[j])&&!d(E,T)&&C(E,T,x(S,T));E.prototype=k,k.constructor=E,c(l,"Number",E)}},404:function(t,e,n){"use strict";n.r(e);n(155),n(401),n(5),n(6),n(7),n(8);var o={props:{title:String,classes:String,nocode:Boolean},data:function(){return{sourcecode:"",showcode:!1}},methods:{setSrc:function(){var t,div;this.sourcecode=(t=this.$refs.component.innerHTML,(div=document.createElement("div")).innerHTML=t.trim()+"\n",function t(e,n){for(var o,l=new Array(1+n++).join("  "),r=new Array(n-1).join("  "),i=0;i<e.children.length;i++)o=document.createTextNode("\n"+l),e.insertBefore(o,e.children[i]),t(e.children[i],n),e.lastElementChild==e.children[i]&&(o=document.createTextNode("\n"+r),e.appendChild(o));return e}(div,0).innerHTML)}},mounted:function(){this.setSrc()}},l=n(12),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"py-2"},[n("div",{staticClass:"py-2 text-xs capitalize opacity-50"},[t.nocode?t._e():n("div",{staticClass:"inline-block select-none",on:{click:function(e){t.showcode=!t.showcode}}},[t.showcode?t._e():n("Icon",{staticClass:"inline-block w-4 mr-2 cursor-pointer stroke-current",attrs:{glyph:"code"}}),t._v(" "),t.showcode?n("Icon",{staticClass:"inline-block w-4 mr-2 cursor-pointer stroke-current",attrs:{glyph:"eye"}}):t._e()],1),t._v("\n    "+t._s(t.title)+"\n  ")]),t._v(" "),n("div",[n("collapse-transition",[!t.nocode&&t.showcode?n("div",[n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:t.sourcecode,expression:"sourcecode"}],attrs:{id:"myInput"}},[n("code",{staticClass:"h-64 p-4 font-mono text-xs rounded-lg html"})])]):t._e()]),t._v(" "),n("collapse-transition",[t.showcode?t._e():n("div",[n("div",{ref:"component",class:t.classes},[t._t("default")],2)])])],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Icon:n(156).default,CollapseTransition:n(405).default})},405:function(t,e,n){"use strict";n.r(e);n(108),n(32),n(81),n(155),n(56),n(403),n(82),n(158),n(33),n(42),n(157),n(57),n(34),n(43),n(5),n(6),n(7),n(8);var o={name:"CollapseTransition",props:{name:{type:String,required:!1,default:"collapse"},dimension:{type:String,required:!1,default:"height",validator:function(t){return["height","width"].includes(t)}},duration:{type:Number,required:!1,default:300},easing:{type:String,required:!1,default:"ease-in-out"}},watch:{dimension:function(){this.clearCachedDimensions()}},data:function(){return{cachedStyles:null}},computed:{transition:function(){var t=this,e=[];return Object.keys(this.cachedStyles).forEach((function(n){e.push("".concat(t.convertToCssProperty(n)," ").concat(t.duration,"ms ").concat(t.easing))})),e.join(", ")}},methods:{enter:function(t,e){this.detectAndCacheDimensions(t),this.setClosedDimensions(t),this.hideOverflow(t),this.forceRepaint(t),this.setTransition(t),this.setOpenedDimensions(t),setTimeout(e,this.duration)},afterEnter:function(t){this.unsetOverflow(t),this.unsetTransition(t),this.unsetDimensions(t),this.clearCachedDimensions()},leave:function(t,e){this.detectAndCacheDimensions(t),this.setOpenedDimensions(t),this.hideOverflow(t),this.forceRepaint(t),this.setTransition(t),this.setClosedDimensions(t),setTimeout(e,this.duration)},afterLeave:function(t){this.unsetOverflow(t),this.unsetTransition(t),this.unsetDimensions(t),this.clearCachedDimensions()},detectAndCacheDimensions:function(t){if(!this.cachedStyles){var e=t.style.visibility,n=t.style.display;t.style.visibility="hidden",t.style.display="",this.cachedStyles=this.detectRelevantDimensions(t),t.style.visibility=e,t.style.display=n}},clearCachedDimensions:function(){this.cachedStyles=null},detectRelevantDimensions:function(t){return"height"===this.dimension?{height:t.offsetHeight+"px",paddingTop:t.style.paddingTop||this.getCssValue(t,"padding-top"),paddingBottom:t.style.paddingBottom||this.getCssValue(t,"padding-bottom")}:"width"===this.dimension?{width:t.offsetWidth+"px",paddingLeft:t.style.paddingLeft||this.getCssValue(t,"padding-left"),paddingRight:t.style.paddingRight||this.getCssValue(t,"padding-right")}:{}},setTransition:function(t){t.style.transition=this.transition},unsetTransition:function(t){t.style.transition=""},hideOverflow:function(t){t.style.overflow="hidden"},unsetOverflow:function(t){t.style.overflow=""},setClosedDimensions:function(t){Object.keys(this.cachedStyles).forEach((function(e){t.style[e]="0"}))},setOpenedDimensions:function(t){var e=this;Object.keys(this.cachedStyles).forEach((function(n){t.style[n]=e.cachedStyles[n]}))},unsetDimensions:function(t){Object.keys(this.cachedStyles).forEach((function(e){t.style[e]=""}))},forceRepaint:function(t){getComputedStyle(t)[this.dimension]},getCssValue:function(t,style){return getComputedStyle(t,null).getPropertyValue(style)},convertToCssProperty:function(style){var t=style.match(/([A-Z])/g);if(!t)return style;for(var i=0,e=t.length;i<e;i++)style=style.replace(new RegExp(t[i]),"-"+t[i].toLowerCase());return"-"===style.slice(0,1)&&(style=style.slice(1)),style}}},l=n(12),component=Object(l.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("transition",{attrs:{name:this.name},on:{enter:this.enter,"after-enter":this.afterEnter,leave:this.leave,"after-leave":this.afterLeave}},[this._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},431:function(t,e,n){"use strict";n.r(e);n(5),n(6),n(7),n(8);var o={data:function(){return{daisyuiMaxVersion:"0.11.x"}}},l=n(12),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),t._v(" "),n("Wrapper",{attrs:{nocode:""}},[n("p",{staticClass:"prose text-content-800"},[t._v("\n      You need\n      "),n("a",{attrs:{target:"_blank",href:"https://nodejs.org/en/download/"}},[t._v("Node.js")]),t._v(" and\n      "),n("a",{attrs:{target:"_blank",href:"https://tailwindcss.com/docs/installation"}},[t._v("Tailwind CSS")]),t._v(" installed.\n    ")]),t._v(" "),n("p",{staticClass:"my-4"},[t._v("\n      Install DaisyUI:\n    ")]),t._v(" "),n("div",{staticClass:"w-full max-w-xl my-2"},[n("div",{staticClass:"shadow-lg mockup-code bg-content-800 text-content-100"},[n("pre",{attrs:{"data-prefix":"$"}},[n("code",[t._v("npm i daisyui --save")])])])]),t._v(" "),n("p",{staticClass:"my-4"},[t._v("\n      Then add DaisyUI to your "),n("span",{staticClass:"badge"},[t._v("tailwind.config.js")])]),t._v(" "),n("div",{staticClass:"w-full max-w-4xl my-2"},[n("div",{staticClass:"text-sm shadow-lg mockup-code bg-content-800 text-content-100"},[n("pre",[n("code",[t._v("module.exports = {\n\n    plugins: [\n      "),n("span",{staticClass:"badge badge-ghost"},[t._v("require('daisyui'),")]),t._v("\n    ],\n\n    "),n("span",{staticClass:"text-content-500"},[t._v("// OPTIONAL: if you want to use DaisyUI colors everywhere")]),t._v("\n    theme: {\n      extend: {\n        "),n("span",{staticClass:"badge badge-ghost"},[t._v("colors: require('daisyui/colors'),")]),t._v("\n      },\n    },\n\n  }")])])])]),t._v(" "),n("h2",{staticClass:"mt-20 text-5xl font-bold"},[n("span",{staticClass:"text-primary"},[t._v("Method 2: ")]),t._v(" "),n("span",[t._v("Use a CDN")])]),t._v(" "),n("p",{staticClass:"mt-4 prose text-content-800"},[t._v("\n      You don't need to install anything. You can just add the CSS file. However, you can't customize anything and you can't purge unused styles.\n    ")]),t._v(" "),n("p",{staticClass:"mt-4 font-bold text-primary"},[t._v("\n      You have 3 options:\n    ")]),t._v(" "),n("div",{staticClass:"mt-10 text-content-800"},[n("h2",{staticClass:"text-2xl font-bold"},[t._v("1. Base version "),n("img",{staticClass:"inline-block m-0",attrs:{src:"https://badgen.net/badgesize/normal/https/unpkg.com/daisyui@"+t.daisyuiMaxVersion+"/dist/base.css?label=base.css&color=purple",alt:"base.css"}})]),t._v(" "),n("p",{staticClass:"prose"},[n("ul",[n("li",[t._v("Unstyled UI components (skeleton only)")]),t._v(" "),n("li",[t._v("No color, no visual style")]),t._v(" "),n("li",[t._v("You need to style elements yourself")]),t._v(" "),n("li",[t._v("You need to add Tailwind CSS Separately")])])])]),t._v(" "),n("div",{staticClass:"w-full max-w-4xl my-2"},[n("div",{staticClass:"text-sm shadow-lg mockup-code bg-content-800 text-content-100"},[n("pre",[n("code",[n("span",{staticClass:"text-content-400"},[t._v('<link href="')]),t._v("https://cdn.jsdelivr.net/npm/daisyui@"+t._s(t.daisyuiMaxVersion)+"/dist/base.css"),n("span",{staticClass:"text-content-400"},[t._v('" rel="stylesheet" type="text/css" />')])])])])]),t._v(" "),n("div",{staticClass:"mt-10 text-content-800"},[n("h2",{staticClass:"text-2xl font-bold"},[t._v("2. Styled version "),n("img",{staticClass:"inline-block m-0",attrs:{src:"https://badgen.net/badgesize/normal/https/unpkg.com/daisyui@"+t.daisyuiMaxVersion+"/dist/styled.css?label=styled.css&color=purple",alt:"styled.css"}})]),t._v(" "),n("p",{staticClass:"prose"},[n("ul",[n("li",[t._v("Ready-to-use styled UI components")]),t._v(" "),n("li",[t._v("You can't use DaisyUI colors (like primary, secondary, etc...) on other elements")]),t._v(" "),n("li",[t._v("You need to add Tailwind CSS Separately")])])])]),t._v(" "),n("div",{staticClass:"w-full max-w-4xl my-2"},[n("div",{staticClass:"text-sm shadow-lg mockup-code bg-content-800 text-content-100"},[n("pre",[n("code",[n("span",{staticClass:"text-content-400"},[t._v('<link href="')]),t._v("https://cdn.jsdelivr.net/npm/daisyui@"+t._s(t.daisyuiMaxVersion)+"/dist/styled.css"),n("span",{staticClass:"text-content-400"},[t._v('" rel="stylesheet" type="text/css" />')])])])])]),t._v(" "),n("div",{staticClass:"mt-10 text-content-800"},[n("h2",{staticClass:"text-2xl font-bold"},[t._v("3. Full version "),n("img",{staticClass:"inline-block m-0",attrs:{src:"https://badgen.net/badgesize/normal/https/unpkg.com/daisyui@"+t.daisyuiMaxVersion+"/dist/full.css?label=full.css&color=purple",alt:"full.css"}})]),t._v(" "),n("p",{staticClass:"prose"},[n("ul",[n("li",[t._v("Ready-to-use styled UI components")]),t._v(" "),n("li",[t._v("Tailwind's default style included")]),t._v(" "),n("li",[t._v("You can use DaisyUI colors on all elements")])])])]),t._v(" "),n("div",{staticClass:"w-full max-w-4xl my-2"},[n("div",{staticClass:"text-sm shadow-lg mockup-code bg-content-800 text-content-100"},[n("pre",[n("code",[n("span",{staticClass:"text-content-400"},[t._v('<link href="')]),t._v("https://cdn.jsdelivr.net/npm/daisyui@"+t._s(t.daisyuiMaxVersion)+"/dist/full.css"),n("span",{staticClass:"text-content-400"},[t._v('" rel="stylesheet" type="text/css" />')])])])])])]),t._v(" "),n("div",{staticClass:"flex justify-end max-w-4xl pt-10 mt-20 border-t-2 border-content-200"},[n("NuxtLink",{staticClass:"text-xs btn-lg btn btn-outline lg:text-lg",attrs:{to:"/docs/use"}},[t._v("\n      Next: How to use\n      "),n("Icon",{staticClass:"inline-block w-6 h-6 ml-2 stroke-current",attrs:{glyph:"arrow"}})],1)],1)],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{staticClass:"my-6 text-5xl font-bold"},[e("span",{staticClass:"text-primary"},[this._v("Method 1: ")]),this._v(" "),e("span",[this._v("install with Node.js")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Wrapper:n(404).default,Icon:n(156).default})}}]);