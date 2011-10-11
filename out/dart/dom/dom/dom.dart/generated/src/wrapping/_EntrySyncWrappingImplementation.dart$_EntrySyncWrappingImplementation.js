function _EntrySyncWrappingImplementation$Dart(){
}

_EntrySyncWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('_EntrySyncWrappingImplementation$Dart'), _EntrySyncWrappingImplementation$Dart.$RTTimplements);
}
;
_EntrySyncWrappingImplementation$Dart.$RTTimplements = function(rtt){
  _EntrySyncWrappingImplementation$Dart.$addTo(rtt);
}
;
_EntrySyncWrappingImplementation$Dart.$addTo = function(target){
  var rtt = _EntrySyncWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  DOMWrapperBase$Dart.$addTo(target);
  EntrySync$Dart.$addTo(target);
}
;
_EntrySyncWrappingImplementation$Dart.prototype.$implements$_EntrySyncWrappingImplementation$Dart = 1;
_EntrySyncWrappingImplementation$Dart.prototype.$implements$EntrySync$Dart = 1;
_EntrySyncWrappingImplementation$Dart.prototype.$implements$DOMWrapperBase$Dart = 1;
_EntrySyncWrappingImplementation$Dart.prototype.$implements$DOMType$Dart = 1;
_EntrySyncWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(_EntrySyncWrappingImplementation$Dart, DOMWrapperBase$Dart);
_EntrySyncWrappingImplementation$Dart.$Constructor = function(){
  DOMWrapperBase$Dart.$Constructor.call(this);
}
;
_EntrySyncWrappingImplementation$Dart.$Initializer = function(){
  DOMWrapperBase$Dart.$Initializer.call(this);
}
;
_EntrySyncWrappingImplementation$Dart._EntrySyncWrappingImplementation$$Factory = function(){
  var tmp$0 = new _EntrySyncWrappingImplementation$Dart;
  tmp$0.$typeInfo = _EntrySyncWrappingImplementation$Dart.$lookupRTT();
  _EntrySyncWrappingImplementation$Dart.$Initializer.call(tmp$0);
  _EntrySyncWrappingImplementation$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
_EntrySyncWrappingImplementation$Dart.create__EntrySyncWrappingImplementation$member = function(){
  return _EntrySyncWrappingImplementation$Dart._EntrySyncWrappingImplementation$$Factory();
}
;
_EntrySyncWrappingImplementation$Dart.create__EntrySyncWrappingImplementation$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _EntrySyncWrappingImplementation$Dart.create__EntrySyncWrappingImplementation$member();
}
;
function native__EntrySyncWrappingImplementation_create__EntrySyncWrappingImplementation(){
  return _EntrySyncWrappingImplementation$Dart.create__EntrySyncWrappingImplementation$member();
}

