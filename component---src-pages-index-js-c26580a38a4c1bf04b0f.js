"use strict";(self.webpackChunkwe_are_voyager=self.webpackChunkwe_are_voyager||[]).push([[678],{7470:function(e,t,n){n.r(t),n.d(t,{default:function(){return Fe}});var r,a,o,i=n(7294);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function c(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(n=e[Symbol.iterator]()).next.bind(n)}function d(e,t){if(e in t){for(var n=t[e],r=arguments.length,a=new Array(r>2?r-2:0),o=2;o<r;o++)a[o-2]=arguments[o];return"function"==typeof n?n.apply(void 0,a):n}var i=new Error('Tried to handle "'+e+'" but there is no handler defined. Only defined handlers are: '+Object.keys(t).map((function(e){return'"'+e+'"'})).join(", ")+".");throw Error.captureStackTrace&&Error.captureStackTrace(i,d),i}function m(e){var t=e.props,n=e.slot,o=e.defaultTag,i=e.features,s=e.visible,c=void 0===s||s,m=e.name;if(c)return f(t,n,o,m);var p=null!=i?i:r.None;if(p&r.Static){var v=t.static,g=void 0!==v&&v,b=u(t,["static"]);if(g)return f(b,n,o,m)}if(p&r.RenderStrategy){var h,x=t.unmount,y=void 0===x||x,w=u(t,["unmount"]);return d(y?a.Unmount:a.Hidden,((h={})[a.Unmount]=function(){return null},h[a.Hidden]=function(){return f(l({},w,{hidden:!0,style:{display:"none"}}),n,o,m)},h))}return f(t,n,o,m)}function f(e,t,n,r){var a;void 0===t&&(t={});var o=v(e,["unmount","static"]),l=o.as,s=void 0===l?n:l,d=o.children,m=o.refName,f=void 0===m?"ref":m,p=u(o,["as","children","refName"]),g=void 0!==e.ref?((a={})[f]=e.ref,a):{},b="function"==typeof d?d(t):d;if(p.className&&"function"==typeof p.className&&(p.className=p.className(t)),s===i.Fragment&&Object.keys(p).length>0){if(!(0,i.isValidElement)(b)||Array.isArray(b)&&b.length>1)throw new Error(['Passing props on "Fragment"!',"","The current component <"+r+' /> is rendering a "Fragment".',"However we need to passthrough the following props:",Object.keys(p).map((function(e){return"  - "+e})).join("\n"),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map((function(e){return"  - "+e})).join("\n")].join("\n"));return(0,i.cloneElement)(b,Object.assign({},function(e,t,n){for(var r,a=Object.assign({},e),o=function(){var n,o=r.value;void 0!==e[o]&&void 0!==t[o]&&Object.assign(a,((n={})[o]=function(n){n.defaultPrevented||e[o](n),n.defaultPrevented||t[o](n)},n))},i=c(n);!(r=i()).done;)o();return a}(function(e){var t=Object.assign({},e);for(var n in t)void 0===t[n]&&delete t[n];return t}(v(p,["ref"])),b.props,["onClick"]),g))}return(0,i.createElement)(s,Object.assign({},v(p,["ref"]),s!==i.Fragment&&g),b)}function p(e){var t;return Object.assign((0,i.forwardRef)(e),{displayName:null!=(t=e.displayName)?t:e.name})}function v(e,t){void 0===t&&(t=[]);for(var n,r=Object.assign({},e),a=c(t);!(n=a()).done;){var o=n.value;o in r&&delete r[o]}return r}function g(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=(0,i.useRef)(t);return(0,i.useEffect)((function(){r.current=t}),[t]),(0,i.useCallback)((function(e){for(var t,n=c(r.current);!(t=n()).done;){var a=t.value;null!=a&&("function"==typeof a?a(e):a.current=e)}}),[r])}function b(e){for(var t,n,r=e.parentElement,a=null;r&&!(r instanceof HTMLFieldSetElement);)r instanceof HTMLLegendElement&&(a=r),r=r.parentElement;var o=null!=(t=""===(null==(n=r)?void 0:n.getAttribute("disabled")))&&t;return(!o||!function(e){if(!e)return!1;var t=e.previousElementSibling;for(;null!==t;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}(a))&&o}!function(e){e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static"}(r||(r={})),function(e){e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden"}(a||(a={})),function(e){e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab"}(o||(o={}));var h="undefined"!=typeof window?i.useLayoutEffect:i.useEffect,x={serverHandoffComplete:!1};function y(){var e=(0,i.useState)(x.serverHandoffComplete),t=e[0],n=e[1];return(0,i.useEffect)((function(){!0!==t&&n(!0)}),[t]),(0,i.useEffect)((function(){!1===x.serverHandoffComplete&&(x.serverHandoffComplete=!0)}),[]),t}var w=0;function E(){return++w}function N(){var e=y(),t=(0,i.useState)(e?E:null),n=t[0],r=t[1];return h((function(){null===n&&r(E())}),[n]),null!=n?""+n:void 0}var S,C,k,A,P=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map((function(e){return e+":not([tabindex='-1'])"})).join(",");function O(e){return void 0===e&&(e=document.body),null==e?[]:Array.from(e.querySelectorAll(P))}function F(e,t){var n=Array.isArray(e)?e:O(e),r=document.activeElement,a=function(){if(t&(S.First|S.Next))return k.Next;if(t&(S.Previous|S.Last))return k.Previous;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")}(),o=function(){if(t&S.First)return 0;if(t&S.Previous)return Math.max(0,n.indexOf(r))-1;if(t&S.Next)return Math.max(0,n.indexOf(r))+1;if(t&S.Last)return n.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")}(),i=t&S.NoScroll?{preventScroll:!0}:{},l=0,u=n.length,s=void 0;do{var c;if(l>=u||l+u<=0)return C.Error;var d=o+l;if(t&S.WrapAround)d=(d+u)%u;else{if(d<0)return C.Underflow;if(d>=u)return C.Overflow}null==(c=s=n[d])||c.focus(i),l+=a}while(s!==document.activeElement);return s.hasAttribute("tabindex")||s.setAttribute("tabindex","0"),C.Success}function T(e,t,n){var r=(0,i.useRef)(t);r.current=t,(0,i.useEffect)((function(){function t(e){r.current.call(window,e)}return window.addEventListener(e,t,n),function(){return window.removeEventListener(e,t,n)}}),[e,n])}!function(e){e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll"}(S||(S={})),function(e){e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow"}(C||(C={})),function(e){e[e.Previous=-1]="Previous",e[e.Next=1]="Next"}(k||(k={})),function(e){e[e.Strict=0]="Strict",e[e.Loose=1]="Loose"}(A||(A={}));var j,L,H,I,R=(0,i.createContext)(null);function M(){return(0,i.useContext)(R)}function V(e){var t=e.value,n=e.children;return i.createElement(R.Provider,{value:t},n)}R.displayName="OpenClosedContext",function(e){e[e.Open=0]="Open",e[e.Closed=1]="Closed"}(j||(j={})),function(e){e[e.Open=0]="Open",e[e.Closed=1]="Closed"}(H||(H={})),function(e){e[e.TogglePopover=0]="TogglePopover",e[e.ClosePopover=1]="ClosePopover",e[e.SetButton=2]="SetButton",e[e.SetButtonId=3]="SetButtonId",e[e.SetPanel=4]="SetPanel",e[e.SetPanelId=5]="SetPanelId"}(I||(I={}));var D=((L={})[I.TogglePopover]=function(e){var t;return l({},e,{popoverState:d(e.popoverState,(t={},t[H.Open]=H.Closed,t[H.Closed]=H.Open,t))})},L[I.ClosePopover]=function(e){return e.popoverState===H.Closed?e:l({},e,{popoverState:H.Closed})},L[I.SetButton]=function(e,t){return e.button===t.button?e:l({},e,{button:t.button})},L[I.SetButtonId]=function(e,t){return e.buttonId===t.buttonId?e:l({},e,{buttonId:t.buttonId})},L[I.SetPanel]=function(e,t){return e.panel===t.panel?e:l({},e,{panel:t.panel})},L[I.SetPanelId]=function(e,t){return e.panelId===t.panelId?e:l({},e,{panelId:t.panelId})},L),B=(0,i.createContext)(null);function q(e){var t=(0,i.useContext)(B);if(null===t){var n=new Error("<"+e+" /> is missing a parent <"+Q.name+" /> component.");throw Error.captureStackTrace&&Error.captureStackTrace(n,q),n}return t}B.displayName="PopoverContext";var U=(0,i.createContext)(null);function W(e){var t=(0,i.useContext)(U);if(null===t){var n=new Error("<"+e+" /> is missing a parent <"+Q.name+" /> component.");throw Error.captureStackTrace&&Error.captureStackTrace(n,W),n}return t}U.displayName="PopoverAPIContext";var Y=(0,i.createContext)(null);function G(){return(0,i.useContext)(Y)}Y.displayName="PopoverGroupContext";var z=(0,i.createContext)(null);function K(e,t){return d(t.type,D,e,t)}z.displayName="PopoverPanelContext";function Q(e){var t,n="headlessui-popover-button-"+N(),r="headlessui-popover-panel-"+N(),a=(0,i.useReducer)(K,{popoverState:H.Closed,button:null,buttonId:n,panel:null,panelId:r}),o=a[0],l=o.popoverState,u=o.button,s=o.panel,c=a[1];(0,i.useEffect)((function(){return c({type:I.SetButtonId,buttonId:n})}),[n,c]),(0,i.useEffect)((function(){return c({type:I.SetPanelId,panelId:r})}),[r,c]);var f=(0,i.useMemo)((function(){return{buttonId:n,panelId:r,close:function(){return c({type:I.ClosePopover})}}}),[n,r,c]),p=G(),v=null==p?void 0:p.registerPopover,g=(0,i.useCallback)((function(){var e;return null!=(e=null==p?void 0:p.isFocusWithinPopoverGroup())?e:(null==u?void 0:u.contains(document.activeElement))||(null==s?void 0:s.contains(document.activeElement))}),[p,u,s]);(0,i.useEffect)((function(){return null==v?void 0:v(f)}),[v,f]),T("focus",(function(){l===H.Open&&(g()||u&&s&&c({type:I.ClosePopover}))}),!0),T("mousedown",(function(e){var t,n,r,a=e.target;l===H.Open&&((null==u?void 0:u.contains(a))||(null==s?void 0:s.contains(a))||(c({type:I.ClosePopover}),t=a,void 0===(n=A.Loose)&&(n=A.Strict),t!==document.body&&d(n,((r={})[A.Strict]=function(){return t.matches(P)},r[A.Loose]=function(){for(var e=t;null!==e;){if(e.matches(P))return!0;e=e.parentElement}return!1},r))||(e.preventDefault(),null==u||u.focus())))}));var b=(0,i.useCallback)((function(e){c({type:I.ClosePopover});var t=e?e instanceof HTMLElement?e:e.current instanceof HTMLElement?e.current:u:u;null==t||t.focus()}),[c,u]),h=(0,i.useMemo)((function(){return{close:b}}),[b]),x=(0,i.useMemo)((function(){return{open:l===H.Open,close:b}}),[l,b]);return i.createElement(B.Provider,{value:a},i.createElement(U.Provider,{value:h},i.createElement(V,{value:d(l,(t={},t[H.Open]=j.Open,t[H.Closed]=j.Closed,t))},m({props:e,slot:x,defaultTag:"div",name:"Popover"}))))}var X,Z=p((function e(t,n){var r=q([Q.name,e.name].join(".")),a=r[0],u=r[1],s=(0,i.useRef)(null),c=G(),d=null==c?void 0:c.closeOthers,f=(0,i.useContext)(z),p=null!==f&&f===a.panelId,v=g(s,n,p?null:function(e){return u({type:I.SetButton,button:e})}),h=(0,i.useRef)(null),x=(0,i.useRef)("undefined"==typeof window?null:document.activeElement);T("focus",(function(){x.current=h.current,h.current=document.activeElement}),!0);var y=(0,i.useCallback)((function(e){var t;if(p){if(a.popoverState===H.Closed)return;switch(e.key){case o.Space:case o.Enter:e.preventDefault(),e.stopPropagation(),u({type:I.ClosePopover}),null==(t=a.button)||t.focus()}}else switch(e.key){case o.Space:case o.Enter:e.preventDefault(),e.stopPropagation(),a.popoverState===H.Closed&&(null==d||d(a.buttonId)),u({type:I.TogglePopover});break;case o.Escape:if(a.popoverState!==H.Open)return null==d?void 0:d(a.buttonId);if(!s.current)return;if(!s.current.contains(document.activeElement))return;u({type:I.ClosePopover});break;case o.Tab:if(a.popoverState!==H.Open)return;if(!a.panel)return;if(!a.button)return;if(e.shiftKey){var n;if(!x.current)return;if(null==(n=a.button)?void 0:n.contains(x.current))return;if(a.panel.contains(x.current))return;var r=O(),i=r.indexOf(x.current);if(r.indexOf(a.button)>i)return;e.preventDefault(),e.stopPropagation(),F(a.panel,S.Last)}else e.preventDefault(),e.stopPropagation(),F(a.panel,S.First)}}),[u,a.popoverState,a.buttonId,a.button,a.panel,s,d,p]),w=(0,i.useCallback)((function(e){var t;if(!p&&(e.key===o.Space&&e.preventDefault(),a.popoverState===H.Open&&a.panel&&a.button))switch(e.key){case o.Tab:if(!x.current)return;if(null==(t=a.button)?void 0:t.contains(x.current))return;if(a.panel.contains(x.current))return;var n=O(),r=n.indexOf(x.current);if(n.indexOf(a.button)>r)return;e.preventDefault(),e.stopPropagation(),F(a.panel,S.Last)}}),[a.popoverState,a.panel,a.button,p]),E=(0,i.useCallback)((function(e){var n,r;b(e.currentTarget)||(t.disabled||(p?(u({type:I.ClosePopover}),null==(n=a.button)||n.focus()):(a.popoverState===H.Closed&&(null==d||d(a.buttonId)),null==(r=a.button)||r.focus(),u({type:I.TogglePopover}))))}),[u,a.button,a.popoverState,a.buttonId,t.disabled,d,p]),N=(0,i.useMemo)((function(){return{open:a.popoverState===H.Open}}),[a]);return m({props:l({},t,p?{type:"button",onKeyDown:y,onClick:E}:{ref:v,id:a.buttonId,type:"button","aria-expanded":t.disabled?void 0:a.popoverState===H.Open,"aria-controls":a.panel?a.panelId:void 0,onKeyDown:y,onKeyUp:w,onClick:E}),slot:N,defaultTag:"button",name:"Popover.Button"})})),J=r.RenderStrategy|r.Static,_=p((function e(t,n){var r=q([Q.name,e.name].join(".")),a=r[0].popoverState,o=r[1],u=g(n),s="headlessui-popover-overlay-"+N(),c=M(),d=null!==c?c===j.Open:a===H.Open,f=(0,i.useCallback)((function(e){if(b(e.currentTarget))return e.preventDefault();o({type:I.ClosePopover})}),[o]),p=(0,i.useMemo)((function(){return{open:a===H.Open}}),[a]);return m({props:l({},t,{ref:u,id:s,"aria-hidden":!0,onClick:f}),slot:p,defaultTag:"div",features:J,visible:d,name:"Popover.Overlay"})})),$=r.RenderStrategy|r.Static,ee=p((function e(t,n){var r=t.focus,a=void 0!==r&&r,s=u(t,["focus"]),c=q([Q.name,e.name].join(".")),d=c[0],f=c[1],p=W([Q.name,e.name].join(".")).close,v=(0,i.useRef)(null),b=g(v,n,(function(e){f({type:I.SetPanel,panel:e})})),h=M(),x=null!==h?h===j.Open:d.popoverState===H.Open,y=(0,i.useCallback)((function(e){var t;switch(e.key){case o.Escape:if(d.popoverState!==H.Open)return;if(!v.current)return;if(!v.current.contains(document.activeElement))return;e.preventDefault(),f({type:I.ClosePopover}),null==(t=d.button)||t.focus()}}),[d,v,f]);(0,i.useEffect)((function(){return function(){return f({type:I.SetPanel,panel:null})}}),[f]),(0,i.useEffect)((function(){var e;d.popoverState!==H.Closed||null!=(e=t.unmount)&&!e||f({type:I.SetPanel,panel:null})}),[d.popoverState,t.unmount,f]),(0,i.useEffect)((function(){if(a&&d.popoverState===H.Open&&v.current){var e=document.activeElement;v.current.contains(e)||F(v.current,S.First)}}),[a,v,d.popoverState]),T("keydown",(function(e){if(d.popoverState===H.Open&&v.current&&e.key===o.Tab&&document.activeElement&&v.current&&v.current.contains(document.activeElement)){e.preventDefault();var t,n=F(v.current,e.shiftKey?S.Previous:S.Next);if(n===C.Underflow)return null==(t=d.button)?void 0:t.focus();if(n===C.Overflow){if(!d.button)return;var r=O(),a=r.indexOf(d.button);F(r.splice(a+1).filter((function(e){var t;return!(null==(t=v.current)?void 0:t.contains(e))})),S.First)===C.Error&&F(document.body,S.First)}}})),T("focus",(function(){var e;a&&d.popoverState===H.Open&&v.current&&((null==(e=v.current)?void 0:e.contains(document.activeElement))||f({type:I.ClosePopover}))}),!0);var w=(0,i.useMemo)((function(){return{open:d.popoverState===H.Open,close:p}}),[d,p]),E={ref:b,id:d.panelId,onKeyDown:y};return i.createElement(z.Provider,{value:d.panelId},m({props:l({},s,E),slot:w,defaultTag:"div",features:$,visible:x,name:"Popover.Panel"}))}));function te(){var e=(0,i.useRef)(!0);return(0,i.useEffect)((function(){e.current=!1}),[]),e.current}function ne(){var e=[],t={requestAnimationFrame:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(){var e=requestAnimationFrame.apply(void 0,arguments);t.add((function(){return cancelAnimationFrame(e)}))})),nextFrame:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];t.requestAnimationFrame((function(){t.requestAnimationFrame.apply(t,n)}))},setTimeout:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(){var e=setTimeout.apply(void 0,arguments);t.add((function(){return clearTimeout(e)}))})),add:function(t){e.push(t)},dispose:function(){for(var t,n=c(e.splice(0));!(t=n()).done;){var r=t.value;r()}}};return t}function re(e){for(var t,n=arguments.length,r=new Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];e&&r.length>0&&(t=e.classList).add.apply(t,r)}function ae(e){for(var t,n=arguments.length,r=new Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];e&&r.length>0&&(t=e.classList).remove.apply(t,r)}function oe(e,t,n,r,a,o){var i=ne(),l=void 0!==o?function(e){var t={called:!1};return function(){if(!t.called)return t.called=!0,e.apply(void 0,arguments)}}(o):function(){};return ae.apply(void 0,[e].concat(a)),re.apply(void 0,[e].concat(t,n)),i.nextFrame((function(){ae.apply(void 0,[e].concat(n)),re.apply(void 0,[e].concat(r)),i.add(function(e,t){var n=ne();if(!e)return n.dispose;var r=getComputedStyle(e),a=[r.transitionDuration,r.transitionDelay].map((function(e){var t=e.split(",").filter(Boolean).map((function(e){return e.includes("ms")?parseFloat(e):1e3*parseFloat(e)})).sort((function(e,t){return t-e}))[0];return void 0===t?0:t})),o=a[0],i=a[1];return 0!==o?n.setTimeout((function(){t(X.Finished)}),o+i):t(X.Finished),n.add((function(){return t(X.Cancelled)})),n.dispose}(e,(function(n){return ae.apply(void 0,[e].concat(r,t)),re.apply(void 0,[e].concat(a)),l(n)})))})),i.add((function(){return ae.apply(void 0,[e].concat(t,n,r,a))})),i.add((function(){return l(X.Cancelled)})),i.dispose}function ie(e){return void 0===e&&(e=""),(0,i.useMemo)((function(){return e.split(" ").filter((function(e){return e.trim().length>1}))}),[e])}Q.Button=Z,Q.Overlay=_,Q.Panel=ee,Q.Group=function(e){var t=(0,i.useRef)(null),n=(0,i.useState)([]),r=n[0],a=n[1],o=(0,i.useCallback)((function(e){a((function(t){var n=t.indexOf(e);if(-1!==n){var r=t.slice();return r.splice(n,1),r}return t}))}),[a]),u=(0,i.useCallback)((function(e){return a((function(t){return[].concat(t,[e])})),function(){return o(e)}}),[a,o]),s=(0,i.useCallback)((function(){var e,n=document.activeElement;return!!(null==(e=t.current)?void 0:e.contains(n))||r.some((function(e){var t,r;return(null==(t=document.getElementById(e.buttonId))?void 0:t.contains(n))||(null==(r=document.getElementById(e.panelId))?void 0:r.contains(n))}))}),[t,r]),d=(0,i.useCallback)((function(e){for(var t,n=c(r);!(t=n()).done;){var a=t.value;a.buttonId!==e&&a.close()}}),[r]),f=(0,i.useMemo)((function(){return{registerPopover:u,unregisterPopover:o,isFocusWithinPopoverGroup:s,closeOthers:d}}),[u,o,s,d]),p=(0,i.useMemo)((function(){return{}}),[]),v={ref:t},g=e;return i.createElement(Y.Provider,{value:f},m({props:l({},g,v),slot:p,defaultTag:"div",name:"Popover.Group"}))},function(e){e.Finished="finished",e.Cancelled="cancelled"}(X||(X={}));var le,ue=(0,i.createContext)(null);ue.displayName="TransitionContext",function(e){e.Visible="visible",e.Hidden="hidden"}(le||(le={}));var se=(0,i.createContext)(null);function ce(e){return"children"in e?ce(e.children):e.current.filter((function(e){return e.state===le.Visible})).length>0}function de(e){var t=(0,i.useRef)(e),n=(0,i.useRef)([]),r=function(){var e=(0,i.useRef)(!1);return(0,i.useEffect)((function(){return e.current=!0,function(){e.current=!1}}),[]),e}();(0,i.useEffect)((function(){t.current=e}),[e]);var o=(0,i.useCallback)((function(e,o){var i;void 0===o&&(o=a.Hidden);var l=n.current.findIndex((function(t){return t.id===e}));-1!==l&&(d(o,((i={})[a.Unmount]=function(){n.current.splice(l,1)},i[a.Hidden]=function(){n.current[l].state=le.Hidden},i)),!ce(n)&&r.current&&(null==t.current||t.current()))}),[t,r,n]),l=(0,i.useCallback)((function(e){var t=n.current.find((function(t){return t.id===e}));return t?t.state!==le.Visible&&(t.state=le.Visible):n.current.push({id:e,state:le.Visible}),function(){return o(e,a.Unmount)}}),[n,o]);return(0,i.useMemo)((function(){return{children:n,register:l,unregister:o}}),[l,o,n])}function me(){}se.displayName="NestingContext";var fe=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function pe(e){for(var t,n={},r=c(fe);!(t=r()).done;){var a,o=t.value;n[o]=null!=(a=e[o])?a:me}return n}var ve=r.RenderStrategy;function ge(e){var t,n=e.beforeEnter,r=e.afterEnter,o=e.beforeLeave,s=e.afterLeave,c=e.enter,f=e.enterFrom,p=e.enterTo,v=e.entered,g=e.leave,b=e.leaveFrom,x=e.leaveTo,w=u(e,["beforeEnter","afterEnter","beforeLeave","afterLeave","enter","enterFrom","enterTo","entered","leave","leaveFrom","leaveTo"]),E=(0,i.useRef)(null),S=(0,i.useState)(le.Visible),C=S[0],k=S[1],A=w.unmount?a.Unmount:a.Hidden,P=function(){var e=(0,i.useContext)(ue);if(null===e)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),O=P.show,F=P.appear,T=function(){var e=(0,i.useContext)(se);if(null===e)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),L=T.register,H=T.unregister,I=te(),R=N(),M=(0,i.useRef)(!1),D=de((function(){M.current||(k(le.Hidden),H(R),K.current.afterLeave())}));h((function(){if(R)return L(R)}),[L,R]),h((function(){var e;A===a.Hidden&&R&&(O&&C!==le.Visible?k(le.Visible):d(C,((e={})[le.Hidden]=function(){return H(R)},e[le.Visible]=function(){return L(R)},e)))}),[C,R,L,H,O,A]);var B=ie(c),q=ie(f),U=ie(p),W=ie(v),Y=ie(g),G=ie(b),z=ie(x),K=function(e){var t=(0,i.useRef)(pe(e));return(0,i.useEffect)((function(){t.current=pe(e)}),[e]),t}({beforeEnter:n,afterEnter:r,beforeLeave:o,afterLeave:s}),Q=y();(0,i.useEffect)((function(){if(Q&&C===le.Visible&&null===E.current)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")}),[E,C,Q]);var Z=I&&!F;h((function(){var e=E.current;if(e&&!Z)return M.current=!0,O&&K.current.beforeEnter(),O||K.current.beforeLeave(),O?oe(e,B,q,U,W,(function(e){M.current=!1,e===X.Finished&&K.current.afterEnter()})):oe(e,Y,G,z,W,(function(e){M.current=!1,e===X.Finished&&(ce(D)||(k(le.Hidden),H(R),K.current.afterLeave()))}))}),[K,R,M,H,D,E,Z,O,B,q,U,Y,G,z]);var J={ref:E},_=w;return i.createElement(se.Provider,{value:D},i.createElement(V,{value:d(C,(t={},t[le.Visible]=j.Open,t[le.Hidden]=j.Closed,t))},m({props:l({},_,J),defaultTag:"div",features:ve,visible:C===le.Visible,name:"Transition.Child"})))}function be(e){var t,n=e.show,r=e.appear,a=void 0!==r&&r,o=e.unmount,s=u(e,["show","appear","unmount"]),c=M();void 0===n&&null!==c&&(n=d(c,((t={})[j.Open]=!0,t[j.Closed]=!1,t)));if(![!0,!1].includes(n))throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");var f=(0,i.useState)(n?le.Visible:le.Hidden),p=f[0],v=f[1],g=de((function(){v(le.Hidden)})),b=te(),h=(0,i.useMemo)((function(){return{show:n,appear:a||!b}}),[n,a,b]);(0,i.useEffect)((function(){n?v(le.Visible):ce(g)||v(le.Hidden)}),[n,g]);var x={unmount:o};return i.createElement(se.Provider,{value:g},i.createElement(ue.Provider,{value:h},m({props:l({},x,{as:i.Fragment,children:i.createElement(ge,Object.assign({},x,s))}),defaultTag:i.Fragment,features:ve,visible:p===le.Visible,name:"Transition"})))}be.Child=function(e){var t=null!==(0,i.useContext)(ue),n=null!==M();return!t&&n?i.createElement(be,Object.assign({},e)):i.createElement(ge,Object.assign({},e))},be.Root=be;var he=function(e){return i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},e),i.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"}))};var xe=function(e){return i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},e),i.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"}))};var ye=function(e){return i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},e),i.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"}))};var we=n(2359),Ee=[{name:"Home",href:"#"}],Ne=function(){return i.createElement("div",{className:"relative bg-white overflow-hidden"},i.createElement("div",{className:"max-w-7xl mx-auto"},i.createElement("div",{className:"relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32"},i.createElement("svg",{className:"hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2",fill:"currentColor",viewBox:"0 0 100 100",preserveAspectRatio:"none","aria-hidden":"true"},i.createElement("polygon",{points:"50,0 100,0 50,100 0,100"})),i.createElement(Q,null,i.createElement("div",{className:"relative pt-6 px-4 sm:px-6 lg:px-8"},i.createElement("nav",{className:"relative flex items-center justify-between sm:h-10 lg:justify-start","aria-label":"Global"},i.createElement("div",{className:"flex items-center flex-grow flex-shrink-0 lg:flex-grow-0"},i.createElement("div",{className:"flex items-center justify-between w-full md:w-auto"},i.createElement("a",{href:"#"},i.createElement("span",{className:"sr-only"},"We are Voyager"),i.createElement(we.S,{className:"h-8 w-auto sm:h-10",src:"../images/voyager.png",alt:"We are Voyager icon",placeholder:"blurred",layout:"fixed",width:50,height:50,__imageData:n(4421)})),i.createElement("div",{className:"-mr-2 flex items-center md:hidden"},i.createElement(Q.Button,{className:"bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"},i.createElement("span",{className:"sr-only"},"Open main menu"),i.createElement(xe,{className:"h-6 w-6","aria-hidden":"true"}))))),i.createElement("div",{className:"hidden md:block md:ml-10 md:pr-4 md:space-x-8"},Ee.map((function(e){return i.createElement("a",{key:e.name,href:e.href,className:"font-medium text-gray-500 hover:text-gray-900"},e.name)})),i.createElement("a",{href:"#",className:"font-medium text-blue-700 hover:text-indigo-500"},"Log in")))),i.createElement(be,{as:i.Fragment,enter:"duration-150 ease-out",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"duration-100 ease-in",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95"},i.createElement(Q.Panel,{focus:!0,className:"absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"},i.createElement("div",{className:"rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden"},i.createElement("div",{className:"px-5 pt-4 flex items-center justify-between"},i.createElement("div",null,i.createElement(we.S,{className:"h-8 w-auto sm:h-10",src:"../images/voyager.png",alt:"We are Voyager icon",placeholder:"blurred",layout:"fixed",width:50,height:50,__imageData:n(4421)})),i.createElement("div",{className:"-mr-2"},i.createElement(Q.Button,{className:"bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"},i.createElement("span",{className:"sr-only"},"Close main menu"),i.createElement(ye,{className:"h-6 w-6","aria-hidden":"true"})))),i.createElement("div",{className:"px-2 pt-2 pb-3 space-y-1"},Ee.map((function(e){return i.createElement("a",{key:e.name,href:e.href,className:"block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"},e.name)}))),i.createElement("a",{href:"#",className:"block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100"},"Log in"))))),i.createElement("main",{className:"mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28"},i.createElement("div",{className:"sm:text-center lg:text-left"},i.createElement("h1",{className:"text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl"},i.createElement("span",{className:"block xl:inline"},"Travel booking")," ",i.createElement("span",{className:"block text-blue-700 xl:inline"},"made simple")),i.createElement("p",{className:"mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"},"Booking travel should be a simple, rewarding experience; with Voyager's API platform we enable you and your customers to book travel anywhere at any time."),i.createElement("div",{className:"mt-10 sm:flex sm:justify-center lg:justify-start"},i.createElement("div",{className:"rounded-md shadow"},i.createElement("a",{href:"#",className:"w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-700 hover:bg-blue-800 md:py-4 md:text-lg md:px-10"},"Contact us"))))))),i.createElement("div",{className:"lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2"},i.createElement("img",{className:"h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full",src:"https://images.unsplash.com/photo-1627156863760-f49b81d8ab77?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1778&q=80",alt:""})))},Se=[{name:"Invite team members",description:"You can manage phone, email and chat conversations all from a single mailbox."},{name:"List view",description:"You can manage phone, email and chat conversations all from a single mailbox."},{name:"Keyboard shortcuts",description:"You can manage phone, email and chat conversations all from a single mailbox."},{name:"Calendars",description:"You can manage phone, email and chat conversations all from a single mailbox."},{name:"Notifications",description:"Find what you need with advanced filters, bulk actions, and quick views."},{name:"Boards",description:"Find what you need with advanced filters, bulk actions, and quick views."},{name:"Reporting",description:"Find what you need with advanced filters, bulk actions, and quick views."},{name:"Mobile app",description:"Find what you need with advanced filters, bulk actions, and quick views."}],Ce=function(){return i.createElement("div",{className:"max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:py-8 lg:px-8"},i.createElement("div",{className:"max-w-3xl mx-auto text-center"},i.createElement("h2",{className:"text-3xl font-extrabold text-gray-900"},"The hosted platform"),i.createElement("p",{className:"mt-4 text-lg text-gray-500"},"Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla nec.")),i.createElement("dl",{className:"mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8"},Se.map((function(e){return i.createElement("div",{key:e.name,className:"relative"},i.createElement("dt",null,i.createElement(he,{className:"absolute h-6 w-6 text-green-500","aria-hidden":"true"}),i.createElement("p",{className:"ml-9 text-lg leading-6 font-medium text-gray-900"},e.name)),i.createElement("dd",{className:"mt-2 ml-9 text-base text-gray-500"},e.description))}))))},ke=[{name:"Invite team members",description:"You can manage phone, email and chat conversations all from a single mailbox."},{name:"List view",description:"You can manage phone, email and chat conversations all from a single mailbox."},{name:"Keyboard shortcuts",description:"You can manage phone, email and chat conversations all from a single mailbox."},{name:"Calendars",description:"You can manage phone, email and chat conversations all from a single mailbox."},{name:"Notifications",description:"Find what you need with advanced filters, bulk actions, and quick views."},{name:"Boards",description:"Find what you need with advanced filters, bulk actions, and quick views."},{name:"Reporting",description:"Find what you need with advanced filters, bulk actions, and quick views."},{name:"Mobile app",description:"Find what you need with advanced filters, bulk actions, and quick views."}],Ae=function(){return i.createElement("div",{className:"max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:py-8 lg:px-8"},i.createElement("div",{className:"max-w-3xl mx-auto text-center"},i.createElement("h2",{className:"text-3xl font-extrabold text-gray-900"},"The self-serve platform"),i.createElement("p",{className:"mt-4 text-lg text-gray-500"},"Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla nec.")),i.createElement("dl",{className:"mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8"},ke.map((function(e){return i.createElement("div",{key:e.name,className:"relative"},i.createElement("dt",null,i.createElement(he,{className:"absolute h-6 w-6 text-green-500","aria-hidden":"true"}),i.createElement("p",{className:"ml-9 text-lg leading-6 font-medium text-gray-900"},e.name)),i.createElement("dd",{className:"mt-2 ml-9 text-base text-gray-500"},e.description))}))))},Pe={main:[{name:"Home",href:"#"},{name:"Platform",href:"#"}]},Oe=function(){return i.createElement("footer",{className:"bg-white"},i.createElement("div",{className:"max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8"},i.createElement("nav",{className:"-mx-5 -my-2 flex flex-wrap justify-center","aria-label":"Footer"},Pe.main.map((function(e){return i.createElement("div",{key:e.name,className:"px-5 py-2"},i.createElement("a",{href:e.href,className:"text-base text-gray-500 hover:text-gray-900"},e.name))}))),i.createElement("p",{className:"mt-8 text-center text-base text-gray-400"},"© 2021 We are Voyager Limited. All rights reserved.")))},Fe=function(){return i.createElement("div",null,i.createElement(Ne,null),i.createElement("div",{className:"max-w-7xl mx-auto py-8 px-4 sm:py-8 sm:px-6 lg:px-8"},i.createElement("div",{className:"text-center"},i.createElement("h2",{className:"text-base font-semibold text-indigo-600 tracking-wide uppercase"},"Voyager"),i.createElement("p",{className:"mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl"},"The future travel platform"),i.createElement("p",{className:"max-w-xl mt-5 mx-auto text-xl text-gray-500"},"Voyager provides two ways to connect to powerful travel APIs. The hosted travel platform and the self serve platform."))),i.createElement(Ce,null),i.createElement(Ae,null),i.createElement(Oe,null))}},4421:function(e){e.exports=JSON.parse('{"layout":"fixed","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAACvklEQVQ4y4WVXUhTYRjHz0VZGVi2PFOzLhL6oqvoJujWNKs5z6YGRlldSNDHRR8XQRldBUEZRemVd0UhRYXOnc1tEkWYkisyjbA1SajMCZOV6d5/PM/OO8/mGQ1ezjjvc37n/z4f/6Oomn5K1fQ/quaD3eUTqqYLu4v/Q9V0yP/mZbovjGfo3pSq6Q6FYMZmUgaWuH0orbOGmmNKFmLmjWtEyYLxG1dWe7C8qhtra/UMiLwWaTryqz3I3+sRNmfqRASlfVIoJKyoVheFNV4cux7GtQefsbExAJtzMYyuJ1rfo/35V2xpCgmb0yvTJBRDlcwfWjvHIH83O8dYqTx+scsHeuHZe8PpGPeVQVZqHF8o5tyU1fuxtSmER6EJDp749RubDgdhc3oZxlC3j5X3f4whKQR2nXyJVQd6+D7tK6rpOPQQKdrR/ALxxBxDz9z5kKGSVsH+HrwZiWF0PI5ChzejaEp29dbV+0FFud/7jYF94UmsdqQU0lpT48XmI0EkkwIX2oexrDLzZUp2j1EuCOhqGWDg7FwSu0+/YlVlDX4sqejC5Y5RRH8kUkWq1a0VmhcF0cMj0ThDL3WMYkWVh/fWN/jxaXwGWssAFYMFmHvVElha5+e8tT2LMDD4dpILk7enmytPCpdWdHFcduMrVmNFU0DHbrg6yMDpmb9c2X0X+3H3aYSVyapmL0uFMvnbjobwc3qWoc033uHW4zGUHwqk28hq1i2B6SZ2eBEammRg9HsCFedfs/LSutzGoeRyE8pPXmU3bj/5wsCHwQmjH/05YanGXrArkd0+BDjXNoz+kRg2HOxlsyi2dCCfNAhBkyLs5GeG05gDKVfbj/ehvDGAAmO8FsFMnpia5ZQ5zpvtyzw5BGVl7pzKJCxtX1MLfpbTmf/n3tJgwwR0kNNKhbk+AVZAI1Z+AsKqpu/8Bxd5nzqwkk03AAAAAElFTkSuQmCC"},"images":{"fallback":{"src":"/static/a8891db8102ad6829d5cc543caf815db/e9fba/voyager.png","srcSet":"/static/a8891db8102ad6829d5cc543caf815db/e9fba/voyager.png 50w,\\n/static/a8891db8102ad6829d5cc543caf815db/15e42/voyager.png 100w","sizes":"50px"},"sources":[{"srcSet":"/static/a8891db8102ad6829d5cc543caf815db/dbc4a/voyager.webp 50w,\\n/static/a8891db8102ad6829d5cc543caf815db/d8057/voyager.webp 100w","type":"image/webp","sizes":"50px"}]},"width":50,"height":50}')}}]);
//# sourceMappingURL=component---src-pages-index-js-c26580a38a4c1bf04b0f.js.map