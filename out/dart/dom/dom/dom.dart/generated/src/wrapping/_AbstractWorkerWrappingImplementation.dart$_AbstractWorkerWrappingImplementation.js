function _AbstractWorkerWrappingImplementation$Dart(){
}

_AbstractWorkerWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('_AbstractWorkerWrappingImplementation$Dart'), _AbstractWorkerWrappingImplementation$Dart.$RTTimplements);
}
;
_AbstractWorkerWrappingImplementation$Dart.$RTTimplements = function(rtt){
  _AbstractWorkerWrappingImplementation$Dart.$addTo(rtt);
}
;
_AbstractWorkerWrappingImplementation$Dart.$addTo = function(target){
  var rtt = _AbstractWorkerWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  DOMWrapperBase$Dart.$addTo(target);
  AbstractWorker$Dart.$addTo(target);
}
;
_AbstractWorkerWrappingImplementation$Dart.prototype.$implements$_AbstractWorkerWrappingImplementation$Dart = 1;
_AbstractWorkerWrappingImplementation$Dart.prototype.$implements$AbstractWorker$Dart = 1;
_AbstractWorkerWrappingImplementation$Dart.prototype.$implements$EventTarget$Dart = 1;
_AbstractWorkerWrappingImplementation$Dart.prototype.$implements$DOMWrapperBase$Dart = 1;
_AbstractWorkerWrappingImplementation$Dart.prototype.$implements$DOMType$Dart = 1;
_AbstractWorkerWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(_AbstractWorkerWrappingImplementation$Dart, DOMWrapperBase$Dart);
_AbstractWorkerWrappingImplementation$Dart.$Constructor = function(){
  DOMWrapperBase$Dart.$Constructor.call(this);
}
;
_AbstractWorkerWrappingImplementation$Dart.$Initializer = function(){
  DOMWrapperBase$Dart.$Initializer.call(this);
}
;
_AbstractWorkerWrappingImplementation$Dart._AbstractWorkerWrappingImplementation$$Factory = function(){
  var tmp$0 = new _AbstractWorkerWrappingImplementation$Dart;
  tmp$0.$typeInfo = _AbstractWorkerWrappingImplementation$Dart.$lookupRTT();
  _AbstractWorkerWrappingImplementation$Dart.$Initializer.call(tmp$0);
  _AbstractWorkerWrappingImplementation$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
_AbstractWorkerWrappingImplementation$Dart.create__AbstractWorkerWrappingImplementation$member = function(){
  return _AbstractWorkerWrappingImplementation$Dart._AbstractWorkerWrappingImplementation$$Factory();
}
;
_AbstractWorkerWrappingImplementation$Dart.create__AbstractWorkerWrappingImplementation$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _AbstractWorkerWrappingImplementation$Dart.create__AbstractWorkerWrappingImplementation$member();
}
;
function native__AbstractWorkerWrappingImplementation_create__AbstractWorkerWrappingImplementation(){
  return _AbstractWorkerWrappingImplementation$Dart.create__AbstractWorkerWrappingImplementation$member();
}

