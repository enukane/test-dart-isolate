function ReceivePortFactory$Dart(){
}

ReceivePortFactory$Dart.$lookupRTT = function(){
  return RTT.create($cls('ReceivePortFactory$Dart'));
}
;
ReceivePortFactory$Dart.$addTo = function(target){
  var rtt = ReceivePortFactory$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
}
;
ReceivePortFactory$Dart.prototype.$implements$ReceivePortFactory$Dart = 1;
ReceivePortFactory$Dart.prototype.$implements$Object$Dart = 1;
ReceivePortFactory$Dart.ReceivePort$$Factory = function(){
  return ReceivePortImpl$Dart.ReceivePortImpl$$Factory();
}
;
ReceivePortFactory$Dart.ReceivePort$singleShot$11$Factory = function(){
  return ReceivePortSingleShotImpl$Dart.ReceivePortSingleShotImpl$$Factory();
}
;
