function _MessageChannelWrappingImplementation$Dart(){
}

_MessageChannelWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('_MessageChannelWrappingImplementation$Dart'), _MessageChannelWrappingImplementation$Dart.$RTTimplements);
}
;
_MessageChannelWrappingImplementation$Dart.$RTTimplements = function(rtt){
  _MessageChannelWrappingImplementation$Dart.$addTo(rtt);
}
;
_MessageChannelWrappingImplementation$Dart.$addTo = function(target){
  var rtt = _MessageChannelWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  DOMWrapperBase$Dart.$addTo(target);
  MessageChannel$Dart.$addTo(target);
}
;
_MessageChannelWrappingImplementation$Dart.prototype.$implements$_MessageChannelWrappingImplementation$Dart = 1;
_MessageChannelWrappingImplementation$Dart.prototype.$implements$MessageChannel$Dart = 1;
_MessageChannelWrappingImplementation$Dart.prototype.$implements$DOMWrapperBase$Dart = 1;
_MessageChannelWrappingImplementation$Dart.prototype.$implements$DOMType$Dart = 1;
_MessageChannelWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(_MessageChannelWrappingImplementation$Dart, DOMWrapperBase$Dart);
_MessageChannelWrappingImplementation$Dart.$Constructor = function(){
  DOMWrapperBase$Dart.$Constructor.call(this);
}
;
_MessageChannelWrappingImplementation$Dart.$Initializer = function(){
  DOMWrapperBase$Dart.$Initializer.call(this);
}
;
_MessageChannelWrappingImplementation$Dart._MessageChannelWrappingImplementation$$Factory = function(){
  var tmp$0 = new _MessageChannelWrappingImplementation$Dart;
  tmp$0.$typeInfo = _MessageChannelWrappingImplementation$Dart.$lookupRTT();
  _MessageChannelWrappingImplementation$Dart.$Initializer.call(tmp$0);
  _MessageChannelWrappingImplementation$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
_MessageChannelWrappingImplementation$Dart.create__MessageChannelWrappingImplementation$member = function(){
  return _MessageChannelWrappingImplementation$Dart._MessageChannelWrappingImplementation$$Factory();
}
;
_MessageChannelWrappingImplementation$Dart.create__MessageChannelWrappingImplementation$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _MessageChannelWrappingImplementation$Dart.create__MessageChannelWrappingImplementation$member();
}
;
function native__MessageChannelWrappingImplementation_create__MessageChannelWrappingImplementation(){
  return _MessageChannelWrappingImplementation$Dart.create__MessageChannelWrappingImplementation$member();
}

_MessageChannelWrappingImplementation$Dart.create__MessageChannelWrappingImplementation$getter = function create__MessageChannelWrappingImplementation$getter(){
  return _MessageChannelWrappingImplementation$Dart.create__MessageChannelWrappingImplementation$named;
}
;
_MessageChannelWrappingImplementation$Dart.prototype.port1$named = function(){
  return this.port1$getter().apply(this, arguments);
}
;
_MessageChannelWrappingImplementation$Dart.prototype.port1$getter = function(){
  return _MessageChannelWrappingImplementation$Dart._get__MessageChannel_port1$$member_(this);
}
;
_MessageChannelWrappingImplementation$Dart._get__MessageChannel_port1$$member_ = function(_this){
  return native__MessageChannelWrappingImplementation__get__MessageChannel_port1(_this);
}
;
_MessageChannelWrappingImplementation$Dart._get__MessageChannel_port1$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _MessageChannelWrappingImplementation$Dart._get__MessageChannel_port1$$member_(_this);
}
;
_MessageChannelWrappingImplementation$Dart._get__MessageChannel_port1$$getter_ = function _get__MessageChannel_port1$$getter_(){
  return _MessageChannelWrappingImplementation$Dart._get__MessageChannel_port1$$named_;
}
;
_MessageChannelWrappingImplementation$Dart.prototype.port2$named = function(){
  return this.port2$getter().apply(this, arguments);
}
;
_MessageChannelWrappingImplementation$Dart.prototype.port2$getter = function(){
  return _MessageChannelWrappingImplementation$Dart._get__MessageChannel_port2$$member_(this);
}
;
_MessageChannelWrappingImplementation$Dart._get__MessageChannel_port2$$member_ = function(_this){
  return native__MessageChannelWrappingImplementation__get__MessageChannel_port2(_this);
}
;
_MessageChannelWrappingImplementation$Dart._get__MessageChannel_port2$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _MessageChannelWrappingImplementation$Dart._get__MessageChannel_port2$$member_(_this);
}
;
_MessageChannelWrappingImplementation$Dart._get__MessageChannel_port2$$getter_ = function _get__MessageChannel_port2$$getter_(){
  return _MessageChannelWrappingImplementation$Dart._get__MessageChannel_port2$$named_;
}
;
_MessageChannelWrappingImplementation$Dart.prototype.typeName$named = function(){
  return this.typeName$getter().apply(this, arguments);
}
;
_MessageChannelWrappingImplementation$Dart.prototype.typeName$getter = function(){
  return 'MessageChannel';
}
;
