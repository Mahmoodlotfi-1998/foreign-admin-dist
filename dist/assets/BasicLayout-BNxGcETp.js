import{d as X,b as z,e as re,f as G,g as bt,h as xt,_ as St,i as _t,j as ee,n as le,k as ve,l as ge,m as L,p as s,q as S,R as kt,P as A,s as et,t as ke,v as Mt,x as Bt,y as Te,z as Ot,A as Pt,B as Re,F as he,C as Et,D as Nt,E as De,G as tt,H as Dt,I as Se,J as pe,K as zt,L as Tt,M as Lt,N as _e,O as nt,Q as Oe,S as Le,T as $t,U as at,V as jt,W as It,X as Ht,Y as Fe,Z as Ve,$ as Wt,a0 as Rt,a1 as Ft,a2 as ot,a3 as Vt,o as H,c as U,w as R,u as x,a4 as lt,a5 as de,a as P,a6 as rt,a7 as ie,a8 as st,a9 as it,r as ct,aa as ce,ab as ut,ac as Z,ad as fe,ae as Yt,af as Ut,ag as Xt,ah as Jt,ai as dt,aj as $e,ak as Qt,al as Kt,am as Gt,an as Zt,ao as qt,ap as en,aq as tn,ar as nn,as as an,at as on,au as ln,av as Ye,aw as rn,ax as sn}from"./index-DzwtkiX2.js";import{u as cn}from"./staticApisStore-CP5aNY_K.js";import"./inputRules-DD_CTgd6.js";import{u as un,a as dn}from"./axios-BdcwW8xT.js";var vn=function(){return{prefixCls:String,shape:{type:String,default:"circle"},size:{type:[Number,String,Object],default:function(){return"default"}},src:String,srcset:String,icon:A.any,alt:String,gap:Number,draggable:{type:Boolean,default:void 0},crossOrigin:String,loadError:{type:Function}}},fn=X({compatConfig:{MODE:3},name:"AAvatar",inheritAttrs:!1,props:vn(),slots:["icon"],setup:function(e,t){var c=t.slots,n=t.attrs,i=z(!0),y=z(!1),u=z(1),o=z(null),r=z(null),v=re("avatar",e),m=v.prefixCls,g=un(),w=G(function(){return e.size==="default"?g.value:e.size}),$=bt(),E=xt(function(){if(St(e.size)==="object"){var O=_t.find(function(j){return $.value[j]}),b=e.size[O];return b}}),V=function(b){return E.value?{width:"".concat(E.value,"px"),height:"".concat(E.value,"px"),lineHeight:"".concat(E.value,"px"),fontSize:"".concat(b?E.value/2:18,"px")}:{}},C=function(){if(!(!o.value||!r.value)){var b=o.value.offsetWidth,j=r.value.offsetWidth;if(b!==0&&j!==0){var J=e.gap,Q=J===void 0?4:J;Q*2<j&&(u.value=j-Q*2<b?(j-Q*2)/b:1)}}},B=function(){var b=e.loadError,j=b==null?void 0:b();j!==!1&&(i.value=!1)};return ee(function(){return e.src},function(){le(function(){i.value=!0,u.value=1})}),ee(function(){return e.gap},function(){le(function(){C()})}),ve(function(){le(function(){C(),y.value=!0})}),function(){var O,b,j=e.shape,J=e.src,Q=e.alt,te=e.srcset,ne=e.draggable,k=e.crossOrigin,h=ge(c,e,"icon"),p=m.value,T=(O={},L(O,"".concat(n.class),!!n.class),L(O,p,!0),L(O,"".concat(p,"-lg"),w.value==="large"),L(O,"".concat(p,"-sm"),w.value==="small"),L(O,"".concat(p,"-").concat(j),j),L(O,"".concat(p,"-image"),J&&i.value),L(O,"".concat(p,"-icon"),h),O),N=typeof w.value=="number"?{width:"".concat(w.value,"px"),height:"".concat(w.value,"px"),lineHeight:"".concat(w.value,"px"),fontSize:h?"".concat(w.value/2,"px"):"18px"}:{},I=(b=c.default)===null||b===void 0?void 0:b.call(c),Y;if(J&&i.value)Y=s("img",{draggable:ne,src:J,srcset:te,onError:B,alt:Q,crossorigin:k},null);else if(h)Y=h;else if(y.value||u.value!==1){var d="scale(".concat(u.value,") translateX(-50%)"),a={msTransform:d,WebkitTransform:d,transform:d},f=typeof w.value=="number"?{lineHeight:"".concat(w.value,"px")}:{};Y=s(kt,{onResize:C},{default:function(){return[s("span",{class:"".concat(p,"-string"),ref:o,style:S(S({},f),a)},[I])]}})}else Y=s("span",{class:"".concat(p,"-string"),ref:o,style:{opacity:0}},[I]);return s("span",S(S({},n),{},{ref:r,class:T,style:[N,V(!!h),n.style]}),[Y])}}});const ue=fn;var mn=function(){return S(S({},Pt()),{},{content:A.any,title:A.any})},gn=X({compatConfig:{MODE:3},name:"APopover",props:ke(mn(),S(S({},Mt()),{},{trigger:"hover",transitionName:"zoom-big",placement:"top",mouseEnterDelay:.1,mouseLeaveDelay:.1})),setup:function(e,t){var c=t.expose,n=t.slots,i=z();c({getPopupDomNode:function(){var g,w;return(g=i.value)===null||g===void 0||(w=g.getPopupDomNode)===null||w===void 0?void 0:w.call(g)}});var y=re("popover",e),u=y.prefixCls,o=y.configProvider,r=G(function(){return o.getPrefixCls()}),v=function(){var g,w,$=e.title,E=$===void 0?Re((g=n.title)===null||g===void 0?void 0:g.call(n)):$,V=e.content,C=V===void 0?Re((w=n.content)===null||w===void 0?void 0:w.call(n)):V,B=!!(Array.isArray(E)?E.length:E),O=!!(Array.isArray(C)?C.length:E);if(!(!B&&!O))return s(he,null,[B&&s("div",{class:"".concat(u.value,"-title")},[E]),s("div",{class:"".concat(u.value,"-inner-content")},[C])])};return function(){return s(Ot,S(S({},Te(e,["title","content"])),{},{prefixCls:u.value,ref:i,transitionName:Bt(r.value,"zoom-big",e.transitionName)}),{title:v,default:n.default})}}});const hn=et(gn);var pn=function(){return{prefixCls:String,maxCount:Number,maxStyle:{type:Object,default:void 0},maxPopoverPlacement:{type:String,default:"top"},maxPopoverTrigger:String,size:{type:[Number,String,Object],default:"default"}}},yn=X({compatConfig:{MODE:3},name:"AAvatarGroup",inheritAttrs:!1,props:pn(),setup:function(e,t){var c=t.slots,n=t.attrs,i=re("avatar-group",e),y=i.prefixCls,u=i.direction;return dn(e),function(){var o,r=e.maxPopoverPlacement,v=r===void 0?"top":r,m=e.maxCount,g=e.maxStyle,w=e.maxPopoverTrigger,$=w===void 0?"hover":w,E=(o={},L(o,y.value,!0),L(o,"".concat(y.value,"-rtl"),u.value==="rtl"),L(o,"".concat(n.class),!!n.class),o),V=ge(c,e),C=Et(V).map(function(j,J){return Nt(j,{key:"avatar-key-".concat(J)})}),B=C.length;if(m&&m<B){var O=C.slice(0,m),b=C.slice(m,B);return O.push(s(hn,{key:"avatar-popover-key",content:b,trigger:$,placement:v,overlayClassName:"".concat(y.value,"-popover")},{default:function(){return[s(ue,{style:g},{default:function(){return["+".concat(B-m)]}})]}})),s("div",S(S({},n),{},{class:E,style:n.style}),[O])}return s("div",S(S({},n),{},{class:E,style:n.style}),[C])}}});const ze=yn;ue.Group=ze;ue.install=function(l){return l.component(ue.name,ue),l.component(ze.name,ze),l};var vt=function(){return{prefixCls:String,width:A.oneOfType([A.string,A.number]),height:A.oneOfType([A.string,A.number]),style:{type:Object,default:void 0},class:String,placement:{type:String},wrapperClassName:String,level:{type:[String,Array]},levelMove:{type:[Number,Function,Array]},duration:String,ease:String,showMask:{type:Boolean,default:void 0},maskClosable:{type:Boolean,default:void 0},maskStyle:{type:Object,default:void 0},afterVisibleChange:Function,keyboard:{type:Boolean,default:void 0},contentWrapperStyle:{type:Object,default:void 0},autofocus:{type:Boolean,default:void 0},open:{type:Boolean,default:void 0}}},wn=function(){return S(S({},vt()),{},{forceRender:{type:Boolean,default:void 0},getContainer:A.oneOfType([A.string,A.func,A.object,A.looseBool])})},Cn=function(){return S(S({},vt()),{},{getContainer:Function,getOpenCount:Function,scrollLocker:A.any,switchScrollingEffect:Function})};function An(l){return Array.isArray(l)?l:[l]}var ft={transition:"transitionend",WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend"},bn=Object.keys(ft).filter(function(l){if(typeof document>"u")return!1;var e=document.getElementsByTagName("html")[0];return l in(e?e.style:{})})[0],Ue=ft[bn];function Xe(l,e,t,c){l.addEventListener?l.addEventListener(e,t,c):l.attachEvent&&l.attachEvent("on".concat(e),t)}function Je(l,e,t,c){l.removeEventListener?l.removeEventListener(e,t,c):l.attachEvent&&l.detachEvent("on".concat(e),t)}function xn(l,e){var t=typeof l=="function"?l(e):l;return Array.isArray(t)?t.length===2?t:[t[0],t[1]]:[t]}var Qe=function(e){return!isNaN(parseFloat(e))&&isFinite(e)},Pe=!(typeof window<"u"&&window.document&&window.document.createElement),Sn=function l(e,t,c,n){if(!t||t===document||t instanceof Document)return!1;if(t===e.parentNode)return!0;var i=Math.max(Math.abs(c),Math.abs(n))===Math.abs(n),y=Math.max(Math.abs(c),Math.abs(n))===Math.abs(c),u=t.scrollHeight-t.clientHeight,o=t.scrollWidth-t.clientWidth,r=document.defaultView.getComputedStyle(t),v=r.overflowY==="auto"||r.overflowY==="scroll",m=r.overflowX==="auto"||r.overflowX==="scroll",g=u&&v,w=o&&m;return i&&(!g||g&&(t.scrollTop>=u&&n<0||t.scrollTop<=0&&n>0))||y&&(!w||w&&(t.scrollLeft>=o&&c<0||t.scrollLeft<=0&&c>0))?l(e,t.parentNode,c,n):!1},_n=["width","height","open","prefixCls","placement","level","levelMove","ease","duration","getContainer","onChange","afterVisibleChange","showMask","maskClosable","maskStyle","keyboard","getOpenCount","scrollLocker","contentWrapperStyle","style","class"],me={},kn=X({compatConfig:{MODE:3},inheritAttrs:!1,props:Cn(),emits:["close","handleClick","change"],setup:function(e,t){var c=t.emit,n=t.slots,i=De({startPos:{x:null,y:null}}),y,u=z(),o=z(),r=z(),v=z(),m=z(),g=[],w="drawer_id_".concat(Number((Date.now()+Math.random()).toString().replace(".",Math.round(Math.random()*9).toString())).toString(16)),$=!Pe&&Tt?{passive:!1}:!1;ve(function(){le(function(){var d=e.open,a=e.getContainer,f=e.showMask,_=e.autofocus,M=a==null?void 0:a();if(N(e),d&&(M&&M.parentNode===document.body&&(me[w]=d),Q(),le(function(){_&&E()}),f)){var D;(D=e.scrollLocker)===null||D===void 0||D.lock()}})}),ee(function(){return e.level},function(){N(e)},{flush:"post"}),ee(function(){return e.open},function(){var d=e.open,a=e.getContainer,f=e.scrollLocker,_=e.showMask,M=e.autofocus,D=a==null?void 0:a();D&&D.parentNode===document.body&&(me[w]=!!d),Q(),d?(M&&E(),_&&(f==null||f.lock())):f==null||f.unLock()},{flush:"post"}),tt(function(){var d,a=e.open;delete me[w],a&&(te(!1),document.body.style.touchAction=""),(d=e.scrollLocker)===null||d===void 0||d.unLock()}),ee(function(){return e.placement},function(d){d&&(m.value=null)});var E=function(){var a,f;(a=o.value)===null||a===void 0||(f=a.focus)===null||f===void 0||f.call(a)},V=function(a){a.touches.length>1||(i.startPos={x:a.touches[0].clientX,y:a.touches[0].clientY})},C=function(a){if(!(a.changedTouches.length>1)){var f=a.currentTarget,_=a.changedTouches[0].clientX-i.startPos.x,M=a.changedTouches[0].clientY-i.startPos.y;(f===r.value||f===v.value||f===m.value&&Sn(f,a.target,_,M))&&a.cancelable&&a.preventDefault()}},B=function d(a){var f=a.target;Je(f,Ue,d),f.style.transition=""},O=function(a){c("close",a)},b=function(a){a.keyCode===zt.ESC&&(a.stopPropagation(),O(a))},j=function(a){var f=e.open,_=e.afterVisibleChange;a.target===u.value&&a.propertyName.match(/transform$/)&&(o.value.style.transition="",!f&&T()&&(document.body.style.overflowX="",r.value&&(r.value.style.left="",r.value.style.width="")),_&&_(!!f))},J=G(function(){var d=e.placement,a=d==="left"||d==="right",f="translate".concat(a?"X":"Y");return{isHorizontal:a,placementName:f}}),Q=function(){var a=e.open,f=e.width,_=e.height,M=J.value,D=M.isHorizontal,W=M.placementName,F=m.value?m.value.getBoundingClientRect()[D?"width":"height"]:0,K=(D?f:_)||F;ne(a,W,K)},te=function(a,f,_,M){var D=e.placement,W=e.levelMove,F=e.duration,K=e.ease,q=e.showMask;g.forEach(function(se){se.style.transition="transform ".concat(F," ").concat(K),Xe(se,Ue,B);var ae=a?_:0;if(W){var we=xn(W,{target:se,open:a});ae=a?we[0]:we[1]||0}var Ce=typeof ae=="number"?"".concat(ae,"px"):ae,oe=D==="left"||D==="top"?Ce:"-".concat(Ce);oe=q&&D==="right"&&M?"calc(".concat(oe," + ").concat(M,"px)"):oe,se.style.transform=ae?"".concat(f,"(").concat(oe,")"):""})},ne=function(a,f,_){if(!Pe){var M=document.body.scrollHeight>(window.innerHeight||document.documentElement.clientHeight)&&window.innerWidth>document.body.offsetWidth?Dt(!0):0;te(a,f,_,M),k(M)}c("change",a)},k=function(a){var f=e.getContainer,_=e.showMask,M=e.open,D=f==null?void 0:f();if(D&&D.parentNode===document.body&&_){var W=["touchstart"],F=[document.body,r.value,v.value,m.value];M&&document.body.style.overflow!=="hidden"?(a&&h(a),document.body.style.touchAction="none",F.forEach(function(K,q){K&&Xe(K,W[q]||"touchmove",q?C:V,$)})):T()&&(document.body.style.touchAction="",a&&p(a),F.forEach(function(K,q){K&&Je(K,W[q]||"touchmove",q?C:V,$)}))}},h=function(a){var f=e.placement,_=e.duration,M=e.ease,D="width ".concat(_," ").concat(M),W="transform ".concat(_," ").concat(M);switch(o.value.style.transition="none",f){case"right":o.value.style.transform="translateX(-".concat(a,"px)");break;case"top":case"bottom":o.value.style.width="calc(100% - ".concat(a,"px)"),o.value.style.transform="translateZ(0)";break}clearTimeout(y),y=setTimeout(function(){o.value&&(o.value.style.transition="".concat(W,",").concat(D),o.value.style.width="",o.value.style.transform="")})},p=function(a){var f=e.placement,_=e.duration,M=e.ease;o.value.style.transition="none";var D,W="width ".concat(_," ").concat(M),F="transform ".concat(_," ").concat(M);switch(f){case"left":{o.value.style.width="100%",W="width 0s ".concat(M," ").concat(_);break}case"right":{o.value.style.transform="translateX(".concat(a,"px)"),o.value.style.width="100%",W="width 0s ".concat(M," ").concat(_),r.value&&(r.value.style.left="-".concat(a,"px"),r.value.style.width="calc(100% + ".concat(a,"px)"));break}case"top":case"bottom":{o.value.style.width="calc(100% + ".concat(a,"px)"),o.value.style.height="100%",o.value.style.transform="translateZ(0)",D="height 0s ".concat(M," ").concat(_);break}}clearTimeout(y),y=setTimeout(function(){o.value&&(o.value.style.transition="".concat(F,",").concat(D?"".concat(D,","):"").concat(W),o.value.style.transform="",o.value.style.width="",o.value.style.height="")})},T=function(){return!Object.keys(me).some(function(a){return me[a]})},N=function(a){var f=a.level,_=a.getContainer;if(!Pe){var M=_==null?void 0:_(),D=M?M.parentNode:null;if(g=[],f==="all"){var W=D?Array.prototype.slice.call(D.children):[];W.forEach(function(F){F.nodeName!=="SCRIPT"&&F.nodeName!=="STYLE"&&F.nodeName!=="LINK"&&F!==M&&g.push(F)})}else f&&An(f).forEach(function(F){document.querySelectorAll(F).forEach(function(K){g.push(K)})})}},I=function(a){c("handleClick",a)},Y=z(!1);return ee(o,function(){le(function(){Y.value=!0})}),function(){var d,a,f,_=e.width,M=e.height,D=e.open,W=e.prefixCls,F=e.placement;e.level,e.levelMove,e.ease,e.duration,e.getContainer,e.onChange,e.afterVisibleChange;var K=e.showMask,q=e.maskClosable,se=e.maskStyle,ae=e.keyboard;e.getOpenCount,e.scrollLocker;var we=e.contentWrapperStyle,Ce=e.style,oe=e.class,yt=Se(e,_n),Be=D&&Y.value,wt=pe(W,(d={},L(d,"".concat(W,"-").concat(F),!0),L(d,"".concat(W,"-open"),Be),L(d,oe,!!oe),L(d,"no-mask",!K),d)),Ct=J.value.placementName,At=F==="left"||F==="top"?"-100%":"100%",We=Be?"":"".concat(Ct,"(").concat(At,")");return s("div",S(S({},Te(yt,["switchScrollingEffect","autofocus"])),{},{tabindex:-1,class:wt,style:Ce,ref:o,onKeydown:Be&&ae?b:void 0,onTransitionend:j}),[K&&s("div",{class:"".concat(W,"-mask"),onClick:q?O:void 0,style:se,ref:r},null),s("div",{class:"".concat(W,"-content-wrapper"),style:S({transform:We,msTransform:We,width:Qe(_)?"".concat(_,"px"):_,height:Qe(M)?"".concat(M,"px"):M},we),ref:u},[s("div",{class:"".concat(W,"-content"),ref:m},[(a=n.default)===null||a===void 0?void 0:a.call(n)]),n.handler?s("div",{onClick:I,ref:v},[(f=n.handler)===null||f===void 0?void 0:f.call(n)]):null])])}}});const Ke=kn;var Mn=["afterVisibleChange","getContainer","wrapperClassName","forceRender"],Bn=["visible","afterClose"],On=X({compatConfig:{MODE:3},inheritAttrs:!1,props:ke(wn(),{prefixCls:"drawer",placement:"left",getContainer:"body",level:"all",duration:".3s",ease:"cubic-bezier(0.78, 0.14, 0.15, 0.86)",afterVisibleChange:function(){},showMask:!0,maskClosable:!0,maskStyle:{},wrapperClassName:"",keyboard:!0,forceRender:!1,autofocus:!0}),emits:["handleClick","close"],slots:["handler"],setup:function(e,t){var c=t.emit,n=t.slots,i=z(null),y=function(r){c("handleClick",r)},u=function(r){c("close",r)};return function(){e.afterVisibleChange;var o=e.getContainer,r=e.wrapperClassName,v=e.forceRender,m=Se(e,Mn),g=null;if(!o)return s("div",{class:r,ref:i},[s(Ke,S(S({},m),{},{open:e.open,getContainer:function(){return i.value},onClose:u,onHandleClick:y}),n)]);var w=!!n.handler||v;return(w||e.open||i.value)&&(g=s(Lt,{visible:e.open,forceRender:w,getContainer:o,wrapperClassName:r},{default:function(E){var V=E.visible,C=E.afterClose,B=Se(E,Bn);return s(Ke,S(S(S({ref:i},m),B),{},{open:V!==void 0?V:e.open,afterVisibleChange:C!==void 0?C:e.afterVisibleChange,onClose:u,onHandleClick:y}),n)}})),g}}});const Pn=On;var En=["width","height","visible","placement","mask","wrapClassName","class"],Nn=_e("top","right","bottom","left");_e("default","large");var Ge={distance:180},Dn=function(){return{autofocus:{type:Boolean,default:void 0},closable:{type:Boolean,default:void 0},closeIcon:A.any,destroyOnClose:{type:Boolean,default:void 0},forceRender:{type:Boolean,default:void 0},getContainer:A.any,maskClosable:{type:Boolean,default:void 0},mask:{type:Boolean,default:void 0},maskStyle:{type:Object,default:void 0},wrapStyle:{type:Object,default:void 0},style:{type:Object,default:void 0},class:A.any,wrapClassName:String,size:{type:String},drawerStyle:{type:Object,default:void 0},headerStyle:{type:Object,default:void 0},bodyStyle:{type:Object,default:void 0},contentWrapperStyle:{type:Object,default:void 0},title:A.any,visible:{type:Boolean,default:void 0},width:A.oneOfType([A.string,A.number]),height:A.oneOfType([A.string,A.number]),zIndex:Number,prefixCls:String,push:A.oneOfType([A.looseBool,{type:Object}]),placement:A.oneOf(Nn),keyboard:{type:Boolean,default:void 0},extra:A.any,footer:A.any,footerStyle:{type:Object,default:void 0},level:A.any,levelMove:{type:[Number,Array,Function]},handle:A.any,afterVisibleChange:Function,onAfterVisibleChange:Function,"onUpdate:visible":Function,onClose:Function}},zn=X({compatConfig:{MODE:3},name:"ADrawer",inheritAttrs:!1,props:ke(Dn(),{closable:!0,placement:"right",maskClosable:!0,mask:!0,level:null,keyboard:!0,push:Ge}),slots:["closeIcon","title","extra","footer","handle"],setup:function(e,t){var c=t.emit,n=t.slots,i=t.attrs,y=z(!1),u=z(!1),o=z(null),r=nt("parentDrawerOpts",null),v=re("drawer",e),m=v.prefixCls;Oe(!e.afterVisibleChange,"Drawer","`afterVisibleChange` prop is deprecated, please use `@afterVisibleChange` event instead"),Oe(e.wrapStyle===void 0,"Drawer","`wrapStyle` prop is deprecated, please use `style` instead"),Oe(e.wrapClassName===void 0,"Drawer","`wrapClassName` prop is deprecated, please use `class` instead");var g=function(){y.value=!0},w=function(){y.value=!1,le(function(){$()})};Le("parentDrawerOpts",{setPush:g,setPull:w}),ve(function(){var k=e.visible;k&&r&&r.setPush()}),tt(function(){r&&r.setPull()}),ee(function(){return e.visible},function(k){r&&(k?r.setPush():r.setPull())},{flush:"post"});var $=function(){var h,p;(h=o.value)===null||h===void 0||(p=h.domFocus)===null||p===void 0||p.call(h)},E=function(h){c("update:visible",!1),c("close",h)},V=function(h){var p;(p=e.afterVisibleChange)===null||p===void 0||p.call(e,h),c("afterVisibleChange",h)},C=G(function(){return e.destroyOnClose&&!e.visible}),B=function(){var h=C.value;h&&(e.visible||(u.value=!0))},O=G(function(){var k=e.push,h=e.placement,p;return typeof k=="boolean"?p=k?Ge.distance:0:p=k.distance,p=parseFloat(String(p||0)),h==="left"||h==="right"?"translateX(".concat(h==="left"?p:-p,"px)"):h==="top"||h==="bottom"?"translateY(".concat(h==="top"?p:-p,"px)"):null}),b=G(function(){var k=e.visible,h=e.mask,p=e.placement,T=e.size,N=T===void 0?"default":T,I=e.width,Y=e.height;if(!k&&!h)return{};var d={};if(p==="left"||p==="right"){var a=N==="large"?736:378;d.width=typeof I>"u"?a:I,d.width=typeof d.width=="string"?d.width:"".concat(d.width,"px")}else{var f=N==="large"?736:378;d.height=typeof Y>"u"?f:Y,d.height=typeof d.height=="string"?d.height:"".concat(d.height,"px")}return d}),j=G(function(){var k=e.zIndex,h=e.wrapStyle,p=e.mask,T=e.style,N=p?{}:b.value;return S(S(S({zIndex:k,transform:y.value?O.value:void 0},N),h),T)}),J=function(h){var p=e.closable,T=e.headerStyle,N=ge(n,e,"extra"),I=ge(n,e,"title");return!I&&!p?null:s("div",{class:pe("".concat(h,"-header"),L({},"".concat(h,"-header-close-only"),p&&!I&&!N)),style:T},[s("div",{class:"".concat(h,"-header-title")},[Q(h),I&&s("div",{class:"".concat(h,"-title")},[I])]),N&&s("div",{class:"".concat(h,"-extra")},[N])])},Q=function(h){var p,T=e.closable,N=n.closeIcon?(p=n.closeIcon)===null||p===void 0?void 0:p.call(n):e.closeIcon;return T&&s("button",{key:"closer",onClick:E,"aria-label":"Close",class:"".concat(h,"-close")},[N===void 0?s($t,null,null):N])},te=function(h){var p;if(u.value&&!e.visible)return null;u.value=!1;var T=e.bodyStyle,N=e.drawerStyle,I={},Y=C.value;return Y&&(I.opacity=0,I.transition="opacity .3s"),s("div",{class:"".concat(h,"-wrapper-body"),style:S(S({},I),N),onTransitionend:B},[J(h),s("div",{key:"body",class:"".concat(h,"-body"),style:T},[(p=n.default)===null||p===void 0?void 0:p.call(n)]),ne(h)])},ne=function(h){var p=ge(n,e,"footer");if(!p)return null;var T="".concat(h,"-footer");return s("div",{class:T,style:e.footerStyle},[p])};return function(){var k;e.width,e.height;var h=e.visible,p=e.placement,T=e.mask,N=e.wrapClassName,I=e.class,Y=Se(e,En),d=T?b.value:{},a=T?"":"no-mask",f=S(S(S(S({},i),Te(Y,["size","closeIcon","closable","destroyOnClose","drawerStyle","headerStyle","bodyStyle","title","push","wrapStyle","onAfterVisibleChange","onClose","onUpdate:visible"])),d),{},{onClose:E,afterVisibleChange:V,handler:!1,prefixCls:m.value,open:h,showMask:T,placement:p,class:pe((k={},L(k,I,I),L(k,N,!!N),L(k,a,!!a),k)),style:j.value,ref:o});return s(Pn,f,{handler:e.handle?function(){return e.handle}:n.handle,default:function(){return te(m.value)}})}}});const mt=et(zn);var je=function(){return{prefixCls:String,hasSider:{type:Boolean,default:void 0},tagName:String}};function Me(l){var e=l.suffixCls,t=l.tagName,c=l.name;return function(n){var i=X({compatConfig:{MODE:3},name:c,props:je(),setup:function(u,o){var r=o.slots,v=re(e,u),m=v.prefixCls;return function(){var g=S(S({},u),{},{prefixCls:m.value,tagName:t});return s(n,g,r)}}});return i}}var Ie=X({compatConfig:{MODE:3},props:je(),setup:function(e,t){var c=t.slots;return function(){return s(e.tagName,{class:e.prefixCls},c)}}}),Tn=X({compatConfig:{MODE:3},props:je(),setup:function(e,t){var c=t.slots,n=re("",e),i=n.direction,y=z([]),u={addSider:function(v){y.value=[].concat(jt(y.value),[v])},removeSider:function(v){y.value=y.value.filter(function(m){return m!==v})}};Le(at,u);var o=G(function(){var r,v=e.prefixCls,m=e.hasSider;return r={},L(r,"".concat(v),!0),L(r,"".concat(v,"-has-sider"),typeof m=="boolean"?m:y.value.length>0),L(r,"".concat(v,"-rtl"),i.value==="rtl"),r});return function(){var r=e.tagName;return s(r,{class:o.value},c)}}}),Ln=Me({suffixCls:"layout",tagName:"section",name:"ALayout"})(Tn),Ae=Me({suffixCls:"layout-header",tagName:"header",name:"ALayoutHeader"})(Ie),Ee=Me({suffixCls:"layout-footer",tagName:"footer",name:"ALayoutFooter"})(Ie),be=Me({suffixCls:"layout-content",tagName:"main",name:"ALayoutContent"})(Ie);const Ne=Ln;var $n={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM104 228a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"bars",theme:"outlined"};const jn=$n;function Ze(l){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},c=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(c=c.concat(Object.getOwnPropertySymbols(t).filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),c.forEach(function(n){In(l,n,t[n])})}return l}function In(l,e,t){return e in l?Object.defineProperty(l,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):l[e]=t,l}var He=function(e,t){var c=Ze({},e,t.attrs);return s(It,Ze({},c,{icon:jn}),null)};He.displayName="BarsOutlined";He.inheritAttrs=!1;const Hn=He;var qe={xs:"479.98px",sm:"575.98px",md:"767.98px",lg:"991.98px",xl:"1199.98px",xxl:"1599.98px",xxxl:"1999.98px"},Wn=function(){return{prefixCls:String,collapsible:{type:Boolean,default:void 0},collapsed:{type:Boolean,default:void 0},defaultCollapsed:{type:Boolean,default:void 0},reverseArrow:{type:Boolean,default:void 0},zeroWidthTriggerStyle:{type:Object,default:void 0},trigger:A.any,width:A.oneOfType([A.number,A.string]),collapsedWidth:A.oneOfType([A.number,A.string]),breakpoint:A.oneOf(_e("xs","sm","md","lg","xl","xxl","xxxl")),theme:A.oneOf(_e("light","dark")).def("dark"),onBreakpoint:Function,onCollapse:Function}},Rn=function(){var l=0;return function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return l+=1,"".concat(e).concat(l)}}();const xe=X({compatConfig:{MODE:3},name:"ALayoutSider",inheritAttrs:!1,props:ke(Wn(),{collapsible:!1,defaultCollapsed:!1,reverseArrow:!1,width:200,collapsedWidth:80}),emits:["breakpoint","update:collapsed","collapse"],setup:function(e,t){var c=t.emit,n=t.attrs,i=t.slots,y=re("layout-sider",e),u=y.prefixCls,o=nt(at,void 0),r=z(!!(e.collapsed!==void 0?e.collapsed:e.defaultCollapsed)),v=z(!1);ee(function(){return e.collapsed},function(){r.value=!!e.collapsed}),Le(Wt,r);var m=function(B,O){e.collapsed===void 0&&(r.value=B),c("update:collapsed",B),c("collapse",B,O)},g=z(function(C){v.value=C.matches,c("breakpoint",C.matches),r.value!==C.matches&&m(C.matches,"responsive")}),w;function $(C){return g.value(C)}var E=Rn("ant-sider-");o&&o.addSider(E),ve(function(){ee(function(){return e.breakpoint},function(){try{var C;(C=w)===null||C===void 0||C.removeEventListener("change",$)}catch{var B;(B=w)===null||B===void 0||B.removeListener($)}if(typeof window<"u"){var O=window,b=O.matchMedia;if(b&&e.breakpoint&&e.breakpoint in qe){w=b("(max-width: ".concat(qe[e.breakpoint],")"));try{w.addEventListener("change",$)}catch{w.addListener($)}$(w)}}},{immediate:!0})}),Ht(function(){try{var C;(C=w)===null||C===void 0||C.removeEventListener("change",$)}catch{var B;(B=w)===null||B===void 0||B.removeListener($)}o&&o.removeSider(E)});var V=function(){m(!r.value,"clickTrigger")};return function(){var C,B,O,b=u.value,j=e.collapsedWidth,J=e.width,Q=e.reverseArrow,te=e.zeroWidthTriggerStyle,ne=e.trigger,k=ne===void 0?(C=i.trigger)===null||C===void 0?void 0:C.call(i):ne,h=e.collapsible,p=e.theme,T=r.value?j:J,N=Rt(T)?"".concat(T,"px"):String(T),I=parseFloat(String(j||0))===0?s("span",{onClick:V,class:pe("".concat(b,"-zero-width-trigger"),"".concat(b,"-zero-width-trigger-").concat(Q?"right":"left")),style:te},[k||s(Hn,null,null)]):null,Y={expanded:Q?s(Fe,null,null):s(Ve,null,null),collapsed:Q?s(Ve,null,null):s(Fe,null,null)},d=r.value?"collapsed":"expanded",a=Y[d],f=k!==null?I||s("div",{class:"".concat(b,"-trigger"),onClick:V,style:{width:N}},[k||a]):null,_=[n.style,{flex:"0 0 ".concat(N),maxWidth:N,minWidth:N,width:N}],M=pe(b,"".concat(b,"-").concat(p),(B={},L(B,"".concat(b,"-collapsed"),!!r.value),L(B,"".concat(b,"-has-trigger"),h&&k!==null&&!I),L(B,"".concat(b,"-below"),!!v.value),L(B,"".concat(b,"-zero-width"),parseFloat(N)===0),B),n.class);return s("aside",S(S({},n),{},{class:M,style:_}),[s("div",{class:"".concat(b,"-children")},[(O=i.default)===null||O===void 0?void 0:O.call(i)]),h||v.value&&I?f:null])}}});var Fn=Ae,Vn=xe,Yn=be;const Un=Ft(Ne,{Header:Ae,Footer:Ee,Content:be,Sider:xe,install:function(e){return e.component(Ne.name,Ne),e.component(Ae.name,Ae),e.component(Ee.name,Ee),e.component(xe.name,xe),e.component(be.name,be),e}}),Xn="/assets/logo-D_80T1J_.png",ye=ot("layout",()=>{const l=De({collapsible:!0,collapsed:!1,width:"230px",collapsedWidth:"56px",fixedSideBar:!1,mode:"horizontal"}),e="top",t=z(!1),c=G(()=>l.collapsed?l.collapsedWidth:l.width),n=De({height:"45px",fixed:!0});return{sideMenu:l,sideMenuWidth:c,header:n,layout:e,showSettingsIcon:t}}),gt=X({__name:"BaseMenuItem",props:{item:{}},setup(l){const e=Vt(),t=l;async function c(n){await e.push({name:n.name})}return(n,i)=>{var o;const y=ie,u=st;return H(),U(u,{disabled:((o=t.item.meta)==null?void 0:o.disabled)??!1,key:t.item.name,onClick:i[0]||(i[0]=r=>c(n.item))},{icon:R(()=>{var r,v;return[(r=t.item.meta)!=null&&r.icon?(H(),U(y,{key:0,size:x(lt),icon:(v=t.item.meta)==null?void 0:v.icon},null,8,["size","icon"])):de("",!0)]}),default:R(()=>[P("span",null,rt(t.item.meta.title??t.item.name),1)]),_:1},8,["disabled"])}}}),Jn=X({__name:"BasicSubMenu",props:{menuItem:{},level:{default:1}},setup(l){const{prefixCls:e}=fe("basic-sub-menu"),t=l,c=G(()=>t.level==1?[-63,3]:[-8,-8]),n=G(()=>t.menuItem),i=G(()=>it.sortBy(t.menuItem.children,y=>{var u;return(u=y.meta)==null?void 0:u.order}).filter(y=>{var u;return!((u=y.meta)!=null&&u.hideMenu)}));return(y,u)=>{const o=ie,r=ct("BasicSubMenu",!0),v=Yt;return H(),U(v,{class:Z(x(e)),popupClassName:`${x(e)}-popup`,popupOffset:c.value},{icon:R(()=>{var m;return[(m=n.value.meta)!=null&&m.icon?(H(),U(o,{key:0,size:x(lt),icon:n.value.meta.icon},null,8,["size","icon"])):de("",!0)]}),title:R(()=>[P("span",null,rt(n.value.meta.title??n.value.name),1)]),default:R(()=>[(H(!0),ce(he,null,ut(i.value,m=>{var g;return H(),ce(he,null,[!((g=m.meta)!=null&&g.hideChildren)&&m.children&&m.children.length>0?(H(),U(r,{"menu-item":m,key:m.name,level:t.level+1},null,8,["menu-item","level"])):(H(),U(gt,{item:m,key:m.name},null,8,["item"]))],64)}),256))]),_:1},8,["class","popupClassName","popupOffset"])}}}),ht=X({__name:"BasicMenu",setup(l){const{prefixCls:e}=fe("basic-menu"),t=ye(),c=Ut(),n=z([]),i=Xt();ve(()=>{const u=[];function o(r){for(const v of r){if(v.name==c.name)return u.push(v.name),!0;if(v.children&&v.children.length>0)if(u.push(v.name),!o(v.children))u.pop();else return!0}return!1}o(i.routes),n.value=u});const y=G(()=>it.sortBy(i.routes,u=>{var o;return(o=u.meta)==null?void 0:o.order}).filter(u=>{var o;return!((o=u.meta)!=null&&o.hideMenu)}));return(u,o)=>{const r=dt;return H(),ce("div",{class:Z([x(e),`${x(t).layout}-menu`])},[s(r,{mode:x(t).sideMenu.mode,selectedKeys:x(n),"onUpdate:selectedKeys":o[0]||(o[0]=v=>Jt(n)?n.value=v:null)},{default:R(()=>[(H(!0),ce(he,null,ut(y.value,v=>{var m;return H(),ce(he,null,[!((m=v.meta)!=null&&m.hideChildren)&&v.children&&v.children.length>0?(H(),U(Jn,{"menu-item":v,key:v.name,level:1},null,8,["menu-item"])):(H(),U(gt,{item:v,key:v.name},null,8,["item"]))],64)}),256))]),_:1},8,["mode","selectedKeys"])],2)}}}),Qn=X({__name:"BaseSideMenu",setup(l){const e=ye(),{prefixCls:t}=fe("basic-side-menu");return(c,n)=>{const i=Vn;return H(),U(i,{theme:"light",class:Z([x(t)]),width:x(e).sideMenu.width,collapsible:x(e).sideMenu.collapsible,collapsedWidth:x(e).sideMenu.collapsedWidth,collapsed:x(e).sideMenu.collapsed,"onUpdate:collapsed":n[0]||(n[0]=y=>x(e).sideMenu.collapsed=y),trigger:null},{default:R(()=>[P("div",{class:"flex items-center logo px-4 py-2 gap-3",style:$e(`height:calc(${x(e).header.height} - 1px );min-height:calc(${x(e).header.height} - 1px )`)},n[1]||(n[1]=[P("img",{src:Xn,class:"object-cover",style:{"max-height":"32px"}},null,-1)]),4),s(ht,{class:"flex-1 overflow-scroll scroll-none"})]),_:1},8,["class","width","collapsible","collapsedWidth","collapsed"])}}}),Kn="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20id='Layer_2'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2072.7809%20109.4368'%3e%3cg%20id='Components'%3e%3cg%20id='_3f79357d-53bc-41b7-bfb5-9d85f1b684af_4'%3e%3cpath%20d='M6.7214,44.9237c7.9126,8.8859,12.7202,20.5974,12.7202,33.4317,0,9.6651-2.7264,18.6934-7.4522,26.3578'%20style='fill:none;%20stroke:%23000;%20stroke-miterlimit:10;%20stroke-width:18px;'/%3e%3cpath%20d='M66.0595,5.9852c-13.0657,14.673-21.0043,34.0116-21.0043,55.2045,0,15.9596,4.5021,30.8677,12.3055,43.5236'%20style='fill:none;%20stroke:%23000;%20stroke-miterlimit:10;%20stroke-width:18px;'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e",Gn="/assets/placeholder-m-BDz9jlwI.jpg",pt=ot("settings",()=>{const l=z(!1),e=z("right");return{showSettingsDrawer:l,settingsPlacementDrawer:e}}),Zn={class:"flex items-center"},qn={class:"ml-2 pr-5 flex-1 flex"},ea={class:"flex items-center gap-6 pl-4"},ta={class:"flex items-center gap-1 text-gray-400"},na={class:"flex items-center gap-1"},aa={class:"flex items-center gap-1 text-red-600"},oa=X({__name:"BasicHeader",setup(l){const{prefixCls:e}=fe("basic-header"),t=ye();cn(),Qt();const c=pt(),n=z(!1),i=z(!1),y=z();ve(()=>{});async function u(){var m;(m=y.value)==null||m.validateFields().then(async()=>{n.value=!0;try{Zt.success("اطلاعات با موفقیت ویرایش شد"),i.value=!1}catch(g){console.error(g)}finally{n.value=!1}})}function o(){t.sideMenu.collapsed=!t.sideMenu.collapsed}function r(){c.showSettingsDrawer=!c.showSettingsDrawer}function v(){qt.logout(),en(),location.reload()}return(m,g)=>{const w=tn,$=ue,E=st,V=nn,C=dt,B=an,O=Fn;return H(),U(O,{theme:"light",class:Z([x(e)]),style:$e(`height:${x(t).header.height};line-height:${x(t).header.height}`)},{default:R(()=>[P("div",Zn,[P("div",qn,[g[4]||(g[4]=P("div",{class:"flex items-center"},[P("img",{src:Kn,style:{height:"25px"},class:"ml-5 mr-5"})],-1)),x(t).layout=="side"?(H(),U(w,{key:0,type:"text",icon:"vuesax-linear:menu",onClick:o})):de("",!0),s(ht)]),P("div",ea,[s(B,{placement:"bottomLeft",class:"ml-5"},{overlay:R(()=>[s(C,null,{default:R(()=>[s(E,null,{default:R(()=>g[5]||(g[5]=[P("div",{class:"flex flex-col"},null,-1)])),_:1}),s(V),s(E,{onClick:g[1]||(g[1]=b=>i.value=!0)},{default:R(()=>[P("div",na,[s(ie,{icon:"vuesax-linear:profile",size:"18"}),g[6]||(g[6]=P("span",null,"Profile",-1))])]),_:1}),s(E,{onClick:v},{default:R(()=>[P("div",aa,[s(ie,{icon:"vuesax-linear:logout",size:"18"}),g[7]||(g[7]=P("span",null,"Logout",-1))])]),_:1})]),_:1})]),default:R(()=>[P("a",{class:"ant-dropdown-link",onClick:g[0]||(g[0]=Kt(()=>{},["prevent"]))},[P("div",ta,[s($,{src:x(Gn)},null,8,["src"]),s(ie,{icon:"vuesax-linear:arrow-down",size:"15"})])])]),_:1}),g[8]||(g[8]=P("div",{class:"w-2"},null,-1)),x(t).showSettingsIcon?(H(),U(w,{key:0,iconSize:"20",icon:"vuesax-linear:setting",type:"text",onClick:r})):de("",!0)])]),s(Gt,{visible:i.value,"onUpdate:visible":g[2]||(g[2]=b=>i.value=b),width:"40rem",title:"اطلاعات حساب کاربری",onOk:u,loading:n.value,onClose:g[3]||(g[3]=b=>i.value=!1)},null,8,["visible","loading"])]),_:1},8,["class","style"])}}}),la="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAAAwCAYAAACVMr0DAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACXSURBVHgB7dKxCYMAFADRn5ANhATi/oWNnfPpBFZy3XsjHPdavus5D2z7Mdx7DymBYwLHBI4JHPvMQ//fMtxzcEzgmMAxgWMCxwSOCRwTOCZwTOCYwDGBYwLHBI4JHBM4JnBM4JjAMYFjAscEjgkcEzgmcEzgmMAxgWMCxwSOCRwTOCZwTOCYwDGBYwLHBI4JHBM4JnDsAu81A/WU6RQFAAAAAElFTkSuQmCC",ra="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAAAwCAYAAACVMr0DAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACWSURBVHgB7dYxDYBAAATBBwskkIB/F5QIwBEooCLbzUjYXHHTsh7PIDMPUgLHBI4JHBM4Np3X/etF7Nsy+GbBMYFjAscEjgkcEzgmcEzgmMAxgWMCxwSOCRwTOCZwTOCYwDGBYwLHBI4JHBM4JnBM4JjAMYFjAscEjgkcEzgmcEzgmMAxgWMCxwSOCRwTOCZwTOCYwLEX5ikFNdOOlzsAAAAASUVORK5CYII=",sa="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAAAwCAYAAACVMr0DAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACPSURBVHgB7dYxEYAwAATBBAvM0ODfEg1lhCQqrtuVcPPFz/t59yBzDVICxwSOCRwTODa/f3kRIQuOCRwTOCZwTOCYwDGBYwLHBI4JHBM4JnBM4JjAMYFjAscEjgkcEzgmcEzgmMAxgWMCxwSOCRwTOCZwTOCYwDGBYwLHBI4JHBM4JnBM4JjAMYFjAscEjh33KQU1Na9VQgAAAABJRU5ErkJggg==",ia={class:"flex flex-col gap-4"},ca={class:"flex justify-between"},ua={class:"flex justify-between"},da={class:"flex justify-between"},va={class:"flex justify-between"},fa={class:"flex justify-between"},ma={class:"flex flex-col gap-3"},ga={class:"flex items-center justify-between"},ha=X({__name:"BaseSettings",setup(l){const{prefixCls:e}=fe("base-settings"),t=pt(),c=ye();return(n,i)=>{const y=ie,u=on,o=ln,r=mt;return H(),U(r,{class:Z(x(e)),visible:x(t).showSettingsDrawer,"onUpdate:visible":i[0]||(i[0]=v=>x(t).showSettingsDrawer=v),title:"تنظیمات",placement:x(t).settingsPlacementDrawer},{closeIcon:R(()=>[s(y,{icon:"vuesax-linear:add",size:"24",class:"rotate-45"})]),default:R(()=>[P("div",ia,[P("div",ca,[i[1]||(i[1]=P("span",{class:"text-gray-400 text-sm"},"نوار کناری (Sidebar)",-1)),s(u,{checked:!0,size:"small"})]),P("div",ua,[i[2]||(i[2]=P("span",{class:"text-gray-400 text-sm"},"تب بندی",-1)),s(u,{checked:!0,size:"small"})]),P("div",da,[i[3]||(i[3]=P("span",{class:"text-gray-400 text-sm"},"سر صفحه (Header)",-1)),s(u,{checked:!0,size:"small"})]),P("div",va,[i[4]||(i[4]=P("span",{class:"text-gray-400 text-sm"},"مسیر جاری (Breadcrumbs)",-1)),s(u,{checked:!0,size:"small"})]),P("div",fa,[i[5]||(i[5]=P("span",{class:"text-gray-400 text-sm"},"پانویس (Footer)",-1)),s(u,{checked:!0,size:"small"})])]),s(o,{class:"!my-2"}),P("div",ma,[i[6]||(i[6]=P("span",{class:"text-gray-400"}," طرح بندی",-1)),P("div",ga,[P("img",{src:la,class:Z(["layout-item",[{active:x(c).layout==="side"}]])},null,2),P("img",{src:ra,class:Z(["layout-item",[{active:x(c).layout==="mix"}]])},null,2),P("img",{src:sa,class:Z(["layout-item",[{active:x(c).layout==="top"}]])},null,2)])])]),_:1},8,["class","visible","placement"])}}}),Aa=X({__name:"BasicLayout",setup(l){const{prefixCls:e}=fe("basic-layout"),t=ye();return(c,n)=>{const i=mt,y=ct("RouterView"),u=Yn,o=Un;return H(),U(o,{class:Z([[x(e),{"overflow-y-scroll":!x(t).header.fixed}],"h-screen"])},{default:R(()=>[x(Ye)?(H(),U(i,{key:0})):x(t).layout==="side"?(H(),U(Qn,{key:1})):de("",!0),x(t).sideMenu.fixedSideBar&&!x(Ye)?(H(),ce("div",{key:2,style:$e(`width: ${x(t).sideMenuWidth}; min-width: ${x(t).sideMenuWidth};max-width: ${x(t).sideMenuWidth};`),class:"virtual-side-menu"},null,4)):de("",!0),s(i,{placement:"left"},{default:R(()=>n[0]||(n[0]=[rn(" this is setting ")])),_:1}),s(o,null,{default:R(()=>[s(oa),s(u,{class:Z(["admin-layout-content",[{"overflow-y-scroll":x(t).header.fixed}]])},{default:R(()=>[s(y,null,{default:R(({Component:r})=>[(H(),U(sn(r)))]),_:1})]),_:1},8,["class"])]),_:1}),s(ha)]),_:1},8,["class"])}}});export{Aa as default};
