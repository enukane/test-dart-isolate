function DOMURL$Dart(){
}

DOMURL$Dart.$lookupRTT = function(){
  return RTT.create($cls('DOMURL$Dart'));
}
;
DOMURL$Dart.$addTo = function(target){
  var rtt = DOMURL$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
}
;
