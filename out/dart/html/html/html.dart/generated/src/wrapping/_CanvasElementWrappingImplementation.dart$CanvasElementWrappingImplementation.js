function html623afa$CanvasElementWrappingImplementation$Dart(){
}

html623afa$CanvasElementWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('html623afa$CanvasElementWrappingImplementation$Dart'), html623afa$CanvasElementWrappingImplementation$Dart.$RTTimplements);
}
;
html623afa$CanvasElementWrappingImplementation$Dart.$RTTimplements = function(rtt){
  html623afa$CanvasElementWrappingImplementation$Dart.$addTo(rtt);
}
;
html623afa$CanvasElementWrappingImplementation$Dart.$addTo = function(target){
  var rtt = html623afa$CanvasElementWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  html623afa$ElementWrappingImplementation$Dart.$addTo(target);
  html623afa$CanvasElement$Dart.$addTo(target);
}
;
html623afa$CanvasElementWrappingImplementation$Dart.prototype.$implements$html623afa$CanvasElementWrappingImplementation$Dart = 1;
html623afa$CanvasElementWrappingImplementation$Dart.prototype.$implements$html623afa$CanvasElement$Dart = 1;
html623afa$CanvasElementWrappingImplementation$Dart.prototype.$implements$html623afa$Element$Dart = 1;
html623afa$CanvasElementWrappingImplementation$Dart.prototype.$implements$html623afa$Node$Dart = 1;
html623afa$CanvasElementWrappingImplementation$Dart.prototype.$implements$html623afa$EventTarget$Dart = 1;
html623afa$CanvasElementWrappingImplementation$Dart.prototype.$implements$html623afa$ElementWrappingImplementation$Dart = 1;
html623afa$CanvasElementWrappingImplementation$Dart.prototype.$implements$html623afa$NodeWrappingImplementation$Dart = 1;
html623afa$CanvasElementWrappingImplementation$Dart.prototype.$implements$html623afa$EventTargetWrappingImplementation$Dart = 1;
html623afa$CanvasElementWrappingImplementation$Dart.prototype.$implements$html623afa$DOMWrapperBase$Dart = 1;
html623afa$CanvasElementWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(html623afa$CanvasElementWrappingImplementation$Dart, html623afa$ElementWrappingImplementation$Dart);
html623afa$CanvasElementWrappingImplementation$Dart._wrap$html623afa$$Constructor_ = function(ptr){
  html623afa$ElementWrappingImplementation$Dart._wrap$html623afa$$Constructor_.call(this, ptr);
}
;
html623afa$CanvasElementWrappingImplementation$Dart._wrap$html623afa$$Initializer_ = function(ptr){
  html623afa$ElementWrappingImplementation$Dart._wrap$html623afa$$Initializer_.call(this, ptr);
}
;
html623afa$CanvasElementWrappingImplementation$Dart.CanvasElementWrappingImplementation$_wrap$35$html623afa$$Factory_ = function(ptr){
  var tmp$0 = new html623afa$CanvasElementWrappingImplementation$Dart;
  tmp$0.$typeInfo = html623afa$CanvasElementWrappingImplementation$Dart.$lookupRTT();
  html623afa$CanvasElementWrappingImplementation$Dart._wrap$html623afa$$Initializer_.call(tmp$0, ptr);
  html623afa$CanvasElementWrappingImplementation$Dart._wrap$html623afa$$Constructor_.call(tmp$0, ptr);
  return tmp$0;
}
;
html623afa$CanvasElementWrappingImplementation$Dart.prototype.height$named = function(){
  return this.height$getter().apply(this, arguments);
}
;
html623afa$CanvasElementWrappingImplementation$Dart.prototype.height$getter = function(){
  return this._ptr$html623afa$$getter_().height$getter();
}
;
html623afa$CanvasElementWrappingImplementation$Dart.prototype.height$setter = function(value){
  var tmp$0;
  this._ptr$html623afa$$getter_().height$setter(tmp$0 = value) , tmp$0;
}
;
html623afa$CanvasElementWrappingImplementation$Dart.prototype.width$named = function(){
  return this.width$getter().apply(this, arguments);
}
;
html623afa$CanvasElementWrappingImplementation$Dart.prototype.width$getter = function(){
  return this._ptr$html623afa$$getter_().width$getter();
}
;
html623afa$CanvasElementWrappingImplementation$Dart.prototype.width$setter = function(value){
  var tmp$0;
  this._ptr$html623afa$$getter_().width$setter(tmp$0 = value) , tmp$0;
}
;
html623afa$CanvasElementWrappingImplementation$Dart.prototype.getContext$member = function(contextId){
  if (contextId == null) {
    return html623afa$LevelDom$Dart.wrapCanvasRenderingContext$member(this._ptr$html623afa$$getter_().getContext$named(0, $noargs));
  }
   else {
    return html623afa$LevelDom$Dart.wrapCanvasRenderingContext$member(this._ptr$html623afa$$getter_().getContext$named(1, $noargs, contextId));
  }
}
;
html623afa$CanvasElementWrappingImplementation$Dart.prototype.getContext$named = function($n, $o, contextId){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 0:
      contextId = $o.contextId?(++seen , $o.contextId):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$CanvasElementWrappingImplementation$Dart.prototype.getContext$member.call(this, contextId);
}
;
html623afa$CanvasElementWrappingImplementation$Dart.prototype.getContext$getter = function getContext$getter(){
  return $bind(html623afa$CanvasElementWrappingImplementation$Dart.prototype.getContext$named, this);
}
;
html623afa$CanvasElementWrappingImplementation$Dart.prototype.toDataURL$member = function(type){
  return this._ptr$html623afa$$getter_().toDataURL$named(1, $noargs, type);
}
;
html623afa$CanvasElementWrappingImplementation$Dart.prototype.toDataURL$named = function($n, $o, type){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$CanvasElementWrappingImplementation$Dart.prototype.toDataURL$member.call(this, type);
}
;
html623afa$CanvasElementWrappingImplementation$Dart.prototype.toDataURL$getter = function toDataURL$getter(){
  return $bind(html623afa$CanvasElementWrappingImplementation$Dart.prototype.toDataURL$named, this);
}
;
