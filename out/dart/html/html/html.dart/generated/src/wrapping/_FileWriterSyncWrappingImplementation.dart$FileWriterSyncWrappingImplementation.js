function html623afa$FileWriterSyncWrappingImplementation$Dart(){
}

html623afa$FileWriterSyncWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('html623afa$FileWriterSyncWrappingImplementation$Dart'), html623afa$FileWriterSyncWrappingImplementation$Dart.$RTTimplements);
}
;
html623afa$FileWriterSyncWrappingImplementation$Dart.$RTTimplements = function(rtt){
  html623afa$FileWriterSyncWrappingImplementation$Dart.$addTo(rtt);
}
;
html623afa$FileWriterSyncWrappingImplementation$Dart.$addTo = function(target){
  var rtt = html623afa$FileWriterSyncWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  html623afa$DOMWrapperBase$Dart.$addTo(target);
  html623afa$FileWriterSync$Dart.$addTo(target);
}
;
html623afa$FileWriterSyncWrappingImplementation$Dart.prototype.$implements$html623afa$FileWriterSyncWrappingImplementation$Dart = 1;
html623afa$FileWriterSyncWrappingImplementation$Dart.prototype.$implements$html623afa$FileWriterSync$Dart = 1;
html623afa$FileWriterSyncWrappingImplementation$Dart.prototype.$implements$html623afa$DOMWrapperBase$Dart = 1;
html623afa$FileWriterSyncWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(html623afa$FileWriterSyncWrappingImplementation$Dart, html623afa$DOMWrapperBase$Dart);
html623afa$FileWriterSyncWrappingImplementation$Dart._wrap$html623afa$$Constructor_ = function(ptr){
  html623afa$DOMWrapperBase$Dart._wrap$html623afa$$Constructor_.call(this, ptr);
}
;
html623afa$FileWriterSyncWrappingImplementation$Dart._wrap$html623afa$$Initializer_ = function(ptr){
  html623afa$DOMWrapperBase$Dart._wrap$html623afa$$Initializer_.call(this, ptr);
}
;
html623afa$FileWriterSyncWrappingImplementation$Dart.FileWriterSyncWrappingImplementation$_wrap$36$html623afa$$Factory_ = function(ptr){
  var tmp$0 = new html623afa$FileWriterSyncWrappingImplementation$Dart;
  tmp$0.$typeInfo = html623afa$FileWriterSyncWrappingImplementation$Dart.$lookupRTT();
  html623afa$FileWriterSyncWrappingImplementation$Dart._wrap$html623afa$$Initializer_.call(tmp$0, ptr);
  html623afa$FileWriterSyncWrappingImplementation$Dart._wrap$html623afa$$Constructor_.call(tmp$0, ptr);
  return tmp$0;
}
;
html623afa$FileWriterSyncWrappingImplementation$Dart.prototype.length$named = function(){
  return this.length$getter().apply(this, arguments);
}
;
html623afa$FileWriterSyncWrappingImplementation$Dart.prototype.length$getter = function(){
  return this._ptr$html623afa$$getter_().length$getter();
}
;
html623afa$FileWriterSyncWrappingImplementation$Dart.prototype.position$named = function(){
  return this.position$getter().apply(this, arguments);
}
;
html623afa$FileWriterSyncWrappingImplementation$Dart.prototype.position$getter = function(){
  return this._ptr$html623afa$$getter_().position$getter();
}
;
html623afa$FileWriterSyncWrappingImplementation$Dart.prototype.seek$member = function(position){
  this._ptr$html623afa$$getter_().seek$named(1, $noargs, position);
  return;
}
;
html623afa$FileWriterSyncWrappingImplementation$Dart.prototype.seek$named = function($n, $o, position){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$FileWriterSyncWrappingImplementation$Dart.prototype.seek$member.call(this, position);
}
;
html623afa$FileWriterSyncWrappingImplementation$Dart.prototype.seek$getter = function seek$getter(){
  return $bind(html623afa$FileWriterSyncWrappingImplementation$Dart.prototype.seek$named, this);
}
;
html623afa$FileWriterSyncWrappingImplementation$Dart.prototype.truncate$member = function(size){
  this._ptr$html623afa$$getter_().truncate$named(1, $noargs, size);
  return;
}
;
html623afa$FileWriterSyncWrappingImplementation$Dart.prototype.truncate$named = function($n, $o, size){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$FileWriterSyncWrappingImplementation$Dart.prototype.truncate$member.call(this, size);
}
;
html623afa$FileWriterSyncWrappingImplementation$Dart.prototype.truncate$getter = function truncate$getter(){
  return $bind(html623afa$FileWriterSyncWrappingImplementation$Dart.prototype.truncate$named, this);
}
;
html623afa$FileWriterSyncWrappingImplementation$Dart.prototype.write$member = function(data){
  this._ptr$html623afa$$getter_().write$named(1, $noargs, html623afa$LevelDom$Dart.unwrap$member(data));
  return;
}
;
html623afa$FileWriterSyncWrappingImplementation$Dart.prototype.write$named = function($n, $o, data){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$FileWriterSyncWrappingImplementation$Dart.prototype.write$member.call(this, data);
}
;
html623afa$FileWriterSyncWrappingImplementation$Dart.prototype.write$getter = function write$getter(){
  return $bind(html623afa$FileWriterSyncWrappingImplementation$Dart.prototype.write$named, this);
}
;
