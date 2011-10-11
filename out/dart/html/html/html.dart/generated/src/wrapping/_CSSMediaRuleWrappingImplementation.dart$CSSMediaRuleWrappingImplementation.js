function html623afa$CSSMediaRuleWrappingImplementation$Dart(){
}

html623afa$CSSMediaRuleWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('html623afa$CSSMediaRuleWrappingImplementation$Dart'), html623afa$CSSMediaRuleWrappingImplementation$Dart.$RTTimplements);
}
;
html623afa$CSSMediaRuleWrappingImplementation$Dart.$RTTimplements = function(rtt){
  html623afa$CSSMediaRuleWrappingImplementation$Dart.$addTo(rtt);
}
;
html623afa$CSSMediaRuleWrappingImplementation$Dart.$addTo = function(target){
  var rtt = html623afa$CSSMediaRuleWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  html623afa$CSSRuleWrappingImplementation$Dart.$addTo(target);
  html623afa$CSSMediaRule$Dart.$addTo(target);
}
;
html623afa$CSSMediaRuleWrappingImplementation$Dart.prototype.$implements$html623afa$CSSMediaRuleWrappingImplementation$Dart = 1;
html623afa$CSSMediaRuleWrappingImplementation$Dart.prototype.$implements$html623afa$CSSMediaRule$Dart = 1;
html623afa$CSSMediaRuleWrappingImplementation$Dart.prototype.$implements$html623afa$CSSRule$Dart = 1;
html623afa$CSSMediaRuleWrappingImplementation$Dart.prototype.$implements$html623afa$CSSRuleWrappingImplementation$Dart = 1;
html623afa$CSSMediaRuleWrappingImplementation$Dart.prototype.$implements$html623afa$DOMWrapperBase$Dart = 1;
html623afa$CSSMediaRuleWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(html623afa$CSSMediaRuleWrappingImplementation$Dart, html623afa$CSSRuleWrappingImplementation$Dart);
html623afa$CSSMediaRuleWrappingImplementation$Dart._wrap$html623afa$$Constructor_ = function(ptr){
  html623afa$CSSRuleWrappingImplementation$Dart._wrap$html623afa$$Constructor_.call(this, ptr);
}
;
html623afa$CSSMediaRuleWrappingImplementation$Dart._wrap$html623afa$$Initializer_ = function(ptr){
  html623afa$CSSRuleWrappingImplementation$Dart._wrap$html623afa$$Initializer_.call(this, ptr);
}
;
html623afa$CSSMediaRuleWrappingImplementation$Dart.CSSMediaRuleWrappingImplementation$_wrap$34$html623afa$$Factory_ = function(ptr){
  var tmp$0 = new html623afa$CSSMediaRuleWrappingImplementation$Dart;
  tmp$0.$typeInfo = html623afa$CSSMediaRuleWrappingImplementation$Dart.$lookupRTT();
  html623afa$CSSMediaRuleWrappingImplementation$Dart._wrap$html623afa$$Initializer_.call(tmp$0, ptr);
  html623afa$CSSMediaRuleWrappingImplementation$Dart._wrap$html623afa$$Constructor_.call(tmp$0, ptr);
  return tmp$0;
}
;
html623afa$CSSMediaRuleWrappingImplementation$Dart.prototype.cssRules$named = function(){
  return this.cssRules$getter().apply(this, arguments);
}
;
html623afa$CSSMediaRuleWrappingImplementation$Dart.prototype.cssRules$getter = function(){
  return html623afa$LevelDom$Dart.wrapCSSRuleList$member(this._ptr$html623afa$$getter_().cssRules$getter());
}
;
html623afa$CSSMediaRuleWrappingImplementation$Dart.prototype.media$named = function(){
  return this.media$getter().apply(this, arguments);
}
;
html623afa$CSSMediaRuleWrappingImplementation$Dart.prototype.media$getter = function(){
  return html623afa$LevelDom$Dart.wrapMediaList$member(this._ptr$html623afa$$getter_().media$getter());
}
;
html623afa$CSSMediaRuleWrappingImplementation$Dart.prototype.deleteRule$member = function(index){
  this._ptr$html623afa$$getter_().deleteRule$named(1, $noargs, index);
  return;
}
;
html623afa$CSSMediaRuleWrappingImplementation$Dart.prototype.deleteRule$named = function($n, $o, index){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$CSSMediaRuleWrappingImplementation$Dart.prototype.deleteRule$member.call(this, index);
}
;
html623afa$CSSMediaRuleWrappingImplementation$Dart.prototype.deleteRule$getter = function deleteRule$getter(){
  return $bind(html623afa$CSSMediaRuleWrappingImplementation$Dart.prototype.deleteRule$named, this);
}
;
html623afa$CSSMediaRuleWrappingImplementation$Dart.prototype.insertRule$member = function(rule, index){
  return this._ptr$html623afa$$getter_().insertRule$named(2, $noargs, rule, index);
}
;
html623afa$CSSMediaRuleWrappingImplementation$Dart.prototype.insertRule$named = function($n, $o, rule, index){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return html623afa$CSSMediaRuleWrappingImplementation$Dart.prototype.insertRule$member.call(this, rule, index);
}
;
html623afa$CSSMediaRuleWrappingImplementation$Dart.prototype.insertRule$getter = function insertRule$getter(){
  return $bind(html623afa$CSSMediaRuleWrappingImplementation$Dart.prototype.insertRule$named, this);
}
;
