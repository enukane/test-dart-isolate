function FileList$Dart(){
}

FileList$Dart.$lookupRTT = function(){
  return RTT.create($cls('FileList$Dart'));
}
;
FileList$Dart.$addTo = function(target){
  var rtt = FileList$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
}
;
