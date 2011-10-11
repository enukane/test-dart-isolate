function _GeolocationWrappingImplementation$Dart(){
}

_GeolocationWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('_GeolocationWrappingImplementation$Dart'), _GeolocationWrappingImplementation$Dart.$RTTimplements);
}
;
_GeolocationWrappingImplementation$Dart.$RTTimplements = function(rtt){
  _GeolocationWrappingImplementation$Dart.$addTo(rtt);
}
;
_GeolocationWrappingImplementation$Dart.$addTo = function(target){
  var rtt = _GeolocationWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  DOMWrapperBase$Dart.$addTo(target);
  Geolocation$Dart.$addTo(target);
}
;
_GeolocationWrappingImplementation$Dart.prototype.$implements$_GeolocationWrappingImplementation$Dart = 1;
_GeolocationWrappingImplementation$Dart.prototype.$implements$Geolocation$Dart = 1;
_GeolocationWrappingImplementation$Dart.prototype.$implements$DOMWrapperBase$Dart = 1;
_GeolocationWrappingImplementation$Dart.prototype.$implements$DOMType$Dart = 1;
_GeolocationWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(_GeolocationWrappingImplementation$Dart, DOMWrapperBase$Dart);
_GeolocationWrappingImplementation$Dart.$Constructor = function(){
  DOMWrapperBase$Dart.$Constructor.call(this);
}
;
_GeolocationWrappingImplementation$Dart.$Initializer = function(){
  DOMWrapperBase$Dart.$Initializer.call(this);
}
;
_GeolocationWrappingImplementation$Dart._GeolocationWrappingImplementation$$Factory = function(){
  var tmp$0 = new _GeolocationWrappingImplementation$Dart;
  tmp$0.$typeInfo = _GeolocationWrappingImplementation$Dart.$lookupRTT();
  _GeolocationWrappingImplementation$Dart.$Initializer.call(tmp$0);
  _GeolocationWrappingImplementation$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
_GeolocationWrappingImplementation$Dart.create__GeolocationWrappingImplementation$member = function(){
  return _GeolocationWrappingImplementation$Dart._GeolocationWrappingImplementation$$Factory();
}
;
_GeolocationWrappingImplementation$Dart.create__GeolocationWrappingImplementation$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _GeolocationWrappingImplementation$Dart.create__GeolocationWrappingImplementation$member();
}
;
function native__GeolocationWrappingImplementation_create__GeolocationWrappingImplementation(){
  return _GeolocationWrappingImplementation$Dart.create__GeolocationWrappingImplementation$member();
}

