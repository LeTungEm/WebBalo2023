<?php
    class Role extends Db
    {
        function getAll(){
            $sql = 'select * from roles';
            return $this->select($sql);
        }

        function getByID($roleID){
            $sql = 'select * from roles where roleID = ?';
            $data = $this->select($sql, array($roleID));
            return ($data != null)?$data[0]:null;
        }

     

        function insertRole($roleName){
            $sql = "INSERT INTO `roles`( `roleName`) VALUES (?)";
            return $this->insert($sql, array($roleName));
        }

        function deleteRole($roleID){
            $sql = 'DELETE FROM `roles` WHERE roleID = ?';
            return $this->delete($sql, array($roleID));
        }

        function updateRole($roleName, $roleID){
            $sql = 'UPDATE `roles` SET `roleName`= ?  WHERE roleID = ?';
            return $this->update($sql, array($roleName, $roleID));
        }
    }
?>