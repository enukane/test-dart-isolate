function _FileExceptionWrappingImplementation$Dart(){
}

_FileExceptionWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('_FileExceptionWrappingImplementation$Dart'), _FileExceptionWrappingImplementation$Dart.$RTTimplements);
}
;
_FileExceptionWrappingImplementation$Dart.$RTTimplements = function(rtt){
  _FileExceptionWrappingImplementation$Dart.$addTo(rtt);
}
;
_FileExceptionWrappingImplementation$Dart.$addTo = function(target){
  var rtt = _FileExceptionWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  DOMWrapperBase$Dart.$addTo(target);
  FileException$Dart.$addTo(target);
}
;
_FileExceptionWrappingImplementation$Dart.prototype.$implements$_FileExceptionWrappingImplementation$Dart = 1;
_FileExceptionWrappingImplementation$Dart.prototype.$implements$FileException$Dart = 1;
_FileExceptionWrappingImplementation$Dart.prototype.$implements$DOMWrapperBase$Dart = 1;
_FileExceptionWrappingImplementation$Dart.prototype.$implements$DOMType$Dart = 1;
_FileExceptionWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(_FileExceptionWrappingImplementation$Dart, DOMWrapperBase$Dart);
_FileExceptionWrappingImplementation$Dart.$Constructor = function(){
  DOMWrapperBase$Dart.$Constructor.call(this);
}
;
_FileExceptionWrappingImplementation$Dart.$Initializer = function(){
  DOMWrapperBase$Dart.$Initializer.call(this);
}
;
_FileExceptionWrappingImplementation$Dart._FileExceptionWrappingImplementation$$Factory = function(){
  var tmp$0 = new _FileExceptionWrappingImplementation$Dart;
  tmp$0.$typeInfo = _FileExceptionWrappingImplementation$Dart.$lookupRTT();
  _FileExceptionWrappingImplementation$Dart.$Initializer.call(tmp$0);
  _FileExceptionWrappingImplementation$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
_FileExceptionWrappingImplementation$Dart.create__FileExceptionWrappingImplementation$member = function(){
  return _FileExceptionWrappingImplementation$Dart._FileExceptionWrappingImplementation$$Factory();
}
;
_FileExceptionWrappingImplementation$Dart.create__FileExceptionWrappingImplementation$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _FileExceptionWrappingImplementation$Dart.create__FileExceptionWrappingImplementation$member();
}
;
function native__FileExceptionWrappingImplementation_create__FileExceptionWrappingImplementation(){
  return _FileExceptionWrappingImplementation$Dart.create__FileExceptionWrappingImplementation$member();
}

_FileExceptionWrappingImplementation$Dart.create__FileExceptionWrappingImplementation$getter = function create__FileExceptionWrappingImplementation$getter(){
  return _FileExceptionWrappingImplementation$Dart.create__FileExceptionWrappingImplementation$named;
}
;
_FileExceptionWrappingImplementation$Dart.prototype.code$named = function(){
  return this.code$getter().apply(this, arguments);
}
;
_FileExceptionWrappingImplementation$Dart.prototype.code$getter = function(){
  return _FileExceptionWrappingImplementation$Dart._get__FileException_code$$member_(this);
}
;
_FileExceptionWrappingImplementation$Dart._get__FileException_code$$member_ = function(_this){
  return native__FileExceptionWrappingImplementation__get__FileException_code(_this);
}
;
_FileExceptionWrappingImplementation$Dart._get__FileException_code$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _FileExceptionWrappingImplementation$Dart._get__FileException_code$$member_(_this);
}
;
_FileExceptionWrappingImplementation$Dart._get__FileException_code$$getter_ = function _get__FileException_code$$getter_(){
  return _FileExceptionWrappingImplementation$Dart._get__FileException_code$$named_;
}
;
_FileExceptionWrappingImplementation$Dart.prototype.message$named = function(){
  return this.message$getter().apply(this, arguments);
}
;
_FileExceptionWrappingImplementation$Dart.prototype.message$getter = function(){
  return _FileExceptionWrappingImplementation$Dart._get__FileException_message$$member_(this);
}
;
_FileExceptionWrappingImplementation$Dart._get__FileException_message$$member_ = function(_this){
  return native__FileExceptionWrappingImplementation__get__FileException_message(_this);
}
;
_FileExceptionWrappingImplementation$Dart._get__FileException_message$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _FileExceptionWrappingImplementation$Dart._get__FileException_message$$member_(_this);
}
;
_FileExceptionWrappingImplementation$Dart._get__FileException_message$$getter_ = function _get__FileException_message$$getter_(){
  return _FileExceptionWrappingImplementation$Dart._get__FileException_message$$named_;
}
;
_FileExceptionWrappingImplementation$Dart.prototype.name$named = function(){
  return this.name$getter().apply(this, arguments);
}
;
_FileExceptionWrappingImplementation$Dart.prototype.name$getter = function(){
  return _FileExceptionWrappingImplementation$Dart._get__FileException_name$$member_(this);
}
;
_FileExceptionWrappingImplementation$Dart._get__FileException_name$$member_ = function(_this){
  return native__FileExceptionWrappingImplementation__get__FileException_name(_this);
}
;
_FileExceptionWrappingImplementation$Dart._get__FileException_name$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _FileExceptionWrappingImplementation$Dart._get__FileException_name$$member_(_this);
}
;
_FileExceptionWrappingImplementation$Dart._get__FileException_name$$getter_ = function _get__FileException_name$$getter_(){
  return _FileExceptionWrappingImplementation$Dart._get__FileException_name$$named_;
}
;
_FileExceptionWrappingImplementation$Dart.prototype.typeName$named = function(){
  return this.typeName$getter().apply(this, arguments);
}
;
_FileExceptionWrappingImplementation$Dart.prototype.typeName$getter = function(){
  return 'FileException';
}
;
