function WorkerGlobalScope$Dart(){
}

WorkerGlobalScope$Dart.$lookupRTT = function(){
  return RTT.create($cls('WorkerGlobalScope$Dart'));
}
;
WorkerGlobalScope$Dart.$addTo = function(target){
  var rtt = WorkerGlobalScope$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
}
;
