(window.webpackJsonp=window.webpackJsonp||[]).push([[20,10],{402:function(e,t,n){var o=n(18),r="["+n(403)+"]",c=RegExp("^"+r+r+"*"),l=RegExp(r+r+"*$"),d=function(e){return function(t){var n=String(o(t));return 1&e&&(n=n.replace(c,"")),2&e&&(n=n.replace(l,"")),n}};e.exports={start:d(1),end:d(2),trim:d(3)}},403:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},404:function(e,t,n){"use strict";var o=n(10),r=n(4),c=n(81),l=n(14),d=n(12),h=n(35),f=n(162),m=n(57),v=n(5),y=n(59),C=n(58).f,w=n(25).f,S=n(13).f,E=n(402).trim,T="Number",N=r.Number,_=N.prototype,I=h(y(_))==T,x=function(e){var t,n,o,r,c,l,d,code,h=m(e,!1);if("string"==typeof h&&h.length>2)if(43===(t=(h=E(h)).charCodeAt(0))||45===t){if(88===(n=h.charCodeAt(2))||120===n)return NaN}else if(48===t){switch(h.charCodeAt(1)){case 66:case 98:o=2,r=49;break;case 79:case 111:o=8,r=55;break;default:return+h}for(l=(c=h.slice(2)).length,d=0;d<l;d++)if((code=c.charCodeAt(d))<48||code>r)return NaN;return parseInt(c,o)}return+h};if(c(T,!N(" 0o1")||!N("0b1")||N("+0x1"))){for(var D,O=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof O&&(I?v((function(){_.valueOf.call(n)})):h(n)!=T)?f(new N(x(t)),n,O):x(t)},A=o?C(N):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),k=0;A.length>k;k++)d(N,D=A[k])&&!d(O,D)&&S(O,D,w(N,D));O.prototype=_,_.constructor=O,l(r,T,O)}},405:function(e,t,n){"use strict";n.r(t);n(45),n(404),n(26),n(36),n(82),n(112),n(43),n(46),n(163),n(60),n(161),n(83),n(44);var o={name:"CollapseTransition",props:{name:{type:String,required:!1,default:"collapse"},dimension:{type:String,required:!1,default:"height",validator:function(e){return["height","width"].includes(e)}},duration:{type:Number,required:!1,default:300},easing:{type:String,required:!1,default:"ease-in-out"}},watch:{dimension:function(){this.clearCachedDimensions()}},data:function(){return{cachedStyles:null}},computed:{transition:function(){var e=this,t=[];return Object.keys(this.cachedStyles).forEach((function(n){t.push("".concat(e.convertToCssProperty(n)," ").concat(e.duration,"ms ").concat(e.easing))})),t.join(", ")}},methods:{enter:function(e,t){this.detectAndCacheDimensions(e),this.setClosedDimensions(e),this.hideOverflow(e),this.forceRepaint(e),this.setTransition(e),this.setOpenedDimensions(e),setTimeout(t,this.duration)},afterEnter:function(e){this.unsetOverflow(e),this.unsetTransition(e),this.unsetDimensions(e),this.clearCachedDimensions()},leave:function(e,t){this.detectAndCacheDimensions(e),this.setOpenedDimensions(e),this.hideOverflow(e),this.forceRepaint(e),this.setTransition(e),this.setClosedDimensions(e),setTimeout(t,this.duration)},afterLeave:function(e){this.unsetOverflow(e),this.unsetTransition(e),this.unsetDimensions(e),this.clearCachedDimensions()},detectAndCacheDimensions:function(e){if(!this.cachedStyles){var t=e.style.visibility,n=e.style.display;e.style.visibility="hidden",e.style.display="",this.cachedStyles=this.detectRelevantDimensions(e),e.style.visibility=t,e.style.display=n}},clearCachedDimensions:function(){this.cachedStyles=null},detectRelevantDimensions:function(e){return"height"===this.dimension?{height:e.offsetHeight+"px",paddingTop:e.style.paddingTop||this.getCssValue(e,"padding-top"),paddingBottom:e.style.paddingBottom||this.getCssValue(e,"padding-bottom")}:"width"===this.dimension?{width:e.offsetWidth+"px",paddingLeft:e.style.paddingLeft||this.getCssValue(e,"padding-left"),paddingRight:e.style.paddingRight||this.getCssValue(e,"padding-right")}:{}},setTransition:function(e){e.style.transition=this.transition},unsetTransition:function(e){e.style.transition=""},hideOverflow:function(e){e.style.overflow="hidden"},unsetOverflow:function(e){e.style.overflow=""},setClosedDimensions:function(e){Object.keys(this.cachedStyles).forEach((function(t){e.style[t]="0"}))},setOpenedDimensions:function(e){var t=this;Object.keys(this.cachedStyles).forEach((function(n){e.style[n]=t.cachedStyles[n]}))},unsetDimensions:function(e){Object.keys(this.cachedStyles).forEach((function(t){e.style[t]=""}))},forceRepaint:function(e){getComputedStyle(e)[this.dimension]},getCssValue:function(e,style){return getComputedStyle(e,null).getPropertyValue(style)},convertToCssProperty:function(style){var e=style.match(/([A-Z])/g);if(!e)return style;for(var i=0,t=e.length;i<t;i++)style=style.replace(new RegExp(e[i]),"-"+e[i].toLowerCase());return"-"===style.slice(0,1)&&(style=style.slice(1)),style}}},r=n(6),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("transition",{attrs:{name:e.name},on:{enter:e.enter,"after-enter":e.afterEnter,leave:e.leave,"after-leave":e.afterLeave}},[e._t("default")],2)}),[],!1,null,null,null);t.default=component.exports},406:function(e,t,n){"use strict";var o=n(2),r=n(402).trim;o({target:"String",proto:!0,forced:n(407)("trim")},{trim:function(){return r(this)}})},407:function(e,t,n){var o=n(5),r=n(403);e.exports=function(e){return o((function(){return!!r[e]()||"​᠎"!="​᠎"[e]()||r[e].name!==e}))}},408:function(e,t,n){"use strict";n.r(t);n(406),n(112);var o={props:{title:String,classes:String,nocode:Boolean},data:function(){return{sourcecode:"",showcode:!1}},methods:{setSrc:function(){function e(t,n){for(var o,r=new Array(1+n++).join("  "),c=new Array(n-1).join("  "),i=0;i<t.children.length;i++)o=document.createTextNode("\n"+r),t.insertBefore(o,t.children[i]),e(t.children[i],n),t.lastElementChild==t.children[i]&&(o=document.createTextNode("\n"+c),t.appendChild(o));return t}var t,div;this.sourcecode=(t=this.$refs.component.innerHTML,(div=document.createElement("div")).innerHTML=t.trim()+"\n",e(div,0).innerHTML)}},mounted:function(){this.setSrc()}},r=n(6),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"py-2"},[n("div",{staticClass:"py-2 text-xs capitalize opacity-50"},[e.nocode?e._e():n("div",{staticClass:"inline-block select-none",on:{click:function(t){e.showcode=!e.showcode}}},[e.showcode?e._e():n("Icon",{staticClass:"inline-block w-4 mr-2 cursor-pointer stroke-current",attrs:{glyph:"code"}}),e._v(" "),e.showcode?n("Icon",{staticClass:"inline-block w-4 mr-2 cursor-pointer stroke-current",attrs:{glyph:"eye"}}):e._e()],1),e._v("\n    "+e._s(e.title)+"\n  ")]),e._v(" "),n("div",[n("collapse-transition",[!e.nocode&&e.showcode?n("div",[n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:e.sourcecode,expression:"sourcecode"}],attrs:{id:"myInput"}},[n("code",{staticClass:"h-64 p-4 font-mono text-xs rounded-lg html"})])]):e._e()]),e._v(" "),n("collapse-transition",[e.showcode?e._e():n("div",[n("div",{ref:"component",class:e.classes},[e._t("default")],2)])])],1)])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Icon:n(160).default,CollapseTransition:n(405).default})}}]);