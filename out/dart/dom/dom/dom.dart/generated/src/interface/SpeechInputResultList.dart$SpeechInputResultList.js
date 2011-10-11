function SpeechInputResultList$Dart(){
}

SpeechInputResultList$Dart.$lookupRTT = function(){
  return RTT.create($cls('SpeechInputResultList$Dart'));
}
;
SpeechInputResultList$Dart.$addTo = function(target){
  var rtt = SpeechInputResultList$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
}
;
