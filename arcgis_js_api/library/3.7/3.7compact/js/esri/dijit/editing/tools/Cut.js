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
define("esri/dijit/editing/tools/Cut","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/connect dojo/has dojo/DeferredList esri/graphicsUtils esri/graphic esri/tasks/query esri/layers/FeatureLayer esri/toolbars/draw esri/dijit/editing/Cut esri/dijit/editing/tools/ToggleToolBase esri/kernel".split(" "),function(g,e,b,f,n,p,q,l,r,s,t,u,v,w){g=g([v],{declaredClass:"esri.dijit.editing.tools.Cut",id:"btnFeatureCut",_enabledIcon:"toolbarIcon cutIcon",_disabledIcon:"toolbarIcon cutIcon",_drawType:t.POLYLINE,
_enabled:!0,_label:"NLS_cutLbl",_cutConnects:[],activate:function(){this._cutConnects.push(f.connect(this._toolbar,"onDrawEnd",this,"_onDrawEnd"));this.inherited(arguments)},deactivate:function(){this.inherited(arguments);b.forEach(this._cutConnects,f.disconnect);this._cutConnects=[];this._edits=[]},_onDrawEnd:function(h){var d=this._cutLayers=b.filter(this._settings.layers,function(a){return"esriGeometryPolygon"===a.geometryType||"esriGeometryPolyline"===a.geometryType&&a.visible&&a._isMapAtVisibleScale()});
this._cutConnects=this._cutConnects.concat(b.map(d,e.hitch(this,function(a){return f.connect(a,"onEditsComplete",e.hitch(this,function(a,c,d){if(this._settings.undoRedoManager){var h=this._settings.undoRedoManager;b.forEach(this._edits,e.hitch(this,function(a){h.add(new u({featureLayer:a.layer,addedGraphics:a.adds,preUpdatedGraphics:a.preUpdates,postUpdatedGraphics:a.updates}))}),this)}this.onFinished()}))})));var c=new r;c.geometry=h;b.forEach(d,function(a,d){this._settings.editor._selectionHelper.selectFeatures([a],
c,s.SELECTION_NEW,e.hitch(this,"_cutFeatures",a,c))},this)},_cutFeatures:function(b,d,c){if(c&&c.length){this._edits=[];var a=[];a.push(this._settings.geometryService.cut(q.getGeometries(c),d.geometry,e.hitch(this,"_cutHandler",b,c)));(new p(a)).addCallback(e.hitch(this,function(){this.onApplyEdits(this._edits)}))}},_cutHandler:function(h,d,c){var a=[],g=[],f=b.map(d,function(a){return new l(e.clone(a.toJson()))}),m,k;b.forEach(c.cutIndexes,function(b,f){m!=b?(m=b,g.push(d[b].setGeometry(c.geometries[f]))):
(k=new l(c.geometries[f],null,e.mixin({},d[b].attributes),null),k.attributes[d[0].getLayer().objectIdField]=null,a.push(k))},this);this._edits.push({layer:h,adds:a,updates:g,preUpdates:f})}});n("extend-esri")&&e.setObject("dijit.editing.tools.Cut",g,w);return g});