function html623afa$AbstractWorkerWrappingImplementation$Dart(){
}

html623afa$AbstractWorkerWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('html623afa$AbstractWorkerWrappingImplementation$Dart'), html623afa$AbstractWorkerWrappingImplementation$Dart.$RTTimplements);
}
;
html623afa$AbstractWorkerWrappingImplementation$Dart.$RTTimplements = function(rtt){
  html623afa$AbstractWorkerWrappingImplementation$Dart.$addTo(rtt);
}
;
html623afa$AbstractWorkerWrappingImplementation$Dart.$addTo = function(target){
  var rtt = html623afa$AbstractWorkerWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  html623afa$EventTargetWrappingImplementation$Dart.$addTo(target);
  html623afa$AbstractWorker$Dart.$addTo(target);
}
;
html623afa$AbstractWorkerWrappingImplementation$Dart.prototype.$implements$html623afa$AbstractWorkerWrappingImplementation$Dart = 1;
html623afa$AbstractWorkerWrappingImplementation$Dart.prototype.$implements$html623afa$AbstractWorker$Dart = 1;
html623afa$AbstractWorkerWrappingImplementation$Dart.prototype.$implements$html623afa$EventTarget$Dart = 1;
html623afa$AbstractWorkerWrappingImplementation$Dart.prototype.$implements$html623afa$EventTargetWrappingImplementation$Dart = 1;
html623afa$AbstractWorkerWrappingImplementation$Dart.prototype.$implements$html623afa$DOMWrapperBase$Dart = 1;
html623afa$AbstractWorkerWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(html623afa$AbstractWorkerWrappingImplementation$Dart, html623afa$EventTargetWrappingImplementation$Dart);
html623afa$AbstractWorkerWrappingImplementation$Dart._wrap$html623afa$$Constructor_ = function(ptr){
  html623afa$EventTargetWrappingImplementation$Dart._wrap$html623afa$$Constructor_.call(this, ptr);
}
;
html623afa$AbstractWorkerWrappingImplementation$Dart._wrap$html623afa$$Initializer_ = function(ptr){
  html623afa$EventTargetWrappingImplementation$Dart._wrap$html623afa$$Initializer_.call(this, ptr);
}
;
html623afa$AbstractWorkerWrappingImplementation$Dart.AbstractWorkerWrappingImplementation$_wrap$36$html623afa$$Factory_ = function(ptr){
  var tmp$0 = new html623afa$AbstractWorkerWrappingImplementation$Dart;
  tmp$0.$typeInfo = html623afa$AbstractWorkerWrappingImplementation$Dart.$lookupRTT();
  html623afa$AbstractWorkerWrappingImplementation$Dart._wrap$html623afa$$Initializer_.call(tmp$0, ptr);
  html623afa$AbstractWorkerWrappingImplementation$Dart._wrap$html623afa$$Constructor_.call(tmp$0, ptr);
  return tmp$0;
}
;
html623afa$AbstractWorkerWrappingImplementation$Dart.prototype.on$named = function(){
  return this.on$getter().apply(this, arguments);
}
;
html623afa$AbstractWorkerWrappingImplementation$Dart.prototype.on$getter = function(){
  var tmp$0;
  if (this._on$html623afa$$getter_() == null) {
    this._on$html623afa$$setter_(tmp$0 = html623afa$AbstractWorkerEventsImplementation$Dart.AbstractWorkerEventsImplementation$_wrap$34$html623afa$$Factory_(this._ptr$html623afa$$getter_())) , tmp$0;
  }
  return this._on$html623afa$$getter_();
}
;
