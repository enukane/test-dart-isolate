function ImageData$Dart(){
}

ImageData$Dart.$lookupRTT = function(){
  return RTT.create($cls('ImageData$Dart'));
}
;
ImageData$Dart.$addTo = function(target){
  var rtt = ImageData$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
}
;
