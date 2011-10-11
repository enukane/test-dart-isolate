function RegExp$Dart(){
}

RegExp$Dart.$lookupRTT = function(){
  return RTT.create($cls('RegExp$Dart'), RegExp$Dart.$RTTimplements);
}
;
RegExp$Dart.$RTTimplements = function(rtt){
  RegExp$Dart.$addTo(rtt);
}
;
RegExp$Dart.$addTo = function(target){
  var rtt = RegExp$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  Pattern$Dart.$addTo(target);
}
;
