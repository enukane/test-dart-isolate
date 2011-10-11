function HashSetImplementation$Dart(){
}

HashSetImplementation$Dart.$lookupRTT = function(typeArgs){
  return RTT.create($cls('HashSetImplementation$Dart'), HashSetImplementation$Dart.$RTTimplements, typeArgs);
}
;
HashSetImplementation$Dart.$RTTimplements = function(rtt, typeArgs){
  HashSetImplementation$Dart.$addTo(rtt, typeArgs);
  rtt.derivedTypes = [];
}
;
HashSetImplementation$Dart.$addTo = function(target, typeArgs){
  var rtt = HashSetImplementation$Dart.$lookupRTT(typeArgs);
  target.implementedTypes[rtt.classKey] = rtt;
  HashSet$Dart.$addTo(target, [RTT.getTypeArg(target.typeArgs, 0)]);
}
;
HashSetImplementation$Dart.prototype.$implements$HashSetImplementation$Dart = 1;
HashSetImplementation$Dart.prototype.$implements$HashSet$Dart = 1;
HashSetImplementation$Dart.prototype.$implements$Set$Dart = 1;
HashSetImplementation$Dart.prototype.$implements$Collection$Dart = 1;
HashSetImplementation$Dart.prototype.$implements$Iterable$Dart = 1;
HashSetImplementation$Dart.prototype.$implements$Object$Dart = 1;
HashSetImplementation$Dart.$Constructor = function(){
  Object.$Constructor.call(this);
  var tmp$0;
  this._backingMap$$setter_(tmp$0 = HashMapImplementation$Dart.HashMapImplementation$$Factory(HashMapImplementation$Dart.$lookupRTT([RTT.getTypeArg(RTT.getTypeArgsFor(this, $cls('HashSetImplementation$Dart')), 0), RTT.getTypeArg(RTT.getTypeArgsFor(this, $cls('HashSetImplementation$Dart')), 0)]))) , tmp$0;
}
;
HashSetImplementation$Dart.$Initializer = function(){
  Object.$Initializer.call(this);
}
;
HashSetImplementation$Dart.HashSetImplementation$$Factory = function($rtt){
  var tmp$0 = new HashSetImplementation$Dart;
  tmp$0.$typeInfo = $rtt;
  HashSetImplementation$Dart.$Initializer.call(tmp$0);
  HashSetImplementation$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
HashSetImplementation$Dart.HashSetImplementation$from$21$Factory = function(other){
  var set = HashSetImplementation$Dart.HashSetImplementation$$Factory(HashSetImplementation$Dart.$lookupRTT());
  {
    var $0 = other.iterator$named(0, $noargs);
    while ($0.hasNext$named(0, $noargs)) {
      var e = $0.next$named(0, $noargs);
      {
        set.add$named(1, $noargs, e);
      }
    }
  }
  return set;
}
;
HashSetImplementation$Dart.prototype.clear$member = function(){
  this._backingMap$$getter_().clear$named(0, $noargs);
}
;
HashSetImplementation$Dart.prototype.clear$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return HashSetImplementation$Dart.prototype.clear$member.call(this);
}
;
HashSetImplementation$Dart.prototype.clear$getter = function clear$getter(){
  return $bind(HashSetImplementation$Dart.prototype.clear$named, this);
}
;
HashSetImplementation$Dart.prototype.add$member = function(value){
  var tmp$0;
  this._backingMap$$getter_().ASSIGN_INDEX$operator(value, tmp$0 = value) , tmp$0;
}
;
HashSetImplementation$Dart.prototype.add$named = function($n, $o, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return HashSetImplementation$Dart.prototype.add$member.call(this, value);
}
;
HashSetImplementation$Dart.prototype.add$getter = function add$getter(){
  return $bind(HashSetImplementation$Dart.prototype.add$named, this);
}
;
HashSetImplementation$Dart.prototype.contains$member = function(value){
  return this._backingMap$$getter_().containsKey$named(1, $noargs, value);
}
;
HashSetImplementation$Dart.prototype.contains$named = function($n, $o, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return HashSetImplementation$Dart.prototype.contains$member.call(this, value);
}
;
HashSetImplementation$Dart.prototype.contains$getter = function contains$getter(){
  return $bind(HashSetImplementation$Dart.prototype.contains$named, this);
}
;
HashSetImplementation$Dart.prototype.remove$member = function(value){
  if (!this._backingMap$$getter_().containsKey$named(1, $noargs, value)) {
    return false;
  }
  this._backingMap$$getter_().remove$named(1, $noargs, value);
  return true;
}
;
HashSetImplementation$Dart.prototype.remove$named = function($n, $o, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return HashSetImplementation$Dart.prototype.remove$member.call(this, value);
}
;
HashSetImplementation$Dart.prototype.remove$getter = function remove$getter(){
  return $bind(HashSetImplementation$Dart.prototype.remove$named, this);
}
;
function HashSetImplementation$Dart$addAll$c0$_$26_6_2$Hoisted(value){
  this.add$member(value);
}

