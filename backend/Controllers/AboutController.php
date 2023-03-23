<?php
header("Access-Control-Allow-Origin: *");
// header("Content-Type: application/json;");
// header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS");
// header("Access-Control-Max-Age: 3600");
// header("Access-Control-Allow-Headers: Content-Type,
//     Access-Control-Allow-Headers, Authorization, X-Requested-With");

include("../Config/config.php");
include('../Models/Db.class.php');
include('../Models/About.class.php');

$action = isset($_GET["action"]) ? $_GET["action"] : '';
$about = new About();
$message = array();
switch ($action) {
    case "getAll":
        $message = $about->getAll();
        break;
    case "getByID":
        $aboutId = $_GET["aboutId"];
        $message = $about->getByID($aboutId);
        break;
    case "insertAbout":
        $title = $_GET["title"];
        $image = $_GET["image"];
        $description = $_GET["description"];
        $message = ($about->insertAbout($title, $image, $description) > 0)?'true':'false';
        break;
    case "deleteAbout":
        $aboutId = $_GET["aboutId"];
        $message = $about->deleteAbout($aboutId);
        break;
    case "updateAbout":
        $aboutId = $_GET["aboutId"];
        $title = $_GET["title"];
        $image = $_GET["image"];
        $description = $_GET["description"];
        $message = $about->updateAbout($title, $image, $description, $aboutId);
        break;

}

header('Content-Type: application/json; charset=utf-8');
ob_clean();
echo json_encode($message);
?>