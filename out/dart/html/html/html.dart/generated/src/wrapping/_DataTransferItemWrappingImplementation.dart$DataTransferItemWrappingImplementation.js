function html623afa$DataTransferItemWrappingImplementation$Dart(){
}

html623afa$DataTransferItemWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('html623afa$DataTransferItemWrappingImplementation$Dart'), html623afa$DataTransferItemWrappingImplementation$Dart.$RTTimplements);
}
;
html623afa$DataTransferItemWrappingImplementation$Dart.$RTTimplements = function(rtt){
  html623afa$DataTransferItemWrappingImplementation$Dart.$addTo(rtt);
}
;
html623afa$DataTransferItemWrappingImplementation$Dart.$addTo = function(target){
  var rtt = html623afa$DataTransferItemWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  html623afa$DOMWrapperBase$Dart.$addTo(target);
  html623afa$DataTransferItem$Dart.$addTo(target);
}
;
html623afa$DataTransferItemWrappingImplementation$Dart.prototype.$implements$html623afa$DataTransferItemWrappingImplementation$Dart = 1;
html623afa$DataTransferItemWrappingImplementation$Dart.prototype.$implements$html623afa$DataTransferItem$Dart = 1;
html623afa$DataTransferItemWrappingImplementation$Dart.prototype.$implements$html623afa$DOMWrapperBase$Dart = 1;
html623afa$DataTransferItemWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(html623afa$DataTransferItemWrappingImplementation$Dart, html623afa$DOMWrapperBase$Dart);
html623afa$DataTransferItemWrappingImplementation$Dart._wrap$html623afa$$Constructor_ = function(ptr){
  html623afa$DOMWrapperBase$Dart._wrap$html623afa$$Constructor_.call(this, ptr);
}
;
html623afa$DataTransferItemWrappingImplementation$Dart._wrap$html623afa$$Initializer_ = function(ptr){
  html623afa$DOMWrapperBase$Dart._wrap$html623afa$$Initializer_.call(this, ptr);
}
;
html623afa$DataTransferItemWrappingImplementation$Dart.DataTransferItemWrappingImplementation$_wrap$38$html623afa$$Factory_ = function(ptr){
  var tmp$0 = new html623afa$DataTransferItemWrappingImplementation$Dart;
  tmp$0.$typeInfo = html623afa$DataTransferItemWrappingImplementation$Dart.$lookupRTT();
  html623afa$DataTransferItemWrappingImplementation$Dart._wrap$html623afa$$Initializer_.call(tmp$0, ptr);
  html623afa$DataTransferItemWrappingImplementation$Dart._wrap$html623afa$$Constructor_.call(tmp$0, ptr);
  return tmp$0;
}
;
html623afa$DataTransferItemWrappingImplementation$Dart.prototype.kind$named = function(){
  return this.kind$getter().apply(this, arguments);
}
;
html623afa$DataTransferItemWrappingImplementation$Dart.prototype.kind$getter = function(){
  return this._ptr$html623afa$$getter_().kind$getter();
}
;
html623afa$DataTransferItemWrappingImplementation$Dart.prototype.type$named = function(){
  return this.type$getter().apply(this, arguments);
}
;
html623afa$DataTransferItemWrappingImplementation$Dart.prototype.type$getter = function(){
  return this._ptr$html623afa$$getter_().type$getter();
}
;
html623afa$DataTransferItemWrappingImplementation$Dart.prototype.getAsFile$member = function(){
  return html623afa$LevelDom$Dart.wrapBlob$member(this._ptr$html623afa$$getter_().getAsFile$named(0, $noargs));
}
;
html623afa$DataTransferItemWrappingImplementation$Dart.prototype.getAsFile$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return html623afa$DataTransferItemWrappingImplementation$Dart.prototype.getAsFile$member.call(this);
}
;
html623afa$DataTransferItemWrappingImplementation$Dart.prototype.getAsFile$getter = function getAsFile$getter(){
  return $bind(html623afa$DataTransferItemWrappingImplementation$Dart.prototype.getAsFile$named, this);
}
;
html623afa$DataTransferItemWrappingImplementation$Dart.prototype.getAsString$member = function(callback){
  this._ptr$html623afa$$getter_().getAsString$named(1, $noargs, html623afa$LevelDom$Dart.unwrap$member(callback));
  return;
}
;
html623afa$DataTransferItemWrappingImplementation$Dart.prototype.getAsString$named = function($n, $o, callback){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$DataTransferItemWrappingImplementation$Dart.prototype.getAsString$member.call(this, callback);
}
;
html623afa$DataTransferItemWrappingImplementation$Dart.prototype.getAsString$getter = function getAsString$getter(){
  return $bind(html623afa$DataTransferItemWrappingImplementation$Dart.prototype.getAsString$named, this);
}
;
