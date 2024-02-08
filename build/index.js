/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@codeamp/block-components/dist/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/@codeamp/block-components/dist/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports) => {

/*! For license information please see index.js.LICENSE.txt */
!function(){var e={814:function(e,t,o){var n;function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}!function(){"use strict";var i={}.hasOwnProperty;function c(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var n=r(o);if("string"===n||"number"===n)e.push(o);else if(Array.isArray(o)){if(o.length){var l=c.apply(null,o);l&&e.push(l)}}else if("object"===n){if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]")){e.push(o.toString());continue}for(var a in o)i.call(o,a)&&o[a]&&e.push(a)}}}return e.join(" ")}e.exports?(c.default=c,e.exports=c):"object"===r(o.amdO)&&o.amdO?void 0===(n=function(){return c}.apply(t,[]))||(e.exports=n):window.classNames=c}()},922:function(e){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var o="",n=void 0!==t[5];return t[4]&&(o+="@supports (".concat(t[4],") {")),t[2]&&(o+="@media ".concat(t[2]," {")),n&&(o+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),o+=e(t),n&&(o+="}"),t[2]&&(o+="}"),t[4]&&(o+="}"),o})).join("")},t.i=function(e,o,n,r,i){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(n)for(var l=0;l<this.length;l++){var a=this[l][0];null!=a&&(c[a]=!0)}for(var s=0;s<e.length;s++){var u=[].concat(e[s]);n&&c[u[0]]||(void 0!==i&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=i),o&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=o):u[2]=o),r&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=r):u[4]="".concat(r)),t.push(u))}},t}},499:function(e){"use strict";e.exports=function(e){return e[1]}},245:function(e,t,o){"use strict";var n=o(499),r=o.n(n),i=o(922),c=o.n(i)()(r());c.push([e.id,':root{--wp-admin-theme-color: #007cba;--wp-admin-theme-color--rgb: 0,124,186;--wp-admin-theme-color-darker-10: #006ba1;--wp-admin-theme-color-darker-10--rgb: 0,107,160.5;--wp-admin-theme-color-darker-20: #005a87;--wp-admin-theme-color-darker-20--rgb: 0,90,135;--wp-admin-border-width-focus: 2px}@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi){:root{--wp-admin-border-width-focus: 1.5px}}.codeamp-components-multi-select-control__input-container{font-size:13px;line-height:normal}.codeamp-components-multi-select-control__input-container{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;padding:6px 8px;box-shadow:0 0 0 transparent;transition:box-shadow 0.1s linear;border-radius:2px;border:1px solid #757575;font-size:16px;line-height:normal;width:100%;margin:0 0 8px 0;padding:0;cursor:text}@media (prefers-reduced-motion: reduce){.codeamp-components-multi-select-control__input-container{transition-duration:0s;transition-delay:0s}}@media (min-width: 600px){.codeamp-components-multi-select-control__input-container{font-size:13px;line-height:normal}}.codeamp-components-multi-select-control__input-container:focus{border-color:var(--wp-admin-theme-color);box-shadow:0 0 0 1px var(--wp-admin-theme-color);outline:2px solid transparent}.codeamp-components-multi-select-control__input-container::-webkit-input-placeholder{color:rgba(30,30,30,0.62)}.codeamp-components-multi-select-control__input-container::-moz-placeholder{opacity:1;color:rgba(30,30,30,0.62)}.codeamp-components-multi-select-control__input-container:-ms-input-placeholder{color:rgba(30,30,30,0.62)}.codeamp-components-multi-select-control__input-container.is-disabled{background:#ddd;border-color:#ddd}.codeamp-components-multi-select-control__input-container.is-active{border-color:var(--wp-admin-theme-color);box-shadow:0 0 0 1px var(--wp-admin-theme-color);outline:2px solid transparent}.codeamp-components-multi-select-control__input-container input[type="text"].codeamp-components-multi-select-control__input{display:inline-block;flex:1;font-family:inherit;font-size:16px;width:100%;max-width:100%;margin-left:4px;padding:0;min-height:24px;min-width:50px;background:inherit;border:0;color:#1e1e1e;box-shadow:none}@media (min-width: 600px){.codeamp-components-multi-select-control__input-container input[type="text"].codeamp-components-multi-select-control__input{font-size:13px}}.codeamp-components-multi-select-control__input-container input[type="text"].codeamp-components-multi-select-control__input:focus,.codeamp-components-multi-select-control.is-active .codeamp-components-multi-select-control__input-container input[type="text"].codeamp-components-multi-select-control__input{outline:none;box-shadow:none}.codeamp-components-multi-select-control__input-container .codeamp-components-multi-select-control__token+input[type="text"].codeamp-components-multi-select-control__input{width:auto}.codeamp-components-multi-select-control__help{font-size:12px;font-style:normal;color:#757575}.codeamp-components-multi-select-control__tokens-container{padding:4px}.codeamp-components-multi-select-control__token{font-size:13px;display:flex;color:#1e1e1e;max-width:100%}.codeamp-components-multi-select-control__token.is-borderless{position:relative;padding:0 24px 0 0}.codeamp-components-multi-select-control__token.is-borderless .codeamp-components-multi-select-control__token-text{background:transparent;color:var(--wp-admin-theme-color)}.codeamp-components-multi-select-control__token.is-borderless .codeamp-components-multi-select-control__remove-token{background:transparent;color:#757575;position:absolute;top:1px;right:0;padding:0}.codeamp-components-multi-select-control__token.is-borderless.is-success .codeamp-components-multi-select-control__token-text{color:#4ab866}.codeamp-components-multi-select-control__token.is-borderless.is-error .codeamp-components-multi-select-control__token-text{color:#cc1818;border-radius:4px 0 0 4px;padding:0 4px 0 6px}.codeamp-components-multi-select-control__token.is-borderless.is-validating .codeamp-components-multi-select-control__token-text{color:#1e1e1e}.codeamp-components-multi-select-control__token.is-disabled .codeamp-components-multi-select-control__remove-token{cursor:default}.codeamp-components-multi-select-control__token-text,.codeamp-components-multi-select-control__remove-token.components-button{display:inline-block;line-height:24px;height:auto;background:#ddd;min-width:unset;transition:all 0.2s cubic-bezier(0.4, 1, 0.4, 1)}@media (prefers-reduced-motion: reduce){.codeamp-components-multi-select-control__token-text,.codeamp-components-multi-select-control__remove-token.components-button{transition-duration:0s;transition-delay:0s;animation-duration:1ms;animation-delay:0s}}.codeamp-components-multi-select-control__token-text{border-radius:2px 0 0 2px;padding:0 0 0 8px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.codeamp-components-multi-select-control__remove-token.components-button{cursor:pointer;border-radius:0 2px 2px 0;padding:0 2px;color:#1e1e1e;line-height:10px;overflow:initial}.codeamp-components-multi-select-control__remove-token.components-button:hover{color:#1e1e1e}.codeamp-components-multi-select-control__suggestions-list{flex:1 0 100%;min-width:100%;max-height:9em;overflow-y:auto;transition:all 0.15s ease-in-out;list-style:none;border-top:1px solid #757575;margin:0;padding:0}@media (prefers-reduced-motion: reduce){.codeamp-components-multi-select-control__suggestions-list{transition-duration:0s;transition-delay:0s}}.codeamp-components-multi-select-control__no-suggestions{color:#757575;font-size:13px;margin:0;display:block;padding:4px 8px}.codeamp-components-multi-select-control__suggestion{color:#757575;display:block;font-size:13px;padding:4px 8px;margin:0;cursor:pointer}.codeamp-components-multi-select-control__suggestion.is-selected{background:var(--wp-admin-theme-color);color:#fff}.codeamp-components-multi-select-control__suggestion-match{text-decoration:underline}\n',""]),t.Z=c},313:function(e,t,o){"use strict";var n=o(499),r=o.n(n),i=o(922),c=o.n(i)()(r());c.push([e.id,".codeamp-components-resource-select-control>.components-base-control__field{position:relative;display:flex;flex-wrap:wrap}.codeamp-components-resource-select-control>.components-base-control__field>.components-base-control__label{flex:2}.codeamp-components-resource-select-control__label{margin-bottom:8px}.codeamp-components-resource-select-control__add_button{padding:0;margin:0;min-height:revert;height:auto;color:var(--wp-admin-theme-color);align-self:center;justify-content:right;margin-bottom:8px}.codeamp-components-resource-select-control__add_button:hover{text-decoration:underline}.codeamp-components-resource-select-control__edit_button{height:auto;margin-bottom:8px}.codeamp-components-resource-select-control__select{width:auto;flex:1}.codeamp-components-resource-select-control .components-base-control{margin-bottom:8px}.codeamp-components-resource-select-control .components-base-control__field{margin-bottom:0}.codeamp-components-resource-select-control .components-base-control{flex:1}\n",""]),t.Z=c},379:function(e){"use strict";var t=[];function o(e){for(var o=-1,n=0;n<t.length;n++)if(t[n].identifier===e){o=n;break}return o}function n(e,n){for(var i={},c=[],l=0;l<e.length;l++){var a=e[l],s=n.base?a[0]+n.base:a[0],u=i[s]||0,p="".concat(s," ").concat(u);i[s]=u+1;var d=o(p),m={css:a[1],media:a[2],sourceMap:a[3],supports:a[4],layer:a[5]};if(-1!==d)t[d].references++,t[d].updater(m);else{var f=r(m,n);n.byIndex=l,t.splice(l,0,{identifier:p,updater:f,references:1})}c.push(p)}return c}function r(e,t){var o=t.domAPI(t);return o.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;o.update(e=t)}else o.remove()}}e.exports=function(e,r){var i=n(e=e||[],r=r||{});return function(e){e=e||[];for(var c=0;c<i.length;c++){var l=o(i[c]);t[l].references--}for(var a=n(e,r),s=0;s<i.length;s++){var u=o(i[s]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}i=a}}},569:function(e){"use strict";var t={};e.exports=function(e,o){var n=function(e){if(void 0===t[e]){var o=document.querySelector(e);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(e){o=null}t[e]=o}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(o)}},216:function(e){"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:function(e,t,o){"use strict";e.exports=function(e){var t=o.nc;t&&e.setAttribute("nonce",t)}},795:function(e){"use strict";e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(o){!function(e,t,o){var n="";o.supports&&(n+="@supports (".concat(o.supports,") {")),o.media&&(n+="@media ".concat(o.media," {"));var r=void 0!==o.layer;r&&(n+="@layer".concat(o.layer.length>0?" ".concat(o.layer):""," {")),n+=o.css,r&&(n+="}"),o.media&&(n+="}"),o.supports&&(n+="}");var i=o.sourceMap;i&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(n,e,t.options)}(t,e,o)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:function(e){"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function o(n){var r=t[n];if(void 0!==r)return r.exports;var i=t[n]={id:n,exports:{}};return e[n](i,i.exports,o),i.exports}o.amdO={},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,{a:t}),t},o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.nc=void 0;var n={};!function(){"use strict";o.r(n),o.d(n,{MultiSelectControl:function(){return we},ResourceSelectControl:function(){return O}});var e=window.wp.i18n,t=window.wp.components,r=window.wp.compose,i=o(379),c=o.n(i),l=o(795),a=o.n(l),s=o(569),u=o.n(s),p=o(565),d=o.n(p),m=o(216),f=o.n(m),v=o(589),b=o.n(v),y=o(313),h={};h.styleTagTransform=b(),h.setAttributes=d(),h.insert=u().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=f(),c()(y.Z,h),y.Z&&y.Z.locals&&y.Z.locals;var g=o(814),_=o.n(g);function w(){return w=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},w.apply(this,arguments)}function x(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++)n[o]=e[o];return n}var S=function(){},O=function o(n){var i,c,l,a,s=n.onChange,u=void 0===s?S:s,p=n.onPrimaryAction,d=void 0===p?S:p,m=n.onSecondaryAction,f=void 0===m?S:m,v=n.label,b=void 0===v?"":v,y=n.primaryActionLabel,h=void 0===y?(0,e.__)("Edit","codeamp-block-components"):y,g=n.secondaryActionLabel,O=void 0===g?(0,e.__)("Add new","codeamp-block-components"):g,k=n.loadingLabel,E=void 0===k?(0,e.__)("Loading","codeamp-block-components"):k,j=n.showPrimaryAction,A=void 0===j||j,I=n.disabled,C=void 0!==I&&I,P=n.showSecondaryAction,L=void 0===P||P,R=n.defaultOption,T=n.options,M=n.value,N=n.help,D=n.primaryActionProps,B=n.secondaryActionProps,z=n.id,W=n.className,F=[];E&&(F=[{value:"loading",label:E}]),T&&(F=[],R&&F.push(R),(l=F).push.apply(l,function(e){if(Array.isArray(e))return x(e)}(a=T)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(a)||function(e,t){if(e){if("string"==typeof e)return x(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?x(e,t):void 0}}(a)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()));var H=(0,r.useInstanceId)(o,"codeamp-components-resource-select-control");return z&&(H=z),React.createElement(t.BaseControl,{id:H,className:_()("components-base-control codeamp-components-resource-select-control",W),help:N,label:b},L&&React.createElement(t.Button,w({className:"codeamp-components-resource-select-control__add_button",disabled:C,onClick:f},B),null!==(i=null==B?void 0:B.label)&&void 0!==i?i:O),React.createElement(t.__experimentalHStack,null,React.createElement(t.SelectControl,{id:H,value:M,options:F,className:"codeamp-components-resource-select-control__select",onChange:u,disabled:C}),A&&React.createElement(t.Button,w({onClick:d,variant:"secondary",disabled:C,className:"codeamp-components-resource-select-control__edit_button"},D),null!==(c=null==D?void 0:D.label)&&void 0!==c?c:h)))},k=window.wp.element,E=window.wp.a11y,j=window.wp.isShallowEqual,A=o.n(j),I=window.wp.primitives,C=(0,k.createElement)(I.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,k.createElement)(I.Path,{d:"M12 13.06l3.712 3.713 1.061-1.06L13.061 12l3.712-3.712-1.06-1.06L12 10.938 8.288 7.227l-1.061 1.06L10.939 12l-3.712 3.712 1.06 1.061L12 13.061z"})),P=function(){};function L(o){var n=o.value,i=o.label,c=o.title,l=o.isBorderless,a=void 0!==l&&l,s=o.disabled,u=void 0!==s&&s,p=o.onClickRemove,d=void 0===p?P:p,m=o.onMouseEnter,f=o.onMouseLeave,v=o.messages,b=o.termPosition,y=o.termsCount,h=(0,r.useInstanceId)(L),g=_()("codeamp-components-multi-select-control__token",{"is-borderless":a,"is-disabled":u}),w=(0,e.sprintf)((0,e.__)("%1$s (%2$s of %3$s)"),i,b,y);return React.createElement("span",{className:g,onMouseEnter:m,onMouseLeave:f,title:c,style:{margin:"0"}},React.createElement("span",{className:"codeamp-components-multi-select-control__token-text",id:"codeamp-components-multi-select-control__token-text-".concat(h)},React.createElement(t.VisuallyHidden,{as:"span"},w),React.createElement("span",{"aria-hidden":"true"},i)),React.createElement(t.Button,{className:"codeamp-components-multi-select-control__remove-token",icon:C,onClick:!u&&function(){return d({value:n})},label:v.remove,"aria-describedby":"codeamp-components-multi-select-control__token-text-".concat(h)}))}var R=["value","isExpanded","instanceId","selectedSuggestionIndex","className","onChange","onFocus","onBlur"];function T(){return T=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},T.apply(this,arguments)}function M(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++)n[o]=e[o];return n}var N=(0,k.forwardRef)((function(e,t){var o=e.value,n=e.isExpanded,r=e.instanceId,i=e.selectedSuggestionIndex,c=e.className,l=e.onChange,a=e.onFocus,s=e.onBlur,u=function(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}(e,R),p=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var n,r,i=[],c=!0,l=!1;try{for(o=o.call(e);!(c=(n=o.next()).done)&&(i.push(n.value),!t||i.length!==t);c=!0);}catch(e){l=!0,r=e}finally{try{c||null==o.return||o.return()}finally{if(l)throw r}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return M(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?M(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}((0,k.useState)(!1),2),d=p[0],m=p[1],f=o?o.length+1:0;return React.createElement("input",T({ref:t,id:r,type:"text"},u,{value:o||"",onChange:function(e){l&&l({value:e.target.value})},onFocus:function(e){m(!0),null==a||a(e)},onBlur:function(e){m(!1),null==s||s(e)},size:f,className:_()(c,"codeamp-components-multi-select-control__input"),autoComplete:"off",role:"combobox","aria-expanded":n,"aria-autocomplete":"list","aria-owns":n?"".concat(r,"-suggestions"):void 0,"aria-activedescendant":d&&-1!==i&&n?"".concat(r,"-suggestions-").concat(i):void 0,"aria-describedby":"".concat(r,"-howto"),"data-lpignore":"true"}))}));function D(e){return D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},D(e)}function B(e){return B="function"==typeof Symbol&&"symbol"===D(Symbol.iterator)?function(e){return D(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":D(e)},B(e)}function z(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function W(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function F(e,t){var o=e["page".concat(t?"Y":"X","Offset")],n="scroll".concat(t?"Top":"Left");if("number"!=typeof o){var r=e.document;"number"!=typeof(o=r.documentElement[n])&&(o=r.body[n])}return o}function H(e){return F(e)}function V(e){return F(e,!0)}function U(e){var t=function(e){var t,o,n,r=e.ownerDocument,i=r.body,c=r&&r.documentElement;return o=(t=e.getBoundingClientRect()).left,n=t.top,{left:o-=c.clientLeft||i.clientLeft||0,top:n-=c.clientTop||i.clientTop||0}}(e),o=e.ownerDocument,n=o.defaultView||o.parentWindow;return t.left+=H(n),t.top+=V(n),t}var Z,$=new RegExp("^(".concat(/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,")(?!px)[a-z%]+$"),"i"),q=/^(top|right|bottom|left)$/;function K(e,t){for(var o=0;o<e.length;o++)t(e[o])}function G(e){return"border-box"===Z(e,"boxSizing")}"undefined"!=typeof window&&(Z=window.getComputedStyle?function(e,t,o){var n="",r=e.ownerDocument,i=o||r.defaultView.getComputedStyle(e,null);return i&&(n=i.getPropertyValue(t)||i[t]),n}:function(e,t){var o=e.currentStyle&&e.currentStyle[t];if($.test(o)&&!q.test(t)){var n=e.style,r=n.left,i=e.runtimeStyle.left;e.runtimeStyle.left=e.currentStyle.left,n.left="fontSize"===t?"1em":o||0,o=n.pixelLeft+"px",n.left=r,e.runtimeStyle.left=i}return""===o?"auto":o});var J=["margin","border","padding"];function X(e,t,o){var n,r={},i=e.style;for(n in t)t.hasOwnProperty(n)&&(r[n]=i[n],i[n]=t[n]);for(n in o.call(e),t)t.hasOwnProperty(n)&&(i[n]=r[n])}function Y(e,t,o){var n,r,i,c=0;for(r=0;r<t.length;r++)if(n=t[r])for(i=0;i<o.length;i++){var l;l="border"===n?"".concat(n+o[i],"Width"):n+o[i],c+=parseFloat(Z(e,l))||0}return c}function Q(e){return null!=e&&e==e.window}var ee={};function te(e,t,o){if(Q(e))return"width"===t?ee.viewportWidth(e):ee.viewportHeight(e);if(9===e.nodeType)return"width"===t?ee.docWidth(e):ee.docHeight(e);var n="width"===t?["Left","Right"]:["Top","Bottom"],r="width"===t?e.offsetWidth:e.offsetHeight,i=(Z(e),G(e)),c=0;(null==r||r<=0)&&(r=void 0,(null==(c=Z(e,t))||Number(c)<0)&&(c=e.style[t]||0),c=parseFloat(c)||0),void 0===o&&(o=i?1:-1);var l=void 0!==r||i,a=r||c;if(-1===o)return l?a-Y(e,["border","padding"],n):c;if(l){var s=2===o?-Y(e,["border"],n):Y(e,["margin"],n);return a+(1===o?0:s)}return c+Y(e,J.slice(o),n)}K(["Width","Height"],(function(e){ee["doc".concat(e)]=function(t){var o=t.document;return Math.max(o.documentElement["scroll".concat(e)],o.body["scroll".concat(e)],ee["viewport".concat(e)](o))},ee["viewport".concat(e)]=function(t){var o="client".concat(e),n=t.document,r=n.body,i=n.documentElement[o];return"CSS1Compat"===n.compatMode&&i||r&&r[o]||i}}));var oe={position:"absolute",visibility:"hidden",display:"block"};function ne(e){var t,o=arguments;return 0!==e.offsetWidth?t=te.apply(void 0,o):X(e,oe,(function(){t=te.apply(void 0,o)})),t}function re(e,t,o){var n=o;if("object"!==B(t))return void 0!==n?("number"==typeof n&&(n+="px"),void(e.style[t]=n)):Z(e,t);for(var r in t)t.hasOwnProperty(r)&&re(e,r,t[r])}K(["width","height"],(function(e){var t=e.charAt(0).toUpperCase()+e.slice(1);ee["outer".concat(t)]=function(t,o){return t&&ne(t,e,o?0:1)};var o="width"===e?["Left","Right"]:["Top","Bottom"];ee[e]=function(t,n){return void 0===n?t&&ne(t,e,-1):t?(Z(t),G(t)&&(n+=Y(t,["padding","border"],o)),re(t,e,n)):void 0}}));var ie=function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?W(o,!0).forEach((function(t){z(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):W(o).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}({getWindow:function(e){var t=e.ownerDocument||e;return t.defaultView||t.parentWindow},offset:function(e,t){if(void 0===t)return U(e);!function(e,t){"static"===re(e,"position")&&(e.style.position="relative");var o,n,r=U(e),i={};for(n in t)t.hasOwnProperty(n)&&(o=parseFloat(re(e,n))||0,i[n]=o+t[n]-r[n]);re(e,i)}(e,t)},isWindow:Q,each:K,css:re,clone:function(e){var t={};for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o]);if(e.overflow)for(var n in e)e.hasOwnProperty(n)&&(t.overflow[n]=e.overflow[n]);return t},scrollLeft:function(e,t){if(Q(e)){if(void 0===t)return H(e);window.scrollTo(t,V(e))}else{if(void 0===t)return e.scrollLeft;e.scrollLeft=t}},scrollTop:function(e,t){if(Q(e)){if(void 0===t)return V(e);window.scrollTo(H(e),t)}else{if(void 0===t)return e.scrollTop;e.scrollTop=t}},viewportWidth:0,viewportHeight:0},ee);function ce(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++)n[o]=e[o];return n}var le=function(e){e.preventDefault()},ae=function(t){var o=t.selectedIndex,n=t.scrollIntoView,i=t.searchValue,c=t.onHover,l=t.onSelect,a=t.suggestions,s=void 0===a?[]:a,u=t.instanceId,p=t.__experimentalRenderItem,d=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var n,r,i=[],c=!0,l=!1;try{for(o=o.call(e);!(c=(n=o.next()).done)&&(i.push(n.value),!t||i.length!==t);c=!0);}catch(e){l=!0,r=e}finally{try{c||null==o.return||o.return()}finally{if(l)throw r}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return ce(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?ce(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}((0,k.useState)(!1),2),m=d[0],f=d[1],v=(0,r.useRefEffect)((function(e){var t;return o>-1&&n&&e.children[o]&&(f(!0),function(e,t,o){o=o||{},9===t.nodeType&&(t=ie.getWindow(t));var n=o.allowHorizontalScroll,r=o.onlyScrollIfNeeded,i=o.alignWithTop,c=o.alignWithLeft,l=o.offsetTop||0,a=o.offsetLeft||0,s=o.offsetBottom||0,u=o.offsetRight||0;n=void 0===n||n;var p,d,m,f,v,b,y,h,g,_,w=ie.isWindow(t),x=ie.offset(e),S=ie.outerHeight(e),O=ie.outerWidth(e);w?(y=t,_=ie.height(y),g=ie.width(y),h={left:ie.scrollLeft(y),top:ie.scrollTop(y)},v={left:x.left-h.left-a,top:x.top-h.top-l},b={left:x.left+O-(h.left+g)+u,top:x.top+S-(h.top+_)+s},f=h):(p=ie.offset(t),d=t.clientHeight,m=t.clientWidth,f={left:t.scrollLeft,top:t.scrollTop},v={left:x.left-(p.left+(parseFloat(ie.css(t,"borderLeftWidth"))||0))-a,top:x.top-(p.top+(parseFloat(ie.css(t,"borderTopWidth"))||0))-l},b={left:x.left+O-(p.left+m+(parseFloat(ie.css(t,"borderRightWidth"))||0))+u,top:x.top+S-(p.top+d+(parseFloat(ie.css(t,"borderBottomWidth"))||0))+s}),v.top<0||b.top>0?!0===i?ie.scrollTop(t,f.top+v.top):!1===i?ie.scrollTop(t,f.top+b.top):v.top<0?ie.scrollTop(t,f.top+v.top):ie.scrollTop(t,f.top+b.top):r||((i=void 0===i||!!i)?ie.scrollTop(t,f.top+v.top):ie.scrollTop(t,f.top+b.top)),n&&(v.left<0||b.left>0?!0===c?ie.scrollLeft(t,f.left+v.left):!1===c?ie.scrollLeft(t,f.left+b.left):v.left<0?ie.scrollLeft(t,f.left+v.left):ie.scrollLeft(t,f.left+b.left):r||((c=void 0===c||!!c)?ie.scrollLeft(t,f.left+v.left):ie.scrollLeft(t,f.left+b.left)))}(e.children[o],e,{onlyScrollIfNeeded:!0}),t=requestAnimationFrame((function(){f(!1)}))),function(){void 0!==t&&cancelAnimationFrame(t)}}),[o,n]),b=function(e){return function(){m||null==c||c(e)}},y=function(e){return function(){null==l||l(e)}};return React.createElement("ul",{ref:v,className:"codeamp-components-multi-select-control__suggestions-list",id:"".concat(u,"-suggestions"),role:"listbox"},0===s.length&&React.createElement("li",{className:"codeamp-components-multi-select-control__no-suggestions",role:"option"},(0,e.__)("No results found.","codeamp-block-components")),s.map((function(e,t){var n,r=function(e){var t=e.label.toLocaleLowerCase().indexOf(i);return{suggestionBeforeMatch:e.label.substring(0,t),suggestionMatch:e.label.substring(t,t+i.length),suggestionAfterMatch:e.label.substring(t+i.length)}}(e),c=_()("codeamp-components-multi-select-control__suggestion",{"is-selected":t===o});return n="function"==typeof p?p({item:e}):r?React.createElement("span",{"aria-label":e.label},r.suggestionBeforeMatch,React.createElement("strong",{className:"codeamp-components-multi-select-control__suggestion-match"},r.suggestionMatch),r.suggestionAfterMatch):e.label,React.createElement("li",{id:"".concat(u,"-suggestions-").concat(t),role:"option",className:c,key:e.value,onMouseDown:le,onClick:y(e),onMouseEnter:b(e),"aria-selected":t===o},n)})))},se=o(245),ue={};function pe(){return pe=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},pe.apply(this,arguments)}function de(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function me(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function fe(e){return fe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},fe(e)}function ve(e){return function(e){if(Array.isArray(e))return he(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||ye(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function be(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var n,r,i=[],c=!0,l=!1;try{for(o=o.call(e);!(c=(n=o.next()).done)&&(i.push(n.value),!t||i.length!==t);c=!0);}catch(e){l=!0,r=e}finally{try{c||null==o.return||o.return()}finally{if(l)throw r}}return i}}(e,t)||ye(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ye(e,t){if(e){if("string"==typeof e)return he(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?he(e,t):void 0}}function he(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++)n[o]=e[o];return n}function ge(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];if(""===e)return null;var o=null!=e?e:"",n=t.find((function(e){return-1!==e.label.toLocaleLowerCase().indexOf(o.trim().toLocaleLowerCase())}));return n}ue.styleTagTransform=b(),ue.setAttributes=d(),ue.insert=u().bind(null,"head"),ue.domAPI=a(),ue.insertStyleElement=f(),c()(se.Z,ue),se.Z&&se.Z.locals&&se.Z.locals;var _e=function(){};function we(o){var n=o.autoCapitalize,i=o.autoComplete,c=o.maxLength,l=o.placeholder,a=o.label,s=void 0===a?(0,e.__)("Add item"):a,u=o.help,p=o.className,d=o.suggestions,m=void 0===d?[]:d,f=o.options,v=void 0===f?[]:f,b=o.maxSuggestions,y=void 0===b?100:b,h=o.value,g=void 0===h?[]:h,w=o.onChange,x=void 0===w?function(){}:w,S=o.onInputChange,O=void 0===S?function(){}:S,j=o.onFocus,I=void 0===j?void 0:j,C=(o.isBorderless,o.id),P=o.disabled,R=void 0!==P&&P,T=o.messages,M=void 0===T?{added:(0,e.__)("Item added."),removed:(0,e.__)("Item removed."),remove:(0,e.__)("Remove item"),__experimentalInvalid:(0,e.__)("Invalid item")}:T,D=o.__experimentalRenderItem,B=o.__experimentalAutoSelectFirstMatch,z=void 0===B||B,W=o.__experimentalValidateInput,F=void 0===W?function(){return!0}:W,H=o.__experimentalCloseSuggestionsOnSelect,V=void 0===H||H,U=o.__next36pxDefaultSize,Z=void 0!==U&&U,$=(0,r.useInstanceId)(we,"codeamp-components-multi-select-control");C&&($=C);var q=be((0,k.useState)(""),2),K=q[0],G=q[1],J=be((0,k.useState)(0),2),X=J[0],Y=J[1],Q=be((0,k.useState)(!1),2),ee=Q[0],te=Q[1],oe=be((0,k.useState)(!1),2),ne=oe[0],re=oe[1],ie=be((0,k.useState)(-1),2),ce=ie[0],le=ie[1],se=be((0,k.useState)(!1),2),ue=se[0],ye=se[1],he=(0,r.usePrevious)(m),xe=(0,r.usePrevious)(g),Se=(0,k.useRef)(null),Oe=(0,k.useRef)(null),ke=(0,r.useDebounce)(E.speak,500);function Ee(){var e;null===(e=Se.current)||void 0===e||e.focus()}function je(){var e;return Se.current===(null===(e=Se.current)||void 0===e?void 0:e.ownerDocument.activeElement)}function Ae(e){je()||e.target===Oe.current?(te(!0),re(!0)):te(!1),"function"==typeof I&&I(e)}function Ie(e){e.target===Oe.current&&ee&&e.preventDefault()}function Ce(e){Me(e.value),Ee()}function Pe(e){var t=!1;return je()&&We()&&(e(),t=!0),t}function Le(){var e=ze()-1;e>-1&&Me(g[e])}function Re(){var e=ze();e<g.length&&(Me(g[e]),function(e){Y(g.length-Math.max(e,-1)-1)}(e))}function Te(e){F(e.label)?(function(e){if(ve(new Set(e.filter((function(e){return!function(e){return g.some((function(t){return Ne(e)===Ne(t)}))}(e)})))),e.length>0){var t=ve(g);t.splice.apply(t,[ze(),0].concat(ve(e))),x(t)}}([e.value]),(0,E.speak)(M.added,"assertive"),G(""),ye(!1),le(-1),V&&re(!1),ee&&Ee()):(0,E.speak)(M.__experimentalInvalid,"assertive")}function Me(e){var t=g.filter((function(t){return Ne(t)!==Ne(e)}));x(t),(0,E.speak)(M.removed,"assertive")}function Ne(e){return"object"===fe(e)?e.value:e}function De(){return v.filter((function(e){return-1===g.indexOf(e.value)}))}function Be(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:De(),o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:y;if(""!==e.trim()){var n=[],r=[];t.forEach((function(t){var o=t.label.toLocaleLowerCase().indexOf(e.trim().toLocaleLowerCase());0===o?n.push(t):o>0&&r.push(t)})),t=n.concat(r)}return t.slice(0,o)}function ze(){return g.length-X}function We(){return 0===K.length}function Fe(){var e,t;return(null===(e=ge(K))||void 0===e||null===(t=e.label)||void 0===t?void 0:t.length)>0}function He(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],o=Be(K),n=o.length>0;t&&(z&&n?(le(0),ye(!0)):(le(-1),ye(!1))),le(0);var r=n?(0,e.sprintf)((0,e._n)("%d result found, use up and down arrow keys to navigate.","%d results found, use up and down arrow keys to navigate.",o.length),o.length):(0,e.__)("No results.");ke(r,"assertive")}(0,k.useEffect)((function(){ee&&!je()&&Ee()}),[ee]),(0,k.useEffect)((function(){var e=!A()(m,he||[]);(e||g!==xe)&&He(e)}),[m,he,g,xe]),(0,k.useEffect)((function(){He()}),[K]),R&&ee&&(te(!1),G(""));var Ve,Ue,Ze=_()(p,"codeamp-components-multi-select-control__input-container",{"is-active":ee,"is-disabled":R}),$e={className:"components-base-control codeamp-components-multi-select-control",tabIndex:-1},qe=Be();return R||($e=Object.assign({},$e,{onKeyDown:function(e){var t=!1;if(!e.defaultPrevented){switch(e.code){case"Backspace":t=Pe(Le);break;case"Enter":case"Space":t=function(){var e=!1,t=function(){if(-1!==ce)return Be()[ce]}();return t&&ne?(Te(t),e=!0):Fe()&&""!==K.trim()&&(Te(K),e=!0),e}();break;case"ArrowLeft":t=function(){var e=!1;return We()&&(Y((function(e){return Math.min(e+1,g.length)})),e=!0),e}();break;case"ArrowUp":t=ne?(le((function(e){return(0===e?Be(K,De(),g,y).length:e)-1})),ye(!0),!0):(re(!0),le(0),ye(!0),!0);break;case"ArrowRight":t=function(){var e=!1;return We()&&(Y((function(e){return Math.max(e-1,0)})),e=!0),e}();break;case"ArrowDown":t=ne?(le((function(e){return(e+1)%Be(K,De(),g,y).length})),ye(!0),!0):(re(!0),le(0),ye(!0),!0);break;case"Delete":t=Pe(Re);break;case"Escape":t=function(e){return e.target instanceof HTMLInputElement&&(G(e.target.value),re(!1),le(-1),ye(!1)),!0}(e)}t&&e.preventDefault()}},onKeyPress:function(e){var t=!1;44===e.charCode&&(Fe()&&Te(K),t=!0),t&&e.preventDefault()},onFocus:Ae})),React.createElement(t.BaseControl,{id:$,label:s,help:u},React.createElement("div",$e,React.createElement("div",{ref:Oe,className:Ze,tabIndex:-1,onMouseDown:Ie,onTouchStart:Ie},React.createElement(t.Flex,{className:"codeamp-components-multi-select-control__tokens-container",justify:"flex-start",align:"flex-start",gap:"4px",wrap:!0,__next36pxDefaultSize:Z,hasTokens:!!g.length},(Ue=g.map((function(e){return v.find((function(t){return t.value===e}))||null})).map((function(e,o){return function(e,o){var n=e.value,r=e.label,i=e.onMouseEnter,c=void 0===i?_e:i,l=e.onMouseLeave,a=void 0===l?_e:l,s=e.isBorderless,u=void 0!==s&&s,p=n,d=o+1;return React.createElement(t.FlexItem,{key:"token-"+p},React.createElement(L,{value:p,label:r,title:"string"!=typeof token?r:void 0,onClickRemove:Ce,isBorderless:u,onMouseEnter:c,onMouseLeave:a,disabled:R,messages:M,termPosition:d,termsCount:g.length}))}(function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?de(Object(o),!0).forEach((function(t){me(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):de(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}({},e),o)})),Ue.splice(ze(),0,(Ve={instanceId:$,autoCapitalize:n,autoComplete:i,placeholder:0===g.length?l:"",key:"input",disabled:R,value:K,onBlur:function(){Fe()?te(!1):(G(""),Y(0),te(!1),re(!1),le(-1),ye(!1))},isExpanded:ne,selectedSuggestionIndex:ce,style:{lineHeight:"24px"},onClick:Ae},React.createElement(N,pe({},Ve,{onChange:c&&g.length>=c?void 0:function(e){var t=e.value;G(t),re(!0),O(t)},ref:Se})))),Ue)),ne&&React.createElement(ae,{instanceId:$,match:ge(K,v),searchValue:K.trim(),suggestions:qe,selectedIndex:ce,scrollIntoView:ue,onHover:function(e){var t=Be().indexOf(e);t>=0&&(le(t),ye(!1))},onSelect:function(e){Te(e)},__experimentalRenderItem:D}))))}}();var r=exports;for(var i in n)r[i]=n[i];n.__esModule&&Object.defineProperty(r,"__esModule",{value:!0})}();

/***/ }),

/***/ "./node_modules/@wordpress/dataviews/build-module/add-filter.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@wordpress/dataviews/build-module/add-filter.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AddFilter)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/funnel.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lock_unlock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lock-unlock */ "./node_modules/@wordpress/dataviews/build-module/lock-unlock.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants */ "./node_modules/@wordpress/dataviews/build-module/constants.js");
/* harmony import */ var _dropdown_menu_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dropdown-menu-helper */ "./node_modules/@wordpress/dataviews/build-module/dropdown-menu-helper.js");

/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */



const {
  DropdownMenuV2: DropdownMenu,
  DropdownMenuGroupV2: DropdownMenuGroup,
  DropdownMenuItemV2: DropdownMenuItem,
  DropdownMenuRadioItemV2: DropdownMenuRadioItem,
  DropdownMenuSeparatorV2: DropdownMenuSeparator,
  DropdownMenuItemLabelV2: DropdownMenuItemLabel,
  DropdownMenuItemHelpTextV2: DropdownMenuItemHelpText
} = (0,_lock_unlock__WEBPACK_IMPORTED_MODULE_4__.unlock)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.privateApis);
function WithSeparators({
  children
}) {
  return _wordpress_element__WEBPACK_IMPORTED_MODULE_3__.Children.toArray(children).filter(Boolean).map((child, i) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    key: i
  }, i > 0 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenuSeparator, null), child));
}
function AddFilter({
  filters,
  view,
  onChangeView
}) {
  if (filters.length === 0) {
    return null;
  }
  const filterCount = view.filters.reduce((acc, filter) => {
    if (filter.value !== undefined) {
      return acc + 1;
    }
    return acc;
  }, 0);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenu, {
    trigger: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
      __experimentalIsFocusable: true,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Filters'),
      size: "compact",
      icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_5__["default"],
      className: "dataviews-filters-button"
    }, view.type === _constants__WEBPACK_IMPORTED_MODULE_6__.LAYOUT_LIST && filterCount > 0 ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "dataviews-filters-count"
    }, filterCount) : null),
    style: {
      minWidth: '230px'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(WithSeparators, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenuGroup, null, filters.map(filter => {
    const filterInView = view.filters.find(f => f.field === filter.field);
    const otherFilters = view.filters.filter(f => f.field !== filter.field);
    const activeElement = filter.elements.find(element => element.value === filterInView?.value);
    const activeOperator = filterInView?.operator || filter.operators[0];
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenu, {
      key: filter.field,
      trigger: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenuItem, {
        suffix: activeElement && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
          "aria-hidden": "true"
        }, activeOperator in _constants__WEBPACK_IMPORTED_MODULE_6__.OPERATORS && `${_constants__WEBPACK_IMPORTED_MODULE_6__.OPERATORS[activeOperator].label} `, activeElement.label)
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenuItemLabel, null, filter.name)),
      style: {
        minWidth: '200px'
      }
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(WithSeparators, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenuGroup, null, filter.elements.map(element => {
      const isActive = activeElement?.value === element.value;
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_dropdown_menu_helper__WEBPACK_IMPORTED_MODULE_7__.DropdownMenuRadioItemCustom, {
        key: element.value,
        name: `add-filter-${filter.field}`,
        value: element.value,
        checked: isActive,
        onChange: e => {
          onChangeView({
            ...view,
            page: 1,
            filters: [...otherFilters, {
              field: filter.field,
              operator: activeOperator,
              value: isActive ? undefined : e.target.value
            }]
          });
        }
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenuItemLabel, null, element.label), !!element.description && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenuItemHelpText, null, element.description));
    })), filter.operators.length > 1 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenu, {
      trigger: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenuItem, {
        suffix: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
          "aria-hidden": "true"
        }, _constants__WEBPACK_IMPORTED_MODULE_6__.OPERATORS[activeOperator]?.label)
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenuItemLabel, null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Conditions')))
    }, Object.entries(_constants__WEBPACK_IMPORTED_MODULE_6__.OPERATORS).map(([operator, {
      label,
      key
    }]) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenuRadioItem, {
      key: key,
      name: `add-filter-${filter.field}-conditions`,
      value: operator,
      checked: activeOperator === operator,
      onChange: e => {
        onChangeView({
          ...view,
          page: 1,
          filters: [...otherFilters, {
            field: filter.field,
            operator: e.target.value,
            value: filterInView?.value
          }]
        });
      }
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenuItemLabel, null, label)))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenuItem, {
      key: 'reset-filter-' + filter.name,
      disabled: !activeElement,
      hideOnClick: false,
      onClick: () => {
        onChangeView({
          ...view,
          page: 1,
          filters: view.filters.filter(f => f.field !== filter.field)
        });
      }
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenuItemLabel, null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)( /* translators: 1: Filter name. e.g.: "Reset Author". */
    (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Reset %1$s'), filter.name.toLowerCase())))));
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenuItem, {
    disabled: view.search === '' && view.filters?.length === 0,
    hideOnClick: false,
    onClick: () => {
      onChangeView({
        ...view,
        page: 1,
        filters: []
      });
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenuItemLabel, null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Reset filters')))));
}
//# sourceMappingURL=add-filter.js.map

/***/ }),

/***/ "./node_modules/@wordpress/dataviews/build-module/bulk-actions.js":
/*!************************************************************************!*\
  !*** ./node_modules/@wordpress/dataviews/build-module/bulk-actions.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BulkActions)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lock_unlock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lock-unlock */ "./node_modules/@wordpress/dataviews/build-module/lock-unlock.js");

