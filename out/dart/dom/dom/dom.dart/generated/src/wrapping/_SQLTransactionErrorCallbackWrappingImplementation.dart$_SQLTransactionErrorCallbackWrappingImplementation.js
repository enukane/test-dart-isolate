function _SQLTransactionErrorCallbackWrappingImplementation$Dart(){
}

_SQLTransactionErrorCallbackWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('_SQLTransactionErrorCallbackWrappingImplementation$Dart'), _SQLTransactionErrorCallbackWrappingImplementation$Dart.$RTTimplements);
}
;
_SQLTransactionErrorCallbackWrappingImplementation$Dart.$RTTimplements = function(rtt){
  _SQLTransactionErrorCallbackWrappingImplementation$Dart.$addTo(rtt);
}
;
_SQLTransactionErrorCallbackWrappingImplementation$Dart.$addTo = function(target){
  var rtt = _SQLTransactionErrorCallbackWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  DOMWrapperBase$Dart.$addTo(target);
  SQLTransactionErrorCallback$Dart.$addTo(target);
}
;
_SQLTransactionErrorCallbackWrappingImplementation$Dart.prototype.$implements$_SQLTransactionErrorCallbackWrappingImplementation$Dart = 1;
_SQLTransactionErrorCallbackWrappingImplementation$Dart.prototype.$implements$SQLTransactionErrorCallback$Dart = 1;
_SQLTransactionErrorCallbackWrappingImplementation$Dart.prototype.$implements$DOMWrapperBase$Dart = 1;
_SQLTransactionErrorCallbackWrappingImplementation$Dart.prototype.$implements$DOMType$Dart = 1;
_SQLTransactionErrorCallbackWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(_SQLTransactionErrorCallbackWrappingImplementation$Dart, DOMWrapperBase$Dart);
_SQLTransactionErrorCallbackWrappingImplementation$Dart.$Constructor = function(){
  DOMWrapperBase$Dart.$Constructor.call(this);
}
;
_SQLTransactionErrorCallbackWrappingImplementation$Dart.$Initializer = function(){
  DOMWrapperBase$Dart.$Initializer.call(this);
}
;
_SQLTransactionErrorCallbackWrappingImplementation$Dart._SQLTransactionErrorCallbackWrappingImplementation$$Factory = function(){
  var tmp$0 = new _SQLTransactionErrorCallbackWrappingImplementation$Dart;
  tmp$0.$typeInfo = _SQLTransactionErrorCallbackWrappingImplementation$Dart.$lookupRTT();
  _SQLTransactionErrorCallbackWrappingImplementation$Dart.$Initializer.call(tmp$0);
  _SQLTransactionErrorCallbackWrappingImplementation$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
_SQLTransactionErrorCallbackWrappingImplementation$Dart.create__SQLTransactionErrorCallbackWrappingImplementation$member = function(){
  return _SQLTransactionErrorCallbackWrappingImplementation$Dart._SQLTransactionErrorCallbackWrappingImplementation$$Factory();
}
;
_SQLTransactionErrorCallbackWrappingImplementation$Dart.create__SQLTransactionErrorCallbackWrappingImplementation$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _SQLTransactionErrorCallbackWrappingImplementation$Dart.create__SQLTransactionErrorCallbackWrappingImplementation$member();
}
;
function native__SQLTransactionErrorCallbackWrappingImplementation_create__SQLTransactionErrorCallbackWrappingImplementation(){
  return _SQLTransactionErrorCallbackWrappingImplementation$Dart.create__SQLTransactionErrorCallbackWrappingImplementation$member();
}

_SQLTransactionErrorCallbackWrappingImplementation$Dart.create__SQLTransactionErrorCallbackWrappingImplementation$getter = function create__SQLTransactionErrorCallbackWrappingImplementation$getter(){
  return _SQLTransactionErrorCallbackWrappingImplementation$Dart.create__SQLTransactionErrorCallbackWrappingImplementation$named;
}
;
_SQLTransactionErrorCallbackWrappingImplementation$Dart.prototype.handleEvent$member = function(error){
  return _SQLTransactionErrorCallbackWrappingImplementation$Dart._handleEvent$$member_(this, error);
}
;
_SQLTransactionErrorCallbackWrappingImplementation$Dart.prototype.handleEvent$named = function($n, $o, error){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _SQLTransactionErrorCallbackWrappingImplementation$Dart.prototype.handleEvent$member.call(this, error);
}
;
_SQLTransactionErrorCallbackWrappingImplementation$Dart.prototype.handleEvent$getter = function handleEvent$getter(){
  return $bind(_SQLTransactionErrorCallbackWrappingImplementation$Dart.prototype.handleEvent$named, this);
}
;
_SQLTransactionErrorCallbackWrappingImplementation$Dart._handleEvent$$member_ = function(receiver, error){
  return native__SQLTransactionErrorCallbackWrappingImplementation__handleEvent(receiver, error);
}
;
_SQLTransactionErrorCallbackWrappingImplementation$Dart._handleEvent$$named_ = function($n, $o, receiver, error){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _SQLTransactionErrorCallbackWrappingImplementation$Dart._handleEvent$$member_(receiver, error);
}
;
_SQLTransactionErrorCallbackWrappingImplementation$Dart._handleEvent$$getter_ = function _handleEvent$$getter_(){
  return _SQLTransactionErrorCallbackWrappingImplementation$Dart._handleEvent$$named_;
}
;
_SQLTransactionErrorCallbackWrappingImplementation$Dart.prototype.typeName$named = function(){
  return this.typeName$getter().apply(this, arguments);
}
;
_SQLTransactionErrorCallbackWrappingImplementation$Dart.prototype.typeName$getter = function(){
  return 'SQLTransactionErrorCallback';
}
;
