function html623afa$FileEntrySyncWrappingImplementation$Dart(){
}

html623afa$FileEntrySyncWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('html623afa$FileEntrySyncWrappingImplementation$Dart'), html623afa$FileEntrySyncWrappingImplementation$Dart.$RTTimplements);
}
;
html623afa$FileEntrySyncWrappingImplementation$Dart.$RTTimplements = function(rtt){
  html623afa$FileEntrySyncWrappingImplementation$Dart.$addTo(rtt);
}
;
html623afa$FileEntrySyncWrappingImplementation$Dart.$addTo = function(target){
  var rtt = html623afa$FileEntrySyncWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  html623afa$EntrySyncWrappingImplementation$Dart.$addTo(target);
  html623afa$FileEntrySync$Dart.$addTo(target);
}
;
html623afa$FileEntrySyncWrappingImplementation$Dart.prototype.$implements$html623afa$FileEntrySyncWrappingImplementation$Dart = 1;
html623afa$FileEntrySyncWrappingImplementation$Dart.prototype.$implements$html623afa$FileEntrySync$Dart = 1;
html623afa$FileEntrySyncWrappingImplementation$Dart.prototype.$implements$html623afa$EntrySync$Dart = 1;
html623afa$FileEntrySyncWrappingImplementation$Dart.prototype.$implements$html623afa$EntrySyncWrappingImplementation$Dart = 1;
html623afa$FileEntrySyncWrappingImplementation$Dart.prototype.$implements$html623afa$DOMWrapperBase$Dart = 1;
html623afa$FileEntrySyncWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(html623afa$FileEntrySyncWrappingImplementation$Dart, html623afa$EntrySyncWrappingImplementation$Dart);
html623afa$FileEntrySyncWrappingImplementation$Dart._wrap$html623afa$$Constructor_ = function(ptr){
  html623afa$EntrySyncWrappingImplementation$Dart._wrap$html623afa$$Constructor_.call(this, ptr);
}
;
html623afa$FileEntrySyncWrappingImplementation$Dart._wrap$html623afa$$Initializer_ = function(ptr){
  html623afa$EntrySyncWrappingImplementation$Dart._wrap$html623afa$$Initializer_.call(this, ptr);
}
;
html623afa$FileEntrySyncWrappingImplementation$Dart.FileEntrySyncWrappingImplementation$_wrap$35$html623afa$$Factory_ = function(ptr){
  var tmp$0 = new html623afa$FileEntrySyncWrappingImplementation$Dart;
  tmp$0.$typeInfo = html623afa$FileEntrySyncWrappingImplementation$Dart.$lookupRTT();
  html623afa$FileEntrySyncWrappingImplementation$Dart._wrap$html623afa$$Initializer_.call(tmp$0, ptr);
  html623afa$FileEntrySyncWrappingImplementation$Dart._wrap$html623afa$$Constructor_.call(tmp$0, ptr);
  return tmp$0;
}
;
html623afa$FileEntrySyncWrappingImplementation$Dart.prototype.createWriter$member = function(){
  return html623afa$LevelDom$Dart.wrapFileWriterSync$member(this._ptr$html623afa$$getter_().createWriter$named(0, $noargs));
}
;
html623afa$FileEntrySyncWrappingImplementation$Dart.prototype.createWriter$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return html623afa$FileEntrySyncWrappingImplementation$Dart.prototype.createWriter$member.call(this);
}
;
html623afa$FileEntrySyncWrappingImplementation$Dart.prototype.createWriter$getter = function createWriter$getter(){
  return $bind(html623afa$FileEntrySyncWrappingImplementation$Dart.prototype.createWriter$named, this);
}
;
html623afa$FileEntrySyncWrappingImplementation$Dart.prototype.file$member = function(){
  return html623afa$LevelDom$Dart.wrapFile$member(this._ptr$html623afa$$getter_().file$named(0, $noargs));
}
;
html623afa$FileEntrySyncWrappingImplementation$Dart.prototype.file$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return html623afa$FileEntrySyncWrappingImplementation$Dart.prototype.file$member.call(this);
}
;
html623afa$FileEntrySyncWrappingImplementation$Dart.prototype.file$getter = function file$getter(){
  return $bind(html623afa$FileEntrySyncWrappingImplementation$Dart.prototype.file$named, this);
}
;
