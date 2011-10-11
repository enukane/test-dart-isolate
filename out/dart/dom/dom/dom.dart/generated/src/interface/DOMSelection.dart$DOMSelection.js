function DOMSelection$Dart(){
}

DOMSelection$Dart.$lookupRTT = function(){
  return RTT.create($cls('DOMSelection$Dart'), DOMSelection$Dart.$RTTimplements);
}
;
DOMSelection$Dart.$RTTimplements = function(rtt){
  DOMSelection$Dart.$addTo(rtt);
}
;
DOMSelection$Dart.$addTo = function(target){
  var rtt = DOMSelection$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  Selection$Dart.$addTo(target);
}
;
