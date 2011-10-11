function html623afa$StorageWrappingImplementation$Dart(){
}

html623afa$StorageWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('html623afa$StorageWrappingImplementation$Dart'), html623afa$StorageWrappingImplementation$Dart.$RTTimplements);
}
;
html623afa$StorageWrappingImplementation$Dart.$RTTimplements = function(rtt){
  html623afa$StorageWrappingImplementation$Dart.$addTo(rtt);
}
;
html623afa$StorageWrappingImplementation$Dart.$addTo = function(target){
  var rtt = html623afa$StorageWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  html623afa$DOMWrapperBase$Dart.$addTo(target);
  html623afa$Storage$Dart.$addTo(target);
}
;
html623afa$StorageWrappingImplementation$Dart.prototype.$implements$html623afa$StorageWrappingImplementation$Dart = 1;
html623afa$StorageWrappingImplementation$Dart.prototype.$implements$html623afa$Storage$Dart = 1;
html623afa$StorageWrappingImplementation$Dart.prototype.$implements$html623afa$DOMWrapperBase$Dart = 1;
html623afa$StorageWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(html623afa$StorageWrappingImplementation$Dart, html623afa$DOMWrapperBase$Dart);
html623afa$StorageWrappingImplementation$Dart._wrap$html623afa$$Constructor_ = function(ptr){
  html623afa$DOMWrapperBase$Dart._wrap$html623afa$$Constructor_.call(this, ptr);
}
;
html623afa$StorageWrappingImplementation$Dart._wrap$html623afa$$Initializer_ = function(ptr){
  html623afa$DOMWrapperBase$Dart._wrap$html623afa$$Initializer_.call(this, ptr);
}
;
html623afa$StorageWrappingImplementation$Dart.StorageWrappingImplementation$_wrap$29$html623afa$$Factory_ = function(ptr){
  var tmp$0 = new html623afa$StorageWrappingImplementation$Dart;
  tmp$0.$typeInfo = html623afa$StorageWrappingImplementation$Dart.$lookupRTT();
  html623afa$StorageWrappingImplementation$Dart._wrap$html623afa$$Initializer_.call(tmp$0, ptr);
  html623afa$StorageWrappingImplementation$Dart._wrap$html623afa$$Constructor_.call(tmp$0, ptr);
  return tmp$0;
}
;
html623afa$StorageWrappingImplementation$Dart.prototype.length$named = function(){
  return this.length$getter().apply(this, arguments);
}
;
html623afa$StorageWrappingImplementation$Dart.prototype.length$getter = function(){
  return this._ptr$html623afa$$getter_().length$getter();
}
;
html623afa$StorageWrappingImplementation$Dart.prototype.clear$member = function(){
  this._ptr$html623afa$$getter_().clear$named(0, $noargs);
  return;
}
;
html623afa$StorageWrappingImplementation$Dart.prototype.clear$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return html623afa$StorageWrappingImplementation$Dart.prototype.clear$member.call(this);
}
;
html623afa$StorageWrappingImplementation$Dart.prototype.clear$getter = function clear$getter(){
  return $bind(html623afa$StorageWrappingImplementation$Dart.prototype.clear$named, this);
}
;
html623afa$StorageWrappingImplementation$Dart.prototype.getItem$member = function(key){
  return this._ptr$html623afa$$getter_().getItem$named(1, $noargs, key);
}
;
html623afa$StorageWrappingImplementation$Dart.prototype.getItem$named = function($n, $o, key){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$StorageWrappingImplementation$Dart.prototype.getItem$member.call(this, key);
}
;
html623afa$StorageWrappingImplementation$Dart.prototype.getItem$getter = function getItem$getter(){
  return $bind(html623afa$StorageWrappingImplementation$Dart.prototype.getItem$named, this);
}
;
html623afa$StorageWrappingImplementation$Dart.prototype.key$member = function(index){
  return this._ptr$html623afa$$getter_().key$named(1, $noargs, index);
}
;
html623afa$StorageWrappingImplementation$Dart.prototype.key$named = function($n, $o, index){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$StorageWrappingImplementation$Dart.prototype.key$member.call(this, index);
}
;
html623afa$StorageWrappingImplementation$Dart.prototype.key$getter = function key$getter(){
  return $bind(html623afa$StorageWrappingImplementation$Dart.prototype.key$named, this);
}
;
html623afa$StorageWrappingImplementation$Dart.prototype.removeItem$member = function(key){
  this._ptr$html623afa$$getter_().removeItem$named(1, $noargs, key);
  return;
}
;
html623afa$StorageWrappingImplementation$Dart.prototype.removeItem$named = function($n, $o, key){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$StorageWrappingImplementation$Dart.prototype.removeItem$member.call(this, key);
}
;
html623afa$StorageWrappingImplementation$Dart.prototype.removeItem$getter = function removeItem$getter(){
  return $bind(html623afa$StorageWrappingImplementation$Dart.prototype.removeItem$named, this);
}
;
html623afa$StorageWrappingImplementation$Dart.prototype.setItem$member = function(key, data){
  this._ptr$html623afa$$getter_().setItem$named(2, $noargs, key, data);
  return;
}
;
html623afa$StorageWrappingImplementation$Dart.prototype.setItem$named = function($n, $o, key, data){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return html623afa$StorageWrappingImplementation$Dart.prototype.setItem$member.call(this, key, data);
}
;
html623afa$StorageWrappingImplementation$Dart.prototype.setItem$getter = function setItem$getter(){
  return $bind(html623afa$StorageWrappingImplementation$Dart.prototype.setItem$named, this);
}
;
