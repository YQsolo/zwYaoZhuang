<?php 
	header('Content-Type:text/html; charset=utf-8;'); 

	header('Access-Control-Allow-Origin:*');

	$con = mysqli_connect('localhost','root','','zwyz_server');

	mysqli_query($con,'set names utf8');

	$numindex = $_REQUEST["index"];

	$len = 11;

	$index = $numindex * $len;

	$sql = "select * from brand_table limit $index,$len";

	$query = mysqli_query($con , $sql);

	if($query && mysqli_num_rows($query)){
		while($row = mysqli_fetch_assoc($query)){
			$arr[] = $row;
		}
		//echo json_encode($arr);
		echo '{"code":"0","message":"请求成功","list":'.json_encode($arr).',"length":"'.mysqli_num_rows($query).'"}';	
	}
	else{
		echo '{"code":"1","message":"请求失败","list":[]}';	
	}



























 ?>