function Element$Dart(){
}

Element$Dart.$lookupRTT = function(){
  return RTT.create($cls('Element$Dart'), Element$Dart.$RTTimplements);
}
;
Element$Dart.$RTTimplements = function(rtt){
  Element$Dart.$addTo(rtt);
}
;
Element$Dart.$addTo = function(target){
  var rtt = Element$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  Node$Dart.$addTo(target);
  NodeSelector$Dart.$addTo(target);
  ElementTraversal$Dart.$addTo(target);
}
;