/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */

const {
  DropdownMenuV2: DropdownMenu,
  DropdownMenuGroupV2: DropdownMenuGroup,
  DropdownMenuItemV2: DropdownMenuItem,
  DropdownMenuSeparatorV2: DropdownMenuSeparator
} = (0,_lock_unlock__WEBPACK_IMPORTED_MODULE_4__.unlock)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.privateApis);
function ActionWithModal({
  action,
  selectedItems,
  setActionWithModal,
  onMenuOpenChange
}) {
  const eligibleItems = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => {
    return selectedItems.filter(item => action.isEligible(item));
  }, [action, selectedItems]);
  const {
    RenderModal,
    hideModalHeader
  } = action;
  const onCloseModal = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useCallback)(() => {
    setActionWithModal(undefined);
  }, [setActionWithModal]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Modal, {
    title: !hideModalHeader && action.label,
    __experimentalHideHeader: !!hideModalHeader,
    onRequestClose: onCloseModal,
    overlayClassName: "dataviews-action-modal"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RenderModal, {
    items: eligibleItems,
    closeModal: onCloseModal,
    onPerform: () => onMenuOpenChange(false)
  }));
}
function BulkActionItem({
  action,
  selectedItems,
  setActionWithModal
}) {
  const eligibleItems = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => {
    return selectedItems.filter(item => action.isEligible(item));
  }, [action, selectedItems]);
  const shouldShowModal = !!action.RenderModal;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenuItem, {
    key: action.id,
    disabled: eligibleItems.length === 0,
    hideOnClick: !shouldShowModal,
    onClick: async () => {
      if (shouldShowModal) {
        setActionWithModal(action);
      } else {
        await action.callback(eligibleItems);
      }
    },
    suffix: eligibleItems.length > 0 ? eligibleItems.length : undefined
  }, action.label);
}
function ActionsMenuGroup({
  actions,
  selectedItems,
  setActionWithModal
}) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenuGroup, null, actions.map(action => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(BulkActionItem, {
    key: action.id,
    action: action,
    selectedItems: selectedItems,
    setActionWithModal: setActionWithModal
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenuSeparator, null));
}
function BulkActions({
  data,
  actions,
  selection,
  onSelectionChange,
  getItemId
}) {
  const bulkActions = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => actions.filter(action => action.supportsBulk), [actions]);
  const areAllSelected = selection && selection.length === data.length;
  const [isMenuOpen, onMenuOpenChange] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  const [actionWithModal, setActionWithModal] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)();
  const selectedItems = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => {
    return data.filter(item => selection.includes(getItemId(item)));
  }, [selection, data, getItemId]);
  if (bulkActions.length === 0) {
    return null;
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenu, {
    open: isMenuOpen,
    onOpenChange: onMenuOpenChange,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Bulk actions'),
    style: {
      minWidth: '240px'
    },
    trigger: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
      className: "dataviews-bulk-edit-button",
      __next40pxDefaultSize: true,
      variant: "tertiary",
      size: "compact"
    }, selection.length ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)( /* translators: %d: Number of items. */
    (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__._n)('Edit %d item', 'Edit %d items', selection.length), selection.length) : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Bulk edit'))
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ActionsMenuGroup, {
    actions: bulkActions,
    setActionWithModal: setActionWithModal,
    selectedItems: selectedItems
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenuGroup, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenuItem, {
    disabled: areAllSelected,
    hideOnClick: false,
    onClick: () => {
      onSelectionChange(data);
    },
    suffix: data.length
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Select all')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenuItem, {
    disabled: selection.length === 0,
    hideOnClick: false,
    onClick: () => {
      onSelectionChange([]);
    }
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Deselect')))), actionWithModal && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ActionWithModal, {
    action: actionWithModal,
    selectedItems: selectedItems,
    setActionWithModal: setActionWithModal,
    onMenuOpenChange: onMenuOpenChange
  }));
}
//# sourceMappingURL=bulk-actions.js.map

