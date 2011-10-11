function _TouchEventWrappingImplementation$Dart(){
}

_TouchEventWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('_TouchEventWrappingImplementation$Dart'), _TouchEventWrappingImplementation$Dart.$RTTimplements);
}
;
_TouchEventWrappingImplementation$Dart.$RTTimplements = function(rtt){
  _TouchEventWrappingImplementation$Dart.$addTo(rtt);
}
;
_TouchEventWrappingImplementation$Dart.$addTo = function(target){
  var rtt = _TouchEventWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  _UIEventWrappingImplementation$Dart.$addTo(target);
  TouchEvent$Dart.$addTo(target);
}
;
_TouchEventWrappingImplementation$Dart.prototype.$implements$_TouchEventWrappingImplementation$Dart = 1;
_TouchEventWrappingImplementation$Dart.prototype.$implements$TouchEvent$Dart = 1;
_TouchEventWrappingImplementation$Dart.prototype.$implements$UIEvent$Dart = 1;
_TouchEventWrappingImplementation$Dart.prototype.$implements$Event$Dart = 1;
_TouchEventWrappingImplementation$Dart.prototype.$implements$_UIEventWrappingImplementation$Dart = 1;
_TouchEventWrappingImplementation$Dart.prototype.$implements$_EventWrappingImplementation$Dart = 1;
_TouchEventWrappingImplementation$Dart.prototype.$implements$DOMWrapperBase$Dart = 1;
_TouchEventWrappingImplementation$Dart.prototype.$implements$DOMType$Dart = 1;
_TouchEventWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(_TouchEventWrappingImplementation$Dart, _UIEventWrappingImplementation$Dart);
_TouchEventWrappingImplementation$Dart.$Constructor = function(){
  _UIEventWrappingImplementation$Dart.$Constructor.call(this);
}
;
_TouchEventWrappingImplementation$Dart.$Initializer = function(){
  _UIEventWrappingImplementation$Dart.$Initializer.call(this);
}
;
_TouchEventWrappingImplementation$Dart._TouchEventWrappingImplementation$$Factory = function(){
  var tmp$0 = new _TouchEventWrappingImplementation$Dart;
  tmp$0.$typeInfo = _TouchEventWrappingImplementation$Dart.$lookupRTT();
  _TouchEventWrappingImplementation$Dart.$Initializer.call(tmp$0);
  _TouchEventWrappingImplementation$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
_TouchEventWrappingImplementation$Dart.create__TouchEventWrappingImplementation$member = function(){
  return _TouchEventWrappingImplementation$Dart._TouchEventWrappingImplementation$$Factory();
}
;
_TouchEventWrappingImplementation$Dart.create__TouchEventWrappingImplementation$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _TouchEventWrappingImplementation$Dart.create__TouchEventWrappingImplementation$member();
}
;
function native__TouchEventWrappingImplementation_create__TouchEventWrappingImplementation(){
  return _TouchEventWrappingImplementation$Dart.create__TouchEventWrappingImplementation$member();
}

