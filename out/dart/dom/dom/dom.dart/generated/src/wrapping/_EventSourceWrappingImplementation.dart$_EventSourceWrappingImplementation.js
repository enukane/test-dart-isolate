function _EventSourceWrappingImplementation$Dart(){
}

_EventSourceWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('_EventSourceWrappingImplementation$Dart'), _EventSourceWrappingImplementation$Dart.$RTTimplements);
}
;
_EventSourceWrappingImplementation$Dart.$RTTimplements = function(rtt){
  _EventSourceWrappingImplementation$Dart.$addTo(rtt);
}
;
_EventSourceWrappingImplementation$Dart.$addTo = function(target){
  var rtt = _EventSourceWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  DOMWrapperBase$Dart.$addTo(target);
  EventSource$Dart.$addTo(target);
}
;
_EventSourceWrappingImplementation$Dart.prototype.$implements$_EventSourceWrappingImplementation$Dart = 1;
_EventSourceWrappingImplementation$Dart.prototype.$implements$EventSource$Dart = 1;
_EventSourceWrappingImplementation$Dart.prototype.$implements$EventTarget$Dart = 1;
_EventSourceWrappingImplementation$Dart.prototype.$implements$DOMWrapperBase$Dart = 1;
_EventSourceWrappingImplementation$Dart.prototype.$implements$DOMType$Dart = 1;
_EventSourceWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(_EventSourceWrappingImplementation$Dart, DOMWrapperBase$Dart);
_EventSourceWrappingImplementation$Dart.$Constructor = function(){
  DOMWrapperBase$Dart.$Constructor.call(this);
}
;
_EventSourceWrappingImplementation$Dart.$Initializer = function(){
  DOMWrapperBase$Dart.$Initializer.call(this);
}
;
_EventSourceWrappingImplementation$Dart._EventSourceWrappingImplementation$$Factory = function(){
  var tmp$0 = new _EventSourceWrappingImplementation$Dart;
  tmp$0.$typeInfo = _EventSourceWrappingImplementation$Dart.$lookupRTT();
  _EventSourceWrappingImplementation$Dart.$Initializer.call(tmp$0);
  _EventSourceWrappingImplementation$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
_EventSourceWrappingImplementation$Dart.create__EventSourceWrappingImplementation$member = function(){
  return _EventSourceWrappingImplementation$Dart._EventSourceWrappingImplementation$$Factory();
}
;
_EventSourceWrappingImplementation$Dart.create__EventSourceWrappingImplementation$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _EventSourceWrappingImplementation$Dart.create__EventSourceWrappingImplementation$member();
}
;
function native__EventSourceWrappingImplementation_create__EventSourceWrappingImplementation(){
  return _EventSourceWrappingImplementation$Dart.create__EventSourceWrappingImplementation$member();
}

