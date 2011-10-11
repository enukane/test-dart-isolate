function html623afa$MediaQueryListWrappingImplementation$Dart(){
}

html623afa$MediaQueryListWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('html623afa$MediaQueryListWrappingImplementation$Dart'), html623afa$MediaQueryListWrappingImplementation$Dart.$RTTimplements);
}
;
html623afa$MediaQueryListWrappingImplementation$Dart.$RTTimplements = function(rtt){
  html623afa$MediaQueryListWrappingImplementation$Dart.$addTo(rtt);
}
;
html623afa$MediaQueryListWrappingImplementation$Dart.$addTo = function(target){
  var rtt = html623afa$MediaQueryListWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  html623afa$DOMWrapperBase$Dart.$addTo(target);
  html623afa$MediaQueryList$Dart.$addTo(target);
}
;
html623afa$MediaQueryListWrappingImplementation$Dart.prototype.$implements$html623afa$MediaQueryListWrappingImplementation$Dart = 1;
html623afa$MediaQueryListWrappingImplementation$Dart.prototype.$implements$html623afa$MediaQueryList$Dart = 1;
html623afa$MediaQueryListWrappingImplementation$Dart.prototype.$implements$html623afa$DOMWrapperBase$Dart = 1;
html623afa$MediaQueryListWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(html623afa$MediaQueryListWrappingImplementation$Dart, html623afa$DOMWrapperBase$Dart);
html623afa$MediaQueryListWrappingImplementation$Dart._wrap$html623afa$$Constructor_ = function(ptr){
  html623afa$DOMWrapperBase$Dart._wrap$html623afa$$Constructor_.call(this, ptr);
}
;
html623afa$MediaQueryListWrappingImplementation$Dart._wrap$html623afa$$Initializer_ = function(ptr){
  html623afa$DOMWrapperBase$Dart._wrap$html623afa$$Initializer_.call(this, ptr);
}
;
html623afa$MediaQueryListWrappingImplementation$Dart.MediaQueryListWrappingImplementation$_wrap$36$html623afa$$Factory_ = function(ptr){
  var tmp$0 = new html623afa$MediaQueryListWrappingImplementation$Dart;
  tmp$0.$typeInfo = html623afa$MediaQueryListWrappingImplementation$Dart.$lookupRTT();
  html623afa$MediaQueryListWrappingImplementation$Dart._wrap$html623afa$$Initializer_.call(tmp$0, ptr);
  html623afa$MediaQueryListWrappingImplementation$Dart._wrap$html623afa$$Constructor_.call(tmp$0, ptr);
  return tmp$0;
}
;
html623afa$MediaQueryListWrappingImplementation$Dart.prototype.matches$named = function(){
  return this.matches$getter().apply(this, arguments);
}
;
html623afa$MediaQueryListWrappingImplementation$Dart.prototype.matches$getter = function(){
  return this._ptr$html623afa$$getter_().matches$getter();
}
;
html623afa$MediaQueryListWrappingImplementation$Dart.prototype.media$named = function(){
  return this.media$getter().apply(this, arguments);
}
;
html623afa$MediaQueryListWrappingImplementation$Dart.prototype.media$getter = function(){
  return this._ptr$html623afa$$getter_().media$getter();
}
;
html623afa$MediaQueryListWrappingImplementation$Dart.prototype.addListener$member = function(listener){
  this._ptr$html623afa$$getter_().addListener$named(1, $noargs, html623afa$LevelDom$Dart.unwrap$member(listener));
  return;
}
;
html623afa$MediaQueryListWrappingImplementation$Dart.prototype.addListener$named = function($n, $o, listener){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$MediaQueryListWrappingImplementation$Dart.prototype.addListener$member.call(this, listener);
}
;
html623afa$MediaQueryListWrappingImplementation$Dart.prototype.addListener$getter = function addListener$getter(){
  return $bind(html623afa$MediaQueryListWrappingImplementation$Dart.prototype.addListener$named, this);
}
;
html623afa$MediaQueryListWrappingImplementation$Dart.prototype.removeListener$member = function(listener){
  this._ptr$html623afa$$getter_().removeListener$named(1, $noargs, html623afa$LevelDom$Dart.unwrap$member(listener));
  return;
}
;
html623afa$MediaQueryListWrappingImplementation$Dart.prototype.removeListener$named = function($n, $o, listener){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$MediaQueryListWrappingImplementation$Dart.prototype.removeListener$member.call(this, listener);
}
;
html623afa$MediaQueryListWrappingImplementation$Dart.prototype.removeListener$getter = function removeListener$getter(){
  return $bind(html623afa$MediaQueryListWrappingImplementation$Dart.prototype.removeListener$named, this);
}
;
