function Geoposition$Dart(){
}

Geoposition$Dart.$lookupRTT = function(){
  return RTT.create($cls('Geoposition$Dart'));
}
;
Geoposition$Dart.$addTo = function(target){
  var rtt = Geoposition$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
}
;
