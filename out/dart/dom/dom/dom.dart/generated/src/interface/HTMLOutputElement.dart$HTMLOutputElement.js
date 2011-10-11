function HTMLOutputElement$Dart(){
}

HTMLOutputElement$Dart.$lookupRTT = function(){
  return RTT.create($cls('HTMLOutputElement$Dart'), HTMLOutputElement$Dart.$RTTimplements);
}
;
HTMLOutputElement$Dart.$RTTimplements = function(rtt){
  HTMLOutputElement$Dart.$addTo(rtt);
}
;
HTMLOutputElement$Dart.$addTo = function(target){
  var rtt = HTMLOutputElement$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  HTMLElement$Dart.$addTo(target);
}
;
