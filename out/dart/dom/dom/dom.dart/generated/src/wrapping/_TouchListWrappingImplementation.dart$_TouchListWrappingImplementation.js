function _TouchListWrappingImplementation$Dart(){
}

_TouchListWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('_TouchListWrappingImplementation$Dart'), _TouchListWrappingImplementation$Dart.$RTTimplements);
}
;
_TouchListWrappingImplementation$Dart.$RTTimplements = function(rtt){
  _TouchListWrappingImplementation$Dart.$addTo(rtt);
}
;
_TouchListWrappingImplementation$Dart.$addTo = function(target){
  var rtt = _TouchListWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  DOMWrapperBase$Dart.$addTo(target);
  TouchList$Dart.$addTo(target);
}
;
_TouchListWrappingImplementation$Dart.prototype.$implements$_TouchListWrappingImplementation$Dart = 1;
_TouchListWrappingImplementation$Dart.prototype.$implements$TouchList$Dart = 1;
_TouchListWrappingImplementation$Dart.prototype.$implements$List$Dart = 1;
_TouchListWrappingImplementation$Dart.prototype.$implements$Collection$Dart = 1;
_TouchListWrappingImplementation$Dart.prototype.$implements$Iterable$Dart = 1;
_TouchListWrappingImplementation$Dart.prototype.$implements$DOMWrapperBase$Dart = 1;
_TouchListWrappingImplementation$Dart.prototype.$implements$DOMType$Dart = 1;
_TouchListWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(_TouchListWrappingImplementation$Dart, DOMWrapperBase$Dart);
_TouchListWrappingImplementation$Dart.$Constructor = function(){
  DOMWrapperBase$Dart.$Constructor.call(this);
}
;
_TouchListWrappingImplementation$Dart.$Initializer = function(){
  DOMWrapperBase$Dart.$Initializer.call(this);
}
;
_TouchListWrappingImplementation$Dart._TouchListWrappingImplementation$$Factory = function(){
  var tmp$0 = new _TouchListWrappingImplementation$Dart;
  tmp$0.$typeInfo = _TouchListWrappingImplementation$Dart.$lookupRTT();
  _TouchListWrappingImplementation$Dart.$Initializer.call(tmp$0);
  _TouchListWrappingImplementation$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
_TouchListWrappingImplementation$Dart.create__TouchListWrappingImplementation$member = function(){
  return _TouchListWrappingImplementation$Dart._TouchListWrappingImplementation$$Factory();
}
;
_TouchListWrappingImplementation$Dart.create__TouchListWrappingImplementation$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _TouchListWrappingImplementation$Dart.create__TouchListWrappingImplementation$member();
}
;
function native__TouchListWrappingImplementation_create__TouchListWrappingImplementation(){
  return _TouchListWrappingImplementation$Dart.create__TouchListWrappingImplementation$member();
}

