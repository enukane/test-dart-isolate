function _SQLErrorWrappingImplementation$Dart(){
}

_SQLErrorWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('_SQLErrorWrappingImplementation$Dart'), _SQLErrorWrappingImplementation$Dart.$RTTimplements);
}
;
_SQLErrorWrappingImplementation$Dart.$RTTimplements = function(rtt){
  _SQLErrorWrappingImplementation$Dart.$addTo(rtt);
}
;
_SQLErrorWrappingImplementation$Dart.$addTo = function(target){
  var rtt = _SQLErrorWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  DOMWrapperBase$Dart.$addTo(target);
  SQLError$Dart.$addTo(target);
}
;
_SQLErrorWrappingImplementation$Dart.prototype.$implements$_SQLErrorWrappingImplementation$Dart = 1;
_SQLErrorWrappingImplementation$Dart.prototype.$implements$SQLError$Dart = 1;
_SQLErrorWrappingImplementation$Dart.prototype.$implements$DOMWrapperBase$Dart = 1;
_SQLErrorWrappingImplementation$Dart.prototype.$implements$DOMType$Dart = 1;
_SQLErrorWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(_SQLErrorWrappingImplementation$Dart, DOMWrapperBase$Dart);
_SQLErrorWrappingImplementation$Dart.$Constructor = function(){
  DOMWrapperBase$Dart.$Constructor.call(this);
}
;
_SQLErrorWrappingImplementation$Dart.$Initializer = function(){
  DOMWrapperBase$Dart.$Initializer.call(this);
}
;
_SQLErrorWrappingImplementation$Dart._SQLErrorWrappingImplementation$$Factory = function(){
  var tmp$0 = new _SQLErrorWrappingImplementation$Dart;
  tmp$0.$typeInfo = _SQLErrorWrappingImplementation$Dart.$lookupRTT();
  _SQLErrorWrappingImplementation$Dart.$Initializer.call(tmp$0);
  _SQLErrorWrappingImplementation$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
_SQLErrorWrappingImplementation$Dart.create__SQLErrorWrappingImplementation$member = function(){
  return _SQLErrorWrappingImplementation$Dart._SQLErrorWrappingImplementation$$Factory();
}
;
_SQLErrorWrappingImplementation$Dart.create__SQLErrorWrappingImplementation$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _SQLErrorWrappingImplementation$Dart.create__SQLErrorWrappingImplementation$member();
}
;
function native__SQLErrorWrappingImplementation_create__SQLErrorWrappingImplementation(){
  return _SQLErrorWrappingImplementation$Dart.create__SQLErrorWrappingImplementation$member();
}

_SQLErrorWrappingImplementation$Dart.create__SQLErrorWrappingImplementation$getter = function create__SQLErrorWrappingImplementation$getter(){
  return _SQLErrorWrappingImplementation$Dart.create__SQLErrorWrappingImplementation$named;
}
;
_SQLErrorWrappingImplementation$Dart.prototype.code$named = function(){
  return this.code$getter().apply(this, arguments);
}
;
_SQLErrorWrappingImplementation$Dart.prototype.code$getter = function(){
  return _SQLErrorWrappingImplementation$Dart._get__SQLError_code$$member_(this);
}
;
_SQLErrorWrappingImplementation$Dart._get__SQLError_code$$member_ = function(_this){
  return native__SQLErrorWrappingImplementation__get__SQLError_code(_this);
}
;
_SQLErrorWrappingImplementation$Dart._get__SQLError_code$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _SQLErrorWrappingImplementation$Dart._get__SQLError_code$$member_(_this);
}
;
_SQLErrorWrappingImplementation$Dart._get__SQLError_code$$getter_ = function _get__SQLError_code$$getter_(){
  return _SQLErrorWrappingImplementation$Dart._get__SQLError_code$$named_;
}
;
_SQLErrorWrappingImplementation$Dart.prototype.message$named = function(){
  return this.message$getter().apply(this, arguments);
}
;
_SQLErrorWrappingImplementation$Dart.prototype.message$getter = function(){
  return _SQLErrorWrappingImplementation$Dart._get__SQLError_message$$member_(this);
}
;
_SQLErrorWrappingImplementation$Dart._get__SQLError_message$$member_ = function(_this){
  return native__SQLErrorWrappingImplementation__get__SQLError_message(_this);
}
;
_SQLErrorWrappingImplementation$Dart._get__SQLError_message$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _SQLErrorWrappingImplementation$Dart._get__SQLError_message$$member_(_this);
}
;
_SQLErrorWrappingImplementation$Dart._get__SQLError_message$$getter_ = function _get__SQLError_message$$getter_(){
  return _SQLErrorWrappingImplementation$Dart._get__SQLError_message$$named_;
}
;
_SQLErrorWrappingImplementation$Dart.prototype.typeName$named = function(){
  return this.typeName$getter().apply(this, arguments);
}
;
_SQLErrorWrappingImplementation$Dart.prototype.typeName$getter = function(){
  return 'SQLError';
}
;
