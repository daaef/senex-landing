(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{230:function(t,e,r){"use strict";e.a=function(t,e){var r;if("NGN"===e)r=Intl.NumberFormat("en-NG",{style:"currency",currency:"NGN"});else{if("USD"!==e)throw new Error("Unrecognized currency specification: "+e);r=Intl.NumberFormat("en-US",{style:"currency",currency:"USD"})}return r.format(t)}},251:function(t,e,r){var content=r(279);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(10).default)("b9c3004e",content,!0,{sourceMap:!1})},276:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHHSURBVHgB7dhPTsJAFAbw71U0LjB6BI7gEfAAYti5EMETGE9guQGcQARj3KF4Am7ADeQITYTEmLbPaaIbbUs78qczvN+KlJmkX9v3ph1ACCGEKAxaNOCgMWox0FQ/qyg64gkzdeeDWi9xSNr88uXrLZhdmIbInfVP27F/Jc35vrN3MJQ696u4O+2kTGjCYJRw/k7KnCrMVo076GDLbF3gEjSo+u6pKzXGhoXMVSLK1Wu0AiPA+P0xea1bF7WS5G6uUsO2k6aVBTl8XW6MNv5iEgKVhR8Dv+g1LaJjFEDesBGpYdtJ08qCQ9wEQfCMJSnt7rxhTfSaFsP7eKpPsSSq42NdpIZtt3WBE9duVVcMw80GtT/55JG2nQS2nd6bVqA2uVe4xXPUGlb8YDVvX/JI205qOBOHDvfPhxWsiO+jorWdkYHenhZxR33SdWAgqWHb2RuYeBJ32NrAzHQfd9zOwEST+aAW21TtCkzw1K1tlxz/JGmI3jr8g7mrrtnSdi//g0PH2937nHr9upc2Tj+wupKzhzMXhtF7pA0NG8kf2OCwkXyBDQ8byR7YgrCRbIEtCRtZHNiisJH0wJaFTVW+eHEhhBAF8wU0QYsr094EwQAAAABJRU5ErkJggg=="},277:function(t,e,r){var n;!function(){var r={months:["January","February","March","April","May","June","July","August","September","October","November","December"],toUTC:function(input){var t=input?new Date(input):new Date;return t=new Date(t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate(),t.getUTCHours(),t.getUTCMinutes(),t.getUTCSeconds())},monthName:function(t){var e;return e="number"==typeof t?t:new Date(t).getMonth()+1,r.months[e-1]},relativeTime:function(input,t){var e,time,r,n,o,c,output=[];if("number"==typeof input?e=input:(n=new Date(input).getTime(),e=((new Date).getTime()-n)/1e3*-1),t||(t={}),t.futureSuffix||(t.futureSuffix="from now"),t.pastSuffix||(t.pastSuffix="ago"),t.presentText||(t.presentText="now"),t.returnObject||(t.returnObject=!1),o=e<0,e=Math.abs(e),time={seconds:Math.floor(e%31536e3%86400%3600%60),minutes:Math.floor(e%31536e3%86400%3600/60),hours:Math.floor(e%31536e3%86400/3600),days:Math.floor(e%31536e3/86400),years:Math.floor(e/31536e3),past:o},t.returnObject)return time;if(0===e)return t.presentText;function d(e,r){c&&(c=t.allUnits,output.push(e+" "+r+(e>1?"s":"")))}return r=time.past?t.pastSuffix:t.futureSuffix,c=!0,time.years&&d(time.years,"year"),time.days&&d(time.days,"day"),time.hours&&d(time.hours,"hour"),time.minutes&&d(time.minutes,"minute"),time.seconds&&d(time.seconds,"second"),output.join(", ")+" "+r},prettyPrint:function(input,t){var e,r,n,o,c,d,l,f,m;return input?"number"==typeof input&&(input=(new Date).setSeconds(input)):input=new Date,t||(t={}),t.showTime||(t.showTime=!1),o=(n=(e=new Date(input)).getDate())>3&&n<21?n+"th":n%10==1?n+"st":n%10==2?n+"nd":n%10==3?n+"rd":n+"th",c=e.getFullYear(),r=this.monthName(e.getMonth()+1)+" "+o+", "+c,m=(l=e.getHours())>=12?"pm":"am",d=(l=l%12?l%12:12)+":"+(f=(f=e.getMinutes())<10?"0"+f:f)+" "+m,t.showTime?r+" at "+d:r}};if(!t.exports)return!(void 0!==(n=function(){return r}.apply(e,[]))&&(t.exports=n));t.exports=r}()},278:function(t,e,r){"use strict";var n=r(251);r.n(n).a},279:function(t,e,r){(e=t.exports=r(9)(!1)).push([t.i,"@import url(https://fonts.googleapis.com/css?family=Roboto);",""]),e.push([t.i,"@import url(https://fonts.googleapis.com/css?family=Open+Sans:300,400);",""]);var n=r(22),o=n(r(40)),c=n(r(41)),d=n(r(42));e.push([t.i,"@font-face{font-family:Avenir Next Lt Pro;src:url("+o+') format("opentype")}@font-face{font-family:Avenir Next Lt Pro;src:url('+c+') format("opentype");font-weight:700}@font-face{font-family:Avenir Next Lt Pro;src:url('+d+') format("opentype");font-weight:500}div.wrapper[data-v-9afec9d6]{min-height:580px;margin-bottom:3rem;margin-top:2rem;font-family:Avenir Next Lt Pro,sans-serif}div.wrapper p.p-heading[data-v-9afec9d6]{color:#1b70cf;font-size:1.7rem;margin-bottom:1.5rem}.content-wrapper .message-area[data-v-9afec9d6],.content-wrapper .status-area[data-v-9afec9d6]{height:350px}.content-wrapper .status-area[data-v-9afec9d6]{box-shadow:0 1px 3px rgba(0,0,0,.161);border-radius:10px;margin-right:1rem;padding:0;text-align:center}.content-wrapper .status-area .grey-header-area[data-v-9afec9d6]{background:#fbfbfb;border-bottom:rgba(0,0,0,.161);text-align:center;padding:.9rem 0}.content-wrapper .status-area .grey-header-area .status[data-v-9afec9d6]{color:#1b70cf;font-size:1.159rem}.content-wrapper .status-area .grey-header-area .progress-bar[data-v-9afec9d6]{width:70%;background:#f5f5f5;height:15px;border-radius:10px;margin:6px auto 0;padding:0;text-align:left}.content-wrapper .status-area .grey-header-area .progress-bar .percent[data-v-9afec9d6]{display:inline-block;text-align:left;height:inherit;background:#1b70cf;margin:0;padding:0;border-radius:inherit}.content-wrapper .status-area .grey-header-area .progress-bar .percent.percent-20[data-v-9afec9d6]{width:20%}.content-wrapper .status-area .grey-header-area .progress-bar .percent.percent-40[data-v-9afec9d6]{width:40%;background:#00d1b1}.content-wrapper .status-area .grey-header-area .progress-bar .percent.percent-60[data-v-9afec9d6]{width:60%}.content-wrapper .status-area .grey-header-area .progress-bar .percent.percent-80[data-v-9afec9d6]{width:80%;background:#fedd56}.content-wrapper .status-area .grey-header-area .progress-bar .percent.percent-100[data-v-9afec9d6]{width:100%;background:#58c13d}.content-wrapper .status-area .grey-header-area .progress-bar .percent.percent-101[data-v-9afec9d6]{width:100%;background:#fe385f}.content-wrapper .status-area .content[data-v-9afec9d6]{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;padding:.7rem .8rem 1rem;text-align:left;font-size:.95rem}.content-wrapper .status-area .content p[data-v-9afec9d6]{margin:.3rem 0}.content-wrapper .status-area .content p span._title[data-v-9afec9d6]{display:block;color:#1b70cf;margin-bottom:.2rem}.content-wrapper .status-area .content p span._item[data-v-9afec9d6]{display:block;color:#838383;word-wrap:break-word}.content-wrapper .status-area .content .brief[data-v-9afec9d6]{border-bottom:1px solid #0c5db2;padding-bottom:.3rem;color:#1b70cf}.content-wrapper .status-area .content .date[data-v-9afec9d6]{color:#1b70cf}.content-wrapper .message-area[data-v-9afec9d6]{box-shadow:0 1px 3px rgba(0,0,0,.161);border-radius:10px;background:#fbfbfb;padding:.84rem .5rem}.content-wrapper .message-area .title-area[data-v-9afec9d6]{margin:0;padding:0}.content-wrapper .message-area .title-area img[data-v-9afec9d6]{height:40px;width:40px}.content-wrapper .message-area .title-area .text[data-v-9afec9d6]{font-size:.9rem;font-weight:500}.content-wrapper .message-area .title-area .status[data-v-9afec9d6]{font-size:.7rem}.content-wrapper .message-area .chat-container[data-v-9afec9d6]{background:#fff;border-radius:6px;padding:.2rem .1rem;height:70%;width:100%;margin:0;overflow:auto}.content-wrapper .message-area .chat-container .chat[data-v-9afec9d6]{font-size:.95rem;line-height:1;width:80%;height:auto;color:#4b4b4b;border-radius:6px;padding:.4rem;margin:.4rem 0}.content-wrapper .message-area .chat-container .chat-sent[data-v-9afec9d6]{background:#abcaeb;float:right}.content-wrapper .message-area .chat-container .chat-sent .time-info[data-v-9afec9d6]{font-size:.7rem;margin-top:.7rem;font-weight:500;padding-top:.8rem;float:right}.content-wrapper .message-area .chat-container .chat-sent .time-info .name[data-v-9afec9d6]{font-weight:400}.content-wrapper .message-area .chat-container .chat-received[data-v-9afec9d6]{background:#f4f4f4;float:left}.content-wrapper .message-area .chat-container .chat-received .time-info[data-v-9afec9d6]{font-size:.7rem;margin-top:.7rem;font-weight:500;float:left}.content-wrapper .message-area .chat-container .chat-received .time-info .name[data-v-9afec9d6]{font-weight:400}.content-wrapper .message-area .send-input-container[data-v-9afec9d6]{margin:1rem 0 auto}.content-wrapper .message-area .send-input-container input[data-v-9afec9d6]{font-size:.8rem;border-radius:12px}.content-wrapper .message-area .send-input-container .button[data-v-9afec9d6]{font-size:.8rem;border-radius:12px;color:#fff;background:#0c5db2}.success[data-v-9afec9d6]{color:#58c13d}',""])},311:function(t,e,r){"use strict";r.r(e);var n=[function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"has-text-weight-semibold p-heading has-text-centered"},[this._v("\n      Trade Status\n      "),e("span",{staticClass:"is-block has-text-centered has-text-weight-normal",staticStyle:{"font-size":"0.95rem",color:"#d5d5d5"}},[this._v("\n        Track status of your pending trade\n      ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"title-area columns is-mobile is-gapless"},[e("div",{staticClass:"column is-3"},[e("img",{attrs:{src:r(276),alt:""}})]),this._v(" "),e("div",{staticClass:"column is-9"},[e("span",{staticClass:"text is-block"},[this._v("SenexPAY Support")]),this._v(" "),e("span",{staticClass:"status is-block"},[e("i",{staticClass:"fas fa-users"}),this._v(" Opened\n            ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"file-cta"},[e("span",{staticStyle:{"margin-bottom":"8px"}},[e("b",[this._v("Govt. ID")])]),this._v(" "),e("span",{staticClass:"file-icon",staticStyle:{"margin-bottom":"8px"}},[e("i",{staticClass:"fas fa-id-card fa-3x"})]),this._v(" "),e("span",{staticClass:"file-label"},[this._v("\n                Choose file…\n              ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"file-cta"},[e("span",{staticStyle:{"margin-bottom":"8px"}},[e("b",[this._v("Selfie")])]),this._v(" "),e("span",{staticClass:"file-icon",staticStyle:{"margin-bottom":"8px"}},[e("i",{staticClass:"fas fa-camera-retro fa-3x"})]),this._v(" "),e("span",{staticClass:"file-label"},[this._v("\n                Choose file…\n              ")])])}],o=(r(32),r(18),r(87),r(39)),c=(r(19),r(3)),d=r(277),l=r.n(d),f=r(230),m={layout:"blue",validate:function(t){var e=t.query,r=t.store;return!!e.trade_id&&!!r.state.trade.track.tradeId},filters:{formatMoney:f.a,prettydate:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return l.a.prettyPrint(t,{showTime:e})}},data:function(){return{messageText:"",sendingMessage:!1,interval1:null}},asyncData:function(){var t=Object(c.a)(regeneratorRuntime.mark(function t(e){var r,n,c,d,l,f;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.query,n=e.app.$axios,t.next=3,Promise.all([n.get("/trade/".concat(r.trade_id,"/")),n.get("/trade/".concat(r.trade_id,"/messages/"))]);case 3:return c=t.sent,d=Object(o.a)(c,2),l=d[0],f=d[1],t.abrupt("return",{tradeData:l.data,messages:f.data.sort(function(a,b){return a.id-b.id})});case 8:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),mounted:function(){this.interval1=setInterval(this.pollMessages,5e3)},beforeDestroy:function(){clearInterval(this.interval1)},methods:{pollMessages:function(){var t=Object(c.a)(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.$axios.get("/trade/".concat(this.query.trade_id,"/messages/"));case 3:e=t.sent,this.messageResp=e.data.sort(function(a,b){return a.id-b.id}),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:return t.prev=9,t.finish(9);case 11:case"end":return t.stop()}},t,this,[[0,7,9,11]])}));return function(){return t.apply(this,arguments)}}(),handleSendMessage:function(){var t=Object(c.a)(regeneratorRuntime.mark(function t(){var e,r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(JSON.stringify(this.tradeData)),t.next=3,this.$validator.validateAll();case 3:if(!t.sent){t.next=21;break}return t.prev=5,e={body:this.messageText,trade:this.tradeData.id},this.sendingMessage=!0,t.next=10,this.$axios.post("/trade/".concat(this.tradeData.id,"/messages/"),e);case 10:r=t.sent,this.messages.push(r.data),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(5),this.$swal({title:"Error:",type:"error",position:"top-end",text:"Couldn't send message; try again",timer:7e3,toast:!0,showConfirmButton:!1});case 17:return t.prev=17,this.sendingMessage=!1,this.messageText="",t.finish(17);case 21:case"end":return t.stop()}},t,this,[[5,14,17,21]])}));return function(){return t.apply(this,arguments)}}(),uploadDoc:function(){var t=Object(c.a)(regeneratorRuntime.mark(function t(e,r){var n,o,c,d;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(0!==(n=e.target.files||e.dataTransfer.files).length){t.next=3;break}return t.abrupt("return");case 3:return(o=new FormData).append("datafile",n[0]),t.prev=5,t.next=8,this.$axios.post("/upload/",o,{headers:{"content-type":"multipart/form-data"}});case 8:return c=t.sent,d={trade:this.tradeData.id},"idCard"===r?d.govtIssuedId=c.data.datafile:d.selfieWithId=c.data.datafile,t.next=13,this.$axios.put("/trade/".concat(this.requestBody.trade,"/kyc/"),d);case 13:this.$swal({title:"Done:",type:"success",position:"top-end",text:"Your document was uploaded successfully",timer:7e3,toast:!0,showConfirmButton:!1}),t.next=19;break;case 16:t.prev=16,t.t0=t.catch(5),this.$swal({title:"Error:",type:"error",position:"top-end",text:"Failed to upload; try again",timer:7e3,toast:!0,showConfirmButton:!1});case 19:return t.prev=19,t.finish(19);case 21:case"end":return t.stop()}},t,this,[[5,16,19,21]])}));return function(e,r){return t.apply(this,arguments)}}()}},v=(r(278),r(2)),component=Object(v.a)(m,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"section"},[r("div",{staticClass:"container wrapper"},[t._m(0),t._v(" "),r("div",{staticClass:"columns is-centered content-wrapper"},[r("div",{staticClass:"column is-4 status-area",style:t.$device.isMobile?"margin-bottom: 1.5rem;":""},[r("div",{staticClass:"grey-header-area"},[r("p",{staticClass:"status"},["pending"===t.tradeData.status?r("span",[t._v("Pending")]):t._e(),t._v(" "),"paid"===t.tradeData.status?r("span",[t._v("Paid")]):t._e(),t._v(" "),"kyc_passed"===t.tradeData.status?r("span",[t._v("KYC Approved")]):t._e(),t._v(" "),"disbursed"===t.tradeData.status?r("span",[t._v("Disbursed")]):t._e(),t._v(" "),"completed"===t.tradeData.status?r("span",[t._v("Complete")]):t._e(),t._v(" "),"expired"===t.tradeData.status?r("span",[t._v("Expired")]):t._e()]),t._v(" "),r("div",{staticClass:"progress-bar"},[r("span",{staticClass:"percent",class:{"percent-20":"pending"===t.tradeData.status,"percent-40":"paid"===t.tradeData.status,"percent-60":"kyc_passed"===t.tradeData.status,"percent-80":"disbursed"===t.tradeData.status,"percent-100":"completed"===t.tradeData.status,"percent-101":"expired"===t.tradeData.status}})])]),t._v(" "),r("div",{staticClass:"content"},[r("p",{staticClass:"brief"},[t._v("\n            "+t._s(t.tradeData.firstName)+" "+t._s(t.tradeData.lastName)+",\n            "),"buy"===t.tradeData.type?r("span",[t._v("Buying")]):r("span",[t._v("Selling")]),t._v(" "),r("b",[t._v(t._s(t.tradeData.cryptoAmount))]),t._v("BTC\n          ")]),t._v(" "),r("p",[r("span",{staticClass:"_title"},[t._v(t._s("buy"==t.tradeData.type?"We Receive":"Your are Paid"))]),t._v(" "),r("span",{staticClass:"_item"},[r("b",[t._v(t._s(t._f("formatMoney")(t.tradeData.fiatAmount,"NGN")))])])]),t._v(" "),t.tradeData.walletAddress?r("p",[r("span",{staticClass:"_title"},[t._v("Payout to Wallet")]),t._v(" "),r("span",{staticClass:"_item"},[t._v("\n              "+t._s(t.tradeData.walletAddress)+"\n            ")])]):r("p",[r("span",{staticClass:"_title"},[t._v("Deposit to Bank")]),t._v(" "),r("span",{staticClass:"_item"},[t._v("\n              "+t._s(t.tradeData.accountNumber)+"\n            ")])]),t._v(" "),r("p",[r("span",{staticClass:"_title"},[t._v("KYC Status")]),t._v(" "),null==t.tradeData.kyc?r("span",{staticClass:"_item"},[t._v("\n              Not Required\n            ")]):r("span",{staticClass:"_item"},[t._v("\n              "+t._s(t.tradeData.kyc.status)+"\n            ")])]),t._v(" "),r("p",{staticClass:"date"},[r("svg",{staticStyle:{"vertical-align":"middle"},attrs:{width:"100",height:"2",viewBox:"0 0 69 2",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{d:"M3.05176e-05 1H69",stroke:"#0C5DB2"}})]),t._v(" "),r("span",[t._v(t._s(t._f("prettydate")(t.tradeData.created,!0)))])])])]),r("br"),t._v(" "),r("div",{staticClass:"column is-4 message-area",style:t.$device.isMobile?"margin-top: 1.5rem;":""},[t._m(1),t._v(" "),r("div",{staticClass:"chat-container"},t._l(t.messages,function(e){return r("div",{key:e.id,staticClass:"chat",class:{"chat-sent":!e.admin,"chat-received":e.admin}},[t._v("\n            "+t._s(e.body)+"\n            "),r("p",{staticClass:"time-info"},[e.admin?r("span",{staticClass:"name"},[t._v("Admin - ")]):r("span",{staticClass:"name"},[t._v("You - ")]),t._v("\n              "+t._s(t._f("prettydate")(e.created))+"\n            ")])])}),0),t._v(" "),r("form",{staticClass:"send-input-container"},[r("div",{staticClass:"field is-grouped"},[r("p",{staticClass:"control is-expanded"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.messageText,expression:"messageText"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"input",attrs:{type:"text",name:"message text",placeholder:"Type message"},domProps:{value:t.messageText},on:{input:function(e){e.target.composing||(t.messageText=e.target.value)}}})]),t._v(" "),r("p",{staticClass:"control"},[r("button",{staticClass:"button is-info",class:{"is-loading":t.sendingMessage},on:{click:function(e){return e.preventDefault(),t.handleSendMessage(e)}}},[t._v("\n                Send\n              ")])])])])])]),t._v(" "),r("br"),t._v(" "),null!=t.tradeData.kyc&&"failed"==t.tradeData.kyc.status?r("div",{staticClass:"columns is-centered"},[r("div",{staticClass:"field"},[r("div",{staticClass:"file is-dark is-small is-boxed has-name"},[r("label",{staticClass:"file-label"},[r("input",{staticClass:"file-input",attrs:{type:"file",accept:"image/*",name:"idcard"},on:{change:function(e){return t.uploadDoc(e,"idCard")}}}),t._v(" "),t._m(2),t._v(" "),r("span",{staticClass:"file-name"},[t._v("\n              Screen Sho.png\n            ")])])])]),t._v("  \n      "),r("div",{staticClass:"field"},[r("div",{staticClass:"file is-dark is-small is-boxed has-name"},[r("label",{staticClass:"file-label"},[r("input",{staticClass:"file-input",attrs:{type:"file",accept:"image/*",name:"selfie"},on:{change:function(e){return t.uploadDoc(e,"selfie")}}}),t._v(" "),t._m(3),t._v(" "),r("span",{staticClass:"file-name"},[t._v("\n              Screen S.png\n            ")])])])])]):t._e()])])},n,!1,null,"9afec9d6",null);e.default=component.exports}}]);