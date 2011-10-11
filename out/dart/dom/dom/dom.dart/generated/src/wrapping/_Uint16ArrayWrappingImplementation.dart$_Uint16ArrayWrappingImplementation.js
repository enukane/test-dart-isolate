function _Uint16ArrayWrappingImplementation$Dart(){
}

_Uint16ArrayWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('_Uint16ArrayWrappingImplementation$Dart'), _Uint16ArrayWrappingImplementation$Dart.$RTTimplements);
}
;
_Uint16ArrayWrappingImplementation$Dart.$RTTimplements = function(rtt){
  _Uint16ArrayWrappingImplementation$Dart.$addTo(rtt);
}
;
_Uint16ArrayWrappingImplementation$Dart.$addTo = function(target){
  var rtt = _Uint16ArrayWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  _ArrayBufferViewWrappingImplementation$Dart.$addTo(target);
  Uint16Array$Dart.$addTo(target);
}
;
_Uint16ArrayWrappingImplementation$Dart.prototype.$implements$_Uint16ArrayWrappingImplementation$Dart = 1;
_Uint16ArrayWrappingImplementation$Dart.prototype.$implements$Uint16Array$Dart = 1;
_Uint16ArrayWrappingImplementation$Dart.prototype.$implements$ArrayBufferView$Dart = 1;
_Uint16ArrayWrappingImplementation$Dart.prototype.$implements$_ArrayBufferViewWrappingImplementation$Dart = 1;
_Uint16ArrayWrappingImplementation$Dart.prototype.$implements$DOMWrapperBase$Dart = 1;
_Uint16ArrayWrappingImplementation$Dart.prototype.$implements$DOMType$Dart = 1;
_Uint16ArrayWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(_Uint16ArrayWrappingImplementation$Dart, _ArrayBufferViewWrappingImplementation$Dart);
_Uint16ArrayWrappingImplementation$Dart.$Constructor = function(){
  _ArrayBufferViewWrappingImplementation$Dart.$Constructor.call(this);
}
;
_Uint16ArrayWrappingImplementation$Dart.$Initializer = function(){
  _ArrayBufferViewWrappingImplementation$Dart.$Initializer.call(this);
}
;
_Uint16ArrayWrappingImplementation$Dart._Uint16ArrayWrappingImplementation$$Factory = function(){
  var tmp$0 = new _Uint16ArrayWrappingImplementation$Dart;
  tmp$0.$typeInfo = _Uint16ArrayWrappingImplementation$Dart.$lookupRTT();
  _Uint16ArrayWrappingImplementation$Dart.$Initializer.call(tmp$0);
  _Uint16ArrayWrappingImplementation$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
_Uint16ArrayWrappingImplementation$Dart.create__Uint16ArrayWrappingImplementation$member = function(){
  return _Uint16ArrayWrappingImplementation$Dart._Uint16ArrayWrappingImplementation$$Factory();
}
;
_Uint16ArrayWrappingImplementation$Dart.create__Uint16ArrayWrappingImplementation$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _Uint16ArrayWrappingImplementation$Dart.create__Uint16ArrayWrappingImplementation$member();
}
;
function native__Uint16ArrayWrappingImplementation_create__Uint16ArrayWrappingImplementation(){
  return _Uint16ArrayWrappingImplementation$Dart.create__Uint16ArrayWrappingImplementation$member();
}

_Uint16ArrayWrappingImplementation$Dart.create__Uint16ArrayWrappingImplementation$getter = function create__Uint16ArrayWrappingImplementation$getter(){
  return _Uint16ArrayWrappingImplementation$Dart.create__Uint16ArrayWrappingImplementation$named;
}
;
_Uint16ArrayWrappingImplementation$Dart.prototype.length$named = function(){
  return this.length$getter().apply(this, arguments);
}
;
_Uint16ArrayWrappingImplementation$Dart.prototype.length$getter = function(){
  return _Uint16ArrayWrappingImplementation$Dart._get__Uint16Array_length$$member_(this);
}
;
_Uint16ArrayWrappingImplementation$Dart._get__Uint16Array_length$$member_ = function(_this){
  return native__Uint16ArrayWrappingImplementation__get__Uint16Array_length(_this);
}
;
_Uint16ArrayWrappingImplementation$Dart._get__Uint16Array_length$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _Uint16ArrayWrappingImplementation$Dart._get__Uint16Array_length$$member_(_this);
}
;
_Uint16ArrayWrappingImplementation$Dart._get__Uint16Array_length$$getter_ = function _get__Uint16Array_length$$getter_(){
  return _Uint16ArrayWrappingImplementation$Dart._get__Uint16Array_length$$named_;
}
;
_Uint16ArrayWrappingImplementation$Dart.prototype.subarray$member = function(start, end){
  if (end == null) {
    return _Uint16ArrayWrappingImplementation$Dart._subarray$$member_(this, start);
  }
   else {
    return _Uint16ArrayWrappingImplementation$Dart._subarray_2$$member_(this, start, end);
  }
}
;
_Uint16ArrayWrappingImplementation$Dart.prototype.subarray$named = function($n, $o, start, end){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 1:
      end = $o.end?(++seen , $o.end):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _Uint16ArrayWrappingImplementation$Dart.prototype.subarray$member.call(this, start, end);
}
;
_Uint16ArrayWrappingImplementation$Dart.prototype.subarray$getter = function subarray$getter(){
  return $bind(_Uint16ArrayWrappingImplementation$Dart.prototype.subarray$named, this);
}
;
_Uint16ArrayWrappingImplementation$Dart._subarray$$member_ = function(receiver, start){
  return native__Uint16ArrayWrappingImplementation__subarray(receiver, start);
}
;
_Uint16ArrayWrappingImplementation$Dart._subarray$$named_ = function($n, $o, receiver, start){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _Uint16ArrayWrappingImplementation$Dart._subarray$$member_(receiver, start);
}
;
_Uint16ArrayWrappingImplementation$Dart._subarray$$getter_ = function _subarray$$getter_(){
  return _Uint16ArrayWrappingImplementation$Dart._subarray$$named_;
}
;
_Uint16ArrayWrappingImplementation$Dart._subarray_2$$member_ = function(receiver, start, end){
  return native__Uint16ArrayWrappingImplementation__subarray_2(receiver, start, end);
}
;
_Uint16ArrayWrappingImplementation$Dart._subarray_2$$named_ = function($n, $o, receiver, start, end){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return _Uint16ArrayWrappingImplementation$Dart._subarray_2$$member_(receiver, start, end);
}
;
_Uint16ArrayWrappingImplementation$Dart._subarray_2$$getter_ = function _subarray_2$$getter_(){
  return _Uint16ArrayWrappingImplementation$Dart._subarray_2$$named_;
}
;
_Uint16ArrayWrappingImplementation$Dart.prototype.typeName$named = function(){
  return this.typeName$getter().apply(this, arguments);
}
;
_Uint16ArrayWrappingImplementation$Dart.prototype.typeName$getter = function(){
  return 'Uint16Array';
}
;