_GeolocationWrappingImplementation$Dart.create__GeolocationWrappingImplementation$getter = function create__GeolocationWrappingImplementation$getter(){
  return _GeolocationWrappingImplementation$Dart.create__GeolocationWrappingImplementation$named;
}
;
_GeolocationWrappingImplementation$Dart.prototype.clearWatch$member = function(watchId){
  _GeolocationWrappingImplementation$Dart._clearWatch$$member_(this, watchId);
  return;
}
;
_GeolocationWrappingImplementation$Dart.prototype.clearWatch$named = function($n, $o, watchId){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _GeolocationWrappingImplementation$Dart.prototype.clearWatch$member.call(this, watchId);
}
;
_GeolocationWrappingImplementation$Dart.prototype.clearWatch$getter = function clearWatch$getter(){
  return $bind(_GeolocationWrappingImplementation$Dart.prototype.clearWatch$named, this);
}
;
_GeolocationWrappingImplementation$Dart._clearWatch$$member_ = function(receiver, watchId){
  return native__GeolocationWrappingImplementation__clearWatch(receiver, watchId);
}
;
_GeolocationWrappingImplementation$Dart._clearWatch$$named_ = function($n, $o, receiver, watchId){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _GeolocationWrappingImplementation$Dart._clearWatch$$member_(receiver, watchId);
}
;
_GeolocationWrappingImplementation$Dart._clearWatch$$getter_ = function _clearWatch$$getter_(){
  return _GeolocationWrappingImplementation$Dart._clearWatch$$named_;
}
;
_GeolocationWrappingImplementation$Dart.prototype.getCurrentPosition$member = function(successCallback, errorCallback){
  if (errorCallback == null) {
    _GeolocationWrappingImplementation$Dart._getCurrentPosition$$member_(this, successCallback);
    return;
  }
   else {
    _GeolocationWrappingImplementation$Dart._getCurrentPosition_2$$member_(this, successCallback, errorCallback);
    return;
  }
}
;
_GeolocationWrappingImplementation$Dart.prototype.getCurrentPosition$named = function($n, $o, successCallback, errorCallback){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 1:
      errorCallback = $o.errorCallback?(++seen , $o.errorCallback):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _GeolocationWrappingImplementation$Dart.prototype.getCurrentPosition$member.call(this, successCallback, errorCallback);
}
;
_GeolocationWrappingImplementation$Dart.prototype.getCurrentPosition$getter = function getCurrentPosition$getter(){
  return $bind(_GeolocationWrappingImplementation$Dart.prototype.getCurrentPosition$named, this);
}
;
_GeolocationWrappingImplementation$Dart._getCurrentPosition$$member_ = function(receiver, successCallback){
  return native__GeolocationWrappingImplementation__getCurrentPosition(receiver, successCallback);
}
;
_GeolocationWrappingImplementation$Dart._getCurrentPosition$$named_ = function($n, $o, receiver, successCallback){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _GeolocationWrappingImplementation$Dart._getCurrentPosition$$member_(receiver, successCallback);
}
;
_GeolocationWrappingImplementation$Dart._getCurrentPosition$$getter_ = function _getCurrentPosition$$getter_(){
  return _GeolocationWrappingImplementation$Dart._getCurrentPosition$$named_;
}
;
_GeolocationWrappingImplementation$Dart._getCurrentPosition_2$$member_ = function(receiver, successCallback, errorCallback){
  return native__GeolocationWrappingImplementation__getCurrentPosition_2(receiver, successCallback, errorCallback);
}
;
_GeolocationWrappingImplementation$Dart._getCurrentPosition_2$$named_ = function($n, $o, receiver, successCallback, errorCallback){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return _GeolocationWrappingImplementation$Dart._getCurrentPosition_2$$member_(receiver, successCallback, errorCallback);
}
;
_GeolocationWrappingImplementation$Dart._getCurrentPosition_2$$getter_ = function _getCurrentPosition_2$$getter_(){
  return _GeolocationWrappingImplementation$Dart._getCurrentPosition_2$$named_;
}
;
_GeolocationWrappingImplementation$Dart.prototype.watchPosition$member = function(successCallback, errorCallback){
  if (errorCallback == null) {
    return _GeolocationWrappingImplementation$Dart._watchPosition$$member_(this, successCallback);
  }
   else {
    return _GeolocationWrappingImplementation$Dart._watchPosition_2$$member_(this, successCallback, errorCallback);
  }
}
;
_GeolocationWrappingImplementation$Dart.prototype.watchPosition$named = function($n, $o, successCallback, errorCallback){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 1:
      errorCallback = $o.errorCallback?(++seen , $o.errorCallback):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _GeolocationWrappingImplementation$Dart.prototype.watchPosition$member.call(this, successCallback, errorCallback);
}
;
_GeolocationWrappingImplementation$Dart.prototype.watchPosition$getter = function watchPosition$getter(){
  return $bind(_GeolocationWrappingImplementation$Dart.prototype.watchPosition$named, this);
}
;
_GeolocationWrappingImplementation$Dart._watchPosition$$member_ = function(receiver, successCallback){
  return native__GeolocationWrappingImplementation__watchPosition(receiver, successCallback);
}
;
_GeolocationWrappingImplementation$Dart._watchPosition$$named_ = function($n, $o, receiver, successCallback){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _GeolocationWrappingImplementation$Dart._watchPosition$$member_(receiver, successCallback);
}
;
_GeolocationWrappingImplementation$Dart._watchPosition$$getter_ = function _watchPosition$$getter_(){
  return _GeolocationWrappingImplementation$Dart._watchPosition$$named_;
}
;
_GeolocationWrappingImplementation$Dart._watchPosition_2$$member_ = function(receiver, successCallback, errorCallback){
  return native__GeolocationWrappingImplementation__watchPosition_2(receiver, successCallback, errorCallback);
}
;
_GeolocationWrappingImplementation$Dart._watchPosition_2$$named_ = function($n, $o, receiver, successCallback, errorCallback){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return _GeolocationWrappingImplementation$Dart._watchPosition_2$$member_(receiver, successCallback, errorCallback);
}
;
_GeolocationWrappingImplementation$Dart._watchPosition_2$$getter_ = function _watchPosition_2$$getter_(){
  return _GeolocationWrappingImplementation$Dart._watchPosition_2$$named_;
}
;
_GeolocationWrappingImplementation$Dart.prototype.typeName$named = function(){
  return this.typeName$getter().apply(this, arguments);
}
;
_GeolocationWrappingImplementation$Dart.prototype.typeName$getter = function(){
  return 'Geolocation';
}
;
