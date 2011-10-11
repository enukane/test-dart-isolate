function Window$Dart(){
}

Window$Dart.$lookupRTT = function(){
  return RTT.create($cls('Window$Dart'), Window$Dart.$RTTimplements);
}
;
Window$Dart.$RTTimplements = function(rtt){
  Window$Dart.$addTo(rtt);
}
;
Window$Dart.$addTo = function(target){
  var rtt = Window$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  EventTarget$Dart.$addTo(target);
}
;
