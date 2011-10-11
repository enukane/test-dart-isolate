function Uint32Array$Dart(){
}

Uint32Array$Dart.$lookupRTT = function(){
  return RTT.create($cls('Uint32Array$Dart'), Uint32Array$Dart.$RTTimplements);
}
;
Uint32Array$Dart.$RTTimplements = function(rtt){
  Uint32Array$Dart.$addTo(rtt);
}
;
Uint32Array$Dart.$addTo = function(target){
  var rtt = Uint32Array$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  ArrayBufferView$Dart.$addTo(target);
}
;
Uint32Array$Dart.BYTES_PER_ELEMENT$named = function(){
  return Uint32Array$Dart.BYTES_PER_ELEMENT$getter().apply(this, arguments);
}
;
Uint32Array$Dart.BYTES_PER_ELEMENT$getter = function(){
  return 4;
}
;