/***/ }),

/***/ "./node_modules/@wordpress/dataviews/build-module/constants.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@wordpress/dataviews/build-module/constants.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ENUMERATION_TYPE: () => (/* binding */ ENUMERATION_TYPE),
/* harmony export */   LAYOUT_GRID: () => (/* binding */ LAYOUT_GRID),
/* harmony export */   LAYOUT_LIST: () => (/* binding */ LAYOUT_LIST),
/* harmony export */   LAYOUT_TABLE: () => (/* binding */ LAYOUT_TABLE),
/* harmony export */   OPERATORS: () => (/* binding */ OPERATORS),
/* harmony export */   OPERATOR_IN: () => (/* binding */ OPERATOR_IN),
/* harmony export */   OPERATOR_NOT_IN: () => (/* binding */ OPERATOR_NOT_IN),
/* harmony export */   SORTING_DIRECTIONS: () => (/* binding */ SORTING_DIRECTIONS),
/* harmony export */   VIEW_LAYOUTS: () => (/* binding */ VIEW_LAYOUTS)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/block-table.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/category.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/format-list-bullets-rtl.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/format-list-bullets.js");
/* harmony import */ var _view_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view-table */ "./node_modules/@wordpress/dataviews/build-module/view-table.js");
/* harmony import */ var _view_grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-grid */ "./node_modules/@wordpress/dataviews/build-module/view-grid.js");
/* harmony import */ var _view_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view-list */ "./node_modules/@wordpress/dataviews/build-module/view-list.js");
/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */




