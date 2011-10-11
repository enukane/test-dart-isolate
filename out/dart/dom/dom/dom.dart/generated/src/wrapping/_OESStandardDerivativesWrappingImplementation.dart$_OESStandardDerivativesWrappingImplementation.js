function _OESStandardDerivativesWrappingImplementation$Dart(){
}

_OESStandardDerivativesWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('_OESStandardDerivativesWrappingImplementation$Dart'), _OESStandardDerivativesWrappingImplementation$Dart.$RTTimplements);
}
;
_OESStandardDerivativesWrappingImplementation$Dart.$RTTimplements = function(rtt){
  _OESStandardDerivativesWrappingImplementation$Dart.$addTo(rtt);
}
;
_OESStandardDerivativesWrappingImplementation$Dart.$addTo = function(target){
  var rtt = _OESStandardDerivativesWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  DOMWrapperBase$Dart.$addTo(target);
  OESStandardDerivatives$Dart.$addTo(target);
}
;
_OESStandardDerivativesWrappingImplementation$Dart.prototype.$implements$_OESStandardDerivativesWrappingImplementation$Dart = 1;
_OESStandardDerivativesWrappingImplementation$Dart.prototype.$implements$OESStandardDerivatives$Dart = 1;
_OESStandardDerivativesWrappingImplementation$Dart.prototype.$implements$DOMWrapperBase$Dart = 1;
_OESStandardDerivativesWrappingImplementation$Dart.prototype.$implements$DOMType$Dart = 1;
_OESStandardDerivativesWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(_OESStandardDerivativesWrappingImplementation$Dart, DOMWrapperBase$Dart);
_OESStandardDerivativesWrappingImplementation$Dart.$Constructor = function(){
  DOMWrapperBase$Dart.$Constructor.call(this);
}
;
_OESStandardDerivativesWrappingImplementation$Dart.$Initializer = function(){
  DOMWrapperBase$Dart.$Initializer.call(this);
}
;
_OESStandardDerivativesWrappingImplementation$Dart._OESStandardDerivativesWrappingImplementation$$Factory = function(){
  var tmp$0 = new _OESStandardDerivativesWrappingImplementation$Dart;
  tmp$0.$typeInfo = _OESStandardDerivativesWrappingImplementation$Dart.$lookupRTT();
  _OESStandardDerivativesWrappingImplementation$Dart.$Initializer.call(tmp$0);
  _OESStandardDerivativesWrappingImplementation$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
_OESStandardDerivativesWrappingImplementation$Dart.create__OESStandardDerivativesWrappingImplementation$member = function(){
  return _OESStandardDerivativesWrappingImplementation$Dart._OESStandardDerivativesWrappingImplementation$$Factory();
}
;
_OESStandardDerivativesWrappingImplementation$Dart.create__OESStandardDerivativesWrappingImplementation$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _OESStandardDerivativesWrappingImplementation$Dart.create__OESStandardDerivativesWrappingImplementation$member();
}
;
function native__OESStandardDerivativesWrappingImplementation_create__OESStandardDerivativesWrappingImplementation(){
  return _OESStandardDerivativesWrappingImplementation$Dart.create__OESStandardDerivativesWrappingImplementation$member();
}

_OESStandardDerivativesWrappingImplementation$Dart.create__OESStandardDerivativesWrappingImplementation$getter = function create__OESStandardDerivativesWrappingImplementation$getter(){
  return _OESStandardDerivativesWrappingImplementation$Dart.create__OESStandardDerivativesWrappingImplementation$named;
}
;
_OESStandardDerivativesWrappingImplementation$Dart.prototype.typeName$named = function(){
  return this.typeName$getter().apply(this, arguments);
}
;
_OESStandardDerivativesWrappingImplementation$Dart.prototype.typeName$getter = function(){
  return 'OESStandardDerivatives';
}
;
