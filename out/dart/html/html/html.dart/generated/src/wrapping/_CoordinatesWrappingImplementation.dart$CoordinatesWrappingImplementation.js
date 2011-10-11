function html623afa$CoordinatesWrappingImplementation$Dart(){
}

html623afa$CoordinatesWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('html623afa$CoordinatesWrappingImplementation$Dart'), html623afa$CoordinatesWrappingImplementation$Dart.$RTTimplements);
}
;
html623afa$CoordinatesWrappingImplementation$Dart.$RTTimplements = function(rtt){
  html623afa$CoordinatesWrappingImplementation$Dart.$addTo(rtt);
}
;
html623afa$CoordinatesWrappingImplementation$Dart.$addTo = function(target){
  var rtt = html623afa$CoordinatesWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  html623afa$DOMWrapperBase$Dart.$addTo(target);
  html623afa$Coordinates$Dart.$addTo(target);
}
;
html623afa$CoordinatesWrappingImplementation$Dart.prototype.$implements$html623afa$CoordinatesWrappingImplementation$Dart = 1;
html623afa$CoordinatesWrappingImplementation$Dart.prototype.$implements$html623afa$Coordinates$Dart = 1;
html623afa$CoordinatesWrappingImplementation$Dart.prototype.$implements$html623afa$DOMWrapperBase$Dart = 1;
html623afa$CoordinatesWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(html623afa$CoordinatesWrappingImplementation$Dart, html623afa$DOMWrapperBase$Dart);
html623afa$CoordinatesWrappingImplementation$Dart._wrap$html623afa$$Constructor_ = function(ptr){
  html623afa$DOMWrapperBase$Dart._wrap$html623afa$$Constructor_.call(this, ptr);
}
;
html623afa$CoordinatesWrappingImplementation$Dart._wrap$html623afa$$Initializer_ = function(ptr){
  html623afa$DOMWrapperBase$Dart._wrap$html623afa$$Initializer_.call(this, ptr);
}
;
html623afa$CoordinatesWrappingImplementation$Dart.CoordinatesWrappingImplementation$_wrap$33$html623afa$$Factory_ = function(ptr){
  var tmp$0 = new html623afa$CoordinatesWrappingImplementation$Dart;
  tmp$0.$typeInfo = html623afa$CoordinatesWrappingImplementation$Dart.$lookupRTT();
  html623afa$CoordinatesWrappingImplementation$Dart._wrap$html623afa$$Initializer_.call(tmp$0, ptr);
  html623afa$CoordinatesWrappingImplementation$Dart._wrap$html623afa$$Constructor_.call(tmp$0, ptr);
  return tmp$0;
}
;
html623afa$CoordinatesWrappingImplementation$Dart.prototype.accuracy$named = function(){
  return this.accuracy$getter().apply(this, arguments);
}
;
html623afa$CoordinatesWrappingImplementation$Dart.prototype.accuracy$getter = function(){
  return this._ptr$html623afa$$getter_().accuracy$getter();
}
;
html623afa$CoordinatesWrappingImplementation$Dart.prototype.altitude$named = function(){
  return this.altitude$getter().apply(this, arguments);
}
;
html623afa$CoordinatesWrappingImplementation$Dart.prototype.altitude$getter = function(){
  return this._ptr$html623afa$$getter_().altitude$getter();
}
;
html623afa$CoordinatesWrappingImplementation$Dart.prototype.altitudeAccuracy$named = function(){
  return this.altitudeAccuracy$getter().apply(this, arguments);
}
;
html623afa$CoordinatesWrappingImplementation$Dart.prototype.altitudeAccuracy$getter = function(){
  return this._ptr$html623afa$$getter_().altitudeAccuracy$getter();
}
;
html623afa$CoordinatesWrappingImplementation$Dart.prototype.heading$named = function(){
  return this.heading$getter().apply(this, arguments);
}
;
html623afa$CoordinatesWrappingImplementation$Dart.prototype.heading$getter = function(){
  return this._ptr$html623afa$$getter_().heading$getter();
}
;
html623afa$CoordinatesWrappingImplementation$Dart.prototype.latitude$named = function(){
  return this.latitude$getter().apply(this, arguments);
}
;
html623afa$CoordinatesWrappingImplementation$Dart.prototype.latitude$getter = function(){
  return this._ptr$html623afa$$getter_().latitude$getter();
}
;
html623afa$CoordinatesWrappingImplementation$Dart.prototype.longitude$named = function(){
  return this.longitude$getter().apply(this, arguments);
}
;
html623afa$CoordinatesWrappingImplementation$Dart.prototype.longitude$getter = function(){
  return this._ptr$html623afa$$getter_().longitude$getter();
}
;
html623afa$CoordinatesWrappingImplementation$Dart.prototype.speed$named = function(){
  return this.speed$getter().apply(this, arguments);
}
;
html623afa$CoordinatesWrappingImplementation$Dart.prototype.speed$getter = function(){
  return this._ptr$html623afa$$getter_().speed$getter();
}
;
