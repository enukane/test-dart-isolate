function _DOMURLWrappingImplementation$Dart(){
}

_DOMURLWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('_DOMURLWrappingImplementation$Dart'), _DOMURLWrappingImplementation$Dart.$RTTimplements);
}
;
_DOMURLWrappingImplementation$Dart.$RTTimplements = function(rtt){
  _DOMURLWrappingImplementation$Dart.$addTo(rtt);
}
;
_DOMURLWrappingImplementation$Dart.$addTo = function(target){
  var rtt = _DOMURLWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  DOMWrapperBase$Dart.$addTo(target);
  DOMURL$Dart.$addTo(target);
}
;
_DOMURLWrappingImplementation$Dart.prototype.$implements$_DOMURLWrappingImplementation$Dart = 1;
_DOMURLWrappingImplementation$Dart.prototype.$implements$DOMURL$Dart = 1;
_DOMURLWrappingImplementation$Dart.prototype.$implements$DOMWrapperBase$Dart = 1;
_DOMURLWrappingImplementation$Dart.prototype.$implements$DOMType$Dart = 1;
_DOMURLWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(_DOMURLWrappingImplementation$Dart, DOMWrapperBase$Dart);
_DOMURLWrappingImplementation$Dart.$Constructor = function(){
  DOMWrapperBase$Dart.$Constructor.call(this);
}
;
_DOMURLWrappingImplementation$Dart.$Initializer = function(){
  DOMWrapperBase$Dart.$Initializer.call(this);
}
;
_DOMURLWrappingImplementation$Dart._DOMURLWrappingImplementation$$Factory = function(){
  var tmp$0 = new _DOMURLWrappingImplementation$Dart;
  tmp$0.$typeInfo = _DOMURLWrappingImplementation$Dart.$lookupRTT();
  _DOMURLWrappingImplementation$Dart.$Initializer.call(tmp$0);
  _DOMURLWrappingImplementation$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
_DOMURLWrappingImplementation$Dart.create__DOMURLWrappingImplementation$member = function(){
  return _DOMURLWrappingImplementation$Dart._DOMURLWrappingImplementation$$Factory();
}
;
_DOMURLWrappingImplementation$Dart.create__DOMURLWrappingImplementation$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _DOMURLWrappingImplementation$Dart.create__DOMURLWrappingImplementation$member();
}
;
function native__DOMURLWrappingImplementation_create__DOMURLWrappingImplementation(){
  return _DOMURLWrappingImplementation$Dart.create__DOMURLWrappingImplementation$member();
}

_DOMURLWrappingImplementation$Dart.create__DOMURLWrappingImplementation$getter = function create__DOMURLWrappingImplementation$getter(){
  return _DOMURLWrappingImplementation$Dart.create__DOMURLWrappingImplementation$named;
}
;
_DOMURLWrappingImplementation$Dart.prototype.createObjectURL$member = function(blob){
  return _DOMURLWrappingImplementation$Dart._createObjectURL$$member_(this, blob);
}
;
_DOMURLWrappingImplementation$Dart.prototype.createObjectURL$named = function($n, $o, blob){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMURLWrappingImplementation$Dart.prototype.createObjectURL$member.call(this, blob);
}
;
_DOMURLWrappingImplementation$Dart.prototype.createObjectURL$getter = function createObjectURL$getter(){
  return $bind(_DOMURLWrappingImplementation$Dart.prototype.createObjectURL$named, this);
}
;
_DOMURLWrappingImplementation$Dart._createObjectURL$$member_ = function(receiver, blob){
  return native__DOMURLWrappingImplementation__createObjectURL(receiver, blob);
}
;
_DOMURLWrappingImplementation$Dart._createObjectURL$$named_ = function($n, $o, receiver, blob){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DOMURLWrappingImplementation$Dart._createObjectURL$$member_(receiver, blob);
}
;
_DOMURLWrappingImplementation$Dart._createObjectURL$$getter_ = function _createObjectURL$$getter_(){
  return _DOMURLWrappingImplementation$Dart._createObjectURL$$named_;
}
;
_DOMURLWrappingImplementation$Dart.prototype.revokeObjectURL$member = function(url){
  _DOMURLWrappingImplementation$Dart._revokeObjectURL$$member_(this, url);
  return;
}
;
_DOMURLWrappingImplementation$Dart.prototype.revokeObjectURL$named = function($n, $o, url){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMURLWrappingImplementation$Dart.prototype.revokeObjectURL$member.call(this, url);
}
;
_DOMURLWrappingImplementation$Dart.prototype.revokeObjectURL$getter = function revokeObjectURL$getter(){
  return $bind(_DOMURLWrappingImplementation$Dart.prototype.revokeObjectURL$named, this);
}
;
_DOMURLWrappingImplementation$Dart._revokeObjectURL$$member_ = function(receiver, url){
  return native__DOMURLWrappingImplementation__revokeObjectURL(receiver, url);
}
;
_DOMURLWrappingImplementation$Dart._revokeObjectURL$$named_ = function($n, $o, receiver, url){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DOMURLWrappingImplementation$Dart._revokeObjectURL$$member_(receiver, url);
}
;
_DOMURLWrappingImplementation$Dart._revokeObjectURL$$getter_ = function _revokeObjectURL$$getter_(){
  return _DOMURLWrappingImplementation$Dart._revokeObjectURL$$named_;
}
;
_DOMURLWrappingImplementation$Dart.prototype.typeName$named = function(){
  return this.typeName$getter().apply(this, arguments);
}
;
_DOMURLWrappingImplementation$Dart.prototype.typeName$getter = function(){
  return 'DOMURL';
}
;
