function ArrayFactory$Dart(){
}

ArrayFactory$Dart.$lookupRTT = function(){
  return RTT.create($cls('ArrayFactory$Dart'));
}
;
ArrayFactory$Dart.$addTo = function(target){
  var rtt = ArrayFactory$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
}
;
ArrayFactory$Dart.prototype.$implements$ArrayFactory$Dart = 1;
ArrayFactory$Dart.prototype.$implements$Object$Dart = 1;
ArrayFactory$Dart.Array$from$5$Factory = function($typeArgs, other){
  var array = ArrayFactory$Dart.Array$$Factory([RTT.getTypeArg($typeArgs, 0)], $Dart$Null);
  {
    var $0 = other.iterator$named(0, $noargs);
    while ($0.hasNext$named(0, $noargs)) {
      var e = $0.next$named(0, $noargs);
      {
        array.add$named(1, $noargs, e);
      }
    }
  }
  return array;
}
;
ArrayFactory$Dart.Array$fromArray$5$Factory = function($typeArgs, other, startIndex, endIndex){
  var tmp$0;
  var array = ArrayFactory$Dart.Array$$Factory([RTT.getTypeArg($typeArgs, 0)], $Dart$Null);
  if (GT$operator(endIndex, other.length$getter())) {
    endIndex = other.length$getter();
  }
  if (LT$operator(startIndex, 0)) {
    startIndex = 0;
  }
  var count = SUB$operator(endIndex, startIndex);
  if (GT$operator(count, 0)) {
    array.length$setter(tmp$0 = count) , tmp$0;
    Arrays$Dart.copy$member(other, startIndex, array, 0, count);
  }
  return array;
}
;
ArrayFactory$Dart.Array$$Factory = function($typeArgs, length_0){
  var tmp$0;
  var isFixed = true;
  if (length_0 == null) {
    length_0 = 0;
    isFixed = false;
  }
   else {
    if (LT$operator(length_0, 0)) {
      $Dart$ThrowException(IllegalArgumentException$Dart.IllegalArgumentException$$Factory(length_0));
    }
  }
  var array = ArrayFactory$Dart._new$$member_(TypeToken$Dart.TypeToken$$Factory(TypeToken$Dart.$lookupRTT([RTT.getTypeArg($typeArgs, 0)])), length_0);
  array._isFixed$$setter_(tmp$0 = isFixed) , tmp$0;
  return array;
}
;
ArrayFactory$Dart._new$$member_ = function(typeToken, length_0){
  return native_ArrayFactory__new(typeToken, length_0);
}
;
ArrayFactory$Dart._new$$named_ = function($n, $o, typeToken, length_0){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return ArrayFactory$Dart._new$$member_(typeToken, length_0);
}
;
ArrayFactory$Dart._new$$getter_ = function _new$$getter_(){
  return ArrayFactory$Dart._new$$named_;
}
;
