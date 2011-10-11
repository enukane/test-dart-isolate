function html623afa$CSSPageRuleWrappingImplementation$Dart(){
}

html623afa$CSSPageRuleWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('html623afa$CSSPageRuleWrappingImplementation$Dart'), html623afa$CSSPageRuleWrappingImplementation$Dart.$RTTimplements);
}
;
html623afa$CSSPageRuleWrappingImplementation$Dart.$RTTimplements = function(rtt){
  html623afa$CSSPageRuleWrappingImplementation$Dart.$addTo(rtt);
}
;
html623afa$CSSPageRuleWrappingImplementation$Dart.$addTo = function(target){
  var rtt = html623afa$CSSPageRuleWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  html623afa$CSSRuleWrappingImplementation$Dart.$addTo(target);
  html623afa$CSSPageRule$Dart.$addTo(target);
}
;
html623afa$CSSPageRuleWrappingImplementation$Dart.prototype.$implements$html623afa$CSSPageRuleWrappingImplementation$Dart = 1;
html623afa$CSSPageRuleWrappingImplementation$Dart.prototype.$implements$html623afa$CSSPageRule$Dart = 1;
html623afa$CSSPageRuleWrappingImplementation$Dart.prototype.$implements$html623afa$CSSRule$Dart = 1;
html623afa$CSSPageRuleWrappingImplementation$Dart.prototype.$implements$html623afa$CSSRuleWrappingImplementation$Dart = 1;
html623afa$CSSPageRuleWrappingImplementation$Dart.prototype.$implements$html623afa$DOMWrapperBase$Dart = 1;
html623afa$CSSPageRuleWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(html623afa$CSSPageRuleWrappingImplementation$Dart, html623afa$CSSRuleWrappingImplementation$Dart);
html623afa$CSSPageRuleWrappingImplementation$Dart._wrap$html623afa$$Constructor_ = function(ptr){
  html623afa$CSSRuleWrappingImplementation$Dart._wrap$html623afa$$Constructor_.call(this, ptr);
}
;
html623afa$CSSPageRuleWrappingImplementation$Dart._wrap$html623afa$$Initializer_ = function(ptr){
  html623afa$CSSRuleWrappingImplementation$Dart._wrap$html623afa$$Initializer_.call(this, ptr);
}
;
html623afa$CSSPageRuleWrappingImplementation$Dart.CSSPageRuleWrappingImplementation$_wrap$33$html623afa$$Factory_ = function(ptr){
  var tmp$0 = new html623afa$CSSPageRuleWrappingImplementation$Dart;
  tmp$0.$typeInfo = html623afa$CSSPageRuleWrappingImplementation$Dart.$lookupRTT();
  html623afa$CSSPageRuleWrappingImplementation$Dart._wrap$html623afa$$Initializer_.call(tmp$0, ptr);
  html623afa$CSSPageRuleWrappingImplementation$Dart._wrap$html623afa$$Constructor_.call(tmp$0, ptr);
  return tmp$0;
}
;
html623afa$CSSPageRuleWrappingImplementation$Dart.prototype.selectorText$named = function(){
  return this.selectorText$getter().apply(this, arguments);
}
;
html623afa$CSSPageRuleWrappingImplementation$Dart.prototype.selectorText$getter = function(){
  return this._ptr$html623afa$$getter_().selectorText$getter();
}
;
html623afa$CSSPageRuleWrappingImplementation$Dart.prototype.selectorText$setter = function(value){
  var tmp$0;
  this._ptr$html623afa$$getter_().selectorText$setter(tmp$0 = value) , tmp$0;
}
;
html623afa$CSSPageRuleWrappingImplementation$Dart.prototype.style$named = function(){
  return this.style$getter().apply(this, arguments);
}
;
html623afa$CSSPageRuleWrappingImplementation$Dart.prototype.style$getter = function(){
  return html623afa$LevelDom$Dart.wrapCSSStyleDeclaration$member(this._ptr$html623afa$$getter_().style$getter());
}
;
