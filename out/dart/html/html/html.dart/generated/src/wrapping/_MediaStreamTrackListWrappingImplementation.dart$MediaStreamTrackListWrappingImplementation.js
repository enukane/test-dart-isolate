function html623afa$MediaStreamTrackListWrappingImplementation$Dart(){
}

html623afa$MediaStreamTrackListWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('html623afa$MediaStreamTrackListWrappingImplementation$Dart'), html623afa$MediaStreamTrackListWrappingImplementation$Dart.$RTTimplements);
}
;
html623afa$MediaStreamTrackListWrappingImplementation$Dart.$RTTimplements = function(rtt){
  html623afa$MediaStreamTrackListWrappingImplementation$Dart.$addTo(rtt);
}
;
html623afa$MediaStreamTrackListWrappingImplementation$Dart.$addTo = function(target){
  var rtt = html623afa$MediaStreamTrackListWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  html623afa$DOMWrapperBase$Dart.$addTo(target);
  html623afa$MediaStreamTrackList$Dart.$addTo(target);
}
;
html623afa$MediaStreamTrackListWrappingImplementation$Dart.prototype.$implements$html623afa$MediaStreamTrackListWrappingImplementation$Dart = 1;
html623afa$MediaStreamTrackListWrappingImplementation$Dart.prototype.$implements$html623afa$MediaStreamTrackList$Dart = 1;
html623afa$MediaStreamTrackListWrappingImplementation$Dart.prototype.$implements$html623afa$DOMWrapperBase$Dart = 1;
html623afa$MediaStreamTrackListWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(html623afa$MediaStreamTrackListWrappingImplementation$Dart, html623afa$DOMWrapperBase$Dart);
html623afa$MediaStreamTrackListWrappingImplementation$Dart._wrap$html623afa$$Constructor_ = function(ptr){
  html623afa$DOMWrapperBase$Dart._wrap$html623afa$$Constructor_.call(this, ptr);
}
;
html623afa$MediaStreamTrackListWrappingImplementation$Dart._wrap$html623afa$$Initializer_ = function(ptr){
  html623afa$DOMWrapperBase$Dart._wrap$html623afa$$Initializer_.call(this, ptr);
}
;
html623afa$MediaStreamTrackListWrappingImplementation$Dart.MediaStreamTrackListWrappingImplementation$_wrap$42$html623afa$$Factory_ = function(ptr){
  var tmp$0 = new html623afa$MediaStreamTrackListWrappingImplementation$Dart;
  tmp$0.$typeInfo = html623afa$MediaStreamTrackListWrappingImplementation$Dart.$lookupRTT();
  html623afa$MediaStreamTrackListWrappingImplementation$Dart._wrap$html623afa$$Initializer_.call(tmp$0, ptr);
  html623afa$MediaStreamTrackListWrappingImplementation$Dart._wrap$html623afa$$Constructor_.call(tmp$0, ptr);
  return tmp$0;
}
;
html623afa$MediaStreamTrackListWrappingImplementation$Dart.prototype.length$named = function(){
  return this.length$getter().apply(this, arguments);
}
;
html623afa$MediaStreamTrackListWrappingImplementation$Dart.prototype.length$getter = function(){
  return this._ptr$html623afa$$getter_().length$getter();
}
;
html623afa$MediaStreamTrackListWrappingImplementation$Dart.prototype.item$member = function(index){
  return html623afa$LevelDom$Dart.wrapMediaStreamTrack$member(this._ptr$html623afa$$getter_().item$named(1, $noargs, index));
}
;
html623afa$MediaStreamTrackListWrappingImplementation$Dart.prototype.item$named = function($n, $o, index){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$MediaStreamTrackListWrappingImplementation$Dart.prototype.item$member.call(this, index);
}
;
html623afa$MediaStreamTrackListWrappingImplementation$Dart.prototype.item$getter = function item$getter(){
  return $bind(html623afa$MediaStreamTrackListWrappingImplementation$Dart.prototype.item$named, this);
}
;
