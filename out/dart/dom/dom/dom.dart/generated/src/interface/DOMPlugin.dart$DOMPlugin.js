function DOMPlugin$Dart(){
}

DOMPlugin$Dart.$lookupRTT = function(){
  return RTT.create($cls('DOMPlugin$Dart'));
}
;
DOMPlugin$Dart.$addTo = function(target){
  var rtt = DOMPlugin$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
}
;