_EventSourceWrappingImplementation$Dart.create__EventSourceWrappingImplementation$getter = function create__EventSourceWrappingImplementation$getter(){
  return _EventSourceWrappingImplementation$Dart.create__EventSourceWrappingImplementation$named;
}
;
_EventSourceWrappingImplementation$Dart.prototype.URL$named = function(){
  return this.URL$getter().apply(this, arguments);
}
;
_EventSourceWrappingImplementation$Dart.prototype.URL$getter = function(){
  return _EventSourceWrappingImplementation$Dart._get__EventSource_URL$$member_(this);
}
;
_EventSourceWrappingImplementation$Dart._get__EventSource_URL$$member_ = function(_this){
  return native__EventSourceWrappingImplementation__get__EventSource_URL(_this);
}
;
_EventSourceWrappingImplementation$Dart._get__EventSource_URL$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _EventSourceWrappingImplementation$Dart._get__EventSource_URL$$member_(_this);
}
;
_EventSourceWrappingImplementation$Dart._get__EventSource_URL$$getter_ = function _get__EventSource_URL$$getter_(){
  return _EventSourceWrappingImplementation$Dart._get__EventSource_URL$$named_;
}
;
_EventSourceWrappingImplementation$Dart.prototype.onerror$named = function(){
  return this.onerror$getter().apply(this, arguments);
}
;
_EventSourceWrappingImplementation$Dart.prototype.onerror$getter = function(){
  return _EventSourceWrappingImplementation$Dart._get__EventSource_onerror$$member_(this);
}
;
_EventSourceWrappingImplementation$Dart.prototype.onerror$setter = function(value){
  _EventSourceWrappingImplementation$Dart._set__EventSource_onerror$$member_(this, value);
}
;
_EventSourceWrappingImplementation$Dart._get__EventSource_onerror$$member_ = function(_this){
  return native__EventSourceWrappingImplementation__get__EventSource_onerror(_this);
}
;
_EventSourceWrappingImplementation$Dart._get__EventSource_onerror$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _EventSourceWrappingImplementation$Dart._get__EventSource_onerror$$member_(_this);
}
;
_EventSourceWrappingImplementation$Dart._get__EventSource_onerror$$getter_ = function _get__EventSource_onerror$$getter_(){
  return _EventSourceWrappingImplementation$Dart._get__EventSource_onerror$$named_;
}
;
_EventSourceWrappingImplementation$Dart._set__EventSource_onerror$$member_ = function(_this, value){
  return native__EventSourceWrappingImplementation__set__EventSource_onerror(_this, value);
}
;
_EventSourceWrappingImplementation$Dart._set__EventSource_onerror$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _EventSourceWrappingImplementation$Dart._set__EventSource_onerror$$member_(_this, value);
}
;
_EventSourceWrappingImplementation$Dart._set__EventSource_onerror$$getter_ = function _set__EventSource_onerror$$getter_(){
  return _EventSourceWrappingImplementation$Dart._set__EventSource_onerror$$named_;
}
;
_EventSourceWrappingImplementation$Dart.prototype.onmessage$named = function(){
  return this.onmessage$getter().apply(this, arguments);
}
;
_EventSourceWrappingImplementation$Dart.prototype.onmessage$getter = function(){
  return _EventSourceWrappingImplementation$Dart._get__EventSource_onmessage$$member_(this);
}
;
_EventSourceWrappingImplementation$Dart.prototype.onmessage$setter = function(value){
  _EventSourceWrappingImplementation$Dart._set__EventSource_onmessage$$member_(this, value);
}
;
_EventSourceWrappingImplementation$Dart._get__EventSource_onmessage$$member_ = function(_this){
  return native__EventSourceWrappingImplementation__get__EventSource_onmessage(_this);
}
;
_EventSourceWrappingImplementation$Dart._get__EventSource_onmessage$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _EventSourceWrappingImplementation$Dart._get__EventSource_onmessage$$member_(_this);
}
;
_EventSourceWrappingImplementation$Dart._get__EventSource_onmessage$$getter_ = function _get__EventSource_onmessage$$getter_(){
  return _EventSourceWrappingImplementation$Dart._get__EventSource_onmessage$$named_;
}
;
_EventSourceWrappingImplementation$Dart._set__EventSource_onmessage$$member_ = function(_this, value){
  return native__EventSourceWrappingImplementation__set__EventSource_onmessage(_this, value);
}
;
_EventSourceWrappingImplementation$Dart._set__EventSource_onmessage$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _EventSourceWrappingImplementation$Dart._set__EventSource_onmessage$$member_(_this, value);
}
;
_EventSourceWrappingImplementation$Dart._set__EventSource_onmessage$$getter_ = function _set__EventSource_onmessage$$getter_(){
  return _EventSourceWrappingImplementation$Dart._set__EventSource_onmessage$$named_;
}
;
_EventSourceWrappingImplementation$Dart.prototype.onopen$named = function(){
  return this.onopen$getter().apply(this, arguments);
}
;
_EventSourceWrappingImplementation$Dart.prototype.onopen$getter = function(){
  return _EventSourceWrappingImplementation$Dart._get__EventSource_onopen$$member_(this);
}
;
_EventSourceWrappingImplementation$Dart.prototype.onopen$setter = function(value){
  _EventSourceWrappingImplementation$Dart._set__EventSource_onopen$$member_(this, value);
}
;
_EventSourceWrappingImplementation$Dart._get__EventSource_onopen$$member_ = function(_this){
  return native__EventSourceWrappingImplementation__get__EventSource_onopen(_this);
}
;
_EventSourceWrappingImplementation$Dart._get__EventSource_onopen$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _EventSourceWrappingImplementation$Dart._get__EventSource_onopen$$member_(_this);
}
;
_EventSourceWrappingImplementation$Dart._get__EventSource_onopen$$getter_ = function _get__EventSource_onopen$$getter_(){
  return _EventSourceWrappingImplementation$Dart._get__EventSource_onopen$$named_;
}
;
_EventSourceWrappingImplementation$Dart._set__EventSource_onopen$$member_ = function(_this, value){
  return native__EventSourceWrappingImplementation__set__EventSource_onopen(_this, value);
}
;
_EventSourceWrappingImplementation$Dart._set__EventSource_onopen$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _EventSourceWrappingImplementation$Dart._set__EventSource_onopen$$member_(_this, value);
}
;
_EventSourceWrappingImplementation$Dart._set__EventSource_onopen$$getter_ = function _set__EventSource_onopen$$getter_(){
  return _EventSourceWrappingImplementation$Dart._set__EventSource_onopen$$named_;
}
;
_EventSourceWrappingImplementation$Dart.prototype.readyState$named = function(){
  return this.readyState$getter().apply(this, arguments);
}
;
_EventSourceWrappingImplementation$Dart.prototype.readyState$getter = function(){
  return _EventSourceWrappingImplementation$Dart._get__EventSource_readyState$$member_(this);
}
;
_EventSourceWrappingImplementation$Dart._get__EventSource_readyState$$member_ = function(_this){
  return native__EventSourceWrappingImplementation__get__EventSource_readyState(_this);
}
;
_EventSourceWrappingImplementation$Dart._get__EventSource_readyState$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _EventSourceWrappingImplementation$Dart._get__EventSource_readyState$$member_(_this);
}
;
_EventSourceWrappingImplementation$Dart._get__EventSource_readyState$$getter_ = function _get__EventSource_readyState$$getter_(){
  return _EventSourceWrappingImplementation$Dart._get__EventSource_readyState$$named_;
}
;
_EventSourceWrappingImplementation$Dart.prototype.addEventListener$member = function(type, listener, useCapture){
  if (useCapture == null) {
    _EventSourceWrappingImplementation$Dart._addEventListener$$member_(this, type, listener);
    return;
  }
   else {
    _EventSourceWrappingImplementation$Dart._addEventListener_2$$member_(this, type, listener, useCapture);
    return;
  }
}
;
_EventSourceWrappingImplementation$Dart.prototype.addEventListener$named = function($n, $o, type, listener, useCapture){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 2:
      useCapture = $o.useCapture?(++seen , $o.useCapture):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return _EventSourceWrappingImplementation$Dart.prototype.addEventListener$member.call(this, type, listener, useCapture);
}
;
_EventSourceWrappingImplementation$Dart.prototype.addEventListener$getter = function addEventListener$getter(){
  return $bind(_EventSourceWrappingImplementation$Dart.prototype.addEventListener$named, this);
}
;
_EventSourceWrappingImplementation$Dart._addEventListener$$member_ = function(receiver, type, listener){
  return native__EventSourceWrappingImplementation__addEventListener(receiver, type, listener);
}
;
_EventSourceWrappingImplementation$Dart._addEventListener$$named_ = function($n, $o, receiver, type, listener){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return _EventSourceWrappingImplementation$Dart._addEventListener$$member_(receiver, type, listener);
}
;
_EventSourceWrappingImplementation$Dart._addEventListener$$getter_ = function _addEventListener$$getter_(){
  return _EventSourceWrappingImplementation$Dart._addEventListener$$named_;
}
;
_EventSourceWrappingImplementation$Dart._addEventListener_2$$member_ = function(receiver, type, listener, useCapture){
  return native__EventSourceWrappingImplementation__addEventListener_2(receiver, type, listener, useCapture);
}
;
_EventSourceWrappingImplementation$Dart._addEventListener_2$$named_ = function($n, $o, receiver, type, listener, useCapture){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 4)
    $nsme();
  return _EventSourceWrappingImplementation$Dart._addEventListener_2$$member_(receiver, type, listener, useCapture);
}
;
_EventSourceWrappingImplementation$Dart._addEventListener_2$$getter_ = function _addEventListener_2$$getter_(){
  return _EventSourceWrappingImplementation$Dart._addEventListener_2$$named_;
}
;
_EventSourceWrappingImplementation$Dart.prototype.close$member = function(){
  _EventSourceWrappingImplementation$Dart._close$$member_(this);
  return;
}
;
_EventSourceWrappingImplementation$Dart.prototype.close$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _EventSourceWrappingImplementation$Dart.prototype.close$member.call(this);
}
;
_EventSourceWrappingImplementation$Dart.prototype.close$getter = function close$getter(){
  return $bind(_EventSourceWrappingImplementation$Dart.prototype.close$named, this);
}
;
_EventSourceWrappingImplementation$Dart._close$$member_ = function(receiver){
  return native__EventSourceWrappingImplementation__close(receiver);
}
;
_EventSourceWrappingImplementation$Dart._close$$named_ = function($n, $o, receiver){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _EventSourceWrappingImplementation$Dart._close$$member_(receiver);
}
;
_EventSourceWrappingImplementation$Dart._close$$getter_ = function _close$$getter_(){
  return _EventSourceWrappingImplementation$Dart._close$$named_;
}
;
_EventSourceWrappingImplementation$Dart.prototype.dispatchEvent$member = function(evt){
  return _EventSourceWrappingImplementation$Dart._dispatchEvent$$member_(this, evt);
}
;
_EventSourceWrappingImplementation$Dart.prototype.dispatchEvent$named = function($n, $o, evt){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _EventSourceWrappingImplementation$Dart.prototype.dispatchEvent$member.call(this, evt);
}
;
_EventSourceWrappingImplementation$Dart.prototype.dispatchEvent$getter = function dispatchEvent$getter(){
  return $bind(_EventSourceWrappingImplementation$Dart.prototype.dispatchEvent$named, this);
}
;
_EventSourceWrappingImplementation$Dart._dispatchEvent$$member_ = function(receiver, evt){
  return native__EventSourceWrappingImplementation__dispatchEvent(receiver, evt);
}
;
_EventSourceWrappingImplementation$Dart._dispatchEvent$$named_ = function($n, $o, receiver, evt){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _EventSourceWrappingImplementation$Dart._dispatchEvent$$member_(receiver, evt);
}
;
_EventSourceWrappingImplementation$Dart._dispatchEvent$$getter_ = function _dispatchEvent$$getter_(){
  return _EventSourceWrappingImplementation$Dart._dispatchEvent$$named_;
}
;
_EventSourceWrappingImplementation$Dart.prototype.removeEventListener$member = function(type, listener, useCapture){
  if (useCapture == null) {
    _EventSourceWrappingImplementation$Dart._removeEventListener$$member_(this, type, listener);
    return;
  }
   else {
    _EventSourceWrappingImplementation$Dart._removeEventListener_2$$member_(this, type, listener, useCapture);
    return;
  }
}
;
_EventSourceWrappingImplementation$Dart.prototype.removeEventListener$named = function($n, $o, type, listener, useCapture){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 2:
      useCapture = $o.useCapture?(++seen , $o.useCapture):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return _EventSourceWrappingImplementation$Dart.prototype.removeEventListener$member.call(this, type, listener, useCapture);
}
;
_EventSourceWrappingImplementation$Dart.prototype.removeEventListener$getter = function removeEventListener$getter(){
  return $bind(_EventSourceWrappingImplementation$Dart.prototype.removeEventListener$named, this);
}
;
_EventSourceWrappingImplementation$Dart._removeEventListener$$member_ = function(receiver, type, listener){
  return native__EventSourceWrappingImplementation__removeEventListener(receiver, type, listener);
}
;
_EventSourceWrappingImplementation$Dart._removeEventListener$$named_ = function($n, $o, receiver, type, listener){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return _EventSourceWrappingImplementation$Dart._removeEventListener$$member_(receiver, type, listener);
}
;
_EventSourceWrappingImplementation$Dart._removeEventListener$$getter_ = function _removeEventListener$$getter_(){
  return _EventSourceWrappingImplementation$Dart._removeEventListener$$named_;
}
;
_EventSourceWrappingImplementation$Dart._removeEventListener_2$$member_ = function(receiver, type, listener, useCapture){
  return native__EventSourceWrappingImplementation__removeEventListener_2(receiver, type, listener, useCapture);
}
;
_EventSourceWrappingImplementation$Dart._removeEventListener_2$$named_ = function($n, $o, receiver, type, listener, useCapture){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 4)
    $nsme();
  return _EventSourceWrappingImplementation$Dart._removeEventListener_2$$member_(receiver, type, listener, useCapture);
}
;
_EventSourceWrappingImplementation$Dart._removeEventListener_2$$getter_ = function _removeEventListener_2$$getter_(){
  return _EventSourceWrappingImplementation$Dart._removeEventListener_2$$named_;
}
;
_EventSourceWrappingImplementation$Dart.prototype.typeName$named = function(){
  return this.typeName$getter().apply(this, arguments);
}
;
_EventSourceWrappingImplementation$Dart.prototype.typeName$getter = function(){
  return 'EventSource';
}
;
