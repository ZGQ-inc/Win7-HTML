(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3d56897b"],{"30dd":function(t,e,n){t.exports=n.p+"media/error-win2k.b380dff0.mp3"},"74ec":function(t,e,n){t.exports=n.p+"media/error-win10.8d111783.mp3"},"7e41":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:["window","active",{centered:t.centered}]},[t._t("default")],2)},a=[],r={props:{centered:{type:Boolean,default:!0}}},o=r,s=(n("d5c9"),n("2877")),c=Object(s["a"])(o,i,a,!1,null,"ce7844fc",null);e["a"]=c.exports},"8f15":function(t,e,n){},9951:function(t,e,n){},a4d9:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("window",{staticClass:"maximized",attrs:{id:"window-"+t.game.id,resizable:!1}},[n("title-bar",{attrs:{title:t.game.name,icon:t.game.icon}},[n("controls",{attrs:{hasMaxi:!1}})],1),n("div",{staticClass:"container"},[t.isOnline?n("iframe",{attrs:{src:t.game.url,allowfullscreen:""}}):n("error",{on:{close:t.close}},[t._v(t._s(t.$t("network-error")))])],1)],1)},a=[],r=n("1da1"),o=(n("96cf"),n("3af2")),s=n("6210"),c=n("10dc"),d=n("c02b"),u=n("01b4"),l=n("e302"),f=n("6792"),m={data:function(){var t=this.$store.state.onlineGames;return{isOnline:!0,game:t[t.length-1]}},mounted:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(l["j"])();case 2:t.isOnline=e.sent;case 3:case"end":return e.stop()}}),e)})))()},destroyed:function(){this.$store.commit(u["a"].GameClose,this.game.id)},methods:{close:function(){this.$root.$emit(f["f"].CloseWindow,this.game.id)}},components:{Window:c["a"],TitleBar:s["a"],Controls:o["a"],Error:d["a"]}},p=m,w=(n("aa4d"),n("2877")),b=Object(w["a"])(p,i,a,!1,null,"6fb96f3e",null);e["default"]=b.exports},aa4d:function(t,e,n){"use strict";n("8f15")},c02b:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("window-static",[n("title-bar",[n("controls",{attrs:{hasMaxi:!1,hasMini:!1,close:t.close}})],1),n("div",{staticClass:"container"},[n("main",[n("img",{attrs:{src:t.icon}}),n("pre",[t._t("default")],2)])]),n("div",{staticClass:"footer flex-right"},[n("button",{staticClass:"bt bt-primary",on:{click:function(e){return e.stopPropagation(),t.close(e)}}},[t._v(t._s(t.$t("ok")))])])],1)},a=[],r=n("2f62"),o=n("0f35"),s=n("7e41"),c=n("3af2"),d=n("6210"),u=n("db7a"),l=n.n(u),f=n("d534"),m=n.n(f),p=n("30dd"),w=n.n(p),b=n("ed56"),h=n.n(b),v=n("74ec"),x=n.n(v),g={data:function(){var t=this.$store.state.assets.icos;return{icon:Object(o["a"])(t,"error")}},computed:Object(r["b"])(["theme"]),mounted:function(){var t=this.theme,e=l.a;"win95"===t&&(e=m.a),"win2k"===t&&(e=w.a),"winxp"===t&&(e=h.a),"win10"===t&&(e=x.a),new Audio(e).play()},methods:{close:function(){this.$emit("close")}},components:{WindowStatic:s["a"],Controls:c["a"],TitleBar:d["a"]}},_=g,$=(n("cad2"),n("2877")),O=Object($["a"])(_,i,a,!1,null,"cedc8c14",null);e["a"]=O.exports},cad2:function(t,e,n){"use strict";n("9951")},d534:function(t,e,n){t.exports=n.p+"media/error-win95.bde7e8f2.mp3"},d5c9:function(t,e,n){"use strict";n("ff46")},db7a:function(t,e,n){t.exports=n.p+"media/error-win7.6093725c.mp3"},ed56:function(t,e,n){t.exports=n.p+"media/error-winxp.6ed0792c.mp3"},ff46:function(t,e,n){}}]);