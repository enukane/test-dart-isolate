function _DOMFileSystemWrappingImplementation$Dart(){
}

_DOMFileSystemWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('_DOMFileSystemWrappingImplementation$Dart'), _DOMFileSystemWrappingImplementation$Dart.$RTTimplements);
}
;
_DOMFileSystemWrappingImplementation$Dart.$RTTimplements = function(rtt){
  _DOMFileSystemWrappingImplementation$Dart.$addTo(rtt);
}
;
_DOMFileSystemWrappingImplementation$Dart.$addTo = function(target){
  var rtt = _DOMFileSystemWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  DOMWrapperBase$Dart.$addTo(target);
  DOMFileSystem$Dart.$addTo(target);
}
;
_DOMFileSystemWrappingImplementation$Dart.prototype.$implements$_DOMFileSystemWrappingImplementation$Dart = 1;
_DOMFileSystemWrappingImplementation$Dart.prototype.$implements$DOMFileSystem$Dart = 1;
_DOMFileSystemWrappingImplementation$Dart.prototype.$implements$DOMWrapperBase$Dart = 1;
_DOMFileSystemWrappingImplementation$Dart.prototype.$implements$DOMType$Dart = 1;
_DOMFileSystemWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(_DOMFileSystemWrappingImplementation$Dart, DOMWrapperBase$Dart);
_DOMFileSystemWrappingImplementation$Dart.$Constructor = function(){
  DOMWrapperBase$Dart.$Constructor.call(this);
}
;
_DOMFileSystemWrappingImplementation$Dart.$Initializer = function(){
  DOMWrapperBase$Dart.$Initializer.call(this);
}
;
_DOMFileSystemWrappingImplementation$Dart._DOMFileSystemWrappingImplementation$$Factory = function(){
  var tmp$0 = new _DOMFileSystemWrappingImplementation$Dart;
  tmp$0.$typeInfo = _DOMFileSystemWrappingImplementation$Dart.$lookupRTT();
  _DOMFileSystemWrappingImplementation$Dart.$Initializer.call(tmp$0);
  _DOMFileSystemWrappingImplementation$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
_DOMFileSystemWrappingImplementation$Dart.create__DOMFileSystemWrappingImplementation$member = function(){
  return _DOMFileSystemWrappingImplementation$Dart._DOMFileSystemWrappingImplementation$$Factory();
}
;
_DOMFileSystemWrappingImplementation$Dart.create__DOMFileSystemWrappingImplementation$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _DOMFileSystemWrappingImplementation$Dart.create__DOMFileSystemWrappingImplementation$member();
}
;
function native__DOMFileSystemWrappingImplementation_create__DOMFileSystemWrappingImplementation(){
  return _DOMFileSystemWrappingImplementation$Dart.create__DOMFileSystemWrappingImplementation$member();
}

_DOMFileSystemWrappingImplementation$Dart.create__DOMFileSystemWrappingImplementation$getter = function create__DOMFileSystemWrappingImplementation$getter(){
  return _DOMFileSystemWrappingImplementation$Dart.create__DOMFileSystemWrappingImplementation$named;
}
;
_DOMFileSystemWrappingImplementation$Dart.prototype.name$named = function(){
  return this.name$getter().apply(this, arguments);
}
;
_DOMFileSystemWrappingImplementation$Dart.prototype.name$getter = function(){
  return _DOMFileSystemWrappingImplementation$Dart._get__DOMFileSystem_name$$member_(this);
}
;
_DOMFileSystemWrappingImplementation$Dart._get__DOMFileSystem_name$$member_ = function(_this){
  return native__DOMFileSystemWrappingImplementation__get__DOMFileSystem_name(_this);
}
;
_DOMFileSystemWrappingImplementation$Dart._get__DOMFileSystem_name$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMFileSystemWrappingImplementation$Dart._get__DOMFileSystem_name$$member_(_this);
}
;
_DOMFileSystemWrappingImplementation$Dart._get__DOMFileSystem_name$$getter_ = function _get__DOMFileSystem_name$$getter_(){
  return _DOMFileSystemWrappingImplementation$Dart._get__DOMFileSystem_name$$named_;
}
;
_DOMFileSystemWrappingImplementation$Dart.prototype.root$named = function(){
  return this.root$getter().apply(this, arguments);
}
;
_DOMFileSystemWrappingImplementation$Dart.prototype.root$getter = function(){
  return _DOMFileSystemWrappingImplementation$Dart._get__DOMFileSystem_root$$member_(this);
}
;
_DOMFileSystemWrappingImplementation$Dart._get__DOMFileSystem_root$$member_ = function(_this){
  return native__DOMFileSystemWrappingImplementation__get__DOMFileSystem_root(_this);
}
;
_DOMFileSystemWrappingImplementation$Dart._get__DOMFileSystem_root$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMFileSystemWrappingImplementation$Dart._get__DOMFileSystem_root$$member_(_this);
}
;
_DOMFileSystemWrappingImplementation$Dart._get__DOMFileSystem_root$$getter_ = function _get__DOMFileSystem_root$$getter_(){
  return _DOMFileSystemWrappingImplementation$Dart._get__DOMFileSystem_root$$named_;
}
;
_DOMFileSystemWrappingImplementation$Dart.prototype.typeName$named = function(){
  return this.typeName$getter().apply(this, arguments);
}
;
_DOMFileSystemWrappingImplementation$Dart.prototype.typeName$getter = function(){
  return 'DOMFileSystem';
}
;
