(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{249:function(e,t,n){var content=n(273);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(10).default)("44e4a3fe",content,!0,{sourceMap:!1})},272:function(e,t,n){"use strict";var r=n(249);n.n(r).a},273:function(e,t,n){(t=e.exports=n(9)(!1)).push([e.i,"@import url(https://fonts.googleapis.com/css?family=Roboto);",""]),t.push([e.i,"@import url(https://fonts.googleapis.com/css?family=Open+Sans:300,400);",""]);var r=n(22),o=r(n(40)),c=r(n(41)),d=r(n(42));t.push([e.i,"@font-face{font-family:Avenir Next Lt Pro;src:url("+o+') format("opentype")}@font-face{font-family:Avenir Next Lt Pro;src:url('+c+') format("opentype");font-weight:700}@font-face{font-family:Avenir Next Lt Pro;src:url('+d+') format("opentype");font-weight:500}div.wrapper[data-v-bc7c726a]{margin-bottom:3em;margin-top:2rem;font-family:Avenir Next Lt Pro,sans-serif}div.wrapper .title[data-v-bc7c726a]{font-size:1.7em;color:#1b70cf}div.wrapper .q-wrapper .q-item[data-v-bc7c726a]{padding:0;background:#fbfbfb;margin:0 0 .15em}div.wrapper .q-wrapper .q-item.expanded .a[data-v-bc7c726a]{display:block}div.wrapper .q-wrapper .q-item.expanded .icon-expand[data-v-bc7c726a]{display:none}div.wrapper .q-wrapper .q-item.expanded .icon-hide[data-v-bc7c726a]{display:inherit}div.wrapper .q-wrapper .q-item .icon-hide[data-v-bc7c726a]{display:none}div.wrapper .q-wrapper .q-item .q[data-v-bc7c726a]{padding:.8em 1.5em;background-color:#0c5db2;color:#fff;line-height:normal;border-radius:2px;font-size:1.2em}div.wrapper .q-wrapper .q-item .q[data-v-bc7c726a]:hover{cursor:pointer}div.wrapper .q-wrapper .q-item .a[data-v-bc7c726a]{padding:1em 1.5em;border:1px solid rgba(0,0,0,.161);border-top:0;border-radius:2px;color:#000;line-height:normal;display:none}',""])},307:function(e,t,n){"use strict";n.r(t);var r={layout:"blue",data:function(){},head:function(){return{title:"FAQs - SenexPAY",meta:[{hid:"description",name:"description",content:"Find out more about SenexPAY, see a range of frequently asked questions and possible answers that might be of help in exchanging your bitcoins"}]}},asyncData:function(e){return e.$axios.get("/faqs/").then(function(e){return{items:e.data.results.sort(function(a,b){return a.number-b.number})}})},methods:{toggleQuestionView:function(e){var element=document.getElementById(e);element&&element.classList.toggle("expanded")}}},o=(n(272),n(2)),component=Object(o.a)(r,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"section"},[n("div",{staticClass:"container wrapper"},[n("p",{staticClass:"title has-text-centered has-text-weight-semibold"},[e._v("\n      FAQ\n    ")]),e._v(" "),n("div",{staticClass:"columns"},[n("div",{staticClass:"column is-6 is-offset-3 q-wrapper"},[0===e.items.length?n("div",[n("p",{staticClass:"has-text-centered"},[e._v("\n            There are no frequently asked questions yet.\n          ")])]):e._e(),e._v(" "),e._l(e.items,function(t,i){return n("div",{key:t.id,staticClass:"q-item",attrs:{id:"qa-"+i}},[n("p",{staticClass:"q",on:{click:function(t){return e.toggleQuestionView("qa-"+i)}}},[e._v("\n            "+e._s(t.question)+"\n            "),e._m(0,!0),e._v(" "),e._m(1,!0)]),e._v(" "),n("p",{staticClass:"a"},[e._v("\n            "+e._s(t.answer)+"\n          ")])])})],2)])])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("span",{staticClass:"icon is-pulled-right icon-expand"},[t("i",{staticClass:"fas fa-fw fa-chevron-right"})])},function(){var e=this.$createElement,t=this._self._c||e;return t("span",{staticClass:"icon is-pulled-right icon-hide"},[t("i",{staticClass:"fas fa-fw fa-chevron-down"})])}],!1,null,"bc7c726a",null);t.default=component.exports}}]);