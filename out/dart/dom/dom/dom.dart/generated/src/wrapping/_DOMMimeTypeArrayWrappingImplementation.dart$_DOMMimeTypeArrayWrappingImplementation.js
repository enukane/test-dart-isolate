function _DOMMimeTypeArrayWrappingImplementation$Dart(){
}

_DOMMimeTypeArrayWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('_DOMMimeTypeArrayWrappingImplementation$Dart'), _DOMMimeTypeArrayWrappingImplementation$Dart.$RTTimplements);
}
;
_DOMMimeTypeArrayWrappingImplementation$Dart.$RTTimplements = function(rtt){
  _DOMMimeTypeArrayWrappingImplementation$Dart.$addTo(rtt);
}
;
_DOMMimeTypeArrayWrappingImplementation$Dart.$addTo = function(target){
  var rtt = _DOMMimeTypeArrayWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  DOMWrapperBase$Dart.$addTo(target);
  DOMMimeTypeArray$Dart.$addTo(target);
}
;
_DOMMimeTypeArrayWrappingImplementation$Dart.prototype.$implements$_DOMMimeTypeArrayWrappingImplementation$Dart = 1;
_DOMMimeTypeArrayWrappingImplementation$Dart.prototype.$implements$DOMMimeTypeArray$Dart = 1;
_DOMMimeTypeArrayWrappingImplementation$Dart.prototype.$implements$DOMWrapperBase$Dart = 1;
_DOMMimeTypeArrayWrappingImplementation$Dart.prototype.$implements$DOMType$Dart = 1;
_DOMMimeTypeArrayWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(_DOMMimeTypeArrayWrappingImplementation$Dart, DOMWrapperBase$Dart);
_DOMMimeTypeArrayWrappingImplementation$Dart.$Constructor = function(){
  DOMWrapperBase$Dart.$Constructor.call(this);
}
;
_DOMMimeTypeArrayWrappingImplementation$Dart.$Initializer = function(){
  DOMWrapperBase$Dart.$Initializer.call(this);
}
;
_DOMMimeTypeArrayWrappingImplementation$Dart._DOMMimeTypeArrayWrappingImplementation$$Factory = function(){
  var tmp$0 = new _DOMMimeTypeArrayWrappingImplementation$Dart;
  tmp$0.$typeInfo = _DOMMimeTypeArrayWrappingImplementation$Dart.$lookupRTT();
  _DOMMimeTypeArrayWrappingImplementation$Dart.$Initializer.call(tmp$0);
  _DOMMimeTypeArrayWrappingImplementation$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
_DOMMimeTypeArrayWrappingImplementation$Dart.create__DOMMimeTypeArrayWrappingImplementation$member = function(){
  return _DOMMimeTypeArrayWrappingImplementation$Dart._DOMMimeTypeArrayWrappingImplementation$$Factory();
}
;
_DOMMimeTypeArrayWrappingImplementation$Dart.create__DOMMimeTypeArrayWrappingImplementation$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _DOMMimeTypeArrayWrappingImplementation$Dart.create__DOMMimeTypeArrayWrappingImplementation$member();
}
;
function native__DOMMimeTypeArrayWrappingImplementation_create__DOMMimeTypeArrayWrappingImplementation(){
  return _DOMMimeTypeArrayWrappingImplementation$Dart.create__DOMMimeTypeArrayWrappingImplementation$member();
}

