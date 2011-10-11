function IDBCursor$Dart(){
}

IDBCursor$Dart.$lookupRTT = function(){
  return RTT.create($cls('IDBCursor$Dart'));
}
;
IDBCursor$Dart.$addTo = function(target){
  var rtt = IDBCursor$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
}
;
IDBCursor$Dart.NEXT$named = function(){
  return IDBCursor$Dart.NEXT$getter().apply(this, arguments);
}
;
IDBCursor$Dart.NEXT$getter = function(){
  return 0;
}
;
IDBCursor$Dart.NEXT_NO_DUPLICATE$named = function(){
  return IDBCursor$Dart.NEXT_NO_DUPLICATE$getter().apply(this, arguments);
}
;
IDBCursor$Dart.NEXT_NO_DUPLICATE$getter = function(){
  return 1;
}
;
IDBCursor$Dart.PREV$named = function(){
  return IDBCursor$Dart.PREV$getter().apply(this, arguments);
}
;
IDBCursor$Dart.PREV$getter = function(){
  return 2;
}
;
IDBCursor$Dart.PREV_NO_DUPLICATE$named = function(){
  return IDBCursor$Dart.PREV_NO_DUPLICATE$getter().apply(this, arguments);
}
;
IDBCursor$Dart.PREV_NO_DUPLICATE$getter = function(){
  return 3;
}
;
