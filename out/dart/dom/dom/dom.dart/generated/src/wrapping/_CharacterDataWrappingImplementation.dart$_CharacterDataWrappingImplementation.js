function _CharacterDataWrappingImplementation$Dart(){
}

_CharacterDataWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('_CharacterDataWrappingImplementation$Dart'), _CharacterDataWrappingImplementation$Dart.$RTTimplements);
}
;
_CharacterDataWrappingImplementation$Dart.$RTTimplements = function(rtt){
  _CharacterDataWrappingImplementation$Dart.$addTo(rtt);
}
;
_CharacterDataWrappingImplementation$Dart.$addTo = function(target){
  var rtt = _CharacterDataWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  _NodeWrappingImplementation$Dart.$addTo(target);
  CharacterData$Dart.$addTo(target);
}
;
_CharacterDataWrappingImplementation$Dart.prototype.$implements$_CharacterDataWrappingImplementation$Dart = 1;
_CharacterDataWrappingImplementation$Dart.prototype.$implements$CharacterData$Dart = 1;
_CharacterDataWrappingImplementation$Dart.prototype.$implements$Node$Dart = 1;
_CharacterDataWrappingImplementation$Dart.prototype.$implements$EventTarget$Dart = 1;
_CharacterDataWrappingImplementation$Dart.prototype.$implements$_NodeWrappingImplementation$Dart = 1;
_CharacterDataWrappingImplementation$Dart.prototype.$implements$DOMWrapperBase$Dart = 1;
_CharacterDataWrappingImplementation$Dart.prototype.$implements$DOMType$Dart = 1;
_CharacterDataWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(_CharacterDataWrappingImplementation$Dart, _NodeWrappingImplementation$Dart);
_CharacterDataWrappingImplementation$Dart.$Constructor = function(){
  _NodeWrappingImplementation$Dart.$Constructor.call(this);
}
;
_CharacterDataWrappingImplementation$Dart.$Initializer = function(){
  _NodeWrappingImplementation$Dart.$Initializer.call(this);
}
;
_CharacterDataWrappingImplementation$Dart._CharacterDataWrappingImplementation$$Factory = function(){
  var tmp$0 = new _CharacterDataWrappingImplementation$Dart;
  tmp$0.$typeInfo = _CharacterDataWrappingImplementation$Dart.$lookupRTT();
  _CharacterDataWrappingImplementation$Dart.$Initializer.call(tmp$0);
  _CharacterDataWrappingImplementation$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
_CharacterDataWrappingImplementation$Dart.create__CharacterDataWrappingImplementation$member = function(){
  return _CharacterDataWrappingImplementation$Dart._CharacterDataWrappingImplementation$$Factory();
}
;
_CharacterDataWrappingImplementation$Dart.create__CharacterDataWrappingImplementation$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _CharacterDataWrappingImplementation$Dart.create__CharacterDataWrappingImplementation$member();
}
;
function native__CharacterDataWrappingImplementation_create__CharacterDataWrappingImplementation(){
  return _CharacterDataWrappingImplementation$Dart.create__CharacterDataWrappingImplementation$member();
}

