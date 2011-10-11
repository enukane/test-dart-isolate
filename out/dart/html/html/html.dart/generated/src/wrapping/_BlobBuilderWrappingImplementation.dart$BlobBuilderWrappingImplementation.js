function html623afa$BlobBuilderWrappingImplementation$Dart(){
}

html623afa$BlobBuilderWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('html623afa$BlobBuilderWrappingImplementation$Dart'), html623afa$BlobBuilderWrappingImplementation$Dart.$RTTimplements);
}
;
html623afa$BlobBuilderWrappingImplementation$Dart.$RTTimplements = function(rtt){
  html623afa$BlobBuilderWrappingImplementation$Dart.$addTo(rtt);
}
;
html623afa$BlobBuilderWrappingImplementation$Dart.$addTo = function(target){
  var rtt = html623afa$BlobBuilderWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  html623afa$DOMWrapperBase$Dart.$addTo(target);
  html623afa$BlobBuilder$Dart.$addTo(target);
}
;
html623afa$BlobBuilderWrappingImplementation$Dart.prototype.$implements$html623afa$BlobBuilderWrappingImplementation$Dart = 1;
html623afa$BlobBuilderWrappingImplementation$Dart.prototype.$implements$html623afa$BlobBuilder$Dart = 1;
html623afa$BlobBuilderWrappingImplementation$Dart.prototype.$implements$html623afa$DOMWrapperBase$Dart = 1;
html623afa$BlobBuilderWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(html623afa$BlobBuilderWrappingImplementation$Dart, html623afa$DOMWrapperBase$Dart);
html623afa$BlobBuilderWrappingImplementation$Dart._wrap$html623afa$$Constructor_ = function(ptr){
  html623afa$DOMWrapperBase$Dart._wrap$html623afa$$Constructor_.call(this, ptr);
}
;
html623afa$BlobBuilderWrappingImplementation$Dart._wrap$html623afa$$Initializer_ = function(ptr){
  html623afa$DOMWrapperBase$Dart._wrap$html623afa$$Initializer_.call(this, ptr);
}
;
html623afa$BlobBuilderWrappingImplementation$Dart.BlobBuilderWrappingImplementation$_wrap$33$html623afa$$Factory_ = function(ptr){
  var tmp$0 = new html623afa$BlobBuilderWrappingImplementation$Dart;
  tmp$0.$typeInfo = html623afa$BlobBuilderWrappingImplementation$Dart.$lookupRTT();
  html623afa$BlobBuilderWrappingImplementation$Dart._wrap$html623afa$$Initializer_.call(tmp$0, ptr);
  html623afa$BlobBuilderWrappingImplementation$Dart._wrap$html623afa$$Constructor_.call(tmp$0, ptr);
  return tmp$0;
}
;
html623afa$BlobBuilderWrappingImplementation$Dart.prototype.append$member = function(blob_OR_value, endings){
  var tmp$0;
  if (!!(tmp$0 = blob_OR_value , tmp$0 != null && tmp$0.$implements$html623afa$Blob$Dart)) {
    if (endings == null) {
      this._ptr$html623afa$$getter_().append$named(1, $noargs, html623afa$LevelDom$Dart.unwrap$member(blob_OR_value));
      return;
    }
  }
   else {
    if (String.$instanceOf(blob_OR_value)) {
      if (endings == null) {
        this._ptr$html623afa$$getter_().append$named(1, $noargs, html623afa$LevelDom$Dart.unwrap$member(blob_OR_value));
        return;
      }
       else {
        this._ptr$html623afa$$getter_().append$named(2, $noargs, html623afa$LevelDom$Dart.unwrap$member(blob_OR_value), endings);
        return;
      }
    }
  }
  $Dart$ThrowException('Incorrect number or type of arguments');
}
;
html623afa$BlobBuilderWrappingImplementation$Dart.prototype.append$named = function($n, $o, blob_OR_value, endings){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 1:
      endings = $o.endings?(++seen , $o.endings):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return html623afa$BlobBuilderWrappingImplementation$Dart.prototype.append$member.call(this, blob_OR_value, endings);
}
;
html623afa$BlobBuilderWrappingImplementation$Dart.prototype.append$getter = function append$getter(){
  return $bind(html623afa$BlobBuilderWrappingImplementation$Dart.prototype.append$named, this);
}
;
html623afa$BlobBuilderWrappingImplementation$Dart.prototype.getBlob$member = function(contentType){
  if (contentType == null) {
    return html623afa$LevelDom$Dart.wrapBlob$member(this._ptr$html623afa$$getter_().getBlob$named(0, $noargs));
  }
   else {
    return html623afa$LevelDom$Dart.wrapBlob$member(this._ptr$html623afa$$getter_().getBlob$named(1, $noargs, contentType));
  }
}
;
html623afa$BlobBuilderWrappingImplementation$Dart.prototype.getBlob$named = function($n, $o, contentType){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 0:
      contentType = $o.contentType?(++seen , $o.contentType):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$BlobBuilderWrappingImplementation$Dart.prototype.getBlob$member.call(this, contentType);
}
;
html623afa$BlobBuilderWrappingImplementation$Dart.prototype.getBlob$getter = function getBlob$getter(){
  return $bind(html623afa$BlobBuilderWrappingImplementation$Dart.prototype.getBlob$named, this);
}
;
