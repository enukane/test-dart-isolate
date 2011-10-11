function HashMapImplementation$Dart(){
}

HashMapImplementation$Dart.$lookupRTT = function(typeArgs){
  return RTT.create($cls('HashMapImplementation$Dart'), HashMapImplementation$Dart.$RTTimplements, typeArgs);
}
;
HashMapImplementation$Dart.$RTTimplements = function(rtt, typeArgs){
  HashMapImplementation$Dart.$addTo(rtt, typeArgs);
  rtt.derivedTypes = [];
}
;
HashMapImplementation$Dart.$addTo = function(target, typeArgs){
  var rtt = HashMapImplementation$Dart.$lookupRTT(typeArgs);
  target.implementedTypes[rtt.classKey] = rtt;
  HashMap$Dart.$addTo(target, [RTT.getTypeArg(target.typeArgs, 0), RTT.getTypeArg(target.typeArgs, 1)]);
}
;
HashMapImplementation$Dart.prototype.$implements$HashMapImplementation$Dart = 1;
HashMapImplementation$Dart.prototype.$implements$HashMap$Dart = 1;
HashMapImplementation$Dart.prototype.$implements$Map$Dart = 1;
HashMapImplementation$Dart.prototype.$implements$Object$Dart = 1;
HashMapImplementation$Dart.$Constructor = function(){
  Object.$Constructor.call(this);
  var tmp$5, tmp$1, tmp$2, tmp$3, tmp$4, tmp$0;
  if (HashMapImplementation$Dart._deletedKey$$getter_() == null) {
    HashMapImplementation$Dart._deletedKey$$setter_(tmp$0 = Object.Object$$Factory()) , tmp$0;
  }
  this._numberOfEntries$$setter_(tmp$1 = 0) , tmp$1;
  this._numberOfDeleted$$setter_(tmp$2 = 0) , tmp$2;
  this._loadLimit$$setter_(tmp$3 = HashMapImplementation$Dart._computeLoadLimit$$member_(HashMapImplementation$Dart._INITIAL_CAPACITY$$getter_())) , tmp$3;
  this._keys$$setter_(tmp$4 = ListFactory$Dart.List$$Factory(null, HashMapImplementation$Dart._INITIAL_CAPACITY$$getter_())) , tmp$4;
  this._values$$setter_(tmp$5 = ListFactory$Dart.List$$Factory([RTT.getTypeArg(RTT.getTypeArgsFor(this, $cls('HashMapImplementation$Dart')), 1)], HashMapImplementation$Dart._INITIAL_CAPACITY$$getter_())) , tmp$5;
}
;
HashMapImplementation$Dart.$Initializer = function(){
  Object.$Initializer.call(this);
}
;
HashMapImplementation$Dart.HashMapImplementation$$Factory = function($rtt){
  var tmp$0 = new HashMapImplementation$Dart;
  tmp$0.$typeInfo = $rtt;
  HashMapImplementation$Dart.$Initializer.call(tmp$0);
  HashMapImplementation$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
function HashMapImplementation$Dart$from$c0$26_26$HoistedConstructor(dartc_scp$1, key, value){
  var tmp$0;
  dartc_scp$1.result.ASSIGN_INDEX$operator(key, tmp$0 = value) , tmp$0;
}

function HashMapImplementation$Dart$from$c0$26_26$HoistedConstructor$named($s0, $n, $o, key, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return HashMapImplementation$Dart$from$c0$26_26$HoistedConstructor($s0, key, value);
}

HashMapImplementation$Dart.HashMapImplementation$from$21$Factory = function(other){
  var dartc_scp$1;
  dartc_scp$1 = {};
  dartc_scp$1.result = HashMapImplementation$Dart.HashMapImplementation$$Factory(HashMapImplementation$Dart.$lookupRTT());
  other.forEach$named(1, $noargs, $bind(HashMapImplementation$Dart$from$c0$26_26$HoistedConstructor$named, $Dart$Null, dartc_scp$1));
  return dartc_scp$1.result;
  dartc_scp$1 = $Dart$Null;
}
;
HashMapImplementation$Dart.prototype._keys$$named_ = function(){
  return this._keys$$getter_().apply(this, arguments);
}
;
HashMapImplementation$Dart.prototype._keys$$getter_ = function(){
  return this._keys$$field_;
}
;
HashMapImplementation$Dart.prototype._keys$$setter_ = function(tmp$0){
  this._keys$$field_ = tmp$0;
}
;
HashMapImplementation$Dart.prototype._values$$named_ = function(){
  return this._values$$getter_().apply(this, arguments);
}
;
HashMapImplementation$Dart.prototype._values$$getter_ = function(){
  return this._values$$field_;
}
;
HashMapImplementation$Dart.prototype._values$$setter_ = function(tmp$0){
  this._values$$field_ = tmp$0;
}
;
HashMapImplementation$Dart.prototype._loadLimit$$named_ = function(){
  return this._loadLimit$$getter_().apply(this, arguments);
}
;
HashMapImplementation$Dart.prototype._loadLimit$$getter_ = function(){
  return this._loadLimit$$field_;
}
;
HashMapImplementation$Dart.prototype._loadLimit$$setter_ = function(tmp$0){
  this._loadLimit$$field_ = tmp$0;
}
;
HashMapImplementation$Dart.prototype._numberOfEntries$$named_ = function(){
  return this._numberOfEntries$$getter_().apply(this, arguments);
}
;
HashMapImplementation$Dart.prototype._numberOfEntries$$getter_ = function(){
  return this._numberOfEntries$$field_;
}
;
HashMapImplementation$Dart.prototype._numberOfEntries$$setter_ = function(tmp$0){
  this._numberOfEntries$$field_ = tmp$0;
}
;
HashMapImplementation$Dart.prototype._numberOfDeleted$$named_ = function(){
  return this._numberOfDeleted$$getter_().apply(this, arguments);
}
;
HashMapImplementation$Dart.prototype._numberOfDeleted$$getter_ = function(){
  return this._numberOfDeleted$$field_;
}
;
HashMapImplementation$Dart.prototype._numberOfDeleted$$setter_ = function(tmp$0){
  this._numberOfDeleted$$field_ = tmp$0;
}
;
HashMapImplementation$Dart._deletedKey$$named_ = function(){
  return HashMapImplementation$Dart._deletedKey$$getter_().apply(this, arguments);
}
;
HashMapImplementation$Dart._deletedKey$$getter_ = function(){
  return isolate$current.HashMapImplementation$Dart_deletedKey$$field_;
}
;
HashMapImplementation$Dart._deletedKey$$setter_ = function(tmp$0){
  isolate$current.HashMapImplementation$Dart_deletedKey$$field_ = tmp$0;
}
;
HashMapImplementation$Dart._INITIAL_CAPACITY$$named_ = function(){
  return HashMapImplementation$Dart._INITIAL_CAPACITY$$getter_().apply(this, arguments);
}
;
HashMapImplementation$Dart._INITIAL_CAPACITY$$getter_ = function(){
  return 8;
}
;
HashMapImplementation$Dart._computeLoadLimit$$member_ = function(capacity){
  return TRUNC$operator(MUL$operator(capacity, 3), 4);
}
;
HashMapImplementation$Dart._computeLoadLimit$$named_ = function($n, $o, capacity){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return HashMapImplementation$Dart._computeLoadLimit$$member_(capacity);
}
;
HashMapImplementation$Dart._computeLoadLimit$$getter_ = function _computeLoadLimit$$getter_(){
  return HashMapImplementation$Dart._computeLoadLimit$$named_;
}
;
HashMapImplementation$Dart._firstProbe$$member_ = function(hashCode, length_0){
  return BIT_AND$operator(hashCode, SUB$operator(length_0, 1));
}
;
HashMapImplementation$Dart._firstProbe$$named_ = function($n, $o, hashCode, length_0){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return HashMapImplementation$Dart._firstProbe$$member_(hashCode, length_0);
}
;
HashMapImplementation$Dart._firstProbe$$getter_ = function _firstProbe$$getter_(){
  return HashMapImplementation$Dart._firstProbe$$named_;
}
;
HashMapImplementation$Dart._nextProbe$$member_ = function(currentProbe, numberOfProbes, length_0){
  return BIT_AND$operator(ADD$operator(currentProbe, numberOfProbes), SUB$operator(length_0, 1));
}
;
HashMapImplementation$Dart._nextProbe$$named_ = function($n, $o, currentProbe, numberOfProbes, length_0){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return HashMapImplementation$Dart._nextProbe$$member_(currentProbe, numberOfProbes, length_0);
}
;
HashMapImplementation$Dart._nextProbe$$getter_ = function _nextProbe$$getter_(){
  return HashMapImplementation$Dart._nextProbe$$named_;
}
;
HashMapImplementation$Dart.prototype._probeForAdding$$member_ = function(key){
  var tmp$0;
  var hash = HashMapImplementation$Dart._firstProbe$$member_(key.hashCode$named(0, $noargs), this._keys$$getter_().length$getter());
  var numberOfProbes = 1;
  var initialHash = hash;
  var insertionIndex = negate$operator(1);
  while (true) {
    var existingKey = this._keys$$getter_().INDEX$operator(hash);
    if (existingKey == null) {
      if (LT$operator(insertionIndex, 0)) {
        return hash;
      }
      return insertionIndex;
    }
     else {
      if (EQ$operator(existingKey, key)) {
        return hash;
      }
       else {
        if (LT$operator(insertionIndex, 0) && HashMapImplementation$Dart._deletedKey$$getter_() === existingKey) {
          insertionIndex = hash;
        }
      }
    }
    hash = HashMapImplementation$Dart._nextProbe$$member_(hash, (tmp$0 = numberOfProbes , (numberOfProbes = ADD$operator(tmp$0, 1) , tmp$0)), this._keys$$getter_().length$getter());
  }
}
;
HashMapImplementation$Dart.prototype._probeForAdding$$named_ = function($n, $o, key){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return HashMapImplementation$Dart.prototype._probeForAdding$$member_.call(this, key);
}
;
HashMapImplementation$Dart.prototype._probeForAdding$$getter_ = function _probeForAdding$$getter_(){
  return $bind(HashMapImplementation$Dart.prototype._probeForAdding$$named_, this);
}
;
HashMapImplementation$Dart.prototype._probeForLookup$$member_ = function(key){
  var tmp$0;
  var hash = HashMapImplementation$Dart._firstProbe$$member_(key.hashCode$named(0, $noargs), this._keys$$getter_().length$getter());
  var numberOfProbes = 1;
  var initialHash = hash;
  while (true) {
    var existingKey = this._keys$$getter_().INDEX$operator(hash);
    if (existingKey == null) {
      return negate$operator(1);
    }
    if (EQ$operator(existingKey, key)) {
      return hash;
    }
    hash = HashMapImplementation$Dart._nextProbe$$member_(hash, (tmp$0 = numberOfProbes , (numberOfProbes = ADD$operator(tmp$0, 1) , tmp$0)), this._keys$$getter_().length$getter());
  }
}
;
HashMapImplementation$Dart.prototype._probeForLookup$$named_ = function($n, $o, key){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return HashMapImplementation$Dart.prototype._probeForLookup$$member_.call(this, key);
}
;
HashMapImplementation$Dart.prototype._probeForLookup$$getter_ = function _probeForLookup$$getter_(){
  return $bind(HashMapImplementation$Dart.prototype._probeForLookup$$named_, this);
}
;
HashMapImplementation$Dart.prototype._ensureCapacity$$member_ = function(){
  var newNumberOfEntries = ADD$operator(this._numberOfEntries$$getter_(), 1);
  if (GTE$operator(newNumberOfEntries, this._loadLimit$$getter_())) {
    this._grow$$member_(MUL$operator(this._keys$$getter_().length$getter(), 2));
    return;
  }
  var capacity = this._keys$$getter_().length$getter();
  var numberOfFreeOrDeleted = SUB$operator(capacity, newNumberOfEntries);
  var numberOfFree = SUB$operator(numberOfFreeOrDeleted, this._numberOfDeleted$$getter_());
  if (GT$operator(this._numberOfDeleted$$getter_(), numberOfFree)) {
    this._grow$$member_(this._keys$$getter_().length$getter());
  }
}
;
HashMapImplementation$Dart.prototype._ensureCapacity$$named_ = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return HashMapImplementation$Dart.prototype._ensureCapacity$$member_.call(this);
}
;
HashMapImplementation$Dart.prototype._ensureCapacity$$getter_ = function _ensureCapacity$$getter_(){
  return $bind(HashMapImplementation$Dart.prototype._ensureCapacity$$named_, this);
}
;
HashMapImplementation$Dart._isPowerOfTwo$$member_ = function(x){
  return EQ$operator(BIT_AND$operator(x, SUB$operator(x, 1)), 0);
}
;
HashMapImplementation$Dart._isPowerOfTwo$$named_ = function($n, $o, x){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return HashMapImplementation$Dart._isPowerOfTwo$$member_(x);
}
;
HashMapImplementation$Dart._isPowerOfTwo$$getter_ = function _isPowerOfTwo$$getter_(){
  return HashMapImplementation$Dart._isPowerOfTwo$$named_;
}
;
HashMapImplementation$Dart.prototype._grow$$member_ = function(newCapacity){
  var tmp$5, tmp$6, tmp$1, tmp$2, tmp$3, tmp$4, tmp$0;
  assert(HashMapImplementation$Dart._isPowerOfTwo$$member_(newCapacity));
  var capacity = this._keys$$getter_().length$getter();
  this._loadLimit$$setter_(tmp$0 = HashMapImplementation$Dart._computeLoadLimit$$member_(newCapacity)) , tmp$0;
  var oldKeys = this._keys$$getter_();
  var oldValues = this._values$$getter_();
  this._keys$$setter_(tmp$1 = ListFactory$Dart.List$$Factory(null, newCapacity)) , tmp$1;
  this._values$$setter_(tmp$2 = ListFactory$Dart.List$$Factory([RTT.getTypeArg(RTT.getTypeArgsFor(this, $cls('HashMapImplementation$Dart')), 1)], newCapacity)) , tmp$2;
  {
    var i = 0;
    for (; LT$operator(i, capacity); tmp$3 = i , (i = ADD$operator(tmp$3, 1) , tmp$3)) {
      var key = oldKeys.INDEX$operator(i);
      if (key == null || key === HashMapImplementation$Dart._deletedKey$$getter_()) {
        continue;
      }
      var value = oldValues.INDEX$operator(i);
      var newIndex = this._probeForAdding$$member_(key);
      this._keys$$getter_().ASSIGN_INDEX$operator(newIndex, tmp$4 = key) , tmp$4;
      this._values$$getter_().ASSIGN_INDEX$operator(newIndex, tmp$5 = value) , tmp$5;
    }
  }
  this._numberOfDeleted$$setter_(tmp$6 = 0) , tmp$6;
}
;
HashMapImplementation$Dart.prototype._grow$$named_ = function($n, $o, newCapacity){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return HashMapImplementation$Dart.prototype._grow$$member_.call(this, newCapacity);
}
;
HashMapImplementation$Dart.prototype._grow$$getter_ = function _grow$$getter_(){
  return $bind(HashMapImplementation$Dart.prototype._grow$$named_, this);
}
;
HashMapImplementation$Dart.prototype.clear$member = function(){
  var tmp$1, tmp$2, tmp$3, tmp$4, tmp$0;
  this._numberOfEntries$$setter_(tmp$0 = 0) , tmp$0;
  this._numberOfDeleted$$setter_(tmp$1 = 0) , tmp$1;
  var length_0 = this._keys$$getter_().length$getter();
  {
    var i = 0;
    for (; LT$operator(i, length_0); tmp$2 = i , (i = ADD$operator(tmp$2, 1) , tmp$2)) {
      this._keys$$getter_().ASSIGN_INDEX$operator(i, tmp$3 = $Dart$Null) , tmp$3;
      this._values$$getter_().ASSIGN_INDEX$operator(i, tmp$4 = $Dart$Null) , tmp$4;
    }
  }
}
;
HashMapImplementation$Dart.prototype.clear$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return HashMapImplementation$Dart.prototype.clear$member.call(this);
}
;
HashMapImplementation$Dart.prototype.clear$getter = function clear$getter(){
  return $bind(HashMapImplementation$Dart.prototype.clear$named, this);
}
;
HashMapImplementation$Dart.prototype.ASSIGN_INDEX$operator = function(key, value){
  var tmp$1, tmp$2, tmp$3, tmp$0;
  this._ensureCapacity$$member_();
  var index = this._probeForAdding$$member_(key);
  if (this._keys$$getter_().INDEX$operator(index) == null || this._keys$$getter_().INDEX$operator(index) === HashMapImplementation$Dart._deletedKey$$getter_()) {
    tmp$0 = this._numberOfEntries$$getter_() , (this._numberOfEntries$$setter_(tmp$1 = ADD$operator(tmp$0, 1)) , tmp$1 , tmp$0);
  }
  this._keys$$getter_().ASSIGN_INDEX$operator(index, tmp$2 = key) , tmp$2;
  this._values$$getter_().ASSIGN_INDEX$operator(index, tmp$3 = value) , tmp$3;
}
;
HashMapImplementation$Dart.prototype.INDEX$operator = function(key){
  var index = this._probeForLookup$$member_(key);
  if (LT$operator(index, 0)) {
    return $Dart$Null;
  }
  return this._values$$getter_().INDEX$operator(index);
}
;
HashMapImplementation$Dart.prototype.putIfAbsent$member = function(key, ifAbsent){
  var tmp$0;
  var index = this._probeForLookup$$member_(key);
  if (GTE$operator(index, 0)) {
    return this._values$$getter_().INDEX$operator(index);
  }
  var value = ifAbsent(0, $noargs);
  this.ASSIGN_INDEX$operator(key, tmp$0 = value) , tmp$0;
  return value;
}
;
HashMapImplementation$Dart.prototype.putIfAbsent$named = function($n, $o, key, ifAbsent){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return HashMapImplementation$Dart.prototype.putIfAbsent$member.call(this, key, ifAbsent);
}
;
HashMapImplementation$Dart.prototype.putIfAbsent$getter = function putIfAbsent$getter(){
  return $bind(HashMapImplementation$Dart.prototype.putIfAbsent$named, this);
}
;
HashMapImplementation$Dart.prototype.remove$member = function(key){
  var tmp$5, tmp$1, tmp$2, tmp$3, tmp$4, tmp$0;
  var index = this._probeForLookup$$member_(key);
  if (GTE$operator(index, 0)) {
    tmp$0 = this._numberOfEntries$$getter_() , (this._numberOfEntries$$setter_(tmp$1 = SUB$operator(tmp$0, 1)) , tmp$1 , tmp$0);
    var value = this._values$$getter_().INDEX$operator(index);
    this._values$$getter_().ASSIGN_INDEX$operator(index, tmp$2 = $Dart$Null) , tmp$2;
    this._keys$$getter_().ASSIGN_INDEX$operator(index, tmp$3 = HashMapImplementation$Dart._deletedKey$$getter_()) , tmp$3;
    tmp$4 = this._numberOfDeleted$$getter_() , (this._numberOfDeleted$$setter_(tmp$5 = ADD$operator(tmp$4, 1)) , tmp$5 , tmp$4);
    return value;
  }
  return $Dart$Null;
}
;
HashMapImplementation$Dart.prototype.remove$named = function($n, $o, key){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return HashMapImplementation$Dart.prototype.remove$member.call(this, key);
}
;
HashMapImplementation$Dart.prototype.remove$getter = function remove$getter(){
  return $bind(HashMapImplementation$Dart.prototype.remove$named, this);
}
;
HashMapImplementation$Dart.prototype.isEmpty$member = function(){
  return EQ$operator(this._numberOfEntries$$getter_(), 0);
}
;
HashMapImplementation$Dart.prototype.isEmpty$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return HashMapImplementation$Dart.prototype.isEmpty$member.call(this);
}
;
HashMapImplementation$Dart.prototype.isEmpty$getter = function isEmpty$getter(){
  return $bind(HashMapImplementation$Dart.prototype.isEmpty$named, this);
}
;
HashMapImplementation$Dart.prototype.length$named = function(){
  return this.length$getter().apply(this, arguments);
}
;
HashMapImplementation$Dart.prototype.length$getter = function(){
  return this._numberOfEntries$$getter_();
}
;
HashMapImplementation$Dart.prototype.forEach$member = function(f){
  var tmp$0;
  var length_0 = this._keys$$getter_().length$getter();
  {
    var i = 0;
    for (; LT$operator(i, length_0); tmp$0 = i , (i = ADD$operator(tmp$0, 1) , tmp$0)) {
      if (this._keys$$getter_().INDEX$operator(i) != null && this._keys$$getter_().INDEX$operator(i) !== HashMapImplementation$Dart._deletedKey$$getter_()) {
        f(2, $noargs, this._keys$$getter_().INDEX$operator(i), this._values$$getter_().INDEX$operator(i));
      }
    }
  }
}
;
HashMapImplementation$Dart.prototype.forEach$named = function($n, $o, f){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return HashMapImplementation$Dart.prototype.forEach$member.call(this, f);
}
;
HashMapImplementation$Dart.prototype.forEach$getter = function forEach$getter(){
  return $bind(HashMapImplementation$Dart.prototype.forEach$named, this);
}
;
function HashMapImplementation$Dart$getKeys$c0$_$26_7_2$Hoisted(dartc_scp$1, key, value){
  var tmp$1, tmp$0;
  dartc_scp$1.list.ASSIGN_INDEX$operator((tmp$0 = dartc_scp$1.i , (dartc_scp$1.i = ADD$operator(tmp$0, 1) , tmp$0)), tmp$1 = key) , tmp$1;
}

