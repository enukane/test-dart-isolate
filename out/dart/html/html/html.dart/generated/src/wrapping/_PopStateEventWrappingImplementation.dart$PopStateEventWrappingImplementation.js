function html623afa$PopStateEventWrappingImplementation$Dart(){
}

html623afa$PopStateEventWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('html623afa$PopStateEventWrappingImplementation$Dart'), html623afa$PopStateEventWrappingImplementation$Dart.$RTTimplements);
}
;
html623afa$PopStateEventWrappingImplementation$Dart.$RTTimplements = function(rtt){
  html623afa$PopStateEventWrappingImplementation$Dart.$addTo(rtt);
}
;
html623afa$PopStateEventWrappingImplementation$Dart.$addTo = function(target){
  var rtt = html623afa$PopStateEventWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  html623afa$EventWrappingImplementation$Dart.$addTo(target);
  html623afa$PopStateEvent$Dart.$addTo(target);
}
;
html623afa$PopStateEventWrappingImplementation$Dart.prototype.$implements$html623afa$PopStateEventWrappingImplementation$Dart = 1;
html623afa$PopStateEventWrappingImplementation$Dart.prototype.$implements$html623afa$PopStateEvent$Dart = 1;
html623afa$PopStateEventWrappingImplementation$Dart.prototype.$implements$html623afa$Event$Dart = 1;
html623afa$PopStateEventWrappingImplementation$Dart.prototype.$implements$html623afa$EventWrappingImplementation$Dart = 1;
html623afa$PopStateEventWrappingImplementation$Dart.prototype.$implements$html623afa$DOMWrapperBase$Dart = 1;
html623afa$PopStateEventWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(html623afa$PopStateEventWrappingImplementation$Dart, html623afa$EventWrappingImplementation$Dart);
html623afa$PopStateEventWrappingImplementation$Dart._wrap$html623afa$$Constructor_ = function(ptr){
  html623afa$EventWrappingImplementation$Dart._wrap$html623afa$$Constructor_.call(this, ptr);
}
;
html623afa$PopStateEventWrappingImplementation$Dart._wrap$html623afa$$Initializer_ = function(ptr){
  html623afa$EventWrappingImplementation$Dart._wrap$html623afa$$Initializer_.call(this, ptr);
}
;
html623afa$PopStateEventWrappingImplementation$Dart.PopStateEventWrappingImplementation$_wrap$35$html623afa$$Factory_ = function(ptr){
  var tmp$0 = new html623afa$PopStateEventWrappingImplementation$Dart;
  tmp$0.$typeInfo = html623afa$PopStateEventWrappingImplementation$Dart.$lookupRTT();
  html623afa$PopStateEventWrappingImplementation$Dart._wrap$html623afa$$Initializer_.call(tmp$0, ptr);
  html623afa$PopStateEventWrappingImplementation$Dart._wrap$html623afa$$Constructor_.call(tmp$0, ptr);
  return tmp$0;
}
;
html623afa$PopStateEventWrappingImplementation$Dart.prototype.state$named = function(){
  return this.state$getter().apply(this, arguments);
}
;
html623afa$PopStateEventWrappingImplementation$Dart.prototype.state$getter = function(){
  return this._ptr$html623afa$$getter_().state$getter();
}
;
html623afa$PopStateEventWrappingImplementation$Dart.prototype.initPopStateEvent$member = function(typeArg, canBubbleArg, cancelableArg, stateArg){
  this._ptr$html623afa$$getter_().initPopStateEvent$named(4, $noargs, typeArg, canBubbleArg, cancelableArg, html623afa$LevelDom$Dart.unwrapMaybePrimitive$member(stateArg));
  return;
}
;
html623afa$PopStateEventWrappingImplementation$Dart.prototype.initPopStateEvent$named = function($n, $o, typeArg, canBubbleArg, cancelableArg, stateArg){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 4)
    $nsme();
  return html623afa$PopStateEventWrappingImplementation$Dart.prototype.initPopStateEvent$member.call(this, typeArg, canBubbleArg, cancelableArg, stateArg);
}
;
html623afa$PopStateEventWrappingImplementation$Dart.prototype.initPopStateEvent$getter = function initPopStateEvent$getter(){
  return $bind(html623afa$PopStateEventWrappingImplementation$Dart.prototype.initPopStateEvent$named, this);
}
;
