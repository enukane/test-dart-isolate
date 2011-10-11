function _Int8ArrayWrappingImplementation$Dart(){
}

_Int8ArrayWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('_Int8ArrayWrappingImplementation$Dart'), _Int8ArrayWrappingImplementation$Dart.$RTTimplements);
}
;
_Int8ArrayWrappingImplementation$Dart.$RTTimplements = function(rtt){
  _Int8ArrayWrappingImplementation$Dart.$addTo(rtt);
}
;
_Int8ArrayWrappingImplementation$Dart.$addTo = function(target){
  var rtt = _Int8ArrayWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  _ArrayBufferViewWrappingImplementation$Dart.$addTo(target);
  Int8Array$Dart.$addTo(target);
}
;
_Int8ArrayWrappingImplementation$Dart.prototype.$implements$_Int8ArrayWrappingImplementation$Dart = 1;
_Int8ArrayWrappingImplementation$Dart.prototype.$implements$Int8Array$Dart = 1;
_Int8ArrayWrappingImplementation$Dart.prototype.$implements$ArrayBufferView$Dart = 1;
_Int8ArrayWrappingImplementation$Dart.prototype.$implements$_ArrayBufferViewWrappingImplementation$Dart = 1;
_Int8ArrayWrappingImplementation$Dart.prototype.$implements$DOMWrapperBase$Dart = 1;
_Int8ArrayWrappingImplementation$Dart.prototype.$implements$DOMType$Dart = 1;
_Int8ArrayWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(_Int8ArrayWrappingImplementation$Dart, _ArrayBufferViewWrappingImplementation$Dart);
_Int8ArrayWrappingImplementation$Dart.$Constructor = function(){
  _ArrayBufferViewWrappingImplementation$Dart.$Constructor.call(this);
}
;
_Int8ArrayWrappingImplementation$Dart.$Initializer = function(){
  _ArrayBufferViewWrappingImplementation$Dart.$Initializer.call(this);
}
;
_Int8ArrayWrappingImplementation$Dart._Int8ArrayWrappingImplementation$$Factory = function(){
  var tmp$0 = new _Int8ArrayWrappingImplementation$Dart;
  tmp$0.$typeInfo = _Int8ArrayWrappingImplementation$Dart.$lookupRTT();
  _Int8ArrayWrappingImplementation$Dart.$Initializer.call(tmp$0);
  _Int8ArrayWrappingImplementation$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
_Int8ArrayWrappingImplementation$Dart.create__Int8ArrayWrappingImplementation$member = function(){
  return _Int8ArrayWrappingImplementation$Dart._Int8ArrayWrappingImplementation$$Factory();
}
;
_Int8ArrayWrappingImplementation$Dart.create__Int8ArrayWrappingImplementation$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _Int8ArrayWrappingImplementation$Dart.create__Int8ArrayWrappingImplementation$member();
}
;
function native__Int8ArrayWrappingImplementation_create__Int8ArrayWrappingImplementation(){
  return _Int8ArrayWrappingImplementation$Dart.create__Int8ArrayWrappingImplementation$member();
}

_Int8ArrayWrappingImplementation$Dart.create__Int8ArrayWrappingImplementation$getter = function create__Int8ArrayWrappingImplementation$getter(){
  return _Int8ArrayWrappingImplementation$Dart.create__Int8ArrayWrappingImplementation$named;
}
;
_Int8ArrayWrappingImplementation$Dart.prototype.length$named = function(){
  return this.length$getter().apply(this, arguments);
}
;
_Int8ArrayWrappingImplementation$Dart.prototype.length$getter = function(){
  return _Int8ArrayWrappingImplementation$Dart._get__Int8Array_length$$member_(this);
}
;
_Int8ArrayWrappingImplementation$Dart._get__Int8Array_length$$member_ = function(_this){
  return native__Int8ArrayWrappingImplementation__get__Int8Array_length(_this);
}
;
_Int8ArrayWrappingImplementation$Dart._get__Int8Array_length$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _Int8ArrayWrappingImplementation$Dart._get__Int8Array_length$$member_(_this);
}
;
_Int8ArrayWrappingImplementation$Dart._get__Int8Array_length$$getter_ = function _get__Int8Array_length$$getter_(){
  return _Int8ArrayWrappingImplementation$Dart._get__Int8Array_length$$named_;
}
;
_Int8ArrayWrappingImplementation$Dart.prototype.subarray$member = function(start, end){
  if (end == null) {
    return _Int8ArrayWrappingImplementation$Dart._subarray$$member_(this, start);
  }
   else {
    return _Int8ArrayWrappingImplementation$Dart._subarray_2$$member_(this, start, end);
  }
}
;
_Int8ArrayWrappingImplementation$Dart.prototype.subarray$named = function($n, $o, start, end){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 1:
      end = $o.end?(++seen , $o.end):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _Int8ArrayWrappingImplementation$Dart.prototype.subarray$member.call(this, start, end);
}
;
_Int8ArrayWrappingImplementation$Dart.prototype.subarray$getter = function subarray$getter(){
  return $bind(_Int8ArrayWrappingImplementation$Dart.prototype.subarray$named, this);
}
;
_Int8ArrayWrappingImplementation$Dart._subarray$$member_ = function(receiver, start){
  return native__Int8ArrayWrappingImplementation__subarray(receiver, start);
}
;
_Int8ArrayWrappingImplementation$Dart._subarray$$named_ = function($n, $o, receiver, start){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _Int8ArrayWrappingImplementation$Dart._subarray$$member_(receiver, start);
}
;
_Int8ArrayWrappingImplementation$Dart._subarray$$getter_ = function _subarray$$getter_(){
  return _Int8ArrayWrappingImplementation$Dart._subarray$$named_;
}
;
_Int8ArrayWrappingImplementation$Dart._subarray_2$$member_ = function(receiver, start, end){
  return native__Int8ArrayWrappingImplementation__subarray_2(receiver, start, end);
}
;
_Int8ArrayWrappingImplementation$Dart._subarray_2$$named_ = function($n, $o, receiver, start, end){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return _Int8ArrayWrappingImplementation$Dart._subarray_2$$member_(receiver, start, end);
}
;
_Int8ArrayWrappingImplementation$Dart._subarray_2$$getter_ = function _subarray_2$$getter_(){
  return _Int8ArrayWrappingImplementation$Dart._subarray_2$$named_;
}
;
_Int8ArrayWrappingImplementation$Dart.prototype.typeName$named = function(){
  return this.typeName$getter().apply(this, arguments);
}
;
_Int8ArrayWrappingImplementation$Dart.prototype.typeName$getter = function(){
  return 'Int8Array';
}
;
