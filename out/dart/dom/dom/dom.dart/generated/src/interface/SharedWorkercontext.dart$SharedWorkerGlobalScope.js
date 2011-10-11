function SharedWorkerGlobalScope$Dart(){
}

SharedWorkerGlobalScope$Dart.$lookupRTT = function(){
  return RTT.create($cls('SharedWorkerGlobalScope$Dart'), SharedWorkerGlobalScope$Dart.$RTTimplements);
}
;
SharedWorkerGlobalScope$Dart.$RTTimplements = function(rtt){
  SharedWorkerGlobalScope$Dart.$addTo(rtt);
}
;
SharedWorkerGlobalScope$Dart.$addTo = function(target){
  var rtt = SharedWorkerGlobalScope$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  WorkerContext$Dart.$addTo(target);
}
;
