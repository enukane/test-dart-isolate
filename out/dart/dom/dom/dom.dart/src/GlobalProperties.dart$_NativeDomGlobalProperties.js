function _NativeDomGlobalProperties$Dart(){
}

_NativeDomGlobalProperties$Dart.$lookupRTT = function(){
  return RTT.create($cls('_NativeDomGlobalProperties$Dart'));
}
;
_NativeDomGlobalProperties$Dart.$addTo = function(target){
  var rtt = _NativeDomGlobalProperties$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
}
;
_NativeDomGlobalProperties$Dart.prototype.$implements$_NativeDomGlobalProperties$Dart = 1;
_NativeDomGlobalProperties$Dart.prototype.$implements$Object$Dart = 1;
_NativeDomGlobalProperties$Dart.getWindow$member = function(){
  return native__NativeDomGlobalProperties_getWindow();
}
;
_NativeDomGlobalProperties$Dart.getWindow$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _NativeDomGlobalProperties$Dart.getWindow$member();
}
;
_NativeDomGlobalProperties$Dart.getWindow$getter = function getWindow$getter(){
  return _NativeDomGlobalProperties$Dart.getWindow$named;
}
;
_NativeDomGlobalProperties$Dart.getDocument$member = function(){
  return native__NativeDomGlobalProperties_getDocument();
}
;
_NativeDomGlobalProperties$Dart.getDocument$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _NativeDomGlobalProperties$Dart.getDocument$member();
}
;
_NativeDomGlobalProperties$Dart.getDocument$getter = function getDocument$getter(){
  return _NativeDomGlobalProperties$Dart.getDocument$named;
}
;
_NativeDomGlobalProperties$Dart.$Constructor = function(){
  Object.$Constructor.call(this);
}
;
_NativeDomGlobalProperties$Dart.$Initializer = function(){
  Object.$Initializer.call(this);
}
;
_NativeDomGlobalProperties$Dart._NativeDomGlobalProperties$$Factory = function(){
  var tmp$0 = new _NativeDomGlobalProperties$Dart;
  tmp$0.$typeInfo = _NativeDomGlobalProperties$Dart.$lookupRTT();
  _NativeDomGlobalProperties$Dart.$Initializer.call(tmp$0);
  _NativeDomGlobalProperties$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
