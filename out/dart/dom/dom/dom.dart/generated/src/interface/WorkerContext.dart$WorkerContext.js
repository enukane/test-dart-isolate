function WorkerContext$Dart(){
}

WorkerContext$Dart.$lookupRTT = function(){
  return RTT.create($cls('WorkerContext$Dart'), WorkerContext$Dart.$RTTimplements);
}
;
WorkerContext$Dart.$RTTimplements = function(rtt){
  WorkerContext$Dart.$addTo(rtt);
}
;
WorkerContext$Dart.$addTo = function(target){
  var rtt = WorkerContext$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  WorkerGlobalScope$Dart.$addTo(target);
}
;
