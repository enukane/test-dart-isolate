function html623afa$CSSImportRuleWrappingImplementation$Dart(){
}

html623afa$CSSImportRuleWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('html623afa$CSSImportRuleWrappingImplementation$Dart'), html623afa$CSSImportRuleWrappingImplementation$Dart.$RTTimplements);
}
;
html623afa$CSSImportRuleWrappingImplementation$Dart.$RTTimplements = function(rtt){
  html623afa$CSSImportRuleWrappingImplementation$Dart.$addTo(rtt);
}
;
html623afa$CSSImportRuleWrappingImplementation$Dart.$addTo = function(target){
  var rtt = html623afa$CSSImportRuleWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  html623afa$CSSRuleWrappingImplementation$Dart.$addTo(target);
  html623afa$CSSImportRule$Dart.$addTo(target);
}
;
html623afa$CSSImportRuleWrappingImplementation$Dart.prototype.$implements$html623afa$CSSImportRuleWrappingImplementation$Dart = 1;
html623afa$CSSImportRuleWrappingImplementation$Dart.prototype.$implements$html623afa$CSSImportRule$Dart = 1;
html623afa$CSSImportRuleWrappingImplementation$Dart.prototype.$implements$html623afa$CSSRule$Dart = 1;
html623afa$CSSImportRuleWrappingImplementation$Dart.prototype.$implements$html623afa$CSSRuleWrappingImplementation$Dart = 1;
html623afa$CSSImportRuleWrappingImplementation$Dart.prototype.$implements$html623afa$DOMWrapperBase$Dart = 1;
html623afa$CSSImportRuleWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(html623afa$CSSImportRuleWrappingImplementation$Dart, html623afa$CSSRuleWrappingImplementation$Dart);
html623afa$CSSImportRuleWrappingImplementation$Dart._wrap$html623afa$$Constructor_ = function(ptr){
  html623afa$CSSRuleWrappingImplementation$Dart._wrap$html623afa$$Constructor_.call(this, ptr);
}
;
html623afa$CSSImportRuleWrappingImplementation$Dart._wrap$html623afa$$Initializer_ = function(ptr){
  html623afa$CSSRuleWrappingImplementation$Dart._wrap$html623afa$$Initializer_.call(this, ptr);
}
;
html623afa$CSSImportRuleWrappingImplementation$Dart.CSSImportRuleWrappingImplementation$_wrap$35$html623afa$$Factory_ = function(ptr){
  var tmp$0 = new html623afa$CSSImportRuleWrappingImplementation$Dart;
  tmp$0.$typeInfo = html623afa$CSSImportRuleWrappingImplementation$Dart.$lookupRTT();
  html623afa$CSSImportRuleWrappingImplementation$Dart._wrap$html623afa$$Initializer_.call(tmp$0, ptr);
  html623afa$CSSImportRuleWrappingImplementation$Dart._wrap$html623afa$$Constructor_.call(tmp$0, ptr);
  return tmp$0;
}
;
html623afa$CSSImportRuleWrappingImplementation$Dart.prototype.href$named = function(){
  return this.href$getter().apply(this, arguments);
}
;
html623afa$CSSImportRuleWrappingImplementation$Dart.prototype.href$getter = function(){
  return this._ptr$html623afa$$getter_().href$getter();
}
;
html623afa$CSSImportRuleWrappingImplementation$Dart.prototype.media$named = function(){
  return this.media$getter().apply(this, arguments);
}
;
html623afa$CSSImportRuleWrappingImplementation$Dart.prototype.media$getter = function(){
  return html623afa$LevelDom$Dart.wrapMediaList$member(this._ptr$html623afa$$getter_().media$getter());
}
;
html623afa$CSSImportRuleWrappingImplementation$Dart.prototype.styleSheet$named = function(){
  return this.styleSheet$getter().apply(this, arguments);
}
;
html623afa$CSSImportRuleWrappingImplementation$Dart.prototype.styleSheet$getter = function(){
  return html623afa$LevelDom$Dart.wrapCSSStyleSheet$member(this._ptr$html623afa$$getter_().styleSheet$getter());
}
;
