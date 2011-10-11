function _FileEntrySyncWrappingImplementation$Dart(){
}

_FileEntrySyncWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('_FileEntrySyncWrappingImplementation$Dart'), _FileEntrySyncWrappingImplementation$Dart.$RTTimplements);
}
;
_FileEntrySyncWrappingImplementation$Dart.$RTTimplements = function(rtt){
  _FileEntrySyncWrappingImplementation$Dart.$addTo(rtt);
}
;
_FileEntrySyncWrappingImplementation$Dart.$addTo = function(target){
  var rtt = _FileEntrySyncWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  _EntrySyncWrappingImplementation$Dart.$addTo(target);
  FileEntrySync$Dart.$addTo(target);
}
;
_FileEntrySyncWrappingImplementation$Dart.prototype.$implements$_FileEntrySyncWrappingImplementation$Dart = 1;
_FileEntrySyncWrappingImplementation$Dart.prototype.$implements$FileEntrySync$Dart = 1;
_FileEntrySyncWrappingImplementation$Dart.prototype.$implements$EntrySync$Dart = 1;
_FileEntrySyncWrappingImplementation$Dart.prototype.$implements$_EntrySyncWrappingImplementation$Dart = 1;
_FileEntrySyncWrappingImplementation$Dart.prototype.$implements$DOMWrapperBase$Dart = 1;
_FileEntrySyncWrappingImplementation$Dart.prototype.$implements$DOMType$Dart = 1;
_FileEntrySyncWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(_FileEntrySyncWrappingImplementation$Dart, _EntrySyncWrappingImplementation$Dart);
_FileEntrySyncWrappingImplementation$Dart.$Constructor = function(){
  _EntrySyncWrappingImplementation$Dart.$Constructor.call(this);
}
;
_FileEntrySyncWrappingImplementation$Dart.$Initializer = function(){
  _EntrySyncWrappingImplementation$Dart.$Initializer.call(this);
}
;
_FileEntrySyncWrappingImplementation$Dart._FileEntrySyncWrappingImplementation$$Factory = function(){
  var tmp$0 = new _FileEntrySyncWrappingImplementation$Dart;
  tmp$0.$typeInfo = _FileEntrySyncWrappingImplementation$Dart.$lookupRTT();
  _FileEntrySyncWrappingImplementation$Dart.$Initializer.call(tmp$0);
  _FileEntrySyncWrappingImplementation$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
_FileEntrySyncWrappingImplementation$Dart.create__FileEntrySyncWrappingImplementation$member = function(){
  return _FileEntrySyncWrappingImplementation$Dart._FileEntrySyncWrappingImplementation$$Factory();
}
;
_FileEntrySyncWrappingImplementation$Dart.create__FileEntrySyncWrappingImplementation$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _FileEntrySyncWrappingImplementation$Dart.create__FileEntrySyncWrappingImplementation$member();
}
;
function native__FileEntrySyncWrappingImplementation_create__FileEntrySyncWrappingImplementation(){
  return _FileEntrySyncWrappingImplementation$Dart.create__FileEntrySyncWrappingImplementation$member();
}

_FileEntrySyncWrappingImplementation$Dart.create__FileEntrySyncWrappingImplementation$getter = function create__FileEntrySyncWrappingImplementation$getter(){
  return _FileEntrySyncWrappingImplementation$Dart.create__FileEntrySyncWrappingImplementation$named;
}
;
_FileEntrySyncWrappingImplementation$Dart.prototype.createWriter$member = function(){
  return _FileEntrySyncWrappingImplementation$Dart._createWriter$$member_(this);
}
;
_FileEntrySyncWrappingImplementation$Dart.prototype.createWriter$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _FileEntrySyncWrappingImplementation$Dart.prototype.createWriter$member.call(this);
}
;
_FileEntrySyncWrappingImplementation$Dart.prototype.createWriter$getter = function createWriter$getter(){
  return $bind(_FileEntrySyncWrappingImplementation$Dart.prototype.createWriter$named, this);
}
;
_FileEntrySyncWrappingImplementation$Dart._createWriter$$member_ = function(receiver){
  return native__FileEntrySyncWrappingImplementation__createWriter(receiver);
}
;
_FileEntrySyncWrappingImplementation$Dart._createWriter$$named_ = function($n, $o, receiver){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _FileEntrySyncWrappingImplementation$Dart._createWriter$$member_(receiver);
}
;
_FileEntrySyncWrappingImplementation$Dart._createWriter$$getter_ = function _createWriter$$getter_(){
  return _FileEntrySyncWrappingImplementation$Dart._createWriter$$named_;
}
;
_FileEntrySyncWrappingImplementation$Dart.prototype.file$member = function(){
  return _FileEntrySyncWrappingImplementation$Dart._file$$member_(this);
}
;
_FileEntrySyncWrappingImplementation$Dart.prototype.file$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _FileEntrySyncWrappingImplementation$Dart.prototype.file$member.call(this);
}
;
_FileEntrySyncWrappingImplementation$Dart.prototype.file$getter = function file$getter(){
  return $bind(_FileEntrySyncWrappingImplementation$Dart.prototype.file$named, this);
}
;
_FileEntrySyncWrappingImplementation$Dart._file$$member_ = function(receiver){
  return native__FileEntrySyncWrappingImplementation__file(receiver);
}
;
_FileEntrySyncWrappingImplementation$Dart._file$$named_ = function($n, $o, receiver){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _FileEntrySyncWrappingImplementation$Dart._file$$member_(receiver);
}
;
_FileEntrySyncWrappingImplementation$Dart._file$$getter_ = function _file$$getter_(){
  return _FileEntrySyncWrappingImplementation$Dart._file$$named_;
}
;
_FileEntrySyncWrappingImplementation$Dart.prototype.typeName$named = function(){
  return this.typeName$getter().apply(this, arguments);
}
;
_FileEntrySyncWrappingImplementation$Dart.prototype.typeName$getter = function(){
  return 'FileEntrySync';
}
;
