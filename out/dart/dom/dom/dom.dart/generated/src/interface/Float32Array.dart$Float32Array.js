function Float32Array$Dart(){
}

Float32Array$Dart.$lookupRTT = function(){
  return RTT.create($cls('Float32Array$Dart'), Float32Array$Dart.$RTTimplements);
}
;
Float32Array$Dart.$RTTimplements = function(rtt){
  Float32Array$Dart.$addTo(rtt);
}
;
Float32Array$Dart.$addTo = function(target){
  var rtt = Float32Array$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  ArrayBufferView$Dart.$addTo(target);
}
;
Float32Array$Dart.BYTES_PER_ELEMENT$named = function(){
  return Float32Array$Dart.BYTES_PER_ELEMENT$getter().apply(this, arguments);
}
;
Float32Array$Dart.BYTES_PER_ELEMENT$getter = function(){
  return 4;
}
;
