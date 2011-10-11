function FormData$Dart(){
}

FormData$Dart.$lookupRTT = function(){
  return RTT.create($cls('FormData$Dart'));
}
;
FormData$Dart.$addTo = function(target){
  var rtt = FormData$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
}
;
