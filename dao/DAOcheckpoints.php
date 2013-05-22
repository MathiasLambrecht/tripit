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
}
