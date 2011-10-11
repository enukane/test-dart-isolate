function _WebKitAnimationListWrappingImplementation$Dart(){
}

_WebKitAnimationListWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('_WebKitAnimationListWrappingImplementation$Dart'), _WebKitAnimationListWrappingImplementation$Dart.$RTTimplements);
}
;
_WebKitAnimationListWrappingImplementation$Dart.$RTTimplements = function(rtt){
  _WebKitAnimationListWrappingImplementation$Dart.$addTo(rtt);
}
;
_WebKitAnimationListWrappingImplementation$Dart.$addTo = function(target){
  var rtt = _WebKitAnimationListWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  DOMWrapperBase$Dart.$addTo(target);
  WebKitAnimationList$Dart.$addTo(target);
}
;
_WebKitAnimationListWrappingImplementation$Dart.prototype.$implements$_WebKitAnimationListWrappingImplementation$Dart = 1;
_WebKitAnimationListWrappingImplementation$Dart.prototype.$implements$WebKitAnimationList$Dart = 1;
_WebKitAnimationListWrappingImplementation$Dart.prototype.$implements$DOMWrapperBase$Dart = 1;
_WebKitAnimationListWrappingImplementation$Dart.prototype.$implements$DOMType$Dart = 1;
_WebKitAnimationListWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(_WebKitAnimationListWrappingImplementation$Dart, DOMWrapperBase$Dart);
_WebKitAnimationListWrappingImplementation$Dart.$Constructor = function(){
  DOMWrapperBase$Dart.$Constructor.call(this);
}
;
_WebKitAnimationListWrappingImplementation$Dart.$Initializer = function(){
  DOMWrapperBase$Dart.$Initializer.call(this);
}
;
_WebKitAnimationListWrappingImplementation$Dart._WebKitAnimationListWrappingImplementation$$Factory = function(){
  var tmp$0 = new _WebKitAnimationListWrappingImplementation$Dart;
  tmp$0.$typeInfo = _WebKitAnimationListWrappingImplementation$Dart.$lookupRTT();
  _WebKitAnimationListWrappingImplementation$Dart.$Initializer.call(tmp$0);
  _WebKitAnimationListWrappingImplementation$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
_WebKitAnimationListWrappingImplementation$Dart.create__WebKitAnimationListWrappingImplementation$member = function(){
  return _WebKitAnimationListWrappingImplementation$Dart._WebKitAnimationListWrappingImplementation$$Factory();
}
;
_WebKitAnimationListWrappingImplementation$Dart.create__WebKitAnimationListWrappingImplementation$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _WebKitAnimationListWrappingImplementation$Dart.create__WebKitAnimationListWrappingImplementation$member();
}
;
function native__WebKitAnimationListWrappingImplementation_create__WebKitAnimationListWrappingImplementation(){
  return _WebKitAnimationListWrappingImplementation$Dart.create__WebKitAnimationListWrappingImplementation$member();
}

_WebKitAnimationListWrappingImplementation$Dart.create__WebKitAnimationListWrappingImplementation$getter = function create__WebKitAnimationListWrappingImplementation$getter(){
  return _WebKitAnimationListWrappingImplementation$Dart.create__WebKitAnimationListWrappingImplementation$named;
}
;
_WebKitAnimationListWrappingImplementation$Dart.prototype.length$named = function(){
  return this.length$getter().apply(this, arguments);
}
;
_WebKitAnimationListWrappingImplementation$Dart.prototype.length$getter = function(){
  return _WebKitAnimationListWrappingImplementation$Dart._get__WebKitAnimationList_length$$member_(this);
}
;
_WebKitAnimationListWrappingImplementation$Dart._get__WebKitAnimationList_length$$member_ = function(_this){
  return native__WebKitAnimationListWrappingImplementation__get__WebKitAnimationList_length(_this);
}
;
_WebKitAnimationListWrappingImplementation$Dart._get__WebKitAnimationList_length$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _WebKitAnimationListWrappingImplementation$Dart._get__WebKitAnimationList_length$$member_(_this);
}
;
_WebKitAnimationListWrappingImplementation$Dart._get__WebKitAnimationList_length$$getter_ = function _get__WebKitAnimationList_length$$getter_(){
  return _WebKitAnimationListWrappingImplementation$Dart._get__WebKitAnimationList_length$$named_;
}
;
_WebKitAnimationListWrappingImplementation$Dart.prototype.item$member = function(index){
  return _WebKitAnimationListWrappingImplementation$Dart._item$$member_(this, index);
}
;
_WebKitAnimationListWrappingImplementation$Dart.prototype.item$named = function($n, $o, index){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _WebKitAnimationListWrappingImplementation$Dart.prototype.item$member.call(this, index);
}
;
_WebKitAnimationListWrappingImplementation$Dart.prototype.item$getter = function item$getter(){
  return $bind(_WebKitAnimationListWrappingImplementation$Dart.prototype.item$named, this);
}
;
_WebKitAnimationListWrappingImplementation$Dart._item$$member_ = function(receiver, index){
  return native__WebKitAnimationListWrappingImplementation__item(receiver, index);
}
;
_WebKitAnimationListWrappingImplementation$Dart._item$$named_ = function($n, $o, receiver, index){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _WebKitAnimationListWrappingImplementation$Dart._item$$member_(receiver, index);
}
;
_WebKitAnimationListWrappingImplementation$Dart._item$$getter_ = function _item$$getter_(){
  return _WebKitAnimationListWrappingImplementation$Dart._item$$named_;
}
;
_WebKitAnimationListWrappingImplementation$Dart.prototype.typeName$named = function(){
  return this.typeName$getter().apply(this, arguments);
}
;
_WebKitAnimationListWrappingImplementation$Dart.prototype.typeName$getter = function(){
  return 'WebKitAnimationList';
}
;
