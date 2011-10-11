function html623afa$FileSystemCallbackWrappingImplementation$Dart(){
}

html623afa$FileSystemCallbackWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('html623afa$FileSystemCallbackWrappingImplementation$Dart'), html623afa$FileSystemCallbackWrappingImplementation$Dart.$RTTimplements);
}
;
html623afa$FileSystemCallbackWrappingImplementation$Dart.$RTTimplements = function(rtt){
  html623afa$FileSystemCallbackWrappingImplementation$Dart.$addTo(rtt);
}
;
html623afa$FileSystemCallbackWrappingImplementation$Dart.$addTo = function(target){
  var rtt = html623afa$FileSystemCallbackWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  html623afa$DOMWrapperBase$Dart.$addTo(target);
  html623afa$FileSystemCallback$Dart.$addTo(target);
}
;
html623afa$FileSystemCallbackWrappingImplementation$Dart.prototype.$implements$html623afa$FileSystemCallbackWrappingImplementation$Dart = 1;
html623afa$FileSystemCallbackWrappingImplementation$Dart.prototype.$implements$html623afa$FileSystemCallback$Dart = 1;
html623afa$FileSystemCallbackWrappingImplementation$Dart.prototype.$implements$html623afa$DOMWrapperBase$Dart = 1;
html623afa$FileSystemCallbackWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(html623afa$FileSystemCallbackWrappingImplementation$Dart, html623afa$DOMWrapperBase$Dart);
html623afa$FileSystemCallbackWrappingImplementation$Dart._wrap$html623afa$$Constructor_ = function(ptr){
  html623afa$DOMWrapperBase$Dart._wrap$html623afa$$Constructor_.call(this, ptr);
}
;
html623afa$FileSystemCallbackWrappingImplementation$Dart._wrap$html623afa$$Initializer_ = function(ptr){
  html623afa$DOMWrapperBase$Dart._wrap$html623afa$$Initializer_.call(this, ptr);
}
;
html623afa$FileSystemCallbackWrappingImplementation$Dart.FileSystemCallbackWrappingImplementation$_wrap$40$html623afa$$Factory_ = function(ptr){
  var tmp$0 = new html623afa$FileSystemCallbackWrappingImplementation$Dart;
  tmp$0.$typeInfo = html623afa$FileSystemCallbackWrappingImplementation$Dart.$lookupRTT();
  html623afa$FileSystemCallbackWrappingImplementation$Dart._wrap$html623afa$$Initializer_.call(tmp$0, ptr);
  html623afa$FileSystemCallbackWrappingImplementation$Dart._wrap$html623afa$$Constructor_.call(tmp$0, ptr);
  return tmp$0;
}
;
html623afa$FileSystemCallbackWrappingImplementation$Dart.prototype.handleEvent$member = function(fileSystem){
  return this._ptr$html623afa$$getter_().handleEvent$named(1, $noargs, html623afa$LevelDom$Dart.unwrap$member(fileSystem));
}
;
html623afa$FileSystemCallbackWrappingImplementation$Dart.prototype.handleEvent$named = function($n, $o, fileSystem){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$FileSystemCallbackWrappingImplementation$Dart.prototype.handleEvent$member.call(this, fileSystem);
}
;
html623afa$FileSystemCallbackWrappingImplementation$Dart.prototype.handleEvent$getter = function handleEvent$getter(){
  return $bind(html623afa$FileSystemCallbackWrappingImplementation$Dart.prototype.handleEvent$named, this);
}
;
