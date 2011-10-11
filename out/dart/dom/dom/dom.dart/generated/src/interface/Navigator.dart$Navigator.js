function Navigator$Dart(){
}

Navigator$Dart.$lookupRTT = function(){
  return RTT.create($cls('Navigator$Dart'));
}
;
Navigator$Dart.$addTo = function(target){
  var rtt = Navigator$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
}
;