function HashSetImplementation$Dart$addAll$c0$_$26_6_2$Hoisted$named($n, $o, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return HashSetImplementation$Dart$addAll$c0$_$26_6_2$Hoisted.call(this, value);
}

HashSetImplementation$Dart.prototype.addAll$member = function(collection){
  collection.forEach$named(1, $noargs, $bind(HashSetImplementation$Dart$addAll$c0$_$26_6_2$Hoisted$named, this));
}
;
HashSetImplementation$Dart.prototype.addAll$named = function($n, $o, collection){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return HashSetImplementation$Dart.prototype.addAll$member.call(this, collection);
}
;
HashSetImplementation$Dart.prototype.addAll$getter = function addAll$getter(){
  return $bind(HashSetImplementation$Dart.prototype.addAll$named, this);
}
;
function HashSetImplementation$Dart$intersection$c0$_$26_12_2$Hoisted(dartc_scp$1, value){
  if (this.contains$member(value)) {
    dartc_scp$1.result.add$named(1, $noargs, value);
  }
}

function HashSetImplementation$Dart$intersection$c0$_$26_12_2$Hoisted$named($s0, $n, $o, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return HashSetImplementation$Dart$intersection$c0$_$26_12_2$Hoisted.call(this, $s0, value);
}

HashSetImplementation$Dart.prototype.intersection$member = function(collection){
  var dartc_scp$1;
  dartc_scp$1 = {};
  dartc_scp$1.result = HashSetImplementation$Dart.HashSetImplementation$$Factory(HashSetImplementation$Dart.$lookupRTT([RTT.getTypeArg(RTT.getTypeArgsFor(this, $cls('HashSetImplementation$Dart')), 0)]));
  collection.forEach$named(1, $noargs, $bind(HashSetImplementation$Dart$intersection$c0$_$26_12_2$Hoisted$named, this, dartc_scp$1));
  return dartc_scp$1.result;
  dartc_scp$1 = $Dart$Null;
}
;
HashSetImplementation$Dart.prototype.intersection$named = function($n, $o, collection){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return HashSetImplementation$Dart.prototype.intersection$member.call(this, collection);
}
;
HashSetImplementation$Dart.prototype.intersection$getter = function intersection$getter(){
  return $bind(HashSetImplementation$Dart.prototype.intersection$named, this);
}
;
HashSetImplementation$Dart.prototype.isSubsetOf$member = function(other){
  return HashSetImplementation$Dart.HashSetImplementation$from$21$Factory(other).containsAll$named(1, $noargs, this);
}
;
HashSetImplementation$Dart.prototype.isSubsetOf$named = function($n, $o, other){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return HashSetImplementation$Dart.prototype.isSubsetOf$member.call(this, other);
}
;
HashSetImplementation$Dart.prototype.isSubsetOf$getter = function isSubsetOf$getter(){
  return $bind(HashSetImplementation$Dart.prototype.isSubsetOf$named, this);
}
;
function HashSetImplementation$Dart$removeAll$c0$_$26_9_2$Hoisted(value){
  this.remove$member(value);
}

