function SharedWorkercontext$Dart(){
}

SharedWorkercontext$Dart.$lookupRTT = function(){
  return RTT.create($cls('SharedWorkercontext$Dart'), SharedWorkercontext$Dart.$RTTimplements);
}
;
SharedWorkercontext$Dart.$RTTimplements = function(rtt){
  SharedWorkercontext$Dart.$addTo(rtt);
}
;
SharedWorkercontext$Dart.$addTo = function(target){
  var rtt = SharedWorkercontext$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  SharedWorkerGlobalScope$Dart.$addTo(target);
}
;
