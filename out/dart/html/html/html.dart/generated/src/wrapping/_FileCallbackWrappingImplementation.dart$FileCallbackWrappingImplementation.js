function html623afa$FileCallbackWrappingImplementation$Dart(){
}

html623afa$FileCallbackWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('html623afa$FileCallbackWrappingImplementation$Dart'), html623afa$FileCallbackWrappingImplementation$Dart.$RTTimplements);
}
;
html623afa$FileCallbackWrappingImplementation$Dart.$RTTimplements = function(rtt){
  html623afa$FileCallbackWrappingImplementation$Dart.$addTo(rtt);
}
;
html623afa$FileCallbackWrappingImplementation$Dart.$addTo = function(target){
  var rtt = html623afa$FileCallbackWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  html623afa$DOMWrapperBase$Dart.$addTo(target);
  html623afa$FileCallback$Dart.$addTo(target);
}
;
html623afa$FileCallbackWrappingImplementation$Dart.prototype.$implements$html623afa$FileCallbackWrappingImplementation$Dart = 1;
html623afa$FileCallbackWrappingImplementation$Dart.prototype.$implements$html623afa$FileCallback$Dart = 1;
html623afa$FileCallbackWrappingImplementation$Dart.prototype.$implements$html623afa$DOMWrapperBase$Dart = 1;
html623afa$FileCallbackWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(html623afa$FileCallbackWrappingImplementation$Dart, html623afa$DOMWrapperBase$Dart);
html623afa$FileCallbackWrappingImplementation$Dart._wrap$html623afa$$Constructor_ = function(ptr){
  html623afa$DOMWrapperBase$Dart._wrap$html623afa$$Constructor_.call(this, ptr);
}
;
html623afa$FileCallbackWrappingImplementation$Dart._wrap$html623afa$$Initializer_ = function(ptr){
  html623afa$DOMWrapperBase$Dart._wrap$html623afa$$Initializer_.call(this, ptr);
}
;
html623afa$FileCallbackWrappingImplementation$Dart.FileCallbackWrappingImplementation$_wrap$34$html623afa$$Factory_ = function(ptr){
  var tmp$0 = new html623afa$FileCallbackWrappingImplementation$Dart;
  tmp$0.$typeInfo = html623afa$FileCallbackWrappingImplementation$Dart.$lookupRTT();
  html623afa$FileCallbackWrappingImplementation$Dart._wrap$html623afa$$Initializer_.call(tmp$0, ptr);
  html623afa$FileCallbackWrappingImplementation$Dart._wrap$html623afa$$Constructor_.call(tmp$0, ptr);
  return tmp$0;
}
;
html623afa$FileCallbackWrappingImplementation$Dart.prototype.handleEvent$member = function(file){
  return this._ptr$html623afa$$getter_().handleEvent$named(1, $noargs, html623afa$LevelDom$Dart.unwrap$member(file));
}
;
html623afa$FileCallbackWrappingImplementation$Dart.prototype.handleEvent$named = function($n, $o, file){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$FileCallbackWrappingImplementation$Dart.prototype.handleEvent$member.call(this, file);
}
;
html623afa$FileCallbackWrappingImplementation$Dart.prototype.handleEvent$getter = function handleEvent$getter(){
  return $bind(html623afa$FileCallbackWrappingImplementation$Dart.prototype.handleEvent$named, this);
}
;
