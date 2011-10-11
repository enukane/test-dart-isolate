function _BlobWrappingImplementation$Dart(){
}

_BlobWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('_BlobWrappingImplementation$Dart'), _BlobWrappingImplementation$Dart.$RTTimplements);
}
;
_BlobWrappingImplementation$Dart.$RTTimplements = function(rtt){
  _BlobWrappingImplementation$Dart.$addTo(rtt);
}
;
_BlobWrappingImplementation$Dart.$addTo = function(target){
  var rtt = _BlobWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  DOMWrapperBase$Dart.$addTo(target);
  Blob$Dart.$addTo(target);
}
;
_BlobWrappingImplementation$Dart.prototype.$implements$_BlobWrappingImplementation$Dart = 1;
_BlobWrappingImplementation$Dart.prototype.$implements$Blob$Dart = 1;
_BlobWrappingImplementation$Dart.prototype.$implements$DOMWrapperBase$Dart = 1;
_BlobWrappingImplementation$Dart.prototype.$implements$DOMType$Dart = 1;
_BlobWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(_BlobWrappingImplementation$Dart, DOMWrapperBase$Dart);
_BlobWrappingImplementation$Dart.$Constructor = function(){
  DOMWrapperBase$Dart.$Constructor.call(this);
}
;
_BlobWrappingImplementation$Dart.$Initializer = function(){
  DOMWrapperBase$Dart.$Initializer.call(this);
}
;
_BlobWrappingImplementation$Dart._BlobWrappingImplementation$$Factory = function(){
  var tmp$0 = new _BlobWrappingImplementation$Dart;
  tmp$0.$typeInfo = _BlobWrappingImplementation$Dart.$lookupRTT();
  _BlobWrappingImplementation$Dart.$Initializer.call(tmp$0);
  _BlobWrappingImplementation$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
_BlobWrappingImplementation$Dart.create__BlobWrappingImplementation$member = function(){
  return _BlobWrappingImplementation$Dart._BlobWrappingImplementation$$Factory();
}
;
_BlobWrappingImplementation$Dart.create__BlobWrappingImplementation$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _BlobWrappingImplementation$Dart.create__BlobWrappingImplementation$member();
}
;
function native__BlobWrappingImplementation_create__BlobWrappingImplementation(){
  return _BlobWrappingImplementation$Dart.create__BlobWrappingImplementation$member();
}

_BlobWrappingImplementation$Dart.create__BlobWrappingImplementation$getter = function create__BlobWrappingImplementation$getter(){
  return _BlobWrappingImplementation$Dart.create__BlobWrappingImplementation$named;
}
;
_BlobWrappingImplementation$Dart.prototype.size$named = function(){
  return this.size$getter().apply(this, arguments);
}
;
_BlobWrappingImplementation$Dart.prototype.size$getter = function(){
  return _BlobWrappingImplementation$Dart._get__Blob_size$$member_(this);
}
;
_BlobWrappingImplementation$Dart._get__Blob_size$$member_ = function(_this){
  return native__BlobWrappingImplementation__get__Blob_size(_this);
}
;
_BlobWrappingImplementation$Dart._get__Blob_size$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _BlobWrappingImplementation$Dart._get__Blob_size$$member_(_this);
}
;
_BlobWrappingImplementation$Dart._get__Blob_size$$getter_ = function _get__Blob_size$$getter_(){
  return _BlobWrappingImplementation$Dart._get__Blob_size$$named_;
}
;
_BlobWrappingImplementation$Dart.prototype.type$named = function(){
  return this.type$getter().apply(this, arguments);
}
;
_BlobWrappingImplementation$Dart.prototype.type$getter = function(){
  return _BlobWrappingImplementation$Dart._get__Blob_type$$member_(this);
}
;
_BlobWrappingImplementation$Dart._get__Blob_type$$member_ = function(_this){
  return native__BlobWrappingImplementation__get__Blob_type(_this);
}
;
_BlobWrappingImplementation$Dart._get__Blob_type$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _BlobWrappingImplementation$Dart._get__Blob_type$$member_(_this);
}
;
_BlobWrappingImplementation$Dart._get__Blob_type$$getter_ = function _get__Blob_type$$getter_(){
  return _BlobWrappingImplementation$Dart._get__Blob_type$$named_;
}
;
_BlobWrappingImplementation$Dart.prototype.typeName$named = function(){
  return this.typeName$getter().apply(this, arguments);
}
;
_BlobWrappingImplementation$Dart.prototype.typeName$getter = function(){
  return 'Blob';
}
;
