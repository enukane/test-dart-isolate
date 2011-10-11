function _OESTextureFloatWrappingImplementation$Dart(){
}

_OESTextureFloatWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('_OESTextureFloatWrappingImplementation$Dart'), _OESTextureFloatWrappingImplementation$Dart.$RTTimplements);
}
;
_OESTextureFloatWrappingImplementation$Dart.$RTTimplements = function(rtt){
  _OESTextureFloatWrappingImplementation$Dart.$addTo(rtt);
}
;
_OESTextureFloatWrappingImplementation$Dart.$addTo = function(target){
  var rtt = _OESTextureFloatWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  DOMWrapperBase$Dart.$addTo(target);
  OESTextureFloat$Dart.$addTo(target);
}
;
_OESTextureFloatWrappingImplementation$Dart.prototype.$implements$_OESTextureFloatWrappingImplementation$Dart = 1;
_OESTextureFloatWrappingImplementation$Dart.prototype.$implements$OESTextureFloat$Dart = 1;
_OESTextureFloatWrappingImplementation$Dart.prototype.$implements$DOMWrapperBase$Dart = 1;
_OESTextureFloatWrappingImplementation$Dart.prototype.$implements$DOMType$Dart = 1;
_OESTextureFloatWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(_OESTextureFloatWrappingImplementation$Dart, DOMWrapperBase$Dart);
_OESTextureFloatWrappingImplementation$Dart.$Constructor = function(){
  DOMWrapperBase$Dart.$Constructor.call(this);
}
;
_OESTextureFloatWrappingImplementation$Dart.$Initializer = function(){
  DOMWrapperBase$Dart.$Initializer.call(this);
}
;
_OESTextureFloatWrappingImplementation$Dart._OESTextureFloatWrappingImplementation$$Factory = function(){
  var tmp$0 = new _OESTextureFloatWrappingImplementation$Dart;
  tmp$0.$typeInfo = _OESTextureFloatWrappingImplementation$Dart.$lookupRTT();
  _OESTextureFloatWrappingImplementation$Dart.$Initializer.call(tmp$0);
  _OESTextureFloatWrappingImplementation$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
_OESTextureFloatWrappingImplementation$Dart.create__OESTextureFloatWrappingImplementation$member = function(){
  return _OESTextureFloatWrappingImplementation$Dart._OESTextureFloatWrappingImplementation$$Factory();
}
;
_OESTextureFloatWrappingImplementation$Dart.create__OESTextureFloatWrappingImplementation$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _OESTextureFloatWrappingImplementation$Dart.create__OESTextureFloatWrappingImplementation$member();
}
;
function native__OESTextureFloatWrappingImplementation_create__OESTextureFloatWrappingImplementation(){
  return _OESTextureFloatWrappingImplementation$Dart.create__OESTextureFloatWrappingImplementation$member();
}

_OESTextureFloatWrappingImplementation$Dart.create__OESTextureFloatWrappingImplementation$getter = function create__OESTextureFloatWrappingImplementation$getter(){
  return _OESTextureFloatWrappingImplementation$Dart.create__OESTextureFloatWrappingImplementation$named;
}
;
_OESTextureFloatWrappingImplementation$Dart.prototype.typeName$named = function(){
  return this.typeName$getter().apply(this, arguments);
}
;
_OESTextureFloatWrappingImplementation$Dart.prototype.typeName$getter = function(){
  return 'OESTextureFloat';
}
;
