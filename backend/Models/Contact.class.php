<?php
    class Contact extends Db
    {
        function getAll(){
            $sql = 'select * from contact';
            return $this->select($sql);
        }

        function getByID($contactId){
            $sql = 'select * from contact where contactId = ?';
            $data = $this->select($sql, array($contactId));
            return ($data != null)?$data[0]:null;
        }

        function insertContact($contactName, $email, $author){
            $sql = "INSERT INTO `contact`(`contactName`, `email`, `author`) VALUES (?,?,?)";
            return $this->insert($sql, array($contactName, $email, $author));
        }

        function deleteContact($contactId){
            $sql = 'DELETE FROM `contact` WHERE contactId = ?';
            return $this->delete($sql, array($contactId));
        }

        
    }
?>