<?php

require_once '../php-includes/connect.inc.php';

$title = $_POST['title'];
$description = $_POST['description'];

$stmt = $db->prepare("INSERT INTO movies (title,description) VALUES (?,?)");
$stmt->bind_param('ss', $title,$description);
$stmt->execute();
$stmt->close();


$maxidsql="Select max(movie_id) as movie_id from movies";
$maxidresult=$db->query($maxidsql);
$maxidnumrows=$maxidresult->num_rows;

while($row=$maxidresult->fetch_object()){
    $movieID=$row->movie_id;
    $result=$movieID;
    
}

echo $result;

?>