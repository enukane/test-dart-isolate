function _InjectedScriptHostWrappingImplementation$Dart(){
}

_InjectedScriptHostWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('_InjectedScriptHostWrappingImplementation$Dart'), _InjectedScriptHostWrappingImplementation$Dart.$RTTimplements);
}
;
_InjectedScriptHostWrappingImplementation$Dart.$RTTimplements = function(rtt){
  _InjectedScriptHostWrappingImplementation$Dart.$addTo(rtt);
}
;
_InjectedScriptHostWrappingImplementation$Dart.$addTo = function(target){
  var rtt = _InjectedScriptHostWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  DOMWrapperBase$Dart.$addTo(target);
  InjectedScriptHost$Dart.$addTo(target);
}
;
_InjectedScriptHostWrappingImplementation$Dart.prototype.$implements$_InjectedScriptHostWrappingImplementation$Dart = 1;
_InjectedScriptHostWrappingImplementation$Dart.prototype.$implements$InjectedScriptHost$Dart = 1;
_InjectedScriptHostWrappingImplementation$Dart.prototype.$implements$DOMWrapperBase$Dart = 1;
_InjectedScriptHostWrappingImplementation$Dart.prototype.$implements$DOMType$Dart = 1;
_InjectedScriptHostWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(_InjectedScriptHostWrappingImplementation$Dart, DOMWrapperBase$Dart);
_InjectedScriptHostWrappingImplementation$Dart.$Constructor = function(){
  DOMWrapperBase$Dart.$Constructor.call(this);
}
;
_InjectedScriptHostWrappingImplementation$Dart.$Initializer = function(){
  DOMWrapperBase$Dart.$Initializer.call(this);
}
;
_InjectedScriptHostWrappingImplementation$Dart._InjectedScriptHostWrappingImplementation$$Factory = function(){
  var tmp$0 = new _InjectedScriptHostWrappingImplementation$Dart;
  tmp$0.$typeInfo = _InjectedScriptHostWrappingImplementation$Dart.$lookupRTT();
  _InjectedScriptHostWrappingImplementation$Dart.$Initializer.call(tmp$0);
  _InjectedScriptHostWrappingImplementation$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
_InjectedScriptHostWrappingImplementation$Dart.create__InjectedScriptHostWrappingImplementation$member = function(){
  return _InjectedScriptHostWrappingImplementation$Dart._InjectedScriptHostWrappingImplementation$$Factory();
}
;
_InjectedScriptHostWrappingImplementation$Dart.create__InjectedScriptHostWrappingImplementation$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _InjectedScriptHostWrappingImplementation$Dart.create__InjectedScriptHostWrappingImplementation$member();
}
;
function native__InjectedScriptHostWrappingImplementation_create__InjectedScriptHostWrappingImplementation(){
  return _InjectedScriptHostWrappingImplementation$Dart.create__InjectedScriptHostWrappingImplementation$member();
}

