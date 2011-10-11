function _ErrorEventWrappingImplementation$Dart(){
}

_ErrorEventWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('_ErrorEventWrappingImplementation$Dart'), _ErrorEventWrappingImplementation$Dart.$RTTimplements);
}
;
_ErrorEventWrappingImplementation$Dart.$RTTimplements = function(rtt){
  _ErrorEventWrappingImplementation$Dart.$addTo(rtt);
}
;
_ErrorEventWrappingImplementation$Dart.$addTo = function(target){
  var rtt = _ErrorEventWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  _EventWrappingImplementation$Dart.$addTo(target);
  ErrorEvent$Dart.$addTo(target);
}
;
_ErrorEventWrappingImplementation$Dart.prototype.$implements$_ErrorEventWrappingImplementation$Dart = 1;
_ErrorEventWrappingImplementation$Dart.prototype.$implements$ErrorEvent$Dart = 1;
_ErrorEventWrappingImplementation$Dart.prototype.$implements$Event$Dart = 1;
_ErrorEventWrappingImplementation$Dart.prototype.$implements$_EventWrappingImplementation$Dart = 1;
_ErrorEventWrappingImplementation$Dart.prototype.$implements$DOMWrapperBase$Dart = 1;
_ErrorEventWrappingImplementation$Dart.prototype.$implements$DOMType$Dart = 1;
_ErrorEventWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(_ErrorEventWrappingImplementation$Dart, _EventWrappingImplementation$Dart);
_ErrorEventWrappingImplementation$Dart.$Constructor = function(){
  _EventWrappingImplementation$Dart.$Constructor.call(this);
}
;
_ErrorEventWrappingImplementation$Dart.$Initializer = function(){
  _EventWrappingImplementation$Dart.$Initializer.call(this);
}
;
_ErrorEventWrappingImplementation$Dart._ErrorEventWrappingImplementation$$Factory = function(){
  var tmp$0 = new _ErrorEventWrappingImplementation$Dart;
  tmp$0.$typeInfo = _ErrorEventWrappingImplementation$Dart.$lookupRTT();
  _ErrorEventWrappingImplementation$Dart.$Initializer.call(tmp$0);
  _ErrorEventWrappingImplementation$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
_ErrorEventWrappingImplementation$Dart.create__ErrorEventWrappingImplementation$member = function(){
  return _ErrorEventWrappingImplementation$Dart._ErrorEventWrappingImplementation$$Factory();
}
;
_ErrorEventWrappingImplementation$Dart.create__ErrorEventWrappingImplementation$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _ErrorEventWrappingImplementation$Dart.create__ErrorEventWrappingImplementation$member();
}
;
function native__ErrorEventWrappingImplementation_create__ErrorEventWrappingImplementation(){
  return _ErrorEventWrappingImplementation$Dart.create__ErrorEventWrappingImplementation$member();
}

