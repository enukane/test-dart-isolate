function html623afa$ProgressEventWrappingImplementation$Dart(){
}

html623afa$ProgressEventWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('html623afa$ProgressEventWrappingImplementation$Dart'), html623afa$ProgressEventWrappingImplementation$Dart.$RTTimplements);
}
;
html623afa$ProgressEventWrappingImplementation$Dart.$RTTimplements = function(rtt){
  html623afa$ProgressEventWrappingImplementation$Dart.$addTo(rtt);
}
;
html623afa$ProgressEventWrappingImplementation$Dart.$addTo = function(target){
  var rtt = html623afa$ProgressEventWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  html623afa$EventWrappingImplementation$Dart.$addTo(target);
  html623afa$ProgressEvent$Dart.$addTo(target);
}
;
html623afa$ProgressEventWrappingImplementation$Dart.prototype.$implements$html623afa$ProgressEventWrappingImplementation$Dart = 1;
html623afa$ProgressEventWrappingImplementation$Dart.prototype.$implements$html623afa$ProgressEvent$Dart = 1;
html623afa$ProgressEventWrappingImplementation$Dart.prototype.$implements$html623afa$Event$Dart = 1;
html623afa$ProgressEventWrappingImplementation$Dart.prototype.$implements$html623afa$EventWrappingImplementation$Dart = 1;
html623afa$ProgressEventWrappingImplementation$Dart.prototype.$implements$html623afa$DOMWrapperBase$Dart = 1;
html623afa$ProgressEventWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(html623afa$ProgressEventWrappingImplementation$Dart, html623afa$EventWrappingImplementation$Dart);
html623afa$ProgressEventWrappingImplementation$Dart._wrap$html623afa$$Constructor_ = function(ptr){
  html623afa$EventWrappingImplementation$Dart._wrap$html623afa$$Constructor_.call(this, ptr);
}
;
html623afa$ProgressEventWrappingImplementation$Dart._wrap$html623afa$$Initializer_ = function(ptr){
  html623afa$EventWrappingImplementation$Dart._wrap$html623afa$$Initializer_.call(this, ptr);
}
;
html623afa$ProgressEventWrappingImplementation$Dart.ProgressEventWrappingImplementation$_wrap$35$html623afa$$Factory_ = function(ptr){
  var tmp$0 = new html623afa$ProgressEventWrappingImplementation$Dart;
  tmp$0.$typeInfo = html623afa$ProgressEventWrappingImplementation$Dart.$lookupRTT();
  html623afa$ProgressEventWrappingImplementation$Dart._wrap$html623afa$$Initializer_.call(tmp$0, ptr);
  html623afa$ProgressEventWrappingImplementation$Dart._wrap$html623afa$$Constructor_.call(tmp$0, ptr);
  return tmp$0;
}
;
html623afa$ProgressEventWrappingImplementation$Dart.prototype.lengthComputable$named = function(){
  return this.lengthComputable$getter().apply(this, arguments);
}
;
html623afa$ProgressEventWrappingImplementation$Dart.prototype.lengthComputable$getter = function(){
  return this._ptr$html623afa$$getter_().lengthComputable$getter();
}
;
html623afa$ProgressEventWrappingImplementation$Dart.prototype.loaded$named = function(){
  return this.loaded$getter().apply(this, arguments);
}
;
html623afa$ProgressEventWrappingImplementation$Dart.prototype.loaded$getter = function(){
  return this._ptr$html623afa$$getter_().loaded$getter();
}
;
html623afa$ProgressEventWrappingImplementation$Dart.prototype.total$named = function(){
  return this.total$getter().apply(this, arguments);
}
;
html623afa$ProgressEventWrappingImplementation$Dart.prototype.total$getter = function(){
  return this._ptr$html623afa$$getter_().total$getter();
}
;
html623afa$ProgressEventWrappingImplementation$Dart.prototype.initProgressEvent$member = function(typeArg, canBubbleArg, cancelableArg, lengthComputableArg, loadedArg, totalArg){
  this._ptr$html623afa$$getter_().initProgressEvent$named(6, $noargs, typeArg, canBubbleArg, cancelableArg, lengthComputableArg, loadedArg, totalArg);
  return;
}
;
html623afa$ProgressEventWrappingImplementation$Dart.prototype.initProgressEvent$named = function($n, $o, typeArg, canBubbleArg, cancelableArg, lengthComputableArg, loadedArg, totalArg){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 6)
    $nsme();
  return html623afa$ProgressEventWrappingImplementation$Dart.prototype.initProgressEvent$member.call(this, typeArg, canBubbleArg, cancelableArg, lengthComputableArg, loadedArg, totalArg);
}
;
html623afa$ProgressEventWrappingImplementation$Dart.prototype.initProgressEvent$getter = function initProgressEvent$getter(){
  return $bind(html623afa$ProgressEventWrappingImplementation$Dart.prototype.initProgressEvent$named, this);
}
;
