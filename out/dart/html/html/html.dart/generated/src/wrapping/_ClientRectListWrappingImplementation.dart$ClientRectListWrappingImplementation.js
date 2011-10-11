function html623afa$ClientRectListWrappingImplementation$Dart(){
}

html623afa$ClientRectListWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('html623afa$ClientRectListWrappingImplementation$Dart'), html623afa$ClientRectListWrappingImplementation$Dart.$RTTimplements);
}
;
html623afa$ClientRectListWrappingImplementation$Dart.$RTTimplements = function(rtt){
  html623afa$ClientRectListWrappingImplementation$Dart.$addTo(rtt);
}
;
html623afa$ClientRectListWrappingImplementation$Dart.$addTo = function(target){
  var rtt = html623afa$ClientRectListWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  html623afa$DOMWrapperBase$Dart.$addTo(target);
  html623afa$ClientRectList$Dart.$addTo(target);
}
;
html623afa$ClientRectListWrappingImplementation$Dart.prototype.$implements$html623afa$ClientRectListWrappingImplementation$Dart = 1;
html623afa$ClientRectListWrappingImplementation$Dart.prototype.$implements$html623afa$ClientRectList$Dart = 1;
html623afa$ClientRectListWrappingImplementation$Dart.prototype.$implements$html623afa$DOMWrapperBase$Dart = 1;
html623afa$ClientRectListWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(html623afa$ClientRectListWrappingImplementation$Dart, html623afa$DOMWrapperBase$Dart);
html623afa$ClientRectListWrappingImplementation$Dart._wrap$html623afa$$Constructor_ = function(ptr){
  html623afa$DOMWrapperBase$Dart._wrap$html623afa$$Constructor_.call(this, ptr);
}
;
html623afa$ClientRectListWrappingImplementation$Dart._wrap$html623afa$$Initializer_ = function(ptr){
  html623afa$DOMWrapperBase$Dart._wrap$html623afa$$Initializer_.call(this, ptr);
}
;
html623afa$ClientRectListWrappingImplementation$Dart.ClientRectListWrappingImplementation$_wrap$36$html623afa$$Factory_ = function(ptr){
  var tmp$0 = new html623afa$ClientRectListWrappingImplementation$Dart;
  tmp$0.$typeInfo = html623afa$ClientRectListWrappingImplementation$Dart.$lookupRTT();
  html623afa$ClientRectListWrappingImplementation$Dart._wrap$html623afa$$Initializer_.call(tmp$0, ptr);
  html623afa$ClientRectListWrappingImplementation$Dart._wrap$html623afa$$Constructor_.call(tmp$0, ptr);
  return tmp$0;
}
;
html623afa$ClientRectListWrappingImplementation$Dart.prototype.length$named = function(){
  return this.length$getter().apply(this, arguments);
}
;
html623afa$ClientRectListWrappingImplementation$Dart.prototype.length$getter = function(){
  return this._ptr$html623afa$$getter_().length$getter();
}
;
html623afa$ClientRectListWrappingImplementation$Dart.prototype.item$member = function(index){
  return html623afa$LevelDom$Dart.wrapClientRect$member(this._ptr$html623afa$$getter_().item$named(1, $noargs, index));
}
;
html623afa$ClientRectListWrappingImplementation$Dart.prototype.item$named = function($n, $o, index){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$ClientRectListWrappingImplementation$Dart.prototype.item$member.call(this, index);
}
;
html623afa$ClientRectListWrappingImplementation$Dart.prototype.item$getter = function item$getter(){
  return $bind(html623afa$ClientRectListWrappingImplementation$Dart.prototype.item$named, this);
}
;
