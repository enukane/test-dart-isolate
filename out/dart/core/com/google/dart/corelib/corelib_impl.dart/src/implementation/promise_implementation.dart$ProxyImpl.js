function ProxyImpl$Dart(){
}

ProxyImpl$Dart.$lookupRTT = function(){
  return RTT.create($cls('ProxyImpl$Dart'));
}
;
ProxyImpl$Dart.$addTo = function(target){
  var rtt = ProxyImpl$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
}
;
ProxyImpl$Dart.prototype.$implements$ProxyImpl$Dart = 1;
ProxyImpl$Dart.prototype.$implements$Object$Dart = 1;
ProxyImpl$Dart.forPort$Constructor = function(port){
  Object.$Constructor.call(this);
  var tmp$0;
  this._promise$$setter_(tmp$0 = PromiseImpl$Dart.PromiseImpl$$Factory(PromiseImpl$Dart.$lookupRTT([SendPort$Dart.$lookupRTT()]))) , tmp$0;
  this._promise$$getter_().complete$named(1, $noargs, port);
}
;
ProxyImpl$Dart.forPort$Initializer = function(port){
  Object.$Initializer.call(this);
}
;
ProxyImpl$Dart.ProxyImpl$forPort$9$Factory = function(port){
  var tmp$0 = new ProxyImpl$Dart;
  tmp$0.$typeInfo = ProxyImpl$Dart.$lookupRTT();
  ProxyImpl$Dart.forPort$Initializer.call(tmp$0, port);
  ProxyImpl$Dart.forPort$Constructor.call(tmp$0, port);
  return tmp$0;
}
;
ProxyImpl$Dart.forReply$Constructor = function(port){
  Object.$Constructor.call(this);
  var tmp$0;
  this._promise$$setter_(tmp$0 = port) , tmp$0;
}
;
ProxyImpl$Dart.forReply$Initializer = function(port){
  Object.$Initializer.call(this);
}
;
ProxyImpl$Dart.ProxyImpl$forReply$9$Factory = function(port){
  var tmp$0 = new ProxyImpl$Dart;
  tmp$0.$typeInfo = ProxyImpl$Dart.$lookupRTT();
  ProxyImpl$Dart.forReply$Initializer.call(tmp$0, port);
  ProxyImpl$Dart.forReply$Constructor.call(tmp$0, port);
  return tmp$0;
}
;
ProxyImpl$Dart.register$member = function(dispatcher){
  var tmp$1, tmp$0;
  if (ProxyImpl$Dart._dispatchers$$getter_() == null) {
    ProxyImpl$Dart._dispatchers$$setter_(tmp$0 = HashMapImplementation$Dart.HashMapImplementation$$Factory(HashMapImplementation$Dart.$lookupRTT([SendPort$Dart.$lookupRTT(), Dispatcher$Dart.$lookupRTT()]))) , tmp$0;
  }
  var result = ReceivePortFactory$Dart.ReceivePort$$Factory();
  ProxyImpl$Dart._dispatchers$$getter_().ASSIGN_INDEX$operator(result.toSendPort$named(0, $noargs), tmp$1 = dispatcher) , tmp$1;
  return result;
}
;
ProxyImpl$Dart.register$named = function($n, $o, dispatcher){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return ProxyImpl$Dart.register$member(dispatcher);
}
;
ProxyImpl$Dart.register$getter = function register$getter(){
  return ProxyImpl$Dart.register$named;
}
;
ProxyImpl$Dart.prototype.local$named = function(){
  return this.local$getter().apply(this, arguments);
}
;
ProxyImpl$Dart.prototype.local$getter = function(){
  if (ProxyImpl$Dart._dispatchers$$getter_() != null) {
    var dispatcher = ProxyImpl$Dart._dispatchers$$getter_().INDEX$operator(this._promise$$getter_().value$getter());
    if (dispatcher != null) {
      return dispatcher.target$getter();
    }
  }
  $Dart$ThrowException('Cannot access object of non-local proxy.');
}
;
function ProxyImpl$Dart$send$c0$14_14$Hoisted(marshalled){
  var port = this._promise$$getter_().value$getter();
  port._sendNow$$named_(2, $noargs, marshalled, $Dart$Null);
}

