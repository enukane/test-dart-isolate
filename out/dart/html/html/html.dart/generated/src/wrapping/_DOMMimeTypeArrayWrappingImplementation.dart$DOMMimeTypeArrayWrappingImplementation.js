function html623afa$DOMMimeTypeArrayWrappingImplementation$Dart(){
}

html623afa$DOMMimeTypeArrayWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('html623afa$DOMMimeTypeArrayWrappingImplementation$Dart'), html623afa$DOMMimeTypeArrayWrappingImplementation$Dart.$RTTimplements);
}
;
html623afa$DOMMimeTypeArrayWrappingImplementation$Dart.$RTTimplements = function(rtt){
  html623afa$DOMMimeTypeArrayWrappingImplementation$Dart.$addTo(rtt);
}
;
html623afa$DOMMimeTypeArrayWrappingImplementation$Dart.$addTo = function(target){
  var rtt = html623afa$DOMMimeTypeArrayWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  html623afa$DOMWrapperBase$Dart.$addTo(target);
  html623afa$DOMMimeTypeArray$Dart.$addTo(target);
}
;
html623afa$DOMMimeTypeArrayWrappingImplementation$Dart.prototype.$implements$html623afa$DOMMimeTypeArrayWrappingImplementation$Dart = 1;
html623afa$DOMMimeTypeArrayWrappingImplementation$Dart.prototype.$implements$html623afa$DOMMimeTypeArray$Dart = 1;
html623afa$DOMMimeTypeArrayWrappingImplementation$Dart.prototype.$implements$html623afa$DOMWrapperBase$Dart = 1;
html623afa$DOMMimeTypeArrayWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(html623afa$DOMMimeTypeArrayWrappingImplementation$Dart, html623afa$DOMWrapperBase$Dart);
html623afa$DOMMimeTypeArrayWrappingImplementation$Dart._wrap$html623afa$$Constructor_ = function(ptr){
  html623afa$DOMWrapperBase$Dart._wrap$html623afa$$Constructor_.call(this, ptr);
}
;
html623afa$DOMMimeTypeArrayWrappingImplementation$Dart._wrap$html623afa$$Initializer_ = function(ptr){
  html623afa$DOMWrapperBase$Dart._wrap$html623afa$$Initializer_.call(this, ptr);
}
;
html623afa$DOMMimeTypeArrayWrappingImplementation$Dart.DOMMimeTypeArrayWrappingImplementation$_wrap$38$html623afa$$Factory_ = function(ptr){
  var tmp$0 = new html623afa$DOMMimeTypeArrayWrappingImplementation$Dart;
  tmp$0.$typeInfo = html623afa$DOMMimeTypeArrayWrappingImplementation$Dart.$lookupRTT();
  html623afa$DOMMimeTypeArrayWrappingImplementation$Dart._wrap$html623afa$$Initializer_.call(tmp$0, ptr);
  html623afa$DOMMimeTypeArrayWrappingImplementation$Dart._wrap$html623afa$$Constructor_.call(tmp$0, ptr);
  return tmp$0;
}
;
html623afa$DOMMimeTypeArrayWrappingImplementation$Dart.prototype.length$named = function(){
  return this.length$getter().apply(this, arguments);
}
;
html623afa$DOMMimeTypeArrayWrappingImplementation$Dart.prototype.length$getter = function(){
  return this._ptr$html623afa$$getter_().length$getter();
}
;
html623afa$DOMMimeTypeArrayWrappingImplementation$Dart.prototype.item$member = function(index){
  return html623afa$LevelDom$Dart.wrapDOMMimeType$member(this._ptr$html623afa$$getter_().item$named(1, $noargs, index));
}
;
html623afa$DOMMimeTypeArrayWrappingImplementation$Dart.prototype.item$named = function($n, $o, index){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$DOMMimeTypeArrayWrappingImplementation$Dart.prototype.item$member.call(this, index);
}
;
html623afa$DOMMimeTypeArrayWrappingImplementation$Dart.prototype.item$getter = function item$getter(){
  return $bind(html623afa$DOMMimeTypeArrayWrappingImplementation$Dart.prototype.item$named, this);
}
;
html623afa$DOMMimeTypeArrayWrappingImplementation$Dart.prototype.namedItem$member = function(name_0){
  return html623afa$LevelDom$Dart.wrapDOMMimeType$member(this._ptr$html623afa$$getter_().namedItem$named(1, $noargs, name_0));
}
;
html623afa$DOMMimeTypeArrayWrappingImplementation$Dart.prototype.namedItem$named = function($n, $o, name_0){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$DOMMimeTypeArrayWrappingImplementation$Dart.prototype.namedItem$member.call(this, name_0);
}
;
html623afa$DOMMimeTypeArrayWrappingImplementation$Dart.prototype.namedItem$getter = function namedItem$getter(){
  return $bind(html623afa$DOMMimeTypeArrayWrappingImplementation$Dart.prototype.namedItem$named, this);
}
;
