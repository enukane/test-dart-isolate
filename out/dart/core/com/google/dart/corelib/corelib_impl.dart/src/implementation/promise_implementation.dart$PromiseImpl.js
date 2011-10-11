function PromiseImpl$Dart(){
}

PromiseImpl$Dart.$lookupRTT = function(typeArgs){
  return RTT.create($cls('PromiseImpl$Dart'), PromiseImpl$Dart.$RTTimplements, typeArgs);
}
;
PromiseImpl$Dart.$RTTimplements = function(rtt, typeArgs){
  PromiseImpl$Dart.$addTo(rtt, typeArgs);
  rtt.derivedTypes = [];
}
;
PromiseImpl$Dart.$addTo = function(target, typeArgs){
  var rtt = PromiseImpl$Dart.$lookupRTT(typeArgs);
  target.implementedTypes[rtt.classKey] = rtt;
  Promise$Dart.$addTo(target, [RTT.getTypeArg(target.typeArgs, 0)]);
}
;
PromiseImpl$Dart.prototype.$implements$PromiseImpl$Dart = 1;
PromiseImpl$Dart.prototype.$implements$Promise$Dart = 1;
PromiseImpl$Dart.prototype.$implements$Object$Dart = 1;
PromiseImpl$Dart.$Constructor = function(){
  Object.$Constructor.call(this);
}
;
PromiseImpl$Dart.$Initializer = function(){
  Object.$Initializer.call(this);
  this._state$$field_ = PromiseImpl$Dart.CREATED$getter();
  this._value$$field_ = $Dart$Null;
  this._error$$field_ = $Dart$Null;
  this._normalListeners$$field_ = $Dart$Null;
  this._errorListeners$$field_ = $Dart$Null;
  this._cancelListeners$$field_ = $Dart$Null;
}
;
PromiseImpl$Dart.PromiseImpl$$Factory = function($rtt){
  var tmp$0 = new PromiseImpl$Dart;
  tmp$0.$typeInfo = $rtt;
  PromiseImpl$Dart.$Initializer.call(tmp$0);
  PromiseImpl$Dart.$Constructor.call(tmp$0);
  return tmp$0;
}
;
PromiseImpl$Dart.fromValue$Constructor = function(val){
  Object.$Constructor.call(this);
}
;
PromiseImpl$Dart.fromValue$Initializer = function(val){
  Object.$Initializer.call(this);
  this._state$$field_ = PromiseImpl$Dart.COMPLETE_NORMAL$getter();
  this._value$$field_ = val;
  this._error$$field_ = $Dart$Null;
  this._normalListeners$$field_ = $Dart$Null;
  this._errorListeners$$field_ = $Dart$Null;
  this._cancelListeners$$field_ = $Dart$Null;
}
;
PromiseImpl$Dart.PromiseImpl$fromValue$11$Factory = function($rtt, val){
  var tmp$0 = new PromiseImpl$Dart;
  tmp$0.$typeInfo = $rtt;
  PromiseImpl$Dart.fromValue$Initializer.call(tmp$0, val);
  PromiseImpl$Dart.fromValue$Constructor.call(tmp$0, val);
  return tmp$0;
}
;
PromiseImpl$Dart.CREATED$named = function(){
  return PromiseImpl$Dart.CREATED$getter().apply(this, arguments);
}
;
PromiseImpl$Dart.CREATED$getter = function(){
  return 0;
}
;
PromiseImpl$Dart.RUNNING$named = function(){
  return PromiseImpl$Dart.RUNNING$getter().apply(this, arguments);
}
;
PromiseImpl$Dart.RUNNING$getter = function(){
  return 1;
}
;
PromiseImpl$Dart.COMPLETE_NORMAL$named = function(){
  return PromiseImpl$Dart.COMPLETE_NORMAL$getter().apply(this, arguments);
}
;
PromiseImpl$Dart.COMPLETE_NORMAL$getter = function(){
  return 2;
}
;
PromiseImpl$Dart.COMPLETE_ERROR$named = function(){
  return PromiseImpl$Dart.COMPLETE_ERROR$getter().apply(this, arguments);
}
;
PromiseImpl$Dart.COMPLETE_ERROR$getter = function(){
  return 3;
}
;
PromiseImpl$Dart.CANCELLED$named = function(){
  return PromiseImpl$Dart.CANCELLED$getter().apply(this, arguments);
}
;
PromiseImpl$Dart.CANCELLED$getter = function(){
  return 4;
}
;
PromiseImpl$Dart.COMPLETE_NORMAL_AFTER_CANCELLED$named = function(){
  return PromiseImpl$Dart.COMPLETE_NORMAL_AFTER_CANCELLED$getter().apply(this, arguments);
}
;
PromiseImpl$Dart.COMPLETE_NORMAL_AFTER_CANCELLED$getter = function(){
  return 5;
}
;
PromiseImpl$Dart.COMPLETE_ERROR_AFTER_CANCELLED$named = function(){
  return PromiseImpl$Dart.COMPLETE_ERROR_AFTER_CANCELLED$getter().apply(this, arguments);
}
;
PromiseImpl$Dart.COMPLETE_ERROR_AFTER_CANCELLED$getter = function(){
  return 6;
}
;
PromiseImpl$Dart.prototype._state$$named_ = function(){
  return this._state$$getter_().apply(this, arguments);
}
;
PromiseImpl$Dart.prototype._state$$getter_ = function(){
  return this._state$$field_;
}
;
PromiseImpl$Dart.prototype._state$$setter_ = function(tmp$0){
  this._state$$field_ = tmp$0;
}
;
PromiseImpl$Dart.prototype._value$$named_ = function(){
  return this._value$$getter_().apply(this, arguments);
}
;
PromiseImpl$Dart.prototype._value$$getter_ = function(){
  return this._value$$field_;
}
;
PromiseImpl$Dart.prototype._value$$setter_ = function(tmp$0){
  this._value$$field_ = tmp$0;
}
;
PromiseImpl$Dart.prototype._error$$named_ = function(){
  return this._error$$getter_().apply(this, arguments);
}
;
PromiseImpl$Dart.prototype._error$$getter_ = function(){
  return this._error$$field_;
}
;
PromiseImpl$Dart.prototype._error$$setter_ = function(tmp$0){
  this._error$$field_ = tmp$0;
}
;
PromiseImpl$Dart.prototype._normalListeners$$named_ = function(){
  return this._normalListeners$$getter_().apply(this, arguments);
}
;
PromiseImpl$Dart.prototype._normalListeners$$getter_ = function(){
  return this._normalListeners$$field_;
}
;
PromiseImpl$Dart.prototype._normalListeners$$setter_ = function(tmp$0){
  this._normalListeners$$field_ = tmp$0;
}
;
PromiseImpl$Dart.prototype._errorListeners$$named_ = function(){
  return this._errorListeners$$getter_().apply(this, arguments);
}
;
PromiseImpl$Dart.prototype._errorListeners$$getter_ = function(){
  return this._errorListeners$$field_;
}
;
PromiseImpl$Dart.prototype._errorListeners$$setter_ = function(tmp$0){
  this._errorListeners$$field_ = tmp$0;
}
;
PromiseImpl$Dart.prototype._cancelListeners$$named_ = function(){
  return this._cancelListeners$$getter_().apply(this, arguments);
}
;
PromiseImpl$Dart.prototype._cancelListeners$$getter_ = function(){
  return this._cancelListeners$$field_;
}
;
PromiseImpl$Dart.prototype._cancelListeners$$setter_ = function(tmp$0){
  this._cancelListeners$$field_ = tmp$0;
}
;
PromiseImpl$Dart.prototype.value$named = function(){
  return this.value$getter().apply(this, arguments);
}
;
PromiseImpl$Dart.prototype.value$getter = function(){
  if (!this.isDone$member()) {
    $Dart$ThrowException(ExceptionImplementation$Dart.ExceptionImplementation$$Factory('Attempted to get the value of an uncompleted promise.'));
  }
  if (this.hasError$member()) {
    $Dart$ThrowException(this._error$$getter_());
  }
   else {
    return this._value$$getter_();
  }
}
;
PromiseImpl$Dart.prototype.error$named = function(){
  return this.error$getter().apply(this, arguments);
}
;
PromiseImpl$Dart.prototype.error$getter = function(){
  if (!this.isDone$member()) {
    $Dart$ThrowException('Attempted to examine the state of an uncompleted promise.');
  }
  return this._error$$getter_();
}
;
PromiseImpl$Dart.prototype.isDone$member = function(){
  return NE$operator(this._state$$getter_(), PromiseImpl$Dart.CREATED$getter()) && NE$operator(this._state$$getter_(), PromiseImpl$Dart.RUNNING$getter());
}
;
PromiseImpl$Dart.prototype.isDone$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return PromiseImpl$Dart.prototype.isDone$member.call(this);
}
;
PromiseImpl$Dart.prototype.isDone$getter = function isDone$getter(){
  return $bind(PromiseImpl$Dart.prototype.isDone$named, this);
}
;
PromiseImpl$Dart.prototype.isCancelled$member = function(){
  return EQ$operator(this._state$$getter_(), PromiseImpl$Dart.CANCELLED$getter()) || EQ$operator(this._state$$getter_(), PromiseImpl$Dart.COMPLETE_NORMAL_AFTER_CANCELLED$getter()) || EQ$operator(this._state$$getter_(), PromiseImpl$Dart.COMPLETE_ERROR_AFTER_CANCELLED$getter());
}
;
PromiseImpl$Dart.prototype.isCancelled$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return PromiseImpl$Dart.prototype.isCancelled$member.call(this);
}
;
PromiseImpl$Dart.prototype.isCancelled$getter = function isCancelled$getter(){
  return $bind(PromiseImpl$Dart.prototype.isCancelled$named, this);
}
;
PromiseImpl$Dart.prototype.hasValue$member = function(){
  return EQ$operator(this._state$$getter_(), PromiseImpl$Dart.COMPLETE_NORMAL$getter()) || EQ$operator(this._state$$getter_(), PromiseImpl$Dart.COMPLETE_NORMAL_AFTER_CANCELLED$getter());
}
;
PromiseImpl$Dart.prototype.hasValue$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return PromiseImpl$Dart.prototype.hasValue$member.call(this);
}
;
PromiseImpl$Dart.prototype.hasValue$getter = function hasValue$getter(){
  return $bind(PromiseImpl$Dart.prototype.hasValue$named, this);
}
;
PromiseImpl$Dart.prototype.hasError$member = function(){
  return EQ$operator(this._state$$getter_(), PromiseImpl$Dart.COMPLETE_ERROR$getter()) || EQ$operator(this._state$$getter_(), PromiseImpl$Dart.COMPLETE_ERROR_AFTER_CANCELLED$getter());
}
;
PromiseImpl$Dart.prototype.hasError$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return PromiseImpl$Dart.prototype.hasError$member.call(this);
}
;
PromiseImpl$Dart.prototype.hasError$getter = function hasError$getter(){
  return $bind(PromiseImpl$Dart.prototype.hasError$named, this);
}
;
function PromiseImpl$Dart$complete$c0$16_16$Hoisted(dartc_scp$0, listener){
  listener(1, $noargs, dartc_scp$0.newVal);
}