_CharacterDataWrappingImplementation$Dart.create__CharacterDataWrappingImplementation$getter = function create__CharacterDataWrappingImplementation$getter(){
  return _CharacterDataWrappingImplementation$Dart.create__CharacterDataWrappingImplementation$named;
}
;
_CharacterDataWrappingImplementation$Dart.prototype.data$named = function(){
  return this.data$getter().apply(this, arguments);
}
;
_CharacterDataWrappingImplementation$Dart.prototype.data$getter = function(){
  return _CharacterDataWrappingImplementation$Dart._get__CharacterData_data$$member_(this);
}
;
_CharacterDataWrappingImplementation$Dart.prototype.data$setter = function(value){
  _CharacterDataWrappingImplementation$Dart._set__CharacterData_data$$member_(this, value);
}
;
_CharacterDataWrappingImplementation$Dart._get__CharacterData_data$$member_ = function(_this){
  return native__CharacterDataWrappingImplementation__get__CharacterData_data(_this);
}
;
_CharacterDataWrappingImplementation$Dart._get__CharacterData_data$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _CharacterDataWrappingImplementation$Dart._get__CharacterData_data$$member_(_this);
}
;
_CharacterDataWrappingImplementation$Dart._get__CharacterData_data$$getter_ = function _get__CharacterData_data$$getter_(){
  return _CharacterDataWrappingImplementation$Dart._get__CharacterData_data$$named_;
}
;
_CharacterDataWrappingImplementation$Dart._set__CharacterData_data$$member_ = function(_this, value){
  return native__CharacterDataWrappingImplementation__set__CharacterData_data(_this, value);
}
;
_CharacterDataWrappingImplementation$Dart._set__CharacterData_data$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _CharacterDataWrappingImplementation$Dart._set__CharacterData_data$$member_(_this, value);
}
;
_CharacterDataWrappingImplementation$Dart._set__CharacterData_data$$getter_ = function _set__CharacterData_data$$getter_(){
  return _CharacterDataWrappingImplementation$Dart._set__CharacterData_data$$named_;
}
;
_CharacterDataWrappingImplementation$Dart.prototype.length$named = function(){
  return this.length$getter().apply(this, arguments);
}
;
_CharacterDataWrappingImplementation$Dart.prototype.length$getter = function(){
  return _CharacterDataWrappingImplementation$Dart._get__CharacterData_length$$member_(this);
}
;
_CharacterDataWrappingImplementation$Dart._get__CharacterData_length$$member_ = function(_this){
  return native__CharacterDataWrappingImplementation__get__CharacterData_length(_this);
}
;
_CharacterDataWrappingImplementation$Dart._get__CharacterData_length$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _CharacterDataWrappingImplementation$Dart._get__CharacterData_length$$member_(_this);
}
;
_CharacterDataWrappingImplementation$Dart._get__CharacterData_length$$getter_ = function _get__CharacterData_length$$getter_(){
  return _CharacterDataWrappingImplementation$Dart._get__CharacterData_length$$named_;
}
;
_CharacterDataWrappingImplementation$Dart.prototype.appendData$member = function(data){
  _CharacterDataWrappingImplementation$Dart._appendData$$member_(this, data);
  return;
}
;
_CharacterDataWrappingImplementation$Dart.prototype.appendData$named = function($n, $o, data){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _CharacterDataWrappingImplementation$Dart.prototype.appendData$member.call(this, data);
}
;
_CharacterDataWrappingImplementation$Dart.prototype.appendData$getter = function appendData$getter(){
  return $bind(_CharacterDataWrappingImplementation$Dart.prototype.appendData$named, this);
}
;
_CharacterDataWrappingImplementation$Dart._appendData$$member_ = function(receiver, data){
  return native__CharacterDataWrappingImplementation__appendData(receiver, data);
}
;
_CharacterDataWrappingImplementation$Dart._appendData$$named_ = function($n, $o, receiver, data){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _CharacterDataWrappingImplementation$Dart._appendData$$member_(receiver, data);
}
;
_CharacterDataWrappingImplementation$Dart._appendData$$getter_ = function _appendData$$getter_(){
  return _CharacterDataWrappingImplementation$Dart._appendData$$named_;
}
;
_CharacterDataWrappingImplementation$Dart.prototype.deleteData$member = function(offset, length_0){
  _CharacterDataWrappingImplementation$Dart._deleteData$$member_(this, offset, length_0);
  return;
}
;
_CharacterDataWrappingImplementation$Dart.prototype.deleteData$named = function($n, $o, offset, length_0){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _CharacterDataWrappingImplementation$Dart.prototype.deleteData$member.call(this, offset, length_0);
}
;
_CharacterDataWrappingImplementation$Dart.prototype.deleteData$getter = function deleteData$getter(){
  return $bind(_CharacterDataWrappingImplementation$Dart.prototype.deleteData$named, this);
}
;
_CharacterDataWrappingImplementation$Dart._deleteData$$member_ = function(receiver, offset, length_0){
  return native__CharacterDataWrappingImplementation__deleteData(receiver, offset, length_0);
}
;
_CharacterDataWrappingImplementation$Dart._deleteData$$named_ = function($n, $o, receiver, offset, length_0){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return _CharacterDataWrappingImplementation$Dart._deleteData$$member_(receiver, offset, length_0);
}
;
_CharacterDataWrappingImplementation$Dart._deleteData$$getter_ = function _deleteData$$getter_(){
  return _CharacterDataWrappingImplementation$Dart._deleteData$$named_;
}
;
_CharacterDataWrappingImplementation$Dart.prototype.insertData$member = function(offset, data){
  _CharacterDataWrappingImplementation$Dart._insertData$$member_(this, offset, data);
  return;
}
;
_CharacterDataWrappingImplementation$Dart.prototype.insertData$named = function($n, $o, offset, data){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _CharacterDataWrappingImplementation$Dart.prototype.insertData$member.call(this, offset, data);
}
;
_CharacterDataWrappingImplementation$Dart.prototype.insertData$getter = function insertData$getter(){
  return $bind(_CharacterDataWrappingImplementation$Dart.prototype.insertData$named, this);
}
;
_CharacterDataWrappingImplementation$Dart._insertData$$member_ = function(receiver, offset, data){
  return native__CharacterDataWrappingImplementation__insertData(receiver, offset, data);
}
;
_CharacterDataWrappingImplementation$Dart._insertData$$named_ = function($n, $o, receiver, offset, data){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return _CharacterDataWrappingImplementation$Dart._insertData$$member_(receiver, offset, data);
}
;
_CharacterDataWrappingImplementation$Dart._insertData$$getter_ = function _insertData$$getter_(){
  return _CharacterDataWrappingImplementation$Dart._insertData$$named_;
}
;
_CharacterDataWrappingImplementation$Dart.prototype.replaceData$member = function(offset, length_0, data){
  _CharacterDataWrappingImplementation$Dart._replaceData$$member_(this, offset, length_0, data);
  return;
}
;
_CharacterDataWrappingImplementation$Dart.prototype.replaceData$named = function($n, $o, offset, length_0, data){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return _CharacterDataWrappingImplementation$Dart.prototype.replaceData$member.call(this, offset, length_0, data);
}
;
_CharacterDataWrappingImplementation$Dart.prototype.replaceData$getter = function replaceData$getter(){
  return $bind(_CharacterDataWrappingImplementation$Dart.prototype.replaceData$named, this);
}
;
_CharacterDataWrappingImplementation$Dart._replaceData$$member_ = function(receiver, offset, length_0, data){
  return native__CharacterDataWrappingImplementation__replaceData(receiver, offset, length_0, data);
}
;
_CharacterDataWrappingImplementation$Dart._replaceData$$named_ = function($n, $o, receiver, offset, length_0, data){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 4)
    $nsme();
  return _CharacterDataWrappingImplementation$Dart._replaceData$$member_(receiver, offset, length_0, data);
}
;
_CharacterDataWrappingImplementation$Dart._replaceData$$getter_ = function _replaceData$$getter_(){
  return _CharacterDataWrappingImplementation$Dart._replaceData$$named_;
}
;
_CharacterDataWrappingImplementation$Dart.prototype.substringData$member = function(offset, length_0){
  return _CharacterDataWrappingImplementation$Dart._substringData$$member_(this, offset, length_0);
}
;
_CharacterDataWrappingImplementation$Dart.prototype.substringData$named = function($n, $o, offset, length_0){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _CharacterDataWrappingImplementation$Dart.prototype.substringData$member.call(this, offset, length_0);
}
;
_CharacterDataWrappingImplementation$Dart.prototype.substringData$getter = function substringData$getter(){
  return $bind(_CharacterDataWrappingImplementation$Dart.prototype.substringData$named, this);
}
;
_CharacterDataWrappingImplementation$Dart._substringData$$member_ = function(receiver, offset, length_0){
  return native__CharacterDataWrappingImplementation__substringData(receiver, offset, length_0);
}
;
_CharacterDataWrappingImplementation$Dart._substringData$$named_ = function($n, $o, receiver, offset, length_0){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return _CharacterDataWrappingImplementation$Dart._substringData$$member_(receiver, offset, length_0);
}
;
_CharacterDataWrappingImplementation$Dart._substringData$$getter_ = function _substringData$$getter_(){
  return _CharacterDataWrappingImplementation$Dart._substringData$$named_;
}
;
_CharacterDataWrappingImplementation$Dart.prototype.typeName$named = function(){
  return this.typeName$getter().apply(this, arguments);
}
;
_CharacterDataWrappingImplementation$Dart.prototype.typeName$getter = function(){
  return 'CharacterData';
}
;
