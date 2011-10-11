function PositionCallback$Dart(){
}

PositionCallback$Dart.$lookupRTT = function(){
  return RTT.create($cls('PositionCallback$Dart'));
}
;
PositionCallback$Dart.$addTo = function(target){
  var rtt = PositionCallback$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
}
;
