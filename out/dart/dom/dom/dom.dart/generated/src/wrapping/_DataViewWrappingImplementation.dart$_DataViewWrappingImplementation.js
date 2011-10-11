function _DataViewWrappingImplementation$Dart(){
}

_DataViewWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('_DataViewWrappingImplementation$Dart'), _DataViewWrappingImplementation$Dart.$RTTimplements);
}
;
_DataViewWrappingImplementation$Dart.$RTTimplements = function(rtt){
  _DataViewWrappingImplementation$Dart.$addTo(rtt);
}
;
_DataViewWrappingImplementation$Dart.$addTo = function(target){
  var rtt = _DataViewWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  _ArrayBufferViewWrappingImplementation$Dart.$addTo(target);
  DataView$Dart.$addTo(target);
}
;
_DataViewWrappingImplementation$Dart.prototype.$implements$_DataViewWrappingImplementation$Dart = 1;
_DataViewWrappingImplementation$Dart.prototype.$implements$DataView$Dart = 1;
_DataViewWrappingImplementation$Dart.prototype.$implements$ArrayBufferView$Dart = 1;
_DataViewWrappingImplementation$Dart.prototype.$implements$_ArrayBufferViewWrappingImplementation$Dart = 1;
_DataViewWrappingImplementation$Dart.prototype.$implements$DOMWrapperBase$Dart = 1;
_DataViewWrappingImplementation$Dart.prototype.$implements$DOMType$Dart = 1;
_DataViewWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(_DataViewWrappingImplementation$Dart, _ArrayBufferViewWrappingImplementation$Dart);
_DataViewWrappingImplementation$Dart.$Constructor = function(){
  _ArrayBufferViewWrappingImplementation$Dart.$Constructor.call(this);
}
;
_DataViewWrappingImplementation$Dart.$Initializer = function(){
  _ArrayBufferViewWrappingImplementation$Dart.$Initializer.call(this);
}
;
_DataViewWrappingImplementation$Dart._DataViewWrappingImplementation$$Factory = function(){
  var tmp$0 = new _DataViewWrappingImplementation$Dart;
  tmp$0.$typeInfo = _DataViewWrappingImplementation$Dart.$lookupRTT();
  _DataViewWrappingImplementation$Dart.$Initializer.call(tmp$0);
  _DataViewWrappingImplementation$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
_DataViewWrappingImplementation$Dart.create__DataViewWrappingImplementation$member = function(){
  return _DataViewWrappingImplementation$Dart._DataViewWrappingImplementation$$Factory();
}
;
_DataViewWrappingImplementation$Dart.create__DataViewWrappingImplementation$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _DataViewWrappingImplementation$Dart.create__DataViewWrappingImplementation$member();
}
;
function native__DataViewWrappingImplementation_create__DataViewWrappingImplementation(){
  return _DataViewWrappingImplementation$Dart.create__DataViewWrappingImplementation$member();
}

