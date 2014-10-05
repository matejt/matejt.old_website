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
define("esri/PopupInfo","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/json dojo/i18n dojo/has esri/kernel esri/lang dojo/i18n!dojo/cldr/nls/number".split(" "),function(m,k,l,t,z,A,u,g){m=m(null,{declaredClass:"esri.PopupInfo",initialize:function(a,b){if(a){k.mixin(this,b);this.info=a;this.title=this.getTitle;this.content=this.getContent;var c=this._fieldLabels={},d=this._fieldsMap={};a.fieldInfos&&l.forEach(a.fieldInfos,function(a){c[a.fieldName]=a.label;d[a.fieldName]=a})}},toJson:function(){return t.fromJson(t.toJson(this.info))},
getTitle:function(){},getContent:function(){},getComponents:function(a){var b=this.info,c=a.getLayer(),d=k.clone(a.attributes)||{},e=k.clone(d),f=b.fieldInfos,x="",y="",q,n,h,m=c&&c._getDateOpts&&c._getDateOpts().properties,p={dateFormat:{properties:m,formatter:"DateFormat"+this._insertOffset(this._dateFormats.shortDateShortTime)}};f&&l.forEach(f,function(a){var b=a.fieldName;e[b]=this._formatValue(e[b],b,p);m&&(a.format&&a.format.dateFormat)&&(a=l.indexOf(m,b),-1<a&&m.splice(a,1))},this);if(c){var t=
c.types,w=c.typeIdField,u=w&&d[w];for(n in d)if(h=d[n],g.isDefined(h)){var r=this._getDomainName(c,t,u,n,h);g.isDefined(r)?e[n]=r:n===w&&(r=this._getTypeName(c,h),g.isDefined(r)&&(e[n]=r))}}b.title&&(x=k.trim(g.substitute(e,this._fixTokens(b.title),p)||""));b.description&&(y=k.trim(g.substitute(e,this._fixTokens(b.description),p)||""));f&&(q=[],l.forEach(f,function(a){(n=a.fieldName)&&a.visible&&q.push([a.label||n,g.substitute(e,"${"+n+"}",p)||""])}));var s,v;b.mediaInfos&&(s=[],l.forEach(b.mediaInfos,
function(a){v=0;h=a.value;switch(a.type){case "image":var b=h.sourceURL,b=b&&k.trim(g.substitute(d,this._fixTokens(b)));v=!!b;break;case "piechart":case "linechart":case "columnchart":case "barchart":v=l.some(h.fields,function(a){return g.isDefined(d[a])});break;default:return}if(v){a=k.clone(a);h=a.value;a.title=a.title?k.trim(g.substitute(e,this._fixTokens(a.title),p)||""):"";a.caption=a.caption?k.trim(g.substitute(e,this._fixTokens(a.caption),p)||""):"";if("image"===a.type)h.sourceURL=g.substitute(d,
this._fixTokens(h.sourceURL)),h.linkURL&&(h.linkURL=k.trim(g.substitute(d,this._fixTokens(h.linkURL))||""));else{var c=d[h.normalizeField]||0;h.fields=l.map(h.fields,function(a){var b=d[a];(b=void 0===b?null:b)&&c&&(b/=c);return{y:b,tooltip:(this._fieldLabels[a]||a)+":\x3cbr/\x3e"+this._formatValue(b,a,p,!!c)}},this)}s.push(a)}},this));return{title:x,description:y,fields:q&&q.length?q:null,mediaInfos:s&&s.length?s:null,formatted:e,editSummary:c&&c.getEditSummary?c.getEditSummary(a):""}},getAttachments:function(a){var b=
a.getLayer();a=a.attributes;if(this.info.showAttachments&&(b&&b.hasAttachments&&b.objectIdField)&&(a=a&&a[b.objectIdField]))return b.queryAttachmentInfos(a)},_dateFormats:{shortDate:"(datePattern: 'M/d/y', selector: 'date')",longMonthDayYear:"(datePattern: 'MMMM d, y', selector: 'date')",dayShortMonthYear:"(datePattern: 'd MMM y', selector: 'date')",longDate:"(datePattern: 'EEEE, MMMM d, y', selector: 'date')",shortDateShortTime:"(datePattern: 'M/d/y', timePattern: 'h:mm a', selector: 'date and time')",
shortDateShortTime24:"(datePattern: 'M/d/y', timePattern: 'H:mm', selector: 'date and time')",shortDateLongTime:"(datePattern: 'M/d/y', timePattern: 'h:mm:ss a', selector: 'date and time')",shortDateLongTime24:"(datePattern: 'M/d/y', timePattern: 'H:mm:ss', selector: 'date and time')",longMonthYear:"(datePattern: 'MMMM y', selector: 'date')",shortMonthYear:"(datePattern: 'MMM y', selector: 'date')",year:"(datePattern: 'y', selector: 'date')"},_fixTokens:function(a){return a.replace(/(\{[^\{\r\n]+\})/g,
"$$$1")},_formatValue:function(a,b,c,d){var e=this._fieldsMap[b];b=e&&e.format;if(!g.isDefined(a)||!e||!g.isDefined(b))return a;var f="",l=[],e=b.hasOwnProperty("places")||b.hasOwnProperty("digitSeparator"),k=b.hasOwnProperty("digitSeparator")?b.digitSeparator:!0;if(e)f="NumberFormat",l.push("places: "+(g.isDefined(b.places)&&(!d||0<b.places)?Number(b.places):"Infinity")),l.length&&(f+="("+l.join(",")+")");else if(b.dateFormat)f="DateFormat"+this._insertOffset(this._dateFormats[b.dateFormat]||this._dateFormats.shortDateShortTime);
else return a;a=g.substitute({myKey:a},"${myKey:"+f+"}",c)||"";e&&!k&&(c=z.getLocalization("dojo.cldr","number"),c.group&&(a=a.replace(RegExp("\\"+c.group,"g"),"")));return a},_insertOffset:function(a){a&&(a=g.isDefined(this.utcOffset)?a.replace(/\)\s*$/,", utcOffset:"+this.utcOffset+")"):a);return a},_getDomainName:function(a,b,c,d,e){var f,k;b&&g.isDefined(c)&&l.some(b,function(b){if(b.id==c){if((f=b.domains&&b.domains[d])&&"inherited"===f.type)f=this._getLayerDomain(a,d),k=!0;return!0}return!1},
this);!k&&!f&&(f=this._getLayerDomain(a,d));if(f&&f.codedValues){var m;l.some(f.codedValues,function(a){return a.code==e?(m=a.name,!0):!1});return m}},_getLayerDomain:function(a,b){var c=a.fields;if(c){var d;l.some(c,function(a){return a.name===b?(d=a.domain,!0):!1});return d}},_getTypeName:function(a,b){var c=a.types;if(c){var d;l.some(c,function(a){return a.id==b?(d=a.name,!0):!1});return d}}});A("extend-esri")&&(u.PopupInfo=u.PopupInfoTemplate=m);return m});