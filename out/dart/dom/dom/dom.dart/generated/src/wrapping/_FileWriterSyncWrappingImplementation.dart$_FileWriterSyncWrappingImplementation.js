function _FileWriterSyncWrappingImplementation$Dart(){
}

_FileWriterSyncWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('_FileWriterSyncWrappingImplementation$Dart'), _FileWriterSyncWrappingImplementation$Dart.$RTTimplements);
}
;
_FileWriterSyncWrappingImplementation$Dart.$RTTimplements = function(rtt){
  _FileWriterSyncWrappingImplementation$Dart.$addTo(rtt);
}
;
_FileWriterSyncWrappingImplementation$Dart.$addTo = function(target){
  var rtt = _FileWriterSyncWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  DOMWrapperBase$Dart.$addTo(target);
  FileWriterSync$Dart.$addTo(target);
}
;
_FileWriterSyncWrappingImplementation$Dart.prototype.$implements$_FileWriterSyncWrappingImplementation$Dart = 1;
_FileWriterSyncWrappingImplementation$Dart.prototype.$implements$FileWriterSync$Dart = 1;
_FileWriterSyncWrappingImplementation$Dart.prototype.$implements$DOMWrapperBase$Dart = 1;
_FileWriterSyncWrappingImplementation$Dart.prototype.$implements$DOMType$Dart = 1;
_FileWriterSyncWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(_FileWriterSyncWrappingImplementation$Dart, DOMWrapperBase$Dart);
_FileWriterSyncWrappingImplementation$Dart.$Constructor = function(){
  DOMWrapperBase$Dart.$Constructor.call(this);
}
;
_FileWriterSyncWrappingImplementation$Dart.$Initializer = function(){
  DOMWrapperBase$Dart.$Initializer.call(this);
}
;
_FileWriterSyncWrappingImplementation$Dart._FileWriterSyncWrappingImplementation$$Factory = function(){
  var tmp$0 = new _FileWriterSyncWrappingImplementation$Dart;
  tmp$0.$typeInfo = _FileWriterSyncWrappingImplementation$Dart.$lookupRTT();
  _FileWriterSyncWrappingImplementation$Dart.$Initializer.call(tmp$0);
  _FileWriterSyncWrappingImplementation$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
_FileWriterSyncWrappingImplementation$Dart.create__FileWriterSyncWrappingImplementation$member = function(){
  return _FileWriterSyncWrappingImplementation$Dart._FileWriterSyncWrappingImplementation$$Factory();
}
;
_FileWriterSyncWrappingImplementation$Dart.create__FileWriterSyncWrappingImplementation$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _FileWriterSyncWrappingImplementation$Dart.create__FileWriterSyncWrappingImplementation$member();
}
;
function native__FileWriterSyncWrappingImplementation_create__FileWriterSyncWrappingImplementation(){
  return _FileWriterSyncWrappingImplementation$Dart.create__FileWriterSyncWrappingImplementation$member();
}

