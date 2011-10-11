function _WebGLContextEventWrappingImplementation$Dart(){
}

_WebGLContextEventWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('_WebGLContextEventWrappingImplementation$Dart'), _WebGLContextEventWrappingImplementation$Dart.$RTTimplements);
}
;
_WebGLContextEventWrappingImplementation$Dart.$RTTimplements = function(rtt){
  _WebGLContextEventWrappingImplementation$Dart.$addTo(rtt);
}
;
_WebGLContextEventWrappingImplementation$Dart.$addTo = function(target){
  var rtt = _WebGLContextEventWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  _EventWrappingImplementation$Dart.$addTo(target);
  WebGLContextEvent$Dart.$addTo(target);
}
;
_WebGLContextEventWrappingImplementation$Dart.prototype.$implements$_WebGLContextEventWrappingImplementation$Dart = 1;
_WebGLContextEventWrappingImplementation$Dart.prototype.$implements$WebGLContextEvent$Dart = 1;
_WebGLContextEventWrappingImplementation$Dart.prototype.$implements$Event$Dart = 1;
_WebGLContextEventWrappingImplementation$Dart.prototype.$implements$_EventWrappingImplementation$Dart = 1;
_WebGLContextEventWrappingImplementation$Dart.prototype.$implements$DOMWrapperBase$Dart = 1;
_WebGLContextEventWrappingImplementation$Dart.prototype.$implements$DOMType$Dart = 1;
_WebGLContextEventWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(_WebGLContextEventWrappingImplementation$Dart, _EventWrappingImplementation$Dart);
_WebGLContextEventWrappingImplementation$Dart.$Constructor = function(){
  _EventWrappingImplementation$Dart.$Constructor.call(this);
}
;
_WebGLContextEventWrappingImplementation$Dart.$Initializer = function(){
  _EventWrappingImplementation$Dart.$Initializer.call(this);
}
;
_WebGLContextEventWrappingImplementation$Dart._WebGLContextEventWrappingImplementation$$Factory = function(){
  var tmp$0 = new _WebGLContextEventWrappingImplementation$Dart;
  tmp$0.$typeInfo = _WebGLContextEventWrappingImplementation$Dart.$lookupRTT();
  _WebGLContextEventWrappingImplementation$Dart.$Initializer.call(tmp$0);
  _WebGLContextEventWrappingImplementation$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
_WebGLContextEventWrappingImplementation$Dart.create__WebGLContextEventWrappingImplementation$member = function(){
  return _WebGLContextEventWrappingImplementation$Dart._WebGLContextEventWrappingImplementation$$Factory();
}
;
_WebGLContextEventWrappingImplementation$Dart.create__WebGLContextEventWrappingImplementation$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _WebGLContextEventWrappingImplementation$Dart.create__WebGLContextEventWrappingImplementation$member();
}
;
function native__WebGLContextEventWrappingImplementation_create__WebGLContextEventWrappingImplementation(){
  return _WebGLContextEventWrappingImplementation$Dart.create__WebGLContextEventWrappingImplementation$member();
}

_WebGLContextEventWrappingImplementation$Dart.create__WebGLContextEventWrappingImplementation$getter = function create__WebGLContextEventWrappingImplementation$getter(){
  return _WebGLContextEventWrappingImplementation$Dart.create__WebGLContextEventWrappingImplementation$named;
}
;
_WebGLContextEventWrappingImplementation$Dart.prototype.statusMessage$named = function(){
  return this.statusMessage$getter().apply(this, arguments);
}
;
_WebGLContextEventWrappingImplementation$Dart.prototype.statusMessage$getter = function(){
  return _WebGLContextEventWrappingImplementation$Dart._get__WebGLContextEvent_statusMessage$$member_(this);
}
;
_WebGLContextEventWrappingImplementation$Dart._get__WebGLContextEvent_statusMessage$$member_ = function(_this){
  return native__WebGLContextEventWrappingImplementation__get__WebGLContextEvent_statusMessage(_this);
}
;
_WebGLContextEventWrappingImplementation$Dart._get__WebGLContextEvent_statusMessage$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _WebGLContextEventWrappingImplementation$Dart._get__WebGLContextEvent_statusMessage$$member_(_this);
}
;
_WebGLContextEventWrappingImplementation$Dart._get__WebGLContextEvent_statusMessage$$getter_ = function _get__WebGLContextEvent_statusMessage$$getter_(){
  return _WebGLContextEventWrappingImplementation$Dart._get__WebGLContextEvent_statusMessage$$named_;
}
;
_WebGLContextEventWrappingImplementation$Dart.prototype.typeName$named = function(){
  return this.typeName$getter().apply(this, arguments);
}
;
_WebGLContextEventWrappingImplementation$Dart.prototype.typeName$getter = function(){
  return 'WebGLContextEvent';
}
;
