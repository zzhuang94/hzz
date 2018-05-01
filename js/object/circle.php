<?php

$a = ['A'];
$b = ['B'];
$a[] = $b;
$b[] = $a;

echo json_encode($a);
echo "\n";
echo json_encode($b);
