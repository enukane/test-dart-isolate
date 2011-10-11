function _HTMLSpanElementWrappingImplementation$Dart(){
}

_HTMLSpanElementWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('_HTMLSpanElementWrappingImplementation$Dart'), _HTMLSpanElementWrappingImplementation$Dart.$RTTimplements);
}
;
_HTMLSpanElementWrappingImplementation$Dart.$RTTimplements = function(rtt){
  _HTMLSpanElementWrappingImplementation$Dart.$addTo(rtt);
}
;
_HTMLSpanElementWrappingImplementation$Dart.$addTo = function(target){
  var rtt = _HTMLSpanElementWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  _HTMLElementWrappingImplementation$Dart.$addTo(target);
  HTMLSpanElement$Dart.$addTo(target);
}
;
_HTMLSpanElementWrappingImplementation$Dart.prototype.$implements$_HTMLSpanElementWrappingImplementation$Dart = 1;
_HTMLSpanElementWrappingImplementation$Dart.prototype.$implements$HTMLSpanElement$Dart = 1;
_HTMLSpanElementWrappingImplementation$Dart.prototype.$implements$HTMLElement$Dart = 1;
_HTMLSpanElementWrappingImplementation$Dart.prototype.$implements$Element$Dart = 1;
_HTMLSpanElementWrappingImplementation$Dart.prototype.$implements$Node$Dart = 1;
_HTMLSpanElementWrappingImplementation$Dart.prototype.$implements$EventTarget$Dart = 1;
_HTMLSpanElementWrappingImplementation$Dart.prototype.$implements$NodeSelector$Dart = 1;
_HTMLSpanElementWrappingImplementation$Dart.prototype.$implements$ElementTraversal$Dart = 1;
_HTMLSpanElementWrappingImplementation$Dart.prototype.$implements$_HTMLElementWrappingImplementation$Dart = 1;
_HTMLSpanElementWrappingImplementation$Dart.prototype.$implements$_ElementWrappingImplementation$Dart = 1;
_HTMLSpanElementWrappingImplementation$Dart.prototype.$implements$_NodeWrappingImplementation$Dart = 1;
_HTMLSpanElementWrappingImplementation$Dart.prototype.$implements$DOMWrapperBase$Dart = 1;
_HTMLSpanElementWrappingImplementation$Dart.prototype.$implements$DOMType$Dart = 1;
_HTMLSpanElementWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(_HTMLSpanElementWrappingImplementation$Dart, _HTMLElementWrappingImplementation$Dart);
_HTMLSpanElementWrappingImplementation$Dart.$Constructor = function(){
  _HTMLElementWrappingImplementation$Dart.$Constructor.call(this);
}
;
_HTMLSpanElementWrappingImplementation$Dart.$Initializer = function(){
  _HTMLElementWrappingImplementation$Dart.$Initializer.call(this);
}
;
_HTMLSpanElementWrappingImplementation$Dart._HTMLSpanElementWrappingImplementation$$Factory = function(){
  var tmp$0 = new _HTMLSpanElementWrappingImplementation$Dart;
  tmp$0.$typeInfo = _HTMLSpanElementWrappingImplementation$Dart.$lookupRTT();
  _HTMLSpanElementWrappingImplementation$Dart.$Initializer.call(tmp$0);
  _HTMLSpanElementWrappingImplementation$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
_HTMLSpanElementWrappingImplementation$Dart.create__HTMLSpanElementWrappingImplementation$member = function(){
  return _HTMLSpanElementWrappingImplementation$Dart._HTMLSpanElementWrappingImplementation$$Factory();
}
;
_HTMLSpanElementWrappingImplementation$Dart.create__HTMLSpanElementWrappingImplementation$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _HTMLSpanElementWrappingImplementation$Dart.create__HTMLSpanElementWrappingImplementation$member();
}
;
function native__HTMLSpanElementWrappingImplementation_create__HTMLSpanElementWrappingImplementation(){
  return _HTMLSpanElementWrappingImplementation$Dart.create__HTMLSpanElementWrappingImplementation$member();
}

_HTMLSpanElementWrappingImplementation$Dart.create__HTMLSpanElementWrappingImplementation$getter = function create__HTMLSpanElementWrappingImplementation$getter(){
  return _HTMLSpanElementWrappingImplementation$Dart.create__HTMLSpanElementWrappingImplementation$named;
}
;
_HTMLSpanElementWrappingImplementation$Dart.prototype.typeName$named = function(){
  return this.typeName$getter().apply(this, arguments);
}
;
_HTMLSpanElementWrappingImplementation$Dart.prototype.typeName$getter = function(){
  return 'HTMLSpanElement';
}
;
