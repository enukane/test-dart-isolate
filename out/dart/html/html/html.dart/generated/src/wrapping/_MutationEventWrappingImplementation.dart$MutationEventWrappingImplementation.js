function html623afa$MutationEventWrappingImplementation$Dart(){
}

html623afa$MutationEventWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('html623afa$MutationEventWrappingImplementation$Dart'), html623afa$MutationEventWrappingImplementation$Dart.$RTTimplements);
}
;
html623afa$MutationEventWrappingImplementation$Dart.$RTTimplements = function(rtt){
  html623afa$MutationEventWrappingImplementation$Dart.$addTo(rtt);
}
;
html623afa$MutationEventWrappingImplementation$Dart.$addTo = function(target){
  var rtt = html623afa$MutationEventWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  html623afa$EventWrappingImplementation$Dart.$addTo(target);
  html623afa$MutationEvent$Dart.$addTo(target);
}
;
html623afa$MutationEventWrappingImplementation$Dart.prototype.$implements$html623afa$MutationEventWrappingImplementation$Dart = 1;
html623afa$MutationEventWrappingImplementation$Dart.prototype.$implements$html623afa$MutationEvent$Dart = 1;
html623afa$MutationEventWrappingImplementation$Dart.prototype.$implements$html623afa$Event$Dart = 1;
html623afa$MutationEventWrappingImplementation$Dart.prototype.$implements$html623afa$EventWrappingImplementation$Dart = 1;
html623afa$MutationEventWrappingImplementation$Dart.prototype.$implements$html623afa$DOMWrapperBase$Dart = 1;
html623afa$MutationEventWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(html623afa$MutationEventWrappingImplementation$Dart, html623afa$EventWrappingImplementation$Dart);
html623afa$MutationEventWrappingImplementation$Dart._wrap$html623afa$$Constructor_ = function(ptr){
  html623afa$EventWrappingImplementation$Dart._wrap$html623afa$$Constructor_.call(this, ptr);
}
;
html623afa$MutationEventWrappingImplementation$Dart._wrap$html623afa$$Initializer_ = function(ptr){
  html623afa$EventWrappingImplementation$Dart._wrap$html623afa$$Initializer_.call(this, ptr);
}
;
html623afa$MutationEventWrappingImplementation$Dart.MutationEventWrappingImplementation$_wrap$35$html623afa$$Factory_ = function(ptr){
  var tmp$0 = new html623afa$MutationEventWrappingImplementation$Dart;
  tmp$0.$typeInfo = html623afa$MutationEventWrappingImplementation$Dart.$lookupRTT();
  html623afa$MutationEventWrappingImplementation$Dart._wrap$html623afa$$Initializer_.call(tmp$0, ptr);
  html623afa$MutationEventWrappingImplementation$Dart._wrap$html623afa$$Constructor_.call(tmp$0, ptr);
  return tmp$0;
}
;
html623afa$MutationEventWrappingImplementation$Dart.prototype.attrChange$named = function(){
  return this.attrChange$getter().apply(this, arguments);
}
;
html623afa$MutationEventWrappingImplementation$Dart.prototype.attrChange$getter = function(){
  return this._ptr$html623afa$$getter_().attrChange$getter();
}
;
html623afa$MutationEventWrappingImplementation$Dart.prototype.attrName$named = function(){
  return this.attrName$getter().apply(this, arguments);
}
;
html623afa$MutationEventWrappingImplementation$Dart.prototype.attrName$getter = function(){
  return this._ptr$html623afa$$getter_().attrName$getter();
}
;
html623afa$MutationEventWrappingImplementation$Dart.prototype.newValue$named = function(){
  return this.newValue$getter().apply(this, arguments);
}
;
html623afa$MutationEventWrappingImplementation$Dart.prototype.newValue$getter = function(){
  return this._ptr$html623afa$$getter_().newValue$getter();
}
;
html623afa$MutationEventWrappingImplementation$Dart.prototype.prevValue$named = function(){
  return this.prevValue$getter().apply(this, arguments);
}
;
html623afa$MutationEventWrappingImplementation$Dart.prototype.prevValue$getter = function(){
  return this._ptr$html623afa$$getter_().prevValue$getter();
}
;
html623afa$MutationEventWrappingImplementation$Dart.prototype.relatedNode$named = function(){
  return this.relatedNode$getter().apply(this, arguments);
}
;
html623afa$MutationEventWrappingImplementation$Dart.prototype.relatedNode$getter = function(){
  return html623afa$LevelDom$Dart.wrapNode$member(this._ptr$html623afa$$getter_().relatedNode$getter());
}
;
html623afa$MutationEventWrappingImplementation$Dart.prototype.initMutationEvent$member = function(type, canBubble, cancelable, relatedNode, prevValue, newValue, attrName, attrChange){
  this._ptr$html623afa$$getter_().initMutationEvent$named(8, $noargs, type, canBubble, cancelable, html623afa$LevelDom$Dart.unwrap$member(relatedNode), prevValue, newValue, attrName, attrChange);
  return;
}
;
html623afa$MutationEventWrappingImplementation$Dart.prototype.initMutationEvent$named = function($n, $o, type, canBubble, cancelable, relatedNode, prevValue, newValue, attrName, attrChange){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 8)
    $nsme();
  return html623afa$MutationEventWrappingImplementation$Dart.prototype.initMutationEvent$member.call(this, type, canBubble, cancelable, relatedNode, prevValue, newValue, attrName, attrChange);
}
;
html623afa$MutationEventWrappingImplementation$Dart.prototype.initMutationEvent$getter = function initMutationEvent$getter(){
  return $bind(html623afa$MutationEventWrappingImplementation$Dart.prototype.initMutationEvent$named, this);
}
;
