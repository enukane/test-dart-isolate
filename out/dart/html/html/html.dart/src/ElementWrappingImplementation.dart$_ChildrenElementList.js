function html623afa$_ChildrenElementList$Dart(){
}

html623afa$_ChildrenElementList$Dart.$lookupRTT = function(){
  return RTT.create($cls('html623afa$_ChildrenElementList$Dart'), html623afa$_ChildrenElementList$Dart.$RTTimplements);
}
;
html623afa$_ChildrenElementList$Dart.$RTTimplements = function(rtt){
  html623afa$_ChildrenElementList$Dart.$addTo(rtt);
}
;
html623afa$_ChildrenElementList$Dart.$addTo = function(target){
  var rtt = html623afa$_ChildrenElementList$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  html623afa$ElementList$Dart.$addTo(target);
}
;
html623afa$_ChildrenElementList$Dart.prototype.$implements$html623afa$_ChildrenElementList$Dart = 1;
html623afa$_ChildrenElementList$Dart.prototype.$implements$html623afa$ElementList$Dart = 1;
html623afa$_ChildrenElementList$Dart.prototype.$implements$List$Dart = 1;
html623afa$_ChildrenElementList$Dart.prototype.$implements$Collection$Dart = 1;
html623afa$_ChildrenElementList$Dart.prototype.$implements$Iterable$Dart = 1;
html623afa$_ChildrenElementList$Dart.prototype.$implements$Object$Dart = 1;
html623afa$_ChildrenElementList$Dart._wrap$html623afa$$Constructor_ = function(element){
  Object.$Constructor.call(this);
}
;
html623afa$_ChildrenElementList$Dart._wrap$html623afa$$Initializer_ = function(element){
  Object.$Initializer.call(this);
  this._childElements$html623afa$$field_ = element.children$getter();
  this._element$html623afa$$field_ = element;
}
;
html623afa$_ChildrenElementList$Dart._ChildrenElementList$_wrap$20$html623afa$$Factory_ = function(element){
  var tmp$0 = new html623afa$_ChildrenElementList$Dart;
  tmp$0.$typeInfo = html623afa$_ChildrenElementList$Dart.$lookupRTT();
  html623afa$_ChildrenElementList$Dart._wrap$html623afa$$Initializer_.call(tmp$0, element);
  html623afa$_ChildrenElementList$Dart._wrap$html623afa$$Constructor_.call(tmp$0, element);
  return tmp$0;
}
;
html623afa$_ChildrenElementList$Dart.prototype._element$html623afa$$named_ = function(){
  return this._element$html623afa$$getter_().apply(this, arguments);
}
;
html623afa$_ChildrenElementList$Dart.prototype._element$html623afa$$getter_ = function(){
  return this._element$html623afa$$field_;
}
;
html623afa$_ChildrenElementList$Dart.prototype._childElements$html623afa$$named_ = function(){
  return this._childElements$html623afa$$getter_().apply(this, arguments);
}
;
html623afa$_ChildrenElementList$Dart.prototype._childElements$html623afa$$getter_ = function(){
  return this._childElements$html623afa$$field_;
}
;
html623afa$_ChildrenElementList$Dart.prototype._toList$html623afa$$member_ = function(){
  var tmp$1, tmp$0;
  var output = ListFactory$Dart.List$$Factory(null, this._childElements$html623afa$$getter_().length$getter());
  {
    var i = 0;
    var len = this._childElements$html623afa$$getter_().length$getter();
    for (; LT$operator(i, len); tmp$0 = i , (i = ADD$operator(tmp$0, 1) , tmp$0)) {
      output.ASSIGN_INDEX$operator(i, tmp$1 = html623afa$LevelDom$Dart.wrapElement$member(this._childElements$html623afa$$getter_().INDEX$operator(i))) , tmp$1;
    }
  }
  return output;
}
;
html623afa$_ChildrenElementList$Dart.prototype._toList$html623afa$$named_ = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return html623afa$_ChildrenElementList$Dart.prototype._toList$html623afa$$member_.call(this);
}
;
html623afa$_ChildrenElementList$Dart.prototype._toList$html623afa$$getter_ = function _toList$html623afa$$getter_(){
  return $bind(html623afa$_ChildrenElementList$Dart.prototype._toList$html623afa$$named_, this);
}
;
html623afa$_ChildrenElementList$Dart.prototype.first$named = function(){
  return this.first$getter().apply(this, arguments);
}
;
html623afa$_ChildrenElementList$Dart.prototype.first$getter = function(){
  return html623afa$LevelDom$Dart.wrapElement$member(this._element$html623afa$$getter_().firstElementChild$getter());
}
;
html623afa$_ChildrenElementList$Dart.prototype.forEach$member = function(f){
  {
    var $0 = this._childElements$html623afa$$getter_().iterator$named(0, $noargs);
    while ($0.hasNext$named(0, $noargs)) {
      var element_0 = $0.next$named(0, $noargs);
      {
        f(1, $noargs, html623afa$LevelDom$Dart.wrapElement$member(element_0));
      }
    }
  }
}
;
html623afa$_ChildrenElementList$Dart.prototype.forEach$named = function($n, $o, f){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$_ChildrenElementList$Dart.prototype.forEach$member.call(this, f);
}
;
html623afa$_ChildrenElementList$Dart.prototype.forEach$getter = function forEach$getter(){
  return $bind(html623afa$_ChildrenElementList$Dart.prototype.forEach$named, this);
}
;
function html623afa$_ChildrenElementList$Dart$filter$c0$36_36$Hoisted(dartc_scp$0, dartc_scp$1, element_0){
  if (dartc_scp$0.f(1, $noargs, element_0)) {
    dartc_scp$1.output.add$named(1, $noargs, element_0);
  }
}

