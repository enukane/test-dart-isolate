function FileCallback$Dart(){
}

FileCallback$Dart.$lookupRTT = function(){
  return RTT.create($cls('FileCallback$Dart'));
}
;
FileCallback$Dart.$addTo = function(target){
  var rtt = FileCallback$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
}
;
