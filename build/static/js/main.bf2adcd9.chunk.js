(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{113:function(e,t,n){e.exports=n(222)},118:function(e,t,n){},201:function(e,t,n){e.exports={page:"index_page__1cvVN",title:"index_title__10GFA"}},215:function(e,t,n){e.exports={modle:"index_modle__3rMyx",tabBarPosition:"index_tabBarPosition__23RsL","am-tab-bar":"index_am-tab-bar__1WJ40"}},221:function(e,t,n){e.exports={login:"index_login__88Dzd",title:"index_title__1Hoe0",loginTo:"index_loginTo__IljpQ"}},222:function(e,t,n){"use strict";n.r(t);var a,r,i,o=n(0),c=n.n(o),l=n(25),s=n.n(l),u=(n(118),n(119),n(120),n(97)),m=n.n(u),p=n(10),d=n(11),h=n(13),b=n(12),E=n(14),g=n(231),f=n(232),O=n(227),v=n(230),j=n(39),y=Object(j.a)(),x=n(57),w=(n(167),n(58)),_=n.n(w),k=(n(94),n(41)),T=n.n(k),N=(n(188),n(101)),S=n.n(N),C=(n(37),n(24)),L=n.n(C),I=n(75),z=n.n(I),D=n(102),R={login:"/auth/web/login"},B=n(103),P=(n(197),n(104)),A=n.n(P),M=function e(t,n){var a=this;Object(p.a)(this,e),this.response=function(){return{res:arguments.length>0&&void 0!==arguments[0]?arguments[0]:a.res,err:arguments.length>1&&void 0!==arguments[1]?arguments[1]:a.err}},this.errorTip=function(e){A.a.info(e,2,null,!1)},this.verification=function(){try{return a.err?(a.errorTip("\u7f51\u7edc\u9519\u8bef!"),a.response()):(232===a.res.body.status&&y.push("/login",{some:"state"}),a.response(a.res.body,null))}catch(e){return a.response()}},this.res=t,this.err=n},U=n(228),H="INCREMENT_ENTHUSIASM",V="DECREMENT_ENTHUSIASM",W="SET_ENTHUSIASM",X="SET_NEW_MSG",q=Object(U.a)(H,V,X,W),J=n(32),K=n(42),$=n(229),F=Object($.a)((a={},Object(J.a)(a,H,function(e,t){return Object(K.a)({},e,{enthusiasmLevel:e.enthusiasmLevel+1})}),Object(J.a)(a,V,function(e,t){return Object(K.a)({},e,{enthusiasmLevel:Math.max(1,e.enthusiasmLevel-1)})}),Object(J.a)(a,W,function(e,t){var n=Object(K.a)({},e,t.payload);return window.localStorage.setItem("$$/User/info",JSON.stringify(n)),n}),Object(J.a)(a,X,function(e,t){return Object(K.a)({},e,{describe:t.payload.describe})}),a),JSON.parse(window.localStorage.getItem("$$/User/info"))||{enthusiasmLevel:2,describe:"ant-mobile + react + redux, \u4e2a\u4ebagithub\u4e86\u89e3\u66f4\u591a..."}),G=n(50),Q=Object(G.b)(F,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),Y=function(e,t,n){return new Promise(function(a){var r={"Content-Type":"application/json",Authorization:Q.getState().enthusiasmLevel};B[e]("//www.dev.ding51.cn/"+t).set(r)["get"===e?"query":"send"](n).end(function(e,t){Q.dispatch(q.setEnthusiasm({enthusiasmLevel:1})),a(new M(t,e).verification())})})},Z=n(201),ee=function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(h.a)(this,Object(b.a)(t).call(this,e))).goLogin=Object(D.a)(z.a.mark(function e(){var t;return z.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Y("post",R.login,{name:"ding"});case 2:if(t=e.sent,console.log("sendAjax===>",t),!t.err){e.next=7;break}return y.push("/login",{name:"dingding"}),e.abrupt("return");case 7:case"end":return e.stop()}},e,this)})),n.state={},n}return Object(E.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:Z.page},c.a.createElement(S.a,{mode:"dark",leftContent:"Back",rightContent:[c.a.createElement(L.a,{key:"0",type:"search",style:{marginRight:"16px"}}),c.a.createElement(L.a,{key:"1",type:"ellipsis"})]},"app"),c.a.createElement("div",null,c.a.createElement("i",{className:"iconfont am-icon-kaixinguo",style:{fontSize:"50px"}}),c.a.createElement("p",{className:Z.title},"\u9898\u76ee"),c.a.createElement("h1",{className:"red"},"\u9996\u9875"),c.a.createElement(T.a,{type:"primary",onClick:this.goLogin},"\u767b\u5f55")))}}]),t}(o.Component),te=(n(202),n(107)),ne=n.n(te),ae=(n(204),n(77)),re=n.n(ae),ie=(n(207),n(108)),oe=n.n(ie),ce=(n(209),n(109)),le=n.n(ce),se=(n(212),n(78)),ue=n.n(se),me=n(233),pe=function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(h.a)(this,Object(b.a)(t).call(this,e))).state={},n}return Object(E.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,"\u8def\u7531\u5d4c\u5957: Demo1")}}]),t}(o.Component),de=function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(h.a)(this,Object(b.a)(t).call(this,e))).state={},n}return Object(E.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,"\u8def\u7531\u5d4c\u5957: Demo2")}}]),t}(o.Component),he=function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(h.a)(this,Object(b.a)(t).call(this,e))).changeRouter=function(e){n.props.history.push(e)},n.onChange=function(e){n.props.setEnthusiasm({enthusiasmLevel:e})},n.goBlog=function(){window.open("https://github.com/dingzuke/react-antd-mobile","_blank")},n.state={},n}return Object(E.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement(ne.a,null,c.a.createElement(ue.a,null),c.a.createElement(le.a,{mode:"link",action:c.a.createElement("span",{onClick:this.goBlog},"\u53bb\u770b\u770b"),marqueeProps:{loop:!0,style:{padding:"0 7.5px"}}},"redux\u6d4b\u8bd5: ",this.props.describe),c.a.createElement(re.a,null,c.a.createElement(re.a.Item,{wrap:!0,extra:c.a.createElement(oe.a,{style:{width:"100%",minWidth:"100px"},showNumber:!0,max:10,min:1,value:this.props.enthusiasmLevel,onChange:this.onChange})},"\u540c\u6b65redux\u503c:")),c.a.createElement(ue.a,null),c.a.createElement(T.a,{onClick:function(){return e.changeRouter("/home/demo1")},type:"primary",inline:!0,size:"small",style:{marginRight:"4px"}},"\u8def\u7531\u5d4c\u59571"),c.a.createElement(T.a,{onClick:function(){return e.changeRouter("/home/demo2")},type:"primary",inline:!0,size:"small"},"\u8def\u7531\u5d4c\u59572"),c.a.createElement("div",null,c.a.createElement(f.a,null,c.a.createElement(O.a,{extra:!0,path:"/home/demo1",component:pe}),c.a.createElement(O.a,{extra:!0,path:"/home/demo2",component:de}))))}}]),t}(o.Component),be=Object(me.a)((r=function(e){return{enthusiasmLevel:e.enthusiasmLevel,describe:e.describe}},i=function(e){return{onIncrement:function(){return e(q.incrementEnthusiasm())},onDecrement:function(){return e(q.decrementEnthusiasm())},setEnthusiasm:function(t){return e(q.setEnthusiasm(t))}}},function(e){return Object(x.b)(r,i)(e)})(he)),Ee=n(215),ge=function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(h.a)(this,Object(b.a)(t).call(this,e))).state={selectedTab:"blueTab",hidden:!1,fullScreen:!1},n}return Object(E.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:Ee.modle},c.a.createElement(_.a,{unselectedTintColor:"#949494",tintColor:"#33A3F4",barTintColor:"white",hidden:!1,tabBarPosition:"bottom",className:Ee.tabBarPosition},c.a.createElement(_.a.Item,{title:"Life",key:"Life",icon:c.a.createElement("div",{style:{width:"22px",height:"22px",background:"url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat"}}),selectedIcon:c.a.createElement("div",{style:{width:"22px",height:"22px",background:"url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat"}}),selected:"blueTab"===this.state.selectedTab,badge:1,onPress:function(){e.setState({selectedTab:"blueTab"})},"data-seed":"logId"},c.a.createElement(be,null)),c.a.createElement(_.a.Item,{icon:c.a.createElement("div",{style:{width:"22px",height:"22px",background:"url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat"}}),selectedIcon:c.a.createElement("div",{style:{width:"22px",height:"22px",background:"url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat"}}),title:"Koubei",key:"Koubei",badge:"new",selected:"redTab"===this.state.selectedTab,onPress:function(){e.setState({selectedTab:"redTab"})},"data-seed":"logId1"},c.a.createElement(ee,null))))}}]),t}(o.Component),fe=(n(216),n(79)),Oe=n.n(fe),ve=Oe.a.Step,je=n(221),ye={Home:ge,Login:function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(h.a)(this,Object(b.a)(t).call(this,e))).state={},n}return Object(E.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){console.log("\u8def\u7531\u4f20\u53c2",this.props.location.state)}},{key:"render",value:function(){return c.a.createElement("div",{className:je.login},c.a.createElement("p",{className:je.title},"\u60a8\u7684\u53d1\u7968\u5904\u7406\u72b6\u6001"),c.a.createElement(Oe.a,{size:"lg",current:3},c.a.createElement(ve,{title:c.a.createElement("span",{className:"blue"},"\u5df2\u6536\u7968"),description:c.a.createElement("span",null,"2019-03-04")}),c.a.createElement(ve,{title:c.a.createElement("span",{className:"blue"},"\u5df2\u9a8c\u771f"),description:c.a.createElement("span",null,"2019-03-05")}),c.a.createElement(ve,{title:c.a.createElement("span",{className:"blue"},"\u5df2\u5165\u8d26,\u542f\u52a8\u4ed8\u6b3e"),description:c.a.createElement("span",null,"2019-03-06(\u4eca\u5929)")}),c.a.createElement(ve,{title:c.a.createElement("span",{className:"red"},"\u5f85\u4ed8\u6b3e ",c.a.createElement("span",{style:{color:"#1a15f4",textDecoration:"underline"}},"\u6211\u8981\u878d\u8d44")),description:c.a.createElement("span",{className:"red"},"2019-06-06")})),c.a.createElement("p",{className:je.loginTo},c.a.createElement("a",{href:"www.baidu.com"},"\u767b\u5f55/\u6ce8\u518c"),"\u4e91\u5e73\u53f0"),c.a.createElement("p",{className:je.loginTo},"\u9884\u89c8\u66f4\u591a\u53d1\u7968\u4fe1\u606f"))}}]),t}(o.Component)},xe=function(e){function t(){return Object(p.a)(this,t),Object(h.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return c.a.createElement(x.a,{store:Q},c.a.createElement(m.a,{locale:void 0},c.a.createElement(g.a,{history:y},c.a.createElement(f.a,null,c.a.createElement(O.a,{path:"/home",component:ye.Home}),c.a.createElement(O.a,{path:"/login",component:ye.Login}),c.a.createElement(v.a,{path:"/",to:{pathname:"/home"}})))))}}]),t}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(c.a.createElement(xe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[113,1,2]]]);
//# sourceMappingURL=main.bf2adcd9.chunk.js.map