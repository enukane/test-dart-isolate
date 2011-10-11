function _WebGLRenderbufferWrappingImplementation$Dart(){
}

_WebGLRenderbufferWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('_WebGLRenderbufferWrappingImplementation$Dart'), _WebGLRenderbufferWrappingImplementation$Dart.$RTTimplements);
}
;
_WebGLRenderbufferWrappingImplementation$Dart.$RTTimplements = function(rtt){
  _WebGLRenderbufferWrappingImplementation$Dart.$addTo(rtt);
}
;
_WebGLRenderbufferWrappingImplementation$Dart.$addTo = function(target){
  var rtt = _WebGLRenderbufferWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  DOMWrapperBase$Dart.$addTo(target);
  WebGLRenderbuffer$Dart.$addTo(target);
}
;
_WebGLRenderbufferWrappingImplementation$Dart.prototype.$implements$_WebGLRenderbufferWrappingImplementation$Dart = 1;
_WebGLRenderbufferWrappingImplementation$Dart.prototype.$implements$WebGLRenderbuffer$Dart = 1;
_WebGLRenderbufferWrappingImplementation$Dart.prototype.$implements$DOMWrapperBase$Dart = 1;
_WebGLRenderbufferWrappingImplementation$Dart.prototype.$implements$DOMType$Dart = 1;
_WebGLRenderbufferWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(_WebGLRenderbufferWrappingImplementation$Dart, DOMWrapperBase$Dart);
_WebGLRenderbufferWrappingImplementation$Dart.$Constructor = function(){
  DOMWrapperBase$Dart.$Constructor.call(this);
}
;
_WebGLRenderbufferWrappingImplementation$Dart.$Initializer = function(){
  DOMWrapperBase$Dart.$Initializer.call(this);
}
;
_WebGLRenderbufferWrappingImplementation$Dart._WebGLRenderbufferWrappingImplementation$$Factory = function(){
  var tmp$0 = new _WebGLRenderbufferWrappingImplementation$Dart;
  tmp$0.$typeInfo = _WebGLRenderbufferWrappingImplementation$Dart.$lookupRTT();
  _WebGLRenderbufferWrappingImplementation$Dart.$Initializer.call(tmp$0);
  _WebGLRenderbufferWrappingImplementation$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
_WebGLRenderbufferWrappingImplementation$Dart.create__WebGLRenderbufferWrappingImplementation$member = function(){
  return _WebGLRenderbufferWrappingImplementation$Dart._WebGLRenderbufferWrappingImplementation$$Factory();
}
;
_WebGLRenderbufferWrappingImplementation$Dart.create__WebGLRenderbufferWrappingImplementation$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _WebGLRenderbufferWrappingImplementation$Dart.create__WebGLRenderbufferWrappingImplementation$member();
}
;
function native__WebGLRenderbufferWrappingImplementation_create__WebGLRenderbufferWrappingImplementation(){
  return _WebGLRenderbufferWrappingImplementation$Dart.create__WebGLRenderbufferWrappingImplementation$member();
}

_WebGLRenderbufferWrappingImplementation$Dart.create__WebGLRenderbufferWrappingImplementation$getter = function create__WebGLRenderbufferWrappingImplementation$getter(){
  return _WebGLRenderbufferWrappingImplementation$Dart.create__WebGLRenderbufferWrappingImplementation$named;
}
;
_WebGLRenderbufferWrappingImplementation$Dart.prototype.typeName$named = function(){
  return this.typeName$getter().apply(this, arguments);
}
;
_WebGLRenderbufferWrappingImplementation$Dart.prototype.typeName$getter = function(){
  return 'WebGLRenderbuffer';
}
;
