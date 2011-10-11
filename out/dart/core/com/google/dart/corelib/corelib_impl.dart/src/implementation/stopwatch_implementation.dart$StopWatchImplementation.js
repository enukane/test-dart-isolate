function StopWatchImplementation$Dart(){
}

StopWatchImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('StopWatchImplementation$Dart'), StopWatchImplementation$Dart.$RTTimplements);
}
;
StopWatchImplementation$Dart.$RTTimplements = function(rtt){
  StopWatchImplementation$Dart.$addTo(rtt);
}
;
StopWatchImplementation$Dart.$addTo = function(target){
  var rtt = StopWatchImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  StopWatch$Dart.$addTo(target);
}
;
StopWatchImplementation$Dart.prototype.$implements$StopWatchImplementation$Dart = 1;
StopWatchImplementation$Dart.prototype.$implements$StopWatch$Dart = 1;
StopWatchImplementation$Dart.prototype.$implements$Object$Dart = 1;
StopWatchImplementation$Dart.$Constructor = function(){
  Object.$Constructor.call(this);
}
;
StopWatchImplementation$Dart.$Initializer = function(){
  Object.$Initializer.call(this);
  this._start$$field_ = $Dart$Null;
  this._stop$$field_ = $Dart$Null;
}
;
StopWatchImplementation$Dart.StopWatchImplementation$$Factory = function(){
  var tmp$0 = new StopWatchImplementation$Dart;
  tmp$0.$typeInfo = StopWatchImplementation$Dart.$lookupRTT();
  StopWatchImplementation$Dart.$Initializer.call(tmp$0);
  StopWatchImplementation$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
StopWatchImplementation$Dart.prototype._start$$named_ = function(){
  return this._start$$getter_().apply(this, arguments);
}
;
StopWatchImplementation$Dart.prototype._start$$getter_ = function(){
  return this._start$$field_;
}
;
StopWatchImplementation$Dart.prototype._start$$setter_ = function(tmp$0){
  this._start$$field_ = tmp$0;
}
;
StopWatchImplementation$Dart.prototype._stop$$named_ = function(){
  return this._stop$$getter_().apply(this, arguments);
}
;
StopWatchImplementation$Dart.prototype._stop$$getter_ = function(){
  return this._stop$$field_;
}
;
StopWatchImplementation$Dart.prototype._stop$$setter_ = function(tmp$0){
  this._stop$$field_ = tmp$0;
}
;
StopWatchImplementation$Dart.prototype.start$member = function(){
  var tmp$1, tmp$0;
  if (this._start$$getter_() == null) {
    this._start$$setter_(tmp$0 = Clock$Dart.now$member()) , tmp$0;
  }
   else {
    if (this._stop$$getter_() == null) {
      return;
    }
    this._start$$setter_(tmp$1 = SUB$operator(Clock$Dart.now$member(), SUB$operator(this._stop$$getter_(), this._start$$getter_()))) , tmp$1;
  }
}
;
StopWatchImplementation$Dart.prototype.start$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return StopWatchImplementation$Dart.prototype.start$member.call(this);
}
;
StopWatchImplementation$Dart.prototype.start$getter = function start$getter(){
  return $bind(StopWatchImplementation$Dart.prototype.start$named, this);
}
;
StopWatchImplementation$Dart.prototype.stop$member = function(){
  var tmp$0;
  if (this._start$$getter_() == null) {
    return;
  }
  this._stop$$setter_(tmp$0 = Clock$Dart.now$member()) , tmp$0;
}
;
StopWatchImplementation$Dart.prototype.stop$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return StopWatchImplementation$Dart.prototype.stop$member.call(this);
}
;
StopWatchImplementation$Dart.prototype.stop$getter = function stop$getter(){
  return $bind(StopWatchImplementation$Dart.prototype.stop$named, this);
}
;
StopWatchImplementation$Dart.prototype.elapsed$member = function(){
  if (this._start$$getter_() == null) {
    return 0;
  }
  return this._stop$$getter_() == null?SUB$operator(Clock$Dart.now$member(), this._start$$getter_()):SUB$operator(this._stop$$getter_(), this._start$$getter_());
}
;
StopWatchImplementation$Dart.prototype.elapsed$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return StopWatchImplementation$Dart.prototype.elapsed$member.call(this);
}
;
StopWatchImplementation$Dart.prototype.elapsed$getter = function elapsed$getter(){
  return $bind(StopWatchImplementation$Dart.prototype.elapsed$named, this);
}
;
StopWatchImplementation$Dart.prototype.elapsedInUs$member = function(){
  return TRUNC$operator(MUL$operator(this.elapsed$member(), 1000000), this.frequency$member());
}
;
StopWatchImplementation$Dart.prototype.elapsedInUs$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return StopWatchImplementation$Dart.prototype.elapsedInUs$member.call(this);
}
;
StopWatchImplementation$Dart.prototype.elapsedInUs$getter = function elapsedInUs$getter(){
  return $bind(StopWatchImplementation$Dart.prototype.elapsedInUs$named, this);
}
;
StopWatchImplementation$Dart.prototype.elapsedInMs$member = function(){
  return TRUNC$operator(MUL$operator(this.elapsed$member(), 1000), this.frequency$member());
}
;
StopWatchImplementation$Dart.prototype.elapsedInMs$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return StopWatchImplementation$Dart.prototype.elapsedInMs$member.call(this);
}
;
StopWatchImplementation$Dart.prototype.elapsedInMs$getter = function elapsedInMs$getter(){
  return $bind(StopWatchImplementation$Dart.prototype.elapsedInMs$named, this);
}
;
StopWatchImplementation$Dart.prototype.frequency$member = function(){
  return Clock$Dart.frequency$member();
}
;
StopWatchImplementation$Dart.prototype.frequency$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return StopWatchImplementation$Dart.prototype.frequency$member.call(this);
}
;
StopWatchImplementation$Dart.prototype.frequency$getter = function frequency$getter(){
  return $bind(StopWatchImplementation$Dart.prototype.frequency$named, this);
}
;
