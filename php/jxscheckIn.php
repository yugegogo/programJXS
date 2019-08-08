<?php
header("content-type:text/html;charset=utf-8;");
// 一.传入前端数据
$username=$_POST["username"];
$userpass=$_POST["userpass"];


// 二.保存数据
// 1. 建立连接
$conn=mysql_connect('localhost','root','root');
if(!$conn){
	die('连接失败');
}else{
	// 2.选择数据库
	mysql_select_db('jxsCheckIn',$conn);
	// 3.执行SQL语句
	$sqlstr="insert into userMessage values('$username','$userpass')" ;
	$result=mysql_query($sqlstr);

	// 4.关闭数据库
	mysql_close($conn);
// 三、响应
	if($result==1){
		echo 1; 
	}else{
		echo 0;
	}
}
?>