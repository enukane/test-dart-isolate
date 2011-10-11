function Serializer$Dart(){
}

Serializer$Dart.$lookupRTT = function(){
  return RTT.create($cls('Serializer$Dart'), Serializer$Dart.$RTTimplements);
}
;
Serializer$Dart.$RTTimplements = function(rtt){
  Serializer$Dart.$addTo(rtt);
}
;
Serializer$Dart.$addTo = function(target){
  var rtt = Serializer$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  MessageTraverser$Dart.$addTo(target);
}
;
Serializer$Dart.prototype.$implements$Serializer$Dart = 1;
Serializer$Dart.prototype.$implements$MessageTraverser$Dart = 1;
Serializer$Dart.prototype.$implements$Object$Dart = 1;
$inherits(Serializer$Dart, MessageTraverser$Dart);
Serializer$Dart.$Constructor = function(){
  MessageTraverser$Dart.$Constructor.call(this);
}
;
Serializer$Dart.$Initializer = function(){
  MessageTraverser$Dart.$Initializer.call(this);
  this._nextFreeRefId$$field_ = 0;
}
;
Serializer$Dart.Serializer$$Factory = function(){
  var tmp$0 = new Serializer$Dart;
  tmp$0.$typeInfo = Serializer$Dart.$lookupRTT();
  Serializer$Dart.$Initializer.call(tmp$0);
  Serializer$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
Serializer$Dart.prototype.visitPrimitive$member = function(x){
  return x;
}
;
Serializer$Dart.prototype.visitPrimitive$named = function($n, $o, x){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return Serializer$Dart.prototype.visitPrimitive$member.call(this, x);
}
;
Serializer$Dart.prototype.visitPrimitive$getter = function visitPrimitive$getter(){
  return $bind(Serializer$Dart.prototype.visitPrimitive$named, this);
}
;
Serializer$Dart.prototype.visitList$member = function(list){
  var tmp$1, tmp$0;
  var copyId = this._getInfo$$member_(list);
  if (copyId != null) {
    return this._makeRef$$member_(copyId);
  }
  var id = (tmp$0 = this._nextFreeRefId$$getter_() , (this._nextFreeRefId$$setter_(tmp$1 = ADD$operator(tmp$0, 1)) , tmp$1 , tmp$0));
  this._attachInfo$$member_(list, id);
  var jsArray = this._serializeDartListIntoNewJsArray$$member_(list);
  return Serializer$Dart._dartListToJsArrayNoCopy$$member_(RTT.setTypeInfo(['list', id, jsArray], Array.$lookupRTT()));
}
;
Serializer$Dart.prototype.visitList$named = function($n, $o, list){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return Serializer$Dart.prototype.visitList$member.call(this, list);
}
;
Serializer$Dart.prototype.visitList$getter = function visitList$getter(){
  return $bind(Serializer$Dart.prototype.visitList$named, this);
}
;
Serializer$Dart.prototype.visitMap$member = function(map){
  var tmp$1, tmp$0;
  var copyId = this._getInfo$$member_(map);
  if (copyId != null) {
    return this._makeRef$$member_(copyId);
  }
  var id = (tmp$0 = this._nextFreeRefId$$getter_() , (this._nextFreeRefId$$setter_(tmp$1 = ADD$operator(tmp$0, 1)) , tmp$1 , tmp$0));
  this._attachInfo$$member_(map, id);
  var keys = this._serializeDartListIntoNewJsArray$$member_(map.getKeys$named(0, $noargs));
  var values = this._serializeDartListIntoNewJsArray$$member_(map.getValues$named(0, $noargs));
  return Serializer$Dart._dartListToJsArrayNoCopy$$member_(RTT.setTypeInfo(['map', id, keys, values], Array.$lookupRTT()));
}
;
Serializer$Dart.prototype.visitMap$named = function($n, $o, map){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return Serializer$Dart.prototype.visitMap$member.call(this, map);
}
;
Serializer$Dart.prototype.visitMap$getter = function visitMap$getter(){
  return $bind(Serializer$Dart.prototype.visitMap$named, this);
}
;
Serializer$Dart.prototype.visitSendPort$member = function(port){
  return Serializer$Dart._dartListToJsArrayNoCopy$$member_(RTT.setTypeInfo(['sendport', port._workerId$$getter_(), port._isolateId$$getter_(), port._receivePortId$$getter_()], Array.$lookupRTT()));
}
;
Serializer$Dart.prototype.visitSendPort$named = function($n, $o, port){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return Serializer$Dart.prototype.visitSendPort$member.call(this, port);
}
;
Serializer$Dart.prototype.visitSendPort$getter = function visitSendPort$getter(){
  return $bind(Serializer$Dart.prototype.visitSendPort$named, this);
}
;
Serializer$Dart.prototype.visitReceivePort$member = function(port){
  return this.visitSendPort$member(port.toSendPort$named(0, $noargs));
  ;
}
;
Serializer$Dart.prototype.visitReceivePort$named = function($n, $o, port){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return Serializer$Dart.prototype.visitReceivePort$member.call(this, port);
}
;
Serializer$Dart.prototype.visitReceivePort$getter = function visitReceivePort$getter(){
  return $bind(Serializer$Dart.prototype.visitReceivePort$named, this);
}
;
Serializer$Dart.prototype.visitReceivePortSingleShot$member = function(port){
  return this.visitSendPort$member(port.toSendPort$named(0, $noargs));
}
;
Serializer$Dart.prototype.visitReceivePortSingleShot$named = function($n, $o, port){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return Serializer$Dart.prototype.visitReceivePortSingleShot$member.call(this, port);
}
;
Serializer$Dart.prototype.visitReceivePortSingleShot$getter = function visitReceivePortSingleShot$getter(){
  return $bind(Serializer$Dart.prototype.visitReceivePortSingleShot$named, this);
}
;
Serializer$Dart.prototype._serializeDartListIntoNewJsArray$$member_ = function(list){
  var tmp$0;
  var len = list.length$getter();
  var jsArray = Serializer$Dart._newJsArray$$member_(len);
  {
    var i = 0;
    for (; LT$operator(i, len); tmp$0 = i , (i = ADD$operator(tmp$0, 1) , tmp$0)) {
      Serializer$Dart._jsArrayIndexSet$$member_(jsArray, i, this._dispatch$$member_(list.INDEX$operator(i)));
    }
  }
  return jsArray;
}
;
Serializer$Dart.prototype._serializeDartListIntoNewJsArray$$named_ = function($n, $o, list){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return Serializer$Dart.prototype._serializeDartListIntoNewJsArray$$member_.call(this, list);
}
;
Serializer$Dart.prototype._serializeDartListIntoNewJsArray$$getter_ = function _serializeDartListIntoNewJsArray$$getter_(){
  return $bind(Serializer$Dart.prototype._serializeDartListIntoNewJsArray$$named_, this);
}
;
Serializer$Dart.prototype._makeRef$$member_ = function(id){
  return Serializer$Dart._dartListToJsArrayNoCopy$$member_(RTT.setTypeInfo(['ref', id], Array.$lookupRTT()));
}
;
Serializer$Dart.prototype._makeRef$$named_ = function($n, $o, id){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return Serializer$Dart.prototype._makeRef$$member_.call(this, id);
}
;
Serializer$Dart.prototype._makeRef$$getter_ = function _makeRef$$getter_(){
  return $bind(Serializer$Dart.prototype._makeRef$$named_, this);
}
;
Serializer$Dart.prototype._nextFreeRefId$$named_ = function(){
  return this._nextFreeRefId$$getter_().apply(this, arguments);
}
;
Serializer$Dart.prototype._nextFreeRefId$$getter_ = function(){
  return this._nextFreeRefId$$field_;
}
;
Serializer$Dart.prototype._nextFreeRefId$$setter_ = function(tmp$0){
  this._nextFreeRefId$$field_ = tmp$0;
}
;
Serializer$Dart._newJsArray$$member_ = function(len){
  return native_Serializer__newJsArray(len);
}
;
Serializer$Dart._newJsArray$$named_ = function($n, $o, len){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return Serializer$Dart._newJsArray$$member_(len);
}
;
Serializer$Dart._newJsArray$$getter_ = function _newJsArray$$getter_(){
  return Serializer$Dart._newJsArray$$named_;
}
;
Serializer$Dart._jsArrayIndexSet$$member_ = function(jsArray, index, val){
  return native_Serializer__jsArrayIndexSet(jsArray, index, val);
}
;
Serializer$Dart._jsArrayIndexSet$$named_ = function($n, $o, jsArray, index, val){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return Serializer$Dart._jsArrayIndexSet$$member_(jsArray, index, val);
}
;
Serializer$Dart._jsArrayIndexSet$$getter_ = function _jsArrayIndexSet$$getter_(){
  return Serializer$Dart._jsArrayIndexSet$$named_;
}
;
Serializer$Dart._dartListToJsArrayNoCopy$$member_ = function(list){
  return native_Serializer__dartListToJsArrayNoCopy(list);
}
;
Serializer$Dart._dartListToJsArrayNoCopy$$named_ = function($n, $o, list){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return Serializer$Dart._dartListToJsArrayNoCopy$$member_(list);
}
;
Serializer$Dart._dartListToJsArrayNoCopy$$getter_ = function _dartListToJsArrayNoCopy$$getter_(){
  return Serializer$Dart._dartListToJsArrayNoCopy$$named_;
}
;
