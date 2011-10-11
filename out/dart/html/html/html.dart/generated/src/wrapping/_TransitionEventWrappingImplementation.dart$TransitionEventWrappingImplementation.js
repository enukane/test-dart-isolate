function html623afa$TransitionEventWrappingImplementation$Dart(){
}

html623afa$TransitionEventWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('html623afa$TransitionEventWrappingImplementation$Dart'), html623afa$TransitionEventWrappingImplementation$Dart.$RTTimplements);
}
;
html623afa$TransitionEventWrappingImplementation$Dart.$RTTimplements = function(rtt){
  html623afa$TransitionEventWrappingImplementation$Dart.$addTo(rtt);
}
;
html623afa$TransitionEventWrappingImplementation$Dart.$addTo = function(target){
  var rtt = html623afa$TransitionEventWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  html623afa$EventWrappingImplementation$Dart.$addTo(target);
  html623afa$TransitionEvent$Dart.$addTo(target);
}
;
html623afa$TransitionEventWrappingImplementation$Dart.prototype.$implements$html623afa$TransitionEventWrappingImplementation$Dart = 1;
html623afa$TransitionEventWrappingImplementation$Dart.prototype.$implements$html623afa$TransitionEvent$Dart = 1;
html623afa$TransitionEventWrappingImplementation$Dart.prototype.$implements$html623afa$Event$Dart = 1;
html623afa$TransitionEventWrappingImplementation$Dart.prototype.$implements$html623afa$EventWrappingImplementation$Dart = 1;
html623afa$TransitionEventWrappingImplementation$Dart.prototype.$implements$html623afa$DOMWrapperBase$Dart = 1;
html623afa$TransitionEventWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(html623afa$TransitionEventWrappingImplementation$Dart, html623afa$EventWrappingImplementation$Dart);
html623afa$TransitionEventWrappingImplementation$Dart._wrap$html623afa$$Constructor_ = function(ptr){
  html623afa$EventWrappingImplementation$Dart._wrap$html623afa$$Constructor_.call(this, ptr);
}
;
html623afa$TransitionEventWrappingImplementation$Dart._wrap$html623afa$$Initializer_ = function(ptr){
  html623afa$EventWrappingImplementation$Dart._wrap$html623afa$$Initializer_.call(this, ptr);
}
;
html623afa$TransitionEventWrappingImplementation$Dart.TransitionEventWrappingImplementation$_wrap$37$html623afa$$Factory_ = function(ptr){
  var tmp$0 = new html623afa$TransitionEventWrappingImplementation$Dart;
  tmp$0.$typeInfo = html623afa$TransitionEventWrappingImplementation$Dart.$lookupRTT();
  html623afa$TransitionEventWrappingImplementation$Dart._wrap$html623afa$$Initializer_.call(tmp$0, ptr);
  html623afa$TransitionEventWrappingImplementation$Dart._wrap$html623afa$$Constructor_.call(tmp$0, ptr);
  return tmp$0;
}
;
html623afa$TransitionEventWrappingImplementation$Dart.prototype.elapsedTime$named = function(){
  return this.elapsedTime$getter().apply(this, arguments);
}
;
html623afa$TransitionEventWrappingImplementation$Dart.prototype.elapsedTime$getter = function(){
  return this._ptr$html623afa$$getter_().elapsedTime$getter();
}
;
html623afa$TransitionEventWrappingImplementation$Dart.prototype.propertyName$named = function(){
  return this.propertyName$getter().apply(this, arguments);
}
;
html623afa$TransitionEventWrappingImplementation$Dart.prototype.propertyName$getter = function(){
  return this._ptr$html623afa$$getter_().propertyName$getter();
}
;
html623afa$TransitionEventWrappingImplementation$Dart.prototype.initWebKitTransitionEvent$member = function(typeArg, canBubbleArg, cancelableArg, propertyNameArg, elapsedTimeArg){
  this._ptr$html623afa$$getter_().initWebKitTransitionEvent$named(5, $noargs, typeArg, canBubbleArg, cancelableArg, propertyNameArg, elapsedTimeArg);
  return;
}
;
html623afa$TransitionEventWrappingImplementation$Dart.prototype.initWebKitTransitionEvent$named = function($n, $o, typeArg, canBubbleArg, cancelableArg, propertyNameArg, elapsedTimeArg){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 5)
    $nsme();
  return html623afa$TransitionEventWrappingImplementation$Dart.prototype.initWebKitTransitionEvent$member.call(this, typeArg, canBubbleArg, cancelableArg, propertyNameArg, elapsedTimeArg);
}
;
html623afa$TransitionEventWrappingImplementation$Dart.prototype.initWebKitTransitionEvent$getter = function initWebKitTransitionEvent$getter(){
  return $bind(html623afa$TransitionEventWrappingImplementation$Dart.prototype.initWebKitTransitionEvent$named, this);
}
;
