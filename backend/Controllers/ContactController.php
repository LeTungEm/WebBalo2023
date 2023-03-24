<?php
header("Access-Control-Allow-Origin: *");
// header("Content-Type: application/json;");
// header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS");
// header("Access-Control-Max-Age: 3600");
// header("Access-Control-Allow-Headers: Content-Type,
//     Access-Control-Allow-Headers, Authorization, X-Requested-With");

include("../Config/config.php");
include('../Models/Db.class.php');
include('../Models/Contact.class.php');

$action = isset($_GET["action"]) ? $_GET["action"] : '';
$contact = new Contact();
$message = array();
switch ($action) {
    case "getAll":
        $message = $contact->getAll();
        break;
    case "getByID":
        $contactId = $_GET["contactId"];
        $message = $contact->getByID($contactId);
        break;
    case "insertContact":
        $title = $_GET["title"];
        $image = $_GET["image"];
        $description = $_GET["description"];
        $message = ($contact->insertContact($title, $image, $description) > 0)?true:false;
        break;
    case "deleteContact":
        $contactId = $_GET["contactId"];
        $message = ($contact->deleteContact($contactId) > 0)?true:false;
        break;

}

header('Content-Type: application/json; charset=utf-8');
ob_clean();
echo json_encode($message);
?>