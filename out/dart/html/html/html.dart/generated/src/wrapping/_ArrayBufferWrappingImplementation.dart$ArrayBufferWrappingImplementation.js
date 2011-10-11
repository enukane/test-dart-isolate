function html623afa$ArrayBufferWrappingImplementation$Dart(){
}

html623afa$ArrayBufferWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('html623afa$ArrayBufferWrappingImplementation$Dart'), html623afa$ArrayBufferWrappingImplementation$Dart.$RTTimplements);
}
;
html623afa$ArrayBufferWrappingImplementation$Dart.$RTTimplements = function(rtt){
  html623afa$ArrayBufferWrappingImplementation$Dart.$addTo(rtt);
}
;
html623afa$ArrayBufferWrappingImplementation$Dart.$addTo = function(target){
  var rtt = html623afa$ArrayBufferWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  html623afa$DOMWrapperBase$Dart.$addTo(target);
  html623afa$ArrayBuffer$Dart.$addTo(target);
}
;
html623afa$ArrayBufferWrappingImplementation$Dart.prototype.$implements$html623afa$ArrayBufferWrappingImplementation$Dart = 1;
html623afa$ArrayBufferWrappingImplementation$Dart.prototype.$implements$html623afa$ArrayBuffer$Dart = 1;
html623afa$ArrayBufferWrappingImplementation$Dart.prototype.$implements$html623afa$DOMWrapperBase$Dart = 1;
html623afa$ArrayBufferWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(html623afa$ArrayBufferWrappingImplementation$Dart, html623afa$DOMWrapperBase$Dart);
html623afa$ArrayBufferWrappingImplementation$Dart._wrap$html623afa$$Constructor_ = function(ptr){
  html623afa$DOMWrapperBase$Dart._wrap$html623afa$$Constructor_.call(this, ptr);
}
;
html623afa$ArrayBufferWrappingImplementation$Dart._wrap$html623afa$$Initializer_ = function(ptr){
  html623afa$DOMWrapperBase$Dart._wrap$html623afa$$Initializer_.call(this, ptr);
}
;
html623afa$ArrayBufferWrappingImplementation$Dart.ArrayBufferWrappingImplementation$_wrap$33$html623afa$$Factory_ = function(ptr){
  var tmp$0 = new html623afa$ArrayBufferWrappingImplementation$Dart;
  tmp$0.$typeInfo = html623afa$ArrayBufferWrappingImplementation$Dart.$lookupRTT();
  html623afa$ArrayBufferWrappingImplementation$Dart._wrap$html623afa$$Initializer_.call(tmp$0, ptr);
  html623afa$ArrayBufferWrappingImplementation$Dart._wrap$html623afa$$Constructor_.call(tmp$0, ptr);
  return tmp$0;
}
;
html623afa$ArrayBufferWrappingImplementation$Dart.prototype.byteLength$named = function(){
  return this.byteLength$getter().apply(this, arguments);
}
;
html623afa$ArrayBufferWrappingImplementation$Dart.prototype.byteLength$getter = function(){
  return this._ptr$html623afa$$getter_().byteLength$getter();
}
;
