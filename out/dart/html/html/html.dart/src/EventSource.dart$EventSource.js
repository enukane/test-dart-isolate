function html623afa$EventSource$Dart(){
}

html623afa$EventSource$Dart.$lookupRTT = function(){
  return RTT.create($cls('html623afa$EventSource$Dart'), html623afa$EventSource$Dart.$RTTimplements);
}
;
html623afa$EventSource$Dart.$RTTimplements = function(rtt){
  html623afa$EventSource$Dart.$addTo(rtt);
}
;
html623afa$EventSource$Dart.$addTo = function(target){
  var rtt = html623afa$EventSource$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  html623afa$EventTarget$Dart.$addTo(target);
}
;
html623afa$EventSource$Dart.CLOSED$named = function(){
  return html623afa$EventSource$Dart.CLOSED$getter().apply(this, arguments);
}
;
html623afa$EventSource$Dart.CLOSED$getter = function(){
  return 2;
}
;
html623afa$EventSource$Dart.CONNECTING$named = function(){
  return html623afa$EventSource$Dart.CONNECTING$getter().apply(this, arguments);
}
;
html623afa$EventSource$Dart.CONNECTING$getter = function(){
  return 0;
}
;
html623afa$EventSource$Dart.OPEN$named = function(){
  return html623afa$EventSource$Dart.OPEN$getter().apply(this, arguments);
}
;
html623afa$EventSource$Dart.OPEN$getter = function(){
  return 1;
}
;
