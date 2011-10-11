function html623afa$LevelDom$Dart(){
}

html623afa$LevelDom$Dart.$lookupRTT = function(){
  return RTT.create($cls('html623afa$LevelDom$Dart'));
}
;
html623afa$LevelDom$Dart.$addTo = function(target){
  var rtt = html623afa$LevelDom$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
}
;
html623afa$LevelDom$Dart.prototype.$implements$html623afa$LevelDom$Dart = 1;
html623afa$LevelDom$Dart.prototype.$implements$Object$Dart = 1;
html623afa$LevelDom$Dart.wrapAnchorElement$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$AnchorElementWrappingImplementation$Dart.AnchorElementWrappingImplementation$_wrap$35$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapAnchorElement$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapAnchorElement$member(raw);
}
;
html623afa$LevelDom$Dart.wrapAnchorElement$getter = function wrapAnchorElement$getter(){
  return html623afa$LevelDom$Dart.wrapAnchorElement$named;
}
;
html623afa$LevelDom$Dart.wrapAnimation$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$AnimationWrappingImplementation$Dart.AnimationWrappingImplementation$_wrap$31$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapAnimation$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapAnimation$member(raw);
}
;
html623afa$LevelDom$Dart.wrapAnimation$getter = function wrapAnimation$getter(){
  return html623afa$LevelDom$Dart.wrapAnimation$named;
}
;
html623afa$LevelDom$Dart.wrapAnimationEvent$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$AnimationEventWrappingImplementation$Dart.AnimationEventWrappingImplementation$_wrap$36$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapAnimationEvent$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapAnimationEvent$member(raw);
}
;
html623afa$LevelDom$Dart.wrapAnimationEvent$getter = function wrapAnimationEvent$getter(){
  return html623afa$LevelDom$Dart.wrapAnimationEvent$named;
}
;
html623afa$LevelDom$Dart.wrapAnimationList$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$AnimationListWrappingImplementation$Dart.AnimationListWrappingImplementation$_wrap$35$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapAnimationList$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapAnimationList$member(raw);
}
;
html623afa$LevelDom$Dart.wrapAnimationList$getter = function wrapAnimationList$getter(){
  return html623afa$LevelDom$Dart.wrapAnimationList$named;
}
;
html623afa$LevelDom$Dart.wrapAreaElement$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$AreaElementWrappingImplementation$Dart.AreaElementWrappingImplementation$_wrap$33$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapAreaElement$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapAreaElement$member(raw);
}
;
html623afa$LevelDom$Dart.wrapAreaElement$getter = function wrapAreaElement$getter(){
  return html623afa$LevelDom$Dart.wrapAreaElement$named;
}
;
html623afa$LevelDom$Dart.wrapArrayBuffer$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$ArrayBufferWrappingImplementation$Dart.ArrayBufferWrappingImplementation$_wrap$33$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapArrayBuffer$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapArrayBuffer$member(raw);
}
;
html623afa$LevelDom$Dart.wrapArrayBuffer$getter = function wrapArrayBuffer$getter(){
  return html623afa$LevelDom$Dart.wrapArrayBuffer$named;
}
;
html623afa$LevelDom$Dart.wrapArrayBufferView$member = function(raw){
  if (raw == null) {
    return $Dart$Null;
  }
  if (raw.dartObjectLocalStorage$getter() != null) {
    return raw.dartObjectLocalStorage$getter();
  }
  switch (raw.typeName$getter()) {
    case 'ArrayBufferView':
      return html623afa$ArrayBufferViewWrappingImplementation$Dart.ArrayBufferViewWrappingImplementation$_wrap$37$html623afa$$Factory_(raw);
    case 'DataView':
      return html623afa$DataViewWrappingImplementation$Dart.DataViewWrappingImplementation$_wrap$30$html623afa$$Factory_(raw);
    case 'Float32Array':
      return html623afa$Float32ArrayWrappingImplementation$Dart.Float32ArrayWrappingImplementation$_wrap$34$html623afa$$Factory_(raw);
    case 'Float64Array':
      return html623afa$Float64ArrayWrappingImplementation$Dart.Float64ArrayWrappingImplementation$_wrap$34$html623afa$$Factory_(raw);
    case 'Int16Array':
      return html623afa$Int16ArrayWrappingImplementation$Dart.Int16ArrayWrappingImplementation$_wrap$32$html623afa$$Factory_(raw);
    case 'Int32Array':
      return html623afa$Int32ArrayWrappingImplementation$Dart.Int32ArrayWrappingImplementation$_wrap$32$html623afa$$Factory_(raw);
    case 'Int8Array':
      return html623afa$Int8ArrayWrappingImplementation$Dart.Int8ArrayWrappingImplementation$_wrap$31$html623afa$$Factory_(raw);
    case 'Uint16Array':
      return html623afa$Uint16ArrayWrappingImplementation$Dart.Uint16ArrayWrappingImplementation$_wrap$33$html623afa$$Factory_(raw);
    case 'Uint32Array':
      return html623afa$Uint32ArrayWrappingImplementation$Dart.Uint32ArrayWrappingImplementation$_wrap$33$html623afa$$Factory_(raw);
    case 'Uint8Array':
      return html623afa$Uint8ArrayWrappingImplementation$Dart.Uint8ArrayWrappingImplementation$_wrap$32$html623afa$$Factory_(raw);
    default:{
        $Dart$ThrowException(UnsupportedOperationException$Dart.UnsupportedOperationException$$Factory(ADD$operator('Unknown type:', raw.toString$named(0, $noargs))));
      }

  }
}
;
html623afa$LevelDom$Dart.wrapArrayBufferView$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapArrayBufferView$member(raw);
}
;
html623afa$LevelDom$Dart.wrapArrayBufferView$getter = function wrapArrayBufferView$getter(){
  return html623afa$LevelDom$Dart.wrapArrayBufferView$named;
}
;
html623afa$LevelDom$Dart.wrapAudioElement$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$AudioElementWrappingImplementation$Dart.AudioElementWrappingImplementation$_wrap$34$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapAudioElement$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapAudioElement$member(raw);
}
;
html623afa$LevelDom$Dart.wrapAudioElement$getter = function wrapAudioElement$getter(){
  return html623afa$LevelDom$Dart.wrapAudioElement$named;
}
;
html623afa$LevelDom$Dart.wrapBRElement$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$BRElementWrappingImplementation$Dart.BRElementWrappingImplementation$_wrap$31$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapBRElement$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapBRElement$member(raw);
}
;
html623afa$LevelDom$Dart.wrapBRElement$getter = function wrapBRElement$getter(){
  return html623afa$LevelDom$Dart.wrapBRElement$named;
}
;
html623afa$LevelDom$Dart.wrapBarInfo$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$BarInfoWrappingImplementation$Dart.BarInfoWrappingImplementation$_wrap$29$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapBarInfo$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapBarInfo$member(raw);
}
;
html623afa$LevelDom$Dart.wrapBarInfo$getter = function wrapBarInfo$getter(){
  return html623afa$LevelDom$Dart.wrapBarInfo$named;
}
;
html623afa$LevelDom$Dart.wrapBaseElement$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$BaseElementWrappingImplementation$Dart.BaseElementWrappingImplementation$_wrap$33$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapBaseElement$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapBaseElement$member(raw);
}
;
html623afa$LevelDom$Dart.wrapBaseElement$getter = function wrapBaseElement$getter(){
  return html623afa$LevelDom$Dart.wrapBaseElement$named;
}
;
html623afa$LevelDom$Dart.wrapBeforeLoadEvent$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$BeforeLoadEventWrappingImplementation$Dart.BeforeLoadEventWrappingImplementation$_wrap$37$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapBeforeLoadEvent$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapBeforeLoadEvent$member(raw);
}
;
html623afa$LevelDom$Dart.wrapBeforeLoadEvent$getter = function wrapBeforeLoadEvent$getter(){
  return html623afa$LevelDom$Dart.wrapBeforeLoadEvent$named;
}
;
html623afa$LevelDom$Dart.wrapBlob$member = function(raw){
  if (raw == null) {
    return $Dart$Null;
  }
  if (raw.dartObjectLocalStorage$getter() != null) {
    return raw.dartObjectLocalStorage$getter();
  }
  switch (raw.typeName$getter()) {
    case 'Blob':
      return html623afa$BlobWrappingImplementation$Dart.BlobWrappingImplementation$_wrap$26$html623afa$$Factory_(raw);
    case 'File':
      return html623afa$FileWrappingImplementation$Dart.FileWrappingImplementation$_wrap$26$html623afa$$Factory_(raw);
    default:{
        $Dart$ThrowException(UnsupportedOperationException$Dart.UnsupportedOperationException$$Factory(ADD$operator('Unknown type:', raw.toString$named(0, $noargs))));
      }

  }
}
;
html623afa$LevelDom$Dart.wrapBlob$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapBlob$member(raw);
}
;
html623afa$LevelDom$Dart.wrapBlob$getter = function wrapBlob$getter(){
  return html623afa$LevelDom$Dart.wrapBlob$named;
}
;
html623afa$LevelDom$Dart.wrapBlobBuilder$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$BlobBuilderWrappingImplementation$Dart.BlobBuilderWrappingImplementation$_wrap$33$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapBlobBuilder$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapBlobBuilder$member(raw);
}
;
html623afa$LevelDom$Dart.wrapBlobBuilder$getter = function wrapBlobBuilder$getter(){
  return html623afa$LevelDom$Dart.wrapBlobBuilder$named;
}
;
html623afa$LevelDom$Dart.wrapBodyElement$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$BodyElementWrappingImplementation$Dart.BodyElementWrappingImplementation$_wrap$33$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapBodyElement$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapBodyElement$member(raw);
}
;
html623afa$LevelDom$Dart.wrapBodyElement$getter = function wrapBodyElement$getter(){
  return html623afa$LevelDom$Dart.wrapBodyElement$named;
}
;
html623afa$LevelDom$Dart.wrapButtonElement$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$ButtonElementWrappingImplementation$Dart.ButtonElementWrappingImplementation$_wrap$35$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapButtonElement$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapButtonElement$member(raw);
}
;
html623afa$LevelDom$Dart.wrapButtonElement$getter = function wrapButtonElement$getter(){
  return html623afa$LevelDom$Dart.wrapButtonElement$named;
}
;
html623afa$LevelDom$Dart.wrapCDATASection$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$CDATASectionWrappingImplementation$Dart.CDATASectionWrappingImplementation$_wrap$34$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapCDATASection$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapCDATASection$member(raw);
}
;
html623afa$LevelDom$Dart.wrapCDATASection$getter = function wrapCDATASection$getter(){
  return html623afa$LevelDom$Dart.wrapCDATASection$named;
}
;
html623afa$LevelDom$Dart.wrapCSSCharsetRule$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$CSSCharsetRuleWrappingImplementation$Dart.CSSCharsetRuleWrappingImplementation$_wrap$36$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapCSSCharsetRule$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapCSSCharsetRule$member(raw);
}
;
html623afa$LevelDom$Dart.wrapCSSCharsetRule$getter = function wrapCSSCharsetRule$getter(){
  return html623afa$LevelDom$Dart.wrapCSSCharsetRule$named;
}
;
html623afa$LevelDom$Dart.wrapCSSFontFaceRule$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$CSSFontFaceRuleWrappingImplementation$Dart.CSSFontFaceRuleWrappingImplementation$_wrap$37$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapCSSFontFaceRule$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapCSSFontFaceRule$member(raw);
}
;
html623afa$LevelDom$Dart.wrapCSSFontFaceRule$getter = function wrapCSSFontFaceRule$getter(){
  return html623afa$LevelDom$Dart.wrapCSSFontFaceRule$named;
}
;
html623afa$LevelDom$Dart.wrapCSSImportRule$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$CSSImportRuleWrappingImplementation$Dart.CSSImportRuleWrappingImplementation$_wrap$35$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapCSSImportRule$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapCSSImportRule$member(raw);
}
;
html623afa$LevelDom$Dart.wrapCSSImportRule$getter = function wrapCSSImportRule$getter(){
  return html623afa$LevelDom$Dart.wrapCSSImportRule$named;
}
;
html623afa$LevelDom$Dart.wrapCSSKeyframeRule$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$CSSKeyframeRuleWrappingImplementation$Dart.CSSKeyframeRuleWrappingImplementation$_wrap$37$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapCSSKeyframeRule$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapCSSKeyframeRule$member(raw);
}
;
html623afa$LevelDom$Dart.wrapCSSKeyframeRule$getter = function wrapCSSKeyframeRule$getter(){
  return html623afa$LevelDom$Dart.wrapCSSKeyframeRule$named;
}
;
html623afa$LevelDom$Dart.wrapCSSKeyframesRule$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$CSSKeyframesRuleWrappingImplementation$Dart.CSSKeyframesRuleWrappingImplementation$_wrap$38$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapCSSKeyframesRule$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapCSSKeyframesRule$member(raw);
}
;
html623afa$LevelDom$Dart.wrapCSSKeyframesRule$getter = function wrapCSSKeyframesRule$getter(){
  return html623afa$LevelDom$Dart.wrapCSSKeyframesRule$named;
}
;
html623afa$LevelDom$Dart.wrapCSSMatrix$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$CSSMatrixWrappingImplementation$Dart.CSSMatrixWrappingImplementation$_wrap$31$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapCSSMatrix$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapCSSMatrix$member(raw);
}
;
html623afa$LevelDom$Dart.wrapCSSMatrix$getter = function wrapCSSMatrix$getter(){
  return html623afa$LevelDom$Dart.wrapCSSMatrix$named;
}
;
html623afa$LevelDom$Dart.wrapCSSMediaRule$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$CSSMediaRuleWrappingImplementation$Dart.CSSMediaRuleWrappingImplementation$_wrap$34$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapCSSMediaRule$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapCSSMediaRule$member(raw);
}
;
html623afa$LevelDom$Dart.wrapCSSMediaRule$getter = function wrapCSSMediaRule$getter(){
  return html623afa$LevelDom$Dart.wrapCSSMediaRule$named;
}
;
html623afa$LevelDom$Dart.wrapCSSPageRule$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$CSSPageRuleWrappingImplementation$Dart.CSSPageRuleWrappingImplementation$_wrap$33$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapCSSPageRule$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapCSSPageRule$member(raw);
}
;
html623afa$LevelDom$Dart.wrapCSSPageRule$getter = function wrapCSSPageRule$getter(){
  return html623afa$LevelDom$Dart.wrapCSSPageRule$named;
}
;
html623afa$LevelDom$Dart.wrapCSSPrimitiveValue$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$CSSPrimitiveValueWrappingImplementation$Dart.CSSPrimitiveValueWrappingImplementation$_wrap$39$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapCSSPrimitiveValue$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapCSSPrimitiveValue$member(raw);
}
;
html623afa$LevelDom$Dart.wrapCSSPrimitiveValue$getter = function wrapCSSPrimitiveValue$getter(){
  return html623afa$LevelDom$Dart.wrapCSSPrimitiveValue$named;
}
;
html623afa$LevelDom$Dart.wrapCSSRule$member = function(raw){
  if (raw == null) {
    return $Dart$Null;
  }
  if (raw.dartObjectLocalStorage$getter() != null) {
    return raw.dartObjectLocalStorage$getter();
  }
  switch (raw.typeName$getter()) {
    case 'CSSCharsetRule':
      return html623afa$CSSCharsetRuleWrappingImplementation$Dart.CSSCharsetRuleWrappingImplementation$_wrap$36$html623afa$$Factory_(raw);
    case 'CSSFontFaceRule':
      return html623afa$CSSFontFaceRuleWrappingImplementation$Dart.CSSFontFaceRuleWrappingImplementation$_wrap$37$html623afa$$Factory_(raw);
    case 'CSSImportRule':
      return html623afa$CSSImportRuleWrappingImplementation$Dart.CSSImportRuleWrappingImplementation$_wrap$35$html623afa$$Factory_(raw);
    case 'WebKitCSSKeyframeRule':
      return html623afa$CSSKeyframeRuleWrappingImplementation$Dart.CSSKeyframeRuleWrappingImplementation$_wrap$37$html623afa$$Factory_(raw);
    case 'WebKitCSSKeyframesRule':
      return html623afa$CSSKeyframesRuleWrappingImplementation$Dart.CSSKeyframesRuleWrappingImplementation$_wrap$38$html623afa$$Factory_(raw);
    case 'CSSMediaRule':
      return html623afa$CSSMediaRuleWrappingImplementation$Dart.CSSMediaRuleWrappingImplementation$_wrap$34$html623afa$$Factory_(raw);
    case 'CSSPageRule':
      return html623afa$CSSPageRuleWrappingImplementation$Dart.CSSPageRuleWrappingImplementation$_wrap$33$html623afa$$Factory_(raw);
    case 'CSSRule':
      return html623afa$CSSRuleWrappingImplementation$Dart.CSSRuleWrappingImplementation$_wrap$29$html623afa$$Factory_(raw);
    case 'CSSStyleRule':
      return html623afa$CSSStyleRuleWrappingImplementation$Dart.CSSStyleRuleWrappingImplementation$_wrap$34$html623afa$$Factory_(raw);
    case 'CSSUnknownRule':
      return html623afa$CSSUnknownRuleWrappingImplementation$Dart.CSSUnknownRuleWrappingImplementation$_wrap$36$html623afa$$Factory_(raw);
    default:{
        $Dart$ThrowException(UnsupportedOperationException$Dart.UnsupportedOperationException$$Factory(ADD$operator('Unknown type:', raw.toString$named(0, $noargs))));
      }

  }
}
;
html623afa$LevelDom$Dart.wrapCSSRule$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapCSSRule$member(raw);
}
;
html623afa$LevelDom$Dart.wrapCSSRule$getter = function wrapCSSRule$getter(){
  return html623afa$LevelDom$Dart.wrapCSSRule$named;
}
;
html623afa$LevelDom$Dart.wrapCSSRuleList$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$CSSRuleListWrappingImplementation$Dart.CSSRuleListWrappingImplementation$_wrap$33$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapCSSRuleList$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapCSSRuleList$member(raw);
}
;
html623afa$LevelDom$Dart.wrapCSSRuleList$getter = function wrapCSSRuleList$getter(){
  return html623afa$LevelDom$Dart.wrapCSSRuleList$named;
}
;
html623afa$LevelDom$Dart.wrapCSSStyleDeclaration$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$CSSStyleDeclarationWrappingImplementation$Dart.CSSStyleDeclarationWrappingImplementation$_wrap$41$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapCSSStyleDeclaration$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapCSSStyleDeclaration$member(raw);
}
;
html623afa$LevelDom$Dart.wrapCSSStyleDeclaration$getter = function wrapCSSStyleDeclaration$getter(){
  return html623afa$LevelDom$Dart.wrapCSSStyleDeclaration$named;
}
;
html623afa$LevelDom$Dart.wrapCSSStyleRule$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$CSSStyleRuleWrappingImplementation$Dart.CSSStyleRuleWrappingImplementation$_wrap$34$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapCSSStyleRule$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapCSSStyleRule$member(raw);
}
;
html623afa$LevelDom$Dart.wrapCSSStyleRule$getter = function wrapCSSStyleRule$getter(){
  return html623afa$LevelDom$Dart.wrapCSSStyleRule$named;
}
;
html623afa$LevelDom$Dart.wrapCSSStyleSheet$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$CSSStyleSheetWrappingImplementation$Dart.CSSStyleSheetWrappingImplementation$_wrap$35$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapCSSStyleSheet$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapCSSStyleSheet$member(raw);
}
;
html623afa$LevelDom$Dart.wrapCSSStyleSheet$getter = function wrapCSSStyleSheet$getter(){
  return html623afa$LevelDom$Dart.wrapCSSStyleSheet$named;
}
;
html623afa$LevelDom$Dart.wrapCSSTransformValue$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$CSSTransformValueWrappingImplementation$Dart.CSSTransformValueWrappingImplementation$_wrap$39$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapCSSTransformValue$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapCSSTransformValue$member(raw);
}
;
html623afa$LevelDom$Dart.wrapCSSTransformValue$getter = function wrapCSSTransformValue$getter(){
  return html623afa$LevelDom$Dart.wrapCSSTransformValue$named;
}
;
html623afa$LevelDom$Dart.wrapCSSUnknownRule$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$CSSUnknownRuleWrappingImplementation$Dart.CSSUnknownRuleWrappingImplementation$_wrap$36$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapCSSUnknownRule$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapCSSUnknownRule$member(raw);
}
;
html623afa$LevelDom$Dart.wrapCSSUnknownRule$getter = function wrapCSSUnknownRule$getter(){
  return html623afa$LevelDom$Dart.wrapCSSUnknownRule$named;
}
;
html623afa$LevelDom$Dart.wrapCSSValue$member = function(raw){
  if (raw == null) {
    return $Dart$Null;
  }
  if (raw.dartObjectLocalStorage$getter() != null) {
    return raw.dartObjectLocalStorage$getter();
  }
  switch (raw.typeName$getter()) {
    case 'CSSPrimitiveValue':
      return html623afa$CSSPrimitiveValueWrappingImplementation$Dart.CSSPrimitiveValueWrappingImplementation$_wrap$39$html623afa$$Factory_(raw);
    case 'WebKitCSSTransformValue':
      return html623afa$CSSTransformValueWrappingImplementation$Dart.CSSTransformValueWrappingImplementation$_wrap$39$html623afa$$Factory_(raw);
    case 'CSSValue':
      return html623afa$CSSValueWrappingImplementation$Dart.CSSValueWrappingImplementation$_wrap$30$html623afa$$Factory_(raw);
    case 'CSSValueList':
      return html623afa$CSSValueListWrappingImplementation$Dart.CSSValueListWrappingImplementation$_wrap$34$html623afa$$Factory_(raw);
    default:{
        $Dart$ThrowException(UnsupportedOperationException$Dart.UnsupportedOperationException$$Factory(ADD$operator('Unknown type:', raw.toString$named(0, $noargs))));
      }

  }
}
;
html623afa$LevelDom$Dart.wrapCSSValue$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapCSSValue$member(raw);
}
;
html623afa$LevelDom$Dart.wrapCSSValue$getter = function wrapCSSValue$getter(){
  return html623afa$LevelDom$Dart.wrapCSSValue$named;
}
;
html623afa$LevelDom$Dart.wrapCSSValueList$member = function(raw){
  if (raw == null) {
    return $Dart$Null;
  }
  if (raw.dartObjectLocalStorage$getter() != null) {
    return raw.dartObjectLocalStorage$getter();
  }
  switch (raw.typeName$getter()) {
    case 'WebKitCSSTransformValue':
      return html623afa$CSSTransformValueWrappingImplementation$Dart.CSSTransformValueWrappingImplementation$_wrap$39$html623afa$$Factory_(raw);
    case 'CSSValueList':
      return html623afa$CSSValueListWrappingImplementation$Dart.CSSValueListWrappingImplementation$_wrap$34$html623afa$$Factory_(raw);
    default:{
        $Dart$ThrowException(UnsupportedOperationException$Dart.UnsupportedOperationException$$Factory(ADD$operator('Unknown type:', raw.toString$named(0, $noargs))));
      }

  }
}
;
html623afa$LevelDom$Dart.wrapCSSValueList$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapCSSValueList$member(raw);
}
;
html623afa$LevelDom$Dart.wrapCSSValueList$getter = function wrapCSSValueList$getter(){
  return html623afa$LevelDom$Dart.wrapCSSValueList$named;
}
;
html623afa$LevelDom$Dart.wrapCanvasElement$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$CanvasElementWrappingImplementation$Dart.CanvasElementWrappingImplementation$_wrap$35$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapCanvasElement$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapCanvasElement$member(raw);
}
;
html623afa$LevelDom$Dart.wrapCanvasElement$getter = function wrapCanvasElement$getter(){
  return html623afa$LevelDom$Dart.wrapCanvasElement$named;
}
;
html623afa$LevelDom$Dart.wrapCanvasGradient$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$CanvasGradientWrappingImplementation$Dart.CanvasGradientWrappingImplementation$_wrap$36$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapCanvasGradient$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapCanvasGradient$member(raw);
}
;
html623afa$LevelDom$Dart.wrapCanvasGradient$getter = function wrapCanvasGradient$getter(){
  return html623afa$LevelDom$Dart.wrapCanvasGradient$named;
}
;
html623afa$LevelDom$Dart.wrapCanvasPattern$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$CanvasPatternWrappingImplementation$Dart.CanvasPatternWrappingImplementation$_wrap$35$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapCanvasPattern$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapCanvasPattern$member(raw);
}
;
html623afa$LevelDom$Dart.wrapCanvasPattern$getter = function wrapCanvasPattern$getter(){
  return html623afa$LevelDom$Dart.wrapCanvasPattern$named;
}
;
html623afa$LevelDom$Dart.wrapCanvasPixelArray$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$CanvasPixelArrayWrappingImplementation$Dart.CanvasPixelArrayWrappingImplementation$_wrap$38$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapCanvasPixelArray$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapCanvasPixelArray$member(raw);
}
;
html623afa$LevelDom$Dart.wrapCanvasPixelArray$getter = function wrapCanvasPixelArray$getter(){
  return html623afa$LevelDom$Dart.wrapCanvasPixelArray$named;
}
;
html623afa$LevelDom$Dart.wrapCanvasRenderingContext$member = function(raw){
  if (raw == null) {
    return $Dart$Null;
  }
  if (raw.dartObjectLocalStorage$getter() != null) {
    return raw.dartObjectLocalStorage$getter();
  }
  switch (raw.typeName$getter()) {
    case 'CanvasRenderingContext':
      return html623afa$CanvasRenderingContextWrappingImplementation$Dart.CanvasRenderingContextWrappingImplementation$_wrap$44$html623afa$$Factory_(raw);
    case 'CanvasRenderingContext2D':
      return html623afa$CanvasRenderingContext2DWrappingImplementation$Dart.CanvasRenderingContext2DWrappingImplementation$_wrap$46$html623afa$$Factory_(raw);
    case 'WebGLRenderingContext':
      return html623afa$WebGLRenderingContextWrappingImplementation$Dart.WebGLRenderingContextWrappingImplementation$_wrap$43$html623afa$$Factory_(raw);
    default:{
        $Dart$ThrowException(UnsupportedOperationException$Dart.UnsupportedOperationException$$Factory(ADD$operator('Unknown type:', raw.toString$named(0, $noargs))));
      }

  }
}
;
html623afa$LevelDom$Dart.wrapCanvasRenderingContext$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapCanvasRenderingContext$member(raw);
}
;
html623afa$LevelDom$Dart.wrapCanvasRenderingContext$getter = function wrapCanvasRenderingContext$getter(){
  return html623afa$LevelDom$Dart.wrapCanvasRenderingContext$named;
}
;
html623afa$LevelDom$Dart.wrapCanvasRenderingContext2D$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$CanvasRenderingContext2DWrappingImplementation$Dart.CanvasRenderingContext2DWrappingImplementation$_wrap$46$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapCanvasRenderingContext2D$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapCanvasRenderingContext2D$member(raw);
}
;
html623afa$LevelDom$Dart.wrapCanvasRenderingContext2D$getter = function wrapCanvasRenderingContext2D$getter(){
  return html623afa$LevelDom$Dart.wrapCanvasRenderingContext2D$named;
}
;
html623afa$LevelDom$Dart.wrapCharacterData$member = function(raw){
  if (raw == null) {
    return $Dart$Null;
  }
  if (raw.dartObjectLocalStorage$getter() != null) {
    return raw.dartObjectLocalStorage$getter();
  }
  switch (raw.typeName$getter()) {
    case 'CDATASection':
      return html623afa$CDATASectionWrappingImplementation$Dart.CDATASectionWrappingImplementation$_wrap$34$html623afa$$Factory_(raw);
    case 'CharacterData':
      return html623afa$CharacterDataWrappingImplementation$Dart.CharacterDataWrappingImplementation$_wrap$35$html623afa$$Factory_(raw);
    case 'Comment':
      return html623afa$CommentWrappingImplementation$Dart.CommentWrappingImplementation$_wrap$29$html623afa$$Factory_(raw);
    case 'Text':
      return html623afa$TextWrappingImplementation$Dart.TextWrappingImplementation$_wrap$26$html623afa$$Factory_(raw);
    default:{
        $Dart$ThrowException(UnsupportedOperationException$Dart.UnsupportedOperationException$$Factory(ADD$operator('Unknown type:', raw.toString$named(0, $noargs))));
      }

  }
}
;
html623afa$LevelDom$Dart.wrapCharacterData$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapCharacterData$member(raw);
}
;
html623afa$LevelDom$Dart.wrapCharacterData$getter = function wrapCharacterData$getter(){
  return html623afa$LevelDom$Dart.wrapCharacterData$named;
}
;
html623afa$LevelDom$Dart.wrapClientRect$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$ClientRectWrappingImplementation$Dart.ClientRectWrappingImplementation$_wrap$32$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapClientRect$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapClientRect$member(raw);
}
;
html623afa$LevelDom$Dart.wrapClientRect$getter = function wrapClientRect$getter(){
  return html623afa$LevelDom$Dart.wrapClientRect$named;
}
;
html623afa$LevelDom$Dart.wrapClientRectList$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$ClientRectListWrappingImplementation$Dart.ClientRectListWrappingImplementation$_wrap$36$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapClientRectList$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapClientRectList$member(raw);
}
;
html623afa$LevelDom$Dart.wrapClientRectList$getter = function wrapClientRectList$getter(){
  return html623afa$LevelDom$Dart.wrapClientRectList$named;
}
;
html623afa$LevelDom$Dart.wrapClipboard$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$ClipboardWrappingImplementation$Dart.ClipboardWrappingImplementation$_wrap$31$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapClipboard$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapClipboard$member(raw);
}
;
html623afa$LevelDom$Dart.wrapClipboard$getter = function wrapClipboard$getter(){
  return html623afa$LevelDom$Dart.wrapClipboard$named;
}
;
html623afa$LevelDom$Dart.wrapCloseEvent$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$CloseEventWrappingImplementation$Dart.CloseEventWrappingImplementation$_wrap$32$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapCloseEvent$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapCloseEvent$member(raw);
}
;
html623afa$LevelDom$Dart.wrapCloseEvent$getter = function wrapCloseEvent$getter(){
  return html623afa$LevelDom$Dart.wrapCloseEvent$named;
}
;
html623afa$LevelDom$Dart.wrapComment$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$CommentWrappingImplementation$Dart.CommentWrappingImplementation$_wrap$29$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapComment$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapComment$member(raw);
}
;
html623afa$LevelDom$Dart.wrapComment$getter = function wrapComment$getter(){
  return html623afa$LevelDom$Dart.wrapComment$named;
}
;
html623afa$LevelDom$Dart.wrapCompositionEvent$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$CompositionEventWrappingImplementation$Dart.CompositionEventWrappingImplementation$_wrap$38$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapCompositionEvent$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapCompositionEvent$member(raw);
}
;
html623afa$LevelDom$Dart.wrapCompositionEvent$getter = function wrapCompositionEvent$getter(){
  return html623afa$LevelDom$Dart.wrapCompositionEvent$named;
}
;
html623afa$LevelDom$Dart.wrapConsole$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$ConsoleWrappingImplementation$Dart.ConsoleWrappingImplementation$_wrap$29$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapConsole$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapConsole$member(raw);
}
;
html623afa$LevelDom$Dart.wrapConsole$getter = function wrapConsole$getter(){
  return html623afa$LevelDom$Dart.wrapConsole$named;
}
;
html623afa$LevelDom$Dart.wrapCoordinates$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$CoordinatesWrappingImplementation$Dart.CoordinatesWrappingImplementation$_wrap$33$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapCoordinates$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapCoordinates$member(raw);
}
;
html623afa$LevelDom$Dart.wrapCoordinates$getter = function wrapCoordinates$getter(){
  return html623afa$LevelDom$Dart.wrapCoordinates$named;
}
;
html623afa$LevelDom$Dart.wrapCounter$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$CounterWrappingImplementation$Dart.CounterWrappingImplementation$_wrap$29$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapCounter$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapCounter$member(raw);
}
;
html623afa$LevelDom$Dart.wrapCounter$getter = function wrapCounter$getter(){
  return html623afa$LevelDom$Dart.wrapCounter$named;
}
;
html623afa$LevelDom$Dart.wrapCrypto$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$CryptoWrappingImplementation$Dart.CryptoWrappingImplementation$_wrap$28$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapCrypto$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapCrypto$member(raw);
}
;
html623afa$LevelDom$Dart.wrapCrypto$getter = function wrapCrypto$getter(){
  return html623afa$LevelDom$Dart.wrapCrypto$named;
}
;
html623afa$LevelDom$Dart.wrapCustomEvent$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$CustomEventWrappingImplementation$Dart.CustomEventWrappingImplementation$_wrap$33$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapCustomEvent$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapCustomEvent$member(raw);
}
;
html623afa$LevelDom$Dart.wrapCustomEvent$getter = function wrapCustomEvent$getter(){
  return html623afa$LevelDom$Dart.wrapCustomEvent$named;
}
;
html623afa$LevelDom$Dart.wrapDListElement$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$DListElementWrappingImplementation$Dart.DListElementWrappingImplementation$_wrap$34$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapDListElement$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapDListElement$member(raw);
}
;
html623afa$LevelDom$Dart.wrapDListElement$getter = function wrapDListElement$getter(){
  return html623afa$LevelDom$Dart.wrapDListElement$named;
}
;
html623afa$LevelDom$Dart.wrapDOMApplicationCache$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$DOMApplicationCacheWrappingImplementation$Dart.DOMApplicationCacheWrappingImplementation$_wrap$41$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapDOMApplicationCache$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapDOMApplicationCache$member(raw);
}
;
html623afa$LevelDom$Dart.wrapDOMApplicationCache$getter = function wrapDOMApplicationCache$getter(){
  return html623afa$LevelDom$Dart.wrapDOMApplicationCache$named;
}
;
html623afa$LevelDom$Dart.wrapDOMException$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$DOMExceptionWrappingImplementation$Dart.DOMExceptionWrappingImplementation$_wrap$34$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapDOMException$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapDOMException$member(raw);
}
;
html623afa$LevelDom$Dart.wrapDOMException$getter = function wrapDOMException$getter(){
  return html623afa$LevelDom$Dart.wrapDOMException$named;
}
;
html623afa$LevelDom$Dart.wrapDOMFileSystem$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$DOMFileSystemWrappingImplementation$Dart.DOMFileSystemWrappingImplementation$_wrap$35$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapDOMFileSystem$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapDOMFileSystem$member(raw);
}
;
html623afa$LevelDom$Dart.wrapDOMFileSystem$getter = function wrapDOMFileSystem$getter(){
  return html623afa$LevelDom$Dart.wrapDOMFileSystem$named;
}
;
html623afa$LevelDom$Dart.wrapDOMFileSystemSync$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$DOMFileSystemSyncWrappingImplementation$Dart.DOMFileSystemSyncWrappingImplementation$_wrap$39$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapDOMFileSystemSync$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapDOMFileSystemSync$member(raw);
}
;
html623afa$LevelDom$Dart.wrapDOMFileSystemSync$getter = function wrapDOMFileSystemSync$getter(){
  return html623afa$LevelDom$Dart.wrapDOMFileSystemSync$named;
}
;
html623afa$LevelDom$Dart.wrapDOMFormData$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$DOMFormDataWrappingImplementation$Dart.DOMFormDataWrappingImplementation$_wrap$33$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapDOMFormData$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapDOMFormData$member(raw);
}
;
html623afa$LevelDom$Dart.wrapDOMFormData$getter = function wrapDOMFormData$getter(){
  return html623afa$LevelDom$Dart.wrapDOMFormData$named;
}
;
html623afa$LevelDom$Dart.wrapDOMMimeType$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$DOMMimeTypeWrappingImplementation$Dart.DOMMimeTypeWrappingImplementation$_wrap$33$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapDOMMimeType$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapDOMMimeType$member(raw);
}
;
html623afa$LevelDom$Dart.wrapDOMMimeType$getter = function wrapDOMMimeType$getter(){
  return html623afa$LevelDom$Dart.wrapDOMMimeType$named;
}
;
html623afa$LevelDom$Dart.wrapDOMMimeTypeArray$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$DOMMimeTypeArrayWrappingImplementation$Dart.DOMMimeTypeArrayWrappingImplementation$_wrap$38$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapDOMMimeTypeArray$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapDOMMimeTypeArray$member(raw);
}
;
html623afa$LevelDom$Dart.wrapDOMMimeTypeArray$getter = function wrapDOMMimeTypeArray$getter(){
  return html623afa$LevelDom$Dart.wrapDOMMimeTypeArray$named;
}
;
html623afa$LevelDom$Dart.wrapDOMParser$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$DOMParserWrappingImplementation$Dart.DOMParserWrappingImplementation$_wrap$31$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapDOMParser$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapDOMParser$member(raw);
}
;
html623afa$LevelDom$Dart.wrapDOMParser$getter = function wrapDOMParser$getter(){
  return html623afa$LevelDom$Dart.wrapDOMParser$named;
}
;
html623afa$LevelDom$Dart.wrapDOMPlugin$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$DOMPluginWrappingImplementation$Dart.DOMPluginWrappingImplementation$_wrap$31$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapDOMPlugin$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapDOMPlugin$member(raw);
}
;
html623afa$LevelDom$Dart.wrapDOMPlugin$getter = function wrapDOMPlugin$getter(){
  return html623afa$LevelDom$Dart.wrapDOMPlugin$named;
}
;
html623afa$LevelDom$Dart.wrapDOMPluginArray$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$DOMPluginArrayWrappingImplementation$Dart.DOMPluginArrayWrappingImplementation$_wrap$36$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapDOMPluginArray$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapDOMPluginArray$member(raw);
}
;
html623afa$LevelDom$Dart.wrapDOMPluginArray$getter = function wrapDOMPluginArray$getter(){
  return html623afa$LevelDom$Dart.wrapDOMPluginArray$named;
}
;
html623afa$LevelDom$Dart.wrapDOMSelection$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$DOMSelectionWrappingImplementation$Dart.DOMSelectionWrappingImplementation$_wrap$34$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapDOMSelection$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapDOMSelection$member(raw);
}
;
html623afa$LevelDom$Dart.wrapDOMSelection$getter = function wrapDOMSelection$getter(){
  return html623afa$LevelDom$Dart.wrapDOMSelection$named;
}
;
html623afa$LevelDom$Dart.wrapDOMSettableTokenList$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$DOMSettableTokenListWrappingImplementation$Dart.DOMSettableTokenListWrappingImplementation$_wrap$42$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapDOMSettableTokenList$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapDOMSettableTokenList$member(raw);
}
;
html623afa$LevelDom$Dart.wrapDOMSettableTokenList$getter = function wrapDOMSettableTokenList$getter(){
  return html623afa$LevelDom$Dart.wrapDOMSettableTokenList$named;
}
;
html623afa$LevelDom$Dart.wrapDOMTokenList$member = function(raw){
  if (raw == null) {
    return $Dart$Null;
  }
  if (raw.dartObjectLocalStorage$getter() != null) {
    return raw.dartObjectLocalStorage$getter();
  }
  switch (raw.typeName$getter()) {
    case 'DOMSettableTokenList':
      return html623afa$DOMSettableTokenListWrappingImplementation$Dart.DOMSettableTokenListWrappingImplementation$_wrap$42$html623afa$$Factory_(raw);
    case 'DOMTokenList':
      return html623afa$DOMTokenListWrappingImplementation$Dart.DOMTokenListWrappingImplementation$_wrap$34$html623afa$$Factory_(raw);
    default:{
        $Dart$ThrowException(UnsupportedOperationException$Dart.UnsupportedOperationException$$Factory(ADD$operator('Unknown type:', raw.toString$named(0, $noargs))));
      }

  }
}
;
html623afa$LevelDom$Dart.wrapDOMTokenList$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapDOMTokenList$member(raw);
}
;
html623afa$LevelDom$Dart.wrapDOMTokenList$getter = function wrapDOMTokenList$getter(){
  return html623afa$LevelDom$Dart.wrapDOMTokenList$named;
}
;
html623afa$LevelDom$Dart.wrapDOMURL$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$DOMURLWrappingImplementation$Dart.DOMURLWrappingImplementation$_wrap$28$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapDOMURL$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapDOMURL$member(raw);
}
;
html623afa$LevelDom$Dart.wrapDOMURL$getter = function wrapDOMURL$getter(){
  return html623afa$LevelDom$Dart.wrapDOMURL$named;
}
;
html623afa$LevelDom$Dart.wrapDataListElement$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$DataListElementWrappingImplementation$Dart.DataListElementWrappingImplementation$_wrap$37$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapDataListElement$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapDataListElement$member(raw);
}
;
html623afa$LevelDom$Dart.wrapDataListElement$getter = function wrapDataListElement$getter(){
  return html623afa$LevelDom$Dart.wrapDataListElement$named;
}
;
html623afa$LevelDom$Dart.wrapDataTransferItem$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$DataTransferItemWrappingImplementation$Dart.DataTransferItemWrappingImplementation$_wrap$38$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapDataTransferItem$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapDataTransferItem$member(raw);
}
;
html623afa$LevelDom$Dart.wrapDataTransferItem$getter = function wrapDataTransferItem$getter(){
  return html623afa$LevelDom$Dart.wrapDataTransferItem$named;
}
;
html623afa$LevelDom$Dart.wrapDataTransferItems$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$DataTransferItemsWrappingImplementation$Dart.DataTransferItemsWrappingImplementation$_wrap$39$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapDataTransferItems$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapDataTransferItems$member(raw);
}
;
html623afa$LevelDom$Dart.wrapDataTransferItems$getter = function wrapDataTransferItems$getter(){
  return html623afa$LevelDom$Dart.wrapDataTransferItems$named;
}
;
html623afa$LevelDom$Dart.wrapDataView$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$DataViewWrappingImplementation$Dart.DataViewWrappingImplementation$_wrap$30$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapDataView$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapDataView$member(raw);
}
;
html623afa$LevelDom$Dart.wrapDataView$getter = function wrapDataView$getter(){
  return html623afa$LevelDom$Dart.wrapDataView$named;
}
;
html623afa$LevelDom$Dart.wrapDetailsElement$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$DetailsElementWrappingImplementation$Dart.DetailsElementWrappingImplementation$_wrap$36$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapDetailsElement$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapDetailsElement$member(raw);
}
;
html623afa$LevelDom$Dart.wrapDetailsElement$getter = function wrapDetailsElement$getter(){
  return html623afa$LevelDom$Dart.wrapDetailsElement$named;
}
;
html623afa$LevelDom$Dart.wrapDeviceMotionEvent$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$DeviceMotionEventWrappingImplementation$Dart.DeviceMotionEventWrappingImplementation$_wrap$39$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapDeviceMotionEvent$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapDeviceMotionEvent$member(raw);
}
;
html623afa$LevelDom$Dart.wrapDeviceMotionEvent$getter = function wrapDeviceMotionEvent$getter(){
  return html623afa$LevelDom$Dart.wrapDeviceMotionEvent$named;
}
;
html623afa$LevelDom$Dart.wrapDeviceOrientationEvent$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$DeviceOrientationEventWrappingImplementation$Dart.DeviceOrientationEventWrappingImplementation$_wrap$44$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapDeviceOrientationEvent$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapDeviceOrientationEvent$member(raw);
}
;
html623afa$LevelDom$Dart.wrapDeviceOrientationEvent$getter = function wrapDeviceOrientationEvent$getter(){
  return html623afa$LevelDom$Dart.wrapDeviceOrientationEvent$named;
}
;
html623afa$LevelDom$Dart.wrapDirectoryEntry$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$DirectoryEntryWrappingImplementation$Dart.DirectoryEntryWrappingImplementation$_wrap$36$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapDirectoryEntry$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapDirectoryEntry$member(raw);
}
;
html623afa$LevelDom$Dart.wrapDirectoryEntry$getter = function wrapDirectoryEntry$getter(){
  return html623afa$LevelDom$Dart.wrapDirectoryEntry$named;
}
;
html623afa$LevelDom$Dart.wrapDirectoryEntrySync$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$DirectoryEntrySyncWrappingImplementation$Dart.DirectoryEntrySyncWrappingImplementation$_wrap$40$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapDirectoryEntrySync$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapDirectoryEntrySync$member(raw);
}
;
html623afa$LevelDom$Dart.wrapDirectoryEntrySync$getter = function wrapDirectoryEntrySync$getter(){
  return html623afa$LevelDom$Dart.wrapDirectoryEntrySync$named;
}
;
html623afa$LevelDom$Dart.wrapDirectoryReader$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$DirectoryReaderWrappingImplementation$Dart.DirectoryReaderWrappingImplementation$_wrap$37$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapDirectoryReader$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapDirectoryReader$member(raw);
}
;
html623afa$LevelDom$Dart.wrapDirectoryReader$getter = function wrapDirectoryReader$getter(){
  return html623afa$LevelDom$Dart.wrapDirectoryReader$named;
}
;
html623afa$LevelDom$Dart.wrapDirectoryReaderSync$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$DirectoryReaderSyncWrappingImplementation$Dart.DirectoryReaderSyncWrappingImplementation$_wrap$41$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapDirectoryReaderSync$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapDirectoryReaderSync$member(raw);
}
;
html623afa$LevelDom$Dart.wrapDirectoryReaderSync$getter = function wrapDirectoryReaderSync$getter(){
  return html623afa$LevelDom$Dart.wrapDirectoryReaderSync$named;
}
;
html623afa$LevelDom$Dart.wrapDivElement$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$DivElementWrappingImplementation$Dart.DivElementWrappingImplementation$_wrap$32$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapDivElement$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapDivElement$member(raw);
}
;
html623afa$LevelDom$Dart.wrapDivElement$getter = function wrapDivElement$getter(){
  return html623afa$LevelDom$Dart.wrapDivElement$named;
}
;
html623afa$LevelDom$Dart.wrapDocument$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$DocumentWrappingImplementation$Dart.DocumentWrappingImplementation$_wrap$30$html623afa$$Factory_(raw, raw.documentElement$getter());
}
;
html623afa$LevelDom$Dart.wrapDocument$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapDocument$member(raw);
}
;
html623afa$LevelDom$Dart.wrapDocument$getter = function wrapDocument$getter(){
  return html623afa$LevelDom$Dart.wrapDocument$named;
}
;
html623afa$LevelDom$Dart.wrapDocumentFragment$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$DocumentFragmentWrappingImplementation$Dart.DocumentFragmentWrappingImplementation$_wrap$38$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapDocumentFragment$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapDocumentFragment$member(raw);
}
;
html623afa$LevelDom$Dart.wrapDocumentFragment$getter = function wrapDocumentFragment$getter(){
  return html623afa$LevelDom$Dart.wrapDocumentFragment$named;
}
;
html623afa$LevelDom$Dart.wrapElement$member = function(raw){
  if (raw == null) {
    return $Dart$Null;
  }
  if (raw.dartObjectLocalStorage$getter() != null) {
    return raw.dartObjectLocalStorage$getter();
  }
  switch (raw.typeName$getter()) {
    case 'HTMLAnchorElement':
      return html623afa$AnchorElementWrappingImplementation$Dart.AnchorElementWrappingImplementation$_wrap$35$html623afa$$Factory_(raw);
    case 'HTMLAreaElement':
      return html623afa$AreaElementWrappingImplementation$Dart.AreaElementWrappingImplementation$_wrap$33$html623afa$$Factory_(raw);
    case 'HTMLAudioElement':
      return html623afa$AudioElementWrappingImplementation$Dart.AudioElementWrappingImplementation$_wrap$34$html623afa$$Factory_(raw);
    case 'HTMLBRElement':
      return html623afa$BRElementWrappingImplementation$Dart.BRElementWrappingImplementation$_wrap$31$html623afa$$Factory_(raw);
    case 'HTMLBaseElement':
      return html623afa$BaseElementWrappingImplementation$Dart.BaseElementWrappingImplementation$_wrap$33$html623afa$$Factory_(raw);
    case 'HTMLBodyElement':
      return html623afa$BodyElementWrappingImplementation$Dart.BodyElementWrappingImplementation$_wrap$33$html623afa$$Factory_(raw);
    case 'HTMLButtonElement':
      return html623afa$ButtonElementWrappingImplementation$Dart.ButtonElementWrappingImplementation$_wrap$35$html623afa$$Factory_(raw);
    case 'HTMLCanvasElement':
      return html623afa$CanvasElementWrappingImplementation$Dart.CanvasElementWrappingImplementation$_wrap$35$html623afa$$Factory_(raw);
    case 'HTMLDListElement':
      return html623afa$DListElementWrappingImplementation$Dart.DListElementWrappingImplementation$_wrap$34$html623afa$$Factory_(raw);
    case 'HTMLDataListElement':
      return html623afa$DataListElementWrappingImplementation$Dart.DataListElementWrappingImplementation$_wrap$37$html623afa$$Factory_(raw);
    case 'HTMLDetailsElement':
      return html623afa$DetailsElementWrappingImplementation$Dart.DetailsElementWrappingImplementation$_wrap$36$html623afa$$Factory_(raw);
    case 'HTMLDivElement':
      return html623afa$DivElementWrappingImplementation$Dart.DivElementWrappingImplementation$_wrap$32$html623afa$$Factory_(raw);
    case 'HTMLElement':
      return html623afa$ElementWrappingImplementation$Dart.ElementWrappingImplementation$_wrap$29$html623afa$$Factory_(raw);
    case 'HTMLEmbedElement':
      return html623afa$EmbedElementWrappingImplementation$Dart.EmbedElementWrappingImplementation$_wrap$34$html623afa$$Factory_(raw);
    case 'HTMLFieldSetElement':
      return html623afa$FieldSetElementWrappingImplementation$Dart.FieldSetElementWrappingImplementation$_wrap$37$html623afa$$Factory_(raw);
    case 'HTMLFontElement':
      return html623afa$FontElementWrappingImplementation$Dart.FontElementWrappingImplementation$_wrap$33$html623afa$$Factory_(raw);
    case 'HTMLFormElement':
      return html623afa$FormElementWrappingImplementation$Dart.FormElementWrappingImplementation$_wrap$33$html623afa$$Factory_(raw);
    case 'HTMLHRElement':
      return html623afa$HRElementWrappingImplementation$Dart.HRElementWrappingImplementation$_wrap$31$html623afa$$Factory_(raw);
    case 'HTMLHeadElement':
      return html623afa$HeadElementWrappingImplementation$Dart.HeadElementWrappingImplementation$_wrap$33$html623afa$$Factory_(raw);
    case 'HTMLHeadingElement':
      return html623afa$HeadingElementWrappingImplementation$Dart.HeadingElementWrappingImplementation$_wrap$36$html623afa$$Factory_(raw);
    case 'HTMLHtmlElement':
      return html623afa$DocumentWrappingImplementation$Dart.DocumentWrappingImplementation$_wrap$30$html623afa$$Factory_(raw.parentNode$getter(), raw);
    case 'HTMLIFrameElement':
      return html623afa$IFrameElementWrappingImplementation$Dart.IFrameElementWrappingImplementation$_wrap$35$html623afa$$Factory_(raw);
    case 'HTMLImageElement':
      return html623afa$ImageElementWrappingImplementation$Dart.ImageElementWrappingImplementation$_wrap$34$html623afa$$Factory_(raw);
    case 'HTMLInputElement':
      return html623afa$InputElementWrappingImplementation$Dart.InputElementWrappingImplementation$_wrap$34$html623afa$$Factory_(raw);
    case 'HTMLKeygenElement':
      return html623afa$KeygenElementWrappingImplementation$Dart.KeygenElementWrappingImplementation$_wrap$35$html623afa$$Factory_(raw);
    case 'HTMLLIElement':
      return html623afa$LIElementWrappingImplementation$Dart.LIElementWrappingImplementation$_wrap$31$html623afa$$Factory_(raw);
    case 'HTMLLabelElement':
      return html623afa$LabelElementWrappingImplementation$Dart.LabelElementWrappingImplementation$_wrap$34$html623afa$$Factory_(raw);
    case 'HTMLLegendElement':
      return html623afa$LegendElementWrappingImplementation$Dart.LegendElementWrappingImplementation$_wrap$35$html623afa$$Factory_(raw);
    case 'HTMLLinkElement':
      return html623afa$LinkElementWrappingImplementation$Dart.LinkElementWrappingImplementation$_wrap$33$html623afa$$Factory_(raw);
    case 'HTMLMapElement':
      return html623afa$MapElementWrappingImplementation$Dart.MapElementWrappingImplementation$_wrap$32$html623afa$$Factory_(raw);
    case 'HTMLMarqueeElement':
      return html623afa$MarqueeElementWrappingImplementation$Dart.MarqueeElementWrappingImplementation$_wrap$36$html623afa$$Factory_(raw);
    case 'HTMLMediaElement':
      return html623afa$MediaElementWrappingImplementation$Dart.MediaElementWrappingImplementation$_wrap$34$html623afa$$Factory_(raw);
    case 'HTMLMenuElement':
      return html623afa$MenuElementWrappingImplementation$Dart.MenuElementWrappingImplementation$_wrap$33$html623afa$$Factory_(raw);
    case 'HTMLMetaElement':
      return html623afa$MetaElementWrappingImplementation$Dart.MetaElementWrappingImplementation$_wrap$33$html623afa$$Factory_(raw);
    case 'HTMLMeterElement':
      return html623afa$MeterElementWrappingImplementation$Dart.MeterElementWrappingImplementation$_wrap$34$html623afa$$Factory_(raw);
    case 'HTMLModElement':
      return html623afa$ModElementWrappingImplementation$Dart.ModElementWrappingImplementation$_wrap$32$html623afa$$Factory_(raw);
    case 'HTMLOListElement':
      return html623afa$OListElementWrappingImplementation$Dart.OListElementWrappingImplementation$_wrap$34$html623afa$$Factory_(raw);
    case 'HTMLObjectElement':
      return html623afa$ObjectElementWrappingImplementation$Dart.ObjectElementWrappingImplementation$_wrap$35$html623afa$$Factory_(raw);
    case 'HTMLOptGroupElement':
      return html623afa$OptGroupElementWrappingImplementation$Dart.OptGroupElementWrappingImplementation$_wrap$37$html623afa$$Factory_(raw);
    case 'HTMLOptionElement':
      return html623afa$OptionElementWrappingImplementation$Dart.OptionElementWrappingImplementation$_wrap$35$html623afa$$Factory_(raw);
    case 'HTMLOutputElement':
      return html623afa$OutputElementWrappingImplementation$Dart.OutputElementWrappingImplementation$_wrap$35$html623afa$$Factory_(raw);
    case 'HTMLParagraphElement':
      return html623afa$ParagraphElementWrappingImplementation$Dart.ParagraphElementWrappingImplementation$_wrap$38$html623afa$$Factory_(raw);
    case 'HTMLParamElement':
      return html623afa$ParamElementWrappingImplementation$Dart.ParamElementWrappingImplementation$_wrap$34$html623afa$$Factory_(raw);
    case 'HTMLPreElement':
      return html623afa$PreElementWrappingImplementation$Dart.PreElementWrappingImplementation$_wrap$32$html623afa$$Factory_(raw);
    case 'HTMLProgressElement':
      return html623afa$ProgressElementWrappingImplementation$Dart.ProgressElementWrappingImplementation$_wrap$37$html623afa$$Factory_(raw);
    case 'HTMLQuoteElement':
      return html623afa$QuoteElementWrappingImplementation$Dart.QuoteElementWrappingImplementation$_wrap$34$html623afa$$Factory_(raw);
    case 'HTMLScriptElement':
      return html623afa$ScriptElementWrappingImplementation$Dart.ScriptElementWrappingImplementation$_wrap$35$html623afa$$Factory_(raw);
    case 'HTMLSelectElement':
      return html623afa$SelectElementWrappingImplementation$Dart.SelectElementWrappingImplementation$_wrap$35$html623afa$$Factory_(raw);
    case 'HTMLSourceElement':
      return html623afa$SourceElementWrappingImplementation$Dart.SourceElementWrappingImplementation$_wrap$35$html623afa$$Factory_(raw);
    case 'HTMLSpanElement':
      return html623afa$SpanElementWrappingImplementation$Dart.SpanElementWrappingImplementation$_wrap$33$html623afa$$Factory_(raw);
    case 'HTMLStyleElement':
      return html623afa$StyleElementWrappingImplementation$Dart.StyleElementWrappingImplementation$_wrap$34$html623afa$$Factory_(raw);
    case 'HTMLTableCaptionElement':
      return html623afa$TableCaptionElementWrappingImplementation$Dart.TableCaptionElementWrappingImplementation$_wrap$41$html623afa$$Factory_(raw);
    case 'HTMLTableCellElement':
      return html623afa$TableCellElementWrappingImplementation$Dart.TableCellElementWrappingImplementation$_wrap$38$html623afa$$Factory_(raw);
    case 'HTMLTableColElement':
      return html623afa$TableColElementWrappingImplementation$Dart.TableColElementWrappingImplementation$_wrap$37$html623afa$$Factory_(raw);
    case 'HTMLTableElement':
      return html623afa$TableElementWrappingImplementation$Dart.TableElementWrappingImplementation$_wrap$34$html623afa$$Factory_(raw);
    case 'HTMLTableRowElement':
      return html623afa$TableRowElementWrappingImplementation$Dart.TableRowElementWrappingImplementation$_wrap$37$html623afa$$Factory_(raw);
    case 'HTMLTableSectionElement':
      return html623afa$TableSectionElementWrappingImplementation$Dart.TableSectionElementWrappingImplementation$_wrap$41$html623afa$$Factory_(raw);
    case 'HTMLTextAreaElement':
      return html623afa$TextAreaElementWrappingImplementation$Dart.TextAreaElementWrappingImplementation$_wrap$37$html623afa$$Factory_(raw);
    case 'HTMLTitleElement':
      return html623afa$TitleElementWrappingImplementation$Dart.TitleElementWrappingImplementation$_wrap$34$html623afa$$Factory_(raw);
    case 'HTMLTrackElement':
      return html623afa$TrackElementWrappingImplementation$Dart.TrackElementWrappingImplementation$_wrap$34$html623afa$$Factory_(raw);
    case 'HTMLUListElement':
      return html623afa$UListElementWrappingImplementation$Dart.UListElementWrappingImplementation$_wrap$34$html623afa$$Factory_(raw);
    case 'HTMLUnknownElement':
      return html623afa$UnknownElementWrappingImplementation$Dart.UnknownElementWrappingImplementation$_wrap$36$html623afa$$Factory_(raw);
    case 'HTMLVideoElement':
      return html623afa$VideoElementWrappingImplementation$Dart.VideoElementWrappingImplementation$_wrap$34$html623afa$$Factory_(raw);
    default:{
        $Dart$ThrowException(UnsupportedOperationException$Dart.UnsupportedOperationException$$Factory(ADD$operator('Unknown type:', raw.toString$named(0, $noargs))));
      }

  }
}
;
html623afa$LevelDom$Dart.wrapElement$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapElement$member(raw);
}
;
html623afa$LevelDom$Dart.wrapElement$getter = function wrapElement$getter(){
  return html623afa$LevelDom$Dart.wrapElement$named;
}
;
html623afa$LevelDom$Dart.wrapElementList$member = function(raw){
  return raw == null?$Dart$Null:html623afa$FrozenElementList$Dart.FrozenElementList$_wrap$17$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapElementList$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapElementList$member(raw);
}
;
html623afa$LevelDom$Dart.wrapElementList$getter = function wrapElementList$getter(){
  return html623afa$LevelDom$Dart.wrapElementList$named;
}
;
html623afa$LevelDom$Dart.wrapEmbedElement$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$EmbedElementWrappingImplementation$Dart.EmbedElementWrappingImplementation$_wrap$34$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapEmbedElement$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapEmbedElement$member(raw);
}
;
html623afa$LevelDom$Dart.wrapEmbedElement$getter = function wrapEmbedElement$getter(){
  return html623afa$LevelDom$Dart.wrapEmbedElement$named;
}
;
html623afa$LevelDom$Dart.wrapEntity$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$EntityWrappingImplementation$Dart.EntityWrappingImplementation$_wrap$28$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapEntity$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapEntity$member(raw);
}
;
html623afa$LevelDom$Dart.wrapEntity$getter = function wrapEntity$getter(){
  return html623afa$LevelDom$Dart.wrapEntity$named;
}
;
html623afa$LevelDom$Dart.wrapEntityReference$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$EntityReferenceWrappingImplementation$Dart.EntityReferenceWrappingImplementation$_wrap$37$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapEntityReference$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapEntityReference$member(raw);
}
;
html623afa$LevelDom$Dart.wrapEntityReference$getter = function wrapEntityReference$getter(){
  return html623afa$LevelDom$Dart.wrapEntityReference$named;
}
;
html623afa$LevelDom$Dart.wrapEntriesCallback$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$EntriesCallbackWrappingImplementation$Dart.EntriesCallbackWrappingImplementation$_wrap$37$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapEntriesCallback$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapEntriesCallback$member(raw);
}
;
html623afa$LevelDom$Dart.wrapEntriesCallback$getter = function wrapEntriesCallback$getter(){
  return html623afa$LevelDom$Dart.wrapEntriesCallback$named;
}
;
html623afa$LevelDom$Dart.wrapEntry$member = function(raw){
  if (raw == null) {
    return $Dart$Null;
  }
  if (raw.dartObjectLocalStorage$getter() != null) {
    return raw.dartObjectLocalStorage$getter();
  }
  switch (raw.typeName$getter()) {
    case 'DirectoryEntry':
      return html623afa$DirectoryEntryWrappingImplementation$Dart.DirectoryEntryWrappingImplementation$_wrap$36$html623afa$$Factory_(raw);
    case 'Entry':
      return html623afa$EntryWrappingImplementation$Dart.EntryWrappingImplementation$_wrap$27$html623afa$$Factory_(raw);
    case 'FileEntry':
      return html623afa$FileEntryWrappingImplementation$Dart.FileEntryWrappingImplementation$_wrap$31$html623afa$$Factory_(raw);
    default:{
        $Dart$ThrowException(UnsupportedOperationException$Dart.UnsupportedOperationException$$Factory(ADD$operator('Unknown type:', raw.toString$named(0, $noargs))));
      }

  }
}
;
html623afa$LevelDom$Dart.wrapEntry$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapEntry$member(raw);
}
;
html623afa$LevelDom$Dart.wrapEntry$getter = function wrapEntry$getter(){
  return html623afa$LevelDom$Dart.wrapEntry$named;
}
;
html623afa$LevelDom$Dart.wrapEntryArray$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$EntryArrayWrappingImplementation$Dart.EntryArrayWrappingImplementation$_wrap$32$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapEntryArray$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapEntryArray$member(raw);
}
;
html623afa$LevelDom$Dart.wrapEntryArray$getter = function wrapEntryArray$getter(){
  return html623afa$LevelDom$Dart.wrapEntryArray$named;
}
;
html623afa$LevelDom$Dart.wrapEntryArraySync$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$EntryArraySyncWrappingImplementation$Dart.EntryArraySyncWrappingImplementation$_wrap$36$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapEntryArraySync$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapEntryArraySync$member(raw);
}
;
html623afa$LevelDom$Dart.wrapEntryArraySync$getter = function wrapEntryArraySync$getter(){
  return html623afa$LevelDom$Dart.wrapEntryArraySync$named;
}
;
html623afa$LevelDom$Dart.wrapEntryCallback$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$EntryCallbackWrappingImplementation$Dart.EntryCallbackWrappingImplementation$_wrap$35$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapEntryCallback$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapEntryCallback$member(raw);
}
;
html623afa$LevelDom$Dart.wrapEntryCallback$getter = function wrapEntryCallback$getter(){
  return html623afa$LevelDom$Dart.wrapEntryCallback$named;
}
;
html623afa$LevelDom$Dart.wrapEntrySync$member = function(raw){
  if (raw == null) {
    return $Dart$Null;
  }
  if (raw.dartObjectLocalStorage$getter() != null) {
    return raw.dartObjectLocalStorage$getter();
  }
  switch (raw.typeName$getter()) {
    case 'DirectoryEntrySync':
      return html623afa$DirectoryEntrySyncWrappingImplementation$Dart.DirectoryEntrySyncWrappingImplementation$_wrap$40$html623afa$$Factory_(raw);
    case 'EntrySync':
      return html623afa$EntrySyncWrappingImplementation$Dart.EntrySyncWrappingImplementation$_wrap$31$html623afa$$Factory_(raw);
    case 'FileEntrySync':
      return html623afa$FileEntrySyncWrappingImplementation$Dart.FileEntrySyncWrappingImplementation$_wrap$35$html623afa$$Factory_(raw);
    default:{
        $Dart$ThrowException(UnsupportedOperationException$Dart.UnsupportedOperationException$$Factory(ADD$operator('Unknown type:', raw.toString$named(0, $noargs))));
      }

  }
}
;
html623afa$LevelDom$Dart.wrapEntrySync$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapEntrySync$member(raw);
}
;
html623afa$LevelDom$Dart.wrapEntrySync$getter = function wrapEntrySync$getter(){
  return html623afa$LevelDom$Dart.wrapEntrySync$named;
}
;
html623afa$LevelDom$Dart.wrapErrorCallback$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$ErrorCallbackWrappingImplementation$Dart.ErrorCallbackWrappingImplementation$_wrap$35$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapErrorCallback$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapErrorCallback$member(raw);
}
;
html623afa$LevelDom$Dart.wrapErrorCallback$getter = function wrapErrorCallback$getter(){
  return html623afa$LevelDom$Dart.wrapErrorCallback$named;
}
;
html623afa$LevelDom$Dart.wrapErrorEvent$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$ErrorEventWrappingImplementation$Dart.ErrorEventWrappingImplementation$_wrap$32$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapErrorEvent$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapErrorEvent$member(raw);
}
;
html623afa$LevelDom$Dart.wrapErrorEvent$getter = function wrapErrorEvent$getter(){
  return html623afa$LevelDom$Dart.wrapErrorEvent$named;
}
;
html623afa$LevelDom$Dart.wrapEvent$member = function(raw){
  if (raw == null) {
    return $Dart$Null;
  }
  if (raw.dartObjectLocalStorage$getter() != null) {
    return raw.dartObjectLocalStorage$getter();
  }
  switch (raw.typeName$getter()) {
    case 'WebKitAnimationEvent':
      return html623afa$AnimationEventWrappingImplementation$Dart.AnimationEventWrappingImplementation$_wrap$36$html623afa$$Factory_(raw);
    case 'BeforeLoadEvent':
      return html623afa$BeforeLoadEventWrappingImplementation$Dart.BeforeLoadEventWrappingImplementation$_wrap$37$html623afa$$Factory_(raw);
    case 'CloseEvent':
      return html623afa$CloseEventWrappingImplementation$Dart.CloseEventWrappingImplementation$_wrap$32$html623afa$$Factory_(raw);
    case 'CompositionEvent':
      return html623afa$CompositionEventWrappingImplementation$Dart.CompositionEventWrappingImplementation$_wrap$38$html623afa$$Factory_(raw);
    case 'CustomEvent':
      return html623afa$CustomEventWrappingImplementation$Dart.CustomEventWrappingImplementation$_wrap$33$html623afa$$Factory_(raw);
    case 'DeviceMotionEvent':
      return html623afa$DeviceMotionEventWrappingImplementation$Dart.DeviceMotionEventWrappingImplementation$_wrap$39$html623afa$$Factory_(raw);
    case 'DeviceOrientationEvent':
      return html623afa$DeviceOrientationEventWrappingImplementation$Dart.DeviceOrientationEventWrappingImplementation$_wrap$44$html623afa$$Factory_(raw);
    case 'ErrorEvent':
      return html623afa$ErrorEventWrappingImplementation$Dart.ErrorEventWrappingImplementation$_wrap$32$html623afa$$Factory_(raw);
    case 'Event':
      return html623afa$EventWrappingImplementation$Dart.EventWrappingImplementation$_wrap$27$html623afa$$Factory_(raw);
    case 'HashChangeEvent':
      return html623afa$HashChangeEventWrappingImplementation$Dart.HashChangeEventWrappingImplementation$_wrap$37$html623afa$$Factory_(raw);
    case 'IDBVersionChangeEvent':
      return html623afa$IDBVersionChangeEventWrappingImplementation$Dart.IDBVersionChangeEventWrappingImplementation$_wrap$43$html623afa$$Factory_(raw);
    case 'KeyboardEvent':
      return html623afa$KeyboardEventWrappingImplementation$Dart.KeyboardEventWrappingImplementation$_wrap$35$html623afa$$Factory_(raw);
    case 'MessageEvent':
      return html623afa$MessageEventWrappingImplementation$Dart.MessageEventWrappingImplementation$_wrap$34$html623afa$$Factory_(raw);
    case 'MouseEvent':
      return html623afa$MouseEventWrappingImplementation$Dart.MouseEventWrappingImplementation$_wrap$32$html623afa$$Factory_(raw);
    case 'MutationEvent':
      return html623afa$MutationEventWrappingImplementation$Dart.MutationEventWrappingImplementation$_wrap$35$html623afa$$Factory_(raw);
    case 'OverflowEvent':
      return html623afa$OverflowEventWrappingImplementation$Dart.OverflowEventWrappingImplementation$_wrap$35$html623afa$$Factory_(raw);
    case 'PageTransitionEvent':
      return html623afa$PageTransitionEventWrappingImplementation$Dart.PageTransitionEventWrappingImplementation$_wrap$41$html623afa$$Factory_(raw);
    case 'PopStateEvent':
      return html623afa$PopStateEventWrappingImplementation$Dart.PopStateEventWrappingImplementation$_wrap$35$html623afa$$Factory_(raw);
    case 'ProgressEvent':
      return html623afa$ProgressEventWrappingImplementation$Dart.ProgressEventWrappingImplementation$_wrap$35$html623afa$$Factory_(raw);
    case 'SpeechInputEvent':
      return html623afa$SpeechInputEventWrappingImplementation$Dart.SpeechInputEventWrappingImplementation$_wrap$38$html623afa$$Factory_(raw);
    case 'StorageEvent':
      return html623afa$StorageEventWrappingImplementation$Dart.StorageEventWrappingImplementation$_wrap$34$html623afa$$Factory_(raw);
    case 'TextEvent':
      return html623afa$TextEventWrappingImplementation$Dart.TextEventWrappingImplementation$_wrap$31$html623afa$$Factory_(raw);
    case 'TouchEvent':
      return html623afa$TouchEventWrappingImplementation$Dart.TouchEventWrappingImplementation$_wrap$32$html623afa$$Factory_(raw);
    case 'WebKitTransitionEvent':
      return html623afa$TransitionEventWrappingImplementation$Dart.TransitionEventWrappingImplementation$_wrap$37$html623afa$$Factory_(raw);
    case 'UIEvent':
      return html623afa$UIEventWrappingImplementation$Dart.UIEventWrappingImplementation$_wrap$29$html623afa$$Factory_(raw);
    case 'WebGLContextEvent':
      return html623afa$WebGLContextEventWrappingImplementation$Dart.WebGLContextEventWrappingImplementation$_wrap$39$html623afa$$Factory_(raw);
    case 'WheelEvent':
      return html623afa$WheelEventWrappingImplementation$Dart.WheelEventWrappingImplementation$_wrap$32$html623afa$$Factory_(raw);
    case 'XMLHttpRequestProgressEvent':
      return html623afa$XMLHttpRequestProgressEventWrappingImplementation$Dart.XMLHttpRequestProgressEventWrappingImplementation$_wrap$49$html623afa$$Factory_(raw);
    default:{
        $Dart$ThrowException(UnsupportedOperationException$Dart.UnsupportedOperationException$$Factory(ADD$operator('Unknown type:', raw.toString$named(0, $noargs))));
      }

  }
}
;
html623afa$LevelDom$Dart.wrapEvent$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapEvent$member(raw);
}
;
html623afa$LevelDom$Dart.wrapEvent$getter = function wrapEvent$getter(){
  return html623afa$LevelDom$Dart.wrapEvent$named;
}
;
html623afa$LevelDom$Dart.wrapEventException$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$EventExceptionWrappingImplementation$Dart.EventExceptionWrappingImplementation$_wrap$36$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapEventException$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapEventException$member(raw);
}
;
html623afa$LevelDom$Dart.wrapEventException$getter = function wrapEventException$getter(){
  return html623afa$LevelDom$Dart.wrapEventException$named;
}
;
function html623afa$LevelDom$Dart$wrapEventListener$c0$function$24_17_2$Hoisted(dartc_scp$0, evt){
  return dartc_scp$0.raw(1, $noargs, html623afa$LevelDom$Dart.wrapEvent$member(evt));
}

