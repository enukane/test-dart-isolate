function html623afa$WindowWrappingImplementation$Dart(){
}

html623afa$WindowWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('html623afa$WindowWrappingImplementation$Dart'), html623afa$WindowWrappingImplementation$Dart.$RTTimplements);
}
;
html623afa$WindowWrappingImplementation$Dart.$RTTimplements = function(rtt){
  html623afa$WindowWrappingImplementation$Dart.$addTo(rtt);
}
;
html623afa$WindowWrappingImplementation$Dart.$addTo = function(target){
  var rtt = html623afa$WindowWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  html623afa$EventTargetWrappingImplementation$Dart.$addTo(target);
  html623afa$Window$Dart.$addTo(target);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.$implements$html623afa$WindowWrappingImplementation$Dart = 1;
html623afa$WindowWrappingImplementation$Dart.prototype.$implements$html623afa$Window$Dart = 1;
html623afa$WindowWrappingImplementation$Dart.prototype.$implements$html623afa$EventTarget$Dart = 1;
html623afa$WindowWrappingImplementation$Dart.prototype.$implements$html623afa$EventTargetWrappingImplementation$Dart = 1;
html623afa$WindowWrappingImplementation$Dart.prototype.$implements$html623afa$DOMWrapperBase$Dart = 1;
html623afa$WindowWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(html623afa$WindowWrappingImplementation$Dart, html623afa$EventTargetWrappingImplementation$Dart);
html623afa$WindowWrappingImplementation$Dart._wrap$html623afa$$Constructor_ = function(ptr){
  html623afa$EventTargetWrappingImplementation$Dart._wrap$html623afa$$Constructor_.call(this, ptr);
}
;
html623afa$WindowWrappingImplementation$Dart._wrap$html623afa$$Initializer_ = function(ptr){
  html623afa$EventTargetWrappingImplementation$Dart._wrap$html623afa$$Initializer_.call(this, ptr);
}
;
html623afa$WindowWrappingImplementation$Dart.WindowWrappingImplementation$_wrap$28$html623afa$$Factory_ = function(ptr){
  var tmp$0 = new html623afa$WindowWrappingImplementation$Dart;
  tmp$0.$typeInfo = html623afa$WindowWrappingImplementation$Dart.$lookupRTT();
  html623afa$WindowWrappingImplementation$Dart._wrap$html623afa$$Initializer_.call(tmp$0, ptr);
  html623afa$WindowWrappingImplementation$Dart._wrap$html623afa$$Constructor_.call(tmp$0, ptr);
  return tmp$0;
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.applicationCache$named = function(){
  return this.applicationCache$getter().apply(this, arguments);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.applicationCache$getter = function(){
  return html623afa$LevelDom$Dart.wrapDOMApplicationCache$member(this._ptr$html623afa$$getter_().applicationCache$getter());
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.clientInformation$named = function(){
  return this.clientInformation$getter().apply(this, arguments);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.clientInformation$getter = function(){
  return html623afa$LevelDom$Dart.wrapNavigator$member(this._ptr$html623afa$$getter_().clientInformation$getter());
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.clientInformation$setter = function(value){
  var tmp$0;
  this._ptr$html623afa$$getter_().clientInformation$setter(tmp$0 = html623afa$LevelDom$Dart.unwrap$member(value)) , tmp$0;
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.closed$named = function(){
  return this.closed$getter().apply(this, arguments);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.closed$getter = function(){
  return this._ptr$html623afa$$getter_().closed$getter();
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.console$named = function(){
  return this.console$getter().apply(this, arguments);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.console$getter = function(){
  return html623afa$LevelDom$Dart.wrapConsole$member(this._ptr$html623afa$$getter_().console$getter());
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.console$setter = function(value){
  var tmp$0;
  this._ptr$html623afa$$getter_().console$setter(tmp$0 = html623afa$LevelDom$Dart.unwrap$member(value)) , tmp$0;
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.crypto$named = function(){
  return this.crypto$getter().apply(this, arguments);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.crypto$getter = function(){
  return html623afa$LevelDom$Dart.wrapCrypto$member(this._ptr$html623afa$$getter_().crypto$getter());
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.defaultStatus$named = function(){
  return this.defaultStatus$getter().apply(this, arguments);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.defaultStatus$getter = function(){
  return this._ptr$html623afa$$getter_().defaultStatus$getter();
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.defaultStatus$setter = function(value){
  var tmp$0;
  this._ptr$html623afa$$getter_().defaultStatus$setter(tmp$0 = value) , tmp$0;
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.devicePixelRatio$named = function(){
  return this.devicePixelRatio$getter().apply(this, arguments);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.devicePixelRatio$getter = function(){
  return this._ptr$html623afa$$getter_().devicePixelRatio$getter();
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.devicePixelRatio$setter = function(value){
  var tmp$0;
  this._ptr$html623afa$$getter_().devicePixelRatio$setter(tmp$0 = value) , tmp$0;
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.document$named = function(){
  return this.document$getter().apply(this, arguments);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.document$getter = function(){
  return html623afa$LevelDom$Dart.wrapDocument$member(this._ptr$html623afa$$getter_().document$getter());
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.event$named = function(){
  return this.event$getter().apply(this, arguments);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.event$getter = function(){
  return html623afa$LevelDom$Dart.wrapEvent$member(this._ptr$html623afa$$getter_().event$getter());
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.event$setter = function(value){
  var tmp$0;
  this._ptr$html623afa$$getter_().event$setter(tmp$0 = html623afa$LevelDom$Dart.unwrap$member(value)) , tmp$0;
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.frameElement$named = function(){
  return this.frameElement$getter().apply(this, arguments);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.frameElement$getter = function(){
  return html623afa$LevelDom$Dart.wrapElement$member(this._ptr$html623afa$$getter_().frameElement$getter());
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.frames$named = function(){
  return this.frames$getter().apply(this, arguments);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.frames$getter = function(){
  return html623afa$LevelDom$Dart.wrapWindow$member(this._ptr$html623afa$$getter_().frames$getter());
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.frames$setter = function(value){
  var tmp$0;
  this._ptr$html623afa$$getter_().frames$setter(tmp$0 = html623afa$LevelDom$Dart.unwrap$member(value)) , tmp$0;
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.history$named = function(){
  return this.history$getter().apply(this, arguments);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.history$getter = function(){
  return html623afa$LevelDom$Dart.wrapHistory$member(this._ptr$html623afa$$getter_().history$getter());
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.history$setter = function(value){
  var tmp$0;
  this._ptr$html623afa$$getter_().history$setter(tmp$0 = html623afa$LevelDom$Dart.unwrap$member(value)) , tmp$0;
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.innerHeight$named = function(){
  return this.innerHeight$getter().apply(this, arguments);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.innerHeight$getter = function(){
  return this._ptr$html623afa$$getter_().innerHeight$getter();
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.innerHeight$setter = function(value){
  var tmp$0;
  this._ptr$html623afa$$getter_().innerHeight$setter(tmp$0 = value) , tmp$0;
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.innerWidth$named = function(){
  return this.innerWidth$getter().apply(this, arguments);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.innerWidth$getter = function(){
  return this._ptr$html623afa$$getter_().innerWidth$getter();
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.innerWidth$setter = function(value){
  var tmp$0;
  this._ptr$html623afa$$getter_().innerWidth$setter(tmp$0 = value) , tmp$0;
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.length$named = function(){
  return this.length$getter().apply(this, arguments);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.length$getter = function(){
  return this._ptr$html623afa$$getter_().length$getter();
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.length$setter = function(value){
  var tmp$0;
  this._ptr$html623afa$$getter_().length$setter(tmp$0 = value) , tmp$0;
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.localStorage$named = function(){
  return this.localStorage$getter().apply(this, arguments);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.localStorage$getter = function(){
  return html623afa$LevelDom$Dart.wrapStorage$member(this._ptr$html623afa$$getter_().localStorage$getter());
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.location$named = function(){
  return this.location$getter().apply(this, arguments);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.location$getter = function(){
  return html623afa$LevelDom$Dart.wrapLocation$member(this._ptr$html623afa$$getter_().location$getter());
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.location$setter = function(value){
  var tmp$0;
  this._ptr$html623afa$$getter_().location$setter(tmp$0 = html623afa$LevelDom$Dart.unwrap$member(value)) , tmp$0;
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.locationbar$named = function(){
  return this.locationbar$getter().apply(this, arguments);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.locationbar$getter = function(){
  return html623afa$LevelDom$Dart.wrapBarInfo$member(this._ptr$html623afa$$getter_().locationbar$getter());
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.locationbar$setter = function(value){
  var tmp$0;
  this._ptr$html623afa$$getter_().locationbar$setter(tmp$0 = html623afa$LevelDom$Dart.unwrap$member(value)) , tmp$0;
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.menubar$named = function(){
  return this.menubar$getter().apply(this, arguments);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.menubar$getter = function(){
  return html623afa$LevelDom$Dart.wrapBarInfo$member(this._ptr$html623afa$$getter_().menubar$getter());
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.menubar$setter = function(value){
  var tmp$0;
  this._ptr$html623afa$$getter_().menubar$setter(tmp$0 = html623afa$LevelDom$Dart.unwrap$member(value)) , tmp$0;
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.name$named = function(){
  return this.name$getter().apply(this, arguments);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.name$getter = function(){
  return this._ptr$html623afa$$getter_().name$getter();
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.name$setter = function(value){
  var tmp$0;
  this._ptr$html623afa$$getter_().name$setter(tmp$0 = value) , tmp$0;
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.navigator$named = function(){
  return this.navigator$getter().apply(this, arguments);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.navigator$getter = function(){
  return html623afa$LevelDom$Dart.wrapNavigator$member(this._ptr$html623afa$$getter_().navigator$getter());
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.navigator$setter = function(value){
  var tmp$0;
  this._ptr$html623afa$$getter_().navigator$setter(tmp$0 = html623afa$LevelDom$Dart.unwrap$member(value)) , tmp$0;
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.offscreenBuffering$named = function(){
  return this.offscreenBuffering$getter().apply(this, arguments);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.offscreenBuffering$getter = function(){
  return this._ptr$html623afa$$getter_().offscreenBuffering$getter();
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.offscreenBuffering$setter = function(value){
  var tmp$0;
  this._ptr$html623afa$$getter_().offscreenBuffering$setter(tmp$0 = value) , tmp$0;
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onabort$named = function(){
  return this.onabort$getter().apply(this, arguments);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onabort$getter = function(){
  return html623afa$LevelDom$Dart.wrapEventListener$member(this._ptr$html623afa$$getter_().onabort$getter());
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onabort$setter = function(value){
  var tmp$0;
  this._ptr$html623afa$$getter_().onabort$setter(tmp$0 = html623afa$LevelDom$Dart.unwrap$member(value)) , tmp$0;
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onbeforeunload$named = function(){
  return this.onbeforeunload$getter().apply(this, arguments);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onbeforeunload$getter = function(){
  return html623afa$LevelDom$Dart.wrapEventListener$member(this._ptr$html623afa$$getter_().onbeforeunload$getter());
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onbeforeunload$setter = function(value){
  var tmp$0;
  this._ptr$html623afa$$getter_().onbeforeunload$setter(tmp$0 = html623afa$LevelDom$Dart.unwrap$member(value)) , tmp$0;
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onblur$named = function(){
  return this.onblur$getter().apply(this, arguments);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onblur$getter = function(){
  return html623afa$LevelDom$Dart.wrapEventListener$member(this._ptr$html623afa$$getter_().onblur$getter());
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onblur$setter = function(value){
  var tmp$0;
  this._ptr$html623afa$$getter_().onblur$setter(tmp$0 = html623afa$LevelDom$Dart.unwrap$member(value)) , tmp$0;
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.oncanplay$named = function(){
  return this.oncanplay$getter().apply(this, arguments);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.oncanplay$getter = function(){
  return html623afa$LevelDom$Dart.wrapEventListener$member(this._ptr$html623afa$$getter_().oncanplay$getter());
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.oncanplay$setter = function(value){
  var tmp$0;
  this._ptr$html623afa$$getter_().oncanplay$setter(tmp$0 = html623afa$LevelDom$Dart.unwrap$member(value)) , tmp$0;
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.oncanplaythrough$named = function(){
  return this.oncanplaythrough$getter().apply(this, arguments);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.oncanplaythrough$getter = function(){
  return html623afa$LevelDom$Dart.wrapEventListener$member(this._ptr$html623afa$$getter_().oncanplaythrough$getter());
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.oncanplaythrough$setter = function(value){
  var tmp$0;
  this._ptr$html623afa$$getter_().oncanplaythrough$setter(tmp$0 = html623afa$LevelDom$Dart.unwrap$member(value)) , tmp$0;
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onchange$named = function(){
  return this.onchange$getter().apply(this, arguments);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onchange$getter = function(){
  return html623afa$LevelDom$Dart.wrapEventListener$member(this._ptr$html623afa$$getter_().onchange$getter());
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onchange$setter = function(value){
  var tmp$0;
  this._ptr$html623afa$$getter_().onchange$setter(tmp$0 = html623afa$LevelDom$Dart.unwrap$member(value)) , tmp$0;
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onclick$named = function(){
  return this.onclick$getter().apply(this, arguments);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onclick$getter = function(){
  return html623afa$LevelDom$Dart.wrapEventListener$member(this._ptr$html623afa$$getter_().onclick$getter());
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onclick$setter = function(value){
  var tmp$0;
  this._ptr$html623afa$$getter_().onclick$setter(tmp$0 = html623afa$LevelDom$Dart.unwrap$member(value)) , tmp$0;
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.oncontextmenu$named = function(){
  return this.oncontextmenu$getter().apply(this, arguments);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.oncontextmenu$getter = function(){
  return html623afa$LevelDom$Dart.wrapEventListener$member(this._ptr$html623afa$$getter_().oncontextmenu$getter());
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.oncontextmenu$setter = function(value){
  var tmp$0;
  this._ptr$html623afa$$getter_().oncontextmenu$setter(tmp$0 = html623afa$LevelDom$Dart.unwrap$member(value)) , tmp$0;
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.ondblclick$named = function(){
  return this.ondblclick$getter().apply(this, arguments);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.ondblclick$getter = function(){
  return html623afa$LevelDom$Dart.wrapEventListener$member(this._ptr$html623afa$$getter_().ondblclick$getter());
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.ondblclick$setter = function(value){
  var tmp$0;
  this._ptr$html623afa$$getter_().ondblclick$setter(tmp$0 = html623afa$LevelDom$Dart.unwrap$member(value)) , tmp$0;
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.ondevicemotion$named = function(){
  return this.ondevicemotion$getter().apply(this, arguments);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.ondevicemotion$getter = function(){
  return html623afa$LevelDom$Dart.wrapEventListener$member(this._ptr$html623afa$$getter_().ondevicemotion$getter());
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.ondevicemotion$setter = function(value){
  var tmp$0;
  this._ptr$html623afa$$getter_().ondevicemotion$setter(tmp$0 = html623afa$LevelDom$Dart.unwrap$member(value)) , tmp$0;
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.ondeviceorientation$named = function(){
  return this.ondeviceorientation$getter().apply(this, arguments);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.ondeviceorientation$getter = function(){
  return html623afa$LevelDom$Dart.wrapEventListener$member(this._ptr$html623afa$$getter_().ondeviceorientation$getter());
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.ondeviceorientation$setter = function(value){
  var tmp$0;
  this._ptr$html623afa$$getter_().ondeviceorientation$setter(tmp$0 = html623afa$LevelDom$Dart.unwrap$member(value)) , tmp$0;
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.ondrag$named = function(){
  return this.ondrag$getter().apply(this, arguments);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.ondrag$getter = function(){
  return html623afa$LevelDom$Dart.wrapEventListener$member(this._ptr$html623afa$$getter_().ondrag$getter());
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.ondrag$setter = function(value){
  var tmp$0;
  this._ptr$html623afa$$getter_().ondrag$setter(tmp$0 = html623afa$LevelDom$Dart.unwrap$member(value)) , tmp$0;
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.ondragend$named = function(){
  return this.ondragend$getter().apply(this, arguments);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.ondragend$getter = function(){
  return html623afa$LevelDom$Dart.wrapEventListener$member(this._ptr$html623afa$$getter_().ondragend$getter());
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.ondragend$setter = function(value){
  var tmp$0;
  this._ptr$html623afa$$getter_().ondragend$setter(tmp$0 = html623afa$LevelDom$Dart.unwrap$member(value)) , tmp$0;
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.ondragenter$named = function(){
  return this.ondragenter$getter().apply(this, arguments);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.ondragenter$getter = function(){
  return html623afa$LevelDom$Dart.wrapEventListener$member(this._ptr$html623afa$$getter_().ondragenter$getter());
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.ondragenter$setter = function(value){
  var tmp$0;
  this._ptr$html623afa$$getter_().ondragenter$setter(tmp$0 = html623afa$LevelDom$Dart.unwrap$member(value)) , tmp$0;
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.ondragleave$named = function(){
  return this.ondragleave$getter().apply(this, arguments);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.ondragleave$getter = function(){
  return html623afa$LevelDom$Dart.wrapEventListener$member(this._ptr$html623afa$$getter_().ondragleave$getter());
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.ondragleave$setter = function(value){
  var tmp$0;
  this._ptr$html623afa$$getter_().ondragleave$setter(tmp$0 = html623afa$LevelDom$Dart.unwrap$member(value)) , tmp$0;
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.ondragover$named = function(){
  return this.ondragover$getter().apply(this, arguments);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.ondragover$getter = function(){
  return html623afa$LevelDom$Dart.wrapEventListener$member(this._ptr$html623afa$$getter_().ondragover$getter());
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.ondragover$setter = function(value){
  var tmp$0;
  this._ptr$html623afa$$getter_().ondragover$setter(tmp$0 = html623afa$LevelDom$Dart.unwrap$member(value)) , tmp$0;
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.ondragstart$named = function(){
  return this.ondragstart$getter().apply(this, arguments);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.ondragstart$getter = function(){
  return html623afa$LevelDom$Dart.wrapEventListener$member(this._ptr$html623afa$$getter_().ondragstart$getter());
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.ondragstart$setter = function(value){
  var tmp$0;
  this._ptr$html623afa$$getter_().ondragstart$setter(tmp$0 = html623afa$LevelDom$Dart.unwrap$member(value)) , tmp$0;
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.ondrop$named = function(){
  return this.ondrop$getter().apply(this, arguments);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.ondrop$getter = function(){
  return html623afa$LevelDom$Dart.wrapEventListener$member(this._ptr$html623afa$$getter_().ondrop$getter());
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.ondrop$setter = function(value){
  var tmp$0;
  this._ptr$html623afa$$getter_().ondrop$setter(tmp$0 = html623afa$LevelDom$Dart.unwrap$member(value)) , tmp$0;
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.ondurationchange$named = function(){
  return this.ondurationchange$getter().apply(this, arguments);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.ondurationchange$getter = function(){
  return html623afa$LevelDom$Dart.wrapEventListener$member(this._ptr$html623afa$$getter_().ondurationchange$getter());
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.ondurationchange$setter = function(value){
  var tmp$0;
  this._ptr$html623afa$$getter_().ondurationchange$setter(tmp$0 = html623afa$LevelDom$Dart.unwrap$member(value)) , tmp$0;
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onemptied$named = function(){
  return this.onemptied$getter().apply(this, arguments);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onemptied$getter = function(){
  return html623afa$LevelDom$Dart.wrapEventListener$member(this._ptr$html623afa$$getter_().onemptied$getter());
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onemptied$setter = function(value){
  var tmp$0;
  this._ptr$html623afa$$getter_().onemptied$setter(tmp$0 = html623afa$LevelDom$Dart.unwrap$member(value)) , tmp$0;
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onended$named = function(){
  return this.onended$getter().apply(this, arguments);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onended$getter = function(){
  return html623afa$LevelDom$Dart.wrapEventListener$member(this._ptr$html623afa$$getter_().onended$getter());
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onended$setter = function(value){
  var tmp$0;
  this._ptr$html623afa$$getter_().onended$setter(tmp$0 = html623afa$LevelDom$Dart.unwrap$member(value)) , tmp$0;
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onerror$named = function(){
  return this.onerror$getter().apply(this, arguments);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onerror$getter = function(){
  return html623afa$LevelDom$Dart.wrapEventListener$member(this._ptr$html623afa$$getter_().onerror$getter());
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onerror$setter = function(value){
  var tmp$0;
  this._ptr$html623afa$$getter_().onerror$setter(tmp$0 = html623afa$LevelDom$Dart.unwrap$member(value)) , tmp$0;
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onfocus$named = function(){
  return this.onfocus$getter().apply(this, arguments);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onfocus$getter = function(){
  return html623afa$LevelDom$Dart.wrapEventListener$member(this._ptr$html623afa$$getter_().onfocus$getter());
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onfocus$setter = function(value){
  var tmp$0;
  this._ptr$html623afa$$getter_().onfocus$setter(tmp$0 = html623afa$LevelDom$Dart.unwrap$member(value)) , tmp$0;
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onhashchange$named = function(){
  return this.onhashchange$getter().apply(this, arguments);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onhashchange$getter = function(){
  return html623afa$LevelDom$Dart.wrapEventListener$member(this._ptr$html623afa$$getter_().onhashchange$getter());
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onhashchange$setter = function(value){
  var tmp$0;
  this._ptr$html623afa$$getter_().onhashchange$setter(tmp$0 = html623afa$LevelDom$Dart.unwrap$member(value)) , tmp$0;
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.oninput$named = function(){
  return this.oninput$getter().apply(this, arguments);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.oninput$getter = function(){
  return html623afa$LevelDom$Dart.wrapEventListener$member(this._ptr$html623afa$$getter_().oninput$getter());
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.oninput$setter = function(value){
  var tmp$0;
  this._ptr$html623afa$$getter_().oninput$setter(tmp$0 = html623afa$LevelDom$Dart.unwrap$member(value)) , tmp$0;
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.oninvalid$named = function(){
  return this.oninvalid$getter().apply(this, arguments);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.oninvalid$getter = function(){
  return html623afa$LevelDom$Dart.wrapEventListener$member(this._ptr$html623afa$$getter_().oninvalid$getter());
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.oninvalid$setter = function(value){
  var tmp$0;
  this._ptr$html623afa$$getter_().oninvalid$setter(tmp$0 = html623afa$LevelDom$Dart.unwrap$member(value)) , tmp$0;
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onkeydown$named = function(){
  return this.onkeydown$getter().apply(this, arguments);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onkeydown$getter = function(){
  return html623afa$LevelDom$Dart.wrapEventListener$member(this._ptr$html623afa$$getter_().onkeydown$getter());
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onkeydown$setter = function(value){
  var tmp$0;
  this._ptr$html623afa$$getter_().onkeydown$setter(tmp$0 = html623afa$LevelDom$Dart.unwrap$member(value)) , tmp$0;
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onkeypress$named = function(){
  return this.onkeypress$getter().apply(this, arguments);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onkeypress$getter = function(){
  return html623afa$LevelDom$Dart.wrapEventListener$member(this._ptr$html623afa$$getter_().onkeypress$getter());
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onkeypress$setter = function(value){
  var tmp$0;
  this._ptr$html623afa$$getter_().onkeypress$setter(tmp$0 = html623afa$LevelDom$Dart.unwrap$member(value)) , tmp$0;
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onkeyup$named = function(){
  return this.onkeyup$getter().apply(this, arguments);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onkeyup$getter = function(){
  return html623afa$LevelDom$Dart.wrapEventListener$member(this._ptr$html623afa$$getter_().onkeyup$getter());
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onkeyup$setter = function(value){
  var tmp$0;
  this._ptr$html623afa$$getter_().onkeyup$setter(tmp$0 = html623afa$LevelDom$Dart.unwrap$member(value)) , tmp$0;
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onload$named = function(){
  return this.onload$getter().apply(this, arguments);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onload$getter = function(){
  return html623afa$LevelDom$Dart.wrapEventListener$member(this._ptr$html623afa$$getter_().onload$getter());
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onload$setter = function(value){
  var tmp$0;
  this._ptr$html623afa$$getter_().onload$setter(tmp$0 = html623afa$LevelDom$Dart.unwrap$member(value)) , tmp$0;
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onloadeddata$named = function(){
  return this.onloadeddata$getter().apply(this, arguments);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onloadeddata$getter = function(){
  return html623afa$LevelDom$Dart.wrapEventListener$member(this._ptr$html623afa$$getter_().onloadeddata$getter());
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onloadeddata$setter = function(value){
  var tmp$0;
  this._ptr$html623afa$$getter_().onloadeddata$setter(tmp$0 = html623afa$LevelDom$Dart.unwrap$member(value)) , tmp$0;
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onloadedmetadata$named = function(){
  return this.onloadedmetadata$getter().apply(this, arguments);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onloadedmetadata$getter = function(){
  return html623afa$LevelDom$Dart.wrapEventListener$member(this._ptr$html623afa$$getter_().onloadedmetadata$getter());
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onloadedmetadata$setter = function(value){
  var tmp$0;
  this._ptr$html623afa$$getter_().onloadedmetadata$setter(tmp$0 = html623afa$LevelDom$Dart.unwrap$member(value)) , tmp$0;
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onloadstart$named = function(){
  return this.onloadstart$getter().apply(this, arguments);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onloadstart$getter = function(){
  return html623afa$LevelDom$Dart.wrapEventListener$member(this._ptr$html623afa$$getter_().onloadstart$getter());
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onloadstart$setter = function(value){
  var tmp$0;
  this._ptr$html623afa$$getter_().onloadstart$setter(tmp$0 = html623afa$LevelDom$Dart.unwrap$member(value)) , tmp$0;
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onmessage$named = function(){
  return this.onmessage$getter().apply(this, arguments);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onmessage$getter = function(){
  return html623afa$LevelDom$Dart.wrapEventListener$member(this._ptr$html623afa$$getter_().onmessage$getter());
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onmessage$setter = function(value){
  var tmp$0;
  this._ptr$html623afa$$getter_().onmessage$setter(tmp$0 = html623afa$LevelDom$Dart.unwrap$member(value)) , tmp$0;
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onmousedown$named = function(){
  return this.onmousedown$getter().apply(this, arguments);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onmousedown$getter = function(){
  return html623afa$LevelDom$Dart.wrapEventListener$member(this._ptr$html623afa$$getter_().onmousedown$getter());
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onmousedown$setter = function(value){
  var tmp$0;
  this._ptr$html623afa$$getter_().onmousedown$setter(tmp$0 = html623afa$LevelDom$Dart.unwrap$member(value)) , tmp$0;
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onmousemove$named = function(){
  return this.onmousemove$getter().apply(this, arguments);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onmousemove$getter = function(){
  return html623afa$LevelDom$Dart.wrapEventListener$member(this._ptr$html623afa$$getter_().onmousemove$getter());
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onmousemove$setter = function(value){
  var tmp$0;
  this._ptr$html623afa$$getter_().onmousemove$setter(tmp$0 = html623afa$LevelDom$Dart.unwrap$member(value)) , tmp$0;
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onmouseout$named = function(){
  return this.onmouseout$getter().apply(this, arguments);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onmouseout$getter = function(){
  return html623afa$LevelDom$Dart.wrapEventListener$member(this._ptr$html623afa$$getter_().onmouseout$getter());
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onmouseout$setter = function(value){
  var tmp$0;
  this._ptr$html623afa$$getter_().onmouseout$setter(tmp$0 = html623afa$LevelDom$Dart.unwrap$member(value)) , tmp$0;
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onmouseover$named = function(){
  return this.onmouseover$getter().apply(this, arguments);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onmouseover$getter = function(){
  return html623afa$LevelDom$Dart.wrapEventListener$member(this._ptr$html623afa$$getter_().onmouseover$getter());
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onmouseover$setter = function(value){
  var tmp$0;
  this._ptr$html623afa$$getter_().onmouseover$setter(tmp$0 = html623afa$LevelDom$Dart.unwrap$member(value)) , tmp$0;
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onmouseup$named = function(){
  return this.onmouseup$getter().apply(this, arguments);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onmouseup$getter = function(){
  return html623afa$LevelDom$Dart.wrapEventListener$member(this._ptr$html623afa$$getter_().onmouseup$getter());
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onmouseup$setter = function(value){
  var tmp$0;
  this._ptr$html623afa$$getter_().onmouseup$setter(tmp$0 = html623afa$LevelDom$Dart.unwrap$member(value)) , tmp$0;
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onmousewheel$named = function(){
  return this.onmousewheel$getter().apply(this, arguments);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onmousewheel$getter = function(){
  return html623afa$LevelDom$Dart.wrapEventListener$member(this._ptr$html623afa$$getter_().onmousewheel$getter());
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onmousewheel$setter = function(value){
  var tmp$0;
  this._ptr$html623afa$$getter_().onmousewheel$setter(tmp$0 = html623afa$LevelDom$Dart.unwrap$member(value)) , tmp$0;
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onoffline$named = function(){
  return this.onoffline$getter().apply(this, arguments);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onoffline$getter = function(){
  return html623afa$LevelDom$Dart.wrapEventListener$member(this._ptr$html623afa$$getter_().onoffline$getter());
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onoffline$setter = function(value){
  var tmp$0;
  this._ptr$html623afa$$getter_().onoffline$setter(tmp$0 = html623afa$LevelDom$Dart.unwrap$member(value)) , tmp$0;
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.ononline$named = function(){
  return this.ononline$getter().apply(this, arguments);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.ononline$getter = function(){
  return html623afa$LevelDom$Dart.wrapEventListener$member(this._ptr$html623afa$$getter_().ononline$getter());
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.ononline$setter = function(value){
  var tmp$0;
  this._ptr$html623afa$$getter_().ononline$setter(tmp$0 = html623afa$LevelDom$Dart.unwrap$member(value)) , tmp$0;
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onpagehide$named = function(){
  return this.onpagehide$getter().apply(this, arguments);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onpagehide$getter = function(){
  return html623afa$LevelDom$Dart.wrapEventListener$member(this._ptr$html623afa$$getter_().onpagehide$getter());
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onpagehide$setter = function(value){
  var tmp$0;
  this._ptr$html623afa$$getter_().onpagehide$setter(tmp$0 = html623afa$LevelDom$Dart.unwrap$member(value)) , tmp$0;
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onpageshow$named = function(){
  return this.onpageshow$getter().apply(this, arguments);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onpageshow$getter = function(){
  return html623afa$LevelDom$Dart.wrapEventListener$member(this._ptr$html623afa$$getter_().onpageshow$getter());
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onpageshow$setter = function(value){
  var tmp$0;
  this._ptr$html623afa$$getter_().onpageshow$setter(tmp$0 = html623afa$LevelDom$Dart.unwrap$member(value)) , tmp$0;
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onpause$named = function(){
  return this.onpause$getter().apply(this, arguments);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onpause$getter = function(){
  return html623afa$LevelDom$Dart.wrapEventListener$member(this._ptr$html623afa$$getter_().onpause$getter());
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onpause$setter = function(value){
  var tmp$0;
  this._ptr$html623afa$$getter_().onpause$setter(tmp$0 = html623afa$LevelDom$Dart.unwrap$member(value)) , tmp$0;
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onplay$named = function(){
  return this.onplay$getter().apply(this, arguments);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onplay$getter = function(){
  return html623afa$LevelDom$Dart.wrapEventListener$member(this._ptr$html623afa$$getter_().onplay$getter());
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onplay$setter = function(value){
  var tmp$0;
  this._ptr$html623afa$$getter_().onplay$setter(tmp$0 = html623afa$LevelDom$Dart.unwrap$member(value)) , tmp$0;
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onplaying$named = function(){
  return this.onplaying$getter().apply(this, arguments);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onplaying$getter = function(){
  return html623afa$LevelDom$Dart.wrapEventListener$member(this._ptr$html623afa$$getter_().onplaying$getter());
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onplaying$setter = function(value){
  var tmp$0;
  this._ptr$html623afa$$getter_().onplaying$setter(tmp$0 = html623afa$LevelDom$Dart.unwrap$member(value)) , tmp$0;
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onpopstate$named = function(){
  return this.onpopstate$getter().apply(this, arguments);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onpopstate$getter = function(){
  return html623afa$LevelDom$Dart.wrapEventListener$member(this._ptr$html623afa$$getter_().onpopstate$getter());
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onpopstate$setter = function(value){
  var tmp$0;
  this._ptr$html623afa$$getter_().onpopstate$setter(tmp$0 = html623afa$LevelDom$Dart.unwrap$member(value)) , tmp$0;
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onprogress$named = function(){
  return this.onprogress$getter().apply(this, arguments);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onprogress$getter = function(){
  return html623afa$LevelDom$Dart.wrapEventListener$member(this._ptr$html623afa$$getter_().onprogress$getter());
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onprogress$setter = function(value){
  var tmp$0;
  this._ptr$html623afa$$getter_().onprogress$setter(tmp$0 = html623afa$LevelDom$Dart.unwrap$member(value)) , tmp$0;
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onratechange$named = function(){
  return this.onratechange$getter().apply(this, arguments);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onratechange$getter = function(){
  return html623afa$LevelDom$Dart.wrapEventListener$member(this._ptr$html623afa$$getter_().onratechange$getter());
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onratechange$setter = function(value){
  var tmp$0;
  this._ptr$html623afa$$getter_().onratechange$setter(tmp$0 = html623afa$LevelDom$Dart.unwrap$member(value)) , tmp$0;
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onreset$named = function(){
  return this.onreset$getter().apply(this, arguments);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onreset$getter = function(){
  return html623afa$LevelDom$Dart.wrapEventListener$member(this._ptr$html623afa$$getter_().onreset$getter());
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onreset$setter = function(value){
  var tmp$0;
  this._ptr$html623afa$$getter_().onreset$setter(tmp$0 = html623afa$LevelDom$Dart.unwrap$member(value)) , tmp$0;
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onresize$named = function(){
  return this.onresize$getter().apply(this, arguments);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onresize$getter = function(){
  return html623afa$LevelDom$Dart.wrapEventListener$member(this._ptr$html623afa$$getter_().onresize$getter());
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onresize$setter = function(value){
  var tmp$0;
  this._ptr$html623afa$$getter_().onresize$setter(tmp$0 = html623afa$LevelDom$Dart.unwrap$member(value)) , tmp$0;
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onscroll$named = function(){
  return this.onscroll$getter().apply(this, arguments);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onscroll$getter = function(){
  return html623afa$LevelDom$Dart.wrapEventListener$member(this._ptr$html623afa$$getter_().onscroll$getter());
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onscroll$setter = function(value){
  var tmp$0;
  this._ptr$html623afa$$getter_().onscroll$setter(tmp$0 = html623afa$LevelDom$Dart.unwrap$member(value)) , tmp$0;
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onsearch$named = function(){
  return this.onsearch$getter().apply(this, arguments);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onsearch$getter = function(){
  return html623afa$LevelDom$Dart.wrapEventListener$member(this._ptr$html623afa$$getter_().onsearch$getter());
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onsearch$setter = function(value){
  var tmp$0;
  this._ptr$html623afa$$getter_().onsearch$setter(tmp$0 = html623afa$LevelDom$Dart.unwrap$member(value)) , tmp$0;
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onseeked$named = function(){
  return this.onseeked$getter().apply(this, arguments);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onseeked$getter = function(){
  return html623afa$LevelDom$Dart.wrapEventListener$member(this._ptr$html623afa$$getter_().onseeked$getter());
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onseeked$setter = function(value){
  var tmp$0;
  this._ptr$html623afa$$getter_().onseeked$setter(tmp$0 = html623afa$LevelDom$Dart.unwrap$member(value)) , tmp$0;
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onseeking$named = function(){
  return this.onseeking$getter().apply(this, arguments);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onseeking$getter = function(){
  return html623afa$LevelDom$Dart.wrapEventListener$member(this._ptr$html623afa$$getter_().onseeking$getter());
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onseeking$setter = function(value){
  var tmp$0;
  this._ptr$html623afa$$getter_().onseeking$setter(tmp$0 = html623afa$LevelDom$Dart.unwrap$member(value)) , tmp$0;
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onselect$named = function(){
  return this.onselect$getter().apply(this, arguments);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onselect$getter = function(){
  return html623afa$LevelDom$Dart.wrapEventListener$member(this._ptr$html623afa$$getter_().onselect$getter());
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onselect$setter = function(value){
  var tmp$0;
  this._ptr$html623afa$$getter_().onselect$setter(tmp$0 = html623afa$LevelDom$Dart.unwrap$member(value)) , tmp$0;
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onstalled$named = function(){
  return this.onstalled$getter().apply(this, arguments);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onstalled$getter = function(){
  return html623afa$LevelDom$Dart.wrapEventListener$member(this._ptr$html623afa$$getter_().onstalled$getter());
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onstalled$setter = function(value){
  var tmp$0;
  this._ptr$html623afa$$getter_().onstalled$setter(tmp$0 = html623afa$LevelDom$Dart.unwrap$member(value)) , tmp$0;
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onstorage$named = function(){
  return this.onstorage$getter().apply(this, arguments);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onstorage$getter = function(){
  return html623afa$LevelDom$Dart.wrapEventListener$member(this._ptr$html623afa$$getter_().onstorage$getter());
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onstorage$setter = function(value){
  var tmp$0;
  this._ptr$html623afa$$getter_().onstorage$setter(tmp$0 = html623afa$LevelDom$Dart.unwrap$member(value)) , tmp$0;
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onsubmit$named = function(){
  return this.onsubmit$getter().apply(this, arguments);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onsubmit$getter = function(){
  return html623afa$LevelDom$Dart.wrapEventListener$member(this._ptr$html623afa$$getter_().onsubmit$getter());
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onsubmit$setter = function(value){
  var tmp$0;
  this._ptr$html623afa$$getter_().onsubmit$setter(tmp$0 = html623afa$LevelDom$Dart.unwrap$member(value)) , tmp$0;
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onsuspend$named = function(){
  return this.onsuspend$getter().apply(this, arguments);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onsuspend$getter = function(){
  return html623afa$LevelDom$Dart.wrapEventListener$member(this._ptr$html623afa$$getter_().onsuspend$getter());
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onsuspend$setter = function(value){
  var tmp$0;
  this._ptr$html623afa$$getter_().onsuspend$setter(tmp$0 = html623afa$LevelDom$Dart.unwrap$member(value)) , tmp$0;
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.ontimeupdate$named = function(){
  return this.ontimeupdate$getter().apply(this, arguments);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.ontimeupdate$getter = function(){
  return html623afa$LevelDom$Dart.wrapEventListener$member(this._ptr$html623afa$$getter_().ontimeupdate$getter());
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.ontimeupdate$setter = function(value){
  var tmp$0;
  this._ptr$html623afa$$getter_().ontimeupdate$setter(tmp$0 = html623afa$LevelDom$Dart.unwrap$member(value)) , tmp$0;
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.ontouchcancel$named = function(){
  return this.ontouchcancel$getter().apply(this, arguments);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.ontouchcancel$getter = function(){
  return html623afa$LevelDom$Dart.wrapEventListener$member(this._ptr$html623afa$$getter_().ontouchcancel$getter());
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.ontouchcancel$setter = function(value){
  var tmp$0;
  this._ptr$html623afa$$getter_().ontouchcancel$setter(tmp$0 = html623afa$LevelDom$Dart.unwrap$member(value)) , tmp$0;
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.ontouchend$named = function(){
  return this.ontouchend$getter().apply(this, arguments);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.ontouchend$getter = function(){
  return html623afa$LevelDom$Dart.wrapEventListener$member(this._ptr$html623afa$$getter_().ontouchend$getter());
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.ontouchend$setter = function(value){
  var tmp$0;
  this._ptr$html623afa$$getter_().ontouchend$setter(tmp$0 = html623afa$LevelDom$Dart.unwrap$member(value)) , tmp$0;
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.ontouchmove$named = function(){
  return this.ontouchmove$getter().apply(this, arguments);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.ontouchmove$getter = function(){
  return html623afa$LevelDom$Dart.wrapEventListener$member(this._ptr$html623afa$$getter_().ontouchmove$getter());
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.ontouchmove$setter = function(value){
  var tmp$0;
  this._ptr$html623afa$$getter_().ontouchmove$setter(tmp$0 = html623afa$LevelDom$Dart.unwrap$member(value)) , tmp$0;
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.ontouchstart$named = function(){
  return this.ontouchstart$getter().apply(this, arguments);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.ontouchstart$getter = function(){
  return html623afa$LevelDom$Dart.wrapEventListener$member(this._ptr$html623afa$$getter_().ontouchstart$getter());
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.ontouchstart$setter = function(value){
  var tmp$0;
  this._ptr$html623afa$$getter_().ontouchstart$setter(tmp$0 = html623afa$LevelDom$Dart.unwrap$member(value)) , tmp$0;
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onunload$named = function(){
  return this.onunload$getter().apply(this, arguments);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onunload$getter = function(){
  return html623afa$LevelDom$Dart.wrapEventListener$member(this._ptr$html623afa$$getter_().onunload$getter());
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onunload$setter = function(value){
  var tmp$0;
  this._ptr$html623afa$$getter_().onunload$setter(tmp$0 = html623afa$LevelDom$Dart.unwrap$member(value)) , tmp$0;
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onvolumechange$named = function(){
  return this.onvolumechange$getter().apply(this, arguments);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onvolumechange$getter = function(){
  return html623afa$LevelDom$Dart.wrapEventListener$member(this._ptr$html623afa$$getter_().onvolumechange$getter());
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onvolumechange$setter = function(value){
  var tmp$0;
  this._ptr$html623afa$$getter_().onvolumechange$setter(tmp$0 = html623afa$LevelDom$Dart.unwrap$member(value)) , tmp$0;
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onwaiting$named = function(){
  return this.onwaiting$getter().apply(this, arguments);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onwaiting$getter = function(){
  return html623afa$LevelDom$Dart.wrapEventListener$member(this._ptr$html623afa$$getter_().onwaiting$getter());
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onwaiting$setter = function(value){
  var tmp$0;
  this._ptr$html623afa$$getter_().onwaiting$setter(tmp$0 = html623afa$LevelDom$Dart.unwrap$member(value)) , tmp$0;
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onwebkitanimationend$named = function(){
  return this.onwebkitanimationend$getter().apply(this, arguments);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onwebkitanimationend$getter = function(){
  return html623afa$LevelDom$Dart.wrapEventListener$member(this._ptr$html623afa$$getter_().onwebkitanimationend$getter());
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onwebkitanimationend$setter = function(value){
  var tmp$0;
  this._ptr$html623afa$$getter_().onwebkitanimationend$setter(tmp$0 = html623afa$LevelDom$Dart.unwrap$member(value)) , tmp$0;
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onwebkitanimationiteration$named = function(){
  return this.onwebkitanimationiteration$getter().apply(this, arguments);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onwebkitanimationiteration$getter = function(){
  return html623afa$LevelDom$Dart.wrapEventListener$member(this._ptr$html623afa$$getter_().onwebkitanimationiteration$getter());
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onwebkitanimationiteration$setter = function(value){
  var tmp$0;
  this._ptr$html623afa$$getter_().onwebkitanimationiteration$setter(tmp$0 = html623afa$LevelDom$Dart.unwrap$member(value)) , tmp$0;
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onwebkitanimationstart$named = function(){
  return this.onwebkitanimationstart$getter().apply(this, arguments);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onwebkitanimationstart$getter = function(){
  return html623afa$LevelDom$Dart.wrapEventListener$member(this._ptr$html623afa$$getter_().onwebkitanimationstart$getter());
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onwebkitanimationstart$setter = function(value){
  var tmp$0;
  this._ptr$html623afa$$getter_().onwebkitanimationstart$setter(tmp$0 = html623afa$LevelDom$Dart.unwrap$member(value)) , tmp$0;
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onwebkittransitionend$named = function(){
  return this.onwebkittransitionend$getter().apply(this, arguments);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onwebkittransitionend$getter = function(){
  return html623afa$LevelDom$Dart.wrapEventListener$member(this._ptr$html623afa$$getter_().onwebkittransitionend$getter());
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.onwebkittransitionend$setter = function(value){
  var tmp$0;
  this._ptr$html623afa$$getter_().onwebkittransitionend$setter(tmp$0 = html623afa$LevelDom$Dart.unwrap$member(value)) , tmp$0;
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.opener$named = function(){
  return this.opener$getter().apply(this, arguments);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.opener$getter = function(){
  return html623afa$LevelDom$Dart.wrapWindow$member(this._ptr$html623afa$$getter_().opener$getter());
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.opener$setter = function(value){
  var tmp$0;
  this._ptr$html623afa$$getter_().opener$setter(tmp$0 = html623afa$LevelDom$Dart.unwrap$member(value)) , tmp$0;
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.outerHeight$named = function(){
  return this.outerHeight$getter().apply(this, arguments);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.outerHeight$getter = function(){
  return this._ptr$html623afa$$getter_().outerHeight$getter();
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.outerHeight$setter = function(value){
  var tmp$0;
  this._ptr$html623afa$$getter_().outerHeight$setter(tmp$0 = value) , tmp$0;
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.outerWidth$named = function(){
  return this.outerWidth$getter().apply(this, arguments);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.outerWidth$getter = function(){
  return this._ptr$html623afa$$getter_().outerWidth$getter();
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.outerWidth$setter = function(value){
  var tmp$0;
  this._ptr$html623afa$$getter_().outerWidth$setter(tmp$0 = value) , tmp$0;
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.pageXOffset$named = function(){
  return this.pageXOffset$getter().apply(this, arguments);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.pageXOffset$getter = function(){
  return this._ptr$html623afa$$getter_().pageXOffset$getter();
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.pageYOffset$named = function(){
  return this.pageYOffset$getter().apply(this, arguments);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.pageYOffset$getter = function(){
  return this._ptr$html623afa$$getter_().pageYOffset$getter();
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.parent$named = function(){
  return this.parent$getter().apply(this, arguments);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.parent$getter = function(){
  return html623afa$LevelDom$Dart.wrapWindow$member(this._ptr$html623afa$$getter_().parent$getter());
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.parent$setter = function(value){
  var tmp$0;
  this._ptr$html623afa$$getter_().parent$setter(tmp$0 = html623afa$LevelDom$Dart.unwrap$member(value)) , tmp$0;
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.personalbar$named = function(){
  return this.personalbar$getter().apply(this, arguments);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.personalbar$getter = function(){
  return html623afa$LevelDom$Dart.wrapBarInfo$member(this._ptr$html623afa$$getter_().personalbar$getter());
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.personalbar$setter = function(value){
  var tmp$0;
  this._ptr$html623afa$$getter_().personalbar$setter(tmp$0 = html623afa$LevelDom$Dart.unwrap$member(value)) , tmp$0;
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.screen$named = function(){
  return this.screen$getter().apply(this, arguments);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.screen$getter = function(){
  return html623afa$LevelDom$Dart.wrapScreen$member(this._ptr$html623afa$$getter_().screen$getter());
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.screen$setter = function(value){
  var tmp$0;
  this._ptr$html623afa$$getter_().screen$setter(tmp$0 = html623afa$LevelDom$Dart.unwrap$member(value)) , tmp$0;
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.screenLeft$named = function(){
  return this.screenLeft$getter().apply(this, arguments);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.screenLeft$getter = function(){
  return this._ptr$html623afa$$getter_().screenLeft$getter();
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.screenLeft$setter = function(value){
  var tmp$0;
  this._ptr$html623afa$$getter_().screenLeft$setter(tmp$0 = value) , tmp$0;
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.screenTop$named = function(){
  return this.screenTop$getter().apply(this, arguments);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.screenTop$getter = function(){
  return this._ptr$html623afa$$getter_().screenTop$getter();
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.screenTop$setter = function(value){
  var tmp$0;
  this._ptr$html623afa$$getter_().screenTop$setter(tmp$0 = value) , tmp$0;
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.screenX$named = function(){
  return this.screenX$getter().apply(this, arguments);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.screenX$getter = function(){
  return this._ptr$html623afa$$getter_().screenX$getter();
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.screenX$setter = function(value){
  var tmp$0;
  this._ptr$html623afa$$getter_().screenX$setter(tmp$0 = value) , tmp$0;
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.screenY$named = function(){
  return this.screenY$getter().apply(this, arguments);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.screenY$getter = function(){
  return this._ptr$html623afa$$getter_().screenY$getter();
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.screenY$setter = function(value){
  var tmp$0;
  this._ptr$html623afa$$getter_().screenY$setter(tmp$0 = value) , tmp$0;
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.scrollX$named = function(){
  return this.scrollX$getter().apply(this, arguments);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.scrollX$getter = function(){
  return this._ptr$html623afa$$getter_().scrollX$getter();
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.scrollX$setter = function(value){
  var tmp$0;
  this._ptr$html623afa$$getter_().scrollX$setter(tmp$0 = value) , tmp$0;
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.scrollY$named = function(){
  return this.scrollY$getter().apply(this, arguments);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.scrollY$getter = function(){
  return this._ptr$html623afa$$getter_().scrollY$getter();
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.scrollY$setter = function(value){
  var tmp$0;
  this._ptr$html623afa$$getter_().scrollY$setter(tmp$0 = value) , tmp$0;
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.scrollbars$named = function(){
  return this.scrollbars$getter().apply(this, arguments);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.scrollbars$getter = function(){
  return html623afa$LevelDom$Dart.wrapBarInfo$member(this._ptr$html623afa$$getter_().scrollbars$getter());
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.scrollbars$setter = function(value){
  var tmp$0;
  this._ptr$html623afa$$getter_().scrollbars$setter(tmp$0 = html623afa$LevelDom$Dart.unwrap$member(value)) , tmp$0;
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.self$named = function(){
  return this.self$getter().apply(this, arguments);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.self$getter = function(){
  return html623afa$LevelDom$Dart.wrapWindow$member(this._ptr$html623afa$$getter_().self$getter());
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.self$setter = function(value){
  var tmp$0;
  this._ptr$html623afa$$getter_().self$setter(tmp$0 = html623afa$LevelDom$Dart.unwrap$member(value)) , tmp$0;
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.sessionStorage$named = function(){
  return this.sessionStorage$getter().apply(this, arguments);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.sessionStorage$getter = function(){
  return html623afa$LevelDom$Dart.wrapStorage$member(this._ptr$html623afa$$getter_().sessionStorage$getter());
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.status$named = function(){
  return this.status$getter().apply(this, arguments);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.status$getter = function(){
  return this._ptr$html623afa$$getter_().status$getter();
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.status$setter = function(value){
  var tmp$0;
  this._ptr$html623afa$$getter_().status$setter(tmp$0 = value) , tmp$0;
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.statusbar$named = function(){
  return this.statusbar$getter().apply(this, arguments);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.statusbar$getter = function(){
  return html623afa$LevelDom$Dart.wrapBarInfo$member(this._ptr$html623afa$$getter_().statusbar$getter());
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.statusbar$setter = function(value){
  var tmp$0;
  this._ptr$html623afa$$getter_().statusbar$setter(tmp$0 = html623afa$LevelDom$Dart.unwrap$member(value)) , tmp$0;
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.styleMedia$named = function(){
  return this.styleMedia$getter().apply(this, arguments);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.styleMedia$getter = function(){
  return html623afa$LevelDom$Dart.wrapStyleMedia$member(this._ptr$html623afa$$getter_().styleMedia$getter());
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.toolbar$named = function(){
  return this.toolbar$getter().apply(this, arguments);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.toolbar$getter = function(){
  return html623afa$LevelDom$Dart.wrapBarInfo$member(this._ptr$html623afa$$getter_().toolbar$getter());
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.toolbar$setter = function(value){
  var tmp$0;
  this._ptr$html623afa$$getter_().toolbar$setter(tmp$0 = html623afa$LevelDom$Dart.unwrap$member(value)) , tmp$0;
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.top$named = function(){
  return this.top$getter().apply(this, arguments);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.top$getter = function(){
  return html623afa$LevelDom$Dart.wrapWindow$member(this._ptr$html623afa$$getter_().top$getter());
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.top$setter = function(value){
  var tmp$0;
  this._ptr$html623afa$$getter_().top$setter(tmp$0 = html623afa$LevelDom$Dart.unwrap$member(value)) , tmp$0;
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.webkitNotifications$named = function(){
  return this.webkitNotifications$getter().apply(this, arguments);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.webkitNotifications$getter = function(){
  return html623afa$LevelDom$Dart.wrapNotificationCenter$member(this._ptr$html623afa$$getter_().webkitNotifications$getter());
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.alert$member = function(message){
  if (message == null) {
    this._ptr$html623afa$$getter_().alert$named(0, $noargs);
  }
   else {
    this._ptr$html623afa$$getter_().alert$named(1, $noargs, message);
  }
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.alert$named = function($n, $o, message){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 0:
      message = $o.message?(++seen , $o.message):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$WindowWrappingImplementation$Dart.prototype.alert$member.call(this, message);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.alert$getter = function alert$getter(){
  return $bind(html623afa$WindowWrappingImplementation$Dart.prototype.alert$named, this);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.atob$member = function(string){
  if (string == null) {
    return this._ptr$html623afa$$getter_().atob$named(0, $noargs);
  }
   else {
    return this._ptr$html623afa$$getter_().atob$named(1, $noargs, string);
  }
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.atob$named = function($n, $o, string){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 0:
      string = $o.string?(++seen , $o.string):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$WindowWrappingImplementation$Dart.prototype.atob$member.call(this, string);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.atob$getter = function atob$getter(){
  return $bind(html623afa$WindowWrappingImplementation$Dart.prototype.atob$named, this);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.blur$member = function(){
  this._ptr$html623afa$$getter_().blur$named(0, $noargs);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.blur$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return html623afa$WindowWrappingImplementation$Dart.prototype.blur$member.call(this);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.blur$getter = function blur$getter(){
  return $bind(html623afa$WindowWrappingImplementation$Dart.prototype.blur$named, this);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.btoa$member = function(string){
  if (string == null) {
    return this._ptr$html623afa$$getter_().btoa$named(0, $noargs);
  }
   else {
    return this._ptr$html623afa$$getter_().btoa$named(1, $noargs, string);
  }
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.btoa$named = function($n, $o, string){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 0:
      string = $o.string?(++seen , $o.string):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$WindowWrappingImplementation$Dart.prototype.btoa$member.call(this, string);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.btoa$getter = function btoa$getter(){
  return $bind(html623afa$WindowWrappingImplementation$Dart.prototype.btoa$named, this);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.captureEvents$member = function(){
  this._ptr$html623afa$$getter_().captureEvents$named(0, $noargs);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.captureEvents$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return html623afa$WindowWrappingImplementation$Dart.prototype.captureEvents$member.call(this);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.captureEvents$getter = function captureEvents$getter(){
  return $bind(html623afa$WindowWrappingImplementation$Dart.prototype.captureEvents$named, this);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.clearInterval$member = function(handle){
  if (handle == null) {
    this._ptr$html623afa$$getter_().clearInterval$named(0, $noargs);
  }
   else {
    this._ptr$html623afa$$getter_().clearInterval$named(1, $noargs, handle);
  }
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.clearInterval$named = function($n, $o, handle){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 0:
      handle = $o.handle?(++seen , $o.handle):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$WindowWrappingImplementation$Dart.prototype.clearInterval$member.call(this, handle);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.clearInterval$getter = function clearInterval$getter(){
  return $bind(html623afa$WindowWrappingImplementation$Dart.prototype.clearInterval$named, this);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.clearTimeout$member = function(handle){
  if (handle == null) {
    this._ptr$html623afa$$getter_().clearTimeout$named(0, $noargs);
  }
   else {
    this._ptr$html623afa$$getter_().clearTimeout$named(1, $noargs, handle);
  }
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.clearTimeout$named = function($n, $o, handle){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 0:
      handle = $o.handle?(++seen , $o.handle):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$WindowWrappingImplementation$Dart.prototype.clearTimeout$member.call(this, handle);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.clearTimeout$getter = function clearTimeout$getter(){
  return $bind(html623afa$WindowWrappingImplementation$Dart.prototype.clearTimeout$named, this);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.close$member = function(){
  this._ptr$html623afa$$getter_().close$named(0, $noargs);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.close$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return html623afa$WindowWrappingImplementation$Dart.prototype.close$member.call(this);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.close$getter = function close$getter(){
  return $bind(html623afa$WindowWrappingImplementation$Dart.prototype.close$named, this);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.confirm$member = function(message){
  if (message == null) {
    return this._ptr$html623afa$$getter_().confirm$named(0, $noargs);
  }
   else {
    return this._ptr$html623afa$$getter_().confirm$named(1, $noargs, message);
  }
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.confirm$named = function($n, $o, message){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 0:
      message = $o.message?(++seen , $o.message):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$WindowWrappingImplementation$Dart.prototype.confirm$member.call(this, message);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.confirm$getter = function confirm$getter(){
  return $bind(html623afa$WindowWrappingImplementation$Dart.prototype.confirm$named, this);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.createFileReader$member = function(){
  return html623afa$LevelDom$Dart.wrapFileReader$member(this._ptr$html623afa$$getter_().createFileReader$named(0, $noargs));
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.createFileReader$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return html623afa$WindowWrappingImplementation$Dart.prototype.createFileReader$member.call(this);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.createFileReader$getter = function createFileReader$getter(){
  return $bind(html623afa$WindowWrappingImplementation$Dart.prototype.createFileReader$named, this);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.createCSSMatrix$member = function(cssValue){
  if (cssValue == null) {
    return html623afa$LevelDom$Dart.wrapCSSMatrix$member(this._ptr$html623afa$$getter_().createWebKitCSSMatrix$named(0, $noargs));
  }
   else {
    return html623afa$LevelDom$Dart.wrapCSSMatrix$member(this._ptr$html623afa$$getter_().createWebKitCSSMatrix$named(1, $noargs, cssValue));
  }
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.createCSSMatrix$named = function($n, $o, cssValue){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 0:
      cssValue = $o.cssValue?(++seen , $o.cssValue):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$WindowWrappingImplementation$Dart.prototype.createCSSMatrix$member.call(this, cssValue);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.createCSSMatrix$getter = function createCSSMatrix$getter(){
  return $bind(html623afa$WindowWrappingImplementation$Dart.prototype.createCSSMatrix$named, this);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.find$member = function(string, caseSensitive, backwards, wrap, wholeWord, searchInFrames, showDialog){
  if (string == null) {
    if (caseSensitive == null) {
      if (backwards == null) {
        if (wrap == null) {
          if (wholeWord == null) {
            if (searchInFrames == null) {
              if (showDialog == null) {
                return this._ptr$html623afa$$getter_().find$named(0, $noargs);
              }
            }
          }
        }
      }
    }
  }
   else {
    if (caseSensitive == null) {
      if (backwards == null) {
        if (wrap == null) {
          if (wholeWord == null) {
            if (searchInFrames == null) {
              if (showDialog == null) {
                return this._ptr$html623afa$$getter_().find$named(1, $noargs, string);
              }
            }
          }
        }
      }
    }
     else {
      if (backwards == null) {
        if (wrap == null) {
          if (wholeWord == null) {
            if (searchInFrames == null) {
              if (showDialog == null) {
                return this._ptr$html623afa$$getter_().find$named(2, $noargs, string, caseSensitive);
              }
            }
          }
        }
      }
       else {
        if (wrap == null) {
          if (wholeWord == null) {
            if (searchInFrames == null) {
              if (showDialog == null) {
                return this._ptr$html623afa$$getter_().find$named(3, $noargs, string, caseSensitive, backwards);
              }
            }
          }
        }
         else {
          if (wholeWord == null) {
            if (searchInFrames == null) {
              if (showDialog == null) {
                return this._ptr$html623afa$$getter_().find$named(4, $noargs, string, caseSensitive, backwards, wrap);
              }
            }
          }
           else {
            if (searchInFrames == null) {
              if (showDialog == null) {
                return this._ptr$html623afa$$getter_().find$named(5, $noargs, string, caseSensitive, backwards, wrap, wholeWord);
              }
            }
             else {
              if (showDialog == null) {
                return this._ptr$html623afa$$getter_().find$named(6, $noargs, string, caseSensitive, backwards, wrap, wholeWord, searchInFrames);
              }
               else {
                return this._ptr$html623afa$$getter_().find$named(7, $noargs, string, caseSensitive, backwards, wrap, wholeWord, searchInFrames, showDialog);
              }
            }
          }
        }
      }
    }
  }
  $Dart$ThrowException('Incorrect number or type of arguments');
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.find$named = function($n, $o, string, caseSensitive, backwards, wrap, wholeWord, searchInFrames, showDialog){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 0:
      string = $o.string?(++seen , $o.string):(++def , $Dart$Null);
    case 1:
      caseSensitive = $o.caseSensitive?(++seen , $o.caseSensitive):(++def , $Dart$Null);
    case 2:
      backwards = $o.backwards?(++seen , $o.backwards):(++def , $Dart$Null);
    case 3:
      wrap = $o.wrap?(++seen , $o.wrap):(++def , $Dart$Null);
    case 4:
      wholeWord = $o.wholeWord?(++seen , $o.wholeWord):(++def , $Dart$Null);
    case 5:
      searchInFrames = $o.searchInFrames?(++seen , $o.searchInFrames):(++def , $Dart$Null);
    case 6:
      showDialog = $o.showDialog?(++seen , $o.showDialog):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 7)
    $nsme();
  return html623afa$WindowWrappingImplementation$Dart.prototype.find$member.call(this, string, caseSensitive, backwards, wrap, wholeWord, searchInFrames, showDialog);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.find$getter = function find$getter(){
  return $bind(html623afa$WindowWrappingImplementation$Dart.prototype.find$named, this);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.focus$member = function(){
  this._ptr$html623afa$$getter_().focus$named(0, $noargs);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.focus$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return html623afa$WindowWrappingImplementation$Dart.prototype.focus$member.call(this);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.focus$getter = function focus$getter(){
  return $bind(html623afa$WindowWrappingImplementation$Dart.prototype.focus$named, this);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.getComputedStyle$member = function(element, pseudoElement){
  if (element == null) {
    if (pseudoElement == null) {
      return html623afa$LevelDom$Dart.wrapCSSStyleDeclaration$member(this._ptr$html623afa$$getter_().getComputedStyle$named(0, $noargs));
    }
  }
   else {
    if (pseudoElement == null) {
      return html623afa$LevelDom$Dart.wrapCSSStyleDeclaration$member(this._ptr$html623afa$$getter_().getComputedStyle$named(1, $noargs, html623afa$LevelDom$Dart.unwrap$member(element)));
    }
     else {
      return html623afa$LevelDom$Dart.wrapCSSStyleDeclaration$member(this._ptr$html623afa$$getter_().getComputedStyle$named(2, $noargs, html623afa$LevelDom$Dart.unwrap$member(element), pseudoElement));
    }
  }
  $Dart$ThrowException('Incorrect number or type of arguments');
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.getComputedStyle$named = function($n, $o, element, pseudoElement){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 0:
      element = $o.element?(++seen , $o.element):(++def , $Dart$Null);
    case 1:
      pseudoElement = $o.pseudoElement?(++seen , $o.pseudoElement):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return html623afa$WindowWrappingImplementation$Dart.prototype.getComputedStyle$member.call(this, element, pseudoElement);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.getComputedStyle$getter = function getComputedStyle$getter(){
  return $bind(html623afa$WindowWrappingImplementation$Dart.prototype.getComputedStyle$named, this);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.getSelection$member = function(){
  return html623afa$LevelDom$Dart.wrapDOMSelection$member(this._ptr$html623afa$$getter_().getSelection$named(0, $noargs));
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.getSelection$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return html623afa$WindowWrappingImplementation$Dart.prototype.getSelection$member.call(this);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.getSelection$getter = function getSelection$getter(){
  return $bind(html623afa$WindowWrappingImplementation$Dart.prototype.getSelection$named, this);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.matchMedia$member = function(query){
  return html623afa$LevelDom$Dart.wrapMediaQueryList$member(this._ptr$html623afa$$getter_().matchMedia$named(1, $noargs, query));
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.matchMedia$named = function($n, $o, query){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$WindowWrappingImplementation$Dart.prototype.matchMedia$member.call(this, query);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.matchMedia$getter = function matchMedia$getter(){
  return $bind(html623afa$WindowWrappingImplementation$Dart.prototype.matchMedia$named, this);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.moveBy$member = function(x, y){
  this._ptr$html623afa$$getter_().moveBy$named(2, $noargs, x, y);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.moveBy$named = function($n, $o, x, y){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return html623afa$WindowWrappingImplementation$Dart.prototype.moveBy$member.call(this, x, y);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.moveBy$getter = function moveBy$getter(){
  return $bind(html623afa$WindowWrappingImplementation$Dart.prototype.moveBy$named, this);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.moveTo$member = function(x, y){
  this._ptr$html623afa$$getter_().moveTo$named(2, $noargs, x, y);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.moveTo$named = function($n, $o, x, y){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return html623afa$WindowWrappingImplementation$Dart.prototype.moveTo$member.call(this, x, y);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.moveTo$getter = function moveTo$getter(){
  return $bind(html623afa$WindowWrappingImplementation$Dart.prototype.moveTo$named, this);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.open$member = function(url, target, features){
  if (features == null) {
    return html623afa$LevelDom$Dart.wrapWindow$member(this._ptr$html623afa$$getter_().open$named(2, $noargs, url, target));
  }
   else {
    return html623afa$LevelDom$Dart.wrapWindow$member(this._ptr$html623afa$$getter_().open$named(3, $noargs, url, target, features));
  }
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.open$named = function($n, $o, url, target, features){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 2:
      features = $o.features?(++seen , $o.features):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return html623afa$WindowWrappingImplementation$Dart.prototype.open$member.call(this, url, target, features);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.open$getter = function open$getter(){
  return $bind(html623afa$WindowWrappingImplementation$Dart.prototype.open$named, this);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.postMessage$member = function(message, messagePort, targetOrigin){
  if (targetOrigin == null) {
    if (messagePort == null) {
      this._ptr$html623afa$$getter_().postMessage$named(1, $noargs, message);
      return;
    }
     else {
      this._ptr$html623afa$$getter_().postMessage$named(2, $noargs, message, messagePort);
      return;
    }
  }
   else {
    this._ptr$html623afa$$getter_().postMessage$named(3, $noargs, message, html623afa$LevelDom$Dart.unwrap$member(messagePort), targetOrigin);
    return;
  }
  $Dart$ThrowException('Incorrect number or type of arguments');
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.postMessage$named = function($n, $o, message, messagePort, targetOrigin){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 1:
      messagePort = $o.messagePort?(++seen , $o.messagePort):(++def , $Dart$Null);
    case 2:
      targetOrigin = $o.targetOrigin?(++seen , $o.targetOrigin):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return html623afa$WindowWrappingImplementation$Dart.prototype.postMessage$member.call(this, message, messagePort, targetOrigin);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.postMessage$getter = function postMessage$getter(){
  return $bind(html623afa$WindowWrappingImplementation$Dart.prototype.postMessage$named, this);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.print$member = function(){
  this._ptr$html623afa$$getter_().print$named(0, $noargs);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.print$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return html623afa$WindowWrappingImplementation$Dart.prototype.print$member.call(this);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.print$getter = function print$getter(){
  return $bind(html623afa$WindowWrappingImplementation$Dart.prototype.print$named, this);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.prompt$member = function(message, defaultValue){
  if (message == null) {
    if (defaultValue == null) {
      return this._ptr$html623afa$$getter_().prompt$named(0, $noargs);
    }
  }
   else {
    if (defaultValue == null) {
      return this._ptr$html623afa$$getter_().prompt$named(1, $noargs, message);
    }
     else {
      return this._ptr$html623afa$$getter_().prompt$named(2, $noargs, message, defaultValue);
    }
  }
  $Dart$ThrowException('Incorrect number or type of arguments');
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.prompt$named = function($n, $o, message, defaultValue){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 0:
      message = $o.message?(++seen , $o.message):(++def , $Dart$Null);
    case 1:
      defaultValue = $o.defaultValue?(++seen , $o.defaultValue):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return html623afa$WindowWrappingImplementation$Dart.prototype.prompt$member.call(this, message, defaultValue);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.prompt$getter = function prompt$getter(){
  return $bind(html623afa$WindowWrappingImplementation$Dart.prototype.prompt$named, this);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.releaseEvents$member = function(){
  this._ptr$html623afa$$getter_().releaseEvents$named(0, $noargs);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.releaseEvents$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return html623afa$WindowWrappingImplementation$Dart.prototype.releaseEvents$member.call(this);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.releaseEvents$getter = function releaseEvents$getter(){
  return $bind(html623afa$WindowWrappingImplementation$Dart.prototype.releaseEvents$named, this);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.resizeBy$member = function(x, y){
  this._ptr$html623afa$$getter_().resizeBy$named(2, $noargs, x, y);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.resizeBy$named = function($n, $o, x, y){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return html623afa$WindowWrappingImplementation$Dart.prototype.resizeBy$member.call(this, x, y);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.resizeBy$getter = function resizeBy$getter(){
  return $bind(html623afa$WindowWrappingImplementation$Dart.prototype.resizeBy$named, this);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.resizeTo$member = function(width, height){
  this._ptr$html623afa$$getter_().resizeTo$named(2, $noargs, width, height);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.resizeTo$named = function($n, $o, width, height){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return html623afa$WindowWrappingImplementation$Dart.prototype.resizeTo$member.call(this, width, height);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.resizeTo$getter = function resizeTo$getter(){
  return $bind(html623afa$WindowWrappingImplementation$Dart.prototype.resizeTo$named, this);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.scroll$member = function(x, y){
  this._ptr$html623afa$$getter_().scroll$named(2, $noargs, x, y);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.scroll$named = function($n, $o, x, y){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return html623afa$WindowWrappingImplementation$Dart.prototype.scroll$member.call(this, x, y);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.scroll$getter = function scroll$getter(){
  return $bind(html623afa$WindowWrappingImplementation$Dart.prototype.scroll$named, this);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.scrollBy$member = function(x, y){
  this._ptr$html623afa$$getter_().scrollBy$named(2, $noargs, x, y);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.scrollBy$named = function($n, $o, x, y){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return html623afa$WindowWrappingImplementation$Dart.prototype.scrollBy$member.call(this, x, y);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.scrollBy$getter = function scrollBy$getter(){
  return $bind(html623afa$WindowWrappingImplementation$Dart.prototype.scrollBy$named, this);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.scrollTo$member = function(x, y){
  this._ptr$html623afa$$getter_().scrollTo$named(2, $noargs, x, y);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.scrollTo$named = function($n, $o, x, y){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return html623afa$WindowWrappingImplementation$Dart.prototype.scrollTo$member.call(this, x, y);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.scrollTo$getter = function scrollTo$getter(){
  return $bind(html623afa$WindowWrappingImplementation$Dart.prototype.scrollTo$named, this);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.setInterval$member = function(handler, timeout){
  return this._ptr$html623afa$$getter_().setInterval$named(2, $noargs, handler, timeout);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.setInterval$named = function($n, $o, handler, timeout){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return html623afa$WindowWrappingImplementation$Dart.prototype.setInterval$member.call(this, handler, timeout);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.setInterval$getter = function setInterval$getter(){
  return $bind(html623afa$WindowWrappingImplementation$Dart.prototype.setInterval$named, this);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.setTimeout$member = function(handler, timeout){
  if (handler == null) {
    if (timeout == null) {
      return this._ptr$html623afa$$getter_().setTimeout$named(0, $noargs);
    }
  }
   else {
    if (timeout == null) {
      return this._ptr$html623afa$$getter_().setTimeout$named(1, $noargs, handler);
    }
     else {
      return this._ptr$html623afa$$getter_().setTimeout$named(2, $noargs, handler, timeout);
    }
  }
  $Dart$ThrowException('Incorrect number or type of arguments');
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.setTimeout$named = function($n, $o, handler, timeout){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 0:
      handler = $o.handler?(++seen , $o.handler):(++def , $Dart$Null);
    case 1:
      timeout = $o.timeout?(++seen , $o.timeout):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return html623afa$WindowWrappingImplementation$Dart.prototype.setTimeout$member.call(this, handler, timeout);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.setTimeout$getter = function setTimeout$getter(){
  return $bind(html623afa$WindowWrappingImplementation$Dart.prototype.setTimeout$named, this);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.showModalDialog$member = function(url, dialogArgs, featureArgs){
  if (dialogArgs == null) {
    if (featureArgs == null) {
      return this._ptr$html623afa$$getter_().showModalDialog$named(1, $noargs, url);
    }
  }
   else {
    if (featureArgs == null) {
      return this._ptr$html623afa$$getter_().showModalDialog$named(2, $noargs, url, html623afa$LevelDom$Dart.unwrap$member(dialogArgs));
    }
     else {
      return this._ptr$html623afa$$getter_().showModalDialog$named(3, $noargs, url, html623afa$LevelDom$Dart.unwrap$member(dialogArgs), featureArgs);
    }
  }
  $Dart$ThrowException('Incorrect number or type of arguments');
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.showModalDialog$named = function($n, $o, url, dialogArgs, featureArgs){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 1:
      dialogArgs = $o.dialogArgs?(++seen , $o.dialogArgs):(++def , $Dart$Null);
    case 2:
      featureArgs = $o.featureArgs?(++seen , $o.featureArgs):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return html623afa$WindowWrappingImplementation$Dart.prototype.showModalDialog$member.call(this, url, dialogArgs, featureArgs);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.showModalDialog$getter = function showModalDialog$getter(){
  return $bind(html623afa$WindowWrappingImplementation$Dart.prototype.showModalDialog$named, this);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.stop$member = function(){
  this._ptr$html623afa$$getter_().stop$named(0, $noargs);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.stop$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return html623afa$WindowWrappingImplementation$Dart.prototype.stop$member.call(this);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.stop$getter = function stop$getter(){
  return $bind(html623afa$WindowWrappingImplementation$Dart.prototype.stop$named, this);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.webkitCancelRequestAnimationFrame$member = function(id){
  this._ptr$html623afa$$getter_().webkitCancelRequestAnimationFrame$named(1, $noargs, id);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.webkitCancelRequestAnimationFrame$named = function($n, $o, id){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$WindowWrappingImplementation$Dart.prototype.webkitCancelRequestAnimationFrame$member.call(this, id);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.webkitCancelRequestAnimationFrame$getter = function webkitCancelRequestAnimationFrame$getter(){
  return $bind(html623afa$WindowWrappingImplementation$Dart.prototype.webkitCancelRequestAnimationFrame$named, this);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.webkitConvertPointFromNodeToPage$member = function(node, p){
  if (node == null) {
    if (p == null) {
      return html623afa$LevelDom$Dart.wrapPoint$member(this._ptr$html623afa$$getter_().webkitConvertPointFromNodeToPage$named(0, $noargs));
    }
  }
   else {
    if (p == null) {
      return html623afa$LevelDom$Dart.wrapPoint$member(this._ptr$html623afa$$getter_().webkitConvertPointFromNodeToPage$named(1, $noargs, html623afa$LevelDom$Dart.unwrap$member(node)));
    }
     else {
      return html623afa$LevelDom$Dart.wrapPoint$member(this._ptr$html623afa$$getter_().webkitConvertPointFromNodeToPage$named(2, $noargs, html623afa$LevelDom$Dart.unwrap$member(node), html623afa$LevelDom$Dart.unwrap$member(p)));
    }
  }
  $Dart$ThrowException('Incorrect number or type of arguments');
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.webkitConvertPointFromNodeToPage$named = function($n, $o, node, p){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 0:
      node = $o.node?(++seen , $o.node):(++def , $Dart$Null);
    case 1:
      p = $o.p?(++seen , $o.p):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return html623afa$WindowWrappingImplementation$Dart.prototype.webkitConvertPointFromNodeToPage$member.call(this, node, p);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.webkitConvertPointFromNodeToPage$getter = function webkitConvertPointFromNodeToPage$getter(){
  return $bind(html623afa$WindowWrappingImplementation$Dart.prototype.webkitConvertPointFromNodeToPage$named, this);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.webkitConvertPointFromPageToNode$member = function(node, p){
  if (node == null) {
    if (p == null) {
      return html623afa$LevelDom$Dart.wrapPoint$member(this._ptr$html623afa$$getter_().webkitConvertPointFromPageToNode$named(0, $noargs));
    }
  }
   else {
    if (p == null) {
      return html623afa$LevelDom$Dart.wrapPoint$member(this._ptr$html623afa$$getter_().webkitConvertPointFromPageToNode$named(1, $noargs, html623afa$LevelDom$Dart.unwrap$member(node)));
    }
     else {
      return html623afa$LevelDom$Dart.wrapPoint$member(this._ptr$html623afa$$getter_().webkitConvertPointFromPageToNode$named(2, $noargs, html623afa$LevelDom$Dart.unwrap$member(node), html623afa$LevelDom$Dart.unwrap$member(p)));
    }
  }
  $Dart$ThrowException('Incorrect number or type of arguments');
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.webkitConvertPointFromPageToNode$named = function($n, $o, node, p){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 0:
      node = $o.node?(++seen , $o.node):(++def , $Dart$Null);
    case 1:
      p = $o.p?(++seen , $o.p):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return html623afa$WindowWrappingImplementation$Dart.prototype.webkitConvertPointFromPageToNode$member.call(this, node, p);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.webkitConvertPointFromPageToNode$getter = function webkitConvertPointFromPageToNode$getter(){
  return $bind(html623afa$WindowWrappingImplementation$Dart.prototype.webkitConvertPointFromPageToNode$named, this);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.webkitRequestAnimationFrame$member = function(callback, element){
  if (element == null) {
    return this._ptr$html623afa$$getter_().webkitRequestAnimationFrame$named(1, $noargs, callback);
  }
   else {
    return this._ptr$html623afa$$getter_().webkitRequestAnimationFrame$named(2, $noargs, callback, html623afa$LevelDom$Dart.unwrap$member(element));
  }
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.webkitRequestAnimationFrame$named = function($n, $o, callback, element){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 1:
      element = $o.element?(++seen , $o.element):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return html623afa$WindowWrappingImplementation$Dart.prototype.webkitRequestAnimationFrame$member.call(this, callback, element);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.webkitRequestAnimationFrame$getter = function webkitRequestAnimationFrame$getter(){
  return $bind(html623afa$WindowWrappingImplementation$Dart.prototype.webkitRequestAnimationFrame$named, this);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.on$named = function(){
  return this.on$getter().apply(this, arguments);
}
;
html623afa$WindowWrappingImplementation$Dart.prototype.on$getter = function(){
  var tmp$0;
  if (this._on$html623afa$$getter_() == null) {
    this._on$html623afa$$setter_(tmp$0 = html623afa$WindowEventsImplementation$Dart.WindowEventsImplementation$_wrap$26$html623afa$$Factory_(this._ptr$html623afa$$getter_())) , tmp$0;
  }
  return this._on$html623afa$$getter_();
}
;
