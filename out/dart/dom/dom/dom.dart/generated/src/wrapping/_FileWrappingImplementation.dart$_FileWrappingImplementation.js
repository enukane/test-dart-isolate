function _FileWrappingImplementation$Dart(){
}

_FileWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('_FileWrappingImplementation$Dart'), _FileWrappingImplementation$Dart.$RTTimplements);
}
;
_FileWrappingImplementation$Dart.$RTTimplements = function(rtt){
  _FileWrappingImplementation$Dart.$addTo(rtt);
}
;
_FileWrappingImplementation$Dart.$addTo = function(target){
  var rtt = _FileWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  _BlobWrappingImplementation$Dart.$addTo(target);
  File$Dart.$addTo(target);
}
;
_FileWrappingImplementation$Dart.prototype.$implements$_FileWrappingImplementation$Dart = 1;
_FileWrappingImplementation$Dart.prototype.$implements$File$Dart = 1;
_FileWrappingImplementation$Dart.prototype.$implements$Blob$Dart = 1;
_FileWrappingImplementation$Dart.prototype.$implements$_BlobWrappingImplementation$Dart = 1;
_FileWrappingImplementation$Dart.prototype.$implements$DOMWrapperBase$Dart = 1;
_FileWrappingImplementation$Dart.prototype.$implements$DOMType$Dart = 1;
_FileWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(_FileWrappingImplementation$Dart, _BlobWrappingImplementation$Dart);
_FileWrappingImplementation$Dart.$Constructor = function(){
  _BlobWrappingImplementation$Dart.$Constructor.call(this);
}
;
_FileWrappingImplementation$Dart.$Initializer = function(){
  _BlobWrappingImplementation$Dart.$Initializer.call(this);
}
;
_FileWrappingImplementation$Dart._FileWrappingImplementation$$Factory = function(){
  var tmp$0 = new _FileWrappingImplementation$Dart;
  tmp$0.$typeInfo = _FileWrappingImplementation$Dart.$lookupRTT();
  _FileWrappingImplementation$Dart.$Initializer.call(tmp$0);
  _FileWrappingImplementation$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
_FileWrappingImplementation$Dart.create__FileWrappingImplementation$member = function(){
  return _FileWrappingImplementation$Dart._FileWrappingImplementation$$Factory();
}
;
_FileWrappingImplementation$Dart.create__FileWrappingImplementation$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _FileWrappingImplementation$Dart.create__FileWrappingImplementation$member();
}
;
function native__FileWrappingImplementation_create__FileWrappingImplementation(){
  return _FileWrappingImplementation$Dart.create__FileWrappingImplementation$member();
}

_FileWrappingImplementation$Dart.create__FileWrappingImplementation$getter = function create__FileWrappingImplementation$getter(){
  return _FileWrappingImplementation$Dart.create__FileWrappingImplementation$named;
}
;
_FileWrappingImplementation$Dart.prototype.fileName$named = function(){
  return this.fileName$getter().apply(this, arguments);
}
;
_FileWrappingImplementation$Dart.prototype.fileName$getter = function(){
  return _FileWrappingImplementation$Dart._get__File_fileName$$member_(this);
}
;
_FileWrappingImplementation$Dart._get__File_fileName$$member_ = function(_this){
  return native__FileWrappingImplementation__get__File_fileName(_this);
}
;
_FileWrappingImplementation$Dart._get__File_fileName$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _FileWrappingImplementation$Dart._get__File_fileName$$member_(_this);
}
;
_FileWrappingImplementation$Dart._get__File_fileName$$getter_ = function _get__File_fileName$$getter_(){
  return _FileWrappingImplementation$Dart._get__File_fileName$$named_;
}
;
_FileWrappingImplementation$Dart.prototype.fileSize$named = function(){
  return this.fileSize$getter().apply(this, arguments);
}
;
_FileWrappingImplementation$Dart.prototype.fileSize$getter = function(){
  return _FileWrappingImplementation$Dart._get__File_fileSize$$member_(this);
}
;
_FileWrappingImplementation$Dart._get__File_fileSize$$member_ = function(_this){
  return native__FileWrappingImplementation__get__File_fileSize(_this);
}
;
_FileWrappingImplementation$Dart._get__File_fileSize$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _FileWrappingImplementation$Dart._get__File_fileSize$$member_(_this);
}
;
_FileWrappingImplementation$Dart._get__File_fileSize$$getter_ = function _get__File_fileSize$$getter_(){
  return _FileWrappingImplementation$Dart._get__File_fileSize$$named_;
}
;
_FileWrappingImplementation$Dart.prototype.lastModifiedDate$named = function(){
  return this.lastModifiedDate$getter().apply(this, arguments);
}
;
_FileWrappingImplementation$Dart.prototype.lastModifiedDate$getter = function(){
  return _FileWrappingImplementation$Dart._get__File_lastModifiedDate$$member_(this);
}
;
_FileWrappingImplementation$Dart._get__File_lastModifiedDate$$member_ = function(_this){
  return native__FileWrappingImplementation__get__File_lastModifiedDate(_this);
}
;
_FileWrappingImplementation$Dart._get__File_lastModifiedDate$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _FileWrappingImplementation$Dart._get__File_lastModifiedDate$$member_(_this);
}
;
_FileWrappingImplementation$Dart._get__File_lastModifiedDate$$getter_ = function _get__File_lastModifiedDate$$getter_(){
  return _FileWrappingImplementation$Dart._get__File_lastModifiedDate$$named_;
}
;
_FileWrappingImplementation$Dart.prototype.name$named = function(){
  return this.name$getter().apply(this, arguments);
}
;
_FileWrappingImplementation$Dart.prototype.name$getter = function(){
  return _FileWrappingImplementation$Dart._get__File_name$$member_(this);
}
;
_FileWrappingImplementation$Dart._get__File_name$$member_ = function(_this){
  return native__FileWrappingImplementation__get__File_name(_this);
}
;
_FileWrappingImplementation$Dart._get__File_name$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _FileWrappingImplementation$Dart._get__File_name$$member_(_this);
}
;
_FileWrappingImplementation$Dart._get__File_name$$getter_ = function _get__File_name$$getter_(){
  return _FileWrappingImplementation$Dart._get__File_name$$named_;
}
;
_FileWrappingImplementation$Dart.prototype.typeName$named = function(){
  return this.typeName$getter().apply(this, arguments);
}
;
_FileWrappingImplementation$Dart.prototype.typeName$getter = function(){
  return 'File';
}
;
