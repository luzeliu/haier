<?php
    header("content-type:text/html;charset=utf-8");
    open_sql();
    function open_sql()
    {
        $sql = mysqli_connect("localhost", "root", "root", "test", "3306");
        if (mysqli_connect_errno()) return;
        $res = mysqli_query($sql, "SELECT * FROM `haier` WHERE `pho`='$_POST[pho]'");
        if ($res->num_rows > 0) {
            //  从结果中取出第一条数据，变为数组，这个数组中含有索引数据和关联数据两条
            //  $arr=mysqli_fetch_array($res);
            // 从结果中取出第一条数据，变为数组，这个数组关联数组
            $arr = mysqli_fetch_assoc($res);
            if ($arr["pas"] === $_POST["pas"]) {
                // show_list($sql);
                echo "<script>
                location.href='http://127.0.0.1:8010/index.html';
                </script>";
                
            } else {
                echo "<script>
            location.href='http://127.0.0.1:8010/sinin.html';
            alert('密码错误，请重新输入');
         </script>";
         return;
            }
        } else {
            echo "<script>
            location.href='http://127.0.0.1:8010/sinup.html';
            alert('没有找到该用户名');
         </script>";
         return;
            
        }
    }