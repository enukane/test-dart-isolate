function Text$Dart(){
}

Text$Dart.$lookupRTT = function(){
  return RTT.create($cls('Text$Dart'), Text$Dart.$RTTimplements);
}
;
Text$Dart.$RTTimplements = function(rtt){
  Text$Dart.$addTo(rtt);
}
;
Text$Dart.$addTo = function(target){
  var rtt = Text$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  CharacterData$Dart.$addTo(target);
}
;