function HashSetImplementation$Dart$removeAll$c0$_$26_9_2$Hoisted$named($n, $o, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return HashSetImplementation$Dart$removeAll$c0$_$26_9_2$Hoisted.call(this, value);
}

HashSetImplementation$Dart.prototype.removeAll$member = function(collection){
  collection.forEach$named(1, $noargs, $bind(HashSetImplementation$Dart$removeAll$c0$_$26_9_2$Hoisted$named, this));
}
;
HashSetImplementation$Dart.prototype.removeAll$named = function($n, $o, collection){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return HashSetImplementation$Dart.prototype.removeAll$member.call(this, collection);
}
;
HashSetImplementation$Dart.prototype.removeAll$getter = function removeAll$getter(){
  return $bind(HashSetImplementation$Dart.prototype.removeAll$named, this);
}
;
function HashSetImplementation$Dart$containsAll$c0$_$26_11_2$Hoisted(value){
  return this.contains$member(value);
}

function HashSetImplementation$Dart$containsAll$c0$_$26_11_2$Hoisted$named($n, $o, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return HashSetImplementation$Dart$containsAll$c0$_$26_11_2$Hoisted.call(this, value);
}

HashSetImplementation$Dart.prototype.containsAll$member = function(collection){
  return collection.every$named(1, $noargs, $bind(HashSetImplementation$Dart$containsAll$c0$_$26_11_2$Hoisted$named, this));
}
;
HashSetImplementation$Dart.prototype.containsAll$named = function($n, $o, collection){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return HashSetImplementation$Dart.prototype.containsAll$member.call(this, collection);
}
;
HashSetImplementation$Dart.prototype.containsAll$getter = function containsAll$getter(){
  return $bind(HashSetImplementation$Dart.prototype.containsAll$named, this);
}
;
function HashSetImplementation$Dart$forEach$c0$_$26_7_2$Hoisted(dartc_scp$0, key, value){
  dartc_scp$0.f(1, $noargs, key);
}

function HashSetImplementation$Dart$forEach$c0$_$26_7_2$Hoisted$named($s0, $n, $o, key, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return HashSetImplementation$Dart$forEach$c0$_$26_7_2$Hoisted($s0, key, value);
}

HashSetImplementation$Dart.prototype.forEach$member = function(f){
  var dartc_scp$0 = {f:f};
  this._backingMap$$getter_().forEach$named(1, $noargs, $bind(HashSetImplementation$Dart$forEach$c0$_$26_7_2$Hoisted$named, $Dart$Null, dartc_scp$0));
}
;
HashSetImplementation$Dart.prototype.forEach$named = function($n, $o, f){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return HashSetImplementation$Dart.prototype.forEach$member.call(this, f);
}
;
HashSetImplementation$Dart.prototype.forEach$getter = function forEach$getter(){
  return $bind(HashSetImplementation$Dart.prototype.forEach$named, this);
}
;
function HashSetImplementation$Dart$filter$c0$_$26_6_2$Hoisted(dartc_scp$0, dartc_scp$1, key, value){
  if (dartc_scp$0.f(1, $noargs, key)) {
    dartc_scp$1.result.add$named(1, $noargs, key);
  }
}

function HashSetImplementation$Dart$filter$c0$_$26_6_2$Hoisted$named($s0, $s1, $n, $o, key, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return HashSetImplementation$Dart$filter$c0$_$26_6_2$Hoisted($s0, $s1, key, value);
}

