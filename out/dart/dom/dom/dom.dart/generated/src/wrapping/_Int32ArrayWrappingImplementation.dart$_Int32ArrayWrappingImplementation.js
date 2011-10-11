function _Int32ArrayWrappingImplementation$Dart(){
}

_Int32ArrayWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('_Int32ArrayWrappingImplementation$Dart'), _Int32ArrayWrappingImplementation$Dart.$RTTimplements);
}
;
_Int32ArrayWrappingImplementation$Dart.$RTTimplements = function(rtt){
  _Int32ArrayWrappingImplementation$Dart.$addTo(rtt);
}
;
_Int32ArrayWrappingImplementation$Dart.$addTo = function(target){
  var rtt = _Int32ArrayWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  _ArrayBufferViewWrappingImplementation$Dart.$addTo(target);
  Int32Array$Dart.$addTo(target);
}
;
_Int32ArrayWrappingImplementation$Dart.prototype.$implements$_Int32ArrayWrappingImplementation$Dart = 1;
_Int32ArrayWrappingImplementation$Dart.prototype.$implements$Int32Array$Dart = 1;
_Int32ArrayWrappingImplementation$Dart.prototype.$implements$ArrayBufferView$Dart = 1;
_Int32ArrayWrappingImplementation$Dart.prototype.$implements$_ArrayBufferViewWrappingImplementation$Dart = 1;
_Int32ArrayWrappingImplementation$Dart.prototype.$implements$DOMWrapperBase$Dart = 1;
_Int32ArrayWrappingImplementation$Dart.prototype.$implements$DOMType$Dart = 1;
_Int32ArrayWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(_Int32ArrayWrappingImplementation$Dart, _ArrayBufferViewWrappingImplementation$Dart);
_Int32ArrayWrappingImplementation$Dart.$Constructor = function(){
  _ArrayBufferViewWrappingImplementation$Dart.$Constructor.call(this);
}
;
_Int32ArrayWrappingImplementation$Dart.$Initializer = function(){
  _ArrayBufferViewWrappingImplementation$Dart.$Initializer.call(this);
}
;
_Int32ArrayWrappingImplementation$Dart._Int32ArrayWrappingImplementation$$Factory = function(){
  var tmp$0 = new _Int32ArrayWrappingImplementation$Dart;
  tmp$0.$typeInfo = _Int32ArrayWrappingImplementation$Dart.$lookupRTT();
  _Int32ArrayWrappingImplementation$Dart.$Initializer.call(tmp$0);
  _Int32ArrayWrappingImplementation$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
_Int32ArrayWrappingImplementation$Dart.create__Int32ArrayWrappingImplementation$member = function(){
  return _Int32ArrayWrappingImplementation$Dart._Int32ArrayWrappingImplementation$$Factory();
}
;
_Int32ArrayWrappingImplementation$Dart.create__Int32ArrayWrappingImplementation$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _Int32ArrayWrappingImplementation$Dart.create__Int32ArrayWrappingImplementation$member();
}
;
function native__Int32ArrayWrappingImplementation_create__Int32ArrayWrappingImplementation(){
  return _Int32ArrayWrappingImplementation$Dart.create__Int32ArrayWrappingImplementation$member();
}

_Int32ArrayWrappingImplementation$Dart.create__Int32ArrayWrappingImplementation$getter = function create__Int32ArrayWrappingImplementation$getter(){
  return _Int32ArrayWrappingImplementation$Dart.create__Int32ArrayWrappingImplementation$named;
}
;
_Int32ArrayWrappingImplementation$Dart.prototype.length$named = function(){
  return this.length$getter().apply(this, arguments);
}
;
_Int32ArrayWrappingImplementation$Dart.prototype.length$getter = function(){
  return _Int32ArrayWrappingImplementation$Dart._get__Int32Array_length$$member_(this);
}
;
_Int32ArrayWrappingImplementation$Dart._get__Int32Array_length$$member_ = function(_this){
  return native__Int32ArrayWrappingImplementation__get__Int32Array_length(_this);
}
;
_Int32ArrayWrappingImplementation$Dart._get__Int32Array_length$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _Int32ArrayWrappingImplementation$Dart._get__Int32Array_length$$member_(_this);
}
;
_Int32ArrayWrappingImplementation$Dart._get__Int32Array_length$$getter_ = function _get__Int32Array_length$$getter_(){
  return _Int32ArrayWrappingImplementation$Dart._get__Int32Array_length$$named_;
}
;
_Int32ArrayWrappingImplementation$Dart.prototype.subarray$member = function(start, end){
  if (end == null) {
    return _Int32ArrayWrappingImplementation$Dart._subarray$$member_(this, start);
  }
   else {
    return _Int32ArrayWrappingImplementation$Dart._subarray_2$$member_(this, start, end);
  }
}
;
_Int32ArrayWrappingImplementation$Dart.prototype.subarray$named = function($n, $o, start, end){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 1:
      end = $o.end?(++seen , $o.end):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _Int32ArrayWrappingImplementation$Dart.prototype.subarray$member.call(this, start, end);
}
;
_Int32ArrayWrappingImplementation$Dart.prototype.subarray$getter = function subarray$getter(){
  return $bind(_Int32ArrayWrappingImplementation$Dart.prototype.subarray$named, this);
}
;
_Int32ArrayWrappingImplementation$Dart._subarray$$member_ = function(receiver, start){
  return native__Int32ArrayWrappingImplementation__subarray(receiver, start);
}
;
_Int32ArrayWrappingImplementation$Dart._subarray$$named_ = function($n, $o, receiver, start){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _Int32ArrayWrappingImplementation$Dart._subarray$$member_(receiver, start);
}
;
_Int32ArrayWrappingImplementation$Dart._subarray$$getter_ = function _subarray$$getter_(){
  return _Int32ArrayWrappingImplementation$Dart._subarray$$named_;
}
;
_Int32ArrayWrappingImplementation$Dart._subarray_2$$member_ = function(receiver, start, end){
  return native__Int32ArrayWrappingImplementation__subarray_2(receiver, start, end);
}
;
_Int32ArrayWrappingImplementation$Dart._subarray_2$$named_ = function($n, $o, receiver, start, end){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return _Int32ArrayWrappingImplementation$Dart._subarray_2$$member_(receiver, start, end);
}
;
_Int32ArrayWrappingImplementation$Dart._subarray_2$$getter_ = function _subarray_2$$getter_(){
  return _Int32ArrayWrappingImplementation$Dart._subarray_2$$named_;
}
;
_Int32ArrayWrappingImplementation$Dart.prototype.typeName$named = function(){
  return this.typeName$getter().apply(this, arguments);
}
;
_Int32ArrayWrappingImplementation$Dart.prototype.typeName$getter = function(){
  return 'Int32Array';
}
;
