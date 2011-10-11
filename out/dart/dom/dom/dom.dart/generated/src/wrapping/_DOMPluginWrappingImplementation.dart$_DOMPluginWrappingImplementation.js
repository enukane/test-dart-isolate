function _DOMPluginWrappingImplementation$Dart(){
}

_DOMPluginWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('_DOMPluginWrappingImplementation$Dart'), _DOMPluginWrappingImplementation$Dart.$RTTimplements);
}
;
_DOMPluginWrappingImplementation$Dart.$RTTimplements = function(rtt){
  _DOMPluginWrappingImplementation$Dart.$addTo(rtt);
}
;
_DOMPluginWrappingImplementation$Dart.$addTo = function(target){
  var rtt = _DOMPluginWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  DOMWrapperBase$Dart.$addTo(target);
  DOMPlugin$Dart.$addTo(target);
}
;
_DOMPluginWrappingImplementation$Dart.prototype.$implements$_DOMPluginWrappingImplementation$Dart = 1;
_DOMPluginWrappingImplementation$Dart.prototype.$implements$DOMPlugin$Dart = 1;
_DOMPluginWrappingImplementation$Dart.prototype.$implements$DOMWrapperBase$Dart = 1;
_DOMPluginWrappingImplementation$Dart.prototype.$implements$DOMType$Dart = 1;
_DOMPluginWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(_DOMPluginWrappingImplementation$Dart, DOMWrapperBase$Dart);
_DOMPluginWrappingImplementation$Dart.$Constructor = function(){
  DOMWrapperBase$Dart.$Constructor.call(this);
}
;
_DOMPluginWrappingImplementation$Dart.$Initializer = function(){
  DOMWrapperBase$Dart.$Initializer.call(this);
}
;
_DOMPluginWrappingImplementation$Dart._DOMPluginWrappingImplementation$$Factory = function(){
  var tmp$0 = new _DOMPluginWrappingImplementation$Dart;
  tmp$0.$typeInfo = _DOMPluginWrappingImplementation$Dart.$lookupRTT();
  _DOMPluginWrappingImplementation$Dart.$Initializer.call(tmp$0);
  _DOMPluginWrappingImplementation$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
_DOMPluginWrappingImplementation$Dart.create__DOMPluginWrappingImplementation$member = function(){
  return _DOMPluginWrappingImplementation$Dart._DOMPluginWrappingImplementation$$Factory();
}
;
_DOMPluginWrappingImplementation$Dart.create__DOMPluginWrappingImplementation$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _DOMPluginWrappingImplementation$Dart.create__DOMPluginWrappingImplementation$member();
}
;
function native__DOMPluginWrappingImplementation_create__DOMPluginWrappingImplementation(){
  return _DOMPluginWrappingImplementation$Dart.create__DOMPluginWrappingImplementation$member();
}

