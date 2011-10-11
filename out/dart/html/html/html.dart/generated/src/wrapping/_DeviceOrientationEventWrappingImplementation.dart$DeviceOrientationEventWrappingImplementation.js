function html623afa$DeviceOrientationEventWrappingImplementation$Dart(){
}

html623afa$DeviceOrientationEventWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('html623afa$DeviceOrientationEventWrappingImplementation$Dart'), html623afa$DeviceOrientationEventWrappingImplementation$Dart.$RTTimplements);
}
;
html623afa$DeviceOrientationEventWrappingImplementation$Dart.$RTTimplements = function(rtt){
  html623afa$DeviceOrientationEventWrappingImplementation$Dart.$addTo(rtt);
}
;
html623afa$DeviceOrientationEventWrappingImplementation$Dart.$addTo = function(target){
  var rtt = html623afa$DeviceOrientationEventWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  html623afa$EventWrappingImplementation$Dart.$addTo(target);
  html623afa$DeviceOrientationEvent$Dart.$addTo(target);
}
;
html623afa$DeviceOrientationEventWrappingImplementation$Dart.prototype.$implements$html623afa$DeviceOrientationEventWrappingImplementation$Dart = 1;
html623afa$DeviceOrientationEventWrappingImplementation$Dart.prototype.$implements$html623afa$DeviceOrientationEvent$Dart = 1;
html623afa$DeviceOrientationEventWrappingImplementation$Dart.prototype.$implements$html623afa$Event$Dart = 1;
html623afa$DeviceOrientationEventWrappingImplementation$Dart.prototype.$implements$html623afa$EventWrappingImplementation$Dart = 1;
html623afa$DeviceOrientationEventWrappingImplementation$Dart.prototype.$implements$html623afa$DOMWrapperBase$Dart = 1;
html623afa$DeviceOrientationEventWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(html623afa$DeviceOrientationEventWrappingImplementation$Dart, html623afa$EventWrappingImplementation$Dart);
html623afa$DeviceOrientationEventWrappingImplementation$Dart._wrap$html623afa$$Constructor_ = function(ptr){
  html623afa$EventWrappingImplementation$Dart._wrap$html623afa$$Constructor_.call(this, ptr);
}
;
html623afa$DeviceOrientationEventWrappingImplementation$Dart._wrap$html623afa$$Initializer_ = function(ptr){
  html623afa$EventWrappingImplementation$Dart._wrap$html623afa$$Initializer_.call(this, ptr);
}
;
html623afa$DeviceOrientationEventWrappingImplementation$Dart.DeviceOrientationEventWrappingImplementation$_wrap$44$html623afa$$Factory_ = function(ptr){
  var tmp$0 = new html623afa$DeviceOrientationEventWrappingImplementation$Dart;
  tmp$0.$typeInfo = html623afa$DeviceOrientationEventWrappingImplementation$Dart.$lookupRTT();
  html623afa$DeviceOrientationEventWrappingImplementation$Dart._wrap$html623afa$$Initializer_.call(tmp$0, ptr);
  html623afa$DeviceOrientationEventWrappingImplementation$Dart._wrap$html623afa$$Constructor_.call(tmp$0, ptr);
  return tmp$0;
}
;
html623afa$DeviceOrientationEventWrappingImplementation$Dart.prototype.alpha$named = function(){
  return this.alpha$getter().apply(this, arguments);
}
;
html623afa$DeviceOrientationEventWrappingImplementation$Dart.prototype.alpha$getter = function(){
  return this._ptr$html623afa$$getter_().alpha$getter();
}
;
html623afa$DeviceOrientationEventWrappingImplementation$Dart.prototype.beta$named = function(){
  return this.beta$getter().apply(this, arguments);
}
;
html623afa$DeviceOrientationEventWrappingImplementation$Dart.prototype.beta$getter = function(){
  return this._ptr$html623afa$$getter_().beta$getter();
}
;
html623afa$DeviceOrientationEventWrappingImplementation$Dart.prototype.gamma$named = function(){
  return this.gamma$getter().apply(this, arguments);
}
;
html623afa$DeviceOrientationEventWrappingImplementation$Dart.prototype.gamma$getter = function(){
  return this._ptr$html623afa$$getter_().gamma$getter();
}
;
html623afa$DeviceOrientationEventWrappingImplementation$Dart.prototype.initDeviceOrientationEvent$member = function(type, bubbles, cancelable, alpha, beta, gamma){
  this._ptr$html623afa$$getter_().initDeviceOrientationEvent$named(6, $noargs, type, bubbles, cancelable, alpha, beta, gamma);
  return;
}
;
html623afa$DeviceOrientationEventWrappingImplementation$Dart.prototype.initDeviceOrientationEvent$named = function($n, $o, type, bubbles, cancelable, alpha, beta, gamma){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 6)
    $nsme();
  return html623afa$DeviceOrientationEventWrappingImplementation$Dart.prototype.initDeviceOrientationEvent$member.call(this, type, bubbles, cancelable, alpha, beta, gamma);
}
;
html623afa$DeviceOrientationEventWrappingImplementation$Dart.prototype.initDeviceOrientationEvent$getter = function initDeviceOrientationEvent$getter(){
  return $bind(html623afa$DeviceOrientationEventWrappingImplementation$Dart.prototype.initDeviceOrientationEvent$named, this);
}
;
