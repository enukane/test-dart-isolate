function _FileCallbackWrappingImplementation$Dart(){
}

_FileCallbackWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('_FileCallbackWrappingImplementation$Dart'), _FileCallbackWrappingImplementation$Dart.$RTTimplements);
}
;
_FileCallbackWrappingImplementation$Dart.$RTTimplements = function(rtt){
  _FileCallbackWrappingImplementation$Dart.$addTo(rtt);
}
;
_FileCallbackWrappingImplementation$Dart.$addTo = function(target){
  var rtt = _FileCallbackWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  DOMWrapperBase$Dart.$addTo(target);
  FileCallback$Dart.$addTo(target);
}
;
_FileCallbackWrappingImplementation$Dart.prototype.$implements$_FileCallbackWrappingImplementation$Dart = 1;
_FileCallbackWrappingImplementation$Dart.prototype.$implements$FileCallback$Dart = 1;
_FileCallbackWrappingImplementation$Dart.prototype.$implements$DOMWrapperBase$Dart = 1;
_FileCallbackWrappingImplementation$Dart.prototype.$implements$DOMType$Dart = 1;
_FileCallbackWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(_FileCallbackWrappingImplementation$Dart, DOMWrapperBase$Dart);
_FileCallbackWrappingImplementation$Dart.$Constructor = function(){
  DOMWrapperBase$Dart.$Constructor.call(this);
}
;
_FileCallbackWrappingImplementation$Dart.$Initializer = function(){
  DOMWrapperBase$Dart.$Initializer.call(this);
}
;
_FileCallbackWrappingImplementation$Dart._FileCallbackWrappingImplementation$$Factory = function(){
  var tmp$0 = new _FileCallbackWrappingImplementation$Dart;
  tmp$0.$typeInfo = _FileCallbackWrappingImplementation$Dart.$lookupRTT();
  _FileCallbackWrappingImplementation$Dart.$Initializer.call(tmp$0);
  _FileCallbackWrappingImplementation$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
_FileCallbackWrappingImplementation$Dart.create__FileCallbackWrappingImplementation$member = function(){
  return _FileCallbackWrappingImplementation$Dart._FileCallbackWrappingImplementation$$Factory();
}
;
_FileCallbackWrappingImplementation$Dart.create__FileCallbackWrappingImplementation$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _FileCallbackWrappingImplementation$Dart.create__FileCallbackWrappingImplementation$member();
}
;
function native__FileCallbackWrappingImplementation_create__FileCallbackWrappingImplementation(){
  return _FileCallbackWrappingImplementation$Dart.create__FileCallbackWrappingImplementation$member();
}

_FileCallbackWrappingImplementation$Dart.create__FileCallbackWrappingImplementation$getter = function create__FileCallbackWrappingImplementation$getter(){
  return _FileCallbackWrappingImplementation$Dart.create__FileCallbackWrappingImplementation$named;
}
;
_FileCallbackWrappingImplementation$Dart.prototype.handleEvent$member = function(file){
  return _FileCallbackWrappingImplementation$Dart._handleEvent$$member_(this, file);
}
;
_FileCallbackWrappingImplementation$Dart.prototype.handleEvent$named = function($n, $o, file){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _FileCallbackWrappingImplementation$Dart.prototype.handleEvent$member.call(this, file);
}
;
_FileCallbackWrappingImplementation$Dart.prototype.handleEvent$getter = function handleEvent$getter(){
  return $bind(_FileCallbackWrappingImplementation$Dart.prototype.handleEvent$named, this);
}
;
_FileCallbackWrappingImplementation$Dart._handleEvent$$member_ = function(receiver, file){
  return native__FileCallbackWrappingImplementation__handleEvent(receiver, file);
}
;
_FileCallbackWrappingImplementation$Dart._handleEvent$$named_ = function($n, $o, receiver, file){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _FileCallbackWrappingImplementation$Dart._handleEvent$$member_(receiver, file);
}
;
_FileCallbackWrappingImplementation$Dart._handleEvent$$getter_ = function _handleEvent$$getter_(){
  return _FileCallbackWrappingImplementation$Dart._handleEvent$$named_;
}
;
_FileCallbackWrappingImplementation$Dart.prototype.typeName$named = function(){
  return this.typeName$getter().apply(this, arguments);
}
;
_FileCallbackWrappingImplementation$Dart.prototype.typeName$getter = function(){
  return 'FileCallback';
}
;
