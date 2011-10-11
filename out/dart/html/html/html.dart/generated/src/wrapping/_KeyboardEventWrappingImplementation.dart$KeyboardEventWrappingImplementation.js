function html623afa$KeyboardEventWrappingImplementation$Dart(){
}

html623afa$KeyboardEventWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('html623afa$KeyboardEventWrappingImplementation$Dart'), html623afa$KeyboardEventWrappingImplementation$Dart.$RTTimplements);
}
;
html623afa$KeyboardEventWrappingImplementation$Dart.$RTTimplements = function(rtt){
  html623afa$KeyboardEventWrappingImplementation$Dart.$addTo(rtt);
}
;
html623afa$KeyboardEventWrappingImplementation$Dart.$addTo = function(target){
  var rtt = html623afa$KeyboardEventWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  html623afa$UIEventWrappingImplementation$Dart.$addTo(target);
  html623afa$KeyboardEvent$Dart.$addTo(target);
}
;
html623afa$KeyboardEventWrappingImplementation$Dart.prototype.$implements$html623afa$KeyboardEventWrappingImplementation$Dart = 1;
html623afa$KeyboardEventWrappingImplementation$Dart.prototype.$implements$html623afa$KeyboardEvent$Dart = 1;
html623afa$KeyboardEventWrappingImplementation$Dart.prototype.$implements$html623afa$UIEvent$Dart = 1;
html623afa$KeyboardEventWrappingImplementation$Dart.prototype.$implements$html623afa$Event$Dart = 1;
html623afa$KeyboardEventWrappingImplementation$Dart.prototype.$implements$html623afa$UIEventWrappingImplementation$Dart = 1;
html623afa$KeyboardEventWrappingImplementation$Dart.prototype.$implements$html623afa$EventWrappingImplementation$Dart = 1;
html623afa$KeyboardEventWrappingImplementation$Dart.prototype.$implements$html623afa$DOMWrapperBase$Dart = 1;
html623afa$KeyboardEventWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(html623afa$KeyboardEventWrappingImplementation$Dart, html623afa$UIEventWrappingImplementation$Dart);
html623afa$KeyboardEventWrappingImplementation$Dart._wrap$html623afa$$Constructor_ = function(ptr){
  html623afa$UIEventWrappingImplementation$Dart._wrap$html623afa$$Constructor_.call(this, ptr);
}
;
html623afa$KeyboardEventWrappingImplementation$Dart._wrap$html623afa$$Initializer_ = function(ptr){
  html623afa$UIEventWrappingImplementation$Dart._wrap$html623afa$$Initializer_.call(this, ptr);
}
;
html623afa$KeyboardEventWrappingImplementation$Dart.KeyboardEventWrappingImplementation$_wrap$35$html623afa$$Factory_ = function(ptr){
  var tmp$0 = new html623afa$KeyboardEventWrappingImplementation$Dart;
  tmp$0.$typeInfo = html623afa$KeyboardEventWrappingImplementation$Dart.$lookupRTT();
  html623afa$KeyboardEventWrappingImplementation$Dart._wrap$html623afa$$Initializer_.call(tmp$0, ptr);
  html623afa$KeyboardEventWrappingImplementation$Dart._wrap$html623afa$$Constructor_.call(tmp$0, ptr);
  return tmp$0;
}
;
html623afa$KeyboardEventWrappingImplementation$Dart.prototype.altGraphKey$named = function(){
  return this.altGraphKey$getter().apply(this, arguments);
}
;
html623afa$KeyboardEventWrappingImplementation$Dart.prototype.altGraphKey$getter = function(){
  return this._ptr$html623afa$$getter_().altGraphKey$getter();
}
;
html623afa$KeyboardEventWrappingImplementation$Dart.prototype.altKey$named = function(){
  return this.altKey$getter().apply(this, arguments);
}
;
html623afa$KeyboardEventWrappingImplementation$Dart.prototype.altKey$getter = function(){
  return this._ptr$html623afa$$getter_().altKey$getter();
}
;
html623afa$KeyboardEventWrappingImplementation$Dart.prototype.ctrlKey$named = function(){
  return this.ctrlKey$getter().apply(this, arguments);
}
;
html623afa$KeyboardEventWrappingImplementation$Dart.prototype.ctrlKey$getter = function(){
  return this._ptr$html623afa$$getter_().ctrlKey$getter();
}
;
html623afa$KeyboardEventWrappingImplementation$Dart.prototype.keyIdentifier$named = function(){
  return this.keyIdentifier$getter().apply(this, arguments);
}
;
html623afa$KeyboardEventWrappingImplementation$Dart.prototype.keyIdentifier$getter = function(){
  return this._ptr$html623afa$$getter_().keyIdentifier$getter();
}
;
html623afa$KeyboardEventWrappingImplementation$Dart.prototype.keyLocation$named = function(){
  return this.keyLocation$getter().apply(this, arguments);
}
;
html623afa$KeyboardEventWrappingImplementation$Dart.prototype.keyLocation$getter = function(){
  return this._ptr$html623afa$$getter_().keyLocation$getter();
}
;
html623afa$KeyboardEventWrappingImplementation$Dart.prototype.metaKey$named = function(){
  return this.metaKey$getter().apply(this, arguments);
}
;
html623afa$KeyboardEventWrappingImplementation$Dart.prototype.metaKey$getter = function(){
  return this._ptr$html623afa$$getter_().metaKey$getter();
}
;
html623afa$KeyboardEventWrappingImplementation$Dart.prototype.shiftKey$named = function(){
  return this.shiftKey$getter().apply(this, arguments);
}
;
html623afa$KeyboardEventWrappingImplementation$Dart.prototype.shiftKey$getter = function(){
  return this._ptr$html623afa$$getter_().shiftKey$getter();
}
;
html623afa$KeyboardEventWrappingImplementation$Dart.prototype.getModifierState$member = function(keyIdentifierArg){
  return this._ptr$html623afa$$getter_().getModifierState$named(1, $noargs, keyIdentifierArg);
}
;
html623afa$KeyboardEventWrappingImplementation$Dart.prototype.getModifierState$named = function($n, $o, keyIdentifierArg){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$KeyboardEventWrappingImplementation$Dart.prototype.getModifierState$member.call(this, keyIdentifierArg);
}
;
html623afa$KeyboardEventWrappingImplementation$Dart.prototype.getModifierState$getter = function getModifierState$getter(){
  return $bind(html623afa$KeyboardEventWrappingImplementation$Dart.prototype.getModifierState$named, this);
}
;
html623afa$KeyboardEventWrappingImplementation$Dart.prototype.initKeyboardEvent$member = function(type, canBubble, cancelable, view, keyIdentifier, keyLocation, ctrlKey, altKey, shiftKey, metaKey, altGraphKey){
  this._ptr$html623afa$$getter_().initKeyboardEvent$named(11, $noargs, type, canBubble, cancelable, html623afa$LevelDom$Dart.unwrap$member(view), keyIdentifier, keyLocation, ctrlKey, altKey, shiftKey, metaKey, altGraphKey);
  return;
}
;
html623afa$KeyboardEventWrappingImplementation$Dart.prototype.initKeyboardEvent$named = function($n, $o, type, canBubble, cancelable, view, keyIdentifier, keyLocation, ctrlKey, altKey, shiftKey, metaKey, altGraphKey){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 11)
    $nsme();
  return html623afa$KeyboardEventWrappingImplementation$Dart.prototype.initKeyboardEvent$member.call(this, type, canBubble, cancelable, view, keyIdentifier, keyLocation, ctrlKey, altKey, shiftKey, metaKey, altGraphKey);
}
;
html623afa$KeyboardEventWrappingImplementation$Dart.prototype.initKeyboardEvent$getter = function initKeyboardEvent$getter(){
  return $bind(html623afa$KeyboardEventWrappingImplementation$Dart.prototype.initKeyboardEvent$named, this);
}
;
