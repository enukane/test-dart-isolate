function _NotationWrappingImplementation$Dart(){
}

_NotationWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('_NotationWrappingImplementation$Dart'), _NotationWrappingImplementation$Dart.$RTTimplements);
}
;
_NotationWrappingImplementation$Dart.$RTTimplements = function(rtt){
  _NotationWrappingImplementation$Dart.$addTo(rtt);
}
;
_NotationWrappingImplementation$Dart.$addTo = function(target){
  var rtt = _NotationWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  _NodeWrappingImplementation$Dart.$addTo(target);
  Notation$Dart.$addTo(target);
}
;
_NotationWrappingImplementation$Dart.prototype.$implements$_NotationWrappingImplementation$Dart = 1;
_NotationWrappingImplementation$Dart.prototype.$implements$Notation$Dart = 1;
_NotationWrappingImplementation$Dart.prototype.$implements$Node$Dart = 1;
_NotationWrappingImplementation$Dart.prototype.$implements$EventTarget$Dart = 1;
_NotationWrappingImplementation$Dart.prototype.$implements$_NodeWrappingImplementation$Dart = 1;
_NotationWrappingImplementation$Dart.prototype.$implements$DOMWrapperBase$Dart = 1;
_NotationWrappingImplementation$Dart.prototype.$implements$DOMType$Dart = 1;
_NotationWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(_NotationWrappingImplementation$Dart, _NodeWrappingImplementation$Dart);
_NotationWrappingImplementation$Dart.$Constructor = function(){
  _NodeWrappingImplementation$Dart.$Constructor.call(this);
}
;
_NotationWrappingImplementation$Dart.$Initializer = function(){
  _NodeWrappingImplementation$Dart.$Initializer.call(this);
}
;
_NotationWrappingImplementation$Dart._NotationWrappingImplementation$$Factory = function(){
  var tmp$0 = new _NotationWrappingImplementation$Dart;
  tmp$0.$typeInfo = _NotationWrappingImplementation$Dart.$lookupRTT();
  _NotationWrappingImplementation$Dart.$Initializer.call(tmp$0);
  _NotationWrappingImplementation$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
_NotationWrappingImplementation$Dart.create__NotationWrappingImplementation$member = function(){
  return _NotationWrappingImplementation$Dart._NotationWrappingImplementation$$Factory();
}
;
_NotationWrappingImplementation$Dart.create__NotationWrappingImplementation$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _NotationWrappingImplementation$Dart.create__NotationWrappingImplementation$member();
}
;
function native__NotationWrappingImplementation_create__NotationWrappingImplementation(){
  return _NotationWrappingImplementation$Dart.create__NotationWrappingImplementation$member();
}

_NotationWrappingImplementation$Dart.create__NotationWrappingImplementation$getter = function create__NotationWrappingImplementation$getter(){
  return _NotationWrappingImplementation$Dart.create__NotationWrappingImplementation$named;
}
;
_NotationWrappingImplementation$Dart.prototype.publicId$named = function(){
  return this.publicId$getter().apply(this, arguments);
}
;
_NotationWrappingImplementation$Dart.prototype.publicId$getter = function(){
  return _NotationWrappingImplementation$Dart._get__Notation_publicId$$member_(this);
}
;
_NotationWrappingImplementation$Dart._get__Notation_publicId$$member_ = function(_this){
  return native__NotationWrappingImplementation__get__Notation_publicId(_this);
}
;
_NotationWrappingImplementation$Dart._get__Notation_publicId$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _NotationWrappingImplementation$Dart._get__Notation_publicId$$member_(_this);
}
;
_NotationWrappingImplementation$Dart._get__Notation_publicId$$getter_ = function _get__Notation_publicId$$getter_(){
  return _NotationWrappingImplementation$Dart._get__Notation_publicId$$named_;
}
;
_NotationWrappingImplementation$Dart.prototype.systemId$named = function(){
  return this.systemId$getter().apply(this, arguments);
}
;
_NotationWrappingImplementation$Dart.prototype.systemId$getter = function(){
  return _NotationWrappingImplementation$Dart._get__Notation_systemId$$member_(this);
}
;
_NotationWrappingImplementation$Dart._get__Notation_systemId$$member_ = function(_this){
  return native__NotationWrappingImplementation__get__Notation_systemId(_this);
}
;
_NotationWrappingImplementation$Dart._get__Notation_systemId$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _NotationWrappingImplementation$Dart._get__Notation_systemId$$member_(_this);
}
;
_NotationWrappingImplementation$Dart._get__Notation_systemId$$getter_ = function _get__Notation_systemId$$getter_(){
  return _NotationWrappingImplementation$Dart._get__Notation_systemId$$named_;
}
;
_NotationWrappingImplementation$Dart.prototype.typeName$named = function(){
  return this.typeName$getter().apply(this, arguments);
}
;
_NotationWrappingImplementation$Dart.prototype.typeName$getter = function(){
  return 'Notation';
}
;
