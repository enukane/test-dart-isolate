function Uint16Array$Dart(){
}

Uint16Array$Dart.$lookupRTT = function(){
  return RTT.create($cls('Uint16Array$Dart'), Uint16Array$Dart.$RTTimplements);
}
;
Uint16Array$Dart.$RTTimplements = function(rtt){
  Uint16Array$Dart.$addTo(rtt);
}
;
Uint16Array$Dart.$addTo = function(target){
  var rtt = Uint16Array$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  ArrayBufferView$Dart.$addTo(target);
}
;
Uint16Array$Dart.BYTES_PER_ELEMENT$named = function(){
  return Uint16Array$Dart.BYTES_PER_ELEMENT$getter().apply(this, arguments);
}
;
Uint16Array$Dart.BYTES_PER_ELEMENT$getter = function(){
  return 2;
}
;