function PromiseImpl$Dart$complete$c0$16_16$Hoisted$named($s0, $n, $o, listener){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return PromiseImpl$Dart$complete$c0$16_16$Hoisted($s0, listener);
}

PromiseImpl$Dart.prototype.complete$member = function(newVal){
  var dartc_scp$0 = {newVal:newVal};
  var tmp$1, tmp$2, tmp$3, tmp$0;
  if (EQ$operator(this._state$$getter_(), PromiseImpl$Dart.CANCELLED$getter())) {
    this._value$$setter_(tmp$0 = dartc_scp$0.newVal) , tmp$0;
    this._state$$setter_(tmp$1 = PromiseImpl$Dart.COMPLETE_NORMAL_AFTER_CANCELLED$getter()) , tmp$1;
    return;
  }
  if (this.isDone$member()) {
    $Dart$ThrowException('Attempted to complete an already completed promise.');
  }
  this._value$$setter_(tmp$2 = dartc_scp$0.newVal) , tmp$2;
  this._state$$setter_(tmp$3 = PromiseImpl$Dart.COMPLETE_NORMAL$getter()) , tmp$3;
  if (this._normalListeners$$getter_() != null) {
    this._normalListeners$$getter_().forEach$named(1, $noargs, $bind(PromiseImpl$Dart$complete$c0$16_16$Hoisted$named, $Dart$Null, dartc_scp$0));
  }
  this._clearListeners$$member_();
}
;
PromiseImpl$Dart.prototype.complete$named = function($n, $o, newVal){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return PromiseImpl$Dart.prototype.complete$member.call(this, newVal);
}
;
PromiseImpl$Dart.prototype.complete$getter = function complete$getter(){
  return $bind(PromiseImpl$Dart.prototype.complete$named, this);
}
;
PromiseImpl$Dart.prototype._clearListeners$$member_ = function(){
  var tmp$1, tmp$2, tmp$0;
  this._normalListeners$$setter_(tmp$0 = $Dart$Null) , tmp$0;
  this._errorListeners$$setter_(tmp$1 = $Dart$Null) , tmp$1;
  this._cancelListeners$$setter_(tmp$2 = $Dart$Null) , tmp$2;
}
;
PromiseImpl$Dart.prototype._clearListeners$$named_ = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return PromiseImpl$Dart.prototype._clearListeners$$member_.call(this);
}
;
PromiseImpl$Dart.prototype._clearListeners$$getter_ = function _clearListeners$$getter_(){
  return $bind(PromiseImpl$Dart.prototype._clearListeners$$named_, this);
}
;
function PromiseImpl$Dart$fail$c0$16_16$Hoisted(dartc_scp$0, listener){
  listener(1, $noargs, dartc_scp$0.err);
}

