function _MediaStreamTrackWrappingImplementation$Dart(){
}

_MediaStreamTrackWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('_MediaStreamTrackWrappingImplementation$Dart'), _MediaStreamTrackWrappingImplementation$Dart.$RTTimplements);
}
;
_MediaStreamTrackWrappingImplementation$Dart.$RTTimplements = function(rtt){
  _MediaStreamTrackWrappingImplementation$Dart.$addTo(rtt);
}
;
_MediaStreamTrackWrappingImplementation$Dart.$addTo = function(target){
  var rtt = _MediaStreamTrackWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  DOMWrapperBase$Dart.$addTo(target);
  MediaStreamTrack$Dart.$addTo(target);
}
;
_MediaStreamTrackWrappingImplementation$Dart.prototype.$implements$_MediaStreamTrackWrappingImplementation$Dart = 1;
_MediaStreamTrackWrappingImplementation$Dart.prototype.$implements$MediaStreamTrack$Dart = 1;
_MediaStreamTrackWrappingImplementation$Dart.prototype.$implements$DOMWrapperBase$Dart = 1;
_MediaStreamTrackWrappingImplementation$Dart.prototype.$implements$DOMType$Dart = 1;
_MediaStreamTrackWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(_MediaStreamTrackWrappingImplementation$Dart, DOMWrapperBase$Dart);
_MediaStreamTrackWrappingImplementation$Dart.$Constructor = function(){
  DOMWrapperBase$Dart.$Constructor.call(this);
}
;
_MediaStreamTrackWrappingImplementation$Dart.$Initializer = function(){
  DOMWrapperBase$Dart.$Initializer.call(this);
}
;
_MediaStreamTrackWrappingImplementation$Dart._MediaStreamTrackWrappingImplementation$$Factory = function(){
  var tmp$0 = new _MediaStreamTrackWrappingImplementation$Dart;
  tmp$0.$typeInfo = _MediaStreamTrackWrappingImplementation$Dart.$lookupRTT();
  _MediaStreamTrackWrappingImplementation$Dart.$Initializer.call(tmp$0);
  _MediaStreamTrackWrappingImplementation$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
_MediaStreamTrackWrappingImplementation$Dart.create__MediaStreamTrackWrappingImplementation$member = function(){
  return _MediaStreamTrackWrappingImplementation$Dart._MediaStreamTrackWrappingImplementation$$Factory();
}
;
_MediaStreamTrackWrappingImplementation$Dart.create__MediaStreamTrackWrappingImplementation$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _MediaStreamTrackWrappingImplementation$Dart.create__MediaStreamTrackWrappingImplementation$member();
}
;
function native__MediaStreamTrackWrappingImplementation_create__MediaStreamTrackWrappingImplementation(){
  return _MediaStreamTrackWrappingImplementation$Dart.create__MediaStreamTrackWrappingImplementation$member();
}

