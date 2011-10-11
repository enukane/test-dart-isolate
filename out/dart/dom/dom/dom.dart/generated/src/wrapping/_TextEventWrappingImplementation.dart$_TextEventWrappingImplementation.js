function _TextEventWrappingImplementation$Dart(){
}

_TextEventWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('_TextEventWrappingImplementation$Dart'), _TextEventWrappingImplementation$Dart.$RTTimplements);
}
;
_TextEventWrappingImplementation$Dart.$RTTimplements = function(rtt){
  _TextEventWrappingImplementation$Dart.$addTo(rtt);
}
;
_TextEventWrappingImplementation$Dart.$addTo = function(target){
  var rtt = _TextEventWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  _UIEventWrappingImplementation$Dart.$addTo(target);
  TextEvent$Dart.$addTo(target);
}
;
_TextEventWrappingImplementation$Dart.prototype.$implements$_TextEventWrappingImplementation$Dart = 1;
_TextEventWrappingImplementation$Dart.prototype.$implements$TextEvent$Dart = 1;
_TextEventWrappingImplementation$Dart.prototype.$implements$UIEvent$Dart = 1;
_TextEventWrappingImplementation$Dart.prototype.$implements$Event$Dart = 1;
_TextEventWrappingImplementation$Dart.prototype.$implements$_UIEventWrappingImplementation$Dart = 1;
_TextEventWrappingImplementation$Dart.prototype.$implements$_EventWrappingImplementation$Dart = 1;
_TextEventWrappingImplementation$Dart.prototype.$implements$DOMWrapperBase$Dart = 1;
_TextEventWrappingImplementation$Dart.prototype.$implements$DOMType$Dart = 1;
_TextEventWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(_TextEventWrappingImplementation$Dart, _UIEventWrappingImplementation$Dart);
_TextEventWrappingImplementation$Dart.$Constructor = function(){
  _UIEventWrappingImplementation$Dart.$Constructor.call(this);
}
;
_TextEventWrappingImplementation$Dart.$Initializer = function(){
  _UIEventWrappingImplementation$Dart.$Initializer.call(this);
}
;
_TextEventWrappingImplementation$Dart._TextEventWrappingImplementation$$Factory = function(){
  var tmp$0 = new _TextEventWrappingImplementation$Dart;
  tmp$0.$typeInfo = _TextEventWrappingImplementation$Dart.$lookupRTT();
  _TextEventWrappingImplementation$Dart.$Initializer.call(tmp$0);
  _TextEventWrappingImplementation$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
_TextEventWrappingImplementation$Dart.create__TextEventWrappingImplementation$member = function(){
  return _TextEventWrappingImplementation$Dart._TextEventWrappingImplementation$$Factory();
}
;
_TextEventWrappingImplementation$Dart.create__TextEventWrappingImplementation$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _TextEventWrappingImplementation$Dart.create__TextEventWrappingImplementation$member();
}
;
function native__TextEventWrappingImplementation_create__TextEventWrappingImplementation(){
  return _TextEventWrappingImplementation$Dart.create__TextEventWrappingImplementation$member();
}

_TextEventWrappingImplementation$Dart.create__TextEventWrappingImplementation$getter = function create__TextEventWrappingImplementation$getter(){
  return _TextEventWrappingImplementation$Dart.create__TextEventWrappingImplementation$named;
}
;
_TextEventWrappingImplementation$Dart.prototype.data$named = function(){
  return this.data$getter().apply(this, arguments);
}
;
_TextEventWrappingImplementation$Dart.prototype.data$getter = function(){
  return _TextEventWrappingImplementation$Dart._get__TextEvent_data$$member_(this);
}
;
_TextEventWrappingImplementation$Dart._get__TextEvent_data$$member_ = function(_this){
  return native__TextEventWrappingImplementation__get__TextEvent_data(_this);
}
;
_TextEventWrappingImplementation$Dart._get__TextEvent_data$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _TextEventWrappingImplementation$Dart._get__TextEvent_data$$member_(_this);
}
;
_TextEventWrappingImplementation$Dart._get__TextEvent_data$$getter_ = function _get__TextEvent_data$$getter_(){
  return _TextEventWrappingImplementation$Dart._get__TextEvent_data$$named_;
}
;
_TextEventWrappingImplementation$Dart.prototype.initTextEvent$member = function(typeArg, canBubbleArg, cancelableArg, viewArg, dataArg){
  _TextEventWrappingImplementation$Dart._initTextEvent$$member_(this, typeArg, canBubbleArg, cancelableArg, viewArg, dataArg);
  return;
}
;
_TextEventWrappingImplementation$Dart.prototype.initTextEvent$named = function($n, $o, typeArg, canBubbleArg, cancelableArg, viewArg, dataArg){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 5)
    $nsme();
  return _TextEventWrappingImplementation$Dart.prototype.initTextEvent$member.call(this, typeArg, canBubbleArg, cancelableArg, viewArg, dataArg);
}
;
_TextEventWrappingImplementation$Dart.prototype.initTextEvent$getter = function initTextEvent$getter(){
  return $bind(_TextEventWrappingImplementation$Dart.prototype.initTextEvent$named, this);
}
;
_TextEventWrappingImplementation$Dart._initTextEvent$$member_ = function(receiver, typeArg, canBubbleArg, cancelableArg, viewArg, dataArg){
  return native__TextEventWrappingImplementation__initTextEvent(receiver, typeArg, canBubbleArg, cancelableArg, viewArg, dataArg);
}
;
_TextEventWrappingImplementation$Dart._initTextEvent$$named_ = function($n, $o, receiver, typeArg, canBubbleArg, cancelableArg, viewArg, dataArg){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 6)
    $nsme();
  return _TextEventWrappingImplementation$Dart._initTextEvent$$member_(receiver, typeArg, canBubbleArg, cancelableArg, viewArg, dataArg);
}
;
_TextEventWrappingImplementation$Dart._initTextEvent$$getter_ = function _initTextEvent$$getter_(){
  return _TextEventWrappingImplementation$Dart._initTextEvent$$named_;
}
;
_TextEventWrappingImplementation$Dart.prototype.typeName$named = function(){
  return this.typeName$getter().apply(this, arguments);
}
;
_TextEventWrappingImplementation$Dart.prototype.typeName$getter = function(){
  return 'TextEvent';
}
;
