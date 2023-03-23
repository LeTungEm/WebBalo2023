<?php
    class Account extends Db
    {
        function getAll(){
            $sql = 'select * from account';
            return $this->select($sql);
        }

        function getByID($accountId){
            $sql = 'select * from account where accountId = ?';
            $data = $this->select($sql, array($accountId));
            return ($data != null)?$data[0]:null;
        }

        function checkLogin($email, $password){
            $sql = "select * from `account` where email = ? and password = ?";
            $data = $this->select($sql, array($email, $password));
            return ($data != null)?$data[0]:null;
        }
        function checkEmailExisted($email){
            $sql = "select * from `account` where email = ?";
            $data = $this->select($sql, array($email));
            return ($data != null)?true:false;
        }
    
        function insertAccount($firstName, $lastName, $email, $passWord){
            $sql = "INSERT INTO `account`(`first_name`, `last_name`, `email`,
             `password`, `avatar`, `gender`, `phone`, `address`, `accountId`, `LastLogin`, `Birthday`, 
             `roleId`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)";
            return $this->insert($sql, array($firstName, $lastName, $email, $passWord));
        }

        function deleteAccount($accountId){
            $sql = 'DELETE FROM `account` WHERE accountId = ?';
            return $this->select($sql, array($accountId));
        }

        function updateAccount($firstName, $lastName, $email, $passWord){
            $sql = 'UPDATE `account` SET `first_name`= ?,`last_name`=?,`email`=?,
            `password`=?,`avatar`=?,`gender`=?,`phone`=?,`address`=?,`accountId`=?,
            `LastLogin`=?,`Birthday`=?,`roleId`=? WHERE accountId = ?';
            return $this->update($sql, array($firstName, $lastName, $email, $passWord));
        }
    }

?>