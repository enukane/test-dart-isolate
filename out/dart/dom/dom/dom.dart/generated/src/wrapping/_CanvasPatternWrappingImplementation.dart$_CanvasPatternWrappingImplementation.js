function _CanvasPatternWrappingImplementation$Dart(){
}

_CanvasPatternWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('_CanvasPatternWrappingImplementation$Dart'), _CanvasPatternWrappingImplementation$Dart.$RTTimplements);
}
;
_CanvasPatternWrappingImplementation$Dart.$RTTimplements = function(rtt){
  _CanvasPatternWrappingImplementation$Dart.$addTo(rtt);
}
;
_CanvasPatternWrappingImplementation$Dart.$addTo = function(target){
  var rtt = _CanvasPatternWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  DOMWrapperBase$Dart.$addTo(target);
  CanvasPattern$Dart.$addTo(target);
}
;
_CanvasPatternWrappingImplementation$Dart.prototype.$implements$_CanvasPatternWrappingImplementation$Dart = 1;
_CanvasPatternWrappingImplementation$Dart.prototype.$implements$CanvasPattern$Dart = 1;
_CanvasPatternWrappingImplementation$Dart.prototype.$implements$DOMWrapperBase$Dart = 1;
_CanvasPatternWrappingImplementation$Dart.prototype.$implements$DOMType$Dart = 1;
_CanvasPatternWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(_CanvasPatternWrappingImplementation$Dart, DOMWrapperBase$Dart);
_CanvasPatternWrappingImplementation$Dart.$Constructor = function(){
  DOMWrapperBase$Dart.$Constructor.call(this);
}
;
_CanvasPatternWrappingImplementation$Dart.$Initializer = function(){
  DOMWrapperBase$Dart.$Initializer.call(this);
}
;
_CanvasPatternWrappingImplementation$Dart._CanvasPatternWrappingImplementation$$Factory = function(){
  var tmp$0 = new _CanvasPatternWrappingImplementation$Dart;
  tmp$0.$typeInfo = _CanvasPatternWrappingImplementation$Dart.$lookupRTT();
  _CanvasPatternWrappingImplementation$Dart.$Initializer.call(tmp$0);
  _CanvasPatternWrappingImplementation$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
_CanvasPatternWrappingImplementation$Dart.create__CanvasPatternWrappingImplementation$member = function(){
  return _CanvasPatternWrappingImplementation$Dart._CanvasPatternWrappingImplementation$$Factory();
}
;
_CanvasPatternWrappingImplementation$Dart.create__CanvasPatternWrappingImplementation$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _CanvasPatternWrappingImplementation$Dart.create__CanvasPatternWrappingImplementation$member();
}
;
function native__CanvasPatternWrappingImplementation_create__CanvasPatternWrappingImplementation(){
  return _CanvasPatternWrappingImplementation$Dart.create__CanvasPatternWrappingImplementation$member();
}

_CanvasPatternWrappingImplementation$Dart.create__CanvasPatternWrappingImplementation$getter = function create__CanvasPatternWrappingImplementation$getter(){
  return _CanvasPatternWrappingImplementation$Dart.create__CanvasPatternWrappingImplementation$named;
}
;
_CanvasPatternWrappingImplementation$Dart.prototype.typeName$named = function(){
  return this.typeName$getter().apply(this, arguments);
}
;
_CanvasPatternWrappingImplementation$Dart.prototype.typeName$getter = function(){
  return 'CanvasPattern';
}
;