_ErrorEventWrappingImplementation$Dart.create__ErrorEventWrappingImplementation$getter = function create__ErrorEventWrappingImplementation$getter(){
  return _ErrorEventWrappingImplementation$Dart.create__ErrorEventWrappingImplementation$named;
}
;
_ErrorEventWrappingImplementation$Dart.prototype.filename$named = function(){
  return this.filename$getter().apply(this, arguments);
}
;
_ErrorEventWrappingImplementation$Dart.prototype.filename$getter = function(){
  return _ErrorEventWrappingImplementation$Dart._get__ErrorEvent_filename$$member_(this);
}
;
_ErrorEventWrappingImplementation$Dart._get__ErrorEvent_filename$$member_ = function(_this){
  return native__ErrorEventWrappingImplementation__get__ErrorEvent_filename(_this);
}
;
_ErrorEventWrappingImplementation$Dart._get__ErrorEvent_filename$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _ErrorEventWrappingImplementation$Dart._get__ErrorEvent_filename$$member_(_this);
}
;
_ErrorEventWrappingImplementation$Dart._get__ErrorEvent_filename$$getter_ = function _get__ErrorEvent_filename$$getter_(){
  return _ErrorEventWrappingImplementation$Dart._get__ErrorEvent_filename$$named_;
}
;
_ErrorEventWrappingImplementation$Dart.prototype.lineno$named = function(){
  return this.lineno$getter().apply(this, arguments);
}
;
_ErrorEventWrappingImplementation$Dart.prototype.lineno$getter = function(){
  return _ErrorEventWrappingImplementation$Dart._get__ErrorEvent_lineno$$member_(this);
}
;
_ErrorEventWrappingImplementation$Dart._get__ErrorEvent_lineno$$member_ = function(_this){
  return native__ErrorEventWrappingImplementation__get__ErrorEvent_lineno(_this);
}
;
_ErrorEventWrappingImplementation$Dart._get__ErrorEvent_lineno$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _ErrorEventWrappingImplementation$Dart._get__ErrorEvent_lineno$$member_(_this);
}
;
_ErrorEventWrappingImplementation$Dart._get__ErrorEvent_lineno$$getter_ = function _get__ErrorEvent_lineno$$getter_(){
  return _ErrorEventWrappingImplementation$Dart._get__ErrorEvent_lineno$$named_;
}
;
_ErrorEventWrappingImplementation$Dart.prototype.message$named = function(){
  return this.message$getter().apply(this, arguments);
}
;
_ErrorEventWrappingImplementation$Dart.prototype.message$getter = function(){
  return _ErrorEventWrappingImplementation$Dart._get__ErrorEvent_message$$member_(this);
}
;
_ErrorEventWrappingImplementation$Dart._get__ErrorEvent_message$$member_ = function(_this){
  return native__ErrorEventWrappingImplementation__get__ErrorEvent_message(_this);
}
;
_ErrorEventWrappingImplementation$Dart._get__ErrorEvent_message$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _ErrorEventWrappingImplementation$Dart._get__ErrorEvent_message$$member_(_this);
}
;
_ErrorEventWrappingImplementation$Dart._get__ErrorEvent_message$$getter_ = function _get__ErrorEvent_message$$getter_(){
  return _ErrorEventWrappingImplementation$Dart._get__ErrorEvent_message$$named_;
}
;
_ErrorEventWrappingImplementation$Dart.prototype.initErrorEvent$member = function(typeArg, canBubbleArg, cancelableArg, messageArg, filenameArg, linenoArg){
  _ErrorEventWrappingImplementation$Dart._initErrorEvent$$member_(this, typeArg, canBubbleArg, cancelableArg, messageArg, filenameArg, linenoArg);
  return;
}
;
_ErrorEventWrappingImplementation$Dart.prototype.initErrorEvent$named = function($n, $o, typeArg, canBubbleArg, cancelableArg, messageArg, filenameArg, linenoArg){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 6)
    $nsme();
  return _ErrorEventWrappingImplementation$Dart.prototype.initErrorEvent$member.call(this, typeArg, canBubbleArg, cancelableArg, messageArg, filenameArg, linenoArg);
}
;
_ErrorEventWrappingImplementation$Dart.prototype.initErrorEvent$getter = function initErrorEvent$getter(){
  return $bind(_ErrorEventWrappingImplementation$Dart.prototype.initErrorEvent$named, this);
}
;
_ErrorEventWrappingImplementation$Dart._initErrorEvent$$member_ = function(receiver, typeArg, canBubbleArg, cancelableArg, messageArg, filenameArg, linenoArg){
  return native__ErrorEventWrappingImplementation__initErrorEvent(receiver, typeArg, canBubbleArg, cancelableArg, messageArg, filenameArg, linenoArg);
}
;
_ErrorEventWrappingImplementation$Dart._initErrorEvent$$named_ = function($n, $o, receiver, typeArg, canBubbleArg, cancelableArg, messageArg, filenameArg, linenoArg){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 7)
    $nsme();
  return _ErrorEventWrappingImplementation$Dart._initErrorEvent$$member_(receiver, typeArg, canBubbleArg, cancelableArg, messageArg, filenameArg, linenoArg);
}
;
_ErrorEventWrappingImplementation$Dart._initErrorEvent$$getter_ = function _initErrorEvent$$getter_(){
  return _ErrorEventWrappingImplementation$Dart._initErrorEvent$$named_;
}
;
_ErrorEventWrappingImplementation$Dart.prototype.typeName$named = function(){
  return this.typeName$getter().apply(this, arguments);
}
;
_ErrorEventWrappingImplementation$Dart.prototype.typeName$getter = function(){
  return 'ErrorEvent';
}
;
