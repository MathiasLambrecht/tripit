<?php

require_once(WWW_ROOT.'classes'.DIRECTORY_SEPARATOR.'DatabasePDO.php');

class DAOcheckpoints
{
    public $dbh;

    public function __construct()
    {
        $this->dbh = DatabasePDO::getInstance();
    }

    public function getCheckpoints($tripId)
    {
        $sql = 'SELECT * FROM checkpoints
                WHERE trip_id = :trip_id';

        $stmt = $this->dbh->prepare($sql);
        $stmt->bindValue(':trip_id', $tripId);

        if($stmt->execute())
        {
            return $stmt->fetchAll(PDO::FETCH_ASSOC);
        }
    }

    public function addNewCheckpoint($data)
    {
        $sql = 'INSERT INTO checkpoints(checkpoint, trip_id, cost, distance, time, transport)
                VALUES (:checkpoint, :trip_id, :cost, :distance, :time, :transport)';

        $stmt = $this->dbh->prepare($sql);
        $stmt->bindValue(':checkpoint', $data['checkpoint']);
        $stmt->bindValue(':trip_id', $data['tripid']);
        $stmt->bindValue(':cost', $data['cost']);
        $stmt->bindValue(':distance', $data['distance']);
        $stmt->bindValue(':time', $data['time']);
        $stmt->bindValue(':transport', $data['transport']);

        if($stmt->execute())
        {
            return true;
        }
    }
}
