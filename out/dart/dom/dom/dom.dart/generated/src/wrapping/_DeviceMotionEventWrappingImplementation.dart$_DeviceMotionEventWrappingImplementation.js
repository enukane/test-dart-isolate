function _DeviceMotionEventWrappingImplementation$Dart(){
}

_DeviceMotionEventWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('_DeviceMotionEventWrappingImplementation$Dart'), _DeviceMotionEventWrappingImplementation$Dart.$RTTimplements);
}
;
_DeviceMotionEventWrappingImplementation$Dart.$RTTimplements = function(rtt){
  _DeviceMotionEventWrappingImplementation$Dart.$addTo(rtt);
}
;
_DeviceMotionEventWrappingImplementation$Dart.$addTo = function(target){
  var rtt = _DeviceMotionEventWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  _EventWrappingImplementation$Dart.$addTo(target);
  DeviceMotionEvent$Dart.$addTo(target);
}
;
_DeviceMotionEventWrappingImplementation$Dart.prototype.$implements$_DeviceMotionEventWrappingImplementation$Dart = 1;
_DeviceMotionEventWrappingImplementation$Dart.prototype.$implements$DeviceMotionEvent$Dart = 1;
_DeviceMotionEventWrappingImplementation$Dart.prototype.$implements$Event$Dart = 1;
_DeviceMotionEventWrappingImplementation$Dart.prototype.$implements$_EventWrappingImplementation$Dart = 1;
_DeviceMotionEventWrappingImplementation$Dart.prototype.$implements$DOMWrapperBase$Dart = 1;
_DeviceMotionEventWrappingImplementation$Dart.prototype.$implements$DOMType$Dart = 1;
_DeviceMotionEventWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(_DeviceMotionEventWrappingImplementation$Dart, _EventWrappingImplementation$Dart);
_DeviceMotionEventWrappingImplementation$Dart.$Constructor = function(){
  _EventWrappingImplementation$Dart.$Constructor.call(this);
}
;
_DeviceMotionEventWrappingImplementation$Dart.$Initializer = function(){
  _EventWrappingImplementation$Dart.$Initializer.call(this);
}
;
_DeviceMotionEventWrappingImplementation$Dart._DeviceMotionEventWrappingImplementation$$Factory = function(){
  var tmp$0 = new _DeviceMotionEventWrappingImplementation$Dart;
  tmp$0.$typeInfo = _DeviceMotionEventWrappingImplementation$Dart.$lookupRTT();
  _DeviceMotionEventWrappingImplementation$Dart.$Initializer.call(tmp$0);
  _DeviceMotionEventWrappingImplementation$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
_DeviceMotionEventWrappingImplementation$Dart.create__DeviceMotionEventWrappingImplementation$member = function(){
  return _DeviceMotionEventWrappingImplementation$Dart._DeviceMotionEventWrappingImplementation$$Factory();
}
;
_DeviceMotionEventWrappingImplementation$Dart.create__DeviceMotionEventWrappingImplementation$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _DeviceMotionEventWrappingImplementation$Dart.create__DeviceMotionEventWrappingImplementation$member();
}
;
function native__DeviceMotionEventWrappingImplementation_create__DeviceMotionEventWrappingImplementation(){
  return _DeviceMotionEventWrappingImplementation$Dart.create__DeviceMotionEventWrappingImplementation$member();
}

_DeviceMotionEventWrappingImplementation$Dart.create__DeviceMotionEventWrappingImplementation$getter = function create__DeviceMotionEventWrappingImplementation$getter(){
  return _DeviceMotionEventWrappingImplementation$Dart.create__DeviceMotionEventWrappingImplementation$named;
}
;
_DeviceMotionEventWrappingImplementation$Dart.prototype.interval$named = function(){
  return this.interval$getter().apply(this, arguments);
}
;
_DeviceMotionEventWrappingImplementation$Dart.prototype.interval$getter = function(){
  return _DeviceMotionEventWrappingImplementation$Dart._get__DeviceMotionEvent_interval$$member_(this);
}
;
_DeviceMotionEventWrappingImplementation$Dart._get__DeviceMotionEvent_interval$$member_ = function(_this){
  return native__DeviceMotionEventWrappingImplementation__get__DeviceMotionEvent_interval(_this);
}
;
_DeviceMotionEventWrappingImplementation$Dart._get__DeviceMotionEvent_interval$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DeviceMotionEventWrappingImplementation$Dart._get__DeviceMotionEvent_interval$$member_(_this);
}
;
_DeviceMotionEventWrappingImplementation$Dart._get__DeviceMotionEvent_interval$$getter_ = function _get__DeviceMotionEvent_interval$$getter_(){
  return _DeviceMotionEventWrappingImplementation$Dart._get__DeviceMotionEvent_interval$$named_;
}
;
_DeviceMotionEventWrappingImplementation$Dart.prototype.typeName$named = function(){
  return this.typeName$getter().apply(this, arguments);
}
;
_DeviceMotionEventWrappingImplementation$Dart.prototype.typeName$getter = function(){
  return 'DeviceMotionEvent';
}
;
