function _WebKitAnimationEventWrappingImplementation$Dart(){
}

_WebKitAnimationEventWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('_WebKitAnimationEventWrappingImplementation$Dart'), _WebKitAnimationEventWrappingImplementation$Dart.$RTTimplements);
}
;
_WebKitAnimationEventWrappingImplementation$Dart.$RTTimplements = function(rtt){
  _WebKitAnimationEventWrappingImplementation$Dart.$addTo(rtt);
}
;
_WebKitAnimationEventWrappingImplementation$Dart.$addTo = function(target){
  var rtt = _WebKitAnimationEventWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  _EventWrappingImplementation$Dart.$addTo(target);
  WebKitAnimationEvent$Dart.$addTo(target);
}
;
_WebKitAnimationEventWrappingImplementation$Dart.prototype.$implements$_WebKitAnimationEventWrappingImplementation$Dart = 1;
_WebKitAnimationEventWrappingImplementation$Dart.prototype.$implements$WebKitAnimationEvent$Dart = 1;
_WebKitAnimationEventWrappingImplementation$Dart.prototype.$implements$Event$Dart = 1;
_WebKitAnimationEventWrappingImplementation$Dart.prototype.$implements$_EventWrappingImplementation$Dart = 1;
_WebKitAnimationEventWrappingImplementation$Dart.prototype.$implements$DOMWrapperBase$Dart = 1;
_WebKitAnimationEventWrappingImplementation$Dart.prototype.$implements$DOMType$Dart = 1;
_WebKitAnimationEventWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(_WebKitAnimationEventWrappingImplementation$Dart, _EventWrappingImplementation$Dart);
_WebKitAnimationEventWrappingImplementation$Dart.$Constructor = function(){
  _EventWrappingImplementation$Dart.$Constructor.call(this);
}
;
_WebKitAnimationEventWrappingImplementation$Dart.$Initializer = function(){
  _EventWrappingImplementation$Dart.$Initializer.call(this);
}
;
_WebKitAnimationEventWrappingImplementation$Dart._WebKitAnimationEventWrappingImplementation$$Factory = function(){
  var tmp$0 = new _WebKitAnimationEventWrappingImplementation$Dart;
  tmp$0.$typeInfo = _WebKitAnimationEventWrappingImplementation$Dart.$lookupRTT();
  _WebKitAnimationEventWrappingImplementation$Dart.$Initializer.call(tmp$0);
  _WebKitAnimationEventWrappingImplementation$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
_WebKitAnimationEventWrappingImplementation$Dart.create__WebKitAnimationEventWrappingImplementation$member = function(){
  return _WebKitAnimationEventWrappingImplementation$Dart._WebKitAnimationEventWrappingImplementation$$Factory();
}
;
_WebKitAnimationEventWrappingImplementation$Dart.create__WebKitAnimationEventWrappingImplementation$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _WebKitAnimationEventWrappingImplementation$Dart.create__WebKitAnimationEventWrappingImplementation$member();
}
;
function native__WebKitAnimationEventWrappingImplementation_create__WebKitAnimationEventWrappingImplementation(){
  return _WebKitAnimationEventWrappingImplementation$Dart.create__WebKitAnimationEventWrappingImplementation$member();
}

