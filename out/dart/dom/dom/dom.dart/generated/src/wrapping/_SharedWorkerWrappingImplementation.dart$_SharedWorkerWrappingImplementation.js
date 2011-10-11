function _SharedWorkerWrappingImplementation$Dart(){
}

_SharedWorkerWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('_SharedWorkerWrappingImplementation$Dart'), _SharedWorkerWrappingImplementation$Dart.$RTTimplements);
}
;
_SharedWorkerWrappingImplementation$Dart.$RTTimplements = function(rtt){
  _SharedWorkerWrappingImplementation$Dart.$addTo(rtt);
}
;
_SharedWorkerWrappingImplementation$Dart.$addTo = function(target){
  var rtt = _SharedWorkerWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  _AbstractWorkerWrappingImplementation$Dart.$addTo(target);
  SharedWorker$Dart.$addTo(target);
}
;
_SharedWorkerWrappingImplementation$Dart.prototype.$implements$_SharedWorkerWrappingImplementation$Dart = 1;
_SharedWorkerWrappingImplementation$Dart.prototype.$implements$SharedWorker$Dart = 1;
_SharedWorkerWrappingImplementation$Dart.prototype.$implements$AbstractWorker$Dart = 1;
_SharedWorkerWrappingImplementation$Dart.prototype.$implements$EventTarget$Dart = 1;
_SharedWorkerWrappingImplementation$Dart.prototype.$implements$_AbstractWorkerWrappingImplementation$Dart = 1;
_SharedWorkerWrappingImplementation$Dart.prototype.$implements$DOMWrapperBase$Dart = 1;
_SharedWorkerWrappingImplementation$Dart.prototype.$implements$DOMType$Dart = 1;
_SharedWorkerWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(_SharedWorkerWrappingImplementation$Dart, _AbstractWorkerWrappingImplementation$Dart);
_SharedWorkerWrappingImplementation$Dart.$Constructor = function(){
  _AbstractWorkerWrappingImplementation$Dart.$Constructor.call(this);
}
;
_SharedWorkerWrappingImplementation$Dart.$Initializer = function(){
  _AbstractWorkerWrappingImplementation$Dart.$Initializer.call(this);
}
;
_SharedWorkerWrappingImplementation$Dart._SharedWorkerWrappingImplementation$$Factory = function(){
  var tmp$0 = new _SharedWorkerWrappingImplementation$Dart;
  tmp$0.$typeInfo = _SharedWorkerWrappingImplementation$Dart.$lookupRTT();
  _SharedWorkerWrappingImplementation$Dart.$Initializer.call(tmp$0);
  _SharedWorkerWrappingImplementation$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
_SharedWorkerWrappingImplementation$Dart.create__SharedWorkerWrappingImplementation$member = function(){
  return _SharedWorkerWrappingImplementation$Dart._SharedWorkerWrappingImplementation$$Factory();
}
;
_SharedWorkerWrappingImplementation$Dart.create__SharedWorkerWrappingImplementation$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _SharedWorkerWrappingImplementation$Dart.create__SharedWorkerWrappingImplementation$member();
}
;
function native__SharedWorkerWrappingImplementation_create__SharedWorkerWrappingImplementation(){
  return _SharedWorkerWrappingImplementation$Dart.create__SharedWorkerWrappingImplementation$member();
}

_SharedWorkerWrappingImplementation$Dart.create__SharedWorkerWrappingImplementation$getter = function create__SharedWorkerWrappingImplementation$getter(){
  return _SharedWorkerWrappingImplementation$Dart.create__SharedWorkerWrappingImplementation$named;
}
;
_SharedWorkerWrappingImplementation$Dart.prototype.port$named = function(){
  return this.port$getter().apply(this, arguments);
}
;
_SharedWorkerWrappingImplementation$Dart.prototype.port$getter = function(){
  return _SharedWorkerWrappingImplementation$Dart._get__SharedWorker_port$$member_(this);
}
;
_SharedWorkerWrappingImplementation$Dart._get__SharedWorker_port$$member_ = function(_this){
  return native__SharedWorkerWrappingImplementation__get__SharedWorker_port(_this);
}
;
_SharedWorkerWrappingImplementation$Dart._get__SharedWorker_port$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _SharedWorkerWrappingImplementation$Dart._get__SharedWorker_port$$member_(_this);
}
;
_SharedWorkerWrappingImplementation$Dart._get__SharedWorker_port$$getter_ = function _get__SharedWorker_port$$getter_(){
  return _SharedWorkerWrappingImplementation$Dart._get__SharedWorker_port$$named_;
}
;
_SharedWorkerWrappingImplementation$Dart.prototype.typeName$named = function(){
  return this.typeName$getter().apply(this, arguments);
}
;
_SharedWorkerWrappingImplementation$Dart.prototype.typeName$getter = function(){
  return 'SharedWorker';
}
;
