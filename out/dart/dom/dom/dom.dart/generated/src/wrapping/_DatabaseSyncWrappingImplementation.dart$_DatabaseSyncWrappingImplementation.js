function _DatabaseSyncWrappingImplementation$Dart(){
}

_DatabaseSyncWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('_DatabaseSyncWrappingImplementation$Dart'), _DatabaseSyncWrappingImplementation$Dart.$RTTimplements);
}
;
_DatabaseSyncWrappingImplementation$Dart.$RTTimplements = function(rtt){
  _DatabaseSyncWrappingImplementation$Dart.$addTo(rtt);
}
;
_DatabaseSyncWrappingImplementation$Dart.$addTo = function(target){
  var rtt = _DatabaseSyncWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  DOMWrapperBase$Dart.$addTo(target);
  DatabaseSync$Dart.$addTo(target);
}
;
_DatabaseSyncWrappingImplementation$Dart.prototype.$implements$_DatabaseSyncWrappingImplementation$Dart = 1;
_DatabaseSyncWrappingImplementation$Dart.prototype.$implements$DatabaseSync$Dart = 1;
_DatabaseSyncWrappingImplementation$Dart.prototype.$implements$DOMWrapperBase$Dart = 1;
_DatabaseSyncWrappingImplementation$Dart.prototype.$implements$DOMType$Dart = 1;
_DatabaseSyncWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(_DatabaseSyncWrappingImplementation$Dart, DOMWrapperBase$Dart);
_DatabaseSyncWrappingImplementation$Dart.$Constructor = function(){
  DOMWrapperBase$Dart.$Constructor.call(this);
}
;
_DatabaseSyncWrappingImplementation$Dart.$Initializer = function(){
  DOMWrapperBase$Dart.$Initializer.call(this);
}
;
_DatabaseSyncWrappingImplementation$Dart._DatabaseSyncWrappingImplementation$$Factory = function(){
  var tmp$0 = new _DatabaseSyncWrappingImplementation$Dart;
  tmp$0.$typeInfo = _DatabaseSyncWrappingImplementation$Dart.$lookupRTT();
  _DatabaseSyncWrappingImplementation$Dart.$Initializer.call(tmp$0);
  _DatabaseSyncWrappingImplementation$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
_DatabaseSyncWrappingImplementation$Dart.create__DatabaseSyncWrappingImplementation$member = function(){
  return _DatabaseSyncWrappingImplementation$Dart._DatabaseSyncWrappingImplementation$$Factory();
}
;
_DatabaseSyncWrappingImplementation$Dart.create__DatabaseSyncWrappingImplementation$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _DatabaseSyncWrappingImplementation$Dart.create__DatabaseSyncWrappingImplementation$member();
}
;
function native__DatabaseSyncWrappingImplementation_create__DatabaseSyncWrappingImplementation(){
  return _DatabaseSyncWrappingImplementation$Dart.create__DatabaseSyncWrappingImplementation$member();
}

