function html623afa$EventSourceEventsImplementation$Dart(){
}

html623afa$EventSourceEventsImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('html623afa$EventSourceEventsImplementation$Dart'), html623afa$EventSourceEventsImplementation$Dart.$RTTimplements);
}
;
html623afa$EventSourceEventsImplementation$Dart.$RTTimplements = function(rtt){
  html623afa$EventSourceEventsImplementation$Dart.$addTo(rtt);
}
;
html623afa$EventSourceEventsImplementation$Dart.$addTo = function(target){
  var rtt = html623afa$EventSourceEventsImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  html623afa$EventsImplementation$Dart.$addTo(target);
  html623afa$EventSourceEvents$Dart.$addTo(target);
}
;
html623afa$EventSourceEventsImplementation$Dart.prototype.$implements$html623afa$EventSourceEventsImplementation$Dart = 1;
html623afa$EventSourceEventsImplementation$Dart.prototype.$implements$html623afa$EventSourceEvents$Dart = 1;
html623afa$EventSourceEventsImplementation$Dart.prototype.$implements$html623afa$Events$Dart = 1;
html623afa$EventSourceEventsImplementation$Dart.prototype.$implements$html623afa$EventsImplementation$Dart = 1;
html623afa$EventSourceEventsImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(html623afa$EventSourceEventsImplementation$Dart, html623afa$EventsImplementation$Dart);
html623afa$EventSourceEventsImplementation$Dart._wrap$html623afa$$Constructor_ = function(_ptr){
  html623afa$EventsImplementation$Dart._wrap$html623afa$$Constructor_.call(this, _ptr);
}
;
html623afa$EventSourceEventsImplementation$Dart._wrap$html623afa$$Initializer_ = function(_ptr){
  html623afa$EventsImplementation$Dart._wrap$html623afa$$Initializer_.call(this, _ptr);
}
;
html623afa$EventSourceEventsImplementation$Dart.EventSourceEventsImplementation$_wrap$31$html623afa$$Factory_ = function(_ptr){
  var tmp$0 = new html623afa$EventSourceEventsImplementation$Dart;
  tmp$0.$typeInfo = html623afa$EventSourceEventsImplementation$Dart.$lookupRTT();
  html623afa$EventSourceEventsImplementation$Dart._wrap$html623afa$$Initializer_.call(tmp$0, _ptr);
  html623afa$EventSourceEventsImplementation$Dart._wrap$html623afa$$Constructor_.call(tmp$0, _ptr);
  return tmp$0;
}
;
html623afa$EventSourceEventsImplementation$Dart.prototype.error$named = function(){
  return this.error$getter().apply(this, arguments);
}
;
html623afa$EventSourceEventsImplementation$Dart.prototype.error$getter = function(){
  return this._get$html623afa$$member_('error');
}
;
html623afa$EventSourceEventsImplementation$Dart.prototype.message$named = function(){
  return this.message$getter().apply(this, arguments);
}
;
html623afa$EventSourceEventsImplementation$Dart.prototype.message$getter = function(){
  return this._get$html623afa$$member_('message');
}
;
html623afa$EventSourceEventsImplementation$Dart.prototype.open$named = function(){
  return this.open$getter().apply(this, arguments);
}
;
html623afa$EventSourceEventsImplementation$Dart.prototype.open$getter = function(){
  return this._get$html623afa$$member_('open');
}
;
