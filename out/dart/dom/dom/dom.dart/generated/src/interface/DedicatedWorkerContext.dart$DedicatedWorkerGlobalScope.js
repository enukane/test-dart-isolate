function DedicatedWorkerGlobalScope$Dart(){
}

DedicatedWorkerGlobalScope$Dart.$lookupRTT = function(){
  return RTT.create($cls('DedicatedWorkerGlobalScope$Dart'), DedicatedWorkerGlobalScope$Dart.$RTTimplements);
}
;
DedicatedWorkerGlobalScope$Dart.$RTTimplements = function(rtt){
  DedicatedWorkerGlobalScope$Dart.$addTo(rtt);
}
;
DedicatedWorkerGlobalScope$Dart.$addTo = function(target){
  var rtt = DedicatedWorkerGlobalScope$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  WorkerContext$Dart.$addTo(target);
}
;
