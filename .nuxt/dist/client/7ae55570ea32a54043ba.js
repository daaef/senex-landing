(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{222:function(t,e,r){var content=r(243);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(10).default)("1014946c",content,!0,{sourceMap:!1})},223:function(t,e,r){var content=r(245);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(10).default)("0a0dd866",content,!0,{sourceMap:!1})},224:function(t,e,r){t.exports=r.p+"img/7f4923c.png"},225:function(t,e,r){t.exports=r.p+"img/0b367f3.png"},226:function(t,e,r){t.exports=r.p+"img/a8ab662.png"},227:function(t,e,r){t.exports=r.p+"img/9b83fa0.png"},228:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMZSURBVHgB7d1fThNRFMfxc6YtaSImuALLDtiB1QjxRaBvPNCmxBcTE1pXQFmB0x3UUp9BfDGCse6AHVh30ESaGKVzvFMwaVGxt0wvh97fJyFtw5AGvpk7f+4wJQIAAAAAAAAAAAAAAAAAfzFNYH5zP0+c2jFPl8zXAvmpLUSve3urDUqQdZA7pXcVFgkJzjHXTptPdykhVkGyG/u5dCb1hWAES7/wrVU4oAQENgunMoNhCi4RTlUoIVZBzOq0TvA3eUqIVRDydwPujG0QmDIEUQZBlEEQZRBEGQRRBkGUQRBlEEQZBFEmTbOpKyJv6RaaySBm4qjba62V6RbCkKUMgiiDIMrM6kb9v/Ibz3M0Ld+z3fZB2KUJeBdkubRtplu5RtOcbJsTWilWwg979Zdkyasha6W0vWNixFfMTH3mU5iqJsorsuRVECEuk0NxlEfPXty3+RlvgjwpV3PmIUeOBf3MotXyBKogyAiu/wx48ahZZ/N4z4w5W0zUIYe83e29zGxfdo+bYe3363ZjsNvaMENdO4rkkzga7rCGDMjn4RjD3jfCThTxFjmCIIY5M3zldbnHrbBtHiY60LOFIEYg0hljsXGWuTYEMSLm3BiLjbPMtSEIxReRB2tXfX+5WC2To+uaESTGlD8/rfKn/IY5oGRx9m8Y2O29YHZ7a8ulyjpH/d0fZ2cnmSBY4HR6TUiq5PCqfwQZtSRBaj8zlxq8EHIPQ5Yy3gSJD/DI0bHEsDOiE5vlvVpDXB5xx+LTMRenYMbm1TbkYys8eLxZfchBVKPpHld0OArCI/N+ZMm7jfrFaZA8KYWNujIIogyCKIMgyljd62S+eHgTB68TEXY79dprrlpdzPAvM7uXxeL+CpMkYMhSBkGUQRBlEEQZBFEGQZRBEGUQRBkEUQZBlLEN4nxO2je2Qawm7L3BktjfxS6I9BO7pfYsEeE6JcQqyGmr0DbvjijDROpJ3pB/ok9HuFs8LJuJkbJ5+oA8ZX7/rxRR2HuzmugHE0wUZFh8g37yTDZL3W6jgB0cAAAAAAAAAAAAAAAAAEjYL8Ncu6YqixxpAAAAAElFTkSuQmCC"},229:function(t,e,r){t.exports=r.p+"img/59cd034.png"},230:function(t,e,r){"use strict";e.a=function(t,e){var r;if("NGN"===e)r=Intl.NumberFormat("en-NG",{style:"currency",currency:"NGN"});else{if("USD"!==e)throw new Error("Unrecognized currency specification: "+e);r=Intl.NumberFormat("en-US",{style:"currency",currency:"USD"})}return r.format(t)}},231:function(t,e,r){"use strict";var n=r(232),o=r.n(n);e.a=o.a.create({level:0})},232:function(t,e,r){t.exports=function(){"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function r(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function s(t){return function(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var o={fatal:{level:0},error:{level:0},warn:{level:1},log:{level:2},info:{level:3},success:{level:3},debug:{level:4},trace:{level:5},silent:{level:1/0},ready:{level:3},start:{level:3}},c=!1,a=[],u=function(){function e(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};for(var n in t(this,e),this._reporters=r.reporters||[],this._types=r.types||o,this._level=null!=r.level?r.level:3,this._defaults=r.defaults||{},this._async=void 0!==r.async?r.async:null,this._stdout=r.stdout,this._stderr=r.stdout,this._mockFn=r.mockFn,this._throttle=r.throttle||2e3,this._types)this[n]=this._wrapLogFn(Object.assign({type:n},this._types[n],this._defaults));this._mockFn&&this.mockTypes(),this._lastLogSerialized=null,this._lastLog=null,this._lastLogTime=null,this._lastLogCount=0}return r(e,[{key:"create",value:function(t){return new e(Object.assign({reporters:this._reporters,level:this._level,types:this._types,defaults:this._defaults,stdout:this._stdout,stderr:this._stderr,mockFn:this._mockFn},t))}},{key:"withDefaults",value:function(t){return this.create({defaults:Object.assign({},this._defaults,t)})}},{key:"withTag",value:function(t){return this.withDefaults({tag:this._defaults.tag?this._defaults.tag+":"+t:t})}},{key:"addReporter",value:function(t){return this._reporters.push(t),this}},{key:"removeReporter",value:function(t){if(t){var e=this._reporters.indexOf(t);if(e>=0)return this._reporters.splice(e,1)}else this._reporters.splice(0);return this}},{key:"setReporters",value:function(t){return this._reporters=Array.isArray(t)?t:[t],this}},{key:"wrapAll",value:function(){this.wrapConsole(),this.wrapStd()}},{key:"restoreAll",value:function(){this.restoreConsole(),this.restoreStd()}},{key:"wrapConsole",value:function(){for(var t in this._types)console["__"+t]||(console["__"+t]=console[t]),console[t]=this[t]}},{key:"restoreConsole",value:function(){for(var t in this._types)console["__"+t]&&(console[t]=console["__"+t],delete console["__"+t])}},{key:"wrapStd",value:function(){this._wrapStream(this.stdout,"log"),this._wrapStream(this.stderr,"log")}},{key:"_wrapStream",value:function(t,e){var r=this;t&&(t.__write||(t.__write=t.write),t.write=function(t){r[e](String(t).trim())})}},{key:"restoreStd",value:function(){this._restoreStream(this.stdout),this._restoreStream(this.stderr)}},{key:"_restoreStream",value:function(t){t&&t.__write&&(t.write=t.__write,delete t.__write)}},{key:"pauseLogs",value:function(){c=!0}},{key:"resumeLogs",value:function(){c=!1;var t=a.splice(0),e=!0,r=!1,n=void 0;try{for(var s,o=t[Symbol.iterator]();!(e=(s=o.next()).done);e=!0){var i=s.value;i[0]._logFn(i[1],i[2])}}catch(t){r=!0,n=t}finally{try{e||null==o.return||o.return()}finally{if(r)throw n}}}},{key:"mockTypes",value:function(t){if(this._mockFn=t||this._mockFn,"function"==typeof this._mockFn)for(var e in this._types)this[e]=this._mockFn(e,this._types[e])||this[e]}},{key:"_wrapLogFn",value:function(t){return function(){if(!c)return this._logFn(t,arguments);a.push([this,t,arguments])}.bind(this)}},{key:"_logFn",value:function(t,e){if(t.level>this._level)return!!this._async&&Promise.resolve(!1);var r=Object.assign({date:new Date,args:[]},t);1===e.length&&function(t){return e=t,!("[object Object]"!==Object.prototype.toString.call(e)||!t.message&&!t.args||t.stack);var e}(e[0])?Object.assign(r,e[0]):r.args=Array.from(e),r.message&&(r.args.unshift(r.message),delete r.message),r.additional&&(Array.isArray(r.additional)||(r.additional=r.additional.split("\n")),r.args.push("\n"+r.additional.join("\n")),delete r.additional),r.type&&(r.type=r.type.toLowerCase()),r.tag&&(r.tag=r.tag.toLowerCase());var o=this._lastLogTime?r.date-this._lastLogTime:0;if(this._lastLogTime=r.date,o<this._throttle)try{var c=JSON.stringify([r.type,r.tag,r.args]),a=this._lastLogSerialized===c;if(this._lastLogSerialized=c,a)return void this._lastLogCount++}catch(t){}if(this._lastLogCount&&(this._log(function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},s=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(r).filter(function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),s.forEach(function(e){n(t,e,r[e])})}return t}({},this._lastLog,{args:[].concat(s(this._lastLog.args),["(repeated ".concat(this._lastLogCount," times)")])})),this._lastLogCount=0),this._lastLog=r,this._async)return this._logAsync(r);this._log(r)}},{key:"_log",value:function(t){var e=!0,r=!1,n=void 0;try{for(var s,o=this._reporters[Symbol.iterator]();!(e=(s=o.next()).done);e=!0)s.value.log(t,{async:!1,stdout:this.stdout,stderr:this.stderr})}catch(t){r=!0,n=t}finally{try{e||null==o.return||o.return()}finally{if(r)throw n}}}},{key:"_logAsync",value:function(t){var e=this;return Promise.all(this._reporters.map(function(r){return r.log(t,{async:!0,stdout:e.stdout,stderr:e.stderr})}))}},{key:"level",get:function(){return this._level},set:function(t){var e=0,r=0;for(var n in this._types){var s=this._types[n];s.level>r?r=s.level:s.level<e&&(e=s.level)}this._level=Math.min(r,Math.max(e,t))}},{key:"stdout",get:function(){return this._stdout||console._stdout}},{key:"stderr",get:function(){return this._stderr||console._stderr}}]),e}();u.prototype.add=u.prototype.addReporter,u.prototype.remove=u.prototype.removeReporter,u.prototype.clear=u.prototype.removeReporter,u.prototype.withScope=u.prototype.withTag,u.prototype.mock=u.prototype.mockTypes,u.prototype.pause=u.prototype.pauseLogs,u.prototype.resume=u.prototype.resumeLogs;var l,f=function(){function e(r){t(this,e),this.options=Object.assign({},r),this.defaultColor="#7f8c8d",this.levelColorMap={0:"#c0392b",1:"#f39c12",3:"#00BCD4"},this.typeColorMap={success:"#2ecc71"}}return r(e,[{key:"log",value:function(t){var e=t.level<1?console.__error||console.error:1===t.level&&console.warn?console.__warn||console.warn:console.__log||console.log,r="log"!==t.type?t.type:"",n=t.tag?t.tag:"",o=this.typeColorMap[t.type]||this.levelColorMap[t.level]||this.defaultColor,i="\n      background: ".concat(o,";\n      border-radius: 0.5em;\n      color: white;\n      font-weight: bold;\n      padding: 2px 0.5em;\n    ");e.apply(void 0,["%c"+[n,r].filter(Boolean).join(":"),i].concat(s(t.args)))}}]),e}();return"undefined"!=typeof window&&window.consola||((l=new u({reporters:[new f]})).Consola=u,l.BrowserReporter=f,l)}()},233:function(t,e,r){t.exports=r.p+"img/b8cee5c.png"},234:function(t,e,r){var map={"./credit_card-active.png":224,"./user_finance-active.png":225,"./user_info-active.png":226,"./user_verify-active.png":227,"./wallet-active.png":228,"./wallet_deposit-active.png":229};function n(t){var e=o(t);return r(e)}function o(t){if(!r.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}n.keys=function(){return Object.keys(map)},n.resolve=o,t.exports=n,n.id=234},235:function(t,e,r){var map={"./credit_card-active.png":224,"./credit_card.png":236,"./user_finance-active.png":225,"./user_finance.png":237,"./user_info-active.png":226,"./user_info.png":238,"./user_verify-active.png":227,"./user_verify.png":239,"./wallet-active.png":228,"./wallet.png":240,"./wallet_deposit-active.png":229,"./wallet_deposit.png":241};function n(t){var e=o(t);return r(e)}function o(t){if(!r.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}n.keys=function(){return Object.keys(map)},n.resolve=o,t.exports=n,n.id=235},236:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIUSURBVHgB7dzNbcJAEIbh4efAMSU4RxAHqCB0kBJCOkgJSQdJBaEEOgh0gASYIy6BIxJgMo5IhEABD3bQyHmfixFaL9jf2uv1WhYBAAAAAAAAAAAAAAAAAAC4lpKl8GQyaZXL5Xf92BKcsyiVSq/1ev3FspIpkDAM57oIBKnFcdxuNpujtOXLYhMITCqVyo2lvDUQ/DECcYZAnCEQZ6qWwnoZ9yiwigQAAADAPuvt967AZLVa9dvt9iJtedPAcDcXAoNarRbpYpC2PLdOnCEQZwjEGVMfcmCoNxufpaC2223SXwY6Bfums379tOtp+SfdL/dyoYsD0R+d6wT+QAoqDMPvjyPLdup6XckgyxHyYzwed7QVfYjNsNFodPa/mM1mgbbMudhEWs/t4Ze6Y7ZipPX8OgxILvlPXWVqA+1pcJmnJ+hDnMnlCFmv16NqtWpqHXokHA2WlsvlQq/bM9eTyHsyTc8AA12cqjOSHOQSyG4k2pOM8qonoaePnuRI64skp/92ysWBaMvsTKfTIo/cv56n0n7jQbfzzrCepeyRLEdIoKeFrhRfR7dTroVO3RkCcYZAnCEQZwjEGQJxhkCcIRBnCMQZAnGGQJwhEGcIxBkCcYZAnCEQZwjEGQJxxhpI6sfqcRlTIHEcm141BBlan+40z94nTxcKbwU6a7PZLCyvZQIAAAAAAAAAAAAAAAAA4F/4BMbbeelYWq1aAAAAAElFTkSuQmCC"},237:function(t,e,r){t.exports=r.p+"img/37acfb7.png"},238:function(t,e,r){t.exports=r.p+"img/3f882db.png"},239:function(t,e,r){t.exports=r.p+"img/4458b1b.png"},240:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALYSURBVHgB7d1fbhJRFMfxM4Mtr3UF0kdamtgViCuo7oCuoHUFhRWIO6grUFcgroAmEOAJcQc8wgPguR002NCaS4ebA/f7SSZlmGnS9MfM/T+IAAAAAAAAAAAAAIhXIhvodDrVQqFwoy9f63YkcWrN5/PPlUrlVnLkHchgMLjSP6QpuJckSb1cLjckJ16BtNvtUrFY/Cl46P3JyclXyUHqc/Lh4eGNYJ0ryYlXIHp5vhOsU5WceAUi8RbgwfgGgi0jEGMIxBgCMYZAjCEQYwjEGAIxhkCMIRBjXsh+Guv2TXbQ3gai3eE12UHcsowhEGMIxJh9LUP+yw1Hy/aMz8/Px7KB6AJZTtKoy5YH23q9XlMrFh/EU1S3rH6/f7OcMRNi5PNaQ/konqIKZLFY1CSs6+Fw+MrnF6IJRK+Okv4oSWDT6fTY53xqWcYQyAotXz4lSXKshXGin+yXun+pb48koGirvQ9p+dKoVCr1P/vLauut3upaeuy7BLrdcYVkfpyentbXHSiXy6PZbHYpgRBI5sl5uWdnZy3JepC3jkAyo5zOeTYCyZRyOufZCCRz8dTBbrdbk0DzmgkkU3XdKusOuE7INE2DLcOg2rukVdu69j255RYNbYPcHRwcHBUKhQt9/1oCzvonkH+5NZNfisXi/Y6GIaFxyzImmkBcA08CtSVWTSaTO5/zY7tCgrW4Hdcd4ztyGFUZ4lbKdjqdt1pY12W77YqRbk3tjvFemRtdob7sBqmKURTqxhCIMQRiDIEY4/WsE+1aCN903dxIAtIanNdkhsfscy2rJDuIW5YxBGIMgRhDIMYQiDEEYgyBGEMgxhCIMQRijG8gwcekY+MbiNeAfURy+794BTKbzXJ7pPY+cQt9JCdegbjxaDeTQvCXCyPPB/Jv9O0IbvJxmqY1fflG4vVLN7cWPdcvJtgokFXL1a1RmUwmGz+pAQAAAAAAAAAAAAAe9xu/5LxmXAcO5QAAAABJRU5ErkJggg=="},241:function(t,e,r){t.exports=r.p+"img/5e8ec04.png"},242:function(t,e,r){"use strict";var n=r(222);r.n(n).a},243:function(t,e,r){(t.exports=r(9)(!1)).push([t.i,".ico-container[data-v-77348c84]{width:70px;height:70px;text-align:center}.ico-container-sm[data-v-77348c84]{width:45px;height:45px;text-align:center}",""])},244:function(t,e,r){"use strict";var n=r(223);r.n(n).a},245:function(t,e,r){(e=t.exports=r(9)(!1)).push([t.i,"@import url(https://fonts.googleapis.com/css?family=Roboto);",""]),e.push([t.i,"@import url(https://fonts.googleapis.com/css?family=Open+Sans:300,400);",""]),e.push([t.i,"@import url(https://fonts.googleapis.com/css?family=Nunito:400,600,700&display=swap);",""]);var n=r(22),o=n(r(40)),c=n(r(41)),l=n(r(42));e.push([t.i,"@font-face{font-family:Avenir Next Lt Pro;font-display:auto;src:url("+o+') format("opentype")}@font-face{font-family:Avenir Next Lt Pro;font-display:auto;src:url('+c+') format("opentype");font-weight:700}@font-face{font-family:Avenir Next Lt Pro;font-display:auto;src:url('+l+') format("opentype");font-weight:500}.wrapper_trader{font-family:Avenir Next Lt Pro,sans-serif;margin-bottom:3rem}.__title{margin-bottom:2rem;font-size:2.7rem;font-family:Open Sans,sans-serif;color:#1b70cf;line-height:normal}.__title .amount__btc{font-weight:700;font-family:Avenir Next Lt Pro,sans-serif;font-size:2rem}.__title .amount__currency{font-weight:500;font-size:2rem}.trader{margin-bottom:3rem}.trader .icons-wrapper{height:530px;box-shadow:0 1px 3px rgba(0,0,0,.161);border-top-left-radius:12px;border-bottom-left-radius:12px;margin-right:10px;background-color:#fff;padding:1.2rem 0;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:center;align-items:center}.trader .icons-wrapper .icon-container{-webkit-box-flex:100%;flex:100%}.trader .content-wrapper{background-color:#fbfbfb;width:100%;border-top-right-radius:12px;border-bottom-right-radius:12px;height:530px;box-shadow:0 1px 3px rgba(0,0,0,.161)}.content-area{font-size:.9rem;position:relative;height:530px;width:100%}.content-area .__title{font-size:1.45rem;margin-bottom:1rem}.content-area .content{height:80%}.content-area label{font-weight:400;font-size:inherit}.content-area input{border-style:solid}.content-area .button-wrapper{text-align:right;position:absolute;right:10px;bottom:40px}.content-area .button-wrapper button{background:#1b70cf;color:#fff;font-weight:600}.help .text{display:inherit;background:#caddf1;color:#fff;border-radius:6px;margin:1.5rem .3rem;padding:.3rem .6rem}.user-verify{font-family:Avenir Next Lt Pro,sans-serif}.user-verify .id-section,.user-verify .selfie-section{width:70%;display:-webkit-box;display:flex;height:130px}.user-verify .id-section img,.user-verify .selfie-section img{height:100%}.user-verify .id-section div.widget-grp,.user-verify .selfie-section div.widget-grp{height:100%;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;justify-content:space-around;margin-left:1rem}.user-verify .id-section div.widget-grp button,.user-verify .selfie-section div.widget-grp button{font-size:.95rem;font-weight:400;border:none}.user-verify .id-section div.widget-grp button.select-file-btn,.user-verify .selfie-section div.widget-grp button.select-file-btn{background:#ebebeb;color:#455e6f}.user-verify .id-section div.widget-grp button.upload-file-btn,.user-verify .selfie-section div.widget-grp button.upload-file-btn{color:#fff;background:#99aec4}.user-verify .id-section{margin-bottom:1.5rem}.user-verify .id-section img{width:55%;height:auto}.wallet_deposit .qrcode-wrapper{display:-webkit-inline-box;display:inline-flex;margin-top:1.2rem}.wallet_deposit .qrcode-wrapper p.qrcode{margin-right:1rem}.wallet_deposit .qrcode-wrapper p.text-wrapper{margin-top:.8rem}.wallet_deposit .qrcode-wrapper p.text-wrapper span.text{line-height:1.2}.wallet_deposit .qrcode-wrapper p.text-wrapper span.icon{margin-top:1.5rem;margin-left:.5rem}.wallet_deposit .address-clipboard-wrapper{margin-top:1rem;margin-bottom:1.5rem}.wallet_deposit .desc-text{margin-top:1rem;margin-bottom:1rem}.wallet_deposit .address-wrapper{height:40px;box-shadow:0 3px 6px rgba(0,0,0,.161);margin-right:1rem;margin-left:1rem}.wallet_deposit .address-wrapper .btc-address{height:100%;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;font-size:12.5px;font-weight:400}.wallet_deposit .clipboard-wrapper{box-sizing:border-box;height:40px;background:#455e6f;color:#fff;font-size:12.5px;opacity:.54;border-radius:4px}',""])},246:function(t,e,r){"use strict";r(66);var n=r(6),o=r(67),c=(r(43),{name:"TradeIcon",props:{active:{type:Boolean,default:!1},name:{type:String,required:!0}},computed:{computedIconSrc:function(){return this.active?r(234)("./".concat(this.name,"-active.png")):r(235)("./".concat(this.name,".png"))}}}),l=(r(242),r(2)),f={components:{TradeIcon:Object(l.a)(c,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{class:{"ico-container":!this.$device.isMobile,"ico-container-sm":this.$device.isMobile}},[e("img",{attrs:{src:this.computedIconSrc,alt:this.name}})])},[],!1,null,"77348c84",null).exports},filters:{formatMoney:r(230).a},props:{step:{type:String,required:!0}},data:function(){return{showHelpText:!1}},computed:Object(n.a)({},Object(o.b)({tradeType:function(t){return t.trade.create.type},cryptoAmount:function(t){return t.trade.create.cryptoAmount},fiatAmount:function(t){return t.trade.create.fiatAmount},currency:function(t){return t.trade.create.currency}}),{iconNameList:function(){return"sell"===this.tradeType?["user_info","user_finance","wallet_deposit"]:["user_info","wallet","credit_card","user_verify"]}}),methods:{isIconActive:function(t){var e=this.iconNameList.indexOf(t),r=this.iconNameList.indexOf(this.step);return!(e<0||!r<0)&&e<=r},handleCancelTrade:function(){confirm("Really cancel trade?")&&(this.$store.commit("trade/RESET_CREATE_TRADE"),this.$router.replace({path:"/"}))}}},d=(r(244),Object(l.a)(f,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"section",staticStyle:{"margin-bottom":"3rem"}},[n("div",{staticClass:"container wrapper_trader"},[n("p",{staticClass:"__title has-text-centered"},["buy"===t.tradeType?n("span",[t._v("Buying ")]):n("span",[t._v("Selling ")]),t._v(" "),n("span",{staticClass:"amount__btc"},[t._v(t._s(t.cryptoAmount)+" BTC")]),t._v(" at "),n("span",{staticClass:"amount__currency"},[t._v(t._s(t._f("formatMoney")(t.fiatAmount,t.currency)))]),t._v(" "),n("span",{staticStyle:{"margin-left":"1.5rem"}},[n("a",{staticStyle:{color:"#d50b1f","font-size":"0.8rem"},attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.handleCancelTrade(e)}}},[t._v("cancel")])])]),t._v(" "),n("div",{staticClass:"columns"},[n("div",{staticClass:"column is-three-fifths is-offset-one-fifth"},[n("div",{staticClass:"columns is-mobile trader"},[n("div",{staticClass:"column is-2 icons-wrapper has-text-centered"},t._l(t.iconNameList,function(e,i){return n("trade-icon",{key:i,staticClass:"icon-container",attrs:{name:e,active:t.isIconActive(e)}})}),1),t._v(" "),t.$device.isMobile?n("div",{staticClass:"column is-9 content-wrapper"},[n("div",{staticClass:"columns"},[n("div",{staticClass:"column is-12"},[n("div",{staticClass:"content-area"},[n("p",{staticClass:"__title"},[t._t("title")],2),t._v(" "),n("div",{staticClass:"content"},[t._t("content")],2),t._v(" "),n("div",{staticClass:"button-wrapper"},[t._t("button")],2)])])])]):n("div",{staticClass:"column is-9 content-wrapper"},[n("div",{staticClass:"columns is-mobile"},[n("div",{staticClass:"column is-8"},[n("div",{staticClass:"content-area"},[n("p",{staticClass:"__title"},[t._t("title")],2),t._v(" "),n("div",{staticClass:"content"},[t._t("content")],2),t._v(" "),n("div",{staticClass:"button-wrapper"},[t._t("button")],2)])]),t._v(" "),n("div",{staticClass:"column is-3 help"},[n("a",{staticClass:"tooltip-a",attrs:{href:""},on:{click:function(e){e.preventDefault(),t.showHelpText=!t.showHelpText}}},[n("img",{attrs:{src:r(233),alt:"Help text tool tip",height:"30",width:"30"}})]),t._v(" "),t.showHelpText?n("p",{staticClass:"text"},[t._t("helpText")],2):t._e()])])])])])])])])},[],!1,null,null,null));e.a=d.exports},247:function(t,e,r){t.exports=r.p+"img/0eefdd4.png"},252:function(t,e,r){"use strict";var n=r(5),o=r(23),c=r(27),l=r(130),f=r(68),d=r(14),h=r(69).f,v=r(87).f,m=r(15).f,A=r(253).trim,y=n.Number,_=y,w=y.prototype,x="Number"==c(r(86)(w)),k="trim"in String.prototype,C=function(t){var e=f(t,!1);if("string"==typeof e&&e.length>2){var r,n,o,c=(e=k?e.trim():A(e,3)).charCodeAt(0);if(43===c||45===c){if(88===(r=e.charCodeAt(2))||120===r)return NaN}else if(48===c){switch(e.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+e}for(var code,l=e.slice(2),i=0,d=l.length;i<d;i++)if((code=l.charCodeAt(i))<48||code>o)return NaN;return parseInt(l,n)}}return+e};if(!y(" 0o1")||!y("0b1")||y("+0x1")){y=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof y&&(x?d(function(){w.valueOf.call(r)}):"Number"!=c(r))?l(new _(C(e)),r,y):C(e)};for(var E,S=r(12)?h(_):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),T=0;S.length>T;T++)o(_,E=S[T])&&!o(y,E)&&m(y,E,v(_,E));y.prototype=w,w.constructor=y,r(16)(n,"Number",y)}},253:function(t,e,r){var n=r(13),o=r(26),c=r(14),l=r(254),f="["+l+"]",d=RegExp("^"+f+f+"*"),h=RegExp(f+f+"*$"),v=function(t,e,r){var o={},f=c(function(){return!!l[t]()||"​"!="​"[t]()}),d=o[t]=f?e(m):l[t];r&&(o[r]=d),n(n.P+n.F*f,"String",o)},m=v.trim=function(t,e){return t=String(o(t)),1&e&&(t=t.replace(d,"")),2&e&&(t=t.replace(h,"")),t};t.exports=v},254:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},255:function(t,e,r){"use strict";var n=r(13),o=r(256),c=r(128),l=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(c);n(n.P+n.F*l,"String",{padStart:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0,!0)}})},256:function(t,e,r){var n=r(28),o=r(129),c=r(26);t.exports=function(t,e,r,l){var f=String(c(t)),d=f.length,h=void 0===r?" ":String(r),v=n(e);if(v<=d||""==h)return f;var m=v-d,A=o.call(h,Math.ceil(m/h.length));return A.length>m&&(A=A.slice(0,m)),l?A+f:f+A}},257:function(t,e,r){var content=r(283);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(10).default)("13252e0a",content,!0,{sourceMap:!1})},264:function(t,e,r){"use strict";r(252),r(255);var n={filters:{padZeros:function(t){return(""+t).padStart(2,"0")}},props:{minutes:{type:Number,required:!0}},data:function(){return{m:this.$props.minutes,s:0,active:!0}},mounted:function(){this.start()},methods:{start:function(){if(this.active){var t=this.m,s=this.checkSeconds(this.s-1);59===s&&(t-=1),t<0&&this.active?this.$emit("timer-elapsed"):(this.m=t,this.s=s,setTimeout(this.start.bind(this),1e3))}},checkSeconds:function(t){return t<0&&(t=59),t},stop:function(){this.active=!1}}},o=r(2),component=Object(o.a)(n,function(){var t=this.$createElement;return(this._self._c||t)("span",[this._v("\n  "+this._s(this._f("padZeros")(this.m))+":"+this._s(this._f("padZeros")(this.s))+"\n")])},[],!1,null,null,null);e.a=component.exports},282:function(t,e,r){"use strict";var n=r(257);r.n(n).a},283:function(t,e,r){(t.exports=r(9)(!1)).push([t.i,".polk[data-v-7639ab00]{height:70%;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;flex-wrap:wrap;align-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}iframe[data-v-7639ab00]{height:100vh!important}.circ[data-v-7639ab00]{opacity:0;stroke-dasharray:130;stroke-dashoffset:130;-webkit-transition:all 1s;transition:all 1s}.tick[data-v-7639ab00]{stroke-dasharray:50;stroke-dashoffset:50;-webkit-transition:stroke-dashoffset 1s ease-out .5s;transition:stroke-dashoffset 1s ease-out .5s}.drawn+svg .path[data-v-7639ab00]{opacity:1;stroke-dashoffset:0}",""])},307:function(t,e,r){"use strict";r.r(e);r(66),r(19);var n=r(3),o=r(231),c=r(246),l=r(264),f=r(230),d={layout:"simple",filters:{formatMoney:f.a},validate:function(t){var e=t.store;return!!e.getters["trade/isActiveTrade"]&&!!e.getters["trade/hasCreatedTrade"]},components:{Trader:c.a,MinuteCountdown:l.a},data:function(){return{verifying:!1,verified:!1,tick:!1}},head:function(){return{title:"Buy - SenexPay",script:[{src:"".concat("https://api.ravepay.co","/flwv3-pug/getpaidx/api/flwpbf-inline.js")}]}},computed:{personalInfo:function(){return this.$store.state.trade.create.personalInformation},amount:function(){var t=this.$store.state.trade.create,e=t.fiatAmount,r=t.currency,n=t.conversionRate;return"NGN"===r?e:e*n.USD_NGN},isOtc:function(){var t=this.$store.state.trade.create.isOtc;return t&&this.pushOTC(),t},tradeId:function(){return this.$store.state.trade.create.metadata.id},currency:function(){return this.$store.state.trade.create.currency},tradeTTL:function(){return 20}},mounted:function(){},methods:{pushOTC:function(){this.verifying=!1,this.verified=!0},payWithRave:function(){var t=this,e=window.getpaidSetup({txref:this.tradeId,PBFPubKey:"FLWPUBK-17b62ccd816c6b2fdd007d4f81eb4973-X",customer_email:this.personalInfo.email,amount:this.amount,customer_phone:this.personalInfo.mobileNumber,currency:"NGN",onclose:function(){},callback:function(r){o.a.debug("rave response: ".concat(JSON.stringify(r))),t.handlePaymentComplete(r),e.close()}})},handlePaymentComplete:function(){var t=Object(n.a)(regeneratorRuntime.mark(function t(e){var r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("00"===e.tx.chargeResponseCode||"0"===e.tx.chargeResponseCode){t.next=2;break}return t.abrupt("return");case 2:return t.prev=2,this.verifying=!0,this.verified=!1,t.next=7,this.$axios.get("/verify/rave/",{params:{txref:e.tx.txRef}});case 7:r=t.sent,o.a.debug("[trade/buy/pay] GET /verify/rave/ response: ".concat(JSON.stringify(r))),"successful"===r.data.status?(this.verifying=!1,this.verified=!0,this.$store.commit("trade/SET_PAYMENT_DONE",!0),this.$refs.countdownTimer.stop(),setTimeout(function(){this.tick=!0},1e3)):this.$swal({title:"",type:"info",position:"top-end",text:"Transaction failed or invalid",timer:5e3,toast:!0,showConfirmButton:!1}),t.next=16;break;case 12:t.prev=12,t.t0=t.catch(2),o.a.debug("[error] /verify/rave ".concat(JSON.stringify(t.t0.response))),this.$swal({title:"",type:"error",position:"top-end",text:"Unable to verify your transaction, try again",timer:5e3,toast:!0,showConfirmButton:!1});case 16:return t.prev=16,this.verifying=!1,t.finish(16);case 19:case"end":return t.stop()}},t,this,[[2,12,16,19]])}));return function(e){return t.apply(this,arguments)}}(),handleContinue:function(){this.$router.push({path:"/trade/buy/verify"})},handleTimerElapsed:function(){alert("Trade is now expired. Trade has been cancelled."),this.$store.commit("trade/RESET_CREATE_TRADE"),this.$router.replace({path:"/"})}}},h=(r(282),r(2)),component=Object(h.a)(d,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("trader",{attrs:{step:"credit_card"}},[n("template",{slot:"title"},[t._v("\n    Payment "+t._s(t.isOtc?"(OTC)":"Card")+"\n  ")]),t._v(" "),0==t.isOtc?n("template",{slot:"content"},[t.verifying?n("div",{staticClass:"has-text-centered"},[n("div",{staticClass:"polk"},[n("i",{staticClass:"fa fa-spinner fa-5x fa-spin"}),n("br"),t._v(" "),n("p",[n("i",{staticClass:"fa fa-cofee"}),t._v(" Payment verified..")])])]):t.verified?n("div",{staticClass:"has-text-centered"},[n("div",{staticClass:"polk"},[n("div",{staticClass:"trigger",class:{drawn:t.tick}}),t._v(" "),n("svg",{staticStyle:{"enable-background":"new 0 0 37 37"},attrs:{id:"tick",width:"80px",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 37 37","xml:space":"preserve"}},[n("path",{staticClass:"circ path",staticStyle:{fill:"none",stroke:"#32CD32","stroke-width":"1","stroke-linejoin":"round","stroke-miterlimit":"10"},attrs:{d:"M30.5,6.5L30.5,6.5c6.6,6.6,6.6,17.4,0,24l0,0c-6.6,6.6-17.4,6.6-24,0l0,0c-6.6-6.6-6.6-17.4,0-24l0,0C13.1-0.2,23.9-0.2,30.5,6.5z"}}),t._v(" "),n("polyline",{staticClass:"tick path",staticStyle:{fill:"none",stroke:"#32CD32","stroke-width":"3","stroke-linejoin":"round","stroke-miterlimit":"10"},attrs:{points:"11.6,20 15.9,24.2 26.4,13.8 "}})]),n("br"),t._v(" "),n("p",[t._v("Payment verified..")])])]):n("div",{staticStyle:{"margin-top":"4rem"}},[n("p",[t._v("\n        You will be required to pay the sum of\n        "+t._s(t._f("formatMoney")(t.amount,"NGN"))+" using an accepted payment method.\n      ")]),t._v(" "),n("p",[n("span",{staticClass:"img"},[n("img",{staticStyle:{"vertical-align":"middle"},attrs:{src:r(247),alt:"Flutterwave icon",height:"28",width:"28"}})]),t._v(" "),n("button",{staticClass:"button is-success",on:{click:t.payWithRave}},[t._v("\n          Pay now\n        ")])]),t._v(" "),n("p",{staticClass:"is-size-6 has-font-weight-bold",staticStyle:{"margin-top":"2rem"}},[t._v("\n        This trade is valid till\n        "),n("minute-countdown",{ref:"countdownTimer",attrs:{minutes:t.tradeTTL},on:{"timer-elapsed":t.handleTimerElapsed}})],1)])]):n("template",{slot:"content"},[n("div",{domProps:{innerHTML:t._s(t.$store.state.trade.create.otcInstructions)}})]),t._v(" "),n("template",{slot:"button"},[n("button",{staticClass:"button",class:{"is-loading":t.verifying},attrs:{disabled:t.verifying||!t.verified},on:{click:t.handleContinue}},[t._v("\n      Continue\n    ")])]),t._v(" "),n("template",{slot:"helpText"},[t._v("\n    Pay the cash equivalent of the bitcoin you intent to buy\n  ")])],2)},[],!1,null,"7639ab00",null);e.default=component.exports}}]);