function html623afa$ImageDataWrappingImplementation$Dart(){
}

html623afa$ImageDataWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('html623afa$ImageDataWrappingImplementation$Dart'), html623afa$ImageDataWrappingImplementation$Dart.$RTTimplements);
}
;
html623afa$ImageDataWrappingImplementation$Dart.$RTTimplements = function(rtt){
  html623afa$ImageDataWrappingImplementation$Dart.$addTo(rtt);
}
;
html623afa$ImageDataWrappingImplementation$Dart.$addTo = function(target){
  var rtt = html623afa$ImageDataWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  html623afa$DOMWrapperBase$Dart.$addTo(target);
  html623afa$ImageData$Dart.$addTo(target);
}
;
html623afa$ImageDataWrappingImplementation$Dart.prototype.$implements$html623afa$ImageDataWrappingImplementation$Dart = 1;
html623afa$ImageDataWrappingImplementation$Dart.prototype.$implements$html623afa$ImageData$Dart = 1;
html623afa$ImageDataWrappingImplementation$Dart.prototype.$implements$html623afa$DOMWrapperBase$Dart = 1;
html623afa$ImageDataWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(html623afa$ImageDataWrappingImplementation$Dart, html623afa$DOMWrapperBase$Dart);
html623afa$ImageDataWrappingImplementation$Dart._wrap$html623afa$$Constructor_ = function(ptr){
  html623afa$DOMWrapperBase$Dart._wrap$html623afa$$Constructor_.call(this, ptr);
}
;
html623afa$ImageDataWrappingImplementation$Dart._wrap$html623afa$$Initializer_ = function(ptr){
  html623afa$DOMWrapperBase$Dart._wrap$html623afa$$Initializer_.call(this, ptr);
}
;
html623afa$ImageDataWrappingImplementation$Dart.ImageDataWrappingImplementation$_wrap$31$html623afa$$Factory_ = function(ptr){
  var tmp$0 = new html623afa$ImageDataWrappingImplementation$Dart;
  tmp$0.$typeInfo = html623afa$ImageDataWrappingImplementation$Dart.$lookupRTT();
  html623afa$ImageDataWrappingImplementation$Dart._wrap$html623afa$$Initializer_.call(tmp$0, ptr);
  html623afa$ImageDataWrappingImplementation$Dart._wrap$html623afa$$Constructor_.call(tmp$0, ptr);
  return tmp$0;
}
;
html623afa$ImageDataWrappingImplementation$Dart.prototype.data$named = function(){
  return this.data$getter().apply(this, arguments);
}
;
html623afa$ImageDataWrappingImplementation$Dart.prototype.data$getter = function(){
  return html623afa$LevelDom$Dart.wrapCanvasPixelArray$member(this._ptr$html623afa$$getter_().data$getter());
}
;
html623afa$ImageDataWrappingImplementation$Dart.prototype.height$named = function(){
  return this.height$getter().apply(this, arguments);
}
;
html623afa$ImageDataWrappingImplementation$Dart.prototype.height$getter = function(){
  return this._ptr$html623afa$$getter_().height$getter();
}
;
html623afa$ImageDataWrappingImplementation$Dart.prototype.width$named = function(){
  return this.width$getter().apply(this, arguments);
}
;
html623afa$ImageDataWrappingImplementation$Dart.prototype.width$getter = function(){
  return this._ptr$html623afa$$getter_().width$getter();
}
;
