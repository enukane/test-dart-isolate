function _StringMatch$Dart(){
}

_StringMatch$Dart.$lookupRTT = function(){
  return RTT.create($cls('_StringMatch$Dart'), _StringMatch$Dart.$RTTimplements);
}
;
_StringMatch$Dart.$RTTimplements = function(rtt){
  _StringMatch$Dart.$addTo(rtt);
}
;
_StringMatch$Dart.$addTo = function(target){
  var rtt = _StringMatch$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  Match$Dart.$addTo(target);
}
;
_StringMatch$Dart.prototype.$implements$_StringMatch$Dart = 1;
_StringMatch$Dart.prototype.$implements$Match$Dart = 1;
_StringMatch$Dart.prototype.$implements$Object$Dart = 1;
_StringMatch$Dart.$Constructor = function(_start, str, pattern){
  Object.$Constructor.call(this);
}
;
_StringMatch$Dart.$Initializer = function(_start, str, pattern){
  Object.$Initializer.call(this);
  this._start$$field_ = _start;
  this.str$field = str;
  this.pattern$field = pattern;
}
;
_StringMatch$Dart._StringMatch$$Factory = function(_start, str, pattern){
  var tmp$0 = new _StringMatch$Dart;
  tmp$0.$typeInfo = _StringMatch$Dart.$lookupRTT();
  _StringMatch$Dart.$Initializer.call(tmp$0, _start, str, pattern);
  _StringMatch$Dart.$Constructor.call(tmp$0, _start, str, pattern);
  return tmp$0;
}
;
_StringMatch$Dart.prototype.start$member = function(){
  return this._start$$getter_();
}
;
_StringMatch$Dart.prototype.start$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _StringMatch$Dart.prototype.start$member.call(this);
}
;
_StringMatch$Dart.prototype.start$getter = function start$getter(){
  return $bind(_StringMatch$Dart.prototype.start$named, this);
}
;
_StringMatch$Dart.prototype.end$member = function(){
  return ADD$operator(this._start$$getter_(), this.pattern$getter().length$getter());
}
;
_StringMatch$Dart.prototype.end$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _StringMatch$Dart.prototype.end$member.call(this);
}
;
_StringMatch$Dart.prototype.end$getter = function end$getter(){
  return $bind(_StringMatch$Dart.prototype.end$named, this);
}
;
_StringMatch$Dart.prototype.INDEX$operator = function(g){
  return this.group$member(g);
}
;
_StringMatch$Dart.prototype.groupCount$member = function(){
  return 0;
}
;
_StringMatch$Dart.prototype.groupCount$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _StringMatch$Dart.prototype.groupCount$member.call(this);
}
;
_StringMatch$Dart.prototype.groupCount$getter = function groupCount$getter(){
  return $bind(_StringMatch$Dart.prototype.groupCount$named, this);
}
;
_StringMatch$Dart.prototype.group$member = function(group){
  if (NE$operator(group, 0)) {
    $Dart$ThrowException(IndexOutOfRangeException$Dart.IndexOutOfRangeException$$Factory(group));
  }
  return this.pattern$getter();
}
;
_StringMatch$Dart.prototype.group$named = function($n, $o, group){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _StringMatch$Dart.prototype.group$member.call(this, group);
}
;
_StringMatch$Dart.prototype.group$getter = function group$getter(){
  return $bind(_StringMatch$Dart.prototype.group$named, this);
}
;
_StringMatch$Dart.prototype.groups$member = function(groups){
  var result = ArrayFactory$Dart.Array$$Factory([String$Dart.$lookupRTT()], $Dart$Null);
  {
    var $0 = groups.iterator$named(0, $noargs);
    while ($0.hasNext$named(0, $noargs)) {
      var g = $0.next$named(0, $noargs);
      {
        result.add$named(1, $noargs, this.group$member(g));
      }
    }
  }
  return result;
}
;
_StringMatch$Dart.prototype.groups$named = function($n, $o, groups){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _StringMatch$Dart.prototype.groups$member.call(this, groups);
}
;
_StringMatch$Dart.prototype.groups$getter = function groups$getter(){
  return $bind(_StringMatch$Dart.prototype.groups$named, this);
}
;
_StringMatch$Dart.prototype._start$$named_ = function(){
  return this._start$$getter_().apply(this, arguments);
}
;
_StringMatch$Dart.prototype._start$$getter_ = function(){
  return this._start$$field_;
}
;
_StringMatch$Dart.prototype.str$named = function(){
  return this.str$getter().apply(this, arguments);
}
;
_StringMatch$Dart.prototype.str$getter = function(){
  return this.str$field;
}
;
_StringMatch$Dart.prototype.pattern$named = function(){
  return this.pattern$getter().apply(this, arguments);
}
;
_StringMatch$Dart.prototype.pattern$getter = function(){
  return this.pattern$field;
}
;
_StringMatch$Dart.prototype.$const_id = function(){
  return $cls('_StringMatch$Dart') + (':' + $dart_const_id(this._start$$field_)) + (':' + $dart_const_id(this.str$field)) + (':' + $dart_const_id(this.pattern$field));
}
;
