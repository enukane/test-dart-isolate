function html623afa$StyleMediaWrappingImplementation$Dart(){
}

html623afa$StyleMediaWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('html623afa$StyleMediaWrappingImplementation$Dart'), html623afa$StyleMediaWrappingImplementation$Dart.$RTTimplements);
}
;
html623afa$StyleMediaWrappingImplementation$Dart.$RTTimplements = function(rtt){
  html623afa$StyleMediaWrappingImplementation$Dart.$addTo(rtt);
}
;
html623afa$StyleMediaWrappingImplementation$Dart.$addTo = function(target){
  var rtt = html623afa$StyleMediaWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  html623afa$DOMWrapperBase$Dart.$addTo(target);
  html623afa$StyleMedia$Dart.$addTo(target);
}
;
html623afa$StyleMediaWrappingImplementation$Dart.prototype.$implements$html623afa$StyleMediaWrappingImplementation$Dart = 1;
html623afa$StyleMediaWrappingImplementation$Dart.prototype.$implements$html623afa$StyleMedia$Dart = 1;
html623afa$StyleMediaWrappingImplementation$Dart.prototype.$implements$html623afa$DOMWrapperBase$Dart = 1;
html623afa$StyleMediaWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(html623afa$StyleMediaWrappingImplementation$Dart, html623afa$DOMWrapperBase$Dart);
html623afa$StyleMediaWrappingImplementation$Dart._wrap$html623afa$$Constructor_ = function(ptr){
  html623afa$DOMWrapperBase$Dart._wrap$html623afa$$Constructor_.call(this, ptr);
}
;
html623afa$StyleMediaWrappingImplementation$Dart._wrap$html623afa$$Initializer_ = function(ptr){
  html623afa$DOMWrapperBase$Dart._wrap$html623afa$$Initializer_.call(this, ptr);
}
;
html623afa$StyleMediaWrappingImplementation$Dart.StyleMediaWrappingImplementation$_wrap$32$html623afa$$Factory_ = function(ptr){
  var tmp$0 = new html623afa$StyleMediaWrappingImplementation$Dart;
  tmp$0.$typeInfo = html623afa$StyleMediaWrappingImplementation$Dart.$lookupRTT();
  html623afa$StyleMediaWrappingImplementation$Dart._wrap$html623afa$$Initializer_.call(tmp$0, ptr);
  html623afa$StyleMediaWrappingImplementation$Dart._wrap$html623afa$$Constructor_.call(tmp$0, ptr);
  return tmp$0;
}
;
html623afa$StyleMediaWrappingImplementation$Dart.prototype.type$named = function(){
  return this.type$getter().apply(this, arguments);
}
;
html623afa$StyleMediaWrappingImplementation$Dart.prototype.type$getter = function(){
  return this._ptr$html623afa$$getter_().type$getter();
}
;
html623afa$StyleMediaWrappingImplementation$Dart.prototype.matchMedium$member = function(mediaquery){
  return this._ptr$html623afa$$getter_().matchMedium$named(1, $noargs, mediaquery);
}
;
html623afa$StyleMediaWrappingImplementation$Dart.prototype.matchMedium$named = function($n, $o, mediaquery){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$StyleMediaWrappingImplementation$Dart.prototype.matchMedium$member.call(this, mediaquery);
}
;
html623afa$StyleMediaWrappingImplementation$Dart.prototype.matchMedium$getter = function matchMedium$getter(){
  return $bind(html623afa$StyleMediaWrappingImplementation$Dart.prototype.matchMedium$named, this);
}
;
