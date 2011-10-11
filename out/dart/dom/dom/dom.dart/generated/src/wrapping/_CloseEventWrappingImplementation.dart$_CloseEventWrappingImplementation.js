function _CloseEventWrappingImplementation$Dart(){
}

_CloseEventWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('_CloseEventWrappingImplementation$Dart'), _CloseEventWrappingImplementation$Dart.$RTTimplements);
}
;
_CloseEventWrappingImplementation$Dart.$RTTimplements = function(rtt){
  _CloseEventWrappingImplementation$Dart.$addTo(rtt);
}
;
_CloseEventWrappingImplementation$Dart.$addTo = function(target){
  var rtt = _CloseEventWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  _EventWrappingImplementation$Dart.$addTo(target);
  CloseEvent$Dart.$addTo(target);
}
;
_CloseEventWrappingImplementation$Dart.prototype.$implements$_CloseEventWrappingImplementation$Dart = 1;
_CloseEventWrappingImplementation$Dart.prototype.$implements$CloseEvent$Dart = 1;
_CloseEventWrappingImplementation$Dart.prototype.$implements$Event$Dart = 1;
_CloseEventWrappingImplementation$Dart.prototype.$implements$_EventWrappingImplementation$Dart = 1;
_CloseEventWrappingImplementation$Dart.prototype.$implements$DOMWrapperBase$Dart = 1;
_CloseEventWrappingImplementation$Dart.prototype.$implements$DOMType$Dart = 1;
_CloseEventWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(_CloseEventWrappingImplementation$Dart, _EventWrappingImplementation$Dart);
_CloseEventWrappingImplementation$Dart.$Constructor = function(){
  _EventWrappingImplementation$Dart.$Constructor.call(this);
}
;
_CloseEventWrappingImplementation$Dart.$Initializer = function(){
  _EventWrappingImplementation$Dart.$Initializer.call(this);
}
;
_CloseEventWrappingImplementation$Dart._CloseEventWrappingImplementation$$Factory = function(){
  var tmp$0 = new _CloseEventWrappingImplementation$Dart;
  tmp$0.$typeInfo = _CloseEventWrappingImplementation$Dart.$lookupRTT();
  _CloseEventWrappingImplementation$Dart.$Initializer.call(tmp$0);
  _CloseEventWrappingImplementation$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
_CloseEventWrappingImplementation$Dart.create__CloseEventWrappingImplementation$member = function(){
  return _CloseEventWrappingImplementation$Dart._CloseEventWrappingImplementation$$Factory();
}
;
_CloseEventWrappingImplementation$Dart.create__CloseEventWrappingImplementation$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _CloseEventWrappingImplementation$Dart.create__CloseEventWrappingImplementation$member();
}
;
function native__CloseEventWrappingImplementation_create__CloseEventWrappingImplementation(){
  return _CloseEventWrappingImplementation$Dart.create__CloseEventWrappingImplementation$member();
}

