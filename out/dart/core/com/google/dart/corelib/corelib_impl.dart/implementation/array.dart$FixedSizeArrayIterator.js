function FixedSizeArrayIterator$Dart(){
}

FixedSizeArrayIterator$Dart.$lookupRTT = function(typeArgs){
  return RTT.create($cls('FixedSizeArrayIterator$Dart'), FixedSizeArrayIterator$Dart.$RTTimplements, typeArgs);
}
;
FixedSizeArrayIterator$Dart.$RTTimplements = function(rtt, typeArgs){
  FixedSizeArrayIterator$Dart.$addTo(rtt, typeArgs);
  rtt.derivedTypes = [];
}
;
FixedSizeArrayIterator$Dart.$addTo = function(target, typeArgs){
  var rtt = FixedSizeArrayIterator$Dart.$lookupRTT(typeArgs);
  target.implementedTypes[rtt.classKey] = rtt;
  VariableSizeArrayIterator$Dart.$addTo(target, [RTT.getTypeArg(target.typeArgs, 0)]);
}
;
FixedSizeArrayIterator$Dart.prototype.$implements$FixedSizeArrayIterator$Dart = 1;
FixedSizeArrayIterator$Dart.prototype.$implements$VariableSizeArrayIterator$Dart = 1;
FixedSizeArrayIterator$Dart.prototype.$implements$Iterator$Dart = 1;
FixedSizeArrayIterator$Dart.prototype.$implements$Object$Dart = 1;
$inherits(FixedSizeArrayIterator$Dart, VariableSizeArrayIterator$Dart);
FixedSizeArrayIterator$Dart.$Constructor = function(array){
  VariableSizeArrayIterator$Dart.$Constructor.call(this, array);
}
;
FixedSizeArrayIterator$Dart.$Initializer = function(array){
  VariableSizeArrayIterator$Dart.$Initializer.call(this, array);
  this._length$$field_ = array.length$getter();
}
;
FixedSizeArrayIterator$Dart.FixedSizeArrayIterator$$Factory = function($rtt, array){
  var tmp$0 = new FixedSizeArrayIterator$Dart;
  tmp$0.$typeInfo = $rtt;
  FixedSizeArrayIterator$Dart.$Initializer.call(tmp$0, array);
  FixedSizeArrayIterator$Dart.$Constructor.call(tmp$0, array);
  return tmp$0;
}
;
FixedSizeArrayIterator$Dart.prototype.hasNext$member = function(){
  return GT$operator(this._length$$getter_(), this._pos$$getter_());
}
;
FixedSizeArrayIterator$Dart.prototype.hasNext$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return FixedSizeArrayIterator$Dart.prototype.hasNext$member.call(this);
}
;
FixedSizeArrayIterator$Dart.prototype.hasNext$getter = function hasNext$getter(){
  return $bind(FixedSizeArrayIterator$Dart.prototype.hasNext$named, this);
}
;
FixedSizeArrayIterator$Dart.prototype._length$$named_ = function(){
  return this._length$$getter_().apply(this, arguments);
}
;
FixedSizeArrayIterator$Dart.prototype._length$$getter_ = function(){
  return this._length$$field_;
}
;
