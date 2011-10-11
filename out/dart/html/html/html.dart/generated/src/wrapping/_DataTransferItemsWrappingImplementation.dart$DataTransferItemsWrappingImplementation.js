function html623afa$DataTransferItemsWrappingImplementation$Dart(){
}

html623afa$DataTransferItemsWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('html623afa$DataTransferItemsWrappingImplementation$Dart'), html623afa$DataTransferItemsWrappingImplementation$Dart.$RTTimplements);
}
;
html623afa$DataTransferItemsWrappingImplementation$Dart.$RTTimplements = function(rtt){
  html623afa$DataTransferItemsWrappingImplementation$Dart.$addTo(rtt);
}
;
html623afa$DataTransferItemsWrappingImplementation$Dart.$addTo = function(target){
  var rtt = html623afa$DataTransferItemsWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  html623afa$DOMWrapperBase$Dart.$addTo(target);
  html623afa$DataTransferItems$Dart.$addTo(target);
}
;
html623afa$DataTransferItemsWrappingImplementation$Dart.prototype.$implements$html623afa$DataTransferItemsWrappingImplementation$Dart = 1;
html623afa$DataTransferItemsWrappingImplementation$Dart.prototype.$implements$html623afa$DataTransferItems$Dart = 1;
html623afa$DataTransferItemsWrappingImplementation$Dart.prototype.$implements$html623afa$DOMWrapperBase$Dart = 1;
html623afa$DataTransferItemsWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(html623afa$DataTransferItemsWrappingImplementation$Dart, html623afa$DOMWrapperBase$Dart);
html623afa$DataTransferItemsWrappingImplementation$Dart._wrap$html623afa$$Constructor_ = function(ptr){
  html623afa$DOMWrapperBase$Dart._wrap$html623afa$$Constructor_.call(this, ptr);
}
;
html623afa$DataTransferItemsWrappingImplementation$Dart._wrap$html623afa$$Initializer_ = function(ptr){
  html623afa$DOMWrapperBase$Dart._wrap$html623afa$$Initializer_.call(this, ptr);
}
;
html623afa$DataTransferItemsWrappingImplementation$Dart.DataTransferItemsWrappingImplementation$_wrap$39$html623afa$$Factory_ = function(ptr){
  var tmp$0 = new html623afa$DataTransferItemsWrappingImplementation$Dart;
  tmp$0.$typeInfo = html623afa$DataTransferItemsWrappingImplementation$Dart.$lookupRTT();
  html623afa$DataTransferItemsWrappingImplementation$Dart._wrap$html623afa$$Initializer_.call(tmp$0, ptr);
  html623afa$DataTransferItemsWrappingImplementation$Dart._wrap$html623afa$$Constructor_.call(tmp$0, ptr);
  return tmp$0;
}
;
html623afa$DataTransferItemsWrappingImplementation$Dart.prototype.length$named = function(){
  return this.length$getter().apply(this, arguments);
}
;
html623afa$DataTransferItemsWrappingImplementation$Dart.prototype.length$getter = function(){
  return this._ptr$html623afa$$getter_().length$getter();
}
;
html623afa$DataTransferItemsWrappingImplementation$Dart.prototype.add$member = function(data, type){
  this._ptr$html623afa$$getter_().add$named(2, $noargs, data, type);
  return;
}
;
html623afa$DataTransferItemsWrappingImplementation$Dart.prototype.add$named = function($n, $o, data, type){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return html623afa$DataTransferItemsWrappingImplementation$Dart.prototype.add$member.call(this, data, type);
}
;
html623afa$DataTransferItemsWrappingImplementation$Dart.prototype.add$getter = function add$getter(){
  return $bind(html623afa$DataTransferItemsWrappingImplementation$Dart.prototype.add$named, this);
}
;
html623afa$DataTransferItemsWrappingImplementation$Dart.prototype.clear$member = function(){
  this._ptr$html623afa$$getter_().clear$named(0, $noargs);
  return;
}
;
html623afa$DataTransferItemsWrappingImplementation$Dart.prototype.clear$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return html623afa$DataTransferItemsWrappingImplementation$Dart.prototype.clear$member.call(this);
}
;
html623afa$DataTransferItemsWrappingImplementation$Dart.prototype.clear$getter = function clear$getter(){
  return $bind(html623afa$DataTransferItemsWrappingImplementation$Dart.prototype.clear$named, this);
}
;
html623afa$DataTransferItemsWrappingImplementation$Dart.prototype.item$member = function(index){
  return html623afa$LevelDom$Dart.wrapDataTransferItem$member(this._ptr$html623afa$$getter_().item$named(1, $noargs, index));
}
;
html623afa$DataTransferItemsWrappingImplementation$Dart.prototype.item$named = function($n, $o, index){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$DataTransferItemsWrappingImplementation$Dart.prototype.item$member.call(this, index);
}
;
html623afa$DataTransferItemsWrappingImplementation$Dart.prototype.item$getter = function item$getter(){
  return $bind(html623afa$DataTransferItemsWrappingImplementation$Dart.prototype.item$named, this);
}
;
