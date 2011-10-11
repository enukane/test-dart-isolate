function FileReader$Dart(){
}

FileReader$Dart.$lookupRTT = function(){
  return RTT.create($cls('FileReader$Dart'));
}
;
FileReader$Dart.$addTo = function(target){
  var rtt = FileReader$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
}
;
FileReader$Dart.DONE$named = function(){
  return FileReader$Dart.DONE$getter().apply(this, arguments);
}
;
FileReader$Dart.DONE$getter = function(){
  return 2;
}
;
FileReader$Dart.EMPTY$named = function(){
  return FileReader$Dart.EMPTY$getter().apply(this, arguments);
}
;
FileReader$Dart.EMPTY$getter = function(){
  return 0;
}
;
FileReader$Dart.LOADING$named = function(){
  return FileReader$Dart.LOADING$getter().apply(this, arguments);
}
;
FileReader$Dart.LOADING$getter = function(){
  return 1;
}
;
