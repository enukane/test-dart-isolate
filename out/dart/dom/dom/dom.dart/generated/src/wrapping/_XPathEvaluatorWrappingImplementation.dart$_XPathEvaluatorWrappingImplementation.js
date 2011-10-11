function _XPathEvaluatorWrappingImplementation$Dart(){
}

_XPathEvaluatorWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('_XPathEvaluatorWrappingImplementation$Dart'), _XPathEvaluatorWrappingImplementation$Dart.$RTTimplements);
}
;
_XPathEvaluatorWrappingImplementation$Dart.$RTTimplements = function(rtt){
  _XPathEvaluatorWrappingImplementation$Dart.$addTo(rtt);
}
;
_XPathEvaluatorWrappingImplementation$Dart.$addTo = function(target){
  var rtt = _XPathEvaluatorWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  DOMWrapperBase$Dart.$addTo(target);
  XPathEvaluator$Dart.$addTo(target);
}
;
_XPathEvaluatorWrappingImplementation$Dart.prototype.$implements$_XPathEvaluatorWrappingImplementation$Dart = 1;
_XPathEvaluatorWrappingImplementation$Dart.prototype.$implements$XPathEvaluator$Dart = 1;
_XPathEvaluatorWrappingImplementation$Dart.prototype.$implements$DOMWrapperBase$Dart = 1;
_XPathEvaluatorWrappingImplementation$Dart.prototype.$implements$DOMType$Dart = 1;
_XPathEvaluatorWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(_XPathEvaluatorWrappingImplementation$Dart, DOMWrapperBase$Dart);
_XPathEvaluatorWrappingImplementation$Dart.$Constructor = function(){
  DOMWrapperBase$Dart.$Constructor.call(this);
}
;
_XPathEvaluatorWrappingImplementation$Dart.$Initializer = function(){
  DOMWrapperBase$Dart.$Initializer.call(this);
}
;
_XPathEvaluatorWrappingImplementation$Dart._XPathEvaluatorWrappingImplementation$$Factory = function(){
  var tmp$0 = new _XPathEvaluatorWrappingImplementation$Dart;
  tmp$0.$typeInfo = _XPathEvaluatorWrappingImplementation$Dart.$lookupRTT();
  _XPathEvaluatorWrappingImplementation$Dart.$Initializer.call(tmp$0);
  _XPathEvaluatorWrappingImplementation$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
_XPathEvaluatorWrappingImplementation$Dart.create__XPathEvaluatorWrappingImplementation$member = function(){
  return _XPathEvaluatorWrappingImplementation$Dart._XPathEvaluatorWrappingImplementation$$Factory();
}
;
_XPathEvaluatorWrappingImplementation$Dart.create__XPathEvaluatorWrappingImplementation$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _XPathEvaluatorWrappingImplementation$Dart.create__XPathEvaluatorWrappingImplementation$member();
}
;
function native__XPathEvaluatorWrappingImplementation_create__XPathEvaluatorWrappingImplementation(){
  return _XPathEvaluatorWrappingImplementation$Dart.create__XPathEvaluatorWrappingImplementation$member();
}

