function html623afa$EventSourceWrappingImplementation$Dart(){
}

html623afa$EventSourceWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('html623afa$EventSourceWrappingImplementation$Dart'), html623afa$EventSourceWrappingImplementation$Dart.$RTTimplements);
}
;
html623afa$EventSourceWrappingImplementation$Dart.$RTTimplements = function(rtt){
  html623afa$EventSourceWrappingImplementation$Dart.$addTo(rtt);
}
;
html623afa$EventSourceWrappingImplementation$Dart.$addTo = function(target){
  var rtt = html623afa$EventSourceWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  html623afa$EventTargetWrappingImplementation$Dart.$addTo(target);
  html623afa$EventSource$Dart.$addTo(target);
}
;
html623afa$EventSourceWrappingImplementation$Dart.prototype.$implements$html623afa$EventSourceWrappingImplementation$Dart = 1;
html623afa$EventSourceWrappingImplementation$Dart.prototype.$implements$html623afa$EventSource$Dart = 1;
html623afa$EventSourceWrappingImplementation$Dart.prototype.$implements$html623afa$EventTarget$Dart = 1;
html623afa$EventSourceWrappingImplementation$Dart.prototype.$implements$html623afa$EventTargetWrappingImplementation$Dart = 1;
html623afa$EventSourceWrappingImplementation$Dart.prototype.$implements$html623afa$DOMWrapperBase$Dart = 1;
html623afa$EventSourceWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(html623afa$EventSourceWrappingImplementation$Dart, html623afa$EventTargetWrappingImplementation$Dart);
html623afa$EventSourceWrappingImplementation$Dart._wrap$html623afa$$Constructor_ = function(ptr){
  html623afa$EventTargetWrappingImplementation$Dart._wrap$html623afa$$Constructor_.call(this, ptr);
}
;
html623afa$EventSourceWrappingImplementation$Dart._wrap$html623afa$$Initializer_ = function(ptr){
  html623afa$EventTargetWrappingImplementation$Dart._wrap$html623afa$$Initializer_.call(this, ptr);
}
;
html623afa$EventSourceWrappingImplementation$Dart.EventSourceWrappingImplementation$_wrap$33$html623afa$$Factory_ = function(ptr){
  var tmp$0 = new html623afa$EventSourceWrappingImplementation$Dart;
  tmp$0.$typeInfo = html623afa$EventSourceWrappingImplementation$Dart.$lookupRTT();
  html623afa$EventSourceWrappingImplementation$Dart._wrap$html623afa$$Initializer_.call(tmp$0, ptr);
  html623afa$EventSourceWrappingImplementation$Dart._wrap$html623afa$$Constructor_.call(tmp$0, ptr);
  return tmp$0;
}
;
html623afa$EventSourceWrappingImplementation$Dart.prototype.URL$named = function(){
  return this.URL$getter().apply(this, arguments);
}
;
html623afa$EventSourceWrappingImplementation$Dart.prototype.URL$getter = function(){
  return this._ptr$html623afa$$getter_().URL$getter();
}
;
html623afa$EventSourceWrappingImplementation$Dart.prototype.readyState$named = function(){
  return this.readyState$getter().apply(this, arguments);
}
;
html623afa$EventSourceWrappingImplementation$Dart.prototype.readyState$getter = function(){
  return this._ptr$html623afa$$getter_().readyState$getter();
}
;
html623afa$EventSourceWrappingImplementation$Dart.prototype.close$member = function(){
  this._ptr$html623afa$$getter_().close$named(0, $noargs);
}
;
html623afa$EventSourceWrappingImplementation$Dart.prototype.close$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return html623afa$EventSourceWrappingImplementation$Dart.prototype.close$member.call(this);
}
;
html623afa$EventSourceWrappingImplementation$Dart.prototype.close$getter = function close$getter(){
  return $bind(html623afa$EventSourceWrappingImplementation$Dart.prototype.close$named, this);
}
;
html623afa$EventSourceWrappingImplementation$Dart.prototype.on$named = function(){
  return this.on$getter().apply(this, arguments);
}
;
html623afa$EventSourceWrappingImplementation$Dart.prototype.on$getter = function(){
  var tmp$0;
  if (this._on$html623afa$$getter_() == null) {
    this._on$html623afa$$setter_(tmp$0 = html623afa$EventSourceEventsImplementation$Dart.EventSourceEventsImplementation$_wrap$31$html623afa$$Factory_(this._ptr$html623afa$$getter_())) , tmp$0;
  }
  return this._on$html623afa$$getter_();
}
;
