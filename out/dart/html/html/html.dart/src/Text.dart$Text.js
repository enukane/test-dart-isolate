function html623afa$Text$Dart(){
}

html623afa$Text$Dart.$lookupRTT = function(){
  return RTT.create($cls('html623afa$Text$Dart'), html623afa$Text$Dart.$RTTimplements);
}
;
html623afa$Text$Dart.$RTTimplements = function(rtt){
  html623afa$Text$Dart.$addTo(rtt);
}
;
html623afa$Text$Dart.$addTo = function(target){
  var rtt = html623afa$Text$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  html623afa$CharacterData$Dart.$addTo(target);
}
;