function PromiseImpl$Dart$fail$c0$16_16$Hoisted$named($s0, $n, $o, listener){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return PromiseImpl$Dart$fail$c0$16_16$Hoisted($s0, listener);
}

PromiseImpl$Dart.prototype.fail$member = function(err){
  var dartc_scp$0 = {err:err};
  var tmp$1, tmp$2, tmp$3, tmp$0;
  if (EQ$operator(this._state$$getter_(), PromiseImpl$Dart.CANCELLED$getter())) {
    this._error$$setter_(tmp$0 = dartc_scp$0.err) , tmp$0;
    this._state$$setter_(tmp$1 = PromiseImpl$Dart.COMPLETE_ERROR_AFTER_CANCELLED$getter()) , tmp$1;
    return;
  }
  if (this.isDone$member()) {
    $Dart$ThrowException("Can't fail an already completed promise.");
  }
  this._error$$setter_(tmp$2 = dartc_scp$0.err) , tmp$2;
  this._state$$setter_(tmp$3 = PromiseImpl$Dart.COMPLETE_ERROR$getter()) , tmp$3;
  if (this._errorListeners$$getter_() != null) {
    this._errorListeners$$getter_().forEach$named(1, $noargs, $bind(PromiseImpl$Dart$fail$c0$16_16$Hoisted$named, $Dart$Null, dartc_scp$0));
  }
  this._clearListeners$$member_();
}
;
PromiseImpl$Dart.prototype.fail$named = function($n, $o, err){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return PromiseImpl$Dart.prototype.fail$member.call(this, err);
}
;
PromiseImpl$Dart.prototype.fail$getter = function fail$getter(){
  return $bind(PromiseImpl$Dart.prototype.fail$named, this);
}
;
function PromiseImpl$Dart$cancel$c0$16_16$Hoisted(listener){
  listener(0, $noargs);
}

