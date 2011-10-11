function html623afa$EntityWrappingImplementation$Dart(){
}

html623afa$EntityWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('html623afa$EntityWrappingImplementation$Dart'), html623afa$EntityWrappingImplementation$Dart.$RTTimplements);
}
;
html623afa$EntityWrappingImplementation$Dart.$RTTimplements = function(rtt){
  html623afa$EntityWrappingImplementation$Dart.$addTo(rtt);
}
;
html623afa$EntityWrappingImplementation$Dart.$addTo = function(target){
  var rtt = html623afa$EntityWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  html623afa$NodeWrappingImplementation$Dart.$addTo(target);
  html623afa$Entity$Dart.$addTo(target);
}
;
html623afa$EntityWrappingImplementation$Dart.prototype.$implements$html623afa$EntityWrappingImplementation$Dart = 1;
html623afa$EntityWrappingImplementation$Dart.prototype.$implements$html623afa$Entity$Dart = 1;
html623afa$EntityWrappingImplementation$Dart.prototype.$implements$html623afa$Node$Dart = 1;
html623afa$EntityWrappingImplementation$Dart.prototype.$implements$html623afa$EventTarget$Dart = 1;
html623afa$EntityWrappingImplementation$Dart.prototype.$implements$html623afa$NodeWrappingImplementation$Dart = 1;
html623afa$EntityWrappingImplementation$Dart.prototype.$implements$html623afa$EventTargetWrappingImplementation$Dart = 1;
html623afa$EntityWrappingImplementation$Dart.prototype.$implements$html623afa$DOMWrapperBase$Dart = 1;
html623afa$EntityWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(html623afa$EntityWrappingImplementation$Dart, html623afa$NodeWrappingImplementation$Dart);
html623afa$EntityWrappingImplementation$Dart._wrap$html623afa$$Constructor_ = function(ptr){
  html623afa$NodeWrappingImplementation$Dart._wrap$html623afa$$Constructor_.call(this, ptr);
}
;
html623afa$EntityWrappingImplementation$Dart._wrap$html623afa$$Initializer_ = function(ptr){
  html623afa$NodeWrappingImplementation$Dart._wrap$html623afa$$Initializer_.call(this, ptr);
}
;
html623afa$EntityWrappingImplementation$Dart.EntityWrappingImplementation$_wrap$28$html623afa$$Factory_ = function(ptr){
  var tmp$0 = new html623afa$EntityWrappingImplementation$Dart;
  tmp$0.$typeInfo = html623afa$EntityWrappingImplementation$Dart.$lookupRTT();
  html623afa$EntityWrappingImplementation$Dart._wrap$html623afa$$Initializer_.call(tmp$0, ptr);
  html623afa$EntityWrappingImplementation$Dart._wrap$html623afa$$Constructor_.call(tmp$0, ptr);
  return tmp$0;
}
;
html623afa$EntityWrappingImplementation$Dart.prototype.notationName$named = function(){
  return this.notationName$getter().apply(this, arguments);
}
;
html623afa$EntityWrappingImplementation$Dart.prototype.notationName$getter = function(){
  return this._ptr$html623afa$$getter_().notationName$getter();
}
;
html623afa$EntityWrappingImplementation$Dart.prototype.publicId$named = function(){
  return this.publicId$getter().apply(this, arguments);
}
;
html623afa$EntityWrappingImplementation$Dart.prototype.publicId$getter = function(){
  return this._ptr$html623afa$$getter_().publicId$getter();
}
;
html623afa$EntityWrappingImplementation$Dart.prototype.systemId$named = function(){
  return this.systemId$getter().apply(this, arguments);
}
;
html623afa$EntityWrappingImplementation$Dart.prototype.systemId$getter = function(){
  return this._ptr$html623afa$$getter_().systemId$getter();
}
;
