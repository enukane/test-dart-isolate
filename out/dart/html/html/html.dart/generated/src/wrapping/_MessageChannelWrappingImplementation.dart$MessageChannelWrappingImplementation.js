function html623afa$MessageChannelWrappingImplementation$Dart(){
}

html623afa$MessageChannelWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('html623afa$MessageChannelWrappingImplementation$Dart'), html623afa$MessageChannelWrappingImplementation$Dart.$RTTimplements);
}
;
html623afa$MessageChannelWrappingImplementation$Dart.$RTTimplements = function(rtt){
  html623afa$MessageChannelWrappingImplementation$Dart.$addTo(rtt);
}
;
html623afa$MessageChannelWrappingImplementation$Dart.$addTo = function(target){
  var rtt = html623afa$MessageChannelWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  html623afa$DOMWrapperBase$Dart.$addTo(target);
  html623afa$MessageChannel$Dart.$addTo(target);
}
;
html623afa$MessageChannelWrappingImplementation$Dart.prototype.$implements$html623afa$MessageChannelWrappingImplementation$Dart = 1;
html623afa$MessageChannelWrappingImplementation$Dart.prototype.$implements$html623afa$MessageChannel$Dart = 1;
html623afa$MessageChannelWrappingImplementation$Dart.prototype.$implements$html623afa$DOMWrapperBase$Dart = 1;
html623afa$MessageChannelWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(html623afa$MessageChannelWrappingImplementation$Dart, html623afa$DOMWrapperBase$Dart);
html623afa$MessageChannelWrappingImplementation$Dart._wrap$html623afa$$Constructor_ = function(ptr){
  html623afa$DOMWrapperBase$Dart._wrap$html623afa$$Constructor_.call(this, ptr);
}
;
html623afa$MessageChannelWrappingImplementation$Dart._wrap$html623afa$$Initializer_ = function(ptr){
  html623afa$DOMWrapperBase$Dart._wrap$html623afa$$Initializer_.call(this, ptr);
}
;
html623afa$MessageChannelWrappingImplementation$Dart.MessageChannelWrappingImplementation$_wrap$36$html623afa$$Factory_ = function(ptr){
  var tmp$0 = new html623afa$MessageChannelWrappingImplementation$Dart;
  tmp$0.$typeInfo = html623afa$MessageChannelWrappingImplementation$Dart.$lookupRTT();
  html623afa$MessageChannelWrappingImplementation$Dart._wrap$html623afa$$Initializer_.call(tmp$0, ptr);
  html623afa$MessageChannelWrappingImplementation$Dart._wrap$html623afa$$Constructor_.call(tmp$0, ptr);
  return tmp$0;
}
;
html623afa$MessageChannelWrappingImplementation$Dart.prototype.port1$named = function(){
  return this.port1$getter().apply(this, arguments);
}
;
html623afa$MessageChannelWrappingImplementation$Dart.prototype.port1$getter = function(){
  return html623afa$LevelDom$Dart.wrapMessagePort$member(this._ptr$html623afa$$getter_().port1$getter());
}
;
html623afa$MessageChannelWrappingImplementation$Dart.prototype.port2$named = function(){
  return this.port2$getter().apply(this, arguments);
}
;
html623afa$MessageChannelWrappingImplementation$Dart.prototype.port2$getter = function(){
  return html623afa$LevelDom$Dart.wrapMessagePort$member(this._ptr$html623afa$$getter_().port2$getter());
}
;
