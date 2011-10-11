function html623afa$XMLHttpRequestWrappingImplementation$Dart(){
}

html623afa$XMLHttpRequestWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('html623afa$XMLHttpRequestWrappingImplementation$Dart'), html623afa$XMLHttpRequestWrappingImplementation$Dart.$RTTimplements);
}
;
html623afa$XMLHttpRequestWrappingImplementation$Dart.$RTTimplements = function(rtt){
  html623afa$XMLHttpRequestWrappingImplementation$Dart.$addTo(rtt);
}
;
html623afa$XMLHttpRequestWrappingImplementation$Dart.$addTo = function(target){
  var rtt = html623afa$XMLHttpRequestWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  html623afa$EventTargetWrappingImplementation$Dart.$addTo(target);
  html623afa$XMLHttpRequest$Dart.$addTo(target);
}
;
html623afa$XMLHttpRequestWrappingImplementation$Dart.prototype.$implements$html623afa$XMLHttpRequestWrappingImplementation$Dart = 1;
html623afa$XMLHttpRequestWrappingImplementation$Dart.prototype.$implements$html623afa$XMLHttpRequest$Dart = 1;
html623afa$XMLHttpRequestWrappingImplementation$Dart.prototype.$implements$html623afa$EventTarget$Dart = 1;
html623afa$XMLHttpRequestWrappingImplementation$Dart.prototype.$implements$html623afa$EventTargetWrappingImplementation$Dart = 1;
html623afa$XMLHttpRequestWrappingImplementation$Dart.prototype.$implements$html623afa$DOMWrapperBase$Dart = 1;
html623afa$XMLHttpRequestWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(html623afa$XMLHttpRequestWrappingImplementation$Dart, html623afa$EventTargetWrappingImplementation$Dart);
html623afa$XMLHttpRequestWrappingImplementation$Dart._wrap$html623afa$$Constructor_ = function(ptr){
  html623afa$EventTargetWrappingImplementation$Dart._wrap$html623afa$$Constructor_.call(this, ptr);
}
;
html623afa$XMLHttpRequestWrappingImplementation$Dart._wrap$html623afa$$Initializer_ = function(ptr){
  html623afa$EventTargetWrappingImplementation$Dart._wrap$html623afa$$Initializer_.call(this, ptr);
}
;
html623afa$XMLHttpRequestWrappingImplementation$Dart.XMLHttpRequestWrappingImplementation$_wrap$36$html623afa$$Factory_ = function(ptr){
  var tmp$0 = new html623afa$XMLHttpRequestWrappingImplementation$Dart;
  tmp$0.$typeInfo = html623afa$XMLHttpRequestWrappingImplementation$Dart.$lookupRTT();
  html623afa$XMLHttpRequestWrappingImplementation$Dart._wrap$html623afa$$Initializer_.call(tmp$0, ptr);
  html623afa$XMLHttpRequestWrappingImplementation$Dart._wrap$html623afa$$Constructor_.call(tmp$0, ptr);
  return tmp$0;
}
;
html623afa$XMLHttpRequestWrappingImplementation$Dart.XMLHttpRequestWrappingImplementation$$Factory = function(){
  return html623afa$XMLHttpRequestWrappingImplementation$Dart.XMLHttpRequestWrappingImplementation$_wrap$36$html623afa$$Factory_(_XMLHttpRequestFactoryProvider$Dart.XMLHttpRequest$$Factory());
}
;
function html623afa$XMLHttpRequestWrappingImplementation$Dart$getTEMPNAME$c0$52_52$HoistedConstructor(dartc_scp$0, dartc_scp$1, e){
  if (EQ$operator(dartc_scp$1.request_0.readyState$getter(), html623afa$XMLHttpRequest$Dart.DONE$getter()) && (EQ$operator(dartc_scp$1.request_0.status$getter(), 200) || EQ$operator(dartc_scp$1.request_0.status$getter(), 0))) {
    dartc_scp$0.onSuccess(1, $noargs, dartc_scp$1.request_0);
  }
}

