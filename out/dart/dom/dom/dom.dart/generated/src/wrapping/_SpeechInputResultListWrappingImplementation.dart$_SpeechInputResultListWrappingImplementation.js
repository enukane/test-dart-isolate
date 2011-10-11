function _SpeechInputResultListWrappingImplementation$Dart(){
}

_SpeechInputResultListWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('_SpeechInputResultListWrappingImplementation$Dart'), _SpeechInputResultListWrappingImplementation$Dart.$RTTimplements);
}
;
_SpeechInputResultListWrappingImplementation$Dart.$RTTimplements = function(rtt){
  _SpeechInputResultListWrappingImplementation$Dart.$addTo(rtt);
}
;
_SpeechInputResultListWrappingImplementation$Dart.$addTo = function(target){
  var rtt = _SpeechInputResultListWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  DOMWrapperBase$Dart.$addTo(target);
  SpeechInputResultList$Dart.$addTo(target);
}
;
_SpeechInputResultListWrappingImplementation$Dart.prototype.$implements$_SpeechInputResultListWrappingImplementation$Dart = 1;
_SpeechInputResultListWrappingImplementation$Dart.prototype.$implements$SpeechInputResultList$Dart = 1;
_SpeechInputResultListWrappingImplementation$Dart.prototype.$implements$DOMWrapperBase$Dart = 1;
_SpeechInputResultListWrappingImplementation$Dart.prototype.$implements$DOMType$Dart = 1;
_SpeechInputResultListWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(_SpeechInputResultListWrappingImplementation$Dart, DOMWrapperBase$Dart);
_SpeechInputResultListWrappingImplementation$Dart.$Constructor = function(){
  DOMWrapperBase$Dart.$Constructor.call(this);
}
;
_SpeechInputResultListWrappingImplementation$Dart.$Initializer = function(){
  DOMWrapperBase$Dart.$Initializer.call(this);
}
;
_SpeechInputResultListWrappingImplementation$Dart._SpeechInputResultListWrappingImplementation$$Factory = function(){
  var tmp$0 = new _SpeechInputResultListWrappingImplementation$Dart;
  tmp$0.$typeInfo = _SpeechInputResultListWrappingImplementation$Dart.$lookupRTT();
  _SpeechInputResultListWrappingImplementation$Dart.$Initializer.call(tmp$0);
  _SpeechInputResultListWrappingImplementation$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
_SpeechInputResultListWrappingImplementation$Dart.create__SpeechInputResultListWrappingImplementation$member = function(){
  return _SpeechInputResultListWrappingImplementation$Dart._SpeechInputResultListWrappingImplementation$$Factory();
}
;
_SpeechInputResultListWrappingImplementation$Dart.create__SpeechInputResultListWrappingImplementation$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _SpeechInputResultListWrappingImplementation$Dart.create__SpeechInputResultListWrappingImplementation$member();
}
;
function native__SpeechInputResultListWrappingImplementation_create__SpeechInputResultListWrappingImplementation(){
  return _SpeechInputResultListWrappingImplementation$Dart.create__SpeechInputResultListWrappingImplementation$member();
}

_SpeechInputResultListWrappingImplementation$Dart.create__SpeechInputResultListWrappingImplementation$getter = function create__SpeechInputResultListWrappingImplementation$getter(){
  return _SpeechInputResultListWrappingImplementation$Dart.create__SpeechInputResultListWrappingImplementation$named;
}
;
_SpeechInputResultListWrappingImplementation$Dart.prototype.length$named = function(){
  return this.length$getter().apply(this, arguments);
}
;
_SpeechInputResultListWrappingImplementation$Dart.prototype.length$getter = function(){
  return _SpeechInputResultListWrappingImplementation$Dart._get__SpeechInputResultList_length$$member_(this);
}
;
_SpeechInputResultListWrappingImplementation$Dart._get__SpeechInputResultList_length$$member_ = function(_this){
  return native__SpeechInputResultListWrappingImplementation__get__SpeechInputResultList_length(_this);
}
;
_SpeechInputResultListWrappingImplementation$Dart._get__SpeechInputResultList_length$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _SpeechInputResultListWrappingImplementation$Dart._get__SpeechInputResultList_length$$member_(_this);
}
;
_SpeechInputResultListWrappingImplementation$Dart._get__SpeechInputResultList_length$$getter_ = function _get__SpeechInputResultList_length$$getter_(){
  return _SpeechInputResultListWrappingImplementation$Dart._get__SpeechInputResultList_length$$named_;
}
;
_SpeechInputResultListWrappingImplementation$Dart.prototype.item$member = function(index){
  return _SpeechInputResultListWrappingImplementation$Dart._item$$member_(this, index);
}
;
_SpeechInputResultListWrappingImplementation$Dart.prototype.item$named = function($n, $o, index){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _SpeechInputResultListWrappingImplementation$Dart.prototype.item$member.call(this, index);
}
;
_SpeechInputResultListWrappingImplementation$Dart.prototype.item$getter = function item$getter(){
  return $bind(_SpeechInputResultListWrappingImplementation$Dart.prototype.item$named, this);
}
;
_SpeechInputResultListWrappingImplementation$Dart._item$$member_ = function(receiver, index){
  return native__SpeechInputResultListWrappingImplementation__item(receiver, index);
}
;
_SpeechInputResultListWrappingImplementation$Dart._item$$named_ = function($n, $o, receiver, index){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _SpeechInputResultListWrappingImplementation$Dart._item$$member_(receiver, index);
}
;
_SpeechInputResultListWrappingImplementation$Dart._item$$getter_ = function _item$$getter_(){
  return _SpeechInputResultListWrappingImplementation$Dart._item$$named_;
}
;
_SpeechInputResultListWrappingImplementation$Dart.prototype.typeName$named = function(){
  return this.typeName$getter().apply(this, arguments);
}
;
_SpeechInputResultListWrappingImplementation$Dart.prototype.typeName$getter = function(){
  return 'SpeechInputResultList';
}
;
