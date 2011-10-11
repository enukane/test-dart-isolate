function _WebGLFramebufferWrappingImplementation$Dart(){
}

_WebGLFramebufferWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('_WebGLFramebufferWrappingImplementation$Dart'), _WebGLFramebufferWrappingImplementation$Dart.$RTTimplements);
}
;
_WebGLFramebufferWrappingImplementation$Dart.$RTTimplements = function(rtt){
  _WebGLFramebufferWrappingImplementation$Dart.$addTo(rtt);
}
;
_WebGLFramebufferWrappingImplementation$Dart.$addTo = function(target){
  var rtt = _WebGLFramebufferWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  DOMWrapperBase$Dart.$addTo(target);
  WebGLFramebuffer$Dart.$addTo(target);
}
;
_WebGLFramebufferWrappingImplementation$Dart.prototype.$implements$_WebGLFramebufferWrappingImplementation$Dart = 1;
_WebGLFramebufferWrappingImplementation$Dart.prototype.$implements$WebGLFramebuffer$Dart = 1;
_WebGLFramebufferWrappingImplementation$Dart.prototype.$implements$DOMWrapperBase$Dart = 1;
_WebGLFramebufferWrappingImplementation$Dart.prototype.$implements$DOMType$Dart = 1;
_WebGLFramebufferWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(_WebGLFramebufferWrappingImplementation$Dart, DOMWrapperBase$Dart);
_WebGLFramebufferWrappingImplementation$Dart.$Constructor = function(){
  DOMWrapperBase$Dart.$Constructor.call(this);
}
;
_WebGLFramebufferWrappingImplementation$Dart.$Initializer = function(){
  DOMWrapperBase$Dart.$Initializer.call(this);
}
;
_WebGLFramebufferWrappingImplementation$Dart._WebGLFramebufferWrappingImplementation$$Factory = function(){
  var tmp$0 = new _WebGLFramebufferWrappingImplementation$Dart;
  tmp$0.$typeInfo = _WebGLFramebufferWrappingImplementation$Dart.$lookupRTT();
  _WebGLFramebufferWrappingImplementation$Dart.$Initializer.call(tmp$0);
  _WebGLFramebufferWrappingImplementation$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
_WebGLFramebufferWrappingImplementation$Dart.create__WebGLFramebufferWrappingImplementation$member = function(){
  return _WebGLFramebufferWrappingImplementation$Dart._WebGLFramebufferWrappingImplementation$$Factory();
}
;
_WebGLFramebufferWrappingImplementation$Dart.create__WebGLFramebufferWrappingImplementation$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _WebGLFramebufferWrappingImplementation$Dart.create__WebGLFramebufferWrappingImplementation$member();
}
;
function native__WebGLFramebufferWrappingImplementation_create__WebGLFramebufferWrappingImplementation(){
  return _WebGLFramebufferWrappingImplementation$Dart.create__WebGLFramebufferWrappingImplementation$member();
}

_WebGLFramebufferWrappingImplementation$Dart.create__WebGLFramebufferWrappingImplementation$getter = function create__WebGLFramebufferWrappingImplementation$getter(){
  return _WebGLFramebufferWrappingImplementation$Dart.create__WebGLFramebufferWrappingImplementation$named;
}
;
_WebGLFramebufferWrappingImplementation$Dart.prototype.typeName$named = function(){
  return this.typeName$getter().apply(this, arguments);
}
;
_WebGLFramebufferWrappingImplementation$Dart.prototype.typeName$getter = function(){
  return 'WebGLFramebuffer';
}
;
