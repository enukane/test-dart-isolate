function html623afa$CSSKeyframesRuleWrappingImplementation$Dart(){
}

html623afa$CSSKeyframesRuleWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('html623afa$CSSKeyframesRuleWrappingImplementation$Dart'), html623afa$CSSKeyframesRuleWrappingImplementation$Dart.$RTTimplements);
}
;
html623afa$CSSKeyframesRuleWrappingImplementation$Dart.$RTTimplements = function(rtt){
  html623afa$CSSKeyframesRuleWrappingImplementation$Dart.$addTo(rtt);
}
;
html623afa$CSSKeyframesRuleWrappingImplementation$Dart.$addTo = function(target){
  var rtt = html623afa$CSSKeyframesRuleWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  html623afa$CSSRuleWrappingImplementation$Dart.$addTo(target);
  html623afa$CSSKeyframesRule$Dart.$addTo(target);
}
;
html623afa$CSSKeyframesRuleWrappingImplementation$Dart.prototype.$implements$html623afa$CSSKeyframesRuleWrappingImplementation$Dart = 1;
html623afa$CSSKeyframesRuleWrappingImplementation$Dart.prototype.$implements$html623afa$CSSKeyframesRule$Dart = 1;
html623afa$CSSKeyframesRuleWrappingImplementation$Dart.prototype.$implements$html623afa$CSSRule$Dart = 1;
html623afa$CSSKeyframesRuleWrappingImplementation$Dart.prototype.$implements$html623afa$CSSRuleWrappingImplementation$Dart = 1;
html623afa$CSSKeyframesRuleWrappingImplementation$Dart.prototype.$implements$html623afa$DOMWrapperBase$Dart = 1;
html623afa$CSSKeyframesRuleWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(html623afa$CSSKeyframesRuleWrappingImplementation$Dart, html623afa$CSSRuleWrappingImplementation$Dart);
html623afa$CSSKeyframesRuleWrappingImplementation$Dart._wrap$html623afa$$Constructor_ = function(ptr){
  html623afa$CSSRuleWrappingImplementation$Dart._wrap$html623afa$$Constructor_.call(this, ptr);
}
;
html623afa$CSSKeyframesRuleWrappingImplementation$Dart._wrap$html623afa$$Initializer_ = function(ptr){
  html623afa$CSSRuleWrappingImplementation$Dart._wrap$html623afa$$Initializer_.call(this, ptr);
}
;
html623afa$CSSKeyframesRuleWrappingImplementation$Dart.CSSKeyframesRuleWrappingImplementation$_wrap$38$html623afa$$Factory_ = function(ptr){
  var tmp$0 = new html623afa$CSSKeyframesRuleWrappingImplementation$Dart;
  tmp$0.$typeInfo = html623afa$CSSKeyframesRuleWrappingImplementation$Dart.$lookupRTT();
  html623afa$CSSKeyframesRuleWrappingImplementation$Dart._wrap$html623afa$$Initializer_.call(tmp$0, ptr);
  html623afa$CSSKeyframesRuleWrappingImplementation$Dart._wrap$html623afa$$Constructor_.call(tmp$0, ptr);
  return tmp$0;
}
;
html623afa$CSSKeyframesRuleWrappingImplementation$Dart.prototype.cssRules$named = function(){
  return this.cssRules$getter().apply(this, arguments);
}
;
html623afa$CSSKeyframesRuleWrappingImplementation$Dart.prototype.cssRules$getter = function(){
  return html623afa$LevelDom$Dart.wrapCSSRuleList$member(this._ptr$html623afa$$getter_().cssRules$getter());
}
;
html623afa$CSSKeyframesRuleWrappingImplementation$Dart.prototype.name$named = function(){
  return this.name$getter().apply(this, arguments);
}
;
html623afa$CSSKeyframesRuleWrappingImplementation$Dart.prototype.name$getter = function(){
  return this._ptr$html623afa$$getter_().name$getter();
}
;
html623afa$CSSKeyframesRuleWrappingImplementation$Dart.prototype.name$setter = function(value){
  var tmp$0;
  this._ptr$html623afa$$getter_().name$setter(tmp$0 = value) , tmp$0;
}
;
html623afa$CSSKeyframesRuleWrappingImplementation$Dart.prototype.deleteRule$member = function(key){
  this._ptr$html623afa$$getter_().deleteRule$named(1, $noargs, key);
  return;
}
;
html623afa$CSSKeyframesRuleWrappingImplementation$Dart.prototype.deleteRule$named = function($n, $o, key){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$CSSKeyframesRuleWrappingImplementation$Dart.prototype.deleteRule$member.call(this, key);
}
;
html623afa$CSSKeyframesRuleWrappingImplementation$Dart.prototype.deleteRule$getter = function deleteRule$getter(){
  return $bind(html623afa$CSSKeyframesRuleWrappingImplementation$Dart.prototype.deleteRule$named, this);
}
;
html623afa$CSSKeyframesRuleWrappingImplementation$Dart.prototype.findRule$member = function(key){
  return html623afa$LevelDom$Dart.wrapCSSKeyframeRule$member(this._ptr$html623afa$$getter_().findRule$named(1, $noargs, key));
}
;
html623afa$CSSKeyframesRuleWrappingImplementation$Dart.prototype.findRule$named = function($n, $o, key){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$CSSKeyframesRuleWrappingImplementation$Dart.prototype.findRule$member.call(this, key);
}
;
html623afa$CSSKeyframesRuleWrappingImplementation$Dart.prototype.findRule$getter = function findRule$getter(){
  return $bind(html623afa$CSSKeyframesRuleWrappingImplementation$Dart.prototype.findRule$named, this);
}
;
html623afa$CSSKeyframesRuleWrappingImplementation$Dart.prototype.insertRule$member = function(rule){
  this._ptr$html623afa$$getter_().insertRule$named(1, $noargs, rule);
  return;
}
;
html623afa$CSSKeyframesRuleWrappingImplementation$Dart.prototype.insertRule$named = function($n, $o, rule){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$CSSKeyframesRuleWrappingImplementation$Dart.prototype.insertRule$member.call(this, rule);
}
;
html623afa$CSSKeyframesRuleWrappingImplementation$Dart.prototype.insertRule$getter = function insertRule$getter(){
  return $bind(html623afa$CSSKeyframesRuleWrappingImplementation$Dart.prototype.insertRule$named, this);
}
;
