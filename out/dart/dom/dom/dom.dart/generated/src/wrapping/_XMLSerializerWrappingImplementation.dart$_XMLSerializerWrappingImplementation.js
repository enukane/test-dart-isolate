function _XMLSerializerWrappingImplementation$Dart(){
}

_XMLSerializerWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('_XMLSerializerWrappingImplementation$Dart'), _XMLSerializerWrappingImplementation$Dart.$RTTimplements);
}
;
_XMLSerializerWrappingImplementation$Dart.$RTTimplements = function(rtt){
  _XMLSerializerWrappingImplementation$Dart.$addTo(rtt);
}
;
_XMLSerializerWrappingImplementation$Dart.$addTo = function(target){
  var rtt = _XMLSerializerWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  DOMWrapperBase$Dart.$addTo(target);
  XMLSerializer$Dart.$addTo(target);
}
;
_XMLSerializerWrappingImplementation$Dart.prototype.$implements$_XMLSerializerWrappingImplementation$Dart = 1;
_XMLSerializerWrappingImplementation$Dart.prototype.$implements$XMLSerializer$Dart = 1;
_XMLSerializerWrappingImplementation$Dart.prototype.$implements$DOMWrapperBase$Dart = 1;
_XMLSerializerWrappingImplementation$Dart.prototype.$implements$DOMType$Dart = 1;
_XMLSerializerWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(_XMLSerializerWrappingImplementation$Dart, DOMWrapperBase$Dart);
_XMLSerializerWrappingImplementation$Dart.$Constructor = function(){
  DOMWrapperBase$Dart.$Constructor.call(this);
}
;
_XMLSerializerWrappingImplementation$Dart.$Initializer = function(){
  DOMWrapperBase$Dart.$Initializer.call(this);
}
;
_XMLSerializerWrappingImplementation$Dart._XMLSerializerWrappingImplementation$$Factory = function(){
  var tmp$0 = new _XMLSerializerWrappingImplementation$Dart;
  tmp$0.$typeInfo = _XMLSerializerWrappingImplementation$Dart.$lookupRTT();
  _XMLSerializerWrappingImplementation$Dart.$Initializer.call(tmp$0);
  _XMLSerializerWrappingImplementation$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
_XMLSerializerWrappingImplementation$Dart.create__XMLSerializerWrappingImplementation$member = function(){
  return _XMLSerializerWrappingImplementation$Dart._XMLSerializerWrappingImplementation$$Factory();
}
;
_XMLSerializerWrappingImplementation$Dart.create__XMLSerializerWrappingImplementation$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _XMLSerializerWrappingImplementation$Dart.create__XMLSerializerWrappingImplementation$member();
}
;
function native__XMLSerializerWrappingImplementation_create__XMLSerializerWrappingImplementation(){
  return _XMLSerializerWrappingImplementation$Dart.create__XMLSerializerWrappingImplementation$member();
}

_XMLSerializerWrappingImplementation$Dart.create__XMLSerializerWrappingImplementation$getter = function create__XMLSerializerWrappingImplementation$getter(){
  return _XMLSerializerWrappingImplementation$Dart.create__XMLSerializerWrappingImplementation$named;
}
;
_XMLSerializerWrappingImplementation$Dart.prototype.serializeToString$member = function(node){
  return _XMLSerializerWrappingImplementation$Dart._serializeToString$$member_(this, node);
}
;
_XMLSerializerWrappingImplementation$Dart.prototype.serializeToString$named = function($n, $o, node){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _XMLSerializerWrappingImplementation$Dart.prototype.serializeToString$member.call(this, node);
}
;
_XMLSerializerWrappingImplementation$Dart.prototype.serializeToString$getter = function serializeToString$getter(){
  return $bind(_XMLSerializerWrappingImplementation$Dart.prototype.serializeToString$named, this);
}
;
_XMLSerializerWrappingImplementation$Dart._serializeToString$$member_ = function(receiver, node){
  return native__XMLSerializerWrappingImplementation__serializeToString(receiver, node);
}
;
_XMLSerializerWrappingImplementation$Dart._serializeToString$$named_ = function($n, $o, receiver, node){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _XMLSerializerWrappingImplementation$Dart._serializeToString$$member_(receiver, node);
}
;
_XMLSerializerWrappingImplementation$Dart._serializeToString$$getter_ = function _serializeToString$$getter_(){
  return _XMLSerializerWrappingImplementation$Dart._serializeToString$$named_;
}
;
_XMLSerializerWrappingImplementation$Dart.prototype.typeName$named = function(){
  return this.typeName$getter().apply(this, arguments);
}
;
_XMLSerializerWrappingImplementation$Dart.prototype.typeName$getter = function(){
  return 'XMLSerializer';
}
;
