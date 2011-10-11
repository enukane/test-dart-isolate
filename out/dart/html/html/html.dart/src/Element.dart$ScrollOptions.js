function html623afa$ScrollOptions$Dart(){
}

html623afa$ScrollOptions$Dart.$lookupRTT = function(){
  return RTT.create($cls('html623afa$ScrollOptions$Dart'));
}
;
html623afa$ScrollOptions$Dart.$addTo = function(target){
  var rtt = html623afa$ScrollOptions$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
}
;
html623afa$ScrollOptions$Dart.prototype.$implements$html623afa$ScrollOptions$Dart = 1;
html623afa$ScrollOptions$Dart.prototype.$implements$Object$Dart = 1;
html623afa$ScrollOptions$Dart.$Constructor = function(lines, pages, center){
  Object.$Constructor.call(this);
}
;
html623afa$ScrollOptions$Dart.$Initializer = function(lines, pages, center){
  Object.$Initializer.call(this);
  this.lines$field = lines;
  this.pages$field = pages;
  this.center$field = center;
}
;
html623afa$ScrollOptions$Dart.ScrollOptions$$Factory = function(lines, pages, center){
  var tmp$0 = new html623afa$ScrollOptions$Dart;
  tmp$0.$typeInfo = html623afa$ScrollOptions$Dart.$lookupRTT();
  html623afa$ScrollOptions$Dart.$Initializer.call(tmp$0, lines, pages, center);
  html623afa$ScrollOptions$Dart.$Constructor.call(tmp$0, lines, pages, center);
  return tmp$0;
}
;
html623afa$ScrollOptions$Dart.prototype.lines$named = function(){
  return this.lines$getter().apply(this, arguments);
}
;
html623afa$ScrollOptions$Dart.prototype.lines$getter = function(){
  return this.lines$field;
}
;
html623afa$ScrollOptions$Dart.prototype.pages$named = function(){
  return this.pages$getter().apply(this, arguments);
}
;
html623afa$ScrollOptions$Dart.prototype.pages$getter = function(){
  return this.pages$field;
}
;
html623afa$ScrollOptions$Dart.prototype.center$named = function(){
  return this.center$getter().apply(this, arguments);
}
;
html623afa$ScrollOptions$Dart.prototype.center$getter = function(){
  return this.center$field;
}
;
