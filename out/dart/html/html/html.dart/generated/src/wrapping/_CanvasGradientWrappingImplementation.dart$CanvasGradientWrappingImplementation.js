function html623afa$CanvasGradientWrappingImplementation$Dart(){
}

html623afa$CanvasGradientWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('html623afa$CanvasGradientWrappingImplementation$Dart'), html623afa$CanvasGradientWrappingImplementation$Dart.$RTTimplements);
}
;
html623afa$CanvasGradientWrappingImplementation$Dart.$RTTimplements = function(rtt){
  html623afa$CanvasGradientWrappingImplementation$Dart.$addTo(rtt);
}
;
html623afa$CanvasGradientWrappingImplementation$Dart.$addTo = function(target){
  var rtt = html623afa$CanvasGradientWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  html623afa$DOMWrapperBase$Dart.$addTo(target);
  html623afa$CanvasGradient$Dart.$addTo(target);
}
;
html623afa$CanvasGradientWrappingImplementation$Dart.prototype.$implements$html623afa$CanvasGradientWrappingImplementation$Dart = 1;
html623afa$CanvasGradientWrappingImplementation$Dart.prototype.$implements$html623afa$CanvasGradient$Dart = 1;
html623afa$CanvasGradientWrappingImplementation$Dart.prototype.$implements$html623afa$DOMWrapperBase$Dart = 1;
html623afa$CanvasGradientWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(html623afa$CanvasGradientWrappingImplementation$Dart, html623afa$DOMWrapperBase$Dart);
html623afa$CanvasGradientWrappingImplementation$Dart._wrap$html623afa$$Constructor_ = function(ptr){
  html623afa$DOMWrapperBase$Dart._wrap$html623afa$$Constructor_.call(this, ptr);
}
;
html623afa$CanvasGradientWrappingImplementation$Dart._wrap$html623afa$$Initializer_ = function(ptr){
  html623afa$DOMWrapperBase$Dart._wrap$html623afa$$Initializer_.call(this, ptr);
}
;
html623afa$CanvasGradientWrappingImplementation$Dart.CanvasGradientWrappingImplementation$_wrap$36$html623afa$$Factory_ = function(ptr){
  var tmp$0 = new html623afa$CanvasGradientWrappingImplementation$Dart;
  tmp$0.$typeInfo = html623afa$CanvasGradientWrappingImplementation$Dart.$lookupRTT();
  html623afa$CanvasGradientWrappingImplementation$Dart._wrap$html623afa$$Initializer_.call(tmp$0, ptr);
  html623afa$CanvasGradientWrappingImplementation$Dart._wrap$html623afa$$Constructor_.call(tmp$0, ptr);
  return tmp$0;
}
;
html623afa$CanvasGradientWrappingImplementation$Dart.prototype.addColorStop$member = function(offset, color){
  this._ptr$html623afa$$getter_().addColorStop$named(2, $noargs, offset, color);
  return;
}
;
html623afa$CanvasGradientWrappingImplementation$Dart.prototype.addColorStop$named = function($n, $o, offset, color){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return html623afa$CanvasGradientWrappingImplementation$Dart.prototype.addColorStop$member.call(this, offset, color);
}
;
html623afa$CanvasGradientWrappingImplementation$Dart.prototype.addColorStop$getter = function addColorStop$getter(){
  return $bind(html623afa$CanvasGradientWrappingImplementation$Dart.prototype.addColorStop$named, this);
}
;
