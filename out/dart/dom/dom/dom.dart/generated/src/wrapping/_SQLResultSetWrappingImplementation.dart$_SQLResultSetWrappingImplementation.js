function _SQLResultSetWrappingImplementation$Dart(){
}

_SQLResultSetWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('_SQLResultSetWrappingImplementation$Dart'), _SQLResultSetWrappingImplementation$Dart.$RTTimplements);
}
;
_SQLResultSetWrappingImplementation$Dart.$RTTimplements = function(rtt){
  _SQLResultSetWrappingImplementation$Dart.$addTo(rtt);
}
;
_SQLResultSetWrappingImplementation$Dart.$addTo = function(target){
  var rtt = _SQLResultSetWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  DOMWrapperBase$Dart.$addTo(target);
  SQLResultSet$Dart.$addTo(target);
}
;
_SQLResultSetWrappingImplementation$Dart.prototype.$implements$_SQLResultSetWrappingImplementation$Dart = 1;
_SQLResultSetWrappingImplementation$Dart.prototype.$implements$SQLResultSet$Dart = 1;
_SQLResultSetWrappingImplementation$Dart.prototype.$implements$DOMWrapperBase$Dart = 1;
_SQLResultSetWrappingImplementation$Dart.prototype.$implements$DOMType$Dart = 1;
_SQLResultSetWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(_SQLResultSetWrappingImplementation$Dart, DOMWrapperBase$Dart);
_SQLResultSetWrappingImplementation$Dart.$Constructor = function(){
  DOMWrapperBase$Dart.$Constructor.call(this);
}
;
_SQLResultSetWrappingImplementation$Dart.$Initializer = function(){
  DOMWrapperBase$Dart.$Initializer.call(this);
}
;
_SQLResultSetWrappingImplementation$Dart._SQLResultSetWrappingImplementation$$Factory = function(){
  var tmp$0 = new _SQLResultSetWrappingImplementation$Dart;
  tmp$0.$typeInfo = _SQLResultSetWrappingImplementation$Dart.$lookupRTT();
  _SQLResultSetWrappingImplementation$Dart.$Initializer.call(tmp$0);
  _SQLResultSetWrappingImplementation$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
_SQLResultSetWrappingImplementation$Dart.create__SQLResultSetWrappingImplementation$member = function(){
  return _SQLResultSetWrappingImplementation$Dart._SQLResultSetWrappingImplementation$$Factory();
}
;
_SQLResultSetWrappingImplementation$Dart.create__SQLResultSetWrappingImplementation$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _SQLResultSetWrappingImplementation$Dart.create__SQLResultSetWrappingImplementation$member();
}
;
function native__SQLResultSetWrappingImplementation_create__SQLResultSetWrappingImplementation(){
  return _SQLResultSetWrappingImplementation$Dart.create__SQLResultSetWrappingImplementation$member();
}

_SQLResultSetWrappingImplementation$Dart.create__SQLResultSetWrappingImplementation$getter = function create__SQLResultSetWrappingImplementation$getter(){
  return _SQLResultSetWrappingImplementation$Dart.create__SQLResultSetWrappingImplementation$named;
}
;
_SQLResultSetWrappingImplementation$Dart.prototype.insertId$named = function(){
  return this.insertId$getter().apply(this, arguments);
}
;
_SQLResultSetWrappingImplementation$Dart.prototype.insertId$getter = function(){
  return _SQLResultSetWrappingImplementation$Dart._get__SQLResultSet_insertId$$member_(this);
}
;
_SQLResultSetWrappingImplementation$Dart._get__SQLResultSet_insertId$$member_ = function(_this){
  return native__SQLResultSetWrappingImplementation__get__SQLResultSet_insertId(_this);
}
;
_SQLResultSetWrappingImplementation$Dart._get__SQLResultSet_insertId$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _SQLResultSetWrappingImplementation$Dart._get__SQLResultSet_insertId$$member_(_this);
}
;
_SQLResultSetWrappingImplementation$Dart._get__SQLResultSet_insertId$$getter_ = function _get__SQLResultSet_insertId$$getter_(){
  return _SQLResultSetWrappingImplementation$Dart._get__SQLResultSet_insertId$$named_;
}
;
_SQLResultSetWrappingImplementation$Dart.prototype.rows$named = function(){
  return this.rows$getter().apply(this, arguments);
}
;
_SQLResultSetWrappingImplementation$Dart.prototype.rows$getter = function(){
  return _SQLResultSetWrappingImplementation$Dart._get__SQLResultSet_rows$$member_(this);
}
;
_SQLResultSetWrappingImplementation$Dart._get__SQLResultSet_rows$$member_ = function(_this){
  return native__SQLResultSetWrappingImplementation__get__SQLResultSet_rows(_this);
}
;
_SQLResultSetWrappingImplementation$Dart._get__SQLResultSet_rows$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _SQLResultSetWrappingImplementation$Dart._get__SQLResultSet_rows$$member_(_this);
}
;
_SQLResultSetWrappingImplementation$Dart._get__SQLResultSet_rows$$getter_ = function _get__SQLResultSet_rows$$getter_(){
  return _SQLResultSetWrappingImplementation$Dart._get__SQLResultSet_rows$$named_;
}
;
_SQLResultSetWrappingImplementation$Dart.prototype.rowsAffected$named = function(){
  return this.rowsAffected$getter().apply(this, arguments);
}
;
_SQLResultSetWrappingImplementation$Dart.prototype.rowsAffected$getter = function(){
  return _SQLResultSetWrappingImplementation$Dart._get__SQLResultSet_rowsAffected$$member_(this);
}
;
_SQLResultSetWrappingImplementation$Dart._get__SQLResultSet_rowsAffected$$member_ = function(_this){
  return native__SQLResultSetWrappingImplementation__get__SQLResultSet_rowsAffected(_this);
}
;
_SQLResultSetWrappingImplementation$Dart._get__SQLResultSet_rowsAffected$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _SQLResultSetWrappingImplementation$Dart._get__SQLResultSet_rowsAffected$$member_(_this);
}
;
_SQLResultSetWrappingImplementation$Dart._get__SQLResultSet_rowsAffected$$getter_ = function _get__SQLResultSet_rowsAffected$$getter_(){
  return _SQLResultSetWrappingImplementation$Dart._get__SQLResultSet_rowsAffected$$named_;
}
;
_SQLResultSetWrappingImplementation$Dart.prototype.typeName$named = function(){
  return this.typeName$getter().apply(this, arguments);
}
;
_SQLResultSetWrappingImplementation$Dart.prototype.typeName$getter = function(){
  return 'SQLResultSet';
}
;
