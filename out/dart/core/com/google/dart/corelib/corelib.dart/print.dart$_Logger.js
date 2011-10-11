function _Logger$Dart(){
}

_Logger$Dart.$lookupRTT = function(){
  return RTT.create($cls('_Logger$Dart'));
}
;
_Logger$Dart.$addTo = function(target){
  var rtt = _Logger$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
}
;
_Logger$Dart.prototype.$implements$_Logger$Dart = 1;
_Logger$Dart.prototype.$implements$Object$Dart = 1;
_Logger$Dart.print$member = function(arg_0){
  _Logger$Dart._printString$$member_(arg_0 == null?'null':arg_0.toString$named(0, $noargs));
}
;
_Logger$Dart.print$named = function($n, $o, arg){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _Logger$Dart.print$member(arg);
}
;
_Logger$Dart.print$getter = function print$getter(){
  return _Logger$Dart.print$named;
}
;
_Logger$Dart._printString$$member_ = function(str){
  return native__Logger__printString(str);
}
;
_Logger$Dart._printString$$named_ = function($n, $o, str){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _Logger$Dart._printString$$member_(str);
}
;
_Logger$Dart._printString$$getter_ = function _printString$$getter_(){
  return _Logger$Dart._printString$$named_;
}
;
_Logger$Dart.$Constructor = function(){
  Object.$Constructor.call(this);
}
;
_Logger$Dart.$Initializer = function(){
  Object.$Initializer.call(this);
}
;
_Logger$Dart._Logger$$Factory = function(){
  var tmp$0 = new _Logger$Dart;
  tmp$0.$typeInfo = _Logger$Dart.$lookupRTT();
  _Logger$Dart.$Initializer.call(tmp$0);
  _Logger$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
