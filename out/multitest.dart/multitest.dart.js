function multitestecd992$$createIsolate$c0$16_16$Hoisted(port){
  var tmp$0;
  var message = (tmp$0 = LinkedHashMapImplementation$Dart.LinkedHashMapImplementation$$Factory(LinkedHashMapImplementation$Dart.$lookupRTT()) , tmp$0.ASSIGN_INDEX$operator('id', 'init') , tmp$0.ASSIGN_INDEX$operator('args', RTT.setTypeInfo(['ameno'], Array.$lookupRTT())) , tmp$0);
  port.call$named(1, $noargs, message);
}

function multitestecd992$$createIsolate$c0$16_16$Hoisted$named($n, $o, port){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return multitestecd992$$createIsolate$c0$16_16$Hoisted(port);
}

function multitestecd992$createIsolate$member(name_0){
  multitestecd992$MyIsolate$Dart.MyIsolate$$Factory().spawn$named(0, $noargs).then$named(1, $noargs, $bind(multitestecd992$$createIsolate$c0$16_16$Hoisted$named, $Dart$Null));
}

function multitestecd992$createIsolate$named($n, $o, name_0){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 1)
    $nsme();
  return multitestecd992$createIsolate$member(name_0);
}

function multitestecd992$doIt$member(){
  multitestecd992$createIsolate$member('hello');
  multitestecd992$createIsolate$member('goodbye');
}

function multitestecd992$doIt$named($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return multitestecd992$doIt$member();
}

function multitestecd992$$main$c0$_$16_4_2$Hoisted(){
  multitestecd992$doIt$member();
}

function multitestecd992$$main$c0$_$16_4_2$Hoisted$named($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return multitestecd992$$main$c0$_$16_4_2$Hoisted.call(this);
}

function multitestecd992$main$member(){
  Isolate$Dart.bind$member($bind(multitestecd992$$main$c0$_$16_4_2$Hoisted$named, this));
}

function multitestecd992$main$named($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return multitestecd992$main$member();
}

