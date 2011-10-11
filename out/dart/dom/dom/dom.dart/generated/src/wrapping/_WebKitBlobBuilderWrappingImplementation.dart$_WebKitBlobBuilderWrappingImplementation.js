function _WebKitBlobBuilderWrappingImplementation$Dart(){
}

_WebKitBlobBuilderWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('_WebKitBlobBuilderWrappingImplementation$Dart'), _WebKitBlobBuilderWrappingImplementation$Dart.$RTTimplements);
}
;
_WebKitBlobBuilderWrappingImplementation$Dart.$RTTimplements = function(rtt){
  _WebKitBlobBuilderWrappingImplementation$Dart.$addTo(rtt);
}
;
_WebKitBlobBuilderWrappingImplementation$Dart.$addTo = function(target){
  var rtt = _WebKitBlobBuilderWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  DOMWrapperBase$Dart.$addTo(target);
  WebKitBlobBuilder$Dart.$addTo(target);
}
;
_WebKitBlobBuilderWrappingImplementation$Dart.prototype.$implements$_WebKitBlobBuilderWrappingImplementation$Dart = 1;
_WebKitBlobBuilderWrappingImplementation$Dart.prototype.$implements$WebKitBlobBuilder$Dart = 1;
_WebKitBlobBuilderWrappingImplementation$Dart.prototype.$implements$DOMWrapperBase$Dart = 1;
_WebKitBlobBuilderWrappingImplementation$Dart.prototype.$implements$DOMType$Dart = 1;
_WebKitBlobBuilderWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(_WebKitBlobBuilderWrappingImplementation$Dart, DOMWrapperBase$Dart);
_WebKitBlobBuilderWrappingImplementation$Dart.$Constructor = function(){
  DOMWrapperBase$Dart.$Constructor.call(this);
}
;
_WebKitBlobBuilderWrappingImplementation$Dart.$Initializer = function(){
  DOMWrapperBase$Dart.$Initializer.call(this);
}
;
_WebKitBlobBuilderWrappingImplementation$Dart._WebKitBlobBuilderWrappingImplementation$$Factory = function(){
  var tmp$0 = new _WebKitBlobBuilderWrappingImplementation$Dart;
  tmp$0.$typeInfo = _WebKitBlobBuilderWrappingImplementation$Dart.$lookupRTT();
  _WebKitBlobBuilderWrappingImplementation$Dart.$Initializer.call(tmp$0);
  _WebKitBlobBuilderWrappingImplementation$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
_WebKitBlobBuilderWrappingImplementation$Dart.create__WebKitBlobBuilderWrappingImplementation$member = function(){
  return _WebKitBlobBuilderWrappingImplementation$Dart._WebKitBlobBuilderWrappingImplementation$$Factory();
}
;
_WebKitBlobBuilderWrappingImplementation$Dart.create__WebKitBlobBuilderWrappingImplementation$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _WebKitBlobBuilderWrappingImplementation$Dart.create__WebKitBlobBuilderWrappingImplementation$member();
}
;
function native__WebKitBlobBuilderWrappingImplementation_create__WebKitBlobBuilderWrappingImplementation(){
  return _WebKitBlobBuilderWrappingImplementation$Dart.create__WebKitBlobBuilderWrappingImplementation$member();
}

