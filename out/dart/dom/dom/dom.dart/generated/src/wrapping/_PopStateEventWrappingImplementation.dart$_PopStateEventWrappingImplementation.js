function _PopStateEventWrappingImplementation$Dart(){
}

_PopStateEventWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('_PopStateEventWrappingImplementation$Dart'), _PopStateEventWrappingImplementation$Dart.$RTTimplements);
}
;
_PopStateEventWrappingImplementation$Dart.$RTTimplements = function(rtt){
  _PopStateEventWrappingImplementation$Dart.$addTo(rtt);
}
;
_PopStateEventWrappingImplementation$Dart.$addTo = function(target){
  var rtt = _PopStateEventWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  _EventWrappingImplementation$Dart.$addTo(target);
  PopStateEvent$Dart.$addTo(target);
}
;
_PopStateEventWrappingImplementation$Dart.prototype.$implements$_PopStateEventWrappingImplementation$Dart = 1;
_PopStateEventWrappingImplementation$Dart.prototype.$implements$PopStateEvent$Dart = 1;
_PopStateEventWrappingImplementation$Dart.prototype.$implements$Event$Dart = 1;
_PopStateEventWrappingImplementation$Dart.prototype.$implements$_EventWrappingImplementation$Dart = 1;
_PopStateEventWrappingImplementation$Dart.prototype.$implements$DOMWrapperBase$Dart = 1;
_PopStateEventWrappingImplementation$Dart.prototype.$implements$DOMType$Dart = 1;
_PopStateEventWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(_PopStateEventWrappingImplementation$Dart, _EventWrappingImplementation$Dart);
_PopStateEventWrappingImplementation$Dart.$Constructor = function(){
  _EventWrappingImplementation$Dart.$Constructor.call(this);
}
;
_PopStateEventWrappingImplementation$Dart.$Initializer = function(){
  _EventWrappingImplementation$Dart.$Initializer.call(this);
}
;
_PopStateEventWrappingImplementation$Dart._PopStateEventWrappingImplementation$$Factory = function(){
  var tmp$0 = new _PopStateEventWrappingImplementation$Dart;
  tmp$0.$typeInfo = _PopStateEventWrappingImplementation$Dart.$lookupRTT();
  _PopStateEventWrappingImplementation$Dart.$Initializer.call(tmp$0);
  _PopStateEventWrappingImplementation$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
_PopStateEventWrappingImplementation$Dart.create__PopStateEventWrappingImplementation$member = function(){
  return _PopStateEventWrappingImplementation$Dart._PopStateEventWrappingImplementation$$Factory();
}
;
_PopStateEventWrappingImplementation$Dart.create__PopStateEventWrappingImplementation$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _PopStateEventWrappingImplementation$Dart.create__PopStateEventWrappingImplementation$member();
}
;
function native__PopStateEventWrappingImplementation_create__PopStateEventWrappingImplementation(){
  return _PopStateEventWrappingImplementation$Dart.create__PopStateEventWrappingImplementation$member();
}

_PopStateEventWrappingImplementation$Dart.create__PopStateEventWrappingImplementation$getter = function create__PopStateEventWrappingImplementation$getter(){
  return _PopStateEventWrappingImplementation$Dart.create__PopStateEventWrappingImplementation$named;
}
;
_PopStateEventWrappingImplementation$Dart.prototype.state$named = function(){
  return this.state$getter().apply(this, arguments);
}
;
_PopStateEventWrappingImplementation$Dart.prototype.state$getter = function(){
  return _PopStateEventWrappingImplementation$Dart._get__PopStateEvent_state$$member_(this);
}
;
_PopStateEventWrappingImplementation$Dart._get__PopStateEvent_state$$member_ = function(_this){
  return native__PopStateEventWrappingImplementation__get__PopStateEvent_state(_this);
}
;
_PopStateEventWrappingImplementation$Dart._get__PopStateEvent_state$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _PopStateEventWrappingImplementation$Dart._get__PopStateEvent_state$$member_(_this);
}
;
_PopStateEventWrappingImplementation$Dart._get__PopStateEvent_state$$getter_ = function _get__PopStateEvent_state$$getter_(){
  return _PopStateEventWrappingImplementation$Dart._get__PopStateEvent_state$$named_;
}
;
_PopStateEventWrappingImplementation$Dart.prototype.initPopStateEvent$member = function(typeArg, canBubbleArg, cancelableArg, stateArg){
  _PopStateEventWrappingImplementation$Dart._initPopStateEvent$$member_(this, typeArg, canBubbleArg, cancelableArg, stateArg);
  return;
}
;
_PopStateEventWrappingImplementation$Dart.prototype.initPopStateEvent$named = function($n, $o, typeArg, canBubbleArg, cancelableArg, stateArg){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 4)
    $nsme();
  return _PopStateEventWrappingImplementation$Dart.prototype.initPopStateEvent$member.call(this, typeArg, canBubbleArg, cancelableArg, stateArg);
}
;
_PopStateEventWrappingImplementation$Dart.prototype.initPopStateEvent$getter = function initPopStateEvent$getter(){
  return $bind(_PopStateEventWrappingImplementation$Dart.prototype.initPopStateEvent$named, this);
}
;
_PopStateEventWrappingImplementation$Dart._initPopStateEvent$$member_ = function(receiver, typeArg, canBubbleArg, cancelableArg, stateArg){
  return native__PopStateEventWrappingImplementation__initPopStateEvent(receiver, typeArg, canBubbleArg, cancelableArg, stateArg);
}
;
_PopStateEventWrappingImplementation$Dart._initPopStateEvent$$named_ = function($n, $o, receiver, typeArg, canBubbleArg, cancelableArg, stateArg){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 5)
    $nsme();
  return _PopStateEventWrappingImplementation$Dart._initPopStateEvent$$member_(receiver, typeArg, canBubbleArg, cancelableArg, stateArg);
}
;
_PopStateEventWrappingImplementation$Dart._initPopStateEvent$$getter_ = function _initPopStateEvent$$getter_(){
  return _PopStateEventWrappingImplementation$Dart._initPopStateEvent$$named_;
}
;
_PopStateEventWrappingImplementation$Dart.prototype.typeName$named = function(){
  return this.typeName$getter().apply(this, arguments);
}
;
_PopStateEventWrappingImplementation$Dart.prototype.typeName$getter = function(){
  return 'PopStateEvent';
}
;
