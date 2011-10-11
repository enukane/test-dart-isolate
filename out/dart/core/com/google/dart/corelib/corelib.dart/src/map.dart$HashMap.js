function HashMap$Dart(){
}

HashMap$Dart.$lookupRTT = function(typeArgs){
  return RTT.create($cls('HashMap$Dart'), HashMap$Dart.$RTTimplements, typeArgs);
}
;
HashMap$Dart.$RTTimplements = function(rtt, typeArgs){
  HashMap$Dart.$addTo(rtt, typeArgs);
  rtt.derivedTypes = [];
}
;
HashMap$Dart.$addTo = function(target, typeArgs){
  var rtt = HashMap$Dart.$lookupRTT(typeArgs);
  target.implementedTypes[rtt.classKey] = rtt;
  Map$Dart.$addTo(target, [RTT.getTypeArg(target.typeArgs, 0), RTT.getTypeArg(target.typeArgs, 1)]);
}
;
