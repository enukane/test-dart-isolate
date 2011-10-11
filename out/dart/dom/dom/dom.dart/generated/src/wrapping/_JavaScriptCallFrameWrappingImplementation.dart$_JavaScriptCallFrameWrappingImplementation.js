function _JavaScriptCallFrameWrappingImplementation$Dart(){
}

_JavaScriptCallFrameWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('_JavaScriptCallFrameWrappingImplementation$Dart'), _JavaScriptCallFrameWrappingImplementation$Dart.$RTTimplements);
}
;
_JavaScriptCallFrameWrappingImplementation$Dart.$RTTimplements = function(rtt){
  _JavaScriptCallFrameWrappingImplementation$Dart.$addTo(rtt);
}
;
_JavaScriptCallFrameWrappingImplementation$Dart.$addTo = function(target){
  var rtt = _JavaScriptCallFrameWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  DOMWrapperBase$Dart.$addTo(target);
  JavaScriptCallFrame$Dart.$addTo(target);
}
;
_JavaScriptCallFrameWrappingImplementation$Dart.prototype.$implements$_JavaScriptCallFrameWrappingImplementation$Dart = 1;
_JavaScriptCallFrameWrappingImplementation$Dart.prototype.$implements$JavaScriptCallFrame$Dart = 1;
_JavaScriptCallFrameWrappingImplementation$Dart.prototype.$implements$DOMWrapperBase$Dart = 1;
_JavaScriptCallFrameWrappingImplementation$Dart.prototype.$implements$DOMType$Dart = 1;
_JavaScriptCallFrameWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(_JavaScriptCallFrameWrappingImplementation$Dart, DOMWrapperBase$Dart);
_JavaScriptCallFrameWrappingImplementation$Dart.$Constructor = function(){
  DOMWrapperBase$Dart.$Constructor.call(this);
}
;
_JavaScriptCallFrameWrappingImplementation$Dart.$Initializer = function(){
  DOMWrapperBase$Dart.$Initializer.call(this);
}
;
_JavaScriptCallFrameWrappingImplementation$Dart._JavaScriptCallFrameWrappingImplementation$$Factory = function(){
  var tmp$0 = new _JavaScriptCallFrameWrappingImplementation$Dart;
  tmp$0.$typeInfo = _JavaScriptCallFrameWrappingImplementation$Dart.$lookupRTT();
  _JavaScriptCallFrameWrappingImplementation$Dart.$Initializer.call(tmp$0);
  _JavaScriptCallFrameWrappingImplementation$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
_JavaScriptCallFrameWrappingImplementation$Dart.create__JavaScriptCallFrameWrappingImplementation$member = function(){
  return _JavaScriptCallFrameWrappingImplementation$Dart._JavaScriptCallFrameWrappingImplementation$$Factory();
}
;
_JavaScriptCallFrameWrappingImplementation$Dart.create__JavaScriptCallFrameWrappingImplementation$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _JavaScriptCallFrameWrappingImplementation$Dart.create__JavaScriptCallFrameWrappingImplementation$member();
}
;
function native__JavaScriptCallFrameWrappingImplementation_create__JavaScriptCallFrameWrappingImplementation(){
  return _JavaScriptCallFrameWrappingImplementation$Dart.create__JavaScriptCallFrameWrappingImplementation$member();
}

