function Date$Dart(){
}

Date$Dart.$lookupRTT = function(){
  return RTT.create($cls('Date$Dart'), Date$Dart.$RTTimplements);
}
;
Date$Dart.$RTTimplements = function(rtt){
  Date$Dart.$addTo(rtt);
}
;
Date$Dart.$addTo = function(target){
  var rtt = Date$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  Comparable$Dart.$addTo(target);
}
;
Date$Dart.MON$named = function(){
  return Date$Dart.MON$getter().apply(this, arguments);
}
;
Date$Dart.MON$getter = function(){
  return 0;
}
;
Date$Dart.TUE$named = function(){
  return Date$Dart.TUE$getter().apply(this, arguments);
}
;
Date$Dart.TUE$getter = function(){
  return 1;
}
;
Date$Dart.WED$named = function(){
  return Date$Dart.WED$getter().apply(this, arguments);
}
;
Date$Dart.WED$getter = function(){
  return 2;
}
;
Date$Dart.THU$named = function(){
  return Date$Dart.THU$getter().apply(this, arguments);
}
;
Date$Dart.THU$getter = function(){
  return 3;
}
;
Date$Dart.FRI$named = function(){
  return Date$Dart.FRI$getter().apply(this, arguments);
}
;
Date$Dart.FRI$getter = function(){
  return 4;
}
;
Date$Dart.SAT$named = function(){
  return Date$Dart.SAT$getter().apply(this, arguments);
}
;
Date$Dart.SAT$getter = function(){
  return 5;
}
;
Date$Dart.SUN$named = function(){
  return Date$Dart.SUN$getter().apply(this, arguments);
}
;
Date$Dart.SUN$getter = function(){
  return 6;
}
;
Date$Dart.DAYS_IN_WEEK$named = function(){
  return Date$Dart.DAYS_IN_WEEK$getter().apply(this, arguments);
}
;
Date$Dart.DAYS_IN_WEEK$getter = function(){
  return 7;
}
;
Date$Dart.JAN$named = function(){
  return Date$Dart.JAN$getter().apply(this, arguments);
}
;
Date$Dart.JAN$getter = function(){
  return 1;
}
;
Date$Dart.FEB$named = function(){
  return Date$Dart.FEB$getter().apply(this, arguments);
}
;
Date$Dart.FEB$getter = function(){
  return 2;
}
;
Date$Dart.MAR$named = function(){
  return Date$Dart.MAR$getter().apply(this, arguments);
}
;
Date$Dart.MAR$getter = function(){
  return 3;
}
;
Date$Dart.APR$named = function(){
  return Date$Dart.APR$getter().apply(this, arguments);
}
;
Date$Dart.APR$getter = function(){
  return 4;
}
;
Date$Dart.MAY$named = function(){
  return Date$Dart.MAY$getter().apply(this, arguments);
}
;
Date$Dart.MAY$getter = function(){
  return 5;
}
;
Date$Dart.JUN$named = function(){
  return Date$Dart.JUN$getter().apply(this, arguments);
}
;
Date$Dart.JUN$getter = function(){
  return 6;
}
;
Date$Dart.JUL$named = function(){
  return Date$Dart.JUL$getter().apply(this, arguments);
}
;
Date$Dart.JUL$getter = function(){
  return 7;
}
;
Date$Dart.AUG$named = function(){
  return Date$Dart.AUG$getter().apply(this, arguments);
}
;
Date$Dart.AUG$getter = function(){
  return 8;
}
;
Date$Dart.SEP$named = function(){
  return Date$Dart.SEP$getter().apply(this, arguments);
}
;
Date$Dart.SEP$getter = function(){
  return 9;
}
;
Date$Dart.OCT$named = function(){
  return Date$Dart.OCT$getter().apply(this, arguments);
}
;
Date$Dart.OCT$getter = function(){
  return 10;
}
;
Date$Dart.NOV$named = function(){
  return Date$Dart.NOV$getter().apply(this, arguments);
}
;
Date$Dart.NOV$getter = function(){
  return 11;
}
;
Date$Dart.DEC$named = function(){
  return Date$Dart.DEC$getter().apply(this, arguments);
}
;
Date$Dart.DEC$getter = function(){
  return 12;
}
;
