function XMLHttpRequestProgressEvent$Dart(){
}

XMLHttpRequestProgressEvent$Dart.$lookupRTT = function(){
  return RTT.create($cls('XMLHttpRequestProgressEvent$Dart'), XMLHttpRequestProgressEvent$Dart.$RTTimplements);
}
;
XMLHttpRequestProgressEvent$Dart.$RTTimplements = function(rtt){
  XMLHttpRequestProgressEvent$Dart.$addTo(rtt);
}
;
XMLHttpRequestProgressEvent$Dart.$addTo = function(target){
  var rtt = XMLHttpRequestProgressEvent$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  ProgressEvent$Dart.$addTo(target);
}
;
