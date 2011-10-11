function _XMLHttpRequestProgressEventWrappingImplementation$Dart(){
}

_XMLHttpRequestProgressEventWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('_XMLHttpRequestProgressEventWrappingImplementation$Dart'), _XMLHttpRequestProgressEventWrappingImplementation$Dart.$RTTimplements);
}
;
_XMLHttpRequestProgressEventWrappingImplementation$Dart.$RTTimplements = function(rtt){
  _XMLHttpRequestProgressEventWrappingImplementation$Dart.$addTo(rtt);
}
;
_XMLHttpRequestProgressEventWrappingImplementation$Dart.$addTo = function(target){
  var rtt = _XMLHttpRequestProgressEventWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  _ProgressEventWrappingImplementation$Dart.$addTo(target);
  XMLHttpRequestProgressEvent$Dart.$addTo(target);
}
;
_XMLHttpRequestProgressEventWrappingImplementation$Dart.prototype.$implements$_XMLHttpRequestProgressEventWrappingImplementation$Dart = 1;
_XMLHttpRequestProgressEventWrappingImplementation$Dart.prototype.$implements$XMLHttpRequestProgressEvent$Dart = 1;
_XMLHttpRequestProgressEventWrappingImplementation$Dart.prototype.$implements$ProgressEvent$Dart = 1;
_XMLHttpRequestProgressEventWrappingImplementation$Dart.prototype.$implements$Event$Dart = 1;
_XMLHttpRequestProgressEventWrappingImplementation$Dart.prototype.$implements$_ProgressEventWrappingImplementation$Dart = 1;
_XMLHttpRequestProgressEventWrappingImplementation$Dart.prototype.$implements$_EventWrappingImplementation$Dart = 1;
_XMLHttpRequestProgressEventWrappingImplementation$Dart.prototype.$implements$DOMWrapperBase$Dart = 1;
_XMLHttpRequestProgressEventWrappingImplementation$Dart.prototype.$implements$DOMType$Dart = 1;
_XMLHttpRequestProgressEventWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(_XMLHttpRequestProgressEventWrappingImplementation$Dart, _ProgressEventWrappingImplementation$Dart);
_XMLHttpRequestProgressEventWrappingImplementation$Dart.$Constructor = function(){
  _ProgressEventWrappingImplementation$Dart.$Constructor.call(this);
}
;
_XMLHttpRequestProgressEventWrappingImplementation$Dart.$Initializer = function(){
  _ProgressEventWrappingImplementation$Dart.$Initializer.call(this);
}
;
_XMLHttpRequestProgressEventWrappingImplementation$Dart._XMLHttpRequestProgressEventWrappingImplementation$$Factory = function(){
  var tmp$0 = new _XMLHttpRequestProgressEventWrappingImplementation$Dart;
  tmp$0.$typeInfo = _XMLHttpRequestProgressEventWrappingImplementation$Dart.$lookupRTT();
  _XMLHttpRequestProgressEventWrappingImplementation$Dart.$Initializer.call(tmp$0);
  _XMLHttpRequestProgressEventWrappingImplementation$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
_XMLHttpRequestProgressEventWrappingImplementation$Dart.create__XMLHttpRequestProgressEventWrappingImplementation$member = function(){
  return _XMLHttpRequestProgressEventWrappingImplementation$Dart._XMLHttpRequestProgressEventWrappingImplementation$$Factory();
}
;
_XMLHttpRequestProgressEventWrappingImplementation$Dart.create__XMLHttpRequestProgressEventWrappingImplementation$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _XMLHttpRequestProgressEventWrappingImplementation$Dart.create__XMLHttpRequestProgressEventWrappingImplementation$member();
}
;
function native__XMLHttpRequestProgressEventWrappingImplementation_create__XMLHttpRequestProgressEventWrappingImplementation(){
  return _XMLHttpRequestProgressEventWrappingImplementation$Dart.create__XMLHttpRequestProgressEventWrappingImplementation$member();
}

_XMLHttpRequestProgressEventWrappingImplementation$Dart.create__XMLHttpRequestProgressEventWrappingImplementation$getter = function create__XMLHttpRequestProgressEventWrappingImplementation$getter(){
  return _XMLHttpRequestProgressEventWrappingImplementation$Dart.create__XMLHttpRequestProgressEventWrappingImplementation$named;
}
;
_XMLHttpRequestProgressEventWrappingImplementation$Dart.prototype.position$named = function(){
  return this.position$getter().apply(this, arguments);
}
;
_XMLHttpRequestProgressEventWrappingImplementation$Dart.prototype.position$getter = function(){
  return _XMLHttpRequestProgressEventWrappingImplementation$Dart._get__XMLHttpRequestProgressEvent_position$$member_(this);
}
;
_XMLHttpRequestProgressEventWrappingImplementation$Dart._get__XMLHttpRequestProgressEvent_position$$member_ = function(_this){
  return native__XMLHttpRequestProgressEventWrappingImplementation__get__XMLHttpRequestProgressEvent_position(_this);
}
;
_XMLHttpRequestProgressEventWrappingImplementation$Dart._get__XMLHttpRequestProgressEvent_position$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _XMLHttpRequestProgressEventWrappingImplementation$Dart._get__XMLHttpRequestProgressEvent_position$$member_(_this);
}
;
_XMLHttpRequestProgressEventWrappingImplementation$Dart._get__XMLHttpRequestProgressEvent_position$$getter_ = function _get__XMLHttpRequestProgressEvent_position$$getter_(){
  return _XMLHttpRequestProgressEventWrappingImplementation$Dart._get__XMLHttpRequestProgressEvent_position$$named_;
}
;
_XMLHttpRequestProgressEventWrappingImplementation$Dart.prototype.totalSize$named = function(){
  return this.totalSize$getter().apply(this, arguments);
}
;
_XMLHttpRequestProgressEventWrappingImplementation$Dart.prototype.totalSize$getter = function(){
  return _XMLHttpRequestProgressEventWrappingImplementation$Dart._get__XMLHttpRequestProgressEvent_totalSize$$member_(this);
}
;
_XMLHttpRequestProgressEventWrappingImplementation$Dart._get__XMLHttpRequestProgressEvent_totalSize$$member_ = function(_this){
  return native__XMLHttpRequestProgressEventWrappingImplementation__get__XMLHttpRequestProgressEvent_totalSize(_this);
}
;
_XMLHttpRequestProgressEventWrappingImplementation$Dart._get__XMLHttpRequestProgressEvent_totalSize$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _XMLHttpRequestProgressEventWrappingImplementation$Dart._get__XMLHttpRequestProgressEvent_totalSize$$member_(_this);
}
;
_XMLHttpRequestProgressEventWrappingImplementation$Dart._get__XMLHttpRequestProgressEvent_totalSize$$getter_ = function _get__XMLHttpRequestProgressEvent_totalSize$$getter_(){
  return _XMLHttpRequestProgressEventWrappingImplementation$Dart._get__XMLHttpRequestProgressEvent_totalSize$$named_;
}
;
_XMLHttpRequestProgressEventWrappingImplementation$Dart.prototype.typeName$named = function(){
  return this.typeName$getter().apply(this, arguments);
}
;
_XMLHttpRequestProgressEventWrappingImplementation$Dart.prototype.typeName$getter = function(){
  return 'XMLHttpRequestProgressEvent';
}
;
