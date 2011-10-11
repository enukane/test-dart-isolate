function double$Dart(){
}

double$Dart.$lookupRTT = function(){
  return RTT.create($cls('double$Dart'), double$Dart.$RTTimplements);
}
;
double$Dart.$RTTimplements = function(rtt){
  double$Dart.$addTo(rtt);
}
;
double$Dart.$addTo = function(target){
  var rtt = double$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  num$Dart.$addTo(target);
}
;
double$Dart.NAN$named = function(){
  return double$Dart.NAN$getter().apply(this, arguments);
}
;
double$Dart.NAN$getter = function(){
  var tmp$0 = isolate$current.double$DartNAN$field;
  var tmp$1 = static$initializing;
  if (tmp$0 === tmp$1)
    throw 'circular initialization';
  if (tmp$0 !== static$uninitialized)
    return tmp$0;
  isolate$current.double$DartNAN$field = tmp$1;
  var tmp$2 = DIV$operator(0, 0);
  isolate$current.double$DartNAN$field = tmp$2;
  return tmp$2;
}
;
double$Dart.INFINITY$named = function(){
  return double$Dart.INFINITY$getter().apply(this, arguments);
}
;
double$Dart.INFINITY$getter = function(){
  var tmp$0 = isolate$current.double$DartINFINITY$field;
  var tmp$1 = static$initializing;
  if (tmp$0 === tmp$1)
    throw 'circular initialization';
  if (tmp$0 !== static$uninitialized)
    return tmp$0;
  isolate$current.double$DartINFINITY$field = tmp$1;
  var tmp$2 = DIV$operator(1, 0);
  isolate$current.double$DartINFINITY$field = tmp$2;
  return tmp$2;
}
;
double$Dart.NEGATIVE_INFINITY$named = function(){
  return double$Dart.NEGATIVE_INFINITY$getter().apply(this, arguments);
}
;
double$Dart.NEGATIVE_INFINITY$getter = function(){
  var tmp$0 = isolate$current.double$DartNEGATIVE_INFINITY$field;
  var tmp$1 = static$initializing;
  if (tmp$0 === tmp$1)
    throw 'circular initialization';
  if (tmp$0 !== static$uninitialized)
    return tmp$0;
  isolate$current.double$DartNEGATIVE_INFINITY$field = tmp$1;
  var tmp$2 = negate$operator(double$Dart.INFINITY$getter());
  isolate$current.double$DartNEGATIVE_INFINITY$field = tmp$2;
  return tmp$2;
}
;
