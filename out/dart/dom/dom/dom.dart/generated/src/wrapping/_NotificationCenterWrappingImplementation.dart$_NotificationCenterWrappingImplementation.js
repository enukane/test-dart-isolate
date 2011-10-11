function _NotificationCenterWrappingImplementation$Dart(){
}

_NotificationCenterWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('_NotificationCenterWrappingImplementation$Dart'), _NotificationCenterWrappingImplementation$Dart.$RTTimplements);
}
;
_NotificationCenterWrappingImplementation$Dart.$RTTimplements = function(rtt){
  _NotificationCenterWrappingImplementation$Dart.$addTo(rtt);
}
;
_NotificationCenterWrappingImplementation$Dart.$addTo = function(target){
  var rtt = _NotificationCenterWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  DOMWrapperBase$Dart.$addTo(target);
  NotificationCenter$Dart.$addTo(target);
}
;
_NotificationCenterWrappingImplementation$Dart.prototype.$implements$_NotificationCenterWrappingImplementation$Dart = 1;
_NotificationCenterWrappingImplementation$Dart.prototype.$implements$NotificationCenter$Dart = 1;
_NotificationCenterWrappingImplementation$Dart.prototype.$implements$DOMWrapperBase$Dart = 1;
_NotificationCenterWrappingImplementation$Dart.prototype.$implements$DOMType$Dart = 1;
_NotificationCenterWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(_NotificationCenterWrappingImplementation$Dart, DOMWrapperBase$Dart);
_NotificationCenterWrappingImplementation$Dart.$Constructor = function(){
  DOMWrapperBase$Dart.$Constructor.call(this);
}
;
_NotificationCenterWrappingImplementation$Dart.$Initializer = function(){
  DOMWrapperBase$Dart.$Initializer.call(this);
}
;
_NotificationCenterWrappingImplementation$Dart._NotificationCenterWrappingImplementation$$Factory = function(){
  var tmp$0 = new _NotificationCenterWrappingImplementation$Dart;
  tmp$0.$typeInfo = _NotificationCenterWrappingImplementation$Dart.$lookupRTT();
  _NotificationCenterWrappingImplementation$Dart.$Initializer.call(tmp$0);
  _NotificationCenterWrappingImplementation$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
_NotificationCenterWrappingImplementation$Dart.create__NotificationCenterWrappingImplementation$member = function(){
  return _NotificationCenterWrappingImplementation$Dart._NotificationCenterWrappingImplementation$$Factory();
}
;
_NotificationCenterWrappingImplementation$Dart.create__NotificationCenterWrappingImplementation$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _NotificationCenterWrappingImplementation$Dart.create__NotificationCenterWrappingImplementation$member();
}
;
function native__NotificationCenterWrappingImplementation_create__NotificationCenterWrappingImplementation(){
  return _NotificationCenterWrappingImplementation$Dart.create__NotificationCenterWrappingImplementation$member();
}

