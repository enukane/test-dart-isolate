function html623afa$WorkerWrappingImplementation$Dart(){
}

html623afa$WorkerWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('html623afa$WorkerWrappingImplementation$Dart'), html623afa$WorkerWrappingImplementation$Dart.$RTTimplements);
}
;
html623afa$WorkerWrappingImplementation$Dart.$RTTimplements = function(rtt){
  html623afa$WorkerWrappingImplementation$Dart.$addTo(rtt);
}
;
html623afa$WorkerWrappingImplementation$Dart.$addTo = function(target){
  var rtt = html623afa$WorkerWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  html623afa$EventTargetWrappingImplementation$Dart.$addTo(target);
  html623afa$Worker$Dart.$addTo(target);
}
;
html623afa$WorkerWrappingImplementation$Dart.prototype.$implements$html623afa$WorkerWrappingImplementation$Dart = 1;
html623afa$WorkerWrappingImplementation$Dart.prototype.$implements$html623afa$Worker$Dart = 1;
html623afa$WorkerWrappingImplementation$Dart.prototype.$implements$html623afa$AbstractWorker$Dart = 1;
html623afa$WorkerWrappingImplementation$Dart.prototype.$implements$html623afa$EventTarget$Dart = 1;
html623afa$WorkerWrappingImplementation$Dart.prototype.$implements$html623afa$EventTargetWrappingImplementation$Dart = 1;
html623afa$WorkerWrappingImplementation$Dart.prototype.$implements$html623afa$DOMWrapperBase$Dart = 1;
html623afa$WorkerWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(html623afa$WorkerWrappingImplementation$Dart, html623afa$EventTargetWrappingImplementation$Dart);
html623afa$WorkerWrappingImplementation$Dart._wrap$html623afa$$Constructor_ = function(ptr){
  html623afa$EventTargetWrappingImplementation$Dart._wrap$html623afa$$Constructor_.call(this, ptr);
}
;
html623afa$WorkerWrappingImplementation$Dart._wrap$html623afa$$Initializer_ = function(ptr){
  html623afa$EventTargetWrappingImplementation$Dart._wrap$html623afa$$Initializer_.call(this, ptr);
}
;
html623afa$WorkerWrappingImplementation$Dart.WorkerWrappingImplementation$_wrap$28$html623afa$$Factory_ = function(ptr){
  var tmp$0 = new html623afa$WorkerWrappingImplementation$Dart;
  tmp$0.$typeInfo = html623afa$WorkerWrappingImplementation$Dart.$lookupRTT();
  html623afa$WorkerWrappingImplementation$Dart._wrap$html623afa$$Initializer_.call(tmp$0, ptr);
  html623afa$WorkerWrappingImplementation$Dart._wrap$html623afa$$Constructor_.call(tmp$0, ptr);
  return tmp$0;
}
;
html623afa$WorkerWrappingImplementation$Dart.prototype.postMessage$member = function(message, messagePort){
  if (messagePort == null) {
    this._ptr$html623afa$$getter_().postMessage$named(1, $noargs, message);
    return;
  }
   else {
    this._ptr$html623afa$$getter_().postMessage$named(2, $noargs, message, html623afa$LevelDom$Dart.unwrap$member(messagePort));
    return;
  }
}
;
html623afa$WorkerWrappingImplementation$Dart.prototype.postMessage$named = function($n, $o, message, messagePort){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 1:
      messagePort = $o.messagePort?(++seen , $o.messagePort):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return html623afa$WorkerWrappingImplementation$Dart.prototype.postMessage$member.call(this, message, messagePort);
}
;
html623afa$WorkerWrappingImplementation$Dart.prototype.postMessage$getter = function postMessage$getter(){
  return $bind(html623afa$WorkerWrappingImplementation$Dart.prototype.postMessage$named, this);
}
;
html623afa$WorkerWrappingImplementation$Dart.prototype.terminate$member = function(){
  this._ptr$html623afa$$getter_().terminate$named(0, $noargs);
  return;
}
;
html623afa$WorkerWrappingImplementation$Dart.prototype.terminate$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return html623afa$WorkerWrappingImplementation$Dart.prototype.terminate$member.call(this);
}
;
html623afa$WorkerWrappingImplementation$Dart.prototype.terminate$getter = function terminate$getter(){
  return $bind(html623afa$WorkerWrappingImplementation$Dart.prototype.terminate$named, this);
}
;
html623afa$WorkerWrappingImplementation$Dart.prototype.on$named = function(){
  return this.on$getter().apply(this, arguments);
}
;
html623afa$WorkerWrappingImplementation$Dart.prototype.on$getter = function(){
  var tmp$0;
  if (this._on$html623afa$$getter_() == null) {
    this._on$html623afa$$setter_(tmp$0 = html623afa$WorkerEventsImplementation$Dart.WorkerEventsImplementation$_wrap$26$html623afa$$Factory_(this._ptr$html623afa$$getter_())) , tmp$0;
  }
  return this._on$html623afa$$getter_();
}
;