_AbstractWorkerWrappingImplementation$Dart.create__AbstractWorkerWrappingImplementation$getter = function create__AbstractWorkerWrappingImplementation$getter(){
  return _AbstractWorkerWrappingImplementation$Dart.create__AbstractWorkerWrappingImplementation$named;
}
;
_AbstractWorkerWrappingImplementation$Dart.prototype.onerror$named = function(){
  return this.onerror$getter().apply(this, arguments);
}
;
_AbstractWorkerWrappingImplementation$Dart.prototype.onerror$getter = function(){
  return _AbstractWorkerWrappingImplementation$Dart._get__AbstractWorker_onerror$$member_(this);
}
;
_AbstractWorkerWrappingImplementation$Dart.prototype.onerror$setter = function(value){
  _AbstractWorkerWrappingImplementation$Dart._set__AbstractWorker_onerror$$member_(this, value);
}
;
_AbstractWorkerWrappingImplementation$Dart._get__AbstractWorker_onerror$$member_ = function(_this){
  return native__AbstractWorkerWrappingImplementation__get__AbstractWorker_onerror(_this);
}
;
_AbstractWorkerWrappingImplementation$Dart._get__AbstractWorker_onerror$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _AbstractWorkerWrappingImplementation$Dart._get__AbstractWorker_onerror$$member_(_this);
}
;
_AbstractWorkerWrappingImplementation$Dart._get__AbstractWorker_onerror$$getter_ = function _get__AbstractWorker_onerror$$getter_(){
  return _AbstractWorkerWrappingImplementation$Dart._get__AbstractWorker_onerror$$named_;
}
;
_AbstractWorkerWrappingImplementation$Dart._set__AbstractWorker_onerror$$member_ = function(_this, value){
  return native__AbstractWorkerWrappingImplementation__set__AbstractWorker_onerror(_this, value);
}
;
_AbstractWorkerWrappingImplementation$Dart._set__AbstractWorker_onerror$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _AbstractWorkerWrappingImplementation$Dart._set__AbstractWorker_onerror$$member_(_this, value);
}
;
_AbstractWorkerWrappingImplementation$Dart._set__AbstractWorker_onerror$$getter_ = function _set__AbstractWorker_onerror$$getter_(){
  return _AbstractWorkerWrappingImplementation$Dart._set__AbstractWorker_onerror$$named_;
}
;
_AbstractWorkerWrappingImplementation$Dart.prototype.addEventListener$member = function(type, listener, useCapture){
  if (useCapture == null) {
    _AbstractWorkerWrappingImplementation$Dart._addEventListener$$member_(this, type, listener);
    return;
  }
   else {
    _AbstractWorkerWrappingImplementation$Dart._addEventListener_2$$member_(this, type, listener, useCapture);
    return;
  }
}
;
_AbstractWorkerWrappingImplementation$Dart.prototype.addEventListener$named = function($n, $o, type, listener, useCapture){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 2:
      useCapture = $o.useCapture?(++seen , $o.useCapture):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return _AbstractWorkerWrappingImplementation$Dart.prototype.addEventListener$member.call(this, type, listener, useCapture);
}
;
_AbstractWorkerWrappingImplementation$Dart.prototype.addEventListener$getter = function addEventListener$getter(){
  return $bind(_AbstractWorkerWrappingImplementation$Dart.prototype.addEventListener$named, this);
}
;
_AbstractWorkerWrappingImplementation$Dart._addEventListener$$member_ = function(receiver, type, listener){
  return native__AbstractWorkerWrappingImplementation__addEventListener(receiver, type, listener);
}
;
_AbstractWorkerWrappingImplementation$Dart._addEventListener$$named_ = function($n, $o, receiver, type, listener){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return _AbstractWorkerWrappingImplementation$Dart._addEventListener$$member_(receiver, type, listener);
}
;
_AbstractWorkerWrappingImplementation$Dart._addEventListener$$getter_ = function _addEventListener$$getter_(){
  return _AbstractWorkerWrappingImplementation$Dart._addEventListener$$named_;
}
;
_AbstractWorkerWrappingImplementation$Dart._addEventListener_2$$member_ = function(receiver, type, listener, useCapture){
  return native__AbstractWorkerWrappingImplementation__addEventListener_2(receiver, type, listener, useCapture);
}
;
_AbstractWorkerWrappingImplementation$Dart._addEventListener_2$$named_ = function($n, $o, receiver, type, listener, useCapture){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 4)
    $nsme();
  return _AbstractWorkerWrappingImplementation$Dart._addEventListener_2$$member_(receiver, type, listener, useCapture);
}
;
_AbstractWorkerWrappingImplementation$Dart._addEventListener_2$$getter_ = function _addEventListener_2$$getter_(){
  return _AbstractWorkerWrappingImplementation$Dart._addEventListener_2$$named_;
}
;
_AbstractWorkerWrappingImplementation$Dart.prototype.dispatchEvent$member = function(evt){
  return _AbstractWorkerWrappingImplementation$Dart._dispatchEvent$$member_(this, evt);
}
;
_AbstractWorkerWrappingImplementation$Dart.prototype.dispatchEvent$named = function($n, $o, evt){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _AbstractWorkerWrappingImplementation$Dart.prototype.dispatchEvent$member.call(this, evt);
}
;
_AbstractWorkerWrappingImplementation$Dart.prototype.dispatchEvent$getter = function dispatchEvent$getter(){
  return $bind(_AbstractWorkerWrappingImplementation$Dart.prototype.dispatchEvent$named, this);
}
;
_AbstractWorkerWrappingImplementation$Dart._dispatchEvent$$member_ = function(receiver, evt){
  return native__AbstractWorkerWrappingImplementation__dispatchEvent(receiver, evt);
}
;
_AbstractWorkerWrappingImplementation$Dart._dispatchEvent$$named_ = function($n, $o, receiver, evt){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _AbstractWorkerWrappingImplementation$Dart._dispatchEvent$$member_(receiver, evt);
}
;
_AbstractWorkerWrappingImplementation$Dart._dispatchEvent$$getter_ = function _dispatchEvent$$getter_(){
  return _AbstractWorkerWrappingImplementation$Dart._dispatchEvent$$named_;
}
;
_AbstractWorkerWrappingImplementation$Dart.prototype.removeEventListener$member = function(type, listener, useCapture){
  if (useCapture == null) {
    _AbstractWorkerWrappingImplementation$Dart._removeEventListener$$member_(this, type, listener);
    return;
  }
   else {
    _AbstractWorkerWrappingImplementation$Dart._removeEventListener_2$$member_(this, type, listener, useCapture);
    return;
  }
}
;
_AbstractWorkerWrappingImplementation$Dart.prototype.removeEventListener$named = function($n, $o, type, listener, useCapture){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 2:
      useCapture = $o.useCapture?(++seen , $o.useCapture):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return _AbstractWorkerWrappingImplementation$Dart.prototype.removeEventListener$member.call(this, type, listener, useCapture);
}
;
_AbstractWorkerWrappingImplementation$Dart.prototype.removeEventListener$getter = function removeEventListener$getter(){
  return $bind(_AbstractWorkerWrappingImplementation$Dart.prototype.removeEventListener$named, this);
}
;
_AbstractWorkerWrappingImplementation$Dart._removeEventListener$$member_ = function(receiver, type, listener){
  return native__AbstractWorkerWrappingImplementation__removeEventListener(receiver, type, listener);
}
;
_AbstractWorkerWrappingImplementation$Dart._removeEventListener$$named_ = function($n, $o, receiver, type, listener){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return _AbstractWorkerWrappingImplementation$Dart._removeEventListener$$member_(receiver, type, listener);
}
;
_AbstractWorkerWrappingImplementation$Dart._removeEventListener$$getter_ = function _removeEventListener$$getter_(){
  return _AbstractWorkerWrappingImplementation$Dart._removeEventListener$$named_;
}
;
_AbstractWorkerWrappingImplementation$Dart._removeEventListener_2$$member_ = function(receiver, type, listener, useCapture){
  return native__AbstractWorkerWrappingImplementation__removeEventListener_2(receiver, type, listener, useCapture);
}
;
_AbstractWorkerWrappingImplementation$Dart._removeEventListener_2$$named_ = function($n, $o, receiver, type, listener, useCapture){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 4)
    $nsme();
  return _AbstractWorkerWrappingImplementation$Dart._removeEventListener_2$$member_(receiver, type, listener, useCapture);
}
;
_AbstractWorkerWrappingImplementation$Dart._removeEventListener_2$$getter_ = function _removeEventListener_2$$getter_(){
  return _AbstractWorkerWrappingImplementation$Dart._removeEventListener_2$$named_;
}
;
_AbstractWorkerWrappingImplementation$Dart.prototype.typeName$named = function(){
  return this.typeName$getter().apply(this, arguments);
}
;
_AbstractWorkerWrappingImplementation$Dart.prototype.typeName$getter = function(){
  return 'AbstractWorker';
}
;
