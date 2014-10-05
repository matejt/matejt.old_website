/*
 COPYRIGHT 2009 ESRI

 TRADE SECRETS: ESRI PROPRIETARY AND CONFIDENTIAL
 Unpublished material - all rights reserved under the
 Copyright Laws of the United States and applicable international
 laws, treaties, and conventions.

 For additional information, contact:
 Environmental Systems Research Institute, Inc.
 Attn: Contracts and Legal Services Department
 380 New York Street
 Redlands, California, 92373
 USA

 email: contracts@esri.com
 */
//>>built
define("esri/dijit/_TouchBase","dojo/_base/declare dojo/_base/lang dojo/_base/connect dojo/dom dojo/has esri/kernel".split(" "),function(b,d,c,e,f,g){b=b(null,{declaredClass:"esri.dijit._TouchBase",_preventDefault:!0,_swipeThreshold:20,constructor:function(a,b){this.domNode=e.byId(a);this.events=[c.connect(this.domNode,"touchstart",this,this._touchStartHandler),c.connect(this.domNode,"touchmove",this,this._touchMoveHandler),c.connect(this.domNode,"touchend",this,this._touchEndHandler),c.connect(this.domNode,
"onclick",this,this._clickHandler)]},setPreventDefault:function(a){this._preventDefault=a},disableOnClick:function(){c.disconnect(this.events.pop())},_clickHandler:function(a){if(this._moved)a.preventDefault();else this.onclick(a)},_touchStartHandler:function(a){this._moved=!1;this.client_x=a.targetTouches[0].clientX;this.client_y=a.targetTouches[0].clientY;this.down_x=a.targetTouches[0].pageX;this.down_y=a.targetTouches[0].pageY;a.downX=this.down_x;a.downY=this.down_y;this.onTouchStart(a)},_touchMoveHandler:function(a){this._preventDefault&&
a.preventDefault();this._moved=!0;this.up_x=a.targetTouches[0].pageX;this.cur_x=a.targetTouches[0].pageX-this.down_x;this.cur_y=a.targetTouches[0].pageY-this.down_y;a.curX=this.cur_x;a.curY=this.cur_y;this.onTouchMove(a)},_touchEndHandler:function(a){this._moved?(a.curX=this.cur_x,a.curY=this.cur_y,this.down_x-this.up_x>this._swipeThreshold?a.swipeDirection="left":this.up_x-this.down_x>this._swipeThreshold&&(a.swipeDirection="right")):(a.clientX=this.client_x,a.clientY=this.client_y);this.onTouchEnd(a)},
onTouchStart:function(a){},onTouchMove:function(a){},onTouchEnd:function(a){},onclick:function(a){}});f("extend-esri")&&d.setObject("dijit._TouchBase",b,g);return b});