function PromiseImpl$Dart$cancel$c0$16_16$Hoisted$named($n, $o, listener){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return PromiseImpl$Dart$cancel$c0$16_16$Hoisted(listener);
}

PromiseImpl$Dart.prototype.cancel$member = function(){
  var tmp$0;
  if (!this.isDone$member()) {
    this._state$$setter_(tmp$0 = PromiseImpl$Dart.CANCELLED$getter()) , tmp$0;
    if (this._cancelListeners$$getter_() != null) {
      this._cancelListeners$$getter_().forEach$named(1, $noargs, $bind(PromiseImpl$Dart$cancel$c0$16_16$Hoisted$named, $Dart$Null));
    }
    this._clearListeners$$member_();
    return true;
  }
  return false;
}
;
PromiseImpl$Dart.prototype.cancel$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return PromiseImpl$Dart.prototype.cancel$member.call(this);
}
;
PromiseImpl$Dart.prototype.cancel$getter = function cancel$getter(){
  return $bind(PromiseImpl$Dart.prototype.cancel$named, this);
}
;
PromiseImpl$Dart.prototype.addCompleteHandler$member = function(completeHandler){
  var tmp$0;
  if (EQ$operator(this._state$$getter_(), PromiseImpl$Dart.COMPLETE_NORMAL$getter())) {
    completeHandler(1, $noargs, this._value$$getter_());
  }
   else {
    if (!this.isDone$member()) {
      if (EQ$operator(this._normalListeners$$getter_(), $Dart$Null)) {
        this._normalListeners$$setter_(tmp$0 = DoubleLinkedQueue$Dart.DoubleLinkedQueue$$Factory(DoubleLinkedQueue$Dart.$lookupRTT([Function$Dart.$lookupRTT()]))) , tmp$0;
      }
      this._normalListeners$$getter_().addLast$named(1, $noargs, completeHandler);
    }
  }
}
;
PromiseImpl$Dart.prototype.addCompleteHandler$named = function($n, $o, completeHandler){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return PromiseImpl$Dart.prototype.addCompleteHandler$member.call(this, completeHandler);
}
;
PromiseImpl$Dart.prototype.addCompleteHandler$getter = function addCompleteHandler$getter(){
  return $bind(PromiseImpl$Dart.prototype.addCompleteHandler$named, this);
}
;
PromiseImpl$Dart.prototype.addErrorHandler$member = function(errorHandler){
  var tmp$0;
  if (EQ$operator(this._state$$getter_(), PromiseImpl$Dart.COMPLETE_ERROR$getter())) {
    errorHandler(1, $noargs, this._error$$getter_());
  }
   else {
    if (!this.isDone$member()) {
      if (EQ$operator(this._errorListeners$$getter_(), $Dart$Null)) {
        this._errorListeners$$setter_(tmp$0 = DoubleLinkedQueue$Dart.DoubleLinkedQueue$$Factory(DoubleLinkedQueue$Dart.$lookupRTT([Function$Dart.$lookupRTT()]))) , tmp$0;
      }
      this._errorListeners$$getter_().addLast$named(1, $noargs, errorHandler);
    }
  }
}
;
PromiseImpl$Dart.prototype.addErrorHandler$named = function($n, $o, errorHandler){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return PromiseImpl$Dart.prototype.addErrorHandler$member.call(this, errorHandler);
}
;
PromiseImpl$Dart.prototype.addErrorHandler$getter = function addErrorHandler$getter(){
  return $bind(PromiseImpl$Dart.prototype.addErrorHandler$named, this);
}
;
PromiseImpl$Dart.prototype.addCancelHandler$member = function(cancelHandler){
  var tmp$0;
  if (this.isCancelled$member()) {
    cancelHandler(0, $noargs);
  }
   else {
    if (!this.isDone$member()) {
      if (EQ$operator(this._cancelListeners$$getter_(), $Dart$Null)) {
        this._cancelListeners$$setter_(tmp$0 = DoubleLinkedQueue$Dart.DoubleLinkedQueue$$Factory(DoubleLinkedQueue$Dart.$lookupRTT([Function$Dart.$lookupRTT()]))) , tmp$0;
      }
      this._cancelListeners$$getter_().addLast$named(1, $noargs, cancelHandler);
    }
  }
}
;
PromiseImpl$Dart.prototype.addCancelHandler$named = function($n, $o, cancelHandler){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return PromiseImpl$Dart.prototype.addCancelHandler$member.call(this, cancelHandler);
}
;
PromiseImpl$Dart.prototype.addCancelHandler$getter = function addCancelHandler$getter(){
  return $bind(PromiseImpl$Dart.prototype.addCancelHandler$named, this);
}
;
function PromiseImpl$Dart$then$c0$16_16$Hoisted(dartc_scp$0, dartc_scp$1, val){
  dartc_scp$1.promise.complete$named(1, $noargs, dartc_scp$0.callback(1, $noargs, val));
}

