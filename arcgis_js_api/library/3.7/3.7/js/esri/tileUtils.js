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
define("esri/tileUtils",["dojo/_base/array","dojo/has","esri/kernel","esri/geometry/Point","esri/geometry/Extent"],function(u,v,w,x,s){var t={_addFrameInfo:function(a,c){var b,d,f=2*c.origin[1],g=c.origin[0],h=a.origin.x,e=a.width,l;u.forEach(a.lods,function(a){b=Math.round(f/a.resolution);d=Math.ceil(b/e);l=Math.floor((g-h)/(e*a.resolution));a._frameInfo||(a._frameInfo=[d,l,l+d-1,b])})},getContainingTileCoords:function(a,c,b){var d=a.origin;b=b.resolution;return{row:Math.floor((d.y-c.y)/(a.height*
b)),col:Math.floor((c.x-d.x)/(a.width*b))}},getCandidateTileInfo:function(a,c,b){var d;d=a.width;for(var f=a.height,g=b.xmax-b.xmin,h=b.ymax-b.ymin,e=a.__tileInfo===c,l=e?a.getMinZoom():-1,e=e?a.getMaxZoom():-1,m=-1,n=c.lods,p=Math.abs,k,q,r,e=-1<e?e:n.length-1,l=-1<l?l:0;l<=e;l++)if(q=n[l])if(r=g>h?p(h-f*q.resolution):p(g-d*q.resolution),0>m||r<=m)k=q,m=r;else break;d=k;k=d.resolution;f=(b.xmin+b.xmax)/2;g=(b.ymin+b.ymax)/2;h=a.width/2*k;k*=a.height/2;f=new s(f-h,g-k,f+h,g+k,b.spatialReference);
b=new x(f.xmin,f.ymax,b.spatialReference);e=d.resolution;h=c.width;g=c.height;c=c.origin;a=a.__visibleDelta;k=Math.floor;n=h*e;p=g*e;e=k((c.y-b.y)/p);m=k((b.x-c.x)/n);l=c.y-e*p;c=k(Math.abs((b.x-(c.x+m*n))*h/n))+a.x;a=k(Math.abs((b.y-l)*g/p))+a.y;return{tile:{point:b,coords:{row:e,col:m},offsets:{x:c,y:a}},lod:d,extent:f}},getTileExtent:function(a,c,b,d){var f=a.origin;c=a.lods[c].resolution;var g=a.width,h=a.height;return new s(d*c*g+f.x,f.y-(b+1)*c*h,(d+1)*c*g+f.x,f.y-b*c*h,a.spatialReference)}};
v("extend-esri")&&(w.TileUtils=t);return t});