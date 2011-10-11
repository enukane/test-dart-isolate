function num$Dart(){
}

num$Dart.$lookupRTT = function(){
  return RTT.create($cls('num$Dart'), num$Dart.$RTTimplements);
}
;
num$Dart.$RTTimplements = function(rtt){
  num$Dart.$addTo(rtt);
}
;
num$Dart.$addTo = function(target){
  var rtt = num$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  Comparable$Dart.$addTo(target);
  Hashable$Dart.$addTo(target);
}
;
