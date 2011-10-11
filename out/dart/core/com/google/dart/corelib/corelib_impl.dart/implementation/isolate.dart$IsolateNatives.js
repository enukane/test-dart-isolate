function IsolateNatives$Dart(){
}

IsolateNatives$Dart.$lookupRTT = function(){
  return RTT.create($cls('IsolateNatives$Dart'));
}
;
IsolateNatives$Dart.$addTo = function(target){
  var rtt = IsolateNatives$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
}
;
IsolateNatives$Dart.prototype.$implements$IsolateNatives$Dart = 1;
IsolateNatives$Dart.prototype.$implements$Object$Dart = 1;
function IsolateNatives$Dart$spawn$c0$19_19$Hoisted(dartc_scp$1, msg, replyPort){
  assert(EQ$operator(msg, _SPAWNED_SIGNAL$$getter_()));
  dartc_scp$1.result.complete$named(1, $noargs, replyPort);
}

function IsolateNatives$Dart$spawn$c0$19_19$Hoisted$named($s0, $n, $o, msg, replyPort){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return IsolateNatives$Dart$spawn$c0$19_19$Hoisted($s0, msg, replyPort);
}

IsolateNatives$Dart.spawn$member = function(isolate, isLight){
  var dartc_scp$1;
  dartc_scp$1 = {};
  dartc_scp$1.result = PromiseImpl$Dart.PromiseImpl$$Factory(PromiseImpl$Dart.$lookupRTT([SendPort$Dart.$lookupRTT()]));
  var port = ReceivePortFactory$Dart.ReceivePort$singleShot$11$Factory();
  port.receive$named(1, $noargs, $bind(IsolateNatives$Dart$spawn$c0$19_19$Hoisted$named, $Dart$Null, dartc_scp$1));
  IsolateNatives$Dart._spawn$$member_(isolate, isLight, port.toSendPort$named(0, $noargs));
  return dartc_scp$1.result;
  dartc_scp$1 = $Dart$Null;
}
;
IsolateNatives$Dart.spawn$named = function($n, $o, isolate, isLight){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return IsolateNatives$Dart.spawn$member(isolate, isLight);
}
;
IsolateNatives$Dart.spawn$getter = function spawn$getter(){
  return IsolateNatives$Dart.spawn$named;
}
;
IsolateNatives$Dart._spawn$$member_ = function(isolate, light, port){
  return native_IsolateNatives__spawn(isolate, light, port);
}
;
IsolateNatives$Dart._spawn$$named_ = function($n, $o, isolate, light, port){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return IsolateNatives$Dart._spawn$$member_(isolate, light, port);
}
;
IsolateNatives$Dart._spawn$$getter_ = function _spawn$$getter_(){
  return IsolateNatives$Dart._spawn$$named_;
}
;
IsolateNatives$Dart.bind$member = function(f){
  return native_IsolateNatives_bind(f);
}
;
IsolateNatives$Dart.bind$named = function($n, $o, f){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return IsolateNatives$Dart.bind$member(f);
}
;
IsolateNatives$Dart.bind$getter = function bind$getter(){
  return IsolateNatives$Dart.bind$named;
}
;
IsolateNatives$Dart.$Constructor = function(){
  Object.$Constructor.call(this);
}
;
IsolateNatives$Dart.$Initializer = function(){
  Object.$Initializer.call(this);
}
;
IsolateNatives$Dart.IsolateNatives$$Factory = function(){
  var tmp$0 = new IsolateNatives$Dart;
  tmp$0.$typeInfo = IsolateNatives$Dart.$lookupRTT();
  IsolateNatives$Dart.$Initializer.call(tmp$0);
  IsolateNatives$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
