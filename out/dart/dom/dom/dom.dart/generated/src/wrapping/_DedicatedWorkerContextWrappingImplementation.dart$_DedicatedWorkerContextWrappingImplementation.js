function _DedicatedWorkerContextWrappingImplementation$Dart(){
}

_DedicatedWorkerContextWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('_DedicatedWorkerContextWrappingImplementation$Dart'), _DedicatedWorkerContextWrappingImplementation$Dart.$RTTimplements);
}
;
_DedicatedWorkerContextWrappingImplementation$Dart.$RTTimplements = function(rtt){
  _DedicatedWorkerContextWrappingImplementation$Dart.$addTo(rtt);
}
;
_DedicatedWorkerContextWrappingImplementation$Dart.$addTo = function(target){
  var rtt = _DedicatedWorkerContextWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  _WorkerContextWrappingImplementation$Dart.$addTo(target);
  DedicatedWorkerContext$Dart.$addTo(target);
}
;
_DedicatedWorkerContextWrappingImplementation$Dart.prototype.$implements$_DedicatedWorkerContextWrappingImplementation$Dart = 1;
_DedicatedWorkerContextWrappingImplementation$Dart.prototype.$implements$DedicatedWorkerContext$Dart = 1;
_DedicatedWorkerContextWrappingImplementation$Dart.prototype.$implements$DedicatedWorkerGlobalScope$Dart = 1;
_DedicatedWorkerContextWrappingImplementation$Dart.prototype.$implements$WorkerContext$Dart = 1;
_DedicatedWorkerContextWrappingImplementation$Dart.prototype.$implements$WorkerGlobalScope$Dart = 1;
_DedicatedWorkerContextWrappingImplementation$Dart.prototype.$implements$_WorkerContextWrappingImplementation$Dart = 1;
_DedicatedWorkerContextWrappingImplementation$Dart.prototype.$implements$DOMWrapperBase$Dart = 1;
_DedicatedWorkerContextWrappingImplementation$Dart.prototype.$implements$DOMType$Dart = 1;
_DedicatedWorkerContextWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(_DedicatedWorkerContextWrappingImplementation$Dart, _WorkerContextWrappingImplementation$Dart);
_DedicatedWorkerContextWrappingImplementation$Dart.$Constructor = function(){
  _WorkerContextWrappingImplementation$Dart.$Constructor.call(this);
}
;
_DedicatedWorkerContextWrappingImplementation$Dart.$Initializer = function(){
  _WorkerContextWrappingImplementation$Dart.$Initializer.call(this);
}
;
_DedicatedWorkerContextWrappingImplementation$Dart._DedicatedWorkerContextWrappingImplementation$$Factory = function(){
  var tmp$0 = new _DedicatedWorkerContextWrappingImplementation$Dart;
  tmp$0.$typeInfo = _DedicatedWorkerContextWrappingImplementation$Dart.$lookupRTT();
  _DedicatedWorkerContextWrappingImplementation$Dart.$Initializer.call(tmp$0);
  _DedicatedWorkerContextWrappingImplementation$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
_DedicatedWorkerContextWrappingImplementation$Dart.create__DedicatedWorkerContextWrappingImplementation$member = function(){
  return _DedicatedWorkerContextWrappingImplementation$Dart._DedicatedWorkerContextWrappingImplementation$$Factory();
}
;
_DedicatedWorkerContextWrappingImplementation$Dart.create__DedicatedWorkerContextWrappingImplementation$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _DedicatedWorkerContextWrappingImplementation$Dart.create__DedicatedWorkerContextWrappingImplementation$member();
}
;
function native__DedicatedWorkerContextWrappingImplementation_create__DedicatedWorkerContextWrappingImplementation(){
  return _DedicatedWorkerContextWrappingImplementation$Dart.create__DedicatedWorkerContextWrappingImplementation$member();
}

