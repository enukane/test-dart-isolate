function html623afa$EntryWrappingImplementation$Dart(){
}

html623afa$EntryWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('html623afa$EntryWrappingImplementation$Dart'), html623afa$EntryWrappingImplementation$Dart.$RTTimplements);
}
;
html623afa$EntryWrappingImplementation$Dart.$RTTimplements = function(rtt){
  html623afa$EntryWrappingImplementation$Dart.$addTo(rtt);
}
;
html623afa$EntryWrappingImplementation$Dart.$addTo = function(target){
  var rtt = html623afa$EntryWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  html623afa$DOMWrapperBase$Dart.$addTo(target);
  html623afa$Entry$Dart.$addTo(target);
}
;
html623afa$EntryWrappingImplementation$Dart.prototype.$implements$html623afa$EntryWrappingImplementation$Dart = 1;
html623afa$EntryWrappingImplementation$Dart.prototype.$implements$html623afa$Entry$Dart = 1;
html623afa$EntryWrappingImplementation$Dart.prototype.$implements$html623afa$DOMWrapperBase$Dart = 1;
html623afa$EntryWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(html623afa$EntryWrappingImplementation$Dart, html623afa$DOMWrapperBase$Dart);
html623afa$EntryWrappingImplementation$Dart._wrap$html623afa$$Constructor_ = function(ptr){
  html623afa$DOMWrapperBase$Dart._wrap$html623afa$$Constructor_.call(this, ptr);
}
;
html623afa$EntryWrappingImplementation$Dart._wrap$html623afa$$Initializer_ = function(ptr){
  html623afa$DOMWrapperBase$Dart._wrap$html623afa$$Initializer_.call(this, ptr);
}
;
html623afa$EntryWrappingImplementation$Dart.EntryWrappingImplementation$_wrap$27$html623afa$$Factory_ = function(ptr){
  var tmp$0 = new html623afa$EntryWrappingImplementation$Dart;
  tmp$0.$typeInfo = html623afa$EntryWrappingImplementation$Dart.$lookupRTT();
  html623afa$EntryWrappingImplementation$Dart._wrap$html623afa$$Initializer_.call(tmp$0, ptr);
  html623afa$EntryWrappingImplementation$Dart._wrap$html623afa$$Constructor_.call(tmp$0, ptr);
  return tmp$0;
}
;
html623afa$EntryWrappingImplementation$Dart.prototype.filesystem$named = function(){
  return this.filesystem$getter().apply(this, arguments);
}
;
html623afa$EntryWrappingImplementation$Dart.prototype.filesystem$getter = function(){
  return html623afa$LevelDom$Dart.wrapDOMFileSystem$member(this._ptr$html623afa$$getter_().filesystem$getter());
}
;
html623afa$EntryWrappingImplementation$Dart.prototype.fullPath$named = function(){
  return this.fullPath$getter().apply(this, arguments);
}
;
html623afa$EntryWrappingImplementation$Dart.prototype.fullPath$getter = function(){
  return this._ptr$html623afa$$getter_().fullPath$getter();
}
;
html623afa$EntryWrappingImplementation$Dart.prototype.isDirectory$named = function(){
  return this.isDirectory$getter().apply(this, arguments);
}
;
html623afa$EntryWrappingImplementation$Dart.prototype.isDirectory$getter = function(){
  return this._ptr$html623afa$$getter_().isDirectory$getter();
}
;
html623afa$EntryWrappingImplementation$Dart.prototype.isFile$named = function(){
  return this.isFile$getter().apply(this, arguments);
}
;
html623afa$EntryWrappingImplementation$Dart.prototype.isFile$getter = function(){
  return this._ptr$html623afa$$getter_().isFile$getter();
}
;
html623afa$EntryWrappingImplementation$Dart.prototype.name$named = function(){
  return this.name$getter().apply(this, arguments);
}
;
html623afa$EntryWrappingImplementation$Dart.prototype.name$getter = function(){
  return this._ptr$html623afa$$getter_().name$getter();
}
;
html623afa$EntryWrappingImplementation$Dart.prototype.copyTo$member = function(parent_0, name_0, successCallback, errorCallback){
  if (name_0 == null) {
    if (successCallback == null) {
      if (errorCallback == null) {
        this._ptr$html623afa$$getter_().copyTo$named(1, $noargs, html623afa$LevelDom$Dart.unwrap$member(parent_0));
        return;
      }
    }
  }
   else {
    if (successCallback == null) {
      if (errorCallback == null) {
        this._ptr$html623afa$$getter_().copyTo$named(2, $noargs, html623afa$LevelDom$Dart.unwrap$member(parent_0), name_0);
        return;
      }
    }
     else {
      if (errorCallback == null) {
        this._ptr$html623afa$$getter_().copyTo$named(3, $noargs, html623afa$LevelDom$Dart.unwrap$member(parent_0), name_0, html623afa$LevelDom$Dart.unwrap$member(successCallback));
        return;
      }
       else {
        this._ptr$html623afa$$getter_().copyTo$named(4, $noargs, html623afa$LevelDom$Dart.unwrap$member(parent_0), name_0, html623afa$LevelDom$Dart.unwrap$member(successCallback), html623afa$LevelDom$Dart.unwrap$member(errorCallback));
        return;
      }
    }
  }
  $Dart$ThrowException('Incorrect number or type of arguments');
}
;
html623afa$EntryWrappingImplementation$Dart.prototype.copyTo$named = function($n, $o, parent_0, name_0, successCallback, errorCallback){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 1:
      name_0 = $o.name_0?(++seen , $o.name_0):(++def , $Dart$Null);
    case 2:
      successCallback = $o.successCallback?(++seen , $o.successCallback):(++def , $Dart$Null);
    case 3:
      errorCallback = $o.errorCallback?(++seen , $o.errorCallback):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 4)
    $nsme();
  return html623afa$EntryWrappingImplementation$Dart.prototype.copyTo$member.call(this, parent_0, name_0, successCallback, errorCallback);
}
;
html623afa$EntryWrappingImplementation$Dart.prototype.copyTo$getter = function copyTo$getter(){
  return $bind(html623afa$EntryWrappingImplementation$Dart.prototype.copyTo$named, this);
}
;
html623afa$EntryWrappingImplementation$Dart.prototype.getMetadata$member = function(successCallback, errorCallback){
  if (successCallback == null) {
    if (errorCallback == null) {
      this._ptr$html623afa$$getter_().getMetadata$named(0, $noargs);
      return;
    }
  }
   else {
    if (errorCallback == null) {
      this._ptr$html623afa$$getter_().getMetadata$named(1, $noargs, html623afa$LevelDom$Dart.unwrap$member(successCallback));
      return;
    }
     else {
      this._ptr$html623afa$$getter_().getMetadata$named(2, $noargs, html623afa$LevelDom$Dart.unwrap$member(successCallback), html623afa$LevelDom$Dart.unwrap$member(errorCallback));
      return;
    }
  }
  $Dart$ThrowException('Incorrect number or type of arguments');
}
;
html623afa$EntryWrappingImplementation$Dart.prototype.getMetadata$named = function($n, $o, successCallback, errorCallback){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 0:
      successCallback = $o.successCallback?(++seen , $o.successCallback):(++def , $Dart$Null);
    case 1:
      errorCallback = $o.errorCallback?(++seen , $o.errorCallback):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return html623afa$EntryWrappingImplementation$Dart.prototype.getMetadata$member.call(this, successCallback, errorCallback);
}
;
html623afa$EntryWrappingImplementation$Dart.prototype.getMetadata$getter = function getMetadata$getter(){
  return $bind(html623afa$EntryWrappingImplementation$Dart.prototype.getMetadata$named, this);
}
;
html623afa$EntryWrappingImplementation$Dart.prototype.getParent$member = function(successCallback, errorCallback){
  if (successCallback == null) {
    if (errorCallback == null) {
      this._ptr$html623afa$$getter_().getParent$named(0, $noargs);
      return;
    }
  }
   else {
    if (errorCallback == null) {
      this._ptr$html623afa$$getter_().getParent$named(1, $noargs, html623afa$LevelDom$Dart.unwrap$member(successCallback));
      return;
    }
     else {
      this._ptr$html623afa$$getter_().getParent$named(2, $noargs, html623afa$LevelDom$Dart.unwrap$member(successCallback), html623afa$LevelDom$Dart.unwrap$member(errorCallback));
      return;
    }
  }
  $Dart$ThrowException('Incorrect number or type of arguments');
}
;
html623afa$EntryWrappingImplementation$Dart.prototype.getParent$named = function($n, $o, successCallback, errorCallback){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 0:
      successCallback = $o.successCallback?(++seen , $o.successCallback):(++def , $Dart$Null);
    case 1:
      errorCallback = $o.errorCallback?(++seen , $o.errorCallback):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return html623afa$EntryWrappingImplementation$Dart.prototype.getParent$member.call(this, successCallback, errorCallback);
}
;
html623afa$EntryWrappingImplementation$Dart.prototype.getParent$getter = function getParent$getter(){
  return $bind(html623afa$EntryWrappingImplementation$Dart.prototype.getParent$named, this);
}
;
html623afa$EntryWrappingImplementation$Dart.prototype.moveTo$member = function(parent_0, name_0, successCallback, errorCallback){
  if (name_0 == null) {
    if (successCallback == null) {
      if (errorCallback == null) {
        this._ptr$html623afa$$getter_().moveTo$named(1, $noargs, html623afa$LevelDom$Dart.unwrap$member(parent_0));
        return;
      }
    }
  }
   else {
    if (successCallback == null) {
      if (errorCallback == null) {
        this._ptr$html623afa$$getter_().moveTo$named(2, $noargs, html623afa$LevelDom$Dart.unwrap$member(parent_0), name_0);
        return;
      }
    }
     else {
      if (errorCallback == null) {
        this._ptr$html623afa$$getter_().moveTo$named(3, $noargs, html623afa$LevelDom$Dart.unwrap$member(parent_0), name_0, html623afa$LevelDom$Dart.unwrap$member(successCallback));
        return;
      }
       else {
        this._ptr$html623afa$$getter_().moveTo$named(4, $noargs, html623afa$LevelDom$Dart.unwrap$member(parent_0), name_0, html623afa$LevelDom$Dart.unwrap$member(successCallback), html623afa$LevelDom$Dart.unwrap$member(errorCallback));
        return;
      }
    }
  }
  $Dart$ThrowException('Incorrect number or type of arguments');
}
;
html623afa$EntryWrappingImplementation$Dart.prototype.moveTo$named = function($n, $o, parent_0, name_0, successCallback, errorCallback){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 1:
      name_0 = $o.name_0?(++seen , $o.name_0):(++def , $Dart$Null);
    case 2:
      successCallback = $o.successCallback?(++seen , $o.successCallback):(++def , $Dart$Null);
    case 3:
      errorCallback = $o.errorCallback?(++seen , $o.errorCallback):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 4)
    $nsme();
  return html623afa$EntryWrappingImplementation$Dart.prototype.moveTo$member.call(this, parent_0, name_0, successCallback, errorCallback);
}
;
html623afa$EntryWrappingImplementation$Dart.prototype.moveTo$getter = function moveTo$getter(){
  return $bind(html623afa$EntryWrappingImplementation$Dart.prototype.moveTo$named, this);
}
;
html623afa$EntryWrappingImplementation$Dart.prototype.remove$member = function(successCallback, errorCallback){
  if (successCallback == null) {
    if (errorCallback == null) {
      this._ptr$html623afa$$getter_().remove$named(0, $noargs);
      return;
    }
  }
   else {
    if (errorCallback == null) {
      this._ptr$html623afa$$getter_().remove$named(1, $noargs, html623afa$LevelDom$Dart.unwrap$member(successCallback));
      return;
    }
     else {
      this._ptr$html623afa$$getter_().remove$named(2, $noargs, html623afa$LevelDom$Dart.unwrap$member(successCallback), html623afa$LevelDom$Dart.unwrap$member(errorCallback));
      return;
    }
  }
  $Dart$ThrowException('Incorrect number or type of arguments');
}
;
html623afa$EntryWrappingImplementation$Dart.prototype.remove$named = function($n, $o, successCallback, errorCallback){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 0:
      successCallback = $o.successCallback?(++seen , $o.successCallback):(++def , $Dart$Null);
    case 1:
      errorCallback = $o.errorCallback?(++seen , $o.errorCallback):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return html623afa$EntryWrappingImplementation$Dart.prototype.remove$member.call(this, successCallback, errorCallback);
}
;
html623afa$EntryWrappingImplementation$Dart.prototype.remove$getter = function remove$getter(){
  return $bind(html623afa$EntryWrappingImplementation$Dart.prototype.remove$named, this);
}
;
html623afa$EntryWrappingImplementation$Dart.prototype.toURL$member = function(){
  return this._ptr$html623afa$$getter_().toURL$named(0, $noargs);
}
;
html623afa$EntryWrappingImplementation$Dart.prototype.toURL$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return html623afa$EntryWrappingImplementation$Dart.prototype.toURL$member.call(this);
}
;
html623afa$EntryWrappingImplementation$Dart.prototype.toURL$getter = function toURL$getter(){
  return $bind(html623afa$EntryWrappingImplementation$Dart.prototype.toURL$named, this);
}
;
