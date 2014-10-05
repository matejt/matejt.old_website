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
require({cache:{"url:esri/dijit/analysis/templates/EnrichLayer.html":'\x3cdiv class\x3d"esriAnalysis"\x3e\r\n    \x3cdiv data-dojo-type\x3d"dijit/layout/ContentPane" style\x3d"margin-top:0.5em; margin-bottom: 0.5em;"\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"_aggregateToolContentTitle" class\x3d"analysisTitle"\x3e\r\n        \x3ctable class\x3d"esriFormTable" \x3e \r\n          \x3ctr\x3e\r\n            \x3ctd class\x3d"esriToolIconTd"\x3e\x3cdiv class\x3d"geoenrichLayerIcon"\x3e\x3c/div\x3e\x3c/td\x3e\r\n            \x3ctd class\x3d"esriAlignLeading"\x3e${i18n.enrichLayer}\x3c/td\x3e\r\n            \x3ctd\x3e\r\n              \x3cdiv class\x3d"esriFloatTrailing" style\x3d"padding:0;"\x3e\r\n                  \x3ca href\x3d"#" class\x3d\'esriFloatLeading helpIcon\' esriHelpTopic\x3d"toolDescription"\x3e\x3c/a\x3e\r\n                  \x3ca href\x3d"#" data-dojo-attach-point\x3d"_closeBtn" title\x3d"${i18n.close}" class\x3d"closeIcon"\x3e              \r\n                  \x3cimg data-dojo-attach-point\x3d"_closeImg" border\x3d"0"/\x3e\x3c/a\x3e            \r\n              \x3c/div\x3e                \r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e\r\n        \x3c/table\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv style\x3d"clear:both; border-bottom: #333 thin solid; height:1px;width:100%;"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv data-dojo-type\x3d"dijit/form/Form" data-dojo-attach-point\x3d"_form" readOnly\x3d"true"\x3e\r\n       \x3ctable class\x3d"esriFormTable"  data-dojo-attach-point\x3d"_aggregateTable"  style\x3d"border-collapse:collapse;border-spacing:5px;" cellpadding\x3d"5px" cellspacing\x3d"5px"\x3e \r\n         \x3ctbody\x3e\r\n          \x3ctr\x3e\r\n            \x3ctd  colspan\x3d"3" class\x3d"sectionHeader" data-dojo-attach-point\x3d"_aggregateToolDescription" \x3e${i18n.enrichDefine}\x3c/td\x3e\r\n          \x3c/tr\x3e      \r\n          \x3ctr\x3e\r\n            \x3ctd colspan\x3d"3" style\x3d"padding-bottom:0;"\x3e\r\n              \x3clabel class\x3d"esriFloatLeading esriTrailingMargin025"\x3e${i18n.oneLabel}\x3c/label\x3e\r\n              \x3clabel class\x3d""\x3e${i18n.chooseDataCollectionLabel}\x3c/label\x3e\r\n              \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"DataCollection"\x3e\x3c/a\x3e\r\n              \x3cselect class\x3d"esriMediumlabel longInput esriLeadingMargin1"  style\x3d"margin-top:0.5em; table-layout:fixed;" data-dojo-type\x3d"dijit/form/Select" data-dojo-props\x3d"maxHeight:100, style:\'maxHeight:100px\'" data-dojo-attach-event\x3d"onChange:_handleCollectionSelectChange" data-dojo-attach-point\x3d"_collectionSelect"\x3e\x3c/select\x3e\r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e\r\n          \x3ctr\x3e\r\n            \x3ctd colspan\x3d"3" style\x3d"padding-top:0;"\x3e\r\n              \x3cselect multiple\x3d"true"  class\x3d"esriLeadingMargin1 longInput"  style\x3d"margin-top:10px;" data-dojo-type\x3d"dojox/form/CheckedMultiSelect" data-dojo-props\x3d"required:true"   data-dojo-attach-point\x3d"_dataSelect"\x3e\x3c/select\x3e\r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e\r\n          \r\n          \x3ctr\x3e\r\n            \x3ctd colspan\x3d"3" class\x3d"clear"\x3e\x3c/td\x3e\r\n          \x3c/tr\x3e\r\n            \r\n          \x3ctr\x3e\r\n            \x3ctd colspan\x3d"2"\x3e\r\n              \x3clabel data-dojo-attach-point\x3d"_labelOne" class\x3d"esriFloatLeading esriTrailingMargin025 "\x3e${i18n.twoLabel}\x3c/label\x3e\r\n              \x3clabel data-dojo-attach-point\x3d"_measurelabel" class\x3d""\x3e${i18n.defAreasLabel}\x3c/label\x3e\r\n            \x3c/td\x3e\r\n            \x3ctd class\x3d"shortTextInput"\x3e\r\n              \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' data-dojo-attach-point\x3d"_analysisFieldHelpLink" esriHelpTopic\x3d"BufferOption"\x3e\x3c/a\x3e\r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e\r\n          \x3ctr\x3e\r\n            \x3ctd style\x3d"padding:0.25em;width:34%"\x3e\r\n              \x3cdiv class\x3d"esriLeadingMargin1 bufferSelector selected" data-dojo-attach-point\x3d"_straightLine" \x3e\r\n                \x3cdiv data-dojo-attach-point\x3d"_straighLineIcon" class\x3d"bufferIcon esriStraightLineDistanceIcon"\x3e\x3c/div\x3e\r\n                \x3cdiv\x3e\x3clabel data-dojo-attach-point\x3d"_straightLineLabel" class\x3d"esriFloatLeading esriTrailingMargin1 esriSelectLabel"\x3e${i18n.straightLineDistance}\x3c/label\x3e\x3c/div\x3e\r\n              \x3c/div\x3e\r\n            \x3c/td\x3e\r\n            \x3ctd style\x3d"esriTrailingMargin2 padding:0.25em;width:33%"\x3e\r\n              \x3cdiv class\x3d"bufferSelector" data-dojo-attach-point\x3d"_drivingTime" \x3e\r\n                \x3cdiv data-dojo-attach-point\x3d"_drivingTimeIcon" class\x3d"bufferIcon esriDrivingTimeIcon"\x3e\x3c/div\x3e\r\n                \x3cdiv\x3e\x3clabel data-dojo-attach-point\x3d"_drivingTimeLabel" class\x3d"esriFloatLeading esriSelectLabel"\x3e${i18n.drivingTime}\x3c/label\x3e\x3c/div\x3e\r\n              \x3c/div\x3e\r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e\r\n          \x3ctr\x3e\r\n            \x3ctd style\x3d"padding-right:0;padding-bottom:0;width:20%;"\x3e\r\n              \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/ValidationTextBox" data-dojo-attach-event\x3d"onChange:_handleDistUnitsChange" data-dojo-props\x3d"intermediateChanges:true,value:\'1\',required:true,missingMessage:\'${i18n.distanceMsg}\'" data-dojo-attach-point\x3d"_distanceInput" class\x3d"esriLeadingMargin1"  style\x3d"width:75%;"\x3e\r\n            \x3c/td\x3e\r\n            \x3ctd colspan\x3d"2" style\x3d"padding-left:0.25em;padding-bottom:0;width:60%;"\x3e\r\n              \x3cselect class\x3d"mediumInput esriAnalysisSelect" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-event\x3d"onChange:_handleDistUnitsChange" data-dojo-attach-point\x3d"_distanceUnitsSelect" style\x3d"width:85%;table-layout:fixed;"\x3e\r\n                \x3coption value\x3d"Seconds"\x3e${i18n.seconds}\x3c/option\x3e\r\n                \x3coption value\x3d"Minutes" selected\x3d"selected"\x3e${i18n.minutes}\x3c/option\x3e\r\n                \x3coption value\x3d"Hours"\x3e${i18n.hours}\x3c/option\x3e\r\n              \x3c/select\x3e\r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e\r\n          \x3ctr data-dojo-attach-point\x3d"_useTrafficRow"\x3e\r\n            \x3ctd style\x3d"padding:0" colspan\x3d"3"\x3e\r\n              \x3cdiv style\x3d"width:100%;" data-dojo-type\x3d"esri/dijit/analysis/TrafficTime" data-dojo-attach-point\x3d"_trafficTimeWidget"\x3e\x3c/div\x3e\r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e \r\n          \x3ctr\x3e\r\n            \x3ctd colspan\x3d"3" class\x3d"clear"\x3e\x3c/td\x3e\r\n          \x3c/tr\x3e\r\n          \x3ctr\x3e\r\n            \x3ctd colspan\x3d"2"\x3e\r\n              \x3clabel class\x3d"esriFloatLeading esriTrailingMargin025"\x3e${i18n.threeLabel}\x3c/label\x3e\r\n              \x3clabel class\x3d"longTextInput"\x3e${i18n.outputLayerLabel}\x3c/label\x3e\r\n            \x3c/td\x3e\r\n            \x3ctd class\x3d"shortTextInput"\x3e\r\n              \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"OutputName"\x3e\x3c/a\x3e \r\n            \x3c/td\x3e             \r\n          \x3c/tr\x3e\r\n          \x3ctr\x3e\r\n            \x3ctd colspan\x3d"3"\x3e\r\n              \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/ValidationTextBox" class\x3d"esriLeadingMargin1 esriOutputText"  data-dojo-props\x3d"required:true" data-dojo-attach-point\x3d"_outputLayerInput" value\x3d""\x3e\x3c/input\x3e\r\n            \x3c/td\x3e                \r\n          \x3c/tr\x3e \r\n          \x3ctr\x3e\r\n            \x3ctd colspan\x3d"3"\x3e\r\n               \x3cdiv class\x3d"esriLeadingMargin1" data-dojo-attach-point\x3d"_chooseFolderRow"\x3e\r\n                 \x3clabel style\x3d"width:9px;font-size:smaller;"\x3e${i18n.saveResultIn}\x3c/label\x3e\r\n                 \x3cinput class\x3d"longInput esriFolderSelect" dojoAttachPoint\x3d"_webMapFolderSelect" dojotype\x3d"dijit/form/ComboBox" trim\x3d"true"\x3e\x3c/input\x3e\r\n               \x3c/div\x3e              \r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e                                      \r\n        \x3c/tbody\x3e         \r\n       \x3c/table\x3e\r\n     \x3c/div\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"_aggregateToolContentButtons" style\x3d"padding:5px;margin-top:5px;border-top:solid 1px #BBB;"\x3e\r\n      \x3cdiv style\x3d"width:100%;padding:0.5em 0 0.5em 0"\x3e\r\n        \x3ca class\x3d"esriFloatTrailing esriSmallFont"  href\x3d"#" data-dojo-attach-point\x3d"_showCreditsLink" data-dojo-attach-event\x3d"onclick:_handleShowCreditsClick"\x3e${i18n.showCredits}\x3c/a\x3e\r\n       \x3clabel data-dojo-attach-point\x3d"_chooseExtentDiv"class\x3d"esriSelectLabel" style\x3d"font-size:smaller;"\x3e\r\n         \x3cinput type\x3d"radio" data-dojo-attach-point\x3d"_useExtentCheck" data-dojo-type\x3d"dijit/form/CheckBox" data-dojo-props\x3d"checked:true" name\x3d"extent" value\x3d"true"/\x3e\r\n           ${i18n.useMapExtent}\r\n       \x3c/label\x3e\r\n      \x3c/div\x3e\r\n      \x3cbutton data-dojo-type\x3d"dijit/form/Button" type\x3d"submit" data-dojo-attach-point\x3d"_saveBtn" class\x3d"esriLeadingMargin4" data-dojo-attach-event\x3d"onClick:_handleSaveBtnClick"\x3e\r\n          ${i18n.runAnalysis}\r\n      \x3c/button\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv data-dojo-type\x3d"dijit/Dialog" title\x3d"${i18n.creditTitle}" data-dojo-attach-point\x3d"_usageDialog" style\x3d"width:40em;"\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/analysis/CreditEstimator"  data-dojo-attach-point\x3d"_usageForm"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e    \r\n\x3c/div\x3e\r\n'}});
define("esri/dijit/analysis/EnrichLayer","require dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/connect dojo/_base/json dojo/has dojo/i18n dojo/json dojo/string dojo/dom-style dojo/dom-attr dojo/dom-construct dojo/query dojo/dom-class dojo/number dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dijit/_OnDijitClickMixin dijit/_FocusMixin dijit/registry dijit/form/Button dijit/form/CheckBox dijit/form/Form dijit/form/Select dijit/form/TextBox dijit/form/ValidationTextBox dijit/layout/ContentPane dijit/form/ComboBox dojox/form/CheckedMultiSelect esri/kernel esri/dijit/analysis/AnalysisBase esri/dijit/analysis/CreditEstimator esri/dijit/analysis/utils esri/dijit/analysis/TrafficTime dojo/text!esri/dijit/analysis/templates/EnrichLayer.html".split(" "),
function(h,r,d,l,k,e,s,m,B,f,g,p,C,D,c,q,t,u,v,w,x,E,F,G,H,I,J,K,L,M,N,y,z,O,n,P,A){h=r([t,u,v,w,x,z],{declaredClass:"esri.dijit.analysis.SummarizeNearby",templateString:A,basePath:h.toUrl("esri/dijit/analysis"),widgetsInTemplate:!0,inputLayer:null,outputLayerName:null,distance:null,showSelectFolder:!1,showChooseExtent:!0,showTrafficWidget:!1,_isBufferSelectionEnabled:!0,showHelp:!0,showCredits:!0,returnFeatureCollection:!1,i18n:null,toolName:"EnrichLayer",helpFileName:"EnrichLayer",resultParameter:"enrichedLayer",
constructor:function(a){this._pbConnects=[];this._statsRows=[];this._isLineEnabled=!1;a.containerNode&&(this.container=a.containerNode)},destroy:function(){this.inherited(arguments);l.forEach(this._pbConnects,k.disconnect);delete this._pbConnects},postMixInProperties:function(){this.inherited(arguments);d.mixin(this.i18n,m.getLocalization("esri","jsapi").bufferTool);d.mixin(this.i18n,m.getLocalization("esri","jsapi").driveTimes);d.mixin(this.i18n,m.getLocalization("esri","jsapi").enrichLayerTool)},
postCreate:function(){this.inherited(arguments);c.add(this._form.domNode,"esriSimpleForm");p.set(this._closeImg,"src",this.basePath+"/images/close.gif");g.set(this._dataSelect.selectNode,"width","90%");this._distanceInput.set("validator",d.hitch(this,this.validateDistance));this._outputLayerInput.set("validator",d.hitch(this,this.validateServiceName));this._buildUI()},startup:function(){},_onClose:function(a){a&&(this._save(),this.emit("save",{save:!0}));this.emit("close",{save:!1})},_handleShowCreditsClick:function(a){a.preventDefault();
if(this._form.validate()){a={};a.inputLayer=e.toJson(n.constructAnalysisInputLyrObj(this.inputLayer));if(this._isBufferSelectionEnabled||this._isLineEnabled)a.bufferType=this.get("bufferType"),a.distance=this.get("distance"),a.units=this._distanceUnitsSelect.get("value");this.get("country")&&(a.country=this.get("country"));a.dataCollections=this.get("dataCollections");this.get("showTrafficWidget")&&this._trafficTimeWidget.get("checked")&&(a.TimeOfDay=this._trafficTimeWidget.get("timeOfDay"));this.returnFeatureCollection||
(a.OutputName=e.toJson({serviceProperties:{name:this._outputLayerInput.get("value")}}));this.showChooseExtent&&this._useExtentCheck.get("checked")&&(a.context=e.toJson({extent:this.map.extent}));this.getCreditsEstimate(this.toolName,a).then(d.hitch(this,function(a){this._usageForm.set("content",a);this._usageDialog.show()}))}},_handleSaveBtnClick:function(){if(this._form.validate()){this._saveBtn.set("disabled",!0);var a={},b={},c;a.inputLayer=e.toJson(n.constructAnalysisInputLyrObj(this.inputLayer));
if(this._isBufferSelectionEnabled||this._isLineEnabled)a.bufferType=this.get("bufferType"),a.distance=this.get("distance"),a.units=this._distanceUnitsSelect.get("value");this.get("country")&&(a.country=this.get("country"));a.dataCollections=this.get("dataCollections");this.get("showTrafficWidget")&&this._trafficTimeWidget.get("checked")&&(a.TimeOfDay=this._trafficTimeWidget.get("timeOfDay"));this.returnFeatureCollection||(a.OutputName=e.toJson({serviceProperties:{name:this._outputLayerInput.get("value")}}));
this.showChooseExtent&&this._useExtentCheck.get("checked")&&(a.context=e.toJson({extent:this.map.extent}));this.returnFeatureCollection&&(c={outSR:this.map.spatialReference},this.showChooseExtent&&(c.extent=this.map.extent),a.context=e.toJson(c));b.jobParams=a;this._saveBtn.set("disabled",!1);b.itemParams={description:f.substitute(this.i18n.itemDescription,{inputLayerName:this.inputLayer.name}),tags:f.substitute(this.i18n.itemTags,{inputLayerName:this.inputLayer.name}),snippet:this.i18n.itemSnippet};
this.showSelectFolder&&(b.itemParams.folder=this._webMapFolderSelect.item?this.folderStore.getValue(this._webMapFolderSelect.item,"id"):"");this.execute(b)}},_handleDistUnitsChange:function(a){this.set("outputLayerName")},_handleDistanceTypeChange:function(a){this.set("bufferType",a);c.remove(this._straightLine,"selected");c.remove(this._drivingTime,"selected");a&&(c.add("time"===a?this._drivingTime:this._straightLine,"selected"),this.get("showTrafficWidget")&&(g.set(this._useTrafficRow,"display",
"time"===a?"":"none"),this._trafficTimeWidget.set("disabled","time"!==a),this._trafficTimeWidget.set("reset","time"!==a)));"time"===a?(this._distanceUnitsSelect.removeOption(this._distanceUnitsSelect.getOptions()),this._distanceUnitsSelect.addOption([{value:"Seconds",label:this.i18n.seconds},{value:"Minutes",label:this.i18n.minutes,selected:"selected"},{value:"Hours",label:this.i18n.hours}])):(this._distanceUnitsSelect.removeOption(this._distanceUnitsSelect.getOptions()),this._distanceUnitsSelect.addOption([{value:"Miles",
label:this.i18n.miles},{value:"Yards",label:this.i18n.yards},{value:"Feet",label:this.i18n.feet},{type:"separator"},{value:"Kilometers",label:this.i18n.kilometers},{value:"Meters",label:this.i18n.meters}]));this.set("outputLayerName")},_save:function(){},_buildUI:function(){this.signInPromise.then(d.hitch(this,n.initHelpLinks,this.domNode,this.showHelp,{analysisGpServer:this.analysisGpServer}));this._collectionSelect.addOption([{value:"-1",label:this.i18n.selectCountryLabel},{value:"GLOBAL",label:this.i18n.globalCode},
{value:"AT",label:this.i18n.austriaCountryCode},{value:"CA",label:this.i18n.canadaCountryCode},{value:"BR",label:this.i18n.brazilCountryCode},{value:"BE",label:this.i18n.belgiumCountryCode},{value:"DK",label:this.i18n.denmarkCountryCode},{value:"FI",label:this.i18n.finlandCountryCode},{value:"FR",label:this.i18n.franceCountryCode},{value:"DE",label:this.i18n.germanyCountryCode},{value:"GR",label:this.i18n.greeceCountryCode},{value:"IN",label:this.i18n.indiaCountryCode},{value:"IE",label:this.i18n.irelandCountryCode},
{value:"IT",label:this.i18n.italyCountryCode},{value:"JP",label:this.i18n.japanCountryCode},{value:"LI",label:this.i18n.liechtensteinCountryCode},{value:"LU",label:this.i18n.luxembourgCountryCode},{value:"NL",label:this.i18n.netherlandsCountryCode},{value:"NO",label:this.i18n.norwayCountryCode},{value:"PT",label:this.i18n.portugalCountryCode},{value:"RU",label:this.i18n.russiaCountryCode},{value:"ES",label:this.i18n.spainCountryCode},{value:"SE",label:this.i18n.swedenCountryCode},{value:"CH",label:this.i18n.switzerlandCountryCode},
{value:"TR",label:this.i18n.turkeyCountryCode},{value:"GB",label:this.i18n.ukCountryCode},{value:"US",label:this.i18n.usCountryCode}]);this._buildDataSelectUI();this.inputLayer&&(p.set(this._aggregateToolDescription,"innerHTML",f.substitute(this.i18n.enrichDefine,{inputLayerName:this.inputLayer.name})),"esriGeometryPolygon"===this.inputLayer.geometryType&&(this._isBufferSelectionEnabled=!1,c.add(this._straightLine,"disabled"),c.remove(this._straightLine,"selected"),c.add(this._drivingTime,"disabled"),
c.add(this._straightLineLabel,"disabled"),c.remove(this._drivingTimeLabel,"esriSelectLabel"),c.add(this._distanceInput,"disabled"),this._distanceInput.set("disabled",!0),c.add(this._distanceUnitsSelect,"disabled"),this._distanceUnitsSelect.set("disabled",!0),c.remove(this._straighLineIcon,"esriStraightLineDistanceIcon"),c.add(this._straighLineIcon,"esriStraightLineDistanceDisabledIcon"),c.remove(this._drivingTimeIcon,"esriDrivingTimeIcon"),c.add(this._drivingTimeIcon,"esriDrivingTimeDisabledIcon")),
"esriGeometryPolyline"===this.inputLayer.geometryType&&(c.add(this._drivingTime,"disabled"),c.remove(this._drivingTimeLabel,"esriSelectLabel"),c.remove(this._drivingTimeIcon,"esriDrivingTimeIcon"),c.add(this._drivingTimeIcon,"esriDrivingTimeDisabledIcon"),this._isLineEnabled=!0,this._isBufferSelectionEnabled=!1),this._outputLayerInput.set("value",f.substitute(this.i18n.outputLayerName,{layername:this.inputLayer.name})));this._loadConnections();(this._isBufferSelectionEnabled||this._isLineEnabled)&&
this._handleDistanceTypeChange("line");g.set(this._useTrafficRow,"display",this.get("showTrafficWidget")?"":"none");this.outputLayerName&&this._outputLayerInput.set("value",this.outputLayerName);g.set(this._chooseFolderRow,"display",!0===this.showSelectFolder?"block":"none");this.showSelectFolder&&this.getFolderStore().then(d.hitch(this,function(a){this.folderStore=a;this._webMapFolderSelect.set("store",a);this._webMapFolderSelect.set("value",this.portalUser.username)}));this.outputLayerName&&this._outputLayerInput.set("value",
this.outputLayerName);g.set(this._chooseExtentDiv,"display",!0===this.showChooseExtent?"block":"none")},validateDistance:function(){var a=this,b,e=[];c.contains(this._drivingTime,"selected");this.set("distance");b=d.trim(this._distanceInput.get("value"));if(!b)return!1;b=q.parse(b);if(isNaN(b))return e.push(0),!1;b=q.format(b,{locale:"en-us"});(b=d.trim(b).match(/\D/g))&&l.forEach(b,function(b){"."===b||","===b?e.push(1):"-"===b&&"polygon"===a.inputType?e.push(1):e.push(0)});return-1!==l.indexOf(e,
0)?!1:!0},_loadConnections:function(){this.on("start",d.hitch(this,"_onClose",!1));this._connect(this._closeBtn,"onclick",d.hitch(this,"_onClose",!1));this._isBufferSelectionEnabled&&(k.connect(this._drivingTime,"onclick",d.hitch(this,"_handleDistanceTypeChange","time")),k.connect(this._straightLine,"onclick",d.hitch(this,"_handleDistanceTypeChange","line")))},_handleCollectionSelectChange:function(){this._buildDataSelectUI()},_buildDataSelectUI:function(){var a=this._collectionSelect.get("value"),
b=[];this._dataSelect.removeOption(this._dataSelect.getOptions());"-1"!==a&&("US"===a?b=[{value:"Age",label:this.i18n.age},{value:"HouseholdsByIncome",label:this.i18n.householdsByIncome},{value:"HUsByOccupancy",label:this.i18n.husByOccupancy},{value:"KeyGlobalFacts",label:this.i18n.keyGlobalFacts},{value:"KeyUSFacts",label:this.i18n.keyUSFacts},{value:"Policy",label:this.i18n.policy},{value:"RaceAndEthnicity",label:this.i18n.raceAndEthnicity},{value:"Tapestry",label:this.i18n.tapestry},{value:"Wealth",
label:this.i18n.wealth},{value:"Infrastructure",label:this.i18n.infrastructure},{value:"LandCover",label:this.i18n.landCover},{value:"LandscapeFacts",label:this.i18n.landscapeFacts},{value:"PublicLands",label:this.i18n.publicLands},{value:"Soils",label:this.i18n.soils},{value:"WaterWetlands",label:this.i18n.waterWetlands}]:"CA"===a?b=[{value:"Age",label:this.i18n.age},{value:"HouseholdsByIncome",label:this.i18n.householdsByIncome},{value:"HUsByOccupancy",label:this.i18n.husByOccupancy},{value:"keyCanFacts",
label:this.i18n.keyCanFacts},{value:"KeyGlobalFacts",label:this.i18n.keyGlobalFacts},{value:"Policy",label:this.i18n.policy},{value:"RaceAndEthnicity",label:this.i18n.raceAndEthnicity},{value:"Wealth",label:this.i18n.wealth}]:"AT"===a?b=[{value:"ATFacts",label:this.i18n.aTFacts},{value:"ATSpend",label:this.i18n.aTSpend},{value:"KeyGlobalFacts",label:this.i18n.keyGlobalFacts},{value:"keyWEFacts",label:this.i18n.keyWEFacts}]:"BE"===a?b=[{value:"BEFacts",label:this.i18n.bEFacts},{value:"BESpend",label:this.i18n.bESpend},
{value:"KeyGlobalFacts",label:this.i18n.keyGlobalFacts},{value:"keyWEFacts",label:this.i18n.keyWEFacts}]:"BR"===a?b=[{value:"BRFacts",label:this.i18n.bRFacts},{value:"BRSpend",label:this.i18n.bRSpend},{value:"KeyGlobalFacts",label:this.i18n.keyGlobalFacts}]:"DK"===a?b=[{value:"DKFacts",label:this.i18n.dKFacts},{value:"DKSpend",label:this.i18n.dKSpend},{value:"KeyGlobalFacts",label:this.i18n.keyGlobalFacts},{value:"keyWEFacts",label:this.i18n.keyWEFacts}]:"FR"===a?b=[{value:"FRFacts",label:this.i18n.fRFacts},
{value:"FRSpend",label:this.i18n.fRSpend},{value:"KeyGlobalFacts",label:this.i18n.keyGlobalFacts},{value:"keyWEFacts",label:this.i18n.keyWEFacts}]:"FI"===a?b=[{value:"FIFacts",label:this.i18n.fIFacts},{value:"FISpend",label:this.i18n.fISpend},{value:"KeyGlobalFacts",label:this.i18n.keyGlobalFacts},{value:"keyWEFacts",label:this.i18n.keyWEFacts}]:"DE"===a?b=[{value:"DEFacts",label:this.i18n.dEFacts},{value:"DESpend",label:this.i18n.dESpend},{value:"KeyGlobalFacts",label:this.i18n.keyGlobalFacts},{value:"keyWEFacts",
label:this.i18n.keyWEFacts}]:"GR"===a?b=[{value:"GRFacts",label:this.i18n.gRFacts},{value:"GRSpend",label:this.i18n.gRSpend},{value:"KeyGlobalFacts",label:this.i18n.keyGlobalFacts},{value:"keyWEFacts",label:this.i18n.keyWEFacts}]:"IN"===a?b=[{value:"INFacts",label:this.i18n.iNFacts},{value:"INSpend",label:this.i18n.iNSpend},{value:"KeyGlobalFacts",label:this.i18n.keyGlobalFacts}]:"IE"===a?b=[{value:"IEFacts",label:this.i18n.iEFacts},{value:"IESpend",label:this.i18n.iESpend},{value:"KeyGlobalFacts",
label:this.i18n.keyGlobalFacts},{value:"keyWEFacts",label:this.i18n.keyWEFacts}]:"IT"===a?b=[{value:"ITFacts",label:this.i18n.iTFacts},{value:"ITSpend",label:this.i18n.iTSpend},{value:"KeyGlobalFacts",label:this.i18n.keyGlobalFacts},{value:"keyWEFacts",label:this.i18n.keyWEFacts}]:"JP"===a?b=[{value:"JPFacts",label:this.i18n.jPFacts},{value:"JPSpend",label:this.i18n.jPSpend},{value:"KeyGlobalFacts",label:this.i18n.keyGlobalFacts}]:"LI"===a?b=[{value:"LIFacts",label:this.i18n.lIFacts},{value:"LISpend",
label:this.i18n.lISpend},{value:"KeyGlobalFacts",label:this.i18n.keyGlobalFacts},{value:"keyWEFacts",label:this.i18n.keyWEFacts}]:"LU"===a?b=[{value:"LUFacts",label:this.i18n.lUFacts},{value:"LUSpend",label:this.i18n.lUSpend},{value:"KeyGlobalFacts",label:this.i18n.keyGlobalFacts},{value:"keyWEFacts",label:this.i18n.keyWEFacts}]:"NL"===a?b=[{value:"NLFacts",label:this.i18n.nLFacts},{value:"NLSpend",label:this.i18n.nLSpend},{value:"KeyGlobalFacts",label:this.i18n.keyGlobalFacts},{value:"keyWEFacts",
label:this.i18n.keyWEFacts}]:"NO"===a?b=[{value:"NOFacts",label:this.i18n.nOFacts},{value:"NOSpend",label:this.i18n.nOSpend},{value:"KeyGlobalFacts",label:this.i18n.keyGlobalFacts},{value:"keyWEFacts",label:this.i18n.keyWEFacts}]:"PT"===a?b=[{value:"PTFacts",label:this.i18n.pTFacts},{value:"PTSpend",label:this.i18n.pTSpend},{value:"KeyGlobalFacts",label:this.i18n.keyGlobalFacts},{value:"keyWEFacts",label:this.i18n.keyWEFacts}]:"RU"===a?b=[{value:"RUFacts",label:this.i18n.rUFacts},{value:"RUSpend",
label:this.i18n.rUSpend},{value:"KeyGlobalFacts",label:this.i18n.keyGlobalFacts}]:"ES"===a?b=[{value:"ESFacts",label:this.i18n.eSFacts},{value:"ESSpend",label:this.i18n.eSSpend},{value:"KeyGlobalFacts",label:this.i18n.keyGlobalFacts},{value:"keyWEFacts",label:this.i18n.keyWEFacts}]:"SE"===a?b=[{value:"SEFacts",label:this.i18n.sEFacts},{value:"SESpend",label:this.i18n.sESpend},{value:"KeyGlobalFacts",label:this.i18n.keyGlobalFacts},{value:"keyWEFacts",label:this.i18n.keyWEFacts}]:"CH"===a?b=[{value:"CHFacts",
label:this.i18n.cHFacts},{value:"CHSpend",label:this.i18n.cHSpend},{value:"KeyGlobalFacts",label:this.i18n.keyGlobalFacts},{value:"keyWEFacts",label:this.i18n.keyWEFacts}]:"TR"===a?b=[{value:"TRFacts",label:this.i18n.tRFacts},{value:"TRSpend",label:this.i18n.tRSpend},{value:"KeyGlobalFacts",label:this.i18n.keyGlobalFacts},{value:"keyWEFacts",label:this.i18n.keyWEFacts}]:"GB"===a?b=[{value:"GBFacts",label:this.i18n.gBFacts},{value:"GBSpend",label:this.i18n.gBSpend},{value:"KeyGlobalFacts",label:this.i18n.keyGlobalFacts},
{value:"keyWEFacts",label:this.i18n.keyWEFacts}]:"GLOBAL"===a&&this._dataSelect.addOption([{value:"KeyGlobalFacts",label:this.i18n.keyGlobalFacts},{value:"keyWEFacts",label:this.i18n.keyWEFacts}]),this._dataSelect.addOption(b),this._dataSelect.set("value",this._dataSelect.getOptions(0)))},_setAnalysisGpServerAttr:function(a){a&&(this.analysisGpServer=a,this.set("toolServiceUrl",this.analysisGpServer+"/"+this.toolName))},_setInputLayerAttr:function(a){this.inputLayer=a},_setDisableRunAnalysisAttr:function(a){this._saveBtn.set("disabled",
a)},_setShowSelectFolderAttr:function(a){this.showSelectFolder=a},_getShowSelectFolderAttr:function(){return this.showSelectFolder},_setShowChooseExtentAttr:function(a){this.showChooseExtent=a},_getShowChooseExtentAttr:function(){return this.showChooseExtent},_setMapAttr:function(a){this.map=a},_getMapAttr:function(){return this.map},_setShowHelpAttr:function(a){this.showHelp=a},_getShowHelpAttr:function(){return this.showHelp},_setShowTrafficWidgetAttr:function(a){this.showTrafficWidget=a},_getShowTrafficWidgetAttr:function(){return this.showTrafficWidget},
_setBufferTypeAttr:function(a){"line"===a?this.bufferType="StraightLine":"time"===a&&(this.bufferType="DrivingTime")},_getBufferTypeAttr:function(){return this.bufferType},_setDistanceAttr:function(a){a&&(this.distance=a)},_setShowCreditsAttr:function(a){this.showCredits=a},_getShowCreditsAttr:function(){return this.showCredits},_getDistanceAttr:function(){return this.distance=this._distanceInput.get("value")},_setCountryAttr:function(a){this.country=a},_getCountryAttr:function(){this.country=this._collectionSelect.get("value");
return"-1"===this.country||"GLOBAL"===this.country?!1:this.country},_setReturnFeatureCollectionAttr:function(a){this.returnFeatureCollection=a},_getReturnFeatureCollectionAttr:function(){return this.returnFeatureCollection},_setDataCollectionsAttr:function(a){this.dataCollections=a},_getDataCollectionsAttr:function(){return"-1"===this._collectionSelect.get("value")?[]:this.dataCollections=this._dataSelect.get("value")},validateServiceName:function(a){var b=/(:|&|<|>|%|#|\?|\\|\"|\/|\+)/.test(a);return 0===
a.length||0===f.trim(a).length?(this._outputLayerInput.set("invalidMessage",this.i18n.requiredValue),!1):b?(this._outputLayerInput.set("invalidMessage",this.i18n.invalidServiceName),!1):98<a.length?(this._outputLayerInput.set("invalidMessage",this.i18n.invalidServiceNameLength),!1):!0},_connect:function(a,b,c){this._pbConnects.push(k.connect(a,b,c))},onSave:function(){},onClose:function(){}});s("extend-esri")&&d.setObject("dijit.analysis.EnrichLayer",h,y);return h});