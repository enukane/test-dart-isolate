function _PageTransitionEventWrappingImplementation$Dart(){
}

_PageTransitionEventWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('_PageTransitionEventWrappingImplementation$Dart'), _PageTransitionEventWrappingImplementation$Dart.$RTTimplements);
}
;
_PageTransitionEventWrappingImplementation$Dart.$RTTimplements = function(rtt){
  _PageTransitionEventWrappingImplementation$Dart.$addTo(rtt);
}
;
_PageTransitionEventWrappingImplementation$Dart.$addTo = function(target){
  var rtt = _PageTransitionEventWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  _EventWrappingImplementation$Dart.$addTo(target);
  PageTransitionEvent$Dart.$addTo(target);
}
;
_PageTransitionEventWrappingImplementation$Dart.prototype.$implements$_PageTransitionEventWrappingImplementation$Dart = 1;
_PageTransitionEventWrappingImplementation$Dart.prototype.$implements$PageTransitionEvent$Dart = 1;
_PageTransitionEventWrappingImplementation$Dart.prototype.$implements$Event$Dart = 1;
_PageTransitionEventWrappingImplementation$Dart.prototype.$implements$_EventWrappingImplementation$Dart = 1;
_PageTransitionEventWrappingImplementation$Dart.prototype.$implements$DOMWrapperBase$Dart = 1;
_PageTransitionEventWrappingImplementation$Dart.prototype.$implements$DOMType$Dart = 1;
_PageTransitionEventWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(_PageTransitionEventWrappingImplementation$Dart, _EventWrappingImplementation$Dart);
_PageTransitionEventWrappingImplementation$Dart.$Constructor = function(){
  _EventWrappingImplementation$Dart.$Constructor.call(this);
}
;
_PageTransitionEventWrappingImplementation$Dart.$Initializer = function(){
  _EventWrappingImplementation$Dart.$Initializer.call(this);
}
;
_PageTransitionEventWrappingImplementation$Dart._PageTransitionEventWrappingImplementation$$Factory = function(){
  var tmp$0 = new _PageTransitionEventWrappingImplementation$Dart;
  tmp$0.$typeInfo = _PageTransitionEventWrappingImplementation$Dart.$lookupRTT();
  _PageTransitionEventWrappingImplementation$Dart.$Initializer.call(tmp$0);
  _PageTransitionEventWrappingImplementation$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
_PageTransitionEventWrappingImplementation$Dart.create__PageTransitionEventWrappingImplementation$member = function(){
  return _PageTransitionEventWrappingImplementation$Dart._PageTransitionEventWrappingImplementation$$Factory();
}
;
_PageTransitionEventWrappingImplementation$Dart.create__PageTransitionEventWrappingImplementation$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _PageTransitionEventWrappingImplementation$Dart.create__PageTransitionEventWrappingImplementation$member();
}
;
function native__PageTransitionEventWrappingImplementation_create__PageTransitionEventWrappingImplementation(){
  return _PageTransitionEventWrappingImplementation$Dart.create__PageTransitionEventWrappingImplementation$member();
}

_PageTransitionEventWrappingImplementation$Dart.create__PageTransitionEventWrappingImplementation$getter = function create__PageTransitionEventWrappingImplementation$getter(){
  return _PageTransitionEventWrappingImplementation$Dart.create__PageTransitionEventWrappingImplementation$named;
}
;
_PageTransitionEventWrappingImplementation$Dart.prototype.persisted$named = function(){
  return this.persisted$getter().apply(this, arguments);
}
;
_PageTransitionEventWrappingImplementation$Dart.prototype.persisted$getter = function(){
  return _PageTransitionEventWrappingImplementation$Dart._get__PageTransitionEvent_persisted$$member_(this);
}
;
_PageTransitionEventWrappingImplementation$Dart._get__PageTransitionEvent_persisted$$member_ = function(_this){
  return native__PageTransitionEventWrappingImplementation__get__PageTransitionEvent_persisted(_this);
}
;
_PageTransitionEventWrappingImplementation$Dart._get__PageTransitionEvent_persisted$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _PageTransitionEventWrappingImplementation$Dart._get__PageTransitionEvent_persisted$$member_(_this);
}
;
_PageTransitionEventWrappingImplementation$Dart._get__PageTransitionEvent_persisted$$getter_ = function _get__PageTransitionEvent_persisted$$getter_(){
  return _PageTransitionEventWrappingImplementation$Dart._get__PageTransitionEvent_persisted$$named_;
}
;
_PageTransitionEventWrappingImplementation$Dart.prototype.initPageTransitionEvent$member = function(typeArg, canBubbleArg, cancelableArg, persisted){
  _PageTransitionEventWrappingImplementation$Dart._initPageTransitionEvent$$member_(this, typeArg, canBubbleArg, cancelableArg, persisted);
  return;
}
;
_PageTransitionEventWrappingImplementation$Dart.prototype.initPageTransitionEvent$named = function($n, $o, typeArg, canBubbleArg, cancelableArg, persisted){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 4)
    $nsme();
  return _PageTransitionEventWrappingImplementation$Dart.prototype.initPageTransitionEvent$member.call(this, typeArg, canBubbleArg, cancelableArg, persisted);
}
;
_PageTransitionEventWrappingImplementation$Dart.prototype.initPageTransitionEvent$getter = function initPageTransitionEvent$getter(){
  return $bind(_PageTransitionEventWrappingImplementation$Dart.prototype.initPageTransitionEvent$named, this);
}
;
_PageTransitionEventWrappingImplementation$Dart._initPageTransitionEvent$$member_ = function(receiver, typeArg, canBubbleArg, cancelableArg, persisted){
  return native__PageTransitionEventWrappingImplementation__initPageTransitionEvent(receiver, typeArg, canBubbleArg, cancelableArg, persisted);
}
;
_PageTransitionEventWrappingImplementation$Dart._initPageTransitionEvent$$named_ = function($n, $o, receiver, typeArg, canBubbleArg, cancelableArg, persisted){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 5)
    $nsme();
  return _PageTransitionEventWrappingImplementation$Dart._initPageTransitionEvent$$member_(receiver, typeArg, canBubbleArg, cancelableArg, persisted);
}
;
_PageTransitionEventWrappingImplementation$Dart._initPageTransitionEvent$$getter_ = function _initPageTransitionEvent$$getter_(){
  return _PageTransitionEventWrappingImplementation$Dart._initPageTransitionEvent$$named_;
}
;
_PageTransitionEventWrappingImplementation$Dart.prototype.typeName$named = function(){
  return this.typeName$getter().apply(this, arguments);
}
;
_PageTransitionEventWrappingImplementation$Dart.prototype.typeName$getter = function(){
  return 'PageTransitionEvent';
}
;
