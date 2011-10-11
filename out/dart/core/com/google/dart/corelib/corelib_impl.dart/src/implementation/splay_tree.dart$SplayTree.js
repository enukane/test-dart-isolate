function SplayTree$Dart(){
}

SplayTree$Dart.$lookupRTT = function(typeArgs){
  return RTT.create($cls('SplayTree$Dart'), SplayTree$Dart.$RTTimplements, typeArgs);
}
;
SplayTree$Dart.$RTTimplements = function(rtt, typeArgs){
  SplayTree$Dart.$addTo(rtt, typeArgs);
  rtt.derivedTypes = [];
}
;
SplayTree$Dart.$addTo = function(target, typeArgs){
  var rtt = SplayTree$Dart.$lookupRTT(typeArgs);
  target.implementedTypes[rtt.classKey] = rtt;
  Map$Dart.$addTo(target, [RTT.getTypeArg(target.typeArgs, 0), RTT.getTypeArg(target.typeArgs, 1)]);
}
;
SplayTree$Dart.prototype.$implements$SplayTree$Dart = 1;
SplayTree$Dart.prototype.$implements$Map$Dart = 1;
SplayTree$Dart.prototype.$implements$Object$Dart = 1;
SplayTree$Dart.$Constructor = function(){
  Object.$Constructor.call(this);
  var tmp$1, tmp$0;
  this._dummy$$setter_(tmp$0 = SplayTreeNode$Dart.SplayTreeNode$$Factory(SplayTreeNode$Dart.$lookupRTT([RTT.getTypeArg(RTT.getTypeArgsFor(this, $cls('SplayTree$Dart')), 0), RTT.getTypeArg(RTT.getTypeArgsFor(this, $cls('SplayTree$Dart')), 1)]), $Dart$Null, $Dart$Null)) , tmp$0;
  this._count$$setter_(tmp$1 = 0) , tmp$1;
}
;
SplayTree$Dart.$Initializer = function(){
  Object.$Initializer.call(this);
}
;
SplayTree$Dart.SplayTree$$Factory = function($rtt){
  var tmp$0 = new SplayTree$Dart;
  tmp$0.$typeInfo = $rtt;
  SplayTree$Dart.$Initializer.call(tmp$0);
  SplayTree$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
SplayTree$Dart.prototype._root$$named_ = function(){
  return this._root$$getter_().apply(this, arguments);
}
;
SplayTree$Dart.prototype._root$$getter_ = function(){
  return this._root$$field_;
}
;
SplayTree$Dart.prototype._root$$setter_ = function(tmp$0){
  this._root$$field_ = tmp$0;
}
;
SplayTree$Dart.prototype._dummy$$named_ = function(){
  return this._dummy$$getter_().apply(this, arguments);
}
;
SplayTree$Dart.prototype._dummy$$getter_ = function(){
  return this._dummy$$field_;
}
;
SplayTree$Dart.prototype._dummy$$setter_ = function(tmp$0){
  this._dummy$$field_ = tmp$0;
}
;
SplayTree$Dart.prototype._count$$named_ = function(){
  return this._count$$getter_().apply(this, arguments);
}
;
SplayTree$Dart.prototype._count$$getter_ = function(){
  return this._count$$field_;
}
;
SplayTree$Dart.prototype._count$$setter_ = function(tmp$0){
  this._count$$field_ = tmp$0;
}
;
SplayTree$Dart.prototype.splay_$member = function(key){
  var tmp$11, tmp$10, tmp$12, tmp$9, tmp$5, tmp$6, tmp$7, tmp$8, tmp$1, tmp$2, tmp$3, tmp$4, tmp$0;
  if (this.isEmpty$member()) {
    return;
  }
  var left = this._dummy$$getter_();
  var right = this._dummy$$getter_();
  var current = this._root$$getter_();
  while (true) {
    if (LT$operator(key.compareTo$named(1, $noargs, current.key$getter()), 0)) {
      if (current.left$getter() == null) {
        break;
      }
      if (LT$operator(key.compareTo$named(1, $noargs, current.left$getter().key$getter()), 0)) {
        var tmp = current.left$getter();
        current.left$setter(tmp$0 = tmp.right$getter()) , tmp$0;
        tmp.right$setter(tmp$1 = current) , tmp$1;
        current = tmp;
        if (current.left$getter() == null) {
          break;
        }
      }
      right.left$setter(tmp$2 = current) , tmp$2;
      right = current;
      current = current.left$getter();
    }
     else {
      if (GT$operator(key.compareTo$named(1, $noargs, current.key$getter()), 0)) {
        if (current.right$getter() == null) {
          break;
        }
        if (GT$operator(key.compareTo$named(1, $noargs, current.right$getter().key$getter()), 0)) {
          var tmp_0 = current.right$getter();
          current.right$setter(tmp$3 = tmp_0.left$getter()) , tmp$3;
          tmp_0.left$setter(tmp$4 = current) , tmp$4;
          current = tmp_0;
          if (current.right$getter() == null) {
            break;
          }
        }
        left.right$setter(tmp$5 = current) , tmp$5;
        left = current;
        current = current.right$getter();
      }
       else {
        break;
      }
    }
  }
  left.right$setter(tmp$6 = current.left$getter()) , tmp$6;
  right.left$setter(tmp$7 = current.right$getter()) , tmp$7;
  current.left$setter(tmp$8 = this._dummy$$getter_().right$getter()) , tmp$8;
  current.right$setter(tmp$9 = this._dummy$$getter_().left$getter()) , tmp$9;
  this._root$$setter_(tmp$10 = current) , tmp$10;
  this._dummy$$getter_().right$setter(tmp$11 = $Dart$Null) , tmp$11;
  this._dummy$$getter_().left$setter(tmp$12 = $Dart$Null) , tmp$12;
}
;
SplayTree$Dart.prototype.splay_$named = function($n, $o, key){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return SplayTree$Dart.prototype.splay_$member.call(this, key);
}
;
SplayTree$Dart.prototype.splay_$getter = function splay_$getter(){
  return $bind(SplayTree$Dart.prototype.splay_$named, this);
}
;
SplayTree$Dart.prototype.INDEX$operator = function(key){
  if (!this.isEmpty$member()) {
    this.splay_$member(key);
    if (EQ$operator(this._root$$getter_().key$getter().compareTo$named(1, $noargs, key), 0)) {
      return this._root$$getter_().value$getter();
    }
  }
  return $Dart$Null;
}
;
SplayTree$Dart.prototype.remove$member = function(key){
  var tmp$1, tmp$2, tmp$3, tmp$4, tmp$0;
  if (this.isEmpty$member()) {
    return $Dart$Null;
  }
  this.splay_$member(key);
  if (NE$operator(this._root$$getter_().key$getter().compareTo$named(1, $noargs, key), 0)) {
    return $Dart$Null;
  }
  var value = this._root$$getter_().value$getter();
  tmp$0 = this._count$$getter_() , (this._count$$setter_(tmp$1 = SUB$operator(tmp$0, 1)) , tmp$1 , tmp$0);
  if (this._root$$getter_().left$getter() == null) {
    this._root$$setter_(tmp$2 = this._root$$getter_().right$getter()) , tmp$2;
  }
   else {
    var right = this._root$$getter_().right$getter();
    this._root$$setter_(tmp$3 = this._root$$getter_().left$getter()) , tmp$3;
    this.splay_$member(key);
    this._root$$getter_().right$setter(tmp$4 = right) , tmp$4;
  }
  return value;
}
;
SplayTree$Dart.prototype.remove$named = function($n, $o, key){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return SplayTree$Dart.prototype.remove$member.call(this, key);
}
;
SplayTree$Dart.prototype.remove$getter = function remove$getter(){
  return $bind(SplayTree$Dart.prototype.remove$named, this);
}
;
SplayTree$Dart.prototype.ASSIGN_INDEX$operator = function(key, value){
  var tmp$11, tmp$10, tmp$12, tmp$9, tmp$5, tmp$6, tmp$7, tmp$8, tmp$1, tmp$2, tmp$3, tmp$4, tmp$0;
  if (this.isEmpty$member()) {
    tmp$0 = this._count$$getter_() , (this._count$$setter_(tmp$1 = ADD$operator(tmp$0, 1)) , tmp$1 , tmp$0);
    this._root$$setter_(tmp$2 = SplayTreeNode$Dart.SplayTreeNode$$Factory(SplayTreeNode$Dart.$lookupRTT(), key, value)) , tmp$2;
    return;
  }
  this.splay_$member(key);
  if (EQ$operator(this._root$$getter_().key$getter().compareTo$named(1, $noargs, key), 0)) {
    this._root$$getter_().value$setter(tmp$3 = value) , tmp$3;
    return;
  }
  var node = SplayTreeNode$Dart.SplayTreeNode$$Factory(SplayTreeNode$Dart.$lookupRTT(), key, value);
  tmp$4 = this._count$$getter_() , (this._count$$setter_(tmp$5 = ADD$operator(tmp$4, 1)) , tmp$5 , tmp$4);
  if (GT$operator(key.compareTo$named(1, $noargs, this._root$$getter_().key$getter()), 0)) {
    node.left$setter(tmp$6 = this._root$$getter_()) , tmp$6;
    node.right$setter(tmp$7 = this._root$$getter_().right$getter()) , tmp$7;
    this._root$$getter_().right$setter(tmp$8 = $Dart$Null) , tmp$8;
  }
   else {
    node.right$setter(tmp$9 = this._root$$getter_()) , tmp$9;
    node.left$setter(tmp$10 = this._root$$getter_().left$getter()) , tmp$10;
    this._root$$getter_().left$setter(tmp$11 = $Dart$Null) , tmp$11;
  }
  this._root$$setter_(tmp$12 = node) , tmp$12;
}
;
SplayTree$Dart.prototype.putIfAbsent$member = function(key, ifAbsent){
  var tmp$0;
  if (this.containsKey$member(key)) {
    return this.INDEX$operator(key);
  }
  var value = ifAbsent(0, $noargs);
  this.ASSIGN_INDEX$operator(key, tmp$0 = value) , tmp$0;
  return value;
}
;
SplayTree$Dart.prototype.putIfAbsent$named = function($n, $o, key, ifAbsent){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return SplayTree$Dart.prototype.putIfAbsent$member.call(this, key, ifAbsent);
}
;
SplayTree$Dart.prototype.putIfAbsent$getter = function putIfAbsent$getter(){
  return $bind(SplayTree$Dart.prototype.putIfAbsent$named, this);
}
;
SplayTree$Dart.prototype.isEmpty$member = function(){
  return this._root$$getter_() == null;
}
;
SplayTree$Dart.prototype.isEmpty$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return SplayTree$Dart.prototype.isEmpty$member.call(this);
}
;
SplayTree$Dart.prototype.isEmpty$getter = function isEmpty$getter(){
  return $bind(SplayTree$Dart.prototype.isEmpty$named, this);
}
;
SplayTree$Dart.prototype.forEach$member = function(f){
  var list = ListFactory$Dart.List$$Factory([SplayTreeNode$Dart.$lookupRTT([RTT.getTypeArg(RTT.getTypeArgsFor(this, $cls('SplayTree$Dart')), 0), RTT.getTypeArg(RTT.getTypeArgsFor(this, $cls('SplayTree$Dart')), 1)])], $Dart$Null);
  var current = this._root$$getter_();
  while (NE$operator(current, $Dart$Null)) {
    if (NE$operator(current.left$getter(), $Dart$Null)) {
      list.add$named(1, $noargs, current);
      current = current.left$getter();
    }
     else {
      f(2, $noargs, current.key$getter(), current.value$getter());
      while (EQ$operator(current.right$getter(), $Dart$Null)) {
        if (list.isEmpty$named(0, $noargs)) {
          return;
        }
        current = list.removeLast$named(0, $noargs);
        f(2, $noargs, current.key$getter(), current.value$getter());
      }
      current = current.right$getter();
    }
  }
}
;
SplayTree$Dart.prototype.forEach$named = function($n, $o, f){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return SplayTree$Dart.prototype.forEach$member.call(this, f);
}
;
SplayTree$Dart.prototype.forEach$getter = function forEach$getter(){
  return $bind(SplayTree$Dart.prototype.forEach$named, this);
}
;
SplayTree$Dart.prototype.length$named = function(){
  return this.length$getter().apply(this, arguments);
}
;
SplayTree$Dart.prototype.length$getter = function(){
  return this._count$$getter_();
}
;
SplayTree$Dart.prototype.clear$member = function(){
  var tmp$1, tmp$0;
  this._root$$setter_(tmp$0 = $Dart$Null) , tmp$0;
  this._count$$setter_(tmp$1 = 0) , tmp$1;
}
;
SplayTree$Dart.prototype.clear$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return SplayTree$Dart.prototype.clear$member.call(this);
}
;
SplayTree$Dart.prototype.clear$getter = function clear$getter(){
  return $bind(SplayTree$Dart.prototype.clear$named, this);
}
;
SplayTree$Dart.prototype.containsKey$member = function(key){
  if (!this.isEmpty$member()) {
    this.splay_$member(key);
    if (EQ$operator(this._root$$getter_().key$getter().compareTo$named(1, $noargs, key), 0)) {
      return true;
    }
  }
  return false;
}
;
SplayTree$Dart.prototype.containsKey$named = function($n, $o, key){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return SplayTree$Dart.prototype.containsKey$member.call(this, key);
}
;
SplayTree$Dart.prototype.containsKey$getter = function containsKey$getter(){
  return $bind(SplayTree$Dart.prototype.containsKey$named, this);
}
;
function SplayTree$Dart$containsValue$c0$14_14$Hoisted(dartc_scp$0, dartc_scp$1, k, v){
  if (EQ$operator(dartc_scp$0.value, v)) {
    dartc_scp$1.found = true;
  }
}

