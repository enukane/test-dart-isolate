function html623afa$PageTransitionEventWrappingImplementation$Dart(){
}

html623afa$PageTransitionEventWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('html623afa$PageTransitionEventWrappingImplementation$Dart'), html623afa$PageTransitionEventWrappingImplementation$Dart.$RTTimplements);
}
;
html623afa$PageTransitionEventWrappingImplementation$Dart.$RTTimplements = function(rtt){
  html623afa$PageTransitionEventWrappingImplementation$Dart.$addTo(rtt);
}
;
html623afa$PageTransitionEventWrappingImplementation$Dart.$addTo = function(target){
  var rtt = html623afa$PageTransitionEventWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  html623afa$EventWrappingImplementation$Dart.$addTo(target);
  html623afa$PageTransitionEvent$Dart.$addTo(target);
}
;
html623afa$PageTransitionEventWrappingImplementation$Dart.prototype.$implements$html623afa$PageTransitionEventWrappingImplementation$Dart = 1;
html623afa$PageTransitionEventWrappingImplementation$Dart.prototype.$implements$html623afa$PageTransitionEvent$Dart = 1;
html623afa$PageTransitionEventWrappingImplementation$Dart.prototype.$implements$html623afa$Event$Dart = 1;
html623afa$PageTransitionEventWrappingImplementation$Dart.prototype.$implements$html623afa$EventWrappingImplementation$Dart = 1;
html623afa$PageTransitionEventWrappingImplementation$Dart.prototype.$implements$html623afa$DOMWrapperBase$Dart = 1;
html623afa$PageTransitionEventWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(html623afa$PageTransitionEventWrappingImplementation$Dart, html623afa$EventWrappingImplementation$Dart);
html623afa$PageTransitionEventWrappingImplementation$Dart._wrap$html623afa$$Constructor_ = function(ptr){
  html623afa$EventWrappingImplementation$Dart._wrap$html623afa$$Constructor_.call(this, ptr);
}
;
html623afa$PageTransitionEventWrappingImplementation$Dart._wrap$html623afa$$Initializer_ = function(ptr){
  html623afa$EventWrappingImplementation$Dart._wrap$html623afa$$Initializer_.call(this, ptr);
}
;
html623afa$PageTransitionEventWrappingImplementation$Dart.PageTransitionEventWrappingImplementation$_wrap$41$html623afa$$Factory_ = function(ptr){
  var tmp$0 = new html623afa$PageTransitionEventWrappingImplementation$Dart;
  tmp$0.$typeInfo = html623afa$PageTransitionEventWrappingImplementation$Dart.$lookupRTT();
  html623afa$PageTransitionEventWrappingImplementation$Dart._wrap$html623afa$$Initializer_.call(tmp$0, ptr);
  html623afa$PageTransitionEventWrappingImplementation$Dart._wrap$html623afa$$Constructor_.call(tmp$0, ptr);
  return tmp$0;
}
;
html623afa$PageTransitionEventWrappingImplementation$Dart.prototype.persisted$named = function(){
  return this.persisted$getter().apply(this, arguments);
}
;
html623afa$PageTransitionEventWrappingImplementation$Dart.prototype.persisted$getter = function(){
  return this._ptr$html623afa$$getter_().persisted$getter();
}
;
html623afa$PageTransitionEventWrappingImplementation$Dart.prototype.initPageTransitionEvent$member = function(typeArg, canBubbleArg, cancelableArg, persisted){
  this._ptr$html623afa$$getter_().initPageTransitionEvent$named(4, $noargs, typeArg, canBubbleArg, cancelableArg, persisted);
  return;
}
;
html623afa$PageTransitionEventWrappingImplementation$Dart.prototype.initPageTransitionEvent$named = function($n, $o, typeArg, canBubbleArg, cancelableArg, persisted){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 4)
    $nsme();
  return html623afa$PageTransitionEventWrappingImplementation$Dart.prototype.initPageTransitionEvent$member.call(this, typeArg, canBubbleArg, cancelableArg, persisted);
}
;
html623afa$PageTransitionEventWrappingImplementation$Dart.prototype.initPageTransitionEvent$getter = function initPageTransitionEvent$getter(){
  return $bind(html623afa$PageTransitionEventWrappingImplementation$Dart.prototype.initPageTransitionEvent$named, this);
}
;
