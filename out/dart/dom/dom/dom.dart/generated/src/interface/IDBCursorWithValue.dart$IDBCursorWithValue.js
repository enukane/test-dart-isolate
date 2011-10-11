function IDBCursorWithValue$Dart(){
}

IDBCursorWithValue$Dart.$lookupRTT = function(){
  return RTT.create($cls('IDBCursorWithValue$Dart'), IDBCursorWithValue$Dart.$RTTimplements);
}
;
IDBCursorWithValue$Dart.$RTTimplements = function(rtt){
  IDBCursorWithValue$Dart.$addTo(rtt);
}
;
IDBCursorWithValue$Dart.$addTo = function(target){
  var rtt = IDBCursorWithValue$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  IDBCursor$Dart.$addTo(target);
}
;