function PromiseImpl$Dart$then$c0$16_16$Hoisted$named($s0, $s1, $n, $o, val){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return PromiseImpl$Dart$then$c0$16_16$Hoisted($s0, $s1, val);
}

function PromiseImpl$Dart$then$c1$16_16$Hoisted(dartc_scp$1, err){
  dartc_scp$1.promise.fail$named(1, $noargs, err);
}

function PromiseImpl$Dart$then$c1$16_16$Hoisted$named($s0, $n, $o, err){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return PromiseImpl$Dart$then$c1$16_16$Hoisted($s0, err);
}

function PromiseImpl$Dart$then$c2$16_16$Hoisted(dartc_scp$1){
  dartc_scp$1.promise.fail$named(1, $noargs, 'Source promise was cancelled');
}

function PromiseImpl$Dart$then$c2$16_16$Hoisted$named($s0, $n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return PromiseImpl$Dart$then$c2$16_16$Hoisted($s0);
}

PromiseImpl$Dart.prototype.then$member = function(callback){
  var dartc_scp$0 = {callback:callback};
  var dartc_scp$1;
  dartc_scp$1 = {};
  dartc_scp$1.promise = PromiseImpl$Dart.PromiseImpl$$Factory(PromiseImpl$Dart.$lookupRTT());
  this.addCompleteHandler$member($bind(PromiseImpl$Dart$then$c0$16_16$Hoisted$named, $Dart$Null, dartc_scp$0, dartc_scp$1));
  this.addErrorHandler$member($bind(PromiseImpl$Dart$then$c1$16_16$Hoisted$named, $Dart$Null, dartc_scp$1));
  this.addCancelHandler$member($bind(PromiseImpl$Dart$then$c2$16_16$Hoisted$named, $Dart$Null, dartc_scp$1));
  return dartc_scp$1.promise;
  dartc_scp$1 = $Dart$Null;
}
;
PromiseImpl$Dart.prototype.then$named = function($n, $o, callback){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return PromiseImpl$Dart.prototype.then$member.call(this, callback);
}
;
PromiseImpl$Dart.prototype.then$getter = function then$getter(){
  return $bind(PromiseImpl$Dart.prototype.then$named, this);
}
;
function PromiseImpl$Dart$flatten$c0$16_16$Hoisted(dartc_scp$1, lastVal){
  dartc_scp$1.res.complete$named(1, $noargs, lastVal);
}

