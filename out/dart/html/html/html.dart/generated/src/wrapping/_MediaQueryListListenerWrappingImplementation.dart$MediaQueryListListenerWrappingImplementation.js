function html623afa$MediaQueryListListenerWrappingImplementation$Dart(){
}

html623afa$MediaQueryListListenerWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('html623afa$MediaQueryListListenerWrappingImplementation$Dart'), html623afa$MediaQueryListListenerWrappingImplementation$Dart.$RTTimplements);
}
;
html623afa$MediaQueryListListenerWrappingImplementation$Dart.$RTTimplements = function(rtt){
  html623afa$MediaQueryListListenerWrappingImplementation$Dart.$addTo(rtt);
}
;
html623afa$MediaQueryListListenerWrappingImplementation$Dart.$addTo = function(target){
  var rtt = html623afa$MediaQueryListListenerWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  html623afa$DOMWrapperBase$Dart.$addTo(target);
  html623afa$MediaQueryListListener$Dart.$addTo(target);
}
;
html623afa$MediaQueryListListenerWrappingImplementation$Dart.prototype.$implements$html623afa$MediaQueryListListenerWrappingImplementation$Dart = 1;
html623afa$MediaQueryListListenerWrappingImplementation$Dart.prototype.$implements$html623afa$MediaQueryListListener$Dart = 1;
html623afa$MediaQueryListListenerWrappingImplementation$Dart.prototype.$implements$html623afa$DOMWrapperBase$Dart = 1;
html623afa$MediaQueryListListenerWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(html623afa$MediaQueryListListenerWrappingImplementation$Dart, html623afa$DOMWrapperBase$Dart);
html623afa$MediaQueryListListenerWrappingImplementation$Dart._wrap$html623afa$$Constructor_ = function(ptr){
  html623afa$DOMWrapperBase$Dart._wrap$html623afa$$Constructor_.call(this, ptr);
}
;
html623afa$MediaQueryListListenerWrappingImplementation$Dart._wrap$html623afa$$Initializer_ = function(ptr){
  html623afa$DOMWrapperBase$Dart._wrap$html623afa$$Initializer_.call(this, ptr);
}
;
html623afa$MediaQueryListListenerWrappingImplementation$Dart.MediaQueryListListenerWrappingImplementation$_wrap$44$html623afa$$Factory_ = function(ptr){
  var tmp$0 = new html623afa$MediaQueryListListenerWrappingImplementation$Dart;
  tmp$0.$typeInfo = html623afa$MediaQueryListListenerWrappingImplementation$Dart.$lookupRTT();
  html623afa$MediaQueryListListenerWrappingImplementation$Dart._wrap$html623afa$$Initializer_.call(tmp$0, ptr);
  html623afa$MediaQueryListListenerWrappingImplementation$Dart._wrap$html623afa$$Constructor_.call(tmp$0, ptr);
  return tmp$0;
}
;
html623afa$MediaQueryListListenerWrappingImplementation$Dart.prototype.queryChanged$member = function(list){
  this._ptr$html623afa$$getter_().queryChanged$named(1, $noargs, html623afa$LevelDom$Dart.unwrap$member(list));
  return;
}
;
html623afa$MediaQueryListListenerWrappingImplementation$Dart.prototype.queryChanged$named = function($n, $o, list){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$MediaQueryListListenerWrappingImplementation$Dart.prototype.queryChanged$member.call(this, list);
}
;
html623afa$MediaQueryListListenerWrappingImplementation$Dart.prototype.queryChanged$getter = function queryChanged$getter(){
  return $bind(html623afa$MediaQueryListListenerWrappingImplementation$Dart.prototype.queryChanged$named, this);
}
;
