function _IDBTransactionWrappingImplementation$Dart(){
}

_IDBTransactionWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('_IDBTransactionWrappingImplementation$Dart'), _IDBTransactionWrappingImplementation$Dart.$RTTimplements);
}
;
_IDBTransactionWrappingImplementation$Dart.$RTTimplements = function(rtt){
  _IDBTransactionWrappingImplementation$Dart.$addTo(rtt);
}
;
_IDBTransactionWrappingImplementation$Dart.$addTo = function(target){
  var rtt = _IDBTransactionWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  DOMWrapperBase$Dart.$addTo(target);
  IDBTransaction$Dart.$addTo(target);
}
;
_IDBTransactionWrappingImplementation$Dart.prototype.$implements$_IDBTransactionWrappingImplementation$Dart = 1;
_IDBTransactionWrappingImplementation$Dart.prototype.$implements$IDBTransaction$Dart = 1;
_IDBTransactionWrappingImplementation$Dart.prototype.$implements$DOMWrapperBase$Dart = 1;
_IDBTransactionWrappingImplementation$Dart.prototype.$implements$DOMType$Dart = 1;
_IDBTransactionWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(_IDBTransactionWrappingImplementation$Dart, DOMWrapperBase$Dart);
_IDBTransactionWrappingImplementation$Dart.$Constructor = function(){
  DOMWrapperBase$Dart.$Constructor.call(this);
}
;
_IDBTransactionWrappingImplementation$Dart.$Initializer = function(){
  DOMWrapperBase$Dart.$Initializer.call(this);
}
;
_IDBTransactionWrappingImplementation$Dart._IDBTransactionWrappingImplementation$$Factory = function(){
  var tmp$0 = new _IDBTransactionWrappingImplementation$Dart;
  tmp$0.$typeInfo = _IDBTransactionWrappingImplementation$Dart.$lookupRTT();
  _IDBTransactionWrappingImplementation$Dart.$Initializer.call(tmp$0);
  _IDBTransactionWrappingImplementation$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
_IDBTransactionWrappingImplementation$Dart.create__IDBTransactionWrappingImplementation$member = function(){
  return _IDBTransactionWrappingImplementation$Dart._IDBTransactionWrappingImplementation$$Factory();
}
;
_IDBTransactionWrappingImplementation$Dart.create__IDBTransactionWrappingImplementation$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _IDBTransactionWrappingImplementation$Dart.create__IDBTransactionWrappingImplementation$member();
}
;
function native__IDBTransactionWrappingImplementation_create__IDBTransactionWrappingImplementation(){
  return _IDBTransactionWrappingImplementation$Dart.create__IDBTransactionWrappingImplementation$member();
}

