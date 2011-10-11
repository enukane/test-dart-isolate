function ReceivePortImpl$Dart(){
}

ReceivePortImpl$Dart.$lookupRTT = function(){
  return RTT.create($cls('ReceivePortImpl$Dart'), ReceivePortImpl$Dart.$RTTimplements);
}
;
ReceivePortImpl$Dart.$RTTimplements = function(rtt){
  ReceivePortImpl$Dart.$addTo(rtt);
}
;
ReceivePortImpl$Dart.$addTo = function(target){
  var rtt = ReceivePortImpl$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  ReceivePort$Dart.$addTo(target);
}
;
ReceivePortImpl$Dart.prototype.$implements$ReceivePortImpl$Dart = 1;
ReceivePortImpl$Dart.prototype.$implements$ReceivePort$Dart = 1;
ReceivePortImpl$Dart.prototype.$implements$Object$Dart = 1;
ReceivePortImpl$Dart.$Constructor = function(){
  Object.$Constructor.call(this);
  this._register$$member_(this._id$$getter_());
}
;
ReceivePortImpl$Dart.$Initializer = function(){
  var tmp$1, tmp$0;
  Object.$Initializer.call(this);
  this._callback$$field_ = $Dart$Null;
  this._id$$field_ = (tmp$0 = ReceivePortImpl$Dart._nextFreeId$$getter_() , (ReceivePortImpl$Dart._nextFreeId$$setter_(tmp$1 = ADD$operator(tmp$0, 1)) , tmp$1 , tmp$0));
}
;
ReceivePortImpl$Dart.ReceivePortImpl$$Factory = function(){
  var tmp$0 = new ReceivePortImpl$Dart;
  tmp$0.$typeInfo = ReceivePortImpl$Dart.$lookupRTT();
  ReceivePortImpl$Dart.$Initializer.call(tmp$0);
  ReceivePortImpl$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
ReceivePortImpl$Dart.prototype.receive$member = function(onMessage){
  var tmp$0;
  this._callback$$setter_(tmp$0 = onMessage) , tmp$0;
}
;
ReceivePortImpl$Dart.prototype.receive$named = function($n, $o, onMessage){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return ReceivePortImpl$Dart.prototype.receive$member.call(this, onMessage);
}
;
ReceivePortImpl$Dart.prototype.receive$getter = function receive$getter(){
  return $bind(ReceivePortImpl$Dart.prototype.receive$named, this);
}
;
ReceivePortImpl$Dart.prototype.close$member = function(){
  var tmp$0;
  this._callback$$setter_(tmp$0 = $Dart$Null) , tmp$0;
  this._unregister$$member_(this._id$$getter_());
}
;
ReceivePortImpl$Dart.prototype.close$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return ReceivePortImpl$Dart.prototype.close$member.call(this);
}
;
ReceivePortImpl$Dart.prototype.close$getter = function close$getter(){
  return $bind(ReceivePortImpl$Dart.prototype.close$named, this);
}
;
ReceivePortImpl$Dart.prototype.toSendPort$member = function(){
  return this._toNewSendPort$$member_();
}
;
ReceivePortImpl$Dart.prototype.toSendPort$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return ReceivePortImpl$Dart.prototype.toSendPort$member.call(this);
}
;
ReceivePortImpl$Dart.prototype.toSendPort$getter = function toSendPort$getter(){
  return $bind(ReceivePortImpl$Dart.prototype.toSendPort$named, this);
}
;
ReceivePortImpl$Dart.prototype._toNewSendPort$$member_ = function(){
  return SendPortImpl$Dart.SendPortImpl$$Factory(ReceivePortImpl$Dart._currentWorkerId$$member_(), ReceivePortImpl$Dart._currentIsolateId$$member_(), this._id$$getter_());
}
;
ReceivePortImpl$Dart.prototype._toNewSendPort$$named_ = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return ReceivePortImpl$Dart.prototype._toNewSendPort$$member_.call(this);
}
;
ReceivePortImpl$Dart.prototype._toNewSendPort$$getter_ = function _toNewSendPort$$getter_(){
  return $bind(ReceivePortImpl$Dart.prototype._toNewSendPort$$named_, this);
}
;
ReceivePortImpl$Dart.prototype._id$$named_ = function(){
  return this._id$$getter_().apply(this, arguments);
}
;
ReceivePortImpl$Dart.prototype._id$$getter_ = function(){
  return this._id$$field_;
}
;
ReceivePortImpl$Dart.prototype._id$$setter_ = function(tmp$0){
  this._id$$field_ = tmp$0;
}
;
ReceivePortImpl$Dart.prototype._callback$$named_ = function(){
  return this._callback$$getter_().apply(this, arguments);
}
;
ReceivePortImpl$Dart.prototype._callback$$getter_ = function(){
  var tmp$0 = this._callback$$field_;
  var tmp$1 = static$initializing;
  if (tmp$0 === tmp$1)
    throw 'circular initialization';
  if (tmp$0 !== static$uninitialized)
    return tmp$0;
  this._callback$$field_ = tmp$1;
  var tmp$2 = $Dart$Null;
  this._callback$$field_ = tmp$2;
  return tmp$2;
}
;
ReceivePortImpl$Dart.prototype._callback$$setter_ = function(tmp$0){
  this._callback$$field_ = tmp$0;
}
;
ReceivePortImpl$Dart._nextFreeId$$named_ = function(){
  return ReceivePortImpl$Dart._nextFreeId$$getter_().apply(this, arguments);
}
;
ReceivePortImpl$Dart._nextFreeId$$getter_ = function(){
  return isolate$current.ReceivePortImpl$Dart_nextFreeId$$field_;
}
;
ReceivePortImpl$Dart._nextFreeId$$setter_ = function(tmp$0){
  isolate$current.ReceivePortImpl$Dart_nextFreeId$$field_ = tmp$0;
}
;
ReceivePortImpl$Dart.prototype._register$$member_ = function(id){
  return native_ReceivePortImpl__register.call(this, id);
}
;
ReceivePortImpl$Dart.prototype._register$$named_ = function($n, $o, id){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return ReceivePortImpl$Dart.prototype._register$$member_.call(this, id);
}
;
ReceivePortImpl$Dart.prototype._register$$getter_ = function _register$$getter_(){
  return $bind(ReceivePortImpl$Dart.prototype._register$$named_, this);
}
;
ReceivePortImpl$Dart.prototype._unregister$$member_ = function(id){
  return native_ReceivePortImpl__unregister.call(this, id);
}
;
ReceivePortImpl$Dart.prototype._unregister$$named_ = function($n, $o, id){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return ReceivePortImpl$Dart.prototype._unregister$$member_.call(this, id);
}
;
ReceivePortImpl$Dart.prototype._unregister$$getter_ = function _unregister$$getter_(){
  return $bind(ReceivePortImpl$Dart.prototype._unregister$$named_, this);
}
;
ReceivePortImpl$Dart._currentWorkerId$$member_ = function(){
  return native_ReceivePortImpl__currentWorkerId();
}
;
ReceivePortImpl$Dart._currentWorkerId$$named_ = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return ReceivePortImpl$Dart._currentWorkerId$$member_();
}
;
ReceivePortImpl$Dart._currentWorkerId$$getter_ = function _currentWorkerId$$getter_(){
  return ReceivePortImpl$Dart._currentWorkerId$$named_;
}
;
ReceivePortImpl$Dart._currentIsolateId$$member_ = function(){
  return native_ReceivePortImpl__currentIsolateId();
}
;
ReceivePortImpl$Dart._currentIsolateId$$named_ = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return ReceivePortImpl$Dart._currentIsolateId$$member_();
}
;
ReceivePortImpl$Dart._currentIsolateId$$getter_ = function _currentIsolateId$$getter_(){
  return ReceivePortImpl$Dart._currentIsolateId$$named_;
}
;
ReceivePortImpl$Dart._invokeCallback$$member_ = function(port, message, replyTo){
  if (port._callback$$getter_() != null) {
    port._callback$$getter_()(2, $noargs, message, replyTo);
  }
}
;
ReceivePortImpl$Dart._invokeCallback$$named_ = function($n, $o, port, message, replyTo){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return ReceivePortImpl$Dart._invokeCallback$$member_(port, message, replyTo);
}
;
function native_ReceivePortImpl__invokeCallback(port, message, replyTo){
  return ReceivePortImpl$Dart._invokeCallback$$member_(port, message, replyTo);
}

