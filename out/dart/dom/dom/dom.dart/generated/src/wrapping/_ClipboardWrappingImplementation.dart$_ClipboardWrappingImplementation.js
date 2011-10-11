function _ClipboardWrappingImplementation$Dart(){
}

_ClipboardWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('_ClipboardWrappingImplementation$Dart'), _ClipboardWrappingImplementation$Dart.$RTTimplements);
}
;
_ClipboardWrappingImplementation$Dart.$RTTimplements = function(rtt){
  _ClipboardWrappingImplementation$Dart.$addTo(rtt);
}
;
_ClipboardWrappingImplementation$Dart.$addTo = function(target){
  var rtt = _ClipboardWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  DOMWrapperBase$Dart.$addTo(target);
  Clipboard$Dart.$addTo(target);
}
;
_ClipboardWrappingImplementation$Dart.prototype.$implements$_ClipboardWrappingImplementation$Dart = 1;
_ClipboardWrappingImplementation$Dart.prototype.$implements$Clipboard$Dart = 1;
_ClipboardWrappingImplementation$Dart.prototype.$implements$DOMWrapperBase$Dart = 1;
_ClipboardWrappingImplementation$Dart.prototype.$implements$DOMType$Dart = 1;
_ClipboardWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(_ClipboardWrappingImplementation$Dart, DOMWrapperBase$Dart);
_ClipboardWrappingImplementation$Dart.$Constructor = function(){
  DOMWrapperBase$Dart.$Constructor.call(this);
}
;
_ClipboardWrappingImplementation$Dart.$Initializer = function(){
  DOMWrapperBase$Dart.$Initializer.call(this);
}
;
_ClipboardWrappingImplementation$Dart._ClipboardWrappingImplementation$$Factory = function(){
  var tmp$0 = new _ClipboardWrappingImplementation$Dart;
  tmp$0.$typeInfo = _ClipboardWrappingImplementation$Dart.$lookupRTT();
  _ClipboardWrappingImplementation$Dart.$Initializer.call(tmp$0);
  _ClipboardWrappingImplementation$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
_ClipboardWrappingImplementation$Dart.create__ClipboardWrappingImplementation$member = function(){
  return _ClipboardWrappingImplementation$Dart._ClipboardWrappingImplementation$$Factory();
}
;
_ClipboardWrappingImplementation$Dart.create__ClipboardWrappingImplementation$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _ClipboardWrappingImplementation$Dart.create__ClipboardWrappingImplementation$member();
}
;
function native__ClipboardWrappingImplementation_create__ClipboardWrappingImplementation(){
  return _ClipboardWrappingImplementation$Dart.create__ClipboardWrappingImplementation$member();
}

