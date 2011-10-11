String.$lookupRTT = function(){
  return RTT.create($cls('String'), String.$RTTimplements);
}
;
String.$RTTimplements = function(rtt){
  String.$addTo(rtt);
}
;
String.$addTo = function(target){
  var rtt = String.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
  String$Dart.$addTo(target);
}
;
String.prototype.$implements$StringImplementation$Dart = 1;
String.prototype.$implements$String$Dart = 1;
String.prototype.$implements$Comparable$Dart = 1;
String.prototype.$implements$Hashable$Dart = 1;
String.prototype.$implements$Pattern$Dart = 1;
String.prototype.$implements$Object$Dart = 1;
String.StringImplementation$fromValues$20$Factory = function(values){
  return String._newFromValues$$member_(values);
}
;
String.prototype.INDEX$operator = function(index){
  if (LTE$operator(0, index) && LT$operator(index, this.length$getter())) {
    return this._indexOperator$$member_(index);
  }
  $Dart$ThrowException(IndexOutOfRangeException$Dart.IndexOutOfRangeException$$Factory(index));
}
;
String.prototype.charCodeAt$member = function(index){
  if (LTE$operator(0, index) && LT$operator(index, this.length$getter())) {
    return this._charCodeAt$$member_(index);
  }
  $Dart$ThrowException(IndexOutOfRangeException$Dart.IndexOutOfRangeException$$Factory(index));
}
;
String.prototype.charCodeAt$named = function($n, $o, index){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return String.prototype.charCodeAt$member.call(this, index);
}
;
String.prototype.charCodeAt$getter = function charCodeAt$getter(){
  return $bind(String.prototype.charCodeAt$named, this);
}
;
String.prototype.length$named = function(){
  return this.length$getter().apply(this, arguments);
}
;
String.prototype.length$getter = function(){
  return native_StringImplementation_get$length.call(this);
}
;
String.prototype.EQ$operator = function(other){
  return native_StringImplementation_EQ.call(this, other);
}
;
String.prototype.substringMatches$member = function(start, other){
  var tmp$0;
  var len = this.length$getter();
  var otherLen = other.length$getter();
  if (EQ$operator(otherLen, 0)) {
    return true;
  }
  if (LT$operator(start, 0) || GTE$operator(start, len)) {
    return false;
  }
  if (GT$operator(ADD$operator(start, otherLen), len)) {
    return false;
  }
  var otherImpl = other;
  {
    var i = 0;
    for (; LT$operator(i, otherLen); tmp$0 = i , (i = ADD$operator(tmp$0, 1) , tmp$0)) {
      if (NE$operator(this._charCodeAt$$member_(ADD$operator(start, i)), otherImpl._charCodeAt$$named_(1, $noargs, i))) {
        return false;
      }
    }
  }
  return true;
}
;
String.prototype.substringMatches$named = function($n, $o, start, other){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return String.prototype.substringMatches$member.call(this, start, other);
}
;
String.prototype.substringMatches$getter = function substringMatches$getter(){
  return $bind(String.prototype.substringMatches$named, this);
}
;
String.prototype.endsWith$member = function(other){
  return this.substringMatches$member(SUB$operator(this.length$getter(), other.length$getter()), other);
}
;
String.prototype.endsWith$named = function($n, $o, other){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return String.prototype.endsWith$member.call(this, other);
}
;
String.prototype.endsWith$getter = function endsWith$getter(){
  return $bind(String.prototype.endsWith$named, this);
}
;
String.prototype.startsWith$member = function(other){
  return this.substringMatches$member(0, other);
}
;
String.prototype.startsWith$named = function($n, $o, other){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return String.prototype.startsWith$member.call(this, other);
}
;
String.prototype.startsWith$getter = function startsWith$getter(){
  return $bind(String.prototype.startsWith$named, this);
}
;
String.prototype.indexOf$member = function(other, startIndex){
  return native_StringImplementation_indexOf.call(this, other, startIndex);
}
;
String.prototype.indexOf$named = function($n, $o, other, startIndex){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return String.prototype.indexOf$member.call(this, other, startIndex);
}
;
String.prototype.indexOf$getter = function indexOf$getter(){
  return $bind(String.prototype.indexOf$named, this);
}
;
String.prototype.lastIndexOf$member = function(other, fromIndex){
  return native_StringImplementation_lastIndexOf.call(this, other, fromIndex);
}
;
String.prototype.lastIndexOf$named = function($n, $o, other, fromIndex){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return String.prototype.lastIndexOf$member.call(this, other, fromIndex);
}
;
String.prototype.lastIndexOf$getter = function lastIndexOf$getter(){
  return $bind(String.prototype.lastIndexOf$named, this);
}
;
String.prototype.isEmpty$member = function(){
  return EQ$operator(this.length$getter(), 0);
}
;
String.prototype.isEmpty$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return String.prototype.isEmpty$member.call(this);
}
;
String.prototype.isEmpty$getter = function isEmpty$getter(){
  return $bind(String.prototype.isEmpty$named, this);
}
;
String.prototype.concat$member = function(other){
  return native_StringImplementation_concat.call(this, other);
}
;
String.prototype.concat$named = function($n, $o, other){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return String.prototype.concat$member.call(this, other);
}
;
String.prototype.concat$getter = function concat$getter(){
  return $bind(String.prototype.concat$named, this);
}
;
String.prototype.ADD$operator = function(obj){
  return this.concat$named(1, $noargs, obj.toString$named(0, $noargs));
}
;
String.prototype.substring$member = function(startIndex, endIndex){
  if (EQ$operator(endIndex, $Dart$Null)) {
    endIndex = this.length$getter();
  }
  if (LT$operator(startIndex, 0) || GT$operator(startIndex, this.length$getter())) {
    $Dart$ThrowException(IndexOutOfRangeException$Dart.IndexOutOfRangeException$$Factory(startIndex));
  }
  if (LT$operator(endIndex, 0) || GT$operator(endIndex, this.length$getter())) {
    $Dart$ThrowException(IndexOutOfRangeException$Dart.IndexOutOfRangeException$$Factory(endIndex));
  }
  if (GT$operator(startIndex, endIndex)) {
    $Dart$ThrowException(IndexOutOfRangeException$Dart.IndexOutOfRangeException$$Factory(startIndex));
  }
  return this._substringUnchecked$$member_(startIndex, endIndex);
}
;
String.prototype.substring$named = function($n, $o, startIndex, endIndex){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 1:
      endIndex = $o.endIndex?(++seen , $o.endIndex):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return String.prototype.substring$member.call(this, startIndex, endIndex);
}
;
String.prototype.substring$getter = function substring$getter(){
  return $bind(String.prototype.substring$named, this);
}
;
String.prototype.trim$member = function(){
  return native_StringImplementation_trim.call(this);
}
;
String.prototype.trim$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return String.prototype.trim$member.call(this);
}
;
String.prototype.trim$getter = function trim$getter(){
  return $bind(String.prototype.trim$named, this);
}
;
String.prototype.contains$member = function(pattern, startIndex){
  var tmp$0;
  if (EQ$operator(startIndex, $Dart$Null)) {
    startIndex = 0;
  }
  if (LT$operator(startIndex, 0) || GT$operator(startIndex, this.length$getter())) {
    $Dart$ThrowException(IndexOutOfRangeException$Dart.IndexOutOfRangeException$$Factory(startIndex));
  }
  if (String.$instanceOf(pattern)) {
    return NE$operator(this.indexOf$named(2, $noargs, pattern, startIndex), negate$operator(1));
  }
   else {
    if (!!(tmp$0 = pattern , tmp$0 != null && tmp$0.$implements$JSSyntaxRegExp$Dart)) {
      var regExp = pattern;
      return regExp.hasMatch$named(1, $noargs, this._substringUnchecked$$member_(startIndex, this.length$getter()));
    }
     else {
      var substr = this._substringUnchecked$$member_(startIndex, this.length$getter());
      return !pattern.allMatches$named(1, $noargs, substr).iterator$named(0, $noargs).hasNext$named(0, $noargs);
    }
  }
}
;
String.prototype.contains$named = function($n, $o, pattern, startIndex){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return String.prototype.contains$member.call(this, pattern, startIndex);
}
;
String.prototype.contains$getter = function contains$getter(){
  return $bind(String.prototype.contains$named, this);
}
;
String.prototype.replaceFirst$member = function(from, to){
  var tmp$0;
  if (String.$instanceOf(from) || !!(tmp$0 = from , tmp$0 != null && tmp$0.$implements$JSSyntaxRegExp$Dart)) {
    return this._replace$$member_(from, to);
  }
   else {
    $Dart$ThrowException('StringImplementation.replace(Pattern) UNIMPLEMENTED');
  }
}
;
String.prototype.replaceFirst$named = function($n, $o, from, to){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return String.prototype.replaceFirst$member.call(this, from, to);
}
;
String.prototype.replaceFirst$getter = function replaceFirst$getter(){
  return $bind(String.prototype.replaceFirst$named, this);
}
;
String.prototype.replaceAll$member = function(from, to){
  var tmp$1, tmp$0;
  if (String.$instanceOf(from)) {
    if (EQ$operator(from, '')) {
      if (EQ$operator(this, '')) {
        return to;
      }
       else {
        var result = StringBufferImpl$Dart.StringBufferImpl$$Factory('');
        var len = this.length$getter();
        result.add$named(1, $noargs, to);
        {
          var i = 0;
          for (; LT$operator(i, len); tmp$0 = i , (i = ADD$operator(tmp$0, 1) , tmp$0)) {
            result.add$named(1, $noargs, this.INDEX$operator(i));
            result.add$named(1, $noargs, to);
          }
        }
        return result.toString$named(0, $noargs);
      }
    }
     else {
      return this._replaceAll$$member_(from, to);
    }
  }
   else {
    if (!!(tmp$1 = from , tmp$1 != null && tmp$1.$implements$JSSyntaxRegExp$Dart)) {
      return this._replaceAll$$member_(from, to);
    }
     else {
      $Dart$ThrowException('StringImplementation.replaceAll(Pattern) UNIMPLEMENTED');
    }
  }
}
;
String.prototype.replaceAll$named = function($n, $o, from, to){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return String.prototype.replaceAll$member.call(this, from, to);
}
;
String.prototype.replaceAll$getter = function replaceAll$getter(){
  return $bind(String.prototype.replaceAll$named, this);
}
;
String.prototype.split$member = function(pattern){
  var tmp$0;
  if (String.$instanceOf(pattern) || !!(tmp$0 = pattern , tmp$0 != null && tmp$0.$implements$JSSyntaxRegExp$Dart)) {
    return this._split$$member_(pattern);
  }
   else {
    $Dart$ThrowException('StringImplementation.split(Pattern) UNIMPLEMENTED');
  }
}
;
String.prototype.split$named = function($n, $o, pattern){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return String.prototype.split$member.call(this, pattern);
}
;
String.prototype.split$getter = function split$getter(){
  return $bind(String.prototype.split$named, this);
}
;
String.prototype.allMatches$member = function(str){
  var result = RTT.setTypeInfo([], Array.$lookupRTT());
  if (this.isEmpty$named(0, $noargs)) {
    return result;
  }
  var length_0 = this.length$getter();
  var ix = 0;
  while (LT$operator(ix, str.length$getter())) {
    var foundIx = str.indexOf$named(2, $noargs, this, ix);
    if (LT$operator(foundIx, 0)) {
      break;
    }
    result.add$named(1, $noargs, _StringMatch$Dart._StringMatch$$Factory(foundIx, str, this));
    ix = ADD$operator(foundIx, length_0);
  }
  return result;
}
;
String.prototype.allMatches$named = function($n, $o, str){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return String.prototype.allMatches$member.call(this, str);
}
;
String.prototype.allMatches$getter = function allMatches$getter(){
  return $bind(String.prototype.allMatches$named, this);
}
;
String.prototype.splitChars$member = function(){
  return this._split$$member_('');
}
;
String.prototype.splitChars$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return String.prototype.splitChars$member.call(this);
}
;
String.prototype.splitChars$getter = function splitChars$getter(){
  return $bind(String.prototype.splitChars$named, this);
}
;
String.prototype.charCodes$member = function(){
  var tmp$1, tmp$0;
  var len = this.length$getter();
  var result = ArrayFactory$Dart.Array$$Factory([int$Dart.$lookupRTT()], len);
  {
    var i = 0;
    for (; LT$operator(i, len); tmp$0 = i , (i = ADD$operator(tmp$0, 1) , tmp$0)) {
      result.ASSIGN_INDEX$operator(i, tmp$1 = this._charCodeAt$$member_(i)) , tmp$1;
    }
  }
  return result;
}
;
String.prototype.charCodes$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return String.prototype.charCodes$member.call(this);
}
;
String.prototype.charCodes$getter = function charCodes$getter(){
  return $bind(String.prototype.charCodes$named, this);
}
;
String.prototype.toLowerCase$member = function(){
  return native_StringImplementation_toLowerCase.call(this);
}
;
String.prototype.toLowerCase$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return String.prototype.toLowerCase$member.call(this);
}
;
String.prototype.toLowerCase$getter = function toLowerCase$getter(){
  return $bind(String.prototype.toLowerCase$named, this);
}
;
String.prototype.toUpperCase$member = function(){
  return native_StringImplementation_toUpperCase.call(this);
}
;
String.prototype.toUpperCase$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return String.prototype.toUpperCase$member.call(this);
}
;
String.prototype.toUpperCase$getter = function toUpperCase$getter(){
  return $bind(String.prototype.toUpperCase$named, this);
}
;
String.prototype.hashCode$member = function(){
  return native_StringImplementation_hashCode.call(this);
}
;
String.prototype.hashCode$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return String.prototype.hashCode$member.call(this);
}
;
String.prototype.hashCode$getter = function hashCode$getter(){
  return $bind(String.prototype.hashCode$named, this);
}
;
String.prototype.toString$member = function(){
  return native_StringImplementation_toString.call(this);
}
;
String.prototype.toString$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return String.prototype.toString$member.call(this);
}
;
String.prototype.toString$getter = function toString$getter(){
  return $bind(String.prototype.toString$named, this);
}
;
String.prototype.compareTo$member = function(other){
  return native_StringImplementation_compareTo.call(this, other);
}
;
String.prototype.compareTo$named = function($n, $o, other){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return String.prototype.compareTo$member.call(this, other);
}
;
String.prototype.compareTo$getter = function compareTo$getter(){
  return $bind(String.prototype.compareTo$named, this);
}
;
String._newFromValues$$member_ = function(values){
  return native_StringImplementation__newFromValues(values);
}
;
String._newFromValues$$named_ = function($n, $o, values){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return String._newFromValues$$member_(values);
}
;
String._newFromValues$$getter_ = function _newFromValues$$getter_(){
  return String._newFromValues$$named_;
}
;
String.prototype._indexOperator$$member_ = function(index){
  return native_StringImplementation__indexOperator.call(this, index);
}
;
String.prototype._indexOperator$$named_ = function($n, $o, index){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return String.prototype._indexOperator$$member_.call(this, index);
}
;
String.prototype._indexOperator$$getter_ = function _indexOperator$$getter_(){
  return $bind(String.prototype._indexOperator$$named_, this);
}
;
String.prototype._charCodeAt$$member_ = function(index){
  return native_StringImplementation__charCodeAt.call(this, index);
}
;
String.prototype._charCodeAt$$named_ = function($n, $o, index){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return String.prototype._charCodeAt$$member_.call(this, index);
}
;
String.prototype._charCodeAt$$getter_ = function _charCodeAt$$getter_(){
  return $bind(String.prototype._charCodeAt$$named_, this);
}
;
String.prototype._substringUnchecked$$member_ = function(startIndex, endIndex){
  return native_StringImplementation__substringUnchecked.call(this, startIndex, endIndex);
}
;
String.prototype._substringUnchecked$$named_ = function($n, $o, startIndex, endIndex){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return String.prototype._substringUnchecked$$member_.call(this, startIndex, endIndex);
}
;
String.prototype._substringUnchecked$$getter_ = function _substringUnchecked$$getter_(){
  return $bind(String.prototype._substringUnchecked$$named_, this);
}
;
String.prototype._replace$$member_ = function(from, to){
  return native_StringImplementation__replace.call(this, from, to);
}
;
String.prototype._replace$$named_ = function($n, $o, from, to){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return String.prototype._replace$$member_.call(this, from, to);
}
;
String.prototype._replace$$getter_ = function _replace$$getter_(){
  return $bind(String.prototype._replace$$named_, this);
}
;
String.prototype._replaceAll$$member_ = function(from, to){
  return native_StringImplementation__replaceAll.call(this, from, to);
}
;
String.prototype._replaceAll$$named_ = function($n, $o, from, to){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return String.prototype._replaceAll$$member_.call(this, from, to);
}
;
String.prototype._replaceAll$$getter_ = function _replaceAll$$getter_(){
  return $bind(String.prototype._replaceAll$$named_, this);
}
;
String.prototype._split$$member_ = function(pattern){
  return native_StringImplementation__split.call(this, pattern);
}
;
String.prototype._split$$named_ = function($n, $o, pattern){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return String.prototype._split$$member_.call(this, pattern);
}
;
String.prototype._split$$getter_ = function _split$$getter_(){
  return $bind(String.prototype._split$$named_, this);
}
;