_FileWriterSyncWrappingImplementation$Dart.create__FileWriterSyncWrappingImplementation$getter = function create__FileWriterSyncWrappingImplementation$getter(){
  return _FileWriterSyncWrappingImplementation$Dart.create__FileWriterSyncWrappingImplementation$named;
}
;
_FileWriterSyncWrappingImplementation$Dart.prototype.length$named = function(){
  return this.length$getter().apply(this, arguments);
}
;
_FileWriterSyncWrappingImplementation$Dart.prototype.length$getter = function(){
  return _FileWriterSyncWrappingImplementation$Dart._get__FileWriterSync_length$$member_(this);
}
;
_FileWriterSyncWrappingImplementation$Dart._get__FileWriterSync_length$$member_ = function(_this){
  return native__FileWriterSyncWrappingImplementation__get__FileWriterSync_length(_this);
}
;
_FileWriterSyncWrappingImplementation$Dart._get__FileWriterSync_length$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _FileWriterSyncWrappingImplementation$Dart._get__FileWriterSync_length$$member_(_this);
}
;
_FileWriterSyncWrappingImplementation$Dart._get__FileWriterSync_length$$getter_ = function _get__FileWriterSync_length$$getter_(){
  return _FileWriterSyncWrappingImplementation$Dart._get__FileWriterSync_length$$named_;
}
;
_FileWriterSyncWrappingImplementation$Dart.prototype.position$named = function(){
  return this.position$getter().apply(this, arguments);
}
;
_FileWriterSyncWrappingImplementation$Dart.prototype.position$getter = function(){
  return _FileWriterSyncWrappingImplementation$Dart._get__FileWriterSync_position$$member_(this);
}
;
_FileWriterSyncWrappingImplementation$Dart._get__FileWriterSync_position$$member_ = function(_this){
  return native__FileWriterSyncWrappingImplementation__get__FileWriterSync_position(_this);
}
;
_FileWriterSyncWrappingImplementation$Dart._get__FileWriterSync_position$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _FileWriterSyncWrappingImplementation$Dart._get__FileWriterSync_position$$member_(_this);
}
;
_FileWriterSyncWrappingImplementation$Dart._get__FileWriterSync_position$$getter_ = function _get__FileWriterSync_position$$getter_(){
  return _FileWriterSyncWrappingImplementation$Dart._get__FileWriterSync_position$$named_;
}
;
_FileWriterSyncWrappingImplementation$Dart.prototype.seek$member = function(position){
  _FileWriterSyncWrappingImplementation$Dart._seek$$member_(this, position);
  return;
}
;
_FileWriterSyncWrappingImplementation$Dart.prototype.seek$named = function($n, $o, position){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _FileWriterSyncWrappingImplementation$Dart.prototype.seek$member.call(this, position);
}
;
_FileWriterSyncWrappingImplementation$Dart.prototype.seek$getter = function seek$getter(){
  return $bind(_FileWriterSyncWrappingImplementation$Dart.prototype.seek$named, this);
}
;
_FileWriterSyncWrappingImplementation$Dart._seek$$member_ = function(receiver, position){
  return native__FileWriterSyncWrappingImplementation__seek(receiver, position);
}
;
_FileWriterSyncWrappingImplementation$Dart._seek$$named_ = function($n, $o, receiver, position){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _FileWriterSyncWrappingImplementation$Dart._seek$$member_(receiver, position);
}
;
_FileWriterSyncWrappingImplementation$Dart._seek$$getter_ = function _seek$$getter_(){
  return _FileWriterSyncWrappingImplementation$Dart._seek$$named_;
}
;
_FileWriterSyncWrappingImplementation$Dart.prototype.truncate$member = function(size){
  _FileWriterSyncWrappingImplementation$Dart._truncate$$member_(this, size);
  return;
}
;
_FileWriterSyncWrappingImplementation$Dart.prototype.truncate$named = function($n, $o, size){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _FileWriterSyncWrappingImplementation$Dart.prototype.truncate$member.call(this, size);
}
;
_FileWriterSyncWrappingImplementation$Dart.prototype.truncate$getter = function truncate$getter(){
  return $bind(_FileWriterSyncWrappingImplementation$Dart.prototype.truncate$named, this);
}
;
_FileWriterSyncWrappingImplementation$Dart._truncate$$member_ = function(receiver, size){
  return native__FileWriterSyncWrappingImplementation__truncate(receiver, size);
}
;
_FileWriterSyncWrappingImplementation$Dart._truncate$$named_ = function($n, $o, receiver, size){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _FileWriterSyncWrappingImplementation$Dart._truncate$$member_(receiver, size);
}
;
_FileWriterSyncWrappingImplementation$Dart._truncate$$getter_ = function _truncate$$getter_(){
  return _FileWriterSyncWrappingImplementation$Dart._truncate$$named_;
}
;
_FileWriterSyncWrappingImplementation$Dart.prototype.write$member = function(data){
  _FileWriterSyncWrappingImplementation$Dart._write$$member_(this, data);
  return;
}
;
_FileWriterSyncWrappingImplementation$Dart.prototype.write$named = function($n, $o, data){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _FileWriterSyncWrappingImplementation$Dart.prototype.write$member.call(this, data);
}
;
_FileWriterSyncWrappingImplementation$Dart.prototype.write$getter = function write$getter(){
  return $bind(_FileWriterSyncWrappingImplementation$Dart.prototype.write$named, this);
}
;
_FileWriterSyncWrappingImplementation$Dart._write$$member_ = function(receiver, data){
  return native__FileWriterSyncWrappingImplementation__write(receiver, data);
}
;
_FileWriterSyncWrappingImplementation$Dart._write$$named_ = function($n, $o, receiver, data){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _FileWriterSyncWrappingImplementation$Dart._write$$member_(receiver, data);
}
;
_FileWriterSyncWrappingImplementation$Dart._write$$getter_ = function _write$$getter_(){
  return _FileWriterSyncWrappingImplementation$Dart._write$$named_;
}
;
_FileWriterSyncWrappingImplementation$Dart.prototype.typeName$named = function(){
  return this.typeName$getter().apply(this, arguments);
}
;
_FileWriterSyncWrappingImplementation$Dart.prototype.typeName$getter = function(){
  return 'FileWriterSync';
}
;
