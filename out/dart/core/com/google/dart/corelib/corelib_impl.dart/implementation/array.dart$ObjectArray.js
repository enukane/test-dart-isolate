Array.$lookupRTT = function(typeArgs){
  return RTT.create($cls('Array'), Array.$RTTimplements, typeArgs);
}
;
Array.$RTTimplements = function(rtt, typeArgs){
  Array.$addTo(rtt, typeArgs);
  rtt.derivedTypes = [];
}
;
Array.$addTo = function(target, typeArgs){
  var rtt = Array.$lookupRTT(typeArgs);
  target.implementedTypes[rtt.classKey] = rtt;
  Array$Dart.$addTo(target, [RTT.getTypeArg(target.typeArgs, 0)]);
}
;
Array.prototype.$implements$ObjectArray$Dart = 1;
Array.prototype.$implements$Array$Dart = 1;
Array.prototype.$implements$List$Dart = 1;
Array.prototype.$implements$Collection$Dart = 1;
Array.prototype.$implements$Iterable$Dart = 1;
Array.prototype.$implements$Object$Dart = 1;
Array.prototype._isFixed$$named_ = function(){
  return this._isFixed$$getter_().apply(this, arguments);
}
;
Array.prototype._isFixed$$getter_ = function(){
  return this._isFixed$$field_;
}
;
Array.prototype._isFixed$$setter_ = function(tmp$0){
  this._isFixed$$field_ = tmp$0;
}
;
Array.prototype.INDEX$operator = function(index){
  if (LTE$operator(0, index) && LT$operator(index, this.length$getter())) {
    return this._indexOperator$$member_(index);
  }
  $Dart$ThrowException(IndexOutOfRangeException$Dart.IndexOutOfRangeException$$Factory(index));
}
;
Array.prototype.ASSIGN_INDEX$operator = function(index, value){
  if (LT$operator(index, 0) || LTE$operator(this.length$getter(), index)) {
    $Dart$ThrowException(IndexOutOfRangeException$Dart.IndexOutOfRangeException$$Factory(index));
  }
  this._indexAssignOperator$$member_(index, value);
}
;
Array.prototype.iterator$member = function(){
  if (this._isFixed$$getter_()) {
    return FixedSizeArrayIterator$Dart.FixedSizeArrayIterator$$Factory(FixedSizeArrayIterator$Dart.$lookupRTT([RTT.getTypeArg(RTT.getTypeArgsFor(this, $cls('Array')), 0)]), this);
  }
   else {
    return VariableSizeArrayIterator$Dart.VariableSizeArrayIterator$$Factory(VariableSizeArrayIterator$Dart.$lookupRTT([RTT.getTypeArg(RTT.getTypeArgsFor(this, $cls('Array')), 0)]), this);
  }
}
;
Array.prototype.iterator$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return Array.prototype.iterator$member.call(this);
}
;
Array.prototype.iterator$getter = function iterator$getter(){
  return $bind(Array.prototype.iterator$named, this);
}
;
Array.prototype._indexOperator$$member_ = function(index){
  return native_ObjectArray__indexOperator.call(this, index);
}
;
Array.prototype._indexOperator$$named_ = function($n, $o, index){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return Array.prototype._indexOperator$$member_.call(this, index);
}
;
Array.prototype._indexOperator$$getter_ = function _indexOperator$$getter_(){
  return $bind(Array.prototype._indexOperator$$named_, this);
}
;
Array.prototype._indexAssignOperator$$member_ = function(index, value){
  return native_ObjectArray__indexAssignOperator.call(this, index, value);
}
;
Array.prototype._indexAssignOperator$$named_ = function($n, $o, index, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return Array.prototype._indexAssignOperator$$member_.call(this, index, value);
}
;
Array.prototype._indexAssignOperator$$getter_ = function _indexAssignOperator$$getter_(){
  return $bind(Array.prototype._indexAssignOperator$$named_, this);
}
;
Array.prototype.length$named = function(){
  return this.length$getter().apply(this, arguments);
}
;
Array.prototype.length$getter = function(){
  return native_ObjectArray_get$length.call(this);
}
;
Array.prototype.length$setter = function(length_0){
  if (this._isFixed$$getter_()) {
    $Dart$ThrowException($intern(UnsupportedOperationException$Dart.UnsupportedOperationException$$Factory('Cannot change the length of a non-extendable array')));
  }
   else {
    this._setLength$$member_(length_0);
  }
}
;
Array.prototype._setLength$$member_ = function(length_0){
  return native_ObjectArray__setLength.call(this, length_0);
}
;
Array.prototype._setLength$$named_ = function($n, $o, length_0){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return Array.prototype._setLength$$member_.call(this, length_0);
}
;
Array.prototype._setLength$$getter_ = function _setLength$$getter_(){
  return $bind(Array.prototype._setLength$$named_, this);
}
;
Array.prototype._add$$member_ = function(value){
  return native_ObjectArray__add.call(this, value);
}
;
Array.prototype._add$$named_ = function($n, $o, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return Array.prototype._add$$member_.call(this, value);
}
;
Array.prototype._add$$getter_ = function _add$$getter_(){
  return $bind(Array.prototype._add$$named_, this);
}
;
Array.prototype.forEach$member = function(f){
  Collections$Dart.forEach$member(this, f);
}
;
Array.prototype.forEach$named = function($n, $o, f){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return Array.prototype.forEach$member.call(this, f);
}
;
Array.prototype.forEach$getter = function forEach$getter(){
  return $bind(Array.prototype.forEach$named, this);
}
;
Array.prototype.filter$member = function(f){
  return Collections$Dart.filter$member(this, ArrayFactory$Dart.Array$$Factory([RTT.getTypeArg(RTT.getTypeArgsFor(this, $cls('Array')), 0)], $Dart$Null), f);
}
;
Array.prototype.filter$named = function($n, $o, f){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return Array.prototype.filter$member.call(this, f);
}
;
Array.prototype.filter$getter = function filter$getter(){
  return $bind(Array.prototype.filter$named, this);
}
;
Array.prototype.every$member = function(f){
  return Collections$Dart.every$member(this, f);
}
;
Array.prototype.every$named = function($n, $o, f){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return Array.prototype.every$member.call(this, f);
}
;
Array.prototype.every$getter = function every$getter(){
  return $bind(Array.prototype.every$named, this);
}
;
Array.prototype.some$member = function(f){
  return Collections$Dart.some$member(this, f);
}
;
Array.prototype.some$named = function($n, $o, f){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return Array.prototype.some$member.call(this, f);
}
;
Array.prototype.some$getter = function some$getter(){
  return $bind(Array.prototype.some$named, this);
}
;
Array.prototype.isEmpty$member = function(){
  return EQ$operator(this.length$getter(), 0);
}
;
Array.prototype.isEmpty$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return Array.prototype.isEmpty$member.call(this);
}
;
Array.prototype.isEmpty$getter = function isEmpty$getter(){
  return $bind(Array.prototype.isEmpty$named, this);
}
;
Array.prototype.sort$member = function(compare){
  DualPivotQuicksort$Dart.sort$member(this, compare);
}
;
Array.prototype.sort$named = function($n, $o, compare){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return Array.prototype.sort$member.call(this, compare);
}
;
Array.prototype.sort$getter = function sort$getter(){
  return $bind(Array.prototype.sort$named, this);
}
;
Array.prototype.copyFrom$member = function(src, srcStart, dstStart, count){
  Arrays$Dart.copy$member(src, srcStart, this, dstStart, count);
}
;
Array.prototype.copyFrom$named = function($n, $o, src, srcStart, dstStart, count){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 4)
    $nsme();
  return Array.prototype.copyFrom$member.call(this, src, srcStart, dstStart, count);
}
;
Array.prototype.copyFrom$getter = function copyFrom$getter(){
  return $bind(Array.prototype.copyFrom$named, this);
}
;
Array.prototype.setRange$member = function(start, length_0, from, startFrom){
  $Dart$ThrowException($intern(NotImplementedException$Dart.NotImplementedException$$Factory()));
}
;
Array.prototype.setRange$named = function($n, $o, start, length_0, from, startFrom){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 3:
      startFrom = $o.startFrom?(++seen , $o.startFrom):(++def , 0);
  }
  if (seen != $o.count || seen + def + $n != 4)
    $nsme();
  return Array.prototype.setRange$member.call(this, start, length_0, from, startFrom);
}
;
Array.prototype.setRange$getter = function setRange$getter(){
  return $bind(Array.prototype.setRange$named, this);
}
;
Array.prototype.removeRange$member = function(start, length_0){
  $Dart$ThrowException($intern(NotImplementedException$Dart.NotImplementedException$$Factory()));
}
;
Array.prototype.removeRange$named = function($n, $o, start, length_0){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return Array.prototype.removeRange$member.call(this, start, length_0);
}
;
Array.prototype.removeRange$getter = function removeRange$getter(){
  return $bind(Array.prototype.removeRange$named, this);
}
;
Array.prototype.insertRange$member = function(start, length_0, initialValue){
  $Dart$ThrowException($intern(NotImplementedException$Dart.NotImplementedException$$Factory()));
}
;
Array.prototype.insertRange$named = function($n, $o, start, length_0, initialValue){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 2:
      initialValue = $o.initialValue?(++seen , $o.initialValue):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return Array.prototype.insertRange$member.call(this, start, length_0, initialValue);
}
;
Array.prototype.insertRange$getter = function insertRange$getter(){
  return $bind(Array.prototype.insertRange$named, this);
}
;
Array.prototype.getRange$member = function(start, length_0){
  $Dart$ThrowException($intern(NotImplementedException$Dart.NotImplementedException$$Factory()));
}
;
Array.prototype.getRange$named = function($n, $o, start, length_0){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return Array.prototype.getRange$member.call(this, start, length_0);
}
;
Array.prototype.getRange$getter = function getRange$getter(){
  return $bind(Array.prototype.getRange$named, this);
}
;
Array.prototype.indexOf$member = function(element, startIndex){
  return Arrays$Dart.indexOf$member(this, element, startIndex, this.length$getter());
}
;
Array.prototype.indexOf$named = function($n, $o, element, startIndex){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return Array.prototype.indexOf$member.call(this, element, startIndex);
}
;
Array.prototype.indexOf$getter = function indexOf$getter(){
  return $bind(Array.prototype.indexOf$named, this);
}
;
Array.prototype.lastIndexOf$member = function(element, startIndex){
  return Arrays$Dart.lastIndexOf$member(this, element, startIndex);
}
;
Array.prototype.lastIndexOf$named = function($n, $o, element, startIndex){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return Array.prototype.lastIndexOf$member.call(this, element, startIndex);
}
;
Array.prototype.lastIndexOf$getter = function lastIndexOf$getter(){
  return $bind(Array.prototype.lastIndexOf$named, this);
}
;
Array.prototype.add$member = function(element){
  if (this._isFixed$$getter_()) {
    $Dart$ThrowException($intern(UnsupportedOperationException$Dart.UnsupportedOperationException$$Factory('Cannot add to a non-extendable array')));
  }
   else {
    this._add$$member_(element);
  }
}
;
Array.prototype.add$named = function($n, $o, element){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return Array.prototype.add$member.call(this, element);
}
;
Array.prototype.add$getter = function add$getter(){
  return $bind(Array.prototype.add$named, this);
}
;
Array.prototype.addLast$member = function(element){
  this.add$member(element);
}
;
Array.prototype.addLast$named = function($n, $o, element){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return Array.prototype.addLast$member.call(this, element);
}
;
Array.prototype.addLast$getter = function addLast$getter(){
  return $bind(Array.prototype.addLast$named, this);
}
;
Array.prototype.addAll$member = function(elements){
  if (this._isFixed$$getter_()) {
    $Dart$ThrowException($intern(UnsupportedOperationException$Dart.UnsupportedOperationException$$Factory('Cannot add to a non-extendable array')));
  }
   else {
    {
      var $0 = elements.iterator$named(0, $noargs);
      while ($0.hasNext$named(0, $noargs)) {
        var e = $0.next$named(0, $noargs);
        {
          this._add$$member_(e);
        }
      }
    }
  }
}
;
Array.prototype.addAll$named = function($n, $o, elements){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return Array.prototype.addAll$member.call(this, elements);
}
;
Array.prototype.addAll$getter = function addAll$getter(){
  return $bind(Array.prototype.addAll$named, this);
}
;
Array.prototype.clear$member = function(){
  var tmp$0;
  if (this._isFixed$$getter_()) {
    $Dart$ThrowException($intern(UnsupportedOperationException$Dart.UnsupportedOperationException$$Factory('Cannot clear a non-extendable array')));
  }
   else {
    this.length$setter(tmp$0 = 0) , tmp$0;
  }
}
;
Array.prototype.clear$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return Array.prototype.clear$member.call(this);
}
;
Array.prototype.clear$getter = function clear$getter(){
  return $bind(Array.prototype.clear$named, this);
}
;
Array.prototype.removeLast$member = function(){
  var tmp$0;
  if (this._isFixed$$getter_()) {
    $Dart$ThrowException($intern(UnsupportedOperationException$Dart.UnsupportedOperationException$$Factory('Cannot remove in a non-extendable array')));
  }
   else {
    var element = this.last$member();
    this.length$setter(tmp$0 = SUB$operator(this.length$getter(), 1)) , tmp$0;
    return element;
  }
}
;
Array.prototype.removeLast$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return Array.prototype.removeLast$member.call(this);
}
;
Array.prototype.removeLast$getter = function removeLast$getter(){
  return $bind(Array.prototype.removeLast$named, this);
}
;
Array.prototype.last$member = function(){
  return this.INDEX$operator(SUB$operator(this.length$getter(), 1));
}
;
Array.prototype.last$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return Array.prototype.last$member.call(this);
}
;
Array.prototype.last$getter = function last$getter(){
  return $bind(Array.prototype.last$named, this);
}
;
Array.$Constructor = function(){
  Object.$Constructor.call(this);
}
;
Array.$Initializer = function(){
  Object.$Initializer.call(this);
}
;
Array.ObjectArray$$Factory = function($rtt){
  var tmp$0 = new Array;
  tmp$0.$typeInfo = $rtt;
  Array.$Initializer.call(tmp$0);
  Array.$Constructor.call(tmp$0);
  return tmp$0;
}
;
