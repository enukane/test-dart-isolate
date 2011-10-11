function ReceivePort$Dart(){
}

ReceivePort$Dart.$lookupRTT = function(){
  return RTT.create($cls('ReceivePort$Dart'));
}
;
ReceivePort$Dart.$addTo = function(target){
  var rtt = ReceivePort$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
}
;
