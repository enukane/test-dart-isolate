function html623afa$WorkerEventsImplementation$Dart(){
}

html623afa$WorkerEventsImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('html623afa$WorkerEventsImplementation$Dart'), html623afa$WorkerEventsImplementation$Dart.$RTTimplements);
}
;
html623afa$WorkerEventsImplementation$Dart.$RTTimplements = function(rtt){
  html623afa$WorkerEventsImplementation$Dart.$addTo(rtt);
}
;
html623afa$WorkerEventsImplementation$Dart.$addTo = function(target){
  var rtt = html623afa$WorkerEventsImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  html623afa$AbstractWorkerEventsImplementation$Dart.$addTo(target);
  html623afa$WorkerEvents$Dart.$addTo(target);
}
;
html623afa$WorkerEventsImplementation$Dart.prototype.$implements$html623afa$WorkerEventsImplementation$Dart = 1;
html623afa$WorkerEventsImplementation$Dart.prototype.$implements$html623afa$WorkerEvents$Dart = 1;
html623afa$WorkerEventsImplementation$Dart.prototype.$implements$html623afa$AbstractWorkerEvents$Dart = 1;
html623afa$WorkerEventsImplementation$Dart.prototype.$implements$html623afa$Events$Dart = 1;
html623afa$WorkerEventsImplementation$Dart.prototype.$implements$html623afa$AbstractWorkerEventsImplementation$Dart = 1;
html623afa$WorkerEventsImplementation$Dart.prototype.$implements$html623afa$EventsImplementation$Dart = 1;
html623afa$WorkerEventsImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(html623afa$WorkerEventsImplementation$Dart, html623afa$AbstractWorkerEventsImplementation$Dart);
html623afa$WorkerEventsImplementation$Dart._wrap$html623afa$$Constructor_ = function(_ptr){
  html623afa$AbstractWorkerEventsImplementation$Dart._wrap$html623afa$$Constructor_.call(this, _ptr);
}
;
html623afa$WorkerEventsImplementation$Dart._wrap$html623afa$$Initializer_ = function(_ptr){
  html623afa$AbstractWorkerEventsImplementation$Dart._wrap$html623afa$$Initializer_.call(this, _ptr);
}
;
html623afa$WorkerEventsImplementation$Dart.WorkerEventsImplementation$_wrap$26$html623afa$$Factory_ = function(_ptr){
  var tmp$0 = new html623afa$WorkerEventsImplementation$Dart;
  tmp$0.$typeInfo = html623afa$WorkerEventsImplementation$Dart.$lookupRTT();
  html623afa$WorkerEventsImplementation$Dart._wrap$html623afa$$Initializer_.call(tmp$0, _ptr);
  html623afa$WorkerEventsImplementation$Dart._wrap$html623afa$$Constructor_.call(tmp$0, _ptr);
  return tmp$0;
}
;
html623afa$WorkerEventsImplementation$Dart.prototype.message$named = function(){
  return this.message$getter().apply(this, arguments);
}
;
html623afa$WorkerEventsImplementation$Dart.prototype.message$getter = function(){
  return this._get$html623afa$$member_('message');
}
;
