function _EventExceptionWrappingImplementation$Dart(){
}

_EventExceptionWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('_EventExceptionWrappingImplementation$Dart'), _EventExceptionWrappingImplementation$Dart.$RTTimplements);
}
;
_EventExceptionWrappingImplementation$Dart.$RTTimplements = function(rtt){
  _EventExceptionWrappingImplementation$Dart.$addTo(rtt);
}
;
_EventExceptionWrappingImplementation$Dart.$addTo = function(target){
  var rtt = _EventExceptionWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  DOMWrapperBase$Dart.$addTo(target);
  EventException$Dart.$addTo(target);
}
;
_EventExceptionWrappingImplementation$Dart.prototype.$implements$_EventExceptionWrappingImplementation$Dart = 1;
_EventExceptionWrappingImplementation$Dart.prototype.$implements$EventException$Dart = 1;
_EventExceptionWrappingImplementation$Dart.prototype.$implements$DOMWrapperBase$Dart = 1;
_EventExceptionWrappingImplementation$Dart.prototype.$implements$DOMType$Dart = 1;
_EventExceptionWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(_EventExceptionWrappingImplementation$Dart, DOMWrapperBase$Dart);
_EventExceptionWrappingImplementation$Dart.$Constructor = function(){
  DOMWrapperBase$Dart.$Constructor.call(this);
}
;
_EventExceptionWrappingImplementation$Dart.$Initializer = function(){
  DOMWrapperBase$Dart.$Initializer.call(this);
}
;
_EventExceptionWrappingImplementation$Dart._EventExceptionWrappingImplementation$$Factory = function(){
  var tmp$0 = new _EventExceptionWrappingImplementation$Dart;
  tmp$0.$typeInfo = _EventExceptionWrappingImplementation$Dart.$lookupRTT();
  _EventExceptionWrappingImplementation$Dart.$Initializer.call(tmp$0);
  _EventExceptionWrappingImplementation$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
_EventExceptionWrappingImplementation$Dart.create__EventExceptionWrappingImplementation$member = function(){
  return _EventExceptionWrappingImplementation$Dart._EventExceptionWrappingImplementation$$Factory();
}
;
_EventExceptionWrappingImplementation$Dart.create__EventExceptionWrappingImplementation$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _EventExceptionWrappingImplementation$Dart.create__EventExceptionWrappingImplementation$member();
}
;
function native__EventExceptionWrappingImplementation_create__EventExceptionWrappingImplementation(){
  return _EventExceptionWrappingImplementation$Dart.create__EventExceptionWrappingImplementation$member();
}

_EventExceptionWrappingImplementation$Dart.create__EventExceptionWrappingImplementation$getter = function create__EventExceptionWrappingImplementation$getter(){
  return _EventExceptionWrappingImplementation$Dart.create__EventExceptionWrappingImplementation$named;
}
;
_EventExceptionWrappingImplementation$Dart.prototype.code$named = function(){
  return this.code$getter().apply(this, arguments);
}
;
_EventExceptionWrappingImplementation$Dart.prototype.code$getter = function(){
  return _EventExceptionWrappingImplementation$Dart._get__EventException_code$$member_(this);
}
;
_EventExceptionWrappingImplementation$Dart._get__EventException_code$$member_ = function(_this){
  return native__EventExceptionWrappingImplementation__get__EventException_code(_this);
}
;
_EventExceptionWrappingImplementation$Dart._get__EventException_code$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _EventExceptionWrappingImplementation$Dart._get__EventException_code$$member_(_this);
}
;
_EventExceptionWrappingImplementation$Dart._get__EventException_code$$getter_ = function _get__EventException_code$$getter_(){
  return _EventExceptionWrappingImplementation$Dart._get__EventException_code$$named_;
}
;
_EventExceptionWrappingImplementation$Dart.prototype.message$named = function(){
  return this.message$getter().apply(this, arguments);
}
;
_EventExceptionWrappingImplementation$Dart.prototype.message$getter = function(){
  return _EventExceptionWrappingImplementation$Dart._get__EventException_message$$member_(this);
}
;
_EventExceptionWrappingImplementation$Dart._get__EventException_message$$member_ = function(_this){
  return native__EventExceptionWrappingImplementation__get__EventException_message(_this);
}
;
_EventExceptionWrappingImplementation$Dart._get__EventException_message$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _EventExceptionWrappingImplementation$Dart._get__EventException_message$$member_(_this);
}
;
_EventExceptionWrappingImplementation$Dart._get__EventException_message$$getter_ = function _get__EventException_message$$getter_(){
  return _EventExceptionWrappingImplementation$Dart._get__EventException_message$$named_;
}
;
_EventExceptionWrappingImplementation$Dart.prototype.name$named = function(){
  return this.name$getter().apply(this, arguments);
}
;
_EventExceptionWrappingImplementation$Dart.prototype.name$getter = function(){
  return _EventExceptionWrappingImplementation$Dart._get__EventException_name$$member_(this);
}
;
_EventExceptionWrappingImplementation$Dart._get__EventException_name$$member_ = function(_this){
  return native__EventExceptionWrappingImplementation__get__EventException_name(_this);
}
;
_EventExceptionWrappingImplementation$Dart._get__EventException_name$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _EventExceptionWrappingImplementation$Dart._get__EventException_name$$member_(_this);
}
;
_EventExceptionWrappingImplementation$Dart._get__EventException_name$$getter_ = function _get__EventException_name$$getter_(){
  return _EventExceptionWrappingImplementation$Dart._get__EventException_name$$named_;
}
;
_EventExceptionWrappingImplementation$Dart.prototype.typeName$named = function(){
  return this.typeName$getter().apply(this, arguments);
}
;
_EventExceptionWrappingImplementation$Dart.prototype.typeName$getter = function(){
  return 'EventException';
}
;
