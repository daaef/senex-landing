exports.ids=[8],exports.modules={142:function(t,e,r){"use strict";r.r(e);var n=r(19),o=r(68),c=r(97);var d={layout:"simple",validate:({store:t})=>!!t.state.trade.create.isOtc||!!t.getters["trade/isActiveTrade"]&&(!!t.getters["trade/hasCreatedTrade"]&&!!t.getters["trade/isPaid"]),components:{Trader:c.a},filters:{formatFilename:t=>Object(o.truncate)(t,{length:12})},data:()=>({loading:!1,idCard:{file:null,loading:!1,url:null},selfie:{file:null,loading:!1,url:null}}),computed:{...Object(n.mapState)({cryptoAmount:t=>t.trade.create.metadata.cryptoAmount,fiatAmount:t=>t.trade.create.metadata.fiatAmount,currency:t=>t.trade.create.currency,conversionRate:t=>t.trade.create.conversionRate,tradeId:t=>t.trade.create.metadata.id,pin:t=>t.trade.create.metadata.pin}),shouldVerify(){if(this.$store.state.trade.create.isOtc)return!1;{let t;return(t="USD"===this.currency?this.fiatAmount:(this.fiatAmount/this.conversionRate.USD_NGN).toFixed(2))>=250}},canSubmit(){return this.selfie.url&&this.idCard.url}},head:()=>({title:"Buy - SenexPay"}),methods:{handleFileChange(t,e){const r=t.target.files||t.dataTransfer.files;r&&(this[e].file=r[0])},async _doUpload(t){const e=new FormData;e.append("datafile",this[t].file);try{this[t].loading=!0;const r=await this.$axios.post("/upload/",e,{headers:{"content-type":"multipart/form-data"}});this[t].url=r.data.datafile}catch(t){this.$swal({title:"Error:",type:"error",position:"top-end",text:"Failed to upload; try again",timer:7e3,toast:!0,showConfirmButton:!1})}this[t].loading=!1},handleSelfieUpload(){this._doUpload("selfie")},handleIdCardUpload(){this._doUpload("idCard")},async handleSubmit(){if(!this.shouldVerify)return this.requestTrade();if(this.selfie.url&&this.idCard.url)try{const t={trade:this.tradeId,govtIssuedId:this.idCard.url,selfieWithId:this.selfie.url};this.loading=!0,await this.$axios.post(`/trade/${this.tradeId}/kyc/`,t),this.requestTrade()}catch(t){this.$swal({title:"",type:"error",position:"top-end",text:"Unable to update; try again",timer:5e3,toast:!0,showConfirmButton:!1})}finally{this.loading=!1}else this.$swal({title:"",type:"info",position:"top-end",text:"You must upload both a selfie & an identity",timer:5e3,toast:!0,showConfirmButton:!1})},requestTrade(){const t=this;this.$swal({type:"success",title:"Trade Request Success",text:`Trade request successful. Your trade ID is ${this.tradeId}`,footer:`Your trade pin is ${this.pin}`,onClose:()=>{t.$store.commit("trade/SET_TRACK_TRADE_ID",this.tradeId),t.$store.commit("trade/RESET_CREATE_TRADE"),t.$router.replace({path:"/track"})}})}}},l=r(1),component=Object(l.a)(d,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("trader",{attrs:{step:"user_verify"}},[r("template",{slot:"title"},[t._v("\n    Verification\n  ")]),t._v(" "),t.shouldVerify?r("template",{slot:"content"},[r("div",{staticClass:"user-verify"},[r("div",{staticClass:"has-text-weight-semibold"},[t._v("\n        Upload ID\n      ")]),t._v(" "),r("div",{staticClass:"id-section"},[r("i",{staticClass:"fas fa-id-card fa-5x",staticStyle:{"padding-top":"10px"}}),t._v(" "),r("div",{staticClass:"widget-grp"},[r("input",{ref:"idCardVer",staticStyle:{display:"none"},attrs:{type:"file",accept:"image/*"},on:{change:function(e){return t.handleFileChange(e,"idCard")}}}),t._v(" "),r("button",{staticClass:"button select-file-btn",on:{click:function(e){return t.$refs.idCardVer.click()}}},[t._v("\n            Choose File\n          ")]),t._v(" "),r("button",{staticClass:"button upload-file-btn",class:{"is-loading":t.idCard.loading},on:{click:t.handleIdCardUpload}},[t._v("\n            Upload\n          ")]),t._v(" "),t.idCard.file?r("span",{staticClass:"is-block is-size-7"},[t._v("\n            "+t._s(t._f("formatFilename")(t.idCard.file.name))+"\n          ")]):t._e()])]),t._v(" "),r("div",{staticClass:"has-text-weight-semibold"},[t._v("\n        Upload Selfie\n      ")]),t._v(" "),r("div",{staticClass:"selfie-section"},[r("i",{staticClass:"fas fa-camera-retro fa-5x",staticStyle:{"padding-top":"10px"}}),t._v(" "),r("div",{staticClass:"widget-grp"},[r("input",{ref:"selfieVer",staticStyle:{display:"none"},attrs:{type:"file",accept:"image/*"},on:{change:function(e){return t.handleFileChange(e,"selfie")}}}),t._v(" "),r("button",{staticClass:"button select-file-btn",on:{click:function(e){return t.$refs.selfieVer.click()}}},[t._v("\n            Choose File\n          ")]),t._v(" "),r("button",{staticClass:"button upload-file-btn",class:{"is-loading":t.selfie.loading},on:{click:t.handleSelfieUpload}},[t._v("\n            Upload\n          ")]),t._v(" "),t.selfie.file?r("span",{staticClass:"is-block is-size-7"},[t._v("\n            "+t._s(t._f("formatFilename")(t.selfie.file.name))+"\n          ")]):t._e()])])])]):r("template",{staticClass:"user-verify",slot:"content"},[r("div",{staticStyle:{"margin-top":"4rem"}},[r("p",{staticClass:"has-text-centered is-size-6"},[t._v("\n        No verification required.\n      ")])])]),t._v(" "),r("template",{slot:"button"},[r("button",{staticClass:"button",class:{disabled:t.loading},on:{click:t.handleSubmit}},[t._v("\n      Request Trade\n    ")])]),t._v(" "),r("template",{slot:"helpText"},[t._v("\n    Verify your identity. This is required for large transactions.\n  ")])],2)},[],!1,null,null,"74620a02");e.default=component.exports},74:function(t,e,r){var content=r(94);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var n=r(3).default;t.exports.__inject__=function(t){n("1014946c",content,!0,t)}},75:function(t,e,r){var content=r(96);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var n=r(3).default;t.exports.__inject__=function(t){n("0a0dd866",content,!0,t)}},76:function(t,e,r){t.exports=r.p+"img/7f4923c.png"},77:function(t,e,r){t.exports=r.p+"img/0b367f3.png"},78:function(t,e,r){t.exports=r.p+"img/a8ab662.png"},79:function(t,e,r){t.exports=r.p+"img/9b83fa0.png"},80:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMZSURBVHgB7d1fThNRFMfxc6YtaSImuALLDtiB1QjxRaBvPNCmxBcTE1pXQFmB0x3UUp9BfDGCse6AHVh30ESaGKVzvFMwaVGxt0wvh97fJyFtw5AGvpk7f+4wJQIAAAAAAAAAAAAAAAAAfzFNYH5zP0+c2jFPl8zXAvmpLUSve3urDUqQdZA7pXcVFgkJzjHXTptPdykhVkGyG/u5dCb1hWAES7/wrVU4oAQENgunMoNhCi4RTlUoIVZBzOq0TvA3eUqIVRDydwPujG0QmDIEUQZBlEEQZRBEGQRRBkGUQRBlEEQZBFEmTbOpKyJv6RaaySBm4qjba62V6RbCkKUMgiiDIMrM6kb9v/Ibz3M0Ld+z3fZB2KUJeBdkubRtplu5RtOcbJsTWilWwg979Zdkyasha6W0vWNixFfMTH3mU5iqJsorsuRVECEuk0NxlEfPXty3+RlvgjwpV3PmIUeOBf3MotXyBKogyAiu/wx48ahZZ/N4z4w5W0zUIYe83e29zGxfdo+bYe3363ZjsNvaMENdO4rkkzga7rCGDMjn4RjD3jfCThTxFjmCIIY5M3zldbnHrbBtHiY60LOFIEYg0hljsXGWuTYEMSLm3BiLjbPMtSEIxReRB2tXfX+5WC2To+uaESTGlD8/rfKn/IY5oGRx9m8Y2O29YHZ7a8ulyjpH/d0fZ2cnmSBY4HR6TUiq5PCqfwQZtSRBaj8zlxq8EHIPQ5Yy3gSJD/DI0bHEsDOiE5vlvVpDXB5xx+LTMRenYMbm1TbkYys8eLxZfchBVKPpHld0OArCI/N+ZMm7jfrFaZA8KYWNujIIogyCKIMgyljd62S+eHgTB68TEXY79dprrlpdzPAvM7uXxeL+CpMkYMhSBkGUQRBlEEQZBFEGQZRBEGUQRBkEUQZBlLEN4nxO2je2Qawm7L3BktjfxS6I9BO7pfYsEeE6JcQqyGmr0DbvjijDROpJ3pB/ok9HuFs8LJuJkbJ5+oA8ZX7/rxRR2HuzmugHE0wUZFh8g37yTDZL3W6jgB0cAAAAAAAAAAAAAAAAAEjYL8Ncu6YqixxpAAAAAElFTkSuQmCC"},81:function(t,e,r){t.exports=r.p+"img/59cd034.png"},82:function(t,e,r){"use strict";e.a=(t,e)=>{let r;if("NGN"===e)r=Intl.NumberFormat("en-NG",{style:"currency",currency:"NGN"});else{if("USD"!==e)throw new Error("Unrecognized currency specification: "+e);r=Intl.NumberFormat("en-US",{style:"currency",currency:"USD"})}return r.format(t)}},84:function(t,e,r){t.exports=r.p+"img/b8cee5c.png"},85:function(t,e,r){var map={"./credit_card-active.png":76,"./user_finance-active.png":77,"./user_info-active.png":78,"./user_verify-active.png":79,"./wallet-active.png":80,"./wallet_deposit-active.png":81};function n(t){var e=o(t);return r(e)}function o(t){if(!r.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}n.keys=function(){return Object.keys(map)},n.resolve=o,t.exports=n,n.id=85},86:function(t,e,r){var map={"./credit_card-active.png":76,"./credit_card.png":87,"./user_finance-active.png":77,"./user_finance.png":88,"./user_info-active.png":78,"./user_info.png":89,"./user_verify-active.png":79,"./user_verify.png":90,"./wallet-active.png":80,"./wallet.png":91,"./wallet_deposit-active.png":81,"./wallet_deposit.png":92};function n(t){var e=o(t);return r(e)}function o(t){if(!r.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}n.keys=function(){return Object.keys(map)},n.resolve=o,t.exports=n,n.id=86},87:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIUSURBVHgB7dzNbcJAEIbh4efAMSU4RxAHqCB0kBJCOkgJSQdJBaEEOgh0gASYIy6BIxJgMo5IhEABD3bQyHmfixFaL9jf2uv1WhYBAAAAAAAAAAAAAAAAAAC4lpKl8GQyaZXL5Xf92BKcsyiVSq/1ev3FspIpkDAM57oIBKnFcdxuNpujtOXLYhMITCqVyo2lvDUQ/DECcYZAnCEQZ6qWwnoZ9yiwigQAAADAPuvt967AZLVa9dvt9iJtedPAcDcXAoNarRbpYpC2PLdOnCEQZwjEGVMfcmCoNxufpaC2223SXwY6Bfums379tOtp+SfdL/dyoYsD0R+d6wT+QAoqDMPvjyPLdup6XckgyxHyYzwed7QVfYjNsNFodPa/mM1mgbbMudhEWs/t4Ze6Y7ZipPX8OgxILvlPXWVqA+1pcJmnJ+hDnMnlCFmv16NqtWpqHXokHA2WlsvlQq/bM9eTyHsyTc8AA12cqjOSHOQSyG4k2pOM8qonoaePnuRI64skp/92ysWBaMvsTKfTIo/cv56n0n7jQbfzzrCepeyRLEdIoKeFrhRfR7dTroVO3RkCcYZAnCEQZwjEGQJxhkCcIRBnCMQZAnGGQJwhEGcIxBkCcYZAnCEQZwjEGQJxxhpI6sfqcRlTIHEcm141BBlan+40z94nTxcKbwU6a7PZLCyvZQIAAAAAAAAAAAAAAAAA4F/4BMbbeelYWq1aAAAAAElFTkSuQmCC"},88:function(t,e,r){t.exports=r.p+"img/37acfb7.png"},89:function(t,e,r){t.exports=r.p+"img/3f882db.png"},90:function(t,e,r){t.exports=r.p+"img/4458b1b.png"},91:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALYSURBVHgB7d1fbhJRFMfxM4Mtr3UF0kdamtgViCuo7oCuoHUFhRWIO6grUFcgroAmEOAJcQc8wgPguR002NCaS4ebA/f7SSZlmGnS9MfM/T+IAAAAAAAAAAAAAIhXIhvodDrVQqFwoy9f63YkcWrN5/PPlUrlVnLkHchgMLjSP6QpuJckSb1cLjckJ16BtNvtUrFY/Cl46P3JyclXyUHqc/Lh4eGNYJ0ryYlXIHp5vhOsU5WceAUi8RbgwfgGgi0jEGMIxBgCMYZAjCEQYwjEGAIxhkCMIRBjXsh+Guv2TXbQ3gai3eE12UHcsowhEGMIxJh9LUP+yw1Hy/aMz8/Px7KB6AJZTtKoy5YH23q9XlMrFh/EU1S3rH6/f7OcMRNi5PNaQ/konqIKZLFY1CSs6+Fw+MrnF6IJRK+Okv4oSWDT6fTY53xqWcYQyAotXz4lSXKshXGin+yXun+pb48koGirvQ9p+dKoVCr1P/vLauut3upaeuy7BLrdcYVkfpyentbXHSiXy6PZbHYpgRBI5sl5uWdnZy3JepC3jkAyo5zOeTYCyZRyOufZCCRz8dTBbrdbk0DzmgkkU3XdKusOuE7INE2DLcOg2rukVdu69j255RYNbYPcHRwcHBUKhQt9/1oCzvonkH+5NZNfisXi/Y6GIaFxyzImmkBcA08CtSVWTSaTO5/zY7tCgrW4Hdcd4ztyGFUZ4lbKdjqdt1pY12W77YqRbk3tjvFemRtdob7sBqmKURTqxhCIMQRiDIEY4/WsE+1aCN903dxIAtIanNdkhsfscy2rJDuIW5YxBGIMgRhDIMYQiDEEYgyBGEMgxhCIMQRijG8gwcekY+MbiNeAfURy+794BTKbzXJ7pPY+cQt9JCdegbjxaDeTQvCXCyPPB/Jv9O0IbvJxmqY1fflG4vVLN7cWPdcvJtgokFXL1a1RmUwmGz+pAQAAAAAAAAAAAAAe9xu/5LxmXAcO5QAAAABJRU5ErkJggg=="},92:function(t,e,r){t.exports=r.p+"img/5e8ec04.png"},93:function(t,e,r){"use strict";r.r(e);var n=r(74),o=r.n(n);for(var c in n)"default"!==c&&function(t){r.d(e,t,function(){return n[t]})}(c);e.default=o.a},94:function(t,e,r){(t.exports=r(2)(!1)).push([t.i,".ico-container[data-v-77348c84]{width:70px;height:70px;text-align:center}.ico-container-sm[data-v-77348c84]{width:45px;height:45px;text-align:center}",""])},95:function(t,e,r){"use strict";r.r(e);var n=r(75),o=r.n(n);for(var c in n)"default"!==c&&function(t){r.d(e,t,function(){return n[t]})}(c);e.default=o.a},96:function(t,e,r){(e=t.exports=r(2)(!1)).push([t.i,"@import url(https://fonts.googleapis.com/css?family=Roboto);",""]),e.push([t.i,"@import url(https://fonts.googleapis.com/css?family=Open+Sans:300,400);",""]),e.push([t.i,"@import url(https://fonts.googleapis.com/css?family=Nunito:400,600,700&display=swap);",""]);var n=r(4),o=n(r(6)),c=n(r(7)),d=n(r(8));e.push([t.i,"@font-face{font-family:Avenir Next Lt Pro;font-display:auto;src:url("+o+') format("opentype")}@font-face{font-family:Avenir Next Lt Pro;font-display:auto;src:url('+c+') format("opentype");font-weight:700}@font-face{font-family:Avenir Next Lt Pro;font-display:auto;src:url('+d+') format("opentype");font-weight:500}.wrapper_trader{font-family:Avenir Next Lt Pro,sans-serif;margin-bottom:3rem}.__title{margin-bottom:2rem;font-size:2.7rem;font-family:Open Sans,sans-serif;color:#1b70cf;line-height:normal}.__title .amount__btc{font-weight:700;font-family:Avenir Next Lt Pro,sans-serif;font-size:2rem}.__title .amount__currency{font-weight:500;font-size:2rem}.trader{margin-bottom:3rem}.trader .icons-wrapper{height:530px;box-shadow:0 1px 3px rgba(0,0,0,.161);border-top-left-radius:12px;border-bottom-left-radius:12px;margin-right:10px;background-color:#fff;padding:1.2rem 0;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:center;align-items:center}.trader .icons-wrapper .icon-container{-webkit-box-flex:100%;flex:100%}.trader .content-wrapper{background-color:#fbfbfb;width:100%;border-top-right-radius:12px;border-bottom-right-radius:12px;height:530px;box-shadow:0 1px 3px rgba(0,0,0,.161)}.content-area{font-size:.9rem;position:relative;height:530px;width:100%}.content-area .__title{font-size:1.45rem;margin-bottom:1rem}.content-area .content{height:80%}.content-area label{font-weight:400;font-size:inherit}.content-area input{border-style:solid}.content-area .button-wrapper{text-align:right;position:absolute;right:10px;bottom:40px}.content-area .button-wrapper button{background:#1b70cf;color:#fff;font-weight:600}.help .text{display:inherit;background:#caddf1;color:#fff;border-radius:6px;margin:1.5rem .3rem;padding:.3rem .6rem}.user-verify{font-family:Avenir Next Lt Pro,sans-serif}.user-verify .id-section,.user-verify .selfie-section{width:70%;display:-webkit-box;display:flex;height:130px}.user-verify .id-section img,.user-verify .selfie-section img{height:100%}.user-verify .id-section div.widget-grp,.user-verify .selfie-section div.widget-grp{height:100%;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;justify-content:space-around;margin-left:1rem}.user-verify .id-section div.widget-grp button,.user-verify .selfie-section div.widget-grp button{font-size:.95rem;font-weight:400;border:none}.user-verify .id-section div.widget-grp button.select-file-btn,.user-verify .selfie-section div.widget-grp button.select-file-btn{background:#ebebeb;color:#455e6f}.user-verify .id-section div.widget-grp button.upload-file-btn,.user-verify .selfie-section div.widget-grp button.upload-file-btn{color:#fff;background:#99aec4}.user-verify .id-section{margin-bottom:1.5rem}.user-verify .id-section img{width:55%;height:auto}.wallet_deposit .qrcode-wrapper{display:-webkit-inline-box;display:inline-flex;margin-top:1.2rem}.wallet_deposit .qrcode-wrapper p.qrcode{margin-right:1rem}.wallet_deposit .qrcode-wrapper p.text-wrapper{margin-top:.8rem}.wallet_deposit .qrcode-wrapper p.text-wrapper span.text{line-height:1.2}.wallet_deposit .qrcode-wrapper p.text-wrapper span.icon{margin-top:1.5rem;margin-left:.5rem}.wallet_deposit .address-clipboard-wrapper{margin-top:1rem;margin-bottom:1.5rem}.wallet_deposit .desc-text{margin-top:1rem;margin-bottom:1rem}.wallet_deposit .address-wrapper{height:40px;box-shadow:0 3px 6px rgba(0,0,0,.161);margin-right:1rem;margin-left:1rem}.wallet_deposit .address-wrapper .btc-address{height:100%;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;font-size:12.5px;font-weight:400}.wallet_deposit .clipboard-wrapper{box-sizing:border-box;height:40px;background:#455e6f;color:#fff;font-size:12.5px;opacity:.54;border-radius:4px}',""])},97:function(t,e,r){"use strict";var n=r(19),o={name:"TradeIcon",props:{active:{type:Boolean,default:!1},name:{type:String,required:!0}},computed:{computedIconSrc(){return this.active?r(85)(`./${this.name}-active.png`):r(86)(`./${this.name}.png`)}}},c=r(1);var d={components:{TradeIcon:Object(c.a)(o,function(){var t=this.$createElement;return(this._self._c||t)("div",{class:{"ico-container":!this.$device.isMobile,"ico-container-sm":this.$device.isMobile}},[this._ssrNode("<img"+this._ssrAttr("src",this.computedIconSrc)+this._ssrAttr("alt",this.name)+" data-v-77348c84>")])},[],!1,function(t){var e=r(93);e.__inject__&&e.__inject__(t)},"77348c84","901a3178").exports},filters:{formatMoney:r(82).a},props:{step:{type:String,required:!0}},data:()=>({showHelpText:!1}),computed:{...Object(n.mapState)({tradeType:t=>t.trade.create.type,cryptoAmount:t=>t.trade.create.cryptoAmount,fiatAmount:t=>t.trade.create.fiatAmount,currency:t=>t.trade.create.currency}),iconNameList(){return"sell"===this.tradeType?["user_info","user_finance","wallet_deposit"]:["user_info","wallet","credit_card","user_verify"]}},methods:{isIconActive(t){const e=this.iconNameList.indexOf(t),r=this.iconNameList.indexOf(this.step);return!(e<0||!r<0)&&e<=r},handleCancelTrade(){confirm("Really cancel trade?")&&(this.$store.commit("trade/RESET_CREATE_TRADE"),this.$router.replace({path:"/"}))}}};var l=Object(c.a)(d,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"section",staticStyle:{"margin-bottom":"3rem"}},[t._ssrNode('<div class="container wrapper_trader">',"</div>",[t._ssrNode('<p class="__title has-text-centered">'+("buy"===t.tradeType?"<span>Buying </span>":"<span>Selling </span>")+' <span class="amount__btc">'+t._ssrEscape(t._s(t.cryptoAmount)+" BTC")+'</span> at <span class="amount__currency">'+t._ssrEscape(t._s(t._f("formatMoney")(t.fiatAmount,t.currency)))+'</span> <span style="margin-left: 1.5rem;"><a href="#" style="color: #d50b1f; font-size: 0.8rem;">cancel</a></span></p> '),t._ssrNode('<div class="columns">',"</div>",[t._ssrNode('<div class="column is-three-fifths is-offset-one-fifth">',"</div>",[t._ssrNode('<div class="columns is-mobile trader">',"</div>",[t._ssrNode('<div class="column is-2 icons-wrapper has-text-centered">',"</div>",t._l(t.iconNameList,function(e,i){return n("trade-icon",{key:i,staticClass:"icon-container",attrs:{name:e,active:t.isIconActive(e)}})}),1),t._ssrNode(" "),t.$device.isMobile?t._ssrNode('<div class="column is-9 content-wrapper">',"</div>",[t._ssrNode('<div class="columns">',"</div>",[t._ssrNode('<div class="column is-12">',"</div>",[t._ssrNode('<div class="content-area">',"</div>",[t._ssrNode('<p class="__title">',"</p>",[t._t("title")],2),t._ssrNode(" "),t._ssrNode('<div class="content">',"</div>",[t._t("content")],2),t._ssrNode(" "),t._ssrNode('<div class="button-wrapper">',"</div>",[t._t("button")],2)],2)])])]):t._ssrNode('<div class="column is-9 content-wrapper">',"</div>",[t._ssrNode('<div class="columns is-mobile">',"</div>",[t._ssrNode('<div class="column is-8">',"</div>",[t._ssrNode('<div class="content-area">',"</div>",[t._ssrNode('<p class="__title">',"</p>",[t._t("title")],2),t._ssrNode(" "),t._ssrNode('<div class="content">',"</div>",[t._t("content")],2),t._ssrNode(" "),t._ssrNode('<div class="button-wrapper">',"</div>",[t._t("button")],2)],2)]),t._ssrNode(" "),t._ssrNode('<div class="column is-3 help">',"</div>",[t._ssrNode('<a href class="tooltip-a"><img'+t._ssrAttr("src",r(84))+' alt="Help text tool tip" height="30" width="30"></a> '),t.showHelpText?t._ssrNode('<p class="text">',"</p>",[t._t("helpText")],2):t._e()],2)],2)])],2)])])],2)])},[],!1,function(t){var e=r(95);e.__inject__&&e.__inject__(t)},null,"7dfd589b");e.a=l.exports}};
//# sourceMappingURL=6b6c5d53fd8fb5091aa2.js.map