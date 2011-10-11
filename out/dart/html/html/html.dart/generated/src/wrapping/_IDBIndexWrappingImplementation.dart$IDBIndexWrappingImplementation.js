function html623afa$IDBIndexWrappingImplementation$Dart(){
}

html623afa$IDBIndexWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('html623afa$IDBIndexWrappingImplementation$Dart'), html623afa$IDBIndexWrappingImplementation$Dart.$RTTimplements);
}
;
html623afa$IDBIndexWrappingImplementation$Dart.$RTTimplements = function(rtt){
  html623afa$IDBIndexWrappingImplementation$Dart.$addTo(rtt);
}
;
html623afa$IDBIndexWrappingImplementation$Dart.$addTo = function(target){
  var rtt = html623afa$IDBIndexWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  html623afa$DOMWrapperBase$Dart.$addTo(target);
  html623afa$IDBIndex$Dart.$addTo(target);
}
;
html623afa$IDBIndexWrappingImplementation$Dart.prototype.$implements$html623afa$IDBIndexWrappingImplementation$Dart = 1;
html623afa$IDBIndexWrappingImplementation$Dart.prototype.$implements$html623afa$IDBIndex$Dart = 1;
html623afa$IDBIndexWrappingImplementation$Dart.prototype.$implements$html623afa$DOMWrapperBase$Dart = 1;
html623afa$IDBIndexWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(html623afa$IDBIndexWrappingImplementation$Dart, html623afa$DOMWrapperBase$Dart);
html623afa$IDBIndexWrappingImplementation$Dart._wrap$html623afa$$Constructor_ = function(ptr){
  html623afa$DOMWrapperBase$Dart._wrap$html623afa$$Constructor_.call(this, ptr);
}
;
html623afa$IDBIndexWrappingImplementation$Dart._wrap$html623afa$$Initializer_ = function(ptr){
  html623afa$DOMWrapperBase$Dart._wrap$html623afa$$Initializer_.call(this, ptr);
}
;
html623afa$IDBIndexWrappingImplementation$Dart.IDBIndexWrappingImplementation$_wrap$30$html623afa$$Factory_ = function(ptr){
  var tmp$0 = new html623afa$IDBIndexWrappingImplementation$Dart;
  tmp$0.$typeInfo = html623afa$IDBIndexWrappingImplementation$Dart.$lookupRTT();
  html623afa$IDBIndexWrappingImplementation$Dart._wrap$html623afa$$Initializer_.call(tmp$0, ptr);
  html623afa$IDBIndexWrappingImplementation$Dart._wrap$html623afa$$Constructor_.call(tmp$0, ptr);
  return tmp$0;
}
;
html623afa$IDBIndexWrappingImplementation$Dart.prototype.keyPath$named = function(){
  return this.keyPath$getter().apply(this, arguments);
}
;
html623afa$IDBIndexWrappingImplementation$Dart.prototype.keyPath$getter = function(){
  return this._ptr$html623afa$$getter_().keyPath$getter();
}
;
html623afa$IDBIndexWrappingImplementation$Dart.prototype.name$named = function(){
  return this.name$getter().apply(this, arguments);
}
;
html623afa$IDBIndexWrappingImplementation$Dart.prototype.name$getter = function(){
  return this._ptr$html623afa$$getter_().name$getter();
}
;
html623afa$IDBIndexWrappingImplementation$Dart.prototype.objectStore$named = function(){
  return this.objectStore$getter().apply(this, arguments);
}
;
html623afa$IDBIndexWrappingImplementation$Dart.prototype.objectStore$getter = function(){
  return html623afa$LevelDom$Dart.wrapIDBObjectStore$member(this._ptr$html623afa$$getter_().objectStore$getter());
}
;
html623afa$IDBIndexWrappingImplementation$Dart.prototype.unique$named = function(){
  return this.unique$getter().apply(this, arguments);
}
;
html623afa$IDBIndexWrappingImplementation$Dart.prototype.unique$getter = function(){
  return this._ptr$html623afa$$getter_().unique$getter();
}
;
html623afa$IDBIndexWrappingImplementation$Dart.prototype.getObject$member = function(key){
  return html623afa$LevelDom$Dart.wrapIDBRequest$member(this._ptr$html623afa$$getter_().getObject$named(1, $noargs, html623afa$LevelDom$Dart.unwrap$member(key)));
}
;
html623afa$IDBIndexWrappingImplementation$Dart.prototype.getObject$named = function($n, $o, key){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$IDBIndexWrappingImplementation$Dart.prototype.getObject$member.call(this, key);
}
;
html623afa$IDBIndexWrappingImplementation$Dart.prototype.getObject$getter = function getObject$getter(){
  return $bind(html623afa$IDBIndexWrappingImplementation$Dart.prototype.getObject$named, this);
}
;
html623afa$IDBIndexWrappingImplementation$Dart.prototype.getKey$member = function(key){
  return html623afa$LevelDom$Dart.wrapIDBRequest$member(this._ptr$html623afa$$getter_().getKey$named(1, $noargs, html623afa$LevelDom$Dart.unwrap$member(key)));
}
;
html623afa$IDBIndexWrappingImplementation$Dart.prototype.getKey$named = function($n, $o, key){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$IDBIndexWrappingImplementation$Dart.prototype.getKey$member.call(this, key);
}
;
html623afa$IDBIndexWrappingImplementation$Dart.prototype.getKey$getter = function getKey$getter(){
  return $bind(html623afa$IDBIndexWrappingImplementation$Dart.prototype.getKey$named, this);
}
;
html623afa$IDBIndexWrappingImplementation$Dart.prototype.openCursor$member = function(range, direction){
  if (range == null) {
    if (direction == null) {
      return html623afa$LevelDom$Dart.wrapIDBRequest$member(this._ptr$html623afa$$getter_().openCursor$named(0, $noargs));
    }
  }
   else {
    if (direction == null) {
      return html623afa$LevelDom$Dart.wrapIDBRequest$member(this._ptr$html623afa$$getter_().openCursor$named(1, $noargs, html623afa$LevelDom$Dart.unwrap$member(range)));
    }
     else {
      return html623afa$LevelDom$Dart.wrapIDBRequest$member(this._ptr$html623afa$$getter_().openCursor$named(2, $noargs, html623afa$LevelDom$Dart.unwrap$member(range), direction));
    }
  }
  $Dart$ThrowException('Incorrect number or type of arguments');
}
;
html623afa$IDBIndexWrappingImplementation$Dart.prototype.openCursor$named = function($n, $o, range, direction){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 0:
      range = $o.range?(++seen , $o.range):(++def , $Dart$Null);
    case 1:
      direction = $o.direction?(++seen , $o.direction):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return html623afa$IDBIndexWrappingImplementation$Dart.prototype.openCursor$member.call(this, range, direction);
}
;
html623afa$IDBIndexWrappingImplementation$Dart.prototype.openCursor$getter = function openCursor$getter(){
  return $bind(html623afa$IDBIndexWrappingImplementation$Dart.prototype.openCursor$named, this);
}
;
html623afa$IDBIndexWrappingImplementation$Dart.prototype.openKeyCursor$member = function(range, direction){
  if (range == null) {
    if (direction == null) {
      return html623afa$LevelDom$Dart.wrapIDBRequest$member(this._ptr$html623afa$$getter_().openKeyCursor$named(0, $noargs));
    }
  }
   else {
    if (direction == null) {
      return html623afa$LevelDom$Dart.wrapIDBRequest$member(this._ptr$html623afa$$getter_().openKeyCursor$named(1, $noargs, html623afa$LevelDom$Dart.unwrap$member(range)));
    }
     else {
      return html623afa$LevelDom$Dart.wrapIDBRequest$member(this._ptr$html623afa$$getter_().openKeyCursor$named(2, $noargs, html623afa$LevelDom$Dart.unwrap$member(range), direction));
    }
  }
  $Dart$ThrowException('Incorrect number or type of arguments');
}
;
html623afa$IDBIndexWrappingImplementation$Dart.prototype.openKeyCursor$named = function($n, $o, range, direction){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 0:
      range = $o.range?(++seen , $o.range):(++def , $Dart$Null);
    case 1:
      direction = $o.direction?(++seen , $o.direction):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return html623afa$IDBIndexWrappingImplementation$Dart.prototype.openKeyCursor$member.call(this, range, direction);
}
;
html623afa$IDBIndexWrappingImplementation$Dart.prototype.openKeyCursor$getter = function openKeyCursor$getter(){
  return $bind(html623afa$IDBIndexWrappingImplementation$Dart.prototype.openKeyCursor$named, this);
}
;
