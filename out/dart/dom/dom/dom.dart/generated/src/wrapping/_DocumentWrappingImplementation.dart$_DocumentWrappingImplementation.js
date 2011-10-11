function _DocumentWrappingImplementation$Dart(){
}

_DocumentWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('_DocumentWrappingImplementation$Dart'), _DocumentWrappingImplementation$Dart.$RTTimplements);
}
;
_DocumentWrappingImplementation$Dart.$RTTimplements = function(rtt){
  _DocumentWrappingImplementation$Dart.$addTo(rtt);
}
;
_DocumentWrappingImplementation$Dart.$addTo = function(target){
  var rtt = _DocumentWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  _NodeWrappingImplementation$Dart.$addTo(target);
  Document$Dart.$addTo(target);
}
;
_DocumentWrappingImplementation$Dart.prototype.$implements$_DocumentWrappingImplementation$Dart = 1;
_DocumentWrappingImplementation$Dart.prototype.$implements$Document$Dart = 1;
_DocumentWrappingImplementation$Dart.prototype.$implements$Node$Dart = 1;
_DocumentWrappingImplementation$Dart.prototype.$implements$EventTarget$Dart = 1;
_DocumentWrappingImplementation$Dart.prototype.$implements$NodeSelector$Dart = 1;
_DocumentWrappingImplementation$Dart.prototype.$implements$_NodeWrappingImplementation$Dart = 1;
_DocumentWrappingImplementation$Dart.prototype.$implements$DOMWrapperBase$Dart = 1;
_DocumentWrappingImplementation$Dart.prototype.$implements$DOMType$Dart = 1;
_DocumentWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(_DocumentWrappingImplementation$Dart, _NodeWrappingImplementation$Dart);
_DocumentWrappingImplementation$Dart.$Constructor = function(){
  _NodeWrappingImplementation$Dart.$Constructor.call(this);
}
;
_DocumentWrappingImplementation$Dart.$Initializer = function(){
  _NodeWrappingImplementation$Dart.$Initializer.call(this);
}
;
_DocumentWrappingImplementation$Dart._DocumentWrappingImplementation$$Factory = function(){
  var tmp$0 = new _DocumentWrappingImplementation$Dart;
  tmp$0.$typeInfo = _DocumentWrappingImplementation$Dart.$lookupRTT();
  _DocumentWrappingImplementation$Dart.$Initializer.call(tmp$0);
  _DocumentWrappingImplementation$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
_DocumentWrappingImplementation$Dart.create__DocumentWrappingImplementation$member = function(){
  return _DocumentWrappingImplementation$Dart._DocumentWrappingImplementation$$Factory();
}
;
_DocumentWrappingImplementation$Dart.create__DocumentWrappingImplementation$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _DocumentWrappingImplementation$Dart.create__DocumentWrappingImplementation$member();
}
;
function native__DocumentWrappingImplementation_create__DocumentWrappingImplementation(){
  return _DocumentWrappingImplementation$Dart.create__DocumentWrappingImplementation$member();
}

