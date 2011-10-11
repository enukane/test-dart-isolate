function _SQLExceptionWrappingImplementation$Dart(){
}

_SQLExceptionWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('_SQLExceptionWrappingImplementation$Dart'), _SQLExceptionWrappingImplementation$Dart.$RTTimplements);
}
;
_SQLExceptionWrappingImplementation$Dart.$RTTimplements = function(rtt){
  _SQLExceptionWrappingImplementation$Dart.$addTo(rtt);
}
;
_SQLExceptionWrappingImplementation$Dart.$addTo = function(target){
  var rtt = _SQLExceptionWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  DOMWrapperBase$Dart.$addTo(target);
  SQLException$Dart.$addTo(target);
}
;
_SQLExceptionWrappingImplementation$Dart.prototype.$implements$_SQLExceptionWrappingImplementation$Dart = 1;
_SQLExceptionWrappingImplementation$Dart.prototype.$implements$SQLException$Dart = 1;
_SQLExceptionWrappingImplementation$Dart.prototype.$implements$DOMWrapperBase$Dart = 1;
_SQLExceptionWrappingImplementation$Dart.prototype.$implements$DOMType$Dart = 1;
_SQLExceptionWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(_SQLExceptionWrappingImplementation$Dart, DOMWrapperBase$Dart);
_SQLExceptionWrappingImplementation$Dart.$Constructor = function(){
  DOMWrapperBase$Dart.$Constructor.call(this);
}
;
_SQLExceptionWrappingImplementation$Dart.$Initializer = function(){
  DOMWrapperBase$Dart.$Initializer.call(this);
}
;
_SQLExceptionWrappingImplementation$Dart._SQLExceptionWrappingImplementation$$Factory = function(){
  var tmp$0 = new _SQLExceptionWrappingImplementation$Dart;
  tmp$0.$typeInfo = _SQLExceptionWrappingImplementation$Dart.$lookupRTT();
  _SQLExceptionWrappingImplementation$Dart.$Initializer.call(tmp$0);
  _SQLExceptionWrappingImplementation$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
_SQLExceptionWrappingImplementation$Dart.create__SQLExceptionWrappingImplementation$member = function(){
  return _SQLExceptionWrappingImplementation$Dart._SQLExceptionWrappingImplementation$$Factory();
}
;
_SQLExceptionWrappingImplementation$Dart.create__SQLExceptionWrappingImplementation$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _SQLExceptionWrappingImplementation$Dart.create__SQLExceptionWrappingImplementation$member();
}
;
function native__SQLExceptionWrappingImplementation_create__SQLExceptionWrappingImplementation(){
  return _SQLExceptionWrappingImplementation$Dart.create__SQLExceptionWrappingImplementation$member();
}

_SQLExceptionWrappingImplementation$Dart.create__SQLExceptionWrappingImplementation$getter = function create__SQLExceptionWrappingImplementation$getter(){
  return _SQLExceptionWrappingImplementation$Dart.create__SQLExceptionWrappingImplementation$named;
}
;
_SQLExceptionWrappingImplementation$Dart.prototype.code$named = function(){
  return this.code$getter().apply(this, arguments);
}
;
_SQLExceptionWrappingImplementation$Dart.prototype.code$getter = function(){
  return _SQLExceptionWrappingImplementation$Dart._get__SQLException_code$$member_(this);
}
;
_SQLExceptionWrappingImplementation$Dart._get__SQLException_code$$member_ = function(_this){
  return native__SQLExceptionWrappingImplementation__get__SQLException_code(_this);
}
;
_SQLExceptionWrappingImplementation$Dart._get__SQLException_code$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _SQLExceptionWrappingImplementation$Dart._get__SQLException_code$$member_(_this);
}
;
_SQLExceptionWrappingImplementation$Dart._get__SQLException_code$$getter_ = function _get__SQLException_code$$getter_(){
  return _SQLExceptionWrappingImplementation$Dart._get__SQLException_code$$named_;
}
;
_SQLExceptionWrappingImplementation$Dart.prototype.message$named = function(){
  return this.message$getter().apply(this, arguments);
}
;
_SQLExceptionWrappingImplementation$Dart.prototype.message$getter = function(){
  return _SQLExceptionWrappingImplementation$Dart._get__SQLException_message$$member_(this);
}
;
_SQLExceptionWrappingImplementation$Dart._get__SQLException_message$$member_ = function(_this){
  return native__SQLExceptionWrappingImplementation__get__SQLException_message(_this);
}
;
_SQLExceptionWrappingImplementation$Dart._get__SQLException_message$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _SQLExceptionWrappingImplementation$Dart._get__SQLException_message$$member_(_this);
}
;
_SQLExceptionWrappingImplementation$Dart._get__SQLException_message$$getter_ = function _get__SQLException_message$$getter_(){
  return _SQLExceptionWrappingImplementation$Dart._get__SQLException_message$$named_;
}
;
_SQLExceptionWrappingImplementation$Dart.prototype.typeName$named = function(){
  return this.typeName$getter().apply(this, arguments);
}
;
_SQLExceptionWrappingImplementation$Dart.prototype.typeName$getter = function(){
  return 'SQLException';
}
;
