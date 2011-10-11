function html623afa$ElementAttributeMap$Dart(){
}

html623afa$ElementAttributeMap$Dart.$lookupRTT = function(){
  return RTT.create($cls('html623afa$ElementAttributeMap$Dart'), html623afa$ElementAttributeMap$Dart.$RTTimplements);
}
;
html623afa$ElementAttributeMap$Dart.$RTTimplements = function(rtt){
  html623afa$ElementAttributeMap$Dart.$addTo(rtt);
}
;
html623afa$ElementAttributeMap$Dart.$addTo = function(target){
  var rtt = html623afa$ElementAttributeMap$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  Map$Dart.$addTo(target, [String$Dart.$lookupRTT(), String$Dart.$lookupRTT()]);
}
;
html623afa$ElementAttributeMap$Dart.prototype.$implements$html623afa$ElementAttributeMap$Dart = 1;
html623afa$ElementAttributeMap$Dart.prototype.$implements$Map$Dart = 1;
html623afa$ElementAttributeMap$Dart.prototype.$implements$Object$Dart = 1;
html623afa$ElementAttributeMap$Dart._wrap$html623afa$$Constructor_ = function(_element){
  Object.$Constructor.call(this);
}
;
html623afa$ElementAttributeMap$Dart._wrap$html623afa$$Initializer_ = function(_element){
  Object.$Initializer.call(this);
  this._element$html623afa$$field_ = _element;
}
;
html623afa$ElementAttributeMap$Dart.ElementAttributeMap$_wrap$19$html623afa$$Factory_ = function(_element){
  var tmp$0 = new html623afa$ElementAttributeMap$Dart;
  tmp$0.$typeInfo = html623afa$ElementAttributeMap$Dart.$lookupRTT();
  html623afa$ElementAttributeMap$Dart._wrap$html623afa$$Initializer_.call(tmp$0, _element);
  html623afa$ElementAttributeMap$Dart._wrap$html623afa$$Constructor_.call(tmp$0, _element);
  return tmp$0;
}
;
html623afa$ElementAttributeMap$Dart.prototype._element$html623afa$$named_ = function(){
  return this._element$html623afa$$getter_().apply(this, arguments);
}
;
html623afa$ElementAttributeMap$Dart.prototype._element$html623afa$$getter_ = function(){
  return this._element$html623afa$$field_;
}
;
html623afa$ElementAttributeMap$Dart.prototype.containsValue$member = function(value){
  var tmp$0;
  var attributes = this._element$html623afa$$getter_().attributes$getter();
  {
    var i = 0;
    var len = attributes.length$getter();
    for (; LT$operator(i, len); tmp$0 = i , (i = ADD$operator(tmp$0, 1) , tmp$0)) {
      if (EQ$operator(value, attributes.item$named(1, $noargs, i).value$getter())) {
        return true;
      }
    }
  }
  return false;
}
;
html623afa$ElementAttributeMap$Dart.prototype.containsValue$named = function($n, $o, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$ElementAttributeMap$Dart.prototype.containsValue$member.call(this, value);
}
;
html623afa$ElementAttributeMap$Dart.prototype.containsValue$getter = function containsValue$getter(){
  return $bind(html623afa$ElementAttributeMap$Dart.prototype.containsValue$named, this);
}
;
html623afa$ElementAttributeMap$Dart.prototype.containsKey$member = function(key){
  return this._element$html623afa$$getter_().hasAttribute$named(1, $noargs, key);
}
;
html623afa$ElementAttributeMap$Dart.prototype.containsKey$named = function($n, $o, key){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$ElementAttributeMap$Dart.prototype.containsKey$member.call(this, key);
}
;
html623afa$ElementAttributeMap$Dart.prototype.containsKey$getter = function containsKey$getter(){
  return $bind(html623afa$ElementAttributeMap$Dart.prototype.containsKey$named, this);
}
;
html623afa$ElementAttributeMap$Dart.prototype.INDEX$operator = function(key){
  return this._element$html623afa$$getter_().getAttribute$named(1, $noargs, key);
}
;
html623afa$ElementAttributeMap$Dart.prototype.ASSIGN_INDEX$operator = function(key, value){
  this._element$html623afa$$getter_().setAttribute$named(2, $noargs, key, value);
}
;
html623afa$ElementAttributeMap$Dart.prototype.putIfAbsent$member = function(key, ifAbsent){
  var tmp$0;
  if (!this.containsKey$member(key)) {
    this.ASSIGN_INDEX$operator(key, tmp$0 = ifAbsent(0, $noargs)) , tmp$0;
  }
}
;
html623afa$ElementAttributeMap$Dart.prototype.putIfAbsent$named = function($n, $o, key, ifAbsent){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return html623afa$ElementAttributeMap$Dart.prototype.putIfAbsent$member.call(this, key, ifAbsent);
}
;
html623afa$ElementAttributeMap$Dart.prototype.putIfAbsent$getter = function putIfAbsent$getter(){
  return $bind(html623afa$ElementAttributeMap$Dart.prototype.putIfAbsent$named, this);
}
;
html623afa$ElementAttributeMap$Dart.prototype.remove$member = function(key){
  this._element$html623afa$$getter_().removeAttribute$named(1, $noargs, key);
}
;
html623afa$ElementAttributeMap$Dart.prototype.remove$named = function($n, $o, key){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$ElementAttributeMap$Dart.prototype.remove$member.call(this, key);
}
;
html623afa$ElementAttributeMap$Dart.prototype.remove$getter = function remove$getter(){
  return $bind(html623afa$ElementAttributeMap$Dart.prototype.remove$named, this);
}
;
html623afa$ElementAttributeMap$Dart.prototype.clear$member = function(){
  var tmp$0;
  var attributes = this._element$html623afa$$getter_().attributes$getter();
  {
    var i = SUB$operator(attributes.length$getter(), 1);
    for (; GTE$operator(i, 0); tmp$0 = i , (i = SUB$operator(tmp$0, 1) , tmp$0)) {
      this._element$html623afa$$getter_().removeAttribute$named(1, $noargs, attributes.item$named(1, $noargs, i).name$getter());
    }
  }
}
;
html623afa$ElementAttributeMap$Dart.prototype.clear$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return html623afa$ElementAttributeMap$Dart.prototype.clear$member.call(this);
}
;
html623afa$ElementAttributeMap$Dart.prototype.clear$getter = function clear$getter(){
  return $bind(html623afa$ElementAttributeMap$Dart.prototype.clear$named, this);
}
;
html623afa$ElementAttributeMap$Dart.prototype.forEach$member = function(f){
  var tmp$0;
  var attributes = this._element$html623afa$$getter_().attributes$getter();
  {
    var i = 0;
    var len = attributes.length$getter();
    for (; LT$operator(i, len); tmp$0 = i , (i = ADD$operator(tmp$0, 1) , tmp$0)) {
      var item = attributes.item$named(1, $noargs, i);
      f(2, $noargs, item.name$getter(), item.value$getter());
    }
  }
}
;
html623afa$ElementAttributeMap$Dart.prototype.forEach$named = function($n, $o, f){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$ElementAttributeMap$Dart.prototype.forEach$member.call(this, f);
}
;
html623afa$ElementAttributeMap$Dart.prototype.forEach$getter = function forEach$getter(){
  return $bind(html623afa$ElementAttributeMap$Dart.prototype.forEach$named, this);
}
;
html623afa$ElementAttributeMap$Dart.prototype.getKeys$member = function(){
  var tmp$1, tmp$0;
  var attributes = this._element$html623afa$$getter_().attributes$getter();
  var keys = ListFactory$Dart.List$$Factory([String$Dart.$lookupRTT()], attributes.length$getter());
  {
    var i = 0;
    var len = attributes.length$getter();
    for (; LT$operator(i, len); tmp$0 = i , (i = ADD$operator(tmp$0, 1) , tmp$0)) {
      keys.ASSIGN_INDEX$operator(i, tmp$1 = attributes.item$named(1, $noargs, i).name$getter()) , tmp$1;
    }
  }
  return keys;
}
;
html623afa$ElementAttributeMap$Dart.prototype.getKeys$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return html623afa$ElementAttributeMap$Dart.prototype.getKeys$member.call(this);
}
;
html623afa$ElementAttributeMap$Dart.prototype.getKeys$getter = function getKeys$getter(){
  return $bind(html623afa$ElementAttributeMap$Dart.prototype.getKeys$named, this);
}
;
html623afa$ElementAttributeMap$Dart.prototype.getValues$member = function(){
  var tmp$1, tmp$0;
  var attributes = this._element$html623afa$$getter_().attributes$getter();
  var values = ListFactory$Dart.List$$Factory([String$Dart.$lookupRTT()], attributes.length$getter());
  {
    var i = 0;
    var len = attributes.length$getter();
    for (; LT$operator(i, len); tmp$0 = i , (i = ADD$operator(tmp$0, 1) , tmp$0)) {
      values.ASSIGN_INDEX$operator(i, tmp$1 = attributes.item$named(1, $noargs, i).value$getter()) , tmp$1;
    }
  }
  return values;
}
;
html623afa$ElementAttributeMap$Dart.prototype.getValues$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return html623afa$ElementAttributeMap$Dart.prototype.getValues$member.call(this);
}
;
html623afa$ElementAttributeMap$Dart.prototype.getValues$getter = function getValues$getter(){
  return $bind(html623afa$ElementAttributeMap$Dart.prototype.getValues$named, this);
}
;
html623afa$ElementAttributeMap$Dart.prototype.length$named = function(){
  return this.length$getter().apply(this, arguments);
}
;
html623afa$ElementAttributeMap$Dart.prototype.length$getter = function(){
  return this._element$html623afa$$getter_().attributes$getter().length$getter();
}
;
html623afa$ElementAttributeMap$Dart.prototype.isEmpty$member = function(){
  return !this._element$html623afa$$getter_().hasAttributes$named(0, $noargs);
}
;
html623afa$ElementAttributeMap$Dart.prototype.isEmpty$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return html623afa$ElementAttributeMap$Dart.prototype.isEmpty$member.call(this);
}
;
html623afa$ElementAttributeMap$Dart.prototype.isEmpty$getter = function isEmpty$getter(){
  return $bind(html623afa$ElementAttributeMap$Dart.prototype.isEmpty$named, this);
}
;
