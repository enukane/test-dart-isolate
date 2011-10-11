function LinkedHashMap$Dart(){
}

LinkedHashMap$Dart.$lookupRTT = function(typeArgs){
  return RTT.create($cls('LinkedHashMap$Dart'), LinkedHashMap$Dart.$RTTimplements, typeArgs);
}
;
LinkedHashMap$Dart.$RTTimplements = function(rtt, typeArgs){
  LinkedHashMap$Dart.$addTo(rtt, typeArgs);
  rtt.derivedTypes = [];
}
;
LinkedHashMap$Dart.$addTo = function(target, typeArgs){
  var rtt = LinkedHashMap$Dart.$lookupRTT(typeArgs);
  target.implementedTypes[rtt.classKey] = rtt;
  HashMap$Dart.$addTo(target, [RTT.getTypeArg(target.typeArgs, 0), RTT.getTypeArg(target.typeArgs, 1)]);
}
;
