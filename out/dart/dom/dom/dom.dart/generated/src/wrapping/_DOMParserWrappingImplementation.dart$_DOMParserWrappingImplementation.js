function _DOMParserWrappingImplementation$Dart(){
}

_DOMParserWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('_DOMParserWrappingImplementation$Dart'), _DOMParserWrappingImplementation$Dart.$RTTimplements);
}
;
_DOMParserWrappingImplementation$Dart.$RTTimplements = function(rtt){
  _DOMParserWrappingImplementation$Dart.$addTo(rtt);
}
;
_DOMParserWrappingImplementation$Dart.$addTo = function(target){
  var rtt = _DOMParserWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  DOMWrapperBase$Dart.$addTo(target);
  DOMParser$Dart.$addTo(target);
}
;
_DOMParserWrappingImplementation$Dart.prototype.$implements$_DOMParserWrappingImplementation$Dart = 1;
_DOMParserWrappingImplementation$Dart.prototype.$implements$DOMParser$Dart = 1;
_DOMParserWrappingImplementation$Dart.prototype.$implements$DOMWrapperBase$Dart = 1;
_DOMParserWrappingImplementation$Dart.prototype.$implements$DOMType$Dart = 1;
_DOMParserWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(_DOMParserWrappingImplementation$Dart, DOMWrapperBase$Dart);
_DOMParserWrappingImplementation$Dart.$Constructor = function(){
  DOMWrapperBase$Dart.$Constructor.call(this);
}
;
_DOMParserWrappingImplementation$Dart.$Initializer = function(){
  DOMWrapperBase$Dart.$Initializer.call(this);
}
;
_DOMParserWrappingImplementation$Dart._DOMParserWrappingImplementation$$Factory = function(){
  var tmp$0 = new _DOMParserWrappingImplementation$Dart;
  tmp$0.$typeInfo = _DOMParserWrappingImplementation$Dart.$lookupRTT();
  _DOMParserWrappingImplementation$Dart.$Initializer.call(tmp$0);
  _DOMParserWrappingImplementation$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
_DOMParserWrappingImplementation$Dart.create__DOMParserWrappingImplementation$member = function(){
  return _DOMParserWrappingImplementation$Dart._DOMParserWrappingImplementation$$Factory();
}
;
_DOMParserWrappingImplementation$Dart.create__DOMParserWrappingImplementation$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _DOMParserWrappingImplementation$Dart.create__DOMParserWrappingImplementation$member();
}
;
function native__DOMParserWrappingImplementation_create__DOMParserWrappingImplementation(){
  return _DOMParserWrappingImplementation$Dart.create__DOMParserWrappingImplementation$member();
}

_DOMParserWrappingImplementation$Dart.create__DOMParserWrappingImplementation$getter = function create__DOMParserWrappingImplementation$getter(){
  return _DOMParserWrappingImplementation$Dart.create__DOMParserWrappingImplementation$named;
}
;
_DOMParserWrappingImplementation$Dart.prototype.parseFromString$member = function(str, contentType){
  return _DOMParserWrappingImplementation$Dart._parseFromString$$member_(this, str, contentType);
}
;
_DOMParserWrappingImplementation$Dart.prototype.parseFromString$named = function($n, $o, str, contentType){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DOMParserWrappingImplementation$Dart.prototype.parseFromString$member.call(this, str, contentType);
}
;
_DOMParserWrappingImplementation$Dart.prototype.parseFromString$getter = function parseFromString$getter(){
  return $bind(_DOMParserWrappingImplementation$Dart.prototype.parseFromString$named, this);
}
;
_DOMParserWrappingImplementation$Dart._parseFromString$$member_ = function(receiver, str, contentType){
  return native__DOMParserWrappingImplementation__parseFromString(receiver, str, contentType);
}
;
_DOMParserWrappingImplementation$Dart._parseFromString$$named_ = function($n, $o, receiver, str, contentType){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return _DOMParserWrappingImplementation$Dart._parseFromString$$member_(receiver, str, contentType);
}
;
_DOMParserWrappingImplementation$Dart._parseFromString$$getter_ = function _parseFromString$$getter_(){
  return _DOMParserWrappingImplementation$Dart._parseFromString$$named_;
}
;
_DOMParserWrappingImplementation$Dart.prototype.typeName$named = function(){
  return this.typeName$getter().apply(this, arguments);
}
;
_DOMParserWrappingImplementation$Dart.prototype.typeName$getter = function(){
  return 'DOMParser';
}
;
