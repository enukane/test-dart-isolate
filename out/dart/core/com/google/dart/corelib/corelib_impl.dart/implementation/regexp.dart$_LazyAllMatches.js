function _LazyAllMatches$Dart(){
}

_LazyAllMatches$Dart.$lookupRTT = function(){
  return RTT.create($cls('_LazyAllMatches$Dart'), _LazyAllMatches$Dart.$RTTimplements);
}
;
_LazyAllMatches$Dart.$RTTimplements = function(rtt){
  _LazyAllMatches$Dart.$addTo(rtt);
}
;
_LazyAllMatches$Dart.$addTo = function(target){
  var rtt = _LazyAllMatches$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  Collection$Dart.$addTo(target, [Match$Dart.$lookupRTT()]);
}
;
_LazyAllMatches$Dart.prototype.$implements$_LazyAllMatches$Dart = 1;
_LazyAllMatches$Dart.prototype.$implements$Collection$Dart = 1;
_LazyAllMatches$Dart.prototype.$implements$Iterable$Dart = 1;
_LazyAllMatches$Dart.prototype.$implements$Object$Dart = 1;
_LazyAllMatches$Dart.$Constructor = function(_regexp, _str){
  Object.$Constructor.call(this);
}
;
_LazyAllMatches$Dart.$Initializer = function(_regexp, _str){
  Object.$Initializer.call(this);
  this._regexp$$field_ = _regexp;
  this._str$$field_ = _str;
}
;
_LazyAllMatches$Dart._LazyAllMatches$$Factory = function(_regexp, _str){
  var tmp$0 = new _LazyAllMatches$Dart;
  tmp$0.$typeInfo = _LazyAllMatches$Dart.$lookupRTT();
  _LazyAllMatches$Dart.$Initializer.call(tmp$0, _regexp, _str);
  _LazyAllMatches$Dart.$Constructor.call(tmp$0, _regexp, _str);
  return tmp$0;
}
;
_LazyAllMatches$Dart.prototype._regexp$$named_ = function(){
  return this._regexp$$getter_().apply(this, arguments);
}
;
_LazyAllMatches$Dart.prototype._regexp$$getter_ = function(){
  return this._regexp$$field_;
}
;
_LazyAllMatches$Dart.prototype._regexp$$setter_ = function(tmp$0){
  this._regexp$$field_ = tmp$0;
}
;
_LazyAllMatches$Dart.prototype._str$$named_ = function(){
  return this._str$$getter_().apply(this, arguments);
}
;
_LazyAllMatches$Dart.prototype._str$$getter_ = function(){
  return this._str$$field_;
}
;
_LazyAllMatches$Dart.prototype._str$$setter_ = function(tmp$0){
  this._str$$field_ = tmp$0;
}
;
_LazyAllMatches$Dart.prototype.forEach$member = function(f){
  {
    var $0 = this.iterator$named(0, $noargs);
    while ($0.hasNext$named(0, $noargs)) {
      var match_0 = $0.next$named(0, $noargs);
      {
        f(1, $noargs, match_0);
      }
    }
  }
}
;
_LazyAllMatches$Dart.prototype.forEach$named = function($n, $o, f){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _LazyAllMatches$Dart.prototype.forEach$member.call(this, f);
}
;
_LazyAllMatches$Dart.prototype.forEach$getter = function forEach$getter(){
  return $bind(_LazyAllMatches$Dart.prototype.forEach$named, this);
}
;
_LazyAllMatches$Dart.prototype.filter$member = function(f){
  var result = ArrayFactory$Dart.Array$$Factory([Match$Dart.$lookupRTT()], $Dart$Null);
  {
    var $0 = this.iterator$named(0, $noargs);
    while ($0.hasNext$named(0, $noargs)) {
      var match_0 = $0.next$named(0, $noargs);
      {
        if (f(1, $noargs, match_0)) {
          result.add$named(1, $noargs, match_0);
        }
      }
    }
  }
  return result;
}
;
_LazyAllMatches$Dart.prototype.filter$named = function($n, $o, f){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _LazyAllMatches$Dart.prototype.filter$member.call(this, f);
}
;
_LazyAllMatches$Dart.prototype.filter$getter = function filter$getter(){
  return $bind(_LazyAllMatches$Dart.prototype.filter$named, this);
}
;
_LazyAllMatches$Dart.prototype.every$member = function(f){
  {
    var $0 = this.iterator$named(0, $noargs);
    while ($0.hasNext$named(0, $noargs)) {
      var match_0 = $0.next$named(0, $noargs);
      {
        if (!f(1, $noargs, match_0)) {
          return false;
        }
      }
    }
  }
  return true;
}
;
_LazyAllMatches$Dart.prototype.every$named = function($n, $o, f){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _LazyAllMatches$Dart.prototype.every$member.call(this, f);
}
;
_LazyAllMatches$Dart.prototype.every$getter = function every$getter(){
  return $bind(_LazyAllMatches$Dart.prototype.every$named, this);
}
;
_LazyAllMatches$Dart.prototype.some$member = function(f){
  {
    var $0 = this.iterator$named(0, $noargs);
    while ($0.hasNext$named(0, $noargs)) {
      var match_0 = $0.next$named(0, $noargs);
      {
        if (f(1, $noargs, match_0)) {
          return true;
        }
      }
    }
  }
  return false;
}
;
_LazyAllMatches$Dart.prototype.some$named = function($n, $o, f){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _LazyAllMatches$Dart.prototype.some$member.call(this, f);
}
;
_LazyAllMatches$Dart.prototype.some$getter = function some$getter(){
  return $bind(_LazyAllMatches$Dart.prototype.some$named, this);
}
;
_LazyAllMatches$Dart.prototype.isEmpty$member = function(){
  return EQ$operator(this._regexp$$getter_().firstMatch$named(1, $noargs, this._str$$getter_()), $Dart$Null);
}
;
_LazyAllMatches$Dart.prototype.isEmpty$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _LazyAllMatches$Dart.prototype.isEmpty$member.call(this);
}
;
_LazyAllMatches$Dart.prototype.isEmpty$getter = function isEmpty$getter(){
  return $bind(_LazyAllMatches$Dart.prototype.isEmpty$named, this);
}
;
_LazyAllMatches$Dart.prototype.length$named = function(){
  return this.length$getter().apply(this, arguments);
}
;
_LazyAllMatches$Dart.prototype.length$getter = function(){
  var tmp$0;
  var result = 0;
  {
    var $1 = this.iterator$named(0, $noargs);
    while ($1.hasNext$named(0, $noargs)) {
      var match = $1.next$named(0, $noargs);
      {
        tmp$0 = result , (result = ADD$operator(tmp$0, 1) , tmp$0);
      }
    }
  }
  return result;
}
;
_LazyAllMatches$Dart.prototype.iterator$member = function(){
  return _LazyAllMatchesIterator$Dart._LazyAllMatchesIterator$$Factory(this._regexp$$getter_(), this._str$$getter_());
}
;
_LazyAllMatches$Dart.prototype.iterator$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _LazyAllMatches$Dart.prototype.iterator$member.call(this);
}
;
_LazyAllMatches$Dart.prototype.iterator$getter = function iterator$getter(){
  return $bind(_LazyAllMatches$Dart.prototype.iterator$named, this);
}
;
_LazyAllMatches$Dart.prototype.$const_id = function(){
  return $cls('_LazyAllMatches$Dart') + (':' + $dart_const_id(this._regexp$$field_)) + (':' + $dart_const_id(this._str$$field_)) + (':' + $dart_const_id(this.length$field));
}
;