_NotificationCenterWrappingImplementation$Dart.create__NotificationCenterWrappingImplementation$getter = function create__NotificationCenterWrappingImplementation$getter(){
  return _NotificationCenterWrappingImplementation$Dart.create__NotificationCenterWrappingImplementation$named;
}
;
_NotificationCenterWrappingImplementation$Dart.prototype.checkPermission$member = function(){
  return _NotificationCenterWrappingImplementation$Dart._checkPermission$$member_(this);
}
;
_NotificationCenterWrappingImplementation$Dart.prototype.checkPermission$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _NotificationCenterWrappingImplementation$Dart.prototype.checkPermission$member.call(this);
}
;
_NotificationCenterWrappingImplementation$Dart.prototype.checkPermission$getter = function checkPermission$getter(){
  return $bind(_NotificationCenterWrappingImplementation$Dart.prototype.checkPermission$named, this);
}
;
_NotificationCenterWrappingImplementation$Dart._checkPermission$$member_ = function(receiver){
  return native__NotificationCenterWrappingImplementation__checkPermission(receiver);
}
;
_NotificationCenterWrappingImplementation$Dart._checkPermission$$named_ = function($n, $o, receiver){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _NotificationCenterWrappingImplementation$Dart._checkPermission$$member_(receiver);
}
;
_NotificationCenterWrappingImplementation$Dart._checkPermission$$getter_ = function _checkPermission$$getter_(){
  return _NotificationCenterWrappingImplementation$Dart._checkPermission$$named_;
}
;
_NotificationCenterWrappingImplementation$Dart.prototype.createHTMLNotification$member = function(url){
  return _NotificationCenterWrappingImplementation$Dart._createHTMLNotification$$member_(this, url);
}
;
_NotificationCenterWrappingImplementation$Dart.prototype.createHTMLNotification$named = function($n, $o, url){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _NotificationCenterWrappingImplementation$Dart.prototype.createHTMLNotification$member.call(this, url);
}
;
_NotificationCenterWrappingImplementation$Dart.prototype.createHTMLNotification$getter = function createHTMLNotification$getter(){
  return $bind(_NotificationCenterWrappingImplementation$Dart.prototype.createHTMLNotification$named, this);
}
;
_NotificationCenterWrappingImplementation$Dart._createHTMLNotification$$member_ = function(receiver, url){
  return native__NotificationCenterWrappingImplementation__createHTMLNotification(receiver, url);
}
;
_NotificationCenterWrappingImplementation$Dart._createHTMLNotification$$named_ = function($n, $o, receiver, url){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _NotificationCenterWrappingImplementation$Dart._createHTMLNotification$$member_(receiver, url);
}
;
_NotificationCenterWrappingImplementation$Dart._createHTMLNotification$$getter_ = function _createHTMLNotification$$getter_(){
  return _NotificationCenterWrappingImplementation$Dart._createHTMLNotification$$named_;
}
;
_NotificationCenterWrappingImplementation$Dart.prototype.createNotification$member = function(iconUrl, title, body){
  return _NotificationCenterWrappingImplementation$Dart._createNotification$$member_(this, iconUrl, title, body);
}
;
_NotificationCenterWrappingImplementation$Dart.prototype.createNotification$named = function($n, $o, iconUrl, title, body){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return _NotificationCenterWrappingImplementation$Dart.prototype.createNotification$member.call(this, iconUrl, title, body);
}
;
_NotificationCenterWrappingImplementation$Dart.prototype.createNotification$getter = function createNotification$getter(){
  return $bind(_NotificationCenterWrappingImplementation$Dart.prototype.createNotification$named, this);
}
;
_NotificationCenterWrappingImplementation$Dart._createNotification$$member_ = function(receiver, iconUrl, title, body){
  return native__NotificationCenterWrappingImplementation__createNotification(receiver, iconUrl, title, body);
}
;
_NotificationCenterWrappingImplementation$Dart._createNotification$$named_ = function($n, $o, receiver, iconUrl, title, body){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 4)
    $nsme();
  return _NotificationCenterWrappingImplementation$Dart._createNotification$$member_(receiver, iconUrl, title, body);
}
;
_NotificationCenterWrappingImplementation$Dart._createNotification$$getter_ = function _createNotification$$getter_(){
  return _NotificationCenterWrappingImplementation$Dart._createNotification$$named_;
}
;
_NotificationCenterWrappingImplementation$Dart.prototype.requestPermission$member = function(callback){
  _NotificationCenterWrappingImplementation$Dart._requestPermission$$member_(this, callback);
  return;
}
;
_NotificationCenterWrappingImplementation$Dart.prototype.requestPermission$named = function($n, $o, callback){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _NotificationCenterWrappingImplementation$Dart.prototype.requestPermission$member.call(this, callback);
}
;
_NotificationCenterWrappingImplementation$Dart.prototype.requestPermission$getter = function requestPermission$getter(){
  return $bind(_NotificationCenterWrappingImplementation$Dart.prototype.requestPermission$named, this);
}
;
_NotificationCenterWrappingImplementation$Dart._requestPermission$$member_ = function(receiver, callback){
  return native__NotificationCenterWrappingImplementation__requestPermission(receiver, callback);
}
;
_NotificationCenterWrappingImplementation$Dart._requestPermission$$named_ = function($n, $o, receiver, callback){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _NotificationCenterWrappingImplementation$Dart._requestPermission$$member_(receiver, callback);
}
;
_NotificationCenterWrappingImplementation$Dart._requestPermission$$getter_ = function _requestPermission$$getter_(){
  return _NotificationCenterWrappingImplementation$Dart._requestPermission$$named_;
}
;
_NotificationCenterWrappingImplementation$Dart.prototype.typeName$named = function(){
  return this.typeName$getter().apply(this, arguments);
}
;
_NotificationCenterWrappingImplementation$Dart.prototype.typeName$getter = function(){
  return 'NotificationCenter';
}
;
