function JavaScriptCallFrame$Dart(){
}

JavaScriptCallFrame$Dart.$lookupRTT = function(){
  return RTT.create($cls('JavaScriptCallFrame$Dart'));
}
;
JavaScriptCallFrame$Dart.$addTo = function(target){
  var rtt = JavaScriptCallFrame$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
}
;
JavaScriptCallFrame$Dart.CATCH_SCOPE$named = function(){
  return JavaScriptCallFrame$Dart.CATCH_SCOPE$getter().apply(this, arguments);
}
;
JavaScriptCallFrame$Dart.CATCH_SCOPE$getter = function(){
  return 4;
}
;
JavaScriptCallFrame$Dart.CLOSURE_SCOPE$named = function(){
  return JavaScriptCallFrame$Dart.CLOSURE_SCOPE$getter().apply(this, arguments);
}
;
JavaScriptCallFrame$Dart.CLOSURE_SCOPE$getter = function(){
  return 3;
}
;
JavaScriptCallFrame$Dart.GLOBAL_SCOPE$named = function(){
  return JavaScriptCallFrame$Dart.GLOBAL_SCOPE$getter().apply(this, arguments);
}
;
JavaScriptCallFrame$Dart.GLOBAL_SCOPE$getter = function(){
  return 0;
}
;
JavaScriptCallFrame$Dart.LOCAL_SCOPE$named = function(){
  return JavaScriptCallFrame$Dart.LOCAL_SCOPE$getter().apply(this, arguments);
}
;
JavaScriptCallFrame$Dart.LOCAL_SCOPE$getter = function(){
  return 1;
}
;
JavaScriptCallFrame$Dart.WITH_SCOPE$named = function(){
  return JavaScriptCallFrame$Dart.WITH_SCOPE$getter().apply(this, arguments);
}
;
JavaScriptCallFrame$Dart.WITH_SCOPE$getter = function(){
  return 2;
}
;
