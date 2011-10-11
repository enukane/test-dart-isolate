function html623afa$DocumentWrappingImplementation$Dart(){
}

html623afa$DocumentWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('html623afa$DocumentWrappingImplementation$Dart'), html623afa$DocumentWrappingImplementation$Dart.$RTTimplements);
}
;
html623afa$DocumentWrappingImplementation$Dart.$RTTimplements = function(rtt){
  html623afa$DocumentWrappingImplementation$Dart.$addTo(rtt);
}
;
html623afa$DocumentWrappingImplementation$Dart.$addTo = function(target){
  var rtt = html623afa$DocumentWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  html623afa$ElementWrappingImplementation$Dart.$addTo(target);
  html623afa$Document$Dart.$addTo(target);
}
;
html623afa$DocumentWrappingImplementation$Dart.prototype.$implements$html623afa$DocumentWrappingImplementation$Dart = 1;
html623afa$DocumentWrappingImplementation$Dart.prototype.$implements$html623afa$Document$Dart = 1;
html623afa$DocumentWrappingImplementation$Dart.prototype.$implements$html623afa$Element$Dart = 1;
html623afa$DocumentWrappingImplementation$Dart.prototype.$implements$html623afa$Node$Dart = 1;
html623afa$DocumentWrappingImplementation$Dart.prototype.$implements$html623afa$EventTarget$Dart = 1;
html623afa$DocumentWrappingImplementation$Dart.prototype.$implements$html623afa$ElementWrappingImplementation$Dart = 1;
html623afa$DocumentWrappingImplementation$Dart.prototype.$implements$html623afa$NodeWrappingImplementation$Dart = 1;
html623afa$DocumentWrappingImplementation$Dart.prototype.$implements$html623afa$EventTargetWrappingImplementation$Dart = 1;
html623afa$DocumentWrappingImplementation$Dart.prototype.$implements$html623afa$DOMWrapperBase$Dart = 1;
html623afa$DocumentWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(html623afa$DocumentWrappingImplementation$Dart, html623afa$ElementWrappingImplementation$Dart);
html623afa$DocumentWrappingImplementation$Dart._wrap$html623afa$$Constructor_ = function(_documentPtr, ptr){
  html623afa$ElementWrappingImplementation$Dart._wrap$html623afa$$Constructor_.call(this, ptr);
  var tmp$0;
  this._documentPtr$html623afa$$getter_().dartObjectLocalStorage$setter(tmp$0 = this) , tmp$0;
}
;
html623afa$DocumentWrappingImplementation$Dart._wrap$html623afa$$Initializer_ = function(_documentPtr, ptr){
  html623afa$ElementWrappingImplementation$Dart._wrap$html623afa$$Initializer_.call(this, ptr);
  this._documentPtr$html623afa$$field_ = _documentPtr;
}
;
html623afa$DocumentWrappingImplementation$Dart.DocumentWrappingImplementation$_wrap$30$html623afa$$Factory_ = function(_documentPtr, ptr){
  var tmp$0 = new html623afa$DocumentWrappingImplementation$Dart;
  tmp$0.$typeInfo = html623afa$DocumentWrappingImplementation$Dart.$lookupRTT();
  html623afa$DocumentWrappingImplementation$Dart._wrap$html623afa$$Initializer_.call(tmp$0, _documentPtr, ptr);
  html623afa$DocumentWrappingImplementation$Dart._wrap$html623afa$$Constructor_.call(tmp$0, _documentPtr, ptr);
  return tmp$0;
}
;
html623afa$DocumentWrappingImplementation$Dart.prototype._documentPtr$html623afa$$named_ = function(){
  return this._documentPtr$html623afa$$getter_().apply(this, arguments);
}
;
html623afa$DocumentWrappingImplementation$Dart.prototype._documentPtr$html623afa$$getter_ = function(){
  return this._documentPtr$html623afa$$field_;
}
;
html623afa$DocumentWrappingImplementation$Dart.prototype.activeElement$named = function(){
  return this.activeElement$getter().apply(this, arguments);
}
;
html623afa$DocumentWrappingImplementation$Dart.prototype.activeElement$getter = function(){
  return html623afa$LevelDom$Dart.wrapElement$member(this._documentPtr$html623afa$$getter_().activeElement$getter());
}
;
html623afa$DocumentWrappingImplementation$Dart.prototype.parent$named = function(){
  return this.parent$getter().apply(this, arguments);
}
;
html623afa$DocumentWrappingImplementation$Dart.prototype.parent$getter = function(){
  return $Dart$Null;
}
;
html623afa$DocumentWrappingImplementation$Dart.prototype.body$named = function(){
  return this.body$getter().apply(this, arguments);
}
;
html623afa$DocumentWrappingImplementation$Dart.prototype.body$getter = function(){
  return html623afa$LevelDom$Dart.wrapElement$member(this._documentPtr$html623afa$$getter_().body$getter());
}
;
html623afa$DocumentWrappingImplementation$Dart.prototype.body$setter = function(value){
  var tmp$0;
  this._documentPtr$html623afa$$getter_().body$setter(tmp$0 = html623afa$LevelDom$Dart.unwrap$member(value)) , tmp$0;
}
;
html623afa$DocumentWrappingImplementation$Dart.prototype.charset$named = function(){
  return this.charset$getter().apply(this, arguments);
}
;
html623afa$DocumentWrappingImplementation$Dart.prototype.charset$getter = function(){
  return this._documentPtr$html623afa$$getter_().charset$getter();
}
;
html623afa$DocumentWrappingImplementation$Dart.prototype.charset$setter = function(value){
  var tmp$0;
  this._documentPtr$html623afa$$getter_().charset$setter(tmp$0 = value) , tmp$0;
}
;
html623afa$DocumentWrappingImplementation$Dart.prototype.cookie$named = function(){
  return this.cookie$getter().apply(this, arguments);
}
;
html623afa$DocumentWrappingImplementation$Dart.prototype.cookie$getter = function(){
  return this._documentPtr$html623afa$$getter_().cookie$getter();
}
;
html623afa$DocumentWrappingImplementation$Dart.prototype.cookie$setter = function(value){
  var tmp$0;
  this._documentPtr$html623afa$$getter_().cookie$setter(tmp$0 = value) , tmp$0;
}
;
html623afa$DocumentWrappingImplementation$Dart.prototype.window$named = function(){
  return this.window$getter().apply(this, arguments);
}
;
html623afa$DocumentWrappingImplementation$Dart.prototype.window$getter = function(){
  return html623afa$LevelDom$Dart.wrapWindow$member(this._documentPtr$html623afa$$getter_().defaultView$getter());
}
;
html623afa$DocumentWrappingImplementation$Dart.prototype.designMode$named = function(){
  return this.designMode$getter().apply(this, arguments);
}
;
html623afa$DocumentWrappingImplementation$Dart.prototype.designMode$setter = function(value){
  var tmp$0;
  this._documentPtr$html623afa$$getter_().designMode$setter(tmp$0 = value) , tmp$0;
}
;
html623afa$DocumentWrappingImplementation$Dart.prototype.domain$named = function(){
  return this.domain$getter().apply(this, arguments);
}
;
html623afa$DocumentWrappingImplementation$Dart.prototype.domain$getter = function(){
  return this._documentPtr$html623afa$$getter_().domain$getter();
}
;
html623afa$DocumentWrappingImplementation$Dart.prototype.head$named = function(){
  return this.head$getter().apply(this, arguments);
}
;
html623afa$DocumentWrappingImplementation$Dart.prototype.head$getter = function(){
  return html623afa$LevelDom$Dart.wrapHeadElement$member(this._documentPtr$html623afa$$getter_().head$getter());
}
;
html623afa$DocumentWrappingImplementation$Dart.prototype.lastModified$named = function(){
  return this.lastModified$getter().apply(this, arguments);
}
;
html623afa$DocumentWrappingImplementation$Dart.prototype.lastModified$getter = function(){
  return this._documentPtr$html623afa$$getter_().lastModified$getter();
}
;
html623afa$DocumentWrappingImplementation$Dart.prototype.readyState$named = function(){
  return this.readyState$getter().apply(this, arguments);
}
;
html623afa$DocumentWrappingImplementation$Dart.prototype.readyState$getter = function(){
  return this._documentPtr$html623afa$$getter_().readyState$getter();
}
;
html623afa$DocumentWrappingImplementation$Dart.prototype.referrer$named = function(){
  return this.referrer$getter().apply(this, arguments);
}
;
html623afa$DocumentWrappingImplementation$Dart.prototype.referrer$getter = function(){
  return this._documentPtr$html623afa$$getter_().referrer$getter();
}
;
html623afa$DocumentWrappingImplementation$Dart.prototype.styleSheets$named = function(){
  return this.styleSheets$getter().apply(this, arguments);
}
;
html623afa$DocumentWrappingImplementation$Dart.prototype.styleSheets$getter = function(){
  return html623afa$LevelDom$Dart.wrapStyleSheetList$member(this._documentPtr$html623afa$$getter_().styleSheets$getter());
}
;
html623afa$DocumentWrappingImplementation$Dart.prototype.title$named = function(){
  return this.title$getter().apply(this, arguments);
}
;
html623afa$DocumentWrappingImplementation$Dart.prototype.title$getter = function(){
  return this._documentPtr$html623afa$$getter_().title$getter();
}
;
html623afa$DocumentWrappingImplementation$Dart.prototype.title$setter = function(value){
  var tmp$0;
  this._documentPtr$html623afa$$getter_().title$setter(tmp$0 = value) , tmp$0;
}
;
html623afa$DocumentWrappingImplementation$Dart.prototype.webkitHidden$named = function(){
  return this.webkitHidden$getter().apply(this, arguments);
}
;
html623afa$DocumentWrappingImplementation$Dart.prototype.webkitHidden$getter = function(){
  return this._documentPtr$html623afa$$getter_().webkitHidden$getter();
}
;
html623afa$DocumentWrappingImplementation$Dart.prototype.webkitVisibilityState$named = function(){
  return this.webkitVisibilityState$getter().apply(this, arguments);
}
;
html623afa$DocumentWrappingImplementation$Dart.prototype.webkitVisibilityState$getter = function(){
  return this._documentPtr$html623afa$$getter_().webkitVisibilityState$getter();
}
;
html623afa$DocumentWrappingImplementation$Dart.prototype.caretRangeFromPoint$member = function(x, y){
  $Dart$ThrowException('TODO(jacobr): impl promise.');
}
;
html623afa$DocumentWrappingImplementation$Dart.prototype.caretRangeFromPoint$named = function($n, $o, x, y){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 0:
      x = $o.x?(++seen , $o.x):(++def , $Dart$Null);
    case 1:
      y = $o.y?(++seen , $o.y):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return html623afa$DocumentWrappingImplementation$Dart.prototype.caretRangeFromPoint$member.call(this, x, y);
}
;
html623afa$DocumentWrappingImplementation$Dart.prototype.caretRangeFromPoint$getter = function caretRangeFromPoint$getter(){
  return $bind(html623afa$DocumentWrappingImplementation$Dart.prototype.caretRangeFromPoint$named, this);
}
;
html623afa$DocumentWrappingImplementation$Dart.prototype.createElement$member = function(tagName){
  return html623afa$LevelDom$Dart.wrapElement$member(this._documentPtr$html623afa$$getter_().createElement$named(1, $noargs, tagName));
}
;
html623afa$DocumentWrappingImplementation$Dart.prototype.createElement$named = function($n, $o, tagName){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 0:
      tagName = $o.tagName?(++seen , $o.tagName):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$DocumentWrappingImplementation$Dart.prototype.createElement$member.call(this, tagName);
}
;
html623afa$DocumentWrappingImplementation$Dart.prototype.createElement$getter = function createElement$getter(){
  return $bind(html623afa$DocumentWrappingImplementation$Dart.prototype.createElement$named, this);
}
;
html623afa$DocumentWrappingImplementation$Dart.prototype.createEvent$member = function(eventType){
  return html623afa$LevelDom$Dart.wrapEvent$member(this._documentPtr$html623afa$$getter_().createEvent$named(1, $noargs, eventType));
}
;
html623afa$DocumentWrappingImplementation$Dart.prototype.createEvent$named = function($n, $o, eventType){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 0:
      eventType = $o.eventType?(++seen , $o.eventType):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$DocumentWrappingImplementation$Dart.prototype.createEvent$member.call(this, eventType);
}
;
html623afa$DocumentWrappingImplementation$Dart.prototype.createEvent$getter = function createEvent$getter(){
  return $bind(html623afa$DocumentWrappingImplementation$Dart.prototype.createEvent$named, this);
}
;
html623afa$DocumentWrappingImplementation$Dart.prototype.elementFromPoint$member = function(x, y){
  $Dart$ThrowException('TODO(jacobr): impl using promise');
}
;
html623afa$DocumentWrappingImplementation$Dart.prototype.elementFromPoint$named = function($n, $o, x, y){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 0:
      x = $o.x?(++seen , $o.x):(++def , $Dart$Null);
    case 1:
      y = $o.y?(++seen , $o.y):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return html623afa$DocumentWrappingImplementation$Dart.prototype.elementFromPoint$member.call(this, x, y);
}
;
html623afa$DocumentWrappingImplementation$Dart.prototype.elementFromPoint$getter = function elementFromPoint$getter(){
  return $bind(html623afa$DocumentWrappingImplementation$Dart.prototype.elementFromPoint$named, this);
}
;
html623afa$DocumentWrappingImplementation$Dart.prototype.execCommand$member = function(command, userInterface, value){
  return this._documentPtr$html623afa$$getter_().execCommand$named(3, $noargs, command, userInterface, value);
}
;
html623afa$DocumentWrappingImplementation$Dart.prototype.execCommand$named = function($n, $o, command, userInterface, value){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 0:
      command = $o.command?(++seen , $o.command):(++def , $Dart$Null);
    case 1:
      userInterface = $o.userInterface?(++seen , $o.userInterface):(++def , $Dart$Null);
    case 2:
      value = $o.value?(++seen , $o.value):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return html623afa$DocumentWrappingImplementation$Dart.prototype.execCommand$member.call(this, command, userInterface, value);
}
;
html623afa$DocumentWrappingImplementation$Dart.prototype.execCommand$getter = function execCommand$getter(){
  return $bind(html623afa$DocumentWrappingImplementation$Dart.prototype.execCommand$named, this);
}
;
html623afa$DocumentWrappingImplementation$Dart.prototype.getCSSCanvasContext$member = function(contextId, name_0, width, height){
  return html623afa$LevelDom$Dart.wrapCanvasRenderingContext$member(this._documentPtr$html623afa$$getter_().getCSSCanvasContext$named(4, $noargs, contextId, name_0, width, height));
}
;
html623afa$DocumentWrappingImplementation$Dart.prototype.getCSSCanvasContext$named = function($n, $o, contextId, name_0, width, height){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 4)
    $nsme();
  return html623afa$DocumentWrappingImplementation$Dart.prototype.getCSSCanvasContext$member.call(this, contextId, name_0, width, height);
}
;
html623afa$DocumentWrappingImplementation$Dart.prototype.getCSSCanvasContext$getter = function getCSSCanvasContext$getter(){
  return $bind(html623afa$DocumentWrappingImplementation$Dart.prototype.getCSSCanvasContext$named, this);
}
;
html623afa$DocumentWrappingImplementation$Dart.prototype.queryCommandEnabled$member = function(command){
  return this._documentPtr$html623afa$$getter_().queryCommandEnabled$named(1, $noargs, command);
}
;
html623afa$DocumentWrappingImplementation$Dart.prototype.queryCommandEnabled$named = function($n, $o, command){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 0:
      command = $o.command?(++seen , $o.command):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$DocumentWrappingImplementation$Dart.prototype.queryCommandEnabled$member.call(this, command);
}
;
html623afa$DocumentWrappingImplementation$Dart.prototype.queryCommandEnabled$getter = function queryCommandEnabled$getter(){
  return $bind(html623afa$DocumentWrappingImplementation$Dart.prototype.queryCommandEnabled$named, this);
}
;
html623afa$DocumentWrappingImplementation$Dart.prototype.queryCommandIndeterm$member = function(command){
  return this._documentPtr$html623afa$$getter_().queryCommandIndeterm$named(1, $noargs, command);
}
;
html623afa$DocumentWrappingImplementation$Dart.prototype.queryCommandIndeterm$named = function($n, $o, command){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 0:
      command = $o.command?(++seen , $o.command):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$DocumentWrappingImplementation$Dart.prototype.queryCommandIndeterm$member.call(this, command);
}
;
html623afa$DocumentWrappingImplementation$Dart.prototype.queryCommandIndeterm$getter = function queryCommandIndeterm$getter(){
  return $bind(html623afa$DocumentWrappingImplementation$Dart.prototype.queryCommandIndeterm$named, this);
}
;
html623afa$DocumentWrappingImplementation$Dart.prototype.queryCommandState$member = function(command){
  return this._documentPtr$html623afa$$getter_().queryCommandState$named(1, $noargs, command);
}
;
html623afa$DocumentWrappingImplementation$Dart.prototype.queryCommandState$named = function($n, $o, command){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 0:
      command = $o.command?(++seen , $o.command):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$DocumentWrappingImplementation$Dart.prototype.queryCommandState$member.call(this, command);
}
;
html623afa$DocumentWrappingImplementation$Dart.prototype.queryCommandState$getter = function queryCommandState$getter(){
  return $bind(html623afa$DocumentWrappingImplementation$Dart.prototype.queryCommandState$named, this);
}
;
html623afa$DocumentWrappingImplementation$Dart.prototype.queryCommandSupported$member = function(command){
  return this._documentPtr$html623afa$$getter_().queryCommandSupported$named(1, $noargs, command);
}
;
html623afa$DocumentWrappingImplementation$Dart.prototype.queryCommandSupported$named = function($n, $o, command){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 0:
      command = $o.command?(++seen , $o.command):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$DocumentWrappingImplementation$Dart.prototype.queryCommandSupported$member.call(this, command);
}
;
html623afa$DocumentWrappingImplementation$Dart.prototype.queryCommandSupported$getter = function queryCommandSupported$getter(){
  return $bind(html623afa$DocumentWrappingImplementation$Dart.prototype.queryCommandSupported$named, this);
}
;
html623afa$DocumentWrappingImplementation$Dart.prototype.queryCommandValue$member = function(command){
  return this._documentPtr$html623afa$$getter_().queryCommandValue$named(1, $noargs, command);
}
;
html623afa$DocumentWrappingImplementation$Dart.prototype.queryCommandValue$named = function($n, $o, command){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 0:
      command = $o.command?(++seen , $o.command):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$DocumentWrappingImplementation$Dart.prototype.queryCommandValue$member.call(this, command);
}
;
html623afa$DocumentWrappingImplementation$Dart.prototype.queryCommandValue$getter = function queryCommandValue$getter(){
  return $bind(html623afa$DocumentWrappingImplementation$Dart.prototype.queryCommandValue$named, this);
}
;
html623afa$DocumentWrappingImplementation$Dart.prototype.manifest$named = function(){
  return this.manifest$getter().apply(this, arguments);
}
;
html623afa$DocumentWrappingImplementation$Dart.prototype.manifest$getter = function(){
  return this._ptr$html623afa$$getter_().manifest$getter();
}
;
html623afa$DocumentWrappingImplementation$Dart.prototype.manifest$setter = function(value){
  var tmp$0;
  this._ptr$html623afa$$getter_().manifest$setter(tmp$0 = value) , tmp$0;
}
;
html623afa$DocumentWrappingImplementation$Dart.prototype.on$named = function(){
  return this.on$getter().apply(this, arguments);
}
;
html623afa$DocumentWrappingImplementation$Dart.prototype.on$getter = function(){
  var tmp$0;
  if (this._on$html623afa$$getter_() == null) {
    this._on$html623afa$$setter_(tmp$0 = html623afa$DocumentEventsImplementation$Dart.DocumentEventsImplementation$_wrap$28$html623afa$$Factory_(this._ptr$html623afa$$getter_())) , tmp$0;
  }
  return this._on$html623afa$$getter_();
}
;
