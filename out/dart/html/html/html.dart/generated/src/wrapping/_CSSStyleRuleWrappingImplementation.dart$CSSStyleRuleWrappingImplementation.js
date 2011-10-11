function html623afa$CSSStyleRuleWrappingImplementation$Dart(){
}

html623afa$CSSStyleRuleWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('html623afa$CSSStyleRuleWrappingImplementation$Dart'), html623afa$CSSStyleRuleWrappingImplementation$Dart.$RTTimplements);
}
;
html623afa$CSSStyleRuleWrappingImplementation$Dart.$RTTimplements = function(rtt){
  html623afa$CSSStyleRuleWrappingImplementation$Dart.$addTo(rtt);
}
;
html623afa$CSSStyleRuleWrappingImplementation$Dart.$addTo = function(target){
  var rtt = html623afa$CSSStyleRuleWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  html623afa$CSSRuleWrappingImplementation$Dart.$addTo(target);
  html623afa$CSSStyleRule$Dart.$addTo(target);
}
;
html623afa$CSSStyleRuleWrappingImplementation$Dart.prototype.$implements$html623afa$CSSStyleRuleWrappingImplementation$Dart = 1;
html623afa$CSSStyleRuleWrappingImplementation$Dart.prototype.$implements$html623afa$CSSStyleRule$Dart = 1;
html623afa$CSSStyleRuleWrappingImplementation$Dart.prototype.$implements$html623afa$CSSRule$Dart = 1;
html623afa$CSSStyleRuleWrappingImplementation$Dart.prototype.$implements$html623afa$CSSRuleWrappingImplementation$Dart = 1;
html623afa$CSSStyleRuleWrappingImplementation$Dart.prototype.$implements$html623afa$DOMWrapperBase$Dart = 1;
html623afa$CSSStyleRuleWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(html623afa$CSSStyleRuleWrappingImplementation$Dart, html623afa$CSSRuleWrappingImplementation$Dart);
html623afa$CSSStyleRuleWrappingImplementation$Dart._wrap$html623afa$$Constructor_ = function(ptr){
  html623afa$CSSRuleWrappingImplementation$Dart._wrap$html623afa$$Constructor_.call(this, ptr);
}
;
html623afa$CSSStyleRuleWrappingImplementation$Dart._wrap$html623afa$$Initializer_ = function(ptr){
  html623afa$CSSRuleWrappingImplementation$Dart._wrap$html623afa$$Initializer_.call(this, ptr);
}
;
html623afa$CSSStyleRuleWrappingImplementation$Dart.CSSStyleRuleWrappingImplementation$_wrap$34$html623afa$$Factory_ = function(ptr){
  var tmp$0 = new html623afa$CSSStyleRuleWrappingImplementation$Dart;
  tmp$0.$typeInfo = html623afa$CSSStyleRuleWrappingImplementation$Dart.$lookupRTT();
  html623afa$CSSStyleRuleWrappingImplementation$Dart._wrap$html623afa$$Initializer_.call(tmp$0, ptr);
  html623afa$CSSStyleRuleWrappingImplementation$Dart._wrap$html623afa$$Constructor_.call(tmp$0, ptr);
  return tmp$0;
}
;
html623afa$CSSStyleRuleWrappingImplementation$Dart.prototype.selectorText$named = function(){
  return this.selectorText$getter().apply(this, arguments);
}
;
html623afa$CSSStyleRuleWrappingImplementation$Dart.prototype.selectorText$getter = function(){
  return this._ptr$html623afa$$getter_().selectorText$getter();
}
;
html623afa$CSSStyleRuleWrappingImplementation$Dart.prototype.selectorText$setter = function(value){
  var tmp$0;
  this._ptr$html623afa$$getter_().selectorText$setter(tmp$0 = value) , tmp$0;
}
;
html623afa$CSSStyleRuleWrappingImplementation$Dart.prototype.style$named = function(){
  return this.style$getter().apply(this, arguments);
}
;
html623afa$CSSStyleRuleWrappingImplementation$Dart.prototype.style$getter = function(){
  return html623afa$LevelDom$Dart.wrapCSSStyleDeclaration$member(this._ptr$html623afa$$getter_().style$getter());
}
;
