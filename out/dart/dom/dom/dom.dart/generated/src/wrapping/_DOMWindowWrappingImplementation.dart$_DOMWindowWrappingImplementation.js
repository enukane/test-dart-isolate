function _DOMWindowWrappingImplementation$Dart(){
}

_DOMWindowWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('_DOMWindowWrappingImplementation$Dart'), _DOMWindowWrappingImplementation$Dart.$RTTimplements);
}
;
_DOMWindowWrappingImplementation$Dart.$RTTimplements = function(rtt){
  _DOMWindowWrappingImplementation$Dart.$addTo(rtt);
}
;
_DOMWindowWrappingImplementation$Dart.$addTo = function(target){
  var rtt = _DOMWindowWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  DOMWrapperBase$Dart.$addTo(target);
  DOMWindow$Dart.$addTo(target);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.$implements$_DOMWindowWrappingImplementation$Dart = 1;
_DOMWindowWrappingImplementation$Dart.prototype.$implements$DOMWindow$Dart = 1;
_DOMWindowWrappingImplementation$Dart.prototype.$implements$Window$Dart = 1;
_DOMWindowWrappingImplementation$Dart.prototype.$implements$EventTarget$Dart = 1;
_DOMWindowWrappingImplementation$Dart.prototype.$implements$DOMWrapperBase$Dart = 1;
_DOMWindowWrappingImplementation$Dart.prototype.$implements$DOMType$Dart = 1;
_DOMWindowWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(_DOMWindowWrappingImplementation$Dart, DOMWrapperBase$Dart);
_DOMWindowWrappingImplementation$Dart.$Constructor = function(){
  DOMWrapperBase$Dart.$Constructor.call(this);
}
;
_DOMWindowWrappingImplementation$Dart.$Initializer = function(){
  DOMWrapperBase$Dart.$Initializer.call(this);
}
;
_DOMWindowWrappingImplementation$Dart._DOMWindowWrappingImplementation$$Factory = function(){
  var tmp$0 = new _DOMWindowWrappingImplementation$Dart;
  tmp$0.$typeInfo = _DOMWindowWrappingImplementation$Dart.$lookupRTT();
  _DOMWindowWrappingImplementation$Dart.$Initializer.call(tmp$0);
  _DOMWindowWrappingImplementation$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
_DOMWindowWrappingImplementation$Dart.create__DOMWindowWrappingImplementation$member = function(){
  return _DOMWindowWrappingImplementation$Dart._DOMWindowWrappingImplementation$$Factory();
}
;
_DOMWindowWrappingImplementation$Dart.create__DOMWindowWrappingImplementation$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart.create__DOMWindowWrappingImplementation$member();
}
;
function native__DOMWindowWrappingImplementation_create__DOMWindowWrappingImplementation(){
  return _DOMWindowWrappingImplementation$Dart.create__DOMWindowWrappingImplementation$member();
}

_DOMWindowWrappingImplementation$Dart.create__DOMWindowWrappingImplementation$getter = function create__DOMWindowWrappingImplementation$getter(){
  return _DOMWindowWrappingImplementation$Dart.create__DOMWindowWrappingImplementation$named;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.applicationCache$named = function(){
  return this.applicationCache$getter().apply(this, arguments);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.applicationCache$getter = function(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_applicationCache$$member_(this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_applicationCache$$member_ = function(_this){
  return native__DOMWindowWrappingImplementation__get__DOMWindow_applicationCache(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_applicationCache$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_applicationCache$$member_(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_applicationCache$$getter_ = function _get__DOMWindow_applicationCache$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_applicationCache$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.clientInformation$named = function(){
  return this.clientInformation$getter().apply(this, arguments);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.clientInformation$getter = function(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_clientInformation$$member_(this);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.clientInformation$setter = function(value){
  _DOMWindowWrappingImplementation$Dart._set__DOMWindow_clientInformation$$member_(this, value);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_clientInformation$$member_ = function(_this){
  return native__DOMWindowWrappingImplementation__get__DOMWindow_clientInformation(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_clientInformation$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_clientInformation$$member_(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_clientInformation$$getter_ = function _get__DOMWindow_clientInformation$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_clientInformation$$named_;
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_clientInformation$$member_ = function(_this, value){
  return native__DOMWindowWrappingImplementation__set__DOMWindow_clientInformation(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_clientInformation$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_clientInformation$$member_(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_clientInformation$$getter_ = function _set__DOMWindow_clientInformation$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_clientInformation$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.closed$named = function(){
  return this.closed$getter().apply(this, arguments);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.closed$getter = function(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_closed$$member_(this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_closed$$member_ = function(_this){
  return native__DOMWindowWrappingImplementation__get__DOMWindow_closed(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_closed$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_closed$$member_(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_closed$$getter_ = function _get__DOMWindow_closed$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_closed$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.console$named = function(){
  return this.console$getter().apply(this, arguments);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.console$getter = function(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_console$$member_(this);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.console$setter = function(value){
  _DOMWindowWrappingImplementation$Dart._set__DOMWindow_console$$member_(this, value);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_console$$member_ = function(_this){
  return native__DOMWindowWrappingImplementation__get__DOMWindow_console(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_console$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_console$$member_(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_console$$getter_ = function _get__DOMWindow_console$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_console$$named_;
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_console$$member_ = function(_this, value){
  return native__DOMWindowWrappingImplementation__set__DOMWindow_console(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_console$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_console$$member_(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_console$$getter_ = function _set__DOMWindow_console$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_console$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.crypto$named = function(){
  return this.crypto$getter().apply(this, arguments);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.crypto$getter = function(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_crypto$$member_(this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_crypto$$member_ = function(_this){
  return native__DOMWindowWrappingImplementation__get__DOMWindow_crypto(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_crypto$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_crypto$$member_(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_crypto$$getter_ = function _get__DOMWindow_crypto$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_crypto$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.defaultStatus$named = function(){
  return this.defaultStatus$getter().apply(this, arguments);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.defaultStatus$getter = function(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_defaultStatus$$member_(this);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.defaultStatus$setter = function(value){
  _DOMWindowWrappingImplementation$Dart._set__DOMWindow_defaultStatus$$member_(this, value);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_defaultStatus$$member_ = function(_this){
  return native__DOMWindowWrappingImplementation__get__DOMWindow_defaultStatus(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_defaultStatus$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_defaultStatus$$member_(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_defaultStatus$$getter_ = function _get__DOMWindow_defaultStatus$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_defaultStatus$$named_;
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_defaultStatus$$member_ = function(_this, value){
  return native__DOMWindowWrappingImplementation__set__DOMWindow_defaultStatus(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_defaultStatus$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_defaultStatus$$member_(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_defaultStatus$$getter_ = function _set__DOMWindow_defaultStatus$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_defaultStatus$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.devicePixelRatio$named = function(){
  return this.devicePixelRatio$getter().apply(this, arguments);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.devicePixelRatio$getter = function(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_devicePixelRatio$$member_(this);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.devicePixelRatio$setter = function(value){
  _DOMWindowWrappingImplementation$Dart._set__DOMWindow_devicePixelRatio$$member_(this, value);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_devicePixelRatio$$member_ = function(_this){
  return native__DOMWindowWrappingImplementation__get__DOMWindow_devicePixelRatio(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_devicePixelRatio$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_devicePixelRatio$$member_(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_devicePixelRatio$$getter_ = function _get__DOMWindow_devicePixelRatio$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_devicePixelRatio$$named_;
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_devicePixelRatio$$member_ = function(_this, value){
  return native__DOMWindowWrappingImplementation__set__DOMWindow_devicePixelRatio(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_devicePixelRatio$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_devicePixelRatio$$member_(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_devicePixelRatio$$getter_ = function _set__DOMWindow_devicePixelRatio$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_devicePixelRatio$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.document$named = function(){
  return this.document$getter().apply(this, arguments);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.document$getter = function(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_document$$member_(this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_document$$member_ = function(_this){
  return native__DOMWindowWrappingImplementation__get__DOMWindow_document(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_document$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_document$$member_(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_document$$getter_ = function _get__DOMWindow_document$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_document$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.event$named = function(){
  return this.event$getter().apply(this, arguments);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.event$getter = function(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_event$$member_(this);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.event$setter = function(value){
  _DOMWindowWrappingImplementation$Dart._set__DOMWindow_event$$member_(this, value);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_event$$member_ = function(_this){
  return native__DOMWindowWrappingImplementation__get__DOMWindow_event(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_event$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_event$$member_(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_event$$getter_ = function _get__DOMWindow_event$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_event$$named_;
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_event$$member_ = function(_this, value){
  return native__DOMWindowWrappingImplementation__set__DOMWindow_event(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_event$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_event$$member_(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_event$$getter_ = function _set__DOMWindow_event$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_event$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.frameElement$named = function(){
  return this.frameElement$getter().apply(this, arguments);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.frameElement$getter = function(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_frameElement$$member_(this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_frameElement$$member_ = function(_this){
  return native__DOMWindowWrappingImplementation__get__DOMWindow_frameElement(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_frameElement$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_frameElement$$member_(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_frameElement$$getter_ = function _get__DOMWindow_frameElement$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_frameElement$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.frames$named = function(){
  return this.frames$getter().apply(this, arguments);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.frames$getter = function(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_frames$$member_(this);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.frames$setter = function(value){
  _DOMWindowWrappingImplementation$Dart._set__DOMWindow_frames$$member_(this, value);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_frames$$member_ = function(_this){
  return native__DOMWindowWrappingImplementation__get__DOMWindow_frames(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_frames$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_frames$$member_(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_frames$$getter_ = function _get__DOMWindow_frames$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_frames$$named_;
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_frames$$member_ = function(_this, value){
  return native__DOMWindowWrappingImplementation__set__DOMWindow_frames(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_frames$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_frames$$member_(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_frames$$getter_ = function _set__DOMWindow_frames$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_frames$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.history$named = function(){
  return this.history$getter().apply(this, arguments);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.history$getter = function(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_history$$member_(this);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.history$setter = function(value){
  _DOMWindowWrappingImplementation$Dart._set__DOMWindow_history$$member_(this, value);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_history$$member_ = function(_this){
  return native__DOMWindowWrappingImplementation__get__DOMWindow_history(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_history$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_history$$member_(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_history$$getter_ = function _get__DOMWindow_history$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_history$$named_;
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_history$$member_ = function(_this, value){
  return native__DOMWindowWrappingImplementation__set__DOMWindow_history(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_history$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_history$$member_(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_history$$getter_ = function _set__DOMWindow_history$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_history$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.innerHeight$named = function(){
  return this.innerHeight$getter().apply(this, arguments);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.innerHeight$getter = function(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_innerHeight$$member_(this);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.innerHeight$setter = function(value){
  _DOMWindowWrappingImplementation$Dart._set__DOMWindow_innerHeight$$member_(this, value);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_innerHeight$$member_ = function(_this){
  return native__DOMWindowWrappingImplementation__get__DOMWindow_innerHeight(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_innerHeight$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_innerHeight$$member_(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_innerHeight$$getter_ = function _get__DOMWindow_innerHeight$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_innerHeight$$named_;
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_innerHeight$$member_ = function(_this, value){
  return native__DOMWindowWrappingImplementation__set__DOMWindow_innerHeight(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_innerHeight$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_innerHeight$$member_(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_innerHeight$$getter_ = function _set__DOMWindow_innerHeight$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_innerHeight$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.innerWidth$named = function(){
  return this.innerWidth$getter().apply(this, arguments);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.innerWidth$getter = function(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_innerWidth$$member_(this);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.innerWidth$setter = function(value){
  _DOMWindowWrappingImplementation$Dart._set__DOMWindow_innerWidth$$member_(this, value);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_innerWidth$$member_ = function(_this){
  return native__DOMWindowWrappingImplementation__get__DOMWindow_innerWidth(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_innerWidth$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_innerWidth$$member_(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_innerWidth$$getter_ = function _get__DOMWindow_innerWidth$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_innerWidth$$named_;
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_innerWidth$$member_ = function(_this, value){
  return native__DOMWindowWrappingImplementation__set__DOMWindow_innerWidth(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_innerWidth$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_innerWidth$$member_(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_innerWidth$$getter_ = function _set__DOMWindow_innerWidth$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_innerWidth$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.length$named = function(){
  return this.length$getter().apply(this, arguments);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.length$getter = function(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_length$$member_(this);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.length$setter = function(value){
  _DOMWindowWrappingImplementation$Dart._set__DOMWindow_length$$member_(this, value);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_length$$member_ = function(_this){
  return native__DOMWindowWrappingImplementation__get__DOMWindow_length(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_length$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_length$$member_(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_length$$getter_ = function _get__DOMWindow_length$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_length$$named_;
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_length$$member_ = function(_this, value){
  return native__DOMWindowWrappingImplementation__set__DOMWindow_length(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_length$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_length$$member_(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_length$$getter_ = function _set__DOMWindow_length$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_length$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.localStorage$named = function(){
  return this.localStorage$getter().apply(this, arguments);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.localStorage$getter = function(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_localStorage$$member_(this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_localStorage$$member_ = function(_this){
  return native__DOMWindowWrappingImplementation__get__DOMWindow_localStorage(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_localStorage$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_localStorage$$member_(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_localStorage$$getter_ = function _get__DOMWindow_localStorage$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_localStorage$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.location$named = function(){
  return this.location$getter().apply(this, arguments);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.location$getter = function(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_location$$member_(this);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.location$setter = function(value){
  _DOMWindowWrappingImplementation$Dart._set__DOMWindow_location$$member_(this, value);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_location$$member_ = function(_this){
  return native__DOMWindowWrappingImplementation__get__DOMWindow_location(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_location$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_location$$member_(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_location$$getter_ = function _get__DOMWindow_location$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_location$$named_;
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_location$$member_ = function(_this, value){
  return native__DOMWindowWrappingImplementation__set__DOMWindow_location(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_location$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_location$$member_(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_location$$getter_ = function _set__DOMWindow_location$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_location$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.locationbar$named = function(){
  return this.locationbar$getter().apply(this, arguments);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.locationbar$getter = function(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_locationbar$$member_(this);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.locationbar$setter = function(value){
  _DOMWindowWrappingImplementation$Dart._set__DOMWindow_locationbar$$member_(this, value);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_locationbar$$member_ = function(_this){
  return native__DOMWindowWrappingImplementation__get__DOMWindow_locationbar(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_locationbar$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_locationbar$$member_(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_locationbar$$getter_ = function _get__DOMWindow_locationbar$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_locationbar$$named_;
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_locationbar$$member_ = function(_this, value){
  return native__DOMWindowWrappingImplementation__set__DOMWindow_locationbar(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_locationbar$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_locationbar$$member_(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_locationbar$$getter_ = function _set__DOMWindow_locationbar$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_locationbar$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.menubar$named = function(){
  return this.menubar$getter().apply(this, arguments);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.menubar$getter = function(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_menubar$$member_(this);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.menubar$setter = function(value){
  _DOMWindowWrappingImplementation$Dart._set__DOMWindow_menubar$$member_(this, value);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_menubar$$member_ = function(_this){
  return native__DOMWindowWrappingImplementation__get__DOMWindow_menubar(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_menubar$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_menubar$$member_(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_menubar$$getter_ = function _get__DOMWindow_menubar$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_menubar$$named_;
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_menubar$$member_ = function(_this, value){
  return native__DOMWindowWrappingImplementation__set__DOMWindow_menubar(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_menubar$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_menubar$$member_(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_menubar$$getter_ = function _set__DOMWindow_menubar$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_menubar$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.name$named = function(){
  return this.name$getter().apply(this, arguments);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.name$getter = function(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_name$$member_(this);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.name$setter = function(value){
  _DOMWindowWrappingImplementation$Dart._set__DOMWindow_name$$member_(this, value);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_name$$member_ = function(_this){
  return native__DOMWindowWrappingImplementation__get__DOMWindow_name(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_name$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_name$$member_(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_name$$getter_ = function _get__DOMWindow_name$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_name$$named_;
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_name$$member_ = function(_this, value){
  return native__DOMWindowWrappingImplementation__set__DOMWindow_name(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_name$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_name$$member_(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_name$$getter_ = function _set__DOMWindow_name$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_name$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.navigator$named = function(){
  return this.navigator$getter().apply(this, arguments);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.navigator$getter = function(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_navigator$$member_(this);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.navigator$setter = function(value){
  _DOMWindowWrappingImplementation$Dart._set__DOMWindow_navigator$$member_(this, value);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_navigator$$member_ = function(_this){
  return native__DOMWindowWrappingImplementation__get__DOMWindow_navigator(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_navigator$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_navigator$$member_(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_navigator$$getter_ = function _get__DOMWindow_navigator$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_navigator$$named_;
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_navigator$$member_ = function(_this, value){
  return native__DOMWindowWrappingImplementation__set__DOMWindow_navigator(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_navigator$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_navigator$$member_(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_navigator$$getter_ = function _set__DOMWindow_navigator$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_navigator$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.offscreenBuffering$named = function(){
  return this.offscreenBuffering$getter().apply(this, arguments);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.offscreenBuffering$getter = function(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_offscreenBuffering$$member_(this);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.offscreenBuffering$setter = function(value){
  _DOMWindowWrappingImplementation$Dart._set__DOMWindow_offscreenBuffering$$member_(this, value);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_offscreenBuffering$$member_ = function(_this){
  return native__DOMWindowWrappingImplementation__get__DOMWindow_offscreenBuffering(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_offscreenBuffering$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_offscreenBuffering$$member_(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_offscreenBuffering$$getter_ = function _get__DOMWindow_offscreenBuffering$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_offscreenBuffering$$named_;
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_offscreenBuffering$$member_ = function(_this, value){
  return native__DOMWindowWrappingImplementation__set__DOMWindow_offscreenBuffering(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_offscreenBuffering$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_offscreenBuffering$$member_(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_offscreenBuffering$$getter_ = function _set__DOMWindow_offscreenBuffering$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_offscreenBuffering$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onabort$named = function(){
  return this.onabort$getter().apply(this, arguments);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onabort$getter = function(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onabort$$member_(this);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onabort$setter = function(value){
  _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onabort$$member_(this, value);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onabort$$member_ = function(_this){
  return native__DOMWindowWrappingImplementation__get__DOMWindow_onabort(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onabort$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onabort$$member_(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onabort$$getter_ = function _get__DOMWindow_onabort$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onabort$$named_;
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onabort$$member_ = function(_this, value){
  return native__DOMWindowWrappingImplementation__set__DOMWindow_onabort(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onabort$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onabort$$member_(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onabort$$getter_ = function _set__DOMWindow_onabort$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onabort$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onbeforeunload$named = function(){
  return this.onbeforeunload$getter().apply(this, arguments);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onbeforeunload$getter = function(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onbeforeunload$$member_(this);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onbeforeunload$setter = function(value){
  _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onbeforeunload$$member_(this, value);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onbeforeunload$$member_ = function(_this){
  return native__DOMWindowWrappingImplementation__get__DOMWindow_onbeforeunload(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onbeforeunload$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onbeforeunload$$member_(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onbeforeunload$$getter_ = function _get__DOMWindow_onbeforeunload$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onbeforeunload$$named_;
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onbeforeunload$$member_ = function(_this, value){
  return native__DOMWindowWrappingImplementation__set__DOMWindow_onbeforeunload(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onbeforeunload$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onbeforeunload$$member_(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onbeforeunload$$getter_ = function _set__DOMWindow_onbeforeunload$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onbeforeunload$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onblur$named = function(){
  return this.onblur$getter().apply(this, arguments);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onblur$getter = function(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onblur$$member_(this);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onblur$setter = function(value){
  _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onblur$$member_(this, value);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onblur$$member_ = function(_this){
  return native__DOMWindowWrappingImplementation__get__DOMWindow_onblur(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onblur$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onblur$$member_(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onblur$$getter_ = function _get__DOMWindow_onblur$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onblur$$named_;
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onblur$$member_ = function(_this, value){
  return native__DOMWindowWrappingImplementation__set__DOMWindow_onblur(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onblur$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onblur$$member_(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onblur$$getter_ = function _set__DOMWindow_onblur$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onblur$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.oncanplay$named = function(){
  return this.oncanplay$getter().apply(this, arguments);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.oncanplay$getter = function(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_oncanplay$$member_(this);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.oncanplay$setter = function(value){
  _DOMWindowWrappingImplementation$Dart._set__DOMWindow_oncanplay$$member_(this, value);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_oncanplay$$member_ = function(_this){
  return native__DOMWindowWrappingImplementation__get__DOMWindow_oncanplay(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_oncanplay$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_oncanplay$$member_(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_oncanplay$$getter_ = function _get__DOMWindow_oncanplay$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_oncanplay$$named_;
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_oncanplay$$member_ = function(_this, value){
  return native__DOMWindowWrappingImplementation__set__DOMWindow_oncanplay(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_oncanplay$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_oncanplay$$member_(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_oncanplay$$getter_ = function _set__DOMWindow_oncanplay$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_oncanplay$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.oncanplaythrough$named = function(){
  return this.oncanplaythrough$getter().apply(this, arguments);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.oncanplaythrough$getter = function(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_oncanplaythrough$$member_(this);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.oncanplaythrough$setter = function(value){
  _DOMWindowWrappingImplementation$Dart._set__DOMWindow_oncanplaythrough$$member_(this, value);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_oncanplaythrough$$member_ = function(_this){
  return native__DOMWindowWrappingImplementation__get__DOMWindow_oncanplaythrough(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_oncanplaythrough$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_oncanplaythrough$$member_(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_oncanplaythrough$$getter_ = function _get__DOMWindow_oncanplaythrough$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_oncanplaythrough$$named_;
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_oncanplaythrough$$member_ = function(_this, value){
  return native__DOMWindowWrappingImplementation__set__DOMWindow_oncanplaythrough(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_oncanplaythrough$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_oncanplaythrough$$member_(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_oncanplaythrough$$getter_ = function _set__DOMWindow_oncanplaythrough$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_oncanplaythrough$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onchange$named = function(){
  return this.onchange$getter().apply(this, arguments);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onchange$getter = function(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onchange$$member_(this);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onchange$setter = function(value){
  _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onchange$$member_(this, value);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onchange$$member_ = function(_this){
  return native__DOMWindowWrappingImplementation__get__DOMWindow_onchange(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onchange$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onchange$$member_(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onchange$$getter_ = function _get__DOMWindow_onchange$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onchange$$named_;
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onchange$$member_ = function(_this, value){
  return native__DOMWindowWrappingImplementation__set__DOMWindow_onchange(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onchange$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onchange$$member_(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onchange$$getter_ = function _set__DOMWindow_onchange$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onchange$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onclick$named = function(){
  return this.onclick$getter().apply(this, arguments);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onclick$getter = function(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onclick$$member_(this);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onclick$setter = function(value){
  _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onclick$$member_(this, value);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onclick$$member_ = function(_this){
  return native__DOMWindowWrappingImplementation__get__DOMWindow_onclick(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onclick$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onclick$$member_(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onclick$$getter_ = function _get__DOMWindow_onclick$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onclick$$named_;
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onclick$$member_ = function(_this, value){
  return native__DOMWindowWrappingImplementation__set__DOMWindow_onclick(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onclick$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onclick$$member_(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onclick$$getter_ = function _set__DOMWindow_onclick$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onclick$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.oncontextmenu$named = function(){
  return this.oncontextmenu$getter().apply(this, arguments);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.oncontextmenu$getter = function(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_oncontextmenu$$member_(this);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.oncontextmenu$setter = function(value){
  _DOMWindowWrappingImplementation$Dart._set__DOMWindow_oncontextmenu$$member_(this, value);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_oncontextmenu$$member_ = function(_this){
  return native__DOMWindowWrappingImplementation__get__DOMWindow_oncontextmenu(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_oncontextmenu$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_oncontextmenu$$member_(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_oncontextmenu$$getter_ = function _get__DOMWindow_oncontextmenu$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_oncontextmenu$$named_;
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_oncontextmenu$$member_ = function(_this, value){
  return native__DOMWindowWrappingImplementation__set__DOMWindow_oncontextmenu(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_oncontextmenu$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_oncontextmenu$$member_(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_oncontextmenu$$getter_ = function _set__DOMWindow_oncontextmenu$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_oncontextmenu$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.ondblclick$named = function(){
  return this.ondblclick$getter().apply(this, arguments);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.ondblclick$getter = function(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_ondblclick$$member_(this);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.ondblclick$setter = function(value){
  _DOMWindowWrappingImplementation$Dart._set__DOMWindow_ondblclick$$member_(this, value);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_ondblclick$$member_ = function(_this){
  return native__DOMWindowWrappingImplementation__get__DOMWindow_ondblclick(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_ondblclick$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_ondblclick$$member_(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_ondblclick$$getter_ = function _get__DOMWindow_ondblclick$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_ondblclick$$named_;
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_ondblclick$$member_ = function(_this, value){
  return native__DOMWindowWrappingImplementation__set__DOMWindow_ondblclick(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_ondblclick$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_ondblclick$$member_(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_ondblclick$$getter_ = function _set__DOMWindow_ondblclick$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_ondblclick$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.ondevicemotion$named = function(){
  return this.ondevicemotion$getter().apply(this, arguments);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.ondevicemotion$getter = function(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_ondevicemotion$$member_(this);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.ondevicemotion$setter = function(value){
  _DOMWindowWrappingImplementation$Dart._set__DOMWindow_ondevicemotion$$member_(this, value);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_ondevicemotion$$member_ = function(_this){
  return native__DOMWindowWrappingImplementation__get__DOMWindow_ondevicemotion(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_ondevicemotion$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_ondevicemotion$$member_(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_ondevicemotion$$getter_ = function _get__DOMWindow_ondevicemotion$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_ondevicemotion$$named_;
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_ondevicemotion$$member_ = function(_this, value){
  return native__DOMWindowWrappingImplementation__set__DOMWindow_ondevicemotion(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_ondevicemotion$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_ondevicemotion$$member_(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_ondevicemotion$$getter_ = function _set__DOMWindow_ondevicemotion$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_ondevicemotion$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.ondeviceorientation$named = function(){
  return this.ondeviceorientation$getter().apply(this, arguments);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.ondeviceorientation$getter = function(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_ondeviceorientation$$member_(this);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.ondeviceorientation$setter = function(value){
  _DOMWindowWrappingImplementation$Dart._set__DOMWindow_ondeviceorientation$$member_(this, value);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_ondeviceorientation$$member_ = function(_this){
  return native__DOMWindowWrappingImplementation__get__DOMWindow_ondeviceorientation(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_ondeviceorientation$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_ondeviceorientation$$member_(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_ondeviceorientation$$getter_ = function _get__DOMWindow_ondeviceorientation$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_ondeviceorientation$$named_;
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_ondeviceorientation$$member_ = function(_this, value){
  return native__DOMWindowWrappingImplementation__set__DOMWindow_ondeviceorientation(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_ondeviceorientation$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_ondeviceorientation$$member_(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_ondeviceorientation$$getter_ = function _set__DOMWindow_ondeviceorientation$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_ondeviceorientation$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.ondrag$named = function(){
  return this.ondrag$getter().apply(this, arguments);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.ondrag$getter = function(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_ondrag$$member_(this);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.ondrag$setter = function(value){
  _DOMWindowWrappingImplementation$Dart._set__DOMWindow_ondrag$$member_(this, value);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_ondrag$$member_ = function(_this){
  return native__DOMWindowWrappingImplementation__get__DOMWindow_ondrag(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_ondrag$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_ondrag$$member_(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_ondrag$$getter_ = function _get__DOMWindow_ondrag$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_ondrag$$named_;
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_ondrag$$member_ = function(_this, value){
  return native__DOMWindowWrappingImplementation__set__DOMWindow_ondrag(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_ondrag$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_ondrag$$member_(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_ondrag$$getter_ = function _set__DOMWindow_ondrag$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_ondrag$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.ondragend$named = function(){
  return this.ondragend$getter().apply(this, arguments);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.ondragend$getter = function(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_ondragend$$member_(this);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.ondragend$setter = function(value){
  _DOMWindowWrappingImplementation$Dart._set__DOMWindow_ondragend$$member_(this, value);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_ondragend$$member_ = function(_this){
  return native__DOMWindowWrappingImplementation__get__DOMWindow_ondragend(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_ondragend$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_ondragend$$member_(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_ondragend$$getter_ = function _get__DOMWindow_ondragend$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_ondragend$$named_;
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_ondragend$$member_ = function(_this, value){
  return native__DOMWindowWrappingImplementation__set__DOMWindow_ondragend(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_ondragend$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_ondragend$$member_(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_ondragend$$getter_ = function _set__DOMWindow_ondragend$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_ondragend$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.ondragenter$named = function(){
  return this.ondragenter$getter().apply(this, arguments);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.ondragenter$getter = function(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_ondragenter$$member_(this);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.ondragenter$setter = function(value){
  _DOMWindowWrappingImplementation$Dart._set__DOMWindow_ondragenter$$member_(this, value);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_ondragenter$$member_ = function(_this){
  return native__DOMWindowWrappingImplementation__get__DOMWindow_ondragenter(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_ondragenter$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_ondragenter$$member_(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_ondragenter$$getter_ = function _get__DOMWindow_ondragenter$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_ondragenter$$named_;
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_ondragenter$$member_ = function(_this, value){
  return native__DOMWindowWrappingImplementation__set__DOMWindow_ondragenter(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_ondragenter$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_ondragenter$$member_(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_ondragenter$$getter_ = function _set__DOMWindow_ondragenter$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_ondragenter$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.ondragleave$named = function(){
  return this.ondragleave$getter().apply(this, arguments);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.ondragleave$getter = function(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_ondragleave$$member_(this);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.ondragleave$setter = function(value){
  _DOMWindowWrappingImplementation$Dart._set__DOMWindow_ondragleave$$member_(this, value);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_ondragleave$$member_ = function(_this){
  return native__DOMWindowWrappingImplementation__get__DOMWindow_ondragleave(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_ondragleave$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_ondragleave$$member_(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_ondragleave$$getter_ = function _get__DOMWindow_ondragleave$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_ondragleave$$named_;
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_ondragleave$$member_ = function(_this, value){
  return native__DOMWindowWrappingImplementation__set__DOMWindow_ondragleave(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_ondragleave$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_ondragleave$$member_(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_ondragleave$$getter_ = function _set__DOMWindow_ondragleave$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_ondragleave$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.ondragover$named = function(){
  return this.ondragover$getter().apply(this, arguments);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.ondragover$getter = function(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_ondragover$$member_(this);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.ondragover$setter = function(value){
  _DOMWindowWrappingImplementation$Dart._set__DOMWindow_ondragover$$member_(this, value);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_ondragover$$member_ = function(_this){
  return native__DOMWindowWrappingImplementation__get__DOMWindow_ondragover(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_ondragover$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_ondragover$$member_(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_ondragover$$getter_ = function _get__DOMWindow_ondragover$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_ondragover$$named_;
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_ondragover$$member_ = function(_this, value){
  return native__DOMWindowWrappingImplementation__set__DOMWindow_ondragover(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_ondragover$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_ondragover$$member_(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_ondragover$$getter_ = function _set__DOMWindow_ondragover$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_ondragover$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.ondragstart$named = function(){
  return this.ondragstart$getter().apply(this, arguments);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.ondragstart$getter = function(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_ondragstart$$member_(this);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.ondragstart$setter = function(value){
  _DOMWindowWrappingImplementation$Dart._set__DOMWindow_ondragstart$$member_(this, value);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_ondragstart$$member_ = function(_this){
  return native__DOMWindowWrappingImplementation__get__DOMWindow_ondragstart(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_ondragstart$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_ondragstart$$member_(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_ondragstart$$getter_ = function _get__DOMWindow_ondragstart$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_ondragstart$$named_;
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_ondragstart$$member_ = function(_this, value){
  return native__DOMWindowWrappingImplementation__set__DOMWindow_ondragstart(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_ondragstart$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_ondragstart$$member_(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_ondragstart$$getter_ = function _set__DOMWindow_ondragstart$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_ondragstart$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.ondrop$named = function(){
  return this.ondrop$getter().apply(this, arguments);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.ondrop$getter = function(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_ondrop$$member_(this);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.ondrop$setter = function(value){
  _DOMWindowWrappingImplementation$Dart._set__DOMWindow_ondrop$$member_(this, value);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_ondrop$$member_ = function(_this){
  return native__DOMWindowWrappingImplementation__get__DOMWindow_ondrop(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_ondrop$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_ondrop$$member_(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_ondrop$$getter_ = function _get__DOMWindow_ondrop$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_ondrop$$named_;
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_ondrop$$member_ = function(_this, value){
  return native__DOMWindowWrappingImplementation__set__DOMWindow_ondrop(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_ondrop$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_ondrop$$member_(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_ondrop$$getter_ = function _set__DOMWindow_ondrop$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_ondrop$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.ondurationchange$named = function(){
  return this.ondurationchange$getter().apply(this, arguments);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.ondurationchange$getter = function(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_ondurationchange$$member_(this);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.ondurationchange$setter = function(value){
  _DOMWindowWrappingImplementation$Dart._set__DOMWindow_ondurationchange$$member_(this, value);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_ondurationchange$$member_ = function(_this){
  return native__DOMWindowWrappingImplementation__get__DOMWindow_ondurationchange(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_ondurationchange$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_ondurationchange$$member_(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_ondurationchange$$getter_ = function _get__DOMWindow_ondurationchange$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_ondurationchange$$named_;
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_ondurationchange$$member_ = function(_this, value){
  return native__DOMWindowWrappingImplementation__set__DOMWindow_ondurationchange(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_ondurationchange$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_ondurationchange$$member_(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_ondurationchange$$getter_ = function _set__DOMWindow_ondurationchange$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_ondurationchange$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onemptied$named = function(){
  return this.onemptied$getter().apply(this, arguments);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onemptied$getter = function(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onemptied$$member_(this);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onemptied$setter = function(value){
  _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onemptied$$member_(this, value);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onemptied$$member_ = function(_this){
  return native__DOMWindowWrappingImplementation__get__DOMWindow_onemptied(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onemptied$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onemptied$$member_(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onemptied$$getter_ = function _get__DOMWindow_onemptied$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onemptied$$named_;
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onemptied$$member_ = function(_this, value){
  return native__DOMWindowWrappingImplementation__set__DOMWindow_onemptied(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onemptied$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onemptied$$member_(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onemptied$$getter_ = function _set__DOMWindow_onemptied$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onemptied$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onended$named = function(){
  return this.onended$getter().apply(this, arguments);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onended$getter = function(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onended$$member_(this);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onended$setter = function(value){
  _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onended$$member_(this, value);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onended$$member_ = function(_this){
  return native__DOMWindowWrappingImplementation__get__DOMWindow_onended(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onended$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onended$$member_(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onended$$getter_ = function _get__DOMWindow_onended$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onended$$named_;
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onended$$member_ = function(_this, value){
  return native__DOMWindowWrappingImplementation__set__DOMWindow_onended(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onended$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onended$$member_(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onended$$getter_ = function _set__DOMWindow_onended$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onended$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onerror$named = function(){
  return this.onerror$getter().apply(this, arguments);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onerror$getter = function(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onerror$$member_(this);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onerror$setter = function(value){
  _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onerror$$member_(this, value);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onerror$$member_ = function(_this){
  return native__DOMWindowWrappingImplementation__get__DOMWindow_onerror(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onerror$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onerror$$member_(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onerror$$getter_ = function _get__DOMWindow_onerror$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onerror$$named_;
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onerror$$member_ = function(_this, value){
  return native__DOMWindowWrappingImplementation__set__DOMWindow_onerror(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onerror$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onerror$$member_(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onerror$$getter_ = function _set__DOMWindow_onerror$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onerror$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onfocus$named = function(){
  return this.onfocus$getter().apply(this, arguments);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onfocus$getter = function(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onfocus$$member_(this);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onfocus$setter = function(value){
  _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onfocus$$member_(this, value);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onfocus$$member_ = function(_this){
  return native__DOMWindowWrappingImplementation__get__DOMWindow_onfocus(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onfocus$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onfocus$$member_(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onfocus$$getter_ = function _get__DOMWindow_onfocus$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onfocus$$named_;
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onfocus$$member_ = function(_this, value){
  return native__DOMWindowWrappingImplementation__set__DOMWindow_onfocus(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onfocus$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onfocus$$member_(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onfocus$$getter_ = function _set__DOMWindow_onfocus$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onfocus$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onhashchange$named = function(){
  return this.onhashchange$getter().apply(this, arguments);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onhashchange$getter = function(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onhashchange$$member_(this);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onhashchange$setter = function(value){
  _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onhashchange$$member_(this, value);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onhashchange$$member_ = function(_this){
  return native__DOMWindowWrappingImplementation__get__DOMWindow_onhashchange(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onhashchange$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onhashchange$$member_(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onhashchange$$getter_ = function _get__DOMWindow_onhashchange$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onhashchange$$named_;
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onhashchange$$member_ = function(_this, value){
  return native__DOMWindowWrappingImplementation__set__DOMWindow_onhashchange(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onhashchange$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onhashchange$$member_(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onhashchange$$getter_ = function _set__DOMWindow_onhashchange$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onhashchange$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.oninput$named = function(){
  return this.oninput$getter().apply(this, arguments);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.oninput$getter = function(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_oninput$$member_(this);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.oninput$setter = function(value){
  _DOMWindowWrappingImplementation$Dart._set__DOMWindow_oninput$$member_(this, value);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_oninput$$member_ = function(_this){
  return native__DOMWindowWrappingImplementation__get__DOMWindow_oninput(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_oninput$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_oninput$$member_(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_oninput$$getter_ = function _get__DOMWindow_oninput$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_oninput$$named_;
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_oninput$$member_ = function(_this, value){
  return native__DOMWindowWrappingImplementation__set__DOMWindow_oninput(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_oninput$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_oninput$$member_(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_oninput$$getter_ = function _set__DOMWindow_oninput$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_oninput$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.oninvalid$named = function(){
  return this.oninvalid$getter().apply(this, arguments);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.oninvalid$getter = function(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_oninvalid$$member_(this);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.oninvalid$setter = function(value){
  _DOMWindowWrappingImplementation$Dart._set__DOMWindow_oninvalid$$member_(this, value);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_oninvalid$$member_ = function(_this){
  return native__DOMWindowWrappingImplementation__get__DOMWindow_oninvalid(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_oninvalid$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_oninvalid$$member_(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_oninvalid$$getter_ = function _get__DOMWindow_oninvalid$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_oninvalid$$named_;
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_oninvalid$$member_ = function(_this, value){
  return native__DOMWindowWrappingImplementation__set__DOMWindow_oninvalid(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_oninvalid$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_oninvalid$$member_(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_oninvalid$$getter_ = function _set__DOMWindow_oninvalid$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_oninvalid$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onkeydown$named = function(){
  return this.onkeydown$getter().apply(this, arguments);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onkeydown$getter = function(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onkeydown$$member_(this);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onkeydown$setter = function(value){
  _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onkeydown$$member_(this, value);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onkeydown$$member_ = function(_this){
  return native__DOMWindowWrappingImplementation__get__DOMWindow_onkeydown(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onkeydown$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onkeydown$$member_(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onkeydown$$getter_ = function _get__DOMWindow_onkeydown$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onkeydown$$named_;
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onkeydown$$member_ = function(_this, value){
  return native__DOMWindowWrappingImplementation__set__DOMWindow_onkeydown(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onkeydown$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onkeydown$$member_(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onkeydown$$getter_ = function _set__DOMWindow_onkeydown$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onkeydown$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onkeypress$named = function(){
  return this.onkeypress$getter().apply(this, arguments);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onkeypress$getter = function(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onkeypress$$member_(this);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onkeypress$setter = function(value){
  _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onkeypress$$member_(this, value);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onkeypress$$member_ = function(_this){
  return native__DOMWindowWrappingImplementation__get__DOMWindow_onkeypress(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onkeypress$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onkeypress$$member_(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onkeypress$$getter_ = function _get__DOMWindow_onkeypress$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onkeypress$$named_;
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onkeypress$$member_ = function(_this, value){
  return native__DOMWindowWrappingImplementation__set__DOMWindow_onkeypress(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onkeypress$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onkeypress$$member_(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onkeypress$$getter_ = function _set__DOMWindow_onkeypress$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onkeypress$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onkeyup$named = function(){
  return this.onkeyup$getter().apply(this, arguments);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onkeyup$getter = function(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onkeyup$$member_(this);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onkeyup$setter = function(value){
  _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onkeyup$$member_(this, value);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onkeyup$$member_ = function(_this){
  return native__DOMWindowWrappingImplementation__get__DOMWindow_onkeyup(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onkeyup$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onkeyup$$member_(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onkeyup$$getter_ = function _get__DOMWindow_onkeyup$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onkeyup$$named_;
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onkeyup$$member_ = function(_this, value){
  return native__DOMWindowWrappingImplementation__set__DOMWindow_onkeyup(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onkeyup$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onkeyup$$member_(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onkeyup$$getter_ = function _set__DOMWindow_onkeyup$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onkeyup$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onload$named = function(){
  return this.onload$getter().apply(this, arguments);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onload$getter = function(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onload$$member_(this);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onload$setter = function(value){
  _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onload$$member_(this, value);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onload$$member_ = function(_this){
  return native__DOMWindowWrappingImplementation__get__DOMWindow_onload(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onload$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onload$$member_(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onload$$getter_ = function _get__DOMWindow_onload$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onload$$named_;
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onload$$member_ = function(_this, value){
  return native__DOMWindowWrappingImplementation__set__DOMWindow_onload(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onload$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onload$$member_(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onload$$getter_ = function _set__DOMWindow_onload$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onload$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onloadeddata$named = function(){
  return this.onloadeddata$getter().apply(this, arguments);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onloadeddata$getter = function(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onloadeddata$$member_(this);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onloadeddata$setter = function(value){
  _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onloadeddata$$member_(this, value);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onloadeddata$$member_ = function(_this){
  return native__DOMWindowWrappingImplementation__get__DOMWindow_onloadeddata(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onloadeddata$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onloadeddata$$member_(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onloadeddata$$getter_ = function _get__DOMWindow_onloadeddata$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onloadeddata$$named_;
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onloadeddata$$member_ = function(_this, value){
  return native__DOMWindowWrappingImplementation__set__DOMWindow_onloadeddata(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onloadeddata$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onloadeddata$$member_(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onloadeddata$$getter_ = function _set__DOMWindow_onloadeddata$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onloadeddata$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onloadedmetadata$named = function(){
  return this.onloadedmetadata$getter().apply(this, arguments);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onloadedmetadata$getter = function(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onloadedmetadata$$member_(this);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onloadedmetadata$setter = function(value){
  _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onloadedmetadata$$member_(this, value);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onloadedmetadata$$member_ = function(_this){
  return native__DOMWindowWrappingImplementation__get__DOMWindow_onloadedmetadata(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onloadedmetadata$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onloadedmetadata$$member_(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onloadedmetadata$$getter_ = function _get__DOMWindow_onloadedmetadata$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onloadedmetadata$$named_;
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onloadedmetadata$$member_ = function(_this, value){
  return native__DOMWindowWrappingImplementation__set__DOMWindow_onloadedmetadata(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onloadedmetadata$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onloadedmetadata$$member_(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onloadedmetadata$$getter_ = function _set__DOMWindow_onloadedmetadata$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onloadedmetadata$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onloadstart$named = function(){
  return this.onloadstart$getter().apply(this, arguments);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onloadstart$getter = function(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onloadstart$$member_(this);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onloadstart$setter = function(value){
  _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onloadstart$$member_(this, value);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onloadstart$$member_ = function(_this){
  return native__DOMWindowWrappingImplementation__get__DOMWindow_onloadstart(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onloadstart$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onloadstart$$member_(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onloadstart$$getter_ = function _get__DOMWindow_onloadstart$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onloadstart$$named_;
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onloadstart$$member_ = function(_this, value){
  return native__DOMWindowWrappingImplementation__set__DOMWindow_onloadstart(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onloadstart$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onloadstart$$member_(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onloadstart$$getter_ = function _set__DOMWindow_onloadstart$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onloadstart$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onmessage$named = function(){
  return this.onmessage$getter().apply(this, arguments);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onmessage$getter = function(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onmessage$$member_(this);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onmessage$setter = function(value){
  _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onmessage$$member_(this, value);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onmessage$$member_ = function(_this){
  return native__DOMWindowWrappingImplementation__get__DOMWindow_onmessage(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onmessage$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onmessage$$member_(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onmessage$$getter_ = function _get__DOMWindow_onmessage$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onmessage$$named_;
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onmessage$$member_ = function(_this, value){
  return native__DOMWindowWrappingImplementation__set__DOMWindow_onmessage(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onmessage$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onmessage$$member_(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onmessage$$getter_ = function _set__DOMWindow_onmessage$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onmessage$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onmousedown$named = function(){
  return this.onmousedown$getter().apply(this, arguments);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onmousedown$getter = function(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onmousedown$$member_(this);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onmousedown$setter = function(value){
  _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onmousedown$$member_(this, value);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onmousedown$$member_ = function(_this){
  return native__DOMWindowWrappingImplementation__get__DOMWindow_onmousedown(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onmousedown$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onmousedown$$member_(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onmousedown$$getter_ = function _get__DOMWindow_onmousedown$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onmousedown$$named_;
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onmousedown$$member_ = function(_this, value){
  return native__DOMWindowWrappingImplementation__set__DOMWindow_onmousedown(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onmousedown$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onmousedown$$member_(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onmousedown$$getter_ = function _set__DOMWindow_onmousedown$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onmousedown$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onmousemove$named = function(){
  return this.onmousemove$getter().apply(this, arguments);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onmousemove$getter = function(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onmousemove$$member_(this);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onmousemove$setter = function(value){
  _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onmousemove$$member_(this, value);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onmousemove$$member_ = function(_this){
  return native__DOMWindowWrappingImplementation__get__DOMWindow_onmousemove(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onmousemove$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onmousemove$$member_(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onmousemove$$getter_ = function _get__DOMWindow_onmousemove$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onmousemove$$named_;
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onmousemove$$member_ = function(_this, value){
  return native__DOMWindowWrappingImplementation__set__DOMWindow_onmousemove(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onmousemove$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onmousemove$$member_(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onmousemove$$getter_ = function _set__DOMWindow_onmousemove$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onmousemove$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onmouseout$named = function(){
  return this.onmouseout$getter().apply(this, arguments);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onmouseout$getter = function(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onmouseout$$member_(this);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onmouseout$setter = function(value){
  _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onmouseout$$member_(this, value);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onmouseout$$member_ = function(_this){
  return native__DOMWindowWrappingImplementation__get__DOMWindow_onmouseout(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onmouseout$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onmouseout$$member_(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onmouseout$$getter_ = function _get__DOMWindow_onmouseout$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onmouseout$$named_;
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onmouseout$$member_ = function(_this, value){
  return native__DOMWindowWrappingImplementation__set__DOMWindow_onmouseout(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onmouseout$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onmouseout$$member_(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onmouseout$$getter_ = function _set__DOMWindow_onmouseout$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onmouseout$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onmouseover$named = function(){
  return this.onmouseover$getter().apply(this, arguments);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onmouseover$getter = function(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onmouseover$$member_(this);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onmouseover$setter = function(value){
  _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onmouseover$$member_(this, value);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onmouseover$$member_ = function(_this){
  return native__DOMWindowWrappingImplementation__get__DOMWindow_onmouseover(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onmouseover$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onmouseover$$member_(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onmouseover$$getter_ = function _get__DOMWindow_onmouseover$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onmouseover$$named_;
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onmouseover$$member_ = function(_this, value){
  return native__DOMWindowWrappingImplementation__set__DOMWindow_onmouseover(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onmouseover$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onmouseover$$member_(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onmouseover$$getter_ = function _set__DOMWindow_onmouseover$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onmouseover$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onmouseup$named = function(){
  return this.onmouseup$getter().apply(this, arguments);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onmouseup$getter = function(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onmouseup$$member_(this);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onmouseup$setter = function(value){
  _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onmouseup$$member_(this, value);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onmouseup$$member_ = function(_this){
  return native__DOMWindowWrappingImplementation__get__DOMWindow_onmouseup(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onmouseup$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onmouseup$$member_(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onmouseup$$getter_ = function _get__DOMWindow_onmouseup$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onmouseup$$named_;
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onmouseup$$member_ = function(_this, value){
  return native__DOMWindowWrappingImplementation__set__DOMWindow_onmouseup(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onmouseup$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onmouseup$$member_(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onmouseup$$getter_ = function _set__DOMWindow_onmouseup$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onmouseup$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onmousewheel$named = function(){
  return this.onmousewheel$getter().apply(this, arguments);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onmousewheel$getter = function(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onmousewheel$$member_(this);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onmousewheel$setter = function(value){
  _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onmousewheel$$member_(this, value);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onmousewheel$$member_ = function(_this){
  return native__DOMWindowWrappingImplementation__get__DOMWindow_onmousewheel(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onmousewheel$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onmousewheel$$member_(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onmousewheel$$getter_ = function _get__DOMWindow_onmousewheel$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onmousewheel$$named_;
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onmousewheel$$member_ = function(_this, value){
  return native__DOMWindowWrappingImplementation__set__DOMWindow_onmousewheel(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onmousewheel$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onmousewheel$$member_(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onmousewheel$$getter_ = function _set__DOMWindow_onmousewheel$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onmousewheel$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onoffline$named = function(){
  return this.onoffline$getter().apply(this, arguments);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onoffline$getter = function(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onoffline$$member_(this);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onoffline$setter = function(value){
  _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onoffline$$member_(this, value);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onoffline$$member_ = function(_this){
  return native__DOMWindowWrappingImplementation__get__DOMWindow_onoffline(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onoffline$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onoffline$$member_(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onoffline$$getter_ = function _get__DOMWindow_onoffline$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onoffline$$named_;
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onoffline$$member_ = function(_this, value){
  return native__DOMWindowWrappingImplementation__set__DOMWindow_onoffline(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onoffline$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onoffline$$member_(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onoffline$$getter_ = function _set__DOMWindow_onoffline$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onoffline$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.ononline$named = function(){
  return this.ononline$getter().apply(this, arguments);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.ononline$getter = function(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_ononline$$member_(this);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.ononline$setter = function(value){
  _DOMWindowWrappingImplementation$Dart._set__DOMWindow_ononline$$member_(this, value);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_ononline$$member_ = function(_this){
  return native__DOMWindowWrappingImplementation__get__DOMWindow_ononline(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_ononline$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_ononline$$member_(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_ononline$$getter_ = function _get__DOMWindow_ononline$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_ononline$$named_;
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_ononline$$member_ = function(_this, value){
  return native__DOMWindowWrappingImplementation__set__DOMWindow_ononline(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_ononline$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_ononline$$member_(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_ononline$$getter_ = function _set__DOMWindow_ononline$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_ononline$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onpagehide$named = function(){
  return this.onpagehide$getter().apply(this, arguments);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onpagehide$getter = function(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onpagehide$$member_(this);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onpagehide$setter = function(value){
  _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onpagehide$$member_(this, value);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onpagehide$$member_ = function(_this){
  return native__DOMWindowWrappingImplementation__get__DOMWindow_onpagehide(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onpagehide$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onpagehide$$member_(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onpagehide$$getter_ = function _get__DOMWindow_onpagehide$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onpagehide$$named_;
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onpagehide$$member_ = function(_this, value){
  return native__DOMWindowWrappingImplementation__set__DOMWindow_onpagehide(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onpagehide$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onpagehide$$member_(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onpagehide$$getter_ = function _set__DOMWindow_onpagehide$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onpagehide$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onpageshow$named = function(){
  return this.onpageshow$getter().apply(this, arguments);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onpageshow$getter = function(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onpageshow$$member_(this);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onpageshow$setter = function(value){
  _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onpageshow$$member_(this, value);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onpageshow$$member_ = function(_this){
  return native__DOMWindowWrappingImplementation__get__DOMWindow_onpageshow(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onpageshow$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onpageshow$$member_(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onpageshow$$getter_ = function _get__DOMWindow_onpageshow$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onpageshow$$named_;
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onpageshow$$member_ = function(_this, value){
  return native__DOMWindowWrappingImplementation__set__DOMWindow_onpageshow(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onpageshow$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onpageshow$$member_(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onpageshow$$getter_ = function _set__DOMWindow_onpageshow$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onpageshow$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onpause$named = function(){
  return this.onpause$getter().apply(this, arguments);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onpause$getter = function(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onpause$$member_(this);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onpause$setter = function(value){
  _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onpause$$member_(this, value);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onpause$$member_ = function(_this){
  return native__DOMWindowWrappingImplementation__get__DOMWindow_onpause(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onpause$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onpause$$member_(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onpause$$getter_ = function _get__DOMWindow_onpause$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onpause$$named_;
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onpause$$member_ = function(_this, value){
  return native__DOMWindowWrappingImplementation__set__DOMWindow_onpause(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onpause$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onpause$$member_(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onpause$$getter_ = function _set__DOMWindow_onpause$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onpause$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onplay$named = function(){
  return this.onplay$getter().apply(this, arguments);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onplay$getter = function(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onplay$$member_(this);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onplay$setter = function(value){
  _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onplay$$member_(this, value);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onplay$$member_ = function(_this){
  return native__DOMWindowWrappingImplementation__get__DOMWindow_onplay(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onplay$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onplay$$member_(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onplay$$getter_ = function _get__DOMWindow_onplay$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onplay$$named_;
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onplay$$member_ = function(_this, value){
  return native__DOMWindowWrappingImplementation__set__DOMWindow_onplay(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onplay$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onplay$$member_(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onplay$$getter_ = function _set__DOMWindow_onplay$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onplay$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onplaying$named = function(){
  return this.onplaying$getter().apply(this, arguments);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onplaying$getter = function(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onplaying$$member_(this);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onplaying$setter = function(value){
  _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onplaying$$member_(this, value);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onplaying$$member_ = function(_this){
  return native__DOMWindowWrappingImplementation__get__DOMWindow_onplaying(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onplaying$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onplaying$$member_(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onplaying$$getter_ = function _get__DOMWindow_onplaying$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onplaying$$named_;
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onplaying$$member_ = function(_this, value){
  return native__DOMWindowWrappingImplementation__set__DOMWindow_onplaying(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onplaying$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onplaying$$member_(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onplaying$$getter_ = function _set__DOMWindow_onplaying$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onplaying$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onpopstate$named = function(){
  return this.onpopstate$getter().apply(this, arguments);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onpopstate$getter = function(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onpopstate$$member_(this);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onpopstate$setter = function(value){
  _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onpopstate$$member_(this, value);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onpopstate$$member_ = function(_this){
  return native__DOMWindowWrappingImplementation__get__DOMWindow_onpopstate(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onpopstate$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onpopstate$$member_(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onpopstate$$getter_ = function _get__DOMWindow_onpopstate$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onpopstate$$named_;
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onpopstate$$member_ = function(_this, value){
  return native__DOMWindowWrappingImplementation__set__DOMWindow_onpopstate(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onpopstate$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onpopstate$$member_(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onpopstate$$getter_ = function _set__DOMWindow_onpopstate$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onpopstate$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onprogress$named = function(){
  return this.onprogress$getter().apply(this, arguments);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onprogress$getter = function(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onprogress$$member_(this);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onprogress$setter = function(value){
  _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onprogress$$member_(this, value);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onprogress$$member_ = function(_this){
  return native__DOMWindowWrappingImplementation__get__DOMWindow_onprogress(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onprogress$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onprogress$$member_(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onprogress$$getter_ = function _get__DOMWindow_onprogress$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onprogress$$named_;
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onprogress$$member_ = function(_this, value){
  return native__DOMWindowWrappingImplementation__set__DOMWindow_onprogress(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onprogress$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onprogress$$member_(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onprogress$$getter_ = function _set__DOMWindow_onprogress$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onprogress$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onratechange$named = function(){
  return this.onratechange$getter().apply(this, arguments);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onratechange$getter = function(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onratechange$$member_(this);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onratechange$setter = function(value){
  _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onratechange$$member_(this, value);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onratechange$$member_ = function(_this){
  return native__DOMWindowWrappingImplementation__get__DOMWindow_onratechange(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onratechange$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onratechange$$member_(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onratechange$$getter_ = function _get__DOMWindow_onratechange$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onratechange$$named_;
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onratechange$$member_ = function(_this, value){
  return native__DOMWindowWrappingImplementation__set__DOMWindow_onratechange(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onratechange$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onratechange$$member_(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onratechange$$getter_ = function _set__DOMWindow_onratechange$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onratechange$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onreset$named = function(){
  return this.onreset$getter().apply(this, arguments);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onreset$getter = function(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onreset$$member_(this);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onreset$setter = function(value){
  _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onreset$$member_(this, value);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onreset$$member_ = function(_this){
  return native__DOMWindowWrappingImplementation__get__DOMWindow_onreset(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onreset$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onreset$$member_(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onreset$$getter_ = function _get__DOMWindow_onreset$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onreset$$named_;
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onreset$$member_ = function(_this, value){
  return native__DOMWindowWrappingImplementation__set__DOMWindow_onreset(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onreset$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onreset$$member_(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onreset$$getter_ = function _set__DOMWindow_onreset$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onreset$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onresize$named = function(){
  return this.onresize$getter().apply(this, arguments);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onresize$getter = function(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onresize$$member_(this);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onresize$setter = function(value){
  _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onresize$$member_(this, value);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onresize$$member_ = function(_this){
  return native__DOMWindowWrappingImplementation__get__DOMWindow_onresize(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onresize$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onresize$$member_(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onresize$$getter_ = function _get__DOMWindow_onresize$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onresize$$named_;
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onresize$$member_ = function(_this, value){
  return native__DOMWindowWrappingImplementation__set__DOMWindow_onresize(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onresize$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onresize$$member_(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onresize$$getter_ = function _set__DOMWindow_onresize$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onresize$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onscroll$named = function(){
  return this.onscroll$getter().apply(this, arguments);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onscroll$getter = function(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onscroll$$member_(this);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onscroll$setter = function(value){
  _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onscroll$$member_(this, value);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onscroll$$member_ = function(_this){
  return native__DOMWindowWrappingImplementation__get__DOMWindow_onscroll(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onscroll$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onscroll$$member_(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onscroll$$getter_ = function _get__DOMWindow_onscroll$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onscroll$$named_;
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onscroll$$member_ = function(_this, value){
  return native__DOMWindowWrappingImplementation__set__DOMWindow_onscroll(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onscroll$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onscroll$$member_(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onscroll$$getter_ = function _set__DOMWindow_onscroll$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onscroll$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onsearch$named = function(){
  return this.onsearch$getter().apply(this, arguments);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onsearch$getter = function(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onsearch$$member_(this);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onsearch$setter = function(value){
  _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onsearch$$member_(this, value);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onsearch$$member_ = function(_this){
  return native__DOMWindowWrappingImplementation__get__DOMWindow_onsearch(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onsearch$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onsearch$$member_(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onsearch$$getter_ = function _get__DOMWindow_onsearch$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onsearch$$named_;
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onsearch$$member_ = function(_this, value){
  return native__DOMWindowWrappingImplementation__set__DOMWindow_onsearch(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onsearch$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onsearch$$member_(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onsearch$$getter_ = function _set__DOMWindow_onsearch$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onsearch$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onseeked$named = function(){
  return this.onseeked$getter().apply(this, arguments);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onseeked$getter = function(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onseeked$$member_(this);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onseeked$setter = function(value){
  _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onseeked$$member_(this, value);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onseeked$$member_ = function(_this){
  return native__DOMWindowWrappingImplementation__get__DOMWindow_onseeked(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onseeked$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onseeked$$member_(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onseeked$$getter_ = function _get__DOMWindow_onseeked$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onseeked$$named_;
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onseeked$$member_ = function(_this, value){
  return native__DOMWindowWrappingImplementation__set__DOMWindow_onseeked(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onseeked$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onseeked$$member_(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onseeked$$getter_ = function _set__DOMWindow_onseeked$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onseeked$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onseeking$named = function(){
  return this.onseeking$getter().apply(this, arguments);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onseeking$getter = function(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onseeking$$member_(this);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onseeking$setter = function(value){
  _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onseeking$$member_(this, value);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onseeking$$member_ = function(_this){
  return native__DOMWindowWrappingImplementation__get__DOMWindow_onseeking(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onseeking$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onseeking$$member_(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onseeking$$getter_ = function _get__DOMWindow_onseeking$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onseeking$$named_;
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onseeking$$member_ = function(_this, value){
  return native__DOMWindowWrappingImplementation__set__DOMWindow_onseeking(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onseeking$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onseeking$$member_(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onseeking$$getter_ = function _set__DOMWindow_onseeking$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onseeking$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onselect$named = function(){
  return this.onselect$getter().apply(this, arguments);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onselect$getter = function(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onselect$$member_(this);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onselect$setter = function(value){
  _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onselect$$member_(this, value);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onselect$$member_ = function(_this){
  return native__DOMWindowWrappingImplementation__get__DOMWindow_onselect(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onselect$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onselect$$member_(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onselect$$getter_ = function _get__DOMWindow_onselect$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onselect$$named_;
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onselect$$member_ = function(_this, value){
  return native__DOMWindowWrappingImplementation__set__DOMWindow_onselect(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onselect$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onselect$$member_(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onselect$$getter_ = function _set__DOMWindow_onselect$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onselect$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onstalled$named = function(){
  return this.onstalled$getter().apply(this, arguments);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onstalled$getter = function(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onstalled$$member_(this);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onstalled$setter = function(value){
  _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onstalled$$member_(this, value);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onstalled$$member_ = function(_this){
  return native__DOMWindowWrappingImplementation__get__DOMWindow_onstalled(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onstalled$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onstalled$$member_(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onstalled$$getter_ = function _get__DOMWindow_onstalled$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onstalled$$named_;
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onstalled$$member_ = function(_this, value){
  return native__DOMWindowWrappingImplementation__set__DOMWindow_onstalled(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onstalled$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onstalled$$member_(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onstalled$$getter_ = function _set__DOMWindow_onstalled$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onstalled$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onstorage$named = function(){
  return this.onstorage$getter().apply(this, arguments);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onstorage$getter = function(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onstorage$$member_(this);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onstorage$setter = function(value){
  _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onstorage$$member_(this, value);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onstorage$$member_ = function(_this){
  return native__DOMWindowWrappingImplementation__get__DOMWindow_onstorage(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onstorage$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onstorage$$member_(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onstorage$$getter_ = function _get__DOMWindow_onstorage$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onstorage$$named_;
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onstorage$$member_ = function(_this, value){
  return native__DOMWindowWrappingImplementation__set__DOMWindow_onstorage(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onstorage$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onstorage$$member_(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onstorage$$getter_ = function _set__DOMWindow_onstorage$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onstorage$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onsubmit$named = function(){
  return this.onsubmit$getter().apply(this, arguments);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onsubmit$getter = function(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onsubmit$$member_(this);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onsubmit$setter = function(value){
  _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onsubmit$$member_(this, value);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onsubmit$$member_ = function(_this){
  return native__DOMWindowWrappingImplementation__get__DOMWindow_onsubmit(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onsubmit$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onsubmit$$member_(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onsubmit$$getter_ = function _get__DOMWindow_onsubmit$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onsubmit$$named_;
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onsubmit$$member_ = function(_this, value){
  return native__DOMWindowWrappingImplementation__set__DOMWindow_onsubmit(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onsubmit$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onsubmit$$member_(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onsubmit$$getter_ = function _set__DOMWindow_onsubmit$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onsubmit$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onsuspend$named = function(){
  return this.onsuspend$getter().apply(this, arguments);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onsuspend$getter = function(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onsuspend$$member_(this);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onsuspend$setter = function(value){
  _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onsuspend$$member_(this, value);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onsuspend$$member_ = function(_this){
  return native__DOMWindowWrappingImplementation__get__DOMWindow_onsuspend(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onsuspend$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onsuspend$$member_(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onsuspend$$getter_ = function _get__DOMWindow_onsuspend$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onsuspend$$named_;
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onsuspend$$member_ = function(_this, value){
  return native__DOMWindowWrappingImplementation__set__DOMWindow_onsuspend(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onsuspend$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onsuspend$$member_(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onsuspend$$getter_ = function _set__DOMWindow_onsuspend$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onsuspend$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.ontimeupdate$named = function(){
  return this.ontimeupdate$getter().apply(this, arguments);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.ontimeupdate$getter = function(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_ontimeupdate$$member_(this);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.ontimeupdate$setter = function(value){
  _DOMWindowWrappingImplementation$Dart._set__DOMWindow_ontimeupdate$$member_(this, value);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_ontimeupdate$$member_ = function(_this){
  return native__DOMWindowWrappingImplementation__get__DOMWindow_ontimeupdate(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_ontimeupdate$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_ontimeupdate$$member_(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_ontimeupdate$$getter_ = function _get__DOMWindow_ontimeupdate$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_ontimeupdate$$named_;
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_ontimeupdate$$member_ = function(_this, value){
  return native__DOMWindowWrappingImplementation__set__DOMWindow_ontimeupdate(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_ontimeupdate$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_ontimeupdate$$member_(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_ontimeupdate$$getter_ = function _set__DOMWindow_ontimeupdate$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_ontimeupdate$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.ontouchcancel$named = function(){
  return this.ontouchcancel$getter().apply(this, arguments);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.ontouchcancel$getter = function(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_ontouchcancel$$member_(this);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.ontouchcancel$setter = function(value){
  _DOMWindowWrappingImplementation$Dart._set__DOMWindow_ontouchcancel$$member_(this, value);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_ontouchcancel$$member_ = function(_this){
  return native__DOMWindowWrappingImplementation__get__DOMWindow_ontouchcancel(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_ontouchcancel$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_ontouchcancel$$member_(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_ontouchcancel$$getter_ = function _get__DOMWindow_ontouchcancel$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_ontouchcancel$$named_;
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_ontouchcancel$$member_ = function(_this, value){
  return native__DOMWindowWrappingImplementation__set__DOMWindow_ontouchcancel(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_ontouchcancel$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_ontouchcancel$$member_(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_ontouchcancel$$getter_ = function _set__DOMWindow_ontouchcancel$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_ontouchcancel$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.ontouchend$named = function(){
  return this.ontouchend$getter().apply(this, arguments);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.ontouchend$getter = function(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_ontouchend$$member_(this);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.ontouchend$setter = function(value){
  _DOMWindowWrappingImplementation$Dart._set__DOMWindow_ontouchend$$member_(this, value);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_ontouchend$$member_ = function(_this){
  return native__DOMWindowWrappingImplementation__get__DOMWindow_ontouchend(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_ontouchend$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_ontouchend$$member_(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_ontouchend$$getter_ = function _get__DOMWindow_ontouchend$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_ontouchend$$named_;
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_ontouchend$$member_ = function(_this, value){
  return native__DOMWindowWrappingImplementation__set__DOMWindow_ontouchend(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_ontouchend$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_ontouchend$$member_(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_ontouchend$$getter_ = function _set__DOMWindow_ontouchend$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_ontouchend$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.ontouchmove$named = function(){
  return this.ontouchmove$getter().apply(this, arguments);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.ontouchmove$getter = function(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_ontouchmove$$member_(this);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.ontouchmove$setter = function(value){
  _DOMWindowWrappingImplementation$Dart._set__DOMWindow_ontouchmove$$member_(this, value);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_ontouchmove$$member_ = function(_this){
  return native__DOMWindowWrappingImplementation__get__DOMWindow_ontouchmove(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_ontouchmove$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_ontouchmove$$member_(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_ontouchmove$$getter_ = function _get__DOMWindow_ontouchmove$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_ontouchmove$$named_;
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_ontouchmove$$member_ = function(_this, value){
  return native__DOMWindowWrappingImplementation__set__DOMWindow_ontouchmove(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_ontouchmove$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_ontouchmove$$member_(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_ontouchmove$$getter_ = function _set__DOMWindow_ontouchmove$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_ontouchmove$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.ontouchstart$named = function(){
  return this.ontouchstart$getter().apply(this, arguments);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.ontouchstart$getter = function(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_ontouchstart$$member_(this);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.ontouchstart$setter = function(value){
  _DOMWindowWrappingImplementation$Dart._set__DOMWindow_ontouchstart$$member_(this, value);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_ontouchstart$$member_ = function(_this){
  return native__DOMWindowWrappingImplementation__get__DOMWindow_ontouchstart(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_ontouchstart$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_ontouchstart$$member_(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_ontouchstart$$getter_ = function _get__DOMWindow_ontouchstart$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_ontouchstart$$named_;
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_ontouchstart$$member_ = function(_this, value){
  return native__DOMWindowWrappingImplementation__set__DOMWindow_ontouchstart(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_ontouchstart$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_ontouchstart$$member_(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_ontouchstart$$getter_ = function _set__DOMWindow_ontouchstart$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_ontouchstart$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onunload$named = function(){
  return this.onunload$getter().apply(this, arguments);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onunload$getter = function(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onunload$$member_(this);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onunload$setter = function(value){
  _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onunload$$member_(this, value);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onunload$$member_ = function(_this){
  return native__DOMWindowWrappingImplementation__get__DOMWindow_onunload(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onunload$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onunload$$member_(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onunload$$getter_ = function _get__DOMWindow_onunload$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onunload$$named_;
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onunload$$member_ = function(_this, value){
  return native__DOMWindowWrappingImplementation__set__DOMWindow_onunload(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onunload$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onunload$$member_(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onunload$$getter_ = function _set__DOMWindow_onunload$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onunload$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onvolumechange$named = function(){
  return this.onvolumechange$getter().apply(this, arguments);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onvolumechange$getter = function(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onvolumechange$$member_(this);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onvolumechange$setter = function(value){
  _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onvolumechange$$member_(this, value);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onvolumechange$$member_ = function(_this){
  return native__DOMWindowWrappingImplementation__get__DOMWindow_onvolumechange(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onvolumechange$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onvolumechange$$member_(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onvolumechange$$getter_ = function _get__DOMWindow_onvolumechange$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onvolumechange$$named_;
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onvolumechange$$member_ = function(_this, value){
  return native__DOMWindowWrappingImplementation__set__DOMWindow_onvolumechange(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onvolumechange$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onvolumechange$$member_(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onvolumechange$$getter_ = function _set__DOMWindow_onvolumechange$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onvolumechange$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onwaiting$named = function(){
  return this.onwaiting$getter().apply(this, arguments);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onwaiting$getter = function(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onwaiting$$member_(this);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onwaiting$setter = function(value){
  _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onwaiting$$member_(this, value);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onwaiting$$member_ = function(_this){
  return native__DOMWindowWrappingImplementation__get__DOMWindow_onwaiting(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onwaiting$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onwaiting$$member_(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onwaiting$$getter_ = function _get__DOMWindow_onwaiting$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onwaiting$$named_;
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onwaiting$$member_ = function(_this, value){
  return native__DOMWindowWrappingImplementation__set__DOMWindow_onwaiting(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onwaiting$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onwaiting$$member_(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onwaiting$$getter_ = function _set__DOMWindow_onwaiting$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onwaiting$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onwebkitanimationend$named = function(){
  return this.onwebkitanimationend$getter().apply(this, arguments);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onwebkitanimationend$getter = function(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onwebkitanimationend$$member_(this);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onwebkitanimationend$setter = function(value){
  _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onwebkitanimationend$$member_(this, value);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onwebkitanimationend$$member_ = function(_this){
  return native__DOMWindowWrappingImplementation__get__DOMWindow_onwebkitanimationend(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onwebkitanimationend$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onwebkitanimationend$$member_(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onwebkitanimationend$$getter_ = function _get__DOMWindow_onwebkitanimationend$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onwebkitanimationend$$named_;
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onwebkitanimationend$$member_ = function(_this, value){
  return native__DOMWindowWrappingImplementation__set__DOMWindow_onwebkitanimationend(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onwebkitanimationend$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onwebkitanimationend$$member_(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onwebkitanimationend$$getter_ = function _set__DOMWindow_onwebkitanimationend$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onwebkitanimationend$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onwebkitanimationiteration$named = function(){
  return this.onwebkitanimationiteration$getter().apply(this, arguments);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onwebkitanimationiteration$getter = function(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onwebkitanimationiteration$$member_(this);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onwebkitanimationiteration$setter = function(value){
  _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onwebkitanimationiteration$$member_(this, value);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onwebkitanimationiteration$$member_ = function(_this){
  return native__DOMWindowWrappingImplementation__get__DOMWindow_onwebkitanimationiteration(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onwebkitanimationiteration$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onwebkitanimationiteration$$member_(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onwebkitanimationiteration$$getter_ = function _get__DOMWindow_onwebkitanimationiteration$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onwebkitanimationiteration$$named_;
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onwebkitanimationiteration$$member_ = function(_this, value){
  return native__DOMWindowWrappingImplementation__set__DOMWindow_onwebkitanimationiteration(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onwebkitanimationiteration$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onwebkitanimationiteration$$member_(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onwebkitanimationiteration$$getter_ = function _set__DOMWindow_onwebkitanimationiteration$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onwebkitanimationiteration$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onwebkitanimationstart$named = function(){
  return this.onwebkitanimationstart$getter().apply(this, arguments);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onwebkitanimationstart$getter = function(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onwebkitanimationstart$$member_(this);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onwebkitanimationstart$setter = function(value){
  _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onwebkitanimationstart$$member_(this, value);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onwebkitanimationstart$$member_ = function(_this){
  return native__DOMWindowWrappingImplementation__get__DOMWindow_onwebkitanimationstart(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onwebkitanimationstart$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onwebkitanimationstart$$member_(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onwebkitanimationstart$$getter_ = function _get__DOMWindow_onwebkitanimationstart$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onwebkitanimationstart$$named_;
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onwebkitanimationstart$$member_ = function(_this, value){
  return native__DOMWindowWrappingImplementation__set__DOMWindow_onwebkitanimationstart(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onwebkitanimationstart$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onwebkitanimationstart$$member_(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onwebkitanimationstart$$getter_ = function _set__DOMWindow_onwebkitanimationstart$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onwebkitanimationstart$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onwebkittransitionend$named = function(){
  return this.onwebkittransitionend$getter().apply(this, arguments);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onwebkittransitionend$getter = function(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onwebkittransitionend$$member_(this);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.onwebkittransitionend$setter = function(value){
  _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onwebkittransitionend$$member_(this, value);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onwebkittransitionend$$member_ = function(_this){
  return native__DOMWindowWrappingImplementation__get__DOMWindow_onwebkittransitionend(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onwebkittransitionend$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onwebkittransitionend$$member_(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_onwebkittransitionend$$getter_ = function _get__DOMWindow_onwebkittransitionend$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_onwebkittransitionend$$named_;
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onwebkittransitionend$$member_ = function(_this, value){
  return native__DOMWindowWrappingImplementation__set__DOMWindow_onwebkittransitionend(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onwebkittransitionend$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onwebkittransitionend$$member_(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_onwebkittransitionend$$getter_ = function _set__DOMWindow_onwebkittransitionend$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_onwebkittransitionend$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.opener$named = function(){
  return this.opener$getter().apply(this, arguments);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.opener$getter = function(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_opener$$member_(this);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.opener$setter = function(value){
  _DOMWindowWrappingImplementation$Dart._set__DOMWindow_opener$$member_(this, value);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_opener$$member_ = function(_this){
  return native__DOMWindowWrappingImplementation__get__DOMWindow_opener(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_opener$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_opener$$member_(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_opener$$getter_ = function _get__DOMWindow_opener$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_opener$$named_;
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_opener$$member_ = function(_this, value){
  return native__DOMWindowWrappingImplementation__set__DOMWindow_opener(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_opener$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_opener$$member_(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_opener$$getter_ = function _set__DOMWindow_opener$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_opener$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.outerHeight$named = function(){
  return this.outerHeight$getter().apply(this, arguments);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.outerHeight$getter = function(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_outerHeight$$member_(this);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.outerHeight$setter = function(value){
  _DOMWindowWrappingImplementation$Dart._set__DOMWindow_outerHeight$$member_(this, value);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_outerHeight$$member_ = function(_this){
  return native__DOMWindowWrappingImplementation__get__DOMWindow_outerHeight(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_outerHeight$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_outerHeight$$member_(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_outerHeight$$getter_ = function _get__DOMWindow_outerHeight$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_outerHeight$$named_;
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_outerHeight$$member_ = function(_this, value){
  return native__DOMWindowWrappingImplementation__set__DOMWindow_outerHeight(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_outerHeight$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_outerHeight$$member_(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_outerHeight$$getter_ = function _set__DOMWindow_outerHeight$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_outerHeight$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.outerWidth$named = function(){
  return this.outerWidth$getter().apply(this, arguments);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.outerWidth$getter = function(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_outerWidth$$member_(this);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.outerWidth$setter = function(value){
  _DOMWindowWrappingImplementation$Dart._set__DOMWindow_outerWidth$$member_(this, value);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_outerWidth$$member_ = function(_this){
  return native__DOMWindowWrappingImplementation__get__DOMWindow_outerWidth(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_outerWidth$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_outerWidth$$member_(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_outerWidth$$getter_ = function _get__DOMWindow_outerWidth$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_outerWidth$$named_;
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_outerWidth$$member_ = function(_this, value){
  return native__DOMWindowWrappingImplementation__set__DOMWindow_outerWidth(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_outerWidth$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_outerWidth$$member_(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_outerWidth$$getter_ = function _set__DOMWindow_outerWidth$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_outerWidth$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.pageXOffset$named = function(){
  return this.pageXOffset$getter().apply(this, arguments);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.pageXOffset$getter = function(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_pageXOffset$$member_(this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_pageXOffset$$member_ = function(_this){
  return native__DOMWindowWrappingImplementation__get__DOMWindow_pageXOffset(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_pageXOffset$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_pageXOffset$$member_(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_pageXOffset$$getter_ = function _get__DOMWindow_pageXOffset$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_pageXOffset$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.pageYOffset$named = function(){
  return this.pageYOffset$getter().apply(this, arguments);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.pageYOffset$getter = function(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_pageYOffset$$member_(this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_pageYOffset$$member_ = function(_this){
  return native__DOMWindowWrappingImplementation__get__DOMWindow_pageYOffset(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_pageYOffset$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_pageYOffset$$member_(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_pageYOffset$$getter_ = function _get__DOMWindow_pageYOffset$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_pageYOffset$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.parent$named = function(){
  return this.parent$getter().apply(this, arguments);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.parent$getter = function(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_parent$$member_(this);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.parent$setter = function(value){
  _DOMWindowWrappingImplementation$Dart._set__DOMWindow_parent$$member_(this, value);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_parent$$member_ = function(_this){
  return native__DOMWindowWrappingImplementation__get__DOMWindow_parent(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_parent$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_parent$$member_(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_parent$$getter_ = function _get__DOMWindow_parent$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_parent$$named_;
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_parent$$member_ = function(_this, value){
  return native__DOMWindowWrappingImplementation__set__DOMWindow_parent(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_parent$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_parent$$member_(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_parent$$getter_ = function _set__DOMWindow_parent$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_parent$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.performance$named = function(){
  return this.performance$getter().apply(this, arguments);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.performance$getter = function(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_performance$$member_(this);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.performance$setter = function(value){
  _DOMWindowWrappingImplementation$Dart._set__DOMWindow_performance$$member_(this, value);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_performance$$member_ = function(_this){
  return native__DOMWindowWrappingImplementation__get__DOMWindow_performance(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_performance$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_performance$$member_(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_performance$$getter_ = function _get__DOMWindow_performance$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_performance$$named_;
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_performance$$member_ = function(_this, value){
  return native__DOMWindowWrappingImplementation__set__DOMWindow_performance(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_performance$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_performance$$member_(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_performance$$getter_ = function _set__DOMWindow_performance$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_performance$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.personalbar$named = function(){
  return this.personalbar$getter().apply(this, arguments);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.personalbar$getter = function(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_personalbar$$member_(this);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.personalbar$setter = function(value){
  _DOMWindowWrappingImplementation$Dart._set__DOMWindow_personalbar$$member_(this, value);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_personalbar$$member_ = function(_this){
  return native__DOMWindowWrappingImplementation__get__DOMWindow_personalbar(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_personalbar$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_personalbar$$member_(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_personalbar$$getter_ = function _get__DOMWindow_personalbar$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_personalbar$$named_;
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_personalbar$$member_ = function(_this, value){
  return native__DOMWindowWrappingImplementation__set__DOMWindow_personalbar(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_personalbar$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_personalbar$$member_(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_personalbar$$getter_ = function _set__DOMWindow_personalbar$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_personalbar$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.screen$named = function(){
  return this.screen$getter().apply(this, arguments);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.screen$getter = function(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_screen$$member_(this);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.screen$setter = function(value){
  _DOMWindowWrappingImplementation$Dart._set__DOMWindow_screen$$member_(this, value);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_screen$$member_ = function(_this){
  return native__DOMWindowWrappingImplementation__get__DOMWindow_screen(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_screen$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_screen$$member_(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_screen$$getter_ = function _get__DOMWindow_screen$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_screen$$named_;
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_screen$$member_ = function(_this, value){
  return native__DOMWindowWrappingImplementation__set__DOMWindow_screen(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_screen$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_screen$$member_(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_screen$$getter_ = function _set__DOMWindow_screen$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_screen$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.screenLeft$named = function(){
  return this.screenLeft$getter().apply(this, arguments);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.screenLeft$getter = function(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_screenLeft$$member_(this);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.screenLeft$setter = function(value){
  _DOMWindowWrappingImplementation$Dart._set__DOMWindow_screenLeft$$member_(this, value);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_screenLeft$$member_ = function(_this){
  return native__DOMWindowWrappingImplementation__get__DOMWindow_screenLeft(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_screenLeft$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_screenLeft$$member_(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_screenLeft$$getter_ = function _get__DOMWindow_screenLeft$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_screenLeft$$named_;
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_screenLeft$$member_ = function(_this, value){
  return native__DOMWindowWrappingImplementation__set__DOMWindow_screenLeft(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_screenLeft$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_screenLeft$$member_(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_screenLeft$$getter_ = function _set__DOMWindow_screenLeft$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_screenLeft$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.screenTop$named = function(){
  return this.screenTop$getter().apply(this, arguments);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.screenTop$getter = function(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_screenTop$$member_(this);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.screenTop$setter = function(value){
  _DOMWindowWrappingImplementation$Dart._set__DOMWindow_screenTop$$member_(this, value);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_screenTop$$member_ = function(_this){
  return native__DOMWindowWrappingImplementation__get__DOMWindow_screenTop(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_screenTop$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_screenTop$$member_(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_screenTop$$getter_ = function _get__DOMWindow_screenTop$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_screenTop$$named_;
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_screenTop$$member_ = function(_this, value){
  return native__DOMWindowWrappingImplementation__set__DOMWindow_screenTop(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_screenTop$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_screenTop$$member_(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_screenTop$$getter_ = function _set__DOMWindow_screenTop$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_screenTop$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.screenX$named = function(){
  return this.screenX$getter().apply(this, arguments);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.screenX$getter = function(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_screenX$$member_(this);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.screenX$setter = function(value){
  _DOMWindowWrappingImplementation$Dart._set__DOMWindow_screenX$$member_(this, value);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_screenX$$member_ = function(_this){
  return native__DOMWindowWrappingImplementation__get__DOMWindow_screenX(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_screenX$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_screenX$$member_(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_screenX$$getter_ = function _get__DOMWindow_screenX$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_screenX$$named_;
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_screenX$$member_ = function(_this, value){
  return native__DOMWindowWrappingImplementation__set__DOMWindow_screenX(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_screenX$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_screenX$$member_(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_screenX$$getter_ = function _set__DOMWindow_screenX$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_screenX$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.screenY$named = function(){
  return this.screenY$getter().apply(this, arguments);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.screenY$getter = function(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_screenY$$member_(this);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.screenY$setter = function(value){
  _DOMWindowWrappingImplementation$Dart._set__DOMWindow_screenY$$member_(this, value);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_screenY$$member_ = function(_this){
  return native__DOMWindowWrappingImplementation__get__DOMWindow_screenY(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_screenY$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_screenY$$member_(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_screenY$$getter_ = function _get__DOMWindow_screenY$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_screenY$$named_;
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_screenY$$member_ = function(_this, value){
  return native__DOMWindowWrappingImplementation__set__DOMWindow_screenY(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_screenY$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_screenY$$member_(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_screenY$$getter_ = function _set__DOMWindow_screenY$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_screenY$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.scrollX$named = function(){
  return this.scrollX$getter().apply(this, arguments);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.scrollX$getter = function(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_scrollX$$member_(this);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.scrollX$setter = function(value){
  _DOMWindowWrappingImplementation$Dart._set__DOMWindow_scrollX$$member_(this, value);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_scrollX$$member_ = function(_this){
  return native__DOMWindowWrappingImplementation__get__DOMWindow_scrollX(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_scrollX$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_scrollX$$member_(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_scrollX$$getter_ = function _get__DOMWindow_scrollX$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_scrollX$$named_;
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_scrollX$$member_ = function(_this, value){
  return native__DOMWindowWrappingImplementation__set__DOMWindow_scrollX(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_scrollX$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_scrollX$$member_(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_scrollX$$getter_ = function _set__DOMWindow_scrollX$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_scrollX$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.scrollY$named = function(){
  return this.scrollY$getter().apply(this, arguments);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.scrollY$getter = function(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_scrollY$$member_(this);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.scrollY$setter = function(value){
  _DOMWindowWrappingImplementation$Dart._set__DOMWindow_scrollY$$member_(this, value);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_scrollY$$member_ = function(_this){
  return native__DOMWindowWrappingImplementation__get__DOMWindow_scrollY(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_scrollY$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_scrollY$$member_(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_scrollY$$getter_ = function _get__DOMWindow_scrollY$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_scrollY$$named_;
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_scrollY$$member_ = function(_this, value){
  return native__DOMWindowWrappingImplementation__set__DOMWindow_scrollY(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_scrollY$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_scrollY$$member_(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_scrollY$$getter_ = function _set__DOMWindow_scrollY$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_scrollY$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.scrollbars$named = function(){
  return this.scrollbars$getter().apply(this, arguments);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.scrollbars$getter = function(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_scrollbars$$member_(this);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.scrollbars$setter = function(value){
  _DOMWindowWrappingImplementation$Dart._set__DOMWindow_scrollbars$$member_(this, value);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_scrollbars$$member_ = function(_this){
  return native__DOMWindowWrappingImplementation__get__DOMWindow_scrollbars(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_scrollbars$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_scrollbars$$member_(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_scrollbars$$getter_ = function _get__DOMWindow_scrollbars$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_scrollbars$$named_;
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_scrollbars$$member_ = function(_this, value){
  return native__DOMWindowWrappingImplementation__set__DOMWindow_scrollbars(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_scrollbars$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_scrollbars$$member_(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_scrollbars$$getter_ = function _set__DOMWindow_scrollbars$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_scrollbars$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.self$named = function(){
  return this.self$getter().apply(this, arguments);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.self$getter = function(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_self$$member_(this);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.self$setter = function(value){
  _DOMWindowWrappingImplementation$Dart._set__DOMWindow_self$$member_(this, value);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_self$$member_ = function(_this){
  return native__DOMWindowWrappingImplementation__get__DOMWindow_self(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_self$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_self$$member_(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_self$$getter_ = function _get__DOMWindow_self$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_self$$named_;
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_self$$member_ = function(_this, value){
  return native__DOMWindowWrappingImplementation__set__DOMWindow_self(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_self$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_self$$member_(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_self$$getter_ = function _set__DOMWindow_self$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_self$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.sessionStorage$named = function(){
  return this.sessionStorage$getter().apply(this, arguments);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.sessionStorage$getter = function(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_sessionStorage$$member_(this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_sessionStorage$$member_ = function(_this){
  return native__DOMWindowWrappingImplementation__get__DOMWindow_sessionStorage(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_sessionStorage$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_sessionStorage$$member_(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_sessionStorage$$getter_ = function _get__DOMWindow_sessionStorage$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_sessionStorage$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.status$named = function(){
  return this.status$getter().apply(this, arguments);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.status$getter = function(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_status$$member_(this);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.status$setter = function(value){
  _DOMWindowWrappingImplementation$Dart._set__DOMWindow_status$$member_(this, value);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_status$$member_ = function(_this){
  return native__DOMWindowWrappingImplementation__get__DOMWindow_status(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_status$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_status$$member_(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_status$$getter_ = function _get__DOMWindow_status$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_status$$named_;
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_status$$member_ = function(_this, value){
  return native__DOMWindowWrappingImplementation__set__DOMWindow_status(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_status$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_status$$member_(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_status$$getter_ = function _set__DOMWindow_status$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_status$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.statusbar$named = function(){
  return this.statusbar$getter().apply(this, arguments);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.statusbar$getter = function(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_statusbar$$member_(this);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.statusbar$setter = function(value){
  _DOMWindowWrappingImplementation$Dart._set__DOMWindow_statusbar$$member_(this, value);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_statusbar$$member_ = function(_this){
  return native__DOMWindowWrappingImplementation__get__DOMWindow_statusbar(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_statusbar$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_statusbar$$member_(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_statusbar$$getter_ = function _get__DOMWindow_statusbar$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_statusbar$$named_;
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_statusbar$$member_ = function(_this, value){
  return native__DOMWindowWrappingImplementation__set__DOMWindow_statusbar(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_statusbar$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_statusbar$$member_(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_statusbar$$getter_ = function _set__DOMWindow_statusbar$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_statusbar$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.styleMedia$named = function(){
  return this.styleMedia$getter().apply(this, arguments);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.styleMedia$getter = function(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_styleMedia$$member_(this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_styleMedia$$member_ = function(_this){
  return native__DOMWindowWrappingImplementation__get__DOMWindow_styleMedia(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_styleMedia$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_styleMedia$$member_(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_styleMedia$$getter_ = function _get__DOMWindow_styleMedia$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_styleMedia$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.toolbar$named = function(){
  return this.toolbar$getter().apply(this, arguments);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.toolbar$getter = function(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_toolbar$$member_(this);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.toolbar$setter = function(value){
  _DOMWindowWrappingImplementation$Dart._set__DOMWindow_toolbar$$member_(this, value);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_toolbar$$member_ = function(_this){
  return native__DOMWindowWrappingImplementation__get__DOMWindow_toolbar(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_toolbar$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_toolbar$$member_(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_toolbar$$getter_ = function _get__DOMWindow_toolbar$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_toolbar$$named_;
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_toolbar$$member_ = function(_this, value){
  return native__DOMWindowWrappingImplementation__set__DOMWindow_toolbar(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_toolbar$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_toolbar$$member_(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_toolbar$$getter_ = function _set__DOMWindow_toolbar$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_toolbar$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.top$named = function(){
  return this.top$getter().apply(this, arguments);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.top$getter = function(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_top$$member_(this);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.top$setter = function(value){
  _DOMWindowWrappingImplementation$Dart._set__DOMWindow_top$$member_(this, value);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_top$$member_ = function(_this){
  return native__DOMWindowWrappingImplementation__get__DOMWindow_top(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_top$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_top$$member_(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_top$$getter_ = function _get__DOMWindow_top$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_top$$named_;
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_top$$member_ = function(_this, value){
  return native__DOMWindowWrappingImplementation__set__DOMWindow_top(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_top$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_top$$member_(_this, value);
}
;
_DOMWindowWrappingImplementation$Dart._set__DOMWindow_top$$getter_ = function _set__DOMWindow_top$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._set__DOMWindow_top$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.webkitNotifications$named = function(){
  return this.webkitNotifications$getter().apply(this, arguments);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.webkitNotifications$getter = function(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_webkitNotifications$$member_(this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_webkitNotifications$$member_ = function(_this){
  return native__DOMWindowWrappingImplementation__get__DOMWindow_webkitNotifications(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_webkitNotifications$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_webkitNotifications$$member_(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_webkitNotifications$$getter_ = function _get__DOMWindow_webkitNotifications$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_webkitNotifications$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.window$named = function(){
  return this.window$getter().apply(this, arguments);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.window$getter = function(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_window$$member_(this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_window$$member_ = function(_this){
  return native__DOMWindowWrappingImplementation__get__DOMWindow_window(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_window$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_window$$member_(_this);
}
;
_DOMWindowWrappingImplementation$Dart._get__DOMWindow_window$$getter_ = function _get__DOMWindow_window$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._get__DOMWindow_window$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.addEventListener$member = function(type, listener, useCapture){
  if (useCapture == null) {
    _DOMWindowWrappingImplementation$Dart._addEventListener$$member_(this, type, listener);
    return;
  }
   else {
    _DOMWindowWrappingImplementation$Dart._addEventListener_2$$member_(this, type, listener, useCapture);
    return;
  }
}
;
_DOMWindowWrappingImplementation$Dart.prototype.addEventListener$named = function($n, $o, type, listener, useCapture){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 2:
      useCapture = $o.useCapture?(++seen , $o.useCapture):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart.prototype.addEventListener$member.call(this, type, listener, useCapture);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.addEventListener$getter = function addEventListener$getter(){
  return $bind(_DOMWindowWrappingImplementation$Dart.prototype.addEventListener$named, this);
}
;
_DOMWindowWrappingImplementation$Dart._addEventListener$$member_ = function(receiver, type, listener){
  return native__DOMWindowWrappingImplementation__addEventListener(receiver, type, listener);
}
;
_DOMWindowWrappingImplementation$Dart._addEventListener$$named_ = function($n, $o, receiver, type, listener){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._addEventListener$$member_(receiver, type, listener);
}
;
_DOMWindowWrappingImplementation$Dart._addEventListener$$getter_ = function _addEventListener$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._addEventListener$$named_;
}
;
_DOMWindowWrappingImplementation$Dart._addEventListener_2$$member_ = function(receiver, type, listener, useCapture){
  return native__DOMWindowWrappingImplementation__addEventListener_2(receiver, type, listener, useCapture);
}
;
_DOMWindowWrappingImplementation$Dart._addEventListener_2$$named_ = function($n, $o, receiver, type, listener, useCapture){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 4)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._addEventListener_2$$member_(receiver, type, listener, useCapture);
}
;
_DOMWindowWrappingImplementation$Dart._addEventListener_2$$getter_ = function _addEventListener_2$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._addEventListener_2$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.alert$member = function(message){
  _DOMWindowWrappingImplementation$Dart._alert$$member_(this, message);
  return;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.alert$named = function($n, $o, message){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart.prototype.alert$member.call(this, message);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.alert$getter = function alert$getter(){
  return $bind(_DOMWindowWrappingImplementation$Dart.prototype.alert$named, this);
}
;
_DOMWindowWrappingImplementation$Dart._alert$$member_ = function(receiver, message){
  return native__DOMWindowWrappingImplementation__alert(receiver, message);
}
;
_DOMWindowWrappingImplementation$Dart._alert$$named_ = function($n, $o, receiver, message){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._alert$$member_(receiver, message);
}
;
_DOMWindowWrappingImplementation$Dart._alert$$getter_ = function _alert$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._alert$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.atob$member = function(string){
  return _DOMWindowWrappingImplementation$Dart._atob$$member_(this, string);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.atob$named = function($n, $o, string){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart.prototype.atob$member.call(this, string);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.atob$getter = function atob$getter(){
  return $bind(_DOMWindowWrappingImplementation$Dart.prototype.atob$named, this);
}
;
_DOMWindowWrappingImplementation$Dart._atob$$member_ = function(receiver, string){
  return native__DOMWindowWrappingImplementation__atob(receiver, string);
}
;
_DOMWindowWrappingImplementation$Dart._atob$$named_ = function($n, $o, receiver, string){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._atob$$member_(receiver, string);
}
;
_DOMWindowWrappingImplementation$Dart._atob$$getter_ = function _atob$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._atob$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.blur$member = function(){
  _DOMWindowWrappingImplementation$Dart._blur$$member_(this);
  return;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.blur$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart.prototype.blur$member.call(this);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.blur$getter = function blur$getter(){
  return $bind(_DOMWindowWrappingImplementation$Dart.prototype.blur$named, this);
}
;
_DOMWindowWrappingImplementation$Dart._blur$$member_ = function(receiver){
  return native__DOMWindowWrappingImplementation__blur(receiver);
}
;
_DOMWindowWrappingImplementation$Dart._blur$$named_ = function($n, $o, receiver){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._blur$$member_(receiver);
}
;
_DOMWindowWrappingImplementation$Dart._blur$$getter_ = function _blur$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._blur$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.btoa$member = function(string){
  return _DOMWindowWrappingImplementation$Dart._btoa$$member_(this, string);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.btoa$named = function($n, $o, string){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart.prototype.btoa$member.call(this, string);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.btoa$getter = function btoa$getter(){
  return $bind(_DOMWindowWrappingImplementation$Dart.prototype.btoa$named, this);
}
;
_DOMWindowWrappingImplementation$Dart._btoa$$member_ = function(receiver, string){
  return native__DOMWindowWrappingImplementation__btoa(receiver, string);
}
;
_DOMWindowWrappingImplementation$Dart._btoa$$named_ = function($n, $o, receiver, string){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._btoa$$member_(receiver, string);
}
;
_DOMWindowWrappingImplementation$Dart._btoa$$getter_ = function _btoa$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._btoa$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.captureEvents$member = function(){
  _DOMWindowWrappingImplementation$Dart._captureEvents$$member_(this);
  return;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.captureEvents$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart.prototype.captureEvents$member.call(this);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.captureEvents$getter = function captureEvents$getter(){
  return $bind(_DOMWindowWrappingImplementation$Dart.prototype.captureEvents$named, this);
}
;
_DOMWindowWrappingImplementation$Dart._captureEvents$$member_ = function(receiver){
  return native__DOMWindowWrappingImplementation__captureEvents(receiver);
}
;
_DOMWindowWrappingImplementation$Dart._captureEvents$$named_ = function($n, $o, receiver){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._captureEvents$$member_(receiver);
}
;
_DOMWindowWrappingImplementation$Dart._captureEvents$$getter_ = function _captureEvents$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._captureEvents$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.clearInterval$member = function(handle){
  _DOMWindowWrappingImplementation$Dart._clearInterval$$member_(this, handle);
  return;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.clearInterval$named = function($n, $o, handle){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart.prototype.clearInterval$member.call(this, handle);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.clearInterval$getter = function clearInterval$getter(){
  return $bind(_DOMWindowWrappingImplementation$Dart.prototype.clearInterval$named, this);
}
;
_DOMWindowWrappingImplementation$Dart._clearInterval$$member_ = function(receiver, handle){
  return native__DOMWindowWrappingImplementation__clearInterval(receiver, handle);
}
;
_DOMWindowWrappingImplementation$Dart._clearInterval$$named_ = function($n, $o, receiver, handle){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._clearInterval$$member_(receiver, handle);
}
;
_DOMWindowWrappingImplementation$Dart._clearInterval$$getter_ = function _clearInterval$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._clearInterval$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.clearTimeout$member = function(handle){
  _DOMWindowWrappingImplementation$Dart._clearTimeout$$member_(this, handle);
  return;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.clearTimeout$named = function($n, $o, handle){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart.prototype.clearTimeout$member.call(this, handle);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.clearTimeout$getter = function clearTimeout$getter(){
  return $bind(_DOMWindowWrappingImplementation$Dart.prototype.clearTimeout$named, this);
}
;
_DOMWindowWrappingImplementation$Dart._clearTimeout$$member_ = function(receiver, handle){
  return native__DOMWindowWrappingImplementation__clearTimeout(receiver, handle);
}
;
_DOMWindowWrappingImplementation$Dart._clearTimeout$$named_ = function($n, $o, receiver, handle){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._clearTimeout$$member_(receiver, handle);
}
;
_DOMWindowWrappingImplementation$Dart._clearTimeout$$getter_ = function _clearTimeout$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._clearTimeout$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.close$member = function(){
  _DOMWindowWrappingImplementation$Dart._close$$member_(this);
  return;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.close$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart.prototype.close$member.call(this);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.close$getter = function close$getter(){
  return $bind(_DOMWindowWrappingImplementation$Dart.prototype.close$named, this);
}
;
_DOMWindowWrappingImplementation$Dart._close$$member_ = function(receiver){
  return native__DOMWindowWrappingImplementation__close(receiver);
}
;
_DOMWindowWrappingImplementation$Dart._close$$named_ = function($n, $o, receiver){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._close$$member_(receiver);
}
;
_DOMWindowWrappingImplementation$Dart._close$$getter_ = function _close$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._close$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.confirm$member = function(message){
  return _DOMWindowWrappingImplementation$Dart._confirm$$member_(this, message);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.confirm$named = function($n, $o, message){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart.prototype.confirm$member.call(this, message);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.confirm$getter = function confirm$getter(){
  return $bind(_DOMWindowWrappingImplementation$Dart.prototype.confirm$named, this);
}
;
_DOMWindowWrappingImplementation$Dart._confirm$$member_ = function(receiver, message){
  return native__DOMWindowWrappingImplementation__confirm(receiver, message);
}
;
_DOMWindowWrappingImplementation$Dart._confirm$$named_ = function($n, $o, receiver, message){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._confirm$$member_(receiver, message);
}
;
_DOMWindowWrappingImplementation$Dart._confirm$$getter_ = function _confirm$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._confirm$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.createFileReader$member = function(){
  return _DOMWindowWrappingImplementation$Dart._createFileReader$$member_(this);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.createFileReader$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart.prototype.createFileReader$member.call(this);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.createFileReader$getter = function createFileReader$getter(){
  return $bind(_DOMWindowWrappingImplementation$Dart.prototype.createFileReader$named, this);
}
;
_DOMWindowWrappingImplementation$Dart._createFileReader$$member_ = function(receiver){
  return native__DOMWindowWrappingImplementation__createFileReader(receiver);
}
;
_DOMWindowWrappingImplementation$Dart._createFileReader$$named_ = function($n, $o, receiver){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._createFileReader$$member_(receiver);
}
;
_DOMWindowWrappingImplementation$Dart._createFileReader$$getter_ = function _createFileReader$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._createFileReader$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.createWebKitCSSMatrix$member = function(cssValue){
  if (cssValue == null) {
    return _DOMWindowWrappingImplementation$Dart._createWebKitCSSMatrix$$member_(this);
  }
   else {
    return _DOMWindowWrappingImplementation$Dart._createWebKitCSSMatrix_2$$member_(this, cssValue);
  }
}
;
_DOMWindowWrappingImplementation$Dart.prototype.createWebKitCSSMatrix$named = function($n, $o, cssValue){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 0:
      cssValue = $o.cssValue?(++seen , $o.cssValue):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart.prototype.createWebKitCSSMatrix$member.call(this, cssValue);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.createWebKitCSSMatrix$getter = function createWebKitCSSMatrix$getter(){
  return $bind(_DOMWindowWrappingImplementation$Dart.prototype.createWebKitCSSMatrix$named, this);
}
;
_DOMWindowWrappingImplementation$Dart._createWebKitCSSMatrix$$member_ = function(receiver){
  return native__DOMWindowWrappingImplementation__createWebKitCSSMatrix(receiver);
}
;
_DOMWindowWrappingImplementation$Dart._createWebKitCSSMatrix$$named_ = function($n, $o, receiver){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._createWebKitCSSMatrix$$member_(receiver);
}
;
_DOMWindowWrappingImplementation$Dart._createWebKitCSSMatrix$$getter_ = function _createWebKitCSSMatrix$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._createWebKitCSSMatrix$$named_;
}
;
_DOMWindowWrappingImplementation$Dart._createWebKitCSSMatrix_2$$member_ = function(receiver, cssValue){
  return native__DOMWindowWrappingImplementation__createWebKitCSSMatrix_2(receiver, cssValue);
}
;
_DOMWindowWrappingImplementation$Dart._createWebKitCSSMatrix_2$$named_ = function($n, $o, receiver, cssValue){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._createWebKitCSSMatrix_2$$member_(receiver, cssValue);
}
;
_DOMWindowWrappingImplementation$Dart._createWebKitCSSMatrix_2$$getter_ = function _createWebKitCSSMatrix_2$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._createWebKitCSSMatrix_2$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.createWebKitPoint$member = function(x, y){
  return _DOMWindowWrappingImplementation$Dart._createWebKitPoint$$member_(this, x, y);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.createWebKitPoint$named = function($n, $o, x, y){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart.prototype.createWebKitPoint$member.call(this, x, y);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.createWebKitPoint$getter = function createWebKitPoint$getter(){
  return $bind(_DOMWindowWrappingImplementation$Dart.prototype.createWebKitPoint$named, this);
}
;
_DOMWindowWrappingImplementation$Dart._createWebKitPoint$$member_ = function(receiver, x, y){
  return native__DOMWindowWrappingImplementation__createWebKitPoint(receiver, x, y);
}
;
_DOMWindowWrappingImplementation$Dart._createWebKitPoint$$named_ = function($n, $o, receiver, x, y){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._createWebKitPoint$$member_(receiver, x, y);
}
;
_DOMWindowWrappingImplementation$Dart._createWebKitPoint$$getter_ = function _createWebKitPoint$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._createWebKitPoint$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.createXMLHttpRequest$member = function(){
  return _DOMWindowWrappingImplementation$Dart._createXMLHttpRequest$$member_(this);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.createXMLHttpRequest$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart.prototype.createXMLHttpRequest$member.call(this);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.createXMLHttpRequest$getter = function createXMLHttpRequest$getter(){
  return $bind(_DOMWindowWrappingImplementation$Dart.prototype.createXMLHttpRequest$named, this);
}
;
_DOMWindowWrappingImplementation$Dart._createXMLHttpRequest$$member_ = function(receiver){
  return native__DOMWindowWrappingImplementation__createXMLHttpRequest(receiver);
}
;
_DOMWindowWrappingImplementation$Dart._createXMLHttpRequest$$named_ = function($n, $o, receiver){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._createXMLHttpRequest$$member_(receiver);
}
;
_DOMWindowWrappingImplementation$Dart._createXMLHttpRequest$$getter_ = function _createXMLHttpRequest$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._createXMLHttpRequest$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.dispatchEvent$member = function(evt){
  return _DOMWindowWrappingImplementation$Dart._dispatchEvent$$member_(this, evt);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.dispatchEvent$named = function($n, $o, evt){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart.prototype.dispatchEvent$member.call(this, evt);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.dispatchEvent$getter = function dispatchEvent$getter(){
  return $bind(_DOMWindowWrappingImplementation$Dart.prototype.dispatchEvent$named, this);
}
;
_DOMWindowWrappingImplementation$Dart._dispatchEvent$$member_ = function(receiver, evt){
  return native__DOMWindowWrappingImplementation__dispatchEvent(receiver, evt);
}
;
_DOMWindowWrappingImplementation$Dart._dispatchEvent$$named_ = function($n, $o, receiver, evt){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._dispatchEvent$$member_(receiver, evt);
}
;
_DOMWindowWrappingImplementation$Dart._dispatchEvent$$getter_ = function _dispatchEvent$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._dispatchEvent$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.find$member = function(string, caseSensitive, backwards, wrap, wholeWord, searchInFrames, showDialog){
  return _DOMWindowWrappingImplementation$Dart._find$$member_(this, string, caseSensitive, backwards, wrap, wholeWord, searchInFrames, showDialog);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.find$named = function($n, $o, string, caseSensitive, backwards, wrap, wholeWord, searchInFrames, showDialog){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 7)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart.prototype.find$member.call(this, string, caseSensitive, backwards, wrap, wholeWord, searchInFrames, showDialog);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.find$getter = function find$getter(){
  return $bind(_DOMWindowWrappingImplementation$Dart.prototype.find$named, this);
}
;
_DOMWindowWrappingImplementation$Dart._find$$member_ = function(receiver, string, caseSensitive, backwards, wrap, wholeWord, searchInFrames, showDialog){
  return native__DOMWindowWrappingImplementation__find(receiver, string, caseSensitive, backwards, wrap, wholeWord, searchInFrames, showDialog);
}
;
_DOMWindowWrappingImplementation$Dart._find$$named_ = function($n, $o, receiver, string, caseSensitive, backwards, wrap, wholeWord, searchInFrames, showDialog){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 8)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._find$$member_(receiver, string, caseSensitive, backwards, wrap, wholeWord, searchInFrames, showDialog);
}
;
_DOMWindowWrappingImplementation$Dart._find$$getter_ = function _find$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._find$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.focus$member = function(){
  _DOMWindowWrappingImplementation$Dart._focus$$member_(this);
  return;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.focus$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart.prototype.focus$member.call(this);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.focus$getter = function focus$getter(){
  return $bind(_DOMWindowWrappingImplementation$Dart.prototype.focus$named, this);
}
;
_DOMWindowWrappingImplementation$Dart._focus$$member_ = function(receiver){
  return native__DOMWindowWrappingImplementation__focus(receiver);
}
;
_DOMWindowWrappingImplementation$Dart._focus$$named_ = function($n, $o, receiver){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._focus$$member_(receiver);
}
;
_DOMWindowWrappingImplementation$Dart._focus$$getter_ = function _focus$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._focus$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.getComputedStyle$member = function(element, pseudoElement){
  return _DOMWindowWrappingImplementation$Dart._getComputedStyle$$member_(this, element, pseudoElement);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.getComputedStyle$named = function($n, $o, element, pseudoElement){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart.prototype.getComputedStyle$member.call(this, element, pseudoElement);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.getComputedStyle$getter = function getComputedStyle$getter(){
  return $bind(_DOMWindowWrappingImplementation$Dart.prototype.getComputedStyle$named, this);
}
;
_DOMWindowWrappingImplementation$Dart._getComputedStyle$$member_ = function(receiver, element, pseudoElement){
  return native__DOMWindowWrappingImplementation__getComputedStyle(receiver, element, pseudoElement);
}
;
_DOMWindowWrappingImplementation$Dart._getComputedStyle$$named_ = function($n, $o, receiver, element, pseudoElement){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._getComputedStyle$$member_(receiver, element, pseudoElement);
}
;
_DOMWindowWrappingImplementation$Dart._getComputedStyle$$getter_ = function _getComputedStyle$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._getComputedStyle$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.getSelection$member = function(){
  return _DOMWindowWrappingImplementation$Dart._getSelection$$member_(this);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.getSelection$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart.prototype.getSelection$member.call(this);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.getSelection$getter = function getSelection$getter(){
  return $bind(_DOMWindowWrappingImplementation$Dart.prototype.getSelection$named, this);
}
;
_DOMWindowWrappingImplementation$Dart._getSelection$$member_ = function(receiver){
  return native__DOMWindowWrappingImplementation__getSelection(receiver);
}
;
_DOMWindowWrappingImplementation$Dart._getSelection$$named_ = function($n, $o, receiver){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._getSelection$$member_(receiver);
}
;
_DOMWindowWrappingImplementation$Dart._getSelection$$getter_ = function _getSelection$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._getSelection$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.matchMedia$member = function(query){
  return _DOMWindowWrappingImplementation$Dart._matchMedia$$member_(this, query);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.matchMedia$named = function($n, $o, query){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart.prototype.matchMedia$member.call(this, query);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.matchMedia$getter = function matchMedia$getter(){
  return $bind(_DOMWindowWrappingImplementation$Dart.prototype.matchMedia$named, this);
}
;
_DOMWindowWrappingImplementation$Dart._matchMedia$$member_ = function(receiver, query){
  return native__DOMWindowWrappingImplementation__matchMedia(receiver, query);
}
;
_DOMWindowWrappingImplementation$Dart._matchMedia$$named_ = function($n, $o, receiver, query){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._matchMedia$$member_(receiver, query);
}
;
_DOMWindowWrappingImplementation$Dart._matchMedia$$getter_ = function _matchMedia$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._matchMedia$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.moveBy$member = function(x, y){
  _DOMWindowWrappingImplementation$Dart._moveBy$$member_(this, x, y);
  return;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.moveBy$named = function($n, $o, x, y){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart.prototype.moveBy$member.call(this, x, y);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.moveBy$getter = function moveBy$getter(){
  return $bind(_DOMWindowWrappingImplementation$Dart.prototype.moveBy$named, this);
}
;
_DOMWindowWrappingImplementation$Dart._moveBy$$member_ = function(receiver, x, y){
  return native__DOMWindowWrappingImplementation__moveBy(receiver, x, y);
}
;
_DOMWindowWrappingImplementation$Dart._moveBy$$named_ = function($n, $o, receiver, x, y){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._moveBy$$member_(receiver, x, y);
}
;
_DOMWindowWrappingImplementation$Dart._moveBy$$getter_ = function _moveBy$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._moveBy$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.moveTo$member = function(x, y){
  _DOMWindowWrappingImplementation$Dart._moveTo$$member_(this, x, y);
  return;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.moveTo$named = function($n, $o, x, y){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart.prototype.moveTo$member.call(this, x, y);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.moveTo$getter = function moveTo$getter(){
  return $bind(_DOMWindowWrappingImplementation$Dart.prototype.moveTo$named, this);
}
;
_DOMWindowWrappingImplementation$Dart._moveTo$$member_ = function(receiver, x, y){
  return native__DOMWindowWrappingImplementation__moveTo(receiver, x, y);
}
;
_DOMWindowWrappingImplementation$Dart._moveTo$$named_ = function($n, $o, receiver, x, y){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._moveTo$$member_(receiver, x, y);
}
;
_DOMWindowWrappingImplementation$Dart._moveTo$$getter_ = function _moveTo$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._moveTo$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.open$member = function(url, name_0, options){
  if (options == null) {
    return _DOMWindowWrappingImplementation$Dart._open$$member_(this, url, name_0);
  }
   else {
    return _DOMWindowWrappingImplementation$Dart._open_2$$member_(this, url, name_0, options);
  }
}
;
_DOMWindowWrappingImplementation$Dart.prototype.open$named = function($n, $o, url, name_0, options){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 2:
      options = $o.options?(++seen , $o.options):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart.prototype.open$member.call(this, url, name_0, options);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.open$getter = function open$getter(){
  return $bind(_DOMWindowWrappingImplementation$Dart.prototype.open$named, this);
}
;
_DOMWindowWrappingImplementation$Dart._open$$member_ = function(receiver, url, name_0){
  return native__DOMWindowWrappingImplementation__open(receiver, url, name_0);
}
;
_DOMWindowWrappingImplementation$Dart._open$$named_ = function($n, $o, receiver, url, name_0){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._open$$member_(receiver, url, name_0);
}
;
_DOMWindowWrappingImplementation$Dart._open$$getter_ = function _open$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._open$$named_;
}
;
_DOMWindowWrappingImplementation$Dart._open_2$$member_ = function(receiver, url, name_0, options){
  return native__DOMWindowWrappingImplementation__open_2(receiver, url, name_0, options);
}
;
_DOMWindowWrappingImplementation$Dart._open_2$$named_ = function($n, $o, receiver, url, name_0, options){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 4)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._open_2$$member_(receiver, url, name_0, options);
}
;
_DOMWindowWrappingImplementation$Dart._open_2$$getter_ = function _open_2$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._open_2$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.postMessage$member = function(message, messagePort_OR_targetOrigin, targetOrigin){
  var tmp$0;
  if (String.$instanceOf(messagePort_OR_targetOrigin)) {
    if (targetOrigin == null) {
      _DOMWindowWrappingImplementation$Dart._postMessage$$member_(this, message, messagePort_OR_targetOrigin);
      return;
    }
  }
   else {
    if (!!(tmp$0 = messagePort_OR_targetOrigin , tmp$0 != null && tmp$0.$implements$MessagePort$Dart)) {
      _DOMWindowWrappingImplementation$Dart._postMessage_2$$member_(this, message, messagePort_OR_targetOrigin, targetOrigin);
      return;
    }
  }
  $Dart$ThrowException('Incorrect number or type of arguments');
}
;
_DOMWindowWrappingImplementation$Dart.prototype.postMessage$named = function($n, $o, message, messagePort_OR_targetOrigin, targetOrigin){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 2:
      targetOrigin = $o.targetOrigin?(++seen , $o.targetOrigin):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart.prototype.postMessage$member.call(this, message, messagePort_OR_targetOrigin, targetOrigin);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.postMessage$getter = function postMessage$getter(){
  return $bind(_DOMWindowWrappingImplementation$Dart.prototype.postMessage$named, this);
}
;
_DOMWindowWrappingImplementation$Dart._postMessage$$member_ = function(receiver, message, messagePort_OR_targetOrigin){
  return native__DOMWindowWrappingImplementation__postMessage(receiver, message, messagePort_OR_targetOrigin);
}
;
_DOMWindowWrappingImplementation$Dart._postMessage$$named_ = function($n, $o, receiver, message, messagePort_OR_targetOrigin){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._postMessage$$member_(receiver, message, messagePort_OR_targetOrigin);
}
;
_DOMWindowWrappingImplementation$Dart._postMessage$$getter_ = function _postMessage$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._postMessage$$named_;
}
;
_DOMWindowWrappingImplementation$Dart._postMessage_2$$member_ = function(receiver, message, messagePort_OR_targetOrigin, targetOrigin){
  return native__DOMWindowWrappingImplementation__postMessage_2(receiver, message, messagePort_OR_targetOrigin, targetOrigin);
}
;
_DOMWindowWrappingImplementation$Dart._postMessage_2$$named_ = function($n, $o, receiver, message, messagePort_OR_targetOrigin, targetOrigin){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 4)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._postMessage_2$$member_(receiver, message, messagePort_OR_targetOrigin, targetOrigin);
}
;
_DOMWindowWrappingImplementation$Dart._postMessage_2$$getter_ = function _postMessage_2$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._postMessage_2$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.print$member = function(){
  _DOMWindowWrappingImplementation$Dart._print$$member_(this);
  return;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.print$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart.prototype.print$member.call(this);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.print$getter = function print$getter(){
  return $bind(_DOMWindowWrappingImplementation$Dart.prototype.print$named, this);
}
;
_DOMWindowWrappingImplementation$Dart._print$$member_ = function(receiver){
  return native__DOMWindowWrappingImplementation__print(receiver);
}
;
_DOMWindowWrappingImplementation$Dart._print$$named_ = function($n, $o, receiver){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._print$$member_(receiver);
}
;
_DOMWindowWrappingImplementation$Dart._print$$getter_ = function _print$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._print$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.prompt$member = function(message, defaultValue){
  return _DOMWindowWrappingImplementation$Dart._prompt$$member_(this, message, defaultValue);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.prompt$named = function($n, $o, message, defaultValue){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart.prototype.prompt$member.call(this, message, defaultValue);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.prompt$getter = function prompt$getter(){
  return $bind(_DOMWindowWrappingImplementation$Dart.prototype.prompt$named, this);
}
;
_DOMWindowWrappingImplementation$Dart._prompt$$member_ = function(receiver, message, defaultValue){
  return native__DOMWindowWrappingImplementation__prompt(receiver, message, defaultValue);
}
;
_DOMWindowWrappingImplementation$Dart._prompt$$named_ = function($n, $o, receiver, message, defaultValue){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._prompt$$member_(receiver, message, defaultValue);
}
;
_DOMWindowWrappingImplementation$Dart._prompt$$getter_ = function _prompt$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._prompt$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.releaseEvents$member = function(){
  _DOMWindowWrappingImplementation$Dart._releaseEvents$$member_(this);
  return;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.releaseEvents$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart.prototype.releaseEvents$member.call(this);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.releaseEvents$getter = function releaseEvents$getter(){
  return $bind(_DOMWindowWrappingImplementation$Dart.prototype.releaseEvents$named, this);
}
;
_DOMWindowWrappingImplementation$Dart._releaseEvents$$member_ = function(receiver){
  return native__DOMWindowWrappingImplementation__releaseEvents(receiver);
}
;
_DOMWindowWrappingImplementation$Dart._releaseEvents$$named_ = function($n, $o, receiver){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._releaseEvents$$member_(receiver);
}
;
_DOMWindowWrappingImplementation$Dart._releaseEvents$$getter_ = function _releaseEvents$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._releaseEvents$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.removeEventListener$member = function(type, listener, useCapture){
  if (useCapture == null) {
    _DOMWindowWrappingImplementation$Dart._removeEventListener$$member_(this, type, listener);
    return;
  }
   else {
    _DOMWindowWrappingImplementation$Dart._removeEventListener_2$$member_(this, type, listener, useCapture);
    return;
  }
}
;
_DOMWindowWrappingImplementation$Dart.prototype.removeEventListener$named = function($n, $o, type, listener, useCapture){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 2:
      useCapture = $o.useCapture?(++seen , $o.useCapture):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart.prototype.removeEventListener$member.call(this, type, listener, useCapture);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.removeEventListener$getter = function removeEventListener$getter(){
  return $bind(_DOMWindowWrappingImplementation$Dart.prototype.removeEventListener$named, this);
}
;
_DOMWindowWrappingImplementation$Dart._removeEventListener$$member_ = function(receiver, type, listener){
  return native__DOMWindowWrappingImplementation__removeEventListener(receiver, type, listener);
}
;
_DOMWindowWrappingImplementation$Dart._removeEventListener$$named_ = function($n, $o, receiver, type, listener){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._removeEventListener$$member_(receiver, type, listener);
}
;
_DOMWindowWrappingImplementation$Dart._removeEventListener$$getter_ = function _removeEventListener$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._removeEventListener$$named_;
}
;
_DOMWindowWrappingImplementation$Dart._removeEventListener_2$$member_ = function(receiver, type, listener, useCapture){
  return native__DOMWindowWrappingImplementation__removeEventListener_2(receiver, type, listener, useCapture);
}
;
_DOMWindowWrappingImplementation$Dart._removeEventListener_2$$named_ = function($n, $o, receiver, type, listener, useCapture){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 4)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._removeEventListener_2$$member_(receiver, type, listener, useCapture);
}
;
_DOMWindowWrappingImplementation$Dart._removeEventListener_2$$getter_ = function _removeEventListener_2$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._removeEventListener_2$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.resizeBy$member = function(x, y){
  _DOMWindowWrappingImplementation$Dart._resizeBy$$member_(this, x, y);
  return;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.resizeBy$named = function($n, $o, x, y){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart.prototype.resizeBy$member.call(this, x, y);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.resizeBy$getter = function resizeBy$getter(){
  return $bind(_DOMWindowWrappingImplementation$Dart.prototype.resizeBy$named, this);
}
;
_DOMWindowWrappingImplementation$Dart._resizeBy$$member_ = function(receiver, x, y){
  return native__DOMWindowWrappingImplementation__resizeBy(receiver, x, y);
}
;
_DOMWindowWrappingImplementation$Dart._resizeBy$$named_ = function($n, $o, receiver, x, y){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._resizeBy$$member_(receiver, x, y);
}
;
_DOMWindowWrappingImplementation$Dart._resizeBy$$getter_ = function _resizeBy$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._resizeBy$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.resizeTo$member = function(width, height){
  _DOMWindowWrappingImplementation$Dart._resizeTo$$member_(this, width, height);
  return;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.resizeTo$named = function($n, $o, width, height){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart.prototype.resizeTo$member.call(this, width, height);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.resizeTo$getter = function resizeTo$getter(){
  return $bind(_DOMWindowWrappingImplementation$Dart.prototype.resizeTo$named, this);
}
;
_DOMWindowWrappingImplementation$Dart._resizeTo$$member_ = function(receiver, width, height){
  return native__DOMWindowWrappingImplementation__resizeTo(receiver, width, height);
}
;
_DOMWindowWrappingImplementation$Dart._resizeTo$$named_ = function($n, $o, receiver, width, height){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._resizeTo$$member_(receiver, width, height);
}
;
_DOMWindowWrappingImplementation$Dart._resizeTo$$getter_ = function _resizeTo$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._resizeTo$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.scroll$member = function(x, y){
  _DOMWindowWrappingImplementation$Dart._scroll$$member_(this, x, y);
  return;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.scroll$named = function($n, $o, x, y){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart.prototype.scroll$member.call(this, x, y);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.scroll$getter = function scroll$getter(){
  return $bind(_DOMWindowWrappingImplementation$Dart.prototype.scroll$named, this);
}
;
_DOMWindowWrappingImplementation$Dart._scroll$$member_ = function(receiver, x, y){
  return native__DOMWindowWrappingImplementation__scroll(receiver, x, y);
}
;
_DOMWindowWrappingImplementation$Dart._scroll$$named_ = function($n, $o, receiver, x, y){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._scroll$$member_(receiver, x, y);
}
;
_DOMWindowWrappingImplementation$Dart._scroll$$getter_ = function _scroll$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._scroll$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.scrollBy$member = function(x, y){
  _DOMWindowWrappingImplementation$Dart._scrollBy$$member_(this, x, y);
  return;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.scrollBy$named = function($n, $o, x, y){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart.prototype.scrollBy$member.call(this, x, y);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.scrollBy$getter = function scrollBy$getter(){
  return $bind(_DOMWindowWrappingImplementation$Dart.prototype.scrollBy$named, this);
}
;
_DOMWindowWrappingImplementation$Dart._scrollBy$$member_ = function(receiver, x, y){
  return native__DOMWindowWrappingImplementation__scrollBy(receiver, x, y);
}
;
_DOMWindowWrappingImplementation$Dart._scrollBy$$named_ = function($n, $o, receiver, x, y){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._scrollBy$$member_(receiver, x, y);
}
;
_DOMWindowWrappingImplementation$Dart._scrollBy$$getter_ = function _scrollBy$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._scrollBy$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.scrollTo$member = function(x, y){
  _DOMWindowWrappingImplementation$Dart._scrollTo$$member_(this, x, y);
  return;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.scrollTo$named = function($n, $o, x, y){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart.prototype.scrollTo$member.call(this, x, y);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.scrollTo$getter = function scrollTo$getter(){
  return $bind(_DOMWindowWrappingImplementation$Dart.prototype.scrollTo$named, this);
}
;
_DOMWindowWrappingImplementation$Dart._scrollTo$$member_ = function(receiver, x, y){
  return native__DOMWindowWrappingImplementation__scrollTo(receiver, x, y);
}
;
_DOMWindowWrappingImplementation$Dart._scrollTo$$named_ = function($n, $o, receiver, x, y){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._scrollTo$$member_(receiver, x, y);
}
;
_DOMWindowWrappingImplementation$Dart._scrollTo$$getter_ = function _scrollTo$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._scrollTo$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.setInterval$member = function(handler, timeout){
  return _DOMWindowWrappingImplementation$Dart._setInterval$$member_(this, handler, timeout);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.setInterval$named = function($n, $o, handler, timeout){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart.prototype.setInterval$member.call(this, handler, timeout);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.setInterval$getter = function setInterval$getter(){
  return $bind(_DOMWindowWrappingImplementation$Dart.prototype.setInterval$named, this);
}
;
_DOMWindowWrappingImplementation$Dart._setInterval$$member_ = function(receiver, handler, timeout){
  return native__DOMWindowWrappingImplementation__setInterval(receiver, handler, timeout);
}
;
_DOMWindowWrappingImplementation$Dart._setInterval$$named_ = function($n, $o, receiver, handler, timeout){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._setInterval$$member_(receiver, handler, timeout);
}
;
_DOMWindowWrappingImplementation$Dart._setInterval$$getter_ = function _setInterval$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._setInterval$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.setTimeout$member = function(handler, timeout){
  return _DOMWindowWrappingImplementation$Dart._setTimeout$$member_(this, handler, timeout);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.setTimeout$named = function($n, $o, handler, timeout){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart.prototype.setTimeout$member.call(this, handler, timeout);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.setTimeout$getter = function setTimeout$getter(){
  return $bind(_DOMWindowWrappingImplementation$Dart.prototype.setTimeout$named, this);
}
;
_DOMWindowWrappingImplementation$Dart._setTimeout$$member_ = function(receiver, handler, timeout){
  return native__DOMWindowWrappingImplementation__setTimeout(receiver, handler, timeout);
}
;
_DOMWindowWrappingImplementation$Dart._setTimeout$$named_ = function($n, $o, receiver, handler, timeout){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._setTimeout$$member_(receiver, handler, timeout);
}
;
_DOMWindowWrappingImplementation$Dart._setTimeout$$getter_ = function _setTimeout$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._setTimeout$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.showModalDialog$member = function(url, dialogArgs, featureArgs){
  if (dialogArgs == null) {
    if (featureArgs == null) {
      return _DOMWindowWrappingImplementation$Dart._showModalDialog$$member_(this, url);
    }
  }
   else {
    if (featureArgs == null) {
      return _DOMWindowWrappingImplementation$Dart._showModalDialog_2$$member_(this, url, dialogArgs);
    }
     else {
      return _DOMWindowWrappingImplementation$Dart._showModalDialog_3$$member_(this, url, dialogArgs, featureArgs);
    }
  }
  $Dart$ThrowException('Incorrect number or type of arguments');
}
;
_DOMWindowWrappingImplementation$Dart.prototype.showModalDialog$named = function($n, $o, url, dialogArgs, featureArgs){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 1:
      dialogArgs = $o.dialogArgs?(++seen , $o.dialogArgs):(++def , $Dart$Null);
    case 2:
      featureArgs = $o.featureArgs?(++seen , $o.featureArgs):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart.prototype.showModalDialog$member.call(this, url, dialogArgs, featureArgs);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.showModalDialog$getter = function showModalDialog$getter(){
  return $bind(_DOMWindowWrappingImplementation$Dart.prototype.showModalDialog$named, this);
}
;
_DOMWindowWrappingImplementation$Dart._showModalDialog$$member_ = function(receiver, url){
  return native__DOMWindowWrappingImplementation__showModalDialog(receiver, url);
}
;
_DOMWindowWrappingImplementation$Dart._showModalDialog$$named_ = function($n, $o, receiver, url){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._showModalDialog$$member_(receiver, url);
}
;
_DOMWindowWrappingImplementation$Dart._showModalDialog$$getter_ = function _showModalDialog$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._showModalDialog$$named_;
}
;
_DOMWindowWrappingImplementation$Dart._showModalDialog_2$$member_ = function(receiver, url, dialogArgs){
  return native__DOMWindowWrappingImplementation__showModalDialog_2(receiver, url, dialogArgs);
}
;
_DOMWindowWrappingImplementation$Dart._showModalDialog_2$$named_ = function($n, $o, receiver, url, dialogArgs){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._showModalDialog_2$$member_(receiver, url, dialogArgs);
}
;
_DOMWindowWrappingImplementation$Dart._showModalDialog_2$$getter_ = function _showModalDialog_2$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._showModalDialog_2$$named_;
}
;
_DOMWindowWrappingImplementation$Dart._showModalDialog_3$$member_ = function(receiver, url, dialogArgs, featureArgs){
  return native__DOMWindowWrappingImplementation__showModalDialog_3(receiver, url, dialogArgs, featureArgs);
}
;
_DOMWindowWrappingImplementation$Dart._showModalDialog_3$$named_ = function($n, $o, receiver, url, dialogArgs, featureArgs){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 4)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._showModalDialog_3$$member_(receiver, url, dialogArgs, featureArgs);
}
;
_DOMWindowWrappingImplementation$Dart._showModalDialog_3$$getter_ = function _showModalDialog_3$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._showModalDialog_3$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.stop$member = function(){
  _DOMWindowWrappingImplementation$Dart._stop$$member_(this);
  return;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.stop$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart.prototype.stop$member.call(this);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.stop$getter = function stop$getter(){
  return $bind(_DOMWindowWrappingImplementation$Dart.prototype.stop$named, this);
}
;
_DOMWindowWrappingImplementation$Dart._stop$$member_ = function(receiver){
  return native__DOMWindowWrappingImplementation__stop(receiver);
}
;
_DOMWindowWrappingImplementation$Dart._stop$$named_ = function($n, $o, receiver){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._stop$$member_(receiver);
}
;
_DOMWindowWrappingImplementation$Dart._stop$$getter_ = function _stop$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._stop$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.webkitCancelRequestAnimationFrame$member = function(id){
  _DOMWindowWrappingImplementation$Dart._webkitCancelRequestAnimationFrame$$member_(this, id);
  return;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.webkitCancelRequestAnimationFrame$named = function($n, $o, id){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart.prototype.webkitCancelRequestAnimationFrame$member.call(this, id);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.webkitCancelRequestAnimationFrame$getter = function webkitCancelRequestAnimationFrame$getter(){
  return $bind(_DOMWindowWrappingImplementation$Dart.prototype.webkitCancelRequestAnimationFrame$named, this);
}
;
_DOMWindowWrappingImplementation$Dart._webkitCancelRequestAnimationFrame$$member_ = function(receiver, id){
  return native__DOMWindowWrappingImplementation__webkitCancelRequestAnimationFrame(receiver, id);
}
;
_DOMWindowWrappingImplementation$Dart._webkitCancelRequestAnimationFrame$$named_ = function($n, $o, receiver, id){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._webkitCancelRequestAnimationFrame$$member_(receiver, id);
}
;
_DOMWindowWrappingImplementation$Dart._webkitCancelRequestAnimationFrame$$getter_ = function _webkitCancelRequestAnimationFrame$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._webkitCancelRequestAnimationFrame$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.webkitConvertPointFromNodeToPage$member = function(node, p){
  return _DOMWindowWrappingImplementation$Dart._webkitConvertPointFromNodeToPage$$member_(this, node, p);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.webkitConvertPointFromNodeToPage$named = function($n, $o, node, p){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart.prototype.webkitConvertPointFromNodeToPage$member.call(this, node, p);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.webkitConvertPointFromNodeToPage$getter = function webkitConvertPointFromNodeToPage$getter(){
  return $bind(_DOMWindowWrappingImplementation$Dart.prototype.webkitConvertPointFromNodeToPage$named, this);
}
;
_DOMWindowWrappingImplementation$Dart._webkitConvertPointFromNodeToPage$$member_ = function(receiver, node, p){
  return native__DOMWindowWrappingImplementation__webkitConvertPointFromNodeToPage(receiver, node, p);
}
;
_DOMWindowWrappingImplementation$Dart._webkitConvertPointFromNodeToPage$$named_ = function($n, $o, receiver, node, p){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._webkitConvertPointFromNodeToPage$$member_(receiver, node, p);
}
;
_DOMWindowWrappingImplementation$Dart._webkitConvertPointFromNodeToPage$$getter_ = function _webkitConvertPointFromNodeToPage$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._webkitConvertPointFromNodeToPage$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.webkitConvertPointFromPageToNode$member = function(node, p){
  return _DOMWindowWrappingImplementation$Dart._webkitConvertPointFromPageToNode$$member_(this, node, p);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.webkitConvertPointFromPageToNode$named = function($n, $o, node, p){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart.prototype.webkitConvertPointFromPageToNode$member.call(this, node, p);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.webkitConvertPointFromPageToNode$getter = function webkitConvertPointFromPageToNode$getter(){
  return $bind(_DOMWindowWrappingImplementation$Dart.prototype.webkitConvertPointFromPageToNode$named, this);
}
;
_DOMWindowWrappingImplementation$Dart._webkitConvertPointFromPageToNode$$member_ = function(receiver, node, p){
  return native__DOMWindowWrappingImplementation__webkitConvertPointFromPageToNode(receiver, node, p);
}
;
_DOMWindowWrappingImplementation$Dart._webkitConvertPointFromPageToNode$$named_ = function($n, $o, receiver, node, p){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._webkitConvertPointFromPageToNode$$member_(receiver, node, p);
}
;
_DOMWindowWrappingImplementation$Dart._webkitConvertPointFromPageToNode$$getter_ = function _webkitConvertPointFromPageToNode$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._webkitConvertPointFromPageToNode$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.webkitRequestAnimationFrame$member = function(callback, element){
  return _DOMWindowWrappingImplementation$Dart._webkitRequestAnimationFrame$$member_(this, callback, element);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.webkitRequestAnimationFrame$named = function($n, $o, callback, element){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart.prototype.webkitRequestAnimationFrame$member.call(this, callback, element);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.webkitRequestAnimationFrame$getter = function webkitRequestAnimationFrame$getter(){
  return $bind(_DOMWindowWrappingImplementation$Dart.prototype.webkitRequestAnimationFrame$named, this);
}
;
_DOMWindowWrappingImplementation$Dart._webkitRequestAnimationFrame$$member_ = function(receiver, callback, element){
  return native__DOMWindowWrappingImplementation__webkitRequestAnimationFrame(receiver, callback, element);
}
;
_DOMWindowWrappingImplementation$Dart._webkitRequestAnimationFrame$$named_ = function($n, $o, receiver, callback, element){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return _DOMWindowWrappingImplementation$Dart._webkitRequestAnimationFrame$$member_(receiver, callback, element);
}
;
_DOMWindowWrappingImplementation$Dart._webkitRequestAnimationFrame$$getter_ = function _webkitRequestAnimationFrame$$getter_(){
  return _DOMWindowWrappingImplementation$Dart._webkitRequestAnimationFrame$$named_;
}
;
_DOMWindowWrappingImplementation$Dart.prototype.typeName$named = function(){
  return this.typeName$getter().apply(this, arguments);
}
;
_DOMWindowWrappingImplementation$Dart.prototype.typeName$getter = function(){
  return 'DOMWindow';
}
;
