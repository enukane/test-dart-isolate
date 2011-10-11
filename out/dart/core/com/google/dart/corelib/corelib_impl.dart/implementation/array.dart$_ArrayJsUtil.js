function _ArrayJsUtil$Dart(){
}

_ArrayJsUtil$Dart.$lookupRTT = function(){
  return RTT.create($cls('_ArrayJsUtil$Dart'));
}
;
_ArrayJsUtil$Dart.$addTo = function(target){
  var rtt = _ArrayJsUtil$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
}
;
_ArrayJsUtil$Dart.prototype.$implements$_ArrayJsUtil$Dart = 1;
_ArrayJsUtil$Dart.prototype.$implements$Object$Dart = 1;
_ArrayJsUtil$Dart._arrayLength$$member_ = function(array){
  return array.length$getter();
}
;
_ArrayJsUtil$Dart._arrayLength$$named_ = function($n, $o, array){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _ArrayJsUtil$Dart._arrayLength$$member_(array);
}
;
function native__ArrayJsUtil__arrayLength(array){
  return _ArrayJsUtil$Dart._arrayLength$$member_(array);
}

_ArrayJsUtil$Dart._arrayLength$$getter_ = function _arrayLength$$getter_(){
  return _ArrayJsUtil$Dart._arrayLength$$named_;
}
;
_ArrayJsUtil$Dart._newArray$$member_ = function(len){
  return ArrayFactory$Dart.Array$$Factory(null, len);
}
;
_ArrayJsUtil$Dart._newArray$$named_ = function($n, $o, len){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _ArrayJsUtil$Dart._newArray$$member_(len);
}
;
function native__ArrayJsUtil__newArray(len){
  return _ArrayJsUtil$Dart._newArray$$member_(len);
}

_ArrayJsUtil$Dart._newArray$$getter_ = function _newArray$$getter_(){
  return _ArrayJsUtil$Dart._newArray$$named_;
}
;
_ArrayJsUtil$Dart._throwIndexOutOfRangeException$$member_ = function(index){
  $Dart$ThrowException(IndexOutOfRangeException$Dart.IndexOutOfRangeException$$Factory(index));
}
;
_ArrayJsUtil$Dart._throwIndexOutOfRangeException$$named_ = function($n, $o, index){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _ArrayJsUtil$Dart._throwIndexOutOfRangeException$$member_(index);
}
;
function native__ArrayJsUtil__throwIndexOutOfRangeException(index){
  return _ArrayJsUtil$Dart._throwIndexOutOfRangeException$$member_(index);
}

_ArrayJsUtil$Dart._throwIndexOutOfRangeException$$getter_ = function _throwIndexOutOfRangeException$$getter_(){
  return _ArrayJsUtil$Dart._throwIndexOutOfRangeException$$named_;
}
;
_ArrayJsUtil$Dart.$Constructor = function(){
  Object.$Constructor.call(this);
}
;
_ArrayJsUtil$Dart.$Initializer = function(){
  Object.$Initializer.call(this);
}
;
_ArrayJsUtil$Dart._ArrayJsUtil$$Factory = function(){
  var tmp$0 = new _ArrayJsUtil$Dart;
  tmp$0.$typeInfo = _ArrayJsUtil$Dart.$lookupRTT();
  _ArrayJsUtil$Dart.$Initializer.call(tmp$0);
  _ArrayJsUtil$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