// Field types.
const ENUMERATION_TYPE = 'enumeration';

// Filter operators.
const OPERATOR_IN = 'in';
const OPERATOR_NOT_IN = 'notIn';
const OPERATORS = {
  [OPERATOR_IN]: {
    key: 'in-filter',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Is')
  },
  [OPERATOR_NOT_IN]: {
    key: 'not-in-filter',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Is not')
  }
};

// Sorting
const SORTING_DIRECTIONS = {
  asc: {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Sort ascending')
  },
  desc: {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Sort descending')
  }
};

// View layouts.
const LAYOUT_TABLE = 'table';
const LAYOUT_GRID = 'grid';
const LAYOUT_LIST = 'list';
const VIEW_LAYOUTS = [{
  type: LAYOUT_TABLE,
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Table'),
  component: _view_table__WEBPACK_IMPORTED_MODULE_1__["default"],
  icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_2__["default"]
}, {
  type: LAYOUT_GRID,
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Grid'),
  component: _view_grid__WEBPACK_IMPORTED_MODULE_3__["default"],
  icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__["default"]
}, {
  type: LAYOUT_LIST,
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('List'),
  component: _view_list__WEBPACK_IMPORTED_MODULE_5__["default"],
  icon: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.isRTL)() ? _wordpress_icons__WEBPACK_IMPORTED_MODULE_6__["default"] : _wordpress_icons__WEBPACK_IMPORTED_MODULE_7__["default"]
}];
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ "./node_modules/@wordpress/dataviews/build-module/dataviews.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@wordpress/dataviews/build-module/dataviews.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DataViews)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pagination */ "./node_modules/@wordpress/dataviews/build-module/pagination.js");
/* harmony import */ var _view_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./view-actions */ "./node_modules/@wordpress/dataviews/build-module/view-actions.js");
/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./filters */ "./node_modules/@wordpress/dataviews/build-module/filters.js");
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./search */ "./node_modules/@wordpress/dataviews/build-module/search.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "./node_modules/@wordpress/dataviews/build-module/constants.js");
/* harmony import */ var _bulk_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bulk-actions */ "./node_modules/@wordpress/dataviews/build-module/bulk-actions.js");

/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */






const defaultGetItemId = item => item.id;
const defaultOnSelectionChange = () => {};
function DataViews({
  view,
  onChangeView,
  fields,
  search = true,
  searchLabel = undefined,
  actions,
  data,
  getItemId = defaultGetItemId,
  isLoading = false,
  paginationInfo,
  supportedLayouts,
  onSelectionChange = defaultOnSelectionChange,
  onDetailsChange = null,
  deferredRendering = false
}) {
  const [selection, setSelection] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (selection.length > 0 && selection.some(id => !data.some(item => item.id === id))) {
      const newSelection = selection.filter(id => data.some(item => item.id === id));
      setSelection(newSelection);
      onSelectionChange(data.filter(item => newSelection.includes(item.id)));
    }
  }, [selection, data, onSelectionChange]);
  const onSetSelection = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useCallback)(items => {
    setSelection(items.map(item => item.id));
    onSelectionChange(items);
  }, [setSelection, onSelectionChange]);
  const ViewComponent = _constants__WEBPACK_IMPORTED_MODULE_3__.VIEW_LAYOUTS.find(v => v.type === view.type).component;
  const _fields = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
    return fields.map(field => ({
      ...field,
      render: field.render || field.getValue
    }));
  }, [fields]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "dataviews-wrapper"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalVStack, {
    spacing: 0,
    justify: "flex-start"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalHStack, {
    alignment: "flex-start",
    className: "dataviews-filters__view-actions"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalHStack, {
    justify: "start",
    wrap: true
  }, search && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_search__WEBPACK_IMPORTED_MODULE_4__["default"], {
    label: searchLabel,
    view: view,
    onChangeView: onChangeView
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_filters__WEBPACK_IMPORTED_MODULE_5__["default"], {
    fields: _fields,
    view: view,
    onChangeView: onChangeView
  })), view.type === _constants__WEBPACK_IMPORTED_MODULE_3__.LAYOUT_TABLE && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_bulk_actions__WEBPACK_IMPORTED_MODULE_6__["default"], {
    actions: actions,
    data: data,
    onSelectionChange: onSetSelection,
    selection: selection,
    getItemId: getItemId
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_view_actions__WEBPACK_IMPORTED_MODULE_7__["default"], {
    fields: _fields,
    view: view,
    onChangeView: onChangeView,
    supportedLayouts: supportedLayouts
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ViewComponent, {
    fields: _fields,
    view: view,
    onChangeView: onChangeView,
    actions: actions,
    data: data,
    getItemId: getItemId,
    isLoading: isLoading,
    onSelectionChange: onSetSelection,
    onDetailsChange: onDetailsChange,
    selection: selection,
    deferredRendering: deferredRendering
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_pagination__WEBPACK_IMPORTED_MODULE_8__["default"], {
    view: view,
    onChangeView: onChangeView,
    paginationInfo: paginationInfo
  })));
}
//# sourceMappingURL=dataviews.js.map

/***/ }),

/***/ "./node_modules/@wordpress/dataviews/build-module/dropdown-menu-helper.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@wordpress/dataviews/build-module/dropdown-menu-helper.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DropdownMenuRadioItemCustom: () => (/* binding */ DropdownMenuRadioItemCustom)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lock_unlock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lock-unlock */ "./node_modules/@wordpress/dataviews/build-module/lock-unlock.js");

/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */

const {
  DropdownMenuItemV2: DropdownMenuItem
} = (0,_lock_unlock__WEBPACK_IMPORTED_MODULE_4__.unlock)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.privateApis);
const radioCheck = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_3__.Circle, {
  cx: 12,
  cy: 12,
  r: 3
}));

/**
 * A custom implementation of a radio menu item using the standard menu item
 * component, which allows deselecting selected values.
 */
const DropdownMenuRadioItemCustom = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(function DropdownMenuRadioItemCustom({
  checked,
  name,
  value,
  hideOnClick,
  onChange,
  onClick,
  ...props
}, ref) {
  const onClickHandler = e => {
    onClick?.(e);
    onChange?.({
      ...e,
      target: {
        ...e.target,
        value
      }
    });
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenuItem, {
    ref: ref,
    role: "menuitemradio",
    name: name,
    "aria-checked": checked,
    hideOnClick: !!hideOnClick,
    prefix: checked ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Icon, {
      icon: radioCheck
    }) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "dataviews-filters__custom-menu-radio-item-prefix",
      "aria-hidden": "true"
    }),
    onClick: onClickHandler,
    ...props
  });
});
//# sourceMappingURL=dropdown-menu-helper.js.map

/***/ }),

/***/ "./node_modules/@wordpress/dataviews/build-module/filter-summary.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@wordpress/dataviews/build-module/filter-summary.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FilterSummary)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/chevron-down.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants */ "./node_modules/@wordpress/dataviews/build-module/constants.js");
/* harmony import */ var _lock_unlock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lock-unlock */ "./node_modules/@wordpress/dataviews/build-module/lock-unlock.js");
/* harmony import */ var _dropdown_menu_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dropdown-menu-helper */ "./node_modules/@wordpress/dataviews/build-module/dropdown-menu-helper.js");

/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */



const {
  DropdownMenuV2: DropdownMenu,
  DropdownMenuGroupV2: DropdownMenuGroup,
  DropdownMenuItemV2: DropdownMenuItem,
  DropdownMenuSeparatorV2: DropdownMenuSeparator,
  DropdownMenuItemLabelV2: DropdownMenuItemLabel,
  DropdownMenuItemHelpTextV2: DropdownMenuItemHelpText
} = (0,_lock_unlock__WEBPACK_IMPORTED_MODULE_4__.unlock)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.privateApis);
const FilterText = ({
  activeElement,
  filterInView,
  filter
}) => {
  if (activeElement === undefined) {
    return filter.name;
  }
  if (activeElement !== undefined && filterInView?.operator === _constants__WEBPACK_IMPORTED_MODULE_5__.OPERATOR_IN) {
    return (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)( /* translators: 1: Filter name. 2: Filter value. e.g.: "Author is Admin". */
    (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('%1$s is %2$s'), filter.name, activeElement.label);
  }
  if (activeElement !== undefined && filterInView?.operator === _constants__WEBPACK_IMPORTED_MODULE_5__.OPERATOR_NOT_IN) {
    return (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)( /* translators: 1: Filter name. 2: Filter value. e.g.: "Author is not Admin". */
    (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('%1$s is not %2$s'), filter.name, activeElement.label);
  }
  return (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)( /* translators: 1: Filter name e.g.: "Unknown status for Author". */
  (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Unknown status for %1$s'), filter.name);
};
function WithSeparators({
  children
}) {
  return _wordpress_element__WEBPACK_IMPORTED_MODULE_3__.Children.toArray(children).filter(Boolean).map((child, i) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    key: i
  }, i > 0 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenuSeparator, null), child));
}
function FilterSummary({
  filter,
  view,
  onChangeView
}) {
  const filterInView = view.filters.find(f => f.field === filter.field);
  const otherFilters = view.filters.filter(f => f.field !== filter.field);
  const activeElement = filter.elements.find(element => element.value === filterInView?.value);
  const activeOperator = filterInView?.operator || filter.operators[0];
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenu, {
    key: filter.field,
    trigger: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
      variant: "tertiary",
      size: "compact",
      label: filter.name
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(FilterText, {
      activeElement: activeElement,
      filterInView: filterInView,
      filter: filter
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Icon, {
      icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_6__["default"],
      style: {
        flexShrink: 0
      }
    }))
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(WithSeparators, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenuGroup, null, filter.elements.map(element => {
    const isActive = activeElement?.value === element.value;
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_dropdown_menu_helper__WEBPACK_IMPORTED_MODULE_7__.DropdownMenuRadioItemCustom, {
      key: element.value,
      name: `filter-summary-${filter.field}`,
      value: element.value,
      checked: isActive,
      onClick: () => onChangeView({
        ...view,
        page: 1,
        filters: [...otherFilters, {
          field: filter.field,
          operator: activeOperator,
          value: isActive ? undefined : element.value
        }]
      })
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenuItemLabel, null, element.label), !!element.description && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenuItemHelpText, null, element.description));
  })), filter.operators.length > 1 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenu, {
    trigger: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenuItem, {
      suffix: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
        "aria-hidden": "true"
      }, _constants__WEBPACK_IMPORTED_MODULE_5__.OPERATORS[activeOperator]?.label)
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenuItemLabel, null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Conditions')))
  }, Object.entries(_constants__WEBPACK_IMPORTED_MODULE_5__.OPERATORS).map(([operator, {
    label,
    key
  }]) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_dropdown_menu_helper__WEBPACK_IMPORTED_MODULE_7__.DropdownMenuRadioItemCustom, {
    key: key,
    name: `filter-summary-${filter.field}-conditions`,
    value: operator,
    checked: activeOperator === operator,
    onChange: e => {
      onChangeView({
        ...view,
        page: 1,
        filters: [...otherFilters, {
          field: filter.field,
          operator: e.target.value,
          value: filterInView?.value
        }]
      });
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenuItemLabel, null, label))))));
}
//# sourceMappingURL=filter-summary.js.map

/***/ }),

