function html623afa$Window$Dart(){
}

html623afa$Window$Dart.$lookupRTT = function(){
  return RTT.create($cls('html623afa$Window$Dart'), html623afa$Window$Dart.$RTTimplements);
}
;
html623afa$Window$Dart.$RTTimplements = function(rtt){
  html623afa$Window$Dart.$addTo(rtt);
}
;
html623afa$Window$Dart.$addTo = function(target){
  var rtt = html623afa$Window$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  html623afa$EventTarget$Dart.$addTo(target);
}
;
