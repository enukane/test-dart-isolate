function Int16Array$Dart(){
}

Int16Array$Dart.$lookupRTT = function(){
  return RTT.create($cls('Int16Array$Dart'), Int16Array$Dart.$RTTimplements);
}
;
Int16Array$Dart.$RTTimplements = function(rtt){
  Int16Array$Dart.$addTo(rtt);
}
;
Int16Array$Dart.$addTo = function(target){
  var rtt = Int16Array$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  ArrayBufferView$Dart.$addTo(target);
}
;
Int16Array$Dart.BYTES_PER_ELEMENT$named = function(){
  return Int16Array$Dart.BYTES_PER_ELEMENT$getter().apply(this, arguments);
}
;
Int16Array$Dart.BYTES_PER_ELEMENT$getter = function(){
  return 2;
}
;
