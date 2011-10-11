function html623afa$FileEntryWrappingImplementation$Dart(){
}

html623afa$FileEntryWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('html623afa$FileEntryWrappingImplementation$Dart'), html623afa$FileEntryWrappingImplementation$Dart.$RTTimplements);
}
;
html623afa$FileEntryWrappingImplementation$Dart.$RTTimplements = function(rtt){
  html623afa$FileEntryWrappingImplementation$Dart.$addTo(rtt);
}
;
html623afa$FileEntryWrappingImplementation$Dart.$addTo = function(target){
  var rtt = html623afa$FileEntryWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  html623afa$EntryWrappingImplementation$Dart.$addTo(target);
  html623afa$FileEntry$Dart.$addTo(target);
}
;
html623afa$FileEntryWrappingImplementation$Dart.prototype.$implements$html623afa$FileEntryWrappingImplementation$Dart = 1;
html623afa$FileEntryWrappingImplementation$Dart.prototype.$implements$html623afa$FileEntry$Dart = 1;
html623afa$FileEntryWrappingImplementation$Dart.prototype.$implements$html623afa$Entry$Dart = 1;
html623afa$FileEntryWrappingImplementation$Dart.prototype.$implements$html623afa$EntryWrappingImplementation$Dart = 1;
html623afa$FileEntryWrappingImplementation$Dart.prototype.$implements$html623afa$DOMWrapperBase$Dart = 1;
html623afa$FileEntryWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(html623afa$FileEntryWrappingImplementation$Dart, html623afa$EntryWrappingImplementation$Dart);
html623afa$FileEntryWrappingImplementation$Dart._wrap$html623afa$$Constructor_ = function(ptr){
  html623afa$EntryWrappingImplementation$Dart._wrap$html623afa$$Constructor_.call(this, ptr);
}
;
html623afa$FileEntryWrappingImplementation$Dart._wrap$html623afa$$Initializer_ = function(ptr){
  html623afa$EntryWrappingImplementation$Dart._wrap$html623afa$$Initializer_.call(this, ptr);
}
;
html623afa$FileEntryWrappingImplementation$Dart.FileEntryWrappingImplementation$_wrap$31$html623afa$$Factory_ = function(ptr){
  var tmp$0 = new html623afa$FileEntryWrappingImplementation$Dart;
  tmp$0.$typeInfo = html623afa$FileEntryWrappingImplementation$Dart.$lookupRTT();
  html623afa$FileEntryWrappingImplementation$Dart._wrap$html623afa$$Initializer_.call(tmp$0, ptr);
  html623afa$FileEntryWrappingImplementation$Dart._wrap$html623afa$$Constructor_.call(tmp$0, ptr);
  return tmp$0;
}
;
html623afa$FileEntryWrappingImplementation$Dart.prototype.createWriter$member = function(successCallback, errorCallback){
  if (errorCallback == null) {
    this._ptr$html623afa$$getter_().createWriter$named(1, $noargs, html623afa$LevelDom$Dart.unwrap$member(successCallback));
    return;
  }
   else {
    this._ptr$html623afa$$getter_().createWriter$named(2, $noargs, html623afa$LevelDom$Dart.unwrap$member(successCallback), html623afa$LevelDom$Dart.unwrap$member(errorCallback));
    return;
  }
}
;
html623afa$FileEntryWrappingImplementation$Dart.prototype.createWriter$named = function($n, $o, successCallback, errorCallback){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 1:
      errorCallback = $o.errorCallback?(++seen , $o.errorCallback):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return html623afa$FileEntryWrappingImplementation$Dart.prototype.createWriter$member.call(this, successCallback, errorCallback);
}
;
html623afa$FileEntryWrappingImplementation$Dart.prototype.createWriter$getter = function createWriter$getter(){
  return $bind(html623afa$FileEntryWrappingImplementation$Dart.prototype.createWriter$named, this);
}
;
html623afa$FileEntryWrappingImplementation$Dart.prototype.file$member = function(successCallback, errorCallback){
  if (errorCallback == null) {
    this._ptr$html623afa$$getter_().file$named(1, $noargs, html623afa$LevelDom$Dart.unwrap$member(successCallback));
    return;
  }
   else {
    this._ptr$html623afa$$getter_().file$named(2, $noargs, html623afa$LevelDom$Dart.unwrap$member(successCallback), html623afa$LevelDom$Dart.unwrap$member(errorCallback));
    return;
  }
}
;
html623afa$FileEntryWrappingImplementation$Dart.prototype.file$named = function($n, $o, successCallback, errorCallback){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 1:
      errorCallback = $o.errorCallback?(++seen , $o.errorCallback):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return html623afa$FileEntryWrappingImplementation$Dart.prototype.file$member.call(this, successCallback, errorCallback);
}
;
html623afa$FileEntryWrappingImplementation$Dart.prototype.file$getter = function file$getter(){
  return $bind(html623afa$FileEntryWrappingImplementation$Dart.prototype.file$named, this);
}
;
