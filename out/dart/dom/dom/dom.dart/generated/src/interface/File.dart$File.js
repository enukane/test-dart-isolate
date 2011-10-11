function File$Dart(){
}

File$Dart.$lookupRTT = function(){
  return RTT.create($cls('File$Dart'), File$Dart.$RTTimplements);
}
;
File$Dart.$RTTimplements = function(rtt){
  File$Dart.$addTo(rtt);
}
;
File$Dart.$addTo = function(target){
  var rtt = File$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  Blob$Dart.$addTo(target);
}
;
