function Int32Array$Dart(){
}

Int32Array$Dart.$lookupRTT = function(){
  return RTT.create($cls('Int32Array$Dart'), Int32Array$Dart.$RTTimplements);
}
;
Int32Array$Dart.$RTTimplements = function(rtt){
  Int32Array$Dart.$addTo(rtt);
}
;
Int32Array$Dart.$addTo = function(target){
  var rtt = Int32Array$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  ArrayBufferView$Dart.$addTo(target);
}
;
Int32Array$Dart.BYTES_PER_ELEMENT$named = function(){
  return Int32Array$Dart.BYTES_PER_ELEMENT$getter().apply(this, arguments);
}
;
Int32Array$Dart.BYTES_PER_ELEMENT$getter = function(){
  return 4;
}
;
