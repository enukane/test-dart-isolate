function DOMWindow$Dart(){
}

DOMWindow$Dart.$lookupRTT = function(){
  return RTT.create($cls('DOMWindow$Dart'), DOMWindow$Dart.$RTTimplements);
}
;
DOMWindow$Dart.$RTTimplements = function(rtt){
  DOMWindow$Dart.$addTo(rtt);
}
;
DOMWindow$Dart.$addTo = function(target){
  var rtt = DOMWindow$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  Window$Dart.$addTo(target);
}
;