function SplayTree$Dart$containsValue$c0$14_14$Hoisted$named($s0, $s1, $n, $o, k, v){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return SplayTree$Dart$containsValue$c0$14_14$Hoisted($s0, $s1, k, v);
}

SplayTree$Dart.prototype.containsValue$member = function(value){
  var dartc_scp$0 = {value:value};
  var dartc_scp$1;
  dartc_scp$1 = {};
  dartc_scp$1.found = false;
  this.forEach$member($bind(SplayTree$Dart$containsValue$c0$14_14$Hoisted$named, $Dart$Null, dartc_scp$0, dartc_scp$1));
  return dartc_scp$1.found;
  dartc_scp$1 = $Dart$Null;
}
;
SplayTree$Dart.prototype.containsValue$named = function($n, $o, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return SplayTree$Dart.prototype.containsValue$member.call(this, value);
}
;
SplayTree$Dart.prototype.containsValue$getter = function containsValue$getter(){
  return $bind(SplayTree$Dart.prototype.containsValue$named, this);
}
;
function SplayTree$Dart$getKeys$c0$14_14$Hoisted(dartc_scp$1, k, v){
  dartc_scp$1.list.add$named(1, $noargs, k);
}

function SplayTree$Dart$getKeys$c0$14_14$Hoisted$named($s0, $n, $o, k, v){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return SplayTree$Dart$getKeys$c0$14_14$Hoisted($s0, k, v);
}

