function _FileEntryWrappingImplementation$Dart(){
}

_FileEntryWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('_FileEntryWrappingImplementation$Dart'), _FileEntryWrappingImplementation$Dart.$RTTimplements);
}
;
_FileEntryWrappingImplementation$Dart.$RTTimplements = function(rtt){
  _FileEntryWrappingImplementation$Dart.$addTo(rtt);
}
;
_FileEntryWrappingImplementation$Dart.$addTo = function(target){
  var rtt = _FileEntryWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  _EntryWrappingImplementation$Dart.$addTo(target);
  FileEntry$Dart.$addTo(target);
}
;
_FileEntryWrappingImplementation$Dart.prototype.$implements$_FileEntryWrappingImplementation$Dart = 1;
_FileEntryWrappingImplementation$Dart.prototype.$implements$FileEntry$Dart = 1;
_FileEntryWrappingImplementation$Dart.prototype.$implements$Entry$Dart = 1;
_FileEntryWrappingImplementation$Dart.prototype.$implements$_EntryWrappingImplementation$Dart = 1;
_FileEntryWrappingImplementation$Dart.prototype.$implements$DOMWrapperBase$Dart = 1;
_FileEntryWrappingImplementation$Dart.prototype.$implements$DOMType$Dart = 1;
_FileEntryWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(_FileEntryWrappingImplementation$Dart, _EntryWrappingImplementation$Dart);
_FileEntryWrappingImplementation$Dart.$Constructor = function(){
  _EntryWrappingImplementation$Dart.$Constructor.call(this);
}
;
_FileEntryWrappingImplementation$Dart.$Initializer = function(){
  _EntryWrappingImplementation$Dart.$Initializer.call(this);
}
;
_FileEntryWrappingImplementation$Dart._FileEntryWrappingImplementation$$Factory = function(){
  var tmp$0 = new _FileEntryWrappingImplementation$Dart;
  tmp$0.$typeInfo = _FileEntryWrappingImplementation$Dart.$lookupRTT();
  _FileEntryWrappingImplementation$Dart.$Initializer.call(tmp$0);
  _FileEntryWrappingImplementation$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
_FileEntryWrappingImplementation$Dart.create__FileEntryWrappingImplementation$member = function(){
  return _FileEntryWrappingImplementation$Dart._FileEntryWrappingImplementation$$Factory();
}
;
_FileEntryWrappingImplementation$Dart.create__FileEntryWrappingImplementation$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _FileEntryWrappingImplementation$Dart.create__FileEntryWrappingImplementation$member();
}
;
function native__FileEntryWrappingImplementation_create__FileEntryWrappingImplementation(){
  return _FileEntryWrappingImplementation$Dart.create__FileEntryWrappingImplementation$member();
}

_FileEntryWrappingImplementation$Dart.create__FileEntryWrappingImplementation$getter = function create__FileEntryWrappingImplementation$getter(){
  return _FileEntryWrappingImplementation$Dart.create__FileEntryWrappingImplementation$named;
}
;
_FileEntryWrappingImplementation$Dart.prototype.createWriter$member = function(successCallback, errorCallback){
  if (errorCallback == null) {
    _FileEntryWrappingImplementation$Dart._createWriter$$member_(this, successCallback);
    return;
  }
   else {
    _FileEntryWrappingImplementation$Dart._createWriter_2$$member_(this, successCallback, errorCallback);
    return;
  }
}
;
_FileEntryWrappingImplementation$Dart.prototype.createWriter$named = function($n, $o, successCallback, errorCallback){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 1:
      errorCallback = $o.errorCallback?(++seen , $o.errorCallback):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _FileEntryWrappingImplementation$Dart.prototype.createWriter$member.call(this, successCallback, errorCallback);
}
;
_FileEntryWrappingImplementation$Dart.prototype.createWriter$getter = function createWriter$getter(){
  return $bind(_FileEntryWrappingImplementation$Dart.prototype.createWriter$named, this);
}
;
_FileEntryWrappingImplementation$Dart._createWriter$$member_ = function(receiver, successCallback){
  return native__FileEntryWrappingImplementation__createWriter(receiver, successCallback);
}
;
_FileEntryWrappingImplementation$Dart._createWriter$$named_ = function($n, $o, receiver, successCallback){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _FileEntryWrappingImplementation$Dart._createWriter$$member_(receiver, successCallback);
}
;
_FileEntryWrappingImplementation$Dart._createWriter$$getter_ = function _createWriter$$getter_(){
  return _FileEntryWrappingImplementation$Dart._createWriter$$named_;
}
;
_FileEntryWrappingImplementation$Dart._createWriter_2$$member_ = function(receiver, successCallback, errorCallback){
  return native__FileEntryWrappingImplementation__createWriter_2(receiver, successCallback, errorCallback);
}
;
_FileEntryWrappingImplementation$Dart._createWriter_2$$named_ = function($n, $o, receiver, successCallback, errorCallback){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return _FileEntryWrappingImplementation$Dart._createWriter_2$$member_(receiver, successCallback, errorCallback);
}
;
_FileEntryWrappingImplementation$Dart._createWriter_2$$getter_ = function _createWriter_2$$getter_(){
  return _FileEntryWrappingImplementation$Dart._createWriter_2$$named_;
}
;
_FileEntryWrappingImplementation$Dart.prototype.file$member = function(successCallback, errorCallback){
  if (errorCallback == null) {
    _FileEntryWrappingImplementation$Dart._file$$member_(this, successCallback);
    return;
  }
   else {
    _FileEntryWrappingImplementation$Dart._file_2$$member_(this, successCallback, errorCallback);
    return;
  }
}
;
_FileEntryWrappingImplementation$Dart.prototype.file$named = function($n, $o, successCallback, errorCallback){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 1:
      errorCallback = $o.errorCallback?(++seen , $o.errorCallback):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _FileEntryWrappingImplementation$Dart.prototype.file$member.call(this, successCallback, errorCallback);
}
;
_FileEntryWrappingImplementation$Dart.prototype.file$getter = function file$getter(){
  return $bind(_FileEntryWrappingImplementation$Dart.prototype.file$named, this);
}
;
_FileEntryWrappingImplementation$Dart._file$$member_ = function(receiver, successCallback){
  return native__FileEntryWrappingImplementation__file(receiver, successCallback);
}
;
_FileEntryWrappingImplementation$Dart._file$$named_ = function($n, $o, receiver, successCallback){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _FileEntryWrappingImplementation$Dart._file$$member_(receiver, successCallback);
}
;
_FileEntryWrappingImplementation$Dart._file$$getter_ = function _file$$getter_(){
  return _FileEntryWrappingImplementation$Dart._file$$named_;
}
;
_FileEntryWrappingImplementation$Dart._file_2$$member_ = function(receiver, successCallback, errorCallback){
  return native__FileEntryWrappingImplementation__file_2(receiver, successCallback, errorCallback);
}
;
_FileEntryWrappingImplementation$Dart._file_2$$named_ = function($n, $o, receiver, successCallback, errorCallback){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return _FileEntryWrappingImplementation$Dart._file_2$$member_(receiver, successCallback, errorCallback);
}
;
_FileEntryWrappingImplementation$Dart._file_2$$getter_ = function _file_2$$getter_(){
  return _FileEntryWrappingImplementation$Dart._file_2$$named_;
}
;
_FileEntryWrappingImplementation$Dart.prototype.typeName$named = function(){
  return this.typeName$getter().apply(this, arguments);
}
;
_FileEntryWrappingImplementation$Dart.prototype.typeName$getter = function(){
  return 'FileEntry';
}
;
