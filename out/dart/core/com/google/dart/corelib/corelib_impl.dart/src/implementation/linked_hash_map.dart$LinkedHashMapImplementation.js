function LinkedHashMapImplementation$Dart(){
}

LinkedHashMapImplementation$Dart.$lookupRTT = function(typeArgs){
  return RTT.create($cls('LinkedHashMapImplementation$Dart'), LinkedHashMapImplementation$Dart.$RTTimplements, typeArgs);
}
;
LinkedHashMapImplementation$Dart.$RTTimplements = function(rtt, typeArgs){
  LinkedHashMapImplementation$Dart.$addTo(rtt, typeArgs);
  rtt.derivedTypes = [];
}
;
LinkedHashMapImplementation$Dart.$addTo = function(target, typeArgs){
  var rtt = LinkedHashMapImplementation$Dart.$lookupRTT(typeArgs);
  target.implementedTypes[rtt.classKey] = rtt;
  LinkedHashMap$Dart.$addTo(target, [RTT.getTypeArg(target.typeArgs, 0), RTT.getTypeArg(target.typeArgs, 1)]);
}
;
LinkedHashMapImplementation$Dart.prototype.$implements$LinkedHashMapImplementation$Dart = 1;
LinkedHashMapImplementation$Dart.prototype.$implements$LinkedHashMap$Dart = 1;
LinkedHashMapImplementation$Dart.prototype.$implements$HashMap$Dart = 1;
LinkedHashMapImplementation$Dart.prototype.$implements$Map$Dart = 1;
LinkedHashMapImplementation$Dart.prototype.$implements$Object$Dart = 1;
LinkedHashMapImplementation$Dart.$Constructor = function(){
  Object.$Constructor.call(this);
  var tmp$1, tmp$0;
  this._map$$setter_(tmp$0 = HashMapImplementation$Dart.HashMapImplementation$$Factory(HashMapImplementation$Dart.$lookupRTT([RTT.getTypeArg(RTT.getTypeArgsFor(this, $cls('LinkedHashMapImplementation$Dart')), 0), DoubleLinkedQueueEntry$Dart.$lookupRTT([KeyValuePair$Dart.$lookupRTT([RTT.getTypeArg(RTT.getTypeArgsFor(this, $cls('LinkedHashMapImplementation$Dart')), 0), RTT.getTypeArg(RTT.getTypeArgsFor(this, $cls('LinkedHashMapImplementation$Dart')), 1)])])]))) , tmp$0;
  this._list$$setter_(tmp$1 = DoubleLinkedQueue$Dart.DoubleLinkedQueue$$Factory(DoubleLinkedQueue$Dart.$lookupRTT([KeyValuePair$Dart.$lookupRTT([RTT.getTypeArg(RTT.getTypeArgsFor(this, $cls('LinkedHashMapImplementation$Dart')), 0), RTT.getTypeArg(RTT.getTypeArgsFor(this, $cls('LinkedHashMapImplementation$Dart')), 1)])]))) , tmp$1;
}
;
LinkedHashMapImplementation$Dart.$Initializer = function(){
  Object.$Initializer.call(this);
}
;
LinkedHashMapImplementation$Dart.LinkedHashMapImplementation$$Factory = function($rtt){
  var tmp$0 = new LinkedHashMapImplementation$Dart;
  tmp$0.$typeInfo = $rtt;
  LinkedHashMapImplementation$Dart.$Initializer.call(tmp$0);
  LinkedHashMapImplementation$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
function LinkedHashMapImplementation$Dart$from$c0$32_32$HoistedConstructor(dartc_scp$1, key, value){
  var tmp$0;
  dartc_scp$1.result.ASSIGN_INDEX$operator(key, tmp$0 = value) , tmp$0;
}

function LinkedHashMapImplementation$Dart$from$c0$32_32$HoistedConstructor$named($s0, $n, $o, key, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return LinkedHashMapImplementation$Dart$from$c0$32_32$HoistedConstructor($s0, key, value);
}

LinkedHashMapImplementation$Dart.LinkedHashMapImplementation$from$27$Factory = function(other){
  var dartc_scp$1;
  dartc_scp$1 = {};
  dartc_scp$1.result = LinkedHashMapImplementation$Dart.LinkedHashMapImplementation$$Factory(LinkedHashMapImplementation$Dart.$lookupRTT());
  other.forEach$named(1, $noargs, $bind(LinkedHashMapImplementation$Dart$from$c0$32_32$HoistedConstructor$named, $Dart$Null, dartc_scp$1));
  return dartc_scp$1.result;
  dartc_scp$1 = $Dart$Null;
}
;
LinkedHashMapImplementation$Dart.prototype._list$$named_ = function(){
  return this._list$$getter_().apply(this, arguments);
}
;
LinkedHashMapImplementation$Dart.prototype._list$$getter_ = function(){
  return this._list$$field_;
}
;
LinkedHashMapImplementation$Dart.prototype._list$$setter_ = function(tmp$0){
  this._list$$field_ = tmp$0;
}
;
LinkedHashMapImplementation$Dart.prototype._map$$named_ = function(){
  return this._map$$getter_().apply(this, arguments);
}
;
LinkedHashMapImplementation$Dart.prototype._map$$getter_ = function(){
  return this._map$$field_;
}
;
LinkedHashMapImplementation$Dart.prototype._map$$setter_ = function(tmp$0){
  this._map$$field_ = tmp$0;
}
;
LinkedHashMapImplementation$Dart.prototype.ASSIGN_INDEX$operator = function(key, value){
  var tmp$1, tmp$0;
  if (this._map$$getter_().containsKey$named(1, $noargs, key)) {
    this._map$$getter_().INDEX$operator(key).element$getter().value$setter(tmp$0 = value) , tmp$0;
  }
   else {
    this._list$$getter_().addLast$named(1, $noargs, KeyValuePair$Dart.KeyValuePair$$Factory(KeyValuePair$Dart.$lookupRTT([RTT.getTypeArg(RTT.getTypeArgsFor(this, $cls('LinkedHashMapImplementation$Dart')), 0), RTT.getTypeArg(RTT.getTypeArgsFor(this, $cls('LinkedHashMapImplementation$Dart')), 1)]), key, value));
    this._map$$getter_().ASSIGN_INDEX$operator(key, tmp$1 = this._list$$getter_().lastEntry$named(0, $noargs)) , tmp$1;
  }
}
;
LinkedHashMapImplementation$Dart.prototype.INDEX$operator = function(key){
  var entry = this._map$$getter_().INDEX$operator(key);
  if (entry == null) {
    return $Dart$Null;
  }
  return entry.element$getter().value$getter();
}
;
LinkedHashMapImplementation$Dart.prototype.remove$member = function(key){
  var entry = this._map$$getter_().remove$named(1, $noargs, key);
  if (entry == null) {
    return $Dart$Null;
  }
  entry.remove$named(0, $noargs);
  return entry.element$getter().value$getter();
}
;
LinkedHashMapImplementation$Dart.prototype.remove$named = function($n, $o, key){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return LinkedHashMapImplementation$Dart.prototype.remove$member.call(this, key);
}
;
LinkedHashMapImplementation$Dart.prototype.remove$getter = function remove$getter(){
  return $bind(LinkedHashMapImplementation$Dart.prototype.remove$named, this);
}
;
LinkedHashMapImplementation$Dart.prototype.putIfAbsent$member = function(key, ifAbsent){
  var tmp$0;
  var value = this.INDEX$operator(key);
  if (this.INDEX$operator(key) == null && !this.containsKey$member(key)) {
    value = ifAbsent(0, $noargs);
    this.ASSIGN_INDEX$operator(key, tmp$0 = value) , tmp$0;
  }
  return value;
}
;
LinkedHashMapImplementation$Dart.prototype.putIfAbsent$named = function($n, $o, key, ifAbsent){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return LinkedHashMapImplementation$Dart.prototype.putIfAbsent$member.call(this, key, ifAbsent);
}
;
LinkedHashMapImplementation$Dart.prototype.putIfAbsent$getter = function putIfAbsent$getter(){
  return $bind(LinkedHashMapImplementation$Dart.prototype.putIfAbsent$named, this);
}
;
function LinkedHashMapImplementation$Dart$getKeys$c0$_$32_7_2$Hoisted(dartc_scp$1, entry){
  var tmp$1, tmp$0;
  dartc_scp$1.list.ASSIGN_INDEX$operator((tmp$0 = dartc_scp$1.index , (dartc_scp$1.index = ADD$operator(tmp$0, 1) , tmp$0)), tmp$1 = entry.key$getter()) , tmp$1;
}

function LinkedHashMapImplementation$Dart$getKeys$c0$_$32_7_2$Hoisted$named($s0, $n, $o, entry){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return LinkedHashMapImplementation$Dart$getKeys$c0$_$32_7_2$Hoisted($s0, entry);
}

LinkedHashMapImplementation$Dart.prototype.getKeys$member = function(){
  var dartc_scp$1;
  dartc_scp$1 = {};
  dartc_scp$1.list = ListFactory$Dart.List$$Factory([RTT.getTypeArg(RTT.getTypeArgsFor(this, $cls('LinkedHashMapImplementation$Dart')), 0)], this.length$getter());
  dartc_scp$1.index = 0;
  this._list$$getter_().forEach$named(1, $noargs, $bind(LinkedHashMapImplementation$Dart$getKeys$c0$_$32_7_2$Hoisted$named, $Dart$Null, dartc_scp$1));
  assert(EQ$operator(dartc_scp$1.index, this.length$getter()));
  return dartc_scp$1.list;
  dartc_scp$1 = $Dart$Null;
}
;
LinkedHashMapImplementation$Dart.prototype.getKeys$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return LinkedHashMapImplementation$Dart.prototype.getKeys$member.call(this);
}
;
LinkedHashMapImplementation$Dart.prototype.getKeys$getter = function getKeys$getter(){
  return $bind(LinkedHashMapImplementation$Dart.prototype.getKeys$named, this);
}
;
function LinkedHashMapImplementation$Dart$getValues$c0$_$32_9_2$Hoisted(dartc_scp$1, entry){
  var tmp$1, tmp$0;
  dartc_scp$1.list.ASSIGN_INDEX$operator((tmp$0 = dartc_scp$1.index , (dartc_scp$1.index = ADD$operator(tmp$0, 1) , tmp$0)), tmp$1 = entry.value$getter()) , tmp$1;
}