SplayTree$Dart.prototype.getKeys$member = function(){
  var dartc_scp$1;
  dartc_scp$1 = {};
  dartc_scp$1.list = ListFactory$Dart.List$$Factory([RTT.getTypeArg(RTT.getTypeArgsFor(this, $cls('SplayTree$Dart')), 0)], $Dart$Null);
  this.forEach$member($bind(SplayTree$Dart$getKeys$c0$14_14$Hoisted$named, $Dart$Null, dartc_scp$1));
  return dartc_scp$1.list;
  dartc_scp$1 = $Dart$Null;
}
;
SplayTree$Dart.prototype.getKeys$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return SplayTree$Dart.prototype.getKeys$member.call(this);
}
;
SplayTree$Dart.prototype.getKeys$getter = function getKeys$getter(){
  return $bind(SplayTree$Dart.prototype.getKeys$named, this);
}
;
function SplayTree$Dart$getValues$c0$14_14$Hoisted(dartc_scp$1, k, v){
  dartc_scp$1.list.add$named(1, $noargs, v);
}

function SplayTree$Dart$getValues$c0$14_14$Hoisted$named($s0, $n, $o, k, v){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return SplayTree$Dart$getValues$c0$14_14$Hoisted($s0, k, v);
}

SplayTree$Dart.prototype.getValues$member = function(){
  var dartc_scp$1;
  dartc_scp$1 = {};
  dartc_scp$1.list = ListFactory$Dart.List$$Factory([RTT.getTypeArg(RTT.getTypeArgsFor(this, $cls('SplayTree$Dart')), 1)], $Dart$Null);
  this.forEach$member($bind(SplayTree$Dart$getValues$c0$14_14$Hoisted$named, $Dart$Null, dartc_scp$1));
  return dartc_scp$1.list;
  dartc_scp$1 = $Dart$Null;
}
;
SplayTree$Dart.prototype.getValues$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return SplayTree$Dart.prototype.getValues$member.call(this);
}
;
SplayTree$Dart.prototype.getValues$getter = function getValues$getter(){
  return $bind(SplayTree$Dart.prototype.getValues$named, this);
}
;