_DatabaseSyncWrappingImplementation$Dart.create__DatabaseSyncWrappingImplementation$getter = function create__DatabaseSyncWrappingImplementation$getter(){
  return _DatabaseSyncWrappingImplementation$Dart.create__DatabaseSyncWrappingImplementation$named;
}
;
_DatabaseSyncWrappingImplementation$Dart.prototype.version$named = function(){
  return this.version$getter().apply(this, arguments);
}
;
_DatabaseSyncWrappingImplementation$Dart.prototype.version$getter = function(){
  return _DatabaseSyncWrappingImplementation$Dart._get__DatabaseSync_version$$member_(this);
}
;
_DatabaseSyncWrappingImplementation$Dart._get__DatabaseSync_version$$member_ = function(_this){
  return native__DatabaseSyncWrappingImplementation__get__DatabaseSync_version(_this);
}
;
_DatabaseSyncWrappingImplementation$Dart._get__DatabaseSync_version$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DatabaseSyncWrappingImplementation$Dart._get__DatabaseSync_version$$member_(_this);
}
;
_DatabaseSyncWrappingImplementation$Dart._get__DatabaseSync_version$$getter_ = function _get__DatabaseSync_version$$getter_(){
  return _DatabaseSyncWrappingImplementation$Dart._get__DatabaseSync_version$$named_;
}
;
_DatabaseSyncWrappingImplementation$Dart.prototype.changeVersion$member = function(oldVersion, newVersion, callback){
  if (callback == null) {
    _DatabaseSyncWrappingImplementation$Dart._changeVersion$$member_(this, oldVersion, newVersion);
    return;
  }
   else {
    _DatabaseSyncWrappingImplementation$Dart._changeVersion_2$$member_(this, oldVersion, newVersion, callback);
    return;
  }
}
;
_DatabaseSyncWrappingImplementation$Dart.prototype.changeVersion$named = function($n, $o, oldVersion, newVersion, callback){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 2:
      callback = $o.callback?(++seen , $o.callback):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return _DatabaseSyncWrappingImplementation$Dart.prototype.changeVersion$member.call(this, oldVersion, newVersion, callback);
}
;
_DatabaseSyncWrappingImplementation$Dart.prototype.changeVersion$getter = function changeVersion$getter(){
  return $bind(_DatabaseSyncWrappingImplementation$Dart.prototype.changeVersion$named, this);
}
;
_DatabaseSyncWrappingImplementation$Dart._changeVersion$$member_ = function(receiver, oldVersion, newVersion){
  return native__DatabaseSyncWrappingImplementation__changeVersion(receiver, oldVersion, newVersion);
}
;
_DatabaseSyncWrappingImplementation$Dart._changeVersion$$named_ = function($n, $o, receiver, oldVersion, newVersion){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return _DatabaseSyncWrappingImplementation$Dart._changeVersion$$member_(receiver, oldVersion, newVersion);
}
;
_DatabaseSyncWrappingImplementation$Dart._changeVersion$$getter_ = function _changeVersion$$getter_(){
  return _DatabaseSyncWrappingImplementation$Dart._changeVersion$$named_;
}
;
_DatabaseSyncWrappingImplementation$Dart._changeVersion_2$$member_ = function(receiver, oldVersion, newVersion, callback){
  return native__DatabaseSyncWrappingImplementation__changeVersion_2(receiver, oldVersion, newVersion, callback);
}
;
_DatabaseSyncWrappingImplementation$Dart._changeVersion_2$$named_ = function($n, $o, receiver, oldVersion, newVersion, callback){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 4)
    $nsme();
  return _DatabaseSyncWrappingImplementation$Dart._changeVersion_2$$member_(receiver, oldVersion, newVersion, callback);
}
;
_DatabaseSyncWrappingImplementation$Dart._changeVersion_2$$getter_ = function _changeVersion_2$$getter_(){
  return _DatabaseSyncWrappingImplementation$Dart._changeVersion_2$$named_;
}
;
_DatabaseSyncWrappingImplementation$Dart.prototype.readTransaction$member = function(callback){
  _DatabaseSyncWrappingImplementation$Dart._readTransaction$$member_(this, callback);
  return;
}
;
_DatabaseSyncWrappingImplementation$Dart.prototype.readTransaction$named = function($n, $o, callback){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DatabaseSyncWrappingImplementation$Dart.prototype.readTransaction$member.call(this, callback);
}
;
_DatabaseSyncWrappingImplementation$Dart.prototype.readTransaction$getter = function readTransaction$getter(){
  return $bind(_DatabaseSyncWrappingImplementation$Dart.prototype.readTransaction$named, this);
}
;
_DatabaseSyncWrappingImplementation$Dart._readTransaction$$member_ = function(receiver, callback){
  return native__DatabaseSyncWrappingImplementation__readTransaction(receiver, callback);
}
;
_DatabaseSyncWrappingImplementation$Dart._readTransaction$$named_ = function($n, $o, receiver, callback){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DatabaseSyncWrappingImplementation$Dart._readTransaction$$member_(receiver, callback);
}
;
_DatabaseSyncWrappingImplementation$Dart._readTransaction$$getter_ = function _readTransaction$$getter_(){
  return _DatabaseSyncWrappingImplementation$Dart._readTransaction$$named_;
}
;
_DatabaseSyncWrappingImplementation$Dart.prototype.transaction$member = function(callback){
  _DatabaseSyncWrappingImplementation$Dart._transaction$$member_(this, callback);
  return;
}
;
_DatabaseSyncWrappingImplementation$Dart.prototype.transaction$named = function($n, $o, callback){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DatabaseSyncWrappingImplementation$Dart.prototype.transaction$member.call(this, callback);
}
;
_DatabaseSyncWrappingImplementation$Dart.prototype.transaction$getter = function transaction$getter(){
  return $bind(_DatabaseSyncWrappingImplementation$Dart.prototype.transaction$named, this);
}
;
_DatabaseSyncWrappingImplementation$Dart._transaction$$member_ = function(receiver, callback){
  return native__DatabaseSyncWrappingImplementation__transaction(receiver, callback);
}
;
_DatabaseSyncWrappingImplementation$Dart._transaction$$named_ = function($n, $o, receiver, callback){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DatabaseSyncWrappingImplementation$Dart._transaction$$member_(receiver, callback);
}
;
_DatabaseSyncWrappingImplementation$Dart._transaction$$getter_ = function _transaction$$getter_(){
  return _DatabaseSyncWrappingImplementation$Dart._transaction$$named_;
}
;
_DatabaseSyncWrappingImplementation$Dart.prototype.typeName$named = function(){
  return this.typeName$getter().apply(this, arguments);
}
;
_DatabaseSyncWrappingImplementation$Dart.prototype.typeName$getter = function(){
  return 'DatabaseSync';
}
;
