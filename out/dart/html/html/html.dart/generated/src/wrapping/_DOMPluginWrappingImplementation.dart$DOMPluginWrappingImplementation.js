function html623afa$DOMPluginWrappingImplementation$Dart(){
}

html623afa$DOMPluginWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('html623afa$DOMPluginWrappingImplementation$Dart'), html623afa$DOMPluginWrappingImplementation$Dart.$RTTimplements);
}
;
html623afa$DOMPluginWrappingImplementation$Dart.$RTTimplements = function(rtt){
  html623afa$DOMPluginWrappingImplementation$Dart.$addTo(rtt);
}
;
html623afa$DOMPluginWrappingImplementation$Dart.$addTo = function(target){
  var rtt = html623afa$DOMPluginWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  html623afa$DOMWrapperBase$Dart.$addTo(target);
  html623afa$DOMPlugin$Dart.$addTo(target);
}
;
html623afa$DOMPluginWrappingImplementation$Dart.prototype.$implements$html623afa$DOMPluginWrappingImplementation$Dart = 1;
html623afa$DOMPluginWrappingImplementation$Dart.prototype.$implements$html623afa$DOMPlugin$Dart = 1;
html623afa$DOMPluginWrappingImplementation$Dart.prototype.$implements$html623afa$DOMWrapperBase$Dart = 1;
html623afa$DOMPluginWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(html623afa$DOMPluginWrappingImplementation$Dart, html623afa$DOMWrapperBase$Dart);
html623afa$DOMPluginWrappingImplementation$Dart._wrap$html623afa$$Constructor_ = function(ptr){
  html623afa$DOMWrapperBase$Dart._wrap$html623afa$$Constructor_.call(this, ptr);
}
;
html623afa$DOMPluginWrappingImplementation$Dart._wrap$html623afa$$Initializer_ = function(ptr){
  html623afa$DOMWrapperBase$Dart._wrap$html623afa$$Initializer_.call(this, ptr);
}
;
html623afa$DOMPluginWrappingImplementation$Dart.DOMPluginWrappingImplementation$_wrap$31$html623afa$$Factory_ = function(ptr){
  var tmp$0 = new html623afa$DOMPluginWrappingImplementation$Dart;
  tmp$0.$typeInfo = html623afa$DOMPluginWrappingImplementation$Dart.$lookupRTT();
  html623afa$DOMPluginWrappingImplementation$Dart._wrap$html623afa$$Initializer_.call(tmp$0, ptr);
  html623afa$DOMPluginWrappingImplementation$Dart._wrap$html623afa$$Constructor_.call(tmp$0, ptr);
  return tmp$0;
}
;
html623afa$DOMPluginWrappingImplementation$Dart.prototype.description$named = function(){
  return this.description$getter().apply(this, arguments);
}
;
html623afa$DOMPluginWrappingImplementation$Dart.prototype.description$getter = function(){
  return this._ptr$html623afa$$getter_().description$getter();
}
;
html623afa$DOMPluginWrappingImplementation$Dart.prototype.filename$named = function(){
  return this.filename$getter().apply(this, arguments);
}
;
html623afa$DOMPluginWrappingImplementation$Dart.prototype.filename$getter = function(){
  return this._ptr$html623afa$$getter_().filename$getter();
}
;
html623afa$DOMPluginWrappingImplementation$Dart.prototype.length$named = function(){
  return this.length$getter().apply(this, arguments);
}
;
html623afa$DOMPluginWrappingImplementation$Dart.prototype.length$getter = function(){
  return this._ptr$html623afa$$getter_().length$getter();
}
;
html623afa$DOMPluginWrappingImplementation$Dart.prototype.name$named = function(){
  return this.name$getter().apply(this, arguments);
}
;
html623afa$DOMPluginWrappingImplementation$Dart.prototype.name$getter = function(){
  return this._ptr$html623afa$$getter_().name$getter();
}
;
html623afa$DOMPluginWrappingImplementation$Dart.prototype.item$member = function(index){
  return html623afa$LevelDom$Dart.wrapDOMMimeType$member(this._ptr$html623afa$$getter_().item$named(1, $noargs, index));
}
;
html623afa$DOMPluginWrappingImplementation$Dart.prototype.item$named = function($n, $o, index){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$DOMPluginWrappingImplementation$Dart.prototype.item$member.call(this, index);
}
;
html623afa$DOMPluginWrappingImplementation$Dart.prototype.item$getter = function item$getter(){
  return $bind(html623afa$DOMPluginWrappingImplementation$Dart.prototype.item$named, this);
}
;
html623afa$DOMPluginWrappingImplementation$Dart.prototype.namedItem$member = function(name_0){
  return html623afa$LevelDom$Dart.wrapDOMMimeType$member(this._ptr$html623afa$$getter_().namedItem$named(1, $noargs, name_0));
}
;
html623afa$DOMPluginWrappingImplementation$Dart.prototype.namedItem$named = function($n, $o, name_0){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$DOMPluginWrappingImplementation$Dart.prototype.namedItem$member.call(this, name_0);
}
;
html623afa$DOMPluginWrappingImplementation$Dart.prototype.namedItem$getter = function namedItem$getter(){
  return $bind(html623afa$DOMPluginWrappingImplementation$Dart.prototype.namedItem$named, this);
}
;
