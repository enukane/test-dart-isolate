function _CanvasGradientWrappingImplementation$Dart(){
}

_CanvasGradientWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('_CanvasGradientWrappingImplementation$Dart'), _CanvasGradientWrappingImplementation$Dart.$RTTimplements);
}
;
_CanvasGradientWrappingImplementation$Dart.$RTTimplements = function(rtt){
  _CanvasGradientWrappingImplementation$Dart.$addTo(rtt);
}
;
_CanvasGradientWrappingImplementation$Dart.$addTo = function(target){
  var rtt = _CanvasGradientWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  DOMWrapperBase$Dart.$addTo(target);
  CanvasGradient$Dart.$addTo(target);
}
;
_CanvasGradientWrappingImplementation$Dart.prototype.$implements$_CanvasGradientWrappingImplementation$Dart = 1;
_CanvasGradientWrappingImplementation$Dart.prototype.$implements$CanvasGradient$Dart = 1;
_CanvasGradientWrappingImplementation$Dart.prototype.$implements$DOMWrapperBase$Dart = 1;
_CanvasGradientWrappingImplementation$Dart.prototype.$implements$DOMType$Dart = 1;
_CanvasGradientWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(_CanvasGradientWrappingImplementation$Dart, DOMWrapperBase$Dart);
_CanvasGradientWrappingImplementation$Dart.$Constructor = function(){
  DOMWrapperBase$Dart.$Constructor.call(this);
}
;
_CanvasGradientWrappingImplementation$Dart.$Initializer = function(){
  DOMWrapperBase$Dart.$Initializer.call(this);
}
;
_CanvasGradientWrappingImplementation$Dart._CanvasGradientWrappingImplementation$$Factory = function(){
  var tmp$0 = new _CanvasGradientWrappingImplementation$Dart;
  tmp$0.$typeInfo = _CanvasGradientWrappingImplementation$Dart.$lookupRTT();
  _CanvasGradientWrappingImplementation$Dart.$Initializer.call(tmp$0);
  _CanvasGradientWrappingImplementation$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
_CanvasGradientWrappingImplementation$Dart.create__CanvasGradientWrappingImplementation$member = function(){
  return _CanvasGradientWrappingImplementation$Dart._CanvasGradientWrappingImplementation$$Factory();
}
;
_CanvasGradientWrappingImplementation$Dart.create__CanvasGradientWrappingImplementation$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _CanvasGradientWrappingImplementation$Dart.create__CanvasGradientWrappingImplementation$member();
}
;
function native__CanvasGradientWrappingImplementation_create__CanvasGradientWrappingImplementation(){
  return _CanvasGradientWrappingImplementation$Dart.create__CanvasGradientWrappingImplementation$member();
}

_CanvasGradientWrappingImplementation$Dart.create__CanvasGradientWrappingImplementation$getter = function create__CanvasGradientWrappingImplementation$getter(){
  return _CanvasGradientWrappingImplementation$Dart.create__CanvasGradientWrappingImplementation$named;
}
;
_CanvasGradientWrappingImplementation$Dart.prototype.addColorStop$member = function(offset, color){
  _CanvasGradientWrappingImplementation$Dart._addColorStop$$member_(this, offset, color);
  return;
}
;
_CanvasGradientWrappingImplementation$Dart.prototype.addColorStop$named = function($n, $o, offset, color){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _CanvasGradientWrappingImplementation$Dart.prototype.addColorStop$member.call(this, offset, color);
}
;
_CanvasGradientWrappingImplementation$Dart.prototype.addColorStop$getter = function addColorStop$getter(){
  return $bind(_CanvasGradientWrappingImplementation$Dart.prototype.addColorStop$named, this);
}
;
_CanvasGradientWrappingImplementation$Dart._addColorStop$$member_ = function(receiver, offset, color){
  return native__CanvasGradientWrappingImplementation__addColorStop(receiver, offset, color);
}
;
_CanvasGradientWrappingImplementation$Dart._addColorStop$$named_ = function($n, $o, receiver, offset, color){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return _CanvasGradientWrappingImplementation$Dart._addColorStop$$member_(receiver, offset, color);
}
;
_CanvasGradientWrappingImplementation$Dart._addColorStop$$getter_ = function _addColorStop$$getter_(){
  return _CanvasGradientWrappingImplementation$Dart._addColorStop$$named_;
}
;
_CanvasGradientWrappingImplementation$Dart.prototype.typeName$named = function(){
  return this.typeName$getter().apply(this, arguments);
}
;
_CanvasGradientWrappingImplementation$Dart.prototype.typeName$getter = function(){
  return 'CanvasGradient';
}
;
