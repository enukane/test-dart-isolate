function html623afa$CryptoWrappingImplementation$Dart(){
}

html623afa$CryptoWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('html623afa$CryptoWrappingImplementation$Dart'), html623afa$CryptoWrappingImplementation$Dart.$RTTimplements);
}
;
html623afa$CryptoWrappingImplementation$Dart.$RTTimplements = function(rtt){
  html623afa$CryptoWrappingImplementation$Dart.$addTo(rtt);
}
;
html623afa$CryptoWrappingImplementation$Dart.$addTo = function(target){
  var rtt = html623afa$CryptoWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  html623afa$DOMWrapperBase$Dart.$addTo(target);
  html623afa$Crypto$Dart.$addTo(target);
}
;
html623afa$CryptoWrappingImplementation$Dart.prototype.$implements$html623afa$CryptoWrappingImplementation$Dart = 1;
html623afa$CryptoWrappingImplementation$Dart.prototype.$implements$html623afa$Crypto$Dart = 1;
html623afa$CryptoWrappingImplementation$Dart.prototype.$implements$html623afa$DOMWrapperBase$Dart = 1;
html623afa$CryptoWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(html623afa$CryptoWrappingImplementation$Dart, html623afa$DOMWrapperBase$Dart);
html623afa$CryptoWrappingImplementation$Dart._wrap$html623afa$$Constructor_ = function(ptr){
  html623afa$DOMWrapperBase$Dart._wrap$html623afa$$Constructor_.call(this, ptr);
}
;
html623afa$CryptoWrappingImplementation$Dart._wrap$html623afa$$Initializer_ = function(ptr){
  html623afa$DOMWrapperBase$Dart._wrap$html623afa$$Initializer_.call(this, ptr);
}
;
html623afa$CryptoWrappingImplementation$Dart.CryptoWrappingImplementation$_wrap$28$html623afa$$Factory_ = function(ptr){
  var tmp$0 = new html623afa$CryptoWrappingImplementation$Dart;
  tmp$0.$typeInfo = html623afa$CryptoWrappingImplementation$Dart.$lookupRTT();
  html623afa$CryptoWrappingImplementation$Dart._wrap$html623afa$$Initializer_.call(tmp$0, ptr);
  html623afa$CryptoWrappingImplementation$Dart._wrap$html623afa$$Constructor_.call(tmp$0, ptr);
  return tmp$0;
}
;
html623afa$CryptoWrappingImplementation$Dart.prototype.getRandomValues$member = function(array){
  this._ptr$html623afa$$getter_().getRandomValues$named(1, $noargs, html623afa$LevelDom$Dart.unwrap$member(array));
  return;
}
;
html623afa$CryptoWrappingImplementation$Dart.prototype.getRandomValues$named = function($n, $o, array){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$CryptoWrappingImplementation$Dart.prototype.getRandomValues$member.call(this, array);
}
;
html623afa$CryptoWrappingImplementation$Dart.prototype.getRandomValues$getter = function getRandomValues$getter(){
  return $bind(html623afa$CryptoWrappingImplementation$Dart.prototype.getRandomValues$named, this);
}
;
