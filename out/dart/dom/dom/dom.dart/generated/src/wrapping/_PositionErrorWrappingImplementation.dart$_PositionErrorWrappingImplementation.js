function _PositionErrorWrappingImplementation$Dart(){
}

_PositionErrorWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('_PositionErrorWrappingImplementation$Dart'), _PositionErrorWrappingImplementation$Dart.$RTTimplements);
}
;
_PositionErrorWrappingImplementation$Dart.$RTTimplements = function(rtt){
  _PositionErrorWrappingImplementation$Dart.$addTo(rtt);
}
;
_PositionErrorWrappingImplementation$Dart.$addTo = function(target){
  var rtt = _PositionErrorWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  DOMWrapperBase$Dart.$addTo(target);
  PositionError$Dart.$addTo(target);
}
;
_PositionErrorWrappingImplementation$Dart.prototype.$implements$_PositionErrorWrappingImplementation$Dart = 1;
_PositionErrorWrappingImplementation$Dart.prototype.$implements$PositionError$Dart = 1;
_PositionErrorWrappingImplementation$Dart.prototype.$implements$DOMWrapperBase$Dart = 1;
_PositionErrorWrappingImplementation$Dart.prototype.$implements$DOMType$Dart = 1;
_PositionErrorWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(_PositionErrorWrappingImplementation$Dart, DOMWrapperBase$Dart);
_PositionErrorWrappingImplementation$Dart.$Constructor = function(){
  DOMWrapperBase$Dart.$Constructor.call(this);
}
;
_PositionErrorWrappingImplementation$Dart.$Initializer = function(){
  DOMWrapperBase$Dart.$Initializer.call(this);
}
;
_PositionErrorWrappingImplementation$Dart._PositionErrorWrappingImplementation$$Factory = function(){
  var tmp$0 = new _PositionErrorWrappingImplementation$Dart;
  tmp$0.$typeInfo = _PositionErrorWrappingImplementation$Dart.$lookupRTT();
  _PositionErrorWrappingImplementation$Dart.$Initializer.call(tmp$0);
  _PositionErrorWrappingImplementation$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
_PositionErrorWrappingImplementation$Dart.create__PositionErrorWrappingImplementation$member = function(){
  return _PositionErrorWrappingImplementation$Dart._PositionErrorWrappingImplementation$$Factory();
}
;
_PositionErrorWrappingImplementation$Dart.create__PositionErrorWrappingImplementation$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _PositionErrorWrappingImplementation$Dart.create__PositionErrorWrappingImplementation$member();
}
;
function native__PositionErrorWrappingImplementation_create__PositionErrorWrappingImplementation(){
  return _PositionErrorWrappingImplementation$Dart.create__PositionErrorWrappingImplementation$member();
}

_PositionErrorWrappingImplementation$Dart.create__PositionErrorWrappingImplementation$getter = function create__PositionErrorWrappingImplementation$getter(){
  return _PositionErrorWrappingImplementation$Dart.create__PositionErrorWrappingImplementation$named;
}
;
_PositionErrorWrappingImplementation$Dart.prototype.code$named = function(){
  return this.code$getter().apply(this, arguments);
}
;
_PositionErrorWrappingImplementation$Dart.prototype.code$getter = function(){
  return _PositionErrorWrappingImplementation$Dart._get__PositionError_code$$member_(this);
}
;
_PositionErrorWrappingImplementation$Dart._get__PositionError_code$$member_ = function(_this){
  return native__PositionErrorWrappingImplementation__get__PositionError_code(_this);
}
;
_PositionErrorWrappingImplementation$Dart._get__PositionError_code$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _PositionErrorWrappingImplementation$Dart._get__PositionError_code$$member_(_this);
}
;
_PositionErrorWrappingImplementation$Dart._get__PositionError_code$$getter_ = function _get__PositionError_code$$getter_(){
  return _PositionErrorWrappingImplementation$Dart._get__PositionError_code$$named_;
}
;
_PositionErrorWrappingImplementation$Dart.prototype.message$named = function(){
  return this.message$getter().apply(this, arguments);
}
;
_PositionErrorWrappingImplementation$Dart.prototype.message$getter = function(){
  return _PositionErrorWrappingImplementation$Dart._get__PositionError_message$$member_(this);
}
;
_PositionErrorWrappingImplementation$Dart._get__PositionError_message$$member_ = function(_this){
  return native__PositionErrorWrappingImplementation__get__PositionError_message(_this);
}
;
_PositionErrorWrappingImplementation$Dart._get__PositionError_message$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _PositionErrorWrappingImplementation$Dart._get__PositionError_message$$member_(_this);
}
;
_PositionErrorWrappingImplementation$Dart._get__PositionError_message$$getter_ = function _get__PositionError_message$$getter_(){
  return _PositionErrorWrappingImplementation$Dart._get__PositionError_message$$named_;
}
;
_PositionErrorWrappingImplementation$Dart.prototype.typeName$named = function(){
  return this.typeName$getter().apply(this, arguments);
}
;
_PositionErrorWrappingImplementation$Dart.prototype.typeName$getter = function(){
  return 'PositionError';
}
;
