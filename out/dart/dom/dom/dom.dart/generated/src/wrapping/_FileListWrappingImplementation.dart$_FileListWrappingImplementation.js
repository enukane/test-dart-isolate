function _FileListWrappingImplementation$Dart(){
}

_FileListWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('_FileListWrappingImplementation$Dart'), _FileListWrappingImplementation$Dart.$RTTimplements);
}
;
_FileListWrappingImplementation$Dart.$RTTimplements = function(rtt){
  _FileListWrappingImplementation$Dart.$addTo(rtt);
}
;
_FileListWrappingImplementation$Dart.$addTo = function(target){
  var rtt = _FileListWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  DOMWrapperBase$Dart.$addTo(target);
  FileList$Dart.$addTo(target);
}
;
_FileListWrappingImplementation$Dart.prototype.$implements$_FileListWrappingImplementation$Dart = 1;
_FileListWrappingImplementation$Dart.prototype.$implements$FileList$Dart = 1;
_FileListWrappingImplementation$Dart.prototype.$implements$DOMWrapperBase$Dart = 1;
_FileListWrappingImplementation$Dart.prototype.$implements$DOMType$Dart = 1;
_FileListWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(_FileListWrappingImplementation$Dart, DOMWrapperBase$Dart);
_FileListWrappingImplementation$Dart.$Constructor = function(){
  DOMWrapperBase$Dart.$Constructor.call(this);
}
;
_FileListWrappingImplementation$Dart.$Initializer = function(){
  DOMWrapperBase$Dart.$Initializer.call(this);
}
;
_FileListWrappingImplementation$Dart._FileListWrappingImplementation$$Factory = function(){
  var tmp$0 = new _FileListWrappingImplementation$Dart;
  tmp$0.$typeInfo = _FileListWrappingImplementation$Dart.$lookupRTT();
  _FileListWrappingImplementation$Dart.$Initializer.call(tmp$0);
  _FileListWrappingImplementation$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
_FileListWrappingImplementation$Dart.create__FileListWrappingImplementation$member = function(){
  return _FileListWrappingImplementation$Dart._FileListWrappingImplementation$$Factory();
}
;
_FileListWrappingImplementation$Dart.create__FileListWrappingImplementation$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _FileListWrappingImplementation$Dart.create__FileListWrappingImplementation$member();
}
;
function native__FileListWrappingImplementation_create__FileListWrappingImplementation(){
  return _FileListWrappingImplementation$Dart.create__FileListWrappingImplementation$member();
}

_FileListWrappingImplementation$Dart.create__FileListWrappingImplementation$getter = function create__FileListWrappingImplementation$getter(){
  return _FileListWrappingImplementation$Dart.create__FileListWrappingImplementation$named;
}
;
_FileListWrappingImplementation$Dart.prototype.length$named = function(){
  return this.length$getter().apply(this, arguments);
}
;
_FileListWrappingImplementation$Dart.prototype.length$getter = function(){
  return _FileListWrappingImplementation$Dart._get__FileList_length$$member_(this);
}
;
_FileListWrappingImplementation$Dart._get__FileList_length$$member_ = function(_this){
  return native__FileListWrappingImplementation__get__FileList_length(_this);
}
;
_FileListWrappingImplementation$Dart._get__FileList_length$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _FileListWrappingImplementation$Dart._get__FileList_length$$member_(_this);
}
;
_FileListWrappingImplementation$Dart._get__FileList_length$$getter_ = function _get__FileList_length$$getter_(){
  return _FileListWrappingImplementation$Dart._get__FileList_length$$named_;
}
;
_FileListWrappingImplementation$Dart.prototype.item$member = function(index){
  return _FileListWrappingImplementation$Dart._item$$member_(this, index);
}
;
_FileListWrappingImplementation$Dart.prototype.item$named = function($n, $o, index){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _FileListWrappingImplementation$Dart.prototype.item$member.call(this, index);
}
;
_FileListWrappingImplementation$Dart.prototype.item$getter = function item$getter(){
  return $bind(_FileListWrappingImplementation$Dart.prototype.item$named, this);
}
;
_FileListWrappingImplementation$Dart._item$$member_ = function(receiver, index){
  return native__FileListWrappingImplementation__item(receiver, index);
}
;
_FileListWrappingImplementation$Dart._item$$named_ = function($n, $o, receiver, index){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _FileListWrappingImplementation$Dart._item$$member_(receiver, index);
}
;
_FileListWrappingImplementation$Dart._item$$getter_ = function _item$$getter_(){
  return _FileListWrappingImplementation$Dart._item$$named_;
}
;
_FileListWrappingImplementation$Dart.prototype.typeName$named = function(){
  return this.typeName$getter().apply(this, arguments);
}
;
_FileListWrappingImplementation$Dart.prototype.typeName$getter = function(){
  return 'FileList';
}
;
