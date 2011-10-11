function ExpectException$Dart(){
}

ExpectException$Dart.$lookupRTT = function(){
  return RTT.create($cls('ExpectException$Dart'), ExpectException$Dart.$RTTimplements);
}
;
ExpectException$Dart.$RTTimplements = function(rtt){
  ExpectException$Dart.$addTo(rtt);
}
;
ExpectException$Dart.$addTo = function(target){
  var rtt = ExpectException$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  Exception$Dart.$addTo(target);
}
;
ExpectException$Dart.prototype.$implements$ExpectException$Dart = 1;
ExpectException$Dart.prototype.$implements$Exception$Dart = 1;
ExpectException$Dart.prototype.$implements$Object$Dart = 1;
ExpectException$Dart.$Constructor = function(message){
  Object.$Constructor.call(this);
}
;
ExpectException$Dart.$Initializer = function(message){
  Object.$Initializer.call(this);
  this.message$field = message;
}
;
ExpectException$Dart.ExpectException$$Factory = function(message){
  var tmp$0 = new ExpectException$Dart;
  tmp$0.$typeInfo = ExpectException$Dart.$lookupRTT();
  ExpectException$Dart.$Initializer.call(tmp$0, message);
  ExpectException$Dart.$Constructor.call(tmp$0, message);
  return tmp$0;
}
;
ExpectException$Dart.prototype.toString$member = function(){
  return this.message$getter();
}
;
ExpectException$Dart.prototype.toString$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return ExpectException$Dart.prototype.toString$member.call(this);
}
;
ExpectException$Dart.prototype.toString$getter = function toString$getter(){
  return $bind(ExpectException$Dart.prototype.toString$named, this);
}
;
ExpectException$Dart.prototype.message$named = function(){
  return this.message$getter().apply(this, arguments);
}
;
ExpectException$Dart.prototype.message$getter = function(){
  return this.message$field;
}
;
ExpectException$Dart.prototype.message$setter = function(tmp$0){
  this.message$field = tmp$0;
}
;
