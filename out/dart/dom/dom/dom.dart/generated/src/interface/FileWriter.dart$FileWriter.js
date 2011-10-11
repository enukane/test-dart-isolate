function FileWriter$Dart(){
}

FileWriter$Dart.$lookupRTT = function(){
  return RTT.create($cls('FileWriter$Dart'));
}
;
FileWriter$Dart.$addTo = function(target){
  var rtt = FileWriter$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
}
;
FileWriter$Dart.DONE$named = function(){
  return FileWriter$Dart.DONE$getter().apply(this, arguments);
}
;
FileWriter$Dart.DONE$getter = function(){
  return 2;
}
;
FileWriter$Dart.INIT$named = function(){
  return FileWriter$Dart.INIT$getter().apply(this, arguments);
}
;
FileWriter$Dart.INIT$getter = function(){
  return 0;
}
;
FileWriter$Dart.WRITING$named = function(){
  return FileWriter$Dart.WRITING$getter().apply(this, arguments);
}
;
FileWriter$Dart.WRITING$getter = function(){
  return 1;
}
;