function HashMapImplementation$Dart$getKeys$c0$_$26_7_2$Hoisted$named($s0, $n, $o, key, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return HashMapImplementation$Dart$getKeys$c0$_$26_7_2$Hoisted($s0, key, value);
}

HashMapImplementation$Dart.prototype.getKeys$member = function(){
  var dartc_scp$1;
  dartc_scp$1 = {};
  dartc_scp$1.list = ListFactory$Dart.List$$Factory([RTT.getTypeArg(RTT.getTypeArgsFor(this, $cls('HashMapImplementation$Dart')), 0)], this.length$getter());
  dartc_scp$1.i = 0;
  this.forEach$member($bind(HashMapImplementation$Dart$getKeys$c0$_$26_7_2$Hoisted$named, $Dart$Null, dartc_scp$1));
  return dartc_scp$1.list;
  dartc_scp$1 = $Dart$Null;
}
;
HashMapImplementation$Dart.prototype.getKeys$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return HashMapImplementation$Dart.prototype.getKeys$member.call(this);
}
;
HashMapImplementation$Dart.prototype.getKeys$getter = function getKeys$getter(){
  return $bind(HashMapImplementation$Dart.prototype.getKeys$named, this);
}
;
function HashMapImplementation$Dart$getValues$c0$_$26_9_2$Hoisted(dartc_scp$1, key, value){
  var tmp$1, tmp$0;
  dartc_scp$1.list.ASSIGN_INDEX$operator((tmp$0 = dartc_scp$1.i , (dartc_scp$1.i = ADD$operator(tmp$0, 1) , tmp$0)), tmp$1 = value) , tmp$1;
}

