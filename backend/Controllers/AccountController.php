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

    case "insertAccount":
        $firstName = $_GET["first_name"];
        $lastName = $_GET["last_name"];
        $email = $_GET["email"];
        $passWord=$_GET["email"];
        $message = $account->insertAccount($firstName, $lastName, $email, $passWord);
        break;
    case "deleteAccount":
        $aboutId = $_GET["accountId"];
        $message = $account->deleteAccount($accountId);
        break;
    case "updateAccount":
        $firstName = $_GET["first_name"];
        $lastName = $_GET["last_name"];
        $email = $_GET["email"];
        $passWord=$_GET["email"];
        $message = $account->updateAccount($firstName, $lastName, $email, $passWord);
        break;

}

header('Content-Type: application/json; charset=utf-8');
ob_clean();
echo json_encode($message);
?>