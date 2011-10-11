function _HTMLUnknownElementWrappingImplementation$Dart(){
}

_HTMLUnknownElementWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('_HTMLUnknownElementWrappingImplementation$Dart'), _HTMLUnknownElementWrappingImplementation$Dart.$RTTimplements);
}
;
_HTMLUnknownElementWrappingImplementation$Dart.$RTTimplements = function(rtt){
  _HTMLUnknownElementWrappingImplementation$Dart.$addTo(rtt);
}
;
_HTMLUnknownElementWrappingImplementation$Dart.$addTo = function(target){
  var rtt = _HTMLUnknownElementWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  _HTMLElementWrappingImplementation$Dart.$addTo(target);
  HTMLUnknownElement$Dart.$addTo(target);
}
;
_HTMLUnknownElementWrappingImplementation$Dart.prototype.$implements$_HTMLUnknownElementWrappingImplementation$Dart = 1;
_HTMLUnknownElementWrappingImplementation$Dart.prototype.$implements$HTMLUnknownElement$Dart = 1;
_HTMLUnknownElementWrappingImplementation$Dart.prototype.$implements$HTMLElement$Dart = 1;
_HTMLUnknownElementWrappingImplementation$Dart.prototype.$implements$Element$Dart = 1;
_HTMLUnknownElementWrappingImplementation$Dart.prototype.$implements$Node$Dart = 1;
_HTMLUnknownElementWrappingImplementation$Dart.prototype.$implements$EventTarget$Dart = 1;
_HTMLUnknownElementWrappingImplementation$Dart.prototype.$implements$NodeSelector$Dart = 1;
_HTMLUnknownElementWrappingImplementation$Dart.prototype.$implements$ElementTraversal$Dart = 1;
_HTMLUnknownElementWrappingImplementation$Dart.prototype.$implements$_HTMLElementWrappingImplementation$Dart = 1;
_HTMLUnknownElementWrappingImplementation$Dart.prototype.$implements$_ElementWrappingImplementation$Dart = 1;
_HTMLUnknownElementWrappingImplementation$Dart.prototype.$implements$_NodeWrappingImplementation$Dart = 1;
_HTMLUnknownElementWrappingImplementation$Dart.prototype.$implements$DOMWrapperBase$Dart = 1;
_HTMLUnknownElementWrappingImplementation$Dart.prototype.$implements$DOMType$Dart = 1;
_HTMLUnknownElementWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(_HTMLUnknownElementWrappingImplementation$Dart, _HTMLElementWrappingImplementation$Dart);
_HTMLUnknownElementWrappingImplementation$Dart.$Constructor = function(){
  _HTMLElementWrappingImplementation$Dart.$Constructor.call(this);
}
;
_HTMLUnknownElementWrappingImplementation$Dart.$Initializer = function(){
  _HTMLElementWrappingImplementation$Dart.$Initializer.call(this);
}
;
_HTMLUnknownElementWrappingImplementation$Dart._HTMLUnknownElementWrappingImplementation$$Factory = function(){
  var tmp$0 = new _HTMLUnknownElementWrappingImplementation$Dart;
  tmp$0.$typeInfo = _HTMLUnknownElementWrappingImplementation$Dart.$lookupRTT();
  _HTMLUnknownElementWrappingImplementation$Dart.$Initializer.call(tmp$0);
  _HTMLUnknownElementWrappingImplementation$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
_HTMLUnknownElementWrappingImplementation$Dart.create__HTMLUnknownElementWrappingImplementation$member = function(){
  return _HTMLUnknownElementWrappingImplementation$Dart._HTMLUnknownElementWrappingImplementation$$Factory();
}
;
_HTMLUnknownElementWrappingImplementation$Dart.create__HTMLUnknownElementWrappingImplementation$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _HTMLUnknownElementWrappingImplementation$Dart.create__HTMLUnknownElementWrappingImplementation$member();
}
;
function native__HTMLUnknownElementWrappingImplementation_create__HTMLUnknownElementWrappingImplementation(){
  return _HTMLUnknownElementWrappingImplementation$Dart.create__HTMLUnknownElementWrappingImplementation$member();
}

_HTMLUnknownElementWrappingImplementation$Dart.create__HTMLUnknownElementWrappingImplementation$getter = function create__HTMLUnknownElementWrappingImplementation$getter(){
  return _HTMLUnknownElementWrappingImplementation$Dart.create__HTMLUnknownElementWrappingImplementation$named;
}
;
_HTMLUnknownElementWrappingImplementation$Dart.prototype.typeName$named = function(){
  return this.typeName$getter().apply(this, arguments);
}
;
_HTMLUnknownElementWrappingImplementation$Dart.prototype.typeName$getter = function(){
  return 'HTMLUnknownElement';
}
;
