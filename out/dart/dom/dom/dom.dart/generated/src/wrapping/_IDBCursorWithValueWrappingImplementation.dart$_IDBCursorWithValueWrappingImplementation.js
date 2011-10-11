function _IDBCursorWithValueWrappingImplementation$Dart(){
}

_IDBCursorWithValueWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('_IDBCursorWithValueWrappingImplementation$Dart'), _IDBCursorWithValueWrappingImplementation$Dart.$RTTimplements);
}
;
_IDBCursorWithValueWrappingImplementation$Dart.$RTTimplements = function(rtt){
  _IDBCursorWithValueWrappingImplementation$Dart.$addTo(rtt);
}
;
_IDBCursorWithValueWrappingImplementation$Dart.$addTo = function(target){
  var rtt = _IDBCursorWithValueWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  _IDBCursorWrappingImplementation$Dart.$addTo(target);
  IDBCursorWithValue$Dart.$addTo(target);
}
;
_IDBCursorWithValueWrappingImplementation$Dart.prototype.$implements$_IDBCursorWithValueWrappingImplementation$Dart = 1;
_IDBCursorWithValueWrappingImplementation$Dart.prototype.$implements$IDBCursorWithValue$Dart = 1;
_IDBCursorWithValueWrappingImplementation$Dart.prototype.$implements$IDBCursor$Dart = 1;
_IDBCursorWithValueWrappingImplementation$Dart.prototype.$implements$_IDBCursorWrappingImplementation$Dart = 1;
_IDBCursorWithValueWrappingImplementation$Dart.prototype.$implements$DOMWrapperBase$Dart = 1;
_IDBCursorWithValueWrappingImplementation$Dart.prototype.$implements$DOMType$Dart = 1;
_IDBCursorWithValueWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(_IDBCursorWithValueWrappingImplementation$Dart, _IDBCursorWrappingImplementation$Dart);
_IDBCursorWithValueWrappingImplementation$Dart.$Constructor = function(){
  _IDBCursorWrappingImplementation$Dart.$Constructor.call(this);
}
;
_IDBCursorWithValueWrappingImplementation$Dart.$Initializer = function(){
  _IDBCursorWrappingImplementation$Dart.$Initializer.call(this);
}
;
_IDBCursorWithValueWrappingImplementation$Dart._IDBCursorWithValueWrappingImplementation$$Factory = function(){
  var tmp$0 = new _IDBCursorWithValueWrappingImplementation$Dart;
  tmp$0.$typeInfo = _IDBCursorWithValueWrappingImplementation$Dart.$lookupRTT();
  _IDBCursorWithValueWrappingImplementation$Dart.$Initializer.call(tmp$0);
  _IDBCursorWithValueWrappingImplementation$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
_IDBCursorWithValueWrappingImplementation$Dart.create__IDBCursorWithValueWrappingImplementation$member = function(){
  return _IDBCursorWithValueWrappingImplementation$Dart._IDBCursorWithValueWrappingImplementation$$Factory();
}
;
_IDBCursorWithValueWrappingImplementation$Dart.create__IDBCursorWithValueWrappingImplementation$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _IDBCursorWithValueWrappingImplementation$Dart.create__IDBCursorWithValueWrappingImplementation$member();
}
;
function native__IDBCursorWithValueWrappingImplementation_create__IDBCursorWithValueWrappingImplementation(){
  return _IDBCursorWithValueWrappingImplementation$Dart.create__IDBCursorWithValueWrappingImplementation$member();
}

_IDBCursorWithValueWrappingImplementation$Dart.create__IDBCursorWithValueWrappingImplementation$getter = function create__IDBCursorWithValueWrappingImplementation$getter(){
  return _IDBCursorWithValueWrappingImplementation$Dart.create__IDBCursorWithValueWrappingImplementation$named;
}
;
_IDBCursorWithValueWrappingImplementation$Dart.prototype.value$named = function(){
  return this.value$getter().apply(this, arguments);
}
;
_IDBCursorWithValueWrappingImplementation$Dart.prototype.value$getter = function(){
  return _IDBCursorWithValueWrappingImplementation$Dart._get__IDBCursorWithValue_value$$member_(this);
}
;
_IDBCursorWithValueWrappingImplementation$Dart._get__IDBCursorWithValue_value$$member_ = function(_this){
  return native__IDBCursorWithValueWrappingImplementation__get__IDBCursorWithValue_value(_this);
}
;
_IDBCursorWithValueWrappingImplementation$Dart._get__IDBCursorWithValue_value$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _IDBCursorWithValueWrappingImplementation$Dart._get__IDBCursorWithValue_value$$member_(_this);
}
;
_IDBCursorWithValueWrappingImplementation$Dart._get__IDBCursorWithValue_value$$getter_ = function _get__IDBCursorWithValue_value$$getter_(){
  return _IDBCursorWithValueWrappingImplementation$Dart._get__IDBCursorWithValue_value$$named_;
}
;
_IDBCursorWithValueWrappingImplementation$Dart.prototype.typeName$named = function(){
  return this.typeName$getter().apply(this, arguments);
}
;
_IDBCursorWithValueWrappingImplementation$Dart.prototype.typeName$getter = function(){
  return 'IDBCursorWithValue';
}
;
