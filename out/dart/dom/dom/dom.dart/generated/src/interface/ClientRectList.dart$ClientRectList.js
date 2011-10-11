function ClientRectList$Dart(){
}

ClientRectList$Dart.$lookupRTT = function(){
  return RTT.create($cls('ClientRectList$Dart'));
}
;
ClientRectList$Dart.$addTo = function(target){
  var rtt = ClientRectList$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
}
;
