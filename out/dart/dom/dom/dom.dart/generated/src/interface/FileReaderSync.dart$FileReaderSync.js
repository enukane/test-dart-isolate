function FileReaderSync$Dart(){
}

FileReaderSync$Dart.$lookupRTT = function(){
  return RTT.create($cls('FileReaderSync$Dart'));
}
;
FileReaderSync$Dart.$addTo = function(target){
  var rtt = FileReaderSync$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
}
;
