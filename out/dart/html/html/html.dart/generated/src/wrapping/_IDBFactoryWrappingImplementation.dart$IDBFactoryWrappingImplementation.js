function html623afa$IDBFactoryWrappingImplementation$Dart(){
}

html623afa$IDBFactoryWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('html623afa$IDBFactoryWrappingImplementation$Dart'), html623afa$IDBFactoryWrappingImplementation$Dart.$RTTimplements);
}
;
html623afa$IDBFactoryWrappingImplementation$Dart.$RTTimplements = function(rtt){
  html623afa$IDBFactoryWrappingImplementation$Dart.$addTo(rtt);
}
;
html623afa$IDBFactoryWrappingImplementation$Dart.$addTo = function(target){
  var rtt = html623afa$IDBFactoryWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  html623afa$DOMWrapperBase$Dart.$addTo(target);
  html623afa$IDBFactory$Dart.$addTo(target);
}
;
html623afa$IDBFactoryWrappingImplementation$Dart.prototype.$implements$html623afa$IDBFactoryWrappingImplementation$Dart = 1;
html623afa$IDBFactoryWrappingImplementation$Dart.prototype.$implements$html623afa$IDBFactory$Dart = 1;
html623afa$IDBFactoryWrappingImplementation$Dart.prototype.$implements$html623afa$DOMWrapperBase$Dart = 1;
html623afa$IDBFactoryWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(html623afa$IDBFactoryWrappingImplementation$Dart, html623afa$DOMWrapperBase$Dart);
html623afa$IDBFactoryWrappingImplementation$Dart._wrap$html623afa$$Constructor_ = function(ptr){
  html623afa$DOMWrapperBase$Dart._wrap$html623afa$$Constructor_.call(this, ptr);
}
;
html623afa$IDBFactoryWrappingImplementation$Dart._wrap$html623afa$$Initializer_ = function(ptr){
  html623afa$DOMWrapperBase$Dart._wrap$html623afa$$Initializer_.call(this, ptr);
}
;
html623afa$IDBFactoryWrappingImplementation$Dart.IDBFactoryWrappingImplementation$_wrap$32$html623afa$$Factory_ = function(ptr){
  var tmp$0 = new html623afa$IDBFactoryWrappingImplementation$Dart;
  tmp$0.$typeInfo = html623afa$IDBFactoryWrappingImplementation$Dart.$lookupRTT();
  html623afa$IDBFactoryWrappingImplementation$Dart._wrap$html623afa$$Initializer_.call(tmp$0, ptr);
  html623afa$IDBFactoryWrappingImplementation$Dart._wrap$html623afa$$Constructor_.call(tmp$0, ptr);
  return tmp$0;
}
;
html623afa$IDBFactoryWrappingImplementation$Dart.prototype.getDatabaseNames$member = function(){
  return html623afa$LevelDom$Dart.wrapIDBRequest$member(this._ptr$html623afa$$getter_().getDatabaseNames$named(0, $noargs));
}
;
html623afa$IDBFactoryWrappingImplementation$Dart.prototype.getDatabaseNames$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return html623afa$IDBFactoryWrappingImplementation$Dart.prototype.getDatabaseNames$member.call(this);
}
;
html623afa$IDBFactoryWrappingImplementation$Dart.prototype.getDatabaseNames$getter = function getDatabaseNames$getter(){
  return $bind(html623afa$IDBFactoryWrappingImplementation$Dart.prototype.getDatabaseNames$named, this);
}
;
html623afa$IDBFactoryWrappingImplementation$Dart.prototype.open$member = function(name_0){
  return html623afa$LevelDom$Dart.wrapIDBRequest$member(this._ptr$html623afa$$getter_().open$named(1, $noargs, name_0));
}
;
html623afa$IDBFactoryWrappingImplementation$Dart.prototype.open$named = function($n, $o, name_0){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$IDBFactoryWrappingImplementation$Dart.prototype.open$member.call(this, name_0);
}
;
html623afa$IDBFactoryWrappingImplementation$Dart.prototype.open$getter = function open$getter(){
  return $bind(html623afa$IDBFactoryWrappingImplementation$Dart.prototype.open$named, this);
}
;
