function _DOMPluginArrayWrappingImplementation$Dart(){
}

_DOMPluginArrayWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('_DOMPluginArrayWrappingImplementation$Dart'), _DOMPluginArrayWrappingImplementation$Dart.$RTTimplements);
}
;
_DOMPluginArrayWrappingImplementation$Dart.$RTTimplements = function(rtt){
  _DOMPluginArrayWrappingImplementation$Dart.$addTo(rtt);
}
;
_DOMPluginArrayWrappingImplementation$Dart.$addTo = function(target){
  var rtt = _DOMPluginArrayWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  DOMWrapperBase$Dart.$addTo(target);
  DOMPluginArray$Dart.$addTo(target);
}
;
_DOMPluginArrayWrappingImplementation$Dart.prototype.$implements$_DOMPluginArrayWrappingImplementation$Dart = 1;
_DOMPluginArrayWrappingImplementation$Dart.prototype.$implements$DOMPluginArray$Dart = 1;
_DOMPluginArrayWrappingImplementation$Dart.prototype.$implements$DOMWrapperBase$Dart = 1;
_DOMPluginArrayWrappingImplementation$Dart.prototype.$implements$DOMType$Dart = 1;
_DOMPluginArrayWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(_DOMPluginArrayWrappingImplementation$Dart, DOMWrapperBase$Dart);
_DOMPluginArrayWrappingImplementation$Dart.$Constructor = function(){
  DOMWrapperBase$Dart.$Constructor.call(this);
}
;
_DOMPluginArrayWrappingImplementation$Dart.$Initializer = function(){
  DOMWrapperBase$Dart.$Initializer.call(this);
}
;
_DOMPluginArrayWrappingImplementation$Dart._DOMPluginArrayWrappingImplementation$$Factory = function(){
  var tmp$0 = new _DOMPluginArrayWrappingImplementation$Dart;
  tmp$0.$typeInfo = _DOMPluginArrayWrappingImplementation$Dart.$lookupRTT();
  _DOMPluginArrayWrappingImplementation$Dart.$Initializer.call(tmp$0);
  _DOMPluginArrayWrappingImplementation$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
_DOMPluginArrayWrappingImplementation$Dart.create__DOMPluginArrayWrappingImplementation$member = function(){
  return _DOMPluginArrayWrappingImplementation$Dart._DOMPluginArrayWrappingImplementation$$Factory();
}
;
_DOMPluginArrayWrappingImplementation$Dart.create__DOMPluginArrayWrappingImplementation$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _DOMPluginArrayWrappingImplementation$Dart.create__DOMPluginArrayWrappingImplementation$member();
}
;
function native__DOMPluginArrayWrappingImplementation_create__DOMPluginArrayWrappingImplementation(){
  return _DOMPluginArrayWrappingImplementation$Dart.create__DOMPluginArrayWrappingImplementation$member();
}

