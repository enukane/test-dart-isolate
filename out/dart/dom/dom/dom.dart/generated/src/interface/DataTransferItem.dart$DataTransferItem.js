function DataTransferItem$Dart(){
}

DataTransferItem$Dart.$lookupRTT = function(){
  return RTT.create($cls('DataTransferItem$Dart'));
}
;
DataTransferItem$Dart.$addTo = function(target){
  var rtt = DataTransferItem$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
}
;
