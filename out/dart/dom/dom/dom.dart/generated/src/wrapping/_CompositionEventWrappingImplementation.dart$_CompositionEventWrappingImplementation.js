function _CompositionEventWrappingImplementation$Dart(){
}

_CompositionEventWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('_CompositionEventWrappingImplementation$Dart'), _CompositionEventWrappingImplementation$Dart.$RTTimplements);
}
;
_CompositionEventWrappingImplementation$Dart.$RTTimplements = function(rtt){
  _CompositionEventWrappingImplementation$Dart.$addTo(rtt);
}
;
_CompositionEventWrappingImplementation$Dart.$addTo = function(target){
  var rtt = _CompositionEventWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  _UIEventWrappingImplementation$Dart.$addTo(target);
  CompositionEvent$Dart.$addTo(target);
}
;
_CompositionEventWrappingImplementation$Dart.prototype.$implements$_CompositionEventWrappingImplementation$Dart = 1;
_CompositionEventWrappingImplementation$Dart.prototype.$implements$CompositionEvent$Dart = 1;
_CompositionEventWrappingImplementation$Dart.prototype.$implements$UIEvent$Dart = 1;
_CompositionEventWrappingImplementation$Dart.prototype.$implements$Event$Dart = 1;
_CompositionEventWrappingImplementation$Dart.prototype.$implements$_UIEventWrappingImplementation$Dart = 1;
_CompositionEventWrappingImplementation$Dart.prototype.$implements$_EventWrappingImplementation$Dart = 1;
_CompositionEventWrappingImplementation$Dart.prototype.$implements$DOMWrapperBase$Dart = 1;
_CompositionEventWrappingImplementation$Dart.prototype.$implements$DOMType$Dart = 1;
_CompositionEventWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(_CompositionEventWrappingImplementation$Dart, _UIEventWrappingImplementation$Dart);
_CompositionEventWrappingImplementation$Dart.$Constructor = function(){
  _UIEventWrappingImplementation$Dart.$Constructor.call(this);
}
;
_CompositionEventWrappingImplementation$Dart.$Initializer = function(){
  _UIEventWrappingImplementation$Dart.$Initializer.call(this);
}
;
_CompositionEventWrappingImplementation$Dart._CompositionEventWrappingImplementation$$Factory = function(){
  var tmp$0 = new _CompositionEventWrappingImplementation$Dart;
  tmp$0.$typeInfo = _CompositionEventWrappingImplementation$Dart.$lookupRTT();
  _CompositionEventWrappingImplementation$Dart.$Initializer.call(tmp$0);
  _CompositionEventWrappingImplementation$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
_CompositionEventWrappingImplementation$Dart.create__CompositionEventWrappingImplementation$member = function(){
  return _CompositionEventWrappingImplementation$Dart._CompositionEventWrappingImplementation$$Factory();
}
;
_CompositionEventWrappingImplementation$Dart.create__CompositionEventWrappingImplementation$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _CompositionEventWrappingImplementation$Dart.create__CompositionEventWrappingImplementation$member();
}
;
function native__CompositionEventWrappingImplementation_create__CompositionEventWrappingImplementation(){
  return _CompositionEventWrappingImplementation$Dart.create__CompositionEventWrappingImplementation$member();
}

_CompositionEventWrappingImplementation$Dart.create__CompositionEventWrappingImplementation$getter = function create__CompositionEventWrappingImplementation$getter(){
  return _CompositionEventWrappingImplementation$Dart.create__CompositionEventWrappingImplementation$named;
}
;
_CompositionEventWrappingImplementation$Dart.prototype.data$named = function(){
  return this.data$getter().apply(this, arguments);
}
;
_CompositionEventWrappingImplementation$Dart.prototype.data$getter = function(){
  return _CompositionEventWrappingImplementation$Dart._get__CompositionEvent_data$$member_(this);
}
;
_CompositionEventWrappingImplementation$Dart._get__CompositionEvent_data$$member_ = function(_this){
  return native__CompositionEventWrappingImplementation__get__CompositionEvent_data(_this);
}
;
_CompositionEventWrappingImplementation$Dart._get__CompositionEvent_data$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _CompositionEventWrappingImplementation$Dart._get__CompositionEvent_data$$member_(_this);
}
;
_CompositionEventWrappingImplementation$Dart._get__CompositionEvent_data$$getter_ = function _get__CompositionEvent_data$$getter_(){
  return _CompositionEventWrappingImplementation$Dart._get__CompositionEvent_data$$named_;
}
;
_CompositionEventWrappingImplementation$Dart.prototype.initCompositionEvent$member = function(typeArg, canBubbleArg, cancelableArg, viewArg, dataArg){
  _CompositionEventWrappingImplementation$Dart._initCompositionEvent$$member_(this, typeArg, canBubbleArg, cancelableArg, viewArg, dataArg);
  return;
}
;
_CompositionEventWrappingImplementation$Dart.prototype.initCompositionEvent$named = function($n, $o, typeArg, canBubbleArg, cancelableArg, viewArg, dataArg){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 5)
    $nsme();
  return _CompositionEventWrappingImplementation$Dart.prototype.initCompositionEvent$member.call(this, typeArg, canBubbleArg, cancelableArg, viewArg, dataArg);
}
;
_CompositionEventWrappingImplementation$Dart.prototype.initCompositionEvent$getter = function initCompositionEvent$getter(){
  return $bind(_CompositionEventWrappingImplementation$Dart.prototype.initCompositionEvent$named, this);
}
;
_CompositionEventWrappingImplementation$Dart._initCompositionEvent$$member_ = function(receiver, typeArg, canBubbleArg, cancelableArg, viewArg, dataArg){
  return native__CompositionEventWrappingImplementation__initCompositionEvent(receiver, typeArg, canBubbleArg, cancelableArg, viewArg, dataArg);
}
;
_CompositionEventWrappingImplementation$Dart._initCompositionEvent$$named_ = function($n, $o, receiver, typeArg, canBubbleArg, cancelableArg, viewArg, dataArg){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 6)
    $nsme();
  return _CompositionEventWrappingImplementation$Dart._initCompositionEvent$$member_(receiver, typeArg, canBubbleArg, cancelableArg, viewArg, dataArg);
}
;
_CompositionEventWrappingImplementation$Dart._initCompositionEvent$$getter_ = function _initCompositionEvent$$getter_(){
  return _CompositionEventWrappingImplementation$Dart._initCompositionEvent$$named_;
}
;
_CompositionEventWrappingImplementation$Dart.prototype.typeName$named = function(){
  return this.typeName$getter().apply(this, arguments);
}
;
_CompositionEventWrappingImplementation$Dart.prototype.typeName$getter = function(){
  return 'CompositionEvent';
}
;
