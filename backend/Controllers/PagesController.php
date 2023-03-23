<?php
header("Access-Control-Allow-Origin: *");
// header("Content-Type: application/json;");
// header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS");
// header("Access-Control-Max-Age: 3600");
// header("Access-Control-Allow-Headers: Content-Type,
//     Access-Control-Allow-Headers, Authorization, X-Requested-With");

include("../Config/config.php");
include('../Models/Db.class.php');
include('../Models/Pages.class.php');

$action = isset($_GET["action"]) ? $_GET["action"] : '';
$pages = new Pages();
$message = array();
switch ($action) {
    case "getAll":
        $message = $pages->getAll();
        break;
    case "getByID":
        $blogId = $_GET["blogId"];
        $message = $pages->getByID($blogId);
        break;
    case "insertPages": 
        $blogName = $_GET["blogName"];
        $content = $_GET["content"];
        $image = $_GET["image"];
        $createDate = $_GET["createDate"];
        $author = $_GET["author"];
        $published = $_GET["published"];
        $message = ($pages->insertPages($blogName, $content, $image, $createDate, $author, $published) > 0)?'true':'false';
        break;
    case "deletePages":
        $blogId = $_GET["blogId"];
        $message = $pages->deletePages($aboutId);
        break;
    case "updatePages":
        $blogId = $_GET["blogId"];
        $blogName = $_GET["blogName"];
        $content = $_GET["content"];
        $image = $_GET["image"];
        $createDate = $_GET["createDate"];
        $author = $_GET["author"];
        $image = $_GET["image"];
        $published = $_GET["published"];
        $message = $about->updatePages($blogId,$blogName, $content, $image, $createDate, $author, $published);
        break;

}

header('Content-Type: application/json; charset=utf-8');
ob_clean();
echo json_encode($message);
?>