function html623afa$LevelDom$Dart$wrapEventListener$c0$function$24_17_2$Hoisted$named($s0, $n, $o, evt){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart$wrapEventListener$c0$function$24_17_2$Hoisted($s0, evt);
}

html623afa$LevelDom$Dart.wrapEventListener$member = function(raw){
  var dartc_scp$0 = {raw:raw};
  return dartc_scp$0.raw == null?$Dart$Null:$bind(html623afa$LevelDom$Dart$wrapEventListener$c0$function$24_17_2$Hoisted$named, $Dart$Null, dartc_scp$0);
}
;
html623afa$LevelDom$Dart.wrapEventListener$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapEventListener$member(raw);
}
;
html623afa$LevelDom$Dart.wrapEventListener$getter = function wrapEventListener$getter(){
  return html623afa$LevelDom$Dart.wrapEventListener$named;
}
;
html623afa$LevelDom$Dart.wrapEventSource$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$EventSourceWrappingImplementation$Dart.EventSourceWrappingImplementation$_wrap$33$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapEventSource$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapEventSource$member(raw);
}
;
html623afa$LevelDom$Dart.wrapEventSource$getter = function wrapEventSource$getter(){
  return html623afa$LevelDom$Dart.wrapEventSource$named;
}
;
html623afa$LevelDom$Dart.wrapEventTarget$member = function(raw){
  if (raw == null) {
    return $Dart$Null;
  }
  if (raw.dartObjectLocalStorage$getter() != null) {
    return raw.dartObjectLocalStorage$getter();
  }
  switch (raw.typeName$getter()) {
    case 'HTMLAnchorElement':
      return html623afa$AnchorElementWrappingImplementation$Dart.AnchorElementWrappingImplementation$_wrap$35$html623afa$$Factory_(raw);
    case 'HTMLAreaElement':
      return html623afa$AreaElementWrappingImplementation$Dart.AreaElementWrappingImplementation$_wrap$33$html623afa$$Factory_(raw);
    case 'HTMLAudioElement':
      return html623afa$AudioElementWrappingImplementation$Dart.AudioElementWrappingImplementation$_wrap$34$html623afa$$Factory_(raw);
    case 'HTMLBRElement':
      return html623afa$BRElementWrappingImplementation$Dart.BRElementWrappingImplementation$_wrap$31$html623afa$$Factory_(raw);
    case 'HTMLBaseElement':
      return html623afa$BaseElementWrappingImplementation$Dart.BaseElementWrappingImplementation$_wrap$33$html623afa$$Factory_(raw);
    case 'HTMLBodyElement':
      return html623afa$BodyElementWrappingImplementation$Dart.BodyElementWrappingImplementation$_wrap$33$html623afa$$Factory_(raw);
    case 'HTMLButtonElement':
      return html623afa$ButtonElementWrappingImplementation$Dart.ButtonElementWrappingImplementation$_wrap$35$html623afa$$Factory_(raw);
    case 'CDATASection':
      return html623afa$CDATASectionWrappingImplementation$Dart.CDATASectionWrappingImplementation$_wrap$34$html623afa$$Factory_(raw);
    case 'HTMLCanvasElement':
      return html623afa$CanvasElementWrappingImplementation$Dart.CanvasElementWrappingImplementation$_wrap$35$html623afa$$Factory_(raw);
    case 'CharacterData':
      return html623afa$CharacterDataWrappingImplementation$Dart.CharacterDataWrappingImplementation$_wrap$35$html623afa$$Factory_(raw);
    case 'Comment':
      return html623afa$CommentWrappingImplementation$Dart.CommentWrappingImplementation$_wrap$29$html623afa$$Factory_(raw);
    case 'HTMLDListElement':
      return html623afa$DListElementWrappingImplementation$Dart.DListElementWrappingImplementation$_wrap$34$html623afa$$Factory_(raw);
    case 'DOMApplicationCache':
      return html623afa$DOMApplicationCacheWrappingImplementation$Dart.DOMApplicationCacheWrappingImplementation$_wrap$41$html623afa$$Factory_(raw);
    case 'HTMLDataListElement':
      return html623afa$DataListElementWrappingImplementation$Dart.DataListElementWrappingImplementation$_wrap$37$html623afa$$Factory_(raw);
    case 'HTMLDetailsElement':
      return html623afa$DetailsElementWrappingImplementation$Dart.DetailsElementWrappingImplementation$_wrap$36$html623afa$$Factory_(raw);
    case 'HTMLDivElement':
      return html623afa$DivElementWrappingImplementation$Dart.DivElementWrappingImplementation$_wrap$32$html623afa$$Factory_(raw);
    case 'HTMLDocument':
      return html623afa$DocumentWrappingImplementation$Dart.DocumentWrappingImplementation$_wrap$30$html623afa$$Factory_(raw, raw.documentElement$getter());
    case 'DocumentFragment':
      return html623afa$DocumentFragmentWrappingImplementation$Dart.DocumentFragmentWrappingImplementation$_wrap$38$html623afa$$Factory_(raw);
    case 'HTMLElement':
      return html623afa$ElementWrappingImplementation$Dart.ElementWrappingImplementation$_wrap$29$html623afa$$Factory_(raw);
    case 'HTMLEmbedElement':
      return html623afa$EmbedElementWrappingImplementation$Dart.EmbedElementWrappingImplementation$_wrap$34$html623afa$$Factory_(raw);
    case 'Entity':
      return html623afa$EntityWrappingImplementation$Dart.EntityWrappingImplementation$_wrap$28$html623afa$$Factory_(raw);
    case 'EntityReference':
      return html623afa$EntityReferenceWrappingImplementation$Dart.EntityReferenceWrappingImplementation$_wrap$37$html623afa$$Factory_(raw);
    case 'EventSource':
      return html623afa$EventSourceWrappingImplementation$Dart.EventSourceWrappingImplementation$_wrap$33$html623afa$$Factory_(raw);
    case 'EventTarget':
      return html623afa$EventTargetWrappingImplementation$Dart.EventTargetWrappingImplementation$_wrap$33$html623afa$$Factory_(raw);
    case 'HTMLFieldSetElement':
      return html623afa$FieldSetElementWrappingImplementation$Dart.FieldSetElementWrappingImplementation$_wrap$37$html623afa$$Factory_(raw);
    case 'HTMLFontElement':
      return html623afa$FontElementWrappingImplementation$Dart.FontElementWrappingImplementation$_wrap$33$html623afa$$Factory_(raw);
    case 'HTMLFormElement':
      return html623afa$FormElementWrappingImplementation$Dart.FormElementWrappingImplementation$_wrap$33$html623afa$$Factory_(raw);
    case 'HTMLHRElement':
      return html623afa$HRElementWrappingImplementation$Dart.HRElementWrappingImplementation$_wrap$31$html623afa$$Factory_(raw);
    case 'HTMLHeadElement':
      return html623afa$HeadElementWrappingImplementation$Dart.HeadElementWrappingImplementation$_wrap$33$html623afa$$Factory_(raw);
    case 'HTMLHeadingElement':
      return html623afa$HeadingElementWrappingImplementation$Dart.HeadingElementWrappingImplementation$_wrap$36$html623afa$$Factory_(raw);
    case 'HTMLHtmlElement':
      return html623afa$DocumentWrappingImplementation$Dart.DocumentWrappingImplementation$_wrap$30$html623afa$$Factory_(raw.parentNode$getter(), raw);
    case 'HTMLIFrameElement':
      return html623afa$IFrameElementWrappingImplementation$Dart.IFrameElementWrappingImplementation$_wrap$35$html623afa$$Factory_(raw);
    case 'HTMLImageElement':
      return html623afa$ImageElementWrappingImplementation$Dart.ImageElementWrappingImplementation$_wrap$34$html623afa$$Factory_(raw);
    case 'HTMLInputElement':
      return html623afa$InputElementWrappingImplementation$Dart.InputElementWrappingImplementation$_wrap$34$html623afa$$Factory_(raw);
    case 'HTMLKeygenElement':
      return html623afa$KeygenElementWrappingImplementation$Dart.KeygenElementWrappingImplementation$_wrap$35$html623afa$$Factory_(raw);
    case 'HTMLLIElement':
      return html623afa$LIElementWrappingImplementation$Dart.LIElementWrappingImplementation$_wrap$31$html623afa$$Factory_(raw);
    case 'HTMLLabelElement':
      return html623afa$LabelElementWrappingImplementation$Dart.LabelElementWrappingImplementation$_wrap$34$html623afa$$Factory_(raw);
    case 'HTMLLegendElement':
      return html623afa$LegendElementWrappingImplementation$Dart.LegendElementWrappingImplementation$_wrap$35$html623afa$$Factory_(raw);
    case 'HTMLLinkElement':
      return html623afa$LinkElementWrappingImplementation$Dart.LinkElementWrappingImplementation$_wrap$33$html623afa$$Factory_(raw);
    case 'HTMLMapElement':
      return html623afa$MapElementWrappingImplementation$Dart.MapElementWrappingImplementation$_wrap$32$html623afa$$Factory_(raw);
    case 'HTMLMarqueeElement':
      return html623afa$MarqueeElementWrappingImplementation$Dart.MarqueeElementWrappingImplementation$_wrap$36$html623afa$$Factory_(raw);
    case 'HTMLMediaElement':
      return html623afa$MediaElementWrappingImplementation$Dart.MediaElementWrappingImplementation$_wrap$34$html623afa$$Factory_(raw);
    case 'HTMLMenuElement':
      return html623afa$MenuElementWrappingImplementation$Dart.MenuElementWrappingImplementation$_wrap$33$html623afa$$Factory_(raw);
    case 'MessagePort':
      return html623afa$MessagePortWrappingImplementation$Dart.MessagePortWrappingImplementation$_wrap$33$html623afa$$Factory_(raw);
    case 'HTMLMetaElement':
      return html623afa$MetaElementWrappingImplementation$Dart.MetaElementWrappingImplementation$_wrap$33$html623afa$$Factory_(raw);
    case 'HTMLMeterElement':
      return html623afa$MeterElementWrappingImplementation$Dart.MeterElementWrappingImplementation$_wrap$34$html623afa$$Factory_(raw);
    case 'HTMLModElement':
      return html623afa$ModElementWrappingImplementation$Dart.ModElementWrappingImplementation$_wrap$32$html623afa$$Factory_(raw);
    case 'Node':
      return html623afa$NodeWrappingImplementation$Dart.NodeWrappingImplementation$_wrap$26$html623afa$$Factory_(raw);
    case 'Notation':
      return html623afa$NotationWrappingImplementation$Dart.NotationWrappingImplementation$_wrap$30$html623afa$$Factory_(raw);
    case 'Notification':
      return html623afa$NotificationWrappingImplementation$Dart.NotificationWrappingImplementation$_wrap$34$html623afa$$Factory_(raw);
    case 'HTMLOListElement':
      return html623afa$OListElementWrappingImplementation$Dart.OListElementWrappingImplementation$_wrap$34$html623afa$$Factory_(raw);
    case 'HTMLObjectElement':
      return html623afa$ObjectElementWrappingImplementation$Dart.ObjectElementWrappingImplementation$_wrap$35$html623afa$$Factory_(raw);
    case 'HTMLOptGroupElement':
      return html623afa$OptGroupElementWrappingImplementation$Dart.OptGroupElementWrappingImplementation$_wrap$37$html623afa$$Factory_(raw);
    case 'HTMLOptionElement':
      return html623afa$OptionElementWrappingImplementation$Dart.OptionElementWrappingImplementation$_wrap$35$html623afa$$Factory_(raw);
    case 'HTMLOutputElement':
      return html623afa$OutputElementWrappingImplementation$Dart.OutputElementWrappingImplementation$_wrap$35$html623afa$$Factory_(raw);
    case 'HTMLParagraphElement':
      return html623afa$ParagraphElementWrappingImplementation$Dart.ParagraphElementWrappingImplementation$_wrap$38$html623afa$$Factory_(raw);
    case 'HTMLParamElement':
      return html623afa$ParamElementWrappingImplementation$Dart.ParamElementWrappingImplementation$_wrap$34$html623afa$$Factory_(raw);
    case 'HTMLPreElement':
      return html623afa$PreElementWrappingImplementation$Dart.PreElementWrappingImplementation$_wrap$32$html623afa$$Factory_(raw);
    case 'ProcessingInstruction':
      return html623afa$ProcessingInstructionWrappingImplementation$Dart.ProcessingInstructionWrappingImplementation$_wrap$43$html623afa$$Factory_(raw);
    case 'HTMLProgressElement':
      return html623afa$ProgressElementWrappingImplementation$Dart.ProgressElementWrappingImplementation$_wrap$37$html623afa$$Factory_(raw);
    case 'HTMLQuoteElement':
      return html623afa$QuoteElementWrappingImplementation$Dart.QuoteElementWrappingImplementation$_wrap$34$html623afa$$Factory_(raw);
    case 'HTMLScriptElement':
      return html623afa$ScriptElementWrappingImplementation$Dart.ScriptElementWrappingImplementation$_wrap$35$html623afa$$Factory_(raw);
    case 'HTMLSelectElement':
      return html623afa$SelectElementWrappingImplementation$Dart.SelectElementWrappingImplementation$_wrap$35$html623afa$$Factory_(raw);
    case 'SharedWorker':
      return html623afa$SharedWorkerWrappingImplementation$Dart.SharedWorkerWrappingImplementation$_wrap$34$html623afa$$Factory_(raw);
    case 'HTMLSourceElement':
      return html623afa$SourceElementWrappingImplementation$Dart.SourceElementWrappingImplementation$_wrap$35$html623afa$$Factory_(raw);
    case 'HTMLSpanElement':
      return html623afa$SpanElementWrappingImplementation$Dart.SpanElementWrappingImplementation$_wrap$33$html623afa$$Factory_(raw);
    case 'HTMLStyleElement':
      return html623afa$StyleElementWrappingImplementation$Dart.StyleElementWrappingImplementation$_wrap$34$html623afa$$Factory_(raw);
    case 'HTMLTableCaptionElement':
      return html623afa$TableCaptionElementWrappingImplementation$Dart.TableCaptionElementWrappingImplementation$_wrap$41$html623afa$$Factory_(raw);
    case 'HTMLTableCellElement':
      return html623afa$TableCellElementWrappingImplementation$Dart.TableCellElementWrappingImplementation$_wrap$38$html623afa$$Factory_(raw);
    case 'HTMLTableColElement':
      return html623afa$TableColElementWrappingImplementation$Dart.TableColElementWrappingImplementation$_wrap$37$html623afa$$Factory_(raw);
    case 'HTMLTableElement':
      return html623afa$TableElementWrappingImplementation$Dart.TableElementWrappingImplementation$_wrap$34$html623afa$$Factory_(raw);
    case 'HTMLTableRowElement':
      return html623afa$TableRowElementWrappingImplementation$Dart.TableRowElementWrappingImplementation$_wrap$37$html623afa$$Factory_(raw);
    case 'HTMLTableSectionElement':
      return html623afa$TableSectionElementWrappingImplementation$Dart.TableSectionElementWrappingImplementation$_wrap$41$html623afa$$Factory_(raw);
    case 'Text':
      return html623afa$TextWrappingImplementation$Dart.TextWrappingImplementation$_wrap$26$html623afa$$Factory_(raw);
    case 'HTMLTextAreaElement':
      return html623afa$TextAreaElementWrappingImplementation$Dart.TextAreaElementWrappingImplementation$_wrap$37$html623afa$$Factory_(raw);
    case 'HTMLTitleElement':
      return html623afa$TitleElementWrappingImplementation$Dart.TitleElementWrappingImplementation$_wrap$34$html623afa$$Factory_(raw);
    case 'HTMLTrackElement':
      return html623afa$TrackElementWrappingImplementation$Dart.TrackElementWrappingImplementation$_wrap$34$html623afa$$Factory_(raw);
    case 'HTMLUListElement':
      return html623afa$UListElementWrappingImplementation$Dart.UListElementWrappingImplementation$_wrap$34$html623afa$$Factory_(raw);
    case 'HTMLUnknownElement':
      return html623afa$UnknownElementWrappingImplementation$Dart.UnknownElementWrappingImplementation$_wrap$36$html623afa$$Factory_(raw);
    case 'HTMLVideoElement':
      return html623afa$VideoElementWrappingImplementation$Dart.VideoElementWrappingImplementation$_wrap$34$html623afa$$Factory_(raw);
    case 'WebSocket':
      return html623afa$WebSocketWrappingImplementation$Dart.WebSocketWrappingImplementation$_wrap$31$html623afa$$Factory_(raw);
    case 'Window':
      return html623afa$WindowWrappingImplementation$Dart.WindowWrappingImplementation$_wrap$28$html623afa$$Factory_(raw);
    case 'Worker':
      return html623afa$WorkerWrappingImplementation$Dart.WorkerWrappingImplementation$_wrap$28$html623afa$$Factory_(raw);
    case 'XMLHttpRequest':
      return html623afa$XMLHttpRequestWrappingImplementation$Dart.XMLHttpRequestWrappingImplementation$_wrap$36$html623afa$$Factory_(raw);
    case 'XMLHttpRequestUpload':
      return html623afa$XMLHttpRequestUploadWrappingImplementation$Dart.XMLHttpRequestUploadWrappingImplementation$_wrap$42$html623afa$$Factory_(raw);
    default:{
        $Dart$ThrowException(UnsupportedOperationException$Dart.UnsupportedOperationException$$Factory(ADD$operator('Unknown type:', raw.toString$named(0, $noargs))));
      }

  }
}
;
html623afa$LevelDom$Dart.wrapEventTarget$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapEventTarget$member(raw);
}
;
html623afa$LevelDom$Dart.wrapEventTarget$getter = function wrapEventTarget$getter(){
  return html623afa$LevelDom$Dart.wrapEventTarget$named;
}
;
html623afa$LevelDom$Dart.wrapFieldSetElement$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$FieldSetElementWrappingImplementation$Dart.FieldSetElementWrappingImplementation$_wrap$37$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapFieldSetElement$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapFieldSetElement$member(raw);
}
;
html623afa$LevelDom$Dart.wrapFieldSetElement$getter = function wrapFieldSetElement$getter(){
  return html623afa$LevelDom$Dart.wrapFieldSetElement$named;
}
;
html623afa$LevelDom$Dart.wrapFile$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$FileWrappingImplementation$Dart.FileWrappingImplementation$_wrap$26$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapFile$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapFile$member(raw);
}
;
html623afa$LevelDom$Dart.wrapFile$getter = function wrapFile$getter(){
  return html623afa$LevelDom$Dart.wrapFile$named;
}
;
html623afa$LevelDom$Dart.wrapFileCallback$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$FileCallbackWrappingImplementation$Dart.FileCallbackWrappingImplementation$_wrap$34$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapFileCallback$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapFileCallback$member(raw);
}
;
html623afa$LevelDom$Dart.wrapFileCallback$getter = function wrapFileCallback$getter(){
  return html623afa$LevelDom$Dart.wrapFileCallback$named;
}
;
html623afa$LevelDom$Dart.wrapFileEntry$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$FileEntryWrappingImplementation$Dart.FileEntryWrappingImplementation$_wrap$31$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapFileEntry$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapFileEntry$member(raw);
}
;
html623afa$LevelDom$Dart.wrapFileEntry$getter = function wrapFileEntry$getter(){
  return html623afa$LevelDom$Dart.wrapFileEntry$named;
}
;
html623afa$LevelDom$Dart.wrapFileEntrySync$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$FileEntrySyncWrappingImplementation$Dart.FileEntrySyncWrappingImplementation$_wrap$35$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapFileEntrySync$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapFileEntrySync$member(raw);
}
;
html623afa$LevelDom$Dart.wrapFileEntrySync$getter = function wrapFileEntrySync$getter(){
  return html623afa$LevelDom$Dart.wrapFileEntrySync$named;
}
;
html623afa$LevelDom$Dart.wrapFileError$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$FileErrorWrappingImplementation$Dart.FileErrorWrappingImplementation$_wrap$31$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapFileError$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapFileError$member(raw);
}
;
html623afa$LevelDom$Dart.wrapFileError$getter = function wrapFileError$getter(){
  return html623afa$LevelDom$Dart.wrapFileError$named;
}
;
html623afa$LevelDom$Dart.wrapFileException$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$FileExceptionWrappingImplementation$Dart.FileExceptionWrappingImplementation$_wrap$35$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapFileException$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapFileException$member(raw);
}
;
html623afa$LevelDom$Dart.wrapFileException$getter = function wrapFileException$getter(){
  return html623afa$LevelDom$Dart.wrapFileException$named;
}
;
html623afa$LevelDom$Dart.wrapFileList$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$FileListWrappingImplementation$Dart.FileListWrappingImplementation$_wrap$30$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapFileList$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapFileList$member(raw);
}
;
html623afa$LevelDom$Dart.wrapFileList$getter = function wrapFileList$getter(){
  return html623afa$LevelDom$Dart.wrapFileList$named;
}
;
html623afa$LevelDom$Dart.wrapFileReader$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$FileReaderWrappingImplementation$Dart.FileReaderWrappingImplementation$_wrap$32$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapFileReader$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapFileReader$member(raw);
}
;
html623afa$LevelDom$Dart.wrapFileReader$getter = function wrapFileReader$getter(){
  return html623afa$LevelDom$Dart.wrapFileReader$named;
}
;
html623afa$LevelDom$Dart.wrapFileReaderSync$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$FileReaderSyncWrappingImplementation$Dart.FileReaderSyncWrappingImplementation$_wrap$36$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapFileReaderSync$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapFileReaderSync$member(raw);
}
;
html623afa$LevelDom$Dart.wrapFileReaderSync$getter = function wrapFileReaderSync$getter(){
  return html623afa$LevelDom$Dart.wrapFileReaderSync$named;
}
;
html623afa$LevelDom$Dart.wrapFileSystemCallback$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$FileSystemCallbackWrappingImplementation$Dart.FileSystemCallbackWrappingImplementation$_wrap$40$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapFileSystemCallback$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapFileSystemCallback$member(raw);
}
;
html623afa$LevelDom$Dart.wrapFileSystemCallback$getter = function wrapFileSystemCallback$getter(){
  return html623afa$LevelDom$Dart.wrapFileSystemCallback$named;
}
;
html623afa$LevelDom$Dart.wrapFileWriter$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$FileWriterWrappingImplementation$Dart.FileWriterWrappingImplementation$_wrap$32$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapFileWriter$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapFileWriter$member(raw);
}
;
html623afa$LevelDom$Dart.wrapFileWriter$getter = function wrapFileWriter$getter(){
  return html623afa$LevelDom$Dart.wrapFileWriter$named;
}
;
html623afa$LevelDom$Dart.wrapFileWriterCallback$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$FileWriterCallbackWrappingImplementation$Dart.FileWriterCallbackWrappingImplementation$_wrap$40$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapFileWriterCallback$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapFileWriterCallback$member(raw);
}
;
html623afa$LevelDom$Dart.wrapFileWriterCallback$getter = function wrapFileWriterCallback$getter(){
  return html623afa$LevelDom$Dart.wrapFileWriterCallback$named;
}
;
html623afa$LevelDom$Dart.wrapFileWriterSync$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$FileWriterSyncWrappingImplementation$Dart.FileWriterSyncWrappingImplementation$_wrap$36$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapFileWriterSync$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapFileWriterSync$member(raw);
}
;
html623afa$LevelDom$Dart.wrapFileWriterSync$getter = function wrapFileWriterSync$getter(){
  return html623afa$LevelDom$Dart.wrapFileWriterSync$named;
}
;
html623afa$LevelDom$Dart.wrapFlags$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$FlagsWrappingImplementation$Dart.FlagsWrappingImplementation$_wrap$27$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapFlags$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapFlags$member(raw);
}
;
html623afa$LevelDom$Dart.wrapFlags$getter = function wrapFlags$getter(){
  return html623afa$LevelDom$Dart.wrapFlags$named;
}
;
html623afa$LevelDom$Dart.wrapFloat32Array$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$Float32ArrayWrappingImplementation$Dart.Float32ArrayWrappingImplementation$_wrap$34$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapFloat32Array$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapFloat32Array$member(raw);
}
;
html623afa$LevelDom$Dart.wrapFloat32Array$getter = function wrapFloat32Array$getter(){
  return html623afa$LevelDom$Dart.wrapFloat32Array$named;
}
;
html623afa$LevelDom$Dart.wrapFloat64Array$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$Float64ArrayWrappingImplementation$Dart.Float64ArrayWrappingImplementation$_wrap$34$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapFloat64Array$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapFloat64Array$member(raw);
}
;
html623afa$LevelDom$Dart.wrapFloat64Array$getter = function wrapFloat64Array$getter(){
  return html623afa$LevelDom$Dart.wrapFloat64Array$named;
}
;
html623afa$LevelDom$Dart.wrapFontElement$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$FontElementWrappingImplementation$Dart.FontElementWrappingImplementation$_wrap$33$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapFontElement$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapFontElement$member(raw);
}
;
html623afa$LevelDom$Dart.wrapFontElement$getter = function wrapFontElement$getter(){
  return html623afa$LevelDom$Dart.wrapFontElement$named;
}
;
html623afa$LevelDom$Dart.wrapFormElement$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$FormElementWrappingImplementation$Dart.FormElementWrappingImplementation$_wrap$33$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapFormElement$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapFormElement$member(raw);
}
;
html623afa$LevelDom$Dart.wrapFormElement$getter = function wrapFormElement$getter(){
  return html623afa$LevelDom$Dart.wrapFormElement$named;
}
;
html623afa$LevelDom$Dart.wrapGeolocation$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$GeolocationWrappingImplementation$Dart.GeolocationWrappingImplementation$_wrap$33$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapGeolocation$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapGeolocation$member(raw);
}
;
html623afa$LevelDom$Dart.wrapGeolocation$getter = function wrapGeolocation$getter(){
  return html623afa$LevelDom$Dart.wrapGeolocation$named;
}
;
html623afa$LevelDom$Dart.wrapGeoposition$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$GeopositionWrappingImplementation$Dart.GeopositionWrappingImplementation$_wrap$33$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapGeoposition$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapGeoposition$member(raw);
}
;
html623afa$LevelDom$Dart.wrapGeoposition$getter = function wrapGeoposition$getter(){
  return html623afa$LevelDom$Dart.wrapGeoposition$named;
}
;
html623afa$LevelDom$Dart.wrapHRElement$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$HRElementWrappingImplementation$Dart.HRElementWrappingImplementation$_wrap$31$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapHRElement$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapHRElement$member(raw);
}
;
html623afa$LevelDom$Dart.wrapHRElement$getter = function wrapHRElement$getter(){
  return html623afa$LevelDom$Dart.wrapHRElement$named;
}
;
html623afa$LevelDom$Dart.wrapHTMLAllCollection$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$HTMLAllCollectionWrappingImplementation$Dart.HTMLAllCollectionWrappingImplementation$_wrap$39$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapHTMLAllCollection$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapHTMLAllCollection$member(raw);
}
;
html623afa$LevelDom$Dart.wrapHTMLAllCollection$getter = function wrapHTMLAllCollection$getter(){
  return html623afa$LevelDom$Dart.wrapHTMLAllCollection$named;
}
;
html623afa$LevelDom$Dart.wrapHashChangeEvent$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$HashChangeEventWrappingImplementation$Dart.HashChangeEventWrappingImplementation$_wrap$37$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapHashChangeEvent$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapHashChangeEvent$member(raw);
}
;
html623afa$LevelDom$Dart.wrapHashChangeEvent$getter = function wrapHashChangeEvent$getter(){
  return html623afa$LevelDom$Dart.wrapHashChangeEvent$named;
}
;
html623afa$LevelDom$Dart.wrapHeadElement$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$HeadElementWrappingImplementation$Dart.HeadElementWrappingImplementation$_wrap$33$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapHeadElement$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapHeadElement$member(raw);
}
;
html623afa$LevelDom$Dart.wrapHeadElement$getter = function wrapHeadElement$getter(){
  return html623afa$LevelDom$Dart.wrapHeadElement$named;
}
;
html623afa$LevelDom$Dart.wrapHeadingElement$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$HeadingElementWrappingImplementation$Dart.HeadingElementWrappingImplementation$_wrap$36$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapHeadingElement$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapHeadingElement$member(raw);
}
;
html623afa$LevelDom$Dart.wrapHeadingElement$getter = function wrapHeadingElement$getter(){
  return html623afa$LevelDom$Dart.wrapHeadingElement$named;
}
;
html623afa$LevelDom$Dart.wrapHistory$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$HistoryWrappingImplementation$Dart.HistoryWrappingImplementation$_wrap$29$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapHistory$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapHistory$member(raw);
}
;
html623afa$LevelDom$Dart.wrapHistory$getter = function wrapHistory$getter(){
  return html623afa$LevelDom$Dart.wrapHistory$named;
}
;
html623afa$LevelDom$Dart.wrapIDBAny$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$IDBAnyWrappingImplementation$Dart.IDBAnyWrappingImplementation$_wrap$28$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapIDBAny$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapIDBAny$member(raw);
}
;
html623afa$LevelDom$Dart.wrapIDBAny$getter = function wrapIDBAny$getter(){
  return html623afa$LevelDom$Dart.wrapIDBAny$named;
}
;
html623afa$LevelDom$Dart.wrapIDBCursor$member = function(raw){
  if (raw == null) {
    return $Dart$Null;
  }
  if (raw.dartObjectLocalStorage$getter() != null) {
    return raw.dartObjectLocalStorage$getter();
  }
  switch (raw.typeName$getter()) {
    case 'IDBCursor':
      return html623afa$IDBCursorWrappingImplementation$Dart.IDBCursorWrappingImplementation$_wrap$31$html623afa$$Factory_(raw);
    case 'IDBCursorWithValue':
      return html623afa$IDBCursorWithValueWrappingImplementation$Dart.IDBCursorWithValueWrappingImplementation$_wrap$40$html623afa$$Factory_(raw);
    default:{
        $Dart$ThrowException(UnsupportedOperationException$Dart.UnsupportedOperationException$$Factory(ADD$operator('Unknown type:', raw.toString$named(0, $noargs))));
      }

  }
}
;
html623afa$LevelDom$Dart.wrapIDBCursor$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapIDBCursor$member(raw);
}
;
html623afa$LevelDom$Dart.wrapIDBCursor$getter = function wrapIDBCursor$getter(){
  return html623afa$LevelDom$Dart.wrapIDBCursor$named;
}
;
html623afa$LevelDom$Dart.wrapIDBCursorWithValue$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$IDBCursorWithValueWrappingImplementation$Dart.IDBCursorWithValueWrappingImplementation$_wrap$40$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapIDBCursorWithValue$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapIDBCursorWithValue$member(raw);
}
;
html623afa$LevelDom$Dart.wrapIDBCursorWithValue$getter = function wrapIDBCursorWithValue$getter(){
  return html623afa$LevelDom$Dart.wrapIDBCursorWithValue$named;
}
;
html623afa$LevelDom$Dart.wrapIDBDatabase$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$IDBDatabaseWrappingImplementation$Dart.IDBDatabaseWrappingImplementation$_wrap$33$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapIDBDatabase$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapIDBDatabase$member(raw);
}
;
html623afa$LevelDom$Dart.wrapIDBDatabase$getter = function wrapIDBDatabase$getter(){
  return html623afa$LevelDom$Dart.wrapIDBDatabase$named;
}
;
html623afa$LevelDom$Dart.wrapIDBDatabaseError$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$IDBDatabaseErrorWrappingImplementation$Dart.IDBDatabaseErrorWrappingImplementation$_wrap$38$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapIDBDatabaseError$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapIDBDatabaseError$member(raw);
}
;
html623afa$LevelDom$Dart.wrapIDBDatabaseError$getter = function wrapIDBDatabaseError$getter(){
  return html623afa$LevelDom$Dart.wrapIDBDatabaseError$named;
}
;
html623afa$LevelDom$Dart.wrapIDBDatabaseException$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$IDBDatabaseExceptionWrappingImplementation$Dart.IDBDatabaseExceptionWrappingImplementation$_wrap$42$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapIDBDatabaseException$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapIDBDatabaseException$member(raw);
}
;
html623afa$LevelDom$Dart.wrapIDBDatabaseException$getter = function wrapIDBDatabaseException$getter(){
  return html623afa$LevelDom$Dart.wrapIDBDatabaseException$named;
}
;
html623afa$LevelDom$Dart.wrapIDBFactory$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$IDBFactoryWrappingImplementation$Dart.IDBFactoryWrappingImplementation$_wrap$32$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapIDBFactory$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapIDBFactory$member(raw);
}
;
html623afa$LevelDom$Dart.wrapIDBFactory$getter = function wrapIDBFactory$getter(){
  return html623afa$LevelDom$Dart.wrapIDBFactory$named;
}
;
html623afa$LevelDom$Dart.wrapIDBIndex$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$IDBIndexWrappingImplementation$Dart.IDBIndexWrappingImplementation$_wrap$30$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapIDBIndex$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapIDBIndex$member(raw);
}
;
html623afa$LevelDom$Dart.wrapIDBIndex$getter = function wrapIDBIndex$getter(){
  return html623afa$LevelDom$Dart.wrapIDBIndex$named;
}
;
html623afa$LevelDom$Dart.wrapIDBKey$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$IDBKeyWrappingImplementation$Dart.IDBKeyWrappingImplementation$_wrap$28$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapIDBKey$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapIDBKey$member(raw);
}
;
html623afa$LevelDom$Dart.wrapIDBKey$getter = function wrapIDBKey$getter(){
  return html623afa$LevelDom$Dart.wrapIDBKey$named;
}
;
html623afa$LevelDom$Dart.wrapIDBKeyRange$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$IDBKeyRangeWrappingImplementation$Dart.IDBKeyRangeWrappingImplementation$_wrap$33$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapIDBKeyRange$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapIDBKeyRange$member(raw);
}
;
html623afa$LevelDom$Dart.wrapIDBKeyRange$getter = function wrapIDBKeyRange$getter(){
  return html623afa$LevelDom$Dart.wrapIDBKeyRange$named;
}
;
html623afa$LevelDom$Dart.wrapIDBObjectStore$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$IDBObjectStoreWrappingImplementation$Dart.IDBObjectStoreWrappingImplementation$_wrap$36$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapIDBObjectStore$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapIDBObjectStore$member(raw);
}
;
html623afa$LevelDom$Dart.wrapIDBObjectStore$getter = function wrapIDBObjectStore$getter(){
  return html623afa$LevelDom$Dart.wrapIDBObjectStore$named;
}
;
html623afa$LevelDom$Dart.wrapIDBRequest$member = function(raw){
  if (raw == null) {
    return $Dart$Null;
  }
  if (raw.dartObjectLocalStorage$getter() != null) {
    return raw.dartObjectLocalStorage$getter();
  }
  switch (raw.typeName$getter()) {
    case 'IDBRequest':
      return html623afa$IDBRequestWrappingImplementation$Dart.IDBRequestWrappingImplementation$_wrap$32$html623afa$$Factory_(raw);
    case 'IDBVersionChangeRequest':
      return html623afa$IDBVersionChangeRequestWrappingImplementation$Dart.IDBVersionChangeRequestWrappingImplementation$_wrap$45$html623afa$$Factory_(raw);
    default:{
        $Dart$ThrowException(UnsupportedOperationException$Dart.UnsupportedOperationException$$Factory(ADD$operator('Unknown type:', raw.toString$named(0, $noargs))));
      }

  }
}
;
html623afa$LevelDom$Dart.wrapIDBRequest$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapIDBRequest$member(raw);
}
;
html623afa$LevelDom$Dart.wrapIDBRequest$getter = function wrapIDBRequest$getter(){
  return html623afa$LevelDom$Dart.wrapIDBRequest$named;
}
;
html623afa$LevelDom$Dart.wrapIDBTransaction$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$IDBTransactionWrappingImplementation$Dart.IDBTransactionWrappingImplementation$_wrap$36$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapIDBTransaction$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapIDBTransaction$member(raw);
}
;
html623afa$LevelDom$Dart.wrapIDBTransaction$getter = function wrapIDBTransaction$getter(){
  return html623afa$LevelDom$Dart.wrapIDBTransaction$named;
}
;
html623afa$LevelDom$Dart.wrapIDBVersionChangeEvent$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$IDBVersionChangeEventWrappingImplementation$Dart.IDBVersionChangeEventWrappingImplementation$_wrap$43$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapIDBVersionChangeEvent$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapIDBVersionChangeEvent$member(raw);
}
;
html623afa$LevelDom$Dart.wrapIDBVersionChangeEvent$getter = function wrapIDBVersionChangeEvent$getter(){
  return html623afa$LevelDom$Dart.wrapIDBVersionChangeEvent$named;
}
;
html623afa$LevelDom$Dart.wrapIDBVersionChangeRequest$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$IDBVersionChangeRequestWrappingImplementation$Dart.IDBVersionChangeRequestWrappingImplementation$_wrap$45$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapIDBVersionChangeRequest$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapIDBVersionChangeRequest$member(raw);
}
;
html623afa$LevelDom$Dart.wrapIDBVersionChangeRequest$getter = function wrapIDBVersionChangeRequest$getter(){
  return html623afa$LevelDom$Dart.wrapIDBVersionChangeRequest$named;
}
;
html623afa$LevelDom$Dart.wrapIFrameElement$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$IFrameElementWrappingImplementation$Dart.IFrameElementWrappingImplementation$_wrap$35$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapIFrameElement$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapIFrameElement$member(raw);
}
;
html623afa$LevelDom$Dart.wrapIFrameElement$getter = function wrapIFrameElement$getter(){
  return html623afa$LevelDom$Dart.wrapIFrameElement$named;
}
;
html623afa$LevelDom$Dart.wrapImageData$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$ImageDataWrappingImplementation$Dart.ImageDataWrappingImplementation$_wrap$31$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapImageData$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapImageData$member(raw);
}
;
html623afa$LevelDom$Dart.wrapImageData$getter = function wrapImageData$getter(){
  return html623afa$LevelDom$Dart.wrapImageData$named;
}
;
html623afa$LevelDom$Dart.wrapImageElement$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$ImageElementWrappingImplementation$Dart.ImageElementWrappingImplementation$_wrap$34$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapImageElement$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapImageElement$member(raw);
}
;
html623afa$LevelDom$Dart.wrapImageElement$getter = function wrapImageElement$getter(){
  return html623afa$LevelDom$Dart.wrapImageElement$named;
}
;
html623afa$LevelDom$Dart.wrapInputElement$member = function(raw){
  if (raw == null) {
    return $Dart$Null;
  }
  if (raw.dartObjectLocalStorage$getter() != null) {
    return raw.dartObjectLocalStorage$getter();
  }
  switch (raw.typeName$getter()) {
    case 'HTMLInputElement':
      return html623afa$InputElementWrappingImplementation$Dart.InputElementWrappingImplementation$_wrap$34$html623afa$$Factory_(raw);
    default:{
        $Dart$ThrowException(UnsupportedOperationException$Dart.UnsupportedOperationException$$Factory(ADD$operator('Unknown type:', raw.toString$named(0, $noargs))));
      }

  }
}
;
html623afa$LevelDom$Dart.wrapInputElement$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapInputElement$member(raw);
}
;
html623afa$LevelDom$Dart.wrapInputElement$getter = function wrapInputElement$getter(){
  return html623afa$LevelDom$Dart.wrapInputElement$named;
}
;
html623afa$LevelDom$Dart.wrapInt16Array$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$Int16ArrayWrappingImplementation$Dart.Int16ArrayWrappingImplementation$_wrap$32$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapInt16Array$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapInt16Array$member(raw);
}
;
html623afa$LevelDom$Dart.wrapInt16Array$getter = function wrapInt16Array$getter(){
  return html623afa$LevelDom$Dart.wrapInt16Array$named;
}
;
html623afa$LevelDom$Dart.wrapInt32Array$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$Int32ArrayWrappingImplementation$Dart.Int32ArrayWrappingImplementation$_wrap$32$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapInt32Array$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapInt32Array$member(raw);
}
;
html623afa$LevelDom$Dart.wrapInt32Array$getter = function wrapInt32Array$getter(){
  return html623afa$LevelDom$Dart.wrapInt32Array$named;
}
;
html623afa$LevelDom$Dart.wrapInt8Array$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$Int8ArrayWrappingImplementation$Dart.Int8ArrayWrappingImplementation$_wrap$31$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapInt8Array$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapInt8Array$member(raw);
}
;
html623afa$LevelDom$Dart.wrapInt8Array$getter = function wrapInt8Array$getter(){
  return html623afa$LevelDom$Dart.wrapInt8Array$named;
}
;
html623afa$LevelDom$Dart.wrapKeyboardEvent$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$KeyboardEventWrappingImplementation$Dart.KeyboardEventWrappingImplementation$_wrap$35$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapKeyboardEvent$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapKeyboardEvent$member(raw);
}
;
html623afa$LevelDom$Dart.wrapKeyboardEvent$getter = function wrapKeyboardEvent$getter(){
  return html623afa$LevelDom$Dart.wrapKeyboardEvent$named;
}
;
html623afa$LevelDom$Dart.wrapKeygenElement$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$KeygenElementWrappingImplementation$Dart.KeygenElementWrappingImplementation$_wrap$35$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapKeygenElement$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapKeygenElement$member(raw);
}
;
html623afa$LevelDom$Dart.wrapKeygenElement$getter = function wrapKeygenElement$getter(){
  return html623afa$LevelDom$Dart.wrapKeygenElement$named;
}
;
html623afa$LevelDom$Dart.wrapLIElement$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$LIElementWrappingImplementation$Dart.LIElementWrappingImplementation$_wrap$31$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapLIElement$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapLIElement$member(raw);
}
;
html623afa$LevelDom$Dart.wrapLIElement$getter = function wrapLIElement$getter(){
  return html623afa$LevelDom$Dart.wrapLIElement$named;
}
;
html623afa$LevelDom$Dart.wrapLabelElement$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$LabelElementWrappingImplementation$Dart.LabelElementWrappingImplementation$_wrap$34$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapLabelElement$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapLabelElement$member(raw);
}
;
html623afa$LevelDom$Dart.wrapLabelElement$getter = function wrapLabelElement$getter(){
  return html623afa$LevelDom$Dart.wrapLabelElement$named;
}
;
html623afa$LevelDom$Dart.wrapLegendElement$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$LegendElementWrappingImplementation$Dart.LegendElementWrappingImplementation$_wrap$35$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapLegendElement$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapLegendElement$member(raw);
}
;
html623afa$LevelDom$Dart.wrapLegendElement$getter = function wrapLegendElement$getter(){
  return html623afa$LevelDom$Dart.wrapLegendElement$named;
}
;
html623afa$LevelDom$Dart.wrapLinkElement$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$LinkElementWrappingImplementation$Dart.LinkElementWrappingImplementation$_wrap$33$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapLinkElement$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapLinkElement$member(raw);
}
;
html623afa$LevelDom$Dart.wrapLinkElement$getter = function wrapLinkElement$getter(){
  return html623afa$LevelDom$Dart.wrapLinkElement$named;
}
;
html623afa$LevelDom$Dart.wrapLocalMediaStream$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$LocalMediaStreamWrappingImplementation$Dart.LocalMediaStreamWrappingImplementation$_wrap$38$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapLocalMediaStream$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapLocalMediaStream$member(raw);
}
;
html623afa$LevelDom$Dart.wrapLocalMediaStream$getter = function wrapLocalMediaStream$getter(){
  return html623afa$LevelDom$Dart.wrapLocalMediaStream$named;
}
;
html623afa$LevelDom$Dart.wrapLocation$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$LocationWrappingImplementation$Dart.LocationWrappingImplementation$_wrap$30$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapLocation$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapLocation$member(raw);
}
;
html623afa$LevelDom$Dart.wrapLocation$getter = function wrapLocation$getter(){
  return html623afa$LevelDom$Dart.wrapLocation$named;
}
;
html623afa$LevelDom$Dart.wrapLoseContext$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$LoseContextWrappingImplementation$Dart.LoseContextWrappingImplementation$_wrap$33$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapLoseContext$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapLoseContext$member(raw);
}
;
html623afa$LevelDom$Dart.wrapLoseContext$getter = function wrapLoseContext$getter(){
  return html623afa$LevelDom$Dart.wrapLoseContext$named;
}
;
html623afa$LevelDom$Dart.wrapMapElement$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$MapElementWrappingImplementation$Dart.MapElementWrappingImplementation$_wrap$32$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapMapElement$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapMapElement$member(raw);
}
;
html623afa$LevelDom$Dart.wrapMapElement$getter = function wrapMapElement$getter(){
  return html623afa$LevelDom$Dart.wrapMapElement$named;
}
;
html623afa$LevelDom$Dart.wrapMarqueeElement$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$MarqueeElementWrappingImplementation$Dart.MarqueeElementWrappingImplementation$_wrap$36$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapMarqueeElement$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapMarqueeElement$member(raw);
}
;
html623afa$LevelDom$Dart.wrapMarqueeElement$getter = function wrapMarqueeElement$getter(){
  return html623afa$LevelDom$Dart.wrapMarqueeElement$named;
}
;
html623afa$LevelDom$Dart.wrapMediaElement$member = function(raw){
  if (raw == null) {
    return $Dart$Null;
  }
  if (raw.dartObjectLocalStorage$getter() != null) {
    return raw.dartObjectLocalStorage$getter();
  }
  switch (raw.typeName$getter()) {
    case 'HTMLAudioElement':
      return html623afa$AudioElementWrappingImplementation$Dart.AudioElementWrappingImplementation$_wrap$34$html623afa$$Factory_(raw);
    case 'HTMLMediaElement':
      return html623afa$MediaElementWrappingImplementation$Dart.MediaElementWrappingImplementation$_wrap$34$html623afa$$Factory_(raw);
    case 'HTMLVideoElement':
      return html623afa$VideoElementWrappingImplementation$Dart.VideoElementWrappingImplementation$_wrap$34$html623afa$$Factory_(raw);
    default:{
        $Dart$ThrowException(UnsupportedOperationException$Dart.UnsupportedOperationException$$Factory(ADD$operator('Unknown type:', raw.toString$named(0, $noargs))));
      }

  }
}
;
html623afa$LevelDom$Dart.wrapMediaElement$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapMediaElement$member(raw);
}
;
html623afa$LevelDom$Dart.wrapMediaElement$getter = function wrapMediaElement$getter(){
  return html623afa$LevelDom$Dart.wrapMediaElement$named;
}
;
html623afa$LevelDom$Dart.wrapMediaError$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$MediaErrorWrappingImplementation$Dart.MediaErrorWrappingImplementation$_wrap$32$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapMediaError$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapMediaError$member(raw);
}
;
html623afa$LevelDom$Dart.wrapMediaError$getter = function wrapMediaError$getter(){
  return html623afa$LevelDom$Dart.wrapMediaError$named;
}
;
html623afa$LevelDom$Dart.wrapMediaList$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$MediaListWrappingImplementation$Dart.MediaListWrappingImplementation$_wrap$31$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapMediaList$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapMediaList$member(raw);
}
;
html623afa$LevelDom$Dart.wrapMediaList$getter = function wrapMediaList$getter(){
  return html623afa$LevelDom$Dart.wrapMediaList$named;
}
;
html623afa$LevelDom$Dart.wrapMediaQueryList$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$MediaQueryListWrappingImplementation$Dart.MediaQueryListWrappingImplementation$_wrap$36$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapMediaQueryList$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapMediaQueryList$member(raw);
}
;
html623afa$LevelDom$Dart.wrapMediaQueryList$getter = function wrapMediaQueryList$getter(){
  return html623afa$LevelDom$Dart.wrapMediaQueryList$named;
}
;
html623afa$LevelDom$Dart.wrapMediaQueryListListener$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$MediaQueryListListenerWrappingImplementation$Dart.MediaQueryListListenerWrappingImplementation$_wrap$44$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapMediaQueryListListener$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapMediaQueryListListener$member(raw);
}
;
html623afa$LevelDom$Dart.wrapMediaQueryListListener$getter = function wrapMediaQueryListListener$getter(){
  return html623afa$LevelDom$Dart.wrapMediaQueryListListener$named;
}
;
html623afa$LevelDom$Dart.wrapMediaStream$member = function(raw){
  if (raw == null) {
    return $Dart$Null;
  }
  if (raw.dartObjectLocalStorage$getter() != null) {
    return raw.dartObjectLocalStorage$getter();
  }
  switch (raw.typeName$getter()) {
    case 'LocalMediaStream':
      return html623afa$LocalMediaStreamWrappingImplementation$Dart.LocalMediaStreamWrappingImplementation$_wrap$38$html623afa$$Factory_(raw);
    case 'MediaStream':
      return html623afa$MediaStreamWrappingImplementation$Dart.MediaStreamWrappingImplementation$_wrap$33$html623afa$$Factory_(raw);
    default:{
        $Dart$ThrowException(UnsupportedOperationException$Dart.UnsupportedOperationException$$Factory(ADD$operator('Unknown type:', raw.toString$named(0, $noargs))));
      }

  }
}
;
html623afa$LevelDom$Dart.wrapMediaStream$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapMediaStream$member(raw);
}
;
html623afa$LevelDom$Dart.wrapMediaStream$getter = function wrapMediaStream$getter(){
  return html623afa$LevelDom$Dart.wrapMediaStream$named;
}
;
html623afa$LevelDom$Dart.wrapMediaStreamList$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$MediaStreamListWrappingImplementation$Dart.MediaStreamListWrappingImplementation$_wrap$37$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapMediaStreamList$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapMediaStreamList$member(raw);
}
;
html623afa$LevelDom$Dart.wrapMediaStreamList$getter = function wrapMediaStreamList$getter(){
  return html623afa$LevelDom$Dart.wrapMediaStreamList$named;
}
;
html623afa$LevelDom$Dart.wrapMediaStreamTrack$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$MediaStreamTrackWrappingImplementation$Dart.MediaStreamTrackWrappingImplementation$_wrap$38$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapMediaStreamTrack$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapMediaStreamTrack$member(raw);
}
;
html623afa$LevelDom$Dart.wrapMediaStreamTrack$getter = function wrapMediaStreamTrack$getter(){
  return html623afa$LevelDom$Dart.wrapMediaStreamTrack$named;
}
;
html623afa$LevelDom$Dart.wrapMediaStreamTrackList$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$MediaStreamTrackListWrappingImplementation$Dart.MediaStreamTrackListWrappingImplementation$_wrap$42$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapMediaStreamTrackList$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapMediaStreamTrackList$member(raw);
}
;
html623afa$LevelDom$Dart.wrapMediaStreamTrackList$getter = function wrapMediaStreamTrackList$getter(){
  return html623afa$LevelDom$Dart.wrapMediaStreamTrackList$named;
}
;
html623afa$LevelDom$Dart.wrapMenuElement$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$MenuElementWrappingImplementation$Dart.MenuElementWrappingImplementation$_wrap$33$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapMenuElement$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapMenuElement$member(raw);
}
;
html623afa$LevelDom$Dart.wrapMenuElement$getter = function wrapMenuElement$getter(){
  return html623afa$LevelDom$Dart.wrapMenuElement$named;
}
;
html623afa$LevelDom$Dart.wrapMessageChannel$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$MessageChannelWrappingImplementation$Dart.MessageChannelWrappingImplementation$_wrap$36$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapMessageChannel$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapMessageChannel$member(raw);
}
;
html623afa$LevelDom$Dart.wrapMessageChannel$getter = function wrapMessageChannel$getter(){
  return html623afa$LevelDom$Dart.wrapMessageChannel$named;
}
;
html623afa$LevelDom$Dart.wrapMessageEvent$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$MessageEventWrappingImplementation$Dart.MessageEventWrappingImplementation$_wrap$34$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapMessageEvent$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapMessageEvent$member(raw);
}
;
html623afa$LevelDom$Dart.wrapMessageEvent$getter = function wrapMessageEvent$getter(){
  return html623afa$LevelDom$Dart.wrapMessageEvent$named;
}
;
html623afa$LevelDom$Dart.wrapMessagePort$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$MessagePortWrappingImplementation$Dart.MessagePortWrappingImplementation$_wrap$33$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapMessagePort$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapMessagePort$member(raw);
}
;
html623afa$LevelDom$Dart.wrapMessagePort$getter = function wrapMessagePort$getter(){
  return html623afa$LevelDom$Dart.wrapMessagePort$named;
}
;
html623afa$LevelDom$Dart.wrapMetaElement$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$MetaElementWrappingImplementation$Dart.MetaElementWrappingImplementation$_wrap$33$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapMetaElement$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapMetaElement$member(raw);
}
;
html623afa$LevelDom$Dart.wrapMetaElement$getter = function wrapMetaElement$getter(){
  return html623afa$LevelDom$Dart.wrapMetaElement$named;
}
;
html623afa$LevelDom$Dart.wrapMetadata$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$MetadataWrappingImplementation$Dart.MetadataWrappingImplementation$_wrap$30$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapMetadata$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapMetadata$member(raw);
}
;
html623afa$LevelDom$Dart.wrapMetadata$getter = function wrapMetadata$getter(){
  return html623afa$LevelDom$Dart.wrapMetadata$named;
}
;
html623afa$LevelDom$Dart.wrapMetadataCallback$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$MetadataCallbackWrappingImplementation$Dart.MetadataCallbackWrappingImplementation$_wrap$38$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapMetadataCallback$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapMetadataCallback$member(raw);
}
;
html623afa$LevelDom$Dart.wrapMetadataCallback$getter = function wrapMetadataCallback$getter(){
  return html623afa$LevelDom$Dart.wrapMetadataCallback$named;
}
;
html623afa$LevelDom$Dart.wrapMeterElement$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$MeterElementWrappingImplementation$Dart.MeterElementWrappingImplementation$_wrap$34$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapMeterElement$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapMeterElement$member(raw);
}
;
html623afa$LevelDom$Dart.wrapMeterElement$getter = function wrapMeterElement$getter(){
  return html623afa$LevelDom$Dart.wrapMeterElement$named;
}
;
html623afa$LevelDom$Dart.wrapModElement$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$ModElementWrappingImplementation$Dart.ModElementWrappingImplementation$_wrap$32$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapModElement$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapModElement$member(raw);
}
;
html623afa$LevelDom$Dart.wrapModElement$getter = function wrapModElement$getter(){
  return html623afa$LevelDom$Dart.wrapModElement$named;
}
;
html623afa$LevelDom$Dart.wrapMouseEvent$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$MouseEventWrappingImplementation$Dart.MouseEventWrappingImplementation$_wrap$32$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapMouseEvent$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapMouseEvent$member(raw);
}
;
html623afa$LevelDom$Dart.wrapMouseEvent$getter = function wrapMouseEvent$getter(){
  return html623afa$LevelDom$Dart.wrapMouseEvent$named;
}
;
html623afa$LevelDom$Dart.wrapMutationEvent$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$MutationEventWrappingImplementation$Dart.MutationEventWrappingImplementation$_wrap$35$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapMutationEvent$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapMutationEvent$member(raw);
}
;
html623afa$LevelDom$Dart.wrapMutationEvent$getter = function wrapMutationEvent$getter(){
  return html623afa$LevelDom$Dart.wrapMutationEvent$named;
}
;
html623afa$LevelDom$Dart.wrapMutationRecord$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$MutationRecordWrappingImplementation$Dart.MutationRecordWrappingImplementation$_wrap$36$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapMutationRecord$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapMutationRecord$member(raw);
}
;
html623afa$LevelDom$Dart.wrapMutationRecord$getter = function wrapMutationRecord$getter(){
  return html623afa$LevelDom$Dart.wrapMutationRecord$named;
}
;
html623afa$LevelDom$Dart.wrapNavigator$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$NavigatorWrappingImplementation$Dart.NavigatorWrappingImplementation$_wrap$31$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapNavigator$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapNavigator$member(raw);
}
;
html623afa$LevelDom$Dart.wrapNavigator$getter = function wrapNavigator$getter(){
  return html623afa$LevelDom$Dart.wrapNavigator$named;
}
;
html623afa$LevelDom$Dart.wrapNavigatorUserMediaError$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$NavigatorUserMediaErrorWrappingImplementation$Dart.NavigatorUserMediaErrorWrappingImplementation$_wrap$45$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapNavigatorUserMediaError$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapNavigatorUserMediaError$member(raw);
}
;
html623afa$LevelDom$Dart.wrapNavigatorUserMediaError$getter = function wrapNavigatorUserMediaError$getter(){
  return html623afa$LevelDom$Dart.wrapNavigatorUserMediaError$named;
}
;
html623afa$LevelDom$Dart.wrapNavigatorUserMediaErrorCallback$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$NavigatorUserMediaErrorCallbackWrappingImplementation$Dart.NavigatorUserMediaErrorCallbackWrappingImplementation$_wrap$53$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapNavigatorUserMediaErrorCallback$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapNavigatorUserMediaErrorCallback$member(raw);
}
;
html623afa$LevelDom$Dart.wrapNavigatorUserMediaErrorCallback$getter = function wrapNavigatorUserMediaErrorCallback$getter(){
  return html623afa$LevelDom$Dart.wrapNavigatorUserMediaErrorCallback$named;
}
;
html623afa$LevelDom$Dart.wrapNavigatorUserMediaSuccessCallback$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$NavigatorUserMediaSuccessCallbackWrappingImplementation$Dart.NavigatorUserMediaSuccessCallbackWrappingImplementation$_wrap$55$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapNavigatorUserMediaSuccessCallback$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapNavigatorUserMediaSuccessCallback$member(raw);
}
;
html623afa$LevelDom$Dart.wrapNavigatorUserMediaSuccessCallback$getter = function wrapNavigatorUserMediaSuccessCallback$getter(){
  return html623afa$LevelDom$Dart.wrapNavigatorUserMediaSuccessCallback$named;
}
;
html623afa$LevelDom$Dart.wrapNode$member = function(raw){
  if (raw == null) {
    return $Dart$Null;
  }
  if (raw.dartObjectLocalStorage$getter() != null) {
    return raw.dartObjectLocalStorage$getter();
  }
  switch (raw.typeName$getter()) {
    case 'HTMLAnchorElement':
      return html623afa$AnchorElementWrappingImplementation$Dart.AnchorElementWrappingImplementation$_wrap$35$html623afa$$Factory_(raw);
    case 'HTMLAreaElement':
      return html623afa$AreaElementWrappingImplementation$Dart.AreaElementWrappingImplementation$_wrap$33$html623afa$$Factory_(raw);
    case 'HTMLAudioElement':
      return html623afa$AudioElementWrappingImplementation$Dart.AudioElementWrappingImplementation$_wrap$34$html623afa$$Factory_(raw);
    case 'HTMLBRElement':
      return html623afa$BRElementWrappingImplementation$Dart.BRElementWrappingImplementation$_wrap$31$html623afa$$Factory_(raw);
    case 'HTMLBaseElement':
      return html623afa$BaseElementWrappingImplementation$Dart.BaseElementWrappingImplementation$_wrap$33$html623afa$$Factory_(raw);
    case 'HTMLBodyElement':
      return html623afa$BodyElementWrappingImplementation$Dart.BodyElementWrappingImplementation$_wrap$33$html623afa$$Factory_(raw);
    case 'HTMLButtonElement':
      return html623afa$ButtonElementWrappingImplementation$Dart.ButtonElementWrappingImplementation$_wrap$35$html623afa$$Factory_(raw);
    case 'CDATASection':
      return html623afa$CDATASectionWrappingImplementation$Dart.CDATASectionWrappingImplementation$_wrap$34$html623afa$$Factory_(raw);
    case 'HTMLCanvasElement':
      return html623afa$CanvasElementWrappingImplementation$Dart.CanvasElementWrappingImplementation$_wrap$35$html623afa$$Factory_(raw);
    case 'CharacterData':
      return html623afa$CharacterDataWrappingImplementation$Dart.CharacterDataWrappingImplementation$_wrap$35$html623afa$$Factory_(raw);
    case 'Comment':
      return html623afa$CommentWrappingImplementation$Dart.CommentWrappingImplementation$_wrap$29$html623afa$$Factory_(raw);
    case 'HTMLDListElement':
      return html623afa$DListElementWrappingImplementation$Dart.DListElementWrappingImplementation$_wrap$34$html623afa$$Factory_(raw);
    case 'HTMLDataListElement':
      return html623afa$DataListElementWrappingImplementation$Dart.DataListElementWrappingImplementation$_wrap$37$html623afa$$Factory_(raw);
    case 'HTMLDetailsElement':
      return html623afa$DetailsElementWrappingImplementation$Dart.DetailsElementWrappingImplementation$_wrap$36$html623afa$$Factory_(raw);
    case 'HTMLDivElement':
      return html623afa$DivElementWrappingImplementation$Dart.DivElementWrappingImplementation$_wrap$32$html623afa$$Factory_(raw);
    case 'HTMLDocument':
      return html623afa$DocumentWrappingImplementation$Dart.DocumentWrappingImplementation$_wrap$30$html623afa$$Factory_(raw, raw.documentElement$getter());
    case 'DocumentFragment':
      return html623afa$DocumentFragmentWrappingImplementation$Dart.DocumentFragmentWrappingImplementation$_wrap$38$html623afa$$Factory_(raw);
    case 'HTMLElement':
      return html623afa$ElementWrappingImplementation$Dart.ElementWrappingImplementation$_wrap$29$html623afa$$Factory_(raw);
    case 'HTMLEmbedElement':
      return html623afa$EmbedElementWrappingImplementation$Dart.EmbedElementWrappingImplementation$_wrap$34$html623afa$$Factory_(raw);
    case 'Entity':
      return html623afa$EntityWrappingImplementation$Dart.EntityWrappingImplementation$_wrap$28$html623afa$$Factory_(raw);
    case 'EntityReference':
      return html623afa$EntityReferenceWrappingImplementation$Dart.EntityReferenceWrappingImplementation$_wrap$37$html623afa$$Factory_(raw);
    case 'HTMLFieldSetElement':
      return html623afa$FieldSetElementWrappingImplementation$Dart.FieldSetElementWrappingImplementation$_wrap$37$html623afa$$Factory_(raw);
    case 'HTMLFontElement':
      return html623afa$FontElementWrappingImplementation$Dart.FontElementWrappingImplementation$_wrap$33$html623afa$$Factory_(raw);
    case 'HTMLFormElement':
      return html623afa$FormElementWrappingImplementation$Dart.FormElementWrappingImplementation$_wrap$33$html623afa$$Factory_(raw);
    case 'HTMLHRElement':
      return html623afa$HRElementWrappingImplementation$Dart.HRElementWrappingImplementation$_wrap$31$html623afa$$Factory_(raw);
    case 'HTMLHeadElement':
      return html623afa$HeadElementWrappingImplementation$Dart.HeadElementWrappingImplementation$_wrap$33$html623afa$$Factory_(raw);
    case 'HTMLHeadingElement':
      return html623afa$HeadingElementWrappingImplementation$Dart.HeadingElementWrappingImplementation$_wrap$36$html623afa$$Factory_(raw);
    case 'HTMLHtmlElement':
      return html623afa$DocumentWrappingImplementation$Dart.DocumentWrappingImplementation$_wrap$30$html623afa$$Factory_(raw.parentNode$getter(), raw);
    case 'HTMLIFrameElement':
      return html623afa$IFrameElementWrappingImplementation$Dart.IFrameElementWrappingImplementation$_wrap$35$html623afa$$Factory_(raw);
    case 'HTMLImageElement':
      return html623afa$ImageElementWrappingImplementation$Dart.ImageElementWrappingImplementation$_wrap$34$html623afa$$Factory_(raw);
    case 'HTMLInputElement':
      return html623afa$InputElementWrappingImplementation$Dart.InputElementWrappingImplementation$_wrap$34$html623afa$$Factory_(raw);
    case 'HTMLKeygenElement':
      return html623afa$KeygenElementWrappingImplementation$Dart.KeygenElementWrappingImplementation$_wrap$35$html623afa$$Factory_(raw);
    case 'HTMLLIElement':
      return html623afa$LIElementWrappingImplementation$Dart.LIElementWrappingImplementation$_wrap$31$html623afa$$Factory_(raw);
    case 'HTMLLabelElement':
      return html623afa$LabelElementWrappingImplementation$Dart.LabelElementWrappingImplementation$_wrap$34$html623afa$$Factory_(raw);
    case 'HTMLLegendElement':
      return html623afa$LegendElementWrappingImplementation$Dart.LegendElementWrappingImplementation$_wrap$35$html623afa$$Factory_(raw);
    case 'HTMLLinkElement':
      return html623afa$LinkElementWrappingImplementation$Dart.LinkElementWrappingImplementation$_wrap$33$html623afa$$Factory_(raw);
    case 'HTMLMapElement':
      return html623afa$MapElementWrappingImplementation$Dart.MapElementWrappingImplementation$_wrap$32$html623afa$$Factory_(raw);
    case 'HTMLMarqueeElement':
      return html623afa$MarqueeElementWrappingImplementation$Dart.MarqueeElementWrappingImplementation$_wrap$36$html623afa$$Factory_(raw);
    case 'HTMLMediaElement':
      return html623afa$MediaElementWrappingImplementation$Dart.MediaElementWrappingImplementation$_wrap$34$html623afa$$Factory_(raw);
    case 'HTMLMenuElement':
      return html623afa$MenuElementWrappingImplementation$Dart.MenuElementWrappingImplementation$_wrap$33$html623afa$$Factory_(raw);
    case 'HTMLMetaElement':
      return html623afa$MetaElementWrappingImplementation$Dart.MetaElementWrappingImplementation$_wrap$33$html623afa$$Factory_(raw);
    case 'HTMLMeterElement':
      return html623afa$MeterElementWrappingImplementation$Dart.MeterElementWrappingImplementation$_wrap$34$html623afa$$Factory_(raw);
    case 'HTMLModElement':
      return html623afa$ModElementWrappingImplementation$Dart.ModElementWrappingImplementation$_wrap$32$html623afa$$Factory_(raw);
    case 'Node':
      return html623afa$NodeWrappingImplementation$Dart.NodeWrappingImplementation$_wrap$26$html623afa$$Factory_(raw);
    case 'Notation':
      return html623afa$NotationWrappingImplementation$Dart.NotationWrappingImplementation$_wrap$30$html623afa$$Factory_(raw);
    case 'HTMLOListElement':
      return html623afa$OListElementWrappingImplementation$Dart.OListElementWrappingImplementation$_wrap$34$html623afa$$Factory_(raw);
    case 'HTMLObjectElement':
      return html623afa$ObjectElementWrappingImplementation$Dart.ObjectElementWrappingImplementation$_wrap$35$html623afa$$Factory_(raw);
    case 'HTMLOptGroupElement':
      return html623afa$OptGroupElementWrappingImplementation$Dart.OptGroupElementWrappingImplementation$_wrap$37$html623afa$$Factory_(raw);
    case 'HTMLOptionElement':
      return html623afa$OptionElementWrappingImplementation$Dart.OptionElementWrappingImplementation$_wrap$35$html623afa$$Factory_(raw);
    case 'HTMLOutputElement':
      return html623afa$OutputElementWrappingImplementation$Dart.OutputElementWrappingImplementation$_wrap$35$html623afa$$Factory_(raw);
    case 'HTMLParagraphElement':
      return html623afa$ParagraphElementWrappingImplementation$Dart.ParagraphElementWrappingImplementation$_wrap$38$html623afa$$Factory_(raw);
    case 'HTMLParamElement':
      return html623afa$ParamElementWrappingImplementation$Dart.ParamElementWrappingImplementation$_wrap$34$html623afa$$Factory_(raw);
    case 'HTMLPreElement':
      return html623afa$PreElementWrappingImplementation$Dart.PreElementWrappingImplementation$_wrap$32$html623afa$$Factory_(raw);
    case 'ProcessingInstruction':
      return html623afa$ProcessingInstructionWrappingImplementation$Dart.ProcessingInstructionWrappingImplementation$_wrap$43$html623afa$$Factory_(raw);
    case 'HTMLProgressElement':
      return html623afa$ProgressElementWrappingImplementation$Dart.ProgressElementWrappingImplementation$_wrap$37$html623afa$$Factory_(raw);
    case 'HTMLQuoteElement':
      return html623afa$QuoteElementWrappingImplementation$Dart.QuoteElementWrappingImplementation$_wrap$34$html623afa$$Factory_(raw);
    case 'HTMLScriptElement':
      return html623afa$ScriptElementWrappingImplementation$Dart.ScriptElementWrappingImplementation$_wrap$35$html623afa$$Factory_(raw);
    case 'HTMLSelectElement':
      return html623afa$SelectElementWrappingImplementation$Dart.SelectElementWrappingImplementation$_wrap$35$html623afa$$Factory_(raw);
    case 'HTMLSourceElement':
      return html623afa$SourceElementWrappingImplementation$Dart.SourceElementWrappingImplementation$_wrap$35$html623afa$$Factory_(raw);
    case 'HTMLSpanElement':
      return html623afa$SpanElementWrappingImplementation$Dart.SpanElementWrappingImplementation$_wrap$33$html623afa$$Factory_(raw);
    case 'HTMLStyleElement':
      return html623afa$StyleElementWrappingImplementation$Dart.StyleElementWrappingImplementation$_wrap$34$html623afa$$Factory_(raw);
    case 'HTMLTableCaptionElement':
      return html623afa$TableCaptionElementWrappingImplementation$Dart.TableCaptionElementWrappingImplementation$_wrap$41$html623afa$$Factory_(raw);
    case 'HTMLTableCellElement':
      return html623afa$TableCellElementWrappingImplementation$Dart.TableCellElementWrappingImplementation$_wrap$38$html623afa$$Factory_(raw);
    case 'HTMLTableColElement':
      return html623afa$TableColElementWrappingImplementation$Dart.TableColElementWrappingImplementation$_wrap$37$html623afa$$Factory_(raw);
    case 'HTMLTableElement':
      return html623afa$TableElementWrappingImplementation$Dart.TableElementWrappingImplementation$_wrap$34$html623afa$$Factory_(raw);
    case 'HTMLTableRowElement':
      return html623afa$TableRowElementWrappingImplementation$Dart.TableRowElementWrappingImplementation$_wrap$37$html623afa$$Factory_(raw);
    case 'HTMLTableSectionElement':
      return html623afa$TableSectionElementWrappingImplementation$Dart.TableSectionElementWrappingImplementation$_wrap$41$html623afa$$Factory_(raw);
    case 'Text':
      return html623afa$TextWrappingImplementation$Dart.TextWrappingImplementation$_wrap$26$html623afa$$Factory_(raw);
    case 'HTMLTextAreaElement':
      return html623afa$TextAreaElementWrappingImplementation$Dart.TextAreaElementWrappingImplementation$_wrap$37$html623afa$$Factory_(raw);
    case 'HTMLTitleElement':
      return html623afa$TitleElementWrappingImplementation$Dart.TitleElementWrappingImplementation$_wrap$34$html623afa$$Factory_(raw);
    case 'HTMLTrackElement':
      return html623afa$TrackElementWrappingImplementation$Dart.TrackElementWrappingImplementation$_wrap$34$html623afa$$Factory_(raw);
    case 'HTMLUListElement':
      return html623afa$UListElementWrappingImplementation$Dart.UListElementWrappingImplementation$_wrap$34$html623afa$$Factory_(raw);
    case 'HTMLUnknownElement':
      return html623afa$UnknownElementWrappingImplementation$Dart.UnknownElementWrappingImplementation$_wrap$36$html623afa$$Factory_(raw);
    case 'HTMLVideoElement':
      return html623afa$VideoElementWrappingImplementation$Dart.VideoElementWrappingImplementation$_wrap$34$html623afa$$Factory_(raw);
    default:{
        $Dart$ThrowException(UnsupportedOperationException$Dart.UnsupportedOperationException$$Factory(ADD$operator('Unknown type:', raw.toString$named(0, $noargs))));
      }

  }
}
;
html623afa$LevelDom$Dart.wrapNode$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapNode$member(raw);
}
;
html623afa$LevelDom$Dart.wrapNode$getter = function wrapNode$getter(){
  return html623afa$LevelDom$Dart.wrapNode$named;
}
;
html623afa$LevelDom$Dart.wrapNotation$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$NotationWrappingImplementation$Dart.NotationWrappingImplementation$_wrap$30$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapNotation$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapNotation$member(raw);
}
;
html623afa$LevelDom$Dart.wrapNotation$getter = function wrapNotation$getter(){
  return html623afa$LevelDom$Dart.wrapNotation$named;
}
;
html623afa$LevelDom$Dart.wrapNotification$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$NotificationWrappingImplementation$Dart.NotificationWrappingImplementation$_wrap$34$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapNotification$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapNotification$member(raw);
}
;
html623afa$LevelDom$Dart.wrapNotification$getter = function wrapNotification$getter(){
  return html623afa$LevelDom$Dart.wrapNotification$named;
}
;
html623afa$LevelDom$Dart.wrapNotificationCenter$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$NotificationCenterWrappingImplementation$Dart.NotificationCenterWrappingImplementation$_wrap$40$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapNotificationCenter$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapNotificationCenter$member(raw);
}
;
html623afa$LevelDom$Dart.wrapNotificationCenter$getter = function wrapNotificationCenter$getter(){
  return html623afa$LevelDom$Dart.wrapNotificationCenter$named;
}
;
html623afa$LevelDom$Dart.wrapOESStandardDerivatives$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$OESStandardDerivativesWrappingImplementation$Dart.OESStandardDerivativesWrappingImplementation$_wrap$44$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapOESStandardDerivatives$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapOESStandardDerivatives$member(raw);
}
;
html623afa$LevelDom$Dart.wrapOESStandardDerivatives$getter = function wrapOESStandardDerivatives$getter(){
  return html623afa$LevelDom$Dart.wrapOESStandardDerivatives$named;
}
;
html623afa$LevelDom$Dart.wrapOESTextureFloat$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$OESTextureFloatWrappingImplementation$Dart.OESTextureFloatWrappingImplementation$_wrap$37$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapOESTextureFloat$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapOESTextureFloat$member(raw);
}
;
html623afa$LevelDom$Dart.wrapOESTextureFloat$getter = function wrapOESTextureFloat$getter(){
  return html623afa$LevelDom$Dart.wrapOESTextureFloat$named;
}
;
html623afa$LevelDom$Dart.wrapOESVertexArrayObject$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$OESVertexArrayObjectWrappingImplementation$Dart.OESVertexArrayObjectWrappingImplementation$_wrap$42$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapOESVertexArrayObject$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapOESVertexArrayObject$member(raw);
}
;
html623afa$LevelDom$Dart.wrapOESVertexArrayObject$getter = function wrapOESVertexArrayObject$getter(){
  return html623afa$LevelDom$Dart.wrapOESVertexArrayObject$named;
}
;
html623afa$LevelDom$Dart.wrapOListElement$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$OListElementWrappingImplementation$Dart.OListElementWrappingImplementation$_wrap$34$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapOListElement$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapOListElement$member(raw);
}
;
html623afa$LevelDom$Dart.wrapOListElement$getter = function wrapOListElement$getter(){
  return html623afa$LevelDom$Dart.wrapOListElement$named;
}
;
html623afa$LevelDom$Dart.wrapObjectElement$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$ObjectElementWrappingImplementation$Dart.ObjectElementWrappingImplementation$_wrap$35$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapObjectElement$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapObjectElement$member(raw);
}
;
html623afa$LevelDom$Dart.wrapObjectElement$getter = function wrapObjectElement$getter(){
  return html623afa$LevelDom$Dart.wrapObjectElement$named;
}
;
html623afa$LevelDom$Dart.wrapOperationNotAllowedException$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$OperationNotAllowedExceptionWrappingImplementation$Dart.OperationNotAllowedExceptionWrappingImplementation$_wrap$50$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapOperationNotAllowedException$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapOperationNotAllowedException$member(raw);
}
;
html623afa$LevelDom$Dart.wrapOperationNotAllowedException$getter = function wrapOperationNotAllowedException$getter(){
  return html623afa$LevelDom$Dart.wrapOperationNotAllowedException$named;
}
;
html623afa$LevelDom$Dart.wrapOptGroupElement$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$OptGroupElementWrappingImplementation$Dart.OptGroupElementWrappingImplementation$_wrap$37$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapOptGroupElement$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapOptGroupElement$member(raw);
}
;
html623afa$LevelDom$Dart.wrapOptGroupElement$getter = function wrapOptGroupElement$getter(){
  return html623afa$LevelDom$Dart.wrapOptGroupElement$named;
}
;
html623afa$LevelDom$Dart.wrapOptionElement$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$OptionElementWrappingImplementation$Dart.OptionElementWrappingImplementation$_wrap$35$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapOptionElement$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapOptionElement$member(raw);
}
;
html623afa$LevelDom$Dart.wrapOptionElement$getter = function wrapOptionElement$getter(){
  return html623afa$LevelDom$Dart.wrapOptionElement$named;
}
;
html623afa$LevelDom$Dart.wrapOutputElement$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$OutputElementWrappingImplementation$Dart.OutputElementWrappingImplementation$_wrap$35$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapOutputElement$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapOutputElement$member(raw);
}
;
html623afa$LevelDom$Dart.wrapOutputElement$getter = function wrapOutputElement$getter(){
  return html623afa$LevelDom$Dart.wrapOutputElement$named;
}
;
html623afa$LevelDom$Dart.wrapOverflowEvent$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$OverflowEventWrappingImplementation$Dart.OverflowEventWrappingImplementation$_wrap$35$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapOverflowEvent$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapOverflowEvent$member(raw);
}
;
html623afa$LevelDom$Dart.wrapOverflowEvent$getter = function wrapOverflowEvent$getter(){
  return html623afa$LevelDom$Dart.wrapOverflowEvent$named;
}
;
html623afa$LevelDom$Dart.wrapPageTransitionEvent$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$PageTransitionEventWrappingImplementation$Dart.PageTransitionEventWrappingImplementation$_wrap$41$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapPageTransitionEvent$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapPageTransitionEvent$member(raw);
}
;
html623afa$LevelDom$Dart.wrapPageTransitionEvent$getter = function wrapPageTransitionEvent$getter(){
  return html623afa$LevelDom$Dart.wrapPageTransitionEvent$named;
}
;
html623afa$LevelDom$Dart.wrapParagraphElement$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$ParagraphElementWrappingImplementation$Dart.ParagraphElementWrappingImplementation$_wrap$38$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapParagraphElement$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapParagraphElement$member(raw);
}
;
html623afa$LevelDom$Dart.wrapParagraphElement$getter = function wrapParagraphElement$getter(){
  return html623afa$LevelDom$Dart.wrapParagraphElement$named;
}
;
html623afa$LevelDom$Dart.wrapParamElement$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$ParamElementWrappingImplementation$Dart.ParamElementWrappingImplementation$_wrap$34$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapParamElement$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapParamElement$member(raw);
}
;
html623afa$LevelDom$Dart.wrapParamElement$getter = function wrapParamElement$getter(){
  return html623afa$LevelDom$Dart.wrapParamElement$named;
}
;
html623afa$LevelDom$Dart.wrapPoint$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$PointWrappingImplementation$Dart.PointWrappingImplementation$_wrap$27$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapPoint$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapPoint$member(raw);
}
;
html623afa$LevelDom$Dart.wrapPoint$getter = function wrapPoint$getter(){
  return html623afa$LevelDom$Dart.wrapPoint$named;
}
;
html623afa$LevelDom$Dart.wrapPopStateEvent$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$PopStateEventWrappingImplementation$Dart.PopStateEventWrappingImplementation$_wrap$35$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapPopStateEvent$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapPopStateEvent$member(raw);
}
;
html623afa$LevelDom$Dart.wrapPopStateEvent$getter = function wrapPopStateEvent$getter(){
  return html623afa$LevelDom$Dart.wrapPopStateEvent$named;
}
;
html623afa$LevelDom$Dart.wrapPositionCallback$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$PositionCallbackWrappingImplementation$Dart.PositionCallbackWrappingImplementation$_wrap$38$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapPositionCallback$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapPositionCallback$member(raw);
}
;
html623afa$LevelDom$Dart.wrapPositionCallback$getter = function wrapPositionCallback$getter(){
  return html623afa$LevelDom$Dart.wrapPositionCallback$named;
}
;
html623afa$LevelDom$Dart.wrapPositionError$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$PositionErrorWrappingImplementation$Dart.PositionErrorWrappingImplementation$_wrap$35$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapPositionError$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapPositionError$member(raw);
}
;
html623afa$LevelDom$Dart.wrapPositionError$getter = function wrapPositionError$getter(){
  return html623afa$LevelDom$Dart.wrapPositionError$named;
}
;
html623afa$LevelDom$Dart.wrapPositionErrorCallback$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$PositionErrorCallbackWrappingImplementation$Dart.PositionErrorCallbackWrappingImplementation$_wrap$43$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapPositionErrorCallback$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapPositionErrorCallback$member(raw);
}
;
html623afa$LevelDom$Dart.wrapPositionErrorCallback$getter = function wrapPositionErrorCallback$getter(){
  return html623afa$LevelDom$Dart.wrapPositionErrorCallback$named;
}
;
html623afa$LevelDom$Dart.wrapPreElement$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$PreElementWrappingImplementation$Dart.PreElementWrappingImplementation$_wrap$32$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapPreElement$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapPreElement$member(raw);
}
;
html623afa$LevelDom$Dart.wrapPreElement$getter = function wrapPreElement$getter(){
  return html623afa$LevelDom$Dart.wrapPreElement$named;
}
;
html623afa$LevelDom$Dart.wrapProcessingInstruction$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$ProcessingInstructionWrappingImplementation$Dart.ProcessingInstructionWrappingImplementation$_wrap$43$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapProcessingInstruction$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapProcessingInstruction$member(raw);
}
;
html623afa$LevelDom$Dart.wrapProcessingInstruction$getter = function wrapProcessingInstruction$getter(){
  return html623afa$LevelDom$Dart.wrapProcessingInstruction$named;
}
;
html623afa$LevelDom$Dart.wrapProgressElement$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$ProgressElementWrappingImplementation$Dart.ProgressElementWrappingImplementation$_wrap$37$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapProgressElement$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapProgressElement$member(raw);
}
;
html623afa$LevelDom$Dart.wrapProgressElement$getter = function wrapProgressElement$getter(){
  return html623afa$LevelDom$Dart.wrapProgressElement$named;
}
;
html623afa$LevelDom$Dart.wrapProgressEvent$member = function(raw){
  if (raw == null) {
    return $Dart$Null;
  }
  if (raw.dartObjectLocalStorage$getter() != null) {
    return raw.dartObjectLocalStorage$getter();
  }
  switch (raw.typeName$getter()) {
    case 'ProgressEvent':
      return html623afa$ProgressEventWrappingImplementation$Dart.ProgressEventWrappingImplementation$_wrap$35$html623afa$$Factory_(raw);
    case 'XMLHttpRequestProgressEvent':
      return html623afa$XMLHttpRequestProgressEventWrappingImplementation$Dart.XMLHttpRequestProgressEventWrappingImplementation$_wrap$49$html623afa$$Factory_(raw);
    default:{
        $Dart$ThrowException(UnsupportedOperationException$Dart.UnsupportedOperationException$$Factory(ADD$operator('Unknown type:', raw.toString$named(0, $noargs))));
      }

  }
}
;
html623afa$LevelDom$Dart.wrapProgressEvent$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapProgressEvent$member(raw);
}
;
html623afa$LevelDom$Dart.wrapProgressEvent$getter = function wrapProgressEvent$getter(){
  return html623afa$LevelDom$Dart.wrapProgressEvent$named;
}
;
html623afa$LevelDom$Dart.wrapQuoteElement$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$QuoteElementWrappingImplementation$Dart.QuoteElementWrappingImplementation$_wrap$34$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapQuoteElement$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapQuoteElement$member(raw);
}
;
html623afa$LevelDom$Dart.wrapQuoteElement$getter = function wrapQuoteElement$getter(){
  return html623afa$LevelDom$Dart.wrapQuoteElement$named;
}
;
html623afa$LevelDom$Dart.wrapRGBColor$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$RGBColorWrappingImplementation$Dart.RGBColorWrappingImplementation$_wrap$30$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapRGBColor$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapRGBColor$member(raw);
}
;
html623afa$LevelDom$Dart.wrapRGBColor$getter = function wrapRGBColor$getter(){
  return html623afa$LevelDom$Dart.wrapRGBColor$named;
}
;
html623afa$LevelDom$Dart.wrapRange$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$RangeWrappingImplementation$Dart.RangeWrappingImplementation$_wrap$27$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapRange$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapRange$member(raw);
}
;
html623afa$LevelDom$Dart.wrapRange$getter = function wrapRange$getter(){
  return html623afa$LevelDom$Dart.wrapRange$named;
}
;
html623afa$LevelDom$Dart.wrapRangeException$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$RangeExceptionWrappingImplementation$Dart.RangeExceptionWrappingImplementation$_wrap$36$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapRangeException$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapRangeException$member(raw);
}
;
html623afa$LevelDom$Dart.wrapRangeException$getter = function wrapRangeException$getter(){
  return html623afa$LevelDom$Dart.wrapRangeException$named;
}
;
html623afa$LevelDom$Dart.wrapRect$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$RectWrappingImplementation$Dart.RectWrappingImplementation$_wrap$26$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapRect$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapRect$member(raw);
}
;
html623afa$LevelDom$Dart.wrapRect$getter = function wrapRect$getter(){
  return html623afa$LevelDom$Dart.wrapRect$named;
}
;
html623afa$LevelDom$Dart.wrapScreen$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$ScreenWrappingImplementation$Dart.ScreenWrappingImplementation$_wrap$28$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapScreen$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapScreen$member(raw);
}
;
html623afa$LevelDom$Dart.wrapScreen$getter = function wrapScreen$getter(){
  return html623afa$LevelDom$Dart.wrapScreen$named;
}
;
html623afa$LevelDom$Dart.wrapScriptElement$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$ScriptElementWrappingImplementation$Dart.ScriptElementWrappingImplementation$_wrap$35$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapScriptElement$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapScriptElement$member(raw);
}
;
html623afa$LevelDom$Dart.wrapScriptElement$getter = function wrapScriptElement$getter(){
  return html623afa$LevelDom$Dart.wrapScriptElement$named;
}
;
html623afa$LevelDom$Dart.wrapSelectElement$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$SelectElementWrappingImplementation$Dart.SelectElementWrappingImplementation$_wrap$35$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapSelectElement$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapSelectElement$member(raw);
}
;
html623afa$LevelDom$Dart.wrapSelectElement$getter = function wrapSelectElement$getter(){
  return html623afa$LevelDom$Dart.wrapSelectElement$named;
}
;
html623afa$LevelDom$Dart.wrapSharedWorker$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$SharedWorkerWrappingImplementation$Dart.SharedWorkerWrappingImplementation$_wrap$34$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapSharedWorker$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapSharedWorker$member(raw);
}
;
html623afa$LevelDom$Dart.wrapSharedWorker$getter = function wrapSharedWorker$getter(){
  return html623afa$LevelDom$Dart.wrapSharedWorker$named;
}
;
html623afa$LevelDom$Dart.wrapSourceElement$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$SourceElementWrappingImplementation$Dart.SourceElementWrappingImplementation$_wrap$35$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapSourceElement$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapSourceElement$member(raw);
}
;
html623afa$LevelDom$Dart.wrapSourceElement$getter = function wrapSourceElement$getter(){
  return html623afa$LevelDom$Dart.wrapSourceElement$named;
}
;
html623afa$LevelDom$Dart.wrapSpanElement$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$SpanElementWrappingImplementation$Dart.SpanElementWrappingImplementation$_wrap$33$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapSpanElement$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapSpanElement$member(raw);
}
;
html623afa$LevelDom$Dart.wrapSpanElement$getter = function wrapSpanElement$getter(){
  return html623afa$LevelDom$Dart.wrapSpanElement$named;
}
;
html623afa$LevelDom$Dart.wrapSpeechInputEvent$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$SpeechInputEventWrappingImplementation$Dart.SpeechInputEventWrappingImplementation$_wrap$38$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapSpeechInputEvent$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapSpeechInputEvent$member(raw);
}
;
html623afa$LevelDom$Dart.wrapSpeechInputEvent$getter = function wrapSpeechInputEvent$getter(){
  return html623afa$LevelDom$Dart.wrapSpeechInputEvent$named;
}
;
html623afa$LevelDom$Dart.wrapSpeechInputResult$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$SpeechInputResultWrappingImplementation$Dart.SpeechInputResultWrappingImplementation$_wrap$39$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapSpeechInputResult$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapSpeechInputResult$member(raw);
}
;
html623afa$LevelDom$Dart.wrapSpeechInputResult$getter = function wrapSpeechInputResult$getter(){
  return html623afa$LevelDom$Dart.wrapSpeechInputResult$named;
}
;
html623afa$LevelDom$Dart.wrapSpeechInputResultList$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$SpeechInputResultListWrappingImplementation$Dart.SpeechInputResultListWrappingImplementation$_wrap$43$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapSpeechInputResultList$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapSpeechInputResultList$member(raw);
}
;
html623afa$LevelDom$Dart.wrapSpeechInputResultList$getter = function wrapSpeechInputResultList$getter(){
  return html623afa$LevelDom$Dart.wrapSpeechInputResultList$named;
}
;
html623afa$LevelDom$Dart.wrapStorage$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$StorageWrappingImplementation$Dart.StorageWrappingImplementation$_wrap$29$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapStorage$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapStorage$member(raw);
}
;
html623afa$LevelDom$Dart.wrapStorage$getter = function wrapStorage$getter(){
  return html623afa$LevelDom$Dart.wrapStorage$named;
}
;
html623afa$LevelDom$Dart.wrapStorageEvent$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$StorageEventWrappingImplementation$Dart.StorageEventWrappingImplementation$_wrap$34$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapStorageEvent$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapStorageEvent$member(raw);
}
;
html623afa$LevelDom$Dart.wrapStorageEvent$getter = function wrapStorageEvent$getter(){
  return html623afa$LevelDom$Dart.wrapStorageEvent$named;
}
;
html623afa$LevelDom$Dart.wrapStorageInfo$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$StorageInfoWrappingImplementation$Dart.StorageInfoWrappingImplementation$_wrap$33$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapStorageInfo$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapStorageInfo$member(raw);
}
;
html623afa$LevelDom$Dart.wrapStorageInfo$getter = function wrapStorageInfo$getter(){
  return html623afa$LevelDom$Dart.wrapStorageInfo$named;
}
;
html623afa$LevelDom$Dart.wrapStorageInfoErrorCallback$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$StorageInfoErrorCallbackWrappingImplementation$Dart.StorageInfoErrorCallbackWrappingImplementation$_wrap$46$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapStorageInfoErrorCallback$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapStorageInfoErrorCallback$member(raw);
}
;
html623afa$LevelDom$Dart.wrapStorageInfoErrorCallback$getter = function wrapStorageInfoErrorCallback$getter(){
  return html623afa$LevelDom$Dart.wrapStorageInfoErrorCallback$named;
}
;
html623afa$LevelDom$Dart.wrapStorageInfoQuotaCallback$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$StorageInfoQuotaCallbackWrappingImplementation$Dart.StorageInfoQuotaCallbackWrappingImplementation$_wrap$46$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapStorageInfoQuotaCallback$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapStorageInfoQuotaCallback$member(raw);
}
;
html623afa$LevelDom$Dart.wrapStorageInfoQuotaCallback$getter = function wrapStorageInfoQuotaCallback$getter(){
  return html623afa$LevelDom$Dart.wrapStorageInfoQuotaCallback$named;
}
;
html623afa$LevelDom$Dart.wrapStorageInfoUsageCallback$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$StorageInfoUsageCallbackWrappingImplementation$Dart.StorageInfoUsageCallbackWrappingImplementation$_wrap$46$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapStorageInfoUsageCallback$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapStorageInfoUsageCallback$member(raw);
}
;
html623afa$LevelDom$Dart.wrapStorageInfoUsageCallback$getter = function wrapStorageInfoUsageCallback$getter(){
  return html623afa$LevelDom$Dart.wrapStorageInfoUsageCallback$named;
}
;
html623afa$LevelDom$Dart.wrapStringCallback$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$StringCallbackWrappingImplementation$Dart.StringCallbackWrappingImplementation$_wrap$36$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapStringCallback$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapStringCallback$member(raw);
}
;
html623afa$LevelDom$Dart.wrapStringCallback$getter = function wrapStringCallback$getter(){
  return html623afa$LevelDom$Dart.wrapStringCallback$named;
}
;
html623afa$LevelDom$Dart.wrapStyleElement$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$StyleElementWrappingImplementation$Dart.StyleElementWrappingImplementation$_wrap$34$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapStyleElement$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapStyleElement$member(raw);
}
;
html623afa$LevelDom$Dart.wrapStyleElement$getter = function wrapStyleElement$getter(){
  return html623afa$LevelDom$Dart.wrapStyleElement$named;
}
;
html623afa$LevelDom$Dart.wrapStyleMedia$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$StyleMediaWrappingImplementation$Dart.StyleMediaWrappingImplementation$_wrap$32$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapStyleMedia$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapStyleMedia$member(raw);
}
;
html623afa$LevelDom$Dart.wrapStyleMedia$getter = function wrapStyleMedia$getter(){
  return html623afa$LevelDom$Dart.wrapStyleMedia$named;
}
;
html623afa$LevelDom$Dart.wrapStyleSheet$member = function(raw){
  if (raw == null) {
    return $Dart$Null;
  }
  if (raw.dartObjectLocalStorage$getter() != null) {
    return raw.dartObjectLocalStorage$getter();
  }
  switch (raw.typeName$getter()) {
    case 'CSSStyleSheet':
      return html623afa$CSSStyleSheetWrappingImplementation$Dart.CSSStyleSheetWrappingImplementation$_wrap$35$html623afa$$Factory_(raw);
    case 'StyleSheet':
      return html623afa$StyleSheetWrappingImplementation$Dart.StyleSheetWrappingImplementation$_wrap$32$html623afa$$Factory_(raw);
    default:{
        $Dart$ThrowException(UnsupportedOperationException$Dart.UnsupportedOperationException$$Factory(ADD$operator('Unknown type:', raw.toString$named(0, $noargs))));
      }

  }
}
;
html623afa$LevelDom$Dart.wrapStyleSheet$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapStyleSheet$member(raw);
}
;
html623afa$LevelDom$Dart.wrapStyleSheet$getter = function wrapStyleSheet$getter(){
  return html623afa$LevelDom$Dart.wrapStyleSheet$named;
}
;
html623afa$LevelDom$Dart.wrapStyleSheetList$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$StyleSheetListWrappingImplementation$Dart.StyleSheetListWrappingImplementation$_wrap$36$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapStyleSheetList$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapStyleSheetList$member(raw);
}
;
html623afa$LevelDom$Dart.wrapStyleSheetList$getter = function wrapStyleSheetList$getter(){
  return html623afa$LevelDom$Dart.wrapStyleSheetList$named;
}
;
html623afa$LevelDom$Dart.wrapTableCaptionElement$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$TableCaptionElementWrappingImplementation$Dart.TableCaptionElementWrappingImplementation$_wrap$41$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapTableCaptionElement$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapTableCaptionElement$member(raw);
}
;
html623afa$LevelDom$Dart.wrapTableCaptionElement$getter = function wrapTableCaptionElement$getter(){
  return html623afa$LevelDom$Dart.wrapTableCaptionElement$named;
}
;
html623afa$LevelDom$Dart.wrapTableCellElement$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$TableCellElementWrappingImplementation$Dart.TableCellElementWrappingImplementation$_wrap$38$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapTableCellElement$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapTableCellElement$member(raw);
}
;
html623afa$LevelDom$Dart.wrapTableCellElement$getter = function wrapTableCellElement$getter(){
  return html623afa$LevelDom$Dart.wrapTableCellElement$named;
}
;
html623afa$LevelDom$Dart.wrapTableColElement$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$TableColElementWrappingImplementation$Dart.TableColElementWrappingImplementation$_wrap$37$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapTableColElement$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapTableColElement$member(raw);
}
;
html623afa$LevelDom$Dart.wrapTableColElement$getter = function wrapTableColElement$getter(){
  return html623afa$LevelDom$Dart.wrapTableColElement$named;
}
;
html623afa$LevelDom$Dart.wrapTableElement$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$TableElementWrappingImplementation$Dart.TableElementWrappingImplementation$_wrap$34$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapTableElement$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapTableElement$member(raw);
}
;
html623afa$LevelDom$Dart.wrapTableElement$getter = function wrapTableElement$getter(){
  return html623afa$LevelDom$Dart.wrapTableElement$named;
}
;
html623afa$LevelDom$Dart.wrapTableRowElement$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$TableRowElementWrappingImplementation$Dart.TableRowElementWrappingImplementation$_wrap$37$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapTableRowElement$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapTableRowElement$member(raw);
}
;
html623afa$LevelDom$Dart.wrapTableRowElement$getter = function wrapTableRowElement$getter(){
  return html623afa$LevelDom$Dart.wrapTableRowElement$named;
}
;
html623afa$LevelDom$Dart.wrapTableSectionElement$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$TableSectionElementWrappingImplementation$Dart.TableSectionElementWrappingImplementation$_wrap$41$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapTableSectionElement$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapTableSectionElement$member(raw);
}
;
html623afa$LevelDom$Dart.wrapTableSectionElement$getter = function wrapTableSectionElement$getter(){
  return html623afa$LevelDom$Dart.wrapTableSectionElement$named;
}
;
html623afa$LevelDom$Dart.wrapText$member = function(raw){
  if (raw == null) {
    return $Dart$Null;
  }
  if (raw.dartObjectLocalStorage$getter() != null) {
    return raw.dartObjectLocalStorage$getter();
  }
  switch (raw.typeName$getter()) {
    case 'CDATASection':
      return html623afa$CDATASectionWrappingImplementation$Dart.CDATASectionWrappingImplementation$_wrap$34$html623afa$$Factory_(raw);
    case 'Text':
      return html623afa$TextWrappingImplementation$Dart.TextWrappingImplementation$_wrap$26$html623afa$$Factory_(raw);
    default:{
        $Dart$ThrowException(UnsupportedOperationException$Dart.UnsupportedOperationException$$Factory(ADD$operator('Unknown type:', raw.toString$named(0, $noargs))));
      }

  }
}
;
html623afa$LevelDom$Dart.wrapText$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapText$member(raw);
}
;
html623afa$LevelDom$Dart.wrapText$getter = function wrapText$getter(){
  return html623afa$LevelDom$Dart.wrapText$named;
}
;
html623afa$LevelDom$Dart.wrapTextAreaElement$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$TextAreaElementWrappingImplementation$Dart.TextAreaElementWrappingImplementation$_wrap$37$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapTextAreaElement$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapTextAreaElement$member(raw);
}
;
html623afa$LevelDom$Dart.wrapTextAreaElement$getter = function wrapTextAreaElement$getter(){
  return html623afa$LevelDom$Dart.wrapTextAreaElement$named;
}
;
html623afa$LevelDom$Dart.wrapTextEvent$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$TextEventWrappingImplementation$Dart.TextEventWrappingImplementation$_wrap$31$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapTextEvent$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapTextEvent$member(raw);
}
;
html623afa$LevelDom$Dart.wrapTextEvent$getter = function wrapTextEvent$getter(){
  return html623afa$LevelDom$Dart.wrapTextEvent$named;
}
;
html623afa$LevelDom$Dart.wrapTextMetrics$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$TextMetricsWrappingImplementation$Dart.TextMetricsWrappingImplementation$_wrap$33$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapTextMetrics$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapTextMetrics$member(raw);
}
;
html623afa$LevelDom$Dart.wrapTextMetrics$getter = function wrapTextMetrics$getter(){
  return html623afa$LevelDom$Dart.wrapTextMetrics$named;
}
;
html623afa$LevelDom$Dart.wrapTimeRanges$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$TimeRangesWrappingImplementation$Dart.TimeRangesWrappingImplementation$_wrap$32$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapTimeRanges$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapTimeRanges$member(raw);
}
;
html623afa$LevelDom$Dart.wrapTimeRanges$getter = function wrapTimeRanges$getter(){
  return html623afa$LevelDom$Dart.wrapTimeRanges$named;
}
;
html623afa$LevelDom$Dart.wrapTitleElement$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$TitleElementWrappingImplementation$Dart.TitleElementWrappingImplementation$_wrap$34$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapTitleElement$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapTitleElement$member(raw);
}
;
html623afa$LevelDom$Dart.wrapTitleElement$getter = function wrapTitleElement$getter(){
  return html623afa$LevelDom$Dart.wrapTitleElement$named;
}
;
html623afa$LevelDom$Dart.wrapTouch$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$TouchWrappingImplementation$Dart.TouchWrappingImplementation$_wrap$27$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapTouch$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapTouch$member(raw);
}
;
html623afa$LevelDom$Dart.wrapTouch$getter = function wrapTouch$getter(){
  return html623afa$LevelDom$Dart.wrapTouch$named;
}
;
html623afa$LevelDom$Dart.wrapTouchEvent$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$TouchEventWrappingImplementation$Dart.TouchEventWrappingImplementation$_wrap$32$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapTouchEvent$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapTouchEvent$member(raw);
}
;
html623afa$LevelDom$Dart.wrapTouchEvent$getter = function wrapTouchEvent$getter(){
  return html623afa$LevelDom$Dart.wrapTouchEvent$named;
}
;
html623afa$LevelDom$Dart.wrapTouchList$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$TouchListWrappingImplementation$Dart.TouchListWrappingImplementation$_wrap$31$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapTouchList$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapTouchList$member(raw);
}
;
html623afa$LevelDom$Dart.wrapTouchList$getter = function wrapTouchList$getter(){
  return html623afa$LevelDom$Dart.wrapTouchList$named;
}
;
html623afa$LevelDom$Dart.wrapTrackElement$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$TrackElementWrappingImplementation$Dart.TrackElementWrappingImplementation$_wrap$34$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapTrackElement$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapTrackElement$member(raw);
}
;
html623afa$LevelDom$Dart.wrapTrackElement$getter = function wrapTrackElement$getter(){
  return html623afa$LevelDom$Dart.wrapTrackElement$named;
}
;
html623afa$LevelDom$Dart.wrapTransitionEvent$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$TransitionEventWrappingImplementation$Dart.TransitionEventWrappingImplementation$_wrap$37$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapTransitionEvent$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapTransitionEvent$member(raw);
}
;
html623afa$LevelDom$Dart.wrapTransitionEvent$getter = function wrapTransitionEvent$getter(){
  return html623afa$LevelDom$Dart.wrapTransitionEvent$named;
}
;
html623afa$LevelDom$Dart.wrapUIEvent$member = function(raw){
  if (raw == null) {
    return $Dart$Null;
  }
  if (raw.dartObjectLocalStorage$getter() != null) {
    return raw.dartObjectLocalStorage$getter();
  }
  switch (raw.typeName$getter()) {
    case 'CompositionEvent':
      return html623afa$CompositionEventWrappingImplementation$Dart.CompositionEventWrappingImplementation$_wrap$38$html623afa$$Factory_(raw);
    case 'KeyboardEvent':
      return html623afa$KeyboardEventWrappingImplementation$Dart.KeyboardEventWrappingImplementation$_wrap$35$html623afa$$Factory_(raw);
    case 'MouseEvent':
      return html623afa$MouseEventWrappingImplementation$Dart.MouseEventWrappingImplementation$_wrap$32$html623afa$$Factory_(raw);
    case 'TextEvent':
      return html623afa$TextEventWrappingImplementation$Dart.TextEventWrappingImplementation$_wrap$31$html623afa$$Factory_(raw);
    case 'TouchEvent':
      return html623afa$TouchEventWrappingImplementation$Dart.TouchEventWrappingImplementation$_wrap$32$html623afa$$Factory_(raw);
    case 'UIEvent':
      return html623afa$UIEventWrappingImplementation$Dart.UIEventWrappingImplementation$_wrap$29$html623afa$$Factory_(raw);
    case 'WheelEvent':
      return html623afa$WheelEventWrappingImplementation$Dart.WheelEventWrappingImplementation$_wrap$32$html623afa$$Factory_(raw);
    default:{
        $Dart$ThrowException(UnsupportedOperationException$Dart.UnsupportedOperationException$$Factory(ADD$operator('Unknown type:', raw.toString$named(0, $noargs))));
      }

  }
}
;
html623afa$LevelDom$Dart.wrapUIEvent$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapUIEvent$member(raw);
}
;
html623afa$LevelDom$Dart.wrapUIEvent$getter = function wrapUIEvent$getter(){
  return html623afa$LevelDom$Dart.wrapUIEvent$named;
}
;
html623afa$LevelDom$Dart.wrapUListElement$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$UListElementWrappingImplementation$Dart.UListElementWrappingImplementation$_wrap$34$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapUListElement$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapUListElement$member(raw);
}
;
html623afa$LevelDom$Dart.wrapUListElement$getter = function wrapUListElement$getter(){
  return html623afa$LevelDom$Dart.wrapUListElement$named;
}
;
html623afa$LevelDom$Dart.wrapUint16Array$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$Uint16ArrayWrappingImplementation$Dart.Uint16ArrayWrappingImplementation$_wrap$33$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapUint16Array$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapUint16Array$member(raw);
}
;
html623afa$LevelDom$Dart.wrapUint16Array$getter = function wrapUint16Array$getter(){
  return html623afa$LevelDom$Dart.wrapUint16Array$named;
}
;
html623afa$LevelDom$Dart.wrapUint32Array$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$Uint32ArrayWrappingImplementation$Dart.Uint32ArrayWrappingImplementation$_wrap$33$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapUint32Array$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapUint32Array$member(raw);
}
;
html623afa$LevelDom$Dart.wrapUint32Array$getter = function wrapUint32Array$getter(){
  return html623afa$LevelDom$Dart.wrapUint32Array$named;
}
;
html623afa$LevelDom$Dart.wrapUint8Array$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$Uint8ArrayWrappingImplementation$Dart.Uint8ArrayWrappingImplementation$_wrap$32$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapUint8Array$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapUint8Array$member(raw);
}
;
html623afa$LevelDom$Dart.wrapUint8Array$getter = function wrapUint8Array$getter(){
  return html623afa$LevelDom$Dart.wrapUint8Array$named;
}
;
html623afa$LevelDom$Dart.wrapUnknownElement$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$UnknownElementWrappingImplementation$Dart.UnknownElementWrappingImplementation$_wrap$36$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapUnknownElement$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapUnknownElement$member(raw);
}
;
html623afa$LevelDom$Dart.wrapUnknownElement$getter = function wrapUnknownElement$getter(){
  return html623afa$LevelDom$Dart.wrapUnknownElement$named;
}
;
html623afa$LevelDom$Dart.wrapValidityState$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$ValidityStateWrappingImplementation$Dart.ValidityStateWrappingImplementation$_wrap$35$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapValidityState$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapValidityState$member(raw);
}
;
html623afa$LevelDom$Dart.wrapValidityState$getter = function wrapValidityState$getter(){
  return html623afa$LevelDom$Dart.wrapValidityState$named;
}
;
html623afa$LevelDom$Dart.wrapVideoElement$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$VideoElementWrappingImplementation$Dart.VideoElementWrappingImplementation$_wrap$34$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapVideoElement$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapVideoElement$member(raw);
}
;
html623afa$LevelDom$Dart.wrapVideoElement$getter = function wrapVideoElement$getter(){
  return html623afa$LevelDom$Dart.wrapVideoElement$named;
}
;
html623afa$LevelDom$Dart.wrapVoidCallback$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$VoidCallbackWrappingImplementation$Dart.VoidCallbackWrappingImplementation$_wrap$34$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapVoidCallback$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapVoidCallback$member(raw);
}
;
html623afa$LevelDom$Dart.wrapVoidCallback$getter = function wrapVoidCallback$getter(){
  return html623afa$LevelDom$Dart.wrapVoidCallback$named;
}
;
html623afa$LevelDom$Dart.wrapWebGLActiveInfo$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$WebGLActiveInfoWrappingImplementation$Dart.WebGLActiveInfoWrappingImplementation$_wrap$37$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapWebGLActiveInfo$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapWebGLActiveInfo$member(raw);
}
;
html623afa$LevelDom$Dart.wrapWebGLActiveInfo$getter = function wrapWebGLActiveInfo$getter(){
  return html623afa$LevelDom$Dart.wrapWebGLActiveInfo$named;
}
;
html623afa$LevelDom$Dart.wrapWebGLBuffer$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$WebGLBufferWrappingImplementation$Dart.WebGLBufferWrappingImplementation$_wrap$33$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapWebGLBuffer$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapWebGLBuffer$member(raw);
}
;
html623afa$LevelDom$Dart.wrapWebGLBuffer$getter = function wrapWebGLBuffer$getter(){
  return html623afa$LevelDom$Dart.wrapWebGLBuffer$named;
}
;
html623afa$LevelDom$Dart.wrapWebGLContextAttributes$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$WebGLContextAttributesWrappingImplementation$Dart.WebGLContextAttributesWrappingImplementation$_wrap$44$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapWebGLContextAttributes$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapWebGLContextAttributes$member(raw);
}
;
html623afa$LevelDom$Dart.wrapWebGLContextAttributes$getter = function wrapWebGLContextAttributes$getter(){
  return html623afa$LevelDom$Dart.wrapWebGLContextAttributes$named;
}
;
html623afa$LevelDom$Dart.wrapWebGLContextEvent$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$WebGLContextEventWrappingImplementation$Dart.WebGLContextEventWrappingImplementation$_wrap$39$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapWebGLContextEvent$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapWebGLContextEvent$member(raw);
}
;
html623afa$LevelDom$Dart.wrapWebGLContextEvent$getter = function wrapWebGLContextEvent$getter(){
  return html623afa$LevelDom$Dart.wrapWebGLContextEvent$named;
}
;
html623afa$LevelDom$Dart.wrapWebGLFramebuffer$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$WebGLFramebufferWrappingImplementation$Dart.WebGLFramebufferWrappingImplementation$_wrap$38$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapWebGLFramebuffer$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapWebGLFramebuffer$member(raw);
}
;
html623afa$LevelDom$Dart.wrapWebGLFramebuffer$getter = function wrapWebGLFramebuffer$getter(){
  return html623afa$LevelDom$Dart.wrapWebGLFramebuffer$named;
}
;
html623afa$LevelDom$Dart.wrapWebGLProgram$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$WebGLProgramWrappingImplementation$Dart.WebGLProgramWrappingImplementation$_wrap$34$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapWebGLProgram$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapWebGLProgram$member(raw);
}
;
html623afa$LevelDom$Dart.wrapWebGLProgram$getter = function wrapWebGLProgram$getter(){
  return html623afa$LevelDom$Dart.wrapWebGLProgram$named;
}
;
html623afa$LevelDom$Dart.wrapWebGLRenderbuffer$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$WebGLRenderbufferWrappingImplementation$Dart.WebGLRenderbufferWrappingImplementation$_wrap$39$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapWebGLRenderbuffer$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapWebGLRenderbuffer$member(raw);
}
;
html623afa$LevelDom$Dart.wrapWebGLRenderbuffer$getter = function wrapWebGLRenderbuffer$getter(){
  return html623afa$LevelDom$Dart.wrapWebGLRenderbuffer$named;
}
;
html623afa$LevelDom$Dart.wrapWebGLRenderingContext$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$WebGLRenderingContextWrappingImplementation$Dart.WebGLRenderingContextWrappingImplementation$_wrap$43$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapWebGLRenderingContext$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapWebGLRenderingContext$member(raw);
}
;
html623afa$LevelDom$Dart.wrapWebGLRenderingContext$getter = function wrapWebGLRenderingContext$getter(){
  return html623afa$LevelDom$Dart.wrapWebGLRenderingContext$named;
}
;
html623afa$LevelDom$Dart.wrapWebGLShader$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$WebGLShaderWrappingImplementation$Dart.WebGLShaderWrappingImplementation$_wrap$33$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapWebGLShader$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapWebGLShader$member(raw);
}
;
html623afa$LevelDom$Dart.wrapWebGLShader$getter = function wrapWebGLShader$getter(){
  return html623afa$LevelDom$Dart.wrapWebGLShader$named;
}
;
html623afa$LevelDom$Dart.wrapWebGLTexture$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$WebGLTextureWrappingImplementation$Dart.WebGLTextureWrappingImplementation$_wrap$34$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapWebGLTexture$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapWebGLTexture$member(raw);
}
;
html623afa$LevelDom$Dart.wrapWebGLTexture$getter = function wrapWebGLTexture$getter(){
  return html623afa$LevelDom$Dart.wrapWebGLTexture$named;
}
;
html623afa$LevelDom$Dart.wrapWebGLUniformLocation$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$WebGLUniformLocationWrappingImplementation$Dart.WebGLUniformLocationWrappingImplementation$_wrap$42$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapWebGLUniformLocation$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapWebGLUniformLocation$member(raw);
}
;
html623afa$LevelDom$Dart.wrapWebGLUniformLocation$getter = function wrapWebGLUniformLocation$getter(){
  return html623afa$LevelDom$Dart.wrapWebGLUniformLocation$named;
}
;
html623afa$LevelDom$Dart.wrapWebGLVertexArrayObjectOES$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$WebGLVertexArrayObjectOESWrappingImplementation$Dart.WebGLVertexArrayObjectOESWrappingImplementation$_wrap$47$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapWebGLVertexArrayObjectOES$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapWebGLVertexArrayObjectOES$member(raw);
}
;
html623afa$LevelDom$Dart.wrapWebGLVertexArrayObjectOES$getter = function wrapWebGLVertexArrayObjectOES$getter(){
  return html623afa$LevelDom$Dart.wrapWebGLVertexArrayObjectOES$named;
}
;
html623afa$LevelDom$Dart.wrapWebSocket$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$WebSocketWrappingImplementation$Dart.WebSocketWrappingImplementation$_wrap$31$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapWebSocket$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapWebSocket$member(raw);
}
;
html623afa$LevelDom$Dart.wrapWebSocket$getter = function wrapWebSocket$getter(){
  return html623afa$LevelDom$Dart.wrapWebSocket$named;
}
;
html623afa$LevelDom$Dart.wrapWheelEvent$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$WheelEventWrappingImplementation$Dart.WheelEventWrappingImplementation$_wrap$32$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapWheelEvent$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapWheelEvent$member(raw);
}
;
html623afa$LevelDom$Dart.wrapWheelEvent$getter = function wrapWheelEvent$getter(){
  return html623afa$LevelDom$Dart.wrapWheelEvent$named;
}
;
html623afa$LevelDom$Dart.wrapWindow$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$WindowWrappingImplementation$Dart.WindowWrappingImplementation$_wrap$28$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapWindow$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapWindow$member(raw);
}
;
html623afa$LevelDom$Dart.wrapWindow$getter = function wrapWindow$getter(){
  return html623afa$LevelDom$Dart.wrapWindow$named;
}
;
html623afa$LevelDom$Dart.wrapWorker$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$WorkerWrappingImplementation$Dart.WorkerWrappingImplementation$_wrap$28$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapWorker$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapWorker$member(raw);
}
;
html623afa$LevelDom$Dart.wrapWorker$getter = function wrapWorker$getter(){
  return html623afa$LevelDom$Dart.wrapWorker$named;
}
;
html623afa$LevelDom$Dart.wrapXMLHttpRequest$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$XMLHttpRequestWrappingImplementation$Dart.XMLHttpRequestWrappingImplementation$_wrap$36$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapXMLHttpRequest$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapXMLHttpRequest$member(raw);
}
;
html623afa$LevelDom$Dart.wrapXMLHttpRequest$getter = function wrapXMLHttpRequest$getter(){
  return html623afa$LevelDom$Dart.wrapXMLHttpRequest$named;
}
;
html623afa$LevelDom$Dart.wrapXMLHttpRequestException$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$XMLHttpRequestExceptionWrappingImplementation$Dart.XMLHttpRequestExceptionWrappingImplementation$_wrap$45$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapXMLHttpRequestException$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapXMLHttpRequestException$member(raw);
}
;
html623afa$LevelDom$Dart.wrapXMLHttpRequestException$getter = function wrapXMLHttpRequestException$getter(){
  return html623afa$LevelDom$Dart.wrapXMLHttpRequestException$named;
}
;
html623afa$LevelDom$Dart.wrapXMLHttpRequestProgressEvent$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$XMLHttpRequestProgressEventWrappingImplementation$Dart.XMLHttpRequestProgressEventWrappingImplementation$_wrap$49$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapXMLHttpRequestProgressEvent$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapXMLHttpRequestProgressEvent$member(raw);
}
;
html623afa$LevelDom$Dart.wrapXMLHttpRequestProgressEvent$getter = function wrapXMLHttpRequestProgressEvent$getter(){
  return html623afa$LevelDom$Dart.wrapXMLHttpRequestProgressEvent$named;
}
;
html623afa$LevelDom$Dart.wrapXMLHttpRequestUpload$member = function(raw){
  return raw == null?$Dart$Null:raw.dartObjectLocalStorage$getter() != null?raw.dartObjectLocalStorage$getter():html623afa$XMLHttpRequestUploadWrappingImplementation$Dart.XMLHttpRequestUploadWrappingImplementation$_wrap$42$html623afa$$Factory_(raw);
}
;
html623afa$LevelDom$Dart.wrapXMLHttpRequestUpload$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.wrapXMLHttpRequestUpload$member(raw);
}
;
html623afa$LevelDom$Dart.wrapXMLHttpRequestUpload$getter = function wrapXMLHttpRequestUpload$getter(){
  return html623afa$LevelDom$Dart.wrapXMLHttpRequestUpload$named;
}
;
html623afa$LevelDom$Dart.unwrapMaybePrimitive$member = function(raw){
  var tmp$0;
  return !!(tmp$0 = raw , tmp$0 != null && tmp$0.$implements$html623afa$DOMWrapperBase$Dart)?raw._ptr$html623afa$$getter_():raw;
}
;
html623afa$LevelDom$Dart.unwrapMaybePrimitive$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.unwrapMaybePrimitive$member(raw);
}
;
html623afa$LevelDom$Dart.unwrapMaybePrimitive$getter = function unwrapMaybePrimitive$getter(){
  return html623afa$LevelDom$Dart.unwrapMaybePrimitive$named;
}
;
html623afa$LevelDom$Dart.unwrap$member = function(raw){
  return raw == null?$Dart$Null:raw._ptr$html623afa$$getter_();
}
;
html623afa$LevelDom$Dart.unwrap$named = function($n, $o, raw){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.unwrap$member(raw);
}
;
html623afa$LevelDom$Dart.unwrap$getter = function unwrap$getter(){
  return html623afa$LevelDom$Dart.unwrap$named;
}
;
html623afa$LevelDom$Dart.initialize$member = function(rawWindow){
  var tmp$1, tmp$0;
  html623afa$secretWindow$setter(tmp$0 = html623afa$LevelDom$Dart.wrapWindow$member(rawWindow)) , tmp$0;
  html623afa$secretDocument$setter(tmp$1 = html623afa$LevelDom$Dart.wrapDocument$member(rawWindow.document$getter())) , tmp$1;
}
;
html623afa$LevelDom$Dart.initialize$named = function($n, $o, rawWindow){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$LevelDom$Dart.initialize$member(rawWindow);
}
;
html623afa$LevelDom$Dart.initialize$getter = function initialize$getter(){
  return html623afa$LevelDom$Dart.initialize$named;
}
;
html623afa$LevelDom$Dart.$Constructor = function(){
  Object.$Constructor.call(this);
}
;
html623afa$LevelDom$Dart.$Initializer = function(){
  Object.$Initializer.call(this);
}
;
html623afa$LevelDom$Dart.LevelDom$$Factory = function(){
  var tmp$0 = new html623afa$LevelDom$Dart;
  tmp$0.$typeInfo = html623afa$LevelDom$Dart.$lookupRTT();
  html623afa$LevelDom$Dart.$Initializer.call(tmp$0);
  html623afa$LevelDom$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
