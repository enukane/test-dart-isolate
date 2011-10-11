function Worker$Dart(){
}

Worker$Dart.$lookupRTT = function(){
  return RTT.create($cls('Worker$Dart'), Worker$Dart.$RTTimplements);
}
;
Worker$Dart.$RTTimplements = function(rtt){
  Worker$Dart.$addTo(rtt);
}
;
Worker$Dart.$addTo = function(target){
  var rtt = Worker$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  AbstractWorker$Dart.$addTo(target);
}
;
