function html623afa$BodyElementWrappingImplementation$Dart(){
}

html623afa$BodyElementWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('html623afa$BodyElementWrappingImplementation$Dart'), html623afa$BodyElementWrappingImplementation$Dart.$RTTimplements);
}
;
html623afa$BodyElementWrappingImplementation$Dart.$RTTimplements = function(rtt){
  html623afa$BodyElementWrappingImplementation$Dart.$addTo(rtt);
}
;
html623afa$BodyElementWrappingImplementation$Dart.$addTo = function(target){
  var rtt = html623afa$BodyElementWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  html623afa$ElementWrappingImplementation$Dart.$addTo(target);
  html623afa$BodyElement$Dart.$addTo(target);
}
;
html623afa$BodyElementWrappingImplementation$Dart.prototype.$implements$html623afa$BodyElementWrappingImplementation$Dart = 1;
html623afa$BodyElementWrappingImplementation$Dart.prototype.$implements$html623afa$BodyElement$Dart = 1;
html623afa$BodyElementWrappingImplementation$Dart.prototype.$implements$html623afa$Element$Dart = 1;
html623afa$BodyElementWrappingImplementation$Dart.prototype.$implements$html623afa$Node$Dart = 1;
html623afa$BodyElementWrappingImplementation$Dart.prototype.$implements$html623afa$EventTarget$Dart = 1;
html623afa$BodyElementWrappingImplementation$Dart.prototype.$implements$html623afa$ElementWrappingImplementation$Dart = 1;
html623afa$BodyElementWrappingImplementation$Dart.prototype.$implements$html623afa$NodeWrappingImplementation$Dart = 1;
html623afa$BodyElementWrappingImplementation$Dart.prototype.$implements$html623afa$EventTargetWrappingImplementation$Dart = 1;
html623afa$BodyElementWrappingImplementation$Dart.prototype.$implements$html623afa$DOMWrapperBase$Dart = 1;
html623afa$BodyElementWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(html623afa$BodyElementWrappingImplementation$Dart, html623afa$ElementWrappingImplementation$Dart);
html623afa$BodyElementWrappingImplementation$Dart._wrap$html623afa$$Constructor_ = function(ptr){
  html623afa$ElementWrappingImplementation$Dart._wrap$html623afa$$Constructor_.call(this, ptr);
}
;
html623afa$BodyElementWrappingImplementation$Dart._wrap$html623afa$$Initializer_ = function(ptr){
  html623afa$ElementWrappingImplementation$Dart._wrap$html623afa$$Initializer_.call(this, ptr);
}
;
html623afa$BodyElementWrappingImplementation$Dart.BodyElementWrappingImplementation$_wrap$33$html623afa$$Factory_ = function(ptr){
  var tmp$0 = new html623afa$BodyElementWrappingImplementation$Dart;
  tmp$0.$typeInfo = html623afa$BodyElementWrappingImplementation$Dart.$lookupRTT();
  html623afa$BodyElementWrappingImplementation$Dart._wrap$html623afa$$Initializer_.call(tmp$0, ptr);
  html623afa$BodyElementWrappingImplementation$Dart._wrap$html623afa$$Constructor_.call(tmp$0, ptr);
  return tmp$0;
}
;
html623afa$BodyElementWrappingImplementation$Dart.prototype.on$named = function(){
  return this.on$getter().apply(this, arguments);
}
;
html623afa$BodyElementWrappingImplementation$Dart.prototype.on$getter = function(){
  var tmp$0;
  if (this._on$html623afa$$getter_() == null) {
    this._on$html623afa$$setter_(tmp$0 = html623afa$BodyElementEventsImplementation$Dart.BodyElementEventsImplementation$_wrap$31$html623afa$$Factory_(this._ptr$html623afa$$getter_())) , tmp$0;
  }
  return this._on$html623afa$$getter_();
}
;
