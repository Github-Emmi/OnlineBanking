(self.webpackChunktradingview=self.webpackChunktradingview||[]).push([[76325],{678800:e=>{e.exports={}},167175:(e,t,o)=>{"use strict";o.d(t,{isAndroid:()=>h,isAnyMobile:()=>v,isBlackBerry:()=>p,isChrome:()=>s,isEdge:()=>l,isFF:()=>c,isIOS:()=>f,isIPad:()=>y,isLinux:()=>m,isMac:()=>d,isOperaMini:()=>w,isSafari:()=>g,isWindows:()=>u,mobiletouch:()=>r,touch:()=>a});const n="undefined"!=typeof window&&"undefined"!=typeof navigator,i=n&&"ontouchstart"in window,r=n&&i&&"onorientationchange"in window,a=n&&(i||!!navigator.maxTouchPoints),s=n&&window.chrome&&window.chrome.runtime,c=n&&window.navigator.userAgent.toLowerCase().indexOf("firefox")>-1,l=n&&/\sEdge\/\d\d\b/.test(navigator.userAgent),g=n&&Boolean(navigator.vendor)&&navigator.vendor.indexOf("Apple")>-1&&-1===navigator.userAgent.indexOf("CriOS")&&-1===navigator.userAgent.indexOf("FxiOS"),d=n&&/mac/i.test(navigator.platform),u=n&&/Win32|Win64/i.test(navigator.platform),m=n&&/Linux/i.test(navigator.platform),h=n&&/Android/i.test(navigator.userAgent),p=n&&/BlackBerry/i.test(navigator.userAgent),f=n&&/iPhone|iPad|iPod/.test(navigator.platform),w=n&&/Opera Mini/i.test(navigator.userAgent),y=n&&("MacIntel"===navigator.platform&&navigator.maxTouchPoints>1||/iPad/.test(navigator.platform)),v=h||p||f||w},23580:(e,t,o)=>{"use strict";function n(e,t){return e&&e.utm_campaign&&(e.utm_campaign+=`-${t}`),e}async function i(e,t,n,i){if("lentaru"===e){const{getLentaCopyrightData:e}=await Promise.all([o.e(97171),o.e(1523)]).then(o.bind(o,466672));return e()}if("cmoneycomtw"===e){const{getCmoneycomtwCopyrightData:e}=await Promise.all([o.e(51879),o.e(95933),o.e(42091)]).then(o.bind(o,20922));return e(t,n)}if("new"===i){const{getTradingViewCopyrightData:e}=await Promise.all([o.e(7368),o.e(36228)]).then(o.bind(o,703094));return e(t,n)}if("with_border"===i){const{getTradingViewCopyrightData:e}=await Promise.all([o.e(44949),o.e(37753)]).then(o.bind(o,513316));return e(t,n)}if("large_trade"===i){const{getTradingViewCopyrightData:e}=await Promise.all([o.e(94129),o.e(47259)]).then(o.bind(o,339579));return e(t,n)}{const{getTradingViewCopyrightData:e}=await Promise.all([o.e(51879),o.e(53259)]).then(o.bind(o,88136));return e(t,n)}}o.d(t,{addUtmCampaignSource:()=>n,getCustomerCopyrightData:()=>i})},650401:(e,t,o)=>{"use strict";o.d(t,{getWidgetSheriffActions:()=>g});var n=o(125226),i=o(120780),r=o(201089),a=o(952598);const s=window.WIDGET_SHERIFF_HOST||"https://www.xstaging-widget.tv",c=(0,r.getLogger)("WidgetSheriff.Widget");let l=null;async function g(){return null===l&&(l=await async function(){if(!(0,n.isFeatureEnabled)("widget-sheriff"))return Promise.resolve([]);const e=function(){if(document.location.ancestorOrigins&&document.location.ancestorOrigins.length)return document.location.ancestorOrigins[document.location.ancestorOrigins.length-1];try{return new URL(document.referrer).origin}catch(e){return document.location.origin||null}}();if(null===e)return c.logWarn("ancestorOrigin is undefined"),Promise.resolve([]);const t=new URL("/sheriff/api/v1/rules/search",s)
;t.searchParams.append("origin",e);return(await(0,i.fetch)(t.toJSON()).then((e=>{if(!e.ok)throw new Error("Guard request error occured");return 204===e.status?Promise.resolve({actions:[]}):e.json()})).catch((e=>(c.logWarn(e.message),Promise.resolve({actions:[]}))))).actions.filter((e=>a.widgetSheriffActions.has(e)))}()),Promise.resolve(l)}},175341:(e,t,o)=>{"use strict";o.d(t,{createEmbedWidgetWrapper:()=>c});var n=o(650151),i=o(650401),r=o(351079),a=o(23580),s=o(952598);function c(e,t,o,c={}){if(null===e.parentElement)return console.warn("Can not wrap 'elWidgetContainer' because it has no parentElement"),e;let l=null,g=document.querySelector(".js-embed-widget-body");const d=null!==g;if(d){g=(0,n.ensureNotNull)(g),l=(0,n.ensureNotNull)(g.parentElement);let e=document.querySelector(".js-embed-widget-head");null===e&&(e=document.createElement("div"),e.classList.add("tv-embed-widget-wrapper__header"),e.classList.add("js-embed-widget-head"),l.insertBefore(e,g))}else l=document.createElement("div"),l.classList.add("tv-embed-widget-wrapper"),l.innerHTML='<div class="tv-embed-widget-wrapper__header js-embed-widget-head"></div><div class="tv-embed-widget-wrapper__body js-embed-widget-body"></div>',g=l.querySelector(".js-embed-widget-body");if(c.overflowAuto&&g.classList.add("tv-embed-widget-wrapper__body--overflow_auto"),c.showBorderOnTransparent&&g.classList.add("tv-embed-widget-wrapper__body--border-on-transparent"),!c.isWhiteLabel){!async function(e,t,o,c,l={}){var g,d;const u=l.isSheriffDisabled?[]:await(0,i.getWidgetSheriffActions)(),m=u.includes(s.KnownAction.LargeTradeLogo),h=function(e){return["crypto-coins-heatmap","forex-cross-rates","market-overview","symbol-overview","market-quotes","stock-heatmap","screener","forex-heat-map","crypto-mkt-screener","events","hotlists"].includes(e)}(t),p=m&&h?"large_trade":void 0,f=await(0,a.getCustomerCopyrightData)(l.customer,l.locale,(0,a.addUtmCampaignSource)(c,"logo"),p),w=null!==(d=null!=p?p:null===(g=l.copyrightOptions)||void 0===g?void 0:g.mode)&&void 0!==d?d:"small_old";(0,n.ensureNotNull)(e).appendChild((0,r.createCopyrightLabel)({sheriffOptions:u,snapToEdge:o,...l.copyrightOptions,...f,mode:w}))}(g,t,!document.documentElement.classList.contains("is-transparent")||Boolean(c.showBorderOnTransparent),o,c)}return d||(e.parentElement.insertBefore(l,e),g.appendChild(e)),e}},901107:(e,t,o)=>{"use strict";o.d(t,{createEmbedWidgetWrapper:()=>n.createEmbedWidgetWrapper});o(678800);var n=o(175341)},43464:(e,t,o)=>{"use strict";o.r(t),o.d(t,{bannerPrivacyPreferenceKey:()=>h,checkCookiePolicy:()=>b,checkCookiePolicyInLs:()=>S,cookieBannerDelegate:()=>y,cookieBannerDomain:()=>u,initCookiesNotification:()=>_,oldBannerKey:()=>m,onAccept:()=>k,removeOldCookieBannerKey:()=>v,setCookiePolicy:()=>L,showCookiesNotification:()=>A});var n=o(49437),i=o(314802),r=(o(659863),o(268222)),a=o(220563),s=o(261030),c=o(634786),l=o(66974),g=o(16188);const d=window.location.hostname.split("."),u=(0,l.isLocal)()?"":"."+d.slice(1,d.length).join("."),m="cookieBanner",h=(0,
l.isProd)()?"cookiePrivacyPreferenceBannerProduction":"cookiePrivacyPreferenceBannerLocal",p="accepted",f="ignored",w="notApplicable",y=(0,r.createDeferredPromise)();function v(){return n.TVLocalStorage.removeItem(m)}function b(e){return g.get(e)===p||g.get(e)===w}function S(e){return n.TVLocalStorage.getItem(e)===p||n.TVLocalStorage.getItem(e)===w}function k(){L(p)}function L(e){g.set(h,e,3653,"/",u)}let I=!1;async function A(){if(I)return;const{setCookieStageStatus:e}=await Promise.all([o.e(76805),o.e(92191),o.e(32109),o.e(49205),o.e(56400),o.e(98899),o.e(5919),o.e(81915),o.e(43447),o.e(38869)]).then(o.bind(o,625551));I=!0;const t=await Promise.all([o.e(76805),o.e(92191),o.e(32109),o.e(49205),o.e(56400),o.e(98899),o.e(5919),o.e(81915),o.e(43447),o.e(38869)]).then(o.bind(o,718463));await t.showCookiesNotification()&&(k(),(0,c.trackCookies)("click","accept_all")),e(!0),I=!1}const C=["/symbols"];async function _(){const{setCookieStageStatus:e}=await Promise.all([o.e(76805),o.e(92191),o.e(32109),o.e(49205),o.e(56400),o.e(98899),o.e(5919),o.e(81915),o.e(43447),o.e(38869)]).then(o.bind(o,625551));if(b(h)||(0,i.isOnMobileAppPage)("any")||/^\/streams\/(.+)\/embed/.test(window.location.pathname))e(!0);else{const o=document.querySelector(".js-main-page-promo-container"),n=C.find((e=>window.location.pathname.includes(e)));if(o||n||y.resolve(),n&&window.addEventListener("scroll",(function e(){window.scrollY>=.2*document.documentElement.scrollHeight&&(y.resolve(),window.removeEventListener("scroll",e))})),g.get(h)===f)return s.cookieSettingsReady.resolve(),y.promise.then((()=>A()));{const o=await(0,a.userGeoInfo)();if(o.is_in_european_union||(t=o.country_code,["is","li","no","gb"].includes(t)))return L(f),s.cookieSettingsReady.resolve(),y.promise.then((()=>A()));e(!0),L(w),(0,s.setCookieSetting)(s.CookieSettings.Analytics,!0),(0,s.setCookieSetting)(s.CookieSettings.Advertising,!0)}}var t;s.cookieSettingsReady.resolve()}},975420:(e,t,o)=>{"use strict";o.d(t,{initGA:()=>l});var n=o(251954),i=o(261030),r=o(588948),a=o(638456),s=o(691805);let c=!1;function l(){if(c)return;(0,r.updateInitData)();const e=(0,r.getInitData)();if(!e.gaId)return void(window.gtag=()=>{});c=!0,(0,s.appendScript)(`https://www.googletagmanager.com/gtag/js?id=${(0,r.getInitData)().gaId}`),window.dataLayer=window.dataLayer||[],window.gtag=function(){window.dataLayer.push(arguments)},window.gtag("js",new Date);const t={anonymize_ip:!0};window.TVD&&(t.app_name="TVD",t.app_version=(0,a.desktopAppVersion)()),e.gaVars&&window.gtag("set",e.gaVars),window.gtag("consent","default",{analytics_storage:(0,i.getCookieSetting)(i.CookieSettings.Analytics)?"granted":"denied"}),window.gtag("config",e.gaId,t),n.subscribe(i.cookieSettingsChangeEvent,((e,t)=>{e===i.CookieSettings.Analytics&&window.gtag("consent","update",{analytics_storage:t?"granted":"denied"})}),null)}},691805:(e,t,o)=>{"use strict";o.d(t,{appendScript:()=>i});var n=o(503031);function i(e){const t=document.createElement("script");t.async=!0,t.src=e;const o=(0,n.getCspNonce)()
;return o&&t.setAttribute("nonce",o),document.head.appendChild(t),t}},261030:(e,t,o)=>{"use strict";o.d(t,{CookieSettings:()=>n,cookieSettingsChangeEvent:()=>g,cookieSettingsReady:()=>d,getCookieSetting:()=>w,setCookieSetting:()=>f});var n,i=o(251954),r=o(268222),a=o(49437),s=o(43464),c=o(66974),l=o(16188);!function(e){e.Analytics="analytics",e.Advertising="advertising"}(n||(n={}));const g="cookie_settings_changed",d=(0,r.createDeferredPromise)(),u="cookiesSettings",m="localCookiesSettings",h="cookiePrivacyPreferenceBanner",p={[n.Analytics]:!1,[n.Advertising]:!1};function f(e,t){p[e]=t,l.set((0,c.isProd)()?u:m,JSON.stringify(p),3653,"/",s.cookieBannerDomain),i.emit(g,e,t)}function w(e){return p[e]}function y(){return a.TVLocalStorage.removeItem(h)}!function(){const e=l.get((0,c.isProd)()?u:m),t=a.TVLocalStorage.getItem(h),o=a.TVLocalStorage.getItem(u);if(e){t&&o&&(y(),a.TVLocalStorage.removeItem(u)),(0,s.checkCookiePolicyInLs)(s.oldBannerKey)&&(0,s.removeOldCookieBannerKey)();try{const t=JSON.parse(e);p[n.Analytics]=(null==t?void 0:t[n.Analytics])||!1,p[n.Advertising]=(null==t?void 0:t[n.Advertising])||!1}catch(e){}}else if((0,s.checkCookiePolicyInLs)(s.oldBannerKey)&&(f(n.Analytics,!0),f(n.Advertising,!0),(0,s.onAccept)(),(0,s.removeOldCookieBannerKey)()),t&&o){const e=JSON.parse(o);(0,s.setCookiePolicy)(t),f(n.Analytics,null==e?void 0:e[n.Analytics]),f(n.Advertising,null==e?void 0:e[n.Advertising]),y(),a.TVLocalStorage.removeItem(u)}}()},503031:(e,t,o)=>{"use strict";function n(){const e=document.querySelector("script[nonce]");if(null!==e)return e.getAttribute("nonce")||e.nonce}o.d(t,{getCspNonce:()=>n})},49437:(e,t,o)=>{"use strict";const{getLogger:n}=o(201089),i=n("TVLocalStorage");var r=function(){try{this.isAvailable=!0,this.localStorage=window.localStorage,this.localStorage.setItem("tvlocalstorage.available","true")}catch(e){delete this.isAvailable,delete this.localStorage}this._updateLength();try{this._report()}catch(e){}};r.prototype._report=function(){if(this.isAvailable){const e=10,t=[];for(let e=0;e<this.localStorage.length;e++){const o=this.key(e);t.push({key:o,length:String(this.getItem(o)).length})}t.sort(((e,t)=>t.length-e.length));const o=t.slice(0,e);t.sort(((e,t)=>t.key.length-e.key.length));const n=t.slice(0,e);i.logNormal(`Total amount of keys in Local Storage: ${this.length}`),i.logNormal(`Top ${e} keys with longest values: ${JSON.stringify(o)}`),i.logNormal(`Top ${e} longest key names: ${JSON.stringify(n)}`);try{navigator.storage.estimate().then((e=>{i.logNormal(`Storage estimate: ${JSON.stringify(e)}`)}))}catch(e){}}},r.prototype.length=0,r.prototype.isAvailable=!1,r.prototype.localStorage={"tvlocalstorage.available":"false"},r.prototype._updateLength=function(){if(this.isAvailable)this.length=this.localStorage.length;else{var e,t=0;for(e in this.localStorage)this.localStorage.hasOwnProperty(e)&&t++;this.length=t}},r.prototype.key=function(e){return this.isAvailable?this.localStorage.key(e):Object.keys(this.localStorage)[e]},r.prototype.getItem=function(e){
return this.isAvailable?this.localStorage.getItem(e):void 0===this.localStorage[e]?null:this.localStorage[e]},r.prototype.setItem=function(e,t){this.isAvailable?this.localStorage.setItem(e,t):this.localStorage[e]=t,this._updateLength()},r.prototype.removeItem=function(e){this.isAvailable?this.localStorage.removeItem(e):delete this.localStorage[e],this._updateLength()},r.prototype.clear=function(){this.isAvailable?this.localStorage.clear():this.localStorage={},this._updateLength()};var a=function(e){this.storage=e};a.prototype.getItem=function(e){return Promise.resolve(this.storage.getItem(e))},a.prototype.setItem=function(e,t){return Promise.resolve(this.storage.setItem(e,t))},window.TVLocalStorage=new r,window.TVLocalStorageAsync=new a(window.TVLocalStorage),e.exports={TVLocalStorage:window.TVLocalStorage,TVLocalStorageAsync:window.TVLocalStorageAsync}},314802:(e,t,o)=>{"use strict";o.d(t,{isOnMobileAppPage:()=>i});var n=o(16188);function i(e,t=!1){const{searchParams:o}=new URL(String(location));let i="true"===o.get("mobileapp_new"),r="true"===o.get("mobileapp");if(!t){const e=n.get("tv_app")||"";i||(i=["android","android_nps"].includes(e)),r||(r="ios"===e)}return!("new"!==e&&"any"!==e||!i)||!("new"===e||!r)}},659863:(e,t,o)=>{"use strict";new class{constructor(e,t){this._test=e[t]={}}provide(e,t){this._test[e]=t}}(window,"qaGlobals")},439563:(e,t,o)=>{"use strict";async function n(){const e=(await Promise.all([o.e(70056),o.e(36683)]).then(o.bind(o,449946))).getTrackerInstance();return e||null}o.d(t,{getEmbedWidgetTracker:()=>n})},776734:(e,t,o)=>{"use strict";async function n(){if(!window.user||window.user.do_not_track)return null;{const e=(await Promise.all([o.e(70056),o.e(24081)]).then(o.bind(o,823623))).getTrackerInstance();return e||null}}o.d(t,{getTracker:()=>n})},634786:(e,t,o)=>{"use strict";o.d(t,{trackCookies:()=>i});var n=o(776734);async function i(e,t){var o;let i,r;i="/"===window.location.pathname?"index":window.location.pathname.split("/")[1];const a=null!==(o=window.user.pro_plan)&&void 0!==o?o:window.is_authenticated?"free":"visitor";window.is_authenticated&&(r=window.user.id);const s=await(0,n.getTracker)();s&&s.trackToastDialog("cookies",e,t,i,a,r)}},995683:(e,t,o)=>{"use strict";function n(e,t,o={}){return Object.assign({},e,function(e,t,o={}){const n=Object.assign({},t);for(const i of Object.keys(t)){const r=o[i]||i;r in e&&(n[i]=[e[r],t[i]].join(" "))}return n}(e,t,o))}o.d(t,{mergeThemes:()=>n})},707957:(e,t,o)=>{"use strict";o.d(t,{Delegate:()=>r});const n=(0,o(194582).getLogger)("Common.Delegate");function i(e){return!e.singleShot}class r{constructor(){this.fire=this._fireImpl.bind(this),this._listeners=[]}subscribe(e,t,o){this._listeners.push({object:e,member:t,singleShot:!!o,skip:!1})}unsubscribe(e,t){for(let o=0;o<this._listeners.length;++o){const n=this._listeners[o];if(n.object===e&&n.member===t){n.skip=!0,this._listeners.splice(o,1);break}}}unsubscribeAll(e){for(let t=this._listeners.length-1;t>=0;--t){const o=this._listeners[t];o.object===e&&(o.skip=!0,this._listeners.splice(t,1))}}
destroy(){this._listeners=[]}_fireImpl(...e){const t=this._listeners;this._listeners=this._listeners.filter(i);const o=t.length;for(let i=0;i<o;++i){const o=t[i];if(!o.skip)try{o.member.apply(o.object||null,e)}catch(e){n.logError(`${e&&(e.stack||e.message)}`)}}}}},194582:(e,t,o)=>{"use strict";o.d(t,{LOGLEVEL:()=>r,getLogHistory:()=>S,getLogLevel:()=>f,getLogger:()=>L,getRawLogHistory:()=>v,isHighRateEnabled:()=>w,loggingOff:()=>C,loggingOn:()=>A,serializeLogHistoryEntry:()=>b,setLogLevel:()=>y});const n="undefined"!=typeof window?window:{};let i=!1;try{localStorage.getItem(""),i=!0}catch(e){}var r;!function(e){e[e.ERROR=1]="ERROR",e[e.WARNING=2]="WARNING",e[e.INFO=3]="INFO",e[e.NORMAL=4]="NORMAL",e[e.DEBUG=5]="DEBUG"}(r||(r={}));let a=0;const s="tv.logger.loglevel",c="tv.logger.logHighRate",l=[];let g=null,d=null,u=null,m=NaN,h=r.WARNING,p=!1;function f(){return h}function w(){return p}function y(e){e=Math.max(r.ERROR,Math.min(r.DEBUG,e)),h=e,_()}function v(e,t){let o=l.reduce(((e,t)=>e.concat(t)),[]);return o.sort(((e,t)=>e.id-t.id)),void 0!==t&&(o=o.filter((e=>e.subSystemId===t))),"number"==typeof e&&(o=o.slice(-e)),o}function b(e){return new Date(e.timestamp).toISOString()+":"+e.subSystemId+":"+e.message.replace(/"/g,"'")}const S=n.lget=(e,t)=>function(e,t){let o,n=0,i=0;for(o=e.length-1;o>=1&&(n+=8*(1+encodeURIComponent(e[o]).length),!(o-1>0&&(i=8*(1+encodeURIComponent(e[o-1]).length),n+i>t)));o--);return e.slice(o)}(v(e,t).map(b),75497472);function k(e,t,o,n){if(t===d&&n.id===u)return;const i=new Date;if(e<=r.NORMAL&&function(e,t,o,n,i){"function"==typeof structuredClone&&(t=structuredClone(t));const r={id:a,message:t,subSystemId:n,timestamp:Number(e)};a+=1,o.push(r),void 0!==i&&o.length>i&&o.splice(0,1)}(i,t,o,n.id,n.maxCount),e<=h&&(!n.highRate||w())&&(!g||n.id.match(g))){const o=i.toISOString()+":"+n.id+":"+t;switch(e){case r.DEBUG:console.debug(o);break;case r.INFO:case r.NORMAL:n.color?console.log("%c"+o,"color: "+n.color):console.log(o);break;case r.WARNING:console.warn(o);break;case r.ERROR:console.error(o)}d=t,u=n.id,m&&clearTimeout(m),m=setTimeout((()=>{d=null,u=null,m=NaN}),1e3)}}function L(e,t={}){const o=[];l.push(o);const n=Object.assign(t,{id:e});function i(e){return t=>k(e,String(t),o,n)}return{logDebug:i(r.DEBUG),logError:i(r.ERROR),logInfo:i(r.INFO),logNormal:i(r.NORMAL),logWarn:i(r.WARNING)}}const I=L("logger"),A=n.lon=(e,t)=>{y(r.DEBUG),I.logNormal("Debug logging enabled"),p=Boolean(e),g=t||null,_()},C=n.loff=()=>{y(r.INFO),I.logInfo("Debug logging disabled")};function _(){try{i&&(localStorage.setItem(c,String(p)),localStorage.setItem(s,String(h)))}catch(e){I.logWarn(`Cannot save logger state (level: ${h}, high-rate: ${p}) to localStorage: ${e.message}`)}}!function(){p=!!i&&"true"===localStorage.getItem(c);let e=parseInt(i&&localStorage.getItem(s)||"");Number.isNaN(e)&&(e=r.WARNING),y(e),I.logNormal(`Init with settings - level: ${h}, high-rate: ${p}`)}(),
n.performance&&n.performance.now?I.logNormal(`Sync logger and perf times, now is ${n.performance.now()}`):I.logWarn("Perf time is not available")},318293:(e,t,o)=>{o(778785).setClasses();var n=o(49336).whenDocumentReady,i=o(975420).initGA,r=o(663261).handleTVLinksClick;n((()=>{i(),r()}))},120780:(e,t,o)=>{"use strict";o.d(t,{fetch:()=>i});const n=(0,o(201089).getLogger)("Fetch");function i(e,t,o={}){{const{logOnErrorStatus:i=!0,logBodyOnError:r=!1}=o;t=t||{},function(e){return new URL(e,document.baseURI).origin===location.origin}(e)&&(t.headers?t.headers instanceof Headers||(t.headers=new Headers(t.headers)):t.headers=new Headers,window.locale&&t.headers.set("X-Language",window.locale),t.headers.set("X-Requested-With","XMLHttpRequest")),void 0===t.credentials&&(t.credentials="same-origin");const a=window.fetch(e,t);return a.then((o=>{if(!o.ok&&i){let i="";t.method&&(i+=`${t.method.toUpperCase()} `),i+=e,i+=`. Status ${o.status}`,o.statusText&&(i+=`. ${o.statusText}`),o.headers.via&&(i+=`. Via: ${o.headers.via}`),r&&"string"==typeof t.body&&(i+=`. Body: ${t.body.slice(0,1024)}`),n.logError(i)}return o}),(o=>{if(o&&"AbortError"===o.name)return;let i="";t.method&&(i+=`${t.method.toUpperCase()} `),i+=e,navigator.onLine?i+=`. ${o}`:i+=". User is offline.",n.logError(i)})),a}}},220563:(e,t,o)=>{"use strict";o.d(t,{userGeoInfo:()=>a});var n=o(120780);const i=(0,o(201089).getLogger)("User.GeoInfo");let r;function a(){if(void 0!==r)return r;return r=(0,n.fetch)("/check_language/",{method:"POST"}).then((e=>{if(e.ok)return e.json();throw new Error(e.statusText)})).catch((e=>(i.logWarn(e.message),{}))),r}},16188:(e,t,o)=>{"use strict";function n(e,t,o,n,i){let r="";if(n=n?"; path="+n:"",i=i?"; domain="+i:"",o){const e=new Date;e.setTime(e.getTime()+24*o*60*60*1e3),r="; expires="+e.toUTCString()}else r="";document.cookie=e+"="+t+r+i+n}function i(e){const t=e+"=",o=document.cookie.split(";");for(let e=0;e<o.length;e++){let n=o[e];for(;" "===n.charAt(0);)n=n.substring(1,n.length);if(0===n.indexOf(t))return n.substring(t.length,n.length)}return null}o.d(t,{get:()=>i,set:()=>n})},268222:(e,t,o)=>{"use strict";function n(){let e,t;return{promise:new Promise(((o,n)=>{e=o,t=n})),reject:t,resolve:e}}o.d(t,{createDeferredPromise:()=>n})},501437:(e,t,o)=>{"use strict";function n(e){const t=[];for(const o in e)e.hasOwnProperty(o)&&null!=e[o]&&t.push({key:o,pair:encodeURIComponent(o)+"="+encodeURIComponent(e[o])});return t.sort(((e,t)=>e.key>t.key?1:e.key<t.key?-1:0)).map((e=>e.pair)).join("&")}o.d(t,{createUrlParams:()=>n})},185515:(e,t,o)=>{"use strict";o.d(t,{buildUtmQueryString:()=>s,filterUtmInfo:()=>a});var n=o(501437),i=o(919476);const r=["utm_source","utm_medium","utm_campaign"];function a(e){const t={};return r.forEach((o=>{const n=e[o];"string"==typeof n&&""!==n&&(t[o]=(0,i.htmlEscape)(n))})),t}function s(e,t=!1){const o=(0,n.createUrlParams)(e);return o&&t?"?"+o:o}},49336:(e,t,o)=>{"use strict";function n(e,t=!1){"loading"!==document.readyState?t?setTimeout((()=>e()),1):e():document.addEventListener("DOMContentLoaded",(()=>e()))}
o.d(t,{whenDocumentReady:()=>n});new Promise((e=>{n(e)}))}}]);