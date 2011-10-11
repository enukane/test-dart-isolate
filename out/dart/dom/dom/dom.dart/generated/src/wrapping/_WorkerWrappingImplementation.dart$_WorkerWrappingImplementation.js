function _WorkerWrappingImplementation$Dart(){
}

_WorkerWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('_WorkerWrappingImplementation$Dart'), _WorkerWrappingImplementation$Dart.$RTTimplements);
}
;
_WorkerWrappingImplementation$Dart.$RTTimplements = function(rtt){
  _WorkerWrappingImplementation$Dart.$addTo(rtt);
}
;
_WorkerWrappingImplementation$Dart.$addTo = function(target){
  var rtt = _WorkerWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  _AbstractWorkerWrappingImplementation$Dart.$addTo(target);
  Worker$Dart.$addTo(target);
}
;
_WorkerWrappingImplementation$Dart.prototype.$implements$_WorkerWrappingImplementation$Dart = 1;
_WorkerWrappingImplementation$Dart.prototype.$implements$Worker$Dart = 1;
_WorkerWrappingImplementation$Dart.prototype.$implements$AbstractWorker$Dart = 1;
_WorkerWrappingImplementation$Dart.prototype.$implements$EventTarget$Dart = 1;
_WorkerWrappingImplementation$Dart.prototype.$implements$_AbstractWorkerWrappingImplementation$Dart = 1;
_WorkerWrappingImplementation$Dart.prototype.$implements$DOMWrapperBase$Dart = 1;
_WorkerWrappingImplementation$Dart.prototype.$implements$DOMType$Dart = 1;
_WorkerWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(_WorkerWrappingImplementation$Dart, _AbstractWorkerWrappingImplementation$Dart);
_WorkerWrappingImplementation$Dart.$Constructor = function(){
  _AbstractWorkerWrappingImplementation$Dart.$Constructor.call(this);
}
;
_WorkerWrappingImplementation$Dart.$Initializer = function(){
  _AbstractWorkerWrappingImplementation$Dart.$Initializer.call(this);
}
;
_WorkerWrappingImplementation$Dart._WorkerWrappingImplementation$$Factory = function(){
  var tmp$0 = new _WorkerWrappingImplementation$Dart;
  tmp$0.$typeInfo = _WorkerWrappingImplementation$Dart.$lookupRTT();
  _WorkerWrappingImplementation$Dart.$Initializer.call(tmp$0);
  _WorkerWrappingImplementation$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
_WorkerWrappingImplementation$Dart.create__WorkerWrappingImplementation$member = function(){
  return _WorkerWrappingImplementation$Dart._WorkerWrappingImplementation$$Factory();
}
;
_WorkerWrappingImplementation$Dart.create__WorkerWrappingImplementation$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _WorkerWrappingImplementation$Dart.create__WorkerWrappingImplementation$member();
}
;
function native__WorkerWrappingImplementation_create__WorkerWrappingImplementation(){
  return _WorkerWrappingImplementation$Dart.create__WorkerWrappingImplementation$member();
}