_JavaScriptCallFrameWrappingImplementation$Dart.create__JavaScriptCallFrameWrappingImplementation$getter = function create__JavaScriptCallFrameWrappingImplementation$getter(){
  return _JavaScriptCallFrameWrappingImplementation$Dart.create__JavaScriptCallFrameWrappingImplementation$named;
}
;
_JavaScriptCallFrameWrappingImplementation$Dart.prototype.caller$named = function(){
  return this.caller$getter().apply(this, arguments);
}
;
_JavaScriptCallFrameWrappingImplementation$Dart.prototype.caller$getter = function(){
  return _JavaScriptCallFrameWrappingImplementation$Dart._get__JavaScriptCallFrame_caller$$member_(this);
}
;
_JavaScriptCallFrameWrappingImplementation$Dart._get__JavaScriptCallFrame_caller$$member_ = function(_this){
  return native__JavaScriptCallFrameWrappingImplementation__get__JavaScriptCallFrame_caller(_this);
}
;
_JavaScriptCallFrameWrappingImplementation$Dart._get__JavaScriptCallFrame_caller$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _JavaScriptCallFrameWrappingImplementation$Dart._get__JavaScriptCallFrame_caller$$member_(_this);
}
;
_JavaScriptCallFrameWrappingImplementation$Dart._get__JavaScriptCallFrame_caller$$getter_ = function _get__JavaScriptCallFrame_caller$$getter_(){
  return _JavaScriptCallFrameWrappingImplementation$Dart._get__JavaScriptCallFrame_caller$$named_;
}
;
_JavaScriptCallFrameWrappingImplementation$Dart.prototype.column$named = function(){
  return this.column$getter().apply(this, arguments);
}
;
_JavaScriptCallFrameWrappingImplementation$Dart.prototype.column$getter = function(){
  return _JavaScriptCallFrameWrappingImplementation$Dart._get__JavaScriptCallFrame_column$$member_(this);
}
;
_JavaScriptCallFrameWrappingImplementation$Dart._get__JavaScriptCallFrame_column$$member_ = function(_this){
  return native__JavaScriptCallFrameWrappingImplementation__get__JavaScriptCallFrame_column(_this);
}
;
_JavaScriptCallFrameWrappingImplementation$Dart._get__JavaScriptCallFrame_column$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _JavaScriptCallFrameWrappingImplementation$Dart._get__JavaScriptCallFrame_column$$member_(_this);
}
;
_JavaScriptCallFrameWrappingImplementation$Dart._get__JavaScriptCallFrame_column$$getter_ = function _get__JavaScriptCallFrame_column$$getter_(){
  return _JavaScriptCallFrameWrappingImplementation$Dart._get__JavaScriptCallFrame_column$$named_;
}
;
_JavaScriptCallFrameWrappingImplementation$Dart.prototype.functionName$named = function(){
  return this.functionName$getter().apply(this, arguments);
}
;
_JavaScriptCallFrameWrappingImplementation$Dart.prototype.functionName$getter = function(){
  return _JavaScriptCallFrameWrappingImplementation$Dart._get__JavaScriptCallFrame_functionName$$member_(this);
}
;
_JavaScriptCallFrameWrappingImplementation$Dart._get__JavaScriptCallFrame_functionName$$member_ = function(_this){
  return native__JavaScriptCallFrameWrappingImplementation__get__JavaScriptCallFrame_functionName(_this);
}
;
_JavaScriptCallFrameWrappingImplementation$Dart._get__JavaScriptCallFrame_functionName$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _JavaScriptCallFrameWrappingImplementation$Dart._get__JavaScriptCallFrame_functionName$$member_(_this);
}
;
_JavaScriptCallFrameWrappingImplementation$Dart._get__JavaScriptCallFrame_functionName$$getter_ = function _get__JavaScriptCallFrame_functionName$$getter_(){
  return _JavaScriptCallFrameWrappingImplementation$Dart._get__JavaScriptCallFrame_functionName$$named_;
}
;
_JavaScriptCallFrameWrappingImplementation$Dart.prototype.line$named = function(){
  return this.line$getter().apply(this, arguments);
}
;
_JavaScriptCallFrameWrappingImplementation$Dart.prototype.line$getter = function(){
  return _JavaScriptCallFrameWrappingImplementation$Dart._get__JavaScriptCallFrame_line$$member_(this);
}
;
_JavaScriptCallFrameWrappingImplementation$Dart._get__JavaScriptCallFrame_line$$member_ = function(_this){
  return native__JavaScriptCallFrameWrappingImplementation__get__JavaScriptCallFrame_line(_this);
}
;
_JavaScriptCallFrameWrappingImplementation$Dart._get__JavaScriptCallFrame_line$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _JavaScriptCallFrameWrappingImplementation$Dart._get__JavaScriptCallFrame_line$$member_(_this);
}
;
_JavaScriptCallFrameWrappingImplementation$Dart._get__JavaScriptCallFrame_line$$getter_ = function _get__JavaScriptCallFrame_line$$getter_(){
  return _JavaScriptCallFrameWrappingImplementation$Dart._get__JavaScriptCallFrame_line$$named_;
}
;
_JavaScriptCallFrameWrappingImplementation$Dart.prototype.sourceID$named = function(){
  return this.sourceID$getter().apply(this, arguments);
}
;
_JavaScriptCallFrameWrappingImplementation$Dart.prototype.sourceID$getter = function(){
  return _JavaScriptCallFrameWrappingImplementation$Dart._get__JavaScriptCallFrame_sourceID$$member_(this);
}
;
_JavaScriptCallFrameWrappingImplementation$Dart._get__JavaScriptCallFrame_sourceID$$member_ = function(_this){
  return native__JavaScriptCallFrameWrappingImplementation__get__JavaScriptCallFrame_sourceID(_this);
}
;
_JavaScriptCallFrameWrappingImplementation$Dart._get__JavaScriptCallFrame_sourceID$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _JavaScriptCallFrameWrappingImplementation$Dart._get__JavaScriptCallFrame_sourceID$$member_(_this);
}
;
_JavaScriptCallFrameWrappingImplementation$Dart._get__JavaScriptCallFrame_sourceID$$getter_ = function _get__JavaScriptCallFrame_sourceID$$getter_(){
  return _JavaScriptCallFrameWrappingImplementation$Dart._get__JavaScriptCallFrame_sourceID$$named_;
}
;
_JavaScriptCallFrameWrappingImplementation$Dart.prototype.type$named = function(){
  return this.type$getter().apply(this, arguments);
}
;
_JavaScriptCallFrameWrappingImplementation$Dart.prototype.type$getter = function(){
  return _JavaScriptCallFrameWrappingImplementation$Dart._get__JavaScriptCallFrame_type$$member_(this);
}
;
_JavaScriptCallFrameWrappingImplementation$Dart._get__JavaScriptCallFrame_type$$member_ = function(_this){
  return native__JavaScriptCallFrameWrappingImplementation__get__JavaScriptCallFrame_type(_this);
}
;
_JavaScriptCallFrameWrappingImplementation$Dart._get__JavaScriptCallFrame_type$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _JavaScriptCallFrameWrappingImplementation$Dart._get__JavaScriptCallFrame_type$$member_(_this);
}
;
_JavaScriptCallFrameWrappingImplementation$Dart._get__JavaScriptCallFrame_type$$getter_ = function _get__JavaScriptCallFrame_type$$getter_(){
  return _JavaScriptCallFrameWrappingImplementation$Dart._get__JavaScriptCallFrame_type$$named_;
}
;
_JavaScriptCallFrameWrappingImplementation$Dart.prototype.evaluate$member = function(script){
  _JavaScriptCallFrameWrappingImplementation$Dart._evaluate$$member_(this, script);
  return;
}
;
_JavaScriptCallFrameWrappingImplementation$Dart.prototype.evaluate$named = function($n, $o, script){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _JavaScriptCallFrameWrappingImplementation$Dart.prototype.evaluate$member.call(this, script);
}
;
_JavaScriptCallFrameWrappingImplementation$Dart.prototype.evaluate$getter = function evaluate$getter(){
  return $bind(_JavaScriptCallFrameWrappingImplementation$Dart.prototype.evaluate$named, this);
}
;
_JavaScriptCallFrameWrappingImplementation$Dart._evaluate$$member_ = function(receiver, script){
  return native__JavaScriptCallFrameWrappingImplementation__evaluate(receiver, script);
}
;
_JavaScriptCallFrameWrappingImplementation$Dart._evaluate$$named_ = function($n, $o, receiver, script){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _JavaScriptCallFrameWrappingImplementation$Dart._evaluate$$member_(receiver, script);
}
;
_JavaScriptCallFrameWrappingImplementation$Dart._evaluate$$getter_ = function _evaluate$$getter_(){
  return _JavaScriptCallFrameWrappingImplementation$Dart._evaluate$$named_;
}
;
_JavaScriptCallFrameWrappingImplementation$Dart.prototype.scopeType$member = function(scopeIndex){
  return _JavaScriptCallFrameWrappingImplementation$Dart._scopeType$$member_(this, scopeIndex);
}
;
_JavaScriptCallFrameWrappingImplementation$Dart.prototype.scopeType$named = function($n, $o, scopeIndex){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _JavaScriptCallFrameWrappingImplementation$Dart.prototype.scopeType$member.call(this, scopeIndex);
}
;
_JavaScriptCallFrameWrappingImplementation$Dart.prototype.scopeType$getter = function scopeType$getter(){
  return $bind(_JavaScriptCallFrameWrappingImplementation$Dart.prototype.scopeType$named, this);
}
;
_JavaScriptCallFrameWrappingImplementation$Dart._scopeType$$member_ = function(receiver, scopeIndex){
  return native__JavaScriptCallFrameWrappingImplementation__scopeType(receiver, scopeIndex);
}
;
_JavaScriptCallFrameWrappingImplementation$Dart._scopeType$$named_ = function($n, $o, receiver, scopeIndex){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _JavaScriptCallFrameWrappingImplementation$Dart._scopeType$$member_(receiver, scopeIndex);
}
;
_JavaScriptCallFrameWrappingImplementation$Dart._scopeType$$getter_ = function _scopeType$$getter_(){
  return _JavaScriptCallFrameWrappingImplementation$Dart._scopeType$$named_;
}
;
_JavaScriptCallFrameWrappingImplementation$Dart.prototype.typeName$named = function(){
  return this.typeName$getter().apply(this, arguments);
}
;
_JavaScriptCallFrameWrappingImplementation$Dart.prototype.typeName$getter = function(){
  return 'JavaScriptCallFrame';
}
;
