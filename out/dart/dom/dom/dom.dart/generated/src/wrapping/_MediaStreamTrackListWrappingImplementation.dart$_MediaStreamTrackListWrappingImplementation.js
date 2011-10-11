function _MediaStreamTrackListWrappingImplementation$Dart(){
}

_MediaStreamTrackListWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('_MediaStreamTrackListWrappingImplementation$Dart'), _MediaStreamTrackListWrappingImplementation$Dart.$RTTimplements);
}
;
_MediaStreamTrackListWrappingImplementation$Dart.$RTTimplements = function(rtt){
  _MediaStreamTrackListWrappingImplementation$Dart.$addTo(rtt);
}
;
_MediaStreamTrackListWrappingImplementation$Dart.$addTo = function(target){
  var rtt = _MediaStreamTrackListWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  DOMWrapperBase$Dart.$addTo(target);
  MediaStreamTrackList$Dart.$addTo(target);
}
;
_MediaStreamTrackListWrappingImplementation$Dart.prototype.$implements$_MediaStreamTrackListWrappingImplementation$Dart = 1;
_MediaStreamTrackListWrappingImplementation$Dart.prototype.$implements$MediaStreamTrackList$Dart = 1;
_MediaStreamTrackListWrappingImplementation$Dart.prototype.$implements$DOMWrapperBase$Dart = 1;
_MediaStreamTrackListWrappingImplementation$Dart.prototype.$implements$DOMType$Dart = 1;
_MediaStreamTrackListWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(_MediaStreamTrackListWrappingImplementation$Dart, DOMWrapperBase$Dart);
_MediaStreamTrackListWrappingImplementation$Dart.$Constructor = function(){
  DOMWrapperBase$Dart.$Constructor.call(this);
}
;
_MediaStreamTrackListWrappingImplementation$Dart.$Initializer = function(){
  DOMWrapperBase$Dart.$Initializer.call(this);
}
;
_MediaStreamTrackListWrappingImplementation$Dart._MediaStreamTrackListWrappingImplementation$$Factory = function(){
  var tmp$0 = new _MediaStreamTrackListWrappingImplementation$Dart;
  tmp$0.$typeInfo = _MediaStreamTrackListWrappingImplementation$Dart.$lookupRTT();
  _MediaStreamTrackListWrappingImplementation$Dart.$Initializer.call(tmp$0);
  _MediaStreamTrackListWrappingImplementation$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
_MediaStreamTrackListWrappingImplementation$Dart.create__MediaStreamTrackListWrappingImplementation$member = function(){
  return _MediaStreamTrackListWrappingImplementation$Dart._MediaStreamTrackListWrappingImplementation$$Factory();
}
;
_MediaStreamTrackListWrappingImplementation$Dart.create__MediaStreamTrackListWrappingImplementation$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _MediaStreamTrackListWrappingImplementation$Dart.create__MediaStreamTrackListWrappingImplementation$member();
}
;
function native__MediaStreamTrackListWrappingImplementation_create__MediaStreamTrackListWrappingImplementation(){
  return _MediaStreamTrackListWrappingImplementation$Dart.create__MediaStreamTrackListWrappingImplementation$member();
}

_MediaStreamTrackListWrappingImplementation$Dart.create__MediaStreamTrackListWrappingImplementation$getter = function create__MediaStreamTrackListWrappingImplementation$getter(){
  return _MediaStreamTrackListWrappingImplementation$Dart.create__MediaStreamTrackListWrappingImplementation$named;
}
;
_MediaStreamTrackListWrappingImplementation$Dart.prototype.length$named = function(){
  return this.length$getter().apply(this, arguments);
}
;
_MediaStreamTrackListWrappingImplementation$Dart.prototype.length$getter = function(){
  return _MediaStreamTrackListWrappingImplementation$Dart._get__MediaStreamTrackList_length$$member_(this);
}
;
_MediaStreamTrackListWrappingImplementation$Dart._get__MediaStreamTrackList_length$$member_ = function(_this){
  return native__MediaStreamTrackListWrappingImplementation__get__MediaStreamTrackList_length(_this);
}
;
_MediaStreamTrackListWrappingImplementation$Dart._get__MediaStreamTrackList_length$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _MediaStreamTrackListWrappingImplementation$Dart._get__MediaStreamTrackList_length$$member_(_this);
}
;
_MediaStreamTrackListWrappingImplementation$Dart._get__MediaStreamTrackList_length$$getter_ = function _get__MediaStreamTrackList_length$$getter_(){
  return _MediaStreamTrackListWrappingImplementation$Dart._get__MediaStreamTrackList_length$$named_;
}
;
_MediaStreamTrackListWrappingImplementation$Dart.prototype.item$member = function(index){
  return _MediaStreamTrackListWrappingImplementation$Dart._item$$member_(this, index);
}
;
_MediaStreamTrackListWrappingImplementation$Dart.prototype.item$named = function($n, $o, index){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _MediaStreamTrackListWrappingImplementation$Dart.prototype.item$member.call(this, index);
}
;
_MediaStreamTrackListWrappingImplementation$Dart.prototype.item$getter = function item$getter(){
  return $bind(_MediaStreamTrackListWrappingImplementation$Dart.prototype.item$named, this);
}
;
_MediaStreamTrackListWrappingImplementation$Dart._item$$member_ = function(receiver, index){
  return native__MediaStreamTrackListWrappingImplementation__item(receiver, index);
}
;
_MediaStreamTrackListWrappingImplementation$Dart._item$$named_ = function($n, $o, receiver, index){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _MediaStreamTrackListWrappingImplementation$Dart._item$$member_(receiver, index);
}
;
_MediaStreamTrackListWrappingImplementation$Dart._item$$getter_ = function _item$$getter_(){
  return _MediaStreamTrackListWrappingImplementation$Dart._item$$named_;
}
;
_MediaStreamTrackListWrappingImplementation$Dart.prototype.typeName$named = function(){
  return this.typeName$getter().apply(this, arguments);
}
;
_MediaStreamTrackListWrappingImplementation$Dart.prototype.typeName$getter = function(){
  return 'MediaStreamTrackList';
}
;