_DedicatedWorkerContextWrappingImplementation$Dart.create__DedicatedWorkerContextWrappingImplementation$getter = function create__DedicatedWorkerContextWrappingImplementation$getter(){
  return _DedicatedWorkerContextWrappingImplementation$Dart.create__DedicatedWorkerContextWrappingImplementation$named;
}
;
_DedicatedWorkerContextWrappingImplementation$Dart.prototype.onmessage$named = function(){
  return this.onmessage$getter().apply(this, arguments);
}
;
_DedicatedWorkerContextWrappingImplementation$Dart.prototype.onmessage$getter = function(){
  return _DedicatedWorkerContextWrappingImplementation$Dart._get__DedicatedWorkerContext_onmessage$$member_(this);
}
;
_DedicatedWorkerContextWrappingImplementation$Dart.prototype.onmessage$setter = function(value){
  _DedicatedWorkerContextWrappingImplementation$Dart._set__DedicatedWorkerContext_onmessage$$member_(this, value);
}
;
_DedicatedWorkerContextWrappingImplementation$Dart._get__DedicatedWorkerContext_onmessage$$member_ = function(_this){
  return native__DedicatedWorkerContextWrappingImplementation__get__DedicatedWorkerContext_onmessage(_this);
}
;
_DedicatedWorkerContextWrappingImplementation$Dart._get__DedicatedWorkerContext_onmessage$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DedicatedWorkerContextWrappingImplementation$Dart._get__DedicatedWorkerContext_onmessage$$member_(_this);
}
;
_DedicatedWorkerContextWrappingImplementation$Dart._get__DedicatedWorkerContext_onmessage$$getter_ = function _get__DedicatedWorkerContext_onmessage$$getter_(){
  return _DedicatedWorkerContextWrappingImplementation$Dart._get__DedicatedWorkerContext_onmessage$$named_;
}
;
_DedicatedWorkerContextWrappingImplementation$Dart._set__DedicatedWorkerContext_onmessage$$member_ = function(_this, value){
  return native__DedicatedWorkerContextWrappingImplementation__set__DedicatedWorkerContext_onmessage(_this, value);
}
;
_DedicatedWorkerContextWrappingImplementation$Dart._set__DedicatedWorkerContext_onmessage$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DedicatedWorkerContextWrappingImplementation$Dart._set__DedicatedWorkerContext_onmessage$$member_(_this, value);
}
;
_DedicatedWorkerContextWrappingImplementation$Dart._set__DedicatedWorkerContext_onmessage$$getter_ = function _set__DedicatedWorkerContext_onmessage$$getter_(){
  return _DedicatedWorkerContextWrappingImplementation$Dart._set__DedicatedWorkerContext_onmessage$$named_;
}
;
_DedicatedWorkerContextWrappingImplementation$Dart.prototype.postMessage$member = function(message){
  _DedicatedWorkerContextWrappingImplementation$Dart._postMessage$$member_(this, message);
  return;
}
;
_DedicatedWorkerContextWrappingImplementation$Dart.prototype.postMessage$named = function($n, $o, message){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DedicatedWorkerContextWrappingImplementation$Dart.prototype.postMessage$member.call(this, message);
}
;
_DedicatedWorkerContextWrappingImplementation$Dart.prototype.postMessage$getter = function postMessage$getter(){
  return $bind(_DedicatedWorkerContextWrappingImplementation$Dart.prototype.postMessage$named, this);
}
;
_DedicatedWorkerContextWrappingImplementation$Dart._postMessage$$member_ = function(receiver, message){
  return native__DedicatedWorkerContextWrappingImplementation__postMessage(receiver, message);
}
;
_DedicatedWorkerContextWrappingImplementation$Dart._postMessage$$named_ = function($n, $o, receiver, message){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DedicatedWorkerContextWrappingImplementation$Dart._postMessage$$member_(receiver, message);
}
;
_DedicatedWorkerContextWrappingImplementation$Dart._postMessage$$getter_ = function _postMessage$$getter_(){
  return _DedicatedWorkerContextWrappingImplementation$Dart._postMessage$$named_;
}
;
_DedicatedWorkerContextWrappingImplementation$Dart.prototype.webkitPostMessage$member = function(message){
  _DedicatedWorkerContextWrappingImplementation$Dart._webkitPostMessage$$member_(this, message);
  return;
}
;
_DedicatedWorkerContextWrappingImplementation$Dart.prototype.webkitPostMessage$named = function($n, $o, message){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DedicatedWorkerContextWrappingImplementation$Dart.prototype.webkitPostMessage$member.call(this, message);
}
;
_DedicatedWorkerContextWrappingImplementation$Dart.prototype.webkitPostMessage$getter = function webkitPostMessage$getter(){
  return $bind(_DedicatedWorkerContextWrappingImplementation$Dart.prototype.webkitPostMessage$named, this);
}
;
_DedicatedWorkerContextWrappingImplementation$Dart._webkitPostMessage$$member_ = function(receiver, message){
  return native__DedicatedWorkerContextWrappingImplementation__webkitPostMessage(receiver, message);
}
;
_DedicatedWorkerContextWrappingImplementation$Dart._webkitPostMessage$$named_ = function($n, $o, receiver, message){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DedicatedWorkerContextWrappingImplementation$Dart._webkitPostMessage$$member_(receiver, message);
}
;
_DedicatedWorkerContextWrappingImplementation$Dart._webkitPostMessage$$getter_ = function _webkitPostMessage$$getter_(){
  return _DedicatedWorkerContextWrappingImplementation$Dart._webkitPostMessage$$named_;
}
;
_DedicatedWorkerContextWrappingImplementation$Dart.prototype.typeName$named = function(){
  return this.typeName$getter().apply(this, arguments);
}
;
_DedicatedWorkerContextWrappingImplementation$Dart.prototype.typeName$getter = function(){
  return 'DedicatedWorkerContext';
}
;
