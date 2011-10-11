function html623afa$CloseEventWrappingImplementation$Dart(){
}

html623afa$CloseEventWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('html623afa$CloseEventWrappingImplementation$Dart'), html623afa$CloseEventWrappingImplementation$Dart.$RTTimplements);
}
;
html623afa$CloseEventWrappingImplementation$Dart.$RTTimplements = function(rtt){
  html623afa$CloseEventWrappingImplementation$Dart.$addTo(rtt);
}
;
html623afa$CloseEventWrappingImplementation$Dart.$addTo = function(target){
  var rtt = html623afa$CloseEventWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  html623afa$EventWrappingImplementation$Dart.$addTo(target);
  html623afa$CloseEvent$Dart.$addTo(target);
}
;
html623afa$CloseEventWrappingImplementation$Dart.prototype.$implements$html623afa$CloseEventWrappingImplementation$Dart = 1;
html623afa$CloseEventWrappingImplementation$Dart.prototype.$implements$html623afa$CloseEvent$Dart = 1;
html623afa$CloseEventWrappingImplementation$Dart.prototype.$implements$html623afa$Event$Dart = 1;
html623afa$CloseEventWrappingImplementation$Dart.prototype.$implements$html623afa$EventWrappingImplementation$Dart = 1;
html623afa$CloseEventWrappingImplementation$Dart.prototype.$implements$html623afa$DOMWrapperBase$Dart = 1;
html623afa$CloseEventWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(html623afa$CloseEventWrappingImplementation$Dart, html623afa$EventWrappingImplementation$Dart);
html623afa$CloseEventWrappingImplementation$Dart._wrap$html623afa$$Constructor_ = function(ptr){
  html623afa$EventWrappingImplementation$Dart._wrap$html623afa$$Constructor_.call(this, ptr);
}
;
html623afa$CloseEventWrappingImplementation$Dart._wrap$html623afa$$Initializer_ = function(ptr){
  html623afa$EventWrappingImplementation$Dart._wrap$html623afa$$Initializer_.call(this, ptr);
}
;
html623afa$CloseEventWrappingImplementation$Dart.CloseEventWrappingImplementation$_wrap$32$html623afa$$Factory_ = function(ptr){
  var tmp$0 = new html623afa$CloseEventWrappingImplementation$Dart;
  tmp$0.$typeInfo = html623afa$CloseEventWrappingImplementation$Dart.$lookupRTT();
  html623afa$CloseEventWrappingImplementation$Dart._wrap$html623afa$$Initializer_.call(tmp$0, ptr);
  html623afa$CloseEventWrappingImplementation$Dart._wrap$html623afa$$Constructor_.call(tmp$0, ptr);
  return tmp$0;
}
;
html623afa$CloseEventWrappingImplementation$Dart.prototype.code$named = function(){
  return this.code$getter().apply(this, arguments);
}
;
html623afa$CloseEventWrappingImplementation$Dart.prototype.code$getter = function(){
  return this._ptr$html623afa$$getter_().code$getter();
}
;
html623afa$CloseEventWrappingImplementation$Dart.prototype.reason$named = function(){
  return this.reason$getter().apply(this, arguments);
}
;
html623afa$CloseEventWrappingImplementation$Dart.prototype.reason$getter = function(){
  return this._ptr$html623afa$$getter_().reason$getter();
}
;
html623afa$CloseEventWrappingImplementation$Dart.prototype.wasClean$named = function(){
  return this.wasClean$getter().apply(this, arguments);
}
;
html623afa$CloseEventWrappingImplementation$Dart.prototype.wasClean$getter = function(){
  return this._ptr$html623afa$$getter_().wasClean$getter();
}
;
html623afa$CloseEventWrappingImplementation$Dart.prototype.initCloseEvent$member = function(typeArg, canBubbleArg, cancelableArg, wasCleanArg, codeArg, reasonArg){
  this._ptr$html623afa$$getter_().initCloseEvent$named(6, $noargs, typeArg, canBubbleArg, cancelableArg, wasCleanArg, codeArg, reasonArg);
  return;
}
;
html623afa$CloseEventWrappingImplementation$Dart.prototype.initCloseEvent$named = function($n, $o, typeArg, canBubbleArg, cancelableArg, wasCleanArg, codeArg, reasonArg){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 6)
    $nsme();
  return html623afa$CloseEventWrappingImplementation$Dart.prototype.initCloseEvent$member.call(this, typeArg, canBubbleArg, cancelableArg, wasCleanArg, codeArg, reasonArg);
}
;
html623afa$CloseEventWrappingImplementation$Dart.prototype.initCloseEvent$getter = function initCloseEvent$getter(){
  return $bind(html623afa$CloseEventWrappingImplementation$Dart.prototype.initCloseEvent$named, this);
}
;