_DataViewWrappingImplementation$Dart.create__DataViewWrappingImplementation$getter = function create__DataViewWrappingImplementation$getter(){
  return _DataViewWrappingImplementation$Dart.create__DataViewWrappingImplementation$named;
}
;
_DataViewWrappingImplementation$Dart.prototype.getFloat32$member = function(byteOffset, littleEndian){
  if (littleEndian == null) {
    return _DataViewWrappingImplementation$Dart._getFloat32$$member_(this, byteOffset);
  }
   else {
    return _DataViewWrappingImplementation$Dart._getFloat32_2$$member_(this, byteOffset, littleEndian);
  }
}
;
_DataViewWrappingImplementation$Dart.prototype.getFloat32$named = function($n, $o, byteOffset, littleEndian){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 1:
      littleEndian = $o.littleEndian?(++seen , $o.littleEndian):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DataViewWrappingImplementation$Dart.prototype.getFloat32$member.call(this, byteOffset, littleEndian);
}
;
_DataViewWrappingImplementation$Dart.prototype.getFloat32$getter = function getFloat32$getter(){
  return $bind(_DataViewWrappingImplementation$Dart.prototype.getFloat32$named, this);
}
;
_DataViewWrappingImplementation$Dart._getFloat32$$member_ = function(receiver, byteOffset){
  return native__DataViewWrappingImplementation__getFloat32(receiver, byteOffset);
}
;
_DataViewWrappingImplementation$Dart._getFloat32$$named_ = function($n, $o, receiver, byteOffset){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DataViewWrappingImplementation$Dart._getFloat32$$member_(receiver, byteOffset);
}
;
_DataViewWrappingImplementation$Dart._getFloat32$$getter_ = function _getFloat32$$getter_(){
  return _DataViewWrappingImplementation$Dart._getFloat32$$named_;
}
;
_DataViewWrappingImplementation$Dart._getFloat32_2$$member_ = function(receiver, byteOffset, littleEndian){
  return native__DataViewWrappingImplementation__getFloat32_2(receiver, byteOffset, littleEndian);
}
;
_DataViewWrappingImplementation$Dart._getFloat32_2$$named_ = function($n, $o, receiver, byteOffset, littleEndian){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return _DataViewWrappingImplementation$Dart._getFloat32_2$$member_(receiver, byteOffset, littleEndian);
}
;
_DataViewWrappingImplementation$Dart._getFloat32_2$$getter_ = function _getFloat32_2$$getter_(){
  return _DataViewWrappingImplementation$Dart._getFloat32_2$$named_;
}
;
_DataViewWrappingImplementation$Dart.prototype.getFloat64$member = function(byteOffset, littleEndian){
  if (littleEndian == null) {
    return _DataViewWrappingImplementation$Dart._getFloat64$$member_(this, byteOffset);
  }
   else {
    return _DataViewWrappingImplementation$Dart._getFloat64_2$$member_(this, byteOffset, littleEndian);
  }
}
;
_DataViewWrappingImplementation$Dart.prototype.getFloat64$named = function($n, $o, byteOffset, littleEndian){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 1:
      littleEndian = $o.littleEndian?(++seen , $o.littleEndian):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DataViewWrappingImplementation$Dart.prototype.getFloat64$member.call(this, byteOffset, littleEndian);
}
;
_DataViewWrappingImplementation$Dart.prototype.getFloat64$getter = function getFloat64$getter(){
  return $bind(_DataViewWrappingImplementation$Dart.prototype.getFloat64$named, this);
}
;
_DataViewWrappingImplementation$Dart._getFloat64$$member_ = function(receiver, byteOffset){
  return native__DataViewWrappingImplementation__getFloat64(receiver, byteOffset);
}
;
_DataViewWrappingImplementation$Dart._getFloat64$$named_ = function($n, $o, receiver, byteOffset){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DataViewWrappingImplementation$Dart._getFloat64$$member_(receiver, byteOffset);
}
;
_DataViewWrappingImplementation$Dart._getFloat64$$getter_ = function _getFloat64$$getter_(){
  return _DataViewWrappingImplementation$Dart._getFloat64$$named_;
}
;
_DataViewWrappingImplementation$Dart._getFloat64_2$$member_ = function(receiver, byteOffset, littleEndian){
  return native__DataViewWrappingImplementation__getFloat64_2(receiver, byteOffset, littleEndian);
}
;
_DataViewWrappingImplementation$Dart._getFloat64_2$$named_ = function($n, $o, receiver, byteOffset, littleEndian){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return _DataViewWrappingImplementation$Dart._getFloat64_2$$member_(receiver, byteOffset, littleEndian);
}
;
_DataViewWrappingImplementation$Dart._getFloat64_2$$getter_ = function _getFloat64_2$$getter_(){
  return _DataViewWrappingImplementation$Dart._getFloat64_2$$named_;
}
;
_DataViewWrappingImplementation$Dart.prototype.getInt16$member = function(byteOffset, littleEndian){
  if (littleEndian == null) {
    return _DataViewWrappingImplementation$Dart._getInt16$$member_(this, byteOffset);
  }
   else {
    return _DataViewWrappingImplementation$Dart._getInt16_2$$member_(this, byteOffset, littleEndian);
  }
}
;
_DataViewWrappingImplementation$Dart.prototype.getInt16$named = function($n, $o, byteOffset, littleEndian){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 1:
      littleEndian = $o.littleEndian?(++seen , $o.littleEndian):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DataViewWrappingImplementation$Dart.prototype.getInt16$member.call(this, byteOffset, littleEndian);
}
;
_DataViewWrappingImplementation$Dart.prototype.getInt16$getter = function getInt16$getter(){
  return $bind(_DataViewWrappingImplementation$Dart.prototype.getInt16$named, this);
}
;
_DataViewWrappingImplementation$Dart._getInt16$$member_ = function(receiver, byteOffset){
  return native__DataViewWrappingImplementation__getInt16(receiver, byteOffset);
}
;
_DataViewWrappingImplementation$Dart._getInt16$$named_ = function($n, $o, receiver, byteOffset){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DataViewWrappingImplementation$Dart._getInt16$$member_(receiver, byteOffset);
}
;
_DataViewWrappingImplementation$Dart._getInt16$$getter_ = function _getInt16$$getter_(){
  return _DataViewWrappingImplementation$Dart._getInt16$$named_;
}
;
_DataViewWrappingImplementation$Dart._getInt16_2$$member_ = function(receiver, byteOffset, littleEndian){
  return native__DataViewWrappingImplementation__getInt16_2(receiver, byteOffset, littleEndian);
}
;
_DataViewWrappingImplementation$Dart._getInt16_2$$named_ = function($n, $o, receiver, byteOffset, littleEndian){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return _DataViewWrappingImplementation$Dart._getInt16_2$$member_(receiver, byteOffset, littleEndian);
}
;
_DataViewWrappingImplementation$Dart._getInt16_2$$getter_ = function _getInt16_2$$getter_(){
  return _DataViewWrappingImplementation$Dart._getInt16_2$$named_;
}
;
_DataViewWrappingImplementation$Dart.prototype.getInt32$member = function(byteOffset, littleEndian){
  if (littleEndian == null) {
    return _DataViewWrappingImplementation$Dart._getInt32$$member_(this, byteOffset);
  }
   else {
    return _DataViewWrappingImplementation$Dart._getInt32_2$$member_(this, byteOffset, littleEndian);
  }
}
;
_DataViewWrappingImplementation$Dart.prototype.getInt32$named = function($n, $o, byteOffset, littleEndian){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 1:
      littleEndian = $o.littleEndian?(++seen , $o.littleEndian):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DataViewWrappingImplementation$Dart.prototype.getInt32$member.call(this, byteOffset, littleEndian);
}
;
_DataViewWrappingImplementation$Dart.prototype.getInt32$getter = function getInt32$getter(){
  return $bind(_DataViewWrappingImplementation$Dart.prototype.getInt32$named, this);
}
;
_DataViewWrappingImplementation$Dart._getInt32$$member_ = function(receiver, byteOffset){
  return native__DataViewWrappingImplementation__getInt32(receiver, byteOffset);
}
;
_DataViewWrappingImplementation$Dart._getInt32$$named_ = function($n, $o, receiver, byteOffset){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DataViewWrappingImplementation$Dart._getInt32$$member_(receiver, byteOffset);
}
;
_DataViewWrappingImplementation$Dart._getInt32$$getter_ = function _getInt32$$getter_(){
  return _DataViewWrappingImplementation$Dart._getInt32$$named_;
}
;
_DataViewWrappingImplementation$Dart._getInt32_2$$member_ = function(receiver, byteOffset, littleEndian){
  return native__DataViewWrappingImplementation__getInt32_2(receiver, byteOffset, littleEndian);
}
;
_DataViewWrappingImplementation$Dart._getInt32_2$$named_ = function($n, $o, receiver, byteOffset, littleEndian){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return _DataViewWrappingImplementation$Dart._getInt32_2$$member_(receiver, byteOffset, littleEndian);
}
;
_DataViewWrappingImplementation$Dart._getInt32_2$$getter_ = function _getInt32_2$$getter_(){
  return _DataViewWrappingImplementation$Dart._getInt32_2$$named_;
}
;
_DataViewWrappingImplementation$Dart.prototype.getInt8$member = function(){
  return _DataViewWrappingImplementation$Dart._getInt8$$member_(this);
}
;
_DataViewWrappingImplementation$Dart.prototype.getInt8$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _DataViewWrappingImplementation$Dart.prototype.getInt8$member.call(this);
}
;
_DataViewWrappingImplementation$Dart.prototype.getInt8$getter = function getInt8$getter(){
  return $bind(_DataViewWrappingImplementation$Dart.prototype.getInt8$named, this);
}
;
_DataViewWrappingImplementation$Dart._getInt8$$member_ = function(receiver){
  return native__DataViewWrappingImplementation__getInt8(receiver);
}
;
_DataViewWrappingImplementation$Dart._getInt8$$named_ = function($n, $o, receiver){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DataViewWrappingImplementation$Dart._getInt8$$member_(receiver);
}
;
_DataViewWrappingImplementation$Dart._getInt8$$getter_ = function _getInt8$$getter_(){
  return _DataViewWrappingImplementation$Dart._getInt8$$named_;
}
;
_DataViewWrappingImplementation$Dart.prototype.getUint16$member = function(byteOffset, littleEndian){
  if (littleEndian == null) {
    return _DataViewWrappingImplementation$Dart._getUint16$$member_(this, byteOffset);
  }
   else {
    return _DataViewWrappingImplementation$Dart._getUint16_2$$member_(this, byteOffset, littleEndian);
  }
}
;
_DataViewWrappingImplementation$Dart.prototype.getUint16$named = function($n, $o, byteOffset, littleEndian){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 1:
      littleEndian = $o.littleEndian?(++seen , $o.littleEndian):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DataViewWrappingImplementation$Dart.prototype.getUint16$member.call(this, byteOffset, littleEndian);
}
;
_DataViewWrappingImplementation$Dart.prototype.getUint16$getter = function getUint16$getter(){
  return $bind(_DataViewWrappingImplementation$Dart.prototype.getUint16$named, this);
}
;
_DataViewWrappingImplementation$Dart._getUint16$$member_ = function(receiver, byteOffset){
  return native__DataViewWrappingImplementation__getUint16(receiver, byteOffset);
}
;
_DataViewWrappingImplementation$Dart._getUint16$$named_ = function($n, $o, receiver, byteOffset){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DataViewWrappingImplementation$Dart._getUint16$$member_(receiver, byteOffset);
}
;
_DataViewWrappingImplementation$Dart._getUint16$$getter_ = function _getUint16$$getter_(){
  return _DataViewWrappingImplementation$Dart._getUint16$$named_;
}
;
_DataViewWrappingImplementation$Dart._getUint16_2$$member_ = function(receiver, byteOffset, littleEndian){
  return native__DataViewWrappingImplementation__getUint16_2(receiver, byteOffset, littleEndian);
}
;
_DataViewWrappingImplementation$Dart._getUint16_2$$named_ = function($n, $o, receiver, byteOffset, littleEndian){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return _DataViewWrappingImplementation$Dart._getUint16_2$$member_(receiver, byteOffset, littleEndian);
}
;
_DataViewWrappingImplementation$Dart._getUint16_2$$getter_ = function _getUint16_2$$getter_(){
  return _DataViewWrappingImplementation$Dart._getUint16_2$$named_;
}
;
_DataViewWrappingImplementation$Dart.prototype.getUint32$member = function(byteOffset, littleEndian){
  if (littleEndian == null) {
    return _DataViewWrappingImplementation$Dart._getUint32$$member_(this, byteOffset);
  }
   else {
    return _DataViewWrappingImplementation$Dart._getUint32_2$$member_(this, byteOffset, littleEndian);
  }
}
;
_DataViewWrappingImplementation$Dart.prototype.getUint32$named = function($n, $o, byteOffset, littleEndian){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 1:
      littleEndian = $o.littleEndian?(++seen , $o.littleEndian):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DataViewWrappingImplementation$Dart.prototype.getUint32$member.call(this, byteOffset, littleEndian);
}
;
_DataViewWrappingImplementation$Dart.prototype.getUint32$getter = function getUint32$getter(){
  return $bind(_DataViewWrappingImplementation$Dart.prototype.getUint32$named, this);
}
;
_DataViewWrappingImplementation$Dart._getUint32$$member_ = function(receiver, byteOffset){
  return native__DataViewWrappingImplementation__getUint32(receiver, byteOffset);
}
;
_DataViewWrappingImplementation$Dart._getUint32$$named_ = function($n, $o, receiver, byteOffset){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DataViewWrappingImplementation$Dart._getUint32$$member_(receiver, byteOffset);
}
;
_DataViewWrappingImplementation$Dart._getUint32$$getter_ = function _getUint32$$getter_(){
  return _DataViewWrappingImplementation$Dart._getUint32$$named_;
}
;
_DataViewWrappingImplementation$Dart._getUint32_2$$member_ = function(receiver, byteOffset, littleEndian){
  return native__DataViewWrappingImplementation__getUint32_2(receiver, byteOffset, littleEndian);
}
;
_DataViewWrappingImplementation$Dart._getUint32_2$$named_ = function($n, $o, receiver, byteOffset, littleEndian){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return _DataViewWrappingImplementation$Dart._getUint32_2$$member_(receiver, byteOffset, littleEndian);
}
;
_DataViewWrappingImplementation$Dart._getUint32_2$$getter_ = function _getUint32_2$$getter_(){
  return _DataViewWrappingImplementation$Dart._getUint32_2$$named_;
}
;
_DataViewWrappingImplementation$Dart.prototype.getUint8$member = function(){
  return _DataViewWrappingImplementation$Dart._getUint8$$member_(this);
}
;
_DataViewWrappingImplementation$Dart.prototype.getUint8$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _DataViewWrappingImplementation$Dart.prototype.getUint8$member.call(this);
}
;
_DataViewWrappingImplementation$Dart.prototype.getUint8$getter = function getUint8$getter(){
  return $bind(_DataViewWrappingImplementation$Dart.prototype.getUint8$named, this);
}
;
_DataViewWrappingImplementation$Dart._getUint8$$member_ = function(receiver){
  return native__DataViewWrappingImplementation__getUint8(receiver);
}
;
_DataViewWrappingImplementation$Dart._getUint8$$named_ = function($n, $o, receiver){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DataViewWrappingImplementation$Dart._getUint8$$member_(receiver);
}
;
_DataViewWrappingImplementation$Dart._getUint8$$getter_ = function _getUint8$$getter_(){
  return _DataViewWrappingImplementation$Dart._getUint8$$named_;
}
;
_DataViewWrappingImplementation$Dart.prototype.setFloat32$member = function(byteOffset, value, littleEndian){
  if (littleEndian == null) {
    _DataViewWrappingImplementation$Dart._setFloat32$$member_(this, byteOffset, value);
    return;
  }
   else {
    _DataViewWrappingImplementation$Dart._setFloat32_2$$member_(this, byteOffset, value, littleEndian);
    return;
  }
}
;
_DataViewWrappingImplementation$Dart.prototype.setFloat32$named = function($n, $o, byteOffset, value, littleEndian){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 2:
      littleEndian = $o.littleEndian?(++seen , $o.littleEndian):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return _DataViewWrappingImplementation$Dart.prototype.setFloat32$member.call(this, byteOffset, value, littleEndian);
}
;
_DataViewWrappingImplementation$Dart.prototype.setFloat32$getter = function setFloat32$getter(){
  return $bind(_DataViewWrappingImplementation$Dart.prototype.setFloat32$named, this);
}
;
_DataViewWrappingImplementation$Dart._setFloat32$$member_ = function(receiver, byteOffset, value){
  return native__DataViewWrappingImplementation__setFloat32(receiver, byteOffset, value);
}
;
_DataViewWrappingImplementation$Dart._setFloat32$$named_ = function($n, $o, receiver, byteOffset, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return _DataViewWrappingImplementation$Dart._setFloat32$$member_(receiver, byteOffset, value);
}
;
_DataViewWrappingImplementation$Dart._setFloat32$$getter_ = function _setFloat32$$getter_(){
  return _DataViewWrappingImplementation$Dart._setFloat32$$named_;
}
;
_DataViewWrappingImplementation$Dart._setFloat32_2$$member_ = function(receiver, byteOffset, value, littleEndian){
  return native__DataViewWrappingImplementation__setFloat32_2(receiver, byteOffset, value, littleEndian);
}
;
_DataViewWrappingImplementation$Dart._setFloat32_2$$named_ = function($n, $o, receiver, byteOffset, value, littleEndian){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 4)
    $nsme();
  return _DataViewWrappingImplementation$Dart._setFloat32_2$$member_(receiver, byteOffset, value, littleEndian);
}
;
_DataViewWrappingImplementation$Dart._setFloat32_2$$getter_ = function _setFloat32_2$$getter_(){
  return _DataViewWrappingImplementation$Dart._setFloat32_2$$named_;
}
;
_DataViewWrappingImplementation$Dart.prototype.setFloat64$member = function(byteOffset, value, littleEndian){
  if (littleEndian == null) {
    _DataViewWrappingImplementation$Dart._setFloat64$$member_(this, byteOffset, value);
    return;
  }
   else {
    _DataViewWrappingImplementation$Dart._setFloat64_2$$member_(this, byteOffset, value, littleEndian);
    return;
  }
}
;
_DataViewWrappingImplementation$Dart.prototype.setFloat64$named = function($n, $o, byteOffset, value, littleEndian){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 2:
      littleEndian = $o.littleEndian?(++seen , $o.littleEndian):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return _DataViewWrappingImplementation$Dart.prototype.setFloat64$member.call(this, byteOffset, value, littleEndian);
}
;
_DataViewWrappingImplementation$Dart.prototype.setFloat64$getter = function setFloat64$getter(){
  return $bind(_DataViewWrappingImplementation$Dart.prototype.setFloat64$named, this);
}
;
_DataViewWrappingImplementation$Dart._setFloat64$$member_ = function(receiver, byteOffset, value){
  return native__DataViewWrappingImplementation__setFloat64(receiver, byteOffset, value);
}
;
_DataViewWrappingImplementation$Dart._setFloat64$$named_ = function($n, $o, receiver, byteOffset, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return _DataViewWrappingImplementation$Dart._setFloat64$$member_(receiver, byteOffset, value);
}
;
_DataViewWrappingImplementation$Dart._setFloat64$$getter_ = function _setFloat64$$getter_(){
  return _DataViewWrappingImplementation$Dart._setFloat64$$named_;
}
;
_DataViewWrappingImplementation$Dart._setFloat64_2$$member_ = function(receiver, byteOffset, value, littleEndian){
  return native__DataViewWrappingImplementation__setFloat64_2(receiver, byteOffset, value, littleEndian);
}
;
_DataViewWrappingImplementation$Dart._setFloat64_2$$named_ = function($n, $o, receiver, byteOffset, value, littleEndian){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 4)
    $nsme();
  return _DataViewWrappingImplementation$Dart._setFloat64_2$$member_(receiver, byteOffset, value, littleEndian);
}
;
_DataViewWrappingImplementation$Dart._setFloat64_2$$getter_ = function _setFloat64_2$$getter_(){
  return _DataViewWrappingImplementation$Dart._setFloat64_2$$named_;
}
;
_DataViewWrappingImplementation$Dart.prototype.setInt16$member = function(byteOffset, value, littleEndian){
  if (littleEndian == null) {
    _DataViewWrappingImplementation$Dart._setInt16$$member_(this, byteOffset, value);
    return;
  }
   else {
    _DataViewWrappingImplementation$Dart._setInt16_2$$member_(this, byteOffset, value, littleEndian);
    return;
  }
}
;
_DataViewWrappingImplementation$Dart.prototype.setInt16$named = function($n, $o, byteOffset, value, littleEndian){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 2:
      littleEndian = $o.littleEndian?(++seen , $o.littleEndian):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return _DataViewWrappingImplementation$Dart.prototype.setInt16$member.call(this, byteOffset, value, littleEndian);
}
;
_DataViewWrappingImplementation$Dart.prototype.setInt16$getter = function setInt16$getter(){
  return $bind(_DataViewWrappingImplementation$Dart.prototype.setInt16$named, this);
}
;
_DataViewWrappingImplementation$Dart._setInt16$$member_ = function(receiver, byteOffset, value){
  return native__DataViewWrappingImplementation__setInt16(receiver, byteOffset, value);
}
;
_DataViewWrappingImplementation$Dart._setInt16$$named_ = function($n, $o, receiver, byteOffset, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return _DataViewWrappingImplementation$Dart._setInt16$$member_(receiver, byteOffset, value);
}
;
_DataViewWrappingImplementation$Dart._setInt16$$getter_ = function _setInt16$$getter_(){
  return _DataViewWrappingImplementation$Dart._setInt16$$named_;
}
;
_DataViewWrappingImplementation$Dart._setInt16_2$$member_ = function(receiver, byteOffset, value, littleEndian){
  return native__DataViewWrappingImplementation__setInt16_2(receiver, byteOffset, value, littleEndian);
}
;
_DataViewWrappingImplementation$Dart._setInt16_2$$named_ = function($n, $o, receiver, byteOffset, value, littleEndian){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 4)
    $nsme();
  return _DataViewWrappingImplementation$Dart._setInt16_2$$member_(receiver, byteOffset, value, littleEndian);
}
;
_DataViewWrappingImplementation$Dart._setInt16_2$$getter_ = function _setInt16_2$$getter_(){
  return _DataViewWrappingImplementation$Dart._setInt16_2$$named_;
}
;
_DataViewWrappingImplementation$Dart.prototype.setInt32$member = function(byteOffset, value, littleEndian){
  if (littleEndian == null) {
    _DataViewWrappingImplementation$Dart._setInt32$$member_(this, byteOffset, value);
    return;
  }
   else {
    _DataViewWrappingImplementation$Dart._setInt32_2$$member_(this, byteOffset, value, littleEndian);
    return;
  }
}
;
_DataViewWrappingImplementation$Dart.prototype.setInt32$named = function($n, $o, byteOffset, value, littleEndian){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 2:
      littleEndian = $o.littleEndian?(++seen , $o.littleEndian):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return _DataViewWrappingImplementation$Dart.prototype.setInt32$member.call(this, byteOffset, value, littleEndian);
}
;
_DataViewWrappingImplementation$Dart.prototype.setInt32$getter = function setInt32$getter(){
  return $bind(_DataViewWrappingImplementation$Dart.prototype.setInt32$named, this);
}
;
_DataViewWrappingImplementation$Dart._setInt32$$member_ = function(receiver, byteOffset, value){
  return native__DataViewWrappingImplementation__setInt32(receiver, byteOffset, value);
}
;
_DataViewWrappingImplementation$Dart._setInt32$$named_ = function($n, $o, receiver, byteOffset, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return _DataViewWrappingImplementation$Dart._setInt32$$member_(receiver, byteOffset, value);
}
;
_DataViewWrappingImplementation$Dart._setInt32$$getter_ = function _setInt32$$getter_(){
  return _DataViewWrappingImplementation$Dart._setInt32$$named_;
}
;
_DataViewWrappingImplementation$Dart._setInt32_2$$member_ = function(receiver, byteOffset, value, littleEndian){
  return native__DataViewWrappingImplementation__setInt32_2(receiver, byteOffset, value, littleEndian);
}
;
_DataViewWrappingImplementation$Dart._setInt32_2$$named_ = function($n, $o, receiver, byteOffset, value, littleEndian){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 4)
    $nsme();
  return _DataViewWrappingImplementation$Dart._setInt32_2$$member_(receiver, byteOffset, value, littleEndian);
}
;
_DataViewWrappingImplementation$Dart._setInt32_2$$getter_ = function _setInt32_2$$getter_(){
  return _DataViewWrappingImplementation$Dart._setInt32_2$$named_;
}
;
_DataViewWrappingImplementation$Dart.prototype.setInt8$member = function(){
  _DataViewWrappingImplementation$Dart._setInt8$$member_(this);
  return;
}
;
_DataViewWrappingImplementation$Dart.prototype.setInt8$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _DataViewWrappingImplementation$Dart.prototype.setInt8$member.call(this);
}
;
_DataViewWrappingImplementation$Dart.prototype.setInt8$getter = function setInt8$getter(){
  return $bind(_DataViewWrappingImplementation$Dart.prototype.setInt8$named, this);
}
;
_DataViewWrappingImplementation$Dart._setInt8$$member_ = function(receiver){
  return native__DataViewWrappingImplementation__setInt8(receiver);
}
;
_DataViewWrappingImplementation$Dart._setInt8$$named_ = function($n, $o, receiver){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DataViewWrappingImplementation$Dart._setInt8$$member_(receiver);
}
;
_DataViewWrappingImplementation$Dart._setInt8$$getter_ = function _setInt8$$getter_(){
  return _DataViewWrappingImplementation$Dart._setInt8$$named_;
}
;
_DataViewWrappingImplementation$Dart.prototype.setUint16$member = function(byteOffset, value, littleEndian){
  if (littleEndian == null) {
    _DataViewWrappingImplementation$Dart._setUint16$$member_(this, byteOffset, value);
    return;
  }
   else {
    _DataViewWrappingImplementation$Dart._setUint16_2$$member_(this, byteOffset, value, littleEndian);
    return;
  }
}
;
_DataViewWrappingImplementation$Dart.prototype.setUint16$named = function($n, $o, byteOffset, value, littleEndian){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 2:
      littleEndian = $o.littleEndian?(++seen , $o.littleEndian):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return _DataViewWrappingImplementation$Dart.prototype.setUint16$member.call(this, byteOffset, value, littleEndian);
}
;
_DataViewWrappingImplementation$Dart.prototype.setUint16$getter = function setUint16$getter(){
  return $bind(_DataViewWrappingImplementation$Dart.prototype.setUint16$named, this);
}
;
_DataViewWrappingImplementation$Dart._setUint16$$member_ = function(receiver, byteOffset, value){
  return native__DataViewWrappingImplementation__setUint16(receiver, byteOffset, value);
}
;
_DataViewWrappingImplementation$Dart._setUint16$$named_ = function($n, $o, receiver, byteOffset, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return _DataViewWrappingImplementation$Dart._setUint16$$member_(receiver, byteOffset, value);
}
;
_DataViewWrappingImplementation$Dart._setUint16$$getter_ = function _setUint16$$getter_(){
  return _DataViewWrappingImplementation$Dart._setUint16$$named_;
}
;
_DataViewWrappingImplementation$Dart._setUint16_2$$member_ = function(receiver, byteOffset, value, littleEndian){
  return native__DataViewWrappingImplementation__setUint16_2(receiver, byteOffset, value, littleEndian);
}
;
_DataViewWrappingImplementation$Dart._setUint16_2$$named_ = function($n, $o, receiver, byteOffset, value, littleEndian){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 4)
    $nsme();
  return _DataViewWrappingImplementation$Dart._setUint16_2$$member_(receiver, byteOffset, value, littleEndian);
}
;
_DataViewWrappingImplementation$Dart._setUint16_2$$getter_ = function _setUint16_2$$getter_(){
  return _DataViewWrappingImplementation$Dart._setUint16_2$$named_;
}
;
_DataViewWrappingImplementation$Dart.prototype.setUint32$member = function(byteOffset, value, littleEndian){
  if (littleEndian == null) {
    _DataViewWrappingImplementation$Dart._setUint32$$member_(this, byteOffset, value);
    return;
  }
   else {
    _DataViewWrappingImplementation$Dart._setUint32_2$$member_(this, byteOffset, value, littleEndian);
    return;
  }
}
;
_DataViewWrappingImplementation$Dart.prototype.setUint32$named = function($n, $o, byteOffset, value, littleEndian){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 2:
      littleEndian = $o.littleEndian?(++seen , $o.littleEndian):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return _DataViewWrappingImplementation$Dart.prototype.setUint32$member.call(this, byteOffset, value, littleEndian);
}
;
_DataViewWrappingImplementation$Dart.prototype.setUint32$getter = function setUint32$getter(){
  return $bind(_DataViewWrappingImplementation$Dart.prototype.setUint32$named, this);
}
;
_DataViewWrappingImplementation$Dart._setUint32$$member_ = function(receiver, byteOffset, value){
  return native__DataViewWrappingImplementation__setUint32(receiver, byteOffset, value);
}
;
_DataViewWrappingImplementation$Dart._setUint32$$named_ = function($n, $o, receiver, byteOffset, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return _DataViewWrappingImplementation$Dart._setUint32$$member_(receiver, byteOffset, value);
}
;
_DataViewWrappingImplementation$Dart._setUint32$$getter_ = function _setUint32$$getter_(){
  return _DataViewWrappingImplementation$Dart._setUint32$$named_;
}
;
_DataViewWrappingImplementation$Dart._setUint32_2$$member_ = function(receiver, byteOffset, value, littleEndian){
  return native__DataViewWrappingImplementation__setUint32_2(receiver, byteOffset, value, littleEndian);
}
;
_DataViewWrappingImplementation$Dart._setUint32_2$$named_ = function($n, $o, receiver, byteOffset, value, littleEndian){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 4)
    $nsme();
  return _DataViewWrappingImplementation$Dart._setUint32_2$$member_(receiver, byteOffset, value, littleEndian);
}
;
_DataViewWrappingImplementation$Dart._setUint32_2$$getter_ = function _setUint32_2$$getter_(){
  return _DataViewWrappingImplementation$Dart._setUint32_2$$named_;
}
;
_DataViewWrappingImplementation$Dart.prototype.setUint8$member = function(){
  _DataViewWrappingImplementation$Dart._setUint8$$member_(this);
  return;
}
;
_DataViewWrappingImplementation$Dart.prototype.setUint8$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _DataViewWrappingImplementation$Dart.prototype.setUint8$member.call(this);
}
;
_DataViewWrappingImplementation$Dart.prototype.setUint8$getter = function setUint8$getter(){
  return $bind(_DataViewWrappingImplementation$Dart.prototype.setUint8$named, this);
}
;
_DataViewWrappingImplementation$Dart._setUint8$$member_ = function(receiver){
  return native__DataViewWrappingImplementation__setUint8(receiver);
}
;
_DataViewWrappingImplementation$Dart._setUint8$$named_ = function($n, $o, receiver){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DataViewWrappingImplementation$Dart._setUint8$$member_(receiver);
}
;
_DataViewWrappingImplementation$Dart._setUint8$$getter_ = function _setUint8$$getter_(){
  return _DataViewWrappingImplementation$Dart._setUint8$$named_;
}
;
_DataViewWrappingImplementation$Dart.prototype.typeName$named = function(){
  return this.typeName$getter().apply(this, arguments);
}
;
_DataViewWrappingImplementation$Dart.prototype.typeName$getter = function(){
  return 'DataView';
}
;
