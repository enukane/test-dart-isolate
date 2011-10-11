function html623afa$OutputElementWrappingImplementation$Dart(){
}

html623afa$OutputElementWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('html623afa$OutputElementWrappingImplementation$Dart'), html623afa$OutputElementWrappingImplementation$Dart.$RTTimplements);
}
;
html623afa$OutputElementWrappingImplementation$Dart.$RTTimplements = function(rtt){
  html623afa$OutputElementWrappingImplementation$Dart.$addTo(rtt);
}
;
html623afa$OutputElementWrappingImplementation$Dart.$addTo = function(target){
  var rtt = html623afa$OutputElementWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  html623afa$ElementWrappingImplementation$Dart.$addTo(target);
  html623afa$OutputElement$Dart.$addTo(target);
}
;
html623afa$OutputElementWrappingImplementation$Dart.prototype.$implements$html623afa$OutputElementWrappingImplementation$Dart = 1;
html623afa$OutputElementWrappingImplementation$Dart.prototype.$implements$html623afa$OutputElement$Dart = 1;
html623afa$OutputElementWrappingImplementation$Dart.prototype.$implements$html623afa$Element$Dart = 1;
html623afa$OutputElementWrappingImplementation$Dart.prototype.$implements$html623afa$Node$Dart = 1;
html623afa$OutputElementWrappingImplementation$Dart.prototype.$implements$html623afa$EventTarget$Dart = 1;
html623afa$OutputElementWrappingImplementation$Dart.prototype.$implements$html623afa$ElementWrappingImplementation$Dart = 1;
html623afa$OutputElementWrappingImplementation$Dart.prototype.$implements$html623afa$NodeWrappingImplementation$Dart = 1;
html623afa$OutputElementWrappingImplementation$Dart.prototype.$implements$html623afa$EventTargetWrappingImplementation$Dart = 1;
html623afa$OutputElementWrappingImplementation$Dart.prototype.$implements$html623afa$DOMWrapperBase$Dart = 1;
html623afa$OutputElementWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(html623afa$OutputElementWrappingImplementation$Dart, html623afa$ElementWrappingImplementation$Dart);
html623afa$OutputElementWrappingImplementation$Dart._wrap$html623afa$$Constructor_ = function(ptr){
  html623afa$ElementWrappingImplementation$Dart._wrap$html623afa$$Constructor_.call(this, ptr);
}
;
html623afa$OutputElementWrappingImplementation$Dart._wrap$html623afa$$Initializer_ = function(ptr){
  html623afa$ElementWrappingImplementation$Dart._wrap$html623afa$$Initializer_.call(this, ptr);
}
;
html623afa$OutputElementWrappingImplementation$Dart.OutputElementWrappingImplementation$_wrap$35$html623afa$$Factory_ = function(ptr){
  var tmp$0 = new html623afa$OutputElementWrappingImplementation$Dart;
  tmp$0.$typeInfo = html623afa$OutputElementWrappingImplementation$Dart.$lookupRTT();
  html623afa$OutputElementWrappingImplementation$Dart._wrap$html623afa$$Initializer_.call(tmp$0, ptr);
  html623afa$OutputElementWrappingImplementation$Dart._wrap$html623afa$$Constructor_.call(tmp$0, ptr);
  return tmp$0;
}
;
html623afa$OutputElementWrappingImplementation$Dart.prototype.defaultValue$named = function(){
  return this.defaultValue$getter().apply(this, arguments);
}
;
html623afa$OutputElementWrappingImplementation$Dart.prototype.defaultValue$getter = function(){
  return this._ptr$html623afa$$getter_().defaultValue$getter();
}
;
html623afa$OutputElementWrappingImplementation$Dart.prototype.defaultValue$setter = function(value){
  var tmp$0;
  this._ptr$html623afa$$getter_().defaultValue$setter(tmp$0 = value) , tmp$0;
}
;
html623afa$OutputElementWrappingImplementation$Dart.prototype.form$named = function(){
  return this.form$getter().apply(this, arguments);
}
;
html623afa$OutputElementWrappingImplementation$Dart.prototype.form$getter = function(){
  return html623afa$LevelDom$Dart.wrapFormElement$member(this._ptr$html623afa$$getter_().form$getter());
}
;
html623afa$OutputElementWrappingImplementation$Dart.prototype.htmlFor$named = function(){
  return this.htmlFor$getter().apply(this, arguments);
}
;
html623afa$OutputElementWrappingImplementation$Dart.prototype.htmlFor$getter = function(){
  return html623afa$LevelDom$Dart.wrapDOMSettableTokenList$member(this._ptr$html623afa$$getter_().htmlFor$getter());
}
;
html623afa$OutputElementWrappingImplementation$Dart.prototype.htmlFor$setter = function(value){
  var tmp$0;
  this._ptr$html623afa$$getter_().htmlFor$setter(tmp$0 = html623afa$LevelDom$Dart.unwrap$member(value)) , tmp$0;
}
;
html623afa$OutputElementWrappingImplementation$Dart.prototype.labels$named = function(){
  return this.labels$getter().apply(this, arguments);
}
;
html623afa$OutputElementWrappingImplementation$Dart.prototype.labels$getter = function(){
  return html623afa$LevelDom$Dart.wrapElementList$member(this._ptr$html623afa$$getter_().labels$getter());
}
;
html623afa$OutputElementWrappingImplementation$Dart.prototype.name$named = function(){
  return this.name$getter().apply(this, arguments);
}
;
html623afa$OutputElementWrappingImplementation$Dart.prototype.name$getter = function(){
  return this._ptr$html623afa$$getter_().name$getter();
}
;
html623afa$OutputElementWrappingImplementation$Dart.prototype.name$setter = function(value){
  var tmp$0;
  this._ptr$html623afa$$getter_().name$setter(tmp$0 = value) , tmp$0;
}
;
html623afa$OutputElementWrappingImplementation$Dart.prototype.type$named = function(){
  return this.type$getter().apply(this, arguments);
}
;
html623afa$OutputElementWrappingImplementation$Dart.prototype.type$getter = function(){
  return this._ptr$html623afa$$getter_().type$getter();
}
;
html623afa$OutputElementWrappingImplementation$Dart.prototype.validationMessage$named = function(){
  return this.validationMessage$getter().apply(this, arguments);
}
;
html623afa$OutputElementWrappingImplementation$Dart.prototype.validationMessage$getter = function(){
  return this._ptr$html623afa$$getter_().validationMessage$getter();
}
;
html623afa$OutputElementWrappingImplementation$Dart.prototype.validity$named = function(){
  return this.validity$getter().apply(this, arguments);
}
;
html623afa$OutputElementWrappingImplementation$Dart.prototype.validity$getter = function(){
  return html623afa$LevelDom$Dart.wrapValidityState$member(this._ptr$html623afa$$getter_().validity$getter());
}
;
html623afa$OutputElementWrappingImplementation$Dart.prototype.value$named = function(){
  return this.value$getter().apply(this, arguments);
}
;
html623afa$OutputElementWrappingImplementation$Dart.prototype.value$getter = function(){
  return this._ptr$html623afa$$getter_().value$getter();
}
;
html623afa$OutputElementWrappingImplementation$Dart.prototype.value$setter = function(value){
  var tmp$0;
  this._ptr$html623afa$$getter_().value$setter(tmp$0 = value) , tmp$0;
}
;
html623afa$OutputElementWrappingImplementation$Dart.prototype.willValidate$named = function(){
  return this.willValidate$getter().apply(this, arguments);
}
;
html623afa$OutputElementWrappingImplementation$Dart.prototype.willValidate$getter = function(){
  return this._ptr$html623afa$$getter_().willValidate$getter();
}
;
html623afa$OutputElementWrappingImplementation$Dart.prototype.checkValidity$member = function(){
  return this._ptr$html623afa$$getter_().checkValidity$named(0, $noargs);
}
;
html623afa$OutputElementWrappingImplementation$Dart.prototype.checkValidity$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return html623afa$OutputElementWrappingImplementation$Dart.prototype.checkValidity$member.call(this);
}
;
html623afa$OutputElementWrappingImplementation$Dart.prototype.checkValidity$getter = function checkValidity$getter(){
  return $bind(html623afa$OutputElementWrappingImplementation$Dart.prototype.checkValidity$named, this);
}
;
html623afa$OutputElementWrappingImplementation$Dart.prototype.setCustomValidity$member = function(error){
  this._ptr$html623afa$$getter_().setCustomValidity$named(1, $noargs, error);
  return;
}
;
html623afa$OutputElementWrappingImplementation$Dart.prototype.setCustomValidity$named = function($n, $o, error){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$OutputElementWrappingImplementation$Dart.prototype.setCustomValidity$member.call(this, error);
}
;
html623afa$OutputElementWrappingImplementation$Dart.prototype.setCustomValidity$getter = function setCustomValidity$getter(){
  return $bind(html623afa$OutputElementWrappingImplementation$Dart.prototype.setCustomValidity$named, this);
}
;
