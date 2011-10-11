function _ArrayBufferViewWrappingImplementation$Dart(){
}

_ArrayBufferViewWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('_ArrayBufferViewWrappingImplementation$Dart'), _ArrayBufferViewWrappingImplementation$Dart.$RTTimplements);
}
;
_ArrayBufferViewWrappingImplementation$Dart.$RTTimplements = function(rtt){
  _ArrayBufferViewWrappingImplementation$Dart.$addTo(rtt);
}
;
_ArrayBufferViewWrappingImplementation$Dart.$addTo = function(target){
  var rtt = _ArrayBufferViewWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  DOMWrapperBase$Dart.$addTo(target);
  ArrayBufferView$Dart.$addTo(target);
}
;
_ArrayBufferViewWrappingImplementation$Dart.prototype.$implements$_ArrayBufferViewWrappingImplementation$Dart = 1;
_ArrayBufferViewWrappingImplementation$Dart.prototype.$implements$ArrayBufferView$Dart = 1;
_ArrayBufferViewWrappingImplementation$Dart.prototype.$implements$DOMWrapperBase$Dart = 1;
_ArrayBufferViewWrappingImplementation$Dart.prototype.$implements$DOMType$Dart = 1;
_ArrayBufferViewWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(_ArrayBufferViewWrappingImplementation$Dart, DOMWrapperBase$Dart);
_ArrayBufferViewWrappingImplementation$Dart.$Constructor = function(){
  DOMWrapperBase$Dart.$Constructor.call(this);
}
;
_ArrayBufferViewWrappingImplementation$Dart.$Initializer = function(){
  DOMWrapperBase$Dart.$Initializer.call(this);
}
;
_ArrayBufferViewWrappingImplementation$Dart._ArrayBufferViewWrappingImplementation$$Factory = function(){
  var tmp$0 = new _ArrayBufferViewWrappingImplementation$Dart;
  tmp$0.$typeInfo = _ArrayBufferViewWrappingImplementation$Dart.$lookupRTT();
  _ArrayBufferViewWrappingImplementation$Dart.$Initializer.call(tmp$0);
  _ArrayBufferViewWrappingImplementation$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
_ArrayBufferViewWrappingImplementation$Dart.create__ArrayBufferViewWrappingImplementation$member = function(){
  return _ArrayBufferViewWrappingImplementation$Dart._ArrayBufferViewWrappingImplementation$$Factory();
}
;
_ArrayBufferViewWrappingImplementation$Dart.create__ArrayBufferViewWrappingImplementation$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _ArrayBufferViewWrappingImplementation$Dart.create__ArrayBufferViewWrappingImplementation$member();
}
;
function native__ArrayBufferViewWrappingImplementation_create__ArrayBufferViewWrappingImplementation(){
  return _ArrayBufferViewWrappingImplementation$Dart.create__ArrayBufferViewWrappingImplementation$member();
}

_ArrayBufferViewWrappingImplementation$Dart.create__ArrayBufferViewWrappingImplementation$getter = function create__ArrayBufferViewWrappingImplementation$getter(){
  return _ArrayBufferViewWrappingImplementation$Dart.create__ArrayBufferViewWrappingImplementation$named;
}
;
_ArrayBufferViewWrappingImplementation$Dart.prototype.buffer$named = function(){
  return this.buffer$getter().apply(this, arguments);
}
;
_ArrayBufferViewWrappingImplementation$Dart.prototype.buffer$getter = function(){
  return _ArrayBufferViewWrappingImplementation$Dart._get__ArrayBufferView_buffer$$member_(this);
}
;
_ArrayBufferViewWrappingImplementation$Dart._get__ArrayBufferView_buffer$$member_ = function(_this){
  return native__ArrayBufferViewWrappingImplementation__get__ArrayBufferView_buffer(_this);
}
;
_ArrayBufferViewWrappingImplementation$Dart._get__ArrayBufferView_buffer$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _ArrayBufferViewWrappingImplementation$Dart._get__ArrayBufferView_buffer$$member_(_this);
}
;
_ArrayBufferViewWrappingImplementation$Dart._get__ArrayBufferView_buffer$$getter_ = function _get__ArrayBufferView_buffer$$getter_(){
  return _ArrayBufferViewWrappingImplementation$Dart._get__ArrayBufferView_buffer$$named_;
}
;
_ArrayBufferViewWrappingImplementation$Dart.prototype.byteLength$named = function(){
  return this.byteLength$getter().apply(this, arguments);
}
;
_ArrayBufferViewWrappingImplementation$Dart.prototype.byteLength$getter = function(){
  return _ArrayBufferViewWrappingImplementation$Dart._get__ArrayBufferView_byteLength$$member_(this);
}
;
_ArrayBufferViewWrappingImplementation$Dart._get__ArrayBufferView_byteLength$$member_ = function(_this){
  return native__ArrayBufferViewWrappingImplementation__get__ArrayBufferView_byteLength(_this);
}
;
_ArrayBufferViewWrappingImplementation$Dart._get__ArrayBufferView_byteLength$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _ArrayBufferViewWrappingImplementation$Dart._get__ArrayBufferView_byteLength$$member_(_this);
}
;
_ArrayBufferViewWrappingImplementation$Dart._get__ArrayBufferView_byteLength$$getter_ = function _get__ArrayBufferView_byteLength$$getter_(){
  return _ArrayBufferViewWrappingImplementation$Dart._get__ArrayBufferView_byteLength$$named_;
}
;
_ArrayBufferViewWrappingImplementation$Dart.prototype.byteOffset$named = function(){
  return this.byteOffset$getter().apply(this, arguments);
}
;
_ArrayBufferViewWrappingImplementation$Dart.prototype.byteOffset$getter = function(){
  return _ArrayBufferViewWrappingImplementation$Dart._get__ArrayBufferView_byteOffset$$member_(this);
}
;
_ArrayBufferViewWrappingImplementation$Dart._get__ArrayBufferView_byteOffset$$member_ = function(_this){
  return native__ArrayBufferViewWrappingImplementation__get__ArrayBufferView_byteOffset(_this);
}
;
_ArrayBufferViewWrappingImplementation$Dart._get__ArrayBufferView_byteOffset$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _ArrayBufferViewWrappingImplementation$Dart._get__ArrayBufferView_byteOffset$$member_(_this);
}
;
_ArrayBufferViewWrappingImplementation$Dart._get__ArrayBufferView_byteOffset$$getter_ = function _get__ArrayBufferView_byteOffset$$getter_(){
  return _ArrayBufferViewWrappingImplementation$Dart._get__ArrayBufferView_byteOffset$$named_;
}
;
_ArrayBufferViewWrappingImplementation$Dart.prototype.typeName$named = function(){
  return this.typeName$getter().apply(this, arguments);
}
;
_ArrayBufferViewWrappingImplementation$Dart.prototype.typeName$getter = function(){
  return 'ArrayBufferView';
}
;
