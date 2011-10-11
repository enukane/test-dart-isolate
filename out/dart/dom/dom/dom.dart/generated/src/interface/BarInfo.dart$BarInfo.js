function BarInfo$Dart(){
}

BarInfo$Dart.$lookupRTT = function(){
  return RTT.create($cls('BarInfo$Dart'), BarInfo$Dart.$RTTimplements);
}
;
BarInfo$Dart.$RTTimplements = function(rtt){
  BarInfo$Dart.$addTo(rtt);
}
;
BarInfo$Dart.$addTo = function(target){
  var rtt = BarInfo$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  BarProp$Dart.$addTo(target);
}
;