function PromiseImpl$Dart$flatten$c0$16_16$Hoisted$named($s0, $n, $o, lastVal){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return PromiseImpl$Dart$flatten$c0$16_16$Hoisted($s0, lastVal);
}

function PromiseImpl$Dart$flatten$c1$16_16$Hoisted(dartc_scp$1, thisVal){
  var tmp$0;
  if (!!(tmp$0 = thisVal , tmp$0 != null && tmp$0.$implements$Promise$Dart)) {
    var thisPromise = thisVal.dynamic$getter();
    thisPromise.flatten$named(0, $noargs).then$named(1, $noargs, $bind(PromiseImpl$Dart$flatten$c0$16_16$Hoisted$named, $Dart$Null, dartc_scp$1));
  }
   else {
    dartc_scp$1.res.complete$named(1, $noargs, thisVal);
  }
}

function PromiseImpl$Dart$flatten$c1$16_16$Hoisted$named($s0, $n, $o, thisVal){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return PromiseImpl$Dart$flatten$c1$16_16$Hoisted($s0, thisVal);
}

PromiseImpl$Dart.prototype.flatten$member = function(){
  var dartc_scp$1;
  dartc_scp$1 = {};
  dartc_scp$1.res = PromiseImpl$Dart.PromiseImpl$$Factory(PromiseImpl$Dart.$lookupRTT());
  this.then$member($bind(PromiseImpl$Dart$flatten$c1$16_16$Hoisted$named, $Dart$Null, dartc_scp$1));
  return dartc_scp$1.res;
  dartc_scp$1 = $Dart$Null;
}
;
PromiseImpl$Dart.prototype.flatten$named = function($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return PromiseImpl$Dart.prototype.flatten$member.call(this);
}
;
PromiseImpl$Dart.prototype.flatten$getter = function flatten$getter(){
  return $bind(PromiseImpl$Dart.prototype.flatten$named, this);
}
;
function PromiseImpl$Dart$join$c0$16_16$Hoisted(dartc_scp$0, dartc_scp$3, value){
  if (dartc_scp$0.joinDone(1, $noargs, dartc_scp$3.promise)) {
    this.complete$member(value);
  }
}

function PromiseImpl$Dart$join$c0$16_16$Hoisted$named($s0, $s1, $n, $o, value){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return PromiseImpl$Dart$join$c0$16_16$Hoisted.call(this, $s0, $s1, value);
}

function PromiseImpl$Dart$join$c1$16_16$Hoisted(err){
  this.fail$member(err);
}

function PromiseImpl$Dart$join$c1$16_16$Hoisted$named($n, $o, err){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return PromiseImpl$Dart$join$c1$16_16$Hoisted.call(this, err);
}

function PromiseImpl$Dart$join$c2$16_16$Hoisted(dartc_scp$0, promise){
  var dartc_scp$3 = {promise:promise};
  dartc_scp$3.promise.addCompleteHandler$named(1, $noargs, $bind(PromiseImpl$Dart$join$c0$16_16$Hoisted$named, this, dartc_scp$0, dartc_scp$3));
  dartc_scp$3.promise.addErrorHandler$named(1, $noargs, $bind(PromiseImpl$Dart$join$c1$16_16$Hoisted$named, this));
}

