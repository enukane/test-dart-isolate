function _CoordinatesWrappingImplementation$Dart(){
}

_CoordinatesWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('_CoordinatesWrappingImplementation$Dart'), _CoordinatesWrappingImplementation$Dart.$RTTimplements);
}
;
_CoordinatesWrappingImplementation$Dart.$RTTimplements = function(rtt){
  _CoordinatesWrappingImplementation$Dart.$addTo(rtt);
}
;
_CoordinatesWrappingImplementation$Dart.$addTo = function(target){
  var rtt = _CoordinatesWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  DOMWrapperBase$Dart.$addTo(target);
  Coordinates$Dart.$addTo(target);
}
;
_CoordinatesWrappingImplementation$Dart.prototype.$implements$_CoordinatesWrappingImplementation$Dart = 1;
_CoordinatesWrappingImplementation$Dart.prototype.$implements$Coordinates$Dart = 1;
_CoordinatesWrappingImplementation$Dart.prototype.$implements$DOMWrapperBase$Dart = 1;
_CoordinatesWrappingImplementation$Dart.prototype.$implements$DOMType$Dart = 1;
_CoordinatesWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(_CoordinatesWrappingImplementation$Dart, DOMWrapperBase$Dart);
_CoordinatesWrappingImplementation$Dart.$Constructor = function(){
  DOMWrapperBase$Dart.$Constructor.call(this);
}
;
_CoordinatesWrappingImplementation$Dart.$Initializer = function(){
  DOMWrapperBase$Dart.$Initializer.call(this);
}
;
_CoordinatesWrappingImplementation$Dart._CoordinatesWrappingImplementation$$Factory = function(){
  var tmp$0 = new _CoordinatesWrappingImplementation$Dart;
  tmp$0.$typeInfo = _CoordinatesWrappingImplementation$Dart.$lookupRTT();
  _CoordinatesWrappingImplementation$Dart.$Initializer.call(tmp$0);
  _CoordinatesWrappingImplementation$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
_CoordinatesWrappingImplementation$Dart.create__CoordinatesWrappingImplementation$member = function(){
  return _CoordinatesWrappingImplementation$Dart._CoordinatesWrappingImplementation$$Factory();
}
;
_CoordinatesWrappingImplementation$Dart.create__CoordinatesWrappingImplementation$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _CoordinatesWrappingImplementation$Dart.create__CoordinatesWrappingImplementation$member();
}
;
function native__CoordinatesWrappingImplementation_create__CoordinatesWrappingImplementation(){
  return _CoordinatesWrappingImplementation$Dart.create__CoordinatesWrappingImplementation$member();
}

