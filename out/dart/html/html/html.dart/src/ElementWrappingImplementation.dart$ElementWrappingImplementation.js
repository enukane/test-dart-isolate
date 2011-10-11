function html623afa$ElementWrappingImplementation$Dart(){
}

html623afa$ElementWrappingImplementation$Dart.$lookupRTT = function(){
  return RTT.create($cls('html623afa$ElementWrappingImplementation$Dart'), html623afa$ElementWrappingImplementation$Dart.$RTTimplements);
}
;
html623afa$ElementWrappingImplementation$Dart.$RTTimplements = function(rtt){
  html623afa$ElementWrappingImplementation$Dart.$addTo(rtt);
}
;
html623afa$ElementWrappingImplementation$Dart.$addTo = function(target){
  var rtt = html623afa$ElementWrappingImplementation$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  html623afa$NodeWrappingImplementation$Dart.$addTo(target);
  html623afa$Element$Dart.$addTo(target);
}
;
html623afa$ElementWrappingImplementation$Dart.prototype.$implements$html623afa$ElementWrappingImplementation$Dart = 1;
html623afa$ElementWrappingImplementation$Dart.prototype.$implements$html623afa$Element$Dart = 1;
html623afa$ElementWrappingImplementation$Dart.prototype.$implements$html623afa$Node$Dart = 1;
html623afa$ElementWrappingImplementation$Dart.prototype.$implements$html623afa$EventTarget$Dart = 1;
html623afa$ElementWrappingImplementation$Dart.prototype.$implements$html623afa$NodeWrappingImplementation$Dart = 1;
html623afa$ElementWrappingImplementation$Dart.prototype.$implements$html623afa$EventTargetWrappingImplementation$Dart = 1;
html623afa$ElementWrappingImplementation$Dart.prototype.$implements$html623afa$DOMWrapperBase$Dart = 1;
html623afa$ElementWrappingImplementation$Dart.prototype.$implements$Object$Dart = 1;
$inherits(html623afa$ElementWrappingImplementation$Dart, html623afa$NodeWrappingImplementation$Dart);
html623afa$ElementWrappingImplementation$Dart.ElementWrappingImplementation$html$29$Factory = function(html){
  var tmp$0;
  var temp = document$getter().createElement$named(1, $noargs, 'div');
  temp.innerHTML$setter(tmp$0 = html) , tmp$0;
  if (NE$operator(temp.childElementCount$getter(), 1)) {
    $Dart$ThrowException('HTML had ' + $toString(temp.childElementCount$getter()) + ' top level elements but 1 expected');
  }
  return html623afa$LevelDom$Dart.wrapElement$member(temp.firstElementChild$getter());
}
;
html623afa$ElementWrappingImplementation$Dart.ElementWrappingImplementation$tag$29$Factory = function(tag){
  return html623afa$LevelDom$Dart.wrapElement$member(document$getter().createElement$named(1, $noargs, tag));
}
;
html623afa$ElementWrappingImplementation$Dart._wrap$html623afa$$Constructor_ = function(ptr){
  html623afa$NodeWrappingImplementation$Dart._wrap$html623afa$$Constructor_.call(this, ptr);
}
;
html623afa$ElementWrappingImplementation$Dart._wrap$html623afa$$Initializer_ = function(ptr){
  html623afa$NodeWrappingImplementation$Dart._wrap$html623afa$$Initializer_.call(this, ptr);
}
;
html623afa$ElementWrappingImplementation$Dart.ElementWrappingImplementation$_wrap$29$html623afa$$Factory_ = function(ptr){
  var tmp$0 = new html623afa$ElementWrappingImplementation$Dart;
  tmp$0.$typeInfo = html623afa$ElementWrappingImplementation$Dart.$lookupRTT();
  html623afa$ElementWrappingImplementation$Dart._wrap$html623afa$$Initializer_.call(tmp$0, ptr);
  html623afa$ElementWrappingImplementation$Dart._wrap$html623afa$$Constructor_.call(tmp$0, ptr);
  return tmp$0;
}
;
html623afa$ElementWrappingImplementation$Dart.prototype._elementAttributeMap$html623afa$$named_ = function(){
  return this._elementAttributeMap$html623afa$$getter_().apply(this, arguments);
}
;
html623afa$ElementWrappingImplementation$Dart.prototype._elementAttributeMap$html623afa$$getter_ = function(){
  return this._elementAttributeMap$html623afa$$field_;
}
;
html623afa$ElementWrappingImplementation$Dart.prototype._elementAttributeMap$html623afa$$setter_ = function(tmp$0){
  this._elementAttributeMap$html623afa$$field_ = tmp$0;
}
;
html623afa$ElementWrappingImplementation$Dart.prototype._cssClassSet$html623afa$$named_ = function(){
  return this._cssClassSet$html623afa$$getter_().apply(this, arguments);
}
;
html623afa$ElementWrappingImplementation$Dart.prototype._cssClassSet$html623afa$$getter_ = function(){
  return this._cssClassSet$html623afa$$field_;
}
;
html623afa$ElementWrappingImplementation$Dart.prototype._cssClassSet$html623afa$$setter_ = function(tmp$0){
  this._cssClassSet$html623afa$$field_ = tmp$0;
}
;
html623afa$ElementWrappingImplementation$Dart.prototype._dataAttributes$html623afa$$named_ = function(){
  return this._dataAttributes$html623afa$$getter_().apply(this, arguments);
}
;
html623afa$ElementWrappingImplementation$Dart.prototype._dataAttributes$html623afa$$getter_ = function(){
  return this._dataAttributes$html623afa$$field_;
}
;
html623afa$ElementWrappingImplementation$Dart.prototype._dataAttributes$html623afa$$setter_ = function(tmp$0){
  this._dataAttributes$html623afa$$field_ = tmp$0;
}
;
html623afa$ElementWrappingImplementation$Dart.prototype.attributes$named = function(){
  return this.attributes$getter().apply(this, arguments);
}
;
html623afa$ElementWrappingImplementation$Dart.prototype.attributes$getter = function(){
  var tmp$0;
  if (this._elementAttributeMap$html623afa$$getter_() == null) {
    this._elementAttributeMap$html623afa$$setter_(tmp$0 = html623afa$ElementAttributeMap$Dart.ElementAttributeMap$_wrap$19$html623afa$$Factory_(this._ptr$html623afa$$getter_())) , tmp$0;
  }
  return this._elementAttributeMap$html623afa$$getter_();
}
;
html623afa$ElementWrappingImplementation$Dart.prototype.attributes$setter = function(value){
  var tmp$0;
  var attributes = this.attributes$getter();
  attributes.clear$named(0, $noargs);
  {
    var $0 = value.getKeys$named(0, $noargs).iterator$named(0, $noargs);
    while ($0.hasNext$named(0, $noargs)) {
      var key = $0.next$named(0, $noargs);
      {
        attributes.ASSIGN_INDEX$operator(key, tmp$0 = value.INDEX$operator(key)) , tmp$0;
      }
    }
  }
}
;
html623afa$ElementWrappingImplementation$Dart.prototype.elements$named = function(){
  return this.elements$getter().apply(this, arguments);
}
;
html623afa$ElementWrappingImplementation$Dart.prototype.elements$getter = function(){
  return html623afa$_ChildrenElementList$Dart._ChildrenElementList$_wrap$20$html623afa$$Factory_(this._ptr$html623afa$$getter_());
}
;
html623afa$ElementWrappingImplementation$Dart.prototype.classes$named = function(){
  return this.classes$getter().apply(this, arguments);
}
;
html623afa$ElementWrappingImplementation$Dart.prototype.classes$getter = function(){
  var tmp$0;
  if (this._cssClassSet$html623afa$$getter_() == null) {
    this._cssClassSet$html623afa$$setter_(tmp$0 = html623afa$_CssClassSet$Dart._CssClassSet$$Factory(this._ptr$html623afa$$getter_())) , tmp$0;
  }
  return this._cssClassSet$html623afa$$getter_();
}
;
html623afa$ElementWrappingImplementation$Dart.prototype.classes$setter = function(value){
  var classSet = this.classes$getter();
  classSet.clear$named(0, $noargs);
  classSet.addAll$named(1, $noargs, value);
}
;
html623afa$ElementWrappingImplementation$Dart.prototype.dataAttributes$named = function(){
  return this.dataAttributes$getter().apply(this, arguments);
}
;
html623afa$ElementWrappingImplementation$Dart.prototype.dataAttributes$getter = function(){
  var tmp$0;
  if (this._dataAttributes$html623afa$$getter_() == null) {
    this._dataAttributes$html623afa$$setter_(tmp$0 = html623afa$_DataAttributeMap$Dart._DataAttributeMap$$Factory(this.attributes$getter())) , tmp$0;
  }
  return this._dataAttributes$html623afa$$getter_();
}
;
html623afa$ElementWrappingImplementation$Dart.prototype.dataAttributes$setter = function(value){
  var tmp$0;
  var dataAttributes = this.dataAttributes$getter();
  dataAttributes.clear$named(0, $noargs);
  {
    var $0 = value.getKeys$named(0, $noargs).iterator$named(0, $noargs);
    while ($0.hasNext$named(0, $noargs)) {
      var key = $0.next$named(0, $noargs);
      {
        dataAttributes.ASSIGN_INDEX$operator(key, tmp$0 = value.INDEX$operator(key)) , tmp$0;
      }
    }
  }
}
;
html623afa$ElementWrappingImplementation$Dart.prototype.clientHeight$named = function(){
  return this.clientHeight$getter().apply(this, arguments);
}
;
html623afa$ElementWrappingImplementation$Dart.prototype.clientHeight$getter = function(){
  return this._ptr$html623afa$$getter_().clientHeight$getter();
}
;
html623afa$ElementWrappingImplementation$Dart.prototype.clientLeft$named = function(){
  return this.clientLeft$getter().apply(this, arguments);
}
;
html623afa$ElementWrappingImplementation$Dart.prototype.clientLeft$getter = function(){
  return this._ptr$html623afa$$getter_().clientLeft$getter();
}
;
html623afa$ElementWrappingImplementation$Dart.prototype.clientTop$named = function(){
  return this.clientTop$getter().apply(this, arguments);
}
;
html623afa$ElementWrappingImplementation$Dart.prototype.clientTop$getter = function(){
  return this._ptr$html623afa$$getter_().clientTop$getter();
}
;
html623afa$ElementWrappingImplementation$Dart.prototype.clientWidth$named = function(){
  return this.clientWidth$getter().apply(this, arguments);
}
;
html623afa$ElementWrappingImplementation$Dart.prototype.clientWidth$getter = function(){
  return this._ptr$html623afa$$getter_().clientWidth$getter();
}
;
html623afa$ElementWrappingImplementation$Dart.prototype.contentEditable$named = function(){
  return this.contentEditable$getter().apply(this, arguments);
}
;
html623afa$ElementWrappingImplementation$Dart.prototype.contentEditable$getter = function(){
  return this._ptr$html623afa$$getter_().contentEditable$getter();
}
;
html623afa$ElementWrappingImplementation$Dart.prototype.contentEditable$setter = function(value){
  var tmp$0;
  this._ptr$html623afa$$getter_().contentEditable$setter(tmp$0 = value) , tmp$0;
}
;
html623afa$ElementWrappingImplementation$Dart.prototype.dir$named = function(){
  return this.dir$getter().apply(this, arguments);
}
;
html623afa$ElementWrappingImplementation$Dart.prototype.dir$getter = function(){
  return this._ptr$html623afa$$getter_().dir$getter();
}
;
html623afa$ElementWrappingImplementation$Dart.prototype.dir$setter = function(value){
  var tmp$0;
  this._ptr$html623afa$$getter_().dir$setter(tmp$0 = value) , tmp$0;
}
;
html623afa$ElementWrappingImplementation$Dart.prototype.draggable$named = function(){
  return this.draggable$getter().apply(this, arguments);
}
;
html623afa$ElementWrappingImplementation$Dart.prototype.draggable$getter = function(){
  return this._ptr$html623afa$$getter_().draggable$getter();
}
;
html623afa$ElementWrappingImplementation$Dart.prototype.draggable$setter = function(value){
  var tmp$0;
  this._ptr$html623afa$$getter_().draggable$setter(tmp$0 = value) , tmp$0;
}
;
html623afa$ElementWrappingImplementation$Dart.prototype.firstElementChild$named = function(){
  return this.firstElementChild$getter().apply(this, arguments);
}
;
html623afa$ElementWrappingImplementation$Dart.prototype.firstElementChild$getter = function(){
  return html623afa$LevelDom$Dart.wrapElement$member(this._ptr$html623afa$$getter_().firstElementChild$getter());
}
;
html623afa$ElementWrappingImplementation$Dart.prototype.hidden$named = function(){
  return this.hidden$getter().apply(this, arguments);
}
;
html623afa$ElementWrappingImplementation$Dart.prototype.hidden$getter = function(){
  return this._ptr$html623afa$$getter_().hidden$getter();
}
;
html623afa$ElementWrappingImplementation$Dart.prototype.hidden$setter = function(value){
  var tmp$0;
  this._ptr$html623afa$$getter_().hidden$setter(tmp$0 = value) , tmp$0;
}
;
html623afa$ElementWrappingImplementation$Dart.prototype.id$named = function(){
  return this.id$getter().apply(this, arguments);
}
;
html623afa$ElementWrappingImplementation$Dart.prototype.id$getter = function(){
  return this._ptr$html623afa$$getter_().id$getter();
}
;
html623afa$ElementWrappingImplementation$Dart.prototype.id$setter = function(value){
  var tmp$0;
  this._ptr$html623afa$$getter_().id$setter(tmp$0 = value) , tmp$0;
}
;
html623afa$ElementWrappingImplementation$Dart.prototype.innerHTML$named = function(){
  return this.innerHTML$getter().apply(this, arguments);
}
;
html623afa$ElementWrappingImplementation$Dart.prototype.innerHTML$getter = function(){
  return this._ptr$html623afa$$getter_().innerHTML$getter();
}
;
html623afa$ElementWrappingImplementation$Dart.prototype.innerHTML$setter = function(value){
  var tmp$0;
  this._ptr$html623afa$$getter_().innerHTML$setter(tmp$0 = value) , tmp$0;
}
;
html623afa$ElementWrappingImplementation$Dart.prototype.isContentEditable$named = function(){
  return this.isContentEditable$getter().apply(this, arguments);
}
;
html623afa$ElementWrappingImplementation$Dart.prototype.isContentEditable$getter = function(){
  return this._ptr$html623afa$$getter_().isContentEditable$getter();
}
;
html623afa$ElementWrappingImplementation$Dart.prototype.lang$named = function(){
  return this.lang$getter().apply(this, arguments);
}
;
html623afa$ElementWrappingImplementation$Dart.prototype.lang$getter = function(){
  return this._ptr$html623afa$$getter_().lang$getter();
}
;
html623afa$ElementWrappingImplementation$Dart.prototype.lang$setter = function(value){
  var tmp$0;
  this._ptr$html623afa$$getter_().lang$setter(tmp$0 = value) , tmp$0;
}
;
html623afa$ElementWrappingImplementation$Dart.prototype.lastElementChild$named = function(){
  return this.lastElementChild$getter().apply(this, arguments);
}
;
html623afa$ElementWrappingImplementation$Dart.prototype.lastElementChild$getter = function(){
  return html623afa$LevelDom$Dart.wrapElement$member(this._ptr$html623afa$$getter_().lastElementChild$getter());
}
;
html623afa$ElementWrappingImplementation$Dart.prototype.nextElementSibling$named = function(){
  return this.nextElementSibling$getter().apply(this, arguments);
}
;
html623afa$ElementWrappingImplementation$Dart.prototype.nextElementSibling$getter = function(){
  return html623afa$LevelDom$Dart.wrapElement$member(this._ptr$html623afa$$getter_().nextElementSibling$getter());
}
;
html623afa$ElementWrappingImplementation$Dart.prototype.offsetHeight$named = function(){
  return this.offsetHeight$getter().apply(this, arguments);
}
;
html623afa$ElementWrappingImplementation$Dart.prototype.offsetHeight$getter = function(){
  return this._ptr$html623afa$$getter_().offsetHeight$getter();
}
;
html623afa$ElementWrappingImplementation$Dart.prototype.offsetLeft$named = function(){
  return this.offsetLeft$getter().apply(this, arguments);
}
;
html623afa$ElementWrappingImplementation$Dart.prototype.offsetLeft$getter = function(){
  return this._ptr$html623afa$$getter_().offsetLeft$getter();
}
;
html623afa$ElementWrappingImplementation$Dart.prototype.offsetParent$named = function(){
  return this.offsetParent$getter().apply(this, arguments);
}
;
html623afa$ElementWrappingImplementation$Dart.prototype.offsetParent$getter = function(){
  return html623afa$LevelDom$Dart.wrapElement$member(this._ptr$html623afa$$getter_().offsetParent$getter());
}
;
html623afa$ElementWrappingImplementation$Dart.prototype.offsetTop$named = function(){
  return this.offsetTop$getter().apply(this, arguments);
}
;
html623afa$ElementWrappingImplementation$Dart.prototype.offsetTop$getter = function(){
  return this._ptr$html623afa$$getter_().offsetTop$getter();
}
;
html623afa$ElementWrappingImplementation$Dart.prototype.offsetWidth$named = function(){
  return this.offsetWidth$getter().apply(this, arguments);
}
;
html623afa$ElementWrappingImplementation$Dart.prototype.offsetWidth$getter = function(){
  return this._ptr$html623afa$$getter_().offsetWidth$getter();
}
;
html623afa$ElementWrappingImplementation$Dart.prototype.outerHTML$named = function(){
  return this.outerHTML$getter().apply(this, arguments);
}
;
html623afa$ElementWrappingImplementation$Dart.prototype.outerHTML$getter = function(){
  return this._ptr$html623afa$$getter_().outerHTML$getter();
}
;
html623afa$ElementWrappingImplementation$Dart.prototype.previousElementSibling$named = function(){
  return this.previousElementSibling$getter().apply(this, arguments);
}
;
html623afa$ElementWrappingImplementation$Dart.prototype.previousElementSibling$getter = function(){
  return html623afa$LevelDom$Dart.wrapElement$member(this._ptr$html623afa$$getter_().previousElementSibling$getter());
}
;
html623afa$ElementWrappingImplementation$Dart.prototype.scrollHeight$named = function(){
  return this.scrollHeight$getter().apply(this, arguments);
}
;
html623afa$ElementWrappingImplementation$Dart.prototype.scrollHeight$getter = function(){
  return this._ptr$html623afa$$getter_().scrollHeight$getter();
}
;
html623afa$ElementWrappingImplementation$Dart.prototype.scrollLeft$named = function(){
  return this.scrollLeft$getter().apply(this, arguments);
}
;
html623afa$ElementWrappingImplementation$Dart.prototype.scrollLeft$getter = function(){
  return this._ptr$html623afa$$getter_().scrollLeft$getter();
}
;
html623afa$ElementWrappingImplementation$Dart.prototype.scrollLeft$setter = function(value){
  var tmp$0;
  this._ptr$html623afa$$getter_().scrollLeft$setter(tmp$0 = value) , tmp$0;
}
;
html623afa$ElementWrappingImplementation$Dart.prototype.scrollTop$named = function(){
  return this.scrollTop$getter().apply(this, arguments);
}
;
html623afa$ElementWrappingImplementation$Dart.prototype.scrollTop$getter = function(){
  return this._ptr$html623afa$$getter_().scrollTop$getter();
}
;
html623afa$ElementWrappingImplementation$Dart.prototype.scrollTop$setter = function(value){
  var tmp$0;
  this._ptr$html623afa$$getter_().scrollTop$setter(tmp$0 = value) , tmp$0;
}
;
html623afa$ElementWrappingImplementation$Dart.prototype.scrollWidth$named = function(){
  return this.scrollWidth$getter().apply(this, arguments);
}
;
html623afa$ElementWrappingImplementation$Dart.prototype.scrollWidth$getter = function(){
  return this._ptr$html623afa$$getter_().scrollWidth$getter();
}
;
html623afa$ElementWrappingImplementation$Dart.prototype.spellcheck$named = function(){
  return this.spellcheck$getter().apply(this, arguments);
}
;
html623afa$ElementWrappingImplementation$Dart.prototype.spellcheck$getter = function(){
  return this._ptr$html623afa$$getter_().spellcheck$getter();
}
;
html623afa$ElementWrappingImplementation$Dart.prototype.spellcheck$setter = function(value){
  var tmp$0;
  this._ptr$html623afa$$getter_().spellcheck$setter(tmp$0 = value) , tmp$0;
}
;
html623afa$ElementWrappingImplementation$Dart.prototype.style$named = function(){
  return this.style$getter().apply(this, arguments);
}
;
html623afa$ElementWrappingImplementation$Dart.prototype.style$getter = function(){
  return html623afa$LevelDom$Dart.wrapCSSStyleDeclaration$member(this._ptr$html623afa$$getter_().style$getter());
}
;
html623afa$ElementWrappingImplementation$Dart.prototype.tabIndex$named = function(){
  return this.tabIndex$getter().apply(this, arguments);
}
;
html623afa$ElementWrappingImplementation$Dart.prototype.tabIndex$getter = function(){
  return this._ptr$html623afa$$getter_().tabIndex$getter();
}
;
html623afa$ElementWrappingImplementation$Dart.prototype.tabIndex$setter = function(value){
  var tmp$0;
  this._ptr$html623afa$$getter_().tabIndex$setter(tmp$0 = value) , tmp$0;
}
;
html623afa$ElementWrappingImplementation$Dart.prototype.tagName$named = function(){
  return this.tagName$getter().apply(this, arguments);
}
;
html623afa$ElementWrappingImplementation$Dart.prototype.tagName$getter = function(){
  return this._ptr$html623afa$$getter_().tagName$getter();
}
;
html623afa$ElementWrappingImplementation$Dart.prototype.title$named = function(){
  return this.title$getter().apply(this, arguments);
}
;
html623afa$ElementWrappingImplementation$Dart.prototype.title$getter = function(){
  return this._ptr$html623afa$$getter_().title$getter();
}
;
html623afa$ElementWrappingImplementation$Dart.prototype.title$setter = function(value){
  var tmp$0;
  this._ptr$html623afa$$getter_().title$setter(tmp$0 = value) , tmp$0;
}
;
html623afa$ElementWrappingImplementation$Dart.prototype.webkitdropzone$named = function(){
  return this.webkitdropzone$getter().apply(this, arguments);
}
;
html623afa$ElementWrappingImplementation$Dart.prototype.webkitdropzone$getter = function(){
  return this._ptr$html623afa$$getter_().webkitdropzone$getter();
}
;
html623afa$ElementWrappingImplementation$Dart.prototype.webkitdropzone$setter = function(value){
  var tmp$0;
  this._ptr$html623afa$$getter_().webkitdropzone$setter(tmp$0 = value) , tmp$0;
}
;
html623afa$ElementWrappingImplementation$Dart.prototype.blur$member = function(){
  this._ptr$html623afa$$getter_().blur$named(0, $noargs);
}
;
html623afa$ElementWrappingImplementation$Dart.prototype.blur$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return html623afa$ElementWrappingImplementation$Dart.prototype.blur$member.call(this);
}
;
html623afa$ElementWrappingImplementation$Dart.prototype.blur$getter = function blur$getter(){
  return $bind(html623afa$ElementWrappingImplementation$Dart.prototype.blur$named, this);
}
;
html623afa$ElementWrappingImplementation$Dart.prototype.contains$member = function(element){
  return this._ptr$html623afa$$getter_().contains$named(1, $noargs, html623afa$LevelDom$Dart.unwrap$member(element));
}
;
html623afa$ElementWrappingImplementation$Dart.prototype.contains$named = function($n, $o, element){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$ElementWrappingImplementation$Dart.prototype.contains$member.call(this, element);
}
;
html623afa$ElementWrappingImplementation$Dart.prototype.contains$getter = function contains$getter(){
  return $bind(html623afa$ElementWrappingImplementation$Dart.prototype.contains$named, this);
}
;
html623afa$ElementWrappingImplementation$Dart.prototype.focus$member = function(){
  this._ptr$html623afa$$getter_().focus$named(0, $noargs);
}
;
html623afa$ElementWrappingImplementation$Dart.prototype.focus$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return html623afa$ElementWrappingImplementation$Dart.prototype.focus$member.call(this);
}
;
html623afa$ElementWrappingImplementation$Dart.prototype.focus$getter = function focus$getter(){
  return $bind(html623afa$ElementWrappingImplementation$Dart.prototype.focus$named, this);
}
;
html623afa$ElementWrappingImplementation$Dart.prototype.getBoundingClientRect$member = function(){
  return html623afa$LevelDom$Dart.wrapClientRect$member(this._ptr$html623afa$$getter_().getBoundingClientRect$named(0, $noargs));
}
;
html623afa$ElementWrappingImplementation$Dart.prototype.getBoundingClientRect$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return html623afa$ElementWrappingImplementation$Dart.prototype.getBoundingClientRect$member.call(this);
}
;
html623afa$ElementWrappingImplementation$Dart.prototype.getBoundingClientRect$getter = function getBoundingClientRect$getter(){
  return $bind(html623afa$ElementWrappingImplementation$Dart.prototype.getBoundingClientRect$named, this);
}
;
html623afa$ElementWrappingImplementation$Dart.prototype.getClientRects$member = function(){
  return html623afa$LevelDom$Dart.wrapClientRectList$member(this._ptr$html623afa$$getter_().getClientRects$named(0, $noargs));
}
;
html623afa$ElementWrappingImplementation$Dart.prototype.getClientRects$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return html623afa$ElementWrappingImplementation$Dart.prototype.getClientRects$member.call(this);
}
;
html623afa$ElementWrappingImplementation$Dart.prototype.getClientRects$getter = function getClientRects$getter(){
  return $bind(html623afa$ElementWrappingImplementation$Dart.prototype.getClientRects$named, this);
}
;
html623afa$ElementWrappingImplementation$Dart.prototype.insertAdjacentElement$member = function(where, element){
  return html623afa$LevelDom$Dart.wrapElement$member(this._ptr$html623afa$$getter_().insertAdjacentElement$named(2, $noargs, where, html623afa$LevelDom$Dart.unwrap$member(element)));
}
;
html623afa$ElementWrappingImplementation$Dart.prototype.insertAdjacentElement$named = function($n, $o, where, element){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 0:
      where = $o.where?(++seen , $o.where):(++def , $Dart$Null);
    case 1:
      element = $o.element?(++seen , $o.element):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return html623afa$ElementWrappingImplementation$Dart.prototype.insertAdjacentElement$member.call(this, where, element);
}
;
html623afa$ElementWrappingImplementation$Dart.prototype.insertAdjacentElement$getter = function insertAdjacentElement$getter(){
  return $bind(html623afa$ElementWrappingImplementation$Dart.prototype.insertAdjacentElement$named, this);
}
;
html623afa$ElementWrappingImplementation$Dart.prototype.insertAdjacentHTML$member = function(position_OR_where, text){
  this._ptr$html623afa$$getter_().insertAdjacentHTML$named(2, $noargs, position_OR_where, text);
}
;
html623afa$ElementWrappingImplementation$Dart.prototype.insertAdjacentHTML$named = function($n, $o, position_OR_where, text){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 0:
      position_OR_where = $o.position_OR_where?(++seen , $o.position_OR_where):(++def , $Dart$Null);
    case 1:
      text = $o.text?(++seen , $o.text):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return html623afa$ElementWrappingImplementation$Dart.prototype.insertAdjacentHTML$member.call(this, position_OR_where, text);
}
;
html623afa$ElementWrappingImplementation$Dart.prototype.insertAdjacentHTML$getter = function insertAdjacentHTML$getter(){
  return $bind(html623afa$ElementWrappingImplementation$Dart.prototype.insertAdjacentHTML$named, this);
}
;
html623afa$ElementWrappingImplementation$Dart.prototype.insertAdjacentText$member = function(where, text){
  this._ptr$html623afa$$getter_().insertAdjacentText$named(2, $noargs, where, text);
}
;
html623afa$ElementWrappingImplementation$Dart.prototype.insertAdjacentText$named = function($n, $o, where, text){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 0:
      where = $o.where?(++seen , $o.where):(++def , $Dart$Null);
    case 1:
      text = $o.text?(++seen , $o.text):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return html623afa$ElementWrappingImplementation$Dart.prototype.insertAdjacentText$member.call(this, where, text);
}
;
html623afa$ElementWrappingImplementation$Dart.prototype.insertAdjacentText$getter = function insertAdjacentText$getter(){
  return $bind(html623afa$ElementWrappingImplementation$Dart.prototype.insertAdjacentText$named, this);
}
;
html623afa$ElementWrappingImplementation$Dart.prototype.query$member = function(selectors){
  return html623afa$LevelDom$Dart.wrapElement$member(this._ptr$html623afa$$getter_().querySelector$named(1, $noargs, selectors));
}
;
html623afa$ElementWrappingImplementation$Dart.prototype.query$named = function($n, $o, selectors){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$ElementWrappingImplementation$Dart.prototype.query$member.call(this, selectors);
}
;
html623afa$ElementWrappingImplementation$Dart.prototype.query$getter = function query$getter(){
  return $bind(html623afa$ElementWrappingImplementation$Dart.prototype.query$named, this);
}
;
html623afa$ElementWrappingImplementation$Dart.prototype.queryAll$member = function(selectors){
  return html623afa$FrozenElementList$Dart.FrozenElementList$_wrap$17$html623afa$$Factory_(this._ptr$html623afa$$getter_().querySelectorAll$named(1, $noargs, selectors));
}
;
html623afa$ElementWrappingImplementation$Dart.prototype.queryAll$named = function($n, $o, selectors){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$ElementWrappingImplementation$Dart.prototype.queryAll$member.call(this, selectors);
}
;
html623afa$ElementWrappingImplementation$Dart.prototype.queryAll$getter = function queryAll$getter(){
  return $bind(html623afa$ElementWrappingImplementation$Dart.prototype.queryAll$named, this);
}
;
html623afa$ElementWrappingImplementation$Dart.prototype.scrollByLines$member = function(lines){
  this._ptr$html623afa$$getter_().scrollByLines$named(1, $noargs, lines);
}
;
html623afa$ElementWrappingImplementation$Dart.prototype.scrollByLines$named = function($n, $o, lines){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 0:
      lines = $o.lines?(++seen , $o.lines):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$ElementWrappingImplementation$Dart.prototype.scrollByLines$member.call(this, lines);
}
;
html623afa$ElementWrappingImplementation$Dart.prototype.scrollByLines$getter = function scrollByLines$getter(){
  return $bind(html623afa$ElementWrappingImplementation$Dart.prototype.scrollByLines$named, this);
}
;
html623afa$ElementWrappingImplementation$Dart.prototype.scrollByPages$member = function(pages){
  this._ptr$html623afa$$getter_().scrollByPages$named(1, $noargs, pages);
}
;
html623afa$ElementWrappingImplementation$Dart.prototype.scrollByPages$named = function($n, $o, pages){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 0:
      pages = $o.pages?(++seen , $o.pages):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$ElementWrappingImplementation$Dart.prototype.scrollByPages$member.call(this, pages);
}
;
html623afa$ElementWrappingImplementation$Dart.prototype.scrollByPages$getter = function scrollByPages$getter(){
  return $bind(html623afa$ElementWrappingImplementation$Dart.prototype.scrollByPages$named, this);
}
;
html623afa$ElementWrappingImplementation$Dart.prototype.scrollIntoView$member = function(centerIfNeeded){
  this._ptr$html623afa$$getter_().scrollIntoViewIfNeeded$named(1, $noargs, centerIfNeeded);
}
;
html623afa$ElementWrappingImplementation$Dart.prototype.scrollIntoView$named = function($n, $o, centerIfNeeded){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 0:
      centerIfNeeded = $o.centerIfNeeded?(++seen , $o.centerIfNeeded):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$ElementWrappingImplementation$Dart.prototype.scrollIntoView$member.call(this, centerIfNeeded);
}
;
html623afa$ElementWrappingImplementation$Dart.prototype.scrollIntoView$getter = function scrollIntoView$getter(){
  return $bind(html623afa$ElementWrappingImplementation$Dart.prototype.scrollIntoView$named, this);
}
;
html623afa$ElementWrappingImplementation$Dart.prototype.matchesSelector$member = function(selectors){
  return this._ptr$html623afa$$getter_().webkitMatchesSelector$named(1, $noargs, selectors);
}
;
html623afa$ElementWrappingImplementation$Dart.prototype.matchesSelector$named = function($n, $o, selectors){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 0:
      selectors = $o.selectors?(++seen , $o.selectors):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return html623afa$ElementWrappingImplementation$Dart.prototype.matchesSelector$member.call(this, selectors);
}
;
html623afa$ElementWrappingImplementation$Dart.prototype.matchesSelector$getter = function matchesSelector$getter(){
  return $bind(html623afa$ElementWrappingImplementation$Dart.prototype.matchesSelector$named, this);
}
;
html623afa$ElementWrappingImplementation$Dart.prototype.on$named = function(){
  return this.on$getter().apply(this, arguments);
}
;
html623afa$ElementWrappingImplementation$Dart.prototype.on$getter = function(){
  var tmp$0;
  if (this._on$html623afa$$getter_() == null) {
    this._on$html623afa$$setter_(tmp$0 = html623afa$ElementEventsImplementation$Dart.ElementEventsImplementation$_wrap$27$html623afa$$Factory_(this._ptr$html623afa$$getter_())) , tmp$0;
  }
  return this._on$html623afa$$getter_();
}
;
