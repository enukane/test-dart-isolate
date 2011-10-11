function _SpeechInputEventWrappingImplementation$Dart(){
}

_SpeechInputEventWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('_SpeechInputEventWrappingImplementation$Dart'), _SpeechInputEventWrappingImplementation$Dart.$RTTimplements);
}
;
_SpeechInputEventWrappingImplementation$Dart.$RTTimplements = function(rtt){
  _SpeechInputEventWrappingImplementation$Dart.$addTo(rtt);
}
;
_SpeechInputEventWrappingImplementation$Dart.$addTo = function(target){
  var rtt = _SpeechInputEventWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  _EventWrappingImplementation$Dart.$addTo(target);
  SpeechInputEvent$Dart.$addTo(target);
}
;
_SpeechInputEventWrappingImplementation$Dart.prototype.$implements$_SpeechInputEventWrappingImplementation$Dart = 1;
_SpeechInputEventWrappingImplementation$Dart.prototype.$implements$SpeechInputEvent$Dart = 1;
_SpeechInputEventWrappingImplementation$Dart.prototype.$implements$Event$Dart = 1;
_SpeechInputEventWrappingImplementation$Dart.prototype.$implements$_EventWrappingImplementation$Dart = 1;
_SpeechInputEventWrappingImplementation$Dart.prototype.$implements$DOMWrapperBase$Dart = 1;
_SpeechInputEventWrappingImplementation$Dart.prototype.$implements$DOMType$Dart = 1;
_SpeechInputEventWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(_SpeechInputEventWrappingImplementation$Dart, _EventWrappingImplementation$Dart);
_SpeechInputEventWrappingImplementation$Dart.$Constructor = function(){
  _EventWrappingImplementation$Dart.$Constructor.call(this);
}
;
_SpeechInputEventWrappingImplementation$Dart.$Initializer = function(){
  _EventWrappingImplementation$Dart.$Initializer.call(this);
}
;
_SpeechInputEventWrappingImplementation$Dart._SpeechInputEventWrappingImplementation$$Factory = function(){
  var tmp$0 = new _SpeechInputEventWrappingImplementation$Dart;
  tmp$0.$typeInfo = _SpeechInputEventWrappingImplementation$Dart.$lookupRTT();
  _SpeechInputEventWrappingImplementation$Dart.$Initializer.call(tmp$0);
  _SpeechInputEventWrappingImplementation$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
_SpeechInputEventWrappingImplementation$Dart.create__SpeechInputEventWrappingImplementation$member = function(){
  return _SpeechInputEventWrappingImplementation$Dart._SpeechInputEventWrappingImplementation$$Factory();
}
;
_SpeechInputEventWrappingImplementation$Dart.create__SpeechInputEventWrappingImplementation$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _SpeechInputEventWrappingImplementation$Dart.create__SpeechInputEventWrappingImplementation$member();
}
;
function native__SpeechInputEventWrappingImplementation_create__SpeechInputEventWrappingImplementation(){
  return _SpeechInputEventWrappingImplementation$Dart.create__SpeechInputEventWrappingImplementation$member();
}

_SpeechInputEventWrappingImplementation$Dart.create__SpeechInputEventWrappingImplementation$getter = function create__SpeechInputEventWrappingImplementation$getter(){
  return _SpeechInputEventWrappingImplementation$Dart.create__SpeechInputEventWrappingImplementation$named;
}
;
_SpeechInputEventWrappingImplementation$Dart.prototype.results$named = function(){
  return this.results$getter().apply(this, arguments);
}
;
_SpeechInputEventWrappingImplementation$Dart.prototype.results$getter = function(){
  return _SpeechInputEventWrappingImplementation$Dart._get__SpeechInputEvent_results$$member_(this);
}
;
_SpeechInputEventWrappingImplementation$Dart._get__SpeechInputEvent_results$$member_ = function(_this){
  return native__SpeechInputEventWrappingImplementation__get__SpeechInputEvent_results(_this);
}
;
_SpeechInputEventWrappingImplementation$Dart._get__SpeechInputEvent_results$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _SpeechInputEventWrappingImplementation$Dart._get__SpeechInputEvent_results$$member_(_this);
}
;
_SpeechInputEventWrappingImplementation$Dart._get__SpeechInputEvent_results$$getter_ = function _get__SpeechInputEvent_results$$getter_(){
  return _SpeechInputEventWrappingImplementation$Dart._get__SpeechInputEvent_results$$named_;
}
;
_SpeechInputEventWrappingImplementation$Dart.prototype.typeName$named = function(){
  return this.typeName$getter().apply(this, arguments);
}
;
_SpeechInputEventWrappingImplementation$Dart.prototype.typeName$getter = function(){
  return 'SpeechInputEvent';
}
;
