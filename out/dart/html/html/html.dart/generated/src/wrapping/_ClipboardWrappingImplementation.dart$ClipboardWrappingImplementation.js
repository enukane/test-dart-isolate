function html623afa$ClipboardWrappingImplementation$Dart(){
}

html623afa$ClipboardWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('html623afa$ClipboardWrappingImplementation$Dart'), html623afa$ClipboardWrappingImplementation$Dart.$RTTimplements);
}
;
html623afa$ClipboardWrappingImplementation$Dart.$RTTimplements = function(rtt){
  html623afa$ClipboardWrappingImplementation$Dart.$addTo(rtt);
}
;
html623afa$ClipboardWrappingImplementation$Dart.$addTo = function(target){
  var rtt = html623afa$ClipboardWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  html623afa$DOMWrapperBase$Dart.$addTo(target);
  html623afa$Clipboard$Dart.$addTo(target);
}
;
html623afa$ClipboardWrappingImplementation$Dart.prototype.$implements$html623afa$ClipboardWrappingImplementation$Dart = 1;
html623afa$ClipboardWrappingImplementation$Dart.prototype.$implements$html623afa$Clipboard$Dart = 1;
html623afa$ClipboardWrappingImplementation$Dart.prototype.$implements$html623afa$DOMWrapperBase$Dart = 1;
html623afa$ClipboardWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(html623afa$ClipboardWrappingImplementation$Dart, html623afa$DOMWrapperBase$Dart);
html623afa$ClipboardWrappingImplementation$Dart._wrap$html623afa$$Constructor_ = function(ptr){
  html623afa$DOMWrapperBase$Dart._wrap$html623afa$$Constructor_.call(this, ptr);
}
;
html623afa$ClipboardWrappingImplementation$Dart._wrap$html623afa$$Initializer_ = function(ptr){
  html623afa$DOMWrapperBase$Dart._wrap$html623afa$$Initializer_.call(this, ptr);
}
;
html623afa$ClipboardWrappingImplementation$Dart.ClipboardWrappingImplementation$_wrap$31$html623afa$$Factory_ = function(ptr){
  var tmp$0 = new html623afa$ClipboardWrappingImplementation$Dart;
  tmp$0.$typeInfo = html623afa$ClipboardWrappingImplementation$Dart.$lookupRTT();
  html623afa$ClipboardWrappingImplementation$Dart._wrap$html623afa$$Initializer_.call(tmp$0, ptr);
  html623afa$ClipboardWrappingImplementation$Dart._wrap$html623afa$$Constructor_.call(tmp$0, ptr);
  return tmp$0;
}
;
html623afa$ClipboardWrappingImplementation$Dart.prototype.dropEffect$named = function(){
  return this.dropEffect$getter().apply(this, arguments);
}
;
html623afa$ClipboardWrappingImplementation$Dart.prototype.dropEffect$getter = function(){
  return this._ptr$html623afa$$getter_().dropEffect$getter();
}
;
html623afa$ClipboardWrappingImplementation$Dart.prototype.dropEffect$setter = function(value){
  var tmp$0;
  this._ptr$html623afa$$getter_().dropEffect$setter(tmp$0 = value) , tmp$0;
}
;
html623afa$ClipboardWrappingImplementation$Dart.prototype.effectAllowed$named = function(){
  return this.effectAllowed$getter().apply(this, arguments);
}
;
html623afa$ClipboardWrappingImplementation$Dart.prototype.effectAllowed$getter = function(){
  return this._ptr$html623afa$$getter_().effectAllowed$getter();
}
;
html623afa$ClipboardWrappingImplementation$Dart.prototype.effectAllowed$setter = function(value){
  var tmp$0;
  this._ptr$html623afa$$getter_().effectAllowed$setter(tmp$0 = value) , tmp$0;
}
;
html623afa$ClipboardWrappingImplementation$Dart.prototype.files$named = function(){
  return this.files$getter().apply(this, arguments);
}
;
html623afa$ClipboardWrappingImplementation$Dart.prototype.files$getter = function(){
  return html623afa$LevelDom$Dart.wrapFileList$member(this._ptr$html623afa$$getter_().files$getter());
}
;
html623afa$ClipboardWrappingImplementation$Dart.prototype.items$named = function(){
  return this.items$getter().apply(this, arguments);
}
;
html623afa$ClipboardWrappingImplementation$Dart.prototype.items$getter = function(){
  return html623afa$LevelDom$Dart.wrapDataTransferItems$member(this._ptr$html623afa$$getter_().items$getter());
}
;
html623afa$ClipboardWrappingImplementation$Dart.prototype.clearData$member = function(type){
  if (type == null) {
    this._ptr$html623afa$$getter_().clearData$named(0, $noargs);
    return;
  }
   else {
    this._ptr$html623afa$$getter_().clearData$named(1, $noargs, type);
    return;
  }
}
;
html623afa$ClipboardWrappingImplementation$Dart.prototype.clearData$named = function($n, $o, type){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 0:
      type = $o.type?(++seen , $o.type):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$ClipboardWrappingImplementation$Dart.prototype.clearData$member.call(this, type);
}
;
html623afa$ClipboardWrappingImplementation$Dart.prototype.clearData$getter = function clearData$getter(){
  return $bind(html623afa$ClipboardWrappingImplementation$Dart.prototype.clearData$named, this);
}
;
html623afa$ClipboardWrappingImplementation$Dart.prototype.getData$member = function(type){
  this._ptr$html623afa$$getter_().getData$named(1, $noargs, type);
  return;
}
;
html623afa$ClipboardWrappingImplementation$Dart.prototype.getData$named = function($n, $o, type){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$ClipboardWrappingImplementation$Dart.prototype.getData$member.call(this, type);
}
;
html623afa$ClipboardWrappingImplementation$Dart.prototype.getData$getter = function getData$getter(){
  return $bind(html623afa$ClipboardWrappingImplementation$Dart.prototype.getData$named, this);
}
;
html623afa$ClipboardWrappingImplementation$Dart.prototype.setData$member = function(type, data){
  return this._ptr$html623afa$$getter_().setData$named(2, $noargs, type, data);
}
;
html623afa$ClipboardWrappingImplementation$Dart.prototype.setData$named = function($n, $o, type, data){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return html623afa$ClipboardWrappingImplementation$Dart.prototype.setData$member.call(this, type, data);
}
;
html623afa$ClipboardWrappingImplementation$Dart.prototype.setData$getter = function setData$getter(){
  return $bind(html623afa$ClipboardWrappingImplementation$Dart.prototype.setData$named, this);
}
;
html623afa$ClipboardWrappingImplementation$Dart.prototype.setDragImage$member = function(image, x, y){
  this._ptr$html623afa$$getter_().setDragImage$named(3, $noargs, html623afa$LevelDom$Dart.unwrap$member(image), x, y);
  return;
}
;
html623afa$ClipboardWrappingImplementation$Dart.prototype.setDragImage$named = function($n, $o, image, x, y){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return html623afa$ClipboardWrappingImplementation$Dart.prototype.setDragImage$member.call(this, image, x, y);
}
;
html623afa$ClipboardWrappingImplementation$Dart.prototype.setDragImage$getter = function setDragImage$getter(){
  return $bind(html623afa$ClipboardWrappingImplementation$Dart.prototype.setDragImage$named, this);
}
;
