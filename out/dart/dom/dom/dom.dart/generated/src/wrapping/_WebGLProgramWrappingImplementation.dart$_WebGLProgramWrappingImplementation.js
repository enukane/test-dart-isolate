function _WebGLProgramWrappingImplementation$Dart(){
}

_WebGLProgramWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('_WebGLProgramWrappingImplementation$Dart'), _WebGLProgramWrappingImplementation$Dart.$RTTimplements);
}
;
_WebGLProgramWrappingImplementation$Dart.$RTTimplements = function(rtt){
  _WebGLProgramWrappingImplementation$Dart.$addTo(rtt);
}
;
_WebGLProgramWrappingImplementation$Dart.$addTo = function(target){
  var rtt = _WebGLProgramWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  DOMWrapperBase$Dart.$addTo(target);
  WebGLProgram$Dart.$addTo(target);
}
;
_WebGLProgramWrappingImplementation$Dart.prototype.$implements$_WebGLProgramWrappingImplementation$Dart = 1;
_WebGLProgramWrappingImplementation$Dart.prototype.$implements$WebGLProgram$Dart = 1;
_WebGLProgramWrappingImplementation$Dart.prototype.$implements$DOMWrapperBase$Dart = 1;
_WebGLProgramWrappingImplementation$Dart.prototype.$implements$DOMType$Dart = 1;
_WebGLProgramWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(_WebGLProgramWrappingImplementation$Dart, DOMWrapperBase$Dart);
_WebGLProgramWrappingImplementation$Dart.$Constructor = function(){
  DOMWrapperBase$Dart.$Constructor.call(this);
}
;
_WebGLProgramWrappingImplementation$Dart.$Initializer = function(){
  DOMWrapperBase$Dart.$Initializer.call(this);
}
;
_WebGLProgramWrappingImplementation$Dart._WebGLProgramWrappingImplementation$$Factory = function(){
  var tmp$0 = new _WebGLProgramWrappingImplementation$Dart;
  tmp$0.$typeInfo = _WebGLProgramWrappingImplementation$Dart.$lookupRTT();
  _WebGLProgramWrappingImplementation$Dart.$Initializer.call(tmp$0);
  _WebGLProgramWrappingImplementation$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
_WebGLProgramWrappingImplementation$Dart.create__WebGLProgramWrappingImplementation$member = function(){
  return _WebGLProgramWrappingImplementation$Dart._WebGLProgramWrappingImplementation$$Factory();
}
;
_WebGLProgramWrappingImplementation$Dart.create__WebGLProgramWrappingImplementation$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _WebGLProgramWrappingImplementation$Dart.create__WebGLProgramWrappingImplementation$member();
}
;
function native__WebGLProgramWrappingImplementation_create__WebGLProgramWrappingImplementation(){
  return _WebGLProgramWrappingImplementation$Dart.create__WebGLProgramWrappingImplementation$member();
}

_WebGLProgramWrappingImplementation$Dart.create__WebGLProgramWrappingImplementation$getter = function create__WebGLProgramWrappingImplementation$getter(){
  return _WebGLProgramWrappingImplementation$Dart.create__WebGLProgramWrappingImplementation$named;
}
;
_WebGLProgramWrappingImplementation$Dart.prototype.typeName$named = function(){
  return this.typeName$getter().apply(this, arguments);
}
;
_WebGLProgramWrappingImplementation$Dart.prototype.typeName$getter = function(){
  return 'WebGLProgram';
}
;
