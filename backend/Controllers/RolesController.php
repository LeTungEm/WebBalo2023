<?php
header("Access-Control-Allow-Origin: *");
// header("Content-Type: application/json;");
// header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS");
// header("Access-Control-Max-Age: 3600");
// header("Access-Control-Allow-Headers: Content-Type,
//     Access-Control-Allow-Headers, Authorization, X-Requested-With");

include("../Config/config.php");
include('../Models/Db.class.php');
include('../Models/Role.class.php');

$action = isset($_GET["action"]) ? $_GET["action"] : '';
$role = new Role();
$message = array();
switch ($action) {
    case "getAll":
        $message = $role->getAll();
        break;
    case "getByID":
        $roleID = $_GET["roleID"];
        $message = $role->getByID($roleID);
        break;
    case "insertRole": 
        $roleName = $_GET["roleName"];      
        $message = ($role->insertRole($blogName) > 0)?'true':'false';
        break;
    case "deleteRole":
        $roleID = $_GET["roleID"];
        $message = $role->deleteRole($roleID);
        break;
    case "updateRole":
        $roleName = $_GET["roleName"];
        $roleID = $_GET["roleID"];
        $message = $about->updateRole($roleID,$roleName);
        break;

}

header('Content-Type: application/json; charset=utf-8');
ob_clean();
echo json_encode($message);
?>