_ClipboardWrappingImplementation$Dart.create__ClipboardWrappingImplementation$getter = function create__ClipboardWrappingImplementation$getter(){
  return _ClipboardWrappingImplementation$Dart.create__ClipboardWrappingImplementation$named;
}
;
_ClipboardWrappingImplementation$Dart.prototype.dropEffect$named = function(){
  return this.dropEffect$getter().apply(this, arguments);
}
;
_ClipboardWrappingImplementation$Dart.prototype.dropEffect$getter = function(){
  return _ClipboardWrappingImplementation$Dart._get__Clipboard_dropEffect$$member_(this);
}
;
_ClipboardWrappingImplementation$Dart.prototype.dropEffect$setter = function(value){
  _ClipboardWrappingImplementation$Dart._set__Clipboard_dropEffect$$member_(this, value);
}
;
_ClipboardWrappingImplementation$Dart._get__Clipboard_dropEffect$$member_ = function(_this){
  return native__ClipboardWrappingImplementation__get__Clipboard_dropEffect(_this);
}
;
_ClipboardWrappingImplementation$Dart._get__Clipboard_dropEffect$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _ClipboardWrappingImplementation$Dart._get__Clipboard_dropEffect$$member_(_this);
}
;
_ClipboardWrappingImplementation$Dart._get__Clipboard_dropEffect$$getter_ = function _get__Clipboard_dropEffect$$getter_(){
  return _ClipboardWrappingImplementation$Dart._get__Clipboard_dropEffect$$named_;
}
;
_ClipboardWrappingImplementation$Dart._set__Clipboard_dropEffect$$member_ = function(_this, value){
  return native__ClipboardWrappingImplementation__set__Clipboard_dropEffect(_this, value);
}
;
_ClipboardWrappingImplementation$Dart._set__Clipboard_dropEffect$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _ClipboardWrappingImplementation$Dart._set__Clipboard_dropEffect$$member_(_this, value);
}
;
_ClipboardWrappingImplementation$Dart._set__Clipboard_dropEffect$$getter_ = function _set__Clipboard_dropEffect$$getter_(){
  return _ClipboardWrappingImplementation$Dart._set__Clipboard_dropEffect$$named_;
}
;
_ClipboardWrappingImplementation$Dart.prototype.effectAllowed$named = function(){
  return this.effectAllowed$getter().apply(this, arguments);
}
;
_ClipboardWrappingImplementation$Dart.prototype.effectAllowed$getter = function(){
  return _ClipboardWrappingImplementation$Dart._get__Clipboard_effectAllowed$$member_(this);
}
;
_ClipboardWrappingImplementation$Dart.prototype.effectAllowed$setter = function(value){
  _ClipboardWrappingImplementation$Dart._set__Clipboard_effectAllowed$$member_(this, value);
}
;
_ClipboardWrappingImplementation$Dart._get__Clipboard_effectAllowed$$member_ = function(_this){
  return native__ClipboardWrappingImplementation__get__Clipboard_effectAllowed(_this);
}
;
_ClipboardWrappingImplementation$Dart._get__Clipboard_effectAllowed$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _ClipboardWrappingImplementation$Dart._get__Clipboard_effectAllowed$$member_(_this);
}
;
_ClipboardWrappingImplementation$Dart._get__Clipboard_effectAllowed$$getter_ = function _get__Clipboard_effectAllowed$$getter_(){
  return _ClipboardWrappingImplementation$Dart._get__Clipboard_effectAllowed$$named_;
}
;
_ClipboardWrappingImplementation$Dart._set__Clipboard_effectAllowed$$member_ = function(_this, value){
  return native__ClipboardWrappingImplementation__set__Clipboard_effectAllowed(_this, value);
}
;
_ClipboardWrappingImplementation$Dart._set__Clipboard_effectAllowed$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _ClipboardWrappingImplementation$Dart._set__Clipboard_effectAllowed$$member_(_this, value);
}
;
_ClipboardWrappingImplementation$Dart._set__Clipboard_effectAllowed$$getter_ = function _set__Clipboard_effectAllowed$$getter_(){
  return _ClipboardWrappingImplementation$Dart._set__Clipboard_effectAllowed$$named_;
}
;
_ClipboardWrappingImplementation$Dart.prototype.files$named = function(){
  return this.files$getter().apply(this, arguments);
}
;
_ClipboardWrappingImplementation$Dart.prototype.files$getter = function(){
  return _ClipboardWrappingImplementation$Dart._get__Clipboard_files$$member_(this);
}
;
_ClipboardWrappingImplementation$Dart._get__Clipboard_files$$member_ = function(_this){
  return native__ClipboardWrappingImplementation__get__Clipboard_files(_this);
}
;
_ClipboardWrappingImplementation$Dart._get__Clipboard_files$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _ClipboardWrappingImplementation$Dart._get__Clipboard_files$$member_(_this);
}
;
_ClipboardWrappingImplementation$Dart._get__Clipboard_files$$getter_ = function _get__Clipboard_files$$getter_(){
  return _ClipboardWrappingImplementation$Dart._get__Clipboard_files$$named_;
}
;
_ClipboardWrappingImplementation$Dart.prototype.items$named = function(){
  return this.items$getter().apply(this, arguments);
}
;
_ClipboardWrappingImplementation$Dart.prototype.items$getter = function(){
  return _ClipboardWrappingImplementation$Dart._get__Clipboard_items$$member_(this);
}
;
_ClipboardWrappingImplementation$Dart._get__Clipboard_items$$member_ = function(_this){
  return native__ClipboardWrappingImplementation__get__Clipboard_items(_this);
}
;
_ClipboardWrappingImplementation$Dart._get__Clipboard_items$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _ClipboardWrappingImplementation$Dart._get__Clipboard_items$$member_(_this);
}
;
_ClipboardWrappingImplementation$Dart._get__Clipboard_items$$getter_ = function _get__Clipboard_items$$getter_(){
  return _ClipboardWrappingImplementation$Dart._get__Clipboard_items$$named_;
}
;
_ClipboardWrappingImplementation$Dart.prototype.clearData$member = function(type){
  if (type == null) {
    _ClipboardWrappingImplementation$Dart._clearData$$member_(this);
    return;
  }
   else {
    _ClipboardWrappingImplementation$Dart._clearData_2$$member_(this, type);
    return;
  }
}
;
_ClipboardWrappingImplementation$Dart.prototype.clearData$named = function($n, $o, type){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 0:
      type = $o.type?(++seen , $o.type):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _ClipboardWrappingImplementation$Dart.prototype.clearData$member.call(this, type);
}
;
_ClipboardWrappingImplementation$Dart.prototype.clearData$getter = function clearData$getter(){
  return $bind(_ClipboardWrappingImplementation$Dart.prototype.clearData$named, this);
}
;
_ClipboardWrappingImplementation$Dart._clearData$$member_ = function(receiver){
  return native__ClipboardWrappingImplementation__clearData(receiver);
}
;
_ClipboardWrappingImplementation$Dart._clearData$$named_ = function($n, $o, receiver){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _ClipboardWrappingImplementation$Dart._clearData$$member_(receiver);
}
;
_ClipboardWrappingImplementation$Dart._clearData$$getter_ = function _clearData$$getter_(){
  return _ClipboardWrappingImplementation$Dart._clearData$$named_;
}
;
_ClipboardWrappingImplementation$Dart._clearData_2$$member_ = function(receiver, type){
  return native__ClipboardWrappingImplementation__clearData_2(receiver, type);
}
;
_ClipboardWrappingImplementation$Dart._clearData_2$$named_ = function($n, $o, receiver, type){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _ClipboardWrappingImplementation$Dart._clearData_2$$member_(receiver, type);
}
;
_ClipboardWrappingImplementation$Dart._clearData_2$$getter_ = function _clearData_2$$getter_(){
  return _ClipboardWrappingImplementation$Dart._clearData_2$$named_;
}
;
_ClipboardWrappingImplementation$Dart.prototype.getData$member = function(type){
  _ClipboardWrappingImplementation$Dart._getData$$member_(this, type);
  return;
}
;
_ClipboardWrappingImplementation$Dart.prototype.getData$named = function($n, $o, type){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _ClipboardWrappingImplementation$Dart.prototype.getData$member.call(this, type);
}
;
_ClipboardWrappingImplementation$Dart.prototype.getData$getter = function getData$getter(){
  return $bind(_ClipboardWrappingImplementation$Dart.prototype.getData$named, this);
}
;
_ClipboardWrappingImplementation$Dart._getData$$member_ = function(receiver, type){
  return native__ClipboardWrappingImplementation__getData(receiver, type);
}
;
_ClipboardWrappingImplementation$Dart._getData$$named_ = function($n, $o, receiver, type){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _ClipboardWrappingImplementation$Dart._getData$$member_(receiver, type);
}
;
_ClipboardWrappingImplementation$Dart._getData$$getter_ = function _getData$$getter_(){
  return _ClipboardWrappingImplementation$Dart._getData$$named_;
}
;
_ClipboardWrappingImplementation$Dart.prototype.setData$member = function(type, data){
  return _ClipboardWrappingImplementation$Dart._setData$$member_(this, type, data);
}
;
_ClipboardWrappingImplementation$Dart.prototype.setData$named = function($n, $o, type, data){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _ClipboardWrappingImplementation$Dart.prototype.setData$member.call(this, type, data);
}
;
_ClipboardWrappingImplementation$Dart.prototype.setData$getter = function setData$getter(){
  return $bind(_ClipboardWrappingImplementation$Dart.prototype.setData$named, this);
}
;
_ClipboardWrappingImplementation$Dart._setData$$member_ = function(receiver, type, data){
  return native__ClipboardWrappingImplementation__setData(receiver, type, data);
}
;
_ClipboardWrappingImplementation$Dart._setData$$named_ = function($n, $o, receiver, type, data){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return _ClipboardWrappingImplementation$Dart._setData$$member_(receiver, type, data);
}
;
_ClipboardWrappingImplementation$Dart._setData$$getter_ = function _setData$$getter_(){
  return _ClipboardWrappingImplementation$Dart._setData$$named_;
}
;
_ClipboardWrappingImplementation$Dart.prototype.setDragImage$member = function(image, x, y){
  _ClipboardWrappingImplementation$Dart._setDragImage$$member_(this, image, x, y);
  return;
}
;
_ClipboardWrappingImplementation$Dart.prototype.setDragImage$named = function($n, $o, image, x, y){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return _ClipboardWrappingImplementation$Dart.prototype.setDragImage$member.call(this, image, x, y);
}
;
_ClipboardWrappingImplementation$Dart.prototype.setDragImage$getter = function setDragImage$getter(){
  return $bind(_ClipboardWrappingImplementation$Dart.prototype.setDragImage$named, this);
}
;
_ClipboardWrappingImplementation$Dart._setDragImage$$member_ = function(receiver, image, x, y){
  return native__ClipboardWrappingImplementation__setDragImage(receiver, image, x, y);
}
;
_ClipboardWrappingImplementation$Dart._setDragImage$$named_ = function($n, $o, receiver, image, x, y){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 4)
    $nsme();
  return _ClipboardWrappingImplementation$Dart._setDragImage$$member_(receiver, image, x, y);
}
;
_ClipboardWrappingImplementation$Dart._setDragImage$$getter_ = function _setDragImage$$getter_(){
  return _ClipboardWrappingImplementation$Dart._setDragImage$$named_;
}
;
_ClipboardWrappingImplementation$Dart.prototype.typeName$named = function(){
  return this.typeName$getter().apply(this, arguments);
}
;
_ClipboardWrappingImplementation$Dart.prototype.typeName$getter = function(){
  return 'Clipboard';
}
;
