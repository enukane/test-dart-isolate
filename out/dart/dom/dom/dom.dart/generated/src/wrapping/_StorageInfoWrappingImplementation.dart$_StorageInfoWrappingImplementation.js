function _StorageInfoWrappingImplementation$Dart(){
}

_StorageInfoWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('_StorageInfoWrappingImplementation$Dart'), _StorageInfoWrappingImplementation$Dart.$RTTimplements);
}
;
_StorageInfoWrappingImplementation$Dart.$RTTimplements = function(rtt){
  _StorageInfoWrappingImplementation$Dart.$addTo(rtt);
}
;
_StorageInfoWrappingImplementation$Dart.$addTo = function(target){
  var rtt = _StorageInfoWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  DOMWrapperBase$Dart.$addTo(target);
  StorageInfo$Dart.$addTo(target);
}
;
_StorageInfoWrappingImplementation$Dart.prototype.$implements$_StorageInfoWrappingImplementation$Dart = 1;
_StorageInfoWrappingImplementation$Dart.prototype.$implements$StorageInfo$Dart = 1;
_StorageInfoWrappingImplementation$Dart.prototype.$implements$DOMWrapperBase$Dart = 1;
_StorageInfoWrappingImplementation$Dart.prototype.$implements$DOMType$Dart = 1;
_StorageInfoWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(_StorageInfoWrappingImplementation$Dart, DOMWrapperBase$Dart);
_StorageInfoWrappingImplementation$Dart.$Constructor = function(){
  DOMWrapperBase$Dart.$Constructor.call(this);
}
;
_StorageInfoWrappingImplementation$Dart.$Initializer = function(){
  DOMWrapperBase$Dart.$Initializer.call(this);
}
;
_StorageInfoWrappingImplementation$Dart._StorageInfoWrappingImplementation$$Factory = function(){
  var tmp$0 = new _StorageInfoWrappingImplementation$Dart;
  tmp$0.$typeInfo = _StorageInfoWrappingImplementation$Dart.$lookupRTT();
  _StorageInfoWrappingImplementation$Dart.$Initializer.call(tmp$0);
  _StorageInfoWrappingImplementation$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
_StorageInfoWrappingImplementation$Dart.create__StorageInfoWrappingImplementation$member = function(){
  return _StorageInfoWrappingImplementation$Dart._StorageInfoWrappingImplementation$$Factory();
}
;
_StorageInfoWrappingImplementation$Dart.create__StorageInfoWrappingImplementation$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _StorageInfoWrappingImplementation$Dart.create__StorageInfoWrappingImplementation$member();
}
;
function native__StorageInfoWrappingImplementation_create__StorageInfoWrappingImplementation(){
  return _StorageInfoWrappingImplementation$Dart.create__StorageInfoWrappingImplementation$member();
}

