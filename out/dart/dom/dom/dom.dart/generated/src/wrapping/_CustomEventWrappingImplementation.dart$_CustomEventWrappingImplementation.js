function _CustomEventWrappingImplementation$Dart(){
}

_CustomEventWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('_CustomEventWrappingImplementation$Dart'), _CustomEventWrappingImplementation$Dart.$RTTimplements);
}
;
_CustomEventWrappingImplementation$Dart.$RTTimplements = function(rtt){
  _CustomEventWrappingImplementation$Dart.$addTo(rtt);
}
;
_CustomEventWrappingImplementation$Dart.$addTo = function(target){
  var rtt = _CustomEventWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  _EventWrappingImplementation$Dart.$addTo(target);
  CustomEvent$Dart.$addTo(target);
}
;
_CustomEventWrappingImplementation$Dart.prototype.$implements$_CustomEventWrappingImplementation$Dart = 1;
_CustomEventWrappingImplementation$Dart.prototype.$implements$CustomEvent$Dart = 1;
_CustomEventWrappingImplementation$Dart.prototype.$implements$Event$Dart = 1;
_CustomEventWrappingImplementation$Dart.prototype.$implements$_EventWrappingImplementation$Dart = 1;
_CustomEventWrappingImplementation$Dart.prototype.$implements$DOMWrapperBase$Dart = 1;
_CustomEventWrappingImplementation$Dart.prototype.$implements$DOMType$Dart = 1;
_CustomEventWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(_CustomEventWrappingImplementation$Dart, _EventWrappingImplementation$Dart);
_CustomEventWrappingImplementation$Dart.$Constructor = function(){
  _EventWrappingImplementation$Dart.$Constructor.call(this);
}
;
_CustomEventWrappingImplementation$Dart.$Initializer = function(){
  _EventWrappingImplementation$Dart.$Initializer.call(this);
}
;
_CustomEventWrappingImplementation$Dart._CustomEventWrappingImplementation$$Factory = function(){
  var tmp$0 = new _CustomEventWrappingImplementation$Dart;
  tmp$0.$typeInfo = _CustomEventWrappingImplementation$Dart.$lookupRTT();
  _CustomEventWrappingImplementation$Dart.$Initializer.call(tmp$0);
  _CustomEventWrappingImplementation$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
_CustomEventWrappingImplementation$Dart.create__CustomEventWrappingImplementation$member = function(){
  return _CustomEventWrappingImplementation$Dart._CustomEventWrappingImplementation$$Factory();
}
;
_CustomEventWrappingImplementation$Dart.create__CustomEventWrappingImplementation$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _CustomEventWrappingImplementation$Dart.create__CustomEventWrappingImplementation$member();
}
;
function native__CustomEventWrappingImplementation_create__CustomEventWrappingImplementation(){
  return _CustomEventWrappingImplementation$Dart.create__CustomEventWrappingImplementation$member();
}

_CustomEventWrappingImplementation$Dart.create__CustomEventWrappingImplementation$getter = function create__CustomEventWrappingImplementation$getter(){
  return _CustomEventWrappingImplementation$Dart.create__CustomEventWrappingImplementation$named;
}
;
_CustomEventWrappingImplementation$Dart.prototype.detail$named = function(){
  return this.detail$getter().apply(this, arguments);
}
;
_CustomEventWrappingImplementation$Dart.prototype.detail$getter = function(){
  return _CustomEventWrappingImplementation$Dart._get__CustomEvent_detail$$member_(this);
}
;
_CustomEventWrappingImplementation$Dart._get__CustomEvent_detail$$member_ = function(_this){
  return native__CustomEventWrappingImplementation__get__CustomEvent_detail(_this);
}
;
_CustomEventWrappingImplementation$Dart._get__CustomEvent_detail$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _CustomEventWrappingImplementation$Dart._get__CustomEvent_detail$$member_(_this);
}
;
_CustomEventWrappingImplementation$Dart._get__CustomEvent_detail$$getter_ = function _get__CustomEvent_detail$$getter_(){
  return _CustomEventWrappingImplementation$Dart._get__CustomEvent_detail$$named_;
}
;
_CustomEventWrappingImplementation$Dart.prototype.initCustomEvent$member = function(typeArg, canBubbleArg, cancelableArg, detailArg){
  _CustomEventWrappingImplementation$Dart._initCustomEvent$$member_(this, typeArg, canBubbleArg, cancelableArg, detailArg);
  return;
}
;
_CustomEventWrappingImplementation$Dart.prototype.initCustomEvent$named = function($n, $o, typeArg, canBubbleArg, cancelableArg, detailArg){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 4)
    $nsme();
  return _CustomEventWrappingImplementation$Dart.prototype.initCustomEvent$member.call(this, typeArg, canBubbleArg, cancelableArg, detailArg);
}
;
_CustomEventWrappingImplementation$Dart.prototype.initCustomEvent$getter = function initCustomEvent$getter(){
  return $bind(_CustomEventWrappingImplementation$Dart.prototype.initCustomEvent$named, this);
}
;
_CustomEventWrappingImplementation$Dart._initCustomEvent$$member_ = function(receiver, typeArg, canBubbleArg, cancelableArg, detailArg){
  return native__CustomEventWrappingImplementation__initCustomEvent(receiver, typeArg, canBubbleArg, cancelableArg, detailArg);
}
;
_CustomEventWrappingImplementation$Dart._initCustomEvent$$named_ = function($n, $o, receiver, typeArg, canBubbleArg, cancelableArg, detailArg){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 5)
    $nsme();
  return _CustomEventWrappingImplementation$Dart._initCustomEvent$$member_(receiver, typeArg, canBubbleArg, cancelableArg, detailArg);
}
;
_CustomEventWrappingImplementation$Dart._initCustomEvent$$getter_ = function _initCustomEvent$$getter_(){
  return _CustomEventWrappingImplementation$Dart._initCustomEvent$$named_;
}
;
_CustomEventWrappingImplementation$Dart.prototype.typeName$named = function(){
  return this.typeName$getter().apply(this, arguments);
}
;
_CustomEventWrappingImplementation$Dart.prototype.typeName$getter = function(){
  return 'CustomEvent';
}
;