_DOMMimeTypeArrayWrappingImplementation$Dart.create__DOMMimeTypeArrayWrappingImplementation$getter = function create__DOMMimeTypeArrayWrappingImplementation$getter(){
  return _DOMMimeTypeArrayWrappingImplementation$Dart.create__DOMMimeTypeArrayWrappingImplementation$named;
}
;
_DOMMimeTypeArrayWrappingImplementation$Dart.prototype.length$named = function(){
  return this.length$getter().apply(this, arguments);
}
;
_DOMMimeTypeArrayWrappingImplementation$Dart.prototype.length$getter = function(){
  return _DOMMimeTypeArrayWrappingImplementation$Dart._get__DOMMimeTypeArray_length$$member_(this);
}
;
_DOMMimeTypeArrayWrappingImplementation$Dart._get__DOMMimeTypeArray_length$$member_ = function(_this){
  return native__DOMMimeTypeArrayWrappingImplementation__get__DOMMimeTypeArray_length(_this);
}
;
_DOMMimeTypeArrayWrappingImplementation$Dart._get__DOMMimeTypeArray_length$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMMimeTypeArrayWrappingImplementation$Dart._get__DOMMimeTypeArray_length$$member_(_this);
}
;
_DOMMimeTypeArrayWrappingImplementation$Dart._get__DOMMimeTypeArray_length$$getter_ = function _get__DOMMimeTypeArray_length$$getter_(){
  return _DOMMimeTypeArrayWrappingImplementation$Dart._get__DOMMimeTypeArray_length$$named_;
}
;
_DOMMimeTypeArrayWrappingImplementation$Dart.prototype.item$member = function(index){
  return _DOMMimeTypeArrayWrappingImplementation$Dart._item$$member_(this, index);
}
;
_DOMMimeTypeArrayWrappingImplementation$Dart.prototype.item$named = function($n, $o, index){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMMimeTypeArrayWrappingImplementation$Dart.prototype.item$member.call(this, index);
}
;
_DOMMimeTypeArrayWrappingImplementation$Dart.prototype.item$getter = function item$getter(){
  return $bind(_DOMMimeTypeArrayWrappingImplementation$Dart.prototype.item$named, this);
}
;
_DOMMimeTypeArrayWrappingImplementation$Dart._item$$member_ = function(receiver, index){
  return native__DOMMimeTypeArrayWrappingImplementation__item(receiver, index);
}
;
_DOMMimeTypeArrayWrappingImplementation$Dart._item$$named_ = function($n, $o, receiver, index){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DOMMimeTypeArrayWrappingImplementation$Dart._item$$member_(receiver, index);
}
;
_DOMMimeTypeArrayWrappingImplementation$Dart._item$$getter_ = function _item$$getter_(){
  return _DOMMimeTypeArrayWrappingImplementation$Dart._item$$named_;
}
;
_DOMMimeTypeArrayWrappingImplementation$Dart.prototype.namedItem$member = function(name_0){
  return _DOMMimeTypeArrayWrappingImplementation$Dart._namedItem$$member_(this, name_0);
}
;
_DOMMimeTypeArrayWrappingImplementation$Dart.prototype.namedItem$named = function($n, $o, name_0){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMMimeTypeArrayWrappingImplementation$Dart.prototype.namedItem$member.call(this, name_0);
}
;
_DOMMimeTypeArrayWrappingImplementation$Dart.prototype.namedItem$getter = function namedItem$getter(){
  return $bind(_DOMMimeTypeArrayWrappingImplementation$Dart.prototype.namedItem$named, this);
}
;
_DOMMimeTypeArrayWrappingImplementation$Dart._namedItem$$member_ = function(receiver, name_0){
  return native__DOMMimeTypeArrayWrappingImplementation__namedItem(receiver, name_0);
}
;
_DOMMimeTypeArrayWrappingImplementation$Dart._namedItem$$named_ = function($n, $o, receiver, name_0){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DOMMimeTypeArrayWrappingImplementation$Dart._namedItem$$member_(receiver, name_0);
}
;
_DOMMimeTypeArrayWrappingImplementation$Dart._namedItem$$getter_ = function _namedItem$$getter_(){
  return _DOMMimeTypeArrayWrappingImplementation$Dart._namedItem$$named_;
}
;
_DOMMimeTypeArrayWrappingImplementation$Dart.prototype.typeName$named = function(){
  return this.typeName$getter().apply(this, arguments);
}
;
_DOMMimeTypeArrayWrappingImplementation$Dart.prototype.typeName$getter = function(){
  return 'DOMMimeTypeArray';
}
;
