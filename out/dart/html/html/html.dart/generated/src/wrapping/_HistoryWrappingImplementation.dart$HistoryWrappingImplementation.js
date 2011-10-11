function html623afa$HistoryWrappingImplementation$Dart(){
}

html623afa$HistoryWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('html623afa$HistoryWrappingImplementation$Dart'), html623afa$HistoryWrappingImplementation$Dart.$RTTimplements);
}
;
html623afa$HistoryWrappingImplementation$Dart.$RTTimplements = function(rtt){
  html623afa$HistoryWrappingImplementation$Dart.$addTo(rtt);
}
;
html623afa$HistoryWrappingImplementation$Dart.$addTo = function(target){
  var rtt = html623afa$HistoryWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  html623afa$DOMWrapperBase$Dart.$addTo(target);
  html623afa$History$Dart.$addTo(target);
}
;
html623afa$HistoryWrappingImplementation$Dart.prototype.$implements$html623afa$HistoryWrappingImplementation$Dart = 1;
html623afa$HistoryWrappingImplementation$Dart.prototype.$implements$html623afa$History$Dart = 1;
html623afa$HistoryWrappingImplementation$Dart.prototype.$implements$html623afa$DOMWrapperBase$Dart = 1;
html623afa$HistoryWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(html623afa$HistoryWrappingImplementation$Dart, html623afa$DOMWrapperBase$Dart);
html623afa$HistoryWrappingImplementation$Dart._wrap$html623afa$$Constructor_ = function(ptr){
  html623afa$DOMWrapperBase$Dart._wrap$html623afa$$Constructor_.call(this, ptr);
}
;
html623afa$HistoryWrappingImplementation$Dart._wrap$html623afa$$Initializer_ = function(ptr){
  html623afa$DOMWrapperBase$Dart._wrap$html623afa$$Initializer_.call(this, ptr);
}
;
html623afa$HistoryWrappingImplementation$Dart.HistoryWrappingImplementation$_wrap$29$html623afa$$Factory_ = function(ptr){
  var tmp$0 = new html623afa$HistoryWrappingImplementation$Dart;
  tmp$0.$typeInfo = html623afa$HistoryWrappingImplementation$Dart.$lookupRTT();
  html623afa$HistoryWrappingImplementation$Dart._wrap$html623afa$$Initializer_.call(tmp$0, ptr);
  html623afa$HistoryWrappingImplementation$Dart._wrap$html623afa$$Constructor_.call(tmp$0, ptr);
  return tmp$0;
}
;
html623afa$HistoryWrappingImplementation$Dart.prototype.length$named = function(){
  return this.length$getter().apply(this, arguments);
}
;
html623afa$HistoryWrappingImplementation$Dart.prototype.length$getter = function(){
  return this._ptr$html623afa$$getter_().length$getter();
}
;
html623afa$HistoryWrappingImplementation$Dart.prototype.back$member = function(){
  this._ptr$html623afa$$getter_().back$named(0, $noargs);
  return;
}
;
html623afa$HistoryWrappingImplementation$Dart.prototype.back$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return html623afa$HistoryWrappingImplementation$Dart.prototype.back$member.call(this);
}
;
html623afa$HistoryWrappingImplementation$Dart.prototype.back$getter = function back$getter(){
  return $bind(html623afa$HistoryWrappingImplementation$Dart.prototype.back$named, this);
}
;
html623afa$HistoryWrappingImplementation$Dart.prototype.forward$member = function(){
  this._ptr$html623afa$$getter_().forward$named(0, $noargs);
  return;
}
;
html623afa$HistoryWrappingImplementation$Dart.prototype.forward$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return html623afa$HistoryWrappingImplementation$Dart.prototype.forward$member.call(this);
}
;
html623afa$HistoryWrappingImplementation$Dart.prototype.forward$getter = function forward$getter(){
  return $bind(html623afa$HistoryWrappingImplementation$Dart.prototype.forward$named, this);
}
;
html623afa$HistoryWrappingImplementation$Dart.prototype.go$member = function(distance){
  this._ptr$html623afa$$getter_().go$named(1, $noargs, distance);
  return;
}
;
html623afa$HistoryWrappingImplementation$Dart.prototype.go$named = function($n, $o, distance){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$HistoryWrappingImplementation$Dart.prototype.go$member.call(this, distance);
}
;
html623afa$HistoryWrappingImplementation$Dart.prototype.go$getter = function go$getter(){
  return $bind(html623afa$HistoryWrappingImplementation$Dart.prototype.go$named, this);
}
;
html623afa$HistoryWrappingImplementation$Dart.prototype.pushState$member = function(data, title, url){
  if (url == null) {
    this._ptr$html623afa$$getter_().pushState$named(2, $noargs, html623afa$LevelDom$Dart.unwrapMaybePrimitive$member(data), title);
    return;
  }
   else {
    this._ptr$html623afa$$getter_().pushState$named(3, $noargs, html623afa$LevelDom$Dart.unwrapMaybePrimitive$member(data), title, url);
    return;
  }
}
;
html623afa$HistoryWrappingImplementation$Dart.prototype.pushState$named = function($n, $o, data, title, url){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 2:
      url = $o.url?(++seen , $o.url):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return html623afa$HistoryWrappingImplementation$Dart.prototype.pushState$member.call(this, data, title, url);
}
;
html623afa$HistoryWrappingImplementation$Dart.prototype.pushState$getter = function pushState$getter(){
  return $bind(html623afa$HistoryWrappingImplementation$Dart.prototype.pushState$named, this);
}
;
html623afa$HistoryWrappingImplementation$Dart.prototype.replaceState$member = function(data, title, url){
  if (url == null) {
    this._ptr$html623afa$$getter_().replaceState$named(2, $noargs, html623afa$LevelDom$Dart.unwrapMaybePrimitive$member(data), title);
    return;
  }
   else {
    this._ptr$html623afa$$getter_().replaceState$named(3, $noargs, html623afa$LevelDom$Dart.unwrapMaybePrimitive$member(data), title, url);
    return;
  }
}
;
html623afa$HistoryWrappingImplementation$Dart.prototype.replaceState$named = function($n, $o, data, title, url){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 2:
      url = $o.url?(++seen , $o.url):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return html623afa$HistoryWrappingImplementation$Dart.prototype.replaceState$member.call(this, data, title, url);
}
;
html623afa$HistoryWrappingImplementation$Dart.prototype.replaceState$getter = function replaceState$getter(){
  return $bind(html623afa$HistoryWrappingImplementation$Dart.prototype.replaceState$named, this);
}
;
