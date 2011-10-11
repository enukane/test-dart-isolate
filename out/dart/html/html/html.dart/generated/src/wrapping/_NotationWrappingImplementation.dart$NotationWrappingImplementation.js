function html623afa$NotationWrappingImplementation$Dart(){
}

html623afa$NotationWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('html623afa$NotationWrappingImplementation$Dart'), html623afa$NotationWrappingImplementation$Dart.$RTTimplements);
}
;
html623afa$NotationWrappingImplementation$Dart.$RTTimplements = function(rtt){
  html623afa$NotationWrappingImplementation$Dart.$addTo(rtt);
}
;
html623afa$NotationWrappingImplementation$Dart.$addTo = function(target){
  var rtt = html623afa$NotationWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  html623afa$NodeWrappingImplementation$Dart.$addTo(target);
  html623afa$Notation$Dart.$addTo(target);
}
;
html623afa$NotationWrappingImplementation$Dart.prototype.$implements$html623afa$NotationWrappingImplementation$Dart = 1;
html623afa$NotationWrappingImplementation$Dart.prototype.$implements$html623afa$Notation$Dart = 1;
html623afa$NotationWrappingImplementation$Dart.prototype.$implements$html623afa$Node$Dart = 1;
html623afa$NotationWrappingImplementation$Dart.prototype.$implements$html623afa$EventTarget$Dart = 1;
html623afa$NotationWrappingImplementation$Dart.prototype.$implements$html623afa$NodeWrappingImplementation$Dart = 1;
html623afa$NotationWrappingImplementation$Dart.prototype.$implements$html623afa$EventTargetWrappingImplementation$Dart = 1;
html623afa$NotationWrappingImplementation$Dart.prototype.$implements$html623afa$DOMWrapperBase$Dart = 1;
html623afa$NotationWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(html623afa$NotationWrappingImplementation$Dart, html623afa$NodeWrappingImplementation$Dart);
html623afa$NotationWrappingImplementation$Dart._wrap$html623afa$$Constructor_ = function(ptr){
  html623afa$NodeWrappingImplementation$Dart._wrap$html623afa$$Constructor_.call(this, ptr);
}
;
html623afa$NotationWrappingImplementation$Dart._wrap$html623afa$$Initializer_ = function(ptr){
  html623afa$NodeWrappingImplementation$Dart._wrap$html623afa$$Initializer_.call(this, ptr);
}
;
html623afa$NotationWrappingImplementation$Dart.NotationWrappingImplementation$_wrap$30$html623afa$$Factory_ = function(ptr){
  var tmp$0 = new html623afa$NotationWrappingImplementation$Dart;
  tmp$0.$typeInfo = html623afa$NotationWrappingImplementation$Dart.$lookupRTT();
  html623afa$NotationWrappingImplementation$Dart._wrap$html623afa$$Initializer_.call(tmp$0, ptr);
  html623afa$NotationWrappingImplementation$Dart._wrap$html623afa$$Constructor_.call(tmp$0, ptr);
  return tmp$0;
}
;
html623afa$NotationWrappingImplementation$Dart.prototype.publicId$named = function(){
  return this.publicId$getter().apply(this, arguments);
}
;
html623afa$NotationWrappingImplementation$Dart.prototype.publicId$getter = function(){
  return this._ptr$html623afa$$getter_().publicId$getter();
}
;
html623afa$NotationWrappingImplementation$Dart.prototype.systemId$named = function(){
  return this.systemId$getter().apply(this, arguments);
}
;
html623afa$NotationWrappingImplementation$Dart.prototype.systemId$getter = function(){
  return this._ptr$html623afa$$getter_().systemId$getter();
}
;
