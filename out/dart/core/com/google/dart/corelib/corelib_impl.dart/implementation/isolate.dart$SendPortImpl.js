function SendPortImpl$Dart(){
}

SendPortImpl$Dart.$lookupRTT = function(){
  return RTT.create($cls('SendPortImpl$Dart'), SendPortImpl$Dart.$RTTimplements);
}
;
SendPortImpl$Dart.$RTTimplements = function(rtt){
  SendPortImpl$Dart.$addTo(rtt);
}
;
SendPortImpl$Dart.$addTo = function(target){
  var rtt = SendPortImpl$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  SendPort$Dart.$addTo(target);
}
;
SendPortImpl$Dart.prototype.$implements$SendPortImpl$Dart = 1;
SendPortImpl$Dart.prototype.$implements$SendPort$Dart = 1;
SendPortImpl$Dart.prototype.$implements$Hashable$Dart = 1;
SendPortImpl$Dart.prototype.$implements$Object$Dart = 1;
SendPortImpl$Dart.$Constructor = function(_workerId, _isolateId, _receivePortId){
  Object.$Constructor.call(this);
}
;
SendPortImpl$Dart.$Initializer = function(_workerId, _isolateId, _receivePortId){
  Object.$Initializer.call(this);
  this._workerId$$field_ = _workerId;
  this._isolateId$$field_ = _isolateId;
  this._receivePortId$$field_ = _receivePortId;
}
;
SendPortImpl$Dart.SendPortImpl$$Factory = function(_workerId, _isolateId, _receivePortId){
  var tmp$0 = new SendPortImpl$Dart;
  tmp$0.$typeInfo = SendPortImpl$Dart.$lookupRTT();
  SendPortImpl$Dart.$Initializer.call(tmp$0, _workerId, _isolateId, _receivePortId);
  SendPortImpl$Dart.$Constructor.call(tmp$0, _workerId, _isolateId, _receivePortId);
  return tmp$0;
}
;
SendPortImpl$Dart.prototype.send$member = function(message, replyTo){
  if (PromiseQueue$Dart.isEmpty$member()) {
    this._sendNow$$named_(2, $noargs, message, replyTo);
  }
   else {
    this._enqueueSend$$member_(message, replyTo);
  }
}
;
SendPortImpl$Dart.prototype.send$named = function($n, $o, message, replyTo){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 1:
      replyTo = $o.replyTo?(++seen , $o.replyTo):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return SendPortImpl$Dart.prototype.send$member.call(this, message, replyTo);
}
;
SendPortImpl$Dart.prototype.send$getter = function send$getter(){
  return $bind(SendPortImpl$Dart.prototype.send$named, this);
}
;
function SendPortImpl$Dart$_enqueueSend$c0$17_17$Hoisted(dartc_scp$0, ignored){
  this._sendNow$$named_(2, $noargs, dartc_scp$0.message, dartc_scp$0.replyTo);
}

function SendPortImpl$Dart$_enqueueSend$c0$17_17$Hoisted$named($s0, $n, $o, ignored){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return SendPortImpl$Dart$_enqueueSend$c0$17_17$Hoisted.call(this, $s0, ignored);
}

