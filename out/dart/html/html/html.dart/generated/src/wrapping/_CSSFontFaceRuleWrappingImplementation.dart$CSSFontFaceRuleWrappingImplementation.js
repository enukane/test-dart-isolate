function html623afa$CSSFontFaceRuleWrappingImplementation$Dart(){
}

html623afa$CSSFontFaceRuleWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('html623afa$CSSFontFaceRuleWrappingImplementation$Dart'), html623afa$CSSFontFaceRuleWrappingImplementation$Dart.$RTTimplements);
}
;
html623afa$CSSFontFaceRuleWrappingImplementation$Dart.$RTTimplements = function(rtt){
  html623afa$CSSFontFaceRuleWrappingImplementation$Dart.$addTo(rtt);
}
;
html623afa$CSSFontFaceRuleWrappingImplementation$Dart.$addTo = function(target){
  var rtt = html623afa$CSSFontFaceRuleWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  html623afa$CSSRuleWrappingImplementation$Dart.$addTo(target);
  html623afa$CSSFontFaceRule$Dart.$addTo(target);
}
;
html623afa$CSSFontFaceRuleWrappingImplementation$Dart.prototype.$implements$html623afa$CSSFontFaceRuleWrappingImplementation$Dart = 1;
html623afa$CSSFontFaceRuleWrappingImplementation$Dart.prototype.$implements$html623afa$CSSFontFaceRule$Dart = 1;
html623afa$CSSFontFaceRuleWrappingImplementation$Dart.prototype.$implements$html623afa$CSSRule$Dart = 1;
html623afa$CSSFontFaceRuleWrappingImplementation$Dart.prototype.$implements$html623afa$CSSRuleWrappingImplementation$Dart = 1;
html623afa$CSSFontFaceRuleWrappingImplementation$Dart.prototype.$implements$html623afa$DOMWrapperBase$Dart = 1;
html623afa$CSSFontFaceRuleWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(html623afa$CSSFontFaceRuleWrappingImplementation$Dart, html623afa$CSSRuleWrappingImplementation$Dart);
html623afa$CSSFontFaceRuleWrappingImplementation$Dart._wrap$html623afa$$Constructor_ = function(ptr){
  html623afa$CSSRuleWrappingImplementation$Dart._wrap$html623afa$$Constructor_.call(this, ptr);
}
;
html623afa$CSSFontFaceRuleWrappingImplementation$Dart._wrap$html623afa$$Initializer_ = function(ptr){
  html623afa$CSSRuleWrappingImplementation$Dart._wrap$html623afa$$Initializer_.call(this, ptr);
}
;
html623afa$CSSFontFaceRuleWrappingImplementation$Dart.CSSFontFaceRuleWrappingImplementation$_wrap$37$html623afa$$Factory_ = function(ptr){
  var tmp$0 = new html623afa$CSSFontFaceRuleWrappingImplementation$Dart;
  tmp$0.$typeInfo = html623afa$CSSFontFaceRuleWrappingImplementation$Dart.$lookupRTT();
  html623afa$CSSFontFaceRuleWrappingImplementation$Dart._wrap$html623afa$$Initializer_.call(tmp$0, ptr);
  html623afa$CSSFontFaceRuleWrappingImplementation$Dart._wrap$html623afa$$Constructor_.call(tmp$0, ptr);
  return tmp$0;
}
;
html623afa$CSSFontFaceRuleWrappingImplementation$Dart.prototype.style$named = function(){
  return this.style$getter().apply(this, arguments);
}
;
html623afa$CSSFontFaceRuleWrappingImplementation$Dart.prototype.style$getter = function(){
  return html623afa$LevelDom$Dart.wrapCSSStyleDeclaration$member(this._ptr$html623afa$$getter_().style$getter());
}
;
