function HashSetIterator$Dart(){
}

HashSetIterator$Dart.$lookupRTT = function(typeArgs){
  return RTT.create($cls('HashSetIterator$Dart'), HashSetIterator$Dart.$RTTimplements, typeArgs);
}
;
HashSetIterator$Dart.$RTTimplements = function(rtt, typeArgs){
  HashSetIterator$Dart.$addTo(rtt, typeArgs);
  rtt.derivedTypes = [];
}
;
HashSetIterator$Dart.$addTo = function(target, typeArgs){
  var rtt = HashSetIterator$Dart.$lookupRTT(typeArgs);
  target.implementedTypes[rtt.classKey] = rtt;
  Iterator$Dart.$addTo(target, [RTT.getTypeArg(target.typeArgs, 0)]);
}
;
HashSetIterator$Dart.prototype.$implements$HashSetIterator$Dart = 1;
HashSetIterator$Dart.prototype.$implements$Iterator$Dart = 1;
HashSetIterator$Dart.prototype.$implements$Object$Dart = 1;
HashSetIterator$Dart.$Constructor = function(set_){
  Object.$Constructor.call(this);
  this._advance$$member_();
}
;
HashSetIterator$Dart.$Initializer = function(set_){
  Object.$Initializer.call(this);
  this._nextValidIndex$$field_ = negate$operator(1);
  this._entries$$field_ = set_._backingMap$$getter_()._keys$$getter_();
}
;
HashSetIterator$Dart.HashSetIterator$$Factory = function($rtt, set_){
  var tmp$0 = new HashSetIterator$Dart;
  tmp$0.$typeInfo = $rtt;
  HashSetIterator$Dart.$Initializer.call(tmp$0, set_);
  HashSetIterator$Dart.$Constructor.call(tmp$0, set_);
  return tmp$0;
}
;
HashSetIterator$Dart.prototype.hasNext$member = function(){
  if (GTE$operator(this._nextValidIndex$$getter_(), this._entries$$getter_().length$getter())) {
    return false;
  }
  if (this._entries$$getter_().INDEX$operator(this._nextValidIndex$$getter_()) === HashMapImplementation$Dart._deletedKey$$getter_()) {
    this._advance$$member_();
  }
  return LT$operator(this._nextValidIndex$$getter_(), this._entries$$getter_().length$getter());
}
;
HashSetIterator$Dart.prototype.hasNext$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return HashSetIterator$Dart.prototype.hasNext$member.call(this);
}
;
HashSetIterator$Dart.prototype.hasNext$getter = function hasNext$getter(){
  return $bind(HashSetIterator$Dart.prototype.hasNext$named, this);
}
;
HashSetIterator$Dart.prototype.next$member = function(){
  if (!this.hasNext$member()) {
    $Dart$ThrowException($intern(NoMoreElementsException$Dart.NoMoreElementsException$$Factory()));
  }
  var res = this._entries$$getter_().INDEX$operator(this._nextValidIndex$$getter_());
  this._advance$$member_();
  return res;
}
;
HashSetIterator$Dart.prototype.next$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return HashSetIterator$Dart.prototype.next$member.call(this);
}
;
HashSetIterator$Dart.prototype.next$getter = function next$getter(){
  return $bind(HashSetIterator$Dart.prototype.next$named, this);
}
;
HashSetIterator$Dart.prototype._advance$$member_ = function(){
  var tmp$0;
  var length_0 = this._entries$$getter_().length$getter();
  var entry = $Dart$Null;
  var deletedKey = HashMapImplementation$Dart._deletedKey$$getter_();
  do {
    if (GTE$operator((this._nextValidIndex$$setter_(tmp$0 = ADD$operator(this._nextValidIndex$$getter_(), 1)) , tmp$0), length_0)) {
      break;
    }
    entry = this._entries$$getter_().INDEX$operator(this._nextValidIndex$$getter_());
  }
   while (entry == null || entry === deletedKey);
}
;
HashSetIterator$Dart.prototype._advance$$named_ = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return HashSetIterator$Dart.prototype._advance$$member_.call(this);
}
;
HashSetIterator$Dart.prototype._advance$$getter_ = function _advance$$getter_(){
  return $bind(HashSetIterator$Dart.prototype._advance$$named_, this);
}
;
HashSetIterator$Dart.prototype._entries$$named_ = function(){
  return this._entries$$getter_().apply(this, arguments);
}
;
HashSetIterator$Dart.prototype._entries$$getter_ = function(){
  return this._entries$$field_;
}
;
HashSetIterator$Dart.prototype._entries$$setter_ = function(tmp$0){
  this._entries$$field_ = tmp$0;
}
;
HashSetIterator$Dart.prototype._nextValidIndex$$named_ = function(){
  return this._nextValidIndex$$getter_().apply(this, arguments);
}
;
HashSetIterator$Dart.prototype._nextValidIndex$$getter_ = function(){
  return this._nextValidIndex$$field_;
}
;
HashSetIterator$Dart.prototype._nextValidIndex$$setter_ = function(tmp$0){
  this._nextValidIndex$$field_ = tmp$0;
}
;
