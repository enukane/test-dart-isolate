function _ScriptProfileWrappingImplementation$Dart(){
}

_ScriptProfileWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('_ScriptProfileWrappingImplementation$Dart'), _ScriptProfileWrappingImplementation$Dart.$RTTimplements);
}
;
_ScriptProfileWrappingImplementation$Dart.$RTTimplements = function(rtt){
  _ScriptProfileWrappingImplementation$Dart.$addTo(rtt);
}
;
_ScriptProfileWrappingImplementation$Dart.$addTo = function(target){
  var rtt = _ScriptProfileWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  DOMWrapperBase$Dart.$addTo(target);
  ScriptProfile$Dart.$addTo(target);
}
;
_ScriptProfileWrappingImplementation$Dart.prototype.$implements$_ScriptProfileWrappingImplementation$Dart = 1;
_ScriptProfileWrappingImplementation$Dart.prototype.$implements$ScriptProfile$Dart = 1;
_ScriptProfileWrappingImplementation$Dart.prototype.$implements$DOMWrapperBase$Dart = 1;
_ScriptProfileWrappingImplementation$Dart.prototype.$implements$DOMType$Dart = 1;
_ScriptProfileWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(_ScriptProfileWrappingImplementation$Dart, DOMWrapperBase$Dart);
_ScriptProfileWrappingImplementation$Dart.$Constructor = function(){
  DOMWrapperBase$Dart.$Constructor.call(this);
}
;
_ScriptProfileWrappingImplementation$Dart.$Initializer = function(){
  DOMWrapperBase$Dart.$Initializer.call(this);
}
;
_ScriptProfileWrappingImplementation$Dart._ScriptProfileWrappingImplementation$$Factory = function(){
  var tmp$0 = new _ScriptProfileWrappingImplementation$Dart;
  tmp$0.$typeInfo = _ScriptProfileWrappingImplementation$Dart.$lookupRTT();
  _ScriptProfileWrappingImplementation$Dart.$Initializer.call(tmp$0);
  _ScriptProfileWrappingImplementation$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
_ScriptProfileWrappingImplementation$Dart.create__ScriptProfileWrappingImplementation$member = function(){
  return _ScriptProfileWrappingImplementation$Dart._ScriptProfileWrappingImplementation$$Factory();
}
;
_ScriptProfileWrappingImplementation$Dart.create__ScriptProfileWrappingImplementation$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _ScriptProfileWrappingImplementation$Dart.create__ScriptProfileWrappingImplementation$member();
}
;
function native__ScriptProfileWrappingImplementation_create__ScriptProfileWrappingImplementation(){
  return _ScriptProfileWrappingImplementation$Dart.create__ScriptProfileWrappingImplementation$member();
}

_ScriptProfileWrappingImplementation$Dart.create__ScriptProfileWrappingImplementation$getter = function create__ScriptProfileWrappingImplementation$getter(){
  return _ScriptProfileWrappingImplementation$Dart.create__ScriptProfileWrappingImplementation$named;
}
;
_ScriptProfileWrappingImplementation$Dart.prototype.head$named = function(){
  return this.head$getter().apply(this, arguments);
}
;
_ScriptProfileWrappingImplementation$Dart.prototype.head$getter = function(){
  return _ScriptProfileWrappingImplementation$Dart._get__ScriptProfile_head$$member_(this);
}
;
_ScriptProfileWrappingImplementation$Dart._get__ScriptProfile_head$$member_ = function(_this){
  return native__ScriptProfileWrappingImplementation__get__ScriptProfile_head(_this);
}
;
_ScriptProfileWrappingImplementation$Dart._get__ScriptProfile_head$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _ScriptProfileWrappingImplementation$Dart._get__ScriptProfile_head$$member_(_this);
}
;
_ScriptProfileWrappingImplementation$Dart._get__ScriptProfile_head$$getter_ = function _get__ScriptProfile_head$$getter_(){
  return _ScriptProfileWrappingImplementation$Dart._get__ScriptProfile_head$$named_;
}
;
_ScriptProfileWrappingImplementation$Dart.prototype.title$named = function(){
  return this.title$getter().apply(this, arguments);
}
;
_ScriptProfileWrappingImplementation$Dart.prototype.title$getter = function(){
  return _ScriptProfileWrappingImplementation$Dart._get__ScriptProfile_title$$member_(this);
}
;
_ScriptProfileWrappingImplementation$Dart._get__ScriptProfile_title$$member_ = function(_this){
  return native__ScriptProfileWrappingImplementation__get__ScriptProfile_title(_this);
}
;
_ScriptProfileWrappingImplementation$Dart._get__ScriptProfile_title$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _ScriptProfileWrappingImplementation$Dart._get__ScriptProfile_title$$member_(_this);
}
;
_ScriptProfileWrappingImplementation$Dart._get__ScriptProfile_title$$getter_ = function _get__ScriptProfile_title$$getter_(){
  return _ScriptProfileWrappingImplementation$Dart._get__ScriptProfile_title$$named_;
}
;
_ScriptProfileWrappingImplementation$Dart.prototype.uid$named = function(){
  return this.uid$getter().apply(this, arguments);
}
;
_ScriptProfileWrappingImplementation$Dart.prototype.uid$getter = function(){
  return _ScriptProfileWrappingImplementation$Dart._get__ScriptProfile_uid$$member_(this);
}
;
_ScriptProfileWrappingImplementation$Dart._get__ScriptProfile_uid$$member_ = function(_this){
  return native__ScriptProfileWrappingImplementation__get__ScriptProfile_uid(_this);
}
;
_ScriptProfileWrappingImplementation$Dart._get__ScriptProfile_uid$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _ScriptProfileWrappingImplementation$Dart._get__ScriptProfile_uid$$member_(_this);
}
;
_ScriptProfileWrappingImplementation$Dart._get__ScriptProfile_uid$$getter_ = function _get__ScriptProfile_uid$$getter_(){
  return _ScriptProfileWrappingImplementation$Dart._get__ScriptProfile_uid$$named_;
}
;
_ScriptProfileWrappingImplementation$Dart.prototype.typeName$named = function(){
  return this.typeName$getter().apply(this, arguments);
}
;
_ScriptProfileWrappingImplementation$Dart.prototype.typeName$getter = function(){
  return 'ScriptProfile';
}
;
