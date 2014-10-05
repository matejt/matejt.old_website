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
define("esri/toolbars/_VertexMover","dojo/_base/declare dojo/_base/lang dojo/_base/connect dojo/has dojo/sniff dojo/dom-style dojox/gfx/Moveable esri/kernel esri/geometry/Point esri/graphic esri/geometry/webMercatorUtils".split(" "),function(g,m,l,n,p,q,s,t,u,v,r){g=g(null,{declaredClass:"esri.toolbars.VertexMover",constructor:function(a,b,d,e,k,h,f,c){this.point=a;this.symbol=b;this.relatedGraphic=d;this.segIndex=e;this.ptIndex=k;this.segLength=h;this.editor=f;this.map=f.map;this._scratchGL=f.toolbar._scratchGL;
this._placeholder=c||!1;this._type=d.geometry.type;this._init();this._enable()},refresh:function(a){if(a||this._needRefresh())this._disable(),this._enable()},destroy:function(){this._disable();this.graphic&&this._scratchGL.remove(this.graphic);this.point=this.symbol=this.graphic=this.relatedGraphic=this.segIndex=this.ptIndex=this.segLength=this.editor=this.map=this._scratchGL=null},_init:function(){var a=new u(this.point.toJson()),a=new v(a,this.symbol);switch(this._type){case "multipoint":a._shape=
this.relatedGraphic.getDojoShape().children[this.ptIndex];break;case "polyline":case "polygon":this._scratchGL.add(a)}this.graphic=a},_enable:function(){var a=this.graphic.getDojoShape();a&&(a._hasMover=!0,this._moveable=this._getMoveable(a),(a=a.getEventSource())&&q.set(a,"cursor",this.editor.toolbar._cursors[this._placeholder?"move-gv":"move-v"]))},_disable:function(){var a=this._moveable;if(a){l.disconnect(this._startHandle);l.disconnect(this._firstHandle);l.disconnect(this._movingHandle);l.disconnect(this._stopHandle);
var b=a.shape;b&&(b=b.getEventSource())&&q.set(b,"cursor",null);a.destroy();this._moveable=null}},_needRefresh:function(){var a=this.graphic.getDojoShape(),b=!1;if(a)switch(this._type){case "multipoint":var d=this.relatedGraphic.getDojoShape();d&&(d=d.children[this.ptIndex],a!==d&&(this.graphic._shape=d,b=!0));break;case "polyline":case "polygon":b=!a._hasMover}return b},_getMoveable:function(a){a=new s(a,p("mac")&&p("ff")&&!n("esri-touch")&&{leftButtonOnly:!0});this._startHandle=l.connect(a,"onMoveStart",
this,this._moveStartHandler);this._firstHandle=l.connect(a,"onFirstMove",this,this._firstMoveHandler);this._movingHandle=l.connect(a,"onMoving",this,this._movingHandler);this._stopHandle=l.connect(a,"onMoveStop",this,this._moveStopHandler);return a},_getPtIndex:function(){return this.ptIndex+(this._placeholder?1:0)},_getInfo:function(){return{graphic:this.graphic,isGhost:this._placeholder,segmentIndex:this.segIndex,pointIndex:this._getPtIndex()}},_moveStartHandler:function(a){var b=this.map;b.snappingManager&&
b.snappingManager._setUpSnapping();a.shape.moveToFront();this.constructor.onMoveStart(this);this.editor.toolbar.onVertexMoveStart(this.relatedGraphic,this._getInfo())},_firstMoveHandler:function(a){var b=a.shape,d=this._getControlEdges(),e=this._scratchGL._div,k,h=[],f=a.host.shape._wrapOffsets[0]||0;for(k=0;k<d.length;k++){var c=d[k];c.x1+=f;c.x2+=f;h.push([e.createLine({x1:c.x1,y1:c.y1,x2:c.x2,y2:c.y2}).setStroke(this.editor._lineStroke),c.x1,c.y1,c.x2,c.y2])}b._lines=h;a.shape.moveToFront();this.constructor.onFirstMove(this);
this.editor.toolbar.onVertexFirstMove(this.relatedGraphic,this._getInfo())},_movingHandler:function(a){var b=a.shape;a=b.getTransform();for(var d=b._lines,b=0;b<d.length;b++){var e=d[b];e[0].setShape({x1:e[1]+a.dx,y1:e[2]+a.dy,x2:e[3],y2:e[4]})}this.editor.toolbar.onVertexMove(this.relatedGraphic,this._getInfo(),a)},_moveStopHandler:function(a){a=a.shape;var b=this.editor.toolbar,d=a.getTransform(),e=this.map,k=this.graphic,h=b._geo?r.geographicToWebMercator(k.geometry):k.geometry,f,c=a._lines;if(c){for(f=
0;f<c.length;f++)c[f][0].removeShape();a._lines=null}f=!1;var c=!0,l=this._getInfo();d&&(d.dx||d.dy)?this._placeholder&&(this._placeholder=!1,f=!0):c=!1;var g;e.snappingManager&&(g=e.snappingManager._snappingPoint);g=g||e.toMap(e.toScreen(h).offset(d.dx,d.dy));e.snappingManager&&e.snappingManager._killOffSnapping();a.setTransform(null);k.setGeometry(b._geo?r.webMercatorToGeographic(g,!0):g);this.constructor.onMoveStop(this,d);b.onVertexMoveStop(this.relatedGraphic,l,d);if(!c)b.onVertexClick(this.relatedGraphic,
l);if(f)b.onVertexAdd(this.relatedGraphic,this._getInfo())},_getControlEdges:function(){var a=this.map,b=this.relatedGraphic.geometry,d=this.segIndex,e=this.ptIndex,k=this.segLength,h=this._scratchGL._div.getTransform(),f=h.dx,h=h.dy,c=a.toScreen(this.graphic.geometry),a=c.x-f,c=c.y-h,g=[],b=this.editor._getControlPoints(this,b,d,e,k);b[0]&&g.push({x1:a,y1:c,x2:b[0].x-f,y2:b[0].y-h});b[1]&&g.push({x1:a,y1:c,x2:b[1].x-f,y2:b[1].y-h});return g}});n("extend-esri")&&m.setObject("toolbars.VertexMover",
g,t);m.mixin(g,{onMoveStart:function(){},onFirstMove:function(){},onMoveStop:function(){}});return g});