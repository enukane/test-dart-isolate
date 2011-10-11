function _ElementWrappingImplementation$Dart(){
}

_ElementWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('_ElementWrappingImplementation$Dart'), _ElementWrappingImplementation$Dart.$RTTimplements);
}
;
_ElementWrappingImplementation$Dart.$RTTimplements = function(rtt){
  _ElementWrappingImplementation$Dart.$addTo(rtt);
}
;
_ElementWrappingImplementation$Dart.$addTo = function(target){
  var rtt = _ElementWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  _NodeWrappingImplementation$Dart.$addTo(target);
  Element$Dart.$addTo(target);
}
;
_ElementWrappingImplementation$Dart.prototype.$implements$_ElementWrappingImplementation$Dart = 1;
_ElementWrappingImplementation$Dart.prototype.$implements$Element$Dart = 1;
_ElementWrappingImplementation$Dart.prototype.$implements$Node$Dart = 1;
_ElementWrappingImplementation$Dart.prototype.$implements$EventTarget$Dart = 1;
_ElementWrappingImplementation$Dart.prototype.$implements$NodeSelector$Dart = 1;
_ElementWrappingImplementation$Dart.prototype.$implements$ElementTraversal$Dart = 1;
_ElementWrappingImplementation$Dart.prototype.$implements$_NodeWrappingImplementation$Dart = 1;
_ElementWrappingImplementation$Dart.prototype.$implements$DOMWrapperBase$Dart = 1;
_ElementWrappingImplementation$Dart.prototype.$implements$DOMType$Dart = 1;
_ElementWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(_ElementWrappingImplementation$Dart, _NodeWrappingImplementation$Dart);
_ElementWrappingImplementation$Dart.$Constructor = function(){
  _NodeWrappingImplementation$Dart.$Constructor.call(this);
}
;
_ElementWrappingImplementation$Dart.$Initializer = function(){
  _NodeWrappingImplementation$Dart.$Initializer.call(this);
}
;
_ElementWrappingImplementation$Dart._ElementWrappingImplementation$$Factory = function(){
  var tmp$0 = new _ElementWrappingImplementation$Dart;
  tmp$0.$typeInfo = _ElementWrappingImplementation$Dart.$lookupRTT();
  _ElementWrappingImplementation$Dart.$Initializer.call(tmp$0);
  _ElementWrappingImplementation$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
_ElementWrappingImplementation$Dart.create__ElementWrappingImplementation$member = function(){
  return _ElementWrappingImplementation$Dart._ElementWrappingImplementation$$Factory();
}
;
_ElementWrappingImplementation$Dart.create__ElementWrappingImplementation$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _ElementWrappingImplementation$Dart.create__ElementWrappingImplementation$member();
}
;
function native__ElementWrappingImplementation_create__ElementWrappingImplementation(){
  return _ElementWrappingImplementation$Dart.create__ElementWrappingImplementation$member();
}

