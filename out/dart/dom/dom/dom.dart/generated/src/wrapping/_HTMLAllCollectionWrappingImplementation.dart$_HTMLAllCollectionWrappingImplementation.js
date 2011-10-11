function _HTMLAllCollectionWrappingImplementation$Dart(){
}

_HTMLAllCollectionWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('_HTMLAllCollectionWrappingImplementation$Dart'), _HTMLAllCollectionWrappingImplementation$Dart.$RTTimplements);
}
;
_HTMLAllCollectionWrappingImplementation$Dart.$RTTimplements = function(rtt){
  _HTMLAllCollectionWrappingImplementation$Dart.$addTo(rtt);
}
;
_HTMLAllCollectionWrappingImplementation$Dart.$addTo = function(target){
  var rtt = _HTMLAllCollectionWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  DOMWrapperBase$Dart.$addTo(target);
  HTMLAllCollection$Dart.$addTo(target);
}
;
_HTMLAllCollectionWrappingImplementation$Dart.prototype.$implements$_HTMLAllCollectionWrappingImplementation$Dart = 1;
_HTMLAllCollectionWrappingImplementation$Dart.prototype.$implements$HTMLAllCollection$Dart = 1;
_HTMLAllCollectionWrappingImplementation$Dart.prototype.$implements$DOMWrapperBase$Dart = 1;
_HTMLAllCollectionWrappingImplementation$Dart.prototype.$implements$DOMType$Dart = 1;
_HTMLAllCollectionWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(_HTMLAllCollectionWrappingImplementation$Dart, DOMWrapperBase$Dart);
_HTMLAllCollectionWrappingImplementation$Dart.$Constructor = function(){
  DOMWrapperBase$Dart.$Constructor.call(this);
}
;
_HTMLAllCollectionWrappingImplementation$Dart.$Initializer = function(){
  DOMWrapperBase$Dart.$Initializer.call(this);
}
;
_HTMLAllCollectionWrappingImplementation$Dart._HTMLAllCollectionWrappingImplementation$$Factory = function(){
  var tmp$0 = new _HTMLAllCollectionWrappingImplementation$Dart;
  tmp$0.$typeInfo = _HTMLAllCollectionWrappingImplementation$Dart.$lookupRTT();
  _HTMLAllCollectionWrappingImplementation$Dart.$Initializer.call(tmp$0);
  _HTMLAllCollectionWrappingImplementation$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
_HTMLAllCollectionWrappingImplementation$Dart.create__HTMLAllCollectionWrappingImplementation$member = function(){
  return _HTMLAllCollectionWrappingImplementation$Dart._HTMLAllCollectionWrappingImplementation$$Factory();
}
;
_HTMLAllCollectionWrappingImplementation$Dart.create__HTMLAllCollectionWrappingImplementation$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _HTMLAllCollectionWrappingImplementation$Dart.create__HTMLAllCollectionWrappingImplementation$member();
}
;
function native__HTMLAllCollectionWrappingImplementation_create__HTMLAllCollectionWrappingImplementation(){
  return _HTMLAllCollectionWrappingImplementation$Dart.create__HTMLAllCollectionWrappingImplementation$member();
}

