function multitestecd992$MyIsolate$Dart(){
}

multitestecd992$MyIsolate$Dart.$lookupRTT = function(){
  return RTT.create($cls('multitestecd992$MyIsolate$Dart'), multitestecd992$MyIsolate$Dart.$RTTimplements);
}
;
multitestecd992$MyIsolate$Dart.$RTTimplements = function(rtt){
  multitestecd992$MyIsolate$Dart.$addTo(rtt);
}
;
multitestecd992$MyIsolate$Dart.$addTo = function(target){
  var rtt = multitestecd992$MyIsolate$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  Isolate$Dart.$addTo(target);
}
;
multitestecd992$MyIsolate$Dart.prototype.$implements$multitestecd992$MyIsolate$Dart = 1;
multitestecd992$MyIsolate$Dart.prototype.$implements$Isolate$Dart = 1;
multitestecd992$MyIsolate$Dart.prototype.$implements$Object$Dart = 1;
function multitestecd992$MyIsolate$Dart$isolateFactory(){
  return multitestecd992$MyIsolate$Dart.default$factory();
}

multitestecd992$MyIsolate$Dart.prototype.getIsolateFactory = function(){
  return multitestecd992$MyIsolate$Dart$isolateFactory;
}
;
$inherits(multitestecd992$MyIsolate$Dart, Isolate$Dart);
multitestecd992$MyIsolate$Dart.prototype.isolateName$named = function(){
  return this.isolateName$getter().apply(this, arguments);
}
;
multitestecd992$MyIsolate$Dart.prototype.isolateName$getter = function(){
  return this.isolateName$field;
}
;
multitestecd992$MyIsolate$Dart.prototype.isolateName$setter = function(tmp$0){
  this.isolateName$field = tmp$0;
}
;
multitestecd992$MyIsolate$Dart.prototype.main$member = function(){
  var i = 0;
  while (true) {
    print$getter()(1, $noargs, this.isolateName$getter());
  }
}
;
multitestecd992$MyIsolate$Dart.prototype.main$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return multitestecd992$MyIsolate$Dart.prototype.main$member.call(this);
}
;
multitestecd992$MyIsolate$Dart.prototype.main$getter = function main$getter(){
  return $bind(multitestecd992$MyIsolate$Dart.prototype.main$named, this);
}
;
function multitestecd992$MyIsolate$Dart$init$c0$_$30_4_2$Hoisted(){
  this.main$member();
}

function multitestecd992$MyIsolate$Dart$init$c0$_$30_4_2$Hoisted$named($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return multitestecd992$MyIsolate$Dart$init$c0$_$30_4_2$Hoisted.call(this);
}

multitestecd992$MyIsolate$Dart.prototype.init$member = function(isolateName){
  var tmp$0;
  this.isolateName$setter(tmp$0 = isolateName) , tmp$0;
  Isolate$Dart.bind$member($bind(multitestecd992$MyIsolate$Dart$init$c0$_$30_4_2$Hoisted$named, this));
}
;
multitestecd992$MyIsolate$Dart.prototype.init$named = function($n, $o, isolateName){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return multitestecd992$MyIsolate$Dart.prototype.init$member.call(this, isolateName);
}
;
multitestecd992$MyIsolate$Dart.prototype.init$getter = function init$getter(){
  return $bind(multitestecd992$MyIsolate$Dart.prototype.init$named, this);
}
;
multitestecd992$MyIsolate$Dart.$Constructor = function(){
  Isolate$Dart.$Constructor.call(this);
}
;
multitestecd992$MyIsolate$Dart.$Initializer = function(){
  Isolate$Dart.$Initializer.call(this);
}
;
multitestecd992$MyIsolate$Dart.MyIsolate$$Factory = function(){
  var tmp$0 = new multitestecd992$MyIsolate$Dart;
  tmp$0.$typeInfo = multitestecd992$MyIsolate$Dart.$lookupRTT();
  multitestecd992$MyIsolate$Dart.$Initializer.call(tmp$0);
  multitestecd992$MyIsolate$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
multitestecd992$MyIsolate$Dart.default$factory = multitestecd992$MyIsolate$Dart.MyIsolate$$Factory;
