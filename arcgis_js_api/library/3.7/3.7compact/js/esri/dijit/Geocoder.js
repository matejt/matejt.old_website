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
require({cache:{"url:esri/dijit/templates/Geocoder.html":'\x3cdiv class\x3d"${theme}" role\x3d"presentation"\x3e\r\n    \x3cdiv class\x3d"${_GeocoderContainerClass}" role\x3d"presentation"\x3e\r\n    \t\x3cdiv class\x3d"${_GeocoderClass}" data-dojo-attach-point\x3d"containerNode" role\x3d"presentation"\x3e\r\n    \t\t\x3cdiv title\x3d"${_i18n.widgets.Geocoder.main.searchButtonTitle}" tabindex\x3d"0" class\x3d"${_searchButtonClass} ${_GeocoderIconClass}" data-dojo-attach-point\x3d"submitNode" data-dojo-attach-event\x3d"ondijitclick:_findThenSelect" role\x3d"button"\x3e\x3c/div\x3e\r\n    \t\t\x3cdiv aria-haspopup\x3d"true" id\x3d"${id}_menu_button" title\x3d"${_i18n.widgets.Geocoder.main.geocoderMenuButtonTitle}" tabindex\x3d"0" class\x3d"${_geocoderMenuArrowClass} ${_GeocoderIconClass}" data-dojo-attach-point\x3d"geocoderMenuArrowNode" role\x3d"button" aria-expanded\x3d"false" data-dojo-attach-event\x3d"ondijitclick:_toggleGeolocatorMenu"\x3e\x3c/div\x3e\r\n    \t\t\x3cinput aria-haspopup\x3d"true" id\x3d"${id}_input" tabindex\x3d"0" placeholder\x3d"" value\x3d"${value}" autocomplete\x3d"off" type\x3d"text" data-dojo-attach-point\x3d"inputNode" data-dojo-attach-event\x3d"ondijitclick:_inputClick" role\x3d"textbox"\x3e\r\n    \t\t\x3cdiv tabindex\x3d"0" class\x3d"${_clearButtonClass} ${_GeocoderIconClass}" data-dojo-attach-point\x3d"clearNode" data-dojo-attach-event\x3d"ondijitclick:clear" role\x3d"button"\x3e\x3c/div\x3e\r\n    \t\t\x3cdiv class\x3d"${_GeocoderClearClass}" role\x3d"presentation"\x3e\x3c/div\x3e\r\n    \t\x3c/div\x3e\r\n    \t\x3cdiv class\x3d"${_resultsContainerClass}" data-dojo-attach-point\x3d"resultsNode" aria-labelledby\x3d"${id}_input" role\x3d"menu" aria-hidden\x3d"true"\x3e\x3c/div\x3e\r\n    \t\x3cdiv class\x3d"${_geocoderMenuClass}" data-dojo-attach-point\x3d"geocoderMenuNode" role\x3d"presentation"\x3e\r\n    \t\t\x3cdiv class\x3d"${_geocoderMenuHeaderClass}"\x3e\r\n    \t\t\t${_i18n.widgets.Geocoder.main.geocoderMenuHeader}\r\n    \t\t\t\x3cdiv role\x3d"button" data-dojo-attach-point\x3d"geocoderMenuCloseNode" data-dojo-attach-event\x3d"ondijitclick:_hideGeolocatorMenu" title\x3d"${_i18n.widgets.Geocoder.main.geocoderMenuCloseTitle}" tabindex\x3d"0" class\x3d"${_geocoderMenuCloseClass}"\x3e\x3c/div\x3e\r\n    \t\t\t\x3cdiv class\x3d"${_GeocoderClearClass}" role\x3d"presentation"\x3e\x3c/div\x3e\r\n    \t\t\x3c/div\x3e\r\n    \t\t\x3cdiv data-dojo-attach-point\x3d"geocoderMenuInsertNode" aria-labelledby\x3d"${id}_menu_button" role\x3d"menu" aria-hidden\x3d"true"\x3e\x3c/div\x3e\r\n    \t\x3c/div\x3e\r\n    \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("esri/dijit/Geocoder","dojo/_base/declare dojo/_base/lang dojo/_base/Deferred dojo/_base/event dojo/dom-attr dojo/dom-class dojo/dom-style dojo/dom-construct dojo/json dojo/keys dojo/on dojo/query dojo/i18n!esri/nls/jsapi dojo/text!esri/dijit/templates/Geocoder.html dojo/uacss dijit/_OnDijitClickMixin dijit/_TemplatedMixin dijit/_WidgetBase dijit/focus esri/kernel esri/SpatialReference esri/graphic esri/request esri/dijit/_EventedWidget esri/geometry/Point esri/geometry/Extent esri/tasks/locator".split(" "),
function(v,f,n,l,e,h,k,A,s,d,m,p,q,r,B,C,D,H,t,E,u,w,F,G,x,y,z){r=v([G,C,D],{declaredClass:"esri.dijit.Geocoder",templateString:r,_eventMap:{select:["result"],"find-results":["results"],"auto-complete":["results"],"geocoder-select":["geocoder"],clear:!0,"enter-key-select":!0,load:!0},constructor:function(a,b){this._setPublicDefaults();v.safeMixin(this,a);this._setPrivateDefaults();this.watch("value",this._updateValue);this.watch("theme",this._updateTheme);this.watch("activeGeocoder",this._setActiveGeocoder);
this.watch("activeGeocoderIndex",this._setActiveGeocoderIndex);this.watch("geocoder",this._updateGeocoder);this.watch("arcgisGeocoder",this._updateGeocoder);this.domNode=b},startup:function(){this._geocoders.length?this.domNode?(this.get("value")&&this._checkStatus(),this.map?this.map.loaded?this._init():m(this.map,"load",f.hitch(this,function(){this._init()})):this._init()):(console.log("domNode is undefined."),this.destroy()):(console.log("No geocoders defined."),this.destroy())},postCreate:function(){this._updateGeocoder();
this._setDelegations()},destroy:function(){var a;if(this._delegations)for(a=0;a<this._delegations.length;a++)this._delegations[a].remove();this._acEvent&&this._acEvent.remove();this._gmEvent&&this._gmEvent.remove();A.empty(this.domNode);this.inherited(arguments)},clear:function(){this.onClear();e.set(this.inputNode,"value","");this.set("value","");this.results=[];h.remove(this.containerNode,this._hasValueClass);e.set(this.clearNode,"title","");this._hideMenus();this._hideLoading()},show:function(){k.set(this.domNode,
"display","block")},hide:function(){k.set(this.domNode,"display","none")},find:function(a){var b=new n;if(a)if("string"===typeof a)this._queryDeferred(a).then(function(a){b.resolve(a)});else if("object"===typeof a&&a.hasOwnProperty("geometry")){var c;switch(a.geometry.type){case "extent":c=a.geometry.getCenter();break;case "multipoint":c=a.geometry.getExtent().getCenter();break;case "point":c=a.geometry;break;case "polygon":c=a.geometry.getExtent().getCenter();break;case "polyline":c=a.geometry.getExtent().getCenter()}c&&
this._reverseGeocodePoint(c,a.geometry).then(function(c){c.results[0]&&(a.hasOwnProperty("attributes")&&c.results[0].feature.setAttributes(f.mixin(c.results[0].feature.attributes,a.attributes)),a.hasOwnProperty("infoTemplate")&&c.results[0].feature.setInfoTemplate(a.infoTemplate),a.hasOwnProperty("symbol")&&c.results[0].feature.setSymbol(a.symbol));b.resolve(c)},function(a){b.reject(a)})}else"object"===typeof a&&"point"===a.type?this._reverseGeocodePoint(a).then(function(a){b.resolve(a)},function(a){b.reject(a)}):
a instanceof Array&&2===a.length?(c=new x(a,new u({wkid:4326})),this._reverseGeocodePoint(c).then(function(a){b.resolve(a)},function(a){b.reject(a)})):b.reject("Invalid find type");else this._queryDeferred(this.get("value")).then(function(a){b.resolve(a)});return b},focus:function(){t.focus(this.inputNode)},blur:function(){t.curNode&&t.curNode.blur();this.inputNode.blur();this._hideMenus()},select:function(a){this.onSelect(a);this._hideMenus();this._hideLoading();this.autoNavigate&&(a&&a.hasOwnProperty("extent")&&
this.map)&&this.map.setExtent(a.extent)},onSelect:function(){},onFindResults:function(){},onAutoComplete:function(){},onGeocoderSelect:function(){},onClear:function(){},onEnterKeySelect:function(){},onLoad:function(){},_init:function(){this.loaded=!0;this.onLoad();this._hideMenus()},_queryDeferred:function(a){var b=new n;this._query({delay:0,search:a}).then(f.hitch(this,function(a){this.onFindResults(a);b.resolve(a)}),f.hitch(this,function(a){this.onFindResults(a);b.reject(a)}));return b},_reverseGeocodePoint:function(a,
b){var c=new n;if(a&&this.activeGeocoder){var g=b||a;this._reverseTask=new z(this.activeGeocoder.url);this._reverseTask.outSpatialReference=this._defaultSR;this.map&&(this._reverseTask.outSpatialReference=this.map.spatialReference);this._reverseTask.locationToAddress(a,this.activeGeocoder.distance||1500,f.hitch(this,function(a){a={results:[this._hydrateResult(a)],geometry:g};this.onFindResults(a);c.resolve(a)}),f.hitch(this,function(a){c.reject(a)}))}else c.reject("no point or active geocoder defined");
return c},_setPublicDefaults:function(){this.autoComplete=!1;this.arcgisGeocoder=!0;this.set("value","");this.set("theme","simpleGeocoder");this.activeGeocoderIndex=0;this.maxLocations=5;this.minCharacters=3;this.searchDelay=300;this.showResults=this.autoNavigate=this.geocoderMenu=!0},_setPrivateDefaults:function(){this._i18n=q;this._deferreds=[];this.results=[];this._defaultSR=new u(4326);this._GeocoderContainerClass="esriGeocoderContainer";this._GeocoderClass="esriGeocoder";this._GeocoderMultipleClass=
"esriGeocoderMultiple";this._GeocoderIconClass="esriGeocoderIcon";this._GeocoderActiveClass="esriGeocoderActive";this._GeocoderResultsOpenClass="esriGeocoderResultsOpen";this._loadingClass="esriGeocoderLoading";this._resultsContainerClass="esriGeocoderResults";this._resultsItemClass="esriGeocoderResult";this._resultsItemEvenClass="esriGeocoderResultEven";this._resultsItemOddClass="esriGeocoderResultOdd";this._resultsItemFirstClass="esriGeocoderResultFirst";this._resultsItemLastClass="esriGeocoderResultLast";
this._resultsPartialMatchClass="esriGeocoderResultPartial";this._searchButtonClass="esriGeocoderSearch";this._clearButtonClass="esriGeocoderReset";this._hasValueClass="esriGeocoderHasValue";this._geocoderMenuClass="esriGeocoderMenu";this._geocoderMenuHeaderClass="esriGeocoderMenuHeader";this._geocoderMenuCloseClass="esriGeocoderMenuClose";this._activeMenuClass="esriGeocoderMenuActive";this._geocoderMenuArrowClass="esriGeocoderMenuArrow";this._geocoderSelectedClass="esriGeocoderSelected";this._geocoderSelectedCheckClass=
"esriGeocoderSelectedCheck";this._GeocoderClearClass="esriGeocoderClearFloat"},_setEsriGeocoder:function(){this.arcgisGeocoder?(this._arcgisGeocoder="object"===typeof this.arcgisGeocoder?this.arcgisGeocoder:{},this._arcgisGeocoder.hasOwnProperty("suggest")||(this._arcgisGeocoder.suggest=!0),this._arcgisGeocoder.url||(this._arcgisGeocoder.url=location.protocol+"//geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer"),this._arcgisGeocoder.name||(this._arcgisGeocoder.name=q.widgets.Geocoder.esriGeocoderName),
this._arcgisGeocoder.hasOwnProperty("localSearchOptions")||(this._arcgisGeocoder.localSearchOptions={minScale:3E5,distance:5E4}),this.arcgisGeocoder=this._arcgisGeocoder):this.arcgisGeocoder=!1},_setActiveGeocoder:function(){this.activeGeocoder=this._geocoders[this.activeGeocoderIndex];this._updatePlaceholder()},_setGeocoderList:function(){var a=[];this.arcgisGeocoder&&(a=a.concat([this._arcgisGeocoder]));this.geocoders&&this.geocoders.length&&(a=a.concat(this.geocoders));this._geocoders=a},_updateGeocoder:function(){this.set("activeGeocoderIndex",
0);this._setEsriGeocoder();this._setGeocoderList();this._setActiveGeocoder();this._insertGeocoderMenuItems()},_updatePlaceholder:function(){this._placeholder="";this.activeGeocoder&&this.activeGeocoder.placeholder&&(this._placeholder=this.activeGeocoder.placeholder);e.set(this.inputNode,"placeholder",this._placeholder);e.set(this.submitNode,"title",this._placeholder)},_updateValue:function(a,b,c){this._ignoreUpdateValue||(e.set(this.inputNode,"value",c),this._checkStatus())},_updateTheme:function(a,
b,c){h.remove(this.domNode,b);h.add(this.domNode,c)},_setActiveGeocoderIndex:function(a,b,c){this.activeGeocoderIndex=c;this._setActiveGeocoder();this._hideMenus();this._insertGeocoderMenuItems();this.onGeocoderSelect({attr:this.activeGeocoder,oldVal:b,newVal:c})},_query:function(a){a||(a={delay:0});a.search||(a.search=this.get("value"));var b=new n;this._deferreds.push(b);this._queryTimer=setTimeout(f.hitch(this,function(){this._performQuery(b,a)}),a.delay);return b},_performQuery:function(a,b){if(b.search){this._hideGeolocatorMenu();
this._showLoading();var c,g=this.activeGeocoder.outFields||"",d="";this.activeGeocoder.prefix&&(d+=this.activeGeocoder.prefix);d+=b.search;this.activeGeocoder.suffix&&(d+=this.activeGeocoder.suffix);if(this.activeGeocoder===this._arcgisGeocoder){c=this._defaultSR;this.map&&(c=this.map.spatialReference);c={text:d,outSR:c.wkid||s.stringify(c.toJson()),f:"json"};if(this.map&&this.activeGeocoder.localSearchOptions&&this.activeGeocoder.localSearchOptions.hasOwnProperty("distance")&&this.activeGeocoder.localSearchOptions.hasOwnProperty("minScale")){var d=
this.map.extent.getCenter().normalize(),e=this.map.getScale();if(!this.activeGeocoder.localSearchOptions.minScale||e&&e<=parseFloat(this.activeGeocoder.localSearchOptions.minScale))c.location=s.stringify(d.toJson()),c.distance=this.activeGeocoder.localSearchOptions.distance}b.magicKey&&(c.magicKey=b.magicKey);g&&(c.outFields=g);this.maxLocations&&(c.maxLocations=this.maxLocations);this.activeGeocoder.sourceCountry&&(c.sourceCountry=this.activeGeocoder.sourceCountry);this.activeGeocoder.searchExtent&&
(g={xmin:this.activeGeocoder.searchExtent.xmin,ymin:this.activeGeocoder.searchExtent.ymin,xmax:this.activeGeocoder.searchExtent.xmax,ymax:this.activeGeocoder.searchExtent.ymax,spatialReference:this.activeGeocoder.searchExtent.spatialReference.toJson()},c.bbox=s.stringify(g));g="/find";b.autocomplete&&this.activeGeocoder.suggest&&(g="/suggest");g=this.activeGeocoder.url+g;b.autocomplete&&(this.activeGeocoder.suggest&&this.activeGeocoder.suggestUrl)&&(g=this.activeGeocoder.suggestUrl);F({url:g,content:c,
handleAs:"json",callbackParamName:"callback",load:f.hitch(this,function(c){this._receivedResults(c.suggestions||c.locations,a,b)})})}else c={address:{}},b.magicKey&&(c.magicKey=b.magicKey),this.activeGeocoder.singleLineFieldName?c.address[this.activeGeocoder.singleLineFieldName]=d:c.address["Single Line Input"]=d,g&&(c.outFields=[g]),this.activeGeocoder.searchExtent&&(c.searchExtent=this.activeGeocoder.searchExtent),this._task=new z(this.activeGeocoder.url),this._task.outSpatialReference=this._defaultSR,
this.map&&(this._task.outSpatialReference=this.map.spatialReference),this._task.addressToLocations(c,f.hitch(this,function(c){this._receivedResults(c,a,b)}),f.hitch(this,function(c){this._receivedResults(c,a,b)}))}else this._hideLoading(),a.reject("no search to perform")},_showResults:function(){this._hideGeolocatorMenu();var a="";if(this.results&&this.results.length&&this.resultsNode){var b=this.get("value"),c,d=RegExp("("+b+")","gi"),a=a+'\x3cul role\x3d"presentation"\x3e';for(c=0;c<this.results.length;++c){var f=
this.results[c].text||this.results[c].name,e=this._resultsItemClass+" ",e=0===c%2?e+this._resultsItemOddClass:e+this._resultsItemEvenClass;0===c?e+=" "+this._resultsItemFirstClass:c===this.results.length-1&&(e+=" "+this._resultsItemLastClass);a+='\x3cli data-text\x3d"'+f+'" data-item\x3d"true" data-index\x3d"'+c+'" role\x3d"menuitem" tabindex\x3d"0" class\x3d"'+e+'"\x3e'+f.replace(d,'\x3cstrong class\x3d"'+this._resultsPartialMatchClass+'"\x3e'+b+"\x3c/strong\x3e")+"\x3c/li\x3e"}a+="\x3c/ul\x3e";
this.resultsNode&&(this.resultsNode.innerHTML=a);this._autoCompleteEvent();this._showResultsMenu()}else this.resultsNode&&(this.resultsNode.innerHTML=a),this._hideResultsMenu()},_autocomplete:function(){this._query({delay:this.searchDelay,autocomplete:!0,search:this.get("value")}).then(f.hitch(this,function(a){this.onAutoComplete(a);this.showResults&&this._showResults(a)}))},_receivedResults:function(a,b){this._hideLoading();var c=this._hydrateResults(a);this.results=c;c={results:c,value:this.get("value")};
b.resolve(c)},_showLoading:function(){h.add(this.containerNode,this._loadingClass)},_hideLoading:function(){h.remove(this.containerNode,this._loadingClass)},_showGeolocatorMenu:function(){h.add(this.containerNode,this._activeMenuClass);k.set(this.geocoderMenuNode,"display","block");e.set(this.geocoderMenuInsertNode,"aria-hidden","false");e.set(this.geocoderMenuArrowNode,"aria-expanded","true")},_hideGeolocatorMenu:function(){h.remove(this.containerNode,this._activeMenuClass);k.set(this.geocoderMenuNode,
"display","none");e.set(this.geocoderMenuInsertNode,"aria-hidden","true");e.set(this.geocoderMenuArrowNode,"aria-expanded","false")},_toggleGeolocatorMenu:function(){this._hideResultsMenu();"block"===k.get(this.geocoderMenuNode,"display")?this._hideGeolocatorMenu():this._showGeolocatorMenu()},_showResultsMenu:function(){h.add(this.containerNode,this._GeocoderActiveClass);h.add(this.domNode,this._GeocoderResultsOpenClass);k.set(this.resultsNode,"display","block");e.set(this.resultsNode,"aria-hidden",
"false")},_hideResultsMenu:function(){k.set(this.resultsNode,"display","none");h.remove(this.containerNode,this._GeocoderActiveClass);h.remove(this.domNode,this._GeocoderResultsOpenClass);e.set(this.resultsNode,"aria-hidden","true")},_hideMenus:function(){this._hideGeolocatorMenu();this._hideResultsMenu()},_insertGeocoderMenuItems:function(){if(this.geocoderMenu&&1<this._geocoders.length){var a,b="",c;a='\x3cul role\x3d"presentation"\x3e';for(c=0;c<this._geocoders.length;c++){b=this._resultsItemClass+
" ";b=0===c%2?b+this._resultsItemOddClass:b+this._resultsItemEvenClass;c===this.activeGeocoderIndex&&(b+=" "+this._geocoderSelectedClass);0===c?b+=" "+this._resultsItemFirstClass:c===this._geocoders.length-1&&(b+=" "+this._resultsItemLastClass);var d=this._geocoders[c].name||q.widgets.Geocoder.main.untitledGeocoder;a+='\x3cli data-index\x3d"'+c+'" data-item\x3d"true" role\x3d"menuitem" tabindex\x3d"0" class\x3d"'+b+'"\x3e';a+='\x3cdiv class\x3d"'+this._geocoderSelectedCheckClass+'"\x3e\x3c/div\x3e';
a+=d;a+='\x3cdiv class\x3d"'+this._GeocoderClearClass+'"\x3e\x3c/div\x3e';a+="\x3c/li\x3e"}this.geocoderMenuInsertNode.innerHTML=a+"\x3c/ul\x3e";this._geocoderMenuEvent();k.set(this.geocoderMenuNode,"display","none");k.set(this.geocoderMenuArrowNode,"display","block");h.add(this.containerNode,this._GeocoderMultipleClass)}else this.geocoderMenuInsertNode.innerHTML="",k.set(this.geocoderMenuNode,"display","none"),k.set(this.geocoderMenuArrowNode,"display","none"),h.remove(this.containerNode,this._GeocoderMultipleClass)},
_checkStatus:function(){this.get("value")?(h.add(this.containerNode,this._hasValueClass),e.set(this.clearNode,"title",q.widgets.Geocoder.main.clearButtonTitle)):this.clear()},_autoCompleteEvent:function(){var a=p('[data-item\x3d"true"]',this.resultsNode);this._acEvent&&this._acEvent.remove();this._acEvent=m(a,"click, keydown",f.hitch(this,function(b){clearTimeout(this._queryTimer);var c=parseInt(e.get(b.currentTarget,"data-index"),10),g=e.get(b.currentTarget,"data-text");"click"===b.type||"keydown"===
b.type&&b.keyCode===d.ENTER?(e.set(this.inputNode,"value",g),this.set("value",g),this.results&&this.results[c]&&(this.results[c].name?this.select(this.results[c]):this._query({delay:0,search:this.results[c].text,magicKey:this.results[c].magicKey||null}).then(f.hitch(this,function(a){this.select(a.results[0])})))):"keydown"===b.type&&b.keyCode===d.UP_ARROW?(l.stop(b),b=c-1,0>b?this.inputNode.focus():a[b].focus()):"keydown"===b.type&&b.keyCode===d.DOWN_ARROW?(l.stop(b),b=c+1,b>=a.length?this.inputNode.focus():
a[b].focus()):b.keyCode===d.ESCAPE&&this._hideMenus()}))},_geocoderMenuEvent:function(){var a=p('[data-item\x3d"true"]',this.geocoderMenuInsertNode);this._gmEvent&&this._gmEvent.remove();this._gmEvent=m(a,"click, keydown",f.hitch(this,function(b){var c=parseInt(e.get(b.currentTarget,"data-index"),10);"click"===b.type||"keydown"===b.type&&b.keyCode===d.ENTER?(this._setActiveGeocoderIndex(null,null,c),this._hideGeolocatorMenu()):"keydown"===b.type&&b.keyCode===d.UP_ARROW?(l.stop(b),b=c-1,0>b?this.geocoderMenuArrowNode.focus():
a[b].focus()):"keydown"===b.type&&b.keyCode===d.DOWN_ARROW?(l.stop(b),b=c+1,b>=a.length?this.geocoderMenuArrowNode.focus():a[b].focus()):b.keyCode===d.ESCAPE&&this._hideGeolocatorMenu()}))},_setDelegations:function(){this._delegations=[];var a=m(document,"click",f.hitch(this,function(a){this._hideResultsMenu(a)}));this._delegations.push(a);a=m(this.inputNode,"keyup",f.hitch(this,function(a){this._inputKeyUp(a)}));this._delegations.push(a);a=m(this.inputNode,"keydown",f.hitch(this,function(a){this._inputKeyDown(a)}));
this._delegations.push(a);a=m(this.geocoderMenuArrowNode,"keydown",this._geocoderMenuButtonKeyDown());this._delegations.push(a)},_findThenSelect:function(){this.find().then(f.hitch(this,function(a){a.results&&a.results.length&&(this.select(a.results[0]),this.onEnterKeySelect())}))},_inputKeyUp:function(a){if(a){clearTimeout(this._queryTimer);var b=this.inputNode.value;this._ignoreUpdateValue=!0;this.set("value",b);this._ignoreUpdateValue=!1;var c=0;b&&(c=b.length);if(a.keyCode===a.copyKey||a.ctrlKey||
a.shiftKey||a.metaKey||a.altKey||a.keyCode===a.ALT||a.keyCode===a.CTRL||a.keyCode===a.META||a.keyCode===a.shiftKey||a.keyCode===d.UP_ARROW||a.keyCode===d.DOWN_ARROW||a.keyCode===d.LEFT_ARROW||a.keyCode===d.RIGHT_ARROW)return a;a&&a.keyCode===d.ENTER?(this._cancelDeferreds(),this._findThenSelect()):a&&a.keyCode===d.ESCAPE?(this._cancelDeferreds(),this._hideMenus()):a&&a.keyCode===d.TAB?(this._cancelDeferreds(),this._hideMenus()):this.autoComplete&&c>=this.minCharacters?this._autocomplete():this._hideMenus();
this._checkStatus()}},_cancelDeferreds:function(){if(this._deferreds.length){for(var a=0;a<this._deferreds.length;a++)this._deferreds[a].cancel("stop query");this._deferreds=[]}},_inputKeyDown:function(a){var b=p('[data-item\x3d"true"]',this.resultsNode);a&&a.keyCode===d.TAB?(this._cancelDeferreds(),this._hideMenus()):a&&a.keyCode===d.UP_ARROW?(l.stop(a),(a=b.length)&&b[a-1].focus()):a&&a.keyCode===d.DOWN_ARROW&&(l.stop(a),b[0]&&b[0].focus())},_geocoderMenuButtonKeyDown:function(a){var b=p('[data-item\x3d"true"]',
this.geocoderMenuInsertNode);a&&a.keyCode===d.UP_ARROW?(l.stop(a),this._showGeolocatorMenu(),(a=b.length)&&b[a-1].focus()):a&&a.keyCode===d.DOWN_ARROW&&(l.stop(a),this._showGeolocatorMenu(),b[0]&&b[0].focus())},_inputClick:function(){this._hideGeolocatorMenu();this.get("value")||(this.clear(),this._hideMenus());this._checkStatus()},_hydrateResult:function(a){var b=this._defaultSR;this.map&&(b=this.map.spatialReference);var c={};if(a.hasOwnProperty("text")&&a.hasOwnProperty("magicKey"))return a;if(a.hasOwnProperty("extent"))c.extent=
new y(a.extent),c.extent.setSpatialReference(new u(b)),a.hasOwnProperty("name")&&(c.name=a.name),a.hasOwnProperty("feature")&&(c.feature=new w(a.feature),(a=c.feature.geometry)&&a.setSpatialReference(b));else if(a.hasOwnProperty("location")){b=new x(a.location.x,a.location.y,b);c.extent=this.map?this.map.extent.centerAt(b):new y({xmin:b.x-0.25,ymin:b.y-0.25,xmax:b.x+0.25,ymax:b.y+0.25,spatialReference:{wkid:4326}});a.hasOwnProperty("address")&&"string"===typeof a.address?c.name=a.address:a.hasOwnProperty("address")&&
"object"===typeof a.address&&a.address.hasOwnProperty("Address")?c.name=a.address.Address:c.name="";var d={};a.hasOwnProperty("attributes")&&(d=a.attributes);a.hasOwnProperty("score")&&(d.score=a.score);c.feature=new w(b,null,d,null)}return c},_hydrateResults:function(a){var b=[];if(a&&a.length){var c=0;for(c;c<a.length&&c<this.maxLocations;c++){var d=this._hydrateResult(a[c]);b.push(d)}}return b}});B("extend-esri")&&f.setObject("dijit.Geocoder",r,E);return r});