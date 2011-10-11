function html623afa$IDBRequestWrappingImplementation$Dart(){
}

html623afa$IDBRequestWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('html623afa$IDBRequestWrappingImplementation$Dart'), html623afa$IDBRequestWrappingImplementation$Dart.$RTTimplements);
}
;
html623afa$IDBRequestWrappingImplementation$Dart.$RTTimplements = function(rtt){
  html623afa$IDBRequestWrappingImplementation$Dart.$addTo(rtt);
}
;
html623afa$IDBRequestWrappingImplementation$Dart.$addTo = function(target){
  var rtt = html623afa$IDBRequestWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  html623afa$DOMWrapperBase$Dart.$addTo(target);
  html623afa$IDBRequest$Dart.$addTo(target);
}
;
html623afa$IDBRequestWrappingImplementation$Dart.prototype.$implements$html623afa$IDBRequestWrappingImplementation$Dart = 1;
html623afa$IDBRequestWrappingImplementation$Dart.prototype.$implements$html623afa$IDBRequest$Dart = 1;
html623afa$IDBRequestWrappingImplementation$Dart.prototype.$implements$html623afa$DOMWrapperBase$Dart = 1;
html623afa$IDBRequestWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(html623afa$IDBRequestWrappingImplementation$Dart, html623afa$DOMWrapperBase$Dart);
html623afa$IDBRequestWrappingImplementation$Dart._wrap$html623afa$$Constructor_ = function(ptr){
  html623afa$DOMWrapperBase$Dart._wrap$html623afa$$Constructor_.call(this, ptr);
}
;
html623afa$IDBRequestWrappingImplementation$Dart._wrap$html623afa$$Initializer_ = function(ptr){
  html623afa$DOMWrapperBase$Dart._wrap$html623afa$$Initializer_.call(this, ptr);
}
;
html623afa$IDBRequestWrappingImplementation$Dart.IDBRequestWrappingImplementation$_wrap$32$html623afa$$Factory_ = function(ptr){
  var tmp$0 = new html623afa$IDBRequestWrappingImplementation$Dart;
  tmp$0.$typeInfo = html623afa$IDBRequestWrappingImplementation$Dart.$lookupRTT();
  html623afa$IDBRequestWrappingImplementation$Dart._wrap$html623afa$$Initializer_.call(tmp$0, ptr);
  html623afa$IDBRequestWrappingImplementation$Dart._wrap$html623afa$$Constructor_.call(tmp$0, ptr);
  return tmp$0;
}
;
html623afa$IDBRequestWrappingImplementation$Dart.prototype.errorCode$named = function(){
  return this.errorCode$getter().apply(this, arguments);
}
;
html623afa$IDBRequestWrappingImplementation$Dart.prototype.errorCode$getter = function(){
  return this._ptr$html623afa$$getter_().errorCode$getter();
}
;
html623afa$IDBRequestWrappingImplementation$Dart.prototype.onerror$named = function(){
  return this.onerror$getter().apply(this, arguments);
}
;
html623afa$IDBRequestWrappingImplementation$Dart.prototype.onerror$getter = function(){
  return html623afa$LevelDom$Dart.wrapEventListener$member(this._ptr$html623afa$$getter_().onerror$getter());
}
;
html623afa$IDBRequestWrappingImplementation$Dart.prototype.onerror$setter = function(value){
  var tmp$0;
  this._ptr$html623afa$$getter_().onerror$setter(tmp$0 = html623afa$LevelDom$Dart.unwrap$member(value)) , tmp$0;
}
;
html623afa$IDBRequestWrappingImplementation$Dart.prototype.onsuccess$named = function(){
  return this.onsuccess$getter().apply(this, arguments);
}
;
html623afa$IDBRequestWrappingImplementation$Dart.prototype.onsuccess$getter = function(){
  return html623afa$LevelDom$Dart.wrapEventListener$member(this._ptr$html623afa$$getter_().onsuccess$getter());
}
;
html623afa$IDBRequestWrappingImplementation$Dart.prototype.onsuccess$setter = function(value){
  var tmp$0;
  this._ptr$html623afa$$getter_().onsuccess$setter(tmp$0 = html623afa$LevelDom$Dart.unwrap$member(value)) , tmp$0;
}
;
html623afa$IDBRequestWrappingImplementation$Dart.prototype.readyState$named = function(){
  return this.readyState$getter().apply(this, arguments);
}
;
html623afa$IDBRequestWrappingImplementation$Dart.prototype.readyState$getter = function(){
  return this._ptr$html623afa$$getter_().readyState$getter();
}
;
html623afa$IDBRequestWrappingImplementation$Dart.prototype.result$named = function(){
  return this.result$getter().apply(this, arguments);
}
;
html623afa$IDBRequestWrappingImplementation$Dart.prototype.result$getter = function(){
  return html623afa$LevelDom$Dart.wrapIDBAny$member(this._ptr$html623afa$$getter_().result$getter());
}
;
html623afa$IDBRequestWrappingImplementation$Dart.prototype.source$named = function(){
  return this.source$getter().apply(this, arguments);
}
;
html623afa$IDBRequestWrappingImplementation$Dart.prototype.source$getter = function(){
  return html623afa$LevelDom$Dart.wrapIDBAny$member(this._ptr$html623afa$$getter_().source$getter());
}
;
html623afa$IDBRequestWrappingImplementation$Dart.prototype.transaction$named = function(){
  return this.transaction$getter().apply(this, arguments);
}
;
html623afa$IDBRequestWrappingImplementation$Dart.prototype.transaction$getter = function(){
  return html623afa$LevelDom$Dart.wrapIDBTransaction$member(this._ptr$html623afa$$getter_().transaction$getter());
}
;
html623afa$IDBRequestWrappingImplementation$Dart.prototype.webkitErrorMessage$named = function(){
  return this.webkitErrorMessage$getter().apply(this, arguments);
}
;
html623afa$IDBRequestWrappingImplementation$Dart.prototype.webkitErrorMessage$getter = function(){
  return this._ptr$html623afa$$getter_().webkitErrorMessage$getter();
}
;
html623afa$IDBRequestWrappingImplementation$Dart.prototype.addEventListener$member = function(type, listener, useCapture){
  if (useCapture == null) {
    this._ptr$html623afa$$getter_().addEventListener$named(2, $noargs, type, html623afa$LevelDom$Dart.unwrap$member(listener));
    return;
  }
   else {
    this._ptr$html623afa$$getter_().addEventListener$named(3, $noargs, type, html623afa$LevelDom$Dart.unwrap$member(listener), useCapture);
    return;
  }
}
;
html623afa$IDBRequestWrappingImplementation$Dart.prototype.addEventListener$named = function($n, $o, type, listener, useCapture){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 2:
      useCapture = $o.useCapture?(++seen , $o.useCapture):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return html623afa$IDBRequestWrappingImplementation$Dart.prototype.addEventListener$member.call(this, type, listener, useCapture);
}
;
html623afa$IDBRequestWrappingImplementation$Dart.prototype.addEventListener$getter = function addEventListener$getter(){
  return $bind(html623afa$IDBRequestWrappingImplementation$Dart.prototype.addEventListener$named, this);
}
;
html623afa$IDBRequestWrappingImplementation$Dart.prototype.dispatchEvent$member = function(evt){
  return this._ptr$html623afa$$getter_().dispatchEvent$named(1, $noargs, html623afa$LevelDom$Dart.unwrap$member(evt));
}
;
html623afa$IDBRequestWrappingImplementation$Dart.prototype.dispatchEvent$named = function($n, $o, evt){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$IDBRequestWrappingImplementation$Dart.prototype.dispatchEvent$member.call(this, evt);
}
;
html623afa$IDBRequestWrappingImplementation$Dart.prototype.dispatchEvent$getter = function dispatchEvent$getter(){
  return $bind(html623afa$IDBRequestWrappingImplementation$Dart.prototype.dispatchEvent$named, this);
}
;
html623afa$IDBRequestWrappingImplementation$Dart.prototype.removeEventListener$member = function(type, listener, useCapture){
  if (useCapture == null) {
    this._ptr$html623afa$$getter_().removeEventListener$named(2, $noargs, type, html623afa$LevelDom$Dart.unwrap$member(listener));
    return;
  }
   else {
    this._ptr$html623afa$$getter_().removeEventListener$named(3, $noargs, type, html623afa$LevelDom$Dart.unwrap$member(listener), useCapture);
    return;
  }
}
;
html623afa$IDBRequestWrappingImplementation$Dart.prototype.removeEventListener$named = function($n, $o, type, listener, useCapture){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 2:
      useCapture = $o.useCapture?(++seen , $o.useCapture):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return html623afa$IDBRequestWrappingImplementation$Dart.prototype.removeEventListener$member.call(this, type, listener, useCapture);
}
;
html623afa$IDBRequestWrappingImplementation$Dart.prototype.removeEventListener$getter = function removeEventListener$getter(){
  return $bind(html623afa$IDBRequestWrappingImplementation$Dart.prototype.removeEventListener$named, this);
}
;
