function _DatabaseWrappingImplementation$Dart(){
}

_DatabaseWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('_DatabaseWrappingImplementation$Dart'), _DatabaseWrappingImplementation$Dart.$RTTimplements);
}
;
_DatabaseWrappingImplementation$Dart.$RTTimplements = function(rtt){
  _DatabaseWrappingImplementation$Dart.$addTo(rtt);
}
;
_DatabaseWrappingImplementation$Dart.$addTo = function(target){
  var rtt = _DatabaseWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  DOMWrapperBase$Dart.$addTo(target);
  Database$Dart.$addTo(target);
}
;
_DatabaseWrappingImplementation$Dart.prototype.$implements$_DatabaseWrappingImplementation$Dart = 1;
_DatabaseWrappingImplementation$Dart.prototype.$implements$Database$Dart = 1;
_DatabaseWrappingImplementation$Dart.prototype.$implements$DOMWrapperBase$Dart = 1;
_DatabaseWrappingImplementation$Dart.prototype.$implements$DOMType$Dart = 1;
_DatabaseWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(_DatabaseWrappingImplementation$Dart, DOMWrapperBase$Dart);
_DatabaseWrappingImplementation$Dart.$Constructor = function(){
  DOMWrapperBase$Dart.$Constructor.call(this);
}
;
_DatabaseWrappingImplementation$Dart.$Initializer = function(){
  DOMWrapperBase$Dart.$Initializer.call(this);
}
;
_DatabaseWrappingImplementation$Dart._DatabaseWrappingImplementation$$Factory = function(){
  var tmp$0 = new _DatabaseWrappingImplementation$Dart;
  tmp$0.$typeInfo = _DatabaseWrappingImplementation$Dart.$lookupRTT();
  _DatabaseWrappingImplementation$Dart.$Initializer.call(tmp$0);
  _DatabaseWrappingImplementation$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
_DatabaseWrappingImplementation$Dart.create__DatabaseWrappingImplementation$member = function(){
  return _DatabaseWrappingImplementation$Dart._DatabaseWrappingImplementation$$Factory();
}
;
_DatabaseWrappingImplementation$Dart.create__DatabaseWrappingImplementation$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _DatabaseWrappingImplementation$Dart.create__DatabaseWrappingImplementation$member();
}
;
function native__DatabaseWrappingImplementation_create__DatabaseWrappingImplementation(){
  return _DatabaseWrappingImplementation$Dart.create__DatabaseWrappingImplementation$member();
}

