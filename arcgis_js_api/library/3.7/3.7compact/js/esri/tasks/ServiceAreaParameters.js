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
define("esri/tasks/ServiceAreaParameters","dojo/_base/declare dojo/_base/lang dojo/_base/json dojo/has esri/kernel esri/lang esri/graphicsUtils".split(" "),function(b,f,d,g,h,k,e){b=b(null,{declaredClass:"esri.tasks.ServiceAreaParameters",accumulateAttributes:null,attributeParameterValues:null,defaultBreaks:null,doNotLocateOnRestrictedElements:!0,excludeSourcesFromPolygons:null,facilities:null,impedanceAttribute:null,mergeSimilarPolygonRanges:!1,outputGeometryPrecision:null,outputGeometryPrecisionUnits:null,
outputLines:null,outputPolygons:null,outSpatialReference:null,overlapLines:!1,overlapPolygons:!1,pointBarriers:null,polygonBarriers:null,polylineBarriers:null,restrictionAttributes:null,restrictUTurns:null,returnFacilities:!1,returnPointBarriers:!1,returnPolylgonBarriers:!1,returnPolylineBarriers:!1,splitLinesAtBreaks:!1,splitPolygonsAtBreaks:!1,travelDirection:null,trimOuterPolygon:!1,trimPolygonDistance:null,trimPolygonDistanceUnits:null,useHierarchy:null,timeOfDay:null,toJson:function(b){var c=
{returnFacilities:this.returnFacilities,returnBarriers:this.returnPointBarriers,returnPolygonBarriers:this.returnPolygonBarriers,returnPolylineBarriers:this.returnPolylineBarriers,mergeSimilarPolygonRanges:this.mergeSimilarPolygonRanges,overlapLines:this.overlapLines,overlapPolygons:this.overlapPolygons,splitLinesAtBreaks:this.splitLinesAtBreaks,splitPolygonsAtBreaks:this.splitPolygonsAtBreaks,trimOuterPolygon:this.trimOuterPolygon,accumulateAttributeNames:this.accumulateAttributes?this.accumulateAttributes.join(","):
null,attributeParameterValues:this.attributeParameterValues&&d.toJson(this.attributeParameterValues),defaultBreaks:this.defaultBreaks?this.defaultBreaks.join(","):null,excludeSourcesFromPolygons:this.excludeSourcesFromPolygons?this.excludeSourcesFromPolygons.join(","):null,impedanceAttributeName:this.impedanceAttribute,outputGeometryPrecision:this.outputGeometryPrecision,outputGeometryPrecisionUnits:this.outputGeometryPrecisionUnits,outputLines:this.outputLines,outputPolygons:this.outputPolygons,
outSR:this.outSpatialReference?this.outSpatialReference.wkid||d.toJson(this.outSpatialReference.toJson()):null,restrictionAttributeNames:this.restrictionAttributes?this.restrictionAttributes.join(","):null,restrictUTurns:this.restrictUTurns,travelDirection:this.travelDirection,trimPolygonDistance:this.trimPolygonDistance,trimPolygonDistanceUnits:this.trimPolygonDistanceUnits,useHierarchy:this.useHierarchy,timeOfDay:this.timeOfDay&&this.timeOfDay.getTime()},a=this.facilities;"esri.tasks.FeatureSet"===
a.declaredClass&&0<a.features.length?c.facilities=d.toJson({type:"features",features:e._encodeGraphics(a.features,b&&b["facilities.features"]),doNotLocateOnRestrictedElements:this.doNotLocateOnRestrictedElements}):"esri.tasks.DataLayer"===a.declaredClass?c.facilities=a:"esri.tasks.DataFile"===a.declaredClass&&(c.facilities=d.toJson({type:"features",url:a.url,doNotLocateOnRestrictedElements:this.doNotLocateOnRestrictedElements}));a=function(a,c){return!a?null:"esri.tasks.FeatureSet"===a.declaredClass?
0<a.features.length?d.toJson({type:"features",features:e._encodeGraphics(a.features,b&&b[c])}):null:"esri.tasks.DataLayer"===a.declaredClass?a:"esri.tasks.DataFile"===a.declaredClass?d.toJson({type:"features",url:a.url}):d.toJson(a)};this.pointBarriers&&(c.barriers=a(this.pointBarriers,"pointBarriers.features"));this.polygonBarriers&&(c.polygonBarriers=a(this.polygonBarriers,"polygonBarriers.features"));this.polylineBarriers&&(c.polylineBarriers=a(this.polylineBarriers,"polylineBarriers.features"));
return k.filter(c,function(a){if(null!==a)return!0})}});g("extend-esri")&&f.setObject("tasks.ServiceAreaParameters",b,h);return b});