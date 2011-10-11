function html623afa$AbstractWorkerEventsImplementation$Dart(){
}

html623afa$AbstractWorkerEventsImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('html623afa$AbstractWorkerEventsImplementation$Dart'), html623afa$AbstractWorkerEventsImplementation$Dart.$RTTimplements);
}
;
html623afa$AbstractWorkerEventsImplementation$Dart.$RTTimplements = function(rtt){
  html623afa$AbstractWorkerEventsImplementation$Dart.$addTo(rtt);
}
;
html623afa$AbstractWorkerEventsImplementation$Dart.$addTo = function(target){
  var rtt = html623afa$AbstractWorkerEventsImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  html623afa$EventsImplementation$Dart.$addTo(target);
  html623afa$AbstractWorkerEvents$Dart.$addTo(target);
}
;
html623afa$AbstractWorkerEventsImplementation$Dart.prototype.$implements$html623afa$AbstractWorkerEventsImplementation$Dart = 1;
html623afa$AbstractWorkerEventsImplementation$Dart.prototype.$implements$html623afa$AbstractWorkerEvents$Dart = 1;
html623afa$AbstractWorkerEventsImplementation$Dart.prototype.$implements$html623afa$Events$Dart = 1;
html623afa$AbstractWorkerEventsImplementation$Dart.prototype.$implements$html623afa$EventsImplementation$Dart = 1;
html623afa$AbstractWorkerEventsImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(html623afa$AbstractWorkerEventsImplementation$Dart, html623afa$EventsImplementation$Dart);
html623afa$AbstractWorkerEventsImplementation$Dart._wrap$html623afa$$Constructor_ = function(_ptr){
  html623afa$EventsImplementation$Dart._wrap$html623afa$$Constructor_.call(this, _ptr);
}
;
html623afa$AbstractWorkerEventsImplementation$Dart._wrap$html623afa$$Initializer_ = function(_ptr){
  html623afa$EventsImplementation$Dart._wrap$html623afa$$Initializer_.call(this, _ptr);
}
;
html623afa$AbstractWorkerEventsImplementation$Dart.AbstractWorkerEventsImplementation$_wrap$34$html623afa$$Factory_ = function(_ptr){
  var tmp$0 = new html623afa$AbstractWorkerEventsImplementation$Dart;
  tmp$0.$typeInfo = html623afa$AbstractWorkerEventsImplementation$Dart.$lookupRTT();
  html623afa$AbstractWorkerEventsImplementation$Dart._wrap$html623afa$$Initializer_.call(tmp$0, _ptr);
  html623afa$AbstractWorkerEventsImplementation$Dart._wrap$html623afa$$Constructor_.call(tmp$0, _ptr);
  return tmp$0;
}
;
html623afa$AbstractWorkerEventsImplementation$Dart.prototype.error$named = function(){
  return this.error$getter().apply(this, arguments);
}
;
html623afa$AbstractWorkerEventsImplementation$Dart.prototype.error$getter = function(){
  return this._get$html623afa$$member_('error');
}
;
