<?php

require_once(WWW_ROOT.'classes'.DIRECTORY_SEPARATOR.'DatabasePDO.php');

class DAOuser
{
    public $dbh;

    public function __construct()
    {
        $this->dbh = DatabasePDO::getInstance();
    }

    public function addNewUser($data)
    {
        $sql = 'INSERT INTO users(username, password)
                VALUES(:username, :password)';

        $stmt = $this->dbh->prepare($sql);
        $stmt->bindValue(':username', $data['username']);
        $stmt->bindValue(':password', sha1($data['password']));

        if($stmt->execute())
        {
            return $this->dbh->lastInsertId();
        }
    }
    
    public function login($data)
    {
        $sql = 'SELECT id, username FROM users
                WHERE username = :username
                AND password = :password';

        $stmt = $this->dbh->prepare($sql);
        $stmt->bindValue(':username', $data['username']);
        $stmt->bindValue(':password', sha1($data['password']));

        if($stmt->execute())
        {
            return $stmt->fetchAll(PDO::FETCH_ASSOC);
        }
    }

    public function getUsers($tripId)
    {
        $sql = 'SELECT * FROM users
                INNER JOIN (SELECT user_id, trip_id FROM usertrips) as usertrips
                ON usertrips.trip_id = :trip_id';

        $stmt = $this->dbh->prepare($sql);

        $stmt->bindValue(':trip_id', $tripId);

        if($stmt->execute())
        {
            return $stmt->fetchAll(PDO::FETCH_ASSOC);
        }
    }
}