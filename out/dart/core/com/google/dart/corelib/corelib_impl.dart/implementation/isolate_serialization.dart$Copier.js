function Copier$Dart(){
}

Copier$Dart.$lookupRTT = function(){
  return RTT.create($cls('Copier$Dart'), Copier$Dart.$RTTimplements);
}
;
Copier$Dart.$RTTimplements = function(rtt){
  Copier$Dart.$addTo(rtt);
}
;
Copier$Dart.$addTo = function(target){
  var rtt = Copier$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  MessageTraverser$Dart.$addTo(target);
}
;
Copier$Dart.prototype.$implements$Copier$Dart = 1;
Copier$Dart.prototype.$implements$MessageTraverser$Dart = 1;
Copier$Dart.prototype.$implements$Object$Dart = 1;
$inherits(Copier$Dart, MessageTraverser$Dart);
Copier$Dart.$Constructor = function(){
  MessageTraverser$Dart.$Constructor.call(this);
}
;
Copier$Dart.$Initializer = function(){
  MessageTraverser$Dart.$Initializer.call(this);
}
;
Copier$Dart.Copier$$Factory = function(){
  var tmp$0 = new Copier$Dart;
  tmp$0.$typeInfo = Copier$Dart.$lookupRTT();
  Copier$Dart.$Initializer.call(tmp$0);
  Copier$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
Copier$Dart.prototype.visitPrimitive$member = function(x){
  return x;
}
;
Copier$Dart.prototype.visitPrimitive$named = function($n, $o, x){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return Copier$Dart.prototype.visitPrimitive$member.call(this, x);
}
;
Copier$Dart.prototype.visitPrimitive$getter = function visitPrimitive$getter(){
  return $bind(Copier$Dart.prototype.visitPrimitive$named, this);
}
;
Copier$Dart.prototype.visitList$member = function(list){
  var tmp$1, tmp$0;
  var copy = this._getInfo$$member_(list);
  if (copy != null) {
    return copy;
  }
  var len = list.length$getter();
  copy = ListFactory$Dart.List$$Factory(null, len);
  this._attachInfo$$member_(list, copy);
  {
    var i = 0;
    for (; LT$operator(i, len); tmp$0 = i , (i = ADD$operator(tmp$0, 1) , tmp$0)) {
      copy.ASSIGN_INDEX$operator(i, tmp$1 = this._dispatch$$member_(list.INDEX$operator(i))) , tmp$1;
    }
  }
  return copy;
}
;
Copier$Dart.prototype.visitList$named = function($n, $o, list){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return Copier$Dart.prototype.visitList$member.call(this, list);
}
;
Copier$Dart.prototype.visitList$getter = function visitList$getter(){
  return $bind(Copier$Dart.prototype.visitList$named, this);
}
;
function Copier$Dart$visitMap$c0$11_11$Hoisted(dartc_scp$1, key, val){
  var tmp$0;
  dartc_scp$1.copy.ASSIGN_INDEX$operator(this._dispatch$$member_(key), tmp$0 = this._dispatch$$member_(val)) , tmp$0;
}

function Copier$Dart$visitMap$c0$11_11$Hoisted$named($s0, $n, $o, key, val){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return Copier$Dart$visitMap$c0$11_11$Hoisted.call(this, $s0, key, val);
}

Copier$Dart.prototype.visitMap$member = function(map){
  var dartc_scp$1;
  dartc_scp$1 = {};
  dartc_scp$1.copy = this._getInfo$$member_(map);
  if (dartc_scp$1.copy != null) {
    return dartc_scp$1.copy;
  }
  dartc_scp$1.copy = HashMapImplementation$Dart.HashMapImplementation$$Factory(HashMapImplementation$Dart.$lookupRTT());
  this._attachInfo$$member_(map, dartc_scp$1.copy);
  map.forEach$named(1, $noargs, $bind(Copier$Dart$visitMap$c0$11_11$Hoisted$named, this, dartc_scp$1));
  return dartc_scp$1.copy;
  dartc_scp$1 = $Dart$Null;
}
;
Copier$Dart.prototype.visitMap$named = function($n, $o, map){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return Copier$Dart.prototype.visitMap$member.call(this, map);
}
;
Copier$Dart.prototype.visitMap$getter = function visitMap$getter(){
  return $bind(Copier$Dart.prototype.visitMap$named, this);
}
;
Copier$Dart.prototype.visitSendPort$member = function(port){
  return SendPortImpl$Dart.SendPortImpl$$Factory(port._workerId$$getter_(), port._isolateId$$getter_(), port._receivePortId$$getter_());
}
;
Copier$Dart.prototype.visitSendPort$named = function($n, $o, port){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return Copier$Dart.prototype.visitSendPort$member.call(this, port);
}
;
Copier$Dart.prototype.visitSendPort$getter = function visitSendPort$getter(){
  return $bind(Copier$Dart.prototype.visitSendPort$named, this);
}
;
Copier$Dart.prototype.visitReceivePort$member = function(port){
  return port._toNewSendPort$$named_(0, $noargs);
}
;
Copier$Dart.prototype.visitReceivePort$named = function($n, $o, port){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return Copier$Dart.prototype.visitReceivePort$member.call(this, port);
}
;
Copier$Dart.prototype.visitReceivePort$getter = function visitReceivePort$getter(){
  return $bind(Copier$Dart.prototype.visitReceivePort$named, this);
}
;
Copier$Dart.prototype.visitReceivePortSingleShot$member = function(port){
  return port._toNewSendPort$$named_(0, $noargs);
}
;
Copier$Dart.prototype.visitReceivePortSingleShot$named = function($n, $o, port){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return Copier$Dart.prototype.visitReceivePortSingleShot$member.call(this, port);
}
;
Copier$Dart.prototype.visitReceivePortSingleShot$getter = function visitReceivePortSingleShot$getter(){
  return $bind(Copier$Dart.prototype.visitReceivePortSingleShot$named, this);
}
;