_ElementWrappingImplementation$Dart.create__ElementWrappingImplementation$getter = function create__ElementWrappingImplementation$getter(){
  return _ElementWrappingImplementation$Dart.create__ElementWrappingImplementation$named;
}
;
_ElementWrappingImplementation$Dart.prototype.childElementCount$named = function(){
  return this.childElementCount$getter().apply(this, arguments);
}
;
_ElementWrappingImplementation$Dart.prototype.childElementCount$getter = function(){
  return _ElementWrappingImplementation$Dart._get__Element_childElementCount$$member_(this);
}
;
_ElementWrappingImplementation$Dart._get__Element_childElementCount$$member_ = function(_this){
  return native__ElementWrappingImplementation__get__Element_childElementCount(_this);
}
;
_ElementWrappingImplementation$Dart._get__Element_childElementCount$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _ElementWrappingImplementation$Dart._get__Element_childElementCount$$member_(_this);
}
;
_ElementWrappingImplementation$Dart._get__Element_childElementCount$$getter_ = function _get__Element_childElementCount$$getter_(){
  return _ElementWrappingImplementation$Dart._get__Element_childElementCount$$named_;
}
;
_ElementWrappingImplementation$Dart.prototype.clientHeight$named = function(){
  return this.clientHeight$getter().apply(this, arguments);
}
;
_ElementWrappingImplementation$Dart.prototype.clientHeight$getter = function(){
  return _ElementWrappingImplementation$Dart._get__Element_clientHeight$$member_(this);
}
;
_ElementWrappingImplementation$Dart._get__Element_clientHeight$$member_ = function(_this){
  return native__ElementWrappingImplementation__get__Element_clientHeight(_this);
}
;
_ElementWrappingImplementation$Dart._get__Element_clientHeight$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _ElementWrappingImplementation$Dart._get__Element_clientHeight$$member_(_this);
}
;
_ElementWrappingImplementation$Dart._get__Element_clientHeight$$getter_ = function _get__Element_clientHeight$$getter_(){
  return _ElementWrappingImplementation$Dart._get__Element_clientHeight$$named_;
}
;
_ElementWrappingImplementation$Dart.prototype.clientLeft$named = function(){
  return this.clientLeft$getter().apply(this, arguments);
}
;
_ElementWrappingImplementation$Dart.prototype.clientLeft$getter = function(){
  return _ElementWrappingImplementation$Dart._get__Element_clientLeft$$member_(this);
}
;
_ElementWrappingImplementation$Dart._get__Element_clientLeft$$member_ = function(_this){
  return native__ElementWrappingImplementation__get__Element_clientLeft(_this);
}
;
_ElementWrappingImplementation$Dart._get__Element_clientLeft$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _ElementWrappingImplementation$Dart._get__Element_clientLeft$$member_(_this);
}
;
_ElementWrappingImplementation$Dart._get__Element_clientLeft$$getter_ = function _get__Element_clientLeft$$getter_(){
  return _ElementWrappingImplementation$Dart._get__Element_clientLeft$$named_;
}
;
_ElementWrappingImplementation$Dart.prototype.clientTop$named = function(){
  return this.clientTop$getter().apply(this, arguments);
}
;
_ElementWrappingImplementation$Dart.prototype.clientTop$getter = function(){
  return _ElementWrappingImplementation$Dart._get__Element_clientTop$$member_(this);
}
;
_ElementWrappingImplementation$Dart._get__Element_clientTop$$member_ = function(_this){
  return native__ElementWrappingImplementation__get__Element_clientTop(_this);
}
;
_ElementWrappingImplementation$Dart._get__Element_clientTop$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _ElementWrappingImplementation$Dart._get__Element_clientTop$$member_(_this);
}
;
_ElementWrappingImplementation$Dart._get__Element_clientTop$$getter_ = function _get__Element_clientTop$$getter_(){
  return _ElementWrappingImplementation$Dart._get__Element_clientTop$$named_;
}
;
_ElementWrappingImplementation$Dart.prototype.clientWidth$named = function(){
  return this.clientWidth$getter().apply(this, arguments);
}
;
_ElementWrappingImplementation$Dart.prototype.clientWidth$getter = function(){
  return _ElementWrappingImplementation$Dart._get__Element_clientWidth$$member_(this);
}
;
_ElementWrappingImplementation$Dart._get__Element_clientWidth$$member_ = function(_this){
  return native__ElementWrappingImplementation__get__Element_clientWidth(_this);
}
;
_ElementWrappingImplementation$Dart._get__Element_clientWidth$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _ElementWrappingImplementation$Dart._get__Element_clientWidth$$member_(_this);
}
;
_ElementWrappingImplementation$Dart._get__Element_clientWidth$$getter_ = function _get__Element_clientWidth$$getter_(){
  return _ElementWrappingImplementation$Dart._get__Element_clientWidth$$named_;
}
;
_ElementWrappingImplementation$Dart.prototype.firstElementChild$named = function(){
  return this.firstElementChild$getter().apply(this, arguments);
}
;
_ElementWrappingImplementation$Dart.prototype.firstElementChild$getter = function(){
  return _ElementWrappingImplementation$Dart._get__Element_firstElementChild$$member_(this);
}
;
_ElementWrappingImplementation$Dart._get__Element_firstElementChild$$member_ = function(_this){
  return native__ElementWrappingImplementation__get__Element_firstElementChild(_this);
}
;
_ElementWrappingImplementation$Dart._get__Element_firstElementChild$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _ElementWrappingImplementation$Dart._get__Element_firstElementChild$$member_(_this);
}
;
_ElementWrappingImplementation$Dart._get__Element_firstElementChild$$getter_ = function _get__Element_firstElementChild$$getter_(){
  return _ElementWrappingImplementation$Dart._get__Element_firstElementChild$$named_;
}
;
_ElementWrappingImplementation$Dart.prototype.lastElementChild$named = function(){
  return this.lastElementChild$getter().apply(this, arguments);
}
;
_ElementWrappingImplementation$Dart.prototype.lastElementChild$getter = function(){
  return _ElementWrappingImplementation$Dart._get__Element_lastElementChild$$member_(this);
}
;
_ElementWrappingImplementation$Dart._get__Element_lastElementChild$$member_ = function(_this){
  return native__ElementWrappingImplementation__get__Element_lastElementChild(_this);
}
;
_ElementWrappingImplementation$Dart._get__Element_lastElementChild$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _ElementWrappingImplementation$Dart._get__Element_lastElementChild$$member_(_this);
}
;
_ElementWrappingImplementation$Dart._get__Element_lastElementChild$$getter_ = function _get__Element_lastElementChild$$getter_(){
  return _ElementWrappingImplementation$Dart._get__Element_lastElementChild$$named_;
}
;
_ElementWrappingImplementation$Dart.prototype.nextElementSibling$named = function(){
  return this.nextElementSibling$getter().apply(this, arguments);
}
;
_ElementWrappingImplementation$Dart.prototype.nextElementSibling$getter = function(){
  return _ElementWrappingImplementation$Dart._get__Element_nextElementSibling$$member_(this);
}
;
_ElementWrappingImplementation$Dart._get__Element_nextElementSibling$$member_ = function(_this){
  return native__ElementWrappingImplementation__get__Element_nextElementSibling(_this);
}
;
_ElementWrappingImplementation$Dart._get__Element_nextElementSibling$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _ElementWrappingImplementation$Dart._get__Element_nextElementSibling$$member_(_this);
}
;
_ElementWrappingImplementation$Dart._get__Element_nextElementSibling$$getter_ = function _get__Element_nextElementSibling$$getter_(){
  return _ElementWrappingImplementation$Dart._get__Element_nextElementSibling$$named_;
}
;
_ElementWrappingImplementation$Dart.prototype.offsetHeight$named = function(){
  return this.offsetHeight$getter().apply(this, arguments);
}
;
_ElementWrappingImplementation$Dart.prototype.offsetHeight$getter = function(){
  return _ElementWrappingImplementation$Dart._get__Element_offsetHeight$$member_(this);
}
;
_ElementWrappingImplementation$Dart._get__Element_offsetHeight$$member_ = function(_this){
  return native__ElementWrappingImplementation__get__Element_offsetHeight(_this);
}
;
_ElementWrappingImplementation$Dart._get__Element_offsetHeight$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _ElementWrappingImplementation$Dart._get__Element_offsetHeight$$member_(_this);
}
;
_ElementWrappingImplementation$Dart._get__Element_offsetHeight$$getter_ = function _get__Element_offsetHeight$$getter_(){
  return _ElementWrappingImplementation$Dart._get__Element_offsetHeight$$named_;
}
;
_ElementWrappingImplementation$Dart.prototype.offsetLeft$named = function(){
  return this.offsetLeft$getter().apply(this, arguments);
}
;
_ElementWrappingImplementation$Dart.prototype.offsetLeft$getter = function(){
  return _ElementWrappingImplementation$Dart._get__Element_offsetLeft$$member_(this);
}
;
_ElementWrappingImplementation$Dart._get__Element_offsetLeft$$member_ = function(_this){
  return native__ElementWrappingImplementation__get__Element_offsetLeft(_this);
}
;
_ElementWrappingImplementation$Dart._get__Element_offsetLeft$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _ElementWrappingImplementation$Dart._get__Element_offsetLeft$$member_(_this);
}
;
_ElementWrappingImplementation$Dart._get__Element_offsetLeft$$getter_ = function _get__Element_offsetLeft$$getter_(){
  return _ElementWrappingImplementation$Dart._get__Element_offsetLeft$$named_;
}
;
_ElementWrappingImplementation$Dart.prototype.offsetParent$named = function(){
  return this.offsetParent$getter().apply(this, arguments);
}
;
_ElementWrappingImplementation$Dart.prototype.offsetParent$getter = function(){
  return _ElementWrappingImplementation$Dart._get__Element_offsetParent$$member_(this);
}
;
_ElementWrappingImplementation$Dart._get__Element_offsetParent$$member_ = function(_this){
  return native__ElementWrappingImplementation__get__Element_offsetParent(_this);
}
;
_ElementWrappingImplementation$Dart._get__Element_offsetParent$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _ElementWrappingImplementation$Dart._get__Element_offsetParent$$member_(_this);
}
;
_ElementWrappingImplementation$Dart._get__Element_offsetParent$$getter_ = function _get__Element_offsetParent$$getter_(){
  return _ElementWrappingImplementation$Dart._get__Element_offsetParent$$named_;
}
;
_ElementWrappingImplementation$Dart.prototype.offsetTop$named = function(){
  return this.offsetTop$getter().apply(this, arguments);
}
;
_ElementWrappingImplementation$Dart.prototype.offsetTop$getter = function(){
  return _ElementWrappingImplementation$Dart._get__Element_offsetTop$$member_(this);
}
;
_ElementWrappingImplementation$Dart._get__Element_offsetTop$$member_ = function(_this){
  return native__ElementWrappingImplementation__get__Element_offsetTop(_this);
}
;
_ElementWrappingImplementation$Dart._get__Element_offsetTop$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _ElementWrappingImplementation$Dart._get__Element_offsetTop$$member_(_this);
}
;
_ElementWrappingImplementation$Dart._get__Element_offsetTop$$getter_ = function _get__Element_offsetTop$$getter_(){
  return _ElementWrappingImplementation$Dart._get__Element_offsetTop$$named_;
}
;
_ElementWrappingImplementation$Dart.prototype.offsetWidth$named = function(){
  return this.offsetWidth$getter().apply(this, arguments);
}
;
_ElementWrappingImplementation$Dart.prototype.offsetWidth$getter = function(){
  return _ElementWrappingImplementation$Dart._get__Element_offsetWidth$$member_(this);
}
;
_ElementWrappingImplementation$Dart._get__Element_offsetWidth$$member_ = function(_this){
  return native__ElementWrappingImplementation__get__Element_offsetWidth(_this);
}
;
_ElementWrappingImplementation$Dart._get__Element_offsetWidth$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _ElementWrappingImplementation$Dart._get__Element_offsetWidth$$member_(_this);
}
;
_ElementWrappingImplementation$Dart._get__Element_offsetWidth$$getter_ = function _get__Element_offsetWidth$$getter_(){
  return _ElementWrappingImplementation$Dart._get__Element_offsetWidth$$named_;
}
;
_ElementWrappingImplementation$Dart.prototype.onabort$named = function(){
  return this.onabort$getter().apply(this, arguments);
}
;
_ElementWrappingImplementation$Dart.prototype.onabort$getter = function(){
  return _ElementWrappingImplementation$Dart._get__Element_onabort$$member_(this);
}
;
_ElementWrappingImplementation$Dart.prototype.onabort$setter = function(value){
  _ElementWrappingImplementation$Dart._set__Element_onabort$$member_(this, value);
}
;
_ElementWrappingImplementation$Dart._get__Element_onabort$$member_ = function(_this){
  return native__ElementWrappingImplementation__get__Element_onabort(_this);
}
;
_ElementWrappingImplementation$Dart._get__Element_onabort$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _ElementWrappingImplementation$Dart._get__Element_onabort$$member_(_this);
}
;
_ElementWrappingImplementation$Dart._get__Element_onabort$$getter_ = function _get__Element_onabort$$getter_(){
  return _ElementWrappingImplementation$Dart._get__Element_onabort$$named_;
}
;
_ElementWrappingImplementation$Dart._set__Element_onabort$$member_ = function(_this, value){
  return native__ElementWrappingImplementation__set__Element_onabort(_this, value);
}
;
_ElementWrappingImplementation$Dart._set__Element_onabort$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _ElementWrappingImplementation$Dart._set__Element_onabort$$member_(_this, value);
}
;
_ElementWrappingImplementation$Dart._set__Element_onabort$$getter_ = function _set__Element_onabort$$getter_(){
  return _ElementWrappingImplementation$Dart._set__Element_onabort$$named_;
}
;
_ElementWrappingImplementation$Dart.prototype.onbeforecopy$named = function(){
  return this.onbeforecopy$getter().apply(this, arguments);
}
;
_ElementWrappingImplementation$Dart.prototype.onbeforecopy$getter = function(){
  return _ElementWrappingImplementation$Dart._get__Element_onbeforecopy$$member_(this);
}
;
_ElementWrappingImplementation$Dart.prototype.onbeforecopy$setter = function(value){
  _ElementWrappingImplementation$Dart._set__Element_onbeforecopy$$member_(this, value);
}
;
_ElementWrappingImplementation$Dart._get__Element_onbeforecopy$$member_ = function(_this){
  return native__ElementWrappingImplementation__get__Element_onbeforecopy(_this);
}
;
_ElementWrappingImplementation$Dart._get__Element_onbeforecopy$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _ElementWrappingImplementation$Dart._get__Element_onbeforecopy$$member_(_this);
}
;
_ElementWrappingImplementation$Dart._get__Element_onbeforecopy$$getter_ = function _get__Element_onbeforecopy$$getter_(){
  return _ElementWrappingImplementation$Dart._get__Element_onbeforecopy$$named_;
}
;
_ElementWrappingImplementation$Dart._set__Element_onbeforecopy$$member_ = function(_this, value){
  return native__ElementWrappingImplementation__set__Element_onbeforecopy(_this, value);
}
;
_ElementWrappingImplementation$Dart._set__Element_onbeforecopy$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _ElementWrappingImplementation$Dart._set__Element_onbeforecopy$$member_(_this, value);
}
;
_ElementWrappingImplementation$Dart._set__Element_onbeforecopy$$getter_ = function _set__Element_onbeforecopy$$getter_(){
  return _ElementWrappingImplementation$Dart._set__Element_onbeforecopy$$named_;
}
;
_ElementWrappingImplementation$Dart.prototype.onbeforecut$named = function(){
  return this.onbeforecut$getter().apply(this, arguments);
}
;
_ElementWrappingImplementation$Dart.prototype.onbeforecut$getter = function(){
  return _ElementWrappingImplementation$Dart._get__Element_onbeforecut$$member_(this);
}
;
_ElementWrappingImplementation$Dart.prototype.onbeforecut$setter = function(value){
  _ElementWrappingImplementation$Dart._set__Element_onbeforecut$$member_(this, value);
}
;
_ElementWrappingImplementation$Dart._get__Element_onbeforecut$$member_ = function(_this){
  return native__ElementWrappingImplementation__get__Element_onbeforecut(_this);
}
;
_ElementWrappingImplementation$Dart._get__Element_onbeforecut$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _ElementWrappingImplementation$Dart._get__Element_onbeforecut$$member_(_this);
}
;
_ElementWrappingImplementation$Dart._get__Element_onbeforecut$$getter_ = function _get__Element_onbeforecut$$getter_(){
  return _ElementWrappingImplementation$Dart._get__Element_onbeforecut$$named_;
}
;
_ElementWrappingImplementation$Dart._set__Element_onbeforecut$$member_ = function(_this, value){
  return native__ElementWrappingImplementation__set__Element_onbeforecut(_this, value);
}
;
_ElementWrappingImplementation$Dart._set__Element_onbeforecut$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _ElementWrappingImplementation$Dart._set__Element_onbeforecut$$member_(_this, value);
}
;
_ElementWrappingImplementation$Dart._set__Element_onbeforecut$$getter_ = function _set__Element_onbeforecut$$getter_(){
  return _ElementWrappingImplementation$Dart._set__Element_onbeforecut$$named_;
}
;
_ElementWrappingImplementation$Dart.prototype.onbeforepaste$named = function(){
  return this.onbeforepaste$getter().apply(this, arguments);
}
;
_ElementWrappingImplementation$Dart.prototype.onbeforepaste$getter = function(){
  return _ElementWrappingImplementation$Dart._get__Element_onbeforepaste$$member_(this);
}
;
_ElementWrappingImplementation$Dart.prototype.onbeforepaste$setter = function(value){
  _ElementWrappingImplementation$Dart._set__Element_onbeforepaste$$member_(this, value);
}
;
_ElementWrappingImplementation$Dart._get__Element_onbeforepaste$$member_ = function(_this){
  return native__ElementWrappingImplementation__get__Element_onbeforepaste(_this);
}
;
_ElementWrappingImplementation$Dart._get__Element_onbeforepaste$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _ElementWrappingImplementation$Dart._get__Element_onbeforepaste$$member_(_this);
}
;
_ElementWrappingImplementation$Dart._get__Element_onbeforepaste$$getter_ = function _get__Element_onbeforepaste$$getter_(){
  return _ElementWrappingImplementation$Dart._get__Element_onbeforepaste$$named_;
}
;
_ElementWrappingImplementation$Dart._set__Element_onbeforepaste$$member_ = function(_this, value){
  return native__ElementWrappingImplementation__set__Element_onbeforepaste(_this, value);
}
;
_ElementWrappingImplementation$Dart._set__Element_onbeforepaste$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _ElementWrappingImplementation$Dart._set__Element_onbeforepaste$$member_(_this, value);
}
;
_ElementWrappingImplementation$Dart._set__Element_onbeforepaste$$getter_ = function _set__Element_onbeforepaste$$getter_(){
  return _ElementWrappingImplementation$Dart._set__Element_onbeforepaste$$named_;
}
;
_ElementWrappingImplementation$Dart.prototype.onblur$named = function(){
  return this.onblur$getter().apply(this, arguments);
}
;
_ElementWrappingImplementation$Dart.prototype.onblur$getter = function(){
  return _ElementWrappingImplementation$Dart._get__Element_onblur$$member_(this);
}
;
_ElementWrappingImplementation$Dart.prototype.onblur$setter = function(value){
  _ElementWrappingImplementation$Dart._set__Element_onblur$$member_(this, value);
}
;
_ElementWrappingImplementation$Dart._get__Element_onblur$$member_ = function(_this){
  return native__ElementWrappingImplementation__get__Element_onblur(_this);
}
;
_ElementWrappingImplementation$Dart._get__Element_onblur$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _ElementWrappingImplementation$Dart._get__Element_onblur$$member_(_this);
}
;
_ElementWrappingImplementation$Dart._get__Element_onblur$$getter_ = function _get__Element_onblur$$getter_(){
  return _ElementWrappingImplementation$Dart._get__Element_onblur$$named_;
}
;
_ElementWrappingImplementation$Dart._set__Element_onblur$$member_ = function(_this, value){
  return native__ElementWrappingImplementation__set__Element_onblur(_this, value);
}
;
_ElementWrappingImplementation$Dart._set__Element_onblur$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _ElementWrappingImplementation$Dart._set__Element_onblur$$member_(_this, value);
}
;
_ElementWrappingImplementation$Dart._set__Element_onblur$$getter_ = function _set__Element_onblur$$getter_(){
  return _ElementWrappingImplementation$Dart._set__Element_onblur$$named_;
}
;
_ElementWrappingImplementation$Dart.prototype.onchange$named = function(){
  return this.onchange$getter().apply(this, arguments);
}
;
_ElementWrappingImplementation$Dart.prototype.onchange$getter = function(){
  return _ElementWrappingImplementation$Dart._get__Element_onchange$$member_(this);
}
;
_ElementWrappingImplementation$Dart.prototype.onchange$setter = function(value){
  _ElementWrappingImplementation$Dart._set__Element_onchange$$member_(this, value);
}
;
_ElementWrappingImplementation$Dart._get__Element_onchange$$member_ = function(_this){
  return native__ElementWrappingImplementation__get__Element_onchange(_this);
}
;
_ElementWrappingImplementation$Dart._get__Element_onchange$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _ElementWrappingImplementation$Dart._get__Element_onchange$$member_(_this);
}
;
_ElementWrappingImplementation$Dart._get__Element_onchange$$getter_ = function _get__Element_onchange$$getter_(){
  return _ElementWrappingImplementation$Dart._get__Element_onchange$$named_;
}
;
_ElementWrappingImplementation$Dart._set__Element_onchange$$member_ = function(_this, value){
  return native__ElementWrappingImplementation__set__Element_onchange(_this, value);
}
;
_ElementWrappingImplementation$Dart._set__Element_onchange$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _ElementWrappingImplementation$Dart._set__Element_onchange$$member_(_this, value);
}
;
_ElementWrappingImplementation$Dart._set__Element_onchange$$getter_ = function _set__Element_onchange$$getter_(){
  return _ElementWrappingImplementation$Dart._set__Element_onchange$$named_;
}
;
_ElementWrappingImplementation$Dart.prototype.onclick$named = function(){
  return this.onclick$getter().apply(this, arguments);
}
;
_ElementWrappingImplementation$Dart.prototype.onclick$getter = function(){
  return _ElementWrappingImplementation$Dart._get__Element_onclick$$member_(this);
}
;
_ElementWrappingImplementation$Dart.prototype.onclick$setter = function(value){
  _ElementWrappingImplementation$Dart._set__Element_onclick$$member_(this, value);
}
;
_ElementWrappingImplementation$Dart._get__Element_onclick$$member_ = function(_this){
  return native__ElementWrappingImplementation__get__Element_onclick(_this);
}
;
_ElementWrappingImplementation$Dart._get__Element_onclick$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _ElementWrappingImplementation$Dart._get__Element_onclick$$member_(_this);
}
;
_ElementWrappingImplementation$Dart._get__Element_onclick$$getter_ = function _get__Element_onclick$$getter_(){
  return _ElementWrappingImplementation$Dart._get__Element_onclick$$named_;
}
;
_ElementWrappingImplementation$Dart._set__Element_onclick$$member_ = function(_this, value){
  return native__ElementWrappingImplementation__set__Element_onclick(_this, value);
}
;
_ElementWrappingImplementation$Dart._set__Element_onclick$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _ElementWrappingImplementation$Dart._set__Element_onclick$$member_(_this, value);
}
;
_ElementWrappingImplementation$Dart._set__Element_onclick$$getter_ = function _set__Element_onclick$$getter_(){
  return _ElementWrappingImplementation$Dart._set__Element_onclick$$named_;
}
;
_ElementWrappingImplementation$Dart.prototype.oncontextmenu$named = function(){
  return this.oncontextmenu$getter().apply(this, arguments);
}
;
_ElementWrappingImplementation$Dart.prototype.oncontextmenu$getter = function(){
  return _ElementWrappingImplementation$Dart._get__Element_oncontextmenu$$member_(this);
}
;
_ElementWrappingImplementation$Dart.prototype.oncontextmenu$setter = function(value){
  _ElementWrappingImplementation$Dart._set__Element_oncontextmenu$$member_(this, value);
}
;
_ElementWrappingImplementation$Dart._get__Element_oncontextmenu$$member_ = function(_this){
  return native__ElementWrappingImplementation__get__Element_oncontextmenu(_this);
}
;
_ElementWrappingImplementation$Dart._get__Element_oncontextmenu$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _ElementWrappingImplementation$Dart._get__Element_oncontextmenu$$member_(_this);
}
;
_ElementWrappingImplementation$Dart._get__Element_oncontextmenu$$getter_ = function _get__Element_oncontextmenu$$getter_(){
  return _ElementWrappingImplementation$Dart._get__Element_oncontextmenu$$named_;
}
;
_ElementWrappingImplementation$Dart._set__Element_oncontextmenu$$member_ = function(_this, value){
  return native__ElementWrappingImplementation__set__Element_oncontextmenu(_this, value);
}
;
_ElementWrappingImplementation$Dart._set__Element_oncontextmenu$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _ElementWrappingImplementation$Dart._set__Element_oncontextmenu$$member_(_this, value);
}
;
_ElementWrappingImplementation$Dart._set__Element_oncontextmenu$$getter_ = function _set__Element_oncontextmenu$$getter_(){
  return _ElementWrappingImplementation$Dart._set__Element_oncontextmenu$$named_;
}
;
_ElementWrappingImplementation$Dart.prototype.oncopy$named = function(){
  return this.oncopy$getter().apply(this, arguments);
}
;
_ElementWrappingImplementation$Dart.prototype.oncopy$getter = function(){
  return _ElementWrappingImplementation$Dart._get__Element_oncopy$$member_(this);
}
;
_ElementWrappingImplementation$Dart.prototype.oncopy$setter = function(value){
  _ElementWrappingImplementation$Dart._set__Element_oncopy$$member_(this, value);
}
;
_ElementWrappingImplementation$Dart._get__Element_oncopy$$member_ = function(_this){
  return native__ElementWrappingImplementation__get__Element_oncopy(_this);
}
;
_ElementWrappingImplementation$Dart._get__Element_oncopy$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _ElementWrappingImplementation$Dart._get__Element_oncopy$$member_(_this);
}
;
_ElementWrappingImplementation$Dart._get__Element_oncopy$$getter_ = function _get__Element_oncopy$$getter_(){
  return _ElementWrappingImplementation$Dart._get__Element_oncopy$$named_;
}
;
_ElementWrappingImplementation$Dart._set__Element_oncopy$$member_ = function(_this, value){
  return native__ElementWrappingImplementation__set__Element_oncopy(_this, value);
}
;
_ElementWrappingImplementation$Dart._set__Element_oncopy$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _ElementWrappingImplementation$Dart._set__Element_oncopy$$member_(_this, value);
}
;
_ElementWrappingImplementation$Dart._set__Element_oncopy$$getter_ = function _set__Element_oncopy$$getter_(){
  return _ElementWrappingImplementation$Dart._set__Element_oncopy$$named_;
}
;
_ElementWrappingImplementation$Dart.prototype.oncut$named = function(){
  return this.oncut$getter().apply(this, arguments);
}
;
_ElementWrappingImplementation$Dart.prototype.oncut$getter = function(){
  return _ElementWrappingImplementation$Dart._get__Element_oncut$$member_(this);
}
;
_ElementWrappingImplementation$Dart.prototype.oncut$setter = function(value){
  _ElementWrappingImplementation$Dart._set__Element_oncut$$member_(this, value);
}
;
_ElementWrappingImplementation$Dart._get__Element_oncut$$member_ = function(_this){
  return native__ElementWrappingImplementation__get__Element_oncut(_this);
}
;
_ElementWrappingImplementation$Dart._get__Element_oncut$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _ElementWrappingImplementation$Dart._get__Element_oncut$$member_(_this);
}
;
_ElementWrappingImplementation$Dart._get__Element_oncut$$getter_ = function _get__Element_oncut$$getter_(){
  return _ElementWrappingImplementation$Dart._get__Element_oncut$$named_;
}
;
_ElementWrappingImplementation$Dart._set__Element_oncut$$member_ = function(_this, value){
  return native__ElementWrappingImplementation__set__Element_oncut(_this, value);
}
;
_ElementWrappingImplementation$Dart._set__Element_oncut$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _ElementWrappingImplementation$Dart._set__Element_oncut$$member_(_this, value);
}
;
_ElementWrappingImplementation$Dart._set__Element_oncut$$getter_ = function _set__Element_oncut$$getter_(){
  return _ElementWrappingImplementation$Dart._set__Element_oncut$$named_;
}
;
_ElementWrappingImplementation$Dart.prototype.ondblclick$named = function(){
  return this.ondblclick$getter().apply(this, arguments);
}
;
_ElementWrappingImplementation$Dart.prototype.ondblclick$getter = function(){
  return _ElementWrappingImplementation$Dart._get__Element_ondblclick$$member_(this);
}
;
_ElementWrappingImplementation$Dart.prototype.ondblclick$setter = function(value){
  _ElementWrappingImplementation$Dart._set__Element_ondblclick$$member_(this, value);
}
;
_ElementWrappingImplementation$Dart._get__Element_ondblclick$$member_ = function(_this){
  return native__ElementWrappingImplementation__get__Element_ondblclick(_this);
}
;
_ElementWrappingImplementation$Dart._get__Element_ondblclick$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _ElementWrappingImplementation$Dart._get__Element_ondblclick$$member_(_this);
}
;
_ElementWrappingImplementation$Dart._get__Element_ondblclick$$getter_ = function _get__Element_ondblclick$$getter_(){
  return _ElementWrappingImplementation$Dart._get__Element_ondblclick$$named_;
}
;
_ElementWrappingImplementation$Dart._set__Element_ondblclick$$member_ = function(_this, value){
  return native__ElementWrappingImplementation__set__Element_ondblclick(_this, value);
}
;
_ElementWrappingImplementation$Dart._set__Element_ondblclick$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _ElementWrappingImplementation$Dart._set__Element_ondblclick$$member_(_this, value);
}
;
_ElementWrappingImplementation$Dart._set__Element_ondblclick$$getter_ = function _set__Element_ondblclick$$getter_(){
  return _ElementWrappingImplementation$Dart._set__Element_ondblclick$$named_;
}
;
_ElementWrappingImplementation$Dart.prototype.ondrag$named = function(){
  return this.ondrag$getter().apply(this, arguments);
}
;
_ElementWrappingImplementation$Dart.prototype.ondrag$getter = function(){
  return _ElementWrappingImplementation$Dart._get__Element_ondrag$$member_(this);
}
;
_ElementWrappingImplementation$Dart.prototype.ondrag$setter = function(value){
  _ElementWrappingImplementation$Dart._set__Element_ondrag$$member_(this, value);
}
;
_ElementWrappingImplementation$Dart._get__Element_ondrag$$member_ = function(_this){
  return native__ElementWrappingImplementation__get__Element_ondrag(_this);
}
;
_ElementWrappingImplementation$Dart._get__Element_ondrag$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _ElementWrappingImplementation$Dart._get__Element_ondrag$$member_(_this);
}
;
_ElementWrappingImplementation$Dart._get__Element_ondrag$$getter_ = function _get__Element_ondrag$$getter_(){
  return _ElementWrappingImplementation$Dart._get__Element_ondrag$$named_;
}
;
_ElementWrappingImplementation$Dart._set__Element_ondrag$$member_ = function(_this, value){
  return native__ElementWrappingImplementation__set__Element_ondrag(_this, value);
}
;
_ElementWrappingImplementation$Dart._set__Element_ondrag$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _ElementWrappingImplementation$Dart._set__Element_ondrag$$member_(_this, value);
}
;
_ElementWrappingImplementation$Dart._set__Element_ondrag$$getter_ = function _set__Element_ondrag$$getter_(){
  return _ElementWrappingImplementation$Dart._set__Element_ondrag$$named_;
}
;
_ElementWrappingImplementation$Dart.prototype.ondragend$named = function(){
  return this.ondragend$getter().apply(this, arguments);
}
;
_ElementWrappingImplementation$Dart.prototype.ondragend$getter = function(){
  return _ElementWrappingImplementation$Dart._get__Element_ondragend$$member_(this);
}
;
_ElementWrappingImplementation$Dart.prototype.ondragend$setter = function(value){
  _ElementWrappingImplementation$Dart._set__Element_ondragend$$member_(this, value);
}
;
_ElementWrappingImplementation$Dart._get__Element_ondragend$$member_ = function(_this){
  return native__ElementWrappingImplementation__get__Element_ondragend(_this);
}
;
_ElementWrappingImplementation$Dart._get__Element_ondragend$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _ElementWrappingImplementation$Dart._get__Element_ondragend$$member_(_this);
}
;
_ElementWrappingImplementation$Dart._get__Element_ondragend$$getter_ = function _get__Element_ondragend$$getter_(){
  return _ElementWrappingImplementation$Dart._get__Element_ondragend$$named_;
}
;
_ElementWrappingImplementation$Dart._set__Element_ondragend$$member_ = function(_this, value){
  return native__ElementWrappingImplementation__set__Element_ondragend(_this, value);
}
;
_ElementWrappingImplementation$Dart._set__Element_ondragend$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _ElementWrappingImplementation$Dart._set__Element_ondragend$$member_(_this, value);
}
;
_ElementWrappingImplementation$Dart._set__Element_ondragend$$getter_ = function _set__Element_ondragend$$getter_(){
  return _ElementWrappingImplementation$Dart._set__Element_ondragend$$named_;
}
;
_ElementWrappingImplementation$Dart.prototype.ondragenter$named = function(){
  return this.ondragenter$getter().apply(this, arguments);
}
;
_ElementWrappingImplementation$Dart.prototype.ondragenter$getter = function(){
  return _ElementWrappingImplementation$Dart._get__Element_ondragenter$$member_(this);
}
;
_ElementWrappingImplementation$Dart.prototype.ondragenter$setter = function(value){
  _ElementWrappingImplementation$Dart._set__Element_ondragenter$$member_(this, value);
}
;
_ElementWrappingImplementation$Dart._get__Element_ondragenter$$member_ = function(_this){
  return native__ElementWrappingImplementation__get__Element_ondragenter(_this);
}
;
_ElementWrappingImplementation$Dart._get__Element_ondragenter$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _ElementWrappingImplementation$Dart._get__Element_ondragenter$$member_(_this);
}
;
_ElementWrappingImplementation$Dart._get__Element_ondragenter$$getter_ = function _get__Element_ondragenter$$getter_(){
  return _ElementWrappingImplementation$Dart._get__Element_ondragenter$$named_;
}
;
_ElementWrappingImplementation$Dart._set__Element_ondragenter$$member_ = function(_this, value){
  return native__ElementWrappingImplementation__set__Element_ondragenter(_this, value);
}
;
_ElementWrappingImplementation$Dart._set__Element_ondragenter$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _ElementWrappingImplementation$Dart._set__Element_ondragenter$$member_(_this, value);
}
;
_ElementWrappingImplementation$Dart._set__Element_ondragenter$$getter_ = function _set__Element_ondragenter$$getter_(){
  return _ElementWrappingImplementation$Dart._set__Element_ondragenter$$named_;
}
;
_ElementWrappingImplementation$Dart.prototype.ondragleave$named = function(){
  return this.ondragleave$getter().apply(this, arguments);
}
;
_ElementWrappingImplementation$Dart.prototype.ondragleave$getter = function(){
  return _ElementWrappingImplementation$Dart._get__Element_ondragleave$$member_(this);
}
;
_ElementWrappingImplementation$Dart.prototype.ondragleave$setter = function(value){
  _ElementWrappingImplementation$Dart._set__Element_ondragleave$$member_(this, value);
}
;
_ElementWrappingImplementation$Dart._get__Element_ondragleave$$member_ = function(_this){
  return native__ElementWrappingImplementation__get__Element_ondragleave(_this);
}
;
_ElementWrappingImplementation$Dart._get__Element_ondragleave$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _ElementWrappingImplementation$Dart._get__Element_ondragleave$$member_(_this);
}
;
_ElementWrappingImplementation$Dart._get__Element_ondragleave$$getter_ = function _get__Element_ondragleave$$getter_(){
  return _ElementWrappingImplementation$Dart._get__Element_ondragleave$$named_;
}
;
_ElementWrappingImplementation$Dart._set__Element_ondragleave$$member_ = function(_this, value){
  return native__ElementWrappingImplementation__set__Element_ondragleave(_this, value);
}
;
_ElementWrappingImplementation$Dart._set__Element_ondragleave$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _ElementWrappingImplementation$Dart._set__Element_ondragleave$$member_(_this, value);
}
;
_ElementWrappingImplementation$Dart._set__Element_ondragleave$$getter_ = function _set__Element_ondragleave$$getter_(){
  return _ElementWrappingImplementation$Dart._set__Element_ondragleave$$named_;
}
;
_ElementWrappingImplementation$Dart.prototype.ondragover$named = function(){
  return this.ondragover$getter().apply(this, arguments);
}
;
_ElementWrappingImplementation$Dart.prototype.ondragover$getter = function(){
  return _ElementWrappingImplementation$Dart._get__Element_ondragover$$member_(this);
}
;
_ElementWrappingImplementation$Dart.prototype.ondragover$setter = function(value){
  _ElementWrappingImplementation$Dart._set__Element_ondragover$$member_(this, value);
}
;
_ElementWrappingImplementation$Dart._get__Element_ondragover$$member_ = function(_this){
  return native__ElementWrappingImplementation__get__Element_ondragover(_this);
}
;
_ElementWrappingImplementation$Dart._get__Element_ondragover$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _ElementWrappingImplementation$Dart._get__Element_ondragover$$member_(_this);
}
;
_ElementWrappingImplementation$Dart._get__Element_ondragover$$getter_ = function _get__Element_ondragover$$getter_(){
  return _ElementWrappingImplementation$Dart._get__Element_ondragover$$named_;
}
;
_ElementWrappingImplementation$Dart._set__Element_ondragover$$member_ = function(_this, value){
  return native__ElementWrappingImplementation__set__Element_ondragover(_this, value);
}
;
_ElementWrappingImplementation$Dart._set__Element_ondragover$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _ElementWrappingImplementation$Dart._set__Element_ondragover$$member_(_this, value);
}
;
_ElementWrappingImplementation$Dart._set__Element_ondragover$$getter_ = function _set__Element_ondragover$$getter_(){
  return _ElementWrappingImplementation$Dart._set__Element_ondragover$$named_;
}
;
_ElementWrappingImplementation$Dart.prototype.ondragstart$named = function(){
  return this.ondragstart$getter().apply(this, arguments);
}
;
_ElementWrappingImplementation$Dart.prototype.ondragstart$getter = function(){
  return _ElementWrappingImplementation$Dart._get__Element_ondragstart$$member_(this);
}
;
_ElementWrappingImplementation$Dart.prototype.ondragstart$setter = function(value){
  _ElementWrappingImplementation$Dart._set__Element_ondragstart$$member_(this, value);
}
;
_ElementWrappingImplementation$Dart._get__Element_ondragstart$$member_ = function(_this){
  return native__ElementWrappingImplementation__get__Element_ondragstart(_this);
}
;
_ElementWrappingImplementation$Dart._get__Element_ondragstart$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _ElementWrappingImplementation$Dart._get__Element_ondragstart$$member_(_this);
}
;
_ElementWrappingImplementation$Dart._get__Element_ondragstart$$getter_ = function _get__Element_ondragstart$$getter_(){
  return _ElementWrappingImplementation$Dart._get__Element_ondragstart$$named_;
}
;
_ElementWrappingImplementation$Dart._set__Element_ondragstart$$member_ = function(_this, value){
  return native__ElementWrappingImplementation__set__Element_ondragstart(_this, value);
}
;
_ElementWrappingImplementation$Dart._set__Element_ondragstart$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _ElementWrappingImplementation$Dart._set__Element_ondragstart$$member_(_this, value);
}
;
_ElementWrappingImplementation$Dart._set__Element_ondragstart$$getter_ = function _set__Element_ondragstart$$getter_(){
  return _ElementWrappingImplementation$Dart._set__Element_ondragstart$$named_;
}
;
_ElementWrappingImplementation$Dart.prototype.ondrop$named = function(){
  return this.ondrop$getter().apply(this, arguments);
}
;
_ElementWrappingImplementation$Dart.prototype.ondrop$getter = function(){
  return _ElementWrappingImplementation$Dart._get__Element_ondrop$$member_(this);
}
;
_ElementWrappingImplementation$Dart.prototype.ondrop$setter = function(value){
  _ElementWrappingImplementation$Dart._set__Element_ondrop$$member_(this, value);
}
;
_ElementWrappingImplementation$Dart._get__Element_ondrop$$member_ = function(_this){
  return native__ElementWrappingImplementation__get__Element_ondrop(_this);
}
;
_ElementWrappingImplementation$Dart._get__Element_ondrop$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _ElementWrappingImplementation$Dart._get__Element_ondrop$$member_(_this);
}
;
_ElementWrappingImplementation$Dart._get__Element_ondrop$$getter_ = function _get__Element_ondrop$$getter_(){
  return _ElementWrappingImplementation$Dart._get__Element_ondrop$$named_;
}
;
_ElementWrappingImplementation$Dart._set__Element_ondrop$$member_ = function(_this, value){
  return native__ElementWrappingImplementation__set__Element_ondrop(_this, value);
}
;
_ElementWrappingImplementation$Dart._set__Element_ondrop$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _ElementWrappingImplementation$Dart._set__Element_ondrop$$member_(_this, value);
}
;
_ElementWrappingImplementation$Dart._set__Element_ondrop$$getter_ = function _set__Element_ondrop$$getter_(){
  return _ElementWrappingImplementation$Dart._set__Element_ondrop$$named_;
}
;
_ElementWrappingImplementation$Dart.prototype.onerror$named = function(){
  return this.onerror$getter().apply(this, arguments);
}
;
_ElementWrappingImplementation$Dart.prototype.onerror$getter = function(){
  return _ElementWrappingImplementation$Dart._get__Element_onerror$$member_(this);
}
;
_ElementWrappingImplementation$Dart.prototype.onerror$setter = function(value){
  _ElementWrappingImplementation$Dart._set__Element_onerror$$member_(this, value);
}
;
_ElementWrappingImplementation$Dart._get__Element_onerror$$member_ = function(_this){
  return native__ElementWrappingImplementation__get__Element_onerror(_this);
}
;
_ElementWrappingImplementation$Dart._get__Element_onerror$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _ElementWrappingImplementation$Dart._get__Element_onerror$$member_(_this);
}
;
_ElementWrappingImplementation$Dart._get__Element_onerror$$getter_ = function _get__Element_onerror$$getter_(){
  return _ElementWrappingImplementation$Dart._get__Element_onerror$$named_;
}
;
_ElementWrappingImplementation$Dart._set__Element_onerror$$member_ = function(_this, value){
  return native__ElementWrappingImplementation__set__Element_onerror(_this, value);
}
;
_ElementWrappingImplementation$Dart._set__Element_onerror$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _ElementWrappingImplementation$Dart._set__Element_onerror$$member_(_this, value);
}
;
_ElementWrappingImplementation$Dart._set__Element_onerror$$getter_ = function _set__Element_onerror$$getter_(){
  return _ElementWrappingImplementation$Dart._set__Element_onerror$$named_;
}
;
_ElementWrappingImplementation$Dart.prototype.onfocus$named = function(){
  return this.onfocus$getter().apply(this, arguments);
}
;
_ElementWrappingImplementation$Dart.prototype.onfocus$getter = function(){
  return _ElementWrappingImplementation$Dart._get__Element_onfocus$$member_(this);
}
;
_ElementWrappingImplementation$Dart.prototype.onfocus$setter = function(value){
  _ElementWrappingImplementation$Dart._set__Element_onfocus$$member_(this, value);
}
;
_ElementWrappingImplementation$Dart._get__Element_onfocus$$member_ = function(_this){
  return native__ElementWrappingImplementation__get__Element_onfocus(_this);
}
;
_ElementWrappingImplementation$Dart._get__Element_onfocus$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _ElementWrappingImplementation$Dart._get__Element_onfocus$$member_(_this);
}
;
_ElementWrappingImplementation$Dart._get__Element_onfocus$$getter_ = function _get__Element_onfocus$$getter_(){
  return _ElementWrappingImplementation$Dart._get__Element_onfocus$$named_;
}
;
_ElementWrappingImplementation$Dart._set__Element_onfocus$$member_ = function(_this, value){
  return native__ElementWrappingImplementation__set__Element_onfocus(_this, value);
}
;
_ElementWrappingImplementation$Dart._set__Element_onfocus$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _ElementWrappingImplementation$Dart._set__Element_onfocus$$member_(_this, value);
}
;
_ElementWrappingImplementation$Dart._set__Element_onfocus$$getter_ = function _set__Element_onfocus$$getter_(){
  return _ElementWrappingImplementation$Dart._set__Element_onfocus$$named_;
}
;
_ElementWrappingImplementation$Dart.prototype.oninput$named = function(){
  return this.oninput$getter().apply(this, arguments);
}
;
_ElementWrappingImplementation$Dart.prototype.oninput$getter = function(){
  return _ElementWrappingImplementation$Dart._get__Element_oninput$$member_(this);
}
;
_ElementWrappingImplementation$Dart.prototype.oninput$setter = function(value){
  _ElementWrappingImplementation$Dart._set__Element_oninput$$member_(this, value);
}
;
_ElementWrappingImplementation$Dart._get__Element_oninput$$member_ = function(_this){
  return native__ElementWrappingImplementation__get__Element_oninput(_this);
}
;
_ElementWrappingImplementation$Dart._get__Element_oninput$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _ElementWrappingImplementation$Dart._get__Element_oninput$$member_(_this);
}
;
_ElementWrappingImplementation$Dart._get__Element_oninput$$getter_ = function _get__Element_oninput$$getter_(){
  return _ElementWrappingImplementation$Dart._get__Element_oninput$$named_;
}
;
_ElementWrappingImplementation$Dart._set__Element_oninput$$member_ = function(_this, value){
  return native__ElementWrappingImplementation__set__Element_oninput(_this, value);
}
;
_ElementWrappingImplementation$Dart._set__Element_oninput$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _ElementWrappingImplementation$Dart._set__Element_oninput$$member_(_this, value);
}
;
_ElementWrappingImplementation$Dart._set__Element_oninput$$getter_ = function _set__Element_oninput$$getter_(){
  return _ElementWrappingImplementation$Dart._set__Element_oninput$$named_;
}
;
_ElementWrappingImplementation$Dart.prototype.oninvalid$named = function(){
  return this.oninvalid$getter().apply(this, arguments);
}
;
_ElementWrappingImplementation$Dart.prototype.oninvalid$getter = function(){
  return _ElementWrappingImplementation$Dart._get__Element_oninvalid$$member_(this);
}
;
_ElementWrappingImplementation$Dart.prototype.oninvalid$setter = function(value){
  _ElementWrappingImplementation$Dart._set__Element_oninvalid$$member_(this, value);
}
;
_ElementWrappingImplementation$Dart._get__Element_oninvalid$$member_ = function(_this){
  return native__ElementWrappingImplementation__get__Element_oninvalid(_this);
}
;
_ElementWrappingImplementation$Dart._get__Element_oninvalid$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _ElementWrappingImplementation$Dart._get__Element_oninvalid$$member_(_this);
}
;
_ElementWrappingImplementation$Dart._get__Element_oninvalid$$getter_ = function _get__Element_oninvalid$$getter_(){
  return _ElementWrappingImplementation$Dart._get__Element_oninvalid$$named_;
}
;
_ElementWrappingImplementation$Dart._set__Element_oninvalid$$member_ = function(_this, value){
  return native__ElementWrappingImplementation__set__Element_oninvalid(_this, value);
}
;
_ElementWrappingImplementation$Dart._set__Element_oninvalid$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _ElementWrappingImplementation$Dart._set__Element_oninvalid$$member_(_this, value);
}
;
_ElementWrappingImplementation$Dart._set__Element_oninvalid$$getter_ = function _set__Element_oninvalid$$getter_(){
  return _ElementWrappingImplementation$Dart._set__Element_oninvalid$$named_;
}
;
_ElementWrappingImplementation$Dart.prototype.onkeydown$named = function(){
  return this.onkeydown$getter().apply(this, arguments);
}
;
_ElementWrappingImplementation$Dart.prototype.onkeydown$getter = function(){
  return _ElementWrappingImplementation$Dart._get__Element_onkeydown$$member_(this);
}
;
_ElementWrappingImplementation$Dart.prototype.onkeydown$setter = function(value){
  _ElementWrappingImplementation$Dart._set__Element_onkeydown$$member_(this, value);
}
;
_ElementWrappingImplementation$Dart._get__Element_onkeydown$$member_ = function(_this){
  return native__ElementWrappingImplementation__get__Element_onkeydown(_this);
}
;
_ElementWrappingImplementation$Dart._get__Element_onkeydown$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _ElementWrappingImplementation$Dart._get__Element_onkeydown$$member_(_this);
}
;
_ElementWrappingImplementation$Dart._get__Element_onkeydown$$getter_ = function _get__Element_onkeydown$$getter_(){
  return _ElementWrappingImplementation$Dart._get__Element_onkeydown$$named_;
}
;
_ElementWrappingImplementation$Dart._set__Element_onkeydown$$member_ = function(_this, value){
  return native__ElementWrappingImplementation__set__Element_onkeydown(_this, value);
}
;
_ElementWrappingImplementation$Dart._set__Element_onkeydown$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _ElementWrappingImplementation$Dart._set__Element_onkeydown$$member_(_this, value);
}
;
_ElementWrappingImplementation$Dart._set__Element_onkeydown$$getter_ = function _set__Element_onkeydown$$getter_(){
  return _ElementWrappingImplementation$Dart._set__Element_onkeydown$$named_;
}
;
_ElementWrappingImplementation$Dart.prototype.onkeypress$named = function(){
  return this.onkeypress$getter().apply(this, arguments);
}
;
_ElementWrappingImplementation$Dart.prototype.onkeypress$getter = function(){
  return _ElementWrappingImplementation$Dart._get__Element_onkeypress$$member_(this);
}
;
_ElementWrappingImplementation$Dart.prototype.onkeypress$setter = function(value){
  _ElementWrappingImplementation$Dart._set__Element_onkeypress$$member_(this, value);
}
;
_ElementWrappingImplementation$Dart._get__Element_onkeypress$$member_ = function(_this){
  return native__ElementWrappingImplementation__get__Element_onkeypress(_this);
}
;
_ElementWrappingImplementation$Dart._get__Element_onkeypress$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _ElementWrappingImplementation$Dart._get__Element_onkeypress$$member_(_this);
}
;
_ElementWrappingImplementation$Dart._get__Element_onkeypress$$getter_ = function _get__Element_onkeypress$$getter_(){
  return _ElementWrappingImplementation$Dart._get__Element_onkeypress$$named_;
}
;
_ElementWrappingImplementation$Dart._set__Element_onkeypress$$member_ = function(_this, value){
  return native__ElementWrappingImplementation__set__Element_onkeypress(_this, value);
}
;
_ElementWrappingImplementation$Dart._set__Element_onkeypress$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _ElementWrappingImplementation$Dart._set__Element_onkeypress$$member_(_this, value);
}
;
_ElementWrappingImplementation$Dart._set__Element_onkeypress$$getter_ = function _set__Element_onkeypress$$getter_(){
  return _ElementWrappingImplementation$Dart._set__Element_onkeypress$$named_;
}
;
_ElementWrappingImplementation$Dart.prototype.onkeyup$named = function(){
  return this.onkeyup$getter().apply(this, arguments);
}
;
_ElementWrappingImplementation$Dart.prototype.onkeyup$getter = function(){
  return _ElementWrappingImplementation$Dart._get__Element_onkeyup$$member_(this);
}
;
_ElementWrappingImplementation$Dart.prototype.onkeyup$setter = function(value){
  _ElementWrappingImplementation$Dart._set__Element_onkeyup$$member_(this, value);
}
;
_ElementWrappingImplementation$Dart._get__Element_onkeyup$$member_ = function(_this){
  return native__ElementWrappingImplementation__get__Element_onkeyup(_this);
}
;
_ElementWrappingImplementation$Dart._get__Element_onkeyup$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _ElementWrappingImplementation$Dart._get__Element_onkeyup$$member_(_this);
}
;
_ElementWrappingImplementation$Dart._get__Element_onkeyup$$getter_ = function _get__Element_onkeyup$$getter_(){
  return _ElementWrappingImplementation$Dart._get__Element_onkeyup$$named_;
}
;
_ElementWrappingImplementation$Dart._set__Element_onkeyup$$member_ = function(_this, value){
  return native__ElementWrappingImplementation__set__Element_onkeyup(_this, value);
}
;
_ElementWrappingImplementation$Dart._set__Element_onkeyup$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _ElementWrappingImplementation$Dart._set__Element_onkeyup$$member_(_this, value);
}
;
_ElementWrappingImplementation$Dart._set__Element_onkeyup$$getter_ = function _set__Element_onkeyup$$getter_(){
  return _ElementWrappingImplementation$Dart._set__Element_onkeyup$$named_;
}
;
_ElementWrappingImplementation$Dart.prototype.onload$named = function(){
  return this.onload$getter().apply(this, arguments);
}
;
_ElementWrappingImplementation$Dart.prototype.onload$getter = function(){
  return _ElementWrappingImplementation$Dart._get__Element_onload$$member_(this);
}
;
_ElementWrappingImplementation$Dart.prototype.onload$setter = function(value){
  _ElementWrappingImplementation$Dart._set__Element_onload$$member_(this, value);
}
;
_ElementWrappingImplementation$Dart._get__Element_onload$$member_ = function(_this){
  return native__ElementWrappingImplementation__get__Element_onload(_this);
}
;
_ElementWrappingImplementation$Dart._get__Element_onload$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _ElementWrappingImplementation$Dart._get__Element_onload$$member_(_this);
}
;
_ElementWrappingImplementation$Dart._get__Element_onload$$getter_ = function _get__Element_onload$$getter_(){
  return _ElementWrappingImplementation$Dart._get__Element_onload$$named_;
}
;
_ElementWrappingImplementation$Dart._set__Element_onload$$member_ = function(_this, value){
  return native__ElementWrappingImplementation__set__Element_onload(_this, value);
}
;
_ElementWrappingImplementation$Dart._set__Element_onload$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _ElementWrappingImplementation$Dart._set__Element_onload$$member_(_this, value);
}
;
_ElementWrappingImplementation$Dart._set__Element_onload$$getter_ = function _set__Element_onload$$getter_(){
  return _ElementWrappingImplementation$Dart._set__Element_onload$$named_;
}
;
_ElementWrappingImplementation$Dart.prototype.onmousedown$named = function(){
  return this.onmousedown$getter().apply(this, arguments);
}
;
_ElementWrappingImplementation$Dart.prototype.onmousedown$getter = function(){
  return _ElementWrappingImplementation$Dart._get__Element_onmousedown$$member_(this);
}
;
_ElementWrappingImplementation$Dart.prototype.onmousedown$setter = function(value){
  _ElementWrappingImplementation$Dart._set__Element_onmousedown$$member_(this, value);
}
;
_ElementWrappingImplementation$Dart._get__Element_onmousedown$$member_ = function(_this){
  return native__ElementWrappingImplementation__get__Element_onmousedown(_this);
}
;
_ElementWrappingImplementation$Dart._get__Element_onmousedown$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _ElementWrappingImplementation$Dart._get__Element_onmousedown$$member_(_this);
}
;
_ElementWrappingImplementation$Dart._get__Element_onmousedown$$getter_ = function _get__Element_onmousedown$$getter_(){
  return _ElementWrappingImplementation$Dart._get__Element_onmousedown$$named_;
}
;
_ElementWrappingImplementation$Dart._set__Element_onmousedown$$member_ = function(_this, value){
  return native__ElementWrappingImplementation__set__Element_onmousedown(_this, value);
}
;
_ElementWrappingImplementation$Dart._set__Element_onmousedown$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _ElementWrappingImplementation$Dart._set__Element_onmousedown$$member_(_this, value);
}
;
_ElementWrappingImplementation$Dart._set__Element_onmousedown$$getter_ = function _set__Element_onmousedown$$getter_(){
  return _ElementWrappingImplementation$Dart._set__Element_onmousedown$$named_;
}
;
_ElementWrappingImplementation$Dart.prototype.onmousemove$named = function(){
  return this.onmousemove$getter().apply(this, arguments);
}
;
_ElementWrappingImplementation$Dart.prototype.onmousemove$getter = function(){
  return _ElementWrappingImplementation$Dart._get__Element_onmousemove$$member_(this);
}
;
_ElementWrappingImplementation$Dart.prototype.onmousemove$setter = function(value){
  _ElementWrappingImplementation$Dart._set__Element_onmousemove$$member_(this, value);
}
;
_ElementWrappingImplementation$Dart._get__Element_onmousemove$$member_ = function(_this){
  return native__ElementWrappingImplementation__get__Element_onmousemove(_this);
}
;
_ElementWrappingImplementation$Dart._get__Element_onmousemove$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _ElementWrappingImplementation$Dart._get__Element_onmousemove$$member_(_this);
}
;
_ElementWrappingImplementation$Dart._get__Element_onmousemove$$getter_ = function _get__Element_onmousemove$$getter_(){
  return _ElementWrappingImplementation$Dart._get__Element_onmousemove$$named_;
}
;
_ElementWrappingImplementation$Dart._set__Element_onmousemove$$member_ = function(_this, value){
  return native__ElementWrappingImplementation__set__Element_onmousemove(_this, value);
}
;
_ElementWrappingImplementation$Dart._set__Element_onmousemove$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _ElementWrappingImplementation$Dart._set__Element_onmousemove$$member_(_this, value);
}
;
_ElementWrappingImplementation$Dart._set__Element_onmousemove$$getter_ = function _set__Element_onmousemove$$getter_(){
  return _ElementWrappingImplementation$Dart._set__Element_onmousemove$$named_;
}
;
_ElementWrappingImplementation$Dart.prototype.onmouseout$named = function(){
  return this.onmouseout$getter().apply(this, arguments);
}
;
_ElementWrappingImplementation$Dart.prototype.onmouseout$getter = function(){
  return _ElementWrappingImplementation$Dart._get__Element_onmouseout$$member_(this);
}
;
_ElementWrappingImplementation$Dart.prototype.onmouseout$setter = function(value){
  _ElementWrappingImplementation$Dart._set__Element_onmouseout$$member_(this, value);
}
;
_ElementWrappingImplementation$Dart._get__Element_onmouseout$$member_ = function(_this){
  return native__ElementWrappingImplementation__get__Element_onmouseout(_this);
}
;
_ElementWrappingImplementation$Dart._get__Element_onmouseout$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _ElementWrappingImplementation$Dart._get__Element_onmouseout$$member_(_this);
}
;
_ElementWrappingImplementation$Dart._get__Element_onmouseout$$getter_ = function _get__Element_onmouseout$$getter_(){
  return _ElementWrappingImplementation$Dart._get__Element_onmouseout$$named_;
}
;
_ElementWrappingImplementation$Dart._set__Element_onmouseout$$member_ = function(_this, value){
  return native__ElementWrappingImplementation__set__Element_onmouseout(_this, value);
}
;
_ElementWrappingImplementation$Dart._set__Element_onmouseout$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _ElementWrappingImplementation$Dart._set__Element_onmouseout$$member_(_this, value);
}
;
_ElementWrappingImplementation$Dart._set__Element_onmouseout$$getter_ = function _set__Element_onmouseout$$getter_(){
  return _ElementWrappingImplementation$Dart._set__Element_onmouseout$$named_;
}
;
_ElementWrappingImplementation$Dart.prototype.onmouseover$named = function(){
  return this.onmouseover$getter().apply(this, arguments);
}
;
_ElementWrappingImplementation$Dart.prototype.onmouseover$getter = function(){
  return _ElementWrappingImplementation$Dart._get__Element_onmouseover$$member_(this);
}
;
_ElementWrappingImplementation$Dart.prototype.onmouseover$setter = function(value){
  _ElementWrappingImplementation$Dart._set__Element_onmouseover$$member_(this, value);
}
;
_ElementWrappingImplementation$Dart._get__Element_onmouseover$$member_ = function(_this){
  return native__ElementWrappingImplementation__get__Element_onmouseover(_this);
}
;
_ElementWrappingImplementation$Dart._get__Element_onmouseover$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _ElementWrappingImplementation$Dart._get__Element_onmouseover$$member_(_this);
}
;
_ElementWrappingImplementation$Dart._get__Element_onmouseover$$getter_ = function _get__Element_onmouseover$$getter_(){
  return _ElementWrappingImplementation$Dart._get__Element_onmouseover$$named_;
}
;
_ElementWrappingImplementation$Dart._set__Element_onmouseover$$member_ = function(_this, value){
  return native__ElementWrappingImplementation__set__Element_onmouseover(_this, value);
}
;
_ElementWrappingImplementation$Dart._set__Element_onmouseover$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _ElementWrappingImplementation$Dart._set__Element_onmouseover$$member_(_this, value);
}
;
_ElementWrappingImplementation$Dart._set__Element_onmouseover$$getter_ = function _set__Element_onmouseover$$getter_(){
  return _ElementWrappingImplementation$Dart._set__Element_onmouseover$$named_;
}
;
_ElementWrappingImplementation$Dart.prototype.onmouseup$named = function(){
  return this.onmouseup$getter().apply(this, arguments);
}
;
_ElementWrappingImplementation$Dart.prototype.onmouseup$getter = function(){
  return _ElementWrappingImplementation$Dart._get__Element_onmouseup$$member_(this);
}
;
_ElementWrappingImplementation$Dart.prototype.onmouseup$setter = function(value){
  _ElementWrappingImplementation$Dart._set__Element_onmouseup$$member_(this, value);
}
;
_ElementWrappingImplementation$Dart._get__Element_onmouseup$$member_ = function(_this){
  return native__ElementWrappingImplementation__get__Element_onmouseup(_this);
}
;
_ElementWrappingImplementation$Dart._get__Element_onmouseup$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _ElementWrappingImplementation$Dart._get__Element_onmouseup$$member_(_this);
}
;
_ElementWrappingImplementation$Dart._get__Element_onmouseup$$getter_ = function _get__Element_onmouseup$$getter_(){
  return _ElementWrappingImplementation$Dart._get__Element_onmouseup$$named_;
}
;
_ElementWrappingImplementation$Dart._set__Element_onmouseup$$member_ = function(_this, value){
  return native__ElementWrappingImplementation__set__Element_onmouseup(_this, value);
}
;
_ElementWrappingImplementation$Dart._set__Element_onmouseup$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _ElementWrappingImplementation$Dart._set__Element_onmouseup$$member_(_this, value);
}
;
_ElementWrappingImplementation$Dart._set__Element_onmouseup$$getter_ = function _set__Element_onmouseup$$getter_(){
  return _ElementWrappingImplementation$Dart._set__Element_onmouseup$$named_;
}
;
_ElementWrappingImplementation$Dart.prototype.onmousewheel$named = function(){
  return this.onmousewheel$getter().apply(this, arguments);
}
;
_ElementWrappingImplementation$Dart.prototype.onmousewheel$getter = function(){
  return _ElementWrappingImplementation$Dart._get__Element_onmousewheel$$member_(this);
}
;
_ElementWrappingImplementation$Dart.prototype.onmousewheel$setter = function(value){
  _ElementWrappingImplementation$Dart._set__Element_onmousewheel$$member_(this, value);
}
;
_ElementWrappingImplementation$Dart._get__Element_onmousewheel$$member_ = function(_this){
  return native__ElementWrappingImplementation__get__Element_onmousewheel(_this);
}
;
_ElementWrappingImplementation$Dart._get__Element_onmousewheel$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _ElementWrappingImplementation$Dart._get__Element_onmousewheel$$member_(_this);
}
;
_ElementWrappingImplementation$Dart._get__Element_onmousewheel$$getter_ = function _get__Element_onmousewheel$$getter_(){
  return _ElementWrappingImplementation$Dart._get__Element_onmousewheel$$named_;
}
;
_ElementWrappingImplementation$Dart._set__Element_onmousewheel$$member_ = function(_this, value){
  return native__ElementWrappingImplementation__set__Element_onmousewheel(_this, value);
}
;
_ElementWrappingImplementation$Dart._set__Element_onmousewheel$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _ElementWrappingImplementation$Dart._set__Element_onmousewheel$$member_(_this, value);
}
;
_ElementWrappingImplementation$Dart._set__Element_onmousewheel$$getter_ = function _set__Element_onmousewheel$$getter_(){
  return _ElementWrappingImplementation$Dart._set__Element_onmousewheel$$named_;
}
;
_ElementWrappingImplementation$Dart.prototype.onpaste$named = function(){
  return this.onpaste$getter().apply(this, arguments);
}
;
_ElementWrappingImplementation$Dart.prototype.onpaste$getter = function(){
  return _ElementWrappingImplementation$Dart._get__Element_onpaste$$member_(this);
}
;
_ElementWrappingImplementation$Dart.prototype.onpaste$setter = function(value){
  _ElementWrappingImplementation$Dart._set__Element_onpaste$$member_(this, value);
}
;
_ElementWrappingImplementation$Dart._get__Element_onpaste$$member_ = function(_this){
  return native__ElementWrappingImplementation__get__Element_onpaste(_this);
}
;
_ElementWrappingImplementation$Dart._get__Element_onpaste$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _ElementWrappingImplementation$Dart._get__Element_onpaste$$member_(_this);
}
;
_ElementWrappingImplementation$Dart._get__Element_onpaste$$getter_ = function _get__Element_onpaste$$getter_(){
  return _ElementWrappingImplementation$Dart._get__Element_onpaste$$named_;
}
;
_ElementWrappingImplementation$Dart._set__Element_onpaste$$member_ = function(_this, value){
  return native__ElementWrappingImplementation__set__Element_onpaste(_this, value);
}
;
_ElementWrappingImplementation$Dart._set__Element_onpaste$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _ElementWrappingImplementation$Dart._set__Element_onpaste$$member_(_this, value);
}
;
_ElementWrappingImplementation$Dart._set__Element_onpaste$$getter_ = function _set__Element_onpaste$$getter_(){
  return _ElementWrappingImplementation$Dart._set__Element_onpaste$$named_;
}
;
_ElementWrappingImplementation$Dart.prototype.onreset$named = function(){
  return this.onreset$getter().apply(this, arguments);
}
;
_ElementWrappingImplementation$Dart.prototype.onreset$getter = function(){
  return _ElementWrappingImplementation$Dart._get__Element_onreset$$member_(this);
}
;
_ElementWrappingImplementation$Dart.prototype.onreset$setter = function(value){
  _ElementWrappingImplementation$Dart._set__Element_onreset$$member_(this, value);
}
;
_ElementWrappingImplementation$Dart._get__Element_onreset$$member_ = function(_this){
  return native__ElementWrappingImplementation__get__Element_onreset(_this);
}
;
_ElementWrappingImplementation$Dart._get__Element_onreset$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _ElementWrappingImplementation$Dart._get__Element_onreset$$member_(_this);
}
;
_ElementWrappingImplementation$Dart._get__Element_onreset$$getter_ = function _get__Element_onreset$$getter_(){
  return _ElementWrappingImplementation$Dart._get__Element_onreset$$named_;
}
;
_ElementWrappingImplementation$Dart._set__Element_onreset$$member_ = function(_this, value){
  return native__ElementWrappingImplementation__set__Element_onreset(_this, value);
}
;
_ElementWrappingImplementation$Dart._set__Element_onreset$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _ElementWrappingImplementation$Dart._set__Element_onreset$$member_(_this, value);
}
;
_ElementWrappingImplementation$Dart._set__Element_onreset$$getter_ = function _set__Element_onreset$$getter_(){
  return _ElementWrappingImplementation$Dart._set__Element_onreset$$named_;
}
;
_ElementWrappingImplementation$Dart.prototype.onscroll$named = function(){
  return this.onscroll$getter().apply(this, arguments);
}
;
_ElementWrappingImplementation$Dart.prototype.onscroll$getter = function(){
  return _ElementWrappingImplementation$Dart._get__Element_onscroll$$member_(this);
}
;
_ElementWrappingImplementation$Dart.prototype.onscroll$setter = function(value){
  _ElementWrappingImplementation$Dart._set__Element_onscroll$$member_(this, value);
}
;
_ElementWrappingImplementation$Dart._get__Element_onscroll$$member_ = function(_this){
  return native__ElementWrappingImplementation__get__Element_onscroll(_this);
}
;
_ElementWrappingImplementation$Dart._get__Element_onscroll$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _ElementWrappingImplementation$Dart._get__Element_onscroll$$member_(_this);
}
;
_ElementWrappingImplementation$Dart._get__Element_onscroll$$getter_ = function _get__Element_onscroll$$getter_(){
  return _ElementWrappingImplementation$Dart._get__Element_onscroll$$named_;
}
;
_ElementWrappingImplementation$Dart._set__Element_onscroll$$member_ = function(_this, value){
  return native__ElementWrappingImplementation__set__Element_onscroll(_this, value);
}
;
_ElementWrappingImplementation$Dart._set__Element_onscroll$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _ElementWrappingImplementation$Dart._set__Element_onscroll$$member_(_this, value);
}
;
_ElementWrappingImplementation$Dart._set__Element_onscroll$$getter_ = function _set__Element_onscroll$$getter_(){
  return _ElementWrappingImplementation$Dart._set__Element_onscroll$$named_;
}
;
_ElementWrappingImplementation$Dart.prototype.onsearch$named = function(){
  return this.onsearch$getter().apply(this, arguments);
}
;
_ElementWrappingImplementation$Dart.prototype.onsearch$getter = function(){
  return _ElementWrappingImplementation$Dart._get__Element_onsearch$$member_(this);
}
;
_ElementWrappingImplementation$Dart.prototype.onsearch$setter = function(value){
  _ElementWrappingImplementation$Dart._set__Element_onsearch$$member_(this, value);
}
;
_ElementWrappingImplementation$Dart._get__Element_onsearch$$member_ = function(_this){
  return native__ElementWrappingImplementation__get__Element_onsearch(_this);
}
;
_ElementWrappingImplementation$Dart._get__Element_onsearch$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _ElementWrappingImplementation$Dart._get__Element_onsearch$$member_(_this);
}
;
_ElementWrappingImplementation$Dart._get__Element_onsearch$$getter_ = function _get__Element_onsearch$$getter_(){
  return _ElementWrappingImplementation$Dart._get__Element_onsearch$$named_;
}
;
_ElementWrappingImplementation$Dart._set__Element_onsearch$$member_ = function(_this, value){
  return native__ElementWrappingImplementation__set__Element_onsearch(_this, value);
}
;
_ElementWrappingImplementation$Dart._set__Element_onsearch$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _ElementWrappingImplementation$Dart._set__Element_onsearch$$member_(_this, value);
}
;
_ElementWrappingImplementation$Dart._set__Element_onsearch$$getter_ = function _set__Element_onsearch$$getter_(){
  return _ElementWrappingImplementation$Dart._set__Element_onsearch$$named_;
}
;
_ElementWrappingImplementation$Dart.prototype.onselect$named = function(){
  return this.onselect$getter().apply(this, arguments);
}
;
_ElementWrappingImplementation$Dart.prototype.onselect$getter = function(){
  return _ElementWrappingImplementation$Dart._get__Element_onselect$$member_(this);
}
;
_ElementWrappingImplementation$Dart.prototype.onselect$setter = function(value){
  _ElementWrappingImplementation$Dart._set__Element_onselect$$member_(this, value);
}
;
_ElementWrappingImplementation$Dart._get__Element_onselect$$member_ = function(_this){
  return native__ElementWrappingImplementation__get__Element_onselect(_this);
}
;
_ElementWrappingImplementation$Dart._get__Element_onselect$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _ElementWrappingImplementation$Dart._get__Element_onselect$$member_(_this);
}
;
_ElementWrappingImplementation$Dart._get__Element_onselect$$getter_ = function _get__Element_onselect$$getter_(){
  return _ElementWrappingImplementation$Dart._get__Element_onselect$$named_;
}
;
_ElementWrappingImplementation$Dart._set__Element_onselect$$member_ = function(_this, value){
  return native__ElementWrappingImplementation__set__Element_onselect(_this, value);
}
;
_ElementWrappingImplementation$Dart._set__Element_onselect$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _ElementWrappingImplementation$Dart._set__Element_onselect$$member_(_this, value);
}
;
_ElementWrappingImplementation$Dart._set__Element_onselect$$getter_ = function _set__Element_onselect$$getter_(){
  return _ElementWrappingImplementation$Dart._set__Element_onselect$$named_;
}
;
_ElementWrappingImplementation$Dart.prototype.onselectstart$named = function(){
  return this.onselectstart$getter().apply(this, arguments);
}
;
_ElementWrappingImplementation$Dart.prototype.onselectstart$getter = function(){
  return _ElementWrappingImplementation$Dart._get__Element_onselectstart$$member_(this);
}
;
_ElementWrappingImplementation$Dart.prototype.onselectstart$setter = function(value){
  _ElementWrappingImplementation$Dart._set__Element_onselectstart$$member_(this, value);
}
;
_ElementWrappingImplementation$Dart._get__Element_onselectstart$$member_ = function(_this){
  return native__ElementWrappingImplementation__get__Element_onselectstart(_this);
}
;
_ElementWrappingImplementation$Dart._get__Element_onselectstart$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _ElementWrappingImplementation$Dart._get__Element_onselectstart$$member_(_this);
}
;
_ElementWrappingImplementation$Dart._get__Element_onselectstart$$getter_ = function _get__Element_onselectstart$$getter_(){
  return _ElementWrappingImplementation$Dart._get__Element_onselectstart$$named_;
}
;
_ElementWrappingImplementation$Dart._set__Element_onselectstart$$member_ = function(_this, value){
  return native__ElementWrappingImplementation__set__Element_onselectstart(_this, value);
}
;
_ElementWrappingImplementation$Dart._set__Element_onselectstart$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _ElementWrappingImplementation$Dart._set__Element_onselectstart$$member_(_this, value);
}
;
_ElementWrappingImplementation$Dart._set__Element_onselectstart$$getter_ = function _set__Element_onselectstart$$getter_(){
  return _ElementWrappingImplementation$Dart._set__Element_onselectstart$$named_;
}
;
_ElementWrappingImplementation$Dart.prototype.onsubmit$named = function(){
  return this.onsubmit$getter().apply(this, arguments);
}
;
_ElementWrappingImplementation$Dart.prototype.onsubmit$getter = function(){
  return _ElementWrappingImplementation$Dart._get__Element_onsubmit$$member_(this);
}
;
_ElementWrappingImplementation$Dart.prototype.onsubmit$setter = function(value){
  _ElementWrappingImplementation$Dart._set__Element_onsubmit$$member_(this, value);
}
;
_ElementWrappingImplementation$Dart._get__Element_onsubmit$$member_ = function(_this){
  return native__ElementWrappingImplementation__get__Element_onsubmit(_this);
}
;
_ElementWrappingImplementation$Dart._get__Element_onsubmit$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _ElementWrappingImplementation$Dart._get__Element_onsubmit$$member_(_this);
}
;
_ElementWrappingImplementation$Dart._get__Element_onsubmit$$getter_ = function _get__Element_onsubmit$$getter_(){
  return _ElementWrappingImplementation$Dart._get__Element_onsubmit$$named_;
}
;
_ElementWrappingImplementation$Dart._set__Element_onsubmit$$member_ = function(_this, value){
  return native__ElementWrappingImplementation__set__Element_onsubmit(_this, value);
}
;
_ElementWrappingImplementation$Dart._set__Element_onsubmit$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _ElementWrappingImplementation$Dart._set__Element_onsubmit$$member_(_this, value);
}
;
_ElementWrappingImplementation$Dart._set__Element_onsubmit$$getter_ = function _set__Element_onsubmit$$getter_(){
  return _ElementWrappingImplementation$Dart._set__Element_onsubmit$$named_;
}
;
_ElementWrappingImplementation$Dart.prototype.ontouchcancel$named = function(){
  return this.ontouchcancel$getter().apply(this, arguments);
}
;
_ElementWrappingImplementation$Dart.prototype.ontouchcancel$getter = function(){
  return _ElementWrappingImplementation$Dart._get__Element_ontouchcancel$$member_(this);
}
;
_ElementWrappingImplementation$Dart.prototype.ontouchcancel$setter = function(value){
  _ElementWrappingImplementation$Dart._set__Element_ontouchcancel$$member_(this, value);
}
;
_ElementWrappingImplementation$Dart._get__Element_ontouchcancel$$member_ = function(_this){
  return native__ElementWrappingImplementation__get__Element_ontouchcancel(_this);
}
;
_ElementWrappingImplementation$Dart._get__Element_ontouchcancel$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _ElementWrappingImplementation$Dart._get__Element_ontouchcancel$$member_(_this);
}
;
_ElementWrappingImplementation$Dart._get__Element_ontouchcancel$$getter_ = function _get__Element_ontouchcancel$$getter_(){
  return _ElementWrappingImplementation$Dart._get__Element_ontouchcancel$$named_;
}
;
_ElementWrappingImplementation$Dart._set__Element_ontouchcancel$$member_ = function(_this, value){
  return native__ElementWrappingImplementation__set__Element_ontouchcancel(_this, value);
}
;
_ElementWrappingImplementation$Dart._set__Element_ontouchcancel$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _ElementWrappingImplementation$Dart._set__Element_ontouchcancel$$member_(_this, value);
}
;
_ElementWrappingImplementation$Dart._set__Element_ontouchcancel$$getter_ = function _set__Element_ontouchcancel$$getter_(){
  return _ElementWrappingImplementation$Dart._set__Element_ontouchcancel$$named_;
}
;
_ElementWrappingImplementation$Dart.prototype.ontouchend$named = function(){
  return this.ontouchend$getter().apply(this, arguments);
}
;
_ElementWrappingImplementation$Dart.prototype.ontouchend$getter = function(){
  return _ElementWrappingImplementation$Dart._get__Element_ontouchend$$member_(this);
}
;
_ElementWrappingImplementation$Dart.prototype.ontouchend$setter = function(value){
  _ElementWrappingImplementation$Dart._set__Element_ontouchend$$member_(this, value);
}
;
_ElementWrappingImplementation$Dart._get__Element_ontouchend$$member_ = function(_this){
  return native__ElementWrappingImplementation__get__Element_ontouchend(_this);
}
;
_ElementWrappingImplementation$Dart._get__Element_ontouchend$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _ElementWrappingImplementation$Dart._get__Element_ontouchend$$member_(_this);
}
;
_ElementWrappingImplementation$Dart._get__Element_ontouchend$$getter_ = function _get__Element_ontouchend$$getter_(){
  return _ElementWrappingImplementation$Dart._get__Element_ontouchend$$named_;
}
;
_ElementWrappingImplementation$Dart._set__Element_ontouchend$$member_ = function(_this, value){
  return native__ElementWrappingImplementation__set__Element_ontouchend(_this, value);
}
;
_ElementWrappingImplementation$Dart._set__Element_ontouchend$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _ElementWrappingImplementation$Dart._set__Element_ontouchend$$member_(_this, value);
}
;
_ElementWrappingImplementation$Dart._set__Element_ontouchend$$getter_ = function _set__Element_ontouchend$$getter_(){
  return _ElementWrappingImplementation$Dart._set__Element_ontouchend$$named_;
}
;
_ElementWrappingImplementation$Dart.prototype.ontouchmove$named = function(){
  return this.ontouchmove$getter().apply(this, arguments);
}
;
_ElementWrappingImplementation$Dart.prototype.ontouchmove$getter = function(){
  return _ElementWrappingImplementation$Dart._get__Element_ontouchmove$$member_(this);
}
;
_ElementWrappingImplementation$Dart.prototype.ontouchmove$setter = function(value){
  _ElementWrappingImplementation$Dart._set__Element_ontouchmove$$member_(this, value);
}
;
_ElementWrappingImplementation$Dart._get__Element_ontouchmove$$member_ = function(_this){
  return native__ElementWrappingImplementation__get__Element_ontouchmove(_this);
}
;
_ElementWrappingImplementation$Dart._get__Element_ontouchmove$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _ElementWrappingImplementation$Dart._get__Element_ontouchmove$$member_(_this);
}
;
_ElementWrappingImplementation$Dart._get__Element_ontouchmove$$getter_ = function _get__Element_ontouchmove$$getter_(){
  return _ElementWrappingImplementation$Dart._get__Element_ontouchmove$$named_;
}
;
_ElementWrappingImplementation$Dart._set__Element_ontouchmove$$member_ = function(_this, value){
  return native__ElementWrappingImplementation__set__Element_ontouchmove(_this, value);
}
;
_ElementWrappingImplementation$Dart._set__Element_ontouchmove$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _ElementWrappingImplementation$Dart._set__Element_ontouchmove$$member_(_this, value);
}
;
_ElementWrappingImplementation$Dart._set__Element_ontouchmove$$getter_ = function _set__Element_ontouchmove$$getter_(){
  return _ElementWrappingImplementation$Dart._set__Element_ontouchmove$$named_;
}
;
_ElementWrappingImplementation$Dart.prototype.ontouchstart$named = function(){
  return this.ontouchstart$getter().apply(this, arguments);
}
;
_ElementWrappingImplementation$Dart.prototype.ontouchstart$getter = function(){
  return _ElementWrappingImplementation$Dart._get__Element_ontouchstart$$member_(this);
}
;
_ElementWrappingImplementation$Dart.prototype.ontouchstart$setter = function(value){
  _ElementWrappingImplementation$Dart._set__Element_ontouchstart$$member_(this, value);
}
;
_ElementWrappingImplementation$Dart._get__Element_ontouchstart$$member_ = function(_this){
  return native__ElementWrappingImplementation__get__Element_ontouchstart(_this);
}
;
_ElementWrappingImplementation$Dart._get__Element_ontouchstart$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _ElementWrappingImplementation$Dart._get__Element_ontouchstart$$member_(_this);
}
;
_ElementWrappingImplementation$Dart._get__Element_ontouchstart$$getter_ = function _get__Element_ontouchstart$$getter_(){
  return _ElementWrappingImplementation$Dart._get__Element_ontouchstart$$named_;
}
;
_ElementWrappingImplementation$Dart._set__Element_ontouchstart$$member_ = function(_this, value){
  return native__ElementWrappingImplementation__set__Element_ontouchstart(_this, value);
}
;
_ElementWrappingImplementation$Dart._set__Element_ontouchstart$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _ElementWrappingImplementation$Dart._set__Element_ontouchstart$$member_(_this, value);
}
;
_ElementWrappingImplementation$Dart._set__Element_ontouchstart$$getter_ = function _set__Element_ontouchstart$$getter_(){
  return _ElementWrappingImplementation$Dart._set__Element_ontouchstart$$named_;
}
;
_ElementWrappingImplementation$Dart.prototype.onwebkitfullscreenchange$named = function(){
  return this.onwebkitfullscreenchange$getter().apply(this, arguments);
}
;
_ElementWrappingImplementation$Dart.prototype.onwebkitfullscreenchange$getter = function(){
  return _ElementWrappingImplementation$Dart._get__Element_onwebkitfullscreenchange$$member_(this);
}
;
_ElementWrappingImplementation$Dart.prototype.onwebkitfullscreenchange$setter = function(value){
  _ElementWrappingImplementation$Dart._set__Element_onwebkitfullscreenchange$$member_(this, value);
}
;
_ElementWrappingImplementation$Dart._get__Element_onwebkitfullscreenchange$$member_ = function(_this){
  return native__ElementWrappingImplementation__get__Element_onwebkitfullscreenchange(_this);
}
;
_ElementWrappingImplementation$Dart._get__Element_onwebkitfullscreenchange$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _ElementWrappingImplementation$Dart._get__Element_onwebkitfullscreenchange$$member_(_this);
}
;
_ElementWrappingImplementation$Dart._get__Element_onwebkitfullscreenchange$$getter_ = function _get__Element_onwebkitfullscreenchange$$getter_(){
  return _ElementWrappingImplementation$Dart._get__Element_onwebkitfullscreenchange$$named_;
}
;
_ElementWrappingImplementation$Dart._set__Element_onwebkitfullscreenchange$$member_ = function(_this, value){
  return native__ElementWrappingImplementation__set__Element_onwebkitfullscreenchange(_this, value);
}
;
_ElementWrappingImplementation$Dart._set__Element_onwebkitfullscreenchange$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _ElementWrappingImplementation$Dart._set__Element_onwebkitfullscreenchange$$member_(_this, value);
}
;
_ElementWrappingImplementation$Dart._set__Element_onwebkitfullscreenchange$$getter_ = function _set__Element_onwebkitfullscreenchange$$getter_(){
  return _ElementWrappingImplementation$Dart._set__Element_onwebkitfullscreenchange$$named_;
}
;
_ElementWrappingImplementation$Dart.prototype.previousElementSibling$named = function(){
  return this.previousElementSibling$getter().apply(this, arguments);
}
;
_ElementWrappingImplementation$Dart.prototype.previousElementSibling$getter = function(){
  return _ElementWrappingImplementation$Dart._get__Element_previousElementSibling$$member_(this);
}
;
_ElementWrappingImplementation$Dart._get__Element_previousElementSibling$$member_ = function(_this){
  return native__ElementWrappingImplementation__get__Element_previousElementSibling(_this);
}
;
_ElementWrappingImplementation$Dart._get__Element_previousElementSibling$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _ElementWrappingImplementation$Dart._get__Element_previousElementSibling$$member_(_this);
}
;
_ElementWrappingImplementation$Dart._get__Element_previousElementSibling$$getter_ = function _get__Element_previousElementSibling$$getter_(){
  return _ElementWrappingImplementation$Dart._get__Element_previousElementSibling$$named_;
}
;
_ElementWrappingImplementation$Dart.prototype.scrollHeight$named = function(){
  return this.scrollHeight$getter().apply(this, arguments);
}
;
_ElementWrappingImplementation$Dart.prototype.scrollHeight$getter = function(){
  return _ElementWrappingImplementation$Dart._get__Element_scrollHeight$$member_(this);
}
;
_ElementWrappingImplementation$Dart._get__Element_scrollHeight$$member_ = function(_this){
  return native__ElementWrappingImplementation__get__Element_scrollHeight(_this);
}
;
_ElementWrappingImplementation$Dart._get__Element_scrollHeight$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _ElementWrappingImplementation$Dart._get__Element_scrollHeight$$member_(_this);
}
;
_ElementWrappingImplementation$Dart._get__Element_scrollHeight$$getter_ = function _get__Element_scrollHeight$$getter_(){
  return _ElementWrappingImplementation$Dart._get__Element_scrollHeight$$named_;
}
;
_ElementWrappingImplementation$Dart.prototype.scrollLeft$named = function(){
  return this.scrollLeft$getter().apply(this, arguments);
}
;
_ElementWrappingImplementation$Dart.prototype.scrollLeft$getter = function(){
  return _ElementWrappingImplementation$Dart._get__Element_scrollLeft$$member_(this);
}
;
_ElementWrappingImplementation$Dart.prototype.scrollLeft$setter = function(value){
  _ElementWrappingImplementation$Dart._set__Element_scrollLeft$$member_(this, value);
}
;
_ElementWrappingImplementation$Dart._get__Element_scrollLeft$$member_ = function(_this){
  return native__ElementWrappingImplementation__get__Element_scrollLeft(_this);
}
;
_ElementWrappingImplementation$Dart._get__Element_scrollLeft$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _ElementWrappingImplementation$Dart._get__Element_scrollLeft$$member_(_this);
}
;
_ElementWrappingImplementation$Dart._get__Element_scrollLeft$$getter_ = function _get__Element_scrollLeft$$getter_(){
  return _ElementWrappingImplementation$Dart._get__Element_scrollLeft$$named_;
}
;
_ElementWrappingImplementation$Dart._set__Element_scrollLeft$$member_ = function(_this, value){
  return native__ElementWrappingImplementation__set__Element_scrollLeft(_this, value);
}
;
_ElementWrappingImplementation$Dart._set__Element_scrollLeft$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _ElementWrappingImplementation$Dart._set__Element_scrollLeft$$member_(_this, value);
}
;
_ElementWrappingImplementation$Dart._set__Element_scrollLeft$$getter_ = function _set__Element_scrollLeft$$getter_(){
  return _ElementWrappingImplementation$Dart._set__Element_scrollLeft$$named_;
}
;
_ElementWrappingImplementation$Dart.prototype.scrollTop$named = function(){
  return this.scrollTop$getter().apply(this, arguments);
}
;
_ElementWrappingImplementation$Dart.prototype.scrollTop$getter = function(){
  return _ElementWrappingImplementation$Dart._get__Element_scrollTop$$member_(this);
}
;
_ElementWrappingImplementation$Dart.prototype.scrollTop$setter = function(value){
  _ElementWrappingImplementation$Dart._set__Element_scrollTop$$member_(this, value);
}
;
_ElementWrappingImplementation$Dart._get__Element_scrollTop$$member_ = function(_this){
  return native__ElementWrappingImplementation__get__Element_scrollTop(_this);
}
;
_ElementWrappingImplementation$Dart._get__Element_scrollTop$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _ElementWrappingImplementation$Dart._get__Element_scrollTop$$member_(_this);
}
;
_ElementWrappingImplementation$Dart._get__Element_scrollTop$$getter_ = function _get__Element_scrollTop$$getter_(){
  return _ElementWrappingImplementation$Dart._get__Element_scrollTop$$named_;
}
;
_ElementWrappingImplementation$Dart._set__Element_scrollTop$$member_ = function(_this, value){
  return native__ElementWrappingImplementation__set__Element_scrollTop(_this, value);
}
;
_ElementWrappingImplementation$Dart._set__Element_scrollTop$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _ElementWrappingImplementation$Dart._set__Element_scrollTop$$member_(_this, value);
}
;
_ElementWrappingImplementation$Dart._set__Element_scrollTop$$getter_ = function _set__Element_scrollTop$$getter_(){
  return _ElementWrappingImplementation$Dart._set__Element_scrollTop$$named_;
}
;
_ElementWrappingImplementation$Dart.prototype.scrollWidth$named = function(){
  return this.scrollWidth$getter().apply(this, arguments);
}
;
_ElementWrappingImplementation$Dart.prototype.scrollWidth$getter = function(){
  return _ElementWrappingImplementation$Dart._get__Element_scrollWidth$$member_(this);
}
;
_ElementWrappingImplementation$Dart._get__Element_scrollWidth$$member_ = function(_this){
  return native__ElementWrappingImplementation__get__Element_scrollWidth(_this);
}
;
_ElementWrappingImplementation$Dart._get__Element_scrollWidth$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _ElementWrappingImplementation$Dart._get__Element_scrollWidth$$member_(_this);
}
;
_ElementWrappingImplementation$Dart._get__Element_scrollWidth$$getter_ = function _get__Element_scrollWidth$$getter_(){
  return _ElementWrappingImplementation$Dart._get__Element_scrollWidth$$named_;
}
;
_ElementWrappingImplementation$Dart.prototype.style$named = function(){
  return this.style$getter().apply(this, arguments);
}
;
_ElementWrappingImplementation$Dart.prototype.style$getter = function(){
  return _ElementWrappingImplementation$Dart._get__Element_style$$member_(this);
}
;
_ElementWrappingImplementation$Dart._get__Element_style$$member_ = function(_this){
  return native__ElementWrappingImplementation__get__Element_style(_this);
}
;
_ElementWrappingImplementation$Dart._get__Element_style$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _ElementWrappingImplementation$Dart._get__Element_style$$member_(_this);
}
;
_ElementWrappingImplementation$Dart._get__Element_style$$getter_ = function _get__Element_style$$getter_(){
  return _ElementWrappingImplementation$Dart._get__Element_style$$named_;
}
;
_ElementWrappingImplementation$Dart.prototype.tagName$named = function(){
  return this.tagName$getter().apply(this, arguments);
}
;
_ElementWrappingImplementation$Dart.prototype.tagName$getter = function(){
  return _ElementWrappingImplementation$Dart._get__Element_tagName$$member_(this);
}
;
_ElementWrappingImplementation$Dart._get__Element_tagName$$member_ = function(_this){
  return native__ElementWrappingImplementation__get__Element_tagName(_this);
}
;
_ElementWrappingImplementation$Dart._get__Element_tagName$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _ElementWrappingImplementation$Dart._get__Element_tagName$$member_(_this);
}
;
_ElementWrappingImplementation$Dart._get__Element_tagName$$getter_ = function _get__Element_tagName$$getter_(){
  return _ElementWrappingImplementation$Dart._get__Element_tagName$$named_;
}
;
_ElementWrappingImplementation$Dart.prototype.blur$member = function(){
  _ElementWrappingImplementation$Dart._blur$$member_(this);
  return;
}
;
_ElementWrappingImplementation$Dart.prototype.blur$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _ElementWrappingImplementation$Dart.prototype.blur$member.call(this);
}
;
_ElementWrappingImplementation$Dart.prototype.blur$getter = function blur$getter(){
  return $bind(_ElementWrappingImplementation$Dart.prototype.blur$named, this);
}
;
_ElementWrappingImplementation$Dart._blur$$member_ = function(receiver){
  return native__ElementWrappingImplementation__blur(receiver);
}
;
_ElementWrappingImplementation$Dart._blur$$named_ = function($n, $o, receiver){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _ElementWrappingImplementation$Dart._blur$$member_(receiver);
}
;
_ElementWrappingImplementation$Dart._blur$$getter_ = function _blur$$getter_(){
  return _ElementWrappingImplementation$Dart._blur$$named_;
}
;
_ElementWrappingImplementation$Dart.prototype.focus$member = function(){
  _ElementWrappingImplementation$Dart._focus$$member_(this);
  return;
}
;
_ElementWrappingImplementation$Dart.prototype.focus$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _ElementWrappingImplementation$Dart.prototype.focus$member.call(this);
}
;
_ElementWrappingImplementation$Dart.prototype.focus$getter = function focus$getter(){
  return $bind(_ElementWrappingImplementation$Dart.prototype.focus$named, this);
}
;
_ElementWrappingImplementation$Dart._focus$$member_ = function(receiver){
  return native__ElementWrappingImplementation__focus(receiver);
}
;
_ElementWrappingImplementation$Dart._focus$$named_ = function($n, $o, receiver){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _ElementWrappingImplementation$Dart._focus$$member_(receiver);
}
;
_ElementWrappingImplementation$Dart._focus$$getter_ = function _focus$$getter_(){
  return _ElementWrappingImplementation$Dart._focus$$named_;
}
;
_ElementWrappingImplementation$Dart.prototype.getAttribute$member = function(name_0){
  return _ElementWrappingImplementation$Dart._getAttribute$$member_(this, name_0);
}
;
_ElementWrappingImplementation$Dart.prototype.getAttribute$named = function($n, $o, name_0){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _ElementWrappingImplementation$Dart.prototype.getAttribute$member.call(this, name_0);
}
;
_ElementWrappingImplementation$Dart.prototype.getAttribute$getter = function getAttribute$getter(){
  return $bind(_ElementWrappingImplementation$Dart.prototype.getAttribute$named, this);
}
;
_ElementWrappingImplementation$Dart._getAttribute$$member_ = function(receiver, name_0){
  return native__ElementWrappingImplementation__getAttribute(receiver, name_0);
}
;
_ElementWrappingImplementation$Dart._getAttribute$$named_ = function($n, $o, receiver, name_0){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _ElementWrappingImplementation$Dart._getAttribute$$member_(receiver, name_0);
}
;
_ElementWrappingImplementation$Dart._getAttribute$$getter_ = function _getAttribute$$getter_(){
  return _ElementWrappingImplementation$Dart._getAttribute$$named_;
}
;
_ElementWrappingImplementation$Dart.prototype.getAttributeNS$member = function(namespaceURI, localName){
  return _ElementWrappingImplementation$Dart._getAttributeNS$$member_(this, namespaceURI, localName);
}
;
_ElementWrappingImplementation$Dart.prototype.getAttributeNS$named = function($n, $o, namespaceURI, localName){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _ElementWrappingImplementation$Dart.prototype.getAttributeNS$member.call(this, namespaceURI, localName);
}
;
_ElementWrappingImplementation$Dart.prototype.getAttributeNS$getter = function getAttributeNS$getter(){
  return $bind(_ElementWrappingImplementation$Dart.prototype.getAttributeNS$named, this);
}
;
_ElementWrappingImplementation$Dart._getAttributeNS$$member_ = function(receiver, namespaceURI, localName){
  return native__ElementWrappingImplementation__getAttributeNS(receiver, namespaceURI, localName);
}
;
_ElementWrappingImplementation$Dart._getAttributeNS$$named_ = function($n, $o, receiver, namespaceURI, localName){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return _ElementWrappingImplementation$Dart._getAttributeNS$$member_(receiver, namespaceURI, localName);
}
;
_ElementWrappingImplementation$Dart._getAttributeNS$$getter_ = function _getAttributeNS$$getter_(){
  return _ElementWrappingImplementation$Dart._getAttributeNS$$named_;
}
;
_ElementWrappingImplementation$Dart.prototype.getAttributeNode$member = function(name_0){
  return _ElementWrappingImplementation$Dart._getAttributeNode$$member_(this, name_0);
}
;
_ElementWrappingImplementation$Dart.prototype.getAttributeNode$named = function($n, $o, name_0){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _ElementWrappingImplementation$Dart.prototype.getAttributeNode$member.call(this, name_0);
}
;
_ElementWrappingImplementation$Dart.prototype.getAttributeNode$getter = function getAttributeNode$getter(){
  return $bind(_ElementWrappingImplementation$Dart.prototype.getAttributeNode$named, this);
}
;
_ElementWrappingImplementation$Dart._getAttributeNode$$member_ = function(receiver, name_0){
  return native__ElementWrappingImplementation__getAttributeNode(receiver, name_0);
}
;
_ElementWrappingImplementation$Dart._getAttributeNode$$named_ = function($n, $o, receiver, name_0){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _ElementWrappingImplementation$Dart._getAttributeNode$$member_(receiver, name_0);
}
;
_ElementWrappingImplementation$Dart._getAttributeNode$$getter_ = function _getAttributeNode$$getter_(){
  return _ElementWrappingImplementation$Dart._getAttributeNode$$named_;
}
;
_ElementWrappingImplementation$Dart.prototype.getAttributeNodeNS$member = function(namespaceURI, localName){
  return _ElementWrappingImplementation$Dart._getAttributeNodeNS$$member_(this, namespaceURI, localName);
}
;
_ElementWrappingImplementation$Dart.prototype.getAttributeNodeNS$named = function($n, $o, namespaceURI, localName){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _ElementWrappingImplementation$Dart.prototype.getAttributeNodeNS$member.call(this, namespaceURI, localName);
}
;
_ElementWrappingImplementation$Dart.prototype.getAttributeNodeNS$getter = function getAttributeNodeNS$getter(){
  return $bind(_ElementWrappingImplementation$Dart.prototype.getAttributeNodeNS$named, this);
}
;
_ElementWrappingImplementation$Dart._getAttributeNodeNS$$member_ = function(receiver, namespaceURI, localName){
  return native__ElementWrappingImplementation__getAttributeNodeNS(receiver, namespaceURI, localName);
}
;
_ElementWrappingImplementation$Dart._getAttributeNodeNS$$named_ = function($n, $o, receiver, namespaceURI, localName){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return _ElementWrappingImplementation$Dart._getAttributeNodeNS$$member_(receiver, namespaceURI, localName);
}
;
_ElementWrappingImplementation$Dart._getAttributeNodeNS$$getter_ = function _getAttributeNodeNS$$getter_(){
  return _ElementWrappingImplementation$Dart._getAttributeNodeNS$$named_;
}
;
_ElementWrappingImplementation$Dart.prototype.getBoundingClientRect$member = function(){
  return _ElementWrappingImplementation$Dart._getBoundingClientRect$$member_(this);
}
;
_ElementWrappingImplementation$Dart.prototype.getBoundingClientRect$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _ElementWrappingImplementation$Dart.prototype.getBoundingClientRect$member.call(this);
}
;
_ElementWrappingImplementation$Dart.prototype.getBoundingClientRect$getter = function getBoundingClientRect$getter(){
  return $bind(_ElementWrappingImplementation$Dart.prototype.getBoundingClientRect$named, this);
}
;
_ElementWrappingImplementation$Dart._getBoundingClientRect$$member_ = function(receiver){
  return native__ElementWrappingImplementation__getBoundingClientRect(receiver);
}
;
_ElementWrappingImplementation$Dart._getBoundingClientRect$$named_ = function($n, $o, receiver){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _ElementWrappingImplementation$Dart._getBoundingClientRect$$member_(receiver);
}
;
_ElementWrappingImplementation$Dart._getBoundingClientRect$$getter_ = function _getBoundingClientRect$$getter_(){
  return _ElementWrappingImplementation$Dart._getBoundingClientRect$$named_;
}
;
_ElementWrappingImplementation$Dart.prototype.getClientRects$member = function(){
  return _ElementWrappingImplementation$Dart._getClientRects$$member_(this);
}
;
_ElementWrappingImplementation$Dart.prototype.getClientRects$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _ElementWrappingImplementation$Dart.prototype.getClientRects$member.call(this);
}
;
_ElementWrappingImplementation$Dart.prototype.getClientRects$getter = function getClientRects$getter(){
  return $bind(_ElementWrappingImplementation$Dart.prototype.getClientRects$named, this);
}
;
_ElementWrappingImplementation$Dart._getClientRects$$member_ = function(receiver){
  return native__ElementWrappingImplementation__getClientRects(receiver);
}
;
_ElementWrappingImplementation$Dart._getClientRects$$named_ = function($n, $o, receiver){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _ElementWrappingImplementation$Dart._getClientRects$$member_(receiver);
}
;
_ElementWrappingImplementation$Dart._getClientRects$$getter_ = function _getClientRects$$getter_(){
  return _ElementWrappingImplementation$Dart._getClientRects$$named_;
}
;
_ElementWrappingImplementation$Dart.prototype.getElementsByClassName$member = function(name_0){
  return _ElementWrappingImplementation$Dart._getElementsByClassName$$member_(this, name_0);
}
;
_ElementWrappingImplementation$Dart.prototype.getElementsByClassName$named = function($n, $o, name_0){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _ElementWrappingImplementation$Dart.prototype.getElementsByClassName$member.call(this, name_0);
}
;
_ElementWrappingImplementation$Dart.prototype.getElementsByClassName$getter = function getElementsByClassName$getter(){
  return $bind(_ElementWrappingImplementation$Dart.prototype.getElementsByClassName$named, this);
}
;
_ElementWrappingImplementation$Dart._getElementsByClassName$$member_ = function(receiver, name_0){
  return native__ElementWrappingImplementation__getElementsByClassName(receiver, name_0);
}
;
_ElementWrappingImplementation$Dart._getElementsByClassName$$named_ = function($n, $o, receiver, name_0){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _ElementWrappingImplementation$Dart._getElementsByClassName$$member_(receiver, name_0);
}
;
_ElementWrappingImplementation$Dart._getElementsByClassName$$getter_ = function _getElementsByClassName$$getter_(){
  return _ElementWrappingImplementation$Dart._getElementsByClassName$$named_;
}
;
_ElementWrappingImplementation$Dart.prototype.getElementsByTagName$member = function(name_0){
  return _ElementWrappingImplementation$Dart._getElementsByTagName$$member_(this, name_0);
}
;
_ElementWrappingImplementation$Dart.prototype.getElementsByTagName$named = function($n, $o, name_0){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _ElementWrappingImplementation$Dart.prototype.getElementsByTagName$member.call(this, name_0);
}
;
_ElementWrappingImplementation$Dart.prototype.getElementsByTagName$getter = function getElementsByTagName$getter(){
  return $bind(_ElementWrappingImplementation$Dart.prototype.getElementsByTagName$named, this);
}
;
_ElementWrappingImplementation$Dart._getElementsByTagName$$member_ = function(receiver, name_0){
  return native__ElementWrappingImplementation__getElementsByTagName(receiver, name_0);
}
;
_ElementWrappingImplementation$Dart._getElementsByTagName$$named_ = function($n, $o, receiver, name_0){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _ElementWrappingImplementation$Dart._getElementsByTagName$$member_(receiver, name_0);
}
;
_ElementWrappingImplementation$Dart._getElementsByTagName$$getter_ = function _getElementsByTagName$$getter_(){
  return _ElementWrappingImplementation$Dart._getElementsByTagName$$named_;
}
;
_ElementWrappingImplementation$Dart.prototype.getElementsByTagNameNS$member = function(namespaceURI, localName){
  return _ElementWrappingImplementation$Dart._getElementsByTagNameNS$$member_(this, namespaceURI, localName);
}
;
_ElementWrappingImplementation$Dart.prototype.getElementsByTagNameNS$named = function($n, $o, namespaceURI, localName){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _ElementWrappingImplementation$Dart.prototype.getElementsByTagNameNS$member.call(this, namespaceURI, localName);
}
;
_ElementWrappingImplementation$Dart.prototype.getElementsByTagNameNS$getter = function getElementsByTagNameNS$getter(){
  return $bind(_ElementWrappingImplementation$Dart.prototype.getElementsByTagNameNS$named, this);
}
;
_ElementWrappingImplementation$Dart._getElementsByTagNameNS$$member_ = function(receiver, namespaceURI, localName){
  return native__ElementWrappingImplementation__getElementsByTagNameNS(receiver, namespaceURI, localName);
}
;
_ElementWrappingImplementation$Dart._getElementsByTagNameNS$$named_ = function($n, $o, receiver, namespaceURI, localName){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return _ElementWrappingImplementation$Dart._getElementsByTagNameNS$$member_(receiver, namespaceURI, localName);
}
;
_ElementWrappingImplementation$Dart._getElementsByTagNameNS$$getter_ = function _getElementsByTagNameNS$$getter_(){
  return _ElementWrappingImplementation$Dart._getElementsByTagNameNS$$named_;
}
;
_ElementWrappingImplementation$Dart.prototype.hasAttribute$member = function(name_0){
  return _ElementWrappingImplementation$Dart._hasAttribute$$member_(this, name_0);
}
;
_ElementWrappingImplementation$Dart.prototype.hasAttribute$named = function($n, $o, name_0){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _ElementWrappingImplementation$Dart.prototype.hasAttribute$member.call(this, name_0);
}
;
_ElementWrappingImplementation$Dart.prototype.hasAttribute$getter = function hasAttribute$getter(){
  return $bind(_ElementWrappingImplementation$Dart.prototype.hasAttribute$named, this);
}
;
_ElementWrappingImplementation$Dart._hasAttribute$$member_ = function(receiver, name_0){
  return native__ElementWrappingImplementation__hasAttribute(receiver, name_0);
}
;
_ElementWrappingImplementation$Dart._hasAttribute$$named_ = function($n, $o, receiver, name_0){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _ElementWrappingImplementation$Dart._hasAttribute$$member_(receiver, name_0);
}
;
_ElementWrappingImplementation$Dart._hasAttribute$$getter_ = function _hasAttribute$$getter_(){
  return _ElementWrappingImplementation$Dart._hasAttribute$$named_;
}
;
_ElementWrappingImplementation$Dart.prototype.hasAttributeNS$member = function(namespaceURI, localName){
  return _ElementWrappingImplementation$Dart._hasAttributeNS$$member_(this, namespaceURI, localName);
}
;
_ElementWrappingImplementation$Dart.prototype.hasAttributeNS$named = function($n, $o, namespaceURI, localName){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _ElementWrappingImplementation$Dart.prototype.hasAttributeNS$member.call(this, namespaceURI, localName);
}
;
_ElementWrappingImplementation$Dart.prototype.hasAttributeNS$getter = function hasAttributeNS$getter(){
  return $bind(_ElementWrappingImplementation$Dart.prototype.hasAttributeNS$named, this);
}
;
_ElementWrappingImplementation$Dart._hasAttributeNS$$member_ = function(receiver, namespaceURI, localName){
  return native__ElementWrappingImplementation__hasAttributeNS(receiver, namespaceURI, localName);
}
;
_ElementWrappingImplementation$Dart._hasAttributeNS$$named_ = function($n, $o, receiver, namespaceURI, localName){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return _ElementWrappingImplementation$Dart._hasAttributeNS$$member_(receiver, namespaceURI, localName);
}
;
_ElementWrappingImplementation$Dart._hasAttributeNS$$getter_ = function _hasAttributeNS$$getter_(){
  return _ElementWrappingImplementation$Dart._hasAttributeNS$$named_;
}
;
_ElementWrappingImplementation$Dart.prototype.querySelector$member = function(selectors){
  return _ElementWrappingImplementation$Dart._querySelector$$member_(this, selectors);
}
;
_ElementWrappingImplementation$Dart.prototype.querySelector$named = function($n, $o, selectors){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _ElementWrappingImplementation$Dart.prototype.querySelector$member.call(this, selectors);
}
;
_ElementWrappingImplementation$Dart.prototype.querySelector$getter = function querySelector$getter(){
  return $bind(_ElementWrappingImplementation$Dart.prototype.querySelector$named, this);
}
;
_ElementWrappingImplementation$Dart._querySelector$$member_ = function(receiver, selectors){
  return native__ElementWrappingImplementation__querySelector(receiver, selectors);
}
;
_ElementWrappingImplementation$Dart._querySelector$$named_ = function($n, $o, receiver, selectors){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _ElementWrappingImplementation$Dart._querySelector$$member_(receiver, selectors);
}
;
_ElementWrappingImplementation$Dart._querySelector$$getter_ = function _querySelector$$getter_(){
  return _ElementWrappingImplementation$Dart._querySelector$$named_;
}
;
_ElementWrappingImplementation$Dart.prototype.querySelectorAll$member = function(selectors){
  return _ElementWrappingImplementation$Dart._querySelectorAll$$member_(this, selectors);
}
;
_ElementWrappingImplementation$Dart.prototype.querySelectorAll$named = function($n, $o, selectors){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _ElementWrappingImplementation$Dart.prototype.querySelectorAll$member.call(this, selectors);
}
;
_ElementWrappingImplementation$Dart.prototype.querySelectorAll$getter = function querySelectorAll$getter(){
  return $bind(_ElementWrappingImplementation$Dart.prototype.querySelectorAll$named, this);
}
;
_ElementWrappingImplementation$Dart._querySelectorAll$$member_ = function(receiver, selectors){
  return native__ElementWrappingImplementation__querySelectorAll(receiver, selectors);
}
;
_ElementWrappingImplementation$Dart._querySelectorAll$$named_ = function($n, $o, receiver, selectors){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _ElementWrappingImplementation$Dart._querySelectorAll$$member_(receiver, selectors);
}
;
_ElementWrappingImplementation$Dart._querySelectorAll$$getter_ = function _querySelectorAll$$getter_(){
  return _ElementWrappingImplementation$Dart._querySelectorAll$$named_;
}
;
_ElementWrappingImplementation$Dart.prototype.removeAttribute$member = function(name_0){
  _ElementWrappingImplementation$Dart._removeAttribute$$member_(this, name_0);
  return;
}
;
_ElementWrappingImplementation$Dart.prototype.removeAttribute$named = function($n, $o, name_0){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _ElementWrappingImplementation$Dart.prototype.removeAttribute$member.call(this, name_0);
}
;
_ElementWrappingImplementation$Dart.prototype.removeAttribute$getter = function removeAttribute$getter(){
  return $bind(_ElementWrappingImplementation$Dart.prototype.removeAttribute$named, this);
}
;
_ElementWrappingImplementation$Dart._removeAttribute$$member_ = function(receiver, name_0){
  return native__ElementWrappingImplementation__removeAttribute(receiver, name_0);
}
;
_ElementWrappingImplementation$Dart._removeAttribute$$named_ = function($n, $o, receiver, name_0){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _ElementWrappingImplementation$Dart._removeAttribute$$member_(receiver, name_0);
}
;
_ElementWrappingImplementation$Dart._removeAttribute$$getter_ = function _removeAttribute$$getter_(){
  return _ElementWrappingImplementation$Dart._removeAttribute$$named_;
}
;
_ElementWrappingImplementation$Dart.prototype.removeAttributeNS$member = function(namespaceURI, localName){
  _ElementWrappingImplementation$Dart._removeAttributeNS$$member_(this, namespaceURI, localName);
  return;
}
;
_ElementWrappingImplementation$Dart.prototype.removeAttributeNS$named = function($n, $o, namespaceURI, localName){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _ElementWrappingImplementation$Dart.prototype.removeAttributeNS$member.call(this, namespaceURI, localName);
}
;
_ElementWrappingImplementation$Dart.prototype.removeAttributeNS$getter = function removeAttributeNS$getter(){
  return $bind(_ElementWrappingImplementation$Dart.prototype.removeAttributeNS$named, this);
}
;
_ElementWrappingImplementation$Dart._removeAttributeNS$$member_ = function(receiver, namespaceURI, localName){
  return native__ElementWrappingImplementation__removeAttributeNS(receiver, namespaceURI, localName);
}
;
_ElementWrappingImplementation$Dart._removeAttributeNS$$named_ = function($n, $o, receiver, namespaceURI, localName){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return _ElementWrappingImplementation$Dart._removeAttributeNS$$member_(receiver, namespaceURI, localName);
}
;
_ElementWrappingImplementation$Dart._removeAttributeNS$$getter_ = function _removeAttributeNS$$getter_(){
  return _ElementWrappingImplementation$Dart._removeAttributeNS$$named_;
}
;
_ElementWrappingImplementation$Dart.prototype.removeAttributeNode$member = function(oldAttr){
  return _ElementWrappingImplementation$Dart._removeAttributeNode$$member_(this, oldAttr);
}
;
_ElementWrappingImplementation$Dart.prototype.removeAttributeNode$named = function($n, $o, oldAttr){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _ElementWrappingImplementation$Dart.prototype.removeAttributeNode$member.call(this, oldAttr);
}
;
_ElementWrappingImplementation$Dart.prototype.removeAttributeNode$getter = function removeAttributeNode$getter(){
  return $bind(_ElementWrappingImplementation$Dart.prototype.removeAttributeNode$named, this);
}
;
_ElementWrappingImplementation$Dart._removeAttributeNode$$member_ = function(receiver, oldAttr){
  return native__ElementWrappingImplementation__removeAttributeNode(receiver, oldAttr);
}
;
_ElementWrappingImplementation$Dart._removeAttributeNode$$named_ = function($n, $o, receiver, oldAttr){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _ElementWrappingImplementation$Dart._removeAttributeNode$$member_(receiver, oldAttr);
}
;
_ElementWrappingImplementation$Dart._removeAttributeNode$$getter_ = function _removeAttributeNode$$getter_(){
  return _ElementWrappingImplementation$Dart._removeAttributeNode$$named_;
}
;
_ElementWrappingImplementation$Dart.prototype.scrollByLines$member = function(lines){
  _ElementWrappingImplementation$Dart._scrollByLines$$member_(this, lines);
  return;
}
;
_ElementWrappingImplementation$Dart.prototype.scrollByLines$named = function($n, $o, lines){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _ElementWrappingImplementation$Dart.prototype.scrollByLines$member.call(this, lines);
}
;
_ElementWrappingImplementation$Dart.prototype.scrollByLines$getter = function scrollByLines$getter(){
  return $bind(_ElementWrappingImplementation$Dart.prototype.scrollByLines$named, this);
}
;
_ElementWrappingImplementation$Dart._scrollByLines$$member_ = function(receiver, lines){
  return native__ElementWrappingImplementation__scrollByLines(receiver, lines);
}
;
_ElementWrappingImplementation$Dart._scrollByLines$$named_ = function($n, $o, receiver, lines){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _ElementWrappingImplementation$Dart._scrollByLines$$member_(receiver, lines);
}
;
_ElementWrappingImplementation$Dart._scrollByLines$$getter_ = function _scrollByLines$$getter_(){
  return _ElementWrappingImplementation$Dart._scrollByLines$$named_;
}
;
_ElementWrappingImplementation$Dart.prototype.scrollByPages$member = function(pages){
  _ElementWrappingImplementation$Dart._scrollByPages$$member_(this, pages);
  return;
}
;
_ElementWrappingImplementation$Dart.prototype.scrollByPages$named = function($n, $o, pages){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _ElementWrappingImplementation$Dart.prototype.scrollByPages$member.call(this, pages);
}
;
_ElementWrappingImplementation$Dart.prototype.scrollByPages$getter = function scrollByPages$getter(){
  return $bind(_ElementWrappingImplementation$Dart.prototype.scrollByPages$named, this);
}
;
_ElementWrappingImplementation$Dart._scrollByPages$$member_ = function(receiver, pages){
  return native__ElementWrappingImplementation__scrollByPages(receiver, pages);
}
;
_ElementWrappingImplementation$Dart._scrollByPages$$named_ = function($n, $o, receiver, pages){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _ElementWrappingImplementation$Dart._scrollByPages$$member_(receiver, pages);
}
;
_ElementWrappingImplementation$Dart._scrollByPages$$getter_ = function _scrollByPages$$getter_(){
  return _ElementWrappingImplementation$Dart._scrollByPages$$named_;
}
;
_ElementWrappingImplementation$Dart.prototype.scrollIntoView$member = function(alignWithTop){
  if (alignWithTop == null) {
    _ElementWrappingImplementation$Dart._scrollIntoView$$member_(this);
    return;
  }
   else {
    _ElementWrappingImplementation$Dart._scrollIntoView_2$$member_(this, alignWithTop);
    return;
  }
}
;
_ElementWrappingImplementation$Dart.prototype.scrollIntoView$named = function($n, $o, alignWithTop){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 0:
      alignWithTop = $o.alignWithTop?(++seen , $o.alignWithTop):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _ElementWrappingImplementation$Dart.prototype.scrollIntoView$member.call(this, alignWithTop);
}
;
_ElementWrappingImplementation$Dart.prototype.scrollIntoView$getter = function scrollIntoView$getter(){
  return $bind(_ElementWrappingImplementation$Dart.prototype.scrollIntoView$named, this);
}
;
_ElementWrappingImplementation$Dart._scrollIntoView$$member_ = function(receiver){
  return native__ElementWrappingImplementation__scrollIntoView(receiver);
}
;
_ElementWrappingImplementation$Dart._scrollIntoView$$named_ = function($n, $o, receiver){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _ElementWrappingImplementation$Dart._scrollIntoView$$member_(receiver);
}
;
_ElementWrappingImplementation$Dart._scrollIntoView$$getter_ = function _scrollIntoView$$getter_(){
  return _ElementWrappingImplementation$Dart._scrollIntoView$$named_;
}
;
_ElementWrappingImplementation$Dart._scrollIntoView_2$$member_ = function(receiver, alignWithTop){
  return native__ElementWrappingImplementation__scrollIntoView_2(receiver, alignWithTop);
}
;
_ElementWrappingImplementation$Dart._scrollIntoView_2$$named_ = function($n, $o, receiver, alignWithTop){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _ElementWrappingImplementation$Dart._scrollIntoView_2$$member_(receiver, alignWithTop);
}
;
_ElementWrappingImplementation$Dart._scrollIntoView_2$$getter_ = function _scrollIntoView_2$$getter_(){
  return _ElementWrappingImplementation$Dart._scrollIntoView_2$$named_;
}
;
_ElementWrappingImplementation$Dart.prototype.scrollIntoViewIfNeeded$member = function(centerIfNeeded){
  if (centerIfNeeded == null) {
    _ElementWrappingImplementation$Dart._scrollIntoViewIfNeeded$$member_(this);
    return;
  }
   else {
    _ElementWrappingImplementation$Dart._scrollIntoViewIfNeeded_2$$member_(this, centerIfNeeded);
    return;
  }
}
;
_ElementWrappingImplementation$Dart.prototype.scrollIntoViewIfNeeded$named = function($n, $o, centerIfNeeded){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 0:
      centerIfNeeded = $o.centerIfNeeded?(++seen , $o.centerIfNeeded):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _ElementWrappingImplementation$Dart.prototype.scrollIntoViewIfNeeded$member.call(this, centerIfNeeded);
}
;
_ElementWrappingImplementation$Dart.prototype.scrollIntoViewIfNeeded$getter = function scrollIntoViewIfNeeded$getter(){
  return $bind(_ElementWrappingImplementation$Dart.prototype.scrollIntoViewIfNeeded$named, this);
}
;
_ElementWrappingImplementation$Dart._scrollIntoViewIfNeeded$$member_ = function(receiver){
  return native__ElementWrappingImplementation__scrollIntoViewIfNeeded(receiver);
}
;
_ElementWrappingImplementation$Dart._scrollIntoViewIfNeeded$$named_ = function($n, $o, receiver){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _ElementWrappingImplementation$Dart._scrollIntoViewIfNeeded$$member_(receiver);
}
;
_ElementWrappingImplementation$Dart._scrollIntoViewIfNeeded$$getter_ = function _scrollIntoViewIfNeeded$$getter_(){
  return _ElementWrappingImplementation$Dart._scrollIntoViewIfNeeded$$named_;
}
;
_ElementWrappingImplementation$Dart._scrollIntoViewIfNeeded_2$$member_ = function(receiver, centerIfNeeded){
  return native__ElementWrappingImplementation__scrollIntoViewIfNeeded_2(receiver, centerIfNeeded);
}
;
_ElementWrappingImplementation$Dart._scrollIntoViewIfNeeded_2$$named_ = function($n, $o, receiver, centerIfNeeded){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _ElementWrappingImplementation$Dart._scrollIntoViewIfNeeded_2$$member_(receiver, centerIfNeeded);
}
;
_ElementWrappingImplementation$Dart._scrollIntoViewIfNeeded_2$$getter_ = function _scrollIntoViewIfNeeded_2$$getter_(){
  return _ElementWrappingImplementation$Dart._scrollIntoViewIfNeeded_2$$named_;
}
;
_ElementWrappingImplementation$Dart.prototype.setAttribute$member = function(name_0, value){
  _ElementWrappingImplementation$Dart._setAttribute$$member_(this, name_0, value);
  return;
}
;
_ElementWrappingImplementation$Dart.prototype.setAttribute$named = function($n, $o, name_0, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _ElementWrappingImplementation$Dart.prototype.setAttribute$member.call(this, name_0, value);
}
;
_ElementWrappingImplementation$Dart.prototype.setAttribute$getter = function setAttribute$getter(){
  return $bind(_ElementWrappingImplementation$Dart.prototype.setAttribute$named, this);
}
;
_ElementWrappingImplementation$Dart._setAttribute$$member_ = function(receiver, name_0, value){
  return native__ElementWrappingImplementation__setAttribute(receiver, name_0, value);
}
;
_ElementWrappingImplementation$Dart._setAttribute$$named_ = function($n, $o, receiver, name_0, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return _ElementWrappingImplementation$Dart._setAttribute$$member_(receiver, name_0, value);
}
;
_ElementWrappingImplementation$Dart._setAttribute$$getter_ = function _setAttribute$$getter_(){
  return _ElementWrappingImplementation$Dart._setAttribute$$named_;
}
;
_ElementWrappingImplementation$Dart.prototype.setAttributeNS$member = function(namespaceURI, qualifiedName, value){
  _ElementWrappingImplementation$Dart._setAttributeNS$$member_(this, namespaceURI, qualifiedName, value);
  return;
}
;
_ElementWrappingImplementation$Dart.prototype.setAttributeNS$named = function($n, $o, namespaceURI, qualifiedName, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return _ElementWrappingImplementation$Dart.prototype.setAttributeNS$member.call(this, namespaceURI, qualifiedName, value);
}
;
_ElementWrappingImplementation$Dart.prototype.setAttributeNS$getter = function setAttributeNS$getter(){
  return $bind(_ElementWrappingImplementation$Dart.prototype.setAttributeNS$named, this);
}
;
_ElementWrappingImplementation$Dart._setAttributeNS$$member_ = function(receiver, namespaceURI, qualifiedName, value){
  return native__ElementWrappingImplementation__setAttributeNS(receiver, namespaceURI, qualifiedName, value);
}
;
_ElementWrappingImplementation$Dart._setAttributeNS$$named_ = function($n, $o, receiver, namespaceURI, qualifiedName, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 4)
    $nsme();
  return _ElementWrappingImplementation$Dart._setAttributeNS$$member_(receiver, namespaceURI, qualifiedName, value);
}
;
_ElementWrappingImplementation$Dart._setAttributeNS$$getter_ = function _setAttributeNS$$getter_(){
  return _ElementWrappingImplementation$Dart._setAttributeNS$$named_;
}
;
_ElementWrappingImplementation$Dart.prototype.setAttributeNode$member = function(newAttr){
  return _ElementWrappingImplementation$Dart._setAttributeNode$$member_(this, newAttr);
}
;
_ElementWrappingImplementation$Dart.prototype.setAttributeNode$named = function($n, $o, newAttr){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _ElementWrappingImplementation$Dart.prototype.setAttributeNode$member.call(this, newAttr);
}
;
_ElementWrappingImplementation$Dart.prototype.setAttributeNode$getter = function setAttributeNode$getter(){
  return $bind(_ElementWrappingImplementation$Dart.prototype.setAttributeNode$named, this);
}
;
_ElementWrappingImplementation$Dart._setAttributeNode$$member_ = function(receiver, newAttr){
  return native__ElementWrappingImplementation__setAttributeNode(receiver, newAttr);
}
;
_ElementWrappingImplementation$Dart._setAttributeNode$$named_ = function($n, $o, receiver, newAttr){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _ElementWrappingImplementation$Dart._setAttributeNode$$member_(receiver, newAttr);
}
;
_ElementWrappingImplementation$Dart._setAttributeNode$$getter_ = function _setAttributeNode$$getter_(){
  return _ElementWrappingImplementation$Dart._setAttributeNode$$named_;
}
;
_ElementWrappingImplementation$Dart.prototype.setAttributeNodeNS$member = function(newAttr){
  return _ElementWrappingImplementation$Dart._setAttributeNodeNS$$member_(this, newAttr);
}
;
_ElementWrappingImplementation$Dart.prototype.setAttributeNodeNS$named = function($n, $o, newAttr){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _ElementWrappingImplementation$Dart.prototype.setAttributeNodeNS$member.call(this, newAttr);
}
;
_ElementWrappingImplementation$Dart.prototype.setAttributeNodeNS$getter = function setAttributeNodeNS$getter(){
  return $bind(_ElementWrappingImplementation$Dart.prototype.setAttributeNodeNS$named, this);
}
;
_ElementWrappingImplementation$Dart._setAttributeNodeNS$$member_ = function(receiver, newAttr){
  return native__ElementWrappingImplementation__setAttributeNodeNS(receiver, newAttr);
}
;
_ElementWrappingImplementation$Dart._setAttributeNodeNS$$named_ = function($n, $o, receiver, newAttr){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _ElementWrappingImplementation$Dart._setAttributeNodeNS$$member_(receiver, newAttr);
}
;
_ElementWrappingImplementation$Dart._setAttributeNodeNS$$getter_ = function _setAttributeNodeNS$$getter_(){
  return _ElementWrappingImplementation$Dart._setAttributeNodeNS$$named_;
}
;
_ElementWrappingImplementation$Dart.prototype.webkitMatchesSelector$member = function(selectors){
  return _ElementWrappingImplementation$Dart._webkitMatchesSelector$$member_(this, selectors);
}
;
_ElementWrappingImplementation$Dart.prototype.webkitMatchesSelector$named = function($n, $o, selectors){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _ElementWrappingImplementation$Dart.prototype.webkitMatchesSelector$member.call(this, selectors);
}
;
_ElementWrappingImplementation$Dart.prototype.webkitMatchesSelector$getter = function webkitMatchesSelector$getter(){
  return $bind(_ElementWrappingImplementation$Dart.prototype.webkitMatchesSelector$named, this);
}
;
_ElementWrappingImplementation$Dart._webkitMatchesSelector$$member_ = function(receiver, selectors){
  return native__ElementWrappingImplementation__webkitMatchesSelector(receiver, selectors);
}
;
_ElementWrappingImplementation$Dart._webkitMatchesSelector$$named_ = function($n, $o, receiver, selectors){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _ElementWrappingImplementation$Dart._webkitMatchesSelector$$member_(receiver, selectors);
}
;
_ElementWrappingImplementation$Dart._webkitMatchesSelector$$getter_ = function _webkitMatchesSelector$$getter_(){
  return _ElementWrappingImplementation$Dart._webkitMatchesSelector$$named_;
}
;
_ElementWrappingImplementation$Dart.prototype.typeName$named = function(){
  return this.typeName$getter().apply(this, arguments);
}
;
_ElementWrappingImplementation$Dart.prototype.typeName$getter = function(){
  return 'Element';
}
;