_StorageInfoWrappingImplementation$Dart.create__StorageInfoWrappingImplementation$getter = function create__StorageInfoWrappingImplementation$getter(){
  return _StorageInfoWrappingImplementation$Dart.create__StorageInfoWrappingImplementation$named;
}
;
_StorageInfoWrappingImplementation$Dart.prototype.queryUsageAndQuota$member = function(storageType, usageCallback, errorCallback){
  if (usageCallback == null) {
    if (errorCallback == null) {
      _StorageInfoWrappingImplementation$Dart._queryUsageAndQuota$$member_(this, storageType);
      return;
    }
  }
   else {
    if (errorCallback == null) {
      _StorageInfoWrappingImplementation$Dart._queryUsageAndQuota_2$$member_(this, storageType, usageCallback);
      return;
    }
     else {
      _StorageInfoWrappingImplementation$Dart._queryUsageAndQuota_3$$member_(this, storageType, usageCallback, errorCallback);
      return;
    }
  }
  $Dart$ThrowException('Incorrect number or type of arguments');
}
;
_StorageInfoWrappingImplementation$Dart.prototype.queryUsageAndQuota$named = function($n, $o, storageType, usageCallback, errorCallback){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 1:
      usageCallback = $o.usageCallback?(++seen , $o.usageCallback):(++def , $Dart$Null);
    case 2:
      errorCallback = $o.errorCallback?(++seen , $o.errorCallback):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return _StorageInfoWrappingImplementation$Dart.prototype.queryUsageAndQuota$member.call(this, storageType, usageCallback, errorCallback);
}
;
_StorageInfoWrappingImplementation$Dart.prototype.queryUsageAndQuota$getter = function queryUsageAndQuota$getter(){
  return $bind(_StorageInfoWrappingImplementation$Dart.prototype.queryUsageAndQuota$named, this);
}
;
_StorageInfoWrappingImplementation$Dart._queryUsageAndQuota$$member_ = function(receiver, storageType){
  return native__StorageInfoWrappingImplementation__queryUsageAndQuota(receiver, storageType);
}
;
_StorageInfoWrappingImplementation$Dart._queryUsageAndQuota$$named_ = function($n, $o, receiver, storageType){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _StorageInfoWrappingImplementation$Dart._queryUsageAndQuota$$member_(receiver, storageType);
}
;
_StorageInfoWrappingImplementation$Dart._queryUsageAndQuota$$getter_ = function _queryUsageAndQuota$$getter_(){
  return _StorageInfoWrappingImplementation$Dart._queryUsageAndQuota$$named_;
}
;
_StorageInfoWrappingImplementation$Dart._queryUsageAndQuota_2$$member_ = function(receiver, storageType, usageCallback){
  return native__StorageInfoWrappingImplementation__queryUsageAndQuota_2(receiver, storageType, usageCallback);
}
;
_StorageInfoWrappingImplementation$Dart._queryUsageAndQuota_2$$named_ = function($n, $o, receiver, storageType, usageCallback){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return _StorageInfoWrappingImplementation$Dart._queryUsageAndQuota_2$$member_(receiver, storageType, usageCallback);
}
;
_StorageInfoWrappingImplementation$Dart._queryUsageAndQuota_2$$getter_ = function _queryUsageAndQuota_2$$getter_(){
  return _StorageInfoWrappingImplementation$Dart._queryUsageAndQuota_2$$named_;
}
;
_StorageInfoWrappingImplementation$Dart._queryUsageAndQuota_3$$member_ = function(receiver, storageType, usageCallback, errorCallback){
  return native__StorageInfoWrappingImplementation__queryUsageAndQuota_3(receiver, storageType, usageCallback, errorCallback);
}
;
_StorageInfoWrappingImplementation$Dart._queryUsageAndQuota_3$$named_ = function($n, $o, receiver, storageType, usageCallback, errorCallback){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 4)
    $nsme();
  return _StorageInfoWrappingImplementation$Dart._queryUsageAndQuota_3$$member_(receiver, storageType, usageCallback, errorCallback);
}
;
_StorageInfoWrappingImplementation$Dart._queryUsageAndQuota_3$$getter_ = function _queryUsageAndQuota_3$$getter_(){
  return _StorageInfoWrappingImplementation$Dart._queryUsageAndQuota_3$$named_;
}
;
_StorageInfoWrappingImplementation$Dart.prototype.requestQuota$member = function(storageType, newQuotaInBytes, quotaCallback, errorCallback){
  if (quotaCallback == null) {
    if (errorCallback == null) {
      _StorageInfoWrappingImplementation$Dart._requestQuota$$member_(this, storageType, newQuotaInBytes);
      return;
    }
  }
   else {
    if (errorCallback == null) {
      _StorageInfoWrappingImplementation$Dart._requestQuota_2$$member_(this, storageType, newQuotaInBytes, quotaCallback);
      return;
    }
     else {
      _StorageInfoWrappingImplementation$Dart._requestQuota_3$$member_(this, storageType, newQuotaInBytes, quotaCallback, errorCallback);
      return;
    }
  }
  $Dart$ThrowException('Incorrect number or type of arguments');
}
;
_StorageInfoWrappingImplementation$Dart.prototype.requestQuota$named = function($n, $o, storageType, newQuotaInBytes, quotaCallback, errorCallback){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 2:
      quotaCallback = $o.quotaCallback?(++seen , $o.quotaCallback):(++def , $Dart$Null);
    case 3:
      errorCallback = $o.errorCallback?(++seen , $o.errorCallback):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 4)
    $nsme();
  return _StorageInfoWrappingImplementation$Dart.prototype.requestQuota$member.call(this, storageType, newQuotaInBytes, quotaCallback, errorCallback);
}
;
_StorageInfoWrappingImplementation$Dart.prototype.requestQuota$getter = function requestQuota$getter(){
  return $bind(_StorageInfoWrappingImplementation$Dart.prototype.requestQuota$named, this);
}
;
_StorageInfoWrappingImplementation$Dart._requestQuota$$member_ = function(receiver, storageType, newQuotaInBytes){
  return native__StorageInfoWrappingImplementation__requestQuota(receiver, storageType, newQuotaInBytes);
}
;
_StorageInfoWrappingImplementation$Dart._requestQuota$$named_ = function($n, $o, receiver, storageType, newQuotaInBytes){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return _StorageInfoWrappingImplementation$Dart._requestQuota$$member_(receiver, storageType, newQuotaInBytes);
}
;
_StorageInfoWrappingImplementation$Dart._requestQuota$$getter_ = function _requestQuota$$getter_(){
  return _StorageInfoWrappingImplementation$Dart._requestQuota$$named_;
}
;
_StorageInfoWrappingImplementation$Dart._requestQuota_2$$member_ = function(receiver, storageType, newQuotaInBytes, quotaCallback){
  return native__StorageInfoWrappingImplementation__requestQuota_2(receiver, storageType, newQuotaInBytes, quotaCallback);
}
;
_StorageInfoWrappingImplementation$Dart._requestQuota_2$$named_ = function($n, $o, receiver, storageType, newQuotaInBytes, quotaCallback){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 4)
    $nsme();
  return _StorageInfoWrappingImplementation$Dart._requestQuota_2$$member_(receiver, storageType, newQuotaInBytes, quotaCallback);
}
;
_StorageInfoWrappingImplementation$Dart._requestQuota_2$$getter_ = function _requestQuota_2$$getter_(){
  return _StorageInfoWrappingImplementation$Dart._requestQuota_2$$named_;
}
;
_StorageInfoWrappingImplementation$Dart._requestQuota_3$$member_ = function(receiver, storageType, newQuotaInBytes, quotaCallback, errorCallback){
  return native__StorageInfoWrappingImplementation__requestQuota_3(receiver, storageType, newQuotaInBytes, quotaCallback, errorCallback);
}
;
_StorageInfoWrappingImplementation$Dart._requestQuota_3$$named_ = function($n, $o, receiver, storageType, newQuotaInBytes, quotaCallback, errorCallback){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 5)
    $nsme();
  return _StorageInfoWrappingImplementation$Dart._requestQuota_3$$member_(receiver, storageType, newQuotaInBytes, quotaCallback, errorCallback);
}
;
_StorageInfoWrappingImplementation$Dart._requestQuota_3$$getter_ = function _requestQuota_3$$getter_(){
  return _StorageInfoWrappingImplementation$Dart._requestQuota_3$$named_;
}
;
_StorageInfoWrappingImplementation$Dart.prototype.typeName$named = function(){
  return this.typeName$getter().apply(this, arguments);
}
;
_StorageInfoWrappingImplementation$Dart.prototype.typeName$getter = function(){
  return 'StorageInfo';
}
;