function LinkedHashMapImplementation$Dart$getValues$c0$_$32_9_2$Hoisted$named($s0, $n, $o, entry){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return LinkedHashMapImplementation$Dart$getValues$c0$_$32_9_2$Hoisted($s0, entry);
}

LinkedHashMapImplementation$Dart.prototype.getValues$member = function(){
  var dartc_scp$1;
  dartc_scp$1 = {};
  dartc_scp$1.list = ListFactory$Dart.List$$Factory([RTT.getTypeArg(RTT.getTypeArgsFor(this, $cls('LinkedHashMapImplementation$Dart')), 1)], this.length$getter());
  dartc_scp$1.index = 0;
  this._list$$getter_().forEach$named(1, $noargs, $bind(LinkedHashMapImplementation$Dart$getValues$c0$_$32_9_2$Hoisted$named, $Dart$Null, dartc_scp$1));
  assert(EQ$operator(dartc_scp$1.index, this.length$getter()));
  return dartc_scp$1.list;
  dartc_scp$1 = $Dart$Null;
}
;
LinkedHashMapImplementation$Dart.prototype.getValues$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return LinkedHashMapImplementation$Dart.prototype.getValues$member.call(this);
}
;
LinkedHashMapImplementation$Dart.prototype.getValues$getter = function getValues$getter(){
  return $bind(LinkedHashMapImplementation$Dart.prototype.getValues$named, this);
}
;
function LinkedHashMapImplementation$Dart$forEach$c0$_$32_7_2$Hoisted(dartc_scp$0, entry){
  dartc_scp$0.f(2, $noargs, entry.key$getter(), entry.value$getter());
}

