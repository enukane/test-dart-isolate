function BarProp$Dart(){
}

BarProp$Dart.$lookupRTT = function(){
  return RTT.create($cls('BarProp$Dart'));
}
;
BarProp$Dart.$addTo = function(target){
  var rtt = BarProp$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
}
;