_CoordinatesWrappingImplementation$Dart.create__CoordinatesWrappingImplementation$getter = function create__CoordinatesWrappingImplementation$getter(){
  return _CoordinatesWrappingImplementation$Dart.create__CoordinatesWrappingImplementation$named;
}
;
_CoordinatesWrappingImplementation$Dart.prototype.accuracy$named = function(){
  return this.accuracy$getter().apply(this, arguments);
}
;
_CoordinatesWrappingImplementation$Dart.prototype.accuracy$getter = function(){
  return _CoordinatesWrappingImplementation$Dart._get__Coordinates_accuracy$$member_(this);
}
;
_CoordinatesWrappingImplementation$Dart._get__Coordinates_accuracy$$member_ = function(_this){
  return native__CoordinatesWrappingImplementation__get__Coordinates_accuracy(_this);
}
;
_CoordinatesWrappingImplementation$Dart._get__Coordinates_accuracy$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _CoordinatesWrappingImplementation$Dart._get__Coordinates_accuracy$$member_(_this);
}
;
_CoordinatesWrappingImplementation$Dart._get__Coordinates_accuracy$$getter_ = function _get__Coordinates_accuracy$$getter_(){
  return _CoordinatesWrappingImplementation$Dart._get__Coordinates_accuracy$$named_;
}
;
_CoordinatesWrappingImplementation$Dart.prototype.altitude$named = function(){
  return this.altitude$getter().apply(this, arguments);
}
;
_CoordinatesWrappingImplementation$Dart.prototype.altitude$getter = function(){
  return _CoordinatesWrappingImplementation$Dart._get__Coordinates_altitude$$member_(this);
}
;
_CoordinatesWrappingImplementation$Dart._get__Coordinates_altitude$$member_ = function(_this){
  return native__CoordinatesWrappingImplementation__get__Coordinates_altitude(_this);
}
;
_CoordinatesWrappingImplementation$Dart._get__Coordinates_altitude$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _CoordinatesWrappingImplementation$Dart._get__Coordinates_altitude$$member_(_this);
}
;
_CoordinatesWrappingImplementation$Dart._get__Coordinates_altitude$$getter_ = function _get__Coordinates_altitude$$getter_(){
  return _CoordinatesWrappingImplementation$Dart._get__Coordinates_altitude$$named_;
}
;
_CoordinatesWrappingImplementation$Dart.prototype.altitudeAccuracy$named = function(){
  return this.altitudeAccuracy$getter().apply(this, arguments);
}
;
_CoordinatesWrappingImplementation$Dart.prototype.altitudeAccuracy$getter = function(){
  return _CoordinatesWrappingImplementation$Dart._get__Coordinates_altitudeAccuracy$$member_(this);
}
;
_CoordinatesWrappingImplementation$Dart._get__Coordinates_altitudeAccuracy$$member_ = function(_this){
  return native__CoordinatesWrappingImplementation__get__Coordinates_altitudeAccuracy(_this);
}
;
_CoordinatesWrappingImplementation$Dart._get__Coordinates_altitudeAccuracy$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _CoordinatesWrappingImplementation$Dart._get__Coordinates_altitudeAccuracy$$member_(_this);
}
;
_CoordinatesWrappingImplementation$Dart._get__Coordinates_altitudeAccuracy$$getter_ = function _get__Coordinates_altitudeAccuracy$$getter_(){
  return _CoordinatesWrappingImplementation$Dart._get__Coordinates_altitudeAccuracy$$named_;
}
;
_CoordinatesWrappingImplementation$Dart.prototype.heading$named = function(){
  return this.heading$getter().apply(this, arguments);
}
;
_CoordinatesWrappingImplementation$Dart.prototype.heading$getter = function(){
  return _CoordinatesWrappingImplementation$Dart._get__Coordinates_heading$$member_(this);
}
;
_CoordinatesWrappingImplementation$Dart._get__Coordinates_heading$$member_ = function(_this){
  return native__CoordinatesWrappingImplementation__get__Coordinates_heading(_this);
}
;
_CoordinatesWrappingImplementation$Dart._get__Coordinates_heading$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _CoordinatesWrappingImplementation$Dart._get__Coordinates_heading$$member_(_this);
}
;
_CoordinatesWrappingImplementation$Dart._get__Coordinates_heading$$getter_ = function _get__Coordinates_heading$$getter_(){
  return _CoordinatesWrappingImplementation$Dart._get__Coordinates_heading$$named_;
}
;
_CoordinatesWrappingImplementation$Dart.prototype.latitude$named = function(){
  return this.latitude$getter().apply(this, arguments);
}
;
_CoordinatesWrappingImplementation$Dart.prototype.latitude$getter = function(){
  return _CoordinatesWrappingImplementation$Dart._get__Coordinates_latitude$$member_(this);
}
;
_CoordinatesWrappingImplementation$Dart._get__Coordinates_latitude$$member_ = function(_this){
  return native__CoordinatesWrappingImplementation__get__Coordinates_latitude(_this);
}
;
_CoordinatesWrappingImplementation$Dart._get__Coordinates_latitude$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _CoordinatesWrappingImplementation$Dart._get__Coordinates_latitude$$member_(_this);
}
;
_CoordinatesWrappingImplementation$Dart._get__Coordinates_latitude$$getter_ = function _get__Coordinates_latitude$$getter_(){
  return _CoordinatesWrappingImplementation$Dart._get__Coordinates_latitude$$named_;
}
;
_CoordinatesWrappingImplementation$Dart.prototype.longitude$named = function(){
  return this.longitude$getter().apply(this, arguments);
}
;
_CoordinatesWrappingImplementation$Dart.prototype.longitude$getter = function(){
  return _CoordinatesWrappingImplementation$Dart._get__Coordinates_longitude$$member_(this);
}
;
_CoordinatesWrappingImplementation$Dart._get__Coordinates_longitude$$member_ = function(_this){
  return native__CoordinatesWrappingImplementation__get__Coordinates_longitude(_this);
}
;
_CoordinatesWrappingImplementation$Dart._get__Coordinates_longitude$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _CoordinatesWrappingImplementation$Dart._get__Coordinates_longitude$$member_(_this);
}
;
_CoordinatesWrappingImplementation$Dart._get__Coordinates_longitude$$getter_ = function _get__Coordinates_longitude$$getter_(){
  return _CoordinatesWrappingImplementation$Dart._get__Coordinates_longitude$$named_;
}
;
_CoordinatesWrappingImplementation$Dart.prototype.speed$named = function(){
  return this.speed$getter().apply(this, arguments);
}
;
_CoordinatesWrappingImplementation$Dart.prototype.speed$getter = function(){
  return _CoordinatesWrappingImplementation$Dart._get__Coordinates_speed$$member_(this);
}
;
_CoordinatesWrappingImplementation$Dart._get__Coordinates_speed$$member_ = function(_this){
  return native__CoordinatesWrappingImplementation__get__Coordinates_speed(_this);
}
;
_CoordinatesWrappingImplementation$Dart._get__Coordinates_speed$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _CoordinatesWrappingImplementation$Dart._get__Coordinates_speed$$member_(_this);
}
;
_CoordinatesWrappingImplementation$Dart._get__Coordinates_speed$$getter_ = function _get__Coordinates_speed$$getter_(){
  return _CoordinatesWrappingImplementation$Dart._get__Coordinates_speed$$named_;
}
;
_CoordinatesWrappingImplementation$Dart.prototype.typeName$named = function(){
  return this.typeName$getter().apply(this, arguments);
}
;
_CoordinatesWrappingImplementation$Dart.prototype.typeName$getter = function(){
  return 'Coordinates';
}
;
