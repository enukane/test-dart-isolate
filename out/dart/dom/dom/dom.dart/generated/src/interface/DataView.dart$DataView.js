function DataView$Dart(){
}

DataView$Dart.$lookupRTT = function(){
  return RTT.create($cls('DataView$Dart'), DataView$Dart.$RTTimplements);
}
;
DataView$Dart.$RTTimplements = function(rtt){
  DataView$Dart.$addTo(rtt);
}
;
DataView$Dart.$addTo = function(target){
  var rtt = DataView$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  ArrayBufferView$Dart.$addTo(target);
}
;
