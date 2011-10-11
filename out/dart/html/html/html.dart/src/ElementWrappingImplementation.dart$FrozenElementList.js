function html623afa$FrozenElementList$Dart(){
}

html623afa$FrozenElementList$Dart.$lookupRTT = function(){
  return RTT.create($cls('html623afa$FrozenElementList$Dart'), html623afa$FrozenElementList$Dart.$RTTimplements);
}
;
html623afa$FrozenElementList$Dart.$RTTimplements = function(rtt){
  html623afa$FrozenElementList$Dart.$addTo(rtt);
}
;
html623afa$FrozenElementList$Dart.$addTo = function(target){
  var rtt = html623afa$FrozenElementList$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  html623afa$ElementList$Dart.$addTo(target);
}
;
html623afa$FrozenElementList$Dart.prototype.$implements$html623afa$FrozenElementList$Dart = 1;
html623afa$FrozenElementList$Dart.prototype.$implements$html623afa$ElementList$Dart = 1;
html623afa$FrozenElementList$Dart.prototype.$implements$List$Dart = 1;
html623afa$FrozenElementList$Dart.prototype.$implements$Collection$Dart = 1;
html623afa$FrozenElementList$Dart.prototype.$implements$Iterable$Dart = 1;
html623afa$FrozenElementList$Dart.prototype.$implements$Object$Dart = 1;
html623afa$FrozenElementList$Dart._wrap$html623afa$$Constructor_ = function(_ptr){
  Object.$Constructor.call(this);
}
;
html623afa$FrozenElementList$Dart._wrap$html623afa$$Initializer_ = function(_ptr){
  Object.$Initializer.call(this);
  this._ptr$html623afa$$field_ = _ptr;
}
;
html623afa$FrozenElementList$Dart.FrozenElementList$_wrap$17$html623afa$$Factory_ = function(_ptr){
  var tmp$0 = new html623afa$FrozenElementList$Dart;
  tmp$0.$typeInfo = html623afa$FrozenElementList$Dart.$lookupRTT();
  html623afa$FrozenElementList$Dart._wrap$html623afa$$Initializer_.call(tmp$0, _ptr);
  html623afa$FrozenElementList$Dart._wrap$html623afa$$Constructor_.call(tmp$0, _ptr);
  return tmp$0;
}
;
html623afa$FrozenElementList$Dart.prototype._ptr$html623afa$$named_ = function(){
  return this._ptr$html623afa$$getter_().apply(this, arguments);
}
;
html623afa$FrozenElementList$Dart.prototype._ptr$html623afa$$getter_ = function(){
  return this._ptr$html623afa$$field_;
}
;
html623afa$FrozenElementList$Dart.prototype.first$named = function(){
  return this.first$getter().apply(this, arguments);
}
;
html623afa$FrozenElementList$Dart.prototype.first$getter = function(){
  return this.INDEX$operator(0);
}
;
html623afa$FrozenElementList$Dart.prototype.forEach$member = function(f){
  {
    var $0 = this._ptr$html623afa$$getter_().iterator$named(0, $noargs);
    while ($0.hasNext$named(0, $noargs)) {
      var element_0 = $0.next$named(0, $noargs);
      {
        f(1, $noargs, html623afa$LevelDom$Dart.wrapElement$member(element_0));
      }
    }
  }
}
;
html623afa$FrozenElementList$Dart.prototype.forEach$named = function($n, $o, f){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$FrozenElementList$Dart.prototype.forEach$member.call(this, f);
}
;
html623afa$FrozenElementList$Dart.prototype.forEach$getter = function forEach$getter(){
  return $bind(html623afa$FrozenElementList$Dart.prototype.forEach$named, this);
}
;
html623afa$FrozenElementList$Dart.prototype.filter$member = function(f){
  $Dart$ThrowException('Not impl yet. todo(jacobr)');
}
;
html623afa$FrozenElementList$Dart.prototype.filter$named = function($n, $o, f){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$FrozenElementList$Dart.prototype.filter$member.call(this, f);
}
;
html623afa$FrozenElementList$Dart.prototype.filter$getter = function filter$getter(){
  return $bind(html623afa$FrozenElementList$Dart.prototype.filter$named, this);
}
;
html623afa$FrozenElementList$Dart.prototype.every$member = function(f){
  $Dart$ThrowException('Not impl yet. todo(jacobr)');
}
;
html623afa$FrozenElementList$Dart.prototype.every$named = function($n, $o, f){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$FrozenElementList$Dart.prototype.every$member.call(this, f);
}
;
html623afa$FrozenElementList$Dart.prototype.every$getter = function every$getter(){
  return $bind(html623afa$FrozenElementList$Dart.prototype.every$named, this);
}
;
html623afa$FrozenElementList$Dart.prototype.some$member = function(f){
  $Dart$ThrowException('Not impl yet. todo(jacobr)');
}
;
html623afa$FrozenElementList$Dart.prototype.some$named = function($n, $o, f){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$FrozenElementList$Dart.prototype.some$member.call(this, f);
}
;
html623afa$FrozenElementList$Dart.prototype.some$getter = function some$getter(){
  return $bind(html623afa$FrozenElementList$Dart.prototype.some$named, this);
}
;
html623afa$FrozenElementList$Dart.prototype.isEmpty$member = function(){
  return EQ$operator(this._ptr$html623afa$$getter_().length$getter(), 0);
}
;
html623afa$FrozenElementList$Dart.prototype.isEmpty$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return html623afa$FrozenElementList$Dart.prototype.isEmpty$member.call(this);
}
;
html623afa$FrozenElementList$Dart.prototype.isEmpty$getter = function isEmpty$getter(){
  return $bind(html623afa$FrozenElementList$Dart.prototype.isEmpty$named, this);
}
;
html623afa$FrozenElementList$Dart.prototype.length$named = function(){
  return this.length$getter().apply(this, arguments);
}
;
html623afa$FrozenElementList$Dart.prototype.length$getter = function(){
  return this._ptr$html623afa$$getter_().length$getter();
}
;
html623afa$FrozenElementList$Dart.prototype.length$setter = function(newLength){
  $Dart$ThrowException($intern(UnsupportedOperationException$Dart.UnsupportedOperationException$$Factory('')));
}
;
html623afa$FrozenElementList$Dart.prototype.INDEX$operator = function(index){
  return html623afa$LevelDom$Dart.wrapElement$member(this._ptr$html623afa$$getter_().INDEX$operator(index));
}
;
html623afa$FrozenElementList$Dart.prototype.ASSIGN_INDEX$operator = function(index, value){
  $Dart$ThrowException($intern(UnsupportedOperationException$Dart.UnsupportedOperationException$$Factory('')));
}
;
html623afa$FrozenElementList$Dart.prototype.add$member = function(value){
  $Dart$ThrowException($intern(UnsupportedOperationException$Dart.UnsupportedOperationException$$Factory('')));
}
;
html623afa$FrozenElementList$Dart.prototype.add$named = function($n, $o, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$FrozenElementList$Dart.prototype.add$member.call(this, value);
}
;
html623afa$FrozenElementList$Dart.prototype.add$getter = function add$getter(){
  return $bind(html623afa$FrozenElementList$Dart.prototype.add$named, this);
}
;
html623afa$FrozenElementList$Dart.prototype.addLast$member = function(value){
  $Dart$ThrowException($intern(UnsupportedOperationException$Dart.UnsupportedOperationException$$Factory('')));
}
;
html623afa$FrozenElementList$Dart.prototype.addLast$named = function($n, $o, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$FrozenElementList$Dart.prototype.addLast$member.call(this, value);
}
;
html623afa$FrozenElementList$Dart.prototype.addLast$getter = function addLast$getter(){
  return $bind(html623afa$FrozenElementList$Dart.prototype.addLast$named, this);
}
;
html623afa$FrozenElementList$Dart.prototype.iterator$member = function(){
  return html623afa$FrozenElementListIterator$Dart.FrozenElementListIterator$$Factory(this);
}
;
html623afa$FrozenElementList$Dart.prototype.iterator$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return html623afa$FrozenElementList$Dart.prototype.iterator$member.call(this);
}
;
html623afa$FrozenElementList$Dart.prototype.iterator$getter = function iterator$getter(){
  return $bind(html623afa$FrozenElementList$Dart.prototype.iterator$named, this);
}
;
html623afa$FrozenElementList$Dart.prototype.addAll$member = function(collection){
  $Dart$ThrowException($intern(UnsupportedOperationException$Dart.UnsupportedOperationException$$Factory('')));
}
;
html623afa$FrozenElementList$Dart.prototype.addAll$named = function($n, $o, collection){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$FrozenElementList$Dart.prototype.addAll$member.call(this, collection);
}
;
html623afa$FrozenElementList$Dart.prototype.addAll$getter = function addAll$getter(){
  return $bind(html623afa$FrozenElementList$Dart.prototype.addAll$named, this);
}
;
html623afa$FrozenElementList$Dart.prototype.sort$member = function(compare){
  $Dart$ThrowException($intern(UnsupportedOperationException$Dart.UnsupportedOperationException$$Factory('')));
}
;
html623afa$FrozenElementList$Dart.prototype.sort$named = function($n, $o, compare){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$FrozenElementList$Dart.prototype.sort$member.call(this, compare);
}
;
html623afa$FrozenElementList$Dart.prototype.sort$getter = function sort$getter(){
  return $bind(html623afa$FrozenElementList$Dart.prototype.sort$named, this);
}
;
html623afa$FrozenElementList$Dart.prototype.copyFrom$member = function(src, srcStart, dstStart, count){
  $Dart$ThrowException('Not impl yet. todo(jacobr)');
}
;
html623afa$FrozenElementList$Dart.prototype.copyFrom$named = function($n, $o, src, srcStart, dstStart, count){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 4)
    $nsme();
  return html623afa$FrozenElementList$Dart.prototype.copyFrom$member.call(this, src, srcStart, dstStart, count);
}
;
html623afa$FrozenElementList$Dart.prototype.copyFrom$getter = function copyFrom$getter(){
  return $bind(html623afa$FrozenElementList$Dart.prototype.copyFrom$named, this);
}
;
html623afa$FrozenElementList$Dart.prototype.setRange$member = function(start, length_0, from, startFrom){
  $Dart$ThrowException($intern(NotImplementedException$Dart.NotImplementedException$$Factory()));
}
;
html623afa$FrozenElementList$Dart.prototype.setRange$named = function($n, $o, start, length_0, from, startFrom){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 3:
      startFrom = $o.startFrom?(++seen , $o.startFrom):(++def , 0);
  }
  if (seen != $o.count || seen + def + $n != 4)
    $nsme();
  return html623afa$FrozenElementList$Dart.prototype.setRange$member.call(this, start, length_0, from, startFrom);
}
;
html623afa$FrozenElementList$Dart.prototype.setRange$getter = function setRange$getter(){
  return $bind(html623afa$FrozenElementList$Dart.prototype.setRange$named, this);
}
;
html623afa$FrozenElementList$Dart.prototype.removeRange$member = function(start, length_0){
  $Dart$ThrowException($intern(NotImplementedException$Dart.NotImplementedException$$Factory()));
}
;
html623afa$FrozenElementList$Dart.prototype.removeRange$named = function($n, $o, start, length_0){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return html623afa$FrozenElementList$Dart.prototype.removeRange$member.call(this, start, length_0);
}
;
html623afa$FrozenElementList$Dart.prototype.removeRange$getter = function removeRange$getter(){
  return $bind(html623afa$FrozenElementList$Dart.prototype.removeRange$named, this);
}
;
html623afa$FrozenElementList$Dart.prototype.insertRange$member = function(start, length_0, initialValue){
  $Dart$ThrowException($intern(NotImplementedException$Dart.NotImplementedException$$Factory()));
}
;
html623afa$FrozenElementList$Dart.prototype.insertRange$named = function($n, $o, start, length_0, initialValue){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 2:
      initialValue = $o.initialValue?(++seen , $o.initialValue):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return html623afa$FrozenElementList$Dart.prototype.insertRange$member.call(this, start, length_0, initialValue);
}
;
html623afa$FrozenElementList$Dart.prototype.insertRange$getter = function insertRange$getter(){
  return $bind(html623afa$FrozenElementList$Dart.prototype.insertRange$named, this);
}
;
html623afa$FrozenElementList$Dart.prototype.getRange$member = function(start, length_0){
  $Dart$ThrowException($intern(NotImplementedException$Dart.NotImplementedException$$Factory()));
}
;
html623afa$FrozenElementList$Dart.prototype.getRange$named = function($n, $o, start, length_0){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return html623afa$FrozenElementList$Dart.prototype.getRange$member.call(this, start, length_0);
}
;
html623afa$FrozenElementList$Dart.prototype.getRange$getter = function getRange$getter(){
  return $bind(html623afa$FrozenElementList$Dart.prototype.getRange$named, this);
}
;
html623afa$FrozenElementList$Dart.prototype.indexOf$member = function(element, startIndex){
  $Dart$ThrowException('Not impl yet. todo(jacobr)');
}
;
html623afa$FrozenElementList$Dart.prototype.indexOf$named = function($n, $o, element, startIndex){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return html623afa$FrozenElementList$Dart.prototype.indexOf$member.call(this, element, startIndex);
}
;
html623afa$FrozenElementList$Dart.prototype.indexOf$getter = function indexOf$getter(){
  return $bind(html623afa$FrozenElementList$Dart.prototype.indexOf$named, this);
}
;
html623afa$FrozenElementList$Dart.prototype.lastIndexOf$member = function(element, startIndex){
  $Dart$ThrowException('Not impl yet. todo(jacobr)');
}
;
html623afa$FrozenElementList$Dart.prototype.lastIndexOf$named = function($n, $o, element, startIndex){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return html623afa$FrozenElementList$Dart.prototype.lastIndexOf$member.call(this, element, startIndex);
}
;
html623afa$FrozenElementList$Dart.prototype.lastIndexOf$getter = function lastIndexOf$getter(){
  return $bind(html623afa$FrozenElementList$Dart.prototype.lastIndexOf$named, this);
}
;
html623afa$FrozenElementList$Dart.prototype.clear$member = function(){
  $Dart$ThrowException('Not impl yet. todo(jacobr)');
}
;
html623afa$FrozenElementList$Dart.prototype.clear$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return html623afa$FrozenElementList$Dart.prototype.clear$member.call(this);
}
;
html623afa$FrozenElementList$Dart.prototype.clear$getter = function clear$getter(){
  return $bind(html623afa$FrozenElementList$Dart.prototype.clear$named, this);
}
;
html623afa$FrozenElementList$Dart.prototype.removeLast$member = function(){
  $Dart$ThrowException('Not impl yet. todo(jacobr)');
}
;
html623afa$FrozenElementList$Dart.prototype.removeLast$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return html623afa$FrozenElementList$Dart.prototype.removeLast$member.call(this);
}
;
html623afa$FrozenElementList$Dart.prototype.removeLast$getter = function removeLast$getter(){
  return $bind(html623afa$FrozenElementList$Dart.prototype.removeLast$named, this);
}
;
html623afa$FrozenElementList$Dart.prototype.last$member = function(){
  return this.INDEX$operator(SUB$operator(this.length$getter(), 1));
}
;
html623afa$FrozenElementList$Dart.prototype.last$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return html623afa$FrozenElementList$Dart.prototype.last$member.call(this);
}
;
html623afa$FrozenElementList$Dart.prototype.last$getter = function last$getter(){
  return $bind(html623afa$FrozenElementList$Dart.prototype.last$named, this);
}
;
