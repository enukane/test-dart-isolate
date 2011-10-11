function html623afa$DOMFileSystemSyncWrappingImplementation$Dart(){
}

html623afa$DOMFileSystemSyncWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('html623afa$DOMFileSystemSyncWrappingImplementation$Dart'), html623afa$DOMFileSystemSyncWrappingImplementation$Dart.$RTTimplements);
}
;
html623afa$DOMFileSystemSyncWrappingImplementation$Dart.$RTTimplements = function(rtt){
  html623afa$DOMFileSystemSyncWrappingImplementation$Dart.$addTo(rtt);
}
;
html623afa$DOMFileSystemSyncWrappingImplementation$Dart.$addTo = function(target){
  var rtt = html623afa$DOMFileSystemSyncWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  html623afa$DOMWrapperBase$Dart.$addTo(target);
  html623afa$DOMFileSystemSync$Dart.$addTo(target);
}
;
html623afa$DOMFileSystemSyncWrappingImplementation$Dart.prototype.$implements$html623afa$DOMFileSystemSyncWrappingImplementation$Dart = 1;
html623afa$DOMFileSystemSyncWrappingImplementation$Dart.prototype.$implements$html623afa$DOMFileSystemSync$Dart = 1;
html623afa$DOMFileSystemSyncWrappingImplementation$Dart.prototype.$implements$html623afa$DOMWrapperBase$Dart = 1;
html623afa$DOMFileSystemSyncWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(html623afa$DOMFileSystemSyncWrappingImplementation$Dart, html623afa$DOMWrapperBase$Dart);
html623afa$DOMFileSystemSyncWrappingImplementation$Dart._wrap$html623afa$$Constructor_ = function(ptr){
  html623afa$DOMWrapperBase$Dart._wrap$html623afa$$Constructor_.call(this, ptr);
}
;
html623afa$DOMFileSystemSyncWrappingImplementation$Dart._wrap$html623afa$$Initializer_ = function(ptr){
  html623afa$DOMWrapperBase$Dart._wrap$html623afa$$Initializer_.call(this, ptr);
}
;
html623afa$DOMFileSystemSyncWrappingImplementation$Dart.DOMFileSystemSyncWrappingImplementation$_wrap$39$html623afa$$Factory_ = function(ptr){
  var tmp$0 = new html623afa$DOMFileSystemSyncWrappingImplementation$Dart;
  tmp$0.$typeInfo = html623afa$DOMFileSystemSyncWrappingImplementation$Dart.$lookupRTT();
  html623afa$DOMFileSystemSyncWrappingImplementation$Dart._wrap$html623afa$$Initializer_.call(tmp$0, ptr);
  html623afa$DOMFileSystemSyncWrappingImplementation$Dart._wrap$html623afa$$Constructor_.call(tmp$0, ptr);
  return tmp$0;
}
;
html623afa$DOMFileSystemSyncWrappingImplementation$Dart.prototype.name$named = function(){
  return this.name$getter().apply(this, arguments);
}
;
html623afa$DOMFileSystemSyncWrappingImplementation$Dart.prototype.name$getter = function(){
  return this._ptr$html623afa$$getter_().name$getter();
}
;
html623afa$DOMFileSystemSyncWrappingImplementation$Dart.prototype.root$named = function(){
  return this.root$getter().apply(this, arguments);
}
;
html623afa$DOMFileSystemSyncWrappingImplementation$Dart.prototype.root$getter = function(){
  return html623afa$LevelDom$Dart.wrapDirectoryEntrySync$member(this._ptr$html623afa$$getter_().root$getter());
}
;
