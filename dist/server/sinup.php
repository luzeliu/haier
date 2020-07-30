<?php
header("content-type:text/html;charset=utf-8");
open_sql();
function open_sql(){
    // 数据库连接(地址，用户名，密码，库名，端口号)
   $sql=mysqli_connect("localhost","root","root","test","3306");
//    获取当前是否连接上数据库 如果返回为1就是没有连接上
    if(mysqli_connect_errno()) return;
    
    // 使用MySql语句 mysqli_query(打开的数据库对象,"MySQL语句")
    $res=mysqli_query($sql,"SELECT * FROM `haier` WHERE `pho`='$_POST[pho]'");
    // $res->num_rows  表示查询到的结果有多少条
    if($res->num_rows>0){
        echo "<script>
            location.href='http://127.0.0.1:8010/sinup.html';
            alert('用户名重复，请重新输入');
         </script>";
         return;
    }
    // echo $_POST["pho"];
    // echo $_POST["pas"];
    // echo $_POST["emi"];
    $result=mysqli_query($sql,"INSERT INTO `haier`(`pho`, `pas`, `emi`) VALUES ('$_POST[pho]','$_POST[pas]','$_POST[emi]')");
    if($result){
        echo "<script>
             location.href='http://127.0.0.1:8010/sinin.html';
        </script>";
    }
}