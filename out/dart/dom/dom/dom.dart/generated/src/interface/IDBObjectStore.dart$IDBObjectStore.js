function IDBObjectStore$Dart(){
}

IDBObjectStore$Dart.$lookupRTT = function(){
  return RTT.create($cls('IDBObjectStore$Dart'));
}
;
IDBObjectStore$Dart.$addTo = function(target){
  var rtt = IDBObjectStore$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
}
;
