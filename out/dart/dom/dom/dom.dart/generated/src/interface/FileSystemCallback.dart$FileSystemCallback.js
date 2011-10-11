function FileSystemCallback$Dart(){
}

FileSystemCallback$Dart.$lookupRTT = function(){
  return RTT.create($cls('FileSystemCallback$Dart'));
}
;
FileSystemCallback$Dart.$addTo = function(target){
  var rtt = FileSystemCallback$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
}
;
