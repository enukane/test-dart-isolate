function _HTMLAudioElementWrappingImplementation$Dart(){
}

_HTMLAudioElementWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('_HTMLAudioElementWrappingImplementation$Dart'), _HTMLAudioElementWrappingImplementation$Dart.$RTTimplements);
}
;
_HTMLAudioElementWrappingImplementation$Dart.$RTTimplements = function(rtt){
  _HTMLAudioElementWrappingImplementation$Dart.$addTo(rtt);
}
;
_HTMLAudioElementWrappingImplementation$Dart.$addTo = function(target){
  var rtt = _HTMLAudioElementWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  _HTMLMediaElementWrappingImplementation$Dart.$addTo(target);
  HTMLAudioElement$Dart.$addTo(target);
}
;
_HTMLAudioElementWrappingImplementation$Dart.prototype.$implements$_HTMLAudioElementWrappingImplementation$Dart = 1;
_HTMLAudioElementWrappingImplementation$Dart.prototype.$implements$HTMLAudioElement$Dart = 1;
_HTMLAudioElementWrappingImplementation$Dart.prototype.$implements$HTMLMediaElement$Dart = 1;
_HTMLAudioElementWrappingImplementation$Dart.prototype.$implements$HTMLElement$Dart = 1;
_HTMLAudioElementWrappingImplementation$Dart.prototype.$implements$Element$Dart = 1;
_HTMLAudioElementWrappingImplementation$Dart.prototype.$implements$Node$Dart = 1;
_HTMLAudioElementWrappingImplementation$Dart.prototype.$implements$EventTarget$Dart = 1;
_HTMLAudioElementWrappingImplementation$Dart.prototype.$implements$NodeSelector$Dart = 1;
_HTMLAudioElementWrappingImplementation$Dart.prototype.$implements$ElementTraversal$Dart = 1;
_HTMLAudioElementWrappingImplementation$Dart.prototype.$implements$_HTMLMediaElementWrappingImplementation$Dart = 1;
_HTMLAudioElementWrappingImplementation$Dart.prototype.$implements$_HTMLElementWrappingImplementation$Dart = 1;
_HTMLAudioElementWrappingImplementation$Dart.prototype.$implements$_ElementWrappingImplementation$Dart = 1;
_HTMLAudioElementWrappingImplementation$Dart.prototype.$implements$_NodeWrappingImplementation$Dart = 1;
_HTMLAudioElementWrappingImplementation$Dart.prototype.$implements$DOMWrapperBase$Dart = 1;
_HTMLAudioElementWrappingImplementation$Dart.prototype.$implements$DOMType$Dart = 1;
_HTMLAudioElementWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(_HTMLAudioElementWrappingImplementation$Dart, _HTMLMediaElementWrappingImplementation$Dart);
_HTMLAudioElementWrappingImplementation$Dart.$Constructor = function(){
  _HTMLMediaElementWrappingImplementation$Dart.$Constructor.call(this);
}
;
_HTMLAudioElementWrappingImplementation$Dart.$Initializer = function(){
  _HTMLMediaElementWrappingImplementation$Dart.$Initializer.call(this);
}
;
_HTMLAudioElementWrappingImplementation$Dart._HTMLAudioElementWrappingImplementation$$Factory = function(){
  var tmp$0 = new _HTMLAudioElementWrappingImplementation$Dart;
  tmp$0.$typeInfo = _HTMLAudioElementWrappingImplementation$Dart.$lookupRTT();
  _HTMLAudioElementWrappingImplementation$Dart.$Initializer.call(tmp$0);
  _HTMLAudioElementWrappingImplementation$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
_HTMLAudioElementWrappingImplementation$Dart.create__HTMLAudioElementWrappingImplementation$member = function(){
  return _HTMLAudioElementWrappingImplementation$Dart._HTMLAudioElementWrappingImplementation$$Factory();
}
;
_HTMLAudioElementWrappingImplementation$Dart.create__HTMLAudioElementWrappingImplementation$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _HTMLAudioElementWrappingImplementation$Dart.create__HTMLAudioElementWrappingImplementation$member();
}
;
function native__HTMLAudioElementWrappingImplementation_create__HTMLAudioElementWrappingImplementation(){
  return _HTMLAudioElementWrappingImplementation$Dart.create__HTMLAudioElementWrappingImplementation$member();
}

_HTMLAudioElementWrappingImplementation$Dart.create__HTMLAudioElementWrappingImplementation$getter = function create__HTMLAudioElementWrappingImplementation$getter(){
  return _HTMLAudioElementWrappingImplementation$Dart.create__HTMLAudioElementWrappingImplementation$named;
}
;
_HTMLAudioElementWrappingImplementation$Dart.prototype.typeName$named = function(){
  return this.typeName$getter().apply(this, arguments);
}
;
_HTMLAudioElementWrappingImplementation$Dart.prototype.typeName$getter = function(){
  return 'HTMLAudioElement';
}
;
