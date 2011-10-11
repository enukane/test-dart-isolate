function _ProgressEventWrappingImplementation$Dart(){
}

_ProgressEventWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('_ProgressEventWrappingImplementation$Dart'), _ProgressEventWrappingImplementation$Dart.$RTTimplements);
}
;
_ProgressEventWrappingImplementation$Dart.$RTTimplements = function(rtt){
  _ProgressEventWrappingImplementation$Dart.$addTo(rtt);
}
;
_ProgressEventWrappingImplementation$Dart.$addTo = function(target){
  var rtt = _ProgressEventWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  _EventWrappingImplementation$Dart.$addTo(target);
  ProgressEvent$Dart.$addTo(target);
}
;
_ProgressEventWrappingImplementation$Dart.prototype.$implements$_ProgressEventWrappingImplementation$Dart = 1;
_ProgressEventWrappingImplementation$Dart.prototype.$implements$ProgressEvent$Dart = 1;
_ProgressEventWrappingImplementation$Dart.prototype.$implements$Event$Dart = 1;
_ProgressEventWrappingImplementation$Dart.prototype.$implements$_EventWrappingImplementation$Dart = 1;
_ProgressEventWrappingImplementation$Dart.prototype.$implements$DOMWrapperBase$Dart = 1;
_ProgressEventWrappingImplementation$Dart.prototype.$implements$DOMType$Dart = 1;
_ProgressEventWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(_ProgressEventWrappingImplementation$Dart, _EventWrappingImplementation$Dart);
_ProgressEventWrappingImplementation$Dart.$Constructor = function(){
  _EventWrappingImplementation$Dart.$Constructor.call(this);
}
;
_ProgressEventWrappingImplementation$Dart.$Initializer = function(){
  _EventWrappingImplementation$Dart.$Initializer.call(this);
}
;
_ProgressEventWrappingImplementation$Dart._ProgressEventWrappingImplementation$$Factory = function(){
  var tmp$0 = new _ProgressEventWrappingImplementation$Dart;
  tmp$0.$typeInfo = _ProgressEventWrappingImplementation$Dart.$lookupRTT();
  _ProgressEventWrappingImplementation$Dart.$Initializer.call(tmp$0);
  _ProgressEventWrappingImplementation$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
_ProgressEventWrappingImplementation$Dart.create__ProgressEventWrappingImplementation$member = function(){
  return _ProgressEventWrappingImplementation$Dart._ProgressEventWrappingImplementation$$Factory();
}
;
_ProgressEventWrappingImplementation$Dart.create__ProgressEventWrappingImplementation$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _ProgressEventWrappingImplementation$Dart.create__ProgressEventWrappingImplementation$member();
}
;
function native__ProgressEventWrappingImplementation_create__ProgressEventWrappingImplementation(){
  return _ProgressEventWrappingImplementation$Dart.create__ProgressEventWrappingImplementation$member();
}

