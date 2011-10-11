function NotificationCenter$Dart(){
}

NotificationCenter$Dart.$lookupRTT = function(){
  return RTT.create($cls('NotificationCenter$Dart'));
}
;
NotificationCenter$Dart.$addTo = function(target){
  var rtt = NotificationCenter$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
}
;
