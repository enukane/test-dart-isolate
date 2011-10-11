function WebKitCSSKeyframesRule$Dart(){
}

WebKitCSSKeyframesRule$Dart.$lookupRTT = function(){
  return RTT.create($cls('WebKitCSSKeyframesRule$Dart'), WebKitCSSKeyframesRule$Dart.$RTTimplements);
}
;
WebKitCSSKeyframesRule$Dart.$RTTimplements = function(rtt){
  WebKitCSSKeyframesRule$Dart.$addTo(rtt);
}
;
WebKitCSSKeyframesRule$Dart.$addTo = function(target){
  var rtt = WebKitCSSKeyframesRule$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  CSSRule$Dart.$addTo(target);
}
;
