function html623afa$DOMURLWrappingImplementation$Dart(){
}

html623afa$DOMURLWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('html623afa$DOMURLWrappingImplementation$Dart'), html623afa$DOMURLWrappingImplementation$Dart.$RTTimplements);
}
;
html623afa$DOMURLWrappingImplementation$Dart.$RTTimplements = function(rtt){
  html623afa$DOMURLWrappingImplementation$Dart.$addTo(rtt);
}
;
html623afa$DOMURLWrappingImplementation$Dart.$addTo = function(target){
  var rtt = html623afa$DOMURLWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  html623afa$DOMWrapperBase$Dart.$addTo(target);
  html623afa$DOMURL$Dart.$addTo(target);
}
;
html623afa$DOMURLWrappingImplementation$Dart.prototype.$implements$html623afa$DOMURLWrappingImplementation$Dart = 1;
html623afa$DOMURLWrappingImplementation$Dart.prototype.$implements$html623afa$DOMURL$Dart = 1;
html623afa$DOMURLWrappingImplementation$Dart.prototype.$implements$html623afa$DOMWrapperBase$Dart = 1;
html623afa$DOMURLWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(html623afa$DOMURLWrappingImplementation$Dart, html623afa$DOMWrapperBase$Dart);
html623afa$DOMURLWrappingImplementation$Dart._wrap$html623afa$$Constructor_ = function(ptr){
  html623afa$DOMWrapperBase$Dart._wrap$html623afa$$Constructor_.call(this, ptr);
}
;
html623afa$DOMURLWrappingImplementation$Dart._wrap$html623afa$$Initializer_ = function(ptr){
  html623afa$DOMWrapperBase$Dart._wrap$html623afa$$Initializer_.call(this, ptr);
}
;
html623afa$DOMURLWrappingImplementation$Dart.DOMURLWrappingImplementation$_wrap$28$html623afa$$Factory_ = function(ptr){
  var tmp$0 = new html623afa$DOMURLWrappingImplementation$Dart;
  tmp$0.$typeInfo = html623afa$DOMURLWrappingImplementation$Dart.$lookupRTT();
  html623afa$DOMURLWrappingImplementation$Dart._wrap$html623afa$$Initializer_.call(tmp$0, ptr);
  html623afa$DOMURLWrappingImplementation$Dart._wrap$html623afa$$Constructor_.call(tmp$0, ptr);
  return tmp$0;
}
;
html623afa$DOMURLWrappingImplementation$Dart.prototype.createObjectURL$member = function(blob){
  return this._ptr$html623afa$$getter_().createObjectURL$named(1, $noargs, html623afa$LevelDom$Dart.unwrap$member(blob));
}
;
html623afa$DOMURLWrappingImplementation$Dart.prototype.createObjectURL$named = function($n, $o, blob){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$DOMURLWrappingImplementation$Dart.prototype.createObjectURL$member.call(this, blob);
}
;
html623afa$DOMURLWrappingImplementation$Dart.prototype.createObjectURL$getter = function createObjectURL$getter(){
  return $bind(html623afa$DOMURLWrappingImplementation$Dart.prototype.createObjectURL$named, this);
}
;
html623afa$DOMURLWrappingImplementation$Dart.prototype.revokeObjectURL$member = function(url){
  this._ptr$html623afa$$getter_().revokeObjectURL$named(1, $noargs, url);
  return;
}
;
html623afa$DOMURLWrappingImplementation$Dart.prototype.revokeObjectURL$named = function($n, $o, url){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$DOMURLWrappingImplementation$Dart.prototype.revokeObjectURL$member.call(this, url);
}
;
html623afa$DOMURLWrappingImplementation$Dart.prototype.revokeObjectURL$getter = function revokeObjectURL$getter(){
  return $bind(html623afa$DOMURLWrappingImplementation$Dart.prototype.revokeObjectURL$named, this);
}
;
