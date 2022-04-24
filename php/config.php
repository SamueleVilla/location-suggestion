<?php
// Database connection config

$dbhost = 'localhost';
$dbuser = 'root';
$dbpsw = '';
$dbname = 'localita';

$db = new mysqli($dbhost, $dbuser, $dbpsw, $dbname);

if (!$db) {
    die("Error: Connection to MySQL server has failed - " . $db->error);
}
