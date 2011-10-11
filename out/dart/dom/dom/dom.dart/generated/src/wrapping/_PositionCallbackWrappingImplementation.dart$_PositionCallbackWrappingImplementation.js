function _PositionCallbackWrappingImplementation$Dart(){
}

_PositionCallbackWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('_PositionCallbackWrappingImplementation$Dart'), _PositionCallbackWrappingImplementation$Dart.$RTTimplements);
}
;
_PositionCallbackWrappingImplementation$Dart.$RTTimplements = function(rtt){
  _PositionCallbackWrappingImplementation$Dart.$addTo(rtt);
}
;
_PositionCallbackWrappingImplementation$Dart.$addTo = function(target){
  var rtt = _PositionCallbackWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  DOMWrapperBase$Dart.$addTo(target);
  PositionCallback$Dart.$addTo(target);
}
;
_PositionCallbackWrappingImplementation$Dart.prototype.$implements$_PositionCallbackWrappingImplementation$Dart = 1;
_PositionCallbackWrappingImplementation$Dart.prototype.$implements$PositionCallback$Dart = 1;
_PositionCallbackWrappingImplementation$Dart.prototype.$implements$DOMWrapperBase$Dart = 1;
_PositionCallbackWrappingImplementation$Dart.prototype.$implements$DOMType$Dart = 1;
_PositionCallbackWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(_PositionCallbackWrappingImplementation$Dart, DOMWrapperBase$Dart);
_PositionCallbackWrappingImplementation$Dart.$Constructor = function(){
  DOMWrapperBase$Dart.$Constructor.call(this);
}
;
_PositionCallbackWrappingImplementation$Dart.$Initializer = function(){
  DOMWrapperBase$Dart.$Initializer.call(this);
}
;
_PositionCallbackWrappingImplementation$Dart._PositionCallbackWrappingImplementation$$Factory = function(){
  var tmp$0 = new _PositionCallbackWrappingImplementation$Dart;
  tmp$0.$typeInfo = _PositionCallbackWrappingImplementation$Dart.$lookupRTT();
  _PositionCallbackWrappingImplementation$Dart.$Initializer.call(tmp$0);
  _PositionCallbackWrappingImplementation$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
_PositionCallbackWrappingImplementation$Dart.create__PositionCallbackWrappingImplementation$member = function(){
  return _PositionCallbackWrappingImplementation$Dart._PositionCallbackWrappingImplementation$$Factory();
}
;
_PositionCallbackWrappingImplementation$Dart.create__PositionCallbackWrappingImplementation$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _PositionCallbackWrappingImplementation$Dart.create__PositionCallbackWrappingImplementation$member();
}
;
function native__PositionCallbackWrappingImplementation_create__PositionCallbackWrappingImplementation(){
  return _PositionCallbackWrappingImplementation$Dart.create__PositionCallbackWrappingImplementation$member();
}

_PositionCallbackWrappingImplementation$Dart.create__PositionCallbackWrappingImplementation$getter = function create__PositionCallbackWrappingImplementation$getter(){
  return _PositionCallbackWrappingImplementation$Dart.create__PositionCallbackWrappingImplementation$named;
}
;
_PositionCallbackWrappingImplementation$Dart.prototype.handleEvent$member = function(position){
  return _PositionCallbackWrappingImplementation$Dart._handleEvent$$member_(this, position);
}
;
_PositionCallbackWrappingImplementation$Dart.prototype.handleEvent$named = function($n, $o, position){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _PositionCallbackWrappingImplementation$Dart.prototype.handleEvent$member.call(this, position);
}
;
_PositionCallbackWrappingImplementation$Dart.prototype.handleEvent$getter = function handleEvent$getter(){
  return $bind(_PositionCallbackWrappingImplementation$Dart.prototype.handleEvent$named, this);
}
;
_PositionCallbackWrappingImplementation$Dart._handleEvent$$member_ = function(receiver, position){
  return native__PositionCallbackWrappingImplementation__handleEvent(receiver, position);
}
;
_PositionCallbackWrappingImplementation$Dart._handleEvent$$named_ = function($n, $o, receiver, position){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _PositionCallbackWrappingImplementation$Dart._handleEvent$$member_(receiver, position);
}
;
_PositionCallbackWrappingImplementation$Dart._handleEvent$$getter_ = function _handleEvent$$getter_(){
  return _PositionCallbackWrappingImplementation$Dart._handleEvent$$named_;
}
;
_PositionCallbackWrappingImplementation$Dart.prototype.typeName$named = function(){
  return this.typeName$getter().apply(this, arguments);
}
;
_PositionCallbackWrappingImplementation$Dart.prototype.typeName$getter = function(){
  return 'PositionCallback';
}
;
