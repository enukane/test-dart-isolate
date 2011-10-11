function html623afa$DOMApplicationCacheWrappingImplementation$Dart(){
}

html623afa$DOMApplicationCacheWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('html623afa$DOMApplicationCacheWrappingImplementation$Dart'), html623afa$DOMApplicationCacheWrappingImplementation$Dart.$RTTimplements);
}
;
html623afa$DOMApplicationCacheWrappingImplementation$Dart.$RTTimplements = function(rtt){
  html623afa$DOMApplicationCacheWrappingImplementation$Dart.$addTo(rtt);
}
;
html623afa$DOMApplicationCacheWrappingImplementation$Dart.$addTo = function(target){
  var rtt = html623afa$DOMApplicationCacheWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  html623afa$EventTargetWrappingImplementation$Dart.$addTo(target);
  html623afa$DOMApplicationCache$Dart.$addTo(target);
}
;
html623afa$DOMApplicationCacheWrappingImplementation$Dart.prototype.$implements$html623afa$DOMApplicationCacheWrappingImplementation$Dart = 1;
html623afa$DOMApplicationCacheWrappingImplementation$Dart.prototype.$implements$html623afa$DOMApplicationCache$Dart = 1;
html623afa$DOMApplicationCacheWrappingImplementation$Dart.prototype.$implements$html623afa$EventTarget$Dart = 1;
html623afa$DOMApplicationCacheWrappingImplementation$Dart.prototype.$implements$html623afa$EventTargetWrappingImplementation$Dart = 1;
html623afa$DOMApplicationCacheWrappingImplementation$Dart.prototype.$implements$html623afa$DOMWrapperBase$Dart = 1;
html623afa$DOMApplicationCacheWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(html623afa$DOMApplicationCacheWrappingImplementation$Dart, html623afa$EventTargetWrappingImplementation$Dart);
html623afa$DOMApplicationCacheWrappingImplementation$Dart._wrap$html623afa$$Constructor_ = function(ptr){
  html623afa$EventTargetWrappingImplementation$Dart._wrap$html623afa$$Constructor_.call(this, ptr);
}
;
html623afa$DOMApplicationCacheWrappingImplementation$Dart._wrap$html623afa$$Initializer_ = function(ptr){
  html623afa$EventTargetWrappingImplementation$Dart._wrap$html623afa$$Initializer_.call(this, ptr);
}
;
html623afa$DOMApplicationCacheWrappingImplementation$Dart.DOMApplicationCacheWrappingImplementation$_wrap$41$html623afa$$Factory_ = function(ptr){
  var tmp$0 = new html623afa$DOMApplicationCacheWrappingImplementation$Dart;
  tmp$0.$typeInfo = html623afa$DOMApplicationCacheWrappingImplementation$Dart.$lookupRTT();
  html623afa$DOMApplicationCacheWrappingImplementation$Dart._wrap$html623afa$$Initializer_.call(tmp$0, ptr);
  html623afa$DOMApplicationCacheWrappingImplementation$Dart._wrap$html623afa$$Constructor_.call(tmp$0, ptr);
  return tmp$0;
}
;
html623afa$DOMApplicationCacheWrappingImplementation$Dart.prototype.status$named = function(){
  return this.status$getter().apply(this, arguments);
}
;
html623afa$DOMApplicationCacheWrappingImplementation$Dart.prototype.status$getter = function(){
  return this._ptr$html623afa$$getter_().status$getter();
}
;
html623afa$DOMApplicationCacheWrappingImplementation$Dart.prototype.swapCache$member = function(){
  this._ptr$html623afa$$getter_().swapCache$named(0, $noargs);
}
;
html623afa$DOMApplicationCacheWrappingImplementation$Dart.prototype.swapCache$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return html623afa$DOMApplicationCacheWrappingImplementation$Dart.prototype.swapCache$member.call(this);
}
;
html623afa$DOMApplicationCacheWrappingImplementation$Dart.prototype.swapCache$getter = function swapCache$getter(){
  return $bind(html623afa$DOMApplicationCacheWrappingImplementation$Dart.prototype.swapCache$named, this);
}
;
html623afa$DOMApplicationCacheWrappingImplementation$Dart.prototype.update$member = function(){
  this._ptr$html623afa$$getter_().update$named(0, $noargs);
}
;
html623afa$DOMApplicationCacheWrappingImplementation$Dart.prototype.update$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return html623afa$DOMApplicationCacheWrappingImplementation$Dart.prototype.update$member.call(this);
}
;
html623afa$DOMApplicationCacheWrappingImplementation$Dart.prototype.update$getter = function update$getter(){
  return $bind(html623afa$DOMApplicationCacheWrappingImplementation$Dart.prototype.update$named, this);
}
;
html623afa$DOMApplicationCacheWrappingImplementation$Dart.prototype.on$named = function(){
  return this.on$getter().apply(this, arguments);
}
;
html623afa$DOMApplicationCacheWrappingImplementation$Dart.prototype.on$getter = function(){
  var tmp$0;
  if (this._on$html623afa$$getter_() == null) {
    this._on$html623afa$$setter_(tmp$0 = html623afa$DOMApplicationCacheEventsImplementation$Dart.DOMApplicationCacheEventsImplementation$_wrap$39$html623afa$$Factory_(this._ptr$html623afa$$getter_())) , tmp$0;
  }
  return this._on$html623afa$$getter_();
}
;