SendPortImpl$Dart.prototype._enqueueSend$$member_ = function(message, replyTo){
  var dartc_scp$0 = {message:message, replyTo:replyTo};
  PromiseQueue$Dart.enqueue$member($intern(RTT.setTypeInfo([], Array.$lookupRTT()), [''])).then$named(1, $noargs, $bind(SendPortImpl$Dart$_enqueueSend$c0$17_17$Hoisted$named, this, dartc_scp$0));
}
;
SendPortImpl$Dart.prototype._enqueueSend$$named_ = function($n, $o, message, replyTo){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return SendPortImpl$Dart.prototype._enqueueSend$$member_.call(this, message, replyTo);
}
;
SendPortImpl$Dart.prototype._enqueueSend$$getter_ = function _enqueueSend$$getter_(){
  return $bind(SendPortImpl$Dart.prototype._enqueueSend$$named_, this);
}
;
SendPortImpl$Dart.prototype._sendNow$$member_ = function(message, replyTo){
  return native_SendPortImpl__sendNow.call(this, message, replyTo);
}
;
SendPortImpl$Dart.prototype._sendNow$$named_ = function($n, $o, message, replyTo){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return SendPortImpl$Dart.prototype._sendNow$$member_.call(this, message, replyTo);
}
;
SendPortImpl$Dart.prototype._sendNow$$getter_ = function _sendNow$$getter_(){
  return $bind(SendPortImpl$Dart.prototype._sendNow$$named_, this);
}
;
SendPortImpl$Dart.prototype.call$member = function(message){
  var result = ReceivePortSingleShotImpl$Dart.ReceivePortSingleShotImpl$$Factory();
  this.send$named(2, $noargs, message, result.toSendPort$named(0, $noargs));
  return result;
}
;
SendPortImpl$Dart.prototype.call$named = function($n, $o, message){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return SendPortImpl$Dart.prototype.call$member.call(this, message);
}
;
SendPortImpl$Dart.prototype.call$getter = function call$getter(){
  return $bind(SendPortImpl$Dart.prototype.call$named, this);
}
;
SendPortImpl$Dart.prototype._callNow$$member_ = function(message){
  var result = ReceivePortSingleShotImpl$Dart.ReceivePortSingleShotImpl$$Factory();
  this._sendNow$$named_(2, $noargs, message, result.toSendPort$named(0, $noargs));
  return result;
}
;
SendPortImpl$Dart.prototype._callNow$$named_ = function($n, $o, message){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return SendPortImpl$Dart.prototype._callNow$$member_.call(this, message);
}
;
SendPortImpl$Dart.prototype._callNow$$getter_ = function _callNow$$getter_(){
  return $bind(SendPortImpl$Dart.prototype._callNow$$named_, this);
}
;
SendPortImpl$Dart.prototype.EQ$operator = function(other){
  var tmp$0;
  return !!(tmp$0 = other , tmp$0 != null && tmp$0.$implements$SendPortImpl$Dart) && EQ$operator(this._workerId$$getter_(), other._workerId$$getter_()) && EQ$operator(this._isolateId$$getter_(), other._isolateId$$getter_()) && EQ$operator(this._receivePortId$$getter_(), other._receivePortId$$getter_());
}
;
SendPortImpl$Dart.prototype.hashCode$member = function(){
  return BIT_XOR$operator(BIT_XOR$operator(SHL$operator(this._workerId$$getter_(), 16), SHL$operator(this._isolateId$$getter_(), 8)), this._receivePortId$$getter_());
}
;
SendPortImpl$Dart.prototype.hashCode$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return SendPortImpl$Dart.prototype.hashCode$member.call(this);
}
;
SendPortImpl$Dart.prototype.hashCode$getter = function hashCode$getter(){
  return $bind(SendPortImpl$Dart.prototype.hashCode$named, this);
}
;
SendPortImpl$Dart.prototype._receivePortId$$named_ = function(){
  return this._receivePortId$$getter_().apply(this, arguments);
}
;
SendPortImpl$Dart.prototype._receivePortId$$getter_ = function(){
  return this._receivePortId$$field_;
}
;
SendPortImpl$Dart.prototype._isolateId$$named_ = function(){
  return this._isolateId$$getter_().apply(this, arguments);
}
;
SendPortImpl$Dart.prototype._isolateId$$getter_ = function(){
  return this._isolateId$$field_;
}
;
SendPortImpl$Dart.prototype._workerId$$named_ = function(){
  return this._workerId$$getter_().apply(this, arguments);
}
;
SendPortImpl$Dart.prototype._workerId$$getter_ = function(){
  return this._workerId$$field_;
}
;
SendPortImpl$Dart._create$$member_ = function(workerId, isolateId, receivePortId){
  return SendPortImpl$Dart.SendPortImpl$$Factory(workerId, isolateId, receivePortId);
}
;
SendPortImpl$Dart._create$$named_ = function($n, $o, workerId, isolateId, receivePortId){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return SendPortImpl$Dart._create$$member_(workerId, isolateId, receivePortId);
}
;
function native_SendPortImpl__create(workerId, isolateId, receivePortId){
  return SendPortImpl$Dart._create$$member_(workerId, isolateId, receivePortId);
}

SendPortImpl$Dart._create$$getter_ = function _create$$getter_(){
  return SendPortImpl$Dart._create$$named_;
}
;
SendPortImpl$Dart._getReceivePortId$$member_ = function(port){
  return port._receivePortId$$getter_();
}
;
SendPortImpl$Dart._getReceivePortId$$named_ = function($n, $o, port){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return SendPortImpl$Dart._getReceivePortId$$member_(port);
}
;
function native_SendPortImpl__getReceivePortId(port){
  return SendPortImpl$Dart._getReceivePortId$$member_(port);
}

SendPortImpl$Dart._getReceivePortId$$getter_ = function _getReceivePortId$$getter_(){
  return SendPortImpl$Dart._getReceivePortId$$named_;
}
;
SendPortImpl$Dart._getIsolateId$$member_ = function(port){
  return port._isolateId$$getter_();
}
;
SendPortImpl$Dart._getIsolateId$$named_ = function($n, $o, port){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return SendPortImpl$Dart._getIsolateId$$member_(port);
}
;
function native_SendPortImpl__getIsolateId(port){
  return SendPortImpl$Dart._getIsolateId$$member_(port);
}

SendPortImpl$Dart._getIsolateId$$getter_ = function _getIsolateId$$getter_(){
  return SendPortImpl$Dart._getIsolateId$$named_;
}
;
SendPortImpl$Dart._getWorkerId$$member_ = function(port){
  return port._workerId$$getter_();
}
;
SendPortImpl$Dart._getWorkerId$$named_ = function($n, $o, port){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return SendPortImpl$Dart._getWorkerId$$member_(port);
}
;
function native_SendPortImpl__getWorkerId(port){
  return SendPortImpl$Dart._getWorkerId$$member_(port);
}

SendPortImpl$Dart._getWorkerId$$getter_ = function _getWorkerId$$getter_(){
  return SendPortImpl$Dart._getWorkerId$$named_;
}
;
SendPortImpl$Dart.prototype.$const_id = function(){
  return $cls('SendPortImpl$Dart') + (':' + $dart_const_id(this._receivePortId$$field_)) + (':' + $dart_const_id(this._isolateId$$field_)) + (':' + $dart_const_id(this._workerId$$field_));
}
;