function ProxyImpl$Dart$send$c0$14_14$Hoisted$named($n, $o, marshalled){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return ProxyImpl$Dart$send$c0$14_14$Hoisted.call(this, marshalled);
}

ProxyImpl$Dart.prototype.send$member = function(message){
  this._marshal$$member_(message, $bind(ProxyImpl$Dart$send$c0$14_14$Hoisted$named, this));
}
;
ProxyImpl$Dart.prototype.send$named = function($n, $o, message){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return ProxyImpl$Dart.prototype.send$member.call(this, message);
}
;
ProxyImpl$Dart.prototype.send$getter = function send$getter(){
  return $bind(ProxyImpl$Dart.prototype.send$named, this);
}
;
function ProxyImpl$Dart$call$c0$14_14$Hoisted(dartc_scp$4, message_0, replyTo){
  dartc_scp$4.result.complete$named(1, $noargs, message_0.INDEX$operator(0));
}

function ProxyImpl$Dart$call$c0$14_14$Hoisted$named($s0, $n, $o, message, replyTo){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return ProxyImpl$Dart$call$c0$14_14$Hoisted($s0, message, replyTo);
}

function ProxyImpl$Dart$call$c1$14_14$Hoisted(marshalled){
  var dartc_scp$4;
  dartc_scp$4 = {};
  dartc_scp$4.result = PromiseImpl$Dart.PromiseImpl$$Factory(PromiseImpl$Dart.$lookupRTT());
  var outgoing = this._promise$$getter_().value$getter();
  var incoming = outgoing._callNow$$named_(1, $noargs, marshalled);
  incoming.receive$named(1, $noargs, $bind(ProxyImpl$Dart$call$c0$14_14$Hoisted$named, $Dart$Null, dartc_scp$4));
  return dartc_scp$4.result;
  dartc_scp$4 = $Dart$Null;
}

function ProxyImpl$Dart$call$c1$14_14$Hoisted$named($n, $o, marshalled){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return ProxyImpl$Dart$call$c1$14_14$Hoisted.call(this, marshalled);
}

ProxyImpl$Dart.prototype.call$member = function(message){
  return this._marshal$$member_(message, $bind(ProxyImpl$Dart$call$c1$14_14$Hoisted$named, this));
}
;
ProxyImpl$Dart.prototype.call$named = function($n, $o, message){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return ProxyImpl$Dart.prototype.call$member.call(this, message);
}
;
ProxyImpl$Dart.prototype.call$getter = function call$getter(){
  return $bind(ProxyImpl$Dart.prototype.call$named, this);
}
;
ProxyImpl$Dart.prototype.EQ$operator = function(other){
  return this === other;
}
;
ProxyImpl$Dart.prototype.hashCode$member = function(){
  return 0;
}
;
ProxyImpl$Dart.prototype.hashCode$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return ProxyImpl$Dart.prototype.hashCode$member.call(this);
}
;
ProxyImpl$Dart.prototype.hashCode$getter = function hashCode$getter(){
  return $bind(ProxyImpl$Dart.prototype.hashCode$named, this);
}
;
function ProxyImpl$Dart$_marshal$c0$14_14$Hoisted(dartc_scp$0, dartc_scp$1, ignored){
  var tmp$1, tmp$2, tmp$3, tmp$4, tmp$0;
  {
    var i_0 = 0;
    for (; LT$operator(i_0, dartc_scp$1.marshalled_0.length$getter()); tmp$0 = i_0 , (i_0 = ADD$operator(tmp$0, 1) , tmp$0)) {
      var entry_0 = dartc_scp$1.marshalled_0.INDEX$operator(i_0);
      if (!!(tmp$1 = entry_0 , tmp$1 != null && tmp$1.$implements$Proxy$Dart)) {
        dartc_scp$1.marshalled_0.ASSIGN_INDEX$operator(i_0, tmp$2 = entry_0._promise$$getter_().value$getter()) , tmp$2;
      }
       else {
        if (!!(tmp$3 = entry_0 , tmp$3 != null && tmp$3.$implements$Promise$Dart)) {
          dartc_scp$1.marshalled_0.ASSIGN_INDEX$operator(i_0, tmp$4 = entry_0.value$getter()) , tmp$4;
        }
      }
    }
  }
  return dartc_scp$0.process(1, $noargs, dartc_scp$1.marshalled_0);
}

