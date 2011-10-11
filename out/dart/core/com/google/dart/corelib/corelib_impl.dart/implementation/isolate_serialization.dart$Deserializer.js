function Deserializer$Dart(){
}

Deserializer$Dart.$lookupRTT = function(){
  return RTT.create($cls('Deserializer$Dart'));
}
;
Deserializer$Dart.$addTo = function(target){
  var rtt = Deserializer$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
}
;
Deserializer$Dart.prototype.$implements$Deserializer$Dart = 1;
Deserializer$Dart.prototype.$implements$Object$Dart = 1;
Deserializer$Dart.$Constructor = function(){
  Object.$Constructor.call(this);
}
;
Deserializer$Dart.$Initializer = function(){
  Object.$Initializer.call(this);
}
;
Deserializer$Dart.Deserializer$$Factory = function(){
  var tmp$0 = new Deserializer$Dart;
  tmp$0.$typeInfo = Deserializer$Dart.$lookupRTT();
  Deserializer$Dart.$Initializer.call(tmp$0);
  Deserializer$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
Deserializer$Dart.isPrimitive$member = function(x){
  var tmp$0;
  return x == null || String.$instanceOf(x) || !!(tmp$0 = x , tmp$0 != null && tmp$0.$implements$num$Dart) || Boolean.$instanceOf(x);
}
;
Deserializer$Dart.isPrimitive$named = function($n, $o, x){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return Deserializer$Dart.isPrimitive$member(x);
}
;
Deserializer$Dart.isPrimitive$getter = function isPrimitive$getter(){
  return Deserializer$Dart.isPrimitive$named;
}
;
Deserializer$Dart.prototype.deserialize$member = function(x){
  var tmp$0;
  if (Deserializer$Dart.isPrimitive$member(x)) {
    return x;
  }
  this._deserialized$$setter_(tmp$0 = HashMapImplementation$Dart.HashMapImplementation$$Factory(HashMapImplementation$Dart.$lookupRTT())) , tmp$0;
  return this._deserializeHelper$$member_(x);
}
;
Deserializer$Dart.prototype.deserialize$named = function($n, $o, x){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return Deserializer$Dart.prototype.deserialize$member.call(this, x);
}
;
Deserializer$Dart.prototype.deserialize$getter = function deserialize$getter(){
  return $bind(Deserializer$Dart.prototype.deserialize$named, this);
}
;
Deserializer$Dart.prototype._deserializeHelper$$member_ = function(x){
  if (Deserializer$Dart.isPrimitive$member(x)) {
    return x;
  }
  assert(Deserializer$Dart._isJsArray$$member_(x));
  switch (Deserializer$Dart._jsArrayIndex$$member_(x, 0)) {
    case 'ref':
      return this._deserializeRef$$member_(x);
    case 'list':
      return this._deserializeList$$member_(x);
    case 'map':
      return this._deserializeMap$$member_(x);
    case 'sendport':
      return this._deserializeSendPort$$member_(x);
    default:{
        $Dart$ThrowException('Unexpected serialized object');
      }

  }
}
;
Deserializer$Dart.prototype._deserializeHelper$$named_ = function($n, $o, x){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return Deserializer$Dart.prototype._deserializeHelper$$member_.call(this, x);
}
;
Deserializer$Dart.prototype._deserializeHelper$$getter_ = function _deserializeHelper$$getter_(){
  return $bind(Deserializer$Dart.prototype._deserializeHelper$$named_, this);
}
;
Deserializer$Dart.prototype._deserializeRef$$member_ = function(x){
  var id = Deserializer$Dart._jsArrayIndex$$member_(x, 1);
  var result = this._deserialized$$getter_().INDEX$operator(id);
  assert(result != null);
  return result;
}
;
Deserializer$Dart.prototype._deserializeRef$$named_ = function($n, $o, x){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return Deserializer$Dart.prototype._deserializeRef$$member_.call(this, x);
}
;
Deserializer$Dart.prototype._deserializeRef$$getter_ = function _deserializeRef$$getter_(){
  return $bind(Deserializer$Dart.prototype._deserializeRef$$named_, this);
}
;
Deserializer$Dart.prototype._deserializeList$$member_ = function(x){
  var tmp$1, tmp$2, tmp$0;
  var id = Deserializer$Dart._jsArrayIndex$$member_(x, 1);
  var jsArray = Deserializer$Dart._jsArrayIndex$$member_(x, 2);
  assert(Deserializer$Dart._isJsArray$$member_(jsArray));
  var dartList = this._jsArrayToDartListNoCopy$$member_(jsArray);
  this._deserialized$$getter_().ASSIGN_INDEX$operator(id, tmp$0 = dartList) , tmp$0;
  var len = dartList.length$getter();
  {
    var i = 0;
    for (; LT$operator(i, len); tmp$1 = i , (i = ADD$operator(tmp$1, 1) , tmp$1)) {
      dartList.ASSIGN_INDEX$operator(i, tmp$2 = this._deserializeHelper$$member_(dartList.INDEX$operator(i))) , tmp$2;
    }
  }
  return dartList;
}
;
Deserializer$Dart.prototype._deserializeList$$named_ = function($n, $o, x){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return Deserializer$Dart.prototype._deserializeList$$member_.call(this, x);
}
;
Deserializer$Dart.prototype._deserializeList$$getter_ = function _deserializeList$$getter_(){
  return $bind(Deserializer$Dart.prototype._deserializeList$$named_, this);
}
;
Deserializer$Dart.prototype._deserializeMap$$member_ = function(x){
  var tmp$1, tmp$2, tmp$0;
  var result = HashMapImplementation$Dart.HashMapImplementation$$Factory(HashMapImplementation$Dart.$lookupRTT());
  var id = Deserializer$Dart._jsArrayIndex$$member_(x, 1);
  this._deserialized$$getter_().ASSIGN_INDEX$operator(id, tmp$0 = result) , tmp$0;
  var keys = Deserializer$Dart._jsArrayIndex$$member_(x, 2);
  var values = Deserializer$Dart._jsArrayIndex$$member_(x, 3);
  assert(Deserializer$Dart._isJsArray$$member_(keys));
  assert(Deserializer$Dart._isJsArray$$member_(values));
  var len = Deserializer$Dart._jsArrayLength$$member_(keys);
  assert(EQ$operator(len, Deserializer$Dart._jsArrayLength$$member_(values)));
  {
    var i = 0;
    for (; LT$operator(i, len); tmp$1 = i , (i = ADD$operator(tmp$1, 1) , tmp$1)) {
      var key = this._deserializeHelper$$member_(Deserializer$Dart._jsArrayIndex$$member_(keys, i));
      var value = this._deserializeHelper$$member_(Deserializer$Dart._jsArrayIndex$$member_(values, i));
      result.ASSIGN_INDEX$operator(key, tmp$2 = value) , tmp$2;
    }
  }
  return result;
}
;
Deserializer$Dart.prototype._deserializeMap$$named_ = function($n, $o, x){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return Deserializer$Dart.prototype._deserializeMap$$member_.call(this, x);
}
;
Deserializer$Dart.prototype._deserializeMap$$getter_ = function _deserializeMap$$getter_(){
  return $bind(Deserializer$Dart.prototype._deserializeMap$$named_, this);
}
;
Deserializer$Dart.prototype._deserializeSendPort$$member_ = function(x){
  var workerId = Deserializer$Dart._jsArrayIndex$$member_(x, 1);
  var isolateId = Deserializer$Dart._jsArrayIndex$$member_(x, 2);
  var receivePortId = Deserializer$Dart._jsArrayIndex$$member_(x, 3);
  return SendPortImpl$Dart.SendPortImpl$$Factory(workerId, isolateId, receivePortId);
}
;
Deserializer$Dart.prototype._deserializeSendPort$$named_ = function($n, $o, x){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return Deserializer$Dart.prototype._deserializeSendPort$$member_.call(this, x);
}
;
Deserializer$Dart.prototype._deserializeSendPort$$getter_ = function _deserializeSendPort$$getter_(){
  return $bind(Deserializer$Dart.prototype._deserializeSendPort$$named_, this);
}
;
Deserializer$Dart.prototype._jsArrayToDartListNoCopy$$member_ = function(a){
  var tmp$0;
  assert(!!(tmp$0 = a , tmp$0 != null && tmp$0.$implements$List$Dart));
  return a;
}
;
Deserializer$Dart.prototype._jsArrayToDartListNoCopy$$named_ = function($n, $o, a){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return Deserializer$Dart.prototype._jsArrayToDartListNoCopy$$member_.call(this, a);
}
;
Deserializer$Dart.prototype._jsArrayToDartListNoCopy$$getter_ = function _jsArrayToDartListNoCopy$$getter_(){
  return $bind(Deserializer$Dart.prototype._jsArrayToDartListNoCopy$$named_, this);
}
;
Deserializer$Dart.prototype._deserialized$$named_ = function(){
  return this._deserialized$$getter_().apply(this, arguments);
}
;
Deserializer$Dart.prototype._deserialized$$getter_ = function(){
  return this._deserialized$$field_;
}
;
Deserializer$Dart.prototype._deserialized$$setter_ = function(tmp$0){
  this._deserialized$$field_ = tmp$0;
}
;
Deserializer$Dart._isJsArray$$member_ = function(x){
  return native_Deserializer__isJsArray(x);
}
;
Deserializer$Dart._isJsArray$$named_ = function($n, $o, x){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return Deserializer$Dart._isJsArray$$member_(x);
}
;
Deserializer$Dart._isJsArray$$getter_ = function _isJsArray$$getter_(){
  return Deserializer$Dart._isJsArray$$named_;
}
;
Deserializer$Dart._jsArrayIndex$$member_ = function(x, index){
  return native_Deserializer__jsArrayIndex(x, index);
}
;
Deserializer$Dart._jsArrayIndex$$named_ = function($n, $o, x, index){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return Deserializer$Dart._jsArrayIndex$$member_(x, index);
}
;
Deserializer$Dart._jsArrayIndex$$getter_ = function _jsArrayIndex$$getter_(){
  return Deserializer$Dart._jsArrayIndex$$named_;
}
;
Deserializer$Dart._jsArrayLength$$member_ = function(x){
  return native_Deserializer__jsArrayLength(x);
}
;
Deserializer$Dart._jsArrayLength$$named_ = function($n, $o, x){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return Deserializer$Dart._jsArrayLength$$member_(x);
}
;
Deserializer$Dart._jsArrayLength$$getter_ = function _jsArrayLength$$getter_(){
  return Deserializer$Dart._jsArrayLength$$named_;
}
;
