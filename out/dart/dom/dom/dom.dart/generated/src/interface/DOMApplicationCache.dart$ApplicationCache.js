function ApplicationCache$Dart(){
}

ApplicationCache$Dart.$lookupRTT = function(){
  return RTT.create($cls('ApplicationCache$Dart'), ApplicationCache$Dart.$RTTimplements);
}
;
ApplicationCache$Dart.$RTTimplements = function(rtt){
  ApplicationCache$Dart.$addTo(rtt);
}
;
ApplicationCache$Dart.$addTo = function(target){
  var rtt = ApplicationCache$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  EventTarget$Dart.$addTo(target);
}
;
