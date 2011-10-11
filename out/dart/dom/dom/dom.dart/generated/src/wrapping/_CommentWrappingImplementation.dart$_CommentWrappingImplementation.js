function _CommentWrappingImplementation$Dart(){
}

_CommentWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('_CommentWrappingImplementation$Dart'), _CommentWrappingImplementation$Dart.$RTTimplements);
}
;
_CommentWrappingImplementation$Dart.$RTTimplements = function(rtt){
  _CommentWrappingImplementation$Dart.$addTo(rtt);
}
;
_CommentWrappingImplementation$Dart.$addTo = function(target){
  var rtt = _CommentWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  _CharacterDataWrappingImplementation$Dart.$addTo(target);
  Comment$Dart.$addTo(target);
}
;
_CommentWrappingImplementation$Dart.prototype.$implements$_CommentWrappingImplementation$Dart = 1;
_CommentWrappingImplementation$Dart.prototype.$implements$Comment$Dart = 1;
_CommentWrappingImplementation$Dart.prototype.$implements$CharacterData$Dart = 1;
_CommentWrappingImplementation$Dart.prototype.$implements$Node$Dart = 1;
_CommentWrappingImplementation$Dart.prototype.$implements$EventTarget$Dart = 1;
_CommentWrappingImplementation$Dart.prototype.$implements$_CharacterDataWrappingImplementation$Dart = 1;
_CommentWrappingImplementation$Dart.prototype.$implements$_NodeWrappingImplementation$Dart = 1;
_CommentWrappingImplementation$Dart.prototype.$implements$DOMWrapperBase$Dart = 1;
_CommentWrappingImplementation$Dart.prototype.$implements$DOMType$Dart = 1;
_CommentWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(_CommentWrappingImplementation$Dart, _CharacterDataWrappingImplementation$Dart);
_CommentWrappingImplementation$Dart.$Constructor = function(){
  _CharacterDataWrappingImplementation$Dart.$Constructor.call(this);
}
;
_CommentWrappingImplementation$Dart.$Initializer = function(){
  _CharacterDataWrappingImplementation$Dart.$Initializer.call(this);
}
;
_CommentWrappingImplementation$Dart._CommentWrappingImplementation$$Factory = function(){
  var tmp$0 = new _CommentWrappingImplementation$Dart;
  tmp$0.$typeInfo = _CommentWrappingImplementation$Dart.$lookupRTT();
  _CommentWrappingImplementation$Dart.$Initializer.call(tmp$0);
  _CommentWrappingImplementation$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
_CommentWrappingImplementation$Dart.create__CommentWrappingImplementation$member = function(){
  return _CommentWrappingImplementation$Dart._CommentWrappingImplementation$$Factory();
}
;
_CommentWrappingImplementation$Dart.create__CommentWrappingImplementation$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return _CommentWrappingImplementation$Dart.create__CommentWrappingImplementation$member();
}
;
function native__CommentWrappingImplementation_create__CommentWrappingImplementation(){
  return _CommentWrappingImplementation$Dart.create__CommentWrappingImplementation$member();
}

_CommentWrappingImplementation$Dart.create__CommentWrappingImplementation$getter = function create__CommentWrappingImplementation$getter(){
  return _CommentWrappingImplementation$Dart.create__CommentWrappingImplementation$named;
}
;
_CommentWrappingImplementation$Dart.prototype.typeName$named = function(){
  return this.typeName$getter().apply(this, arguments);
}
;
_CommentWrappingImplementation$Dart.prototype.typeName$getter = function(){
  return 'Comment';
}
;