_WorkerWrappingImplementation$Dart.create__WorkerWrappingImplementation$getter = function create__WorkerWrappingImplementation$getter(){
  return _WorkerWrappingImplementation$Dart.create__WorkerWrappingImplementation$named;
}
;
_WorkerWrappingImplementation$Dart.prototype.onmessage$named = function(){
  return this.onmessage$getter().apply(this, arguments);
}
;
_WorkerWrappingImplementation$Dart.prototype.onmessage$getter = function(){
  return _WorkerWrappingImplementation$Dart._get__Worker_onmessage$$member_(this);
}
;
_WorkerWrappingImplementation$Dart.prototype.onmessage$setter = function(value){
  _WorkerWrappingImplementation$Dart._set__Worker_onmessage$$member_(this, value);
}
;
_WorkerWrappingImplementation$Dart._get__Worker_onmessage$$member_ = function(_this){
  return native__WorkerWrappingImplementation__get__Worker_onmessage(_this);
}
;
_WorkerWrappingImplementation$Dart._get__Worker_onmessage$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _WorkerWrappingImplementation$Dart._get__Worker_onmessage$$member_(_this);
}
;
_WorkerWrappingImplementation$Dart._get__Worker_onmessage$$getter_ = function _get__Worker_onmessage$$getter_(){
  return _WorkerWrappingImplementation$Dart._get__Worker_onmessage$$named_;
}
;
_WorkerWrappingImplementation$Dart._set__Worker_onmessage$$member_ = function(_this, value){
  return native__WorkerWrappingImplementation__set__Worker_onmessage(_this, value);
}
;
_WorkerWrappingImplementation$Dart._set__Worker_onmessage$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _WorkerWrappingImplementation$Dart._set__Worker_onmessage$$member_(_this, value);
}
;
_WorkerWrappingImplementation$Dart._set__Worker_onmessage$$getter_ = function _set__Worker_onmessage$$getter_(){
  return _WorkerWrappingImplementation$Dart._set__Worker_onmessage$$named_;
}
;
_WorkerWrappingImplementation$Dart.prototype.postMessage$member = function(message, messagePort){
  if (messagePort == null) {
    _WorkerWrappingImplementation$Dart._postMessage$$member_(this, message);
    return;
  }
   else {
    _WorkerWrappingImplementation$Dart._postMessage_2$$member_(this, message, messagePort);
    return;
  }
}
;
_WorkerWrappingImplementation$Dart.prototype.postMessage$named = function($n, $o, message, messagePort){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 1:
      messagePort = $o.messagePort?(++seen , $o.messagePort):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _WorkerWrappingImplementation$Dart.prototype.postMessage$member.call(this, message, messagePort);
}
;
_WorkerWrappingImplementation$Dart.prototype.postMessage$getter = function postMessage$getter(){
  return $bind(_WorkerWrappingImplementation$Dart.prototype.postMessage$named, this);
}
;
_WorkerWrappingImplementation$Dart._postMessage$$member_ = function(receiver, message){
  return native__WorkerWrappingImplementation__postMessage(receiver, message);
}
;
_WorkerWrappingImplementation$Dart._postMessage$$named_ = function($n, $o, receiver, message){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _WorkerWrappingImplementation$Dart._postMessage$$member_(receiver, message);
}
;
_WorkerWrappingImplementation$Dart._postMessage$$getter_ = function _postMessage$$getter_(){
  return _WorkerWrappingImplementation$Dart._postMessage$$named_;
}
;
_WorkerWrappingImplementation$Dart._postMessage_2$$member_ = function(receiver, message, messagePort){
  return native__WorkerWrappingImplementation__postMessage_2(receiver, message, messagePort);
}
;
_WorkerWrappingImplementation$Dart._postMessage_2$$named_ = function($n, $o, receiver, message, messagePort){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return _WorkerWrappingImplementation$Dart._postMessage_2$$member_(receiver, message, messagePort);
}
;
_WorkerWrappingImplementation$Dart._postMessage_2$$getter_ = function _postMessage_2$$getter_(){
  return _WorkerWrappingImplementation$Dart._postMessage_2$$named_;
}
;
_WorkerWrappingImplementation$Dart.prototype.terminate$member = function(){
  _WorkerWrappingImplementation$Dart._terminate$$member_(this);
  return;
}
;
_WorkerWrappingImplementation$Dart.prototype.terminate$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _WorkerWrappingImplementation$Dart.prototype.terminate$member.call(this);
}
;
_WorkerWrappingImplementation$Dart.prototype.terminate$getter = function terminate$getter(){
  return $bind(_WorkerWrappingImplementation$Dart.prototype.terminate$named, this);
}
;
_WorkerWrappingImplementation$Dart._terminate$$member_ = function(receiver){
  return native__WorkerWrappingImplementation__terminate(receiver);
}
;
_WorkerWrappingImplementation$Dart._terminate$$named_ = function($n, $o, receiver){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _WorkerWrappingImplementation$Dart._terminate$$member_(receiver);
}
;
_WorkerWrappingImplementation$Dart._terminate$$getter_ = function _terminate$$getter_(){
  return _WorkerWrappingImplementation$Dart._terminate$$named_;
}
;
_WorkerWrappingImplementation$Dart.prototype.typeName$named = function(){
  return this.typeName$getter().apply(this, arguments);
}
;
_WorkerWrappingImplementation$Dart.prototype.typeName$getter = function(){
  return 'Worker';
}
;
