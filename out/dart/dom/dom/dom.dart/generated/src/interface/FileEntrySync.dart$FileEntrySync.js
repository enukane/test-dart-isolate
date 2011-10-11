function FileEntrySync$Dart(){
}

FileEntrySync$Dart.$lookupRTT = function(){
  return RTT.create($cls('FileEntrySync$Dart'), FileEntrySync$Dart.$RTTimplements);
}
;
FileEntrySync$Dart.$RTTimplements = function(rtt){
  FileEntrySync$Dart.$addTo(rtt);
}
;
FileEntrySync$Dart.$addTo = function(target){
  var rtt = FileEntrySync$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  EntrySync$Dart.$addTo(target);
}
;
