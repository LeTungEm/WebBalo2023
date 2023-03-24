<?php
    class Pages extends Db
    {
        function getAll(){
            $sql = 'select * from pages';
            return $this->select($sql);
        }

        function getByID($blogId){
            $sql = 'select * from pages where blogId = ?';
            $data = $this->select($sql, array($blogId));
            return ($data != null)?$data[0]:null;
        }

     

        function insertPages($blogName, $content, $image, $createDate, $author, $published){
            $sql = "INSERT INTO `pages`( `blogName`, `content`, `image`, `createDate`, `author`, `published`) VALUES (?,?,?,?,?,?)";
            return $this->insert($sql, array($blogName, $content, $image, $createDate, $author, $published));
        }

        function deletePages($blogId){
            $sql = 'DELETE FROM `pages` WHERE blogId = ?';
            return $this->delete($sql, array($blogId));
        }

        function updatePages($blogName, $content, $image, $createDate, $author, $published, $blogId){
            $sql = 'UPDATE `pages` SET `blogName`= ?,`content`= ?,`createDate`= ?,`image`= ?,`author`= ?,`published`= ? WHERE blogId = ?';
            return $this->update($sql, array($blogName, $content, $image, $createDate, $author, $published, $blogId));
        }
    }
?>