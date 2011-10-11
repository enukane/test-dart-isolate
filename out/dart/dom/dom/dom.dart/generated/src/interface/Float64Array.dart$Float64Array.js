function Float64Array$Dart(){
}

Float64Array$Dart.$lookupRTT = function(){
  return RTT.create($cls('Float64Array$Dart'), Float64Array$Dart.$RTTimplements);
}
;
Float64Array$Dart.$RTTimplements = function(rtt){
  Float64Array$Dart.$addTo(rtt);
}
;
Float64Array$Dart.$addTo = function(target){
  var rtt = Float64Array$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  ArrayBufferView$Dart.$addTo(target);
}
;
Float64Array$Dart.BYTES_PER_ELEMENT$named = function(){
  return Float64Array$Dart.BYTES_PER_ELEMENT$getter().apply(this, arguments);
}
;
Float64Array$Dart.BYTES_PER_ELEMENT$getter = function(){
  return 8;
}
;
