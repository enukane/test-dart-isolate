function html623afa$AnimationEventWrappingImplementation$Dart(){
}

html623afa$AnimationEventWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('html623afa$AnimationEventWrappingImplementation$Dart'), html623afa$AnimationEventWrappingImplementation$Dart.$RTTimplements);
}
;
html623afa$AnimationEventWrappingImplementation$Dart.$RTTimplements = function(rtt){
  html623afa$AnimationEventWrappingImplementation$Dart.$addTo(rtt);
}
;
html623afa$AnimationEventWrappingImplementation$Dart.$addTo = function(target){
  var rtt = html623afa$AnimationEventWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  html623afa$EventWrappingImplementation$Dart.$addTo(target);
  html623afa$AnimationEvent$Dart.$addTo(target);
}
;
html623afa$AnimationEventWrappingImplementation$Dart.prototype.$implements$html623afa$AnimationEventWrappingImplementation$Dart = 1;
html623afa$AnimationEventWrappingImplementation$Dart.prototype.$implements$html623afa$AnimationEvent$Dart = 1;
html623afa$AnimationEventWrappingImplementation$Dart.prototype.$implements$html623afa$Event$Dart = 1;
html623afa$AnimationEventWrappingImplementation$Dart.prototype.$implements$html623afa$EventWrappingImplementation$Dart = 1;
html623afa$AnimationEventWrappingImplementation$Dart.prototype.$implements$html623afa$DOMWrapperBase$Dart = 1;
html623afa$AnimationEventWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(html623afa$AnimationEventWrappingImplementation$Dart, html623afa$EventWrappingImplementation$Dart);
html623afa$AnimationEventWrappingImplementation$Dart._wrap$html623afa$$Constructor_ = function(ptr){
  html623afa$EventWrappingImplementation$Dart._wrap$html623afa$$Constructor_.call(this, ptr);
}
;
html623afa$AnimationEventWrappingImplementation$Dart._wrap$html623afa$$Initializer_ = function(ptr){
  html623afa$EventWrappingImplementation$Dart._wrap$html623afa$$Initializer_.call(this, ptr);
}
;
html623afa$AnimationEventWrappingImplementation$Dart.AnimationEventWrappingImplementation$_wrap$36$html623afa$$Factory_ = function(ptr){
  var tmp$0 = new html623afa$AnimationEventWrappingImplementation$Dart;
  tmp$0.$typeInfo = html623afa$AnimationEventWrappingImplementation$Dart.$lookupRTT();
  html623afa$AnimationEventWrappingImplementation$Dart._wrap$html623afa$$Initializer_.call(tmp$0, ptr);
  html623afa$AnimationEventWrappingImplementation$Dart._wrap$html623afa$$Constructor_.call(tmp$0, ptr);
  return tmp$0;
}
;
html623afa$AnimationEventWrappingImplementation$Dart.prototype.animationName$named = function(){
  return this.animationName$getter().apply(this, arguments);
}
;
html623afa$AnimationEventWrappingImplementation$Dart.prototype.animationName$getter = function(){
  return this._ptr$html623afa$$getter_().animationName$getter();
}
;
html623afa$AnimationEventWrappingImplementation$Dart.prototype.elapsedTime$named = function(){
  return this.elapsedTime$getter().apply(this, arguments);
}
;
html623afa$AnimationEventWrappingImplementation$Dart.prototype.elapsedTime$getter = function(){
  return this._ptr$html623afa$$getter_().elapsedTime$getter();
}
;
html623afa$AnimationEventWrappingImplementation$Dart.prototype.initWebKitAnimationEvent$member = function(typeArg, canBubbleArg, cancelableArg, animationNameArg, elapsedTimeArg){
  this._ptr$html623afa$$getter_().initWebKitAnimationEvent$named(5, $noargs, typeArg, canBubbleArg, cancelableArg, animationNameArg, elapsedTimeArg);
  return;
}
;
html623afa$AnimationEventWrappingImplementation$Dart.prototype.initWebKitAnimationEvent$named = function($n, $o, typeArg, canBubbleArg, cancelableArg, animationNameArg, elapsedTimeArg){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 5)
    $nsme();
  return html623afa$AnimationEventWrappingImplementation$Dart.prototype.initWebKitAnimationEvent$member.call(this, typeArg, canBubbleArg, cancelableArg, animationNameArg, elapsedTimeArg);
}
;
html623afa$AnimationEventWrappingImplementation$Dart.prototype.initWebKitAnimationEvent$getter = function initWebKitAnimationEvent$getter(){
  return $bind(html623afa$AnimationEventWrappingImplementation$Dart.prototype.initWebKitAnimationEvent$named, this);
}
;
