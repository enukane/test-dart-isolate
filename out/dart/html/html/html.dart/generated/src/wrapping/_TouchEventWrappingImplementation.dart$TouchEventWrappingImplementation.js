function html623afa$TouchEventWrappingImplementation$Dart(){
}

html623afa$TouchEventWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('html623afa$TouchEventWrappingImplementation$Dart'), html623afa$TouchEventWrappingImplementation$Dart.$RTTimplements);
}
;
html623afa$TouchEventWrappingImplementation$Dart.$RTTimplements = function(rtt){
  html623afa$TouchEventWrappingImplementation$Dart.$addTo(rtt);
}
;
html623afa$TouchEventWrappingImplementation$Dart.$addTo = function(target){
  var rtt = html623afa$TouchEventWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  html623afa$UIEventWrappingImplementation$Dart.$addTo(target);
  html623afa$TouchEvent$Dart.$addTo(target);
}
;
html623afa$TouchEventWrappingImplementation$Dart.prototype.$implements$html623afa$TouchEventWrappingImplementation$Dart = 1;
html623afa$TouchEventWrappingImplementation$Dart.prototype.$implements$html623afa$TouchEvent$Dart = 1;
html623afa$TouchEventWrappingImplementation$Dart.prototype.$implements$html623afa$UIEvent$Dart = 1;
html623afa$TouchEventWrappingImplementation$Dart.prototype.$implements$html623afa$Event$Dart = 1;
html623afa$TouchEventWrappingImplementation$Dart.prototype.$implements$html623afa$UIEventWrappingImplementation$Dart = 1;
html623afa$TouchEventWrappingImplementation$Dart.prototype.$implements$html623afa$EventWrappingImplementation$Dart = 1;
html623afa$TouchEventWrappingImplementation$Dart.prototype.$implements$html623afa$DOMWrapperBase$Dart = 1;
html623afa$TouchEventWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(html623afa$TouchEventWrappingImplementation$Dart, html623afa$UIEventWrappingImplementation$Dart);
html623afa$TouchEventWrappingImplementation$Dart._wrap$html623afa$$Constructor_ = function(ptr){
  html623afa$UIEventWrappingImplementation$Dart._wrap$html623afa$$Constructor_.call(this, ptr);
}
;
html623afa$TouchEventWrappingImplementation$Dart._wrap$html623afa$$Initializer_ = function(ptr){
  html623afa$UIEventWrappingImplementation$Dart._wrap$html623afa$$Initializer_.call(this, ptr);
}
;
html623afa$TouchEventWrappingImplementation$Dart.TouchEventWrappingImplementation$_wrap$32$html623afa$$Factory_ = function(ptr){
  var tmp$0 = new html623afa$TouchEventWrappingImplementation$Dart;
  tmp$0.$typeInfo = html623afa$TouchEventWrappingImplementation$Dart.$lookupRTT();
  html623afa$TouchEventWrappingImplementation$Dart._wrap$html623afa$$Initializer_.call(tmp$0, ptr);
  html623afa$TouchEventWrappingImplementation$Dart._wrap$html623afa$$Constructor_.call(tmp$0, ptr);
  return tmp$0;
}
;
html623afa$TouchEventWrappingImplementation$Dart.prototype.altKey$named = function(){
  return this.altKey$getter().apply(this, arguments);
}
;
html623afa$TouchEventWrappingImplementation$Dart.prototype.altKey$getter = function(){
  return this._ptr$html623afa$$getter_().altKey$getter();
}
;
html623afa$TouchEventWrappingImplementation$Dart.prototype.changedTouches$named = function(){
  return this.changedTouches$getter().apply(this, arguments);
}
;
html623afa$TouchEventWrappingImplementation$Dart.prototype.changedTouches$getter = function(){
  return html623afa$LevelDom$Dart.wrapTouchList$member(this._ptr$html623afa$$getter_().changedTouches$getter());
}
;
html623afa$TouchEventWrappingImplementation$Dart.prototype.ctrlKey$named = function(){
  return this.ctrlKey$getter().apply(this, arguments);
}
;
html623afa$TouchEventWrappingImplementation$Dart.prototype.ctrlKey$getter = function(){
  return this._ptr$html623afa$$getter_().ctrlKey$getter();
}
;
html623afa$TouchEventWrappingImplementation$Dart.prototype.metaKey$named = function(){
  return this.metaKey$getter().apply(this, arguments);
}
;
html623afa$TouchEventWrappingImplementation$Dart.prototype.metaKey$getter = function(){
  return this._ptr$html623afa$$getter_().metaKey$getter();
}
;
html623afa$TouchEventWrappingImplementation$Dart.prototype.shiftKey$named = function(){
  return this.shiftKey$getter().apply(this, arguments);
}
;
html623afa$TouchEventWrappingImplementation$Dart.prototype.shiftKey$getter = function(){
  return this._ptr$html623afa$$getter_().shiftKey$getter();
}
;
html623afa$TouchEventWrappingImplementation$Dart.prototype.targetTouches$named = function(){
  return this.targetTouches$getter().apply(this, arguments);
}
;
html623afa$TouchEventWrappingImplementation$Dart.prototype.targetTouches$getter = function(){
  return html623afa$LevelDom$Dart.wrapTouchList$member(this._ptr$html623afa$$getter_().targetTouches$getter());
}
;
html623afa$TouchEventWrappingImplementation$Dart.prototype.touches$named = function(){
  return this.touches$getter().apply(this, arguments);
}
;
html623afa$TouchEventWrappingImplementation$Dart.prototype.touches$getter = function(){
  return html623afa$LevelDom$Dart.wrapTouchList$member(this._ptr$html623afa$$getter_().touches$getter());
}
;
html623afa$TouchEventWrappingImplementation$Dart.prototype.initTouchEvent$member = function(touches, targetTouches, changedTouches, type, view, screenX, screenY, clientX, clientY, ctrlKey, altKey, shiftKey, metaKey){
  this._ptr$html623afa$$getter_().initTouchEvent$named(13, $noargs, html623afa$LevelDom$Dart.unwrap$member(touches), html623afa$LevelDom$Dart.unwrap$member(targetTouches), html623afa$LevelDom$Dart.unwrap$member(changedTouches), type, html623afa$LevelDom$Dart.unwrap$member(view), screenX, screenY, clientX, clientY, ctrlKey, altKey, shiftKey, metaKey);
  return;
}
;
html623afa$TouchEventWrappingImplementation$Dart.prototype.initTouchEvent$named = function($n, $o, touches, targetTouches, changedTouches, type, view, screenX, screenY, clientX, clientY, ctrlKey, altKey, shiftKey, metaKey){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 13)
    $nsme();
  return html623afa$TouchEventWrappingImplementation$Dart.prototype.initTouchEvent$member.call(this, touches, targetTouches, changedTouches, type, view, screenX, screenY, clientX, clientY, ctrlKey, altKey, shiftKey, metaKey);
}
;
html623afa$TouchEventWrappingImplementation$Dart.prototype.initTouchEvent$getter = function initTouchEvent$getter(){
  return $bind(html623afa$TouchEventWrappingImplementation$Dart.prototype.initTouchEvent$named, this);
}
;
