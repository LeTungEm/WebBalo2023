<?php
header("Access-Control-Allow-Origin: *");
// header("Content-Type: application/json;");
// header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS");
// header("Access-Control-Max-Age: 3600");
// header("Access-Control-Allow-Headers: Content-Type,
//     Access-Control-Allow-Headers, Authorization, X-Requested-With");

include("../Config/config.php");
include('../Models/Db.class.php');
include('../Models/Categories.class.php');

$action = isset($_GET["action"]) ? $_GET["action"] : '';
$categories = new Categories();
$message = array();
switch ($action) {
    case "getAll":
        $message = $categories->getAll();
        break;
    case "getByID":
        $catId = $_GET["catId"];
        $message = $categories->getByID($catId);
        break;

}

header('Content-Type: application/json; charset=utf-8');
ob_clean();
echo json_encode($message);
?>