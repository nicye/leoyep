(function(e){function t(t){for(var a,l,i=t[0],r=t[1],n=t[2],p=0,y=[];p<i.length;p++)l=i[p],Object.prototype.hasOwnProperty.call(o,l)&&o[l]&&y.push(o[l][0]),o[l]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);u&&u(t);while(y.length)y.shift()();return c.push.apply(c,n||[]),s()}function s(){for(var e,t=0;t<c.length;t++){for(var s=c[t],a=!0,i=1;i<s.length;i++){var r=s[i];0!==o[r]&&(a=!1)}a&&(c.splice(t--,1),e=l(l.s=s[0]))}return e}var a={},o={app:0},c=[];function l(t){if(a[t])return a[t].exports;var s=a[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,l),s.l=!0,s.exports}l.m=e,l.c=a,l.d=function(e,t,s){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(l.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)l.d(s,a,function(t){return e[t]}.bind(null,a));return s},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],r=i.push.bind(i);i.push=t,i=i.slice();for(var n=0;n<i.length;n++)t(i[n]);var u=r;c.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"06af":function(e,t,s){"use strict";s("393b")},"16da":function(e,t,s){"use strict";s("9032")},"393b":function(e,t,s){},"3c40":function(e,t,s){"use strict";s("f686")},4469:function(e,t,s){"use strict";s("d548")},"48e0":function(e,t,s){},"506b":function(e,t,s){"use strict";s("ce12")},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),o=function(){var e=this,t=e._self._c;return t("div",{ref:"app",class:[e.img],style:{"background-image":"url(".concat(e.bg,")")},attrs:{id:"app"}},[t("transition",{attrs:{name:"el-fade-in-linear"}}),t("div",{staticStyle:{"text-align":"center"}},[t("img",{staticClass:"logo-img",attrs:{alt:"Vue logo",src:e.logo}})]),t("transition",{attrs:{name:"el-fade-in-linear"}},[t("div",{ref:"nav",attrs:{id:"nav"}},[t("div",{class:{nav:!0}},[t("a",{attrs:{href:"#/"}},[e._v("首页")]),t("a",{attrs:{href:"#/project"}},[e._v("编导项目")]),t("a",{attrs:{href:"#/drawing"}},[e._v("个人绘画作品")]),t("a",{attrs:{href:"#/3d"}},[e._v("动画")])])])]),t("el-backtop",{attrs:{right:0,bottom:150}}),e._l(e.data,(function(s){return[t("div",{key:s.title,staticStyle:{position:"fixed",top:"-2000vh",left:"-2000vw","z-index":"-10"}},[e._l(s.data,(function(s){return["iframe"===s.type?t("iframe",{key:s.value,attrs:{loading:"eager",src:s.value,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"}}):e._e()]}))],2)]})),t("keep-alive",[t("transition",{attrs:{name:"el-fade-in"}},[t("router-view")],1)],1)],2)},c=[],l=(s("b0c0"),s("8f41")),i={bgHome:"//leoyep.oss-accelerate.aliyuncs.com/pic/bg1.jpg",bg3d:"//leoyep.oss-accelerate.aliyuncs.com/pic/bg2.jpg",bgFooter:"//leoyep.oss-accelerate.aliyuncs.com/pic/bg2-1.jpg",logo:"//leoyep.oss-accelerate.aliyuncs.com/jurna (1).gif"},r={data:function(){return{data:l,cc:0,logo:i.logo,bgMap:{Home:{bg:i.bgHome},"3d":{bg:i.bg3d,class:"yellow"}},fixed:!1}},computed:{bgItem:function(){return this.bgMap[this.$route.name]||{}},bg:function(){return this.bgItem.bg||i.bgHome},img:function(){return this.bgItem.class||""}},created:function(){},mounted:function(){}},n=r,u=(s("06af"),s("2877")),p=Object(u["a"])(n,o,c,!1,null,null,null),y=p.exports,d=s("8c4f"),m=function(){var e=this,t=e._self._c;return t("div",{staticClass:"home"},[e._m(0),t("div",[t("el-image",{staticStyle:{width:"30vw"},attrs:{src:"//leoyep.oss-accelerate.aliyuncs.com/IMG_5948.jpg?versionId=CAEQJhiBgIDFn4nY1BciIGQ2YzcyZTg4ODgwYjRlNDA4MGVkMjM5NDgxZWI5NmMy"}})],1),e._m(1)])},g=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"hello"},[t("h1",[e._v("Portfolio｜作品集 By Jurna Liu")])])},function(){var e=this,t=e._self._c;return t("div",[t("p",[e._v("拥有丰富的影视、广告、动画领域创意和导演相关实践经验")])])}],f={name:"Home",components:{},data:function(){return{}}},v=f,h=(s("adf7"),Object(u["a"])(v,m,g,!1,null,null,null)),j=h.exports,x=function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"threed"},e._l(e.story,(function(s,a){return t("div",{key:s.title,staticClass:"threed-item"},[t("collection",{attrs:{data:s.data}},[t("div",{staticClass:"threed-item-title",style:e.titleStyle(a),attrs:{slot:"title"},slot:"title"},[e._v(" "+e._s(s.title)+" ")])])],1)})),0)])},b=[],w=function(){var e=this,t=e._self._c;return t("div",{staticClass:"collention"},[e._t("title",(function(){return[t("div",{staticClass:"collention-title"},[e._v(" "+e._s(e.title)+" ")])]})),e._l(e.data,(function(s){return["image"!=s.type||s.hide?"video"==s.type?t("video-player",{key:s.value,staticStyle:{width:"100%"},attrs:{src:s.value,preload:"metadata",type:"video/mp4",crossorigin:"anonymous",poster:s.value+"?x-oss-process=video/snapshot,t_7000,f_jpg,w_800,h_600,m_fast",controls:""}}):"imageList"==s.type?t("picture-player",{key:s.value[0]||0,attrs:{srcs:s.value,lazy:e.lazy}}):"iframe"==s.type?t("iframe",{key:s.value,style:{width:"100%",minHeight:"50.6vw"},attrs:{src:s.value,width:"560",height:"315",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",framespacing:"0",allowfullscreen:"true"}}):e._e():t("el-image",{key:s.value,staticStyle:{width:"100%"},attrs:{src:s.value,fit:"cover",lazy:e.lazy}},[t("div",{staticClass:"collention-image-slot",attrs:{slot:"placeholder"},slot:"placeholder"},[e._v(" loading"),t("span",{staticClass:"dot el-icon-loading"})])])]}))],2)},_=[],k=function(){var e=this,t=e._self._c;return t("div",{staticClass:"my-picture-player"},[t("el-image",{staticStyle:{width:"100%"},attrs:{fit:"cover",src:e.srcs[e.index],"preview-src-list":e.previewSrcList}},[t("div",{staticClass:"image-slot",staticStyle:{"font-size":"1rem","min-height":"220px","line-height":"background: #fff"},attrs:{slot:"placeholder"},slot:"placeholder"},[e._v(" loading"),t("span",{staticClass:"dot"},[e._v("...")])])]),e.srcs.length>1?t("div",{staticClass:"my-picture-player-operation"},[t("el-button",{staticClass:"my-picture-player-operation-btn",attrs:{type:"text",disabled:e.index<=0},on:{click:function(t){e.index--}}},[t("i",{staticClass:"el-icon-arrow-left",staticStyle:{"font-weight":"600"}})]),t("el-button",{staticClass:"my-picture-player-operation-btn",attrs:{type:"text",disabled:e.index>=e.srcs.length-1},on:{click:function(t){e.index++}}},[t("i",{staticClass:"el-icon-arrow-right",staticStyle:{"font-weight":"600"}})])],1):e._e()],1)},C=[],S=(s("14d9"),{props:{srcs:{type:Array,default:function(){return[]}}},data:function(){return{index:0,previewSrcList:[]}},computed:{},watch:{srcs:function(){this.getPreviewSrcList()}},created:function(){this.getPreviewSrcList()},methods:{getPreviewSrcList:function(){for(var e=this,t=function(t){var s=new Image;s.src=e.srcs[t],s.onload=function(){e.previewSrcList.push(e.srcs[t])}},s=0;s<this.srcs.length;s++)t(s)}}}),O=S,P=(s("3c40"),Object(u["a"])(O,k,C,!1,null,"44ea5fd6",null)),I=P.exports,M=function(){var e=this,t=e._self._c;return t("video",e._b({ref:"video"},"video",e.$attrs,!1))},q=[],V={props:{},data:function(){return{}}},L=V,z=(s("4469"),Object(u["a"])(L,M,q,!1,null,"ef8712ba",null)),A=z.exports,E={components:{picturePlayer:I,videoPlayer:A},props:{title:{type:String,default:""},data:{type:Array,default:function(){return[]}},lazy:{type:Boolean,default:!1}},data:function(){return{}}},G=E,H=(s("506b"),Object(u["a"])(G,w,_,!1,null,"6eef2e17",null)),J=H.exports,B={components:{collection:J},data:function(){return{story:[{title:"动画作品",data:[{type:"image",value:"//leoyep.oss-accelerate.aliyuncs.com/3d/3d1.jpg?x-oss-process=style/jurna"},{type:"image",value:"//leoyep.oss-accelerate.aliyuncs.com/3d/3d2.jpg?x-oss-process=style/jurna"},{type:"video",value:"//leoyep.oss-accelerate.aliyuncs.com/3d/1586927989747428.mp4"},{type:"video",value:"//leoyep.oss-accelerate.aliyuncs.com/3d/1586928018648983.mp4"}]}]}},methods:{titleStyle:function(){return{}}}},N=B,W=(s("e493"),Object(u["a"])(N,x,b,!1,null,null,null)),Y=W.exports,D=function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"drawing"},e._l(e.story,(function(s,a){return t("div",{key:s.title,staticClass:"drawing-item"},[t("collection",{attrs:{data:s.data}},[t("div",{staticClass:"drawing-item-title",style:e.titleStyle(a),attrs:{slot:"title"},slot:"title"},[e._v(" "+e._s(s.title)+" ")])])],1)})),0)])},F=[],T={components:{collection:J},data:function(){return{story:[{title:"数绘",data:[{type:"image",value:"//leoyep.oss-accelerate.aliyuncs.com/drawing/shuhui/shuhui1.png?x-oss-process=style/jurna"},{type:"image",value:"//leoyep.oss-accelerate.aliyuncs.com/drawing/shuhui/shuhui2.png?x-oss-process=style/jurna"},{type:"image",value:"//leoyep.oss-accelerate.aliyuncs.com/drawing/shuhui/shuhui3.jpg?x-oss-process=style/jurna"}]},{title:"手绘",data:[{type:"image",value:"//leoyep.oss-accelerate.aliyuncs.com/drawing/shouhui/handhui1.jpg?x-oss-process=style/jurna"},{type:"image",value:"//leoyep.oss-accelerate.aliyuncs.com/drawing/shouhui/handhui2.jpg?x-oss-process=style/jurna"},{type:"image",value:"//leoyep.oss-accelerate.aliyuncs.com/drawing/shouhui/handhui3.jpg?x-oss-process=style/jurna"},{type:"image",value:"//leoyep.oss-accelerate.aliyuncs.com/drawing/shouhui/handhui4.jpg?x-oss-process=style/jurna"}]},{title:"漫画",data:[{type:"image",value:"//leoyep.oss-accelerate.aliyuncs.com/drawing/comic/1.jpg?x-oss-process=style/jurna"},{type:"image",value:"//leoyep.oss-accelerate.aliyuncs.com/drawing/comic/2.jpg?x-oss-process=style/jurna"}]}]}},methods:{titleStyle:function(){var e=Math.random(),t=20*e;return e<.5&&(t*=-1),console.log(t),{transform:"rotate("+t+"deg)","-ms-transform":"rotate("+t+"deg)","-moz-transform":"rotate("+t+"deg)","-webkit-transform":"rotate("+t+"deg)","-o-transform":"rotate("+t+"deg)"}}}},Q=T,R=(s("16da"),Object(u["a"])(Q,D,F,!1,null,"21226597",null)),Z=R.exports,$=function(){var e=this,t=e._self._c;return t("div",{staticClass:"project"},[e._l(e.story,(function(s){return t("div",{key:s.title,staticClass:"project-item",on:{click:function(t){return e.handleWorks(t,s)}}},[t("div",{staticClass:"project-item-title"},[t("div",[e._v(e._s(s.title))])]),t("div",{staticClass:"project-item-content",style:{"background-image":"url(".concat(s.data[0].value,")")}},[e._m(0,!0)])])})),t("el-dialog",{attrs:{"custom-class":"works-dialog",visible:e.dialogVisible,"destroy-on-close":"",fullscreen:""},on:{"update:visible":function(t){e.dialogVisible=t}}},[t("div",{staticClass:"works"},[t("collection",{attrs:{title:e.works.title,data:e.works.data}}),t("div",{staticClass:"el-backtop",staticStyle:{left:"5px",top:"5px"},on:{click:function(t){e.dialogVisible=!1}}},[t("i",{staticClass:"el-icon-back"})]),t("el-backtop",{attrs:{right:0,bottom:150,target:".works"}})],1)])],2)},K=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"project-item-content-mask"},[t("i",{staticClass:"el-icon-video-play"})])}],U=s("5530"),X=(s("e9c4"),{name:"project",components:{collection:J},data:function(){return{dialogVisible:!1,story:l,works:{}}},methods:{handleWorks:function(e,t){window.sessionStorage.setItem("LEO_WORKS_PIESE",JSON.stringify(Object(U["a"])({},t))),this.works=t,this.dialogVisible=!0}}}),ee=X,te=(s("ff23"),Object(u["a"])(ee,$,K,!1,null,null,null)),se=te.exports;a["default"].use(d["a"]);var ae=[{path:"/",name:"Home",component:j},{path:"/3d",name:"3d",component:Y},{path:"/project",name:"Project",component:se},{path:"/drawing",name:"drawing",component:Z}],oe=new d["a"]({base:"",routes:ae}),ce=oe,le=s("2f62");a["default"].use(le["a"]);var ie=new le["a"].Store({state:{},mutations:{},actions:{},modules:{}}),re=s("5c96"),ne=s.n(re);s("c69f");a["default"].use(ne.a);s("e382");a["default"].config.productionTip=!1,new a["default"]({router:ce,store:ie,render:function(e){return e(y)}}).$mount("#app")},7589:function(e,t,s){},"89f8":function(e,t,s){},"8f41":function(e){e.exports=JSON.parse('[{"title":"部分广告成片","data":[{"hide":true,"type":"image","value":"//leoyep.oss-cn-shanghai.aliyuncs.com/pic/WechatIMG330.jpeg?x-oss-process=style/jurna"},{"type":"iframe","value":"https://www.youtube.com/embed/dIV80ZPvgkQ"},{"type":"iframe","value":"https://www.youtube.com/embed/pEpr0VhY0Y8"},{"type":"iframe","value":"https://player.bilibili.com/player.html?aid=777748054&bvid=BV1R14y1u7ot&cid=961335758&page=1"},{"type":"iframe","value":"https://player.bilibili.com/player.html?aid=817951464&bvid=BV16G4y1V7C3&cid=1030988247&page=1"}]},{"title":"大相径庭","data":[{"type":"image","value":"//leoyep.oss-accelerate.aliyuncs.com/dxjt/dxjt2.png?x-oss-process=style/jurna"},{"type":"image","value":"//leoyep.oss-accelerate.aliyuncs.com/dxjt/dxjt1.png?x-oss-process=style/jurna"},{"type":"video","value":"//leoyep.oss-accelerate.aliyuncs.com/dxjt/dxjt.mp4"},{"type":"image","value":"//leoyep.oss-accelerate.aliyuncs.com/dxjt/dxjt3.png?x-oss-process=style/jurna"}]},{"title":"神墙的故事","data":[{"type":"image","value":"//leoyep.oss-accelerate.aliyuncs.com/sqd/sqd.jpg?x-oss-process=style/jurna"},{"type":"image","value":"//leoyep.oss-accelerate.aliyuncs.com/sqd/sqd2.jpg?x-oss-process=style/jurna"},{"type":"image","value":"//leoyep.oss-accelerate.aliyuncs.com/sqd/sqd3.jpg?x-oss-process=style/jurna"},{"type":"image","value":"//leoyep.oss-accelerate.aliyuncs.com/sqd/sqd4.jpg?x-oss-process=style/jurna"},{"type":"image","value":"//leoyep.oss-accelerate.aliyuncs.com/sqd/sqd5.jpg?x-oss-process=style/jurna"},{"type":"image","value":"//leoyep.oss-accelerate.aliyuncs.com/sqd/sqd6.jpg?x-oss-process=style/jurna"}]},{"title":"car","data":[{"type":"image","value":"//leoyep.oss-accelerate.aliyuncs.com/car/car.jpg?x-oss-process=style/jurna"},{"type":"video","value":"//leoyep.oss-accelerate.aliyuncs.com/car/carmusic.mp4"}]},{"title":"Fight","data":[{"type":"image","value":"//leoyep.oss-accelerate.aliyuncs.com/flight/Fight.jpg?x-oss-process=style/jurna"},{"type":"video","value":"//leoyep.oss-accelerate.aliyuncs.com/flight/flight.mp4"},{"type":"imageList","value":["//leoyep.oss-accelerate.aliyuncs.com/flight/ketchs-1-01.jpg?x-oss-process=style/jurna","//leoyep.oss-accelerate.aliyuncs.com/flight/ketchs-1-02.jpg?x-oss-process=style/jurna","//leoyep.oss-accelerate.aliyuncs.com/flight/ketchs-1-03.jpg?x-oss-process=style/jurna","//leoyep.oss-accelerate.aliyuncs.com/flight/ketchs-1-04.jpg?x-oss-process=style/jurna","//leoyep.oss-accelerate.aliyuncs.com/flight/ketchs-1-05.jpg?x-oss-process=style/jurna","//leoyep.oss-accelerate.aliyuncs.com/flight/ketchs-1-06.jpg?x-oss-process=style/jurna","//leoyep.oss-accelerate.aliyuncs.com/flight/ketchs-1-07.jpg?x-oss-process=style/jurna","//leoyep.oss-accelerate.aliyuncs.com/flight/ketchs-1-08.jpg?x-oss-process=style/jurna","//leoyep.oss-accelerate.aliyuncs.com/flight/ketchs-1-09.jpg?x-oss-process=style/jurna","//leoyep.oss-accelerate.aliyuncs.com/flight/ketchs-1-10.jpg?x-oss-process=style/jurna","//leoyep.oss-accelerate.aliyuncs.com/flight/ketchs-1-11.jpg?x-oss-process=style/jurna","//leoyep.oss-accelerate.aliyuncs.com/flight/ketchs-1-12.jpg?x-oss-process=style/jurna","//leoyep.oss-accelerate.aliyuncs.com/flight/ketchs-1-13.jpg?x-oss-process=style/jurna","//leoyep.oss-accelerate.aliyuncs.com/flight/ketchs-1-14.jpg?x-oss-process=style/jurna","//leoyep.oss-accelerate.aliyuncs.com/flight/ketchs-1-15.jpg?x-oss-process=style/jurna"]}]},{"title":"特殊使命","data":[{"type":"image","value":"//leoyep.oss-accelerate.aliyuncs.com/tes/tes.jpg?x-oss-process=style/jurna"},{"type":"video","value":"//leoyep.oss-accelerate.aliyuncs.com/tes/tes1.mp4"},{"type":"imageList","value":["//leoyep.oss-accelerate.aliyuncs.com/tes/sketch4-1-1.jpg?x-oss-process=style/jurna","//leoyep.oss-accelerate.aliyuncs.com/tes/sketch4-1-2.jpg?x-oss-process=style/jurna","//leoyep.oss-accelerate.aliyuncs.com/tes/sketch4-1-3.jpg?x-oss-process=style/jurna","//leoyep.oss-accelerate.aliyuncs.com/tes/sketch4-1-4.jpg?x-oss-process=style/jurna","//leoyep.oss-accelerate.aliyuncs.com/tes/sketch4-1-5.jpg?x-oss-process=style/jurna","//leoyep.oss-accelerate.aliyuncs.com/tes/sketch4-1-6.jpg?x-oss-process=style/jurna","//leoyep.oss-accelerate.aliyuncs.com/tes/sketch4-1-7.jpg?x-oss-process=style/jurna"]},{"type":"video","value":"//leoyep.oss-accelerate.aliyuncs.com/tes/tes2.mp4"},{"type":"video","value":"//leoyep.oss-accelerate.aliyuncs.com/tes/tes3.mp4"}]},{"title":"不会忘记","data":[{"type":"image","value":"//leoyep.oss-accelerate.aliyuncs.com/grandma/grandma.jpg?x-oss-process=style/jurna"},{"type":"video","value":"//leoyep.oss-accelerate.aliyuncs.com/grandma/grandma.mp4"}]},{"title":"封神","data":[{"type":"image","value":"//leoyep.oss-accelerate.aliyuncs.com/IMG_5961.PNG?x-oss-process=style/jurna"},{"type":"image","value":"//leoyep.oss-accelerate.aliyuncs.com/share.jpg?x-oss-process=style/jurna"},{"type":"video","value":"//leoyep.oss-accelerate.aliyuncs.com/c807b6a60820a2c868a11246e05c413e_11893225320976222672.mp4"}]},{"title":"天将神龙","data":[{"type":"image","value":"//leoyep.oss-accelerate.aliyuncs.com/tjsl/%E6%9C%AA%E6%A0%87%E9%A2%98-1.jpg?x-oss-process=style/jurna"},{"type":"video","value":"//leoyep.oss-accelerate.aliyuncs.com/408e128c9e3fb9ae7573b7365cf1484d_14058486732207301026.mp4"}]},{"title":"节选A","data":[{"type":"image","value":"//leoyep.oss-accelerate.aliyuncs.com/jx/jx2.jpg?x-oss-process=style/jurna"},{"type":"image","value":"//leoyep.oss-accelerate.aliyuncs.com/jx/jx3.jpg?x-oss-process=style/jurna"},{"type":"image","value":"//leoyep.oss-accelerate.aliyuncs.com/jx/jx4.JPG?x-oss-process=style/jurna"},{"type":"video","value":"//leoyep.oss-accelerate.aliyuncs.com/jx/storyboard1-2.mp4"}]},{"title":"Others","data":[{"type":"image","value":"//leoyep.oss-accelerate.aliyuncs.com/others/others.jpg?x-oss-process=style/jurna"},{"type":"video","value":"//leoyep.oss-accelerate.aliyuncs.com/others/others.mp4"}]}]')},9032:function(e,t,s){},adf7:function(e,t,s){"use strict";s("7589")},c69f:function(e,t,s){},ce12:function(e,t,s){},d548:function(e,t,s){},e382:function(e,t,s){},e493:function(e,t,s){"use strict";s("89f8")},f686:function(e,t,s){},ff23:function(e,t,s){"use strict";s("48e0")}});
//# sourceMappingURL=app.201a6223.js.map