/***/ "./node_modules/@wordpress/dataviews/build-module/filters.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@wordpress/dataviews/build-module/filters.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _filter_summary__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./filter-summary */ "./node_modules/@wordpress/dataviews/build-module/filter-summary.js");
/* harmony import */ var _add_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-filter */ "./node_modules/@wordpress/dataviews/build-module/add-filter.js");
/* harmony import */ var _reset_filters__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reset-filters */ "./node_modules/@wordpress/dataviews/build-module/reset-filters.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./node_modules/@wordpress/dataviews/build-module/constants.js");

/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */




const sanitizeOperators = field => {
  let operators = field.filterBy?.operators;
  if (!operators || !Array.isArray(operators)) {
    operators = [_constants__WEBPACK_IMPORTED_MODULE_2__.OPERATOR_IN, _constants__WEBPACK_IMPORTED_MODULE_2__.OPERATOR_NOT_IN];
  }
  return operators.filter(operator => [_constants__WEBPACK_IMPORTED_MODULE_2__.OPERATOR_IN, _constants__WEBPACK_IMPORTED_MODULE_2__.OPERATOR_NOT_IN].includes(operator));
};
const Filters = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.memo)(function Filters({
  fields,
  view,
  onChangeView
}) {
  const filters = [];
  fields.forEach(field => {
    if (!field.type) {
      return;
    }
    const operators = sanitizeOperators(field);
    if (operators.length === 0) {
      return;
    }
    switch (field.type) {
      case _constants__WEBPACK_IMPORTED_MODULE_2__.ENUMERATION_TYPE:
        if (!field.elements?.length) {
          return;
        }
        filters.push({
          field: field.id,
          name: field.header,
          elements: field.elements,
          operators,
          isVisible: view.filters.some(f => f.field === field.id && [_constants__WEBPACK_IMPORTED_MODULE_2__.OPERATOR_IN, _constants__WEBPACK_IMPORTED_MODULE_2__.OPERATOR_NOT_IN].includes(f.operator))
        });
    }
  });
  const addFilter = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_add_filter__WEBPACK_IMPORTED_MODULE_3__["default"], {
    key: "add-filter",
    filters: filters,
    view: view,
    onChangeView: onChangeView
  });
  const filterComponents = [addFilter, ...filters.map(filter => {
    if (!filter.isVisible || view.type === _constants__WEBPACK_IMPORTED_MODULE_2__.LAYOUT_LIST) {
      return null;
    }
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_filter_summary__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: filter.field,
      filter: filter,
      view: view,
      onChangeView: onChangeView
    });
  })];
  if (filterComponents.length > 1 && view.type !== _constants__WEBPACK_IMPORTED_MODULE_2__.LAYOUT_LIST) {
    filterComponents.push((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_reset_filters__WEBPACK_IMPORTED_MODULE_5__["default"], {
      key: "reset-filters",
      view: view,
      onChangeView: onChangeView
    }));
  }
  return filterComponents;
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Filters);
//# sourceMappingURL=filters.js.map

/***/ }),

/***/ "./node_modules/@wordpress/dataviews/build-module/item-actions.js":
/*!************************************************************************!*\
  !*** ./node_modules/@wordpress/dataviews/build-module/item-actions.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ItemActions)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/more-vertical.js");
/* harmony import */ var _lock_unlock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lock-unlock */ "./node_modules/@wordpress/dataviews/build-module/lock-unlock.js");

/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */

const {
  DropdownMenuV2: DropdownMenu,
  DropdownMenuGroupV2: DropdownMenuGroup,
  DropdownMenuItemV2: DropdownMenuItem,
  DropdownMenuItemLabelV2: DropdownMenuItemLabel,
  kebabCase
} = (0,_lock_unlock__WEBPACK_IMPORTED_MODULE_4__.unlock)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.privateApis);
function ButtonTrigger({
  action,
  onClick
}) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    label: action.label,
    icon: action.icon,
    isDestructive: action.isDestructive,
    size: "compact",
    onClick: onClick
  });
}
function DropdownMenuItemTrigger({
  action,
  onClick
}) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenuItem, {
    onClick: onClick,
    hideOnClick: !action.RenderModal
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenuItemLabel, null, action.label));
}
function ActionWithModal({
  action,
  item,
  ActionTrigger
}) {
  const [isModalOpen, setIsModalOpen] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  const actionTriggerProps = {
    action,
    onClick: () => setIsModalOpen(true)
  };
  const {
    RenderModal,
    hideModalHeader
  } = action;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ActionTrigger, {
    ...actionTriggerProps
  }), isModalOpen && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Modal, {
    title: action.modalHeader || action.label,
    __experimentalHideHeader: !!hideModalHeader,
    onRequestClose: () => {
      setIsModalOpen(false);
    },
    overlayClassName: `dataviews-action-modal dataviews-action-modal__${kebabCase(action.id)}`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RenderModal, {
    items: [item],
    closeModal: () => setIsModalOpen(false)
  })));
}
function ActionsDropdownMenuGroup({
  actions,
  item
}) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenuGroup, null, actions.map(action => {
    if (!!action.RenderModal) {
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ActionWithModal, {
        key: action.id,
        action: action,
        item: item,
        ActionTrigger: DropdownMenuItemTrigger
      });
    }
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenuItemTrigger, {
      key: action.id,
      action: action,
      onClick: () => action.callback([item])
    });
  }));
}
function ItemActions({
  item,
  actions,
  isCompact
}) {
  const {
    primaryActions,
    secondaryActions
  } = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => {
    return actions.reduce((accumulator, action) => {
      // If an action is eligible for all items, doesn't need
      // to provide the `isEligible` function.
      if (action.isEligible && !action.isEligible(item)) {
        return accumulator;
      }
      if (action.isPrimary && !!action.icon) {
        accumulator.primaryActions.push(action);
      } else {
        accumulator.secondaryActions.push(action);
      }
      return accumulator;
    }, {
      primaryActions: [],
      secondaryActions: []
    });
  }, [actions, item]);
  if (isCompact) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(CompactItemActions, {
      item: item,
      primaryActions: primaryActions,
      secondaryActions: secondaryActions
    });
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalHStack, {
    spacing: 1,
    justify: "flex-end",
    style: {
      flexShrink: '0',
      width: 'auto'
    }
  }, !!primaryActions.length && primaryActions.map(action => {
    if (!!action.RenderModal) {
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ActionWithModal, {
        key: action.id,
        action: action,
        item: item,
        ActionTrigger: ButtonTrigger
      });
    }
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ButtonTrigger, {
      key: action.id,
      action: action,
      onClick: () => action.callback([item])
    });
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenu, {
    trigger: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
      size: "compact",
      icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_5__["default"],
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Actions'),
      disabled: !secondaryActions.length
    }),
    placement: "bottom-end"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ActionsDropdownMenuGroup, {
    actions: secondaryActions,
    item: item
  })));
}
function CompactItemActions({
  item,
  primaryActions,
  secondaryActions
}) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenu, {
    trigger: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
      size: "compact",
      icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_5__["default"],
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Actions'),
      disabled: !primaryActions.length && !secondaryActions.length
    }),
    placement: "bottom-end"
  }, !!primaryActions.length && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ActionsDropdownMenuGroup, {
    actions: primaryActions,
    item: item
  }), !!secondaryActions.length && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ActionsDropdownMenuGroup, {
    actions: secondaryActions,
    item: item
  }));
}
//# sourceMappingURL=item-actions.js.map

/***/ }),

/***/ "./node_modules/@wordpress/dataviews/build-module/lock-unlock.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@wordpress/dataviews/build-module/lock-unlock.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   lock: () => (/* binding */ lock),
/* harmony export */   unlock: () => (/* binding */ unlock)
/* harmony export */ });
/* harmony import */ var _wordpress_private_apis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/private-apis */ "@wordpress/private-apis");
/* harmony import */ var _wordpress_private_apis__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_private_apis__WEBPACK_IMPORTED_MODULE_0__);
/**
 * WordPress dependencies
 */

const {
  lock,
  unlock
} = (0,_wordpress_private_apis__WEBPACK_IMPORTED_MODULE_0__.__dangerousOptInToUnstableAPIsOnlyForCoreModules)('I know using unstable features means my theme or plugin will inevitably break in the next version of WordPress.', '@wordpress/dataviews');
//# sourceMappingURL=lock-unlock.js.map

/***/ }),

/***/ "./node_modules/@wordpress/dataviews/build-module/pagination.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@wordpress/dataviews/build-module/pagination.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/chevron-left.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/chevron-right.js");

/**
 * WordPress dependencies
 */




const Pagination = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.memo)(function Pagination({
  view,
  onChangeView,
  paginationInfo: {
    totalItems = 0,
    totalPages
  }
}) {
  if (!totalItems || !totalPages) {
    return null;
  }
  return !!totalItems && totalPages !== 1 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalHStack, {
    expanded: false,
    spacing: 6,
    justify: "end",
    className: "dataviews-pagination"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalHStack, {
    justify: "flex-start",
    expanded: false,
    spacing: 2
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createInterpolateElement)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.sprintf)(
  // translators: %s: Total number of pages.
  (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__._x)('Page <CurrenPageControl /> of %s', 'paging'), totalPages), {
    CurrenPageControl: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
      "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Current page'),
      value: view.page,
      options: Array.from(Array(totalPages)).map((_, i) => {
        const page = i + 1;
        return {
          value: page,
          label: page
        };
      }),
      onChange: newValue => {
        onChangeView({
          ...view,
          page: +newValue
        });
      },
      size: 'compact',
      __nextHasNoMarginBottom: true
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalHStack, {
    expanded: false,
    spacing: 1
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    onClick: () => onChangeView({
      ...view,
      page: view.page - 1
    }),
    disabled: view.page === 1,
    __experimentalIsFocusable: true,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Previous page'),
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__["default"],
    showTooltip: true,
    size: "compact",
    tooltipPosition: "top"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    onClick: () => onChangeView({
      ...view,
      page: view.page + 1
    }),
    disabled: view.page >= totalPages,
    __experimentalIsFocusable: true,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Next page'),
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_5__["default"],
    showTooltip: true,
    size: "compact",
    tooltipPosition: "top"
  })));
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Pagination);
//# sourceMappingURL=pagination.js.map

/***/ }),

/***/ "./node_modules/@wordpress/dataviews/build-module/reset-filters.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@wordpress/dataviews/build-module/reset-filters.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ResetFilter)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);

/**
 * WordPress dependencies
 */


function ResetFilter({
  view,
  onChangeView
}) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    disabled: view.search === '' && view.filters?.length === 0,
    __experimentalIsFocusable: true,
    size: "compact",
    variant: "tertiary",
    onClick: () => {
      onChangeView({
        ...view,
        page: 1,
        search: '',
        filters: []
      });
    }
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Reset filters'));
}
//# sourceMappingURL=reset-filters.js.map

/***/ }),

/***/ "./node_modules/@wordpress/dataviews/build-module/search.js":
/*!******************************************************************!*\
  !*** ./node_modules/@wordpress/dataviews/build-module/search.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__);

/**
 * WordPress dependencies
 */




const Search = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.memo)(function Search({
  label,
  view,
  onChangeView
}) {
  const [search, setSearch, debouncedSearch] = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__.useDebouncedInput)(view.search);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    setSearch(view.search);
  }, [view]);
  const onChangeViewRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useRef)(onChangeView);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    onChangeViewRef.current = onChangeView;
  }, [onChangeView]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    onChangeViewRef.current({
      ...view,
      page: 1,
      search: debouncedSearch
    });
  }, [debouncedSearch]);
  const searchLabel = label || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Filter list');
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SearchControl, {
    __nextHasNoMarginBottom: true,
    onChange: setSearch,
    value: search,
    label: searchLabel,
    placeholder: searchLabel,
    size: "compact"
  });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Search);
//# sourceMappingURL=search.js.map

/***/ }),

/***/ "./node_modules/@wordpress/dataviews/build-module/view-actions.js":
/*!************************************************************************!*\
  !*** ./node_modules/@wordpress/dataviews/build-module/view-actions.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/settings.js");
/* harmony import */ var _lock_unlock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lock-unlock */ "./node_modules/@wordpress/dataviews/build-module/lock-unlock.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants */ "./node_modules/@wordpress/dataviews/build-module/constants.js");

/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */


const {
  DropdownMenuV2: DropdownMenu,
  DropdownMenuGroupV2: DropdownMenuGroup,
  DropdownMenuItemV2: DropdownMenuItem,
  DropdownMenuRadioItemV2: DropdownMenuRadioItem,
  DropdownMenuCheckboxItemV2: DropdownMenuCheckboxItem,
  DropdownMenuItemLabelV2: DropdownMenuItemLabel
} = (0,_lock_unlock__WEBPACK_IMPORTED_MODULE_4__.unlock)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.privateApis);
function ViewTypeMenu({
  view,
  onChangeView,
  supportedLayouts
}) {
  let _availableViews = _constants__WEBPACK_IMPORTED_MODULE_5__.VIEW_LAYOUTS;
  if (supportedLayouts) {
    _availableViews = _availableViews.filter(_view => supportedLayouts.includes(_view.type));
  }
  if (_availableViews.length === 1) {
    return null;
  }
  const activeView = _availableViews.find(v => view.type === v.type);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenu, {
    trigger: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenuItem, {
      suffix: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
        "aria-hidden": "true"
      }, activeView.label)
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenuItemLabel, null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Layout')))
  }, _availableViews.map(availableView => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenuRadioItem, {
      key: availableView.type,
      value: availableView.type,
      name: "view-actions-available-view",
      checked: availableView.type === view.type,
      hideOnClick: true,
      onChange: e => {
        onChangeView({
          ...view,
          type: e.target.value
        });
      }
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenuItemLabel, null, availableView.label));
  }));
}
const PAGE_SIZE_VALUES = [10, 20, 50, 100];
function PageSizeMenu({
  view,
  onChangeView
}) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenu, {
    trigger: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenuItem, {
      suffix: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
        "aria-hidden": "true"
      }, view.perPage)
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenuItemLabel, null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Rows per page')))
  }, PAGE_SIZE_VALUES.map(size => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenuRadioItem, {
      key: size,
      value: size,
      name: "view-actions-page-size",
      checked: view.perPage === size,
      onChange: () => {
        onChangeView({
          ...view,
          // `e.target.value` holds the same value as `size` but as a string,
          // so we use `size` directly to avoid parsing to int.
          perPage: size,
          page: 1
        });
      }
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenuItemLabel, null, size));
  }));
}
function FieldsVisibilityMenu({
  view,
  onChangeView,
  fields
}) {
  const hidableFields = fields.filter(field => field.enableHiding !== false && field.id !== view.layout.mediaField);
  if (!hidableFields?.length) {
    return null;
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenu, {
    trigger: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenuItem, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenuItemLabel, null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Fields')))
  }, hidableFields?.map(field => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenuCheckboxItem, {
      key: field.id,
      value: field.id,
      checked: !view.hiddenFields?.includes(field.id),
      onChange: () => {
        onChangeView({
          ...view,
          hiddenFields: view.hiddenFields?.includes(field.id) ? view.hiddenFields.filter(id => id !== field.id) : [...(view.hiddenFields || []), field.id]
        });
      }
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenuItemLabel, null, field.header));
  }));
}
function SortMenu({
  fields,
  view,
  onChangeView
}) {
  const sortableFields = fields.filter(field => field.enableSorting !== false);
  if (!sortableFields?.length) {
    return null;
  }
  const currentSortedField = fields.find(field => field.id === view.sort?.field);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenu, {
    trigger: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenuItem, {
      suffix: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
        "aria-hidden": "true"
      }, currentSortedField?.header)
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenuItemLabel, null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Sort by')))
  }, sortableFields?.map(field => {
    const sortedDirection = view.sort?.direction;
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenu, {
      key: field.id,
      trigger: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenuItem, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenuItemLabel, null, field.header)),
      style: {
        minWidth: '220px'
      }
    }, Object.entries(_constants__WEBPACK_IMPORTED_MODULE_5__.SORTING_DIRECTIONS).map(([direction, info]) => {
      const isChecked = currentSortedField !== undefined && sortedDirection === direction && field.id === currentSortedField.id;
      const value = `${field.id}-${direction}`;
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenuRadioItem, {
        key: value
        // All sorting radio items share the same name, so that
        // selecting a sorting option automatically deselects the
        // previously selected one, even if it is displayed in
        // another submenu. The field and direction are passed via
        // the `value` prop.
        ,
        name: "view-actions-sorting",
        value: value,
        checked: isChecked,
        onChange: () => {
          onChangeView({
            ...view,
            sort: {
              field: field.id,
              direction
            }
          });
        }
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenuItemLabel, null, info.label));
    }));
  }));
}
const ViewActions = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.memo)(function ViewActions({
  fields,
  view,
  onChangeView,
  supportedLayouts
}) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenu, {
    trigger: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
      size: "compact",
      icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_6__["default"],
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('View options')
    })
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenuGroup, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ViewTypeMenu, {
    view: view,
    onChangeView: onChangeView,
    supportedLayouts: supportedLayouts
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(SortMenu, {
    fields: fields,
    view: view,
    onChangeView: onChangeView
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(FieldsVisibilityMenu, {
    fields: fields,
    view: view,
    onChangeView: onChangeView
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(PageSizeMenu, {
    view: view,
    onChangeView: onChangeView
  })));
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ViewActions);
//# sourceMappingURL=view-actions.js.map

/***/ }),

