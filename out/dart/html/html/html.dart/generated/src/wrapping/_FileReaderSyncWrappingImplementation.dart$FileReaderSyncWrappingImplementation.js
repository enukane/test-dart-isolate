function html623afa$FileReaderSyncWrappingImplementation$Dart(){
}

html623afa$FileReaderSyncWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('html623afa$FileReaderSyncWrappingImplementation$Dart'), html623afa$FileReaderSyncWrappingImplementation$Dart.$RTTimplements);
}
;
html623afa$FileReaderSyncWrappingImplementation$Dart.$RTTimplements = function(rtt){
  html623afa$FileReaderSyncWrappingImplementation$Dart.$addTo(rtt);
}
;
html623afa$FileReaderSyncWrappingImplementation$Dart.$addTo = function(target){
  var rtt = html623afa$FileReaderSyncWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  html623afa$DOMWrapperBase$Dart.$addTo(target);
  html623afa$FileReaderSync$Dart.$addTo(target);
}
;
html623afa$FileReaderSyncWrappingImplementation$Dart.prototype.$implements$html623afa$FileReaderSyncWrappingImplementation$Dart = 1;
html623afa$FileReaderSyncWrappingImplementation$Dart.prototype.$implements$html623afa$FileReaderSync$Dart = 1;
html623afa$FileReaderSyncWrappingImplementation$Dart.prototype.$implements$html623afa$DOMWrapperBase$Dart = 1;
html623afa$FileReaderSyncWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(html623afa$FileReaderSyncWrappingImplementation$Dart, html623afa$DOMWrapperBase$Dart);
html623afa$FileReaderSyncWrappingImplementation$Dart._wrap$html623afa$$Constructor_ = function(ptr){
  html623afa$DOMWrapperBase$Dart._wrap$html623afa$$Constructor_.call(this, ptr);
}
;
html623afa$FileReaderSyncWrappingImplementation$Dart._wrap$html623afa$$Initializer_ = function(ptr){
  html623afa$DOMWrapperBase$Dart._wrap$html623afa$$Initializer_.call(this, ptr);
}
;
html623afa$FileReaderSyncWrappingImplementation$Dart.FileReaderSyncWrappingImplementation$_wrap$36$html623afa$$Factory_ = function(ptr){
  var tmp$0 = new html623afa$FileReaderSyncWrappingImplementation$Dart;
  tmp$0.$typeInfo = html623afa$FileReaderSyncWrappingImplementation$Dart.$lookupRTT();
  html623afa$FileReaderSyncWrappingImplementation$Dart._wrap$html623afa$$Initializer_.call(tmp$0, ptr);
  html623afa$FileReaderSyncWrappingImplementation$Dart._wrap$html623afa$$Constructor_.call(tmp$0, ptr);
  return tmp$0;
}
;
html623afa$FileReaderSyncWrappingImplementation$Dart.prototype.readAsArrayBuffer$member = function(blob){
  return html623afa$LevelDom$Dart.wrapArrayBuffer$member(this._ptr$html623afa$$getter_().readAsArrayBuffer$named(1, $noargs, html623afa$LevelDom$Dart.unwrap$member(blob)));
}
;
html623afa$FileReaderSyncWrappingImplementation$Dart.prototype.readAsArrayBuffer$named = function($n, $o, blob){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$FileReaderSyncWrappingImplementation$Dart.prototype.readAsArrayBuffer$member.call(this, blob);
}
;
html623afa$FileReaderSyncWrappingImplementation$Dart.prototype.readAsArrayBuffer$getter = function readAsArrayBuffer$getter(){
  return $bind(html623afa$FileReaderSyncWrappingImplementation$Dart.prototype.readAsArrayBuffer$named, this);
}
;
html623afa$FileReaderSyncWrappingImplementation$Dart.prototype.readAsBinaryString$member = function(blob){
  return this._ptr$html623afa$$getter_().readAsBinaryString$named(1, $noargs, html623afa$LevelDom$Dart.unwrap$member(blob));
}
;
html623afa$FileReaderSyncWrappingImplementation$Dart.prototype.readAsBinaryString$named = function($n, $o, blob){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$FileReaderSyncWrappingImplementation$Dart.prototype.readAsBinaryString$member.call(this, blob);
}
;
html623afa$FileReaderSyncWrappingImplementation$Dart.prototype.readAsBinaryString$getter = function readAsBinaryString$getter(){
  return $bind(html623afa$FileReaderSyncWrappingImplementation$Dart.prototype.readAsBinaryString$named, this);
}
;
html623afa$FileReaderSyncWrappingImplementation$Dart.prototype.readAsDataURL$member = function(blob){
  return this._ptr$html623afa$$getter_().readAsDataURL$named(1, $noargs, html623afa$LevelDom$Dart.unwrap$member(blob));
}
;
html623afa$FileReaderSyncWrappingImplementation$Dart.prototype.readAsDataURL$named = function($n, $o, blob){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$FileReaderSyncWrappingImplementation$Dart.prototype.readAsDataURL$member.call(this, blob);
}
;
html623afa$FileReaderSyncWrappingImplementation$Dart.prototype.readAsDataURL$getter = function readAsDataURL$getter(){
  return $bind(html623afa$FileReaderSyncWrappingImplementation$Dart.prototype.readAsDataURL$named, this);
}
;
html623afa$FileReaderSyncWrappingImplementation$Dart.prototype.readAsText$member = function(blob, encoding){
  if (encoding == null) {
    return this._ptr$html623afa$$getter_().readAsText$named(1, $noargs, html623afa$LevelDom$Dart.unwrap$member(blob));
  }
   else {
    return this._ptr$html623afa$$getter_().readAsText$named(2, $noargs, html623afa$LevelDom$Dart.unwrap$member(blob), encoding);
  }
}
;
html623afa$FileReaderSyncWrappingImplementation$Dart.prototype.readAsText$named = function($n, $o, blob, encoding){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 1:
      encoding = $o.encoding?(++seen , $o.encoding):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return html623afa$FileReaderSyncWrappingImplementation$Dart.prototype.readAsText$member.call(this, blob, encoding);
}
;
html623afa$FileReaderSyncWrappingImplementation$Dart.prototype.readAsText$getter = function readAsText$getter(){
  return $bind(html623afa$FileReaderSyncWrappingImplementation$Dart.prototype.readAsText$named, this);
}
;
