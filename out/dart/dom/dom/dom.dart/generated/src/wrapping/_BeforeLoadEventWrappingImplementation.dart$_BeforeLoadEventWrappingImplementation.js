function _BeforeLoadEventWrappingImplementation$Dart(){
}

_BeforeLoadEventWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('_BeforeLoadEventWrappingImplementation$Dart'), _BeforeLoadEventWrappingImplementation$Dart.$RTTimplements);
}
;
_BeforeLoadEventWrappingImplementation$Dart.$RTTimplements = function(rtt){
  _BeforeLoadEventWrappingImplementation$Dart.$addTo(rtt);
}
;
_BeforeLoadEventWrappingImplementation$Dart.$addTo = function(target){
  var rtt = _BeforeLoadEventWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  _EventWrappingImplementation$Dart.$addTo(target);
  BeforeLoadEvent$Dart.$addTo(target);
}
;
_BeforeLoadEventWrappingImplementation$Dart.prototype.$implements$_BeforeLoadEventWrappingImplementation$Dart = 1;
_BeforeLoadEventWrappingImplementation$Dart.prototype.$implements$BeforeLoadEvent$Dart = 1;
_BeforeLoadEventWrappingImplementation$Dart.prototype.$implements$Event$Dart = 1;
_BeforeLoadEventWrappingImplementation$Dart.prototype.$implements$_EventWrappingImplementation$Dart = 1;
_BeforeLoadEventWrappingImplementation$Dart.prototype.$implements$DOMWrapperBase$Dart = 1;
_BeforeLoadEventWrappingImplementation$Dart.prototype.$implements$DOMType$Dart = 1;
_BeforeLoadEventWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(_BeforeLoadEventWrappingImplementation$Dart, _EventWrappingImplementation$Dart);
_BeforeLoadEventWrappingImplementation$Dart.$Constructor = function(){
  _EventWrappingImplementation$Dart.$Constructor.call(this);
}
;
_BeforeLoadEventWrappingImplementation$Dart.$Initializer = function(){
  _EventWrappingImplementation$Dart.$Initializer.call(this);
}
;
_BeforeLoadEventWrappingImplementation$Dart._BeforeLoadEventWrappingImplementation$$Factory = function(){
  var tmp$0 = new _BeforeLoadEventWrappingImplementation$Dart;
  tmp$0.$typeInfo = _BeforeLoadEventWrappingImplementation$Dart.$lookupRTT();
  _BeforeLoadEventWrappingImplementation$Dart.$Initializer.call(tmp$0);
  _BeforeLoadEventWrappingImplementation$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
_BeforeLoadEventWrappingImplementation$Dart.create__BeforeLoadEventWrappingImplementation$member = function(){
  return _BeforeLoadEventWrappingImplementation$Dart._BeforeLoadEventWrappingImplementation$$Factory();
}
;
_BeforeLoadEventWrappingImplementation$Dart.create__BeforeLoadEventWrappingImplementation$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _BeforeLoadEventWrappingImplementation$Dart.create__BeforeLoadEventWrappingImplementation$member();
}
;
function native__BeforeLoadEventWrappingImplementation_create__BeforeLoadEventWrappingImplementation(){
  return _BeforeLoadEventWrappingImplementation$Dart.create__BeforeLoadEventWrappingImplementation$member();
}

_BeforeLoadEventWrappingImplementation$Dart.create__BeforeLoadEventWrappingImplementation$getter = function create__BeforeLoadEventWrappingImplementation$getter(){
  return _BeforeLoadEventWrappingImplementation$Dart.create__BeforeLoadEventWrappingImplementation$named;
}
;
_BeforeLoadEventWrappingImplementation$Dart.prototype.url$named = function(){
  return this.url$getter().apply(this, arguments);
}
;
_BeforeLoadEventWrappingImplementation$Dart.prototype.url$getter = function(){
  return _BeforeLoadEventWrappingImplementation$Dart._get__BeforeLoadEvent_url$$member_(this);
}
;
_BeforeLoadEventWrappingImplementation$Dart._get__BeforeLoadEvent_url$$member_ = function(_this){
  return native__BeforeLoadEventWrappingImplementation__get__BeforeLoadEvent_url(_this);
}
;
_BeforeLoadEventWrappingImplementation$Dart._get__BeforeLoadEvent_url$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _BeforeLoadEventWrappingImplementation$Dart._get__BeforeLoadEvent_url$$member_(_this);
}
;
_BeforeLoadEventWrappingImplementation$Dart._get__BeforeLoadEvent_url$$getter_ = function _get__BeforeLoadEvent_url$$getter_(){
  return _BeforeLoadEventWrappingImplementation$Dart._get__BeforeLoadEvent_url$$named_;
}
;
_BeforeLoadEventWrappingImplementation$Dart.prototype.initBeforeLoadEvent$member = function(type, canBubble, cancelable, url){
  _BeforeLoadEventWrappingImplementation$Dart._initBeforeLoadEvent$$member_(this, type, canBubble, cancelable, url);
  return;
}
;
_BeforeLoadEventWrappingImplementation$Dart.prototype.initBeforeLoadEvent$named = function($n, $o, type, canBubble, cancelable, url){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 4)
    $nsme();
  return _BeforeLoadEventWrappingImplementation$Dart.prototype.initBeforeLoadEvent$member.call(this, type, canBubble, cancelable, url);
}
;
_BeforeLoadEventWrappingImplementation$Dart.prototype.initBeforeLoadEvent$getter = function initBeforeLoadEvent$getter(){
  return $bind(_BeforeLoadEventWrappingImplementation$Dart.prototype.initBeforeLoadEvent$named, this);
}
;
_BeforeLoadEventWrappingImplementation$Dart._initBeforeLoadEvent$$member_ = function(receiver, type, canBubble, cancelable, url){
  return native__BeforeLoadEventWrappingImplementation__initBeforeLoadEvent(receiver, type, canBubble, cancelable, url);
}
;
_BeforeLoadEventWrappingImplementation$Dart._initBeforeLoadEvent$$named_ = function($n, $o, receiver, type, canBubble, cancelable, url){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 5)
    $nsme();
  return _BeforeLoadEventWrappingImplementation$Dart._initBeforeLoadEvent$$member_(receiver, type, canBubble, cancelable, url);
}
;
_BeforeLoadEventWrappingImplementation$Dart._initBeforeLoadEvent$$getter_ = function _initBeforeLoadEvent$$getter_(){
  return _BeforeLoadEventWrappingImplementation$Dart._initBeforeLoadEvent$$named_;
}
;
_BeforeLoadEventWrappingImplementation$Dart.prototype.typeName$named = function(){
  return this.typeName$getter().apply(this, arguments);
}
;
_BeforeLoadEventWrappingImplementation$Dart.prototype.typeName$getter = function(){
  return 'BeforeLoadEvent';
}
;
