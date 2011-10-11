Number.$lookupRTT = function(){
  return RTT.create($cls('Number'), Number.$RTTimplements);
}
;
Number.$RTTimplements = function(rtt){
  Number.$addTo(rtt);
}
;
Number.$addTo = function(target){
  var rtt = Number.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  int$Dart.$addTo(target);
  double$Dart.$addTo(target);
}
;
Number.prototype.$implements$NumberImplementation$Dart = 1;
Number.prototype.$implements$int$Dart = 1;
Number.prototype.$implements$num$Dart = 1;
Number.prototype.$implements$Comparable$Dart = 1;
Number.prototype.$implements$Hashable$Dart = 1;
Number.prototype.$implements$double$Dart = 1;
Number.prototype.$implements$Object$Dart = 1;
Number.prototype.ADD$operator = function(other){
  return native_NumberImplementation_ADD.call(this, other);
}
;
Number.prototype.SUB$operator = function(other){
  return native_NumberImplementation_SUB.call(this, other);
}
;
Number.prototype.MUL$operator = function(other){
  return native_NumberImplementation_MUL.call(this, other);
}
;
Number.prototype.DIV$operator = function(other){
  return native_NumberImplementation_DIV.call(this, other);
}
;
Number.prototype.TRUNC$operator = function(other){
  return native_NumberImplementation_TRUNC.call(this, other);
}
;
Number.prototype.MOD$operator = function(shiftAmount){
  return native_NumberImplementation_MOD.call(this, shiftAmount);
}
;
Number.prototype.negate$operator = function(){
  return native_NumberImplementation_negate.call(this);
}
;
Number.prototype.BIT_OR$operator = function(other){
  return native_NumberImplementation_BIT_OR.call(this, other);
}
;
Number.prototype.BIT_AND$operator = function(other){
  return native_NumberImplementation_BIT_AND.call(this, other);
}
;
Number.prototype.BIT_XOR$operator = function(other){
  return native_NumberImplementation_BIT_XOR.call(this, other);
}
;
Number.prototype.SHL$operator = function(shiftAmount){
  return native_NumberImplementation_SHL.call(this, shiftAmount);
}
;
Number.prototype.SAR$operator = function(shiftAmount){
  return native_NumberImplementation_SAR.call(this, shiftAmount);
}
;
Number.prototype.BIT_NOT$operator = function(){
  return native_NumberImplementation_BIT_NOT.call(this);
}
;
Number.prototype.EQ$operator = function(other){
  return native_NumberImplementation_EQ.call(this, other);
}
;
Number.prototype.LT$operator = function(other){
  return native_NumberImplementation_LT.call(this, other);
}
;
Number.prototype.LTE$operator = function(other){
  return native_NumberImplementation_LTE.call(this, other);
}
;
Number.prototype.GT$operator = function(other){
  return native_NumberImplementation_GT.call(this, other);
}
;
Number.prototype.GTE$operator = function(other){
  return native_NumberImplementation_GTE.call(this, other);
}
;
Number.prototype.remainder$member = function(other){
  return native_NumberImplementation_remainder.call(this, other);
}
;
Number.prototype.remainder$named = function($n, $o, other){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return Number.prototype.remainder$member.call(this, other);
}
;
Number.prototype.remainder$getter = function remainder$getter(){
  return $bind(Number.prototype.remainder$named, this);
}
;
Number.prototype.abs$member = function(){
  return native_NumberImplementation_abs.call(this);
}
;
Number.prototype.abs$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return Number.prototype.abs$member.call(this);
}
;
Number.prototype.abs$getter = function abs$getter(){
  return $bind(Number.prototype.abs$named, this);
}
;
Number.prototype.round$member = function(){
  return native_NumberImplementation_round.call(this);
}
;
Number.prototype.round$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return Number.prototype.round$member.call(this);
}
;
Number.prototype.round$getter = function round$getter(){
  return $bind(Number.prototype.round$named, this);
}
;
Number.prototype.floor$member = function(){
  return native_NumberImplementation_floor.call(this);
}
;
Number.prototype.floor$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return Number.prototype.floor$member.call(this);
}
;
Number.prototype.floor$getter = function floor$getter(){
  return $bind(Number.prototype.floor$named, this);
}
;
Number.prototype.ceil$member = function(){
  return native_NumberImplementation_ceil.call(this);
}
;
Number.prototype.ceil$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return Number.prototype.ceil$member.call(this);
}
;
Number.prototype.ceil$getter = function ceil$getter(){
  return $bind(Number.prototype.ceil$named, this);
}
;
Number.prototype.truncate$member = function(){
  return native_NumberImplementation_truncate.call(this);
}
;
Number.prototype.truncate$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return Number.prototype.truncate$member.call(this);
}
;
Number.prototype.truncate$getter = function truncate$getter(){
  return $bind(Number.prototype.truncate$named, this);
}
;
Number.prototype.compareTo$member = function(other){
  return SUB$operator(this, other);
}
;
Number.prototype.compareTo$named = function($n, $o, other){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return Number.prototype.compareTo$member.call(this, other);
}
;
Number.prototype.compareTo$getter = function compareTo$getter(){
  return $bind(Number.prototype.compareTo$named, this);
}
;
Number.prototype.isNegative$member = function(){
  return native_NumberImplementation_isNegative.call(this);
}
;
Number.prototype.isNegative$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return Number.prototype.isNegative$member.call(this);
}
;
Number.prototype.isNegative$getter = function isNegative$getter(){
  return $bind(Number.prototype.isNegative$named, this);
}
;
Number.prototype.isEven$member = function(){
  return native_NumberImplementation_isEven.call(this);
}
;
Number.prototype.isEven$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return Number.prototype.isEven$member.call(this);
}
;
Number.prototype.isEven$getter = function isEven$getter(){
  return $bind(Number.prototype.isEven$named, this);
}
;
Number.prototype.isOdd$member = function(){
  return native_NumberImplementation_isOdd.call(this);
}
;
Number.prototype.isOdd$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return Number.prototype.isOdd$member.call(this);
}
;
Number.prototype.isOdd$getter = function isOdd$getter(){
  return $bind(Number.prototype.isOdd$named, this);
}
;
Number.prototype.isNaN$member = function(){
  return native_NumberImplementation_isNaN.call(this);
}
;
Number.prototype.isNaN$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return Number.prototype.isNaN$member.call(this);
}
;
Number.prototype.isNaN$getter = function isNaN$getter(){
  return $bind(Number.prototype.isNaN$named, this);
}
;
Number.prototype.isInfinite$member = function(){
  return native_NumberImplementation_isInfinite.call(this);
}
;
Number.prototype.isInfinite$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return Number.prototype.isInfinite$member.call(this);
}
;
Number.prototype.isInfinite$getter = function isInfinite$getter(){
  return $bind(Number.prototype.isInfinite$named, this);
}
;
Number.prototype.toInt$member = function(){
  if (this.isNaN$member()) {
    $Dart$ThrowException(BadNumberFormatException$Dart.BadNumberFormatException$$Factory('NaN'));
  }
  if (this.isInfinite$member()) {
    $Dart$ThrowException(BadNumberFormatException$Dart.BadNumberFormatException$$Factory('Infinity'));
  }
  var truncated = this.truncate$member();
  if (EQ$operator(truncated, negate$operator(0))) {
    return 0;
  }
  return truncated;
}
;
Number.prototype.toInt$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return Number.prototype.toInt$member.call(this);
}
;
Number.prototype.toInt$getter = function toInt$getter(){
  return $bind(Number.prototype.toInt$named, this);
}
;
Number.prototype.toDouble$member = function(){
  return this;
}
;
Number.prototype.toDouble$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return Number.prototype.toDouble$member.call(this);
}
;
Number.prototype.toDouble$getter = function toDouble$getter(){
  return $bind(Number.prototype.toDouble$named, this);
}
;
Number.prototype.toString$member = function(){
  return native_NumberImplementation_toString.call(this);
}
;
Number.prototype.toString$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return Number.prototype.toString$member.call(this);
}
;
Number.prototype.toString$getter = function toString$getter(){
  return $bind(Number.prototype.toString$named, this);
}
;
Number.prototype.toStringAsFixed$member = function(fractionDigits){
  return native_NumberImplementation_toStringAsFixed.call(this, fractionDigits);
}
;
Number.prototype.toStringAsFixed$named = function($n, $o, fractionDigits){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return Number.prototype.toStringAsFixed$member.call(this, fractionDigits);
}
;
Number.prototype.toStringAsFixed$getter = function toStringAsFixed$getter(){
  return $bind(Number.prototype.toStringAsFixed$named, this);
}
;
Number.prototype.toStringAsExponential$member = function(fractionDigits){
  return native_NumberImplementation_toStringAsExponential.call(this, fractionDigits);
}
;
Number.prototype.toStringAsExponential$named = function($n, $o, fractionDigits){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return Number.prototype.toStringAsExponential$member.call(this, fractionDigits);
}
;
Number.prototype.toStringAsExponential$getter = function toStringAsExponential$getter(){
  return $bind(Number.prototype.toStringAsExponential$named, this);
}
;
Number.prototype.toStringAsPrecision$member = function(precision){
  return native_NumberImplementation_toStringAsPrecision.call(this, precision);
}
;
Number.prototype.toStringAsPrecision$named = function($n, $o, precision){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return Number.prototype.toStringAsPrecision$member.call(this, precision);
}
;
Number.prototype.toStringAsPrecision$getter = function toStringAsPrecision$getter(){
  return $bind(Number.prototype.toStringAsPrecision$named, this);
}
;
Number.prototype.toRadixString$member = function(radix){
  return native_NumberImplementation_toRadixString.call(this, radix);
}
;
Number.prototype.toRadixString$named = function($n, $o, radix){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return Number.prototype.toRadixString$member.call(this, radix);
}
;
Number.prototype.toRadixString$getter = function toRadixString$getter(){
  return $bind(Number.prototype.toRadixString$named, this);
}
;
Number.prototype.hashCode$member = function(){
  return native_NumberImplementation_hashCode.call(this);
}
;
Number.prototype.hashCode$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return Number.prototype.hashCode$member.call(this);
}
;
Number.prototype.hashCode$getter = function hashCode$getter(){
  return $bind(Number.prototype.hashCode$named, this);
}
;
Number.$Constructor = function(){
  Object.$Constructor.call(this);
}
;
Number.$Initializer = function(){
  Object.$Initializer.call(this);
}
;
Number.NumberImplementation$$Factory = function(){
  var tmp$0 = new Number;
  tmp$0.$typeInfo = Number.$lookupRTT();
  Number.$Initializer.call(tmp$0);
  Number.$Constructor.call(tmp$0);
  return tmp$0;
}
;
