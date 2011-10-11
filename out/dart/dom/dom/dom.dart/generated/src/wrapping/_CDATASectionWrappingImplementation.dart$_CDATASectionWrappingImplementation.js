function _CDATASectionWrappingImplementation$Dart(){
}

_CDATASectionWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('_CDATASectionWrappingImplementation$Dart'), _CDATASectionWrappingImplementation$Dart.$RTTimplements);
}
;
_CDATASectionWrappingImplementation$Dart.$RTTimplements = function(rtt){
  _CDATASectionWrappingImplementation$Dart.$addTo(rtt);
}
;
_CDATASectionWrappingImplementation$Dart.$addTo = function(target){
  var rtt = _CDATASectionWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  _TextWrappingImplementation$Dart.$addTo(target);
  CDATASection$Dart.$addTo(target);
}
;
_CDATASectionWrappingImplementation$Dart.prototype.$implements$_CDATASectionWrappingImplementation$Dart = 1;
_CDATASectionWrappingImplementation$Dart.prototype.$implements$CDATASection$Dart = 1;
_CDATASectionWrappingImplementation$Dart.prototype.$implements$Text$Dart = 1;
_CDATASectionWrappingImplementation$Dart.prototype.$implements$CharacterData$Dart = 1;
_CDATASectionWrappingImplementation$Dart.prototype.$implements$Node$Dart = 1;
_CDATASectionWrappingImplementation$Dart.prototype.$implements$EventTarget$Dart = 1;
_CDATASectionWrappingImplementation$Dart.prototype.$implements$_TextWrappingImplementation$Dart = 1;
_CDATASectionWrappingImplementation$Dart.prototype.$implements$_CharacterDataWrappingImplementation$Dart = 1;
_CDATASectionWrappingImplementation$Dart.prototype.$implements$_NodeWrappingImplementation$Dart = 1;
_CDATASectionWrappingImplementation$Dart.prototype.$implements$DOMWrapperBase$Dart = 1;
_CDATASectionWrappingImplementation$Dart.prototype.$implements$DOMType$Dart = 1;
_CDATASectionWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(_CDATASectionWrappingImplementation$Dart, _TextWrappingImplementation$Dart);
_CDATASectionWrappingImplementation$Dart.$Constructor = function(){
  _TextWrappingImplementation$Dart.$Constructor.call(this);
}
;
_CDATASectionWrappingImplementation$Dart.$Initializer = function(){
  _TextWrappingImplementation$Dart.$Initializer.call(this);
}
;
_CDATASectionWrappingImplementation$Dart._CDATASectionWrappingImplementation$$Factory = function(){
  var tmp$0 = new _CDATASectionWrappingImplementation$Dart;
  tmp$0.$typeInfo = _CDATASectionWrappingImplementation$Dart.$lookupRTT();
  _CDATASectionWrappingImplementation$Dart.$Initializer.call(tmp$0);
  _CDATASectionWrappingImplementation$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
_CDATASectionWrappingImplementation$Dart.create__CDATASectionWrappingImplementation$member = function(){
  return _CDATASectionWrappingImplementation$Dart._CDATASectionWrappingImplementation$$Factory();
}
;
_CDATASectionWrappingImplementation$Dart.create__CDATASectionWrappingImplementation$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _CDATASectionWrappingImplementation$Dart.create__CDATASectionWrappingImplementation$member();
}
;
function native__CDATASectionWrappingImplementation_create__CDATASectionWrappingImplementation(){
  return _CDATASectionWrappingImplementation$Dart.create__CDATASectionWrappingImplementation$member();
}

_CDATASectionWrappingImplementation$Dart.create__CDATASectionWrappingImplementation$getter = function create__CDATASectionWrappingImplementation$getter(){
  return _CDATASectionWrappingImplementation$Dart.create__CDATASectionWrappingImplementation$named;
}
;
_CDATASectionWrappingImplementation$Dart.prototype.typeName$named = function(){
  return this.typeName$getter().apply(this, arguments);
}
;
_CDATASectionWrappingImplementation$Dart.prototype.typeName$getter = function(){
  return 'CDATASection';
}
;
