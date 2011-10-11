function ListFactory$Dart(){
}

ListFactory$Dart.$lookupRTT = function(){
  return RTT.create($cls('ListFactory$Dart'));
}
;
ListFactory$Dart.$addTo = function(target){
  var rtt = ListFactory$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
}
;
ListFactory$Dart.prototype.$implements$ListFactory$Dart = 1;
ListFactory$Dart.prototype.$implements$Object$Dart = 1;
ListFactory$Dart.List$from$4$Factory = function($typeArgs, other){
  var list = ListFactory$Dart.List$$Factory([RTT.getTypeArg($typeArgs, 0)], $Dart$Null);
  {
    var $0 = other.iterator$named(0, $noargs);
    while ($0.hasNext$named(0, $noargs)) {
      var e = $0.next$named(0, $noargs);
      {
        list.add$named(1, $noargs, e);
      }
    }
  }
  return list;
}
;
ListFactory$Dart.List$fromList$4$Factory = function($typeArgs, other, startIndex, endIndex){
  var tmp$0;
  var list = ListFactory$Dart.List$$Factory([RTT.getTypeArg($typeArgs, 0)], $Dart$Null);
  if (GT$operator(endIndex, other.length$getter())) {
    endIndex = other.length$getter();
  }
  if (LT$operator(startIndex, 0)) {
    startIndex = 0;
  }
  var count = SUB$operator(endIndex, startIndex);
  if (GT$operator(count, 0)) {
    list.length$setter(tmp$0 = count) , tmp$0;
    Arrays$Dart.copy$member(other, startIndex, list, 0, count);
  }
  return list;
}
;
ListFactory$Dart.List$$Factory = function($typeArgs, length_0){
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
  var list = ListFactory$Dart._new$$member_(TypeToken$Dart.TypeToken$$Factory(TypeToken$Dart.$lookupRTT([RTT.getTypeArg($typeArgs, 0)])), length_0);
  list._isFixed$$setter_(tmp$0 = isFixed) , tmp$0;
  return list;
}
;
ListFactory$Dart._new$$member_ = function(typeToken, length_0){
  return native_ListFactory__new(typeToken, length_0);
}
;
ListFactory$Dart._new$$named_ = function($n, $o, typeToken, length_0){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return ListFactory$Dart._new$$member_(typeToken, length_0);
}
;
ListFactory$Dart._new$$getter_ = function _new$$getter_(){
  return ListFactory$Dart._new$$named_;
}
;
