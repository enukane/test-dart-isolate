function html623afa$GeolocationWrappingImplementation$Dart(){
}

html623afa$GeolocationWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('html623afa$GeolocationWrappingImplementation$Dart'), html623afa$GeolocationWrappingImplementation$Dart.$RTTimplements);
}
;
html623afa$GeolocationWrappingImplementation$Dart.$RTTimplements = function(rtt){
  html623afa$GeolocationWrappingImplementation$Dart.$addTo(rtt);
}
;
html623afa$GeolocationWrappingImplementation$Dart.$addTo = function(target){
  var rtt = html623afa$GeolocationWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  html623afa$DOMWrapperBase$Dart.$addTo(target);
  html623afa$Geolocation$Dart.$addTo(target);
}
;
html623afa$GeolocationWrappingImplementation$Dart.prototype.$implements$html623afa$GeolocationWrappingImplementation$Dart = 1;
html623afa$GeolocationWrappingImplementation$Dart.prototype.$implements$html623afa$Geolocation$Dart = 1;
html623afa$GeolocationWrappingImplementation$Dart.prototype.$implements$html623afa$DOMWrapperBase$Dart = 1;
html623afa$GeolocationWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(html623afa$GeolocationWrappingImplementation$Dart, html623afa$DOMWrapperBase$Dart);
html623afa$GeolocationWrappingImplementation$Dart._wrap$html623afa$$Constructor_ = function(ptr){
  html623afa$DOMWrapperBase$Dart._wrap$html623afa$$Constructor_.call(this, ptr);
}
;
html623afa$GeolocationWrappingImplementation$Dart._wrap$html623afa$$Initializer_ = function(ptr){
  html623afa$DOMWrapperBase$Dart._wrap$html623afa$$Initializer_.call(this, ptr);
}
;
html623afa$GeolocationWrappingImplementation$Dart.GeolocationWrappingImplementation$_wrap$33$html623afa$$Factory_ = function(ptr){
  var tmp$0 = new html623afa$GeolocationWrappingImplementation$Dart;
  tmp$0.$typeInfo = html623afa$GeolocationWrappingImplementation$Dart.$lookupRTT();
  html623afa$GeolocationWrappingImplementation$Dart._wrap$html623afa$$Initializer_.call(tmp$0, ptr);
  html623afa$GeolocationWrappingImplementation$Dart._wrap$html623afa$$Constructor_.call(tmp$0, ptr);
  return tmp$0;
}
;
html623afa$GeolocationWrappingImplementation$Dart.prototype.clearWatch$member = function(watchId){
  this._ptr$html623afa$$getter_().clearWatch$named(1, $noargs, watchId);
  return;
}
;
html623afa$GeolocationWrappingImplementation$Dart.prototype.clearWatch$named = function($n, $o, watchId){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$GeolocationWrappingImplementation$Dart.prototype.clearWatch$member.call(this, watchId);
}
;
html623afa$GeolocationWrappingImplementation$Dart.prototype.clearWatch$getter = function clearWatch$getter(){
  return $bind(html623afa$GeolocationWrappingImplementation$Dart.prototype.clearWatch$named, this);
}
;
html623afa$GeolocationWrappingImplementation$Dart.prototype.getCurrentPosition$member = function(successCallback, errorCallback){
  if (errorCallback == null) {
    this._ptr$html623afa$$getter_().getCurrentPosition$named(1, $noargs, html623afa$LevelDom$Dart.unwrap$member(successCallback));
    return;
  }
   else {
    this._ptr$html623afa$$getter_().getCurrentPosition$named(2, $noargs, html623afa$LevelDom$Dart.unwrap$member(successCallback), html623afa$LevelDom$Dart.unwrap$member(errorCallback));
    return;
  }
}
;
html623afa$GeolocationWrappingImplementation$Dart.prototype.getCurrentPosition$named = function($n, $o, successCallback, errorCallback){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 1:
      errorCallback = $o.errorCallback?(++seen , $o.errorCallback):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return html623afa$GeolocationWrappingImplementation$Dart.prototype.getCurrentPosition$member.call(this, successCallback, errorCallback);
}
;
html623afa$GeolocationWrappingImplementation$Dart.prototype.getCurrentPosition$getter = function getCurrentPosition$getter(){
  return $bind(html623afa$GeolocationWrappingImplementation$Dart.prototype.getCurrentPosition$named, this);
}
;
html623afa$GeolocationWrappingImplementation$Dart.prototype.watchPosition$member = function(successCallback, errorCallback){
  if (errorCallback == null) {
    return this._ptr$html623afa$$getter_().watchPosition$named(1, $noargs, html623afa$LevelDom$Dart.unwrap$member(successCallback));
  }
   else {
    return this._ptr$html623afa$$getter_().watchPosition$named(2, $noargs, html623afa$LevelDom$Dart.unwrap$member(successCallback), html623afa$LevelDom$Dart.unwrap$member(errorCallback));
  }
}
;
html623afa$GeolocationWrappingImplementation$Dart.prototype.watchPosition$named = function($n, $o, successCallback, errorCallback){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 1:
      errorCallback = $o.errorCallback?(++seen , $o.errorCallback):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return html623afa$GeolocationWrappingImplementation$Dart.prototype.watchPosition$member.call(this, successCallback, errorCallback);
}
;
html623afa$GeolocationWrappingImplementation$Dart.prototype.watchPosition$getter = function watchPosition$getter(){
  return $bind(html623afa$GeolocationWrappingImplementation$Dart.prototype.watchPosition$named, this);
}
;
