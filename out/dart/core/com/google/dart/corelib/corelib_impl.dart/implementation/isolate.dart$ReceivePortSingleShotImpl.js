function ReceivePortSingleShotImpl$Dart(){
}

ReceivePortSingleShotImpl$Dart.$lookupRTT = function(){
  return RTT.create($cls('ReceivePortSingleShotImpl$Dart'), ReceivePortSingleShotImpl$Dart.$RTTimplements);
}
;
ReceivePortSingleShotImpl$Dart.$RTTimplements = function(rtt){
  ReceivePortSingleShotImpl$Dart.$addTo(rtt);
}
;
ReceivePortSingleShotImpl$Dart.$addTo = function(target){
  var rtt = ReceivePortSingleShotImpl$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  ReceivePort$Dart.$addTo(target);
}
;
ReceivePortSingleShotImpl$Dart.prototype.$implements$ReceivePortSingleShotImpl$Dart = 1;
ReceivePortSingleShotImpl$Dart.prototype.$implements$ReceivePort$Dart = 1;
ReceivePortSingleShotImpl$Dart.prototype.$implements$Object$Dart = 1;
ReceivePortSingleShotImpl$Dart.$Constructor = function(){
  Object.$Constructor.call(this);
}
;
ReceivePortSingleShotImpl$Dart.$Initializer = function(){
  Object.$Initializer.call(this);
  this._port$$field_ = ReceivePortImpl$Dart.ReceivePortImpl$$Factory();
}
;
ReceivePortSingleShotImpl$Dart.ReceivePortSingleShotImpl$$Factory = function(){
  var tmp$0 = new ReceivePortSingleShotImpl$Dart;
  tmp$0.$typeInfo = ReceivePortSingleShotImpl$Dart.$lookupRTT();
  ReceivePortSingleShotImpl$Dart.$Initializer.call(tmp$0);
  ReceivePortSingleShotImpl$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
function ReceivePortSingleShotImpl$Dart$receive$c0$30_30$Hoisted(dartc_scp$0, message_0, replyTo_0){
  this._port$$getter_().close$named(0, $noargs);
  dartc_scp$0.callback(2, $noargs, message_0, replyTo_0);
}

function ReceivePortSingleShotImpl$Dart$receive$c0$30_30$Hoisted$named($s0, $n, $o, message, replyTo){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return ReceivePortSingleShotImpl$Dart$receive$c0$30_30$Hoisted.call(this, $s0, message, replyTo);
}

ReceivePortSingleShotImpl$Dart.prototype.receive$member = function(callback){
  var dartc_scp$0 = {callback:callback};
  this._port$$getter_().receive$named(1, $noargs, $bind(ReceivePortSingleShotImpl$Dart$receive$c0$30_30$Hoisted$named, this, dartc_scp$0));
}
;
ReceivePortSingleShotImpl$Dart.prototype.receive$named = function($n, $o, callback){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return ReceivePortSingleShotImpl$Dart.prototype.receive$member.call(this, callback);
}
;
ReceivePortSingleShotImpl$Dart.prototype.receive$getter = function receive$getter(){
  return $bind(ReceivePortSingleShotImpl$Dart.prototype.receive$named, this);
}
;
ReceivePortSingleShotImpl$Dart.prototype.close$member = function(){
  this._port$$getter_().close$named(0, $noargs);
}
;
ReceivePortSingleShotImpl$Dart.prototype.close$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return ReceivePortSingleShotImpl$Dart.prototype.close$member.call(this);
}
;
ReceivePortSingleShotImpl$Dart.prototype.close$getter = function close$getter(){
  return $bind(ReceivePortSingleShotImpl$Dart.prototype.close$named, this);
}
;
ReceivePortSingleShotImpl$Dart.prototype.toSendPort$member = function(){
  return this._toNewSendPort$$member_();
}
;
ReceivePortSingleShotImpl$Dart.prototype.toSendPort$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return ReceivePortSingleShotImpl$Dart.prototype.toSendPort$member.call(this);
}
;
ReceivePortSingleShotImpl$Dart.prototype.toSendPort$getter = function toSendPort$getter(){
  return $bind(ReceivePortSingleShotImpl$Dart.prototype.toSendPort$named, this);
}
;
ReceivePortSingleShotImpl$Dart.prototype._toNewSendPort$$member_ = function(){
  return this._port$$getter_()._toNewSendPort$$named_(0, $noargs);
}
;
ReceivePortSingleShotImpl$Dart.prototype._toNewSendPort$$named_ = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return ReceivePortSingleShotImpl$Dart.prototype._toNewSendPort$$member_.call(this);
}
;
ReceivePortSingleShotImpl$Dart.prototype._toNewSendPort$$getter_ = function _toNewSendPort$$getter_(){
  return $bind(ReceivePortSingleShotImpl$Dart.prototype._toNewSendPort$$named_, this);
}
;
ReceivePortSingleShotImpl$Dart.prototype._port$$named_ = function(){
  return this._port$$getter_().apply(this, arguments);
}
;
ReceivePortSingleShotImpl$Dart.prototype._port$$getter_ = function(){
  return this._port$$field_;
}
;
