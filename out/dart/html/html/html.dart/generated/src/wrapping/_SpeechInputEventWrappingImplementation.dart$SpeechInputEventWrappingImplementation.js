function html623afa$SpeechInputEventWrappingImplementation$Dart(){
}

html623afa$SpeechInputEventWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('html623afa$SpeechInputEventWrappingImplementation$Dart'), html623afa$SpeechInputEventWrappingImplementation$Dart.$RTTimplements);
}
;
html623afa$SpeechInputEventWrappingImplementation$Dart.$RTTimplements = function(rtt){
  html623afa$SpeechInputEventWrappingImplementation$Dart.$addTo(rtt);
}
;
html623afa$SpeechInputEventWrappingImplementation$Dart.$addTo = function(target){
  var rtt = html623afa$SpeechInputEventWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  html623afa$EventWrappingImplementation$Dart.$addTo(target);
  html623afa$SpeechInputEvent$Dart.$addTo(target);
}
;
html623afa$SpeechInputEventWrappingImplementation$Dart.prototype.$implements$html623afa$SpeechInputEventWrappingImplementation$Dart = 1;
html623afa$SpeechInputEventWrappingImplementation$Dart.prototype.$implements$html623afa$SpeechInputEvent$Dart = 1;
html623afa$SpeechInputEventWrappingImplementation$Dart.prototype.$implements$html623afa$Event$Dart = 1;
html623afa$SpeechInputEventWrappingImplementation$Dart.prototype.$implements$html623afa$EventWrappingImplementation$Dart = 1;
html623afa$SpeechInputEventWrappingImplementation$Dart.prototype.$implements$html623afa$DOMWrapperBase$Dart = 1;
html623afa$SpeechInputEventWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(html623afa$SpeechInputEventWrappingImplementation$Dart, html623afa$EventWrappingImplementation$Dart);
html623afa$SpeechInputEventWrappingImplementation$Dart._wrap$html623afa$$Constructor_ = function(ptr){
  html623afa$EventWrappingImplementation$Dart._wrap$html623afa$$Constructor_.call(this, ptr);
}
;
html623afa$SpeechInputEventWrappingImplementation$Dart._wrap$html623afa$$Initializer_ = function(ptr){
  html623afa$EventWrappingImplementation$Dart._wrap$html623afa$$Initializer_.call(this, ptr);
}
;
html623afa$SpeechInputEventWrappingImplementation$Dart.SpeechInputEventWrappingImplementation$_wrap$38$html623afa$$Factory_ = function(ptr){
  var tmp$0 = new html623afa$SpeechInputEventWrappingImplementation$Dart;
  tmp$0.$typeInfo = html623afa$SpeechInputEventWrappingImplementation$Dart.$lookupRTT();
  html623afa$SpeechInputEventWrappingImplementation$Dart._wrap$html623afa$$Initializer_.call(tmp$0, ptr);
  html623afa$SpeechInputEventWrappingImplementation$Dart._wrap$html623afa$$Constructor_.call(tmp$0, ptr);
  return tmp$0;
}
;
html623afa$SpeechInputEventWrappingImplementation$Dart.prototype.results$named = function(){
  return this.results$getter().apply(this, arguments);
}
;
html623afa$SpeechInputEventWrappingImplementation$Dart.prototype.results$getter = function(){
  return html623afa$LevelDom$Dart.wrapSpeechInputResultList$member(this._ptr$html623afa$$getter_().results$getter());
}
;
