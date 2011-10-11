function _CSSMediaRuleWrappingImplementation$Dart(){
}

_CSSMediaRuleWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('_CSSMediaRuleWrappingImplementation$Dart'), _CSSMediaRuleWrappingImplementation$Dart.$RTTimplements);
}
;
_CSSMediaRuleWrappingImplementation$Dart.$RTTimplements = function(rtt){
  _CSSMediaRuleWrappingImplementation$Dart.$addTo(rtt);
}
;
_CSSMediaRuleWrappingImplementation$Dart.$addTo = function(target){
  var rtt = _CSSMediaRuleWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  _CSSRuleWrappingImplementation$Dart.$addTo(target);
  CSSMediaRule$Dart.$addTo(target);
}
;
_CSSMediaRuleWrappingImplementation$Dart.prototype.$implements$_CSSMediaRuleWrappingImplementation$Dart = 1;
_CSSMediaRuleWrappingImplementation$Dart.prototype.$implements$CSSMediaRule$Dart = 1;
_CSSMediaRuleWrappingImplementation$Dart.prototype.$implements$CSSRule$Dart = 1;
_CSSMediaRuleWrappingImplementation$Dart.prototype.$implements$_CSSRuleWrappingImplementation$Dart = 1;
_CSSMediaRuleWrappingImplementation$Dart.prototype.$implements$DOMWrapperBase$Dart = 1;
_CSSMediaRuleWrappingImplementation$Dart.prototype.$implements$DOMType$Dart = 1;
_CSSMediaRuleWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(_CSSMediaRuleWrappingImplementation$Dart, _CSSRuleWrappingImplementation$Dart);
_CSSMediaRuleWrappingImplementation$Dart.$Constructor = function(){
  _CSSRuleWrappingImplementation$Dart.$Constructor.call(this);
}
;
_CSSMediaRuleWrappingImplementation$Dart.$Initializer = function(){
  _CSSRuleWrappingImplementation$Dart.$Initializer.call(this);
}
;
_CSSMediaRuleWrappingImplementation$Dart._CSSMediaRuleWrappingImplementation$$Factory = function(){
  var tmp$0 = new _CSSMediaRuleWrappingImplementation$Dart;
  tmp$0.$typeInfo = _CSSMediaRuleWrappingImplementation$Dart.$lookupRTT();
  _CSSMediaRuleWrappingImplementation$Dart.$Initializer.call(tmp$0);
  _CSSMediaRuleWrappingImplementation$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
_CSSMediaRuleWrappingImplementation$Dart.create__CSSMediaRuleWrappingImplementation$member = function(){
  return _CSSMediaRuleWrappingImplementation$Dart._CSSMediaRuleWrappingImplementation$$Factory();
}
;
_CSSMediaRuleWrappingImplementation$Dart.create__CSSMediaRuleWrappingImplementation$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _CSSMediaRuleWrappingImplementation$Dart.create__CSSMediaRuleWrappingImplementation$member();
}
;
function native__CSSMediaRuleWrappingImplementation_create__CSSMediaRuleWrappingImplementation(){
  return _CSSMediaRuleWrappingImplementation$Dart.create__CSSMediaRuleWrappingImplementation$member();
}

