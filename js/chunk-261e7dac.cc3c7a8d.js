(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-261e7dac"],{"0e90":function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("window-static",{attrs:{id:t.id}},[s("title-bar",{attrs:{title:t.$t("reset")+" "+t.$t("statistics")}},[s("controls",{attrs:{hasMaxi:!1,hasMini:!1,close:t.handleClose}})],1),s("div",{staticClass:"container"},[s("div",{staticClass:"mb-5"},[t._v(t._s(t.$t("confirm-reset")))]),s("section",[s("button",{staticClass:"bt bt-primary",on:{click:t.reset}},[t._v(" "+t._s(t.$t("yes"))+" ")]),s("button",{staticClass:"bt bt-secondary",on:{click:t.handleClose}},[t._v(" "+t._s(t.$t("no"))+" ")])])])],1)},n=[],a=s("7e41"),o=s("3af2"),r=s("6210"),l={props:{id:String,close:Function},methods:{handleClose:function(){this.close&&this.close()},reset:function(){this.$emit("reset")}},components:{TitleBar:r["a"],Controls:o["a"],WindowStatic:a["a"]}},c=l,u=(s("d11b"),s("2877")),f=Object(u["a"])(c,i,n,!1,null,"d39e3370",null);e["a"]=f.exports},1148:function(t,e,s){"use strict";var i=s("a691"),n=s("1d80");t.exports=function(t){var e=String(n(this)),s="",a=i(t);if(a<0||a==1/0)throw RangeError("Wrong number of repetitions");for(;a>0;(a>>>=1)&&(e+=e))1&a&&(s+=e);return s}},2771:function(t,e,s){},"408a":function(t,e,s){var i=s("c6b6");t.exports=function(t){if("number"!=typeof t&&"Number"!=i(t))throw TypeError("Incorrect invocation");return+t}},"5b50":function(t,e,s){t.exports=s.p+"media/minesweeper-lose.b3b70bbb.mp3"},"7db6":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"root-container game-container"},[s("window",{class:{maximized:2===t.level},attrs:{id:"window-minesweeper",w:"auto",h:"auto",lock:t.result<0||t.stats,resizable:!1}},[s("title-bar",{attrs:{icon:"minesweeper",title:t.$t("minesweeper")}},[s("controls",{attrs:{hasMaxi:!1}})],1),s("div",{staticClass:"toolbar"},[s("div",{staticClass:"toolbar-item"},[t._v(" "+t._s(t.$t("game"))+" "),s("ul",{staticClass:"toolbar-item-lv2"},[s("li",{on:{click:t.newGame}},[t._v(t._s(t.$t("new-game")))]),s("li",{staticClass:"separator"}),s("li",{on:{click:function(e){t.level=0}}},[t._v(t._s(t.$t("beginner")))]),s("li",{on:{click:function(e){t.level=1}}},[t._v(t._s(t.$t("intermediate")))]),s("li",{on:{click:function(e){t.level=2}}},[t._v(t._s(t.$t("advanced")))]),s("li",{staticClass:"separator"}),s("li",{on:{click:t.toggleStats}},[t._v(t._s(t.$t("statistics")))]),s("li",{on:{click:t.exitGame}},[t._v(t._s(t.$t("exit")))])])]),s("div",{staticClass:"toolbar-item text-muted"},[t._v(t._s(t.$t("help")))])]),s("div",{staticClass:"container"},[s("div",{ref:"grid",attrs:{id:"grid"}},t._l(t.grid.length,(function(e,i){return s("div",{key:i,staticClass:"row"},t._l(t.grid[i],(function(e,i){return s("div",{key:i,class:["cell","cell-"+e.numAdjacentMines,{opened:e.state===t.CellState.OPEN}],style:t.getCellStyle(e),on:{click:function(s){return t.open(e)}}},[t._v(" "+t._s(!e.isMine&&e.state===t.CellState.OPEN&&e.numAdjacentMines>0?e.numAdjacentMines:"")+" ")])})),0)})),0),s("div",{staticClass:"stats"},[s("img",{staticClass:"icon",attrs:{src:t.timer}}),s("div",{staticClass:"number"},[t._v(t._s(t.count))]),s("div",{staticClass:"number"},[t._v(t._s(t.options.mines))]),s("img",{staticClass:"icon",attrs:{src:t.mine}})])]),s("audio",{ref:"bgm",attrs:{src:t.bgm}}),s("audio",{ref:"sfx",attrs:{src:t.sfx}})],1),t.result?s("window",{attrs:{id:"window-minesweeper-result",centered:!0,resizable:!1,w:280}},[s("title-bar",{attrs:{title:t.$t(t.result>0?"games-won":"games-lost")}},[s("controls",{attrs:{hasMaxi:!1,hasMini:!1}})],1),s("div",{staticClass:"container"},[t.result>0?s("div",[t._v(t._s(t.$t("game-congrats")))]):s("div",[t._v(t._s(t.$t("game-sorry")))]),s("div",[t._v(t._s(t.$t("time"))+": "+t._s(t.count)+" "+t._s(t.$t("seconds")))]),s("div",{staticClass:"bts"},[s("button",{staticClass:"bt bt-secondary",on:{click:t.exitGame}},[t._v(" "+t._s(t.$t("exit"))+" ")]),s("button",{staticClass:"bt bt-primary",on:{click:t.newGame}},[t._v(" "+t._s(t.$t("play-again"))+" ")])])])],1):t._e(),t.stats?s("window-static",{attrs:{id:"window-minesweeper-stats"}},[s("title-bar",{attrs:{title:"Minesweeper "+t.$t("statistics")}},[s("controls",{attrs:{hasMaxi:!1,hasMini:!1,close:t.toggleStats}})],1),s("div",{staticClass:"container"},[s("div",{ref:"select",staticClass:"select mb-5"},[s("div",{attrs:{value:"minesweeper-0"},on:{click:t.showStats}},[t._v(" "+t._s(t.$t("beginner"))+" ")]),s("div",{attrs:{value:"minesweeper-1"},on:{click:t.showStats}},[t._v(" "+t._s(t.$t("intermediate"))+" ")]),s("div",{attrs:{value:"minesweeper-2"},on:{click:t.showStats}},[t._v(" "+t._s(t.$t("advanced"))+" ")])]),s("fieldset",{staticClass:"mb-5"},[s("legend",[t._v("Best times")]),t.statData&&t.statData.scores?s("table",t._l(t.statData.scores,(function(e,i){return s("tr",{key:i},[s("td",[t._v(t._s(t.convertTime(t.statData.scores[i].time,!0)))]),s("td",[t._v(t._s(t.convertDate(t.statData.scores[i].date)))])])})),0):t._e()]),s("div",{staticClass:"mb-5"},[t.statData?[s("div",[t._v(t._s(t.$t("games-played"))+": "+t._s(t.statData.completed))]),s("div",[t._v(t._s(t.$t("games-won"))+": "+t._s(t.statData.won))]),s("div",[t._v(" "+t._s(t.$t("win-percentage"))+": "+t._s((t.statData.won/(t.statData.completed||1)*100).toFixed())+"% ")])]:[s("div",[t._v(t._s(t.$t("games-played"))+": 0")]),s("div",[t._v(t._s(t.$t("games-won"))+": 0")]),s("div",[t._v(t._s(t.$t("win-percentage"))+": 0%")])]],2),s("div",{staticClass:"bts"},[s("button",{staticClass:"bt bt-primary",on:{click:t.toggleStats}},[t._v(" "+t._s(t.$t("close"))+" ")]),s("button",{staticClass:"bt bt-secondary",on:{click:t.toggleConfirm}},[t._v(" "+t._s(t.$t("reset"))+" ")])])])],1):t._e(),t.confirm?s("confirm-reset",{attrs:{close:t.toggleConfirm},on:{reset:t.reset}}):t._e()],1)},n=[],a=(s("7db0"),s("caad"),s("2532"),s("159b"),s("ac1f"),s("1276"),s("e0b8")),o=s("a146"),r=s("3af2"),l=s("6210"),c=s("10dc"),u=s("7e41"),f=s("0e90"),h=s("9538"),d=s.n(h),v=s("f3b3"),m=s.n(v),p=s("5b50"),_=s.n(p),g=s("6792"),b=d.a.BoardStateEnum,w=d.a.CellStateEnum,C=d.a.CellFlagEnum,O=function(t){var e=d.a.generateMineArray(t);return new d.a.Board(e)},S={data:function(){var t=this.$store.state,e=t.user,s=t.assets,i=s.games;return{gameStats:new a["a"]("minesweeper",e),mine:i.find((function(t){return t.includes("minesweeper-mine")})),cell:i.find((function(t){return t.includes("minesweeper-cell")})),timer:i.find((function(t){return t.includes("minesweeper-timer")})),CellState:w,CellFlag:C,level:0,size:21,options:{rows:8,cols:9,mines:10},board:{},grid:[],bgm:m.a,sfx:_.a,count:0,result:0,interval:null,stats:null,confirm:null,statData:null,convertTime:o["d"],convertDate:o["c"]}},watch:{level:function(t){var e=this;this.$nextTick().then((function(){var s=e.size+1,i=e.$refs.grid,n=i.scrollWidth,a=i.scrollHeight;switch(n-=1,a-=1,t){case 0:e.options={rows:8,cols:9,mines:10};break;case 1:e.options={rows:12,cols:12,mines:30};break;case 2:e.options={rows:Math.floor(a/s),cols:Math.floor(n/s),mines:Math.floor(n/s*(a/s)/2)}}}))},options:function(){this.newGame()}},mounted:function(){this.newGame()},methods:{getCellStyle:function(t){var e=null;return t.state===w.OPEN&&t.isMine&&(e=this.mine),t.state===w.CLOSED&&(e=this.cell),{backgroundImage:"url(".concat(e,")"),width:this.size+"px",height:this.size+"px"}},newGame:function(){this.board=O(this.options),this.grid=this.board.grid(),this.$refs.bgm.currentTime=0,this.$refs.bgm.play(),this.count=0,this.result=0,clearInterval(this.interval)},exitGame:function(t){t.stopPropagation(),this.$root.$emit(g["f"].CloseWindow,"minesweeper")},open:function(t){var e=this;if(this.board.state()===b.PRISTINE&&(this.interval=setInterval((function(){return e.count++}),1e3),this.gameStats.init(this.level),t.isMine))return this.board=O(this.options),this.board.openCell(t.x,t.y),void(this.grid=this.board.grid());if(this.board.state()!==b.WON&&this.board.state()!==b.LOST){this.board.openCell(t.x,t.y),this.grid=this.board.grid();var s=0;if(t.isMine)this.$refs.sfx.play(),this.grid.forEach((function(t){return t.forEach((function(t){return t.state=t.isMine?w.OPEN:t.state}))})),this.gameStats.complete(),s=-1;else{var i=0;this.grid.forEach((function(t){return t.forEach((function(t){t.state===w.OPEN&&i++}))}));var n=this.options,a=n.rows,o=n.cols,r=n.mines;a*o-r===i&&(this.gameStats.win(),this.gameStats.saveScore({time:this.count,date:Date.now()}),s=1)}s&&(clearInterval(this.interval),setTimeout((function(){return e.result=s}),1e3))}},showStats:function(t){var e=t.target;e||(e=this.$refs.select.firstChild);var s=e.getAttribute("value").split("-"),i=s[1],n=this.gameStats.getData();this.statData=n?n[i]:null,this.$refs.select.children.forEach((function(t){return t.classList.remove("active")})),e.classList.add("active"),this.temp=e},toggleStats:function(){this.stats=!this.stats},toggleConfirm:function(){this.confirm=!this.confirm},reset:function(){this.gameStats.reset(),this.showStats({target:this.temp}),this.toggleConfirm()}},components:{Controls:r["a"],TitleBar:l["a"],Window:c["a"],WindowStatic:u["a"],ConfirmReset:f["a"]}},y=S,E=(s("f8fb"),s("2877")),N=Object(E["a"])(y,i,n,!1,null,"710c9c9a",null);e["default"]=N.exports},"7e41":function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{class:["window","active",{centered:t.centered}]},[t._t("default")],2)},n=[],a={props:{centered:{type:Boolean,default:!0}}},o=a,r=(s("d5c9"),s("2877")),l=Object(r["a"])(o,i,n,!1,null,"ce7844fc",null);e["a"]=l.exports},9538:function(t,e,s){var i,n;
/*!
 * Library for making Minesweeper clones
 * https://github.com/binaryluke/Minesweeper
 *
 * Copyright 2015, Luke Howard (@binaryluke)
 *
 * Released under the MIT license
 * http://lukehoward.name/project/minesweeper/license
 */(function(){"use strict";var s={CLOSED:0,OPEN:1},a={NONE:0,EXCLAMATION:1,QUESTION:2},o={PRISTINE:0,IN_PROGRESS:1,LOST:2,WON:3},r=function(t,e,i,n){this.x=t||0,this.y=e||0,this.isMine=!!i,this.numAdjacentMines=n||0,this.state=s.CLOSED,this.flag=a.NONE},l=function(t){var e;try{e=d(t)}catch(s){e=!1}if(!e)throw new Error("The mine array supplied to Board constructor was not valid");this._state=o.PRISTINE,this._numRows=t.length,this._numCols=t[0].length,this._numMines=f(t,this._numRows,this._numCols),this._grid=u(t,this._numRows,this._numCols)};l.prototype.state=function(){return this._state},l.prototype.numRows=function(){return this._numRows},l.prototype.numCols=function(){return this._numCols},l.prototype.numMines=function(){return this._numMines},l.prototype.grid=function(){var t,e,s=[];for(t=0;t<this._numRows;t++)for(s.push([]),e=0;e<this._numCols;e++)s[t].push(this.cell(e,t));return this._grid},l.prototype._cell=function(t,e){if(t>=0&&e>=0&&e<this._numRows&&t<this._numCols)return this._grid[e][t]},l.prototype.cell=function(t,e){return p({},this._cell(+t,+e))},l.prototype.cycleCellFlag=function(t,e){var i=this._cell(+t,+e),n=!0;i&&i.state!==s.OPEN&&this._state!==o.WON&&this._state!==o.LOST&&(i.flag===a.NONE?i.flag=a.EXCLAMATION:i.flag===a.EXCLAMATION?i.flag=a.QUESTION:i.flag===a.QUESTION?i.flag=a.NONE:n=!1,n&&this._state===o.PRISTINE&&(this._state=o.IN_PROGRESS),this._updateState())},l.prototype.openCell=function(t,e){var i=this._cell(t,e);i&&i.state!==s.OPEN&&i.flag===a.NONE&&this._state!==o.WON&&this._state!==o.LOST&&(i.state=s.OPEN,i.isMine||(this._floodFill(t+1,e),this._floodFill(t-1,e),this._floodFill(t,e+1),this._floodFill(t,e-1),this._floodFill(t+1,e+1),this._floodFill(t-1,e-1),this._floodFill(t-1,e+1),this._floodFill(t+1,e-1)),this._state===o.PRISTINE&&(this._state=o.IN_PROGRESS),this._updateState())},l.prototype._floodFill=function(t,e){var i=this._cell(t,e);i&&!i.isMine&&i.state===s.CLOSED&&i.flag===a.NONE&&(i.state=s.OPEN,0===i.numAdjacentMines&&(this._floodFill(t+1,e),this._floodFill(t-1,e),this._floodFill(t,e+1),this._floodFill(t,e-1),this._floodFill(t+1,e+1),this._floodFill(t-1,e-1),this._floodFill(t-1,e+1),this._floodFill(t+1,e-1)))},l.prototype._updateState=function(){var t,e,i,n=!0;for(e=0;e<this._numRows;e++)for(t=0;t<this._numCols;t++)if(i=this._cell(t,e),i.state===s.OPEN){if(i.isMine)return void(this._state=o.LOST)}else i.state===s.CLOSED&&(i.isMine?i.flag!==a.EXCLAMATION&&(n=!1):n=!1);n&&(this._state=o.WON)};var c=function(t){var e,s,i,n,a,o=[];for(t=t||{},i=t.rows||10,n=t.cols||t.rows||10,a=t.mines||parseInt(i*n*.15,10)||0,s=i*n,e=0;e<s;e++)e<a?o.push(1):o.push(0);return o=v(o),o=m(o,n),o},u=function(t,e,s){var i,n,a=[];for(n=0;n<e;n++)for(a[n]=[],i=0;i<s;i++)a[n][i]=new r(i,n,1===t[n][i],h(t,i,n));return a},f=function(t,e,s){var i,n,a=0;for(n=0;n<e;n++)for(i=0;i<s;i++)1===t[n][i]&&a++;return a},h=function(t,e,s){var i,n,a=e+1,o=s+1,r=t[0].length,l=t.length,c=0;for(n=s-1;n<=o;n++)for(i=e-1;i<=a;i++)n===s&&i===e||n>=0&&i>=0&&n<l&&i<r&&1===t[n][i]&&c++;return c},d=function(t){var e,s,i,n,a=!0;if(t&&t.length)for(i=t.length,n=t[0]?t[0].length:0,0===n&&(a=!1),e=0;e<i;e++)if(t[e].length!==n)a=!1;else for(s=0;s<n;s++)0!==t[e][s]&&1!==t[e][s]&&(a=!1);else a=!1;return a},v=function(t){var e,s,i=t.length;while(i)s=Math.floor(Math.random()*i--),e=t[i],t[i]=t[s],t[s]=e;return t},m=function(t,e){var s,i=t.length/e,n=[];for(s=0;s<i;s++)n.push(t.splice(0,e));return n},p=function(t,e){var s,i={};for(s in t)Object.prototype.hasOwnProperty.call(t,s)&&(i[s]=t[s]);for(s in e)Object.prototype.hasOwnProperty.call(e,s)&&(i[s]=e[s]);return i},_={Cell:r,CellStateEnum:s,CellFlagEnum:a,Board:l,BoardStateEnum:o,generateMineArray:c};"undefined"!==typeof t.exports?t.exports=_:(i=[],n=function(){return _}.apply(e,i),void 0===n||(t.exports=n))})()},a146:function(t,e,s){"use strict";s.d(e,"d",(function(){return n})),s.d(e,"c",(function(){return a})),s.d(e,"a",(function(){return o})),s.d(e,"b",(function(){return r}));s("99af"),s("b680");var i=s("0f35");function n(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],s=60;return t>=s?"".concat(Object(i["j"])((t/s).toFixed()),":").concat(Object(i["j"])(t%s)):e?"00:".concat(Object(i["j"])(t)):"".concat(t," seconds")}function a(t){return new Date(t).toLocaleDateString("en-US")}var o={PurblePlace:"purbleplace",PurblePair:"purblepair",PurbleShop:"purbleshop",ComfyCakes:"comfycakes"},r={Master:"Purble Master",Champ:"Champion of Logic",Detective:"Senior Detective"}},b680:function(t,e,s){"use strict";var i=s("23e7"),n=s("a691"),a=s("408a"),o=s("1148"),r=s("d039"),l=1..toFixed,c=Math.floor,u=function(t,e,s){return 0===e?s:e%2===1?u(t,e-1,s*t):u(t*t,e/2,s)},f=function(t){var e=0,s=t;while(s>=4096)e+=12,s/=4096;while(s>=2)e+=1,s/=2;return e},h=function(t,e,s){var i=-1,n=s;while(++i<6)n+=e*t[i],t[i]=n%1e7,n=c(n/1e7)},d=function(t,e){var s=6,i=0;while(--s>=0)i+=t[s],t[s]=c(i/e),i=i%e*1e7},v=function(t){var e=6,s="";while(--e>=0)if(""!==s||0===e||0!==t[e]){var i=String(t[e]);s=""===s?i:s+o.call("0",7-i.length)+i}return s},m=l&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!r((function(){l.call({})}));i({target:"Number",proto:!0,forced:m},{toFixed:function(t){var e,s,i,r,l=a(this),c=n(t),m=[0,0,0,0,0,0],p="",_="0";if(c<0||c>20)throw RangeError("Incorrect fraction digits");if(l!=l)return"NaN";if(l<=-1e21||l>=1e21)return String(l);if(l<0&&(p="-",l=-l),l>1e-21)if(e=f(l*u(2,69,1))-69,s=e<0?l*u(2,-e,1):l/u(2,e,1),s*=4503599627370496,e=52-e,e>0){h(m,0,s),i=c;while(i>=7)h(m,1e7,0),i-=7;h(m,u(10,i,1),0),i=e-1;while(i>=23)d(m,1<<23),i-=23;d(m,1<<i),h(m,1,1),d(m,2),_=v(m)}else h(m,0,s),h(m,1<<-e,0),_=v(m)+o.call("0",c);return c>0?(r=_.length,_=p+(r<=c?"0."+o.call("0",c-r)+_:_.slice(0,r-c)+"."+_.slice(r-c))):_=p+_,_}})},c6eb:function(t,e,s){},d11b:function(t,e,s){"use strict";s("2771")},d5c9:function(t,e,s){"use strict";s("ff46")},e0b8:function(t,e,s){"use strict";s.d(e,"a",(function(){return l}));var i=s("5530"),n=s("d4ec"),a=s("bee2"),o=(s("4e82"),s("968c")),r={total:0,completed:0,won:0},l=function(){function t(e,s){var a=this;Object(n["a"])(this,t),this.user=s,this.key=e,o["a"].local.get("scores-"+e,this.user).then((function(t){a.data=t||{0:Object(i["a"])(Object(i["a"])({},r),{},{scores:[]}),1:Object(i["a"])(Object(i["a"])({},r),{},{scores:[]}),2:Object(i["a"])(Object(i["a"])({},r),{},{scores:[]})}}))}return Object(a["a"])(t,[{key:"getData",value:function(){return this.data}},{key:"saveData",value:function(){o["a"].local.update("scores-"+this.key,this.user,this.data)}},{key:"init",value:function(t){this.level=t,this.data[this.level].total++,this.saveData()}},{key:"saveScore",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(t,e){return t.time-e.time},s=this.data[this.level].scores;s.push(t),s.sort(e),s.length>5&&s.pop(),this.complete()}},{key:"win",value:function(){this.data[this.level].won++,this.saveData()}},{key:"complete",value:function(){this.data[this.level].completed++,this.saveData()}},{key:"reset",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.key;o["a"].local.remove("scores-"+t,this.user),this.data={0:Object(i["a"])(Object(i["a"])({},r),{},{scores:[]}),1:Object(i["a"])(Object(i["a"])({},r),{},{scores:[]}),2:Object(i["a"])(Object(i["a"])({},r),{},{scores:[]})}}}]),t}()},f3b3:function(t,e,s){t.exports=s.p+"media/minesweeper-new.45363df5.mp3"},f8fb:function(t,e,s){"use strict";s("c6eb")},ff46:function(t,e,s){}}]);