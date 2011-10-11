function html623afa$GeopositionWrappingImplementation$Dart(){
}

html623afa$GeopositionWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('html623afa$GeopositionWrappingImplementation$Dart'), html623afa$GeopositionWrappingImplementation$Dart.$RTTimplements);
}
;
html623afa$GeopositionWrappingImplementation$Dart.$RTTimplements = function(rtt){
  html623afa$GeopositionWrappingImplementation$Dart.$addTo(rtt);
}
;
html623afa$GeopositionWrappingImplementation$Dart.$addTo = function(target){
  var rtt = html623afa$GeopositionWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  html623afa$DOMWrapperBase$Dart.$addTo(target);
  html623afa$Geoposition$Dart.$addTo(target);
}
;
html623afa$GeopositionWrappingImplementation$Dart.prototype.$implements$html623afa$GeopositionWrappingImplementation$Dart = 1;
html623afa$GeopositionWrappingImplementation$Dart.prototype.$implements$html623afa$Geoposition$Dart = 1;
html623afa$GeopositionWrappingImplementation$Dart.prototype.$implements$html623afa$DOMWrapperBase$Dart = 1;
html623afa$GeopositionWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(html623afa$GeopositionWrappingImplementation$Dart, html623afa$DOMWrapperBase$Dart);
html623afa$GeopositionWrappingImplementation$Dart._wrap$html623afa$$Constructor_ = function(ptr){
  html623afa$DOMWrapperBase$Dart._wrap$html623afa$$Constructor_.call(this, ptr);
}
;
html623afa$GeopositionWrappingImplementation$Dart._wrap$html623afa$$Initializer_ = function(ptr){
  html623afa$DOMWrapperBase$Dart._wrap$html623afa$$Initializer_.call(this, ptr);
}
;
html623afa$GeopositionWrappingImplementation$Dart.GeopositionWrappingImplementation$_wrap$33$html623afa$$Factory_ = function(ptr){
  var tmp$0 = new html623afa$GeopositionWrappingImplementation$Dart;
  tmp$0.$typeInfo = html623afa$GeopositionWrappingImplementation$Dart.$lookupRTT();
  html623afa$GeopositionWrappingImplementation$Dart._wrap$html623afa$$Initializer_.call(tmp$0, ptr);
  html623afa$GeopositionWrappingImplementation$Dart._wrap$html623afa$$Constructor_.call(tmp$0, ptr);
  return tmp$0;
}
;
html623afa$GeopositionWrappingImplementation$Dart.prototype.coords$named = function(){
  return this.coords$getter().apply(this, arguments);
}
;
html623afa$GeopositionWrappingImplementation$Dart.prototype.coords$getter = function(){
  return html623afa$LevelDom$Dart.wrapCoordinates$member(this._ptr$html623afa$$getter_().coords$getter());
}
;
html623afa$GeopositionWrappingImplementation$Dart.prototype.timestamp$named = function(){
  return this.timestamp$getter().apply(this, arguments);
}
;
html623afa$GeopositionWrappingImplementation$Dart.prototype.timestamp$getter = function(){
  return this._ptr$html623afa$$getter_().timestamp$getter();
}
;
