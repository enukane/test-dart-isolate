function Selection$Dart(){
}

Selection$Dart.$lookupRTT = function(){
  return RTT.create($cls('Selection$Dart'));
}
;
Selection$Dart.$addTo = function(target){
  var rtt = Selection$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
}
;
