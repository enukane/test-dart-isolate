function _IDBRequestWrappingImplementation$Dart(){
}

_IDBRequestWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('_IDBRequestWrappingImplementation$Dart'), _IDBRequestWrappingImplementation$Dart.$RTTimplements);
}
;
_IDBRequestWrappingImplementation$Dart.$RTTimplements = function(rtt){
  _IDBRequestWrappingImplementation$Dart.$addTo(rtt);
}
;
_IDBRequestWrappingImplementation$Dart.$addTo = function(target){
  var rtt = _IDBRequestWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  DOMWrapperBase$Dart.$addTo(target);
  IDBRequest$Dart.$addTo(target);
}
;
_IDBRequestWrappingImplementation$Dart.prototype.$implements$_IDBRequestWrappingImplementation$Dart = 1;
_IDBRequestWrappingImplementation$Dart.prototype.$implements$IDBRequest$Dart = 1;
_IDBRequestWrappingImplementation$Dart.prototype.$implements$DOMWrapperBase$Dart = 1;
_IDBRequestWrappingImplementation$Dart.prototype.$implements$DOMType$Dart = 1;
_IDBRequestWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(_IDBRequestWrappingImplementation$Dart, DOMWrapperBase$Dart);
_IDBRequestWrappingImplementation$Dart.$Constructor = function(){
  DOMWrapperBase$Dart.$Constructor.call(this);
}
;
_IDBRequestWrappingImplementation$Dart.$Initializer = function(){
  DOMWrapperBase$Dart.$Initializer.call(this);
}
;
_IDBRequestWrappingImplementation$Dart._IDBRequestWrappingImplementation$$Factory = function(){
  var tmp$0 = new _IDBRequestWrappingImplementation$Dart;
  tmp$0.$typeInfo = _IDBRequestWrappingImplementation$Dart.$lookupRTT();
  _IDBRequestWrappingImplementation$Dart.$Initializer.call(tmp$0);
  _IDBRequestWrappingImplementation$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
_IDBRequestWrappingImplementation$Dart.create__IDBRequestWrappingImplementation$member = function(){
  return _IDBRequestWrappingImplementation$Dart._IDBRequestWrappingImplementation$$Factory();
}
;
_IDBRequestWrappingImplementation$Dart.create__IDBRequestWrappingImplementation$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _IDBRequestWrappingImplementation$Dart.create__IDBRequestWrappingImplementation$member();
}
;
function native__IDBRequestWrappingImplementation_create__IDBRequestWrappingImplementation(){
  return _IDBRequestWrappingImplementation$Dart.create__IDBRequestWrappingImplementation$member();
}

