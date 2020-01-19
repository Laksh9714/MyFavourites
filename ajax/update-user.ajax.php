<?php

require_once "../php-includes/connect.inc.php";

$thisField=$_POST['this_field'];
$id=$_POST['id'];
$newname=$_POST['new_name'];


$stmt=$db->prepare("Update movie_goers set $thisField= ? where user_id=?");
$stmt->bind_param("si",$newname,$id);

$stmt->execute();
$stmt->close();



?>