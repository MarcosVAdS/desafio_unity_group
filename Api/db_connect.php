<?php 

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: POST, GET, PUT, DELETE");
    header("Content-Type: application/json; charset=utf-8");
    header("Access-Control-Allow-Headers: Content-Type");

    $localhost = "localhost"; 
    $username = "root"; 
    $password = ""; 
    $dbname = "unity"; 
    
    // create connection 
    $connect = new mysqli($localhost, $username, $password, $dbname); 
    
    // check connection 
    if($connect->connect_error) {
        die("connection failed : " . $connect->connect_error);
    }
    
?>