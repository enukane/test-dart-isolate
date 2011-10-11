function _ArrayBufferWrappingImplementation$Dart(){
}

_ArrayBufferWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('_ArrayBufferWrappingImplementation$Dart'), _ArrayBufferWrappingImplementation$Dart.$RTTimplements);
}
;
_ArrayBufferWrappingImplementation$Dart.$RTTimplements = function(rtt){
  _ArrayBufferWrappingImplementation$Dart.$addTo(rtt);
}
;
_ArrayBufferWrappingImplementation$Dart.$addTo = function(target){
  var rtt = _ArrayBufferWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  DOMWrapperBase$Dart.$addTo(target);
  ArrayBuffer$Dart.$addTo(target);
}
;
_ArrayBufferWrappingImplementation$Dart.prototype.$implements$_ArrayBufferWrappingImplementation$Dart = 1;
_ArrayBufferWrappingImplementation$Dart.prototype.$implements$ArrayBuffer$Dart = 1;
_ArrayBufferWrappingImplementation$Dart.prototype.$implements$DOMWrapperBase$Dart = 1;
_ArrayBufferWrappingImplementation$Dart.prototype.$implements$DOMType$Dart = 1;
_ArrayBufferWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(_ArrayBufferWrappingImplementation$Dart, DOMWrapperBase$Dart);
_ArrayBufferWrappingImplementation$Dart.$Constructor = function(){
  DOMWrapperBase$Dart.$Constructor.call(this);
}
;
_ArrayBufferWrappingImplementation$Dart.$Initializer = function(){
  DOMWrapperBase$Dart.$Initializer.call(this);
}
;
_ArrayBufferWrappingImplementation$Dart._ArrayBufferWrappingImplementation$$Factory = function(){
  var tmp$0 = new _ArrayBufferWrappingImplementation$Dart;
  tmp$0.$typeInfo = _ArrayBufferWrappingImplementation$Dart.$lookupRTT();
  _ArrayBufferWrappingImplementation$Dart.$Initializer.call(tmp$0);
  _ArrayBufferWrappingImplementation$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
_ArrayBufferWrappingImplementation$Dart.create__ArrayBufferWrappingImplementation$member = function(){
  return _ArrayBufferWrappingImplementation$Dart._ArrayBufferWrappingImplementation$$Factory();
}
;
_ArrayBufferWrappingImplementation$Dart.create__ArrayBufferWrappingImplementation$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _ArrayBufferWrappingImplementation$Dart.create__ArrayBufferWrappingImplementation$member();
}
;
function native__ArrayBufferWrappingImplementation_create__ArrayBufferWrappingImplementation(){
  return _ArrayBufferWrappingImplementation$Dart.create__ArrayBufferWrappingImplementation$member();
}

_ArrayBufferWrappingImplementation$Dart.create__ArrayBufferWrappingImplementation$getter = function create__ArrayBufferWrappingImplementation$getter(){
  return _ArrayBufferWrappingImplementation$Dart.create__ArrayBufferWrappingImplementation$named;
}
;
_ArrayBufferWrappingImplementation$Dart.prototype.byteLength$named = function(){
  return this.byteLength$getter().apply(this, arguments);
}
;
_ArrayBufferWrappingImplementation$Dart.prototype.byteLength$getter = function(){
  return _ArrayBufferWrappingImplementation$Dart._get__ArrayBuffer_byteLength$$member_(this);
}
;
_ArrayBufferWrappingImplementation$Dart._get__ArrayBuffer_byteLength$$member_ = function(_this){
  return native__ArrayBufferWrappingImplementation__get__ArrayBuffer_byteLength(_this);
}
;
_ArrayBufferWrappingImplementation$Dart._get__ArrayBuffer_byteLength$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _ArrayBufferWrappingImplementation$Dart._get__ArrayBuffer_byteLength$$member_(_this);
}
;
_ArrayBufferWrappingImplementation$Dart._get__ArrayBuffer_byteLength$$getter_ = function _get__ArrayBuffer_byteLength$$getter_(){
  return _ArrayBufferWrappingImplementation$Dart._get__ArrayBuffer_byteLength$$named_;
}
;
_ArrayBufferWrappingImplementation$Dart.prototype.typeName$named = function(){
  return this.typeName$getter().apply(this, arguments);
}
;
_ArrayBufferWrappingImplementation$Dart.prototype.typeName$getter = function(){
  return 'ArrayBuffer';
}
;
