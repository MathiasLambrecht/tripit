<?php

require_once 'Config.php';

class DatabasePDO
{

    public static function getInstance()
    {
        $dsn = Config::DB_TYPE . ':host=' . Config::DB_HOST . ';dbname=' . Config::DB_NAME;
        $pdo = new PDO($dsn, Config::DB_USER, Config::DB_PASS);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $pdo->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
        return $pdo;
    }
}
