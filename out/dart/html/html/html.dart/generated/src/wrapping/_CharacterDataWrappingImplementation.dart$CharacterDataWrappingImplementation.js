function html623afa$CharacterDataWrappingImplementation$Dart(){
}

html623afa$CharacterDataWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('html623afa$CharacterDataWrappingImplementation$Dart'), html623afa$CharacterDataWrappingImplementation$Dart.$RTTimplements);
}
;
html623afa$CharacterDataWrappingImplementation$Dart.$RTTimplements = function(rtt){
  html623afa$CharacterDataWrappingImplementation$Dart.$addTo(rtt);
}
;
html623afa$CharacterDataWrappingImplementation$Dart.$addTo = function(target){
  var rtt = html623afa$CharacterDataWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  html623afa$NodeWrappingImplementation$Dart.$addTo(target);
  html623afa$CharacterData$Dart.$addTo(target);
}
;
html623afa$CharacterDataWrappingImplementation$Dart.prototype.$implements$html623afa$CharacterDataWrappingImplementation$Dart = 1;
html623afa$CharacterDataWrappingImplementation$Dart.prototype.$implements$html623afa$CharacterData$Dart = 1;
html623afa$CharacterDataWrappingImplementation$Dart.prototype.$implements$html623afa$Node$Dart = 1;
html623afa$CharacterDataWrappingImplementation$Dart.prototype.$implements$html623afa$EventTarget$Dart = 1;
html623afa$CharacterDataWrappingImplementation$Dart.prototype.$implements$html623afa$NodeWrappingImplementation$Dart = 1;
html623afa$CharacterDataWrappingImplementation$Dart.prototype.$implements$html623afa$EventTargetWrappingImplementation$Dart = 1;
html623afa$CharacterDataWrappingImplementation$Dart.prototype.$implements$html623afa$DOMWrapperBase$Dart = 1;
html623afa$CharacterDataWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(html623afa$CharacterDataWrappingImplementation$Dart, html623afa$NodeWrappingImplementation$Dart);
html623afa$CharacterDataWrappingImplementation$Dart._wrap$html623afa$$Constructor_ = function(ptr){
  html623afa$NodeWrappingImplementation$Dart._wrap$html623afa$$Constructor_.call(this, ptr);
}
;
html623afa$CharacterDataWrappingImplementation$Dart._wrap$html623afa$$Initializer_ = function(ptr){
  html623afa$NodeWrappingImplementation$Dart._wrap$html623afa$$Initializer_.call(this, ptr);
}
;
html623afa$CharacterDataWrappingImplementation$Dart.CharacterDataWrappingImplementation$_wrap$35$html623afa$$Factory_ = function(ptr){
  var tmp$0 = new html623afa$CharacterDataWrappingImplementation$Dart;
  tmp$0.$typeInfo = html623afa$CharacterDataWrappingImplementation$Dart.$lookupRTT();
  html623afa$CharacterDataWrappingImplementation$Dart._wrap$html623afa$$Initializer_.call(tmp$0, ptr);
  html623afa$CharacterDataWrappingImplementation$Dart._wrap$html623afa$$Constructor_.call(tmp$0, ptr);
  return tmp$0;
}
;
html623afa$CharacterDataWrappingImplementation$Dart.prototype.data$named = function(){
  return this.data$getter().apply(this, arguments);
}
;
html623afa$CharacterDataWrappingImplementation$Dart.prototype.data$getter = function(){
  return this._ptr$html623afa$$getter_().data$getter();
}
;
html623afa$CharacterDataWrappingImplementation$Dart.prototype.data$setter = function(value){
  var tmp$0;
  this._ptr$html623afa$$getter_().data$setter(tmp$0 = value) , tmp$0;
}
;
html623afa$CharacterDataWrappingImplementation$Dart.prototype.length$named = function(){
  return this.length$getter().apply(this, arguments);
}
;
html623afa$CharacterDataWrappingImplementation$Dart.prototype.length$getter = function(){
  return this._ptr$html623afa$$getter_().length$getter();
}
;
html623afa$CharacterDataWrappingImplementation$Dart.prototype.appendData$member = function(data){
  this._ptr$html623afa$$getter_().appendData$named(1, $noargs, data);
  return;
}
;
html623afa$CharacterDataWrappingImplementation$Dart.prototype.appendData$named = function($n, $o, data){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$CharacterDataWrappingImplementation$Dart.prototype.appendData$member.call(this, data);
}
;
html623afa$CharacterDataWrappingImplementation$Dart.prototype.appendData$getter = function appendData$getter(){
  return $bind(html623afa$CharacterDataWrappingImplementation$Dart.prototype.appendData$named, this);
}
;
html623afa$CharacterDataWrappingImplementation$Dart.prototype.deleteData$member = function(offset, length_0){
  this._ptr$html623afa$$getter_().deleteData$named(2, $noargs, offset, length_0);
  return;
}
;
html623afa$CharacterDataWrappingImplementation$Dart.prototype.deleteData$named = function($n, $o, offset, length_0){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return html623afa$CharacterDataWrappingImplementation$Dart.prototype.deleteData$member.call(this, offset, length_0);
}
;
html623afa$CharacterDataWrappingImplementation$Dart.prototype.deleteData$getter = function deleteData$getter(){
  return $bind(html623afa$CharacterDataWrappingImplementation$Dart.prototype.deleteData$named, this);
}
;
html623afa$CharacterDataWrappingImplementation$Dart.prototype.insertData$member = function(offset, data){
  this._ptr$html623afa$$getter_().insertData$named(2, $noargs, offset, data);
  return;
}
;
html623afa$CharacterDataWrappingImplementation$Dart.prototype.insertData$named = function($n, $o, offset, data){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return html623afa$CharacterDataWrappingImplementation$Dart.prototype.insertData$member.call(this, offset, data);
}
;
html623afa$CharacterDataWrappingImplementation$Dart.prototype.insertData$getter = function insertData$getter(){
  return $bind(html623afa$CharacterDataWrappingImplementation$Dart.prototype.insertData$named, this);
}
;
html623afa$CharacterDataWrappingImplementation$Dart.prototype.replaceData$member = function(offset, length_0, data){
  this._ptr$html623afa$$getter_().replaceData$named(3, $noargs, offset, length_0, data);
  return;
}
;
html623afa$CharacterDataWrappingImplementation$Dart.prototype.replaceData$named = function($n, $o, offset, length_0, data){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return html623afa$CharacterDataWrappingImplementation$Dart.prototype.replaceData$member.call(this, offset, length_0, data);
}
;
html623afa$CharacterDataWrappingImplementation$Dart.prototype.replaceData$getter = function replaceData$getter(){
  return $bind(html623afa$CharacterDataWrappingImplementation$Dart.prototype.replaceData$named, this);
}
;
html623afa$CharacterDataWrappingImplementation$Dart.prototype.substringData$member = function(offset, length_0){
  return this._ptr$html623afa$$getter_().substringData$named(2, $noargs, offset, length_0);
}
;
html623afa$CharacterDataWrappingImplementation$Dart.prototype.substringData$named = function($n, $o, offset, length_0){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return html623afa$CharacterDataWrappingImplementation$Dart.prototype.substringData$member.call(this, offset, length_0);
}
;
html623afa$CharacterDataWrappingImplementation$Dart.prototype.substringData$getter = function substringData$getter(){
  return $bind(html623afa$CharacterDataWrappingImplementation$Dart.prototype.substringData$named, this);
}
;