/***/ "./node_modules/@wordpress/dataviews/build-module/view-grid.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@wordpress/dataviews/build-module/view-grid.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ViewGrid)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _item_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./item-actions */ "./node_modules/@wordpress/dataviews/build-module/item-actions.js");

/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */

function ViewGrid({
  data,
  fields,
  view,
  actions,
  getItemId,
  deferredRendering
}) {
  const mediaField = fields.find(field => field.id === view.layout.mediaField);
  const primaryField = fields.find(field => field.id === view.layout.primaryField);
  const visibleFields = fields.filter(field => !view.hiddenFields.includes(field.id) && ![view.layout.mediaField, view.layout.primaryField].includes(field.id));
  const shownData = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__.useAsyncList)(data, {
    step: 3
  });
  const usedData = deferredRendering ? shownData : data;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalGrid, {
    gap: 6,
    columns: 2,
    alignment: "top",
    className: "dataviews-view-grid"
  }, usedData.map(item => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalVStack, {
    spacing: 0,
    key: getItemId(item),
    className: "dataviews-view-grid__card"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "dataviews-view-grid__media"
  }, mediaField?.render({
    item
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalHStack, {
    justify: "space-between",
    className: "dataviews-view-grid__title-actions"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalHStack, {
    className: "dataviews-view-grid__primary-field"
  }, primaryField?.render({
    item
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_item_actions__WEBPACK_IMPORTED_MODULE_3__["default"], {
    item: item,
    actions: actions,
    isCompact: true
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalVStack, {
    className: "dataviews-view-grid__fields",
    spacing: 3
  }, visibleFields.map(field => {
    const renderedValue = field.render({
      item
    });
    if (!renderedValue) {
      return null;
    }
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalVStack, {
      className: "dataviews-view-grid__field",
      key: field.id,
      spacing: 1
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Tooltip, {
      text: field.header,
      placement: "left"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "dataviews-view-grid__field-value"
    }, renderedValue)));
  })))));
}
//# sourceMappingURL=view-grid.js.map

/***/ }),

/***/ "./node_modules/@wordpress/dataviews/build-module/view-list.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@wordpress/dataviews/build-module/view-list.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ViewList)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/keycodes */ "@wordpress/keycodes");
/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_keycodes__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/info.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);

/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */





function ViewList({
  view,
  fields,
  data,
  isLoading,
  getItemId,
  onSelectionChange,
  onDetailsChange,
  selection,
  deferredRendering
}) {
  const shownData = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__.useAsyncList)(data, {
    step: 3
  });
  const usedData = deferredRendering ? shownData : data;
  const mediaField = fields.find(field => field.id === view.layout.mediaField);
  const primaryField = fields.find(field => field.id === view.layout.primaryField);
  const visibleFields = fields.filter(field => !view.hiddenFields.includes(field.id) && ![view.layout.primaryField, view.layout.mediaField].includes(field.id));
  const onEnter = item => event => {
    const {
      keyCode
    } = event;
    if ([_wordpress_keycodes__WEBPACK_IMPORTED_MODULE_4__.ENTER, _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_4__.SPACE].includes(keyCode)) {
      onSelectionChange([item]);
    }
  };
  const hasData = usedData?.length;
  if (!hasData) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()({
        'dataviews-loading': isLoading,
        'dataviews-no-results': !hasData && !isLoading
      })
    }, !hasData && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, isLoading ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Loading…') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('No results')));
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
    className: "dataviews-view-list"
  }, usedData.map(item => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
      key: getItemId(item),
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()({
        'is-selected': selection.includes(item.id)
      })
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalHStack, {
      className: "dataviews-view-list__item-wrapper"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      role: "button",
      tabIndex: 0,
      "aria-pressed": selection.includes(item.id),
      onKeyDown: onEnter(item),
      className: "dataviews-view-list__item",
      onClick: () => onSelectionChange([item])
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalHStack, {
      spacing: 3,
      justify: "start"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "dataviews-view-list__media-wrapper"
    }, mediaField?.render({
      item
    }) || (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "dataviews-view-list__media-placeholder"
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalVStack, {
      spacing: 1
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "dataviews-view-list__primary-field"
    }, primaryField?.render({
      item
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "dataviews-view-list__fields"
    }, visibleFields.map(field => {
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
        key: field.id,
        className: "dataviews-view-list__field"
      }, field.render({
        item
      }));
    }))))), onDetailsChange && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      className: "dataviews-view-list__details-button",
      onClick: () => onDetailsChange([item]),
      icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_6__["default"],
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('View details'),
      size: "compact"
    })));
  }));
}
//# sourceMappingURL=view-list.js.map

/***/ }),

/***/ "./node_modules/@wordpress/dataviews/build-module/view-table.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@wordpress/dataviews/build-module/view-table.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/unseen.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/funnel.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lock_unlock__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lock-unlock */ "./node_modules/@wordpress/dataviews/build-module/lock-unlock.js");
/* harmony import */ var _item_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./item-actions */ "./node_modules/@wordpress/dataviews/build-module/item-actions.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./constants */ "./node_modules/@wordpress/dataviews/build-module/constants.js");
/* harmony import */ var _dropdown_menu_helper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dropdown-menu-helper */ "./node_modules/@wordpress/dataviews/build-module/dropdown-menu-helper.js");

/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */




const {
  DropdownMenuV2: DropdownMenu,
  DropdownMenuGroupV2: DropdownMenuGroup,
  DropdownMenuItemV2: DropdownMenuItem,
  DropdownMenuRadioItemV2: DropdownMenuRadioItem,
  DropdownMenuSeparatorV2: DropdownMenuSeparator,
  DropdownMenuItemLabelV2: DropdownMenuItemLabel,
  DropdownMenuItemHelpTextV2: DropdownMenuItemHelpText
} = (0,_lock_unlock__WEBPACK_IMPORTED_MODULE_6__.unlock)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.privateApis);
const sortArrows = {
  asc: '↑',
  desc: '↓'
};
const sanitizeOperators = field => {
  let operators = field.filterBy?.operators;
  if (!operators || !Array.isArray(operators)) {
    operators = Object.keys(_constants__WEBPACK_IMPORTED_MODULE_7__.OPERATORS);
  }
  return operators.filter(operator => Object.keys(_constants__WEBPACK_IMPORTED_MODULE_7__.OPERATORS).includes(operator));
};
const HeaderMenu = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.forwardRef)(function HeaderMenu({
  field,
  view,
  onChangeView,
  onHide
}, ref) {
  const isHidable = field.enableHiding !== false;
  const isSortable = field.enableSorting !== false;
  const isSorted = view.sort?.field === field.id;
  let filter, filterInView, activeElement, activeOperator, otherFilters;
  const operators = sanitizeOperators(field);
  if (field.type === _constants__WEBPACK_IMPORTED_MODULE_7__.ENUMERATION_TYPE && operators.length > 0) {
    filter = {
      field: field.id,
      operators,
      elements: field.elements || []
    };
    filterInView = view.filters.find(f => f.field === filter.field);
    otherFilters = view.filters.filter(f => f.field !== filter.field);
    activeElement = filter.elements.find(element => element.value === filterInView?.value);
    activeOperator = filterInView?.operator || filter.operators[0];
  }
  const isFilterable = !!filter;
  if (!isSortable && !isHidable && !isFilterable) {
    return field.header;
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenu, {
    align: "start",
    trigger: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
      size: "compact",
      className: "dataviews-view-table-header-button",
      ref: ref,
      variant: "tertiary"
    }, field.header, isSorted && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      "aria-hidden": "true"
    }, isSorted && sortArrows[view.sort.direction])),
    style: {
      minWidth: '240px'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(WithSeparators, null, isSortable && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenuGroup, null, Object.entries(_constants__WEBPACK_IMPORTED_MODULE_7__.SORTING_DIRECTIONS).map(([direction, info]) => {
    const isChecked = isSorted && view.sort.direction === direction;
    const value = `${field.id}-${direction}`;
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenuRadioItem, {
      key: value
      // All sorting radio items share the same name, so that
      // selecting a sorting option automatically deselects the
      // previously selected one, even if it is displayed in
      // another submenu. The field and direction are passed via
      // the `value` prop.
      ,
      name: "view-table-sorting",
      value: value,
      checked: isChecked,
      onChange: () => {
        onChangeView({
          ...view,
          sort: {
            field: field.id,
            direction
          }
        });
      }
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenuItemLabel, null, info.label));
  })), isHidable && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenuItem, {
    prefix: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Icon, {
      icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_8__["default"]
    }),
    onClick: () => {
      onHide(field);
      onChangeView({
        ...view,
        hiddenFields: view.hiddenFields.concat(field.id)
      });
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenuItemLabel, null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Hide'))), isFilterable && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenuGroup, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenu, {
    key: filter.field,
    trigger: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenuItem, {
      prefix: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Icon, {
        icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_9__["default"]
      }),
      suffix: activeElement && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
        "aria-hidden": "true"
      }, activeOperator in _constants__WEBPACK_IMPORTED_MODULE_7__.OPERATORS && `${_constants__WEBPACK_IMPORTED_MODULE_7__.OPERATORS[activeOperator].label} `, activeElement?.label)
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenuItemLabel, null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Filter by')))
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(WithSeparators, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenuGroup, null, filter.elements.map(element => {
    const isActive = activeElement?.value === element.value;
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_dropdown_menu_helper__WEBPACK_IMPORTED_MODULE_10__.DropdownMenuRadioItemCustom, {
      key: element.value,
      name: `view-table-${filter.field}`,
      value: element.value,
      checked: isActive,
      onClick: () => {
        onChangeView({
          ...view,
          page: 1,
          filters: [...otherFilters, {
            field: filter.field,
            operator: activeOperator,
            value: isActive ? undefined : element.value
          }]
        });
      }
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenuItemLabel, null, element.label), !!element.description && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenuItemHelpText, null, element.description));
  })), filter.operators.length > 1 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenu, {
    trigger: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenuItem, {
      suffix: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
        "aria-hidden": "true"
      }, _constants__WEBPACK_IMPORTED_MODULE_7__.OPERATORS[activeOperator]?.label)
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenuItemLabel, null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Conditions')))
  }, Object.entries(_constants__WEBPACK_IMPORTED_MODULE_7__.OPERATORS).map(([operator, {
    label,
    key
  }]) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenuRadioItem, {
    key: key,
    name: `view-table-${filter.field}-conditions`,
    value: operator,
    checked: activeOperator === operator,
    onChange: e => onChangeView({
      ...view,
      page: 1,
      filters: [...otherFilters, {
        field: filter.field,
        operator: e.target.value,
        value: filterInView?.value
      }]
    })
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenuItemLabel, null, label)))))))));
});
function WithSeparators({
  children
}) {
  return _wordpress_element__WEBPACK_IMPORTED_MODULE_5__.Children.toArray(children).filter(Boolean).map((child, i) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    key: i
  }, i > 0 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DropdownMenuSeparator, null), child));
}
function BulkSelectionCheckbox({
  selection,
  onSelectionChange,
  data
}) {
  const areAllSelected = selection.length === data.length;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.CheckboxControl, {
    className: "dataviews-view-table-selection-checkbox",
    __nextHasNoMarginBottom: true,
    checked: areAllSelected,
    indeterminate: !areAllSelected && selection.length,
    onChange: () => {
      if (areAllSelected) {
        onSelectionChange([]);
      } else {
        onSelectionChange(data);
      }
    },
    label: areAllSelected ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Deselect all') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Select all')
  });
}
function SingleSelectionCheckbox({
  selection,
  onSelectionChange,
  item,
  data,
  getItemId,
  primaryField
}) {
  const id = getItemId(item);
  const isSelected = selection.includes(id);
  let selectionLabel;
  if (primaryField?.getValue && item) {
    // eslint-disable-next-line @wordpress/valid-sprintf
    selectionLabel = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)( /* translators: %s: item title. */
    isSelected ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Deselect item: %s') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Select item: %s'), primaryField.getValue({
      item
    }));
  } else {
    selectionLabel = isSelected ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Select a new item') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Deselect item');
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.CheckboxControl, {
    className: "dataviews-view-table-selection-checkbox",
    __nextHasNoMarginBottom: true,
    checked: isSelected,
    label: selectionLabel,
    onChange: () => {
      if (!isSelected) {
        onSelectionChange(data.filter(_item => {
          const itemId = getItemId?.(_item);
          return itemId === id || selection.includes(itemId);
        }));
      } else {
        onSelectionChange(data.filter(_item => {
          const itemId = getItemId?.(_item);
          return itemId !== id && selection.includes(itemId);
        }));
      }
    }
  });
}
function ViewTable({
  view,
  onChangeView,
  fields,
  actions,
  data,
  getItemId,
  isLoading = false,
  deferredRendering,
  selection,
  onSelectionChange
}) {
  const hasBulkActions = actions?.some(action => action.supportsBulk);
  const headerMenuRefs = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.useRef)(new Map());
  const headerMenuToFocusRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.useRef)();
  const [nextHeaderMenuToFocus, setNextHeaderMenuToFocus] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.useState)();
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.useEffect)(() => {
    if (headerMenuToFocusRef.current) {
      headerMenuToFocusRef.current.focus();
      headerMenuToFocusRef.current = undefined;
    }
  });
  const asyncData = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__.useAsyncList)(data);
  const tableNoticeId = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.useId)();
  if (nextHeaderMenuToFocus) {
    // If we need to force focus, we short-circuit rendering here
    // to prevent any additional work while we handle that.
    // Clearing out the focus directive is necessary to make sure
    // future renders don't cause unexpected focus jumps.
    headerMenuToFocusRef.current = nextHeaderMenuToFocus;
    setNextHeaderMenuToFocus();
    return;
  }
  const onHide = field => {
    const hidden = headerMenuRefs.current.get(field.id);
    const fallback = headerMenuRefs.current.get(hidden.fallback);
    setNextHeaderMenuToFocus(fallback?.node);
  };
  const visibleFields = fields.filter(field => !view.hiddenFields.includes(field.id) && ![view.layout.mediaField].includes(field.id));
  const usedData = deferredRendering ? asyncData : data;
  const hasData = !!usedData?.length;
  const sortValues = {
    asc: 'ascending',
    desc: 'descending'
  };
  const primaryField = fields.find(field => field.id === view.layout.primaryField);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "dataviews-view-table-wrapper"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("table", {
    className: "dataviews-view-table",
    "aria-busy": isLoading,
    "aria-describedby": tableNoticeId
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("thead", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", {
    className: "dataviews-view-table__row"
  }, hasBulkActions && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
    className: "dataviews-view-table__checkbox-column",
    style: {
      width: 20,
      minWidth: 20
    },
    "data-field-id": "selection",
    scope: "col"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(BulkSelectionCheckbox, {
    selection: selection,
    onSelectionChange: onSelectionChange,
    data: data
  })), visibleFields.map((field, index) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
    key: field.id,
    style: {
      width: field.width || undefined,
      minWidth: field.minWidth || undefined,
      maxWidth: field.maxWidth || undefined
    },
    "data-field-id": field.id,
    "aria-sort": view.sort?.field === field.id && sortValues[view.sort.direction],
    scope: "col"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(HeaderMenu, {
    ref: node => {
      if (node) {
        headerMenuRefs.current.set(field.id, {
          node,
          fallback: visibleFields[index > 0 ? index - 1 : 1]?.id
        });
      } else {
        headerMenuRefs.current.delete(field.id);
      }
    },
    field: field,
    view: view,
    onChangeView: onChangeView,
    onHide: onHide
  }))), !!actions?.length && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
    "data-field-id": "actions",
    className: "dataviews-view-table__actions-column"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "dataviews-view-table-header"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Actions'))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tbody", null, hasData && usedData.map((item, index) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", {
    key: getItemId(item),
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('dataviews-view-table__row', {
      'is-selected': selection.includes(getItemId(item) || index)
    })
  }, hasBulkActions && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
    className: "dataviews-view-table__checkbox-column",
    style: {
      width: 20,
      minWidth: 20
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "dataviews-view-table__cell-content-wrapper"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(SingleSelectionCheckbox, {
    id: getItemId(item) || index,
    item: item,
    selection: selection,
    onSelectionChange: onSelectionChange,
    getItemId: getItemId,
    data: data,
    primaryField: primaryField
  }))), visibleFields.map(field => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
    key: field.id,
    style: {
      width: field.width || undefined,
      minWidth: field.minWidth || undefined,
      maxWidth: field.maxWidth || undefined
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('dataviews-view-table__cell-content-wrapper', {
      'dataviews-view-table__primary-field': primaryField?.id === field.id
    })
  }, field.render({
    item
  })))), !!actions?.length && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
    className: "dataviews-view-table__actions-column"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_item_actions__WEBPACK_IMPORTED_MODULE_11__["default"], {
    item: item,
    actions: actions
  })))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()({
      'dataviews-loading': isLoading,
      'dataviews-no-results': !hasData && !isLoading
    }),
    id: tableNoticeId
  }, !hasData && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, isLoading ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Loading…') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('No results'))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ViewTable);
