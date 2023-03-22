<?php
    class Product extends Db
    {
        function getAll(){
            $sql = 'select * from products';
            return $this->select($sql);
        }

        function getByID($productID){
            $sql = 'select * from products where productID = ?';
            $data = $this->select($sql, array($productID));
            return ($data != null)?$data[0]:null;
        }

        function getByCategoryID($catId){
            $sql = 'select * from products where catId = ?';
            $data = $this->select($sql, array($catId));
            return ($data != null)?$data[0]:null;
        }

        function insertProduct($productName, $description, $createDate, $price, $shortDescription, $image_1, $image_2, $image_3, $image_4, $amount, $dateChange, $catId){
            $sql = "INSERT INTO `products`(`productName`, `description`, `createDate`, `price`, `shortDescription`, `image_1`, `image_2`, `image_3`, `image_4`, `amount`, `dateChange`, `catId`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)";
            return $this->insert($sql, array($productName, $description, $createDate, $price, $shortDescription, $image_1, $image_2, $image_3, $image_4, $amount, $dateChange, $catId));
        }

        function deleteProduct($productID){
            $sql = 'DELETE FROM `products` WHERE productID = ?';
            return $this->select($sql, array($productID));
        }
    }
?>