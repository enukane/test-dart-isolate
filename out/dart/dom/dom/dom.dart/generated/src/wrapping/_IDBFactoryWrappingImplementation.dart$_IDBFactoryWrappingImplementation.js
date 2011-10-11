function _IDBFactoryWrappingImplementation$Dart(){
}

_IDBFactoryWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('_IDBFactoryWrappingImplementation$Dart'), _IDBFactoryWrappingImplementation$Dart.$RTTimplements);
}
;
_IDBFactoryWrappingImplementation$Dart.$RTTimplements = function(rtt){
  _IDBFactoryWrappingImplementation$Dart.$addTo(rtt);
}
;
_IDBFactoryWrappingImplementation$Dart.$addTo = function(target){
  var rtt = _IDBFactoryWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  DOMWrapperBase$Dart.$addTo(target);
  IDBFactory$Dart.$addTo(target);
}
;
_IDBFactoryWrappingImplementation$Dart.prototype.$implements$_IDBFactoryWrappingImplementation$Dart = 1;
_IDBFactoryWrappingImplementation$Dart.prototype.$implements$IDBFactory$Dart = 1;
_IDBFactoryWrappingImplementation$Dart.prototype.$implements$DOMWrapperBase$Dart = 1;
_IDBFactoryWrappingImplementation$Dart.prototype.$implements$DOMType$Dart = 1;
_IDBFactoryWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(_IDBFactoryWrappingImplementation$Dart, DOMWrapperBase$Dart);
_IDBFactoryWrappingImplementation$Dart.$Constructor = function(){
  DOMWrapperBase$Dart.$Constructor.call(this);
}
;
_IDBFactoryWrappingImplementation$Dart.$Initializer = function(){
  DOMWrapperBase$Dart.$Initializer.call(this);
}
;
_IDBFactoryWrappingImplementation$Dart._IDBFactoryWrappingImplementation$$Factory = function(){
  var tmp$0 = new _IDBFactoryWrappingImplementation$Dart;
  tmp$0.$typeInfo = _IDBFactoryWrappingImplementation$Dart.$lookupRTT();
  _IDBFactoryWrappingImplementation$Dart.$Initializer.call(tmp$0);
  _IDBFactoryWrappingImplementation$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
_IDBFactoryWrappingImplementation$Dart.create__IDBFactoryWrappingImplementation$member = function(){
  return _IDBFactoryWrappingImplementation$Dart._IDBFactoryWrappingImplementation$$Factory();
}
;
_IDBFactoryWrappingImplementation$Dart.create__IDBFactoryWrappingImplementation$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _IDBFactoryWrappingImplementation$Dart.create__IDBFactoryWrappingImplementation$member();
}
;
function native__IDBFactoryWrappingImplementation_create__IDBFactoryWrappingImplementation(){
  return _IDBFactoryWrappingImplementation$Dart.create__IDBFactoryWrappingImplementation$member();
}

_IDBFactoryWrappingImplementation$Dart.create__IDBFactoryWrappingImplementation$getter = function create__IDBFactoryWrappingImplementation$getter(){
  return _IDBFactoryWrappingImplementation$Dart.create__IDBFactoryWrappingImplementation$named;
}
;
_IDBFactoryWrappingImplementation$Dart.prototype.getDatabaseNames$member = function(){
  return _IDBFactoryWrappingImplementation$Dart._getDatabaseNames$$member_(this);
}
;
_IDBFactoryWrappingImplementation$Dart.prototype.getDatabaseNames$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _IDBFactoryWrappingImplementation$Dart.prototype.getDatabaseNames$member.call(this);
}
;
_IDBFactoryWrappingImplementation$Dart.prototype.getDatabaseNames$getter = function getDatabaseNames$getter(){
  return $bind(_IDBFactoryWrappingImplementation$Dart.prototype.getDatabaseNames$named, this);
}
;
_IDBFactoryWrappingImplementation$Dart._getDatabaseNames$$member_ = function(receiver){
  return native__IDBFactoryWrappingImplementation__getDatabaseNames(receiver);
}
;
_IDBFactoryWrappingImplementation$Dart._getDatabaseNames$$named_ = function($n, $o, receiver){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _IDBFactoryWrappingImplementation$Dart._getDatabaseNames$$member_(receiver);
}
;
_IDBFactoryWrappingImplementation$Dart._getDatabaseNames$$getter_ = function _getDatabaseNames$$getter_(){
  return _IDBFactoryWrappingImplementation$Dart._getDatabaseNames$$named_;
}
;
_IDBFactoryWrappingImplementation$Dart.prototype.open$member = function(name_0){
  return _IDBFactoryWrappingImplementation$Dart._open$$member_(this, name_0);
}
;
_IDBFactoryWrappingImplementation$Dart.prototype.open$named = function($n, $o, name_0){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _IDBFactoryWrappingImplementation$Dart.prototype.open$member.call(this, name_0);
}
;
_IDBFactoryWrappingImplementation$Dart.prototype.open$getter = function open$getter(){
  return $bind(_IDBFactoryWrappingImplementation$Dart.prototype.open$named, this);
}
;
_IDBFactoryWrappingImplementation$Dart._open$$member_ = function(receiver, name_0){
  return native__IDBFactoryWrappingImplementation__open(receiver, name_0);
}
;
_IDBFactoryWrappingImplementation$Dart._open$$named_ = function($n, $o, receiver, name_0){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _IDBFactoryWrappingImplementation$Dart._open$$member_(receiver, name_0);
}
;
_IDBFactoryWrappingImplementation$Dart._open$$getter_ = function _open$$getter_(){
  return _IDBFactoryWrappingImplementation$Dart._open$$named_;
}
;
_IDBFactoryWrappingImplementation$Dart.prototype.typeName$named = function(){
  return this.typeName$getter().apply(this, arguments);
}
;
_IDBFactoryWrappingImplementation$Dart.prototype.typeName$getter = function(){
  return 'IDBFactory';
}
;