_CSSMediaRuleWrappingImplementation$Dart.create__CSSMediaRuleWrappingImplementation$getter = function create__CSSMediaRuleWrappingImplementation$getter(){
  return _CSSMediaRuleWrappingImplementation$Dart.create__CSSMediaRuleWrappingImplementation$named;
}
;
_CSSMediaRuleWrappingImplementation$Dart.prototype.cssRules$named = function(){
  return this.cssRules$getter().apply(this, arguments);
}
;
_CSSMediaRuleWrappingImplementation$Dart.prototype.cssRules$getter = function(){
  return _CSSMediaRuleWrappingImplementation$Dart._get__CSSMediaRule_cssRules$$member_(this);
}
;
_CSSMediaRuleWrappingImplementation$Dart._get__CSSMediaRule_cssRules$$member_ = function(_this){
  return native__CSSMediaRuleWrappingImplementation__get__CSSMediaRule_cssRules(_this);
}
;
_CSSMediaRuleWrappingImplementation$Dart._get__CSSMediaRule_cssRules$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _CSSMediaRuleWrappingImplementation$Dart._get__CSSMediaRule_cssRules$$member_(_this);
}
;
_CSSMediaRuleWrappingImplementation$Dart._get__CSSMediaRule_cssRules$$getter_ = function _get__CSSMediaRule_cssRules$$getter_(){
  return _CSSMediaRuleWrappingImplementation$Dart._get__CSSMediaRule_cssRules$$named_;
}
;
_CSSMediaRuleWrappingImplementation$Dart.prototype.media$named = function(){
  return this.media$getter().apply(this, arguments);
}
;
_CSSMediaRuleWrappingImplementation$Dart.prototype.media$getter = function(){
  return _CSSMediaRuleWrappingImplementation$Dart._get__CSSMediaRule_media$$member_(this);
}
;
_CSSMediaRuleWrappingImplementation$Dart._get__CSSMediaRule_media$$member_ = function(_this){
  return native__CSSMediaRuleWrappingImplementation__get__CSSMediaRule_media(_this);
}
;
_CSSMediaRuleWrappingImplementation$Dart._get__CSSMediaRule_media$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _CSSMediaRuleWrappingImplementation$Dart._get__CSSMediaRule_media$$member_(_this);
}
;
_CSSMediaRuleWrappingImplementation$Dart._get__CSSMediaRule_media$$getter_ = function _get__CSSMediaRule_media$$getter_(){
  return _CSSMediaRuleWrappingImplementation$Dart._get__CSSMediaRule_media$$named_;
}
;
_CSSMediaRuleWrappingImplementation$Dart.prototype.deleteRule$member = function(index){
  _CSSMediaRuleWrappingImplementation$Dart._deleteRule$$member_(this, index);
  return;
}
;
_CSSMediaRuleWrappingImplementation$Dart.prototype.deleteRule$named = function($n, $o, index){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _CSSMediaRuleWrappingImplementation$Dart.prototype.deleteRule$member.call(this, index);
}
;
_CSSMediaRuleWrappingImplementation$Dart.prototype.deleteRule$getter = function deleteRule$getter(){
  return $bind(_CSSMediaRuleWrappingImplementation$Dart.prototype.deleteRule$named, this);
}
;
_CSSMediaRuleWrappingImplementation$Dart._deleteRule$$member_ = function(receiver, index){
  return native__CSSMediaRuleWrappingImplementation__deleteRule(receiver, index);
}
;
_CSSMediaRuleWrappingImplementation$Dart._deleteRule$$named_ = function($n, $o, receiver, index){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _CSSMediaRuleWrappingImplementation$Dart._deleteRule$$member_(receiver, index);
}
;
_CSSMediaRuleWrappingImplementation$Dart._deleteRule$$getter_ = function _deleteRule$$getter_(){
  return _CSSMediaRuleWrappingImplementation$Dart._deleteRule$$named_;
}
;
_CSSMediaRuleWrappingImplementation$Dart.prototype.insertRule$member = function(rule, index){
  return _CSSMediaRuleWrappingImplementation$Dart._insertRule$$member_(this, rule, index);
}
;
_CSSMediaRuleWrappingImplementation$Dart.prototype.insertRule$named = function($n, $o, rule, index){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _CSSMediaRuleWrappingImplementation$Dart.prototype.insertRule$member.call(this, rule, index);
}
;
_CSSMediaRuleWrappingImplementation$Dart.prototype.insertRule$getter = function insertRule$getter(){
  return $bind(_CSSMediaRuleWrappingImplementation$Dart.prototype.insertRule$named, this);
}
;
_CSSMediaRuleWrappingImplementation$Dart._insertRule$$member_ = function(receiver, rule, index){
  return native__CSSMediaRuleWrappingImplementation__insertRule(receiver, rule, index);
}
;
_CSSMediaRuleWrappingImplementation$Dart._insertRule$$named_ = function($n, $o, receiver, rule, index){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return _CSSMediaRuleWrappingImplementation$Dart._insertRule$$member_(receiver, rule, index);
}
;
_CSSMediaRuleWrappingImplementation$Dart._insertRule$$getter_ = function _insertRule$$getter_(){
  return _CSSMediaRuleWrappingImplementation$Dart._insertRule$$named_;
}
;
_CSSMediaRuleWrappingImplementation$Dart.prototype.typeName$named = function(){
  return this.typeName$getter().apply(this, arguments);
}
;
_CSSMediaRuleWrappingImplementation$Dart.prototype.typeName$getter = function(){
  return 'CSSMediaRule';
}
;