_IDBRequestWrappingImplementation$Dart.create__IDBRequestWrappingImplementation$getter = function create__IDBRequestWrappingImplementation$getter(){
  return _IDBRequestWrappingImplementation$Dart.create__IDBRequestWrappingImplementation$named;
}
;
_IDBRequestWrappingImplementation$Dart.prototype.errorCode$named = function(){
  return this.errorCode$getter().apply(this, arguments);
}
;
_IDBRequestWrappingImplementation$Dart.prototype.errorCode$getter = function(){
  return _IDBRequestWrappingImplementation$Dart._get__IDBRequest_errorCode$$member_(this);
}
;
_IDBRequestWrappingImplementation$Dart._get__IDBRequest_errorCode$$member_ = function(_this){
  return native__IDBRequestWrappingImplementation__get__IDBRequest_errorCode(_this);
}
;
_IDBRequestWrappingImplementation$Dart._get__IDBRequest_errorCode$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _IDBRequestWrappingImplementation$Dart._get__IDBRequest_errorCode$$member_(_this);
}
;
_IDBRequestWrappingImplementation$Dart._get__IDBRequest_errorCode$$getter_ = function _get__IDBRequest_errorCode$$getter_(){
  return _IDBRequestWrappingImplementation$Dart._get__IDBRequest_errorCode$$named_;
}
;
_IDBRequestWrappingImplementation$Dart.prototype.onerror$named = function(){
  return this.onerror$getter().apply(this, arguments);
}
;
_IDBRequestWrappingImplementation$Dart.prototype.onerror$getter = function(){
  return _IDBRequestWrappingImplementation$Dart._get__IDBRequest_onerror$$member_(this);
}
;
_IDBRequestWrappingImplementation$Dart.prototype.onerror$setter = function(value){
  _IDBRequestWrappingImplementation$Dart._set__IDBRequest_onerror$$member_(this, value);
}
;
_IDBRequestWrappingImplementation$Dart._get__IDBRequest_onerror$$member_ = function(_this){
  return native__IDBRequestWrappingImplementation__get__IDBRequest_onerror(_this);
}
;
_IDBRequestWrappingImplementation$Dart._get__IDBRequest_onerror$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _IDBRequestWrappingImplementation$Dart._get__IDBRequest_onerror$$member_(_this);
}
;
_IDBRequestWrappingImplementation$Dart._get__IDBRequest_onerror$$getter_ = function _get__IDBRequest_onerror$$getter_(){
  return _IDBRequestWrappingImplementation$Dart._get__IDBRequest_onerror$$named_;
}
;
_IDBRequestWrappingImplementation$Dart._set__IDBRequest_onerror$$member_ = function(_this, value){
  return native__IDBRequestWrappingImplementation__set__IDBRequest_onerror(_this, value);
}
;
_IDBRequestWrappingImplementation$Dart._set__IDBRequest_onerror$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _IDBRequestWrappingImplementation$Dart._set__IDBRequest_onerror$$member_(_this, value);
}
;
_IDBRequestWrappingImplementation$Dart._set__IDBRequest_onerror$$getter_ = function _set__IDBRequest_onerror$$getter_(){
  return _IDBRequestWrappingImplementation$Dart._set__IDBRequest_onerror$$named_;
}
;
_IDBRequestWrappingImplementation$Dart.prototype.onsuccess$named = function(){
  return this.onsuccess$getter().apply(this, arguments);
}
;
_IDBRequestWrappingImplementation$Dart.prototype.onsuccess$getter = function(){
  return _IDBRequestWrappingImplementation$Dart._get__IDBRequest_onsuccess$$member_(this);
}
;
_IDBRequestWrappingImplementation$Dart.prototype.onsuccess$setter = function(value){
  _IDBRequestWrappingImplementation$Dart._set__IDBRequest_onsuccess$$member_(this, value);
}
;
_IDBRequestWrappingImplementation$Dart._get__IDBRequest_onsuccess$$member_ = function(_this){
  return native__IDBRequestWrappingImplementation__get__IDBRequest_onsuccess(_this);
}
;
_IDBRequestWrappingImplementation$Dart._get__IDBRequest_onsuccess$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _IDBRequestWrappingImplementation$Dart._get__IDBRequest_onsuccess$$member_(_this);
}
;
_IDBRequestWrappingImplementation$Dart._get__IDBRequest_onsuccess$$getter_ = function _get__IDBRequest_onsuccess$$getter_(){
  return _IDBRequestWrappingImplementation$Dart._get__IDBRequest_onsuccess$$named_;
}
;
_IDBRequestWrappingImplementation$Dart._set__IDBRequest_onsuccess$$member_ = function(_this, value){
  return native__IDBRequestWrappingImplementation__set__IDBRequest_onsuccess(_this, value);
}
;
_IDBRequestWrappingImplementation$Dart._set__IDBRequest_onsuccess$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _IDBRequestWrappingImplementation$Dart._set__IDBRequest_onsuccess$$member_(_this, value);
}
;
_IDBRequestWrappingImplementation$Dart._set__IDBRequest_onsuccess$$getter_ = function _set__IDBRequest_onsuccess$$getter_(){
  return _IDBRequestWrappingImplementation$Dart._set__IDBRequest_onsuccess$$named_;
}
;
_IDBRequestWrappingImplementation$Dart.prototype.readyState$named = function(){
  return this.readyState$getter().apply(this, arguments);
}
;
_IDBRequestWrappingImplementation$Dart.prototype.readyState$getter = function(){
  return _IDBRequestWrappingImplementation$Dart._get__IDBRequest_readyState$$member_(this);
}
;
_IDBRequestWrappingImplementation$Dart._get__IDBRequest_readyState$$member_ = function(_this){
  return native__IDBRequestWrappingImplementation__get__IDBRequest_readyState(_this);
}
;
_IDBRequestWrappingImplementation$Dart._get__IDBRequest_readyState$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _IDBRequestWrappingImplementation$Dart._get__IDBRequest_readyState$$member_(_this);
}
;
_IDBRequestWrappingImplementation$Dart._get__IDBRequest_readyState$$getter_ = function _get__IDBRequest_readyState$$getter_(){
  return _IDBRequestWrappingImplementation$Dart._get__IDBRequest_readyState$$named_;
}
;
_IDBRequestWrappingImplementation$Dart.prototype.result$named = function(){
  return this.result$getter().apply(this, arguments);
}
;
_IDBRequestWrappingImplementation$Dart.prototype.result$getter = function(){
  return _IDBRequestWrappingImplementation$Dart._get__IDBRequest_result$$member_(this);
}
;
_IDBRequestWrappingImplementation$Dart._get__IDBRequest_result$$member_ = function(_this){
  return native__IDBRequestWrappingImplementation__get__IDBRequest_result(_this);
}
;
_IDBRequestWrappingImplementation$Dart._get__IDBRequest_result$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _IDBRequestWrappingImplementation$Dart._get__IDBRequest_result$$member_(_this);
}
;
_IDBRequestWrappingImplementation$Dart._get__IDBRequest_result$$getter_ = function _get__IDBRequest_result$$getter_(){
  return _IDBRequestWrappingImplementation$Dart._get__IDBRequest_result$$named_;
}
;
_IDBRequestWrappingImplementation$Dart.prototype.source$named = function(){
  return this.source$getter().apply(this, arguments);
}
;
_IDBRequestWrappingImplementation$Dart.prototype.source$getter = function(){
  return _IDBRequestWrappingImplementation$Dart._get__IDBRequest_source$$member_(this);
}
;
_IDBRequestWrappingImplementation$Dart._get__IDBRequest_source$$member_ = function(_this){
  return native__IDBRequestWrappingImplementation__get__IDBRequest_source(_this);
}
;
_IDBRequestWrappingImplementation$Dart._get__IDBRequest_source$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _IDBRequestWrappingImplementation$Dart._get__IDBRequest_source$$member_(_this);
}
;
_IDBRequestWrappingImplementation$Dart._get__IDBRequest_source$$getter_ = function _get__IDBRequest_source$$getter_(){
  return _IDBRequestWrappingImplementation$Dart._get__IDBRequest_source$$named_;
}
;
_IDBRequestWrappingImplementation$Dart.prototype.transaction$named = function(){
  return this.transaction$getter().apply(this, arguments);
}
;
_IDBRequestWrappingImplementation$Dart.prototype.transaction$getter = function(){
  return _IDBRequestWrappingImplementation$Dart._get__IDBRequest_transaction$$member_(this);
}
;
_IDBRequestWrappingImplementation$Dart._get__IDBRequest_transaction$$member_ = function(_this){
  return native__IDBRequestWrappingImplementation__get__IDBRequest_transaction(_this);
}
;
_IDBRequestWrappingImplementation$Dart._get__IDBRequest_transaction$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _IDBRequestWrappingImplementation$Dart._get__IDBRequest_transaction$$member_(_this);
}
;
_IDBRequestWrappingImplementation$Dart._get__IDBRequest_transaction$$getter_ = function _get__IDBRequest_transaction$$getter_(){
  return _IDBRequestWrappingImplementation$Dart._get__IDBRequest_transaction$$named_;
}
;
_IDBRequestWrappingImplementation$Dart.prototype.webkitErrorMessage$named = function(){
  return this.webkitErrorMessage$getter().apply(this, arguments);
}
;
_IDBRequestWrappingImplementation$Dart.prototype.webkitErrorMessage$getter = function(){
  return _IDBRequestWrappingImplementation$Dart._get__IDBRequest_webkitErrorMessage$$member_(this);
}
;
_IDBRequestWrappingImplementation$Dart._get__IDBRequest_webkitErrorMessage$$member_ = function(_this){
  return native__IDBRequestWrappingImplementation__get__IDBRequest_webkitErrorMessage(_this);
}
;
_IDBRequestWrappingImplementation$Dart._get__IDBRequest_webkitErrorMessage$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _IDBRequestWrappingImplementation$Dart._get__IDBRequest_webkitErrorMessage$$member_(_this);
}
;
_IDBRequestWrappingImplementation$Dart._get__IDBRequest_webkitErrorMessage$$getter_ = function _get__IDBRequest_webkitErrorMessage$$getter_(){
  return _IDBRequestWrappingImplementation$Dart._get__IDBRequest_webkitErrorMessage$$named_;
}
;
_IDBRequestWrappingImplementation$Dart.prototype.addEventListener$member = function(type, listener, useCapture){
  if (useCapture == null) {
    _IDBRequestWrappingImplementation$Dart._addEventListener$$member_(this, type, listener);
    return;
  }
   else {
    _IDBRequestWrappingImplementation$Dart._addEventListener_2$$member_(this, type, listener, useCapture);
    return;
  }
}
;
_IDBRequestWrappingImplementation$Dart.prototype.addEventListener$named = function($n, $o, type, listener, useCapture){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 2:
      useCapture = $o.useCapture?(++seen , $o.useCapture):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return _IDBRequestWrappingImplementation$Dart.prototype.addEventListener$member.call(this, type, listener, useCapture);
}
;
_IDBRequestWrappingImplementation$Dart.prototype.addEventListener$getter = function addEventListener$getter(){
  return $bind(_IDBRequestWrappingImplementation$Dart.prototype.addEventListener$named, this);
}
;
_IDBRequestWrappingImplementation$Dart._addEventListener$$member_ = function(receiver, type, listener){
  return native__IDBRequestWrappingImplementation__addEventListener(receiver, type, listener);
}
;
_IDBRequestWrappingImplementation$Dart._addEventListener$$named_ = function($n, $o, receiver, type, listener){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return _IDBRequestWrappingImplementation$Dart._addEventListener$$member_(receiver, type, listener);
}
;
_IDBRequestWrappingImplementation$Dart._addEventListener$$getter_ = function _addEventListener$$getter_(){
  return _IDBRequestWrappingImplementation$Dart._addEventListener$$named_;
}
;
_IDBRequestWrappingImplementation$Dart._addEventListener_2$$member_ = function(receiver, type, listener, useCapture){
  return native__IDBRequestWrappingImplementation__addEventListener_2(receiver, type, listener, useCapture);
}
;
_IDBRequestWrappingImplementation$Dart._addEventListener_2$$named_ = function($n, $o, receiver, type, listener, useCapture){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 4)
    $nsme();
  return _IDBRequestWrappingImplementation$Dart._addEventListener_2$$member_(receiver, type, listener, useCapture);
}
;
_IDBRequestWrappingImplementation$Dart._addEventListener_2$$getter_ = function _addEventListener_2$$getter_(){
  return _IDBRequestWrappingImplementation$Dart._addEventListener_2$$named_;
}
;
_IDBRequestWrappingImplementation$Dart.prototype.dispatchEvent$member = function(evt){
  return _IDBRequestWrappingImplementation$Dart._dispatchEvent$$member_(this, evt);
}
;
_IDBRequestWrappingImplementation$Dart.prototype.dispatchEvent$named = function($n, $o, evt){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _IDBRequestWrappingImplementation$Dart.prototype.dispatchEvent$member.call(this, evt);
}
;
_IDBRequestWrappingImplementation$Dart.prototype.dispatchEvent$getter = function dispatchEvent$getter(){
  return $bind(_IDBRequestWrappingImplementation$Dart.prototype.dispatchEvent$named, this);
}
;
_IDBRequestWrappingImplementation$Dart._dispatchEvent$$member_ = function(receiver, evt){
  return native__IDBRequestWrappingImplementation__dispatchEvent(receiver, evt);
}
;
_IDBRequestWrappingImplementation$Dart._dispatchEvent$$named_ = function($n, $o, receiver, evt){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _IDBRequestWrappingImplementation$Dart._dispatchEvent$$member_(receiver, evt);
}
;
_IDBRequestWrappingImplementation$Dart._dispatchEvent$$getter_ = function _dispatchEvent$$getter_(){
  return _IDBRequestWrappingImplementation$Dart._dispatchEvent$$named_;
}
;
_IDBRequestWrappingImplementation$Dart.prototype.removeEventListener$member = function(type, listener, useCapture){
  if (useCapture == null) {
    _IDBRequestWrappingImplementation$Dart._removeEventListener$$member_(this, type, listener);
    return;
  }
   else {
    _IDBRequestWrappingImplementation$Dart._removeEventListener_2$$member_(this, type, listener, useCapture);
    return;
  }
}
;
_IDBRequestWrappingImplementation$Dart.prototype.removeEventListener$named = function($n, $o, type, listener, useCapture){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 2:
      useCapture = $o.useCapture?(++seen , $o.useCapture):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return _IDBRequestWrappingImplementation$Dart.prototype.removeEventListener$member.call(this, type, listener, useCapture);
}
;
_IDBRequestWrappingImplementation$Dart.prototype.removeEventListener$getter = function removeEventListener$getter(){
  return $bind(_IDBRequestWrappingImplementation$Dart.prototype.removeEventListener$named, this);
}
;
_IDBRequestWrappingImplementation$Dart._removeEventListener$$member_ = function(receiver, type, listener){
  return native__IDBRequestWrappingImplementation__removeEventListener(receiver, type, listener);
}
;
_IDBRequestWrappingImplementation$Dart._removeEventListener$$named_ = function($n, $o, receiver, type, listener){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return _IDBRequestWrappingImplementation$Dart._removeEventListener$$member_(receiver, type, listener);
}
;
_IDBRequestWrappingImplementation$Dart._removeEventListener$$getter_ = function _removeEventListener$$getter_(){
  return _IDBRequestWrappingImplementation$Dart._removeEventListener$$named_;
}
;
_IDBRequestWrappingImplementation$Dart._removeEventListener_2$$member_ = function(receiver, type, listener, useCapture){
  return native__IDBRequestWrappingImplementation__removeEventListener_2(receiver, type, listener, useCapture);
}
;
_IDBRequestWrappingImplementation$Dart._removeEventListener_2$$named_ = function($n, $o, receiver, type, listener, useCapture){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 4)
    $nsme();
  return _IDBRequestWrappingImplementation$Dart._removeEventListener_2$$member_(receiver, type, listener, useCapture);
}
;
_IDBRequestWrappingImplementation$Dart._removeEventListener_2$$getter_ = function _removeEventListener_2$$getter_(){
  return _IDBRequestWrappingImplementation$Dart._removeEventListener_2$$named_;
}
;
_IDBRequestWrappingImplementation$Dart.prototype.typeName$named = function(){
  return this.typeName$getter().apply(this, arguments);
}
;
_IDBRequestWrappingImplementation$Dart.prototype.typeName$getter = function(){
  return 'IDBRequest';
}
;
