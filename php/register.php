<?php 
	header('Content-Type:text/html; charset=utf-8;'); 

	header('Access-Control-Allow-Origin:*');

	$con = mysqli_connect('localhost','root','','zwyz_server');

	mysqli_query($con,'set names utf8');
	$username = $_REQUEST["username"];
	$sql = "select * from user_table where username = '$username'";

	$query = mysqli_query($con , $sql);

	if($query && mysqli_fetch_assoc($query)){
		echo '账号已经存在';
	}
	else{
		echo '';
	}

 ?>