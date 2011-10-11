function html623afa$IDBCursorWrappingImplementation$Dart(){
}

html623afa$IDBCursorWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('html623afa$IDBCursorWrappingImplementation$Dart'), html623afa$IDBCursorWrappingImplementation$Dart.$RTTimplements);
}
;
html623afa$IDBCursorWrappingImplementation$Dart.$RTTimplements = function(rtt){
  html623afa$IDBCursorWrappingImplementation$Dart.$addTo(rtt);
}
;
html623afa$IDBCursorWrappingImplementation$Dart.$addTo = function(target){
  var rtt = html623afa$IDBCursorWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  html623afa$DOMWrapperBase$Dart.$addTo(target);
  html623afa$IDBCursor$Dart.$addTo(target);
}
;
html623afa$IDBCursorWrappingImplementation$Dart.prototype.$implements$html623afa$IDBCursorWrappingImplementation$Dart = 1;
html623afa$IDBCursorWrappingImplementation$Dart.prototype.$implements$html623afa$IDBCursor$Dart = 1;
html623afa$IDBCursorWrappingImplementation$Dart.prototype.$implements$html623afa$DOMWrapperBase$Dart = 1;
html623afa$IDBCursorWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(html623afa$IDBCursorWrappingImplementation$Dart, html623afa$DOMWrapperBase$Dart);
html623afa$IDBCursorWrappingImplementation$Dart._wrap$html623afa$$Constructor_ = function(ptr){
  html623afa$DOMWrapperBase$Dart._wrap$html623afa$$Constructor_.call(this, ptr);
}
;
html623afa$IDBCursorWrappingImplementation$Dart._wrap$html623afa$$Initializer_ = function(ptr){
  html623afa$DOMWrapperBase$Dart._wrap$html623afa$$Initializer_.call(this, ptr);
}
;
html623afa$IDBCursorWrappingImplementation$Dart.IDBCursorWrappingImplementation$_wrap$31$html623afa$$Factory_ = function(ptr){
  var tmp$0 = new html623afa$IDBCursorWrappingImplementation$Dart;
  tmp$0.$typeInfo = html623afa$IDBCursorWrappingImplementation$Dart.$lookupRTT();
  html623afa$IDBCursorWrappingImplementation$Dart._wrap$html623afa$$Initializer_.call(tmp$0, ptr);
  html623afa$IDBCursorWrappingImplementation$Dart._wrap$html623afa$$Constructor_.call(tmp$0, ptr);
  return tmp$0;
}
;
html623afa$IDBCursorWrappingImplementation$Dart.prototype.direction$named = function(){
  return this.direction$getter().apply(this, arguments);
}
;
html623afa$IDBCursorWrappingImplementation$Dart.prototype.direction$getter = function(){
  return this._ptr$html623afa$$getter_().direction$getter();
}
;
html623afa$IDBCursorWrappingImplementation$Dart.prototype.key$named = function(){
  return this.key$getter().apply(this, arguments);
}
;
html623afa$IDBCursorWrappingImplementation$Dart.prototype.key$getter = function(){
  return html623afa$LevelDom$Dart.wrapIDBKey$member(this._ptr$html623afa$$getter_().key$getter());
}
;
html623afa$IDBCursorWrappingImplementation$Dart.prototype.primaryKey$named = function(){
  return this.primaryKey$getter().apply(this, arguments);
}
;
html623afa$IDBCursorWrappingImplementation$Dart.prototype.primaryKey$getter = function(){
  return html623afa$LevelDom$Dart.wrapIDBKey$member(this._ptr$html623afa$$getter_().primaryKey$getter());
}
;
html623afa$IDBCursorWrappingImplementation$Dart.prototype.source$named = function(){
  return this.source$getter().apply(this, arguments);
}
;
html623afa$IDBCursorWrappingImplementation$Dart.prototype.source$getter = function(){
  return html623afa$LevelDom$Dart.wrapIDBAny$member(this._ptr$html623afa$$getter_().source$getter());
}
;
html623afa$IDBCursorWrappingImplementation$Dart.prototype.continueFunction$member = function(key){
  if (key == null) {
    this._ptr$html623afa$$getter_().continueFunction$named(0, $noargs);
    return;
  }
   else {
    this._ptr$html623afa$$getter_().continueFunction$named(1, $noargs, html623afa$LevelDom$Dart.unwrap$member(key));
    return;
  }
}
;
html623afa$IDBCursorWrappingImplementation$Dart.prototype.continueFunction$named = function($n, $o, key){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 0:
      key = $o.key?(++seen , $o.key):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$IDBCursorWrappingImplementation$Dart.prototype.continueFunction$member.call(this, key);
}
;
html623afa$IDBCursorWrappingImplementation$Dart.prototype.continueFunction$getter = function continueFunction$getter(){
  return $bind(html623afa$IDBCursorWrappingImplementation$Dart.prototype.continueFunction$named, this);
}
;
html623afa$IDBCursorWrappingImplementation$Dart.prototype.delete$member = function(){
  return html623afa$LevelDom$Dart.wrapIDBRequest$member(this._ptr$html623afa$$getter_().delete$named(0, $noargs));
}
;
html623afa$IDBCursorWrappingImplementation$Dart.prototype.delete$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return html623afa$IDBCursorWrappingImplementation$Dart.prototype.delete$member.call(this);
}
;
html623afa$IDBCursorWrappingImplementation$Dart.prototype.delete$getter = function delete$getter(){
  return $bind(html623afa$IDBCursorWrappingImplementation$Dart.prototype.delete$named, this);
}
;
html623afa$IDBCursorWrappingImplementation$Dart.prototype.update$member = function(value){
  return html623afa$LevelDom$Dart.wrapIDBRequest$member(this._ptr$html623afa$$getter_().update$named(1, $noargs, value));
}
;
html623afa$IDBCursorWrappingImplementation$Dart.prototype.update$named = function($n, $o, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$IDBCursorWrappingImplementation$Dart.prototype.update$member.call(this, value);
}
;
html623afa$IDBCursorWrappingImplementation$Dart.prototype.update$getter = function update$getter(){
  return $bind(html623afa$IDBCursorWrappingImplementation$Dart.prototype.update$named, this);
}
;
