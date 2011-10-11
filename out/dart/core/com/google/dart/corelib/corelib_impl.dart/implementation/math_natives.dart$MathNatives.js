function MathNatives$Dart(){
}

MathNatives$Dart.$lookupRTT = function(){
  return RTT.create($cls('MathNatives$Dart'));
}
;
MathNatives$Dart.$addTo = function(target){
  var rtt = MathNatives$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
}
;
MathNatives$Dart.prototype.$implements$MathNatives$Dart = 1;
MathNatives$Dart.prototype.$implements$Object$Dart = 1;
MathNatives$Dart.cos$member = function(d){
  return native_MathNatives_cos(d);
}
;
MathNatives$Dart.cos$named = function($n, $o, d){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return MathNatives$Dart.cos$member(d);
}
;
MathNatives$Dart.cos$getter = function cos$getter(){
  return MathNatives$Dart.cos$named;
}
;
MathNatives$Dart.sin$member = function(d){
  return native_MathNatives_sin(d);
}
;
MathNatives$Dart.sin$named = function($n, $o, d){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return MathNatives$Dart.sin$member(d);
}
;
MathNatives$Dart.sin$getter = function sin$getter(){
  return MathNatives$Dart.sin$named;
}
;
MathNatives$Dart.tan$member = function(d){
  return native_MathNatives_tan(d);
}
;
MathNatives$Dart.tan$named = function($n, $o, d){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return MathNatives$Dart.tan$member(d);
}
;
MathNatives$Dart.tan$getter = function tan$getter(){
  return MathNatives$Dart.tan$named;
}
;
MathNatives$Dart.acos$member = function(d){
  return native_MathNatives_acos(d);
}
;
MathNatives$Dart.acos$named = function($n, $o, d){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return MathNatives$Dart.acos$member(d);
}
;
MathNatives$Dart.acos$getter = function acos$getter(){
  return MathNatives$Dart.acos$named;
}
;
MathNatives$Dart.asin$member = function(d){
  return native_MathNatives_asin(d);
}
;
MathNatives$Dart.asin$named = function($n, $o, d){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return MathNatives$Dart.asin$member(d);
}
;
MathNatives$Dart.asin$getter = function asin$getter(){
  return MathNatives$Dart.asin$named;
}
;
MathNatives$Dart.atan$member = function(d){
  return native_MathNatives_atan(d);
}
;
MathNatives$Dart.atan$named = function($n, $o, d){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return MathNatives$Dart.atan$member(d);
}
;
MathNatives$Dart.atan$getter = function atan$getter(){
  return MathNatives$Dart.atan$named;
}
;
MathNatives$Dart.atan2$member = function(a, b){
  return native_MathNatives_atan2(a, b);
}
;
MathNatives$Dart.atan2$named = function($n, $o, a, b){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return MathNatives$Dart.atan2$member(a, b);
}
;
MathNatives$Dart.atan2$getter = function atan2$getter(){
  return MathNatives$Dart.atan2$named;
}
;
MathNatives$Dart.sqrt$member = function(d){
  return native_MathNatives_sqrt(d);
}
;
MathNatives$Dart.sqrt$named = function($n, $o, d){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return MathNatives$Dart.sqrt$member(d);
}
;
MathNatives$Dart.sqrt$getter = function sqrt$getter(){
  return MathNatives$Dart.sqrt$named;
}
;
MathNatives$Dart.exp$member = function(d){
  return native_MathNatives_exp(d);
}
;
MathNatives$Dart.exp$named = function($n, $o, d){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return MathNatives$Dart.exp$member(d);
}
;
MathNatives$Dart.exp$getter = function exp$getter(){
  return MathNatives$Dart.exp$named;
}
;
MathNatives$Dart.log$member = function(d){
  return native_MathNatives_log(d);
}
;
MathNatives$Dart.log$named = function($n, $o, d){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return MathNatives$Dart.log$member(d);
}
;
MathNatives$Dart.log$getter = function log$getter(){
  return MathNatives$Dart.log$named;
}
;
MathNatives$Dart.pow$member = function(d1, d2){
  return native_MathNatives_pow(d1, d2);
}
;
MathNatives$Dart.pow$named = function($n, $o, d1, d2){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return MathNatives$Dart.pow$member(d1, d2);
}
;
MathNatives$Dart.pow$getter = function pow$getter(){
  return MathNatives$Dart.pow$named;
}
;
MathNatives$Dart.random$member = function(){
  return native_MathNatives_random();
}
;
MathNatives$Dart.random$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return MathNatives$Dart.random$member();
}
;
MathNatives$Dart.random$getter = function random$getter(){
  return MathNatives$Dart.random$named;
}
;
MathNatives$Dart.parseInt$member = function(str){
  return native_MathNatives_parseInt(str);
}
;
MathNatives$Dart.parseInt$named = function($n, $o, str){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return MathNatives$Dart.parseInt$member(str);
}
;
MathNatives$Dart.parseInt$getter = function parseInt$getter(){
  return MathNatives$Dart.parseInt$named;
}
;
MathNatives$Dart.parseDouble$member = function(str){
  return native_MathNatives_parseDouble(str);
}
;
MathNatives$Dart.parseDouble$named = function($n, $o, str){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return MathNatives$Dart.parseDouble$member(str);
}
;
MathNatives$Dart.parseDouble$getter = function parseDouble$getter(){
  return MathNatives$Dart.parseDouble$named;
}
;
MathNatives$Dart._newBadNumberFormat$$member_ = function(x){
  return BadNumberFormatException$Dart.BadNumberFormatException$$Factory(x);
}
;
MathNatives$Dart._newBadNumberFormat$$named_ = function($n, $o, x){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return MathNatives$Dart._newBadNumberFormat$$member_(x);
}
;
function native_MathNatives__newBadNumberFormat(x){
  return MathNatives$Dart._newBadNumberFormat$$member_(x);
}

MathNatives$Dart._newBadNumberFormat$$getter_ = function _newBadNumberFormat$$getter_(){
  return MathNatives$Dart._newBadNumberFormat$$named_;
}
;
MathNatives$Dart.$Constructor = function(){
  Object.$Constructor.call(this);
}
;
MathNatives$Dart.$Initializer = function(){
  Object.$Initializer.call(this);
}
;
MathNatives$Dart.MathNatives$$Factory = function(){
  var tmp$0 = new MathNatives$Dart;
  tmp$0.$typeInfo = MathNatives$Dart.$lookupRTT();
  MathNatives$Dart.$Initializer.call(tmp$0);
  MathNatives$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
