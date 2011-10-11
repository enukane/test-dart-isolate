function _EntryWrappingImplementation$Dart(){
}

_EntryWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('_EntryWrappingImplementation$Dart'), _EntryWrappingImplementation$Dart.$RTTimplements);
}
;
_EntryWrappingImplementation$Dart.$RTTimplements = function(rtt){
  _EntryWrappingImplementation$Dart.$addTo(rtt);
}
;
_EntryWrappingImplementation$Dart.$addTo = function(target){
  var rtt = _EntryWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  DOMWrapperBase$Dart.$addTo(target);
  Entry$Dart.$addTo(target);
}
;
_EntryWrappingImplementation$Dart.prototype.$implements$_EntryWrappingImplementation$Dart = 1;
_EntryWrappingImplementation$Dart.prototype.$implements$Entry$Dart = 1;
_EntryWrappingImplementation$Dart.prototype.$implements$DOMWrapperBase$Dart = 1;
_EntryWrappingImplementation$Dart.prototype.$implements$DOMType$Dart = 1;
_EntryWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(_EntryWrappingImplementation$Dart, DOMWrapperBase$Dart);
_EntryWrappingImplementation$Dart.$Constructor = function(){
  DOMWrapperBase$Dart.$Constructor.call(this);
}
;
_EntryWrappingImplementation$Dart.$Initializer = function(){
  DOMWrapperBase$Dart.$Initializer.call(this);
}
;
_EntryWrappingImplementation$Dart._EntryWrappingImplementation$$Factory = function(){
  var tmp$0 = new _EntryWrappingImplementation$Dart;
  tmp$0.$typeInfo = _EntryWrappingImplementation$Dart.$lookupRTT();
  _EntryWrappingImplementation$Dart.$Initializer.call(tmp$0);
  _EntryWrappingImplementation$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
_EntryWrappingImplementation$Dart.create__EntryWrappingImplementation$member = function(){
  return _EntryWrappingImplementation$Dart._EntryWrappingImplementation$$Factory();
}
;
_EntryWrappingImplementation$Dart.create__EntryWrappingImplementation$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _EntryWrappingImplementation$Dart.create__EntryWrappingImplementation$member();
}
;
function native__EntryWrappingImplementation_create__EntryWrappingImplementation(){
  return _EntryWrappingImplementation$Dart.create__EntryWrappingImplementation$member();
}

