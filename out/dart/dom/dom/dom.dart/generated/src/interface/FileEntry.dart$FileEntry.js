function FileEntry$Dart(){
}

FileEntry$Dart.$lookupRTT = function(){
  return RTT.create($cls('FileEntry$Dart'), FileEntry$Dart.$RTTimplements);
}
;
FileEntry$Dart.$RTTimplements = function(rtt){
  FileEntry$Dart.$addTo(rtt);
}
;
FileEntry$Dart.$addTo = function(target){
  var rtt = FileEntry$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  Entry$Dart.$addTo(target);
}
;
