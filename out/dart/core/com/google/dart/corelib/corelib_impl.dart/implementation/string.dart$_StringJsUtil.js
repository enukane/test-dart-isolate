function _StringJsUtil$Dart(){
}

_StringJsUtil$Dart.$lookupRTT = function(){
  return RTT.create($cls('_StringJsUtil$Dart'));
}
;
_StringJsUtil$Dart.$addTo = function(target){
  var rtt = _StringJsUtil$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
}
;
_StringJsUtil$Dart.prototype.$implements$_StringJsUtil$Dart = 1;
_StringJsUtil$Dart.prototype.$implements$Object$Dart = 1;
_StringJsUtil$Dart.toDartString$member = function(o){
  if (o == null) {
    return 'null';
  }
  return o.toString$named(0, $noargs);
}
;
_StringJsUtil$Dart.toDartString$named = function($n, $o, o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _StringJsUtil$Dart.toDartString$member(o);
}
;
function native__StringJsUtil_toDartString(o){
  return _StringJsUtil$Dart.toDartString$member(o);
}

_StringJsUtil$Dart.toDartString$getter = function toDartString$getter(){
  return _StringJsUtil$Dart.toDartString$named;
}
;
_StringJsUtil$Dart.$Constructor = function(){
  Object.$Constructor.call(this);
}
;
_StringJsUtil$Dart.$Initializer = function(){
  Object.$Initializer.call(this);
}
;
_StringJsUtil$Dart._StringJsUtil$$Factory = function(){
  var tmp$0 = new _StringJsUtil$Dart;
  tmp$0.$typeInfo = _StringJsUtil$Dart.$lookupRTT();
  _StringJsUtil$Dart.$Initializer.call(tmp$0);
  _StringJsUtil$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
