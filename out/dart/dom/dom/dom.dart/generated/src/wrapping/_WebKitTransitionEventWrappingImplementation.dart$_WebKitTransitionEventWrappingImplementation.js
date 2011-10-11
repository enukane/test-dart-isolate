function _WebKitTransitionEventWrappingImplementation$Dart(){
}

_WebKitTransitionEventWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('_WebKitTransitionEventWrappingImplementation$Dart'), _WebKitTransitionEventWrappingImplementation$Dart.$RTTimplements);
}
;
_WebKitTransitionEventWrappingImplementation$Dart.$RTTimplements = function(rtt){
  _WebKitTransitionEventWrappingImplementation$Dart.$addTo(rtt);
}
;
_WebKitTransitionEventWrappingImplementation$Dart.$addTo = function(target){
  var rtt = _WebKitTransitionEventWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  _EventWrappingImplementation$Dart.$addTo(target);
  WebKitTransitionEvent$Dart.$addTo(target);
}
;
_WebKitTransitionEventWrappingImplementation$Dart.prototype.$implements$_WebKitTransitionEventWrappingImplementation$Dart = 1;
_WebKitTransitionEventWrappingImplementation$Dart.prototype.$implements$WebKitTransitionEvent$Dart = 1;
_WebKitTransitionEventWrappingImplementation$Dart.prototype.$implements$Event$Dart = 1;
_WebKitTransitionEventWrappingImplementation$Dart.prototype.$implements$_EventWrappingImplementation$Dart = 1;
_WebKitTransitionEventWrappingImplementation$Dart.prototype.$implements$DOMWrapperBase$Dart = 1;
_WebKitTransitionEventWrappingImplementation$Dart.prototype.$implements$DOMType$Dart = 1;
_WebKitTransitionEventWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(_WebKitTransitionEventWrappingImplementation$Dart, _EventWrappingImplementation$Dart);
_WebKitTransitionEventWrappingImplementation$Dart.$Constructor = function(){
  _EventWrappingImplementation$Dart.$Constructor.call(this);
}
;
_WebKitTransitionEventWrappingImplementation$Dart.$Initializer = function(){
  _EventWrappingImplementation$Dart.$Initializer.call(this);
}
;
_WebKitTransitionEventWrappingImplementation$Dart._WebKitTransitionEventWrappingImplementation$$Factory = function(){
  var tmp$0 = new _WebKitTransitionEventWrappingImplementation$Dart;
  tmp$0.$typeInfo = _WebKitTransitionEventWrappingImplementation$Dart.$lookupRTT();
  _WebKitTransitionEventWrappingImplementation$Dart.$Initializer.call(tmp$0);
  _WebKitTransitionEventWrappingImplementation$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
_WebKitTransitionEventWrappingImplementation$Dart.create__WebKitTransitionEventWrappingImplementation$member = function(){
  return _WebKitTransitionEventWrappingImplementation$Dart._WebKitTransitionEventWrappingImplementation$$Factory();
}
;
_WebKitTransitionEventWrappingImplementation$Dart.create__WebKitTransitionEventWrappingImplementation$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _WebKitTransitionEventWrappingImplementation$Dart.create__WebKitTransitionEventWrappingImplementation$member();
}
;
function native__WebKitTransitionEventWrappingImplementation_create__WebKitTransitionEventWrappingImplementation(){
  return _WebKitTransitionEventWrappingImplementation$Dart.create__WebKitTransitionEventWrappingImplementation$member();
}

