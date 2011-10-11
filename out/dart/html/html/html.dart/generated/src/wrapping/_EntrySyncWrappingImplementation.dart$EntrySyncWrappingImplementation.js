function html623afa$EntrySyncWrappingImplementation$Dart(){
}

html623afa$EntrySyncWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('html623afa$EntrySyncWrappingImplementation$Dart'), html623afa$EntrySyncWrappingImplementation$Dart.$RTTimplements);
}
;
html623afa$EntrySyncWrappingImplementation$Dart.$RTTimplements = function(rtt){
  html623afa$EntrySyncWrappingImplementation$Dart.$addTo(rtt);
}
;
html623afa$EntrySyncWrappingImplementation$Dart.$addTo = function(target){
  var rtt = html623afa$EntrySyncWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  html623afa$DOMWrapperBase$Dart.$addTo(target);
  html623afa$EntrySync$Dart.$addTo(target);
}
;
html623afa$EntrySyncWrappingImplementation$Dart.prototype.$implements$html623afa$EntrySyncWrappingImplementation$Dart = 1;
html623afa$EntrySyncWrappingImplementation$Dart.prototype.$implements$html623afa$EntrySync$Dart = 1;
html623afa$EntrySyncWrappingImplementation$Dart.prototype.$implements$html623afa$DOMWrapperBase$Dart = 1;
html623afa$EntrySyncWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(html623afa$EntrySyncWrappingImplementation$Dart, html623afa$DOMWrapperBase$Dart);
html623afa$EntrySyncWrappingImplementation$Dart._wrap$html623afa$$Constructor_ = function(ptr){
  html623afa$DOMWrapperBase$Dart._wrap$html623afa$$Constructor_.call(this, ptr);
}
;
html623afa$EntrySyncWrappingImplementation$Dart._wrap$html623afa$$Initializer_ = function(ptr){
  html623afa$DOMWrapperBase$Dart._wrap$html623afa$$Initializer_.call(this, ptr);
}
;
html623afa$EntrySyncWrappingImplementation$Dart.EntrySyncWrappingImplementation$_wrap$31$html623afa$$Factory_ = function(ptr){
  var tmp$0 = new html623afa$EntrySyncWrappingImplementation$Dart;
  tmp$0.$typeInfo = html623afa$EntrySyncWrappingImplementation$Dart.$lookupRTT();
  html623afa$EntrySyncWrappingImplementation$Dart._wrap$html623afa$$Initializer_.call(tmp$0, ptr);
  html623afa$EntrySyncWrappingImplementation$Dart._wrap$html623afa$$Constructor_.call(tmp$0, ptr);
  return tmp$0;
}
;
html623afa$EntrySyncWrappingImplementation$Dart.prototype.filesystem$named = function(){
  return this.filesystem$getter().apply(this, arguments);
}
;
html623afa$EntrySyncWrappingImplementation$Dart.prototype.filesystem$getter = function(){
  return html623afa$LevelDom$Dart.wrapDOMFileSystemSync$member(this._ptr$html623afa$$getter_().filesystem$getter());
}
;
html623afa$EntrySyncWrappingImplementation$Dart.prototype.fullPath$named = function(){
  return this.fullPath$getter().apply(this, arguments);
}
;
html623afa$EntrySyncWrappingImplementation$Dart.prototype.fullPath$getter = function(){
  return this._ptr$html623afa$$getter_().fullPath$getter();
}
;
html623afa$EntrySyncWrappingImplementation$Dart.prototype.isDirectory$named = function(){
  return this.isDirectory$getter().apply(this, arguments);
}
;
html623afa$EntrySyncWrappingImplementation$Dart.prototype.isDirectory$getter = function(){
  return this._ptr$html623afa$$getter_().isDirectory$getter();
}
;
html623afa$EntrySyncWrappingImplementation$Dart.prototype.isFile$named = function(){
  return this.isFile$getter().apply(this, arguments);
}
;
html623afa$EntrySyncWrappingImplementation$Dart.prototype.isFile$getter = function(){
  return this._ptr$html623afa$$getter_().isFile$getter();
}
;
html623afa$EntrySyncWrappingImplementation$Dart.prototype.name$named = function(){
  return this.name$getter().apply(this, arguments);
}
;
html623afa$EntrySyncWrappingImplementation$Dart.prototype.name$getter = function(){
  return this._ptr$html623afa$$getter_().name$getter();
}
;
html623afa$EntrySyncWrappingImplementation$Dart.prototype.copyTo$member = function(parent_0, name_0){
  return html623afa$LevelDom$Dart.wrapEntrySync$member(this._ptr$html623afa$$getter_().copyTo$named(2, $noargs, html623afa$LevelDom$Dart.unwrap$member(parent_0), name_0));
}
;
html623afa$EntrySyncWrappingImplementation$Dart.prototype.copyTo$named = function($n, $o, parent_0, name_0){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return html623afa$EntrySyncWrappingImplementation$Dart.prototype.copyTo$member.call(this, parent_0, name_0);
}
;
html623afa$EntrySyncWrappingImplementation$Dart.prototype.copyTo$getter = function copyTo$getter(){
  return $bind(html623afa$EntrySyncWrappingImplementation$Dart.prototype.copyTo$named, this);
}
;
html623afa$EntrySyncWrappingImplementation$Dart.prototype.getMetadata$member = function(){
  return html623afa$LevelDom$Dart.wrapMetadata$member(this._ptr$html623afa$$getter_().getMetadata$named(0, $noargs));
}
;
html623afa$EntrySyncWrappingImplementation$Dart.prototype.getMetadata$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return html623afa$EntrySyncWrappingImplementation$Dart.prototype.getMetadata$member.call(this);
}
;
html623afa$EntrySyncWrappingImplementation$Dart.prototype.getMetadata$getter = function getMetadata$getter(){
  return $bind(html623afa$EntrySyncWrappingImplementation$Dart.prototype.getMetadata$named, this);
}
;
html623afa$EntrySyncWrappingImplementation$Dart.prototype.getParent$member = function(){
  return html623afa$LevelDom$Dart.wrapDirectoryEntrySync$member(this._ptr$html623afa$$getter_().getParent$named(0, $noargs));
}
;
html623afa$EntrySyncWrappingImplementation$Dart.prototype.getParent$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return html623afa$EntrySyncWrappingImplementation$Dart.prototype.getParent$member.call(this);
}
;
html623afa$EntrySyncWrappingImplementation$Dart.prototype.getParent$getter = function getParent$getter(){
  return $bind(html623afa$EntrySyncWrappingImplementation$Dart.prototype.getParent$named, this);
}
;
html623afa$EntrySyncWrappingImplementation$Dart.prototype.moveTo$member = function(parent_0, name_0){
  return html623afa$LevelDom$Dart.wrapEntrySync$member(this._ptr$html623afa$$getter_().moveTo$named(2, $noargs, html623afa$LevelDom$Dart.unwrap$member(parent_0), name_0));
}
;
html623afa$EntrySyncWrappingImplementation$Dart.prototype.moveTo$named = function($n, $o, parent_0, name_0){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return html623afa$EntrySyncWrappingImplementation$Dart.prototype.moveTo$member.call(this, parent_0, name_0);
}
;
html623afa$EntrySyncWrappingImplementation$Dart.prototype.moveTo$getter = function moveTo$getter(){
  return $bind(html623afa$EntrySyncWrappingImplementation$Dart.prototype.moveTo$named, this);
}
;
html623afa$EntrySyncWrappingImplementation$Dart.prototype.remove$member = function(){
  this._ptr$html623afa$$getter_().remove$named(0, $noargs);
  return;
}
;
html623afa$EntrySyncWrappingImplementation$Dart.prototype.remove$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return html623afa$EntrySyncWrappingImplementation$Dart.prototype.remove$member.call(this);
}
;
html623afa$EntrySyncWrappingImplementation$Dart.prototype.remove$getter = function remove$getter(){
  return $bind(html623afa$EntrySyncWrappingImplementation$Dart.prototype.remove$named, this);
}
;
html623afa$EntrySyncWrappingImplementation$Dart.prototype.toURL$member = function(){
  return this._ptr$html623afa$$getter_().toURL$named(0, $noargs);
}
;
html623afa$EntrySyncWrappingImplementation$Dart.prototype.toURL$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return html623afa$EntrySyncWrappingImplementation$Dart.prototype.toURL$member.call(this);
}
;
html623afa$EntrySyncWrappingImplementation$Dart.prototype.toURL$getter = function toURL$getter(){
  return $bind(html623afa$EntrySyncWrappingImplementation$Dart.prototype.toURL$named, this);
}
;
