function _SpeechInputResultWrappingImplementation$Dart(){
}

_SpeechInputResultWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('_SpeechInputResultWrappingImplementation$Dart'), _SpeechInputResultWrappingImplementation$Dart.$RTTimplements);
}
;
_SpeechInputResultWrappingImplementation$Dart.$RTTimplements = function(rtt){
  _SpeechInputResultWrappingImplementation$Dart.$addTo(rtt);
}
;
_SpeechInputResultWrappingImplementation$Dart.$addTo = function(target){
  var rtt = _SpeechInputResultWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  DOMWrapperBase$Dart.$addTo(target);
  SpeechInputResult$Dart.$addTo(target);
}
;
_SpeechInputResultWrappingImplementation$Dart.prototype.$implements$_SpeechInputResultWrappingImplementation$Dart = 1;
_SpeechInputResultWrappingImplementation$Dart.prototype.$implements$SpeechInputResult$Dart = 1;
_SpeechInputResultWrappingImplementation$Dart.prototype.$implements$DOMWrapperBase$Dart = 1;
_SpeechInputResultWrappingImplementation$Dart.prototype.$implements$DOMType$Dart = 1;
_SpeechInputResultWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(_SpeechInputResultWrappingImplementation$Dart, DOMWrapperBase$Dart);
_SpeechInputResultWrappingImplementation$Dart.$Constructor = function(){
  DOMWrapperBase$Dart.$Constructor.call(this);
}
;
_SpeechInputResultWrappingImplementation$Dart.$Initializer = function(){
  DOMWrapperBase$Dart.$Initializer.call(this);
}
;
_SpeechInputResultWrappingImplementation$Dart._SpeechInputResultWrappingImplementation$$Factory = function(){
  var tmp$0 = new _SpeechInputResultWrappingImplementation$Dart;
  tmp$0.$typeInfo = _SpeechInputResultWrappingImplementation$Dart.$lookupRTT();
  _SpeechInputResultWrappingImplementation$Dart.$Initializer.call(tmp$0);
  _SpeechInputResultWrappingImplementation$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
_SpeechInputResultWrappingImplementation$Dart.create__SpeechInputResultWrappingImplementation$member = function(){
  return _SpeechInputResultWrappingImplementation$Dart._SpeechInputResultWrappingImplementation$$Factory();
}
;
_SpeechInputResultWrappingImplementation$Dart.create__SpeechInputResultWrappingImplementation$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _SpeechInputResultWrappingImplementation$Dart.create__SpeechInputResultWrappingImplementation$member();
}
;
function native__SpeechInputResultWrappingImplementation_create__SpeechInputResultWrappingImplementation(){
  return _SpeechInputResultWrappingImplementation$Dart.create__SpeechInputResultWrappingImplementation$member();
}

_SpeechInputResultWrappingImplementation$Dart.create__SpeechInputResultWrappingImplementation$getter = function create__SpeechInputResultWrappingImplementation$getter(){
  return _SpeechInputResultWrappingImplementation$Dart.create__SpeechInputResultWrappingImplementation$named;
}
;
_SpeechInputResultWrappingImplementation$Dart.prototype.confidence$named = function(){
  return this.confidence$getter().apply(this, arguments);
}
;
_SpeechInputResultWrappingImplementation$Dart.prototype.confidence$getter = function(){
  return _SpeechInputResultWrappingImplementation$Dart._get__SpeechInputResult_confidence$$member_(this);
}
;
_SpeechInputResultWrappingImplementation$Dart._get__SpeechInputResult_confidence$$member_ = function(_this){
  return native__SpeechInputResultWrappingImplementation__get__SpeechInputResult_confidence(_this);
}
;
_SpeechInputResultWrappingImplementation$Dart._get__SpeechInputResult_confidence$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _SpeechInputResultWrappingImplementation$Dart._get__SpeechInputResult_confidence$$member_(_this);
}
;
_SpeechInputResultWrappingImplementation$Dart._get__SpeechInputResult_confidence$$getter_ = function _get__SpeechInputResult_confidence$$getter_(){
  return _SpeechInputResultWrappingImplementation$Dart._get__SpeechInputResult_confidence$$named_;
}
;
_SpeechInputResultWrappingImplementation$Dart.prototype.utterance$named = function(){
  return this.utterance$getter().apply(this, arguments);
}
;
_SpeechInputResultWrappingImplementation$Dart.prototype.utterance$getter = function(){
  return _SpeechInputResultWrappingImplementation$Dart._get__SpeechInputResult_utterance$$member_(this);
}
;
_SpeechInputResultWrappingImplementation$Dart._get__SpeechInputResult_utterance$$member_ = function(_this){
  return native__SpeechInputResultWrappingImplementation__get__SpeechInputResult_utterance(_this);
}
;
_SpeechInputResultWrappingImplementation$Dart._get__SpeechInputResult_utterance$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _SpeechInputResultWrappingImplementation$Dart._get__SpeechInputResult_utterance$$member_(_this);
}
;
_SpeechInputResultWrappingImplementation$Dart._get__SpeechInputResult_utterance$$getter_ = function _get__SpeechInputResult_utterance$$getter_(){
  return _SpeechInputResultWrappingImplementation$Dart._get__SpeechInputResult_utterance$$named_;
}
;
_SpeechInputResultWrappingImplementation$Dart.prototype.typeName$named = function(){
  return this.typeName$getter().apply(this, arguments);
}
;
_SpeechInputResultWrappingImplementation$Dart.prototype.typeName$getter = function(){
  return 'SpeechInputResult';
}
;
