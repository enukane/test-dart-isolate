function SplayTreeNode$Dart(){
}

SplayTreeNode$Dart.$lookupRTT = function(typeArgs){
  return RTT.create($cls('SplayTreeNode$Dart'), null, typeArgs);
}
;
SplayTreeNode$Dart.$addTo = function(target, typeArgs){
  var rtt = SplayTreeNode$Dart.$lookupRTT(typeArgs);
  target.implementedTypes[rtt.classKey] = rtt;
}
;
SplayTreeNode$Dart.prototype.$implements$SplayTreeNode$Dart = 1;
SplayTreeNode$Dart.prototype.$implements$Object$Dart = 1;
SplayTreeNode$Dart.$Constructor = function(k, v){
  Object.$Constructor.call(this);
  var tmp$1, tmp$0;
  this.key$setter(tmp$0 = k) , tmp$0;
  this.value$setter(tmp$1 = v) , tmp$1;
}
;
SplayTreeNode$Dart.$Initializer = function(k, v){
  Object.$Initializer.call(this);
}
;
SplayTreeNode$Dart.SplayTreeNode$$Factory = function($rtt, k, v){
  var tmp$0 = new SplayTreeNode$Dart;
  tmp$0.$typeInfo = $rtt;
  SplayTreeNode$Dart.$Initializer.call(tmp$0, k, v);
  SplayTreeNode$Dart.$Constructor.call(tmp$0, k, v);
  return tmp$0;
}
;
SplayTreeNode$Dart.prototype.key$named = function(){
  return this.key$getter().apply(this, arguments);
}
;
SplayTreeNode$Dart.prototype.key$getter = function(){
  return this.key$field;
}
;
SplayTreeNode$Dart.prototype.key$setter = function(tmp$0){
  this.key$field = tmp$0;
}
;
SplayTreeNode$Dart.prototype.value$named = function(){
  return this.value$getter().apply(this, arguments);
}
;
SplayTreeNode$Dart.prototype.value$getter = function(){
  return this.value$field;
}
;
SplayTreeNode$Dart.prototype.value$setter = function(tmp$0){
  this.value$field = tmp$0;
}
;
SplayTreeNode$Dart.prototype.left$named = function(){
  return this.left$getter().apply(this, arguments);
}
;
SplayTreeNode$Dart.prototype.left$getter = function(){
  return this.left$field;
}
;
SplayTreeNode$Dart.prototype.left$setter = function(tmp$0){
  this.left$field = tmp$0;
}
;
SplayTreeNode$Dart.prototype.right$named = function(){
  return this.right$getter().apply(this, arguments);
}
;
SplayTreeNode$Dart.prototype.right$getter = function(){
  return this.right$field;
}
;
SplayTreeNode$Dart.prototype.right$setter = function(tmp$0){
  this.right$field = tmp$0;
}
;