function ProxyImpl$Dart$_marshal$c0$14_14$Hoisted$named($s0, $s1, $n, $o, ignored){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return ProxyImpl$Dart$_marshal$c0$14_14$Hoisted($s0, $s1, ignored);
}

ProxyImpl$Dart.prototype._marshal$$member_ = function(message, process){
  var dartc_scp$0 = {process:process};
  var dartc_scp$1, tmp$1, tmp$2, tmp$3, tmp$0;
  dartc_scp$1 = {};
  var promises = ListFactory$Dart.List$$Factory([Promise$Dart.$lookupRTT()], $Dart$Null);
  promises.add$named(1, $noargs, this._promise$$getter_());
  dartc_scp$1.marshalled_0 = ListFactory$Dart.List$$Factory(null, message.length$getter());
  {
    var i = 0;
    for (; LT$operator(i, dartc_scp$1.marshalled_0.length$getter()); tmp$0 = i , (i = ADD$operator(tmp$0, 1) , tmp$0)) {
      var entry = message.INDEX$operator(i);
      dartc_scp$1.marshalled_0.ASSIGN_INDEX$operator(i, tmp$1 = entry) , tmp$1;
      if (!!(tmp$2 = entry , tmp$2 != null && tmp$2.$implements$Proxy$Dart)) {
        promises.add$named(1, $noargs, entry._promise$$getter_());
      }
       else {
        if (!!(tmp$3 = entry , tmp$3 != null && tmp$3.$implements$Promise$Dart)) {
          promises.add$named(1, $noargs, entry);
        }
      }
    }
  }
  return PromiseQueue$Dart.enqueue$member(promises).then$named(1, $noargs, $bind(ProxyImpl$Dart$_marshal$c0$14_14$Hoisted$named, $Dart$Null, dartc_scp$0, dartc_scp$1)).flatten$named(0, $noargs);
  dartc_scp$1 = $Dart$Null;
}
;
ProxyImpl$Dart.prototype._marshal$$named_ = function($n, $o, message, process){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return ProxyImpl$Dart.prototype._marshal$$member_.call(this, message, process);
}
;
ProxyImpl$Dart.prototype._marshal$$getter_ = function _marshal$$getter_(){
  return $bind(ProxyImpl$Dart.prototype._marshal$$named_, this);
}
;
ProxyImpl$Dart.prototype._promise$$named_ = function(){
  return this._promise$$getter_().apply(this, arguments);
}
;
ProxyImpl$Dart.prototype._promise$$getter_ = function(){
  return this._promise$$field_;
}
;
ProxyImpl$Dart.prototype._promise$$setter_ = function(tmp$0){
  this._promise$$field_ = tmp$0;
}
;
ProxyImpl$Dart._dispatchers$$named_ = function(){
  return ProxyImpl$Dart._dispatchers$$getter_().apply(this, arguments);
}
;
ProxyImpl$Dart._dispatchers$$getter_ = function(){
  return isolate$current.ProxyImpl$Dart_dispatchers$$field_;
}
;
ProxyImpl$Dart._dispatchers$$setter_ = function(tmp$0){
  isolate$current.ProxyImpl$Dart_dispatchers$$field_ = tmp$0;
}
;
