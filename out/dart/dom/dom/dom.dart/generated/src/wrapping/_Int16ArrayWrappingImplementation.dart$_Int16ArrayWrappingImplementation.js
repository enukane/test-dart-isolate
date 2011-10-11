function _Int16ArrayWrappingImplementation$Dart(){
}

_Int16ArrayWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('_Int16ArrayWrappingImplementation$Dart'), _Int16ArrayWrappingImplementation$Dart.$RTTimplements);
}
;
_Int16ArrayWrappingImplementation$Dart.$RTTimplements = function(rtt){
  _Int16ArrayWrappingImplementation$Dart.$addTo(rtt);
}
;
_Int16ArrayWrappingImplementation$Dart.$addTo = function(target){
  var rtt = _Int16ArrayWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  _ArrayBufferViewWrappingImplementation$Dart.$addTo(target);
  Int16Array$Dart.$addTo(target);
}
;
_Int16ArrayWrappingImplementation$Dart.prototype.$implements$_Int16ArrayWrappingImplementation$Dart = 1;
_Int16ArrayWrappingImplementation$Dart.prototype.$implements$Int16Array$Dart = 1;
_Int16ArrayWrappingImplementation$Dart.prototype.$implements$ArrayBufferView$Dart = 1;
_Int16ArrayWrappingImplementation$Dart.prototype.$implements$_ArrayBufferViewWrappingImplementation$Dart = 1;
_Int16ArrayWrappingImplementation$Dart.prototype.$implements$DOMWrapperBase$Dart = 1;
_Int16ArrayWrappingImplementation$Dart.prototype.$implements$DOMType$Dart = 1;
_Int16ArrayWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(_Int16ArrayWrappingImplementation$Dart, _ArrayBufferViewWrappingImplementation$Dart);
_Int16ArrayWrappingImplementation$Dart.$Constructor = function(){
  _ArrayBufferViewWrappingImplementation$Dart.$Constructor.call(this);
}
;
_Int16ArrayWrappingImplementation$Dart.$Initializer = function(){
  _ArrayBufferViewWrappingImplementation$Dart.$Initializer.call(this);
}
;
_Int16ArrayWrappingImplementation$Dart._Int16ArrayWrappingImplementation$$Factory = function(){
  var tmp$0 = new _Int16ArrayWrappingImplementation$Dart;
  tmp$0.$typeInfo = _Int16ArrayWrappingImplementation$Dart.$lookupRTT();
  _Int16ArrayWrappingImplementation$Dart.$Initializer.call(tmp$0);
  _Int16ArrayWrappingImplementation$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
_Int16ArrayWrappingImplementation$Dart.create__Int16ArrayWrappingImplementation$member = function(){
  return _Int16ArrayWrappingImplementation$Dart._Int16ArrayWrappingImplementation$$Factory();
}
;
_Int16ArrayWrappingImplementation$Dart.create__Int16ArrayWrappingImplementation$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _Int16ArrayWrappingImplementation$Dart.create__Int16ArrayWrappingImplementation$member();
}
;
function native__Int16ArrayWrappingImplementation_create__Int16ArrayWrappingImplementation(){
  return _Int16ArrayWrappingImplementation$Dart.create__Int16ArrayWrappingImplementation$member();
}

_Int16ArrayWrappingImplementation$Dart.create__Int16ArrayWrappingImplementation$getter = function create__Int16ArrayWrappingImplementation$getter(){
  return _Int16ArrayWrappingImplementation$Dart.create__Int16ArrayWrappingImplementation$named;
}
;
_Int16ArrayWrappingImplementation$Dart.prototype.length$named = function(){
  return this.length$getter().apply(this, arguments);
}
;
_Int16ArrayWrappingImplementation$Dart.prototype.length$getter = function(){
  return _Int16ArrayWrappingImplementation$Dart._get__Int16Array_length$$member_(this);
}
;
_Int16ArrayWrappingImplementation$Dart._get__Int16Array_length$$member_ = function(_this){
  return native__Int16ArrayWrappingImplementation__get__Int16Array_length(_this);
}
;
_Int16ArrayWrappingImplementation$Dart._get__Int16Array_length$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _Int16ArrayWrappingImplementation$Dart._get__Int16Array_length$$member_(_this);
}
;
_Int16ArrayWrappingImplementation$Dart._get__Int16Array_length$$getter_ = function _get__Int16Array_length$$getter_(){
  return _Int16ArrayWrappingImplementation$Dart._get__Int16Array_length$$named_;
}
;
_Int16ArrayWrappingImplementation$Dart.prototype.subarray$member = function(start, end){
  if (end == null) {
    return _Int16ArrayWrappingImplementation$Dart._subarray$$member_(this, start);
  }
   else {
    return _Int16ArrayWrappingImplementation$Dart._subarray_2$$member_(this, start, end);
  }
}
;
_Int16ArrayWrappingImplementation$Dart.prototype.subarray$named = function($n, $o, start, end){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 1:
      end = $o.end?(++seen , $o.end):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _Int16ArrayWrappingImplementation$Dart.prototype.subarray$member.call(this, start, end);
}
;
_Int16ArrayWrappingImplementation$Dart.prototype.subarray$getter = function subarray$getter(){
  return $bind(_Int16ArrayWrappingImplementation$Dart.prototype.subarray$named, this);
}
;
_Int16ArrayWrappingImplementation$Dart._subarray$$member_ = function(receiver, start){
  return native__Int16ArrayWrappingImplementation__subarray(receiver, start);
}
;
_Int16ArrayWrappingImplementation$Dart._subarray$$named_ = function($n, $o, receiver, start){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _Int16ArrayWrappingImplementation$Dart._subarray$$member_(receiver, start);
}
;
_Int16ArrayWrappingImplementation$Dart._subarray$$getter_ = function _subarray$$getter_(){
  return _Int16ArrayWrappingImplementation$Dart._subarray$$named_;
}
;
_Int16ArrayWrappingImplementation$Dart._subarray_2$$member_ = function(receiver, start, end){
  return native__Int16ArrayWrappingImplementation__subarray_2(receiver, start, end);
}
;
_Int16ArrayWrappingImplementation$Dart._subarray_2$$named_ = function($n, $o, receiver, start, end){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return _Int16ArrayWrappingImplementation$Dart._subarray_2$$member_(receiver, start, end);
}
;
_Int16ArrayWrappingImplementation$Dart._subarray_2$$getter_ = function _subarray_2$$getter_(){
  return _Int16ArrayWrappingImplementation$Dart._subarray_2$$named_;
}
;
_Int16ArrayWrappingImplementation$Dart.prototype.typeName$named = function(){
  return this.typeName$getter().apply(this, arguments);
}
;
_Int16ArrayWrappingImplementation$Dart.prototype.typeName$getter = function(){
  return 'Int16Array';
}
;
