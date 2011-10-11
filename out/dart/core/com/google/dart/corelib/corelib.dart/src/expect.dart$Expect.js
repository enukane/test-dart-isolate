function Expect$Dart(){
}

Expect$Dart.$lookupRTT = function(){
  return RTT.create($cls('Expect$Dart'));
}
;
Expect$Dart.$addTo = function(target){
  var rtt = Expect$Dart.$lookupRTT();
  target.implementedTypes[rtt.classKey] = rtt;
}
;
Expect$Dart.prototype.$implements$Expect$Dart = 1;
Expect$Dart.prototype.$implements$Object$Dart = 1;
Expect$Dart.equals$member = function(expected, actual, reason){
  if (EQ$operator(expected, actual)) {
    return;
  }
  var msg = Expect$Dart._getMessage$$member_(reason);
  Expect$Dart._fail$$member_('Expect.equals(expected: <' + $toString(expected) + '>, actual: <' + $toString(actual) + '>' + $toString(msg) + ') fails.');
}
;
Expect$Dart.equals$named = function($n, $o, expected, actual, reason){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 2:
      reason = $o.reason?(++seen , $o.reason):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return Expect$Dart.equals$member(expected, actual, reason);
}
;
Expect$Dart.equals$getter = function equals$getter(){
  return Expect$Dart.equals$named;
}
;
Expect$Dart.isTrue$member = function(actual, reason){
  if (actual === true) {
    return;
  }
  var msg = Expect$Dart._getMessage$$member_(reason);
  Expect$Dart._fail$$member_('Expect.isTrue(' + $toString(actual) + '' + $toString(msg) + ') fails.');
}
;
Expect$Dart.isTrue$named = function($n, $o, actual, reason){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 1:
      reason = $o.reason?(++seen , $o.reason):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return Expect$Dart.isTrue$member(actual, reason);
}
;
Expect$Dart.isTrue$getter = function isTrue$getter(){
  return Expect$Dart.isTrue$named;
}
;
Expect$Dart.isFalse$member = function(actual, reason){
  if (actual === false) {
    return;
  }
  var msg = Expect$Dart._getMessage$$member_(reason);
  Expect$Dart._fail$$member_('Expect.isFalse(' + $toString(actual) + '' + $toString(msg) + ') fails.');
}
;
Expect$Dart.isFalse$named = function($n, $o, actual, reason){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 1:
      reason = $o.reason?(++seen , $o.reason):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return Expect$Dart.isFalse$member(actual, reason);
}
;
Expect$Dart.isFalse$getter = function isFalse$getter(){
  return Expect$Dart.isFalse$named;
}
;
Expect$Dart.isNull$member = function(actual, reason){
  if (actual == null) {
    return;
  }
  var msg = Expect$Dart._getMessage$$member_(reason);
  Expect$Dart._fail$$member_('Expect.isNull(actual: <' + $toString(actual) + '>' + $toString(msg) + ') fails.');
}
;
Expect$Dart.isNull$named = function($n, $o, actual, reason){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 1:
      reason = $o.reason?(++seen , $o.reason):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return Expect$Dart.isNull$member(actual, reason);
}
;
Expect$Dart.isNull$getter = function isNull$getter(){
  return Expect$Dart.isNull$named;
}
;
Expect$Dart.isNotNull$member = function(actual, reason){
  if (actual != null) {
    return;
  }
  var msg = Expect$Dart._getMessage$$member_(reason);
  Expect$Dart._fail$$member_('Expect.isNotNull(actual: <' + $toString(actual) + '>' + $toString(msg) + ') fails.');
}
;
Expect$Dart.isNotNull$named = function($n, $o, actual, reason){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 1:
      reason = $o.reason?(++seen , $o.reason):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return Expect$Dart.isNotNull$member(actual, reason);
}
;
Expect$Dart.isNotNull$getter = function isNotNull$getter(){
  return Expect$Dart.isNotNull$named;
}
;
Expect$Dart.identical$member = function(expected, actual, reason){
  if (expected === actual) {
    return;
  }
  var msg = Expect$Dart._getMessage$$member_(reason);
  Expect$Dart._fail$$member_(ADD$operator('Expect.identical(expected: <' + $toString(expected) + '>, actual: <' + $toString(actual) + '>' + $toString(msg) + ') ', 'fails.'));
}
;
Expect$Dart.identical$named = function($n, $o, expected, actual, reason){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 2:
      reason = $o.reason?(++seen , $o.reason):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return Expect$Dart.identical$member(expected, actual, reason);
}
;
Expect$Dart.identical$getter = function identical$getter(){
  return Expect$Dart.identical$named;
}
;
Expect$Dart.fail$member = function(msg){
  Expect$Dart._fail$$member_("Expect.fail('" + $toString(msg) + "')");
}
;
Expect$Dart.fail$named = function($n, $o, msg){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return Expect$Dart.fail$member(msg);
}
;
Expect$Dart.fail$getter = function fail$getter(){
  return Expect$Dart.fail$named;
}
;
Expect$Dart.approxEquals$member = function(expected, actual, tolerance, reason){
  if (EQ$operator(tolerance, $Dart$Null)) {
    tolerance = DIV$operator(expected, Math$Dart.pow$member(10, 4)).abs$named(0, $noargs);
  }
  if (LTE$operator(SUB$operator(expected, actual).abs$named(0, $noargs), tolerance)) {
    return;
  }
  var msg = Expect$Dart._getMessage$$member_(reason);
  Expect$Dart._fail$$member_(ADD$operator('Expect.approxEquals(expected:<' + $toString(expected) + '>, actual:<' + $toString(actual) + '>, ', 'tolerance:<' + $toString(tolerance) + '>' + $toString(msg) + ') fails'));
}
;
Expect$Dart.approxEquals$named = function($n, $o, expected, actual, tolerance, reason){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 2:
      tolerance = $o.tolerance?(++seen , $o.tolerance):(++def , $Dart$Null);
    case 3:
      reason = $o.reason?(++seen , $o.reason):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 4)
    $nsme();
  return Expect$Dart.approxEquals$member(expected, actual, tolerance, reason);
}
;
Expect$Dart.approxEquals$getter = function approxEquals$getter(){
  return Expect$Dart.approxEquals$named;
}
;
Expect$Dart.notEquals$member = function(unexpected, actual, reason){
  if (NE$operator(unexpected, actual)) {
    return;
  }
  var msg = Expect$Dart._getMessage$$member_(reason);
  Expect$Dart._fail$$member_(ADD$operator('Expect.notEquals(unexpected: <' + $toString(unexpected) + '>, actual:<' + $toString(actual) + '>' + $toString(msg) + ') ', 'fails.'));
}
;
Expect$Dart.notEquals$named = function($n, $o, unexpected, actual, reason){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 2:
      reason = $o.reason?(++seen , $o.reason):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return Expect$Dart.notEquals$member(unexpected, actual, reason);
}
;
Expect$Dart.notEquals$getter = function notEquals$getter(){
  return Expect$Dart.notEquals$named;
}
;
Expect$Dart.listEquals$member = function(expected, actual, reason){
  var tmp$0;
  var msg = Expect$Dart._getMessage$$member_(reason);
  var n = Math$Dart.min$member(expected.length$getter(), actual.length$getter());
  {
    var i = 0;
    for (; LT$operator(i, n); tmp$0 = i , (i = ADD$operator(tmp$0, 1) , tmp$0)) {
      if (NE$operator(expected.INDEX$operator(i), actual.INDEX$operator(i))) {
        Expect$Dart._fail$$member_(ADD$operator('Expect.listEquals(at index ' + $toString(i) + ', ', 'expected: <' + $toString(expected.INDEX$operator(0)) + '>, actual: <' + $toString(actual.INDEX$operator(i)) + '>' + $toString(msg) + ') fails'));
      }
    }
  }
  if (NE$operator(expected.length$getter(), actual.length$getter())) {
    Expect$Dart._fail$$member_(ADD$operator(ADD$operator('Expect.listEquals(list length, ', 'expected: <' + $toString(expected.length$getter()) + '>, actual: <' + $toString(actual.length$getter()) + '>' + $toString(msg) + ') '), 'fails'));
  }
}
;
Expect$Dart.listEquals$named = function($n, $o, expected, actual, reason){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 2:
      reason = $o.reason?(++seen , $o.reason):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return Expect$Dart.listEquals$member(expected, actual, reason);
}
;
Expect$Dart.listEquals$getter = function listEquals$getter(){
  return Expect$Dart.listEquals$named;
}
;
Expect$Dart.stringEquals$member = function(expected, actual, reason){
  var tmp$1, tmp$0;
  var msg = Expect$Dart._getMessage$$member_(reason);
  var defaultMessage = 'Expect.stringEquals(expected: <' + $toString(expected) + '>", <' + $toString(actual) + '>' + $toString(msg) + ') fails';
  if (NE$operator(expected, actual)) {
    var left = 0;
    var eLen = expected.length$getter();
    var aLen = actual.length$getter();
    while (true) {
      if (EQ$operator(left, eLen)) {
        assert(LT$operator(left, aLen));
        var snippet = actual.substring$named(2, $noargs, left, aLen);
        Expect$Dart._fail$$member_('' + $toString(defaultMessage) + '\nDiff:\n...[  ]\n...[ ' + $toString(snippet) + ' ]');
        return;
      }
      if (EQ$operator(left, aLen)) {
        assert(LT$operator(left, eLen));
        var snippet_0 = expected.substring$named(2, $noargs, left, eLen);
        Expect$Dart._fail$$member_('' + $toString(defaultMessage) + '\nDiff:\n...[  ]\n...[ ' + $toString(snippet_0) + ' ]');
        return;
      }
      if (NE$operator(expected.INDEX$operator(left), actual.INDEX$operator(left))) {
        break;
      }
      tmp$0 = left , (left = ADD$operator(tmp$0, 1) , tmp$0);
    }
    var right = 0;
    while (true) {
      if (EQ$operator(right, eLen)) {
        assert(LT$operator(right, aLen));
        var snippet_0_0 = actual.substring$named(2, $noargs, 0, SUB$operator(aLen, right));
        Expect$Dart._fail$$member_('' + $toString(defaultMessage) + '\nDiff:\n[  ]...\n[ ' + $toString(snippet_0_0) + ' ]...');
        return;
      }
      if (EQ$operator(right, aLen)) {
        assert(LT$operator(right, eLen));
        var snippet_1 = expected.substring$named(2, $noargs, 0, SUB$operator(eLen, right));
        Expect$Dart._fail$$member_('' + $toString(defaultMessage) + '\nDiff:\n[  ]...\n[ ' + $toString(snippet_1) + ' ]...');
        return;
      }
      if (NE$operator(expected.INDEX$operator(SUB$operator(SUB$operator(eLen, right), 1)), actual.INDEX$operator(SUB$operator(SUB$operator(aLen, right), 1)))) {
        break;
      }
      tmp$1 = right , (right = ADD$operator(tmp$1, 1) , tmp$1);
    }
    var eSnippet = expected.substring$named(2, $noargs, left, SUB$operator(eLen, right));
    var aSnippet = actual.substring$named(2, $noargs, left, SUB$operator(aLen, right));
    var diff = '\nDiff:\n...[ ' + $toString(eSnippet) + '} ]...\n...[ ' + $toString(aSnippet) + ' ]...';
    Expect$Dart._fail$$member_('' + $toString(defaultMessage) + '' + $toString(diff) + '');
  }
}
;
Expect$Dart.stringEquals$named = function($n, $o, expected, actual, reason){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 2:
      reason = $o.reason?(++seen , $o.reason):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return Expect$Dart.stringEquals$member(expected, actual, reason);
}
;
Expect$Dart.stringEquals$getter = function stringEquals$getter(){
  return Expect$Dart.stringEquals$named;
}
;
Expect$Dart.setEquals$member = function(expected, actual, reason){
  var missingSet = HashSetImplementation$Dart.HashSetImplementation$from$21$Factory(expected);
  missingSet.removeAll$named(1, $noargs, actual);
  var extraSet = HashSetImplementation$Dart.HashSetImplementation$from$21$Factory(actual);
  extraSet.removeAll$named(1, $noargs, expected);
  if (extraSet.isEmpty$named(0, $noargs) && missingSet.isEmpty$named(0, $noargs)) {
    return;
  }
  var msg = Expect$Dart._getMessage$$member_(reason);
  var sb = StringBufferImpl$Dart.StringBufferImpl$$Factory('Expect.setEquals(' + $toString(msg) + ') fails');
  if (!missingSet.isEmpty$named(0, $noargs)) {
    sb.add$named(1, $noargs, '\nExpected collection does not contain: ');
  }
  {
    var $0 = missingSet.iterator$named(0, $noargs);
    while ($0.hasNext$named(0, $noargs)) {
      var val = $0.next$named(0, $noargs);
      {
        sb.add$named(1, $noargs, '' + $toString(val) + ' ');
      }
    }
  }
  if (!extraSet.isEmpty$named(0, $noargs)) {
    sb.add$named(1, $noargs, '\nExpected collection should not contain: ');
  }
  {
    var $1 = extraSet.iterator$named(0, $noargs);
    while ($1.hasNext$named(0, $noargs)) {
      var val_1 = $1.next$named(0, $noargs);
      {
        sb.add$named(1, $noargs, '' + $toString(val_1) + ' ');
      }
    }
  }
  Expect$Dart._fail$$member_(sb.toString$named(0, $noargs));
}
;
Expect$Dart.setEquals$named = function($n, $o, expected, actual, reason){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 2:
      reason = $o.reason?(++seen , $o.reason):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return Expect$Dart.setEquals$member(expected, actual, reason);
}
;
Expect$Dart.setEquals$getter = function setEquals$getter(){
  return Expect$Dart.setEquals$named;
}
;
Expect$Dart.throws$member = function(f, check, reason){
  var e_0;
  try {
    f(0, $noargs);
  }
   catch (e) {
    e = $transformBrowserException(e);
    {
      e_0 = e;
      if (NE$operator(check, $Dart$Null)) {
        Expect$Dart.isTrue$member(check(1, $noargs, e_0), $Dart$Null);
      }
      return;
    }
  }
  var msg = Expect$Dart._getMessage$$member_(reason);
  Expect$Dart._fail$$member_('Expect.throws(' + $toString(msg) + ') fails');
}
;
Expect$Dart.throws$named = function($n, $o, f, check, reason){
  var seen = 0;
  var def = 0;
  switch ($n) {
    case 1:
      check = $o.check?(++seen , $o.check):(++def , $Dart$Null);
    case 2:
      reason = $o.reason?(++seen , $o.reason):(++def , $Dart$Null);
  }
  if (seen != $o.count || seen + def + $n != 3)
    $nsme();
  return Expect$Dart.throws$member(f, check, reason);
}
;
Expect$Dart.throws$getter = function throws$getter(){
  return Expect$Dart.throws$named;
}
;
Expect$Dart._getMessage$$member_ = function(reason){
  return EQ$operator(reason, $Dart$Null)?'':", '" + $toString(reason) + "'";
}
;
Expect$Dart._getMessage$$named_ = function($n, $o, reason){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return Expect$Dart._getMessage$$member_(reason);
}
;
Expect$Dart._getMessage$$getter_ = function _getMessage$$getter_(){
  return Expect$Dart._getMessage$$named_;
}
;
Expect$Dart._fail$$member_ = function(message){
  $Dart$ThrowException(ExpectException$Dart.ExpectException$$Factory(message));
}
;
Expect$Dart._fail$$named_ = function($n, $o, message){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return Expect$Dart._fail$$member_(message);
}
;
Expect$Dart._fail$$getter_ = function _fail$$getter_(){
  return Expect$Dart._fail$$named_;
}
;
Expect$Dart.$Constructor = function(){
  Object.$Constructor.call(this);
}
;
Expect$Dart.$Initializer = function(){
  Object.$Initializer.call(this);
}
;
Expect$Dart.Expect$$Factory = function(){
  var tmp$0 = new Expect$Dart;
  tmp$0.$typeInfo = Expect$Dart.$lookupRTT();
  Expect$Dart.$Initializer.call(tmp$0);
  Expect$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
