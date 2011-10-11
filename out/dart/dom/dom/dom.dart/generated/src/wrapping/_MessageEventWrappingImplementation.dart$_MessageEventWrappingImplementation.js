function _MessageEventWrappingImplementation$Dart(){
}

_MessageEventWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('_MessageEventWrappingImplementation$Dart'), _MessageEventWrappingImplementation$Dart.$RTTimplements);
}
;
_MessageEventWrappingImplementation$Dart.$RTTimplements = function(rtt){
  _MessageEventWrappingImplementation$Dart.$addTo(rtt);
}
;
_MessageEventWrappingImplementation$Dart.$addTo = function(target){
  var rtt = _MessageEventWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  _EventWrappingImplementation$Dart.$addTo(target);
  MessageEvent$Dart.$addTo(target);
}
;
_MessageEventWrappingImplementation$Dart.prototype.$implements$_MessageEventWrappingImplementation$Dart = 1;
_MessageEventWrappingImplementation$Dart.prototype.$implements$MessageEvent$Dart = 1;
_MessageEventWrappingImplementation$Dart.prototype.$implements$Event$Dart = 1;
_MessageEventWrappingImplementation$Dart.prototype.$implements$_EventWrappingImplementation$Dart = 1;
_MessageEventWrappingImplementation$Dart.prototype.$implements$DOMWrapperBase$Dart = 1;
_MessageEventWrappingImplementation$Dart.prototype.$implements$DOMType$Dart = 1;
_MessageEventWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(_MessageEventWrappingImplementation$Dart, _EventWrappingImplementation$Dart);
_MessageEventWrappingImplementation$Dart.$Constructor = function(){
  _EventWrappingImplementation$Dart.$Constructor.call(this);
}
;
_MessageEventWrappingImplementation$Dart.$Initializer = function(){
  _EventWrappingImplementation$Dart.$Initializer.call(this);
}
;
_MessageEventWrappingImplementation$Dart._MessageEventWrappingImplementation$$Factory = function(){
  var tmp$0 = new _MessageEventWrappingImplementation$Dart;
  tmp$0.$typeInfo = _MessageEventWrappingImplementation$Dart.$lookupRTT();
  _MessageEventWrappingImplementation$Dart.$Initializer.call(tmp$0);
  _MessageEventWrappingImplementation$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
_MessageEventWrappingImplementation$Dart.create__MessageEventWrappingImplementation$member = function(){
  return _MessageEventWrappingImplementation$Dart._MessageEventWrappingImplementation$$Factory();
}
;
_MessageEventWrappingImplementation$Dart.create__MessageEventWrappingImplementation$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _MessageEventWrappingImplementation$Dart.create__MessageEventWrappingImplementation$member();
}
;
function native__MessageEventWrappingImplementation_create__MessageEventWrappingImplementation(){
  return _MessageEventWrappingImplementation$Dart.create__MessageEventWrappingImplementation$member();
}