_TouchEventWrappingImplementation$Dart.create__TouchEventWrappingImplementation$getter = function create__TouchEventWrappingImplementation$getter(){
  return _TouchEventWrappingImplementation$Dart.create__TouchEventWrappingImplementation$named;
}
;
_TouchEventWrappingImplementation$Dart.prototype.altKey$named = function(){
  return this.altKey$getter().apply(this, arguments);
}
;
_TouchEventWrappingImplementation$Dart.prototype.altKey$getter = function(){
  return _TouchEventWrappingImplementation$Dart._get__TouchEvent_altKey$$member_(this);
}
;
_TouchEventWrappingImplementation$Dart._get__TouchEvent_altKey$$member_ = function(_this){
  return native__TouchEventWrappingImplementation__get__TouchEvent_altKey(_this);
}
;
_TouchEventWrappingImplementation$Dart._get__TouchEvent_altKey$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _TouchEventWrappingImplementation$Dart._get__TouchEvent_altKey$$member_(_this);
}
;
_TouchEventWrappingImplementation$Dart._get__TouchEvent_altKey$$getter_ = function _get__TouchEvent_altKey$$getter_(){
  return _TouchEventWrappingImplementation$Dart._get__TouchEvent_altKey$$named_;
}
;
_TouchEventWrappingImplementation$Dart.prototype.changedTouches$named = function(){
  return this.changedTouches$getter().apply(this, arguments);
}
;
_TouchEventWrappingImplementation$Dart.prototype.changedTouches$getter = function(){
  return _TouchEventWrappingImplementation$Dart._get__TouchEvent_changedTouches$$member_(this);
}
;
_TouchEventWrappingImplementation$Dart._get__TouchEvent_changedTouches$$member_ = function(_this){
  return native__TouchEventWrappingImplementation__get__TouchEvent_changedTouches(_this);
}
;
_TouchEventWrappingImplementation$Dart._get__TouchEvent_changedTouches$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _TouchEventWrappingImplementation$Dart._get__TouchEvent_changedTouches$$member_(_this);
}
;
_TouchEventWrappingImplementation$Dart._get__TouchEvent_changedTouches$$getter_ = function _get__TouchEvent_changedTouches$$getter_(){
  return _TouchEventWrappingImplementation$Dart._get__TouchEvent_changedTouches$$named_;
}
;
_TouchEventWrappingImplementation$Dart.prototype.ctrlKey$named = function(){
  return this.ctrlKey$getter().apply(this, arguments);
}
;
_TouchEventWrappingImplementation$Dart.prototype.ctrlKey$getter = function(){
  return _TouchEventWrappingImplementation$Dart._get__TouchEvent_ctrlKey$$member_(this);
}
;
_TouchEventWrappingImplementation$Dart._get__TouchEvent_ctrlKey$$member_ = function(_this){
  return native__TouchEventWrappingImplementation__get__TouchEvent_ctrlKey(_this);
}
;
_TouchEventWrappingImplementation$Dart._get__TouchEvent_ctrlKey$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _TouchEventWrappingImplementation$Dart._get__TouchEvent_ctrlKey$$member_(_this);
}
;
_TouchEventWrappingImplementation$Dart._get__TouchEvent_ctrlKey$$getter_ = function _get__TouchEvent_ctrlKey$$getter_(){
  return _TouchEventWrappingImplementation$Dart._get__TouchEvent_ctrlKey$$named_;
}
;
_TouchEventWrappingImplementation$Dart.prototype.metaKey$named = function(){
  return this.metaKey$getter().apply(this, arguments);
}
;
_TouchEventWrappingImplementation$Dart.prototype.metaKey$getter = function(){
  return _TouchEventWrappingImplementation$Dart._get__TouchEvent_metaKey$$member_(this);
}
;
_TouchEventWrappingImplementation$Dart._get__TouchEvent_metaKey$$member_ = function(_this){
  return native__TouchEventWrappingImplementation__get__TouchEvent_metaKey(_this);
}
;
_TouchEventWrappingImplementation$Dart._get__TouchEvent_metaKey$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _TouchEventWrappingImplementation$Dart._get__TouchEvent_metaKey$$member_(_this);
}
;
_TouchEventWrappingImplementation$Dart._get__TouchEvent_metaKey$$getter_ = function _get__TouchEvent_metaKey$$getter_(){
  return _TouchEventWrappingImplementation$Dart._get__TouchEvent_metaKey$$named_;
}
;
_TouchEventWrappingImplementation$Dart.prototype.shiftKey$named = function(){
  return this.shiftKey$getter().apply(this, arguments);
}
;
_TouchEventWrappingImplementation$Dart.prototype.shiftKey$getter = function(){
  return _TouchEventWrappingImplementation$Dart._get__TouchEvent_shiftKey$$member_(this);
}
;
_TouchEventWrappingImplementation$Dart._get__TouchEvent_shiftKey$$member_ = function(_this){
  return native__TouchEventWrappingImplementation__get__TouchEvent_shiftKey(_this);
}
;
_TouchEventWrappingImplementation$Dart._get__TouchEvent_shiftKey$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _TouchEventWrappingImplementation$Dart._get__TouchEvent_shiftKey$$member_(_this);
}
;
_TouchEventWrappingImplementation$Dart._get__TouchEvent_shiftKey$$getter_ = function _get__TouchEvent_shiftKey$$getter_(){
  return _TouchEventWrappingImplementation$Dart._get__TouchEvent_shiftKey$$named_;
}
;
_TouchEventWrappingImplementation$Dart.prototype.targetTouches$named = function(){
  return this.targetTouches$getter().apply(this, arguments);
}
;
_TouchEventWrappingImplementation$Dart.prototype.targetTouches$getter = function(){
  return _TouchEventWrappingImplementation$Dart._get__TouchEvent_targetTouches$$member_(this);
}
;
_TouchEventWrappingImplementation$Dart._get__TouchEvent_targetTouches$$member_ = function(_this){
  return native__TouchEventWrappingImplementation__get__TouchEvent_targetTouches(_this);
}
;
_TouchEventWrappingImplementation$Dart._get__TouchEvent_targetTouches$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _TouchEventWrappingImplementation$Dart._get__TouchEvent_targetTouches$$member_(_this);
}
;
_TouchEventWrappingImplementation$Dart._get__TouchEvent_targetTouches$$getter_ = function _get__TouchEvent_targetTouches$$getter_(){
  return _TouchEventWrappingImplementation$Dart._get__TouchEvent_targetTouches$$named_;
}
;
_TouchEventWrappingImplementation$Dart.prototype.touches$named = function(){
  return this.touches$getter().apply(this, arguments);
}
;
_TouchEventWrappingImplementation$Dart.prototype.touches$getter = function(){
  return _TouchEventWrappingImplementation$Dart._get__TouchEvent_touches$$member_(this);
}
;
_TouchEventWrappingImplementation$Dart._get__TouchEvent_touches$$member_ = function(_this){
  return native__TouchEventWrappingImplementation__get__TouchEvent_touches(_this);
}
;
_TouchEventWrappingImplementation$Dart._get__TouchEvent_touches$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _TouchEventWrappingImplementation$Dart._get__TouchEvent_touches$$member_(_this);
}
;
_TouchEventWrappingImplementation$Dart._get__TouchEvent_touches$$getter_ = function _get__TouchEvent_touches$$getter_(){
  return _TouchEventWrappingImplementation$Dart._get__TouchEvent_touches$$named_;
}
;
_TouchEventWrappingImplementation$Dart.prototype.initTouchEvent$member = function(touches, targetTouches, changedTouches, type, view, screenX, screenY, clientX, clientY, ctrlKey, altKey, shiftKey, metaKey){
  _TouchEventWrappingImplementation$Dart._initTouchEvent$$member_(this, touches, targetTouches, changedTouches, type, view, screenX, screenY, clientX, clientY, ctrlKey, altKey, shiftKey, metaKey);
  return;
}
;
_TouchEventWrappingImplementation$Dart.prototype.initTouchEvent$named = function($n, $o, touches, targetTouches, changedTouches, type, view, screenX, screenY, clientX, clientY, ctrlKey, altKey, shiftKey, metaKey){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 13)
    $nsme();
  return _TouchEventWrappingImplementation$Dart.prototype.initTouchEvent$member.call(this, touches, targetTouches, changedTouches, type, view, screenX, screenY, clientX, clientY, ctrlKey, altKey, shiftKey, metaKey);
}
;
_TouchEventWrappingImplementation$Dart.prototype.initTouchEvent$getter = function initTouchEvent$getter(){
  return $bind(_TouchEventWrappingImplementation$Dart.prototype.initTouchEvent$named, this);
}
;
_TouchEventWrappingImplementation$Dart._initTouchEvent$$member_ = function(receiver, touches, targetTouches, changedTouches, type, view, screenX, screenY, clientX, clientY, ctrlKey, altKey, shiftKey, metaKey){
  return native__TouchEventWrappingImplementation__initTouchEvent(receiver, touches, targetTouches, changedTouches, type, view, screenX, screenY, clientX, clientY, ctrlKey, altKey, shiftKey, metaKey);
}
;
_TouchEventWrappingImplementation$Dart._initTouchEvent$$named_ = function($n, $o, receiver, touches, targetTouches, changedTouches, type, view, screenX, screenY, clientX, clientY, ctrlKey, altKey, shiftKey, metaKey){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 14)
    $nsme();
  return _TouchEventWrappingImplementation$Dart._initTouchEvent$$member_(receiver, touches, targetTouches, changedTouches, type, view, screenX, screenY, clientX, clientY, ctrlKey, altKey, shiftKey, metaKey);
}
;
_TouchEventWrappingImplementation$Dart._initTouchEvent$$getter_ = function _initTouchEvent$$getter_(){
  return _TouchEventWrappingImplementation$Dart._initTouchEvent$$named_;
}
;
_TouchEventWrappingImplementation$Dart.prototype.typeName$named = function(){
  return this.typeName$getter().apply(this, arguments);
}
;
_TouchEventWrappingImplementation$Dart.prototype.typeName$getter = function(){
  return 'TouchEvent';
}
;
