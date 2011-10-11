function html623afa$DataViewWrappingImplementation$Dart(){
}

html623afa$DataViewWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('html623afa$DataViewWrappingImplementation$Dart'), html623afa$DataViewWrappingImplementation$Dart.$RTTimplements);
}
;
html623afa$DataViewWrappingImplementation$Dart.$RTTimplements = function(rtt){
  html623afa$DataViewWrappingImplementation$Dart.$addTo(rtt);
}
;
html623afa$DataViewWrappingImplementation$Dart.$addTo = function(target){
  var rtt = html623afa$DataViewWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  html623afa$ArrayBufferViewWrappingImplementation$Dart.$addTo(target);
  html623afa$DataView$Dart.$addTo(target);
}
;
html623afa$DataViewWrappingImplementation$Dart.prototype.$implements$html623afa$DataViewWrappingImplementation$Dart = 1;
html623afa$DataViewWrappingImplementation$Dart.prototype.$implements$html623afa$DataView$Dart = 1;
html623afa$DataViewWrappingImplementation$Dart.prototype.$implements$html623afa$ArrayBufferView$Dart = 1;
html623afa$DataViewWrappingImplementation$Dart.prototype.$implements$html623afa$ArrayBufferViewWrappingImplementation$Dart = 1;
html623afa$DataViewWrappingImplementation$Dart.prototype.$implements$html623afa$DOMWrapperBase$Dart = 1;
html623afa$DataViewWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(html623afa$DataViewWrappingImplementation$Dart, html623afa$ArrayBufferViewWrappingImplementation$Dart);
html623afa$DataViewWrappingImplementation$Dart._wrap$html623afa$$Constructor_ = function(ptr){
  html623afa$ArrayBufferViewWrappingImplementation$Dart._wrap$html623afa$$Constructor_.call(this, ptr);
}
;
html623afa$DataViewWrappingImplementation$Dart._wrap$html623afa$$Initializer_ = function(ptr){
  html623afa$ArrayBufferViewWrappingImplementation$Dart._wrap$html623afa$$Initializer_.call(this, ptr);
}
;
html623afa$DataViewWrappingImplementation$Dart.DataViewWrappingImplementation$_wrap$30$html623afa$$Factory_ = function(ptr){
  var tmp$0 = new html623afa$DataViewWrappingImplementation$Dart;
  tmp$0.$typeInfo = html623afa$DataViewWrappingImplementation$Dart.$lookupRTT();
  html623afa$DataViewWrappingImplementation$Dart._wrap$html623afa$$Initializer_.call(tmp$0, ptr);
  html623afa$DataViewWrappingImplementation$Dart._wrap$html623afa$$Constructor_.call(tmp$0, ptr);
  return tmp$0;
}
;
html623afa$DataViewWrappingImplementation$Dart.prototype.getFloat32$member = function(byteOffset, littleEndian){
  if (littleEndian == null) {
    return this._ptr$html623afa$$getter_().getFloat32$named(1, $noargs, byteOffset);
  }
   else {
    return this._ptr$html623afa$$getter_().getFloat32$named(2, $noargs, byteOffset, littleEndian);
  }
}
;
html623afa$DataViewWrappingImplementation$Dart.prototype.getFloat32$named = function($n, $o, byteOffset, littleEndian){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 1:
      littleEndian = $o.littleEndian?(++seen , $o.littleEndian):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return html623afa$DataViewWrappingImplementation$Dart.prototype.getFloat32$member.call(this, byteOffset, littleEndian);
}
;
html623afa$DataViewWrappingImplementation$Dart.prototype.getFloat32$getter = function getFloat32$getter(){
  return $bind(html623afa$DataViewWrappingImplementation$Dart.prototype.getFloat32$named, this);
}
;
html623afa$DataViewWrappingImplementation$Dart.prototype.getFloat64$member = function(byteOffset, littleEndian){
  if (littleEndian == null) {
    return this._ptr$html623afa$$getter_().getFloat64$named(1, $noargs, byteOffset);
  }
   else {
    return this._ptr$html623afa$$getter_().getFloat64$named(2, $noargs, byteOffset, littleEndian);
  }
}
;
html623afa$DataViewWrappingImplementation$Dart.prototype.getFloat64$named = function($n, $o, byteOffset, littleEndian){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 1:
      littleEndian = $o.littleEndian?(++seen , $o.littleEndian):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return html623afa$DataViewWrappingImplementation$Dart.prototype.getFloat64$member.call(this, byteOffset, littleEndian);
}
;
html623afa$DataViewWrappingImplementation$Dart.prototype.getFloat64$getter = function getFloat64$getter(){
  return $bind(html623afa$DataViewWrappingImplementation$Dart.prototype.getFloat64$named, this);
}
;
html623afa$DataViewWrappingImplementation$Dart.prototype.getInt16$member = function(byteOffset, littleEndian){
  if (littleEndian == null) {
    return this._ptr$html623afa$$getter_().getInt16$named(1, $noargs, byteOffset);
  }
   else {
    return this._ptr$html623afa$$getter_().getInt16$named(2, $noargs, byteOffset, littleEndian);
  }
}
;
html623afa$DataViewWrappingImplementation$Dart.prototype.getInt16$named = function($n, $o, byteOffset, littleEndian){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 1:
      littleEndian = $o.littleEndian?(++seen , $o.littleEndian):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return html623afa$DataViewWrappingImplementation$Dart.prototype.getInt16$member.call(this, byteOffset, littleEndian);
}
;
html623afa$DataViewWrappingImplementation$Dart.prototype.getInt16$getter = function getInt16$getter(){
  return $bind(html623afa$DataViewWrappingImplementation$Dart.prototype.getInt16$named, this);
}
;
html623afa$DataViewWrappingImplementation$Dart.prototype.getInt32$member = function(byteOffset, littleEndian){
  if (littleEndian == null) {
    return this._ptr$html623afa$$getter_().getInt32$named(1, $noargs, byteOffset);
  }
   else {
    return this._ptr$html623afa$$getter_().getInt32$named(2, $noargs, byteOffset, littleEndian);
  }
}
;
html623afa$DataViewWrappingImplementation$Dart.prototype.getInt32$named = function($n, $o, byteOffset, littleEndian){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 1:
      littleEndian = $o.littleEndian?(++seen , $o.littleEndian):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return html623afa$DataViewWrappingImplementation$Dart.prototype.getInt32$member.call(this, byteOffset, littleEndian);
}
;
html623afa$DataViewWrappingImplementation$Dart.prototype.getInt32$getter = function getInt32$getter(){
  return $bind(html623afa$DataViewWrappingImplementation$Dart.prototype.getInt32$named, this);
}
;
html623afa$DataViewWrappingImplementation$Dart.prototype.getInt8$member = function(){
  return this._ptr$html623afa$$getter_().getInt8$named(0, $noargs);
}
;
html623afa$DataViewWrappingImplementation$Dart.prototype.getInt8$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return html623afa$DataViewWrappingImplementation$Dart.prototype.getInt8$member.call(this);
}
;
html623afa$DataViewWrappingImplementation$Dart.prototype.getInt8$getter = function getInt8$getter(){
  return $bind(html623afa$DataViewWrappingImplementation$Dart.prototype.getInt8$named, this);
}
;
html623afa$DataViewWrappingImplementation$Dart.prototype.getUint16$member = function(byteOffset, littleEndian){
  if (littleEndian == null) {
    return this._ptr$html623afa$$getter_().getUint16$named(1, $noargs, byteOffset);
  }
   else {
    return this._ptr$html623afa$$getter_().getUint16$named(2, $noargs, byteOffset, littleEndian);
  }
}
;
html623afa$DataViewWrappingImplementation$Dart.prototype.getUint16$named = function($n, $o, byteOffset, littleEndian){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 1:
      littleEndian = $o.littleEndian?(++seen , $o.littleEndian):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return html623afa$DataViewWrappingImplementation$Dart.prototype.getUint16$member.call(this, byteOffset, littleEndian);
}
;
html623afa$DataViewWrappingImplementation$Dart.prototype.getUint16$getter = function getUint16$getter(){
  return $bind(html623afa$DataViewWrappingImplementation$Dart.prototype.getUint16$named, this);
}
;
html623afa$DataViewWrappingImplementation$Dart.prototype.getUint32$member = function(byteOffset, littleEndian){
  if (littleEndian == null) {
    return this._ptr$html623afa$$getter_().getUint32$named(1, $noargs, byteOffset);
  }
   else {
    return this._ptr$html623afa$$getter_().getUint32$named(2, $noargs, byteOffset, littleEndian);
  }
}
;
html623afa$DataViewWrappingImplementation$Dart.prototype.getUint32$named = function($n, $o, byteOffset, littleEndian){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 1:
      littleEndian = $o.littleEndian?(++seen , $o.littleEndian):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return html623afa$DataViewWrappingImplementation$Dart.prototype.getUint32$member.call(this, byteOffset, littleEndian);
}
;
html623afa$DataViewWrappingImplementation$Dart.prototype.getUint32$getter = function getUint32$getter(){
  return $bind(html623afa$DataViewWrappingImplementation$Dart.prototype.getUint32$named, this);
}
;
html623afa$DataViewWrappingImplementation$Dart.prototype.getUint8$member = function(){
  return this._ptr$html623afa$$getter_().getUint8$named(0, $noargs);
}
;
html623afa$DataViewWrappingImplementation$Dart.prototype.getUint8$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return html623afa$DataViewWrappingImplementation$Dart.prototype.getUint8$member.call(this);
}
;
html623afa$DataViewWrappingImplementation$Dart.prototype.getUint8$getter = function getUint8$getter(){
  return $bind(html623afa$DataViewWrappingImplementation$Dart.prototype.getUint8$named, this);
}
;
html623afa$DataViewWrappingImplementation$Dart.prototype.setFloat32$member = function(byteOffset, value, littleEndian){
  if (littleEndian == null) {
    this._ptr$html623afa$$getter_().setFloat32$named(2, $noargs, byteOffset, value);
    return;
  }
   else {
    this._ptr$html623afa$$getter_().setFloat32$named(3, $noargs, byteOffset, value, littleEndian);
    return;
  }
}
;
html623afa$DataViewWrappingImplementation$Dart.prototype.setFloat32$named = function($n, $o, byteOffset, value, littleEndian){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 2:
      littleEndian = $o.littleEndian?(++seen , $o.littleEndian):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return html623afa$DataViewWrappingImplementation$Dart.prototype.setFloat32$member.call(this, byteOffset, value, littleEndian);
}
;
html623afa$DataViewWrappingImplementation$Dart.prototype.setFloat32$getter = function setFloat32$getter(){
  return $bind(html623afa$DataViewWrappingImplementation$Dart.prototype.setFloat32$named, this);
}
;
html623afa$DataViewWrappingImplementation$Dart.prototype.setFloat64$member = function(byteOffset, value, littleEndian){
  if (littleEndian == null) {
    this._ptr$html623afa$$getter_().setFloat64$named(2, $noargs, byteOffset, value);
    return;
  }
   else {
    this._ptr$html623afa$$getter_().setFloat64$named(3, $noargs, byteOffset, value, littleEndian);
    return;
  }
}
;
html623afa$DataViewWrappingImplementation$Dart.prototype.setFloat64$named = function($n, $o, byteOffset, value, littleEndian){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 2:
      littleEndian = $o.littleEndian?(++seen , $o.littleEndian):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return html623afa$DataViewWrappingImplementation$Dart.prototype.setFloat64$member.call(this, byteOffset, value, littleEndian);
}
;
html623afa$DataViewWrappingImplementation$Dart.prototype.setFloat64$getter = function setFloat64$getter(){
  return $bind(html623afa$DataViewWrappingImplementation$Dart.prototype.setFloat64$named, this);
}
;
html623afa$DataViewWrappingImplementation$Dart.prototype.setInt16$member = function(byteOffset, value, littleEndian){
  if (littleEndian == null) {
    this._ptr$html623afa$$getter_().setInt16$named(2, $noargs, byteOffset, value);
    return;
  }
   else {
    this._ptr$html623afa$$getter_().setInt16$named(3, $noargs, byteOffset, value, littleEndian);
    return;
  }
}
;
html623afa$DataViewWrappingImplementation$Dart.prototype.setInt16$named = function($n, $o, byteOffset, value, littleEndian){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 2:
      littleEndian = $o.littleEndian?(++seen , $o.littleEndian):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return html623afa$DataViewWrappingImplementation$Dart.prototype.setInt16$member.call(this, byteOffset, value, littleEndian);
}
;
html623afa$DataViewWrappingImplementation$Dart.prototype.setInt16$getter = function setInt16$getter(){
  return $bind(html623afa$DataViewWrappingImplementation$Dart.prototype.setInt16$named, this);
}
;
html623afa$DataViewWrappingImplementation$Dart.prototype.setInt32$member = function(byteOffset, value, littleEndian){
  if (littleEndian == null) {
    this._ptr$html623afa$$getter_().setInt32$named(2, $noargs, byteOffset, value);
    return;
  }
   else {
    this._ptr$html623afa$$getter_().setInt32$named(3, $noargs, byteOffset, value, littleEndian);
    return;
  }
}
;
html623afa$DataViewWrappingImplementation$Dart.prototype.setInt32$named = function($n, $o, byteOffset, value, littleEndian){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 2:
      littleEndian = $o.littleEndian?(++seen , $o.littleEndian):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return html623afa$DataViewWrappingImplementation$Dart.prototype.setInt32$member.call(this, byteOffset, value, littleEndian);
}
;
html623afa$DataViewWrappingImplementation$Dart.prototype.setInt32$getter = function setInt32$getter(){
  return $bind(html623afa$DataViewWrappingImplementation$Dart.prototype.setInt32$named, this);
}
;
html623afa$DataViewWrappingImplementation$Dart.prototype.setInt8$member = function(){
  this._ptr$html623afa$$getter_().setInt8$named(0, $noargs);
  return;
}
;
html623afa$DataViewWrappingImplementation$Dart.prototype.setInt8$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return html623afa$DataViewWrappingImplementation$Dart.prototype.setInt8$member.call(this);
}
;
html623afa$DataViewWrappingImplementation$Dart.prototype.setInt8$getter = function setInt8$getter(){
  return $bind(html623afa$DataViewWrappingImplementation$Dart.prototype.setInt8$named, this);
}
;
html623afa$DataViewWrappingImplementation$Dart.prototype.setUint16$member = function(byteOffset, value, littleEndian){
  if (littleEndian == null) {
    this._ptr$html623afa$$getter_().setUint16$named(2, $noargs, byteOffset, value);
    return;
  }
   else {
    this._ptr$html623afa$$getter_().setUint16$named(3, $noargs, byteOffset, value, littleEndian);
    return;
  }
}
;
html623afa$DataViewWrappingImplementation$Dart.prototype.setUint16$named = function($n, $o, byteOffset, value, littleEndian){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 2:
      littleEndian = $o.littleEndian?(++seen , $o.littleEndian):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return html623afa$DataViewWrappingImplementation$Dart.prototype.setUint16$member.call(this, byteOffset, value, littleEndian);
}
;
html623afa$DataViewWrappingImplementation$Dart.prototype.setUint16$getter = function setUint16$getter(){
  return $bind(html623afa$DataViewWrappingImplementation$Dart.prototype.setUint16$named, this);
}
;
html623afa$DataViewWrappingImplementation$Dart.prototype.setUint32$member = function(byteOffset, value, littleEndian){
  if (littleEndian == null) {
    this._ptr$html623afa$$getter_().setUint32$named(2, $noargs, byteOffset, value);
    return;
  }
   else {
    this._ptr$html623afa$$getter_().setUint32$named(3, $noargs, byteOffset, value, littleEndian);
    return;
  }
}
;
html623afa$DataViewWrappingImplementation$Dart.prototype.setUint32$named = function($n, $o, byteOffset, value, littleEndian){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 2:
      littleEndian = $o.littleEndian?(++seen , $o.littleEndian):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return html623afa$DataViewWrappingImplementation$Dart.prototype.setUint32$member.call(this, byteOffset, value, littleEndian);
}
;
html623afa$DataViewWrappingImplementation$Dart.prototype.setUint32$getter = function setUint32$getter(){
  return $bind(html623afa$DataViewWrappingImplementation$Dart.prototype.setUint32$named, this);
}
;
html623afa$DataViewWrappingImplementation$Dart.prototype.setUint8$member = function(){
  this._ptr$html623afa$$getter_().setUint8$named(0, $noargs);
  return;
}
;
html623afa$DataViewWrappingImplementation$Dart.prototype.setUint8$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return html623afa$DataViewWrappingImplementation$Dart.prototype.setUint8$member.call(this);
}
;
html623afa$DataViewWrappingImplementation$Dart.prototype.setUint8$getter = function setUint8$getter(){
  return $bind(html623afa$DataViewWrappingImplementation$Dart.prototype.setUint8$named, this);
}
;
