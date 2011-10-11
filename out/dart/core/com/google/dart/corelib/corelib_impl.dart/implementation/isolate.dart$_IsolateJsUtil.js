function _IsolateJsUtil$Dart(){
}

_IsolateJsUtil$Dart.$lookupRTT = function(){
  return RTT.create($cls('_IsolateJsUtil$Dart'));
}
;
_IsolateJsUtil$Dart.$addTo = function(target){
  var rtt = _IsolateJsUtil$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
}
;
_IsolateJsUtil$Dart.prototype.$implements$_IsolateJsUtil$Dart = 1;
_IsolateJsUtil$Dart.prototype.$implements$Object$Dart = 1;
_IsolateJsUtil$Dart._promiseQueueProcess$$member_ = function(){
  PromiseQueue$Dart.process$member();
}
;
_IsolateJsUtil$Dart._promiseQueueProcess$$named_ = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _IsolateJsUtil$Dart._promiseQueueProcess$$member_();
}
;
function native__IsolateJsUtil__promiseQueueProcess(){
  return _IsolateJsUtil$Dart._promiseQueueProcess$$member_();
}

_IsolateJsUtil$Dart._promiseQueueProcess$$getter_ = function _promiseQueueProcess$$getter_(){
  return _IsolateJsUtil$Dart._promiseQueueProcess$$named_;
}
;
_IsolateJsUtil$Dart._startIsolate$$member_ = function(isolate, replyTo){
  var port = ReceivePortFactory$Dart.ReceivePort$$Factory();
  replyTo.send$named(2, $noargs, _SPAWNED_SIGNAL$$getter_(), port.toSendPort$named(0, $noargs));
  isolate._run$$named_(1, $noargs, port);
}
;
_IsolateJsUtil$Dart._startIsolate$$named_ = function($n, $o, isolate, replyTo){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _IsolateJsUtil$Dart._startIsolate$$member_(isolate, replyTo);
}
;
function native__IsolateJsUtil__startIsolate(isolate, replyTo){
  return _IsolateJsUtil$Dart._startIsolate$$member_(isolate, replyTo);
}

_IsolateJsUtil$Dart._startIsolate$$getter_ = function _startIsolate$$getter_(){
  return _IsolateJsUtil$Dart._startIsolate$$named_;
}
;
_IsolateJsUtil$Dart._toSendPort$$member_ = function(port){
  return port.toSendPort$named(0, $noargs);
}
;
_IsolateJsUtil$Dart._toSendPort$$named_ = function($n, $o, port){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _IsolateJsUtil$Dart._toSendPort$$member_(port);
}
;
function native__IsolateJsUtil__toSendPort(port){
  return _IsolateJsUtil$Dart._toSendPort$$member_(port);
}

_IsolateJsUtil$Dart._toSendPort$$getter_ = function _toSendPort$$getter_(){
  return _IsolateJsUtil$Dart._toSendPort$$named_;
}
;
_IsolateJsUtil$Dart._print$$member_ = function(msg){
  print$getter()(1, $noargs, msg);
}
;
_IsolateJsUtil$Dart._print$$named_ = function($n, $o, msg){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _IsolateJsUtil$Dart._print$$member_(msg);
}
;
function native__IsolateJsUtil__print(msg){
  return _IsolateJsUtil$Dart._print$$member_(msg);
}

_IsolateJsUtil$Dart._print$$getter_ = function _print$$getter_(){
  return _IsolateJsUtil$Dart._print$$named_;
}
;
_IsolateJsUtil$Dart._copyObject$$member_ = function(obj){
  return Copier$Dart.Copier$$Factory().traverse$named(1, $noargs, obj);
}
;
_IsolateJsUtil$Dart._copyObject$$named_ = function($n, $o, obj){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _IsolateJsUtil$Dart._copyObject$$member_(obj);
}
;
function native__IsolateJsUtil__copyObject(obj){
  return _IsolateJsUtil$Dart._copyObject$$member_(obj);
}

_IsolateJsUtil$Dart._copyObject$$getter_ = function _copyObject$$getter_(){
  return _IsolateJsUtil$Dart._copyObject$$named_;
}
;
_IsolateJsUtil$Dart._serializeObject$$member_ = function(obj){
  return Serializer$Dart.Serializer$$Factory().traverse$named(1, $noargs, obj);
}
;
_IsolateJsUtil$Dart._serializeObject$$named_ = function($n, $o, obj){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _IsolateJsUtil$Dart._serializeObject$$member_(obj);
}
;
function native__IsolateJsUtil__serializeObject(obj){
  return _IsolateJsUtil$Dart._serializeObject$$member_(obj);
}

_IsolateJsUtil$Dart._serializeObject$$getter_ = function _serializeObject$$getter_(){
  return _IsolateJsUtil$Dart._serializeObject$$named_;
}
;
_IsolateJsUtil$Dart._deserializeMessage$$member_ = function(message){
  return Deserializer$Dart.Deserializer$$Factory().deserialize$named(1, $noargs, message);
}
;
_IsolateJsUtil$Dart._deserializeMessage$$named_ = function($n, $o, message){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _IsolateJsUtil$Dart._deserializeMessage$$member_(message);
}
;
function native__IsolateJsUtil__deserializeMessage(message){
  return _IsolateJsUtil$Dart._deserializeMessage$$member_(message);
}

_IsolateJsUtil$Dart._deserializeMessage$$getter_ = function _deserializeMessage$$getter_(){
  return _IsolateJsUtil$Dart._deserializeMessage$$named_;
}
;
_IsolateJsUtil$Dart.$Constructor = function(){
  Object.$Constructor.call(this);
}
;
_IsolateJsUtil$Dart.$Initializer = function(){
  Object.$Initializer.call(this);
}
;
_IsolateJsUtil$Dart._IsolateJsUtil$$Factory = function(){
  var tmp$0 = new _IsolateJsUtil$Dart;
  tmp$0.$typeInfo = _IsolateJsUtil$Dart.$lookupRTT();
  _IsolateJsUtil$Dart.$Initializer.call(tmp$0);
  _IsolateJsUtil$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
