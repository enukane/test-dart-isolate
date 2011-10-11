function html623afa$XMLHttpRequestEventsImplementation$Dart(){
}

html623afa$XMLHttpRequestEventsImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('html623afa$XMLHttpRequestEventsImplementation$Dart'), html623afa$XMLHttpRequestEventsImplementation$Dart.$RTTimplements);
}
;
html623afa$XMLHttpRequestEventsImplementation$Dart.$RTTimplements = function(rtt){
  html623afa$XMLHttpRequestEventsImplementation$Dart.$addTo(rtt);
}
;
html623afa$XMLHttpRequestEventsImplementation$Dart.$addTo = function(target){
  var rtt = html623afa$XMLHttpRequestEventsImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  html623afa$EventsImplementation$Dart.$addTo(target);
  html623afa$XMLHttpRequestEvents$Dart.$addTo(target);
}
;
html623afa$XMLHttpRequestEventsImplementation$Dart.prototype.$implements$html623afa$XMLHttpRequestEventsImplementation$Dart = 1;
html623afa$XMLHttpRequestEventsImplementation$Dart.prototype.$implements$html623afa$XMLHttpRequestEvents$Dart = 1;
html623afa$XMLHttpRequestEventsImplementation$Dart.prototype.$implements$html623afa$Events$Dart = 1;
html623afa$XMLHttpRequestEventsImplementation$Dart.prototype.$implements$html623afa$EventsImplementation$Dart = 1;
html623afa$XMLHttpRequestEventsImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(html623afa$XMLHttpRequestEventsImplementation$Dart, html623afa$EventsImplementation$Dart);
html623afa$XMLHttpRequestEventsImplementation$Dart._wrap$html623afa$$Constructor_ = function(_ptr){
  html623afa$EventsImplementation$Dart._wrap$html623afa$$Constructor_.call(this, _ptr);
}
;
html623afa$XMLHttpRequestEventsImplementation$Dart._wrap$html623afa$$Initializer_ = function(_ptr){
  html623afa$EventsImplementation$Dart._wrap$html623afa$$Initializer_.call(this, _ptr);
}
;
html623afa$XMLHttpRequestEventsImplementation$Dart.XMLHttpRequestEventsImplementation$_wrap$34$html623afa$$Factory_ = function(_ptr){
  var tmp$0 = new html623afa$XMLHttpRequestEventsImplementation$Dart;
  tmp$0.$typeInfo = html623afa$XMLHttpRequestEventsImplementation$Dart.$lookupRTT();
  html623afa$XMLHttpRequestEventsImplementation$Dart._wrap$html623afa$$Initializer_.call(tmp$0, _ptr);
  html623afa$XMLHttpRequestEventsImplementation$Dart._wrap$html623afa$$Constructor_.call(tmp$0, _ptr);
  return tmp$0;
}
;
html623afa$XMLHttpRequestEventsImplementation$Dart.prototype.abort$named = function(){
  return this.abort$getter().apply(this, arguments);
}
;
html623afa$XMLHttpRequestEventsImplementation$Dart.prototype.abort$getter = function(){
  return this._get$html623afa$$member_('abort');
}
;
html623afa$XMLHttpRequestEventsImplementation$Dart.prototype.error$named = function(){
  return this.error$getter().apply(this, arguments);
}
;
html623afa$XMLHttpRequestEventsImplementation$Dart.prototype.error$getter = function(){
  return this._get$html623afa$$member_('error');
}
;
html623afa$XMLHttpRequestEventsImplementation$Dart.prototype.load$named = function(){
  return this.load$getter().apply(this, arguments);
}
;
html623afa$XMLHttpRequestEventsImplementation$Dart.prototype.load$getter = function(){
  return this._get$html623afa$$member_('load');
}
;
html623afa$XMLHttpRequestEventsImplementation$Dart.prototype.loadStart$named = function(){
  return this.loadStart$getter().apply(this, arguments);
}
;
html623afa$XMLHttpRequestEventsImplementation$Dart.prototype.loadStart$getter = function(){
  return this._get$html623afa$$member_('loadstart');
}
;
html623afa$XMLHttpRequestEventsImplementation$Dart.prototype.progress$named = function(){
  return this.progress$getter().apply(this, arguments);
}
;
html623afa$XMLHttpRequestEventsImplementation$Dart.prototype.progress$getter = function(){
  return this._get$html623afa$$member_('progress');
}
;
html623afa$XMLHttpRequestEventsImplementation$Dart.prototype.readyStateChange$named = function(){
  return this.readyStateChange$getter().apply(this, arguments);
}
;
html623afa$XMLHttpRequestEventsImplementation$Dart.prototype.readyStateChange$getter = function(){
  return this._get$html623afa$$member_('readystatechange');
}
;
