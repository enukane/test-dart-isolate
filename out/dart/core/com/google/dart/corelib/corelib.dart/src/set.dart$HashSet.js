function HashSet$Dart(){
}

HashSet$Dart.$lookupRTT = function(typeArgs){
  return RTT.create($cls('HashSet$Dart'), HashSet$Dart.$RTTimplements, typeArgs);
}
;
HashSet$Dart.$RTTimplements = function(rtt, typeArgs){
  HashSet$Dart.$addTo(rtt, typeArgs);
  rtt.derivedTypes = [];
}
;
HashSet$Dart.$addTo = function(target, typeArgs){
  var rtt = HashSet$Dart.$lookupRTT(typeArgs);
  target.implementedTypes[rtt.classKey] = rtt;
  Set$Dart.$addTo(target, [RTT.getTypeArg(target.typeArgs, 0)]);
}
;
