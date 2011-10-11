function html623afa$BeforeLoadEventWrappingImplementation$Dart(){
}

html623afa$BeforeLoadEventWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('html623afa$BeforeLoadEventWrappingImplementation$Dart'), html623afa$BeforeLoadEventWrappingImplementation$Dart.$RTTimplements);
}
;
html623afa$BeforeLoadEventWrappingImplementation$Dart.$RTTimplements = function(rtt){
  html623afa$BeforeLoadEventWrappingImplementation$Dart.$addTo(rtt);
}
;
html623afa$BeforeLoadEventWrappingImplementation$Dart.$addTo = function(target){
  var rtt = html623afa$BeforeLoadEventWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  html623afa$EventWrappingImplementation$Dart.$addTo(target);
  html623afa$BeforeLoadEvent$Dart.$addTo(target);
}
;
html623afa$BeforeLoadEventWrappingImplementation$Dart.prototype.$implements$html623afa$BeforeLoadEventWrappingImplementation$Dart = 1;
html623afa$BeforeLoadEventWrappingImplementation$Dart.prototype.$implements$html623afa$BeforeLoadEvent$Dart = 1;
html623afa$BeforeLoadEventWrappingImplementation$Dart.prototype.$implements$html623afa$Event$Dart = 1;
html623afa$BeforeLoadEventWrappingImplementation$Dart.prototype.$implements$html623afa$EventWrappingImplementation$Dart = 1;
html623afa$BeforeLoadEventWrappingImplementation$Dart.prototype.$implements$html623afa$DOMWrapperBase$Dart = 1;
html623afa$BeforeLoadEventWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(html623afa$BeforeLoadEventWrappingImplementation$Dart, html623afa$EventWrappingImplementation$Dart);
html623afa$BeforeLoadEventWrappingImplementation$Dart._wrap$html623afa$$Constructor_ = function(ptr){
  html623afa$EventWrappingImplementation$Dart._wrap$html623afa$$Constructor_.call(this, ptr);
}
;
html623afa$BeforeLoadEventWrappingImplementation$Dart._wrap$html623afa$$Initializer_ = function(ptr){
  html623afa$EventWrappingImplementation$Dart._wrap$html623afa$$Initializer_.call(this, ptr);
}
;
html623afa$BeforeLoadEventWrappingImplementation$Dart.BeforeLoadEventWrappingImplementation$_wrap$37$html623afa$$Factory_ = function(ptr){
  var tmp$0 = new html623afa$BeforeLoadEventWrappingImplementation$Dart;
  tmp$0.$typeInfo = html623afa$BeforeLoadEventWrappingImplementation$Dart.$lookupRTT();
  html623afa$BeforeLoadEventWrappingImplementation$Dart._wrap$html623afa$$Initializer_.call(tmp$0, ptr);
  html623afa$BeforeLoadEventWrappingImplementation$Dart._wrap$html623afa$$Constructor_.call(tmp$0, ptr);
  return tmp$0;
}
;
html623afa$BeforeLoadEventWrappingImplementation$Dart.prototype.url$named = function(){
  return this.url$getter().apply(this, arguments);
}
;
html623afa$BeforeLoadEventWrappingImplementation$Dart.prototype.url$getter = function(){
  return this._ptr$html623afa$$getter_().url$getter();
}
;
html623afa$BeforeLoadEventWrappingImplementation$Dart.prototype.initBeforeLoadEvent$member = function(type, canBubble, cancelable, url){
  this._ptr$html623afa$$getter_().initBeforeLoadEvent$named(4, $noargs, type, canBubble, cancelable, url);
  return;
}
;
html623afa$BeforeLoadEventWrappingImplementation$Dart.prototype.initBeforeLoadEvent$named = function($n, $o, type, canBubble, cancelable, url){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 4)
    $nsme();
  return html623afa$BeforeLoadEventWrappingImplementation$Dart.prototype.initBeforeLoadEvent$member.call(this, type, canBubble, cancelable, url);
}
;
html623afa$BeforeLoadEventWrappingImplementation$Dart.prototype.initBeforeLoadEvent$getter = function initBeforeLoadEvent$getter(){
  return $bind(html623afa$BeforeLoadEventWrappingImplementation$Dart.prototype.initBeforeLoadEvent$named, this);
}
;
