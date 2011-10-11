function html623afa$FrozenElementListIterator$Dart(){
}

html623afa$FrozenElementListIterator$Dart.$lookupRTT = function(){
  return RTT.create($cls('html623afa$FrozenElementListIterator$Dart'), html623afa$FrozenElementListIterator$Dart.$RTTimplements);
}
;
html623afa$FrozenElementListIterator$Dart.$RTTimplements = function(rtt){
  html623afa$FrozenElementListIterator$Dart.$addTo(rtt);
}
;
html623afa$FrozenElementListIterator$Dart.$addTo = function(target){
  var rtt = html623afa$FrozenElementListIterator$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  Iterator$Dart.$addTo(target, [html623afa$Element$Dart.$lookupRTT()]);
}
;
html623afa$FrozenElementListIterator$Dart.prototype.$implements$html623afa$FrozenElementListIterator$Dart = 1;
html623afa$FrozenElementListIterator$Dart.prototype.$implements$Iterator$Dart = 1;
html623afa$FrozenElementListIterator$Dart.prototype.$implements$Object$Dart = 1;
html623afa$FrozenElementListIterator$Dart.$Constructor = function(_list){
  Object.$Constructor.call(this);
}
;
html623afa$FrozenElementListIterator$Dart.$Initializer = function(_list){
  Object.$Initializer.call(this);
  this._index$html623afa$$field_ = 0;
  this._list$html623afa$$field_ = _list;
}
;
html623afa$FrozenElementListIterator$Dart.FrozenElementListIterator$$Factory = function(_list){
  var tmp$0 = new html623afa$FrozenElementListIterator$Dart;
  tmp$0.$typeInfo = html623afa$FrozenElementListIterator$Dart.$lookupRTT();
  html623afa$FrozenElementListIterator$Dart.$Initializer.call(tmp$0, _list);
  html623afa$FrozenElementListIterator$Dart.$Constructor.call(tmp$0, _list);
  return tmp$0;
}
;
html623afa$FrozenElementListIterator$Dart.prototype._list$html623afa$$named_ = function(){
  return this._list$html623afa$$getter_().apply(this, arguments);
}
;
html623afa$FrozenElementListIterator$Dart.prototype._list$html623afa$$getter_ = function(){
  return this._list$html623afa$$field_;
}
;
html623afa$FrozenElementListIterator$Dart.prototype._index$html623afa$$named_ = function(){
  return this._index$html623afa$$getter_().apply(this, arguments);
}
;
html623afa$FrozenElementListIterator$Dart.prototype._index$html623afa$$getter_ = function(){
  return this._index$html623afa$$field_;
}
;
html623afa$FrozenElementListIterator$Dart.prototype._index$html623afa$$setter_ = function(tmp$0){
  this._index$html623afa$$field_ = tmp$0;
}
;
html623afa$FrozenElementListIterator$Dart.prototype.next$member = function(){
  var tmp$1, tmp$0;
  if (!this.hasNext$member()) {
    $Dart$ThrowException($intern(NoMoreElementsException$Dart.NoMoreElementsException$$Factory()));
  }
  return this._list$html623afa$$getter_().INDEX$operator((tmp$0 = this._index$html623afa$$getter_() , (this._index$html623afa$$setter_(tmp$1 = ADD$operator(tmp$0, 1)) , tmp$1 , tmp$0)));
}
;
html623afa$FrozenElementListIterator$Dart.prototype.next$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return html623afa$FrozenElementListIterator$Dart.prototype.next$member.call(this);
}
;
html623afa$FrozenElementListIterator$Dart.prototype.next$getter = function next$getter(){
  return $bind(html623afa$FrozenElementListIterator$Dart.prototype.next$named, this);
}
;
html623afa$FrozenElementListIterator$Dart.prototype.hasNext$member = function(){
  return LT$operator(this._index$html623afa$$getter_(), this._list$html623afa$$getter_().length$getter());
}
;
html623afa$FrozenElementListIterator$Dart.prototype.hasNext$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return html623afa$FrozenElementListIterator$Dart.prototype.hasNext$member.call(this);
}
;
html623afa$FrozenElementListIterator$Dart.prototype.hasNext$getter = function hasNext$getter(){
  return $bind(html623afa$FrozenElementListIterator$Dart.prototype.hasNext$named, this);
}
;