_XPathEvaluatorWrappingImplementation$Dart.create__XPathEvaluatorWrappingImplementation$getter = function create__XPathEvaluatorWrappingImplementation$getter(){
  return _XPathEvaluatorWrappingImplementation$Dart.create__XPathEvaluatorWrappingImplementation$named;
}
;
_XPathEvaluatorWrappingImplementation$Dart.prototype.createExpression$member = function(expression, resolver){
  return _XPathEvaluatorWrappingImplementation$Dart._createExpression$$member_(this, expression, resolver);
}
;
_XPathEvaluatorWrappingImplementation$Dart.prototype.createExpression$named = function($n, $o, expression, resolver){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _XPathEvaluatorWrappingImplementation$Dart.prototype.createExpression$member.call(this, expression, resolver);
}
;
_XPathEvaluatorWrappingImplementation$Dart.prototype.createExpression$getter = function createExpression$getter(){
  return $bind(_XPathEvaluatorWrappingImplementation$Dart.prototype.createExpression$named, this);
}
;
_XPathEvaluatorWrappingImplementation$Dart._createExpression$$member_ = function(receiver, expression, resolver){
  return native__XPathEvaluatorWrappingImplementation__createExpression(receiver, expression, resolver);
}
;
_XPathEvaluatorWrappingImplementation$Dart._createExpression$$named_ = function($n, $o, receiver, expression, resolver){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return _XPathEvaluatorWrappingImplementation$Dart._createExpression$$member_(receiver, expression, resolver);
}
;
_XPathEvaluatorWrappingImplementation$Dart._createExpression$$getter_ = function _createExpression$$getter_(){
  return _XPathEvaluatorWrappingImplementation$Dart._createExpression$$named_;
}
;
_XPathEvaluatorWrappingImplementation$Dart.prototype.createNSResolver$member = function(nodeResolver){
  return _XPathEvaluatorWrappingImplementation$Dart._createNSResolver$$member_(this, nodeResolver);
}
;
_XPathEvaluatorWrappingImplementation$Dart.prototype.createNSResolver$named = function($n, $o, nodeResolver){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return _XPathEvaluatorWrappingImplementation$Dart.prototype.createNSResolver$member.call(this, nodeResolver);
}
;
_XPathEvaluatorWrappingImplementation$Dart.prototype.createNSResolver$getter = function createNSResolver$getter(){
  return $bind(_XPathEvaluatorWrappingImplementation$Dart.prototype.createNSResolver$named, this);
}
;
_XPathEvaluatorWrappingImplementation$Dart._createNSResolver$$member_ = function(receiver, nodeResolver){
  return native__XPathEvaluatorWrappingImplementation__createNSResolver(receiver, nodeResolver);
}
;
_XPathEvaluatorWrappingImplementation$Dart._createNSResolver$$named_ = function($n, $o, receiver, nodeResolver){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return _XPathEvaluatorWrappingImplementation$Dart._createNSResolver$$member_(receiver, nodeResolver);
}
;
_XPathEvaluatorWrappingImplementation$Dart._createNSResolver$$getter_ = function _createNSResolver$$getter_(){
  return _XPathEvaluatorWrappingImplementation$Dart._createNSResolver$$named_;
}
;
_XPathEvaluatorWrappingImplementation$Dart.prototype.evaluate$member = function(expression, contextNode, resolver, type, inResult){
  return _XPathEvaluatorWrappingImplementation$Dart._evaluate$$member_(this, expression, contextNode, resolver, type, inResult);
}
;
_XPathEvaluatorWrappingImplementation$Dart.prototype.evaluate$named = function($n, $o, expression, contextNode, resolver, type, inResult){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 5)
    $nsme();
  return _XPathEvaluatorWrappingImplementation$Dart.prototype.evaluate$member.call(this, expression, contextNode, resolver, type, inResult);
}
;
_XPathEvaluatorWrappingImplementation$Dart.prototype.evaluate$getter = function evaluate$getter(){
  return $bind(_XPathEvaluatorWrappingImplementation$Dart.prototype.evaluate$named, this);
}
;
_XPathEvaluatorWrappingImplementation$Dart._evaluate$$member_ = function(receiver, expression, contextNode, resolver, type, inResult){
  return native__XPathEvaluatorWrappingImplementation__evaluate(receiver, expression, contextNode, resolver, type, inResult);
}
;
_XPathEvaluatorWrappingImplementation$Dart._evaluate$$named_ = function($n, $o, receiver, expression, contextNode, resolver, type, inResult){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 6)
    $nsme();
  return _XPathEvaluatorWrappingImplementation$Dart._evaluate$$member_(receiver, expression, contextNode, resolver, type, inResult);
}
;
_XPathEvaluatorWrappingImplementation$Dart._evaluate$$getter_ = function _evaluate$$getter_(){
  return _XPathEvaluatorWrappingImplementation$Dart._evaluate$$named_;
}
;
_XPathEvaluatorWrappingImplementation$Dart.prototype.typeName$named = function(){
  return this.typeName$getter().apply(this, arguments);
}
;
_XPathEvaluatorWrappingImplementation$Dart.prototype.typeName$getter = function(){
  return 'XPathEvaluator';
}
;
