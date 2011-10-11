function html623afa$NotificationCenterWrappingImplementation$Dart(){
}

html623afa$NotificationCenterWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('html623afa$NotificationCenterWrappingImplementation$Dart'), html623afa$NotificationCenterWrappingImplementation$Dart.$RTTimplements);
}
;
html623afa$NotificationCenterWrappingImplementation$Dart.$RTTimplements = function(rtt){
  html623afa$NotificationCenterWrappingImplementation$Dart.$addTo(rtt);
}
;
html623afa$NotificationCenterWrappingImplementation$Dart.$addTo = function(target){
  var rtt = html623afa$NotificationCenterWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  html623afa$DOMWrapperBase$Dart.$addTo(target);
  html623afa$NotificationCenter$Dart.$addTo(target);
}
;
html623afa$NotificationCenterWrappingImplementation$Dart.prototype.$implements$html623afa$NotificationCenterWrappingImplementation$Dart = 1;
html623afa$NotificationCenterWrappingImplementation$Dart.prototype.$implements$html623afa$NotificationCenter$Dart = 1;
html623afa$NotificationCenterWrappingImplementation$Dart.prototype.$implements$html623afa$DOMWrapperBase$Dart = 1;
html623afa$NotificationCenterWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(html623afa$NotificationCenterWrappingImplementation$Dart, html623afa$DOMWrapperBase$Dart);
html623afa$NotificationCenterWrappingImplementation$Dart._wrap$html623afa$$Constructor_ = function(ptr){
  html623afa$DOMWrapperBase$Dart._wrap$html623afa$$Constructor_.call(this, ptr);
}
;
html623afa$NotificationCenterWrappingImplementation$Dart._wrap$html623afa$$Initializer_ = function(ptr){
  html623afa$DOMWrapperBase$Dart._wrap$html623afa$$Initializer_.call(this, ptr);
}
;
html623afa$NotificationCenterWrappingImplementation$Dart.NotificationCenterWrappingImplementation$_wrap$40$html623afa$$Factory_ = function(ptr){
  var tmp$0 = new html623afa$NotificationCenterWrappingImplementation$Dart;
  tmp$0.$typeInfo = html623afa$NotificationCenterWrappingImplementation$Dart.$lookupRTT();
  html623afa$NotificationCenterWrappingImplementation$Dart._wrap$html623afa$$Initializer_.call(tmp$0, ptr);
  html623afa$NotificationCenterWrappingImplementation$Dart._wrap$html623afa$$Constructor_.call(tmp$0, ptr);
  return tmp$0;
}
;
html623afa$NotificationCenterWrappingImplementation$Dart.prototype.checkPermission$member = function(){
  return this._ptr$html623afa$$getter_().checkPermission$named(0, $noargs);
}
;
html623afa$NotificationCenterWrappingImplementation$Dart.prototype.checkPermission$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return html623afa$NotificationCenterWrappingImplementation$Dart.prototype.checkPermission$member.call(this);
}
;
html623afa$NotificationCenterWrappingImplementation$Dart.prototype.checkPermission$getter = function checkPermission$getter(){
  return $bind(html623afa$NotificationCenterWrappingImplementation$Dart.prototype.checkPermission$named, this);
}
;
html623afa$NotificationCenterWrappingImplementation$Dart.prototype.createHTMLNotification$member = function(url){
  return html623afa$LevelDom$Dart.wrapNotification$member(this._ptr$html623afa$$getter_().createHTMLNotification$named(1, $noargs, url));
}
;
html623afa$NotificationCenterWrappingImplementation$Dart.prototype.createHTMLNotification$named = function($n, $o, url){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$NotificationCenterWrappingImplementation$Dart.prototype.createHTMLNotification$member.call(this, url);
}
;
html623afa$NotificationCenterWrappingImplementation$Dart.prototype.createHTMLNotification$getter = function createHTMLNotification$getter(){
  return $bind(html623afa$NotificationCenterWrappingImplementation$Dart.prototype.createHTMLNotification$named, this);
}
;
html623afa$NotificationCenterWrappingImplementation$Dart.prototype.createNotification$member = function(iconUrl, title, body){
  return html623afa$LevelDom$Dart.wrapNotification$member(this._ptr$html623afa$$getter_().createNotification$named(3, $noargs, iconUrl, title, body));
}
;
html623afa$NotificationCenterWrappingImplementation$Dart.prototype.createNotification$named = function($n, $o, iconUrl, title, body){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return html623afa$NotificationCenterWrappingImplementation$Dart.prototype.createNotification$member.call(this, iconUrl, title, body);
}
;
html623afa$NotificationCenterWrappingImplementation$Dart.prototype.createNotification$getter = function createNotification$getter(){
  return $bind(html623afa$NotificationCenterWrappingImplementation$Dart.prototype.createNotification$named, this);
}
;
html623afa$NotificationCenterWrappingImplementation$Dart.prototype.requestPermission$member = function(callback){
  this._ptr$html623afa$$getter_().requestPermission$named(1, $noargs, html623afa$LevelDom$Dart.unwrap$member(callback));
  return;
}
;
html623afa$NotificationCenterWrappingImplementation$Dart.prototype.requestPermission$named = function($n, $o, callback){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$NotificationCenterWrappingImplementation$Dart.prototype.requestPermission$member.call(this, callback);
}
;
html623afa$NotificationCenterWrappingImplementation$Dart.prototype.requestPermission$getter = function requestPermission$getter(){
  return $bind(html623afa$NotificationCenterWrappingImplementation$Dart.prototype.requestPermission$named, this);
}
;
