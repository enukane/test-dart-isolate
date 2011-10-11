function HTMLIsIndexElement$Dart(){
}

HTMLIsIndexElement$Dart.$lookupRTT = function(){
  return RTT.create($cls('HTMLIsIndexElement$Dart'), HTMLIsIndexElement$Dart.$RTTimplements);
}
;
HTMLIsIndexElement$Dart.$RTTimplements = function(rtt){
  HTMLIsIndexElement$Dart.$addTo(rtt);
}
;
HTMLIsIndexElement$Dart.$addTo = function(target){
  var rtt = HTMLIsIndexElement$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  HTMLInputElement$Dart.$addTo(target);
}
;