_MediaStreamTrackWrappingImplementation$Dart.create__MediaStreamTrackWrappingImplementation$getter = function create__MediaStreamTrackWrappingImplementation$getter(){
  return _MediaStreamTrackWrappingImplementation$Dart.create__MediaStreamTrackWrappingImplementation$named;
}
;
_MediaStreamTrackWrappingImplementation$Dart.prototype.enabled$named = function(){
  return this.enabled$getter().apply(this, arguments);
}
;
_MediaStreamTrackWrappingImplementation$Dart.prototype.enabled$getter = function(){
  return _MediaStreamTrackWrappingImplementation$Dart._get__MediaStreamTrack_enabled$$member_(this);
}
;
_MediaStreamTrackWrappingImplementation$Dart.prototype.enabled$setter = function(value){
  _MediaStreamTrackWrappingImplementation$Dart._set__MediaStreamTrack_enabled$$member_(this, value);
}
;
_MediaStreamTrackWrappingImplementation$Dart._get__MediaStreamTrack_enabled$$member_ = function(_this){
  return native__MediaStreamTrackWrappingImplementation__get__MediaStreamTrack_enabled(_this);
}
;
_MediaStreamTrackWrappingImplementation$Dart._get__MediaStreamTrack_enabled$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _MediaStreamTrackWrappingImplementation$Dart._get__MediaStreamTrack_enabled$$member_(_this);
}
;
_MediaStreamTrackWrappingImplementation$Dart._get__MediaStreamTrack_enabled$$getter_ = function _get__MediaStreamTrack_enabled$$getter_(){
  return _MediaStreamTrackWrappingImplementation$Dart._get__MediaStreamTrack_enabled$$named_;
}
;
_MediaStreamTrackWrappingImplementation$Dart._set__MediaStreamTrack_enabled$$member_ = function(_this, value){
  return native__MediaStreamTrackWrappingImplementation__set__MediaStreamTrack_enabled(_this, value);
}
;
_MediaStreamTrackWrappingImplementation$Dart._set__MediaStreamTrack_enabled$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _MediaStreamTrackWrappingImplementation$Dart._set__MediaStreamTrack_enabled$$member_(_this, value);
}
;
_MediaStreamTrackWrappingImplementation$Dart._set__MediaStreamTrack_enabled$$getter_ = function _set__MediaStreamTrack_enabled$$getter_(){
  return _MediaStreamTrackWrappingImplementation$Dart._set__MediaStreamTrack_enabled$$named_;
}
;
_MediaStreamTrackWrappingImplementation$Dart.prototype.kind$named = function(){
  return this.kind$getter().apply(this, arguments);
}
;
_MediaStreamTrackWrappingImplementation$Dart.prototype.kind$getter = function(){
  return _MediaStreamTrackWrappingImplementation$Dart._get__MediaStreamTrack_kind$$member_(this);
}
;
_MediaStreamTrackWrappingImplementation$Dart._get__MediaStreamTrack_kind$$member_ = function(_this){
  return native__MediaStreamTrackWrappingImplementation__get__MediaStreamTrack_kind(_this);
}
;
_MediaStreamTrackWrappingImplementation$Dart._get__MediaStreamTrack_kind$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _MediaStreamTrackWrappingImplementation$Dart._get__MediaStreamTrack_kind$$member_(_this);
}
;
_MediaStreamTrackWrappingImplementation$Dart._get__MediaStreamTrack_kind$$getter_ = function _get__MediaStreamTrack_kind$$getter_(){
  return _MediaStreamTrackWrappingImplementation$Dart._get__MediaStreamTrack_kind$$named_;
}
;
_MediaStreamTrackWrappingImplementation$Dart.prototype.label$named = function(){
  return this.label$getter().apply(this, arguments);
}
;
_MediaStreamTrackWrappingImplementation$Dart.prototype.label$getter = function(){
  return _MediaStreamTrackWrappingImplementation$Dart._get__MediaStreamTrack_label$$member_(this);
}
;
_MediaStreamTrackWrappingImplementation$Dart._get__MediaStreamTrack_label$$member_ = function(_this){
  return native__MediaStreamTrackWrappingImplementation__get__MediaStreamTrack_label(_this);
}
;
_MediaStreamTrackWrappingImplementation$Dart._get__MediaStreamTrack_label$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _MediaStreamTrackWrappingImplementation$Dart._get__MediaStreamTrack_label$$member_(_this);
}
;
_MediaStreamTrackWrappingImplementation$Dart._get__MediaStreamTrack_label$$getter_ = function _get__MediaStreamTrack_label$$getter_(){
  return _MediaStreamTrackWrappingImplementation$Dart._get__MediaStreamTrack_label$$named_;
}
;
_MediaStreamTrackWrappingImplementation$Dart.prototype.typeName$named = function(){
  return this.typeName$getter().apply(this, arguments);
}
;
_MediaStreamTrackWrappingImplementation$Dart.prototype.typeName$getter = function(){
  return 'MediaStreamTrack';
}
;
