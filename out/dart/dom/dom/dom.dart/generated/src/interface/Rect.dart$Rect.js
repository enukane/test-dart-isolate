function Rect$Dart(){
}

Rect$Dart.$lookupRTT = function(){
  return RTT.create($cls('Rect$Dart'));
}
;
Rect$Dart.$addTo = function(target){
  var rtt = Rect$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
}
;
