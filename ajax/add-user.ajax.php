<?php

require_once '../php-includes/connect.inc.php';

$firstname = $_POST['firstname'];
$lastname = $_POST['lastname'];

$stmt = $db->prepare("INSERT INTO movie_goers (firstname,lastname) VALUES (?,?)");
$stmt->bind_param('ss', $firstname,$lastname);
$stmt->execute();
$stmt->close();


$maxidsql="Select max(user_id) as user_id from movie_goers";
$maxidresult=$db->query($maxidsql);
$maxidnumrows=$maxidresult->num_rows;

while($row=$maxidresult->fetch_object()){
    $userID=$row->user_id;
    $result=$userID;
    
}

echo $result;

?>