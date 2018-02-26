<?php 
	header('Content-Type:text/html; charset=utf-8;'); 

	header('Access-Control-Allow-Origin:*');

	$con = mysqli_connect('localhost','root','','zwyz_server');

	mysqli_query($con,'set names utf8');
	$username = $_REQUEST["username"];
	$password = $_REQUEST["password"];

	$sql = "select * from user_table where username = '$username' && password = '$password'";

	$query = mysqli_query($con , $sql);

	if($query && mysqli_fetch_assoc($query)){
		echo '登录成功';
	}
	else{
		echo '密码错误!';
	}






 ?>