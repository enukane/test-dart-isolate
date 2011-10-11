function Promise$Dart(){
}

Promise$Dart.$lookupRTT = function(typeArgs){
  return RTT.create($cls('Promise$Dart'), null, typeArgs);
}
;
Promise$Dart.$addTo = function(target, typeArgs){
  var rtt = Promise$Dart.$lookupRTT(typeArgs);
  target.implementedTypes[rtt.classKey] = rtt;
}
;
