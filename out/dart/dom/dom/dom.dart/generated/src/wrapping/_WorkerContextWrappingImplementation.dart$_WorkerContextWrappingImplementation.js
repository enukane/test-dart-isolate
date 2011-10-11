function _WorkerContextWrappingImplementation$Dart(){
}

_WorkerContextWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('_WorkerContextWrappingImplementation$Dart'), _WorkerContextWrappingImplementation$Dart.$RTTimplements);
}
;
_WorkerContextWrappingImplementation$Dart.$RTTimplements = function(rtt){
  _WorkerContextWrappingImplementation$Dart.$addTo(rtt);
}
;
_WorkerContextWrappingImplementation$Dart.$addTo = function(target){
  var rtt = _WorkerContextWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  DOMWrapperBase$Dart.$addTo(target);
  WorkerContext$Dart.$addTo(target);
}
;
_WorkerContextWrappingImplementation$Dart.prototype.$implements$_WorkerContextWrappingImplementation$Dart = 1;
_WorkerContextWrappingImplementation$Dart.prototype.$implements$WorkerContext$Dart = 1;
_WorkerContextWrappingImplementation$Dart.prototype.$implements$WorkerGlobalScope$Dart = 1;
_WorkerContextWrappingImplementation$Dart.prototype.$implements$DOMWrapperBase$Dart = 1;
_WorkerContextWrappingImplementation$Dart.prototype.$implements$DOMType$Dart = 1;
_WorkerContextWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(_WorkerContextWrappingImplementation$Dart, DOMWrapperBase$Dart);
_WorkerContextWrappingImplementation$Dart.$Constructor = function(){
  DOMWrapperBase$Dart.$Constructor.call(this);
}
;
_WorkerContextWrappingImplementation$Dart.$Initializer = function(){
  DOMWrapperBase$Dart.$Initializer.call(this);
}
;
_WorkerContextWrappingImplementation$Dart._WorkerContextWrappingImplementation$$Factory = function(){
  var tmp$0 = new _WorkerContextWrappingImplementation$Dart;
  tmp$0.$typeInfo = _WorkerContextWrappingImplementation$Dart.$lookupRTT();
  _WorkerContextWrappingImplementation$Dart.$Initializer.call(tmp$0);
  _WorkerContextWrappingImplementation$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
_WorkerContextWrappingImplementation$Dart.create__WorkerContextWrappingImplementation$member = function(){
  return _WorkerContextWrappingImplementation$Dart._WorkerContextWrappingImplementation$$Factory();
}
;
_WorkerContextWrappingImplementation$Dart.create__WorkerContextWrappingImplementation$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _WorkerContextWrappingImplementation$Dart.create__WorkerContextWrappingImplementation$member();
}
;
function native__WorkerContextWrappingImplementation_create__WorkerContextWrappingImplementation(){
  return _WorkerContextWrappingImplementation$Dart.create__WorkerContextWrappingImplementation$member();
}

