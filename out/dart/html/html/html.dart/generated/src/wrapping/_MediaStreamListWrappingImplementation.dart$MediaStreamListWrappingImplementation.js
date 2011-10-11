function html623afa$MediaStreamListWrappingImplementation$Dart(){
}

html623afa$MediaStreamListWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('html623afa$MediaStreamListWrappingImplementation$Dart'), html623afa$MediaStreamListWrappingImplementation$Dart.$RTTimplements);
}
;
html623afa$MediaStreamListWrappingImplementation$Dart.$RTTimplements = function(rtt){
  html623afa$MediaStreamListWrappingImplementation$Dart.$addTo(rtt);
}
;
html623afa$MediaStreamListWrappingImplementation$Dart.$addTo = function(target){
  var rtt = html623afa$MediaStreamListWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  html623afa$DOMWrapperBase$Dart.$addTo(target);
  html623afa$MediaStreamList$Dart.$addTo(target);
}
;
html623afa$MediaStreamListWrappingImplementation$Dart.prototype.$implements$html623afa$MediaStreamListWrappingImplementation$Dart = 1;
html623afa$MediaStreamListWrappingImplementation$Dart.prototype.$implements$html623afa$MediaStreamList$Dart = 1;
html623afa$MediaStreamListWrappingImplementation$Dart.prototype.$implements$html623afa$DOMWrapperBase$Dart = 1;
html623afa$MediaStreamListWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(html623afa$MediaStreamListWrappingImplementation$Dart, html623afa$DOMWrapperBase$Dart);
html623afa$MediaStreamListWrappingImplementation$Dart._wrap$html623afa$$Constructor_ = function(ptr){
  html623afa$DOMWrapperBase$Dart._wrap$html623afa$$Constructor_.call(this, ptr);
}
;
html623afa$MediaStreamListWrappingImplementation$Dart._wrap$html623afa$$Initializer_ = function(ptr){
  html623afa$DOMWrapperBase$Dart._wrap$html623afa$$Initializer_.call(this, ptr);
}
;
html623afa$MediaStreamListWrappingImplementation$Dart.MediaStreamListWrappingImplementation$_wrap$37$html623afa$$Factory_ = function(ptr){
  var tmp$0 = new html623afa$MediaStreamListWrappingImplementation$Dart;
  tmp$0.$typeInfo = html623afa$MediaStreamListWrappingImplementation$Dart.$lookupRTT();
  html623afa$MediaStreamListWrappingImplementation$Dart._wrap$html623afa$$Initializer_.call(tmp$0, ptr);
  html623afa$MediaStreamListWrappingImplementation$Dart._wrap$html623afa$$Constructor_.call(tmp$0, ptr);
  return tmp$0;
}
;
html623afa$MediaStreamListWrappingImplementation$Dart.prototype.length$named = function(){
  return this.length$getter().apply(this, arguments);
}
;
html623afa$MediaStreamListWrappingImplementation$Dart.prototype.length$getter = function(){
  return this._ptr$html623afa$$getter_().length$getter();
}
;
html623afa$MediaStreamListWrappingImplementation$Dart.prototype.item$member = function(index){
  return html623afa$LevelDom$Dart.wrapMediaStream$member(this._ptr$html623afa$$getter_().item$named(1, $noargs, index));
}
;
html623afa$MediaStreamListWrappingImplementation$Dart.prototype.item$named = function($n, $o, index){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$MediaStreamListWrappingImplementation$Dart.prototype.item$member.call(this, index);
}
;
html623afa$MediaStreamListWrappingImplementation$Dart.prototype.item$getter = function item$getter(){
  return $bind(html623afa$MediaStreamListWrappingImplementation$Dart.prototype.item$named, this);
}
;
