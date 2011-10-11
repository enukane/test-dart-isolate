function _TouchWrappingImplementation$Dart(){
}

_TouchWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('_TouchWrappingImplementation$Dart'), _TouchWrappingImplementation$Dart.$RTTimplements);
}
;
_TouchWrappingImplementation$Dart.$RTTimplements = function(rtt){
  _TouchWrappingImplementation$Dart.$addTo(rtt);
}
;
_TouchWrappingImplementation$Dart.$addTo = function(target){
  var rtt = _TouchWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  DOMWrapperBase$Dart.$addTo(target);
  Touch$Dart.$addTo(target);
}
;
_TouchWrappingImplementation$Dart.prototype.$implements$_TouchWrappingImplementation$Dart = 1;
_TouchWrappingImplementation$Dart.prototype.$implements$Touch$Dart = 1;
_TouchWrappingImplementation$Dart.prototype.$implements$DOMWrapperBase$Dart = 1;
_TouchWrappingImplementation$Dart.prototype.$implements$DOMType$Dart = 1;
_TouchWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(_TouchWrappingImplementation$Dart, DOMWrapperBase$Dart);
_TouchWrappingImplementation$Dart.$Constructor = function(){
  DOMWrapperBase$Dart.$Constructor.call(this);
}
;
_TouchWrappingImplementation$Dart.$Initializer = function(){
  DOMWrapperBase$Dart.$Initializer.call(this);
}
;
_TouchWrappingImplementation$Dart._TouchWrappingImplementation$$Factory = function(){
  var tmp$0 = new _TouchWrappingImplementation$Dart;
  tmp$0.$typeInfo = _TouchWrappingImplementation$Dart.$lookupRTT();
  _TouchWrappingImplementation$Dart.$Initializer.call(tmp$0);
  _TouchWrappingImplementation$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
_TouchWrappingImplementation$Dart.create__TouchWrappingImplementation$member = function(){
  return _TouchWrappingImplementation$Dart._TouchWrappingImplementation$$Factory();
}
;
_TouchWrappingImplementation$Dart.create__TouchWrappingImplementation$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _TouchWrappingImplementation$Dart.create__TouchWrappingImplementation$member();
}
;
function native__TouchWrappingImplementation_create__TouchWrappingImplementation(){
  return _TouchWrappingImplementation$Dart.create__TouchWrappingImplementation$member();
}

