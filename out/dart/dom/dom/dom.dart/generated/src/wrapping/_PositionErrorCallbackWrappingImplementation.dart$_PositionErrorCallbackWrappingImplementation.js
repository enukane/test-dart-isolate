function _PositionErrorCallbackWrappingImplementation$Dart(){
}

_PositionErrorCallbackWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('_PositionErrorCallbackWrappingImplementation$Dart'), _PositionErrorCallbackWrappingImplementation$Dart.$RTTimplements);
}
;
_PositionErrorCallbackWrappingImplementation$Dart.$RTTimplements = function(rtt){
  _PositionErrorCallbackWrappingImplementation$Dart.$addTo(rtt);
}
;
_PositionErrorCallbackWrappingImplementation$Dart.$addTo = function(target){
  var rtt = _PositionErrorCallbackWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  DOMWrapperBase$Dart.$addTo(target);
  PositionErrorCallback$Dart.$addTo(target);
}
;
_PositionErrorCallbackWrappingImplementation$Dart.prototype.$implements$_PositionErrorCallbackWrappingImplementation$Dart = 1;
_PositionErrorCallbackWrappingImplementation$Dart.prototype.$implements$PositionErrorCallback$Dart = 1;
_PositionErrorCallbackWrappingImplementation$Dart.prototype.$implements$DOMWrapperBase$Dart = 1;
_PositionErrorCallbackWrappingImplementation$Dart.prototype.$implements$DOMType$Dart = 1;
_PositionErrorCallbackWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(_PositionErrorCallbackWrappingImplementation$Dart, DOMWrapperBase$Dart);
_PositionErrorCallbackWrappingImplementation$Dart.$Constructor = function(){
  DOMWrapperBase$Dart.$Constructor.call(this);
}
;
_PositionErrorCallbackWrappingImplementation$Dart.$Initializer = function(){
  DOMWrapperBase$Dart.$Initializer.call(this);
}
;
_PositionErrorCallbackWrappingImplementation$Dart._PositionErrorCallbackWrappingImplementation$$Factory = function(){
  var tmp$0 = new _PositionErrorCallbackWrappingImplementation$Dart;
  tmp$0.$typeInfo = _PositionErrorCallbackWrappingImplementation$Dart.$lookupRTT();
  _PositionErrorCallbackWrappingImplementation$Dart.$Initializer.call(tmp$0);
  _PositionErrorCallbackWrappingImplementation$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
_PositionErrorCallbackWrappingImplementation$Dart.create__PositionErrorCallbackWrappingImplementation$member = function(){
  return _PositionErrorCallbackWrappingImplementation$Dart._PositionErrorCallbackWrappingImplementation$$Factory();
}
;
_PositionErrorCallbackWrappingImplementation$Dart.create__PositionErrorCallbackWrappingImplementation$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _PositionErrorCallbackWrappingImplementation$Dart.create__PositionErrorCallbackWrappingImplementation$member();
}
;
function native__PositionErrorCallbackWrappingImplementation_create__PositionErrorCallbackWrappingImplementation(){
  return _PositionErrorCallbackWrappingImplementation$Dart.create__PositionErrorCallbackWrappingImplementation$member();
}

_PositionErrorCallbackWrappingImplementation$Dart.create__PositionErrorCallbackWrappingImplementation$getter = function create__PositionErrorCallbackWrappingImplementation$getter(){
  return _PositionErrorCallbackWrappingImplementation$Dart.create__PositionErrorCallbackWrappingImplementation$named;
}
;
_PositionErrorCallbackWrappingImplementation$Dart.prototype.handleEvent$member = function(error){
  return _PositionErrorCallbackWrappingImplementation$Dart._handleEvent$$member_(this, error);
}
;
_PositionErrorCallbackWrappingImplementation$Dart.prototype.handleEvent$named = function($n, $o, error){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _PositionErrorCallbackWrappingImplementation$Dart.prototype.handleEvent$member.call(this, error);
}
;
_PositionErrorCallbackWrappingImplementation$Dart.prototype.handleEvent$getter = function handleEvent$getter(){
  return $bind(_PositionErrorCallbackWrappingImplementation$Dart.prototype.handleEvent$named, this);
}
;
_PositionErrorCallbackWrappingImplementation$Dart._handleEvent$$member_ = function(receiver, error){
  return native__PositionErrorCallbackWrappingImplementation__handleEvent(receiver, error);
}
;
_PositionErrorCallbackWrappingImplementation$Dart._handleEvent$$named_ = function($n, $o, receiver, error){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _PositionErrorCallbackWrappingImplementation$Dart._handleEvent$$member_(receiver, error);
}
;
_PositionErrorCallbackWrappingImplementation$Dart._handleEvent$$getter_ = function _handleEvent$$getter_(){
  return _PositionErrorCallbackWrappingImplementation$Dart._handleEvent$$named_;
}
;
_PositionErrorCallbackWrappingImplementation$Dart.prototype.typeName$named = function(){
  return this.typeName$getter().apply(this, arguments);
}
;
_PositionErrorCallbackWrappingImplementation$Dart.prototype.typeName$getter = function(){
  return 'PositionErrorCallback';
}
;
