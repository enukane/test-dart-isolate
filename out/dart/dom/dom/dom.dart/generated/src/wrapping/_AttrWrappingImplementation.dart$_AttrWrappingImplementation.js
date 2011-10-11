function _AttrWrappingImplementation$Dart(){
}

_AttrWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('_AttrWrappingImplementation$Dart'), _AttrWrappingImplementation$Dart.$RTTimplements);
}
;
_AttrWrappingImplementation$Dart.$RTTimplements = function(rtt){
  _AttrWrappingImplementation$Dart.$addTo(rtt);
}
;
_AttrWrappingImplementation$Dart.$addTo = function(target){
  var rtt = _AttrWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  _NodeWrappingImplementation$Dart.$addTo(target);
  Attr$Dart.$addTo(target);
}
;
_AttrWrappingImplementation$Dart.prototype.$implements$_AttrWrappingImplementation$Dart = 1;
_AttrWrappingImplementation$Dart.prototype.$implements$Attr$Dart = 1;
_AttrWrappingImplementation$Dart.prototype.$implements$Node$Dart = 1;
_AttrWrappingImplementation$Dart.prototype.$implements$EventTarget$Dart = 1;
_AttrWrappingImplementation$Dart.prototype.$implements$_NodeWrappingImplementation$Dart = 1;
_AttrWrappingImplementation$Dart.prototype.$implements$DOMWrapperBase$Dart = 1;
_AttrWrappingImplementation$Dart.prototype.$implements$DOMType$Dart = 1;
_AttrWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(_AttrWrappingImplementation$Dart, _NodeWrappingImplementation$Dart);
_AttrWrappingImplementation$Dart.$Constructor = function(){
  _NodeWrappingImplementation$Dart.$Constructor.call(this);
}
;
_AttrWrappingImplementation$Dart.$Initializer = function(){
  _NodeWrappingImplementation$Dart.$Initializer.call(this);
}
;
_AttrWrappingImplementation$Dart._AttrWrappingImplementation$$Factory = function(){
  var tmp$0 = new _AttrWrappingImplementation$Dart;
  tmp$0.$typeInfo = _AttrWrappingImplementation$Dart.$lookupRTT();
  _AttrWrappingImplementation$Dart.$Initializer.call(tmp$0);
  _AttrWrappingImplementation$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
_AttrWrappingImplementation$Dart.create__AttrWrappingImplementation$member = function(){
  return _AttrWrappingImplementation$Dart._AttrWrappingImplementation$$Factory();
}
;
_AttrWrappingImplementation$Dart.create__AttrWrappingImplementation$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _AttrWrappingImplementation$Dart.create__AttrWrappingImplementation$member();
}
;
function native__AttrWrappingImplementation_create__AttrWrappingImplementation(){
  return _AttrWrappingImplementation$Dart.create__AttrWrappingImplementation$member();
}

