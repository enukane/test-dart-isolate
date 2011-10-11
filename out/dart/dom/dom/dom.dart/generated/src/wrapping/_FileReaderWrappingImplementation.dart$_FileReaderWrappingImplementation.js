function _FileReaderWrappingImplementation$Dart(){
}

_FileReaderWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('_FileReaderWrappingImplementation$Dart'), _FileReaderWrappingImplementation$Dart.$RTTimplements);
}
;
_FileReaderWrappingImplementation$Dart.$RTTimplements = function(rtt){
  _FileReaderWrappingImplementation$Dart.$addTo(rtt);
}
;
_FileReaderWrappingImplementation$Dart.$addTo = function(target){
  var rtt = _FileReaderWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  DOMWrapperBase$Dart.$addTo(target);
  FileReader$Dart.$addTo(target);
}
;
_FileReaderWrappingImplementation$Dart.prototype.$implements$_FileReaderWrappingImplementation$Dart = 1;
_FileReaderWrappingImplementation$Dart.prototype.$implements$FileReader$Dart = 1;
_FileReaderWrappingImplementation$Dart.prototype.$implements$DOMWrapperBase$Dart = 1;
_FileReaderWrappingImplementation$Dart.prototype.$implements$DOMType$Dart = 1;
_FileReaderWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(_FileReaderWrappingImplementation$Dart, DOMWrapperBase$Dart);
_FileReaderWrappingImplementation$Dart.$Constructor = function(){
  DOMWrapperBase$Dart.$Constructor.call(this);
}
;
_FileReaderWrappingImplementation$Dart.$Initializer = function(){
  DOMWrapperBase$Dart.$Initializer.call(this);
}
;
_FileReaderWrappingImplementation$Dart._FileReaderWrappingImplementation$$Factory = function(){
  var tmp$0 = new _FileReaderWrappingImplementation$Dart;
  tmp$0.$typeInfo = _FileReaderWrappingImplementation$Dart.$lookupRTT();
  _FileReaderWrappingImplementation$Dart.$Initializer.call(tmp$0);
  _FileReaderWrappingImplementation$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
_FileReaderWrappingImplementation$Dart.create__FileReaderWrappingImplementation$member = function(){
  return _FileReaderWrappingImplementation$Dart._FileReaderWrappingImplementation$$Factory();
}
;
_FileReaderWrappingImplementation$Dart.create__FileReaderWrappingImplementation$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _FileReaderWrappingImplementation$Dart.create__FileReaderWrappingImplementation$member();
}
;
function native__FileReaderWrappingImplementation_create__FileReaderWrappingImplementation(){
  return _FileReaderWrappingImplementation$Dart.create__FileReaderWrappingImplementation$member();
}

