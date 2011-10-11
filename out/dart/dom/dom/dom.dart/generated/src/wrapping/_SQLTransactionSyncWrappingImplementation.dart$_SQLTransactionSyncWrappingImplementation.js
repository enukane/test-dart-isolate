function _SQLTransactionSyncWrappingImplementation$Dart(){
}

_SQLTransactionSyncWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('_SQLTransactionSyncWrappingImplementation$Dart'), _SQLTransactionSyncWrappingImplementation$Dart.$RTTimplements);
}
;
_SQLTransactionSyncWrappingImplementation$Dart.$RTTimplements = function(rtt){
  _SQLTransactionSyncWrappingImplementation$Dart.$addTo(rtt);
}
;
_SQLTransactionSyncWrappingImplementation$Dart.$addTo = function(target){
  var rtt = _SQLTransactionSyncWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  DOMWrapperBase$Dart.$addTo(target);
  SQLTransactionSync$Dart.$addTo(target);
}
;
_SQLTransactionSyncWrappingImplementation$Dart.prototype.$implements$_SQLTransactionSyncWrappingImplementation$Dart = 1;
_SQLTransactionSyncWrappingImplementation$Dart.prototype.$implements$SQLTransactionSync$Dart = 1;
_SQLTransactionSyncWrappingImplementation$Dart.prototype.$implements$DOMWrapperBase$Dart = 1;
_SQLTransactionSyncWrappingImplementation$Dart.prototype.$implements$DOMType$Dart = 1;
_SQLTransactionSyncWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(_SQLTransactionSyncWrappingImplementation$Dart, DOMWrapperBase$Dart);
_SQLTransactionSyncWrappingImplementation$Dart.$Constructor = function(){
  DOMWrapperBase$Dart.$Constructor.call(this);
}
;
_SQLTransactionSyncWrappingImplementation$Dart.$Initializer = function(){
  DOMWrapperBase$Dart.$Initializer.call(this);
}
;
_SQLTransactionSyncWrappingImplementation$Dart._SQLTransactionSyncWrappingImplementation$$Factory = function(){
  var tmp$0 = new _SQLTransactionSyncWrappingImplementation$Dart;
  tmp$0.$typeInfo = _SQLTransactionSyncWrappingImplementation$Dart.$lookupRTT();
  _SQLTransactionSyncWrappingImplementation$Dart.$Initializer.call(tmp$0);
  _SQLTransactionSyncWrappingImplementation$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
_SQLTransactionSyncWrappingImplementation$Dart.create__SQLTransactionSyncWrappingImplementation$member = function(){
  return _SQLTransactionSyncWrappingImplementation$Dart._SQLTransactionSyncWrappingImplementation$$Factory();
}
;
_SQLTransactionSyncWrappingImplementation$Dart.create__SQLTransactionSyncWrappingImplementation$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _SQLTransactionSyncWrappingImplementation$Dart.create__SQLTransactionSyncWrappingImplementation$member();
}
;
function native__SQLTransactionSyncWrappingImplementation_create__SQLTransactionSyncWrappingImplementation(){
  return _SQLTransactionSyncWrappingImplementation$Dart.create__SQLTransactionSyncWrappingImplementation$member();
}

_SQLTransactionSyncWrappingImplementation$Dart.create__SQLTransactionSyncWrappingImplementation$getter = function create__SQLTransactionSyncWrappingImplementation$getter(){
  return _SQLTransactionSyncWrappingImplementation$Dart.create__SQLTransactionSyncWrappingImplementation$named;
}
;
_SQLTransactionSyncWrappingImplementation$Dart.prototype.typeName$named = function(){
  return this.typeName$getter().apply(this, arguments);
}
;
_SQLTransactionSyncWrappingImplementation$Dart.prototype.typeName$getter = function(){
  return 'SQLTransactionSync';
}
;
