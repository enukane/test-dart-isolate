function _SQLStatementErrorCallbackWrappingImplementation$Dart(){
}

_SQLStatementErrorCallbackWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('_SQLStatementErrorCallbackWrappingImplementation$Dart'), _SQLStatementErrorCallbackWrappingImplementation$Dart.$RTTimplements);
}
;
_SQLStatementErrorCallbackWrappingImplementation$Dart.$RTTimplements = function(rtt){
  _SQLStatementErrorCallbackWrappingImplementation$Dart.$addTo(rtt);
}
;
_SQLStatementErrorCallbackWrappingImplementation$Dart.$addTo = function(target){
  var rtt = _SQLStatementErrorCallbackWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  DOMWrapperBase$Dart.$addTo(target);
  SQLStatementErrorCallback$Dart.$addTo(target);
}
;
_SQLStatementErrorCallbackWrappingImplementation$Dart.prototype.$implements$_SQLStatementErrorCallbackWrappingImplementation$Dart = 1;
_SQLStatementErrorCallbackWrappingImplementation$Dart.prototype.$implements$SQLStatementErrorCallback$Dart = 1;
_SQLStatementErrorCallbackWrappingImplementation$Dart.prototype.$implements$DOMWrapperBase$Dart = 1;
_SQLStatementErrorCallbackWrappingImplementation$Dart.prototype.$implements$DOMType$Dart = 1;
_SQLStatementErrorCallbackWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(_SQLStatementErrorCallbackWrappingImplementation$Dart, DOMWrapperBase$Dart);
_SQLStatementErrorCallbackWrappingImplementation$Dart.$Constructor = function(){
  DOMWrapperBase$Dart.$Constructor.call(this);
}
;
_SQLStatementErrorCallbackWrappingImplementation$Dart.$Initializer = function(){
  DOMWrapperBase$Dart.$Initializer.call(this);
}
;
_SQLStatementErrorCallbackWrappingImplementation$Dart._SQLStatementErrorCallbackWrappingImplementation$$Factory = function(){
  var tmp$0 = new _SQLStatementErrorCallbackWrappingImplementation$Dart;
  tmp$0.$typeInfo = _SQLStatementErrorCallbackWrappingImplementation$Dart.$lookupRTT();
  _SQLStatementErrorCallbackWrappingImplementation$Dart.$Initializer.call(tmp$0);
  _SQLStatementErrorCallbackWrappingImplementation$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
_SQLStatementErrorCallbackWrappingImplementation$Dart.create__SQLStatementErrorCallbackWrappingImplementation$member = function(){
  return _SQLStatementErrorCallbackWrappingImplementation$Dart._SQLStatementErrorCallbackWrappingImplementation$$Factory();
}
;
_SQLStatementErrorCallbackWrappingImplementation$Dart.create__SQLStatementErrorCallbackWrappingImplementation$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _SQLStatementErrorCallbackWrappingImplementation$Dart.create__SQLStatementErrorCallbackWrappingImplementation$member();
}
;
function native__SQLStatementErrorCallbackWrappingImplementation_create__SQLStatementErrorCallbackWrappingImplementation(){
  return _SQLStatementErrorCallbackWrappingImplementation$Dart.create__SQLStatementErrorCallbackWrappingImplementation$member();
}

_SQLStatementErrorCallbackWrappingImplementation$Dart.create__SQLStatementErrorCallbackWrappingImplementation$getter = function create__SQLStatementErrorCallbackWrappingImplementation$getter(){
  return _SQLStatementErrorCallbackWrappingImplementation$Dart.create__SQLStatementErrorCallbackWrappingImplementation$named;
}
;
_SQLStatementErrorCallbackWrappingImplementation$Dart.prototype.handleEvent$member = function(transaction, error){
  return _SQLStatementErrorCallbackWrappingImplementation$Dart._handleEvent$$member_(this, transaction, error);
}
;
_SQLStatementErrorCallbackWrappingImplementation$Dart.prototype.handleEvent$named = function($n, $o, transaction, error){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _SQLStatementErrorCallbackWrappingImplementation$Dart.prototype.handleEvent$member.call(this, transaction, error);
}
;
_SQLStatementErrorCallbackWrappingImplementation$Dart.prototype.handleEvent$getter = function handleEvent$getter(){
  return $bind(_SQLStatementErrorCallbackWrappingImplementation$Dart.prototype.handleEvent$named, this);
}
;
_SQLStatementErrorCallbackWrappingImplementation$Dart._handleEvent$$member_ = function(receiver, transaction, error){
  return native__SQLStatementErrorCallbackWrappingImplementation__handleEvent(receiver, transaction, error);
}
;
_SQLStatementErrorCallbackWrappingImplementation$Dart._handleEvent$$named_ = function($n, $o, receiver, transaction, error){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return _SQLStatementErrorCallbackWrappingImplementation$Dart._handleEvent$$member_(receiver, transaction, error);
}
;
_SQLStatementErrorCallbackWrappingImplementation$Dart._handleEvent$$getter_ = function _handleEvent$$getter_(){
  return _SQLStatementErrorCallbackWrappingImplementation$Dart._handleEvent$$named_;
}
;
_SQLStatementErrorCallbackWrappingImplementation$Dart.prototype.typeName$named = function(){
  return this.typeName$getter().apply(this, arguments);
}
;
_SQLStatementErrorCallbackWrappingImplementation$Dart.prototype.typeName$getter = function(){
  return 'SQLStatementErrorCallback';
}
;
