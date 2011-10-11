function SendPort$Dart(){
}

SendPort$Dart.$lookupRTT = function(){
  return RTT.create($cls('SendPort$Dart'), SendPort$Dart.$RTTimplements);
}
;
SendPort$Dart.$RTTimplements = function(rtt){
  SendPort$Dart.$addTo(rtt);
}
;
SendPort$Dart.$addTo = function(target){
  var rtt = SendPort$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  Hashable$Dart.$addTo(target);
}
;
