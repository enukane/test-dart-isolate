function _IDBObjectStoreWrappingImplementation$Dart(){
}

_IDBObjectStoreWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('_IDBObjectStoreWrappingImplementation$Dart'), _IDBObjectStoreWrappingImplementation$Dart.$RTTimplements);
}
;
_IDBObjectStoreWrappingImplementation$Dart.$RTTimplements = function(rtt){
  _IDBObjectStoreWrappingImplementation$Dart.$addTo(rtt);
}
;
_IDBObjectStoreWrappingImplementation$Dart.$addTo = function(target){
  var rtt = _IDBObjectStoreWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  DOMWrapperBase$Dart.$addTo(target);
  IDBObjectStore$Dart.$addTo(target);
}
;
_IDBObjectStoreWrappingImplementation$Dart.prototype.$implements$_IDBObjectStoreWrappingImplementation$Dart = 1;
_IDBObjectStoreWrappingImplementation$Dart.prototype.$implements$IDBObjectStore$Dart = 1;
_IDBObjectStoreWrappingImplementation$Dart.prototype.$implements$DOMWrapperBase$Dart = 1;
_IDBObjectStoreWrappingImplementation$Dart.prototype.$implements$DOMType$Dart = 1;
_IDBObjectStoreWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(_IDBObjectStoreWrappingImplementation$Dart, DOMWrapperBase$Dart);
_IDBObjectStoreWrappingImplementation$Dart.$Constructor = function(){
  DOMWrapperBase$Dart.$Constructor.call(this);
}
;
_IDBObjectStoreWrappingImplementation$Dart.$Initializer = function(){
  DOMWrapperBase$Dart.$Initializer.call(this);
}
;
_IDBObjectStoreWrappingImplementation$Dart._IDBObjectStoreWrappingImplementation$$Factory = function(){
  var tmp$0 = new _IDBObjectStoreWrappingImplementation$Dart;
  tmp$0.$typeInfo = _IDBObjectStoreWrappingImplementation$Dart.$lookupRTT();
  _IDBObjectStoreWrappingImplementation$Dart.$Initializer.call(tmp$0);
  _IDBObjectStoreWrappingImplementation$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
_IDBObjectStoreWrappingImplementation$Dart.create__IDBObjectStoreWrappingImplementation$member = function(){
  return _IDBObjectStoreWrappingImplementation$Dart._IDBObjectStoreWrappingImplementation$$Factory();
}
;
_IDBObjectStoreWrappingImplementation$Dart.create__IDBObjectStoreWrappingImplementation$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _IDBObjectStoreWrappingImplementation$Dart.create__IDBObjectStoreWrappingImplementation$member();
}
;
function native__IDBObjectStoreWrappingImplementation_create__IDBObjectStoreWrappingImplementation(){
  return _IDBObjectStoreWrappingImplementation$Dart.create__IDBObjectStoreWrappingImplementation$member();
}

