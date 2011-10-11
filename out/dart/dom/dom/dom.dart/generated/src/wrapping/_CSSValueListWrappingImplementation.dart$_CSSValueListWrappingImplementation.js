function _CSSValueListWrappingImplementation$Dart(){
}

_CSSValueListWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('_CSSValueListWrappingImplementation$Dart'), _CSSValueListWrappingImplementation$Dart.$RTTimplements);
}
;
_CSSValueListWrappingImplementation$Dart.$RTTimplements = function(rtt){
  _CSSValueListWrappingImplementation$Dart.$addTo(rtt);
}
;
_CSSValueListWrappingImplementation$Dart.$addTo = function(target){
  var rtt = _CSSValueListWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  _CSSValueWrappingImplementation$Dart.$addTo(target);
  CSSValueList$Dart.$addTo(target);
}
;
_CSSValueListWrappingImplementation$Dart.prototype.$implements$_CSSValueListWrappingImplementation$Dart = 1;
_CSSValueListWrappingImplementation$Dart.prototype.$implements$CSSValueList$Dart = 1;
_CSSValueListWrappingImplementation$Dart.prototype.$implements$CSSValue$Dart = 1;
_CSSValueListWrappingImplementation$Dart.prototype.$implements$_CSSValueWrappingImplementation$Dart = 1;
_CSSValueListWrappingImplementation$Dart.prototype.$implements$DOMWrapperBase$Dart = 1;
_CSSValueListWrappingImplementation$Dart.prototype.$implements$DOMType$Dart = 1;
_CSSValueListWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(_CSSValueListWrappingImplementation$Dart, _CSSValueWrappingImplementation$Dart);
_CSSValueListWrappingImplementation$Dart.$Constructor = function(){
  _CSSValueWrappingImplementation$Dart.$Constructor.call(this);
}
;
_CSSValueListWrappingImplementation$Dart.$Initializer = function(){
  _CSSValueWrappingImplementation$Dart.$Initializer.call(this);
}
;
_CSSValueListWrappingImplementation$Dart._CSSValueListWrappingImplementation$$Factory = function(){
  var tmp$0 = new _CSSValueListWrappingImplementation$Dart;
  tmp$0.$typeInfo = _CSSValueListWrappingImplementation$Dart.$lookupRTT();
  _CSSValueListWrappingImplementation$Dart.$Initializer.call(tmp$0);
  _CSSValueListWrappingImplementation$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
_CSSValueListWrappingImplementation$Dart.create__CSSValueListWrappingImplementation$member = function(){
  return _CSSValueListWrappingImplementation$Dart._CSSValueListWrappingImplementation$$Factory();
}
;
_CSSValueListWrappingImplementation$Dart.create__CSSValueListWrappingImplementation$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _CSSValueListWrappingImplementation$Dart.create__CSSValueListWrappingImplementation$member();
}
;
function native__CSSValueListWrappingImplementation_create__CSSValueListWrappingImplementation(){
  return _CSSValueListWrappingImplementation$Dart.create__CSSValueListWrappingImplementation$member();
}

_CSSValueListWrappingImplementation$Dart.create__CSSValueListWrappingImplementation$getter = function create__CSSValueListWrappingImplementation$getter(){
  return _CSSValueListWrappingImplementation$Dart.create__CSSValueListWrappingImplementation$named;
}
;
_CSSValueListWrappingImplementation$Dart.prototype.length$named = function(){
  return this.length$getter().apply(this, arguments);
}
;
_CSSValueListWrappingImplementation$Dart.prototype.length$getter = function(){
  return _CSSValueListWrappingImplementation$Dart._get__CSSValueList_length$$member_(this);
}
;
_CSSValueListWrappingImplementation$Dart._get__CSSValueList_length$$member_ = function(_this){
  return native__CSSValueListWrappingImplementation__get__CSSValueList_length(_this);
}
;
_CSSValueListWrappingImplementation$Dart._get__CSSValueList_length$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _CSSValueListWrappingImplementation$Dart._get__CSSValueList_length$$member_(_this);
}
;
_CSSValueListWrappingImplementation$Dart._get__CSSValueList_length$$getter_ = function _get__CSSValueList_length$$getter_(){
  return _CSSValueListWrappingImplementation$Dart._get__CSSValueList_length$$named_;
}
;
_CSSValueListWrappingImplementation$Dart.prototype.item$member = function(index){
  return _CSSValueListWrappingImplementation$Dart._item$$member_(this, index);
}
;
_CSSValueListWrappingImplementation$Dart.prototype.item$named = function($n, $o, index){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _CSSValueListWrappingImplementation$Dart.prototype.item$member.call(this, index);
}
;
_CSSValueListWrappingImplementation$Dart.prototype.item$getter = function item$getter(){
  return $bind(_CSSValueListWrappingImplementation$Dart.prototype.item$named, this);
}
;
_CSSValueListWrappingImplementation$Dart._item$$member_ = function(receiver, index){
  return native__CSSValueListWrappingImplementation__item(receiver, index);
}
;
_CSSValueListWrappingImplementation$Dart._item$$named_ = function($n, $o, receiver, index){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _CSSValueListWrappingImplementation$Dart._item$$member_(receiver, index);
}
;
_CSSValueListWrappingImplementation$Dart._item$$getter_ = function _item$$getter_(){
  return _CSSValueListWrappingImplementation$Dart._item$$named_;
}
;
_CSSValueListWrappingImplementation$Dart.prototype.typeName$named = function(){
  return this.typeName$getter().apply(this, arguments);
}
;
_CSSValueListWrappingImplementation$Dart.prototype.typeName$getter = function(){
  return 'CSSValueList';
}
;