_EntryWrappingImplementation$Dart.create__EntryWrappingImplementation$getter = function create__EntryWrappingImplementation$getter(){
  return _EntryWrappingImplementation$Dart.create__EntryWrappingImplementation$named;
}
;
_EntryWrappingImplementation$Dart.prototype.filesystem$named = function(){
  return this.filesystem$getter().apply(this, arguments);
}
;
_EntryWrappingImplementation$Dart.prototype.filesystem$getter = function(){
  return _EntryWrappingImplementation$Dart._get__Entry_filesystem$$member_(this);
}
;
_EntryWrappingImplementation$Dart._get__Entry_filesystem$$member_ = function(_this){
  return native__EntryWrappingImplementation__get__Entry_filesystem(_this);
}
;
_EntryWrappingImplementation$Dart._get__Entry_filesystem$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _EntryWrappingImplementation$Dart._get__Entry_filesystem$$member_(_this);
}
;
_EntryWrappingImplementation$Dart._get__Entry_filesystem$$getter_ = function _get__Entry_filesystem$$getter_(){
  return _EntryWrappingImplementation$Dart._get__Entry_filesystem$$named_;
}
;
_EntryWrappingImplementation$Dart.prototype.fullPath$named = function(){
  return this.fullPath$getter().apply(this, arguments);
}
;
_EntryWrappingImplementation$Dart.prototype.fullPath$getter = function(){
  return _EntryWrappingImplementation$Dart._get__Entry_fullPath$$member_(this);
}
;
_EntryWrappingImplementation$Dart._get__Entry_fullPath$$member_ = function(_this){
  return native__EntryWrappingImplementation__get__Entry_fullPath(_this);
}
;
_EntryWrappingImplementation$Dart._get__Entry_fullPath$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _EntryWrappingImplementation$Dart._get__Entry_fullPath$$member_(_this);
}
;
_EntryWrappingImplementation$Dart._get__Entry_fullPath$$getter_ = function _get__Entry_fullPath$$getter_(){
  return _EntryWrappingImplementation$Dart._get__Entry_fullPath$$named_;
}
;
_EntryWrappingImplementation$Dart.prototype.isDirectory$named = function(){
  return this.isDirectory$getter().apply(this, arguments);
}
;
_EntryWrappingImplementation$Dart.prototype.isDirectory$getter = function(){
  return _EntryWrappingImplementation$Dart._get__Entry_isDirectory$$member_(this);
}
;
_EntryWrappingImplementation$Dart._get__Entry_isDirectory$$member_ = function(_this){
  return native__EntryWrappingImplementation__get__Entry_isDirectory(_this);
}
;
_EntryWrappingImplementation$Dart._get__Entry_isDirectory$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _EntryWrappingImplementation$Dart._get__Entry_isDirectory$$member_(_this);
}
;
_EntryWrappingImplementation$Dart._get__Entry_isDirectory$$getter_ = function _get__Entry_isDirectory$$getter_(){
  return _EntryWrappingImplementation$Dart._get__Entry_isDirectory$$named_;
}
;
_EntryWrappingImplementation$Dart.prototype.isFile$named = function(){
  return this.isFile$getter().apply(this, arguments);
}
;
_EntryWrappingImplementation$Dart.prototype.isFile$getter = function(){
  return _EntryWrappingImplementation$Dart._get__Entry_isFile$$member_(this);
}
;
_EntryWrappingImplementation$Dart._get__Entry_isFile$$member_ = function(_this){
  return native__EntryWrappingImplementation__get__Entry_isFile(_this);
}
;
_EntryWrappingImplementation$Dart._get__Entry_isFile$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _EntryWrappingImplementation$Dart._get__Entry_isFile$$member_(_this);
}
;
_EntryWrappingImplementation$Dart._get__Entry_isFile$$getter_ = function _get__Entry_isFile$$getter_(){
  return _EntryWrappingImplementation$Dart._get__Entry_isFile$$named_;
}
;
_EntryWrappingImplementation$Dart.prototype.name$named = function(){
  return this.name$getter().apply(this, arguments);
}
;
_EntryWrappingImplementation$Dart.prototype.name$getter = function(){
  return _EntryWrappingImplementation$Dart._get__Entry_name$$member_(this);
}
;
_EntryWrappingImplementation$Dart._get__Entry_name$$member_ = function(_this){
  return native__EntryWrappingImplementation__get__Entry_name(_this);
}
;
_EntryWrappingImplementation$Dart._get__Entry_name$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _EntryWrappingImplementation$Dart._get__Entry_name$$member_(_this);
}
;
_EntryWrappingImplementation$Dart._get__Entry_name$$getter_ = function _get__Entry_name$$getter_(){
  return _EntryWrappingImplementation$Dart._get__Entry_name$$named_;
}
;
_EntryWrappingImplementation$Dart.prototype.copyTo$member = function(parent_0, name_0, successCallback, errorCallback){
  if (name_0 == null) {
    if (successCallback == null) {
      if (errorCallback == null) {
        _EntryWrappingImplementation$Dart._copyTo$$member_(this, parent_0);
        return;
      }
    }
  }
   else {
    if (successCallback == null) {
      if (errorCallback == null) {
        _EntryWrappingImplementation$Dart._copyTo_2$$member_(this, parent_0, name_0);
        return;
      }
    }
     else {
      if (errorCallback == null) {
        _EntryWrappingImplementation$Dart._copyTo_3$$member_(this, parent_0, name_0, successCallback);
        return;
      }
       else {
        _EntryWrappingImplementation$Dart._copyTo_4$$member_(this, parent_0, name_0, successCallback, errorCallback);
        return;
      }
    }
  }
  $Dart$ThrowException('Incorrect number or type of arguments');
}
;
_EntryWrappingImplementation$Dart.prototype.copyTo$named = function($n, $o, parent_0, name_0, successCallback, errorCallback){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 1:
      name_0 = $o.name_0?(++seen , $o.name_0):(++def , $Dart$Null);
    case 2:
      successCallback = $o.successCallback?(++seen , $o.successCallback):(++def , $Dart$Null);
    case 3:
      errorCallback = $o.errorCallback?(++seen , $o.errorCallback):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 4)
    $nsme();
  return _EntryWrappingImplementation$Dart.prototype.copyTo$member.call(this, parent_0, name_0, successCallback, errorCallback);
}
;
_EntryWrappingImplementation$Dart.prototype.copyTo$getter = function copyTo$getter(){
  return $bind(_EntryWrappingImplementation$Dart.prototype.copyTo$named, this);
}
;
_EntryWrappingImplementation$Dart._copyTo$$member_ = function(receiver, parent_0){
  return native__EntryWrappingImplementation__copyTo(receiver, parent_0);
}
;
_EntryWrappingImplementation$Dart._copyTo$$named_ = function($n, $o, receiver, parent_0){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _EntryWrappingImplementation$Dart._copyTo$$member_(receiver, parent_0);
}
;
_EntryWrappingImplementation$Dart._copyTo$$getter_ = function _copyTo$$getter_(){
  return _EntryWrappingImplementation$Dart._copyTo$$named_;
}
;
_EntryWrappingImplementation$Dart._copyTo_2$$member_ = function(receiver, parent_0, name_0){
  return native__EntryWrappingImplementation__copyTo_2(receiver, parent_0, name_0);
}
;
_EntryWrappingImplementation$Dart._copyTo_2$$named_ = function($n, $o, receiver, parent_0, name_0){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return _EntryWrappingImplementation$Dart._copyTo_2$$member_(receiver, parent_0, name_0);
}
;
_EntryWrappingImplementation$Dart._copyTo_2$$getter_ = function _copyTo_2$$getter_(){
  return _EntryWrappingImplementation$Dart._copyTo_2$$named_;
}
;
_EntryWrappingImplementation$Dart._copyTo_3$$member_ = function(receiver, parent_0, name_0, successCallback){
  return native__EntryWrappingImplementation__copyTo_3(receiver, parent_0, name_0, successCallback);
}
;
_EntryWrappingImplementation$Dart._copyTo_3$$named_ = function($n, $o, receiver, parent_0, name_0, successCallback){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 4)
    $nsme();
  return _EntryWrappingImplementation$Dart._copyTo_3$$member_(receiver, parent_0, name_0, successCallback);
}
;
_EntryWrappingImplementation$Dart._copyTo_3$$getter_ = function _copyTo_3$$getter_(){
  return _EntryWrappingImplementation$Dart._copyTo_3$$named_;
}
;
_EntryWrappingImplementation$Dart._copyTo_4$$member_ = function(receiver, parent_0, name_0, successCallback, errorCallback){
  return native__EntryWrappingImplementation__copyTo_4(receiver, parent_0, name_0, successCallback, errorCallback);
}
;
_EntryWrappingImplementation$Dart._copyTo_4$$named_ = function($n, $o, receiver, parent_0, name_0, successCallback, errorCallback){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 5)
    $nsme();
  return _EntryWrappingImplementation$Dart._copyTo_4$$member_(receiver, parent_0, name_0, successCallback, errorCallback);
}
;
_EntryWrappingImplementation$Dart._copyTo_4$$getter_ = function _copyTo_4$$getter_(){
  return _EntryWrappingImplementation$Dart._copyTo_4$$named_;
}
;
_EntryWrappingImplementation$Dart.prototype.getMetadata$member = function(successCallback, errorCallback){
  if (successCallback == null) {
    if (errorCallback == null) {
      _EntryWrappingImplementation$Dart._getMetadata$$member_(this);
      return;
    }
  }
   else {
    if (errorCallback == null) {
      _EntryWrappingImplementation$Dart._getMetadata_2$$member_(this, successCallback);
      return;
    }
     else {
      _EntryWrappingImplementation$Dart._getMetadata_3$$member_(this, successCallback, errorCallback);
      return;
    }
  }
  $Dart$ThrowException('Incorrect number or type of arguments');
}
;
_EntryWrappingImplementation$Dart.prototype.getMetadata$named = function($n, $o, successCallback, errorCallback){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 0:
      successCallback = $o.successCallback?(++seen , $o.successCallback):(++def , $Dart$Null);
    case 1:
      errorCallback = $o.errorCallback?(++seen , $o.errorCallback):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _EntryWrappingImplementation$Dart.prototype.getMetadata$member.call(this, successCallback, errorCallback);
}
;
_EntryWrappingImplementation$Dart.prototype.getMetadata$getter = function getMetadata$getter(){
  return $bind(_EntryWrappingImplementation$Dart.prototype.getMetadata$named, this);
}
;
_EntryWrappingImplementation$Dart._getMetadata$$member_ = function(receiver){
  return native__EntryWrappingImplementation__getMetadata(receiver);
}
;
_EntryWrappingImplementation$Dart._getMetadata$$named_ = function($n, $o, receiver){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _EntryWrappingImplementation$Dart._getMetadata$$member_(receiver);
}
;
_EntryWrappingImplementation$Dart._getMetadata$$getter_ = function _getMetadata$$getter_(){
  return _EntryWrappingImplementation$Dart._getMetadata$$named_;
}
;
_EntryWrappingImplementation$Dart._getMetadata_2$$member_ = function(receiver, successCallback){
  return native__EntryWrappingImplementation__getMetadata_2(receiver, successCallback);
}
;
_EntryWrappingImplementation$Dart._getMetadata_2$$named_ = function($n, $o, receiver, successCallback){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _EntryWrappingImplementation$Dart._getMetadata_2$$member_(receiver, successCallback);
}
;
_EntryWrappingImplementation$Dart._getMetadata_2$$getter_ = function _getMetadata_2$$getter_(){
  return _EntryWrappingImplementation$Dart._getMetadata_2$$named_;
}
;
_EntryWrappingImplementation$Dart._getMetadata_3$$member_ = function(receiver, successCallback, errorCallback){
  return native__EntryWrappingImplementation__getMetadata_3(receiver, successCallback, errorCallback);
}
;
_EntryWrappingImplementation$Dart._getMetadata_3$$named_ = function($n, $o, receiver, successCallback, errorCallback){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return _EntryWrappingImplementation$Dart._getMetadata_3$$member_(receiver, successCallback, errorCallback);
}
;
_EntryWrappingImplementation$Dart._getMetadata_3$$getter_ = function _getMetadata_3$$getter_(){
  return _EntryWrappingImplementation$Dart._getMetadata_3$$named_;
}
;
_EntryWrappingImplementation$Dart.prototype.getParent$member = function(successCallback, errorCallback){
  if (successCallback == null) {
    if (errorCallback == null) {
      _EntryWrappingImplementation$Dart._getParent$$member_(this);
      return;
    }
  }
   else {
    if (errorCallback == null) {
      _EntryWrappingImplementation$Dart._getParent_2$$member_(this, successCallback);
      return;
    }
     else {
      _EntryWrappingImplementation$Dart._getParent_3$$member_(this, successCallback, errorCallback);
      return;
    }
  }
  $Dart$ThrowException('Incorrect number or type of arguments');
}
;
_EntryWrappingImplementation$Dart.prototype.getParent$named = function($n, $o, successCallback, errorCallback){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 0:
      successCallback = $o.successCallback?(++seen , $o.successCallback):(++def , $Dart$Null);
    case 1:
      errorCallback = $o.errorCallback?(++seen , $o.errorCallback):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _EntryWrappingImplementation$Dart.prototype.getParent$member.call(this, successCallback, errorCallback);
}
;
_EntryWrappingImplementation$Dart.prototype.getParent$getter = function getParent$getter(){
  return $bind(_EntryWrappingImplementation$Dart.prototype.getParent$named, this);
}
;
_EntryWrappingImplementation$Dart._getParent$$member_ = function(receiver){
  return native__EntryWrappingImplementation__getParent(receiver);
}
;
_EntryWrappingImplementation$Dart._getParent$$named_ = function($n, $o, receiver){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _EntryWrappingImplementation$Dart._getParent$$member_(receiver);
}
;
_EntryWrappingImplementation$Dart._getParent$$getter_ = function _getParent$$getter_(){
  return _EntryWrappingImplementation$Dart._getParent$$named_;
}
;
_EntryWrappingImplementation$Dart._getParent_2$$member_ = function(receiver, successCallback){
  return native__EntryWrappingImplementation__getParent_2(receiver, successCallback);
}
;
_EntryWrappingImplementation$Dart._getParent_2$$named_ = function($n, $o, receiver, successCallback){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _EntryWrappingImplementation$Dart._getParent_2$$member_(receiver, successCallback);
}
;
_EntryWrappingImplementation$Dart._getParent_2$$getter_ = function _getParent_2$$getter_(){
  return _EntryWrappingImplementation$Dart._getParent_2$$named_;
}
;
_EntryWrappingImplementation$Dart._getParent_3$$member_ = function(receiver, successCallback, errorCallback){
  return native__EntryWrappingImplementation__getParent_3(receiver, successCallback, errorCallback);
}
;
_EntryWrappingImplementation$Dart._getParent_3$$named_ = function($n, $o, receiver, successCallback, errorCallback){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return _EntryWrappingImplementation$Dart._getParent_3$$member_(receiver, successCallback, errorCallback);
}
;
_EntryWrappingImplementation$Dart._getParent_3$$getter_ = function _getParent_3$$getter_(){
  return _EntryWrappingImplementation$Dart._getParent_3$$named_;
}
;
_EntryWrappingImplementation$Dart.prototype.moveTo$member = function(parent_0, name_0, successCallback, errorCallback){
  if (name_0 == null) {
    if (successCallback == null) {
      if (errorCallback == null) {
        _EntryWrappingImplementation$Dart._moveTo$$member_(this, parent_0);
        return;
      }
    }
  }
   else {
    if (successCallback == null) {
      if (errorCallback == null) {
        _EntryWrappingImplementation$Dart._moveTo_2$$member_(this, parent_0, name_0);
        return;
      }
    }
     else {
      if (errorCallback == null) {
        _EntryWrappingImplementation$Dart._moveTo_3$$member_(this, parent_0, name_0, successCallback);
        return;
      }
       else {
        _EntryWrappingImplementation$Dart._moveTo_4$$member_(this, parent_0, name_0, successCallback, errorCallback);
        return;
      }
    }
  }
  $Dart$ThrowException('Incorrect number or type of arguments');
}
;
_EntryWrappingImplementation$Dart.prototype.moveTo$named = function($n, $o, parent_0, name_0, successCallback, errorCallback){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 1:
      name_0 = $o.name_0?(++seen , $o.name_0):(++def , $Dart$Null);
    case 2:
      successCallback = $o.successCallback?(++seen , $o.successCallback):(++def , $Dart$Null);
    case 3:
      errorCallback = $o.errorCallback?(++seen , $o.errorCallback):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 4)
    $nsme();
  return _EntryWrappingImplementation$Dart.prototype.moveTo$member.call(this, parent_0, name_0, successCallback, errorCallback);
}
;
_EntryWrappingImplementation$Dart.prototype.moveTo$getter = function moveTo$getter(){
  return $bind(_EntryWrappingImplementation$Dart.prototype.moveTo$named, this);
}
;
_EntryWrappingImplementation$Dart._moveTo$$member_ = function(receiver, parent_0){
  return native__EntryWrappingImplementation__moveTo(receiver, parent_0);
}
;
_EntryWrappingImplementation$Dart._moveTo$$named_ = function($n, $o, receiver, parent_0){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _EntryWrappingImplementation$Dart._moveTo$$member_(receiver, parent_0);
}
;
_EntryWrappingImplementation$Dart._moveTo$$getter_ = function _moveTo$$getter_(){
  return _EntryWrappingImplementation$Dart._moveTo$$named_;
}
;
_EntryWrappingImplementation$Dart._moveTo_2$$member_ = function(receiver, parent_0, name_0){
  return native__EntryWrappingImplementation__moveTo_2(receiver, parent_0, name_0);
}
;
_EntryWrappingImplementation$Dart._moveTo_2$$named_ = function($n, $o, receiver, parent_0, name_0){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return _EntryWrappingImplementation$Dart._moveTo_2$$member_(receiver, parent_0, name_0);
}
;
_EntryWrappingImplementation$Dart._moveTo_2$$getter_ = function _moveTo_2$$getter_(){
  return _EntryWrappingImplementation$Dart._moveTo_2$$named_;
}
;
_EntryWrappingImplementation$Dart._moveTo_3$$member_ = function(receiver, parent_0, name_0, successCallback){
  return native__EntryWrappingImplementation__moveTo_3(receiver, parent_0, name_0, successCallback);
}
;
_EntryWrappingImplementation$Dart._moveTo_3$$named_ = function($n, $o, receiver, parent_0, name_0, successCallback){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 4)
    $nsme();
  return _EntryWrappingImplementation$Dart._moveTo_3$$member_(receiver, parent_0, name_0, successCallback);
}
;
_EntryWrappingImplementation$Dart._moveTo_3$$getter_ = function _moveTo_3$$getter_(){
  return _EntryWrappingImplementation$Dart._moveTo_3$$named_;
}
;
_EntryWrappingImplementation$Dart._moveTo_4$$member_ = function(receiver, parent_0, name_0, successCallback, errorCallback){
  return native__EntryWrappingImplementation__moveTo_4(receiver, parent_0, name_0, successCallback, errorCallback);
}
;
_EntryWrappingImplementation$Dart._moveTo_4$$named_ = function($n, $o, receiver, parent_0, name_0, successCallback, errorCallback){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 5)
    $nsme();
  return _EntryWrappingImplementation$Dart._moveTo_4$$member_(receiver, parent_0, name_0, successCallback, errorCallback);
}
;
_EntryWrappingImplementation$Dart._moveTo_4$$getter_ = function _moveTo_4$$getter_(){
  return _EntryWrappingImplementation$Dart._moveTo_4$$named_;
}
;
_EntryWrappingImplementation$Dart.prototype.remove$member = function(successCallback, errorCallback){
  if (successCallback == null) {
    if (errorCallback == null) {
      _EntryWrappingImplementation$Dart._remove$$member_(this);
      return;
    }
  }
   else {
    if (errorCallback == null) {
      _EntryWrappingImplementation$Dart._remove_2$$member_(this, successCallback);
      return;
    }
     else {
      _EntryWrappingImplementation$Dart._remove_3$$member_(this, successCallback, errorCallback);
      return;
    }
  }
  $Dart$ThrowException('Incorrect number or type of arguments');
}
;
_EntryWrappingImplementation$Dart.prototype.remove$named = function($n, $o, successCallback, errorCallback){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 0:
      successCallback = $o.successCallback?(++seen , $o.successCallback):(++def , $Dart$Null);
    case 1:
      errorCallback = $o.errorCallback?(++seen , $o.errorCallback):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _EntryWrappingImplementation$Dart.prototype.remove$member.call(this, successCallback, errorCallback);
}
;
_EntryWrappingImplementation$Dart.prototype.remove$getter = function remove$getter(){
  return $bind(_EntryWrappingImplementation$Dart.prototype.remove$named, this);
}
;
_EntryWrappingImplementation$Dart._remove$$member_ = function(receiver){
  return native__EntryWrappingImplementation__remove(receiver);
}
;
_EntryWrappingImplementation$Dart._remove$$named_ = function($n, $o, receiver){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _EntryWrappingImplementation$Dart._remove$$member_(receiver);
}
;
_EntryWrappingImplementation$Dart._remove$$getter_ = function _remove$$getter_(){
  return _EntryWrappingImplementation$Dart._remove$$named_;
}
;
_EntryWrappingImplementation$Dart._remove_2$$member_ = function(receiver, successCallback){
  return native__EntryWrappingImplementation__remove_2(receiver, successCallback);
}
;
_EntryWrappingImplementation$Dart._remove_2$$named_ = function($n, $o, receiver, successCallback){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _EntryWrappingImplementation$Dart._remove_2$$member_(receiver, successCallback);
}
;
_EntryWrappingImplementation$Dart._remove_2$$getter_ = function _remove_2$$getter_(){
  return _EntryWrappingImplementation$Dart._remove_2$$named_;
}
;
_EntryWrappingImplementation$Dart._remove_3$$member_ = function(receiver, successCallback, errorCallback){
  return native__EntryWrappingImplementation__remove_3(receiver, successCallback, errorCallback);
}
;
_EntryWrappingImplementation$Dart._remove_3$$named_ = function($n, $o, receiver, successCallback, errorCallback){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return _EntryWrappingImplementation$Dart._remove_3$$member_(receiver, successCallback, errorCallback);
}
;
_EntryWrappingImplementation$Dart._remove_3$$getter_ = function _remove_3$$getter_(){
  return _EntryWrappingImplementation$Dart._remove_3$$named_;
}
;
_EntryWrappingImplementation$Dart.prototype.toURL$member = function(){
  return _EntryWrappingImplementation$Dart._toURL$$member_(this);
}
;
_EntryWrappingImplementation$Dart.prototype.toURL$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _EntryWrappingImplementation$Dart.prototype.toURL$member.call(this);
}
;
_EntryWrappingImplementation$Dart.prototype.toURL$getter = function toURL$getter(){
  return $bind(_EntryWrappingImplementation$Dart.prototype.toURL$named, this);
}
;
_EntryWrappingImplementation$Dart._toURL$$member_ = function(receiver){
  return native__EntryWrappingImplementation__toURL(receiver);
}
;
_EntryWrappingImplementation$Dart._toURL$$named_ = function($n, $o, receiver){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _EntryWrappingImplementation$Dart._toURL$$member_(receiver);
}
;
_EntryWrappingImplementation$Dart._toURL$$getter_ = function _toURL$$getter_(){
  return _EntryWrappingImplementation$Dart._toURL$$named_;
}
;
_EntryWrappingImplementation$Dart.prototype.typeName$named = function(){
  return this.typeName$getter().apply(this, arguments);
}
;
_EntryWrappingImplementation$Dart.prototype.typeName$getter = function(){
  return 'Entry';
}
;
