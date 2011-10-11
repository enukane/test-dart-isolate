function TouchList$Dart(){
}

TouchList$Dart.$lookupRTT = function(){
  return RTT.create($cls('TouchList$Dart'), TouchList$Dart.$RTTimplements);
}
;
TouchList$Dart.$RTTimplements = function(rtt){
  TouchList$Dart.$addTo(rtt);
}
;
TouchList$Dart.$addTo = function(target){
  var rtt = TouchList$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  List$Dart.$addTo(target, [Touch$Dart.$lookupRTT()]);
}
;