//# sourceMappingURL=view-table.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/block-table.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/block-table.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);

/**
 * WordPress dependencies
 */

const blockTable = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM5 4.5h14c.3 0 .5.2.5.5v3.5h-15V5c0-.3.2-.5.5-.5zm8 5.5h6.5v3.5H13V10zm-1.5 3.5h-7V10h7v3.5zm-7 5.5v-4h7v4.5H5c-.3 0-.5-.2-.5-.5zm14.5.5h-6V15h6.5v4c0 .3-.2.5-.5.5z"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (blockTable);
//# sourceMappingURL=block-table.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/category.js":
/*!************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/category.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);

/**
 * WordPress dependencies
 */

const category = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M6 5.5h3a.5.5 0 01.5.5v3a.5.5 0 01-.5.5H6a.5.5 0 01-.5-.5V6a.5.5 0 01.5-.5zM4 6a2 2 0 012-2h3a2 2 0 012 2v3a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm11-.5h3a.5.5 0 01.5.5v3a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5V6a.5.5 0 01.5-.5zM13 6a2 2 0 012-2h3a2 2 0 012 2v3a2 2 0 01-2 2h-3a2 2 0 01-2-2V6zm5 8.5h-3a.5.5 0 00-.5.5v3a.5.5 0 00.5.5h3a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5zM15 13a2 2 0 00-2 2v3a2 2 0 002 2h3a2 2 0 002-2v-3a2 2 0 00-2-2h-3zm-9 1.5h3a.5.5 0 01.5.5v3a.5.5 0 01-.5.5H6a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5zM4 15a2 2 0 012-2h3a2 2 0 012 2v3a2 2 0 01-2 2H6a2 2 0 01-2-2v-3z",
  fillRule: "evenodd",
  clipRule: "evenodd"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (category);
//# sourceMappingURL=category.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/chevron-down.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/chevron-down.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);

/**
 * WordPress dependencies
 */

const chevronDown = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M17.5 11.6L12 16l-5.5-4.4.9-1.2L12 14l4.5-3.6 1 1.2z"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (chevronDown);
//# sourceMappingURL=chevron-down.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/chevron-left.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/chevron-left.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);

/**
 * WordPress dependencies
 */

const chevronLeft = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M14.6 7l-1.2-1L8 12l5.4 6 1.2-1-4.6-5z"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (chevronLeft);
//# sourceMappingURL=chevron-left.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/chevron-right.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/chevron-right.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);

/**
 * WordPress dependencies
 */

const chevronRight = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M10.6 6L9.4 7l4.6 5-4.6 5 1.2 1 5.4-6z"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (chevronRight);
//# sourceMappingURL=chevron-right.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/format-list-bullets-rtl.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/format-list-bullets-rtl.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);

/**
 * WordPress dependencies
 */

const formatListBulletsRTL = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M4 8.8h8.9V7.2H4v1.6zm0 7h8.9v-1.5H4v1.5zM18 13c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatListBulletsRTL);
//# sourceMappingURL=format-list-bullets-rtl.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/format-list-bullets.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/format-list-bullets.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);

/**
 * WordPress dependencies
 */

const formatListBullets = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M11.1 15.8H20v-1.5h-8.9v1.5zm0-8.6v1.5H20V7.2h-8.9zM6 13c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-7c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatListBullets);
//# sourceMappingURL=format-list-bullets.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/funnel.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/funnel.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);

/**
 * WordPress dependencies
 */

const funnel = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M10 17.5H14V16H10V17.5ZM6 6V7.5H18V6H6ZM8 12.5H16V11H8V12.5Z"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (funnel);
//# sourceMappingURL=funnel.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/info.js":
/*!********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/info.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);

/**
 * WordPress dependencies
 */

const info = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M12 3.2c-4.8 0-8.8 3.9-8.8 8.8 0 4.8 3.9 8.8 8.8 8.8 4.8 0 8.8-3.9 8.8-8.8 0-4.8-4-8.8-8.8-8.8zm0 16c-4 0-7.2-3.3-7.2-7.2C4.8 8 8 4.8 12 4.8s7.2 3.3 7.2 7.2c0 4-3.2 7.2-7.2 7.2zM11 17h2v-6h-2v6zm0-8h2V7h-2v2z"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (info);
//# sourceMappingURL=info.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/more-vertical.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/more-vertical.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);

/**
 * WordPress dependencies
 */

const moreVertical = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M13 19h-2v-2h2v2zm0-6h-2v-2h2v2zm0-6h-2V5h2v2z"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (moreVertical);
//# sourceMappingURL=more-vertical.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/settings.js":
/*!************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/settings.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);

/**
 * WordPress dependencies
 */

const settings = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "m19 7.5h-7.628c-.3089-.87389-1.1423-1.5-2.122-1.5-.97966 0-1.81309.62611-2.12197 1.5h-2.12803v1.5h2.12803c.30888.87389 1.14231 1.5 2.12197 1.5.9797 0 1.8131-.62611 2.122-1.5h7.628z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "m19 15h-2.128c-.3089-.8739-1.1423-1.5-2.122-1.5s-1.8131.6261-2.122 1.5h-7.628v1.5h7.628c.3089.8739 1.1423 1.5 2.122 1.5s1.8131-.6261 2.122-1.5h2.128z"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (settings);
//# sourceMappingURL=settings.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/styles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/styles.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   styles: () => (/* binding */ styles)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);

/**
 * WordPress dependencies
 */

const styles = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M12 4c-4.4 0-8 3.6-8 8v.1c0 4.1 3.2 7.5 7.2 7.9h.8c4.4 0 8-3.6 8-8s-3.6-8-8-8zm0 15V5c3.9 0 7 3.1 7 7s-3.1 7-7 7z"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);
//# sourceMappingURL=styles.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/unseen.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/unseen.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);

/**
 * WordPress dependencies
 */

const unseen = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M4.67 10.664s-2.09 1.11-2.917 1.582l.494.87 1.608-.914.002.002c.343.502.86 1.17 1.563 1.84.348.33.742.663 1.185.976L5.57 16.744l.858.515 1.02-1.701a9.1 9.1 0 0 0 4.051 1.18V19h1v-2.263a9.1 9.1 0 0 0 4.05-1.18l1.021 1.7.858-.514-1.034-1.723c.442-.313.837-.646 1.184-.977.703-.669 1.22-1.337 1.563-1.839l.002-.003 1.61.914.493-.87c-1.75-.994-2.918-1.58-2.918-1.58l-.003.005a8.29 8.29 0 0 1-.422.689 10.097 10.097 0 0 1-1.36 1.598c-1.218 1.16-3.042 2.293-5.544 2.293-2.503 0-4.327-1.132-5.546-2.293a10.099 10.099 0 0 1-1.359-1.599 8.267 8.267 0 0 1-.422-.689l-.003-.005Z"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (unseen);
//# sourceMappingURL=unseen.js.map

/***/ }),

/***/ "./src/BlockStylesManager.js":
/*!***********************************!*\
  !*** ./src/BlockStylesManager.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/styles.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _codeamp_block_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @codeamp/block-components */ "./node_modules/@codeamp/block-components/dist/index.js");
/* harmony import */ var _codeamp_block_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_codeamp_block_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./store */ "./src/store/index.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");











/**
 * Mount the main Block Styles Manager Plugin Component
 * @returns {Component} BlockStylesManager
 */
const BlockStylesManager = props => {
  const {
    attributes,
    setAttributes,
    name
  } = props;
  const [blockStyles, setBlockStyles] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const {
    records,
    hasResolved
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.useSelect)(select => {
    return {
      records: select(_store__WEBPACK_IMPORTED_MODULE_7__.store).getBlockStyles(),
      hasResolved: select(_store__WEBPACK_IMPORTED_MODULE_7__.store).hasFinishedResolution("getBlockStyles")
    };
  }, []);
  const {
    closePublishSidebar,
    openGeneralSidebar
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.useDispatch)("core/edit-post");
  const saveStylesInAttribute = slugs => {
    setAttributes({
      wpdevBlockStyles: slugs
    });
  };

  /**
   * Closes the publish sidebar and opens the Yoast sidebar.
   *
   * @returns {void}
   */
  const onClick = () => {
    closePublishSidebar();
    openGeneralSidebar("wpdev-block-styles-manager/wpdev-block-styles-manager");
  };

  // Need to move this out so it loads on the first render.
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (hasResolved && records.length > 0) {
      setBlockStyles(records.filter(record => record.block_types.includes(name)));
    }
  }, [records, hasResolved]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, {
    group: "advanced"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, {
    header: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("Block Styles")
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_codeamp_block_components__WEBPACK_IMPORTED_MODULE_6__.MultiSelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("Add Block Styles"),
    value: attributes.wpdevBlockStyles,
    options: blockStyles.map(blockStyle => ({
      label: blockStyle.title,
      value: blockStyle.slug
    })),
    multiple: true,
    onChange: saveStylesInAttribute
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_9__["default"],
    onClick: onClick,
    "aria-haspopup": "dialog",
    variant: "secondary",
    describedBy: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("Manage Block Styles")
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("Manage Block Styles"))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlockStylesManager);

/***/ }),

/***/ "./src/BlockStylesManagerPlugin.js":
/*!*****************************************!*\
  !*** ./src/BlockStylesManagerPlugin.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_edit_post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/edit-post */ "@wordpress/edit-post");
/* harmony import */ var _wordpress_edit_post__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_edit_post__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./store */ "./src/store/index.js");
/* harmony import */ var _ViewBlockStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ViewBlockStyles */ "./src/ViewBlockStyles.js");
/* harmony import */ var _EditBlockStyle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./EditBlockStyle */ "./src/EditBlockStyle.js");









