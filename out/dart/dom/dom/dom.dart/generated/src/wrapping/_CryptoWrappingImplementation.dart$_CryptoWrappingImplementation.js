function _CryptoWrappingImplementation$Dart(){
}

_CryptoWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('_CryptoWrappingImplementation$Dart'), _CryptoWrappingImplementation$Dart.$RTTimplements);
}
;
_CryptoWrappingImplementation$Dart.$RTTimplements = function(rtt){
  _CryptoWrappingImplementation$Dart.$addTo(rtt);
}
;
_CryptoWrappingImplementation$Dart.$addTo = function(target){
  var rtt = _CryptoWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  DOMWrapperBase$Dart.$addTo(target);
  Crypto$Dart.$addTo(target);
}
;
_CryptoWrappingImplementation$Dart.prototype.$implements$_CryptoWrappingImplementation$Dart = 1;
_CryptoWrappingImplementation$Dart.prototype.$implements$Crypto$Dart = 1;
_CryptoWrappingImplementation$Dart.prototype.$implements$DOMWrapperBase$Dart = 1;
_CryptoWrappingImplementation$Dart.prototype.$implements$DOMType$Dart = 1;
_CryptoWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(_CryptoWrappingImplementation$Dart, DOMWrapperBase$Dart);
_CryptoWrappingImplementation$Dart.$Constructor = function(){
  DOMWrapperBase$Dart.$Constructor.call(this);
}
;
_CryptoWrappingImplementation$Dart.$Initializer = function(){
  DOMWrapperBase$Dart.$Initializer.call(this);
}
;
_CryptoWrappingImplementation$Dart._CryptoWrappingImplementation$$Factory = function(){
  var tmp$0 = new _CryptoWrappingImplementation$Dart;
  tmp$0.$typeInfo = _CryptoWrappingImplementation$Dart.$lookupRTT();
  _CryptoWrappingImplementation$Dart.$Initializer.call(tmp$0);
  _CryptoWrappingImplementation$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
_CryptoWrappingImplementation$Dart.create__CryptoWrappingImplementation$member = function(){
  return _CryptoWrappingImplementation$Dart._CryptoWrappingImplementation$$Factory();
}
;
_CryptoWrappingImplementation$Dart.create__CryptoWrappingImplementation$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _CryptoWrappingImplementation$Dart.create__CryptoWrappingImplementation$member();
}
;
function native__CryptoWrappingImplementation_create__CryptoWrappingImplementation(){
  return _CryptoWrappingImplementation$Dart.create__CryptoWrappingImplementation$member();
}

_CryptoWrappingImplementation$Dart.create__CryptoWrappingImplementation$getter = function create__CryptoWrappingImplementation$getter(){
  return _CryptoWrappingImplementation$Dart.create__CryptoWrappingImplementation$named;
}
;
_CryptoWrappingImplementation$Dart.prototype.getRandomValues$member = function(array){
  _CryptoWrappingImplementation$Dart._getRandomValues$$member_(this, array);
  return;
}
;
_CryptoWrappingImplementation$Dart.prototype.getRandomValues$named = function($n, $o, array){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _CryptoWrappingImplementation$Dart.prototype.getRandomValues$member.call(this, array);
}
;
_CryptoWrappingImplementation$Dart.prototype.getRandomValues$getter = function getRandomValues$getter(){
  return $bind(_CryptoWrappingImplementation$Dart.prototype.getRandomValues$named, this);
}
;
_CryptoWrappingImplementation$Dart._getRandomValues$$member_ = function(receiver, array){
  return native__CryptoWrappingImplementation__getRandomValues(receiver, array);
}
;
_CryptoWrappingImplementation$Dart._getRandomValues$$named_ = function($n, $o, receiver, array){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _CryptoWrappingImplementation$Dart._getRandomValues$$member_(receiver, array);
}
;
_CryptoWrappingImplementation$Dart._getRandomValues$$getter_ = function _getRandomValues$$getter_(){
  return _CryptoWrappingImplementation$Dart._getRandomValues$$named_;
}
;
_CryptoWrappingImplementation$Dart.prototype.typeName$named = function(){
  return this.typeName$getter().apply(this, arguments);
}
;
_CryptoWrappingImplementation$Dart.prototype.typeName$getter = function(){
  return 'Crypto';
}
;
