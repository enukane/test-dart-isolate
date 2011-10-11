function KeyValuePair$Dart(){
}

KeyValuePair$Dart.$lookupRTT = function(typeArgs){
  return RTT.create($cls('KeyValuePair$Dart'), null, typeArgs);
}
;
KeyValuePair$Dart.$addTo = function(target, typeArgs){
  var rtt = KeyValuePair$Dart.$lookupRTT(typeArgs);
  target.implementedTypes[rtt.classKey] = rtt;
}
;
KeyValuePair$Dart.prototype.$implements$KeyValuePair$Dart = 1;
KeyValuePair$Dart.prototype.$implements$Object$Dart = 1;
KeyValuePair$Dart.$Constructor = function(key, value){
  Object.$Constructor.call(this);
}
;
KeyValuePair$Dart.$Initializer = function(key, value){
  Object.$Initializer.call(this);
  this.key$field = key;
  this.value$field = value;
}
;
KeyValuePair$Dart.KeyValuePair$$Factory = function($rtt, key, value){
  var tmp$0 = new KeyValuePair$Dart;
  tmp$0.$typeInfo = $rtt;
  KeyValuePair$Dart.$Initializer.call(tmp$0, key, value);
  KeyValuePair$Dart.$Constructor.call(tmp$0, key, value);
  return tmp$0;
}
;
KeyValuePair$Dart.prototype.key$named = function(){
  return this.key$getter().apply(this, arguments);
}
;
KeyValuePair$Dart.prototype.key$getter = function(){
  return this.key$field;
}
;
KeyValuePair$Dart.prototype.value$named = function(){
  return this.value$getter().apply(this, arguments);
}
;
KeyValuePair$Dart.prototype.value$getter = function(){
  return this.value$field;
}
;
KeyValuePair$Dart.prototype.value$setter = function(tmp$0){
  this.value$field = tmp$0;
}
;
