function String$Dart(){
}

String$Dart.$lookupRTT = function(){
  return RTT.create($cls('String$Dart'), String$Dart.$RTTimplements);
}
;
String$Dart.$RTTimplements = function(rtt){
  String$Dart.$addTo(rtt);
}
;
String$Dart.$addTo = function(target){
  var rtt = String$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  Comparable$Dart.$addTo(target);
  Hashable$Dart.$addTo(target);
  Pattern$Dart.$addTo(target);
}
;