_DOMPluginArrayWrappingImplementation$Dart.create__DOMPluginArrayWrappingImplementation$getter = function create__DOMPluginArrayWrappingImplementation$getter(){
  return _DOMPluginArrayWrappingImplementation$Dart.create__DOMPluginArrayWrappingImplementation$named;
}
;
_DOMPluginArrayWrappingImplementation$Dart.prototype.length$named = function(){
  return this.length$getter().apply(this, arguments);
}
;
_DOMPluginArrayWrappingImplementation$Dart.prototype.length$getter = function(){
  return _DOMPluginArrayWrappingImplementation$Dart._get__DOMPluginArray_length$$member_(this);
}
;
_DOMPluginArrayWrappingImplementation$Dart._get__DOMPluginArray_length$$member_ = function(_this){
  return native__DOMPluginArrayWrappingImplementation__get__DOMPluginArray_length(_this);
}
;
_DOMPluginArrayWrappingImplementation$Dart._get__DOMPluginArray_length$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMPluginArrayWrappingImplementation$Dart._get__DOMPluginArray_length$$member_(_this);
}
;
_DOMPluginArrayWrappingImplementation$Dart._get__DOMPluginArray_length$$getter_ = function _get__DOMPluginArray_length$$getter_(){
  return _DOMPluginArrayWrappingImplementation$Dart._get__DOMPluginArray_length$$named_;
}
;
_DOMPluginArrayWrappingImplementation$Dart.prototype.item$member = function(index){
  return _DOMPluginArrayWrappingImplementation$Dart._item$$member_(this, index);
}
;
_DOMPluginArrayWrappingImplementation$Dart.prototype.item$named = function($n, $o, index){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMPluginArrayWrappingImplementation$Dart.prototype.item$member.call(this, index);
}
;
_DOMPluginArrayWrappingImplementation$Dart.prototype.item$getter = function item$getter(){
  return $bind(_DOMPluginArrayWrappingImplementation$Dart.prototype.item$named, this);
}
;
_DOMPluginArrayWrappingImplementation$Dart._item$$member_ = function(receiver, index){
  return native__DOMPluginArrayWrappingImplementation__item(receiver, index);
}
;
_DOMPluginArrayWrappingImplementation$Dart._item$$named_ = function($n, $o, receiver, index){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DOMPluginArrayWrappingImplementation$Dart._item$$member_(receiver, index);
}
;
_DOMPluginArrayWrappingImplementation$Dart._item$$getter_ = function _item$$getter_(){
  return _DOMPluginArrayWrappingImplementation$Dart._item$$named_;
}
;
_DOMPluginArrayWrappingImplementation$Dart.prototype.namedItem$member = function(name_0){
  return _DOMPluginArrayWrappingImplementation$Dart._namedItem$$member_(this, name_0);
}
;
_DOMPluginArrayWrappingImplementation$Dart.prototype.namedItem$named = function($n, $o, name_0){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMPluginArrayWrappingImplementation$Dart.prototype.namedItem$member.call(this, name_0);
}
;
_DOMPluginArrayWrappingImplementation$Dart.prototype.namedItem$getter = function namedItem$getter(){
  return $bind(_DOMPluginArrayWrappingImplementation$Dart.prototype.namedItem$named, this);
}
;
_DOMPluginArrayWrappingImplementation$Dart._namedItem$$member_ = function(receiver, name_0){
  return native__DOMPluginArrayWrappingImplementation__namedItem(receiver, name_0);
}
;
_DOMPluginArrayWrappingImplementation$Dart._namedItem$$named_ = function($n, $o, receiver, name_0){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DOMPluginArrayWrappingImplementation$Dart._namedItem$$member_(receiver, name_0);
}
;
_DOMPluginArrayWrappingImplementation$Dart._namedItem$$getter_ = function _namedItem$$getter_(){
  return _DOMPluginArrayWrappingImplementation$Dart._namedItem$$named_;
}
;
_DOMPluginArrayWrappingImplementation$Dart.prototype.refresh$member = function(reload){
  _DOMPluginArrayWrappingImplementation$Dart._refresh$$member_(this, reload);
  return;
}
;
_DOMPluginArrayWrappingImplementation$Dart.prototype.refresh$named = function($n, $o, reload){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMPluginArrayWrappingImplementation$Dart.prototype.refresh$member.call(this, reload);
}
;
_DOMPluginArrayWrappingImplementation$Dart.prototype.refresh$getter = function refresh$getter(){
  return $bind(_DOMPluginArrayWrappingImplementation$Dart.prototype.refresh$named, this);
}
;
_DOMPluginArrayWrappingImplementation$Dart._refresh$$member_ = function(receiver, reload){
  return native__DOMPluginArrayWrappingImplementation__refresh(receiver, reload);
}
;
_DOMPluginArrayWrappingImplementation$Dart._refresh$$named_ = function($n, $o, receiver, reload){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DOMPluginArrayWrappingImplementation$Dart._refresh$$member_(receiver, reload);
}
;
_DOMPluginArrayWrappingImplementation$Dart._refresh$$getter_ = function _refresh$$getter_(){
  return _DOMPluginArrayWrappingImplementation$Dart._refresh$$named_;
}
;
_DOMPluginArrayWrappingImplementation$Dart.prototype.typeName$named = function(){
  return this.typeName$getter().apply(this, arguments);
}
;
_DOMPluginArrayWrappingImplementation$Dart.prototype.typeName$getter = function(){
  return 'DOMPluginArray';
}
;
