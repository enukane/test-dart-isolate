function MessageTraverser$Dart(){
}

MessageTraverser$Dart.$lookupRTT = function(){
  return RTT.create($cls('MessageTraverser$Dart'));
}
;
MessageTraverser$Dart.$addTo = function(target){
  var rtt = MessageTraverser$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
}
;
MessageTraverser$Dart.prototype.$implements$MessageTraverser$Dart = 1;
MessageTraverser$Dart.prototype.$implements$Object$Dart = 1;
MessageTraverser$Dart.$Constructor = function(){
  Object.$Constructor.call(this);
}
;
MessageTraverser$Dart.$Initializer = function(){
  Object.$Initializer.call(this);
}
;
MessageTraverser$Dart.MessageTraverser$$Factory = function(){
  var tmp$0 = new MessageTraverser$Dart;
  tmp$0.$typeInfo = MessageTraverser$Dart.$lookupRTT();
  MessageTraverser$Dart.$Initializer.call(tmp$0);
  MessageTraverser$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
MessageTraverser$Dart.isPrimitive$member = function(x){
  var tmp$0;
  return x == null || String.$instanceOf(x) || !!(tmp$0 = x , tmp$0 != null && tmp$0.$implements$num$Dart) || Boolean.$instanceOf(x);
}
;
MessageTraverser$Dart.isPrimitive$named = function($n, $o, x){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return MessageTraverser$Dart.isPrimitive$member(x);
}
;
MessageTraverser$Dart.isPrimitive$getter = function isPrimitive$getter(){
  return MessageTraverser$Dart.isPrimitive$named;
}
;
MessageTraverser$Dart.prototype.traverse$member = function(x){
  var tmp$0;
  if (MessageTraverser$Dart.isPrimitive$member(x)) {
    return this.visitPrimitive$member(x);
  }
  this._taggedObjects$$setter_(tmp$0 = ListFactory$Dart.List$$Factory(null, $Dart$Null)) , tmp$0;
  var result = $Dart$Null;
  try {
    result = this._dispatch$$member_(x);
  }
   finally {
    this._cleanup$$member_();
  }
  return result;
}
;
MessageTraverser$Dart.prototype.traverse$named = function($n, $o, x){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return MessageTraverser$Dart.prototype.traverse$member.call(this, x);
}
;
MessageTraverser$Dart.prototype.traverse$getter = function traverse$getter(){
  return $bind(MessageTraverser$Dart.prototype.traverse$named, this);
}
;
MessageTraverser$Dart.prototype._cleanup$$member_ = function(){
  var tmp$1, tmp$0;
  var len = this._taggedObjects$$getter_().length$getter();
  {
    var i = 0;
    for (; LT$operator(i, len); tmp$0 = i , (i = ADD$operator(tmp$0, 1) , tmp$0)) {
      this._clearAttachedInfo$$member_(this._taggedObjects$$getter_().INDEX$operator(i));
    }
  }
  this._taggedObjects$$setter_(tmp$1 = $Dart$Null) , tmp$1;
}
;
MessageTraverser$Dart.prototype._cleanup$$named_ = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return MessageTraverser$Dart.prototype._cleanup$$member_.call(this);
}
;
MessageTraverser$Dart.prototype._cleanup$$getter_ = function _cleanup$$getter_(){
  return $bind(MessageTraverser$Dart.prototype._cleanup$$named_, this);
}
;
MessageTraverser$Dart.prototype._attachInfo$$member_ = function(o, info){
  this._taggedObjects$$getter_().add$named(1, $noargs, o);
  this._setAttachedInfo$$member_(o, info);
}
;
MessageTraverser$Dart.prototype._attachInfo$$named_ = function($n, $o, o, info){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return MessageTraverser$Dart.prototype._attachInfo$$member_.call(this, o, info);
}
;
MessageTraverser$Dart.prototype._attachInfo$$getter_ = function _attachInfo$$getter_(){
  return $bind(MessageTraverser$Dart.prototype._attachInfo$$named_, this);
}
;
MessageTraverser$Dart.prototype._getInfo$$member_ = function(o){
  return this._getAttachedInfo$$member_(o);
}
;
MessageTraverser$Dart.prototype._getInfo$$named_ = function($n, $o, o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return MessageTraverser$Dart.prototype._getInfo$$member_.call(this, o);
}
;
MessageTraverser$Dart.prototype._getInfo$$getter_ = function _getInfo$$getter_(){
  return $bind(MessageTraverser$Dart.prototype._getInfo$$named_, this);
}
;
MessageTraverser$Dart.prototype._dispatch$$member_ = function(x){
  var tmp$1, tmp$2, tmp$3, tmp$4, tmp$0;
  if (MessageTraverser$Dart.isPrimitive$member(x)) {
    return this.visitPrimitive$member(x);
  }
  if (!!(tmp$0 = x , tmp$0 != null && tmp$0.$implements$List$Dart)) {
    return this.visitList$member(x);
  }
  if (!!(tmp$1 = x , tmp$1 != null && tmp$1.$implements$Map$Dart)) {
    return this.visitMap$member(x);
  }
  if (!!(tmp$2 = x , tmp$2 != null && tmp$2.$implements$SendPortImpl$Dart)) {
    return this.visitSendPort$member(x);
  }
  if (!!(tmp$3 = x , tmp$3 != null && tmp$3.$implements$ReceivePortImpl$Dart)) {
    return this.visitReceivePort$member(x);
  }
  if (!!(tmp$4 = x , tmp$4 != null && tmp$4.$implements$ReceivePortSingleShotImpl$Dart)) {
    return this.visitReceivePortSingleShot$member(x);
  }
  $Dart$ThrowException('Message serialization: Illegal value ' + $toString(x) + ' passed');
}
;
MessageTraverser$Dart.prototype._dispatch$$named_ = function($n, $o, x){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return MessageTraverser$Dart.prototype._dispatch$$member_.call(this, x);
}
;
MessageTraverser$Dart.prototype._dispatch$$getter_ = function _dispatch$$getter_(){
  return $bind(MessageTraverser$Dart.prototype._dispatch$$named_, this);
}
;
MessageTraverser$Dart.prototype.visitPrimitive$member = function(x){
}
;
MessageTraverser$Dart.prototype.visitPrimitive$named = function($n, $o, x){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return MessageTraverser$Dart.prototype.visitPrimitive$member.call(this, x);
}
;
MessageTraverser$Dart.prototype.visitPrimitive$getter = function visitPrimitive$getter(){
  return $bind(MessageTraverser$Dart.prototype.visitPrimitive$named, this);
}
;
MessageTraverser$Dart.prototype.visitList$member = function(x){
}
;
MessageTraverser$Dart.prototype.visitList$named = function($n, $o, x){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return MessageTraverser$Dart.prototype.visitList$member.call(this, x);
}
;
MessageTraverser$Dart.prototype.visitList$getter = function visitList$getter(){
  return $bind(MessageTraverser$Dart.prototype.visitList$named, this);
}
;
MessageTraverser$Dart.prototype.visitMap$member = function(x){
}
;
MessageTraverser$Dart.prototype.visitMap$named = function($n, $o, x){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return MessageTraverser$Dart.prototype.visitMap$member.call(this, x);
}
;
MessageTraverser$Dart.prototype.visitMap$getter = function visitMap$getter(){
  return $bind(MessageTraverser$Dart.prototype.visitMap$named, this);
}
;
MessageTraverser$Dart.prototype.visitSendPort$member = function(x){
}
;
MessageTraverser$Dart.prototype.visitSendPort$named = function($n, $o, x){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return MessageTraverser$Dart.prototype.visitSendPort$member.call(this, x);
}
;
MessageTraverser$Dart.prototype.visitSendPort$getter = function visitSendPort$getter(){
  return $bind(MessageTraverser$Dart.prototype.visitSendPort$named, this);
}
;
MessageTraverser$Dart.prototype.visitReceivePort$member = function(x){
}
;
MessageTraverser$Dart.prototype.visitReceivePort$named = function($n, $o, x){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return MessageTraverser$Dart.prototype.visitReceivePort$member.call(this, x);
}
;
MessageTraverser$Dart.prototype.visitReceivePort$getter = function visitReceivePort$getter(){
  return $bind(MessageTraverser$Dart.prototype.visitReceivePort$named, this);
}
;
MessageTraverser$Dart.prototype.visitReceivePortSingleShot$member = function(x){
}
;
MessageTraverser$Dart.prototype.visitReceivePortSingleShot$named = function($n, $o, x){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return MessageTraverser$Dart.prototype.visitReceivePortSingleShot$member.call(this, x);
}
;
MessageTraverser$Dart.prototype.visitReceivePortSingleShot$getter = function visitReceivePortSingleShot$getter(){
  return $bind(MessageTraverser$Dart.prototype.visitReceivePortSingleShot$named, this);
}
;
MessageTraverser$Dart.prototype._taggedObjects$$named_ = function(){
  return this._taggedObjects$$getter_().apply(this, arguments);
}
;
MessageTraverser$Dart.prototype._taggedObjects$$getter_ = function(){
  return this._taggedObjects$$field_;
}
;
MessageTraverser$Dart.prototype._taggedObjects$$setter_ = function(tmp$0){
  this._taggedObjects$$field_ = tmp$0;
}
;
MessageTraverser$Dart.prototype._clearAttachedInfo$$member_ = function(obj){
  return native_MessageTraverser__clearAttachedInfo.call(this, obj);
}
;
MessageTraverser$Dart.prototype._clearAttachedInfo$$named_ = function($n, $o, obj){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return MessageTraverser$Dart.prototype._clearAttachedInfo$$member_.call(this, obj);
}
;
MessageTraverser$Dart.prototype._clearAttachedInfo$$getter_ = function _clearAttachedInfo$$getter_(){
  return $bind(MessageTraverser$Dart.prototype._clearAttachedInfo$$named_, this);
}
;
MessageTraverser$Dart.prototype._setAttachedInfo$$member_ = function(o, info){
  return native_MessageTraverser__setAttachedInfo.call(this, o, info);
}
;
MessageTraverser$Dart.prototype._setAttachedInfo$$named_ = function($n, $o, o, info){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return MessageTraverser$Dart.prototype._setAttachedInfo$$member_.call(this, o, info);
}
;
MessageTraverser$Dart.prototype._setAttachedInfo$$getter_ = function _setAttachedInfo$$getter_(){
  return $bind(MessageTraverser$Dart.prototype._setAttachedInfo$$named_, this);
}
;
MessageTraverser$Dart.prototype._getAttachedInfo$$member_ = function(o){
  return native_MessageTraverser__getAttachedInfo.call(this, o);
}
;
MessageTraverser$Dart.prototype._getAttachedInfo$$named_ = function($n, $o, o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return MessageTraverser$Dart.prototype._getAttachedInfo$$member_.call(this, o);
}
;
MessageTraverser$Dart.prototype._getAttachedInfo$$getter_ = function _getAttachedInfo$$getter_(){
  return $bind(MessageTraverser$Dart.prototype._getAttachedInfo$$named_, this);
}
;
