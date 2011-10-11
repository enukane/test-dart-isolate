function html623afa$AnimationListWrappingImplementation$Dart(){
}

html623afa$AnimationListWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('html623afa$AnimationListWrappingImplementation$Dart'), html623afa$AnimationListWrappingImplementation$Dart.$RTTimplements);
}
;
html623afa$AnimationListWrappingImplementation$Dart.$RTTimplements = function(rtt){
  html623afa$AnimationListWrappingImplementation$Dart.$addTo(rtt);
}
;
html623afa$AnimationListWrappingImplementation$Dart.$addTo = function(target){
  var rtt = html623afa$AnimationListWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  html623afa$DOMWrapperBase$Dart.$addTo(target);
  html623afa$AnimationList$Dart.$addTo(target);
}
;
html623afa$AnimationListWrappingImplementation$Dart.prototype.$implements$html623afa$AnimationListWrappingImplementation$Dart = 1;
html623afa$AnimationListWrappingImplementation$Dart.prototype.$implements$html623afa$AnimationList$Dart = 1;
html623afa$AnimationListWrappingImplementation$Dart.prototype.$implements$html623afa$DOMWrapperBase$Dart = 1;
html623afa$AnimationListWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(html623afa$AnimationListWrappingImplementation$Dart, html623afa$DOMWrapperBase$Dart);
html623afa$AnimationListWrappingImplementation$Dart._wrap$html623afa$$Constructor_ = function(ptr){
  html623afa$DOMWrapperBase$Dart._wrap$html623afa$$Constructor_.call(this, ptr);
}
;
html623afa$AnimationListWrappingImplementation$Dart._wrap$html623afa$$Initializer_ = function(ptr){
  html623afa$DOMWrapperBase$Dart._wrap$html623afa$$Initializer_.call(this, ptr);
}
;
html623afa$AnimationListWrappingImplementation$Dart.AnimationListWrappingImplementation$_wrap$35$html623afa$$Factory_ = function(ptr){
  var tmp$0 = new html623afa$AnimationListWrappingImplementation$Dart;
  tmp$0.$typeInfo = html623afa$AnimationListWrappingImplementation$Dart.$lookupRTT();
  html623afa$AnimationListWrappingImplementation$Dart._wrap$html623afa$$Initializer_.call(tmp$0, ptr);
  html623afa$AnimationListWrappingImplementation$Dart._wrap$html623afa$$Constructor_.call(tmp$0, ptr);
  return tmp$0;
}
;
html623afa$AnimationListWrappingImplementation$Dart.prototype.length$named = function(){
  return this.length$getter().apply(this, arguments);
}
;
html623afa$AnimationListWrappingImplementation$Dart.prototype.length$getter = function(){
  return this._ptr$html623afa$$getter_().length$getter();
}
;
html623afa$AnimationListWrappingImplementation$Dart.prototype.item$member = function(index){
  return html623afa$LevelDom$Dart.wrapAnimation$member(this._ptr$html623afa$$getter_().item$named(1, $noargs, index));
}
;
html623afa$AnimationListWrappingImplementation$Dart.prototype.item$named = function($n, $o, index){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$AnimationListWrappingImplementation$Dart.prototype.item$member.call(this, index);
}
;
html623afa$AnimationListWrappingImplementation$Dart.prototype.item$getter = function item$getter(){
  return $bind(html623afa$AnimationListWrappingImplementation$Dart.prototype.item$named, this);
}
;