_IDBTransactionWrappingImplementation$Dart.create__IDBTransactionWrappingImplementation$getter = function create__IDBTransactionWrappingImplementation$getter(){
  return _IDBTransactionWrappingImplementation$Dart.create__IDBTransactionWrappingImplementation$named;
}
;
_IDBTransactionWrappingImplementation$Dart.prototype.db$named = function(){
  return this.db$getter().apply(this, arguments);
}
;
_IDBTransactionWrappingImplementation$Dart.prototype.db$getter = function(){
  return _IDBTransactionWrappingImplementation$Dart._get__IDBTransaction_db$$member_(this);
}
;
_IDBTransactionWrappingImplementation$Dart._get__IDBTransaction_db$$member_ = function(_this){
  return native__IDBTransactionWrappingImplementation__get__IDBTransaction_db(_this);
}
;
_IDBTransactionWrappingImplementation$Dart._get__IDBTransaction_db$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _IDBTransactionWrappingImplementation$Dart._get__IDBTransaction_db$$member_(_this);
}
;
_IDBTransactionWrappingImplementation$Dart._get__IDBTransaction_db$$getter_ = function _get__IDBTransaction_db$$getter_(){
  return _IDBTransactionWrappingImplementation$Dart._get__IDBTransaction_db$$named_;
}
;
_IDBTransactionWrappingImplementation$Dart.prototype.mode$named = function(){
  return this.mode$getter().apply(this, arguments);
}
;
_IDBTransactionWrappingImplementation$Dart.prototype.mode$getter = function(){
  return _IDBTransactionWrappingImplementation$Dart._get__IDBTransaction_mode$$member_(this);
}
;
_IDBTransactionWrappingImplementation$Dart._get__IDBTransaction_mode$$member_ = function(_this){
  return native__IDBTransactionWrappingImplementation__get__IDBTransaction_mode(_this);
}
;
_IDBTransactionWrappingImplementation$Dart._get__IDBTransaction_mode$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _IDBTransactionWrappingImplementation$Dart._get__IDBTransaction_mode$$member_(_this);
}
;
_IDBTransactionWrappingImplementation$Dart._get__IDBTransaction_mode$$getter_ = function _get__IDBTransaction_mode$$getter_(){
  return _IDBTransactionWrappingImplementation$Dart._get__IDBTransaction_mode$$named_;
}
;
_IDBTransactionWrappingImplementation$Dart.prototype.onabort$named = function(){
  return this.onabort$getter().apply(this, arguments);
}
;
_IDBTransactionWrappingImplementation$Dart.prototype.onabort$getter = function(){
  return _IDBTransactionWrappingImplementation$Dart._get__IDBTransaction_onabort$$member_(this);
}
;
_IDBTransactionWrappingImplementation$Dart.prototype.onabort$setter = function(value){
  _IDBTransactionWrappingImplementation$Dart._set__IDBTransaction_onabort$$member_(this, value);
}
;
_IDBTransactionWrappingImplementation$Dart._get__IDBTransaction_onabort$$member_ = function(_this){
  return native__IDBTransactionWrappingImplementation__get__IDBTransaction_onabort(_this);
}
;
_IDBTransactionWrappingImplementation$Dart._get__IDBTransaction_onabort$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _IDBTransactionWrappingImplementation$Dart._get__IDBTransaction_onabort$$member_(_this);
}
;
_IDBTransactionWrappingImplementation$Dart._get__IDBTransaction_onabort$$getter_ = function _get__IDBTransaction_onabort$$getter_(){
  return _IDBTransactionWrappingImplementation$Dart._get__IDBTransaction_onabort$$named_;
}
;
_IDBTransactionWrappingImplementation$Dart._set__IDBTransaction_onabort$$member_ = function(_this, value){
  return native__IDBTransactionWrappingImplementation__set__IDBTransaction_onabort(_this, value);
}
;
_IDBTransactionWrappingImplementation$Dart._set__IDBTransaction_onabort$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _IDBTransactionWrappingImplementation$Dart._set__IDBTransaction_onabort$$member_(_this, value);
}
;
_IDBTransactionWrappingImplementation$Dart._set__IDBTransaction_onabort$$getter_ = function _set__IDBTransaction_onabort$$getter_(){
  return _IDBTransactionWrappingImplementation$Dart._set__IDBTransaction_onabort$$named_;
}
;
_IDBTransactionWrappingImplementation$Dart.prototype.oncomplete$named = function(){
  return this.oncomplete$getter().apply(this, arguments);
}
;
_IDBTransactionWrappingImplementation$Dart.prototype.oncomplete$getter = function(){
  return _IDBTransactionWrappingImplementation$Dart._get__IDBTransaction_oncomplete$$member_(this);
}
;
_IDBTransactionWrappingImplementation$Dart.prototype.oncomplete$setter = function(value){
  _IDBTransactionWrappingImplementation$Dart._set__IDBTransaction_oncomplete$$member_(this, value);
}
;
_IDBTransactionWrappingImplementation$Dart._get__IDBTransaction_oncomplete$$member_ = function(_this){
  return native__IDBTransactionWrappingImplementation__get__IDBTransaction_oncomplete(_this);
}
;
_IDBTransactionWrappingImplementation$Dart._get__IDBTransaction_oncomplete$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _IDBTransactionWrappingImplementation$Dart._get__IDBTransaction_oncomplete$$member_(_this);
}
;
_IDBTransactionWrappingImplementation$Dart._get__IDBTransaction_oncomplete$$getter_ = function _get__IDBTransaction_oncomplete$$getter_(){
  return _IDBTransactionWrappingImplementation$Dart._get__IDBTransaction_oncomplete$$named_;
}
;
_IDBTransactionWrappingImplementation$Dart._set__IDBTransaction_oncomplete$$member_ = function(_this, value){
  return native__IDBTransactionWrappingImplementation__set__IDBTransaction_oncomplete(_this, value);
}
;
_IDBTransactionWrappingImplementation$Dart._set__IDBTransaction_oncomplete$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _IDBTransactionWrappingImplementation$Dart._set__IDBTransaction_oncomplete$$member_(_this, value);
}
;
_IDBTransactionWrappingImplementation$Dart._set__IDBTransaction_oncomplete$$getter_ = function _set__IDBTransaction_oncomplete$$getter_(){
  return _IDBTransactionWrappingImplementation$Dart._set__IDBTransaction_oncomplete$$named_;
}
;
_IDBTransactionWrappingImplementation$Dart.prototype.onerror$named = function(){
  return this.onerror$getter().apply(this, arguments);
}
;
_IDBTransactionWrappingImplementation$Dart.prototype.onerror$getter = function(){
  return _IDBTransactionWrappingImplementation$Dart._get__IDBTransaction_onerror$$member_(this);
}
;
_IDBTransactionWrappingImplementation$Dart.prototype.onerror$setter = function(value){
  _IDBTransactionWrappingImplementation$Dart._set__IDBTransaction_onerror$$member_(this, value);
}
;
_IDBTransactionWrappingImplementation$Dart._get__IDBTransaction_onerror$$member_ = function(_this){
  return native__IDBTransactionWrappingImplementation__get__IDBTransaction_onerror(_this);
}
;
_IDBTransactionWrappingImplementation$Dart._get__IDBTransaction_onerror$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _IDBTransactionWrappingImplementation$Dart._get__IDBTransaction_onerror$$member_(_this);
}
;
_IDBTransactionWrappingImplementation$Dart._get__IDBTransaction_onerror$$getter_ = function _get__IDBTransaction_onerror$$getter_(){
  return _IDBTransactionWrappingImplementation$Dart._get__IDBTransaction_onerror$$named_;
}
;
_IDBTransactionWrappingImplementation$Dart._set__IDBTransaction_onerror$$member_ = function(_this, value){
  return native__IDBTransactionWrappingImplementation__set__IDBTransaction_onerror(_this, value);
}
;
_IDBTransactionWrappingImplementation$Dart._set__IDBTransaction_onerror$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _IDBTransactionWrappingImplementation$Dart._set__IDBTransaction_onerror$$member_(_this, value);
}
;
_IDBTransactionWrappingImplementation$Dart._set__IDBTransaction_onerror$$getter_ = function _set__IDBTransaction_onerror$$getter_(){
  return _IDBTransactionWrappingImplementation$Dart._set__IDBTransaction_onerror$$named_;
}
;
_IDBTransactionWrappingImplementation$Dart.prototype.abort$member = function(){
  _IDBTransactionWrappingImplementation$Dart._abort$$member_(this);
  return;
}
;
_IDBTransactionWrappingImplementation$Dart.prototype.abort$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _IDBTransactionWrappingImplementation$Dart.prototype.abort$member.call(this);
}
;
_IDBTransactionWrappingImplementation$Dart.prototype.abort$getter = function abort$getter(){
  return $bind(_IDBTransactionWrappingImplementation$Dart.prototype.abort$named, this);
}
;
_IDBTransactionWrappingImplementation$Dart._abort$$member_ = function(receiver){
  return native__IDBTransactionWrappingImplementation__abort(receiver);
}
;
_IDBTransactionWrappingImplementation$Dart._abort$$named_ = function($n, $o, receiver){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _IDBTransactionWrappingImplementation$Dart._abort$$member_(receiver);
}
;
_IDBTransactionWrappingImplementation$Dart._abort$$getter_ = function _abort$$getter_(){
  return _IDBTransactionWrappingImplementation$Dart._abort$$named_;
}
;
_IDBTransactionWrappingImplementation$Dart.prototype.addEventListener$member = function(type, listener, useCapture){
  if (useCapture == null) {
    _IDBTransactionWrappingImplementation$Dart._addEventListener$$member_(this, type, listener);
    return;
  }
   else {
    _IDBTransactionWrappingImplementation$Dart._addEventListener_2$$member_(this, type, listener, useCapture);
    return;
  }
}
;
_IDBTransactionWrappingImplementation$Dart.prototype.addEventListener$named = function($n, $o, type, listener, useCapture){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 2:
      useCapture = $o.useCapture?(++seen , $o.useCapture):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return _IDBTransactionWrappingImplementation$Dart.prototype.addEventListener$member.call(this, type, listener, useCapture);
}
;
_IDBTransactionWrappingImplementation$Dart.prototype.addEventListener$getter = function addEventListener$getter(){
  return $bind(_IDBTransactionWrappingImplementation$Dart.prototype.addEventListener$named, this);
}
;
_IDBTransactionWrappingImplementation$Dart._addEventListener$$member_ = function(receiver, type, listener){
  return native__IDBTransactionWrappingImplementation__addEventListener(receiver, type, listener);
}
;
_IDBTransactionWrappingImplementation$Dart._addEventListener$$named_ = function($n, $o, receiver, type, listener){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return _IDBTransactionWrappingImplementation$Dart._addEventListener$$member_(receiver, type, listener);
}
;
_IDBTransactionWrappingImplementation$Dart._addEventListener$$getter_ = function _addEventListener$$getter_(){
  return _IDBTransactionWrappingImplementation$Dart._addEventListener$$named_;
}
;
_IDBTransactionWrappingImplementation$Dart._addEventListener_2$$member_ = function(receiver, type, listener, useCapture){
  return native__IDBTransactionWrappingImplementation__addEventListener_2(receiver, type, listener, useCapture);
}
;
_IDBTransactionWrappingImplementation$Dart._addEventListener_2$$named_ = function($n, $o, receiver, type, listener, useCapture){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 4)
    $nsme();
  return _IDBTransactionWrappingImplementation$Dart._addEventListener_2$$member_(receiver, type, listener, useCapture);
}
;
_IDBTransactionWrappingImplementation$Dart._addEventListener_2$$getter_ = function _addEventListener_2$$getter_(){
  return _IDBTransactionWrappingImplementation$Dart._addEventListener_2$$named_;
}
;
_IDBTransactionWrappingImplementation$Dart.prototype.dispatchEvent$member = function(evt){
  return _IDBTransactionWrappingImplementation$Dart._dispatchEvent$$member_(this, evt);
}
;
_IDBTransactionWrappingImplementation$Dart.prototype.dispatchEvent$named = function($n, $o, evt){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _IDBTransactionWrappingImplementation$Dart.prototype.dispatchEvent$member.call(this, evt);
}
;
_IDBTransactionWrappingImplementation$Dart.prototype.dispatchEvent$getter = function dispatchEvent$getter(){
  return $bind(_IDBTransactionWrappingImplementation$Dart.prototype.dispatchEvent$named, this);
}
;
_IDBTransactionWrappingImplementation$Dart._dispatchEvent$$member_ = function(receiver, evt){
  return native__IDBTransactionWrappingImplementation__dispatchEvent(receiver, evt);
}
;
_IDBTransactionWrappingImplementation$Dart._dispatchEvent$$named_ = function($n, $o, receiver, evt){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _IDBTransactionWrappingImplementation$Dart._dispatchEvent$$member_(receiver, evt);
}
;
_IDBTransactionWrappingImplementation$Dart._dispatchEvent$$getter_ = function _dispatchEvent$$getter_(){
  return _IDBTransactionWrappingImplementation$Dart._dispatchEvent$$named_;
}
;
_IDBTransactionWrappingImplementation$Dart.prototype.objectStore$member = function(name_0){
  return _IDBTransactionWrappingImplementation$Dart._objectStore$$member_(this, name_0);
}
;
_IDBTransactionWrappingImplementation$Dart.prototype.objectStore$named = function($n, $o, name_0){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _IDBTransactionWrappingImplementation$Dart.prototype.objectStore$member.call(this, name_0);
}
;
_IDBTransactionWrappingImplementation$Dart.prototype.objectStore$getter = function objectStore$getter(){
  return $bind(_IDBTransactionWrappingImplementation$Dart.prototype.objectStore$named, this);
}
;
_IDBTransactionWrappingImplementation$Dart._objectStore$$member_ = function(receiver, name_0){
  return native__IDBTransactionWrappingImplementation__objectStore(receiver, name_0);
}
;
_IDBTransactionWrappingImplementation$Dart._objectStore$$named_ = function($n, $o, receiver, name_0){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _IDBTransactionWrappingImplementation$Dart._objectStore$$member_(receiver, name_0);
}
;
_IDBTransactionWrappingImplementation$Dart._objectStore$$getter_ = function _objectStore$$getter_(){
  return _IDBTransactionWrappingImplementation$Dart._objectStore$$named_;
}
;
_IDBTransactionWrappingImplementation$Dart.prototype.removeEventListener$member = function(type, listener, useCapture){
  if (useCapture == null) {
    _IDBTransactionWrappingImplementation$Dart._removeEventListener$$member_(this, type, listener);
    return;
  }
   else {
    _IDBTransactionWrappingImplementation$Dart._removeEventListener_2$$member_(this, type, listener, useCapture);
    return;
  }
}
;
_IDBTransactionWrappingImplementation$Dart.prototype.removeEventListener$named = function($n, $o, type, listener, useCapture){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 2:
      useCapture = $o.useCapture?(++seen , $o.useCapture):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return _IDBTransactionWrappingImplementation$Dart.prototype.removeEventListener$member.call(this, type, listener, useCapture);
}
;
_IDBTransactionWrappingImplementation$Dart.prototype.removeEventListener$getter = function removeEventListener$getter(){
  return $bind(_IDBTransactionWrappingImplementation$Dart.prototype.removeEventListener$named, this);
}
;
_IDBTransactionWrappingImplementation$Dart._removeEventListener$$member_ = function(receiver, type, listener){
  return native__IDBTransactionWrappingImplementation__removeEventListener(receiver, type, listener);
}
;
_IDBTransactionWrappingImplementation$Dart._removeEventListener$$named_ = function($n, $o, receiver, type, listener){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return _IDBTransactionWrappingImplementation$Dart._removeEventListener$$member_(receiver, type, listener);
}
;
_IDBTransactionWrappingImplementation$Dart._removeEventListener$$getter_ = function _removeEventListener$$getter_(){
  return _IDBTransactionWrappingImplementation$Dart._removeEventListener$$named_;
}
;
_IDBTransactionWrappingImplementation$Dart._removeEventListener_2$$member_ = function(receiver, type, listener, useCapture){
  return native__IDBTransactionWrappingImplementation__removeEventListener_2(receiver, type, listener, useCapture);
}
;
_IDBTransactionWrappingImplementation$Dart._removeEventListener_2$$named_ = function($n, $o, receiver, type, listener, useCapture){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 4)
    $nsme();
  return _IDBTransactionWrappingImplementation$Dart._removeEventListener_2$$member_(receiver, type, listener, useCapture);
}
;
_IDBTransactionWrappingImplementation$Dart._removeEventListener_2$$getter_ = function _removeEventListener_2$$getter_(){
  return _IDBTransactionWrappingImplementation$Dart._removeEventListener_2$$named_;
}
;
_IDBTransactionWrappingImplementation$Dart.prototype.typeName$named = function(){
  return this.typeName$getter().apply(this, arguments);
}
;
_IDBTransactionWrappingImplementation$Dart.prototype.typeName$getter = function(){
  return 'IDBTransaction';
}
;
