function SharedWorker$Dart(){
}

SharedWorker$Dart.$lookupRTT = function(){
  return RTT.create($cls('SharedWorker$Dart'), SharedWorker$Dart.$RTTimplements);
}
;
SharedWorker$Dart.$RTTimplements = function(rtt){
  SharedWorker$Dart.$addTo(rtt);
}
;
SharedWorker$Dart.$addTo = function(target){
  var rtt = SharedWorker$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  AbstractWorker$Dart.$addTo(target);
}
;
