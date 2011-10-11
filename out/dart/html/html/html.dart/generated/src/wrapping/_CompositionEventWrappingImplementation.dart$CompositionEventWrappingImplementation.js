function html623afa$CompositionEventWrappingImplementation$Dart(){
}

html623afa$CompositionEventWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('html623afa$CompositionEventWrappingImplementation$Dart'), html623afa$CompositionEventWrappingImplementation$Dart.$RTTimplements);
}
;
html623afa$CompositionEventWrappingImplementation$Dart.$RTTimplements = function(rtt){
  html623afa$CompositionEventWrappingImplementation$Dart.$addTo(rtt);
}
;
html623afa$CompositionEventWrappingImplementation$Dart.$addTo = function(target){
  var rtt = html623afa$CompositionEventWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  html623afa$UIEventWrappingImplementation$Dart.$addTo(target);
  html623afa$CompositionEvent$Dart.$addTo(target);
}
;
html623afa$CompositionEventWrappingImplementation$Dart.prototype.$implements$html623afa$CompositionEventWrappingImplementation$Dart = 1;
html623afa$CompositionEventWrappingImplementation$Dart.prototype.$implements$html623afa$CompositionEvent$Dart = 1;
html623afa$CompositionEventWrappingImplementation$Dart.prototype.$implements$html623afa$UIEvent$Dart = 1;
html623afa$CompositionEventWrappingImplementation$Dart.prototype.$implements$html623afa$Event$Dart = 1;
html623afa$CompositionEventWrappingImplementation$Dart.prototype.$implements$html623afa$UIEventWrappingImplementation$Dart = 1;
html623afa$CompositionEventWrappingImplementation$Dart.prototype.$implements$html623afa$EventWrappingImplementation$Dart = 1;
html623afa$CompositionEventWrappingImplementation$Dart.prototype.$implements$html623afa$DOMWrapperBase$Dart = 1;
html623afa$CompositionEventWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(html623afa$CompositionEventWrappingImplementation$Dart, html623afa$UIEventWrappingImplementation$Dart);
html623afa$CompositionEventWrappingImplementation$Dart._wrap$html623afa$$Constructor_ = function(ptr){
  html623afa$UIEventWrappingImplementation$Dart._wrap$html623afa$$Constructor_.call(this, ptr);
}
;
html623afa$CompositionEventWrappingImplementation$Dart._wrap$html623afa$$Initializer_ = function(ptr){
  html623afa$UIEventWrappingImplementation$Dart._wrap$html623afa$$Initializer_.call(this, ptr);
}
;
html623afa$CompositionEventWrappingImplementation$Dart.CompositionEventWrappingImplementation$_wrap$38$html623afa$$Factory_ = function(ptr){
  var tmp$0 = new html623afa$CompositionEventWrappingImplementation$Dart;
  tmp$0.$typeInfo = html623afa$CompositionEventWrappingImplementation$Dart.$lookupRTT();
  html623afa$CompositionEventWrappingImplementation$Dart._wrap$html623afa$$Initializer_.call(tmp$0, ptr);
  html623afa$CompositionEventWrappingImplementation$Dart._wrap$html623afa$$Constructor_.call(tmp$0, ptr);
  return tmp$0;
}
;
html623afa$CompositionEventWrappingImplementation$Dart.prototype.data$named = function(){
  return this.data$getter().apply(this, arguments);
}
;
html623afa$CompositionEventWrappingImplementation$Dart.prototype.data$getter = function(){
  return this._ptr$html623afa$$getter_().data$getter();
}
;
html623afa$CompositionEventWrappingImplementation$Dart.prototype.initCompositionEvent$member = function(typeArg, canBubbleArg, cancelableArg, viewArg, dataArg){
  this._ptr$html623afa$$getter_().initCompositionEvent$named(5, $noargs, typeArg, canBubbleArg, cancelableArg, html623afa$LevelDom$Dart.unwrap$member(viewArg), dataArg);
  return;
}
;
html623afa$CompositionEventWrappingImplementation$Dart.prototype.initCompositionEvent$named = function($n, $o, typeArg, canBubbleArg, cancelableArg, viewArg, dataArg){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 5)
    $nsme();
  return html623afa$CompositionEventWrappingImplementation$Dart.prototype.initCompositionEvent$member.call(this, typeArg, canBubbleArg, cancelableArg, viewArg, dataArg);
}
;
html623afa$CompositionEventWrappingImplementation$Dart.prototype.initCompositionEvent$getter = function initCompositionEvent$getter(){
  return $bind(html623afa$CompositionEventWrappingImplementation$Dart.prototype.initCompositionEvent$named, this);
}
;
