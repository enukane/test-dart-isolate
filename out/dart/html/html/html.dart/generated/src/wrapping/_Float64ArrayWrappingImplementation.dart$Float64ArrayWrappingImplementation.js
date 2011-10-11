function html623afa$Float64ArrayWrappingImplementation$Dart(){
}

html623afa$Float64ArrayWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('html623afa$Float64ArrayWrappingImplementation$Dart'), html623afa$Float64ArrayWrappingImplementation$Dart.$RTTimplements);
}
;
html623afa$Float64ArrayWrappingImplementation$Dart.$RTTimplements = function(rtt){
  html623afa$Float64ArrayWrappingImplementation$Dart.$addTo(rtt);
}
;
html623afa$Float64ArrayWrappingImplementation$Dart.$addTo = function(target){
  var rtt = html623afa$Float64ArrayWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  html623afa$ArrayBufferViewWrappingImplementation$Dart.$addTo(target);
  html623afa$Float64Array$Dart.$addTo(target);
}
;
html623afa$Float64ArrayWrappingImplementation$Dart.prototype.$implements$html623afa$Float64ArrayWrappingImplementation$Dart = 1;
html623afa$Float64ArrayWrappingImplementation$Dart.prototype.$implements$html623afa$Float64Array$Dart = 1;
html623afa$Float64ArrayWrappingImplementation$Dart.prototype.$implements$html623afa$ArrayBufferView$Dart = 1;
html623afa$Float64ArrayWrappingImplementation$Dart.prototype.$implements$html623afa$ArrayBufferViewWrappingImplementation$Dart = 1;
html623afa$Float64ArrayWrappingImplementation$Dart.prototype.$implements$html623afa$DOMWrapperBase$Dart = 1;
html623afa$Float64ArrayWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(html623afa$Float64ArrayWrappingImplementation$Dart, html623afa$ArrayBufferViewWrappingImplementation$Dart);
html623afa$Float64ArrayWrappingImplementation$Dart._wrap$html623afa$$Constructor_ = function(ptr){
  html623afa$ArrayBufferViewWrappingImplementation$Dart._wrap$html623afa$$Constructor_.call(this, ptr);
}
;
html623afa$Float64ArrayWrappingImplementation$Dart._wrap$html623afa$$Initializer_ = function(ptr){
  html623afa$ArrayBufferViewWrappingImplementation$Dart._wrap$html623afa$$Initializer_.call(this, ptr);
}
;
html623afa$Float64ArrayWrappingImplementation$Dart.Float64ArrayWrappingImplementation$_wrap$34$html623afa$$Factory_ = function(ptr){
  var tmp$0 = new html623afa$Float64ArrayWrappingImplementation$Dart;
  tmp$0.$typeInfo = html623afa$Float64ArrayWrappingImplementation$Dart.$lookupRTT();
  html623afa$Float64ArrayWrappingImplementation$Dart._wrap$html623afa$$Initializer_.call(tmp$0, ptr);
  html623afa$Float64ArrayWrappingImplementation$Dart._wrap$html623afa$$Constructor_.call(tmp$0, ptr);
  return tmp$0;
}
;
html623afa$Float64ArrayWrappingImplementation$Dart.prototype.length$named = function(){
  return this.length$getter().apply(this, arguments);
}
;
html623afa$Float64ArrayWrappingImplementation$Dart.prototype.length$getter = function(){
  return this._ptr$html623afa$$getter_().length$getter();
}
;
html623afa$Float64ArrayWrappingImplementation$Dart.prototype.subarray$member = function(start, end){
  if (end == null) {
    return html623afa$LevelDom$Dart.wrapFloat64Array$member(this._ptr$html623afa$$getter_().subarray$named(1, $noargs, start));
  }
   else {
    return html623afa$LevelDom$Dart.wrapFloat64Array$member(this._ptr$html623afa$$getter_().subarray$named(2, $noargs, start, end));
  }
}
;
html623afa$Float64ArrayWrappingImplementation$Dart.prototype.subarray$named = function($n, $o, start, end){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 1:
      end = $o.end?(++seen , $o.end):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return html623afa$Float64ArrayWrappingImplementation$Dart.prototype.subarray$member.call(this, start, end);
}
;
html623afa$Float64ArrayWrappingImplementation$Dart.prototype.subarray$getter = function subarray$getter(){
  return $bind(html623afa$Float64ArrayWrappingImplementation$Dart.prototype.subarray$named, this);
}
;
