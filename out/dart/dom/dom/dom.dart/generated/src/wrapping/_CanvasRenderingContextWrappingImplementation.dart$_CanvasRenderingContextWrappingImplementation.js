function _CanvasRenderingContextWrappingImplementation$Dart(){
}

_CanvasRenderingContextWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('_CanvasRenderingContextWrappingImplementation$Dart'), _CanvasRenderingContextWrappingImplementation$Dart.$RTTimplements);
}
;
_CanvasRenderingContextWrappingImplementation$Dart.$RTTimplements = function(rtt){
  _CanvasRenderingContextWrappingImplementation$Dart.$addTo(rtt);
}
;
_CanvasRenderingContextWrappingImplementation$Dart.$addTo = function(target){
  var rtt = _CanvasRenderingContextWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  DOMWrapperBase$Dart.$addTo(target);
  CanvasRenderingContext$Dart.$addTo(target);
}
;
_CanvasRenderingContextWrappingImplementation$Dart.prototype.$implements$_CanvasRenderingContextWrappingImplementation$Dart = 1;
_CanvasRenderingContextWrappingImplementation$Dart.prototype.$implements$CanvasRenderingContext$Dart = 1;
_CanvasRenderingContextWrappingImplementation$Dart.prototype.$implements$DOMWrapperBase$Dart = 1;
_CanvasRenderingContextWrappingImplementation$Dart.prototype.$implements$DOMType$Dart = 1;
_CanvasRenderingContextWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(_CanvasRenderingContextWrappingImplementation$Dart, DOMWrapperBase$Dart);
_CanvasRenderingContextWrappingImplementation$Dart.$Constructor = function(){
  DOMWrapperBase$Dart.$Constructor.call(this);
}
;
_CanvasRenderingContextWrappingImplementation$Dart.$Initializer = function(){
  DOMWrapperBase$Dart.$Initializer.call(this);
}
;
_CanvasRenderingContextWrappingImplementation$Dart._CanvasRenderingContextWrappingImplementation$$Factory = function(){
  var tmp$0 = new _CanvasRenderingContextWrappingImplementation$Dart;
  tmp$0.$typeInfo = _CanvasRenderingContextWrappingImplementation$Dart.$lookupRTT();
  _CanvasRenderingContextWrappingImplementation$Dart.$Initializer.call(tmp$0);
  _CanvasRenderingContextWrappingImplementation$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
_CanvasRenderingContextWrappingImplementation$Dart.create__CanvasRenderingContextWrappingImplementation$member = function(){
  return _CanvasRenderingContextWrappingImplementation$Dart._CanvasRenderingContextWrappingImplementation$$Factory();
}
;
_CanvasRenderingContextWrappingImplementation$Dart.create__CanvasRenderingContextWrappingImplementation$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _CanvasRenderingContextWrappingImplementation$Dart.create__CanvasRenderingContextWrappingImplementation$member();
}
;
function native__CanvasRenderingContextWrappingImplementation_create__CanvasRenderingContextWrappingImplementation(){
  return _CanvasRenderingContextWrappingImplementation$Dart.create__CanvasRenderingContextWrappingImplementation$member();
}

_CanvasRenderingContextWrappingImplementation$Dart.create__CanvasRenderingContextWrappingImplementation$getter = function create__CanvasRenderingContextWrappingImplementation$getter(){
  return _CanvasRenderingContextWrappingImplementation$Dart.create__CanvasRenderingContextWrappingImplementation$named;
}
;
_CanvasRenderingContextWrappingImplementation$Dart.prototype.canvas$named = function(){
  return this.canvas$getter().apply(this, arguments);
}
;
_CanvasRenderingContextWrappingImplementation$Dart.prototype.canvas$getter = function(){
  return _CanvasRenderingContextWrappingImplementation$Dart._get__CanvasRenderingContext_canvas$$member_(this);
}
;
_CanvasRenderingContextWrappingImplementation$Dart._get__CanvasRenderingContext_canvas$$member_ = function(_this){
  return native__CanvasRenderingContextWrappingImplementation__get__CanvasRenderingContext_canvas(_this);
}
;
_CanvasRenderingContextWrappingImplementation$Dart._get__CanvasRenderingContext_canvas$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _CanvasRenderingContextWrappingImplementation$Dart._get__CanvasRenderingContext_canvas$$member_(_this);
}
;
_CanvasRenderingContextWrappingImplementation$Dart._get__CanvasRenderingContext_canvas$$getter_ = function _get__CanvasRenderingContext_canvas$$getter_(){
  return _CanvasRenderingContextWrappingImplementation$Dart._get__CanvasRenderingContext_canvas$$named_;
}
;
_CanvasRenderingContextWrappingImplementation$Dart.prototype.typeName$named = function(){
  return this.typeName$getter().apply(this, arguments);
}
;
_CanvasRenderingContextWrappingImplementation$Dart.prototype.typeName$getter = function(){
  return 'CanvasRenderingContext';
}
;
