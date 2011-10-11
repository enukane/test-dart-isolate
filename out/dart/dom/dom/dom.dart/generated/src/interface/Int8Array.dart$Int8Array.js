function Int8Array$Dart(){
}

Int8Array$Dart.$lookupRTT = function(){
  return RTT.create($cls('Int8Array$Dart'), Int8Array$Dart.$RTTimplements);
}
;
Int8Array$Dart.$RTTimplements = function(rtt){
  Int8Array$Dart.$addTo(rtt);
}
;
Int8Array$Dart.$addTo = function(target){
  var rtt = Int8Array$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  ArrayBufferView$Dart.$addTo(target);
}
;
Int8Array$Dart.BYTES_PER_ELEMENT$named = function(){
  return Int8Array$Dart.BYTES_PER_ELEMENT$getter().apply(this, arguments);
}
;
Int8Array$Dart.BYTES_PER_ELEMENT$getter = function(){
  return 1;
}
;
