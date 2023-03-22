<?php
header("Access-Control-Allow-Origin: *");
// header("Content-Type: application/json;");
// header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS");
// header("Access-Control-Max-Age: 3600");
// header("Access-Control-Allow-Headers: Content-Type,
//     Access-Control-Allow-Headers, Authorization, X-Requested-With");

include("../Config/config.php");
include('../Models/Db.class.php');
include('../Models/Product.class.php');

$action = isset($_GET["action"]) ? $_GET["action"] : '';
$products = new Product();
$message = array();
switch ($action) {
    case "getAll":
        $message = $products->getAll();
        break;
    case "getByID":
        $productID = $_GET["productID"];
        $message = $products->getByID($productID);
        break;
    case "getByCategoryID":
        $catId = $_GET["catId"];
        $message = $products->getByCategoryID($catId);
        break;
    case "insertProduct":
        $productName = $_GET["productName"];
        $description = $_GET["description"];
        $createDate = $_GET["createDate"];
        $price = $_GET["price"];
        $shortDescription = $_GET["shortDescription"];
        $image_1 = $_GET["image_1"];
        $image_2 = $_GET["image_2"];
        $image_3 = $_GET["image_3"];
        $image_4 = $_GET["image_4"];
        $amount = $_GET["amount"];
        $dateChange = $_GET["dateChange"];
        $catId = $_GET["catId"];
        $message = ($products->insertProduct($productName, $description, $createDate, $price, $shortDescription, $image_1, $image_2, $image_3, $image_4, $amount, $dateChange, $catId) > 0)?'true':'false';
        break;
    case "updateProduct":
        $productID = $_GET["productID"];
        $productName = $_GET["productName"];
        $description = $_GET["description"];
        $createDate = $_GET["createDate"];
        $price = $_GET["price"];
        $shortDescription = $_GET["shortDescription"];
        $image_1 = $_GET["image_1"];
        $image_2 = $_GET["image_2"];
        $image_3 = $_GET["image_3"];
        $image_4 = $_GET["image_4"];
        $amount = $_GET["amount"];
        $dateChange = $_GET["dateChange"];
        $catId = $_GET["catId"];
        $message = ($products->updateProduct($productName, $description, $createDate, $price, $shortDescription, $image_1, $image_2, $image_3, $image_4, $amount, $dateChange, $catId, $productID) > 0)?'true':'false';
        break;
}

header('Content-Type: application/json; charset=utf-8');
ob_clean();
echo json_encode($message);
?>