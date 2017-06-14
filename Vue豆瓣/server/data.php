<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: X-HTTP-Method-Override, Content-Type, x-requested-with, Authorization');
//$callback=$_GET['callback'];
$arr=array(
	array("name"=>"aaa","content"=>"aaa的内容"),
	array("name"=>"bbb","content"=>"bbb的内容"),
	array("name"=>"ccc","content"=>"ccc的内容"),
	array("name"=>"ddd","content"=>"ddd的内容")
);

// [ {name:"aaa","content":"aaaa内容"},{},{} ]


$json=json_encode($arr);
echo $json;

//echo  $callback."(".$json.")";


?>