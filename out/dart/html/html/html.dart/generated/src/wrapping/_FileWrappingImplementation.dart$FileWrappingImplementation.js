function html623afa$FileWrappingImplementation$Dart(){
}

html623afa$FileWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('html623afa$FileWrappingImplementation$Dart'), html623afa$FileWrappingImplementation$Dart.$RTTimplements);
}
;
html623afa$FileWrappingImplementation$Dart.$RTTimplements = function(rtt){
  html623afa$FileWrappingImplementation$Dart.$addTo(rtt);
}
;
html623afa$FileWrappingImplementation$Dart.$addTo = function(target){
  var rtt = html623afa$FileWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  html623afa$BlobWrappingImplementation$Dart.$addTo(target);
  html623afa$File$Dart.$addTo(target);
}
;
html623afa$FileWrappingImplementation$Dart.prototype.$implements$html623afa$FileWrappingImplementation$Dart = 1;
html623afa$FileWrappingImplementation$Dart.prototype.$implements$html623afa$File$Dart = 1;
html623afa$FileWrappingImplementation$Dart.prototype.$implements$html623afa$Blob$Dart = 1;
html623afa$FileWrappingImplementation$Dart.prototype.$implements$html623afa$BlobWrappingImplementation$Dart = 1;
html623afa$FileWrappingImplementation$Dart.prototype.$implements$html623afa$DOMWrapperBase$Dart = 1;
html623afa$FileWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(html623afa$FileWrappingImplementation$Dart, html623afa$BlobWrappingImplementation$Dart);
html623afa$FileWrappingImplementation$Dart._wrap$html623afa$$Constructor_ = function(ptr){
  html623afa$BlobWrappingImplementation$Dart._wrap$html623afa$$Constructor_.call(this, ptr);
}
;
html623afa$FileWrappingImplementation$Dart._wrap$html623afa$$Initializer_ = function(ptr){
  html623afa$BlobWrappingImplementation$Dart._wrap$html623afa$$Initializer_.call(this, ptr);
}
;
html623afa$FileWrappingImplementation$Dart.FileWrappingImplementation$_wrap$26$html623afa$$Factory_ = function(ptr){
  var tmp$0 = new html623afa$FileWrappingImplementation$Dart;
  tmp$0.$typeInfo = html623afa$FileWrappingImplementation$Dart.$lookupRTT();
  html623afa$FileWrappingImplementation$Dart._wrap$html623afa$$Initializer_.call(tmp$0, ptr);
  html623afa$FileWrappingImplementation$Dart._wrap$html623afa$$Constructor_.call(tmp$0, ptr);
  return tmp$0;
}
;
html623afa$FileWrappingImplementation$Dart.prototype.fileName$named = function(){
  return this.fileName$getter().apply(this, arguments);
}
;
html623afa$FileWrappingImplementation$Dart.prototype.fileName$getter = function(){
  return this._ptr$html623afa$$getter_().fileName$getter();
}
;
html623afa$FileWrappingImplementation$Dart.prototype.fileSize$named = function(){
  return this.fileSize$getter().apply(this, arguments);
}
;
html623afa$FileWrappingImplementation$Dart.prototype.fileSize$getter = function(){
  return this._ptr$html623afa$$getter_().fileSize$getter();
}
;
html623afa$FileWrappingImplementation$Dart.prototype.lastModifiedDate$named = function(){
  return this.lastModifiedDate$getter().apply(this, arguments);
}
;
html623afa$FileWrappingImplementation$Dart.prototype.lastModifiedDate$getter = function(){
  return this._ptr$html623afa$$getter_().lastModifiedDate$getter();
}
;
html623afa$FileWrappingImplementation$Dart.prototype.name$named = function(){
  return this.name$getter().apply(this, arguments);
}
;
html623afa$FileWrappingImplementation$Dart.prototype.name$getter = function(){
  return this._ptr$html623afa$$getter_().name$getter();
}
;
