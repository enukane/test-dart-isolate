function Math$Dart(){
}

Math$Dart.$lookupRTT = function(){
  return RTT.create($cls('Math$Dart'));
}
;
Math$Dart.$addTo = function(target){
  var rtt = Math$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
}
;
Math$Dart.prototype.$implements$Math$Dart = 1;
Math$Dart.prototype.$implements$Object$Dart = 1;
Math$Dart.E$named = function(){
  return Math$Dart.E$getter().apply(this, arguments);
}
;
Math$Dart.E$getter = function(){
  return 2.718281828459045;
}
;
Math$Dart.LN10$named = function(){
  return Math$Dart.LN10$getter().apply(this, arguments);
}
;
Math$Dart.LN10$getter = function(){
  return 2.302585092994046;
}
;
Math$Dart.LN2$named = function(){
  return Math$Dart.LN2$getter().apply(this, arguments);
}
;
Math$Dart.LN2$getter = function(){
  return 0.6931471805599453;
}
;
Math$Dart.LOG2E$named = function(){
  return Math$Dart.LOG2E$getter().apply(this, arguments);
}
;
Math$Dart.LOG2E$getter = function(){
  return 1.4426950408889634;
}
;
Math$Dart.LOG10E$named = function(){
  return Math$Dart.LOG10E$getter().apply(this, arguments);
}
;
Math$Dart.LOG10E$getter = function(){
  return 0.4342944819032518;
}
;
Math$Dart.PI$named = function(){
  return Math$Dart.PI$getter().apply(this, arguments);
}
;
Math$Dart.PI$getter = function(){
  return 3.141592653589793;
}
;
Math$Dart.SQRT1_2$named = function(){
  return Math$Dart.SQRT1_2$getter().apply(this, arguments);
}
;
Math$Dart.SQRT1_2$getter = function(){
  return 0.7071067811865476;
}
;
Math$Dart.SQRT2$named = function(){
  return Math$Dart.SQRT2$getter().apply(this, arguments);
}
;
Math$Dart.SQRT2$getter = function(){
  return 1.4142135623730951;
}
;
Math$Dart.parseInt$member = function(str){
  return MathNatives$Dart.parseInt$member(str);
}
;
Math$Dart.parseInt$named = function($n, $o, str){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return Math$Dart.parseInt$member(str);
}
;
Math$Dart.parseInt$getter = function parseInt$getter(){
  return Math$Dart.parseInt$named;
}
;
Math$Dart.parseDouble$member = function(str){
  return MathNatives$Dart.parseDouble$member(str);
}
;
Math$Dart.parseDouble$named = function($n, $o, str){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return Math$Dart.parseDouble$member(str);
}
;
Math$Dart.parseDouble$getter = function parseDouble$getter(){
  return Math$Dart.parseDouble$named;
}
;
Math$Dart.min$member = function(a, b){
  var c = a.compareTo$named(1, $noargs, b);
  if (EQ$operator(c, 0)) {
    return a;
  }
  if (LT$operator(c, 0)) {
    if (Number.$instanceOf(b) && b.isNaN$named(0, $noargs)) {
      return b;
    }
    return a;
  }
  if (Number.$instanceOf(a) && a.isNaN$named(0, $noargs)) {
    return a;
  }
  return b;
}
;
Math$Dart.min$named = function($n, $o, a, b){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return Math$Dart.min$member(a, b);
}
;
Math$Dart.min$getter = function min$getter(){
  return Math$Dart.min$named;
}
;
Math$Dart.max$member = function(a, b){
  return LT$operator(a.compareTo$named(1, $noargs, b), 0)?b:a;
}
;
Math$Dart.max$named = function($n, $o, a, b){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return Math$Dart.max$member(a, b);
}
;
Math$Dart.max$getter = function max$getter(){
  return Math$Dart.max$named;
}
;
Math$Dart.atan2$member = function(a, b){
  return MathNatives$Dart.atan2$member(a, b);
}
;
Math$Dart.atan2$named = function($n, $o, a, b){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return Math$Dart.atan2$member(a, b);
}
;
Math$Dart.atan2$getter = function atan2$getter(){
  return Math$Dart.atan2$named;
}
;
Math$Dart.pow$member = function(x, exponent){
  return MathNatives$Dart.pow$member(x, exponent);
}
;
Math$Dart.pow$named = function($n, $o, x, exponent){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return Math$Dart.pow$member(x, exponent);
}
;
Math$Dart.pow$getter = function pow$getter(){
  return Math$Dart.pow$named;
}
;
Math$Dart.random$member = function(){
  return MathNatives$Dart.random$member();
}
;
Math$Dart.random$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return Math$Dart.random$member();
}
;
Math$Dart.random$getter = function random$getter(){
  return Math$Dart.random$named;
}
;
Math$Dart.sin$member = function(x){
  return MathNatives$Dart.sin$member(x);
}
;
Math$Dart.sin$named = function($n, $o, x){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return Math$Dart.sin$member(x);
}
;
Math$Dart.sin$getter = function sin$getter(){
  return Math$Dart.sin$named;
}
;
Math$Dart.cos$member = function(x){
  return MathNatives$Dart.cos$member(x);
}
;
Math$Dart.cos$named = function($n, $o, x){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return Math$Dart.cos$member(x);
}
;
Math$Dart.cos$getter = function cos$getter(){
  return Math$Dart.cos$named;
}
;
Math$Dart.tan$member = function(x){
  return MathNatives$Dart.tan$member(x);
}
;
Math$Dart.tan$named = function($n, $o, x){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return Math$Dart.tan$member(x);
}
;
Math$Dart.tan$getter = function tan$getter(){
  return Math$Dart.tan$named;
}
;
Math$Dart.acos$member = function(x){
  return MathNatives$Dart.acos$member(x);
}
;
Math$Dart.acos$named = function($n, $o, x){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return Math$Dart.acos$member(x);
}
;
Math$Dart.acos$getter = function acos$getter(){
  return Math$Dart.acos$named;
}
;
Math$Dart.asin$member = function(x){
  return MathNatives$Dart.asin$member(x);
}
;
Math$Dart.asin$named = function($n, $o, x){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return Math$Dart.asin$member(x);
}
;
Math$Dart.asin$getter = function asin$getter(){
  return Math$Dart.asin$named;
}
;
Math$Dart.atan$member = function(x){
  return MathNatives$Dart.atan$member(x);
}
;
Math$Dart.atan$named = function($n, $o, x){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return Math$Dart.atan$member(x);
}
;
Math$Dart.atan$getter = function atan$getter(){
  return Math$Dart.atan$named;
}
;
Math$Dart.sqrt$member = function(x){
  return MathNatives$Dart.sqrt$member(x);
}
;
Math$Dart.sqrt$named = function($n, $o, x){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return Math$Dart.sqrt$member(x);
}
;
Math$Dart.sqrt$getter = function sqrt$getter(){
  return Math$Dart.sqrt$named;
}
;
Math$Dart.exp$member = function(x){
  return MathNatives$Dart.exp$member(x);
}
;
Math$Dart.exp$named = function($n, $o, x){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return Math$Dart.exp$member(x);
}
;
Math$Dart.exp$getter = function exp$getter(){
  return Math$Dart.exp$named;
}
;
Math$Dart.log$member = function(x){
  return MathNatives$Dart.log$member(x);
}
;
Math$Dart.log$named = function($n, $o, x){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return Math$Dart.log$member(x);
}
;
Math$Dart.log$getter = function log$getter(){
  return Math$Dart.log$named;
}
;
Math$Dart.$Constructor = function(){
  Object.$Constructor.call(this);
}
;
Math$Dart.$Initializer = function(){
  Object.$Initializer.call(this);
}
;
Math$Dart.Math$$Factory = function(){
  var tmp$0 = new Math$Dart;
  tmp$0.$typeInfo = Math$Dart.$lookupRTT();
  Math$Dart.$Initializer.call(tmp$0);
  Math$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
