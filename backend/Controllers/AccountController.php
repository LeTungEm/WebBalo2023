<?php
header("Access-Control-Allow-Origin: *");
// header("Content-Type: application/json;");
// header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS");
// header("Access-Control-Max-Age: 3600");
// header("Access-Control-Allow-Headers: Content-Type,
//     Access-Control-Allow-Headers, Authorization, X-Requested-With");

include("../Config/config.php");
include('../Models/Db.class.php');
include('../Models/Account.class.php');

$action = isset($_GET["action"]) ? $_GET["action"] : '';
$account = new Account();
$message = array();
switch ($action) {
    case "getAll":
        $message = $account->getAll();
        break;
    case "getByID":
        $accountId = $_GET["accountId"];
        $message = $account->getByID($accountId);
        break;
    case "checkLogin":
        $email = $_GET["email"];
        $password = $_GET["password"];
        $message = $account->checkLogin($email, $password);
        break;
    case "checkEmailExisted":
        $email = $_GET["email"];
        $message = $account->checkEmailExisted($email);
        break;
    case "insertAccount":
        $first_name = $_GET["first_name"];
        $last_name = $_GET["last_name"];
        $email = $_GET["email"];
        $password = $_GET["password"];
        $image = $_GET["image"];
        $gender = $_GET["gender"];
        $phone = $_GET["phone"];
        $address = $_GET["address"];
        $Birthday = $_GET["Birthday"];
        $roleID = $_GET["roleID"];
        $message = ($account->insertAccount($first_name, $last_name, $email, $password, $image, $gender, $phone, $address, $Birthday, $roleID) > 0)?true:false;
        break;
    case "deleteAccount":
        $accountId = $_GET["accountId"];
        $message = ($account->deleteAccount($accountId) > 0)?true:false;
        break;
    case "updateAccount":
        $accountId = $_GET["accountId"];
        $first_name = $_GET["first_name"];
        $last_name = $_GET["last_name"];
        $email = $_GET["email"];
        $password = $_GET["password"];
        $image = $_GET["image"];
        $gender = $_GET["gender"];
        $phone = $_GET["phone"];
        $address = $_GET["address"];
        $Birthday = $_GET["Birthday"];
        $roleID = $_GET["roleID"];
        $message = ($account->updateAccount($first_name, $last_name, $email, $password, $image, $gender, $phone, $address, $Birthday, $roleID, $accountId) > 0)?true:false;
        break;

}

header('Content-Type: application/json; charset=utf-8');
ob_clean();
echo json_encode($message);
?>