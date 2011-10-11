function _Uint8ArrayWrappingImplementation$Dart(){
}

_Uint8ArrayWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('_Uint8ArrayWrappingImplementation$Dart'), _Uint8ArrayWrappingImplementation$Dart.$RTTimplements);
}
;
_Uint8ArrayWrappingImplementation$Dart.$RTTimplements = function(rtt){
  _Uint8ArrayWrappingImplementation$Dart.$addTo(rtt);
}
;
_Uint8ArrayWrappingImplementation$Dart.$addTo = function(target){
  var rtt = _Uint8ArrayWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  _ArrayBufferViewWrappingImplementation$Dart.$addTo(target);
  Uint8Array$Dart.$addTo(target);
}
;
_Uint8ArrayWrappingImplementation$Dart.prototype.$implements$_Uint8ArrayWrappingImplementation$Dart = 1;
_Uint8ArrayWrappingImplementation$Dart.prototype.$implements$Uint8Array$Dart = 1;
_Uint8ArrayWrappingImplementation$Dart.prototype.$implements$ArrayBufferView$Dart = 1;
_Uint8ArrayWrappingImplementation$Dart.prototype.$implements$_ArrayBufferViewWrappingImplementation$Dart = 1;
_Uint8ArrayWrappingImplementation$Dart.prototype.$implements$DOMWrapperBase$Dart = 1;
_Uint8ArrayWrappingImplementation$Dart.prototype.$implements$DOMType$Dart = 1;
_Uint8ArrayWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(_Uint8ArrayWrappingImplementation$Dart, _ArrayBufferViewWrappingImplementation$Dart);
_Uint8ArrayWrappingImplementation$Dart.$Constructor = function(){
  _ArrayBufferViewWrappingImplementation$Dart.$Constructor.call(this);
}
;
_Uint8ArrayWrappingImplementation$Dart.$Initializer = function(){
  _ArrayBufferViewWrappingImplementation$Dart.$Initializer.call(this);
}
;
_Uint8ArrayWrappingImplementation$Dart._Uint8ArrayWrappingImplementation$$Factory = function(){
  var tmp$0 = new _Uint8ArrayWrappingImplementation$Dart;
  tmp$0.$typeInfo = _Uint8ArrayWrappingImplementation$Dart.$lookupRTT();
  _Uint8ArrayWrappingImplementation$Dart.$Initializer.call(tmp$0);
  _Uint8ArrayWrappingImplementation$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
_Uint8ArrayWrappingImplementation$Dart.create__Uint8ArrayWrappingImplementation$member = function(){
  return _Uint8ArrayWrappingImplementation$Dart._Uint8ArrayWrappingImplementation$$Factory();
}
;
_Uint8ArrayWrappingImplementation$Dart.create__Uint8ArrayWrappingImplementation$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _Uint8ArrayWrappingImplementation$Dart.create__Uint8ArrayWrappingImplementation$member();
}
;
function native__Uint8ArrayWrappingImplementation_create__Uint8ArrayWrappingImplementation(){
  return _Uint8ArrayWrappingImplementation$Dart.create__Uint8ArrayWrappingImplementation$member();
}

_Uint8ArrayWrappingImplementation$Dart.create__Uint8ArrayWrappingImplementation$getter = function create__Uint8ArrayWrappingImplementation$getter(){
  return _Uint8ArrayWrappingImplementation$Dart.create__Uint8ArrayWrappingImplementation$named;
}
;
_Uint8ArrayWrappingImplementation$Dart.prototype.length$named = function(){
  return this.length$getter().apply(this, arguments);
}
;
_Uint8ArrayWrappingImplementation$Dart.prototype.length$getter = function(){
  return _Uint8ArrayWrappingImplementation$Dart._get__Uint8Array_length$$member_(this);
}
;
_Uint8ArrayWrappingImplementation$Dart._get__Uint8Array_length$$member_ = function(_this){
  return native__Uint8ArrayWrappingImplementation__get__Uint8Array_length(_this);
}
;
_Uint8ArrayWrappingImplementation$Dart._get__Uint8Array_length$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _Uint8ArrayWrappingImplementation$Dart._get__Uint8Array_length$$member_(_this);
}
;
_Uint8ArrayWrappingImplementation$Dart._get__Uint8Array_length$$getter_ = function _get__Uint8Array_length$$getter_(){
  return _Uint8ArrayWrappingImplementation$Dart._get__Uint8Array_length$$named_;
}
;
_Uint8ArrayWrappingImplementation$Dart.prototype.subarray$member = function(start, end){
  if (end == null) {
    return _Uint8ArrayWrappingImplementation$Dart._subarray$$member_(this, start);
  }
   else {
    return _Uint8ArrayWrappingImplementation$Dart._subarray_2$$member_(this, start, end);
  }
}
;
_Uint8ArrayWrappingImplementation$Dart.prototype.subarray$named = function($n, $o, start, end){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 1:
      end = $o.end?(++seen , $o.end):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _Uint8ArrayWrappingImplementation$Dart.prototype.subarray$member.call(this, start, end);
}
;
_Uint8ArrayWrappingImplementation$Dart.prototype.subarray$getter = function subarray$getter(){
  return $bind(_Uint8ArrayWrappingImplementation$Dart.prototype.subarray$named, this);
}
;
_Uint8ArrayWrappingImplementation$Dart._subarray$$member_ = function(receiver, start){
  return native__Uint8ArrayWrappingImplementation__subarray(receiver, start);
}
;
_Uint8ArrayWrappingImplementation$Dart._subarray$$named_ = function($n, $o, receiver, start){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _Uint8ArrayWrappingImplementation$Dart._subarray$$member_(receiver, start);
}
;
_Uint8ArrayWrappingImplementation$Dart._subarray$$getter_ = function _subarray$$getter_(){
  return _Uint8ArrayWrappingImplementation$Dart._subarray$$named_;
}
;
_Uint8ArrayWrappingImplementation$Dart._subarray_2$$member_ = function(receiver, start, end){
  return native__Uint8ArrayWrappingImplementation__subarray_2(receiver, start, end);
}
;
_Uint8ArrayWrappingImplementation$Dart._subarray_2$$named_ = function($n, $o, receiver, start, end){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return _Uint8ArrayWrappingImplementation$Dart._subarray_2$$member_(receiver, start, end);
}
;
_Uint8ArrayWrappingImplementation$Dart._subarray_2$$getter_ = function _subarray_2$$getter_(){
  return _Uint8ArrayWrappingImplementation$Dart._subarray_2$$named_;
}
;
_Uint8ArrayWrappingImplementation$Dart.prototype.typeName$named = function(){
  return this.typeName$getter().apply(this, arguments);
}
;
_Uint8ArrayWrappingImplementation$Dart.prototype.typeName$getter = function(){
  return 'Uint8Array';
}
;
