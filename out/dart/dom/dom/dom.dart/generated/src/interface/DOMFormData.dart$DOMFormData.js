function DOMFormData$Dart(){
}

DOMFormData$Dart.$lookupRTT = function(){
  return RTT.create($cls('DOMFormData$Dart'), DOMFormData$Dart.$RTTimplements);
}
;
DOMFormData$Dart.$RTTimplements = function(rtt){
  DOMFormData$Dart.$addTo(rtt);
}
;
DOMFormData$Dart.$addTo = function(target){
  var rtt = DOMFormData$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  FormData$Dart.$addTo(target);
}
;
