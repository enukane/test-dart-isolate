function html623afa$ProcessingInstructionWrappingImplementation$Dart(){
}

html623afa$ProcessingInstructionWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('html623afa$ProcessingInstructionWrappingImplementation$Dart'), html623afa$ProcessingInstructionWrappingImplementation$Dart.$RTTimplements);
}
;
html623afa$ProcessingInstructionWrappingImplementation$Dart.$RTTimplements = function(rtt){
  html623afa$ProcessingInstructionWrappingImplementation$Dart.$addTo(rtt);
}
;
html623afa$ProcessingInstructionWrappingImplementation$Dart.$addTo = function(target){
  var rtt = html623afa$ProcessingInstructionWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  html623afa$NodeWrappingImplementation$Dart.$addTo(target);
  html623afa$ProcessingInstruction$Dart.$addTo(target);
}
;
html623afa$ProcessingInstructionWrappingImplementation$Dart.prototype.$implements$html623afa$ProcessingInstructionWrappingImplementation$Dart = 1;
html623afa$ProcessingInstructionWrappingImplementation$Dart.prototype.$implements$html623afa$ProcessingInstruction$Dart = 1;
html623afa$ProcessingInstructionWrappingImplementation$Dart.prototype.$implements$html623afa$Node$Dart = 1;
html623afa$ProcessingInstructionWrappingImplementation$Dart.prototype.$implements$html623afa$EventTarget$Dart = 1;
html623afa$ProcessingInstructionWrappingImplementation$Dart.prototype.$implements$html623afa$NodeWrappingImplementation$Dart = 1;
html623afa$ProcessingInstructionWrappingImplementation$Dart.prototype.$implements$html623afa$EventTargetWrappingImplementation$Dart = 1;
html623afa$ProcessingInstructionWrappingImplementation$Dart.prototype.$implements$html623afa$DOMWrapperBase$Dart = 1;
html623afa$ProcessingInstructionWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(html623afa$ProcessingInstructionWrappingImplementation$Dart, html623afa$NodeWrappingImplementation$Dart);
html623afa$ProcessingInstructionWrappingImplementation$Dart._wrap$html623afa$$Constructor_ = function(ptr){
  html623afa$NodeWrappingImplementation$Dart._wrap$html623afa$$Constructor_.call(this, ptr);
}
;
html623afa$ProcessingInstructionWrappingImplementation$Dart._wrap$html623afa$$Initializer_ = function(ptr){
  html623afa$NodeWrappingImplementation$Dart._wrap$html623afa$$Initializer_.call(this, ptr);
}
;
html623afa$ProcessingInstructionWrappingImplementation$Dart.ProcessingInstructionWrappingImplementation$_wrap$43$html623afa$$Factory_ = function(ptr){
  var tmp$0 = new html623afa$ProcessingInstructionWrappingImplementation$Dart;
  tmp$0.$typeInfo = html623afa$ProcessingInstructionWrappingImplementation$Dart.$lookupRTT();
  html623afa$ProcessingInstructionWrappingImplementation$Dart._wrap$html623afa$$Initializer_.call(tmp$0, ptr);
  html623afa$ProcessingInstructionWrappingImplementation$Dart._wrap$html623afa$$Constructor_.call(tmp$0, ptr);
  return tmp$0;
}
;
html623afa$ProcessingInstructionWrappingImplementation$Dart.prototype.data$named = function(){
  return this.data$getter().apply(this, arguments);
}
;
html623afa$ProcessingInstructionWrappingImplementation$Dart.prototype.data$getter = function(){
  return this._ptr$html623afa$$getter_().data$getter();
}
;
html623afa$ProcessingInstructionWrappingImplementation$Dart.prototype.data$setter = function(value){
  var tmp$0;
  this._ptr$html623afa$$getter_().data$setter(tmp$0 = value) , tmp$0;
}
;
html623afa$ProcessingInstructionWrappingImplementation$Dart.prototype.sheet$named = function(){
  return this.sheet$getter().apply(this, arguments);
}
;
html623afa$ProcessingInstructionWrappingImplementation$Dart.prototype.sheet$getter = function(){
  return html623afa$LevelDom$Dart.wrapStyleSheet$member(this._ptr$html623afa$$getter_().sheet$getter());
}
;
html623afa$ProcessingInstructionWrappingImplementation$Dart.prototype.target$named = function(){
  return this.target$getter().apply(this, arguments);
}
;
html623afa$ProcessingInstructionWrappingImplementation$Dart.prototype.target$getter = function(){
  return this._ptr$html623afa$$getter_().target$getter();
}
;
