function ArrayBufferView$Dart(){
}

ArrayBufferView$Dart.$lookupRTT = function(){
  return RTT.create($cls('ArrayBufferView$Dart'));
}
;
ArrayBufferView$Dart.$addTo = function(target){
  var rtt = ArrayBufferView$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
}
;
