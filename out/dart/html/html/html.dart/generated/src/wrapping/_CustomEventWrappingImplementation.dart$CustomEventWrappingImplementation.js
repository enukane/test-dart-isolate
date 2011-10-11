function html623afa$CustomEventWrappingImplementation$Dart(){
}

html623afa$CustomEventWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('html623afa$CustomEventWrappingImplementation$Dart'), html623afa$CustomEventWrappingImplementation$Dart.$RTTimplements);
}
;
html623afa$CustomEventWrappingImplementation$Dart.$RTTimplements = function(rtt){
  html623afa$CustomEventWrappingImplementation$Dart.$addTo(rtt);
}
;
html623afa$CustomEventWrappingImplementation$Dart.$addTo = function(target){
  var rtt = html623afa$CustomEventWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  html623afa$EventWrappingImplementation$Dart.$addTo(target);
  html623afa$CustomEvent$Dart.$addTo(target);
}
;
html623afa$CustomEventWrappingImplementation$Dart.prototype.$implements$html623afa$CustomEventWrappingImplementation$Dart = 1;
html623afa$CustomEventWrappingImplementation$Dart.prototype.$implements$html623afa$CustomEvent$Dart = 1;
html623afa$CustomEventWrappingImplementation$Dart.prototype.$implements$html623afa$Event$Dart = 1;
html623afa$CustomEventWrappingImplementation$Dart.prototype.$implements$html623afa$EventWrappingImplementation$Dart = 1;
html623afa$CustomEventWrappingImplementation$Dart.prototype.$implements$html623afa$DOMWrapperBase$Dart = 1;
html623afa$CustomEventWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(html623afa$CustomEventWrappingImplementation$Dart, html623afa$EventWrappingImplementation$Dart);
html623afa$CustomEventWrappingImplementation$Dart._wrap$html623afa$$Constructor_ = function(ptr){
  html623afa$EventWrappingImplementation$Dart._wrap$html623afa$$Constructor_.call(this, ptr);
}
;
html623afa$CustomEventWrappingImplementation$Dart._wrap$html623afa$$Initializer_ = function(ptr){
  html623afa$EventWrappingImplementation$Dart._wrap$html623afa$$Initializer_.call(this, ptr);
}
;
html623afa$CustomEventWrappingImplementation$Dart.CustomEventWrappingImplementation$_wrap$33$html623afa$$Factory_ = function(ptr){
  var tmp$0 = new html623afa$CustomEventWrappingImplementation$Dart;
  tmp$0.$typeInfo = html623afa$CustomEventWrappingImplementation$Dart.$lookupRTT();
  html623afa$CustomEventWrappingImplementation$Dart._wrap$html623afa$$Initializer_.call(tmp$0, ptr);
  html623afa$CustomEventWrappingImplementation$Dart._wrap$html623afa$$Constructor_.call(tmp$0, ptr);
  return tmp$0;
}
;
html623afa$CustomEventWrappingImplementation$Dart.prototype.detail$named = function(){
  return this.detail$getter().apply(this, arguments);
}
;
html623afa$CustomEventWrappingImplementation$Dart.prototype.detail$getter = function(){
  return this._ptr$html623afa$$getter_().detail$getter();
}
;
html623afa$CustomEventWrappingImplementation$Dart.prototype.initCustomEvent$member = function(typeArg, canBubbleArg, cancelableArg, detailArg){
  this._ptr$html623afa$$getter_().initCustomEvent$named(4, $noargs, typeArg, canBubbleArg, cancelableArg, html623afa$LevelDom$Dart.unwrapMaybePrimitive$member(detailArg));
  return;
}
;
html623afa$CustomEventWrappingImplementation$Dart.prototype.initCustomEvent$named = function($n, $o, typeArg, canBubbleArg, cancelableArg, detailArg){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 4)
    $nsme();
  return html623afa$CustomEventWrappingImplementation$Dart.prototype.initCustomEvent$member.call(this, typeArg, canBubbleArg, cancelableArg, detailArg);
}
;
html623afa$CustomEventWrappingImplementation$Dart.prototype.initCustomEvent$getter = function initCustomEvent$getter(){
  return $bind(html623afa$CustomEventWrappingImplementation$Dart.prototype.initCustomEvent$named, this);
}
;
