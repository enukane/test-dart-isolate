function html623afa$FileWriterCallbackWrappingImplementation$Dart(){
}

html623afa$FileWriterCallbackWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('html623afa$FileWriterCallbackWrappingImplementation$Dart'), html623afa$FileWriterCallbackWrappingImplementation$Dart.$RTTimplements);
}
;
html623afa$FileWriterCallbackWrappingImplementation$Dart.$RTTimplements = function(rtt){
  html623afa$FileWriterCallbackWrappingImplementation$Dart.$addTo(rtt);
}
;
html623afa$FileWriterCallbackWrappingImplementation$Dart.$addTo = function(target){
  var rtt = html623afa$FileWriterCallbackWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  html623afa$DOMWrapperBase$Dart.$addTo(target);
  html623afa$FileWriterCallback$Dart.$addTo(target);
}
;
html623afa$FileWriterCallbackWrappingImplementation$Dart.prototype.$implements$html623afa$FileWriterCallbackWrappingImplementation$Dart = 1;
html623afa$FileWriterCallbackWrappingImplementation$Dart.prototype.$implements$html623afa$FileWriterCallback$Dart = 1;
html623afa$FileWriterCallbackWrappingImplementation$Dart.prototype.$implements$html623afa$DOMWrapperBase$Dart = 1;
html623afa$FileWriterCallbackWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(html623afa$FileWriterCallbackWrappingImplementation$Dart, html623afa$DOMWrapperBase$Dart);
html623afa$FileWriterCallbackWrappingImplementation$Dart._wrap$html623afa$$Constructor_ = function(ptr){
  html623afa$DOMWrapperBase$Dart._wrap$html623afa$$Constructor_.call(this, ptr);
}
;
html623afa$FileWriterCallbackWrappingImplementation$Dart._wrap$html623afa$$Initializer_ = function(ptr){
  html623afa$DOMWrapperBase$Dart._wrap$html623afa$$Initializer_.call(this, ptr);
}
;
html623afa$FileWriterCallbackWrappingImplementation$Dart.FileWriterCallbackWrappingImplementation$_wrap$40$html623afa$$Factory_ = function(ptr){
  var tmp$0 = new html623afa$FileWriterCallbackWrappingImplementation$Dart;
  tmp$0.$typeInfo = html623afa$FileWriterCallbackWrappingImplementation$Dart.$lookupRTT();
  html623afa$FileWriterCallbackWrappingImplementation$Dart._wrap$html623afa$$Initializer_.call(tmp$0, ptr);
  html623afa$FileWriterCallbackWrappingImplementation$Dart._wrap$html623afa$$Constructor_.call(tmp$0, ptr);
  return tmp$0;
}
;
html623afa$FileWriterCallbackWrappingImplementation$Dart.prototype.handleEvent$member = function(fileWriter){
  return this._ptr$html623afa$$getter_().handleEvent$named(1, $noargs, html623afa$LevelDom$Dart.unwrap$member(fileWriter));
}
;
html623afa$FileWriterCallbackWrappingImplementation$Dart.prototype.handleEvent$named = function($n, $o, fileWriter){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$FileWriterCallbackWrappingImplementation$Dart.prototype.handleEvent$member.call(this, fileWriter);
}
;
html623afa$FileWriterCallbackWrappingImplementation$Dart.prototype.handleEvent$getter = function handleEvent$getter(){
  return $bind(html623afa$FileWriterCallbackWrappingImplementation$Dart.prototype.handleEvent$named, this);
}
;