HashSetImplementation$Dart.prototype.filter$member = function(f){
  var dartc_scp$0 = {f:f};
  var dartc_scp$1;
  dartc_scp$1 = {};
  dartc_scp$1.result = HashSetImplementation$Dart.HashSetImplementation$$Factory(HashSetImplementation$Dart.$lookupRTT([RTT.getTypeArg(RTT.getTypeArgsFor(this, $cls('HashSetImplementation$Dart')), 0)]));
  this._backingMap$$getter_().forEach$named(1, $noargs, $bind(HashSetImplementation$Dart$filter$c0$_$26_6_2$Hoisted$named, $Dart$Null, dartc_scp$0, dartc_scp$1));
  return dartc_scp$1.result;
  dartc_scp$1 = $Dart$Null;
}
;
HashSetImplementation$Dart.prototype.filter$named = function($n, $o, f){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return HashSetImplementation$Dart.prototype.filter$member.call(this, f);
}
;
HashSetImplementation$Dart.prototype.filter$getter = function filter$getter(){
  return $bind(HashSetImplementation$Dart.prototype.filter$named, this);
}
;
HashSetImplementation$Dart.prototype.every$member = function(f){
  var keys = this._backingMap$$getter_().getKeys$named(0, $noargs);
  return keys.every$named(1, $noargs, f);
}
;
HashSetImplementation$Dart.prototype.every$named = function($n, $o, f){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return HashSetImplementation$Dart.prototype.every$member.call(this, f);
}
;
HashSetImplementation$Dart.prototype.every$getter = function every$getter(){
  return $bind(HashSetImplementation$Dart.prototype.every$named, this);
}
;
HashSetImplementation$Dart.prototype.some$member = function(f){
  var keys = this._backingMap$$getter_().getKeys$named(0, $noargs);
  return keys.some$named(1, $noargs, f);
}
;
HashSetImplementation$Dart.prototype.some$named = function($n, $o, f){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return HashSetImplementation$Dart.prototype.some$member.call(this, f);
}
;
HashSetImplementation$Dart.prototype.some$getter = function some$getter(){
  return $bind(HashSetImplementation$Dart.prototype.some$named, this);
}
;
HashSetImplementation$Dart.prototype.isEmpty$member = function(){
  return this._backingMap$$getter_().isEmpty$named(0, $noargs);
}
;
HashSetImplementation$Dart.prototype.isEmpty$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return HashSetImplementation$Dart.prototype.isEmpty$member.call(this);
}
;
HashSetImplementation$Dart.prototype.isEmpty$getter = function isEmpty$getter(){
  return $bind(HashSetImplementation$Dart.prototype.isEmpty$named, this);
}
;
HashSetImplementation$Dart.prototype.length$named = function(){
  return this.length$getter().apply(this, arguments);
}
;
HashSetImplementation$Dart.prototype.length$getter = function(){
  return this._backingMap$$getter_().length$getter();
}
;
HashSetImplementation$Dart.prototype.iterator$member = function(){
  return HashSetIterator$Dart.HashSetIterator$$Factory(HashSetIterator$Dart.$lookupRTT([RTT.getTypeArg(RTT.getTypeArgsFor(this, $cls('HashSetImplementation$Dart')), 0)]), this);
}
;
HashSetImplementation$Dart.prototype.iterator$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return HashSetImplementation$Dart.prototype.iterator$member.call(this);
}
;
HashSetImplementation$Dart.prototype.iterator$getter = function iterator$getter(){
  return $bind(HashSetImplementation$Dart.prototype.iterator$named, this);
}
;
HashSetImplementation$Dart.prototype._backingMap$$named_ = function(){
  return this._backingMap$$getter_().apply(this, arguments);
}
;
HashSetImplementation$Dart.prototype._backingMap$$getter_ = function(){
  return this._backingMap$$field_;
}
;
HashSetImplementation$Dart.prototype._backingMap$$setter_ = function(tmp$0){
  this._backingMap$$field_ = tmp$0;
}
;
