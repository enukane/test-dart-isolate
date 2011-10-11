function DOMWrapperBase$Dart(){
}

DOMWrapperBase$Dart.$lookupRTT = function(){
  return RTT.create($cls('DOMWrapperBase$Dart'), DOMWrapperBase$Dart.$RTTimplements);
}
;
DOMWrapperBase$Dart.$RTTimplements = function(rtt){
  DOMWrapperBase$Dart.$addTo(rtt);
}
;
DOMWrapperBase$Dart.$addTo = function(target){
  var rtt = DOMWrapperBase$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  DOMType$Dart.$addTo(target);
}
;
DOMWrapperBase$Dart.prototype.$implements$DOMWrapperBase$Dart = 1;
DOMWrapperBase$Dart.prototype.$implements$DOMType$Dart = 1;
DOMWrapperBase$Dart.prototype.$implements$Object$Dart = 1;
DOMWrapperBase$Dart.$Constructor = function(){
  Object.$Constructor.call(this);
}
;
DOMWrapperBase$Dart.$Initializer = function(){
  Object.$Initializer.call(this);
}
;
DOMWrapperBase$Dart.DOMWrapperBase$$Factory = function(){
  var tmp$0 = new DOMWrapperBase$Dart;
  tmp$0.$typeInfo = DOMWrapperBase$Dart.$lookupRTT();
  DOMWrapperBase$Dart.$Initializer.call(tmp$0);
  DOMWrapperBase$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
DOMWrapperBase$Dart.prototype.dartObjectLocalStorage$named = function(){
  return this.dartObjectLocalStorage$getter().apply(this, arguments);
}
;
DOMWrapperBase$Dart.prototype.dartObjectLocalStorage$getter = function(){
  return this.dartObjectLocalStorage$field;
}
;
DOMWrapperBase$Dart.prototype.dartObjectLocalStorage$setter = function(tmp$0){
  this.dartObjectLocalStorage$field = tmp$0;
}
;
