function _FileReaderSyncWrappingImplementation$Dart(){
}

_FileReaderSyncWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('_FileReaderSyncWrappingImplementation$Dart'), _FileReaderSyncWrappingImplementation$Dart.$RTTimplements);
}
;
_FileReaderSyncWrappingImplementation$Dart.$RTTimplements = function(rtt){
  _FileReaderSyncWrappingImplementation$Dart.$addTo(rtt);
}
;
_FileReaderSyncWrappingImplementation$Dart.$addTo = function(target){
  var rtt = _FileReaderSyncWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  DOMWrapperBase$Dart.$addTo(target);
  FileReaderSync$Dart.$addTo(target);
}
;
_FileReaderSyncWrappingImplementation$Dart.prototype.$implements$_FileReaderSyncWrappingImplementation$Dart = 1;
_FileReaderSyncWrappingImplementation$Dart.prototype.$implements$FileReaderSync$Dart = 1;
_FileReaderSyncWrappingImplementation$Dart.prototype.$implements$DOMWrapperBase$Dart = 1;
_FileReaderSyncWrappingImplementation$Dart.prototype.$implements$DOMType$Dart = 1;
_FileReaderSyncWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(_FileReaderSyncWrappingImplementation$Dart, DOMWrapperBase$Dart);
_FileReaderSyncWrappingImplementation$Dart.$Constructor = function(){
  DOMWrapperBase$Dart.$Constructor.call(this);
}
;
_FileReaderSyncWrappingImplementation$Dart.$Initializer = function(){
  DOMWrapperBase$Dart.$Initializer.call(this);
}
;
_FileReaderSyncWrappingImplementation$Dart._FileReaderSyncWrappingImplementation$$Factory = function(){
  var tmp$0 = new _FileReaderSyncWrappingImplementation$Dart;
  tmp$0.$typeInfo = _FileReaderSyncWrappingImplementation$Dart.$lookupRTT();
  _FileReaderSyncWrappingImplementation$Dart.$Initializer.call(tmp$0);
  _FileReaderSyncWrappingImplementation$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
_FileReaderSyncWrappingImplementation$Dart.create__FileReaderSyncWrappingImplementation$member = function(){
  return _FileReaderSyncWrappingImplementation$Dart._FileReaderSyncWrappingImplementation$$Factory();
}
;
_FileReaderSyncWrappingImplementation$Dart.create__FileReaderSyncWrappingImplementation$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _FileReaderSyncWrappingImplementation$Dart.create__FileReaderSyncWrappingImplementation$member();
}
;
function native__FileReaderSyncWrappingImplementation_create__FileReaderSyncWrappingImplementation(){
  return _FileReaderSyncWrappingImplementation$Dart.create__FileReaderSyncWrappingImplementation$member();
}

