function html623afa$IDBObjectStoreWrappingImplementation$Dart(){
}

html623afa$IDBObjectStoreWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('html623afa$IDBObjectStoreWrappingImplementation$Dart'), html623afa$IDBObjectStoreWrappingImplementation$Dart.$RTTimplements);
}
;
html623afa$IDBObjectStoreWrappingImplementation$Dart.$RTTimplements = function(rtt){
  html623afa$IDBObjectStoreWrappingImplementation$Dart.$addTo(rtt);
}
;
html623afa$IDBObjectStoreWrappingImplementation$Dart.$addTo = function(target){
  var rtt = html623afa$IDBObjectStoreWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  html623afa$DOMWrapperBase$Dart.$addTo(target);
  html623afa$IDBObjectStore$Dart.$addTo(target);
}
;
html623afa$IDBObjectStoreWrappingImplementation$Dart.prototype.$implements$html623afa$IDBObjectStoreWrappingImplementation$Dart = 1;
html623afa$IDBObjectStoreWrappingImplementation$Dart.prototype.$implements$html623afa$IDBObjectStore$Dart = 1;
html623afa$IDBObjectStoreWrappingImplementation$Dart.prototype.$implements$html623afa$DOMWrapperBase$Dart = 1;
html623afa$IDBObjectStoreWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(html623afa$IDBObjectStoreWrappingImplementation$Dart, html623afa$DOMWrapperBase$Dart);
html623afa$IDBObjectStoreWrappingImplementation$Dart._wrap$html623afa$$Constructor_ = function(ptr){
  html623afa$DOMWrapperBase$Dart._wrap$html623afa$$Constructor_.call(this, ptr);
}
;
html623afa$IDBObjectStoreWrappingImplementation$Dart._wrap$html623afa$$Initializer_ = function(ptr){
  html623afa$DOMWrapperBase$Dart._wrap$html623afa$$Initializer_.call(this, ptr);
}
;
html623afa$IDBObjectStoreWrappingImplementation$Dart.IDBObjectStoreWrappingImplementation$_wrap$36$html623afa$$Factory_ = function(ptr){
  var tmp$0 = new html623afa$IDBObjectStoreWrappingImplementation$Dart;
  tmp$0.$typeInfo = html623afa$IDBObjectStoreWrappingImplementation$Dart.$lookupRTT();
  html623afa$IDBObjectStoreWrappingImplementation$Dart._wrap$html623afa$$Initializer_.call(tmp$0, ptr);
  html623afa$IDBObjectStoreWrappingImplementation$Dart._wrap$html623afa$$Constructor_.call(tmp$0, ptr);
  return tmp$0;
}
;
html623afa$IDBObjectStoreWrappingImplementation$Dart.prototype.keyPath$named = function(){
  return this.keyPath$getter().apply(this, arguments);
}
;
html623afa$IDBObjectStoreWrappingImplementation$Dart.prototype.keyPath$getter = function(){
  return this._ptr$html623afa$$getter_().keyPath$getter();
}
;
html623afa$IDBObjectStoreWrappingImplementation$Dart.prototype.name$named = function(){
  return this.name$getter().apply(this, arguments);
}
;
html623afa$IDBObjectStoreWrappingImplementation$Dart.prototype.name$getter = function(){
  return this._ptr$html623afa$$getter_().name$getter();
}
;
html623afa$IDBObjectStoreWrappingImplementation$Dart.prototype.add$member = function(value, key){
  if (key == null) {
    return html623afa$LevelDom$Dart.wrapIDBRequest$member(this._ptr$html623afa$$getter_().add$named(1, $noargs, value));
  }
   else {
    return html623afa$LevelDom$Dart.wrapIDBRequest$member(this._ptr$html623afa$$getter_().add$named(2, $noargs, value, html623afa$LevelDom$Dart.unwrap$member(key)));
  }
}
;
html623afa$IDBObjectStoreWrappingImplementation$Dart.prototype.add$named = function($n, $o, value, key){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 1:
      key = $o.key?(++seen , $o.key):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return html623afa$IDBObjectStoreWrappingImplementation$Dart.prototype.add$member.call(this, value, key);
}
;
html623afa$IDBObjectStoreWrappingImplementation$Dart.prototype.add$getter = function add$getter(){
  return $bind(html623afa$IDBObjectStoreWrappingImplementation$Dart.prototype.add$named, this);
}
;
html623afa$IDBObjectStoreWrappingImplementation$Dart.prototype.clear$member = function(){
  return html623afa$LevelDom$Dart.wrapIDBRequest$member(this._ptr$html623afa$$getter_().clear$named(0, $noargs));
}
;
html623afa$IDBObjectStoreWrappingImplementation$Dart.prototype.clear$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return html623afa$IDBObjectStoreWrappingImplementation$Dart.prototype.clear$member.call(this);
}
;
html623afa$IDBObjectStoreWrappingImplementation$Dart.prototype.clear$getter = function clear$getter(){
  return $bind(html623afa$IDBObjectStoreWrappingImplementation$Dart.prototype.clear$named, this);
}
;
html623afa$IDBObjectStoreWrappingImplementation$Dart.prototype.createIndex$member = function(name_0, keyPath){
  return html623afa$LevelDom$Dart.wrapIDBIndex$member(this._ptr$html623afa$$getter_().createIndex$named(2, $noargs, name_0, keyPath));
}
;
html623afa$IDBObjectStoreWrappingImplementation$Dart.prototype.createIndex$named = function($n, $o, name_0, keyPath){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return html623afa$IDBObjectStoreWrappingImplementation$Dart.prototype.createIndex$member.call(this, name_0, keyPath);
}
;
html623afa$IDBObjectStoreWrappingImplementation$Dart.prototype.createIndex$getter = function createIndex$getter(){
  return $bind(html623afa$IDBObjectStoreWrappingImplementation$Dart.prototype.createIndex$named, this);
}
;
html623afa$IDBObjectStoreWrappingImplementation$Dart.prototype.delete$member = function(key){
  return html623afa$LevelDom$Dart.wrapIDBRequest$member(this._ptr$html623afa$$getter_().delete$named(1, $noargs, html623afa$LevelDom$Dart.unwrap$member(key)));
}
;
html623afa$IDBObjectStoreWrappingImplementation$Dart.prototype.delete$named = function($n, $o, key){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$IDBObjectStoreWrappingImplementation$Dart.prototype.delete$member.call(this, key);
}
;
html623afa$IDBObjectStoreWrappingImplementation$Dart.prototype.delete$getter = function delete$getter(){
  return $bind(html623afa$IDBObjectStoreWrappingImplementation$Dart.prototype.delete$named, this);
}
;
html623afa$IDBObjectStoreWrappingImplementation$Dart.prototype.deleteIndex$member = function(name_0){
  this._ptr$html623afa$$getter_().deleteIndex$named(1, $noargs, name_0);
  return;
}
;
html623afa$IDBObjectStoreWrappingImplementation$Dart.prototype.deleteIndex$named = function($n, $o, name_0){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$IDBObjectStoreWrappingImplementation$Dart.prototype.deleteIndex$member.call(this, name_0);
}
;
html623afa$IDBObjectStoreWrappingImplementation$Dart.prototype.deleteIndex$getter = function deleteIndex$getter(){
  return $bind(html623afa$IDBObjectStoreWrappingImplementation$Dart.prototype.deleteIndex$named, this);
}
;
html623afa$IDBObjectStoreWrappingImplementation$Dart.prototype.getObject$member = function(key){
  return html623afa$LevelDom$Dart.wrapIDBRequest$member(this._ptr$html623afa$$getter_().getObject$named(1, $noargs, html623afa$LevelDom$Dart.unwrap$member(key)));
}
;
html623afa$IDBObjectStoreWrappingImplementation$Dart.prototype.getObject$named = function($n, $o, key){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$IDBObjectStoreWrappingImplementation$Dart.prototype.getObject$member.call(this, key);
}
;
html623afa$IDBObjectStoreWrappingImplementation$Dart.prototype.getObject$getter = function getObject$getter(){
  return $bind(html623afa$IDBObjectStoreWrappingImplementation$Dart.prototype.getObject$named, this);
}
;
html623afa$IDBObjectStoreWrappingImplementation$Dart.prototype.index$member = function(name_0){
  return html623afa$LevelDom$Dart.wrapIDBIndex$member(this._ptr$html623afa$$getter_().index$named(1, $noargs, name_0));
}
;
html623afa$IDBObjectStoreWrappingImplementation$Dart.prototype.index$named = function($n, $o, name_0){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$IDBObjectStoreWrappingImplementation$Dart.prototype.index$member.call(this, name_0);
}
;
html623afa$IDBObjectStoreWrappingImplementation$Dart.prototype.index$getter = function index$getter(){
  return $bind(html623afa$IDBObjectStoreWrappingImplementation$Dart.prototype.index$named, this);
}
;
html623afa$IDBObjectStoreWrappingImplementation$Dart.prototype.openCursor$member = function(range, direction){
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
html623afa$IDBObjectStoreWrappingImplementation$Dart.prototype.openCursor$named = function($n, $o, range, direction){
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
  return html623afa$IDBObjectStoreWrappingImplementation$Dart.prototype.openCursor$member.call(this, range, direction);
}
;
html623afa$IDBObjectStoreWrappingImplementation$Dart.prototype.openCursor$getter = function openCursor$getter(){
  return $bind(html623afa$IDBObjectStoreWrappingImplementation$Dart.prototype.openCursor$named, this);
}
;
html623afa$IDBObjectStoreWrappingImplementation$Dart.prototype.put$member = function(value, key){
  if (key == null) {
    return html623afa$LevelDom$Dart.wrapIDBRequest$member(this._ptr$html623afa$$getter_().put$named(1, $noargs, value));
  }
   else {
    return html623afa$LevelDom$Dart.wrapIDBRequest$member(this._ptr$html623afa$$getter_().put$named(2, $noargs, value, html623afa$LevelDom$Dart.unwrap$member(key)));
  }
}
;
html623afa$IDBObjectStoreWrappingImplementation$Dart.prototype.put$named = function($n, $o, value, key){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 1:
      key = $o.key?(++seen , $o.key):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return html623afa$IDBObjectStoreWrappingImplementation$Dart.prototype.put$member.call(this, value, key);
}
;
html623afa$IDBObjectStoreWrappingImplementation$Dart.prototype.put$getter = function put$getter(){
  return $bind(html623afa$IDBObjectStoreWrappingImplementation$Dart.prototype.put$named, this);
}
;