_FileReaderWrappingImplementation$Dart.create__FileReaderWrappingImplementation$getter = function create__FileReaderWrappingImplementation$getter(){
  return _FileReaderWrappingImplementation$Dart.create__FileReaderWrappingImplementation$named;
}
;
_FileReaderWrappingImplementation$Dart.prototype.error$named = function(){
  return this.error$getter().apply(this, arguments);
}
;
_FileReaderWrappingImplementation$Dart.prototype.error$getter = function(){
  return _FileReaderWrappingImplementation$Dart._get__FileReader_error$$member_(this);
}
;
_FileReaderWrappingImplementation$Dart._get__FileReader_error$$member_ = function(_this){
  return native__FileReaderWrappingImplementation__get__FileReader_error(_this);
}
;
_FileReaderWrappingImplementation$Dart._get__FileReader_error$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _FileReaderWrappingImplementation$Dart._get__FileReader_error$$member_(_this);
}
;
_FileReaderWrappingImplementation$Dart._get__FileReader_error$$getter_ = function _get__FileReader_error$$getter_(){
  return _FileReaderWrappingImplementation$Dart._get__FileReader_error$$named_;
}
;
_FileReaderWrappingImplementation$Dart.prototype.onabort$named = function(){
  return this.onabort$getter().apply(this, arguments);
}
;
_FileReaderWrappingImplementation$Dart.prototype.onabort$getter = function(){
  return _FileReaderWrappingImplementation$Dart._get__FileReader_onabort$$member_(this);
}
;
_FileReaderWrappingImplementation$Dart.prototype.onabort$setter = function(value){
  _FileReaderWrappingImplementation$Dart._set__FileReader_onabort$$member_(this, value);
}
;
_FileReaderWrappingImplementation$Dart._get__FileReader_onabort$$member_ = function(_this){
  return native__FileReaderWrappingImplementation__get__FileReader_onabort(_this);
}
;
_FileReaderWrappingImplementation$Dart._get__FileReader_onabort$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _FileReaderWrappingImplementation$Dart._get__FileReader_onabort$$member_(_this);
}
;
_FileReaderWrappingImplementation$Dart._get__FileReader_onabort$$getter_ = function _get__FileReader_onabort$$getter_(){
  return _FileReaderWrappingImplementation$Dart._get__FileReader_onabort$$named_;
}
;
_FileReaderWrappingImplementation$Dart._set__FileReader_onabort$$member_ = function(_this, value){
  return native__FileReaderWrappingImplementation__set__FileReader_onabort(_this, value);
}
;
_FileReaderWrappingImplementation$Dart._set__FileReader_onabort$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _FileReaderWrappingImplementation$Dart._set__FileReader_onabort$$member_(_this, value);
}
;
_FileReaderWrappingImplementation$Dart._set__FileReader_onabort$$getter_ = function _set__FileReader_onabort$$getter_(){
  return _FileReaderWrappingImplementation$Dart._set__FileReader_onabort$$named_;
}
;
_FileReaderWrappingImplementation$Dart.prototype.onerror$named = function(){
  return this.onerror$getter().apply(this, arguments);
}
;
_FileReaderWrappingImplementation$Dart.prototype.onerror$getter = function(){
  return _FileReaderWrappingImplementation$Dart._get__FileReader_onerror$$member_(this);
}
;
_FileReaderWrappingImplementation$Dart.prototype.onerror$setter = function(value){
  _FileReaderWrappingImplementation$Dart._set__FileReader_onerror$$member_(this, value);
}
;
_FileReaderWrappingImplementation$Dart._get__FileReader_onerror$$member_ = function(_this){
  return native__FileReaderWrappingImplementation__get__FileReader_onerror(_this);
}
;
_FileReaderWrappingImplementation$Dart._get__FileReader_onerror$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _FileReaderWrappingImplementation$Dart._get__FileReader_onerror$$member_(_this);
}
;
_FileReaderWrappingImplementation$Dart._get__FileReader_onerror$$getter_ = function _get__FileReader_onerror$$getter_(){
  return _FileReaderWrappingImplementation$Dart._get__FileReader_onerror$$named_;
}
;
_FileReaderWrappingImplementation$Dart._set__FileReader_onerror$$member_ = function(_this, value){
  return native__FileReaderWrappingImplementation__set__FileReader_onerror(_this, value);
}
;
_FileReaderWrappingImplementation$Dart._set__FileReader_onerror$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _FileReaderWrappingImplementation$Dart._set__FileReader_onerror$$member_(_this, value);
}
;
_FileReaderWrappingImplementation$Dart._set__FileReader_onerror$$getter_ = function _set__FileReader_onerror$$getter_(){
  return _FileReaderWrappingImplementation$Dart._set__FileReader_onerror$$named_;
}
;
_FileReaderWrappingImplementation$Dart.prototype.onload$named = function(){
  return this.onload$getter().apply(this, arguments);
}
;
_FileReaderWrappingImplementation$Dart.prototype.onload$getter = function(){
  return _FileReaderWrappingImplementation$Dart._get__FileReader_onload$$member_(this);
}
;
_FileReaderWrappingImplementation$Dart.prototype.onload$setter = function(value){
  _FileReaderWrappingImplementation$Dart._set__FileReader_onload$$member_(this, value);
}
;
_FileReaderWrappingImplementation$Dart._get__FileReader_onload$$member_ = function(_this){
  return native__FileReaderWrappingImplementation__get__FileReader_onload(_this);
}
;
_FileReaderWrappingImplementation$Dart._get__FileReader_onload$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _FileReaderWrappingImplementation$Dart._get__FileReader_onload$$member_(_this);
}
;
_FileReaderWrappingImplementation$Dart._get__FileReader_onload$$getter_ = function _get__FileReader_onload$$getter_(){
  return _FileReaderWrappingImplementation$Dart._get__FileReader_onload$$named_;
}
;
_FileReaderWrappingImplementation$Dart._set__FileReader_onload$$member_ = function(_this, value){
  return native__FileReaderWrappingImplementation__set__FileReader_onload(_this, value);
}
;
_FileReaderWrappingImplementation$Dart._set__FileReader_onload$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _FileReaderWrappingImplementation$Dart._set__FileReader_onload$$member_(_this, value);
}
;
_FileReaderWrappingImplementation$Dart._set__FileReader_onload$$getter_ = function _set__FileReader_onload$$getter_(){
  return _FileReaderWrappingImplementation$Dart._set__FileReader_onload$$named_;
}
;
_FileReaderWrappingImplementation$Dart.prototype.onloadend$named = function(){
  return this.onloadend$getter().apply(this, arguments);
}
;
_FileReaderWrappingImplementation$Dart.prototype.onloadend$getter = function(){
  return _FileReaderWrappingImplementation$Dart._get__FileReader_onloadend$$member_(this);
}
;
_FileReaderWrappingImplementation$Dart.prototype.onloadend$setter = function(value){
  _FileReaderWrappingImplementation$Dart._set__FileReader_onloadend$$member_(this, value);
}
;
_FileReaderWrappingImplementation$Dart._get__FileReader_onloadend$$member_ = function(_this){
  return native__FileReaderWrappingImplementation__get__FileReader_onloadend(_this);
}
;
_FileReaderWrappingImplementation$Dart._get__FileReader_onloadend$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _FileReaderWrappingImplementation$Dart._get__FileReader_onloadend$$member_(_this);
}
;
_FileReaderWrappingImplementation$Dart._get__FileReader_onloadend$$getter_ = function _get__FileReader_onloadend$$getter_(){
  return _FileReaderWrappingImplementation$Dart._get__FileReader_onloadend$$named_;
}
;
_FileReaderWrappingImplementation$Dart._set__FileReader_onloadend$$member_ = function(_this, value){
  return native__FileReaderWrappingImplementation__set__FileReader_onloadend(_this, value);
}
;
_FileReaderWrappingImplementation$Dart._set__FileReader_onloadend$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _FileReaderWrappingImplementation$Dart._set__FileReader_onloadend$$member_(_this, value);
}
;
_FileReaderWrappingImplementation$Dart._set__FileReader_onloadend$$getter_ = function _set__FileReader_onloadend$$getter_(){
  return _FileReaderWrappingImplementation$Dart._set__FileReader_onloadend$$named_;
}
;
_FileReaderWrappingImplementation$Dart.prototype.onloadstart$named = function(){
  return this.onloadstart$getter().apply(this, arguments);
}
;
_FileReaderWrappingImplementation$Dart.prototype.onloadstart$getter = function(){
  return _FileReaderWrappingImplementation$Dart._get__FileReader_onloadstart$$member_(this);
}
;
_FileReaderWrappingImplementation$Dart.prototype.onloadstart$setter = function(value){
  _FileReaderWrappingImplementation$Dart._set__FileReader_onloadstart$$member_(this, value);
}
;
_FileReaderWrappingImplementation$Dart._get__FileReader_onloadstart$$member_ = function(_this){
  return native__FileReaderWrappingImplementation__get__FileReader_onloadstart(_this);
}
;
_FileReaderWrappingImplementation$Dart._get__FileReader_onloadstart$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _FileReaderWrappingImplementation$Dart._get__FileReader_onloadstart$$member_(_this);
}
;
_FileReaderWrappingImplementation$Dart._get__FileReader_onloadstart$$getter_ = function _get__FileReader_onloadstart$$getter_(){
  return _FileReaderWrappingImplementation$Dart._get__FileReader_onloadstart$$named_;
}
;
_FileReaderWrappingImplementation$Dart._set__FileReader_onloadstart$$member_ = function(_this, value){
  return native__FileReaderWrappingImplementation__set__FileReader_onloadstart(_this, value);
}
;
_FileReaderWrappingImplementation$Dart._set__FileReader_onloadstart$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _FileReaderWrappingImplementation$Dart._set__FileReader_onloadstart$$member_(_this, value);
}
;
_FileReaderWrappingImplementation$Dart._set__FileReader_onloadstart$$getter_ = function _set__FileReader_onloadstart$$getter_(){
  return _FileReaderWrappingImplementation$Dart._set__FileReader_onloadstart$$named_;
}
;
_FileReaderWrappingImplementation$Dart.prototype.onprogress$named = function(){
  return this.onprogress$getter().apply(this, arguments);
}
;
_FileReaderWrappingImplementation$Dart.prototype.onprogress$getter = function(){
  return _FileReaderWrappingImplementation$Dart._get__FileReader_onprogress$$member_(this);
}
;
_FileReaderWrappingImplementation$Dart.prototype.onprogress$setter = function(value){
  _FileReaderWrappingImplementation$Dart._set__FileReader_onprogress$$member_(this, value);
}
;
_FileReaderWrappingImplementation$Dart._get__FileReader_onprogress$$member_ = function(_this){
  return native__FileReaderWrappingImplementation__get__FileReader_onprogress(_this);
}
;
_FileReaderWrappingImplementation$Dart._get__FileReader_onprogress$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _FileReaderWrappingImplementation$Dart._get__FileReader_onprogress$$member_(_this);
}
;
_FileReaderWrappingImplementation$Dart._get__FileReader_onprogress$$getter_ = function _get__FileReader_onprogress$$getter_(){
  return _FileReaderWrappingImplementation$Dart._get__FileReader_onprogress$$named_;
}
;
_FileReaderWrappingImplementation$Dart._set__FileReader_onprogress$$member_ = function(_this, value){
  return native__FileReaderWrappingImplementation__set__FileReader_onprogress(_this, value);
}
;
_FileReaderWrappingImplementation$Dart._set__FileReader_onprogress$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _FileReaderWrappingImplementation$Dart._set__FileReader_onprogress$$member_(_this, value);
}
;
_FileReaderWrappingImplementation$Dart._set__FileReader_onprogress$$getter_ = function _set__FileReader_onprogress$$getter_(){
  return _FileReaderWrappingImplementation$Dart._set__FileReader_onprogress$$named_;
}
;
_FileReaderWrappingImplementation$Dart.prototype.readyState$named = function(){
  return this.readyState$getter().apply(this, arguments);
}
;
_FileReaderWrappingImplementation$Dart.prototype.readyState$getter = function(){
  return _FileReaderWrappingImplementation$Dart._get__FileReader_readyState$$member_(this);
}
;
_FileReaderWrappingImplementation$Dart._get__FileReader_readyState$$member_ = function(_this){
  return native__FileReaderWrappingImplementation__get__FileReader_readyState(_this);
}
;
_FileReaderWrappingImplementation$Dart._get__FileReader_readyState$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _FileReaderWrappingImplementation$Dart._get__FileReader_readyState$$member_(_this);
}
;
_FileReaderWrappingImplementation$Dart._get__FileReader_readyState$$getter_ = function _get__FileReader_readyState$$getter_(){
  return _FileReaderWrappingImplementation$Dart._get__FileReader_readyState$$named_;
}
;
_FileReaderWrappingImplementation$Dart.prototype.result$named = function(){
  return this.result$getter().apply(this, arguments);
}
;
_FileReaderWrappingImplementation$Dart.prototype.result$getter = function(){
  return _FileReaderWrappingImplementation$Dart._get__FileReader_result$$member_(this);
}
;
_FileReaderWrappingImplementation$Dart._get__FileReader_result$$member_ = function(_this){
  return native__FileReaderWrappingImplementation__get__FileReader_result(_this);
}
;
_FileReaderWrappingImplementation$Dart._get__FileReader_result$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _FileReaderWrappingImplementation$Dart._get__FileReader_result$$member_(_this);
}
;
_FileReaderWrappingImplementation$Dart._get__FileReader_result$$getter_ = function _get__FileReader_result$$getter_(){
  return _FileReaderWrappingImplementation$Dart._get__FileReader_result$$named_;
}
;
_FileReaderWrappingImplementation$Dart.prototype.abort$member = function(){
  _FileReaderWrappingImplementation$Dart._abort$$member_(this);
  return;
}
;
_FileReaderWrappingImplementation$Dart.prototype.abort$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _FileReaderWrappingImplementation$Dart.prototype.abort$member.call(this);
}
;
_FileReaderWrappingImplementation$Dart.prototype.abort$getter = function abort$getter(){
  return $bind(_FileReaderWrappingImplementation$Dart.prototype.abort$named, this);
}
;
_FileReaderWrappingImplementation$Dart._abort$$member_ = function(receiver){
  return native__FileReaderWrappingImplementation__abort(receiver);
}
;
_FileReaderWrappingImplementation$Dart._abort$$named_ = function($n, $o, receiver){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _FileReaderWrappingImplementation$Dart._abort$$member_(receiver);
}
;
_FileReaderWrappingImplementation$Dart._abort$$getter_ = function _abort$$getter_(){
  return _FileReaderWrappingImplementation$Dart._abort$$named_;
}
;
_FileReaderWrappingImplementation$Dart.prototype.readAsArrayBuffer$member = function(blob){
  _FileReaderWrappingImplementation$Dart._readAsArrayBuffer$$member_(this, blob);
  return;
}
;
_FileReaderWrappingImplementation$Dart.prototype.readAsArrayBuffer$named = function($n, $o, blob){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _FileReaderWrappingImplementation$Dart.prototype.readAsArrayBuffer$member.call(this, blob);
}
;
_FileReaderWrappingImplementation$Dart.prototype.readAsArrayBuffer$getter = function readAsArrayBuffer$getter(){
  return $bind(_FileReaderWrappingImplementation$Dart.prototype.readAsArrayBuffer$named, this);
}
;
_FileReaderWrappingImplementation$Dart._readAsArrayBuffer$$member_ = function(receiver, blob){
  return native__FileReaderWrappingImplementation__readAsArrayBuffer(receiver, blob);
}
;
_FileReaderWrappingImplementation$Dart._readAsArrayBuffer$$named_ = function($n, $o, receiver, blob){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _FileReaderWrappingImplementation$Dart._readAsArrayBuffer$$member_(receiver, blob);
}
;
_FileReaderWrappingImplementation$Dart._readAsArrayBuffer$$getter_ = function _readAsArrayBuffer$$getter_(){
  return _FileReaderWrappingImplementation$Dart._readAsArrayBuffer$$named_;
}
;
_FileReaderWrappingImplementation$Dart.prototype.readAsBinaryString$member = function(blob){
  _FileReaderWrappingImplementation$Dart._readAsBinaryString$$member_(this, blob);
  return;
}
;
_FileReaderWrappingImplementation$Dart.prototype.readAsBinaryString$named = function($n, $o, blob){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _FileReaderWrappingImplementation$Dart.prototype.readAsBinaryString$member.call(this, blob);
}
;
_FileReaderWrappingImplementation$Dart.prototype.readAsBinaryString$getter = function readAsBinaryString$getter(){
  return $bind(_FileReaderWrappingImplementation$Dart.prototype.readAsBinaryString$named, this);
}
;
_FileReaderWrappingImplementation$Dart._readAsBinaryString$$member_ = function(receiver, blob){
  return native__FileReaderWrappingImplementation__readAsBinaryString(receiver, blob);
}
;
_FileReaderWrappingImplementation$Dart._readAsBinaryString$$named_ = function($n, $o, receiver, blob){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _FileReaderWrappingImplementation$Dart._readAsBinaryString$$member_(receiver, blob);
}
;
_FileReaderWrappingImplementation$Dart._readAsBinaryString$$getter_ = function _readAsBinaryString$$getter_(){
  return _FileReaderWrappingImplementation$Dart._readAsBinaryString$$named_;
}
;
_FileReaderWrappingImplementation$Dart.prototype.readAsDataURL$member = function(blob){
  _FileReaderWrappingImplementation$Dart._readAsDataURL$$member_(this, blob);
  return;
}
;
_FileReaderWrappingImplementation$Dart.prototype.readAsDataURL$named = function($n, $o, blob){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _FileReaderWrappingImplementation$Dart.prototype.readAsDataURL$member.call(this, blob);
}
;
_FileReaderWrappingImplementation$Dart.prototype.readAsDataURL$getter = function readAsDataURL$getter(){
  return $bind(_FileReaderWrappingImplementation$Dart.prototype.readAsDataURL$named, this);
}
;
_FileReaderWrappingImplementation$Dart._readAsDataURL$$member_ = function(receiver, blob){
  return native__FileReaderWrappingImplementation__readAsDataURL(receiver, blob);
}
;
_FileReaderWrappingImplementation$Dart._readAsDataURL$$named_ = function($n, $o, receiver, blob){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _FileReaderWrappingImplementation$Dart._readAsDataURL$$member_(receiver, blob);
}
;
_FileReaderWrappingImplementation$Dart._readAsDataURL$$getter_ = function _readAsDataURL$$getter_(){
  return _FileReaderWrappingImplementation$Dart._readAsDataURL$$named_;
}
;
_FileReaderWrappingImplementation$Dart.prototype.readAsText$member = function(blob, encoding){
  if (encoding == null) {
    _FileReaderWrappingImplementation$Dart._readAsText$$member_(this, blob);
    return;
  }
   else {
    _FileReaderWrappingImplementation$Dart._readAsText_2$$member_(this, blob, encoding);
    return;
  }
}
;
_FileReaderWrappingImplementation$Dart.prototype.readAsText$named = function($n, $o, blob, encoding){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 1:
      encoding = $o.encoding?(++seen , $o.encoding):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _FileReaderWrappingImplementation$Dart.prototype.readAsText$member.call(this, blob, encoding);
}
;
_FileReaderWrappingImplementation$Dart.prototype.readAsText$getter = function readAsText$getter(){
  return $bind(_FileReaderWrappingImplementation$Dart.prototype.readAsText$named, this);
}
;
_FileReaderWrappingImplementation$Dart._readAsText$$member_ = function(receiver, blob){
  return native__FileReaderWrappingImplementation__readAsText(receiver, blob);
}
;
_FileReaderWrappingImplementation$Dart._readAsText$$named_ = function($n, $o, receiver, blob){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _FileReaderWrappingImplementation$Dart._readAsText$$member_(receiver, blob);
}
;
_FileReaderWrappingImplementation$Dart._readAsText$$getter_ = function _readAsText$$getter_(){
  return _FileReaderWrappingImplementation$Dart._readAsText$$named_;
}
;
_FileReaderWrappingImplementation$Dart._readAsText_2$$member_ = function(receiver, blob, encoding){
  return native__FileReaderWrappingImplementation__readAsText_2(receiver, blob, encoding);
}
;
_FileReaderWrappingImplementation$Dart._readAsText_2$$named_ = function($n, $o, receiver, blob, encoding){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return _FileReaderWrappingImplementation$Dart._readAsText_2$$member_(receiver, blob, encoding);
}
;
_FileReaderWrappingImplementation$Dart._readAsText_2$$getter_ = function _readAsText_2$$getter_(){
  return _FileReaderWrappingImplementation$Dart._readAsText_2$$named_;
}
;
_FileReaderWrappingImplementation$Dart.prototype.typeName$named = function(){
  return this.typeName$getter().apply(this, arguments);
}
;
_FileReaderWrappingImplementation$Dart.prototype.typeName$getter = function(){
  return 'FileReader';
}
;
