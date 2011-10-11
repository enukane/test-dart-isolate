function FileWriterSync$Dart(){
}

FileWriterSync$Dart.$lookupRTT = function(){
  return RTT.create($cls('FileWriterSync$Dart'));
}
;
FileWriterSync$Dart.$addTo = function(target){
  var rtt = FileWriterSync$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
}
;