ReceivePortImpl$Dart._invokeCallback$$getter_ = function _invokeCallback$$getter_(){
  return ReceivePortImpl$Dart._invokeCallback$$named_;
}
;
ReceivePortImpl$Dart._getId$$member_ = function(port){
  return port._id$$getter_();
}
;
ReceivePortImpl$Dart._getId$$named_ = function($n, $o, port){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return ReceivePortImpl$Dart._getId$$member_(port);
}
;
function native_ReceivePortImpl__getId(port){
  return ReceivePortImpl$Dart._getId$$member_(port);
}

ReceivePortImpl$Dart._getId$$getter_ = function _getId$$getter_(){
  return ReceivePortImpl$Dart._getId$$named_;
}
;
ReceivePortImpl$Dart._getCallback$$member_ = function(port){
  return port._callback$$getter_();
}
;
ReceivePortImpl$Dart._getCallback$$named_ = function($n, $o, port){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return ReceivePortImpl$Dart._getCallback$$member_(port);
}
;
function native_ReceivePortImpl__getCallback(port){
  return ReceivePortImpl$Dart._getCallback$$member_(port);
}

ReceivePortImpl$Dart._getCallback$$getter_ = function _getCallback$$getter_(){
  return ReceivePortImpl$Dart._getCallback$$named_;
}
;
