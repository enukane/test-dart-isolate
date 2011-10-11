function html623afa$ArrayBufferViewWrappingImplementation$Dart(){
}

html623afa$ArrayBufferViewWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('html623afa$ArrayBufferViewWrappingImplementation$Dart'), html623afa$ArrayBufferViewWrappingImplementation$Dart.$RTTimplements);
}
;
html623afa$ArrayBufferViewWrappingImplementation$Dart.$RTTimplements = function(rtt){
  html623afa$ArrayBufferViewWrappingImplementation$Dart.$addTo(rtt);
}
;
html623afa$ArrayBufferViewWrappingImplementation$Dart.$addTo = function(target){
  var rtt = html623afa$ArrayBufferViewWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  html623afa$DOMWrapperBase$Dart.$addTo(target);
  html623afa$ArrayBufferView$Dart.$addTo(target);
}
;
html623afa$ArrayBufferViewWrappingImplementation$Dart.prototype.$implements$html623afa$ArrayBufferViewWrappingImplementation$Dart = 1;
html623afa$ArrayBufferViewWrappingImplementation$Dart.prototype.$implements$html623afa$ArrayBufferView$Dart = 1;
html623afa$ArrayBufferViewWrappingImplementation$Dart.prototype.$implements$html623afa$DOMWrapperBase$Dart = 1;
html623afa$ArrayBufferViewWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(html623afa$ArrayBufferViewWrappingImplementation$Dart, html623afa$DOMWrapperBase$Dart);
html623afa$ArrayBufferViewWrappingImplementation$Dart._wrap$html623afa$$Constructor_ = function(ptr){
  html623afa$DOMWrapperBase$Dart._wrap$html623afa$$Constructor_.call(this, ptr);
}
;
html623afa$ArrayBufferViewWrappingImplementation$Dart._wrap$html623afa$$Initializer_ = function(ptr){
  html623afa$DOMWrapperBase$Dart._wrap$html623afa$$Initializer_.call(this, ptr);
}
;
html623afa$ArrayBufferViewWrappingImplementation$Dart.ArrayBufferViewWrappingImplementation$_wrap$37$html623afa$$Factory_ = function(ptr){
  var tmp$0 = new html623afa$ArrayBufferViewWrappingImplementation$Dart;
  tmp$0.$typeInfo = html623afa$ArrayBufferViewWrappingImplementation$Dart.$lookupRTT();
  html623afa$ArrayBufferViewWrappingImplementation$Dart._wrap$html623afa$$Initializer_.call(tmp$0, ptr);
  html623afa$ArrayBufferViewWrappingImplementation$Dart._wrap$html623afa$$Constructor_.call(tmp$0, ptr);
  return tmp$0;
}
;
html623afa$ArrayBufferViewWrappingImplementation$Dart.prototype.buffer$named = function(){
  return this.buffer$getter().apply(this, arguments);
}
;
html623afa$ArrayBufferViewWrappingImplementation$Dart.prototype.buffer$getter = function(){
  return html623afa$LevelDom$Dart.wrapArrayBuffer$member(this._ptr$html623afa$$getter_().buffer$getter());
}
;
html623afa$ArrayBufferViewWrappingImplementation$Dart.prototype.byteLength$named = function(){
  return this.byteLength$getter().apply(this, arguments);
}
;
html623afa$ArrayBufferViewWrappingImplementation$Dart.prototype.byteLength$getter = function(){
  return this._ptr$html623afa$$getter_().byteLength$getter();
}
;
html623afa$ArrayBufferViewWrappingImplementation$Dart.prototype.byteOffset$named = function(){
  return this.byteOffset$getter().apply(this, arguments);
}
;
html623afa$ArrayBufferViewWrappingImplementation$Dart.prototype.byteOffset$getter = function(){
  return this._ptr$html623afa$$getter_().byteOffset$getter();
}
;
