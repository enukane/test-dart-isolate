function Document$Dart(){
}

Document$Dart.$lookupRTT = function(){
  return RTT.create($cls('Document$Dart'), Document$Dart.$RTTimplements);
}
;
Document$Dart.$RTTimplements = function(rtt){
  Document$Dart.$addTo(rtt);
}
;
Document$Dart.$addTo = function(target){
  var rtt = Document$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  Node$Dart.$addTo(target);
  NodeSelector$Dart.$addTo(target);
}
;