_CloseEventWrappingImplementation$Dart.create__CloseEventWrappingImplementation$getter = function create__CloseEventWrappingImplementation$getter(){
  return _CloseEventWrappingImplementation$Dart.create__CloseEventWrappingImplementation$named;
}
;
_CloseEventWrappingImplementation$Dart.prototype.code$named = function(){
  return this.code$getter().apply(this, arguments);
}
;
_CloseEventWrappingImplementation$Dart.prototype.code$getter = function(){
  return _CloseEventWrappingImplementation$Dart._get__CloseEvent_code$$member_(this);
}
;
_CloseEventWrappingImplementation$Dart._get__CloseEvent_code$$member_ = function(_this){
  return native__CloseEventWrappingImplementation__get__CloseEvent_code(_this);
}
;
_CloseEventWrappingImplementation$Dart._get__CloseEvent_code$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _CloseEventWrappingImplementation$Dart._get__CloseEvent_code$$member_(_this);
}
;
_CloseEventWrappingImplementation$Dart._get__CloseEvent_code$$getter_ = function _get__CloseEvent_code$$getter_(){
  return _CloseEventWrappingImplementation$Dart._get__CloseEvent_code$$named_;
}
;
_CloseEventWrappingImplementation$Dart.prototype.reason$named = function(){
  return this.reason$getter().apply(this, arguments);
}
;
_CloseEventWrappingImplementation$Dart.prototype.reason$getter = function(){
  return _CloseEventWrappingImplementation$Dart._get__CloseEvent_reason$$member_(this);
}
;
_CloseEventWrappingImplementation$Dart._get__CloseEvent_reason$$member_ = function(_this){
  return native__CloseEventWrappingImplementation__get__CloseEvent_reason(_this);
}
;
_CloseEventWrappingImplementation$Dart._get__CloseEvent_reason$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _CloseEventWrappingImplementation$Dart._get__CloseEvent_reason$$member_(_this);
}
;
_CloseEventWrappingImplementation$Dart._get__CloseEvent_reason$$getter_ = function _get__CloseEvent_reason$$getter_(){
  return _CloseEventWrappingImplementation$Dart._get__CloseEvent_reason$$named_;
}
;
_CloseEventWrappingImplementation$Dart.prototype.wasClean$named = function(){
  return this.wasClean$getter().apply(this, arguments);
}
;
_CloseEventWrappingImplementation$Dart.prototype.wasClean$getter = function(){
  return _CloseEventWrappingImplementation$Dart._get__CloseEvent_wasClean$$member_(this);
}
;
_CloseEventWrappingImplementation$Dart._get__CloseEvent_wasClean$$member_ = function(_this){
  return native__CloseEventWrappingImplementation__get__CloseEvent_wasClean(_this);
}
;
_CloseEventWrappingImplementation$Dart._get__CloseEvent_wasClean$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _CloseEventWrappingImplementation$Dart._get__CloseEvent_wasClean$$member_(_this);
}
;
_CloseEventWrappingImplementation$Dart._get__CloseEvent_wasClean$$getter_ = function _get__CloseEvent_wasClean$$getter_(){
  return _CloseEventWrappingImplementation$Dart._get__CloseEvent_wasClean$$named_;
}
;
_CloseEventWrappingImplementation$Dart.prototype.initCloseEvent$member = function(typeArg, canBubbleArg, cancelableArg, wasCleanArg, codeArg, reasonArg){
  _CloseEventWrappingImplementation$Dart._initCloseEvent$$member_(this, typeArg, canBubbleArg, cancelableArg, wasCleanArg, codeArg, reasonArg);
  return;
}
;
_CloseEventWrappingImplementation$Dart.prototype.initCloseEvent$named = function($n, $o, typeArg, canBubbleArg, cancelableArg, wasCleanArg, codeArg, reasonArg){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 6)
    $nsme();
  return _CloseEventWrappingImplementation$Dart.prototype.initCloseEvent$member.call(this, typeArg, canBubbleArg, cancelableArg, wasCleanArg, codeArg, reasonArg);
}
;
_CloseEventWrappingImplementation$Dart.prototype.initCloseEvent$getter = function initCloseEvent$getter(){
  return $bind(_CloseEventWrappingImplementation$Dart.prototype.initCloseEvent$named, this);
}
;
_CloseEventWrappingImplementation$Dart._initCloseEvent$$member_ = function(receiver, typeArg, canBubbleArg, cancelableArg, wasCleanArg, codeArg, reasonArg){
  return native__CloseEventWrappingImplementation__initCloseEvent(receiver, typeArg, canBubbleArg, cancelableArg, wasCleanArg, codeArg, reasonArg);
}
;
_CloseEventWrappingImplementation$Dart._initCloseEvent$$named_ = function($n, $o, receiver, typeArg, canBubbleArg, cancelableArg, wasCleanArg, codeArg, reasonArg){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 7)
    $nsme();
  return _CloseEventWrappingImplementation$Dart._initCloseEvent$$member_(receiver, typeArg, canBubbleArg, cancelableArg, wasCleanArg, codeArg, reasonArg);
}
;
_CloseEventWrappingImplementation$Dart._initCloseEvent$$getter_ = function _initCloseEvent$$getter_(){
  return _CloseEventWrappingImplementation$Dart._initCloseEvent$$named_;
}
;
_CloseEventWrappingImplementation$Dart.prototype.typeName$named = function(){
  return this.typeName$getter().apply(this, arguments);
}
;
_CloseEventWrappingImplementation$Dart.prototype.typeName$getter = function(){
  return 'CloseEvent';
}
;
