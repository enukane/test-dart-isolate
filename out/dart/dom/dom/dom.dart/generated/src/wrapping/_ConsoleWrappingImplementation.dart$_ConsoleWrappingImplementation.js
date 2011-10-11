function _ConsoleWrappingImplementation$Dart(){
}

_ConsoleWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('_ConsoleWrappingImplementation$Dart'), _ConsoleWrappingImplementation$Dart.$RTTimplements);
}
;
_ConsoleWrappingImplementation$Dart.$RTTimplements = function(rtt){
  _ConsoleWrappingImplementation$Dart.$addTo(rtt);
}
;
_ConsoleWrappingImplementation$Dart.$addTo = function(target){
  var rtt = _ConsoleWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  DOMWrapperBase$Dart.$addTo(target);
  Console$Dart.$addTo(target);
}
;
_ConsoleWrappingImplementation$Dart.prototype.$implements$_ConsoleWrappingImplementation$Dart = 1;
_ConsoleWrappingImplementation$Dart.prototype.$implements$Console$Dart = 1;
_ConsoleWrappingImplementation$Dart.prototype.$implements$DOMWrapperBase$Dart = 1;
_ConsoleWrappingImplementation$Dart.prototype.$implements$DOMType$Dart = 1;
_ConsoleWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(_ConsoleWrappingImplementation$Dart, DOMWrapperBase$Dart);
_ConsoleWrappingImplementation$Dart.$Constructor = function(){
  DOMWrapperBase$Dart.$Constructor.call(this);
}
;
_ConsoleWrappingImplementation$Dart.$Initializer = function(){
  DOMWrapperBase$Dart.$Initializer.call(this);
}
;
_ConsoleWrappingImplementation$Dart._ConsoleWrappingImplementation$$Factory = function(){
  var tmp$0 = new _ConsoleWrappingImplementation$Dart;
  tmp$0.$typeInfo = _ConsoleWrappingImplementation$Dart.$lookupRTT();
  _ConsoleWrappingImplementation$Dart.$Initializer.call(tmp$0);
  _ConsoleWrappingImplementation$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
_ConsoleWrappingImplementation$Dart.create__ConsoleWrappingImplementation$member = function(){
  return _ConsoleWrappingImplementation$Dart._ConsoleWrappingImplementation$$Factory();
}
;
_ConsoleWrappingImplementation$Dart.create__ConsoleWrappingImplementation$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _ConsoleWrappingImplementation$Dart.create__ConsoleWrappingImplementation$member();
}
;
function native__ConsoleWrappingImplementation_create__ConsoleWrappingImplementation(){
  return _ConsoleWrappingImplementation$Dart.create__ConsoleWrappingImplementation$member();
}