_IDBObjectStoreWrappingImplementation$Dart.create__IDBObjectStoreWrappingImplementation$getter = function create__IDBObjectStoreWrappingImplementation$getter(){
  return _IDBObjectStoreWrappingImplementation$Dart.create__IDBObjectStoreWrappingImplementation$named;
}
;
_IDBObjectStoreWrappingImplementation$Dart.prototype.keyPath$named = function(){
  return this.keyPath$getter().apply(this, arguments);
}
;
_IDBObjectStoreWrappingImplementation$Dart.prototype.keyPath$getter = function(){
  return _IDBObjectStoreWrappingImplementation$Dart._get__IDBObjectStore_keyPath$$member_(this);
}
;
_IDBObjectStoreWrappingImplementation$Dart._get__IDBObjectStore_keyPath$$member_ = function(_this){
  return native__IDBObjectStoreWrappingImplementation__get__IDBObjectStore_keyPath(_this);
}
;
_IDBObjectStoreWrappingImplementation$Dart._get__IDBObjectStore_keyPath$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _IDBObjectStoreWrappingImplementation$Dart._get__IDBObjectStore_keyPath$$member_(_this);
}
;
_IDBObjectStoreWrappingImplementation$Dart._get__IDBObjectStore_keyPath$$getter_ = function _get__IDBObjectStore_keyPath$$getter_(){
  return _IDBObjectStoreWrappingImplementation$Dart._get__IDBObjectStore_keyPath$$named_;
}
;
_IDBObjectStoreWrappingImplementation$Dart.prototype.name$named = function(){
  return this.name$getter().apply(this, arguments);
}
;
_IDBObjectStoreWrappingImplementation$Dart.prototype.name$getter = function(){
  return _IDBObjectStoreWrappingImplementation$Dart._get__IDBObjectStore_name$$member_(this);
}
;
_IDBObjectStoreWrappingImplementation$Dart._get__IDBObjectStore_name$$member_ = function(_this){
  return native__IDBObjectStoreWrappingImplementation__get__IDBObjectStore_name(_this);
}
;
_IDBObjectStoreWrappingImplementation$Dart._get__IDBObjectStore_name$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _IDBObjectStoreWrappingImplementation$Dart._get__IDBObjectStore_name$$member_(_this);
}
;
_IDBObjectStoreWrappingImplementation$Dart._get__IDBObjectStore_name$$getter_ = function _get__IDBObjectStore_name$$getter_(){
  return _IDBObjectStoreWrappingImplementation$Dart._get__IDBObjectStore_name$$named_;
}
;
_IDBObjectStoreWrappingImplementation$Dart.prototype.add$member = function(value, key){
  if (key == null) {
    return _IDBObjectStoreWrappingImplementation$Dart._add$$member_(this, value);
  }
   else {
    return _IDBObjectStoreWrappingImplementation$Dart._add_2$$member_(this, value, key);
  }
}
;
_IDBObjectStoreWrappingImplementation$Dart.prototype.add$named = function($n, $o, value, key){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 1:
      key = $o.key?(++seen , $o.key):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _IDBObjectStoreWrappingImplementation$Dart.prototype.add$member.call(this, value, key);
}
;
_IDBObjectStoreWrappingImplementation$Dart.prototype.add$getter = function add$getter(){
  return $bind(_IDBObjectStoreWrappingImplementation$Dart.prototype.add$named, this);
}
;
_IDBObjectStoreWrappingImplementation$Dart._add$$member_ = function(receiver, value){
  return native__IDBObjectStoreWrappingImplementation__add(receiver, value);
}
;
_IDBObjectStoreWrappingImplementation$Dart._add$$named_ = function($n, $o, receiver, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _IDBObjectStoreWrappingImplementation$Dart._add$$member_(receiver, value);
}
;
_IDBObjectStoreWrappingImplementation$Dart._add$$getter_ = function _add$$getter_(){
  return _IDBObjectStoreWrappingImplementation$Dart._add$$named_;
}
;
_IDBObjectStoreWrappingImplementation$Dart._add_2$$member_ = function(receiver, value, key){
  return native__IDBObjectStoreWrappingImplementation__add_2(receiver, value, key);
}
;
_IDBObjectStoreWrappingImplementation$Dart._add_2$$named_ = function($n, $o, receiver, value, key){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return _IDBObjectStoreWrappingImplementation$Dart._add_2$$member_(receiver, value, key);
}
;
_IDBObjectStoreWrappingImplementation$Dart._add_2$$getter_ = function _add_2$$getter_(){
  return _IDBObjectStoreWrappingImplementation$Dart._add_2$$named_;
}
;
_IDBObjectStoreWrappingImplementation$Dart.prototype.clear$member = function(){
  return _IDBObjectStoreWrappingImplementation$Dart._clear$$member_(this);
}
;
_IDBObjectStoreWrappingImplementation$Dart.prototype.clear$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _IDBObjectStoreWrappingImplementation$Dart.prototype.clear$member.call(this);
}
;
_IDBObjectStoreWrappingImplementation$Dart.prototype.clear$getter = function clear$getter(){
  return $bind(_IDBObjectStoreWrappingImplementation$Dart.prototype.clear$named, this);
}
;
_IDBObjectStoreWrappingImplementation$Dart._clear$$member_ = function(receiver){
  return native__IDBObjectStoreWrappingImplementation__clear(receiver);
}
;
_IDBObjectStoreWrappingImplementation$Dart._clear$$named_ = function($n, $o, receiver){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _IDBObjectStoreWrappingImplementation$Dart._clear$$member_(receiver);
}
;
_IDBObjectStoreWrappingImplementation$Dart._clear$$getter_ = function _clear$$getter_(){
  return _IDBObjectStoreWrappingImplementation$Dart._clear$$named_;
}
;
_IDBObjectStoreWrappingImplementation$Dart.prototype.createIndex$member = function(name_0, keyPath){
  return _IDBObjectStoreWrappingImplementation$Dart._createIndex$$member_(this, name_0, keyPath);
}
;
_IDBObjectStoreWrappingImplementation$Dart.prototype.createIndex$named = function($n, $o, name_0, keyPath){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _IDBObjectStoreWrappingImplementation$Dart.prototype.createIndex$member.call(this, name_0, keyPath);
}
;
_IDBObjectStoreWrappingImplementation$Dart.prototype.createIndex$getter = function createIndex$getter(){
  return $bind(_IDBObjectStoreWrappingImplementation$Dart.prototype.createIndex$named, this);
}
;
_IDBObjectStoreWrappingImplementation$Dart._createIndex$$member_ = function(receiver, name_0, keyPath){
  return native__IDBObjectStoreWrappingImplementation__createIndex(receiver, name_0, keyPath);
}
;
_IDBObjectStoreWrappingImplementation$Dart._createIndex$$named_ = function($n, $o, receiver, name_0, keyPath){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return _IDBObjectStoreWrappingImplementation$Dart._createIndex$$member_(receiver, name_0, keyPath);
}
;
_IDBObjectStoreWrappingImplementation$Dart._createIndex$$getter_ = function _createIndex$$getter_(){
  return _IDBObjectStoreWrappingImplementation$Dart._createIndex$$named_;
}
;
_IDBObjectStoreWrappingImplementation$Dart.prototype.delete$member = function(key){
  return _IDBObjectStoreWrappingImplementation$Dart._delete$$member_(this, key);
}
;
_IDBObjectStoreWrappingImplementation$Dart.prototype.delete$named = function($n, $o, key){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _IDBObjectStoreWrappingImplementation$Dart.prototype.delete$member.call(this, key);
}
;
_IDBObjectStoreWrappingImplementation$Dart.prototype.delete$getter = function delete$getter(){
  return $bind(_IDBObjectStoreWrappingImplementation$Dart.prototype.delete$named, this);
}
;
_IDBObjectStoreWrappingImplementation$Dart._delete$$member_ = function(receiver, key){
  return native__IDBObjectStoreWrappingImplementation__delete(receiver, key);
}
;
_IDBObjectStoreWrappingImplementation$Dart._delete$$named_ = function($n, $o, receiver, key){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _IDBObjectStoreWrappingImplementation$Dart._delete$$member_(receiver, key);
}
;
_IDBObjectStoreWrappingImplementation$Dart._delete$$getter_ = function _delete$$getter_(){
  return _IDBObjectStoreWrappingImplementation$Dart._delete$$named_;
}
;
_IDBObjectStoreWrappingImplementation$Dart.prototype.deleteIndex$member = function(name_0){
  _IDBObjectStoreWrappingImplementation$Dart._deleteIndex$$member_(this, name_0);
  return;
}
;
_IDBObjectStoreWrappingImplementation$Dart.prototype.deleteIndex$named = function($n, $o, name_0){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _IDBObjectStoreWrappingImplementation$Dart.prototype.deleteIndex$member.call(this, name_0);
}
;
_IDBObjectStoreWrappingImplementation$Dart.prototype.deleteIndex$getter = function deleteIndex$getter(){
  return $bind(_IDBObjectStoreWrappingImplementation$Dart.prototype.deleteIndex$named, this);
}
;
_IDBObjectStoreWrappingImplementation$Dart._deleteIndex$$member_ = function(receiver, name_0){
  return native__IDBObjectStoreWrappingImplementation__deleteIndex(receiver, name_0);
}
;
_IDBObjectStoreWrappingImplementation$Dart._deleteIndex$$named_ = function($n, $o, receiver, name_0){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _IDBObjectStoreWrappingImplementation$Dart._deleteIndex$$member_(receiver, name_0);
}
;
_IDBObjectStoreWrappingImplementation$Dart._deleteIndex$$getter_ = function _deleteIndex$$getter_(){
  return _IDBObjectStoreWrappingImplementation$Dart._deleteIndex$$named_;
}
;
_IDBObjectStoreWrappingImplementation$Dart.prototype.getObject$member = function(key){
  return _IDBObjectStoreWrappingImplementation$Dart._getObject$$member_(this, key);
}
;
_IDBObjectStoreWrappingImplementation$Dart.prototype.getObject$named = function($n, $o, key){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _IDBObjectStoreWrappingImplementation$Dart.prototype.getObject$member.call(this, key);
}
;
_IDBObjectStoreWrappingImplementation$Dart.prototype.getObject$getter = function getObject$getter(){
  return $bind(_IDBObjectStoreWrappingImplementation$Dart.prototype.getObject$named, this);
}
;
_IDBObjectStoreWrappingImplementation$Dart._getObject$$member_ = function(receiver, key){
  return native__IDBObjectStoreWrappingImplementation__getObject(receiver, key);
}
;
_IDBObjectStoreWrappingImplementation$Dart._getObject$$named_ = function($n, $o, receiver, key){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _IDBObjectStoreWrappingImplementation$Dart._getObject$$member_(receiver, key);
}
;
_IDBObjectStoreWrappingImplementation$Dart._getObject$$getter_ = function _getObject$$getter_(){
  return _IDBObjectStoreWrappingImplementation$Dart._getObject$$named_;
}
;
_IDBObjectStoreWrappingImplementation$Dart.prototype.index$member = function(name_0){
  return _IDBObjectStoreWrappingImplementation$Dart._index$$member_(this, name_0);
}
;
_IDBObjectStoreWrappingImplementation$Dart.prototype.index$named = function($n, $o, name_0){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _IDBObjectStoreWrappingImplementation$Dart.prototype.index$member.call(this, name_0);
}
;
_IDBObjectStoreWrappingImplementation$Dart.prototype.index$getter = function index$getter(){
  return $bind(_IDBObjectStoreWrappingImplementation$Dart.prototype.index$named, this);
}
;
_IDBObjectStoreWrappingImplementation$Dart._index$$member_ = function(receiver, name_0){
  return native__IDBObjectStoreWrappingImplementation__index(receiver, name_0);
}
;
_IDBObjectStoreWrappingImplementation$Dart._index$$named_ = function($n, $o, receiver, name_0){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _IDBObjectStoreWrappingImplementation$Dart._index$$member_(receiver, name_0);
}
;
_IDBObjectStoreWrappingImplementation$Dart._index$$getter_ = function _index$$getter_(){
  return _IDBObjectStoreWrappingImplementation$Dart._index$$named_;
}
;
_IDBObjectStoreWrappingImplementation$Dart.prototype.openCursor$member = function(range, direction){
  if (range == null) {
    if (direction == null) {
      return _IDBObjectStoreWrappingImplementation$Dart._openCursor$$member_(this);
    }
  }
   else {
    if (direction == null) {
      return _IDBObjectStoreWrappingImplementation$Dart._openCursor_2$$member_(this, range);
    }
     else {
      return _IDBObjectStoreWrappingImplementation$Dart._openCursor_3$$member_(this, range, direction);
    }
  }
  $Dart$ThrowException('Incorrect number or type of arguments');
}
;
_IDBObjectStoreWrappingImplementation$Dart.prototype.openCursor$named = function($n, $o, range, direction){
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
  return _IDBObjectStoreWrappingImplementation$Dart.prototype.openCursor$member.call(this, range, direction);
}
;
_IDBObjectStoreWrappingImplementation$Dart.prototype.openCursor$getter = function openCursor$getter(){
  return $bind(_IDBObjectStoreWrappingImplementation$Dart.prototype.openCursor$named, this);
}
;
_IDBObjectStoreWrappingImplementation$Dart._openCursor$$member_ = function(receiver){
  return native__IDBObjectStoreWrappingImplementation__openCursor(receiver);
}
;
_IDBObjectStoreWrappingImplementation$Dart._openCursor$$named_ = function($n, $o, receiver){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _IDBObjectStoreWrappingImplementation$Dart._openCursor$$member_(receiver);
}
;
_IDBObjectStoreWrappingImplementation$Dart._openCursor$$getter_ = function _openCursor$$getter_(){
  return _IDBObjectStoreWrappingImplementation$Dart._openCursor$$named_;
}
;
_IDBObjectStoreWrappingImplementation$Dart._openCursor_2$$member_ = function(receiver, range){
  return native__IDBObjectStoreWrappingImplementation__openCursor_2(receiver, range);
}
;
_IDBObjectStoreWrappingImplementation$Dart._openCursor_2$$named_ = function($n, $o, receiver, range){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _IDBObjectStoreWrappingImplementation$Dart._openCursor_2$$member_(receiver, range);
}
;
_IDBObjectStoreWrappingImplementation$Dart._openCursor_2$$getter_ = function _openCursor_2$$getter_(){
  return _IDBObjectStoreWrappingImplementation$Dart._openCursor_2$$named_;
}
;
_IDBObjectStoreWrappingImplementation$Dart._openCursor_3$$member_ = function(receiver, range, direction){
  return native__IDBObjectStoreWrappingImplementation__openCursor_3(receiver, range, direction);
}
;
_IDBObjectStoreWrappingImplementation$Dart._openCursor_3$$named_ = function($n, $o, receiver, range, direction){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return _IDBObjectStoreWrappingImplementation$Dart._openCursor_3$$member_(receiver, range, direction);
}
;
_IDBObjectStoreWrappingImplementation$Dart._openCursor_3$$getter_ = function _openCursor_3$$getter_(){
  return _IDBObjectStoreWrappingImplementation$Dart._openCursor_3$$named_;
}
;
_IDBObjectStoreWrappingImplementation$Dart.prototype.put$member = function(value, key){
  if (key == null) {
    return _IDBObjectStoreWrappingImplementation$Dart._put$$member_(this, value);
  }
   else {
    return _IDBObjectStoreWrappingImplementation$Dart._put_2$$member_(this, value, key);
  }
}
;
_IDBObjectStoreWrappingImplementation$Dart.prototype.put$named = function($n, $o, value, key){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 1:
      key = $o.key?(++seen , $o.key):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _IDBObjectStoreWrappingImplementation$Dart.prototype.put$member.call(this, value, key);
}
;
_IDBObjectStoreWrappingImplementation$Dart.prototype.put$getter = function put$getter(){
  return $bind(_IDBObjectStoreWrappingImplementation$Dart.prototype.put$named, this);
}
;
_IDBObjectStoreWrappingImplementation$Dart._put$$member_ = function(receiver, value){
  return native__IDBObjectStoreWrappingImplementation__put(receiver, value);
}
;
_IDBObjectStoreWrappingImplementation$Dart._put$$named_ = function($n, $o, receiver, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _IDBObjectStoreWrappingImplementation$Dart._put$$member_(receiver, value);
}
;
_IDBObjectStoreWrappingImplementation$Dart._put$$getter_ = function _put$$getter_(){
  return _IDBObjectStoreWrappingImplementation$Dart._put$$named_;
}
;
_IDBObjectStoreWrappingImplementation$Dart._put_2$$member_ = function(receiver, value, key){
  return native__IDBObjectStoreWrappingImplementation__put_2(receiver, value, key);
}
;
_IDBObjectStoreWrappingImplementation$Dart._put_2$$named_ = function($n, $o, receiver, value, key){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return _IDBObjectStoreWrappingImplementation$Dart._put_2$$member_(receiver, value, key);
}
;
_IDBObjectStoreWrappingImplementation$Dart._put_2$$getter_ = function _put_2$$getter_(){
  return _IDBObjectStoreWrappingImplementation$Dart._put_2$$named_;
}
;
_IDBObjectStoreWrappingImplementation$Dart.prototype.typeName$named = function(){
  return this.typeName$getter().apply(this, arguments);
}
;
_IDBObjectStoreWrappingImplementation$Dart.prototype.typeName$getter = function(){
  return 'IDBObjectStore';
}
;
