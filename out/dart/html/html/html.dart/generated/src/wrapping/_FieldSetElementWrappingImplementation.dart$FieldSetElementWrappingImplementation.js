function html623afa$FieldSetElementWrappingImplementation$Dart(){
}

html623afa$FieldSetElementWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('html623afa$FieldSetElementWrappingImplementation$Dart'), html623afa$FieldSetElementWrappingImplementation$Dart.$RTTimplements);
}
;
html623afa$FieldSetElementWrappingImplementation$Dart.$RTTimplements = function(rtt){
  html623afa$FieldSetElementWrappingImplementation$Dart.$addTo(rtt);
}
;
html623afa$FieldSetElementWrappingImplementation$Dart.$addTo = function(target){
  var rtt = html623afa$FieldSetElementWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  html623afa$ElementWrappingImplementation$Dart.$addTo(target);
  html623afa$FieldSetElement$Dart.$addTo(target);
}
;
html623afa$FieldSetElementWrappingImplementation$Dart.prototype.$implements$html623afa$FieldSetElementWrappingImplementation$Dart = 1;
html623afa$FieldSetElementWrappingImplementation$Dart.prototype.$implements$html623afa$FieldSetElement$Dart = 1;
html623afa$FieldSetElementWrappingImplementation$Dart.prototype.$implements$html623afa$Element$Dart = 1;
html623afa$FieldSetElementWrappingImplementation$Dart.prototype.$implements$html623afa$Node$Dart = 1;
html623afa$FieldSetElementWrappingImplementation$Dart.prototype.$implements$html623afa$EventTarget$Dart = 1;
html623afa$FieldSetElementWrappingImplementation$Dart.prototype.$implements$html623afa$ElementWrappingImplementation$Dart = 1;
html623afa$FieldSetElementWrappingImplementation$Dart.prototype.$implements$html623afa$NodeWrappingImplementation$Dart = 1;
html623afa$FieldSetElementWrappingImplementation$Dart.prototype.$implements$html623afa$EventTargetWrappingImplementation$Dart = 1;
html623afa$FieldSetElementWrappingImplementation$Dart.prototype.$implements$html623afa$DOMWrapperBase$Dart = 1;
html623afa$FieldSetElementWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(html623afa$FieldSetElementWrappingImplementation$Dart, html623afa$ElementWrappingImplementation$Dart);
html623afa$FieldSetElementWrappingImplementation$Dart._wrap$html623afa$$Constructor_ = function(ptr){
  html623afa$ElementWrappingImplementation$Dart._wrap$html623afa$$Constructor_.call(this, ptr);
}
;
html623afa$FieldSetElementWrappingImplementation$Dart._wrap$html623afa$$Initializer_ = function(ptr){
  html623afa$ElementWrappingImplementation$Dart._wrap$html623afa$$Initializer_.call(this, ptr);
}
;
html623afa$FieldSetElementWrappingImplementation$Dart.FieldSetElementWrappingImplementation$_wrap$37$html623afa$$Factory_ = function(ptr){
  var tmp$0 = new html623afa$FieldSetElementWrappingImplementation$Dart;
  tmp$0.$typeInfo = html623afa$FieldSetElementWrappingImplementation$Dart.$lookupRTT();
  html623afa$FieldSetElementWrappingImplementation$Dart._wrap$html623afa$$Initializer_.call(tmp$0, ptr);
  html623afa$FieldSetElementWrappingImplementation$Dart._wrap$html623afa$$Constructor_.call(tmp$0, ptr);
  return tmp$0;
}
;
html623afa$FieldSetElementWrappingImplementation$Dart.prototype.form$named = function(){
  return this.form$getter().apply(this, arguments);
}
;
html623afa$FieldSetElementWrappingImplementation$Dart.prototype.form$getter = function(){
  return html623afa$LevelDom$Dart.wrapFormElement$member(this._ptr$html623afa$$getter_().form$getter());
}
;
html623afa$FieldSetElementWrappingImplementation$Dart.prototype.validationMessage$named = function(){
  return this.validationMessage$getter().apply(this, arguments);
}
;
html623afa$FieldSetElementWrappingImplementation$Dart.prototype.validationMessage$getter = function(){
  return this._ptr$html623afa$$getter_().validationMessage$getter();
}
;
html623afa$FieldSetElementWrappingImplementation$Dart.prototype.validity$named = function(){
  return this.validity$getter().apply(this, arguments);
}
;
html623afa$FieldSetElementWrappingImplementation$Dart.prototype.validity$getter = function(){
  return html623afa$LevelDom$Dart.wrapValidityState$member(this._ptr$html623afa$$getter_().validity$getter());
}
;
html623afa$FieldSetElementWrappingImplementation$Dart.prototype.willValidate$named = function(){
  return this.willValidate$getter().apply(this, arguments);
}
;
html623afa$FieldSetElementWrappingImplementation$Dart.prototype.willValidate$getter = function(){
  return this._ptr$html623afa$$getter_().willValidate$getter();
}
;
html623afa$FieldSetElementWrappingImplementation$Dart.prototype.checkValidity$member = function(){
  return this._ptr$html623afa$$getter_().checkValidity$named(0, $noargs);
}
;
html623afa$FieldSetElementWrappingImplementation$Dart.prototype.checkValidity$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return html623afa$FieldSetElementWrappingImplementation$Dart.prototype.checkValidity$member.call(this);
}
;
html623afa$FieldSetElementWrappingImplementation$Dart.prototype.checkValidity$getter = function checkValidity$getter(){
  return $bind(html623afa$FieldSetElementWrappingImplementation$Dart.prototype.checkValidity$named, this);
}
;
html623afa$FieldSetElementWrappingImplementation$Dart.prototype.setCustomValidity$member = function(error){
  this._ptr$html623afa$$getter_().setCustomValidity$named(1, $noargs, error);
  return;
}
;
html623afa$FieldSetElementWrappingImplementation$Dart.prototype.setCustomValidity$named = function($n, $o, error){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$FieldSetElementWrappingImplementation$Dart.prototype.setCustomValidity$member.call(this, error);
}
;
html623afa$FieldSetElementWrappingImplementation$Dart.prototype.setCustomValidity$getter = function setCustomValidity$getter(){
  return $bind(html623afa$FieldSetElementWrappingImplementation$Dart.prototype.setCustomValidity$named, this);
}
;
