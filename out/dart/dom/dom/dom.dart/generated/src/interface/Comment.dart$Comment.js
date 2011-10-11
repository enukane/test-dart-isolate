function Comment$Dart(){
}

Comment$Dart.$lookupRTT = function(){
  return RTT.create($cls('Comment$Dart'), Comment$Dart.$RTTimplements);
}
;
Comment$Dart.$RTTimplements = function(rtt){
  Comment$Dart.$addTo(rtt);
}
;
Comment$Dart.$addTo = function(target){
  var rtt = Comment$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  CharacterData$Dart.$addTo(target);
}
;
