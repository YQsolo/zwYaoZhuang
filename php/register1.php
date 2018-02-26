<?php 
	header('Content-Type:text/html; charset=utf-8;'); 

	header('Access-Control-Allow-Origin:*');

	$con = mysqli_connect('localhost','root','','zwyz_server');

	mysqli_query($con,'set names utf8');

	$username = $_REQUEST["username"];
	$password = $_REQUEST["password"];

	$sql = "insert into user_table (username,password) values ('$username','$password')";

	$query = mysqli_query($con,$sql);

	if($query){
		echo '注册成功';
	}
	else{
		echo '注册出现问题,检查一下';
	}






 ?>