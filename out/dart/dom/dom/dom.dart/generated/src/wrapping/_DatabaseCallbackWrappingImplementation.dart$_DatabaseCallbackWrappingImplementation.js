function _DatabaseCallbackWrappingImplementation$Dart(){
}

_DatabaseCallbackWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('_DatabaseCallbackWrappingImplementation$Dart'), _DatabaseCallbackWrappingImplementation$Dart.$RTTimplements);
}
;
_DatabaseCallbackWrappingImplementation$Dart.$RTTimplements = function(rtt){
  _DatabaseCallbackWrappingImplementation$Dart.$addTo(rtt);
}
;
_DatabaseCallbackWrappingImplementation$Dart.$addTo = function(target){
  var rtt = _DatabaseCallbackWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  DOMWrapperBase$Dart.$addTo(target);
  DatabaseCallback$Dart.$addTo(target);
}
;
_DatabaseCallbackWrappingImplementation$Dart.prototype.$implements$_DatabaseCallbackWrappingImplementation$Dart = 1;
_DatabaseCallbackWrappingImplementation$Dart.prototype.$implements$DatabaseCallback$Dart = 1;
_DatabaseCallbackWrappingImplementation$Dart.prototype.$implements$DOMWrapperBase$Dart = 1;
_DatabaseCallbackWrappingImplementation$Dart.prototype.$implements$DOMType$Dart = 1;
_DatabaseCallbackWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(_DatabaseCallbackWrappingImplementation$Dart, DOMWrapperBase$Dart);
_DatabaseCallbackWrappingImplementation$Dart.$Constructor = function(){
  DOMWrapperBase$Dart.$Constructor.call(this);
}
;
_DatabaseCallbackWrappingImplementation$Dart.$Initializer = function(){
  DOMWrapperBase$Dart.$Initializer.call(this);
}
;
_DatabaseCallbackWrappingImplementation$Dart._DatabaseCallbackWrappingImplementation$$Factory = function(){
  var tmp$0 = new _DatabaseCallbackWrappingImplementation$Dart;
  tmp$0.$typeInfo = _DatabaseCallbackWrappingImplementation$Dart.$lookupRTT();
  _DatabaseCallbackWrappingImplementation$Dart.$Initializer.call(tmp$0);
  _DatabaseCallbackWrappingImplementation$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
_DatabaseCallbackWrappingImplementation$Dart.create__DatabaseCallbackWrappingImplementation$member = function(){
  return _DatabaseCallbackWrappingImplementation$Dart._DatabaseCallbackWrappingImplementation$$Factory();
}
;
_DatabaseCallbackWrappingImplementation$Dart.create__DatabaseCallbackWrappingImplementation$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _DatabaseCallbackWrappingImplementation$Dart.create__DatabaseCallbackWrappingImplementation$member();
}
;
function native__DatabaseCallbackWrappingImplementation_create__DatabaseCallbackWrappingImplementation(){
  return _DatabaseCallbackWrappingImplementation$Dart.create__DatabaseCallbackWrappingImplementation$member();
}

_DatabaseCallbackWrappingImplementation$Dart.create__DatabaseCallbackWrappingImplementation$getter = function create__DatabaseCallbackWrappingImplementation$getter(){
  return _DatabaseCallbackWrappingImplementation$Dart.create__DatabaseCallbackWrappingImplementation$named;
}
;
_DatabaseCallbackWrappingImplementation$Dart.prototype.handleEvent$member = function(database){
  var tmp$1, tmp$0;
  if (!!(tmp$0 = database , tmp$0 != null && tmp$0.$implements$Database$Dart)) {
    return _DatabaseCallbackWrappingImplementation$Dart._handleEvent$$member_(this, database);
  }
   else {
    if (!!(tmp$1 = database , tmp$1 != null && tmp$1.$implements$DatabaseSync$Dart)) {
      return _DatabaseCallbackWrappingImplementation$Dart._handleEvent_2$$member_(this, database);
    }
  }
  $Dart$ThrowException('Incorrect number or type of arguments');
}
;
_DatabaseCallbackWrappingImplementation$Dart.prototype.handleEvent$named = function($n, $o, database){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DatabaseCallbackWrappingImplementation$Dart.prototype.handleEvent$member.call(this, database);
}
;
_DatabaseCallbackWrappingImplementation$Dart.prototype.handleEvent$getter = function handleEvent$getter(){
  return $bind(_DatabaseCallbackWrappingImplementation$Dart.prototype.handleEvent$named, this);
}
;
_DatabaseCallbackWrappingImplementation$Dart._handleEvent$$member_ = function(receiver, database){
  return native__DatabaseCallbackWrappingImplementation__handleEvent(receiver, database);
}
;
_DatabaseCallbackWrappingImplementation$Dart._handleEvent$$named_ = function($n, $o, receiver, database){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DatabaseCallbackWrappingImplementation$Dart._handleEvent$$member_(receiver, database);
}
;
_DatabaseCallbackWrappingImplementation$Dart._handleEvent$$getter_ = function _handleEvent$$getter_(){
  return _DatabaseCallbackWrappingImplementation$Dart._handleEvent$$named_;
}
;
_DatabaseCallbackWrappingImplementation$Dart._handleEvent_2$$member_ = function(receiver, database){
  return native__DatabaseCallbackWrappingImplementation__handleEvent_2(receiver, database);
}
;
_DatabaseCallbackWrappingImplementation$Dart._handleEvent_2$$named_ = function($n, $o, receiver, database){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DatabaseCallbackWrappingImplementation$Dart._handleEvent_2$$member_(receiver, database);
}
;
_DatabaseCallbackWrappingImplementation$Dart._handleEvent_2$$getter_ = function _handleEvent_2$$getter_(){
  return _DatabaseCallbackWrappingImplementation$Dart._handleEvent_2$$named_;
}
;
_DatabaseCallbackWrappingImplementation$Dart.prototype.typeName$named = function(){
  return this.typeName$getter().apply(this, arguments);
}
;
_DatabaseCallbackWrappingImplementation$Dart.prototype.typeName$getter = function(){
  return 'DatabaseCallback';
}
;
