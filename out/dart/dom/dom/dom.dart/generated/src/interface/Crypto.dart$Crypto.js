function Crypto$Dart(){
}

Crypto$Dart.$lookupRTT = function(){
  return RTT.create($cls('Crypto$Dart'));
}
;
Crypto$Dart.$addTo = function(target){
  var rtt = Crypto$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
}
;
