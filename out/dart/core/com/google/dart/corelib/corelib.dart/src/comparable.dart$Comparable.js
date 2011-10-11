function Comparable$Dart(){
}

Comparable$Dart.$lookupRTT = function(){
  return RTT.create($cls('Comparable$Dart'));
}
;
Comparable$Dart.$addTo = function(target){
  var rtt = Comparable$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
}
;
