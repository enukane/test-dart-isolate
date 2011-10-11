function _EntityWrappingImplementation$Dart(){
}

_EntityWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('_EntityWrappingImplementation$Dart'), _EntityWrappingImplementation$Dart.$RTTimplements);
}
;
_EntityWrappingImplementation$Dart.$RTTimplements = function(rtt){
  _EntityWrappingImplementation$Dart.$addTo(rtt);
}
;
_EntityWrappingImplementation$Dart.$addTo = function(target){
  var rtt = _EntityWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  _NodeWrappingImplementation$Dart.$addTo(target);
  Entity$Dart.$addTo(target);
}
;
_EntityWrappingImplementation$Dart.prototype.$implements$_EntityWrappingImplementation$Dart = 1;
_EntityWrappingImplementation$Dart.prototype.$implements$Entity$Dart = 1;
_EntityWrappingImplementation$Dart.prototype.$implements$Node$Dart = 1;
_EntityWrappingImplementation$Dart.prototype.$implements$EventTarget$Dart = 1;
_EntityWrappingImplementation$Dart.prototype.$implements$_NodeWrappingImplementation$Dart = 1;
_EntityWrappingImplementation$Dart.prototype.$implements$DOMWrapperBase$Dart = 1;
_EntityWrappingImplementation$Dart.prototype.$implements$DOMType$Dart = 1;
_EntityWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(_EntityWrappingImplementation$Dart, _NodeWrappingImplementation$Dart);
_EntityWrappingImplementation$Dart.$Constructor = function(){
  _NodeWrappingImplementation$Dart.$Constructor.call(this);
}
;
_EntityWrappingImplementation$Dart.$Initializer = function(){
  _NodeWrappingImplementation$Dart.$Initializer.call(this);
}
;
_EntityWrappingImplementation$Dart._EntityWrappingImplementation$$Factory = function(){
  var tmp$0 = new _EntityWrappingImplementation$Dart;
  tmp$0.$typeInfo = _EntityWrappingImplementation$Dart.$lookupRTT();
  _EntityWrappingImplementation$Dart.$Initializer.call(tmp$0);
  _EntityWrappingImplementation$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
_EntityWrappingImplementation$Dart.create__EntityWrappingImplementation$member = function(){
  return _EntityWrappingImplementation$Dart._EntityWrappingImplementation$$Factory();
}
;
_EntityWrappingImplementation$Dart.create__EntityWrappingImplementation$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _EntityWrappingImplementation$Dart.create__EntityWrappingImplementation$member();
}
;
function native__EntityWrappingImplementation_create__EntityWrappingImplementation(){
  return _EntityWrappingImplementation$Dart.create__EntityWrappingImplementation$member();
}

_EntityWrappingImplementation$Dart.create__EntityWrappingImplementation$getter = function create__EntityWrappingImplementation$getter(){
  return _EntityWrappingImplementation$Dart.create__EntityWrappingImplementation$named;
}
;
_EntityWrappingImplementation$Dart.prototype.notationName$named = function(){
  return this.notationName$getter().apply(this, arguments);
}
;
_EntityWrappingImplementation$Dart.prototype.notationName$getter = function(){
  return _EntityWrappingImplementation$Dart._get__Entity_notationName$$member_(this);
}
;
_EntityWrappingImplementation$Dart._get__Entity_notationName$$member_ = function(_this){
  return native__EntityWrappingImplementation__get__Entity_notationName(_this);
}
;
_EntityWrappingImplementation$Dart._get__Entity_notationName$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _EntityWrappingImplementation$Dart._get__Entity_notationName$$member_(_this);
}
;
_EntityWrappingImplementation$Dart._get__Entity_notationName$$getter_ = function _get__Entity_notationName$$getter_(){
  return _EntityWrappingImplementation$Dart._get__Entity_notationName$$named_;
}
;
_EntityWrappingImplementation$Dart.prototype.publicId$named = function(){
  return this.publicId$getter().apply(this, arguments);
}
;
_EntityWrappingImplementation$Dart.prototype.publicId$getter = function(){
  return _EntityWrappingImplementation$Dart._get__Entity_publicId$$member_(this);
}
;
_EntityWrappingImplementation$Dart._get__Entity_publicId$$member_ = function(_this){
  return native__EntityWrappingImplementation__get__Entity_publicId(_this);
}
;
_EntityWrappingImplementation$Dart._get__Entity_publicId$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _EntityWrappingImplementation$Dart._get__Entity_publicId$$member_(_this);
}
;
_EntityWrappingImplementation$Dart._get__Entity_publicId$$getter_ = function _get__Entity_publicId$$getter_(){
  return _EntityWrappingImplementation$Dart._get__Entity_publicId$$named_;
}
;
_EntityWrappingImplementation$Dart.prototype.systemId$named = function(){
  return this.systemId$getter().apply(this, arguments);
}
;
_EntityWrappingImplementation$Dart.prototype.systemId$getter = function(){
  return _EntityWrappingImplementation$Dart._get__Entity_systemId$$member_(this);
}
;
_EntityWrappingImplementation$Dart._get__Entity_systemId$$member_ = function(_this){
  return native__EntityWrappingImplementation__get__Entity_systemId(_this);
}
;
_EntityWrappingImplementation$Dart._get__Entity_systemId$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _EntityWrappingImplementation$Dart._get__Entity_systemId$$member_(_this);
}
;
_EntityWrappingImplementation$Dart._get__Entity_systemId$$getter_ = function _get__Entity_systemId$$getter_(){
  return _EntityWrappingImplementation$Dart._get__Entity_systemId$$named_;
}
;
_EntityWrappingImplementation$Dart.prototype.typeName$named = function(){
  return this.typeName$getter().apply(this, arguments);
}
;
_EntityWrappingImplementation$Dart.prototype.typeName$getter = function(){
  return 'Entity';
}
;
