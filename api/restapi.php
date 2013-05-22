<?php

header("Content-Type: application/json");

define("WWW_ROOT",dirname(dirname(__FILE__)).DIRECTORY_SEPARATOR);

require_once WWW_ROOT. "api" .DIRECTORY_SEPARATOR. 'Slim'. DIRECTORY_SEPARATOR .'Slim.php';
require_once(WWW_ROOT.'dao'.DIRECTORY_SEPARATOR.'DAOuser.php');
require_once(WWW_ROOT.'dao'.DIRECTORY_SEPARATOR.'DAOtrips.php');

$app = new Slim();

$app->post('/login', 'login');
$app->post('/register', 'register');

$app->get('/trips/:userid', 'trips');

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

function trips($userId)
{
    $daoTrips = new DAOtrips();
    echo json_encode($daoTrips->getTrips($userId));
    exit;
}
