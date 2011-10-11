function _CSSCharsetRuleWrappingImplementation$Dart(){
}

_CSSCharsetRuleWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('_CSSCharsetRuleWrappingImplementation$Dart'), _CSSCharsetRuleWrappingImplementation$Dart.$RTTimplements);
}
;
_CSSCharsetRuleWrappingImplementation$Dart.$RTTimplements = function(rtt){
  _CSSCharsetRuleWrappingImplementation$Dart.$addTo(rtt);
}
;
_CSSCharsetRuleWrappingImplementation$Dart.$addTo = function(target){
  var rtt = _CSSCharsetRuleWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  _CSSRuleWrappingImplementation$Dart.$addTo(target);
  CSSCharsetRule$Dart.$addTo(target);
}
;
_CSSCharsetRuleWrappingImplementation$Dart.prototype.$implements$_CSSCharsetRuleWrappingImplementation$Dart = 1;
_CSSCharsetRuleWrappingImplementation$Dart.prototype.$implements$CSSCharsetRule$Dart = 1;
_CSSCharsetRuleWrappingImplementation$Dart.prototype.$implements$CSSRule$Dart = 1;
_CSSCharsetRuleWrappingImplementation$Dart.prototype.$implements$_CSSRuleWrappingImplementation$Dart = 1;
_CSSCharsetRuleWrappingImplementation$Dart.prototype.$implements$DOMWrapperBase$Dart = 1;
_CSSCharsetRuleWrappingImplementation$Dart.prototype.$implements$DOMType$Dart = 1;
_CSSCharsetRuleWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(_CSSCharsetRuleWrappingImplementation$Dart, _CSSRuleWrappingImplementation$Dart);
_CSSCharsetRuleWrappingImplementation$Dart.$Constructor = function(){
  _CSSRuleWrappingImplementation$Dart.$Constructor.call(this);
}
;
_CSSCharsetRuleWrappingImplementation$Dart.$Initializer = function(){
  _CSSRuleWrappingImplementation$Dart.$Initializer.call(this);
}
;
_CSSCharsetRuleWrappingImplementation$Dart._CSSCharsetRuleWrappingImplementation$$Factory = function(){
  var tmp$0 = new _CSSCharsetRuleWrappingImplementation$Dart;
  tmp$0.$typeInfo = _CSSCharsetRuleWrappingImplementation$Dart.$lookupRTT();
  _CSSCharsetRuleWrappingImplementation$Dart.$Initializer.call(tmp$0);
  _CSSCharsetRuleWrappingImplementation$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
_CSSCharsetRuleWrappingImplementation$Dart.create__CSSCharsetRuleWrappingImplementation$member = function(){
  return _CSSCharsetRuleWrappingImplementation$Dart._CSSCharsetRuleWrappingImplementation$$Factory();
}
;
_CSSCharsetRuleWrappingImplementation$Dart.create__CSSCharsetRuleWrappingImplementation$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _CSSCharsetRuleWrappingImplementation$Dart.create__CSSCharsetRuleWrappingImplementation$member();
}
;
function native__CSSCharsetRuleWrappingImplementation_create__CSSCharsetRuleWrappingImplementation(){
  return _CSSCharsetRuleWrappingImplementation$Dart.create__CSSCharsetRuleWrappingImplementation$member();
}

_CSSCharsetRuleWrappingImplementation$Dart.create__CSSCharsetRuleWrappingImplementation$getter = function create__CSSCharsetRuleWrappingImplementation$getter(){
  return _CSSCharsetRuleWrappingImplementation$Dart.create__CSSCharsetRuleWrappingImplementation$named;
}
;
_CSSCharsetRuleWrappingImplementation$Dart.prototype.encoding$named = function(){
  return this.encoding$getter().apply(this, arguments);
}
;
_CSSCharsetRuleWrappingImplementation$Dart.prototype.encoding$getter = function(){
  return _CSSCharsetRuleWrappingImplementation$Dart._get__CSSCharsetRule_encoding$$member_(this);
}
;
_CSSCharsetRuleWrappingImplementation$Dart.prototype.encoding$setter = function(value){
  _CSSCharsetRuleWrappingImplementation$Dart._set__CSSCharsetRule_encoding$$member_(this, value);
}
;
_CSSCharsetRuleWrappingImplementation$Dart._get__CSSCharsetRule_encoding$$member_ = function(_this){
  return native__CSSCharsetRuleWrappingImplementation__get__CSSCharsetRule_encoding(_this);
}
;
_CSSCharsetRuleWrappingImplementation$Dart._get__CSSCharsetRule_encoding$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _CSSCharsetRuleWrappingImplementation$Dart._get__CSSCharsetRule_encoding$$member_(_this);
}
;
_CSSCharsetRuleWrappingImplementation$Dart._get__CSSCharsetRule_encoding$$getter_ = function _get__CSSCharsetRule_encoding$$getter_(){
  return _CSSCharsetRuleWrappingImplementation$Dart._get__CSSCharsetRule_encoding$$named_;
}
;
_CSSCharsetRuleWrappingImplementation$Dart._set__CSSCharsetRule_encoding$$member_ = function(_this, value){
  return native__CSSCharsetRuleWrappingImplementation__set__CSSCharsetRule_encoding(_this, value);
}
;
_CSSCharsetRuleWrappingImplementation$Dart._set__CSSCharsetRule_encoding$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _CSSCharsetRuleWrappingImplementation$Dart._set__CSSCharsetRule_encoding$$member_(_this, value);
}
;
_CSSCharsetRuleWrappingImplementation$Dart._set__CSSCharsetRule_encoding$$getter_ = function _set__CSSCharsetRule_encoding$$getter_(){
  return _CSSCharsetRuleWrappingImplementation$Dart._set__CSSCharsetRule_encoding$$named_;
}
;
_CSSCharsetRuleWrappingImplementation$Dart.prototype.typeName$named = function(){
  return this.typeName$getter().apply(this, arguments);
}
;
_CSSCharsetRuleWrappingImplementation$Dart.prototype.typeName$getter = function(){
  return 'CSSCharsetRule';
}
;
