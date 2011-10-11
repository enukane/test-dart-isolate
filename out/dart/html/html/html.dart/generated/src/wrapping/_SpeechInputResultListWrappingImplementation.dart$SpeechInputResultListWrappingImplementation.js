function html623afa$SpeechInputResultListWrappingImplementation$Dart(){
}

html623afa$SpeechInputResultListWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('html623afa$SpeechInputResultListWrappingImplementation$Dart'), html623afa$SpeechInputResultListWrappingImplementation$Dart.$RTTimplements);
}
;
html623afa$SpeechInputResultListWrappingImplementation$Dart.$RTTimplements = function(rtt){
  html623afa$SpeechInputResultListWrappingImplementation$Dart.$addTo(rtt);
}
;
html623afa$SpeechInputResultListWrappingImplementation$Dart.$addTo = function(target){
  var rtt = html623afa$SpeechInputResultListWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  html623afa$DOMWrapperBase$Dart.$addTo(target);
  html623afa$SpeechInputResultList$Dart.$addTo(target);
}
;
html623afa$SpeechInputResultListWrappingImplementation$Dart.prototype.$implements$html623afa$SpeechInputResultListWrappingImplementation$Dart = 1;
html623afa$SpeechInputResultListWrappingImplementation$Dart.prototype.$implements$html623afa$SpeechInputResultList$Dart = 1;
html623afa$SpeechInputResultListWrappingImplementation$Dart.prototype.$implements$html623afa$DOMWrapperBase$Dart = 1;
html623afa$SpeechInputResultListWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(html623afa$SpeechInputResultListWrappingImplementation$Dart, html623afa$DOMWrapperBase$Dart);
html623afa$SpeechInputResultListWrappingImplementation$Dart._wrap$html623afa$$Constructor_ = function(ptr){
  html623afa$DOMWrapperBase$Dart._wrap$html623afa$$Constructor_.call(this, ptr);
}
;
html623afa$SpeechInputResultListWrappingImplementation$Dart._wrap$html623afa$$Initializer_ = function(ptr){
  html623afa$DOMWrapperBase$Dart._wrap$html623afa$$Initializer_.call(this, ptr);
}
;
html623afa$SpeechInputResultListWrappingImplementation$Dart.SpeechInputResultListWrappingImplementation$_wrap$43$html623afa$$Factory_ = function(ptr){
  var tmp$0 = new html623afa$SpeechInputResultListWrappingImplementation$Dart;
  tmp$0.$typeInfo = html623afa$SpeechInputResultListWrappingImplementation$Dart.$lookupRTT();
  html623afa$SpeechInputResultListWrappingImplementation$Dart._wrap$html623afa$$Initializer_.call(tmp$0, ptr);
  html623afa$SpeechInputResultListWrappingImplementation$Dart._wrap$html623afa$$Constructor_.call(tmp$0, ptr);
  return tmp$0;
}
;
html623afa$SpeechInputResultListWrappingImplementation$Dart.prototype.length$named = function(){
  return this.length$getter().apply(this, arguments);
}
;
html623afa$SpeechInputResultListWrappingImplementation$Dart.prototype.length$getter = function(){
  return this._ptr$html623afa$$getter_().length$getter();
}
;
html623afa$SpeechInputResultListWrappingImplementation$Dart.prototype.item$member = function(index){
  return html623afa$LevelDom$Dart.wrapSpeechInputResult$member(this._ptr$html623afa$$getter_().item$named(1, $noargs, index));
}
;
html623afa$SpeechInputResultListWrappingImplementation$Dart.prototype.item$named = function($n, $o, index){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$SpeechInputResultListWrappingImplementation$Dart.prototype.item$member.call(this, index);
}
;
html623afa$SpeechInputResultListWrappingImplementation$Dart.prototype.item$getter = function item$getter(){
  return $bind(html623afa$SpeechInputResultListWrappingImplementation$Dart.prototype.item$named, this);
}
;
