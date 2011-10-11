function html623afa$HashChangeEventWrappingImplementation$Dart(){
}

html623afa$HashChangeEventWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('html623afa$HashChangeEventWrappingImplementation$Dart'), html623afa$HashChangeEventWrappingImplementation$Dart.$RTTimplements);
}
;
html623afa$HashChangeEventWrappingImplementation$Dart.$RTTimplements = function(rtt){
  html623afa$HashChangeEventWrappingImplementation$Dart.$addTo(rtt);
}
;
html623afa$HashChangeEventWrappingImplementation$Dart.$addTo = function(target){
  var rtt = html623afa$HashChangeEventWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  html623afa$EventWrappingImplementation$Dart.$addTo(target);
  html623afa$HashChangeEvent$Dart.$addTo(target);
}
;
html623afa$HashChangeEventWrappingImplementation$Dart.prototype.$implements$html623afa$HashChangeEventWrappingImplementation$Dart = 1;
html623afa$HashChangeEventWrappingImplementation$Dart.prototype.$implements$html623afa$HashChangeEvent$Dart = 1;
html623afa$HashChangeEventWrappingImplementation$Dart.prototype.$implements$html623afa$Event$Dart = 1;
html623afa$HashChangeEventWrappingImplementation$Dart.prototype.$implements$html623afa$EventWrappingImplementation$Dart = 1;
html623afa$HashChangeEventWrappingImplementation$Dart.prototype.$implements$html623afa$DOMWrapperBase$Dart = 1;
html623afa$HashChangeEventWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(html623afa$HashChangeEventWrappingImplementation$Dart, html623afa$EventWrappingImplementation$Dart);
html623afa$HashChangeEventWrappingImplementation$Dart._wrap$html623afa$$Constructor_ = function(ptr){
  html623afa$EventWrappingImplementation$Dart._wrap$html623afa$$Constructor_.call(this, ptr);
}
;
html623afa$HashChangeEventWrappingImplementation$Dart._wrap$html623afa$$Initializer_ = function(ptr){
  html623afa$EventWrappingImplementation$Dart._wrap$html623afa$$Initializer_.call(this, ptr);
}
;
html623afa$HashChangeEventWrappingImplementation$Dart.HashChangeEventWrappingImplementation$_wrap$37$html623afa$$Factory_ = function(ptr){
  var tmp$0 = new html623afa$HashChangeEventWrappingImplementation$Dart;
  tmp$0.$typeInfo = html623afa$HashChangeEventWrappingImplementation$Dart.$lookupRTT();
  html623afa$HashChangeEventWrappingImplementation$Dart._wrap$html623afa$$Initializer_.call(tmp$0, ptr);
  html623afa$HashChangeEventWrappingImplementation$Dart._wrap$html623afa$$Constructor_.call(tmp$0, ptr);
  return tmp$0;
}
;
html623afa$HashChangeEventWrappingImplementation$Dart.prototype.newURL$named = function(){
  return this.newURL$getter().apply(this, arguments);
}
;
html623afa$HashChangeEventWrappingImplementation$Dart.prototype.newURL$getter = function(){
  return this._ptr$html623afa$$getter_().newURL$getter();
}
;
html623afa$HashChangeEventWrappingImplementation$Dart.prototype.oldURL$named = function(){
  return this.oldURL$getter().apply(this, arguments);
}
;
html623afa$HashChangeEventWrappingImplementation$Dart.prototype.oldURL$getter = function(){
  return this._ptr$html623afa$$getter_().oldURL$getter();
}
;
html623afa$HashChangeEventWrappingImplementation$Dart.prototype.initHashChangeEvent$member = function(type, canBubble, cancelable, oldURL, newURL){
  this._ptr$html623afa$$getter_().initHashChangeEvent$named(5, $noargs, type, canBubble, cancelable, oldURL, newURL);
  return;
}
;
html623afa$HashChangeEventWrappingImplementation$Dart.prototype.initHashChangeEvent$named = function($n, $o, type, canBubble, cancelable, oldURL, newURL){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 5)
    $nsme();
  return html623afa$HashChangeEventWrappingImplementation$Dart.prototype.initHashChangeEvent$member.call(this, type, canBubble, cancelable, oldURL, newURL);
}
;
html623afa$HashChangeEventWrappingImplementation$Dart.prototype.initHashChangeEvent$getter = function initHashChangeEvent$getter(){
  return $bind(html623afa$HashChangeEventWrappingImplementation$Dart.prototype.initHashChangeEvent$named, this);
}
;
