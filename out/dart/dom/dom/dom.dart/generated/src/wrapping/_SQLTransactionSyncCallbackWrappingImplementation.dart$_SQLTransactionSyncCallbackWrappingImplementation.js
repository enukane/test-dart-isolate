function _SQLTransactionSyncCallbackWrappingImplementation$Dart(){
}

_SQLTransactionSyncCallbackWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('_SQLTransactionSyncCallbackWrappingImplementation$Dart'), _SQLTransactionSyncCallbackWrappingImplementation$Dart.$RTTimplements);
}
;
_SQLTransactionSyncCallbackWrappingImplementation$Dart.$RTTimplements = function(rtt){
  _SQLTransactionSyncCallbackWrappingImplementation$Dart.$addTo(rtt);
}
;
_SQLTransactionSyncCallbackWrappingImplementation$Dart.$addTo = function(target){
  var rtt = _SQLTransactionSyncCallbackWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  DOMWrapperBase$Dart.$addTo(target);
  SQLTransactionSyncCallback$Dart.$addTo(target);
}
;
_SQLTransactionSyncCallbackWrappingImplementation$Dart.prototype.$implements$_SQLTransactionSyncCallbackWrappingImplementation$Dart = 1;
_SQLTransactionSyncCallbackWrappingImplementation$Dart.prototype.$implements$SQLTransactionSyncCallback$Dart = 1;
_SQLTransactionSyncCallbackWrappingImplementation$Dart.prototype.$implements$DOMWrapperBase$Dart = 1;
_SQLTransactionSyncCallbackWrappingImplementation$Dart.prototype.$implements$DOMType$Dart = 1;
_SQLTransactionSyncCallbackWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(_SQLTransactionSyncCallbackWrappingImplementation$Dart, DOMWrapperBase$Dart);
_SQLTransactionSyncCallbackWrappingImplementation$Dart.$Constructor = function(){
  DOMWrapperBase$Dart.$Constructor.call(this);
}
;
_SQLTransactionSyncCallbackWrappingImplementation$Dart.$Initializer = function(){
  DOMWrapperBase$Dart.$Initializer.call(this);
}
;
_SQLTransactionSyncCallbackWrappingImplementation$Dart._SQLTransactionSyncCallbackWrappingImplementation$$Factory = function(){
  var tmp$0 = new _SQLTransactionSyncCallbackWrappingImplementation$Dart;
  tmp$0.$typeInfo = _SQLTransactionSyncCallbackWrappingImplementation$Dart.$lookupRTT();
  _SQLTransactionSyncCallbackWrappingImplementation$Dart.$Initializer.call(tmp$0);
  _SQLTransactionSyncCallbackWrappingImplementation$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
_SQLTransactionSyncCallbackWrappingImplementation$Dart.create__SQLTransactionSyncCallbackWrappingImplementation$member = function(){
  return _SQLTransactionSyncCallbackWrappingImplementation$Dart._SQLTransactionSyncCallbackWrappingImplementation$$Factory();
}
;
_SQLTransactionSyncCallbackWrappingImplementation$Dart.create__SQLTransactionSyncCallbackWrappingImplementation$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _SQLTransactionSyncCallbackWrappingImplementation$Dart.create__SQLTransactionSyncCallbackWrappingImplementation$member();
}
;
function native__SQLTransactionSyncCallbackWrappingImplementation_create__SQLTransactionSyncCallbackWrappingImplementation(){
  return _SQLTransactionSyncCallbackWrappingImplementation$Dart.create__SQLTransactionSyncCallbackWrappingImplementation$member();
}

_SQLTransactionSyncCallbackWrappingImplementation$Dart.create__SQLTransactionSyncCallbackWrappingImplementation$getter = function create__SQLTransactionSyncCallbackWrappingImplementation$getter(){
  return _SQLTransactionSyncCallbackWrappingImplementation$Dart.create__SQLTransactionSyncCallbackWrappingImplementation$named;
}
;
_SQLTransactionSyncCallbackWrappingImplementation$Dart.prototype.handleEvent$member = function(transaction){
  return _SQLTransactionSyncCallbackWrappingImplementation$Dart._handleEvent$$member_(this, transaction);
}
;
_SQLTransactionSyncCallbackWrappingImplementation$Dart.prototype.handleEvent$named = function($n, $o, transaction){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _SQLTransactionSyncCallbackWrappingImplementation$Dart.prototype.handleEvent$member.call(this, transaction);
}
;
_SQLTransactionSyncCallbackWrappingImplementation$Dart.prototype.handleEvent$getter = function handleEvent$getter(){
  return $bind(_SQLTransactionSyncCallbackWrappingImplementation$Dart.prototype.handleEvent$named, this);
}
;
_SQLTransactionSyncCallbackWrappingImplementation$Dart._handleEvent$$member_ = function(receiver, transaction){
  return native__SQLTransactionSyncCallbackWrappingImplementation__handleEvent(receiver, transaction);
}
;
_SQLTransactionSyncCallbackWrappingImplementation$Dart._handleEvent$$named_ = function($n, $o, receiver, transaction){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _SQLTransactionSyncCallbackWrappingImplementation$Dart._handleEvent$$member_(receiver, transaction);
}
;
_SQLTransactionSyncCallbackWrappingImplementation$Dart._handleEvent$$getter_ = function _handleEvent$$getter_(){
  return _SQLTransactionSyncCallbackWrappingImplementation$Dart._handleEvent$$named_;
}
;
_SQLTransactionSyncCallbackWrappingImplementation$Dart.prototype.typeName$named = function(){
  return this.typeName$getter().apply(this, arguments);
}
;
_SQLTransactionSyncCallbackWrappingImplementation$Dart.prototype.typeName$getter = function(){
  return 'SQLTransactionSyncCallback';
}
;
