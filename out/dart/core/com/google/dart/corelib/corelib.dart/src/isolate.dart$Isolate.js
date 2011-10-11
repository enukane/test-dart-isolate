function Isolate$Dart(){
}

Isolate$Dart.$lookupRTT = function(){
  return RTT.create($cls('Isolate$Dart'));
}
;
Isolate$Dart.$addTo = function(target){
  var rtt = Isolate$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
}
;
Isolate$Dart.prototype.$implements$Isolate$Dart = 1;
Isolate$Dart.prototype.$implements$Object$Dart = 1;
function Isolate$Dart$isolateFactory(){
  return Isolate$Dart.default$factory();
}

Isolate$Dart.prototype.getIsolateFactory = function(){
  return Isolate$Dart$isolateFactory;
}
;
Isolate$Dart.$Constructor = function(){
  Isolate$Dart.light$Constructor.call(this);
}
;
Isolate$Dart.$Initializer = function(){
  Isolate$Dart.light$Initializer.call(this);
}
;
Isolate$Dart.Isolate$$Factory = function(){
  var tmp$0 = new Isolate$Dart;
  tmp$0.$typeInfo = Isolate$Dart.$lookupRTT();
  Isolate$Dart.$Initializer.call(tmp$0);
  Isolate$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
Isolate$Dart.default$factory = Isolate$Dart.Isolate$$Factory;
Isolate$Dart.light$Constructor = function(){
  Object.$Constructor.call(this);
}
;
Isolate$Dart.light$Initializer = function(){
  Object.$Initializer.call(this);
  this._isLight$$field_ = true;
}
;
Isolate$Dart.Isolate$light$7$Factory = function(){
  var tmp$0 = new Isolate$Dart;
  tmp$0.$typeInfo = Isolate$Dart.$lookupRTT();
  Isolate$Dart.light$Initializer.call(tmp$0);
  Isolate$Dart.light$Constructor.call(tmp$0);
  return tmp$0;
}
;
Isolate$Dart.heavy$Constructor = function(){
  Object.$Constructor.call(this);
}
;
Isolate$Dart.heavy$Initializer = function(){
  Object.$Initializer.call(this);
  this._isLight$$field_ = false;
}
;
Isolate$Dart.Isolate$heavy$7$Factory = function(){
  var tmp$0 = new Isolate$Dart;
  tmp$0.$typeInfo = Isolate$Dart.$lookupRTT();
  Isolate$Dart.heavy$Initializer.call(tmp$0);
  Isolate$Dart.heavy$Constructor.call(tmp$0);
  return tmp$0;
}
;
Isolate$Dart.prototype.spawn$member = function(){
  return IsolateNatives$Dart.spawn$member(this, this._isLight$$getter_());
}
;
Isolate$Dart.prototype.spawn$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return Isolate$Dart.prototype.spawn$member.call(this);
}
;
Isolate$Dart.prototype.spawn$getter = function spawn$getter(){
  return $bind(Isolate$Dart.prototype.spawn$named, this);
}
;
Isolate$Dart.prototype._run$$member_ = function(port){
  var tmp$0;
  this._port$$setter_(tmp$0 = port) , tmp$0;
  this.main$member();
}
;
Isolate$Dart.prototype._run$$named_ = function($n, $o, port){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return Isolate$Dart.prototype._run$$member_.call(this, port);
}
;
Isolate$Dart.prototype._run$$getter_ = function _run$$getter_(){
  return $bind(Isolate$Dart.prototype._run$$named_, this);
}
;
Isolate$Dart.prototype.port$named = function(){
  return this.port$getter().apply(this, arguments);
}
;
Isolate$Dart.prototype.port$getter = function(){
  return this._port$$getter_();
}
;
Isolate$Dart.prototype.main$member = function(){
}
;
Isolate$Dart.prototype.main$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return Isolate$Dart.prototype.main$member.call(this);
}
;
Isolate$Dart.prototype.main$getter = function main$getter(){
  return $bind(Isolate$Dart.prototype.main$named, this);
}
;
Isolate$Dart.prototype._isLight$$named_ = function(){
  return this._isLight$$getter_().apply(this, arguments);
}
;
Isolate$Dart.prototype._isLight$$getter_ = function(){
  return this._isLight$$field_;
}
;
Isolate$Dart.prototype._port$$named_ = function(){
  return this._port$$getter_().apply(this, arguments);
}
;
Isolate$Dart.prototype._port$$getter_ = function(){
  return this._port$$field_;
}
;
Isolate$Dart.prototype._port$$setter_ = function(tmp$0){
  this._port$$field_ = tmp$0;
}
;
Isolate$Dart.bind$member = function(f){
  return IsolateNatives$Dart.bind$member(f);
}
;
Isolate$Dart.bind$named = function($n, $o, f){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return Isolate$Dart.bind$member(f);
}
;
Isolate$Dart.bind$getter = function bind$getter(){
  return Isolate$Dart.bind$named;
}
;
