function Set$Dart(){
}

Set$Dart.$lookupRTT = function(typeArgs){
  return RTT.create($cls('Set$Dart'), Set$Dart.$RTTimplements, typeArgs);
}
;
Set$Dart.$RTTimplements = function(rtt, typeArgs){
  Set$Dart.$addTo(rtt, typeArgs);
  rtt.derivedTypes = [];
}
;
Set$Dart.$addTo = function(target, typeArgs){
  var rtt = Set$Dart.$lookupRTT(typeArgs);
  target.implementedTypes[rtt.classKey] = rtt;
  Collection$Dart.$addTo(target, [RTT.getTypeArg(target.typeArgs, 0)]);
}
;
