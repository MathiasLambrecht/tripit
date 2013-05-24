<?php

require_once(WWW_ROOT.'classes'.DIRECTORY_SEPARATOR.'DatabasePDO.php');

class DAOusertrips
{
    public $dbh;

    public function __construct()
    {
        $this->dbh = DatabasePDO::getInstance();
    }

    public function addUserTrip($userId, $tripId)
    {
        $sql = 'INSERT INTO usertrips(user_id, trip_id)
                VALUES (:user_id, :trip_id)';

        $stmt = $this->dbh->prepare($sql);

        $stmt->bindValue(':user_id', $userId);
        $stmt->bindValue(':trip_id', $tripId);

        if($stmt->execute())
        {
            return true;
        }
    }

    public function deleteUserTrip($tripId)
    {
        $sql = 'DELETE FROM usertrips WHERE trip_id = :trip_id';

        $stmt = $this->dbh->prepare($sql);
        $stmt->bindValue(':trip_id', $tripId);

        if($stmt->execute())
        {
            return true;
        }
    }

    public function deleteUserTripByUserAndTrip($userId, $tripId)
    {
        $sql = 'DELETE FROM usertrips
                WHERE trip_id = :trip_id
                AND user_id = :user_id';

        $stmt = $this->dbh->prepare($sql);
        $stmt->bindValue(':trip_id', $tripId);
        $stmt->bindValue(':user_id', $userId);

        if($stmt->execute())
        {
            return true;
        }
    }
}