_TouchListWrappingImplementation$Dart.create__TouchListWrappingImplementation$getter = function create__TouchListWrappingImplementation$getter(){
  return _TouchListWrappingImplementation$Dart.create__TouchListWrappingImplementation$named;
}
;
_TouchListWrappingImplementation$Dart.prototype.length$named = function(){
  return this.length$getter().apply(this, arguments);
}
;
_TouchListWrappingImplementation$Dart.prototype.length$getter = function(){
  return _TouchListWrappingImplementation$Dart._get__TouchList_length$$member_(this);
}
;
_TouchListWrappingImplementation$Dart._get__TouchList_length$$member_ = function(_this){
  return native__TouchListWrappingImplementation__get__TouchList_length(_this);
}
;
_TouchListWrappingImplementation$Dart._get__TouchList_length$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _TouchListWrappingImplementation$Dart._get__TouchList_length$$member_(_this);
}
;
_TouchListWrappingImplementation$Dart._get__TouchList_length$$getter_ = function _get__TouchList_length$$getter_(){
  return _TouchListWrappingImplementation$Dart._get__TouchList_length$$named_;
}
;
_TouchListWrappingImplementation$Dart.prototype.INDEX$operator = function(index){
  return this.item$member(index);
}
;
_TouchListWrappingImplementation$Dart.prototype.ASSIGN_INDEX$operator = function(index, value){
  $Dart$ThrowException(UnsupportedOperationException$Dart.UnsupportedOperationException$$Factory('Cannot assign element of immutable List.'));
}
;
_TouchListWrappingImplementation$Dart.prototype.add$member = function(value){
  $Dart$ThrowException(UnsupportedOperationException$Dart.UnsupportedOperationException$$Factory('Cannot add to immutable List.'));
}
;
_TouchListWrappingImplementation$Dart.prototype.add$named = function($n, $o, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _TouchListWrappingImplementation$Dart.prototype.add$member.call(this, value);
}
;
_TouchListWrappingImplementation$Dart.prototype.add$getter = function add$getter(){
  return $bind(_TouchListWrappingImplementation$Dart.prototype.add$named, this);
}
;
_TouchListWrappingImplementation$Dart.prototype.addLast$member = function(value){
  $Dart$ThrowException(UnsupportedOperationException$Dart.UnsupportedOperationException$$Factory('Cannot add to immutable List.'));
}
;
_TouchListWrappingImplementation$Dart.prototype.addLast$named = function($n, $o, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _TouchListWrappingImplementation$Dart.prototype.addLast$member.call(this, value);
}
;
_TouchListWrappingImplementation$Dart.prototype.addLast$getter = function addLast$getter(){
  return $bind(_TouchListWrappingImplementation$Dart.prototype.addLast$named, this);
}
;
_TouchListWrappingImplementation$Dart.prototype.addAll$member = function(collection){
  $Dart$ThrowException(UnsupportedOperationException$Dart.UnsupportedOperationException$$Factory('Cannot add to immutable List.'));
}
;
_TouchListWrappingImplementation$Dart.prototype.addAll$named = function($n, $o, collection){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _TouchListWrappingImplementation$Dart.prototype.addAll$member.call(this, collection);
}
;
_TouchListWrappingImplementation$Dart.prototype.addAll$getter = function addAll$getter(){
  return $bind(_TouchListWrappingImplementation$Dart.prototype.addAll$named, this);
}
;
_TouchListWrappingImplementation$Dart.prototype.sort$member = function(compare){
  $Dart$ThrowException(UnsupportedOperationException$Dart.UnsupportedOperationException$$Factory('Cannot sort immutable List.'));
}
;
_TouchListWrappingImplementation$Dart.prototype.sort$named = function($n, $o, compare){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _TouchListWrappingImplementation$Dart.prototype.sort$member.call(this, compare);
}
;
_TouchListWrappingImplementation$Dart.prototype.sort$getter = function sort$getter(){
  return $bind(_TouchListWrappingImplementation$Dart.prototype.sort$named, this);
}
;
_TouchListWrappingImplementation$Dart.prototype.copyFrom$member = function(src, srcStart, dstStart, count){
  $Dart$ThrowException(UnsupportedOperationException$Dart.UnsupportedOperationException$$Factory('This object is immutable.'));
}
;
_TouchListWrappingImplementation$Dart.prototype.copyFrom$named = function($n, $o, src, srcStart, dstStart, count){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 4)
    $nsme();
  return _TouchListWrappingImplementation$Dart.prototype.copyFrom$member.call(this, src, srcStart, dstStart, count);
}
;
_TouchListWrappingImplementation$Dart.prototype.copyFrom$getter = function copyFrom$getter(){
  return $bind(_TouchListWrappingImplementation$Dart.prototype.copyFrom$named, this);
}
;
_TouchListWrappingImplementation$Dart.prototype.indexOf$member = function(element, startIndex){
  return _Lists$Dart.indexOf$member(this, element, startIndex, this.length$getter());
}
;
_TouchListWrappingImplementation$Dart.prototype.indexOf$named = function($n, $o, element, startIndex){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _TouchListWrappingImplementation$Dart.prototype.indexOf$member.call(this, element, startIndex);
}
;
_TouchListWrappingImplementation$Dart.prototype.indexOf$getter = function indexOf$getter(){
  return $bind(_TouchListWrappingImplementation$Dart.prototype.indexOf$named, this);
}
;
_TouchListWrappingImplementation$Dart.prototype.lastIndexOf$member = function(element, startIndex){
  return _Lists$Dart.lastIndexOf$member(this, element, startIndex);
}
;
_TouchListWrappingImplementation$Dart.prototype.lastIndexOf$named = function($n, $o, element, startIndex){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _TouchListWrappingImplementation$Dart.prototype.lastIndexOf$member.call(this, element, startIndex);
}
;
_TouchListWrappingImplementation$Dart.prototype.lastIndexOf$getter = function lastIndexOf$getter(){
  return $bind(_TouchListWrappingImplementation$Dart.prototype.lastIndexOf$named, this);
}
;
_TouchListWrappingImplementation$Dart.prototype.clear$member = function(){
  $Dart$ThrowException(UnsupportedOperationException$Dart.UnsupportedOperationException$$Factory('Cannot clear immutable List.'));
}
;
_TouchListWrappingImplementation$Dart.prototype.clear$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _TouchListWrappingImplementation$Dart.prototype.clear$member.call(this);
}
;
_TouchListWrappingImplementation$Dart.prototype.clear$getter = function clear$getter(){
  return $bind(_TouchListWrappingImplementation$Dart.prototype.clear$named, this);
}
;
_TouchListWrappingImplementation$Dart.prototype.removeLast$member = function(){
  $Dart$ThrowException(UnsupportedOperationException$Dart.UnsupportedOperationException$$Factory('Cannot removeLast on immutable List.'));
}
;
_TouchListWrappingImplementation$Dart.prototype.removeLast$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _TouchListWrappingImplementation$Dart.prototype.removeLast$member.call(this);
}
;
_TouchListWrappingImplementation$Dart.prototype.removeLast$getter = function removeLast$getter(){
  return $bind(_TouchListWrappingImplementation$Dart.prototype.removeLast$named, this);
}
;
_TouchListWrappingImplementation$Dart.prototype.last$member = function(){
  return this.INDEX$operator(SUB$operator(this.length$getter(), 1));
}
;
_TouchListWrappingImplementation$Dart.prototype.last$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _TouchListWrappingImplementation$Dart.prototype.last$member.call(this);
}
;
_TouchListWrappingImplementation$Dart.prototype.last$getter = function last$getter(){
  return $bind(_TouchListWrappingImplementation$Dart.prototype.last$named, this);
}
;
_TouchListWrappingImplementation$Dart.prototype.forEach$member = function(f){
  _Collections$Dart.forEach$member(this, f);
}
;
_TouchListWrappingImplementation$Dart.prototype.forEach$named = function($n, $o, f){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _TouchListWrappingImplementation$Dart.prototype.forEach$member.call(this, f);
}
;
_TouchListWrappingImplementation$Dart.prototype.forEach$getter = function forEach$getter(){
  return $bind(_TouchListWrappingImplementation$Dart.prototype.forEach$named, this);
}
;
_TouchListWrappingImplementation$Dart.prototype.filter$member = function(f){
  return _Collections$Dart.filter$member(this, ListFactory$Dart.List$$Factory([Touch$Dart.$lookupRTT()], $Dart$Null), f);
}
;
_TouchListWrappingImplementation$Dart.prototype.filter$named = function($n, $o, f){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _TouchListWrappingImplementation$Dart.prototype.filter$member.call(this, f);
}
;
_TouchListWrappingImplementation$Dart.prototype.filter$getter = function filter$getter(){
  return $bind(_TouchListWrappingImplementation$Dart.prototype.filter$named, this);
}
;
_TouchListWrappingImplementation$Dart.prototype.every$member = function(f){
  return _Collections$Dart.every$member(this, f);
}
;
_TouchListWrappingImplementation$Dart.prototype.every$named = function($n, $o, f){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _TouchListWrappingImplementation$Dart.prototype.every$member.call(this, f);
}
;
_TouchListWrappingImplementation$Dart.prototype.every$getter = function every$getter(){
  return $bind(_TouchListWrappingImplementation$Dart.prototype.every$named, this);
}
;
_TouchListWrappingImplementation$Dart.prototype.some$member = function(f){
  return _Collections$Dart.some$member(this, f);
}
;
_TouchListWrappingImplementation$Dart.prototype.some$named = function($n, $o, f){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _TouchListWrappingImplementation$Dart.prototype.some$member.call(this, f);
}
;
_TouchListWrappingImplementation$Dart.prototype.some$getter = function some$getter(){
  return $bind(_TouchListWrappingImplementation$Dart.prototype.some$named, this);
}
;
_TouchListWrappingImplementation$Dart.prototype.setRange$member = function(start, length_0, from, startFrom){
  $Dart$ThrowException(UnsupportedOperationException$Dart.UnsupportedOperationException$$Factory('Cannot setRange on immutable List.'));
}
;
_TouchListWrappingImplementation$Dart.prototype.setRange$named = function($n, $o, start, length_0, from, startFrom){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 3:
      startFrom = $o.startFrom?(++seen , $o.startFrom):null;
  }
  if (seen != $o.count || seen + def + $n != 4)
    $nsme();
  return _TouchListWrappingImplementation$Dart.prototype.setRange$member.call(this, start, length_0, from, startFrom);
}
;
_TouchListWrappingImplementation$Dart.prototype.setRange$getter = function setRange$getter(){
  return $bind(_TouchListWrappingImplementation$Dart.prototype.setRange$named, this);
}
;
_TouchListWrappingImplementation$Dart.prototype.removeRange$member = function(start, length_0){
  $Dart$ThrowException(UnsupportedOperationException$Dart.UnsupportedOperationException$$Factory('Cannot removeRange on immutable List.'));
}
;
_TouchListWrappingImplementation$Dart.prototype.removeRange$named = function($n, $o, start, length_0){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _TouchListWrappingImplementation$Dart.prototype.removeRange$member.call(this, start, length_0);
}
;
_TouchListWrappingImplementation$Dart.prototype.removeRange$getter = function removeRange$getter(){
  return $bind(_TouchListWrappingImplementation$Dart.prototype.removeRange$named, this);
}
;
_TouchListWrappingImplementation$Dart.prototype.insertRange$member = function(start, length_0, initialValue){
  $Dart$ThrowException(UnsupportedOperationException$Dart.UnsupportedOperationException$$Factory('Cannot insertRange on immutable List.'));
}
;
_TouchListWrappingImplementation$Dart.prototype.insertRange$named = function($n, $o, start, length_0, initialValue){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 2:
      initialValue = $o.initialValue?(++seen , $o.initialValue):null;
  }
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return _TouchListWrappingImplementation$Dart.prototype.insertRange$member.call(this, start, length_0, initialValue);
}
;
_TouchListWrappingImplementation$Dart.prototype.insertRange$getter = function insertRange$getter(){
  return $bind(_TouchListWrappingImplementation$Dart.prototype.insertRange$named, this);
}
;
_TouchListWrappingImplementation$Dart.prototype.getRange$member = function(start, length_0){
  $Dart$ThrowException(NotImplementedException$Dart.NotImplementedException$$Factory());
}
;
_TouchListWrappingImplementation$Dart.prototype.getRange$named = function($n, $o, start, length_0){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _TouchListWrappingImplementation$Dart.prototype.getRange$member.call(this, start, length_0);
}
;
_TouchListWrappingImplementation$Dart.prototype.getRange$getter = function getRange$getter(){
  return $bind(_TouchListWrappingImplementation$Dart.prototype.getRange$named, this);
}
;
_TouchListWrappingImplementation$Dart.prototype.isEmpty$member = function(){
  return EQ$operator(this.length$getter(), 0);
}
;
_TouchListWrappingImplementation$Dart.prototype.isEmpty$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _TouchListWrappingImplementation$Dart.prototype.isEmpty$member.call(this);
}
;
_TouchListWrappingImplementation$Dart.prototype.isEmpty$getter = function isEmpty$getter(){
  return $bind(_TouchListWrappingImplementation$Dart.prototype.isEmpty$named, this);
}
;
_TouchListWrappingImplementation$Dart.prototype.iterator$member = function(){
  return _FixedSizeListIterator$Dart._FixedSizeListIterator$$Factory(_FixedSizeListIterator$Dart.$lookupRTT([Touch$Dart.$lookupRTT()]), this);
}
;
_TouchListWrappingImplementation$Dart.prototype.iterator$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _TouchListWrappingImplementation$Dart.prototype.iterator$member.call(this);
}
;
_TouchListWrappingImplementation$Dart.prototype.iterator$getter = function iterator$getter(){
  return $bind(_TouchListWrappingImplementation$Dart.prototype.iterator$named, this);
}
;
_TouchListWrappingImplementation$Dart.prototype.item$member = function(index){
  return _TouchListWrappingImplementation$Dart._item$$member_(this, index);
}
;
_TouchListWrappingImplementation$Dart.prototype.item$named = function($n, $o, index){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _TouchListWrappingImplementation$Dart.prototype.item$member.call(this, index);
}
;
_TouchListWrappingImplementation$Dart.prototype.item$getter = function item$getter(){
  return $bind(_TouchListWrappingImplementation$Dart.prototype.item$named, this);
}
;
_TouchListWrappingImplementation$Dart._item$$member_ = function(receiver, index){
  return native__TouchListWrappingImplementation__item(receiver, index);
}
;
_TouchListWrappingImplementation$Dart._item$$named_ = function($n, $o, receiver, index){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _TouchListWrappingImplementation$Dart._item$$member_(receiver, index);
}
;
_TouchListWrappingImplementation$Dart._item$$getter_ = function _item$$getter_(){
  return _TouchListWrappingImplementation$Dart._item$$named_;
}
;
_TouchListWrappingImplementation$Dart.prototype.typeName$named = function(){
  return this.typeName$getter().apply(this, arguments);
}
;
_TouchListWrappingImplementation$Dart.prototype.typeName$getter = function(){
  return 'TouchList';
}
;
