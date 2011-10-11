function _FileSystemCallbackWrappingImplementation$Dart(){
}

_FileSystemCallbackWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('_FileSystemCallbackWrappingImplementation$Dart'), _FileSystemCallbackWrappingImplementation$Dart.$RTTimplements);
}
;
_FileSystemCallbackWrappingImplementation$Dart.$RTTimplements = function(rtt){
  _FileSystemCallbackWrappingImplementation$Dart.$addTo(rtt);
}
;
_FileSystemCallbackWrappingImplementation$Dart.$addTo = function(target){
  var rtt = _FileSystemCallbackWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  DOMWrapperBase$Dart.$addTo(target);
  FileSystemCallback$Dart.$addTo(target);
}
;
_FileSystemCallbackWrappingImplementation$Dart.prototype.$implements$_FileSystemCallbackWrappingImplementation$Dart = 1;
_FileSystemCallbackWrappingImplementation$Dart.prototype.$implements$FileSystemCallback$Dart = 1;
_FileSystemCallbackWrappingImplementation$Dart.prototype.$implements$DOMWrapperBase$Dart = 1;
_FileSystemCallbackWrappingImplementation$Dart.prototype.$implements$DOMType$Dart = 1;
_FileSystemCallbackWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(_FileSystemCallbackWrappingImplementation$Dart, DOMWrapperBase$Dart);
_FileSystemCallbackWrappingImplementation$Dart.$Constructor = function(){
  DOMWrapperBase$Dart.$Constructor.call(this);
}
;
_FileSystemCallbackWrappingImplementation$Dart.$Initializer = function(){
  DOMWrapperBase$Dart.$Initializer.call(this);
}
;
_FileSystemCallbackWrappingImplementation$Dart._FileSystemCallbackWrappingImplementation$$Factory = function(){
  var tmp$0 = new _FileSystemCallbackWrappingImplementation$Dart;
  tmp$0.$typeInfo = _FileSystemCallbackWrappingImplementation$Dart.$lookupRTT();
  _FileSystemCallbackWrappingImplementation$Dart.$Initializer.call(tmp$0);
  _FileSystemCallbackWrappingImplementation$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
_FileSystemCallbackWrappingImplementation$Dart.create__FileSystemCallbackWrappingImplementation$member = function(){
  return _FileSystemCallbackWrappingImplementation$Dart._FileSystemCallbackWrappingImplementation$$Factory();
}
;
_FileSystemCallbackWrappingImplementation$Dart.create__FileSystemCallbackWrappingImplementation$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _FileSystemCallbackWrappingImplementation$Dart.create__FileSystemCallbackWrappingImplementation$member();
}
;
function native__FileSystemCallbackWrappingImplementation_create__FileSystemCallbackWrappingImplementation(){
  return _FileSystemCallbackWrappingImplementation$Dart.create__FileSystemCallbackWrappingImplementation$member();
}

_FileSystemCallbackWrappingImplementation$Dart.create__FileSystemCallbackWrappingImplementation$getter = function create__FileSystemCallbackWrappingImplementation$getter(){
  return _FileSystemCallbackWrappingImplementation$Dart.create__FileSystemCallbackWrappingImplementation$named;
}
;
_FileSystemCallbackWrappingImplementation$Dart.prototype.handleEvent$member = function(fileSystem){
  return _FileSystemCallbackWrappingImplementation$Dart._handleEvent$$member_(this, fileSystem);
}
;
_FileSystemCallbackWrappingImplementation$Dart.prototype.handleEvent$named = function($n, $o, fileSystem){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _FileSystemCallbackWrappingImplementation$Dart.prototype.handleEvent$member.call(this, fileSystem);
}
;
_FileSystemCallbackWrappingImplementation$Dart.prototype.handleEvent$getter = function handleEvent$getter(){
  return $bind(_FileSystemCallbackWrappingImplementation$Dart.prototype.handleEvent$named, this);
}
;
_FileSystemCallbackWrappingImplementation$Dart._handleEvent$$member_ = function(receiver, fileSystem){
  return native__FileSystemCallbackWrappingImplementation__handleEvent(receiver, fileSystem);
}
;
_FileSystemCallbackWrappingImplementation$Dart._handleEvent$$named_ = function($n, $o, receiver, fileSystem){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _FileSystemCallbackWrappingImplementation$Dart._handleEvent$$member_(receiver, fileSystem);
}
;
_FileSystemCallbackWrappingImplementation$Dart._handleEvent$$getter_ = function _handleEvent$$getter_(){
  return _FileSystemCallbackWrappingImplementation$Dart._handleEvent$$named_;
}
;
_FileSystemCallbackWrappingImplementation$Dart.prototype.typeName$named = function(){
  return this.typeName$getter().apply(this, arguments);
}
;
_FileSystemCallbackWrappingImplementation$Dart.prototype.typeName$getter = function(){
  return 'FileSystemCallback';
}
;
