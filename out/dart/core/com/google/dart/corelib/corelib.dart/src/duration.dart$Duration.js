function Duration$Dart(){
}

Duration$Dart.$lookupRTT = function(){
  return RTT.create($cls('Duration$Dart'), Duration$Dart.$RTTimplements);
}
;
Duration$Dart.$RTTimplements = function(rtt){
  Duration$Dart.$addTo(rtt);
}
;
Duration$Dart.$addTo = function(target){
  var rtt = Duration$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  Comparable$Dart.$addTo(target);
}
;
Duration$Dart.MILLISECONDS_PER_SECOND$named = function(){
  return Duration$Dart.MILLISECONDS_PER_SECOND$getter().apply(this, arguments);
}
;
Duration$Dart.MILLISECONDS_PER_SECOND$getter = function(){
  return 1000;
}
;
Duration$Dart.SECONDS_PER_MINUTE$named = function(){
  return Duration$Dart.SECONDS_PER_MINUTE$getter().apply(this, arguments);
}
;
Duration$Dart.SECONDS_PER_MINUTE$getter = function(){
  return 60;
}
;
Duration$Dart.MINUTES_PER_HOUR$named = function(){
  return Duration$Dart.MINUTES_PER_HOUR$getter().apply(this, arguments);
}
;
Duration$Dart.MINUTES_PER_HOUR$getter = function(){
  return 60;
}
;
Duration$Dart.HOURS_PER_DAY$named = function(){
  return Duration$Dart.HOURS_PER_DAY$getter().apply(this, arguments);
}
;
Duration$Dart.HOURS_PER_DAY$getter = function(){
  return 24;
}
;
Duration$Dart.MILLISECONDS_PER_MINUTE$named = function(){
  return Duration$Dart.MILLISECONDS_PER_MINUTE$getter().apply(this, arguments);
}
;
Duration$Dart.MILLISECONDS_PER_MINUTE$getter = function(){
  var tmp$0 = isolate$current.Duration$DartMILLISECONDS_PER_MINUTE$field;
  var tmp$1 = static$initializing;
  if (tmp$0 === tmp$1)
    throw 'circular initialization';
  if (tmp$0 !== static$uninitialized)
    return tmp$0;
  isolate$current.Duration$DartMILLISECONDS_PER_MINUTE$field = tmp$1;
  var tmp$2 = MUL$operator(Duration$Dart.MILLISECONDS_PER_SECOND$getter(), Duration$Dart.SECONDS_PER_MINUTE$getter());
  isolate$current.Duration$DartMILLISECONDS_PER_MINUTE$field = tmp$2;
  return tmp$2;
}
;
Duration$Dart.MILLISECONDS_PER_HOUR$named = function(){
  return Duration$Dart.MILLISECONDS_PER_HOUR$getter().apply(this, arguments);
}
;
Duration$Dart.MILLISECONDS_PER_HOUR$getter = function(){
  var tmp$0 = isolate$current.Duration$DartMILLISECONDS_PER_HOUR$field;
  var tmp$1 = static$initializing;
  if (tmp$0 === tmp$1)
    throw 'circular initialization';
  if (tmp$0 !== static$uninitialized)
    return tmp$0;
  isolate$current.Duration$DartMILLISECONDS_PER_HOUR$field = tmp$1;
  var tmp$2 = MUL$operator(Duration$Dart.MILLISECONDS_PER_MINUTE$getter(), Duration$Dart.MINUTES_PER_HOUR$getter());
  isolate$current.Duration$DartMILLISECONDS_PER_HOUR$field = tmp$2;
  return tmp$2;
}
;
Duration$Dart.MILLISECONDS_PER_DAY$named = function(){
  return Duration$Dart.MILLISECONDS_PER_DAY$getter().apply(this, arguments);
}
;
Duration$Dart.MILLISECONDS_PER_DAY$getter = function(){
  var tmp$0 = isolate$current.Duration$DartMILLISECONDS_PER_DAY$field;
  var tmp$1 = static$initializing;
  if (tmp$0 === tmp$1)
    throw 'circular initialization';
  if (tmp$0 !== static$uninitialized)
    return tmp$0;
  isolate$current.Duration$DartMILLISECONDS_PER_DAY$field = tmp$1;
  var tmp$2 = MUL$operator(Duration$Dart.MILLISECONDS_PER_HOUR$getter(), Duration$Dart.HOURS_PER_DAY$getter());
  isolate$current.Duration$DartMILLISECONDS_PER_DAY$field = tmp$2;
  return tmp$2;
}
;
Duration$Dart.SECONDS_PER_HOUR$named = function(){
  return Duration$Dart.SECONDS_PER_HOUR$getter().apply(this, arguments);
}
;
Duration$Dart.SECONDS_PER_HOUR$getter = function(){
  var tmp$0 = isolate$current.Duration$DartSECONDS_PER_HOUR$field;
  var tmp$1 = static$initializing;
  if (tmp$0 === tmp$1)
    throw 'circular initialization';
  if (tmp$0 !== static$uninitialized)
    return tmp$0;
  isolate$current.Duration$DartSECONDS_PER_HOUR$field = tmp$1;
  var tmp$2 = MUL$operator(Duration$Dart.SECONDS_PER_MINUTE$getter(), Duration$Dart.MINUTES_PER_HOUR$getter());
  isolate$current.Duration$DartSECONDS_PER_HOUR$field = tmp$2;
  return tmp$2;
}
;
Duration$Dart.SECONDS_PER_DAY$named = function(){
  return Duration$Dart.SECONDS_PER_DAY$getter().apply(this, arguments);
}
;
Duration$Dart.SECONDS_PER_DAY$getter = function(){
  var tmp$0 = isolate$current.Duration$DartSECONDS_PER_DAY$field;
  var tmp$1 = static$initializing;
  if (tmp$0 === tmp$1)
    throw 'circular initialization';
  if (tmp$0 !== static$uninitialized)
    return tmp$0;
  isolate$current.Duration$DartSECONDS_PER_DAY$field = tmp$1;
  var tmp$2 = MUL$operator(Duration$Dart.SECONDS_PER_HOUR$getter(), Duration$Dart.HOURS_PER_DAY$getter());
  isolate$current.Duration$DartSECONDS_PER_DAY$field = tmp$2;
  return tmp$2;
}
;
Duration$Dart.MINUTES_PER_DAY$named = function(){
  return Duration$Dart.MINUTES_PER_DAY$getter().apply(this, arguments);
}
;
Duration$Dart.MINUTES_PER_DAY$getter = function(){
  var tmp$0 = isolate$current.Duration$DartMINUTES_PER_DAY$field;
  var tmp$1 = static$initializing;
  if (tmp$0 === tmp$1)
    throw 'circular initialization';
  if (tmp$0 !== static$uninitialized)
    return tmp$0;
  isolate$current.Duration$DartMINUTES_PER_DAY$field = tmp$1;
  var tmp$2 = MUL$operator(Duration$Dart.MINUTES_PER_HOUR$getter(), Duration$Dart.HOURS_PER_DAY$getter());
  isolate$current.Duration$DartMINUTES_PER_DAY$field = tmp$2;
  return tmp$2;
}
;
