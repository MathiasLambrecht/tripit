<?php

require_once(WWW_ROOT.'classes'.DIRECTORY_SEPARATOR.'DatabasePDO.php');
require_once(WWW_ROOT.'dao'.DIRECTORY_SEPARATOR.'DAOuser.php');
require_once(WWW_ROOT.'dao'.DIRECTORY_SEPARATOR.'DAOcheckpoints.php');
require_once(WWW_ROOT.'dao'.DIRECTORY_SEPARATOR.'DAOusertrips.php');

class DAOtrips
{
    public $dbh;
    private $daoUsers;
    private $daoCheckpoints;
    private $daoUserTrips;

    public function __construct()
    {
        $this->dbh = DatabasePDO::getInstance();
        $this->daoUsers = new DAOuser();
        $this->daoCheckpoints = new DAOcheckpoints();
        $this->daoUserTrips = new DAOusertrips();
    }

    public function deleteTrip($tripId)
    {
        $sql = 'DELETE FROM trips WHERE id = :trip_id';

        $stmt = $this->dbh->prepare($sql);
        $stmt->bindValue(':trip_id', $tripId);

        if($stmt->execute())
        {
            if($this->daoUserTrips->deleteUserTrip($tripId))
            {
                return true;
            }
        }
    }

    public function addTrip($data)
    {
        $sql = 'INSERT INTO  trips(name, startpoint, startdate, starttime)
                VALUES (:name, :startpoint, :startdate, :starttime)';

        $stmt = $this->dbh->prepare($sql);
        $stmt->bindValue(':name', $data['name']);
        $stmt->bindValue(':startpoint', $data['startpoint']);
        $stmt->bindValue(':startdate', $data['startdate']);
        $stmt->bindValue(':starttime', $data['starttime']);

        if($stmt->execute())
        {
            $tripId = $this->dbh->lastInsertId();

            if($this->daoUserTrips->addUserTrip($data['userid'], $tripId))
            {
                return true;
            }
        }
    }

    public function getTrips($userId)
    {
        $sql = 'SELECT * FROM trips
                INNER JOIN (SELECT user_id, trip_id FROM usertrips) as usertrips
                ON usertrips.user_id = :user_id
                AND usertrips.trip_id = trips.id';

        $stmt = $this->dbh->prepare($sql);
        $stmt->bindValue(':user_id', $userId);

        if($stmt->execute())
        {
            $trips = $stmt->fetchAll(PDO::FETCH_ASSOC);

            if(!empty($trips))
            {
                $arr = array();

                foreach($trips as $trip)
                {
                    $trip['checkpoints'] = $this->daoCheckpoints->getCheckpoints($trip['id']);
                    $trip['friends'] = $this->daoUsers->getUsers($trip['id']);
                    $arr[] = $trip;
                }

                return $arr;
            }
        }
        return array();
    }
}
