function EntrySync$Dart(){
}

EntrySync$Dart.$lookupRTT = function(){
  return RTT.create($cls('EntrySync$Dart'));
}
;
EntrySync$Dart.$addTo = function(target){
  var rtt = EntrySync$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
}
;
