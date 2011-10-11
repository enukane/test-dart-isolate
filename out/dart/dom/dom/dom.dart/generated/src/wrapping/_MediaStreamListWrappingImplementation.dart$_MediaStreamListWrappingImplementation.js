function _MediaStreamListWrappingImplementation$Dart(){
}

_MediaStreamListWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('_MediaStreamListWrappingImplementation$Dart'), _MediaStreamListWrappingImplementation$Dart.$RTTimplements);
}
;
_MediaStreamListWrappingImplementation$Dart.$RTTimplements = function(rtt){
  _MediaStreamListWrappingImplementation$Dart.$addTo(rtt);
}
;
_MediaStreamListWrappingImplementation$Dart.$addTo = function(target){
  var rtt = _MediaStreamListWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  DOMWrapperBase$Dart.$addTo(target);
  MediaStreamList$Dart.$addTo(target);
}
;
_MediaStreamListWrappingImplementation$Dart.prototype.$implements$_MediaStreamListWrappingImplementation$Dart = 1;
_MediaStreamListWrappingImplementation$Dart.prototype.$implements$MediaStreamList$Dart = 1;
_MediaStreamListWrappingImplementation$Dart.prototype.$implements$DOMWrapperBase$Dart = 1;
_MediaStreamListWrappingImplementation$Dart.prototype.$implements$DOMType$Dart = 1;
_MediaStreamListWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(_MediaStreamListWrappingImplementation$Dart, DOMWrapperBase$Dart);
_MediaStreamListWrappingImplementation$Dart.$Constructor = function(){
  DOMWrapperBase$Dart.$Constructor.call(this);
}
;
_MediaStreamListWrappingImplementation$Dart.$Initializer = function(){
  DOMWrapperBase$Dart.$Initializer.call(this);
}
;
_MediaStreamListWrappingImplementation$Dart._MediaStreamListWrappingImplementation$$Factory = function(){
  var tmp$0 = new _MediaStreamListWrappingImplementation$Dart;
  tmp$0.$typeInfo = _MediaStreamListWrappingImplementation$Dart.$lookupRTT();
  _MediaStreamListWrappingImplementation$Dart.$Initializer.call(tmp$0);
  _MediaStreamListWrappingImplementation$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
_MediaStreamListWrappingImplementation$Dart.create__MediaStreamListWrappingImplementation$member = function(){
  return _MediaStreamListWrappingImplementation$Dart._MediaStreamListWrappingImplementation$$Factory();
}
;
_MediaStreamListWrappingImplementation$Dart.create__MediaStreamListWrappingImplementation$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _MediaStreamListWrappingImplementation$Dart.create__MediaStreamListWrappingImplementation$member();
}
;
function native__MediaStreamListWrappingImplementation_create__MediaStreamListWrappingImplementation(){
  return _MediaStreamListWrappingImplementation$Dart.create__MediaStreamListWrappingImplementation$member();
}

_MediaStreamListWrappingImplementation$Dart.create__MediaStreamListWrappingImplementation$getter = function create__MediaStreamListWrappingImplementation$getter(){
  return _MediaStreamListWrappingImplementation$Dart.create__MediaStreamListWrappingImplementation$named;
}
;
_MediaStreamListWrappingImplementation$Dart.prototype.length$named = function(){
  return this.length$getter().apply(this, arguments);
}
;
_MediaStreamListWrappingImplementation$Dart.prototype.length$getter = function(){
  return _MediaStreamListWrappingImplementation$Dart._get__MediaStreamList_length$$member_(this);
}
;
_MediaStreamListWrappingImplementation$Dart._get__MediaStreamList_length$$member_ = function(_this){
  return native__MediaStreamListWrappingImplementation__get__MediaStreamList_length(_this);
}
;
_MediaStreamListWrappingImplementation$Dart._get__MediaStreamList_length$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _MediaStreamListWrappingImplementation$Dart._get__MediaStreamList_length$$member_(_this);
}
;
_MediaStreamListWrappingImplementation$Dart._get__MediaStreamList_length$$getter_ = function _get__MediaStreamList_length$$getter_(){
  return _MediaStreamListWrappingImplementation$Dart._get__MediaStreamList_length$$named_;
}
;
_MediaStreamListWrappingImplementation$Dart.prototype.item$member = function(index){
  return _MediaStreamListWrappingImplementation$Dart._item$$member_(this, index);
}
;
_MediaStreamListWrappingImplementation$Dart.prototype.item$named = function($n, $o, index){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _MediaStreamListWrappingImplementation$Dart.prototype.item$member.call(this, index);
}
;
_MediaStreamListWrappingImplementation$Dart.prototype.item$getter = function item$getter(){
  return $bind(_MediaStreamListWrappingImplementation$Dart.prototype.item$named, this);
}
;
_MediaStreamListWrappingImplementation$Dart._item$$member_ = function(receiver, index){
  return native__MediaStreamListWrappingImplementation__item(receiver, index);
}
;
_MediaStreamListWrappingImplementation$Dart._item$$named_ = function($n, $o, receiver, index){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _MediaStreamListWrappingImplementation$Dart._item$$member_(receiver, index);
}
;
_MediaStreamListWrappingImplementation$Dart._item$$getter_ = function _item$$getter_(){
  return _MediaStreamListWrappingImplementation$Dart._item$$named_;
}
;
_MediaStreamListWrappingImplementation$Dart.prototype.typeName$named = function(){
  return this.typeName$getter().apply(this, arguments);
}
;
_MediaStreamListWrappingImplementation$Dart.prototype.typeName$getter = function(){
  return 'MediaStreamList';
}
;
