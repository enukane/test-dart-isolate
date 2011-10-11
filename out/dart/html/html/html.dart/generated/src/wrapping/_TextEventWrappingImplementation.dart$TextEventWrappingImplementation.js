function html623afa$TextEventWrappingImplementation$Dart(){
}

html623afa$TextEventWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('html623afa$TextEventWrappingImplementation$Dart'), html623afa$TextEventWrappingImplementation$Dart.$RTTimplements);
}
;
html623afa$TextEventWrappingImplementation$Dart.$RTTimplements = function(rtt){
  html623afa$TextEventWrappingImplementation$Dart.$addTo(rtt);
}
;
html623afa$TextEventWrappingImplementation$Dart.$addTo = function(target){
  var rtt = html623afa$TextEventWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  html623afa$UIEventWrappingImplementation$Dart.$addTo(target);
  html623afa$TextEvent$Dart.$addTo(target);
}
;
html623afa$TextEventWrappingImplementation$Dart.prototype.$implements$html623afa$TextEventWrappingImplementation$Dart = 1;
html623afa$TextEventWrappingImplementation$Dart.prototype.$implements$html623afa$TextEvent$Dart = 1;
html623afa$TextEventWrappingImplementation$Dart.prototype.$implements$html623afa$UIEvent$Dart = 1;
html623afa$TextEventWrappingImplementation$Dart.prototype.$implements$html623afa$Event$Dart = 1;
html623afa$TextEventWrappingImplementation$Dart.prototype.$implements$html623afa$UIEventWrappingImplementation$Dart = 1;
html623afa$TextEventWrappingImplementation$Dart.prototype.$implements$html623afa$EventWrappingImplementation$Dart = 1;
html623afa$TextEventWrappingImplementation$Dart.prototype.$implements$html623afa$DOMWrapperBase$Dart = 1;
html623afa$TextEventWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(html623afa$TextEventWrappingImplementation$Dart, html623afa$UIEventWrappingImplementation$Dart);
html623afa$TextEventWrappingImplementation$Dart._wrap$html623afa$$Constructor_ = function(ptr){
  html623afa$UIEventWrappingImplementation$Dart._wrap$html623afa$$Constructor_.call(this, ptr);
}
;
html623afa$TextEventWrappingImplementation$Dart._wrap$html623afa$$Initializer_ = function(ptr){
  html623afa$UIEventWrappingImplementation$Dart._wrap$html623afa$$Initializer_.call(this, ptr);
}
;
html623afa$TextEventWrappingImplementation$Dart.TextEventWrappingImplementation$_wrap$31$html623afa$$Factory_ = function(ptr){
  var tmp$0 = new html623afa$TextEventWrappingImplementation$Dart;
  tmp$0.$typeInfo = html623afa$TextEventWrappingImplementation$Dart.$lookupRTT();
  html623afa$TextEventWrappingImplementation$Dart._wrap$html623afa$$Initializer_.call(tmp$0, ptr);
  html623afa$TextEventWrappingImplementation$Dart._wrap$html623afa$$Constructor_.call(tmp$0, ptr);
  return tmp$0;
}
;
html623afa$TextEventWrappingImplementation$Dart.prototype.data$named = function(){
  return this.data$getter().apply(this, arguments);
}
;
html623afa$TextEventWrappingImplementation$Dart.prototype.data$getter = function(){
  return this._ptr$html623afa$$getter_().data$getter();
}
;
html623afa$TextEventWrappingImplementation$Dart.prototype.initTextEvent$member = function(typeArg, canBubbleArg, cancelableArg, viewArg, dataArg){
  this._ptr$html623afa$$getter_().initTextEvent$named(5, $noargs, typeArg, canBubbleArg, cancelableArg, html623afa$LevelDom$Dart.unwrap$member(viewArg), dataArg);
  return;
}
;
html623afa$TextEventWrappingImplementation$Dart.prototype.initTextEvent$named = function($n, $o, typeArg, canBubbleArg, cancelableArg, viewArg, dataArg){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 5)
    $nsme();
  return html623afa$TextEventWrappingImplementation$Dart.prototype.initTextEvent$member.call(this, typeArg, canBubbleArg, cancelableArg, viewArg, dataArg);
}
;
html623afa$TextEventWrappingImplementation$Dart.prototype.initTextEvent$getter = function initTextEvent$getter(){
  return $bind(html623afa$TextEventWrappingImplementation$Dart.prototype.initTextEvent$named, this);
}
;