_AttrWrappingImplementation$Dart.create__AttrWrappingImplementation$getter = function create__AttrWrappingImplementation$getter(){
  return _AttrWrappingImplementation$Dart.create__AttrWrappingImplementation$named;
}
;
_AttrWrappingImplementation$Dart.prototype.isId$named = function(){
  return this.isId$getter().apply(this, arguments);
}
;
_AttrWrappingImplementation$Dart.prototype.isId$getter = function(){
  return _AttrWrappingImplementation$Dart._get__Attr_isId$$member_(this);
}
;
_AttrWrappingImplementation$Dart._get__Attr_isId$$member_ = function(_this){
  return native__AttrWrappingImplementation__get__Attr_isId(_this);
}
;
_AttrWrappingImplementation$Dart._get__Attr_isId$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _AttrWrappingImplementation$Dart._get__Attr_isId$$member_(_this);
}
;
_AttrWrappingImplementation$Dart._get__Attr_isId$$getter_ = function _get__Attr_isId$$getter_(){
  return _AttrWrappingImplementation$Dart._get__Attr_isId$$named_;
}
;
_AttrWrappingImplementation$Dart.prototype.name$named = function(){
  return this.name$getter().apply(this, arguments);
}
;
_AttrWrappingImplementation$Dart.prototype.name$getter = function(){
  return _AttrWrappingImplementation$Dart._get__Attr_name$$member_(this);
}
;
_AttrWrappingImplementation$Dart._get__Attr_name$$member_ = function(_this){
  return native__AttrWrappingImplementation__get__Attr_name(_this);
}
;
_AttrWrappingImplementation$Dart._get__Attr_name$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _AttrWrappingImplementation$Dart._get__Attr_name$$member_(_this);
}
;
_AttrWrappingImplementation$Dart._get__Attr_name$$getter_ = function _get__Attr_name$$getter_(){
  return _AttrWrappingImplementation$Dart._get__Attr_name$$named_;
}
;
_AttrWrappingImplementation$Dart.prototype.ownerElement$named = function(){
  return this.ownerElement$getter().apply(this, arguments);
}
;
_AttrWrappingImplementation$Dart.prototype.ownerElement$getter = function(){
  return _AttrWrappingImplementation$Dart._get__Attr_ownerElement$$member_(this);
}
;
_AttrWrappingImplementation$Dart._get__Attr_ownerElement$$member_ = function(_this){
  return native__AttrWrappingImplementation__get__Attr_ownerElement(_this);
}
;
_AttrWrappingImplementation$Dart._get__Attr_ownerElement$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _AttrWrappingImplementation$Dart._get__Attr_ownerElement$$member_(_this);
}
;
_AttrWrappingImplementation$Dart._get__Attr_ownerElement$$getter_ = function _get__Attr_ownerElement$$getter_(){
  return _AttrWrappingImplementation$Dart._get__Attr_ownerElement$$named_;
}
;
_AttrWrappingImplementation$Dart.prototype.specified$named = function(){
  return this.specified$getter().apply(this, arguments);
}
;
_AttrWrappingImplementation$Dart.prototype.specified$getter = function(){
  return _AttrWrappingImplementation$Dart._get__Attr_specified$$member_(this);
}
;
_AttrWrappingImplementation$Dart._get__Attr_specified$$member_ = function(_this){
  return native__AttrWrappingImplementation__get__Attr_specified(_this);
}
;
_AttrWrappingImplementation$Dart._get__Attr_specified$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _AttrWrappingImplementation$Dart._get__Attr_specified$$member_(_this);
}
;
_AttrWrappingImplementation$Dart._get__Attr_specified$$getter_ = function _get__Attr_specified$$getter_(){
  return _AttrWrappingImplementation$Dart._get__Attr_specified$$named_;
}
;
_AttrWrappingImplementation$Dart.prototype.value$named = function(){
  return this.value$getter().apply(this, arguments);
}
;
_AttrWrappingImplementation$Dart.prototype.value$getter = function(){
  return _AttrWrappingImplementation$Dart._get__Attr_value$$member_(this);
}
;
_AttrWrappingImplementation$Dart.prototype.value$setter = function(value){
  _AttrWrappingImplementation$Dart._set__Attr_value$$member_(this, value);
}
;
_AttrWrappingImplementation$Dart._get__Attr_value$$member_ = function(_this){
  return native__AttrWrappingImplementation__get__Attr_value(_this);
}
;
_AttrWrappingImplementation$Dart._get__Attr_value$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _AttrWrappingImplementation$Dart._get__Attr_value$$member_(_this);
}
;
_AttrWrappingImplementation$Dart._get__Attr_value$$getter_ = function _get__Attr_value$$getter_(){
  return _AttrWrappingImplementation$Dart._get__Attr_value$$named_;
}
;
_AttrWrappingImplementation$Dart._set__Attr_value$$member_ = function(_this, value){
  return native__AttrWrappingImplementation__set__Attr_value(_this, value);
}
;
_AttrWrappingImplementation$Dart._set__Attr_value$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _AttrWrappingImplementation$Dart._set__Attr_value$$member_(_this, value);
}
;
_AttrWrappingImplementation$Dart._set__Attr_value$$getter_ = function _set__Attr_value$$getter_(){
  return _AttrWrappingImplementation$Dart._set__Attr_value$$named_;
}
;
_AttrWrappingImplementation$Dart.prototype.typeName$named = function(){
  return this.typeName$getter().apply(this, arguments);
}
;
_AttrWrappingImplementation$Dart.prototype.typeName$getter = function(){
  return 'Attr';
}
;
