function html623afa$PositionCallbackWrappingImplementation$Dart(){
}

html623afa$PositionCallbackWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('html623afa$PositionCallbackWrappingImplementation$Dart'), html623afa$PositionCallbackWrappingImplementation$Dart.$RTTimplements);
}
;
html623afa$PositionCallbackWrappingImplementation$Dart.$RTTimplements = function(rtt){
  html623afa$PositionCallbackWrappingImplementation$Dart.$addTo(rtt);
}
;
html623afa$PositionCallbackWrappingImplementation$Dart.$addTo = function(target){
  var rtt = html623afa$PositionCallbackWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  html623afa$DOMWrapperBase$Dart.$addTo(target);
  html623afa$PositionCallback$Dart.$addTo(target);
}
;
html623afa$PositionCallbackWrappingImplementation$Dart.prototype.$implements$html623afa$PositionCallbackWrappingImplementation$Dart = 1;
html623afa$PositionCallbackWrappingImplementation$Dart.prototype.$implements$html623afa$PositionCallback$Dart = 1;
html623afa$PositionCallbackWrappingImplementation$Dart.prototype.$implements$html623afa$DOMWrapperBase$Dart = 1;
html623afa$PositionCallbackWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(html623afa$PositionCallbackWrappingImplementation$Dart, html623afa$DOMWrapperBase$Dart);
html623afa$PositionCallbackWrappingImplementation$Dart._wrap$html623afa$$Constructor_ = function(ptr){
  html623afa$DOMWrapperBase$Dart._wrap$html623afa$$Constructor_.call(this, ptr);
}
;
html623afa$PositionCallbackWrappingImplementation$Dart._wrap$html623afa$$Initializer_ = function(ptr){
  html623afa$DOMWrapperBase$Dart._wrap$html623afa$$Initializer_.call(this, ptr);
}
;
html623afa$PositionCallbackWrappingImplementation$Dart.PositionCallbackWrappingImplementation$_wrap$38$html623afa$$Factory_ = function(ptr){
  var tmp$0 = new html623afa$PositionCallbackWrappingImplementation$Dart;
  tmp$0.$typeInfo = html623afa$PositionCallbackWrappingImplementation$Dart.$lookupRTT();
  html623afa$PositionCallbackWrappingImplementation$Dart._wrap$html623afa$$Initializer_.call(tmp$0, ptr);
  html623afa$PositionCallbackWrappingImplementation$Dart._wrap$html623afa$$Constructor_.call(tmp$0, ptr);
  return tmp$0;
}
;
html623afa$PositionCallbackWrappingImplementation$Dart.prototype.handleEvent$member = function(position){
  return this._ptr$html623afa$$getter_().handleEvent$named(1, $noargs, html623afa$LevelDom$Dart.unwrap$member(position));
}
;
html623afa$PositionCallbackWrappingImplementation$Dart.prototype.handleEvent$named = function($n, $o, position){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$PositionCallbackWrappingImplementation$Dart.prototype.handleEvent$member.call(this, position);
}
;
html623afa$PositionCallbackWrappingImplementation$Dart.prototype.handleEvent$getter = function handleEvent$getter(){
  return $bind(html623afa$PositionCallbackWrappingImplementation$Dart.prototype.handleEvent$named, this);
}
;