function html623afa$_ChildrenElementList$Dart$filter$c0$36_36$Hoisted$named($s0, $s1, $n, $o, element){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$_ChildrenElementList$Dart$filter$c0$36_36$Hoisted($s0, $s1, element);
}

html623afa$_ChildrenElementList$Dart.prototype.filter$member = function(f){
  var dartc_scp$0 = {f:f};
  var dartc_scp$1;
  dartc_scp$1 = {};
  dartc_scp$1.output = ListFactory$Dart.List$$Factory([html623afa$Element$Dart.$lookupRTT()], $Dart$Null);
  this.forEach$member($bind(html623afa$_ChildrenElementList$Dart$filter$c0$36_36$Hoisted$named, $Dart$Null, dartc_scp$0, dartc_scp$1));
  return dartc_scp$1.output;
  dartc_scp$1 = $Dart$Null;
}
;
html623afa$_ChildrenElementList$Dart.prototype.filter$named = function($n, $o, f){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$_ChildrenElementList$Dart.prototype.filter$member.call(this, f);
}
;
html623afa$_ChildrenElementList$Dart.prototype.filter$getter = function filter$getter(){
  return $bind(html623afa$_ChildrenElementList$Dart.prototype.filter$named, this);
}
;
html623afa$_ChildrenElementList$Dart.prototype.every$member = function(f){
  {
    var $0 = this.iterator$named(0, $noargs);
    while ($0.hasNext$named(0, $noargs)) {
      var element_0 = $0.next$named(0, $noargs);
      {
        if (!f(1, $noargs, element_0)) {
          return false;
        }
      }
    }
  }
  ;
  return true;
}
;
html623afa$_ChildrenElementList$Dart.prototype.every$named = function($n, $o, f){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$_ChildrenElementList$Dart.prototype.every$member.call(this, f);
}
;
html623afa$_ChildrenElementList$Dart.prototype.every$getter = function every$getter(){
  return $bind(html623afa$_ChildrenElementList$Dart.prototype.every$named, this);
}
;
html623afa$_ChildrenElementList$Dart.prototype.some$member = function(f){
  {
    var $0 = this.iterator$named(0, $noargs);
    while ($0.hasNext$named(0, $noargs)) {
      var element_0 = $0.next$named(0, $noargs);
      {
        if (f(1, $noargs, element_0)) {
          return true;
        }
      }
    }
  }
  ;
  return false;
}
;
html623afa$_ChildrenElementList$Dart.prototype.some$named = function($n, $o, f){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$_ChildrenElementList$Dart.prototype.some$member.call(this, f);
}
;
html623afa$_ChildrenElementList$Dart.prototype.some$getter = function some$getter(){
  return $bind(html623afa$_ChildrenElementList$Dart.prototype.some$named, this);
}
;
html623afa$_ChildrenElementList$Dart.prototype.isEmpty$member = function(){
  return this._element$html623afa$$getter_().firstElementChild$getter() != null;
}
;
html623afa$_ChildrenElementList$Dart.prototype.isEmpty$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return html623afa$_ChildrenElementList$Dart.prototype.isEmpty$member.call(this);
}
;
html623afa$_ChildrenElementList$Dart.prototype.isEmpty$getter = function isEmpty$getter(){
  return $bind(html623afa$_ChildrenElementList$Dart.prototype.isEmpty$named, this);
}
;
html623afa$_ChildrenElementList$Dart.prototype.length$named = function(){
  return this.length$getter().apply(this, arguments);
}
;
html623afa$_ChildrenElementList$Dart.prototype.length$getter = function(){
  return this._childElements$html623afa$$getter_().length$getter();
}
;
html623afa$_ChildrenElementList$Dart.prototype.length$setter = function(newLength){
  $Dart$ThrowException($intern(UnsupportedOperationException$Dart.UnsupportedOperationException$$Factory('')));
}
;
html623afa$_ChildrenElementList$Dart.prototype.INDEX$operator = function(index){
  return html623afa$LevelDom$Dart.wrapElement$member(this._childElements$html623afa$$getter_().INDEX$operator(index));
}
;
html623afa$_ChildrenElementList$Dart.prototype.ASSIGN_INDEX$operator = function(index, value){
  this._element$html623afa$$getter_().replaceChild$named(2, $noargs, html623afa$LevelDom$Dart.unwrap$member(value), this._childElements$html623afa$$getter_().item$named(1, $noargs, index));
}
;
html623afa$_ChildrenElementList$Dart.prototype.add$member = function(value){
  this._element$html623afa$$getter_().appendChild$named(1, $noargs, html623afa$LevelDom$Dart.unwrap$member(value));
  return value;
}
;
html623afa$_ChildrenElementList$Dart.prototype.add$named = function($n, $o, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$_ChildrenElementList$Dart.prototype.add$member.call(this, value);
}
;
html623afa$_ChildrenElementList$Dart.prototype.add$getter = function add$getter(){
  return $bind(html623afa$_ChildrenElementList$Dart.prototype.add$named, this);
}
;
html623afa$_ChildrenElementList$Dart.prototype.addLast$member = function(value){
  this._element$html623afa$$getter_().appendChild$named(1, $noargs, html623afa$LevelDom$Dart.unwrap$member(value));
  return value;
}
;
html623afa$_ChildrenElementList$Dart.prototype.addLast$named = function($n, $o, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$_ChildrenElementList$Dart.prototype.addLast$member.call(this, value);
}
;
html623afa$_ChildrenElementList$Dart.prototype.addLast$getter = function addLast$getter(){
  return $bind(html623afa$_ChildrenElementList$Dart.prototype.addLast$named, this);
}
;
html623afa$_ChildrenElementList$Dart.prototype.iterator$member = function(){
  return this._toList$html623afa$$member_().iterator$named(0, $noargs);
}
;
html623afa$_ChildrenElementList$Dart.prototype.iterator$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return html623afa$_ChildrenElementList$Dart.prototype.iterator$member.call(this);
}
;
html623afa$_ChildrenElementList$Dart.prototype.iterator$getter = function iterator$getter(){
  return $bind(html623afa$_ChildrenElementList$Dart.prototype.iterator$named, this);
}
;
html623afa$_ChildrenElementList$Dart.prototype.addAll$member = function(collection){
  {
    var $0 = collection.iterator$named(0, $noargs);
    while ($0.hasNext$named(0, $noargs)) {
      var element = $0.next$named(0, $noargs);
      {
        this._element$html623afa$$getter_().appendChild$named(1, $noargs, html623afa$LevelDom$Dart.unwrap$member(element));
      }
    }
  }
}
;
html623afa$_ChildrenElementList$Dart.prototype.addAll$named = function($n, $o, collection){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$_ChildrenElementList$Dart.prototype.addAll$member.call(this, collection);
}
;
html623afa$_ChildrenElementList$Dart.prototype.addAll$getter = function addAll$getter(){
  return $bind(html623afa$_ChildrenElementList$Dart.prototype.addAll$named, this);
}
;
html623afa$_ChildrenElementList$Dart.prototype.sort$member = function(compare){
  $Dart$ThrowException($intern(UnsupportedOperationException$Dart.UnsupportedOperationException$$Factory('TODO(jacobr): should we impl?')));
}
;
html623afa$_ChildrenElementList$Dart.prototype.sort$named = function($n, $o, compare){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$_ChildrenElementList$Dart.prototype.sort$member.call(this, compare);
}
;
html623afa$_ChildrenElementList$Dart.prototype.sort$getter = function sort$getter(){
  return $bind(html623afa$_ChildrenElementList$Dart.prototype.sort$named, this);
}
;
html623afa$_ChildrenElementList$Dart.prototype.copyFrom$member = function(src, srcStart, dstStart, count){
  $Dart$ThrowException('Not impl yet. todo(jacobr)');
}
;
html623afa$_ChildrenElementList$Dart.prototype.copyFrom$named = function($n, $o, src, srcStart, dstStart, count){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 4)
    $nsme();
  return html623afa$_ChildrenElementList$Dart.prototype.copyFrom$member.call(this, src, srcStart, dstStart, count);
}
;
html623afa$_ChildrenElementList$Dart.prototype.copyFrom$getter = function copyFrom$getter(){
  return $bind(html623afa$_ChildrenElementList$Dart.prototype.copyFrom$named, this);
}
;
html623afa$_ChildrenElementList$Dart.prototype.setRange$member = function(start, length_0, from, startFrom){
  $Dart$ThrowException($intern(NotImplementedException$Dart.NotImplementedException$$Factory()));
}
;
html623afa$_ChildrenElementList$Dart.prototype.setRange$named = function($n, $o, start, length_0, from, startFrom){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 3:
      startFrom = $o.startFrom?(++seen , $o.startFrom):(++def , 0);
  }
  if (seen != $o.count || seen + def + $n != 4)
    $nsme();
  return html623afa$_ChildrenElementList$Dart.prototype.setRange$member.call(this, start, length_0, from, startFrom);
}
;
html623afa$_ChildrenElementList$Dart.prototype.setRange$getter = function setRange$getter(){
  return $bind(html623afa$_ChildrenElementList$Dart.prototype.setRange$named, this);
}
;
html623afa$_ChildrenElementList$Dart.prototype.removeRange$member = function(start, length_0){
  $Dart$ThrowException($intern(NotImplementedException$Dart.NotImplementedException$$Factory()));
}
;
html623afa$_ChildrenElementList$Dart.prototype.removeRange$named = function($n, $o, start, length_0){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return html623afa$_ChildrenElementList$Dart.prototype.removeRange$member.call(this, start, length_0);
}
;
html623afa$_ChildrenElementList$Dart.prototype.removeRange$getter = function removeRange$getter(){
  return $bind(html623afa$_ChildrenElementList$Dart.prototype.removeRange$named, this);
}
;
html623afa$_ChildrenElementList$Dart.prototype.insertRange$member = function(start, length_0, initialValue){
  $Dart$ThrowException($intern(NotImplementedException$Dart.NotImplementedException$$Factory()));
}
;
html623afa$_ChildrenElementList$Dart.prototype.insertRange$named = function($n, $o, start, length_0, initialValue){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 2:
      initialValue = $o.initialValue?(++seen , $o.initialValue):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return html623afa$_ChildrenElementList$Dart.prototype.insertRange$member.call(this, start, length_0, initialValue);
}
;
html623afa$_ChildrenElementList$Dart.prototype.insertRange$getter = function insertRange$getter(){
  return $bind(html623afa$_ChildrenElementList$Dart.prototype.insertRange$named, this);
}
;
html623afa$_ChildrenElementList$Dart.prototype.getRange$member = function(start, length_0){
  $Dart$ThrowException($intern(NotImplementedException$Dart.NotImplementedException$$Factory()));
}
;
html623afa$_ChildrenElementList$Dart.prototype.getRange$named = function($n, $o, start, length_0){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return html623afa$_ChildrenElementList$Dart.prototype.getRange$member.call(this, start, length_0);
}
;
html623afa$_ChildrenElementList$Dart.prototype.getRange$getter = function getRange$getter(){
  return $bind(html623afa$_ChildrenElementList$Dart.prototype.getRange$named, this);
}
;
html623afa$_ChildrenElementList$Dart.prototype.indexOf$member = function(element, startIndex){
  $Dart$ThrowException('Not impl yet. todo(jacobr)');
}
;
html623afa$_ChildrenElementList$Dart.prototype.indexOf$named = function($n, $o, element, startIndex){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return html623afa$_ChildrenElementList$Dart.prototype.indexOf$member.call(this, element, startIndex);
}
;
html623afa$_ChildrenElementList$Dart.prototype.indexOf$getter = function indexOf$getter(){
  return $bind(html623afa$_ChildrenElementList$Dart.prototype.indexOf$named, this);
}
;
html623afa$_ChildrenElementList$Dart.prototype.lastIndexOf$member = function(element, startIndex){
  $Dart$ThrowException('Not impl yet. todo(jacobr)');
}
;
html623afa$_ChildrenElementList$Dart.prototype.lastIndexOf$named = function($n, $o, element, startIndex){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return html623afa$_ChildrenElementList$Dart.prototype.lastIndexOf$member.call(this, element, startIndex);
}
;
html623afa$_ChildrenElementList$Dart.prototype.lastIndexOf$getter = function lastIndexOf$getter(){
  return $bind(html623afa$_ChildrenElementList$Dart.prototype.lastIndexOf$named, this);
}
;
html623afa$_ChildrenElementList$Dart.prototype.clear$member = function(){
  $Dart$ThrowException('Not impl yet. todo(jacobr)');
}
;
html623afa$_ChildrenElementList$Dart.prototype.clear$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return html623afa$_ChildrenElementList$Dart.prototype.clear$member.call(this);
}
;
html623afa$_ChildrenElementList$Dart.prototype.clear$getter = function clear$getter(){
  return $bind(html623afa$_ChildrenElementList$Dart.prototype.clear$named, this);
}
;
html623afa$_ChildrenElementList$Dart.prototype.removeLast$member = function(){
  $Dart$ThrowException('Not impl yet. todo(jacobr)');
}
;
html623afa$_ChildrenElementList$Dart.prototype.removeLast$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return html623afa$_ChildrenElementList$Dart.prototype.removeLast$member.call(this);
}
;
html623afa$_ChildrenElementList$Dart.prototype.removeLast$getter = function removeLast$getter(){
  return $bind(html623afa$_ChildrenElementList$Dart.prototype.removeLast$named, this);
}
;
html623afa$_ChildrenElementList$Dart.prototype.last$member = function(){
  return html623afa$LevelDom$Dart.wrapElement$member(this._element$html623afa$$getter_().lastElementChild$getter());
}
;
html623afa$_ChildrenElementList$Dart.prototype.last$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return html623afa$_ChildrenElementList$Dart.prototype.last$member.call(this);
}
;
html623afa$_ChildrenElementList$Dart.prototype.last$getter = function last$getter(){
  return $bind(html623afa$_ChildrenElementList$Dart.prototype.last$named, this);
}
;
