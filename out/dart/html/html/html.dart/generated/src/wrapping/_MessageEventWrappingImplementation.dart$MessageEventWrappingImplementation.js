function html623afa$MessageEventWrappingImplementation$Dart(){
}

html623afa$MessageEventWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('html623afa$MessageEventWrappingImplementation$Dart'), html623afa$MessageEventWrappingImplementation$Dart.$RTTimplements);
}
;
html623afa$MessageEventWrappingImplementation$Dart.$RTTimplements = function(rtt){
  html623afa$MessageEventWrappingImplementation$Dart.$addTo(rtt);
}
;
html623afa$MessageEventWrappingImplementation$Dart.$addTo = function(target){
  var rtt = html623afa$MessageEventWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  html623afa$EventWrappingImplementation$Dart.$addTo(target);
  html623afa$MessageEvent$Dart.$addTo(target);
}
;
html623afa$MessageEventWrappingImplementation$Dart.prototype.$implements$html623afa$MessageEventWrappingImplementation$Dart = 1;
html623afa$MessageEventWrappingImplementation$Dart.prototype.$implements$html623afa$MessageEvent$Dart = 1;
html623afa$MessageEventWrappingImplementation$Dart.prototype.$implements$html623afa$Event$Dart = 1;
html623afa$MessageEventWrappingImplementation$Dart.prototype.$implements$html623afa$EventWrappingImplementation$Dart = 1;
html623afa$MessageEventWrappingImplementation$Dart.prototype.$implements$html623afa$DOMWrapperBase$Dart = 1;
html623afa$MessageEventWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(html623afa$MessageEventWrappingImplementation$Dart, html623afa$EventWrappingImplementation$Dart);
html623afa$MessageEventWrappingImplementation$Dart._wrap$html623afa$$Constructor_ = function(ptr){
  html623afa$EventWrappingImplementation$Dart._wrap$html623afa$$Constructor_.call(this, ptr);
}
;
html623afa$MessageEventWrappingImplementation$Dart._wrap$html623afa$$Initializer_ = function(ptr){
  html623afa$EventWrappingImplementation$Dart._wrap$html623afa$$Initializer_.call(this, ptr);
}
;
html623afa$MessageEventWrappingImplementation$Dart.MessageEventWrappingImplementation$_wrap$34$html623afa$$Factory_ = function(ptr){
  var tmp$0 = new html623afa$MessageEventWrappingImplementation$Dart;
  tmp$0.$typeInfo = html623afa$MessageEventWrappingImplementation$Dart.$lookupRTT();
  html623afa$MessageEventWrappingImplementation$Dart._wrap$html623afa$$Initializer_.call(tmp$0, ptr);
  html623afa$MessageEventWrappingImplementation$Dart._wrap$html623afa$$Constructor_.call(tmp$0, ptr);
  return tmp$0;
}
;
html623afa$MessageEventWrappingImplementation$Dart.prototype.data$named = function(){
  return this.data$getter().apply(this, arguments);
}
;
html623afa$MessageEventWrappingImplementation$Dart.prototype.data$getter = function(){
  return this._ptr$html623afa$$getter_().data$getter();
}
;
html623afa$MessageEventWrappingImplementation$Dart.prototype.lastEventId$named = function(){
  return this.lastEventId$getter().apply(this, arguments);
}
;
html623afa$MessageEventWrappingImplementation$Dart.prototype.lastEventId$getter = function(){
  return this._ptr$html623afa$$getter_().lastEventId$getter();
}
;
html623afa$MessageEventWrappingImplementation$Dart.prototype.messagePort$named = function(){
  return this.messagePort$getter().apply(this, arguments);
}
;
html623afa$MessageEventWrappingImplementation$Dart.prototype.messagePort$getter = function(){
  return html623afa$LevelDom$Dart.wrapMessagePort$member(this._ptr$html623afa$$getter_().messagePort$getter());
}
;
html623afa$MessageEventWrappingImplementation$Dart.prototype.origin$named = function(){
  return this.origin$getter().apply(this, arguments);
}
;
html623afa$MessageEventWrappingImplementation$Dart.prototype.origin$getter = function(){
  return this._ptr$html623afa$$getter_().origin$getter();
}
;
html623afa$MessageEventWrappingImplementation$Dart.prototype.source$named = function(){
  return this.source$getter().apply(this, arguments);
}
;
html623afa$MessageEventWrappingImplementation$Dart.prototype.source$getter = function(){
  return html623afa$LevelDom$Dart.wrapWindow$member(this._ptr$html623afa$$getter_().source$getter());
}
;
html623afa$MessageEventWrappingImplementation$Dart.prototype.initMessageEvent$member = function(typeArg, canBubbleArg, cancelableArg, dataArg, originArg, lastEventIdArg, sourceArg, messagePort){
  this._ptr$html623afa$$getter_().initMessageEvent$named(8, $noargs, typeArg, canBubbleArg, cancelableArg, dataArg, originArg, lastEventIdArg, html623afa$LevelDom$Dart.unwrap$member(sourceArg), html623afa$LevelDom$Dart.unwrap$member(messagePort));
  return;
}
;
html623afa$MessageEventWrappingImplementation$Dart.prototype.initMessageEvent$named = function($n, $o, typeArg, canBubbleArg, cancelableArg, dataArg, originArg, lastEventIdArg, sourceArg, messagePort){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 8)
    $nsme();
  return html623afa$MessageEventWrappingImplementation$Dart.prototype.initMessageEvent$member.call(this, typeArg, canBubbleArg, cancelableArg, dataArg, originArg, lastEventIdArg, sourceArg, messagePort);
}
;
html623afa$MessageEventWrappingImplementation$Dart.prototype.initMessageEvent$getter = function initMessageEvent$getter(){
  return $bind(html623afa$MessageEventWrappingImplementation$Dart.prototype.initMessageEvent$named, this);
}
;
