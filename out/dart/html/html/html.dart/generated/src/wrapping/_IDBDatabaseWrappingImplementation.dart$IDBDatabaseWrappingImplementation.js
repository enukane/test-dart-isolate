function html623afa$IDBDatabaseWrappingImplementation$Dart(){
}

html623afa$IDBDatabaseWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('html623afa$IDBDatabaseWrappingImplementation$Dart'), html623afa$IDBDatabaseWrappingImplementation$Dart.$RTTimplements);
}
;
html623afa$IDBDatabaseWrappingImplementation$Dart.$RTTimplements = function(rtt){
  html623afa$IDBDatabaseWrappingImplementation$Dart.$addTo(rtt);
}
;
html623afa$IDBDatabaseWrappingImplementation$Dart.$addTo = function(target){
  var rtt = html623afa$IDBDatabaseWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  html623afa$DOMWrapperBase$Dart.$addTo(target);
  html623afa$IDBDatabase$Dart.$addTo(target);
}
;
html623afa$IDBDatabaseWrappingImplementation$Dart.prototype.$implements$html623afa$IDBDatabaseWrappingImplementation$Dart = 1;
html623afa$IDBDatabaseWrappingImplementation$Dart.prototype.$implements$html623afa$IDBDatabase$Dart = 1;
html623afa$IDBDatabaseWrappingImplementation$Dart.prototype.$implements$html623afa$DOMWrapperBase$Dart = 1;
html623afa$IDBDatabaseWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(html623afa$IDBDatabaseWrappingImplementation$Dart, html623afa$DOMWrapperBase$Dart);
html623afa$IDBDatabaseWrappingImplementation$Dart._wrap$html623afa$$Constructor_ = function(ptr){
  html623afa$DOMWrapperBase$Dart._wrap$html623afa$$Constructor_.call(this, ptr);
}
;
html623afa$IDBDatabaseWrappingImplementation$Dart._wrap$html623afa$$Initializer_ = function(ptr){
  html623afa$DOMWrapperBase$Dart._wrap$html623afa$$Initializer_.call(this, ptr);
}
;
html623afa$IDBDatabaseWrappingImplementation$Dart.IDBDatabaseWrappingImplementation$_wrap$33$html623afa$$Factory_ = function(ptr){
  var tmp$0 = new html623afa$IDBDatabaseWrappingImplementation$Dart;
  tmp$0.$typeInfo = html623afa$IDBDatabaseWrappingImplementation$Dart.$lookupRTT();
  html623afa$IDBDatabaseWrappingImplementation$Dart._wrap$html623afa$$Initializer_.call(tmp$0, ptr);
  html623afa$IDBDatabaseWrappingImplementation$Dart._wrap$html623afa$$Constructor_.call(tmp$0, ptr);
  return tmp$0;
}
;
html623afa$IDBDatabaseWrappingImplementation$Dart.prototype.name$named = function(){
  return this.name$getter().apply(this, arguments);
}
;
html623afa$IDBDatabaseWrappingImplementation$Dart.prototype.name$getter = function(){
  return this._ptr$html623afa$$getter_().name$getter();
}
;
html623afa$IDBDatabaseWrappingImplementation$Dart.prototype.onabort$named = function(){
  return this.onabort$getter().apply(this, arguments);
}
;
html623afa$IDBDatabaseWrappingImplementation$Dart.prototype.onabort$getter = function(){
  return html623afa$LevelDom$Dart.wrapEventListener$member(this._ptr$html623afa$$getter_().onabort$getter());
}
;
html623afa$IDBDatabaseWrappingImplementation$Dart.prototype.onabort$setter = function(value){
  var tmp$0;
  this._ptr$html623afa$$getter_().onabort$setter(tmp$0 = html623afa$LevelDom$Dart.unwrap$member(value)) , tmp$0;
}
;
html623afa$IDBDatabaseWrappingImplementation$Dart.prototype.onerror$named = function(){
  return this.onerror$getter().apply(this, arguments);
}
;
html623afa$IDBDatabaseWrappingImplementation$Dart.prototype.onerror$getter = function(){
  return html623afa$LevelDom$Dart.wrapEventListener$member(this._ptr$html623afa$$getter_().onerror$getter());
}
;
html623afa$IDBDatabaseWrappingImplementation$Dart.prototype.onerror$setter = function(value){
  var tmp$0;
  this._ptr$html623afa$$getter_().onerror$setter(tmp$0 = html623afa$LevelDom$Dart.unwrap$member(value)) , tmp$0;
}
;
html623afa$IDBDatabaseWrappingImplementation$Dart.prototype.onversionchange$named = function(){
  return this.onversionchange$getter().apply(this, arguments);
}
;
html623afa$IDBDatabaseWrappingImplementation$Dart.prototype.onversionchange$getter = function(){
  return html623afa$LevelDom$Dart.wrapEventListener$member(this._ptr$html623afa$$getter_().onversionchange$getter());
}
;
html623afa$IDBDatabaseWrappingImplementation$Dart.prototype.onversionchange$setter = function(value){
  var tmp$0;
  this._ptr$html623afa$$getter_().onversionchange$setter(tmp$0 = html623afa$LevelDom$Dart.unwrap$member(value)) , tmp$0;
}
;
html623afa$IDBDatabaseWrappingImplementation$Dart.prototype.version$named = function(){
  return this.version$getter().apply(this, arguments);
}
;
html623afa$IDBDatabaseWrappingImplementation$Dart.prototype.version$getter = function(){
  return this._ptr$html623afa$$getter_().version$getter();
}
;
html623afa$IDBDatabaseWrappingImplementation$Dart.prototype.addEventListener$member = function(type, listener, useCapture){
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
html623afa$IDBDatabaseWrappingImplementation$Dart.prototype.addEventListener$named = function($n, $o, type, listener, useCapture){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 2:
      useCapture = $o.useCapture?(++seen , $o.useCapture):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return html623afa$IDBDatabaseWrappingImplementation$Dart.prototype.addEventListener$member.call(this, type, listener, useCapture);
}
;
html623afa$IDBDatabaseWrappingImplementation$Dart.prototype.addEventListener$getter = function addEventListener$getter(){
  return $bind(html623afa$IDBDatabaseWrappingImplementation$Dart.prototype.addEventListener$named, this);
}
;
html623afa$IDBDatabaseWrappingImplementation$Dart.prototype.close$member = function(){
  this._ptr$html623afa$$getter_().close$named(0, $noargs);
  return;
}
;
html623afa$IDBDatabaseWrappingImplementation$Dart.prototype.close$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return html623afa$IDBDatabaseWrappingImplementation$Dart.prototype.close$member.call(this);
}
;
html623afa$IDBDatabaseWrappingImplementation$Dart.prototype.close$getter = function close$getter(){
  return $bind(html623afa$IDBDatabaseWrappingImplementation$Dart.prototype.close$named, this);
}
;
html623afa$IDBDatabaseWrappingImplementation$Dart.prototype.createObjectStore$member = function(name_0){
  return html623afa$LevelDom$Dart.wrapIDBObjectStore$member(this._ptr$html623afa$$getter_().createObjectStore$named(1, $noargs, name_0));
}
;
html623afa$IDBDatabaseWrappingImplementation$Dart.prototype.createObjectStore$named = function($n, $o, name_0){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$IDBDatabaseWrappingImplementation$Dart.prototype.createObjectStore$member.call(this, name_0);
}
;
html623afa$IDBDatabaseWrappingImplementation$Dart.prototype.createObjectStore$getter = function createObjectStore$getter(){
  return $bind(html623afa$IDBDatabaseWrappingImplementation$Dart.prototype.createObjectStore$named, this);
}
;
html623afa$IDBDatabaseWrappingImplementation$Dart.prototype.deleteObjectStore$member = function(name_0){
  this._ptr$html623afa$$getter_().deleteObjectStore$named(1, $noargs, name_0);
  return;
}
;
html623afa$IDBDatabaseWrappingImplementation$Dart.prototype.deleteObjectStore$named = function($n, $o, name_0){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$IDBDatabaseWrappingImplementation$Dart.prototype.deleteObjectStore$member.call(this, name_0);
}
;
html623afa$IDBDatabaseWrappingImplementation$Dart.prototype.deleteObjectStore$getter = function deleteObjectStore$getter(){
  return $bind(html623afa$IDBDatabaseWrappingImplementation$Dart.prototype.deleteObjectStore$named, this);
}
;
html623afa$IDBDatabaseWrappingImplementation$Dart.prototype.dispatchEvent$member = function(evt){
  return this._ptr$html623afa$$getter_().dispatchEvent$named(1, $noargs, html623afa$LevelDom$Dart.unwrap$member(evt));
}
;
html623afa$IDBDatabaseWrappingImplementation$Dart.prototype.dispatchEvent$named = function($n, $o, evt){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$IDBDatabaseWrappingImplementation$Dart.prototype.dispatchEvent$member.call(this, evt);
}
;
html623afa$IDBDatabaseWrappingImplementation$Dart.prototype.dispatchEvent$getter = function dispatchEvent$getter(){
  return $bind(html623afa$IDBDatabaseWrappingImplementation$Dart.prototype.dispatchEvent$named, this);
}
;
html623afa$IDBDatabaseWrappingImplementation$Dart.prototype.removeEventListener$member = function(type, listener, useCapture){
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
html623afa$IDBDatabaseWrappingImplementation$Dart.prototype.removeEventListener$named = function($n, $o, type, listener, useCapture){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 2:
      useCapture = $o.useCapture?(++seen , $o.useCapture):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return html623afa$IDBDatabaseWrappingImplementation$Dart.prototype.removeEventListener$member.call(this, type, listener, useCapture);
}
;
html623afa$IDBDatabaseWrappingImplementation$Dart.prototype.removeEventListener$getter = function removeEventListener$getter(){
  return $bind(html623afa$IDBDatabaseWrappingImplementation$Dart.prototype.removeEventListener$named, this);
}
;
html623afa$IDBDatabaseWrappingImplementation$Dart.prototype.setVersion$member = function(version){
  return html623afa$LevelDom$Dart.wrapIDBVersionChangeRequest$member(this._ptr$html623afa$$getter_().setVersion$named(1, $noargs, version));
}
;
html623afa$IDBDatabaseWrappingImplementation$Dart.prototype.setVersion$named = function($n, $o, version){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$IDBDatabaseWrappingImplementation$Dart.prototype.setVersion$member.call(this, version);
}
;
html623afa$IDBDatabaseWrappingImplementation$Dart.prototype.setVersion$getter = function setVersion$getter(){
  return $bind(html623afa$IDBDatabaseWrappingImplementation$Dart.prototype.setVersion$named, this);
}
;
