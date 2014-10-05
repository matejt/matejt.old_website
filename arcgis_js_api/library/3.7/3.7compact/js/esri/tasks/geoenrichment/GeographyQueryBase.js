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
define("esri/tasks/geoenrichment/GeographyQueryBase",["../../declare","esri/SpatialReference"],function(b,c){return b("esri.tasks.geoenrichment.GeographyQueryBase",null,{countryID:null,datasetID:null,outSR:null,returnGeometry:!1,returnCentroids:!1,generalizationLevel:null,useFuzzySearch:!1,featureLimit:null,constructor:function(a){a&&(a.sourceCountry&&(this.countryID=a.sourceCountry),a.optionalCountryDataset&&(this.datasetID=a.optionalCountryDataset),a.outSR&&(this.outSR=new c(a.outSR)),a.returnGeometry&&
(this.returnGeometry=a.returnGeometry),a.returnCentroids&&(this.returnCentroids=a.returnCentroids),a.generalizationLevel&&(this.generalizationLevel=a.generalizationLevel),a.useFuzzySearch&&(this.useFuzzySearch=a.useFuzzySearch),a.featureLimit&&(this.featureLimit=a.featureLimit))},toJson:function(){var a={};this.countryID&&(a.sourceCountry=this.countryID);this.datasetID&&(a.optionalCountryDataset=this.datasetID);this.outSR&&(a.outSR=this.outSR.toJson());this.returnGeometry&&(a.returnGeometry=this.returnGeometry);
this.returnCentroids&&(a.returnCentroids=this.returnCentroids);this.generalizationLevel&&(a.generalizationLevel=this.generalizationLevel);this.useFuzzySearch&&(a.useFuzzySearch=this.useFuzzySearch);this.featureLimit&&(a.featureLimit=this.featureLimit);return a}})});