_WorkerContextWrappingImplementation$Dart.create__WorkerContextWrappingImplementation$getter = function create__WorkerContextWrappingImplementation$getter(){
  return _WorkerContextWrappingImplementation$Dart.create__WorkerContextWrappingImplementation$named;
}
;
_WorkerContextWrappingImplementation$Dart.prototype.location$named = function(){
  return this.location$getter().apply(this, arguments);
}
;
_WorkerContextWrappingImplementation$Dart.prototype.location$getter = function(){
  return _WorkerContextWrappingImplementation$Dart._get__WorkerContext_location$$member_(this);
}
;
_WorkerContextWrappingImplementation$Dart.prototype.location$setter = function(value){
  _WorkerContextWrappingImplementation$Dart._set__WorkerContext_location$$member_(this, value);
}
;
_WorkerContextWrappingImplementation$Dart._get__WorkerContext_location$$member_ = function(_this){
  return native__WorkerContextWrappingImplementation__get__WorkerContext_location(_this);
}
;
_WorkerContextWrappingImplementation$Dart._get__WorkerContext_location$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _WorkerContextWrappingImplementation$Dart._get__WorkerContext_location$$member_(_this);
}
;
_WorkerContextWrappingImplementation$Dart._get__WorkerContext_location$$getter_ = function _get__WorkerContext_location$$getter_(){
  return _WorkerContextWrappingImplementation$Dart._get__WorkerContext_location$$named_;
}
;
_WorkerContextWrappingImplementation$Dart._set__WorkerContext_location$$member_ = function(_this, value){
  return native__WorkerContextWrappingImplementation__set__WorkerContext_location(_this, value);
}
;
_WorkerContextWrappingImplementation$Dart._set__WorkerContext_location$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _WorkerContextWrappingImplementation$Dart._set__WorkerContext_location$$member_(_this, value);
}
;
_WorkerContextWrappingImplementation$Dart._set__WorkerContext_location$$getter_ = function _set__WorkerContext_location$$getter_(){
  return _WorkerContextWrappingImplementation$Dart._set__WorkerContext_location$$named_;
}
;
_WorkerContextWrappingImplementation$Dart.prototype.navigator$named = function(){
  return this.navigator$getter().apply(this, arguments);
}
;
_WorkerContextWrappingImplementation$Dart.prototype.navigator$getter = function(){
  return _WorkerContextWrappingImplementation$Dart._get__WorkerContext_navigator$$member_(this);
}
;
_WorkerContextWrappingImplementation$Dart.prototype.navigator$setter = function(value){
  _WorkerContextWrappingImplementation$Dart._set__WorkerContext_navigator$$member_(this, value);
}
;
_WorkerContextWrappingImplementation$Dart._get__WorkerContext_navigator$$member_ = function(_this){
  return native__WorkerContextWrappingImplementation__get__WorkerContext_navigator(_this);
}
;
_WorkerContextWrappingImplementation$Dart._get__WorkerContext_navigator$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _WorkerContextWrappingImplementation$Dart._get__WorkerContext_navigator$$member_(_this);
}
;
_WorkerContextWrappingImplementation$Dart._get__WorkerContext_navigator$$getter_ = function _get__WorkerContext_navigator$$getter_(){
  return _WorkerContextWrappingImplementation$Dart._get__WorkerContext_navigator$$named_;
}
;
_WorkerContextWrappingImplementation$Dart._set__WorkerContext_navigator$$member_ = function(_this, value){
  return native__WorkerContextWrappingImplementation__set__WorkerContext_navigator(_this, value);
}
;
_WorkerContextWrappingImplementation$Dart._set__WorkerContext_navigator$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _WorkerContextWrappingImplementation$Dart._set__WorkerContext_navigator$$member_(_this, value);
}
;
_WorkerContextWrappingImplementation$Dart._set__WorkerContext_navigator$$getter_ = function _set__WorkerContext_navigator$$getter_(){
  return _WorkerContextWrappingImplementation$Dart._set__WorkerContext_navigator$$named_;
}
;
_WorkerContextWrappingImplementation$Dart.prototype.onerror$named = function(){
  return this.onerror$getter().apply(this, arguments);
}
;
_WorkerContextWrappingImplementation$Dart.prototype.onerror$getter = function(){
  return _WorkerContextWrappingImplementation$Dart._get__WorkerContext_onerror$$member_(this);
}
;
_WorkerContextWrappingImplementation$Dart.prototype.onerror$setter = function(value){
  _WorkerContextWrappingImplementation$Dart._set__WorkerContext_onerror$$member_(this, value);
}
;
_WorkerContextWrappingImplementation$Dart._get__WorkerContext_onerror$$member_ = function(_this){
  return native__WorkerContextWrappingImplementation__get__WorkerContext_onerror(_this);
}
;
_WorkerContextWrappingImplementation$Dart._get__WorkerContext_onerror$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _WorkerContextWrappingImplementation$Dart._get__WorkerContext_onerror$$member_(_this);
}
;
_WorkerContextWrappingImplementation$Dart._get__WorkerContext_onerror$$getter_ = function _get__WorkerContext_onerror$$getter_(){
  return _WorkerContextWrappingImplementation$Dart._get__WorkerContext_onerror$$named_;
}
;
_WorkerContextWrappingImplementation$Dart._set__WorkerContext_onerror$$member_ = function(_this, value){
  return native__WorkerContextWrappingImplementation__set__WorkerContext_onerror(_this, value);
}
;
_WorkerContextWrappingImplementation$Dart._set__WorkerContext_onerror$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _WorkerContextWrappingImplementation$Dart._set__WorkerContext_onerror$$member_(_this, value);
}
;
_WorkerContextWrappingImplementation$Dart._set__WorkerContext_onerror$$getter_ = function _set__WorkerContext_onerror$$getter_(){
  return _WorkerContextWrappingImplementation$Dart._set__WorkerContext_onerror$$named_;
}
;
_WorkerContextWrappingImplementation$Dart.prototype.webkitNotifications$named = function(){
  return this.webkitNotifications$getter().apply(this, arguments);
}
;
_WorkerContextWrappingImplementation$Dart.prototype.webkitNotifications$getter = function(){
  return _WorkerContextWrappingImplementation$Dart._get__WorkerContext_webkitNotifications$$member_(this);
}
;
_WorkerContextWrappingImplementation$Dart._get__WorkerContext_webkitNotifications$$member_ = function(_this){
  return native__WorkerContextWrappingImplementation__get__WorkerContext_webkitNotifications(_this);
}
;
_WorkerContextWrappingImplementation$Dart._get__WorkerContext_webkitNotifications$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _WorkerContextWrappingImplementation$Dart._get__WorkerContext_webkitNotifications$$member_(_this);
}
;
_WorkerContextWrappingImplementation$Dart._get__WorkerContext_webkitNotifications$$getter_ = function _get__WorkerContext_webkitNotifications$$getter_(){
  return _WorkerContextWrappingImplementation$Dart._get__WorkerContext_webkitNotifications$$named_;
}
;
_WorkerContextWrappingImplementation$Dart.prototype.webkitURL$named = function(){
  return this.webkitURL$getter().apply(this, arguments);
}
;
_WorkerContextWrappingImplementation$Dart.prototype.webkitURL$getter = function(){
  return _WorkerContextWrappingImplementation$Dart._get__WorkerContext_webkitURL$$member_(this);
}
;
_WorkerContextWrappingImplementation$Dart._get__WorkerContext_webkitURL$$member_ = function(_this){
  return native__WorkerContextWrappingImplementation__get__WorkerContext_webkitURL(_this);
}
;
_WorkerContextWrappingImplementation$Dart._get__WorkerContext_webkitURL$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _WorkerContextWrappingImplementation$Dart._get__WorkerContext_webkitURL$$member_(_this);
}
;
_WorkerContextWrappingImplementation$Dart._get__WorkerContext_webkitURL$$getter_ = function _get__WorkerContext_webkitURL$$getter_(){
  return _WorkerContextWrappingImplementation$Dart._get__WorkerContext_webkitURL$$named_;
}
;
_WorkerContextWrappingImplementation$Dart.prototype.addEventListener$member = function(type, listener, useCapture){
  if (useCapture == null) {
    _WorkerContextWrappingImplementation$Dart._addEventListener$$member_(this, type, listener);
    return;
  }
   else {
    _WorkerContextWrappingImplementation$Dart._addEventListener_2$$member_(this, type, listener, useCapture);
    return;
  }
}
;
_WorkerContextWrappingImplementation$Dart.prototype.addEventListener$named = function($n, $o, type, listener, useCapture){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 2:
      useCapture = $o.useCapture?(++seen , $o.useCapture):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return _WorkerContextWrappingImplementation$Dart.prototype.addEventListener$member.call(this, type, listener, useCapture);
}
;
_WorkerContextWrappingImplementation$Dart.prototype.addEventListener$getter = function addEventListener$getter(){
  return $bind(_WorkerContextWrappingImplementation$Dart.prototype.addEventListener$named, this);
}
;
_WorkerContextWrappingImplementation$Dart._addEventListener$$member_ = function(receiver, type, listener){
  return native__WorkerContextWrappingImplementation__addEventListener(receiver, type, listener);
}
;
_WorkerContextWrappingImplementation$Dart._addEventListener$$named_ = function($n, $o, receiver, type, listener){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return _WorkerContextWrappingImplementation$Dart._addEventListener$$member_(receiver, type, listener);
}
;
_WorkerContextWrappingImplementation$Dart._addEventListener$$getter_ = function _addEventListener$$getter_(){
  return _WorkerContextWrappingImplementation$Dart._addEventListener$$named_;
}
;
_WorkerContextWrappingImplementation$Dart._addEventListener_2$$member_ = function(receiver, type, listener, useCapture){
  return native__WorkerContextWrappingImplementation__addEventListener_2(receiver, type, listener, useCapture);
}
;
_WorkerContextWrappingImplementation$Dart._addEventListener_2$$named_ = function($n, $o, receiver, type, listener, useCapture){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 4)
    $nsme();
  return _WorkerContextWrappingImplementation$Dart._addEventListener_2$$member_(receiver, type, listener, useCapture);
}
;
_WorkerContextWrappingImplementation$Dart._addEventListener_2$$getter_ = function _addEventListener_2$$getter_(){
  return _WorkerContextWrappingImplementation$Dart._addEventListener_2$$named_;
}
;
_WorkerContextWrappingImplementation$Dart.prototype.clearInterval$member = function(handle){
  _WorkerContextWrappingImplementation$Dart._clearInterval$$member_(this, handle);
  return;
}
;
_WorkerContextWrappingImplementation$Dart.prototype.clearInterval$named = function($n, $o, handle){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _WorkerContextWrappingImplementation$Dart.prototype.clearInterval$member.call(this, handle);
}
;
_WorkerContextWrappingImplementation$Dart.prototype.clearInterval$getter = function clearInterval$getter(){
  return $bind(_WorkerContextWrappingImplementation$Dart.prototype.clearInterval$named, this);
}
;
_WorkerContextWrappingImplementation$Dart._clearInterval$$member_ = function(receiver, handle){
  return native__WorkerContextWrappingImplementation__clearInterval(receiver, handle);
}
;
_WorkerContextWrappingImplementation$Dart._clearInterval$$named_ = function($n, $o, receiver, handle){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _WorkerContextWrappingImplementation$Dart._clearInterval$$member_(receiver, handle);
}
;
_WorkerContextWrappingImplementation$Dart._clearInterval$$getter_ = function _clearInterval$$getter_(){
  return _WorkerContextWrappingImplementation$Dart._clearInterval$$named_;
}
;
_WorkerContextWrappingImplementation$Dart.prototype.clearTimeout$member = function(handle){
  _WorkerContextWrappingImplementation$Dart._clearTimeout$$member_(this, handle);
  return;
}
;
_WorkerContextWrappingImplementation$Dart.prototype.clearTimeout$named = function($n, $o, handle){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _WorkerContextWrappingImplementation$Dart.prototype.clearTimeout$member.call(this, handle);
}
;
_WorkerContextWrappingImplementation$Dart.prototype.clearTimeout$getter = function clearTimeout$getter(){
  return $bind(_WorkerContextWrappingImplementation$Dart.prototype.clearTimeout$named, this);
}
;
_WorkerContextWrappingImplementation$Dart._clearTimeout$$member_ = function(receiver, handle){
  return native__WorkerContextWrappingImplementation__clearTimeout(receiver, handle);
}
;
_WorkerContextWrappingImplementation$Dart._clearTimeout$$named_ = function($n, $o, receiver, handle){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _WorkerContextWrappingImplementation$Dart._clearTimeout$$member_(receiver, handle);
}
;
_WorkerContextWrappingImplementation$Dart._clearTimeout$$getter_ = function _clearTimeout$$getter_(){
  return _WorkerContextWrappingImplementation$Dart._clearTimeout$$named_;
}
;
_WorkerContextWrappingImplementation$Dart.prototype.close$member = function(){
  _WorkerContextWrappingImplementation$Dart._close$$member_(this);
  return;
}
;
_WorkerContextWrappingImplementation$Dart.prototype.close$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _WorkerContextWrappingImplementation$Dart.prototype.close$member.call(this);
}
;
_WorkerContextWrappingImplementation$Dart.prototype.close$getter = function close$getter(){
  return $bind(_WorkerContextWrappingImplementation$Dart.prototype.close$named, this);
}
;
_WorkerContextWrappingImplementation$Dart._close$$member_ = function(receiver){
  return native__WorkerContextWrappingImplementation__close(receiver);
}
;
_WorkerContextWrappingImplementation$Dart._close$$named_ = function($n, $o, receiver){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _WorkerContextWrappingImplementation$Dart._close$$member_(receiver);
}
;
_WorkerContextWrappingImplementation$Dart._close$$getter_ = function _close$$getter_(){
  return _WorkerContextWrappingImplementation$Dart._close$$named_;
}
;
_WorkerContextWrappingImplementation$Dart.prototype.dispatchEvent$member = function(evt){
  return _WorkerContextWrappingImplementation$Dart._dispatchEvent$$member_(this, evt);
}
;
_WorkerContextWrappingImplementation$Dart.prototype.dispatchEvent$named = function($n, $o, evt){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _WorkerContextWrappingImplementation$Dart.prototype.dispatchEvent$member.call(this, evt);
}
;
_WorkerContextWrappingImplementation$Dart.prototype.dispatchEvent$getter = function dispatchEvent$getter(){
  return $bind(_WorkerContextWrappingImplementation$Dart.prototype.dispatchEvent$named, this);
}
;
_WorkerContextWrappingImplementation$Dart._dispatchEvent$$member_ = function(receiver, evt){
  return native__WorkerContextWrappingImplementation__dispatchEvent(receiver, evt);
}
;
_WorkerContextWrappingImplementation$Dart._dispatchEvent$$named_ = function($n, $o, receiver, evt){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _WorkerContextWrappingImplementation$Dart._dispatchEvent$$member_(receiver, evt);
}
;
_WorkerContextWrappingImplementation$Dart._dispatchEvent$$getter_ = function _dispatchEvent$$getter_(){
  return _WorkerContextWrappingImplementation$Dart._dispatchEvent$$named_;
}
;
_WorkerContextWrappingImplementation$Dart.prototype.importScripts$member = function(){
  _WorkerContextWrappingImplementation$Dart._importScripts$$member_(this);
  return;
}
;
_WorkerContextWrappingImplementation$Dart.prototype.importScripts$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _WorkerContextWrappingImplementation$Dart.prototype.importScripts$member.call(this);
}
;
_WorkerContextWrappingImplementation$Dart.prototype.importScripts$getter = function importScripts$getter(){
  return $bind(_WorkerContextWrappingImplementation$Dart.prototype.importScripts$named, this);
}
;
_WorkerContextWrappingImplementation$Dart._importScripts$$member_ = function(receiver){
  return native__WorkerContextWrappingImplementation__importScripts(receiver);
}
;
_WorkerContextWrappingImplementation$Dart._importScripts$$named_ = function($n, $o, receiver){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _WorkerContextWrappingImplementation$Dart._importScripts$$member_(receiver);
}
;
_WorkerContextWrappingImplementation$Dart._importScripts$$getter_ = function _importScripts$$getter_(){
  return _WorkerContextWrappingImplementation$Dart._importScripts$$named_;
}
;
_WorkerContextWrappingImplementation$Dart.prototype.removeEventListener$member = function(type, listener, useCapture){
  if (useCapture == null) {
    _WorkerContextWrappingImplementation$Dart._removeEventListener$$member_(this, type, listener);
    return;
  }
   else {
    _WorkerContextWrappingImplementation$Dart._removeEventListener_2$$member_(this, type, listener, useCapture);
    return;
  }
}
;
_WorkerContextWrappingImplementation$Dart.prototype.removeEventListener$named = function($n, $o, type, listener, useCapture){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 2:
      useCapture = $o.useCapture?(++seen , $o.useCapture):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return _WorkerContextWrappingImplementation$Dart.prototype.removeEventListener$member.call(this, type, listener, useCapture);
}
;
_WorkerContextWrappingImplementation$Dart.prototype.removeEventListener$getter = function removeEventListener$getter(){
  return $bind(_WorkerContextWrappingImplementation$Dart.prototype.removeEventListener$named, this);
}
;
_WorkerContextWrappingImplementation$Dart._removeEventListener$$member_ = function(receiver, type, listener){
  return native__WorkerContextWrappingImplementation__removeEventListener(receiver, type, listener);
}
;
_WorkerContextWrappingImplementation$Dart._removeEventListener$$named_ = function($n, $o, receiver, type, listener){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return _WorkerContextWrappingImplementation$Dart._removeEventListener$$member_(receiver, type, listener);
}
;
_WorkerContextWrappingImplementation$Dart._removeEventListener$$getter_ = function _removeEventListener$$getter_(){
  return _WorkerContextWrappingImplementation$Dart._removeEventListener$$named_;
}
;
_WorkerContextWrappingImplementation$Dart._removeEventListener_2$$member_ = function(receiver, type, listener, useCapture){
  return native__WorkerContextWrappingImplementation__removeEventListener_2(receiver, type, listener, useCapture);
}
;
_WorkerContextWrappingImplementation$Dart._removeEventListener_2$$named_ = function($n, $o, receiver, type, listener, useCapture){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 4)
    $nsme();
  return _WorkerContextWrappingImplementation$Dart._removeEventListener_2$$member_(receiver, type, listener, useCapture);
}
;
_WorkerContextWrappingImplementation$Dart._removeEventListener_2$$getter_ = function _removeEventListener_2$$getter_(){
  return _WorkerContextWrappingImplementation$Dart._removeEventListener_2$$named_;
}
;
_WorkerContextWrappingImplementation$Dart.prototype.setInterval$member = function(handler, timeout){
  return _WorkerContextWrappingImplementation$Dart._setInterval$$member_(this, handler, timeout);
}
;
_WorkerContextWrappingImplementation$Dart.prototype.setInterval$named = function($n, $o, handler, timeout){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _WorkerContextWrappingImplementation$Dart.prototype.setInterval$member.call(this, handler, timeout);
}
;
_WorkerContextWrappingImplementation$Dart.prototype.setInterval$getter = function setInterval$getter(){
  return $bind(_WorkerContextWrappingImplementation$Dart.prototype.setInterval$named, this);
}
;
_WorkerContextWrappingImplementation$Dart._setInterval$$member_ = function(receiver, handler, timeout){
  return native__WorkerContextWrappingImplementation__setInterval(receiver, handler, timeout);
}
;
_WorkerContextWrappingImplementation$Dart._setInterval$$named_ = function($n, $o, receiver, handler, timeout){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return _WorkerContextWrappingImplementation$Dart._setInterval$$member_(receiver, handler, timeout);
}
;
_WorkerContextWrappingImplementation$Dart._setInterval$$getter_ = function _setInterval$$getter_(){
  return _WorkerContextWrappingImplementation$Dart._setInterval$$named_;
}
;
_WorkerContextWrappingImplementation$Dart.prototype.setTimeout$member = function(handler, timeout){
  return _WorkerContextWrappingImplementation$Dart._setTimeout$$member_(this, handler, timeout);
}
;
_WorkerContextWrappingImplementation$Dart.prototype.setTimeout$named = function($n, $o, handler, timeout){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _WorkerContextWrappingImplementation$Dart.prototype.setTimeout$member.call(this, handler, timeout);
}
;
_WorkerContextWrappingImplementation$Dart.prototype.setTimeout$getter = function setTimeout$getter(){
  return $bind(_WorkerContextWrappingImplementation$Dart.prototype.setTimeout$named, this);
}
;
_WorkerContextWrappingImplementation$Dart._setTimeout$$member_ = function(receiver, handler, timeout){
  return native__WorkerContextWrappingImplementation__setTimeout(receiver, handler, timeout);
}
;
_WorkerContextWrappingImplementation$Dart._setTimeout$$named_ = function($n, $o, receiver, handler, timeout){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return _WorkerContextWrappingImplementation$Dart._setTimeout$$member_(receiver, handler, timeout);
}
;
_WorkerContextWrappingImplementation$Dart._setTimeout$$getter_ = function _setTimeout$$getter_(){
  return _WorkerContextWrappingImplementation$Dart._setTimeout$$named_;
}
;
_WorkerContextWrappingImplementation$Dart.prototype.typeName$named = function(){
  return this.typeName$getter().apply(this, arguments);
}
;
_WorkerContextWrappingImplementation$Dart.prototype.typeName$getter = function(){
  return 'WorkerContext';
}
;
