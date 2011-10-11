function _ClientRectListWrappingImplementation$Dart(){
}

_ClientRectListWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('_ClientRectListWrappingImplementation$Dart'), _ClientRectListWrappingImplementation$Dart.$RTTimplements);
}
;
_ClientRectListWrappingImplementation$Dart.$RTTimplements = function(rtt){
  _ClientRectListWrappingImplementation$Dart.$addTo(rtt);
}
;
_ClientRectListWrappingImplementation$Dart.$addTo = function(target){
  var rtt = _ClientRectListWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  DOMWrapperBase$Dart.$addTo(target);
  ClientRectList$Dart.$addTo(target);
}
;
_ClientRectListWrappingImplementation$Dart.prototype.$implements$_ClientRectListWrappingImplementation$Dart = 1;
_ClientRectListWrappingImplementation$Dart.prototype.$implements$ClientRectList$Dart = 1;
_ClientRectListWrappingImplementation$Dart.prototype.$implements$DOMWrapperBase$Dart = 1;
_ClientRectListWrappingImplementation$Dart.prototype.$implements$DOMType$Dart = 1;
_ClientRectListWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(_ClientRectListWrappingImplementation$Dart, DOMWrapperBase$Dart);
_ClientRectListWrappingImplementation$Dart.$Constructor = function(){
  DOMWrapperBase$Dart.$Constructor.call(this);
}
;
_ClientRectListWrappingImplementation$Dart.$Initializer = function(){
  DOMWrapperBase$Dart.$Initializer.call(this);
}
;
_ClientRectListWrappingImplementation$Dart._ClientRectListWrappingImplementation$$Factory = function(){
  var tmp$0 = new _ClientRectListWrappingImplementation$Dart;
  tmp$0.$typeInfo = _ClientRectListWrappingImplementation$Dart.$lookupRTT();
  _ClientRectListWrappingImplementation$Dart.$Initializer.call(tmp$0);
  _ClientRectListWrappingImplementation$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
_ClientRectListWrappingImplementation$Dart.create__ClientRectListWrappingImplementation$member = function(){
  return _ClientRectListWrappingImplementation$Dart._ClientRectListWrappingImplementation$$Factory();
}
;
_ClientRectListWrappingImplementation$Dart.create__ClientRectListWrappingImplementation$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _ClientRectListWrappingImplementation$Dart.create__ClientRectListWrappingImplementation$member();
}
;
function native__ClientRectListWrappingImplementation_create__ClientRectListWrappingImplementation(){
  return _ClientRectListWrappingImplementation$Dart.create__ClientRectListWrappingImplementation$member();
}

_ClientRectListWrappingImplementation$Dart.create__ClientRectListWrappingImplementation$getter = function create__ClientRectListWrappingImplementation$getter(){
  return _ClientRectListWrappingImplementation$Dart.create__ClientRectListWrappingImplementation$named;
}
;
_ClientRectListWrappingImplementation$Dart.prototype.length$named = function(){
  return this.length$getter().apply(this, arguments);
}
;
_ClientRectListWrappingImplementation$Dart.prototype.length$getter = function(){
  return _ClientRectListWrappingImplementation$Dart._get__ClientRectList_length$$member_(this);
}
;
_ClientRectListWrappingImplementation$Dart._get__ClientRectList_length$$member_ = function(_this){
  return native__ClientRectListWrappingImplementation__get__ClientRectList_length(_this);
}
;
_ClientRectListWrappingImplementation$Dart._get__ClientRectList_length$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _ClientRectListWrappingImplementation$Dart._get__ClientRectList_length$$member_(_this);
}
;
_ClientRectListWrappingImplementation$Dart._get__ClientRectList_length$$getter_ = function _get__ClientRectList_length$$getter_(){
  return _ClientRectListWrappingImplementation$Dart._get__ClientRectList_length$$named_;
}
;
_ClientRectListWrappingImplementation$Dart.prototype.item$member = function(index){
  return _ClientRectListWrappingImplementation$Dart._item$$member_(this, index);
}
;
_ClientRectListWrappingImplementation$Dart.prototype.item$named = function($n, $o, index){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _ClientRectListWrappingImplementation$Dart.prototype.item$member.call(this, index);
}
;
_ClientRectListWrappingImplementation$Dart.prototype.item$getter = function item$getter(){
  return $bind(_ClientRectListWrappingImplementation$Dart.prototype.item$named, this);
}
;
_ClientRectListWrappingImplementation$Dart._item$$member_ = function(receiver, index){
  return native__ClientRectListWrappingImplementation__item(receiver, index);
}
;
_ClientRectListWrappingImplementation$Dart._item$$named_ = function($n, $o, receiver, index){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _ClientRectListWrappingImplementation$Dart._item$$member_(receiver, index);
}
;
_ClientRectListWrappingImplementation$Dart._item$$getter_ = function _item$$getter_(){
  return _ClientRectListWrappingImplementation$Dart._item$$named_;
}
;
_ClientRectListWrappingImplementation$Dart.prototype.typeName$named = function(){
  return this.typeName$getter().apply(this, arguments);
}
;
_ClientRectListWrappingImplementation$Dart.prototype.typeName$getter = function(){
  return 'ClientRectList';
}
;
