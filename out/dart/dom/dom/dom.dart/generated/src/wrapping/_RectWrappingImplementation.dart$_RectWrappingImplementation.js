function _RectWrappingImplementation$Dart(){
}

_RectWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('_RectWrappingImplementation$Dart'), _RectWrappingImplementation$Dart.$RTTimplements);
}
;
_RectWrappingImplementation$Dart.$RTTimplements = function(rtt){
  _RectWrappingImplementation$Dart.$addTo(rtt);
}
;
_RectWrappingImplementation$Dart.$addTo = function(target){
  var rtt = _RectWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  DOMWrapperBase$Dart.$addTo(target);
  Rect$Dart.$addTo(target);
}
;
_RectWrappingImplementation$Dart.prototype.$implements$_RectWrappingImplementation$Dart = 1;
_RectWrappingImplementation$Dart.prototype.$implements$Rect$Dart = 1;
_RectWrappingImplementation$Dart.prototype.$implements$DOMWrapperBase$Dart = 1;
_RectWrappingImplementation$Dart.prototype.$implements$DOMType$Dart = 1;
_RectWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(_RectWrappingImplementation$Dart, DOMWrapperBase$Dart);
_RectWrappingImplementation$Dart.$Constructor = function(){
  DOMWrapperBase$Dart.$Constructor.call(this);
}
;
_RectWrappingImplementation$Dart.$Initializer = function(){
  DOMWrapperBase$Dart.$Initializer.call(this);
}
;
_RectWrappingImplementation$Dart._RectWrappingImplementation$$Factory = function(){
  var tmp$0 = new _RectWrappingImplementation$Dart;
  tmp$0.$typeInfo = _RectWrappingImplementation$Dart.$lookupRTT();
  _RectWrappingImplementation$Dart.$Initializer.call(tmp$0);
  _RectWrappingImplementation$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
_RectWrappingImplementation$Dart.create__RectWrappingImplementation$member = function(){
  return _RectWrappingImplementation$Dart._RectWrappingImplementation$$Factory();
}
;
_RectWrappingImplementation$Dart.create__RectWrappingImplementation$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _RectWrappingImplementation$Dart.create__RectWrappingImplementation$member();
}
;
function native__RectWrappingImplementation_create__RectWrappingImplementation(){
  return _RectWrappingImplementation$Dart.create__RectWrappingImplementation$member();
}

_RectWrappingImplementation$Dart.create__RectWrappingImplementation$getter = function create__RectWrappingImplementation$getter(){
  return _RectWrappingImplementation$Dart.create__RectWrappingImplementation$named;
}
;
_RectWrappingImplementation$Dart.prototype.bottom$named = function(){
  return this.bottom$getter().apply(this, arguments);
}
;
_RectWrappingImplementation$Dart.prototype.bottom$getter = function(){
  return _RectWrappingImplementation$Dart._get__Rect_bottom$$member_(this);
}
;
_RectWrappingImplementation$Dart._get__Rect_bottom$$member_ = function(_this){
  return native__RectWrappingImplementation__get__Rect_bottom(_this);
}
;
_RectWrappingImplementation$Dart._get__Rect_bottom$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _RectWrappingImplementation$Dart._get__Rect_bottom$$member_(_this);
}
;
_RectWrappingImplementation$Dart._get__Rect_bottom$$getter_ = function _get__Rect_bottom$$getter_(){
  return _RectWrappingImplementation$Dart._get__Rect_bottom$$named_;
}
;
_RectWrappingImplementation$Dart.prototype.left$named = function(){
  return this.left$getter().apply(this, arguments);
}
;
_RectWrappingImplementation$Dart.prototype.left$getter = function(){
  return _RectWrappingImplementation$Dart._get__Rect_left$$member_(this);
}
;
_RectWrappingImplementation$Dart._get__Rect_left$$member_ = function(_this){
  return native__RectWrappingImplementation__get__Rect_left(_this);
}
;
_RectWrappingImplementation$Dart._get__Rect_left$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _RectWrappingImplementation$Dart._get__Rect_left$$member_(_this);
}
;
_RectWrappingImplementation$Dart._get__Rect_left$$getter_ = function _get__Rect_left$$getter_(){
  return _RectWrappingImplementation$Dart._get__Rect_left$$named_;
}
;
_RectWrappingImplementation$Dart.prototype.right$named = function(){
  return this.right$getter().apply(this, arguments);
}
;
_RectWrappingImplementation$Dart.prototype.right$getter = function(){
  return _RectWrappingImplementation$Dart._get__Rect_right$$member_(this);
}
;
_RectWrappingImplementation$Dart._get__Rect_right$$member_ = function(_this){
  return native__RectWrappingImplementation__get__Rect_right(_this);
}
;
_RectWrappingImplementation$Dart._get__Rect_right$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _RectWrappingImplementation$Dart._get__Rect_right$$member_(_this);
}
;
_RectWrappingImplementation$Dart._get__Rect_right$$getter_ = function _get__Rect_right$$getter_(){
  return _RectWrappingImplementation$Dart._get__Rect_right$$named_;
}
;
_RectWrappingImplementation$Dart.prototype.top$named = function(){
  return this.top$getter().apply(this, arguments);
}
;
_RectWrappingImplementation$Dart.prototype.top$getter = function(){
  return _RectWrappingImplementation$Dart._get__Rect_top$$member_(this);
}
;
_RectWrappingImplementation$Dart._get__Rect_top$$member_ = function(_this){
  return native__RectWrappingImplementation__get__Rect_top(_this);
}
;
_RectWrappingImplementation$Dart._get__Rect_top$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _RectWrappingImplementation$Dart._get__Rect_top$$member_(_this);
}
;
_RectWrappingImplementation$Dart._get__Rect_top$$getter_ = function _get__Rect_top$$getter_(){
  return _RectWrappingImplementation$Dart._get__Rect_top$$named_;
}
;
_RectWrappingImplementation$Dart.prototype.typeName$named = function(){
  return this.typeName$getter().apply(this, arguments);
}
;
_RectWrappingImplementation$Dart.prototype.typeName$getter = function(){
  return 'Rect';
}
;