function HashMapImplementation$Dart$getValues$c0$_$26_9_2$Hoisted$named($s0, $n, $o, key, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return HashMapImplementation$Dart$getValues$c0$_$26_9_2$Hoisted($s0, key, value);
}

HashMapImplementation$Dart.prototype.getValues$member = function(){
  var dartc_scp$1;
  dartc_scp$1 = {};
  dartc_scp$1.list = ListFactory$Dart.List$$Factory([RTT.getTypeArg(RTT.getTypeArgsFor(this, $cls('HashMapImplementation$Dart')), 1)], this.length$getter());
  dartc_scp$1.i = 0;
  this.forEach$member($bind(HashMapImplementation$Dart$getValues$c0$_$26_9_2$Hoisted$named, $Dart$Null, dartc_scp$1));
  return dartc_scp$1.list;
  dartc_scp$1 = $Dart$Null;
}
;
HashMapImplementation$Dart.prototype.getValues$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return HashMapImplementation$Dart.prototype.getValues$member.call(this);
}
;
HashMapImplementation$Dart.prototype.getValues$getter = function getValues$getter(){
  return $bind(HashMapImplementation$Dart.prototype.getValues$named, this);
}
;
HashMapImplementation$Dart.prototype.containsKey$member = function(key){
  return NE$operator(this._probeForLookup$$member_(key), negate$operator(1));
}
;
HashMapImplementation$Dart.prototype.containsKey$named = function($n, $o, key){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return HashMapImplementation$Dart.prototype.containsKey$member.call(this, key);
}
;
HashMapImplementation$Dart.prototype.containsKey$getter = function containsKey$getter(){
  return $bind(HashMapImplementation$Dart.prototype.containsKey$named, this);
}
;
HashMapImplementation$Dart.prototype.containsValue$member = function(value){
  var tmp$0;
  var length_0 = this._values$$getter_().length$getter();
  {
    var i = 0;
    for (; LT$operator(i, length_0); tmp$0 = i , (i = ADD$operator(tmp$0, 1) , tmp$0)) {
      if (this._keys$$getter_().INDEX$operator(i) != null && this._keys$$getter_().INDEX$operator(i) !== HashMapImplementation$Dart._deletedKey$$getter_()) {
        if (EQ$operator(this._values$$getter_().INDEX$operator(i), value)) {
          return true;
        }
      }
    }
  }
  return false;
}
;
HashMapImplementation$Dart.prototype.containsValue$named = function($n, $o, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return HashMapImplementation$Dart.prototype.containsValue$member.call(this, value);
}
;
HashMapImplementation$Dart.prototype.containsValue$getter = function containsValue$getter(){
  return $bind(HashMapImplementation$Dart.prototype.containsValue$named, this);
}
;
