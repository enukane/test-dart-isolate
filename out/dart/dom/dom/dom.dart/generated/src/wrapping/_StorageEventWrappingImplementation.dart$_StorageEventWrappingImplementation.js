function _StorageEventWrappingImplementation$Dart(){
}

_StorageEventWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('_StorageEventWrappingImplementation$Dart'), _StorageEventWrappingImplementation$Dart.$RTTimplements);
}
;
_StorageEventWrappingImplementation$Dart.$RTTimplements = function(rtt){
  _StorageEventWrappingImplementation$Dart.$addTo(rtt);
}
;
_StorageEventWrappingImplementation$Dart.$addTo = function(target){
  var rtt = _StorageEventWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  _EventWrappingImplementation$Dart.$addTo(target);
  StorageEvent$Dart.$addTo(target);
}
;
_StorageEventWrappingImplementation$Dart.prototype.$implements$_StorageEventWrappingImplementation$Dart = 1;
_StorageEventWrappingImplementation$Dart.prototype.$implements$StorageEvent$Dart = 1;
_StorageEventWrappingImplementation$Dart.prototype.$implements$Event$Dart = 1;
_StorageEventWrappingImplementation$Dart.prototype.$implements$_EventWrappingImplementation$Dart = 1;
_StorageEventWrappingImplementation$Dart.prototype.$implements$DOMWrapperBase$Dart = 1;
_StorageEventWrappingImplementation$Dart.prototype.$implements$DOMType$Dart = 1;
_StorageEventWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(_StorageEventWrappingImplementation$Dart, _EventWrappingImplementation$Dart);
_StorageEventWrappingImplementation$Dart.$Constructor = function(){
  _EventWrappingImplementation$Dart.$Constructor.call(this);
}
;
_StorageEventWrappingImplementation$Dart.$Initializer = function(){
  _EventWrappingImplementation$Dart.$Initializer.call(this);
}
;
_StorageEventWrappingImplementation$Dart._StorageEventWrappingImplementation$$Factory = function(){
  var tmp$0 = new _StorageEventWrappingImplementation$Dart;
  tmp$0.$typeInfo = _StorageEventWrappingImplementation$Dart.$lookupRTT();
  _StorageEventWrappingImplementation$Dart.$Initializer.call(tmp$0);
  _StorageEventWrappingImplementation$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
_StorageEventWrappingImplementation$Dart.create__StorageEventWrappingImplementation$member = function(){
  return _StorageEventWrappingImplementation$Dart._StorageEventWrappingImplementation$$Factory();
}
;
_StorageEventWrappingImplementation$Dart.create__StorageEventWrappingImplementation$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _StorageEventWrappingImplementation$Dart.create__StorageEventWrappingImplementation$member();
}
;
function native__StorageEventWrappingImplementation_create__StorageEventWrappingImplementation(){
  return _StorageEventWrappingImplementation$Dart.create__StorageEventWrappingImplementation$member();
}

