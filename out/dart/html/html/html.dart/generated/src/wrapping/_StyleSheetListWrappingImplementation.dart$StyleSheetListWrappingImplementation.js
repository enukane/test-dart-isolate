function html623afa$StyleSheetListWrappingImplementation$Dart(){
}

html623afa$StyleSheetListWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('html623afa$StyleSheetListWrappingImplementation$Dart'), html623afa$StyleSheetListWrappingImplementation$Dart.$RTTimplements);
}
;
html623afa$StyleSheetListWrappingImplementation$Dart.$RTTimplements = function(rtt){
  html623afa$StyleSheetListWrappingImplementation$Dart.$addTo(rtt);
}
;
html623afa$StyleSheetListWrappingImplementation$Dart.$addTo = function(target){
  var rtt = html623afa$StyleSheetListWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  html623afa$DOMWrapperBase$Dart.$addTo(target);
  html623afa$StyleSheetList$Dart.$addTo(target);
}
;
html623afa$StyleSheetListWrappingImplementation$Dart.prototype.$implements$html623afa$StyleSheetListWrappingImplementation$Dart = 1;
html623afa$StyleSheetListWrappingImplementation$Dart.prototype.$implements$html623afa$StyleSheetList$Dart = 1;
html623afa$StyleSheetListWrappingImplementation$Dart.prototype.$implements$List$Dart = 1;
html623afa$StyleSheetListWrappingImplementation$Dart.prototype.$implements$Collection$Dart = 1;
html623afa$StyleSheetListWrappingImplementation$Dart.prototype.$implements$Iterable$Dart = 1;
html623afa$StyleSheetListWrappingImplementation$Dart.prototype.$implements$html623afa$DOMWrapperBase$Dart = 1;
html623afa$StyleSheetListWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(html623afa$StyleSheetListWrappingImplementation$Dart, html623afa$DOMWrapperBase$Dart);
html623afa$StyleSheetListWrappingImplementation$Dart._wrap$html623afa$$Constructor_ = function(ptr){
  html623afa$DOMWrapperBase$Dart._wrap$html623afa$$Constructor_.call(this, ptr);
}
;
html623afa$StyleSheetListWrappingImplementation$Dart._wrap$html623afa$$Initializer_ = function(ptr){
  html623afa$DOMWrapperBase$Dart._wrap$html623afa$$Initializer_.call(this, ptr);
}
;
html623afa$StyleSheetListWrappingImplementation$Dart.StyleSheetListWrappingImplementation$_wrap$36$html623afa$$Factory_ = function(ptr){
  var tmp$0 = new html623afa$StyleSheetListWrappingImplementation$Dart;
  tmp$0.$typeInfo = html623afa$StyleSheetListWrappingImplementation$Dart.$lookupRTT();
  html623afa$StyleSheetListWrappingImplementation$Dart._wrap$html623afa$$Initializer_.call(tmp$0, ptr);
  html623afa$StyleSheetListWrappingImplementation$Dart._wrap$html623afa$$Constructor_.call(tmp$0, ptr);
  return tmp$0;
}
;
html623afa$StyleSheetListWrappingImplementation$Dart.prototype.length$named = function(){
  return this.length$getter().apply(this, arguments);
}
;
html623afa$StyleSheetListWrappingImplementation$Dart.prototype.length$getter = function(){
  return this._ptr$html623afa$$getter_().length$getter();
}
;
html623afa$StyleSheetListWrappingImplementation$Dart.prototype.INDEX$operator = function(index){
  return this.item$member(index);
}
;
html623afa$StyleSheetListWrappingImplementation$Dart.prototype.ASSIGN_INDEX$operator = function(index, value){
  $Dart$ThrowException(UnsupportedOperationException$Dart.UnsupportedOperationException$$Factory('Cannot assign element of immutable List.'));
}
;
html623afa$StyleSheetListWrappingImplementation$Dart.prototype.add$member = function(value){
  $Dart$ThrowException(UnsupportedOperationException$Dart.UnsupportedOperationException$$Factory('Cannot add to immutable List.'));
}
;
html623afa$StyleSheetListWrappingImplementation$Dart.prototype.add$named = function($n, $o, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$StyleSheetListWrappingImplementation$Dart.prototype.add$member.call(this, value);
}
;
html623afa$StyleSheetListWrappingImplementation$Dart.prototype.add$getter = function add$getter(){
  return $bind(html623afa$StyleSheetListWrappingImplementation$Dart.prototype.add$named, this);
}
;
html623afa$StyleSheetListWrappingImplementation$Dart.prototype.addLast$member = function(value){
  $Dart$ThrowException(UnsupportedOperationException$Dart.UnsupportedOperationException$$Factory('Cannot add to immutable List.'));
}
;
html623afa$StyleSheetListWrappingImplementation$Dart.prototype.addLast$named = function($n, $o, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$StyleSheetListWrappingImplementation$Dart.prototype.addLast$member.call(this, value);
}
;
html623afa$StyleSheetListWrappingImplementation$Dart.prototype.addLast$getter = function addLast$getter(){
  return $bind(html623afa$StyleSheetListWrappingImplementation$Dart.prototype.addLast$named, this);
}
;
html623afa$StyleSheetListWrappingImplementation$Dart.prototype.addAll$member = function(collection){
  $Dart$ThrowException(UnsupportedOperationException$Dart.UnsupportedOperationException$$Factory('Cannot add to immutable List.'));
}
;
html623afa$StyleSheetListWrappingImplementation$Dart.prototype.addAll$named = function($n, $o, collection){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$StyleSheetListWrappingImplementation$Dart.prototype.addAll$member.call(this, collection);
}
;
html623afa$StyleSheetListWrappingImplementation$Dart.prototype.addAll$getter = function addAll$getter(){
  return $bind(html623afa$StyleSheetListWrappingImplementation$Dart.prototype.addAll$named, this);
}
;
html623afa$StyleSheetListWrappingImplementation$Dart.prototype.sort$member = function(compare){
  $Dart$ThrowException(UnsupportedOperationException$Dart.UnsupportedOperationException$$Factory('Cannot sort immutable List.'));
}
;
html623afa$StyleSheetListWrappingImplementation$Dart.prototype.sort$named = function($n, $o, compare){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$StyleSheetListWrappingImplementation$Dart.prototype.sort$member.call(this, compare);
}
;
html623afa$StyleSheetListWrappingImplementation$Dart.prototype.sort$getter = function sort$getter(){
  return $bind(html623afa$StyleSheetListWrappingImplementation$Dart.prototype.sort$named, this);
}
;
html623afa$StyleSheetListWrappingImplementation$Dart.prototype.copyFrom$member = function(src, srcStart, dstStart, count){
  $Dart$ThrowException(UnsupportedOperationException$Dart.UnsupportedOperationException$$Factory('This object is immutable.'));
}
;
html623afa$StyleSheetListWrappingImplementation$Dart.prototype.copyFrom$named = function($n, $o, src, srcStart, dstStart, count){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 4)
    $nsme();
  return html623afa$StyleSheetListWrappingImplementation$Dart.prototype.copyFrom$member.call(this, src, srcStart, dstStart, count);
}
;
html623afa$StyleSheetListWrappingImplementation$Dart.prototype.copyFrom$getter = function copyFrom$getter(){
  return $bind(html623afa$StyleSheetListWrappingImplementation$Dart.prototype.copyFrom$named, this);
}
;
html623afa$StyleSheetListWrappingImplementation$Dart.prototype.indexOf$member = function(element, startIndex){
  return html623afa$_Lists$Dart.indexOf$member(this, element, startIndex, this.length$getter());
}
;
html623afa$StyleSheetListWrappingImplementation$Dart.prototype.indexOf$named = function($n, $o, element, startIndex){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return html623afa$StyleSheetListWrappingImplementation$Dart.prototype.indexOf$member.call(this, element, startIndex);
}
;
html623afa$StyleSheetListWrappingImplementation$Dart.prototype.indexOf$getter = function indexOf$getter(){
  return $bind(html623afa$StyleSheetListWrappingImplementation$Dart.prototype.indexOf$named, this);
}
;
html623afa$StyleSheetListWrappingImplementation$Dart.prototype.lastIndexOf$member = function(element, startIndex){
  return html623afa$_Lists$Dart.lastIndexOf$member(this, element, startIndex);
}
;
html623afa$StyleSheetListWrappingImplementation$Dart.prototype.lastIndexOf$named = function($n, $o, element, startIndex){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return html623afa$StyleSheetListWrappingImplementation$Dart.prototype.lastIndexOf$member.call(this, element, startIndex);
}
;
html623afa$StyleSheetListWrappingImplementation$Dart.prototype.lastIndexOf$getter = function lastIndexOf$getter(){
  return $bind(html623afa$StyleSheetListWrappingImplementation$Dart.prototype.lastIndexOf$named, this);
}
;
html623afa$StyleSheetListWrappingImplementation$Dart.prototype.clear$member = function(){
  $Dart$ThrowException(UnsupportedOperationException$Dart.UnsupportedOperationException$$Factory('Cannot clear immutable List.'));
}
;
html623afa$StyleSheetListWrappingImplementation$Dart.prototype.clear$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return html623afa$StyleSheetListWrappingImplementation$Dart.prototype.clear$member.call(this);
}
;
html623afa$StyleSheetListWrappingImplementation$Dart.prototype.clear$getter = function clear$getter(){
  return $bind(html623afa$StyleSheetListWrappingImplementation$Dart.prototype.clear$named, this);
}
;
html623afa$StyleSheetListWrappingImplementation$Dart.prototype.removeLast$member = function(){
  $Dart$ThrowException(UnsupportedOperationException$Dart.UnsupportedOperationException$$Factory('Cannot removeLast on immutable List.'));
}
;
html623afa$StyleSheetListWrappingImplementation$Dart.prototype.removeLast$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return html623afa$StyleSheetListWrappingImplementation$Dart.prototype.removeLast$member.call(this);
}
;
html623afa$StyleSheetListWrappingImplementation$Dart.prototype.removeLast$getter = function removeLast$getter(){
  return $bind(html623afa$StyleSheetListWrappingImplementation$Dart.prototype.removeLast$named, this);
}
;
html623afa$StyleSheetListWrappingImplementation$Dart.prototype.last$member = function(){
  return this.INDEX$operator(SUB$operator(this.length$getter(), 1));
}
;
html623afa$StyleSheetListWrappingImplementation$Dart.prototype.last$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return html623afa$StyleSheetListWrappingImplementation$Dart.prototype.last$member.call(this);
}
;
html623afa$StyleSheetListWrappingImplementation$Dart.prototype.last$getter = function last$getter(){
  return $bind(html623afa$StyleSheetListWrappingImplementation$Dart.prototype.last$named, this);
}
;
html623afa$StyleSheetListWrappingImplementation$Dart.prototype.forEach$member = function(f){
  html623afa$_Collections$Dart.forEach$member(this, f);
}
;
html623afa$StyleSheetListWrappingImplementation$Dart.prototype.forEach$named = function($n, $o, f){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$StyleSheetListWrappingImplementation$Dart.prototype.forEach$member.call(this, f);
}
;
html623afa$StyleSheetListWrappingImplementation$Dart.prototype.forEach$getter = function forEach$getter(){
  return $bind(html623afa$StyleSheetListWrappingImplementation$Dart.prototype.forEach$named, this);
}
;
html623afa$StyleSheetListWrappingImplementation$Dart.prototype.filter$member = function(f){
  return html623afa$_Collections$Dart.filter$member(this, ListFactory$Dart.List$$Factory([html623afa$StyleSheet$Dart.$lookupRTT()], $Dart$Null), f);
}
;
html623afa$StyleSheetListWrappingImplementation$Dart.prototype.filter$named = function($n, $o, f){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$StyleSheetListWrappingImplementation$Dart.prototype.filter$member.call(this, f);
}
;
html623afa$StyleSheetListWrappingImplementation$Dart.prototype.filter$getter = function filter$getter(){
  return $bind(html623afa$StyleSheetListWrappingImplementation$Dart.prototype.filter$named, this);
}
;
html623afa$StyleSheetListWrappingImplementation$Dart.prototype.every$member = function(f){
  return html623afa$_Collections$Dart.every$member(this, f);
}
;
html623afa$StyleSheetListWrappingImplementation$Dart.prototype.every$named = function($n, $o, f){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$StyleSheetListWrappingImplementation$Dart.prototype.every$member.call(this, f);
}
;
html623afa$StyleSheetListWrappingImplementation$Dart.prototype.every$getter = function every$getter(){
  return $bind(html623afa$StyleSheetListWrappingImplementation$Dart.prototype.every$named, this);
}
;
html623afa$StyleSheetListWrappingImplementation$Dart.prototype.some$member = function(f){
  return html623afa$_Collections$Dart.some$member(this, f);
}
;
html623afa$StyleSheetListWrappingImplementation$Dart.prototype.some$named = function($n, $o, f){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$StyleSheetListWrappingImplementation$Dart.prototype.some$member.call(this, f);
}
;
html623afa$StyleSheetListWrappingImplementation$Dart.prototype.some$getter = function some$getter(){
  return $bind(html623afa$StyleSheetListWrappingImplementation$Dart.prototype.some$named, this);
}
;
html623afa$StyleSheetListWrappingImplementation$Dart.prototype.setRange$member = function(start, length_0, from, startFrom){
  $Dart$ThrowException(UnsupportedOperationException$Dart.UnsupportedOperationException$$Factory('Cannot setRange on immutable List.'));
}
;
html623afa$StyleSheetListWrappingImplementation$Dart.prototype.setRange$named = function($n, $o, start, length_0, from, startFrom){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 3:
      startFrom = $o.startFrom?(++seen , $o.startFrom):null;
  }
  if (seen != $o.count || seen + def + $n != 4)
    $nsme();
  return html623afa$StyleSheetListWrappingImplementation$Dart.prototype.setRange$member.call(this, start, length_0, from, startFrom);
}
;
html623afa$StyleSheetListWrappingImplementation$Dart.prototype.setRange$getter = function setRange$getter(){
  return $bind(html623afa$StyleSheetListWrappingImplementation$Dart.prototype.setRange$named, this);
}
;
html623afa$StyleSheetListWrappingImplementation$Dart.prototype.removeRange$member = function(start, length_0){
  $Dart$ThrowException(UnsupportedOperationException$Dart.UnsupportedOperationException$$Factory('Cannot removeRange on immutable List.'));
}
;
html623afa$StyleSheetListWrappingImplementation$Dart.prototype.removeRange$named = function($n, $o, start, length_0){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return html623afa$StyleSheetListWrappingImplementation$Dart.prototype.removeRange$member.call(this, start, length_0);
}
;
html623afa$StyleSheetListWrappingImplementation$Dart.prototype.removeRange$getter = function removeRange$getter(){
  return $bind(html623afa$StyleSheetListWrappingImplementation$Dart.prototype.removeRange$named, this);
}
;
html623afa$StyleSheetListWrappingImplementation$Dart.prototype.insertRange$member = function(start, length_0, initialValue){
  $Dart$ThrowException(UnsupportedOperationException$Dart.UnsupportedOperationException$$Factory('Cannot insertRange on immutable List.'));
}
;
html623afa$StyleSheetListWrappingImplementation$Dart.prototype.insertRange$named = function($n, $o, start, length_0, initialValue){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 2:
      initialValue = $o.initialValue?(++seen , $o.initialValue):null;
  }
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return html623afa$StyleSheetListWrappingImplementation$Dart.prototype.insertRange$member.call(this, start, length_0, initialValue);
}
;
html623afa$StyleSheetListWrappingImplementation$Dart.prototype.insertRange$getter = function insertRange$getter(){
  return $bind(html623afa$StyleSheetListWrappingImplementation$Dart.prototype.insertRange$named, this);
}
;
html623afa$StyleSheetListWrappingImplementation$Dart.prototype.getRange$member = function(start, length_0){
  $Dart$ThrowException(NotImplementedException$Dart.NotImplementedException$$Factory());
}
;
html623afa$StyleSheetListWrappingImplementation$Dart.prototype.getRange$named = function($n, $o, start, length_0){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return html623afa$StyleSheetListWrappingImplementation$Dart.prototype.getRange$member.call(this, start, length_0);
}
;
html623afa$StyleSheetListWrappingImplementation$Dart.prototype.getRange$getter = function getRange$getter(){
  return $bind(html623afa$StyleSheetListWrappingImplementation$Dart.prototype.getRange$named, this);
}
;
html623afa$StyleSheetListWrappingImplementation$Dart.prototype.isEmpty$member = function(){
  return EQ$operator(this.length$getter(), 0);
}
;
html623afa$StyleSheetListWrappingImplementation$Dart.prototype.isEmpty$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return html623afa$StyleSheetListWrappingImplementation$Dart.prototype.isEmpty$member.call(this);
}
;
html623afa$StyleSheetListWrappingImplementation$Dart.prototype.isEmpty$getter = function isEmpty$getter(){
  return $bind(html623afa$StyleSheetListWrappingImplementation$Dart.prototype.isEmpty$named, this);
}
;
html623afa$StyleSheetListWrappingImplementation$Dart.prototype.iterator$member = function(){
  return html623afa$_FixedSizeListIterator$Dart._FixedSizeListIterator$$Factory(html623afa$_FixedSizeListIterator$Dart.$lookupRTT([html623afa$StyleSheet$Dart.$lookupRTT()]), this);
}
;
html623afa$StyleSheetListWrappingImplementation$Dart.prototype.iterator$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return html623afa$StyleSheetListWrappingImplementation$Dart.prototype.iterator$member.call(this);
}
;
html623afa$StyleSheetListWrappingImplementation$Dart.prototype.iterator$getter = function iterator$getter(){
  return $bind(html623afa$StyleSheetListWrappingImplementation$Dart.prototype.iterator$named, this);
}
;
html623afa$StyleSheetListWrappingImplementation$Dart.prototype.item$member = function(index){
  return html623afa$LevelDom$Dart.wrapStyleSheet$member(this._ptr$html623afa$$getter_().item$named(1, $noargs, index));
}
;
html623afa$StyleSheetListWrappingImplementation$Dart.prototype.item$named = function($n, $o, index){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$StyleSheetListWrappingImplementation$Dart.prototype.item$member.call(this, index);
}
;
html623afa$StyleSheetListWrappingImplementation$Dart.prototype.item$getter = function item$getter(){
  return $bind(html623afa$StyleSheetListWrappingImplementation$Dart.prototype.item$named, this);
}
;
