<?php
header("Access-Control-Allow-Origin:*");

  
/*
{
  "flag":1,
  "info":[
	  {"id":1001,"name":"java","price":50},
	  {"id":1002,"name":"javaScript","price":150},
	  {"id":1003,"name":"PHP","price":60},
	  {"id":1004,"name":"python","price":80},
	  {"id":1005,"name":"ruby","price":90}
  ]
}

*/


 //$callback=$_GET['callback'];
$id=$_GET['name'];

 $result=array(
	  "flag"=>1,
	  "info"=>array(
	  	 array("id"=>1001,"name"=>"java1111","price"=>50),
	  	 array("id"=>1002,"name"=>"javaScript","price"=>510),
	  	 array("id"=>1003,"name"=>"PHP","price"=>530),
	  	 array("id"=>1004,"name"=>"python","price"=>350),
	  	 array("id"=>1005,"name"=>"ruby","price"=>590)
	  )
 
 );


$json=json_encode($result);


//echo $callback."(".$json.")";

echo $id;




?>