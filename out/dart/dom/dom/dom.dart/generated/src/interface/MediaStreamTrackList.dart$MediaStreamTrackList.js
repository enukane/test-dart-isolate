function MediaStreamTrackList$Dart(){
}

MediaStreamTrackList$Dart.$lookupRTT = function(){
  return RTT.create($cls('MediaStreamTrackList$Dart'));
}
;
MediaStreamTrackList$Dart.$addTo = function(target){
  var rtt = MediaStreamTrackList$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
}
;
