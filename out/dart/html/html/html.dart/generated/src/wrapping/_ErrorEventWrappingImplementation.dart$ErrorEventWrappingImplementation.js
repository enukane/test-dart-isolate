function html623afa$ErrorEventWrappingImplementation$Dart(){
}

html623afa$ErrorEventWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('html623afa$ErrorEventWrappingImplementation$Dart'), html623afa$ErrorEventWrappingImplementation$Dart.$RTTimplements);
}
;
html623afa$ErrorEventWrappingImplementation$Dart.$RTTimplements = function(rtt){
  html623afa$ErrorEventWrappingImplementation$Dart.$addTo(rtt);
}
;
html623afa$ErrorEventWrappingImplementation$Dart.$addTo = function(target){
  var rtt = html623afa$ErrorEventWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  html623afa$EventWrappingImplementation$Dart.$addTo(target);
  html623afa$ErrorEvent$Dart.$addTo(target);
}
;
html623afa$ErrorEventWrappingImplementation$Dart.prototype.$implements$html623afa$ErrorEventWrappingImplementation$Dart = 1;
html623afa$ErrorEventWrappingImplementation$Dart.prototype.$implements$html623afa$ErrorEvent$Dart = 1;
html623afa$ErrorEventWrappingImplementation$Dart.prototype.$implements$html623afa$Event$Dart = 1;
html623afa$ErrorEventWrappingImplementation$Dart.prototype.$implements$html623afa$EventWrappingImplementation$Dart = 1;
html623afa$ErrorEventWrappingImplementation$Dart.prototype.$implements$html623afa$DOMWrapperBase$Dart = 1;
html623afa$ErrorEventWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(html623afa$ErrorEventWrappingImplementation$Dart, html623afa$EventWrappingImplementation$Dart);
html623afa$ErrorEventWrappingImplementation$Dart._wrap$html623afa$$Constructor_ = function(ptr){
  html623afa$EventWrappingImplementation$Dart._wrap$html623afa$$Constructor_.call(this, ptr);
}
;
html623afa$ErrorEventWrappingImplementation$Dart._wrap$html623afa$$Initializer_ = function(ptr){
  html623afa$EventWrappingImplementation$Dart._wrap$html623afa$$Initializer_.call(this, ptr);
}
;
html623afa$ErrorEventWrappingImplementation$Dart.ErrorEventWrappingImplementation$_wrap$32$html623afa$$Factory_ = function(ptr){
  var tmp$0 = new html623afa$ErrorEventWrappingImplementation$Dart;
  tmp$0.$typeInfo = html623afa$ErrorEventWrappingImplementation$Dart.$lookupRTT();
  html623afa$ErrorEventWrappingImplementation$Dart._wrap$html623afa$$Initializer_.call(tmp$0, ptr);
  html623afa$ErrorEventWrappingImplementation$Dart._wrap$html623afa$$Constructor_.call(tmp$0, ptr);
  return tmp$0;
}
;
html623afa$ErrorEventWrappingImplementation$Dart.prototype.filename$named = function(){
  return this.filename$getter().apply(this, arguments);
}
;
html623afa$ErrorEventWrappingImplementation$Dart.prototype.filename$getter = function(){
  return this._ptr$html623afa$$getter_().filename$getter();
}
;
html623afa$ErrorEventWrappingImplementation$Dart.prototype.lineno$named = function(){
  return this.lineno$getter().apply(this, arguments);
}
;
html623afa$ErrorEventWrappingImplementation$Dart.prototype.lineno$getter = function(){
  return this._ptr$html623afa$$getter_().lineno$getter();
}
;
html623afa$ErrorEventWrappingImplementation$Dart.prototype.message$named = function(){
  return this.message$getter().apply(this, arguments);
}
;
html623afa$ErrorEventWrappingImplementation$Dart.prototype.message$getter = function(){
  return this._ptr$html623afa$$getter_().message$getter();
}
;
html623afa$ErrorEventWrappingImplementation$Dart.prototype.initErrorEvent$member = function(typeArg, canBubbleArg, cancelableArg, messageArg, filenameArg, linenoArg){
  this._ptr$html623afa$$getter_().initErrorEvent$named(6, $noargs, typeArg, canBubbleArg, cancelableArg, messageArg, filenameArg, linenoArg);
  return;
}
;
html623afa$ErrorEventWrappingImplementation$Dart.prototype.initErrorEvent$named = function($n, $o, typeArg, canBubbleArg, cancelableArg, messageArg, filenameArg, linenoArg){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 6)
    $nsme();
  return html623afa$ErrorEventWrappingImplementation$Dart.prototype.initErrorEvent$member.call(this, typeArg, canBubbleArg, cancelableArg, messageArg, filenameArg, linenoArg);
}
;
html623afa$ErrorEventWrappingImplementation$Dart.prototype.initErrorEvent$getter = function initErrorEvent$getter(){
  return $bind(html623afa$ErrorEventWrappingImplementation$Dart.prototype.initErrorEvent$named, this);
}
;
