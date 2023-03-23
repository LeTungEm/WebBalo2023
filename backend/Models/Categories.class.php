<?php
    class Categories extends Db
    {
        function getAll(){
            $sql = 'select * from categories';
            return $this->select($sql);
        }

        function getByID($catId){
            $sql = 'select * from categories where catId = ?';
            $data = $this->select($sql, array($catId));
            return ($data != null)?$data[0]:null;
        }
    }
?>