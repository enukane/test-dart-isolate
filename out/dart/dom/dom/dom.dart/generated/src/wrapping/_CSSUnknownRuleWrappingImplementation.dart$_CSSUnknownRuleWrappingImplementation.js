function _CSSUnknownRuleWrappingImplementation$Dart(){
}

_CSSUnknownRuleWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('_CSSUnknownRuleWrappingImplementation$Dart'), _CSSUnknownRuleWrappingImplementation$Dart.$RTTimplements);
}
;
_CSSUnknownRuleWrappingImplementation$Dart.$RTTimplements = function(rtt){
  _CSSUnknownRuleWrappingImplementation$Dart.$addTo(rtt);
}
;
_CSSUnknownRuleWrappingImplementation$Dart.$addTo = function(target){
  var rtt = _CSSUnknownRuleWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  _CSSRuleWrappingImplementation$Dart.$addTo(target);
  CSSUnknownRule$Dart.$addTo(target);
}
;
_CSSUnknownRuleWrappingImplementation$Dart.prototype.$implements$_CSSUnknownRuleWrappingImplementation$Dart = 1;
_CSSUnknownRuleWrappingImplementation$Dart.prototype.$implements$CSSUnknownRule$Dart = 1;
_CSSUnknownRuleWrappingImplementation$Dart.prototype.$implements$CSSRule$Dart = 1;
_CSSUnknownRuleWrappingImplementation$Dart.prototype.$implements$_CSSRuleWrappingImplementation$Dart = 1;
_CSSUnknownRuleWrappingImplementation$Dart.prototype.$implements$DOMWrapperBase$Dart = 1;
_CSSUnknownRuleWrappingImplementation$Dart.prototype.$implements$DOMType$Dart = 1;
_CSSUnknownRuleWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(_CSSUnknownRuleWrappingImplementation$Dart, _CSSRuleWrappingImplementation$Dart);
_CSSUnknownRuleWrappingImplementation$Dart.$Constructor = function(){
  _CSSRuleWrappingImplementation$Dart.$Constructor.call(this);
}
;
_CSSUnknownRuleWrappingImplementation$Dart.$Initializer = function(){
  _CSSRuleWrappingImplementation$Dart.$Initializer.call(this);
}
;
_CSSUnknownRuleWrappingImplementation$Dart._CSSUnknownRuleWrappingImplementation$$Factory = function(){
  var tmp$0 = new _CSSUnknownRuleWrappingImplementation$Dart;
  tmp$0.$typeInfo = _CSSUnknownRuleWrappingImplementation$Dart.$lookupRTT();
  _CSSUnknownRuleWrappingImplementation$Dart.$Initializer.call(tmp$0);
  _CSSUnknownRuleWrappingImplementation$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
_CSSUnknownRuleWrappingImplementation$Dart.create__CSSUnknownRuleWrappingImplementation$member = function(){
  return _CSSUnknownRuleWrappingImplementation$Dart._CSSUnknownRuleWrappingImplementation$$Factory();
}
;
_CSSUnknownRuleWrappingImplementation$Dart.create__CSSUnknownRuleWrappingImplementation$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _CSSUnknownRuleWrappingImplementation$Dart.create__CSSUnknownRuleWrappingImplementation$member();
}
;
function native__CSSUnknownRuleWrappingImplementation_create__CSSUnknownRuleWrappingImplementation(){
  return _CSSUnknownRuleWrappingImplementation$Dart.create__CSSUnknownRuleWrappingImplementation$member();
}

_CSSUnknownRuleWrappingImplementation$Dart.create__CSSUnknownRuleWrappingImplementation$getter = function create__CSSUnknownRuleWrappingImplementation$getter(){
  return _CSSUnknownRuleWrappingImplementation$Dart.create__CSSUnknownRuleWrappingImplementation$named;
}
;
_CSSUnknownRuleWrappingImplementation$Dart.prototype.typeName$named = function(){
  return this.typeName$getter().apply(this, arguments);
}
;
_CSSUnknownRuleWrappingImplementation$Dart.prototype.typeName$getter = function(){
  return 'CSSUnknownRule';
}
;
