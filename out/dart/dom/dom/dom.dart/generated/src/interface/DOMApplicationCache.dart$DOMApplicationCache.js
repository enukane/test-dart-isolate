function DOMApplicationCache$Dart(){
}

DOMApplicationCache$Dart.$lookupRTT = function(){
  return RTT.create($cls('DOMApplicationCache$Dart'), DOMApplicationCache$Dart.$RTTimplements);
}
;
DOMApplicationCache$Dart.$RTTimplements = function(rtt){
  DOMApplicationCache$Dart.$addTo(rtt);
}
;
DOMApplicationCache$Dart.$addTo = function(target){
  var rtt = DOMApplicationCache$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  ApplicationCache$Dart.$addTo(target);
}
;
DOMApplicationCache$Dart.CHECKING$named = function(){
  return DOMApplicationCache$Dart.CHECKING$getter().apply(this, arguments);
}
;
DOMApplicationCache$Dart.CHECKING$getter = function(){
  return 2;
}
;
DOMApplicationCache$Dart.DOWNLOADING$named = function(){
  return DOMApplicationCache$Dart.DOWNLOADING$getter().apply(this, arguments);
}
;
DOMApplicationCache$Dart.DOWNLOADING$getter = function(){
  return 3;
}
;
DOMApplicationCache$Dart.IDLE$named = function(){
  return DOMApplicationCache$Dart.IDLE$getter().apply(this, arguments);
}
;
DOMApplicationCache$Dart.IDLE$getter = function(){
  return 1;
}
;
DOMApplicationCache$Dart.OBSOLETE$named = function(){
  return DOMApplicationCache$Dart.OBSOLETE$getter().apply(this, arguments);
}
;
DOMApplicationCache$Dart.OBSOLETE$getter = function(){
  return 5;
}
;
DOMApplicationCache$Dart.UNCACHED$named = function(){
  return DOMApplicationCache$Dart.UNCACHED$getter().apply(this, arguments);
}
;
DOMApplicationCache$Dart.UNCACHED$getter = function(){
  return 0;
}
;
DOMApplicationCache$Dart.UPDATEREADY$named = function(){
  return DOMApplicationCache$Dart.UPDATEREADY$getter().apply(this, arguments);
}
;
DOMApplicationCache$Dart.UPDATEREADY$getter = function(){
  return 4;
}
;
