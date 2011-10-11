function XMLHttpRequest$Dart(){
}

XMLHttpRequest$Dart.$lookupRTT = function(){
  return RTT.create($cls('XMLHttpRequest$Dart'), XMLHttpRequest$Dart.$RTTimplements);
}
;
XMLHttpRequest$Dart.$RTTimplements = function(rtt){
  XMLHttpRequest$Dart.$addTo(rtt);
}
;
XMLHttpRequest$Dart.$addTo = function(target){
  var rtt = XMLHttpRequest$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  EventTarget$Dart.$addTo(target);
}
;
XMLHttpRequest$Dart.DONE$named = function(){
  return XMLHttpRequest$Dart.DONE$getter().apply(this, arguments);
}
;
XMLHttpRequest$Dart.DONE$getter = function(){
  return 4;
}
;
XMLHttpRequest$Dart.HEADERS_RECEIVED$named = function(){
  return XMLHttpRequest$Dart.HEADERS_RECEIVED$getter().apply(this, arguments);
}
;
XMLHttpRequest$Dart.HEADERS_RECEIVED$getter = function(){
  return 2;
}
;
XMLHttpRequest$Dart.LOADING$named = function(){
  return XMLHttpRequest$Dart.LOADING$getter().apply(this, arguments);
}
;
XMLHttpRequest$Dart.LOADING$getter = function(){
  return 3;
}
;
XMLHttpRequest$Dart.OPENED$named = function(){
  return XMLHttpRequest$Dart.OPENED$getter().apply(this, arguments);
}
;
XMLHttpRequest$Dart.OPENED$getter = function(){
  return 1;
}
;
XMLHttpRequest$Dart.UNSENT$named = function(){
  return XMLHttpRequest$Dart.UNSENT$getter().apply(this, arguments);
}
;
XMLHttpRequest$Dart.UNSENT$getter = function(){
  return 0;
}
;
