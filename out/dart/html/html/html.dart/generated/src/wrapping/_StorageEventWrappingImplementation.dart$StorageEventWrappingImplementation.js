function html623afa$StorageEventWrappingImplementation$Dart(){
}

html623afa$StorageEventWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('html623afa$StorageEventWrappingImplementation$Dart'), html623afa$StorageEventWrappingImplementation$Dart.$RTTimplements);
}
;
html623afa$StorageEventWrappingImplementation$Dart.$RTTimplements = function(rtt){
  html623afa$StorageEventWrappingImplementation$Dart.$addTo(rtt);
}
;
html623afa$StorageEventWrappingImplementation$Dart.$addTo = function(target){
  var rtt = html623afa$StorageEventWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  html623afa$EventWrappingImplementation$Dart.$addTo(target);
  html623afa$StorageEvent$Dart.$addTo(target);
}
;
html623afa$StorageEventWrappingImplementation$Dart.prototype.$implements$html623afa$StorageEventWrappingImplementation$Dart = 1;
html623afa$StorageEventWrappingImplementation$Dart.prototype.$implements$html623afa$StorageEvent$Dart = 1;
html623afa$StorageEventWrappingImplementation$Dart.prototype.$implements$html623afa$Event$Dart = 1;
html623afa$StorageEventWrappingImplementation$Dart.prototype.$implements$html623afa$EventWrappingImplementation$Dart = 1;
html623afa$StorageEventWrappingImplementation$Dart.prototype.$implements$html623afa$DOMWrapperBase$Dart = 1;
html623afa$StorageEventWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(html623afa$StorageEventWrappingImplementation$Dart, html623afa$EventWrappingImplementation$Dart);
html623afa$StorageEventWrappingImplementation$Dart._wrap$html623afa$$Constructor_ = function(ptr){
  html623afa$EventWrappingImplementation$Dart._wrap$html623afa$$Constructor_.call(this, ptr);
}
;
html623afa$StorageEventWrappingImplementation$Dart._wrap$html623afa$$Initializer_ = function(ptr){
  html623afa$EventWrappingImplementation$Dart._wrap$html623afa$$Initializer_.call(this, ptr);
}
;
html623afa$StorageEventWrappingImplementation$Dart.StorageEventWrappingImplementation$_wrap$34$html623afa$$Factory_ = function(ptr){
  var tmp$0 = new html623afa$StorageEventWrappingImplementation$Dart;
  tmp$0.$typeInfo = html623afa$StorageEventWrappingImplementation$Dart.$lookupRTT();
  html623afa$StorageEventWrappingImplementation$Dart._wrap$html623afa$$Initializer_.call(tmp$0, ptr);
  html623afa$StorageEventWrappingImplementation$Dart._wrap$html623afa$$Constructor_.call(tmp$0, ptr);
  return tmp$0;
}
;
html623afa$StorageEventWrappingImplementation$Dart.prototype.key$named = function(){
  return this.key$getter().apply(this, arguments);
}
;
html623afa$StorageEventWrappingImplementation$Dart.prototype.key$getter = function(){
  return this._ptr$html623afa$$getter_().key$getter();
}
;
html623afa$StorageEventWrappingImplementation$Dart.prototype.newValue$named = function(){
  return this.newValue$getter().apply(this, arguments);
}
;
html623afa$StorageEventWrappingImplementation$Dart.prototype.newValue$getter = function(){
  return this._ptr$html623afa$$getter_().newValue$getter();
}
;
html623afa$StorageEventWrappingImplementation$Dart.prototype.oldValue$named = function(){
  return this.oldValue$getter().apply(this, arguments);
}
;
html623afa$StorageEventWrappingImplementation$Dart.prototype.oldValue$getter = function(){
  return this._ptr$html623afa$$getter_().oldValue$getter();
}
;
html623afa$StorageEventWrappingImplementation$Dart.prototype.storageArea$named = function(){
  return this.storageArea$getter().apply(this, arguments);
}
;
html623afa$StorageEventWrappingImplementation$Dart.prototype.storageArea$getter = function(){
  return html623afa$LevelDom$Dart.wrapStorage$member(this._ptr$html623afa$$getter_().storageArea$getter());
}
;
html623afa$StorageEventWrappingImplementation$Dart.prototype.url$named = function(){
  return this.url$getter().apply(this, arguments);
}
;
html623afa$StorageEventWrappingImplementation$Dart.prototype.url$getter = function(){
  return this._ptr$html623afa$$getter_().url$getter();
}
;
html623afa$StorageEventWrappingImplementation$Dart.prototype.initStorageEvent$member = function(typeArg, canBubbleArg, cancelableArg, keyArg, oldValueArg, newValueArg, urlArg, storageAreaArg){
  this._ptr$html623afa$$getter_().initStorageEvent$named(8, $noargs, typeArg, canBubbleArg, cancelableArg, keyArg, oldValueArg, newValueArg, urlArg, html623afa$LevelDom$Dart.unwrap$member(storageAreaArg));
  return;
}
;
html623afa$StorageEventWrappingImplementation$Dart.prototype.initStorageEvent$named = function($n, $o, typeArg, canBubbleArg, cancelableArg, keyArg, oldValueArg, newValueArg, urlArg, storageAreaArg){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 8)
    $nsme();
  return html623afa$StorageEventWrappingImplementation$Dart.prototype.initStorageEvent$member.call(this, typeArg, canBubbleArg, cancelableArg, keyArg, oldValueArg, newValueArg, urlArg, storageAreaArg);
}
;
html623afa$StorageEventWrappingImplementation$Dart.prototype.initStorageEvent$getter = function initStorageEvent$getter(){
  return $bind(html623afa$StorageEventWrappingImplementation$Dart.prototype.initStorageEvent$named, this);
}
;
