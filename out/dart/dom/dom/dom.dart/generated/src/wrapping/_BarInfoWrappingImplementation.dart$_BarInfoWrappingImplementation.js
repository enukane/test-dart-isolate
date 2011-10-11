function _BarInfoWrappingImplementation$Dart(){
}

_BarInfoWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('_BarInfoWrappingImplementation$Dart'), _BarInfoWrappingImplementation$Dart.$RTTimplements);
}
;
_BarInfoWrappingImplementation$Dart.$RTTimplements = function(rtt){
  _BarInfoWrappingImplementation$Dart.$addTo(rtt);
}
;
_BarInfoWrappingImplementation$Dart.$addTo = function(target){
  var rtt = _BarInfoWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  DOMWrapperBase$Dart.$addTo(target);
  BarInfo$Dart.$addTo(target);
}
;
_BarInfoWrappingImplementation$Dart.prototype.$implements$_BarInfoWrappingImplementation$Dart = 1;
_BarInfoWrappingImplementation$Dart.prototype.$implements$BarInfo$Dart = 1;
_BarInfoWrappingImplementation$Dart.prototype.$implements$BarProp$Dart = 1;
_BarInfoWrappingImplementation$Dart.prototype.$implements$DOMWrapperBase$Dart = 1;
_BarInfoWrappingImplementation$Dart.prototype.$implements$DOMType$Dart = 1;
_BarInfoWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(_BarInfoWrappingImplementation$Dart, DOMWrapperBase$Dart);
_BarInfoWrappingImplementation$Dart.$Constructor = function(){
  DOMWrapperBase$Dart.$Constructor.call(this);
}
;
_BarInfoWrappingImplementation$Dart.$Initializer = function(){
  DOMWrapperBase$Dart.$Initializer.call(this);
}
;
_BarInfoWrappingImplementation$Dart._BarInfoWrappingImplementation$$Factory = function(){
  var tmp$0 = new _BarInfoWrappingImplementation$Dart;
  tmp$0.$typeInfo = _BarInfoWrappingImplementation$Dart.$lookupRTT();
  _BarInfoWrappingImplementation$Dart.$Initializer.call(tmp$0);
  _BarInfoWrappingImplementation$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
_BarInfoWrappingImplementation$Dart.create__BarInfoWrappingImplementation$member = function(){
  return _BarInfoWrappingImplementation$Dart._BarInfoWrappingImplementation$$Factory();
}
;
_BarInfoWrappingImplementation$Dart.create__BarInfoWrappingImplementation$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _BarInfoWrappingImplementation$Dart.create__BarInfoWrappingImplementation$member();
}
;
function native__BarInfoWrappingImplementation_create__BarInfoWrappingImplementation(){
  return _BarInfoWrappingImplementation$Dart.create__BarInfoWrappingImplementation$member();
}

_BarInfoWrappingImplementation$Dart.create__BarInfoWrappingImplementation$getter = function create__BarInfoWrappingImplementation$getter(){
  return _BarInfoWrappingImplementation$Dart.create__BarInfoWrappingImplementation$named;
}
;
_BarInfoWrappingImplementation$Dart.prototype.visible$named = function(){
  return this.visible$getter().apply(this, arguments);
}
;
_BarInfoWrappingImplementation$Dart.prototype.visible$getter = function(){
  return _BarInfoWrappingImplementation$Dart._get__BarInfo_visible$$member_(this);
}
;
_BarInfoWrappingImplementation$Dart._get__BarInfo_visible$$member_ = function(_this){
  return native__BarInfoWrappingImplementation__get__BarInfo_visible(_this);
}
;
_BarInfoWrappingImplementation$Dart._get__BarInfo_visible$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _BarInfoWrappingImplementation$Dart._get__BarInfo_visible$$member_(_this);
}
;
_BarInfoWrappingImplementation$Dart._get__BarInfo_visible$$getter_ = function _get__BarInfo_visible$$getter_(){
  return _BarInfoWrappingImplementation$Dart._get__BarInfo_visible$$named_;
}
;
_BarInfoWrappingImplementation$Dart.prototype.typeName$named = function(){
  return this.typeName$getter().apply(this, arguments);
}
;
_BarInfoWrappingImplementation$Dart.prototype.typeName$getter = function(){
  return 'BarInfo';
}
;
