function html623afa$XMLHttpRequestUploadEventsImplementation$Dart(){
}

html623afa$XMLHttpRequestUploadEventsImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('html623afa$XMLHttpRequestUploadEventsImplementation$Dart'), html623afa$XMLHttpRequestUploadEventsImplementation$Dart.$RTTimplements);
}
;
html623afa$XMLHttpRequestUploadEventsImplementation$Dart.$RTTimplements = function(rtt){
  html623afa$XMLHttpRequestUploadEventsImplementation$Dart.$addTo(rtt);
}
;
html623afa$XMLHttpRequestUploadEventsImplementation$Dart.$addTo = function(target){
  var rtt = html623afa$XMLHttpRequestUploadEventsImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  html623afa$EventsImplementation$Dart.$addTo(target);
  html623afa$XMLHttpRequestUploadEvents$Dart.$addTo(target);
}
;
html623afa$XMLHttpRequestUploadEventsImplementation$Dart.prototype.$implements$html623afa$XMLHttpRequestUploadEventsImplementation$Dart = 1;
html623afa$XMLHttpRequestUploadEventsImplementation$Dart.prototype.$implements$html623afa$XMLHttpRequestUploadEvents$Dart = 1;
html623afa$XMLHttpRequestUploadEventsImplementation$Dart.prototype.$implements$html623afa$Events$Dart = 1;
html623afa$XMLHttpRequestUploadEventsImplementation$Dart.prototype.$implements$html623afa$EventsImplementation$Dart = 1;
html623afa$XMLHttpRequestUploadEventsImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(html623afa$XMLHttpRequestUploadEventsImplementation$Dart, html623afa$EventsImplementation$Dart);
html623afa$XMLHttpRequestUploadEventsImplementation$Dart._wrap$html623afa$$Constructor_ = function(_ptr){
  html623afa$EventsImplementation$Dart._wrap$html623afa$$Constructor_.call(this, _ptr);
}
;
html623afa$XMLHttpRequestUploadEventsImplementation$Dart._wrap$html623afa$$Initializer_ = function(_ptr){
  html623afa$EventsImplementation$Dart._wrap$html623afa$$Initializer_.call(this, _ptr);
}
;
html623afa$XMLHttpRequestUploadEventsImplementation$Dart.XMLHttpRequestUploadEventsImplementation$_wrap$40$html623afa$$Factory_ = function(_ptr){
  var tmp$0 = new html623afa$XMLHttpRequestUploadEventsImplementation$Dart;
  tmp$0.$typeInfo = html623afa$XMLHttpRequestUploadEventsImplementation$Dart.$lookupRTT();
  html623afa$XMLHttpRequestUploadEventsImplementation$Dart._wrap$html623afa$$Initializer_.call(tmp$0, _ptr);
  html623afa$XMLHttpRequestUploadEventsImplementation$Dart._wrap$html623afa$$Constructor_.call(tmp$0, _ptr);
  return tmp$0;
}
;
html623afa$XMLHttpRequestUploadEventsImplementation$Dart.prototype.abort$named = function(){
  return this.abort$getter().apply(this, arguments);
}
;
html623afa$XMLHttpRequestUploadEventsImplementation$Dart.prototype.abort$getter = function(){
  return this._get$html623afa$$member_('abort');
}
;
html623afa$XMLHttpRequestUploadEventsImplementation$Dart.prototype.error$named = function(){
  return this.error$getter().apply(this, arguments);
}
;
html623afa$XMLHttpRequestUploadEventsImplementation$Dart.prototype.error$getter = function(){
  return this._get$html623afa$$member_('error');
}
;
html623afa$XMLHttpRequestUploadEventsImplementation$Dart.prototype.load$named = function(){
  return this.load$getter().apply(this, arguments);
}
;
html623afa$XMLHttpRequestUploadEventsImplementation$Dart.prototype.load$getter = function(){
  return this._get$html623afa$$member_('load');
}
;
html623afa$XMLHttpRequestUploadEventsImplementation$Dart.prototype.loadStart$named = function(){
  return this.loadStart$getter().apply(this, arguments);
}
;
html623afa$XMLHttpRequestUploadEventsImplementation$Dart.prototype.loadStart$getter = function(){
  return this._get$html623afa$$member_('loadstart');
}
;
html623afa$XMLHttpRequestUploadEventsImplementation$Dart.prototype.progress$named = function(){
  return this.progress$getter().apply(this, arguments);
}
;
html623afa$XMLHttpRequestUploadEventsImplementation$Dart.prototype.progress$getter = function(){
  return this._get$html623afa$$member_('progress');
}
;
