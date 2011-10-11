function FileWriterCallback$Dart(){
}

FileWriterCallback$Dart.$lookupRTT = function(){
  return RTT.create($cls('FileWriterCallback$Dart'));
}
;
FileWriterCallback$Dart.$addTo = function(target){
  var rtt = FileWriterCallback$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
}
;