_WebKitBlobBuilderWrappingImplementation$Dart.create__WebKitBlobBuilderWrappingImplementation$getter = function create__WebKitBlobBuilderWrappingImplementation$getter(){
  return _WebKitBlobBuilderWrappingImplementation$Dart.create__WebKitBlobBuilderWrappingImplementation$named;
}
;
_WebKitBlobBuilderWrappingImplementation$Dart.prototype.append$member = function(blob_OR_value, endings){
  var tmp$0;
  if (!!(tmp$0 = blob_OR_value , tmp$0 != null && tmp$0.$implements$Blob$Dart)) {
    if (endings == null) {
      _WebKitBlobBuilderWrappingImplementation$Dart._append$$member_(this, blob_OR_value);
      return;
    }
  }
   else {
    if (String.$instanceOf(blob_OR_value)) {
      if (endings == null) {
        _WebKitBlobBuilderWrappingImplementation$Dart._append_2$$member_(this, blob_OR_value);
        return;
      }
       else {
        _WebKitBlobBuilderWrappingImplementation$Dart._append_3$$member_(this, blob_OR_value, endings);
        return;
      }
    }
  }
  $Dart$ThrowException('Incorrect number or type of arguments');
}
;
_WebKitBlobBuilderWrappingImplementation$Dart.prototype.append$named = function($n, $o, blob_OR_value, endings){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 1:
      endings = $o.endings?(++seen , $o.endings):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _WebKitBlobBuilderWrappingImplementation$Dart.prototype.append$member.call(this, blob_OR_value, endings);
}
;
_WebKitBlobBuilderWrappingImplementation$Dart.prototype.append$getter = function append$getter(){
  return $bind(_WebKitBlobBuilderWrappingImplementation$Dart.prototype.append$named, this);
}
;
_WebKitBlobBuilderWrappingImplementation$Dart._append$$member_ = function(receiver, blob_OR_value){
  return native__WebKitBlobBuilderWrappingImplementation__append(receiver, blob_OR_value);
}
;
_WebKitBlobBuilderWrappingImplementation$Dart._append$$named_ = function($n, $o, receiver, blob_OR_value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _WebKitBlobBuilderWrappingImplementation$Dart._append$$member_(receiver, blob_OR_value);
}
;
_WebKitBlobBuilderWrappingImplementation$Dart._append$$getter_ = function _append$$getter_(){
  return _WebKitBlobBuilderWrappingImplementation$Dart._append$$named_;
}
;
_WebKitBlobBuilderWrappingImplementation$Dart._append_2$$member_ = function(receiver, blob_OR_value){
  return native__WebKitBlobBuilderWrappingImplementation__append_2(receiver, blob_OR_value);
}
;
_WebKitBlobBuilderWrappingImplementation$Dart._append_2$$named_ = function($n, $o, receiver, blob_OR_value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _WebKitBlobBuilderWrappingImplementation$Dart._append_2$$member_(receiver, blob_OR_value);
}
;
_WebKitBlobBuilderWrappingImplementation$Dart._append_2$$getter_ = function _append_2$$getter_(){
  return _WebKitBlobBuilderWrappingImplementation$Dart._append_2$$named_;
}
;
_WebKitBlobBuilderWrappingImplementation$Dart._append_3$$member_ = function(receiver, blob_OR_value, endings){
  return native__WebKitBlobBuilderWrappingImplementation__append_3(receiver, blob_OR_value, endings);
}
;
_WebKitBlobBuilderWrappingImplementation$Dart._append_3$$named_ = function($n, $o, receiver, blob_OR_value, endings){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return _WebKitBlobBuilderWrappingImplementation$Dart._append_3$$member_(receiver, blob_OR_value, endings);
}
;
_WebKitBlobBuilderWrappingImplementation$Dart._append_3$$getter_ = function _append_3$$getter_(){
  return _WebKitBlobBuilderWrappingImplementation$Dart._append_3$$named_;
}
;
_WebKitBlobBuilderWrappingImplementation$Dart.prototype.getBlob$member = function(contentType){
  if (contentType == null) {
    return _WebKitBlobBuilderWrappingImplementation$Dart._getBlob$$member_(this);
  }
   else {
    return _WebKitBlobBuilderWrappingImplementation$Dart._getBlob_2$$member_(this, contentType);
  }
}
;
_WebKitBlobBuilderWrappingImplementation$Dart.prototype.getBlob$named = function($n, $o, contentType){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 0:
      contentType = $o.contentType?(++seen , $o.contentType):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _WebKitBlobBuilderWrappingImplementation$Dart.prototype.getBlob$member.call(this, contentType);
}
;
_WebKitBlobBuilderWrappingImplementation$Dart.prototype.getBlob$getter = function getBlob$getter(){
  return $bind(_WebKitBlobBuilderWrappingImplementation$Dart.prototype.getBlob$named, this);
}
;
_WebKitBlobBuilderWrappingImplementation$Dart._getBlob$$member_ = function(receiver){
  return native__WebKitBlobBuilderWrappingImplementation__getBlob(receiver);
}
;
_WebKitBlobBuilderWrappingImplementation$Dart._getBlob$$named_ = function($n, $o, receiver){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _WebKitBlobBuilderWrappingImplementation$Dart._getBlob$$member_(receiver);
}
;
_WebKitBlobBuilderWrappingImplementation$Dart._getBlob$$getter_ = function _getBlob$$getter_(){
  return _WebKitBlobBuilderWrappingImplementation$Dart._getBlob$$named_;
}
;
_WebKitBlobBuilderWrappingImplementation$Dart._getBlob_2$$member_ = function(receiver, contentType){
  return native__WebKitBlobBuilderWrappingImplementation__getBlob_2(receiver, contentType);
}
;
_WebKitBlobBuilderWrappingImplementation$Dart._getBlob_2$$named_ = function($n, $o, receiver, contentType){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _WebKitBlobBuilderWrappingImplementation$Dart._getBlob_2$$member_(receiver, contentType);
}
;
_WebKitBlobBuilderWrappingImplementation$Dart._getBlob_2$$getter_ = function _getBlob_2$$getter_(){
  return _WebKitBlobBuilderWrappingImplementation$Dart._getBlob_2$$named_;
}
;
_WebKitBlobBuilderWrappingImplementation$Dart.prototype.typeName$named = function(){
  return this.typeName$getter().apply(this, arguments);
}
;
_WebKitBlobBuilderWrappingImplementation$Dart.prototype.typeName$getter = function(){
  return 'WebKitBlobBuilder';
}
;