function LinkedHashMapImplementation$Dart$forEach$c0$_$32_7_2$Hoisted$named($s0, $n, $o, entry){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return LinkedHashMapImplementation$Dart$forEach$c0$_$32_7_2$Hoisted($s0, entry);
}

LinkedHashMapImplementation$Dart.prototype.forEach$member = function(f){
  var dartc_scp$0 = {f:f};
  this._list$$getter_().forEach$named(1, $noargs, $bind(LinkedHashMapImplementation$Dart$forEach$c0$_$32_7_2$Hoisted$named, $Dart$Null, dartc_scp$0));
}
;
LinkedHashMapImplementation$Dart.prototype.forEach$named = function($n, $o, f){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return LinkedHashMapImplementation$Dart.prototype.forEach$member.call(this, f);
}
;
LinkedHashMapImplementation$Dart.prototype.forEach$getter = function forEach$getter(){
  return $bind(LinkedHashMapImplementation$Dart.prototype.forEach$named, this);
}
;
LinkedHashMapImplementation$Dart.prototype.containsKey$member = function(key){
  return this._map$$getter_().containsKey$named(1, $noargs, key);
}
;
LinkedHashMapImplementation$Dart.prototype.containsKey$named = function($n, $o, key){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return LinkedHashMapImplementation$Dart.prototype.containsKey$member.call(this, key);
}
;
LinkedHashMapImplementation$Dart.prototype.containsKey$getter = function containsKey$getter(){
  return $bind(LinkedHashMapImplementation$Dart.prototype.containsKey$named, this);
}
;
function LinkedHashMapImplementation$Dart$containsValue$c0$_$32_13_2$Hoisted(dartc_scp$0, entry){
  return EQ$operator(entry.value$getter(), dartc_scp$0.value);
}

