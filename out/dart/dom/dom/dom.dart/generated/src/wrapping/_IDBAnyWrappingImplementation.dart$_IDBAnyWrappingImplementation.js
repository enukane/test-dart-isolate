function _IDBAnyWrappingImplementation$Dart(){
}

_IDBAnyWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('_IDBAnyWrappingImplementation$Dart'), _IDBAnyWrappingImplementation$Dart.$RTTimplements);
}
;
_IDBAnyWrappingImplementation$Dart.$RTTimplements = function(rtt){
  _IDBAnyWrappingImplementation$Dart.$addTo(rtt);
}
;
_IDBAnyWrappingImplementation$Dart.$addTo = function(target){
  var rtt = _IDBAnyWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  DOMWrapperBase$Dart.$addTo(target);
  IDBAny$Dart.$addTo(target);
}
;
_IDBAnyWrappingImplementation$Dart.prototype.$implements$_IDBAnyWrappingImplementation$Dart = 1;
_IDBAnyWrappingImplementation$Dart.prototype.$implements$IDBAny$Dart = 1;
_IDBAnyWrappingImplementation$Dart.prototype.$implements$DOMWrapperBase$Dart = 1;
_IDBAnyWrappingImplementation$Dart.prototype.$implements$DOMType$Dart = 1;
_IDBAnyWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(_IDBAnyWrappingImplementation$Dart, DOMWrapperBase$Dart);
_IDBAnyWrappingImplementation$Dart.$Constructor = function(){
  DOMWrapperBase$Dart.$Constructor.call(this);
}
;
_IDBAnyWrappingImplementation$Dart.$Initializer = function(){
  DOMWrapperBase$Dart.$Initializer.call(this);
}
;
_IDBAnyWrappingImplementation$Dart._IDBAnyWrappingImplementation$$Factory = function(){
  var tmp$0 = new _IDBAnyWrappingImplementation$Dart;
  tmp$0.$typeInfo = _IDBAnyWrappingImplementation$Dart.$lookupRTT();
  _IDBAnyWrappingImplementation$Dart.$Initializer.call(tmp$0);
  _IDBAnyWrappingImplementation$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
_IDBAnyWrappingImplementation$Dart.create__IDBAnyWrappingImplementation$member = function(){
  return _IDBAnyWrappingImplementation$Dart._IDBAnyWrappingImplementation$$Factory();
}
;
_IDBAnyWrappingImplementation$Dart.create__IDBAnyWrappingImplementation$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _IDBAnyWrappingImplementation$Dart.create__IDBAnyWrappingImplementation$member();
}
;
function native__IDBAnyWrappingImplementation_create__IDBAnyWrappingImplementation(){
  return _IDBAnyWrappingImplementation$Dart.create__IDBAnyWrappingImplementation$member();
}

_IDBAnyWrappingImplementation$Dart.create__IDBAnyWrappingImplementation$getter = function create__IDBAnyWrappingImplementation$getter(){
  return _IDBAnyWrappingImplementation$Dart.create__IDBAnyWrappingImplementation$named;
}
;
_IDBAnyWrappingImplementation$Dart.prototype.typeName$named = function(){
  return this.typeName$getter().apply(this, arguments);
}
;
_IDBAnyWrappingImplementation$Dart.prototype.typeName$getter = function(){
  return 'IDBAny';
}
;
