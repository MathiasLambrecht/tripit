<?php

header("Content-Type: application/json");

define("WWW_ROOT",dirname(dirname(__FILE__)).DIRECTORY_SEPARATOR);

require_once WWW_ROOT. "api" .DIRECTORY_SEPARATOR. 'Slim'. DIRECTORY_SEPARATOR .'Slim.php';
require_once(WWW_ROOT.'dao'.DIRECTORY_SEPARATOR.'DAOuser.php');
require_once(WWW_ROOT.'dao'.DIRECTORY_SEPARATOR.'DAOtrips.php');
require_once(WWW_ROOT.'dao'.DIRECTORY_SEPARATOR.'DAOcheckpoints.php');
require_once(WWW_ROOT.'dao'.DIRECTORY_SEPARATOR.'DAOusertrips.php');

$app = new Slim();

$app->post('/login', 'login');
$app->post('/register', 'register');
$app->post('/newtrip', 'newtrip');
$app->post('/newcheckpoint', 'newcheckpoint');
$app->post('/newusertrip', 'newusertrip');

$app->get('/trips/:userid', 'trips');
$app->get('/users', 'users');

$app->delete('/deletetrip/:tripid', 'deletetrip');
$app->delete('/deletecheckpoint/:checkpointid', 'deletecheckpoint');
$app->delete('/deleteusertrip/:userid/:tripid', 'deleteusertrip');

$app->run();

function login()
{
    $data = Slim::getInstance()->request()->post();
    $daoUser = new DAOuser();
    echo json_encode($daoUser->login($data));
    exit;
}

function register()
{
    $data = Slim::getInstance()->request()->post();
    $daoUser = new DAOuser();
    echo json_encode($daoUser->addNewUser($data));
    exit;
}

function newtrip()
{
    $data = (array) json_decode(Slim::getInstance()->request()->getBody());
    $daoTrips = new DAOtrips();
    echo json_encode($daoTrips->addTrip($data));
    exit;
}

function newcheckpoint()
{
    $data = (array) json_decode(Slim::getInstance()->request()->getBody());
    $daoCheckpoints = new DAOcheckpoints();
    echo json_encode($daoCheckpoints->addNewCheckpoint($data));
    exit;
}

function newusertrip()
{
    $data = (array) json_decode(Slim::getInstance()->request()->getBody());
    $daoUserTrips = new DAOusertrips();
    echo json_encode($daoUserTrips->addUserTrip($data['userid'], $data['tripid']));
    exit;
}

function trips($userId)
{
    $daoTrips = new DAOtrips();
    echo json_encode($daoTrips->getTrips($userId));
    exit;
}

function users()
{
    $daoUser = new DAOuser();
    echo json_encode($daoUser->getAllUsers());
    exit;
}

function deletetrip($tripId)
{
    $daoTrips = new DAOtrips();
    echo json_encode($daoTrips->deleteTrip($tripId));
    exit;
}

function deletecheckpoint($checkpointId)
{
    $daoCheckpoints = new DAOcheckpoints();
    echo json_encode($daoCheckpoints->deleteCheckpoint($checkpointId));
    exit;
}

function deleteusertrip($userId, $tripId)
{
    $daoUserTrips = new DAOusertrips();
    echo json_encode($daoUserTrips->deleteUserTripByUserAndTrip($userId, $tripId));
    exit;
}
