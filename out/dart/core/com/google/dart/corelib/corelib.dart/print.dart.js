function print$getter(){
  return _Logger$Dart.print$named;
}

function print$named($n, $o){
  var seen = 0;
  var def = 0;
  if (seen != $o.count || seen + def + $n != 0)
    $nsme();
  return print$getter();
}

