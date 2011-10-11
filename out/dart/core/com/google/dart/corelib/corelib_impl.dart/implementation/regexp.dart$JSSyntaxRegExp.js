function JSSyntaxRegExp$Dart(){
}

JSSyntaxRegExp$Dart.$lookupRTT = function(){
  return RTT.create($cls('JSSyntaxRegExp$Dart'), JSSyntaxRegExp$Dart.$RTTimplements);
}
;
JSSyntaxRegExp$Dart.$RTTimplements = function(rtt){
  JSSyntaxRegExp$Dart.$addTo(rtt);
}
;
JSSyntaxRegExp$Dart.$addTo = function(target){
  var rtt = JSSyntaxRegExp$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  RegExp$Dart.$addTo(target);
}
;
JSSyntaxRegExp$Dart.prototype.$implements$JSSyntaxRegExp$Dart = 1;
JSSyntaxRegExp$Dart.prototype.$implements$RegExp$Dart = 1;
JSSyntaxRegExp$Dart.prototype.$implements$Pattern$Dart = 1;
JSSyntaxRegExp$Dart.prototype.$implements$Object$Dart = 1;
JSSyntaxRegExp$Dart.$Constructor = function(pattern, multiLine, ignoreCase){
  Object.$Constructor.call(this);
}
;
JSSyntaxRegExp$Dart.$Initializer = function(pattern, multiLine, ignoreCase){
  Object.$Initializer.call(this);
  this.pattern$field = pattern;
  this.multiLine$field = multiLine;
  this.ignoreCase$field = ignoreCase;
}
;
JSSyntaxRegExp$Dart.JSSyntaxRegExp$$Factory = function(pattern, multiLine, ignoreCase){
  var tmp$0 = new JSSyntaxRegExp$Dart;
  tmp$0.$typeInfo = JSSyntaxRegExp$Dart.$lookupRTT();
  JSSyntaxRegExp$Dart.$Initializer.call(tmp$0, pattern, multiLine, ignoreCase);
  JSSyntaxRegExp$Dart.$Constructor.call(tmp$0, pattern, multiLine, ignoreCase);
  return tmp$0;
}
;
JSSyntaxRegExp$Dart.prototype.pattern$named = function(){
  return this.pattern$getter().apply(this, arguments);
}
;
JSSyntaxRegExp$Dart.prototype.pattern$getter = function(){
  return this.pattern$field;
}
;
JSSyntaxRegExp$Dart.prototype.multiLine$named = function(){
  return this.multiLine$getter().apply(this, arguments);
}
;
JSSyntaxRegExp$Dart.prototype.multiLine$getter = function(){
  return this.multiLine$field;
}
;
JSSyntaxRegExp$Dart.prototype.ignoreCase$named = function(){
  return this.ignoreCase$getter().apply(this, arguments);
}
;
JSSyntaxRegExp$Dart.prototype.ignoreCase$getter = function(){
  return this.ignoreCase$field;
}
;
JSSyntaxRegExp$Dart.prototype.allMatches$member = function(str){
  return _LazyAllMatches$Dart._LazyAllMatches$$Factory(this, str);
}
;
JSSyntaxRegExp$Dart.prototype.allMatches$named = function($n, $o, str){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return JSSyntaxRegExp$Dart.prototype.allMatches$member.call(this, str);
}
;
JSSyntaxRegExp$Dart.prototype.allMatches$getter = function allMatches$getter(){
  return $bind(JSSyntaxRegExp$Dart.prototype.allMatches$named, this);
}
;
JSSyntaxRegExp$Dart.prototype.firstMatch$member = function(str){
  return native_JSSyntaxRegExp_firstMatch.call(this, str);
}
;
JSSyntaxRegExp$Dart.prototype.firstMatch$named = function($n, $o, str){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return JSSyntaxRegExp$Dart.prototype.firstMatch$member.call(this, str);
}
;
JSSyntaxRegExp$Dart.prototype.firstMatch$getter = function firstMatch$getter(){
  return $bind(JSSyntaxRegExp$Dart.prototype.firstMatch$named, this);
}
;
JSSyntaxRegExp$Dart.prototype.hasMatch$member = function(str){
  return native_JSSyntaxRegExp_hasMatch.call(this, str);
}
;
JSSyntaxRegExp$Dart.prototype.hasMatch$named = function($n, $o, str){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return JSSyntaxRegExp$Dart.prototype.hasMatch$member.call(this, str);
}
;
JSSyntaxRegExp$Dart.prototype.hasMatch$getter = function hasMatch$getter(){
  return $bind(JSSyntaxRegExp$Dart.prototype.hasMatch$named, this);
}
;
JSSyntaxRegExp$Dart.prototype.stringMatch$member = function(str){
  return native_JSSyntaxRegExp_stringMatch.call(this, str);
}
;
JSSyntaxRegExp$Dart.prototype.stringMatch$named = function($n, $o, str){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return JSSyntaxRegExp$Dart.prototype.stringMatch$member.call(this, str);
}
;
JSSyntaxRegExp$Dart.prototype.stringMatch$getter = function stringMatch$getter(){
  return $bind(JSSyntaxRegExp$Dart.prototype.stringMatch$named, this);
}
;
JSSyntaxRegExp$Dart._pattern$$member_ = function(regexp){
  return regexp.pattern$getter();
}
;
JSSyntaxRegExp$Dart._pattern$$named_ = function($n, $o, regexp){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return JSSyntaxRegExp$Dart._pattern$$member_(regexp);
}
;
function native_JSSyntaxRegExp__pattern(regexp){
  return JSSyntaxRegExp$Dart._pattern$$member_(regexp);
}

JSSyntaxRegExp$Dart._pattern$$getter_ = function _pattern$$getter_(){
  return JSSyntaxRegExp$Dart._pattern$$named_;
}
;
JSSyntaxRegExp$Dart._multiLine$$member_ = function(regexp){
  return regexp.multiLine$getter();
}
;
JSSyntaxRegExp$Dart._multiLine$$named_ = function($n, $o, regexp){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return JSSyntaxRegExp$Dart._multiLine$$member_(regexp);
}
;
function native_JSSyntaxRegExp__multiLine(regexp){
  return JSSyntaxRegExp$Dart._multiLine$$member_(regexp);
}

JSSyntaxRegExp$Dart._multiLine$$getter_ = function _multiLine$$getter_(){
  return JSSyntaxRegExp$Dart._multiLine$$named_;
}
;
JSSyntaxRegExp$Dart._ignoreCase$$member_ = function(regexp){
  return regexp.ignoreCase$getter();
}
;
JSSyntaxRegExp$Dart._ignoreCase$$named_ = function($n, $o, regexp){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return JSSyntaxRegExp$Dart._ignoreCase$$member_(regexp);
}
;
function native_JSSyntaxRegExp__ignoreCase(regexp){
  return JSSyntaxRegExp$Dart._ignoreCase$$member_(regexp);
}

JSSyntaxRegExp$Dart._ignoreCase$$getter_ = function _ignoreCase$$getter_(){
  return JSSyntaxRegExp$Dart._ignoreCase$$named_;
}
;
JSSyntaxRegExp$Dart.prototype.$const_id = function(){
  return $cls('JSSyntaxRegExp$Dart') + (':' + $dart_const_id(this.pattern$field)) + (':' + $dart_const_id(this.multiLine$field)) + (':' + $dart_const_id(this.ignoreCase$field));
}
;