_DatabaseWrappingImplementation$Dart.create__DatabaseWrappingImplementation$getter = function create__DatabaseWrappingImplementation$getter(){
  return _DatabaseWrappingImplementation$Dart.create__DatabaseWrappingImplementation$named;
}
;
_DatabaseWrappingImplementation$Dart.prototype.version$named = function(){
  return this.version$getter().apply(this, arguments);
}
;
_DatabaseWrappingImplementation$Dart.prototype.version$getter = function(){
  return _DatabaseWrappingImplementation$Dart._get__Database_version$$member_(this);
}
;
_DatabaseWrappingImplementation$Dart._get__Database_version$$member_ = function(_this){
  return native__DatabaseWrappingImplementation__get__Database_version(_this);
}
;
_DatabaseWrappingImplementation$Dart._get__Database_version$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DatabaseWrappingImplementation$Dart._get__Database_version$$member_(_this);
}
;
_DatabaseWrappingImplementation$Dart._get__Database_version$$getter_ = function _get__Database_version$$getter_(){
  return _DatabaseWrappingImplementation$Dart._get__Database_version$$named_;
}
;
_DatabaseWrappingImplementation$Dart.prototype.changeVersion$member = function(oldVersion, newVersion, callback, errorCallback, successCallback){
  if (callback == null) {
    if (errorCallback == null) {
      if (successCallback == null) {
        _DatabaseWrappingImplementation$Dart._changeVersion$$member_(this, oldVersion, newVersion);
        return;
      }
    }
  }
   else {
    if (errorCallback == null) {
      if (successCallback == null) {
        _DatabaseWrappingImplementation$Dart._changeVersion_2$$member_(this, oldVersion, newVersion, callback);
        return;
      }
    }
     else {
      if (successCallback == null) {
        _DatabaseWrappingImplementation$Dart._changeVersion_3$$member_(this, oldVersion, newVersion, callback, errorCallback);
        return;
      }
       else {
        _DatabaseWrappingImplementation$Dart._changeVersion_4$$member_(this, oldVersion, newVersion, callback, errorCallback, successCallback);
        return;
      }
    }
  }
  $Dart$ThrowException('Incorrect number or type of arguments');
}
;
_DatabaseWrappingImplementation$Dart.prototype.changeVersion$named = function($n, $o, oldVersion, newVersion, callback, errorCallback, successCallback){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 2:
      callback = $o.callback?(++seen , $o.callback):(++def , $Dart$Null);
    case 3:
      errorCallback = $o.errorCallback?(++seen , $o.errorCallback):(++def , $Dart$Null);
    case 4:
      successCallback = $o.successCallback?(++seen , $o.successCallback):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 5)
    $nsme();
  return _DatabaseWrappingImplementation$Dart.prototype.changeVersion$member.call(this, oldVersion, newVersion, callback, errorCallback, successCallback);
}
;
_DatabaseWrappingImplementation$Dart.prototype.changeVersion$getter = function changeVersion$getter(){
  return $bind(_DatabaseWrappingImplementation$Dart.prototype.changeVersion$named, this);
}
;
_DatabaseWrappingImplementation$Dart._changeVersion$$member_ = function(receiver, oldVersion, newVersion){
  return native__DatabaseWrappingImplementation__changeVersion(receiver, oldVersion, newVersion);
}
;
_DatabaseWrappingImplementation$Dart._changeVersion$$named_ = function($n, $o, receiver, oldVersion, newVersion){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return _DatabaseWrappingImplementation$Dart._changeVersion$$member_(receiver, oldVersion, newVersion);
}
;
_DatabaseWrappingImplementation$Dart._changeVersion$$getter_ = function _changeVersion$$getter_(){
  return _DatabaseWrappingImplementation$Dart._changeVersion$$named_;
}
;
_DatabaseWrappingImplementation$Dart._changeVersion_2$$member_ = function(receiver, oldVersion, newVersion, callback){
  return native__DatabaseWrappingImplementation__changeVersion_2(receiver, oldVersion, newVersion, callback);
}
;
_DatabaseWrappingImplementation$Dart._changeVersion_2$$named_ = function($n, $o, receiver, oldVersion, newVersion, callback){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 4)
    $nsme();
  return _DatabaseWrappingImplementation$Dart._changeVersion_2$$member_(receiver, oldVersion, newVersion, callback);
}
;
_DatabaseWrappingImplementation$Dart._changeVersion_2$$getter_ = function _changeVersion_2$$getter_(){
  return _DatabaseWrappingImplementation$Dart._changeVersion_2$$named_;
}
;
_DatabaseWrappingImplementation$Dart._changeVersion_3$$member_ = function(receiver, oldVersion, newVersion, callback, errorCallback){
  return native__DatabaseWrappingImplementation__changeVersion_3(receiver, oldVersion, newVersion, callback, errorCallback);
}
;
_DatabaseWrappingImplementation$Dart._changeVersion_3$$named_ = function($n, $o, receiver, oldVersion, newVersion, callback, errorCallback){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 5)
    $nsme();
  return _DatabaseWrappingImplementation$Dart._changeVersion_3$$member_(receiver, oldVersion, newVersion, callback, errorCallback);
}
;
_DatabaseWrappingImplementation$Dart._changeVersion_3$$getter_ = function _changeVersion_3$$getter_(){
  return _DatabaseWrappingImplementation$Dart._changeVersion_3$$named_;
}
;
_DatabaseWrappingImplementation$Dart._changeVersion_4$$member_ = function(receiver, oldVersion, newVersion, callback, errorCallback, successCallback){
  return native__DatabaseWrappingImplementation__changeVersion_4(receiver, oldVersion, newVersion, callback, errorCallback, successCallback);
}
;
_DatabaseWrappingImplementation$Dart._changeVersion_4$$named_ = function($n, $o, receiver, oldVersion, newVersion, callback, errorCallback, successCallback){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 6)
    $nsme();
  return _DatabaseWrappingImplementation$Dart._changeVersion_4$$member_(receiver, oldVersion, newVersion, callback, errorCallback, successCallback);
}
;
_DatabaseWrappingImplementation$Dart._changeVersion_4$$getter_ = function _changeVersion_4$$getter_(){
  return _DatabaseWrappingImplementation$Dart._changeVersion_4$$named_;
}
;
_DatabaseWrappingImplementation$Dart.prototype.readTransaction$member = function(callback, errorCallback, successCallback){
  if (errorCallback == null) {
    if (successCallback == null) {
      _DatabaseWrappingImplementation$Dart._readTransaction$$member_(this, callback);
      return;
    }
  }
   else {
    if (successCallback == null) {
      _DatabaseWrappingImplementation$Dart._readTransaction_2$$member_(this, callback, errorCallback);
      return;
    }
     else {
      _DatabaseWrappingImplementation$Dart._readTransaction_3$$member_(this, callback, errorCallback, successCallback);
      return;
    }
  }
  $Dart$ThrowException('Incorrect number or type of arguments');
}
;
_DatabaseWrappingImplementation$Dart.prototype.readTransaction$named = function($n, $o, callback, errorCallback, successCallback){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 1:
      errorCallback = $o.errorCallback?(++seen , $o.errorCallback):(++def , $Dart$Null);
    case 2:
      successCallback = $o.successCallback?(++seen , $o.successCallback):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return _DatabaseWrappingImplementation$Dart.prototype.readTransaction$member.call(this, callback, errorCallback, successCallback);
}
;
_DatabaseWrappingImplementation$Dart.prototype.readTransaction$getter = function readTransaction$getter(){
  return $bind(_DatabaseWrappingImplementation$Dart.prototype.readTransaction$named, this);
}
;
_DatabaseWrappingImplementation$Dart._readTransaction$$member_ = function(receiver, callback){
  return native__DatabaseWrappingImplementation__readTransaction(receiver, callback);
}
;
_DatabaseWrappingImplementation$Dart._readTransaction$$named_ = function($n, $o, receiver, callback){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DatabaseWrappingImplementation$Dart._readTransaction$$member_(receiver, callback);
}
;
_DatabaseWrappingImplementation$Dart._readTransaction$$getter_ = function _readTransaction$$getter_(){
  return _DatabaseWrappingImplementation$Dart._readTransaction$$named_;
}
;
_DatabaseWrappingImplementation$Dart._readTransaction_2$$member_ = function(receiver, callback, errorCallback){
  return native__DatabaseWrappingImplementation__readTransaction_2(receiver, callback, errorCallback);
}
;
_DatabaseWrappingImplementation$Dart._readTransaction_2$$named_ = function($n, $o, receiver, callback, errorCallback){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return _DatabaseWrappingImplementation$Dart._readTransaction_2$$member_(receiver, callback, errorCallback);
}
;
_DatabaseWrappingImplementation$Dart._readTransaction_2$$getter_ = function _readTransaction_2$$getter_(){
  return _DatabaseWrappingImplementation$Dart._readTransaction_2$$named_;
}
;
_DatabaseWrappingImplementation$Dart._readTransaction_3$$member_ = function(receiver, callback, errorCallback, successCallback){
  return native__DatabaseWrappingImplementation__readTransaction_3(receiver, callback, errorCallback, successCallback);
}
;
_DatabaseWrappingImplementation$Dart._readTransaction_3$$named_ = function($n, $o, receiver, callback, errorCallback, successCallback){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 4)
    $nsme();
  return _DatabaseWrappingImplementation$Dart._readTransaction_3$$member_(receiver, callback, errorCallback, successCallback);
}
;
_DatabaseWrappingImplementation$Dart._readTransaction_3$$getter_ = function _readTransaction_3$$getter_(){
  return _DatabaseWrappingImplementation$Dart._readTransaction_3$$named_;
}
;
_DatabaseWrappingImplementation$Dart.prototype.transaction$member = function(callback, errorCallback, successCallback){
  if (errorCallback == null) {
    if (successCallback == null) {
      _DatabaseWrappingImplementation$Dart._transaction$$member_(this, callback);
      return;
    }
  }
   else {
    if (successCallback == null) {
      _DatabaseWrappingImplementation$Dart._transaction_2$$member_(this, callback, errorCallback);
      return;
    }
     else {
      _DatabaseWrappingImplementation$Dart._transaction_3$$member_(this, callback, errorCallback, successCallback);
      return;
    }
  }
  $Dart$ThrowException('Incorrect number or type of arguments');
}
;
_DatabaseWrappingImplementation$Dart.prototype.transaction$named = function($n, $o, callback, errorCallback, successCallback){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 1:
      errorCallback = $o.errorCallback?(++seen , $o.errorCallback):(++def , $Dart$Null);
    case 2:
      successCallback = $o.successCallback?(++seen , $o.successCallback):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return _DatabaseWrappingImplementation$Dart.prototype.transaction$member.call(this, callback, errorCallback, successCallback);
}
;
_DatabaseWrappingImplementation$Dart.prototype.transaction$getter = function transaction$getter(){
  return $bind(_DatabaseWrappingImplementation$Dart.prototype.transaction$named, this);
}
;
_DatabaseWrappingImplementation$Dart._transaction$$member_ = function(receiver, callback){
  return native__DatabaseWrappingImplementation__transaction(receiver, callback);
}
;
_DatabaseWrappingImplementation$Dart._transaction$$named_ = function($n, $o, receiver, callback){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DatabaseWrappingImplementation$Dart._transaction$$member_(receiver, callback);
}
;
_DatabaseWrappingImplementation$Dart._transaction$$getter_ = function _transaction$$getter_(){
  return _DatabaseWrappingImplementation$Dart._transaction$$named_;
}
;
_DatabaseWrappingImplementation$Dart._transaction_2$$member_ = function(receiver, callback, errorCallback){
  return native__DatabaseWrappingImplementation__transaction_2(receiver, callback, errorCallback);
}
;
_DatabaseWrappingImplementation$Dart._transaction_2$$named_ = function($n, $o, receiver, callback, errorCallback){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return _DatabaseWrappingImplementation$Dart._transaction_2$$member_(receiver, callback, errorCallback);
}
;
_DatabaseWrappingImplementation$Dart._transaction_2$$getter_ = function _transaction_2$$getter_(){
  return _DatabaseWrappingImplementation$Dart._transaction_2$$named_;
}
;
_DatabaseWrappingImplementation$Dart._transaction_3$$member_ = function(receiver, callback, errorCallback, successCallback){
  return native__DatabaseWrappingImplementation__transaction_3(receiver, callback, errorCallback, successCallback);
}
;
_DatabaseWrappingImplementation$Dart._transaction_3$$named_ = function($n, $o, receiver, callback, errorCallback, successCallback){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 4)
    $nsme();
  return _DatabaseWrappingImplementation$Dart._transaction_3$$member_(receiver, callback, errorCallback, successCallback);
}
;
_DatabaseWrappingImplementation$Dart._transaction_3$$getter_ = function _transaction_3$$getter_(){
  return _DatabaseWrappingImplementation$Dart._transaction_3$$named_;
}
;
_DatabaseWrappingImplementation$Dart.prototype.typeName$named = function(){
  return this.typeName$getter().apply(this, arguments);
}
;
_DatabaseWrappingImplementation$Dart.prototype.typeName$getter = function(){
  return 'Database';
}
;
