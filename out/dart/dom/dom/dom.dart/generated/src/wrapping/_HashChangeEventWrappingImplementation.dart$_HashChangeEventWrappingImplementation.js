function _HashChangeEventWrappingImplementation$Dart(){
}

_HashChangeEventWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('_HashChangeEventWrappingImplementation$Dart'), _HashChangeEventWrappingImplementation$Dart.$RTTimplements);
}
;
_HashChangeEventWrappingImplementation$Dart.$RTTimplements = function(rtt){
  _HashChangeEventWrappingImplementation$Dart.$addTo(rtt);
}
;
_HashChangeEventWrappingImplementation$Dart.$addTo = function(target){
  var rtt = _HashChangeEventWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  _EventWrappingImplementation$Dart.$addTo(target);
  HashChangeEvent$Dart.$addTo(target);
}
;
_HashChangeEventWrappingImplementation$Dart.prototype.$implements$_HashChangeEventWrappingImplementation$Dart = 1;
_HashChangeEventWrappingImplementation$Dart.prototype.$implements$HashChangeEvent$Dart = 1;
_HashChangeEventWrappingImplementation$Dart.prototype.$implements$Event$Dart = 1;
_HashChangeEventWrappingImplementation$Dart.prototype.$implements$_EventWrappingImplementation$Dart = 1;
_HashChangeEventWrappingImplementation$Dart.prototype.$implements$DOMWrapperBase$Dart = 1;
_HashChangeEventWrappingImplementation$Dart.prototype.$implements$DOMType$Dart = 1;
_HashChangeEventWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(_HashChangeEventWrappingImplementation$Dart, _EventWrappingImplementation$Dart);
_HashChangeEventWrappingImplementation$Dart.$Constructor = function(){
  _EventWrappingImplementation$Dart.$Constructor.call(this);
}
;
_HashChangeEventWrappingImplementation$Dart.$Initializer = function(){
  _EventWrappingImplementation$Dart.$Initializer.call(this);
}
;
_HashChangeEventWrappingImplementation$Dart._HashChangeEventWrappingImplementation$$Factory = function(){
  var tmp$0 = new _HashChangeEventWrappingImplementation$Dart;
  tmp$0.$typeInfo = _HashChangeEventWrappingImplementation$Dart.$lookupRTT();
  _HashChangeEventWrappingImplementation$Dart.$Initializer.call(tmp$0);
  _HashChangeEventWrappingImplementation$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
_HashChangeEventWrappingImplementation$Dart.create__HashChangeEventWrappingImplementation$member = function(){
  return _HashChangeEventWrappingImplementation$Dart._HashChangeEventWrappingImplementation$$Factory();
}
;
_HashChangeEventWrappingImplementation$Dart.create__HashChangeEventWrappingImplementation$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _HashChangeEventWrappingImplementation$Dart.create__HashChangeEventWrappingImplementation$member();
}
;
function native__HashChangeEventWrappingImplementation_create__HashChangeEventWrappingImplementation(){
  return _HashChangeEventWrappingImplementation$Dart.create__HashChangeEventWrappingImplementation$member();
}

