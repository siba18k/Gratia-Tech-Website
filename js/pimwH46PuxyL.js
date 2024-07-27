window["commonninja-js-sdk"]=function(e){function t(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=7)}([function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return r})),n.d(t,"f",(function(){return c})),n.d(t,"c",(function(){return l})),n.d(t,"d",(function(){return s})),n.d(t,"e",(function(){return d}));var i,o,r,a=n(1);!function(e){e.INSTALL="INSTALL",e.REQUEST="REQUEST",e.IMPRESSION="IMPRESSION",e.VIEW="VIEW"}(i||(i={})),function(e){e.CLICK="click",e.HOVER="hover",e.SCROL="scroll"}(o||(o={})),function(e){e.CLIENT="client",e.ENGAGEMENT="engagement"}(r||(r={}));var c="CommonNinja",l="cn_uc__",s=Object(a.b)("cnApiBaseUrl"),d={COMMONNINJA_PLUGIN_LOADED:"COMMONNINJA_PLUGIN_LOADED",COMMONNINJA_PLUGIN_REQUESTED_DATA:"COMMONNINJA_PLUGIN_REQUESTED_DATA",COMMONNINJA_HANDLE_GLOBAL_WIDGET:"COMMONNINJA_HANDLE_GLOBAL_WIDGET",COMMONNINJA_DIMENSIONS_UPDATE:"COMMONNINJA_DIMENSIONS_UPDATE",COMMONNINJA_STYLES_UPDATE:"COMMONNINJA_STYLES_UPDATE",COMMONNINJA_PARENT_WINDOW_SCROLL:"COMMONNINJA_PARENT_WINDOW_SCROLL",COMMONNINJA_ENGAGEMENT_EVENT:"COMMONNINJA_ENGAGEMENT_EVENT",COMMONNINJA_OPEN_POPUP:"COMMONNINJA_OPEN_POPUP",COMMONNINJA_UPDATE_POPUP_STYLES:"COMMONNINJA_UPDATE_POPUP_STYLES",COMMONNINJA_UPDATE_POPUP_URL:"COMMONNINJA_UPDATE_POPUP_URL",COMMONNINJA_DISPATCH_ACTION_TO_FRAME:"COMMONNINJA_DISPATCH_ACTION_TO_FRAME",COMMONNINJA_CLOSE_POPUP:"COMMONNINJA_CLOSE_POPUP",COMMONNINJA_USER_CONTEXT_UPDATED:"COMMONNINJA_USER_CONTEXT_UPDATED",COMMONNINJA_SCROLL_TO:"COMMONNINJA_SCROLL_TO"}},function(e,t,n){"use strict";function i(){return window.location.href}t.c=i,t.b=function(e){if(window[e])return window[e];try{return new URL(i()).searchParams.get(e)||(null===window||void 0===window?void 0:window.localStorage.getItem(e))||""}catch(e){}return""},t.a=function(e,t){var n="";try{var i=new URL(e).searchParams,o=decodeURIComponent(i.get("cnPluginPath")||"");o.includes(",")||o.includes(":")?o.split(",").forEach((function(e){var i=e.split(":"),o=i[0],r=i[1];o===t&&(n=r||"")})):n=o}catch(e){}return n.startsWith("/")&&(n=n.substring(1)),n}},function(e,t,n){"use strict";function i(e,t){var n;(null===(n=null==e?void 0:e.contentWindow)||void 0===n?void 0:n.postMessage)?e.contentWindow.postMessage(JSON.stringify(t),"*"):window.postMessage(JSON.stringify(t),"*")}function o(e){var t=window[r.f].installedPlugins[e];if(!t||!t.widgetElm)return Object(c.a)('Could not report view for plugin "'+e+'".'),{bounding:{},inViewport:!1};var n=t.placeholderElm.getBoundingClientRect()||{},i=function(e){var t=window.innerHeight||document.documentElement.clientHeight;return 100*(Math.min(e.bottom,t)-Math.max(e.top,0))/e.height>=0}(n);return(null==t?void 0:t.reportedEvents.indexOf(r.a.IMPRESSION))>=0&&t.reportedEvents.indexOf(r.a.VIEW)<0&&i&&(Object(c.a)("Reporting view for plugin",t.id),Object(a.d)(t.id,r.b.CLIENT,r.a.VIEW)),{bounding:n,inViewport:i}}t.c=i,t.a=function(){var e=window.addEventListener?"addEventListener":"attachEvent";(0,window[e])("attachEvent"===e?"onmessage":"message",(function(e){if(e.data){var t=e.data;try{"string"==typeof e.data&&(t=JSON.parse(e.data))}catch(e){return}if(Object(c.a)("Received message from widget "+t.compId,null==t?void 0:t.type),!t.compId)return;switch(t.type){case r.e.COMMONNINJA_HANDLE_GLOBAL_WIDGET:!function(e,t,n){var i,o,a,l,s,d,u;if(void 0===n&&(n=!1),!window[r.f].installedPlugins[e]){Object(c.a)("Installing global widget",e);var f=document.createElement("div");if(f.className="commonninja_component pid-"+e,n||document.body.appendChild(f),!t||t.includes("srcdoc"))for(var w=document.getElementsByTagName("iframe"),p=0;p<w.length;p++){var v=w[p];try{if(v.contentWindow){var m=null===(i=v.contentDocument)||void 0===i?void 0:i.querySelector(".pid-"+e);m&&(n&&(null===(o=v.parentElement)||void 0===o||o.appendChild(f)),null===(l=null===(a=v.contentWindow.CommonNinja)||void 0===a?void 0:a.destroy)||void 0===l||l.call(a),v.style.display="none",m.remove(),null===(s=window[r.f])||void 0===s||s.init());break}}catch(e){}}var h=document.querySelector('iframe[src="'+t+'"]');h&&(h.style.display="none",n&&(null===(d=h.parentElement)||void 0===d||d.appendChild(f))),null===(u=window[r.f])||void 0===u||u.init()}}(t.compId,t.iframeSrc,t.preservePosition);break;case r.e.COMMONNINJA_DIMENSIONS_UPDATE:!function(e,t,n){var i=window[r.f].installedPlugins[e];if(i){var o=i.frameElm||i.placeholderElm.querySelector("iframe");o&&("number"==typeof t&&(o.style.height=t+"px",o.style.minHeight=t+"px"),"number"==typeof n&&(o.style.width=n+"px"))}}(t.compId,t.height,t.width);break;case r.e.COMMONNINJA_STYLES_UPDATE:!function(e,t,n){void 0===t&&(t={}),void 0===n&&(n="wrapper");var i=window[r.f].installedPlugins[e];if(i){var o=i.frameElm||i.placeholderElm.querySelector("iframe");o&&Object.keys(t).forEach((function(e){"wrapper"!==n&&"both"!==n||(o.style[e]=t[e]),"iframe"!==n&&"both"!==n||(i.placeholderElm.style[e]=t[e])}))}}(t.compId,t.styles,t.elmToUpdate);break;case r.e.COMMONNINJA_SCROLL_TO:!function(e,t,n){if(Object(c.a)("scroll triggered",t,n),"top"===t)window.scroll({behavior:"smooth",top:0});else if("bottom"===t)window.scroll({behavior:"smooth",top:window.outerHeight});else{var i=document.querySelector(n.selector);if(!i)return;window.scroll({behavior:"smooth",top:i.offsetTop})}}(t.compId,t.scrollType,t.scrollParams);break;case r.e.COMMONNINJA_PLUGIN_REQUESTED_DATA:Object(a.d)(t.compId,r.b.CLIENT,r.a.REQUEST);break;case r.e.COMMONNINJA_PLUGIN_LOADED:Object(a.d)(t.compId,r.b.CLIENT,r.a.IMPRESSION),o(t.compId);break;case r.e.COMMONNINJA_ENGAGEMENT_EVENT:Object(a.d)(t.compId,r.b.ENGAGEMENT,t.eventType,{eventVersion:t.version||"",eventSubType:t.eventSubType,entityPath:t.entityPath});break;case r.e.COMMONNINJA_OPEN_POPUP:!function(e,t,n,i){if(void 0===n&&(n={}),void 0===i&&(i={}),!document.querySelector("#"+(e||""))){var o=document.createElement("iframe");Object.keys(i).forEach((function(e){o.style[e]=i[e]})),o.frameBorder="0",o.src=t,o.id=e+"-iframe";var r=document.createElement("div");Object.keys(n).forEach((function(e){r.style[e]=n[e]})),r.id=e,r.appendChild(o),document.body.appendChild(r)}}(t.popupId,t.url,t.overlayStyles,t.iframeStyles);break;case r.e.COMMONNINJA_UPDATE_POPUP_STYLES:!function(e,t,n){void 0===t&&(t={}),void 0===n&&(n={});var i=document.querySelector("#"+e+"-iframe");i&&Object.keys(n).forEach((function(e){i.style[e]=n[e]}));var o=document.querySelector("#"+e);o&&Object.keys(t).forEach((function(e){o.style[e]=t[e]}))}(t.popupId,t.overlayStyles,t.iframeStyles);break;case r.e.COMMONNINJA_UPDATE_POPUP_URL:!function(e,t){var n=document.querySelector("#"+e+"-iframe");n&&(n.src=t)}(t.popupId,t.url);break;case r.e.COMMONNINJA_CLOSE_POPUP:!function(e){var t=document.querySelector("#"+e);t&&(t.outerHTML="")}(t.popupId);break;case r.e.COMMONNINJA_DISPATCH_ACTION_TO_FRAME:var n=document.querySelector("#"+t.frameId);n?("IFRAME"!==n.tagName&&(n=n.querySelector("iframe")),i(n,t.actionData)):Object(c.a)('Could not find frame "#'+t.frameId+'"')}}}),!1)},t.b=o;var r=n(0),a=n(5),c=n(3)},function(e,t,n){"use strict";t.a=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=Object(i.b)("cnDebug");"true"!==n&&!0!==n||console.log.apply(console,e)};var i=n(1)},function(e,t,n){"use strict";t.a=function(e,t){return i(this,void 0,void 0,(function(){var n;return o(this,(function(i){try{(n=new XMLHttpRequest).open("GET",e),n.send(),n.onreadystatechange=function(){if(4===this.readyState){var e;e=200===this.status?n.responseText:JSON.stringify({success:!1,message:"Could not make request."}),t&&t(e)}}}catch(e){t&&t(JSON.stringify({success:!1,message:e.message||"Could not make request."}))}return[2]}))}))};var i=this&&this.__awaiter||function(e,t,n,i){function o(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,r){function a(e){try{l(i.next(e))}catch(e){r(e)}}function c(e){try{l(i.throw(e))}catch(e){r(e)}}function l(e){e.done?n(e.value):o(e.value).then(a,c)}l((i=i.apply(e,t||[])).next())}))},o=this&&this.__generator||function(e,t){function n(e){return function(t){return i([e,t])}}function i(n){if(o)throw new TypeError("Generator is already executing.");for(;l;)try{if(o=1,r&&(a=2&n[0]?r.return:n[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,n[1])).done)return a;switch(r=0,a&&(n=[2&n[0],a.value]),n[0]){case 0:case 1:a=n;break;case 4:return l.label++,{value:n[1],done:!1};case 5:l.label++,r=n[1],n=[0];continue;case 7:n=l.ops.pop(),l.trys.pop();continue;default:if(!(a=(a=l.trys).length>0&&a[a.length-1])&&(6===n[0]||2===n[0])){l=0;continue}if(3===n[0]&&(!a||n[1]>a[0]&&n[1]<a[3])){l.label=n[1];break}if(6===n[0]&&l.label<a[1]){l.label=a[1],a=n;break}if(a&&l.label<a[2]){l.label=a[2],l.ops.push(n);break}a[2]&&l.ops.pop(),l.trys.pop();continue}n=t.call(e,l)}catch(e){n=[6,e],r=0}finally{o=a=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}var o,r,a,c,l={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return c={next:n(0),throw:n(1),return:n(2)},"function"==typeof Symbol&&(c[Symbol.iterator]=function(){return this}),c}},function(e,t,n){"use strict";function i(e){var t=null===window||void 0===window?void 0:window.location.pathname,n=Object(f.a)();n.lastActivity=Date.now(),n.websiteSession.clicks+=1,n.pageSession[t]&&(n.pageSession[t].clicks+=1);var i=e.target,o=i.tagName,r=i.id,a=i.classList;n.lastElementClick=[o.toLowerCase()],r&&n.lastElementClick.push("#"+r),a.length>0&&(n.lastElementClick=v(v([],n.lastElementClick),a.toString().split(" ").map((function(e){return"."+e})))),Object(d.a)("lastElementClick",n.lastElementClick),Object(f.c)(n),window.setTimeout((function(){var e=Object(f.a)();e.lastElementClick=[],Object(d.a)("resetting lastElementClick",e.lastElementClick),Object(f.c)(e);var t=null===window||void 0===window?void 0:window.location.href;e.currentUrl!==t&&(Object(d.a)("Route was changed to",t),window[c.f].init())}),1500)}function o(e){var t=Object(f.a)();if(!e.toElement&&!e.relatedTarget){if(t.hasExitIntent)return;t.hasExitIntent=!0,Object(f.c)(t)}}function r(e){var t=Object(f.a)();t.hasExitIntent&&(t.hasExitIntent=!1,Object(f.c)(t))}function a(){h||(Object(d.a)("Route changed."),h=!0,window.setTimeout((function(){window[c.f].destroy(void 0,!0),window[c.f].init(),h=!1}),1e3))}t.a=function(){var e=this;document.addEventListener("click",i.bind(this)),setTimeout((function(){document.addEventListener("mouseout",o.bind(e)),document.addEventListener("mouseover",r.bind(e))}),5e3),document.addEventListener("scroll",m)},t.c=function(){var e=history.pushState;history.pushState=function(){var t=e.apply(this,arguments);return window.dispatchEvent(new Event("pushstate")),window.dispatchEvent(new Event("locationchange")),t};var t=history.replaceState;history.replaceState=function(){var e=t.apply(this,arguments);return window.dispatchEvent(new Event("replacestate")),window.dispatchEvent(new Event("locationchange")),e},window.addEventListener("popstate",(function(){window.dispatchEvent(new Event("locationchange"))})),window.addEventListener("hashchange",a,!1),window.addEventListener("locationchange",a,!1)},t.b=function(e){if(void 0===e&&(e=500),"undefined"==typeof PerformanceObserver)return Object(d.a)("PerformanceObserver is not supported."),!0;var t;new PerformanceObserver((function(n){n.getEntries().filter((function(e){return"xmlhttprequest"===e.initiatorType})).forEach((function(n){t&&clearTimeout(t),t=setTimeout((function(){Object(d.a)("(idle) After "+e/1e3+" sec"),n.name.includes("www.commoninja.com")||n.name.includes("cdn.commoninja.com")?Object(d.a)("Skipping init for",n.name):window[c.f].init()}),e)}))})).observe({entryTypes:["resource"]})},t.d=function(e,t,n,i){return w(this,void 0,void 0,(function(){var o,r,a,s,d,f;return p(this,(function(w){if(o=window[c.f].installedPlugins[e],r=encodeURIComponent(Object(u.c)()),o&&o.muteEvents)return[2];if(t===c.b.CLIENT&&(null==o||o.reportedEvents.push(n)),a=c.d||"https://www.commoninja.com",s="",i&&"object"==typeof i)for(d in i)f="object"==typeof i[d]?JSON.stringify(i[d]):i[d],s+="&"+d+"="+f;return Object(l.a)(a+"/api/v1/event/report/"+e+"?groupType="+t+"&eventType="+n+s+"&refUrl="+r),[2]}))}))};var c=n(0),l=n(4),s=n(2),d=n(3),u=n(1),f=n(6),w=this&&this.__awaiter||function(e,t,n,i){function o(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,r){function a(e){try{l(i.next(e))}catch(e){r(e)}}function c(e){try{l(i.throw(e))}catch(e){r(e)}}function l(e){e.done?n(e.value):o(e.value).then(a,c)}l((i=i.apply(e,t||[])).next())}))},p=this&&this.__generator||function(e,t){function n(e){return function(t){return i([e,t])}}function i(n){if(o)throw new TypeError("Generator is already executing.");for(;l;)try{if(o=1,r&&(a=2&n[0]?r.return:n[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,n[1])).done)return a;switch(r=0,a&&(n=[2&n[0],a.value]),n[0]){case 0:case 1:a=n;break;case 4:return l.label++,{value:n[1],done:!1};case 5:l.label++,r=n[1],n=[0];continue;case 7:n=l.ops.pop(),l.trys.pop();continue;default:if(!(a=(a=l.trys).length>0&&a[a.length-1])&&(6===n[0]||2===n[0])){l=0;continue}if(3===n[0]&&(!a||n[1]>a[0]&&n[1]<a[3])){l.label=n[1];break}if(6===n[0]&&l.label<a[1]){l.label=a[1],a=n;break}if(a&&l.label<a[2]){l.label=a[2],l.ops.push(n);break}a[2]&&l.ops.pop(),l.trys.pop();continue}n=t.call(e,l)}catch(e){n=[6,e],r=0}finally{o=a=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}var o,r,a,c,l={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return c={next:n(0),throw:n(1),return:n(2)},"function"==typeof Symbol&&(c[Symbol.iterator]=function(){return this}),c},v=this&&this.__spreadArray||function(e,t){for(var n=0,i=t.length,o=e.length;n<i;n++,o++)e[o]=t[n];return e},m=function(e,t){var n;return function(){n&&clearTimeout(n),n=setTimeout(e,50)}}((function(){!function(){if(!document.body)return!0;var e=window.scrollY/((document.body.scrollHeight||document.body.offsetHeight||0)-window.innerHeight),t=Math.round(100*e);Object(f.d)({scrollPercantage:t,lastActivity:Date.now()}),Object.keys(window[c.f].installedPlugins).map((function(e){var t=window[c.f].installedPlugins[e];t.widgetElm||(window[c.f].installedPlugins[e].widgetElm=t.placeholderElm.querySelector("div:first-child"),t.widgetElm=t.placeholderElm.querySelector("div:first-child"));var n=Object(s.b)(e),i=n.bounding,o=n.inViewport;return i&&t.widgetElm?(Object(s.c)(t.widgetElm,{inViewport:o,type:c.e.COMMONNINJA_PARENT_WINDOW_SCROLL,fromTop:i.top,windowHeight:window.innerHeight,compId:t.id}),t):void Object(d.a)('Could not calculate bounding for plugin "'+e+'".')}))}()})),h=!1},function(e,t,n){"use strict";function i(){return/iPhone|iPad|iPod|Android/i.test((null===navigator||void 0===navigator?void 0:navigator.userAgent)||"")?"mobile":"desktop"}function o(){var e,t,n,o;return{country:"",language:(null===(e=null===navigator||void 0===navigator?void 0:navigator.languages)||void 0===e?void 0:e[0])||(null===navigator||void 0===navigator?void 0:navigator.language)||"en-US",timezone:(null===(o=null===(n=null===(t=null===Intl||void 0===Intl?void 0:Intl.DateTimeFormat)||void 0===t?void 0:t.call(Intl))||void 0===n?void 0:n.resolvedOptions)||void 0===o?void 0:o.call(n).timeZone)||"",domain:null===window||void 0===window?void 0:window.location.origin,currentUrl:null===window||void 0===window?void 0:window.location.href,currentPage:null===window||void 0===window?void 0:window.location.pathname,device:i(),lastActivity:Date.now(),pageSession:{},scrollPercantage:0,hasExitIntent:!1,lastElementClick:[],websiteSession:{firstVisit:Date.now(),lastVisit:Date.now(),clicks:0,pages:0,visits:0},widgetSession:{},version:1,dimensions:{width:window.innerWidth,height:window.outerHeight}}}function r(){try{var e=null===window||void 0===window?void 0:window.localStorage.getItem(l.c);return e?JSON.parse(e):o()}catch(e){return null}}function a(e){try{null===window||void 0===window||window.localStorage.setItem(l.c,JSON.stringify(e))}catch(e){}return Object.keys(window[l.f].installedPlugins).map((function(t){var n=window[l.f].installedPlugins[t];return Object(s.c)(n.frameElm||n.widgetElm,{type:l.e.COMMONNINJA_USER_CONTEXT_UPDATED,compId:n.id,userContext:e}),n})),e}function c(e){a(d(d({},r()),e))}t.a=r,t.c=a,t.b=function(){var e,t=r();t||(t=o());var n=null===window||void 0===window?void 0:window.location.href,c=null===window||void 0===window?void 0:window.location.pathname;t.hasExitIntent=!1,t.currentUrl=n,t.currentPage=c,t.domain=null===window||void 0===window?void 0:window.location.origin,t.device=i(),t.lastActivity=Date.now(),t.websiteSession=d(d({},t.websiteSession),{lastVisit:Date.now(),clicks:0,visits:((null===(e=t.websiteSession)||void 0===e?void 0:e.visits)||0)+1}),t.pageSession||(t.pageSession={}),t.pageSession[c]||(t.pageSession[c]={clicks:0,visits:0,firstVisit:Date.now(),lastVisit:Date.now()},t.websiteSession.pages+=1),t.pageSession[c].lastVisit=Date.now(),t.pageSession[c].clicks=0,t.pageSession[c].visits+=1,t.widgetSession||(t.widgetSession={}),t.dimensions||(t.dimensions={}),t.dimensions.width=window.innerWidth,t.dimensions.height=window.outerHeight,a(t),window.setTimeout((function(){a(t)}),1e3)},t.d=c,t.e=function(e){var t,n,i,o=(null===(n=r())||void 0===n?void 0:n.widgetSession)||{},a=(null===(i=o[e])||void 0===i?void 0:i.views)||[];a.length>100&&a.splice(0,a.length-100),c({widgetSession:d(d({},o),(t={},t[e]={views:u(u([],a),[Date.now()])},t))})};var l=n(0),s=n(2),d=this&&this.__assign||function(){return d=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},d.apply(this,arguments)},u=this&&this.__spreadArray||function(e,t){for(var n=0,i=t.length,o=e.length;n<i;n++,o++)e[o]=t[n];return e}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),o=n(4),r=n(5),a=n(2),c=n(3),l=n(1),s=n(6),d=this&&this.__awaiter||function(e,t,n,i){function o(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,r){function a(e){try{l(i.next(e))}catch(e){r(e)}}function c(e){try{l(i.throw(e))}catch(e){r(e)}}function l(e){e.done?n(e.value):o(e.value).then(a,c)}l((i=i.apply(e,t||[])).next())}))},u=this&&this.__generator||function(e,t){function n(e){return function(t){return i([e,t])}}function i(n){if(o)throw new TypeError("Generator is already executing.");for(;l;)try{if(o=1,r&&(a=2&n[0]?r.return:n[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,n[1])).done)return a;switch(r=0,a&&(n=[2&n[0],a.value]),n[0]){case 0:case 1:a=n;break;case 4:return l.label++,{value:n[1],done:!1};case 5:l.label++,r=n[1],n=[0];continue;case 7:n=l.ops.pop(),l.trys.pop();continue;default:if(!(a=(a=l.trys).length>0&&a[a.length-1])&&(6===n[0]||2===n[0])){l=0;continue}if(3===n[0]&&(!a||n[1]>a[0]&&n[1]<a[3])){l.label=n[1];break}if(6===n[0]&&l.label<a[1]){l.label=a[1],a=n;break}if(a&&l.label<a[2]){l.label=a[2],l.ops.push(n);break}a[2]&&l.ops.pop(),l.trys.pop();continue}n=t.call(e,l)}catch(e){n=[6,e],r=0}finally{o=a=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}var o,r,a,c,l={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return c={next:n(0),throw:n(1),return:n(2)},"function"==typeof Symbol&&(c[Symbol.iterator]=function(){return this}),c},f=this&&this.__spreadArray||function(e,t){for(var n=0,i=t.length,o=e.length;n<i;n++,o++)e[o]=t[n];return e};!function(){function e(e){return d(this,void 0,void 0,(function(){return u(this,(function(t){return[2,new Promise((function(t){var n=Object(l.b)("cnDisableCache"),r=i.d;r||(r="https://"+("true"===n||!0===n?"www":"cdn")+".commoninja.com");var a=r+"/api/v1/embed/"+e.id;e.type&&(a+="?componentType="+e.type),Object(o.a)(a,(function(e){t(e)}))}))]}))}))}function t(e){var t,n,i=document.querySelector(h+".pid-"+e+" iframe")||document.querySelector(h+'[comp-id="'+e+'"] iframe')||document.querySelector(h+".pid-"+e+" div")||document.querySelector(h+'[comp-id="'+e+'"] div')||(null===(t=document.querySelector(h+".pid-"+e))||void 0===t?void 0:t.shadowRoot)||(null===(n=document.querySelector(h+'[comp-id="'+e+'"]'))||void 0===n?void 0:n.shadowRoot);if(i)return i;var o=Array.from(function(){for(var e,t=[],n=document.getElementsByTagName("iframe"),i=0;i<n.length;i++){var o=n[i];try{if(o.contentDocument){var r=null===(e=o.contentDocument)||void 0===e?void 0:e.querySelector(h);r?(r.frameContext="iframe-doc",r.frameElm=o,t.push(r)):o.onload=function(){m()}}}catch(e){Object(c.a)("Error while trying to access iframe contentDocument",e)}}return t}()).filter((function(t){var n=t.getAttribute("comp-id");try{n||t.classList.forEach((function(e){var t;e.startsWith("pid-")&&(t=e.split("pid-"),n=t[1])}))}catch(t){}return e===n}))[0];return o?o.querySelector("iframe")||o.querySelector("div")||o.shadowRoot:null}function n(n){var o;return d(this,void 0,void 0,(function(){var d,f,w,p,v,m,h,g,E,N,b,y;return u(this,(function(u){switch(u.label){case 0:return"iframe-src"===n.frameContext?(Object(c.a)('Plugin "'+n.id+'" is in iframe-src context, no need to install'),[2]):O[n.id].processing?(Object(c.a)('Plugin "'+n.id+'" is already processing'),[2]):(O[n.id].processing=!0,(d=t(n.id))?(Object(c.a)('Plugin "'+n.id+'" was already installed.'),n.widgetElm=d,O[n.id].processing=!1,[2]):(Object(c.a)('Installing plugin "'+n.id+'".'),"border: none; margin: 0; padding: 0; background: none; transition: all 0.2s ease;",f="border: none; margin: 0; padding: 0; background: none; transition: all 0.2s ease;;",w=Object(l.a)(n.refUrl,n.id),p=n.props||"",v=encodeURIComponent(n.refUrl.split("?")[0]),m="refUrl="+v+"&props="+encodeURIComponent(p),n.placeholderElm.style.webkitOverflowScrolling="touch",n.placeholderElm.style.transition="all 0.2s ease",[4,e(n)]));case 1:return h=u.sent(),g=JSON.parse(h),E=g.success,N=g.message,b=g.data,E&&b.html?("iframe"===(y=b.renderMode||"iframe")?(n.placeholderElm.innerHTML='<iframe\n\t\t\tstyle="'+f+'"\n\t\t\ttitle="Common Ninja\'s Widget"\n\t\t\tframeborder="0"\n\t\t\tsrc="'+b.html+"/"+w+"?"+m+'"\n\t\t\tloading="eager"\n\t\t\tallowfullscreen\n\t\t\tscrolling="no"\n\t\t>\n\t\t</iframe>',n.widgetElm=n.placeholderElm.querySelector("iframe"),n.widgetElm.onload=function(){Object(a.c)(n.widgetElm,{type:i.e.COMMONNINJA_USER_CONTEXT_UPDATED,compId:n.id,userContext:Object(s.a)()})}):("crawler"===y&&(n.muteEvents=!0),null===(o=window.CommonNinjaWidgetRenderer)||void 0===o||o.call(window,{elm:n.placeholderElm,componentType:b.widgetData.pluginData.type,widgetId:b.widgetData.pluginData.guid,defaultData:b.widgetData.pluginData,ssrMeta:b.widgetData.appMeta,showAds:!b.adsRemoval}),n.widgetElm=n.placeholderElm.shadowRoot||n.placeholderElm.querySelector("div:first-child")),(null==n?void 0:n.reportedEvents.indexOf(i.a.INSTALL))<0&&(Object(s.e)(n.id),Object(r.d)(n.id,i.b.CLIENT,i.a.INSTALL)),O[n.id].processing=!1,[2]):(n.placeholderElm.innerHTML='<div class="cn-error" style="text-align: center">'+(N||"Could not load app.")+"</div>",n.widgetElm=n.placeholderElm.querySelector("iframe")||n.placeholderElm.querySelector("div:first-child"),[2])}}))}))}function w(){return d(this,void 0,void 0,(function(){var e,t=this;return u(this,(function(i){switch(i.label){case 0:return[4,p()];case 1:return i.sent(),e=Object.keys(O).map((function(e){return d(t,void 0,void 0,(function(){return u(this,(function(t){switch(t.label){case 0:return[4,n(O[e])];case 1:return t.sent(),[2]}}))}))})),[4,Promise.all(e)];case 2:return i.sent(),[2]}}))}))}function p(){return d(this,void 0,void 0,(function(){return u(this,(function(e){return[2,new Promise((function(e){var t=(i.d||"https://cdn.commoninja.com")+"/scripts/sdk/main.js";try{var n=Object(l.b)("cnWidgetRendererUrl");n&&(t+="?cnWidgetRendererUrl="+encodeURIComponent(n))}catch(e){}if(g.includes(t))return e(!0);var o=document.createElement("script");o.src=t,o.id="cn-main-script",o.onload=function(){e(!0)},document.body?document.body.appendChild(o):window.setTimeout((function(){document.body.appendChild(o)}),100),g.push(t)}))]}))}))}function v(e,n){var i,o,r,a;return d(this,void 0,void 0,(function(){return u(this,(function(l){return Object(c.a)("Destroying widget "+e+"..."),n&&t(e)?(Object(c.a)("Skipping destroy for populated widget",e),[2]):(null===(o=null===(i=window.CommonNinjaWidgetRoots)||void 0===i?void 0:i[e])||void 0===o||o.unmount(),null===(r=window.CommonNinjaWidgetRoots)||void 0===r||delete r[e],(null===(a=null==O?void 0:O[e])||void 0===a?void 0:a.placeholderElm)&&(O[e].placeholderElm.innerHTML=""),null==O||delete O[e],[2])}))}))}function m(){return d(this,void 0,void 0,(function(){return u(this,(function(e){switch(e.label){case 0:return Object(c.a)("Initializing..."),function(){var e=f([],Array.from(document.querySelectorAll(h)));Object(c.a)("Found "+e.length+" plugins on page."),e.forEach((function(e,t){var n=e.getAttribute("comp-id");try{n||e.classList.forEach((function(e){var t;e.startsWith("pid-")&&(t=e.split("pid-"),n=t[1])}))}catch(e){}if(O[n])Object(c.a)('Plugin "'+n+'" was already initiated.');else{var i={id:n,placeholderElm:e,widgetElm:null,type:e.getAttribute("comp-type")||"",refUrl:Object(l.c)(),muteEvents:e.hasAttribute("mute-events"),reportedEvents:[],processing:!1,frameContext:e.frameContext||null,frameElm:e.frameElm||null,props:e.getAttribute("comp-props")||""};i.id&&(O[i.id]=i)}}))}(),[4,w()];case 1:return e.sent(),E||(E=!0,Object(r.b)(),Object(r.c)(),Object(r.a)(),Object(a.a)()),Object(s.b)(),[2]}}))}))}if(void 0===window[i.f]||!window[i.f].loaded){var h=".commonninja_component",O={},g=[],E=!1;window[i.f]={loaded:!0,init:m,destroy:function(e,t){return d(this,void 0,void 0,(function(){return u(this,(function(n){return e?(v(e,t),[2]):(Object(c.a)("Destroying all..."),Object.keys(O).forEach((function(e){v(e,t)})),[2])}))}))},reload:function(e){return d(this,void 0,void 0,(function(){return u(this,(function(t){return window[i.f].destroy(e),window[i.f].init(),[2]}))}))},installedPlugins:O},document.addEventListener("DOMContentLoaded",(function(){window[i.f].init()}),!1),window[i.f].init(),window.setTimeout((function(){window[i.f].init()}),2e3)}}()}]).default;