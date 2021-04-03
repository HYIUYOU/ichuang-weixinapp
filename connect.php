<?php
//header("Content-type: text/html; charset=utf8");
//1. 声明字符编码
 
$host='127.0.0.1';//数据库ip
 
$user='root';//用户名
 
$password='123456';//密码
 
$dbName='mysql';//要连接的数据库名
 
$con =new mysqli($host,$user,$password,$dbName,3308);//数据库连接
 
 
/*if ($con->connect_error) {
  echo "系统异常，连接数据库失败";
}
else
{
	echo "连接成功";
}*/
?>

<?php
//header("Content-type: text/html; charset=utf8");
include 'connect.php';//调用connect.php文件
$something=$_GET['something'];//'小明';//接收小程序传过来的参数'1';//
if ($con->connect_error) {
	die("连接失败：".$con->connect_error);
}
else 
{
 	$sql="SELECT * FROM `1students` WHERE `name` = '$something' ";//根据传入的参数查询数据库中的数据
 	$res=$con->query($sql);
 	echo $con->error;
 	print_r($res->fetch_all (MYSQLI_BOTH));
 	if ($res){
 		$data=$res->fetch_all(PDO::FETCH_LAZY);
 	}
 	else{
    	echo '查询出错！';
    }
  //fetch_all查询所有行
  
 	echo json_encode($data);//返回二维数组形式的值供小程序端用
}
?>

<?php
//header("Content-type: text/html; charset=utf8");
include 'connect.php';//调用connect.php文件
$something1=$_GET['something1'];//'小明';//
$something2=$_GET['something2'];//'16';//
$something3=$_GET['something3'];//'0';//
if ($con->connect_error) {
	die("连接失败：".$con->connect_error);
}
else 
{
 	$sql="INSERT INTO `1students`(`name`, `age`, `xb`) VALUES ('$something1','$something2','$something3');";
 	$res=$con->query($sql);
 	if($res){
    $arr['status'] = 1;
    $arr['info'] = 'success';
	}else{
    $arr['status'] = 0;
    $arr['info'] = 'error';
	}
	echo json_encode($arr);
	die;
}
 
?>

