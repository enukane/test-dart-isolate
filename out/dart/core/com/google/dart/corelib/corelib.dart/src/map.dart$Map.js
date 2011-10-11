function Map$Dart(){
}

Map$Dart.$lookupRTT = function(typeArgs){
  return RTT.create($cls('Map$Dart'), null, typeArgs);
}
;
Map$Dart.$addTo = function(target, typeArgs){
  var rtt = Map$Dart.$lookupRTT(typeArgs);
  target.implementedTypes[rtt.classKey] = rtt;
}
;