_WebKitAnimationEventWrappingImplementation$Dart.create__WebKitAnimationEventWrappingImplementation$getter = function create__WebKitAnimationEventWrappingImplementation$getter(){
  return _WebKitAnimationEventWrappingImplementation$Dart.create__WebKitAnimationEventWrappingImplementation$named;
}
;
_WebKitAnimationEventWrappingImplementation$Dart.prototype.animationName$named = function(){
  return this.animationName$getter().apply(this, arguments);
}
;
_WebKitAnimationEventWrappingImplementation$Dart.prototype.animationName$getter = function(){
  return _WebKitAnimationEventWrappingImplementation$Dart._get__WebKitAnimationEvent_animationName$$member_(this);
}
;
_WebKitAnimationEventWrappingImplementation$Dart._get__WebKitAnimationEvent_animationName$$member_ = function(_this){
  return native__WebKitAnimationEventWrappingImplementation__get__WebKitAnimationEvent_animationName(_this);
}
;
_WebKitAnimationEventWrappingImplementation$Dart._get__WebKitAnimationEvent_animationName$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _WebKitAnimationEventWrappingImplementation$Dart._get__WebKitAnimationEvent_animationName$$member_(_this);
}
;
_WebKitAnimationEventWrappingImplementation$Dart._get__WebKitAnimationEvent_animationName$$getter_ = function _get__WebKitAnimationEvent_animationName$$getter_(){
  return _WebKitAnimationEventWrappingImplementation$Dart._get__WebKitAnimationEvent_animationName$$named_;
}
;
_WebKitAnimationEventWrappingImplementation$Dart.prototype.elapsedTime$named = function(){
  return this.elapsedTime$getter().apply(this, arguments);
}
;
_WebKitAnimationEventWrappingImplementation$Dart.prototype.elapsedTime$getter = function(){
  return _WebKitAnimationEventWrappingImplementation$Dart._get__WebKitAnimationEvent_elapsedTime$$member_(this);
}
;
_WebKitAnimationEventWrappingImplementation$Dart._get__WebKitAnimationEvent_elapsedTime$$member_ = function(_this){
  return native__WebKitAnimationEventWrappingImplementation__get__WebKitAnimationEvent_elapsedTime(_this);
}
;
_WebKitAnimationEventWrappingImplementation$Dart._get__WebKitAnimationEvent_elapsedTime$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _WebKitAnimationEventWrappingImplementation$Dart._get__WebKitAnimationEvent_elapsedTime$$member_(_this);
}
;
_WebKitAnimationEventWrappingImplementation$Dart._get__WebKitAnimationEvent_elapsedTime$$getter_ = function _get__WebKitAnimationEvent_elapsedTime$$getter_(){
  return _WebKitAnimationEventWrappingImplementation$Dart._get__WebKitAnimationEvent_elapsedTime$$named_;
}
;
_WebKitAnimationEventWrappingImplementation$Dart.prototype.initWebKitAnimationEvent$member = function(typeArg, canBubbleArg, cancelableArg, animationNameArg, elapsedTimeArg){
  _WebKitAnimationEventWrappingImplementation$Dart._initWebKitAnimationEvent$$member_(this, typeArg, canBubbleArg, cancelableArg, animationNameArg, elapsedTimeArg);
  return;
}
;
_WebKitAnimationEventWrappingImplementation$Dart.prototype.initWebKitAnimationEvent$named = function($n, $o, typeArg, canBubbleArg, cancelableArg, animationNameArg, elapsedTimeArg){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 5)
    $nsme();
  return _WebKitAnimationEventWrappingImplementation$Dart.prototype.initWebKitAnimationEvent$member.call(this, typeArg, canBubbleArg, cancelableArg, animationNameArg, elapsedTimeArg);
}
;
_WebKitAnimationEventWrappingImplementation$Dart.prototype.initWebKitAnimationEvent$getter = function initWebKitAnimationEvent$getter(){
  return $bind(_WebKitAnimationEventWrappingImplementation$Dart.prototype.initWebKitAnimationEvent$named, this);
}
;
_WebKitAnimationEventWrappingImplementation$Dart._initWebKitAnimationEvent$$member_ = function(receiver, typeArg, canBubbleArg, cancelableArg, animationNameArg, elapsedTimeArg){
  return native__WebKitAnimationEventWrappingImplementation__initWebKitAnimationEvent(receiver, typeArg, canBubbleArg, cancelableArg, animationNameArg, elapsedTimeArg);
}
;
_WebKitAnimationEventWrappingImplementation$Dart._initWebKitAnimationEvent$$named_ = function($n, $o, receiver, typeArg, canBubbleArg, cancelableArg, animationNameArg, elapsedTimeArg){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 6)
    $nsme();
  return _WebKitAnimationEventWrappingImplementation$Dart._initWebKitAnimationEvent$$member_(receiver, typeArg, canBubbleArg, cancelableArg, animationNameArg, elapsedTimeArg);
}
;
_WebKitAnimationEventWrappingImplementation$Dart._initWebKitAnimationEvent$$getter_ = function _initWebKitAnimationEvent$$getter_(){
  return _WebKitAnimationEventWrappingImplementation$Dart._initWebKitAnimationEvent$$named_;
}
;
_WebKitAnimationEventWrappingImplementation$Dart.prototype.typeName$named = function(){
  return this.typeName$getter().apply(this, arguments);
}
;
_WebKitAnimationEventWrappingImplementation$Dart.prototype.typeName$getter = function(){
  return 'WebKitAnimationEvent';
}
;