_HashChangeEventWrappingImplementation$Dart.create__HashChangeEventWrappingImplementation$getter = function create__HashChangeEventWrappingImplementation$getter(){
  return _HashChangeEventWrappingImplementation$Dart.create__HashChangeEventWrappingImplementation$named;
}
;
_HashChangeEventWrappingImplementation$Dart.prototype.newURL$named = function(){
  return this.newURL$getter().apply(this, arguments);
}
;
_HashChangeEventWrappingImplementation$Dart.prototype.newURL$getter = function(){
  return _HashChangeEventWrappingImplementation$Dart._get__HashChangeEvent_newURL$$member_(this);
}
;
_HashChangeEventWrappingImplementation$Dart._get__HashChangeEvent_newURL$$member_ = function(_this){
  return native__HashChangeEventWrappingImplementation__get__HashChangeEvent_newURL(_this);
}
;
_HashChangeEventWrappingImplementation$Dart._get__HashChangeEvent_newURL$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _HashChangeEventWrappingImplementation$Dart._get__HashChangeEvent_newURL$$member_(_this);
}
;
_HashChangeEventWrappingImplementation$Dart._get__HashChangeEvent_newURL$$getter_ = function _get__HashChangeEvent_newURL$$getter_(){
  return _HashChangeEventWrappingImplementation$Dart._get__HashChangeEvent_newURL$$named_;
}
;
_HashChangeEventWrappingImplementation$Dart.prototype.oldURL$named = function(){
  return this.oldURL$getter().apply(this, arguments);
}
;
_HashChangeEventWrappingImplementation$Dart.prototype.oldURL$getter = function(){
  return _HashChangeEventWrappingImplementation$Dart._get__HashChangeEvent_oldURL$$member_(this);
}
;
_HashChangeEventWrappingImplementation$Dart._get__HashChangeEvent_oldURL$$member_ = function(_this){
  return native__HashChangeEventWrappingImplementation__get__HashChangeEvent_oldURL(_this);
}
;
_HashChangeEventWrappingImplementation$Dart._get__HashChangeEvent_oldURL$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _HashChangeEventWrappingImplementation$Dart._get__HashChangeEvent_oldURL$$member_(_this);
}
;
_HashChangeEventWrappingImplementation$Dart._get__HashChangeEvent_oldURL$$getter_ = function _get__HashChangeEvent_oldURL$$getter_(){
  return _HashChangeEventWrappingImplementation$Dart._get__HashChangeEvent_oldURL$$named_;
}
;
_HashChangeEventWrappingImplementation$Dart.prototype.initHashChangeEvent$member = function(type, canBubble, cancelable, oldURL, newURL){
  _HashChangeEventWrappingImplementation$Dart._initHashChangeEvent$$member_(this, type, canBubble, cancelable, oldURL, newURL);
  return;
}
;
_HashChangeEventWrappingImplementation$Dart.prototype.initHashChangeEvent$named = function($n, $o, type, canBubble, cancelable, oldURL, newURL){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 5)
    $nsme();
  return _HashChangeEventWrappingImplementation$Dart.prototype.initHashChangeEvent$member.call(this, type, canBubble, cancelable, oldURL, newURL);
}
;
_HashChangeEventWrappingImplementation$Dart.prototype.initHashChangeEvent$getter = function initHashChangeEvent$getter(){
  return $bind(_HashChangeEventWrappingImplementation$Dart.prototype.initHashChangeEvent$named, this);
}
;
_HashChangeEventWrappingImplementation$Dart._initHashChangeEvent$$member_ = function(receiver, type, canBubble, cancelable, oldURL, newURL){
  return native__HashChangeEventWrappingImplementation__initHashChangeEvent(receiver, type, canBubble, cancelable, oldURL, newURL);
}
;
_HashChangeEventWrappingImplementation$Dart._initHashChangeEvent$$named_ = function($n, $o, receiver, type, canBubble, cancelable, oldURL, newURL){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 6)
    $nsme();
  return _HashChangeEventWrappingImplementation$Dart._initHashChangeEvent$$member_(receiver, type, canBubble, cancelable, oldURL, newURL);
}
;
_HashChangeEventWrappingImplementation$Dart._initHashChangeEvent$$getter_ = function _initHashChangeEvent$$getter_(){
  return _HashChangeEventWrappingImplementation$Dart._initHashChangeEvent$$named_;
}
;
_HashChangeEventWrappingImplementation$Dart.prototype.typeName$named = function(){
  return this.typeName$getter().apply(this, arguments);
}
;
_HashChangeEventWrappingImplementation$Dart.prototype.typeName$getter = function(){
  return 'HashChangeEvent';
}
;
