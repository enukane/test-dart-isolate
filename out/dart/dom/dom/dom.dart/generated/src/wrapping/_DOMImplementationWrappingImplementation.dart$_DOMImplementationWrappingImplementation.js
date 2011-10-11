function _DOMImplementationWrappingImplementation$Dart(){
}

_DOMImplementationWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('_DOMImplementationWrappingImplementation$Dart'), _DOMImplementationWrappingImplementation$Dart.$RTTimplements);
}
;
_DOMImplementationWrappingImplementation$Dart.$RTTimplements = function(rtt){
  _DOMImplementationWrappingImplementation$Dart.$addTo(rtt);
}
;
_DOMImplementationWrappingImplementation$Dart.$addTo = function(target){
  var rtt = _DOMImplementationWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  DOMWrapperBase$Dart.$addTo(target);
  DOMImplementation$Dart.$addTo(target);
}
;
_DOMImplementationWrappingImplementation$Dart.prototype.$implements$_DOMImplementationWrappingImplementation$Dart = 1;
_DOMImplementationWrappingImplementation$Dart.prototype.$implements$DOMImplementation$Dart = 1;
_DOMImplementationWrappingImplementation$Dart.prototype.$implements$DOMWrapperBase$Dart = 1;
_DOMImplementationWrappingImplementation$Dart.prototype.$implements$DOMType$Dart = 1;
_DOMImplementationWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(_DOMImplementationWrappingImplementation$Dart, DOMWrapperBase$Dart);
_DOMImplementationWrappingImplementation$Dart.$Constructor = function(){
  DOMWrapperBase$Dart.$Constructor.call(this);
}
;
_DOMImplementationWrappingImplementation$Dart.$Initializer = function(){
  DOMWrapperBase$Dart.$Initializer.call(this);
}
;
_DOMImplementationWrappingImplementation$Dart._DOMImplementationWrappingImplementation$$Factory = function(){
  var tmp$0 = new _DOMImplementationWrappingImplementation$Dart;
  tmp$0.$typeInfo = _DOMImplementationWrappingImplementation$Dart.$lookupRTT();
  _DOMImplementationWrappingImplementation$Dart.$Initializer.call(tmp$0);
  _DOMImplementationWrappingImplementation$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
_DOMImplementationWrappingImplementation$Dart.create__DOMImplementationWrappingImplementation$member = function(){
  return _DOMImplementationWrappingImplementation$Dart._DOMImplementationWrappingImplementation$$Factory();
}
;
_DOMImplementationWrappingImplementation$Dart.create__DOMImplementationWrappingImplementation$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _DOMImplementationWrappingImplementation$Dart.create__DOMImplementationWrappingImplementation$member();
}
;
function native__DOMImplementationWrappingImplementation_create__DOMImplementationWrappingImplementation(){
  return _DOMImplementationWrappingImplementation$Dart.create__DOMImplementationWrappingImplementation$member();
}

