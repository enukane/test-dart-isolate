function html623afa$FileListWrappingImplementation$Dart(){
}

html623afa$FileListWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('html623afa$FileListWrappingImplementation$Dart'), html623afa$FileListWrappingImplementation$Dart.$RTTimplements);
}
;
html623afa$FileListWrappingImplementation$Dart.$RTTimplements = function(rtt){
  html623afa$FileListWrappingImplementation$Dart.$addTo(rtt);
}
;
html623afa$FileListWrappingImplementation$Dart.$addTo = function(target){
  var rtt = html623afa$FileListWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  html623afa$DOMWrapperBase$Dart.$addTo(target);
  html623afa$FileList$Dart.$addTo(target);
}
;
html623afa$FileListWrappingImplementation$Dart.prototype.$implements$html623afa$FileListWrappingImplementation$Dart = 1;
html623afa$FileListWrappingImplementation$Dart.prototype.$implements$html623afa$FileList$Dart = 1;
html623afa$FileListWrappingImplementation$Dart.prototype.$implements$html623afa$DOMWrapperBase$Dart = 1;
html623afa$FileListWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(html623afa$FileListWrappingImplementation$Dart, html623afa$DOMWrapperBase$Dart);
html623afa$FileListWrappingImplementation$Dart._wrap$html623afa$$Constructor_ = function(ptr){
  html623afa$DOMWrapperBase$Dart._wrap$html623afa$$Constructor_.call(this, ptr);
}
;
html623afa$FileListWrappingImplementation$Dart._wrap$html623afa$$Initializer_ = function(ptr){
  html623afa$DOMWrapperBase$Dart._wrap$html623afa$$Initializer_.call(this, ptr);
}
;
html623afa$FileListWrappingImplementation$Dart.FileListWrappingImplementation$_wrap$30$html623afa$$Factory_ = function(ptr){
  var tmp$0 = new html623afa$FileListWrappingImplementation$Dart;
  tmp$0.$typeInfo = html623afa$FileListWrappingImplementation$Dart.$lookupRTT();
  html623afa$FileListWrappingImplementation$Dart._wrap$html623afa$$Initializer_.call(tmp$0, ptr);
  html623afa$FileListWrappingImplementation$Dart._wrap$html623afa$$Constructor_.call(tmp$0, ptr);
  return tmp$0;
}
;
html623afa$FileListWrappingImplementation$Dart.prototype.length$named = function(){
  return this.length$getter().apply(this, arguments);
}
;
html623afa$FileListWrappingImplementation$Dart.prototype.length$getter = function(){
  return this._ptr$html623afa$$getter_().length$getter();
}
;
html623afa$FileListWrappingImplementation$Dart.prototype.item$member = function(index){
  return html623afa$LevelDom$Dart.wrapFile$member(this._ptr$html623afa$$getter_().item$named(1, $noargs, index));
}
;
html623afa$FileListWrappingImplementation$Dart.prototype.item$named = function($n, $o, index){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$FileListWrappingImplementation$Dart.prototype.item$member.call(this, index);
}
;
html623afa$FileListWrappingImplementation$Dart.prototype.item$getter = function item$getter(){
  return $bind(html623afa$FileListWrappingImplementation$Dart.prototype.item$named, this);
}
;
