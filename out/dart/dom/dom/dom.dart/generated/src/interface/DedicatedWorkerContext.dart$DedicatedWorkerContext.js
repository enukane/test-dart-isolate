function DedicatedWorkerContext$Dart(){
}

DedicatedWorkerContext$Dart.$lookupRTT = function(){
  return RTT.create($cls('DedicatedWorkerContext$Dart'), DedicatedWorkerContext$Dart.$RTTimplements);
}
;
DedicatedWorkerContext$Dart.$RTTimplements = function(rtt){
  DedicatedWorkerContext$Dart.$addTo(rtt);
}
;
DedicatedWorkerContext$Dart.$addTo = function(target){
  var rtt = DedicatedWorkerContext$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  DedicatedWorkerGlobalScope$Dart.$addTo(target);
}
;
