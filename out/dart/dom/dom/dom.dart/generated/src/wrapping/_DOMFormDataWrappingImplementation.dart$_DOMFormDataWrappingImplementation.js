function _DOMFormDataWrappingImplementation$Dart(){
}

_DOMFormDataWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('_DOMFormDataWrappingImplementation$Dart'), _DOMFormDataWrappingImplementation$Dart.$RTTimplements);
}
;
_DOMFormDataWrappingImplementation$Dart.$RTTimplements = function(rtt){
  _DOMFormDataWrappingImplementation$Dart.$addTo(rtt);
}
;
_DOMFormDataWrappingImplementation$Dart.$addTo = function(target){
  var rtt = _DOMFormDataWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  DOMWrapperBase$Dart.$addTo(target);
  DOMFormData$Dart.$addTo(target);
}
;
_DOMFormDataWrappingImplementation$Dart.prototype.$implements$_DOMFormDataWrappingImplementation$Dart = 1;
_DOMFormDataWrappingImplementation$Dart.prototype.$implements$DOMFormData$Dart = 1;
_DOMFormDataWrappingImplementation$Dart.prototype.$implements$FormData$Dart = 1;
_DOMFormDataWrappingImplementation$Dart.prototype.$implements$DOMWrapperBase$Dart = 1;
_DOMFormDataWrappingImplementation$Dart.prototype.$implements$DOMType$Dart = 1;
_DOMFormDataWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(_DOMFormDataWrappingImplementation$Dart, DOMWrapperBase$Dart);
_DOMFormDataWrappingImplementation$Dart.$Constructor = function(){
  DOMWrapperBase$Dart.$Constructor.call(this);
}
;
_DOMFormDataWrappingImplementation$Dart.$Initializer = function(){
  DOMWrapperBase$Dart.$Initializer.call(this);
}
;
_DOMFormDataWrappingImplementation$Dart._DOMFormDataWrappingImplementation$$Factory = function(){
  var tmp$0 = new _DOMFormDataWrappingImplementation$Dart;
  tmp$0.$typeInfo = _DOMFormDataWrappingImplementation$Dart.$lookupRTT();
  _DOMFormDataWrappingImplementation$Dart.$Initializer.call(tmp$0);
  _DOMFormDataWrappingImplementation$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
_DOMFormDataWrappingImplementation$Dart.create__DOMFormDataWrappingImplementation$member = function(){
  return _DOMFormDataWrappingImplementation$Dart._DOMFormDataWrappingImplementation$$Factory();
}
;
_DOMFormDataWrappingImplementation$Dart.create__DOMFormDataWrappingImplementation$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _DOMFormDataWrappingImplementation$Dart.create__DOMFormDataWrappingImplementation$member();
}
;
function native__DOMFormDataWrappingImplementation_create__DOMFormDataWrappingImplementation(){
  return _DOMFormDataWrappingImplementation$Dart.create__DOMFormDataWrappingImplementation$member();
}

_DOMFormDataWrappingImplementation$Dart.create__DOMFormDataWrappingImplementation$getter = function create__DOMFormDataWrappingImplementation$getter(){
  return _DOMFormDataWrappingImplementation$Dart.create__DOMFormDataWrappingImplementation$named;
}
;
_DOMFormDataWrappingImplementation$Dart.prototype.append$member = function(name_0, value){
  _DOMFormDataWrappingImplementation$Dart._append$$member_(this, name_0, value);
  return;
}
;
_DOMFormDataWrappingImplementation$Dart.prototype.append$named = function($n, $o, name_0, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DOMFormDataWrappingImplementation$Dart.prototype.append$member.call(this, name_0, value);
}
;
_DOMFormDataWrappingImplementation$Dart.prototype.append$getter = function append$getter(){
  return $bind(_DOMFormDataWrappingImplementation$Dart.prototype.append$named, this);
}
;
_DOMFormDataWrappingImplementation$Dart._append$$member_ = function(receiver, name_0, value){
  return native__DOMFormDataWrappingImplementation__append(receiver, name_0, value);
}
;
_DOMFormDataWrappingImplementation$Dart._append$$named_ = function($n, $o, receiver, name_0, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return _DOMFormDataWrappingImplementation$Dart._append$$member_(receiver, name_0, value);
}
;
_DOMFormDataWrappingImplementation$Dart._append$$getter_ = function _append$$getter_(){
  return _DOMFormDataWrappingImplementation$Dart._append$$named_;
}
;
_DOMFormDataWrappingImplementation$Dart.prototype.typeName$named = function(){
  return this.typeName$getter().apply(this, arguments);
}
;
_DOMFormDataWrappingImplementation$Dart.prototype.typeName$getter = function(){
  return 'DOMFormData';
}
;
