(self.webpackChunkwe_are_voyager=self.webpackChunkwe_are_voyager||[]).push([[501],{3711:function(e,t,r){var n;!function(o){"use strict";function i(e){var t=e&&e.Promise||o.Promise,r=e&&e.XMLHttpRequest||o.XMLHttpRequest,n=o;return function(){var e=Object.create(n,{fetch:{value:void 0,writable:!0}});return function(e){if(!e.fetch){var n="URLSearchParams"in e,o="Symbol"in e&&"iterator"in Symbol,i="FileReader"in e&&"Blob"in e&&function(){try{return new Blob,!0}catch(e){return!1}}(),a="FormData"in e,s="ArrayBuffer"in e;if(s)var c=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],u=function(e){return e&&DataView.prototype.isPrototypeOf(e)},l=ArrayBuffer.isView||function(e){return e&&c.indexOf(Object.prototype.toString.call(e))>-1};y.prototype.append=function(e,t){e=d(e),t=m(t);var r=this.map[e];this.map[e]=r?r+","+t:t},y.prototype.delete=function(e){delete this.map[d(e)]},y.prototype.get=function(e){return e=d(e),this.has(e)?this.map[e]:null},y.prototype.has=function(e){return this.map.hasOwnProperty(d(e))},y.prototype.set=function(e,t){this.map[d(e)]=m(t)},y.prototype.forEach=function(e,t){for(var r in this.map)this.map.hasOwnProperty(r)&&e.call(t,this.map[r],r,this)},y.prototype.keys=function(){var e=[];return this.forEach((function(t,r){e.push(r)})),h(e)},y.prototype.values=function(){var e=[];return this.forEach((function(t){e.push(t)})),h(e)},y.prototype.entries=function(){var e=[];return this.forEach((function(t,r){e.push([r,t])})),h(e)},o&&(y.prototype[Symbol.iterator]=y.prototype.entries);var f=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];E.prototype.clone=function(){return new E(this,{body:this._bodyInit})},w.call(E.prototype),w.call(j.prototype),j.prototype.clone=function(){return new j(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new y(this.headers),url:this.url})},j.error=function(){var e=new j(null,{status:0,statusText:""});return e.type="error",e};var p=[301,302,303,307,308];j.redirect=function(e,t){if(-1===p.indexOf(t))throw new RangeError("Invalid status code");return new j(null,{status:t,headers:{location:e}})},e.Headers=y,e.Request=E,e.Response=j,e.fetch=function(e,n){return new t((function(t,o){var a=new E(e,n),s=new r;s.onload=function(){var e,r,n={status:s.status,statusText:s.statusText,headers:(e=s.getAllResponseHeaders()||"",r=new y,e.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach((function(e){var t=e.split(":"),n=t.shift().trim();if(n){var o=t.join(":").trim();r.append(n,o)}})),r)};n.url="responseURL"in s?s.responseURL:n.headers.get("X-Request-URL");var o="response"in s?s.response:s.responseText;t(new j(o,n))},s.onerror=function(){o(new TypeError("Network request failed"))},s.ontimeout=function(){o(new TypeError("Network request failed"))},s.open(a.method,a.url,!0),"include"===a.credentials?s.withCredentials=!0:"omit"===a.credentials&&(s.withCredentials=!1),"responseType"in s&&i&&(s.responseType="blob"),a.headers.forEach((function(e,t){s.setRequestHeader(t,e)})),s.send(void 0===a._bodyInit?null:a._bodyInit)}))},e.fetch.polyfill=!0}function d(e){if("string"!=typeof e&&(e=String(e)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(e))throw new TypeError("Invalid character in header field name");return e.toLowerCase()}function m(e){return"string"!=typeof e&&(e=String(e)),e}function h(e){var t={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return o&&(t[Symbol.iterator]=function(){return t}),t}function y(e){this.map={},e instanceof y?e.forEach((function(e,t){this.append(t,e)}),this):Array.isArray(e)?e.forEach((function(e){this.append(e[0],e[1])}),this):e&&Object.getOwnPropertyNames(e).forEach((function(t){this.append(t,e[t])}),this)}function v(e){if(e.bodyUsed)return t.reject(new TypeError("Already read"));e.bodyUsed=!0}function b(e){return new t((function(t,r){e.onload=function(){t(e.result)},e.onerror=function(){r(e.error)}}))}function g(e){var t=new FileReader,r=b(t);return t.readAsArrayBuffer(e),r}function x(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)),t.buffer}function w(){return this.bodyUsed=!1,this._initBody=function(e){if(this._bodyInit=e,e)if("string"==typeof e)this._bodyText=e;else if(i&&Blob.prototype.isPrototypeOf(e))this._bodyBlob=e;else if(a&&FormData.prototype.isPrototypeOf(e))this._bodyFormData=e;else if(n&&URLSearchParams.prototype.isPrototypeOf(e))this._bodyText=e.toString();else if(s&&i&&u(e))this._bodyArrayBuffer=x(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer]);else{if(!s||!ArrayBuffer.prototype.isPrototypeOf(e)&&!l(e))throw new Error("unsupported BodyInit type");this._bodyArrayBuffer=x(e)}else this._bodyText="";this.headers.get("content-type")||("string"==typeof e?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):n&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},i&&(this.blob=function(){var e=v(this);if(e)return e;if(this._bodyBlob)return t.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return t.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return t.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?v(this)||t.resolve(this._bodyArrayBuffer):this.blob().then(g)}),this.text=function(){var e,r,n,o=v(this);if(o)return o;if(this._bodyBlob)return e=this._bodyBlob,r=new FileReader,n=b(r),r.readAsText(e),n;if(this._bodyArrayBuffer)return t.resolve(function(e){for(var t=new Uint8Array(e),r=new Array(t.length),n=0;n<t.length;n++)r[n]=String.fromCharCode(t[n]);return r.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return t.resolve(this._bodyText)},a&&(this.formData=function(){return this.text().then(_)}),this.json=function(){return this.text().then(JSON.parse)},this}function E(e,t){var r,n,o=(t=t||{}).body;if(e instanceof E){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new y(e.headers)),this.method=e.method,this.mode=e.mode,o||null==e._bodyInit||(o=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e);if(this.credentials=t.credentials||this.credentials||"omit",!t.headers&&this.headers||(this.headers=new y(t.headers)),this.method=(r=t.method||this.method||"GET",n=r.toUpperCase(),f.indexOf(n)>-1?n:r),this.mode=t.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&o)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(o)}function _(e){var t=new FormData;return e.trim().split("&").forEach((function(e){if(e){var r=e.split("="),n=r.shift().replace(/\+/g," "),o=r.join("=").replace(/\+/g," ");t.append(decodeURIComponent(n),decodeURIComponent(o))}})),t}function j(e,t){t||(t={}),this.type="default",this.status=void 0===t.status?200:t.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in t?t.statusText:"OK",this.headers=new y(t.headers),this.url=t.url||"",this._initBody(e)}}(void 0!==e?e:this),{fetch:e.fetch,Headers:e.Headers,Request:e.Request,Response:e.Response}}()}void 0===(n=function(){return i}.call(t,r,t,e))||(e.exports=n)}("undefined"!=typeof self?self:void 0!==r.g?r.g:this)},3099:function(e){e.exports=function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function");return e}},9670:function(e,t,r){var n=r(111);e.exports=function(e){if(!n(e))throw TypeError(String(e)+" is not an object");return e}},1318:function(e,t,r){var n=r(5656),o=r(7466),i=r(1400),a=function(e){return function(t,r,a){var s,c=n(t),u=o(c.length),l=i(a,u);if(e&&r!=r){for(;u>l;)if((s=c[l++])!=s)return!0}else for(;u>l;l++)if((e||l in c)&&c[l]===r)return e||l||0;return!e&&-1}};e.exports={includes:a(!0),indexOf:a(!1)}},4326:function(e){var t={}.toString;e.exports=function(e){return t.call(e).slice(8,-1)}},9920:function(e,t,r){var n=r(6656),o=r(3887),i=r(1236),a=r(3070);e.exports=function(e,t){for(var r=o(t),s=a.f,c=i.f,u=0;u<r.length;u++){var l=r[u];n(e,l)||s(e,l,c(t,l))}}},8880:function(e,t,r){var n=r(9781),o=r(3070),i=r(9114);e.exports=n?function(e,t,r){return o.f(e,t,i(1,r))}:function(e,t,r){return e[t]=r,e}},9114:function(e){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},9781:function(e,t,r){var n=r(7293);e.exports=!n((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:function(e,t,r){var n=r(7854),o=r(111),i=n.document,a=o(i)&&o(i.createElement);e.exports=function(e){return a?i.createElement(e):{}}},8113:function(e,t,r){var n=r(5005);e.exports=n("navigator","userAgent")||""},7392:function(e,t,r){var n,o,i=r(7854),a=r(8113),s=i.process,c=i.Deno,u=s&&s.versions||c&&c.version,l=u&&u.v8;l?o=(n=l.split("."))[0]<4?1:n[0]+n[1]:a&&(!(n=a.match(/Edge\/(\d+)/))||n[1]>=74)&&(n=a.match(/Chrome\/(\d+)/))&&(o=n[1]),e.exports=o&&+o},748:function(e){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:function(e,t,r){var n=r(7854),o=r(1236).f,i=r(8880),a=r(1320),s=r(3505),c=r(9920),u=r(4705);e.exports=function(e,t){var r,l,f,p,d,m=e.target,h=e.global,y=e.stat;if(r=h?n:y?n[m]||s(m,{}):(n[m]||{}).prototype)for(l in t){if(p=t[l],f=e.noTargetGet?(d=o(r,l))&&d.value:r[l],!u(h?l:m+(y?".":"#")+l,e.forced)&&void 0!==f){if(typeof p==typeof f)continue;c(p,f)}(e.sham||f&&f.sham)&&i(p,"sham",!0),a(r,l,p,e)}}},7293:function(e){e.exports=function(e){try{return!!e()}catch(t){return!0}}},5005:function(e,t,r){var n=r(7854),o=function(e){return"function"==typeof e?e:void 0};e.exports=function(e,t){return arguments.length<2?o(n[e]):n[e]&&n[e][t]}},7854:function(e,t,r){var n=function(e){return e&&e.Math==Math&&e};e.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof r.g&&r.g)||function(){return this}()||Function("return this")()},6656:function(e,t,r){var n=r(7908),o={}.hasOwnProperty;e.exports=Object.hasOwn||function(e,t){return o.call(n(e),t)}},3501:function(e){e.exports={}},4664:function(e,t,r){var n=r(9781),o=r(7293),i=r(317);e.exports=!n&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},8361:function(e,t,r){var n=r(7293),o=r(4326),i="".split;e.exports=n((function(){return!Object("z").propertyIsEnumerable(0)}))?function(e){return"String"==o(e)?i.call(e,""):Object(e)}:Object},2788:function(e,t,r){var n=r(5465),o=Function.toString;"function"!=typeof n.inspectSource&&(n.inspectSource=function(e){return o.call(e)}),e.exports=n.inspectSource},9909:function(e,t,r){var n,o,i,a=r(8536),s=r(7854),c=r(111),u=r(8880),l=r(6656),f=r(5465),p=r(6200),d=r(3501),m="Object already initialized",h=s.WeakMap;if(a||f.state){var y=f.state||(f.state=new h),v=y.get,b=y.has,g=y.set;n=function(e,t){if(b.call(y,e))throw new TypeError(m);return t.facade=e,g.call(y,e,t),t},o=function(e){return v.call(y,e)||{}},i=function(e){return b.call(y,e)}}else{var x=p("state");d[x]=!0,n=function(e,t){if(l(e,x))throw new TypeError(m);return t.facade=e,u(e,x,t),t},o=function(e){return l(e,x)?e[x]:{}},i=function(e){return l(e,x)}}e.exports={set:n,get:o,has:i,enforce:function(e){return i(e)?o(e):n(e,{})},getterFor:function(e){return function(t){var r;if(!c(t)||(r=o(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return r}}}},4705:function(e,t,r){var n=r(7293),o=/#|\.prototype\./,i=function(e,t){var r=s[a(e)];return r==u||r!=c&&("function"==typeof t?n(t):!!t)},a=i.normalize=function(e){return String(e).replace(o,".").toLowerCase()},s=i.data={},c=i.NATIVE="N",u=i.POLYFILL="P";e.exports=i},111:function(e){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},1913:function(e){e.exports=!1},2190:function(e,t,r){var n=r(5005),o=r(3307);e.exports=o?function(e){return"symbol"==typeof e}:function(e){var t=n("Symbol");return"function"==typeof t&&Object(e)instanceof t}},3366:function(e,t,r){var n=r(7854);e.exports=n.Promise},133:function(e,t,r){var n=r(7392),o=r(7293);e.exports=!!Object.getOwnPropertySymbols&&!o((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&n&&n<41}))},8536:function(e,t,r){var n=r(7854),o=r(2788),i=n.WeakMap;e.exports="function"==typeof i&&/native code/.test(o(i))},8523:function(e,t,r){"use strict";var n=r(3099),o=function(e){var t,r;this.promise=new e((function(e,n){if(void 0!==t||void 0!==r)throw TypeError("Bad Promise constructor");t=e,r=n})),this.resolve=n(t),this.reject=n(r)};e.exports.f=function(e){return new o(e)}},3070:function(e,t,r){var n=r(9781),o=r(4664),i=r(9670),a=r(4948),s=Object.defineProperty;t.f=n?s:function(e,t,r){if(i(e),t=a(t),i(r),o)try{return s(e,t,r)}catch(n){}if("get"in r||"set"in r)throw TypeError("Accessors not supported");return"value"in r&&(e[t]=r.value),e}},1236:function(e,t,r){var n=r(9781),o=r(5296),i=r(9114),a=r(5656),s=r(4948),c=r(6656),u=r(4664),l=Object.getOwnPropertyDescriptor;t.f=n?l:function(e,t){if(e=a(e),t=s(t),u)try{return l(e,t)}catch(r){}if(c(e,t))return i(!o.f.call(e,t),e[t])}},8006:function(e,t,r){var n=r(6324),o=r(748).concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return n(e,o)}},5181:function(e,t){t.f=Object.getOwnPropertySymbols},6324:function(e,t,r){var n=r(6656),o=r(5656),i=r(1318).indexOf,a=r(3501);e.exports=function(e,t){var r,s=o(e),c=0,u=[];for(r in s)!n(a,r)&&n(s,r)&&u.push(r);for(;t.length>c;)n(s,r=t[c++])&&(~i(u,r)||u.push(r));return u}},5296:function(e,t){"use strict";var r={}.propertyIsEnumerable,n=Object.getOwnPropertyDescriptor,o=n&&!r.call({1:2},1);t.f=o?function(e){var t=n(this,e);return!!t&&t.enumerable}:r},2140:function(e,t,r){var n=r(111);e.exports=function(e,t){var r,o;if("string"===t&&"function"==typeof(r=e.toString)&&!n(o=r.call(e)))return o;if("function"==typeof(r=e.valueOf)&&!n(o=r.call(e)))return o;if("string"!==t&&"function"==typeof(r=e.toString)&&!n(o=r.call(e)))return o;throw TypeError("Can't convert object to primitive value")}},3887:function(e,t,r){var n=r(5005),o=r(8006),i=r(5181),a=r(9670);e.exports=n("Reflect","ownKeys")||function(e){var t=o.f(a(e)),r=i.f;return r?t.concat(r(e)):t}},9478:function(e,t,r){var n=r(9670),o=r(111),i=r(8523);e.exports=function(e,t){if(n(e),o(t)&&t.constructor===e)return t;var r=i.f(e);return(0,r.resolve)(t),r.promise}},1320:function(e,t,r){var n=r(7854),o=r(8880),i=r(6656),a=r(3505),s=r(2788),c=r(9909),u=c.get,l=c.enforce,f=String(String).split("String");(e.exports=function(e,t,r,s){var c,u=!!s&&!!s.unsafe,p=!!s&&!!s.enumerable,d=!!s&&!!s.noTargetGet;"function"==typeof r&&("string"!=typeof t||i(r,"name")||o(r,"name",t),(c=l(r)).source||(c.source=f.join("string"==typeof t?t:""))),e!==n?(u?!d&&e[t]&&(p=!0):delete e[t],p?e[t]=r:o(e,t,r)):p?e[t]=r:a(t,r)})(Function.prototype,"toString",(function(){return"function"==typeof this&&u(this).source||s(this)}))},4488:function(e){e.exports=function(e){if(null==e)throw TypeError("Can't call method on "+e);return e}},3505:function(e,t,r){var n=r(7854);e.exports=function(e,t){try{Object.defineProperty(n,e,{value:t,configurable:!0,writable:!0})}catch(r){n[e]=t}return t}},6200:function(e,t,r){var n=r(2309),o=r(9711),i=n("keys");e.exports=function(e){return i[e]||(i[e]=o(e))}},5465:function(e,t,r){var n=r(7854),o=r(3505),i="__core-js_shared__",a=n[i]||o(i,{});e.exports=a},2309:function(e,t,r){var n=r(1913),o=r(5465);(e.exports=function(e,t){return o[e]||(o[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.16.3",mode:n?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},6707:function(e,t,r){var n=r(9670),o=r(3099),i=r(5112)("species");e.exports=function(e,t){var r,a=n(e).constructor;return void 0===a||null==(r=n(a)[i])?t:o(r)}},1400:function(e,t,r){var n=r(9958),o=Math.max,i=Math.min;e.exports=function(e,t){var r=n(e);return r<0?o(r+t,0):i(r,t)}},5656:function(e,t,r){var n=r(8361),o=r(4488);e.exports=function(e){return n(o(e))}},9958:function(e){var t=Math.ceil,r=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?r:t)(e)}},7466:function(e,t,r){var n=r(9958),o=Math.min;e.exports=function(e){return e>0?o(n(e),9007199254740991):0}},7908:function(e,t,r){var n=r(4488);e.exports=function(e){return Object(n(e))}},7593:function(e,t,r){var n=r(111),o=r(2190),i=r(2140),a=r(5112)("toPrimitive");e.exports=function(e,t){if(!n(e)||o(e))return e;var r,s=e[a];if(void 0!==s){if(void 0===t&&(t="default"),r=s.call(e,t),!n(r)||o(r))return r;throw TypeError("Can't convert object to primitive value")}return void 0===t&&(t="number"),i(e,t)}},4948:function(e,t,r){var n=r(7593),o=r(2190);e.exports=function(e){var t=n(e,"string");return o(t)?t:String(t)}},9711:function(e){var t=0,r=Math.random();e.exports=function(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++t+r).toString(36)}},3307:function(e,t,r){var n=r(133);e.exports=n&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},5112:function(e,t,r){var n=r(7854),o=r(2309),i=r(6656),a=r(9711),s=r(133),c=r(3307),u=o("wks"),l=n.Symbol,f=c?l:l&&l.withoutSetter||a;e.exports=function(e){return i(u,e)&&(s||"string"==typeof u[e])||(s&&i(l,e)?u[e]=l[e]:u[e]=f("Symbol."+e)),u[e]}},7727:function(e,t,r){"use strict";var n=r(2109),o=r(1913),i=r(3366),a=r(7293),s=r(5005),c=r(6707),u=r(9478),l=r(1320);if(n({target:"Promise",proto:!0,real:!0,forced:!!i&&a((function(){i.prototype.finally.call({then:function(){}},(function(){}))}))},{finally:function(e){var t=c(this,s("Promise")),r="function"==typeof e;return this.then(r?function(r){return u(t,e()).then((function(){return r}))}:e,r?function(r){return u(t,e()).then((function(){throw r}))}:e)}}),!o&&"function"==typeof i){var f=s("Promise").prototype.finally;i.prototype.finally!==f&&l(i.prototype,"finally",f,{unsafe:!0})}},9219:function(e,t,r){"use strict";var n=r(7294),o=r(2060),i=r(6329),a=r(1442),s=r(2359),c=[{name:"Home",href:"/"}];t.Z=function(){return n.createElement("div",{className:"relative bg-white"},n.createElement("div",{className:"max-w-7xl mx-auto"},n.createElement("div",{className:"relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-20 xl:pb-20"},n.createElement("svg",{className:"hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2",fill:"currentColor",viewBox:"0 0 100 100",preserveAspectRatio:"none","aria-hidden":"true"},n.createElement("polygon",{points:"50,0 100,0 50,100 0,100"})),n.createElement(o.J,null,n.createElement("div",{className:"relative pt-6 px-4 sm:px-6 lg:px-8"},n.createElement("nav",{className:"relative flex items-center justify-between sm:h-10 lg:justify-start","aria-label":"Global"},n.createElement("div",{className:"flex items-center flex-grow flex-shrink-0 lg:flex-grow-0"},n.createElement("div",{className:"flex items-center justify-between w-full md:w-auto"},n.createElement("a",{href:"/"},n.createElement("span",{className:"sr-only"},"We are Voyager"),n.createElement(s.S,{className:"h-8 w-auto sm:h-10",src:"../images/voyager.png",alt:"We are Voyager icon",placeholder:"blurred",layout:"fixed",width:50,height:50,__imageData:r(4421)})),n.createElement("div",{className:"-mr-2 flex items-center md:hidden"},n.createElement(o.J.Button,{className:"bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"},n.createElement("span",{className:"sr-only"},"Open main menu"),n.createElement(a.Oqj,{className:"h-6 w-6","aria-hidden":"true"}))))),n.createElement("div",{className:"hidden md:block md:ml-10 md:pr-4 md:space-x-8"},c.map((function(e){return n.createElement("a",{key:e.name,href:e.href,className:"font-medium text-gray-500 hover:text-gray-900"},e.name)})),n.createElement("a",{href:"#",className:"font-medium text-blue-700 hover:text-blue-500"},"Log in")))),n.createElement(i.u,{as:n.Fragment,enter:"duration-150 ease-out",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"duration-100 ease-in",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95"},n.createElement(o.J.Panel,{focus:!0,className:"absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"},n.createElement("div",{className:"rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden"},n.createElement("div",{className:"px-5 pt-4 flex items-center justify-between"},n.createElement("div",null,n.createElement(s.S,{className:"h-8 w-auto sm:h-10",src:"../images/voyager.png",alt:"We are Voyager icon",placeholder:"blurred",layout:"fixed",width:50,height:50,__imageData:r(4421)})),n.createElement("div",{className:"-mr-2"},n.createElement(o.J.Button,{className:"bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"},n.createElement("span",{className:"sr-only"},"Close main menu"),n.createElement(a.b0D,{className:"h-6 w-6","aria-hidden":"true"})))),n.createElement("div",{className:"px-2 pt-2 pb-3 space-y-1"},c.map((function(e){return n.createElement("a",{key:e.name,href:e.href,className:"block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"},e.name)}))),n.createElement("a",{href:"#",className:"block w-full px-5 py-3 text-center font-medium text-blue-600 bg-gray-50 hover:bg-gray-100"},"Log in"))))))))}},1112:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return G}});var n=r(7294),o=r(9219),i=r(5610),a=r(3720),s=r.n(a);r(7727);var c=function(e){var t=this.constructor;return this.then((function(r){return t.resolve(e()).then((function(){return r}))}),(function(r){return t.resolve(e()).then((function(){return t.reject(r)}))}))};var u=function(e){return new this((function(t,r){if(!e||void 0===e.length)return r(new TypeError(typeof e+" "+e+" is not iterable(cannot read property Symbol(Symbol.iterator))"));var n=Array.prototype.slice.call(e);if(0===n.length)return t([]);var o=n.length;function i(e,r){if(r&&("object"==typeof r||"function"==typeof r)){var a=r.then;if("function"==typeof a)return void a.call(r,(function(t){i(e,t)}),(function(r){n[e]={status:"rejected",reason:r},0==--o&&t(n)}))}n[e]={status:"fulfilled",value:r},0==--o&&t(n)}for(var a=0;a<n.length;a++)i(a,n[a])}))},l=setTimeout;function f(e){return Boolean(e&&void 0!==e.length)}function p(){}function d(e){if(!(this instanceof d))throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],g(e,this)}function m(e,t){for(;3===e._state;)e=e._value;0!==e._state?(e._handled=!0,d._immediateFn((function(){var r=1===e._state?t.onFulfilled:t.onRejected;if(null!==r){var n;try{n=r(e._value)}catch(o){return void y(t.promise,o)}h(t.promise,n)}else(1===e._state?h:y)(t.promise,e._value)}))):e._deferreds.push(t)}function h(e,t){try{if(t===e)throw new TypeError("A promise cannot be resolved with itself.");if(t&&("object"==typeof t||"function"==typeof t)){var r=t.then;if(t instanceof d)return e._state=3,e._value=t,void v(e);if("function"==typeof r)return void g((n=r,o=t,function(){n.apply(o,arguments)}),e)}e._state=1,e._value=t,v(e)}catch(i){y(e,i)}var n,o}function y(e,t){e._state=2,e._value=t,v(e)}function v(e){2===e._state&&0===e._deferreds.length&&d._immediateFn((function(){e._handled||d._unhandledRejectionFn(e._value)}));for(var t=0,r=e._deferreds.length;t<r;t++)m(e,e._deferreds[t]);e._deferreds=null}function b(e,t,r){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=r}function g(e,t){var r=!1;try{e((function(e){r||(r=!0,h(t,e))}),(function(e){r||(r=!0,y(t,e))}))}catch(n){if(r)return;r=!0,y(t,n)}}d.prototype.catch=function(e){return this.then(null,e)},d.prototype.then=function(e,t){var r=new this.constructor(p);return m(this,new b(e,t,r)),r},d.prototype.finally=c,d.all=function(e){return new d((function(t,r){if(!f(e))return r(new TypeError("Promise.all accepts an array"));var n=Array.prototype.slice.call(e);if(0===n.length)return t([]);var o=n.length;function i(e,a){try{if(a&&("object"==typeof a||"function"==typeof a)){var s=a.then;if("function"==typeof s)return void s.call(a,(function(t){i(e,t)}),r)}n[e]=a,0==--o&&t(n)}catch(c){r(c)}}for(var a=0;a<n.length;a++)i(a,n[a])}))},d.allSettled=u,d.resolve=function(e){return e&&"object"==typeof e&&e.constructor===d?e:new d((function(t){t(e)}))},d.reject=function(e){return new d((function(t,r){r(e)}))},d.race=function(e){return new d((function(t,r){if(!f(e))return r(new TypeError("Promise.race accepts an array"));for(var n=0,o=e.length;n<o;n++)d.resolve(e[n]).then(t,r)}))},d._immediateFn="function"==typeof setImmediate&&function(e){setImmediate(e)}||function(e){l(e,0)},d._unhandledRejectionFn=function(e){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)};var x=d,w=r(3711),E=r.n(w);function _(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function j(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function S(e,t,r){return t&&j(e.prototype,t),r&&j(e,r),e}var O="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",N=/^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/;var T,A=function(e){return function(e){for(var t,r,n,o,i="",a=0,s=(e=String(e)).length%3;a<e.length;){if((r=e.charCodeAt(a++))>255||(n=e.charCodeAt(a++))>255||(o=e.charCodeAt(a++))>255)throw new TypeError("Failed to execute 'btoa' on 'Window': The string to be encoded contains characters outside of the Latin1 range.");i+=O.charAt((t=r<<16|n<<8|o)>>18&63)+O.charAt(t>>12&63)+O.charAt(t>>6&63)+O.charAt(63&t)}return s?i.slice(0,s-3)+"===".substring(s):i}(JSON.stringify(e))},F=function(e){var t="@formspree/core@".concat("2.6.2");return e?"".concat(e," ").concat(t):t},P=function(){return navigator.webdriver||!!document.documentElement.getAttribute(function(e){if(e=String(e).replace(/[\t\n\f\r ]+/g,""),!N.test(e))throw new TypeError("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");e+="==".slice(2-(3&e.length));for(var t,r,n,o="",i=0;i<e.length;)t=O.indexOf(e.charAt(i++))<<18|O.indexOf(e.charAt(i++))<<12|(r=O.indexOf(e.charAt(i++)))<<6|(n=O.indexOf(e.charAt(i++))),o+=64===r?String.fromCharCode(t>>16&255):64===n?String.fromCharCode(t>>16&255,t>>8&255):String.fromCharCode(t>>16&255,t>>8&255,255&t);return o}("d2ViZHJpdmVy"))||!!window.callPhantom||!!window._phantom},k=function(){function e(){_(this,e),this.loadedAt=1*new Date,this.webdriver=P()}return S(e,[{key:"teardown",value:function(){}},{key:"data",value:function(){return{loadedAt:this.loadedAt,webdriver:this.webdriver}}}]),e}(),B=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};_(this,e),this.project=t.project,"undefined"!=typeof window&&this.startBrowserSession()}return S(e,[{key:"startBrowserSession",value:function(){this.session||(this.session=new k)}},{key:"teardown",value:function(){this.session&&this.session.teardown()}},{key:"submitForm",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=r.endpoint||"https://formspree.io",o=r.fetchImpl||E()({Promise:x}).fetch,i=this.project?"".concat(n,"/p/").concat(this.project,"/f/").concat(e):"".concat(n,"/f/").concat(e),a=function(e){return e instanceof FormData?e:JSON.stringify(e)},s={Accept:"application/json","Formspree-Client":F(r.clientName)};this.session&&(s["Formspree-Session-Data"]=A(this.session.data())),t instanceof FormData||(s["Content-Type"]="application/json");var c={method:"POST",mode:"cors",body:a(t),headers:s};return o(i,c).then((function(e){return e.json().then((function(t){return{body:t,response:e}}))}))}}]),e}(),C=function(){var e;return T||(T=new B(e)),T};function R(e){return(R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function D(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function I(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function U(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],n=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(n=(a=s.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(c){o=!0,i=c}finally{try{n||null==s.return||s.return()}finally{if(o)throw i}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var L=n.createContext({client:void 0});L.displayName="Formspree";function q(){return(0,n.useContext)(L).client||C()}var M="2.2.4";function H(e){return void 0!==e.preventDefault}var V=function(e){var t=e.prefix,r=e.field,o=e.errors,i=I(e,["prefix","field","errors"]),a=(o||[]).find((function(e){return e.field==r}));return a?n.createElement("div",i,t," ",a.message):null};function z(){var e=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=U((0,n.useState)(!1),2),o=r[0],i=r[1],a=U((0,n.useState)(!1),2),s=a[0],c=a[1],u=U((0,n.useState)([]),2),l=u[0],f=u[1],p=q(),d=t.client||p;if(!d)throw new Error("You must provide a Formspree client");if(!e)throw new Error('You must provide a form key or hashid (e.g. useForm("myForm") or useForm("123xyz")');var m=!!t.debug,h=t.data;return[{submitting:o,succeeded:s,errors:l},function(r){var n=H(r)?function(e){e.preventDefault();var t=e.target;if("FORM"!=t.tagName)throw new Error("submit was triggered for a non-form element");return new FormData(t)}(r):r,o=function(e,t){n instanceof FormData?n.append(e,t):n=Object.assign(n,D({},e,t))};if("object"===R(h))for(var a in h)"function"==typeof h[a]?o(a,h[a].call(null)):o(a,h[a]);return i(!0),d.submitForm(e,n,{endpoint:t.endpoint,clientName:"@formspree/react@".concat(M)}).then((function(e){var t,r=e.response.status;return 200===r?(m&&console.log("Form submitted",e),c(!0),f([])):r>=400&&r<500?((t=e.body).errors&&f(t.errors),m&&console.log("Validation error",e),c(!1)):(m&&console.log("Unexpected error",e),c(!1)),e})).catch((function(e){throw m&&console.log("Unexpected error",e),c(!1),e})).finally((function(){i(!1)}))},function(){i(!1),c(!1),f([])}]}("xgerdven"),t=e[0],r=e[1];return t.succeeded?n.createElement("div",{className:"max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:py-8 lg:px-8"},n.createElement("div",{className:"text-lg mx-auto prose prose-indigo text-gray-500"},n.createElement("div",{className:"mt-12 text-center"},n.createElement("p",null,"Thanks for messaging us!"),n.createElement("p",null,"We'll be in touch to answer your question as soon as possible.")))):n.createElement("div",{className:"max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:py-8 lg:px-8"},n.createElement("div",{className:"text-lg mx-auto prose prose-indigo text-gray-500"},n.createElement("div",{className:"mt-12"},n.createElement("form",{onSubmit:r,className:"grid grid-cols-1 gap-y-6"},n.createElement("div",null,n.createElement("label",{htmlFor:"full-name",className:"block text-sm font-medium text-gray-700"},"Name"),n.createElement("div",{className:"mt-1"},n.createElement("input",{id:"full-name",type:"text",name:"name",required:!0,className:"py-3 px-4 block border w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"}))),n.createElement("div",null,n.createElement("label",{htmlFor:"company",className:"block text-sm font-medium text-gray-700"},"Company"),n.createElement("div",{className:"mt-1"},n.createElement("input",{id:"company",type:"text",name:"company",required:!0,className:"py-3 px-4 block border w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"}))),n.createElement("div",null,n.createElement("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700"},"Email Address"),n.createElement("div",{className:"mt-1"},n.createElement("input",{id:"email",type:"email",name:"email",required:!0,className:"py-3 px-4 block border w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"}),n.createElement(V,{prefix:"Email",field:"email",errors:t.errors}))),n.createElement("div",null,n.createElement("label",{htmlFor:"message",className:"block text-sm font-medium text-gray-700"},"Message"),n.createElement("div",{className:"mt-1"},n.createElement("textarea",{id:"message",name:"message",required:!0,className:"py-3 px-4 block border w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"}),n.createElement(V,{prefix:"Message",field:"message",errors:t.errors}))),n.createElement("button",{type:"submit",disabled:t.submitting,className:"w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},"Let's talk")))))}var G=function(){return n.createElement("div",null,n.createElement(o.Z,null),n.createElement("div",{className:"max-w-7xl mx-auto py-8 px-4 sm:py-8 sm:px-6 lg:px-8"},n.createElement("div",{className:"text-center"},n.createElement("h2",{className:"text-base font-semibold text-blue-600 tracking-wide uppercase"},"Voyager"),n.createElement("h1",{className:"mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl"},"Contact us"),n.createElement("p",{className:"max-w-xl mt-5 mx-auto text-xl text-gray-500"},"If you're interested in the future of travel booking, talk to the team at Voyager."))),n.createElement(z,null),n.createElement(i.Z,null),n.createElement(s(),{buttonText:"Got it!",style:{background:"#1E40AF"},buttonStyle:{background:"#FFFFFF",color:"#1E40AF"}},"This website uses cookies to ensure you get the best experience. ",n.createElement("a",{href:"https://www.cookiesandyou.com/"},"Learn more")))}}}]);
//# sourceMappingURL=component---src-pages-contact-js-44997ba87e2249128c97.js.map