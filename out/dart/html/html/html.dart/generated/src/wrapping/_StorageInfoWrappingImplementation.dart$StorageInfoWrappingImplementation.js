function html623afa$StorageInfoWrappingImplementation$Dart(){
}

html623afa$StorageInfoWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('html623afa$StorageInfoWrappingImplementation$Dart'), html623afa$StorageInfoWrappingImplementation$Dart.$RTTimplements);
}
;
html623afa$StorageInfoWrappingImplementation$Dart.$RTTimplements = function(rtt){
  html623afa$StorageInfoWrappingImplementation$Dart.$addTo(rtt);
}
;
html623afa$StorageInfoWrappingImplementation$Dart.$addTo = function(target){
  var rtt = html623afa$StorageInfoWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  html623afa$DOMWrapperBase$Dart.$addTo(target);
  html623afa$StorageInfo$Dart.$addTo(target);
}
;
html623afa$StorageInfoWrappingImplementation$Dart.prototype.$implements$html623afa$StorageInfoWrappingImplementation$Dart = 1;
html623afa$StorageInfoWrappingImplementation$Dart.prototype.$implements$html623afa$StorageInfo$Dart = 1;
html623afa$StorageInfoWrappingImplementation$Dart.prototype.$implements$html623afa$DOMWrapperBase$Dart = 1;
html623afa$StorageInfoWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(html623afa$StorageInfoWrappingImplementation$Dart, html623afa$DOMWrapperBase$Dart);
html623afa$StorageInfoWrappingImplementation$Dart._wrap$html623afa$$Constructor_ = function(ptr){
  html623afa$DOMWrapperBase$Dart._wrap$html623afa$$Constructor_.call(this, ptr);
}
;
html623afa$StorageInfoWrappingImplementation$Dart._wrap$html623afa$$Initializer_ = function(ptr){
  html623afa$DOMWrapperBase$Dart._wrap$html623afa$$Initializer_.call(this, ptr);
}
;
html623afa$StorageInfoWrappingImplementation$Dart.StorageInfoWrappingImplementation$_wrap$33$html623afa$$Factory_ = function(ptr){
  var tmp$0 = new html623afa$StorageInfoWrappingImplementation$Dart;
  tmp$0.$typeInfo = html623afa$StorageInfoWrappingImplementation$Dart.$lookupRTT();
  html623afa$StorageInfoWrappingImplementation$Dart._wrap$html623afa$$Initializer_.call(tmp$0, ptr);
  html623afa$StorageInfoWrappingImplementation$Dart._wrap$html623afa$$Constructor_.call(tmp$0, ptr);
  return tmp$0;
}
;
html623afa$StorageInfoWrappingImplementation$Dart.prototype.queryUsageAndQuota$member = function(storageType, usageCallback, errorCallback){
  if (usageCallback == null) {
    if (errorCallback == null) {
      this._ptr$html623afa$$getter_().queryUsageAndQuota$named(1, $noargs, storageType);
      return;
    }
  }
   else {
    if (errorCallback == null) {
      this._ptr$html623afa$$getter_().queryUsageAndQuota$named(2, $noargs, storageType, html623afa$LevelDom$Dart.unwrap$member(usageCallback));
      return;
    }
     else {
      this._ptr$html623afa$$getter_().queryUsageAndQuota$named(3, $noargs, storageType, html623afa$LevelDom$Dart.unwrap$member(usageCallback), html623afa$LevelDom$Dart.unwrap$member(errorCallback));
      return;
    }
  }
  $Dart$ThrowException('Incorrect number or type of arguments');
}
;
html623afa$StorageInfoWrappingImplementation$Dart.prototype.queryUsageAndQuota$named = function($n, $o, storageType, usageCallback, errorCallback){
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
  return html623afa$StorageInfoWrappingImplementation$Dart.prototype.queryUsageAndQuota$member.call(this, storageType, usageCallback, errorCallback);
}
;
html623afa$StorageInfoWrappingImplementation$Dart.prototype.queryUsageAndQuota$getter = function queryUsageAndQuota$getter(){
  return $bind(html623afa$StorageInfoWrappingImplementation$Dart.prototype.queryUsageAndQuota$named, this);
}
;
html623afa$StorageInfoWrappingImplementation$Dart.prototype.requestQuota$member = function(storageType, newQuotaInBytes, quotaCallback, errorCallback){
  if (quotaCallback == null) {
    if (errorCallback == null) {
      this._ptr$html623afa$$getter_().requestQuota$named(2, $noargs, storageType, newQuotaInBytes);
      return;
    }
  }
   else {
    if (errorCallback == null) {
      this._ptr$html623afa$$getter_().requestQuota$named(3, $noargs, storageType, newQuotaInBytes, html623afa$LevelDom$Dart.unwrap$member(quotaCallback));
      return;
    }
     else {
      this._ptr$html623afa$$getter_().requestQuota$named(4, $noargs, storageType, newQuotaInBytes, html623afa$LevelDom$Dart.unwrap$member(quotaCallback), html623afa$LevelDom$Dart.unwrap$member(errorCallback));
      return;
    }
  }
  $Dart$ThrowException('Incorrect number or type of arguments');
}
;
html623afa$StorageInfoWrappingImplementation$Dart.prototype.requestQuota$named = function($n, $o, storageType, newQuotaInBytes, quotaCallback, errorCallback){
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
  return html623afa$StorageInfoWrappingImplementation$Dart.prototype.requestQuota$member.call(this, storageType, newQuotaInBytes, quotaCallback, errorCallback);
}
;
html623afa$StorageInfoWrappingImplementation$Dart.prototype.requestQuota$getter = function requestQuota$getter(){
  return $bind(html623afa$StorageInfoWrappingImplementation$Dart.prototype.requestQuota$named, this);
}
;
