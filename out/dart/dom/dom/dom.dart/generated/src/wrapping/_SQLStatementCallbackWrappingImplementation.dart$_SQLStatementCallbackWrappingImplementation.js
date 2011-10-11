function _SQLStatementCallbackWrappingImplementation$Dart(){
}

_SQLStatementCallbackWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('_SQLStatementCallbackWrappingImplementation$Dart'), _SQLStatementCallbackWrappingImplementation$Dart.$RTTimplements);
}
;
_SQLStatementCallbackWrappingImplementation$Dart.$RTTimplements = function(rtt){
  _SQLStatementCallbackWrappingImplementation$Dart.$addTo(rtt);
}
;
_SQLStatementCallbackWrappingImplementation$Dart.$addTo = function(target){
  var rtt = _SQLStatementCallbackWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  DOMWrapperBase$Dart.$addTo(target);
  SQLStatementCallback$Dart.$addTo(target);
}
;
_SQLStatementCallbackWrappingImplementation$Dart.prototype.$implements$_SQLStatementCallbackWrappingImplementation$Dart = 1;
_SQLStatementCallbackWrappingImplementation$Dart.prototype.$implements$SQLStatementCallback$Dart = 1;
_SQLStatementCallbackWrappingImplementation$Dart.prototype.$implements$DOMWrapperBase$Dart = 1;
_SQLStatementCallbackWrappingImplementation$Dart.prototype.$implements$DOMType$Dart = 1;
_SQLStatementCallbackWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(_SQLStatementCallbackWrappingImplementation$Dart, DOMWrapperBase$Dart);
_SQLStatementCallbackWrappingImplementation$Dart.$Constructor = function(){
  DOMWrapperBase$Dart.$Constructor.call(this);
}
;
_SQLStatementCallbackWrappingImplementation$Dart.$Initializer = function(){
  DOMWrapperBase$Dart.$Initializer.call(this);
}
;
_SQLStatementCallbackWrappingImplementation$Dart._SQLStatementCallbackWrappingImplementation$$Factory = function(){
  var tmp$0 = new _SQLStatementCallbackWrappingImplementation$Dart;
  tmp$0.$typeInfo = _SQLStatementCallbackWrappingImplementation$Dart.$lookupRTT();
  _SQLStatementCallbackWrappingImplementation$Dart.$Initializer.call(tmp$0);
  _SQLStatementCallbackWrappingImplementation$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
_SQLStatementCallbackWrappingImplementation$Dart.create__SQLStatementCallbackWrappingImplementation$member = function(){
  return _SQLStatementCallbackWrappingImplementation$Dart._SQLStatementCallbackWrappingImplementation$$Factory();
}
;
_SQLStatementCallbackWrappingImplementation$Dart.create__SQLStatementCallbackWrappingImplementation$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _SQLStatementCallbackWrappingImplementation$Dart.create__SQLStatementCallbackWrappingImplementation$member();
}
;
function native__SQLStatementCallbackWrappingImplementation_create__SQLStatementCallbackWrappingImplementation(){
  return _SQLStatementCallbackWrappingImplementation$Dart.create__SQLStatementCallbackWrappingImplementation$member();
}

_SQLStatementCallbackWrappingImplementation$Dart.create__SQLStatementCallbackWrappingImplementation$getter = function create__SQLStatementCallbackWrappingImplementation$getter(){
  return _SQLStatementCallbackWrappingImplementation$Dart.create__SQLStatementCallbackWrappingImplementation$named;
}
;
_SQLStatementCallbackWrappingImplementation$Dart.prototype.handleEvent$member = function(transaction, resultSet){
  return _SQLStatementCallbackWrappingImplementation$Dart._handleEvent$$member_(this, transaction, resultSet);
}
;
_SQLStatementCallbackWrappingImplementation$Dart.prototype.handleEvent$named = function($n, $o, transaction, resultSet){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _SQLStatementCallbackWrappingImplementation$Dart.prototype.handleEvent$member.call(this, transaction, resultSet);
}
;
_SQLStatementCallbackWrappingImplementation$Dart.prototype.handleEvent$getter = function handleEvent$getter(){
  return $bind(_SQLStatementCallbackWrappingImplementation$Dart.prototype.handleEvent$named, this);
}
;
_SQLStatementCallbackWrappingImplementation$Dart._handleEvent$$member_ = function(receiver, transaction, resultSet){
  return native__SQLStatementCallbackWrappingImplementation__handleEvent(receiver, transaction, resultSet);
}
;
_SQLStatementCallbackWrappingImplementation$Dart._handleEvent$$named_ = function($n, $o, receiver, transaction, resultSet){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return _SQLStatementCallbackWrappingImplementation$Dart._handleEvent$$member_(receiver, transaction, resultSet);
}
;
_SQLStatementCallbackWrappingImplementation$Dart._handleEvent$$getter_ = function _handleEvent$$getter_(){
  return _SQLStatementCallbackWrappingImplementation$Dart._handleEvent$$named_;
}
;
_SQLStatementCallbackWrappingImplementation$Dart.prototype.typeName$named = function(){
  return this.typeName$getter().apply(this, arguments);
}
;
_SQLStatementCallbackWrappingImplementation$Dart.prototype.typeName$getter = function(){
  return 'SQLStatementCallback';
}
;
