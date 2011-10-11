function IDBRequest$Dart(){
}

IDBRequest$Dart.$lookupRTT = function(){
  return RTT.create($cls('IDBRequest$Dart'));
}
;
IDBRequest$Dart.$addTo = function(target){
  var rtt = IDBRequest$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
}
;
IDBRequest$Dart.DONE$named = function(){
  return IDBRequest$Dart.DONE$getter().apply(this, arguments);
}
;
IDBRequest$Dart.DONE$getter = function(){
  return 2;
}
;
IDBRequest$Dart.LOADING$named = function(){
  return IDBRequest$Dart.LOADING$getter().apply(this, arguments);
}
;
IDBRequest$Dart.LOADING$getter = function(){
  return 1;
}
;
