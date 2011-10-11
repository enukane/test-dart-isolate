function _WebGLBufferWrappingImplementation$Dart(){
}

_WebGLBufferWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('_WebGLBufferWrappingImplementation$Dart'), _WebGLBufferWrappingImplementation$Dart.$RTTimplements);
}
;
_WebGLBufferWrappingImplementation$Dart.$RTTimplements = function(rtt){
  _WebGLBufferWrappingImplementation$Dart.$addTo(rtt);
}
;
_WebGLBufferWrappingImplementation$Dart.$addTo = function(target){
  var rtt = _WebGLBufferWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  DOMWrapperBase$Dart.$addTo(target);
  WebGLBuffer$Dart.$addTo(target);
}
;
_WebGLBufferWrappingImplementation$Dart.prototype.$implements$_WebGLBufferWrappingImplementation$Dart = 1;
_WebGLBufferWrappingImplementation$Dart.prototype.$implements$WebGLBuffer$Dart = 1;
_WebGLBufferWrappingImplementation$Dart.prototype.$implements$DOMWrapperBase$Dart = 1;
_WebGLBufferWrappingImplementation$Dart.prototype.$implements$DOMType$Dart = 1;
_WebGLBufferWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(_WebGLBufferWrappingImplementation$Dart, DOMWrapperBase$Dart);
_WebGLBufferWrappingImplementation$Dart.$Constructor = function(){
  DOMWrapperBase$Dart.$Constructor.call(this);
}
;
_WebGLBufferWrappingImplementation$Dart.$Initializer = function(){
  DOMWrapperBase$Dart.$Initializer.call(this);
}
;
_WebGLBufferWrappingImplementation$Dart._WebGLBufferWrappingImplementation$$Factory = function(){
  var tmp$0 = new _WebGLBufferWrappingImplementation$Dart;
  tmp$0.$typeInfo = _WebGLBufferWrappingImplementation$Dart.$lookupRTT();
  _WebGLBufferWrappingImplementation$Dart.$Initializer.call(tmp$0);
  _WebGLBufferWrappingImplementation$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
_WebGLBufferWrappingImplementation$Dart.create__WebGLBufferWrappingImplementation$member = function(){
  return _WebGLBufferWrappingImplementation$Dart._WebGLBufferWrappingImplementation$$Factory();
}
;
_WebGLBufferWrappingImplementation$Dart.create__WebGLBufferWrappingImplementation$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _WebGLBufferWrappingImplementation$Dart.create__WebGLBufferWrappingImplementation$member();
}
;
function native__WebGLBufferWrappingImplementation_create__WebGLBufferWrappingImplementation(){
  return _WebGLBufferWrappingImplementation$Dart.create__WebGLBufferWrappingImplementation$member();
}

_WebGLBufferWrappingImplementation$Dart.create__WebGLBufferWrappingImplementation$getter = function create__WebGLBufferWrappingImplementation$getter(){
  return _WebGLBufferWrappingImplementation$Dart.create__WebGLBufferWrappingImplementation$named;
}
;
_WebGLBufferWrappingImplementation$Dart.prototype.typeName$named = function(){
  return this.typeName$getter().apply(this, arguments);
}
;
_WebGLBufferWrappingImplementation$Dart.prototype.typeName$getter = function(){
  return 'WebGLBuffer';
}
;