_HTMLAllCollectionWrappingImplementation$Dart.create__HTMLAllCollectionWrappingImplementation$getter = function create__HTMLAllCollectionWrappingImplementation$getter(){
  return _HTMLAllCollectionWrappingImplementation$Dart.create__HTMLAllCollectionWrappingImplementation$named;
}
;
_HTMLAllCollectionWrappingImplementation$Dart.prototype.length$named = function(){
  return this.length$getter().apply(this, arguments);
}
;
_HTMLAllCollectionWrappingImplementation$Dart.prototype.length$getter = function(){
  return _HTMLAllCollectionWrappingImplementation$Dart._get__HTMLAllCollection_length$$member_(this);
}
;
_HTMLAllCollectionWrappingImplementation$Dart._get__HTMLAllCollection_length$$member_ = function(_this){
  return native__HTMLAllCollectionWrappingImplementation__get__HTMLAllCollection_length(_this);
}
;
_HTMLAllCollectionWrappingImplementation$Dart._get__HTMLAllCollection_length$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _HTMLAllCollectionWrappingImplementation$Dart._get__HTMLAllCollection_length$$member_(_this);
}
;
_HTMLAllCollectionWrappingImplementation$Dart._get__HTMLAllCollection_length$$getter_ = function _get__HTMLAllCollection_length$$getter_(){
  return _HTMLAllCollectionWrappingImplementation$Dart._get__HTMLAllCollection_length$$named_;
}
;
_HTMLAllCollectionWrappingImplementation$Dart.prototype.item$member = function(index){
  return _HTMLAllCollectionWrappingImplementation$Dart._item$$member_(this, index);
}
;
_HTMLAllCollectionWrappingImplementation$Dart.prototype.item$named = function($n, $o, index){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _HTMLAllCollectionWrappingImplementation$Dart.prototype.item$member.call(this, index);
}
;
_HTMLAllCollectionWrappingImplementation$Dart.prototype.item$getter = function item$getter(){
  return $bind(_HTMLAllCollectionWrappingImplementation$Dart.prototype.item$named, this);
}
;
_HTMLAllCollectionWrappingImplementation$Dart._item$$member_ = function(receiver, index){
  return native__HTMLAllCollectionWrappingImplementation__item(receiver, index);
}
;
_HTMLAllCollectionWrappingImplementation$Dart._item$$named_ = function($n, $o, receiver, index){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _HTMLAllCollectionWrappingImplementation$Dart._item$$member_(receiver, index);
}
;
_HTMLAllCollectionWrappingImplementation$Dart._item$$getter_ = function _item$$getter_(){
  return _HTMLAllCollectionWrappingImplementation$Dart._item$$named_;
}
;
_HTMLAllCollectionWrappingImplementation$Dart.prototype.namedItem$member = function(name_0){
  return _HTMLAllCollectionWrappingImplementation$Dart._namedItem$$member_(this, name_0);
}
;
_HTMLAllCollectionWrappingImplementation$Dart.prototype.namedItem$named = function($n, $o, name_0){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _HTMLAllCollectionWrappingImplementation$Dart.prototype.namedItem$member.call(this, name_0);
}
;
_HTMLAllCollectionWrappingImplementation$Dart.prototype.namedItem$getter = function namedItem$getter(){
  return $bind(_HTMLAllCollectionWrappingImplementation$Dart.prototype.namedItem$named, this);
}
;
_HTMLAllCollectionWrappingImplementation$Dart._namedItem$$member_ = function(receiver, name_0){
  return native__HTMLAllCollectionWrappingImplementation__namedItem(receiver, name_0);
}
;
_HTMLAllCollectionWrappingImplementation$Dart._namedItem$$named_ = function($n, $o, receiver, name_0){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _HTMLAllCollectionWrappingImplementation$Dart._namedItem$$member_(receiver, name_0);
}
;
_HTMLAllCollectionWrappingImplementation$Dart._namedItem$$getter_ = function _namedItem$$getter_(){
  return _HTMLAllCollectionWrappingImplementation$Dart._namedItem$$named_;
}
;
_HTMLAllCollectionWrappingImplementation$Dart.prototype.tags$member = function(name_0){
  return _HTMLAllCollectionWrappingImplementation$Dart._tags$$member_(this, name_0);
}
;
_HTMLAllCollectionWrappingImplementation$Dart.prototype.tags$named = function($n, $o, name_0){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _HTMLAllCollectionWrappingImplementation$Dart.prototype.tags$member.call(this, name_0);
}
;
_HTMLAllCollectionWrappingImplementation$Dart.prototype.tags$getter = function tags$getter(){
  return $bind(_HTMLAllCollectionWrappingImplementation$Dart.prototype.tags$named, this);
}
;
_HTMLAllCollectionWrappingImplementation$Dart._tags$$member_ = function(receiver, name_0){
  return native__HTMLAllCollectionWrappingImplementation__tags(receiver, name_0);
}
;
_HTMLAllCollectionWrappingImplementation$Dart._tags$$named_ = function($n, $o, receiver, name_0){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _HTMLAllCollectionWrappingImplementation$Dart._tags$$member_(receiver, name_0);
}
;
_HTMLAllCollectionWrappingImplementation$Dart._tags$$getter_ = function _tags$$getter_(){
  return _HTMLAllCollectionWrappingImplementation$Dart._tags$$named_;
}
;
_HTMLAllCollectionWrappingImplementation$Dart.prototype.typeName$named = function(){
  return this.typeName$getter().apply(this, arguments);
}
;
_HTMLAllCollectionWrappingImplementation$Dart.prototype.typeName$getter = function(){
  return 'HTMLAllCollection';
}
;
