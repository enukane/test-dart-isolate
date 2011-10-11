function Dispatcher$Dart(){
}

Dispatcher$Dart.$lookupRTT = function(typeArgs){
  return RTT.create($cls('Dispatcher$Dart'), null, typeArgs);
}
;
Dispatcher$Dart.$addTo = function(target, typeArgs){
  var rtt = Dispatcher$Dart.$lookupRTT(typeArgs);
  target.implementedTypes[rtt.classKey] = rtt;
}
;
Dispatcher$Dart.prototype.$implements$Dispatcher$Dart = 1;
Dispatcher$Dart.prototype.$implements$Object$Dart = 1;
Dispatcher$Dart.$Constructor = function(target){
  Object.$Constructor.call(this);
}
;
Dispatcher$Dart.$Initializer = function(target){
  Object.$Initializer.call(this);
  this.target$field = target;
}
;
Dispatcher$Dart.Dispatcher$$Factory = function($rtt, target){
  var tmp$0 = new Dispatcher$Dart;
  tmp$0.$typeInfo = $rtt;
  Dispatcher$Dart.$Initializer.call(tmp$0, target);
  Dispatcher$Dart.$Constructor.call(tmp$0, target);
  return tmp$0;
}
;
function Dispatcher$Dart$_serve$c0$reply$15_6_2$Hoisted(dartc_scp$3, response){
  var proxy = Proxy$Dart.Proxy$forPort$5$Factory(dartc_scp$3.replyTo);
  proxy.send$named(1, $noargs, RTT.setTypeInfo([response], Array.$lookupRTT()));
}

function Dispatcher$Dart$_serve$c0$reply$15_6_2$Hoisted$named($s0, $n, $o, response){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return Dispatcher$Dart$_serve$c0$reply$15_6_2$Hoisted($s0, response);
}

function Dispatcher$Dart$_serve$c1$15_15$Hoisted(message, replyTo){
  var dartc_scp$3 = {replyTo:replyTo};
  this.process$named(2, $noargs, message, $bind(Dispatcher$Dart$_serve$c0$reply$15_6_2$Hoisted$named, $Dart$Null, dartc_scp$3));
}

function Dispatcher$Dart$_serve$c1$15_15$Hoisted$named($n, $o, message, replyTo){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return Dispatcher$Dart$_serve$c1$15_15$Hoisted.call(this, message, replyTo);
}

Dispatcher$Dart.prototype._serve$$member_ = function(port){
  port.receive$named(1, $noargs, $bind(Dispatcher$Dart$_serve$c1$15_15$Hoisted$named, this));
}
;
Dispatcher$Dart.prototype._serve$$named_ = function($n, $o, port){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return Dispatcher$Dart.prototype._serve$$member_.call(this, port);
}
;
Dispatcher$Dart.prototype._serve$$getter_ = function _serve$$getter_(){
  return $bind(Dispatcher$Dart.prototype._serve$$named_, this);
}
;
Dispatcher$Dart.serve$member = function(dispatcher){
  var port = ProxyImpl$Dart.register$member(dispatcher);
  dispatcher._serve$$named_(1, $noargs, port);
  return port.toSendPort$named(0, $noargs);
}
;
Dispatcher$Dart.serve$named = function($n, $o, dispatcher){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return Dispatcher$Dart.serve$member(dispatcher);
}
;
Dispatcher$Dart.serve$getter = function serve$getter(){
  return Dispatcher$Dart.serve$named;
}
;
Dispatcher$Dart.prototype.process$member = function(message, reply){
  $Dart$ThrowException('Abstract method called');
}
;
Dispatcher$Dart.prototype.process$named = function($n, $o, message, reply){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return Dispatcher$Dart.prototype.process$member.call(this, message, reply);
}
;
Dispatcher$Dart.prototype.process$getter = function process$getter(){
  return $bind(Dispatcher$Dart.prototype.process$named, this);
}
;
Dispatcher$Dart.prototype.target$named = function(){
  return this.target$getter().apply(this, arguments);
}
;
Dispatcher$Dart.prototype.target$getter = function(){
  return this.target$field;
}
;
Dispatcher$Dart.prototype.target$setter = function(tmp$0){
  this.target$field = tmp$0;
}
;
