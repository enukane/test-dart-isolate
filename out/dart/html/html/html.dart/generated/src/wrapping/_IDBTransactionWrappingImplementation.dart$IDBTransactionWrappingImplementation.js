function html623afa$IDBTransactionWrappingImplementation$Dart(){
}

html623afa$IDBTransactionWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('html623afa$IDBTransactionWrappingImplementation$Dart'), html623afa$IDBTransactionWrappingImplementation$Dart.$RTTimplements);
}
;
html623afa$IDBTransactionWrappingImplementation$Dart.$RTTimplements = function(rtt){
  html623afa$IDBTransactionWrappingImplementation$Dart.$addTo(rtt);
}
;
html623afa$IDBTransactionWrappingImplementation$Dart.$addTo = function(target){
  var rtt = html623afa$IDBTransactionWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  html623afa$DOMWrapperBase$Dart.$addTo(target);
  html623afa$IDBTransaction$Dart.$addTo(target);
}
;
html623afa$IDBTransactionWrappingImplementation$Dart.prototype.$implements$html623afa$IDBTransactionWrappingImplementation$Dart = 1;
html623afa$IDBTransactionWrappingImplementation$Dart.prototype.$implements$html623afa$IDBTransaction$Dart = 1;
html623afa$IDBTransactionWrappingImplementation$Dart.prototype.$implements$html623afa$DOMWrapperBase$Dart = 1;
html623afa$IDBTransactionWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(html623afa$IDBTransactionWrappingImplementation$Dart, html623afa$DOMWrapperBase$Dart);
html623afa$IDBTransactionWrappingImplementation$Dart._wrap$html623afa$$Constructor_ = function(ptr){
  html623afa$DOMWrapperBase$Dart._wrap$html623afa$$Constructor_.call(this, ptr);
}
;
html623afa$IDBTransactionWrappingImplementation$Dart._wrap$html623afa$$Initializer_ = function(ptr){
  html623afa$DOMWrapperBase$Dart._wrap$html623afa$$Initializer_.call(this, ptr);
}
;
html623afa$IDBTransactionWrappingImplementation$Dart.IDBTransactionWrappingImplementation$_wrap$36$html623afa$$Factory_ = function(ptr){
  var tmp$0 = new html623afa$IDBTransactionWrappingImplementation$Dart;
  tmp$0.$typeInfo = html623afa$IDBTransactionWrappingImplementation$Dart.$lookupRTT();
  html623afa$IDBTransactionWrappingImplementation$Dart._wrap$html623afa$$Initializer_.call(tmp$0, ptr);
  html623afa$IDBTransactionWrappingImplementation$Dart._wrap$html623afa$$Constructor_.call(tmp$0, ptr);
  return tmp$0;
}
;
html623afa$IDBTransactionWrappingImplementation$Dart.prototype.db$named = function(){
  return this.db$getter().apply(this, arguments);
}
;
html623afa$IDBTransactionWrappingImplementation$Dart.prototype.db$getter = function(){
  return html623afa$LevelDom$Dart.wrapIDBDatabase$member(this._ptr$html623afa$$getter_().db$getter());
}
;
html623afa$IDBTransactionWrappingImplementation$Dart.prototype.mode$named = function(){
  return this.mode$getter().apply(this, arguments);
}
;
html623afa$IDBTransactionWrappingImplementation$Dart.prototype.mode$getter = function(){
  return this._ptr$html623afa$$getter_().mode$getter();
}
;
html623afa$IDBTransactionWrappingImplementation$Dart.prototype.onabort$named = function(){
  return this.onabort$getter().apply(this, arguments);
}
;
html623afa$IDBTransactionWrappingImplementation$Dart.prototype.onabort$getter = function(){
  return html623afa$LevelDom$Dart.wrapEventListener$member(this._ptr$html623afa$$getter_().onabort$getter());
}
;
html623afa$IDBTransactionWrappingImplementation$Dart.prototype.onabort$setter = function(value){
  var tmp$0;
  this._ptr$html623afa$$getter_().onabort$setter(tmp$0 = html623afa$LevelDom$Dart.unwrap$member(value)) , tmp$0;
}
;
html623afa$IDBTransactionWrappingImplementation$Dart.prototype.oncomplete$named = function(){
  return this.oncomplete$getter().apply(this, arguments);
}
;
html623afa$IDBTransactionWrappingImplementation$Dart.prototype.oncomplete$getter = function(){
  return html623afa$LevelDom$Dart.wrapEventListener$member(this._ptr$html623afa$$getter_().oncomplete$getter());
}
;
html623afa$IDBTransactionWrappingImplementation$Dart.prototype.oncomplete$setter = function(value){
  var tmp$0;
  this._ptr$html623afa$$getter_().oncomplete$setter(tmp$0 = html623afa$LevelDom$Dart.unwrap$member(value)) , tmp$0;
}
;
html623afa$IDBTransactionWrappingImplementation$Dart.prototype.onerror$named = function(){
  return this.onerror$getter().apply(this, arguments);
}
;
html623afa$IDBTransactionWrappingImplementation$Dart.prototype.onerror$getter = function(){
  return html623afa$LevelDom$Dart.wrapEventListener$member(this._ptr$html623afa$$getter_().onerror$getter());
}
;
html623afa$IDBTransactionWrappingImplementation$Dart.prototype.onerror$setter = function(value){
  var tmp$0;
  this._ptr$html623afa$$getter_().onerror$setter(tmp$0 = html623afa$LevelDom$Dart.unwrap$member(value)) , tmp$0;
}
;
html623afa$IDBTransactionWrappingImplementation$Dart.prototype.abort$member = function(){
  this._ptr$html623afa$$getter_().abort$named(0, $noargs);
  return;
}
;
html623afa$IDBTransactionWrappingImplementation$Dart.prototype.abort$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return html623afa$IDBTransactionWrappingImplementation$Dart.prototype.abort$member.call(this);
}
;
html623afa$IDBTransactionWrappingImplementation$Dart.prototype.abort$getter = function abort$getter(){
  return $bind(html623afa$IDBTransactionWrappingImplementation$Dart.prototype.abort$named, this);
}
;
html623afa$IDBTransactionWrappingImplementation$Dart.prototype.addEventListener$member = function(type, listener, useCapture){
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
html623afa$IDBTransactionWrappingImplementation$Dart.prototype.addEventListener$named = function($n, $o, type, listener, useCapture){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 2:
      useCapture = $o.useCapture?(++seen , $o.useCapture):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return html623afa$IDBTransactionWrappingImplementation$Dart.prototype.addEventListener$member.call(this, type, listener, useCapture);
}
;
html623afa$IDBTransactionWrappingImplementation$Dart.prototype.addEventListener$getter = function addEventListener$getter(){
  return $bind(html623afa$IDBTransactionWrappingImplementation$Dart.prototype.addEventListener$named, this);
}
;
html623afa$IDBTransactionWrappingImplementation$Dart.prototype.dispatchEvent$member = function(evt){
  return this._ptr$html623afa$$getter_().dispatchEvent$named(1, $noargs, html623afa$LevelDom$Dart.unwrap$member(evt));
}
;
html623afa$IDBTransactionWrappingImplementation$Dart.prototype.dispatchEvent$named = function($n, $o, evt){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$IDBTransactionWrappingImplementation$Dart.prototype.dispatchEvent$member.call(this, evt);
}
;
html623afa$IDBTransactionWrappingImplementation$Dart.prototype.dispatchEvent$getter = function dispatchEvent$getter(){
  return $bind(html623afa$IDBTransactionWrappingImplementation$Dart.prototype.dispatchEvent$named, this);
}
;
html623afa$IDBTransactionWrappingImplementation$Dart.prototype.objectStore$member = function(name_0){
  return html623afa$LevelDom$Dart.wrapIDBObjectStore$member(this._ptr$html623afa$$getter_().objectStore$named(1, $noargs, name_0));
}
;
html623afa$IDBTransactionWrappingImplementation$Dart.prototype.objectStore$named = function($n, $o, name_0){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$IDBTransactionWrappingImplementation$Dart.prototype.objectStore$member.call(this, name_0);
}
;
html623afa$IDBTransactionWrappingImplementation$Dart.prototype.objectStore$getter = function objectStore$getter(){
  return $bind(html623afa$IDBTransactionWrappingImplementation$Dart.prototype.objectStore$named, this);
}
;
html623afa$IDBTransactionWrappingImplementation$Dart.prototype.removeEventListener$member = function(type, listener, useCapture){
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
html623afa$IDBTransactionWrappingImplementation$Dart.prototype.removeEventListener$named = function($n, $o, type, listener, useCapture){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 2:
      useCapture = $o.useCapture?(++seen , $o.useCapture):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return html623afa$IDBTransactionWrappingImplementation$Dart.prototype.removeEventListener$member.call(this, type, listener, useCapture);
}
;
html623afa$IDBTransactionWrappingImplementation$Dart.prototype.removeEventListener$getter = function removeEventListener$getter(){
  return $bind(html623afa$IDBTransactionWrappingImplementation$Dart.prototype.removeEventListener$named, this);
}
;
