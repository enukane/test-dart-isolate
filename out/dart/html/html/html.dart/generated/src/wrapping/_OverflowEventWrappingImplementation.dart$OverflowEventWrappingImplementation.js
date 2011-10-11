function html623afa$OverflowEventWrappingImplementation$Dart(){
}

html623afa$OverflowEventWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('html623afa$OverflowEventWrappingImplementation$Dart'), html623afa$OverflowEventWrappingImplementation$Dart.$RTTimplements);
}
;
html623afa$OverflowEventWrappingImplementation$Dart.$RTTimplements = function(rtt){
  html623afa$OverflowEventWrappingImplementation$Dart.$addTo(rtt);
}
;
html623afa$OverflowEventWrappingImplementation$Dart.$addTo = function(target){
  var rtt = html623afa$OverflowEventWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  html623afa$EventWrappingImplementation$Dart.$addTo(target);
  html623afa$OverflowEvent$Dart.$addTo(target);
}
;
html623afa$OverflowEventWrappingImplementation$Dart.prototype.$implements$html623afa$OverflowEventWrappingImplementation$Dart = 1;
html623afa$OverflowEventWrappingImplementation$Dart.prototype.$implements$html623afa$OverflowEvent$Dart = 1;
html623afa$OverflowEventWrappingImplementation$Dart.prototype.$implements$html623afa$Event$Dart = 1;
html623afa$OverflowEventWrappingImplementation$Dart.prototype.$implements$html623afa$EventWrappingImplementation$Dart = 1;
html623afa$OverflowEventWrappingImplementation$Dart.prototype.$implements$html623afa$DOMWrapperBase$Dart = 1;
html623afa$OverflowEventWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(html623afa$OverflowEventWrappingImplementation$Dart, html623afa$EventWrappingImplementation$Dart);
html623afa$OverflowEventWrappingImplementation$Dart._wrap$html623afa$$Constructor_ = function(ptr){
  html623afa$EventWrappingImplementation$Dart._wrap$html623afa$$Constructor_.call(this, ptr);
}
;
html623afa$OverflowEventWrappingImplementation$Dart._wrap$html623afa$$Initializer_ = function(ptr){
  html623afa$EventWrappingImplementation$Dart._wrap$html623afa$$Initializer_.call(this, ptr);
}
;
html623afa$OverflowEventWrappingImplementation$Dart.OverflowEventWrappingImplementation$_wrap$35$html623afa$$Factory_ = function(ptr){
  var tmp$0 = new html623afa$OverflowEventWrappingImplementation$Dart;
  tmp$0.$typeInfo = html623afa$OverflowEventWrappingImplementation$Dart.$lookupRTT();
  html623afa$OverflowEventWrappingImplementation$Dart._wrap$html623afa$$Initializer_.call(tmp$0, ptr);
  html623afa$OverflowEventWrappingImplementation$Dart._wrap$html623afa$$Constructor_.call(tmp$0, ptr);
  return tmp$0;
}
;
html623afa$OverflowEventWrappingImplementation$Dart.prototype.horizontalOverflow$named = function(){
  return this.horizontalOverflow$getter().apply(this, arguments);
}
;
html623afa$OverflowEventWrappingImplementation$Dart.prototype.horizontalOverflow$getter = function(){
  return this._ptr$html623afa$$getter_().horizontalOverflow$getter();
}
;
html623afa$OverflowEventWrappingImplementation$Dart.prototype.orient$named = function(){
  return this.orient$getter().apply(this, arguments);
}
;
html623afa$OverflowEventWrappingImplementation$Dart.prototype.orient$getter = function(){
  return this._ptr$html623afa$$getter_().orient$getter();
}
;
html623afa$OverflowEventWrappingImplementation$Dart.prototype.verticalOverflow$named = function(){
  return this.verticalOverflow$getter().apply(this, arguments);
}
;
html623afa$OverflowEventWrappingImplementation$Dart.prototype.verticalOverflow$getter = function(){
  return this._ptr$html623afa$$getter_().verticalOverflow$getter();
}
;
html623afa$OverflowEventWrappingImplementation$Dart.prototype.initOverflowEvent$member = function(orient, horizontalOverflow, verticalOverflow){
  this._ptr$html623afa$$getter_().initOverflowEvent$named(3, $noargs, orient, horizontalOverflow, verticalOverflow);
  return;
}
;
html623afa$OverflowEventWrappingImplementation$Dart.prototype.initOverflowEvent$named = function($n, $o, orient, horizontalOverflow, verticalOverflow){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return html623afa$OverflowEventWrappingImplementation$Dart.prototype.initOverflowEvent$member.call(this, orient, horizontalOverflow, verticalOverflow);
}
;
html623afa$OverflowEventWrappingImplementation$Dart.prototype.initOverflowEvent$getter = function initOverflowEvent$getter(){
  return $bind(html623afa$OverflowEventWrappingImplementation$Dart.prototype.initOverflowEvent$named, this);
}
;
