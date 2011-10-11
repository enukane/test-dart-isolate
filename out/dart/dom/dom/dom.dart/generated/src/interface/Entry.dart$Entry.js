function Entry$Dart(){
}

Entry$Dart.$lookupRTT = function(){
  return RTT.create($cls('Entry$Dart'));
}
;
Entry$Dart.$addTo = function(target){
  var rtt = Entry$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
}
;