function LinkedHashMapImplementation$Dart$containsValue$c0$_$32_13_2$Hoisted$named($s0, $n, $o, entry){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return LinkedHashMapImplementation$Dart$containsValue$c0$_$32_13_2$Hoisted($s0, entry);
}

LinkedHashMapImplementation$Dart.prototype.containsValue$member = function(value){
  var dartc_scp$0 = {value:value};
  return this._list$$getter_().some$named(1, $noargs, $bind(LinkedHashMapImplementation$Dart$containsValue$c0$_$32_13_2$Hoisted$named, $Dart$Null, dartc_scp$0));
}
;
LinkedHashMapImplementation$Dart.prototype.containsValue$named = function($n, $o, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return LinkedHashMapImplementation$Dart.prototype.containsValue$member.call(this, value);
}
;
LinkedHashMapImplementation$Dart.prototype.containsValue$getter = function containsValue$getter(){
  return $bind(LinkedHashMapImplementation$Dart.prototype.containsValue$named, this);
}
;
LinkedHashMapImplementation$Dart.prototype.length$named = function(){
  return this.length$getter().apply(this, arguments);
}
;
LinkedHashMapImplementation$Dart.prototype.length$getter = function(){
  return this._map$$getter_().length$getter();
}
;
LinkedHashMapImplementation$Dart.prototype.isEmpty$member = function(){
  return EQ$operator(this.length$getter(), 0);
}
;
LinkedHashMapImplementation$Dart.prototype.isEmpty$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return LinkedHashMapImplementation$Dart.prototype.isEmpty$member.call(this);
}
;
LinkedHashMapImplementation$Dart.prototype.isEmpty$getter = function isEmpty$getter(){
  return $bind(LinkedHashMapImplementation$Dart.prototype.isEmpty$named, this);
}
;
LinkedHashMapImplementation$Dart.prototype.clear$member = function(){
  this._map$$getter_().clear$named(0, $noargs);
  this._list$$getter_().clear$named(0, $noargs);
}
;
LinkedHashMapImplementation$Dart.prototype.clear$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return LinkedHashMapImplementation$Dart.prototype.clear$member.call(this);
}
;
LinkedHashMapImplementation$Dart.prototype.clear$getter = function clear$getter(){
  return $bind(LinkedHashMapImplementation$Dart.prototype.clear$named, this);
}
;
