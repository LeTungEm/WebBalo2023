<?php
header("Access-Control-Allow-Origin: *");
// header("Content-Type: application/json;");
// header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS");
// header("Access-Control-Max-Age: 3600");
// header("Access-Control-Allow-Headers: Content-Type,
//     Access-Control-Allow-Headers, Authorization, X-Requested-With");


$action = isset($_POST["action"]) ? $_POST["action"] : '';
$message = array();
switch ($action) {
    case "upload":
        $file = $_FILES["file"];
        $targetFolder = $_POST["targetFolder"];
        $fileName = $_POST["fileName"];
        if($file["size"] > 0){
            if(!move_uploaded_file($file["tmp_name"], "../images/".$targetFolder."/".$fileName)){
                $message = false;
            }else{
                $message = true;
            }
        }
        break;
    case "delete":
        $path = $_POST["path"];
        (file_exists($path) && is_file($path))?unlink($path):"";
        $message = (file_exists($path) && is_file($path))?false:true;
        break;
}

header('Content-Type: application/json; charset=utf-8');
ob_clean();
echo json_encode($message);
?>