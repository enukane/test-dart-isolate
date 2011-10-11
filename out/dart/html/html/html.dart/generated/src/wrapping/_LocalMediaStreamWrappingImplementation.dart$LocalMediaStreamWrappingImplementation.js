function html623afa$LocalMediaStreamWrappingImplementation$Dart(){
}

html623afa$LocalMediaStreamWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('html623afa$LocalMediaStreamWrappingImplementation$Dart'), html623afa$LocalMediaStreamWrappingImplementation$Dart.$RTTimplements);
}
;
html623afa$LocalMediaStreamWrappingImplementation$Dart.$RTTimplements = function(rtt){
  html623afa$LocalMediaStreamWrappingImplementation$Dart.$addTo(rtt);
}
;
html623afa$LocalMediaStreamWrappingImplementation$Dart.$addTo = function(target){
  var rtt = html623afa$LocalMediaStreamWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  html623afa$MediaStreamWrappingImplementation$Dart.$addTo(target);
  html623afa$LocalMediaStream$Dart.$addTo(target);
}
;
html623afa$LocalMediaStreamWrappingImplementation$Dart.prototype.$implements$html623afa$LocalMediaStreamWrappingImplementation$Dart = 1;
html623afa$LocalMediaStreamWrappingImplementation$Dart.prototype.$implements$html623afa$LocalMediaStream$Dart = 1;
html623afa$LocalMediaStreamWrappingImplementation$Dart.prototype.$implements$html623afa$MediaStream$Dart = 1;
html623afa$LocalMediaStreamWrappingImplementation$Dart.prototype.$implements$html623afa$MediaStreamWrappingImplementation$Dart = 1;
html623afa$LocalMediaStreamWrappingImplementation$Dart.prototype.$implements$html623afa$DOMWrapperBase$Dart = 1;
html623afa$LocalMediaStreamWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(html623afa$LocalMediaStreamWrappingImplementation$Dart, html623afa$MediaStreamWrappingImplementation$Dart);
html623afa$LocalMediaStreamWrappingImplementation$Dart._wrap$html623afa$$Constructor_ = function(ptr){
  html623afa$MediaStreamWrappingImplementation$Dart._wrap$html623afa$$Constructor_.call(this, ptr);
}
;
html623afa$LocalMediaStreamWrappingImplementation$Dart._wrap$html623afa$$Initializer_ = function(ptr){
  html623afa$MediaStreamWrappingImplementation$Dart._wrap$html623afa$$Initializer_.call(this, ptr);
}
;
html623afa$LocalMediaStreamWrappingImplementation$Dart.LocalMediaStreamWrappingImplementation$_wrap$38$html623afa$$Factory_ = function(ptr){
  var tmp$0 = new html623afa$LocalMediaStreamWrappingImplementation$Dart;
  tmp$0.$typeInfo = html623afa$LocalMediaStreamWrappingImplementation$Dart.$lookupRTT();
  html623afa$LocalMediaStreamWrappingImplementation$Dart._wrap$html623afa$$Initializer_.call(tmp$0, ptr);
  html623afa$LocalMediaStreamWrappingImplementation$Dart._wrap$html623afa$$Constructor_.call(tmp$0, ptr);
  return tmp$0;
}
;
html623afa$LocalMediaStreamWrappingImplementation$Dart.prototype.stop$member = function(){
  this._ptr$html623afa$$getter_().stop$named(0, $noargs);
  return;
}
;
html623afa$LocalMediaStreamWrappingImplementation$Dart.prototype.stop$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return html623afa$LocalMediaStreamWrappingImplementation$Dart.prototype.stop$member.call(this);
}
;
html623afa$LocalMediaStreamWrappingImplementation$Dart.prototype.stop$getter = function stop$getter(){
  return $bind(html623afa$LocalMediaStreamWrappingImplementation$Dart.prototype.stop$named, this);
}
;