_FileReaderSyncWrappingImplementation$Dart.create__FileReaderSyncWrappingImplementation$getter = function create__FileReaderSyncWrappingImplementation$getter(){
  return _FileReaderSyncWrappingImplementation$Dart.create__FileReaderSyncWrappingImplementation$named;
}
;
_FileReaderSyncWrappingImplementation$Dart.prototype.readAsArrayBuffer$member = function(blob){
  return _FileReaderSyncWrappingImplementation$Dart._readAsArrayBuffer$$member_(this, blob);
}
;
_FileReaderSyncWrappingImplementation$Dart.prototype.readAsArrayBuffer$named = function($n, $o, blob){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _FileReaderSyncWrappingImplementation$Dart.prototype.readAsArrayBuffer$member.call(this, blob);
}
;
_FileReaderSyncWrappingImplementation$Dart.prototype.readAsArrayBuffer$getter = function readAsArrayBuffer$getter(){
  return $bind(_FileReaderSyncWrappingImplementation$Dart.prototype.readAsArrayBuffer$named, this);
}
;
_FileReaderSyncWrappingImplementation$Dart._readAsArrayBuffer$$member_ = function(receiver, blob){
  return native__FileReaderSyncWrappingImplementation__readAsArrayBuffer(receiver, blob);
}
;
_FileReaderSyncWrappingImplementation$Dart._readAsArrayBuffer$$named_ = function($n, $o, receiver, blob){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _FileReaderSyncWrappingImplementation$Dart._readAsArrayBuffer$$member_(receiver, blob);
}
;
_FileReaderSyncWrappingImplementation$Dart._readAsArrayBuffer$$getter_ = function _readAsArrayBuffer$$getter_(){
  return _FileReaderSyncWrappingImplementation$Dart._readAsArrayBuffer$$named_;
}
;
_FileReaderSyncWrappingImplementation$Dart.prototype.readAsBinaryString$member = function(blob){
  return _FileReaderSyncWrappingImplementation$Dart._readAsBinaryString$$member_(this, blob);
}
;
_FileReaderSyncWrappingImplementation$Dart.prototype.readAsBinaryString$named = function($n, $o, blob){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _FileReaderSyncWrappingImplementation$Dart.prototype.readAsBinaryString$member.call(this, blob);
}
;
_FileReaderSyncWrappingImplementation$Dart.prototype.readAsBinaryString$getter = function readAsBinaryString$getter(){
  return $bind(_FileReaderSyncWrappingImplementation$Dart.prototype.readAsBinaryString$named, this);
}
;
_FileReaderSyncWrappingImplementation$Dart._readAsBinaryString$$member_ = function(receiver, blob){
  return native__FileReaderSyncWrappingImplementation__readAsBinaryString(receiver, blob);
}
;
_FileReaderSyncWrappingImplementation$Dart._readAsBinaryString$$named_ = function($n, $o, receiver, blob){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _FileReaderSyncWrappingImplementation$Dart._readAsBinaryString$$member_(receiver, blob);
}
;
_FileReaderSyncWrappingImplementation$Dart._readAsBinaryString$$getter_ = function _readAsBinaryString$$getter_(){
  return _FileReaderSyncWrappingImplementation$Dart._readAsBinaryString$$named_;
}
;
_FileReaderSyncWrappingImplementation$Dart.prototype.readAsDataURL$member = function(blob){
  return _FileReaderSyncWrappingImplementation$Dart._readAsDataURL$$member_(this, blob);
}
;
_FileReaderSyncWrappingImplementation$Dart.prototype.readAsDataURL$named = function($n, $o, blob){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _FileReaderSyncWrappingImplementation$Dart.prototype.readAsDataURL$member.call(this, blob);
}
;
_FileReaderSyncWrappingImplementation$Dart.prototype.readAsDataURL$getter = function readAsDataURL$getter(){
  return $bind(_FileReaderSyncWrappingImplementation$Dart.prototype.readAsDataURL$named, this);
}
;
_FileReaderSyncWrappingImplementation$Dart._readAsDataURL$$member_ = function(receiver, blob){
  return native__FileReaderSyncWrappingImplementation__readAsDataURL(receiver, blob);
}
;
_FileReaderSyncWrappingImplementation$Dart._readAsDataURL$$named_ = function($n, $o, receiver, blob){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _FileReaderSyncWrappingImplementation$Dart._readAsDataURL$$member_(receiver, blob);
}
;
_FileReaderSyncWrappingImplementation$Dart._readAsDataURL$$getter_ = function _readAsDataURL$$getter_(){
  return _FileReaderSyncWrappingImplementation$Dart._readAsDataURL$$named_;
}
;
_FileReaderSyncWrappingImplementation$Dart.prototype.readAsText$member = function(blob, encoding){
  if (encoding == null) {
    return _FileReaderSyncWrappingImplementation$Dart._readAsText$$member_(this, blob);
  }
   else {
    return _FileReaderSyncWrappingImplementation$Dart._readAsText_2$$member_(this, blob, encoding);
  }
}
;
_FileReaderSyncWrappingImplementation$Dart.prototype.readAsText$named = function($n, $o, blob, encoding){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 1:
      encoding = $o.encoding?(++seen , $o.encoding):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _FileReaderSyncWrappingImplementation$Dart.prototype.readAsText$member.call(this, blob, encoding);
}
;
_FileReaderSyncWrappingImplementation$Dart.prototype.readAsText$getter = function readAsText$getter(){
  return $bind(_FileReaderSyncWrappingImplementation$Dart.prototype.readAsText$named, this);
}
;
_FileReaderSyncWrappingImplementation$Dart._readAsText$$member_ = function(receiver, blob){
  return native__FileReaderSyncWrappingImplementation__readAsText(receiver, blob);
}
;
_FileReaderSyncWrappingImplementation$Dart._readAsText$$named_ = function($n, $o, receiver, blob){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _FileReaderSyncWrappingImplementation$Dart._readAsText$$member_(receiver, blob);
}
;
_FileReaderSyncWrappingImplementation$Dart._readAsText$$getter_ = function _readAsText$$getter_(){
  return _FileReaderSyncWrappingImplementation$Dart._readAsText$$named_;
}
;
_FileReaderSyncWrappingImplementation$Dart._readAsText_2$$member_ = function(receiver, blob, encoding){
  return native__FileReaderSyncWrappingImplementation__readAsText_2(receiver, blob, encoding);
}
;
_FileReaderSyncWrappingImplementation$Dart._readAsText_2$$named_ = function($n, $o, receiver, blob, encoding){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return _FileReaderSyncWrappingImplementation$Dart._readAsText_2$$member_(receiver, blob, encoding);
}
;
_FileReaderSyncWrappingImplementation$Dart._readAsText_2$$getter_ = function _readAsText_2$$getter_(){
  return _FileReaderSyncWrappingImplementation$Dart._readAsText_2$$named_;
}
;
_FileReaderSyncWrappingImplementation$Dart.prototype.typeName$named = function(){
  return this.typeName$getter().apply(this, arguments);
}
;
_FileReaderSyncWrappingImplementation$Dart.prototype.typeName$getter = function(){
  return 'FileReaderSync';
}
;
