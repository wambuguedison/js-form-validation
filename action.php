<?php
    #include "includes/db.php";
    if (isset($_POST['submit'])) {
        $fName = $_POST['fName'];
        $lName = $_POST['lName'];
        $username = $_POST['username'];
        $email = $_POST['email'];
        $pwd = md5($_POST['password']);

        //HANDLE DATA WITH PHP HERE

    }
?>