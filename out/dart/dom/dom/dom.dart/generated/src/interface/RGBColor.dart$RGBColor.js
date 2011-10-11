function RGBColor$Dart(){
}

RGBColor$Dart.$lookupRTT = function(){
  return RTT.create($cls('RGBColor$Dart'));
}
;
RGBColor$Dart.$addTo = function(target){
  var rtt = RGBColor$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
}
;
