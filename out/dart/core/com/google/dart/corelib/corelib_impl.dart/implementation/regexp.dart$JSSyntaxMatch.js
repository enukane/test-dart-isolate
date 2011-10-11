function JSSyntaxMatch$Dart(){
}

JSSyntaxMatch$Dart.$lookupRTT = function(){
  return RTT.create($cls('JSSyntaxMatch$Dart'), JSSyntaxMatch$Dart.$RTTimplements);
}
;
JSSyntaxMatch$Dart.$RTTimplements = function(rtt){
  JSSyntaxMatch$Dart.$addTo(rtt);
}
;
JSSyntaxMatch$Dart.$addTo = function(target){
  var rtt = JSSyntaxMatch$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  Match$Dart.$addTo(target);
}
;
JSSyntaxMatch$Dart.prototype.$implements$JSSyntaxMatch$Dart = 1;
JSSyntaxMatch$Dart.prototype.$implements$Match$Dart = 1;
JSSyntaxMatch$Dart.prototype.$implements$Object$Dart = 1;
JSSyntaxMatch$Dart.$Constructor = function(regexp, str){
  Object.$Constructor.call(this);
}
;
JSSyntaxMatch$Dart.$Initializer = function(regexp, str){
  Object.$Initializer.call(this);
  this.pattern$field = regexp;
  this.str$field = str;
}
;
JSSyntaxMatch$Dart.JSSyntaxMatch$$Factory = function(regexp, str){
  var tmp$0 = new JSSyntaxMatch$Dart;
  tmp$0.$typeInfo = JSSyntaxMatch$Dart.$lookupRTT();
  JSSyntaxMatch$Dart.$Initializer.call(tmp$0, regexp, str);
  JSSyntaxMatch$Dart.$Constructor.call(tmp$0, regexp, str);
  return tmp$0;
}
;
JSSyntaxMatch$Dart.prototype.str$named = function(){
  return this.str$getter().apply(this, arguments);
}
;
JSSyntaxMatch$Dart.prototype.str$getter = function(){
  return this.str$field;
}
;
JSSyntaxMatch$Dart.prototype.pattern$named = function(){
  return this.pattern$getter().apply(this, arguments);
}
;
JSSyntaxMatch$Dart.prototype.pattern$getter = function(){
  return this.pattern$field;
}
;
JSSyntaxMatch$Dart.prototype.INDEX$operator = function(group){
  return this.group$named(1, $noargs, group);
}
;
function JSSyntaxMatch$Dart$groups$c0$18_18$Hoisted(dartc_scp$1, group){
  dartc_scp$1.strings.add$named(1, $noargs, this.group$named(1, $noargs, group));
}

function JSSyntaxMatch$Dart$groups$c0$18_18$Hoisted$named($s0, $n, $o, group){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return JSSyntaxMatch$Dart$groups$c0$18_18$Hoisted.call(this, $s0, group);
}

JSSyntaxMatch$Dart.prototype.groups$member = function(groups){
  var dartc_scp$1;
  dartc_scp$1 = {};
  dartc_scp$1.strings = ArrayFactory$Dart.Array$$Factory([String$Dart.$lookupRTT()], $Dart$Null);
  groups.forEach$named(1, $noargs, $bind(JSSyntaxMatch$Dart$groups$c0$18_18$Hoisted$named, this, dartc_scp$1));
  return dartc_scp$1.strings;
  dartc_scp$1 = $Dart$Null;
}
;
JSSyntaxMatch$Dart.prototype.groups$named = function($n, $o, groups){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return JSSyntaxMatch$Dart.prototype.groups$member.call(this, groups);
}
;
JSSyntaxMatch$Dart.prototype.groups$getter = function groups$getter(){
  return $bind(JSSyntaxMatch$Dart.prototype.groups$named, this);
}
;
JSSyntaxMatch$Dart.prototype.group$member = function(nb){
  return native_JSSyntaxMatch_group.call(this, nb);
}
;
JSSyntaxMatch$Dart.prototype.group$named = function($n, $o, nb){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return JSSyntaxMatch$Dart.prototype.group$member.call(this, nb);
}
;
JSSyntaxMatch$Dart.prototype.group$getter = function group$getter(){
  return $bind(JSSyntaxMatch$Dart.prototype.group$named, this);
}
;
JSSyntaxMatch$Dart.prototype.start$member = function(){
  return native_JSSyntaxMatch_start.call(this);
}
;
JSSyntaxMatch$Dart.prototype.start$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return JSSyntaxMatch$Dart.prototype.start$member.call(this);
}
;
JSSyntaxMatch$Dart.prototype.start$getter = function start$getter(){
  return $bind(JSSyntaxMatch$Dart.prototype.start$named, this);
}
;
JSSyntaxMatch$Dart.prototype.end$member = function(){
  return native_JSSyntaxMatch_end.call(this);
}
;
JSSyntaxMatch$Dart.prototype.end$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return JSSyntaxMatch$Dart.prototype.end$member.call(this);
}
;
JSSyntaxMatch$Dart.prototype.end$getter = function end$getter(){
  return $bind(JSSyntaxMatch$Dart.prototype.end$named, this);
}
;
JSSyntaxMatch$Dart.prototype.groupCount$member = function(){
  return native_JSSyntaxMatch_groupCount.call(this);
}
;
JSSyntaxMatch$Dart.prototype.groupCount$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return JSSyntaxMatch$Dart.prototype.groupCount$member.call(this);
}
;
JSSyntaxMatch$Dart.prototype.groupCount$getter = function groupCount$getter(){
  return $bind(JSSyntaxMatch$Dart.prototype.groupCount$named, this);
}
;
JSSyntaxMatch$Dart._new$$member_ = function(regexp, str){
  return JSSyntaxMatch$Dart.JSSyntaxMatch$$Factory(regexp, str);
}
;
JSSyntaxMatch$Dart._new$$named_ = function($n, $o, regexp, str){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return JSSyntaxMatch$Dart._new$$member_(regexp, str);
}
;
function native_JSSyntaxMatch__new(regexp, str){
  return JSSyntaxMatch$Dart._new$$member_(regexp, str);
}

JSSyntaxMatch$Dart._new$$getter_ = function _new$$getter_(){
  return JSSyntaxMatch$Dart._new$$named_;
}
;
JSSyntaxMatch$Dart.prototype.$const_id = function(){
  return $cls('JSSyntaxMatch$Dart') + (':' + $dart_const_id(this.str$field)) + (':' + $dart_const_id(this.pattern$field));
}
;