_EntrySyncWrappingImplementation$Dart.create__EntrySyncWrappingImplementation$getter = function create__EntrySyncWrappingImplementation$getter(){
  return _EntrySyncWrappingImplementation$Dart.create__EntrySyncWrappingImplementation$named;
}
;
_EntrySyncWrappingImplementation$Dart.prototype.filesystem$named = function(){
  return this.filesystem$getter().apply(this, arguments);
}
;
_EntrySyncWrappingImplementation$Dart.prototype.filesystem$getter = function(){
  return _EntrySyncWrappingImplementation$Dart._get__EntrySync_filesystem$$member_(this);
}
;
_EntrySyncWrappingImplementation$Dart._get__EntrySync_filesystem$$member_ = function(_this){
  return native__EntrySyncWrappingImplementation__get__EntrySync_filesystem(_this);
}
;
_EntrySyncWrappingImplementation$Dart._get__EntrySync_filesystem$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _EntrySyncWrappingImplementation$Dart._get__EntrySync_filesystem$$member_(_this);
}
;
_EntrySyncWrappingImplementation$Dart._get__EntrySync_filesystem$$getter_ = function _get__EntrySync_filesystem$$getter_(){
  return _EntrySyncWrappingImplementation$Dart._get__EntrySync_filesystem$$named_;
}
;
_EntrySyncWrappingImplementation$Dart.prototype.fullPath$named = function(){
  return this.fullPath$getter().apply(this, arguments);
}
;
_EntrySyncWrappingImplementation$Dart.prototype.fullPath$getter = function(){
  return _EntrySyncWrappingImplementation$Dart._get__EntrySync_fullPath$$member_(this);
}
;
_EntrySyncWrappingImplementation$Dart._get__EntrySync_fullPath$$member_ = function(_this){
  return native__EntrySyncWrappingImplementation__get__EntrySync_fullPath(_this);
}
;
_EntrySyncWrappingImplementation$Dart._get__EntrySync_fullPath$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _EntrySyncWrappingImplementation$Dart._get__EntrySync_fullPath$$member_(_this);
}
;
_EntrySyncWrappingImplementation$Dart._get__EntrySync_fullPath$$getter_ = function _get__EntrySync_fullPath$$getter_(){
  return _EntrySyncWrappingImplementation$Dart._get__EntrySync_fullPath$$named_;
}
;
_EntrySyncWrappingImplementation$Dart.prototype.isDirectory$named = function(){
  return this.isDirectory$getter().apply(this, arguments);
}
;
_EntrySyncWrappingImplementation$Dart.prototype.isDirectory$getter = function(){
  return _EntrySyncWrappingImplementation$Dart._get__EntrySync_isDirectory$$member_(this);
}
;
_EntrySyncWrappingImplementation$Dart._get__EntrySync_isDirectory$$member_ = function(_this){
  return native__EntrySyncWrappingImplementation__get__EntrySync_isDirectory(_this);
}
;
_EntrySyncWrappingImplementation$Dart._get__EntrySync_isDirectory$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _EntrySyncWrappingImplementation$Dart._get__EntrySync_isDirectory$$member_(_this);
}
;
_EntrySyncWrappingImplementation$Dart._get__EntrySync_isDirectory$$getter_ = function _get__EntrySync_isDirectory$$getter_(){
  return _EntrySyncWrappingImplementation$Dart._get__EntrySync_isDirectory$$named_;
}
;
_EntrySyncWrappingImplementation$Dart.prototype.isFile$named = function(){
  return this.isFile$getter().apply(this, arguments);
}
;
_EntrySyncWrappingImplementation$Dart.prototype.isFile$getter = function(){
  return _EntrySyncWrappingImplementation$Dart._get__EntrySync_isFile$$member_(this);
}
;
_EntrySyncWrappingImplementation$Dart._get__EntrySync_isFile$$member_ = function(_this){
  return native__EntrySyncWrappingImplementation__get__EntrySync_isFile(_this);
}
;
_EntrySyncWrappingImplementation$Dart._get__EntrySync_isFile$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _EntrySyncWrappingImplementation$Dart._get__EntrySync_isFile$$member_(_this);
}
;
_EntrySyncWrappingImplementation$Dart._get__EntrySync_isFile$$getter_ = function _get__EntrySync_isFile$$getter_(){
  return _EntrySyncWrappingImplementation$Dart._get__EntrySync_isFile$$named_;
}
;
_EntrySyncWrappingImplementation$Dart.prototype.name$named = function(){
  return this.name$getter().apply(this, arguments);
}
;
_EntrySyncWrappingImplementation$Dart.prototype.name$getter = function(){
  return _EntrySyncWrappingImplementation$Dart._get__EntrySync_name$$member_(this);
}
;
_EntrySyncWrappingImplementation$Dart._get__EntrySync_name$$member_ = function(_this){
  return native__EntrySyncWrappingImplementation__get__EntrySync_name(_this);
}
;
_EntrySyncWrappingImplementation$Dart._get__EntrySync_name$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _EntrySyncWrappingImplementation$Dart._get__EntrySync_name$$member_(_this);
}
;
_EntrySyncWrappingImplementation$Dart._get__EntrySync_name$$getter_ = function _get__EntrySync_name$$getter_(){
  return _EntrySyncWrappingImplementation$Dart._get__EntrySync_name$$named_;
}
;
_EntrySyncWrappingImplementation$Dart.prototype.copyTo$member = function(parent_0, name_0){
  return _EntrySyncWrappingImplementation$Dart._copyTo$$member_(this, parent_0, name_0);
}
;
_EntrySyncWrappingImplementation$Dart.prototype.copyTo$named = function($n, $o, parent_0, name_0){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _EntrySyncWrappingImplementation$Dart.prototype.copyTo$member.call(this, parent_0, name_0);
}
;
_EntrySyncWrappingImplementation$Dart.prototype.copyTo$getter = function copyTo$getter(){
  return $bind(_EntrySyncWrappingImplementation$Dart.prototype.copyTo$named, this);
}
;
_EntrySyncWrappingImplementation$Dart._copyTo$$member_ = function(receiver, parent_0, name_0){
  return native__EntrySyncWrappingImplementation__copyTo(receiver, parent_0, name_0);
}
;
_EntrySyncWrappingImplementation$Dart._copyTo$$named_ = function($n, $o, receiver, parent_0, name_0){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return _EntrySyncWrappingImplementation$Dart._copyTo$$member_(receiver, parent_0, name_0);
}
;
_EntrySyncWrappingImplementation$Dart._copyTo$$getter_ = function _copyTo$$getter_(){
  return _EntrySyncWrappingImplementation$Dart._copyTo$$named_;
}
;
_EntrySyncWrappingImplementation$Dart.prototype.getMetadata$member = function(){
  return _EntrySyncWrappingImplementation$Dart._getMetadata$$member_(this);
}
;
_EntrySyncWrappingImplementation$Dart.prototype.getMetadata$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _EntrySyncWrappingImplementation$Dart.prototype.getMetadata$member.call(this);
}
;
_EntrySyncWrappingImplementation$Dart.prototype.getMetadata$getter = function getMetadata$getter(){
  return $bind(_EntrySyncWrappingImplementation$Dart.prototype.getMetadata$named, this);
}
;
_EntrySyncWrappingImplementation$Dart._getMetadata$$member_ = function(receiver){
  return native__EntrySyncWrappingImplementation__getMetadata(receiver);
}
;
_EntrySyncWrappingImplementation$Dart._getMetadata$$named_ = function($n, $o, receiver){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _EntrySyncWrappingImplementation$Dart._getMetadata$$member_(receiver);
}
;
_EntrySyncWrappingImplementation$Dart._getMetadata$$getter_ = function _getMetadata$$getter_(){
  return _EntrySyncWrappingImplementation$Dart._getMetadata$$named_;
}
;
_EntrySyncWrappingImplementation$Dart.prototype.getParent$member = function(){
  return _EntrySyncWrappingImplementation$Dart._getParent$$member_(this);
}
;
_EntrySyncWrappingImplementation$Dart.prototype.getParent$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _EntrySyncWrappingImplementation$Dart.prototype.getParent$member.call(this);
}
;
_EntrySyncWrappingImplementation$Dart.prototype.getParent$getter = function getParent$getter(){
  return $bind(_EntrySyncWrappingImplementation$Dart.prototype.getParent$named, this);
}
;
_EntrySyncWrappingImplementation$Dart._getParent$$member_ = function(receiver){
  return native__EntrySyncWrappingImplementation__getParent(receiver);
}
;
_EntrySyncWrappingImplementation$Dart._getParent$$named_ = function($n, $o, receiver){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _EntrySyncWrappingImplementation$Dart._getParent$$member_(receiver);
}
;
_EntrySyncWrappingImplementation$Dart._getParent$$getter_ = function _getParent$$getter_(){
  return _EntrySyncWrappingImplementation$Dart._getParent$$named_;
}
;
_EntrySyncWrappingImplementation$Dart.prototype.moveTo$member = function(parent_0, name_0){
  return _EntrySyncWrappingImplementation$Dart._moveTo$$member_(this, parent_0, name_0);
}
;
_EntrySyncWrappingImplementation$Dart.prototype.moveTo$named = function($n, $o, parent_0, name_0){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _EntrySyncWrappingImplementation$Dart.prototype.moveTo$member.call(this, parent_0, name_0);
}
;
_EntrySyncWrappingImplementation$Dart.prototype.moveTo$getter = function moveTo$getter(){
  return $bind(_EntrySyncWrappingImplementation$Dart.prototype.moveTo$named, this);
}
;
_EntrySyncWrappingImplementation$Dart._moveTo$$member_ = function(receiver, parent_0, name_0){
  return native__EntrySyncWrappingImplementation__moveTo(receiver, parent_0, name_0);
}
;
_EntrySyncWrappingImplementation$Dart._moveTo$$named_ = function($n, $o, receiver, parent_0, name_0){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return _EntrySyncWrappingImplementation$Dart._moveTo$$member_(receiver, parent_0, name_0);
}
;
_EntrySyncWrappingImplementation$Dart._moveTo$$getter_ = function _moveTo$$getter_(){
  return _EntrySyncWrappingImplementation$Dart._moveTo$$named_;
}
;
_EntrySyncWrappingImplementation$Dart.prototype.remove$member = function(){
  _EntrySyncWrappingImplementation$Dart._remove$$member_(this);
  return;
}
;
_EntrySyncWrappingImplementation$Dart.prototype.remove$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _EntrySyncWrappingImplementation$Dart.prototype.remove$member.call(this);
}
;
_EntrySyncWrappingImplementation$Dart.prototype.remove$getter = function remove$getter(){
  return $bind(_EntrySyncWrappingImplementation$Dart.prototype.remove$named, this);
}
;
_EntrySyncWrappingImplementation$Dart._remove$$member_ = function(receiver){
  return native__EntrySyncWrappingImplementation__remove(receiver);
}
;
_EntrySyncWrappingImplementation$Dart._remove$$named_ = function($n, $o, receiver){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _EntrySyncWrappingImplementation$Dart._remove$$member_(receiver);
}
;
_EntrySyncWrappingImplementation$Dart._remove$$getter_ = function _remove$$getter_(){
  return _EntrySyncWrappingImplementation$Dart._remove$$named_;
}
;
_EntrySyncWrappingImplementation$Dart.prototype.toURL$member = function(){
  return _EntrySyncWrappingImplementation$Dart._toURL$$member_(this);
}
;
_EntrySyncWrappingImplementation$Dart.prototype.toURL$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _EntrySyncWrappingImplementation$Dart.prototype.toURL$member.call(this);
}
;
_EntrySyncWrappingImplementation$Dart.prototype.toURL$getter = function toURL$getter(){
  return $bind(_EntrySyncWrappingImplementation$Dart.prototype.toURL$named, this);
}
;
_EntrySyncWrappingImplementation$Dart._toURL$$member_ = function(receiver){
  return native__EntrySyncWrappingImplementation__toURL(receiver);
}
;
_EntrySyncWrappingImplementation$Dart._toURL$$named_ = function($n, $o, receiver){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _EntrySyncWrappingImplementation$Dart._toURL$$member_(receiver);
}
;
_EntrySyncWrappingImplementation$Dart._toURL$$getter_ = function _toURL$$getter_(){
  return _EntrySyncWrappingImplementation$Dart._toURL$$named_;
}
;
_EntrySyncWrappingImplementation$Dart.prototype.typeName$named = function(){
  return this.typeName$getter().apply(this, arguments);
}
;
_EntrySyncWrappingImplementation$Dart.prototype.typeName$getter = function(){
  return 'EntrySync';
}
;
