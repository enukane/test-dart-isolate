function html623afa$CSSKeyframeRuleWrappingImplementation$Dart(){
}

html623afa$CSSKeyframeRuleWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('html623afa$CSSKeyframeRuleWrappingImplementation$Dart'), html623afa$CSSKeyframeRuleWrappingImplementation$Dart.$RTTimplements);
}
;
html623afa$CSSKeyframeRuleWrappingImplementation$Dart.$RTTimplements = function(rtt){
  html623afa$CSSKeyframeRuleWrappingImplementation$Dart.$addTo(rtt);
}
;
html623afa$CSSKeyframeRuleWrappingImplementation$Dart.$addTo = function(target){
  var rtt = html623afa$CSSKeyframeRuleWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  html623afa$CSSRuleWrappingImplementation$Dart.$addTo(target);
  html623afa$CSSKeyframeRule$Dart.$addTo(target);
}
;
html623afa$CSSKeyframeRuleWrappingImplementation$Dart.prototype.$implements$html623afa$CSSKeyframeRuleWrappingImplementation$Dart = 1;
html623afa$CSSKeyframeRuleWrappingImplementation$Dart.prototype.$implements$html623afa$CSSKeyframeRule$Dart = 1;
html623afa$CSSKeyframeRuleWrappingImplementation$Dart.prototype.$implements$html623afa$CSSRule$Dart = 1;
html623afa$CSSKeyframeRuleWrappingImplementation$Dart.prototype.$implements$html623afa$CSSRuleWrappingImplementation$Dart = 1;
html623afa$CSSKeyframeRuleWrappingImplementation$Dart.prototype.$implements$html623afa$DOMWrapperBase$Dart = 1;
html623afa$CSSKeyframeRuleWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(html623afa$CSSKeyframeRuleWrappingImplementation$Dart, html623afa$CSSRuleWrappingImplementation$Dart);
html623afa$CSSKeyframeRuleWrappingImplementation$Dart._wrap$html623afa$$Constructor_ = function(ptr){
  html623afa$CSSRuleWrappingImplementation$Dart._wrap$html623afa$$Constructor_.call(this, ptr);
}
;
html623afa$CSSKeyframeRuleWrappingImplementation$Dart._wrap$html623afa$$Initializer_ = function(ptr){
  html623afa$CSSRuleWrappingImplementation$Dart._wrap$html623afa$$Initializer_.call(this, ptr);
}
;
html623afa$CSSKeyframeRuleWrappingImplementation$Dart.CSSKeyframeRuleWrappingImplementation$_wrap$37$html623afa$$Factory_ = function(ptr){
  var tmp$0 = new html623afa$CSSKeyframeRuleWrappingImplementation$Dart;
  tmp$0.$typeInfo = html623afa$CSSKeyframeRuleWrappingImplementation$Dart.$lookupRTT();
  html623afa$CSSKeyframeRuleWrappingImplementation$Dart._wrap$html623afa$$Initializer_.call(tmp$0, ptr);
  html623afa$CSSKeyframeRuleWrappingImplementation$Dart._wrap$html623afa$$Constructor_.call(tmp$0, ptr);
  return tmp$0;
}
;
html623afa$CSSKeyframeRuleWrappingImplementation$Dart.prototype.keyText$named = function(){
  return this.keyText$getter().apply(this, arguments);
}
;
html623afa$CSSKeyframeRuleWrappingImplementation$Dart.prototype.keyText$getter = function(){
  return this._ptr$html623afa$$getter_().keyText$getter();
}
;
html623afa$CSSKeyframeRuleWrappingImplementation$Dart.prototype.keyText$setter = function(value){
  var tmp$0;
  this._ptr$html623afa$$getter_().keyText$setter(tmp$0 = value) , tmp$0;
}
;
html623afa$CSSKeyframeRuleWrappingImplementation$Dart.prototype.style$named = function(){
  return this.style$getter().apply(this, arguments);
}
;
html623afa$CSSKeyframeRuleWrappingImplementation$Dart.prototype.style$getter = function(){
  return html623afa$LevelDom$Dart.wrapCSSStyleDeclaration$member(this._ptr$html623afa$$getter_().style$getter());
}
;