_MessageEventWrappingImplementation$Dart.create__MessageEventWrappingImplementation$getter = function create__MessageEventWrappingImplementation$getter(){
  return _MessageEventWrappingImplementation$Dart.create__MessageEventWrappingImplementation$named;
}
;
_MessageEventWrappingImplementation$Dart.prototype.data$named = function(){
  return this.data$getter().apply(this, arguments);
}
;
_MessageEventWrappingImplementation$Dart.prototype.data$getter = function(){
  return _MessageEventWrappingImplementation$Dart._get__MessageEvent_data$$member_(this);
}
;
_MessageEventWrappingImplementation$Dart._get__MessageEvent_data$$member_ = function(_this){
  return native__MessageEventWrappingImplementation__get__MessageEvent_data(_this);
}
;
_MessageEventWrappingImplementation$Dart._get__MessageEvent_data$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _MessageEventWrappingImplementation$Dart._get__MessageEvent_data$$member_(_this);
}
;
_MessageEventWrappingImplementation$Dart._get__MessageEvent_data$$getter_ = function _get__MessageEvent_data$$getter_(){
  return _MessageEventWrappingImplementation$Dart._get__MessageEvent_data$$named_;
}
;
_MessageEventWrappingImplementation$Dart.prototype.lastEventId$named = function(){
  return this.lastEventId$getter().apply(this, arguments);
}
;
_MessageEventWrappingImplementation$Dart.prototype.lastEventId$getter = function(){
  return _MessageEventWrappingImplementation$Dart._get__MessageEvent_lastEventId$$member_(this);
}
;
_MessageEventWrappingImplementation$Dart._get__MessageEvent_lastEventId$$member_ = function(_this){
  return native__MessageEventWrappingImplementation__get__MessageEvent_lastEventId(_this);
}
;
_MessageEventWrappingImplementation$Dart._get__MessageEvent_lastEventId$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _MessageEventWrappingImplementation$Dart._get__MessageEvent_lastEventId$$member_(_this);
}
;
_MessageEventWrappingImplementation$Dart._get__MessageEvent_lastEventId$$getter_ = function _get__MessageEvent_lastEventId$$getter_(){
  return _MessageEventWrappingImplementation$Dart._get__MessageEvent_lastEventId$$named_;
}
;
_MessageEventWrappingImplementation$Dart.prototype.messagePort$named = function(){
  return this.messagePort$getter().apply(this, arguments);
}
;
_MessageEventWrappingImplementation$Dart.prototype.messagePort$getter = function(){
  return _MessageEventWrappingImplementation$Dart._get__MessageEvent_messagePort$$member_(this);
}
;
_MessageEventWrappingImplementation$Dart._get__MessageEvent_messagePort$$member_ = function(_this){
  return native__MessageEventWrappingImplementation__get__MessageEvent_messagePort(_this);
}
;
_MessageEventWrappingImplementation$Dart._get__MessageEvent_messagePort$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _MessageEventWrappingImplementation$Dart._get__MessageEvent_messagePort$$member_(_this);
}
;
_MessageEventWrappingImplementation$Dart._get__MessageEvent_messagePort$$getter_ = function _get__MessageEvent_messagePort$$getter_(){
  return _MessageEventWrappingImplementation$Dart._get__MessageEvent_messagePort$$named_;
}
;
_MessageEventWrappingImplementation$Dart.prototype.origin$named = function(){
  return this.origin$getter().apply(this, arguments);
}
;
_MessageEventWrappingImplementation$Dart.prototype.origin$getter = function(){
  return _MessageEventWrappingImplementation$Dart._get__MessageEvent_origin$$member_(this);
}
;
_MessageEventWrappingImplementation$Dart._get__MessageEvent_origin$$member_ = function(_this){
  return native__MessageEventWrappingImplementation__get__MessageEvent_origin(_this);
}
;
_MessageEventWrappingImplementation$Dart._get__MessageEvent_origin$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _MessageEventWrappingImplementation$Dart._get__MessageEvent_origin$$member_(_this);
}
;
_MessageEventWrappingImplementation$Dart._get__MessageEvent_origin$$getter_ = function _get__MessageEvent_origin$$getter_(){
  return _MessageEventWrappingImplementation$Dart._get__MessageEvent_origin$$named_;
}
;
_MessageEventWrappingImplementation$Dart.prototype.source$named = function(){
  return this.source$getter().apply(this, arguments);
}
;
_MessageEventWrappingImplementation$Dart.prototype.source$getter = function(){
  return _MessageEventWrappingImplementation$Dart._get__MessageEvent_source$$member_(this);
}
;
_MessageEventWrappingImplementation$Dart._get__MessageEvent_source$$member_ = function(_this){
  return native__MessageEventWrappingImplementation__get__MessageEvent_source(_this);
}
;
_MessageEventWrappingImplementation$Dart._get__MessageEvent_source$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _MessageEventWrappingImplementation$Dart._get__MessageEvent_source$$member_(_this);
}
;
_MessageEventWrappingImplementation$Dart._get__MessageEvent_source$$getter_ = function _get__MessageEvent_source$$getter_(){
  return _MessageEventWrappingImplementation$Dart._get__MessageEvent_source$$named_;
}
;
_MessageEventWrappingImplementation$Dart.prototype.initMessageEvent$member = function(typeArg, canBubbleArg, cancelableArg, dataArg, originArg, lastEventIdArg, sourceArg, messagePort){
  _MessageEventWrappingImplementation$Dart._initMessageEvent$$member_(this, typeArg, canBubbleArg, cancelableArg, dataArg, originArg, lastEventIdArg, sourceArg, messagePort);
  return;
}
;
_MessageEventWrappingImplementation$Dart.prototype.initMessageEvent$named = function($n, $o, typeArg, canBubbleArg, cancelableArg, dataArg, originArg, lastEventIdArg, sourceArg, messagePort){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 8)
    $nsme();
  return _MessageEventWrappingImplementation$Dart.prototype.initMessageEvent$member.call(this, typeArg, canBubbleArg, cancelableArg, dataArg, originArg, lastEventIdArg, sourceArg, messagePort);
}
;
_MessageEventWrappingImplementation$Dart.prototype.initMessageEvent$getter = function initMessageEvent$getter(){
  return $bind(_MessageEventWrappingImplementation$Dart.prototype.initMessageEvent$named, this);
}
;
_MessageEventWrappingImplementation$Dart._initMessageEvent$$member_ = function(receiver, typeArg, canBubbleArg, cancelableArg, dataArg, originArg, lastEventIdArg, sourceArg, messagePort){
  return native__MessageEventWrappingImplementation__initMessageEvent(receiver, typeArg, canBubbleArg, cancelableArg, dataArg, originArg, lastEventIdArg, sourceArg, messagePort);
}
;
_MessageEventWrappingImplementation$Dart._initMessageEvent$$named_ = function($n, $o, receiver, typeArg, canBubbleArg, cancelableArg, dataArg, originArg, lastEventIdArg, sourceArg, messagePort){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 9)
    $nsme();
  return _MessageEventWrappingImplementation$Dart._initMessageEvent$$member_(receiver, typeArg, canBubbleArg, cancelableArg, dataArg, originArg, lastEventIdArg, sourceArg, messagePort);
}
;
_MessageEventWrappingImplementation$Dart._initMessageEvent$$getter_ = function _initMessageEvent$$getter_(){
  return _MessageEventWrappingImplementation$Dart._initMessageEvent$$named_;
}
;
_MessageEventWrappingImplementation$Dart.prototype.typeName$named = function(){
  return this.typeName$getter().apply(this, arguments);
}
;
_MessageEventWrappingImplementation$Dart.prototype.typeName$getter = function(){
  return 'MessageEvent';
}
;
