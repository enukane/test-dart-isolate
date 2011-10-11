function _StorageInfoErrorCallbackWrappingImplementation$Dart(){
}

_StorageInfoErrorCallbackWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('_StorageInfoErrorCallbackWrappingImplementation$Dart'), _StorageInfoErrorCallbackWrappingImplementation$Dart.$RTTimplements);
}
;
_StorageInfoErrorCallbackWrappingImplementation$Dart.$RTTimplements = function(rtt){
  _StorageInfoErrorCallbackWrappingImplementation$Dart.$addTo(rtt);
}
;
_StorageInfoErrorCallbackWrappingImplementation$Dart.$addTo = function(target){
  var rtt = _StorageInfoErrorCallbackWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  DOMWrapperBase$Dart.$addTo(target);
  StorageInfoErrorCallback$Dart.$addTo(target);
}
;
_StorageInfoErrorCallbackWrappingImplementation$Dart.prototype.$implements$_StorageInfoErrorCallbackWrappingImplementation$Dart = 1;
_StorageInfoErrorCallbackWrappingImplementation$Dart.prototype.$implements$StorageInfoErrorCallback$Dart = 1;
_StorageInfoErrorCallbackWrappingImplementation$Dart.prototype.$implements$DOMWrapperBase$Dart = 1;
_StorageInfoErrorCallbackWrappingImplementation$Dart.prototype.$implements$DOMType$Dart = 1;
_StorageInfoErrorCallbackWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(_StorageInfoErrorCallbackWrappingImplementation$Dart, DOMWrapperBase$Dart);
_StorageInfoErrorCallbackWrappingImplementation$Dart.$Constructor = function(){
  DOMWrapperBase$Dart.$Constructor.call(this);
}
;
_StorageInfoErrorCallbackWrappingImplementation$Dart.$Initializer = function(){
  DOMWrapperBase$Dart.$Initializer.call(this);
}
;
_StorageInfoErrorCallbackWrappingImplementation$Dart._StorageInfoErrorCallbackWrappingImplementation$$Factory = function(){
  var tmp$0 = new _StorageInfoErrorCallbackWrappingImplementation$Dart;
  tmp$0.$typeInfo = _StorageInfoErrorCallbackWrappingImplementation$Dart.$lookupRTT();
  _StorageInfoErrorCallbackWrappingImplementation$Dart.$Initializer.call(tmp$0);
  _StorageInfoErrorCallbackWrappingImplementation$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
_StorageInfoErrorCallbackWrappingImplementation$Dart.create__StorageInfoErrorCallbackWrappingImplementation$member = function(){
  return _StorageInfoErrorCallbackWrappingImplementation$Dart._StorageInfoErrorCallbackWrappingImplementation$$Factory();
}
;
_StorageInfoErrorCallbackWrappingImplementation$Dart.create__StorageInfoErrorCallbackWrappingImplementation$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _StorageInfoErrorCallbackWrappingImplementation$Dart.create__StorageInfoErrorCallbackWrappingImplementation$member();
}
;
function native__StorageInfoErrorCallbackWrappingImplementation_create__StorageInfoErrorCallbackWrappingImplementation(){
  return _StorageInfoErrorCallbackWrappingImplementation$Dart.create__StorageInfoErrorCallbackWrappingImplementation$member();
}

_StorageInfoErrorCallbackWrappingImplementation$Dart.create__StorageInfoErrorCallbackWrappingImplementation$getter = function create__StorageInfoErrorCallbackWrappingImplementation$getter(){
  return _StorageInfoErrorCallbackWrappingImplementation$Dart.create__StorageInfoErrorCallbackWrappingImplementation$named;
}
;
_StorageInfoErrorCallbackWrappingImplementation$Dart.prototype.handleEvent$member = function(error){
  return _StorageInfoErrorCallbackWrappingImplementation$Dart._handleEvent$$member_(this, error);
}
;
_StorageInfoErrorCallbackWrappingImplementation$Dart.prototype.handleEvent$named = function($n, $o, error){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _StorageInfoErrorCallbackWrappingImplementation$Dart.prototype.handleEvent$member.call(this, error);
}
;
_StorageInfoErrorCallbackWrappingImplementation$Dart.prototype.handleEvent$getter = function handleEvent$getter(){
  return $bind(_StorageInfoErrorCallbackWrappingImplementation$Dart.prototype.handleEvent$named, this);
}
;
_StorageInfoErrorCallbackWrappingImplementation$Dart._handleEvent$$member_ = function(receiver, error){
  return native__StorageInfoErrorCallbackWrappingImplementation__handleEvent(receiver, error);
}
;
_StorageInfoErrorCallbackWrappingImplementation$Dart._handleEvent$$named_ = function($n, $o, receiver, error){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _StorageInfoErrorCallbackWrappingImplementation$Dart._handleEvent$$member_(receiver, error);
}
;
_StorageInfoErrorCallbackWrappingImplementation$Dart._handleEvent$$getter_ = function _handleEvent$$getter_(){
  return _StorageInfoErrorCallbackWrappingImplementation$Dart._handleEvent$$named_;
}
;
_StorageInfoErrorCallbackWrappingImplementation$Dart.prototype.typeName$named = function(){
  return this.typeName$getter().apply(this, arguments);
}
;
_StorageInfoErrorCallbackWrappingImplementation$Dart.prototype.typeName$getter = function(){
  return 'StorageInfoErrorCallback';
}
;
