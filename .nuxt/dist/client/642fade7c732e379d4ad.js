(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{229:function(t,e,r){"use strict";e.a=function(t,e){var r;if("NGN"===e)r=Intl.NumberFormat("en-NG",{style:"currency",currency:"NGN"});else{if("USD"!==e)throw new Error("Unrecognized currency specification: "+e);r=Intl.NumberFormat("en-US",{style:"currency",currency:"USD"})}return r.format(t)}},230:function(t,e,r){"use strict";var n=r(245),o=r.n(n);e.a=o.a.create({level:4})},245:function(t,e,r){t.exports=function(){"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function r(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function s(t){return function(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var o={fatal:{level:0},error:{level:0},warn:{level:1},log:{level:2},info:{level:3},success:{level:3},debug:{level:4},trace:{level:5},silent:{level:1/0},ready:{level:3},start:{level:3}},c=!1,a=[],u=function(){function e(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};for(var n in t(this,e),this._reporters=r.reporters||[],this._types=r.types||o,this._level=null!=r.level?r.level:3,this._defaults=r.defaults||{},this._async=void 0!==r.async?r.async:null,this._stdout=r.stdout,this._stderr=r.stdout,this._mockFn=r.mockFn,this._throttle=r.throttle||2e3,this._types)this[n]=this._wrapLogFn(Object.assign({type:n},this._types[n],this._defaults));this._mockFn&&this.mockTypes(),this._lastLogSerialized=null,this._lastLog=null,this._lastLogTime=null,this._lastLogCount=0}return r(e,[{key:"create",value:function(t){return new e(Object.assign({reporters:this._reporters,level:this._level,types:this._types,defaults:this._defaults,stdout:this._stdout,stderr:this._stderr,mockFn:this._mockFn},t))}},{key:"withDefaults",value:function(t){return this.create({defaults:Object.assign({},this._defaults,t)})}},{key:"withTag",value:function(t){return this.withDefaults({tag:this._defaults.tag?this._defaults.tag+":"+t:t})}},{key:"addReporter",value:function(t){return this._reporters.push(t),this}},{key:"removeReporter",value:function(t){if(t){var e=this._reporters.indexOf(t);if(e>=0)return this._reporters.splice(e,1)}else this._reporters.splice(0);return this}},{key:"setReporters",value:function(t){return this._reporters=Array.isArray(t)?t:[t],this}},{key:"wrapAll",value:function(){this.wrapConsole(),this.wrapStd()}},{key:"restoreAll",value:function(){this.restoreConsole(),this.restoreStd()}},{key:"wrapConsole",value:function(){for(var t in this._types)console["__"+t]||(console["__"+t]=console[t]),console[t]=this[t]}},{key:"restoreConsole",value:function(){for(var t in this._types)console["__"+t]&&(console[t]=console["__"+t],delete console["__"+t])}},{key:"wrapStd",value:function(){this._wrapStream(this.stdout,"log"),this._wrapStream(this.stderr,"log")}},{key:"_wrapStream",value:function(t,e){var r=this;t&&(t.__write||(t.__write=t.write),t.write=function(t){r[e](String(t).trim())})}},{key:"restoreStd",value:function(){this._restoreStream(this.stdout),this._restoreStream(this.stderr)}},{key:"_restoreStream",value:function(t){t&&t.__write&&(t.write=t.__write,delete t.__write)}},{key:"pauseLogs",value:function(){c=!0}},{key:"resumeLogs",value:function(){c=!1;var t=a.splice(0),e=!0,r=!1,n=void 0;try{for(var s,o=t[Symbol.iterator]();!(e=(s=o.next()).done);e=!0){var i=s.value;i[0]._logFn(i[1],i[2])}}catch(t){r=!0,n=t}finally{try{e||null==o.return||o.return()}finally{if(r)throw n}}}},{key:"mockTypes",value:function(t){if(this._mockFn=t||this._mockFn,"function"==typeof this._mockFn)for(var e in this._types)this[e]=this._mockFn(e,this._types[e])||this[e]}},{key:"_wrapLogFn",value:function(t){return function(){if(!c)return this._logFn(t,arguments);a.push([this,t,arguments])}.bind(this)}},{key:"_logFn",value:function(t,e){if(t.level>this._level)return!!this._async&&Promise.resolve(!1);var r=Object.assign({date:new Date,args:[]},t);1===e.length&&function(t){return e=t,!("[object Object]"!==Object.prototype.toString.call(e)||!t.message&&!t.args||t.stack);var e}(e[0])?Object.assign(r,e[0]):r.args=Array.from(e),r.message&&(r.args.unshift(r.message),delete r.message),r.additional&&(Array.isArray(r.additional)||(r.additional=r.additional.split("\n")),r.args.push("\n"+r.additional.join("\n")),delete r.additional),r.type&&(r.type=r.type.toLowerCase()),r.tag&&(r.tag=r.tag.toLowerCase());var o=this._lastLogTime?r.date-this._lastLogTime:0;if(this._lastLogTime=r.date,o<this._throttle)try{var c=JSON.stringify([r.type,r.tag,r.args]),a=this._lastLogSerialized===c;if(this._lastLogSerialized=c,a)return void this._lastLogCount++}catch(t){}if(this._lastLogCount&&(this._log(function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},s=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(r).filter(function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),s.forEach(function(e){n(t,e,r[e])})}return t}({},this._lastLog,{args:[].concat(s(this._lastLog.args),["(repeated ".concat(this._lastLogCount," times)")])})),this._lastLogCount=0),this._lastLog=r,this._async)return this._logAsync(r);this._log(r)}},{key:"_log",value:function(t){var e=!0,r=!1,n=void 0;try{for(var s,o=this._reporters[Symbol.iterator]();!(e=(s=o.next()).done);e=!0)s.value.log(t,{async:!1,stdout:this.stdout,stderr:this.stderr})}catch(t){r=!0,n=t}finally{try{e||null==o.return||o.return()}finally{if(r)throw n}}}},{key:"_logAsync",value:function(t){var e=this;return Promise.all(this._reporters.map(function(r){return r.log(t,{async:!0,stdout:e.stdout,stderr:e.stderr})}))}},{key:"level",get:function(){return this._level},set:function(t){var e=0,r=0;for(var n in this._types){var s=this._types[n];s.level>r?r=s.level:s.level<e&&(e=s.level)}this._level=Math.min(r,Math.max(e,t))}},{key:"stdout",get:function(){return this._stdout||console._stdout}},{key:"stderr",get:function(){return this._stderr||console._stderr}}]),e}();u.prototype.add=u.prototype.addReporter,u.prototype.remove=u.prototype.removeReporter,u.prototype.clear=u.prototype.removeReporter,u.prototype.withScope=u.prototype.withTag,u.prototype.mock=u.prototype.mockTypes,u.prototype.pause=u.prototype.pauseLogs,u.prototype.resume=u.prototype.resumeLogs;var l,d=function(){function e(r){t(this,e),this.options=Object.assign({},r),this.defaultColor="#7f8c8d",this.levelColorMap={0:"#c0392b",1:"#f39c12",3:"#00BCD4"},this.typeColorMap={success:"#2ecc71"}}return r(e,[{key:"log",value:function(t){var e=t.level<1?console.__error||console.error:1===t.level&&console.warn?console.__warn||console.warn:console.__log||console.log,r="log"!==t.type?t.type:"",n=t.tag?t.tag:"",o=this.typeColorMap[t.type]||this.levelColorMap[t.level]||this.defaultColor,i="\n      background: ".concat(o,";\n      border-radius: 0.5em;\n      color: white;\n      font-weight: bold;\n      padding: 2px 0.5em;\n    ");e.apply(void 0,["%c"+[n,r].filter(Boolean).join(":"),i].concat(s(t.args)))}}]),e}();return"undefined"!=typeof window&&window.consola||((l=new u({reporters:[new d]})).Consola=u,l.BrowserReporter=d,l)}()},259:function(t,e,r){var content=r(288);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(9).default)("7f25629a",content,!0,{sourceMap:!1})},260:function(t,e,r){var content=r(290);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(9).default)("722d66a8",content,!0,{sourceMap:!1})},261:function(t,e,r){var content=r(293);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(9).default)("36873827",content,!0,{sourceMap:!1})},262:function(t,e,r){var content=r(295);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(9).default)("49f0d9bf",content,!0,{sourceMap:!1})},287:function(t,e,r){"use strict";var n=r(259);r.n(n).a},288:function(t,e,r){(t.exports=r(8)(!1)).push([t.i,".options{height:40px;width:120px;border-radius:50px;background:#fff;text-align:center;border:1px solid #c4c4c4}.option,.options{position:relative;display:-webkit-box;display:flex}.option{-webkit-box-pack:center;justify-content:center;-webkit-box-flex:1;flex:1 1 auto;-webkit-box-align:center;align-items:center;height:100%;z-index:2;cursor:pointer;-webkit-transition:.4s;transition:.4s}.option-1{color:#fff}.slider{position:absolute;left:0;height:100%;width:50%;background:#1b70cf;z-index:1;border-radius:50px;-webkit-transition:.4s;transition:.4s}",""])},289:function(t,e,r){"use strict";var n=r(260);r.n(n).a},290:function(t,e,r){(e=t.exports=r(8)(!1)).push([t.i,"@import url(https://fonts.googleapis.com/css?family=Roboto);",""]),e.push([t.i,"@import url(https://fonts.googleapis.com/css?family=Open+Sans:300,400);",""]);var n=r(21),o=n(r(40)),c=n(r(41)),l=n(r(42)),d=n(r(291));e.push([t.i,"@font-face{font-family:Avenir Next Lt Pro;src:url("+o+') format("opentype")}@font-face{font-family:Avenir Next Lt Pro;src:url('+c+') format("opentype");font-weight:700}@font-face{font-family:Avenir Next Lt Pro;src:url('+l+') format("opentype");font-weight:500}button[data-v-867073cc]:focus,input[data-v-867073cc]:focus,select[data-v-867073cc]:focus{outline:none;outline-style:none;box-shadow:none}input[type=number][data-v-867073cc]::-webkit-inner-spin-button,input[type=number][data-v-867073cc]::-webkit-outer-spin-button{-webkit-appearance:none;-moz-appearance:textfield;margin:0}div.button-container[data-v-867073cc]{margin-top:1em;margin-bottom:2em}div.button-container button.trade-button[data-v-867073cc]{background-color:#0c5db2;font-family:Avenir Next Lt Pro,sans-serif;color:#fff}div.track-trade[data-v-867073cc]{color:#adadad;font-size:.95rem;font-family:Roboto,sans-serif}div.track-trade a[data-v-867073cc]{font-weight:700}p.flutterwave-grp[data-v-867073cc]{margin-top:2.5em}p.flutterwave-grp .img[data-v-867073cc],p.flutterwave-grp .text[data-v-867073cc]{vertical-align:middle}p.flutterwave-grp .cc-icon[data-v-867073cc]{color:#0c5db2}div.trade-box[data-v-867073cc]{padding-bottom:.5rem;padding-top:1.5rem;box-shadow:4px 4px 18px rgba(0,0,0,.1);font-family:Open Sans,sans-serif}div.trade-box select[data-v-867073cc]{color:#707070}div.trade-box select.crypto[data-v-867073cc]{background:#1b70cf;color:#fff}div.trade-box input.blue-border[data-v-867073cc],div.trade-box select.blue-border[data-v-867073cc]{border:1px solid #1b70cf;color:#1b70cf}div.trade-box .amount[data-v-867073cc]{color:#1b70cf}div.trade-selector-container[data-v-867073cc]{margin-bottom:2rem;margin-top:1rem;text-align:center;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center}div.trade-selector-container .b-v-centered[data-v-867073cc]{width:100%;padding:0 13px}div.trade-selector-container .b-v-centered .inner[data-v-867073cc]{margin-top:19px;border-bottom:1px solid #0c5db2;width:100%}div.rates-container[data-v-867073cc]{color:#707070;display:-webkit-box;display:flex;border:1px solid #d5d5d5;border-radius:12px;font-size:.85rem;padding:.5rem;width:85%;margin:0 auto 2rem;justify-content:space-around}.empty-grid-bg[data-v-867073cc]{margin-top:3.5rem;height:100px;width:100%;background-image:url('+d+");background-repeat:no-repeat}",""])},291:function(t,e,r){t.exports=r.p+"img/9bcd658.png"},292:function(t,e,r){"use strict";var n=r(261);r.n(n).a},293:function(t,e,r){(t.exports=r(8)(!1)).push([t.i,".section{padding-top:0;padding-bottom:0;margin-top:0;margin-bottom:0}.is-vcentered{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center}.get-started{font-weight:700;color:#0c5db2;cursor:pointer}",""])},294:function(t,e,r){"use strict";var n=r(262);r.n(n).a},295:function(t,e,r){(e=t.exports=r(8)(!1)).push([t.i,"@import url(https://fonts.googleapis.com/css?family=Roboto);",""]),e.push([t.i,"@import url(https://fonts.googleapis.com/css?family=Open+Sans:300,400);",""]);var n=r(21),o=n(r(40)),c=n(r(41)),l=n(r(42));e.push([t.i,"@font-face{font-family:Avenir Next Lt Pro;src:url("+o+') format("opentype")}@font-face{font-family:Avenir Next Lt Pro;src:url('+c+') format("opentype");font-weight:700}@font-face{font-family:Avenir Next Lt Pro;src:url('+l+') format("opentype");font-weight:500}div.wrapper[data-v-76899bdd]{margin-top:2em}div.image-illustration-container[data-v-76899bdd]{width:80%;margin-top:2em}div.image-illustration-container img.image[data-v-76899bdd]{max-width:100%;height:auto}div.info[data-v-76899bdd]{font-family:Avenir Next Lt Pro,sans-serif;line-height:normal;color:#707070}div.info p.text-exchanging[data-v-76899bdd]{font-size:2.2rem;font-family:Open Sans,sans-serif;font-weight:300}div.info span.text-crypto[data-v-76899bdd]{font-size:2.6rem;font-weight:700;color:#0c5db2}div.info span.text-made-easy[data-v-76899bdd]{font-size:2rem;margin-left:.6rem}div.info .social-handle span[data-v-76899bdd]{padding-right:10px}div.info .social-handle span .fb[data-v-76899bdd]{color:#3b5998}div.info .social-handle span .in[data-v-76899bdd]{color:#fd5949}div.info .social-handle span .tw[data-v-76899bdd]{color:#00acee}',""])},296:function(t,e,r){"use strict";r.r(e);r(31);var n=r(5),o=r(257),c=r.n(o),l={props:{labelLeft:{type:String,required:!0},labelRight:{type:String,required:!0}},mounted:function(){var t=window.document.querySelector(".slider"),e=window.document.querySelectorAll(".option"),r=this,n=function(n){n.currentTarget===e[0]?(t.style.left="0",e[1].style.color="#626567",e[0].style.color="#fff",r.$emit("switched",{label:r.labelLeft})):(t.style.left="".concat(t.offsetWidth,"px"),e[0].style.color="#626567",e[1].style.color="#fff",r.$emit("switched",{label:r.labelRight}))};e.forEach(function(option){option.addEventListener("click",n)})},methods:{handleSwitch:function(t){t.currentTarget===this.$refs.option1?(this.$refs.option2.style.color="#1b70cf",this.$refs.option1.style.color="#fff"):(this.$refs.slider.left="".concat(this.$refs.slider.offsetWidth,"px"),this.$refs.option1.style.color="#1b70cf",this.$refs.option2.style.color="#fff")}}},d=(r(287),r(2)),f=Object(d.a)(l,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"rappa has-text-centered"},[r("div",{staticClass:"options"},[r("div",{ref:"option1",staticClass:"option option-1"},[r("span",[t._v(t._s(t.labelLeft))])]),t._v(" "),r("div",{ref:"option2",staticClass:"option option-2"},[r("span",[t._v(t._s(t.labelRight))])]),t._v(" "),r("div",{ref:"slider",staticClass:"slider"})])])},[],!1,null,null,null).exports,h=r(230),v=r(229),m={components:{FluidSwitch:f},filters:{formatMoney:v.a},data:function(){return{tradeType:"buy",fiatAmount:0,cryptoAmount:0,currency:"NGN",fiatAmountIsDirty:!1,cryptoAmountIsDirty:!1,isFetchingRates:!1,errorFetchRates:"",rates:null,isLoading:!1}},computed:{hasActiveTrade:function(){return this.$store.getters["trade/isActiveTrade"]},activeRates:function(){return this.rates?this.rates[this.tradeType]:null},computedFlags:function(){return"NGN"===this.currency?"nigeria.png":"america.png"},computedCryptoAmount:{set:function(t){this.cryptoAmount=t,this.fiatAmountIsDirty=!1,this.cryptoAmountIsDirty=!0},get:function(){var t;if(this.cryptoAmountIsDirty)return this.cryptoAmount;if(this.rates){var e=this.rates[this.tradeType],r=this.fiatAmount;t="USD"===this.currency?r/e.USD:r/e.NGN}else t=0;return 0===t?0:+t.toFixed(8)}},computedFiatAmount:{set:function(t){this.fiatAmount=t,this.cryptoAmountIsDirty=!1,this.fiatAmountIsDirty=!0},get:function(){if(this.fiatAmountIsDirty)return this.fiatAmount;if(null==this.fiatAmount)return null;var t;if(this.rates){var e=this.activeRates,r=this.cryptoAmount;t="USD"===this.currency?e.USD*r:e.NGN*r}else t=0;return 0===t?0:+t.toFixed(2)}},computedFiatAmountReversed:function(){if(null==this.computedFiatAmount)return null;var t;if(this.rates){var e=this.activeRates,r=this.computedFiatAmount;t="USD"===this.currency?e.USD_NGN*r:r/e.USD_NGN}else t=0;return 0===t?0:+t.toFixed(2)},canSubmit:function(){return!this.isFetchingRates&&!!parseFloat(this.computedCryptoAmount)&&!!parseFloat(this.computedFiatAmount)}},watch:{fiatAmount:function(){this.fiatAmountIsDirty&&this.fetchCryptoRates()},cryptoAmount:function(){this.cryptoAmountIsDirty&&this.fetchCryptoRates()}},created:function(){this.fetchCryptoRatesRequest()},methods:{handleCancelTrade:function(){confirm("Really cancel trade?")&&this.$store.commit("trade/RESET_CREATE_TRADE")},handleContinueTrade:function(){var t,e=this.$store.state.trade.create;t="buy"===e.type?e.metadata.id?this.$store.getters["trade/isPaid"]?"/trade/buy/verify":"/trade/buy/pay":this.$store.getters["trade/hasPersonalInformation"]?"/trade/buy/wallet":"/trade/buy":e.metadata.id?"/trade/sell/wallet":this.$store.getters["trade/hasPersonalInformation"]?"/trade/sell/account-info":"/trade/sell",this.$router.push({path:t})},toggleTradeType:function(){this.tradeType="buy"===this.tradeType?"sell":"buy"},fetchCryptoRatesRequest:function(){var t=Object(n.a)(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,this.isFetchingRates=!0,t.next=4,this.$axios.get("/rates/");case 4:e=t.sent,this.rates=e.data,t.next=12;break;case 8:t.prev=8,t.t0=t.catch(0),this.errorFetchRates="Error fetching rates; try again later",this.isFetchingRates=!1;case 12:return t.prev=12,this.isFetchingRates=!1,t.finish(12);case 15:case"end":return t.stop()}},t,this,[[0,8,12,15]])}));return function(){return t.apply(this,arguments)}}(),fetchCryptoRates:c.a.debounce(function(){this.fetchCryptoRatesRequest()},1500),doTrade:function(){var t=Object(n.a)(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,this.isLoading=!0,t.next=4,this.$recaptcha.execute("trade");case 4:e=t.sent,h.a.debug("[trade start recaptcha token]: ".concat(e)),this.$store.commit("trade/START_TRADE",{currency:this.currency,fiatAmount:this.computedFiatAmount,tradeType:this.tradeType,cryptoAmount:this.computedCryptoAmount,rates:"buy"===this.tradeType?this.rates.buy:this.rates.sell}),this.$router.push({path:"/trade/".concat(this.tradeType)}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),this.$swal({title:"",type:"info",position:"top-end",text:"Recaptcha verification failed",timer:5e3,toast:!0,showConfirmButton:!1});case 13:return t.prev=13,this.isLoading=!1,t.finish(13);case 16:case"end":return t.stop()}},t,this,[[0,10,13,16]])}));return function(){return t.apply(this,arguments)}}()}},y=(r(289),{layout:"simple",components:{TradeWidget:Object(d.a)(m,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",[r("div",{},[r("div",{staticClass:"columns"},[r("div",{staticClass:"column is-9-desktop widget-column"},[t.hasActiveTrade?r("div",{staticClass:"box trade-box has-text-centered",staticStyle:{"margin-bottom":"7rem",padding:"5rem 0"}},[r("p",{style:{"font-size":"0.9rem"}},[t._v("\n            You have a pending trade session.\n          ")]),t._v(" "),r("div",{staticClass:"field is-grouped is-grouped-centered"},[r("p",{staticClass:"control has-text-centered"},[r("a",{staticClass:"button is-small is-primary",staticStyle:{background:"#1b70cf"},attrs:{href:""},on:{click:function(e){return e.preventDefault(),t.handleContinueTrade(e)}}},[t._v("Continue")])]),t._v(" "),r("p",{staticClass:"control"},[r("a",{staticClass:"button is-small",attrs:{href:""},on:{click:function(e){return e.preventDefault(),t.handleCancelTrade(e)}}},[t._v("Cancel")])])])]):r("form",{on:{submit:function(e){return e.preventDefault(),t.doTrade(e)}}},[r("div",{staticClass:"box trade-box"},[r("div",{staticClass:"has-text-centered trade-selector-container"},[t._m(0),t._v(" "),r("fluid-switch",{attrs:{"label-left":"Buy","label-right":"Sell"},on:{switched:t.toggleTradeType}}),t._v(" "),t._m(1)],1),t._v(" "),t.activeRates?r("div",{staticClass:"rates-container"},[r("div",[r("span",{staticClass:"rate-label"},[t._v("BTC/USD: ")]),t._v(" "),r("span",{staticClass:"amount has-text-weight-semibold"},[t._v(t._s(t._f("formatMoney")(t.activeRates.USD,"USD")))])])]):t.isFetchingRates?r("div",{staticClass:"rates-container"},[t._v("\n              fetching current rates...\n            ")]):t._e(),t._v(" "),r("div",{staticClass:"columns",staticStyle:{"margin-bottom":"0.5em"}},[r("div",{staticClass:"field has-addons column"},[t._m(2),t._v(" "),r("div",{staticClass:"control is-expanded"},[r("input",{directives:[{name:"model",rawName:"v-model.number",value:t.computedCryptoAmount,expression:"computedCryptoAmount",modifiers:{number:!0}}],staticClass:"input blue-border",class:{"is-loading":t.isFetchingRates&&!t.cryptoAmountIsDirty},staticStyle:{"text-align":"right"},attrs:{type:"number",step:"any",min:"0"},domProps:{value:t.computedCryptoAmount},on:{input:function(e){e.target.composing||(t.computedCryptoAmount=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})])])]),t._v(" "),r("div",{staticStyle:{"margin-bottom":"0.5rem"}},[r("div",{staticClass:"field is-grouped"},[t._m(3),t._v(" "),r("div",{staticClass:"control has-icons-left"},[r("div",{staticClass:"select"},[r("select",{directives:[{name:"model",rawName:"v-model",value:t.currency,expression:"currency"}],staticClass:"currency-select",attrs:{id:"",name:"currency"},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.currency=e.target.multiple?r:r[0]}}},[r("option",{attrs:{value:"NGN"}},[t._v("\n                        NGN\n                      ")]),t._v(" "),r("option",{attrs:{value:"USD"}},[t._v("\n                        USD\n                      ")])]),t._v(" "),r("span",{staticClass:"icon is-large is-left"},[r("img",{attrs:{src:t.computedFlags,alt:"flag",width:"20"}})])])]),t._v(" "),r("p",{staticClass:"control is-expanded",class:{"is-loading":t.isFetchingRates}},[r("input",{directives:[{name:"model",rawName:"v-model.number",value:t.computedFiatAmount,expression:"computedFiatAmount",modifiers:{number:!0}}],staticClass:"input",staticStyle:{background:"#f4f4f4",color:"#707070",border:"none","margin-left":"0.2rem"},attrs:{type:"number",min:"0",step:"any"},domProps:{value:t.computedFiatAmount},on:{input:function(e){e.target.composing||(t.computedFiatAmount=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})])])]),t._v(" "),r("div",{staticStyle:{"margin-bottom":"1.5rem"}},[r("div",{directives:[{name:"show",rawName:"v-show",value:t.computedFiatAmountReversed,expression:"computedFiatAmountReversed"}],staticClass:"has-text-right is-size-6",staticStyle:{color:"#707070","font-size":"0.9rem"}},[t._v("\n                "+t._s(t._f("formatMoney")(t.computedFiatAmountReversed,"USD"===t.currency?"NGN":"USD"))+"\n              ")])])]),t._v(" "),r("div",{staticClass:"button-container"},[r("button",{staticClass:"button is-fullwidth trade-button is-medium",class:{disabled:!t.canSubmit,"is-loading":t.isLoading},staticStyle:{"font-weight":"500"},attrs:{disabled:!t.canSubmit}},[t._v("\n              TRADE\n            ")])])]),t._v(" "),r("div",{staticClass:"track-trade has-text-centered"},[r("p",[t._v("\n            Already have a trade? "),r("nuxt-link",{attrs:{to:"/track"}},[t._v("\n              Track\n            ")])],1),t._v(" "),t._m(4)]),t._v(" "),r("div",{staticClass:"empty-grid-bg"})])])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"b-v-centered"},[e("div",{staticClass:"inner"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"b-v-centered"},[e("div",{staticClass:"inner"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"control"},[e("a",{staticClass:"button",staticStyle:{background:"#1b70cf",color:"#fff","font-size":"1.03rem"},attrs:{href:""}},[this._v("\n                    BTC\n                  ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"control has-text-centered"},[e("span",{staticClass:"icon",staticStyle:{color:"#c4c4c4","vertical-align":"center"}},[e("i",{staticClass:"fas fa-exchange-alt"})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"flutterwave-grp"},[e("span",{staticClass:"text"},[this._v("Pay with: ")]),e("br"),this._v(" "),e("span",{staticClass:"cc-icon"},[e("i",{staticClass:"fab fa-cc-mastercard fa-3x"})]),this._v(" "),e("span",{staticClass:"cc-icon"},[e("i",{staticClass:"fab fa-cc-visa fa-3x"})])])}],!1,null,"867073cc",null).exports},head:function(){return{title:"Home - SenexPay"}}}),_=(r(292),r(294),Object(d.a)(y,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"section"},[r("div",{staticClass:"container wrapper"},[r("div",{staticClass:"columns"},[r("div",{staticClass:"column is-three-fifths is-vcentered"},[r("div",{staticClass:"info"},[r("p",{staticClass:"text-exchanging is-uppercase is-marginless\t"},[t._v("\n            Exchanging\n          ")]),t._v(" "),t._m(0),t._v(" "),r("p",{staticStyle:{margin:"0.5rem 0","vertical-align":"bottom"}},[r("svg",{staticStyle:{"vertical-align":"middle"},attrs:{width:"40",height:"2",viewBox:"0 0 69 2",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{d:"M3.05176e-05 1H69",stroke:"#707070"}})]),t._v(" "),r("span",[t._v("Buy and Sell securely  with SenexPAY")])]),t._v(" "),r("br"),t._v(" "),t._m(1),t._v(" "),r("span",[t._v("_____")]),t._v(" "),t._m(2)])]),t._v(" "),r("div",{staticClass:"column is-fullheight"},[r("trade-widget")],1)])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("span",{staticClass:"text-crypto"},[this._v("Cryptocurrencies")]),this._v(" "),e("span",{staticClass:"text-made-easy"},[this._v("made easy!")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"get-started"},[this._v("\n            Get started now   "),e("i",{staticClass:"fas fa-arrow-right"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"social-handle"},[e("span",[e("a",{attrs:{href:"https://facebook.com",target:"_blank"}},[e("i",{staticClass:"fab fa-facebook-f fa-2x fb"})])]),this._v(" "),e("span",[e("a",{attrs:{href:"https://instagram.com",target:"_blank"}},[e("i",{staticClass:"fab fa-instagram fa-2x in"})])]),this._v(" "),e("span",[e("a",{attrs:{href:"https://twitter.com",target:"_blank"}},[e("i",{staticClass:"fab fa-twitter fa-2x tw"})])])])}],!1,null,"76899bdd",null));e.default=_.exports}}]);