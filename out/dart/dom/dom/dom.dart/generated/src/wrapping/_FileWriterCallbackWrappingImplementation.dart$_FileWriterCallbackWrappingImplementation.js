function _FileWriterCallbackWrappingImplementation$Dart(){
}

_FileWriterCallbackWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('_FileWriterCallbackWrappingImplementation$Dart'), _FileWriterCallbackWrappingImplementation$Dart.$RTTimplements);
}
;
_FileWriterCallbackWrappingImplementation$Dart.$RTTimplements = function(rtt){
  _FileWriterCallbackWrappingImplementation$Dart.$addTo(rtt);
}
;
_FileWriterCallbackWrappingImplementation$Dart.$addTo = function(target){
  var rtt = _FileWriterCallbackWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  DOMWrapperBase$Dart.$addTo(target);
  FileWriterCallback$Dart.$addTo(target);
}
;
_FileWriterCallbackWrappingImplementation$Dart.prototype.$implements$_FileWriterCallbackWrappingImplementation$Dart = 1;
_FileWriterCallbackWrappingImplementation$Dart.prototype.$implements$FileWriterCallback$Dart = 1;
_FileWriterCallbackWrappingImplementation$Dart.prototype.$implements$DOMWrapperBase$Dart = 1;
_FileWriterCallbackWrappingImplementation$Dart.prototype.$implements$DOMType$Dart = 1;
_FileWriterCallbackWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(_FileWriterCallbackWrappingImplementation$Dart, DOMWrapperBase$Dart);
_FileWriterCallbackWrappingImplementation$Dart.$Constructor = function(){
  DOMWrapperBase$Dart.$Constructor.call(this);
}
;
_FileWriterCallbackWrappingImplementation$Dart.$Initializer = function(){
  DOMWrapperBase$Dart.$Initializer.call(this);
}
;
_FileWriterCallbackWrappingImplementation$Dart._FileWriterCallbackWrappingImplementation$$Factory = function(){
  var tmp$0 = new _FileWriterCallbackWrappingImplementation$Dart;
  tmp$0.$typeInfo = _FileWriterCallbackWrappingImplementation$Dart.$lookupRTT();
  _FileWriterCallbackWrappingImplementation$Dart.$Initializer.call(tmp$0);
  _FileWriterCallbackWrappingImplementation$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
_FileWriterCallbackWrappingImplementation$Dart.create__FileWriterCallbackWrappingImplementation$member = function(){
  return _FileWriterCallbackWrappingImplementation$Dart._FileWriterCallbackWrappingImplementation$$Factory();
}
;
_FileWriterCallbackWrappingImplementation$Dart.create__FileWriterCallbackWrappingImplementation$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _FileWriterCallbackWrappingImplementation$Dart.create__FileWriterCallbackWrappingImplementation$member();
}
;
function native__FileWriterCallbackWrappingImplementation_create__FileWriterCallbackWrappingImplementation(){
  return _FileWriterCallbackWrappingImplementation$Dart.create__FileWriterCallbackWrappingImplementation$member();
}

_FileWriterCallbackWrappingImplementation$Dart.create__FileWriterCallbackWrappingImplementation$getter = function create__FileWriterCallbackWrappingImplementation$getter(){
  return _FileWriterCallbackWrappingImplementation$Dart.create__FileWriterCallbackWrappingImplementation$named;
}
;
_FileWriterCallbackWrappingImplementation$Dart.prototype.handleEvent$member = function(fileWriter){
  return _FileWriterCallbackWrappingImplementation$Dart._handleEvent$$member_(this, fileWriter);
}
;
_FileWriterCallbackWrappingImplementation$Dart.prototype.handleEvent$named = function($n, $o, fileWriter){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _FileWriterCallbackWrappingImplementation$Dart.prototype.handleEvent$member.call(this, fileWriter);
}
;
_FileWriterCallbackWrappingImplementation$Dart.prototype.handleEvent$getter = function handleEvent$getter(){
  return $bind(_FileWriterCallbackWrappingImplementation$Dart.prototype.handleEvent$named, this);
}
;
_FileWriterCallbackWrappingImplementation$Dart._handleEvent$$member_ = function(receiver, fileWriter){
  return native__FileWriterCallbackWrappingImplementation__handleEvent(receiver, fileWriter);
}
;
_FileWriterCallbackWrappingImplementation$Dart._handleEvent$$named_ = function($n, $o, receiver, fileWriter){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _FileWriterCallbackWrappingImplementation$Dart._handleEvent$$member_(receiver, fileWriter);
}
;
_FileWriterCallbackWrappingImplementation$Dart._handleEvent$$getter_ = function _handleEvent$$getter_(){
  return _FileWriterCallbackWrappingImplementation$Dart._handleEvent$$named_;
}
;
_FileWriterCallbackWrappingImplementation$Dart.prototype.typeName$named = function(){
  return this.typeName$getter().apply(this, arguments);
}
;
_FileWriterCallbackWrappingImplementation$Dart.prototype.typeName$getter = function(){
  return 'FileWriterCallback';
}
;
