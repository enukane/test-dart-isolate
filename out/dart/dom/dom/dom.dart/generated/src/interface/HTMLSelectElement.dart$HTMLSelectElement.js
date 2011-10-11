function HTMLSelectElement$Dart(){
}

HTMLSelectElement$Dart.$lookupRTT = function(){
  return RTT.create($cls('HTMLSelectElement$Dart'), HTMLSelectElement$Dart.$RTTimplements);
}
;
HTMLSelectElement$Dart.$RTTimplements = function(rtt){
  HTMLSelectElement$Dart.$addTo(rtt);
}
;
HTMLSelectElement$Dart.$addTo = function(target){
  var rtt = HTMLSelectElement$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  HTMLElement$Dart.$addTo(target);
}
;