_DOMImplementationWrappingImplementation$Dart.create__DOMImplementationWrappingImplementation$getter = function create__DOMImplementationWrappingImplementation$getter(){
  return _DOMImplementationWrappingImplementation$Dart.create__DOMImplementationWrappingImplementation$named;
}
;
_DOMImplementationWrappingImplementation$Dart.prototype.createCSSStyleSheet$member = function(title, media){
  return _DOMImplementationWrappingImplementation$Dart._createCSSStyleSheet$$member_(this, title, media);
}
;
_DOMImplementationWrappingImplementation$Dart.prototype.createCSSStyleSheet$named = function($n, $o, title, media){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DOMImplementationWrappingImplementation$Dart.prototype.createCSSStyleSheet$member.call(this, title, media);
}
;
_DOMImplementationWrappingImplementation$Dart.prototype.createCSSStyleSheet$getter = function createCSSStyleSheet$getter(){
  return $bind(_DOMImplementationWrappingImplementation$Dart.prototype.createCSSStyleSheet$named, this);
}
;
_DOMImplementationWrappingImplementation$Dart._createCSSStyleSheet$$member_ = function(receiver, title, media){
  return native__DOMImplementationWrappingImplementation__createCSSStyleSheet(receiver, title, media);
}
;
_DOMImplementationWrappingImplementation$Dart._createCSSStyleSheet$$named_ = function($n, $o, receiver, title, media){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return _DOMImplementationWrappingImplementation$Dart._createCSSStyleSheet$$member_(receiver, title, media);
}
;
_DOMImplementationWrappingImplementation$Dart._createCSSStyleSheet$$getter_ = function _createCSSStyleSheet$$getter_(){
  return _DOMImplementationWrappingImplementation$Dart._createCSSStyleSheet$$named_;
}
;
_DOMImplementationWrappingImplementation$Dart.prototype.createDocument$member = function(namespaceURI, qualifiedName, doctype){
  return _DOMImplementationWrappingImplementation$Dart._createDocument$$member_(this, namespaceURI, qualifiedName, doctype);
}
;
_DOMImplementationWrappingImplementation$Dart.prototype.createDocument$named = function($n, $o, namespaceURI, qualifiedName, doctype){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return _DOMImplementationWrappingImplementation$Dart.prototype.createDocument$member.call(this, namespaceURI, qualifiedName, doctype);
}
;
_DOMImplementationWrappingImplementation$Dart.prototype.createDocument$getter = function createDocument$getter(){
  return $bind(_DOMImplementationWrappingImplementation$Dart.prototype.createDocument$named, this);
}
;
_DOMImplementationWrappingImplementation$Dart._createDocument$$member_ = function(receiver, namespaceURI, qualifiedName, doctype){
  return native__DOMImplementationWrappingImplementation__createDocument(receiver, namespaceURI, qualifiedName, doctype);
}
;
_DOMImplementationWrappingImplementation$Dart._createDocument$$named_ = function($n, $o, receiver, namespaceURI, qualifiedName, doctype){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 4)
    $nsme();
  return _DOMImplementationWrappingImplementation$Dart._createDocument$$member_(receiver, namespaceURI, qualifiedName, doctype);
}
;
_DOMImplementationWrappingImplementation$Dart._createDocument$$getter_ = function _createDocument$$getter_(){
  return _DOMImplementationWrappingImplementation$Dart._createDocument$$named_;
}
;
_DOMImplementationWrappingImplementation$Dart.prototype.createDocumentType$member = function(qualifiedName, publicId, systemId){
  return _DOMImplementationWrappingImplementation$Dart._createDocumentType$$member_(this, qualifiedName, publicId, systemId);
}
;
_DOMImplementationWrappingImplementation$Dart.prototype.createDocumentType$named = function($n, $o, qualifiedName, publicId, systemId){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return _DOMImplementationWrappingImplementation$Dart.prototype.createDocumentType$member.call(this, qualifiedName, publicId, systemId);
}
;
_DOMImplementationWrappingImplementation$Dart.prototype.createDocumentType$getter = function createDocumentType$getter(){
  return $bind(_DOMImplementationWrappingImplementation$Dart.prototype.createDocumentType$named, this);
}
;
_DOMImplementationWrappingImplementation$Dart._createDocumentType$$member_ = function(receiver, qualifiedName, publicId, systemId){
  return native__DOMImplementationWrappingImplementation__createDocumentType(receiver, qualifiedName, publicId, systemId);
}
;
_DOMImplementationWrappingImplementation$Dart._createDocumentType$$named_ = function($n, $o, receiver, qualifiedName, publicId, systemId){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 4)
    $nsme();
  return _DOMImplementationWrappingImplementation$Dart._createDocumentType$$member_(receiver, qualifiedName, publicId, systemId);
}
;
_DOMImplementationWrappingImplementation$Dart._createDocumentType$$getter_ = function _createDocumentType$$getter_(){
  return _DOMImplementationWrappingImplementation$Dart._createDocumentType$$named_;
}
;
_DOMImplementationWrappingImplementation$Dart.prototype.createHTMLDocument$member = function(title){
  return _DOMImplementationWrappingImplementation$Dart._createHTMLDocument$$member_(this, title);
}
;
_DOMImplementationWrappingImplementation$Dart.prototype.createHTMLDocument$named = function($n, $o, title){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _DOMImplementationWrappingImplementation$Dart.prototype.createHTMLDocument$member.call(this, title);
}
;
_DOMImplementationWrappingImplementation$Dart.prototype.createHTMLDocument$getter = function createHTMLDocument$getter(){
  return $bind(_DOMImplementationWrappingImplementation$Dart.prototype.createHTMLDocument$named, this);
}
;
_DOMImplementationWrappingImplementation$Dart._createHTMLDocument$$member_ = function(receiver, title){
  return native__DOMImplementationWrappingImplementation__createHTMLDocument(receiver, title);
}
;
_DOMImplementationWrappingImplementation$Dart._createHTMLDocument$$named_ = function($n, $o, receiver, title){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DOMImplementationWrappingImplementation$Dart._createHTMLDocument$$member_(receiver, title);
}
;
_DOMImplementationWrappingImplementation$Dart._createHTMLDocument$$getter_ = function _createHTMLDocument$$getter_(){
  return _DOMImplementationWrappingImplementation$Dart._createHTMLDocument$$named_;
}
;
_DOMImplementationWrappingImplementation$Dart.prototype.hasFeature$member = function(feature, version){
  return _DOMImplementationWrappingImplementation$Dart._hasFeature$$member_(this, feature, version);
}
;
_DOMImplementationWrappingImplementation$Dart.prototype.hasFeature$named = function($n, $o, feature, version){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _DOMImplementationWrappingImplementation$Dart.prototype.hasFeature$member.call(this, feature, version);
}
;
_DOMImplementationWrappingImplementation$Dart.prototype.hasFeature$getter = function hasFeature$getter(){
  return $bind(_DOMImplementationWrappingImplementation$Dart.prototype.hasFeature$named, this);
}
;
_DOMImplementationWrappingImplementation$Dart._hasFeature$$member_ = function(receiver, feature, version){
  return native__DOMImplementationWrappingImplementation__hasFeature(receiver, feature, version);
}
;
_DOMImplementationWrappingImplementation$Dart._hasFeature$$named_ = function($n, $o, receiver, feature, version){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return _DOMImplementationWrappingImplementation$Dart._hasFeature$$member_(receiver, feature, version);
}
;
_DOMImplementationWrappingImplementation$Dart._hasFeature$$getter_ = function _hasFeature$$getter_(){
  return _DOMImplementationWrappingImplementation$Dart._hasFeature$$named_;
}
;
_DOMImplementationWrappingImplementation$Dart.prototype.typeName$named = function(){
  return this.typeName$getter().apply(this, arguments);
}
;
_DOMImplementationWrappingImplementation$Dart.prototype.typeName$getter = function(){
  return 'DOMImplementation';
}
;
