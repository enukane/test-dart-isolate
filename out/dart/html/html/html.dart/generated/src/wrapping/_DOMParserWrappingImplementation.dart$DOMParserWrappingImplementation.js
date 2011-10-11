function html623afa$DOMParserWrappingImplementation$Dart(){
}

html623afa$DOMParserWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('html623afa$DOMParserWrappingImplementation$Dart'), html623afa$DOMParserWrappingImplementation$Dart.$RTTimplements);
}
;
html623afa$DOMParserWrappingImplementation$Dart.$RTTimplements = function(rtt){
  html623afa$DOMParserWrappingImplementation$Dart.$addTo(rtt);
}
;
html623afa$DOMParserWrappingImplementation$Dart.$addTo = function(target){
  var rtt = html623afa$DOMParserWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  html623afa$DOMWrapperBase$Dart.$addTo(target);
  html623afa$DOMParser$Dart.$addTo(target);
}
;
html623afa$DOMParserWrappingImplementation$Dart.prototype.$implements$html623afa$DOMParserWrappingImplementation$Dart = 1;
html623afa$DOMParserWrappingImplementation$Dart.prototype.$implements$html623afa$DOMParser$Dart = 1;
html623afa$DOMParserWrappingImplementation$Dart.prototype.$implements$html623afa$DOMWrapperBase$Dart = 1;
html623afa$DOMParserWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(html623afa$DOMParserWrappingImplementation$Dart, html623afa$DOMWrapperBase$Dart);
html623afa$DOMParserWrappingImplementation$Dart._wrap$html623afa$$Constructor_ = function(ptr){
  html623afa$DOMWrapperBase$Dart._wrap$html623afa$$Constructor_.call(this, ptr);
}
;
html623afa$DOMParserWrappingImplementation$Dart._wrap$html623afa$$Initializer_ = function(ptr){
  html623afa$DOMWrapperBase$Dart._wrap$html623afa$$Initializer_.call(this, ptr);
}
;
html623afa$DOMParserWrappingImplementation$Dart.DOMParserWrappingImplementation$_wrap$31$html623afa$$Factory_ = function(ptr){
  var tmp$0 = new html623afa$DOMParserWrappingImplementation$Dart;
  tmp$0.$typeInfo = html623afa$DOMParserWrappingImplementation$Dart.$lookupRTT();
  html623afa$DOMParserWrappingImplementation$Dart._wrap$html623afa$$Initializer_.call(tmp$0, ptr);
  html623afa$DOMParserWrappingImplementation$Dart._wrap$html623afa$$Constructor_.call(tmp$0, ptr);
  return tmp$0;
}
;
html623afa$DOMParserWrappingImplementation$Dart.prototype.parseFromString$member = function(str, contentType){
  return html623afa$LevelDom$Dart.wrapDocument$member(this._ptr$html623afa$$getter_().parseFromString$named(2, $noargs, str, contentType));
}
;
html623afa$DOMParserWrappingImplementation$Dart.prototype.parseFromString$named = function($n, $o, str, contentType){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return html623afa$DOMParserWrappingImplementation$Dart.prototype.parseFromString$member.call(this, str, contentType);
}
;
html623afa$DOMParserWrappingImplementation$Dart.prototype.parseFromString$getter = function parseFromString$getter(){
  return $bind(html623afa$DOMParserWrappingImplementation$Dart.prototype.parseFromString$named, this);
}
;
