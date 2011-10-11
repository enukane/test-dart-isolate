function _CSSFontFaceRuleWrappingImplementation$Dart(){
}

_CSSFontFaceRuleWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('_CSSFontFaceRuleWrappingImplementation$Dart'), _CSSFontFaceRuleWrappingImplementation$Dart.$RTTimplements);
}
;
_CSSFontFaceRuleWrappingImplementation$Dart.$RTTimplements = function(rtt){
  _CSSFontFaceRuleWrappingImplementation$Dart.$addTo(rtt);
}
;
_CSSFontFaceRuleWrappingImplementation$Dart.$addTo = function(target){
  var rtt = _CSSFontFaceRuleWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  _CSSRuleWrappingImplementation$Dart.$addTo(target);
  CSSFontFaceRule$Dart.$addTo(target);
}
;
_CSSFontFaceRuleWrappingImplementation$Dart.prototype.$implements$_CSSFontFaceRuleWrappingImplementation$Dart = 1;
_CSSFontFaceRuleWrappingImplementation$Dart.prototype.$implements$CSSFontFaceRule$Dart = 1;
_CSSFontFaceRuleWrappingImplementation$Dart.prototype.$implements$CSSRule$Dart = 1;
_CSSFontFaceRuleWrappingImplementation$Dart.prototype.$implements$_CSSRuleWrappingImplementation$Dart = 1;
_CSSFontFaceRuleWrappingImplementation$Dart.prototype.$implements$DOMWrapperBase$Dart = 1;
_CSSFontFaceRuleWrappingImplementation$Dart.prototype.$implements$DOMType$Dart = 1;
_CSSFontFaceRuleWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(_CSSFontFaceRuleWrappingImplementation$Dart, _CSSRuleWrappingImplementation$Dart);
_CSSFontFaceRuleWrappingImplementation$Dart.$Constructor = function(){
  _CSSRuleWrappingImplementation$Dart.$Constructor.call(this);
}
;
_CSSFontFaceRuleWrappingImplementation$Dart.$Initializer = function(){
  _CSSRuleWrappingImplementation$Dart.$Initializer.call(this);
}
;
_CSSFontFaceRuleWrappingImplementation$Dart._CSSFontFaceRuleWrappingImplementation$$Factory = function(){
  var tmp$0 = new _CSSFontFaceRuleWrappingImplementation$Dart;
  tmp$0.$typeInfo = _CSSFontFaceRuleWrappingImplementation$Dart.$lookupRTT();
  _CSSFontFaceRuleWrappingImplementation$Dart.$Initializer.call(tmp$0);
  _CSSFontFaceRuleWrappingImplementation$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
_CSSFontFaceRuleWrappingImplementation$Dart.create__CSSFontFaceRuleWrappingImplementation$member = function(){
  return _CSSFontFaceRuleWrappingImplementation$Dart._CSSFontFaceRuleWrappingImplementation$$Factory();
}
;
_CSSFontFaceRuleWrappingImplementation$Dart.create__CSSFontFaceRuleWrappingImplementation$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _CSSFontFaceRuleWrappingImplementation$Dart.create__CSSFontFaceRuleWrappingImplementation$member();
}
;
function native__CSSFontFaceRuleWrappingImplementation_create__CSSFontFaceRuleWrappingImplementation(){
  return _CSSFontFaceRuleWrappingImplementation$Dart.create__CSSFontFaceRuleWrappingImplementation$member();
}

_CSSFontFaceRuleWrappingImplementation$Dart.create__CSSFontFaceRuleWrappingImplementation$getter = function create__CSSFontFaceRuleWrappingImplementation$getter(){
  return _CSSFontFaceRuleWrappingImplementation$Dart.create__CSSFontFaceRuleWrappingImplementation$named;
}
;
_CSSFontFaceRuleWrappingImplementation$Dart.prototype.style$named = function(){
  return this.style$getter().apply(this, arguments);
}
;
_CSSFontFaceRuleWrappingImplementation$Dart.prototype.style$getter = function(){
  return _CSSFontFaceRuleWrappingImplementation$Dart._get__CSSFontFaceRule_style$$member_(this);
}
;
_CSSFontFaceRuleWrappingImplementation$Dart._get__CSSFontFaceRule_style$$member_ = function(_this){
  return native__CSSFontFaceRuleWrappingImplementation__get__CSSFontFaceRule_style(_this);
}
;
_CSSFontFaceRuleWrappingImplementation$Dart._get__CSSFontFaceRule_style$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _CSSFontFaceRuleWrappingImplementation$Dart._get__CSSFontFaceRule_style$$member_(_this);
}
;
_CSSFontFaceRuleWrappingImplementation$Dart._get__CSSFontFaceRule_style$$getter_ = function _get__CSSFontFaceRule_style$$getter_(){
  return _CSSFontFaceRuleWrappingImplementation$Dart._get__CSSFontFaceRule_style$$named_;
}
;
_CSSFontFaceRuleWrappingImplementation$Dart.prototype.typeName$named = function(){
  return this.typeName$getter().apply(this, arguments);
}
;
_CSSFontFaceRuleWrappingImplementation$Dart.prototype.typeName$getter = function(){
  return 'CSSFontFaceRule';
}
;
