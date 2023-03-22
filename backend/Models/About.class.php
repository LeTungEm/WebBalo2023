<?php
    class About extends Db
    {
        function getAll(){
            $sql = 'select * from about';
            return $this->select($sql);
        }

        function getByID($aboutId){
            $sql = 'select * from about where aboutId = ?';
            $data = $this->select($sql, array($aboutId));
            return ($data != null)?$data[0]:null;
        }

        function insertAbout($title, $image, $description){
            $sql = "INSERT INTO `about`(`title`, `image`, `description`) VALUES (?,?,?)";
            return $this->insert($sql, array($title, $image, $description));
        }

        function deleteAbout($aboutId){
            $sql = 'DELETE FROM `about` WHERE aboutId = ?';
            return $this->select($sql, array($aboutId));
        }

        function updateAbout($title, $image, $description, $aboutId){
            $sql = 'UPDATE `about` SET `title`= ?,`image`= ?, `description`= ? WHERE aboutId = ?';
            return $this->update($sql, array($title, $image, $description, $aboutId));
        }
    }
?>