function _ImageDataWrappingImplementation$Dart(){
}

_ImageDataWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('_ImageDataWrappingImplementation$Dart'), _ImageDataWrappingImplementation$Dart.$RTTimplements);
}
;
_ImageDataWrappingImplementation$Dart.$RTTimplements = function(rtt){
  _ImageDataWrappingImplementation$Dart.$addTo(rtt);
}
;
_ImageDataWrappingImplementation$Dart.$addTo = function(target){
  var rtt = _ImageDataWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  DOMWrapperBase$Dart.$addTo(target);
  ImageData$Dart.$addTo(target);
}
;
_ImageDataWrappingImplementation$Dart.prototype.$implements$_ImageDataWrappingImplementation$Dart = 1;
_ImageDataWrappingImplementation$Dart.prototype.$implements$ImageData$Dart = 1;
_ImageDataWrappingImplementation$Dart.prototype.$implements$DOMWrapperBase$Dart = 1;
_ImageDataWrappingImplementation$Dart.prototype.$implements$DOMType$Dart = 1;
_ImageDataWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(_ImageDataWrappingImplementation$Dart, DOMWrapperBase$Dart);
_ImageDataWrappingImplementation$Dart.$Constructor = function(){
  DOMWrapperBase$Dart.$Constructor.call(this);
}
;
_ImageDataWrappingImplementation$Dart.$Initializer = function(){
  DOMWrapperBase$Dart.$Initializer.call(this);
}
;
_ImageDataWrappingImplementation$Dart._ImageDataWrappingImplementation$$Factory = function(){
  var tmp$0 = new _ImageDataWrappingImplementation$Dart;
  tmp$0.$typeInfo = _ImageDataWrappingImplementation$Dart.$lookupRTT();
  _ImageDataWrappingImplementation$Dart.$Initializer.call(tmp$0);
  _ImageDataWrappingImplementation$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
_ImageDataWrappingImplementation$Dart.create__ImageDataWrappingImplementation$member = function(){
  return _ImageDataWrappingImplementation$Dart._ImageDataWrappingImplementation$$Factory();
}
;
_ImageDataWrappingImplementation$Dart.create__ImageDataWrappingImplementation$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _ImageDataWrappingImplementation$Dart.create__ImageDataWrappingImplementation$member();
}
;
function native__ImageDataWrappingImplementation_create__ImageDataWrappingImplementation(){
  return _ImageDataWrappingImplementation$Dart.create__ImageDataWrappingImplementation$member();
}

_ImageDataWrappingImplementation$Dart.create__ImageDataWrappingImplementation$getter = function create__ImageDataWrappingImplementation$getter(){
  return _ImageDataWrappingImplementation$Dart.create__ImageDataWrappingImplementation$named;
}
;
_ImageDataWrappingImplementation$Dart.prototype.data$named = function(){
  return this.data$getter().apply(this, arguments);
}
;
_ImageDataWrappingImplementation$Dart.prototype.data$getter = function(){
  return _ImageDataWrappingImplementation$Dart._get__ImageData_data$$member_(this);
}
;
_ImageDataWrappingImplementation$Dart._get__ImageData_data$$member_ = function(_this){
  return native__ImageDataWrappingImplementation__get__ImageData_data(_this);
}
;
_ImageDataWrappingImplementation$Dart._get__ImageData_data$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _ImageDataWrappingImplementation$Dart._get__ImageData_data$$member_(_this);
}
;
_ImageDataWrappingImplementation$Dart._get__ImageData_data$$getter_ = function _get__ImageData_data$$getter_(){
  return _ImageDataWrappingImplementation$Dart._get__ImageData_data$$named_;
}
;
_ImageDataWrappingImplementation$Dart.prototype.height$named = function(){
  return this.height$getter().apply(this, arguments);
}
;
_ImageDataWrappingImplementation$Dart.prototype.height$getter = function(){
  return _ImageDataWrappingImplementation$Dart._get__ImageData_height$$member_(this);
}
;
_ImageDataWrappingImplementation$Dart._get__ImageData_height$$member_ = function(_this){
  return native__ImageDataWrappingImplementation__get__ImageData_height(_this);
}
;
_ImageDataWrappingImplementation$Dart._get__ImageData_height$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _ImageDataWrappingImplementation$Dart._get__ImageData_height$$member_(_this);
}
;
_ImageDataWrappingImplementation$Dart._get__ImageData_height$$getter_ = function _get__ImageData_height$$getter_(){
  return _ImageDataWrappingImplementation$Dart._get__ImageData_height$$named_;
}
;
_ImageDataWrappingImplementation$Dart.prototype.width$named = function(){
  return this.width$getter().apply(this, arguments);
}
;
_ImageDataWrappingImplementation$Dart.prototype.width$getter = function(){
  return _ImageDataWrappingImplementation$Dart._get__ImageData_width$$member_(this);
}
;
_ImageDataWrappingImplementation$Dart._get__ImageData_width$$member_ = function(_this){
  return native__ImageDataWrappingImplementation__get__ImageData_width(_this);
}
;
_ImageDataWrappingImplementation$Dart._get__ImageData_width$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _ImageDataWrappingImplementation$Dart._get__ImageData_width$$member_(_this);
}
;
_ImageDataWrappingImplementation$Dart._get__ImageData_width$$getter_ = function _get__ImageData_width$$getter_(){
  return _ImageDataWrappingImplementation$Dart._get__ImageData_width$$named_;
}
;
_ImageDataWrappingImplementation$Dart.prototype.typeName$named = function(){
  return this.typeName$getter().apply(this, arguments);
}
;
_ImageDataWrappingImplementation$Dart.prototype.typeName$getter = function(){
  return 'ImageData';
}
;