function PromiseImpl$Dart$join$c2$16_16$Hoisted$named($s0, $n, $o, promise){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return PromiseImpl$Dart$join$c2$16_16$Hoisted.call(this, $s0, promise);
}

function PromiseImpl$Dart$join$c3$16_16$Hoisted(promise){
  promise.cancel$named(0, $noargs);
}

function PromiseImpl$Dart$join$c3$16_16$Hoisted$named($n, $o, promise){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return PromiseImpl$Dart$join$c3$16_16$Hoisted(promise);
}

function PromiseImpl$Dart$join$c4$16_16$Hoisted(dartc_scp$0){
  dartc_scp$0.promises.forEach$named(1, $noargs, $bind(PromiseImpl$Dart$join$c3$16_16$Hoisted$named, $Dart$Null));
}

function PromiseImpl$Dart$join$c4$16_16$Hoisted$named($s0, $n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return PromiseImpl$Dart$join$c4$16_16$Hoisted($s0);
}

PromiseImpl$Dart.prototype.join$member = function(promises, joinDone){
  var dartc_scp$0 = {promises:promises, joinDone:joinDone};
  dartc_scp$0.promises.forEach$named(1, $noargs, $bind(PromiseImpl$Dart$join$c2$16_16$Hoisted$named, this, dartc_scp$0));
  this.addCancelHandler$member($bind(PromiseImpl$Dart$join$c4$16_16$Hoisted$named, $Dart$Null, dartc_scp$0));
}
;
PromiseImpl$Dart.prototype.join$named = function($n, $o, promises, joinDone){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return PromiseImpl$Dart.prototype.join$member.call(this, promises, joinDone);
}
;
PromiseImpl$Dart.prototype.join$getter = function join$getter(){
  return $bind(PromiseImpl$Dart.prototype.join$named, this);
}
;
function PromiseImpl$Dart$waitFor$c0$16_16$Hoisted(dartc_scp$0, dartc_scp$1, p){
  return EQ$operator(dartc_scp$1.counter = ADD$operator(dartc_scp$1.counter, 1), dartc_scp$0.n);
}

function PromiseImpl$Dart$waitFor$c0$16_16$Hoisted$named($s0, $s1, $n, $o, p){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return PromiseImpl$Dart$waitFor$c0$16_16$Hoisted($s0, $s1, p);
}

function PromiseImpl$Dart$waitFor$c1$16_16$Hoisted(promise){
  if (!promise.isDone$named(0, $noargs)) {
    promise.cancel$named(0, $noargs);
  }
}

function PromiseImpl$Dart$waitFor$c1$16_16$Hoisted$named($n, $o, promise){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return PromiseImpl$Dart$waitFor$c1$16_16$Hoisted(promise);
}

function PromiseImpl$Dart$waitFor$c2$16_16$Hoisted(dartc_scp$0, val){
  dartc_scp$0.promises.forEach$named(1, $noargs, $bind(PromiseImpl$Dart$waitFor$c1$16_16$Hoisted$named, $Dart$Null));
}

function PromiseImpl$Dart$waitFor$c2$16_16$Hoisted$named($s0, $n, $o, val){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return PromiseImpl$Dart$waitFor$c2$16_16$Hoisted($s0, val);
}

PromiseImpl$Dart.prototype.waitFor$member = function(promises, n){
  var dartc_scp$0 = {promises:promises, n:n};
  var dartc_scp$1;
  dartc_scp$1 = {};
  dartc_scp$1.counter = 0;
  this.join$member(dartc_scp$0.promises, $bind(PromiseImpl$Dart$waitFor$c0$16_16$Hoisted$named, $Dart$Null, dartc_scp$0, dartc_scp$1));
  this.addCompleteHandler$member($bind(PromiseImpl$Dart$waitFor$c2$16_16$Hoisted$named, $Dart$Null, dartc_scp$0));
  dartc_scp$1 = $Dart$Null;
}
;
PromiseImpl$Dart.prototype.waitFor$named = function($n, $o, promises, n){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 2)
    $nsme();
  return PromiseImpl$Dart.prototype.waitFor$member.call(this, promises, n);
}
;
PromiseImpl$Dart.prototype.waitFor$getter = function waitFor$getter(){
  return $bind(PromiseImpl$Dart.prototype.waitFor$named, this);
}
;
