function _Float32ArrayWrappingImplementation$Dart(){
}

_Float32ArrayWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('_Float32ArrayWrappingImplementation$Dart'), _Float32ArrayWrappingImplementation$Dart.$RTTimplements);
}
;
_Float32ArrayWrappingImplementation$Dart.$RTTimplements = function(rtt){
  _Float32ArrayWrappingImplementation$Dart.$addTo(rtt);
}
;
_Float32ArrayWrappingImplementation$Dart.$addTo = function(target){
  var rtt = _Float32ArrayWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  _ArrayBufferViewWrappingImplementation$Dart.$addTo(target);
  Float32Array$Dart.$addTo(target);
}
;
_Float32ArrayWrappingImplementation$Dart.prototype.$implements$_Float32ArrayWrappingImplementation$Dart = 1;
_Float32ArrayWrappingImplementation$Dart.prototype.$implements$Float32Array$Dart = 1;
_Float32ArrayWrappingImplementation$Dart.prototype.$implements$ArrayBufferView$Dart = 1;
_Float32ArrayWrappingImplementation$Dart.prototype.$implements$_ArrayBufferViewWrappingImplementation$Dart = 1;
_Float32ArrayWrappingImplementation$Dart.prototype.$implements$DOMWrapperBase$Dart = 1;
_Float32ArrayWrappingImplementation$Dart.prototype.$implements$DOMType$Dart = 1;
_Float32ArrayWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(_Float32ArrayWrappingImplementation$Dart, _ArrayBufferViewWrappingImplementation$Dart);
_Float32ArrayWrappingImplementation$Dart.$Constructor = function(){
  _ArrayBufferViewWrappingImplementation$Dart.$Constructor.call(this);
}
;
_Float32ArrayWrappingImplementation$Dart.$Initializer = function(){
  _ArrayBufferViewWrappingImplementation$Dart.$Initializer.call(this);
}
;
_Float32ArrayWrappingImplementation$Dart._Float32ArrayWrappingImplementation$$Factory = function(){
  var tmp$0 = new _Float32ArrayWrappingImplementation$Dart;
  tmp$0.$typeInfo = _Float32ArrayWrappingImplementation$Dart.$lookupRTT();
  _Float32ArrayWrappingImplementation$Dart.$Initializer.call(tmp$0);
  _Float32ArrayWrappingImplementation$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
_Float32ArrayWrappingImplementation$Dart.create__Float32ArrayWrappingImplementation$member = function(){
  return _Float32ArrayWrappingImplementation$Dart._Float32ArrayWrappingImplementation$$Factory();
}
;
_Float32ArrayWrappingImplementation$Dart.create__Float32ArrayWrappingImplementation$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _Float32ArrayWrappingImplementation$Dart.create__Float32ArrayWrappingImplementation$member();
}
;
function native__Float32ArrayWrappingImplementation_create__Float32ArrayWrappingImplementation(){
  return _Float32ArrayWrappingImplementation$Dart.create__Float32ArrayWrappingImplementation$member();
}

_Float32ArrayWrappingImplementation$Dart.create__Float32ArrayWrappingImplementation$getter = function create__Float32ArrayWrappingImplementation$getter(){
  return _Float32ArrayWrappingImplementation$Dart.create__Float32ArrayWrappingImplementation$named;
}
;
_Float32ArrayWrappingImplementation$Dart.prototype.length$named = function(){
  return this.length$getter().apply(this, arguments);
}
;
_Float32ArrayWrappingImplementation$Dart.prototype.length$getter = function(){
  return _Float32ArrayWrappingImplementation$Dart._get__Float32Array_length$$member_(this);
}
;
_Float32ArrayWrappingImplementation$Dart._get__Float32Array_length$$member_ = function(_this){
  return native__Float32ArrayWrappingImplementation__get__Float32Array_length(_this);
}
;
_Float32ArrayWrappingImplementation$Dart._get__Float32Array_length$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _Float32ArrayWrappingImplementation$Dart._get__Float32Array_length$$member_(_this);
}
;
_Float32ArrayWrappingImplementation$Dart._get__Float32Array_length$$getter_ = function _get__Float32Array_length$$getter_(){
  return _Float32ArrayWrappingImplementation$Dart._get__Float32Array_length$$named_;
}
;
_Float32ArrayWrappingImplementation$Dart.prototype.subarray$member = function(start, end){
  if (end == null) {
    return _Float32ArrayWrappingImplementation$Dart._subarray$$member_(this, start);
  }
   else {
    return _Float32ArrayWrappingImplementation$Dart._subarray_2$$member_(this, start, end);
  }
}
;
_Float32ArrayWrappingImplementation$Dart.prototype.subarray$named = function($n, $o, start, end){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 1:
      end = $o.end?(++seen , $o.end):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _Float32ArrayWrappingImplementation$Dart.prototype.subarray$member.call(this, start, end);
}
;
_Float32ArrayWrappingImplementation$Dart.prototype.subarray$getter = function subarray$getter(){
  return $bind(_Float32ArrayWrappingImplementation$Dart.prototype.subarray$named, this);
}
;
_Float32ArrayWrappingImplementation$Dart._subarray$$member_ = function(receiver, start){
  return native__Float32ArrayWrappingImplementation__subarray(receiver, start);
}
;
_Float32ArrayWrappingImplementation$Dart._subarray$$named_ = function($n, $o, receiver, start){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _Float32ArrayWrappingImplementation$Dart._subarray$$member_(receiver, start);
}
;
_Float32ArrayWrappingImplementation$Dart._subarray$$getter_ = function _subarray$$getter_(){
  return _Float32ArrayWrappingImplementation$Dart._subarray$$named_;
}
;
_Float32ArrayWrappingImplementation$Dart._subarray_2$$member_ = function(receiver, start, end){
  return native__Float32ArrayWrappingImplementation__subarray_2(receiver, start, end);
}
;
_Float32ArrayWrappingImplementation$Dart._subarray_2$$named_ = function($n, $o, receiver, start, end){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return _Float32ArrayWrappingImplementation$Dart._subarray_2$$member_(receiver, start, end);
}
;
_Float32ArrayWrappingImplementation$Dart._subarray_2$$getter_ = function _subarray_2$$getter_(){
  return _Float32ArrayWrappingImplementation$Dart._subarray_2$$named_;
}
;
_Float32ArrayWrappingImplementation$Dart.prototype.typeName$named = function(){
  return this.typeName$getter().apply(this, arguments);
}
;
_Float32ArrayWrappingImplementation$Dart.prototype.typeName$getter = function(){
  return 'Float32Array';
}
;
