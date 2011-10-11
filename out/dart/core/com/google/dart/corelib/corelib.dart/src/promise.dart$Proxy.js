function Proxy$Dart(){
}

Proxy$Dart.$lookupRTT = function(){
  return RTT.create($cls('Proxy$Dart'), Proxy$Dart.$RTTimplements);
}
;
Proxy$Dart.$RTTimplements = function(rtt){
  Proxy$Dart.$addTo(rtt);
}
;
Proxy$Dart.$addTo = function(target){
  var rtt = Proxy$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  ProxyImpl$Dart.$addTo(target);
}
;
Proxy$Dart.prototype.$implements$Proxy$Dart = 1;
Proxy$Dart.prototype.$implements$ProxyImpl$Dart = 1;
Proxy$Dart.prototype.$implements$Object$Dart = 1;
$inherits(Proxy$Dart, ProxyImpl$Dart);
Proxy$Dart.forPort$Constructor = function(port){
  ProxyImpl$Dart.forPort$Constructor.call(this, port);
}
;
Proxy$Dart.forPort$Initializer = function(port){
  ProxyImpl$Dart.forPort$Initializer.call(this, port);
}
;
Proxy$Dart.Proxy$forPort$5$Factory = function(port){
  var tmp$0 = new Proxy$Dart;
  tmp$0.$typeInfo = Proxy$Dart.$lookupRTT();
  Proxy$Dart.forPort$Initializer.call(tmp$0, port);
  Proxy$Dart.forPort$Constructor.call(tmp$0, port);
  return tmp$0;
}
;
Proxy$Dart.forIsolate$Constructor = function(isolate){
  Proxy$Dart._forIsolateWithPromise$$Constructor_.call(this, isolate, PromiseImpl$Dart.PromiseImpl$$Factory(PromiseImpl$Dart.$lookupRTT([SendPort$Dart.$lookupRTT()])));
}
;
Proxy$Dart.forIsolate$Initializer = function(isolate){
  Proxy$Dart._forIsolateWithPromise$$Initializer_.call(this, isolate, PromiseImpl$Dart.PromiseImpl$$Factory(PromiseImpl$Dart.$lookupRTT([SendPort$Dart.$lookupRTT()])));
}
;
Proxy$Dart.Proxy$forIsolate$5$Factory = function(isolate){
  var tmp$0 = new Proxy$Dart;
  tmp$0.$typeInfo = Proxy$Dart.$lookupRTT();
  Proxy$Dart.forIsolate$Initializer.call(tmp$0, isolate);
  Proxy$Dart.forIsolate$Constructor.call(tmp$0, isolate);
  return tmp$0;
}
;
function Proxy$Dart$_forIsolateWithPromise$c0$10_10$HoistedConstructor(dartc_scp$0, port){
  dartc_scp$0.promise.complete$named(1, $noargs, port);
}

function Proxy$Dart$_forIsolateWithPromise$c0$10_10$HoistedConstructor$named($s0, $n, $o, port){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return Proxy$Dart$_forIsolateWithPromise$c0$10_10$HoistedConstructor($s0, port);
}

Proxy$Dart._forIsolateWithPromise$$Constructor_ = function(isolate, promise){
  var dartc_scp$0 = {promise:promise};
  ProxyImpl$Dart.forReply$Constructor.call(this, dartc_scp$0.promise);
  isolate.spawn$named(0, $noargs).then$named(1, $noargs, $bind(Proxy$Dart$_forIsolateWithPromise$c0$10_10$HoistedConstructor$named, $Dart$Null, dartc_scp$0));
}
;
Proxy$Dart._forIsolateWithPromise$$Initializer_ = function(isolate, promise){
  var dartc_scp$0 = {promise:promise};
  ProxyImpl$Dart.forReply$Initializer.call(this, dartc_scp$0.promise);
}
;
Proxy$Dart.Proxy$_forIsolateWithPromise$5$$Factory_ = function(isolate, promise){
  var tmp$0 = new Proxy$Dart;
  tmp$0.$typeInfo = Proxy$Dart.$lookupRTT();
  Proxy$Dart._forIsolateWithPromise$$Initializer_.call(tmp$0, isolate, promise);
  Proxy$Dart._forIsolateWithPromise$$Constructor_.call(tmp$0, isolate, promise);
  return tmp$0;
}
;
Proxy$Dart.forReply$Constructor = function(port){
  ProxyImpl$Dart.forReply$Constructor.call(this, port);
}
;
Proxy$Dart.forReply$Initializer = function(port){
  ProxyImpl$Dart.forReply$Initializer.call(this, port);
}
;
Proxy$Dart.Proxy$forReply$5$Factory = function(port){
  var tmp$0 = new Proxy$Dart;
  tmp$0.$typeInfo = Proxy$Dart.$lookupRTT();
  Proxy$Dart.forReply$Initializer.call(tmp$0, port);
  Proxy$Dart.forReply$Constructor.call(tmp$0, port);
  return tmp$0;
}
;