const BlockStylesManagerPlugin = () => {
  const [modalView, setModalView] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)("list");
  const [currentBlockStyle, setCurrentBlockStyle] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(null);
  const [blockStyles, setBlockStyles] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)([]);
  const [allBlockStyles, setAllBlockStyles] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)([]);
  const {
    records,
    hasResolved
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.useSelect)(select => {
    return {
      records: select(_store__WEBPACK_IMPORTED_MODULE_6__.store).getBlockStyles(),
      hasResolved: select(_store__WEBPACK_IMPORTED_MODULE_6__.store).hasFinishedResolution("getBlockStyles")
    };
  }, []);
  const newBlockStyle = {
    id: 0,
    title: "New Block Style",
    slug: "new-block-style",
    content: "selector {\n  opacity: 0.5;\n}",
    block_types: ["core/group"]
  };
  const launchEditForm = id => {
    let blockStyle = allBlockStyles.find(blockStyle => blockStyle.id === id);
    if (!blockStyle) {
      return;
    }
    setCurrentBlockStyle({
      ...blockStyle,
      title: blockStyle.title,
      content: blockStyle.content.replaceAll(`.${blockStyle.slug}`, "selector")
    });
    setModalView("edit");
  };
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    if (hasResolved && records.length > 0) {
      var _window$parent$docume;
      setAllBlockStyles(records);
      setBlockStyles(records.filter(record => record.block_types.includes(name)));
      // Add records CSS to iframe
      let css = "";
      records.forEach(record => {
        css += record.content + "\n";
      });
      const style = document.createElement("style");
      style.innerHTML = css;
      style.id = "wpdev-block-styles";
      let destination = (_window$parent$docume = window.parent.document.querySelector('iframe[name="editor-canvas"]')?.document.head) !== null && _window$parent$docume !== void 0 ? _window$parent$docume : document.head;
      destination.querySelector("#wpdev-block-styles")?.remove();
      destination.appendChild(style);
    }
  }, [records, hasResolved]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_edit_post__WEBPACK_IMPORTED_MODULE_1__.PluginSidebarMoreMenuItem, {
    target: "wpdev-block-styles-manager"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Block Styles Manager")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_edit_post__WEBPACK_IMPORTED_MODULE_1__.PluginSidebar, {
    name: "wpdev-block-styles-manager",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Block Styles Manager")
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null, "list" === modalView && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Flex, {
    gap: "3",
    direction: "column"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
    onClick: () => {
      console.log("clicked");
      setModalView("new");
    },
    variant: "primary"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Add New Block Style")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_ViewBlockStyles__WEBPACK_IMPORTED_MODULE_7__["default"], {
    launchEditForm: launchEditForm
  }))), modalView === "edit" && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_EditBlockStyle__WEBPACK_IMPORTED_MODULE_8__["default"], {
    attributes: currentBlockStyle,
    closeForm: () => {
      setModalView("list");
    }
  })), modalView === "new" && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_EditBlockStyle__WEBPACK_IMPORTED_MODULE_8__["default"], {
    attributes: newBlockStyle,
    closeForm: () => {
      setModalView("list");
    }
  }))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlockStylesManagerPlugin);

/***/ }),

/***/ "./src/EditBlockStyle.js":
/*!*******************************!*\
  !*** ./src/EditBlockStyle.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _codeamp_block_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @codeamp/block-components */ "./node_modules/@codeamp/block-components/dist/index.js");
/* harmony import */ var _codeamp_block_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_codeamp_block_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/chevron-left.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./store */ "./src/store/index.js");








function EditBlockStyle({
  attributes,
  closeForm
}) {
  var _blockStyle$title, _blockStyle$slug, _blockStyle$block_typ2, _blockStyle$content;
  const [blockStyle, setBlockStyle] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)(attributes);
  const [blockTypes, setBlockTypes] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)(wp.blocks.getBlockTypes());
  const {
    saveBlockStyle
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useDispatch)(_store__WEBPACK_IMPORTED_MODULE_6__.store);
  const saveBlockStyleHandler = async () => {
    var _blockStyle$block_typ;
    const args = {
      title: blockStyle.title,
      content: blockStyle.content.replaceAll("selector", `.${blockStyle.slug}`),
      slug: blockStyle.slug,
      block_types: (_blockStyle$block_typ = blockStyle.block_types) !== null && _blockStyle$block_typ !== void 0 ? _blockStyle$block_typ : []
    };
    console.log(args);
    if (blockStyle.id) {
      args.id = blockStyle.id;
    }
    const savedRecord = saveBlockStyle(args).then(res => {
      console.log("savedRecord", res);
    });
    if (savedRecord) {
      closeForm();
    }
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Flex, {
    gap: "3",
    direction: "column"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    icon: true,
    onClick: closeForm,
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_7__["default"]
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Go Back")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Name"),
    value: (_blockStyle$title = blockStyle.title) !== null && _blockStyle$title !== void 0 ? _blockStyle$title : "",
    onChange: title => setBlockStyle({
      ...blockStyle,
      title
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Class"),
    value: (_blockStyle$slug = blockStyle.slug) !== null && _blockStyle$slug !== void 0 ? _blockStyle$slug : "",
    readOnly: blockStyle.id !== 0,
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("This is the class name that will be added to the block."),
    onChange: slug => setBlockStyle({
      ...blockStyle,
      slug
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_codeamp_block_components__WEBPACK_IMPORTED_MODULE_5__.MultiSelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Supported Block Types"),
    value: (_blockStyle$block_typ2 = blockStyle.block_types) !== null && _blockStyle$block_typ2 !== void 0 ? _blockStyle$block_typ2 : [],
    options: blockTypes.map(blockType => ({
      label: blockType.title,
      value: blockType.name
    })),
    multiple: true,
    onChange: block_types => setBlockStyle({
      ...blockStyle,
      block_types: block_types
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextareaControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("CSS"),
    value: (_blockStyle$content = blockStyle.content) !== null && _blockStyle$content !== void 0 ? _blockStyle$content : "",
    spellCheck: false,
    rows: 10,
    onChange: content => setBlockStyle({
      ...blockStyle,
      content
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    variant: "primary",
    onClick: saveBlockStyleHandler
  }, blockStyle.id !== 0 ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Save Changes") : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Save Block Style")));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditBlockStyle);

/***/ }),

/***/ "./src/ViewBlockStyles.js":
/*!********************************!*\
  !*** ./src/ViewBlockStyles.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/html-entities */ "@wordpress/html-entities");
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_dataviews__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/dataviews */ "./node_modules/@wordpress/dataviews/build-module/dataviews.js");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./store */ "./src/store/index.js");







function ViewBlockStyles({
  launchEditForm
}) {
  const {
    records,
    hasResolved
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useSelect)(select => {
    return {
      records: select(_store__WEBPACK_IMPORTED_MODULE_5__.store).getBlockStyles(),
      hasResolved: select(_store__WEBPACK_IMPORTED_MODULE_5__.store).hasFinishedResolution("getBlockStyles")
    };
  }, []);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, hasResolved && records.length > 0 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_dataviews__WEBPACK_IMPORTED_MODULE_6__["default"], {
    data: records,
    getItemId: item => {
      return item.id;
    },
    onChangeView: function noRefCheck() {},
    fields: [{
      enableHiding: false,
      getValue: function noRefCheck() {},
      render: ({
        item
      }) => {
        return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
          variant: "link",
          onClick: () => launchEditForm(item.id)
        }, (0,_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_2__.decodeEntities)(item.title) || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("(no title)")));
      },
      header: "Title",
      id: "title",
      maxWidth: 400
    }, {
      enableHiding: false,
      getValue: function noRefCheck() {},
      render: ({
        item
      }) => {
        return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("code", null, `.${item.slug}`);
      },
      header: "Class",
      id: "slug",
      maxWidth: 400
    }, {
      enableHiding: false,
      getValue: function noRefCheck() {},
      render: ({
        item
      }) => {
        return item.block_types?.map((blockType, i) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("code", {
          key: i
        }, blockType));
      },
      header: "Block Types",
      id: "block_types",
      maxWidth: 400
    }],
    supportedLayouts: ["list"],
    view: {
      type: "list",
      perPage: 15,
      page: 1,
      layout: {},
      filters: [],
      hiddenFields: ["slug", "block_types"]
    },
    actions: [
      // {
      // 	callback: () => {
      // 		// launchEditForm();
      // 	},
      // 	id: "delete",
      // 	label: __("Delete"),
      // 	icon: <Icon icon={edit} />,
      // },
    ],
    paginationInfo: {
      totalPages: 1,
      totalItems: records.length
    }
  }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ViewBlockStyles);

/***/ }),

/***/ "./src/filters.js":
/*!************************!*\
  !*** ./src/filters.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__);




/**
 * Add additional attributes to the block settings.
 */
const additionalAttributes = {
  wpdevBlockStyles: {
    type: "array",
    default: []
  }
};
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__.addFilter)("blocks.registerBlockType", "wpdev/block-styles-manager-add-attributes", function (settings, name) {
  return {
    ...settings,
    attributes: {
      ...settings.attributes,
      ...additionalAttributes
    }
  };
});

/**
 * Add the classname via the edit component to the block.
 *
 */
const addCustomBlockClassToEdit = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__.createHigherOrderComponent)(BlockListBlock => {
  return props => {
    const {
      attributes
    } = props;
    const {
      wpdevBlockStyles
    } = attributes;
    if (wpdevBlockStyles?.length === 0) {
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockListBlock, {
        ...props
      });
    }
    const customClass = wpdevBlockStyles ? wpdevBlockStyles.join(" ") : "";
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockListBlock, {
      ...props,
      className: customClass
    });
  };
}, "addCustomBlockClassToEdit");
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__.addFilter)("editor.BlockListBlock", "wpdev/block-styles-manager-custom-edit", addCustomBlockClassToEdit);

/**
 * Add the classname via the save component to the block.
 *
 */
const addCustomBlockClassToSave = (props, block, attributes) => {
  const {
    wpdevBlockStyles
  } = attributes;
  if (wpdevBlockStyles?.length === 0) {
    return {
      ...props
    };
  }
  const customClass = wpdevBlockStyles ? wpdevBlockStyles.join(" ") : "";
  return {
    ...props,
    className: props.className + " " + customClass
  };
};
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__.addFilter)("blocks.getSaveContent.extraProps", "wpdev/block-styles-manager-custom-save", addCustomBlockClassToSave);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _BlockStylesManagerPlugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BlockStylesManagerPlugin */ "./src/BlockStylesManagerPlugin.js");
/* harmony import */ var _BlockStylesManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BlockStylesManager */ "./src/BlockStylesManager.js");
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/plugins */ "@wordpress/plugins");
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_plugins__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/styles.js");
/* harmony import */ var _filters_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./filters.js */ "./src/filters.js");









/**
 * Add the edit component to the block.
 * This is the component that will be rendered in the editor.
 * It will be rendered after the original block edit component.
 *
 * @param {function} BlockEdit Original component
 * @returns {function} Wrapped component
 *
 * @see https://developer.wordpress.org/block-editor/developers/filters/block-filters/#editor-blockedit
 */
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__.addFilter)("editor.BlockEdit", "wpdev/block-styles-manager-add-styles-manager", (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__.createHigherOrderComponent)(BlockEdit => {
  return props => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, {
      ...props
    }), props.isSelected && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_BlockStylesManager__WEBPACK_IMPORTED_MODULE_4__["default"], {
      ...props
    }));
  };
}));
(0,_wordpress_plugins__WEBPACK_IMPORTED_MODULE_5__.registerPlugin)("wpdev-block-styles-manager", {
  icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_7__["default"],
  render: _BlockStylesManagerPlugin__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   store: () => (/* binding */ store)
/* harmony export */ });
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);


const DEFAULT_STATE = {
  block_styles: []
};
const STORE_NAME = "wpdev/block-styles";
const actions = {
  hydrate(block_styles) {
    return {
      type: "GET_BLOCK_STYLES",
      block_styles
    };
  },
  *saveBlockStyle(block_style) {
    console.log("saveBlockStyle", block_style);
    if (block_style.id === undefined || block_style.id === 0) {
      block_style = yield actions.updateInAPI("/block-styles-manager/v1/block-styles", block_style);
    } else {
      yield actions.updateInAPI("/block-styles-manager/v1/block-styles/" + block_style.id, block_style);
    }
    return {
      type: "SAVE_BLOCK_STYLE",
      block_style
    };
  },
  fetchFromAPI(path) {
    return {
      type: "FETCH_FROM_API",
      path
    };
  },
  updateInAPI(path, data) {
    return {
      type: "UPDATE_IN_API",
      path,
      data
    };
  }
};
const selectors = {
  getBlockStyles(state) {
    return state.block_styles;
  }
};
const reducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case "GET_BLOCK_STYLES":
      return {
        ...state,
        block_styles: action.block_styles
      };
    case "SAVE_BLOCK_STYLE":
      console.log("SAVE_BLOCK_STYLE", action);
      return {
        ...state,
        block_styles: [...state.block_styles.filter(style => style.id !== action.block_style.id), action.block_style]
      };
    default:
      return state;
  }
};
const controls = {
  FETCH_FROM_API(action) {
    console.log("FETCH_FROM_API", action);
    return _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
      path: action.path
    });
  },
  UPDATE_IN_API(action) {
    console.log("UPDATE_IN_API", action);
    return _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
      path: action.path,
      method: "POST",
      data: action.data
    });
  }
};
const resolvers = {
  *getBlockStyles() {
    const blockStyles = yield actions.fetchFromAPI("/block-styles-manager/v1/block-styles");
    return actions.hydrate(blockStyles);
  },
  *saveBlockStyle(action) {
    console.log("saveBlockStyle", action);
    const blockStyle = yield actions.fetchFromAPI({
      path: "/block-styles-manager/v1/block-styles/" + action.block_style.id,
      method: "POST",
      data: action.block_style
    });
    return actions.save(blockStyle);
  }
};
const store = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.createReduxStore)(STORE_NAME, {
  reducer,
  actions,
  selectors,
  controls,
  resolvers
});
(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.register)(store);


/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/***/ ((module, exports) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;
	var nativeCodeString = '[native code]';

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
					classes.push(arg.toString());
					continue;
				}

				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = window["React"];

/***/ }),

/***/ "@wordpress/api-fetch":
/*!**********************************!*\
  !*** external ["wp","apiFetch"] ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["apiFetch"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/compose":
/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["compose"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/edit-post":
/*!**********************************!*\
  !*** external ["wp","editPost"] ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["editPost"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/hooks":
/*!*******************************!*\
  !*** external ["wp","hooks"] ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["hooks"];

/***/ }),

/***/ "@wordpress/html-entities":
/*!**************************************!*\
  !*** external ["wp","htmlEntities"] ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["htmlEntities"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "@wordpress/keycodes":
/*!**********************************!*\
  !*** external ["wp","keycodes"] ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["keycodes"];

/***/ }),

/***/ "@wordpress/plugins":
/*!*********************************!*\
  !*** external ["wp","plugins"] ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["plugins"];

/***/ }),

/***/ "@wordpress/primitives":
/*!************************************!*\
  !*** external ["wp","primitives"] ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["primitives"];

/***/ }),

/***/ "@wordpress/private-apis":
/*!*************************************!*\
  !*** external ["wp","privateApis"] ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["privateApis"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0,
/******/ 			"./style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkcustom_block_styles"] = globalThis["webpackChunkcustom_block_styles"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-index"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map