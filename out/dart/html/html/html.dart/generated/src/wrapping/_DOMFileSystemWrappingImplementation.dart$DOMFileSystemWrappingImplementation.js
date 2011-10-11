function html623afa$DOMFileSystemWrappingImplementation$Dart(){
}

html623afa$DOMFileSystemWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('html623afa$DOMFileSystemWrappingImplementation$Dart'), html623afa$DOMFileSystemWrappingImplementation$Dart.$RTTimplements);
}
;
html623afa$DOMFileSystemWrappingImplementation$Dart.$RTTimplements = function(rtt){
  html623afa$DOMFileSystemWrappingImplementation$Dart.$addTo(rtt);
}
;
html623afa$DOMFileSystemWrappingImplementation$Dart.$addTo = function(target){
  var rtt = html623afa$DOMFileSystemWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  html623afa$DOMWrapperBase$Dart.$addTo(target);
  html623afa$DOMFileSystem$Dart.$addTo(target);
}
;
html623afa$DOMFileSystemWrappingImplementation$Dart.prototype.$implements$html623afa$DOMFileSystemWrappingImplementation$Dart = 1;
html623afa$DOMFileSystemWrappingImplementation$Dart.prototype.$implements$html623afa$DOMFileSystem$Dart = 1;
html623afa$DOMFileSystemWrappingImplementation$Dart.prototype.$implements$html623afa$DOMWrapperBase$Dart = 1;
html623afa$DOMFileSystemWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(html623afa$DOMFileSystemWrappingImplementation$Dart, html623afa$DOMWrapperBase$Dart);
html623afa$DOMFileSystemWrappingImplementation$Dart._wrap$html623afa$$Constructor_ = function(ptr){
  html623afa$DOMWrapperBase$Dart._wrap$html623afa$$Constructor_.call(this, ptr);
}
;
html623afa$DOMFileSystemWrappingImplementation$Dart._wrap$html623afa$$Initializer_ = function(ptr){
  html623afa$DOMWrapperBase$Dart._wrap$html623afa$$Initializer_.call(this, ptr);
}
;
html623afa$DOMFileSystemWrappingImplementation$Dart.DOMFileSystemWrappingImplementation$_wrap$35$html623afa$$Factory_ = function(ptr){
  var tmp$0 = new html623afa$DOMFileSystemWrappingImplementation$Dart;
  tmp$0.$typeInfo = html623afa$DOMFileSystemWrappingImplementation$Dart.$lookupRTT();
  html623afa$DOMFileSystemWrappingImplementation$Dart._wrap$html623afa$$Initializer_.call(tmp$0, ptr);
  html623afa$DOMFileSystemWrappingImplementation$Dart._wrap$html623afa$$Constructor_.call(tmp$0, ptr);
  return tmp$0;
}
;
html623afa$DOMFileSystemWrappingImplementation$Dart.prototype.name$named = function(){
  return this.name$getter().apply(this, arguments);
}
;
html623afa$DOMFileSystemWrappingImplementation$Dart.prototype.name$getter = function(){
  return this._ptr$html623afa$$getter_().name$getter();
}
;
html623afa$DOMFileSystemWrappingImplementation$Dart.prototype.root$named = function(){
  return this.root$getter().apply(this, arguments);
}
;
html623afa$DOMFileSystemWrappingImplementation$Dart.prototype.root$getter = function(){
  return html623afa$LevelDom$Dart.wrapDirectoryEntry$member(this._ptr$html623afa$$getter_().root$getter());
}
;
