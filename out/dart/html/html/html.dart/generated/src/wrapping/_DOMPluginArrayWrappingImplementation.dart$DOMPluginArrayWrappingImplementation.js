function html623afa$DOMPluginArrayWrappingImplementation$Dart(){
}

html623afa$DOMPluginArrayWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('html623afa$DOMPluginArrayWrappingImplementation$Dart'), html623afa$DOMPluginArrayWrappingImplementation$Dart.$RTTimplements);
}
;
html623afa$DOMPluginArrayWrappingImplementation$Dart.$RTTimplements = function(rtt){
  html623afa$DOMPluginArrayWrappingImplementation$Dart.$addTo(rtt);
}
;
html623afa$DOMPluginArrayWrappingImplementation$Dart.$addTo = function(target){
  var rtt = html623afa$DOMPluginArrayWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  html623afa$DOMWrapperBase$Dart.$addTo(target);
  html623afa$DOMPluginArray$Dart.$addTo(target);
}
;
html623afa$DOMPluginArrayWrappingImplementation$Dart.prototype.$implements$html623afa$DOMPluginArrayWrappingImplementation$Dart = 1;
html623afa$DOMPluginArrayWrappingImplementation$Dart.prototype.$implements$html623afa$DOMPluginArray$Dart = 1;
html623afa$DOMPluginArrayWrappingImplementation$Dart.prototype.$implements$html623afa$DOMWrapperBase$Dart = 1;
html623afa$DOMPluginArrayWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(html623afa$DOMPluginArrayWrappingImplementation$Dart, html623afa$DOMWrapperBase$Dart);
html623afa$DOMPluginArrayWrappingImplementation$Dart._wrap$html623afa$$Constructor_ = function(ptr){
  html623afa$DOMWrapperBase$Dart._wrap$html623afa$$Constructor_.call(this, ptr);
}
;
html623afa$DOMPluginArrayWrappingImplementation$Dart._wrap$html623afa$$Initializer_ = function(ptr){
  html623afa$DOMWrapperBase$Dart._wrap$html623afa$$Initializer_.call(this, ptr);
}
;
html623afa$DOMPluginArrayWrappingImplementation$Dart.DOMPluginArrayWrappingImplementation$_wrap$36$html623afa$$Factory_ = function(ptr){
  var tmp$0 = new html623afa$DOMPluginArrayWrappingImplementation$Dart;
  tmp$0.$typeInfo = html623afa$DOMPluginArrayWrappingImplementation$Dart.$lookupRTT();
  html623afa$DOMPluginArrayWrappingImplementation$Dart._wrap$html623afa$$Initializer_.call(tmp$0, ptr);
  html623afa$DOMPluginArrayWrappingImplementation$Dart._wrap$html623afa$$Constructor_.call(tmp$0, ptr);
  return tmp$0;
}
;
html623afa$DOMPluginArrayWrappingImplementation$Dart.prototype.length$named = function(){
  return this.length$getter().apply(this, arguments);
}
;
html623afa$DOMPluginArrayWrappingImplementation$Dart.prototype.length$getter = function(){
  return this._ptr$html623afa$$getter_().length$getter();
}
;
html623afa$DOMPluginArrayWrappingImplementation$Dart.prototype.item$member = function(index){
  return html623afa$LevelDom$Dart.wrapDOMPlugin$member(this._ptr$html623afa$$getter_().item$named(1, $noargs, index));
}
;
html623afa$DOMPluginArrayWrappingImplementation$Dart.prototype.item$named = function($n, $o, index){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$DOMPluginArrayWrappingImplementation$Dart.prototype.item$member.call(this, index);
}
;
html623afa$DOMPluginArrayWrappingImplementation$Dart.prototype.item$getter = function item$getter(){
  return $bind(html623afa$DOMPluginArrayWrappingImplementation$Dart.prototype.item$named, this);
}
;
html623afa$DOMPluginArrayWrappingImplementation$Dart.prototype.namedItem$member = function(name_0){
  return html623afa$LevelDom$Dart.wrapDOMPlugin$member(this._ptr$html623afa$$getter_().namedItem$named(1, $noargs, name_0));
}
;
html623afa$DOMPluginArrayWrappingImplementation$Dart.prototype.namedItem$named = function($n, $o, name_0){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$DOMPluginArrayWrappingImplementation$Dart.prototype.namedItem$member.call(this, name_0);
}
;
html623afa$DOMPluginArrayWrappingImplementation$Dart.prototype.namedItem$getter = function namedItem$getter(){
  return $bind(html623afa$DOMPluginArrayWrappingImplementation$Dart.prototype.namedItem$named, this);
}
;
html623afa$DOMPluginArrayWrappingImplementation$Dart.prototype.refresh$member = function(reload){
  this._ptr$html623afa$$getter_().refresh$named(1, $noargs, reload);
  return;
}
;
html623afa$DOMPluginArrayWrappingImplementation$Dart.prototype.refresh$named = function($n, $o, reload){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$DOMPluginArrayWrappingImplementation$Dart.prototype.refresh$member.call(this, reload);
}
;
html623afa$DOMPluginArrayWrappingImplementation$Dart.prototype.refresh$getter = function refresh$getter(){
  return $bind(html623afa$DOMPluginArrayWrappingImplementation$Dart.prototype.refresh$named, this);
}
;