_InjectedScriptHostWrappingImplementation$Dart.create__InjectedScriptHostWrappingImplementation$getter = function create__InjectedScriptHostWrappingImplementation$getter(){
  return _InjectedScriptHostWrappingImplementation$Dart.create__InjectedScriptHostWrappingImplementation$named;
}
;
_InjectedScriptHostWrappingImplementation$Dart.prototype.clearConsoleMessages$member = function(){
  _InjectedScriptHostWrappingImplementation$Dart._clearConsoleMessages$$member_(this);
  return;
}
;
_InjectedScriptHostWrappingImplementation$Dart.prototype.clearConsoleMessages$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _InjectedScriptHostWrappingImplementation$Dart.prototype.clearConsoleMessages$member.call(this);
}
;
_InjectedScriptHostWrappingImplementation$Dart.prototype.clearConsoleMessages$getter = function clearConsoleMessages$getter(){
  return $bind(_InjectedScriptHostWrappingImplementation$Dart.prototype.clearConsoleMessages$named, this);
}
;
_InjectedScriptHostWrappingImplementation$Dart._clearConsoleMessages$$member_ = function(receiver){
  return native__InjectedScriptHostWrappingImplementation__clearConsoleMessages(receiver);
}
;
_InjectedScriptHostWrappingImplementation$Dart._clearConsoleMessages$$named_ = function($n, $o, receiver){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _InjectedScriptHostWrappingImplementation$Dart._clearConsoleMessages$$member_(receiver);
}
;
_InjectedScriptHostWrappingImplementation$Dart._clearConsoleMessages$$getter_ = function _clearConsoleMessages$$getter_(){
  return _InjectedScriptHostWrappingImplementation$Dart._clearConsoleMessages$$named_;
}
;
_InjectedScriptHostWrappingImplementation$Dart.prototype.copyText$member = function(text){
  _InjectedScriptHostWrappingImplementation$Dart._copyText$$member_(this, text);
  return;
}
;
_InjectedScriptHostWrappingImplementation$Dart.prototype.copyText$named = function($n, $o, text){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _InjectedScriptHostWrappingImplementation$Dart.prototype.copyText$member.call(this, text);
}
;
_InjectedScriptHostWrappingImplementation$Dart.prototype.copyText$getter = function copyText$getter(){
  return $bind(_InjectedScriptHostWrappingImplementation$Dart.prototype.copyText$named, this);
}
;
_InjectedScriptHostWrappingImplementation$Dart._copyText$$member_ = function(receiver, text){
  return native__InjectedScriptHostWrappingImplementation__copyText(receiver, text);
}
;
_InjectedScriptHostWrappingImplementation$Dart._copyText$$named_ = function($n, $o, receiver, text){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _InjectedScriptHostWrappingImplementation$Dart._copyText$$member_(receiver, text);
}
;
_InjectedScriptHostWrappingImplementation$Dart._copyText$$getter_ = function _copyText$$getter_(){
  return _InjectedScriptHostWrappingImplementation$Dart._copyText$$named_;
}
;
_InjectedScriptHostWrappingImplementation$Dart.prototype.databaseId$member = function(database){
  return _InjectedScriptHostWrappingImplementation$Dart._databaseId$$member_(this, database);
}
;
_InjectedScriptHostWrappingImplementation$Dart.prototype.databaseId$named = function($n, $o, database){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _InjectedScriptHostWrappingImplementation$Dart.prototype.databaseId$member.call(this, database);
}
;
_InjectedScriptHostWrappingImplementation$Dart.prototype.databaseId$getter = function databaseId$getter(){
  return $bind(_InjectedScriptHostWrappingImplementation$Dart.prototype.databaseId$named, this);
}
;
_InjectedScriptHostWrappingImplementation$Dart._databaseId$$member_ = function(receiver, database){
  return native__InjectedScriptHostWrappingImplementation__databaseId(receiver, database);
}
;
_InjectedScriptHostWrappingImplementation$Dart._databaseId$$named_ = function($n, $o, receiver, database){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _InjectedScriptHostWrappingImplementation$Dart._databaseId$$member_(receiver, database);
}
;
_InjectedScriptHostWrappingImplementation$Dart._databaseId$$getter_ = function _databaseId$$getter_(){
  return _InjectedScriptHostWrappingImplementation$Dart._databaseId$$named_;
}
;
_InjectedScriptHostWrappingImplementation$Dart.prototype.evaluate$member = function(text){
  return _InjectedScriptHostWrappingImplementation$Dart._evaluate$$member_(this, text);
}
;
_InjectedScriptHostWrappingImplementation$Dart.prototype.evaluate$named = function($n, $o, text){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _InjectedScriptHostWrappingImplementation$Dart.prototype.evaluate$member.call(this, text);
}
;
_InjectedScriptHostWrappingImplementation$Dart.prototype.evaluate$getter = function evaluate$getter(){
  return $bind(_InjectedScriptHostWrappingImplementation$Dart.prototype.evaluate$named, this);
}
;
_InjectedScriptHostWrappingImplementation$Dart._evaluate$$member_ = function(receiver, text){
  return native__InjectedScriptHostWrappingImplementation__evaluate(receiver, text);
}
;
_InjectedScriptHostWrappingImplementation$Dart._evaluate$$named_ = function($n, $o, receiver, text){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _InjectedScriptHostWrappingImplementation$Dart._evaluate$$member_(receiver, text);
}
;
_InjectedScriptHostWrappingImplementation$Dart._evaluate$$getter_ = function _evaluate$$getter_(){
  return _InjectedScriptHostWrappingImplementation$Dart._evaluate$$named_;
}
;
_InjectedScriptHostWrappingImplementation$Dart.prototype.inspect$member = function(objectId, hints){
  _InjectedScriptHostWrappingImplementation$Dart._inspect$$member_(this, objectId, hints);
  return;
}
;
_InjectedScriptHostWrappingImplementation$Dart.prototype.inspect$named = function($n, $o, objectId, hints){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _InjectedScriptHostWrappingImplementation$Dart.prototype.inspect$member.call(this, objectId, hints);
}
;
_InjectedScriptHostWrappingImplementation$Dart.prototype.inspect$getter = function inspect$getter(){
  return $bind(_InjectedScriptHostWrappingImplementation$Dart.prototype.inspect$named, this);
}
;
_InjectedScriptHostWrappingImplementation$Dart._inspect$$member_ = function(receiver, objectId, hints){
  return native__InjectedScriptHostWrappingImplementation__inspect(receiver, objectId, hints);
}
;
_InjectedScriptHostWrappingImplementation$Dart._inspect$$named_ = function($n, $o, receiver, objectId, hints){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return _InjectedScriptHostWrappingImplementation$Dart._inspect$$member_(receiver, objectId, hints);
}
;
_InjectedScriptHostWrappingImplementation$Dart._inspect$$getter_ = function _inspect$$getter_(){
  return _InjectedScriptHostWrappingImplementation$Dart._inspect$$named_;
}
;
_InjectedScriptHostWrappingImplementation$Dart.prototype.inspectedNode$member = function(num){
  return _InjectedScriptHostWrappingImplementation$Dart._inspectedNode$$member_(this, num);
}
;
_InjectedScriptHostWrappingImplementation$Dart.prototype.inspectedNode$named = function($n, $o, num){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _InjectedScriptHostWrappingImplementation$Dart.prototype.inspectedNode$member.call(this, num);
}
;
_InjectedScriptHostWrappingImplementation$Dart.prototype.inspectedNode$getter = function inspectedNode$getter(){
  return $bind(_InjectedScriptHostWrappingImplementation$Dart.prototype.inspectedNode$named, this);
}
;
_InjectedScriptHostWrappingImplementation$Dart._inspectedNode$$member_ = function(receiver, num){
  return native__InjectedScriptHostWrappingImplementation__inspectedNode(receiver, num);
}
;
_InjectedScriptHostWrappingImplementation$Dart._inspectedNode$$named_ = function($n, $o, receiver, num){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _InjectedScriptHostWrappingImplementation$Dart._inspectedNode$$member_(receiver, num);
}
;
_InjectedScriptHostWrappingImplementation$Dart._inspectedNode$$getter_ = function _inspectedNode$$getter_(){
  return _InjectedScriptHostWrappingImplementation$Dart._inspectedNode$$named_;
}
;
_InjectedScriptHostWrappingImplementation$Dart.prototype.internalConstructorName$member = function(object){
  return _InjectedScriptHostWrappingImplementation$Dart._internalConstructorName$$member_(this, object);
}
;
_InjectedScriptHostWrappingImplementation$Dart.prototype.internalConstructorName$named = function($n, $o, object){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _InjectedScriptHostWrappingImplementation$Dart.prototype.internalConstructorName$member.call(this, object);
}
;
_InjectedScriptHostWrappingImplementation$Dart.prototype.internalConstructorName$getter = function internalConstructorName$getter(){
  return $bind(_InjectedScriptHostWrappingImplementation$Dart.prototype.internalConstructorName$named, this);
}
;
_InjectedScriptHostWrappingImplementation$Dart._internalConstructorName$$member_ = function(receiver, object){
  return native__InjectedScriptHostWrappingImplementation__internalConstructorName(receiver, object);
}
;
_InjectedScriptHostWrappingImplementation$Dart._internalConstructorName$$named_ = function($n, $o, receiver, object){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _InjectedScriptHostWrappingImplementation$Dart._internalConstructorName$$member_(receiver, object);
}
;
_InjectedScriptHostWrappingImplementation$Dart._internalConstructorName$$getter_ = function _internalConstructorName$$getter_(){
  return _InjectedScriptHostWrappingImplementation$Dart._internalConstructorName$$named_;
}
;
_InjectedScriptHostWrappingImplementation$Dart.prototype.isHTMLAllCollection$member = function(object){
  return _InjectedScriptHostWrappingImplementation$Dart._isHTMLAllCollection$$member_(this, object);
}
;
_InjectedScriptHostWrappingImplementation$Dart.prototype.isHTMLAllCollection$named = function($n, $o, object){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _InjectedScriptHostWrappingImplementation$Dart.prototype.isHTMLAllCollection$member.call(this, object);
}
;
_InjectedScriptHostWrappingImplementation$Dart.prototype.isHTMLAllCollection$getter = function isHTMLAllCollection$getter(){
  return $bind(_InjectedScriptHostWrappingImplementation$Dart.prototype.isHTMLAllCollection$named, this);
}
;
_InjectedScriptHostWrappingImplementation$Dart._isHTMLAllCollection$$member_ = function(receiver, object){
  return native__InjectedScriptHostWrappingImplementation__isHTMLAllCollection(receiver, object);
}
;
_InjectedScriptHostWrappingImplementation$Dart._isHTMLAllCollection$$named_ = function($n, $o, receiver, object){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _InjectedScriptHostWrappingImplementation$Dart._isHTMLAllCollection$$member_(receiver, object);
}
;
_InjectedScriptHostWrappingImplementation$Dart._isHTMLAllCollection$$getter_ = function _isHTMLAllCollection$$getter_(){
  return _InjectedScriptHostWrappingImplementation$Dart._isHTMLAllCollection$$named_;
}
;
_InjectedScriptHostWrappingImplementation$Dart.prototype.storageId$member = function(storage){
  return _InjectedScriptHostWrappingImplementation$Dart._storageId$$member_(this, storage);
}
;
_InjectedScriptHostWrappingImplementation$Dart.prototype.storageId$named = function($n, $o, storage){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _InjectedScriptHostWrappingImplementation$Dart.prototype.storageId$member.call(this, storage);
}
;
_InjectedScriptHostWrappingImplementation$Dart.prototype.storageId$getter = function storageId$getter(){
  return $bind(_InjectedScriptHostWrappingImplementation$Dart.prototype.storageId$named, this);
}
;
_InjectedScriptHostWrappingImplementation$Dart._storageId$$member_ = function(receiver, storage){
  return native__InjectedScriptHostWrappingImplementation__storageId(receiver, storage);
}
;
_InjectedScriptHostWrappingImplementation$Dart._storageId$$named_ = function($n, $o, receiver, storage){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _InjectedScriptHostWrappingImplementation$Dart._storageId$$member_(receiver, storage);
}
;
_InjectedScriptHostWrappingImplementation$Dart._storageId$$getter_ = function _storageId$$getter_(){
  return _InjectedScriptHostWrappingImplementation$Dart._storageId$$named_;
}
;
_InjectedScriptHostWrappingImplementation$Dart.prototype.type$member = function(object){
  return _InjectedScriptHostWrappingImplementation$Dart._type$$member_(this, object);
}
;
_InjectedScriptHostWrappingImplementation$Dart.prototype.type$named = function($n, $o, object){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _InjectedScriptHostWrappingImplementation$Dart.prototype.type$member.call(this, object);
}
;
_InjectedScriptHostWrappingImplementation$Dart.prototype.type$getter = function type$getter(){
  return $bind(_InjectedScriptHostWrappingImplementation$Dart.prototype.type$named, this);
}
;
_InjectedScriptHostWrappingImplementation$Dart._type$$member_ = function(receiver, object){
  return native__InjectedScriptHostWrappingImplementation__type(receiver, object);
}
;
_InjectedScriptHostWrappingImplementation$Dart._type$$named_ = function($n, $o, receiver, object){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _InjectedScriptHostWrappingImplementation$Dart._type$$member_(receiver, object);
}
;
_InjectedScriptHostWrappingImplementation$Dart._type$$getter_ = function _type$$getter_(){
  return _InjectedScriptHostWrappingImplementation$Dart._type$$named_;
}
;
_InjectedScriptHostWrappingImplementation$Dart.prototype.typeName$named = function(){
  return this.typeName$getter().apply(this, arguments);
}
;
_InjectedScriptHostWrappingImplementation$Dart.prototype.typeName$getter = function(){
  return 'InjectedScriptHost';
}
;