_TouchWrappingImplementation$Dart.create__TouchWrappingImplementation$getter = function create__TouchWrappingImplementation$getter(){
  return _TouchWrappingImplementation$Dart.create__TouchWrappingImplementation$named;
}
;
_TouchWrappingImplementation$Dart.prototype.clientX$named = function(){
  return this.clientX$getter().apply(this, arguments);
}
;
_TouchWrappingImplementation$Dart.prototype.clientX$getter = function(){
  return _TouchWrappingImplementation$Dart._get__Touch_clientX$$member_(this);
}
;
_TouchWrappingImplementation$Dart._get__Touch_clientX$$member_ = function(_this){
  return native__TouchWrappingImplementation__get__Touch_clientX(_this);
}
;
_TouchWrappingImplementation$Dart._get__Touch_clientX$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _TouchWrappingImplementation$Dart._get__Touch_clientX$$member_(_this);
}
;
_TouchWrappingImplementation$Dart._get__Touch_clientX$$getter_ = function _get__Touch_clientX$$getter_(){
  return _TouchWrappingImplementation$Dart._get__Touch_clientX$$named_;
}
;
_TouchWrappingImplementation$Dart.prototype.clientY$named = function(){
  return this.clientY$getter().apply(this, arguments);
}
;
_TouchWrappingImplementation$Dart.prototype.clientY$getter = function(){
  return _TouchWrappingImplementation$Dart._get__Touch_clientY$$member_(this);
}
;
_TouchWrappingImplementation$Dart._get__Touch_clientY$$member_ = function(_this){
  return native__TouchWrappingImplementation__get__Touch_clientY(_this);
}
;
_TouchWrappingImplementation$Dart._get__Touch_clientY$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _TouchWrappingImplementation$Dart._get__Touch_clientY$$member_(_this);
}
;
_TouchWrappingImplementation$Dart._get__Touch_clientY$$getter_ = function _get__Touch_clientY$$getter_(){
  return _TouchWrappingImplementation$Dart._get__Touch_clientY$$named_;
}
;
_TouchWrappingImplementation$Dart.prototype.identifier$named = function(){
  return this.identifier$getter().apply(this, arguments);
}
;
_TouchWrappingImplementation$Dart.prototype.identifier$getter = function(){
  return _TouchWrappingImplementation$Dart._get__Touch_identifier$$member_(this);
}
;
_TouchWrappingImplementation$Dart._get__Touch_identifier$$member_ = function(_this){
  return native__TouchWrappingImplementation__get__Touch_identifier(_this);
}
;
_TouchWrappingImplementation$Dart._get__Touch_identifier$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _TouchWrappingImplementation$Dart._get__Touch_identifier$$member_(_this);
}
;
_TouchWrappingImplementation$Dart._get__Touch_identifier$$getter_ = function _get__Touch_identifier$$getter_(){
  return _TouchWrappingImplementation$Dart._get__Touch_identifier$$named_;
}
;
_TouchWrappingImplementation$Dart.prototype.pageX$named = function(){
  return this.pageX$getter().apply(this, arguments);
}
;
_TouchWrappingImplementation$Dart.prototype.pageX$getter = function(){
  return _TouchWrappingImplementation$Dart._get__Touch_pageX$$member_(this);
}
;
_TouchWrappingImplementation$Dart._get__Touch_pageX$$member_ = function(_this){
  return native__TouchWrappingImplementation__get__Touch_pageX(_this);
}
;
_TouchWrappingImplementation$Dart._get__Touch_pageX$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _TouchWrappingImplementation$Dart._get__Touch_pageX$$member_(_this);
}
;
_TouchWrappingImplementation$Dart._get__Touch_pageX$$getter_ = function _get__Touch_pageX$$getter_(){
  return _TouchWrappingImplementation$Dart._get__Touch_pageX$$named_;
}
;
_TouchWrappingImplementation$Dart.prototype.pageY$named = function(){
  return this.pageY$getter().apply(this, arguments);
}
;
_TouchWrappingImplementation$Dart.prototype.pageY$getter = function(){
  return _TouchWrappingImplementation$Dart._get__Touch_pageY$$member_(this);
}
;
_TouchWrappingImplementation$Dart._get__Touch_pageY$$member_ = function(_this){
  return native__TouchWrappingImplementation__get__Touch_pageY(_this);
}
;
_TouchWrappingImplementation$Dart._get__Touch_pageY$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _TouchWrappingImplementation$Dart._get__Touch_pageY$$member_(_this);
}
;
_TouchWrappingImplementation$Dart._get__Touch_pageY$$getter_ = function _get__Touch_pageY$$getter_(){
  return _TouchWrappingImplementation$Dart._get__Touch_pageY$$named_;
}
;
_TouchWrappingImplementation$Dart.prototype.screenX$named = function(){
  return this.screenX$getter().apply(this, arguments);
}
;
_TouchWrappingImplementation$Dart.prototype.screenX$getter = function(){
  return _TouchWrappingImplementation$Dart._get__Touch_screenX$$member_(this);
}
;
_TouchWrappingImplementation$Dart._get__Touch_screenX$$member_ = function(_this){
  return native__TouchWrappingImplementation__get__Touch_screenX(_this);
}
;
_TouchWrappingImplementation$Dart._get__Touch_screenX$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _TouchWrappingImplementation$Dart._get__Touch_screenX$$member_(_this);
}
;
_TouchWrappingImplementation$Dart._get__Touch_screenX$$getter_ = function _get__Touch_screenX$$getter_(){
  return _TouchWrappingImplementation$Dart._get__Touch_screenX$$named_;
}
;
_TouchWrappingImplementation$Dart.prototype.screenY$named = function(){
  return this.screenY$getter().apply(this, arguments);
}
;
_TouchWrappingImplementation$Dart.prototype.screenY$getter = function(){
  return _TouchWrappingImplementation$Dart._get__Touch_screenY$$member_(this);
}
;
_TouchWrappingImplementation$Dart._get__Touch_screenY$$member_ = function(_this){
  return native__TouchWrappingImplementation__get__Touch_screenY(_this);
}
;
_TouchWrappingImplementation$Dart._get__Touch_screenY$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _TouchWrappingImplementation$Dart._get__Touch_screenY$$member_(_this);
}
;
_TouchWrappingImplementation$Dart._get__Touch_screenY$$getter_ = function _get__Touch_screenY$$getter_(){
  return _TouchWrappingImplementation$Dart._get__Touch_screenY$$named_;
}
;
_TouchWrappingImplementation$Dart.prototype.target$named = function(){
  return this.target$getter().apply(this, arguments);
}
;
_TouchWrappingImplementation$Dart.prototype.target$getter = function(){
  return _TouchWrappingImplementation$Dart._get__Touch_target$$member_(this);
}
;
_TouchWrappingImplementation$Dart._get__Touch_target$$member_ = function(_this){
  return native__TouchWrappingImplementation__get__Touch_target(_this);
}
;
_TouchWrappingImplementation$Dart._get__Touch_target$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _TouchWrappingImplementation$Dart._get__Touch_target$$member_(_this);
}
;
_TouchWrappingImplementation$Dart._get__Touch_target$$getter_ = function _get__Touch_target$$getter_(){
  return _TouchWrappingImplementation$Dart._get__Touch_target$$named_;
}
;
_TouchWrappingImplementation$Dart.prototype.webkitForce$named = function(){
  return this.webkitForce$getter().apply(this, arguments);
}
;
_TouchWrappingImplementation$Dart.prototype.webkitForce$getter = function(){
  return _TouchWrappingImplementation$Dart._get__Touch_webkitForce$$member_(this);
}
;
_TouchWrappingImplementation$Dart._get__Touch_webkitForce$$member_ = function(_this){
  return native__TouchWrappingImplementation__get__Touch_webkitForce(_this);
}
;
_TouchWrappingImplementation$Dart._get__Touch_webkitForce$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _TouchWrappingImplementation$Dart._get__Touch_webkitForce$$member_(_this);
}
;
_TouchWrappingImplementation$Dart._get__Touch_webkitForce$$getter_ = function _get__Touch_webkitForce$$getter_(){
  return _TouchWrappingImplementation$Dart._get__Touch_webkitForce$$named_;
}
;
_TouchWrappingImplementation$Dart.prototype.webkitRadiusX$named = function(){
  return this.webkitRadiusX$getter().apply(this, arguments);
}
;
_TouchWrappingImplementation$Dart.prototype.webkitRadiusX$getter = function(){
  return _TouchWrappingImplementation$Dart._get__Touch_webkitRadiusX$$member_(this);
}
;
_TouchWrappingImplementation$Dart._get__Touch_webkitRadiusX$$member_ = function(_this){
  return native__TouchWrappingImplementation__get__Touch_webkitRadiusX(_this);
}
;
_TouchWrappingImplementation$Dart._get__Touch_webkitRadiusX$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _TouchWrappingImplementation$Dart._get__Touch_webkitRadiusX$$member_(_this);
}
;
_TouchWrappingImplementation$Dart._get__Touch_webkitRadiusX$$getter_ = function _get__Touch_webkitRadiusX$$getter_(){
  return _TouchWrappingImplementation$Dart._get__Touch_webkitRadiusX$$named_;
}
;
_TouchWrappingImplementation$Dart.prototype.webkitRadiusY$named = function(){
  return this.webkitRadiusY$getter().apply(this, arguments);
}
;
_TouchWrappingImplementation$Dart.prototype.webkitRadiusY$getter = function(){
  return _TouchWrappingImplementation$Dart._get__Touch_webkitRadiusY$$member_(this);
}
;
_TouchWrappingImplementation$Dart._get__Touch_webkitRadiusY$$member_ = function(_this){
  return native__TouchWrappingImplementation__get__Touch_webkitRadiusY(_this);
}
;
_TouchWrappingImplementation$Dart._get__Touch_webkitRadiusY$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _TouchWrappingImplementation$Dart._get__Touch_webkitRadiusY$$member_(_this);
}
;
_TouchWrappingImplementation$Dart._get__Touch_webkitRadiusY$$getter_ = function _get__Touch_webkitRadiusY$$getter_(){
  return _TouchWrappingImplementation$Dart._get__Touch_webkitRadiusY$$named_;
}
;
_TouchWrappingImplementation$Dart.prototype.webkitRotationAngle$named = function(){
  return this.webkitRotationAngle$getter().apply(this, arguments);
}
;
_TouchWrappingImplementation$Dart.prototype.webkitRotationAngle$getter = function(){
  return _TouchWrappingImplementation$Dart._get__Touch_webkitRotationAngle$$member_(this);
}
;
_TouchWrappingImplementation$Dart._get__Touch_webkitRotationAngle$$member_ = function(_this){
  return native__TouchWrappingImplementation__get__Touch_webkitRotationAngle(_this);
}
;
_TouchWrappingImplementation$Dart._get__Touch_webkitRotationAngle$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _TouchWrappingImplementation$Dart._get__Touch_webkitRotationAngle$$member_(_this);
}
;
_TouchWrappingImplementation$Dart._get__Touch_webkitRotationAngle$$getter_ = function _get__Touch_webkitRotationAngle$$getter_(){
  return _TouchWrappingImplementation$Dart._get__Touch_webkitRotationAngle$$named_;
}
;
_TouchWrappingImplementation$Dart.prototype.typeName$named = function(){
  return this.typeName$getter().apply(this, arguments);
}
;
_TouchWrappingImplementation$Dart.prototype.typeName$getter = function(){
  return 'Touch';
}
;