_ConsoleWrappingImplementation$Dart.create__ConsoleWrappingImplementation$getter = function create__ConsoleWrappingImplementation$getter(){
  return _ConsoleWrappingImplementation$Dart.create__ConsoleWrappingImplementation$named;
}
;
_ConsoleWrappingImplementation$Dart.prototype.memory$named = function(){
  return this.memory$getter().apply(this, arguments);
}
;
_ConsoleWrappingImplementation$Dart.prototype.memory$getter = function(){
  return _ConsoleWrappingImplementation$Dart._get__Console_memory$$member_(this);
}
;
_ConsoleWrappingImplementation$Dart._get__Console_memory$$member_ = function(_this){
  return native__ConsoleWrappingImplementation__get__Console_memory(_this);
}
;
_ConsoleWrappingImplementation$Dart._get__Console_memory$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _ConsoleWrappingImplementation$Dart._get__Console_memory$$member_(_this);
}
;
_ConsoleWrappingImplementation$Dart._get__Console_memory$$getter_ = function _get__Console_memory$$getter_(){
  return _ConsoleWrappingImplementation$Dart._get__Console_memory$$named_;
}
;
_ConsoleWrappingImplementation$Dart.prototype.assert$member = function(condition){
  _ConsoleWrappingImplementation$Dart._assert$$member_(this, condition);
  return;
}
;
_ConsoleWrappingImplementation$Dart.prototype.assert$named = function($n, $o, condition){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _ConsoleWrappingImplementation$Dart.prototype.assert$member.call(this, condition);
}
;
_ConsoleWrappingImplementation$Dart.prototype.assert$getter = function assert$getter(){
  return $bind(_ConsoleWrappingImplementation$Dart.prototype.assert$named, this);
}
;
_ConsoleWrappingImplementation$Dart._assert$$member_ = function(receiver, condition){
  return native__ConsoleWrappingImplementation__assert(receiver, condition);
}
;
_ConsoleWrappingImplementation$Dart._assert$$named_ = function($n, $o, receiver, condition){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _ConsoleWrappingImplementation$Dart._assert$$member_(receiver, condition);
}
;
_ConsoleWrappingImplementation$Dart._assert$$getter_ = function _assert$$getter_(){
  return _ConsoleWrappingImplementation$Dart._assert$$named_;
}
;
_ConsoleWrappingImplementation$Dart.prototype.count$member = function(){
  _ConsoleWrappingImplementation$Dart._count$$member_(this);
  return;
}
;
_ConsoleWrappingImplementation$Dart.prototype.count$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _ConsoleWrappingImplementation$Dart.prototype.count$member.call(this);
}
;
_ConsoleWrappingImplementation$Dart.prototype.count$getter = function count$getter(){
  return $bind(_ConsoleWrappingImplementation$Dart.prototype.count$named, this);
}
;
_ConsoleWrappingImplementation$Dart._count$$member_ = function(receiver){
  return native__ConsoleWrappingImplementation__count(receiver);
}
;
_ConsoleWrappingImplementation$Dart._count$$named_ = function($n, $o, receiver){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _ConsoleWrappingImplementation$Dart._count$$member_(receiver);
}
;
_ConsoleWrappingImplementation$Dart._count$$getter_ = function _count$$getter_(){
  return _ConsoleWrappingImplementation$Dart._count$$named_;
}
;
_ConsoleWrappingImplementation$Dart.prototype.debug$member = function(arg){
  _ConsoleWrappingImplementation$Dart._debug$$member_(this, arg);
  return;
}
;
_ConsoleWrappingImplementation$Dart.prototype.debug$named = function($n, $o, arg){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _ConsoleWrappingImplementation$Dart.prototype.debug$member.call(this, arg);
}
;
_ConsoleWrappingImplementation$Dart.prototype.debug$getter = function debug$getter(){
  return $bind(_ConsoleWrappingImplementation$Dart.prototype.debug$named, this);
}
;
_ConsoleWrappingImplementation$Dart._debug$$member_ = function(receiver, arg){
  return native__ConsoleWrappingImplementation__debug(receiver, arg);
}
;
_ConsoleWrappingImplementation$Dart._debug$$named_ = function($n, $o, receiver, arg){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _ConsoleWrappingImplementation$Dart._debug$$member_(receiver, arg);
}
;
_ConsoleWrappingImplementation$Dart._debug$$getter_ = function _debug$$getter_(){
  return _ConsoleWrappingImplementation$Dart._debug$$named_;
}
;
_ConsoleWrappingImplementation$Dart.prototype.dir$member = function(){
  _ConsoleWrappingImplementation$Dart._dir$$member_(this);
  return;
}
;
_ConsoleWrappingImplementation$Dart.prototype.dir$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _ConsoleWrappingImplementation$Dart.prototype.dir$member.call(this);
}
;
_ConsoleWrappingImplementation$Dart.prototype.dir$getter = function dir$getter(){
  return $bind(_ConsoleWrappingImplementation$Dart.prototype.dir$named, this);
}
;
_ConsoleWrappingImplementation$Dart._dir$$member_ = function(receiver){
  return native__ConsoleWrappingImplementation__dir(receiver);
}
;
_ConsoleWrappingImplementation$Dart._dir$$named_ = function($n, $o, receiver){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _ConsoleWrappingImplementation$Dart._dir$$member_(receiver);
}
;
_ConsoleWrappingImplementation$Dart._dir$$getter_ = function _dir$$getter_(){
  return _ConsoleWrappingImplementation$Dart._dir$$named_;
}
;
_ConsoleWrappingImplementation$Dart.prototype.dirxml$member = function(){
  _ConsoleWrappingImplementation$Dart._dirxml$$member_(this);
  return;
}
;
_ConsoleWrappingImplementation$Dart.prototype.dirxml$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _ConsoleWrappingImplementation$Dart.prototype.dirxml$member.call(this);
}
;
_ConsoleWrappingImplementation$Dart.prototype.dirxml$getter = function dirxml$getter(){
  return $bind(_ConsoleWrappingImplementation$Dart.prototype.dirxml$named, this);
}
;
_ConsoleWrappingImplementation$Dart._dirxml$$member_ = function(receiver){
  return native__ConsoleWrappingImplementation__dirxml(receiver);
}
;
_ConsoleWrappingImplementation$Dart._dirxml$$named_ = function($n, $o, receiver){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _ConsoleWrappingImplementation$Dart._dirxml$$member_(receiver);
}
;
_ConsoleWrappingImplementation$Dart._dirxml$$getter_ = function _dirxml$$getter_(){
  return _ConsoleWrappingImplementation$Dart._dirxml$$named_;
}
;
_ConsoleWrappingImplementation$Dart.prototype.error$member = function(arg){
  _ConsoleWrappingImplementation$Dart._error$$member_(this, arg);
  return;
}
;
_ConsoleWrappingImplementation$Dart.prototype.error$named = function($n, $o, arg){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _ConsoleWrappingImplementation$Dart.prototype.error$member.call(this, arg);
}
;
_ConsoleWrappingImplementation$Dart.prototype.error$getter = function error$getter(){
  return $bind(_ConsoleWrappingImplementation$Dart.prototype.error$named, this);
}
;
_ConsoleWrappingImplementation$Dart._error$$member_ = function(receiver, arg){
  return native__ConsoleWrappingImplementation__error(receiver, arg);
}
;
_ConsoleWrappingImplementation$Dart._error$$named_ = function($n, $o, receiver, arg){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _ConsoleWrappingImplementation$Dart._error$$member_(receiver, arg);
}
;
_ConsoleWrappingImplementation$Dart._error$$getter_ = function _error$$getter_(){
  return _ConsoleWrappingImplementation$Dart._error$$named_;
}
;
_ConsoleWrappingImplementation$Dart.prototype.group$member = function(){
  _ConsoleWrappingImplementation$Dart._group$$member_(this);
  return;
}
;
_ConsoleWrappingImplementation$Dart.prototype.group$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _ConsoleWrappingImplementation$Dart.prototype.group$member.call(this);
}
;
_ConsoleWrappingImplementation$Dart.prototype.group$getter = function group$getter(){
  return $bind(_ConsoleWrappingImplementation$Dart.prototype.group$named, this);
}
;
_ConsoleWrappingImplementation$Dart._group$$member_ = function(receiver){
  return native__ConsoleWrappingImplementation__group(receiver);
}
;
_ConsoleWrappingImplementation$Dart._group$$named_ = function($n, $o, receiver){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _ConsoleWrappingImplementation$Dart._group$$member_(receiver);
}
;
_ConsoleWrappingImplementation$Dart._group$$getter_ = function _group$$getter_(){
  return _ConsoleWrappingImplementation$Dart._group$$named_;
}
;
_ConsoleWrappingImplementation$Dart.prototype.groupCollapsed$member = function(){
  _ConsoleWrappingImplementation$Dart._groupCollapsed$$member_(this);
  return;
}
;
_ConsoleWrappingImplementation$Dart.prototype.groupCollapsed$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _ConsoleWrappingImplementation$Dart.prototype.groupCollapsed$member.call(this);
}
;
_ConsoleWrappingImplementation$Dart.prototype.groupCollapsed$getter = function groupCollapsed$getter(){
  return $bind(_ConsoleWrappingImplementation$Dart.prototype.groupCollapsed$named, this);
}
;
_ConsoleWrappingImplementation$Dart._groupCollapsed$$member_ = function(receiver){
  return native__ConsoleWrappingImplementation__groupCollapsed(receiver);
}
;
_ConsoleWrappingImplementation$Dart._groupCollapsed$$named_ = function($n, $o, receiver){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _ConsoleWrappingImplementation$Dart._groupCollapsed$$member_(receiver);
}
;
_ConsoleWrappingImplementation$Dart._groupCollapsed$$getter_ = function _groupCollapsed$$getter_(){
  return _ConsoleWrappingImplementation$Dart._groupCollapsed$$named_;
}
;
_ConsoleWrappingImplementation$Dart.prototype.groupEnd$member = function(){
  _ConsoleWrappingImplementation$Dart._groupEnd$$member_(this);
  return;
}
;
_ConsoleWrappingImplementation$Dart.prototype.groupEnd$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _ConsoleWrappingImplementation$Dart.prototype.groupEnd$member.call(this);
}
;
_ConsoleWrappingImplementation$Dart.prototype.groupEnd$getter = function groupEnd$getter(){
  return $bind(_ConsoleWrappingImplementation$Dart.prototype.groupEnd$named, this);
}
;
_ConsoleWrappingImplementation$Dart._groupEnd$$member_ = function(receiver){
  return native__ConsoleWrappingImplementation__groupEnd(receiver);
}
;
_ConsoleWrappingImplementation$Dart._groupEnd$$named_ = function($n, $o, receiver){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _ConsoleWrappingImplementation$Dart._groupEnd$$member_(receiver);
}
;
_ConsoleWrappingImplementation$Dart._groupEnd$$getter_ = function _groupEnd$$getter_(){
  return _ConsoleWrappingImplementation$Dart._groupEnd$$named_;
}
;
_ConsoleWrappingImplementation$Dart.prototype.info$member = function(arg){
  _ConsoleWrappingImplementation$Dart._info$$member_(this, arg);
  return;
}
;
_ConsoleWrappingImplementation$Dart.prototype.info$named = function($n, $o, arg){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _ConsoleWrappingImplementation$Dart.prototype.info$member.call(this, arg);
}
;
_ConsoleWrappingImplementation$Dart.prototype.info$getter = function info$getter(){
  return $bind(_ConsoleWrappingImplementation$Dart.prototype.info$named, this);
}
;
_ConsoleWrappingImplementation$Dart._info$$member_ = function(receiver, arg){
  return native__ConsoleWrappingImplementation__info(receiver, arg);
}
;
_ConsoleWrappingImplementation$Dart._info$$named_ = function($n, $o, receiver, arg){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _ConsoleWrappingImplementation$Dart._info$$member_(receiver, arg);
}
;
_ConsoleWrappingImplementation$Dart._info$$getter_ = function _info$$getter_(){
  return _ConsoleWrappingImplementation$Dart._info$$named_;
}
;
_ConsoleWrappingImplementation$Dart.prototype.log$member = function(arg){
  _ConsoleWrappingImplementation$Dart._log$$member_(this, arg);
  return;
}
;
_ConsoleWrappingImplementation$Dart.prototype.log$named = function($n, $o, arg){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _ConsoleWrappingImplementation$Dart.prototype.log$member.call(this, arg);
}
;
_ConsoleWrappingImplementation$Dart.prototype.log$getter = function log$getter(){
  return $bind(_ConsoleWrappingImplementation$Dart.prototype.log$named, this);
}
;
_ConsoleWrappingImplementation$Dart._log$$member_ = function(receiver, arg){
  return native__ConsoleWrappingImplementation__log(receiver, arg);
}
;
_ConsoleWrappingImplementation$Dart._log$$named_ = function($n, $o, receiver, arg){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _ConsoleWrappingImplementation$Dart._log$$member_(receiver, arg);
}
;
_ConsoleWrappingImplementation$Dart._log$$getter_ = function _log$$getter_(){
  return _ConsoleWrappingImplementation$Dart._log$$named_;
}
;
_ConsoleWrappingImplementation$Dart.prototype.markTimeline$member = function(){
  _ConsoleWrappingImplementation$Dart._markTimeline$$member_(this);
  return;
}
;
_ConsoleWrappingImplementation$Dart.prototype.markTimeline$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _ConsoleWrappingImplementation$Dart.prototype.markTimeline$member.call(this);
}
;
_ConsoleWrappingImplementation$Dart.prototype.markTimeline$getter = function markTimeline$getter(){
  return $bind(_ConsoleWrappingImplementation$Dart.prototype.markTimeline$named, this);
}
;
_ConsoleWrappingImplementation$Dart._markTimeline$$member_ = function(receiver){
  return native__ConsoleWrappingImplementation__markTimeline(receiver);
}
;
_ConsoleWrappingImplementation$Dart._markTimeline$$named_ = function($n, $o, receiver){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _ConsoleWrappingImplementation$Dart._markTimeline$$member_(receiver);
}
;
_ConsoleWrappingImplementation$Dart._markTimeline$$getter_ = function _markTimeline$$getter_(){
  return _ConsoleWrappingImplementation$Dart._markTimeline$$named_;
}
;
_ConsoleWrappingImplementation$Dart.prototype.time$member = function(title){
  _ConsoleWrappingImplementation$Dart._time$$member_(this, title);
  return;
}
;
_ConsoleWrappingImplementation$Dart.prototype.time$named = function($n, $o, title){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _ConsoleWrappingImplementation$Dart.prototype.time$member.call(this, title);
}
;
_ConsoleWrappingImplementation$Dart.prototype.time$getter = function time$getter(){
  return $bind(_ConsoleWrappingImplementation$Dart.prototype.time$named, this);
}
;
_ConsoleWrappingImplementation$Dart._time$$member_ = function(receiver, title){
  return native__ConsoleWrappingImplementation__time(receiver, title);
}
;
_ConsoleWrappingImplementation$Dart._time$$named_ = function($n, $o, receiver, title){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _ConsoleWrappingImplementation$Dart._time$$member_(receiver, title);
}
;
_ConsoleWrappingImplementation$Dart._time$$getter_ = function _time$$getter_(){
  return _ConsoleWrappingImplementation$Dart._time$$named_;
}
;
_ConsoleWrappingImplementation$Dart.prototype.timeEnd$member = function(title){
  _ConsoleWrappingImplementation$Dart._timeEnd$$member_(this, title);
  return;
}
;
_ConsoleWrappingImplementation$Dart.prototype.timeEnd$named = function($n, $o, title){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _ConsoleWrappingImplementation$Dart.prototype.timeEnd$member.call(this, title);
}
;
_ConsoleWrappingImplementation$Dart.prototype.timeEnd$getter = function timeEnd$getter(){
  return $bind(_ConsoleWrappingImplementation$Dart.prototype.timeEnd$named, this);
}
;
_ConsoleWrappingImplementation$Dart._timeEnd$$member_ = function(receiver, title){
  return native__ConsoleWrappingImplementation__timeEnd(receiver, title);
}
;
_ConsoleWrappingImplementation$Dart._timeEnd$$named_ = function($n, $o, receiver, title){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _ConsoleWrappingImplementation$Dart._timeEnd$$member_(receiver, title);
}
;
_ConsoleWrappingImplementation$Dart._timeEnd$$getter_ = function _timeEnd$$getter_(){
  return _ConsoleWrappingImplementation$Dart._timeEnd$$named_;
}
;
_ConsoleWrappingImplementation$Dart.prototype.timeStamp$member = function(){
  _ConsoleWrappingImplementation$Dart._timeStamp$$member_(this);
  return;
}
;
_ConsoleWrappingImplementation$Dart.prototype.timeStamp$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _ConsoleWrappingImplementation$Dart.prototype.timeStamp$member.call(this);
}
;
_ConsoleWrappingImplementation$Dart.prototype.timeStamp$getter = function timeStamp$getter(){
  return $bind(_ConsoleWrappingImplementation$Dart.prototype.timeStamp$named, this);
}
;
_ConsoleWrappingImplementation$Dart._timeStamp$$member_ = function(receiver){
  return native__ConsoleWrappingImplementation__timeStamp(receiver);
}
;
_ConsoleWrappingImplementation$Dart._timeStamp$$named_ = function($n, $o, receiver){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _ConsoleWrappingImplementation$Dart._timeStamp$$member_(receiver);
}
;
_ConsoleWrappingImplementation$Dart._timeStamp$$getter_ = function _timeStamp$$getter_(){
  return _ConsoleWrappingImplementation$Dart._timeStamp$$named_;
}
;
_ConsoleWrappingImplementation$Dart.prototype.trace$member = function(arg){
  _ConsoleWrappingImplementation$Dart._trace$$member_(this, arg);
  return;
}
;
_ConsoleWrappingImplementation$Dart.prototype.trace$named = function($n, $o, arg){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _ConsoleWrappingImplementation$Dart.prototype.trace$member.call(this, arg);
}
;
_ConsoleWrappingImplementation$Dart.prototype.trace$getter = function trace$getter(){
  return $bind(_ConsoleWrappingImplementation$Dart.prototype.trace$named, this);
}
;
_ConsoleWrappingImplementation$Dart._trace$$member_ = function(receiver, arg){
  return native__ConsoleWrappingImplementation__trace(receiver, arg);
}
;
_ConsoleWrappingImplementation$Dart._trace$$named_ = function($n, $o, receiver, arg){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _ConsoleWrappingImplementation$Dart._trace$$member_(receiver, arg);
}
;
_ConsoleWrappingImplementation$Dart._trace$$getter_ = function _trace$$getter_(){
  return _ConsoleWrappingImplementation$Dart._trace$$named_;
}
;
_ConsoleWrappingImplementation$Dart.prototype.warn$member = function(arg){
  _ConsoleWrappingImplementation$Dart._warn$$member_(this, arg);
  return;
}
;
_ConsoleWrappingImplementation$Dart.prototype.warn$named = function($n, $o, arg){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _ConsoleWrappingImplementation$Dart.prototype.warn$member.call(this, arg);
}
;
_ConsoleWrappingImplementation$Dart.prototype.warn$getter = function warn$getter(){
  return $bind(_ConsoleWrappingImplementation$Dart.prototype.warn$named, this);
}
;
_ConsoleWrappingImplementation$Dart._warn$$member_ = function(receiver, arg){
  return native__ConsoleWrappingImplementation__warn(receiver, arg);
}
;
_ConsoleWrappingImplementation$Dart._warn$$named_ = function($n, $o, receiver, arg){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _ConsoleWrappingImplementation$Dart._warn$$member_(receiver, arg);
}
;
_ConsoleWrappingImplementation$Dart._warn$$getter_ = function _warn$$getter_(){
  return _ConsoleWrappingImplementation$Dart._warn$$named_;
}
;
_ConsoleWrappingImplementation$Dart.prototype.typeName$named = function(){
  return this.typeName$getter().apply(this, arguments);
}
;
_ConsoleWrappingImplementation$Dart.prototype.typeName$getter = function(){
  return 'Console';
}
;
