function PromiseQueue$Dart(){
}

PromiseQueue$Dart.$lookupRTT = function(){
  return RTT.create($cls('PromiseQueue$Dart'));
}
;
PromiseQueue$Dart.$addTo = function(target){
  var rtt = PromiseQueue$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
}
;
PromiseQueue$Dart.prototype.$implements$PromiseQueue$Dart = 1;
PromiseQueue$Dart.prototype.$implements$Object$Dart = 1;
function PromiseQueue$Dart$enqueue$c0$notifyResolved$17_7_2$Hoisted(dartc_scp$1, ignored){
  var tmp$0;
  assert(GT$operator(dartc_scp$1.unresolved, 0));
  tmp$0 = dartc_scp$1.unresolved , (dartc_scp$1.unresolved = SUB$operator(tmp$0, 1) , tmp$0);
}

function PromiseQueue$Dart$enqueue$c0$notifyResolved$17_7_2$Hoisted$named($s0, $n, $o, ignored){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return PromiseQueue$Dart$enqueue$c0$notifyResolved$17_7_2$Hoisted($s0, ignored);
}

function PromiseQueue$Dart$enqueue$c1$17_17$Hoisted(dartc_scp$1){
  if (GT$operator(dartc_scp$1.unresolved, 0)) {
    return false;
  }
  dartc_scp$1.result.complete$named(1, $noargs, $Dart$Null);
  return true;
}

function PromiseQueue$Dart$enqueue$c1$17_17$Hoisted$named($s0, $n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return PromiseQueue$Dart$enqueue$c1$17_17$Hoisted($s0);
}

PromiseQueue$Dart.enqueue$member = function(dependencies){
  var dartc_scp$1, tmp$0;
  dartc_scp$1 = {};
  if (PromiseQueue$Dart._queue$$getter_() == null) {
    PromiseQueue$Dart._queue$$setter_(tmp$0 = DoubleLinkedQueue$Dart.DoubleLinkedQueue$$Factory(DoubleLinkedQueue$Dart.$lookupRTT([Function$Dart.$lookupRTT()]))) , tmp$0;
  }
  dartc_scp$1.unresolved = dependencies.length$getter();
  var notifyResolved = $bind(PromiseQueue$Dart$enqueue$c0$notifyResolved$17_7_2$Hoisted$named, $Dart$Null, dartc_scp$1);
  {
    var $1 = dependencies.iterator$named(0, $noargs);
    while ($1.hasNext$named(0, $noargs)) {
      var promise = $1.next$named(0, $noargs);
      {
        promise.then$named(1, $noargs, notifyResolved);
      }
    }
  }
  dartc_scp$1.result = PromiseImpl$Dart.PromiseImpl$$Factory(PromiseImpl$Dart.$lookupRTT());
  PromiseQueue$Dart._queue$$getter_().addLast$named(1, $noargs, $bind(PromiseQueue$Dart$enqueue$c1$17_17$Hoisted$named, $Dart$Null, dartc_scp$1));
  PromiseQueue$Dart.process$member();
  return dartc_scp$1.result;
  dartc_scp$1 = $Dart$Null;
}
;
PromiseQueue$Dart.enqueue$named = function($n, $o, dependencies){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return PromiseQueue$Dart.enqueue$member(dependencies);
}
;
PromiseQueue$Dart.enqueue$getter = function enqueue$getter(){
  return PromiseQueue$Dart.enqueue$named;
}
;
PromiseQueue$Dart.isEmpty$member = function(){
  return PromiseQueue$Dart._queue$$getter_() == null?true:PromiseQueue$Dart._queue$$getter_().isEmpty$named(0, $noargs);
}
;
PromiseQueue$Dart.isEmpty$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return PromiseQueue$Dart.isEmpty$member();
}
;
PromiseQueue$Dart.isEmpty$getter = function isEmpty$getter(){
  return PromiseQueue$Dart.isEmpty$named;
}
;
PromiseQueue$Dart.process$member = function(){
  if (PromiseQueue$Dart._queue$$getter_() == null) {
    return;
  }
  while (!PromiseQueue$Dart._queue$$getter_().isEmpty$named(0, $noargs) && PromiseQueue$Dart._queue$$getter_().first$named(0, $noargs)(0, $noargs)) {
    PromiseQueue$Dart._queue$$getter_().removeFirst$named(0, $noargs);
  }
}
;
PromiseQueue$Dart.process$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return PromiseQueue$Dart.process$member();
}
;
PromiseQueue$Dart.process$getter = function process$getter(){
  return PromiseQueue$Dart.process$named;
}
;
PromiseQueue$Dart._queue$$named_ = function(){
  return PromiseQueue$Dart._queue$$getter_().apply(this, arguments);
}
;
PromiseQueue$Dart._queue$$getter_ = function(){
  return isolate$current.PromiseQueue$Dart_queue$$field_;
}
;
PromiseQueue$Dart._queue$$setter_ = function(tmp$0){
  isolate$current.PromiseQueue$Dart_queue$$field_ = tmp$0;
}
;
PromiseQueue$Dart.$Constructor = function(){
  Object.$Constructor.call(this);
}
;
PromiseQueue$Dart.$Initializer = function(){
  Object.$Initializer.call(this);
}
;
PromiseQueue$Dart.PromiseQueue$$Factory = function(){
  var tmp$0 = new PromiseQueue$Dart;
  tmp$0.$typeInfo = PromiseQueue$Dart.$lookupRTT();
  PromiseQueue$Dart.$Initializer.call(tmp$0);
  PromiseQueue$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