_StorageEventWrappingImplementation$Dart.create__StorageEventWrappingImplementation$getter = function create__StorageEventWrappingImplementation$getter(){
  return _StorageEventWrappingImplementation$Dart.create__StorageEventWrappingImplementation$named;
}
;
_StorageEventWrappingImplementation$Dart.prototype.key$named = function(){
  return this.key$getter().apply(this, arguments);
}
;
_StorageEventWrappingImplementation$Dart.prototype.key$getter = function(){
  return _StorageEventWrappingImplementation$Dart._get__StorageEvent_key$$member_(this);
}
;
_StorageEventWrappingImplementation$Dart._get__StorageEvent_key$$member_ = function(_this){
  return native__StorageEventWrappingImplementation__get__StorageEvent_key(_this);
}
;
_StorageEventWrappingImplementation$Dart._get__StorageEvent_key$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _StorageEventWrappingImplementation$Dart._get__StorageEvent_key$$member_(_this);
}
;
_StorageEventWrappingImplementation$Dart._get__StorageEvent_key$$getter_ = function _get__StorageEvent_key$$getter_(){
  return _StorageEventWrappingImplementation$Dart._get__StorageEvent_key$$named_;
}
;
_StorageEventWrappingImplementation$Dart.prototype.newValue$named = function(){
  return this.newValue$getter().apply(this, arguments);
}
;
_StorageEventWrappingImplementation$Dart.prototype.newValue$getter = function(){
  return _StorageEventWrappingImplementation$Dart._get__StorageEvent_newValue$$member_(this);
}
;
_StorageEventWrappingImplementation$Dart._get__StorageEvent_newValue$$member_ = function(_this){
  return native__StorageEventWrappingImplementation__get__StorageEvent_newValue(_this);
}
;
_StorageEventWrappingImplementation$Dart._get__StorageEvent_newValue$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _StorageEventWrappingImplementation$Dart._get__StorageEvent_newValue$$member_(_this);
}
;
_StorageEventWrappingImplementation$Dart._get__StorageEvent_newValue$$getter_ = function _get__StorageEvent_newValue$$getter_(){
  return _StorageEventWrappingImplementation$Dart._get__StorageEvent_newValue$$named_;
}
;
_StorageEventWrappingImplementation$Dart.prototype.oldValue$named = function(){
  return this.oldValue$getter().apply(this, arguments);
}
;
_StorageEventWrappingImplementation$Dart.prototype.oldValue$getter = function(){
  return _StorageEventWrappingImplementation$Dart._get__StorageEvent_oldValue$$member_(this);
}
;
_StorageEventWrappingImplementation$Dart._get__StorageEvent_oldValue$$member_ = function(_this){
  return native__StorageEventWrappingImplementation__get__StorageEvent_oldValue(_this);
}
;
_StorageEventWrappingImplementation$Dart._get__StorageEvent_oldValue$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _StorageEventWrappingImplementation$Dart._get__StorageEvent_oldValue$$member_(_this);
}
;
_StorageEventWrappingImplementation$Dart._get__StorageEvent_oldValue$$getter_ = function _get__StorageEvent_oldValue$$getter_(){
  return _StorageEventWrappingImplementation$Dart._get__StorageEvent_oldValue$$named_;
}
;
_StorageEventWrappingImplementation$Dart.prototype.storageArea$named = function(){
  return this.storageArea$getter().apply(this, arguments);
}
;
_StorageEventWrappingImplementation$Dart.prototype.storageArea$getter = function(){
  return _StorageEventWrappingImplementation$Dart._get__StorageEvent_storageArea$$member_(this);
}
;
_StorageEventWrappingImplementation$Dart._get__StorageEvent_storageArea$$member_ = function(_this){
  return native__StorageEventWrappingImplementation__get__StorageEvent_storageArea(_this);
}
;
_StorageEventWrappingImplementation$Dart._get__StorageEvent_storageArea$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _StorageEventWrappingImplementation$Dart._get__StorageEvent_storageArea$$member_(_this);
}
;
_StorageEventWrappingImplementation$Dart._get__StorageEvent_storageArea$$getter_ = function _get__StorageEvent_storageArea$$getter_(){
  return _StorageEventWrappingImplementation$Dart._get__StorageEvent_storageArea$$named_;
}
;
_StorageEventWrappingImplementation$Dart.prototype.url$named = function(){
  return this.url$getter().apply(this, arguments);
}
;
_StorageEventWrappingImplementation$Dart.prototype.url$getter = function(){
  return _StorageEventWrappingImplementation$Dart._get__StorageEvent_url$$member_(this);
}
;
_StorageEventWrappingImplementation$Dart._get__StorageEvent_url$$member_ = function(_this){
  return native__StorageEventWrappingImplementation__get__StorageEvent_url(_this);
}
;
_StorageEventWrappingImplementation$Dart._get__StorageEvent_url$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _StorageEventWrappingImplementation$Dart._get__StorageEvent_url$$member_(_this);
}
;
_StorageEventWrappingImplementation$Dart._get__StorageEvent_url$$getter_ = function _get__StorageEvent_url$$getter_(){
  return _StorageEventWrappingImplementation$Dart._get__StorageEvent_url$$named_;
}
;
_StorageEventWrappingImplementation$Dart.prototype.initStorageEvent$member = function(typeArg, canBubbleArg, cancelableArg, keyArg, oldValueArg, newValueArg, urlArg, storageAreaArg){
  _StorageEventWrappingImplementation$Dart._initStorageEvent$$member_(this, typeArg, canBubbleArg, cancelableArg, keyArg, oldValueArg, newValueArg, urlArg, storageAreaArg);
  return;
}
;
_StorageEventWrappingImplementation$Dart.prototype.initStorageEvent$named = function($n, $o, typeArg, canBubbleArg, cancelableArg, keyArg, oldValueArg, newValueArg, urlArg, storageAreaArg){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 8)
    $nsme();
  return _StorageEventWrappingImplementation$Dart.prototype.initStorageEvent$member.call(this, typeArg, canBubbleArg, cancelableArg, keyArg, oldValueArg, newValueArg, urlArg, storageAreaArg);
}
;
_StorageEventWrappingImplementation$Dart.prototype.initStorageEvent$getter = function initStorageEvent$getter(){
  return $bind(_StorageEventWrappingImplementation$Dart.prototype.initStorageEvent$named, this);
}
;
_StorageEventWrappingImplementation$Dart._initStorageEvent$$member_ = function(receiver, typeArg, canBubbleArg, cancelableArg, keyArg, oldValueArg, newValueArg, urlArg, storageAreaArg){
  return native__StorageEventWrappingImplementation__initStorageEvent(receiver, typeArg, canBubbleArg, cancelableArg, keyArg, oldValueArg, newValueArg, urlArg, storageAreaArg);
}
;
_StorageEventWrappingImplementation$Dart._initStorageEvent$$named_ = function($n, $o, receiver, typeArg, canBubbleArg, cancelableArg, keyArg, oldValueArg, newValueArg, urlArg, storageAreaArg){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 9)
    $nsme();
  return _StorageEventWrappingImplementation$Dart._initStorageEvent$$member_(receiver, typeArg, canBubbleArg, cancelableArg, keyArg, oldValueArg, newValueArg, urlArg, storageAreaArg);
}
;
_StorageEventWrappingImplementation$Dart._initStorageEvent$$getter_ = function _initStorageEvent$$getter_(){
  return _StorageEventWrappingImplementation$Dart._initStorageEvent$$named_;
}
;
_StorageEventWrappingImplementation$Dart.prototype.typeName$named = function(){
  return this.typeName$getter().apply(this, arguments);
}
;
_StorageEventWrappingImplementation$Dart.prototype.typeName$getter = function(){
  return 'StorageEvent';
}
;
