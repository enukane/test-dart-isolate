function IDBTransaction$Dart(){
}

IDBTransaction$Dart.$lookupRTT = function(){
  return RTT.create($cls('IDBTransaction$Dart'));
}
;
IDBTransaction$Dart.$addTo = function(target){
  var rtt = IDBTransaction$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
}
;
IDBTransaction$Dart.READ_ONLY$named = function(){
  return IDBTransaction$Dart.READ_ONLY$getter().apply(this, arguments);
}
;
IDBTransaction$Dart.READ_ONLY$getter = function(){
  return 0;
}
;
IDBTransaction$Dart.READ_WRITE$named = function(){
  return IDBTransaction$Dart.READ_WRITE$getter().apply(this, arguments);
}
;
IDBTransaction$Dart.READ_WRITE$getter = function(){
  return 1;
}
;
IDBTransaction$Dart.VERSION_CHANGE$named = function(){
  return IDBTransaction$Dart.VERSION_CHANGE$getter().apply(this, arguments);
}
;
IDBTransaction$Dart.VERSION_CHANGE$getter = function(){
  return 2;
}
;
