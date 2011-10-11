function VariableSizeArrayIterator$Dart(){
}

VariableSizeArrayIterator$Dart.$lookupRTT = function(typeArgs){
  return RTT.create($cls('VariableSizeArrayIterator$Dart'), VariableSizeArrayIterator$Dart.$RTTimplements, typeArgs);
}
;
VariableSizeArrayIterator$Dart.$RTTimplements = function(rtt, typeArgs){
  VariableSizeArrayIterator$Dart.$addTo(rtt, typeArgs);
  rtt.derivedTypes = [];
}
;
VariableSizeArrayIterator$Dart.$addTo = function(target, typeArgs){
  var rtt = VariableSizeArrayIterator$Dart.$lookupRTT(typeArgs);
  target.implementedTypes[rtt.classKey] = rtt;
  Iterator$Dart.$addTo(target, [RTT.getTypeArg(target.typeArgs, 0)]);
}
;
VariableSizeArrayIterator$Dart.prototype.$implements$VariableSizeArrayIterator$Dart = 1;
VariableSizeArrayIterator$Dart.prototype.$implements$Iterator$Dart = 1;
VariableSizeArrayIterator$Dart.prototype.$implements$Object$Dart = 1;
VariableSizeArrayIterator$Dart.$Constructor = function(array){
  Object.$Constructor.call(this);
}
;
VariableSizeArrayIterator$Dart.$Initializer = function(array){
  Object.$Initializer.call(this);
  this._array$$field_ = array;
  this._pos$$field_ = 0;
}
;
VariableSizeArrayIterator$Dart.VariableSizeArrayIterator$$Factory = function($rtt, array){
  var tmp$0 = new VariableSizeArrayIterator$Dart;
  tmp$0.$typeInfo = $rtt;
  VariableSizeArrayIterator$Dart.$Initializer.call(tmp$0, array);
  VariableSizeArrayIterator$Dart.$Constructor.call(tmp$0, array);
  return tmp$0;
}
;
VariableSizeArrayIterator$Dart.prototype.hasNext$member = function(){
  return GT$operator(this._array$$getter_().length$getter(), this._pos$$getter_());
}
;
VariableSizeArrayIterator$Dart.prototype.hasNext$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return VariableSizeArrayIterator$Dart.prototype.hasNext$member.call(this);
}
;
VariableSizeArrayIterator$Dart.prototype.hasNext$getter = function hasNext$getter(){
  return $bind(VariableSizeArrayIterator$Dart.prototype.hasNext$named, this);
}
;
VariableSizeArrayIterator$Dart.prototype.next$member = function(){
  var tmp$1, tmp$0;
  if (!this.hasNext$member()) {
    $Dart$ThrowException($intern(NoMoreElementsException$Dart.NoMoreElementsException$$Factory()));
  }
  return this._array$$getter_().INDEX$operator((tmp$0 = this._pos$$getter_() , (this._pos$$setter_(tmp$1 = ADD$operator(tmp$0, 1)) , tmp$1 , tmp$0)));
}
;
VariableSizeArrayIterator$Dart.prototype.next$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return VariableSizeArrayIterator$Dart.prototype.next$member.call(this);
}
;
VariableSizeArrayIterator$Dart.prototype.next$getter = function next$getter(){
  return $bind(VariableSizeArrayIterator$Dart.prototype.next$named, this);
}
;
VariableSizeArrayIterator$Dart.prototype._array$$named_ = function(){
  return this._array$$getter_().apply(this, arguments);
}
;
VariableSizeArrayIterator$Dart.prototype._array$$getter_ = function(){
  return this._array$$field_;
}
;
VariableSizeArrayIterator$Dart.prototype._pos$$named_ = function(){
  return this._pos$$getter_().apply(this, arguments);
}
;
VariableSizeArrayIterator$Dart.prototype._pos$$getter_ = function(){
  return this._pos$$field_;
}
;
VariableSizeArrayIterator$Dart.prototype._pos$$setter_ = function(tmp$0){
  this._pos$$field_ = tmp$0;
}
;