function html623afa$XMLHttpRequestWrappingImplementation$Dart$getTEMPNAME$c0$52_52$HoistedConstructor$named($s0, $s1, $n, $o, e){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$XMLHttpRequestWrappingImplementation$Dart$getTEMPNAME$c0$52_52$HoistedConstructor($s0, $s1, e);
}

html623afa$XMLHttpRequestWrappingImplementation$Dart.XMLHttpRequestWrappingImplementation$getTEMPNAME$36$Factory = function(url, onSuccess){
  var dartc_scp$0 = {onSuccess:onSuccess};
  var dartc_scp$1, tmp$0;
  dartc_scp$1 = {};
  dartc_scp$1.request_0 = html623afa$XMLHttpRequestWrappingImplementation$Dart.XMLHttpRequestWrappingImplementation$$Factory();
  dartc_scp$1.request_0.open$named(3, $noargs, 'GET', url, true);
  dartc_scp$1.request_0.withCredentials$setter(tmp$0 = true) , tmp$0;
  dartc_scp$1.request_0.on$getter().readyStateChange$getter().add$named(1, $noargs, $bind(html623afa$XMLHttpRequestWrappingImplementation$Dart$getTEMPNAME$c0$52_52$HoistedConstructor$named, $Dart$Null, dartc_scp$0, dartc_scp$1));
  dartc_scp$1.request_0.send$named(0, $noargs);
  return dartc_scp$1.request_0;
  dartc_scp$1 = $Dart$Null;
}
;
html623afa$XMLHttpRequestWrappingImplementation$Dart.prototype.readyState$named = function(){
  return this.readyState$getter().apply(this, arguments);
}
;
html623afa$XMLHttpRequestWrappingImplementation$Dart.prototype.readyState$getter = function(){
  return this._ptr$html623afa$$getter_().readyState$getter();
}
;
html623afa$XMLHttpRequestWrappingImplementation$Dart.prototype.responseText$named = function(){
  return this.responseText$getter().apply(this, arguments);
}
;
html623afa$XMLHttpRequestWrappingImplementation$Dart.prototype.responseText$getter = function(){
  return this._ptr$html623afa$$getter_().responseText$getter();
}
;
html623afa$XMLHttpRequestWrappingImplementation$Dart.prototype.responseType$named = function(){
  return this.responseType$getter().apply(this, arguments);
}
;
html623afa$XMLHttpRequestWrappingImplementation$Dart.prototype.responseType$getter = function(){
  return this._ptr$html623afa$$getter_().responseType$getter();
}
;
html623afa$XMLHttpRequestWrappingImplementation$Dart.prototype.responseType$setter = function(value){
  var tmp$0;
  this._ptr$html623afa$$getter_().responseType$setter(tmp$0 = value) , tmp$0;
}
;
html623afa$XMLHttpRequestWrappingImplementation$Dart.prototype.responseXML$named = function(){
  return this.responseXML$getter().apply(this, arguments);
}
;
html623afa$XMLHttpRequestWrappingImplementation$Dart.prototype.responseXML$getter = function(){
  return html623afa$LevelDom$Dart.wrapDocument$member(this._ptr$html623afa$$getter_().responseXML$getter());
}
;
html623afa$XMLHttpRequestWrappingImplementation$Dart.prototype.status$named = function(){
  return this.status$getter().apply(this, arguments);
}
;
html623afa$XMLHttpRequestWrappingImplementation$Dart.prototype.status$getter = function(){
  return this._ptr$html623afa$$getter_().status$getter();
}
;
html623afa$XMLHttpRequestWrappingImplementation$Dart.prototype.statusText$named = function(){
  return this.statusText$getter().apply(this, arguments);
}
;
html623afa$XMLHttpRequestWrappingImplementation$Dart.prototype.statusText$getter = function(){
  return this._ptr$html623afa$$getter_().statusText$getter();
}
;
html623afa$XMLHttpRequestWrappingImplementation$Dart.prototype.upload$named = function(){
  return this.upload$getter().apply(this, arguments);
}
;
html623afa$XMLHttpRequestWrappingImplementation$Dart.prototype.upload$getter = function(){
  return html623afa$LevelDom$Dart.wrapXMLHttpRequestUpload$member(this._ptr$html623afa$$getter_().upload$getter());
}
;
html623afa$XMLHttpRequestWrappingImplementation$Dart.prototype.withCredentials$named = function(){
  return this.withCredentials$getter().apply(this, arguments);
}
;
html623afa$XMLHttpRequestWrappingImplementation$Dart.prototype.withCredentials$getter = function(){
  return this._ptr$html623afa$$getter_().withCredentials$getter();
}
;
html623afa$XMLHttpRequestWrappingImplementation$Dart.prototype.withCredentials$setter = function(value){
  var tmp$0;
  this._ptr$html623afa$$getter_().withCredentials$setter(tmp$0 = value) , tmp$0;
}
;
html623afa$XMLHttpRequestWrappingImplementation$Dart.prototype.abort$member = function(){
  this._ptr$html623afa$$getter_().abort$named(0, $noargs);
  return;
}
;
html623afa$XMLHttpRequestWrappingImplementation$Dart.prototype.abort$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return html623afa$XMLHttpRequestWrappingImplementation$Dart.prototype.abort$member.call(this);
}
;
html623afa$XMLHttpRequestWrappingImplementation$Dart.prototype.abort$getter = function abort$getter(){
  return $bind(html623afa$XMLHttpRequestWrappingImplementation$Dart.prototype.abort$named, this);
}
;
html623afa$XMLHttpRequestWrappingImplementation$Dart.prototype.getAllResponseHeaders$member = function(){
  return this._ptr$html623afa$$getter_().getAllResponseHeaders$named(0, $noargs);
}
;
html623afa$XMLHttpRequestWrappingImplementation$Dart.prototype.getAllResponseHeaders$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return html623afa$XMLHttpRequestWrappingImplementation$Dart.prototype.getAllResponseHeaders$member.call(this);
}
;
html623afa$XMLHttpRequestWrappingImplementation$Dart.prototype.getAllResponseHeaders$getter = function getAllResponseHeaders$getter(){
  return $bind(html623afa$XMLHttpRequestWrappingImplementation$Dart.prototype.getAllResponseHeaders$named, this);
}
;
html623afa$XMLHttpRequestWrappingImplementation$Dart.prototype.getResponseHeader$member = function(header){
  return this._ptr$html623afa$$getter_().getResponseHeader$named(1, $noargs, header);
}
;
html623afa$XMLHttpRequestWrappingImplementation$Dart.prototype.getResponseHeader$named = function($n, $o, header){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$XMLHttpRequestWrappingImplementation$Dart.prototype.getResponseHeader$member.call(this, header);
}
;
html623afa$XMLHttpRequestWrappingImplementation$Dart.prototype.getResponseHeader$getter = function getResponseHeader$getter(){
  return $bind(html623afa$XMLHttpRequestWrappingImplementation$Dart.prototype.getResponseHeader$named, this);
}
;
html623afa$XMLHttpRequestWrappingImplementation$Dart.prototype.open$member = function(method, url, async, user, password){
  if (user == null) {
    if (password == null) {
      this._ptr$html623afa$$getter_().open$named(3, $noargs, method, url, async);
      return;
    }
  }
   else {
    if (password == null) {
      this._ptr$html623afa$$getter_().open$named(4, $noargs, method, url, async, user);
      return;
    }
     else {
      this._ptr$html623afa$$getter_().open$named(5, $noargs, method, url, async, user, password);
      return;
    }
  }
  $Dart$ThrowException('Incorrect number or type of arguments');
}
;
html623afa$XMLHttpRequestWrappingImplementation$Dart.prototype.open$named = function($n, $o, method, url, async, user, password){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 3:
      user = $o.user?(++seen , $o.user):(++def , $Dart$Null);
    case 4:
      password = $o.password?(++seen , $o.password):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 5)
    $nsme();
  return html623afa$XMLHttpRequestWrappingImplementation$Dart.prototype.open$member.call(this, method, url, async, user, password);
}
;
html623afa$XMLHttpRequestWrappingImplementation$Dart.prototype.open$getter = function open$getter(){
  return $bind(html623afa$XMLHttpRequestWrappingImplementation$Dart.prototype.open$named, this);
}
;
html623afa$XMLHttpRequestWrappingImplementation$Dart.prototype.overrideMimeType$member = function(mime){
  this._ptr$html623afa$$getter_().overrideMimeType$named(1, $noargs, mime);
}
;
html623afa$XMLHttpRequestWrappingImplementation$Dart.prototype.overrideMimeType$named = function($n, $o, mime){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$XMLHttpRequestWrappingImplementation$Dart.prototype.overrideMimeType$member.call(this, mime);
}
;
html623afa$XMLHttpRequestWrappingImplementation$Dart.prototype.overrideMimeType$getter = function overrideMimeType$getter(){
  return $bind(html623afa$XMLHttpRequestWrappingImplementation$Dart.prototype.overrideMimeType$named, this);
}
;
html623afa$XMLHttpRequestWrappingImplementation$Dart.prototype.send$member = function(data){
  var tmp$0;
  if (data == null) {
    this._ptr$html623afa$$getter_().send$named(0, $noargs);
    return;
  }
   else {
    if (!!(tmp$0 = data , tmp$0 != null && tmp$0.$implements$html623afa$Document$Dart)) {
      this._ptr$html623afa$$getter_().send$named(1, $noargs, html623afa$LevelDom$Dart.unwrapMaybePrimitive$member(data));
      return;
    }
     else {
      if (String.$instanceOf(data)) {
        this._ptr$html623afa$$getter_().send$named(1, $noargs, html623afa$LevelDom$Dart.unwrapMaybePrimitive$member(data));
        return;
      }
    }
  }
  $Dart$ThrowException('Incorrect number or type of arguments');
}
;
html623afa$XMLHttpRequestWrappingImplementation$Dart.prototype.send$named = function($n, $o, data){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 0:
      data = $o.data?(++seen , $o.data):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$XMLHttpRequestWrappingImplementation$Dart.prototype.send$member.call(this, data);
}
;
html623afa$XMLHttpRequestWrappingImplementation$Dart.prototype.send$getter = function send$getter(){
  return $bind(html623afa$XMLHttpRequestWrappingImplementation$Dart.prototype.send$named, this);
}
;
html623afa$XMLHttpRequestWrappingImplementation$Dart.prototype.setRequestHeader$member = function(header, value){
  this._ptr$html623afa$$getter_().setRequestHeader$named(2, $noargs, header, value);
}
;
html623afa$XMLHttpRequestWrappingImplementation$Dart.prototype.setRequestHeader$named = function($n, $o, header, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return html623afa$XMLHttpRequestWrappingImplementation$Dart.prototype.setRequestHeader$member.call(this, header, value);
}
;
html623afa$XMLHttpRequestWrappingImplementation$Dart.prototype.setRequestHeader$getter = function setRequestHeader$getter(){
  return $bind(html623afa$XMLHttpRequestWrappingImplementation$Dart.prototype.setRequestHeader$named, this);
}
;
html623afa$XMLHttpRequestWrappingImplementation$Dart.prototype.on$named = function(){
  return this.on$getter().apply(this, arguments);
}
;
html623afa$XMLHttpRequestWrappingImplementation$Dart.prototype.on$getter = function(){
  var tmp$0;
  if (this._on$html623afa$$getter_() == null) {
    this._on$html623afa$$setter_(tmp$0 = html623afa$XMLHttpRequestEventsImplementation$Dart.XMLHttpRequestEventsImplementation$_wrap$34$html623afa$$Factory_(this._ptr$html623afa$$getter_())) , tmp$0;
  }
  return this._on$html623afa$$getter_();
}
;
