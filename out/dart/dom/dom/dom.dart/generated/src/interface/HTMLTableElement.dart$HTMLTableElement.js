function HTMLTableElement$Dart(){
}

HTMLTableElement$Dart.$lookupRTT = function(){
  return RTT.create($cls('HTMLTableElement$Dart'), HTMLTableElement$Dart.$RTTimplements);
}
;
HTMLTableElement$Dart.$RTTimplements = function(rtt){
  HTMLTableElement$Dart.$addTo(rtt);
}
;
HTMLTableElement$Dart.$addTo = function(target){
  var rtt = HTMLTableElement$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  HTMLElement$Dart.$addTo(target);
}
;
