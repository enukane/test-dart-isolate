function html623afa$BlobWrappingImplementation$Dart(){
}

html623afa$BlobWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('html623afa$BlobWrappingImplementation$Dart'), html623afa$BlobWrappingImplementation$Dart.$RTTimplements);
}
;
html623afa$BlobWrappingImplementation$Dart.$RTTimplements = function(rtt){
  html623afa$BlobWrappingImplementation$Dart.$addTo(rtt);
}
;
html623afa$BlobWrappingImplementation$Dart.$addTo = function(target){
  var rtt = html623afa$BlobWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  html623afa$DOMWrapperBase$Dart.$addTo(target);
  html623afa$Blob$Dart.$addTo(target);
}
;
html623afa$BlobWrappingImplementation$Dart.prototype.$implements$html623afa$BlobWrappingImplementation$Dart = 1;
html623afa$BlobWrappingImplementation$Dart.prototype.$implements$html623afa$Blob$Dart = 1;
html623afa$BlobWrappingImplementation$Dart.prototype.$implements$html623afa$DOMWrapperBase$Dart = 1;
html623afa$BlobWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(html623afa$BlobWrappingImplementation$Dart, html623afa$DOMWrapperBase$Dart);
html623afa$BlobWrappingImplementation$Dart._wrap$html623afa$$Constructor_ = function(ptr){
  html623afa$DOMWrapperBase$Dart._wrap$html623afa$$Constructor_.call(this, ptr);
}
;
html623afa$BlobWrappingImplementation$Dart._wrap$html623afa$$Initializer_ = function(ptr){
  html623afa$DOMWrapperBase$Dart._wrap$html623afa$$Initializer_.call(this, ptr);
}
;
html623afa$BlobWrappingImplementation$Dart.BlobWrappingImplementation$_wrap$26$html623afa$$Factory_ = function(ptr){
  var tmp$0 = new html623afa$BlobWrappingImplementation$Dart;
  tmp$0.$typeInfo = html623afa$BlobWrappingImplementation$Dart.$lookupRTT();
  html623afa$BlobWrappingImplementation$Dart._wrap$html623afa$$Initializer_.call(tmp$0, ptr);
  html623afa$BlobWrappingImplementation$Dart._wrap$html623afa$$Constructor_.call(tmp$0, ptr);
  return tmp$0;
}
;
html623afa$BlobWrappingImplementation$Dart.prototype.size$named = function(){
  return this.size$getter().apply(this, arguments);
}
;
html623afa$BlobWrappingImplementation$Dart.prototype.size$getter = function(){
  return this._ptr$html623afa$$getter_().size$getter();
}
;
html623afa$BlobWrappingImplementation$Dart.prototype.type$named = function(){
  return this.type$getter().apply(this, arguments);
}
;
html623afa$BlobWrappingImplementation$Dart.prototype.type$getter = function(){
  return this._ptr$html623afa$$getter_().type$getter();
}
;