_ProgressEventWrappingImplementation$Dart.create__ProgressEventWrappingImplementation$getter = function create__ProgressEventWrappingImplementation$getter(){
  return _ProgressEventWrappingImplementation$Dart.create__ProgressEventWrappingImplementation$named;
}
;
_ProgressEventWrappingImplementation$Dart.prototype.lengthComputable$named = function(){
  return this.lengthComputable$getter().apply(this, arguments);
}
;
_ProgressEventWrappingImplementation$Dart.prototype.lengthComputable$getter = function(){
  return _ProgressEventWrappingImplementation$Dart._get__ProgressEvent_lengthComputable$$member_(this);
}
;
_ProgressEventWrappingImplementation$Dart._get__ProgressEvent_lengthComputable$$member_ = function(_this){
  return native__ProgressEventWrappingImplementation__get__ProgressEvent_lengthComputable(_this);
}
;
_ProgressEventWrappingImplementation$Dart._get__ProgressEvent_lengthComputable$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _ProgressEventWrappingImplementation$Dart._get__ProgressEvent_lengthComputable$$member_(_this);
}
;
_ProgressEventWrappingImplementation$Dart._get__ProgressEvent_lengthComputable$$getter_ = function _get__ProgressEvent_lengthComputable$$getter_(){
  return _ProgressEventWrappingImplementation$Dart._get__ProgressEvent_lengthComputable$$named_;
}
;
_ProgressEventWrappingImplementation$Dart.prototype.loaded$named = function(){
  return this.loaded$getter().apply(this, arguments);
}
;
_ProgressEventWrappingImplementation$Dart.prototype.loaded$getter = function(){
  return _ProgressEventWrappingImplementation$Dart._get__ProgressEvent_loaded$$member_(this);
}
;
_ProgressEventWrappingImplementation$Dart._get__ProgressEvent_loaded$$member_ = function(_this){
  return native__ProgressEventWrappingImplementation__get__ProgressEvent_loaded(_this);
}
;
_ProgressEventWrappingImplementation$Dart._get__ProgressEvent_loaded$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _ProgressEventWrappingImplementation$Dart._get__ProgressEvent_loaded$$member_(_this);
}
;
_ProgressEventWrappingImplementation$Dart._get__ProgressEvent_loaded$$getter_ = function _get__ProgressEvent_loaded$$getter_(){
  return _ProgressEventWrappingImplementation$Dart._get__ProgressEvent_loaded$$named_;
}
;
_ProgressEventWrappingImplementation$Dart.prototype.total$named = function(){
  return this.total$getter().apply(this, arguments);
}
;
_ProgressEventWrappingImplementation$Dart.prototype.total$getter = function(){
  return _ProgressEventWrappingImplementation$Dart._get__ProgressEvent_total$$member_(this);
}
;
_ProgressEventWrappingImplementation$Dart._get__ProgressEvent_total$$member_ = function(_this){
  return native__ProgressEventWrappingImplementation__get__ProgressEvent_total(_this);
}
;
_ProgressEventWrappingImplementation$Dart._get__ProgressEvent_total$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _ProgressEventWrappingImplementation$Dart._get__ProgressEvent_total$$member_(_this);
}
;
_ProgressEventWrappingImplementation$Dart._get__ProgressEvent_total$$getter_ = function _get__ProgressEvent_total$$getter_(){
  return _ProgressEventWrappingImplementation$Dart._get__ProgressEvent_total$$named_;
}
;
_ProgressEventWrappingImplementation$Dart.prototype.initProgressEvent$member = function(typeArg, canBubbleArg, cancelableArg, lengthComputableArg, loadedArg, totalArg){
  _ProgressEventWrappingImplementation$Dart._initProgressEvent$$member_(this, typeArg, canBubbleArg, cancelableArg, lengthComputableArg, loadedArg, totalArg);
  return;
}
;
_ProgressEventWrappingImplementation$Dart.prototype.initProgressEvent$named = function($n, $o, typeArg, canBubbleArg, cancelableArg, lengthComputableArg, loadedArg, totalArg){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 6)
    $nsme();
  return _ProgressEventWrappingImplementation$Dart.prototype.initProgressEvent$member.call(this, typeArg, canBubbleArg, cancelableArg, lengthComputableArg, loadedArg, totalArg);
}
;
_ProgressEventWrappingImplementation$Dart.prototype.initProgressEvent$getter = function initProgressEvent$getter(){
  return $bind(_ProgressEventWrappingImplementation$Dart.prototype.initProgressEvent$named, this);
}
;
_ProgressEventWrappingImplementation$Dart._initProgressEvent$$member_ = function(receiver, typeArg, canBubbleArg, cancelableArg, lengthComputableArg, loadedArg, totalArg){
  return native__ProgressEventWrappingImplementation__initProgressEvent(receiver, typeArg, canBubbleArg, cancelableArg, lengthComputableArg, loadedArg, totalArg);
}
;
_ProgressEventWrappingImplementation$Dart._initProgressEvent$$named_ = function($n, $o, receiver, typeArg, canBubbleArg, cancelableArg, lengthComputableArg, loadedArg, totalArg){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 7)
    $nsme();
  return _ProgressEventWrappingImplementation$Dart._initProgressEvent$$member_(receiver, typeArg, canBubbleArg, cancelableArg, lengthComputableArg, loadedArg, totalArg);
}
;
_ProgressEventWrappingImplementation$Dart._initProgressEvent$$getter_ = function _initProgressEvent$$getter_(){
  return _ProgressEventWrappingImplementation$Dart._initProgressEvent$$named_;
}
;
_ProgressEventWrappingImplementation$Dart.prototype.typeName$named = function(){
  return this.typeName$getter().apply(this, arguments);
}
;
_ProgressEventWrappingImplementation$Dart.prototype.typeName$getter = function(){
  return 'ProgressEvent';
}
;
