function _LazyAllMatchesIterator$Dart(){
}

_LazyAllMatchesIterator$Dart.$lookupRTT = function(){
  return RTT.create($cls('_LazyAllMatchesIterator$Dart'), _LazyAllMatchesIterator$Dart.$RTTimplements);
}
;
_LazyAllMatchesIterator$Dart.$RTTimplements = function(rtt){
  _LazyAllMatchesIterator$Dart.$addTo(rtt);
}
;
_LazyAllMatchesIterator$Dart.$addTo = function(target){
  var rtt = _LazyAllMatchesIterator$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  Iterator$Dart.$addTo(target, [Match$Dart.$lookupRTT()]);
}
;
_LazyAllMatchesIterator$Dart.prototype.$implements$_LazyAllMatchesIterator$Dart = 1;
_LazyAllMatchesIterator$Dart.prototype.$implements$Iterator$Dart = 1;
_LazyAllMatchesIterator$Dart.prototype.$implements$Object$Dart = 1;
_LazyAllMatchesIterator$Dart.$Constructor = function(_regexp, _str){
  Object.$Constructor.call(this);
  this._jsInit$$member_(this._regexp$$getter_());
}
;
_LazyAllMatchesIterator$Dart.$Initializer = function(_regexp, _str){
  Object.$Initializer.call(this);
  this._regexp$$field_ = _regexp;
  this._str$$field_ = _str;
}
;
_LazyAllMatchesIterator$Dart._LazyAllMatchesIterator$$Factory = function(_regexp, _str){
  var tmp$0 = new _LazyAllMatchesIterator$Dart;
  tmp$0.$typeInfo = _LazyAllMatchesIterator$Dart.$lookupRTT();
  _LazyAllMatchesIterator$Dart.$Initializer.call(tmp$0, _regexp, _str);
  _LazyAllMatchesIterator$Dart.$Constructor.call(tmp$0, _regexp, _str);
  return tmp$0;
}
;
_LazyAllMatchesIterator$Dart.prototype._regexp$$named_ = function(){
  return this._regexp$$getter_().apply(this, arguments);
}
;
_LazyAllMatchesIterator$Dart.prototype._regexp$$getter_ = function(){
  return this._regexp$$field_;
}
;
_LazyAllMatchesIterator$Dart.prototype._regexp$$setter_ = function(tmp$0){
  this._regexp$$field_ = tmp$0;
}
;
_LazyAllMatchesIterator$Dart.prototype._str$$named_ = function(){
  return this._str$$getter_().apply(this, arguments);
}
;
_LazyAllMatchesIterator$Dart.prototype._str$$getter_ = function(){
  return this._str$$field_;
}
;
_LazyAllMatchesIterator$Dart.prototype._str$$setter_ = function(tmp$0){
  this._str$$field_ = tmp$0;
}
;
_LazyAllMatchesIterator$Dart.prototype._nextMatch$$named_ = function(){
  return this._nextMatch$$getter_().apply(this, arguments);
}
;
_LazyAllMatchesIterator$Dart.prototype._nextMatch$$getter_ = function(){
  return this._nextMatch$$field_;
}
;
_LazyAllMatchesIterator$Dart.prototype._nextMatch$$setter_ = function(tmp$0){
  this._nextMatch$$field_ = tmp$0;
}
;
_LazyAllMatchesIterator$Dart.prototype.next$member = function(){
  var tmp$0;
  if (!this.hasNext$member()) {
    $Dart$ThrowException($intern(NoMoreElementsException$Dart.NoMoreElementsException$$Factory()));
  }
  var result = this._nextMatch$$getter_();
  this._nextMatch$$setter_(tmp$0 = $Dart$Null) , tmp$0;
  return result;
}
;
_LazyAllMatchesIterator$Dart.prototype.next$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _LazyAllMatchesIterator$Dart.prototype.next$member.call(this);
}
;
_LazyAllMatchesIterator$Dart.prototype.next$getter = function next$getter(){
  return $bind(_LazyAllMatchesIterator$Dart.prototype.next$named, this);
}
;
_LazyAllMatchesIterator$Dart.prototype.hasNext$member = function(){
  var tmp$0;
  if (NE$operator(this._nextMatch$$getter_(), $Dart$Null)) {
    return true;
  }
  this._nextMatch$$setter_(tmp$0 = this._computeNextMatch$$member_(this._regexp$$getter_(), this._str$$getter_())) , tmp$0;
  return NE$operator(this._nextMatch$$getter_(), $Dart$Null);
}
;
_LazyAllMatchesIterator$Dart.prototype.hasNext$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _LazyAllMatchesIterator$Dart.prototype.hasNext$member.call(this);
}
;
_LazyAllMatchesIterator$Dart.prototype.hasNext$getter = function hasNext$getter(){
  return $bind(_LazyAllMatchesIterator$Dart.prototype.hasNext$named, this);
}
;
_LazyAllMatchesIterator$Dart.prototype._jsInit$$member_ = function(regexp){
  return native__LazyAllMatchesIterator__jsInit.call(this, regexp);
}
;
_LazyAllMatchesIterator$Dart.prototype._jsInit$$named_ = function($n, $o, regexp){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _LazyAllMatchesIterator$Dart.prototype._jsInit$$member_.call(this, regexp);
}
;
_LazyAllMatchesIterator$Dart.prototype._jsInit$$getter_ = function _jsInit$$getter_(){
  return $bind(_LazyAllMatchesIterator$Dart.prototype._jsInit$$named_, this);
}
;
_LazyAllMatchesIterator$Dart.prototype._computeNextMatch$$member_ = function(regexp, str){
  return native__LazyAllMatchesIterator__computeNextMatch.call(this, regexp, str);
}
;
_LazyAllMatchesIterator$Dart.prototype._computeNextMatch$$named_ = function($n, $o, regexp, str){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _LazyAllMatchesIterator$Dart.prototype._computeNextMatch$$member_.call(this, regexp, str);
}
;
_LazyAllMatchesIterator$Dart.prototype._computeNextMatch$$getter_ = function _computeNextMatch$$getter_(){
  return $bind(_LazyAllMatchesIterator$Dart.prototype._computeNextMatch$$named_, this);
}
;
