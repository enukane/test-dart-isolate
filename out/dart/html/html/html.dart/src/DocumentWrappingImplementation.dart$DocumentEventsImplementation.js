function html623afa$DocumentEventsImplementation$Dart(){
}

html623afa$DocumentEventsImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('html623afa$DocumentEventsImplementation$Dart'), html623afa$DocumentEventsImplementation$Dart.$RTTimplements);
}
;
html623afa$DocumentEventsImplementation$Dart.$RTTimplements = function(rtt){
  html623afa$DocumentEventsImplementation$Dart.$addTo(rtt);
}
;
html623afa$DocumentEventsImplementation$Dart.$addTo = function(target){
  var rtt = html623afa$DocumentEventsImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  html623afa$ElementEventsImplementation$Dart.$addTo(target);
  html623afa$DocumentEvents$Dart.$addTo(target);
}
;
html623afa$DocumentEventsImplementation$Dart.prototype.$implements$html623afa$DocumentEventsImplementation$Dart = 1;
html623afa$DocumentEventsImplementation$Dart.prototype.$implements$html623afa$DocumentEvents$Dart = 1;
html623afa$DocumentEventsImplementation$Dart.prototype.$implements$html623afa$ElementEvents$Dart = 1;
html623afa$DocumentEventsImplementation$Dart.prototype.$implements$html623afa$Events$Dart = 1;
html623afa$DocumentEventsImplementation$Dart.prototype.$implements$html623afa$ElementEventsImplementation$Dart = 1;
html623afa$DocumentEventsImplementation$Dart.prototype.$implements$html623afa$EventsImplementation$Dart = 1;
html623afa$DocumentEventsImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(html623afa$DocumentEventsImplementation$Dart, html623afa$ElementEventsImplementation$Dart);
html623afa$DocumentEventsImplementation$Dart._wrap$html623afa$$Constructor_ = function(_ptr){
  html623afa$ElementEventsImplementation$Dart._wrap$html623afa$$Constructor_.call(this, _ptr);
}
;
html623afa$DocumentEventsImplementation$Dart._wrap$html623afa$$Initializer_ = function(_ptr){
  html623afa$ElementEventsImplementation$Dart._wrap$html623afa$$Initializer_.call(this, _ptr);
}
;
html623afa$DocumentEventsImplementation$Dart.DocumentEventsImplementation$_wrap$28$html623afa$$Factory_ = function(_ptr){
  var tmp$0 = new html623afa$DocumentEventsImplementation$Dart;
  tmp$0.$typeInfo = html623afa$DocumentEventsImplementation$Dart.$lookupRTT();
  html623afa$DocumentEventsImplementation$Dart._wrap$html623afa$$Initializer_.call(tmp$0, _ptr);
  html623afa$DocumentEventsImplementation$Dart._wrap$html623afa$$Constructor_.call(tmp$0, _ptr);
  return tmp$0;
}
;
html623afa$DocumentEventsImplementation$Dart.prototype.readyStateChange$named = function(){
  return this.readyStateChange$getter().apply(this, arguments);
}
;
html623afa$DocumentEventsImplementation$Dart.prototype.readyStateChange$getter = function(){
  return this._get$html623afa$$member_('readystatechange');
}
;
html623afa$DocumentEventsImplementation$Dart.prototype.selectionChange$named = function(){
  return this.selectionChange$getter().apply(this, arguments);
}
;
html623afa$DocumentEventsImplementation$Dart.prototype.selectionChange$getter = function(){
  return this._get$html623afa$$member_('selectionchange');
}
;
html623afa$DocumentEventsImplementation$Dart.prototype.contentLoaded$named = function(){
  return this.contentLoaded$getter().apply(this, arguments);
}
;
html623afa$DocumentEventsImplementation$Dart.prototype.contentLoaded$getter = function(){
  return this._get$html623afa$$member_('DOMContentLoaded');
}
;