_DocumentWrappingImplementation$Dart.create__DocumentWrappingImplementation$getter = function create__DocumentWrappingImplementation$getter(){
  return _DocumentWrappingImplementation$Dart.create__DocumentWrappingImplementation$named;
}
;
_DocumentWrappingImplementation$Dart.prototype.URL$named = function(){
  return this.URL$getter().apply(this, arguments);
}
;
_DocumentWrappingImplementation$Dart.prototype.URL$getter = function(){
  return _DocumentWrappingImplementation$Dart._get__Document_URL$$member_(this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_URL$$member_ = function(_this){
  return native__DocumentWrappingImplementation__get__Document_URL(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_URL$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DocumentWrappingImplementation$Dart._get__Document_URL$$member_(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_URL$$getter_ = function _get__Document_URL$$getter_(){
  return _DocumentWrappingImplementation$Dart._get__Document_URL$$named_;
}
;
_DocumentWrappingImplementation$Dart.prototype.anchors$named = function(){
  return this.anchors$getter().apply(this, arguments);
}
;
_DocumentWrappingImplementation$Dart.prototype.anchors$getter = function(){
  return _DocumentWrappingImplementation$Dart._get__Document_anchors$$member_(this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_anchors$$member_ = function(_this){
  return native__DocumentWrappingImplementation__get__Document_anchors(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_anchors$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DocumentWrappingImplementation$Dart._get__Document_anchors$$member_(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_anchors$$getter_ = function _get__Document_anchors$$getter_(){
  return _DocumentWrappingImplementation$Dart._get__Document_anchors$$named_;
}
;
_DocumentWrappingImplementation$Dart.prototype.applets$named = function(){
  return this.applets$getter().apply(this, arguments);
}
;
_DocumentWrappingImplementation$Dart.prototype.applets$getter = function(){
  return _DocumentWrappingImplementation$Dart._get__Document_applets$$member_(this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_applets$$member_ = function(_this){
  return native__DocumentWrappingImplementation__get__Document_applets(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_applets$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DocumentWrappingImplementation$Dart._get__Document_applets$$member_(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_applets$$getter_ = function _get__Document_applets$$getter_(){
  return _DocumentWrappingImplementation$Dart._get__Document_applets$$named_;
}
;
_DocumentWrappingImplementation$Dart.prototype.body$named = function(){
  return this.body$getter().apply(this, arguments);
}
;
_DocumentWrappingImplementation$Dart.prototype.body$getter = function(){
  return _DocumentWrappingImplementation$Dart._get__Document_body$$member_(this);
}
;
_DocumentWrappingImplementation$Dart.prototype.body$setter = function(value){
  _DocumentWrappingImplementation$Dart._set__Document_body$$member_(this, value);
}
;
_DocumentWrappingImplementation$Dart._get__Document_body$$member_ = function(_this){
  return native__DocumentWrappingImplementation__get__Document_body(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_body$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DocumentWrappingImplementation$Dart._get__Document_body$$member_(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_body$$getter_ = function _get__Document_body$$getter_(){
  return _DocumentWrappingImplementation$Dart._get__Document_body$$named_;
}
;
_DocumentWrappingImplementation$Dart._set__Document_body$$member_ = function(_this, value){
  return native__DocumentWrappingImplementation__set__Document_body(_this, value);
}
;
_DocumentWrappingImplementation$Dart._set__Document_body$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DocumentWrappingImplementation$Dart._set__Document_body$$member_(_this, value);
}
;
_DocumentWrappingImplementation$Dart._set__Document_body$$getter_ = function _set__Document_body$$getter_(){
  return _DocumentWrappingImplementation$Dart._set__Document_body$$named_;
}
;
_DocumentWrappingImplementation$Dart.prototype.characterSet$named = function(){
  return this.characterSet$getter().apply(this, arguments);
}
;
_DocumentWrappingImplementation$Dart.prototype.characterSet$getter = function(){
  return _DocumentWrappingImplementation$Dart._get__Document_characterSet$$member_(this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_characterSet$$member_ = function(_this){
  return native__DocumentWrappingImplementation__get__Document_characterSet(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_characterSet$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DocumentWrappingImplementation$Dart._get__Document_characterSet$$member_(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_characterSet$$getter_ = function _get__Document_characterSet$$getter_(){
  return _DocumentWrappingImplementation$Dart._get__Document_characterSet$$named_;
}
;
_DocumentWrappingImplementation$Dart.prototype.charset$named = function(){
  return this.charset$getter().apply(this, arguments);
}
;
_DocumentWrappingImplementation$Dart.prototype.charset$getter = function(){
  return _DocumentWrappingImplementation$Dart._get__Document_charset$$member_(this);
}
;
_DocumentWrappingImplementation$Dart.prototype.charset$setter = function(value){
  _DocumentWrappingImplementation$Dart._set__Document_charset$$member_(this, value);
}
;
_DocumentWrappingImplementation$Dart._get__Document_charset$$member_ = function(_this){
  return native__DocumentWrappingImplementation__get__Document_charset(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_charset$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DocumentWrappingImplementation$Dart._get__Document_charset$$member_(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_charset$$getter_ = function _get__Document_charset$$getter_(){
  return _DocumentWrappingImplementation$Dart._get__Document_charset$$named_;
}
;
_DocumentWrappingImplementation$Dart._set__Document_charset$$member_ = function(_this, value){
  return native__DocumentWrappingImplementation__set__Document_charset(_this, value);
}
;
_DocumentWrappingImplementation$Dart._set__Document_charset$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DocumentWrappingImplementation$Dart._set__Document_charset$$member_(_this, value);
}
;
_DocumentWrappingImplementation$Dart._set__Document_charset$$getter_ = function _set__Document_charset$$getter_(){
  return _DocumentWrappingImplementation$Dart._set__Document_charset$$named_;
}
;
_DocumentWrappingImplementation$Dart.prototype.compatMode$named = function(){
  return this.compatMode$getter().apply(this, arguments);
}
;
_DocumentWrappingImplementation$Dart.prototype.compatMode$getter = function(){
  return _DocumentWrappingImplementation$Dart._get__Document_compatMode$$member_(this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_compatMode$$member_ = function(_this){
  return native__DocumentWrappingImplementation__get__Document_compatMode(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_compatMode$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DocumentWrappingImplementation$Dart._get__Document_compatMode$$member_(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_compatMode$$getter_ = function _get__Document_compatMode$$getter_(){
  return _DocumentWrappingImplementation$Dart._get__Document_compatMode$$named_;
}
;
_DocumentWrappingImplementation$Dart.prototype.cookie$named = function(){
  return this.cookie$getter().apply(this, arguments);
}
;
_DocumentWrappingImplementation$Dart.prototype.cookie$getter = function(){
  return _DocumentWrappingImplementation$Dart._get__Document_cookie$$member_(this);
}
;
_DocumentWrappingImplementation$Dart.prototype.cookie$setter = function(value){
  _DocumentWrappingImplementation$Dart._set__Document_cookie$$member_(this, value);
}
;
_DocumentWrappingImplementation$Dart._get__Document_cookie$$member_ = function(_this){
  return native__DocumentWrappingImplementation__get__Document_cookie(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_cookie$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DocumentWrappingImplementation$Dart._get__Document_cookie$$member_(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_cookie$$getter_ = function _get__Document_cookie$$getter_(){
  return _DocumentWrappingImplementation$Dart._get__Document_cookie$$named_;
}
;
_DocumentWrappingImplementation$Dart._set__Document_cookie$$member_ = function(_this, value){
  return native__DocumentWrappingImplementation__set__Document_cookie(_this, value);
}
;
_DocumentWrappingImplementation$Dart._set__Document_cookie$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DocumentWrappingImplementation$Dart._set__Document_cookie$$member_(_this, value);
}
;
_DocumentWrappingImplementation$Dart._set__Document_cookie$$getter_ = function _set__Document_cookie$$getter_(){
  return _DocumentWrappingImplementation$Dart._set__Document_cookie$$named_;
}
;
_DocumentWrappingImplementation$Dart.prototype.defaultCharset$named = function(){
  return this.defaultCharset$getter().apply(this, arguments);
}
;
_DocumentWrappingImplementation$Dart.prototype.defaultCharset$getter = function(){
  return _DocumentWrappingImplementation$Dart._get__Document_defaultCharset$$member_(this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_defaultCharset$$member_ = function(_this){
  return native__DocumentWrappingImplementation__get__Document_defaultCharset(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_defaultCharset$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DocumentWrappingImplementation$Dart._get__Document_defaultCharset$$member_(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_defaultCharset$$getter_ = function _get__Document_defaultCharset$$getter_(){
  return _DocumentWrappingImplementation$Dart._get__Document_defaultCharset$$named_;
}
;
_DocumentWrappingImplementation$Dart.prototype.defaultView$named = function(){
  return this.defaultView$getter().apply(this, arguments);
}
;
_DocumentWrappingImplementation$Dart.prototype.defaultView$getter = function(){
  return _DocumentWrappingImplementation$Dart._get__Document_defaultView$$member_(this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_defaultView$$member_ = function(_this){
  return native__DocumentWrappingImplementation__get__Document_defaultView(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_defaultView$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DocumentWrappingImplementation$Dart._get__Document_defaultView$$member_(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_defaultView$$getter_ = function _get__Document_defaultView$$getter_(){
  return _DocumentWrappingImplementation$Dart._get__Document_defaultView$$named_;
}
;
_DocumentWrappingImplementation$Dart.prototype.doctype$named = function(){
  return this.doctype$getter().apply(this, arguments);
}
;
_DocumentWrappingImplementation$Dart.prototype.doctype$getter = function(){
  return _DocumentWrappingImplementation$Dart._get__Document_doctype$$member_(this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_doctype$$member_ = function(_this){
  return native__DocumentWrappingImplementation__get__Document_doctype(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_doctype$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DocumentWrappingImplementation$Dart._get__Document_doctype$$member_(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_doctype$$getter_ = function _get__Document_doctype$$getter_(){
  return _DocumentWrappingImplementation$Dart._get__Document_doctype$$named_;
}
;
_DocumentWrappingImplementation$Dart.prototype.documentElement$named = function(){
  return this.documentElement$getter().apply(this, arguments);
}
;
_DocumentWrappingImplementation$Dart.prototype.documentElement$getter = function(){
  return _DocumentWrappingImplementation$Dart._get__Document_documentElement$$member_(this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_documentElement$$member_ = function(_this){
  return native__DocumentWrappingImplementation__get__Document_documentElement(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_documentElement$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DocumentWrappingImplementation$Dart._get__Document_documentElement$$member_(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_documentElement$$getter_ = function _get__Document_documentElement$$getter_(){
  return _DocumentWrappingImplementation$Dart._get__Document_documentElement$$named_;
}
;
_DocumentWrappingImplementation$Dart.prototype.documentURI$named = function(){
  return this.documentURI$getter().apply(this, arguments);
}
;
_DocumentWrappingImplementation$Dart.prototype.documentURI$getter = function(){
  return _DocumentWrappingImplementation$Dart._get__Document_documentURI$$member_(this);
}
;
_DocumentWrappingImplementation$Dart.prototype.documentURI$setter = function(value){
  _DocumentWrappingImplementation$Dart._set__Document_documentURI$$member_(this, value);
}
;
_DocumentWrappingImplementation$Dart._get__Document_documentURI$$member_ = function(_this){
  return native__DocumentWrappingImplementation__get__Document_documentURI(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_documentURI$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DocumentWrappingImplementation$Dart._get__Document_documentURI$$member_(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_documentURI$$getter_ = function _get__Document_documentURI$$getter_(){
  return _DocumentWrappingImplementation$Dart._get__Document_documentURI$$named_;
}
;
_DocumentWrappingImplementation$Dart._set__Document_documentURI$$member_ = function(_this, value){
  return native__DocumentWrappingImplementation__set__Document_documentURI(_this, value);
}
;
_DocumentWrappingImplementation$Dart._set__Document_documentURI$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DocumentWrappingImplementation$Dart._set__Document_documentURI$$member_(_this, value);
}
;
_DocumentWrappingImplementation$Dart._set__Document_documentURI$$getter_ = function _set__Document_documentURI$$getter_(){
  return _DocumentWrappingImplementation$Dart._set__Document_documentURI$$named_;
}
;
_DocumentWrappingImplementation$Dart.prototype.domain$named = function(){
  return this.domain$getter().apply(this, arguments);
}
;
_DocumentWrappingImplementation$Dart.prototype.domain$getter = function(){
  return _DocumentWrappingImplementation$Dart._get__Document_domain$$member_(this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_domain$$member_ = function(_this){
  return native__DocumentWrappingImplementation__get__Document_domain(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_domain$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DocumentWrappingImplementation$Dart._get__Document_domain$$member_(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_domain$$getter_ = function _get__Document_domain$$getter_(){
  return _DocumentWrappingImplementation$Dart._get__Document_domain$$named_;
}
;
_DocumentWrappingImplementation$Dart.prototype.forms$named = function(){
  return this.forms$getter().apply(this, arguments);
}
;
_DocumentWrappingImplementation$Dart.prototype.forms$getter = function(){
  return _DocumentWrappingImplementation$Dart._get__Document_forms$$member_(this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_forms$$member_ = function(_this){
  return native__DocumentWrappingImplementation__get__Document_forms(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_forms$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DocumentWrappingImplementation$Dart._get__Document_forms$$member_(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_forms$$getter_ = function _get__Document_forms$$getter_(){
  return _DocumentWrappingImplementation$Dart._get__Document_forms$$named_;
}
;
_DocumentWrappingImplementation$Dart.prototype.head$named = function(){
  return this.head$getter().apply(this, arguments);
}
;
_DocumentWrappingImplementation$Dart.prototype.head$getter = function(){
  return _DocumentWrappingImplementation$Dart._get__Document_head$$member_(this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_head$$member_ = function(_this){
  return native__DocumentWrappingImplementation__get__Document_head(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_head$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DocumentWrappingImplementation$Dart._get__Document_head$$member_(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_head$$getter_ = function _get__Document_head$$getter_(){
  return _DocumentWrappingImplementation$Dart._get__Document_head$$named_;
}
;
_DocumentWrappingImplementation$Dart.prototype.images$named = function(){
  return this.images$getter().apply(this, arguments);
}
;
_DocumentWrappingImplementation$Dart.prototype.images$getter = function(){
  return _DocumentWrappingImplementation$Dart._get__Document_images$$member_(this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_images$$member_ = function(_this){
  return native__DocumentWrappingImplementation__get__Document_images(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_images$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DocumentWrappingImplementation$Dart._get__Document_images$$member_(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_images$$getter_ = function _get__Document_images$$getter_(){
  return _DocumentWrappingImplementation$Dart._get__Document_images$$named_;
}
;
_DocumentWrappingImplementation$Dart.prototype.implementation$named = function(){
  return this.implementation$getter().apply(this, arguments);
}
;
_DocumentWrappingImplementation$Dart.prototype.implementation$getter = function(){
  return _DocumentWrappingImplementation$Dart._get__Document_implementation$$member_(this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_implementation$$member_ = function(_this){
  return native__DocumentWrappingImplementation__get__Document_implementation(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_implementation$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DocumentWrappingImplementation$Dart._get__Document_implementation$$member_(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_implementation$$getter_ = function _get__Document_implementation$$getter_(){
  return _DocumentWrappingImplementation$Dart._get__Document_implementation$$named_;
}
;
_DocumentWrappingImplementation$Dart.prototype.inputEncoding$named = function(){
  return this.inputEncoding$getter().apply(this, arguments);
}
;
_DocumentWrappingImplementation$Dart.prototype.inputEncoding$getter = function(){
  return _DocumentWrappingImplementation$Dart._get__Document_inputEncoding$$member_(this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_inputEncoding$$member_ = function(_this){
  return native__DocumentWrappingImplementation__get__Document_inputEncoding(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_inputEncoding$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DocumentWrappingImplementation$Dart._get__Document_inputEncoding$$member_(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_inputEncoding$$getter_ = function _get__Document_inputEncoding$$getter_(){
  return _DocumentWrappingImplementation$Dart._get__Document_inputEncoding$$named_;
}
;
_DocumentWrappingImplementation$Dart.prototype.lastModified$named = function(){
  return this.lastModified$getter().apply(this, arguments);
}
;
_DocumentWrappingImplementation$Dart.prototype.lastModified$getter = function(){
  return _DocumentWrappingImplementation$Dart._get__Document_lastModified$$member_(this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_lastModified$$member_ = function(_this){
  return native__DocumentWrappingImplementation__get__Document_lastModified(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_lastModified$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DocumentWrappingImplementation$Dart._get__Document_lastModified$$member_(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_lastModified$$getter_ = function _get__Document_lastModified$$getter_(){
  return _DocumentWrappingImplementation$Dart._get__Document_lastModified$$named_;
}
;
_DocumentWrappingImplementation$Dart.prototype.links$named = function(){
  return this.links$getter().apply(this, arguments);
}
;
_DocumentWrappingImplementation$Dart.prototype.links$getter = function(){
  return _DocumentWrappingImplementation$Dart._get__Document_links$$member_(this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_links$$member_ = function(_this){
  return native__DocumentWrappingImplementation__get__Document_links(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_links$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DocumentWrappingImplementation$Dart._get__Document_links$$member_(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_links$$getter_ = function _get__Document_links$$getter_(){
  return _DocumentWrappingImplementation$Dart._get__Document_links$$named_;
}
;
_DocumentWrappingImplementation$Dart.prototype.onabort$named = function(){
  return this.onabort$getter().apply(this, arguments);
}
;
_DocumentWrappingImplementation$Dart.prototype.onabort$getter = function(){
  return _DocumentWrappingImplementation$Dart._get__Document_onabort$$member_(this);
}
;
_DocumentWrappingImplementation$Dart.prototype.onabort$setter = function(value){
  _DocumentWrappingImplementation$Dart._set__Document_onabort$$member_(this, value);
}
;
_DocumentWrappingImplementation$Dart._get__Document_onabort$$member_ = function(_this){
  return native__DocumentWrappingImplementation__get__Document_onabort(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_onabort$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DocumentWrappingImplementation$Dart._get__Document_onabort$$member_(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_onabort$$getter_ = function _get__Document_onabort$$getter_(){
  return _DocumentWrappingImplementation$Dart._get__Document_onabort$$named_;
}
;
_DocumentWrappingImplementation$Dart._set__Document_onabort$$member_ = function(_this, value){
  return native__DocumentWrappingImplementation__set__Document_onabort(_this, value);
}
;
_DocumentWrappingImplementation$Dart._set__Document_onabort$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DocumentWrappingImplementation$Dart._set__Document_onabort$$member_(_this, value);
}
;
_DocumentWrappingImplementation$Dart._set__Document_onabort$$getter_ = function _set__Document_onabort$$getter_(){
  return _DocumentWrappingImplementation$Dart._set__Document_onabort$$named_;
}
;
_DocumentWrappingImplementation$Dart.prototype.onbeforecopy$named = function(){
  return this.onbeforecopy$getter().apply(this, arguments);
}
;
_DocumentWrappingImplementation$Dart.prototype.onbeforecopy$getter = function(){
  return _DocumentWrappingImplementation$Dart._get__Document_onbeforecopy$$member_(this);
}
;
_DocumentWrappingImplementation$Dart.prototype.onbeforecopy$setter = function(value){
  _DocumentWrappingImplementation$Dart._set__Document_onbeforecopy$$member_(this, value);
}
;
_DocumentWrappingImplementation$Dart._get__Document_onbeforecopy$$member_ = function(_this){
  return native__DocumentWrappingImplementation__get__Document_onbeforecopy(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_onbeforecopy$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DocumentWrappingImplementation$Dart._get__Document_onbeforecopy$$member_(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_onbeforecopy$$getter_ = function _get__Document_onbeforecopy$$getter_(){
  return _DocumentWrappingImplementation$Dart._get__Document_onbeforecopy$$named_;
}
;
_DocumentWrappingImplementation$Dart._set__Document_onbeforecopy$$member_ = function(_this, value){
  return native__DocumentWrappingImplementation__set__Document_onbeforecopy(_this, value);
}
;
_DocumentWrappingImplementation$Dart._set__Document_onbeforecopy$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DocumentWrappingImplementation$Dart._set__Document_onbeforecopy$$member_(_this, value);
}
;
_DocumentWrappingImplementation$Dart._set__Document_onbeforecopy$$getter_ = function _set__Document_onbeforecopy$$getter_(){
  return _DocumentWrappingImplementation$Dart._set__Document_onbeforecopy$$named_;
}
;
_DocumentWrappingImplementation$Dart.prototype.onbeforecut$named = function(){
  return this.onbeforecut$getter().apply(this, arguments);
}
;
_DocumentWrappingImplementation$Dart.prototype.onbeforecut$getter = function(){
  return _DocumentWrappingImplementation$Dart._get__Document_onbeforecut$$member_(this);
}
;
_DocumentWrappingImplementation$Dart.prototype.onbeforecut$setter = function(value){
  _DocumentWrappingImplementation$Dart._set__Document_onbeforecut$$member_(this, value);
}
;
_DocumentWrappingImplementation$Dart._get__Document_onbeforecut$$member_ = function(_this){
  return native__DocumentWrappingImplementation__get__Document_onbeforecut(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_onbeforecut$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DocumentWrappingImplementation$Dart._get__Document_onbeforecut$$member_(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_onbeforecut$$getter_ = function _get__Document_onbeforecut$$getter_(){
  return _DocumentWrappingImplementation$Dart._get__Document_onbeforecut$$named_;
}
;
_DocumentWrappingImplementation$Dart._set__Document_onbeforecut$$member_ = function(_this, value){
  return native__DocumentWrappingImplementation__set__Document_onbeforecut(_this, value);
}
;
_DocumentWrappingImplementation$Dart._set__Document_onbeforecut$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DocumentWrappingImplementation$Dart._set__Document_onbeforecut$$member_(_this, value);
}
;
_DocumentWrappingImplementation$Dart._set__Document_onbeforecut$$getter_ = function _set__Document_onbeforecut$$getter_(){
  return _DocumentWrappingImplementation$Dart._set__Document_onbeforecut$$named_;
}
;
_DocumentWrappingImplementation$Dart.prototype.onbeforepaste$named = function(){
  return this.onbeforepaste$getter().apply(this, arguments);
}
;
_DocumentWrappingImplementation$Dart.prototype.onbeforepaste$getter = function(){
  return _DocumentWrappingImplementation$Dart._get__Document_onbeforepaste$$member_(this);
}
;
_DocumentWrappingImplementation$Dart.prototype.onbeforepaste$setter = function(value){
  _DocumentWrappingImplementation$Dart._set__Document_onbeforepaste$$member_(this, value);
}
;
_DocumentWrappingImplementation$Dart._get__Document_onbeforepaste$$member_ = function(_this){
  return native__DocumentWrappingImplementation__get__Document_onbeforepaste(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_onbeforepaste$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DocumentWrappingImplementation$Dart._get__Document_onbeforepaste$$member_(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_onbeforepaste$$getter_ = function _get__Document_onbeforepaste$$getter_(){
  return _DocumentWrappingImplementation$Dart._get__Document_onbeforepaste$$named_;
}
;
_DocumentWrappingImplementation$Dart._set__Document_onbeforepaste$$member_ = function(_this, value){
  return native__DocumentWrappingImplementation__set__Document_onbeforepaste(_this, value);
}
;
_DocumentWrappingImplementation$Dart._set__Document_onbeforepaste$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DocumentWrappingImplementation$Dart._set__Document_onbeforepaste$$member_(_this, value);
}
;
_DocumentWrappingImplementation$Dart._set__Document_onbeforepaste$$getter_ = function _set__Document_onbeforepaste$$getter_(){
  return _DocumentWrappingImplementation$Dart._set__Document_onbeforepaste$$named_;
}
;
_DocumentWrappingImplementation$Dart.prototype.onblur$named = function(){
  return this.onblur$getter().apply(this, arguments);
}
;
_DocumentWrappingImplementation$Dart.prototype.onblur$getter = function(){
  return _DocumentWrappingImplementation$Dart._get__Document_onblur$$member_(this);
}
;
_DocumentWrappingImplementation$Dart.prototype.onblur$setter = function(value){
  _DocumentWrappingImplementation$Dart._set__Document_onblur$$member_(this, value);
}
;
_DocumentWrappingImplementation$Dart._get__Document_onblur$$member_ = function(_this){
  return native__DocumentWrappingImplementation__get__Document_onblur(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_onblur$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DocumentWrappingImplementation$Dart._get__Document_onblur$$member_(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_onblur$$getter_ = function _get__Document_onblur$$getter_(){
  return _DocumentWrappingImplementation$Dart._get__Document_onblur$$named_;
}
;
_DocumentWrappingImplementation$Dart._set__Document_onblur$$member_ = function(_this, value){
  return native__DocumentWrappingImplementation__set__Document_onblur(_this, value);
}
;
_DocumentWrappingImplementation$Dart._set__Document_onblur$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DocumentWrappingImplementation$Dart._set__Document_onblur$$member_(_this, value);
}
;
_DocumentWrappingImplementation$Dart._set__Document_onblur$$getter_ = function _set__Document_onblur$$getter_(){
  return _DocumentWrappingImplementation$Dart._set__Document_onblur$$named_;
}
;
_DocumentWrappingImplementation$Dart.prototype.onchange$named = function(){
  return this.onchange$getter().apply(this, arguments);
}
;
_DocumentWrappingImplementation$Dart.prototype.onchange$getter = function(){
  return _DocumentWrappingImplementation$Dart._get__Document_onchange$$member_(this);
}
;
_DocumentWrappingImplementation$Dart.prototype.onchange$setter = function(value){
  _DocumentWrappingImplementation$Dart._set__Document_onchange$$member_(this, value);
}
;
_DocumentWrappingImplementation$Dart._get__Document_onchange$$member_ = function(_this){
  return native__DocumentWrappingImplementation__get__Document_onchange(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_onchange$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DocumentWrappingImplementation$Dart._get__Document_onchange$$member_(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_onchange$$getter_ = function _get__Document_onchange$$getter_(){
  return _DocumentWrappingImplementation$Dart._get__Document_onchange$$named_;
}
;
_DocumentWrappingImplementation$Dart._set__Document_onchange$$member_ = function(_this, value){
  return native__DocumentWrappingImplementation__set__Document_onchange(_this, value);
}
;
_DocumentWrappingImplementation$Dart._set__Document_onchange$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DocumentWrappingImplementation$Dart._set__Document_onchange$$member_(_this, value);
}
;
_DocumentWrappingImplementation$Dart._set__Document_onchange$$getter_ = function _set__Document_onchange$$getter_(){
  return _DocumentWrappingImplementation$Dart._set__Document_onchange$$named_;
}
;
_DocumentWrappingImplementation$Dart.prototype.onclick$named = function(){
  return this.onclick$getter().apply(this, arguments);
}
;
_DocumentWrappingImplementation$Dart.prototype.onclick$getter = function(){
  return _DocumentWrappingImplementation$Dart._get__Document_onclick$$member_(this);
}
;
_DocumentWrappingImplementation$Dart.prototype.onclick$setter = function(value){
  _DocumentWrappingImplementation$Dart._set__Document_onclick$$member_(this, value);
}
;
_DocumentWrappingImplementation$Dart._get__Document_onclick$$member_ = function(_this){
  return native__DocumentWrappingImplementation__get__Document_onclick(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_onclick$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DocumentWrappingImplementation$Dart._get__Document_onclick$$member_(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_onclick$$getter_ = function _get__Document_onclick$$getter_(){
  return _DocumentWrappingImplementation$Dart._get__Document_onclick$$named_;
}
;
_DocumentWrappingImplementation$Dart._set__Document_onclick$$member_ = function(_this, value){
  return native__DocumentWrappingImplementation__set__Document_onclick(_this, value);
}
;
_DocumentWrappingImplementation$Dart._set__Document_onclick$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DocumentWrappingImplementation$Dart._set__Document_onclick$$member_(_this, value);
}
;
_DocumentWrappingImplementation$Dart._set__Document_onclick$$getter_ = function _set__Document_onclick$$getter_(){
  return _DocumentWrappingImplementation$Dart._set__Document_onclick$$named_;
}
;
_DocumentWrappingImplementation$Dart.prototype.oncontextmenu$named = function(){
  return this.oncontextmenu$getter().apply(this, arguments);
}
;
_DocumentWrappingImplementation$Dart.prototype.oncontextmenu$getter = function(){
  return _DocumentWrappingImplementation$Dart._get__Document_oncontextmenu$$member_(this);
}
;
_DocumentWrappingImplementation$Dart.prototype.oncontextmenu$setter = function(value){
  _DocumentWrappingImplementation$Dart._set__Document_oncontextmenu$$member_(this, value);
}
;
_DocumentWrappingImplementation$Dart._get__Document_oncontextmenu$$member_ = function(_this){
  return native__DocumentWrappingImplementation__get__Document_oncontextmenu(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_oncontextmenu$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DocumentWrappingImplementation$Dart._get__Document_oncontextmenu$$member_(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_oncontextmenu$$getter_ = function _get__Document_oncontextmenu$$getter_(){
  return _DocumentWrappingImplementation$Dart._get__Document_oncontextmenu$$named_;
}
;
_DocumentWrappingImplementation$Dart._set__Document_oncontextmenu$$member_ = function(_this, value){
  return native__DocumentWrappingImplementation__set__Document_oncontextmenu(_this, value);
}
;
_DocumentWrappingImplementation$Dart._set__Document_oncontextmenu$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DocumentWrappingImplementation$Dart._set__Document_oncontextmenu$$member_(_this, value);
}
;
_DocumentWrappingImplementation$Dart._set__Document_oncontextmenu$$getter_ = function _set__Document_oncontextmenu$$getter_(){
  return _DocumentWrappingImplementation$Dart._set__Document_oncontextmenu$$named_;
}
;
_DocumentWrappingImplementation$Dart.prototype.oncopy$named = function(){
  return this.oncopy$getter().apply(this, arguments);
}
;
_DocumentWrappingImplementation$Dart.prototype.oncopy$getter = function(){
  return _DocumentWrappingImplementation$Dart._get__Document_oncopy$$member_(this);
}
;
_DocumentWrappingImplementation$Dart.prototype.oncopy$setter = function(value){
  _DocumentWrappingImplementation$Dart._set__Document_oncopy$$member_(this, value);
}
;
_DocumentWrappingImplementation$Dart._get__Document_oncopy$$member_ = function(_this){
  return native__DocumentWrappingImplementation__get__Document_oncopy(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_oncopy$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DocumentWrappingImplementation$Dart._get__Document_oncopy$$member_(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_oncopy$$getter_ = function _get__Document_oncopy$$getter_(){
  return _DocumentWrappingImplementation$Dart._get__Document_oncopy$$named_;
}
;
_DocumentWrappingImplementation$Dart._set__Document_oncopy$$member_ = function(_this, value){
  return native__DocumentWrappingImplementation__set__Document_oncopy(_this, value);
}
;
_DocumentWrappingImplementation$Dart._set__Document_oncopy$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DocumentWrappingImplementation$Dart._set__Document_oncopy$$member_(_this, value);
}
;
_DocumentWrappingImplementation$Dart._set__Document_oncopy$$getter_ = function _set__Document_oncopy$$getter_(){
  return _DocumentWrappingImplementation$Dart._set__Document_oncopy$$named_;
}
;
_DocumentWrappingImplementation$Dart.prototype.oncut$named = function(){
  return this.oncut$getter().apply(this, arguments);
}
;
_DocumentWrappingImplementation$Dart.prototype.oncut$getter = function(){
  return _DocumentWrappingImplementation$Dart._get__Document_oncut$$member_(this);
}
;
_DocumentWrappingImplementation$Dart.prototype.oncut$setter = function(value){
  _DocumentWrappingImplementation$Dart._set__Document_oncut$$member_(this, value);
}
;
_DocumentWrappingImplementation$Dart._get__Document_oncut$$member_ = function(_this){
  return native__DocumentWrappingImplementation__get__Document_oncut(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_oncut$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DocumentWrappingImplementation$Dart._get__Document_oncut$$member_(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_oncut$$getter_ = function _get__Document_oncut$$getter_(){
  return _DocumentWrappingImplementation$Dart._get__Document_oncut$$named_;
}
;
_DocumentWrappingImplementation$Dart._set__Document_oncut$$member_ = function(_this, value){
  return native__DocumentWrappingImplementation__set__Document_oncut(_this, value);
}
;
_DocumentWrappingImplementation$Dart._set__Document_oncut$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DocumentWrappingImplementation$Dart._set__Document_oncut$$member_(_this, value);
}
;
_DocumentWrappingImplementation$Dart._set__Document_oncut$$getter_ = function _set__Document_oncut$$getter_(){
  return _DocumentWrappingImplementation$Dart._set__Document_oncut$$named_;
}
;
_DocumentWrappingImplementation$Dart.prototype.ondblclick$named = function(){
  return this.ondblclick$getter().apply(this, arguments);
}
;
_DocumentWrappingImplementation$Dart.prototype.ondblclick$getter = function(){
  return _DocumentWrappingImplementation$Dart._get__Document_ondblclick$$member_(this);
}
;
_DocumentWrappingImplementation$Dart.prototype.ondblclick$setter = function(value){
  _DocumentWrappingImplementation$Dart._set__Document_ondblclick$$member_(this, value);
}
;
_DocumentWrappingImplementation$Dart._get__Document_ondblclick$$member_ = function(_this){
  return native__DocumentWrappingImplementation__get__Document_ondblclick(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_ondblclick$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DocumentWrappingImplementation$Dart._get__Document_ondblclick$$member_(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_ondblclick$$getter_ = function _get__Document_ondblclick$$getter_(){
  return _DocumentWrappingImplementation$Dart._get__Document_ondblclick$$named_;
}
;
_DocumentWrappingImplementation$Dart._set__Document_ondblclick$$member_ = function(_this, value){
  return native__DocumentWrappingImplementation__set__Document_ondblclick(_this, value);
}
;
_DocumentWrappingImplementation$Dart._set__Document_ondblclick$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DocumentWrappingImplementation$Dart._set__Document_ondblclick$$member_(_this, value);
}
;
_DocumentWrappingImplementation$Dart._set__Document_ondblclick$$getter_ = function _set__Document_ondblclick$$getter_(){
  return _DocumentWrappingImplementation$Dart._set__Document_ondblclick$$named_;
}
;
_DocumentWrappingImplementation$Dart.prototype.ondrag$named = function(){
  return this.ondrag$getter().apply(this, arguments);
}
;
_DocumentWrappingImplementation$Dart.prototype.ondrag$getter = function(){
  return _DocumentWrappingImplementation$Dart._get__Document_ondrag$$member_(this);
}
;
_DocumentWrappingImplementation$Dart.prototype.ondrag$setter = function(value){
  _DocumentWrappingImplementation$Dart._set__Document_ondrag$$member_(this, value);
}
;
_DocumentWrappingImplementation$Dart._get__Document_ondrag$$member_ = function(_this){
  return native__DocumentWrappingImplementation__get__Document_ondrag(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_ondrag$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DocumentWrappingImplementation$Dart._get__Document_ondrag$$member_(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_ondrag$$getter_ = function _get__Document_ondrag$$getter_(){
  return _DocumentWrappingImplementation$Dart._get__Document_ondrag$$named_;
}
;
_DocumentWrappingImplementation$Dart._set__Document_ondrag$$member_ = function(_this, value){
  return native__DocumentWrappingImplementation__set__Document_ondrag(_this, value);
}
;
_DocumentWrappingImplementation$Dart._set__Document_ondrag$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DocumentWrappingImplementation$Dart._set__Document_ondrag$$member_(_this, value);
}
;
_DocumentWrappingImplementation$Dart._set__Document_ondrag$$getter_ = function _set__Document_ondrag$$getter_(){
  return _DocumentWrappingImplementation$Dart._set__Document_ondrag$$named_;
}
;
_DocumentWrappingImplementation$Dart.prototype.ondragend$named = function(){
  return this.ondragend$getter().apply(this, arguments);
}
;
_DocumentWrappingImplementation$Dart.prototype.ondragend$getter = function(){
  return _DocumentWrappingImplementation$Dart._get__Document_ondragend$$member_(this);
}
;
_DocumentWrappingImplementation$Dart.prototype.ondragend$setter = function(value){
  _DocumentWrappingImplementation$Dart._set__Document_ondragend$$member_(this, value);
}
;
_DocumentWrappingImplementation$Dart._get__Document_ondragend$$member_ = function(_this){
  return native__DocumentWrappingImplementation__get__Document_ondragend(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_ondragend$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DocumentWrappingImplementation$Dart._get__Document_ondragend$$member_(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_ondragend$$getter_ = function _get__Document_ondragend$$getter_(){
  return _DocumentWrappingImplementation$Dart._get__Document_ondragend$$named_;
}
;
_DocumentWrappingImplementation$Dart._set__Document_ondragend$$member_ = function(_this, value){
  return native__DocumentWrappingImplementation__set__Document_ondragend(_this, value);
}
;
_DocumentWrappingImplementation$Dart._set__Document_ondragend$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DocumentWrappingImplementation$Dart._set__Document_ondragend$$member_(_this, value);
}
;
_DocumentWrappingImplementation$Dart._set__Document_ondragend$$getter_ = function _set__Document_ondragend$$getter_(){
  return _DocumentWrappingImplementation$Dart._set__Document_ondragend$$named_;
}
;
_DocumentWrappingImplementation$Dart.prototype.ondragenter$named = function(){
  return this.ondragenter$getter().apply(this, arguments);
}
;
_DocumentWrappingImplementation$Dart.prototype.ondragenter$getter = function(){
  return _DocumentWrappingImplementation$Dart._get__Document_ondragenter$$member_(this);
}
;
_DocumentWrappingImplementation$Dart.prototype.ondragenter$setter = function(value){
  _DocumentWrappingImplementation$Dart._set__Document_ondragenter$$member_(this, value);
}
;
_DocumentWrappingImplementation$Dart._get__Document_ondragenter$$member_ = function(_this){
  return native__DocumentWrappingImplementation__get__Document_ondragenter(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_ondragenter$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DocumentWrappingImplementation$Dart._get__Document_ondragenter$$member_(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_ondragenter$$getter_ = function _get__Document_ondragenter$$getter_(){
  return _DocumentWrappingImplementation$Dart._get__Document_ondragenter$$named_;
}
;
_DocumentWrappingImplementation$Dart._set__Document_ondragenter$$member_ = function(_this, value){
  return native__DocumentWrappingImplementation__set__Document_ondragenter(_this, value);
}
;
_DocumentWrappingImplementation$Dart._set__Document_ondragenter$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DocumentWrappingImplementation$Dart._set__Document_ondragenter$$member_(_this, value);
}
;
_DocumentWrappingImplementation$Dart._set__Document_ondragenter$$getter_ = function _set__Document_ondragenter$$getter_(){
  return _DocumentWrappingImplementation$Dart._set__Document_ondragenter$$named_;
}
;
_DocumentWrappingImplementation$Dart.prototype.ondragleave$named = function(){
  return this.ondragleave$getter().apply(this, arguments);
}
;
_DocumentWrappingImplementation$Dart.prototype.ondragleave$getter = function(){
  return _DocumentWrappingImplementation$Dart._get__Document_ondragleave$$member_(this);
}
;
_DocumentWrappingImplementation$Dart.prototype.ondragleave$setter = function(value){
  _DocumentWrappingImplementation$Dart._set__Document_ondragleave$$member_(this, value);
}
;
_DocumentWrappingImplementation$Dart._get__Document_ondragleave$$member_ = function(_this){
  return native__DocumentWrappingImplementation__get__Document_ondragleave(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_ondragleave$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DocumentWrappingImplementation$Dart._get__Document_ondragleave$$member_(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_ondragleave$$getter_ = function _get__Document_ondragleave$$getter_(){
  return _DocumentWrappingImplementation$Dart._get__Document_ondragleave$$named_;
}
;
_DocumentWrappingImplementation$Dart._set__Document_ondragleave$$member_ = function(_this, value){
  return native__DocumentWrappingImplementation__set__Document_ondragleave(_this, value);
}
;
_DocumentWrappingImplementation$Dart._set__Document_ondragleave$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DocumentWrappingImplementation$Dart._set__Document_ondragleave$$member_(_this, value);
}
;
_DocumentWrappingImplementation$Dart._set__Document_ondragleave$$getter_ = function _set__Document_ondragleave$$getter_(){
  return _DocumentWrappingImplementation$Dart._set__Document_ondragleave$$named_;
}
;
_DocumentWrappingImplementation$Dart.prototype.ondragover$named = function(){
  return this.ondragover$getter().apply(this, arguments);
}
;
_DocumentWrappingImplementation$Dart.prototype.ondragover$getter = function(){
  return _DocumentWrappingImplementation$Dart._get__Document_ondragover$$member_(this);
}
;
_DocumentWrappingImplementation$Dart.prototype.ondragover$setter = function(value){
  _DocumentWrappingImplementation$Dart._set__Document_ondragover$$member_(this, value);
}
;
_DocumentWrappingImplementation$Dart._get__Document_ondragover$$member_ = function(_this){
  return native__DocumentWrappingImplementation__get__Document_ondragover(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_ondragover$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DocumentWrappingImplementation$Dart._get__Document_ondragover$$member_(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_ondragover$$getter_ = function _get__Document_ondragover$$getter_(){
  return _DocumentWrappingImplementation$Dart._get__Document_ondragover$$named_;
}
;
_DocumentWrappingImplementation$Dart._set__Document_ondragover$$member_ = function(_this, value){
  return native__DocumentWrappingImplementation__set__Document_ondragover(_this, value);
}
;
_DocumentWrappingImplementation$Dart._set__Document_ondragover$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DocumentWrappingImplementation$Dart._set__Document_ondragover$$member_(_this, value);
}
;
_DocumentWrappingImplementation$Dart._set__Document_ondragover$$getter_ = function _set__Document_ondragover$$getter_(){
  return _DocumentWrappingImplementation$Dart._set__Document_ondragover$$named_;
}
;
_DocumentWrappingImplementation$Dart.prototype.ondragstart$named = function(){
  return this.ondragstart$getter().apply(this, arguments);
}
;
_DocumentWrappingImplementation$Dart.prototype.ondragstart$getter = function(){
  return _DocumentWrappingImplementation$Dart._get__Document_ondragstart$$member_(this);
}
;
_DocumentWrappingImplementation$Dart.prototype.ondragstart$setter = function(value){
  _DocumentWrappingImplementation$Dart._set__Document_ondragstart$$member_(this, value);
}
;
_DocumentWrappingImplementation$Dart._get__Document_ondragstart$$member_ = function(_this){
  return native__DocumentWrappingImplementation__get__Document_ondragstart(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_ondragstart$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DocumentWrappingImplementation$Dart._get__Document_ondragstart$$member_(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_ondragstart$$getter_ = function _get__Document_ondragstart$$getter_(){
  return _DocumentWrappingImplementation$Dart._get__Document_ondragstart$$named_;
}
;
_DocumentWrappingImplementation$Dart._set__Document_ondragstart$$member_ = function(_this, value){
  return native__DocumentWrappingImplementation__set__Document_ondragstart(_this, value);
}
;
_DocumentWrappingImplementation$Dart._set__Document_ondragstart$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DocumentWrappingImplementation$Dart._set__Document_ondragstart$$member_(_this, value);
}
;
_DocumentWrappingImplementation$Dart._set__Document_ondragstart$$getter_ = function _set__Document_ondragstart$$getter_(){
  return _DocumentWrappingImplementation$Dart._set__Document_ondragstart$$named_;
}
;
_DocumentWrappingImplementation$Dart.prototype.ondrop$named = function(){
  return this.ondrop$getter().apply(this, arguments);
}
;
_DocumentWrappingImplementation$Dart.prototype.ondrop$getter = function(){
  return _DocumentWrappingImplementation$Dart._get__Document_ondrop$$member_(this);
}
;
_DocumentWrappingImplementation$Dart.prototype.ondrop$setter = function(value){
  _DocumentWrappingImplementation$Dart._set__Document_ondrop$$member_(this, value);
}
;
_DocumentWrappingImplementation$Dart._get__Document_ondrop$$member_ = function(_this){
  return native__DocumentWrappingImplementation__get__Document_ondrop(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_ondrop$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DocumentWrappingImplementation$Dart._get__Document_ondrop$$member_(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_ondrop$$getter_ = function _get__Document_ondrop$$getter_(){
  return _DocumentWrappingImplementation$Dart._get__Document_ondrop$$named_;
}
;
_DocumentWrappingImplementation$Dart._set__Document_ondrop$$member_ = function(_this, value){
  return native__DocumentWrappingImplementation__set__Document_ondrop(_this, value);
}
;
_DocumentWrappingImplementation$Dart._set__Document_ondrop$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DocumentWrappingImplementation$Dart._set__Document_ondrop$$member_(_this, value);
}
;
_DocumentWrappingImplementation$Dart._set__Document_ondrop$$getter_ = function _set__Document_ondrop$$getter_(){
  return _DocumentWrappingImplementation$Dart._set__Document_ondrop$$named_;
}
;
_DocumentWrappingImplementation$Dart.prototype.onerror$named = function(){
  return this.onerror$getter().apply(this, arguments);
}
;
_DocumentWrappingImplementation$Dart.prototype.onerror$getter = function(){
  return _DocumentWrappingImplementation$Dart._get__Document_onerror$$member_(this);
}
;
_DocumentWrappingImplementation$Dart.prototype.onerror$setter = function(value){
  _DocumentWrappingImplementation$Dart._set__Document_onerror$$member_(this, value);
}
;
_DocumentWrappingImplementation$Dart._get__Document_onerror$$member_ = function(_this){
  return native__DocumentWrappingImplementation__get__Document_onerror(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_onerror$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DocumentWrappingImplementation$Dart._get__Document_onerror$$member_(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_onerror$$getter_ = function _get__Document_onerror$$getter_(){
  return _DocumentWrappingImplementation$Dart._get__Document_onerror$$named_;
}
;
_DocumentWrappingImplementation$Dart._set__Document_onerror$$member_ = function(_this, value){
  return native__DocumentWrappingImplementation__set__Document_onerror(_this, value);
}
;
_DocumentWrappingImplementation$Dart._set__Document_onerror$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DocumentWrappingImplementation$Dart._set__Document_onerror$$member_(_this, value);
}
;
_DocumentWrappingImplementation$Dart._set__Document_onerror$$getter_ = function _set__Document_onerror$$getter_(){
  return _DocumentWrappingImplementation$Dart._set__Document_onerror$$named_;
}
;
_DocumentWrappingImplementation$Dart.prototype.onfocus$named = function(){
  return this.onfocus$getter().apply(this, arguments);
}
;
_DocumentWrappingImplementation$Dart.prototype.onfocus$getter = function(){
  return _DocumentWrappingImplementation$Dart._get__Document_onfocus$$member_(this);
}
;
_DocumentWrappingImplementation$Dart.prototype.onfocus$setter = function(value){
  _DocumentWrappingImplementation$Dart._set__Document_onfocus$$member_(this, value);
}
;
_DocumentWrappingImplementation$Dart._get__Document_onfocus$$member_ = function(_this){
  return native__DocumentWrappingImplementation__get__Document_onfocus(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_onfocus$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DocumentWrappingImplementation$Dart._get__Document_onfocus$$member_(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_onfocus$$getter_ = function _get__Document_onfocus$$getter_(){
  return _DocumentWrappingImplementation$Dart._get__Document_onfocus$$named_;
}
;
_DocumentWrappingImplementation$Dart._set__Document_onfocus$$member_ = function(_this, value){
  return native__DocumentWrappingImplementation__set__Document_onfocus(_this, value);
}
;
_DocumentWrappingImplementation$Dart._set__Document_onfocus$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DocumentWrappingImplementation$Dart._set__Document_onfocus$$member_(_this, value);
}
;
_DocumentWrappingImplementation$Dart._set__Document_onfocus$$getter_ = function _set__Document_onfocus$$getter_(){
  return _DocumentWrappingImplementation$Dart._set__Document_onfocus$$named_;
}
;
_DocumentWrappingImplementation$Dart.prototype.oninput$named = function(){
  return this.oninput$getter().apply(this, arguments);
}
;
_DocumentWrappingImplementation$Dart.prototype.oninput$getter = function(){
  return _DocumentWrappingImplementation$Dart._get__Document_oninput$$member_(this);
}
;
_DocumentWrappingImplementation$Dart.prototype.oninput$setter = function(value){
  _DocumentWrappingImplementation$Dart._set__Document_oninput$$member_(this, value);
}
;
_DocumentWrappingImplementation$Dart._get__Document_oninput$$member_ = function(_this){
  return native__DocumentWrappingImplementation__get__Document_oninput(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_oninput$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DocumentWrappingImplementation$Dart._get__Document_oninput$$member_(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_oninput$$getter_ = function _get__Document_oninput$$getter_(){
  return _DocumentWrappingImplementation$Dart._get__Document_oninput$$named_;
}
;
_DocumentWrappingImplementation$Dart._set__Document_oninput$$member_ = function(_this, value){
  return native__DocumentWrappingImplementation__set__Document_oninput(_this, value);
}
;
_DocumentWrappingImplementation$Dart._set__Document_oninput$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DocumentWrappingImplementation$Dart._set__Document_oninput$$member_(_this, value);
}
;
_DocumentWrappingImplementation$Dart._set__Document_oninput$$getter_ = function _set__Document_oninput$$getter_(){
  return _DocumentWrappingImplementation$Dart._set__Document_oninput$$named_;
}
;
_DocumentWrappingImplementation$Dart.prototype.oninvalid$named = function(){
  return this.oninvalid$getter().apply(this, arguments);
}
;
_DocumentWrappingImplementation$Dart.prototype.oninvalid$getter = function(){
  return _DocumentWrappingImplementation$Dart._get__Document_oninvalid$$member_(this);
}
;
_DocumentWrappingImplementation$Dart.prototype.oninvalid$setter = function(value){
  _DocumentWrappingImplementation$Dart._set__Document_oninvalid$$member_(this, value);
}
;
_DocumentWrappingImplementation$Dart._get__Document_oninvalid$$member_ = function(_this){
  return native__DocumentWrappingImplementation__get__Document_oninvalid(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_oninvalid$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DocumentWrappingImplementation$Dart._get__Document_oninvalid$$member_(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_oninvalid$$getter_ = function _get__Document_oninvalid$$getter_(){
  return _DocumentWrappingImplementation$Dart._get__Document_oninvalid$$named_;
}
;
_DocumentWrappingImplementation$Dart._set__Document_oninvalid$$member_ = function(_this, value){
  return native__DocumentWrappingImplementation__set__Document_oninvalid(_this, value);
}
;
_DocumentWrappingImplementation$Dart._set__Document_oninvalid$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DocumentWrappingImplementation$Dart._set__Document_oninvalid$$member_(_this, value);
}
;
_DocumentWrappingImplementation$Dart._set__Document_oninvalid$$getter_ = function _set__Document_oninvalid$$getter_(){
  return _DocumentWrappingImplementation$Dart._set__Document_oninvalid$$named_;
}
;
_DocumentWrappingImplementation$Dart.prototype.onkeydown$named = function(){
  return this.onkeydown$getter().apply(this, arguments);
}
;
_DocumentWrappingImplementation$Dart.prototype.onkeydown$getter = function(){
  return _DocumentWrappingImplementation$Dart._get__Document_onkeydown$$member_(this);
}
;
_DocumentWrappingImplementation$Dart.prototype.onkeydown$setter = function(value){
  _DocumentWrappingImplementation$Dart._set__Document_onkeydown$$member_(this, value);
}
;
_DocumentWrappingImplementation$Dart._get__Document_onkeydown$$member_ = function(_this){
  return native__DocumentWrappingImplementation__get__Document_onkeydown(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_onkeydown$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DocumentWrappingImplementation$Dart._get__Document_onkeydown$$member_(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_onkeydown$$getter_ = function _get__Document_onkeydown$$getter_(){
  return _DocumentWrappingImplementation$Dart._get__Document_onkeydown$$named_;
}
;
_DocumentWrappingImplementation$Dart._set__Document_onkeydown$$member_ = function(_this, value){
  return native__DocumentWrappingImplementation__set__Document_onkeydown(_this, value);
}
;
_DocumentWrappingImplementation$Dart._set__Document_onkeydown$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DocumentWrappingImplementation$Dart._set__Document_onkeydown$$member_(_this, value);
}
;
_DocumentWrappingImplementation$Dart._set__Document_onkeydown$$getter_ = function _set__Document_onkeydown$$getter_(){
  return _DocumentWrappingImplementation$Dart._set__Document_onkeydown$$named_;
}
;
_DocumentWrappingImplementation$Dart.prototype.onkeypress$named = function(){
  return this.onkeypress$getter().apply(this, arguments);
}
;
_DocumentWrappingImplementation$Dart.prototype.onkeypress$getter = function(){
  return _DocumentWrappingImplementation$Dart._get__Document_onkeypress$$member_(this);
}
;
_DocumentWrappingImplementation$Dart.prototype.onkeypress$setter = function(value){
  _DocumentWrappingImplementation$Dart._set__Document_onkeypress$$member_(this, value);
}
;
_DocumentWrappingImplementation$Dart._get__Document_onkeypress$$member_ = function(_this){
  return native__DocumentWrappingImplementation__get__Document_onkeypress(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_onkeypress$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DocumentWrappingImplementation$Dart._get__Document_onkeypress$$member_(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_onkeypress$$getter_ = function _get__Document_onkeypress$$getter_(){
  return _DocumentWrappingImplementation$Dart._get__Document_onkeypress$$named_;
}
;
_DocumentWrappingImplementation$Dart._set__Document_onkeypress$$member_ = function(_this, value){
  return native__DocumentWrappingImplementation__set__Document_onkeypress(_this, value);
}
;
_DocumentWrappingImplementation$Dart._set__Document_onkeypress$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DocumentWrappingImplementation$Dart._set__Document_onkeypress$$member_(_this, value);
}
;
_DocumentWrappingImplementation$Dart._set__Document_onkeypress$$getter_ = function _set__Document_onkeypress$$getter_(){
  return _DocumentWrappingImplementation$Dart._set__Document_onkeypress$$named_;
}
;
_DocumentWrappingImplementation$Dart.prototype.onkeyup$named = function(){
  return this.onkeyup$getter().apply(this, arguments);
}
;
_DocumentWrappingImplementation$Dart.prototype.onkeyup$getter = function(){
  return _DocumentWrappingImplementation$Dart._get__Document_onkeyup$$member_(this);
}
;
_DocumentWrappingImplementation$Dart.prototype.onkeyup$setter = function(value){
  _DocumentWrappingImplementation$Dart._set__Document_onkeyup$$member_(this, value);
}
;
_DocumentWrappingImplementation$Dart._get__Document_onkeyup$$member_ = function(_this){
  return native__DocumentWrappingImplementation__get__Document_onkeyup(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_onkeyup$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DocumentWrappingImplementation$Dart._get__Document_onkeyup$$member_(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_onkeyup$$getter_ = function _get__Document_onkeyup$$getter_(){
  return _DocumentWrappingImplementation$Dart._get__Document_onkeyup$$named_;
}
;
_DocumentWrappingImplementation$Dart._set__Document_onkeyup$$member_ = function(_this, value){
  return native__DocumentWrappingImplementation__set__Document_onkeyup(_this, value);
}
;
_DocumentWrappingImplementation$Dart._set__Document_onkeyup$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DocumentWrappingImplementation$Dart._set__Document_onkeyup$$member_(_this, value);
}
;
_DocumentWrappingImplementation$Dart._set__Document_onkeyup$$getter_ = function _set__Document_onkeyup$$getter_(){
  return _DocumentWrappingImplementation$Dart._set__Document_onkeyup$$named_;
}
;
_DocumentWrappingImplementation$Dart.prototype.onload$named = function(){
  return this.onload$getter().apply(this, arguments);
}
;
_DocumentWrappingImplementation$Dart.prototype.onload$getter = function(){
  return _DocumentWrappingImplementation$Dart._get__Document_onload$$member_(this);
}
;
_DocumentWrappingImplementation$Dart.prototype.onload$setter = function(value){
  _DocumentWrappingImplementation$Dart._set__Document_onload$$member_(this, value);
}
;
_DocumentWrappingImplementation$Dart._get__Document_onload$$member_ = function(_this){
  return native__DocumentWrappingImplementation__get__Document_onload(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_onload$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DocumentWrappingImplementation$Dart._get__Document_onload$$member_(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_onload$$getter_ = function _get__Document_onload$$getter_(){
  return _DocumentWrappingImplementation$Dart._get__Document_onload$$named_;
}
;
_DocumentWrappingImplementation$Dart._set__Document_onload$$member_ = function(_this, value){
  return native__DocumentWrappingImplementation__set__Document_onload(_this, value);
}
;
_DocumentWrappingImplementation$Dart._set__Document_onload$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DocumentWrappingImplementation$Dart._set__Document_onload$$member_(_this, value);
}
;
_DocumentWrappingImplementation$Dart._set__Document_onload$$getter_ = function _set__Document_onload$$getter_(){
  return _DocumentWrappingImplementation$Dart._set__Document_onload$$named_;
}
;
_DocumentWrappingImplementation$Dart.prototype.onmousedown$named = function(){
  return this.onmousedown$getter().apply(this, arguments);
}
;
_DocumentWrappingImplementation$Dart.prototype.onmousedown$getter = function(){
  return _DocumentWrappingImplementation$Dart._get__Document_onmousedown$$member_(this);
}
;
_DocumentWrappingImplementation$Dart.prototype.onmousedown$setter = function(value){
  _DocumentWrappingImplementation$Dart._set__Document_onmousedown$$member_(this, value);
}
;
_DocumentWrappingImplementation$Dart._get__Document_onmousedown$$member_ = function(_this){
  return native__DocumentWrappingImplementation__get__Document_onmousedown(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_onmousedown$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DocumentWrappingImplementation$Dart._get__Document_onmousedown$$member_(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_onmousedown$$getter_ = function _get__Document_onmousedown$$getter_(){
  return _DocumentWrappingImplementation$Dart._get__Document_onmousedown$$named_;
}
;
_DocumentWrappingImplementation$Dart._set__Document_onmousedown$$member_ = function(_this, value){
  return native__DocumentWrappingImplementation__set__Document_onmousedown(_this, value);
}
;
_DocumentWrappingImplementation$Dart._set__Document_onmousedown$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DocumentWrappingImplementation$Dart._set__Document_onmousedown$$member_(_this, value);
}
;
_DocumentWrappingImplementation$Dart._set__Document_onmousedown$$getter_ = function _set__Document_onmousedown$$getter_(){
  return _DocumentWrappingImplementation$Dart._set__Document_onmousedown$$named_;
}
;
_DocumentWrappingImplementation$Dart.prototype.onmousemove$named = function(){
  return this.onmousemove$getter().apply(this, arguments);
}
;
_DocumentWrappingImplementation$Dart.prototype.onmousemove$getter = function(){
  return _DocumentWrappingImplementation$Dart._get__Document_onmousemove$$member_(this);
}
;
_DocumentWrappingImplementation$Dart.prototype.onmousemove$setter = function(value){
  _DocumentWrappingImplementation$Dart._set__Document_onmousemove$$member_(this, value);
}
;
_DocumentWrappingImplementation$Dart._get__Document_onmousemove$$member_ = function(_this){
  return native__DocumentWrappingImplementation__get__Document_onmousemove(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_onmousemove$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DocumentWrappingImplementation$Dart._get__Document_onmousemove$$member_(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_onmousemove$$getter_ = function _get__Document_onmousemove$$getter_(){
  return _DocumentWrappingImplementation$Dart._get__Document_onmousemove$$named_;
}
;
_DocumentWrappingImplementation$Dart._set__Document_onmousemove$$member_ = function(_this, value){
  return native__DocumentWrappingImplementation__set__Document_onmousemove(_this, value);
}
;
_DocumentWrappingImplementation$Dart._set__Document_onmousemove$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DocumentWrappingImplementation$Dart._set__Document_onmousemove$$member_(_this, value);
}
;
_DocumentWrappingImplementation$Dart._set__Document_onmousemove$$getter_ = function _set__Document_onmousemove$$getter_(){
  return _DocumentWrappingImplementation$Dart._set__Document_onmousemove$$named_;
}
;
_DocumentWrappingImplementation$Dart.prototype.onmouseout$named = function(){
  return this.onmouseout$getter().apply(this, arguments);
}
;
_DocumentWrappingImplementation$Dart.prototype.onmouseout$getter = function(){
  return _DocumentWrappingImplementation$Dart._get__Document_onmouseout$$member_(this);
}
;
_DocumentWrappingImplementation$Dart.prototype.onmouseout$setter = function(value){
  _DocumentWrappingImplementation$Dart._set__Document_onmouseout$$member_(this, value);
}
;
_DocumentWrappingImplementation$Dart._get__Document_onmouseout$$member_ = function(_this){
  return native__DocumentWrappingImplementation__get__Document_onmouseout(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_onmouseout$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DocumentWrappingImplementation$Dart._get__Document_onmouseout$$member_(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_onmouseout$$getter_ = function _get__Document_onmouseout$$getter_(){
  return _DocumentWrappingImplementation$Dart._get__Document_onmouseout$$named_;
}
;
_DocumentWrappingImplementation$Dart._set__Document_onmouseout$$member_ = function(_this, value){
  return native__DocumentWrappingImplementation__set__Document_onmouseout(_this, value);
}
;
_DocumentWrappingImplementation$Dart._set__Document_onmouseout$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DocumentWrappingImplementation$Dart._set__Document_onmouseout$$member_(_this, value);
}
;
_DocumentWrappingImplementation$Dart._set__Document_onmouseout$$getter_ = function _set__Document_onmouseout$$getter_(){
  return _DocumentWrappingImplementation$Dart._set__Document_onmouseout$$named_;
}
;
_DocumentWrappingImplementation$Dart.prototype.onmouseover$named = function(){
  return this.onmouseover$getter().apply(this, arguments);
}
;
_DocumentWrappingImplementation$Dart.prototype.onmouseover$getter = function(){
  return _DocumentWrappingImplementation$Dart._get__Document_onmouseover$$member_(this);
}
;
_DocumentWrappingImplementation$Dart.prototype.onmouseover$setter = function(value){
  _DocumentWrappingImplementation$Dart._set__Document_onmouseover$$member_(this, value);
}
;
_DocumentWrappingImplementation$Dart._get__Document_onmouseover$$member_ = function(_this){
  return native__DocumentWrappingImplementation__get__Document_onmouseover(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_onmouseover$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DocumentWrappingImplementation$Dart._get__Document_onmouseover$$member_(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_onmouseover$$getter_ = function _get__Document_onmouseover$$getter_(){
  return _DocumentWrappingImplementation$Dart._get__Document_onmouseover$$named_;
}
;
_DocumentWrappingImplementation$Dart._set__Document_onmouseover$$member_ = function(_this, value){
  return native__DocumentWrappingImplementation__set__Document_onmouseover(_this, value);
}
;
_DocumentWrappingImplementation$Dart._set__Document_onmouseover$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DocumentWrappingImplementation$Dart._set__Document_onmouseover$$member_(_this, value);
}
;
_DocumentWrappingImplementation$Dart._set__Document_onmouseover$$getter_ = function _set__Document_onmouseover$$getter_(){
  return _DocumentWrappingImplementation$Dart._set__Document_onmouseover$$named_;
}
;
_DocumentWrappingImplementation$Dart.prototype.onmouseup$named = function(){
  return this.onmouseup$getter().apply(this, arguments);
}
;
_DocumentWrappingImplementation$Dart.prototype.onmouseup$getter = function(){
  return _DocumentWrappingImplementation$Dart._get__Document_onmouseup$$member_(this);
}
;
_DocumentWrappingImplementation$Dart.prototype.onmouseup$setter = function(value){
  _DocumentWrappingImplementation$Dart._set__Document_onmouseup$$member_(this, value);
}
;
_DocumentWrappingImplementation$Dart._get__Document_onmouseup$$member_ = function(_this){
  return native__DocumentWrappingImplementation__get__Document_onmouseup(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_onmouseup$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DocumentWrappingImplementation$Dart._get__Document_onmouseup$$member_(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_onmouseup$$getter_ = function _get__Document_onmouseup$$getter_(){
  return _DocumentWrappingImplementation$Dart._get__Document_onmouseup$$named_;
}
;
_DocumentWrappingImplementation$Dart._set__Document_onmouseup$$member_ = function(_this, value){
  return native__DocumentWrappingImplementation__set__Document_onmouseup(_this, value);
}
;
_DocumentWrappingImplementation$Dart._set__Document_onmouseup$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DocumentWrappingImplementation$Dart._set__Document_onmouseup$$member_(_this, value);
}
;
_DocumentWrappingImplementation$Dart._set__Document_onmouseup$$getter_ = function _set__Document_onmouseup$$getter_(){
  return _DocumentWrappingImplementation$Dart._set__Document_onmouseup$$named_;
}
;
_DocumentWrappingImplementation$Dart.prototype.onmousewheel$named = function(){
  return this.onmousewheel$getter().apply(this, arguments);
}
;
_DocumentWrappingImplementation$Dart.prototype.onmousewheel$getter = function(){
  return _DocumentWrappingImplementation$Dart._get__Document_onmousewheel$$member_(this);
}
;
_DocumentWrappingImplementation$Dart.prototype.onmousewheel$setter = function(value){
  _DocumentWrappingImplementation$Dart._set__Document_onmousewheel$$member_(this, value);
}
;
_DocumentWrappingImplementation$Dart._get__Document_onmousewheel$$member_ = function(_this){
  return native__DocumentWrappingImplementation__get__Document_onmousewheel(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_onmousewheel$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DocumentWrappingImplementation$Dart._get__Document_onmousewheel$$member_(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_onmousewheel$$getter_ = function _get__Document_onmousewheel$$getter_(){
  return _DocumentWrappingImplementation$Dart._get__Document_onmousewheel$$named_;
}
;
_DocumentWrappingImplementation$Dart._set__Document_onmousewheel$$member_ = function(_this, value){
  return native__DocumentWrappingImplementation__set__Document_onmousewheel(_this, value);
}
;
_DocumentWrappingImplementation$Dart._set__Document_onmousewheel$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DocumentWrappingImplementation$Dart._set__Document_onmousewheel$$member_(_this, value);
}
;
_DocumentWrappingImplementation$Dart._set__Document_onmousewheel$$getter_ = function _set__Document_onmousewheel$$getter_(){
  return _DocumentWrappingImplementation$Dart._set__Document_onmousewheel$$named_;
}
;
_DocumentWrappingImplementation$Dart.prototype.onpaste$named = function(){
  return this.onpaste$getter().apply(this, arguments);
}
;
_DocumentWrappingImplementation$Dart.prototype.onpaste$getter = function(){
  return _DocumentWrappingImplementation$Dart._get__Document_onpaste$$member_(this);
}
;
_DocumentWrappingImplementation$Dart.prototype.onpaste$setter = function(value){
  _DocumentWrappingImplementation$Dart._set__Document_onpaste$$member_(this, value);
}
;
_DocumentWrappingImplementation$Dart._get__Document_onpaste$$member_ = function(_this){
  return native__DocumentWrappingImplementation__get__Document_onpaste(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_onpaste$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DocumentWrappingImplementation$Dart._get__Document_onpaste$$member_(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_onpaste$$getter_ = function _get__Document_onpaste$$getter_(){
  return _DocumentWrappingImplementation$Dart._get__Document_onpaste$$named_;
}
;
_DocumentWrappingImplementation$Dart._set__Document_onpaste$$member_ = function(_this, value){
  return native__DocumentWrappingImplementation__set__Document_onpaste(_this, value);
}
;
_DocumentWrappingImplementation$Dart._set__Document_onpaste$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DocumentWrappingImplementation$Dart._set__Document_onpaste$$member_(_this, value);
}
;
_DocumentWrappingImplementation$Dart._set__Document_onpaste$$getter_ = function _set__Document_onpaste$$getter_(){
  return _DocumentWrappingImplementation$Dart._set__Document_onpaste$$named_;
}
;
_DocumentWrappingImplementation$Dart.prototype.onreadystatechange$named = function(){
  return this.onreadystatechange$getter().apply(this, arguments);
}
;
_DocumentWrappingImplementation$Dart.prototype.onreadystatechange$getter = function(){
  return _DocumentWrappingImplementation$Dart._get__Document_onreadystatechange$$member_(this);
}
;
_DocumentWrappingImplementation$Dart.prototype.onreadystatechange$setter = function(value){
  _DocumentWrappingImplementation$Dart._set__Document_onreadystatechange$$member_(this, value);
}
;
_DocumentWrappingImplementation$Dart._get__Document_onreadystatechange$$member_ = function(_this){
  return native__DocumentWrappingImplementation__get__Document_onreadystatechange(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_onreadystatechange$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DocumentWrappingImplementation$Dart._get__Document_onreadystatechange$$member_(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_onreadystatechange$$getter_ = function _get__Document_onreadystatechange$$getter_(){
  return _DocumentWrappingImplementation$Dart._get__Document_onreadystatechange$$named_;
}
;
_DocumentWrappingImplementation$Dart._set__Document_onreadystatechange$$member_ = function(_this, value){
  return native__DocumentWrappingImplementation__set__Document_onreadystatechange(_this, value);
}
;
_DocumentWrappingImplementation$Dart._set__Document_onreadystatechange$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DocumentWrappingImplementation$Dart._set__Document_onreadystatechange$$member_(_this, value);
}
;
_DocumentWrappingImplementation$Dart._set__Document_onreadystatechange$$getter_ = function _set__Document_onreadystatechange$$getter_(){
  return _DocumentWrappingImplementation$Dart._set__Document_onreadystatechange$$named_;
}
;
_DocumentWrappingImplementation$Dart.prototype.onreset$named = function(){
  return this.onreset$getter().apply(this, arguments);
}
;
_DocumentWrappingImplementation$Dart.prototype.onreset$getter = function(){
  return _DocumentWrappingImplementation$Dart._get__Document_onreset$$member_(this);
}
;
_DocumentWrappingImplementation$Dart.prototype.onreset$setter = function(value){
  _DocumentWrappingImplementation$Dart._set__Document_onreset$$member_(this, value);
}
;
_DocumentWrappingImplementation$Dart._get__Document_onreset$$member_ = function(_this){
  return native__DocumentWrappingImplementation__get__Document_onreset(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_onreset$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DocumentWrappingImplementation$Dart._get__Document_onreset$$member_(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_onreset$$getter_ = function _get__Document_onreset$$getter_(){
  return _DocumentWrappingImplementation$Dart._get__Document_onreset$$named_;
}
;
_DocumentWrappingImplementation$Dart._set__Document_onreset$$member_ = function(_this, value){
  return native__DocumentWrappingImplementation__set__Document_onreset(_this, value);
}
;
_DocumentWrappingImplementation$Dart._set__Document_onreset$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DocumentWrappingImplementation$Dart._set__Document_onreset$$member_(_this, value);
}
;
_DocumentWrappingImplementation$Dart._set__Document_onreset$$getter_ = function _set__Document_onreset$$getter_(){
  return _DocumentWrappingImplementation$Dart._set__Document_onreset$$named_;
}
;
_DocumentWrappingImplementation$Dart.prototype.onscroll$named = function(){
  return this.onscroll$getter().apply(this, arguments);
}
;
_DocumentWrappingImplementation$Dart.prototype.onscroll$getter = function(){
  return _DocumentWrappingImplementation$Dart._get__Document_onscroll$$member_(this);
}
;
_DocumentWrappingImplementation$Dart.prototype.onscroll$setter = function(value){
  _DocumentWrappingImplementation$Dart._set__Document_onscroll$$member_(this, value);
}
;
_DocumentWrappingImplementation$Dart._get__Document_onscroll$$member_ = function(_this){
  return native__DocumentWrappingImplementation__get__Document_onscroll(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_onscroll$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DocumentWrappingImplementation$Dart._get__Document_onscroll$$member_(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_onscroll$$getter_ = function _get__Document_onscroll$$getter_(){
  return _DocumentWrappingImplementation$Dart._get__Document_onscroll$$named_;
}
;
_DocumentWrappingImplementation$Dart._set__Document_onscroll$$member_ = function(_this, value){
  return native__DocumentWrappingImplementation__set__Document_onscroll(_this, value);
}
;
_DocumentWrappingImplementation$Dart._set__Document_onscroll$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DocumentWrappingImplementation$Dart._set__Document_onscroll$$member_(_this, value);
}
;
_DocumentWrappingImplementation$Dart._set__Document_onscroll$$getter_ = function _set__Document_onscroll$$getter_(){
  return _DocumentWrappingImplementation$Dart._set__Document_onscroll$$named_;
}
;
_DocumentWrappingImplementation$Dart.prototype.onsearch$named = function(){
  return this.onsearch$getter().apply(this, arguments);
}
;
_DocumentWrappingImplementation$Dart.prototype.onsearch$getter = function(){
  return _DocumentWrappingImplementation$Dart._get__Document_onsearch$$member_(this);
}
;
_DocumentWrappingImplementation$Dart.prototype.onsearch$setter = function(value){
  _DocumentWrappingImplementation$Dart._set__Document_onsearch$$member_(this, value);
}
;
_DocumentWrappingImplementation$Dart._get__Document_onsearch$$member_ = function(_this){
  return native__DocumentWrappingImplementation__get__Document_onsearch(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_onsearch$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DocumentWrappingImplementation$Dart._get__Document_onsearch$$member_(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_onsearch$$getter_ = function _get__Document_onsearch$$getter_(){
  return _DocumentWrappingImplementation$Dart._get__Document_onsearch$$named_;
}
;
_DocumentWrappingImplementation$Dart._set__Document_onsearch$$member_ = function(_this, value){
  return native__DocumentWrappingImplementation__set__Document_onsearch(_this, value);
}
;
_DocumentWrappingImplementation$Dart._set__Document_onsearch$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DocumentWrappingImplementation$Dart._set__Document_onsearch$$member_(_this, value);
}
;
_DocumentWrappingImplementation$Dart._set__Document_onsearch$$getter_ = function _set__Document_onsearch$$getter_(){
  return _DocumentWrappingImplementation$Dart._set__Document_onsearch$$named_;
}
;
_DocumentWrappingImplementation$Dart.prototype.onselect$named = function(){
  return this.onselect$getter().apply(this, arguments);
}
;
_DocumentWrappingImplementation$Dart.prototype.onselect$getter = function(){
  return _DocumentWrappingImplementation$Dart._get__Document_onselect$$member_(this);
}
;
_DocumentWrappingImplementation$Dart.prototype.onselect$setter = function(value){
  _DocumentWrappingImplementation$Dart._set__Document_onselect$$member_(this, value);
}
;
_DocumentWrappingImplementation$Dart._get__Document_onselect$$member_ = function(_this){
  return native__DocumentWrappingImplementation__get__Document_onselect(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_onselect$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DocumentWrappingImplementation$Dart._get__Document_onselect$$member_(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_onselect$$getter_ = function _get__Document_onselect$$getter_(){
  return _DocumentWrappingImplementation$Dart._get__Document_onselect$$named_;
}
;
_DocumentWrappingImplementation$Dart._set__Document_onselect$$member_ = function(_this, value){
  return native__DocumentWrappingImplementation__set__Document_onselect(_this, value);
}
;
_DocumentWrappingImplementation$Dart._set__Document_onselect$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DocumentWrappingImplementation$Dart._set__Document_onselect$$member_(_this, value);
}
;
_DocumentWrappingImplementation$Dart._set__Document_onselect$$getter_ = function _set__Document_onselect$$getter_(){
  return _DocumentWrappingImplementation$Dart._set__Document_onselect$$named_;
}
;
_DocumentWrappingImplementation$Dart.prototype.onselectionchange$named = function(){
  return this.onselectionchange$getter().apply(this, arguments);
}
;
_DocumentWrappingImplementation$Dart.prototype.onselectionchange$getter = function(){
  return _DocumentWrappingImplementation$Dart._get__Document_onselectionchange$$member_(this);
}
;
_DocumentWrappingImplementation$Dart.prototype.onselectionchange$setter = function(value){
  _DocumentWrappingImplementation$Dart._set__Document_onselectionchange$$member_(this, value);
}
;
_DocumentWrappingImplementation$Dart._get__Document_onselectionchange$$member_ = function(_this){
  return native__DocumentWrappingImplementation__get__Document_onselectionchange(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_onselectionchange$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DocumentWrappingImplementation$Dart._get__Document_onselectionchange$$member_(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_onselectionchange$$getter_ = function _get__Document_onselectionchange$$getter_(){
  return _DocumentWrappingImplementation$Dart._get__Document_onselectionchange$$named_;
}
;
_DocumentWrappingImplementation$Dart._set__Document_onselectionchange$$member_ = function(_this, value){
  return native__DocumentWrappingImplementation__set__Document_onselectionchange(_this, value);
}
;
_DocumentWrappingImplementation$Dart._set__Document_onselectionchange$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DocumentWrappingImplementation$Dart._set__Document_onselectionchange$$member_(_this, value);
}
;
_DocumentWrappingImplementation$Dart._set__Document_onselectionchange$$getter_ = function _set__Document_onselectionchange$$getter_(){
  return _DocumentWrappingImplementation$Dart._set__Document_onselectionchange$$named_;
}
;
_DocumentWrappingImplementation$Dart.prototype.onselectstart$named = function(){
  return this.onselectstart$getter().apply(this, arguments);
}
;
_DocumentWrappingImplementation$Dart.prototype.onselectstart$getter = function(){
  return _DocumentWrappingImplementation$Dart._get__Document_onselectstart$$member_(this);
}
;
_DocumentWrappingImplementation$Dart.prototype.onselectstart$setter = function(value){
  _DocumentWrappingImplementation$Dart._set__Document_onselectstart$$member_(this, value);
}
;
_DocumentWrappingImplementation$Dart._get__Document_onselectstart$$member_ = function(_this){
  return native__DocumentWrappingImplementation__get__Document_onselectstart(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_onselectstart$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DocumentWrappingImplementation$Dart._get__Document_onselectstart$$member_(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_onselectstart$$getter_ = function _get__Document_onselectstart$$getter_(){
  return _DocumentWrappingImplementation$Dart._get__Document_onselectstart$$named_;
}
;
_DocumentWrappingImplementation$Dart._set__Document_onselectstart$$member_ = function(_this, value){
  return native__DocumentWrappingImplementation__set__Document_onselectstart(_this, value);
}
;
_DocumentWrappingImplementation$Dart._set__Document_onselectstart$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DocumentWrappingImplementation$Dart._set__Document_onselectstart$$member_(_this, value);
}
;
_DocumentWrappingImplementation$Dart._set__Document_onselectstart$$getter_ = function _set__Document_onselectstart$$getter_(){
  return _DocumentWrappingImplementation$Dart._set__Document_onselectstart$$named_;
}
;
_DocumentWrappingImplementation$Dart.prototype.onsubmit$named = function(){
  return this.onsubmit$getter().apply(this, arguments);
}
;
_DocumentWrappingImplementation$Dart.prototype.onsubmit$getter = function(){
  return _DocumentWrappingImplementation$Dart._get__Document_onsubmit$$member_(this);
}
;
_DocumentWrappingImplementation$Dart.prototype.onsubmit$setter = function(value){
  _DocumentWrappingImplementation$Dart._set__Document_onsubmit$$member_(this, value);
}
;
_DocumentWrappingImplementation$Dart._get__Document_onsubmit$$member_ = function(_this){
  return native__DocumentWrappingImplementation__get__Document_onsubmit(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_onsubmit$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DocumentWrappingImplementation$Dart._get__Document_onsubmit$$member_(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_onsubmit$$getter_ = function _get__Document_onsubmit$$getter_(){
  return _DocumentWrappingImplementation$Dart._get__Document_onsubmit$$named_;
}
;
_DocumentWrappingImplementation$Dart._set__Document_onsubmit$$member_ = function(_this, value){
  return native__DocumentWrappingImplementation__set__Document_onsubmit(_this, value);
}
;
_DocumentWrappingImplementation$Dart._set__Document_onsubmit$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DocumentWrappingImplementation$Dart._set__Document_onsubmit$$member_(_this, value);
}
;
_DocumentWrappingImplementation$Dart._set__Document_onsubmit$$getter_ = function _set__Document_onsubmit$$getter_(){
  return _DocumentWrappingImplementation$Dart._set__Document_onsubmit$$named_;
}
;
_DocumentWrappingImplementation$Dart.prototype.ontouchcancel$named = function(){
  return this.ontouchcancel$getter().apply(this, arguments);
}
;
_DocumentWrappingImplementation$Dart.prototype.ontouchcancel$getter = function(){
  return _DocumentWrappingImplementation$Dart._get__Document_ontouchcancel$$member_(this);
}
;
_DocumentWrappingImplementation$Dart.prototype.ontouchcancel$setter = function(value){
  _DocumentWrappingImplementation$Dart._set__Document_ontouchcancel$$member_(this, value);
}
;
_DocumentWrappingImplementation$Dart._get__Document_ontouchcancel$$member_ = function(_this){
  return native__DocumentWrappingImplementation__get__Document_ontouchcancel(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_ontouchcancel$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DocumentWrappingImplementation$Dart._get__Document_ontouchcancel$$member_(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_ontouchcancel$$getter_ = function _get__Document_ontouchcancel$$getter_(){
  return _DocumentWrappingImplementation$Dart._get__Document_ontouchcancel$$named_;
}
;
_DocumentWrappingImplementation$Dart._set__Document_ontouchcancel$$member_ = function(_this, value){
  return native__DocumentWrappingImplementation__set__Document_ontouchcancel(_this, value);
}
;
_DocumentWrappingImplementation$Dart._set__Document_ontouchcancel$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DocumentWrappingImplementation$Dart._set__Document_ontouchcancel$$member_(_this, value);
}
;
_DocumentWrappingImplementation$Dart._set__Document_ontouchcancel$$getter_ = function _set__Document_ontouchcancel$$getter_(){
  return _DocumentWrappingImplementation$Dart._set__Document_ontouchcancel$$named_;
}
;
_DocumentWrappingImplementation$Dart.prototype.ontouchend$named = function(){
  return this.ontouchend$getter().apply(this, arguments);
}
;
_DocumentWrappingImplementation$Dart.prototype.ontouchend$getter = function(){
  return _DocumentWrappingImplementation$Dart._get__Document_ontouchend$$member_(this);
}
;
_DocumentWrappingImplementation$Dart.prototype.ontouchend$setter = function(value){
  _DocumentWrappingImplementation$Dart._set__Document_ontouchend$$member_(this, value);
}
;
_DocumentWrappingImplementation$Dart._get__Document_ontouchend$$member_ = function(_this){
  return native__DocumentWrappingImplementation__get__Document_ontouchend(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_ontouchend$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DocumentWrappingImplementation$Dart._get__Document_ontouchend$$member_(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_ontouchend$$getter_ = function _get__Document_ontouchend$$getter_(){
  return _DocumentWrappingImplementation$Dart._get__Document_ontouchend$$named_;
}
;
_DocumentWrappingImplementation$Dart._set__Document_ontouchend$$member_ = function(_this, value){
  return native__DocumentWrappingImplementation__set__Document_ontouchend(_this, value);
}
;
_DocumentWrappingImplementation$Dart._set__Document_ontouchend$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DocumentWrappingImplementation$Dart._set__Document_ontouchend$$member_(_this, value);
}
;
_DocumentWrappingImplementation$Dart._set__Document_ontouchend$$getter_ = function _set__Document_ontouchend$$getter_(){
  return _DocumentWrappingImplementation$Dart._set__Document_ontouchend$$named_;
}
;
_DocumentWrappingImplementation$Dart.prototype.ontouchmove$named = function(){
  return this.ontouchmove$getter().apply(this, arguments);
}
;
_DocumentWrappingImplementation$Dart.prototype.ontouchmove$getter = function(){
  return _DocumentWrappingImplementation$Dart._get__Document_ontouchmove$$member_(this);
}
;
_DocumentWrappingImplementation$Dart.prototype.ontouchmove$setter = function(value){
  _DocumentWrappingImplementation$Dart._set__Document_ontouchmove$$member_(this, value);
}
;
_DocumentWrappingImplementation$Dart._get__Document_ontouchmove$$member_ = function(_this){
  return native__DocumentWrappingImplementation__get__Document_ontouchmove(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_ontouchmove$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DocumentWrappingImplementation$Dart._get__Document_ontouchmove$$member_(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_ontouchmove$$getter_ = function _get__Document_ontouchmove$$getter_(){
  return _DocumentWrappingImplementation$Dart._get__Document_ontouchmove$$named_;
}
;
_DocumentWrappingImplementation$Dart._set__Document_ontouchmove$$member_ = function(_this, value){
  return native__DocumentWrappingImplementation__set__Document_ontouchmove(_this, value);
}
;
_DocumentWrappingImplementation$Dart._set__Document_ontouchmove$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DocumentWrappingImplementation$Dart._set__Document_ontouchmove$$member_(_this, value);
}
;
_DocumentWrappingImplementation$Dart._set__Document_ontouchmove$$getter_ = function _set__Document_ontouchmove$$getter_(){
  return _DocumentWrappingImplementation$Dart._set__Document_ontouchmove$$named_;
}
;
_DocumentWrappingImplementation$Dart.prototype.ontouchstart$named = function(){
  return this.ontouchstart$getter().apply(this, arguments);
}
;
_DocumentWrappingImplementation$Dart.prototype.ontouchstart$getter = function(){
  return _DocumentWrappingImplementation$Dart._get__Document_ontouchstart$$member_(this);
}
;
_DocumentWrappingImplementation$Dart.prototype.ontouchstart$setter = function(value){
  _DocumentWrappingImplementation$Dart._set__Document_ontouchstart$$member_(this, value);
}
;
_DocumentWrappingImplementation$Dart._get__Document_ontouchstart$$member_ = function(_this){
  return native__DocumentWrappingImplementation__get__Document_ontouchstart(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_ontouchstart$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DocumentWrappingImplementation$Dart._get__Document_ontouchstart$$member_(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_ontouchstart$$getter_ = function _get__Document_ontouchstart$$getter_(){
  return _DocumentWrappingImplementation$Dart._get__Document_ontouchstart$$named_;
}
;
_DocumentWrappingImplementation$Dart._set__Document_ontouchstart$$member_ = function(_this, value){
  return native__DocumentWrappingImplementation__set__Document_ontouchstart(_this, value);
}
;
_DocumentWrappingImplementation$Dart._set__Document_ontouchstart$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DocumentWrappingImplementation$Dart._set__Document_ontouchstart$$member_(_this, value);
}
;
_DocumentWrappingImplementation$Dart._set__Document_ontouchstart$$getter_ = function _set__Document_ontouchstart$$getter_(){
  return _DocumentWrappingImplementation$Dart._set__Document_ontouchstart$$named_;
}
;
_DocumentWrappingImplementation$Dart.prototype.onwebkitfullscreenchange$named = function(){
  return this.onwebkitfullscreenchange$getter().apply(this, arguments);
}
;
_DocumentWrappingImplementation$Dart.prototype.onwebkitfullscreenchange$getter = function(){
  return _DocumentWrappingImplementation$Dart._get__Document_onwebkitfullscreenchange$$member_(this);
}
;
_DocumentWrappingImplementation$Dart.prototype.onwebkitfullscreenchange$setter = function(value){
  _DocumentWrappingImplementation$Dart._set__Document_onwebkitfullscreenchange$$member_(this, value);
}
;
_DocumentWrappingImplementation$Dart._get__Document_onwebkitfullscreenchange$$member_ = function(_this){
  return native__DocumentWrappingImplementation__get__Document_onwebkitfullscreenchange(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_onwebkitfullscreenchange$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DocumentWrappingImplementation$Dart._get__Document_onwebkitfullscreenchange$$member_(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_onwebkitfullscreenchange$$getter_ = function _get__Document_onwebkitfullscreenchange$$getter_(){
  return _DocumentWrappingImplementation$Dart._get__Document_onwebkitfullscreenchange$$named_;
}
;
_DocumentWrappingImplementation$Dart._set__Document_onwebkitfullscreenchange$$member_ = function(_this, value){
  return native__DocumentWrappingImplementation__set__Document_onwebkitfullscreenchange(_this, value);
}
;
_DocumentWrappingImplementation$Dart._set__Document_onwebkitfullscreenchange$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DocumentWrappingImplementation$Dart._set__Document_onwebkitfullscreenchange$$member_(_this, value);
}
;
_DocumentWrappingImplementation$Dart._set__Document_onwebkitfullscreenchange$$getter_ = function _set__Document_onwebkitfullscreenchange$$getter_(){
  return _DocumentWrappingImplementation$Dart._set__Document_onwebkitfullscreenchange$$named_;
}
;
_DocumentWrappingImplementation$Dart.prototype.preferredStylesheetSet$named = function(){
  return this.preferredStylesheetSet$getter().apply(this, arguments);
}
;
_DocumentWrappingImplementation$Dart.prototype.preferredStylesheetSet$getter = function(){
  return _DocumentWrappingImplementation$Dart._get__Document_preferredStylesheetSet$$member_(this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_preferredStylesheetSet$$member_ = function(_this){
  return native__DocumentWrappingImplementation__get__Document_preferredStylesheetSet(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_preferredStylesheetSet$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DocumentWrappingImplementation$Dart._get__Document_preferredStylesheetSet$$member_(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_preferredStylesheetSet$$getter_ = function _get__Document_preferredStylesheetSet$$getter_(){
  return _DocumentWrappingImplementation$Dart._get__Document_preferredStylesheetSet$$named_;
}
;
_DocumentWrappingImplementation$Dart.prototype.readyState$named = function(){
  return this.readyState$getter().apply(this, arguments);
}
;
_DocumentWrappingImplementation$Dart.prototype.readyState$getter = function(){
  return _DocumentWrappingImplementation$Dart._get__Document_readyState$$member_(this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_readyState$$member_ = function(_this){
  return native__DocumentWrappingImplementation__get__Document_readyState(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_readyState$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DocumentWrappingImplementation$Dart._get__Document_readyState$$member_(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_readyState$$getter_ = function _get__Document_readyState$$getter_(){
  return _DocumentWrappingImplementation$Dart._get__Document_readyState$$named_;
}
;
_DocumentWrappingImplementation$Dart.prototype.referrer$named = function(){
  return this.referrer$getter().apply(this, arguments);
}
;
_DocumentWrappingImplementation$Dart.prototype.referrer$getter = function(){
  return _DocumentWrappingImplementation$Dart._get__Document_referrer$$member_(this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_referrer$$member_ = function(_this){
  return native__DocumentWrappingImplementation__get__Document_referrer(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_referrer$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DocumentWrappingImplementation$Dart._get__Document_referrer$$member_(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_referrer$$getter_ = function _get__Document_referrer$$getter_(){
  return _DocumentWrappingImplementation$Dart._get__Document_referrer$$named_;
}
;
_DocumentWrappingImplementation$Dart.prototype.selectedStylesheetSet$named = function(){
  return this.selectedStylesheetSet$getter().apply(this, arguments);
}
;
_DocumentWrappingImplementation$Dart.prototype.selectedStylesheetSet$getter = function(){
  return _DocumentWrappingImplementation$Dart._get__Document_selectedStylesheetSet$$member_(this);
}
;
_DocumentWrappingImplementation$Dart.prototype.selectedStylesheetSet$setter = function(value){
  _DocumentWrappingImplementation$Dart._set__Document_selectedStylesheetSet$$member_(this, value);
}
;
_DocumentWrappingImplementation$Dart._get__Document_selectedStylesheetSet$$member_ = function(_this){
  return native__DocumentWrappingImplementation__get__Document_selectedStylesheetSet(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_selectedStylesheetSet$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DocumentWrappingImplementation$Dart._get__Document_selectedStylesheetSet$$member_(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_selectedStylesheetSet$$getter_ = function _get__Document_selectedStylesheetSet$$getter_(){
  return _DocumentWrappingImplementation$Dart._get__Document_selectedStylesheetSet$$named_;
}
;
_DocumentWrappingImplementation$Dart._set__Document_selectedStylesheetSet$$member_ = function(_this, value){
  return native__DocumentWrappingImplementation__set__Document_selectedStylesheetSet(_this, value);
}
;
_DocumentWrappingImplementation$Dart._set__Document_selectedStylesheetSet$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DocumentWrappingImplementation$Dart._set__Document_selectedStylesheetSet$$member_(_this, value);
}
;
_DocumentWrappingImplementation$Dart._set__Document_selectedStylesheetSet$$getter_ = function _set__Document_selectedStylesheetSet$$getter_(){
  return _DocumentWrappingImplementation$Dart._set__Document_selectedStylesheetSet$$named_;
}
;
_DocumentWrappingImplementation$Dart.prototype.styleSheets$named = function(){
  return this.styleSheets$getter().apply(this, arguments);
}
;
_DocumentWrappingImplementation$Dart.prototype.styleSheets$getter = function(){
  return _DocumentWrappingImplementation$Dart._get__Document_styleSheets$$member_(this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_styleSheets$$member_ = function(_this){
  return native__DocumentWrappingImplementation__get__Document_styleSheets(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_styleSheets$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DocumentWrappingImplementation$Dart._get__Document_styleSheets$$member_(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_styleSheets$$getter_ = function _get__Document_styleSheets$$getter_(){
  return _DocumentWrappingImplementation$Dart._get__Document_styleSheets$$named_;
}
;
_DocumentWrappingImplementation$Dart.prototype.title$named = function(){
  return this.title$getter().apply(this, arguments);
}
;
_DocumentWrappingImplementation$Dart.prototype.title$getter = function(){
  return _DocumentWrappingImplementation$Dart._get__Document_title$$member_(this);
}
;
_DocumentWrappingImplementation$Dart.prototype.title$setter = function(value){
  _DocumentWrappingImplementation$Dart._set__Document_title$$member_(this, value);
}
;
_DocumentWrappingImplementation$Dart._get__Document_title$$member_ = function(_this){
  return native__DocumentWrappingImplementation__get__Document_title(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_title$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DocumentWrappingImplementation$Dart._get__Document_title$$member_(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_title$$getter_ = function _get__Document_title$$getter_(){
  return _DocumentWrappingImplementation$Dart._get__Document_title$$named_;
}
;
_DocumentWrappingImplementation$Dart._set__Document_title$$member_ = function(_this, value){
  return native__DocumentWrappingImplementation__set__Document_title(_this, value);
}
;
_DocumentWrappingImplementation$Dart._set__Document_title$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DocumentWrappingImplementation$Dart._set__Document_title$$member_(_this, value);
}
;
_DocumentWrappingImplementation$Dart._set__Document_title$$getter_ = function _set__Document_title$$getter_(){
  return _DocumentWrappingImplementation$Dart._set__Document_title$$named_;
}
;
_DocumentWrappingImplementation$Dart.prototype.webkitHidden$named = function(){
  return this.webkitHidden$getter().apply(this, arguments);
}
;
_DocumentWrappingImplementation$Dart.prototype.webkitHidden$getter = function(){
  return _DocumentWrappingImplementation$Dart._get__Document_webkitHidden$$member_(this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_webkitHidden$$member_ = function(_this){
  return native__DocumentWrappingImplementation__get__Document_webkitHidden(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_webkitHidden$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DocumentWrappingImplementation$Dart._get__Document_webkitHidden$$member_(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_webkitHidden$$getter_ = function _get__Document_webkitHidden$$getter_(){
  return _DocumentWrappingImplementation$Dart._get__Document_webkitHidden$$named_;
}
;
_DocumentWrappingImplementation$Dart.prototype.webkitVisibilityState$named = function(){
  return this.webkitVisibilityState$getter().apply(this, arguments);
}
;
_DocumentWrappingImplementation$Dart.prototype.webkitVisibilityState$getter = function(){
  return _DocumentWrappingImplementation$Dart._get__Document_webkitVisibilityState$$member_(this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_webkitVisibilityState$$member_ = function(_this){
  return native__DocumentWrappingImplementation__get__Document_webkitVisibilityState(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_webkitVisibilityState$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DocumentWrappingImplementation$Dart._get__Document_webkitVisibilityState$$member_(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_webkitVisibilityState$$getter_ = function _get__Document_webkitVisibilityState$$getter_(){
  return _DocumentWrappingImplementation$Dart._get__Document_webkitVisibilityState$$named_;
}
;
_DocumentWrappingImplementation$Dart.prototype.xmlEncoding$named = function(){
  return this.xmlEncoding$getter().apply(this, arguments);
}
;
_DocumentWrappingImplementation$Dart.prototype.xmlEncoding$getter = function(){
  return _DocumentWrappingImplementation$Dart._get__Document_xmlEncoding$$member_(this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_xmlEncoding$$member_ = function(_this){
  return native__DocumentWrappingImplementation__get__Document_xmlEncoding(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_xmlEncoding$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DocumentWrappingImplementation$Dart._get__Document_xmlEncoding$$member_(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_xmlEncoding$$getter_ = function _get__Document_xmlEncoding$$getter_(){
  return _DocumentWrappingImplementation$Dart._get__Document_xmlEncoding$$named_;
}
;
_DocumentWrappingImplementation$Dart.prototype.xmlStandalone$named = function(){
  return this.xmlStandalone$getter().apply(this, arguments);
}
;
_DocumentWrappingImplementation$Dart.prototype.xmlStandalone$getter = function(){
  return _DocumentWrappingImplementation$Dart._get__Document_xmlStandalone$$member_(this);
}
;
_DocumentWrappingImplementation$Dart.prototype.xmlStandalone$setter = function(value){
  _DocumentWrappingImplementation$Dart._set__Document_xmlStandalone$$member_(this, value);
}
;
_DocumentWrappingImplementation$Dart._get__Document_xmlStandalone$$member_ = function(_this){
  return native__DocumentWrappingImplementation__get__Document_xmlStandalone(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_xmlStandalone$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DocumentWrappingImplementation$Dart._get__Document_xmlStandalone$$member_(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_xmlStandalone$$getter_ = function _get__Document_xmlStandalone$$getter_(){
  return _DocumentWrappingImplementation$Dart._get__Document_xmlStandalone$$named_;
}
;
_DocumentWrappingImplementation$Dart._set__Document_xmlStandalone$$member_ = function(_this, value){
  return native__DocumentWrappingImplementation__set__Document_xmlStandalone(_this, value);
}
;
_DocumentWrappingImplementation$Dart._set__Document_xmlStandalone$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DocumentWrappingImplementation$Dart._set__Document_xmlStandalone$$member_(_this, value);
}
;
_DocumentWrappingImplementation$Dart._set__Document_xmlStandalone$$getter_ = function _set__Document_xmlStandalone$$getter_(){
  return _DocumentWrappingImplementation$Dart._set__Document_xmlStandalone$$named_;
}
;
_DocumentWrappingImplementation$Dart.prototype.xmlVersion$named = function(){
  return this.xmlVersion$getter().apply(this, arguments);
}
;
_DocumentWrappingImplementation$Dart.prototype.xmlVersion$getter = function(){
  return _DocumentWrappingImplementation$Dart._get__Document_xmlVersion$$member_(this);
}
;
_DocumentWrappingImplementation$Dart.prototype.xmlVersion$setter = function(value){
  _DocumentWrappingImplementation$Dart._set__Document_xmlVersion$$member_(this, value);
}
;
_DocumentWrappingImplementation$Dart._get__Document_xmlVersion$$member_ = function(_this){
  return native__DocumentWrappingImplementation__get__Document_xmlVersion(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_xmlVersion$$named_ = function($n, $o, _this){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DocumentWrappingImplementation$Dart._get__Document_xmlVersion$$member_(_this);
}
;
_DocumentWrappingImplementation$Dart._get__Document_xmlVersion$$getter_ = function _get__Document_xmlVersion$$getter_(){
  return _DocumentWrappingImplementation$Dart._get__Document_xmlVersion$$named_;
}
;
_DocumentWrappingImplementation$Dart._set__Document_xmlVersion$$member_ = function(_this, value){
  return native__DocumentWrappingImplementation__set__Document_xmlVersion(_this, value);
}
;
_DocumentWrappingImplementation$Dart._set__Document_xmlVersion$$named_ = function($n, $o, _this, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DocumentWrappingImplementation$Dart._set__Document_xmlVersion$$member_(_this, value);
}
;
_DocumentWrappingImplementation$Dart._set__Document_xmlVersion$$getter_ = function _set__Document_xmlVersion$$getter_(){
  return _DocumentWrappingImplementation$Dart._set__Document_xmlVersion$$named_;
}
;
_DocumentWrappingImplementation$Dart.prototype.adoptNode$member = function(source){
  return _DocumentWrappingImplementation$Dart._adoptNode$$member_(this, source);
}
;
_DocumentWrappingImplementation$Dart.prototype.adoptNode$named = function($n, $o, source){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DocumentWrappingImplementation$Dart.prototype.adoptNode$member.call(this, source);
}
;
_DocumentWrappingImplementation$Dart.prototype.adoptNode$getter = function adoptNode$getter(){
  return $bind(_DocumentWrappingImplementation$Dart.prototype.adoptNode$named, this);
}
;
_DocumentWrappingImplementation$Dart._adoptNode$$member_ = function(receiver, source){
  return native__DocumentWrappingImplementation__adoptNode(receiver, source);
}
;
_DocumentWrappingImplementation$Dart._adoptNode$$named_ = function($n, $o, receiver, source){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DocumentWrappingImplementation$Dart._adoptNode$$member_(receiver, source);
}
;
_DocumentWrappingImplementation$Dart._adoptNode$$getter_ = function _adoptNode$$getter_(){
  return _DocumentWrappingImplementation$Dart._adoptNode$$named_;
}
;
_DocumentWrappingImplementation$Dart.prototype.caretRangeFromPoint$member = function(x, y){
  return _DocumentWrappingImplementation$Dart._caretRangeFromPoint$$member_(this, x, y);
}
;
_DocumentWrappingImplementation$Dart.prototype.caretRangeFromPoint$named = function($n, $o, x, y){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DocumentWrappingImplementation$Dart.prototype.caretRangeFromPoint$member.call(this, x, y);
}
;
_DocumentWrappingImplementation$Dart.prototype.caretRangeFromPoint$getter = function caretRangeFromPoint$getter(){
  return $bind(_DocumentWrappingImplementation$Dart.prototype.caretRangeFromPoint$named, this);
}
;
_DocumentWrappingImplementation$Dart._caretRangeFromPoint$$member_ = function(receiver, x, y){
  return native__DocumentWrappingImplementation__caretRangeFromPoint(receiver, x, y);
}
;
_DocumentWrappingImplementation$Dart._caretRangeFromPoint$$named_ = function($n, $o, receiver, x, y){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return _DocumentWrappingImplementation$Dart._caretRangeFromPoint$$member_(receiver, x, y);
}
;
_DocumentWrappingImplementation$Dart._caretRangeFromPoint$$getter_ = function _caretRangeFromPoint$$getter_(){
  return _DocumentWrappingImplementation$Dart._caretRangeFromPoint$$named_;
}
;
_DocumentWrappingImplementation$Dart.prototype.createAttribute$member = function(name_0){
  return _DocumentWrappingImplementation$Dart._createAttribute$$member_(this, name_0);
}
;
_DocumentWrappingImplementation$Dart.prototype.createAttribute$named = function($n, $o, name_0){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DocumentWrappingImplementation$Dart.prototype.createAttribute$member.call(this, name_0);
}
;
_DocumentWrappingImplementation$Dart.prototype.createAttribute$getter = function createAttribute$getter(){
  return $bind(_DocumentWrappingImplementation$Dart.prototype.createAttribute$named, this);
}
;
_DocumentWrappingImplementation$Dart._createAttribute$$member_ = function(receiver, name_0){
  return native__DocumentWrappingImplementation__createAttribute(receiver, name_0);
}
;
_DocumentWrappingImplementation$Dart._createAttribute$$named_ = function($n, $o, receiver, name_0){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DocumentWrappingImplementation$Dart._createAttribute$$member_(receiver, name_0);
}
;
_DocumentWrappingImplementation$Dart._createAttribute$$getter_ = function _createAttribute$$getter_(){
  return _DocumentWrappingImplementation$Dart._createAttribute$$named_;
}
;
_DocumentWrappingImplementation$Dart.prototype.createAttributeNS$member = function(namespaceURI, qualifiedName){
  return _DocumentWrappingImplementation$Dart._createAttributeNS$$member_(this, namespaceURI, qualifiedName);
}
;
_DocumentWrappingImplementation$Dart.prototype.createAttributeNS$named = function($n, $o, namespaceURI, qualifiedName){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DocumentWrappingImplementation$Dart.prototype.createAttributeNS$member.call(this, namespaceURI, qualifiedName);
}
;
_DocumentWrappingImplementation$Dart.prototype.createAttributeNS$getter = function createAttributeNS$getter(){
  return $bind(_DocumentWrappingImplementation$Dart.prototype.createAttributeNS$named, this);
}
;
_DocumentWrappingImplementation$Dart._createAttributeNS$$member_ = function(receiver, namespaceURI, qualifiedName){
  return native__DocumentWrappingImplementation__createAttributeNS(receiver, namespaceURI, qualifiedName);
}
;
_DocumentWrappingImplementation$Dart._createAttributeNS$$named_ = function($n, $o, receiver, namespaceURI, qualifiedName){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return _DocumentWrappingImplementation$Dart._createAttributeNS$$member_(receiver, namespaceURI, qualifiedName);
}
;
_DocumentWrappingImplementation$Dart._createAttributeNS$$getter_ = function _createAttributeNS$$getter_(){
  return _DocumentWrappingImplementation$Dart._createAttributeNS$$named_;
}
;
_DocumentWrappingImplementation$Dart.prototype.createCDATASection$member = function(data){
  return _DocumentWrappingImplementation$Dart._createCDATASection$$member_(this, data);
}
;
_DocumentWrappingImplementation$Dart.prototype.createCDATASection$named = function($n, $o, data){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DocumentWrappingImplementation$Dart.prototype.createCDATASection$member.call(this, data);
}
;
_DocumentWrappingImplementation$Dart.prototype.createCDATASection$getter = function createCDATASection$getter(){
  return $bind(_DocumentWrappingImplementation$Dart.prototype.createCDATASection$named, this);
}
;
_DocumentWrappingImplementation$Dart._createCDATASection$$member_ = function(receiver, data){
  return native__DocumentWrappingImplementation__createCDATASection(receiver, data);
}
;
_DocumentWrappingImplementation$Dart._createCDATASection$$named_ = function($n, $o, receiver, data){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DocumentWrappingImplementation$Dart._createCDATASection$$member_(receiver, data);
}
;
_DocumentWrappingImplementation$Dart._createCDATASection$$getter_ = function _createCDATASection$$getter_(){
  return _DocumentWrappingImplementation$Dart._createCDATASection$$named_;
}
;
_DocumentWrappingImplementation$Dart.prototype.createCSSStyleDeclaration$member = function(){
  return _DocumentWrappingImplementation$Dart._createCSSStyleDeclaration$$member_(this);
}
;
_DocumentWrappingImplementation$Dart.prototype.createCSSStyleDeclaration$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _DocumentWrappingImplementation$Dart.prototype.createCSSStyleDeclaration$member.call(this);
}
;
_DocumentWrappingImplementation$Dart.prototype.createCSSStyleDeclaration$getter = function createCSSStyleDeclaration$getter(){
  return $bind(_DocumentWrappingImplementation$Dart.prototype.createCSSStyleDeclaration$named, this);
}
;
_DocumentWrappingImplementation$Dart._createCSSStyleDeclaration$$member_ = function(receiver){
  return native__DocumentWrappingImplementation__createCSSStyleDeclaration(receiver);
}
;
_DocumentWrappingImplementation$Dart._createCSSStyleDeclaration$$named_ = function($n, $o, receiver){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DocumentWrappingImplementation$Dart._createCSSStyleDeclaration$$member_(receiver);
}
;
_DocumentWrappingImplementation$Dart._createCSSStyleDeclaration$$getter_ = function _createCSSStyleDeclaration$$getter_(){
  return _DocumentWrappingImplementation$Dart._createCSSStyleDeclaration$$named_;
}
;
_DocumentWrappingImplementation$Dart.prototype.createComment$member = function(data){
  return _DocumentWrappingImplementation$Dart._createComment$$member_(this, data);
}
;
_DocumentWrappingImplementation$Dart.prototype.createComment$named = function($n, $o, data){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DocumentWrappingImplementation$Dart.prototype.createComment$member.call(this, data);
}
;
_DocumentWrappingImplementation$Dart.prototype.createComment$getter = function createComment$getter(){
  return $bind(_DocumentWrappingImplementation$Dart.prototype.createComment$named, this);
}
;
_DocumentWrappingImplementation$Dart._createComment$$member_ = function(receiver, data){
  return native__DocumentWrappingImplementation__createComment(receiver, data);
}
;
_DocumentWrappingImplementation$Dart._createComment$$named_ = function($n, $o, receiver, data){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DocumentWrappingImplementation$Dart._createComment$$member_(receiver, data);
}
;
_DocumentWrappingImplementation$Dart._createComment$$getter_ = function _createComment$$getter_(){
  return _DocumentWrappingImplementation$Dart._createComment$$named_;
}
;
_DocumentWrappingImplementation$Dart.prototype.createDocumentFragment$member = function(){
  return _DocumentWrappingImplementation$Dart._createDocumentFragment$$member_(this);
}
;
_DocumentWrappingImplementation$Dart.prototype.createDocumentFragment$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _DocumentWrappingImplementation$Dart.prototype.createDocumentFragment$member.call(this);
}
;
_DocumentWrappingImplementation$Dart.prototype.createDocumentFragment$getter = function createDocumentFragment$getter(){
  return $bind(_DocumentWrappingImplementation$Dart.prototype.createDocumentFragment$named, this);
}
;
_DocumentWrappingImplementation$Dart._createDocumentFragment$$member_ = function(receiver){
  return native__DocumentWrappingImplementation__createDocumentFragment(receiver);
}
;
_DocumentWrappingImplementation$Dart._createDocumentFragment$$named_ = function($n, $o, receiver){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DocumentWrappingImplementation$Dart._createDocumentFragment$$member_(receiver);
}
;
_DocumentWrappingImplementation$Dart._createDocumentFragment$$getter_ = function _createDocumentFragment$$getter_(){
  return _DocumentWrappingImplementation$Dart._createDocumentFragment$$named_;
}
;
_DocumentWrappingImplementation$Dart.prototype.createElement$member = function(tagName){
  return _DocumentWrappingImplementation$Dart._createElement$$member_(this, tagName);
}
;
_DocumentWrappingImplementation$Dart.prototype.createElement$named = function($n, $o, tagName){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DocumentWrappingImplementation$Dart.prototype.createElement$member.call(this, tagName);
}
;
_DocumentWrappingImplementation$Dart.prototype.createElement$getter = function createElement$getter(){
  return $bind(_DocumentWrappingImplementation$Dart.prototype.createElement$named, this);
}
;
_DocumentWrappingImplementation$Dart._createElement$$member_ = function(receiver, tagName){
  return native__DocumentWrappingImplementation__createElement(receiver, tagName);
}
;
_DocumentWrappingImplementation$Dart._createElement$$named_ = function($n, $o, receiver, tagName){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DocumentWrappingImplementation$Dart._createElement$$member_(receiver, tagName);
}
;
_DocumentWrappingImplementation$Dart._createElement$$getter_ = function _createElement$$getter_(){
  return _DocumentWrappingImplementation$Dart._createElement$$named_;
}
;
_DocumentWrappingImplementation$Dart.prototype.createElementNS$member = function(namespaceURI, qualifiedName){
  return _DocumentWrappingImplementation$Dart._createElementNS$$member_(this, namespaceURI, qualifiedName);
}
;
_DocumentWrappingImplementation$Dart.prototype.createElementNS$named = function($n, $o, namespaceURI, qualifiedName){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DocumentWrappingImplementation$Dart.prototype.createElementNS$member.call(this, namespaceURI, qualifiedName);
}
;
_DocumentWrappingImplementation$Dart.prototype.createElementNS$getter = function createElementNS$getter(){
  return $bind(_DocumentWrappingImplementation$Dart.prototype.createElementNS$named, this);
}
;
_DocumentWrappingImplementation$Dart._createElementNS$$member_ = function(receiver, namespaceURI, qualifiedName){
  return native__DocumentWrappingImplementation__createElementNS(receiver, namespaceURI, qualifiedName);
}
;
_DocumentWrappingImplementation$Dart._createElementNS$$named_ = function($n, $o, receiver, namespaceURI, qualifiedName){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return _DocumentWrappingImplementation$Dart._createElementNS$$member_(receiver, namespaceURI, qualifiedName);
}
;
_DocumentWrappingImplementation$Dart._createElementNS$$getter_ = function _createElementNS$$getter_(){
  return _DocumentWrappingImplementation$Dart._createElementNS$$named_;
}
;
_DocumentWrappingImplementation$Dart.prototype.createEntityReference$member = function(name_0){
  return _DocumentWrappingImplementation$Dart._createEntityReference$$member_(this, name_0);
}
;
_DocumentWrappingImplementation$Dart.prototype.createEntityReference$named = function($n, $o, name_0){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DocumentWrappingImplementation$Dart.prototype.createEntityReference$member.call(this, name_0);
}
;
_DocumentWrappingImplementation$Dart.prototype.createEntityReference$getter = function createEntityReference$getter(){
  return $bind(_DocumentWrappingImplementation$Dart.prototype.createEntityReference$named, this);
}
;
_DocumentWrappingImplementation$Dart._createEntityReference$$member_ = function(receiver, name_0){
  return native__DocumentWrappingImplementation__createEntityReference(receiver, name_0);
}
;
_DocumentWrappingImplementation$Dart._createEntityReference$$named_ = function($n, $o, receiver, name_0){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DocumentWrappingImplementation$Dart._createEntityReference$$member_(receiver, name_0);
}
;
_DocumentWrappingImplementation$Dart._createEntityReference$$getter_ = function _createEntityReference$$getter_(){
  return _DocumentWrappingImplementation$Dart._createEntityReference$$named_;
}
;
_DocumentWrappingImplementation$Dart.prototype.createEvent$member = function(eventType){
  return _DocumentWrappingImplementation$Dart._createEvent$$member_(this, eventType);
}
;
_DocumentWrappingImplementation$Dart.prototype.createEvent$named = function($n, $o, eventType){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DocumentWrappingImplementation$Dart.prototype.createEvent$member.call(this, eventType);
}
;
_DocumentWrappingImplementation$Dart.prototype.createEvent$getter = function createEvent$getter(){
  return $bind(_DocumentWrappingImplementation$Dart.prototype.createEvent$named, this);
}
;
_DocumentWrappingImplementation$Dart._createEvent$$member_ = function(receiver, eventType){
  return native__DocumentWrappingImplementation__createEvent(receiver, eventType);
}
;
_DocumentWrappingImplementation$Dart._createEvent$$named_ = function($n, $o, receiver, eventType){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DocumentWrappingImplementation$Dart._createEvent$$member_(receiver, eventType);
}
;
_DocumentWrappingImplementation$Dart._createEvent$$getter_ = function _createEvent$$getter_(){
  return _DocumentWrappingImplementation$Dart._createEvent$$named_;
}
;
_DocumentWrappingImplementation$Dart.prototype.createNodeIterator$member = function(root, whatToShow, filter, expandEntityReferences){
  return _DocumentWrappingImplementation$Dart._createNodeIterator$$member_(this, root, whatToShow, filter, expandEntityReferences);
}
;
_DocumentWrappingImplementation$Dart.prototype.createNodeIterator$named = function($n, $o, root, whatToShow, filter, expandEntityReferences){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 4)
    $nsme();
  return _DocumentWrappingImplementation$Dart.prototype.createNodeIterator$member.call(this, root, whatToShow, filter, expandEntityReferences);
}
;
_DocumentWrappingImplementation$Dart.prototype.createNodeIterator$getter = function createNodeIterator$getter(){
  return $bind(_DocumentWrappingImplementation$Dart.prototype.createNodeIterator$named, this);
}
;
_DocumentWrappingImplementation$Dart._createNodeIterator$$member_ = function(receiver, root, whatToShow, filter, expandEntityReferences){
  return native__DocumentWrappingImplementation__createNodeIterator(receiver, root, whatToShow, filter, expandEntityReferences);
}
;
_DocumentWrappingImplementation$Dart._createNodeIterator$$named_ = function($n, $o, receiver, root, whatToShow, filter, expandEntityReferences){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 5)
    $nsme();
  return _DocumentWrappingImplementation$Dart._createNodeIterator$$member_(receiver, root, whatToShow, filter, expandEntityReferences);
}
;
_DocumentWrappingImplementation$Dart._createNodeIterator$$getter_ = function _createNodeIterator$$getter_(){
  return _DocumentWrappingImplementation$Dart._createNodeIterator$$named_;
}
;
_DocumentWrappingImplementation$Dart.prototype.createProcessingInstruction$member = function(target, data){
  return _DocumentWrappingImplementation$Dart._createProcessingInstruction$$member_(this, target, data);
}
;
_DocumentWrappingImplementation$Dart.prototype.createProcessingInstruction$named = function($n, $o, target, data){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DocumentWrappingImplementation$Dart.prototype.createProcessingInstruction$member.call(this, target, data);
}
;
_DocumentWrappingImplementation$Dart.prototype.createProcessingInstruction$getter = function createProcessingInstruction$getter(){
  return $bind(_DocumentWrappingImplementation$Dart.prototype.createProcessingInstruction$named, this);
}
;
_DocumentWrappingImplementation$Dart._createProcessingInstruction$$member_ = function(receiver, target, data){
  return native__DocumentWrappingImplementation__createProcessingInstruction(receiver, target, data);
}
;
_DocumentWrappingImplementation$Dart._createProcessingInstruction$$named_ = function($n, $o, receiver, target, data){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return _DocumentWrappingImplementation$Dart._createProcessingInstruction$$member_(receiver, target, data);
}
;
_DocumentWrappingImplementation$Dart._createProcessingInstruction$$getter_ = function _createProcessingInstruction$$getter_(){
  return _DocumentWrappingImplementation$Dart._createProcessingInstruction$$named_;
}
;
_DocumentWrappingImplementation$Dart.prototype.createRange$member = function(){
  return _DocumentWrappingImplementation$Dart._createRange$$member_(this);
}
;
_DocumentWrappingImplementation$Dart.prototype.createRange$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _DocumentWrappingImplementation$Dart.prototype.createRange$member.call(this);
}
;
_DocumentWrappingImplementation$Dart.prototype.createRange$getter = function createRange$getter(){
  return $bind(_DocumentWrappingImplementation$Dart.prototype.createRange$named, this);
}
;
_DocumentWrappingImplementation$Dart._createRange$$member_ = function(receiver){
  return native__DocumentWrappingImplementation__createRange(receiver);
}
;
_DocumentWrappingImplementation$Dart._createRange$$named_ = function($n, $o, receiver){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DocumentWrappingImplementation$Dart._createRange$$member_(receiver);
}
;
_DocumentWrappingImplementation$Dart._createRange$$getter_ = function _createRange$$getter_(){
  return _DocumentWrappingImplementation$Dart._createRange$$named_;
}
;
_DocumentWrappingImplementation$Dart.prototype.createTextNode$member = function(data){
  return _DocumentWrappingImplementation$Dart._createTextNode$$member_(this, data);
}
;
_DocumentWrappingImplementation$Dart.prototype.createTextNode$named = function($n, $o, data){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DocumentWrappingImplementation$Dart.prototype.createTextNode$member.call(this, data);
}
;
_DocumentWrappingImplementation$Dart.prototype.createTextNode$getter = function createTextNode$getter(){
  return $bind(_DocumentWrappingImplementation$Dart.prototype.createTextNode$named, this);
}
;
_DocumentWrappingImplementation$Dart._createTextNode$$member_ = function(receiver, data){
  return native__DocumentWrappingImplementation__createTextNode(receiver, data);
}
;
_DocumentWrappingImplementation$Dart._createTextNode$$named_ = function($n, $o, receiver, data){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DocumentWrappingImplementation$Dart._createTextNode$$member_(receiver, data);
}
;
_DocumentWrappingImplementation$Dart._createTextNode$$getter_ = function _createTextNode$$getter_(){
  return _DocumentWrappingImplementation$Dart._createTextNode$$named_;
}
;
_DocumentWrappingImplementation$Dart.prototype.createTreeWalker$member = function(root, whatToShow, filter, expandEntityReferences){
  return _DocumentWrappingImplementation$Dart._createTreeWalker$$member_(this, root, whatToShow, filter, expandEntityReferences);
}
;
_DocumentWrappingImplementation$Dart.prototype.createTreeWalker$named = function($n, $o, root, whatToShow, filter, expandEntityReferences){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 4)
    $nsme();
  return _DocumentWrappingImplementation$Dart.prototype.createTreeWalker$member.call(this, root, whatToShow, filter, expandEntityReferences);
}
;
_DocumentWrappingImplementation$Dart.prototype.createTreeWalker$getter = function createTreeWalker$getter(){
  return $bind(_DocumentWrappingImplementation$Dart.prototype.createTreeWalker$named, this);
}
;
_DocumentWrappingImplementation$Dart._createTreeWalker$$member_ = function(receiver, root, whatToShow, filter, expandEntityReferences){
  return native__DocumentWrappingImplementation__createTreeWalker(receiver, root, whatToShow, filter, expandEntityReferences);
}
;
_DocumentWrappingImplementation$Dart._createTreeWalker$$named_ = function($n, $o, receiver, root, whatToShow, filter, expandEntityReferences){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 5)
    $nsme();
  return _DocumentWrappingImplementation$Dart._createTreeWalker$$member_(receiver, root, whatToShow, filter, expandEntityReferences);
}
;
_DocumentWrappingImplementation$Dart._createTreeWalker$$getter_ = function _createTreeWalker$$getter_(){
  return _DocumentWrappingImplementation$Dart._createTreeWalker$$named_;
}
;
_DocumentWrappingImplementation$Dart.prototype.elementFromPoint$member = function(x, y){
  return _DocumentWrappingImplementation$Dart._elementFromPoint$$member_(this, x, y);
}
;
_DocumentWrappingImplementation$Dart.prototype.elementFromPoint$named = function($n, $o, x, y){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DocumentWrappingImplementation$Dart.prototype.elementFromPoint$member.call(this, x, y);
}
;
_DocumentWrappingImplementation$Dart.prototype.elementFromPoint$getter = function elementFromPoint$getter(){
  return $bind(_DocumentWrappingImplementation$Dart.prototype.elementFromPoint$named, this);
}
;
_DocumentWrappingImplementation$Dart._elementFromPoint$$member_ = function(receiver, x, y){
  return native__DocumentWrappingImplementation__elementFromPoint(receiver, x, y);
}
;
_DocumentWrappingImplementation$Dart._elementFromPoint$$named_ = function($n, $o, receiver, x, y){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return _DocumentWrappingImplementation$Dart._elementFromPoint$$member_(receiver, x, y);
}
;
_DocumentWrappingImplementation$Dart._elementFromPoint$$getter_ = function _elementFromPoint$$getter_(){
  return _DocumentWrappingImplementation$Dart._elementFromPoint$$named_;
}
;
_DocumentWrappingImplementation$Dart.prototype.execCommand$member = function(command, userInterface, value){
  return _DocumentWrappingImplementation$Dart._execCommand$$member_(this, command, userInterface, value);
}
;
_DocumentWrappingImplementation$Dart.prototype.execCommand$named = function($n, $o, command, userInterface, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return _DocumentWrappingImplementation$Dart.prototype.execCommand$member.call(this, command, userInterface, value);
}
;
_DocumentWrappingImplementation$Dart.prototype.execCommand$getter = function execCommand$getter(){
  return $bind(_DocumentWrappingImplementation$Dart.prototype.execCommand$named, this);
}
;
_DocumentWrappingImplementation$Dart._execCommand$$member_ = function(receiver, command, userInterface, value){
  return native__DocumentWrappingImplementation__execCommand(receiver, command, userInterface, value);
}
;
_DocumentWrappingImplementation$Dart._execCommand$$named_ = function($n, $o, receiver, command, userInterface, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 4)
    $nsme();
  return _DocumentWrappingImplementation$Dart._execCommand$$member_(receiver, command, userInterface, value);
}
;
_DocumentWrappingImplementation$Dart._execCommand$$getter_ = function _execCommand$$getter_(){
  return _DocumentWrappingImplementation$Dart._execCommand$$named_;
}
;
_DocumentWrappingImplementation$Dart.prototype.getCSSCanvasContext$member = function(contextId, name_0, width, height){
  return _DocumentWrappingImplementation$Dart._getCSSCanvasContext$$member_(this, contextId, name_0, width, height);
}
;
_DocumentWrappingImplementation$Dart.prototype.getCSSCanvasContext$named = function($n, $o, contextId, name_0, width, height){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 4)
    $nsme();
  return _DocumentWrappingImplementation$Dart.prototype.getCSSCanvasContext$member.call(this, contextId, name_0, width, height);
}
;
_DocumentWrappingImplementation$Dart.prototype.getCSSCanvasContext$getter = function getCSSCanvasContext$getter(){
  return $bind(_DocumentWrappingImplementation$Dart.prototype.getCSSCanvasContext$named, this);
}
;
_DocumentWrappingImplementation$Dart._getCSSCanvasContext$$member_ = function(receiver, contextId, name_0, width, height){
  return native__DocumentWrappingImplementation__getCSSCanvasContext(receiver, contextId, name_0, width, height);
}
;
_DocumentWrappingImplementation$Dart._getCSSCanvasContext$$named_ = function($n, $o, receiver, contextId, name_0, width, height){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 5)
    $nsme();
  return _DocumentWrappingImplementation$Dart._getCSSCanvasContext$$member_(receiver, contextId, name_0, width, height);
}
;
_DocumentWrappingImplementation$Dart._getCSSCanvasContext$$getter_ = function _getCSSCanvasContext$$getter_(){
  return _DocumentWrappingImplementation$Dart._getCSSCanvasContext$$named_;
}
;
_DocumentWrappingImplementation$Dart.prototype.getElementById$member = function(elementId){
  return _DocumentWrappingImplementation$Dart._getElementById$$member_(this, elementId);
}
;
_DocumentWrappingImplementation$Dart.prototype.getElementById$named = function($n, $o, elementId){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DocumentWrappingImplementation$Dart.prototype.getElementById$member.call(this, elementId);
}
;
_DocumentWrappingImplementation$Dart.prototype.getElementById$getter = function getElementById$getter(){
  return $bind(_DocumentWrappingImplementation$Dart.prototype.getElementById$named, this);
}
;
_DocumentWrappingImplementation$Dart._getElementById$$member_ = function(receiver, elementId){
  return native__DocumentWrappingImplementation__getElementById(receiver, elementId);
}
;
_DocumentWrappingImplementation$Dart._getElementById$$named_ = function($n, $o, receiver, elementId){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DocumentWrappingImplementation$Dart._getElementById$$member_(receiver, elementId);
}
;
_DocumentWrappingImplementation$Dart._getElementById$$getter_ = function _getElementById$$getter_(){
  return _DocumentWrappingImplementation$Dart._getElementById$$named_;
}
;
_DocumentWrappingImplementation$Dart.prototype.getElementsByClassName$member = function(tagname){
  return _DocumentWrappingImplementation$Dart._getElementsByClassName$$member_(this, tagname);
}
;
_DocumentWrappingImplementation$Dart.prototype.getElementsByClassName$named = function($n, $o, tagname){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DocumentWrappingImplementation$Dart.prototype.getElementsByClassName$member.call(this, tagname);
}
;
_DocumentWrappingImplementation$Dart.prototype.getElementsByClassName$getter = function getElementsByClassName$getter(){
  return $bind(_DocumentWrappingImplementation$Dart.prototype.getElementsByClassName$named, this);
}
;
_DocumentWrappingImplementation$Dart._getElementsByClassName$$member_ = function(receiver, tagname){
  return native__DocumentWrappingImplementation__getElementsByClassName(receiver, tagname);
}
;
_DocumentWrappingImplementation$Dart._getElementsByClassName$$named_ = function($n, $o, receiver, tagname){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DocumentWrappingImplementation$Dart._getElementsByClassName$$member_(receiver, tagname);
}
;
_DocumentWrappingImplementation$Dart._getElementsByClassName$$getter_ = function _getElementsByClassName$$getter_(){
  return _DocumentWrappingImplementation$Dart._getElementsByClassName$$named_;
}
;
_DocumentWrappingImplementation$Dart.prototype.getElementsByName$member = function(elementName){
  return _DocumentWrappingImplementation$Dart._getElementsByName$$member_(this, elementName);
}
;
_DocumentWrappingImplementation$Dart.prototype.getElementsByName$named = function($n, $o, elementName){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DocumentWrappingImplementation$Dart.prototype.getElementsByName$member.call(this, elementName);
}
;
_DocumentWrappingImplementation$Dart.prototype.getElementsByName$getter = function getElementsByName$getter(){
  return $bind(_DocumentWrappingImplementation$Dart.prototype.getElementsByName$named, this);
}
;
_DocumentWrappingImplementation$Dart._getElementsByName$$member_ = function(receiver, elementName){
  return native__DocumentWrappingImplementation__getElementsByName(receiver, elementName);
}
;
_DocumentWrappingImplementation$Dart._getElementsByName$$named_ = function($n, $o, receiver, elementName){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DocumentWrappingImplementation$Dart._getElementsByName$$member_(receiver, elementName);
}
;
_DocumentWrappingImplementation$Dart._getElementsByName$$getter_ = function _getElementsByName$$getter_(){
  return _DocumentWrappingImplementation$Dart._getElementsByName$$named_;
}
;
_DocumentWrappingImplementation$Dart.prototype.getElementsByTagName$member = function(tagname){
  return _DocumentWrappingImplementation$Dart._getElementsByTagName$$member_(this, tagname);
}
;
_DocumentWrappingImplementation$Dart.prototype.getElementsByTagName$named = function($n, $o, tagname){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DocumentWrappingImplementation$Dart.prototype.getElementsByTagName$member.call(this, tagname);
}
;
_DocumentWrappingImplementation$Dart.prototype.getElementsByTagName$getter = function getElementsByTagName$getter(){
  return $bind(_DocumentWrappingImplementation$Dart.prototype.getElementsByTagName$named, this);
}
;
_DocumentWrappingImplementation$Dart._getElementsByTagName$$member_ = function(receiver, tagname){
  return native__DocumentWrappingImplementation__getElementsByTagName(receiver, tagname);
}
;
_DocumentWrappingImplementation$Dart._getElementsByTagName$$named_ = function($n, $o, receiver, tagname){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DocumentWrappingImplementation$Dart._getElementsByTagName$$member_(receiver, tagname);
}
;
_DocumentWrappingImplementation$Dart._getElementsByTagName$$getter_ = function _getElementsByTagName$$getter_(){
  return _DocumentWrappingImplementation$Dart._getElementsByTagName$$named_;
}
;
_DocumentWrappingImplementation$Dart.prototype.getElementsByTagNameNS$member = function(namespaceURI, localName){
  return _DocumentWrappingImplementation$Dart._getElementsByTagNameNS$$member_(this, namespaceURI, localName);
}
;
_DocumentWrappingImplementation$Dart.prototype.getElementsByTagNameNS$named = function($n, $o, namespaceURI, localName){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DocumentWrappingImplementation$Dart.prototype.getElementsByTagNameNS$member.call(this, namespaceURI, localName);
}
;
_DocumentWrappingImplementation$Dart.prototype.getElementsByTagNameNS$getter = function getElementsByTagNameNS$getter(){
  return $bind(_DocumentWrappingImplementation$Dart.prototype.getElementsByTagNameNS$named, this);
}
;
_DocumentWrappingImplementation$Dart._getElementsByTagNameNS$$member_ = function(receiver, namespaceURI, localName){
  return native__DocumentWrappingImplementation__getElementsByTagNameNS(receiver, namespaceURI, localName);
}
;
_DocumentWrappingImplementation$Dart._getElementsByTagNameNS$$named_ = function($n, $o, receiver, namespaceURI, localName){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return _DocumentWrappingImplementation$Dart._getElementsByTagNameNS$$member_(receiver, namespaceURI, localName);
}
;
_DocumentWrappingImplementation$Dart._getElementsByTagNameNS$$getter_ = function _getElementsByTagNameNS$$getter_(){
  return _DocumentWrappingImplementation$Dart._getElementsByTagNameNS$$named_;
}
;
_DocumentWrappingImplementation$Dart.prototype.getOverrideStyle$member = function(element, pseudoElement){
  return _DocumentWrappingImplementation$Dart._getOverrideStyle$$member_(this, element, pseudoElement);
}
;
_DocumentWrappingImplementation$Dart.prototype.getOverrideStyle$named = function($n, $o, element, pseudoElement){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DocumentWrappingImplementation$Dart.prototype.getOverrideStyle$member.call(this, element, pseudoElement);
}
;
_DocumentWrappingImplementation$Dart.prototype.getOverrideStyle$getter = function getOverrideStyle$getter(){
  return $bind(_DocumentWrappingImplementation$Dart.prototype.getOverrideStyle$named, this);
}
;
_DocumentWrappingImplementation$Dart._getOverrideStyle$$member_ = function(receiver, element, pseudoElement){
  return native__DocumentWrappingImplementation__getOverrideStyle(receiver, element, pseudoElement);
}
;
_DocumentWrappingImplementation$Dart._getOverrideStyle$$named_ = function($n, $o, receiver, element, pseudoElement){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return _DocumentWrappingImplementation$Dart._getOverrideStyle$$member_(receiver, element, pseudoElement);
}
;
_DocumentWrappingImplementation$Dart._getOverrideStyle$$getter_ = function _getOverrideStyle$$getter_(){
  return _DocumentWrappingImplementation$Dart._getOverrideStyle$$named_;
}
;
_DocumentWrappingImplementation$Dart.prototype.importNode$member = function(importedNode, deep){
  return _DocumentWrappingImplementation$Dart._importNode$$member_(this, importedNode, deep);
}
;
_DocumentWrappingImplementation$Dart.prototype.importNode$named = function($n, $o, importedNode, deep){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DocumentWrappingImplementation$Dart.prototype.importNode$member.call(this, importedNode, deep);
}
;
_DocumentWrappingImplementation$Dart.prototype.importNode$getter = function importNode$getter(){
  return $bind(_DocumentWrappingImplementation$Dart.prototype.importNode$named, this);
}
;
_DocumentWrappingImplementation$Dart._importNode$$member_ = function(receiver, importedNode, deep){
  return native__DocumentWrappingImplementation__importNode(receiver, importedNode, deep);
}
;
_DocumentWrappingImplementation$Dart._importNode$$named_ = function($n, $o, receiver, importedNode, deep){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return _DocumentWrappingImplementation$Dart._importNode$$member_(receiver, importedNode, deep);
}
;
_DocumentWrappingImplementation$Dart._importNode$$getter_ = function _importNode$$getter_(){
  return _DocumentWrappingImplementation$Dart._importNode$$named_;
}
;
_DocumentWrappingImplementation$Dart.prototype.queryCommandEnabled$member = function(command){
  return _DocumentWrappingImplementation$Dart._queryCommandEnabled$$member_(this, command);
}
;
_DocumentWrappingImplementation$Dart.prototype.queryCommandEnabled$named = function($n, $o, command){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DocumentWrappingImplementation$Dart.prototype.queryCommandEnabled$member.call(this, command);
}
;
_DocumentWrappingImplementation$Dart.prototype.queryCommandEnabled$getter = function queryCommandEnabled$getter(){
  return $bind(_DocumentWrappingImplementation$Dart.prototype.queryCommandEnabled$named, this);
}
;
_DocumentWrappingImplementation$Dart._queryCommandEnabled$$member_ = function(receiver, command){
  return native__DocumentWrappingImplementation__queryCommandEnabled(receiver, command);
}
;
_DocumentWrappingImplementation$Dart._queryCommandEnabled$$named_ = function($n, $o, receiver, command){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DocumentWrappingImplementation$Dart._queryCommandEnabled$$member_(receiver, command);
}
;
_DocumentWrappingImplementation$Dart._queryCommandEnabled$$getter_ = function _queryCommandEnabled$$getter_(){
  return _DocumentWrappingImplementation$Dart._queryCommandEnabled$$named_;
}
;
_DocumentWrappingImplementation$Dart.prototype.queryCommandIndeterm$member = function(command){
  return _DocumentWrappingImplementation$Dart._queryCommandIndeterm$$member_(this, command);
}
;
_DocumentWrappingImplementation$Dart.prototype.queryCommandIndeterm$named = function($n, $o, command){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DocumentWrappingImplementation$Dart.prototype.queryCommandIndeterm$member.call(this, command);
}
;
_DocumentWrappingImplementation$Dart.prototype.queryCommandIndeterm$getter = function queryCommandIndeterm$getter(){
  return $bind(_DocumentWrappingImplementation$Dart.prototype.queryCommandIndeterm$named, this);
}
;
_DocumentWrappingImplementation$Dart._queryCommandIndeterm$$member_ = function(receiver, command){
  return native__DocumentWrappingImplementation__queryCommandIndeterm(receiver, command);
}
;
_DocumentWrappingImplementation$Dart._queryCommandIndeterm$$named_ = function($n, $o, receiver, command){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DocumentWrappingImplementation$Dart._queryCommandIndeterm$$member_(receiver, command);
}
;
_DocumentWrappingImplementation$Dart._queryCommandIndeterm$$getter_ = function _queryCommandIndeterm$$getter_(){
  return _DocumentWrappingImplementation$Dart._queryCommandIndeterm$$named_;
}
;
_DocumentWrappingImplementation$Dart.prototype.queryCommandState$member = function(command){
  return _DocumentWrappingImplementation$Dart._queryCommandState$$member_(this, command);
}
;
_DocumentWrappingImplementation$Dart.prototype.queryCommandState$named = function($n, $o, command){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DocumentWrappingImplementation$Dart.prototype.queryCommandState$member.call(this, command);
}
;
_DocumentWrappingImplementation$Dart.prototype.queryCommandState$getter = function queryCommandState$getter(){
  return $bind(_DocumentWrappingImplementation$Dart.prototype.queryCommandState$named, this);
}
;
_DocumentWrappingImplementation$Dart._queryCommandState$$member_ = function(receiver, command){
  return native__DocumentWrappingImplementation__queryCommandState(receiver, command);
}
;
_DocumentWrappingImplementation$Dart._queryCommandState$$named_ = function($n, $o, receiver, command){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DocumentWrappingImplementation$Dart._queryCommandState$$member_(receiver, command);
}
;
_DocumentWrappingImplementation$Dart._queryCommandState$$getter_ = function _queryCommandState$$getter_(){
  return _DocumentWrappingImplementation$Dart._queryCommandState$$named_;
}
;
_DocumentWrappingImplementation$Dart.prototype.queryCommandSupported$member = function(command){
  return _DocumentWrappingImplementation$Dart._queryCommandSupported$$member_(this, command);
}
;
_DocumentWrappingImplementation$Dart.prototype.queryCommandSupported$named = function($n, $o, command){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DocumentWrappingImplementation$Dart.prototype.queryCommandSupported$member.call(this, command);
}
;
_DocumentWrappingImplementation$Dart.prototype.queryCommandSupported$getter = function queryCommandSupported$getter(){
  return $bind(_DocumentWrappingImplementation$Dart.prototype.queryCommandSupported$named, this);
}
;
_DocumentWrappingImplementation$Dart._queryCommandSupported$$member_ = function(receiver, command){
  return native__DocumentWrappingImplementation__queryCommandSupported(receiver, command);
}
;
_DocumentWrappingImplementation$Dart._queryCommandSupported$$named_ = function($n, $o, receiver, command){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DocumentWrappingImplementation$Dart._queryCommandSupported$$member_(receiver, command);
}
;
_DocumentWrappingImplementation$Dart._queryCommandSupported$$getter_ = function _queryCommandSupported$$getter_(){
  return _DocumentWrappingImplementation$Dart._queryCommandSupported$$named_;
}
;
_DocumentWrappingImplementation$Dart.prototype.queryCommandValue$member = function(command){
  return _DocumentWrappingImplementation$Dart._queryCommandValue$$member_(this, command);
}
;
_DocumentWrappingImplementation$Dart.prototype.queryCommandValue$named = function($n, $o, command){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DocumentWrappingImplementation$Dart.prototype.queryCommandValue$member.call(this, command);
}
;
_DocumentWrappingImplementation$Dart.prototype.queryCommandValue$getter = function queryCommandValue$getter(){
  return $bind(_DocumentWrappingImplementation$Dart.prototype.queryCommandValue$named, this);
}
;
_DocumentWrappingImplementation$Dart._queryCommandValue$$member_ = function(receiver, command){
  return native__DocumentWrappingImplementation__queryCommandValue(receiver, command);
}
;
_DocumentWrappingImplementation$Dart._queryCommandValue$$named_ = function($n, $o, receiver, command){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DocumentWrappingImplementation$Dart._queryCommandValue$$member_(receiver, command);
}
;
_DocumentWrappingImplementation$Dart._queryCommandValue$$getter_ = function _queryCommandValue$$getter_(){
  return _DocumentWrappingImplementation$Dart._queryCommandValue$$named_;
}
;
_DocumentWrappingImplementation$Dart.prototype.querySelector$member = function(selectors){
  return _DocumentWrappingImplementation$Dart._querySelector$$member_(this, selectors);
}
;
_DocumentWrappingImplementation$Dart.prototype.querySelector$named = function($n, $o, selectors){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DocumentWrappingImplementation$Dart.prototype.querySelector$member.call(this, selectors);
}
;
_DocumentWrappingImplementation$Dart.prototype.querySelector$getter = function querySelector$getter(){
  return $bind(_DocumentWrappingImplementation$Dart.prototype.querySelector$named, this);
}
;
_DocumentWrappingImplementation$Dart._querySelector$$member_ = function(receiver, selectors){
  return native__DocumentWrappingImplementation__querySelector(receiver, selectors);
}
;
_DocumentWrappingImplementation$Dart._querySelector$$named_ = function($n, $o, receiver, selectors){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DocumentWrappingImplementation$Dart._querySelector$$member_(receiver, selectors);
}
;
_DocumentWrappingImplementation$Dart._querySelector$$getter_ = function _querySelector$$getter_(){
  return _DocumentWrappingImplementation$Dart._querySelector$$named_;
}
;
_DocumentWrappingImplementation$Dart.prototype.querySelectorAll$member = function(selectors){
  return _DocumentWrappingImplementation$Dart._querySelectorAll$$member_(this, selectors);
}
;
_DocumentWrappingImplementation$Dart.prototype.querySelectorAll$named = function($n, $o, selectors){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DocumentWrappingImplementation$Dart.prototype.querySelectorAll$member.call(this, selectors);
}
;
_DocumentWrappingImplementation$Dart.prototype.querySelectorAll$getter = function querySelectorAll$getter(){
  return $bind(_DocumentWrappingImplementation$Dart.prototype.querySelectorAll$named, this);
}
;
_DocumentWrappingImplementation$Dart._querySelectorAll$$member_ = function(receiver, selectors){
  return native__DocumentWrappingImplementation__querySelectorAll(receiver, selectors);
}
;
_DocumentWrappingImplementation$Dart._querySelectorAll$$named_ = function($n, $o, receiver, selectors){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DocumentWrappingImplementation$Dart._querySelectorAll$$member_(receiver, selectors);
}
;
_DocumentWrappingImplementation$Dart._querySelectorAll$$getter_ = function _querySelectorAll$$getter_(){
  return _DocumentWrappingImplementation$Dart._querySelectorAll$$named_;
}
;
_DocumentWrappingImplementation$Dart.prototype.typeName$named = function(){
  return this.typeName$getter().apply(this, arguments);
}
;
_DocumentWrappingImplementation$Dart.prototype.typeName$getter = function(){
  return 'Document';
}
;