_WebKitTransitionEventWrappingImplementation$Dart.create__WebKitTransitionEventWrappingImplementation$getter = function create__WebKitTransitionEventWrappingImplementation$getter(){
  return _WebKitTransitionEventWrappingImplementation$Dart.create__WebKitTransitionEventWrappingImplementation$named;
}
;
_WebKitTransitionEventWrappingImplementation$Dart.prototype.elapsedTime$named = function(){
  return this.elapsedTime$getter().apply(this, arguments);
}
;
_WebKitTransitionEventWrappingImplementation$Dart.prototype.elapsedTime$getter = function(){
  return _WebKitTransitionEventWrappingImplementation$Dart._get__WebKitTransitionEvent_elapsedTime$$member_(this);
}
;
_WebKitTransitionEventWrappingImplementation$Dart._get__WebKitTransitionEvent_elapsedTime$$member_ = function(_this){
  return native__WebKitTransitionEventWrappingImplementation__get__WebKitTransitionEvent_elapsedTime(_this);
}
;
_WebKitTransitionEventWrappingImplementation$Dart._get__WebKitTransitionEvent_elapsedTime$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _WebKitTransitionEventWrappingImplementation$Dart._get__WebKitTransitionEvent_elapsedTime$$member_(_this);
}
;
_WebKitTransitionEventWrappingImplementation$Dart._get__WebKitTransitionEvent_elapsedTime$$getter_ = function _get__WebKitTransitionEvent_elapsedTime$$getter_(){
  return _WebKitTransitionEventWrappingImplementation$Dart._get__WebKitTransitionEvent_elapsedTime$$named_;
}
;
_WebKitTransitionEventWrappingImplementation$Dart.prototype.propertyName$named = function(){
  return this.propertyName$getter().apply(this, arguments);
}
;
_WebKitTransitionEventWrappingImplementation$Dart.prototype.propertyName$getter = function(){
  return _WebKitTransitionEventWrappingImplementation$Dart._get__WebKitTransitionEvent_propertyName$$member_(this);
}
;
_WebKitTransitionEventWrappingImplementation$Dart._get__WebKitTransitionEvent_propertyName$$member_ = function(_this){
  return native__WebKitTransitionEventWrappingImplementation__get__WebKitTransitionEvent_propertyName(_this);
}
;
_WebKitTransitionEventWrappingImplementation$Dart._get__WebKitTransitionEvent_propertyName$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _WebKitTransitionEventWrappingImplementation$Dart._get__WebKitTransitionEvent_propertyName$$member_(_this);
}
;
_WebKitTransitionEventWrappingImplementation$Dart._get__WebKitTransitionEvent_propertyName$$getter_ = function _get__WebKitTransitionEvent_propertyName$$getter_(){
  return _WebKitTransitionEventWrappingImplementation$Dart._get__WebKitTransitionEvent_propertyName$$named_;
}
;
_WebKitTransitionEventWrappingImplementation$Dart.prototype.initWebKitTransitionEvent$member = function(typeArg, canBubbleArg, cancelableArg, propertyNameArg, elapsedTimeArg){
  _WebKitTransitionEventWrappingImplementation$Dart._initWebKitTransitionEvent$$member_(this, typeArg, canBubbleArg, cancelableArg, propertyNameArg, elapsedTimeArg);
  return;
}
;
_WebKitTransitionEventWrappingImplementation$Dart.prototype.initWebKitTransitionEvent$named = function($n, $o, typeArg, canBubbleArg, cancelableArg, propertyNameArg, elapsedTimeArg){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 5)
    $nsme();
  return _WebKitTransitionEventWrappingImplementation$Dart.prototype.initWebKitTransitionEvent$member.call(this, typeArg, canBubbleArg, cancelableArg, propertyNameArg, elapsedTimeArg);
}
;
_WebKitTransitionEventWrappingImplementation$Dart.prototype.initWebKitTransitionEvent$getter = function initWebKitTransitionEvent$getter(){
  return $bind(_WebKitTransitionEventWrappingImplementation$Dart.prototype.initWebKitTransitionEvent$named, this);
}
;
_WebKitTransitionEventWrappingImplementation$Dart._initWebKitTransitionEvent$$member_ = function(receiver, typeArg, canBubbleArg, cancelableArg, propertyNameArg, elapsedTimeArg){
  return native__WebKitTransitionEventWrappingImplementation__initWebKitTransitionEvent(receiver, typeArg, canBubbleArg, cancelableArg, propertyNameArg, elapsedTimeArg);
}
;
_WebKitTransitionEventWrappingImplementation$Dart._initWebKitTransitionEvent$$named_ = function($n, $o, receiver, typeArg, canBubbleArg, cancelableArg, propertyNameArg, elapsedTimeArg){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 6)
    $nsme();
  return _WebKitTransitionEventWrappingImplementation$Dart._initWebKitTransitionEvent$$member_(receiver, typeArg, canBubbleArg, cancelableArg, propertyNameArg, elapsedTimeArg);
}
;
_WebKitTransitionEventWrappingImplementation$Dart._initWebKitTransitionEvent$$getter_ = function _initWebKitTransitionEvent$$getter_(){
  return _WebKitTransitionEventWrappingImplementation$Dart._initWebKitTransitionEvent$$named_;
}
;
_WebKitTransitionEventWrappingImplementation$Dart.prototype.typeName$named = function(){
  return this.typeName$getter().apply(this, arguments);
}
;
_WebKitTransitionEventWrappingImplementation$Dart.prototype.typeName$getter = function(){
  return 'WebKitTransitionEvent';
}
;
