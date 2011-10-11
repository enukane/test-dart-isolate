function _IDBVersionChangeEventWrappingImplementation$Dart(){
}

_IDBVersionChangeEventWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('_IDBVersionChangeEventWrappingImplementation$Dart'), _IDBVersionChangeEventWrappingImplementation$Dart.$RTTimplements);
}
;
_IDBVersionChangeEventWrappingImplementation$Dart.$RTTimplements = function(rtt){
  _IDBVersionChangeEventWrappingImplementation$Dart.$addTo(rtt);
}
;
_IDBVersionChangeEventWrappingImplementation$Dart.$addTo = function(target){
  var rtt = _IDBVersionChangeEventWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  _EventWrappingImplementation$Dart.$addTo(target);
  IDBVersionChangeEvent$Dart.$addTo(target);
}
;
_IDBVersionChangeEventWrappingImplementation$Dart.prototype.$implements$_IDBVersionChangeEventWrappingImplementation$Dart = 1;
_IDBVersionChangeEventWrappingImplementation$Dart.prototype.$implements$IDBVersionChangeEvent$Dart = 1;
_IDBVersionChangeEventWrappingImplementation$Dart.prototype.$implements$Event$Dart = 1;
_IDBVersionChangeEventWrappingImplementation$Dart.prototype.$implements$_EventWrappingImplementation$Dart = 1;
_IDBVersionChangeEventWrappingImplementation$Dart.prototype.$implements$DOMWrapperBase$Dart = 1;
_IDBVersionChangeEventWrappingImplementation$Dart.prototype.$implements$DOMType$Dart = 1;
_IDBVersionChangeEventWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(_IDBVersionChangeEventWrappingImplementation$Dart, _EventWrappingImplementation$Dart);
_IDBVersionChangeEventWrappingImplementation$Dart.$Constructor = function(){
  _EventWrappingImplementation$Dart.$Constructor.call(this);
}
;
_IDBVersionChangeEventWrappingImplementation$Dart.$Initializer = function(){
  _EventWrappingImplementation$Dart.$Initializer.call(this);
}
;
_IDBVersionChangeEventWrappingImplementation$Dart._IDBVersionChangeEventWrappingImplementation$$Factory = function(){
  var tmp$0 = new _IDBVersionChangeEventWrappingImplementation$Dart;
  tmp$0.$typeInfo = _IDBVersionChangeEventWrappingImplementation$Dart.$lookupRTT();
  _IDBVersionChangeEventWrappingImplementation$Dart.$Initializer.call(tmp$0);
  _IDBVersionChangeEventWrappingImplementation$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
_IDBVersionChangeEventWrappingImplementation$Dart.create__IDBVersionChangeEventWrappingImplementation$member = function(){
  return _IDBVersionChangeEventWrappingImplementation$Dart._IDBVersionChangeEventWrappingImplementation$$Factory();
}
;
_IDBVersionChangeEventWrappingImplementation$Dart.create__IDBVersionChangeEventWrappingImplementation$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _IDBVersionChangeEventWrappingImplementation$Dart.create__IDBVersionChangeEventWrappingImplementation$member();
}
;
function native__IDBVersionChangeEventWrappingImplementation_create__IDBVersionChangeEventWrappingImplementation(){
  return _IDBVersionChangeEventWrappingImplementation$Dart.create__IDBVersionChangeEventWrappingImplementation$member();
}

_IDBVersionChangeEventWrappingImplementation$Dart.create__IDBVersionChangeEventWrappingImplementation$getter = function create__IDBVersionChangeEventWrappingImplementation$getter(){
  return _IDBVersionChangeEventWrappingImplementation$Dart.create__IDBVersionChangeEventWrappingImplementation$named;
}
;
_IDBVersionChangeEventWrappingImplementation$Dart.prototype.version$named = function(){
  return this.version$getter().apply(this, arguments);
}
;
_IDBVersionChangeEventWrappingImplementation$Dart.prototype.version$getter = function(){
  return _IDBVersionChangeEventWrappingImplementation$Dart._get__IDBVersionChangeEvent_version$$member_(this);
}
;
_IDBVersionChangeEventWrappingImplementation$Dart._get__IDBVersionChangeEvent_version$$member_ = function(_this){
  return native__IDBVersionChangeEventWrappingImplementation__get__IDBVersionChangeEvent_version(_this);
}
;
_IDBVersionChangeEventWrappingImplementation$Dart._get__IDBVersionChangeEvent_version$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _IDBVersionChangeEventWrappingImplementation$Dart._get__IDBVersionChangeEvent_version$$member_(_this);
}
;
_IDBVersionChangeEventWrappingImplementation$Dart._get__IDBVersionChangeEvent_version$$getter_ = function _get__IDBVersionChangeEvent_version$$getter_(){
  return _IDBVersionChangeEventWrappingImplementation$Dart._get__IDBVersionChangeEvent_version$$named_;
}
;
_IDBVersionChangeEventWrappingImplementation$Dart.prototype.typeName$named = function(){
  return this.typeName$getter().apply(this, arguments);
}
;
_IDBVersionChangeEventWrappingImplementation$Dart.prototype.typeName$getter = function(){
  return 'IDBVersionChangeEvent';
}
;
