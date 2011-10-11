function DataTransferItems$Dart(){
}

DataTransferItems$Dart.$lookupRTT = function(){
  return RTT.create($cls('DataTransferItems$Dart'));
}
;
DataTransferItems$Dart.$addTo = function(target){
  var rtt = DataTransferItems$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
}
;
