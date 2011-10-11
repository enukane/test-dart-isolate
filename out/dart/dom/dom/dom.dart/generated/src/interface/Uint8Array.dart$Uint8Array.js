function Uint8Array$Dart(){
}

Uint8Array$Dart.$lookupRTT = function(){
  return RTT.create($cls('Uint8Array$Dart'), Uint8Array$Dart.$RTTimplements);
}
;
Uint8Array$Dart.$RTTimplements = function(rtt){
  Uint8Array$Dart.$addTo(rtt);
}
;
Uint8Array$Dart.$addTo = function(target){
  var rtt = Uint8Array$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  ArrayBufferView$Dart.$addTo(target);
}
;
Uint8Array$Dart.BYTES_PER_ELEMENT$named = function(){
  return Uint8Array$Dart.BYTES_PER_ELEMENT$getter().apply(this, arguments);
}
;
Uint8Array$Dart.BYTES_PER_ELEMENT$getter = function(){
  return 1;
}
;
