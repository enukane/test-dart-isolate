function _LocalMediaStreamWrappingImplementation$Dart(){
}

_LocalMediaStreamWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('_LocalMediaStreamWrappingImplementation$Dart'), _LocalMediaStreamWrappingImplementation$Dart.$RTTimplements);
}
;
_LocalMediaStreamWrappingImplementation$Dart.$RTTimplements = function(rtt){
  _LocalMediaStreamWrappingImplementation$Dart.$addTo(rtt);
}
;
_LocalMediaStreamWrappingImplementation$Dart.$addTo = function(target){
  var rtt = _LocalMediaStreamWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  _MediaStreamWrappingImplementation$Dart.$addTo(target);
  LocalMediaStream$Dart.$addTo(target);
}
;
_LocalMediaStreamWrappingImplementation$Dart.prototype.$implements$_LocalMediaStreamWrappingImplementation$Dart = 1;
_LocalMediaStreamWrappingImplementation$Dart.prototype.$implements$LocalMediaStream$Dart = 1;
_LocalMediaStreamWrappingImplementation$Dart.prototype.$implements$MediaStream$Dart = 1;
_LocalMediaStreamWrappingImplementation$Dart.prototype.$implements$_MediaStreamWrappingImplementation$Dart = 1;
_LocalMediaStreamWrappingImplementation$Dart.prototype.$implements$DOMWrapperBase$Dart = 1;
_LocalMediaStreamWrappingImplementation$Dart.prototype.$implements$DOMType$Dart = 1;
_LocalMediaStreamWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(_LocalMediaStreamWrappingImplementation$Dart, _MediaStreamWrappingImplementation$Dart);
_LocalMediaStreamWrappingImplementation$Dart.$Constructor = function(){
  _MediaStreamWrappingImplementation$Dart.$Constructor.call(this);
}
;
_LocalMediaStreamWrappingImplementation$Dart.$Initializer = function(){
  _MediaStreamWrappingImplementation$Dart.$Initializer.call(this);
}
;
_LocalMediaStreamWrappingImplementation$Dart._LocalMediaStreamWrappingImplementation$$Factory = function(){
  var tmp$0 = new _LocalMediaStreamWrappingImplementation$Dart;
  tmp$0.$typeInfo = _LocalMediaStreamWrappingImplementation$Dart.$lookupRTT();
  _LocalMediaStreamWrappingImplementation$Dart.$Initializer.call(tmp$0);
  _LocalMediaStreamWrappingImplementation$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
_LocalMediaStreamWrappingImplementation$Dart.create__LocalMediaStreamWrappingImplementation$member = function(){
  return _LocalMediaStreamWrappingImplementation$Dart._LocalMediaStreamWrappingImplementation$$Factory();
}
;
_LocalMediaStreamWrappingImplementation$Dart.create__LocalMediaStreamWrappingImplementation$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _LocalMediaStreamWrappingImplementation$Dart.create__LocalMediaStreamWrappingImplementation$member();
}
;
function native__LocalMediaStreamWrappingImplementation_create__LocalMediaStreamWrappingImplementation(){
  return _LocalMediaStreamWrappingImplementation$Dart.create__LocalMediaStreamWrappingImplementation$member();
}

_LocalMediaStreamWrappingImplementation$Dart.create__LocalMediaStreamWrappingImplementation$getter = function create__LocalMediaStreamWrappingImplementation$getter(){
  return _LocalMediaStreamWrappingImplementation$Dart.create__LocalMediaStreamWrappingImplementation$named;
}
;
_LocalMediaStreamWrappingImplementation$Dart.prototype.stop$member = function(){
  _LocalMediaStreamWrappingImplementation$Dart._stop$$member_(this);
  return;
}
;
_LocalMediaStreamWrappingImplementation$Dart.prototype.stop$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _LocalMediaStreamWrappingImplementation$Dart.prototype.stop$member.call(this);
}
;
_LocalMediaStreamWrappingImplementation$Dart.prototype.stop$getter = function stop$getter(){
  return $bind(_LocalMediaStreamWrappingImplementation$Dart.prototype.stop$named, this);
}
;
_LocalMediaStreamWrappingImplementation$Dart._stop$$member_ = function(receiver){
  return native__LocalMediaStreamWrappingImplementation__stop(receiver);
}
;
_LocalMediaStreamWrappingImplementation$Dart._stop$$named_ = function($n, $o, receiver){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _LocalMediaStreamWrappingImplementation$Dart._stop$$member_(receiver);
}
;
_LocalMediaStreamWrappingImplementation$Dart._stop$$getter_ = function _stop$$getter_(){
  return _LocalMediaStreamWrappingImplementation$Dart._stop$$named_;
}
;
_LocalMediaStreamWrappingImplementation$Dart.prototype.typeName$named = function(){
  return this.typeName$getter().apply(this, arguments);
}
;
_LocalMediaStreamWrappingImplementation$Dart.prototype.typeName$getter = function(){
  return 'LocalMediaStream';
}
;
