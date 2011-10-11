function Match$Dart(){
}

Match$Dart.$lookupRTT = function(){
  return RTT.create($cls('Match$Dart'));
}
;
Match$Dart.$addTo = function(target){
  var rtt = Match$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
}
;