_DOMPluginWrappingImplementation$Dart.create__DOMPluginWrappingImplementation$getter = function create__DOMPluginWrappingImplementation$getter(){
  return _DOMPluginWrappingImplementation$Dart.create__DOMPluginWrappingImplementation$named;
}
;
_DOMPluginWrappingImplementation$Dart.prototype.description$named = function(){
  return this.description$getter().apply(this, arguments);
}
;
_DOMPluginWrappingImplementation$Dart.prototype.description$getter = function(){
  return _DOMPluginWrappingImplementation$Dart._get__DOMPlugin_description$$member_(this);
}
;
_DOMPluginWrappingImplementation$Dart._get__DOMPlugin_description$$member_ = function(_this){
  return native__DOMPluginWrappingImplementation__get__DOMPlugin_description(_this);
}
;
_DOMPluginWrappingImplementation$Dart._get__DOMPlugin_description$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMPluginWrappingImplementation$Dart._get__DOMPlugin_description$$member_(_this);
}
;
_DOMPluginWrappingImplementation$Dart._get__DOMPlugin_description$$getter_ = function _get__DOMPlugin_description$$getter_(){
  return _DOMPluginWrappingImplementation$Dart._get__DOMPlugin_description$$named_;
}
;
_DOMPluginWrappingImplementation$Dart.prototype.filename$named = function(){
  return this.filename$getter().apply(this, arguments);
}
;
_DOMPluginWrappingImplementation$Dart.prototype.filename$getter = function(){
  return _DOMPluginWrappingImplementation$Dart._get__DOMPlugin_filename$$member_(this);
}
;
_DOMPluginWrappingImplementation$Dart._get__DOMPlugin_filename$$member_ = function(_this){
  return native__DOMPluginWrappingImplementation__get__DOMPlugin_filename(_this);
}
;
_DOMPluginWrappingImplementation$Dart._get__DOMPlugin_filename$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMPluginWrappingImplementation$Dart._get__DOMPlugin_filename$$member_(_this);
}
;
_DOMPluginWrappingImplementation$Dart._get__DOMPlugin_filename$$getter_ = function _get__DOMPlugin_filename$$getter_(){
  return _DOMPluginWrappingImplementation$Dart._get__DOMPlugin_filename$$named_;
}
;
_DOMPluginWrappingImplementation$Dart.prototype.length$named = function(){
  return this.length$getter().apply(this, arguments);
}
;
_DOMPluginWrappingImplementation$Dart.prototype.length$getter = function(){
  return _DOMPluginWrappingImplementation$Dart._get__DOMPlugin_length$$member_(this);
}
;
_DOMPluginWrappingImplementation$Dart._get__DOMPlugin_length$$member_ = function(_this){
  return native__DOMPluginWrappingImplementation__get__DOMPlugin_length(_this);
}
;
_DOMPluginWrappingImplementation$Dart._get__DOMPlugin_length$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMPluginWrappingImplementation$Dart._get__DOMPlugin_length$$member_(_this);
}
;
_DOMPluginWrappingImplementation$Dart._get__DOMPlugin_length$$getter_ = function _get__DOMPlugin_length$$getter_(){
  return _DOMPluginWrappingImplementation$Dart._get__DOMPlugin_length$$named_;
}
;
_DOMPluginWrappingImplementation$Dart.prototype.name$named = function(){
  return this.name$getter().apply(this, arguments);
}
;
_DOMPluginWrappingImplementation$Dart.prototype.name$getter = function(){
  return _DOMPluginWrappingImplementation$Dart._get__DOMPlugin_name$$member_(this);
}
;
_DOMPluginWrappingImplementation$Dart._get__DOMPlugin_name$$member_ = function(_this){
  return native__DOMPluginWrappingImplementation__get__DOMPlugin_name(_this);
}
;
_DOMPluginWrappingImplementation$Dart._get__DOMPlugin_name$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMPluginWrappingImplementation$Dart._get__DOMPlugin_name$$member_(_this);
}
;
_DOMPluginWrappingImplementation$Dart._get__DOMPlugin_name$$getter_ = function _get__DOMPlugin_name$$getter_(){
  return _DOMPluginWrappingImplementation$Dart._get__DOMPlugin_name$$named_;
}
;
_DOMPluginWrappingImplementation$Dart.prototype.item$member = function(index){
  return _DOMPluginWrappingImplementation$Dart._item$$member_(this, index);
}
;
_DOMPluginWrappingImplementation$Dart.prototype.item$named = function($n, $o, index){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMPluginWrappingImplementation$Dart.prototype.item$member.call(this, index);
}
;
_DOMPluginWrappingImplementation$Dart.prototype.item$getter = function item$getter(){
  return $bind(_DOMPluginWrappingImplementation$Dart.prototype.item$named, this);
}
;
_DOMPluginWrappingImplementation$Dart._item$$member_ = function(receiver, index){
  return native__DOMPluginWrappingImplementation__item(receiver, index);
}
;
_DOMPluginWrappingImplementation$Dart._item$$named_ = function($n, $o, receiver, index){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DOMPluginWrappingImplementation$Dart._item$$member_(receiver, index);
}
;
_DOMPluginWrappingImplementation$Dart._item$$getter_ = function _item$$getter_(){
  return _DOMPluginWrappingImplementation$Dart._item$$named_;
}
;
_DOMPluginWrappingImplementation$Dart.prototype.namedItem$member = function(name_0){
  return _DOMPluginWrappingImplementation$Dart._namedItem$$member_(this, name_0);
}
;
_DOMPluginWrappingImplementation$Dart.prototype.namedItem$named = function($n, $o, name_0){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMPluginWrappingImplementation$Dart.prototype.namedItem$member.call(this, name_0);
}
;
_DOMPluginWrappingImplementation$Dart.prototype.namedItem$getter = function namedItem$getter(){
  return $bind(_DOMPluginWrappingImplementation$Dart.prototype.namedItem$named, this);
}
;
_DOMPluginWrappingImplementation$Dart._namedItem$$member_ = function(receiver, name_0){
  return native__DOMPluginWrappingImplementation__namedItem(receiver, name_0);
}
;
_DOMPluginWrappingImplementation$Dart._namedItem$$named_ = function($n, $o, receiver, name_0){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DOMPluginWrappingImplementation$Dart._namedItem$$member_(receiver, name_0);
}
;
_DOMPluginWrappingImplementation$Dart._namedItem$$getter_ = function _namedItem$$getter_(){
  return _DOMPluginWrappingImplementation$Dart._namedItem$$named_;
}
;
_DOMPluginWrappingImplementation$Dart.prototype.typeName$named = function(){
  return this.typeName$getter().apply(this, arguments);
}
;
_DOMPluginWrappingImplementation$Dart.prototype.typeName$getter = function(){
  return 'DOMPlugin';
}
;
