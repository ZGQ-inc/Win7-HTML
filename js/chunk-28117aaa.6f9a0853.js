(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-28117aaa"],{"00d7":function(t,e,a){},1148:function(t,e,a){"use strict";var r=a("a691"),i=a("1d80");t.exports=function(t){var e=String(i(this)),a="",n=r(t);if(n<0||n==1/0)throw RangeError("Wrong number of repetitions");for(;n>0;(n>>>=1)&&(e+=e))1&n&&(a+=e);return a}},"129f":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},"1a7c":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"navigation"},[a("button",{class:["button","round","mr-5",{active:t.activeBack}],on:{click:function(e){return t.$emit("navigate","back")}}},[t.isWin10?a("i",{staticClass:"las la-arrow-left"}):a("i",{staticClass:"fa fa-arrow-left"})]),a("button",{class:["button","round",{active:t.activeNext}],on:{click:function(e){return t.$emit("navigate","next")}}},[t.isWin10?a("i",{staticClass:"las la-arrow-right"}):a("i",{staticClass:"fa fa-arrow-right"})])])},i=[],n=a("5530"),s=a("2f62"),o={props:{activeBack:Boolean,activeNext:Boolean},computed:Object(n["a"])(Object(n["a"])({},Object(s["b"])(["theme"])),{},{isWin10:function(){return"win10"===this.theme}})},c=o,l=(a("76bf"),a("2877")),u=Object(l["a"])(c,r,i,!1,null,"7562fab5",null);e["a"]=u.exports},"408a":function(t,e,a){var r=a("c6b6");t.exports=function(t){if("number"!=typeof t&&"Number"!=r(t))throw TypeError("Incorrect invocation");return+t}},"5e89":function(t,e,a){var r=a("861d"),i=Math.floor;t.exports=function(t){return!r(t)&&isFinite(t)&&i(t)===t}},"76bf":function(t,e,a){"use strict";a("846d")},7930:function(t,e,a){"use strict";a("9568")},"841c":function(t,e,a){"use strict";var r=a("d784"),i=a("825a"),n=a("1d80"),s=a("129f"),o=a("14c3");r("search",1,(function(t,e,a){return[function(e){var a=n(this),r=void 0==e?void 0:e[t];return void 0!==r?r.call(e,a):new RegExp(e)[t](String(a))},function(t){var r=a(e,t,this);if(r.done)return r.value;var n=i(t),c=String(this),l=n.lastIndex;s(l,0)||(n.lastIndex=0);var u=o(n,c);return s(n.lastIndex,l)||(n.lastIndex=l),null===u?-1:u.index}]}))},"846d":function(t,e,a){},"8ba4":function(t,e,a){var r=a("23e7"),i=a("5e89");r({target:"Number",stat:!0},{isInteger:i})},9568:function(t,e,a){},"962a":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"addrbar"},[t._t("default"),t.icon&&t.location?a("div",{staticClass:"addr",style:{backgroundImage:"url("+t.icon+")"}},["string"===typeof t.location?a("label",[t._v(t._s(t.location))]):t._l(t.location,(function(e,r){return a("label",{key:r},[t._v(t._s(e))])}))],2):t._e(),t.hasSearch||t.search?a("div",{staticClass:"input"},[a("input",{attrs:{type:"search",placeholder:t.$t("search")+" "+t.currentLocation},on:{input:t.handleSearch}})]):t._e()],2)},i=[],n=(a("fb6a"),a("ac1f"),a("841c"),{props:{icon:{type:String,default:null},location:{type:[String,Array],default:null},search:Function,hasSearch:Boolean},computed:{currentLocation:function(){var t=this.location.slice(0);return"string"===typeof t?t:t.pop()}},methods:{handleSearch:function(t){this.search&&this.search(t)}}}),s=n,o=(a("f76a"),a("2877")),c=Object(o["a"])(s,r,i,!1,null,"1d256d67",null);e["a"]=c.exports},ace8:function(t,e,a){"use strict";a("b8d6")},b680:function(t,e,a){"use strict";var r=a("23e7"),i=a("a691"),n=a("408a"),s=a("1148"),o=a("d039"),c=1..toFixed,l=Math.floor,u=function(t,e,a){return 0===e?a:e%2===1?u(t,e-1,a*t):u(t*t,e/2,a)},d=function(t){var e=0,a=t;while(a>=4096)e+=12,a/=4096;while(a>=2)e+=1,a/=2;return e},f=function(t,e,a){var r=-1,i=a;while(++r<6)i+=e*t[r],t[r]=i%1e7,i=l(i/1e7)},p=function(t,e){var a=6,r=0;while(--a>=0)r+=t[a],t[a]=l(r/e),r=r%e*1e7},h=function(t){var e=6,a="";while(--e>=0)if(""!==a||0===e||0!==t[e]){var r=String(t[e]);a=""===a?r:a+s.call("0",7-r.length)+r}return a},m=c&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!o((function(){c.call({})}));r({target:"Number",proto:!0,forced:m},{toFixed:function(t){var e,a,r,o,c=n(this),l=i(t),m=[0,0,0,0,0,0],v="",y="0";if(l<0||l>20)throw RangeError("Incorrect fraction digits");if(c!=c)return"NaN";if(c<=-1e21||c>=1e21)return String(c);if(c<0&&(v="-",c=-c),c>1e-21)if(e=d(c*u(2,69,1))-69,a=e<0?c*u(2,-e,1):c/u(2,e,1),a*=4503599627370496,e=52-e,e>0){f(m,0,a),r=l;while(r>=7)f(m,1e7,0),r-=7;f(m,u(10,r,1),0),r=e-1;while(r>=23)p(m,1<<23),r-=23;p(m,1<<r),f(m,1,1),p(m,2),y=h(m)}else f(m,0,a),f(m,1<<-e,0),y=h(m)+s.call("0",l);return l>0?(o=y.length,y=v+(o<=l?"0."+s.call("0",l-o)+y:y.slice(0,o-l)+"."+y.slice(o-l))):y=v+y,y}})},b8d6:function(t,e,a){},c82f:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",{staticClass:"view-details"},[a("tr",t._l(t.columns,(function(e){return a("th",{key:e},[t._v(t._s(t.$t(e)))])})),0),t._t("default")],2)},i=[],n={props:{columns:{type:Array,default:function(){return["title","length","size","modified","type"]}}}},s=n,o=(a("ace8"),a("2877")),c=Object(o["a"])(s,r,i,!1,null,"53d3161e",null);e["a"]=c.exports},f76a:function(t,e,a){"use strict";a("00d7")},fed6:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=this,a=e.$createElement,r=e._self._c||a;return r("window",{attrs:{id:"window-player",className:e.isPlaying?"now-playing":""}},[r("title-bar",{attrs:{icon:"player",title:"Windows Media Player"}},[r("controls")],1),r("address-bar",[r("navigation"),r("div",{staticClass:"addr pl-0"},[r("label",[e._v(e._s(e.$t("library")))]),r("label",[e._v(e._s(e.library))])])],1),r("div",{staticClass:"toolbar"},[r("div",{staticClass:"toolbar-item has-sub"},[e._v(" "+e._s(e.$t("organize"))+" "),r("ul",{staticClass:"toolbar-item-lv2"},[r("li",{staticClass:"has-sub"},[e._v(" "+e._s(e.$t("manage-libraries"))+" "),r("ul",{staticClass:"toolbar-item-lv3"},[r("li",{attrs:{"data-type":"music"},on:{click:e.open}},[e._v(e._s(e.$t("music")))]),r("li",{attrs:{"data-type":"video"},on:{click:e.open}},[e._v(e._s(e.$t("videos")))]),r("li",{attrs:{"data-type":"photo"},on:{click:e.open}},[e._v(e._s(e.$t("pictures")))])])]),r("li",{staticClass:"text-muted"},[e._v(e._s(e.$t("options")))])])]),r("div",{staticClass:"toolbar-item text-muted"},[e._v("Stream")])]),r("div",{staticClass:"container"},[r("div",{attrs:{id:"player-list"}},[e.showList?e._e():r("div",{staticClass:"noitem"},[e._v(" "+e._s(e.$t("no-items-library"))+" "),r("br"),e._v(e._s(e.$t("click-organize"))+" ")]),e.showList?r("play-list",{attrs:{files:e.files,type:e.accept,index:e.current},on:{ready:e.ready,play:e.play}}):e._e()],1),r("audio",{ref:"AudioPlayer",attrs:{hidden:""},on:{ended:function(t){e.current=e.current===e.list.length-1?0:e.current+1},timeupdate:function(e){return t.currentTime=e.target.currentTime},loadedmetadata:function(e){return t.duration=e.target.duration}}}),r("video",{ref:"VideoPlayer",staticClass:"player-overlay",on:{ended:function(t){e.current=e.current===e.list.length-1?0:e.current+1},timeupdate:function(e){return t.currentTime=e.target.currentTime},loadedmetadata:function(e){return t.duration=e.target.duration}}}),r("img",{ref:"PhotoPlayer",staticClass:"player-overlay"})]),r("div",{staticClass:"footer"},[r("input",{style:{background:"linear-gradient(to right, #0365c8\n        "+(e.currentTime/e.duration*100-1)+"%, transparent\n        "+e.currentTime/e.duration*100+"%)"},attrs:{id:"player-progress",type:"range",max:Math.round(e.duration)},domProps:{value:e.currentTime},on:{input:e.progress}}),r("div",{attrs:{id:"player-info"}},[r("ul",{attrs:{id:"player-controls"}},[r("li",{staticClass:"player-control",class:e.isRandom?"active":"",attrs:{id:"random"},on:{click:function(t){e.isRandom=!e.isRandom}}},[r("i",{staticClass:"fa fa-random rotate-270"})]),r("li",{staticClass:"player-control",class:e.isLoop?"active":"",attrs:{id:"loop"},on:{click:function(t){e.isLoop=!e.isLoop}}},[r("i",{staticClass:"fa fa-repeat rotate-270"})]),r("li",{staticClass:"player-control",class:e.state===e.State.Stop?"disabled":"",attrs:{id:"stop"},on:{click:e.control}},[r("i",{staticClass:"fa fa-stop"})]),r("li",{staticClass:"player-control",class:e.showList?"":"disabled",attrs:{id:"prev"},on:{click:e.control}},[r("i",{staticClass:"fa fa-fast-backward"})]),r("li",{staticClass:"player-control",attrs:{id:"play"},on:{click:e.control}},[r("i",{staticClass:"fa",class:e.state===e.State.Play?"fa-pause":"fa-play ml-5"})]),r("li",{staticClass:"player-control",class:e.showList?"":"disabled",attrs:{id:"next"},on:{click:e.control}},[r("i",{staticClass:"fa fa-fast-forward"})]),r("li",{staticClass:"player-control",attrs:{id:"mute"},on:{click:e.control}},[r("i",{ref:"VolumeIcon",staticClass:"fa fa-volume-up"})]),r("li",{staticClass:"player-control",attrs:{id:"volume"},on:{input:e.control}},[r("input",{ref:"VolumeBar",attrs:{type:"range",min:"0",max:"100",step:"1",value:"100"}})])])])])],1)},i=[],n=a("1da1"),s=(a("ac1f"),a("5319"),a("99af"),a("96cf"),a("10dc")),o=a("3af2"),c=a("6210"),l=a("962a"),u=a("1a7c"),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view-details",t._l(t.rows,(function(e,r){return a("tr",{key:r,class:t.index===r?"active":"",on:{click:function(e){return t.$emit("play",r)}}},[a("td",[t._v(t._s(e.name))]),a("td",[t._v(t._s(e.duration))]),a("td",[t._v(t._s(e.size))]),a("td",[t._v(t._s(e.lastModified))]),a("td",[t._v(t._s(e.type))])])})),0)},f=[],p=(a("a9e3"),a("8ba4"),a("b680"),a("159b"),a("a630"),a("3ca3"),a("d3b7"),a("ddb0"),a("b0c0"),a("2b3d"),a("caad"),a("2532"),a("1276"),a("a15b"),a("c82f")),h=Math.floor,m={month:"long",day:"numeric",year:"numeric"};function v(t){if(!t)return null;var e=h(t),a=h(e/3600),r=h((e-3600*a)/60),i=e-3600*a-60*r;return a<10&&(a="0".concat(a)),r<10&&(r="0".concat(r)),i<10&&(i="0".concat(i)),"".concat(0===Number(a)?"":"".concat(a,":")).concat(r,":").concat(i)}function y(t){var e="KB",a=t;switch(t/Math.pow(1024,2)>=1&&(e="MB"),t/Math.pow(1024,3)>=1&&(e="GB"),e){case"GB":a/=1024;case"MB":a/=1024;default:a/=1024}return"".concat(Number.isInteger(a)?a:a.toFixed(1)," ").concat(e)}var b={components:{ViewDetails:p["a"]},props:{files:FileList,type:String,index:Number},data:function(){return{rows:[],list:[]}},created:function(){this.loadFiles(this.files)},watch:{files:function(t){this.loadFiles(t)}},methods:{loadFiles:function(t){var e=this;this.rows=[],this.list=[];var a=[];Array.from(t).forEach((function(t){var r=e.loadFile(t);r.then((function(t){e.list.push(t.data),e.rows.push(t)})),a.push(r)})),Promise.all(a).then((function(){return e.$emit("ready",e.list)}))},loadFile:function(t){var e,a,r=this,i=t.name,n=t.type,s=new Promise((function(t){return e=t})),o=URL.createObjectURL(t);return a=this.type.includes("image")?Promise.resolve():new Promise((function(t){var e=r.type.includes("video")?document.createElement("video"):document.createElement("audio");e.setAttribute("src",o),e.onloadedmetadata=function(){return t(e.duration)}})),a.then((function(a){var r=i.split(".");URL.revokeObjectURL(t),e({data:o,name:r.join("."),duration:v(a),size:y(t.size),type:(n?r.pop():"mp3").toLowerCase(),lastModified:new Date(t.lastModified).toLocaleDateString("en-US",m)})})),s}}},g=b,w=a("2877"),_=Object(w["a"])(g,d,f,!1,null,null,null),k=_.exports,x=a("f106"),P=a("01b4"),C=a("e302"),$=a("0e9a"),S=a("0f35"),L={Stop:0,Play:1,Pause:2};function j(t,e){var a=Object(S["l"])(e);return a===t?j(t,e):a}var O={data:function(){return{library:this.$t("music"),accept:"",showList:!1,files:[],list:[],current:-1,duration:null,currentTime:-1,player:null,playPromise:null,isPlaying:!1,isRandom:!1,isLoop:!1,state:L.Stop,State:L}},mounted:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a=t.$store.state.programData,!a){e.next=11;break}return Object($["h"])(a)&&(t.player=t.$refs.AudioPlayer),Object($["n"])(a)&&(t.player=t.$refs.VideoPlayer),e.next=6,x["a"].getFile(a);case 6:r=e.sent,t.ready([r]),t.$store.commit(P["a"].ProgramData,null),e.next=12;break;case 11:Object(C["q"])();case 12:case"end":return e.stop()}}),e)})))()},methods:{open:function(t){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function a(){var r,i,n,s,o,c,l,u,d;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:r=e.$refs,i=r.AudioPlayer,n=r.VideoPlayer,s=r.PhotoPlayer,a.t0=t.target.dataset.type,a.next="music"===a.t0?4:"video"===a.t0?8:"photo"===a.t0?12:16;break;case 4:return o=e.$t("music"),c="audio/*",l=i,a.abrupt("break",16);case 8:return o=e.$t("videos"),c="video/*",l=n,a.abrupt("break",16);case 12:return o=e.$t("pictures"),c="image/*",l=s,a.abrupt("break",16);case 16:return a.next=18,Object(C["m"])(!0,c);case 18:if(u=a.sent,d=u.files,d.length){a.next=22;break}return a.abrupt("return");case 22:i.removeAttribute("src"),n.removeAttribute("src"),s.removeAttribute("src"),e.library=o,e.accept=c,e.files=d,e.list=[],e.current=-1,e.showList=!0,e.player=l;case 32:case"end":return a.stop()}}),a)})))()},ready:function(t){this.list=t,this.current=0},play:function(t){this.current=t,this.state=L.Play},control:function(t){if(this.player){var e=t.target.value,a=this.$refs,r=a.VolumeIcon,i=a.VolumeBar,n=L.Play,s=L.Pause,o=L.Stop;switch(t.target.closest("li").id){case"play":this.state=this.state===n?s:n;break;case"stop":this.state=o;break;case"next":this.isRandom?this.current=j(this.current,this.list.length):this.current=this.current===this.list.length-1?0:this.current+1;break;case"prev":this.isRandom?this.current=j(this.current,this.list.length):this.current=0===this.current?this.list.length-1:this.current-1;break;case"mute":this.player.muted=!this.player.muted,r.classList.replace(r.classList[1],this.player.muted?"fa-volume-off":"fa-volume-up");break;default:i.style.background="linear-gradient(to right, #0365c8 ".concat(e,"%, transparent ").concat(e,"%)"),r.className=e>50?"fa fa-volume-up":e<1?"fa fa-volume-off":"fa fa-volume-down",this.player.muted=!1,this.player.volume=e/100}}},progress:function(t){this.player&&(this.player.currentTime=t.target.value)}},watch:{state:function(t){var e=this;if(this.player){var a=this.player===this.$refs.PhotoPlayer,r=this.player!==this.$refs.AudioPlayer;t===L.Stop&&(a||(this.playPromise.then((function(){return e.player.pause()})),this.player.currentTime=0),r&&(this.isPlaying=!1,this.player.style.display="")),t!==L.Pause||a||this.playPromise.then((function(){return e.player.pause()})),t===L.Play&&this.current>=0&&(a||(this.player.src||(this.player.src=this.list[this.current]),this.playPromise=this.player.play()),r&&(this.isPlaying=!0,this.player.style.display="block"))}},current:function(t){t<0||(this.player.src=this.list[t],this.state=L.Play,this.player!==this.$refs.PhotoPlayer&&(this.playPromise=this.player.play()))}},components:{Controls:o["a"],TitleBar:c["a"],AddressBar:l["a"],Navigation:u["a"],PlayList:k,Window:s["a"]}},R=O,F=(a("7930"),Object(w["a"])(R,r,i,!1,null,"4a14f086",null));e["default"]=F.exports}}]);