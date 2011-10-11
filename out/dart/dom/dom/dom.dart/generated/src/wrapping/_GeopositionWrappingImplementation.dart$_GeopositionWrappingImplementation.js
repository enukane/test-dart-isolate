function _GeopositionWrappingImplementation$Dart(){
}

_GeopositionWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('_GeopositionWrappingImplementation$Dart'), _GeopositionWrappingImplementation$Dart.$RTTimplements);
}
;
_GeopositionWrappingImplementation$Dart.$RTTimplements = function(rtt){
  _GeopositionWrappingImplementation$Dart.$addTo(rtt);
}
;
_GeopositionWrappingImplementation$Dart.$addTo = function(target){
  var rtt = _GeopositionWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  DOMWrapperBase$Dart.$addTo(target);
  Geoposition$Dart.$addTo(target);
}
;
_GeopositionWrappingImplementation$Dart.prototype.$implements$_GeopositionWrappingImplementation$Dart = 1;
_GeopositionWrappingImplementation$Dart.prototype.$implements$Geoposition$Dart = 1;
_GeopositionWrappingImplementation$Dart.prototype.$implements$DOMWrapperBase$Dart = 1;
_GeopositionWrappingImplementation$Dart.prototype.$implements$DOMType$Dart = 1;
_GeopositionWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(_GeopositionWrappingImplementation$Dart, DOMWrapperBase$Dart);
_GeopositionWrappingImplementation$Dart.$Constructor = function(){
  DOMWrapperBase$Dart.$Constructor.call(this);
}
;
_GeopositionWrappingImplementation$Dart.$Initializer = function(){
  DOMWrapperBase$Dart.$Initializer.call(this);
}
;
_GeopositionWrappingImplementation$Dart._GeopositionWrappingImplementation$$Factory = function(){
  var tmp$0 = new _GeopositionWrappingImplementation$Dart;
  tmp$0.$typeInfo = _GeopositionWrappingImplementation$Dart.$lookupRTT();
  _GeopositionWrappingImplementation$Dart.$Initializer.call(tmp$0);
  _GeopositionWrappingImplementation$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
_GeopositionWrappingImplementation$Dart.create__GeopositionWrappingImplementation$member = function(){
  return _GeopositionWrappingImplementation$Dart._GeopositionWrappingImplementation$$Factory();
}
;
_GeopositionWrappingImplementation$Dart.create__GeopositionWrappingImplementation$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _GeopositionWrappingImplementation$Dart.create__GeopositionWrappingImplementation$member();
}
;
function native__GeopositionWrappingImplementation_create__GeopositionWrappingImplementation(){
  return _GeopositionWrappingImplementation$Dart.create__GeopositionWrappingImplementation$member();
}

_GeopositionWrappingImplementation$Dart.create__GeopositionWrappingImplementation$getter = function create__GeopositionWrappingImplementation$getter(){
  return _GeopositionWrappingImplementation$Dart.create__GeopositionWrappingImplementation$named;
}
;
_GeopositionWrappingImplementation$Dart.prototype.coords$named = function(){
  return this.coords$getter().apply(this, arguments);
}
;
_GeopositionWrappingImplementation$Dart.prototype.coords$getter = function(){
  return _GeopositionWrappingImplementation$Dart._get__Geoposition_coords$$member_(this);
}
;
_GeopositionWrappingImplementation$Dart._get__Geoposition_coords$$member_ = function(_this){
  return native__GeopositionWrappingImplementation__get__Geoposition_coords(_this);
}
;
_GeopositionWrappingImplementation$Dart._get__Geoposition_coords$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _GeopositionWrappingImplementation$Dart._get__Geoposition_coords$$member_(_this);
}
;
_GeopositionWrappingImplementation$Dart._get__Geoposition_coords$$getter_ = function _get__Geoposition_coords$$getter_(){
  return _GeopositionWrappingImplementation$Dart._get__Geoposition_coords$$named_;
}
;
_GeopositionWrappingImplementation$Dart.prototype.timestamp$named = function(){
  return this.timestamp$getter().apply(this, arguments);
}
;
_GeopositionWrappingImplementation$Dart.prototype.timestamp$getter = function(){
  return _GeopositionWrappingImplementation$Dart._get__Geoposition_timestamp$$member_(this);
}
;
_GeopositionWrappingImplementation$Dart._get__Geoposition_timestamp$$member_ = function(_this){
  return native__GeopositionWrappingImplementation__get__Geoposition_timestamp(_this);
}
;
_GeopositionWrappingImplementation$Dart._get__Geoposition_timestamp$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _GeopositionWrappingImplementation$Dart._get__Geoposition_timestamp$$member_(_this);
}
;
_GeopositionWrappingImplementation$Dart._get__Geoposition_timestamp$$getter_ = function _get__Geoposition_timestamp$$getter_(){
  return _GeopositionWrappingImplementation$Dart._get__Geoposition_timestamp$$named_;
}
;
_GeopositionWrappingImplementation$Dart.prototype.typeName$named = function(){
  return this.typeName$getter().apply(this, arguments);
}
;
_GeopositionWrappingImplementation$Dart.prototype.typeName$getter = function(){
  return 'Geoposition';
}
;
